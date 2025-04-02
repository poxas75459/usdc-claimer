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
    "64W3sDhwk59sWCt2jdg3S1qCm5UVLh9wVDXMvuVwx8fTzKkgPTXfvq8RPn2UWZHnwP512uBHr223niZ4eoRYKGJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HKNMepDonjp9tHTEQ259CGZBT7UTWrTxqufRzrizXwXxBGdE1Sem2mq9mFqdjRrxXPjgUamh8D8jdWASH3E6dZD",
  "key1": "YbgksD575mCVusz2AnreByCVbt9iAukD2xUBzfbYUQ7u6gZ8hCRHwXwqTv7xDE5o6B11A7WAw17buKyaHR66yr5",
  "key2": "3RZrU1eZebx5ghQrc4BLmomNCNgDn21gicUy4g98hPUeQ3erzprwgbSpnEyU4kxqJQ2g5iiJv3QMCriN1rUfubMJ",
  "key3": "47cDFDdwK6atMqBkPaJBdE6foBF5voE5QbZLRcZQGdAm2jPNpTv6Qgm8Nv3khckELgzAUCoRBHyCbfqA7zqVQyf7",
  "key4": "3EHqTc7XB4TeAogkkhuTt8TU11jYE8gEEzxzMhLqsaHJRFAsrFPJjD6doi3aqYtBYJUsia2TRTkeF59976HAwyVm",
  "key5": "5S7qAGH76m7MS9Tu2PtQwiD54nHdU6uw699p1P3xw4ZAhDFF62DCcczzqgqvJc1RbFd1Hm368Rz2A67oKYbnTrUu",
  "key6": "3xS1oazGrKkhGkD2msCi1aTs1VxpR53eY5BMmptewQnzyRh4S1EuTRB6LwpwZdfM4FF6KticJTYDxmyRDwyn6MAF",
  "key7": "bQ2Urev74qhUdKc2HWNN1DSgqdqkf9UqQQSb3hBggKPRbcs5yZAaMgGSAfT9MFRXjnpHtYQqvau9rTEheGU5Dbo",
  "key8": "2vNCKBbbUZXT2pBERgSn5zUsTvMBDG9CfHUGVHhScfReLfwnHBjLiiBprqnrcbiKpuMDECT2ga3GuzVpTCH3AwiR",
  "key9": "3gZP3P3T68jdikqsVRobRkPh6wV7U9Khr8Yn1ujAtbHiRhKfdgyAG7dXTHoxqT6jvEKAoRnQPTzW9t9yYBKuX4os",
  "key10": "3oDAqzBFMKRLPiKxLhyot89vQxL7y2SKtkmxMFDGS3S9KWav7ryFscE6HkzxURJcLFw5kwRW2B26GFEQbGT2jx3M",
  "key11": "LfaDUTzRoe1zH2797M3jvUHDj47MSmABBk88ehjodAUSduPcFKTWjhtsQz6VNrSAwq1Q4DArgX9zxbesD8bHK75",
  "key12": "ijSkvLuwS5o4mB56416CqAbhgUBH1j87xxBvYa4NTqQrZ9JR9CxMNuCtTn18yVvvLhHd8mPTRXB8GhYhTXWaPy3",
  "key13": "25qaev3Pxhd5kkAMoUhD43jex4FrnAKGGqgr7jk9M3CdxAbsAswpSqApzTnPyEt7pMJqm3X3Nzp79beq9dT7akzV",
  "key14": "44iWQgrkGKq9iSUPdYUwJEttNqTEUmuWG3GB3XizQbwaPGwN5bhf1DiSCoGu4mnwWuRKi6pN1bDiQAdArrdrfnYM",
  "key15": "4MgQBMyJk6UE5SLWvvKgq1FMEqohbsyya5wFFKUgLbkBon81pJBhqLeZVMGbH6VvQUpxNydF5uz2A96QSbZULfcg",
  "key16": "4gQsbmBovERAkYbKWUzkaTHWzBz4wcB3A1L9w2JWfKxzuCkCuJU3Ze1XBZSvRKxkQ94SV18h6z4u2yTZcuDrkAva",
  "key17": "2Xo8CrEfgvdV5iFDkb4rPmzeZe4gacxZ7ziYytX3rZtWm9Lh3Fi9BzLxEJzZNRfL386W5G8LZHD1Vq79BNPqVY4h",
  "key18": "5jr68KsXtcyLPF7V4jmDpamS6bnEEk5gG3nv2wMyPRNXbaEBbyBfQpuLeFjSobX3XGTusb4uTVoN69w8WxYJk43T",
  "key19": "3ijhnRoW2YbWTELQq1rA3ZCFDfkkSwXGxtkQ9nLGLxnM22qyzJfK4gryqvJxxPfMLk5cbqKRcbe5HHbXSoCcrZMQ",
  "key20": "5upg7vJjYDRov498ArhyEca33jmY2LwspJ7Dnj2ppuidagzr3AXV1xAkDAFJksBjy3YA2Rt9GMjPxzJQJaS9v5HQ",
  "key21": "5tHtk7mFTPQrjxzLF8sVhJKhUGXt2vdDU4gof9aPmHhqBv2jTQp6ryoAQrzxwbGGLekXXVtqoWizjyPApxgMtr3Z",
  "key22": "5qMHx4YUXwWmfpaXjSWyPLWXosoB2Q1b9nz6vAb3uj8G18E5ZH5Q5vzRpHzRawJP1A8uPa89LB4N6Nj7tfAZJXvg",
  "key23": "33kcPEbemjCLkWmjAn1xqtDcFQt1pTviBoaESYXBqQmRgQMh56XsJ1CLqSB5x3u2NsThPtH2g6HQAsUt5fiALf3L",
  "key24": "2gFeBMcLKNf3zwm29K52uC2UN3o1cymdM8Y2MuRzAUMkeAMB4EzVUxRS2P4BziZhUtUFBfey8pGdVbRHhayiJEFZ",
  "key25": "tnXBdBgqDy2qzFTh2i1SdUQkQ5AfqAH4uZTFQ1xF6ER4TwxVyvEmYbGCNw8kCb2wz4LEWkeg2EQ9zTGqxqQRzcZ",
  "key26": "4D2j5xsxGQpnaNVwaMjCfPDtTf7vKkzUm8yRCDUMysaQ6K7AbLKamtkfjKsPDrhiU7XdBX3P7BXobChUpjDcRpZz",
  "key27": "2EtadBMjuBAXdaSpm1oJwCqLeMtGK6WC277DRiK6VTAWEr4mX6WJPjRaSibsS9mwRP2x2LE2zGHzb4jKcgHpfm9K",
  "key28": "5TF9h9qVoqnHUHPBZuxXVHpVPii7X9fAWJD9FmuXEeZuh3rieUWaMuvocaqErokPM4YimN2WimfxSHhRthTbsq7h",
  "key29": "iX8Z7N1W2VtsB5TLupR3X9xaGkPLSHhqSD5DMbN2BzkAuhki3drhBSD3TnEbNqTw696ZZaZAipVXKvmF94SEUwH",
  "key30": "2XnjwqE3qwPimFXoTY3UNVcijB6mrVUNKxMxkXNUydCmmrtzHvCSAvKDqVUUUfsF8RZhe1RLL6v6CELVc8Njkdh3",
  "key31": "7KquxPge2EQDxFUvXAzBENzzEuJaMgSzD67YvYwor1jWaNcaXiTTDCmWEPJJjkF9aVJDXWFmLUSvSXsrHG3wR1t",
  "key32": "655LmGUsmf6CemDp6zE2Zai1PRhmM3faP7J8tVQkULfMpsQLn1haHGE2F88VKLEi3eouotbVUt3wu5RgTYEqLdRo",
  "key33": "4uZ2oeudrsmbgenqJYPWtyvLb7XGikTTDh2RUUP6ZmjuYRGf8DuKsrQ15cpR4FXRB2PoxhCTYtz88UtkLMf4Xz9T",
  "key34": "5FN4qka1zxwt3TfFvYSpMPen7vDQzdvcG4YDc3miz2iPEces9sgxcbBjboxJUDKDquxh9fXRuV2VETyqbfBDkJZ7",
  "key35": "25GVrJ9mJf4AcMXnvxNob6DfwuYGuggGQLiCiZzmqeTpGxZDmSkg48nrrjfJDrdFc1dsTCZRxnYWvnAVn8Ui95RZ",
  "key36": "3ZLQVtvLDGKrupEDELaRUmfnCoCDGSxBPSoaaW8mUddGrk2pguzvcba5fiWDEnvPuTmTbujjH7yw7iCN5Cr9oTAL",
  "key37": "3SdzoGwWVdWzQsS5YJ9F2GBihD9G7fAHCDYE7yTc6D7CoGQTkNtykm78ZTKi7ekP3KHpQpymKbucHYPi4yU9MQmq",
  "key38": "dittYEbHpo4oVW8YDNAbA4DBSnxZ5FVk91RyGdYC4SmTpcYKSVUHPpZuZwZRLv7MV7Gtsn1yvgnDZpq8YZnRVpp"
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
