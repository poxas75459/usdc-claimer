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
    "4QwpWFvxRS5iuziZXrE4zd8UthjwwWmnPp4vWs2Y8eVWiXWJJCS7Cyi2utP6Ee7SToJo6CXu3Hke98Z8uUHyX349"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pD5Dja226VfbfPaBWppGb98EuKAstSTAZP8cDntD5jZF9DKDSCPq7X9dRLtvb7hD1WyceEhaj296AKkhLTNo1CA",
  "key1": "5jxzheAzASRPF2CjoZB6YAXG1k1cJAEZoB4uXxgocLHGcPjGzGewnfkSicaZFearC47EaAuGmFyrkTh2FJHUYWzJ",
  "key2": "48X9v3EPa72HQtjQdoaNGem2meFFj4Gkccfx26Gu6uKGuqE8BFGSP5b4Xzhzxc1Bq2zqA1GWrS2XzcZroxGWypRM",
  "key3": "2R2H4V9UhYEVUTTkw8F8xjhBHDbqVK6ZEVfECvQc8P5RJ8GwLTAztZfiDSMnPRwkLAeA4cYUyzR9kRfqRY814H8Z",
  "key4": "3eZ5RgKc6QNNHbD2iQiMKyDw6j93Mp7eMPCqcbpmzr4e5DDVyse1UDpJ1FNLhS9RS8vqeHPYmSqcD3sM4hadbmLH",
  "key5": "XaivqLMXYDvEhwnBuQGnvbZVo3TRDbrGfMh8Z8U159tHfaBX1qNFJDEvAXQqDGjEJuhgmkBAna9W8Yf1fbn7EBe",
  "key6": "5rq3x8cGiNEhvkzP8Nsj2bupXi65Bv9ycK6XybFZjYgTebEQyhACuFD2vUhB86NQWtyWMcMYZiefhvTFkE4KP8FE",
  "key7": "44LhDzYQNvfdHgYbeHRq2GaFXiw23KmA64a8SbzdU2B8CJtjGu1utV7w7RCvCvwS8c6N2Na6upsMyGnSK1uxLLTk",
  "key8": "2AJdLkiQWXSypYeYgwBS4uL8AfZdMVoZ9bgF2cQNb99ETwp7xDo9LGzFcgx7rvDdNfwCuorfXxn8w6cgc3ySdFtj",
  "key9": "63jZC6v97JEg6emYqUumqcnT9U1hhUMN8sA9A6NLEohtkhiESvroCK35RZruSsQuTTaDoUT9RZPU5viXExXrVmvz",
  "key10": "uWFtT3MZWjFruCmCfei1SXKpZuTVpz6CBACGHyHoqdH9e4BfUUkMZQx9nR99wCqDU84QuvJFSfLAV3sYiVLAFdq",
  "key11": "o93nybKmFvTibxrfsPMqPiSNtb7ajHs6e8fwxTTtEBNxo16sXmjwSwHS3vbp8WS9VDcinQ2HG7A3qqTpr6S5yEZ",
  "key12": "29ZY9HXWbRUC4B9ZSiGFXjKLWtNzdiwr7cwgq2ovRRraUjuA1myG1aLLV1D4nNScxb9SXP4Y122LXdjY25eg4pZj",
  "key13": "2ARXCUwz2zU5qk8K5nSaaUpPoe8seusYHeNvbUb7cZyZx93LT2e61QhxsNMLF6HtjNmyySwd1BDLYvnsxDSPKRSP",
  "key14": "mK73jsS85JaENF1czUMUUjLc2K6GQjPjPTctFiuPcaH8RYg2w4oAKcJL9FCdMWHVWn7ZxqBK4mt93YJCQCFi142",
  "key15": "2FXJtVWjTHH1nCtHAcuD9W8me16xoNL84mUFgWT6bW7SA7FAAV1U3qTo3d2CtGzXvM8WBh8mdLTmztV15oBPEPM9",
  "key16": "4YA9HUPrDPKeYSPjSuKBwCY6odrdJBBWXiDHDs23ApJoGD25n7z8G5x2aidxfdRKNYyLbezdjYHxgov8Pv9GoKjJ",
  "key17": "5akEbmm3qdzU2nN5dkk5BVKyaaWJ5bZEUF8jMZpPb9KmzQYdMF43vQcyRbHp3vRTLZ45MaPD3TsA2UP6d2ki3ziV",
  "key18": "5Rx81vWRuXmZ5zL79kzqCc5LSdkpw27kvfyZ23t8RAGFRSKYkBQPMfisHLbFG3GtKWTFB4XRfq4dP2T5BKtwjKWe",
  "key19": "5LHP36jKGaZNDVezzG5xZaFChp51izwjtXnNarwBTTdeVQAhc4zVmvJhmoEVY9kjkT5dZ33KEmjMJbdq1yZz9mgd",
  "key20": "4YbjyLqgZfUxGX2ir8vyiuTBuBi3mjPa3rw7mWFLEeDPzEZyuEoU5voBL74h1yguWXfVFP5VRwgWJoNMZsQbyihL",
  "key21": "wm2HGXEC7wa1fRG2CPXXd6Ecvq31m4To9pT9zVqmo546MdBib27ncKKVJBREACpbhaw9ZpHBR52SLvp37DmenuR",
  "key22": "5EMPy8ugibmxw7S5ckJgQMsTx3sEfpbj2cZPd35aGD3cBf4yAYoDqPDWXLvRcEmqq7w3Xd4FgbQVxwZMqXGkZypt",
  "key23": "k6hJAPtkzmE4ugebBbYaTP5X3sbn5w4fbwiHRXnWeNz7nBdmVLpuqVLAW8BFNpzewKbeGKNiE7aGtBBW1TXi2JV",
  "key24": "9vq2DaFQBmKs9AeuwmsoFeenbRnsAYQowSRjxJmtz4D8VajYsg8EetEpa9x2tXYrgrM9QkUQNAHCqiAGn7kDjzT",
  "key25": "64fbZeKXAQKWZU1XXAhdnjCCk4LwQVWpZWujysSA7QseJwK7qTLr9vNPoX5ttrMBgahy6PfH1df95oqYJYMm8a79"
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
