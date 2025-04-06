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
    "5DGEssttmiZ5hWStBdYC3FspjgHntNpsAJLDkFvAYFDKKBhVE5p3CbASn14vp5bpK1oYmBVnHphBCEx2dvpCSDsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2neWAMf22289MhjdL3ZV1yrdk7v35LW3ZvP6RFAqcxGELxq8TZ8xXkVGMzJssA2qkCtj7uAYjxWKNvtwFzUcxFLE",
  "key1": "3aqVSsS852S2dQKD3xXyVtwfJMt7t4Wc2GUvPcH2V1MQ2eyfkymiz2mBJHshU1j8HGVRjtpz2S4RyZpiY8SS33gs",
  "key2": "2Aqgi8CFdkqXho7ZkwxPcnL8ju7RGkZixSURtsrzfS2agRJRLyV9P3ha3UEyPd6fLV8Wnd1xgpZiQW8qdKNmR9Ct",
  "key3": "24imuL7SKwuzhDqivuq758rjnom8uk4P2di4YMKQ3nQHv4CYpfJkrbDtw9cD8nk16UU4E5DjrxtbY3gtxLJmvytY",
  "key4": "5WVVTKUHCE8H9h2DgetBsXRwt8wvUEzsAy6y4xseEpHRZZShrYEsiBXMZJ5Rf7dKGoXxCKJHatji1TuG86zivZgg",
  "key5": "3gvfjePZeKwXzNED1gCgzZAArAMzEoaS5x6PwjBL8kMZngK24tP3Vp9UeWrd7V3SmeRU2BKUjsYvjS1ATFjKD3N5",
  "key6": "3UaMUmf5X8o4axmC3WZ1oywzNfPLdvUFaphTDKJwG9F2FNReP92aKwRxXHwmfE8VqsT3sRJsJ9CPiEeugRYVu1HC",
  "key7": "64d9ePUJxNsc3MV2U3CnDaTRtuMVQYg5HLUK6zX5LK1HV6WSGrSuqc2HuULvorcFA7Xn1UctsuJNDb4CwtvjGbmh",
  "key8": "kGo8fByqQpNcyNYBxPWZNehad2D4uwmLULUvsfvhsi9WPe2kVWkmcEdCLxSRwtaLfv71HKK67Pks8JcUvpdyrt1",
  "key9": "4gQovFYk62tsRjLbyfrLDJTGq3S95LoFX8NYUaKqBFpW4z7ozU2YALpVogHHqHiiVvDGSskfS7wY5kbRyaNJrU4s",
  "key10": "2ePAyYLpTH19768SfPXv5AbyQ2a7SVPo46fuLMfWa674LxmLY7SbW7Wst66dzMvAPqCptM1dNZ96QAyiryowK5rx",
  "key11": "579CqPsvgv2jDdTpnduHieNNFdKPKV3vy4fJKa4bJYwqxTPAwhmLVAWH7HUctw4kCquSjnURtHnywtrxYC3YkRcf",
  "key12": "4iWaDsCV8Sj28qhiH6sfXLrf8yfsRMqnqyJkwdjA85CGu9Fr42x54KdH5Aoyjkuri6oABJjDbKVrHsedzuVoZ2bK",
  "key13": "2ExRb9GokPhEDSBM9vt5RKNXyNaP2bpbbKiZByWNMP8WAEp5rYZ8RWPf7ooYiTr1suwmLigNnZSNC2Bh5GmkKKb8",
  "key14": "3oXyqTG8s4GGUnk7jPtKHSRTGcQuWtkqbjxg62imzBADpxsD1rfNgKmG8jUYFgq2hwHb2CXBpNdJnCNBpDERSW91",
  "key15": "3dqUKc45Wc9av3DxNkceSwqdyB5HGKUwiAspT1PhEMSX3JxRVqnk2owrdDND98xEsp4Lxh8ry5LC6CD8XXGU9tZ7",
  "key16": "2A3xnaGeShZQBCJTJEgzfECvptG6Y3jnNk4xhNYzT4akvjLLcfsX3q7GNcESG6srRdtSXQtuYjAPeh243h98sMYv",
  "key17": "2HMetC3YkRoyUrML9fMM4ZTmyjjQ7qAW6dLbTxXsZDeyJZmKL8xkqV5hYztUHiNzKsL6Fat6Gs2JGDXbBLf9f2Hj",
  "key18": "5x1NoPgkVq5dELkFh3gPEZ2KzeVttfLcM1s5d8hDGNWx2hb4s9Fe5nHkUdFWRRMam1HK2cavyfiFazoN91WC7Vau",
  "key19": "tnHtojC1UJ9z8xtQLwtcg3KkFfgDojYMRjrdbxEcbWdQMyNy8KkMAdk87stKrYFJPYQTSQFrfuAswXh1jbRAB67",
  "key20": "rzwwg8Rd6M75YPQpjLHddEZNae2PBtXWreEwDaiTtPKWoJe2gB76H8fXrADTzJDU1iYgZb1YG1qPy3xB8ECoUps",
  "key21": "62PML7pKF9pPSd22bqu8V56uPx3GnkFYirVEtYkiGi4A6aEZr35T5pxQi54Am6q93RxNCVXcqTFChCRuQENjUfR6",
  "key22": "2eGbVLkbDvYXHRfrkCjHWG33wmkbYr5RQMeRCygpCQS4CAn8AyonB5GFj9nDdvbkjzA5pVRUpZdmgY6HucfG3uAf",
  "key23": "2oXcJCKjgXmVWDihXWNcPaLovkU5GirmJLDwjyz9CrZxTYSdU3fTrRZqBGZxZWN5c8rqdJcsmsQ8a1UdxXcYy48W",
  "key24": "2i5AuH9CLdRJT3SZwdx6iju5S5bmVT7B7o1k3RUAAVNnoiP8xWeDEWarPAzY6gVXhgApYN3NHiL7eFt4HbwNekDr",
  "key25": "3PZwE2SAnzCJ9orzMPRop637LSJF8f4BBQ9LnLkHfnTuyy5pABdKBMdf2nARy47QGXtGR2PRuwpTGCk93zK3z1Hf",
  "key26": "5tnQXVTBtsueBLjCrPqUxHAcvu8LgV7JBLFRW6dRmvGKzXKpNCpRwqFYiEoJfkmQxpK2dr1M9G7Vnd3BxQK5F8Fw",
  "key27": "43shMvw3HkJm4E8KMdMuV5cYptkfFPug3pGugBrXCXwC3WggGQUTKiMadvGsZPzriKw7UjKH3cHGLyxTXH8PbZ1A",
  "key28": "c7xdDigoaHmw4cz8yWh89jh6V8BbtdAVuDNrG9rMYMsE1RimuE1ZpvJpjdQguURoqfKfrDSeS8iJDFxhRpRVyGz",
  "key29": "5ta1w9ZEiuJUFAxhcvqH54BZxupAidWjJs57zWdf4sLFhy3G6UftJ9tzMZt5SFzA9HnH4abH9xn6MFspjiwKkJAx",
  "key30": "5uxNKS4msv7odTdprBKSn3xTWojnBgfjFhcHLhgBp2Uvg6eKAUE8LS6MQsRhFjQF2qDbgBM4Zu9b7VmmCVsZVNTS"
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
