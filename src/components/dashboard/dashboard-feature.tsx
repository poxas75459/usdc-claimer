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
    "3f4Uc22hM4tNgAD7gQ271C1ekqdrXKHLmtdBawaJSafACU5Uv4GW3WwPcrgvMqwP1SeTEvu3TSK26NoC4KdK81r6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P6Azxn5G24wb2eQiVa6BWquuu44325NVzR67BomCMAvx6rtdU6HfB6nkW4kaRgfXrxCj1MXqzRY8E4BJidTaP1U",
  "key1": "4v3dzy7DfeKVdTHsgqzN3yCb3KPPRcqk8dJBrPSsEerfMqsqYnwpu2qrHiWbKrhiTLLRiJUWH2CPAvXjveFqvWcD",
  "key2": "4KnJ1an72pJorZg24AnXuzS4ibpn1z5hHcxqYDEtCVvoZrYuioShgfuBnjM2qSDjsjzrdGrHNrJHJjxrhHTSq7D6",
  "key3": "aKzeB7WpNzeE9ugawAjchvETBCyrE6Zi7NRSbHvHZ47fj3zhizcjCyr4usRusmPqooDKGZAcrry3V1y7o65i5Am",
  "key4": "2mQinjVSjczNJPq5hf94pr2oysXUT5USxhiFHPQEPxZcZjcRMtTevh7vBiK7uhp6HcyqVojibQ8v3hm9mbCWi535",
  "key5": "3S3c7hnujHKPjr2JmyECHpUDLUkE6ZKyiJyZpjL2VtAYj9AMnDmvnnhBnzLjghnhLKfrSJDv5aLgaAHvb9k7nGUt",
  "key6": "33Cw76ErD2KzsDX82monN3amEs4fXPWdeCL1m5kUDtSZ2ouQy5fVfMYXiUvyzTT7T5nnhMP14D59oriHc129deL1",
  "key7": "3r5VdcLCKbqCSqbV8NcYpReT7oHvfhSVFDGLaiYoumK6aW9E4dMVZ73urq1PtyKJ42kG7bKf1pX4wBQdfxqkJyCi",
  "key8": "5kTdD9hwZusEPnVnTENai3oBANG9HcWHzoRxb1mCUU31quHBAVAioC2nGCZL6vtWAWN1PEscaAMNLomGJo3jp9Fg",
  "key9": "4EQJVsnqSuK9bgf1vSc7F9gBzkZhg1UW1xo2pgMecDM8EKsLM4fQNW4tX2pAcHMZyiUfkCYgYoGHa6i8RGs9ve34",
  "key10": "5JPbVPG16Xrz1XkazT4W4HKJXVzKN5CjGKbX9junUhU7pwndXAohZGafHa3JW44inCAgV6dpMEzgJk5t7JR7dwS5",
  "key11": "Pmc3gA2sJ4nSpPoL75NqEo1rJZZyWZPXtuy3LNQeEcW9wXdxpMcv9fkdsnYBWLABvcBZvQuspMn8ATiXfuZeU14",
  "key12": "44oJdADiLC2Fa89DSUbeBiP7gpEjfbRBC524KKHuSM2UuVJFTWcBaEuqX6LpL8h1YTAfKAXkHYZn3VXSdtqaftkq",
  "key13": "4RiaLYpmK7uUTgKHTji7kyx1N1vBs11oyiK8tnHadVAoeY3H2qcpJBgatxqVxHoCsp1xrH1RNPjiSTLSodTnvwXa",
  "key14": "5p9QcnywbzkzSCVWRw5g7wUXmkaUMxrctaJia9NQFxvYnFLVaRjk37ZW6zWMjZAx8wEvsbg3o7Hy7n3HKKL5FEbR",
  "key15": "5xRQUtCU6iKHhjKeM6kGmYvEEuHPTCS6VKuD4hNjW4eVrbJDThAwNoaB5EJbeC6z5LYABbaP7na4LjaETY5PAhwS",
  "key16": "3ia3mNK4pcFpG2ow75yTj2dKVJrrSYtgvH5AuNALaPboYaibP6PDDjYudHt7nd1CwzC8W3yp9gZ2UCnJwAqWyUpm",
  "key17": "BwrxiG8y46X2pWtFTNmHCWvdZMHdyp3AqvacBvuZZjnSnctz3fvtLVSCFjtXzbS9TxQmTLeDsHBHVbhdFVJz2mU",
  "key18": "2NpF6L7NYLT4J9XUeY8YsEJB9vid8yQMfgwN5t9RQWkKcm2xTkz1LMjhRReXixcBsXoTNL6BtRq8ModxEegSXma3",
  "key19": "FeTwvH8EDcv1bvaf5ZNLSo9cz37eTz8UtfV8cW9FjJJxBZeYvJRaHenNTsPx5CBisYGSFT1woZckVpM1w4SiiY3",
  "key20": "5jUZmJ2XaJc9bhGixVjHqbX5FtuLkG9gdtbVvxfM5oWX7MuWJBaW35uybRuEGGYekjNTvAh3cQMNCcnnyFCqEbRm",
  "key21": "61tyjPiHTYE6C1CxqpSSwiYRmT94WCbv46GrqmV3Q6Sq888NWW7XnzDiQXwGP5rPwqRujDtXjBJni5bzeGxnPfE8",
  "key22": "2ULRBFdwioyVxBGCnydtTdHZ2Sb8q4BYBvawuYZB7kEMY7hfd2DQJwwoczwV9mbPATH6amCBW8o97QxAEc4viPD1",
  "key23": "xRdv6rHdC4qmDJEdoxoECAD6Z1HzCUnJJj2mciYEAWHkMcCpz4uv213F2g7m2JnW74XuvBiLfh4CxRWCyPyn2kT",
  "key24": "376BewCjYx8uGRLDvSwnJCk2JrjNMvhaTbGpT6ts4oQevD4c25KCw8VfwhKUFK1YYF7vez1XEoxzqfBpPz4yATo5",
  "key25": "3tAxH3C93UyyH1K2xMjQfkw5GZiynN4WCrARd5Qvtxb4CQ8eqeGZsJqqnuYNeZGaG96UPyR8vkeV1zSsKwUuQMMc",
  "key26": "3hy7ww1skraNEzSf5c4aHaSd4zWB2cizigRL96vfes7ovE9UBsTKGi7yzeBysjs6tCc5yX7S8Yh4Sak8Ch28wA1z",
  "key27": "m5zWyzsPe6pLv5EaB6TN2e7nvXcesFKon84gS7iMFW1jeswBcVJzQgkqzPgtUYofNsbhJVDZmFr7h2xtqS6MuKH",
  "key28": "5ECxVEMPMp47EuVk6wmgRM1WX32air6qZ3LEb7LFJCbkGz7FnYXvgFN2ifzYofapEworB1UgfbD4HDLQ1fYUNgd5",
  "key29": "2vyFEGUAcUFxPNW6W9NMSrLkSxJZanAWtWKgAd7zCSfy8ucozfYy7wFJYoVxEAwgsqLtkPLrWDQhzE71sTD7twTT",
  "key30": "4F8156SbYA7Q32bFPrVogMU2VVM31g2F76NVFhZXkuH8ir6ACcaHc1hV8F1MZkn3L6Bjo9htTALxoL7GT4eyCmX3",
  "key31": "nyGAfgsSTkXfmxBFvcQbPYcMzZVgLes3QqHb7hc8Us1wQ6o8arKoP3zKiMuCW4tup3cXdvUqqQgRtDLcYchgrFT",
  "key32": "otLsvsVnSig1JwCkdjD7HTtBLWEYMxF9aQGdPxFSnRnD3s4yNtoFmgqYQVcYGPPSLTru4o3DJ3ozBxP9ypBCdDa",
  "key33": "56b1AuY94daHMSKn2jErhPEpszkezwXVZSJ4YtrgkqpweBfQDc4r8shUFJ5sLmkoyQoG2RGeZhVKBTwTSWd7BgtX",
  "key34": "345vgf16oiPAnrsfmtYvfC9dKBZdoHA5QGaVV9nCLxkUEUR5PiTyKJ5irNiXGpFH24FFFnhoXVRoBFyQSXTrnnvp",
  "key35": "XWx84ZwT8HJiMvjU2HXKsc6yYEVNgTbg35DSxrjaXNDBnCXkRMwXPuHjiY9HepsGvnr4KBrcENvrDqvawx6zYQG",
  "key36": "3imaJ9hDZJffrcN3EJi7ApCjWhwaKSMz4KuYxwwj5JPenyeYuMazxGDkRG3X5qJrbEUuzhidv3Jtv1huQXe2UDZP",
  "key37": "4HnkhKxiBrsFzL8MvmzhjUDBeZjJzxDomEV3SYaXd9tgSEnFaV2ru4iqHHKhASrpZrqLRjrH7My1V1pKibTmJMDV",
  "key38": "VeKa2crq9qUS7BGQEzYGmKosL5N7MNmrAbfLkC2ZZLDvz43rHr9HVG1Lx4MH3dqTAnTjidUaH8H7jmbeC8f2mYJ",
  "key39": "2CVTZTevifPyLKpieZmC1knSB3P8gq4Kec8FiFU2rzR6NgqQc8uGRbcwTNhg417xaiJ6gLcdBwmiXpk43QtHsWwi",
  "key40": "3W38MaDomi5hx8c9iujpY2mD1Puv7hU2FqdD8TvnEcV2ab2fDbMHBEhbwDTrekeB7dmqCPYX6gMtJz3Utc7JFido",
  "key41": "o81kyC8mhNLqjHBHDCREn21rwkty7woCQo61BmjaCnfeMdsx1rwni7ymZNnkcwYpQyNtj4ZpPybsjvdcdp2HdGX",
  "key42": "22jE9YH5Ryo9eo1xJwCDy13mWbjF75tmaK43SsxhJPV8n9XboTCJoLpeq7UXTpYxEmDmUDauVm7YEug9Gtm7VoJu",
  "key43": "2FhSCyducZShmXNfsRvZVCiCfd9CW77ttdvw8NEA44uhgyAidB6KHceTFo8fXJu8fE88HL8J7tgzAMJf7pmvUX3X",
  "key44": "3tZBKWsEJXY5Cwpe7t2WJGLAwGhu2WRGdVYf6VJQYJ1qSN9mhcSfNvcjjtNFm47h499ZNmbJxDjMPbt945Cs5oaz",
  "key45": "57ASBqbZ4u5aAYCWW9oSwNEnne6hhE7EYTjwKr3Qqi5HHJQdSTbCgx6bAJ76sE36P5R1vfnwX72KgF99SVeXNVdN",
  "key46": "5KrErqAvSftse5aNWyxA1X5tLNxN6NGfSD3ubPtjXkhadiADG1yJg3rX6E4LN1QTBK47HkHFC3StWTYEiwDe44Ni",
  "key47": "5LEsnhwsarE4xpGTTRxcjGk4TkNfNLxqCS8w2tBkvsnsdzyMoxKbMxP1VP8vQreFuv5dpPQYWcQRH9GpymmPGmF3"
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
