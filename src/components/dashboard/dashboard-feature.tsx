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
    "2Jv3wcyPFbfszeRdYk2yy8y7mFbsdPrB3t1s2KYZXgMpbpnoM1T3Gowms5zRE6E6qzBvzct8dAa7fEWKnSE4eE42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4REaU2H9bQuU91SbDpPiUJsyw4wjksC61ypjXtYAi3UiY2CEQy3b8RCrDVQEEpZ1hQgiuQiW9cwNTwr3kBFq6giw",
  "key1": "3BdVr438jcRP9TkXma9StLX6aU6DgkiuSiz2VithtnnNNA9cHiMkSp1oNzBKfL2e4H2PSymrN16kWhGgXt3isJrn",
  "key2": "3E8CaSBd1e5j5LXtFNNYpbtbVMAFHaFc7m1gDFx2sXfTezsfzuWiFJWn7Rv8sTgTWvVLReq3KrwDEW2dzEcwfJdE",
  "key3": "2jHuMFZvRjbDakrrNpuJpQfJ8bzzLYQ9ySPjtfUnPV8VqmtkM65mnxchNP8JjFS87D6NanHBFRtFVwKDVizk9ry",
  "key4": "59L714PpdoztMDEgwnQXzPzt6QABuzvPxkfxiLNYhvG6saex34knvZPjv9Q31u1D9w4xYR7AQCUWgTxPkb8H9LLq",
  "key5": "nxiReAieTwtgB9PMYz32w4zCDKnpr895MJCXg7DPRh7FWCTJtd1pd1voFRxhQ7XaK2YNkFeDdmctrwALDFyR4YY",
  "key6": "4UG1kXGr4RMMdnJpPZLbxBCGTpZudnBcFvypvYLSwPbhY1Us1nL7uoWSVo2tQ1pUDUqDRXp4k2c6KH1RW2F8ARe1",
  "key7": "4uD2wtLdr2r5e2yaRKdSFC8ZoVDALsncuTUuntGs8BVWizxKKL94xRFZb2hETzeoHf1hu1mj4KPq5yEVgSoCAMt",
  "key8": "3sqpoFatpKwKGGQah2ETEzXAc13JwpyC4xuXFm7scWj85sDrkt1hoHPQ1ebcWE9x6KXMB9orUdgN7z5C9na9sg6B",
  "key9": "5DiqD9exFU5pkt6LUM1rpuXrZmGNF5YJn9ZY6LbHQYxhw4N4NLNhTtRDBjHhY49KdwnzLyaJptDLgybBrcZiuAYX",
  "key10": "4zcv3sXTE3m7od6B6GkzXXrvsTxyioGM4q1wztnE21ehbCRaFBReGhBqLV1eJevVXNHocbmzw7pH6xgPfenjgVfv",
  "key11": "33ZW7QZ2mwA5SxsfAwurZbaV1mmqdYEqoyGY7S3BgNz3BcDKHHnwEXiwNULPdtGmjhqNgeWouCXy11eYTS79DCjv",
  "key12": "4M8MhjSi5aLL1dCFbm5E5fL5vP3JFZvVqY2vQLLqUnYp2Pi5jyo7MGYQ6aPALH2gwZ1m64NmXE8cf7ZvefcfAd8x",
  "key13": "5x1Qxkie4YCqkpt2udiPKA9PNCPgAwZDfb9ZLRTbEVmzWntx8Q33bb5uws2hDhv5JK5mRCWLboeszPn5sY8XCHCm",
  "key14": "46ZUgvdouoPpM6QXo1WxfMK28siVEUMKrNnmMfZdgm2coUsehUTeJSwNdu68d1aLdjL14dEQRCDqnTJbxqCRsVp",
  "key15": "56hhsVt1A3M3YZs2QPUVgV5KxUCif4j8Pa9TFLmKYKNMYze19EfbmojkzaXgFRidttMf7sZL59jEYm9NcGUKcJ5T",
  "key16": "2gC1fsHcMDikXcUgqQYPMN8yBTepwLHX8sUbSMBy5ceRMcxnFdaioA5Q4DtPqbptyW9LCV9k37gF6Amyyy716bAN",
  "key17": "voKEf5EH6Hp96HnnJ9Wj81JFCB3kU6SPWcnehmuvVTQd8dAdLVmcek3d1GEHf35PMq5zsrcxHTjee1BZpWD2Lqs",
  "key18": "fxVxU1zgRdzkyYptijCDgCnWs9UWs7QY7CCAMtC6nkpFAx7MZFiRegcbtsigLqoTcSEXxahFYu8XdjrnHpj7A2p",
  "key19": "nQuxvRRDrGy2J7Uk4e7ked92Se5soh46tn1mK8KbEzi3AhN9FnVTqzLuy1mbfMAn6Sp9ybCcaMr1DoofcUK8UjV",
  "key20": "42HtPQPG5TQGsXcLiyz39X8cgxEYTCf9Lq1a3JMMNuoUShABLK7YuJjsQ3MHjh3xvUjLorQ2nqJexpQYvcze6uYX",
  "key21": "29c92peAbAjw1o6kJiSpm74gHGQZipDMXLQosKtJ5WR3RS1Bp7r1Hge9yYKo5DES28choLkoo1juFWqFbCmy1eTy",
  "key22": "2Cj3qb3iZmjA5hU6uD48NwG8J7H69tnEaDHb1bRaBaTt1T7vQ2BgVqMUYw722fSuKBc2wByowzSFaYZwCrrtNJg4",
  "key23": "5T479bojHbuUkgv5QwfXTTkDi1VrvYbVQsXX85kC1fqnDK2P9k2gkyXjhgVPcREMKyomnazPD7g3KM3EWCsE6e3w",
  "key24": "2qjgcnNJhAPBEvrubVLCmUz39t3tvAXBMpvBuaPmMzx9ymSb9gip3pQzc53CAw5vPG3EGezq4y8EhtRzQvnNd2Kc",
  "key25": "4w9S6ub7xThBTnhzjJEpR3vE9kfpgnE8a2K19jiBkQijpFsMhcer1LcvfYKaZ2xRrjTzFqRbJtKH7VFnZ4jsdh2f",
  "key26": "5ifNLJpKKVkGQcs5iAYtdcMPmjSjHaEmUvx9gMb6FSGniGWiLTPxvbREqFWMxKMBsesDR2Wb16G2hBE4CAngYR2a",
  "key27": "5R7Vu7AkamCFu4Ej6aLTUakKTKvhURAkSh2k6bSDKFs4WRvf6SirQMabDBc6DpP32NNbo5nsGAeGkbW2UX7N5A7d"
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
