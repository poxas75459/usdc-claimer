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
    "5SCnDtvbFwPXL8kz261z54fihPRJRsiCQ1X7d5z8YWYp5NeMYNcTp6tPsdrNkzMEXocjsSSAmCsLx7Gmr6ey9km8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XJoVYLWCuP9rE7LgPQBhcc1E3kbKHXCELA4QpVXHPn5AHmuxYuJW88GWm9QUmSADbnkm4LyxEx4djEV89n5eapp",
  "key1": "5FhsmpMQpcg8NaJJULk7g6R4pJcKh3J8FLQZMNSdF3nuqBrKH5dQWeqtb7gdXLyCDgUCyhan8JsQmcz8Gy2YVRw8",
  "key2": "4eFJwuYyekpd2jrVKk35opLaEo6AF2CNXngZqBM2hynHWPH3MXWgpNtt1HhfcM942KgccQat14qremHfyFoJFGdU",
  "key3": "1jCe5Z5upcGgXH6rjqMKGqh73Y31FdjNFKt8YbPe7DB2Ze7NgmBBUNpX76pShYy2VCtDcJFfHLpqeoJ86sK1SMH",
  "key4": "5KQiwxgwXxdJNaJX9waC4N48ojgYWXC7VPf2pXrRfbwzCFEcFxCA5Hp7FfADU6R8brPBwtsGHrwmXSmEvC2UD4Dh",
  "key5": "5WsvBpoSxu9VEaST53YBKcXYLULYULx3AxfsCnT1dTFvTYoKwxeDpnb3h7G3zFqKbeQNUtxX3czcbfnVZdpH9KU3",
  "key6": "2HuCcXCewtchWT4ugfDJiRtjEcyBbmmhb2wX7vPeE5iVsrpH1ELMWgvcnFq52vzqukmFsXycQzpxmDhHN9RJUhF4",
  "key7": "215CEKo7cUpkVeCCbtXcwaxphuGjmaJwWHry3GGTMjNxH6TjHLh9Rb1Nam4txE2bn6KTeDyTjPaiKpqP91Qxn51q",
  "key8": "uRYgtXxpnYxSh7mBo17QB2q451uDtTQKJ6tPf1HjUMZEH1ECorL1tyzvMrNcCMQ9v5M6hNGPLyMzQUaCQrPxiEr",
  "key9": "5kcXrhzpVhgZmweXyFhtpZs2F3W8tVjBCTSHoD8PZKXciFLnByGCJJSr2YF7SVb9wbEWnqN35L8Pjx4V2kYvc2Y7",
  "key10": "2WKDiYHfF2NP8XPvjMmKs3Z3gtHDgVti363viAozUL6ipy9im7NYd5nuCJZ4ZfcUkESmQjxYnuUSqMm3gPHRz1K6",
  "key11": "2NvYWDPfxZEPDoCvZMW26a9pA1o9BVVh28bZqtpmu62C3ivmoGdjFH61QhhN3ASRVHoUyCRLhNovqobYqMrqynop",
  "key12": "3frDsMkuW3xoHLP9Q1RygJcux3fvMvun8xm436Srh1bUoBu8hB88TBRsfhkAZ4ETsMMoo3N3ZxFTCBqEnaiQjNGz",
  "key13": "MD554F6PZEksqbJTKNmbdRewCKjvR9fb8CXfZdDqxNZ8hhwZUtBJJnGbNegWAdYxGxWpFWeUBYpSjQVp2qBH4Za",
  "key14": "2XuowePyKTGtJ1hJXm567UZNV7TUaDeWovFVZHRqyFshiCDAJD1iXHYXWnJLzmKa2KMUZKWbp2MwNNmrmZwWyhC3",
  "key15": "3aiKb186cDENNg4syFQmEhSFMPSBsuuLuXhbJejPZWQLjsTFGkXT8wNsNnc7Kp1MtXzEoBVrdd5tmZXuVN9byjnb",
  "key16": "3hWzf47SPYE3nCyNTQfBxfWDH37DXS5CL2RmW4ma5aZVpSjBMBDC6ei3Gi7WAbkL5cksSbUSo1E4EgQHLXfkxNUv",
  "key17": "8SK4D8b5LKV32kLhJnLUrD7Bnyqmx7roLvDF729QYwd15AQTuViMtJqp7pxXEFEfvAXroSNFHQhZugci5g8SUrH",
  "key18": "3RgEarb53kerHQQxkVToWsbxLoM1KPpuiU1hvRx1j8jRcWGAxajFoxest4Y9pDpeDPratEp2Ymtuf97nrGxASKuv",
  "key19": "3d4WsoJqix8QyGKr1eLgFQxa61wzPc96Mj6SFjY9ddnc1cPZYXAabybV28sea2FETf1VmMUVbMskMuHMveU6G5Sq",
  "key20": "5PJw1wixQ3tMdVd4BXq1iiVdhBBNoYdnwtS56BuXLdN7AfBCyXQkkzuNBrRZ3XCk2Eks3dREHWR4NTw7ERu7aneC",
  "key21": "5VE1UMfFJR7hL9zDaR1d3XKmsv6TULzBtXC4sZDaY854EV9DinBW13YNAtxkhWxY5pMqwXGspMEnZMWrKhv7tEzg",
  "key22": "36hzE9FBc1GpvzYPL9pMx7i9Hrti51RxvNWUZGo7NkbSVzbyMjihR8mf6qnYwsMBkRyVPykUrU1JbTq7pQ6gucHY",
  "key23": "2VM7QkZUCGL45uFns1BF24VxzBxARcqJRzKoBc51B3uFgb7X8XAdQSD9gp7amD75rtHMxEYaSA3aqKgRPgbPXmuw",
  "key24": "3Qv4Zrd4YkvCLZupbvNQupFTw4kMRcFuoDi3AWTdnYwXPUya5ULtzXGfU4YckyWY8PiaMV9tXPaLYTRRKm7F7wih",
  "key25": "6rCdsGwkaeGUy2M6h7CmtBa9PutYAHTnJgbTuHaoUTeZuBoRQGHSExEwcE71XJ5ecv6yFjpyWspULjZMsEKtM89",
  "key26": "4UU5vk1Rn89cCH2QgLiQFKMTu5t2ULsuikndceg1bUxbDoy5K14ow7csFxPsdso4wan1MhQASNP4AQDMAgM6DN4i"
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
