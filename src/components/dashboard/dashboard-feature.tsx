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
    "5wzYUxXCJiRgeQw9E5cDtAMji2pN97PqWSmmuWddJ67w7xsXX3fyFP9dAgBqcfzMnJtu6wpamfwB3ajpLVFWCa4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38F5HjX89MixHJYE8HhPRBHVu7hRY2UPp7wYt6vpzsmNDmcAKMQ2VBxzqpzHMnFHC5RcY5EDnvSaR3NKxjYUVuSN",
  "key1": "2DAhywWhWvzZbLhcWhv5gqTxS8e2YT58yx7XP2o9MZfuBMLArp5QRBa4wBFzNvJTRMYXjUofrfFuda2eM7BW6CKi",
  "key2": "3SvJVZhnz9gkU1q6T69WvyMt6SbhQe15mfr4Ex721zUggfcU8HsWeRrryomQd5W5WZzxjGUbfr1jmc4LctyDzWTV",
  "key3": "3BjVYYRo4MmkRVa7RaxjTo1vRxVB8jbigiE7yfQrVULR1MwS5HicJq6W7vDPU8y8PyajzX2vXdr5TQ8DCSHU9vsg",
  "key4": "LWZRr6B9aXKHKhyjnzi49g5Bze4e2PRZ4bWCezRx5PsesU2h66MNXEXNCpszBppqKitTxBcJyiUBEnQFW2mEkbp",
  "key5": "yu9gNsDzf23hueaVAMPgmsWzXuumXNLDuk7URwjktT6fvpZReZRAuaimVBGPb4nmsZdXSqoaLx5KKpU5QE181AU",
  "key6": "3oorAkEbaoP27e178V5pGcJk2CZiqwctPzMhYNmPVXic9XLKNFWUTk8GCYLW2gYfANZRJ3gRZWhsPC1f5SiFJ75G",
  "key7": "fG3qoFhc88YR3ygWpQd9NrN2fMsKh6enJ8v3U14zNshDnJbHwgheCaFSswJXv1zophQGyA8KoMYpqqrVcqxdnSE",
  "key8": "5SzKsEi4hLHZyEGVGbpQQ3yM7WwAq2KKjJxv7kV2HHAQyPa5wjovXWdXMR2m22s3LmojMk4a7EFMqWyWWwis7yQE",
  "key9": "5CA2nHsuVpy1DwpC5sx2s3AVf2iLWxiLRaQtMktYS3kXoJBeHQWPpkwqqZn3Sk2W9HHua3pFPzXyKxxVoKisT9e6",
  "key10": "2zDw4KrVKfzCYNsTefjdUJHohocWArsze1XwwUJeoKBNfQCbym3UHh3WkXmtzuMe5yPBscCSLsXJuaRFsqHEMA5K",
  "key11": "2KsrjTun83nh98sG5dT6VgW8ZTWY97V5zuuwhfuN2xirJ9gX75qvcagH5VqEpV7BoCrkjQ6d4LKF7dmNoLBgLY6V",
  "key12": "5AXK5PaDGRuBnBJKFHWergyYAHFznK6NDRH5icbX3UJwJdEmNkkadpEQEJryNLbmeHjmvhjuhRDUJNet2kkvkrfL",
  "key13": "46t6GBFeAQf3iXyoV7senUZufXWKQrVBfKXyHKPeNgCqRjPhRZLquTDARQxmJSh5XzDSADK5uKfxmRzsnYu3mVX1",
  "key14": "5K1tNgKLdsivgh7GspDLYgbH2TfLTjkR8d7o4SYFjn8nSiirrChvsoQ8JbcRwfKeEiraSsBvrv7nGyH76HuJz7rg",
  "key15": "5M4FjQVqN11njAM99CoHcb26C6Aj7yMskSGeU3Lr4wt2rPNHaGCg7eHXWDzvnwv6Ac2fESZ2M3pgnGncesSNXpG1",
  "key16": "2kRddZSG9dELA7V9B1uXK7bfjmDWybcmvHeoTegRoaWJkmuGEu1YkxPB1hVJR5S5AxFiCf7m3uHKhxv76pEHC7vT",
  "key17": "3f2QcAU5RL4bwATefkmTfRLm21e34XWT8fgDWhfhcgVSXk7CAugp6kRzgj5jsLyKdU5jpsMnK6gqEEPQw2TECyd7",
  "key18": "3722T59KrsoQePLeW98WVFkKDS7jkgRs3Yw2f8zGiDXgaomTq3iexykbK6SykLGQ4Wd4b8ARguMwRc9J8TU8nFxY",
  "key19": "3cebW2XtbB2KJKRYnV8FQRGJ3XNbmkdmRWe3k8aCZCcP9Sw3xgNrzs8kmw9FsSZkNAn32B4TZYVWBzyw6qH9yYPR",
  "key20": "QAz7Nb6ytN7Yb2XL8fSrmVPAex2CoiNNKV1Ft2vgiGHH2sYKpNgGfwUeqdYVpus7QPddzZAFywSDH33PB8zrJ61",
  "key21": "62KnqU9ieBY67H2hPM7RTcj6kipBo6GkUXYuaYwUFBaxSkF7ifbtfqhpnaUqKZ7acQFeasCkQcqjgtGnZL7YCXYW",
  "key22": "2bXwEyk1Xy8hvN1we3iPFFBGiHPF7shaYSux4kbUkreXGFAHwy42MTrRPoUV6vSNmuACMwMc8GifqEFEwwupD38n",
  "key23": "tK2vQkFXBCv2R3ojQLkXk9KqkRLVrKAB8tdgVMUg6jm9rXnJBHSvDhp5AX6HXYuMUuNCfzckUQH8JbY5r3jjsXQ",
  "key24": "odATKtCqbwbjtEdKzVC4s4EYdSwXqmhSVSJRCy5whMwhbSKy8VP5tLSVq2J2syAtZuUCVpneZuUne4M8EXB5R1f",
  "key25": "2FxhQzp1Z6j4DkHtwEfaio9o7bcY4zZChky9mmG3MULhtSEpoxRdQHiFcZzE2Rp8Ai22eNwwQWZEcjX7GbmxsVhJ",
  "key26": "a6FW2z8gu2pPoPyUBd4RLowEQniW7mhbaBRzZs2eajjnFbpa9MP9VScyFWSFGsqNYScH1GLETqaQBdgZougiF2Y",
  "key27": "QPjgYMcHfkzkN2djv1Yikc8S1Juj34DiGd54iHsqARjAdjB69eiWRi32DEGtVWZd7qiP2hcF73yCeVKmBTtXoUx",
  "key28": "54xGtPQsnGpa2CLGA3irTUDopypBKvGND9e9dnL48qf6nR4dAgr3v3LVoo7cwNSgUVtJ2d2dy9LupHbfFtKKXNwf",
  "key29": "jVmWrCemoMyA4vEF2WoJS5j6G33EyWonKYFn2b9tzrGHSKUTmoGBZdaH4R7vEVMbeBZYswiTcDwmCjyschcen9S",
  "key30": "4zMBfPjY9Mafjh9AZVWTzLLsqYTodjxp9d8SjxQdKbkM1frdjoaVq5DiyL1GMmbE7JQsoZyGADftRSRWdwUnwaaJ",
  "key31": "4VJ1yLF6mstnBmZJSeuCwkEcMDyMnsdfNK5EgUcUs3AXamydS8GRyNVYuDt1cspqYcFWRKyh3grL1pn4RrqhwigW",
  "key32": "H1UdfsF3EPwzRsfMc3xSvT5XGSu3K1BtqeDRA7Cfovq2NxJLbtcwqRSKG5e2QMRkRKMPPoGHcJJadjYyMLQeSZp",
  "key33": "5jBRUoKu7mrzoWSuhLu67VuVGL78f7jrDNiAL8r86Zb8Kr1mu724vMfLWJb3EfvdZRyvDMHQFqQsCTL3S4U3pnSU",
  "key34": "3VXnXpiUdqm4HwN5j1f78iaPLQevZ2u92EVgronpENXwLE9oLncFhhnbfUdJs1qj96cpSp736Eha9agGmuEucAGb",
  "key35": "2ijTxN8SESzo4RZAuXfXrZWUanBsAZWMMoYX3tNAdchV2xmb1QFpuRdxUtne45smhbri4TXTCsRuTZeTz87dttF9",
  "key36": "4T7BUj8NK2uqQE17sNYGxR9uXziz8y7SdnYnQ7D8DauyWZxdSBaLLXu2D6b2ftjBhUUggS4ggEns9ToTTkFV2fFw"
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
