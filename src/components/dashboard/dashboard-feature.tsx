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
    "33twabcwir2EnNzqVHC1kJqFoyQEguAhRBj8Hw8rsXt4rmuqXFenfttWYUjDnScVwt8jQ4TNejHA8WPAa5aBiKRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aFfdn9qQ8zgdNfESFXswDHQCrbztyWuXXvByRUvz3DsgfiX6JVgv3FP1mjNqnYUMmRjyMxawm6M5UVYtP67yzHo",
  "key1": "5b5SppREtFS4Upnpn9kwMSkwNWHtkkygWZfvCwJrxTxjDoSmsYfoKM2WNEPxKUj3EDcHRo2Ncz4av4CPxzgurrkt",
  "key2": "VnYEC77UvkyXQH5GWSNX6ecfd76dyfBV7o6ecM6Zv81sgukCx84VXrV1jJqrLMta6guciW14fLoSSYNqUfKnD9v",
  "key3": "e6hWKwC7S45CvsufPYw3ZrLyv5bJQL8XGv57Ea76fBqTK96wq6P3EizPGsCjGiuYsiFMUq4Qmh9spNUVNNR7Ph8",
  "key4": "3HGe12qTvuyccYTFdUMQ4qL6acX7pnMMEtWt1XoQg5HsAbwYp6Miv2qwBTLmevkxFLWAfYLdBPmmC4n8fxetgA9L",
  "key5": "3VxJU6bmzRSToVe64y5xfSzWq7XFWQhw4YwT8cKJfPGKYgduqxaC41r9SyTRQvTQnMHUnc591jmC7dhDx41fVKmy",
  "key6": "2YxhyQThiYxXvWn9qu2Seefrfkv2LoejcnsPoC7VPvUFkfQSdVKzkFUjdMJacpqqspqwMqtbDmLQACHesS1nBnEh",
  "key7": "3Gzr8fduV9WW16A8E1tSS1B5JDgKZ4AoDgDwFciuV1G9BHWiEH9QTXP3DZ4we98RvECFyzgmULMfKjw7Khr4PqLf",
  "key8": "597u8BjeGMFYAhsgAPm8trSEf2iE9xxiuyfRej8Xoj99EHnkM1GZAnAdsJFQ2r7tc95ZekHJGoyE8fzuwUcCue3B",
  "key9": "4yi6AZQZN452KT2ivFo6TyomBfzzKLgHfk4KzS7xoppr9BvM1mGeVLmqPYdt5zaBdMPCXVEhq9UY7YMuxNX135gd",
  "key10": "2v5nCr35R4eRszNkrAPYvfPg3G2eMWfyKYb6E9ZvAkqqYu7QMYSaNn9VP5aeTb5AaMcizzU88sWde7qbY22vnJ5j",
  "key11": "65vHrrCmTggdoTDsR5BScoV4oXCvH5xvuA1q5X3z7HwM7WFPmsobZW5wnQiEcRMuSSbSAbPAuJi7mHqUtUefAn4n",
  "key12": "45jQJt71U8ZsS2RtCcMVZ22nRPmqmZ6gBAZAM7B74HTsani5KBoD9ERPmK6B6Wxv6SusbBtVohsYgQcra2UWhoLA",
  "key13": "iwbZorQsfRkTdP8KG9YWfo9Sjc4DiTdSY1oX7kuLn1bYLHGEj6e8KoJYkFt3EXVioyYXGEpc8T3tfkCtpc5wUHG",
  "key14": "2X7EaFmLBmZexrfoYwUB4QfujhBArwdYHmQRz1n2UrHbZY4QeAJNPREwwYkHpKyuqTpArHFNgHN1fkLUYsmVqgxJ",
  "key15": "4eunLS3vRiWL4cBBUHzqifw9i2xwkrxePzaQavcrxJ44hRXyy4UFVbrDd2KCUmzF4j3XxiJoRsAFjBjW5Jd2maf6",
  "key16": "5emYTmymD9y3TWvFydUaTi5CBNT5afPx4849DKRuQoKt4jkj29EC5g2D7VwhyV1dPuBwxr4BVmEJFN76tftAL3eA",
  "key17": "2DmRKNFFZcMAJbxfSs1KfKK9kcrK6myCgjamRomzjiCMpQqwZNPTL3DdxKtTYLbwb7HRZzAD9XLsuDiLyEDkMLTV",
  "key18": "29nghx5PiBjgK9pa1kmehKNuuDGYzYoBY4YLMMg5vSSm8V9eSVSMVfHV3QVeD4apgf4huUCoyQrG6hvb8i65EEBp",
  "key19": "2G3i6G46PFnSd5dWqtGeJTJEaEC67vJr9W8AwDhLZdHwESrVYvNRgkvJpokpq9weasfk4ayVnB3wqgZoL7ysW5am",
  "key20": "38ELfFp3xEo2kLUd9iTBDdSjxk89t1bqzifXFMpugVPnAgrddcM89zwBK5LhVnSppaWyX5F5mh1URGYQajBJgj8i",
  "key21": "x5uWfM4tnDJHVVHUVFWGPx1jvViaiq4cGF7BrbE5Ajc15mbptfRGpbeui6WqiFDi5mryQc36wAPxeGjmM4TKBzy",
  "key22": "aUKFt39uXFd2AnrPxs9byQJ7v9hiVRo7AzhfWvoyJ1VeCHiFewawM9UocVSjfL9BpubuGeFLXxmMN2FLDjT5AFA",
  "key23": "kGzxLnc8UNuNbG9341amDxZt5SRZsXDQxhBd8voGVw97CavR6LUutqYdJ5TvHg97GoH4qELdCK6w6aj3LpveFrc",
  "key24": "4irRyGit2PH3sM88ReeGNM1A7nHjZUF3A6kaESdE9F9McyQxjAs4oykhEZRgFMNN44F94mD3h42GZAtMPgcd17Rp",
  "key25": "5xQ1g2P9cdFqpQvVqyMdEodJ2FxD1gcLYkakmpgsii4oK5gLPN86J1yW4csbKCoyguGf7YysAQpA4pFpe56RuP23",
  "key26": "k21WmgjfyMVQBtYdas5sA6zzf661gHqgPxgT9yhxSs27dwLD8UEfnLNmis5beNqF9TBRNfb5beAfN8BvRjNkLKg"
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
