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
    "2BbK3VrfErVP5eFhAKzdU6Jt5bxXAy522RS5RTztmCRgSfkjBZfsgCUowF8h4iuVvmN3YXdwAqgV7NpE5GXj7sft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VhyKdUe5d3Hmz87Fj3uAzrQtWszonxnCGSPMyWUFcpAfeiEnwQ4qwd2eLWj5U7yM4RJfzP3b9UiRcFQKJTJRWKS",
  "key1": "3oHRJQp3wngGQMGyNhRYSLSN2yGYaz7n3mWahHvrmGNrsachSU2pD4HgpLno6jrFECj1nSbN53YNmQHpPr97V7sX",
  "key2": "3uomn8joTmNVfV98YwDSUfb2dnRM7C6WpjH5CcDMsVrZwywWL8S8xe5T4F2GPS37njPQwVKn4dBc4wBd4Wvav2SP",
  "key3": "EU18a7WkncQAZce4NXpzkuMD1QgHgw1kMhNK1rBw96vKokDj5hFnYtGtJ7CLapWNrK6XwqABSHmWdZgSL6vCVLu",
  "key4": "27QSyvW14oT5Y5gx195pwP7uKHcxYAxxbPA7tHsqENuvN19Xi9o1tqkecqHizyZm6Kj6Qn9Xbo5JvQ54qeLoS8pt",
  "key5": "3ucXYJ5a4JsZYrsxRrDgGQCR4MGPEvG89i9aitZdUroicnjHuRwYjfong4VGrepvAgULjbmAaftQCprYijssPS5E",
  "key6": "h1hZ4N8U5JnBXsQ2sU7R9kaWhLeqv7Rim1poZoJGZ9TDmbkQ743KKSJSLX5saspmQnhu63jcKTMpJeBrHKjmPPJ",
  "key7": "ychPwBVDKZaWqFGDsqK9VStTN1Rne99ArY7t4rTv4VNUEMiDu2FGQzgRV9P4WeqQRU3dmSj58DZLQa1pcSa83de",
  "key8": "QMPGkv9XpvL8dyYXShKHW14fn6WA2cS69eEjuvBtRMebFJ1uXeVysavU1keSLScnUgYdy5XULrS7tAwgVDiaSTS",
  "key9": "2HqvzZT2Bqp2vQsvxSnDC8K4zNc9RVcXydXTvTHpuDoGAamHYswCQvGaVVG1XzZnWtjE7kwMPgjAYsnN3b42DT12",
  "key10": "3MXij17FVxR6YMkAZXwJD7rdieYTTfaWSy497TgMMUuXpcWcWiangSQVpSGL7kU2P56cFjB4jKNTD586ccG3iGHR",
  "key11": "49QepewjY4YzQmGDEjYiNoHshrKHDrdoj54DBEVgzqzwpYpJsFvbE1inwyMLdPdphB8vJYxG13KjWdjkpydim8Kb",
  "key12": "2eYHxEzY3sbVH3mHHm8m4WW2fQ1fpCq4rZDjtS92k9he8HpMB4kPDxRSo7qAauTjh2Gu5zeJ3SfUF8rKjfttnN9X",
  "key13": "4dB89sReMMNkDpuouCdv3fhVQbFrt11693uqz1ikJ7WrCrm8UEEnX9Rb8xgVyT4pDrSoYHkJFajp22LthswuXtWC",
  "key14": "zVyyEriwKefNc9TiAftDNUNtmBHfMqH7hNfbFjdDB2Ch1mfLhDp9GwqAe6uCDFLKaXEZZU3zBfAencXgQEqfhC1",
  "key15": "fpQVwwfNsRyMLaB5ToqzjYGQp7uLf7qfdCWfbZqMUHUhdsCMja1PNSM52U41S5WgWBnmZmAXScmHpr1k2RS6mzP",
  "key16": "3feBYPFMH3iDQoSXWopugZ5ywpAEnRCUeJj9U7eCDtvFmMnLsX4tYAU3e57rTrHba4nNDtyGV3Z9F8c4WYP6oSiT",
  "key17": "4CvoXmtnQfkBSt54yg5ygyHi1twCsgeZA7rTBxdd7HnzTxpA4fmGwDEuxGCFocRGWCTLe2Sp98AgZ6ve7HrTgMmT",
  "key18": "655WAHW7xpkXQweNG3pADYucWYMVCoNAB2QjaKy5UqGE8ixJQYiEEJhnRBDoWgsutujE9gzvsMnwWPenovU9gVH7",
  "key19": "57oYMk3D7c42EwesTcWpMyn2WKfYB48fFJaCeipcP6cNYbsBc4THQVixMMjT7DT11KXDUFR5sM5gkTDtcLTPN46X",
  "key20": "QJyHk2FZSWaCgaarGWxnVAfv7vWip9AhTNSoqhePmwBUfyUQjipVrS6pFpL38bNmjPCQpTW3iGRWF5LbNGaFSLN",
  "key21": "4LHJgR3Wx2CP2thgoggMcZSu9Sb4KqQ2cf6bsAggkao7F1h6nBcRKPx6X6SRv8qMQX72uSRP1BDzfQoFaAVvzUza",
  "key22": "pozX6EWX72YbF1f5c2LKnnQU5tBvr69nANJuFPfLa1NmHvn4S1HtQQyscgzJfFtxMydKm6yuJCsHBHzs9dbF78k",
  "key23": "Vx8hYtmAzopSP8agitWT8VHeZBxELASJDaShAEL37teC8FYFmHjriP417XuKK79p5QWhE5DHDdYwEHBfr4f1RCW",
  "key24": "3RTW71gQzW9HqrZhRQagP1NkGAfwLUdMhL1ncPX4MNxyW2tz2M7wdHSPXg8gtZ6XLfnByY9n4LyHFgt5r8WxhBKq",
  "key25": "3KtW5A1so6kSdX6yMsLz1wwdtb6ePCJaP4iTmEeCMHtGthvFLGWBvHK6aRbzjPuDJkCtwtgjJZ8y77PvJKb2ZwzT",
  "key26": "2AYThnYWr1WvxkJtg9oG9jHusnX4xKrZVtVVhk8w2Ma1VcwzHnTnM1KffHGK53rujYmu2ZH5p9jeSNm9jJnTh1EZ",
  "key27": "3Pcx3pfPoptxSMWVjkC23fLVA5XrP6U357AocGLXg71dtcHpSmrVo93UWFhbn4SGheo16t6BzgZvBivXR5Fvb8yL",
  "key28": "4ZTsUzUuVL4h8mMC5Hpq6TvAsh5Ht824CRejFa8ZC5Ge1HNjnGuYwknmfeguRwt3bvM64oNxeMqYe8RCDhJYd1QK",
  "key29": "45aWVmxsid5i4ndVvYPN55JJWCUbfCqcY2GocQoMHPi55NycgPmbKC6CR525EQ3LGfPPyaM2GkBxqGEkraZCqh74",
  "key30": "4ArK7FDvZc9sTAMoyKnm8WXSxvyQDoXzi3TN6pUY5cEUstP1foDUC7L3rViFrtvWHJmQhSbyDh3UKVKH8qmTHEwq",
  "key31": "JYXxfTUEH4RF5d9DGSy9tD4LQTYYL7BoX7cpZMXTYp5sGJuZgJ5ERot5uZhxY9z9iEakJiGwXoa6YWgKLGdPu8r"
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
