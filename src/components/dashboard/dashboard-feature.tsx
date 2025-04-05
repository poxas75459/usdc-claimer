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
    "4FRgJJfW1hWyu42C3wJpyCUTv91VNcrTPkiw8h7sJ2XFDgMwkQFCkfrip2euvgttZ34PjnDBNQ58JvVriAJrxmy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47g3dRzJDwTAcXEhhsa6HbCN8WNYzmmQr9YxnWKLwtogb43hQyyZQi8fTRrhpM3A5xqyV5MPEqSdsFkQdkFtgrbm",
  "key1": "Nx4jURUSXPFLghjJvxT1hWBAWhoVRjWCDssNsEQXCk5f3hpQ1v63BsBpSk7VupPeaVcA9RYa8Bajx3QuxFZdux4",
  "key2": "4y2ixLZtfyfPyY7XAPPg8WfiJp8ywmXkqZr3vAvvpXUkmY51KGdYoMybxHx47Du8avod85z8RWPVe1Axbrf1uBiu",
  "key3": "2bGapzhgnDHDD5yAcMg3sYXK7bpRQhSN3QLudtZ2RHWNYpUXZHvjgNnCDJpNPyASAbVbf8k4U85oGvzwsACCsekw",
  "key4": "4aUie8Tia5vW5WiUeXrigVhD19i1tAj5WkEhmdagkR59RxfUGdRHdi3Zq6JnEVBAYVDEXqnCk9csB6btqqCa8R4v",
  "key5": "2YbhwwxdCZrdCNkvSUmXipegdEpsoMpAfvhtAP4efygL789WwMP7EPsWgyPKenJCR4pN1S5ZgUp2XT1Zo6meFcCN",
  "key6": "3iDM3upDqwf8Kxcg7nvirYUki9uTpXSa4RKChq8XQwQpGAvipDnzr9YfnSQX5LxwidZ7Nf3Nd1KL3S3y8WaidEgb",
  "key7": "49szLERZAfpFSBvjSMnKRZDh6KVDxF7GQKiACuFprRqgB6dagGq3VDq7hQHKpTvXob8yoA3MfX32xqcn2y1HcuzP",
  "key8": "56sTQbAaFQuXsYEQQiuXahftTsGynC64m32j3SEmts3fkxpQWbiVL6cUeFhF4zYjYZwtdY3hSeMWmfM4wz73NWF4",
  "key9": "4Xi9TrcQSsMwkBKUKt7rVionkFoiw958upLstCAkzGYBx66Yb6YtKyy7sZpo86ENBXK8gpupujL8hEi9jFMuakjA",
  "key10": "4fQ18KakdNA8DM8JLRJyWBbE3XCTCMaUpTtgLYFeesU4oKgmN3EwckvdkWUg7CuyAqzdATHxp6dtfnHbXZWe2mrv",
  "key11": "HLyUWa3BvQKo2wDUSckjZ2ZDxRSnW9EayKFhmn8SZWLEeiWnGCNqgZni7buAmvUXuKot82ddv9giMnBoJxnKQ64",
  "key12": "3vYiGQK9YwSw45v6uUaWSj5E5rTtoEneDiC6eCj6NQW4eGaoKQhxUHKh6mbdCh6g7oQFGyb8DnCoJzZzHsdqa5t5",
  "key13": "2BvjmQA6NetGhCiarEsqDheikirpDbvHsdDUtNuBP7wrYPktTBRkwfwGPiqfjBqfYkAmU8n6BRVpw3uDtrAUezaQ",
  "key14": "n5Fnh7trFS1PuiLwVdiYrky7BEE4kdMwFbFBxysMF62PptuBgHoxwCH4WExQpAVL5tRqDX6pFeDsJ7X4n5m9Hu7",
  "key15": "2Ka7MH4LY3VvQ6p2XiFnQF8jjZoc5WEBnQvDN7XcryKH7BAP9sc1NCVebCxvgw5X9jQ8ekp5zf4o9kMq5hEWox9S",
  "key16": "5Kdup9T4re1FbkwKnEr4PH2rzhWox7q16sZBjXbaJdDr3paEAiAcTp4x7GuMi3nEJWfmXp2mxdUZpmtZQEDUkpyg",
  "key17": "5JLuUSjxhSmRXvs2gseJYHw2FcADLFktprFF1aTkNbfzKrJBSfydSSMn9RHLgG2NRaWiZPhUFULB22KVorrvEWm7",
  "key18": "2U6UPha7V32HvRcfGMtmUMsAxGQCBERLCG26LYmAhFrVmBC57Wu9ghQyJRjR5quCNGNyzoeMf842chnen8rYfQKy",
  "key19": "22ZeULF81wT168JtF2qvVyyk3nVa3SobBW5qg2BXbxeqRSDC8mh8QHhNiTV7uZ5H7H3W5QgVL229pgxALxEqCRSc",
  "key20": "5fjJiQar9oM19ec97UeimPvV4PqpWx46SEsXxd9Lrw5Gzy3j6ChiUvB6XyBM6aoKwTvhNGHoxpRfnj7BRY3gdyhd",
  "key21": "ZaudTeteDi1F8JeEoYWTJhcor4zfJhF6aq3aL2Rvy4uJg5k9JGNi5ndcJnrphH2CBSAqnJFSihWcbs2CYEE5Qyt",
  "key22": "3ttFmd6eNGT4qb3qB86WnYZKJEwZNfc7u7rvYzJ6bM9g6HxqGz5nTPttKpLftEryetMDJndqCojRan3ZREEFwQ1k",
  "key23": "5gTGGKhRDUeS7jBnxZhB7tpjw3Swby4UKmyWMHu8DtxhTJ4BXYr2hcU92Qw6so26qwjGCCJyHCnR2Wc6goXkh3hv",
  "key24": "4px2JrZ74cqKGPAaYFmsKuLuoWMpXyr2e6je3Xq1QV2VxoJd2Js2QKkJ2jmuNa5L9pn34Y2ZcaKBuAXRi13UCBbA",
  "key25": "5VUxck6ASYo5oCghR1bHjRx59NpVopMNVioEAQsZHc6dQ3oNf9eAhbprPbyvwQg18n2Dfdg6cAKjUuYmgdv7K72W",
  "key26": "5Agxn793s2o3yb2xSMdxucJmpDg5Yki8WDhhGad1todWYFbZHyq1zdrQUr3YSU5zGHw55e9oddwQ5655GmfgaEQ6",
  "key27": "2uA7yvyDRzjkzc8aajtoNYT2ieiVNsUU9CMCMr31CjaBWzPti5pyXXiPoTNo2uHEaKqLwv1UZtvDLCaZsT3PxKqi",
  "key28": "2jM47vxhpSLjfYutjkc8ahZc32KjQkDiXdTR11NLszh49K1PAhd41LZrnSu97AERjfqFh8tc5GpsPn6rRyx3bEv",
  "key29": "4q6634TL5K5gamArWggBdrBZnn8DuXRFHqjPDjf7zvSp3K8WHxKYBhHx6gNyVRtEKUCT5ctLZBWyJZ7MLX6rJTmd",
  "key30": "4iTUp8eMCD6hEYWerFyk4SeC5YAxJQfp9myBT4Hedqu6KT1epHupzUKpgFzjC9vyCFxfLopd76LZEDp2rmkS1obQ",
  "key31": "521WpBHyxobt8RBu8NHNuvQWs1WxMWrcywxTh1sXPg8shpbLC1AUEpzAq7a9B4R5i51pzxBKYQeuTpzEu6xsMEb2",
  "key32": "5ggBfAgEnSveW6kiXYKr2zLuZRNFuPBkLKmGninRbXNJnphTiAo9yrzpA9S2J6yLT35jfJd32ynP8PmGTgEd9A5Z",
  "key33": "5mtYf6jekGZoABks5CPmYyeZKsDnc6hK1sAfz3eNW27XX4bA1yeHpGB1PDDVi9JahFTHGRNGXYX1C5otiaa7NLUc",
  "key34": "iroWCHP8Heh92XwrC6v6PvdVPURNwkortnLhfaP2aC6EhCJiMoqo6WUivRv2h47Ek8XozpmkjYWrFTLD66G3Rxg",
  "key35": "WJDvB8SS2hvaJxK5ex2CzCiKKQmcnABGAqksryPEpLYxSHLz5dd2c8mzCUuTRZnsZMiuJSrjhwGtxJiNZ2MDEUQ",
  "key36": "5qAgWmSX2xDSFc94qWyGtvBgJMTEVYicQyHv7FN8oLiwAmeDfmLxneVebUscjwF5g3vDyja4A588eP8PZihLwV7t",
  "key37": "3tbrsCUtbmtY3U3TGm5UuMJn3PG15ysg1BVGs5e97m4rTNdM5f1eu3Er1emHzjyo8GgLTSEBD7RGJTTYa9PmDvx4",
  "key38": "2Jjvd6M9kffXMXkSBboCrra4ZNi36rcqQEj5TNmPjzC7tzff2WCQPZBJcaBvHMyz69jw5tPaEKT3xjrBN2MrkSTk",
  "key39": "4bsEPfq1Yzk9aWdAnGt4SpCFKTB595nXkAd7bTnYX99PNhWKvsCd8q7R6qPc3y6oE5EB2Xcr9nam7DVjGchcZQFb",
  "key40": "3pacd37CnwS9BDPzjjS9C7kE4v4nP5bgdUV1DVoHKZeSU1DdZW4ooVxZUuWPteA7EB4d6AnL9DrWzKbUCM8tiNWJ",
  "key41": "54LdixPCjHbz2qy6XnHy6im5TNo553J1n35UmDtQGcMX348DJrZtzo9EHqdskU81FeFW5QB27SnJeAJQtMoWSHF1",
  "key42": "2PPFXzW2AodjowaTuiP96zBrX7yYXZA9idcq7iY2iWorD5XLXERzVSAJYDzvPTKR4dr9b3HqzgCdsfiKKain2TGC",
  "key43": "2HmAKXMrTRDy9Tr2nqY1AkKKvVcBUKrrgFiaFSwTV5vEGnfszBEndAsccJ4Jp9YiRNQC3LuCWkhStdiHDDfsnwKh",
  "key44": "57XofN6EJojQpNYmNyYMdf5CuE7EFr8WsqF55odBkcgnfW7Rh64M9SVdWckzRcSGVRXZzjkCdYByHk9Hm1R9btY3"
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
