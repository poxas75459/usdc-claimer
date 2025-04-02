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
    "3MvikPS3iYuy9sHveySWN12xZWFn668kWHLmTdvJYv3eg6R1gRjGTsSqH6ujFAf29eiPQbP8JrE1yBGARisY58PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FNyDg3heGqjM3dT5CZaUpSazsrJ6u8ADJbuvpdSkrLse7yrUV9RWuxKwXS49xtkqJkSKDx1oWi4P54aRoc7axDm",
  "key1": "4LNsa62G18BrJ54euR91BK9ztkTmFrQpqErDGaMrjMXVphtLCCBL3HApDnf6LjUPAvSt9Wz1f9nHaNU7TR3EBhbd",
  "key2": "4HuDpZCB7LVRN1w7c42BPx1avYiqBV6AvL5kA1bwYsP1v2G5Bh99H9cKFday8U8ZEVHpDc2TCkuW8T4VpUhcBohv",
  "key3": "2uJ51rqXd8jmhEBokJQSoGXoHg1Ghdyp4Hxv3NXz7ZRAuPQb6fZeLpLrRVtTVeGPGiVfAzbGcAVd8D8SWwEqYKJ6",
  "key4": "SPPjCw27houQuFgnV19rUbvnWUBjnEHgRTtmzxMxTaRKR4BzD7impx9uE93VbSaHTEXLCo6o7nvd6YtWXr9BWds",
  "key5": "3iJLJDQhtsic2Ev6EUPQvsXnBNnAJdnYjXTXdUTp2HQp79nuKgcMr427KsT9yNspB8mBmRgJnuWUsjeTUQHusui3",
  "key6": "2hFigSJ5PykZPc2yLNDdQRzZq5BdGRixsFyjjYfMnuD6Y6Yc2fjrCdnkjVzXPz9LPpRMdcHbw1W7nC2z59fUc5eS",
  "key7": "pwuHcohMxo57Bnw1UxdJoissv6WabaDdhny5owZZ8uuyvPz91j5suaL5sA2VCsr3spBYm6Mieh45Eng2UpLq7g5",
  "key8": "3hN3sz2DTcyT4YTQvr6tcxUH4c1UPJ66Diankon2yrgeUFMDG1xVxqqX4cviV3xt84KWa3tLC42tJMxZhfrCDdZi",
  "key9": "38NDyAN1AMSYHCsovhQkDp2vy4iKCMyjXab6Ku2nd4ri2YxNpn9rBS3k4xVvv85ShvEVreKQ97AaM5GGymz2dsfe",
  "key10": "4zSroaoN4rKCPkecqFc2Eo3VyydZjVGu97Tn4kWPbHpiuXC5F7AyjM1T8dAWXGEG9PfjXQcwEhmgpRH49qnb8eNT",
  "key11": "h2QPLqKc4YtDgVTg3iYY1pM1hKN6S7pwp3qi47xTzmuewdAH6Vv43dm1BszZMgs35W6Nt2NE361Sjm3Sw4vCqy1",
  "key12": "3REFRQTBCz8vPRrvfnEhJyATeHe7ZYtvb2kpGi16rDuPcnXr6fJm7TTjg8vLeayKnYTZ7R8H72GpnweEG6ZFcebX",
  "key13": "4A1LWs7bdfXz34jUiEyGLiYxJbphsfo3frnS8zaC99YPBurNJANx3etVFE8c9DYdQpnQkcWvee8ueR1TDK47pT9q",
  "key14": "5Qyenpvtf7yWvbv24m4XX16sn1ptokC8SPiCLVZykiZD9rXEUXHNLTE6opcRrnRHWJiBSVvqqzCSFpqsivqDgh9S",
  "key15": "5WhagNYFdoWQwtanwZ155RQtKadYcNHobtH8dW1bwJm1cNY2KFjpp2QeDy3ruygMx9fDwJE8ioGzuz6rjJH6tfx3",
  "key16": "xQLycSMwXYrU8m6WZgofjjfbLnsYJKrWknzduxChQVZr92xnkjGrfXD151naC7ZfDmrd4fuNw3tmaz37zWzzHci",
  "key17": "5jJG2BGq7YEGepucRnnSikMjsYDLDjGqPs8J97B44PrNCNbssz571o1snTsykjpSXsqUohAdeJuzoxtknQQsUfyR",
  "key18": "3h9D6UYHQj1oquUTLBFcf85EjFDvkcER4QWrMjxp4Ff6hfiHJANFAvCYoVArFxAgPpUy9ga8FLbQF3YBKXsSJrrX",
  "key19": "4CYGQv4T263oSGzFz5jrnVhA9ouSEecMHUqeJ8oacU9bMtmAtYd15ZVB7pdhGdNQUaZ6edmyaQijgLK3MwPpUsSS",
  "key20": "5eGDWRjTqnWj4T2jkFWxPq43sU3YkzzoV2o8K2h9ZxUk1BDKRh55pbFoN4PufzLYDoJWFqAwrhKX3U7Wc1VAt5d1",
  "key21": "4F3hq4BbCn4ib48XLNbS8BbPb7XA7Vt6x84d39GdPb1mfV9HmHK75nrK3EY9B6A2d9838bT9KgLhFhGEuEzX853c",
  "key22": "65JE5TggEpGY9AoqivMSH4dvpY2mPmJ489D5HCNjLvLVvthCbdsCPiDQzaYnsQWxxByvQsdJrZMMdmGRx9PtjqX5",
  "key23": "2CwNHmZQK1g6LGHCcSkqVQqjzCEuHixizotbVwxpbWvjpf5gzcUZPUyS1R3tFGNfxLtacjpa8f96191XGYU421Tf",
  "key24": "5ti8Ww8CgcGVgQDHrg9Vd1u5Wp8faN7HQ4L4vGDRN3FmFocdBPAJXcsm99x9L84tmkn6WQk2Sg3BRiDZGVVBMeJ3",
  "key25": "4r48ipxRvPxJxKWvk33cLAME5XHo9o1g96juySLPtFytUQDjT7CU9UGX1nDqoyrQq1aLuNu8o1ozBmHg9g88KYsX",
  "key26": "mGRXpv7fw42HmnBwDAwMTajzKRX3rBKj6agetZSRWZNgnkWHDXjF7KoJHCynXfAgbKnLbsXWYd1ywBUxrZ96U71",
  "key27": "u7n76a3VUxHqCbsXXuBX62Q8St9JN4rtmnsBng15fzxLacwihRxwnQ2AANepmzSS8XsBVKrZEaY9LotXrUoHktT",
  "key28": "2nkYAUh31b6rmqbtz44YChCN96z1GtBvxFBZTp7YobNE7KCdnejX656ELqBmZP4kfBeHFkjwt1zoGWci3WSi5GE8",
  "key29": "5GGaTH38zTuNgD2KoYysHd3WtLwVkw1pwSQwMmSGp5FtcA3EfagWg3K5ynKsg4yQrRptELW6WNuNPcLzsQhyqQWc",
  "key30": "3piWcTWpAQUjm8RVqKfqYcpT7s4u47FEpH2Cc7iv4zpa6WjtXJzhb4YFcm1MRWP6QpaSkD9icMMkp7mPv1h6ScgQ",
  "key31": "NwWousDmqSXMvFxaZkVdEEoPtdbZYiwThofJ32NafR2QYc2kgrBSjVkTJFGMmjy4NDwRY7p9XrUXJVit7837pmA",
  "key32": "2Tq7S9RJFzoDoEEU8Q9x5V418jvygVEgcNzouGJVMTgvFWMJ88tqsoMrXkykCxzFuCDN2vSmQn9oB4SjpP41PtQK",
  "key33": "A29yTXQ24Zkyc5ndefCUHdVEJ2JthZtgn28qeRZ7n7myx1ixNzE5QRhS3k9V3Es5dEYWpzuFwvSadvncARxr4PX",
  "key34": "3gxtKzmfZEZFParaq1csjKMJ5TfNhz5JbeZ91iXKiN9mKtZKATkE2cVgjbhWFsB8S5JkpGsQMReewJjPRC8qrp5Y",
  "key35": "ToMaoiZpj9UZFboB1s5jpdx8zX4Z73UJn5LTP9W9vx8a2zh5JzpapCCKHzeyyt8HQZTf62xetZ3QzDw6MS29NX8",
  "key36": "2mJNYsYoJKYocB9nwfTA6d5idEirmWbtfmaqVssma9Ukc3Pxc198aEr88vNYMJEfx8rQVZToJQ5gJjXpN85TR1QY",
  "key37": "5tQREYXW7o9DeXWzbjwqYJkLK5n3zfjNKFoendr1HSYvdwmEbvt7uMbzSLYWUdPfH6QJjnHZEYQz2E4jRTZc3o8x",
  "key38": "61KgAqUuohogcCup4LnqvknQoCsNcbhe4EiZFaaWNs2D1YhQMewbtHjf8vXSrH6NHWrJJ5noPhdrz8nkbKwZNvaD",
  "key39": "4eTLFpdCHEPB2EzvBeQ2Ypk1da1dxgeaW5WnRf47xkBwpkupqeTsDH8CaubfgwqSTdmymoF3kCj5pnhGE58aXmSP",
  "key40": "3FTMCcasAUorebBizugkUTUdXykBkbXsSfQxCqsoRMZr3UASJ2i2mxWMXsw4XpRpCna2DcNrAS57xSCmKETKeMiC",
  "key41": "3BPwD1tMrvjpLLwUMm8dWzVRmqFMwSpV6GWkMbZS5tddNEB2L7mesjNnDzbrUbMC4voiLc4TUHcQcFkbdSuN7JLT",
  "key42": "4rEZmMah1ryb9HP6nTRZBFQcJUu6NybF8c7AFrQTZUvExJJt23R6cehJbEe5f4A3J5JhTYryyLhKRvBKKUTKuSJ1",
  "key43": "3ieE2pNzA9RyNtbgYaBoLk5nEpthV8wKtmndybeqjqScvfPw3GrcneEWBoV9G8sLDjyNgs4Yn7TCx6Mir9e5ZL7z",
  "key44": "5v12RtyQ3LrsguUGmx8An1rFjGFtJ9Qqwaw9qFvkY9L41tNAoEq5cTp6ummPwbgsK8yuqzDBnJS9SALZW6PoBEhU",
  "key45": "2X8suxnf128HrUQ9crmgmYPRjxghx8ciSjHV746E2zTdB3817d6m2ENY6LZBPYhGyPD51LvWGDjX12UR5rLQKM8h"
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
