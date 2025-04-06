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
    "5KhS81syTsBmB1gjcmVsvYMekrEh2dpqmCXG2V7tipp1zgKELcDSi2x4xhbwE9YUMRpCWQTR7us8GVWBnaejGJho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cvPLXfV1aAtg4gJCDsvPxPVZTh5SSV42j91H8QBZW9ShnfUEuzyfYqth23Vp8qJxq48g91ZzQ7KzW5VDRims3Qt",
  "key1": "2n3LPEEgzpmvugHRQDpNpXMi3zJrCJf5X5ib95VrYejTZ1joW9SmKVhbNRtzDzv8okMH239JKKiXKrzNQ7CztY5h",
  "key2": "2KToj9iKr9N8nvVNCDVU1YZDXdvzHZYG1uYNDastPUqiAueGWHie3YRJYcXVgY1m1qFzYcGdyE8emojt7ZoFwzXG",
  "key3": "5MY5a1b3VxegA2k3Dr5UXyYP73x4LhQcngnmJhtyDRyw6dZJXdbscV8FaNvzze91SNhwSxrG9iqxrhfibebwASbg",
  "key4": "2q5GGLHKMLjZGyK8Yp3z1qh3NqX3fAGYf2PgRMiYpVoQ5iU6b8rJBqoKbSk6hhHeG1RUtzspeiibRiTyw4B7jYuy",
  "key5": "fcSPn5K1VU46K84Az4gVoBnhNcS2WqhV5jadx4ncwgNsbrZ4yij4DH6wL4oPzeYLX1gff7FsTBYfaEicGeCcXSC",
  "key6": "2g9EehtHKaQmF3FeqcQKrfbbHQrA8voB8UGP2oCUyaWTAjQtUn982TpTzDeJru8jsA3SWvRTzz7vDG6pvUbxB8Dz",
  "key7": "3gH6rL8RJUdAXnewSSv3bViXqyL3bbVpxE4esLsXfqyS6pxw1jy3dpJHGR4z3zUH3CHAehcM79XpAqwxEk3iUxk",
  "key8": "7PXgCssv5x3s5qLkmeQ9a2xxkme7mw5ECbcPCPEpZUFD4E6iRghVvAWBdHhQ7xVGajkyTagCpGUnb4SQEJLiVbj",
  "key9": "2FvxRcA59ydPZ5d8L4Eh2nHniFDYzACiupbd5KcYEnh9jLa8wZrGMnfCi6mphgadN44ZQT7sfxaethZgbVy4zpE9",
  "key10": "4KbQxuoX9228BxgKMn5cryy2B88VP5ScTNXnQcTwnfa7VZkVgNByptRgwHXQmqMmdeEVrCmXShkfkm8L95SRFQpv",
  "key11": "5c25SztWzTDqz5uB9v9T7vXM2zibrPDDCVAwoMTKR2135CyZAC8qV6SV7hqTazqo9k3VRHmYwo5WFhR6SLVrAfac",
  "key12": "7wbcops7Q8b19RVoENMtSss7GZGgfqh8i2r6fyBc1iBXe5XgAiYxVz9qZeSLHUtAzTTHJfnrGdsjxVXwYcYXeKK",
  "key13": "66NP2mP8atWMFLaQS9wWfLbkHHGhDqqqR3kZn47f3CXLoqrkpKZj6LjGDVKnseVJXNhZcazoPdBVschbpmbK3EiV",
  "key14": "4hRxG8q5tiuDhFkgKVkCd9DFQ18LSttz2yMJ3uNkS5iLDasDmrBf9gDqfnakn2RQcoxGxsHKS2oAj7gryr4HS5V",
  "key15": "4AGnm91yYube5gMHneNQ53jcjxambqRryqNEUNGZZKQV3geDmtgNmHqEQdYkxQazUs2wEz71KdZAhSzoQ1XKfJ8F",
  "key16": "StdGxEz2cY5k1QdiTBUk6QcqmHaYxtWqgYYKp1oGX9junssA8HwhKJWGGK6xj1kDmVycBuQVijTJDRqrPUMDoVL",
  "key17": "5yqYwZJBhhodGaSSbMGtYM5XuFkGSsRa5vXZzYjtpGRs7PyFNbusAy1HEJS86DPkMygwU6HzeVmeu1cB54Ancux4",
  "key18": "5PW1FFaFUVDgt7hfB1DLpvCnxN3eVpTqQVtYSBxKq8xWojXGmBi2PLGXbfTKJevYTLpM3JUsRci7XpZ2x94Kyiur",
  "key19": "2beKr2nQa9uDjktGR1rBTExBgrRumESHtnSsqrSrew5wvuhuigCQ3KufPmepSE3rNgx249XFr1nu5Z8sQZNknubP",
  "key20": "2JNHH3cb6mVGRZdmJwfEiTnECqba5i9HAJiiKoj6akzXXfMmmPnu5n4hMDnRVta1nXyZJHRZ7Ncmby2YVD4PtdUE",
  "key21": "JReUn1eq1HE1aXvyLffWYEhGJHzj2awuwtjHu3kZPjjV3erP6x6ifhKa8XgpTrz5twFeXrHHUjuhv7JcuYZ8v6H",
  "key22": "2SAeaUnLbXytd92nFkM1rz4N43TwghxDrVqfTUCLYtMEBXGzSXLxgSSQdqsLbESsP7jpUJcbHJunMmovbgsXirYA",
  "key23": "28UY4CAjpeCPZf4zX7n91EuWzvUYGRgnCoUnDtBY2PqtoHEvUZkUNe8BoD6t9ip4gXi9R5SLub9sNzjSkwosFMfQ",
  "key24": "4p6LRcjjdKCkgMn6YNPfkN4BcsvrBFe8U7xe2qwkAv1wMdCXhy7K3No9jaDmbc62iegc3DfRT6YvEKdGE1u6z3NH",
  "key25": "3h9EKdoc4543VV9RQGMrJcunDhjRkGQ4WhAgQ9RXqaZg84Tzp9jPRXL3zR1dKsmM2QWuddTUtZkhaKQogDPWwML",
  "key26": "wnvbt5G9ifM7B5T3GDmjN16fXKwgxQs84gNXycj6tQ3NjQrQuUAa7yyMFqawEUGgFGiUoyXxYEgCy6UYdsopdFU",
  "key27": "2huAhWYeR4xdedTP1wdmUfbKeDbTowqKubuND6aaub72Ky3Q3ST1tsw9nnTjm3T6WB7A2G1RHiqicj94joHVTJ5g",
  "key28": "4RzjDFQR2G5LKH9LEgtRXKC88onaE4pRoJ5oLpYASgXnR7K2cpiQ6B8JosSYTwskJtBC9SNZnCHP5ocM6auMB1iC",
  "key29": "KzrLEF1qtLWuapVNBWQELbMQsLudYb8ZEDSm1GZnFBcayFk39fNHAqs8AaPQjkRHkhAgvYG32AhicC8bq8tWt4N",
  "key30": "2rUd4cdX6ZNDXVLyp9JgcX1LCxHD5Gbp36VwNWM5D8o8RjXEKq55J57cwyZuuKmkqXAyRqTrDFBE7rvb97MP9csZ",
  "key31": "2WWk84wxRa8YVL1uBWKNyqbbZUWAnLNGm2NKt5SNJ43mQcrrtDN9BrYFQh8zVPZcDNPyFuNjSeJg3wXxzCfNb1RC",
  "key32": "YCQddGJMxap9Lq65pawqkNawXUL52ruG3G9p8CRUjefnDMPpxQQFUHtNtjJvvJSvc4N3hoV1pzD6U1TDE8CMQB3"
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
