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
    "QcTteWzMECJiuTctQrV2dizcMGAEyVBWri4Sfw45o6P9D1jwwPMa4g5S8C9JBx8o9dn54eaMFJhSGRFMnLaR7dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Yi6kMLKc8DFdB3d88j5TCbzFZo7qT4GqzozsH4Gp2i6dVoVKKL9sJnbJKQRZa8SDwKRVJjBe248pJ3BZgXPEm8",
  "key1": "KJJZeNzRehSqXXJAUGrhZBaqAioYDsUoWMvGd6Ls228W7wLFxZ9ji7y7s2FfzpxxwgfRn5MVvHzmbLHWRebG7Z5",
  "key2": "42v8peamytR2LjeMFoRx7Whjux9TEXBARTPXfnwbQhiMLuSwa4P9gpSFJgcqnXLC12GrWzUuTVgZk2LiMLULi89f",
  "key3": "5TEVJa92paGGRnHd51AjGFUxXLdf95j5ffEKh1hUezkq5juQGWLb1vzXc1A11umt9iGktPMBFDgG2q21ai5sEjCH",
  "key4": "359EpFu4pN22ZfXC9VVZggNt4RiQGFALTRqU6nJMXToqFJs3b3fiUFE1QhjwapSJUnr26goqnp8apGj7YF39ZnNW",
  "key5": "4CQnMLpqRsnk4szuXE1iVbtJjqg6JcicYGsF1LNYgBai3U7ffLevEq44Q4Az8oPhs3cSVKswD3j88dmqc8exGsMd",
  "key6": "4nwW12eJuhf78mxVeKR9cZnX5FfminEW7nLcSjyn6ZvibK9f77WhvokP13XkjRhuLqdkXyUxGC1o1TP1zvpwLCd7",
  "key7": "W2Jv8wRKCRWqGD16vV79Dnc5Z7E6bh7qTh2YC9rEqzM2Et88HuPCmkxHCypJeBMnBN9kkbwKQMQotwgWCifvhpW",
  "key8": "44G8rNsh91Vc546qdGsSc7v3JkpjWuhRk8X4ghjsnexXKMHPT5eATDH7svDWchBpNMpFeBqaoz46nPCgQG4BuNoc",
  "key9": "229J9F6rqC5YwfuzumHUiTp2Pv65brVAmwKNqfYUZSnbH3vKdEXAkT22EbyRa9CbeezJGvdFPZ5yKBrTXqocLvhH",
  "key10": "4AvnxSaFsifBgTqJWu3Ysxa6rernLDFFngnGf6od8rAxodAfj2dpzRJYLPeVEwg3vePusEyKoLiiMt7wPffeYenb",
  "key11": "4rgwiob89LmerjYxCaJqr2Co3FCM7KF3Q64zmtA6DcjXhrBeHkP9Q9XMN1SJseUPvSj9SuywxraR1j8KiQbn2icm",
  "key12": "2Zb4yeMDubSABG2iozZUJMMygGLvtgiYpqzn8A1UG2JYEbaeegbWEwPD1Q38oDpDBKquBHQbm1FTa4Z5T59SNfw",
  "key13": "367ryKxXNPY29dWA16fyrpsEDEBSgFZccx1LnHiRi22csi3shHVgZrF6v9nbj1N8ETnPB5LzFBitLukdzmjdGYbc",
  "key14": "3GBRnhyD2PHWcaRRM95FBwchzarQ7jZBbFd38cfUUsCmYQ35VhGeGfbdBrvpTxWiWGnCpwbWE4g62mt4pLUcitpJ",
  "key15": "3hKBAnfoJNQQY8MpnnqySmKV7a3Abqc2hqcdL672TmjB6LyDnPZotJpTBMLL1ocEZMSdGUCdPfqxB7zMHjfDCkGW",
  "key16": "3E2Vwh8Eg3X8tiboYo5MD7hYYtchgwyEYHesLafkfxtCFqoRHF5522iZcYwC7PWg8z1DSXB29jH8zz89sZBGn8oh",
  "key17": "56dnY2EvX5aBBJizVrNpfazz9h4gCVTHipcbcfMfbZ3r2gXz5p93gar3v1N9CEMoxTpZgCZytgzRPm9MpLvARjiM",
  "key18": "jzLUHt1XyHigcMGbww4bjKy3vZVKdaA3CkdUZ2PqQB9JqM9aDKWKveJLf2jBGapZ2jfrEju5rVhsz2oZX9XeBxM",
  "key19": "38k68UjmNmmrjjKUUdCqSYxc5pFcEj8vKvwUQdUqYNyKnHdZehstF7ZmG5NzpyifHczoAXcFnrDRpon57Xfd8WFh",
  "key20": "whUMK1jamczbCP397kaYh5sWTKjJCPduvpASwRUMtQnjvPszQYo1wT1K61nhqziaEcMJJ66yvijHmQxhiv7sBZ9",
  "key21": "5q5hp8Ni7RBJtTmXncSfqwHsfGTBX6ni4WJYcPHXbforLusE2fEGMFxNSCrVgiXb7DwTU5KXgnfzpZZpeKKEgByV",
  "key22": "2b8vSuEqRTKwDPbcBBL13oW5AA1sJkVjse5euLYweAbqiruTm88FZ4F9J23DTjPLP6dsuZ8HMSPR8VKZxrvUhnw4",
  "key23": "5Fagwep7RL5JJnPBfAsk4LAmymAFKWMZG23j7Wb6mxjihJpVgoRu67EY4tgP3VrCFDA2G1raQWaYUA6J9rcgmKqZ",
  "key24": "85TWkbbkWgC9Nsx4mvcf3NPpQnvJSmRscoNFn9jCSHucvZdrXYp2GEXfWKpxmGMkAiUir951PbG8T3DPonqMJP6",
  "key25": "V4rhVkA6HjWHSA7zbCxL8KHVi6TE4YPkFUnKTzrvtrvtHTj5T1LCLJqvF5byjHgMYzgfT7h2BmUUsNYFXddKJ3f",
  "key26": "5oq1815LcRNkXAGjarQP3eo83DbZPcCfhiHmsJNvePxZP6NACfRspRMtBtgjFnyR1UaCn7U3WNCKo6AmuoA8Dv3Q",
  "key27": "41CWiwnWT2d5Yb7rNyyVsQ55auLJwR3wAvwM1HThfS22hfoKhaWPZfWr7z4yVPEVGYeTfDEDmiJRP1Xfjto5g7AS",
  "key28": "2G5y3ULY4QyonykeqWM2UqwchyuoTjo6cf4bAQiAtfhtiVaVt5gS5nbtcqtnJpVokaGRqXrtvUVjQDbXvgLHr4ii",
  "key29": "64NJAgXUg28bTQppXC9NS93h9NpcACbaxqzLynhPyCgTxpK6FgdaLp7R72qRr3ZqMJ3wJc34CT1ahUspXLh1Ds6T",
  "key30": "4EFzrsYWe7fmQTQSrrcDwoaMstf3E5iFsieNGz2qkGb3rAepv5vvb8F7Zayd8tKrg39rhTvtLT3zp5akAdvs1bYL",
  "key31": "5qFoKK15862uuaFWWv1jQv9qUqvFJyuTnVyCCv2cUMSuWkYw8Jd7srbPmgjPSP3JBUFqfDp7y7M2B9BnmEKPDrnW",
  "key32": "2jBHbJQ22w2ZZocyqhjZbvFvZs5nxk8HDgrPErBULCvV7MMrhamLgDDgfTHuddG7ACfYahwAwDaWo1H3HC48Ueeo",
  "key33": "639yjusboACVjNEkLzoCJYPtkg997PoP52WSBiTt9dS2hZ1phSMTkcM7yBV4XbdfF73nSFKkmAs29iuoW95e6c4k",
  "key34": "3d913mNbAyacoyaWpQKkBKf2rVPCWqVTkcPfUfrkfZMVLWYiLKJATVCyh9FTWXQHGMJ3dDBMxkboviLAfTd6gKxH",
  "key35": "3uc4wHLx6DuEgrp1XwYSQyJSTwZSAFaJbFWjKDjUFUCtya5YcCWCh4vv7fvzXCXpE5ohXskycnwCvhbXt1AKQ66h",
  "key36": "218KHpturydZo9hxaMjsQM67tEy66heEgKmCMYSbM9AsoT76Gf8EDNfiHwSTUdYE6Thw7LwD2bT1U5TAExUHR9p2",
  "key37": "57q33Fv3DP4KumcLym9rKFd1T41hNw9jdVRFLGmnzkNHSursYfLn9bY2mykthh2j98Z8hz7azLrLM7dGjJ4aaARa",
  "key38": "2K4GpR24rJHm2oBmJw6W4UhRdFaonESX7EahWoBhXfuKKtrMAC7QuBq6pF64kHsYiRjzK2B8YJMJRwAwsARf6cBc",
  "key39": "TGRWW1EpwrGrRDdPrSPQsYSD2QrwXBhazs2N9ueQiZ5fgQJxbiwEqXiuhb2XFAatnrZhnwQpHD5opzGmRA4RVz4",
  "key40": "36oAgub5cBv1qBmtXNkHVMYp5WtQfi81ddQ7736mnLbAcHh3jDiFxMeMiyGEWyGMFPPdfTndBTJBqZYR7pJdRfDc",
  "key41": "4iyHgTA1zK9BWfA3XDb1cATXcxrDQa1Mp8jayTffmWjtrE6AD1KJ3BjGAER8aEs8zdnGWeTbogebsRJ2hZ2L4Qyh",
  "key42": "4QbXn77X6nj8u9QeYqE7gsoQYwoJdQQbz7w6dMAB75Tz8SYHEaiwKN9gCFpVqdCmDQKTeq8KK36jNppC4PGR7Y9E",
  "key43": "5rj8k4Ui3HUteg4LvGEzaR5G1EECDPTH8L92vjUjxSF2ZjZuhvbxZfcuQchitvNp2fQoe6A74VZDq6TDCTRjtA2N",
  "key44": "3Fkcs2HJyiAmQ1LZbcrUH255FtVoEgp7pXtXWNqQq85cNYF8QiY7mY5QAYaqdDgxqQJ5Zn2MhrMJYgNfhoo1EhZp",
  "key45": "2pvqcgmremxpiEBEux2XwZP5hmGEqqy5oRVXzkti7uiZMWDLYNqWqetDf6bbjtNhHPJSRi3EUVNnq1RzZ1ZnrsRe",
  "key46": "38b8F93RP1BKVg1shXW5rzPTPAviwjifYzk7heb2Ws1dyLze98Z1anFVeMwGuFHs7uNBR4NNMMR7wz78zG18D1AH",
  "key47": "5yJLAadsPUkUbMgyqjAa4fvpJMa5ZSTLJsGjza61C9bZ2d7zW2zyYNa1hBrLE35qhymMjxYzeo5rffphaKsmgeGB"
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
