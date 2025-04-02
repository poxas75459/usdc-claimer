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
    "5MgTarE3xFaxPvxodCKeSMphH4zRwnMNz43Dfn5EHtdW2t4NYAo7cDAUeeyvcf7uPtwqxn19zq4HexFTwqVQuwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eJVivugpdYtrxGUHivuZWH4xsGv7XzaWoiPk8VPhxV55hycWsEzHvjvWY9nyqUi6vYX57orPU6S6d5gXTwJsMs1",
  "key1": "4nzru1gypETbeXvjnim9VSectosncraSx4Z3m15Udwv3f678PzvMUb4KQSZipy4bjPfCPcBkDa7ham7yqHA1WjZf",
  "key2": "2nqcFHTgsFd3GQ5EgADdoTqjMSJmC6Ex9koGD3LS2sQtLChXfHti1oQxizHfKu3fh4cdV4wrfmU8cqHwGsT4oP6W",
  "key3": "2FBZHn5WarLUkZ4uztyzazLcqzgLnqn2KGjAeoJAHCoefGFpVZTiA9kTikFeKmTBr7f1t5qeWdsg6DAQgiZNCv6n",
  "key4": "SVkaP9eWFSbzLT84HqmC4Ezuzd14kXasNN1os9T8JssKqgYT98w4GxAHx7UZnGpJrTpSwDyNbXez7Mg6M6v2ZHR",
  "key5": "5S9Tj3DoWxHYmZPiHW8PeM47Jf4Fhjxji6t5R2ceefqPpzdWTkSs6GScHMsjdegNNCDNDGQdodpiYDFXNo3mF5jc",
  "key6": "4LrjXS983p96sqdYtR6g1HhiyQHAs1sD6BDV1QJut6oY6NM5DKrjS63qhvNES2U3AUCLzyTqREzrN6tVnVgCYU1b",
  "key7": "3aB3B2eJod3FmADMJcVWLw1uu3uMR38caCaVLvGP7hXVESbfVrri99XzBgDWedQwBMZ7jeAgCMdKxBWQCP7kPwDV",
  "key8": "4N1S6kTRnfhaKkfedf7aSrT9JBCA3vWAD8yAz44jbFfZmd3YeugKJCbdsmtr47kMhag1q9dT1yoBpEsnGJccopjd",
  "key9": "6b4KtQ3gaivbDCnnf7UdoHfZ6nSmzWKRRZjgub7Cr7jcStEwJAXnc9QJSyuwUjvcBmctZ1wzsPc8aSe1czaeDd3",
  "key10": "32QHdLBzoYFkkpCPSoVPUbs1pp5q1NMwASseFEriwwDf2CPQexcfphSP61wfb6JY7MhA5tB6ZqKNUZrH9dVGC2ZU",
  "key11": "58EFpoqkqhXTVp7bEarw2SeVPYpHFEdVNkGpxLoNVTKNrcXCicojpgeo28GFUsvNAZpkitQj3yd39Xg3YShkqVPA",
  "key12": "4VsccEhUQp6p2LaRhJphXnnDCkAhrj3naviEGUwc5GMbPvL4XFQp7CXn7LmfGMeLxyvFu9aDNEnueT8ifhVPqmAa",
  "key13": "29Pj14VGcuPCdmQ7YSsXgyT8SAoDBGRF6BUzE2vebiLtyma5hPWWrS5KSGDAtUK2tWXSLYsRsoSjyfedtKhmDVyk",
  "key14": "3E2W5EGf1zZteXBHFfSBfMkdwMwfnFq8EVbRsVDZqbCK5DRvdTDt9RBnsFoYKHs9nKJGXUjCsPiLyk1Rfa1roupk",
  "key15": "3ydBaGfTSidzWAWgn9vbSSunmk2ZAyVmryqTg8fNnbPyQHJjfmwVPY5zDRGkEWdaV59u6FgSgYR85LgeBGgYgFxp",
  "key16": "25DTprY6njxLiTZCHbntnXZGEoqEhsbXwepNdgredWuVDtC8pU1833dQaB1uZZUx8cB3rBJQNRPZgAjWVoYpoJE4",
  "key17": "9XZ1az3H2QQfheAsA9RxNj5DHZNAJDt2XKouM4nXLdAWsDxZtAVkQr9XPUn3GAVKpVDoRquqoF2snrJERyjGPon",
  "key18": "3T73sTjuQnYcyHcTHGuRaHyrkEWJoCXsz9BpzzKCSQ2QocadkQ5NkYt4J1qB4THrRFevABDMhknFwdFikjiYkyp7",
  "key19": "61r7j7UvU7n3VSZYDmG8X84wjGyaoxSb7rHUZP1zs67DFCd11oEVpHnoXu7yGLaNVsib6xKebGz3yrDzEvBgAEQT",
  "key20": "4Hxf4v7W8oeJD8CNZXXDTPgYL9TvSyHFkocvH4ipfr6taavAW3Apg1sbHrxGen2pGymL3ybmHJVwrfV3rLDicLiM",
  "key21": "2BkLvHvmHv23n4oGcpUaZZivaruhpe6uwScAvHRH38J3UECZCNzu6kK6oTNSVLCY1tKar1PH8aNYSuDaQhmbwvFa",
  "key22": "3XGCdszeYqPmb2g3Tt3eFVjM6kmdyK6GRzWg5wCQRD4Hi1Ebg5FMazW8J7PdGpHT643B241ZZbu9a1S9317vEsGd",
  "key23": "4PBEnpQCcGfXfCwKRQm6gmG9tYk7ZUcUeAUs5oJ1U8n5N21k5MxhCNbWc93JxrA88BPVvFpHyNMidEj6AMMGq7QD",
  "key24": "41aTnpqX6xsnCXfGUd5M4FqC6gQHqq1jWg3rjvbXTNnSgPPZ8GZyvBNT9mhgTpRJXRS6AmSw6aBj63yf4YZkW146",
  "key25": "uiDJSi6y5gZbHjV3z87kyG4obYUZtJt4JsEHobZmgvK4vxC79Cp1DtmYoo29AMu4zseQdprAamNPynsn1a2FVXZ",
  "key26": "34a6PXJ5yZtSFmAgNoahBnML6SPbwA5iDhXsHe24hkmpqff5VLE5wrLB1ycTm2FztJjT7pywot7fSuKxL96qMPAk",
  "key27": "gQ5c2XKMvfnToBxJaSck5A5stJVFQn69YA2mtVPnemFzYvELAypZzTBVUM8FQaZqjbaWwoNdLsHFHeAaUdW9Wf5",
  "key28": "27cTXcULNgsTsq7whvLS16YnGJj44oGFAN9egBuCVn7f3CLd3ExAJXpn5F5eD4Z9AgWyHEe1cCLPfek3mFH8J2Ly",
  "key29": "44Y2EQ9zwT37S7DKfYQiMfkVPktYMmfDyPfEtHuaviS4PYMTMiujeomJjWczyocAdhkN9hS9TYTrnLdBkXSQKaFV",
  "key30": "3gCrjajSjWAZsV8BuavWeenDiV3d8fAPVq116TNBvr2PrGsRjKmqgjp8uLP6Ht4VfASamWG3mAzR36T3Fp4xEpAt",
  "key31": "3Yg9iE2nSF1mWuACaJMr8SGNkazJELJKcMzBVZYJDpKyVcNeh5RQEiZwfKbmUU7Z37Svm5pySwQ3s4Yvw5R8ohwy",
  "key32": "HDZQLsrNRcwXi1CKm7DCyzuWcXicJ5eChpUWr33qZDsT4PUqA1ukGgxzc92NRmjYVugv52ztkyejNjo3QY1GCXa",
  "key33": "3THohvSJ484BPiSKDBVtZWpWaPXiqnesJuT21yiKuMqJ2hgdZkHonPi4BA4YNrhddGx833rkf9TiHFnARiXAkRNB",
  "key34": "3o4Za9jT2xLLZNjAnnepnZeiw1LvKmJvii4CfTUW9qHzhBsYTo64L1HPq6nNxWB7PwfnamBsVbUxGd8rQC3HNdT6",
  "key35": "3b8RVTrjECYC9tvsGgN7LEcfiHwvFaE6uT6j85PL6WVWP7zQWRsg4xjToWwya91BKUUHpUCTQs3mm6qqQsXzCdnX",
  "key36": "4t5HJqd8TjFioKnNbLM8mTv8Ywxeac4pNgAcpCj8fAKX5scFxUnLT5FDfbQp78QfmKSevfXSq9ButXmfjUjQX28E",
  "key37": "2emYpN1fzi1LN25o8HedwgTFkoLx6VXhRS8VJdpGFfV1aQAkzDMQfFJTHMNPbMQW6h1eK88TLBfE6mgsmv3cqK8g",
  "key38": "2btPA25MufxQyAP6aiWc5X3Qj5DiT5JQfjDeyZfCXs6ghvhW3DZLnyuvh73UJbcfSKxkkChr3u2YANdu4ihhGFcS",
  "key39": "AJUdydkCMDdn9c6YKPqCgUJ6upfZkT5n9Boank3qLSwq7CpH43EwT8jVYFR6Z68ZnLUYSjwsK8nKRWSEAmNSr1p",
  "key40": "3Bzr4kPhdxLGG7S16N6GMSdC9SyUzFm1FnyETY4B7rfcqu9BN2fiFLNcjM6H15svu8R52HjaEATGgYp1NtY6yCd",
  "key41": "3tWCafrinz9GudRCKG3Spz5QWqpp3RdyCvzsi8ipLypdXHpWfoFd5FHuafWNpSuidCMDGaVkJD9jcVhyGB56cmnP",
  "key42": "2oFZaqbW7F2WZRwWoJQBfkDwm5LA9U8DgVzxGQREjHEmGk43szR5WjMffdXc86WEbbrXxp1sqEBfAQFd4RWzqEgs",
  "key43": "5WKN2zxo5csFTcSZ6QnKncAm2Y9CbkaEQwEPGtzkMTfL9QRg9YeuJZEPVX8bmghXAfCJzYQSobGewEtHF6gL4Cnf",
  "key44": "3VDezgYciXpLdZp14uc67zDto8BH3G51ytidqpyKzFENurXQGmGDj87mA5qxr12A9PvWtyYHcow2jPcAoaWqXdJv"
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
