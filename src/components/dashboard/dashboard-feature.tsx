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
    "2fvC3ZMaMgSLHTCA1pYcRQtX8JdqYhu5DpMVzMGv5X5B9Ck3VMt7qg1pJJxczaGBGWGN5ScLZKRRiVU6xmxsnvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FGppGtXBGv8TKVoDpPEXJV9gL2Ex5tJ8dDnPzWQdh6QgSYPtNneYc4z74bUhc16UJzBfS4diV5rjcwYHwb6mu2z",
  "key1": "GVa597NukhXsADshyKCsrDrAHKEaZwAg2k7mDizYjz5LW1w7nmhYS3jAZGkUq2B89jQexaXd6XZvCDeRCXDsCQ3",
  "key2": "qJSMFN8BCHHuSWomTkdxA4Mn4SCxjwHnjKQTaXEeDNj1hHMbRJ9MgGyvsWY6LVfRCe991iHdK3CDjVt55QsrpnW",
  "key3": "3GQY7R6yyUVxpP4EvjUUoZqFsehWR7AR2TV3XnHHP3Rz4CxN721wczoJKmQCFEsq5rKRubd6NbVc7hiprm4W13hA",
  "key4": "4KDRKKbdW2BRfoat6FxoMnk8qY8T9koQiqkKLrsaG2iphro6SduTdasKPNGcZtpg7ZnyurveMAhdXFgWLPuQ6XEi",
  "key5": "55KoK8vbgGag4XwU7GFDeGkE477rK1jumLBKa2Jntarxd7KNviBpcfnu8wDEvDfzuueDsJW284sTJVXa28gzeJJE",
  "key6": "4d5XeNSYA5Hv1SfET6Z34ppkEGDXf1NgLXz1gJ484yjFaiyat965md5xrPVjUnyk8ejqZYySX64MuZnRdJdYtoEP",
  "key7": "5yGXgNedtJgXU2c4ZjVmS7aD6W7DtZ2QGKiuEM3dAq7gLnx9QzCQsFjfm8pfSdXWUkaSgKx81rpdvoHAmuZjKXgF",
  "key8": "529CcrFxVvKXJQpmnR91o8nYqM9J6HpAwQoAjRNquenSBowRshJB973zJoFdafwsiyKgGDgPvwdjx8UJ9yA9fdDc",
  "key9": "3S5cKecrRVDiCvWBscAsFoY86FDYSct1knKpFS2jPrLPRoWgXyV4jQWY2rkVZToS4EA4i6YahsY1v5DMqYMEaVLA",
  "key10": "3ycYnJsjgWXFH5xfQzhxABcj8zhCYfkrMAtMRe2Pm2bskiByPR3NAUdj3aKoE499gX66MS2nUsNSt1jg2m47cY9E",
  "key11": "5ekoSvpEjPsexzP3n4S66Uqe5Um6GasXp2JguGRvgXaFZvyeqUXj77KY9VuFwEvEVxiQiP18PVRywX9o4eJySLNT",
  "key12": "41gjt6ppK5bnGjjUkLCTcVPiC135Tp2ABrdqNYZ59D2UH9qnXxgivaUXK52vry4VUJjz44z6tv7xup5ku1x8rgWT",
  "key13": "3v8oNZ4eHvz1emrJySs9U1wrUeE2RvoWGvErvrFFsV5E8tCbHyFq1vQsG6dZ6RnFcLS6sQnXhiSmrZToc31Mg3kS",
  "key14": "43pNVqZ3HHKtcX1G9MN3GNqat2yB1rm24d438p2hfgNS5SFswsUUy8kpc2qLX5VJkUSNBUGuiX7DfHtJx6Ryc6MM",
  "key15": "4M8kpWLZ4CjyiL7hEwy9VYjVszBWLoqXySfaZg4qgEU3dJqRVDZyS6ZKtgVC754i1Dtb5C7uZv9d3cUhJFXaAdPj",
  "key16": "2Bx8rxUpqtyyqKtoUTZrjgnxNf9r4gzzb6y3UEwRbPqg81dDDYk58NVjt8yViUQWhZnqB3VLb3p2BWGmr8DZu3kg",
  "key17": "4umxjfmubr8j7eyKhWa6rhM6mVwgt8ggVz5UCGkvkosf9L6WxaNUYzkMTXHoawoNdFmAFLB4hYgis1ZCz4QYsgoE",
  "key18": "4nCp6kfD9Yc2tKcystnbpDHBBSTfhvFze9XRcUWQQYidhX3BtzyccnTuowMBprc36ms4ALtxHtpM3vX4v9aGyGbe",
  "key19": "Rrcgajks5erYXyVBYQux6qEAQ79y9MrFv6upb1oNgKutPtGichHAFdnv3snNv1ThCE6NhakbCaeT9tT3TMsvUzX",
  "key20": "KqGoGXFHAJsdXrZTrLeSNHafA9jMDb8Y5P61Cszx7jNu8Kba9DvJ2Ry6tQBRcRy6AuhCzeAQBw87LyWiMMhtGY3",
  "key21": "4tnE5G9n5GcUVApzjkR7Cukku8EgMAmECDkCYfiRKbVLCKYVFXswREkGdveR4sVXjJe9XZQVabUcL8Jgj46TxyQw",
  "key22": "1VTQyEC112LxH6sbTNrXb22RerKoBPFgrY215J2i9MpS7ueRpQAvcUFBQZNesKpZyTyD5vQxAwz1oY2BUfU4aeS",
  "key23": "5EQr1PuYrqV5Hn2AauCjpcUvHsVGxiHkuobTrL8k1TcjwDUCPjWycErCJ8d5GQnsV5zq1AxGKj13HULSgaHYUFA1",
  "key24": "64PMSSM9Fhu8govN7HY2XUVbMp1tEEdQ2Hwx4EFzUErrxfr32Qqrhim6Cm2jqWwyNzXYsPWoPC3XKgFnSnBQtmTu",
  "key25": "4pcQrXnx8oAewFXRytk78wVt9Lmpcq5AKGgsgApTSwTyKLZnpwzDhjMf4QjZLPMyVx8BbqVaEwM2dJjcWnWNgBps",
  "key26": "554dC3c9bKFPzYboHyBzjBu5HHu5ukULhXhasC21qQ9XztdetgeQaCvFKWY4yqAACaHXUDoJW9b4n4tFes9BPgjz",
  "key27": "4BAvrkbJoVAkJxTQVUpehd5JbWPZQwJBPsvjE6kH6foKmfXz7SzEQL2M1Z8s72XifeS8q8uJ24QCQA4PGXfCWnMj",
  "key28": "37CAYQmyJt8XKYeX67gjRTqurPPL8RijVmvwYGei379cxnmMBki7qzBnSEa9yckbekNC1BN36Up75y3XiQBQ5eu6",
  "key29": "3ghMWTmYTzt6XXZMZwcSay6eA83rHSmFpZaERJ7GW1wZWZj5WqSEquZm8VBC2pDkGVhcQycLvKaBDRCT4HgLteZ4",
  "key30": "5nBpftjdZEsbzvviEigPXJNZH7VcxRCr4yqkaKUfSBUgUXejGxy931kNMMLrKVAvg39iefvVrNkbj2e42QGkTAAV",
  "key31": "4mtXFKUue1b22s4jpodQGBbkop6q7vNDiwgv3FVGp16Mu5rudyp5W9QLb9tBp6D29nfQMrfkfLv4tvpDcVdWMrpC",
  "key32": "3swFqMGAaptrgtQdCycssEtC5RDUfavyRCC2PcvB4uSjxvScmyYFVjApvjtneqa2dajVKXnngnJ3fWHxaQBKrf1Y",
  "key33": "2xyR3bS8MHSVn1WmKKTan2Qu76au61cmF33DELb5HMJ7Q2pwGqbaVzuQhfCZ7meTbMPXuRn86DJF82vSTFc7Ttem",
  "key34": "3hSagqtBDHMAyADVx4C6WfzJR6VJ5RE4NiQDyKHz8KmqXH3wvma23h59rqehbi563JgqVyZP5FACKiQa1pWZ25zR",
  "key35": "2Q9RzDzua87SX57bobBuCMvsRcxKCCzggbSu5jM7gp1nP3n2yEP9dmYorUfRuQu1ECi4d8gWvmEoxjKKF2BG9XC5",
  "key36": "41Mr9tfVt9ozhpuBzMnoe1JQZQDbhegJcL9QNmQJbX3H62TozJnk2fsjX1ZUpR1PKKGzKH7fxoNtsgMcEoqZecxp",
  "key37": "vcrwCSCNrR3eD2jvmA23PipfzfWPmh6MvLS6JbWXoTVxkMX3YbXC49oFsfhMq9rqPu3G6qJksh6Q2eNYeBv9N2m",
  "key38": "51v3BrGvaSD17Y8swoDiooeY1xJF1wWkXqqvPm1vw79kA8mJRTwjPtVTLMyuFin4btnHXwhMV7L62MCrEhXHWRSo",
  "key39": "3nANZWZLXsTzdHmfUbcaEJUQGZAQovdZ9YZb2X7GLsz5mcS8YmmU6Yp5a6b8oqd6x5PjhbauggpkADmbCQrHxQ2q",
  "key40": "23yEG22mU1dCjp4G5CKnTS7NMRAe7XwtPJxJv7sPc3sC4km5JjV476RDEAyCWNVgeymneKDEynYK7kcBRjbpNn1x",
  "key41": "4ovESH8DMKaPbM4P9wqSEKzwX1q2HJmSX52eshnpKVUYfxBU22WSqAt7qT5UjxZRjgfEExB4KH6kuCx3yWxZKphb"
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
