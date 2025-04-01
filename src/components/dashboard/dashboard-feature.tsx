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
    "51kEgAkmMcXGGMzErGG4E3fKbZT3P3HLQ6novxGqocyMJSwQN8p1K9qCQaDrnEw8U7rej9LzPG8sg3pvPfFHo847"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZTD961jis8xMwV9EBMg2hAnLZjAy1QdgQBpQMyCLKzErVVkMGGa1YbTG5vEefpxWd6TpMkAVErdH5CHoJ938WFS",
  "key1": "5iBEbA5gm2J63zJP2zTY8rEr6j8CbZd2U51896hv3FLvBCKeiMW2ehuY5G4mc8kqeUphRLtE5sNvd32gtc1jrBXG",
  "key2": "665Am5RAkpFmfeSrY3FmTGR3qSwV8FbDPzMt9XihEGgncV8cf9SVqvBN1iFSgToDYw2zZmESmcXuKynkysHdrur6",
  "key3": "3iV7V1oTfGre4bcQfT3h3P8NxcDwuzzyXTvYkjSbgUD2fbm4by86MoabyuFhasLvxXUUh1BHkgszGhiNgJw75REd",
  "key4": "4u2arB6eyNLo87qabF4GDtUZcYyv5VeWMzzcr8RT7taey5za16kCWyLEq1J8FJggexDNdPASaSLtqocpe68Wn4oA",
  "key5": "2xEHvVzzMLnrRgF36T6vnfCKxwRWcVYP8AsNm89HsxtGcvp8JHYZWvMZadXN2j1z2xYhYjtGpNNkUPru1SpZnc7z",
  "key6": "k1U5KpFzncjSvkGdqJMjaYTjpewysScPr2E1UWEqr1dNAPMEQyS2XeMyxFJvxbqfWW4Z91riKL3xbGqNbpmsGrZ",
  "key7": "3rLeYj1ye4KRTBJgbxgHZ57rvyU8XGy68NHejmJLPNvqtRp4BGYaFeGnS2yq19i6AsEc7rqU1amAzzZnW13DW4rv",
  "key8": "FDhnLdLyPddv53pYwwbnevotFhNeJbGND2ueByAsMYYPPXT3he1342Taa4fooYrcUkmoxQXRiyQgvab9jgWMbzE",
  "key9": "2Km8Krdo2hW1ke81LpCvTkbZK3WRbKz2GQnPh7udtMzoC9ypm8xj2uhqQrcUAAvZFQPmYtxFisKoCTa3U1cFutF7",
  "key10": "hGsv8S1T6nmX7tKfjFobmtBrqU8nwwbBokWJqxnN7RrotS9oxMUgccKo2AoPVSL5fnBGsLSvwLFnZLe2ey4ryDT",
  "key11": "ye6XeD4D3trMdFNWk346NVu4Sf3R47ViQhVcFAFqAmr7GUGUc8HN42t9cPpEeApMLrxLT6yzzdubSZgvHHP6TQz",
  "key12": "4wZt7Q3y4ZxbbrHHYmwt2wXRCDNmq1vMYPPEmEy5vADfwBaTE624mTSbMYUbKcDXmpX8RM9GvgMiffMuUDYJChfn",
  "key13": "2U71LE2ZeNN8bYex6HnMsa6npNwhh7KcTvFGcJADrP9GjxYePjHztLFGwMRHSPemtqicmyyX44yQo5YhDDwAwkWj",
  "key14": "2pKcMisjbUZSJB3C9unU6CNXQ7Vf76xPHMnt3tE7QXaFzgYA9jTkBK3YnTLdHV21oqnRSVGJPCoAWi92Casbq9K",
  "key15": "4iAUkoWZBJBiJ8qJTNzQLjkQpaCG8zCAnHzwbujfW19aGze79wgirx9bwX1S2hwuz4mVXbKNEEXALC4xaEMdf9Q6",
  "key16": "2robW3bSgeRew9eR9rcfxmS2NAFoaq9Xid8X2UXAUynJvC78Pcn1bt3HZvgqwpYnjLRqCMJkuF4SqNU8hYFNkFS7",
  "key17": "3NuECk3fD6RWzMZ6KhihAqMm2Bu3jMmNy3oWUofT9h1FhZmw2TinAcKMmazPGE7QxrKCVeLSsLFdRLWdLUE4mQck",
  "key18": "3uBBvZj4NPKEFF6z92tWU3jC85tQK13apUtZo7Jfj6NzG6TZK73iwjnnLCW7ra5hcek6dixu4W6ZioW7JQgXkdzT",
  "key19": "2gP2oPqxK7MwG5Ydk2ih74ZbHk8Eg3mpY1SxpuJVN4zWpE3XF6ewiyP2w2k3Uw9cW7vAfRnf4ib6xsR1vSRG2u4H",
  "key20": "5i99sEuUR6tewsVM9DLg2Nd2VJCZXFbaFqecFZR4XGKQPjtY4muYLdbVna2baeSQXn14jbuDD4rDN1GMpB5d7Tvj",
  "key21": "zBbQALDojvUwrm2AbkG8TNu7WgG8kL2cfmK5XLfN3MAQoiQzBYoUQVwcDrt7JjFRBBN8TrzXekpDLAhpvRDzthg",
  "key22": "24MrTR2FTKpW2LjmFHQurK5bH59KxcUCRUKmKex1SrkXEkSaKVTZF6S9rLKTZzTPvpBCKcRmtpTpQM8WPyyhQkuR",
  "key23": "2XmdsC5Uo4dVmZCgjDkrX5kRdDJAgTnbrTzMxxZrUzyPskbTkwXgAoCaEtqnr7kY9wwPE3G7MWY22Aa6P9mz8czW",
  "key24": "4UhAWLbF5BQDQWDQFapjBEd2VT5GT2BZ16iHJeJVNHgSZkxYtJzV9PjTV5BF3QwZCGw7LGjn7qUQZ5bw4oR6pRfb",
  "key25": "5RwMRPW6vMnRnthzM284KqNtBg98KPZEnyUA2RSGFTGpUoGP68DR3YM67azt9eTCz1gfz8oxq2mZ3dPtyZ4XaiQJ",
  "key26": "4ctEPSwXAJjPuJMPeweQoVAxmfmf2WwN3hiwzuTaxDTHYXWrbkUoDkZ31x6vzFVBGPnqAHbcsQcLvK8mmTTLA7Qn",
  "key27": "2pSo4oijrPdqMoW9Eg5HU2EuFXBnVbaLQCTC33BZFZkZkL4uQZ6z9XyARscZ4Z1BCaDVvrnE8GpkB85X2aLen8qr",
  "key28": "3FXA42mNnBFg15CGpxAy7NQt8hbc1LN8QbWDYA5qSqYzR4UrfjL2WiFBJWufPf1eLZRQ6JTqUVvYxci4RWoHGoxG",
  "key29": "4sA9Xdu3zEZanYXxrAUVxrWZ1CYN2nnUxSwSZu4eZraWqupBVLQtMUvyr7tzYgnfAt1MHZ7aGHgwDK9kAcwP1HvK",
  "key30": "oVVV1egozHoKs4B7CftnAGjVobepSESFdTNdsSC3BKHc8uJKgK4xTTLTFV7Tg7egqD2WhUZSEtnJvyhLig7xWH4",
  "key31": "4mMzF2BNvq2DmCa4kYMtHB4Ww3CTVNmDDYAidGaHJD3GGquy1v7wDx4ETdCKYW2e4qNK6d9iySRygzN28nXfZWrp",
  "key32": "2AfdHS7jiTtGC4zwv4EQxrBSfLa83yR5zezSKopG8EPqV9JMvvFWiWUiCMkcddJKqxSvnaQ53T1yfw7YR7oBiuFg",
  "key33": "YGixseH4YMBGwnbQhXPRAP5fFqVdUhXqQF69rzgqTwYCssWWtRPNZ9kcDUxo5NSto8irDyY8PSSfqExfVivE2ca",
  "key34": "26mV95srxzmDZg2bqwQ5G6B52xRamLtTjvhqpBpk6Dwf5jhjUCGa2yY9rFvQ9thPwTspuoZKr8C3Nwh99anGYYQJ",
  "key35": "2RXYNDXgPRdCpvVZnn7HsEbv4oEUzoKKidJm611BHmc5fiUY3SUQjiHTikX4o55jfnfg11NLycHDJJGU7ZUjCjsR",
  "key36": "63fv57ChtkBa9DjdimbPQ1dVZVyiauqyekPCcUcH9vZEhfVZsoj7VB25hf6UAXNJc5pgFuEVDaqghTeuwQaxjfAo"
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
