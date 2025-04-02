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
    "52JxTvbEjnNRjWNsoE7cr9x2UDWpEyG4YkFrhpcGEfMdw2hU7LXjEGCRjrtsgmAhnRuoXxB8R2BP64ZiKUvL5j5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cYNtWQqZ47AzmCtnK4pJ3VQnhc4g4qqCs63dx9qUCvqfHohsjrJBMtcUxmqRW86jy5xLdsc1DAVANfenaqfS6CX",
  "key1": "33vSvajBe51m6GdmsfENUSYQTV5YERvmGc5DNtNeRL4WWbHPmDEqnLP12edxa5yqkNpe2B3W2k72ZhMTGRtzk9Am",
  "key2": "BhUW6EvdFFsrRJLusuHhdY1P1c8AdrG9qyBNAcZ3WTm7Rkx3znk3ZuNj2SXb52q8zT1Mb2qdtQJFCoFPrH5fqZG",
  "key3": "1241tU4keugHv2UgYinuCo6zHCrQzqXi6TgWAs6cb7wLyuBHe7Wh4iL9RyKdTyPDNs8zx5tbUwCFh8SD11GUMDmc",
  "key4": "MAhBSqHjpgC6cknFf3nhhwgX3kTzS5FNkxAZQc7Wv11zxxrswe4isLtrAJE1nUWJH1iT17aL2c3vSjjoEao4cxU",
  "key5": "2WiuVDrrG1UEyp4sqeRgJpM377r8zrBhnncQPWxQBadmZxyT7qrX2jyzNX9Ry8ZNhJh2ZBVpoa76dvm9eg8ZW7tf",
  "key6": "4LLQekL7xkNRzjZfSVuvKiEVtRWF61N6AdN28r4eaVTxzsUXqtF5NJ7SWZRWZ1itWGVgoTenhb6MSvVULvg4gjb7",
  "key7": "4qEoHJmTrXtAZiQuJXCV9mqXaiB3jeBHbZ6ecdh86dUqP6wxF88t6i5twrEtHRdJ8JABfS7ELK92y7PV1tFEruXj",
  "key8": "4Gtc6y3ipfsLsftZLjhYM34BjCnbzVjNgUZXdBM5xqGUybxgRXKFaqcvwsWwEHSBEnWM3Qmxzb31nyF5BQrU1JQ3",
  "key9": "4ySttyPQmhrNwmPzsVo8d7N9CK3wKNRRN9J54Sscg1ozP5pFFwp32BPeK2krQs788E27od4quYRDoxybkcnRhQrj",
  "key10": "25QUYwviWRq1mAex3Ws3WvgnMJDmg58eZMPLs66a5B7G6mGTuiCrMjtbYYobqYmgTd5PsdW4ZRFJN2v8ZbEoXw5i",
  "key11": "3tmyx9PBkaKbmBZhbXkaW3uWZVk9CxeaJeXY4dm9tKv7Lxeb7KGG8LEeRtHchL8m4LNJbbzkoWSRNrvjVY9P2ti8",
  "key12": "2fcHEcxF2awU5CXTefLjAGkVz3ZKKAMTr3Y8dY6xhJuwLV3wMLQSJ7pW1QB5gAXtiS9NAt487eR3MwgfAtgYznkM",
  "key13": "NsFH9bVk1L9hwgMc3MgBrWZQSwF8SqNdP7eaf55zx3sJskh1NCKEQuZSNQUx534NShSawrLaAHHPWF4mXq5WpQk",
  "key14": "3emAznZ44J32w2kNM3ZH4WcrXvwB7gk2Siy2oL3SA3MnagFLVpgZWcKYMqgpcmit3yWejYU6AJPbND9nmAx6KF1F",
  "key15": "4C1kieoxNZ2C49kUDiqXUYHibQELPNRDhxVCyb19nMHrvJxKsRWJTeC4cGGVAToMHC3KYYsqxffx9pzvsyfU2EbJ",
  "key16": "3uTrnrX7d2rSWBS27zAjFb2zzrZudjbqqg3g8JoEKAqHYa8kXcp7uEKQN4wgjyBnKqhj2HFE88JGLjcv5DZaxU26",
  "key17": "4DDCznw7itufeEzCp6qugE63phh9qoLudebmfDA1Yfq419dycuDa6Qxdnuvtj9TNtEbMCFyaTGAPG2GtsxCccWQz",
  "key18": "4Rp8EQaj8aEV4QJq8KBZKD2aYxswGJRDUU2WFfmJQ8oVdpyAnQRRLtxD3km2R34jix72RCg5mEZkQ6h3KBuNTJt9",
  "key19": "65xtXYSMWBwGtRAYfiEhsCoUQoMYgFvgFNBjB9m55ExisXTUzfCRDjUa4ACShnT17i5UfpGDGpXLNuhy9hRGpHPC",
  "key20": "4gXcYY4vnJN5kuGdVCxEKKyCjCpRfnoAR9SHAWsBTUKNsbkMGa1K8sU3Vo34vRaYTaJaozKhLqBA4VWfniqVaMGh",
  "key21": "2xVGSU12AVSbL5FN9B6iiNurm2YxLNVd77JNMu56svSvn4W1nXv1zcW5FqVTqZW2tWnYXRZvepgghcw2bWMZGjEA",
  "key22": "4DRwk84cg4yqMyruZaf4mF3CMiud5VRbSropeH2LqdAFLRVSHt1iqLgk5wTpEtd9iHZHcgYz9svZsFmAdua1draY",
  "key23": "3usaTVvtxqTjLMG1oUiUYhw3PZQKPsAWbCxpY8zSFyi33MJRjuJ2AxxJkZXp6wDrr34bW8bKQJ23AArVx8y5yMk7",
  "key24": "4JASj3P7pKAk2UdYPYRtqZv6iPvTMUhjDTbGVk9qxTkJULjjN32cVXwr5hsSmyL5wbugsgVxbW38fxUYKjt4pWGc",
  "key25": "3H9RtmHkAjWnbD5BZCUwxmwdd2X1UPfohL3q9arUhWy4HwLaHAEVTkaZiPrM8UHkuC6nJ7TejGho7AuJ6QY4dRWd",
  "key26": "58656C3J8jrNxdgRtsTAYugDj9te45fcFv4stsPxxDNGbTmi9jen22pcZXsRUenfpG3aSPMEo8b8Px3GuLSUruVk",
  "key27": "DVTjViR3RhKhJvZ5cS6bq4GhriPm7d5wUtvrqpKxoZE5BqgiNJZ6GDL6zPpBgiXA26Pt7q7qzvmQRMqbGWjQoxW",
  "key28": "2fGJQyJTKWXLCAzQwjQS6TbqXWnj8JiEhs5P46tFgxJC2qxNLpUv8j2HL2mETwDqktX7dsAHaogdxj8nt9k53cL",
  "key29": "5ffvcv3dBeLxL5SAhSYwDL5mm3Njm7gF1FharDdHe8pHqbKo2thaCe31e69Qh5rsPk2wrhMGjNEScfdbY3mmMdTb",
  "key30": "5mmacPWA3vHEbkKn6KMN9bH5kHZubVDiYeVxyEGyH2F1NuxVhNU9U44UXBeT2w82ZURXdjHSrzLzGqyhEjkQme3q",
  "key31": "XHQy7XPwkuAW544qb4gTSdmhLSBqZRbCc3YPceMZWA4VRRzNw5JYNRzQ2BKkb11WJeaAaD2G3romRcnaEzucngr",
  "key32": "5CXCi8pj3YzoAAB7gsQbmevqEQete46c5oJpaJ1KTB5WXwahvkJukXqNsYwvdqdXrTt8i5nTa3ae5RJWy6SBjTQc",
  "key33": "4QuYExEcmQh1dBiA36yPm18WekLcgFN76sonjsxGLY9Z5muxQNUMEBNe4peczyqFWkAfJaizDKyfBkJBoLZBsydP",
  "key34": "2GYEtRYWHYFUSSUZgXgeJxnP3oSNvNL7PXijgBYnepegk4y1EiAwgvWwabGgH7RR4V7NUh23deCV425XMTnCtPKm",
  "key35": "5i6EG3CCPKtxjsbHQ4RjcBJHshHSkte1ZiVDy14gAwEQZkUjtHizZ3Y68PK7t4TpqVyMin2rVxn2evMxnZ4Kp39E",
  "key36": "3qNpYmF6CW1Profxw1gUcjCk2eSTH9rdZYRsSiuQavVho9y8AfjrKAVJFTC2H8GzmUDSdhMmqoELUP5VGCphsdoZ",
  "key37": "3gzD167JDPmKyo5vRpSnUjcC1eW8JbjriY4m521wG6g6cW3m7YGPiEnANX8QDC5NurSLfpwsqgvrZuPvPdG2QiHT",
  "key38": "SXkDR2sk3G5npNEeY1gaHr6YB5CMwVWGcQboztzBwGsQzgFp7BU7HYb84yKkF5hy1ZuSgpWjvz7LcWXHGKqLkqe",
  "key39": "52oj4g8K3cSbaJiNia7PNdPACEMNyCdAprYCBUZFhCGmYxHVKgdG8x585x9XG711UrMew3yaTD4imH4fD7oNtXWc",
  "key40": "RvmWbmxGRfae3tLp12tDgjXTqHgY9pB5jRwQi5mJHDEwtrBi9JmrfJKQsGHNzZg3LbYoFm1sDX3CKNcEP5c9bze",
  "key41": "322JUGTbVCi9E3UVpw2aPkbBq7GgYN5WqCsK5ERDjRs9t5tvSuUE1wWKLfJ8wHBtnMrVmdYjWScunBNPsQNbS79M",
  "key42": "5Rsy7L73BBzJJHVQT8hbSwfZmy6wNWnd6B4yHdcTHiZcfwTvh83JCLd4R6czGG81Yff5FCrCbVVfg9kjmNf9EMSf",
  "key43": "4EPKXVidMgefqQyymToqkmoA6D2Sh4EbDEjXVK26AQ45uG4nDLUZ4G2KE7FKDErdv3tDFyDw59mozsGcdGZj3JB8",
  "key44": "4pjNNJHiQSPBpxd3Tfea7WPXcZqcP4TCoSJx6hfLCzq7orBsVmA8E3NFmAGri5TamqamNZ3531CTwKhDrZxM2Yfi"
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
