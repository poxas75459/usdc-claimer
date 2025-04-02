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
    "RE41Pc76Z39J82i1uDoZo9oZBbm4QrrvFXBoPPzyq8ThZEEZk9wEToTEioo9AMtcQLRe6uu2UMkNRs1ec1WgLrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vV7S9pjGXLoPwiARXQhPQB7p2rtr8JmCnuZkJN5ic1LE13wFvdFVJeXTziyDtRHuy1feP1EuCq9DVBJPFKjSSXk",
  "key1": "4YFAi7awg87KfStjuF5BbEbgR2xCE38X2CvhBH8QipSgKmQ3QeP9a7hAdtLkTveUkAXv3G7wE9dMTv6QMYHYjLDc",
  "key2": "2TVuzbPga9ZXqiifZe7auBkK46rbMXrdNBHJMRvTxZQ9X1d82kCPkKucQ29hC4iLye7FF4HCJtPzrbvJnVaWCjut",
  "key3": "4psDMxPCxmY2PJXJvA8urGRj827mKutsqDYjtv7LNg43cEww4THUoZZb2KWhKXDVz3Nw8hR2Xuu5RtRaEryof72Z",
  "key4": "4Xv3bWoTD1NRqaHAPXZX3eG3Actwv6y4WkjnSftjoxYNVnbMcmRhMmhQpJ6BB1dwnKsCSvGoLY4pnB171L3CEgPj",
  "key5": "5MQHrqwD9dxzKUXo2TWkjCqe3kYbxzra3aPJjfE758dEKGws687zMAge6V144mfp8aVBKKntWU13aMamFQcnza6B",
  "key6": "5LNgMoawp3727K4oYyZ5MbRPCBxV52mAfibhfUqtH1FT1jgW5dJ9JKbeHXy9AiXYdGezS6ekqDi8KrzQL7FV7G2D",
  "key7": "4QTnbyAqy2BXtNshWEKTJZqiXudEJZzMCuaXRgQu5JKLWLgtRAx52Up9iACgTTupWiwQXPXTFc1qWMPfRULWtVKH",
  "key8": "3mUAMbiSbswZG7M3DtDiqi4ESp1vwBAMzHTfhxSGpDvGT7zWjY9yyJZnMZi9z4KisVWM7V7ub5MYE8onE4wSnyuo",
  "key9": "33BdSXJKSvr8TjQfrjXoFu2EevARs1exRxCQqDj2jse5PUJBuT6tUZMQSDCun3YrpM3Qeb8rW2fW4NwWxHHe6VL4",
  "key10": "5EAcWVuc5Rq9Lzv7gPhv6fDGKAF8YVytnTajgV6t6hEZNTNJQEjSnoq5YtZmvDYVJtHGfsqGoAo46i5QKiVxvrDs",
  "key11": "5FfLMGE8kgpNZtgoebgzPmiFC2ZJeucQfsp86ay4ZCJUwdWg283RYBwecop31tBUoVaoJBM2djA9teZVR1DDKBjQ",
  "key12": "4sB5sWe9y79Dw2CdQetCMXZjuSAq9XNyATcTtf6jFjMGNYbst26krdhmD8nmrroUEyP1kEyDSqFEMzaUxTNL4joj",
  "key13": "4XfNu5Cgu1vrE9NpRf58aXQ1QvRyGeC566BhVWdW7SjRbjsLttYDW146AFWL3NQ61auarcpFMSPTk9JpMoxVNNjL",
  "key14": "4CJiAauoXzyiAPuqPmvpNyKvrtD2tAN9BogrsZBrACbbeJBgveyfsL6b7wVkb5k22jDt9VS2fsCBYvsqtsfWFrFY",
  "key15": "5EizM1rQNirxtNoBi6rAdvpMFs2GxJEfaee6jjfHsQ9Dcepf7ncn7z84FZ3ong6V3oxvFiDMBoXb69W25c1GTbew",
  "key16": "3Db8zwbJFepqfctADWLMQdozPNwdwj8yjuMwLmxERu7xmkueaqPTZ848ono3RPPhkDUr57dfXSmq4znkmsLzYN6Y",
  "key17": "BPG89gj5BRQdaea8zGGLLqzuUcrTp7X3XTXRREgxrgnHq1dVwi2LpRXNzeVnZLPiXx65xfUnHsBh8SFCwXbrSon",
  "key18": "2MtuGy69wZSV9kncGPWGGVkNyxxgmadKsk6Yju8xHRFGF1FNgmn9St3yQvbkpEkuxRvtkSdukS4wofpmmHpGAATH",
  "key19": "4WXiTt9wxWikmnmLMVyRrMCuXooxwAicW4Js2pjc6WfFVEbigDD3bBEE6enAZedYtCkzRndrrLTu9TshmfJEiYHX",
  "key20": "2RDZ1uuoXaymyKtQ4Ujn15bRkvtML67416PFEVAVxfEdFP7MjcTw9F3BcMmVFLiVTNmF2PBYKLRNoNZFzVoKPs8r",
  "key21": "3sa4xgKSxKzFTKuVRcNS7kahYrFVCbU1NCseUc47mB78W2x1UF9pQJfKY5RykfvQU6MtMgzKpnLWatEsKjz58cJE",
  "key22": "3ngcvK8UGSq8Kem8wt6hXK43DShkLF9YUhNnUhyXCvPsR9PEo5gKsbTMKjbjE4bhBNUbjQkZnrvz7DWys2X3X12F",
  "key23": "4EuLXpKKjSRnucZLS2Nze3div3THZ8emSWYG9iJCmpja4TkkTkuE8P6zwAPNRm1JdmtPTvmBpVrsYZJXGtxnQ4ji",
  "key24": "4Hdo1d9uNiCw7CUjXeM1eP7ZSkSMFFqKAjg1a94KBDNwj6qR75UttYmhKtcq4CR1WbabttopxehXj6BSQS2Ph5Yo",
  "key25": "kUUKGaznvFyMNsxXVDRneUqm8vCLn2P4kFmVJdThgPDRUrgStMTZ27kUfm4AAwZC89SN1rzsM2EeRdya92weDne",
  "key26": "46NurtTSGzZ4WoTaR4FATzuixPLL9LNSZN2tWfSS4fKpfg52jR4ns3EqkxJMTkGoY24UF6BgLB8UNMvF5rruwDY3",
  "key27": "2ZbwoMQU5zZGr8dRyB5Q82d7jQXguLEmENgmDqjK58R2GYACgTJrCcCQCaWkzb9x8zeMq26FStyDi7Ak8XE46jfm",
  "key28": "4DerRhUVfBUtdgmN4397MAp2a63LZwfmDgBeLZ8nmMMLALweJ2meXKCp65vwSmvfwNyQ8ffBSwg7VexgCEbXJPew",
  "key29": "g6FCdqpgH8CX9h5HtFhgsPjumn8fNjXC9FUyYsicL1KusHtBvdDFk1bWPoBFQUBDdYWB6oreLRgRK61oGqJE4Xq",
  "key30": "2USAmhtZnRNAjBnGRW5kSYSqMxd6p38epAcfy7wM8RNFf4bJcV7A46n7PpQxaQgM2QZEZyefpPoNpwtMLaqaefDB",
  "key31": "46Zh9ZPYaDj9p91rey2wmxxWo9H7JX14cfuYBVUEwwnYC8CEnggV1gvNsVbtFxxJTLrpHvDKKaK8KqGCRvrpFqHP",
  "key32": "3tAUvF4j8gHpWQPoaWUnAKXBfRZfDf2iG4x7BN8q9E3DYt2oMivU9kCs2XGLy2JLf4zsLHFJAPf3JvhWdxd7GPBx",
  "key33": "36XWV4MJMRmwBJcqhydrKnGSuMKXTZKYsWZRGaJWp6tpTDkgQtQBHK15GPYRn51eiKgCSmUGCj8UeFmFBaXptq6d",
  "key34": "63w5g2HUezaiVTKdsarv7QcYcEZyaAFcL2XVS1Btuz6BgcuwWDFza9iSmS3nw2RAoaFV499f3iPB4zQ4pSU2xjwp",
  "key35": "2h8tFfKJk9EjSVe4fF2NUdvhweQJTXddDdPP6QG2MwQ8c9UbyHqA6vjXUqCxP9uqimoPnVUTYZRNygb69jtNcvtJ",
  "key36": "3rFn8fBFAUPaBoXdPrSSZ6tjUUcWx5BMtc71NekcphziwdhzCPJyqXuQe3Re8upCRFyrCyKTv1Sicf8u2hw5WQrR",
  "key37": "4FBTe8KQQu8dcWnfKWZgBVQLDmnAzprpSVyq8kURHAN8LxEyS7UCWdKGkh8BaFSLFyy3zyi9mYUHgkjFLs7Y7JQw",
  "key38": "3VZBbd3UyDDwTyRBHfXEqRGx26jh1rv3wvNhYCSfRPNXiYot2nuk1c3HFaJJFbaUUgmGtcbswsCNyxxFdon2SorV",
  "key39": "56K84gbdPzV4ZN7kMWrQ1WtpVccM4cV9EdnD9JW4SHuv1ssoECe6XF9DWXAwBcgcbhhoibDxmSY5oFqcrwfZabs7",
  "key40": "4HBnpynrmhycJqRjXsh9TrYcSheNnoGxg4ctzBM6q1q9k1y5DDG439GJbu4H71cxjjv3NonHrYDw6HuyDAMcM3o6",
  "key41": "SX1UpZe4SphZ3AThSUm5ahqmwErLjzV9mMR7z44ixkJYDRXbCWViSAJQfoDDXnUXTFshuD1Cqju6mTDLSkH5TgV",
  "key42": "3DeFxwwZ7ajG64XLoi2hZsV3aQZcWeQYnjQUTQhCX8se6ypgPrUQfFms9kaWBQCWaiLmb2C9DxFxUqfeZJ5NcFhE",
  "key43": "3hE4C8N5kjzzC28AgjfC9vXiNTTAXy32AVttCfummGR9UQrzpG3UVT56ucT1a4i4fdhFeng3H8x8dqcUS5cB1EpK",
  "key44": "hQb9F9aHsUaYDZ9WMQNNkjiHubGqUtNrQVsbxvMjHsiM75pR5tuuvyxSGGwPWmdSuUiRURaEdaoEXEMbKH3g6sq",
  "key45": "3MwVzcLUiekJCszcnWRwBgPNwXUvvHL8a3sQ8BhNxVYHSC8sY2E9NVow3h66pJzqFPsCderz8ie2BvcagmzF2Fg4",
  "key46": "495obZdhSnjVq3VCEW4QMptVd7Y86wvA3vZm3tyGWVcqZRHorGrw8xp1rJZfTqSUibmdbWCv4936fuWhR2PunkND",
  "key47": "5ZbAghi1hPbG2d1tDdKizgXyJEdeNRc7rT96WGfdzHBayhBEzWUvifriHvgD2mnJc3EneE8SFEBGLHN3x4U8YPS6",
  "key48": "rS5jL9Y7W5fDGyrKXokcTKPwSrKSieEa9BTP27jBUxhJf2FoaU5RwrQ6BG669xByNKwi69whKJbRzuDWGq311HF"
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
