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
    "5wp6qc8ZvMfX46qEGVVXFgBduLNmgBWZ2wAiHnjPHqwrv4WuMN9ddHPcDz7iqAnxFLKx482tRTuykADsYn6kidos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ALSUk3t7BcDDsgMG8uTfA5SyBWyBDJPMhg4Q2PBS9fCtixhTeqzN4Uzp1Uxodnz7CUHadY84ozKyCKJzuJdgma7",
  "key1": "JdwgExyKDTd5ZNCbcY6dK58MRtF6NcJvMyfuZeMF9kJnQ3PKwJYKC4HjzgdkoQH7SUSu1FTtXWWaQ9q6NpCdz21",
  "key2": "LSmmBTRJVV4iEGNdyF8qienjYzLAvEWriHkG4CjnripVUh6U2CvRaUn3w2AGL9o7Lonksu2uYJfzo7ndNdfCGdz",
  "key3": "4YCUaC4qcVNxxvFSVHaAkSJk8yBpom48fdeSKFR5xzxoqL1zG4cg3TUc5PsBYXsoePm7BKrkDuz9pJ1D8VQxgJ2p",
  "key4": "3YxwMj6352kt646gDRLgazmfYqbjdMfwVuzBF589TxTdHosyeA6DwK7QjnPQMujfTERRavycSUAJf48CoESbch9D",
  "key5": "25WrvPgmfjpKkN5KV2vfxmkf1L1CxWrDC2hH4dZeHf5pLpwcaKemUXutLWQF57VwG6U2n6d1K7qoJRchgkZQQfiY",
  "key6": "2UY1RHygkv7zPipH22on2FgLyydYwwzwgvHdqRRUbHk8gbvgNtn4PPeKRNRDwaPEcDWkLEiySYukavYBq9sitA1v",
  "key7": "4v1Zezi5ha9hMFavgtsUyJoEiTWuFfnVP32JWo1JiaWWxGtkiBLpzM6yp7wEQ7eMAqDjritfKkR3niJGKbph5DR",
  "key8": "3mhqqa5tChyo7NSTE6GKRh9cjX6UHLXaNdt5Rg9LpQC4d33PpNwm8gGY1FLm93ew4s7gxibkLsvVb9Ke3PZWkbwk",
  "key9": "5VtXSsn2ffAmsuKxWmrQjTqJJQkkFcwdnEZe5yZdnDoAzE8CPQqXaTLQ54FszQoAcSfkjrvmbM1gtLHXHWJfXxv8",
  "key10": "3HvBceLf2bTxrugXjjYkVJZnuHHkvQLP9CihWNdy2yJ8Rb99uimrotqo8X7TV28Ef2uAh3ULUNercp2tBaNu9z3b",
  "key11": "4ciqSBQE4RDtnW7ZLtGt2q1c3LUf5xJA88XW5RkiLDRPBrKX2fMhkWgxbk5nwif4yVpiF56f7NwXcp1Uxhmqyt5v",
  "key12": "4YAkKQrvpEMAigWMCGHtgop6adbHC7xKQEzzSgHTgeJu8gXLtn695YfvEgTZwL2L9pAoN7Ru3kiTUjaCx7k6YYQv",
  "key13": "5uKsox5r4cppRqqLdvoeC9hQjaCgZxVVqHLUe7j2pnuuaXyDA8Ap5o9hfD47GRH5APuXjVTcVBR82rR9sCr5FgcG",
  "key14": "2gwSa5999epBz3rs3QYAw3rCs2Q3h3doyH9gB3W9KFX2wZmyvnqXFHDMB6dA18wqP1ASqLbbVFS8Rebr8J6XrTjK",
  "key15": "3KUDNcATKYdTxkHvE2qEAwZHNt11Mf2gsXpTTngA1jYiwzU1sfG34aQpFCJk9YqaVeLsNwAm8drxMwuCFVrvHCby",
  "key16": "h5LiYw8jAi7N8PJUE61JvTMxgYy1wstom2R7YftZVjriHunGMGBexr2YfLNbBz7JN5MFfQL5g2AQQ3n7oj3SDzs",
  "key17": "4PbLCYzrtekYcbzbPGdn1VKtLv6eKmVRBdSTJc2tCurhVYAwVDi1WZckA4KMaQQcJhvrG48cscG9uSeXhX3RZy7x",
  "key18": "4wYRtE14jZ9fSLfCmEE4tnusWeXVcKFdaBJRTzUb4D4qaEgPBtxeGGmBeTUfJJoB1U5JquuSxxo5XFFd7z54Q5gQ",
  "key19": "5Y8QnWeQPCgX3hL76h7UH4aDWXbktR2f7JUB6qKXfN5oKJHykQ8hGpJPojd1dCJF4xEDWDP5gYDDfdfP7Ts6WbEV",
  "key20": "5U2dtNBpySXiEMavkH1GskSG92Jz52fmVsCxUkzZkYxkJEyuXhvteiHyxHzE23Ka8fPjiLo2oFn5Sc7ibjQaXEDf",
  "key21": "4nsd7XM1rQFFtr8mZQeGLQyJXftv2NKjRUvUpTwvpMZ94aG2PuXB18zJ9cqhNUQxpxnZMhuHLCKh5CGb195KpMNy",
  "key22": "2UQ9AX26JgFbdb9eNPQpjowx5XiFLW2s7WAg7mqzV6Bs9HM2zyFk9eBdo5oZddb7ten3u8FHnp5HKSzi8nJrqhgj",
  "key23": "3SjrCUtx9Ls9HMvPUbx72hjgKB85HJJMWjyGb9Ssje6vh9LQ1TJQT4YwZHqCybtUPxCXuELdZTyGAdaxeDNPvy9b",
  "key24": "65hMVav2sw73zF6gnYiGs1WLUsnTwMsV7mr9ggtMSp4gsHaopkR6NnaA3ksxZZ5fJEGxBFnSR6SRZ9869Atn1ViH",
  "key25": "3JgqyBCf91Af833nxmRuu95Ur6j2uWvfWjN9rjwf8AuLLtWZgSW5Zyun2rDPixzokMg1kykGVr6VnSUbcoQu7qyM",
  "key26": "7RcRPxH153PZxFjABPawk9rSjHqEkuPb92xciTE5HV322xuYjFMdFuq3zLMeGckXKxT2CERyk4ptmxgxRNPiPY5",
  "key27": "3mkF9bGfxnMs2nK2sWKaWHUgoE5m93Cui8raECfgcZ3Tkyi1dgngePy9pvGmRTCVyK1GQLx3t3DU23WU5agfyY9U",
  "key28": "52k2WZ6GaYjBcZP6wXs2BSTuJs2bDMtAVyfFn1H4G8b6m8tr61CnzcgHXQ1X68Jie1HraMgVjpr65b3q9dbLngqW",
  "key29": "467sBZKeo8wrVHSfRoT7p1jyZprQPChQxbE4xcAD1UibuHu84vpvTj8dxxLFyDExhZFDPpxYC8zRAr1x9eNHu7xf",
  "key30": "5pzAhanidzcjQ4wvM11oZvHEyawyp6Y7ijqNv32yRGHHtiW5LsefYtuSNNC2Utc4CNqCLwcyWQj7RrWiGb5jWSsF",
  "key31": "26o4nZA8gXkrQwcubVcEtrNA5X2U25ysVjdfmm3EEn4cxbysTuqKjitmR3g1w2XijGB2f153C8q7UMWToUig2ABi",
  "key32": "3C7bUnw4LrCdwPLiRaYJZ4rH7wa7gbbgCEqVtcL6DuqAiuAyzAzrEtwXQXVoWL4eBDzRbXbwEB3BVadBWWfmc2y8",
  "key33": "2Q8PV1P4Lx5DQzsnFPhQV1uxDTDczJ56bC7WSo3EEXrqun4a257cLfQihbrByNr414fozFKbg34VZY6CX6zRUmuf",
  "key34": "2fBrPJqgSMW5ZAAaqAtHghJDJy9Mdx4GvmYAsrQZ3CEDEfr9sT6oRmVCtU5NuJsksBrtsLVBXzNM3oBKk5pf37sr",
  "key35": "3EN1r8jxUyeAsWmvkg9UjatxB5tx51w14fcYJRHnNghpboTw5VPFgurkvqX3yDsJ9Etaq3sbTP99CqkighM8vzGE",
  "key36": "4C7b3kEzPiEnNVLDEF4k2tBsCmXPmnbnYLGxAHPierd1WYG5acKqndzmmfw4S8za1U8Hq93QTDfmv9umbtrgLe5v"
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
