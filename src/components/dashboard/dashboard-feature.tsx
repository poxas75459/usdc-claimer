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
    "3sCYV8FpD1J5brP3Xe85MHXAgm7mUQiuYYLxgxUpH5iJGSMVdVzQQRvZPnkS85XE1ck3cJvwsWgzp1BPEvUxnkm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uv7SV2MJwTfBVWAuxKgochH5Dh12Kkqp9jZszsUcYctm3tY1Tu8xuUu4YRdj5Xhm21Mm8kkWUrctSS2AGmsMsFF",
  "key1": "4q1q3s9z1W1rVEJzhEnjbdw2kzDt5XQ5KrWXiJTb41WKjs34joqw22BazsWsYyiAfNwbkauFzit8XYChgxSc7dNE",
  "key2": "3FUFMzUfif5xDqvnUMjcTRu52mYMs4bYGaegt6oT8UZnaTGLFkSNH8RgCqtRrBbmQibmXwM2NAHeY6p9pD81i69s",
  "key3": "5NSCuDMMDSE14SKNQfHpWr5MMHJKKVMfaJj8PX7Q282QUuFiVxvic4gYM9H7TMkK2RazhcqFwsUGjb8ToFMPXCCb",
  "key4": "t1j2W8inKQQCqanMLgANkztZj3ZfkxCs79oe51pRjzbMPdboDcQCYe5JGeFcYvnofbpYtCpxwpBN4zFWNEsyCSX",
  "key5": "3WdQtetMsQ2h1EYtbfh2GgRwU6UPCHQuLrnpmddDm7RVeaXrGPuY2Hx936NoVM8wtSiBWD2hUgSteDFBSunQbyi1",
  "key6": "4tUp9xzMACCTWhoCDLFiXTZjqSNVpjp59Bx3LTgJ9tqkZriH6h8N6iPZwr3iGxLmPc2N8vSkto9zUwxmcBdvipg4",
  "key7": "43C86Bc96GvFYe3GGTCFSdHSzFLBRJZXsuz42R6csM6hZSib28q22cTMBZ2daokMCZLmUqZBEfQ8biSxZ1qzonAz",
  "key8": "2dyLyXuBZfT9jxmHLDanhSDJHxgv8TN3J41tnZMytTB1xTPiAeL9MZwTvZhcfC7r5C6Q2PtJrSBmmPdaPdkm7hhL",
  "key9": "2jaU5ouYUk64Mjdxs5XmvC995KDBSxvSDyTQgJMFtTDPCv1kRXmuYb7eofRQgGoPeEuqMYe8bzLqE5BEmib5cWTd",
  "key10": "5nV3YU9yHfFSGffiNVejt5k4WfKoLNojf5i2zN5sxWtTomXbDRwEsqYpT1WvrwQK2iqj6vsjTYKCoNtUTbqfTbro",
  "key11": "SDBGBCf9tiHbeDJKZgvMPZr3XsSskHnScZTsfStoHnub6odKjzsS1DsjkPRtBV6JLfLGAVxZHGHTQtXKcny57xT",
  "key12": "5JgEFnAB1s3fFarRupEcGWUJ8nWtgoKTfLfhxSqnAiZXNkHDVbYFSUSLZpmcWSYXjsXMuK3PgjGVxBrFeMENKtr7",
  "key13": "4bfvEnjJQAaWDwcEzjuvHYiNYfBQkK4WpmhUUhwKNcdvbtRLkh9RcA657uSwQcxpQ5P4XELLC6vUCPqFTkNcfejU",
  "key14": "2ZkVz1YwPyuwd9bwCQmpK7KxhRvmNdNhS75oxovKLQGZfYkc2eVdZLBzvNoefx1uAoCzXbb9qvMmDZy4qXqJ9MV3",
  "key15": "5bTr8AAwVsceuq1R3sdL8nsLQUYTtgDSckGbheESne1kQZJDD16D1EiTaZWPdMdgXDhYUri8rnh6b5oXnuJ95nEt",
  "key16": "4bD7BwQr9PobM1tmjt2u1AoGposuBsj48CKEHxZ54TByi3ZgseFS2regRd145A5gd6SoeGr1VusQidEUfPKmVnWW",
  "key17": "L3kUCsHn8FMuVsVkUJFR73Y3WbNz9k2sJrPFpTm6VEmens9kMQeS7J5ebTKBjfpgd8wEY7LARjjybGiEM4BZiFS",
  "key18": "5wU8RCfUr89runq7oL8jjuVsMxiMuR5dbUzdu5ywLQDr9P73QLwu96ZaWKo64pDYtLsdfZ6q8xbC9tj7JsU67X9M",
  "key19": "TMAhLXbRxn4feChu8yv7ZLNget49Jz2nh79LLuRdMKYG2UZkpQHsoT353ARWvzYHQregPsVJakPs6WkcHyYP6N1",
  "key20": "5He1gbLa8JDFwzw6Xa9ehV3WCapPciRJoLabw8jYTZEobo5sWFNy6T8mKVtz8H4vAAnx2UhEE29Y1t2mUeqtrHgW",
  "key21": "2V8RKeVYU3Btn3Bwu4qHW9v9HxQrxP3x29a1dWwPPfmTvSQaPYk974D1CYqiLCKnbrW5a4aoJuQbmw2gy9CkKgaF",
  "key22": "4k6YwWBp8TC7PQH2KpkTxZ82owj5Bo17TnLuJWTFhYYeQJAbDfvUcnXd99AhU1JhzAgEVZpgnija1E4Xtm3Rh9Wm",
  "key23": "39U8vB1B2tkjX4GUZEXPvgDr3wn8r7DyvsdV5yxprorCMwr6o4niQ94E74XQwpiiGpVUFLHvpGsaZkXvB5u8WKCj",
  "key24": "2nsaUvDcwWuVvb44u3VnhYuNuaeiWGe3G9jdsfK6D2WwHxkcEAHVfXn8eRrRo5mNHcn7jGAfpoBN9RZqM1Zow9Xo",
  "key25": "f1XQiMr5YTgJwRcfL393jhmmPwdpzJu8ZpbtoUTxzWuFxrq1dJxN9SR36A5vatjcoZtW1R5QhMkxS4rJTBzE6No",
  "key26": "6wfoC4Dz2NnEsAR8hyNAfpGzA92smmheosjToZ5sUWYxDGFFqXmJmdAJ6WyowZ78bWqHTL5AdvDQrKorGRLBz8E",
  "key27": "3LW8CdZgCa5AtrUx4k63DwzgKKMhcuAeg9DEANm71PosA9SWivaGgKDdMiwBv9bfQnHtLCWEYtu2ZxYBVmFMijgS",
  "key28": "UkNszkSdPqycs1SznGJWbqMxmM77AqCgbyt8sodMvkADFXymS3WgRrJhNup4woKwzHzd6HcdxifbKFXy6rQku8N",
  "key29": "xfybiH7MAFnksi7N3pec9CcLvakMBCpMSkkMVqrxFQPgrAggBnV9DhHPA4T2rx2JBZGVRYEBnVdqAxuF32UhyRt",
  "key30": "3orVvtafSweESEyDe1Hfdgw35ScoR5qeD464HeyAW5NpcQznN6YLQhnZ2VFL2kGitnYbGVMunTEzZsDjSQDyvGNC",
  "key31": "3mELL9iFEyHEtg3vjuZvkbRZPWdYiQ2mVkShW2wC1xc77SqVr81UtJUkx2kNk3hW73MaToH48EvjcYkeCzGyB6D7",
  "key32": "4JgnBqt4eDDphcy4rT7hZ8LWq2XMZSjJNMdH4Fj93fPHkmPQfCjoe6uEMAXqEWdjkPtmBzLLqyU4ngRjVp4CBr4b",
  "key33": "4NYgtj99u6H9abPwna75B55oug3d3Eyo13Pc9d7ZtALMnWZfUrdYJszDda1giEBJPSMmZgq5FQhyczmRYydjmAf8",
  "key34": "4AmrbReFJbu7UtoSGwhGCoQKkUst4HyiH11xPWShC1fvuxdJPqPPJt5bHLidcxMQLvcXDoF2chS7Aswbh89g73is",
  "key35": "5ZnAEzSaUqWFVUk8jVsCkmVihEr1b6diFNj5RvU75uSCFN6xyo18hdfFB5YvR6EDErnafZ2ATrApt2GvY48csXAA",
  "key36": "3s4qoA12tvVaVMnqetsPxLb5E8sg3KZ26w8EELwQ42t5Zc567FYA6VwqMbfCB1k5K1Cbus5RVXVMUzZMDU74vhLr",
  "key37": "5ht19WGzbfFGnvKewwpzh3Ae7xA37tWEjMJqyoDN16VFCYaw945mpKzfvwRt8wbdecSRwxxzm7kuZLLaxafaEx3r",
  "key38": "2xP25kYakcg7GSR6cgD3dS2qmLSzutt3mcDUDtWYWi4bFnpqnNkWMMRBaFCqzVcxdecBqKsYTTV6SzuU8qRtPdG4",
  "key39": "2NPhVvukGDudjnt1ct7TDMjFjEMJabeyx7J2ER4xu3PYM6pdjkqsreYVBnLAVJdcTJ1nNyXoA9omZePxu3Uh7wUF",
  "key40": "21CU2cyXw5zQiU2n816zZcq2rdEa7mBoaK64iPSSuxPiAfg7z6A8eRXr1ss6bQMoPQEpu9xp3sZkV6HXyBa2hBdu",
  "key41": "dnCiQot95FEmAQ1xYAYRnrtGQtQ7qeWbm2QULhiNdJA8AMXKph9fWa8sUyqkshk1bd2F5o1qWiqDGEzWZ41iRxG"
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
