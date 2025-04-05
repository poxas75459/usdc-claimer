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
    "3vQWmbnJLAL6rSvYUdEKii15ZtQkjVUKdEEyDNWQ8Hpsnnx72GQuN2PXcmLFAwL1anbwPTqUs28S7BsGGsFbCDjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ldc4gtW9JQcQbqDg313couV3t3z3UQV9pvL4KSz1VCpEibdVSSWxLmmxSJNrYWL2PKu8uqnhDp4GhYexSuL23DY",
  "key1": "2VpfsjcbeTzWxHWqkSqe4wNLejzBuxZBzC9wLKuk9TKs2ShUMu8kf9BRbz693vh5uufKgh5985icxrLqnfx5CLgL",
  "key2": "4gSSAAsMKW86wc1onkBYiGH5P5kgRSLX9aaN9k8MGGk3atS6udbTjXJHLohrBspMSTuvYg5SC3kvJpK1zB7p3TGL",
  "key3": "XUmT8BeTX6b51MF3VVfdmFDVQ5N1UExTy13559XyJjmfvsrTYtQ9q32D15udJDsZBdVV1fFYM7qqeZkGpyV93pt",
  "key4": "4P879hE5XhzNbgKuE1XjdEYgqYRFqnyY6FZq5yiViG4Bdu8aavWpcWpy6AtjHy29MN2iomGuaXMED71uPnBoFg8R",
  "key5": "3cUuAcmYgQREkkCk1MoF4t6vM6SsiGU1mt15hNwGQNeVaunNapmHTp3VrpF3FqHCphJ32LcrcM7FqFEv4kL5avoo",
  "key6": "5NBEgb8LhatRdfMojFh8sJWjHN1zcmTWpXthD7YxqAN66pCp8SGvx5N3S9Fg6ndLzN8JQxq4jd6UcWR35oBjQgA7",
  "key7": "5gPz8FpjuoHXEYrfQZ9znwx66o2VX5iFeYo1BxfDQQLNoqMigZXNPgHGA1rwYfJegvfvHw69Z16o6uFYbmddYvXd",
  "key8": "3hAEyzkCWijnLaawRygBjgWD35Jx79b4qi8LDZRF9UnhUv6QReYsg5AZnY9kabvZnjwHurvZMFnK44RgogHYVNEn",
  "key9": "4iMjVJoYNjvq89a9XZLW6rpXGuatjQj5rb8E6n4ESSRJYtd7xNfUkG9d8zsM47ds4BmqEKxKpHqN5xHegLesaH3a",
  "key10": "wqkQBZtMfmnTT2LUvi3A1DaxbTLMWHJrEL6z8oB1AVbn3EEVn4SjEVoCqmKBVgSUUuYujXeuU4QFbUXwrtdYQU5",
  "key11": "2v1kGDKGkSMo4G1atDkB4G3as15qP9b7Aagh9PkHjxDKKg2c5WuT3ikLbZpFRWc3NQwyY4VoVnCZQ5Erst2JS5w9",
  "key12": "U9JABCeMhCnZR1kpKz95cFJTdEELTAUB4bmRAGcJoWwu4aBWnv3935LeyjRAoDwGvr9Rer9MQe7StefGy7XYXL9",
  "key13": "2itGPCFssknpby5LQMT3gm2X7WPKGc8soKJeCH381UgApiBAEy5n6Yvh2xFJPyN6Ck8WXxiYyAhk74S8gtyNnRz8",
  "key14": "31m92zXqVFiXLZBzM5xthkzTT72gEaiErwMTi6K4aWXFnd7s1cwMT8NjRCgFn7Bnn5fw6azYeXM2kEnsikV2TS1x",
  "key15": "8wwFAnV82s4kBAXRKCjnZevD2wNda4yBCVkxJ4Rc9rd8jZDYfdsLUmZffUZuANehgs6aK3htmyeDZAFuqLZFn9r",
  "key16": "4Uk1xzGiNvgvqoos2Vcx6Cc2RwFYD7sc2j2V2AHEABZsNX9rwYjZpPwdU8d1S7X8NP3dfgVWCyoFp1nqgRsdmzUE",
  "key17": "4pNiUdi628H9ftUf7qRwcmMusWyZbL3EayQ1XkSWMqsWE6zW6ieFXekgvfWNCrz7bAEB3sLZ2Xh7VhFuWhjvSyBR",
  "key18": "29VkJX1GkL7ioAykriwffDP5Q2gUyxUqdNMDGN21zoCFLRtw8QhMjZ1Mk7nZJCMVBfUDoVWTed6qFMRTJ7m3Gwu5",
  "key19": "4xzrpNJYfgTdvvkv6e6g7W86jdSZMtjtaMzAqTRfywbdxB8QqY8ewgkzBmzzVg6dd8XmcAFV8usEchvKRUYLkAd5",
  "key20": "2SFnaXWHc8uRsnZPuA6NUsRgyZCTzDEYMk9t4xCsX7zdKbQA5jaUcHSHzVz6qRCgR2CSpvYGsMeR9SU4muu9Jy7R",
  "key21": "aXAA5QX8r8FC2qLVPknEzSnUffvv7xNN1CjuFKRiRAKjsp4YH1b3Q9FLVAbqGt3ae5eXRSLFTsgRU6gqyRu2Saa",
  "key22": "tyjFV5FUETfF8qUKt3JLkNPu7wVEGRtULMB2BgVkMsYJevy89813HZTQkLhuLRgf7baU1UiSpaGbaUeVk7qifJ3",
  "key23": "5Zc7fwAtXRdfwGQuSkP1mFqQYwaA3k1RVGs16W23dpWQNVFoXFWsDPVusyNmYn3CWhB7BhNWe8zp61Xa3dffowgC",
  "key24": "3Q5mvMHuK5SQoRSb97NYUvf3EGS192vanRKtiUSGuaqvQEDU8ZhKNzief1Rr7MZjukL8cuJnC42o6JuxEjBkoRwZ",
  "key25": "5SdXcKc6gpE5QZAoh9GWkGGekep9pLVpWynWHtXHkdWgzcB3nXJeS8tj56Z9Rx1pAnY8xXJKZ1B5CaRKmiFbkHQE",
  "key26": "3Zw3rpSWke7DTVsHbZnJRfqoUtZLjVUU8vbTxvue3535ihbsDU7mfZWanLewz6Zdiwxop77MExZUcsX7Wbz3Jy7u",
  "key27": "3eGDbadfjVbNzDEYycHq9pysDBkTxWVRKk39J62kSzahscDtsDoXHAJduVgYzsBDEpXCZhRg8KzTt7ptS597QueE",
  "key28": "kHPVapJ4Ao8eicXhQQoBfqA8io8xrtGTq1P9uqr2xWCj81yUqLdfcGewjEzDuovwKZyXJXRQZXULiYSBjyBnAu3",
  "key29": "5qGVQQKB9UHeSn7qTvf8vchYC4PNXW4e94gD9vMwPDAk8sdySpSFRStJFUHVHFmFYhYEqq3R3QD2caEFtXNX3L4S",
  "key30": "rdRF67tgxEaVBcffUdFKwjZmQZ3KQt6dtaRCBaBBdXVm43Jjr3UUKGJHfRK7bnCUcxZtoscQjMsYW2WesRhkJ8x"
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
