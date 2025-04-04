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
    "KtQ1LkGeZMBrbTjL9Fm6c8LFupTHfSfLRJwYvKR24kShhEWW1Zd9afv7aiUnRJjcge64bw2Hbi1TfWGefA6rfXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6fYvS5aEP94dEqikmg5Vy4gWYvHmnEusgwjgznTPS7SbUMLQg1miYZmpsbKsurDHuqaS2ymiYfhkQaJD2dzDnsF",
  "key1": "2LXgFn9Cvdt2bXvmPgL3PokANyLfaqJcyfhu8scnEwwMBLYKD1YiJFPV2A9J9S2V2MzR8WgEA46fXqKfaFd9fZYX",
  "key2": "32EwkfRCN2WmX2NzDJ4Ab85YXbgCM9MP3viKBuKoHFsfV7jmdVHwGnyEDhKdTQBbZ6GRhXGysnWv5rKpBRPeMcBm",
  "key3": "3ifvQRw4bXtEGtVgei1KePoaAgZHJ81N7mytxHBYYMXWQXPM31dwNb4ihvCnnPYYE6fuLXwejdjNbNum2M59cTM7",
  "key4": "qMvSMK2TgjoVbXqG4otZMYDKvZBco4Ktk3TetD1Z153ZEZYYyXofvwvnYbSnFPHsfFwSU7EnfSJmcTrediVpHCf",
  "key5": "9g6Jx3gv1Bp4jYdudKX9qsBXAMaKUvjroFfMaE2ARxEWz35CHNBrPr2yXktfWVAprjEMDKtuoMyiuBWxoGTAcin",
  "key6": "3NQDKVkTAJX6fwfQgsXSFtigJTHaEYfSmPjCgrHxoSvKUFiTHXCTvmLH3udxjFMHB12xWWDnve8mkG5MGZ4JppcW",
  "key7": "5E4B5VQvexwLy1zeh2gek4QRD4JH9b8ysM2JcfsNSrbY2G22hRa5hkpEYPLCVgYZUY7CeJJCFD6sN1SUbSHeiNiC",
  "key8": "6551B8KR8EK2s7rYYCWR9zcf1z23AySAtobNyjkkSdtdFri33rUM9VQcHTgH2uFSpmbui8CiU7Nbv4sY5tgL11pg",
  "key9": "ueU7UM3sfLZGURynf6jsGsNtDYPidEvYSuP3mN3aLZRb29rM2LRsubhDUzukSQfbm23ZgEDqKFcqw7TRujzdyg2",
  "key10": "3xK8rrUjPJdhx6wcTtT6TAcw2cWsrKA6u2u4Jdi2J9fLEodMvyEsgLVBfTLcqeHpAUCbyNusgNFp5wWsGUpHN2fD",
  "key11": "4qFex81LEbAtB2WPqTLnxzQmTT5LCz3PEYQGgcYRCYHu4Tvp4XnVweQnDHmKLQorMkm6SCkfvYyYHrwMBU1gW9DP",
  "key12": "Nb8eLMTLpWAbUbgWdBR9aSETRxZ8UFcPrhfU4HQA7782jFEvJKD1qBYEvCMFz79Hut26dqdCqPNL47hBWeW1BVE",
  "key13": "58uoNZ9LbnYaf6QB66ExQannyZ2y6GBMaRmnEf1Z9waMgn1SdsACxChT1g6u88wQ6MifhKnePJZGLPXx5sdXDjNE",
  "key14": "4TFy3a9g1kjqRwDJvxnuGThn9hnSQDLpT37Y6qSD5MPAgkvNjCbK2NhzjuwyEBdCbrdAmMy1XPYBmYJTaznfe8a6",
  "key15": "4kMHbEQQUWqo2s6EgFaHa5sorRL2rHD2r7xhFAb89VpQQ6CvNHiNuXFpMvpCjGPozf9Uq2yXmccpvSrNjDVj6jvM",
  "key16": "dEj1pFdmPrwTALukM1KkgZ6PzdDFpFKPSN5uBvWZzomvh5hwEGTwvRPPSwT7ud9n7MxgTVrmkPenEdRDWQHnDf2",
  "key17": "5ZGAKHLpqC86dKrfaQiwEc3ChviZfvuCHvqsCNfbDUt3p76sUFB9meWiLc5SxnLYmNB92e4GwZv2ykzBB7WDY7M4",
  "key18": "234irMFokh56oYNtrHmaDgN6oXQwbDzSeEKwTtVgk5gY3PY9zJ3GCwy5at6m65CPddGJTeyKtC5x7UNYNYsCePm4",
  "key19": "4eUj2fxXEAUEngdugAjBdyGkCCEeyi5qDNoF1R3kfFYtnqmLBeAQt9w2eoUV9fMPM2fnC7sSSmHM8zPK3XV8HLAt",
  "key20": "4r4TEPriQF9in3UHmGhHgJvbS7vs2a4unwoCkPWFzJQd5wUfpKXW6dhYtV2Ggmg6JPEeXPHCx8LDYt47X7R3xSNi",
  "key21": "3gSFLUUvpVuSBCCCjPMF16b5jhz1Y58GD8nQ6HqXwLWxNDbo1ga5Y6UYY1nLqKUyLWTbr3X8k2BBhb9dWa98EgQs",
  "key22": "WA6q8MERaUSFePA4N9c6G6yuL1tJG7QGpBG1ifzCbWPKZ5v4rKNZCEffhV9fqJp4FfBUWfTK1iZHSD5WdYmeLqz",
  "key23": "5sUSYVthusxyv5e7yDvbqiG477oEps4aJtdK8UYaTHv4pvdS5hw6iysMPBHTMVB7HS8hUBZ6Lxfpq4c2uLbw3PVA",
  "key24": "5gUGcayFLcC6JVvjxoauJMqzxd2TCdguJjDmz7aJxYVAbHuUkXLcZWqwJcrb5vgkpC1XKvsBWUVs4z8HmCVQQ3tu",
  "key25": "534BTYdfoRbMg13ei8LYtnejkdccnba4YRF7RY53XcW7yJwZK2TWomxy9XNTQ9gHK4pb54eejmituwqAnpNDCuss",
  "key26": "4XPyp89MrSXSTcq1xdJ8mDqJi6TsoVfci9Kb3kcHw7CRXjWz6rJoRkGfN5j8PkxcpbyUCZSQttCnVS3Qpb5KVKor",
  "key27": "3Pwvvx82MBNuziaSSGV6AGXtnsfmd9ratbiwpdsJ2FSShN2Ee7hdFwz1q2LvTQJUGBkhvfNWPSvdYuMtZ5LbiLEY",
  "key28": "2h3Gyhes33Xqh8pGmcBPjUesNWDDjREu498Bf1A5JeKihM7m8bViGAYbfo3Sa83oGPC2mQh1j8NCudtYivxrCtuf",
  "key29": "KjZhrR8rNrrAtAe5bAV1dySkM31HTfHT2mFeAyhyW9nWNZjVrHdfzTJB6UPBh1yhMEQNUQEcHbjxgqDmgfAPZRY",
  "key30": "mgq7QGN756CWp1D3TVRqKJy8vKeZoNAzvaTrZZnnMVsRJc3wBtRuSR3QRJzLNPtBkSoderF7wFoa8pZ8ER2qqTf",
  "key31": "2AunBVmHd1epsVKCPm7B47JDoTjukyr5yymxqfZtWR6UZtPqh2WVXhC9PfYKPoVuYPWBomnQzjDWQS1VvgtuTimh",
  "key32": "4jV5ogYew7CbK3pARKLgec4GQwajJyxob5igXr3zkvsgryFHqXeMzdopqY7L1GwoMqFERMvtBNbKqyZKwdojVnYN",
  "key33": "3PcTU8mVy4L98m5r73nJPa12LmXqQha9vAHXZ4vQoyhAy3mxkYWd3rUT4yPmTwXxV8xPARrdCfrcBsHDyFwALk3U",
  "key34": "4idPCGoXG3yMZq8Kr2tYvAU4VpW5njnM7vDYmJBhu96idr3cjnMxwoQQQMBB54TmvJdoU96e49WzyFbphkZeLz6T",
  "key35": "4PmEPE5vCaApPRyLkjMLPXMyucLsBdX3QM7vviNik4TMFAceq5mKion2WYDdZHmrqKXg4hpY8Evv3nmChtm3TtRP",
  "key36": "3sJxUQCEgGpujwdjvAqhyoWSvNrSU9DnTnnBHsL1vdnrZFRpQcwZAMsJ24MwV4ZhKpcmbG34pkj5yQGZFhirf1iV",
  "key37": "3vYbP82STR2DaJ9HbU4J52iyfo141TuZ5JzmhM6vxzDM8id2vEFYKEPFjrs6iP7MtLmWD6VgraBXH3X996ooKETc",
  "key38": "3G74T6sN8fBrsvX6R6bzpN8dCxEJ3ZBsiE21SEPJY3vshSYbr8nqLssrYKUSdGJ5E78mD79NPYzWprETVauqEPGc",
  "key39": "2DD8tQh7v66JGnjfpocpqo5covFxo3yrCLmRKpM5UffJZLRZKK6ejduxb5fv7dfkUVQoqAWpzuW9wXziSQELxWBV",
  "key40": "H4ifT2TM84iu2RfW9umxmQtzYX2o994a7pSfidmteA4FPcPeoQmmR2BrkftU4RDcEavnDaG5NpmUC4Z2mpWcEfZ",
  "key41": "22VX7fneX5Rs77iCeateU32wfgcX4mqQyFjahh2GUX3Ex1BdWwQyUshccpR533eenEjRodwvMBBLU57MQ6pcmrZH",
  "key42": "5y4o4ruGKeEYrHKjpZksnuAneR6BTvtzKnsQCbpdQVk4q38gcdpJhw89sZSBDsuRo3w7LUkmVFknNcFM4Sb3NhYT",
  "key43": "tHrS1riGTdUdF77su2ReGuqmRc8vfTgYXYKd6ib2CmpbP8DLGeDTAkAkfkMjJTdee2FP8f2QTKQBjpg7vGavaKV",
  "key44": "Uho1gNzrFtyeYq8FpsDqex4Dhc5EsUz5kTiSCrDUo3v1tSxC1kGDqb3yVYWBosxv6ixsXpv8qGy43azGCZqTqJh"
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
