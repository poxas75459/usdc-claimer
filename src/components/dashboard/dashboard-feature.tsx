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
    "3UaQeL8qLTsVJCbn48Nr5NMc2LaF57QAStqQMUN7YuvbcMt4hh5MfyojhiFXtehPh9Dw51XfzhCY46ThG3CAwp4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2duJcbRWtYAHEYXj2Fg6134vXhAxTYpUzxybfsuNAg6GPai8PuKD949AUpKLQn5KfWodb6VNMQiFAKuHiaHyuyGG",
  "key1": "4urYnurcxgHNgX4rxKYVriutkWv5EdJftvwbHuWrGFMDGucvNbpBZtHGFr14doqa397xmD8ib3Gnc6reRJzvNezc",
  "key2": "3mvjruieCJPsZ6tqjBinCDwu3DRt9Eun7hnBbjeB3J9i1WjzzZ1JKahEyWTrA4PybogDjADAmsjmHPWKAcziWGtG",
  "key3": "2uh7QrPYg4piuc5DvaofebuFS7qrkp7otSMdUSdDC6hdvJrwtFtFQnQVcwmVgVrjAJ9aZ4nmRsxgVsqjhPJLqvzB",
  "key4": "3wWJE2VrZSGhDGGvXbiAj4soj9xaWjtG97h3G2UwAfq7TTB14HgX5FHfo7jMqDt87bbwhmgNFXAYszSv4vYxByFh",
  "key5": "3SaPZsDWKoxFpSvgfiYbnRiP3UAWYmgSYC4g6KktRW4ov236o46ck4X5kM2YfNP97wXF6iDZBL8do6N5fGH3Htp",
  "key6": "inddBCju62NHNQag4WbKZqzay9MCQRN4qE3xpvWS1D2mEc6UaEaeWNrTKwFMXnZ1qmAkkHkGmU4mCeeaDqo4gez",
  "key7": "WeFDcNeuVyKzXKcAPSZNgLsttWaJSDBJZczYhPmg35XcroS3tUd3hzYiP8y2cRcPtfRFaNVo2XHgmL8wedfZRaj",
  "key8": "3EwTZSzs28wzXDBYazugo1brW3LNC7p91WWXZAydwHeLbVcRRTuZ35ioMHxVVrQsCT5Be8GRnupLvULDo95vYpuc",
  "key9": "yAV3H9BPXtug8u5iyvTknrC6ZbCgPS7GAaRGYkw2kv4XKPiF4mpv35VoMKrNW3swjsPZDGCxscQ9WqmL46d9U7S",
  "key10": "4BKxdJAfp9ZrdF7ukgu2zGq8NzCaYpYFh7qfNSJnQ1w8R5X5aEeE6WFnHCkcEB6ZCzWavZbkpprKw9exrjmqVuxH",
  "key11": "5ZpQyisMj4ziiP53k8dgdZcVBU1Va5Bg54XxygGCaVhrozUkTGjvYfvp9owBtqR1NQN58Q1Bc7T96GvsRdYwRd75",
  "key12": "5623AkUhX5cMzDy1bKPFpQkzZZ3A8ur8zA2FDjtpreA3EjGAnGGBDrY2fUNek533KkAqo37hJzGu7XM7xqKpMMUK",
  "key13": "4Uo8ffnTCjjyQipZy5KA1EneHbn5QRnnSGncTSKYFmEv3VwubxGGGrae2bRsvXRM96Aojccjx5djANPeKXkWVdXm",
  "key14": "4Q9mtypohgndaxu3u5TF8zSMemdYuKG2Mo1W8vE4Ehdsayrt1sDK9RZeVKUdbdJTQdV3kLvdPPPj8p9D1eJS73PF",
  "key15": "23E7H9ASCg6MrXUGbpxSvfqK1gFdpEMVRoSaeX8Z4u93QP4F2JrzAwCHEQce1W6PuhPyMTS5NtR5KCY3z8KRewmE",
  "key16": "5D1fsQvUUDoHMWEpLuxBVtkpdUTbYxBcJTjhJwLWnbBTdkw7Q5dVwyxZ6MznjfAMdUxwKYArzbWYUsfjhVBoWTMv",
  "key17": "hYB7a3tskanubYKUjBcvZTYVgfMsinFs9iDNvi7TEP2M4FWCb33M7F3Awb7jKHcZPRkLnCCQ5V2oBWj42njPdyp",
  "key18": "45qhQNCiBZma8vL3NRgdT3YShtXXLKbktsZhQqh3Jxpv7ygGUHaynXb5U9TuJkmnJxKF2Nv6czUV7H1samqNxDwP",
  "key19": "3f87y7giKVascrt3q63pgBQBZx7UaSssvx98kyQKW2M5Zq4L6y5KU6h9qmff34UfeLcy4BPh59RMbKtDJo8gUvBq",
  "key20": "5GX3mkYWDFpD2X8UcD3uqRZiTcRDKJrnBLssSLkJ7BR2YZPSSgtxxERNnBwgx7QzG3Kc4z8eiFRnBccmBbfpWofv",
  "key21": "3zejD79gTi5cgieTYFzYFYuDrmHiUx4YpA9zshiBWKwoytQ6nt2hE9z2TKBsToeZqbgufJok55DawZMfNZNyMSLE",
  "key22": "3rkg8b8fcBr1vbYkCPPD7REut7RYb7qT16xLqMafUpHn1Yrw1sfEX9re7PnEmh3XuNuDn48Z2F6b1DoLnTauwZot",
  "key23": "2NFyETMAqoL836Tq71W87nzLdRVCvWU9okXoex8dkb5bwCTtEVCPxFkJFwCR7KGa7dqhZ3VoCJ2Egu8tMkDDcB5J",
  "key24": "3jDaSKe3dVERMGwFgY1DdGbBRuXsWgzCRSaFTE6XycLEyQLwWmRyLb3LetfGa8kNpGFkAFNtySm11sB7ZzuZyxZa",
  "key25": "5PLj5F6Ypry5m8ZvbG5gWCgMvAFn4ZbRXoWpUKoNfN6UwZ6nS21DDFxYhw189dBQFhDzhqyM3oNpQaifScqQMzpG",
  "key26": "5AKooMk6aDGnNW1aK1yKJbhyJUWSMfPJqAkxCewzpY2ZizAXTB3c94u2rmWA8bcMoArWPmDbuw7WZx5genEuWVuD",
  "key27": "4AZvP6fAMcBbjeH42fPsHggF97ya8BveDwsEvmeQmfzuYtThEYZrxDzG9wDteMrGWeH3RypTgJsbpVQdvGT6V1Ch",
  "key28": "4gJu8uPyeVUtQqzMpNnBmL9kfUBgCsWibwdZVTt5NBMfzrP3cak5skWoYX79Ddoy28PMHizwPJ9ZRc1dD62icRSm",
  "key29": "4nW4WGsLPWqYgPxqSLHZBiSb76tEwVxVUa1uhSTn1qW39mLYrjr9iNxwqwdF6L52nCMWWSxP1J9oV3ctyRmr1uNM",
  "key30": "4sgp1ykHFyHXgZ2NqEPuPA3Her9ndbtH55NRYUy6ry83qjV1EyV4Q8dsX3mnanQqDX7xr2fQhgCeGudyP8FqfP26",
  "key31": "67c1EVqkMxByUuwgsD9NpNuYR7VCMYsDKG5hXPWScpJaWFV1XaZsf55Z7hDd39LiSSY2nAXAFZQNJmcFdjDmsJTR"
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
