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
    "37rx2x7fuADZokKUrZ22zCgM7GCnhBRZNJeuN2fTX3k1J5aBQv1TgSyxRyAtrT5Ha4y15HfcdVQ2Nm1UMFeQRpu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HiMkrkQaMxrVEhsMeZwbQehm4tirbkfLCHbUc46Mthnszx7YZrkAz5QxFhfjbtLzyhcUT5PTRXXVcQZJQDRAiZj",
  "key1": "3kWV2QFoAKJURYJgnFBpghzvJfj4bY2oXrcMiDBHd5UvtaoPULeAoEYYzQ5MpDgevbbuqPKmd4681yMYpJiUeym7",
  "key2": "417UPXspZ1DMXL72x9VRUzJvgBAcBHZDbXRQk92eYTxxEova3cjSKjmxvhYou9m8AHDpFLvrhVL1jw8auxuiBsU2",
  "key3": "26B9HmAmeAz7h5GoPEjoRxDSXFzfc95w3n42vwfQjJf6ExtB7ykuZEXyXVN5UZfaBwDRr35F49qNEZiGaa8uEYdS",
  "key4": "4VJiNVtApAj3z8BiD14QHeU36dqpv1mgHQPpYuwTSw7xown7m1VcMcaJ3qTUv5gn9RZZdj1Yge5KTje6eu4xFJjz",
  "key5": "MPoSVvwK8e6btxQWAXrTg5jbP1xsCmdQdGetrvdUy1WqoMgJQFqMru16dyeVRXMJLoWmmob4YUFX5RRVmUULkRK",
  "key6": "3w1juLd38KvA33LRfoCmAtKrp8D1898qf77tLQH99mybryZpfRiLefvXaQSRNFRkyaQ69ESajmKcMY6fNqhQdjeb",
  "key7": "5fyXjmP5N6DfjEjiuoJPKaCUUmQiFM9nEq7ZKffGUpPNH41mCDxfXGu8pW1NnauoxCGcdPAGYWn7WJA66TXNZH1g",
  "key8": "4NmAsneQYXEycyqGHQyinPhcCAGS3CY1WBaVSWqKj35LVvmJWkDkQYb2ZbhacsWsdu3wdgPBgtgqwCjukWnKPZD3",
  "key9": "5jpGsobZcjc24k3ot6HogSVvqSRBPKKUhXnXNsZxWUx7pipxGCw8KWKXJqo5QgrPDQ9K37HWoDHFZv1jzowve5Mr",
  "key10": "9hVnJTWuvtDeuFafJJtpwx7RWVWWS939EZ8kwMc2eXTBzTgSwm1HZ8q1fpC5YxhYybJiT3Y77ycc5tQ9s6a8qUQ",
  "key11": "42r5WA88XiYa9Qr3AL3ojZacnfzn91MPSD18ePtX7z4Rh7bATxCTSyLkAwTSE6oFQcsfy65HUjKru3YWTcGfeYEg",
  "key12": "hyMaMwCQVCnskGKgBkZt7qrm8dSkGYz3SsBAgUoZ7RMw9icaAJmDnymm8aVD95H2mEpLT89qMyx1DF9L84fDU6b",
  "key13": "9rf3ku1LAFbPaFwwDFYLKYuXEAL6ZfFbDy9ZCBkp56sNuo4kVNPiwDcd6vpWNjddGkQBcv3dCYXSAaajM8bb3Kv",
  "key14": "5FUW9zjGH1HX7UXed75NNaz264tDqhrmUxbV1kKgSCkn8b5wMaiu4m8NAAW5K55MtEpDFT9qooQQ2822RJ4rKGyr",
  "key15": "U8xgikndDv2DNsrZbWDetySVr3vsqvDjpoD5A5SBnRi8QNttUKYxf1NhRsGKoNkHv2tLBfj9AqSXY426Nm6sBWF",
  "key16": "35YVYd3e2EfB8FUYaVk3kxbHcuHvhxr3YXDj1d3F5BztoZLj8eh4axkF8DQrKde6AR2A9zQtTEcfo2MzUpTEkdWw",
  "key17": "4Mfb55qe2M3mDPMQbRiMPFDu1VBKAN5jn4PTqNSRnAfhbyic9z9tDyGx9UJSb6qMsmjybwTwmPyYsCxCw7xK22LE",
  "key18": "61pWnmEoS4CfcMy1cRoJL5buT6gCCVLhh3NR5qpBbq1yXn3LhnhjZD5vJpFEaLdWBMYBwCCCaFm4HmgWVWJq3MGP",
  "key19": "5jatDfA1HDKkVwABevNcdjWc1K2oC91EZkAF486U2JjVRiecBp6P76YYZpWbqkk1oRn5xAxckoGHQn31oxc8B3VW",
  "key20": "R6Nb17jVibEnu2sXDfwwzTb1no6FvJhXD3tH6wJZVUqB1Tmd66gmcQ675Nr2yB1fGYRja52cYyvgeR2wendrYCL",
  "key21": "x6b364h13uY1jvqQC1cJ2NZZUR1G1hwNpsocQRpqdUaJA4j75W1cyCWNiFD19SemKM542zDg9EzwGefpv1fHQqH",
  "key22": "5fBRa52UpnxNJxy5nrHmcKSqYJpYPZbKyc2Je5eZqnwFeLoJLqqtcgv6AF3Bv8aV9L1ZCYBFPzp4zjtSWB5Wm9Xv",
  "key23": "3RAAxpjv5SE5cJvpMXYRo9woccf7uW1P8QtA2ftwFLWaKqYrWEk42nSxiTak8Ms6MyBurPUnZH649r3Gj7W62tMM",
  "key24": "29fT3vvwrGKohcWZsBqA9t4pmp7QH58Lo8Jp6eVGFsckGsZaGWifjwh9eNooaRaU1tkGpYTj6kKLZjPDwncq2fy7",
  "key25": "Kf7qD87PaASKYmmbREz3FraWM8HUFnhQX2pctyVy1riEQxfJtVY8QCgfQSeFSNWNkJQChRnLkS2PYPsV2yAFy2c",
  "key26": "4ZwCAZEjUbXDnuPCMaCetBg6imRvCwm8oFJ6vHeHAtZg4jUetrLW74fy2jkqgcKeoj1xQaiKU7jMJAohvJvKJjSF",
  "key27": "2QsPPb3NhsW2iVEYRhBqzBSUQXeWYSDYXMBT6aaBcToTSkKmwa9bpp2p4UcQiDcNbHPP2jNMpTcJXCAbsGBTGLSj"
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
