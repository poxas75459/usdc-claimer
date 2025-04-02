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
    "3TbeuC9a9GpGnQtToEWheyaNNXhdDVah4He5u4RzLkyTKpioQXfLPgdTLEDpj37w8tzadYHSF4cBBmABvgPEmyJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6167pKPkvtRk8VZuWWfRuyS4tDwhF2pVEpNPAbsERjyFZASc1XhDTKZrDKEjDrwZejr1Zu3E9tcoWiWZRoaTs5az",
  "key1": "39MYaiVxoYPRA4At2kkoksyi1tCNrF9r84Tbj6HPYMqQwAa3dgmEKRjqFy2ZhFk3p322WUXfp4Umu3bX5JpZLHuc",
  "key2": "2ejnhQXxrePNArBt89mZLLntTF6EaWunM4QWNpvCMLUQA9AawBATzoj6MFHWzRTtNwfVcBDBmcVW62yeCPM9qGKc",
  "key3": "3LfpBFYmY6ndHKWMc1DGPeeVQu1iXeL2AG5qwV6ZH2TJFJJDxwsEQU4624LVevBVSUoNGqrwcc9f6fANq4B7uJRf",
  "key4": "5zESpbSbfjTcz1zce1qBqv7kBFqvqEYKRy3zwhRoCQvPhmTQYJeGCX6xFouLUS4ujDBJwugA3JBLW4A485HUojgk",
  "key5": "2uHmWbzH1JAWzjUZ5tRC4x3VSs8EVUDX2hF1vddnmQsZbBVsHbdhfFDqKDmZuCAM8JCYgLqVa1kYBRrfAbMCz7fC",
  "key6": "62RTxF4DdQLHV1F17DvKFXer9ugCC5iUSpnZjL1UkNPDRS2HMsnC7U5EpBdFYggHz1dbAvHEn6cu7J2nJnTgFY6H",
  "key7": "3G5CvdXLCgd2wobqSxvK9kivJde1d79uBvsQ5m6cnj9bkZiH7VLnTdmyULiuCUv57AWRNJiX4TuZL9wF9XaHdVCs",
  "key8": "uJTk2WHASn5RHqftFuU1o5mVEs1yiqQjqsMtm2Nd8rcyJNTR2gPJ3dedesnhQWChTZTD4w4Pamys64JNyTkWYDm",
  "key9": "5JoXA2tNtedpnYzbQLvPCGiERYiWKXvF2QivLjpv74ajDsmtJ6DMbUzArripUNtn2XSFbkWKLv7cHioL6xZ4grxd",
  "key10": "UEWftqnenLuaNmBnsGjzRM6TMg6xukG9D6TtFoArrJpDtMhqLmXjW9s8mu7pGuws4dHaUrm9GDZEFHyVuDiSBd7",
  "key11": "4EYPX9YPdcEnRfn3JAiFLSSPhWvgAXuVjVyErKpi82unTXYKKQuxAeyUkvKJBKBi5qDS6Sfb2eL68vxmv6CsjqhA",
  "key12": "2oZ9u4xXfzAH7J7b4MsSPm3f8VFPM4mTzeAU4nMjfV753DuDZnBjhfokwgXbQm3s8DTWTWJkDJ2q7GAwUMh77ogm",
  "key13": "4AQJMSA6rGcgxWT8fBZoURhYk9x84MUGwLhtNem6tm5GvAwPUtrLoLd99iovh3aSovMR35Xdkr5BsDvrU1rLVSze",
  "key14": "8QfdQ6MbwFUtcJwhpSgGbTXDpjcnWrCPpePGWoqUXfT2zfSp5997KyKqFstLtAnfPdJMEuCmjgwosBBwhhsAGnj",
  "key15": "5RgjA9Dxt4Zzy9FZXX73cqHKshYRwT8T3rDRWjfdu6oiKqF7nzDEX3tASNncTsF9vwUTpoD24E8MDjkF8ZozPdkd",
  "key16": "1reidAyGBNAMezX4wcem3rFTnrgKg9rHUUtHTgJtiQV8gxHR3gGkEVPKfdbQsXwxbZNAWgNC6QVeUuW2xgzgMjH",
  "key17": "4gkSd49XupoNAtUVp4nPNpvrk7yvubrgt7Kx2kvp2Vb3JyzNMwbX8tzXYPWBzNVtCcZVxWsHL6WzEcvPeqfNc4Ta",
  "key18": "2stZAxSj86Ues5iKp6J4jJ6jrjn4jXs2Kn516aiSnAmMjMZSk3f5wmUX67sSTQGf8RD3DzQ3rG7yDvw3ZTfByS1D",
  "key19": "3Kf9DDMRcQ3LtNxR4rxHBrkpiXyEsf9EySHk6RgXG2B5AwZKEN1ggAZZ5WexwT3GrFAyx4CLHvTsucHTDdYwZQbx",
  "key20": "3bXzRtXiSts8yEdVqxE3jURXxrUxB8QWZ75JN35edKtda5WMF67UqA3TJWL43ciJvhVb7yQSkcKDHipN7acuEQdV",
  "key21": "636Zrx6PM5qPDCz9VKQtBBcWVZXJb8ofA2weyLSJX6HP5nngAzKnXixYASGdKx7xij1z7rauEDRoVK8nNTusJDem",
  "key22": "2eneqr3jit3CzaG1RaTTm1Tsz32phr8qAjoy1GPA3u8FyhE6KcNXt4q6r4NoGJaXxc8X5zjF3ojhBG69S7Hg6fux",
  "key23": "HtURgtpdVcEGzc1z5rWSDjAFdsgC3gdJRwpLdLgGFhQti8vff66b2R2bv4wfcJBmZ2x9DUjkBUmnMjPfK5EquaY",
  "key24": "4ehQDobN7iC8xwFjfej82pqufDfv6gEDVknez94fbtwJFTmx7iEXCpcSW4YxkRxXx54EDxntDm5U6dDJZfzNF53L",
  "key25": "37WdLzdsLWm1NbHrvRPKC89aKcJFYYiFbjbXKBkoNQ7tBL7HPPRdmqvCepUKEBynmiPDtQ4sU5mcXK8Xg7y6a2fU",
  "key26": "5EgxYHbHsSbi5KVxZgFaJkdM4cDbShTLUARQR39YEoSRjhq4sV9PHLQJB44S4UFZ6p3D8XB2BnRC6mMV2sypkakK",
  "key27": "ByWLtJkuamkXTVZ87bQGSPMRGhNPUoyHrSLUpTmtPCxJeEQC6GqX73QBdUX7yjKjcrDeUhX5b1vQQWDpuW76HkB",
  "key28": "2YGwjZoyUkbLMpiNuD4QfNiH2inZGPMtkjGZMaKn5bopUk7Q2nF2Ls7vtAByMFvJNyJoyWZ8ZDN1ntqSG4oJceuL",
  "key29": "5xSFqKLjGqFhCM3gYDjPou8T1dn4Ae2BvFFfPD6tBxXfEfEh4ep96fApe1ofHsRVFNmkQ6m1jCKpFFdJsyjVDnq7",
  "key30": "2xanVNijdui2iBSYE8saLWWjBtQQpqyDfzvECdnAzNj3HA1zREBrxDcCYuwqUdZfeKr3BxQSVVv81v8WiPZ4i3m9",
  "key31": "5G1x82rGQTdLKdKruhxnYnziUukJfra8b6g2kgzdRvKcfmhNGbC3uYgJ4oA5HrHHwCQsV9D65jkLDxjL1mqBJD8N",
  "key32": "57aoRqmDQBv2RxCYzb2oTiBdyeDJUksc6dcnqhCxDXX7BBqitYhHVmZkEyXgsqx234KmNwGfLeHFci1WykcV4aki",
  "key33": "3PvcjBUjzLDHGZMhFQXewKKV3URpkKs74bgJ54jYZ3NJZFoB9mXYD48AuRd1kc9tkJ3VXK4mHtpY3VqoXt3ic2AC",
  "key34": "SwNTF6EVYwoeAwP6FbLzXKy8CtR8vPpU2tGVWshWxoxykcjHust87b5SSnFw9EYtHhUPeMTPqYB88YC7H7E88p7",
  "key35": "2YnMyxUqbFypCNwa6STcCAAcznTDbKfNkzdB8qVcyhSYioPMnFu7PYejRsypBgQgfJ7VdW4FCpQzRPFUZkFh5UgR",
  "key36": "2BVDZAKLjYRPAEfyogjjhEU1GLeafxXxTPdzxyiLYjoQux36V6MT2dzHNg8iymE3fZMz3ZdPz6EbLzYBYd68i9WN",
  "key37": "itpmnWJoM25LKGAYszVnWonMpLgUentnGnXES5KSCKocEWC4LK9nfZKiRGHpxZZxEhhsk4BF7MxknTPuVXiYQTc",
  "key38": "4oF5yfywu7KiJHvSk4wYSuNMbwd8cWKRnBuYQ8pmvkcNN2RLrsT1juwbTDn2BxtjLsAMQrLvzKMbmN5ZxLThm8i3",
  "key39": "2rWcy5BQWZP5nwox8MiWNwjUNhpfkPDa6tM49u68DDhVm5CPRrme38PPmVQqWUV6tMJEncFQPd5NdDe7B1Wzxjzd",
  "key40": "3S13D9c6U6ycTpYLZkbRXLdQQGPtEBinmgruZ3NeX5YK8TLQ5fYtV9Z5ZTqLvdUCfe4FoBVhoixU3Dg71TKXjJsK",
  "key41": "4jCE8exQ6g2rGx4yo2aCLULTncyMJoD9xMrYvWBh1DCkskBFtGFyjaNKwAtgGhk3d7DEVPFVjd4Wd3d9DM2dE1sD",
  "key42": "2gLQkFnqLyEwbERSVMak46UyLSgc7UN1JKDP1f4F3RtRm4ngFSQFHPhFcBvznQ38ESRUzPeh6dHPM8Vy3v6UMrds"
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
