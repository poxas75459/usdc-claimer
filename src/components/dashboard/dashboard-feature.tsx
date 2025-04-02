/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2AA55rJ2eVJjAkeoSHEHnuzb2QWvMJ2C247jWgdgPq9ULM8UyMeijXLcYN5yfVf4GqnLSj51nytY1eNFvJ9Gu52a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44zesM9YR6QdtRSeVrsTQma8PUqtFPRqarsq6D8YiTNHrJqLnCQ4JyrU1pUQyyZnmencMWrxKcvCGPw4NEY5iKZ6",
  "key1": "2ni4mx5QfYbLdoCGv7rwG9JuiENR7LWivoh66vhh8XhWkQuywxazxEXXmNHcYn1TgoVxPJ278AjYxtfUmNYpM38v",
  "key2": "hbERb844iFEXHRMqGCDFpXdydrGxS2fDvbw6JV1MrWHUBLNEQXd3yHG9rJfoQfw2nUS7mX34XGgQu7MzNsiFDYh",
  "key3": "3W2HhLXErJjJhYwU9u6Lb3SQvi3teg9QNj7SmFjBDkMwDTVQETrZoyfzdkXWL58NQtTDfHEXqJDaGHjcENfa5Vje",
  "key4": "2VoAL8T8NybThL9Ne2sCcFVdAi4JpKBQU5wnCLNmabuQLxniAjBi8kouonCfFnccWJrxVuJZ9FeuKtz58BAVRB5d",
  "key5": "4ijYmRAtxozqXcLbfd32nuVbNd6arJhDRTXijtRZVFsyGjGzADMU7zzRoZoH5AyjszEEgBmwXCbqHfmphLQFEwQg",
  "key6": "2P24otCZZ3fcpdr24cSUb4L1QWcMrzxiNoZTb3MNYy7kKMQb5Dncs8BzJcEjRN5XdeAQJ7YyaNKDMsjrazuvTec5",
  "key7": "5LbrUjthgLpQjB18RkLDood9WbtrkFvdNK9egdab6SYEL1SwEyGeVvqfqQWHwZ5io4RoxmEccbnumGUdeKG2DQ79",
  "key8": "4wgV7jLXnFxWqqJnBc6wxAGEsqo2M2gZumpntk9esNSYA6AAcd6xQWsEANTubmRCgTBLUFkLyvtfne9y8S7MrK4u",
  "key9": "V34Bup1BmZX8NgSh26TdS8iAmyikS3fAuq8erQ1m9piwBQVeWt3o7ZPvVWNY7LJ1UX7utcbLnRQ9WGcc71ssZUZ",
  "key10": "MCYNgaB5sUfpUckpoAsCqYb3gUuCAkhxbgvokC5cJhWdMmBEgB2BFS2bkpbZcYnyAxFhi2sm1UkJEyA12keePHc",
  "key11": "5KqjBuUB2cDU1z9J79SMj4iusLdTx3o1axXygaag9R1fgaXibtGF7ikmZTyw3C8EAjSsVe9UaT3dArk1NCJUT5yY",
  "key12": "33yuZuYALPDHPCh7Jh3ehMrfuBN2VH3q6eVXQH4HC6BiyW1GYj1ZWPGRQNH3DzzRtV53Gnco9Qspqj8c7QNUDsnd",
  "key13": "1H3w2uKVkmFKnDorM8yup72CxCfbpgvrTkRXqayMgVJD3NuKCrAVTaKSRwDBPBkbQ51DZLMpHKUBVX3cnHEXXx8",
  "key14": "2zjKscN9q5pB4RXtXJSTPxnE1gWRj6nzmUxn8VRag8fkb36Tfgn9AgX373PUmXzDSL1ZNdLogeYY8eMUow5jm3op",
  "key15": "2LPbsHb2YxifJoWHjzqFYXKtaJmiVtFBbZSwpMnxpnWdadeseLKroYMg242WnqapLPfX8kKfHR2Do8GGWQFVrT32",
  "key16": "5b1RPsKrbR3E6CZJtMR2F7GALPd536d6WQFo3N6ucTmgdR9hjdGcvPWmAfUMJXiTa9dMihZLUsJqsTrCiw2V42wT",
  "key17": "3LaHxNWuLrNeHcULwNXyGodkKsonVTGSt1nVmf2YqPmJCWMveEP1TM9SvHmGkA2RRve3Yq8CZTuahsXYojEpQRPn",
  "key18": "3YjHiMxTkDuTYUH9EixxsiwzZMJzv2vRDATq48sQ5BXuik4eGXP6qjS8naY5Rjqkt8VXrRWZhAiWDtEtMaVETzjE",
  "key19": "2WWGJQSNE5kxNHLxeCm7VsyV4FcWNqyhJst2SkUKb7pQZ7Tf9SgGmzz3ct1tduyDmKijpVNH1ojXTT7c6P73ymbN",
  "key20": "4SudSXbDLsNjTt92nEH49v7HHtoWmD7qkzTViJbPJCCqkJM4rmuXjwC7eNpqu1wTGkmULY8DBPe9ur8AUbXJ2KLN",
  "key21": "ymZ66L2vD8apqC9FRPP4aFraCqpXjeEv8t4MjFy8hDxwQZawUfiKN7w6YfPvFwWtKwsd5hezWSxgnSd2eCaJnXN",
  "key22": "vq6Bwo3cMY4e1bbiXPQxWaRKmApyMeSKb64fvaJqE7KDUuS8S4Y9Hi6hBkKVDyhdkZmKiSpArb5RtUyUzfNAySm",
  "key23": "2xw2ZYXzXrvWMhHQgPZkJewbztuRWjaxZ5srpQZiuvaV4oXa4VEN7mt92zKZnTUaJxwiQkwgDN5P7q3rmYDmhVrN",
  "key24": "KkM6BAmJf1KF1AkH33ntASz98rqvypxCC6swNgU3zYcZWyyWUncdgVuQCDLijj2P3mM6TvqxMCfnVx4MSrp14CZ",
  "key25": "NRM6bHVYZztobAXXYx3g4HxtqnhV8WYUqfDj4mywfdebuyBVzsB2orjXuayLAJBkN4jJ2wyS6kcAyKnzNyxQjZY",
  "key26": "2TKaqmSCWXZpd4h9Jpv7zM1SX9gw41qHg1Zrk9YEJnKj8HKAFT4pjMZ4bwiUEKyvzF6UgUDA2xAccLZVP6eiBRPN",
  "key27": "7z41pqfoDBYaRKc32BezXeECDVJ68qWccTMp9vp3kdtJPmi2QExLuXVT9MH2Xiuk9FKV1k7VHuNW5Pxz6hh4xGj",
  "key28": "43PBZb4htEDUJtzu4YunghkqTudgV7bc2rhkinx1v4Wq5PgAuLoR3QABG5JEHfwzCKFFvnKbX5vQvPDg3FEMJQ71",
  "key29": "5oG8Fep2Qt5Wesqf8c5AGXsCm3xRUKjUDLPqAu3Gy6PRFVfNZt6VAw448Ucswu7fphAW6dDQeDHKN8QhFrijuMe7",
  "key30": "Um4q6oL8SVrDeAdVXU6ZjJKtzkomC9dWrjPRB7Pv5w57TAtj8o7JVUWA74KibUE3uE9e4bN68hJRnU8vAo9nqQt",
  "key31": "jCCTtFNtVhUz6JmWYFY78bUt8QAKQJsBhV9zG2iLkAhvDfqdTyfjpNwM7Xi4D1zbXgs6WesKZysxKjwauyKs2Y4",
  "key32": "3d6cGrU2jodcA9Qe3pFjGeh15omQJBfJGKFPX6jAfY14qQXcTpeLVR3KabtRVCiZYRxtwuyQ5MjEfboS2guEzGNW",
  "key33": "4NoTP95vfkuDruXRJY52UrvVD5b4FhNKPDiCkrtry4k5A7PWunWyWLEhhWBd2zN45iuRom5x2WGbFYAVWHBDizHW",
  "key34": "2jV68iEKuuKdk5CF2gpxJYBtboivdMVeU3CAdJeK9vGfYFizZnMYRnwrsBFiqf4fbBEEstxi9TAAMQydKeodRi6M",
  "key35": "5S5amtCU5N1dCCe1KHYtNGgCGzCjuhnDiMVvZkhfUhkHpwmkd7XCCoVgVdTbTD5h53Sr7dpSa73Uc3b5fmEwmeWw",
  "key36": "2uZP7CTBdJ9wjBYyQh7Ykfv6CigULk39Nk4kbEQKbfADpHJkLz9MmSP6J29DVtxX5Xb9pXBjf7pYFhqjePHtYHGe",
  "key37": "3zDDpqrzU2F71V2WtbueBQ1NBoCpkD1kb1dAURnZeVrezkxzLMCLJ4rC5ZPEASHr9mpyFr4YHBoMm7augzKWDG8Q"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
