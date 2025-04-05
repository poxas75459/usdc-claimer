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
    "wFBftZo9F772MTu37SoUDcqGD1QYmKTHTs2Rk79Zi4xpNrabw6he7LFYHh1tiPLd6LTAXwbPR5mCjUSi6LayLJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39SQjzwffuEACRBPwuAXvtiGA1ZbEQQcHY2vpkEu6pK7KSgSb3rbT1ZqEkVJfCnYDUMjUcc8edi7Q1wuw9gAi7j5",
  "key1": "GoTZLN2FkKiTs1wisLhg3U6kUJDeCtXQZtbiTBFkV9eEvWAAnMy1orouPhSQbQMfjFvEWZaT79MVU2SbVBbACiv",
  "key2": "2ScS9U91Qnp5X4sFnP7GdvBSzAFn4pc4DzDGayZmYSUNHkXAVYjLXYp6mo9kRkCQCJ7u35Ud5YNK5XspJiU76hoi",
  "key3": "5QYMHMKxJob4LDL9Zno97tueEABm37uqzAUS4qM94CMkkr2WwDSyxYUuXgmbe4ymZVxWN8aRNMFnLoY5qzb7gaE8",
  "key4": "2vkVLq29hi3k4NgKmL1D2SPLidrc1xtBxJSdpshskWtfxwBCAoGVtrAiAQLedNZb7SbXaTMT3w3vgNwMMJpzNk5q",
  "key5": "r79pc4h7nomhje4FN5TQdVxG5gqVNejM6A1Mwen1vTeRUCnYDwpUZrH51K3TLWPqHqpaH9j9xsToVq7vVVHoeWj",
  "key6": "4aRtgCqWsh7fx1S2hkineBt53zwaydayBj3xwjWzLyd1hRknXz3YbGiozw7DtMitaHpnsCeih2ygVoG22u6dRH2C",
  "key7": "3koUEWVqaHh9E1qKcHCNtEd85vBNzEKEsHtQGh9TiPZ36Y2MXxUssqhkb9TZUsM9HY4u9qHPyGSYxroSPsFiHr8i",
  "key8": "5TyVuNCp9BCeQEDUvF8i2vC7JeU3feem4vHoKgPoMRTpka4PLjgcbQL6zvD5c5asgFZ9LHQfdgbBtYpbUpbynXCx",
  "key9": "3EnJUZAUFqmX6s75oTDmPSDUZiur9aV8kfpq41b7aihuAZDLqQ1ah6Vy87Md42jLb5XYWkAXGfpbgiET8UYsGB2z",
  "key10": "2v2NEW1UQdf6Hw8dV3L7KJK1xccMZskxwBi6Ji5pXKdprzxHwbknrzk6RX254kiMwrURad6v277TmDhumWiwzPtJ",
  "key11": "2zbRStcmVNABppKJon2iQ8dt4VZurezi1tRCEfbpEvGeBhyXzSf28EZepN9NcHTP2SoGvuNdzoBBVHBWpbwyhK7Z",
  "key12": "3v9B4ikNE4CPgnRAx2x9o5iLgk7NzDCUuBXjvdt6ZtDVAYinJP4DGgjTz5W5MrdGrmkYmbVJbpibu78D32s8Fkka",
  "key13": "3TsuGP8YP7vqUcmBjzAMzdxcFk2jRuLF82jhTXXGQKpouKqYUrjhkgLTGaLm1WXCU3xYqMGSjZ8XXrhj2kRGXcDV",
  "key14": "3aRCMXEUTwLUzcEiXThAEESX6vYhug6atJDKWEhnhGt6SHR8JphjAyaDQvf6mSCBr2UwmryjzY3ZYABTbjnUcVPF",
  "key15": "4mvz6vTsMzQmCHwXQ87GDZGUdBLySThNSre5zgkS8kxkBLmHZTpN3Rwf7szHhgE5Epec8uhGkijTUZjtRwch5kQ9",
  "key16": "4Fzu9wUGML4sAMR8LxHaQyBkwe9qVvQpBhYqUFENs9Msu9U9Jeg6PG5UqsUXsYqixBvPYF8Wbj6HKX9Z6vrMQNTf",
  "key17": "3Hug7CjtChqfxnxwWKnrVrgBYUEPJFSHnEsRPwCfSX488gbFTWqabmJJoJKDmoZF348DaH3SiSo7tTd3b7LNpowC",
  "key18": "5KepGiwyfnD4oLKGKhF9ey3LFYFiHZbCjDboqAxx9dVBL4VdP8gaxH2QkL9h7DmiAYn6mwaBDx5r2G4jj12NLtJS",
  "key19": "5HTUobuS5XtnuWXqiEMaEoKPzc7sVYVnfwNN4buy1vTxPZVdszmF9tfybtzWuh96NHR8kAqwMYLaNtmj4njjSW68",
  "key20": "4NvQwiq5P7AEazzsTeQ7q5AyMUbAXTD6FvdJ1tjZHfBxRs89bgEjdUAXoandCuvbFusyk76BfATnaGWWhAYHkrwJ",
  "key21": "CvNbksmYc27rXEZTw6Xzu7b5Ni4gTuyW538iBqAgH1gymBwTx6koMsgC22zMGG29rD4E1B64qmyC8okrwvGm7et",
  "key22": "2YNPFNopXcFbfaEc2FVQgdg59eBjzgbJUwUceSa7bsbRnLNm96bi9jo1eBNGXNfVpWWr4HgG9k9FeaaxcHTpzY59",
  "key23": "5aGQVz4AzkbD9BrCyqseNgwAMYaZZnd4hdVsveULXum7hAeEQmjPAFNbvvepnTbzonUvkA93ZkgYDE9a5XBhFLi6",
  "key24": "YSqrUvr8XPToKa19bCGJ3MZpKu4GohrAjw57HDcDo8eovs21Xr8rPrnEpDmETJujoeoegqLJYMNCWD8i4F5QGK4",
  "key25": "5PjZrkY3SJ4e6vh1moqyRpJeBqmxq6PURo8LyzgJxGVRVDbv3KBhyaQYXDxuPSQCV6wjfZwW3jwL3NAFgG7yt9WW",
  "key26": "571CinKgbeaAz4JbVjq9shrbiMMVJ1xeEpSURAsnWEDPH1ryqvQyUL2fBb7ZLYj5ubUpsMPMMqGTzoRzRGjpLjDu",
  "key27": "96WgUJHsNBpHWQmwN9ve6ByQrre8oxfQwmTaZBa4yKW2wQnmy7uU5kMqWNc9L5MiNehubS9kRSDpuUBa4iRfdgu",
  "key28": "eSnkL9EtXTFEKsZ1kKvD78hscYkYDAtVY8yrV4XSz4mDN2BFVCjrEVFKpHohVb8ewQi7wqdmH5xyDvEEBqe77yR",
  "key29": "5yecqQKrAAGdqhn2WoaPBQSf3pHMbktSFQxbKGjiwPNeAovaKnjV1nC6MEzDtkPTXbuUzg3vWzrVESUMdaAJqT7z",
  "key30": "4oXatXH9fzQDGhFyRSV8wnG7z9nFYhddEwbq7pddcnpMkDG4xaovLAm9RpFDL2AQy177h7gunQTXio2HYNxPS9ar",
  "key31": "2H74GxEtfZ2UyT2kzL1ZeZfse5PxXUxUC7nHwbAoxx9VE5KnnuuqHyjjivwGXb3maczpuN8njNHvEGwm5yKaeHr5",
  "key32": "2tKyi9QHceaUNSch45UfPYRW8dvU1G3jhghSK7Xhrpp8rUzjbqZC14ev6ycRMN3S4E5AY9TboPsdPrnj1XBoP6vD",
  "key33": "5fAHnEaHDFDa9853WP4mjns87F4Lu2rqgVwkhvx1S3cYX1yjGYrnRRSmonLHb6v4iFrp5rX53W23qaBFdAVefGQu",
  "key34": "494yT64fK9cF5XdYSy9ju3oA7umc3YTWUMNcTgXDNsiVArAFdmssuAjrM9kowyA179ZMHaFwHvcNgtnehmcMDp5E",
  "key35": "2J4osMf4G6s4vWRWKwFiqUdwoSs9sFh7Qrxh7Gx5T8dZQS7cMWbje4cpS2GsnexQpzMmyXYpotpwsmzvq8HAX4Rr",
  "key36": "qEPsWiDgLz9uvjgWkP3KYTsAGh26Crk1nEfMGWT4o9rBQS56JSdT2tYFVFvnK4j1KDWctHN7dXD2tcHz2trk112",
  "key37": "3fturgPqKRHrH154e29d9HgY5PU175DQiZMuobauQjPeR4mX7CPctCGXNq7Bf3X1sS9ksi9UcJVHcwiUnxViY1FM",
  "key38": "2WurSKNtmq3t1TYrAz14w8CnjyBPkDnEPP5fse8wGXmoGFkj9Rw3thnr53gkVJKbvvRZD3QodgPajo9khxuRLsBm"
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
