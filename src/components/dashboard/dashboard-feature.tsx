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
    "5FKaU9PxrsmdiPtjDnGMvLREvDUD4ieDahib7ne6Ur7zrmXjGMquJs6EJZshkdVQsXCrxP5HF69TXsDXH4HvpRUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oHTwgCqtaoSYHdDqFdjaYmU9Md3cEFQhLqZePacgivKG5whweJ8MRvccpU7yMU6RdQM2VsJedtEVMrzx6dQPWph",
  "key1": "2N9Wc9sAAcJLUEyEmEScZBN6rbkA45LhK4T4NLXYyqP5WdDqco7ndjWHChhpKCHmRnD3GDV5qRqW4tvpGmx97JGu",
  "key2": "R5prBNEmVD5THHYYr4TGgoAVDWBXRWznr6Mw7AgxiHdzukWd3WXDGbA2nT4BhDbFtBbqjbD97J9zTPYsGYCgtE2",
  "key3": "2jZcZMe3Cy9EnDZ4ZQdLBPPwgFtrdaHDYjaDEXdvysCyVGo7zukcucjBoxUBoPx3MsJHnrBo5GFMdZjWamtLupXo",
  "key4": "39TN3U95Un9tiqoEaxbWDFSNGfBtZtWZT2tLSC6PY9XK2Ed7uQVqnGnwihuHjyVbw1AXhqPMY6LtfkLUh3xZtajB",
  "key5": "UJBEWnpGyz69QyMQ2x1WaiNfNatJFWRUKR11PVM2Hsv4Dokg3p5C3Ev7q1LXoq78n71Mz19ZBYvHsf9EkhA8iWU",
  "key6": "5yVwSZNnKmGq7NfeiQebwRXQH8MDLKv7R7YdAxhUM1BLkJq9tDoM6gU7njCvooWW93aBp5EU64b76r2GuvrxE97j",
  "key7": "33qzdP2eVd3NDEHLn6VPC9zAsjRYypxarMZKXb14HWV6oAUWbZc4rDUpB2D1X7tZ36SceuQdvSckeg7YQM7qvxuD",
  "key8": "4eZTBD1owspfnqHbYH4d8NUWBx5CTMWAfFe2X6beZBjYYCne5HcUoCZvxNt1VW3ssjsTbnygoCURYDeeaQwptDjN",
  "key9": "2CbRqT7yKpYs6AJDvAsRMBmQNbrYRHbynQ9HTf4x51k3pa5mMhthiW72rZagBEmEyF7mAKYPJ3ArNNFteZDiTSNt",
  "key10": "2gCRxLoFQbufrJjySfgJgqQiTj6NhZpWjhvjFFjLMH7FPpSXHDLcDqGMqTvoizy8nuLfXfDNCEvrEHDop16hHbTz",
  "key11": "55KtFg9sEnZc2hWsbGH4ggpFxHdAbmf2Mb1LhXtCQWh4Zyjy1jwAjLJqxDntRno3Xm97znTK4mmZLnLLTDw1oudb",
  "key12": "3hTLopKPMDfQaDHvLXvB5YjiA393wYZKNgG9RFdnFBkdHAR41sSPs64eLgXeuKdow7xvuuXNJvN565jBakQX3PnX",
  "key13": "37U6bxiXjHAGhKSXG56vfCRrAcPLbyNaMqKDJhgLd2DkPAxSae1Uyg3xQmB5S1Yrw6QPDacpiJV552FQxVX1AwFk",
  "key14": "23s7ppF4FQjkmQ1n6T7RFoTnTdjQjJYnSiVzpx5Z7rmT9GTHcxLfkGJPnEANLxkgsbZHgu9NWSRdR23x7PeTBT7w",
  "key15": "3xG4sSu5QjUrKYLfrcYzWVAt1ZRuRfv9ukgvRE5HC74W1ohpU6F75WD1Npfc7z6u9X8j6YbH3xXmgTxaqLxg19w4",
  "key16": "23W4hV3UhYJGxnFxKgKhQL8P1gjWt3x7m66iww1ZsGeD3DoWM5X1R5BeFvNeAtkux4dBJY7ZXFBMqsUprSsZNRVP",
  "key17": "5mhRRTmDr8DxmCZZjVnHiMgA48D1JVW1NveouP8uFAp593MpML9fySCVXnecnanGNsNtVM2nKymTDAYv8sJwMz5f",
  "key18": "YMx1Vau2LwgnHtGZ7HKsKxdGx3gtQJFvZev1ZBadWcsUzS6NJEJKB3QhkWrvp3ihiUkcbAxE2VWKKpt2WM9isCF",
  "key19": "4eGhuXTDjimiX5dc82i2fvbFndG3uoThJcq4L2F6KPptHoNbB4uXdo4aXzWiysTG111D5xkJSBfF1t6unKwakeAD",
  "key20": "2wYE3GZf2SoHDDiR6QnN9S7jxwfTVyLLSzsomdZTWy8wkejV9GAhi4FkxhG9bpwijb27YnaJA4x2CAm9SYPUpDBY",
  "key21": "4oq2W4D3CvF7Q6GkjnBUkHK6rciGNxspPsVEvtF4ymQRdUPPPqmpjqSYTviwozHmTG5qDy2S2C3tYCtscZXsyHWk",
  "key22": "3dDAF274CYdEa1hJMwpZHkHUBTYC2ygZjn6iPm9jwjS3GgrUaN36VaMqBN5kPEPANRY5Wz7Ga6pv6KdFvHY2JMo7",
  "key23": "5KHyoj9Sw5DxXndiEv51BtBnvB3dDWKYL4eULjetcVKLcHFsFeMyZkWDEWwHTG44r4fPva8eA48mUz7s5bLC2oDd",
  "key24": "4hD9F5GqyVr67xCU8hL7uDYEBhFHS3u9HG4CiVhhQVLaoysGUUd2gzwrFPGCn9dMG3myCwRu4rdtbE6zmc7xRsug",
  "key25": "4PAptXvxHoqaK798LTgfWmRVJbSjc4VbQxS7cuskXtijUGxNHPWMJDyNkncVSyYjaY3yiZyH75tS3QnqLhXa3dxg",
  "key26": "5HvPBYQdBUsT8N3RkQuP2uE9GvKB91Z6UasMUWhUGP2BP4cHrTZxAbroNYi7b77eUwBsvjNRZnuigvUFkKUJrh6N",
  "key27": "4hqEeKD3PYU3oKQcMnsqGTC3bCCjT59MzcZEWY6cuJPwYmyqRH34dV7wnGaWMpwrfxYS2WpyCtYb99ftGnAiUNTG",
  "key28": "5PD2JnYiZGWyQ5j6Q1CwJFucvjEhQuSemH4FJ7MAtgM8TUDkmhwbzBTWtsKLiuXpi2ow29dmCmi7nj6A85xvck1r",
  "key29": "3HAwwxeYdyC8dRrkfXp9QiwTkoZ9gxbi2CrTMbvzUxQXU935bNo7cvWcgjr2f5TtKQ6QByDFsfeaR7XGTMNWkrVg",
  "key30": "2bQterfmjJexw2GThvRwyVQXt8BKRJwR6Kd1BS7eoZvBm8rhHnznZGHtK92hssyzHFtLnVM9vXLmymEUANDFF2UU",
  "key31": "31gWkP3kw6Hy9MKgH7XJwWDUTEdtPfqjHRkDZiJYninDCwAyXvaCo9D5hctrmYoDqRfCttaxFwa742T2zBCKgCMj",
  "key32": "5GJJdgJebmA9HK1UiGbtiVx1WUwk7VQRb6FSAQBbr2NixebiTgheTYucREz475YCC7tKxpLmDY2g26ZArijujRJ7",
  "key33": "27VabJjQ4Xa9kwno77TbRdCMHRQjmr23Ud7m59UQAoAA6LrTY3FWPn6EhNeUvZem4d1KjV992NSALWfPrw8gCU8G",
  "key34": "pWAkNhZsZFDhrQsX6gXEwGfWNqESPH9g6L6CLX8CjPPop6mBT6zjkbpgsnz8mvrB8dLoqcdKhiPnuKfR1xvicda",
  "key35": "3zcSdBiDYXQgzfs9zaZDLmZJoH28wMWbpzZC1i6v77Z8FSoFHMXn8SoK1BeaBA6G2AYkrf1E11VAhxg4cFDe35XW",
  "key36": "52LNewTr7kEbickphrqvpcgWKnohyacGGAakXZAmiKp6NqgUmpvmD7hho9CHs1tUHgVF68CdRk3R4AdEVcVECKpX",
  "key37": "XtshUusnZdt5Nbv96EAHNoMtuGE3uNoSMeDqdyVgjHfu1tbhDignKL5mp8h25zH6AMmSQFVEWEvWeKR4U3sGSAB",
  "key38": "4q84w7iCNbkFPBgSCTsAbCpzbycWsfvuxoVbrpgr3MXLYiFicDUsW3ocnH7ZgRTeioZRHMJnFLZyDGcSdXs6fsh4",
  "key39": "625tzVmCp65jrEfoBbTYF7AFs5y25yR6TZ9Yosav3G5UhXESnUjvvqCkKzSq8S2eho8Vk5muP9NKJPWoLv71reDC",
  "key40": "396WdXBFAuVcrFMihRHoPkbrJcWHmQd6uUxpVEZh8qhtQpJrQ7zKgBeBYK9VALwnrrSzCGXbLouv2k8sY3UQogkF",
  "key41": "4g1oCdsX1DHdbeiBUeDGvVF1ytryPnJzK9GiNPENJGcKn3YcrBtrKagSfsrtcVtnftW9uzh83U893UWvAA8DaQB"
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
