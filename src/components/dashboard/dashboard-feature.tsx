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
    "55SfFuJgNgfzpAcG2nvCM7c2Jt1L9R692mLoZGgkQ549m1QxLMqMABEHecGyihULBfxPaRG62crsx8VJQNXVosYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21j2BTzznUqCm2r7rVdCfTwFAhfJ5PmNQN6uT3ikbJS8ENf6SpTxir4AfL4SQE4V3SbYViUWkXUgXPYurojEcEFG",
  "key1": "2dNwnSKUJHndwT2JtqThozRNfjm9c9AcfzwQMZHDnS43JVSMUhZoXaUk5iDuBFjSEMZmgvaLdEVe6X3Dr76X9XEz",
  "key2": "3ciVPqbw8GpiTVRU6KoGnN1LfmZTjFuAfeUNFFF9UjaW1WEyVfAa7E8yrHrcpXxtVX5xq7ZhkJZJxKdvr4rJPXNv",
  "key3": "4CtPsEDvVPmSjfA3R46zDDm3Gojv45HSCbCMMyhjNRynhLMHVJ2SiaaMS3Nu1VGP4Vy1BZoge7MztRFK8s2iDUhJ",
  "key4": "3doZJUzqHHQEGeLUwXhhucLs8CZEvuGfwXMxoRx1VHSydFZPYDx2f3exB65dX7HzQTWkkptNzYtffE8z8444c3cg",
  "key5": "3F6M2WLKW9emGQJW4FKfLJHZupzbk9UDQ1RCzu3RuqiK1nFVAwSLKi5ycfbXNAfsusCyYDQxcQbELnp8XsvkVM3f",
  "key6": "3whoVFrpZSmirw7sD3KHuQRubz7SE7mxCSu7GLsaXwLdRstuyVvwmB17DeczD7ABuV9NSVqyuk5t1R9SjxqLyiqV",
  "key7": "35Ka9wTCeHG3VNjZudtWTRKpBWJMNmxAsZ7uPV5zfu14VMRTRzh9vdxVBXSG8UAWBghZskbUN4HhTrq9BVVGqHhL",
  "key8": "5nmuh1uaVMc9fZBAiSEZk25JJniq6upTt8WqvGtrpqLM6UiR5yrQV5Knbo9qukEyqa8z2tzuYrCZ6RqCnh2uZ4Jc",
  "key9": "2WQSn9jspvo3pKYVGinGVWLJMwPD6LGEdHvW4kj98GF57kWhu7D7CcG1zcWyLSEYkMxTv7giir4gvr7ZseJurD27",
  "key10": "5QsnXqmjxzYyJ6SZ9y1KTjUhchKYk1wazM2J4NW2BToAPDgMExFcNH4yLB7NbVSzTfQY4i6XQQjLkDvXzwFVJas4",
  "key11": "yenzow984d1Udf2xbc9SPMLidQBkcZwKGFtkz9ZaLtGmNho9QCLEyyrCG9N4Bazy1gYC4YSdDC6E9mVfTTfV63P",
  "key12": "42S3gJYSs1ZqxgTRdqqwqoQA3Hqar2vM7hg7n73p6cKj6dJCb8gXvqTUJJJJn8qLfatYV87u5LCxigG8QeAupQFt",
  "key13": "295sHnZh8kQTK5vAHbywZV7BaV12rUQocFR4UcgUWmdfT6XnGhRqugfThE1w5pZFPnyQXEKRvo4BYxYGJZgABGsK",
  "key14": "PXE4Rz3aiEZuAQER7nycYHpivCUgSmDGpN8xZvjLJagVoj9b6ghXQuMGFkZoB8qXMQDyLCxmtK79DSmBRt6yg9U",
  "key15": "4q9tcaeaVXJvKMB36GcE8PmavqXZwBPuoBiLivxYycaAaMsPQCDtQZcdVqs9DxR51H1AXcUurjsnGbK42UqA2PZS",
  "key16": "35WHhWVtHtdS4qpfpAUbudAUBZcqTRkAVRnK5tyBFpE3jnpee5p3PR7C59n3hDaN5iysLiCdNMM4ETE1XW1rvdZG",
  "key17": "2cx8rP9Thu3LEVf8D8MvUYz1xESS296PmUvwcNHhjbXUDD3mdsgqdA2J3deXS8aVytJp4dpz1VJ6JJdgqHJaijnZ",
  "key18": "2kgvBTTmK7zk2i86YsUus5dDRwuNTngnmG5wrTyLMKweDtsgWP1BVNkfLgeoBcyabezKAcVAkArEfCmpg4vnGAfu",
  "key19": "x7J7uVemnGgJjDiwREoFXyqF3CFG3dEAS8yT4yY3eF2x4ffLwS4wXtMo7sJekHw5M48EnmnrsDaU1eEiHqRQNH9",
  "key20": "3rnVzS7LVfqqXMtqxKcKUAGEDyGsamqYr1dN1N7r9cVemrhyiBJKvoPPcroVPQ9ZHGyVtQrkBx4QUAZnH2WVJ9Pm",
  "key21": "5n4Lb8Pk8jLaAcU2t5RCzje1ovHngYNLBPGuwzEpXo9jfpCsSac5hJE9k8JcvQtKGEsD9ntmPnbekkBTtqFwMdkH",
  "key22": "41KmQoWhw6nMnaB15dhg9mcxSSBm85g8VYT5dbRMoVj4yi5EnmBeeuiPiAri8pGsAYi51JYe1D2GGBcCGZi7cJ9r",
  "key23": "5e5JswywgxcHDZFE8PDW4iuqVom4ZVer96g8XckrjdhVUnsmvutRFrYWVTbUjjGafqP1sJiQMhNbHSn9zYkTr74V",
  "key24": "mJRpbiKXgtpBbo8WXKRsQDC86S6o391RfwQYoFLPot7ZeNqNthvcn5Cu3nPKcMezQi9Cvte235pe3Yhv5yH4Fok",
  "key25": "41RTnVy5tEjx88pHWarXJsq8mfp4NEzDXpKEzwDt8Hm3RAbHPuTZT58zyRvbGe33M2PN38GjJq2uSb9npeLvzUqc",
  "key26": "W4aA9aKWrhAs9vSAfEvQ6Z1nTu7AzLgjkpHzfUVMmfFpB8e4KiRG8vt4hvXat3SetpyNTfnKfo3tSxJPRJUR2oz",
  "key27": "4M6vRrTmrZorYozN4gPguaUxnHiMUbsgSNRpH5NxpEY7Xkn77w5tM3fvS5cvodHSW3BXgSEMQMApAU9wWT24ePxp",
  "key28": "3Ho9rDQXuq43FkENKQ9QVBod6vY5wG7LZsPMm7WnHKfZQ7PFHwwCchVQva4WtALxPBrrxwzucjSpiHsRsPrTbkXU",
  "key29": "4z4Hqt5U82Jp5qFFrSr98Mp1B4VswWhfT16i9dx2uEVA8jCqKJdrwVn2aVZLiXpfRbBCofZ2GwQEYJro5HKU9gd2",
  "key30": "5peNwKYTpEwjq7hsVm7fmdRL1rkEptY7XN7TSfpyA5DdErq6N7EB5dZrmbZvcpz5dydzZo5y3GPgfFQikZ6BrJ7W",
  "key31": "3bTeCpQUxU1F5QVHdTee7NLkSK98suySJWETKoYmmctCQmERUE4Uee48pS5G13FCaoQXMuHxgWeMC4oBP3gQ7jYV",
  "key32": "X6Mh4Uok3k3cyyRDp7FDj3L3jk3aYCh8zbydDRgh8ihPncBkWsb6oJvdXyF964NGEmRaSes9mf8Gyh3UUmi17iE",
  "key33": "3F8kE415tRvRZRgn4vgv8DppJKykHRow8MHzNub4wb4uNGMn2HhohpUZHNfdhpvyPmjVXckRhYj1F4L6BPWeCh5y",
  "key34": "3RHdKm2nZkZmi8SH1LCgcfgM1LLRdsLMhjMZonFcst7mkB4hw7L8XtvwaddtjDvSq2FfkN6vKtuWAv1mRFMvbw1o",
  "key35": "31VSL8D1wreCRbYSPjUzY2vdgVEVDyyaxmnp6EYbXU6nVAm2H4in7FDGZGwsENUJFT3t1MgJXQzZ95S31hDg5hvL",
  "key36": "35rF1XmUupSLf8czeRezh1ELxRmZJ6dJy7LQvKcCCNzdpizjDv1dxnKraDsL74tcQLxTEunMyhxsbmP2BnbH9AYQ",
  "key37": "3mZKrfAz3CEvzCBRn6w1hRpYEmKbXc2Tco6kdrXXoT9zPZ6dFUmL6fryFzXLChYDs6jvyuvUwr7GfrCEcj63vJYa",
  "key38": "xEoYNFmR8nhWDfzukM2RaaFxsfX5tVTZaDidL1Ku5r4pTm2z629oM4YeQXqfxGKvyc3s25Ygj7HgfDMq2j4zXg7",
  "key39": "4fxtourorxchLMmFGBcVjLZWDQCA5LyzAzwVvMCiBg1TiosxgL6MKER5Xq2uB27wzpcPEE9DbKN3d9WFWBnEec6E",
  "key40": "hNgtvm1MNwn1GAxhj9iRFqrFXsZhAMJ61fJjGD7iDVAJLkmNA17tV5Hqc6F5kmowvhXhfWFZQSrypJHT69Z4ydv",
  "key41": "5rZecBvxrJY85uLGZUhUJrmsvSFbqoJateuCELV4NvHM2ccvVUPD9zU1DV4TW8eUY5tdRYBdDCWNYgPhbmncrexg"
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
