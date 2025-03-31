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
    "5L8FqGACzgoRpL15i4g6apGYmpJCUKZWfhtocpXDNSufoWf72UgfTUUYUuBngSDj8A5kyC1Fe9bLrcVagzXSNrHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4su4KAUK9GQUByL5ndMt85M21MXvtEsFD2AGRnjJdUDtQQHSMjNpdKJYuifMewEPy2hWv1XQd8oW1rPJL8QcfELS",
  "key1": "5unfP7yXTwZe56jaxx3Y5hY9nLLtMrSnopWoWBP545dNJMwr92WZqDJZcNMLLJomoniha37nF6pLzjZvuPCY6Fq6",
  "key2": "5PNx6aCChbEdN4y92hzXrY92CXsspxtP5VWkiQ6SeNGCLFUavUMdAbAjt1GQSDzmdnsN2ohcjupbYgoskKEYHsXW",
  "key3": "5bQ6NuCRR2xzhcsgaNyxZZUFu7rdfABdvRN9Fzj4mjSPnWSa2EZFMvrqKCdY8z27tv6ZmXqHDnn72ipnoa3Z9tea",
  "key4": "4z6C3fNsdewHEbLLPiSAWfZwPsckKAN16SCzzFPvMsizWLhe1x99AjFdUMcszNm5dnw9CaDaDUfWWzosF6DLBfSJ",
  "key5": "5KmRmRLgGjctbFD8oH7KPHWnry8Dq1bVhPCK4j2E6Lxv14pgfZX97N3PycBj1VQUi2b5D4UVsL95nhHhQdd5SktH",
  "key6": "2kFvoBihEvmZv6YbFGqvDgEnBVAKFSHmT66AnyGKwg5Vm2P25RHtMtsgR6qKYuKgjQvZib44L2Hb9pZ64GvJbc5z",
  "key7": "5uaa3hr3kcVzg6H48VcDFTL1x16i95DyJtvnSjBHt4fjhFWuGo7XpSfQUT4m6KwkP9JVnhbtEiDcaR2AmBGGDKT",
  "key8": "2zvSQLT2Akun4mFgYoZ8vciB3hkurbnsMHchP7gR31H72E9pczEXZbvdZtgpJ1PV2DhZ9WdSCERPS9JHJb5BavV1",
  "key9": "pqHabUyxqiqoFbA5CPn4mcdMSFTRJEXvGeX8dAfj4H8w5RfjZ2s4sC9fAnz4My6EpPPGgGqeocecuFYzNVGyxKt",
  "key10": "3XVC8zS6Aoeb8z2catMSAKA5tRGmA2z89DaM5XGxxf8SWBZx1N42gbfRednb1w8bKdDrHBLK147VhfCew9yw1UbP",
  "key11": "28ZVKV93HEDq46DAW8AWkN7uHHfS9tuYC2EKXqmQYiM5EXQMX6ViZhGxMzbAwfhkv2wLqXYzdxTrcn8YGxnWPUxs",
  "key12": "5V2M2aWQnHrT6byc34weNaptMDeEYzJz2AZo1mvRQ6n2CGbfCfGfeeDuF1xXtXYk3ZwYvxFvEzQpnvcVRX4iFNBW",
  "key13": "3MFVwZmteN84H5DdS3B1o5XehkrEvxxhagVRNcqdH3N7scN48N35Y5jZiyk54NRGBcsse4L62TM6ncoaxp5pi1Ym",
  "key14": "27R5jvWy5bwkXXzxfvyu4zj2bGn8dZTrUF7jTMfTXAkwCMyc3DHcrtDoaAYuQL2RKqsNB5CYh4D9aERGCCbCfuhA",
  "key15": "4uH34A8UYrbg6XLXMdfiw2cDh5PR94Y3nXqgbhcWeUbJ1fjHpX4Wcnk4mTymmKQEwrJFB6wNrG9nPeskPJwk5YxU",
  "key16": "5WT1GtEmQZHBd28FPH6UM1rmDeanHvpB9thxeDNgzK7h8bSp2ihxi5wr3BmZx8CmXFf4KLp5eCnoitFzRQrc2Dfy",
  "key17": "6hFT3n8Nwfe89qoWHTxwCwycXMhXdS5JYVUHVHwKZhwZbwK2pe4DrE9JatC2oL9tboa363w2WSKk9WTmu3mF6WH",
  "key18": "3MrbGwztCnXCeqfPNMfbERsBY4JQiZpjCSvfUmjCRfnUDfJQNXWiNhtp96YXhyeKiGhH9HYCYrSweBKBJxBPUfZr",
  "key19": "4EvMYbhBRe8JPUSqEhWuaxpkFX6ipzXqk21Aw1iTVZXrkrosWnuLTfw4EmKcjf8u3uJ7wysGmJ24qKr2UXmcKm6h",
  "key20": "WQ5xJDhWZEwWdAUzei7uK1nt7EzSSnuDGbrVNxgQzRrMpqKz4LEdTKn3iiKBXtMAj6F2FCo362sEphtpckb6DY3",
  "key21": "5vedyUMZsLy45dzXABdJuwaQNcYi62wAcsHPC84cdqp3X6NVFktRnancTsPxM9STx7zovWuhBapWx8Xq9HiCcNwQ",
  "key22": "9kAEJjTvghbFqR4jMXDdxQAUdF4fGc1mHjU4TdTzWep8XbBPKAy1ZTdTx8AfFHXuffvG9JneMXD6FYwtPZU27Ex",
  "key23": "5qQBKzDgsrH3rQ89d4194Q2RrtDcfSXqmYPeeUpXKEnyBDXqCYsgkLrd7GDKZu2p6GNVYK2XdbfBhF4FhFtGYxXB",
  "key24": "3ZCquJnRU43UN7XRXRnoBkya4QGr9R4Eonyc4DD4RNFZBGfrZPXU9v1oAgo7AeCMfP2mH1DWbbJjw4bHmWC92cjt",
  "key25": "375nvbdxuUSj7uPnEgE5pMRFLV3F8gUmhsNGoCwFnnPB1PX2uCQsV7Sa2LBr8ucRhobB8KEfVHbyZmQkNuNLTst7",
  "key26": "3RXGcaFjYBzVZvMwoKTgYMARnLJVSBvi3jkQ5v758MBLPZ5AL8k5nad2z1fHJ87J12uS2AV1QV1y9c4TSmuLvsao",
  "key27": "2cJGxuvX21sPLJ6TzfzFRGZKmGmRoocAcTvZUmGDfZF3hXCrDEPpYRLNaBWJJRC9bn38FPTZS58rLHS7TgfyXHvF",
  "key28": "28wfHtxUTVGJuvTsEMXioBVvh84CmM7JMTmuVtPLjJj4bLs4mzd1jqv4wn8E5QqpPYbM2kwBpq86pPa1WcTfgqLg",
  "key29": "67Bczw3FCyHZRBY1cikZxpv79AffG6VU7vAxbYB9BvTYwmFS4HxeoRXFyNUincT9p9QMhJexccqb1KsYBy7pD2tJ",
  "key30": "3j1ba17xMJ819xYEK5iHFSiiHAbmbyib8vDmJ9qx2CqGUkjG3KRD6GTe9jJYcpsrgUiy6HUCyYbAnJftPuYAdxUs",
  "key31": "upGpAqvSsoJieathgUpkip8nfxL7r2cjp1aBPn9ZeePtmV2oSZSCUtSD4Zh7iimQLsjQNBq9mGjpfZpTkzVsuc1",
  "key32": "3vxEFSKgXQ4P4PXrkQyXPrA9ffaaXxxYM42Bt8j6SuoK6MG4PVUEtuAH9LMDwfGFhKz6aBFQzA7Z2pQK57kTYaeG",
  "key33": "3ibGWKPcaS13SziTqdsX3iUxAUEcbNJeX7fTHYPh8UBq3oEZ7N41QRDtyitrhJv1REGGgD52H4ysML6VFVCtizZq",
  "key34": "21rRJRBhYU5oS9X6nVW4oNNZaFPoGPJcrmyF1bw1ynErzmVf3rbAxBbyDruFLcpidbZHtRRQJXaJpd1QeXYkmYrq",
  "key35": "5gPz34yoRMFmLZ9LpToK416HWZiaKsv5Rbo893NVr4oM8zAVsNhp9kwM255SrvXGj886icoNEHmY5o9dXJXT8A4y",
  "key36": "26tugGDk79dJeUAVZnbcQ3uiHJpkgq1zU9fp2jPx8An3o2fKFNagCeYehEmgajUWD3zL8Qfcbkm33hndjb6PQSk7",
  "key37": "3miJgy4e7VB1gfmozu84eHD9zH6GskbSL5uk5iecbT9fopek3oQ81TTrv8ZffpeHeicUGL1TQBr2tebKemE8nzXL",
  "key38": "nGWZcJpB8eXV9sYZjEWNrJBptr6k6KB1Zys6NN5UhFgYDb6drCQShcuNfZVFCTkfwdXDizNWYJ2esWZWGn1yn9Y",
  "key39": "4cNmr9CMzCgeDbxaVkt4hRWvnTN7ANE1LyFj1nbU9bu2T3WV5dHVW7vFaYRGJBbs77mnz41yUpw28HWFBBHbxEiJ"
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
