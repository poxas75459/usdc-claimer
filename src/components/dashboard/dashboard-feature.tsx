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
    "4LT9tDmSd6X3aMfnpTuzHuJCX9QUF34mSw5RkWfyzpdaM6WNch5tR9sVQ1Chjsm1ThX4JNZ4JWHNbUbRVdchV9Ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "326jBVLaQNictgP2EhkP6t7kx9MSZhuPfRXDCDLCjBJgEJspR6jqi835XEDkt7X2FtFPDxhvvDK5ehByHZhYSnTs",
  "key1": "2cc8y6ieEguvpb8ZkqKCzLL1gVsNbuxN3Pw6J93M7b9KGsxMpgVMHBRh9ubJUrYv3MhC23kZuAjVbq8VRR2KD1eg",
  "key2": "5YJhiS31zV62Mu4Hity8EfdpFX6s18J9SA2FSywLjXVufXjCvUMDGRZLufQZqwTekXjZtruGm62oceriXbPQjGCq",
  "key3": "4FS3MCERBYuM73xHvrQcfEAoTo98MbMtqoQeSaYSt87uNmYhcozyCoLBrV1BkpsY4Uvi5ynBt6BHBE1HAfgNYKsq",
  "key4": "2xBbHwY3tSoQp5MUsXDVgCK4hfKhvpEVmtEHCY6qZdQWXkMBfnNbBRdngGPUZzPL5v2kr7VjhycoKcjMxGxvf1gp",
  "key5": "4qzmXWyvhyFbK7cHMmMwMwD35acwf6JdSR6gq5EVeWQsfUEFyGRi2uWicd7ZdMpc5TjosDQAXLNRVT49Ti7ERkx",
  "key6": "4ftDHDrXtnVUnczyKXBKE4U7RbEYJ9iyQKx5ZDw3vyEEJs2Sa7uEtQBPjNwAyaboHGCiDYZoL9rD4q26k6hNPfDx",
  "key7": "2oB6TPsaRsnVGk2EHeVPoPV7bUvN5zt9jeHbA9VzxtuquXtvRjzwcRpdjv1dsdPoDVALUKPgRnuBWPfbQxS3b13h",
  "key8": "2u6UtBVVkjsbvpTPLZk1mihEVR7efoeueU9wBJER9e4tfwSXGoAfHbMGBzJkwQC16Sh3R4UhEWR57YvRcEi2XprR",
  "key9": "52jA697ANDnRsfSsk8gdvHy3LMMWLGH54qZ8DsX9U7CA6LxdjDKaMfpFikV1sCMoReWZEHjyM65D89KWDeg5Vsag",
  "key10": "4vk78B8rGHMEx3pVfmPX9rxmpHg4R4bGw9ie8dGMKHDc49PQc9xwVxhL2FbnhQ8dqzumNJbDy2zWYHusitqbNKcC",
  "key11": "5AmvkzthfajspKEtVUwPrtemofej7q9S38678Pd14WL4cZHyujmGTBTbmpEMuZf324q1V2bT5E9fUVNV63jUmHe9",
  "key12": "5ygCqfvfoFwwRUDn7kMNEVjgP3kS5Ryh1gTRCzhEg5nnt7XM2TheHDv9B3Ry1HcWXsYU9CwuF2DWvaxp22B4cCV9",
  "key13": "24LQmFKnxcVFG1QGm4KYzcM8ERGGHwFu1MJVAu4eAeqbuKtwppXrVPmN3VHSm7m57qPM5ifPDfci6xZWseZqdrXx",
  "key14": "2NQSBWfedBxWoNUppuN9FH3gXW48z4RAW7Sd9Yz4BG6W5UReg1yB9v6pwHovH9SNd2maBF6m43JFq8go6EfqcVFW",
  "key15": "26zZL82SvQbx87KKEbvvzh8pPW9SwNA6qMZsJsRpzaidzBcskR65Q2a9ebRvKP45YZiUkiGmNpNyTF6mzY2dwt5Y",
  "key16": "5apRNVXqE1pmWH8k6ebEas8TTY9R5C7MXhokYf7jfrMt4SjLBXSofZL8pWJeBwQ2MwFeTcS4nPjhcWA7NevTNpZE",
  "key17": "4ucaBfLZJLVvqvXoz7QcR5q4L8gfw7uxz4HNUYhergMgiWJ9BXJvXDYDmQNMpUJy8uF3Qvp6MmTB8RGHv6WcKLtD",
  "key18": "5Cuz4ExMr8zNSLg7cRNiMtnL6mGj6TT6oYx3wqMY1TfZoAuW2iXgZfLg9ZBHo5TYL5YDXbBPGcueWYL6vVvgZkGx",
  "key19": "5hMoLyCs3BFtfRCfWyiE3UL13seo1uD3gocVhRJ6nb6BdEH4EQJ9Z9fsmvWArsDuxoF2Ri6V8Qh1jwYu4MZKTC6d",
  "key20": "3Nmc68ZD1KHvrsf2yKyVC5yXBgLDyR9d795Zj7rwqGx4aq2G5uUMaoNEzsSfek8zZyttdK9paKf5uapSZJmJsLuH",
  "key21": "3dmrS5AAgUagz3i3wDyR8pn6MfDZyycWpVowdSosx9umWni9u5mySDySJcxCDqwHYZg7n6Y69jKFg4B5QwmyVptS",
  "key22": "5BHPnWPo2k9d6JrX6wFUwbLgv1tKEx4NyeSTgd85Q6pyCoXncm7pFHBoqMSQ9aiXvTbpVV56imsHvFdAmRLtW2E6",
  "key23": "3Z7cNwhhAscGfHMABezDpG66nU7QUUpMMw4ATzFfhU1bPk1zcREZbkn17aRi8spYojk88DCNsS4KxMw4Fe8q44F6",
  "key24": "3UmBtHB7v5EDN8H2iTQPrSUBGsm5k6aJrW1wypUPXCwwSKfrwTkPviao8qNEBowVyAKWi6DE1RP1o5uBrzytKD54",
  "key25": "juyNXp7FZhKYpe4yV3FgwYDi7QunWDSX6dUvYucBdnpnDyoJ2zw1ybE1hrQbSF9YEVCbMNNT5z4YiNk2Lagsoix",
  "key26": "5FrByn1c9o3U8RL8caYDf7enFa8wN8n5P8FynnQGWfhJYsDQLRxETkNG9ABYArdHK7gxe5ac4yLNcX2AeLeAebHD",
  "key27": "2wKXqHhpa48KLfo3AWF7xdE7Xo8yATNDjMqUWx6EuHMcRG7Hm43Cv8DCs2ZMjQETx6xdzodduvqGBA1KY55pzXP2",
  "key28": "4nkc56He18BeVyQSjyk2c7t1ZgF2jBxxw4z7puhvh6y4UbhFGnhNThKANxxKJNMpmAmm6grigEbEFxC1pEmMhx93"
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
