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
    "5rKoQ558QSyaGCHYArHknmLZ3h3xS3wVT6D142DmBK6CR66qQ6MuzzsHvY5zQxc7VJeJbuuQnpbFUAeshbAPBMjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hYmbvx7wTvv8axwKiGV5SfnFxV56g7LSC8mZgExqJadYHt5fLRz5qNAGYbLoM5BBCB4sAR6Xwwsj3oAvETgB3sG",
  "key1": "3uXeccHTXvkRHtbJHaKJT6wUZXRx6dzJM7qcDQS9aM9StZzmYsnGG2tuwGtaJWeFu46VTzFDUbZ3xjf9tV46gR2F",
  "key2": "5s94DqaHRRn7cYEyvW1ukJoABDKE4Doac9iCXYGX16BAKzv1NvEgsQUgvPQoqEozWU8bQghe42GhWSHxCyuePvdc",
  "key3": "5q3FTddbTgMzW8nzKEWBdZQB6DbTHStPdUk8LeWxwAr6JCydmKXj8hdWdfbMqmAq5P1N1NPRgBEr4WnUkngvDUJF",
  "key4": "2tRDFUVCfghe5Hus5uLkEWWvXED8CMXcbdgxF2LXRtr11tnuMTQSo5jPZjxo5KYRpCEykD2x5VQP2cowR61PsfEW",
  "key5": "UBAa8UGmEoKPUFKH9yKfwMFBFznyBkcHp4vdRrQmepXRWGmEwfA9wgqs6vemTnXXH1gEC7PdT7n6y2aJ83WyT82",
  "key6": "5HkpCZhJiPVNx5JTYQFza45f66ntP2wmP4VFa8HKKaspCCq45T6diKXPeW5Wp6bDE72fQvgwaKt7oMzjKHSxGq2R",
  "key7": "3uvghdTh5RGeAAobNno9VWVnTSwNsPFs8qYv4W9kD3yr3ddPzKJUz5o8PsQ94GXRTxDfn2SnvA9JwcqciwWCrMsE",
  "key8": "2umGU3tfxpVamJbA3QRMVX4ZjXWAbFNJ7c11m574GjKKMMDRqn5yjADK5UkNAye6Gx6cKR5dE1MLFX9Bbts1Pmh1",
  "key9": "4FTDYLGQkntCmc7nGhd42sY7VtEhBWvPKUyLkud15F2s9Bfbrpp3FdjP4CsvjzELqsgKt7sQdZD3spL2DvMK31YW",
  "key10": "GL5CwFqzHb3iQpPgSLgxtU86WGdXyTMbTpcxqMYPCqPQzcRQxaUWvvgafJDtjZFUjBnbPv49RiipBk9xAK6t1QQ",
  "key11": "LCzkAZmtHFKmJtUpJm598WhS4PrLVnJNxZJe2jH8f7bNUTpq2DsYGp4GkAhBtVtBURUHtenUDcDpgnJBh553JNn",
  "key12": "G3vhc3rVFtDK7uK7FiWFiVeae1YXp7CPerU8PpVqSwRpWn1552hB9Uxi1qGPxumxjs4bLufrURRMxdJt3XRnesd",
  "key13": "BGyjJqrNjnr7x4EDCovSZJpd6K6Rhrtt6LYYJN1DhbH7Rr8vcvRN3sDhpSY31XvhbposPgyyMdUvHazqooc9yR5",
  "key14": "4WqYYrE1j9BoYhfWUxTFCiiSvgGNTSe7ZFH1RSKFkaFLYg3ZjfhQy8wdneid4R9qvc7shpw7Y68VoYgXwPDvxgiL",
  "key15": "5JtSM8QEA8QAN9K2JmEVyDtJsCCWASJa5zYqL78pntY8P2L8CkUh4BPGBURix36YAWe4JrfFreXU4Mids921UCT4",
  "key16": "rsEZAfxNMxbRnxKKS59pw97ebYMTbgZHo2DrtScReQiqLCa5kHC45xRvtbxPGuA1Vkbfgpz3emkgR1vkZhCrPhZ",
  "key17": "2FtEJ91W2e2RZZRWy5i3WHbsJwmqDzZKdTTPoYw91QnQ8XmLBDZBPfPdrqjFQmGVtHmYARdUqkLQTHrCXk7S6R6n",
  "key18": "GZ5N4E1ysB95gg6z4kJpGeA1xDAfMZwjxpVbXmgEG1vR8SCAaiZFBWRN3nti8rpDokxpt56v7cY4LAGEwzUrXAm",
  "key19": "4H41fVqHTdEVhvowZEr6BmEbSN51wcc8ZptGgTDEGBdMY2TbwhL2tg6iks4FK8JE6T9Va1Cnqka88StHYqJMLhXb",
  "key20": "5TpZhn9vGGpxqZvUhrUgMoAoRxSCJbMYnStbtDvXETEKd7Pcjk3z8zJmUhz3oDNo9UnXnfn1iRnNkbfBrRSZaBBu",
  "key21": "3MxjpzTQtog3hpsqusuxW5TzRbbjNjcdctGyNhc7n3VM9j6QbwS5y7zuUJP4UFKBLzccgh7XAv7bWXDCGzjP9vpQ",
  "key22": "4Fv628dj352Vuw2BAU4KCPETBsniRVCNiUL5L8zQ6k8S1iGdGHE97WLtA7RdbKTs7GQ5nBoNyf5bpbAAT3u83HYA",
  "key23": "6LYgbcM8HZVhWYb1QbS7ETZHzBQjbREgqzr1wiuLDmYX2sRRQnDfukEWGJSQSA1nJpbUnu6Dk1gz4q26vhF6oHk",
  "key24": "4XKze5xreRZgvyjUowtGNtUsHJQoakGYs1AeRP1egLaEz8JnoBnGkYSHkWfss56GzGe47K8H7D8ivLAXmVEZW9pW",
  "key25": "5bA4xWdj37SkPZKRJiwXb3XHxQr9CK4w6RomuD7YPpKmB8eS3Uo7bCN9CLMAaMocP3wiL4ZqSMTYti5nVq9akfUK",
  "key26": "RZiinUytbTPpKyu8z3fFBTzhHY9ERxrdY26UqggCi7QwRNmVV5PErXtKkAZhokx55y4BfaKqsJPjnrKbV4MegYa",
  "key27": "2tmUiCEZceDWNdWRPxqoroQbs97V7srChhtvDcH9j3xUYFUwxPRyUrMQ9n7bKqtbcLfRTKDMu6sTGj1szaq2Vw75",
  "key28": "5ygcGgoD8UN5x46GtuQG3mtg7MBimZyEGctX8MJBWEUaGNkWAdBJonTSbDuWG5bbiEPCoDe61jNR9cebysD99uty",
  "key29": "3cgewRi6aBWenF75Wun8hwAAFrHKSqRZf1d1kEkrdqfdVnWbjyAo6BepnjrunMoDYpy55px1Fb4G5B7CqPC9rtk6",
  "key30": "o2jbVt1TNVkxuTQkb4zE6n3UZFfyGLm8QCCG9mGQz2kuCtPad49T6PbsWsoJx4z4dxBZ9SoV2zsRtAsydPvwBb1",
  "key31": "52SUrAuMopbGVuAsWMx9Xidy6Qyqs3rMDTv1dJ1DEbTMrWaxefCq1woHqcnDJ8jUAi5FJpnXbpd5NhNJTj9gwSLq",
  "key32": "2vWZju7GFrMc6bHack9o8HL63FK5zQc14Rx1Hh4RPNhF9FqBUXfQq9nrYH4fs6onVhB8JkZaDrp8tVxasDKeik31",
  "key33": "3cZGFKo4XonFVkgHdbC6FyTgNAj35d17gcfwhwXpicdzVyZ8zTCqeGoK22iy3xFUexmgRHgvCrS558vN4y7FsqtE",
  "key34": "39qTzrjhgYEfsSyB3rrEceHA7y29mV2E5F9jHArYuxmcLgBqHv4gCFnt7pbYbpXXhmd9YwcXSZYf8ctTvicJbASj",
  "key35": "36z3L182iZfQNstMjasRMM64gCwTqR3Z6dC8VXHCC31qWj7WtE5KRbq68gq7X1uG9ZMewegqQHZqjQuCTKs8drs5",
  "key36": "4kvrX5C4zXEgcojtQr9KKdBF6Z9wZGKwvgRhzg5wiLtX72bFetsKQJhcjr4kPmQD3s7DQHKV7P8HFYUnMW7vGX74",
  "key37": "5zrwoyR19JvBWvGeEb4z9N9xodHtgxoemS48Pj6myTr6GMmUUMo48mr1NduX9UuHmsD63kCKjyLyt66Z9r1xVy8z",
  "key38": "39qHFfuD8ho44AUiHhpU4RBVy4CNvwZdKe92sEWVs5KYZ1TXrmEywyXyGTev7vGYjxxU1CdfRFcjAcbXsDyKsJLj",
  "key39": "2txZMCiLVy9k8V7JYQf1JW22F8zn6REX1WfEZAAmWHbSjABbZnbzC4YgugRgN7Pb9n4iTsBmFz3hDb8kPZXBGtpB",
  "key40": "aRPDXDs6MQep7qvgBBjqJfEyH3fswpJx7QSKkFaZ1AuXjRCmCaMdtpaFhJn8Y7dstRQkxee88vUaspvimo2A8wE",
  "key41": "2uvYf7KYGPzT8xa4YLW5TZN4hZP3eih4Tacda3nL6xh5DxuTeQaJJLG5bjeCWkV7ES9iUBVy167zN7m8yKJWVbcN",
  "key42": "5oK7qdgbUqgv4uk66TLFnpWTq7cKxKjXJDCux5jVJJW2Ji2oU7V8wjTxYZnx5sBCGsW8dhBEXjjuJ8Gp4SyMzs12",
  "key43": "2S83b7qvP7kb5Cac7mRoBnufUun6vzAZazAkxqjJJCZLybpCHYygmALb83ikVbt1GYpdcze1sgmpM8r4amJ42p4m"
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
