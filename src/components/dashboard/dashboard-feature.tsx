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
    "kVYuyQDk38UkckUMbJDd9JHgSWKdy6DRo51YChRETzyoR39B3qsD5PYQFSmAuRKVRTfDmeiZQTLQzy336eK8GR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hz8ULmxZ9udbWbhn8zsG22cwRGy8e4icHgS1rnTQNGeRrVNv53VVE8bin8iJckfoD4zXE8hRyhvcRx1peAbbTLM",
  "key1": "JBrUWfUUVri5YfuFoqYsABAiqu8GrAU9vcTgZZt2pJb49eeqL9Q1ctXk5kVwhz45iMgqq9zCgeY7TKfGVhFK79f",
  "key2": "21kGvoCXuN3UXeeVASs12838U7gEyj7KfbFdEKyryMwEuWHu5DjrQgRjiU8qr5vJCpUR5H2dRw8U6nMSoeHBSxpB",
  "key3": "5i1HwzuA3cDLKSfYm1y5Eshp2J3YzVtFaB13Ttwv3sbxwFM3HVbat6ZywZFkeGMZtvFuaVLVSkWv77m9527qb7LC",
  "key4": "58F8eden5DL1R4GoS5GbTT1Nv2GrLW9wNjfpuLADNHPSs416FLLCKYs3wVoMXSuAbeTPxSfjPV5Rmaz4MmUU3ygy",
  "key5": "5CnFzWyR268qpMnGnVRrUrjUEyAEfJBoU8WbrWooRfk4ekv5Dm9jtmLX4sEkohJ2CSq6mABx2RbCtNtJEHqxK1yZ",
  "key6": "3asAtnW1yhpQnF8HJsopSooiQhb7QPYAmKhtXixEY2M3zzqMUqmiPVQoc6yiCKHUV8VdzYUjHK4For1W74FPD7of",
  "key7": "3WoZYrK5sDANhvzZAM8ktEsy9MSLwRm49p9PGmKhtvy8hFVSCRhiDxou3Vtou6SAjRrCCHrKvYZHRLbGd15KRpBv",
  "key8": "3zUjNSUHptkLoEDsQ4PWCnsGuoUrKJme3ESmTkKVvCYkQQAJxqHvrfM9RMmJejBFZzZiQxbHeBpRwbZwYH6s4ixn",
  "key9": "2ir6gbtSWueMYpWRGCtJFk5BpmR6rhZh7TXam8xm6aMPHcJUbZZLMsG8uz2yFfJqrmwukQRsy51GivTT2XKx7Cda",
  "key10": "5sLbJaYpmSWoxQ6NZhzFWkTpGB6eEoiQGrXMgLJiYoUSSUUNYYS9CRg7tBxfrpRrjFkYLVkJw7pPp27CcbxwUCBS",
  "key11": "CQCLG6S7fMZmWxRpRgP8WsWwnwZMbLMRJwyamquPBr11BuUNxJev8hgfT8kkN6yunqVWrgfrKAAcuHKUte8sziM",
  "key12": "3v4cBSQcjUHqZQiBy875i6AWNGxcfV662R6eeE6CL5z8Zk8qMpSbFP4HdBwFwBfHbpBMiySTwjQj1EhoMADKTLKw",
  "key13": "4a6uYYV4eb9eVi5qDsx3GQAaJSM4XfXw2AkWPx6ifzumuVg2xXVDVvVP3K9P4HYUKpwAN5wzmk965ZUawEkEXVod",
  "key14": "gabkp31NBRFZGceEs2Ryr3YYHgyT9jFnXex4UKrSEFmyWpxS4NqbjARNCNYWFw7htZKZfUUtyyfsUwuxuTKjaxV",
  "key15": "2qTYV2SzZSX8x4hY8WMNwopxCfqjVktaoCT9xY5JwimW3EtnwR88h9c4vL6HpSdkDvXK4QWo5nTGv8CRgGrQZegU",
  "key16": "jZQhADATTvqoSdEakirByquNkY2Bx7hybPAsw2Af4AHPATZeVpEfKgDJ97YMVkaRuDHP4UvunG8ZHvGC59cagxR",
  "key17": "5jNXXPKk3YVK1hW322u9dQYEYXUKDJzSENRakPhsbGUP5t1xUxFzcXoiYzZKLu8sND9o1xidXk9UYLDUnti1zLFg",
  "key18": "5a4fsU1h8wu79g49LxNtk8k79rb1jXGGs3oPGUrvMZQGuu4FEtXPW1Z9yqPCDPz8pJMMDgo22KfmmtArRSkeM8B6",
  "key19": "4VprdmPMWzXoX3JM7yXpZd4x7xU1VKc8RgxPayZkbnZAyBFuR6k1gPC86i1GmCnT6dxNicj4H8GEt69vpP5vmfqf",
  "key20": "46jHpezKUvNLpQ3fHM45uWzKcWnzkYzBp2wqf9CYiRc3FfTajmSGpydxwBfv7VPfqSvkACgcSUufaokvUfj4GSx7",
  "key21": "VVfcoTED4DZnb3gSdfUHBRLLHLyEthi4MGxhQUhVQJPLNRmoMRyqzfhjAzGBh88vUBE1y4prP2EvnHWfBPMoLBJ",
  "key22": "2pHyvvjJ2rptXLX9fk1TP3VB8BMqvAsF1MKSCgvFcVUd79RSDXBrxBsXNqa8P7T4QHYW8v1NYQmY73XFirzU5vMX",
  "key23": "2wNoexh8MBsmf9huGK77ZQQDAm6xKeD3QBLgcsoT6CENcSfXBoQtJtYXsjuxhDjwSTnU1DKRrEVv1zaU5X5jLphV",
  "key24": "3gAxcx697Tgqy6K8duHrMV65g4639MWtAt3zwoZbjFU5RUdjTDT5ALnbjgWVjLN5uthBUhPk1DLpxcLo95y4yPok",
  "key25": "43GkyjE1bR1mQvetEBhky5WcWp9so1NSSDB4WM3yYdH6sac6okdhMN4D5iRq7sThjZoR5D9fpCfCvn4QiBudf25N",
  "key26": "3Csc11X91TXYXYNUadZxQTjaE7ZEsAa87AetH8jem9Zk61nHgV2BTZQ6PJNQYEjiceZC1fb5oUs5tbbg8CL8ZLCh",
  "key27": "65xdZYfMaRutd1Q9iuvFxuZzUjHedUoW196WBBDhvvwZGDRusxBUHnwUZe4Cye4rcj1YPmbmmLdKKrh1a9ZqJVxa",
  "key28": "5q18pZzChGUih45X5jbYzzZ3tnaFsCHZdM3xQFzfzSJ8m5dL4Z6yENecXFXco9fwBTyorqXPuxPCofcUe3CBptU9",
  "key29": "4c3k6AscqzaVfj6ZpTTLWBv2TNKTEuL18RXw8vcFb91yiYsEdugcJG1N66ndQEh9krwowPnRcA6iUoC5yfNN37Vt",
  "key30": "HsdBcVMqfjMDwN3K9kwjfk8swdDX4m7hftvgQBBiyCmAYPkg5MxncGyjSAQ5VpPRYBNFM3Cmsow3Y9U561P87nC",
  "key31": "64TayHJZPBMLbWpjvf1Nvwgbdaqtwit74TdgCVZYftXhwXzeNg2MBDEQBxaGenpoNGZaJBK1TksPCjizWXrsSnKb",
  "key32": "5GHYbMWY2TE3n77yZ5mKEjucVWp1QYgGRDSKLsigot5VJe1uWLk1jrTVhLZaY9aZzhzneEDVHmzp6b9KdXCq8doe",
  "key33": "3DFqGuY5vG2j5Xc6BK9U6veTbQ49oU1eR2yGATHLUkemVsLu25YHVcPyS1amDV7U1vYpdKzFjR153iTZiF73aiYq",
  "key34": "4Tq1AXNdKw6jqoSMqkkkGQzQNNRMzBufu3uSeLVESenMDeXcYx1yD5MSiKoxRba2CkYS6o2BgixgY2xkE8sty4Kj",
  "key35": "4d1YgqkwirHrPnksyWJ6vi5WFcU7Rmye5Uc5miB8Xogp714tEaVQNQt89VHG1NGfm7eVRAysj6kmBiNmQZP6xVCC",
  "key36": "3kZ8g6wx8pVGdzeftBNTjNuMKaeqTaFrUim3xEFGNAQfHYymkfuNtKjfgoMr1ffPhnuzbCKo4X9oCFDBz4Hrq1fr",
  "key37": "VAkMtrGXbUjduxmjuRZaH9XTHqMgBQ4JXKKQV7xzeqfutvTN9WKjTyPoGFLcj8ysEmDQ7Am6XvyroKQjU8jGc5t",
  "key38": "3tACkSdc7HrQ4AhRW9KcDv2MnNJDor21CKn98GjYYYX2XqBZnxoWAN9ArF59g1YVUB6f72fikpQ4cx72nyexxU6H"
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
