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
    "3sWnGHp4NYmGxbtABaxxeS8F8veNfrDXjNjKEVoeZ2a71tDAafiaoP8euaPnymXt5vqx4GmRcVcSe6hPtDBFqdf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44fcFT7w8NfpykuKMBvPveThPfjhYZkBpJrMZsC1xQQUnU8CV9GDZKxBCXSjjgpqRRbNDR9N9SWY2DhKRuHdYczQ",
  "key1": "5ckzJqfugGyTq2XyTCgzTDVvPyDfyQBnzL2z9BfDpCCox7DoxhuWw3hVKJdgmxiWwx4waBouFCQ1R4i1PTt13ng7",
  "key2": "kAMwHG9CZcFcTLWLzwxAFWhbBRtTK959SooSrkagcBEZBNMBu9Ur9AZgjxJGvyWSdSaGnPf4gM1ndJyYUYiSMhj",
  "key3": "64jp6FXQ9jJthdo2ES6CBRvetmhToEwV5aY6xmATHmmp2YxepBEGQDccdCET3WA1Z6xSJ1f1g6415kb9k38vRMza",
  "key4": "3wPFvo9JK4ZvifyPFDvf9fLcfQwXXwV5psiQz5akcCVzKCL179hXriwZiTXbYtiNYy6qNcxAPrfG6YWpWv83XYLd",
  "key5": "B1LMVZhvT1r8J6tUE7NC7Z8SfV9Je9pVeVnfm2b5YmnoVepS2PhrTRztg6eDAh9MpqzvaL5xvjqg23d32fCsURv",
  "key6": "3YhzALPj1QhQ3E7YKqJnvvHhAr2s5yzpXFLecgqcPzCKozRpWimvP9PdVKoMoMaYc1QtBcMhn35rZiZt9T4GdKr5",
  "key7": "3NhX8PsKiB5ivqFGBxXB8dYGsLFvwVXtP2joFh2EYCHykycBab8t3jRnsi2ZnkNBVycJ2ZPmXEz81MZEnpHgJca8",
  "key8": "62sLVhziSBrxy5U3PzLUwGyASZQzQN68im58ShkvHJ5hvKtMKeY1icV9whGLbUwJazZ6kQiqHCFPdbHLk3VVwNGo",
  "key9": "5deMuJzbHK7Tjk2VVCKWQai5gRTbd9JXToJhjCb23KVmWN1WMz4amHxxJZRVoJXANYPoYtqJfwUpNUUsxuJEmAmS",
  "key10": "3bMgEHCfPH9mEofhgq1e1VXSVxMJHpfKKFJKymb9U5Ci7G7LEsBGtAye26AqsxoXKGZJpXqyL3bRsWyz715Yhatd",
  "key11": "4aas9VQyEJiEyRuvhhR1TkS6qZzv5p3ZwW2Hqfocg4C1gJ1PhtT2yAvbDsfM9Qx7cq9HQDys8Yeu3LaqJnBgYcCa",
  "key12": "5tdHPYnNMsvqm5DgxLPfmAjVfDV8njSjAUidCHdNxTR1wYLMUtUMBYcc6dsZ9DiLjreJ5Xnmipek9wSYoUAkfX7a",
  "key13": "GmbPYWzMbC9DJKMtr8TVhrSV1YyYnRHRbkh558kUUkQeth9XssqZCTns4tbjggcxuciaFkWFcPJiKy7tvAQvUBX",
  "key14": "4p1TWPKrYyjktAHJEQMFxHdbVPfNPhbeV9sqw4LoDgzcBjHkLVMRQMjaxY7eCuZNrHsNAL83TTQwbm4TNw2cvEhm",
  "key15": "Nymua3paRhwtEWNesyEMtoxt6bGdjBjHXAF1EPyF3isLFMcjKXFEs9uUwo3k1bRSeTBojruyuGeM9cYi6teeg5b",
  "key16": "2rJmaBSPWdDSCCh9VpzM4Zps2JJGkRcTPw6sihU88nHoQ9C7sDzH98LqzyZukuSLfVRcP7Bse8FgWriCSDFHQSh5",
  "key17": "vpiSbdeRw1pgiDydhvUJ6J2Zy1rAeceRhrUV8zoxZnmtV4gYnkF2G3m7TFPMT3D8LEqQRKNkQzBK1RM8v14NHSx",
  "key18": "4wK56hvExG9YYVQjZ2R1NbbBa5u1p8x5h1ey9stFxchd2gkLzLkBjWa4uCbuk3s2huJopK9RuvJsdCfn2gfAaXb7",
  "key19": "QCdxwQaG8Lw6LDurLra7ocVzgDSWbEAVYVTvsnEu277GuZ8fSggyouP1r8cHDZfDDSxnC2zCyWupZs5UAHnWyqT",
  "key20": "53aDSFUsb3nAHbm7BzhJtNbcxhk5Md2pNCycobFVGjMXX3cKxtFcupMW8RB9nSCzd2rYoo72mjSnYxBS3J5St8Xy",
  "key21": "3b7G6kP9QbAtEqZHmY7Q3TQhKXGriCBxGq26GXRnFNdpkFeBhtaJ63BiyVbWcvTdXfRHXmm7HXAMDaj7fe4EDXJt",
  "key22": "z9TGyMgb81TMKNW95BWc4vVjtkZ5JBFw8oK45UGvRfiL81sRDJQbv5EJ2mgBcUGctfqwXh3z8GjdXJqnJ2Ryib5",
  "key23": "4uJJFaUYj8ZSoBoS7z9cCEL8XS3WsFRbMNsfn2ymJudbXaDFZyBMzumM6p5NQ8b3VbUyfcvRARHMyYkbmkGVX37s",
  "key24": "5xKyxQJSJXsg1bF4wj5CRLVnmHeJuBq6nreJQqk5MZ9QNjQ7FmnERDDR5snYQJRFdNayZDtA4eL3KM7nLBnyAjth",
  "key25": "5jgptnFzKD3eNPMKJQs4y85a1oTexyx5sLjhgf4eLw4kmaY9KwfmHm3H577tMFpFGYFozkJaTM6oJtoeiXwEQtL3",
  "key26": "7AdHSmq9aBL5W9571SVfsuhPVEdyCaF86aJFrhqrTMn4UueBpkP9fssEg3wDomvYQxXrMmWNirHcZT3jgzfYUSk",
  "key27": "2S2ZWetsfFsWDAjuCoTqsG2oE14dNoyR8dKUjeTz4L1Fsnfbus433Vg5pgg9nUjaae4r3xJmJ81TKtCiz5Xv1H5i",
  "key28": "3ASqGCWQ11exE6AybhrN9KmH3jXQ1dz4omTSqCVg7AJ4QpAN8yLtDvUNfDxykA5CWTraKm5WudzarB14RPM1RFN7",
  "key29": "2o9TKZ3GzYJSqUPJGncJGTdFT19wAxNkhw6kXLxcaLM1uyL4nddqb3K3kTgAd3Fq5cpPLQTde6XciqGYnQzawbWb",
  "key30": "3pDh2aFcCToPzmPGUL1xPyKpmuw2nCLJNRxozyV7pwUU4Z5eSsF5UAYJk5zYBqb8Hh2PwhkE9P5WjLNZxK2amo9e",
  "key31": "3VxYHS19ds1gheraNX1d5Ze6rYEdrFUgQ77oxSnmyeuyHeXe2tbHiNBVNttrs1gg8gfp2QJGiVMECncgfBX9fruh",
  "key32": "3ca4JDoc3rgw8CkfKE8DPivsiui4hKeFEjWHHb171vvkqiDTnBe5c386bpGXGpNh7xWYWmQdC3YQryZkBH2mDvQu",
  "key33": "3sGW3KSu9GytR5qyvoWxwNSK7axek6v4UA52y13GbJC1pxYi5FqRJWg3YmLtAhGcejiGrW4cxKWJKQMN2YrxUjDJ",
  "key34": "3ysMTp3Eu1XLhdQHU8vRR38ho4UYvVNtJA11PmPpnkT6qgxtyKoPnD4vLP8E44rdBQK1aLS64ue4SHS6bPCezGcR",
  "key35": "4cEFytu5729EuzxfL8t82jM9KAokEW2Tyag5zKbyF1Bmvmift19wsVMhmtGvpnTrtzZJzkkChX4c9UJiEZUN1Gya",
  "key36": "5zBxUui58ho3HuEBQWhtELFWWmXWo6Nu7UhCJ2DrQKDvMXya9ZYCzb463S6eLo8qESRWTc9wAqbyxj3QhubMyEMC",
  "key37": "5yU4onHHJSJYtPpLK7iaWpzn11WxT2BMTpoamVgEV1yPNbEfUzZd6Q8FYE7Uif1fyUYxSEbSp2tHt1ADz8prpXtt",
  "key38": "3ju4a2CodQZoygFqkKSns3NPoKmt91zsC7GbYukukU1xWvF4cAGy5mhkqv2aMp4ejXZLsJtWWg9HxgEQHXurMDzH",
  "key39": "647AK4RgbSF8Ba9kUfCAiVvojGiABfmqciKfERp2ZtZfKmyi6dqgpLSWoG9zjacG1cEC7CvhDy6HTPrLFDXDjSdp",
  "key40": "5ShKJ8zgZ3hWbeE8op8u5mVg4ivwDAybjx7gH6S6KubsewaXwsRg53LfZv7eMLGuYmoWWHWATqYaWCGGN5P4fby5",
  "key41": "2t4f8ogBefndKxTvSyF6Mfx3wy8RQbg4CfrsD2uMHoXa8WvujibXa6WvsU13J3JYDmEMHyzG2jwWEnXynaiRH3NG",
  "key42": "BkJCKmqrqNu133jNJw8fCJGcywCaaB5LXLjkBSDHzMZhi8L2TG4nqq6eWLvdrJkpBB4AKJn6GtP8bMvcAH6gWvn",
  "key43": "3rWG3swQyZES11M98cVW9CuwaAfqNnwDC6NwKdsLK2cd7y6hmQW1wFMmErcfdSrdAsKKQqvzrNeXhWDrw16ajDku",
  "key44": "3KZ8A1Mh84kDAgUtjfcDFAGAxws3SQMvj616tBoEBQK7fSvzRuKsdQD7JurtjKXurwHE4AajVvCfT7Md2WedvH3W",
  "key45": "5NuaDsGnZP1uWTnyXoi34vaUiPB6VesVdBe7fwrAZhCDom6SwhWTSUZpYDz2poLnGJndkjqumypSKraD66QNgcSX",
  "key46": "1hnvrWm4WXyf2pNCQQ1dHCN8A8AGdHFUSK2dzeruvsocmmnhBS5Wx1ZywMK8eT5ZFEWiNbsudWYEnT7ruxJtfcC",
  "key47": "3p7W8DhzFyTgJNd7iPzy818ETMpTyEbWuqBxTcRQ7Gk8Ce3srbnvtRpv6RqrVcfUNsdrh4jLdY9dGTa7An5R9yig",
  "key48": "5YukJeVPf8nDHHaoevUnCii3Ct5DQnf2UCrzoZYE1GEzcuZexVaLfNMjMtxG8WfEYEZPQyq4uttMADqDZEsMMvTW"
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
