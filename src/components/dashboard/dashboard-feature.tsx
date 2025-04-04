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
    "4hfxKpAWkqXcBGwe7jW1xJkpp6U3CgoN55oCL2Rns13c8UTFN9VUthKgLvwTzEJ7VRsjPmpWLjp5jFEB6dtLFRYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3inxsVPBXXLSCu1MYRzGUkhjQVk9Wo3HW89DHCCATQ96g3zdatXLj6odhnvAjXU9qq8np3xYbFcBaRe32uLqeeMM",
  "key1": "9iKJfiLcpvBv7k6zWGiyVWBfsf3ANJHy74jywaro8tWu4jMkRSkJXGDtess68v33u9YvCYA8jbALNQ4jirN1YN8",
  "key2": "3gBe27AJgNZvPC1EiDx1RrbnSXLUfFCBZMkw3PfRvmqma2pSyknd9FuZYgWBvh37a719FGdhmUACXDFUkFupsbmF",
  "key3": "2EbdDTiGJGZiRNoL7qaEHd188WVrDhmnQ9GhsVN8r7DgyeVx3Ah7EHv4KCrHLwheTFHGB1q8uACKXYsWfex5ZqhM",
  "key4": "aPL3DyK75bSDtbJ7v8Egc5fpVkDRskduyxNGkEhxJbkNbuhFtghnhN7rN8irBzvkgCnTNQPxJCycHnTsaj3Pgwm",
  "key5": "3N84pU945ZvNzeQ4G5QT75a1pTQEKB8rs1A8XDHSf2cvusQqcmhGpAkGPamqHHpBnmVFZFH2mhzMGL76y5yUi1H6",
  "key6": "3sNdAxQ5xjnn7u2E7QkTeJFKKbpzXFPMYUb8do8wkEVvZBfDHArNyy7SG5QB9xSaMQ61zY4vSS3Ngik1M45Zwmrg",
  "key7": "25WfovHjRVLggtg6vMPk2RyyAe39C4CLHNqjx1kmfLQ4AzWQdRTwWcrqi4EyKe5fCDKuxsF6P4CNyHjiPawfkQTS",
  "key8": "2sAxTZ89Bq2os8gb8KigqCNc9X8uqcPxFCHFjAQj2KNyRcgMfMnyFPv1LjWxtPg24gg2nVdHFEEV66JpLsd4Ett4",
  "key9": "5DsgWHfCwB9ReogM62mR4pJwEkWpUBL9JMy8St1jM4W233iMF1KjaaMPqB3g6EL1jLNtbWquXL9S3dVLSZ2LcqZB",
  "key10": "58q3eP6EFNnKtDwpr6UttrUiCenKiGHR9s4V1ddBvq4qwjhCJYYksVBpS8oYiMLvJHJYBsFq4w9jDJzDFNG1EnED",
  "key11": "3HhjzWv6TP2FK1y3CG98mKjaqBchCC5kndNKpBmCBx31VCQLVcEr9o4iA5XSgmTZx9zJ4dGth1xhu3ZnqyEtg63x",
  "key12": "27QNWM13XxPqYme8kS7x3NXmu4Z48QESfYhffQTSXPtnKunbKpFmVUszLwdA9DE4kDLBELYX5ugvgkgihYfReZGM",
  "key13": "2KjXWpWY2uhddgxqVNt7nVH4DhqmLYxBnK8jCdS5Bwb8trZhiRQaM6AjTHeahs7aQoWfkTMShsMgE14XztS2qJN3",
  "key14": "56oK22Cu8f7EgPSCaF8S6fnfgYBgHn4bNjUMEwaRhP1NaswcKfyYeTNKVb7mFkxW8GzRFTqJoTrCv78SVYsKgbBG",
  "key15": "2rfKtB8PGb5mMysdHLqCzqCPHNmTsaxYSB78SvsV11vRgEZpTsrzrR3u7ir18vvC331n2bcoTdNXFfprMYw5zafW",
  "key16": "bBfoa4TkcWrJVwWd77eXANJeML67gjF8UUSBYYzXBTdViYDwF9TopnU5XHAyPkgK9TUur6sEY588xuHccUrnQhx",
  "key17": "5ZGFhgpqMd9q4ewY9LTFVNnrL5XaFsyeMBUcNkMEXswGMTf5w2ujoixXwkg5o5C3oyZPnWW1cVBHwjwj1WhmbWXt",
  "key18": "SGskrWzEdtPvpu1SzWy6jq6CSv7ydi5DvYeEjewUmjLDDPaWg2qV88jKnh1Eb2Yj99KF9BhPGdefFUwS6xCqtDN",
  "key19": "es23tsjxo3bHQfbvU5AzyqjhaX1i3BjSNoJf25zLDB4ooeiJcbrR32m1W9tjuo9ZWexSAwr26E16ED99oBzxcCs",
  "key20": "5Z9dXYH6C4yg7qUWUpt9dZm6bzxq1GrvggqSLASPFNzJ253fMH6pdnVGaRQ4MddF7XezGkVTX3wEvTZuGdKgQajJ",
  "key21": "33YZoYuj7ZpNfBNzuDE8jARBFXXgnFggRoGPAd6fX4RDfePb4PPctixLi3W4RZfb5Nd4fdxMb93woUbdvdBjKf2G",
  "key22": "3pg7BhSibLV9TEVrP1eunVQGF76S6w4VSt5K9QTtXZvSsr8qLSKhjQZopDtBT7HYGqfTHBTbP7heC5FxAcz6Mkzs",
  "key23": "5uPrMJZnMzWLCKPH6qq31dvtwNfNq5g4PdMPdthwbdY3GMv5rskAea9TUYShn9o45cDZ4qjnXKM77M4iPeXRR6Sg",
  "key24": "4AkgYxYj27tbTsHV7m4x6Xb4up7VcjjB5TQFG5KR9HYujfAMXSp8azJ6z9RGY6UaGY8kYZr989LtzQ89BFAAJ3Tz",
  "key25": "3CMzfuseMUB9HoWCw2jEb6vPG17nN7hTRXnxNE2cchbX8cP31PcuhG2fgHHCmLW5oX92ytJdpUsUphnsEwnrpnVv",
  "key26": "k9HiFSuEC2eiPoZCVKk7XQeKwQDZSB2cdDmtREkrNxsyCHzqtUf27EmfVbjUQFX7HDTQ4m68mbXZmAKuEiXnq9P",
  "key27": "2v56DafFSaxzm4B91zX6SiGDyU3kgU5o18bBnTwfaxtnTfA33c15Hjm8pBXzR2tVsJKF6yaGD8h1hobojsg1Qfuk",
  "key28": "wtuofsZAXyvime5waME4xHExUCBHES8b7SEqhrSh58bzFpSwu8UsrLH8ZNm9Du4AQyqp5n4N8CE9w2me3K2V5gb",
  "key29": "RWVEu7X4xvaDxCVdTuCGMhM9AMZZRKftPYVUp83mRRipMGA1wAEREHtrJda2ARR39JNCTJJTTJHyGrwaze5n3mD",
  "key30": "49WPjxEk3evxGFmTNTdSU5GnL5BEXoE2kfnoPLZy9wxkSjive8AwQyB27duMtecnJnBnypmUFGh7GxvMqFbsR3cu",
  "key31": "3422HLguCYQ5sF7dRWeNieiu7f4VPuJzLMXZAkj1K5eJqUdejKss2QYSVfdukRrnPhVgZ5QGrUi3khvvybmis9Ur",
  "key32": "3vcZZVCqKkLwZPnkRbNXsFZZTQJk8dnc1fKw5Bka7SwqW2c4R2cc6HjeDkkNXLAjf5Kb7FawHPrWdzbSrWunG9cZ",
  "key33": "3mFycbjajz6fm7JJhBfx5GfqrwfjjSbmN7BZYVVqeNjBhfL25Px2A1RVHLWa8H8SvAcDGtUgfjxNzC6YU9ccCzHq",
  "key34": "5DTwgwovUCwQPUPKQQWp1fBMxydcSPEEeGZgudk1WnrGC77bj6M6Ak81bnTEfJ28QaqpP22UeXiBfgeNTApggMe8",
  "key35": "2n1Xu51izd7ekqP1df897Z7ySHxKMnjdCs85dgkThQu9wkkKxUwtCSv2YYqxYkvDihnk9HP4tMRwCH7JnK5ZEkpb"
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
