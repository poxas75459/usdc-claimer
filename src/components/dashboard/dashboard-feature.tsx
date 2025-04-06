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
    "64DyYkMnEPR6yh8zRrnWYhKaG9VNS7yr8STUJBEaBwEfHFP4suANSvtjyM4NSGFuo6rzXYQT4AEdmTAPyx47Rvbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "597jDJxLHbPojcb5VAp5rjTHnzPADLtLMNvWRyDGRwtfRNSAi1tbBdtzgqZ2FJo5chpiVZC1SXQD5p2PkAGmwHUf",
  "key1": "4tcCXNTGeyRb91Y5GeYa7k26HFYhpQYmV7HNaT2FRGw4YfXRxVWdDRWoXLKGjftfvhp9QFVoLkdx7MTCSn9r8iJi",
  "key2": "22HX3yLgy4VeEAphXDrUiebFUgdU6C2MVCGgqTgB99qCSDKNgJepxHxZZHwSR8cw1FUkTjBo29ST9wUhJBrNQ2yC",
  "key3": "4EjhrC88444atyu3NRw7WCi8wmJW56hwJKYxRSy4CuC4FzboLNcoa95iXtV8zVfVKSAFLuzqEMHmzxEjkGLUifEt",
  "key4": "63siqyGfsg4SAN4b2yNEAsdcr2UoZvbFGF36j2sHJbZ81b8Fk8ooiraZBCN3dq1TTEAQeht7b5xNQrvgJzVH3xbT",
  "key5": "5NuyXnGwwGfxn6tdimJVGGhcZWbjEn3uhnyeRTGGYLZ4TtkEeRuER9zj5SeTybDshz7F6icczCTAX5f4HkZchFEW",
  "key6": "3o6gDr4nCKBCAD4gd3CJA1ipgToEJktvZbx8fz1VPeCJNWT8BRfPKALbjURMi368GePTB2u7M43azfa23YjVW9E",
  "key7": "54UUS8X6RHNsGvr9CTkmwxXixat6VPtrDho1U74QLMB129Pb86yNHsDkKajsy8bTKWyi1L8CQqF3HzVurDHHg3MM",
  "key8": "3inGjqXKj6EV84LogFcAwFWRixy5QQuqfDnr4g8yTibka8W5RgZpmKbQVkQ8P5pQoRpMSerpyw6phb9QEB1uhF58",
  "key9": "4JfT9qGWrR7xnb2E7DRzVGmpUTEP5DPV5UAcJ8yrQzY4t5Sqtvt46SPFofY4zr3Ng4Hv2ZX1urjXWCQPZ9cdTYf2",
  "key10": "3EX23fenNDSRYgRyo7yyZVhip9JoY6fvyzB64W3NoyxikugA4nB5VRWxTVf2avnoq87dyzYe8kRvE1CHygMerjTx",
  "key11": "5fzrmW1mKxNcSyLyQjVZHVAuc1SSdw5oqDjMjeUveb6nNWSVRtESysiSCU8xjf8aCJgXDZgqBg2oitRbRYyrxGYy",
  "key12": "2ZjvhEWH1aqtBV8jMZmKTvyBwrhfJtQiPa39FZMh5we92GiVYNuQvwWQM4BaRu32JNqKuLAfz9xXH3ZZMPvT7WRg",
  "key13": "4kubLxDAZoYErRmbynR46wzMZX4nSVexvLAT9bqefbdswEJbwpggoacTk2DZm1ckWbcrQQtbz8T856T8HWTLpTKy",
  "key14": "bY1SKm4chqnCG4PdWTZdoAeURJZ9LHENP58CwYoQpxRtf7zWJJM1N9qjReBfGtpe42nksFyUuao2aVyaQD2UkaY",
  "key15": "3jZEUKRPNM3A33YW6rfJqsf4PPj3AVdTeZ5tPxkg9b5fiThMmUeqUVw5LXGUwznQ9H5LyHvRmVp4ZW72V4wJ8k62",
  "key16": "baptJAMuMhmh1qoJQj83622QEBVtNCvU1Ybjoy1UhZzP9HHqG5CGACcUd75MVo5AjcyKUSn71b3ueR8y9m8XrrS",
  "key17": "MFvm3aDJq5bcuvCJmH9KuqCjrCTk8w3ZauLeLbLFPCoNi4fTEtbLy5UFS2eNqdEWuVjRhZx5j2Z9zxpNr7GSy6a",
  "key18": "jfptvvX4xxFEznudgJwfT8VrE82NcYn4bqvJ3f92sZrCNVBztjRCSsNPbjVBXkx1mPjhmGMkdAMKmUDf6389k1r",
  "key19": "4aiqcH29T4HXdpZ3askCbzMtbTfYDf8CA5x9WgnC1RdT7ZjUArQT9gtYVVBBAnQcjDBRmsqHwUAiakfPkqB7jshx",
  "key20": "5mf7HJY5YxjxywHkCjWyumoCwKRPZSecMkgGiU5Zoup6LXczGW4vwq3Q54KyRv2mUao2UUCg7TJ9BRfiGtNA93tx",
  "key21": "5n1v8QZhQP3yYuRYiAp55yTtCimUh56juA5gTbBHsn1E1WbH4EZ3sAqVU4nLPovJE1cUo7j6k4WV9UXDBBrdhFAR",
  "key22": "ZFu9T8EJcC5rca9W7oT9Jm9JMm3Ywss5Yfq6pp53TknJY9KtzFf1y1bT41UjM3o48D5dyzP3wPAarPABNYopgLW",
  "key23": "4Mk13c5umoGLEd1xSmvAKF8Zh2oNejtcx34Qg4WkK9a5jGT7eESsJ4pedRtK37LcYg3WtjPK9g3AoJg162QPsu6y",
  "key24": "2kPqdEAzU9akByLr5ST14ifhB1HFM1iRhNQKoQsu5m94SDEGcpijoyqfkGcH3DN2v3zA3uffwTy12E6nrDGjfP6P",
  "key25": "34ZDi5W9mN5UGDLEP15yGiZKzFWEftWioKPwoa15QZdoDKDsWyNfsqCVF2ypV2uQRU6xtWkvnW485bSKtynvTHLv",
  "key26": "2vTmYo7RDRD1DvobuXKAVBkz2AKd5sKhWxHCwhvTQRoz5S2DXrTpFZYGQdiGvS7mhE4jnnxmZpDZtE93ZoutfVdR",
  "key27": "4NQuDYWEptZ3QTRh9jad6jskgnNMLjYLAPAofZJubpgtSUjoE4erSTRBmuDcSxkHFRsjawxZVkeLQjnxz5xhcfS8",
  "key28": "1a7eF5DwVAbXbhwjh48ApKoAmYzNK7M88MXqtdb6SCUjNgBrfgrMtmEp1PgTzcRnRPUpV5RZYuASp1f4jCiXxD2",
  "key29": "26zEEpHni13ojhCDrrNxnEX85UjmnH84VTWeAud7Ti1Sy12rnmdA8WwaDXCXUZKfx8HLABaFkYFqcFojMBz2wXeh",
  "key30": "uKbtrjGHjAGoVPaxwWDRdu4euwxz3Ne7sYakoeBLinr6WZ3wZK7mipobKsNNWp95akULZqECFSMSvRpTwcCu5dJ",
  "key31": "3N3X39uQ8qdnJa3FFcxYx4YiS4t5SojoVTHAfwZhtExvAEJXVfBj4zM9dUFmijfGz4t94BCKNJUJfwRTu4CWeXZb",
  "key32": "XTkLyYJMkF1neVsCSPjQMReb9UFe3ZickVzZ7qZHUTPRcxYJ824ZA51VaA7Z12fTpxbP1ka16STkQsC9VCRAHsK",
  "key33": "2gaK5ZzgyYmDa3VKaj2hDW2RXJar7fMam7WLtapfvKVt2JynAW9nJRCFJSUkWY8RmB9uFWgEtgsMRPo4H2x6bXXw",
  "key34": "22jRoTftJU5vYyJvrNGMvAFqRVsRLRyqZqsUHapS6VrcEGcPZhniybaSbVvy74XCPUU1SwQrsVB2tEdzwiG3pe6G"
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
