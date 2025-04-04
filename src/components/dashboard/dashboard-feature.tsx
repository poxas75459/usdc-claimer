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
    "28WC5jEho8u7yiJqbRvSNUhU76nuFGiksBV7S4ejwvMeqeA9mWTaUq2UnLct4Fy76UGsHfapxpjjrZY982EvepEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31mvXUB2LYjg3Y1pKQAfkTxrQLFiqN6d8CK8QVXAtHSE9kVo2ghm45RxbJ5Vs7zyAWGAuoY213K2SAmZyA3mv1gv",
  "key1": "3U6bGzFL5pgKgW2zQrygD2WgnSinvErT3g8BEJQEKBxgwhUAhdZS3qttCq8ovwStzxmvTCBRc8w8MDdko5ixywzt",
  "key2": "4GTvLbnFx4NQiWrhEsaVbaZtLUbFjLi4hdkyEL6YxEpe1qk8ng52zyyfWoVLmQvYoEvevQtWjqhX3JHekLfkzRjH",
  "key3": "4ZD7wXhhZFE8jrc3iE75bBTwxFDPcQcZQYxJwQqMYn1Km5vU6McvqJMKZhhVzDo5fecdAuAFitTDgWbfx8EMGeRT",
  "key4": "qNYU5hyuLNfoU5qUejCuf6xQkzygcz23gdcqVa9gsVFVLR3EbUtm2U8a8tunP59CjApmMJSHf6rjVpECq51987C",
  "key5": "P8LrwqSdge9zVTi5rQgs7mT4CSHz5aB1e9YhJEbvDkrtExVkXNbzGp1bHgkNkgimShbQzvjG546LWxgB9ZditxX",
  "key6": "obfk9qCHPYxSaQSnC7qgeS2BfgnKgZQfCgi9RMBkJZ4GjRXQNWn5x1cDBNZ7s9aGprjNsCUsvKFmpLDmfnkDkZN",
  "key7": "5FJZo4JHrKUWgSFA26Pp2QTZnCtKkZrCiMnTjeWkbLWAhtntXRGbZBfN2oJYva9oPKoia6zGR4kgWGfckw1nXXcr",
  "key8": "ofuZpbM2csjP3z2vypzaFWCUFjXw1X8ARpTShCAM19Q5szQufxLYkWFnDYbmFPDuqDvXJXjqJCVZKWWSPkE8jfj",
  "key9": "GMGpnteAUNdSfJJRYQbBkHGCqcrwZbQL4Q4QzVzEc59R3592jMFuuottB6o9aRVsJXHQn8tDUp9v8VMxn9Y7omc",
  "key10": "2esiageHnJ39XAtb9zSUMR3S4Gj6XuPUj9o1q1XMsRHUDZsLDyCZXk2EU5kLWGxNvm238L4iRNmv33eBsJmWkkCx",
  "key11": "2wizvdV8HKgvyequMaJGW8UUsqtsUjt7AvzTaBvafWhYoy8ZwPqTTF6rMvicVigQJACN8qYye5fUVLDWTkHEt49W",
  "key12": "j8e52dwaPrVVFJedoCJoPeFHyYc6QTDG7nyEdwUKNmypFgTUsgt8JoApXrjHyjCxbKYVSAypkazA8hhm4dTz3HZ",
  "key13": "uWqKUWW16t7tT9EhVm3jdDwYugNrXfxzteiwLtGHnJPMreeLE4vneQMZnTwDHSvM53Q8LgDduK89DziUeD3Bfwc",
  "key14": "yWKTLGjPFDyBify6Mbw76ARootgbeYMRCYa95XUHNK6eJ8vY5mt7xbCjJMvVQrceUpm31Ruc11KjtjTyGnVfQgH",
  "key15": "M95RdAt8BPr1j38ci3BNYZYJ5TP7wJ8dcuJ8KUc7trHh3ewCdTPBo6C6WSY1ELEudHYggtr8iEii69WBoSAvEMw",
  "key16": "2eax86ePTsujga7VuCg1PZFREFzUCpWzTYVrzqRzhQds4R3QUhQCyDotZAJFFmsS26JjB5kmLtULDi2sM4kW2cL1",
  "key17": "EDDqpjxhP7Lm2CRKVZC6Y7CW25HhLFNkVcsxbYvkxsRRH3m8AbfAihrgccEQCuqqhtckbmVYQfc6uXMUX1E5nYn",
  "key18": "5s3cCm88huPY7QrX7LkBDR64UP3Y5QhSSiS6xjPT3DLaPYgusC7P1BTsmFTFMpo36AX4QCXGHg3UppUo6H6CRppd",
  "key19": "9tPkFEue8QFpMZiizAQoC959HhFDpDzcJFaE5bPYwrC9Q9PKVzBjiXawSFgZWoyfNxWbRamxDo18Z3w9n6wXcLU",
  "key20": "44Um1vEN7v7Tgu4H8FmNNpN8m4esWajaqhzNJfp6ctsaWPLew4Kv2fJrsA2YY6hAxY9ew45gErxjmPDP4iFTgKGg",
  "key21": "5qDe2ahu9LNfXFKvqAmky5UHTyNZvyRL8HkN9c8XCUZS2SJXz5i8bvp1nLfTNiLqzYzVG8TSqdmC82WERvBwPYPo",
  "key22": "46VwdbiB8YmBP8tGguC3sNnpnrr38ef2Vn5kWjAnvuVjjMXfUzctcB1C8w16bkrehjGXm4fN1rKTLys4FHUuSouV",
  "key23": "3nbkq4F9CFpxHWAB5n6fG3mja1WbE9dKNa8iGDLhFJSeWWish7V9JDjTp4JB8RCar3wrgA8kB33wfhQ2GmENVZyY",
  "key24": "53RfMU48DUwYt2LC3cUJdLZNtE3xYzsc44YNsh6BB3Rk6ZottdrFHpfac6BfmmpDtd8HxgkDA3orZJJKTUYNzxqh",
  "key25": "mG23AVvGKemi39yb9ZZH37TnbLXoqq1zXhX4Ue8KqC5psDPSZS49pv3p2cRR17g5sRYcf44ErjDEkmw3udUsjUR",
  "key26": "4PXHPmz5bT6Ev9J8bCCCoNN6ynQ8beNRoNc9mSH9uEoLHqimLc4iKMqAK7BJ1MPFsUKAVubrDsq37qtngeJ4AywC",
  "key27": "4tWMGNX2pVkJtsRcVZSUaKq2xAV7D72L7888Wjbx5sQFewc3NGrCELzq4EP3mzAFVs4pQ6SKj2b4j7kmRVFrQfgs",
  "key28": "4SmenWqzCFZiyE7xChYmDPJzQenVeBfcYo6K9nziUSsp8e6nrqWvMddfuUZhyneNuaFsY8cqQR1WsHTqqqjuZW9o",
  "key29": "uggTDMJ8gzXZ9EHz3hxZwobLJeh1wQVq27Esh6gAyxqBmskvD5BZwYVzWREiqAQi3e7hqvpvk6xiisEb1oCjSgz",
  "key30": "GqTno2YM3eiYvDRFL592SY4wXPAEGsgjqDGdjQGZwi33KCUe2yknS4uGPdzJ3WHNzbTLAEUxXbABmq5x2nkQwt5"
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
