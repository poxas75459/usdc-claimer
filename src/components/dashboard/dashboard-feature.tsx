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
    "mTrDJiyhbdGT4msJghEPoTqPDB2VZbdWYJfkjdC1LattxRqAdXaxzouSMhgYYyTZfLAq2qWLJP7rqskhwQkFSiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJP9wS2a9pkhGgz6E1PbFxGDC48vvVzXnrAmECSy9XmgZS2NrGxnBmiN9KTUcrWCdH2xTXVDnt4c25QcCebZEKo",
  "key1": "3vZZeXVCQq2qfiHnwsrmfbfVzqkXp4EHp9y2CysRSZf8UEdXdVFW91UuSMLEdWJNE1zJrMQDs5ff1NpVrP19eUNX",
  "key2": "49BE73PcMcNKwFjJciNsi4JNfkqr2DW9i1Yi81wQtbvTQjcFd2pCCvR6wJmu53nkxfN33VLqAvqFzEJ16DRaxa8o",
  "key3": "i5ezrxGfxqc3rmd32ynnxYKjfNXUV9JKcHg7oSYTVgbQd8kmebDdeLFgi9pZwhsiCCYXHELkk6mjkyK6NXq8b6u",
  "key4": "2Zw3wP3HHtr5vgrA8H5qF7bYib6ZjqEjBnNyaaAYVAFKjPLvrmvjWW5QFvwmMPW7L9bxahH9SkLhCuWhQuhcrtrm",
  "key5": "2LxpsZVAyTGnJqR9rhHiWpqyLU7RKv9Q1GRiypSqihQDPCBzCuq436MmpjMVcv5Qwn3tHHAuRYFVycadbQgkGo9H",
  "key6": "3GG3drCo9oeEQWHVxDgVXZK9wRaNvTTuTXGWuuatBzaGR4BFgmEQCHzF1StkQ3NaSZHPk5HhUCJn5h48n4ctrw1m",
  "key7": "2njYCHbKiCCZkJ49WTqgHzpH4hJjWUssMSkkrwrM3iZdZH2UNG1pDZVZuju1D3EPd1qmYAfPXTDtxCoxH98wujP1",
  "key8": "4ukDvpf3djRkFRbjL9LRWzUH6y72hXnTNsKhmygqrBbxo754d24y98kudd4172V1dD6kUgJWNj9AL43F7SUV87mG",
  "key9": "4dDzomQPRJdmyZVzyJspGqCa63HmKSCsA8WgT38RnfSMvFXAhcHd5msVpejZE3johmUi4GURmBk2P4y4e5U5tBqP",
  "key10": "2NmWpdtKW49ntry8SKguRophtRqwPtxpDiFD57bchbtMjTw8yJ49na52PdgCmUJokihwiLZsCWTRfV4rxzLD8t72",
  "key11": "4BCFjKixZmRHpHAa32rii9HmwTbCLk5946WZzTX97irFBChmkEBGwcydJnY2a5DPysLfVcfRW5uwxFiGvAoapAis",
  "key12": "3HAbTQ4FeHfJ4bgykR8hVpFSwVP7LVVqK5iiJvPUcpM61y5SwjvUUZsHtZCAeBVHejarfrVwx1KRaDtKnF5MWYvu",
  "key13": "26DNohL1AxDY2A5N1vb6HWscK7fQmULK3H15CsEeiFdZQnFwdevEVPqcDfaAZrfbRPEAb1VxSw4NThsnnv3VfhTm",
  "key14": "5FaHCW9zxK3cQ9hzESZJVdvGhV32cmeJX8FgF7vjEW9UFHfBBN4Qy6tvfCGPGmr4uj5WGUek5Rkm2dWFe7YLvcQb",
  "key15": "2svVvcUUFpuaxmasetrsGe5RdyC5h88cqJncddq1MU3rANp3FfmM7mWuGzd9JQRb7GrhSc6WTZjei87a4yEfpSf5",
  "key16": "2LfdvgwgURAcE5qArcCkj7QDwRKPVViffh5tNGZU8V367smSsqcf7C3ytksDBNozRYXbBQdfvi7g1RjaSYGQ2qCE",
  "key17": "5ajiAWSTBBE7KQQsoY4uJQUEDXxGCtK7pkzy9Ri29WXjchUzn2Q4L6yb87AmGUcBVzAZxnkcbyqhAJ3CXMGpwsBv",
  "key18": "5AaCTsZHmCHikhDvoGaUBw9Sd4VZocf58EQPqUuseik7JdXsyM7dGb4ZAWG7Rhxh9Hngm8YRBZikjDUWJRQHmnx6",
  "key19": "3hup13DgmVrruvZZoUUiY77CzYrfb4Cb2hVZi2mQwNi5VdsYvTUKm9NrBhTMVBaoM7BNA3tyAG5EfG1yHjWVuSUL",
  "key20": "3D3V6pCkCRnqgJyKiokh3ELsZoX7x9w3CftoU1CMAT9mZqNo9knA81zjJdiFTMUpC5FARGULaUVowAVTsCSQSQU1",
  "key21": "2ZW3RFvK41p5xkgBgRwuafR8CCYFqS4C6rpTiXb9ZGaTBF7h8yMYXQ3joqvUQwNggXVJRvbcf5NAYyhQtsqX2hN8",
  "key22": "5o5NCQD6NhL8TqQiJsE9fqQBQq1vx4vsyztENTjawiwkUx953U8L3hqUZUD5wmKBQR2r1AoHQWzK6NRXjuX8T8ZU",
  "key23": "2onkfuiQtjoRnsmFaWpSLUyvuZcrJh8kE4wMBv42AT9ZB3T1WHEiBTHrounP4QMWK8ZHTmSSi3BTGTaxZYxqFmP4",
  "key24": "67NrgbhSVMWLfAVSPqibXCBov9NRUdsSWngJVdWGuXQY94j8u6xxvKcCWSuhWmwrLsLm1ZBdzSu9hM9XenNLXEzy",
  "key25": "3W5vULzGGXLRiaw68BNiEniEM2nw4XqPBXEaAgU9xKyo19NJdrpbGdTtCAuwXmz2mMTshFZSXQFo8sFpwunrTuw6",
  "key26": "3ARUjXdpECnYW3tQKy9uiscqgGG5aZbJCsrF8U2dLX4XTB4j8Dw2ceKctamRE6WzQZaEFdb36K5kVPRTh8gJd8yy",
  "key27": "59kXMb9gJV2DGtEGghyqGStCSJ5y3NzsJeFBkUm4zNFkAsCocF7x2DyeHrMHxM1P9HDb9Dau6NrgQTy8rkQV32uV",
  "key28": "5JriqcjD118TXhvzfukpRqbDwSwjh6TUYDENTRD56kE21NyVeQc5HWhdq6XXUKHv9vXGzcuup6XE7srqtMPuRkKE",
  "key29": "2cTMY12CziTAAXjzNSg5xU77N8ncKTzzZD4cBmKuUDWeSx3Ffy2YDy9KpXCHJYTrAi8JyMvx1h3gYhEnXciGpBza",
  "key30": "5id7megttk51UpvaWS4htp1FtmuXJNnc2JmDC3oTtA8FEpZw23i9f3KqGuiYLMs8NhvJjEfaeAdWxyFp8MdJWJxA",
  "key31": "5tm6TNCYQiMqd6615yooRGwQwiC8bJEznZDnFGmJArWW5oeL1Z2ci9nM4QN8gZFNJpZ8uvHEqL8NT2CHLQP4XNkA",
  "key32": "3T3aSjLFmHTbKUTi3kt3ByTtAnAaaRHBa43xHiP6kXz5Tmocon4PWcF7L1PHGvPdgd5PUiTnjaN94nrMEn3aoTcQ",
  "key33": "5efYYGSJcghPChUzfjWLTC39sKo7H36TLBoWLiDW9MQihcrgg6SsRavfdpWsmzCZJFmdVDy25HjqFH9tAHgm4vio",
  "key34": "4PqUwQUD9LP5vC1E29s3FhLkG1tEofFQ5UtGLBTNfdmRBi1iKv1uWjUAmsUnWivVJCNZnRQB9MroavkQXNUFLJSv",
  "key35": "3sdQQAxSBBEUkGJn3AX5ZBnTLy6fFi6N5E1cXD7Rk2qEaCSkmMYXQrrAuvdpxv2i63KARnHzwbCFL8SW3iCbnLom"
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
