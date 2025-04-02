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
    "3tE42edTGeZwmmxm24STVoqXsDwbETiDKRDG8z5XK2iQ853Xu2Fhu9CQZ5eWNrHqaXcwvHgpkaPfZeZX9r6cwPnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GNCCHLJz2oVUsNVnob77Ee5NU289NGCT5Pjt6TQr6ySEcUSmCpJNPBFzVspvNk7VtSh3vSR2PLrebqzPERtLmV",
  "key1": "2qHwZ7qBZWK2KdJWvS5E7ZFqmBPuURhu2X4fratAZqTGKETTuNCso5sKFuHyV3edeRWGCP3eJWGb7q5CWTDmMRbv",
  "key2": "2N6JWBenYG2Ug469J439wfAZPFmmw7XBUJZtjDbN2BTDtifLgPiBc9F2dCXXVK4rQdTntXXA62Zdbb9NEGiCahMn",
  "key3": "3LzNLFP6RmbmF2T1yo284cSjEC1pabVNgX9U6bqMpATmwaTHemhceTQg12avmzCe3jm8VKxm1MC5SJnV27aqiCLM",
  "key4": "3sd9rYJTFNk7PjUHCrTJHuAgHMvWrieMdJAwr3bM9TaPsabAf1m7vn2XgLJyUTBrKpNuDcE6kXSWVPTYTEgS4P5K",
  "key5": "3C3Mphmde7qxBqL2LW7vjr6zZnMZEKYUvZhvApHPsUEmaDtYy49jSDSsivnvzGhTf9ufBK9aLSi8priVyL9tNbFb",
  "key6": "66FUoV8N7oxpdyErxeijr81Hp3s5sssV4SC9zM8wJGFBLQD3FstMs7qd2vfK89eEg2rnGBUCXXrv9fBseJdkPF2h",
  "key7": "3wxotos2sTRDYnX3TGoXzWMMP3pNadPqayKcomCfkW84aF7wLuhRB2nnhK99p4SJB5sDNUGF1wfFQCGqjFdBKnUb",
  "key8": "3L3qtowjnWW5x6kuTwwq5PjeTQwZuGtKevDJbASxkfQZnekKq6hmthsdWaG4u91fGnByz73TTtP4PKuqJvoEa2TC",
  "key9": "2gwwds9LQfhxpYkYGYx2ZNZQLguAq4sE7LC3EdQCacAhScMWLjj81esQRLj2QN1W7CVW1Zj2TMqxuouiFTqgijuo",
  "key10": "EBYNN83LVZW8Vaquc1fWuNhipWop5vhwEQBdiJyo8ZGcQWt4897iDyXQan3vcEiPmvQM7vV527Y15Hk6ZQKKXqs",
  "key11": "4USGp2niDiv7jMvxkAkHqMvHe5PmLRAqbgL265Ghq3xsoav1QDwuXV8DEMDtFx3EdgUSBumMiRymk25GMGyxJPfz",
  "key12": "4UQums7saSaDZG1aXD7sD18FHc5CAhGpkqd46p6JPvu54wXUMRY9iNiB9LkvWBUztLYCXQLuV4nnBNNdLwCZ2dAP",
  "key13": "t2ezhqWQU2vExLias4qyT9aYjX1Znxc5ecgzuc5suCB8spXAkpHNfRpcor6Go8mUcjFA3QhyFeTNbttHXgQiVkH",
  "key14": "4a8y5LadKUCC1cHyTas6dey7ukM4CdPk9mWotqWGHB5UyFKzt4Z8wFEH1ncfTLbkzZ8NQnHG7EWmmmQ7cFZvAEqr",
  "key15": "63wgQguRYQJqwPeeGaUaBDcNiLWZf2Ww8bcNFNr4JuogpAxD9mWY6L94mh3vNErZdvLa8MYvz9EZDjr4mDcRS99f",
  "key16": "4RehSUadEPqCdoxTdNbHmSPt9fektKxJNcGRDeg92qbDbVvtfEZLoczw1ArqTNxtrndRBtf4Pd5suND3j9sUJVYQ",
  "key17": "4ucuXxBkhWWYxSDNd5vfawcxGKgTXWmDAzFMmVNJvxRsDw2mF3BxyUJTGNdT3be3zSeUd3uShTHdSwe8xgnyTrQR",
  "key18": "3VqqWjfvKUAmoCqqVT4Gh2ciiwkK49quLiKdBw2bZRd1Ssw19AB44HPrE1sgHebHnPnX3apMmaZDY4TupYgjRt3L",
  "key19": "5mzuT7zWtXSckQ2yAa2L483VaaLgjyWCHsmcK9fsG9aQxc3ShNhekDAFCxCe8EdwAMK9AyuTH9aeL49oWFgYdoYU",
  "key20": "3bcH6T2tSqV122z5wESy6e2eRrKiR5Z6iBiSXTh4vkAEyS2PVQKgbJ5XhQe8N9ayCmjjjehQ38bz6uMKPHeVTvJQ",
  "key21": "29kJb3GT55UUpPJDuP77qLkQxfGWLAuDVTUvxNrELQrueV8YZzbWXksEo4NBcyKWaMUAWr8dbMT4PMzRAPZfH7Z9",
  "key22": "32skjdqSLi6ej8M2yHHy4ECP1oYtbmUFwDBvd5cNiPbD5heiaHv3ZAnTErmhHNq4AboPzNxvNsM553Qt699ZtBvU",
  "key23": "2j5r1LwqCDGwoU1nVFT7vnVR7e5qYKiHZYG2mGt2D3P6nmWcJBpbw4QVLDL8x9eNDL75iqroTusdVYeVn9bW4kaq",
  "key24": "3tYiYyiUqFZFmCVgCKnYWarq7XNXX2ybTC6rJaX7p1vTEqecH9VCzxsFWHoWn5egaV6LSekfmgK6q9PBjaCb1zQ7",
  "key25": "33jWUVgFsXN5HL7ZutUb4Z3q3TFKz9ZDdVMLWa2RGazLAsPuJm75PtMyuhqL5M7B1PsKuiCL1ScysJbnm5WfRJNZ",
  "key26": "2Zuz5Mn9o3FE8mbqWYNp7vhpnVxUs9aQyNLL2kVDk6iZwMNWATWBatDCr5r9cjQTroh5WH2tq47zV6sHQG6p2yQz",
  "key27": "5tDjM3BvwCuYUYkcZuhd4q3zBdCJaeWvnveH59vuEGZyaeZtNFFPSn7e3TAdudaBumREzUqicw4dxyvChsjurtkF",
  "key28": "65C4NzXC5aRaXrfG2SgphvTcHQDsaPbqe7qvhTfyHzkfUwKuYkouFeKakYzHQJYTmN8WWi2uww96PLt6ryj3km3Y",
  "key29": "2QwpkQDmSjHWrJ4H6PppMoPCEuCPhhMRUmD1xXhmHwh6cHsCbqm5QCucHZFZbcWB7DRRd57YTtp8EkA7kDkM3Kex",
  "key30": "2hYA22zhtdp3pkLjsptPVwG465Qn5GLq1ZFr9tsrZMiVNnwGpoqq5p2MeQ2m4HmF3cMMbcNN8r4bGW4ASeajfrZg",
  "key31": "27fstpp3H7BXQeb9g7KnmLeVcCWgjQrh3dN5pf6SYC1tDE7QAKkaAHJyezWvsXFbcNrfWxNXZEWLqG45f2d4iKJe",
  "key32": "5bPk4qaMD6STYJL5wc1FCMRsThYBuPtV9HLfNm519FrjV2H6EZJ9qw16eRahShtdn6a4c3BtSyUVrRdN1mS5isxi",
  "key33": "53FHNrjkCLVV4WfxAvTLuDAYtakRrSHG85yW7kHsJj3P4qn89C3ZzNGcXNofhjtrwWzTmdWruVcyW75JywMvVHN",
  "key34": "3frE8JLeuyzPjsnyHoMi7KL9egsLLBEB3rKo6EZCD99y4y5qo9hAz6xTQ9qzvjk9w9u43YgZitZ7enagABBeMb8C",
  "key35": "3NxBG2deZrv5pZEZVFj4JbkWt7xZavasoZeCuJZH7u8iSz6JebgeQw6qSxE5bzf9jCyHq8BS7jAu4XHRifp3L5jr",
  "key36": "4Muji6knybxU7bLM1KYdnapxwZGWHkYo621TagWPZW46RSt7KBmZGBqfqad8YrSMUaTH2cfyRrCQWFH8NwNHJH2R",
  "key37": "58hkEZNeTYNUzjJQuDccu1vkpDbarC62b1NVUgho4LAkbtMFuYJhwXHMZ7JdtZ17fmq1Zt7AdpCXmBcC3nbwt2iG"
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
