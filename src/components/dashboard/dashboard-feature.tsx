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
    "2QQTcUKbVUyDD5fzJEcdRVin2drEqVBdGUDsEafoX9SrG6Yn8tPUqaMTwvWqr9UaiFMmRZkd1bQ5o6uqsesWMnr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NLC43XT1HbJbQxeZD6F2BYfzpczwscBqBApsgi6SH92sYMMYP7qeQDQthXecbAV3YqV2UY5RxqTDC4ykVG3siWf",
  "key1": "5KNYjbFvLigLYYKw6mZKtZ7sEJVZTMweu7mejRzh7FMMtVcaA1THhzaavfBCzy9X72NfwPJmBEV7P2heH6N2p5Ln",
  "key2": "3xKzagGoMEoPuymxM9t7AbDj4EUgbgizo2MPekh3amdHDF3gtt9wpyMgvvGaS1oZx7xPc1ttaKREW5UqYAS93mgU",
  "key3": "3DCTdjfH7HEPvkzVeFetFvDoC4SfdXk56ViFPL7xGxMVCZFr4AFV4XPZR2cXxDSrPUFabj2SAozpqEn6txhrt4tu",
  "key4": "2DkmX5uSL34VXvgMHs4CSPQQzqheFowEdYN3gs9WURPvVfk86ijxmwa8ZXR73cY9v7V5jjjH6SLK3o1Hui8TYzWa",
  "key5": "2Rd7LnbaTXhztfTa1Csddw4wsqGMxXY8ggxK7woYtfFKNWYNqdAkgvo2iUY9gW99LufCDB8bxSJZChvvji4h4E6b",
  "key6": "5gS4qT7C6DcT6gGR5Qr124PDVvvcRFqnt2TbPNKaUvAskNqV7eq7ytC8jhnckBwbZYV97hvZXVcuKAwVYwrp8pRf",
  "key7": "5ycQv3HhL3jd8x6Ku3Wv1ySw6Kiofz3VVwhPkMCXuWK5xNvpc9Q8SYAmPGboBk9Q1xgiFoqrxKdkufiz2T1WxWXe",
  "key8": "4Xu7CsypjiwFzvhsf6KX9ZArXe8uH5SyKBvL7s8UkChQWkbFyX1Ko8kn3L6PZx7Gj9Do2sfawXCkrKzToJ47dKLm",
  "key9": "5yuCLvsN6xdhH7boBzSj6Tnxm7JjudPJLTqKZ3hEBqxXgVSB4XorXDXfUNwrefLgPMFsk1MPLFtoM6eNrmnLhb3a",
  "key10": "HsuuYUUtCCKpmfPQuLM5MsZ7BHbe7pHKMyXnGmT4YsDjV1kDwdgGcbseKWYes3Lyzyq7BXGeEFLCKFvVX8Ur3gP",
  "key11": "32T1xXiL674Yyd3QKhnMWj1RJnC2Z6KTga5xebfvcYZmh7Pq8AbiKsA5JSNa6nNjotSGz7Wd6FhVo75GHmWph9Mv",
  "key12": "25n54ThsdmLCqSrSWQeXZLsafZrT6Amxgd42A2bfHwd82g6Q1PD97S7cEDeiywUp3NeuzaG3adQh5c4Rui3xD1Jq",
  "key13": "3RhD2gzqmLXsRseS5LXUqQHkzyBa9VBhDqWViG5mCyofTh5tfaCHAW9hs2zJLuTyYvFaWNhmed8twQojfrVePUZ3",
  "key14": "shDeL7v1VYop6e42WyjcK4ySujuH8j3abN5qWKoYeqdu6Xq9huENWCDRBpvR4tH4G93vWgSFALazMpxnahtUKwC",
  "key15": "4mpLiCMGJqEoSnpzaCXVBipfANbT33MVgcdFS2cyoRYutdEfgsjCccVMaRtpPwUj9xzwJeyTtE1Kphk9QC2Cev8D",
  "key16": "2xEp7BWhBqpJeguwUUG5T5DfG99goueqMkJADQ9Ykz6MhpcpvxTG51bXyKQ18FsKwTbMvbkqoNjgRZPfVvG2p7P7",
  "key17": "CbKK65yEWbYJCHxzzXBnjBxSBYe9h79Rg8dcQdf99Rmgv3dLv15zcB4vMXW51Abbcr8scVovwFadrC3y27R7S4H",
  "key18": "6112tX19phHcJMrjtS3C49ypBBU1rXA3ym4YTXtUAZhFr5Qy4koC8m4iZNqq4dCcZDRgiYZrH79uF2JS19dMcEE",
  "key19": "4kLV6E3eYhtq78X2VepoQYcUSukKfNX55QHUmY593NAcCrZaV6csSojWaVMx7XworhoKhz3PhSuXg5b4kF1hhQJe",
  "key20": "313nm6GZG8cU6ttfcQPDgbeJPiovoZQhD76Ag3jHjVzoJcb3zu8M2JvMm6HSjxzSp4HmjVMegKF1yA99XSWh1YKj",
  "key21": "2dYGthLKQGShoxWWqTwPre4gi1PkXq5Hq136NYjoqhd4p7qm6YE4SoN8B5cDwepWC18de1nZyb4jjn9ajoRe7yyx",
  "key22": "2kLeeKzefH659H7SrxooVohWLzEPfpjpdrTXWMGLU8e8tvafHFQLtMmoQqDgZpNFdx3tNpkbwWvC6kfwcas2o8DF",
  "key23": "23X4XG55Hvm1aKHS6Diy3eHrLh8JCymwUUBLCzAScMQHikSUSSSQ3kw6JHVpFHr5AG7Jfg1R8q1BeYAKAUp6YqPN",
  "key24": "5gMFHEJ4U6LFVAiQ2CuDBgq1k6Fixwar9LLYcP3AkMK2omscjcmrLEq6B47vokzKVcPdXaaK9ghpa536uYhiDugo",
  "key25": "23M7LaPZvy5mhJsxGQMuVmxiDmpyCh2Pqt1fw95SbgyP42h2sQ5Xu3Wx5njSjMXs8TGb7kXWXyiPGJfzBzf5RnMx",
  "key26": "3qv9RYTrVWMt71CNkGjiPMNdN2e2XVG7BvFKBjNgDbLwmJsp4mNMYsaoAVJazUPNdksNmeuyfXHHRdBhyw5Xyf2u",
  "key27": "2L8y7XEBxQyV2nkZAmz46K585Rx1vsp5i8J7pM19D3CuMNFri4HdyRD6XieiZ2A7wHK1nc2iXDNHc1TfJdsYqKn3",
  "key28": "2JB1HbeJwm67TFom5PEtBzZDyogTXw8CsKjtsMBLSJ6K6Fz36ehQGhugbVkUtCDJAdT29Fv9RQsoXBQkjpzkuhhz",
  "key29": "2gTMoNo8xEJPLKKciHY5vsE2VFSK4kJBwjZvhJvdVN8VFeWXeCGM1ZSMbsa9RnPcMg1RQhc4RhozRpo2sedkb9AC",
  "key30": "5R3Ha2MLvRQvh9EP3hVP24X9BhJfC98eN27Jawvn4VeoRgXrS4qNQn41kKZT6iVD1SbC6KVxM5XtGUqmqjiCN1QS",
  "key31": "2B8WjBLJXkicjSgkmCPC5LAKDHywZqd1fuKxpye68fJ2CDEcUddTKF9a3kEkB3ywVpaoyUZevyTrGXBo6va85qke",
  "key32": "3pEXnRFHwXrRjob4G4bsaUzswvD5msuivzznsZcWpK3guWTEqxQwE21wbAe2vWA91Xi9cL9DSY1U24SJCVDZ3kV9",
  "key33": "4ibcKk2TEmeunCS3Hdn8F8UF2L7PJts3mCEsSwvDkXChYL61egGNaPRotZg63TDDzh3XrbLLG8C2gBMaKk71YagQ",
  "key34": "5AoHufCPaxTQ9C5uuX8z9AqZe2in8pmna11gm4ZfLVeShXHUth2mLdgGNF2KCfDKvN4Ja23sKUijFoYtyU3yspbb",
  "key35": "4xwymwjHhKgxnmYkde48yEVkJ2BRDcvRX94wdoECoTyCK7uvLXxoZVJWdpn6jYAFtsp33HarWj417ZKKN5aAcEae"
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
