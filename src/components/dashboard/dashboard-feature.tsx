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
    "Je1wumgefTjMpoWjDSnjNGAw1CY1PP9iS32BkZbDk4jHD5ZQKBzgYVBzjam7wELb56B9mpeoUvCLhYNQkvXFkPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHvvpw62xG37oz6iWGqnmyw2QrgJGXVNm1mqAWyeqC1wF75b91ZFFgQkFcoGkxMrQW3cw2R2DAUTYoA54JmfrfT",
  "key1": "45TonFr3b3o4R1yKZjnd7VJaVPHMDw3ujQwSM3SzKhHtkkENFiE7HGRTZpXnwpeVjcc7EpoXLMt13MG2Wstn4np9",
  "key2": "4Y6a4tU5S5XM3ZqgW1UjMXD6NbH3E8jy5QWsMF4bXkRtXtxiB4H3q3XD2brH2bcksAHEgYq1YReoHG2DSx4e44Fg",
  "key3": "36Mem5nguvNwe1u4CokeJ4YT3kv8ig6bZrAnjqKDxTUpeVbnzAw15apTaHRwXXC4DbeYTj6mhcuwhkQdDAXaMFHf",
  "key4": "4LdmqmP7fdyVkLvPirjqun2PJ3os33VDxfNLRipTBxmqTBoufWg29tKzEZS7E1vzm7Xy5hQwkhDBPAbmNGcc5BEU",
  "key5": "58VESCeQoJ76wEbUSChGvBes3tdr2nGZMZQoNPToEHunGgm1WnrKffZeRcZovjcVaX3FHRJKa7uaM5p1bv5gbnsd",
  "key6": "2RJn3o9xYMpDq7fKjMGu6wiTRYv6JMLt1NbUs7Moz3i8G4f3tntQXXncMNopJ7ytoGc6fmVoVBFXX813HqhYqq4G",
  "key7": "4BMzWrU999v7z1nn45ViFhyyfMAvxK6Zr4TiKFdZJzbZGRZSLM2JJyAKfBen93BKPAsWwjB9413pf1BCD5xNMhND",
  "key8": "4VeTmCbvcddixreSmgBhMs6MRaTHiHe2FMKj6od3ud6PghHy3ALnVfftnkMHvqm5uddN7Bwk79HJgNdaaKR5qPRC",
  "key9": "5ZXNnEN233crYFGvAuqLYHFRQvYmkzCKpaLVax5jA7CQELnVuZrWnYzRSdTVbU5cwxKeumHnJ7QHnbiQ8dpFthFe",
  "key10": "55oS33Wvz4VuvwdFWFmHDHLULoGhfnCPYPifBMXKiZWNjzSmypC8Tkg4rmJcZH6SSZGqMzygejWwsD9FybeUdYgS",
  "key11": "3pc7TurBtykBjgsWKgsY8rqecPuGYhCLq3SBcZAVtuvfLGXEoPntCRj892UDfxq544TApsVYtXPaHyjogVsYX3CK",
  "key12": "5uHFpJgJFehMxFJrRN8t5tFv7yBRHJyXrM85ig6894mUEdyv1xPRfetgdBP8tkHDBoCz1yi6WZqA5oCDMyXLmxaA",
  "key13": "3VqYLRjabdvi2RwxgBgX79NTWoqHxg3hgozfcmyt1v8hHr3pMSWxwiZsSZVembTAaiVkZHaFSMtmiajidDdQDniY",
  "key14": "3iHKPTawbA2SZFsdEFkrvMZBJpfYdtdbRyB4c3ke5WNpfWokLnAMu9Dh6faz8jGbzaR5cbg4PNUafdx4ZWecQnYt",
  "key15": "hfXFDbUXaMA3dE3pjEMgesDosaXjJYLcMQs4LQWNFHcb6YrCMrJ5bdPEdpLcsDrR3gxmY4mrE2mWKPf6amwHne4",
  "key16": "5kTDkyZNxagUiaVWM87b3DWBa4hf9gejEuV5xtTeiTKxdtTaNjGDLDjxb3wQHP7nT32SPjPxCEmU8SzbQ9ZVoUqz",
  "key17": "4BsZqz9gqm6jbUE27vs36hvYnapySY5g7xgZ96fFqjLtaDTd9nEh4yBo7kTdzihyCBtEuGrLb5FnbTdPn7G8YHp5",
  "key18": "5tru7PvZpPrbanTgpcWf3H7Y3AqS4BxfDNV7nWqZFJUtSTH79KTkfeuWDEb6sKWqeC1SfjtvhbMSRLZ1XSPtYNvm",
  "key19": "42qSmAnRF1uCtazHeinXUUzYJNMk4rxBGyo3zMXcmMckP9yJQWshdiJUpwebTQzNHsWUKfpYCNDP3KyAf9Co7i8e",
  "key20": "5DRMuWDEv17BMH1KEGntkc7hH6UcJURXYxDbaoEBd7eV1N2QLebmgwCNTN1t3N5vk5sakJg88v7BfQ3s1ZgCSao8",
  "key21": "58NUrpGHNr5YG6ADNHApQYB1atc2MEa3pNspwgugS3BD3WRUjUq5P867YXTJagFiJFTmiTTQWqyhAnNHFSJb5jEw",
  "key22": "2omjnZkqkGgNg2JjzqGpjTxb8SMmQe2DKBhppyLGDSxjoDoGyhiD1KX1UgYz6ZZxJqRFD3tvLeGbVARJ7eV9tVx1",
  "key23": "38EgRvYgD6J8B2jmoKzy6BVdb56sFpVTKFxmqnGPSM4P5HTcSrTv8RP3sGdY1mp2kS9jkrPsCjxSJAYBvhZF9Xg1",
  "key24": "4o6a8V6Xtc7mJditQRruS5gVAzjNSvnLCJ15UtNBrscttFmF4TuMimC3TYULmnLBZGYGJ7zeByZooDyi1nnbECFB",
  "key25": "4sGNPf6e3uvjK64hVQTHS6SwwpPos8VmWvV3Pg7y9hb9bYQidWEAjRASnzyR56yuSmJHhCYQnnNwE7t8iwCqeFJ5",
  "key26": "4hBoUY8rWCzh9vv8auBUUz1qE5vYfksf3ysYB5guDftCr6RMzrSoBwjyyEZ22AzgHaf94QN8uEi2r4SaPy13mLdZ",
  "key27": "4pEBpcPSWcyEY1dUhPwrgXSbioKgePnmBvNUPzwZPmbTm44qtrCbCCCNeVrkLu6YHzoKYYngQ7mMhVGFuPttZdc5",
  "key28": "2vp8kbWK9AE6djUvwPNae7HHoqBSq3jMkvEXM2MADYaUgUHpALXjgfu5uxuBie7ZcQmY9Mc5jVLbLM5BL9L3qVxx",
  "key29": "BmV5HBnBk5VTojvaw7FT1memFxbhNDYEr11fZrHYUWvbd5kLwFuWpAhc5VPrDGZraoitKLtmLWvoNMiV7wLZUWE",
  "key30": "3MWh4RheGMzfqZfz5D3ysRuxaWivs6JDHpuEpRsmubpxzKedGvQm8FM3SD27AN5Xycs6T4NSCEsSJZPDMnCY1kGC",
  "key31": "RQ32pNfTkmaGEakRGYQZJcrhJi89BfBT96B8DWBbjfJSn4Yef6VApmn8xuGNGiJjHjXRoETMU9o7jSM9RCvRjm7",
  "key32": "4GSYZEGLUCbsHUHELdaBSagu7pfXhsQENX1LG9CwmbsBc67ZZsUJgPoWyKTqfw5bNzsfVUGrCEcjPqLCaHya5bTz",
  "key33": "3fYUrEjHzNCJtDtXfWVtMmYczyj11vGp1dk6nFf7Y7yAZK4ShPPaUeenAJ1Pg3tvm5viGejtRwuD6vFrTu7zmRSi",
  "key34": "64n9UvMjjQirExXf6HzPombxR2stPxvDnEs1ZJGS4Ew82oRdBSLiwTPAp8CrBm55MXhY2yAGqBsMk7fapmvNHAV4",
  "key35": "56U5vg3QnFK3a8Runm4RdDgx9fkKqpKMfiYmUG6Y3sy4irn3n6GkHxXG9TDszSG5piPQp7xwNPxicTijTmV37be8",
  "key36": "3NCZHT2MQdsEHwrLeK7gWghBaNqTqEdzESyjX5cXrEtAz7JDSDaxshrUU3YMmNCmgQDc3p4hwZCEZcEDQ6VoQqYR",
  "key37": "hK37cXmPoDDKWdMX2q239inXAsfCMYtV5KSEarJcA88mQucUc3VNi6175BAQuTrU74RnzekoLWmQogN1gLpQSsw"
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
