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
    "3mgeQtiLcPfcSTm83te7McZxhZ2N8q5NdAXqmnkGXNxoWaNHnpu52ffttbiRjEEQPE4RkbtJ6tiC9KPJ9FBpqLqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33kR5FVcNJnXsnWBvaRjRttrX826NruPTxzXace45VFr2b8ZiVAMYGJyT6QYh3qLfCf2pdgx8Upfh8Aawj8yPun4",
  "key1": "5nSQqXtpU8DW6WeCMJL8jwzpgnXaMYNeDKmzUszR6XFecEivwcvf8xCwUQ6rgdFaUQAAPFE3DcmstkbEbPvzGUrq",
  "key2": "5snqz2pny2nc7tVfYfAHmFNzgy2vWEC2nmAsSMPjAx2wMJjj3BkAeoKqtwJU4upekG1Gh2DwvKJNKq1vRf8wDkcg",
  "key3": "61ogojShcXRtiKsvjeQJTHiLsZKxrxbQMfkJ549fRFwdUADio4MAmNRaiKZxdQEJA7XurWVM7Sga8sakoNidRMJV",
  "key4": "3b2qt4WVTL5uWmsA7L1XCxw4QYbMhYbdGEvWWwxjCR4i4GZiQy5tnL8Ky5nJhRwvdUKcv9ZFpGvkDnpWvf8xEVbK",
  "key5": "vgEe4vBxenSf87KDGEwrF4m5rgmPoND5BQvvuHvdaouK8uWrKqYccx2C7Uy9Mk4honshoVxXrijfV5V9ck7gN54",
  "key6": "29cgb1ChxvHgyu1LydzfQVskyUxoZMjtAGqCLmMALBLdHsxRXJmVDcC5CGMYgprsqsfmYhCbtF3qJFy1Q8YoKG7U",
  "key7": "4tuzR8NvrwBMiWyGWQ8KnoZwgmTQWGQqwmxQmSx2hvXNyz7CioE699SaseBPeLm8vzs5QAZstUc66MyqXc7MD9ua",
  "key8": "24ihMXCQtb7aZ3rXNfKVHDZ3nVrZaTRL4ox1j3rUQg7L3fHr1a7s1FE8RKHGfqtFFJUaWKfiymKB6w1HLwnd9sB2",
  "key9": "Qthy5im8S5XVwnFnKJsUxF5N84TneEWKEWaA5dc6mQwN1Cu5P9beFU5e1EuT1bJnCjkxtk9mUJfhAxwiuxak3bk",
  "key10": "5rtNsuwePFPzAUMVgx4nnkTXkcQRXoC9HZ6YH3tvQH7KsxJSqnXfhbbEEbFGaS4qqaA8fB6rxyLLPeExUM1egwe5",
  "key11": "5TL3SzY8E2nW6usqhNgR9LqmfV1bRcN5et9geTLyEDNVaZvW29kyN6LfLZKqt1cnCp4Wm6tVM1JwoENPp7GWyzug",
  "key12": "51CaqLXmkSYAw4GXn2HujwBz8rrEH13GzD9jefXsJkEzdtNaQhVyoMb5fmqGKuwpMogm26BKQm9eoDkZkmPMAJVs",
  "key13": "2AnK3Ny1ZWd7Bsn6FLSL5WjUbmrMKy8jxNpFZrTUfinFCH3jZSyrTxV6UDRjTMSoJ19u9ngiHQMByPwGkBz3ajpk",
  "key14": "2k2W2vCGkTgoMfSjhdForhQ7aKpk1wdoDpzTWXV2rPcLgYWNRzARxDVGENiK4S1i8aUURL6JkhPQBFuVKtvjfBuV",
  "key15": "3HMwyfLGdpdCxtErnYnFQU91qLDjD9Xa6x7svNRUCeVfcGbw3AqdM8fXQ8G7T1jUMKwUbhiAYm4aQcLod89KNWFK",
  "key16": "2ZTm7bdV9EQxuu7zRrfmVpCjJCnsxGaR3wZdn8Z3gThrBugefKUPE2STY5yJtxpngfpW38jtBa4oxArmaiAEcVUd",
  "key17": "5Bpui8X4BXctx4NkD2sC4uBJdh8PBgMFq6ZREfv5idGnLHsUAkdUxkVZWbVR389S5Ha1fYqDfLNz3oeyDM6h3a6e",
  "key18": "3zfXLdJk85Lu1jcyYEExK65KjBMEK3MjFAq9FhADhER2SMorNnFRnF2Je2CjWv96duYYfRPX94yNnNVNVs5H5LWg",
  "key19": "3s9pUpTGAYT7gEPzMC2M8mRkHhxhS2kyTNQw5Rh9kkPNPFCnLdi1yBTStnAWCMr9Rk6bwcN8i5ivCxebuCmiCF2u",
  "key20": "AZ4AdDLBwSyn8EBmakk3ihxevyLtLJ5TMGZzWsfLMPKZ2QNUpAkoyJ2X54T3MfPVgLqEuYEbLGpDd9m8WJpsZ3u",
  "key21": "4gDgHvN8segH63qpq8R4HJxHKJPsX4JaRpFegy8Cd8hoEqZprsmFizi3SjX3vLhmnexq3HgcCp8iGEjr8PHortkS",
  "key22": "3UTYf57EsZ2DKQtdGEmfbrjv2LYoHRav4V2T5jRanKZ31M6Cs5vLR3rxEkxZafcWQ796YHJjFdJmfdimnVWDeX17",
  "key23": "223rFcrs7EjTc6M27JuxpZCrgprru5eHwXXAi1EpFz9XejJ5ZQEccee5QhQGnHNTzcLr4TSbfpD11drQHt7qQJQ3",
  "key24": "3rTaXeuCuoVhsMNRSjftTXEaYZsHLLbbtCEgbBdCtWnLV52n6SK7zsCcysBcBnCWcLVdjSkGKAE714tKE3eQWeBc",
  "key25": "3mMw3k1EwcjzTkxHgDrX9CWcRd1NJf9SvPU4RmRHscS4CVnyRYuqMyByWTyiJDZE4yD7o4Bo66yykXkUeVCWQLAJ",
  "key26": "oRbchNteHWBPVM9E7GFHiYY7G8fXFPbpxAFshcZrRtSdCYTCxA8z8vq6N9k4yi2mDsHTuNH55Y9vxA2GjsiqmKW",
  "key27": "2h3Ln95Tivvt1qF882G5124pvFKDY415eDT2UXgY8msEJygTs1fcAkXUvipm6mMj2upxFVLrHDESureBqTMsyHMM",
  "key28": "3NEtQ1TQ6EvZBGyFzDhJavZ8kzcucZGK1pUJSZDHNDTh1ftckcfHreM8aXPXRXVwDqGr2Vr9GNJNsKQssmSAsqrz",
  "key29": "i4dgJ2Wk4pDFhQSwnc4ycG7JfXax3nBANAfHjkiWn6q3dhjMBwGDD3n1CctE7xXwmFHYsJGzvPAeMqTqLFncsCu",
  "key30": "4N4d2qgFF731b4jVUrB19mgSmuRx2DN3jE2YTjDQuoz12a1q6q55ytkBSERrb2tVNPDSSEx38761oa9YP9AHz7Yk",
  "key31": "8UEGDBiNRDrzL3etTMq7sgi9bhFPkdmXRkUDvbTUnqEC3TeZS2bFi1uisoyRj7NvieJrw9qnh2WKPmxiQS4hgKK",
  "key32": "2dadRzGVU4YP72msGcDbmnpK4Q7gxTGSLRrcvzDxai9M6y2JWXSRtH1zfMj4JQufxh2z9dxHr2ck5QsMXwKFuguE",
  "key33": "55XfRcF693LThLQjNgh1w122V9oq6jq6CXJ3R6bGkjdtjKVRLBPvRjWu2NiSvBb88B3zm2WWAfnF8888wbGhvG9J",
  "key34": "2AZKwjGZdNXoXp7zZq2XBRuy5Qu6KEGQdYuJRhENAUEf3v6KjpFHx6aWPTxqm1FiX63F9tnDa4WkyfpXfXtK7wKs",
  "key35": "4yvg4HiK6FLQYfJzFx5Pb9hL2AmB7bFFvbr2GthwNiUQH5JSD6P77acDnc2F5PZqRSsNm7v27v8sADBpSgi7tUTE",
  "key36": "51xNUBQ148wRwSCRKLVDFEY1vquK1XUavytEeFpCFBPygHh9CRaAN8hN1A1fc7oZ4g4NELkWAoy5qQtC9Sa2R9MY",
  "key37": "MdDoFQYjTvRPwYQrJX2zMg4UnT2kWGh3nG38mxvdejt2jHWmoA2othVA4SdTLHaF9qr4cChNYqKQ7bS5N7HWhL8",
  "key38": "4fYKH1HPggFGheX8pn9o4wTVbb5DU4FeejDQA7yWpGNz6Y9fxTZxgwVjudPSGGCgEyNdf1zSpqyQoMa6RErXixb",
  "key39": "4qx2CTxRkUMy1HTnhJpuZnQprDD4zZB7RpZZKpm9GzEMzVSHcSAkh7sXu9CWQ9FnvDvVnY5FG7PMXP93vZePpyx3",
  "key40": "sFMJAgPxP3o4Q8E1LrkMydDEJLjbdHCxq9VZFJddNVXzU2nrn6n1PqLk9qyUYDx3Yu75AsNBZdzyozPvy5vvopD"
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
