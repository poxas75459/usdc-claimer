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
    "Sgv987bmsmKeajhMv4x9RDYfpXkEBGFqoELAUDsUyyMUC4vZw1tjn2i1ZXub18AJsR4J6eowSQTZ64dKSLv2yk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KXprgUrhE7Mv2qXHacBHGh2VkPeroVFD7bueGGENzb97sPJTwHRpGBmWm555aWi2f1LbToZR3azjPYMocY7YeSs",
  "key1": "2WUKjNqd77XeG8WaMY2FQ2z8jRgDUULgnKHWDLeECGnWuT5wLiwUM623fkzMgnrUkxJSKB24c44iNMZz6X2vkiWL",
  "key2": "3PHUsCXdpykGaXoarcBpQuHqk4EyaKs4kVNZQXYJ2RNsaU2LTPVf9qrTMC18twM9mqUKC3vtCf8NqBcFgYsLN9y8",
  "key3": "WteTnVtUrzm7QabvvRc56U2SfisGpyDhKHpBfmvjZSiyV1yc7Ss2xEgMUMHzpnvHXez3sMLifzaAc3YeaVGdjNx",
  "key4": "3GkHjnm9LEPhSSF8RMEiNDnKXzAM8aF26LR6ejWKTSzDP5HibiC7qQVny4SNgN8ETn2EKj5UBLtG9w3iHWFmhRSt",
  "key5": "3EtNJh8Ph6DBsUEFNoaAqYRcjWAT6vKuGEWBdQDwrZxeFBrgiQ8CcxpL4tUKmXB328XnTFJtaJuviP4QcFdG5GUZ",
  "key6": "5d3LsNesBLf5XjWHGJTFAcYNHjL4hLBWvFbKRMZteAmuidZf75KmSCCW8NB1NUvWQWRaYwva8Q8UFBSVKBW6NsxA",
  "key7": "5cDBLCB8BH1ir8ttniKWJ7EDw6RSy8PqhYqjHBrfNtXZjgQBsuR8vEe3qTuX4QEvSC6ed7KkYgUH3oqKfkw9cePy",
  "key8": "3iAMkVNuXHuaZbShpworK2LiV3yvuUCbxn2sVJttqpRSwu5B5UT5s2MFW34sVpnQxF8VL7oRjx5HG9sdnjV8Fjz4",
  "key9": "JATowpuYLk4wfh23d8FMvF73fxYxJhWARNX5okgwJSgYkb7TnQocQhqxk8DpLTJD3dq5nskoMTaM7WB4vH1kR8E",
  "key10": "64okKNrVLamw95zQT5kJSjrYMYprbUJBrTRTMYVffrHFEXgs6LSd4H5WQ4GCdfMKg1zNXz3Yntridxz67rdk1AAW",
  "key11": "2nvBELmYfQkR8ASduzB5ase7fNJ1V9R4rQJEDLBZfbdibSpWu5eWW9NP3mESf1C1Kfbp929D9Kxhf58pkQcb3sSF",
  "key12": "4pTgD4r37i4RyqAuHYXnTxHQ4fK2u7XopWR46BGn6AEnQRVdsZseaiq6eAA74cuVN7AUahGzRbBC6iTH7sC9Ytqs",
  "key13": "3hvoZVAdRfkUw1AsKKSkeDY7r2RFCftBivu1q2zMNhzD9veMKY18HbSQJXDDRwdEbmm7du9k8uHAFQKq7dfeobSa",
  "key14": "tTowGahNoNVp6W9Z8h2CvHwKLMFZwb1Dc14CRVCmRrmnrnS2HB9q9g1rVbAqu5RsCQf13pvzAh7Vv3gwHKKaUff",
  "key15": "TrGagoMSMjk4r1Vi8SjoQyHoJYA6Jc68YB2ZTzFkYyxWkQGMQiaFYaokB2m13KRZday4i3NA7MtCsFcQKHU76Kh",
  "key16": "xtzWdWDgdPA2hvwBS7KaE8JNG93Lf7Y2icSHTiA9AKmGtBg3CzVH6QgfB6nkFUJeEU5V1HH1zEYUEPvmtrHxwJX",
  "key17": "29HzHJVn7C5rhgUggPTLHhLAmfxkBRwcgeppuVQ3he8DQ9DugYPikni795sa4anyqgrnM9MN532ps9Y9sTbKbVPQ",
  "key18": "4d91MdZa21s2S4EyNHiMjXWj7mf1XdaBKt63XfM33KeuPpGeEAsRAj5htZYweAwrSu6QiTuT1KbQJkChhRKy5QQQ",
  "key19": "4xh1aLNVQnEPdEFTU9cEGJtQDJJ5NAsrBEwUAGHiBvFVZKkPz4yS9NzbPLQrhHhU3gT5V5WaBFvzbybz9LqBt3YP",
  "key20": "453sWT7ZsadQKaHkN2aqNmcfWxbzd6p3Tc1CTH3E12oRedg8CWwkjNcZULsVrxKwT4fAgJ2zXgqrJkwtBhJBdvn1",
  "key21": "2Hqqb4dsbDmxFqnaGpGvEuiCbWXMdakBDjJVhBd2TobC7HHTTSTDWsVmdbLwtFmWGghhU3Cyu5JxCjcSWYA4YVCZ",
  "key22": "4N5ggT3dukbuJd8dyhdHiJ82dWuEE5Ugeg2dqtSqp5YWFP2QWr1YZsA396YosZg6tMk6k9zkbzfFNLbsfDrHky8m",
  "key23": "4V1N54kGcmWEvgxK1Zz1Re1eenBXBUjRJm2PB7mTfnu9HpHatyiQGZ4mTuu5J1C2uQERdqLiB47KCZXHNFVb11YG",
  "key24": "3oAP9791mw3r5oe97X8wqSeifHS2ze5KJCNScSFczfbws61f1FTRe4FeVGX2QnZHR5xkxkwtXGuocJHzJAWbVmPS",
  "key25": "3ETdLsqYQuMX4Fc8DrwdjKkmj5o6GPDi6GiuSY9GtoDTD7ujNyVjhaPTnETxsD972YkzZGdV3Y9FtW6vBSirX5NW",
  "key26": "2FZoiVsiFCRB1GUYQ9A1C6GAZZ7qi6uohpB6CVS1Z72V4J7sF7x3yTCLs4V1yYeL4vuA8vWgyNh29X1c9GPAbH9X",
  "key27": "3Sxuzuess5EVtmdjLPCAqwZBsoSDPxu2h4TdZBuyVXeFf9VjXT7jERaCNAYocURErAVLqx5g4GLAPjwrFyPshCCb",
  "key28": "5SvN8U8P82LJkteSLtbpGaeyPvaSam6bdM8RuXaFKxLDjoN7hqWojoCm6RoUchQgzk9EyJ5idA2vk11Mt59WgKti",
  "key29": "568UTdXohSwpxrRg1ZHWGHJ4ew2pHdUVo2S1aegNkiWkZTzTcr9DDR57xsP77xSB1JSUu6SDVvLNgE2uN4pvLErF",
  "key30": "55UmPdDetz5YQ7c7dCPsLCowbm54kxA63GWnDPDCGMJPUMBdTPV6FgYnGyoFnn9UfjJbQ7vqL6Xyy45HwBSFsE6g",
  "key31": "2SqwU8vypedhYYzw2AViDukcvonHJfZcqem5UW6Jfk2kF38sA3VrE1p8U9WtopaYQPiuQmnhfLMzaASe5Au4adA",
  "key32": "4Mce2sRDrhLhYGW7zrFqpwHbrprhmyyUQPFcBrCyco2cPbzEDMARvxukwfiBEN9mw8zmUrLRGJKwhXUVgMQcoMUw",
  "key33": "3AMQF8y1wCvB7YmyEd65TWqW7mnkNGVru78hxEyvTosnwH2pUi3F2oJY1rZXpjHmQU2VNocJ5RDzSZqKuxGdNq2m",
  "key34": "2PZfkKQX2JFKm4PWi28b1oUgdSB4SFHo9pyCbXhoyz8mBsbxysquN2yYL7jNsME4wg18jRPZbQKwPVYQP92d73Bd",
  "key35": "rP1GAzNfpX5iqvcv7y9bMCA6mfWEC8SqhPXASR4ijDtsJL4tua9JBY9TT9ov8VTFrW3ehNBR1wBZvEmiFLc8Z5g",
  "key36": "2VwheDeiHtNs8PR2u9513F845vz1n7iwF2HUJjWGDpqsFVLFqQZppiZ51jBEj4bXg4NiMx3ipptT1k4RsKmQwrbb",
  "key37": "Rf1AwW7vPX2rNmUEBkX9sLKx3a8uqkdaEs5LPjkEGqac2php7kw847myJTjDwzknRiEj3yBe4Pdv8f8QdRmRnMC",
  "key38": "2bfqpuJKzUSsGG3rYYd1BUK6RvZ8azw8fHfLGeRJtbEaG28CpvmJLaCKXpfAqeQeXyVoZPzW7px5sg5cbNQCbH7J"
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
