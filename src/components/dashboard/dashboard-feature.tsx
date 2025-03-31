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
    "mrr8EXV3VLfAnKsUPQGQqyQPYGugmZ7QvRjKms8kmK1gXbB4x4bFeo4Ktda36rCAk5EkBHjndByqS3R1yErw6mA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HGXhwrfHdpHB2xLxEd7rz1hRunwwt93aqDjfYJQyqBNG5iZ2is9zRFyAzZR5JVzLYcZaWNbdij5dB57CSTNm2zo",
  "key1": "4KRfVevkufhdriQgT8rm4XqFh2ghc9BbVuzrEnrKMx4iyPkVBjVdmoiXJgzPBZjJzjyTHDAX7fUpuNSJ38wAxReQ",
  "key2": "KxnBRzEzMd9vQoyAjMVFfN6xz3iD3MxcSdcxizEC6q1ZmaMtk4cCU8gAv5aSiLN9CnZoFyeM7iXSpx9m4V2zaqt",
  "key3": "21D7Z6GA1nJi38JnyVt8YR3kqxqDw7xNpDcxQP5z7o1CNvULVdnbWRojMj5XLoKGn9XkVSRvu5o82DFgGcP5CjEc",
  "key4": "5JUesaaipYq9nzVFkyDcC5CUN1KveCHBtGPS3QMkwrj4j7NzLqmUFuhVJW2x4Af8KJDbwoHMeETHJ2txXfZDbCFC",
  "key5": "3U7Wus1PYLMhy5Yg5bVHQ94XMpmRMj6hNj6bcKEN6jWE74kEBkTPkDJT8wtBwQSNZENnGuVssr8WAWCFhr4uBvih",
  "key6": "2cmeZ9LD8c1hyFh3WVEHDqoq4FZD2AB9kHBeoTwVfGy24rDykLDoRsazdtQVq1ASDjuYYWHYZwUhEet7X3AM8uHZ",
  "key7": "3kjk8Ga2oaMnDrqYubyjnXcXuaQw1HTRXFwodi49qc82cHTZe1eGiMN45yModx2iwxeDCbG28YZRXByhcYtczedW",
  "key8": "X9XLPTRQkRxaPEBxN8xrNTKboQmvjz3t9TphQTJYvKqm1zJUdRyKmKRY38mWvU6hPJrK816QRQDf8z6W3YkGv1f",
  "key9": "1dnBs8PoJ4bAQrzA9ktXQSNLhJBhpWdLtJYsn1ffC6v3d3bcNZeXy6buHEbTEAjH46a2DAkDcuYZbV99qGGgjgX",
  "key10": "3Nk1KUPT2iqDrU574Jug9QqtRgH14j7JHJR47qnuPKPJ7HDUuNbGawekTTFMXE7QgEqLbB7Bhgug6cEKuey3dzDc",
  "key11": "2qZSH6UdHfJk992fVHv4CiQDnYtxrHTgEe7ze5ZuveFjgKETfkDFWWwoK3xWbgDJdqEug77VSBxQ5ufME1NdM7vY",
  "key12": "3JNpFVNEHsfLyW53VBYU3Aq3JVEDVybYoqU4n1KeXBiBSyDPakGM8FoYqTF9kZuSt1sdD2o9eyQD3iJFTGNzSrEh",
  "key13": "3XiKrFrr5Vo1d9d6qYU8G7AVPKRsfEijbVx4D138ZSiCNHziqqyZjL1VkuUUb8jz9N9A79XUHPF1ZgZqHp5YsYbS",
  "key14": "5F3qmVRPGb425Hb6MuXvWBtGzhXCLP3K3RJdmTJvaSaJ45cvbsQs68wGBEddGvKXEcucu5PNxLT2LBLtmA5YKceG",
  "key15": "nvzC7GfFQBLKK45BWDnF6TExHR1wGZWaqx9wq8GWnrg9xA74jJWNo2rhJexzFVYQ2hRaL7itxkuncvV9MVCkifK",
  "key16": "4aiUcizN4RqnHBq2AYJvjWVTqaJPK3AAqx6FudbZ3mPSMaoNJXyPUANpXasJ4mQLR4PxfKcmNP34Ny4xkXQBcgBN",
  "key17": "51MFeLaGLRzfYggqX8Ggjmic4T1pPstBLVSSFNgqfyJCFR12FjsaZt4NMtg4nUZNsqmuSSPJaZs9F2XLpAkvXs2V",
  "key18": "4X3fyWaHvZ2YJXkdF8KmHxwq9Ph7pcK7as78363No1XuBprKi6G9JX5V7P78si2Y8AmSeg5uQyzGTfMsPX6GrTmD",
  "key19": "4NSwGiZYWscBdHXWcbVVRNvo5ArFr3xhyuAyHdrYk3uUQj6u43E4h9z2DWUtykAbit4mxEz4YBeF3YbUqEKYBmtE",
  "key20": "5ydxsTjxvHZkRmymfMPHuQVgFde4Ghq5hHNjvNhMTzwgKjVQPacwFdNYCRDWJCgCfr3zUoMmpDPpBqeSzJMwCeEx",
  "key21": "3aaFLWubXALkPtF1fkytyrsWkGNpuGQNakPDqNC5PT3qR2kkqGbkNT5rcn2onHNJ2sjGsV7fmYrcqQ6RBRHo8UFR",
  "key22": "LmUXKsG9G9XXb2Y1bonTaKcABGQVErc5aveU7rNcW3hNm8BxzM6KmvbhfX1sqevXtJaLJr9iGJN2YkbhVX1cqL7",
  "key23": "4CCorfZywN1LzF5ukZfkNrtWFUcaLj6WspVK8wZub8xvFx9pm9Ufxm3ofBFqgNCQ4ZGoj7BiUGtZuf9Jd6di5TkN",
  "key24": "57jcTz7CH8dE65npozVegj8T9iJGx95EDn7p6pp7ZKD2jjkxr7WUs9wvJjKorZyjvVFWasrTdAZZsrbdMCxu1xsZ",
  "key25": "DGgzMJ76tLwurHqmpPuJT95YfryW9UubK13CwBKdD3PwZGB6KiMrbyTjVEwc3xL1Up9RP615uJYrvYpFTnMdemx"
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
