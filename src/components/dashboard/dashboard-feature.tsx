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
    "3R9gyEgMZGWDx5tugk15uZhMLhJ1su18kxfyaRUAjmjncs5ruAvceLQCCfwJj49ycCLyR6DoBN6MDLTMurDCahvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yDzHTWEhTTeKUBUr5jroMV62ggmshscC6G7r8UJ42bdUgVYKoTUywGztv9WK5cwqQWtpJJEHZqneVcspPtmUe1d",
  "key1": "3uXFNE4UGEoWQ6PM6TGevQcvUfw59zTi5FdkYfvMF11ZgwugbAGVaApbX9YkL78mRJRwMaZpAessUK72eReyD2tV",
  "key2": "ESF8Ve91GhpxGKfWvN7xr4TzqYrqF6BT24dunDDTW5EWGkGeHMSJVbXXGHmvJW2WW9HNNoFkPU1qxAjJff2pst9",
  "key3": "5zLYBnPR1LSUFsBpQotQ1Wic8gkHcLwZdyaJLcagYtgfyXFiVZMnUasKw41K2MfHj9799a7zYTC5rp3NEgry3JED",
  "key4": "59pHjxhmkudHWCjYXtJhYmMGjLzBP56KjasRkTmgKm6cVvqjf7b79ASwJLBAoCDhhmZZZssSyXFFyBVYemL3E4HY",
  "key5": "5N5BN2mopFDWuuyJ9VrAzzG5FR7dE1wcoAKtfdt17Z6dquTzsxL8W1XifFAKiKcxWd7YMaUu2TFNfYo6CrwGq8Am",
  "key6": "4GS2pkpPfebrqhbTTF6EDwiTALHd5k7WibhWoDDeYs2MPYUAdmMaRmfUGpdyVq6dyuft7CmTKpjUGcSEpi4idq4u",
  "key7": "3VF1c4Na3p32SHqDQ9yzJAfU5hfZkYPieJdGsSuqayywuRhAF5itme76jJdFniXAmwXNkQyEFUnm7j75LtfHu5ya",
  "key8": "3EjevBhQZPqPDDjnj5LnQhrBZ2r2cDFdb9ABM3JqJRNU5ik5jmchYM9swp86Can5KGYMQpNMDR8bCaEnqfT1iMSn",
  "key9": "5Ef9H7itZGHknMJHau6zFnmGyCTXKNbFYHHdTRM5rfi2MSoetv83k9tYi8P8tod6sUwNepAEuXTi8ZFQJ7Uiizg",
  "key10": "4xrKmNgAkUiZpwyJjjdgSKfuZUfP548kQFVZD3HbZ5XBTEtorLHXhNh7GZxYonb7gJ7Ppfpqkjh52uCXtr2c4Y6S",
  "key11": "3UtmWptA3uvKw1njvKZ5mA51tNtnuPDcQhtx4pPu1d83HDkasmhVV8KTzsc6K9RLNyf4zkre54YsxTpnpi4gygpY",
  "key12": "47S4VwmrMmmYNEp1vnoFVL4WVwRKbkCm8mfKBCXRgweGLVQoRawDAw9u2H47zVWsYxRJv4y5uwFyFQssKjxeYusE",
  "key13": "2GjrVtMB7Rf5KnSR9T69ZrDV2CyLBv3wdNsz9a5SywtxGhUbXdz1Rb65zLYAfSfhkJcEDAkcKyZbztdEGrrLMgXK",
  "key14": "2BJJxFrdiDHssVfU3y1DBjoRZbcKHjFRLJt9FUsz2qFeqj1Gx5J3vZU7CZaKhxjS5UFdNZertRjXfTGJeyg41oHf",
  "key15": "53vojhsmo57h5Esci8BFroqmbYFHQcSzcG9eYqhFL8Am2CYJ3KYREJ75MN31v6H2KEsGGVGi43S9k3wxBdH2cnWc",
  "key16": "2tFU8sU7TjhVFtJtX5RuzocffpiLctxh8V9PdvUXoXrigZJ8ApJVBdNP4LLxQrSP76tXEYE7dZvUEQCVsh9QJ6po",
  "key17": "5JiUBEL1DYCtqK8H9BN6mLR4Ndz4eepBKL6osoCd9k7cyAVEAUka72hhMoJSsLx4BEJzUE12USdEfiDTwpTwP4T4",
  "key18": "3tfXCJXaNqa6cbt7V7wkjNg9VJkFA7bMv4amposKaGar8kJNaB9X1WKU4VYKhsvXwL6QeYpyZqKGQnDqvtGpks5o",
  "key19": "2dv5yVAGEya3UtQ5ZXzNa2GDgDdkGDNEMiFnxXVJzHzVnQgLqQ8yAEgpMeqcYVHThKLqh7CYgdfACLLW6BW9y4Hc",
  "key20": "5QeA92Jgqhena6VfMrYkhyZ2cLNyGvqTcQ7ofUpJeaqFjFhCGkTTb3R4Z3QGBFdcD28fnEq9foHgECB2fVTUe8Xy",
  "key21": "5McXqEAMFM4VBqsoD1q2zENp6S9vTHaG57s8YdYU2RT7Q67RswfgQTq1XjhkuQ367wJjhY5taksMNpeu1uhHxyRo",
  "key22": "nQBPmv1R2HAsewrYjhnoR6spNDSfpzaDCorpUKU5zSpViMkuDwtnh4qRjuxddBRSRUwMXtsp6k4KYaSZz7YwEVK",
  "key23": "7NQdNCvW6jvCVgqtnB3t41J5e7iXUYfdyELdCJeneearB58AxYeHpHM3fTfBHzjwAA66CsZpsGAVcASYc2adpXX",
  "key24": "HPUnmJhJdeZCjo6SXorZDAQGwuvQ2K2hjcFNRNUbUFyxmyVw5GmrJA7Dj6rfTtS57VQ91x5rxByZ6WQ6F8Yoxsk",
  "key25": "2kvXvQAeDnPxkpG9wEGQPGzSTPqJFt2rVCwqp6rLcC6VXfuMUMtaV2ypQU9edtU75VwuVvUc8kpkeoU5bohun3SX",
  "key26": "5K7iihezJkNnCcFDCDtMpYmyghiU6adFCNDLFsn46gmvgQjAUQFJzohMbVjEhJ3QLaUwCstuAW4r3UzG56TnGEev",
  "key27": "WPC7WnubufYzhk1JyP9md37jHm38t8Ltx7P7aU7hPBK6LcRSUx831UatFCskYaU19Y9BLTthZYrQWC2HfZ9SfBR",
  "key28": "gyHgF1TLkbyzSTPZ4XjfvigdgZvXug9XHSfmVVar4THJFzo7HrF6xqVMLe7qtPG24g7emX5MccTYZNJ52wn5CDg",
  "key29": "2ZMRfXc1BxKeSbZCzvzSh3HTyEf2Kh6B6rHjEMvXQR17eqyQ9PapQx6THHcGNXBByPwB5BSA57yALvENbThw55dS",
  "key30": "3HmvHczusvkGdoj1UwGuK2V7tXGrbu6QNbxihoQ5DZbcstuNX5wwhD9kvRi1JNr9rz5Lub52icRaMz7h6W41X2Wh",
  "key31": "4pgZKhqHRXrsco6AzXzGqeSwVD7RzHUDPpo6uDzcjMNodtRi6f578datf8kCAuSEjuU9ZPBvJQs7jSZisJksNGkn",
  "key32": "5stW3qxsqX6oikdpV7e4iELqyPue22VJ14gkuYpSn9aamWgRKWX9wup2tWn7tVuJW8KojtRYxoBd1kyXkjTXLj4j",
  "key33": "4hcidBFYP8wpf1AXJ1X6jQqjzspK4B9tyZPzrnQ9dtXrhg6cS7Ffc9J7vA69WCjJjdCxvfYX4813dpnWgggLPruZ",
  "key34": "9KzEYEEQzzsuxpMNHauRY8RJFro99RSg5wQd2hYr9WFzG5G4r1PZroEMiybscSgVJwAhFdfCDtjYabo5DsGg7pK",
  "key35": "bC5nKcyZPbwF2JTWkap4Gka3JmoNckeGDXqk4KGEnQgEpNvpknjcWdftVAaMpGg1xgwRMmMkiztPMJTX5rGAyWL",
  "key36": "5d3GtiHmxcCU5w65XLb81fcKks4s9QtsgM1RJ3R2rMQoY7YXYz8BwYdwXNMRXhF7ZQEiNR7Vfif3gcEH1bactTS8",
  "key37": "54wGWnyshD6DCjzmnMYX25JssSLh9z19WAhUNFksPvmY8mLsHc18EWCvDotgWpGeS7MiZcF5gNAHxgzuS3RuXzNz",
  "key38": "5wcm7enaQ928Xwbb1hk9DGTqr15JU4HvZUJDyBYtTtMow5RFGoL94Ktn1MqxZivus6QDYb7t5itoNrvJqyCtk5zo",
  "key39": "47GBvCqKpQyP2M6i97q8KJqyHYbWqkk1W9Cquig6GnJ3oFbx3TMbUGSEmS466okPVJZ7cJ2ZE7kAg2pxR2nvsRxq",
  "key40": "3fQbdF9gD8YCchHnSNHjCzPJy4aKVWymkdmy6Smovc9L3s3mjRHiCm9XYSkG474oJ1KyALzr9sKq3rNuE1vLzizt",
  "key41": "4ef9gQT8kVJsfG5mbaf3LZnRDZz6qZgL1YYdmS1TS1MLmb67V9EJH8kqKXNMLowYVf5b9CXKuMEubDjwDqXfPFv8",
  "key42": "2XmxMLhzPoCBJZKZgiYsD8KH1qEaAKcVCFtaMQoCvzreBN4zqASMPEUWsq1pkNVmZpZzqyUbUJ2SF8VPvqcuwF3q",
  "key43": "2rnDKZvgenPQZrdgNFugUE5CXGABSWzFp4yuoQLG5hPSp1DUVWXjsCurZKebjFspBQznFCnMXmzX6SaZfVxVnDV1",
  "key44": "2Mxy4r9PmFFdBn1a11gqHu9HSUWp1Re9CKyXZgBkZSq4L2Wf6rPafTmndQmHhYinz6Z2Dvmdc6FdKKRpzMWxVFKr",
  "key45": "66dWJwtaamvCLtBW8KeQrPV23E2CHGA33YJee6eWsHNEEU58XhJB7MF6v3NcodktzMJUYZiVmPduodswu2mW2VqS",
  "key46": "5HQV82i2GUfjbnFJ3ERqKRgT6DS3G7VPEkk9qcKkaTrp5X9uPo7JUwFY4Nca4CAViR76A3aoNVRMqDtFJwzga22H",
  "key47": "3eigZ4kgNNz2dEGmUAz3QochFyDzh1bLD3kJbjBCPYebLEgAHR2ngqwuFDBXf6xBuJcwvSkZJtruVfQu7YxFMnTc",
  "key48": "CpDX8zBycHXLrBvWsmjyRuJjicHgbRYW6a8A4KfrqgAbTzcMK11m2AGkfHKNBTc6RJ3A2YFws8ozFdVjK4j6fnz",
  "key49": "4afTpGoYAEZsX1567JATTKaE2grQAeTnG7H1KuUsCf7jMddor8eCFpSfqkJKsEiwKCRmU4qBt2WL6ezJssCAroY1"
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
