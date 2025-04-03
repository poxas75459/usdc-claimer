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
    "34J1aZqZf58KwvFeiKirh6MM9rFLdFrzgLSjgyN9vjM3kwjaEKoWpZWeYhpQccHvUhGx5hL2HxAktXqN2TBobab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPJfCRGyLjrHjks25CXCNo1mrBqBVXEsPwpvdsekVRbSeWD8AudXwbkjvKdJA1e9ZEGBVqV7b5WxBicAAWXDdA1",
  "key1": "37WUZ3d1onWmqLfbFaArytHMQqXKAKrkWNDJd4FzQHNqAhxnkQifLoebvkyFjbFaYUdA5WKZQp1588EYkkVywCS2",
  "key2": "4VacST6ArRDffqDkuAGpvrgTV2z1LoDDuajC24DthHotkhqrjejFarNHG1U7DqXkSjHbBuHeyDjjLYTTCe1EJQWk",
  "key3": "3HRhKuPfCoZ335RiHcu9mbB2rZa14XknwF3xEFTZ6BeJ3KKr6iVQUnmR4bnvup64JUNwjVcMNN15RYywwy8cE3ba",
  "key4": "2SxsehQbSKG7Bdy27wbCB3HoUuKxpvKxCzZzCyr7eRWoTNh7uAALK2snfm4wnTUaGhLCNB6Hz48vZ6xPLU5tFRwr",
  "key5": "4izbNGDcwg5XhA4tecmNwKXkSsedd3o1B7GHzLDA9xweKRxMztrouuWiL8fPBVUotA7rYb6mXMa25sWrY5BbpXo6",
  "key6": "5sM8TV1Kx2LivFeVvNXhA5je4E3VqMjbwqxmPc8tHeqM1tGfsTxu4z7GLGszgftcuy1AhDPvtQ2Lu8ESptR3rmZ4",
  "key7": "2j1z8UiYWopLdCgAS7QSfCGHEUWzi1ETXN6PbZG4wByBiUMKnMUyezbVSH6wUX2V5n7etyHY5ZsRRQdcGzDBfQf1",
  "key8": "uP3r3b1Rv3AV4s8QkcDestSV6tfuxQKij86L6XSgx5Zn3V2mKLEDoVttcUJmKGNtVkqdRDt9aKoi336HpXTAaA4",
  "key9": "2TBQ8YVA81u6yVhNMEBWz7NipsszPYnNBVejzhBLzwoHFFyCQcPQSyj5ChLpTz2Dk7LuGsFsSDFciEiy4tuZiANY",
  "key10": "5F3pzHsEqL5HqfqMriSNJLgk25YfSoRrpWT2gWEoQ97XpkH24SsBgzGTDCnBfLWBBGcmjXW5VC4iQcHMZDpYqo4q",
  "key11": "5HQ4o9kepnAebF3gd9TMrCEf3cdisGrq3ZsN1QXDEyn4RERHHsxJ5Bp6aMGwh3iQTjMZHDa2vmLAVgTFcTvX9dfC",
  "key12": "4VLEw7FAFa6EPXRoUrAYoKSz66cCpEJYzQJW6ZayWRp9w1rsE2X8BC9EWxVNWZ3bVbDA7pAqEWKntBe8DexLZe2m",
  "key13": "32ToR9zvRH8HggHFvLRqUhFpZCiB23fReAc6s1nyYX5LrEG66XFaRttswphVRGZqfUVkjoQXQTkBGt2TbJZcgg3U",
  "key14": "5QaeB17E9kWeHD8aeKr2nmwLJRVSzknxBdhD1Zg7it1E51iW9CnEdbw3ygS1FQCsMfuBMta5UKW78VmhfNu9Dagu",
  "key15": "4nyx7N2PNsoBmd556iGAcXzPtCsZ25m9aqbn7hcyz1aTnR4HJAzJmn1aBTpyB6krJZffqAvgQL3hAPA2Vq52KNT6",
  "key16": "4cSea4vK9BFUzRhEw3digkPAqVE4qFGakCensodYDmsPRkeh1fubWhtP11qQSXwrfu5JaNaZxquwUqSGyR4xT3Jr",
  "key17": "47YZtap9h7G1bym1RkdfDRmq2Hi3hvvYiHEFuX3qMd8rD3h7TUxi2EZh3JiVC7ySgqb5X2ueR892XfwCQKYMGDDS",
  "key18": "JqXL4AN52nY6qBsSQzsHTxZwRbPEww3kT5ZB7GoQ4rvpFesX2duXhbfqk9XUgKB7k34ziEfu33CURAqyQtLd4VL",
  "key19": "ebAZ8MCBcjjDfWHvxxxocv6GF2BLQL23u5iYGxQRYJuNJbTwMjKaF7SmgCHZW8fSSMnSbAwQsdBmtrdCsnBPP45",
  "key20": "3BFjgfM3Lad7SX18cbJisPsbSsrPYqZV44qpkfZjokJgguthUCsjkUsoaApGaRAMtkJvyXd4gBxwZkNSgGBv5dF5",
  "key21": "5zF49pS7fCpaWqXBAfPyiRQec9qs2wDYC1Wdgzi7fPrMYkJG3Vay7fSt26tGisTaMURvqanpkg51jffLH7VEYAqD",
  "key22": "58NERZxC8KEuHeyoKBDuAobze6R1wNSBcgUTvGwggXcwmVpM8ypjRdTh6XwHY1S8XkpU42DCBJzcYQBoga7euZq4",
  "key23": "411iaE7kbjB4R8Bi5JRKij8P3GexcTzSZnGhqe8mLQ8RBP5HhUg7EL2H2EhEqecQ2YWcYEthCrTHP2ZDVXyJfpm8",
  "key24": "zfCF1C7RdsfyyKr85ZAdxXLD1J39agQKRMHRxtTPSog68E2RNeaG8nLrLLw7XK3rHxSz69EXojTEyb3yAnQYJLS",
  "key25": "63sk59xeyandvWo36SZZKj3Pv88v63PNeGHNf1xsuJ6xPwpG2P3zMrfZgMJCD4ytK7w73HR35vEXJpXVk3MowE7i",
  "key26": "569hmaNxkY465pe2pb5JF8SrhfwM6TZWqiiuwFLrcb165MMKbFXn1igvtLpqYXyjjhcavntSjezihzAzDnZHAFTd",
  "key27": "LjLeiCvakGaRFrfWsNqivzNdTynuAB4oPzVSMMq8TfcH2rVEep4ytjfrUPTSc3u7papAY93TsmDDQNwRg4CGCti",
  "key28": "4X7r5KqcDFQTtBs3Mxxb8W4CTyHxP2NAHePLfoJuqJHZtpCGZmL57NiP9FP8D5rPwjjkRHWFR7NCAszts3Lyk2JR",
  "key29": "4WqKr2KRnsRVRhAFzQxekfUhWUgodia1XRuLiWYydrYsCkASSeCNkZJKw6t5CTW6UN5RybF2nmvC9nEHk6QjPX34",
  "key30": "2d6QtcNoiNrodHpC8n2gbsBjyHbCmhuaJEq3c8n26LS8GbnMunYJv2HD1tQZGh7mZpmbQzqHbKSq8xTSK2GaY8De",
  "key31": "u9bRaSn4ZryxCEDzYQvtVJaupFnsSQmm5Eb2t74fzYJtpyXC5jzRrSjzvKif8dAZoEw1uJdoACfAYKsZJHtpkip",
  "key32": "43Z3rZX4ytHcoWsfWie5hvoEy6AhrMGRtu83XRNrVz68WL9je1xTNEJYomuEdtkE6nFUZd2H4PquKXyznZBrhSa5",
  "key33": "3XnRpAvE3e4EUfBn5J4cY82KXQRtt5yrxfqEaz5vgs4djsWxU4JASvN2QrS3Vu2REg8j2SyAgfG7z3hEceM1inLm"
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
