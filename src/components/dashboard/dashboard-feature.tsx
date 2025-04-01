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
    "bkyFvtoXwviYd7pi2bQjwpxz8nZsVTqiKDrctn1LmxddRRxaCpuhHYUX18dBVFWriZs8gBDAgLNoixBmuA6z5Nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31rZEMAeiqRyf4gx7Jxow1QBfYFcpPXG77rAdxdRV89mZddG34KKJ8qjLGsAXwyZVRfQK8ExyhqzXVRKcdcMqrkm",
  "key1": "2AVG8R4xuAbaCKqqBsVnyiHqWaWkzPotaRwPTyVtedNJhdraEoxekYz89WWWfAABGvQ4CfU9vHnhp76uMe4YEnMd",
  "key2": "2VNsPBp1aWDa8FUMbQ6wquiA2XQdWUMgSGZiP9mAPp4Bpzye9qMDNRy1cJRWVGRyuHPyHSymGzVJ9CffsqBzkad7",
  "key3": "3HmLZazcUQ7qLZAANCHsdpPMT1D7nmDZXbJZzzvcSa7LNNpG3KjLQG7yuqR74n7LSvPrXeELux3P1mKe5pUFGKiz",
  "key4": "2jegSKNCdaViJaieynZqVBUw9VYEJUaDgAfdEFkDCgqDi2tSwGjxwZUGi3gyPtHyUwtcmCpdWLQ5NyqqoP2wD7Sx",
  "key5": "5DVGZof6vnjdJrhy1hNz1SxAvwXoRPDR1Fud9EioPCh2gF6zBVQEf578YykL6FBZHgP2PcHBjXJXoTuBZpecU7Zz",
  "key6": "5ocnfakmvmW9Bp8K3C6Wb8cGSyc2ZHXxgxxpNMxaaxN7PkQ5cmQ8ghhUjQJZm4muvggxs1uVZZSRyHJmGRnBLSkb",
  "key7": "2kwQfL9RpnvwD3bWq6SPrFrXQ2uJXWB11JzSBWu9dEp1ezvPdc9qTthhZsSGYkhjcVw86EeGhGRBvimCZgYrMAPj",
  "key8": "2q44QR47xUhnSosUxrFqcNfJNN8CkDN1EXfrDnPFwUgfxL6fbrQMhQCK4WZRnrw7gZKE3vNU9xLGennrToin4t2U",
  "key9": "4bthshNA43DNCjAUSZHxFsj5KbJE8dpV5mpBRHxbLjidwche16mQPSpH4fWW3UavbDVEbVViiYAvzGLJWCf5sow7",
  "key10": "5XpDiZjtJHcyvHMXPvva1sm4Fu2g9oZiiX19Qu7w42QddYPApTUY7cPBQyWU98vCu7FjmDwExuWyRL7PuBCkYZhF",
  "key11": "rkyN7R7fXEyv2GrauAQ4WnL33xnvdwqtVZwsmAcfAQgGsAfFaaDMLB7FRTveKYPYf19EqbEMjuzwMcdpbh41JCX",
  "key12": "qHd3QDJdZFyMZZjSZ7aec8ejDn5mFiUbHTux62EaAjwG5wnBbyVQnaWicdYyxcMYW8LnRtXsnU6Ba4MAPSvh1Wo",
  "key13": "4TbYtTgzr7GLfzbCu7DQuTMigbjuT41w9im3Mtzs3gq7JR3tYdaDp1Sa8nDLfNSNhzfZVfjZf6UYsrWzAVn14SNT",
  "key14": "2b8QrHCW2CiF6C9dgVpE7yDaNyVNgwqaW26Zzu4Sfq8z2Mjt4gvY1ohzWm8iXytb46RmVzaYQycHosAHKNj7DnAa",
  "key15": "5uk87TABBVa5PMiLWAPcFJr4YkQB3VZVy5GyhYsnrQaJgHYabXTAfWKz71K12jPnq3UhYYXM1AJqJakEv7YULrAq",
  "key16": "3MborVs5ptk8pVJYzKCggJL65bgqyDMV7XL1fWT2YBGapeHJqbYxMWGSynPyGfWTwSW9bHyp2wW1ux93DP7C1FsK",
  "key17": "4ua3ntFswyPofJ19hVaCyyU1ZtfGJZLAr2hW7zhR34suDDwetCNTUgr3QvgqokWfD64kseovvv4ESLv6QTNDYn5q",
  "key18": "3qRFJdY4sV9S4YggiuH5xhztQ9K4zykPC7mdbm6QRCrf2PrZNTPpEYDnJgq8EbhaHUj1UbmhsTTVwUNKctxsrRFj",
  "key19": "3Bk161DSLS7cQELEWBL9KeMhCDbM6jbqsNvAdQbapr76knTsVFMtC1yzCjpmb7w2dndSQRnukeHgPBQ77VmA7Rjq",
  "key20": "3PHXDgVNGKhSN928WqGK38Z7nGjRU1FGai3jQKPiE27UZWSmryJF4LbQ81WjuQmhFWJuC6TmVX1N6N5iKjFHwBrF",
  "key21": "35Fkpmfsszz3yLauafUTaPXV4UXKwBPuG9hw4Wj1BWkgNiQzdFVKVJHtbAddf4RJQw8YcR5XYAcU86hbtFHDUVnL",
  "key22": "2ref2sb2srNNzXM7LD4kxt36AiyrhxJMo1G4xHXojVKV4BiYVXwR46AXaoVkkRUyAs4j6QCbk9q1vbcxvFqi2QSQ",
  "key23": "2q1xDa2vLZCdeEpYRtHG7Ht9ar5QnP1SUsjJf6HaNrWM13Fnw7Wd7vtsyVHkddogGzMXFa6RW18Djs1A3EYFmBYg",
  "key24": "r7JfjkXi2hLVZc2JqBfHmVk5ZYi5p2MpGr81EPYSeV4nWLMtCvNVjKv8QwCnnQqZYjKHsdWs1X99ihHEE5XrTUi",
  "key25": "465rGS9P8vEBu8wF1kdLduGiuKS5awDDC6PKqE1eyspuVs1EHmVmP4sciTP3sv4zM7j3oq1veSfpkArJ8cS4oBmd",
  "key26": "4Jyqh5mwsNurixGrkmFpTGcN7GybD7bmeGaKaZ2uzrHcC41Yv2NsNkrzLBvRJ6VD2jxRLvvpAMcKuvVrWDYgRT3p",
  "key27": "3W3scFU91YZ8FB4q7zpenmqKBPmRewSJzwc1TQayvqzcg2KQXgsJCXdzJADa8Q9SjcnVsMShRkh3NyrJtmE7p7Mw",
  "key28": "3oQT2pyQCojjgZU7upFSjbFTuGa8GmBKeFPTfwPYiByZjxmdgRhDfU9VphpMKbrjmrCBcbVmAMjFqn2GU1zqpiea",
  "key29": "3Cc3N9i6nD5rLkt2SEvcAt9QrFXgsyxvAwPqv1t1GRfNxhzELbNFp2Znfuq9FT93KjKkFpkRZ5ML4iy9dzWdBVpm",
  "key30": "5LQot9WWYKemGe3nNAhqHnmzZxZ2rid16juB9uTL24wTFi3Hw9uVx7mNXxCDhzfEKSREAp3NRMkMJ7iiLjJBszxa",
  "key31": "4e43kGNSTUsguV6xgjTEeRfJHzYosdwgXEtkUxR5L9Hp2eqEMqLqZEQz8qcY8gGSvoj79AhsVQR4uphhFY1xEGDK",
  "key32": "519nTyomNhL6qcPdsfdZJ5CGJakd3rhXPv4bxWGoESV1quRFodcegbsQzBmhcnticSHwa6MYLw5YbTa38KRYGBbR",
  "key33": "3N8btQpsi9XgBX92akTmNwD8SVhhEuxCSsYZFEW4EooDCY82EJ42sQz8csjt2tCRGmNYssTcCRCde5BihAKySTaV",
  "key34": "6V6SHEWVUp2BHuNwPxYXuoqVS4upTTGNxeH5pA9pQKvbyDfioRYeijLubebH2SBwTtzctmu97QLYxgW6RagGqE3",
  "key35": "55Ep544Pxmb1nrc8sgv3nbc7Xeq1ARhBx5WnGiRjg2QuqRfi2GdK4YRMbDmyyWxbhAuhudpDLowaP4X6rhHwGdhq",
  "key36": "3waX7cMWRK5jWyuQUTTLqacD5q3Ep3gSuKkkBgSnayiWfQjvgfkh63v1cbQWT2CFVpEfT8bDT9y6WbguLBKYp6Uv",
  "key37": "tVjENNbTvZCmrEEWQMubchs9HFEemEH6HG692xPLVo2RigoG7g8tEicA3WoBeFnok6BKZPLtJ515kAKTTNBvsWM",
  "key38": "4mxgH4FvC9Wk3PJhrpj73NKxnrD1hYLEVwpG4cDj8oeXFNBVTbWqf1z4GvAEcG7ebBgM3MneZVFxNMRxg5U32LXk",
  "key39": "Qr5EXqSQQeAKd86fyUTGA9aFc5KJ3ozeWG5GCMHucwzJhr3kTkCC4SDN9baiUjyGh5JPbVbVbprRFkKxGxLWrks",
  "key40": "4aBaWWSmLufzURs8MmXDPVHzRo1fGZBQcfJJ1s5G9n8JgPFVZgb82T7dmAuGPnjokKCPosaLvtY2zSFytmZT5pD3",
  "key41": "2N2V4XD8MTyTbSYeZUiDo5gFWgjZEmAW83tPYr83REzUF6Ykswhz7DEZqwx7VmTejmhu7xKXmZEyguGBdtEKHGYm",
  "key42": "5pMGd2yQ1J9ur4XjRWcArfbTXg59xYiW5s1j5miA4A1FBxPLDxhgk1VmPkwz9RstQXrxzMSEeRPfubqmNVoCrdqN",
  "key43": "iZu3VSSTXERwxX4kjmhhQ7jmq7FiJ5r5qRz9NknuC7pJjird3ff1CRVAFm5T8EXrMkcLkHXs1qcBqDn1HrSXCzf",
  "key44": "4PpusVd8eVbfQGg3yiM3CTLVrt6cJmf4gw8X1TzkosfRNW87cs8CUteJNkrgdFcFAH6NcfTUP3mdLtjMAxeAaWy7",
  "key45": "CXxqcbUR5ocjb7d2MFv65jPRPHxQZ2mFXW3t9Th3cdEbrjTLjw2DPnQmFCKPC3HnfHJdicoKC5rWmFWuBmfFuTL",
  "key46": "63PSAaNiyzP4SKWQiC3ia7scyNU4Qx6xZqZMdww7g67TVa6DynTChAiYdSJgzPczgMWJtSjRDhsSLBgQsez23bjc"
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
