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
    "etnBTihZyKJBsfBgQCGg6iubnt3jMuHKMq43jKM9Yq9RNDxrrMUZcz63kTKrfL19ZwnKEqCGA7bRRMzox44GjF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ft5otDBaHB3xxdE5fGRjFhFYuuTsVhFwcLtW4AuEzF5MEzre8JLW3B71QUMzCsJ3ci6omhSbf5kAvf3LFMTQ511",
  "key1": "5N6Md2b6u1PjK7qMPZEx2pZETzavmjaj986cFHuiXRMrzxxAnacKA2dZaHmZQMcknkdQBYKaJZMVRXuf7FBUdfw",
  "key2": "21udmaFB4duytBTqr2si4hGBV77bXy9S1oH15N8nJpVkYdZzixwoNHXYAdnn8rPzDUCFGxuj1Etg4FfspuJ6Aqad",
  "key3": "4FpgMVFhTU3U6pz4S9s56BgPhPfRszrPFGJuXNJKoXGauqkjejjMCvUsofU8u7xbWDVjqPTAGEAiR8GcvZTw3c3k",
  "key4": "qjJqTc5iKYP59B6nRbUjHE9NUEZoyVok6xcEoiuUf4NVy8HocnDRNNwr9829Sbo1Cdv72RwDkBjku3xfCkWD3hW",
  "key5": "5VekWy3WbGQJ8mtVC15nHMvHMRwTnLc3d7mXYyh9rDAMLbijxv3UT4GwVJmqrMi9N1LrQJLLUzUh5qHgT9gzT4Dv",
  "key6": "439zVd6qBhJJTixt9i8Xu6MtZb21sBcUAuJ21iWeYT3AoFisibLh5KYPrUTkKpUTCMUDpF5GATfzAfZMKWZys7o7",
  "key7": "3ygTDv2UFrBK4SWq7cGFeni899f7mj5xXeExqhbtN1FMTn9jmRBAsv4v5UGqxY4LBN2E6euUXhkxAPBMLESLDx6T",
  "key8": "2JWRfxBXjSUE9YNfdMvteCjXQ4pd6Ap6jWeNJc2bXHFCYQ8nVMUNJR3CzHH6scY5edQnwj5B4Y7njFTwDhD94efP",
  "key9": "5oxpRNGpU8ucMaZVAjwrU6tAcW5ezHUrVMghoGSWtTXkD4SxtkBejeWRL1pnsQs3fbs3MfDwrB6KszJQ3xFqQ34z",
  "key10": "5MUCPcCdACAchPHb5eCobYY6dJsrfnQFg14NC6KPRukzzLrUBHYvPPuLSunJKU1XrpKkf2ktG2w316b9hRLATTTB",
  "key11": "jrZAWzpNAxchJt2Mfwr73ibhKpddMarcxJ2W9m3bnhvLa3T37Hn5Z1m6Zj9A5ScaULkYj3eYGSZS2RGWRfagtJT",
  "key12": "3oooGG9qQg746Bt8d8W38hdJ4PbZoMyFN2S8Q6USLKLX51TsTick3PT3M8k31rBmZ8WkJv5eLqYZRVxE4THzUcRG",
  "key13": "5mRNSYPzAqmxKCzuxPtSRZjzLnYxDufy1z45gBZhn92mczK6NRavzukdcH97evkHdVp3FHPRky6MqVbkYr1zXENt",
  "key14": "3UQKtDfebzbfRuhbYkPxRTkSopCcGY1FGZjAkt21Ty4MfE7ciYU3gFG8oMbAj7DG3hSkRpchLcio7EjdtZgSieky",
  "key15": "2yuf7rKjZzuHAYRKywjn3oH514umnW3f5emNJiqVZvGc7FaSg9qQFfjKXTuKg5MoWoSDCKtZ6vXsoPkVAX9bmyPA",
  "key16": "4CCCGXmU1AK1sD64Xh5kb6JJ8sEpRKFgiyT86tZVLSetDv9Yd5weU9or7FEAx7JNZPhpp9zauC6hFp1ccxb2mkjN",
  "key17": "CVNBDN3Hy3B9gYqTJMdzvXXmbf6yZtVCndZzb9hc1skzRuztAo283q5XcQ3RUz7fzGyDhxkPR5SjVori5VyM1Z8",
  "key18": "5eSHEQUwJkYzruhjdKYDGCoPUkxkVEARxvfgXDUHhZzHjyLiW62aTtpY64et6n9gf6cqtJnns4V8PBmPKsAGG81A",
  "key19": "4gwHQczJR3ehkQMFLU2GPV5FbWPrdG9WD4eZoaypTEYgtW8aBaaBbUASuBMCP88UwF2iqDgx5rCp4U7ACzQYfWRr",
  "key20": "3GcAmU2cabFSNebSnpihwRKXR5ciBHSyJM2VLH8fVhwsod8X89a9D93kz399QYb21fKvxqVTNSgdXYfndC7W1erV",
  "key21": "5tQ1wHzBT6AQzcJuqcvdxPSdUw8sgd7xn4n2sSJhAXy6bKuRr2Qfq9ALb83zju893Pd5LvVmzS1AJjtegyiWo7RN",
  "key22": "5FPyr2c4cUSd2xqsaTnWwjybtyJLhp73LUjhHgeUtZaLF4rWu8eVFV61iQjiQQJhemDzUkipL1VJQCWPsKTgHisf",
  "key23": "3W7ZzCkJmkB6q7srPWerV7NFTqWisZkUroTeMv9RCtFPPic7i9tgFt5iNKTqLJjX7QsorsDa95Hnp44w4zUSQh25",
  "key24": "5njRCcnRdoU7MMf2cjJzcKp28G1HmZCmL54mbpGvScFZa2Z38vr5Tx9nCjU5wq5hQjW3M3R6QNEHnmgx8FFbv1Zk",
  "key25": "2YXN4WB8S9MYXMPZJkBywM5BdqbMK27H3csRBN84mX9z8kf6o9T7TrfFCXEVBG5uUuCwbzAJUjtDwkJFPKkjiC6i",
  "key26": "4rboGKP2TkbJMF8FhiNMcQ65BJH3EsHJuBrH5QurBYvskD7gacSgrUddtBudQkwmYBZA3RCuKpnWZVVXT3RyHxcb",
  "key27": "3npWwAYbs8zfYozwu6vwE4bjia6EzgoNh8ymfUhTagWNNvt2YRzrBLBunEvrnooFiTRANRLhBZXJfmwZEjk973Df",
  "key28": "64qTifYVvLWKfNaUAztHZUtURxrP1S6JPZLhVouEnkycBxtGL5FKX9zFpNpthThhbxx9xrPxvmPzsvaRbMsHb29v",
  "key29": "3Sz8V2h83fLTWb5eApuNMumHPnegjxKPJCGibq7PbwUcmghGJMXRfYEoTeqB2gAsNsCws9GybgNJAyrNm4UoxhaJ",
  "key30": "3fSCFt7RV8j3pk9HjXTSQ2jnWYXSzXNb9eZA7R8AXoniboPkxJXWVa3RTNYR3ArcVefsE6oLqAroGimFNpAmmaho",
  "key31": "3hMjPNsJWg9qiTNfjDKKX4TWBW1CSMsiurtcfQyCR55NxQ2tfDo9J5kRaijZ48XSsqhT7ZTzt828FH2Kvk7QdiRk",
  "key32": "1qbqhTg16E6zjSLd6VYod4wRnNN8LouUhqMeExCN9zAXainNVKBwXtdv8aZ8iFRZuHYGq4a4Hhkv1UAFZUN1o9b",
  "key33": "3rXoKn2z5NTu4prreSZCja2DjR2mko9fnjVLxzCwo9TQV9pXqsftb4XzfedHrJvE6f4KkJXH4kmGus8EgaVR2tZ6",
  "key34": "4VLxknmaX4TREEs4XPXdbmrRde9eye8zk3pcP6ey4MynpCbeZ1TTuesJ8H6G85camQmpzU3n1EnxzRCbvJ9Xrp6",
  "key35": "2TqHXVcKU1CHTXcKZrMPeSxumU9hw1YPxNpmh8h6MURujScH3n2FgVqca7mGr8r5zs5Zads4XU8uy9UgPhkmr5h5",
  "key36": "2Uz3bAvHeRLyRoHqBHirfaT8skfctoLFRh214Mnk87XLoqFuqhzmsjQLfWRLgnQx8sx1UTgKTG6FxoxypYmek6Tf",
  "key37": "5dMWDk7L1Qph5gpFUW7ygooKmXypJyzfbdP5NHM4iCmo6wTfgtTdTb3QnSrkAVMbZ3KNLHwthHD6obreUGjy5RXe",
  "key38": "3V64x2LJnvq1iK2CKuPZgAZJQs4jAYQkjiQ5H76Mvw1tok14kv6Nfxo4Yzjx4aEDfxdKR6gjKCuHi9ZLgUAcgp8z",
  "key39": "31T9AS4iPFBwM5dg314NZBHEVFG1cphASdA4g1A6e1xyrkL7Q3P7d8e2DeDcK58wKC6tN9mZU4yb8xfhZi57irnt",
  "key40": "5mgMYUw6KnwWzzN7cRmwdTRcnV1Np7eiRuZeBXABwF5N1JT8HDTP547hepdL5Q1ecwqkxbz7sAztYiCEaFMBRMnk",
  "key41": "f7vQXbtdm3qrDqdSYw47R9fFHK9fVCc6GrMkgrqHh5q9y2FXThFHhKFPZHYm5Hy36UtvY7EgHxx72vFNgSvy6rj",
  "key42": "2XYe1awr4hh4qFHGRCitXESX2pPK167P895oewjzEe3ssFrDWMUWR5Hf9mgfhc4rbsNySAPji8uSoJ2EHshWk2LH",
  "key43": "2bQDxdxtmiwf96pvP87NyJ2Rbh8CEbF27q1FZzxSvragqXWVBpBEYsqPUpsn2KkZLALEtQnqZEx8HTydkTSBsxeM",
  "key44": "5mASgSJV2VtRD1w7PwZVNumsjhKPjyX4mtZB2JZBjnPCcX9do5Z4aTEbq88crNeD72idpwo1PxYtyjyiFt1GmZMn",
  "key45": "469tHF4BqskdDormFVTXHFCHarwQY8iKgT9fLkKTorFfRXp4ydoL39QpSmPFEXfkz5mz3JQoiwXbNtctgz6NnaTd",
  "key46": "56cAsQsNR9Gxgwe2PAXgAu11Uzc9zXmgYdzqCLNA6WtJL1DEUb4QTU5QFHCZHQVR2bWWVs39MPHCZLi7RMeVb6Za",
  "key47": "4fP5vQGcqwV3RGc3uGdw5DmEQDoYQfYtU43YEMvhPybC4NdidKubdFfxYmfUumjxfttXWGAA8RyPHcBGqsEHcNtm"
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
