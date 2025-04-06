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
    "5DvacyCPRprjdqu42tJsXXXeqFCqRzkH9tgLYTuNt4bCKoCAEdjHrtb84NpgBkA8TrySRhix9qkAULnHusdWhUCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RsRCjVS8BuHzevoh7AjhWZjmikWAgysWGkuGHKSMuzFsPKfJCd7ejri5dsw9ncsiZtTwF4kTwsCXf1Sg2jqknp1",
  "key1": "7ATvjCbAPdD6swmmca6RQZoEsk9vGJ53G7qjobNgngiP3mJxB6TrwHUVEnHSi2togWWEbZjzg2oaNtbTNRUMXnC",
  "key2": "3tTCFqsvz8CWsDCww3ttk4GXqaZnqwvGtVZyExKhHALEVDXkkNeEbG2j7epJNpVBeyGyPD8y3ww4sGzbts3noN2L",
  "key3": "Pxi6uX98Yczf6w9fQQC7r8AsVw6P4kPvjscP9Cob1Spspt99jHhAgT7wyhbWU2WXwTrgrmx3CdCcAaRgXbUFDiy",
  "key4": "wBdEbzQiPKFapGoMRK8qgUNZ4py1gp5B9Mmp6RFJkxmEZ3SVh6aXDs8TN7unJ8HeHHFJrwB4GKGDWdDQ5LifM3r",
  "key5": "2Vvk2fSPewNEAYGLjKGR7PLZCa933qQdAuxUnQ7q9aJAScbbBU4cLZFou2y2wG16meXPYWrmoj8m6HyWVYhcfuj7",
  "key6": "4SYGDWnhxzPARCvGt8XtbAwP1uXn42REmvNRobCfufg2ZzZJR5BhdgznJN8UaQ4BsxDEtKwrXNV6179759BaApqr",
  "key7": "5YPxtchM84RWHs5FwnP5QMzYP4SpXkf4qP5HWr4RoeJMytnxvPJ47oak4QmnjpjHsZ5YcPy5fVZ6odCAuQioh6Wr",
  "key8": "35urRUFZ4GsorH6Q3CXikBhRQGoFBA9TushQ59StPXF3KDd35W4B9PVbnPDQuUQV2VcBytj78ctN3PHNpDT9No6J",
  "key9": "4TqbBr46bcUx5jAU7mJVdaufNVr5D39Ym3xnX7DzvX4uzxRNJ91uu8Xp87aaPULKnXYJ2a68oRyFjr61o5yqAMtp",
  "key10": "5tPskuNvhovzX9gcGR7vN7MKFJiPLMTgC1com3G24VaPaapgqobR4de6qwGqFw8n49Sp2wSr9tLNnsWukPoAJaVM",
  "key11": "3fV6qbDxW72KQFUgKVBcyox7V3oktJdsj1BpCyXKGqbaYPTPE9v3GDwUC56b41UykKYAbuegLYSv667cRKK4wPd9",
  "key12": "4Y3gM7JJZnnc5diBcvqvh768gs3WL4F8bdGcNAxmgzfDyqxKk11uMgMxL2gdTSXYdWA5p4WZS1hgHRnUYh341vDc",
  "key13": "2Um5oA1unbyZLUWTyUmT6yBzQDuKnuSLSHmkKTpqGW3pdgXwQeTApUtXMsWUctnKkyuvXcrz1KLzyL1h27jsDsLk",
  "key14": "2eisWVtXTXaLt5KsWHyR1HSWEL3XrTFyw8VRbpMpTrikVS6BPqwBprYMfVueyupWMHv4y3ppxowAY7j91GYvM2jS",
  "key15": "5nX2SPVHPhZcCFLVdxuTiUfZFYfqvMXpbkJieZSroVV9MLxyaF4RS8k4E2dMyqxJARZmGFL4P3mvban6d1QvgLka",
  "key16": "37NEyFt72wtJKv8A8dL2FpJeD21pzuPraFMEYh4LnqdavxKS8nXsnjCjGB2XbboSAyMZbQ4Zu1dzTv7gxAjhca3X",
  "key17": "LBvZX25qzVdTT6E7foK9GPtdzSdzGrjmNB2e3fpGohhCwGx5udvWzmcsQgsrjow85AnCqLhiTb8y54N23rEq5fg",
  "key18": "33KQ2saBL5yBPXVUKmADPHg9tCaDQV1aqPn4pRpfrSG2SMSC9oMMq9hjctWHx1gg9rfiBTNFmS3XaTSwqrmauFq7",
  "key19": "3eGtraajxBtaLiKm3jvMyyPWDgbrdSDQGxgGRMuEiNVZVKCv3WxkAgg9mxwqWyuh2AzGTj8wm53CCZNeJ1qP63eH",
  "key20": "qms57xtgCjiKr6kWaGUyKQP9AJVNHvQYcrX9HmWrDGn8jjDHgAmeiKiQvJ5q3VrJfBz6ksknqMbZkGVs5bc9NUF",
  "key21": "UkLE9n7xMKo8z1xP2sFg4vvSfeLXGFPBtJ5frWgWpYJS8gt56JZLhEgMmi9D4nEpWEYSigRZG7a98o8GUuWuLhb",
  "key22": "KjmKibuLYqB14LGGsmuqrmmLnsDVUKfmGgXgJHeDMtr8ZtQRgr2L7wsowkCBDuLDngLpg47SbG453Es7e5nhoZi",
  "key23": "5jvCNdZ2aNjASogCbsrcvaybe1kHr6yw3pEP17f9JVnKqkpHXmUay5oA2mrz1RRsEjdCMbGmcfzYJ1qwDbu1RzzG",
  "key24": "jmKzXU1TcUbmVEL3XbQwP7s2ZG3iQxT6qeEz1gJot4wi83YWkBdRnwSAj6B8gdpUoC9xpxCsnQ2VJPTNz3k8BQx",
  "key25": "3ZuaKvm5THhei8kzwPuYDqX2qbX7zVFYnEQjERNtVHWPhHbrER36RX5Y3KLRi2e3FwezMGcTUQ9Wh1LowSTs1L5B",
  "key26": "5tj2HZtmaujY1fP71FYwA8WxCn6n2YVsMPQz7AJjNJaE9vhrFAx4CJvFg8HMpLbAvv5iQ6uwzLVyiqqJG37wgv92",
  "key27": "3RCZ5EjBN8oxf8Cq2HSPDrjR6aaTGzp3nz22t6uqnJZXkTewjaSYJwFdz3WRgUmMjWBwe8rwkniZxjhsnwFJ3Dxk"
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
