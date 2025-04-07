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
    "34jFsMHcR6YgMuQvoM6CSqRoipX7b2bgnDxVVDQ5jYMErV7UyzSAd8ZR1K3QttMqiN8Fc6VkBx3uwbE1pwEaC8GM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dFVji1arfqAXoFf6NwvKdUdzfd84MPMU7Y66s9m28ePPjLKEwyN5DJZ2RVWbHbRFLbTLfxg8E1qdku2WP9aateq",
  "key1": "tyDjrSZb1Rwc2mhzgtgVjWMopLT5WBnV2HNYVpdAxFvrbBJthzrrTHicBFo568QcR4GzyD57aTMYNjSThXABPct",
  "key2": "2oxYUCxc9aStnudutXChUdP4SkUjgkwni6EpXdrBzGZKWyZkeCfZY9fiKDdnDkYnFgoNVcmYsS7KKwgCQN7t5Dt2",
  "key3": "2woNJsVwLNHhnvGwS7cYVW3pdnT7DZS1cibgDQLVknuaFQRjd5n99Vnm6yQVqkKvdnvcvLuVs6X6kxrPBwcJdjDu",
  "key4": "4yydQKZEjjNcwXFkwuGL9p8sK9XQTTp9phm9mPfFL25Bz4JtHRRw9ibm6EkfPFVjqWS1MeHUGnxnF2JV77NTqnPb",
  "key5": "2rBHF62tLkrmQRyYWQNaEX9CFkAQZBwfbtPhhFi3oWF4UVRiWEnsfMbj5t5wZ7tZH7GXAAft4bzkzGRjuWsunvn1",
  "key6": "k7oxYnve9P2sKFtG7YWzNRWakjPwh6GnhWGio7XrCsbdeMHL4m82VjcCXioqYHSGxYjLzABpR6Adodav4AHhe2o",
  "key7": "4SXyaErsZqgwhwuvKPPAEhxjvbpLSv2YkjEGg8GFa2ZhVSvJdTzv9aio3sn6A8Ao9jRyXu4oTCsYsK7AoWvacw5f",
  "key8": "9Z56nYTaK6VZVbwvQFP2oZBnJGGBreH58mezeyrnbz67NPDGchxnA7QCt23QZTB7nKAbPMa1Ge6TpC5jhWHqtE5",
  "key9": "5Nn8THK968z4hZeEygFJNw4V3WafAWgj9Adspor9jxxv3uRmdpBs3E6nVUcjE46FW3FyiaLUJN9qKLhsGVoyz4y3",
  "key10": "4SdvVhXadcdAjbGWFXURP8UReWU1gio5ugobGZxwJwLHhtrQCMuGHbvfUg2mXDuX5HifYUGEig41o17o9mc47hJR",
  "key11": "YhAUxUiA5hho5LH6keb1MAK5sngFuKLTXZ3nDuzLJw2aXRQ8NDYJYEUfQoe6xTYGbQe7PwtYzNZ2zqYPWrgEpQA",
  "key12": "3eN8cwCDmzWrfhGjABUiTgPtNrCQQ3kJhFK4MVBAt3u5bqtQD8dPmsQ6m9jmHx7YYjUr7EqKSqx5DXigUUCUbs4K",
  "key13": "5CavRLKxET83Pb7LNw6gTPX4DvoTpyXkpMRn8Wib5t5MgV68YSHV6SwscJvfnZMiQqAFDPAZtHoX7YZju9DjrV89",
  "key14": "59THm2nZxc3nfxnk5Fdd5tnE8LKd5wd94tJ3tHD6WhxacgfC62nkrKQ7MYckR9BrZFw8551Hz1uS5cKNre7Ka2nS",
  "key15": "WeTELvfLoQrVEZADmaEfTdwkNVNqVdgJtnUPCmw2VCDspjXcirykTqwLN9NvUxpJkLczKdSeaGA9KXLVCjZXAY1",
  "key16": "4YWNAXiDRTymT1qjSUjtEqdHY7qKfScuvxprYsnwJdpzMPg4n4godqSMRgvMdRdfV1u6CucWFaYjSHvmLMZGzXq7",
  "key17": "9LDooiXFCSw585k8NV16fD7PGLu8YXJX1r4mKLqWekKd5jwtdwYsYA5N8kQ2X2MfiL2RmEn7ABEFX4cTxFbQYkc",
  "key18": "4Ky1WnsrBLV4VA6R2PQ6gKzeuErhhaUz5mnJjWNpv23g3ke2PP5RmfyM7nR8FKWzFVdMrshWtim8ZCUA132nF8hJ",
  "key19": "56ABKisTZtuUPgiVCJtTazUyDp15tTkFQ7ss3EuoHYNHLL9oKjoXTkKnPK8xQ4XMTR31n6bX5SwGz9dydBkKmrwR",
  "key20": "5cuMQT1H441Zmm4VpQotdo2rNkUKXh349QCFJ5wPzm7n4j9MkGPn5j5X2NqfSoSMaMSKfeytjgQRzcEj5CmPmqQk",
  "key21": "55vXU9QynXqiJkaQzqHj4xqcMrRsStGzWAU3ZaqoM2ZEVTTzzP5rJ8257H5Tbx2MagkV8nQD7zX4Szf96MeAyQs4",
  "key22": "5ryRqMC9MxMoVSzwyh71dwrcK1Nh3SQ6pdGb6U7fvdLz7RBaKXU8qFkFJvi627y8fPxxmjweCEAmP1EgoQZuvLin",
  "key23": "3EKSB3df3a5aRSJqMsKCLnyv4L76tYJsYbj5ksKL1wXQsoi3grgAJWvPY2AGdHLM8wjUa5UfiS5rC2EHw9jEbpSD",
  "key24": "5kshTQUz64CrrqEzxMUWmYThyViou2HxxMwDJ9MPsYLJRE4dq45PWPXawQNzZvq6oWzq5cf5mKzXckuzj2CjqmHY",
  "key25": "44RfEBXLgSGLiAnKs2tQAiV3ABhaH2sCBBEASZkj41tMShVFJQfEGZF622ApY1ckXgZQG7A2HVem1Gy1YRQiCDzL",
  "key26": "5KvcJsBYNHDoB53vqt8bHSCBFfVujfv3DcU5GqoVvDTQEnKnF1qNZi7YmVnpqbj6NrQsovAEh1Fjf49HYtv8eC1N",
  "key27": "322mLYRshf5F6R4fTPtickEmb4sxKQCrAaWjbXvScfHxJwvaxKJCGF7L9raKAKtrHr7Uh6fLjYTWHhsrRRHVCAA9",
  "key28": "4ARUuoBG5DhkomGmFRWzcGp4QTjqcyraEznweYCD3cAjHxqXNpNc3jQbq2cYjArNj9aQaaLtHMRRiDruoFspgC58",
  "key29": "2HmRUsH1rSnGFXqWND3tfGRnUQe5V6VZJQeJdAh9W2WtzMGmZjJ7a5PYC92UnRbJn8ykAacmZUQ4Q7csCkdvavhX",
  "key30": "3Pce1XmUy9SGYDNqjRxXF786QpS6kFCZeY7bnBjkG5hX1RFWhYw3hRyiWZutviMcdRhTM1YgTvJ8qnusGqNvkC8L",
  "key31": "5rkG2a3CJHTi6pnU85ba5ZN9EaewBMkYT5Vimbs98GLXMeE8qtyxhZWaU2Li2B9kHS62PcepT3xTm5RXbMTTMMno",
  "key32": "2t4GC4Nf4uMtm9aTGhgdrzUNNS2CtSCQPLZ2UX9ygHEXu44QcnjLeZrfGfk4YsUkdRieLxSPFzs1223N4uP67X9h",
  "key33": "3ksExCa4kVb9mMuMQhPE8n87tocXK52B3Ysb49KgaCcnkjrSTtxjQjqutMLfYFkcEi6bu6HfGBxN4VPbNATpvUuz",
  "key34": "5hGu8SKwZygnGUDV3TVTBCm1BsFAwPV1vygs2BBNPE9R4N7SMxeBkSzLioUcoi3ehv6MxNQz62LxXitQx3h9zq5",
  "key35": "2t9AxwHDv61bn898bZh1iGwwJUSnvm3j3nZQmC5CDkUSunDv9fVsSqBYCjHhPFymyM151d7vRHyKZwG21953vPke",
  "key36": "29BT3Bv6ze5rBfBuSoWRf3UWKM5eiBkdFeXjfkiEpN9Nq5AhQtweXPeavK7BFbCzzBUS2AAH22Y5dyTQ1xBdUQ88",
  "key37": "4tdhrgSWvTpfvDL3BA1a1kbc8xBKNjZeZFZA6xGXn3uimUqdmKTzmxm1XJJRe3ayPLNWsF3NSkmeQnRMLGX7uvMa",
  "key38": "4Rr37CbMXgsNThKi2yTQNpJcWAkw4mBRdzRPEski7AvQL2BGba7QHby5nShkt1wgLHBzxv8JyMjsn9yuroEeYD5K",
  "key39": "oiNMPYyUFG5qpDy9oWxYoSboWs5SYfEWWnituLBzDTVaoUEHUBGbqVXBY9aPVdyc3g4dV4dBuGKV2egZPyoJC1G",
  "key40": "5K26rDsrgwiGpvCQBf3qJScP9wz9a6wq9P3WBqEuDGz8jXVfeHp8xjnuG5qRyVeuH8BApC3jG24xmVYnF2K8EaZB",
  "key41": "3djsyYJUNZum8bLb9qW4uUGgQSZktq2WZc9cnSiL83PJL1jkDAGFrgF653mPAfbVhcQr5TnqZmGS3z5h1XAdKiog",
  "key42": "ipnCGaW1r6Q95i15QAFTqKQKJzqH6YJcddQDVGF38fU2AqGnTiwSs9rr8FN7SSkbL1DstdaDyd9jszVCiKLtJac",
  "key43": "35dD3XYu2x18GkvHpFL6rwsBnuWHQAYfAozN6JFAabVbqw3iFRir7FQpNzfY4W2FWGvrjfypgpSgoy25wXuB9Jbt"
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
