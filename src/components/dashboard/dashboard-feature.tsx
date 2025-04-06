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
    "2QoTqeWMbhoGeTEqHmw2vYe8pSFLrqENrmczQhirGMSe5ukTGV7wQyK8aYSkWibsnVkij7ZUchxZT1gvRmRe9rRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z4qxDNXakiLHUpTqVuthphDsxgLPDAzsxFeTU8YRVVAQhRaGp9CzSGjoDDABz2QArXsBPjc7mRidrKZhnKFNjQC",
  "key1": "5YFYb2diBcBkK6rBWSy4WAXdgtUw2KDWTrCNbU4Ah2ELxZRUu82F7Hsp6JkzqHVvnwxio9osRachcpYDZcbme9Jw",
  "key2": "fu9pCHmmhmExTYaewyRwhfLkRthZMhmcNWvVD4ndM7jB2EqKBQKmmbX6Cfv3tw84PiJe8Fr8FzVeQsaF91DmPwc",
  "key3": "2hjW4nAhY7v9FLTaa1dXkijfUkPi9eR5k3RrBxKrCiXN8PuTsaXTVddvNETmZFSs5EqoGVVHYbZDnvZWMccKvva4",
  "key4": "3D4Jj8ae8qzahXNifHXLBLp7AodnDbEUMibBoR23TQsvA2jGAaxSJrMdsS2Vjkuhzr4BfmWetem7C287nBsyfF4Z",
  "key5": "2HdvzXFHKrqywFoSYsvff2TCQquCvUNsbLvcAkGaNyn1C8YtvSvb7GyUnD3uPjGbrC1x4YsG5WtUTDAtEfpaF6as",
  "key6": "2LApx8AtrhRsFwHLXv4HQjfnnoGMnGq4TJQCW4xai4cdFicvnxaLzehHNStQDKCLG1USW6yFKiGnbatWqAAww9pA",
  "key7": "2LkRSEFTS7ghs2ubXwjNFSQu5nkTq1GEc7qKSLx1vr7GQRoV7edvZUvjJe35gG6EjBBtDFTRfGgZtkKKW8m9rWu5",
  "key8": "3TLw1X1dceCrZMcFqsNF7ZHrrbAbHcVfg3agVv83qd72iFps9EHkL5QrKpubvPzcY6EhxwsQLBgjQVxiFSgMgSiZ",
  "key9": "5ZgFt4hdSWv69RasMw31KjR5cGjjUKdWrVNQKqJFVPBU6F8EA3CcBLR3SqodfjEPVuVDZGUUq87mRnxv9kqobNgJ",
  "key10": "39YnWkf9KtBf841qniBZgdpa97BwGy1C9rAG68otYEZR2gPfjX8C6MCDdj8g3samVrNAppHyWh9MrrmQseCyhyGZ",
  "key11": "4fT2RvEXKXR97JQZKsCpj9dKNZPngdMewmMJshCUo9s97t8tBUBxNbhTEf5Y9jc3ABT771qAUagmGh4F54jowQXC",
  "key12": "5QESqjnW2Y6sfaka9713F365ToG6u5WxqwXCPc4qy14mzof6NSEuJjVdzCjJNBUSb4gjJWV9ZBr6Ly75gb3ttMef",
  "key13": "5fQjaLQk99W2mWffc3xZQWGQ9qMWzYN4qdLNncSxPyBVD4agJScgtXrdsSuBkzM4qNpPyAEd2hYd9wgZZLojke5e",
  "key14": "4xkqctW6QjhLyBBEoEdcAcf3JuCszZgtftkjhbXmcYN9yi3QuxmkUJ7QeCfcT8KivzJRF6PbVRawBkoPh8ciF8y8",
  "key15": "48PVQksja2oJipPsJvv42tbvNruBm1NmGNae45wSCCbo5BmKd4rECDNYFHP52rC93oirqwoMDScDakpaz84MZtqa",
  "key16": "4zRY95Nbms6R8T6hGM2T5Xx4YTdYuLFpEevH17zZNnkosgHbUmgLaYwwfGwyxnpE5sqt6p8sdVdK7apVMUp8hju8",
  "key17": "5BHRVsB2QH93m9dQo2f6uDhXTGbeRtjLWC9UYMCJdXNkeLk3q91eEShjoMn3wT4jXoA9YqMcobT3xoMWYWtheYd8",
  "key18": "2LZGDPyKU66DJ2gTh9pFFPsEi5rRAB9mHjbTTkqKxPyH22yGRrWmLmr4ithWfsKe7PQQBsPk1T2kNQjRPk3uWmGN",
  "key19": "39iKpSj5yQ9x8ifVJSZugzcaVW8Q8zL4SnpKHTfQFvfLKCtCq3axk9QKnzVuEoFgaPVBqRcAcFgC9VnPa2mJru3u",
  "key20": "4ywNtK59tzVhy6FqLVe6EpX5wABRHqVRQTGZhvAXFXEEB1iveH5WyR3MXvod7aJcQsZWJ5tBxTsbGb6QMceKQT7R",
  "key21": "2UDr1mUaUPU5pcAUhuFeeqwUPHzb8bumgmTZjvWxmCyra2NKeToBWHqaTRm92hnCcxYD6iqRs6suurq2bcAziHtR",
  "key22": "5FXaWwXv4TuNV9JFLErAhN4Rs8QjNwTmxLgoFDMDwWAqJ9U6dPnVsz4YhydLb5nVX3mUTfbf95Aa7VHbx9qYUeCY",
  "key23": "5ZMYrT7k1SoAN9K2jVKDoE9qsixW6NXaQRyEEAPLFFSbQWSWAhGMQYQurSk6kV5BFcELQcWukooZrrFADfhgHrQD",
  "key24": "3Ke8X3ReMaXiPg4p83fBnvibdqjXuoPfRbknpCYW7579pg2dCJRmA6M6eNfGLuZ9T3fLUWj3Jh8Vui2vjdaeKjH3",
  "key25": "TNemBpFrjdZxXDAjZDkixwtJk6miAAyHxvTxWGv5miHHBhxHm1q83b47PvNFDpocecv5YDNqCpkiKpt8Qks4mWo",
  "key26": "K9VwaR2qbNf6aoBz3YDrt8NtKf6YqbV7o3pZ4863aF4226AGjgtx88THM71FrJZRrGP2VkWzrdxc3zDgf9LLr3T",
  "key27": "2JyqfpYsYJMoFg9x3mSdHkuJp354WErDdrbB9XcifmFKEY1nKxU7GwRHYc4KDDsoYvFyV5H4mTE2ghi5zWCwnfdT",
  "key28": "4mHph6R63Bw34RSnuBqkAd6DDkhR1D9Ev1c5iRD6N4fY2RAu7zJoyFfQ1sH3Q2JwCkTtR4qYm3XMrhMMYHTNfFSG",
  "key29": "3SQUtf86BcSBoWVkCZ37RBuduQXKRaKqhXYz23JYu248fLzrqpAMLSjc7EuvaeNj2HHVZddcCJ6HdxEbWw6aj6wo",
  "key30": "3EgwP4CSQRPeNXcJ5rmDqCj69cpQJAokzZWiqgikd4V6LadWSRGfwaLQeup7REb3vRwgJH5aYC1tu41zvAh4trCm",
  "key31": "4TppvWMtue2ZbdNFshSHpUEAVzWzr1VoozaDGNpCmMiHnxHYRiJHDDavyfisbCvghjhs6zdnGhR5frTkas4HPgC5",
  "key32": "3NHcK4VqjDUr3F9C5MQMYMZhcHmnb34rX3focMEWtnkU6zU8s61RkYXMxFqWeDAnrKgBYFsySvyfhmtBNCwzgp1",
  "key33": "VerxtiLbXCxGgDMDHfgrCUjgBCww8dFQUm5MTpNZW9oBDLVwz4kVyZsCJoaW1WhYDRq1NTM92G9p7ZEwCBTUvjd",
  "key34": "4kVHwMYKGp7bhQ1HTCrsWMuxEvpdMv3A4e9oVaAtqNVXsA1kP7TcMU1WHYGWFBEq9YPrRhBV8dLxKWHdMYNKDF7h"
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
