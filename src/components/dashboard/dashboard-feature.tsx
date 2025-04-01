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
    "3LhSqDEHPpapt5v6P7iGMkNnu8woaLxFhJTfcgkF1z1qi7kXFg3jwqoXsdgVFQCA7NLTnp8qCnWpx2h7wqbuWBMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvz8CtDRHvE4dLUT1Nx3X9EDnXrb9qThgEu8oAGJ9nX9aHBzhpoqV1RdFirbEsuV2e1pUDenadtWnPteVHuZwoE",
  "key1": "5RGgRK7WWb62JCm9mj3GZeovFaScYQntiZiyXHuFuBjJWaVHnz3Tp5qqQn28tRut91Yxea31nutaVb6VuyJcYwhe",
  "key2": "3uCgpG4U9MR2Cu5GobL3gEBbmMBtTfa78ba2PBe9H3XRfhuS7UnxjbH19rQw4dcD6vB7WviBhvNWXhk8nVkj6Amw",
  "key3": "5JLmJUbDpVdyNVYvUpSsXVwJGHfrVJSAn4Fie8rewjiHmyiYeseXn5nwPULqkmTvwjyFWJ1BkzkzZQDcDhAgsaZZ",
  "key4": "w4HbS32bgUBh2SavMxDQT1zdUwuqHN9it25CbPT9qDgwD9diHobZkBiq5imuMrbCHRENmEPx79ukb9HcjWah44B",
  "key5": "5na9Kt9aBGrJxmWWkD63Navfzcnv7uuTxpM4cqP3XPHhXJoeTit4uwZQMoVXcwZUXVBXqk8KbcYiMDqaqKvGovhp",
  "key6": "5wVVKpTKyLMttkBSnAMwow1sxfCPWBwHvxVqvJFGEDunAqp9uJdUmG8zEHkjaFtCuNb3o9UaDKs3xo55UmkrSAyN",
  "key7": "3H38eDNqS1a92S4FKQLD5CTsr3NKjsYxnGX1BxfjcsRkGD8rTU41B5QC7XCqCnNeMKrcuqgwVKP7YKT6uiiZQuSt",
  "key8": "49K9rJKKwM42jsC4CtgESwq5oRob1GiyVGBFDhTFsFpJuhvWkcQMj4LQYi9AAKdJ9zjsgfmtZLnhLSNvzxMtVHDF",
  "key9": "4ou9ZBjoy4Xh9qcqRRij7jKf8MgqVmRBaKSEFc3AshXVdxNQ6rM8P8NodBiDfuUsC72TqdhZRyfzkLmKEhzmK7A2",
  "key10": "2KnTjby5NDygd1Uj8eRCLYdLUnmiKy9xeiGrDJWwyPAzRfa3egVrgT4Lv1Ce2wChpqeoLV17g3SrcXfsjjopgQue",
  "key11": "4BuLoMGQmV6Bb4jf3AqASUhXZEYWb71K4Xs7yWctUafba6iieDiK7Mp7Lx9j1aDyZf3HizzLUHnMCx26asHzaJAb",
  "key12": "5FaMX3Gse7k6t2NC5TTHZqh3SNQKi2zWkeycJaoeLB3E87yPLTPxx4aeb2t38dbRMfGAYnmiHwP8mMXKJC56LjKJ",
  "key13": "3Gw17rKDPTiWGZVzG9WquYYXzw4PJnQxgSjx33ebELAmKd5obLcGhWLNyod6xXVSfbdxWLacjSegrR5R5tEQMTud",
  "key14": "66hpBgDHXd7AtZBJqqf95bLX9xUJTeF1pDohANkkSKQM5EChDUaseMsq48dD1vTcgdiBat1UFSYWoajiCj386DVo",
  "key15": "38H2RbGy84qbT1WE3ZoRSrpUirjxNHT4nu3qfwP9Xnv23cu6PTLhtA6HSHKegX3NHjUuZZwd8RmEVPnf8mv5sTLR",
  "key16": "5ELh1yU17vsf7ALGN7wpu4gKxs6jZ3m6M3apkmF4G1zwZkrsS9uCHtn6LSt9pF4S2MuxgLZvTy6u5wfKS7x5zhxe",
  "key17": "3JZmiaAAqfsAQ5Fb3kpDFV24tSMjws9U5qFLrbed4EZtjeNabs9aCTu3M4MxYvdY5PgvahjjJn1M8mhobNWKZbyH",
  "key18": "5BAzPXZVUWu5iKEiFqrZZE4dafSm2PhiKuX68ydgK9Mivd8ei5KksXryze5nShj2fxFi8zdQ8GXTTdi6QJusw68H",
  "key19": "4u2Zsu32y1SD3zWYzJxyFeSTCWgYTg1j1N5rL4TXwYSEnG78yTpUxRohReuZvMnGYsrFCkS5ZdqT9vpkZCUbwKu7",
  "key20": "4jjTa2pfY5jrMF3CZKwCrjEsWzeZwtktBzzj8N8g14aMrzA58oRY9qzLEUW7KHpgsAKHGvr78NuPmQamY5wy3qNL",
  "key21": "3qNK4h58Yw5wJRSgNUcLdJ1BmTMCYFyZZfNScfez5YrrimDyBS3FwJccnY71QNjdV8sUrMineVjUrW3AhrycsSZj",
  "key22": "2jKEFqaBiXAWbmgvggxvng6XG8omqu1VoVsToL5hVi5V33oLnT7hj4gcuuGDVjh8XJpeJTP9QuGbygVQpT8r4apw",
  "key23": "5NDFwdAD4sPBLichzH653RB3zQMQthG8Mrjr4d3wQoP5b6jfhpxkWYZMq3Cj6mpL8zGbiegDBfX2UZQ7Fd4Kgoh6",
  "key24": "3g7uSa1AJyuVeZ5ZLGV8kLMkztTBzF2abVmrwSwmdVo3uyymPtpBLnmEdN3X5WnFHtZRsFfgQ8LscBoR1nFH7SnY",
  "key25": "Qie4QDxB6uhBvagQ8F35KLgf9AvrmqnQLYU1gQpnLwy6zNb6AeGT7CamfKGvzVdAuwhdGtr4M8NKYQ2reeH9i9H",
  "key26": "5Lnh4icj3GSfh1fEShDyARyM54ninKAtahRjatuY6aD7nhu3ChjZV2DgZRffc8NDjzkfbbHJjis3fnUiMLJDxbzJ",
  "key27": "4wC5uRXXMBsXXi9PBr875JNq4DWNrUEMNQyAhyYsYNCUWVk58VYqzZUb5NxZs8VmpmsTyChDpk2Vfyc9uNhZUnhj",
  "key28": "4YHwu4Ubg9oyVPpQCgWamuu3Z69Vau3F5XBJzeBQ77YmcqEKtGdZAy7CJ3wCZZWzuuSBMGUgT4j5Nv5scHeNVjwQ",
  "key29": "2QtPtvgdpEu5gAZPJKz4UjQGKcvUYwai4V5x5aadXm7g1QzZtEF2293TdR6ASndtXoxNgpCFuzpxdwtc4AjBpQZx",
  "key30": "5qhahyjSWvyfRMqc1wo74NJbbh7jYuA4ohXShq2EysWRbzBSYEUaEC4HssrcHrMByBW6V9RpaojCcCKiYNkUj9aH",
  "key31": "5Y379uvjyJh3Vh3RvRWQv1oSYAHxHmmMWvN6Ch3zPoGGrXrGcvHqsqnwtjWTHdkanEbifGPJRt4doC8urQ8ppDgB",
  "key32": "2LT8fMcL4wdrU72U3jkdVrZX6qtioa1pDyDDHQXn8Y5CZwShSyBmdnZ3Rdz5abWFbZGUYCR2GTqUBCXr7dnFfGUD",
  "key33": "3c7i7qgVi8JnhLxhZmNBbn8ef3VM4H72uTjuyP2xAWsAtSo8W9QRga1Q7VouetsjruTF8siq6vwunSNELKSJ6VGw",
  "key34": "2Uez3w99oYcxYcFDDeF8MxVCm8ZvRfUnzbjx41NqrvxFssHHijm8E1okithp3BMEZfc1ZKCuqZZHdx6e6KHLGM89",
  "key35": "3zehRVggj1C5evoXQ8cGfGY7oJkjgmpoPzvaEc9YZAj9M2qSiPFkH4aix1GExdtpZNXF2ujUZnXVENagEqFa2knb",
  "key36": "5q9AB1p6iGCjyx1WF1tFg7GfuVJcp367CjsHdcB949RkiuPJjq3B3EdQjD7qHkr8t8zN1Go5phWyumBCbzfMnnz4",
  "key37": "3Y6EfTud2eLNbB5rPGxQAfaLZHe99AVWyixmQaPhT19fnQBT4SXAo1UhmMCQmYUSHnh4hqv9WxNeHXhgj4aNZ7Tq",
  "key38": "2wuZLSvWomXoJHkoX6BzgNjSMx6zdFSagyYPABpm2SnaGA3dUqyzXXxBbqFkxGNzqNBJfibBX5jxnhPdCMsM3Hrf",
  "key39": "55CVf6VvPQToLSQRSt7ARADRH6XVqwJBN3S5Rr1JNKZmEQLVWnTgFvcyG43e1ZF7shtxFn8UsyJMhXN9gY1Bz3bL",
  "key40": "5LbbiWhrgSBm471q86eE9BT1MmMP6EDkR7G462u44XvtoQ3g2YZtMQAwPucRQXHW6ogv4QJwk8cD3L9X1Rw5LEnC"
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
