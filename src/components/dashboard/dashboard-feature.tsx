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
    "3f9tPe7scJ2yDi8r2sEqwtKPrWsQTspzA96hVd3pQNfSeYDNzibmwPCQATUoTmCvvfaV8NzxhJPkvBtbJqFxDNre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ppaq682yTgLnYz46wvTAwMi31pxsrGtAt6MN3tgDbm5kHnU9g6QrfMW6kg68cFhJyF9VTbccUWSQ8BumhetEoa9",
  "key1": "2RVhbY1M1i4vyvqqtCtVXnvLXUKu4geZCd7qoUj8fiskrHcPEuoZGNgrpD6t1TSeoQppTdaCJZtVtSkozUPcusmS",
  "key2": "dnFAc3Bg8Np6qQj8AtcgSgr27mHfnYtCHbqsW12KE3LbRP6s8xwGsPKnX7nsdKRu8DtCQkpcbX4mEnYuQFtVhjd",
  "key3": "5Vu4vChi1h7tXKVHZtxRDnGopxrJMtKmzn7vu4ToYM4hEpss2ohpjkXxbUK2tUUGXsbc8KDNMNtrvKWoZDpUEUtD",
  "key4": "5kxsBatP7r6gDmoyDP3zKrTUGDRhSGe69yZ373ST8ywifnmKXGrRtEcbRJMVxaASvEVVAA5srKrgheagdrAKiNFi",
  "key5": "LC8g3Yh8FBDWjbxAmw6Avf8UakmSq6wMJgEVa1FJ6xjJ96TMuhXB8r1ukjPuW6w49nSLPz3NX62zFikbWRMGCE9",
  "key6": "SxQnrdy65WFWsSFMkzWAQYiM1ysPcERrEZiJQh77RFMYakGtUpJW8yp8jxpM8dUoab7T66KafhWkGXBumoZ4h43",
  "key7": "2NSh5RF1Ksr7toLKew6fSLaHoSFXk3BuCMh49Fs49tZ58rSoZKneCMcovop9PYLyLgruDSqnbNZFFrNzdF8JR3v",
  "key8": "4K6yh3xtzeLR1yVcVGb2g8FzqUnuhAT2M6q2CXvFEzArbwUq7sNGM4NYtZes1VEzAmvbhu2hyCAjWUn9tQL6KJyA",
  "key9": "2ezBcSM6deD6KCPYta8hNmEUEu3faSszAsdwqDSQwNBghLzNUHFzw33Gq7taCgXSo7573q5mMUAHHSUcC4b27qom",
  "key10": "5VU27Cc5eNvC34TYGJZ8BG5hpWhnbdbVZZHKD2Hm9XwHJquGA2VpcW4L9W1ScvXptAcVxcf6EjzLNi9H93feGM4i",
  "key11": "9bVLR3iE3R4qRLE5qts6XzjwJYBWEAYneExoCmMAEjKjQnuW5XSgSAwvgfKT12kiikdBMKuY2DdtfamgRUKgWJM",
  "key12": "4kNMCCe6UuyoijwYJGTGWoz8cMKrf4CFPdUSRiiatx1ZTgs5dz3srwJgA4BYgknE5SkMtmVZzBLt5ZtvWoSttcMe",
  "key13": "2j7V27rjbxsBsny18VyzRpkeK6X2GgHqUbJdP6hk293jzNNzfbkC3mGnne7US5PrFk51rExPGtAj1VnQ7SujUAB",
  "key14": "55JiDzFoUt4F6yxw4YL1cwQCY9vXvzLaqbtyxByRJJGFAcoUKGRnsMZxSwMAmAVERRrD7EcwY5Ex4ioi3iBgUNSv",
  "key15": "3U8iSC7nu9xVn5YDUo1LBvnADP65RyPpzS8p1i9WuAHT3y9sC8YhL9bToJymZkAv3Vkbfs1HA58Dwzoof76wqiqF",
  "key16": "4GALNMnorY1LC6dC5o83bKvCkFCEw6YSpx9EHRHhZwn4WWzodHRg1emQFq5nB6UBX8TRM6eduXhd1J6WHdAZ7r3J",
  "key17": "3mLT1hq3sgbSM2CiVGqZjCGSKCkrNAFFBfSe8gqvEgtjyDVkSNtdVDWYm28bCU3dRjHneDAbjdKrzDkha8AkXYM1",
  "key18": "37Cqnjs8ZPhCQYMyEWFEbxeKmpV4HSsffJqFJ4tMktfsTxXRDDKFEsDu2LF3QJBnHKQTMSjQRf7o6wVzLTkBz7fa",
  "key19": "2un4zaCe3r4w6R9C2fDoM3n9y3dkhJq5qRgXXArMfU58PbkCE2xf357ijkS42Hxxzy8FJcPRc3mLQyPVAc53RKK7",
  "key20": "5QwjVCZB5hmAGaozLHB5AnD9HV2eur3dAbr3B8nsRpsFEYzzkcjiAYKXhR1KjgfoGM6Eyv2iKKBsB4qq8Py19PUr",
  "key21": "5csAL9Lp3abMhha9FXQiS4N7xQCCWmowABcdTNiRDzPY9VDXUd2Uk8exTHQXeoDWzhHGsa31qhH3ykovBu9VP7c6",
  "key22": "62BBfn9R7iDQ4zVjQdwwL8ijPKT1UCJxVfxabrs3ooYRiMFd9b6VXW4FRD95xPnqmvo2ViimEFe4pMiapBc7uWQ3",
  "key23": "3t66CfAcgpZYwgDNhquSSbv4oCddc74dWW283AxZEv2y7g1TmjMVqhNsVGAmqF5oxvTE224rRgJc2Qo6G5VK45yn",
  "key24": "4cyKNypLGCGBCdQ6NVMKKHV2DLfPwMc7UXEg9WijgbS8y7GWsDcxWzL31rdnYPUiSjbY5YnApF7ZJc2rdCMoXWAK",
  "key25": "XToHUiJKHJj1koyYxvvQua3SNF7D1HKYCsccgisLXy1Xe4g5rReJG1gjGq71fS3dgaQHS4D2bKKUvrG3JxKWDFX",
  "key26": "Cfw9twHd4pCj8CBVhENGzNaDZd7p5mcgVXgdCgn4xNXc48LNhKKiBwA2A7VU4WecLTTaYAPU3zixhSYq2Eceo6u",
  "key27": "3AywnrmegHREwQtkyAp3og48Lx9G5N4qWcEvJpAtQSVSfj5A7PMWancd43eds5fPE4MvUjzd4siEs2C2rezUUDjs",
  "key28": "329vJcNvVhnidt39dPHfNjv9AwZdMyBNkRLRrPQDi3CERWiyoTCv2L1vtZfwkuFJvjhW3gk26bT3CdriuaF5vzWJ",
  "key29": "5jEaErBvtRh5T2Mxc7LXho5tDnvJ8QUJRgjN9gZ2R3UPjijmhsoMsAqwAzCRpqSzqqXPQANfvi49Ps9uuGMnFdSw",
  "key30": "5TCQkNmvKSng3XnSaFhQ6ovoeRYiymN1Pr1dZrhozpfxQaQcezjd7Ge724yjmjyuLNcT3aDWi4G9dTGjPPViTrps",
  "key31": "4XKLrjw22EhB7VFuRzAJkfo2rKhp4StSpFNtzqCJucNVGCYTwocQVwuMp3qhwJQ88gwsiAw9ATKmrimGV51z5G9R",
  "key32": "2oSTGMH5NenWaN19ByUKx9fCYDk18D6geM2gFq4M3wvoAEfpywB6mPKpk2s4jQRrn5aWqNjahBTEdMP6XgSA1o98",
  "key33": "41E3QK7n36Aph2q7rSwSvX2dSPJPY93tW3dHW5C1mLEYXD3ATERsutbL11dMzmQQvbWgsXCLcQcPhEveY5Bggonm",
  "key34": "2SX7Xu5CmB7xmw2MAmFPcd4prwwzjyyYfvCmyfQrxocLKzzADE3oFmcLoEtjvP6oq2HpAtsqGtA853ajAGxmZ5K3",
  "key35": "2MDEMCQ9oBxYqCYNz1svsJEys8E6wxUMsAWoWX9stx8DLAk2aiW6ZHRq15naFniS455y6QMDC2Nt1cUkUnicn4KH",
  "key36": "3HokoaxJJHUkGdNdmxK48byoZdxjwFNzxZwrKBsDFw6zSd3styZpb3wyXvi9eh3FjPYRdwkntAu3vDU8wFK6u7k9",
  "key37": "5dX1BjBpezcYggTaMDmRdp5KqYvjYJKS71RgDP6kBAUimHMd4ynGMiXyUeDw4vpSBReditopzHuCVGTrjonCWt1z"
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
