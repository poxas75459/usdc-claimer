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
    "24LrrfJ8BmSnGFxffnnak5MNH8kZqVmjJAeX3assUKRT86rhDvVvnxYpyt4kdKJ1G8NxBkRQ6WGHsFK5HjpEuh5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9meir3nCbvjadAyYNPzaCyXdA2dwQ62CpGwvQZCsPGnBddQ1Yf1nX5J2X8dXUD81TYFTPnkRr9etfVGBRqTcC9",
  "key1": "3fU2AP71bHH7MaASV1XmiKb9t7TqtZvg4H3yeirY1HjY2UccwZYfsCVmL1TeBM5PdWwXNxWkMtja1RXuVzuiGjPN",
  "key2": "3UKDqo2GtjNd8sBzLoiW5Bsc47UdADvq783UwHr6YTrAmsHLBvJn587H48SYrvfNwUHGwP1gPD13QY5XEkbHGJCx",
  "key3": "5Jhy9ST2hzcUt2HZvAdQuGhixRyhLMF45EF8jZ2sE8bFpYKqZDw4qrmdtgoDc78FyxiRn8ygxbS2TaVy5tPzjQv8",
  "key4": "397ECNdBUVdiefFQhDo8rDTj5htCDygqf11xYgaxecCPjG8RRyGJFDcNGzLL4rwWwimBRaxSPgTkcLcnfqvieYfU",
  "key5": "ceYaJH1SvYTTL62dSksJz6jtJ5rydXdyfzZtgoimGcozSZd38SK1d7UD1Ab5bSJ3chcFYBShEoTwjTATtQZ6xAb",
  "key6": "4tiDzeB4fce4VDFqS6UcDgc4Bv81Wju3BQ7q6Y6p5ZzfndkRygp4ja9MdwAhsKp6c2rXgjpuSG2dY7kGMpofLdsY",
  "key7": "5dQMqo6w6guXUKN95rSawjVRBQDYCY5DzsgLeeRur8U3nywJisyG1hvthksUjnu7DY9XnR6gVVHvLwjg7yAkGcjm",
  "key8": "2PVLtrm8uh1YkRskcaNe5RLfbDUW3N7URQRYMWHFvpVDDy3kw1PaT5ygEU19Bvxf6RNBDFieMpzJfiAsFT2x5LW8",
  "key9": "3MKVuUJcYNKq6dzwntC3wF1Azs6SwQZ1G1dFtHPuC6Gqriha4LkW9B4Skc5dB7qoQCAntm9U5UxM91bFpDHRugXf",
  "key10": "4dcTTipq4AMszNi9mK95BMK5rWSvyH1LhVazStP2SfcSmRYzBGxaUFpaZSRdRAGZP1JK11twCVoPArR4q5ZFQwsF",
  "key11": "4YnaokHqCfzQwab3MWchRSm6E9skV2x6zrrMuVDmYhtUVauei5pvYHLtyTxyHPjsFaWB1GTreMJLCsWqNbnugCu1",
  "key12": "5Gsy7GLrrCm8TxGAGd1Pkjq1qVuzCSgdREcqtmRuQQRhri5mXwCQwbH2tUjyzyxumwXZHCT4Q17JQ5UJgeVKQbZF",
  "key13": "42ZDyfexkYHZSzbRZovppRP2GjqEudCmCihvjKTpiMUkREXq56arNJZy598LUYccyuyFULr7fzJpgUeCcgm25G1B",
  "key14": "5cBcP75NQ4agEpAkrJq4R4bRuzWGTmhEzUb8hXX5dXYmLuymLe1vgHBAuMkaaBGjsvY5CQTiTrB5RwWj6ccwHWty",
  "key15": "46hHHMwwKRPKEV6w5X6dxbHiueksz8k9UQoQcPxZ3iu2hHQgrA1aKpHZKSKZr9GLCV8Nk89QcMJed23PU4CafKzd",
  "key16": "5XkYkTwie9cjEdJwicRqrXsyen73NReXvCmXueYxEu1F5JiC7A1F2hYGzCchD3yk5DYjHaerKTUwtFrHtPAVKAbE",
  "key17": "6ZD9ckgm88XDxw6y8CSCtVxL8opoSxCcYDrgCQdfTL1kbxALxv9HQHWSreaU81z9XPobs1fccvho6XMWqxLZsyH",
  "key18": "4fWnRFRrBcQ62zqVMeTkVV7ck87CbZ3sTxPM9vFg7u4tRjv2gjHRpFuXtioj45w8QUKLtCFgU8m7swbG2Qs6RKx3",
  "key19": "34GGWSMWShceTJYdYh7qSxd2WEnnNDT5KqCMR8uxTVEgj6JNmkwDRvye2vLwNPntB3shoBbFLsmLFL7m9yPy32YC",
  "key20": "jqqKhqor5tCoqbV9iJbxYwzYS3UTcE8byVk6EJqVnhP5vfKWN3q1KAEVEqUnJnd4tBEqox677jZED7tyBichYbg",
  "key21": "2J7RGX7u995aGr3UCBzLLYcBy9Q5qfwBxXUXxRtLWXX5E4CvcBmy5rErYmv8FcLUqkNAqfhs6PKH2v68mPrZc3Qc",
  "key22": "3kFKyf3a9SYbh2Q1BGMFmCNT8upwZUPY3xuDjGbrEaEYi44zB9saexr3roJCv5Je5Eq9fxiJfVq72u6JPStszGVA",
  "key23": "yxjWreQf74yTAzNfNdCCNUti7M16BStmWqJZyCF9EtMNW5YVANDAS9f8bVEDxEHuDQHogjGr45BwvynTDH4J9Ww",
  "key24": "riFrp9ApqT5FQeyEC1QJk2kQr2zPk94gQb8Da7AYXco5sTgf5r264Js6dSqYDRztbt7iB2hMSYRwbshjtJFHNSA",
  "key25": "3MFiauWiBUY8ghTHMTwV5cS9LXfvQAHjavyVHPQVbczwvXBhKaLG4oQhD3fN5J9XraM5bafq66NTxoPhozdsMxX8",
  "key26": "2zXL6ZJXE2F3LzyNrsk5LPqxfUGU2vXwuZAp7kaP8hf7H6TfzaWQJeYRZEieLB8okgq8yZspYWH4VtM1u8ryF7dZ",
  "key27": "3YRtfNAkgBZh7jckYaufpVmywFcTwuxk6qg915Vss7gG5ugnodZNCAi4jasNQrbaLFTGCh3VWEvUMJrcxes5bVp5",
  "key28": "5gLZtCp7yabN1x4aWRNT6xwuKDnqCs2B3PVgqm8hwQHBubE8YuXCbjdc2KSeqiSZSEYMhCLoknT5XDABA7RLJCbF",
  "key29": "3DCc9FHcz4qE57FxD1wLQnqqEucKFUfiWRX6baJKNtE6csCxcTqTKwgB4VWvFyQPyyRTHFBjETvRbHar1LwjWQBo",
  "key30": "4oXqbPwNfk4UuJktn5oLeSqSQupF9B2x5MJ4a5hCZVS8TEWVj6SFyTYQ7KDeu4ekKWbbemrLzBMYzD3oGZJM6qKg",
  "key31": "4yYMCYjQ83CWEoQbyDSKPwpAEj6yu2EYqjvuYDy2FB4vaZU24gYYexcMY2APhdx6UtzFFLbumzUCkpxSSmUeqNS4",
  "key32": "L23psu41tr3g347d5samrDcGwETxUXTXmmBUpjCm6b8XU1x34C2cfLkpWB5vNn6HeAW2kPxxrbFGJr6kSQC84Vc",
  "key33": "UsYNhfWiiN9Dkzq4NWnuE2YMYzbSWjReaLivGf4wFktiZKe1Sgg3t1T48Hr3H78jh7zL3NFA9gzrR4Q36NQMbbc",
  "key34": "VHCzqgGP71LAFXiRSvvyEKrei8m6fcvU7n2w1tDTSAichrK4fmgcj9xWcVFfQoKdYx8a8NzEZmsLB4SgQr5xEDH",
  "key35": "2CZL9VcDqyLEuMFzzoKrZe4NzVeffe5uC4byTHFUSw49SgvgoS6661T2UuK8ZUvBaHjVzkqoi8aJApXW5LFahQYx",
  "key36": "2YGdJemzmWMNVAY6cQgYHHFX8ASEkakXfnWmAZadS5DzcQadf6hTKuWWd473ZdQWNx6d1bBkCH84PckpM2g1qyF",
  "key37": "2Xo7eJqu4NviyfE9upR2BBDueQ9Wqyp4ubNim5N63tM7ANQBPj39y15SC3WmiJzqj1hcKP2yBqfWGLTMhtokUV8o",
  "key38": "3BaS9iFGpXtpQBmAU3J96dNWYC6pcutLgbonEqAaVAHx9es3qNtU6evUUFL39weZM5iMXfHCgdHnJsGKR1kcWC2Y",
  "key39": "2vFWC4y5XB34mT6xi6G5Whpt4pRJnWGPrrxhUZ8WFGAUGhFXVatyxjoFAEKXHRTRAYoGP6wxNJrE9Hriw7NCtKWb",
  "key40": "5rdofaW5X1iXHNbRkKNaSTbLcV7XdMUmUCUp5D5vMaXBhUhEkszZVH2bfQDXCsQmuUtEDrusUm6QioPR7YpaeaRZ",
  "key41": "HRgbByZ5nzgNQGuEGvDntEomXt11Wc3g7coqWkKAZjxcjppNQtn9azEZ9fyvRChGwy1Dn4BVg3TPQybmDJuAtZU",
  "key42": "2LukBUJ56WLC76QHav9qmHESvCdMLrKgQY11RDn9zzgwa7BjFobLLZeU1SXQwBRivqxbRxDq1eWpNiiXuBEdCysB",
  "key43": "2Br3C7nUidRatjnZjChr96NWAwrpVTC3fbnnPtLQEVVMZ5a4rRHCqA3Z2m9d4nA6kamuBghxUytdFqW7XSUifgMb",
  "key44": "5MMyK216FjYiBh6GunVKzKsjiybrhPJt4woJEyoqkQz32Pj8Q6uKpdhaTMECUaKkFjXLZtHg3oHGAZXpwmRNzUft"
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
