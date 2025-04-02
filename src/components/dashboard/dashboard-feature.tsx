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
    "gKA6fb3HUkQCpmbYKa8R9oSgwDhCBmjKmj4z9bNwzSzYCe3t9bQATD4gB69PPmnkUcgsDU89XZARNVZA5S7VeJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kTenw38HYbiAaqxxbLKY9q6svsm87taqRpDsVJq8oxAm6jciVnEQQ44iFSWYFBDgJmHCZbnJ1VGJ5QAQypYunNA",
  "key1": "3Jac6AWmpoaLCqnqdtEenvbxuanoeFhwBGMyD3DdZMuUjghVdUcYXmMRDk3iwGJLfeSpQHFGXzrhJVrmY5FQsGZH",
  "key2": "2MZHbwWPTby6PhaCR5NK69H7mYXjqvKZ3rB7HKfyQKHr4gKbrwEiKSs4UBe8qKiL6KYyAgUcSWQocVFQUYAXVLNL",
  "key3": "2yjpNbgV2erR1m7mZVHsw2cAwFcDYinSFrLn3aC7ZJevV21pukkuQR3YXPvcmUnrwwyNT53gjVQxv9sd7viJnbzZ",
  "key4": "3PDbhZKy5XzA3yxzKdn3APYmgvMYo3BjHwEexKQSrEeTtw4tqHhnZgMMbQ4jXYLXZLo6RXAhgEUrN5naLMZ2j7d9",
  "key5": "xrztVScS9Pqjz9YchWUbfmALbPbg28QwzYn7QS7QqL4rzAFvXmgDdDVJ3apAaCHZbuFNqWgnarHSmb3ps6JP7kt",
  "key6": "5tTn9nUpJfz6jPMxcrSBcgPERP8wzNHhhjY5dbN77qzp1f7gLhghVjhMSfULKFNoRM7jBuUKsuqUwKH2d9TdMgPY",
  "key7": "j6sMZrLGbZGagozgVw6qgikAFF6329mMMzGMpzUiCwEYTj9ecCczor67y27MK3r21uhi45qHwE8pUxzmKpFVqPa",
  "key8": "5typhVTTQB29suDdQMMo6xbf2NPWro6atynBYFBKgnXTr3R5Nd1a5G2W9h6rHUMiVPyUtbGiqkpJgx98qVP19fov",
  "key9": "3v9ZhDQsUR7FyxvbisDA79gdevVHBq8nzarGvJyANheiPjkdFCXr1CVsxRgmEetzMyfxZtRCmMnJ8jyujAUqRBzm",
  "key10": "3UaWpVJEai2ytwMu2wNMaY1MCGGxnvCZLeBnG8iGfoymQKaCGdbisjpKWWxYnM4gdaCZFSktonMAehzhgFYwS2TW",
  "key11": "2KmUrjTQEgQDBJY2Jc3XcrfaqyKAMs27aoVqe6n4FgfYu8ytYU85xD1V679HqGrAg6Wprxjh15Z9vjiNRsMw6tmo",
  "key12": "2hKbc94EbueLL9WXhB5pjNLNp7Y7J6Wiw8GWAyoGHdX7W2aj8kRtNcXtLgX4C48BzqcAMkhx5hhZt1bFSCKr2Jb",
  "key13": "2oKawSrEgTDp8md7P7MH67rF6P9zU1VW1UgmqscYJJLVGskwHGPCJCCu326598GyYHizmdDjJFSk9tJEMcS1zQ2s",
  "key14": "4RK2qzjJVAMYsKQB84Qkgt4tZXHCZ17EevyqXovJsxDeEnGot9AT7DVyWajqJyrE1F86rvLfRGGdHEoguDoR1nqY",
  "key15": "VEgaEiUB5RUxbcvB76ofH2E5tYiVcvz9LP33yD4Y1dQtu49wqjxL4ZfAtVjDxuWS5saWJPED8BXuDngxEuEh6nb",
  "key16": "erQQZgripUNuQj4RuLrmAxG25qszRj1RjRPaE7RY1xFq4quBkp71aAHJeoU73PHrn8cYx8fCYM9DwbBaCnay4k6",
  "key17": "3z453ys2WNwKugY1yEUpQPAVYM7xCWwnSj7AKCivzjaN1DML3hWUkhHTx82NaG92d2qPXRbt1zzmmpkvjqgQzAHK",
  "key18": "59HUgy1SVaXSx1ULPTVCVccwM8ofCyha9xLSX1YEXCQ9if1mmRcYoYWChUtydLTcxF2L724gqpf6ZMmenmg5nzaN",
  "key19": "4Ce1TU6wg7KDkqC2fjmPc4KNeoSLK9htEXBQ4PQ7tid2hSChF5EK2xcbK36jL3RkBhLVW2R6452rptm7LUbcU2g1",
  "key20": "HFHwN1qPm7miAiePrw42YPZUiBNA4Q1x7Rr8baMe4WRwdww7awgEZ71DGZS4qHgbeTzxEoHPWm7EETk4uLBcGtj",
  "key21": "65hTDF2PjkqDbYq3kYZvZ8qTbSqmpSM3ke3BnsAdVfgNc1c3H237Ssq7mJu6C6YsSXExzfD8mRnNDzQzcvy4JV47",
  "key22": "2d8zw1QiGVPRwJ6V17yfrCWuPTriCjH4A15jQ3xB8K7KNayEDZuQpvom3Kaddrc8xPnutC1oYRf5o9815kZpegYD",
  "key23": "4TzSWnpp3s3Yt66J8WrNK7bmCLt6X454RkHcEftKGVPop7rMe9K4zgkfhxdHRX8Lwy2zsEpZ4mVTWrZiKjQnN4k",
  "key24": "2uK8JzfgUXKhs6gC7XwWarFKvtFPXpQfjERARyLjVCq4S3TaWWmCzL76Z7aJBpp2VLeqcB5AzLR7ixRZPrhkW6rQ",
  "key25": "5rAGaRo6J18oaTPBTam2euMeyuHgKA4fgckpTnR88ysUAhf9nPGYPCusnRHXMGjnmoko9J9gTea3xtYn1Svi3dxK",
  "key26": "4fUQgd8GjJMuskm7ZopJgZnoxbUeTURRxBW2iWLBwhb5XJ8BwAhmmQ55T5j9UHpYtdDbM7N62LJfvb7Bb94UA5gN",
  "key27": "48PNFZQSqZkZf3UYDRZTvVWDZrYmAmj6Yj1Gq3apV1WapmPW4LsRGNiZcT9o4pHEak3PYwYvgSzvNJMydRFG1C7J",
  "key28": "3GGdR3gM9NqveXL1XGyK3s25JQjVzAocebTYp3HMtvtLpbruP4s5cSYEyuApqGUHiAter2StjLLimC2N8a1D1c7U"
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
