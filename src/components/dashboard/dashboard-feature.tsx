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
    "23RGiy5MRJkm5FsiKJhU93xeR4NPEnYC4DRndVUFwgEWyqAzQQv2A353xR6BWNrH52bafomsakFRZ9QhXyKJj91F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DiZv5Ei5WH6wngqYopAWbeRcv3RF4JAQBHnFz37eb3av3X5C1XXKDa9KTf6CcRZEkugtrkCFWcKgK5usLyvZcN6",
  "key1": "AhVJV79gfEDjy2WYsNACnKgzw168UGByFroAhdn2nrUEF91pcQCWHirk2PBLSRnuUbhG7XQVpkz4ZJATeawTAq4",
  "key2": "4G9xJjJFsjG5b4p6iMYamp5bEV2vTMybrS9PpZZDThouYLSdyeWjBFrbgLCW9jhKruvugfPDEdpoWHjnSyNSfczr",
  "key3": "gzshr6K4xwfmCVZ1yHnNtp9LadKvBAsnVuRYGK2CvF5KeMNVrfjWebUrsB5WRGyHg9zBwm28Xh78kWDYvP3uhXe",
  "key4": "3MDBYW5s2gLC8Y28jDSwTXvmP2iRC2h1YeyxpEfM5dHK5jkp7qL1fHrx9d3QurdUKbZyRZ6MGTEziB57ECaqkoHn",
  "key5": "2A822Fymp3tXKkigB9NnJTHFwQEGdmjKFEzDjg9t8bWTx6RCnATyNuFZZMn86NBWREAGnGjKWncLitYk1SnGpHpK",
  "key6": "55ShZv2AduKCZN3ePzXDpMqVPFr7gJGUUyqNu9iVuRJXkenmcMSoZ9JsbKZprvVP6hZKjSDiTwGpZ2EoGQZutnP7",
  "key7": "euuDW9g2zcLWu9A6cnBYUkmPBepWKVJGK9DWQxbh1VyKW2LmRTxu9xQzYBDouxrqw6fSyPMi5nH984CiPxdY54G",
  "key8": "28QMoGJRzBPq9DzdrdARBf2MqXMpVoG1Bbr2hdTLs5xcuaVca9RtvHF34LJmwef68sZEMEb44GiiByHeaKhZc1hv",
  "key9": "3oKGEf1CL3Gq5pf4v1AWLXrpa4tmYwzv6dZchAxwKw5AnF2mSLcfbac8RAhboBouJZ2K8F9grTPGpqQ1Bge2Xiio",
  "key10": "4BjQ4yJvDKL6rFQAv8UKjEpkwzoP5vmATzyeKconKAenZn7F7jKVSifqDUT63928ptj56TAAoABz3CtZ2whGsRL6",
  "key11": "QrNd6irq1iNWohx3hGyzrVcZ4A8epwTmuQZywMMPWH6Tuiaqe24HTHJ2ns4K3fTmttUqoQNtr21TdH9QvWKw85Q",
  "key12": "2dW82iADKRdFooTxRuKDy187gqXVhgDUTcWYzG5S2q4eVmqCwibAgp5BZV7Eo5jiXQNfUdVrku7bCUs7Aru9Y8iQ",
  "key13": "VArBtQLGvoafzSGm7vucG4GFnwEBLAKQPng7h4DycK1bnh2KPwxBqgiqmMvA59DgWR9aqacajxRYeUdv2p33GGq",
  "key14": "RPDqkMryVnCjoNXCNA6CYYjdRZFsUWCEPJGkMo1jayMBKgeuEryoJkceRZ42pFSFceDDs2a5MRMkW7qaWr3T77s",
  "key15": "p3HXBwwY8yedUf8mgN9329QzvJTL6g94wQtBfhKxZKh2fVs31kPtwygRzR8VT9NFcjr7cedcs1bCAFoD5aivGH5",
  "key16": "32idMcE6voMNi1jyt3PGcdzjr6sXd6pef8tS4sGmHXUh1h91wTR75Uv65KbELjz4aVimVKQrPSGLhQNuiBCm4iie",
  "key17": "5y72ijbZbXohB5hdJiVGbqjHAoJCiEn6uQLPMBSB83ZK1VZU641GM9t1L878deszi4oKbbYmDRPpiLuSFmvUuJuQ",
  "key18": "3PqqzMtheATF36FqGBv6xDSRLbdXm3yfTz6FS2weLai9npGBR9tc87Gz8HR8W68nthxLd99UGHQ582K9BXTmX2aD",
  "key19": "4uatDvXhyt94twfw2u6bvivNdFYB7rNyd7Aetku2Muh5F5LkpqjX7ftawjYQVE9bW4tCCiUn48QKxt891jxXPuBA",
  "key20": "4UpGJNhwBibiRA9HNn2EZhuK1iEsbuVXGsY6rJDCbqq5RGisEwNiDSAuSQCCzFdrGk5pSgPrkX3HWmGL7kNDeHXZ",
  "key21": "ns5UT4w3d7rWFrE4tQdV5MXvdUtKJSCSYCeVDWM1PngW1TTh8vP4NxmZNxwSXwQPW16Nf7EKEtsb48bREPukN68",
  "key22": "2bgCCcgLA6NonRRv7jKyo7qSfutMuxuTwpYwryNPKjATupYwgowGFNzZZMz8vxKJ3NS4DPApLMaBtBowaRd7FGWD",
  "key23": "3BYKJsMbfpPVVGoEkN7LECPrZJrzZiVJVbW5PHgsT6ka7vwqEs49e3Q7vzwuZjoiuopDPuWhGLXDSGh3gzFR8u3j",
  "key24": "3pFQ11kDP4WaBFs6QSHJfu8PxtkxgMQZKhJTADot7C5aMQj8oAgJVCxNm788bDfMMarpGiCoefwQUsgLqUERDeQY",
  "key25": "3u1kqfuzBhr2rTdzuFdnPjxwATxibzBUc31b49MvSNbbZjooFXWh1FdDQ9sAKFB4udX9jDpgkBLC2VGQ5jJpCsAB",
  "key26": "5eGuCeFN4tqjKqnSUb8VimRMEq2P6dLCgaNNebuX8vBpJwjFWKNvFCYhdnE72PcZ6vyec8hC7JF1Ykfq8LG3yjnV",
  "key27": "4hqeYqmhDnMSzfhj8G1CfbT7GQE6AT7FC5q9shHgMJxGP3oCvzZ5cemikSHPMC7TwqAMAizhjKDdiEaHRY8NfbrD",
  "key28": "uBw9kZCzTcUcmLBZdzjwV7mzFfC1t7y49HVPeDfs4QmBdcYcY5tTq9zZAuYcD1GESARtiduxRvtyA68wMq2uHD7",
  "key29": "4Co3s4f1zNnvAyMLboEcKMR8UBZfbNCLWDWNjoUQ1KkU9fnPJvifSgB6wRybTFD41uRfEv8rCCHh2Btvf9xiBhGk",
  "key30": "5EchzQDLsrPPCfdvVRYjaiVN4kmp9jabKYytpxYDQ1X3uz3WpaojUC2ca47Wp7EcPDT6HBrUFrZJUWQKmmDU1VVZ",
  "key31": "5jNRbyeCDra84PnPDG8arQLLJomQJaNdRakNJ5wqpbwb8j2vEcuStGDoheGY78zdVLKc7kcJX621ytQD7moJkDEh",
  "key32": "5kqLPtDtSKf3nFNfBB6sy6Z22ZU4U3ePUcMCaRJFnF4XnAZG8kQRidgk4QCzU9Km7eGHX6wh1AnWuQCWGXHAbBgS",
  "key33": "uDj2yG4xi74d3JVciZRGHqGNzaeCy6H2oeFmdPKLHu5DovuDDe2Bh6CGZTYojU2BosDviQjEwpJc7bTudVo1q1s",
  "key34": "5E8hvMs2a7bWJkehUoZK2QnYrrRDw9PtNS6VJySqsAkzqQt9PTuyu7iBUq1mgLkjN6aZEPohVjrPjhM47ifRd4wa",
  "key35": "4EPhZL65F67D4tKqNRTGoQfmSULyztdUASVhmj5wbyyr2vMqABkwU6Hfznfn5fLxtZVPTgrv4BgsYfjboBxaYhpw",
  "key36": "5oCtbHV4bnequoJKhMrDndGSqX1uJWEu7mc4tMBW9gmDdD6Z8u9n3XeCk7B3PgLHBoo32W8awaSz6cSrUQyaYhf7",
  "key37": "2en4UmCBmC6n3d6Lwk7CirHuCkNo6J7Lg7gR3xdquRyf73ZwGXtEYpjuwiuwU221sBau6CVZqAPoCpKHNoAJXaBs",
  "key38": "4TRwDihjBUDkYjfcttK4VGLZsdWbjtewEMUZEBV6w1udPvjhtrFtcDJqdJAeKX8JKeDV4wSDehp1ceN9CPaRhH2J",
  "key39": "3ozY1b7tZEzkS2You8MS5vriUXz9zy35ZbygwVfKBZtcwLN3WGuhcMXYazFDSimJ6pJwd1x5ke5jupVFaYmVG7Xt",
  "key40": "4UZBfLxn2qfkHPGHJ9aDWSBfMCiScASohifLPSugNAcBUyDQmkQw8yjgC9Z3LQVft2nmWEFtFNyWo8V7joueibP5",
  "key41": "4Aq7HHor5vmm8Av86EHLsoBMfCs7KWt9f764G8pVtVz2FvNtJS2SjGxshLTBEEvHPdZgM8FxRFraHxVbPVUvA3Ze",
  "key42": "3cYEZ6B7ZsCkYpt964pjCwU9cD4kcpbpL1eYtRWqfmB22rvvZQgSZqZVHei6f4qHxcSKRkvLqp29beGMXdVRBj23",
  "key43": "4y4fgPFs4NuandVYxk2Rucyobpy5PYoCHbHTEpDnReYahUBNSNyaJocNVYxGkMof6eZz19YX6aW5LouX4TdTjm2a"
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
