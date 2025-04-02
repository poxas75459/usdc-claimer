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
    "ERMEyrUheQFgPawdaoNKLGUopurXeirw6vWTBnzz1B4umYxMPrKHtkAEZ7CPYmPB8nEkndNSE5qhtNZNPoxuTwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wh2LVNWzXMkv2ovGzqhzVaQ3LfFTtd9dWHoacLUJPTZG8sPaJDNGWEPXpF5jx5H8Np47DttoBsaeoJJL6ztPmvF",
  "key1": "5hdNhCViag2zRemTS5sQ5U9ZevGEHjPsC2r21caiPKxLiiNDvNkxX8p86xrPNTe6BppZveGfW3ppZCdJTwkMHUZK",
  "key2": "5BJ5YspstSiuGPEW5PFGZzxG2nRFqauKHK8mgtc7pRZScTpegoKrdZHzeX2i684iumHXM5sKtNbxUxcnie2tvACV",
  "key3": "4X3VPTRfqYJMmwSojU9QjktMyYfpsXb2HxxrheBEbB9RTKYtvwA5Pz4vpT7w7Qe6Ujsmg2FLbEeKc8qHKHzbrUc5",
  "key4": "63BgARSHPuqamcdxzfadEh9dLQuJ9SEeWeZGMcQcDk14XYkhujxaFadPZANNPcbfE6JzpY7JQZ3maMaivxRUdfzh",
  "key5": "3dMcxGnw2CXojYrNq2E3U6ZoYbdnNrA7725wbGGxY5cTiKLLoXvFopQdmgdDKE1ZEXYqajV4t9yBoqoyf6LZTFa3",
  "key6": "2UquzXcAmKiadqdkLY3j2nZqDCB7Ya8VSHBue3EJd6CMGjbT6vkWBFz51HJQyRdGnwznzURBnVDJxQRAxPqNR16b",
  "key7": "5Lc4QvH6TP76uCHDvgFMAQZBMR8dAi3MLDzwW1eWXcRGVRAhc1X2mLigR1q7GtcjpkemzwzeL1C91Ny4o7ybyRgS",
  "key8": "1G7WSXoHD2f39Mw7efRZwdUgG335MZuSZM7pNcogeUNBydRrFwv7xgSiYfh2KgCnf5sPanuATZnEibRjYRF5DkR",
  "key9": "4eaRmZdTeVaCt5i3UrqdQFwUiLEmJQwcCQSDCtEocf8eEtXtBBtq8iJpmYwq9Bf1XCshhbppfVnQMJXxoHybmmTZ",
  "key10": "4YUZAAbQrFBNjByjaxUC1oYd9dE3s1dBFHY2rdZm4kKz1iAUrw6ZPLY3DxTxB8CwhaMW8bas73LbYAni227hMmDZ",
  "key11": "t98WmQ9LdqF29Ymbj6J2hsj6Uii21qfX6f5MKkWS1egwprpFJsm1NxbeX38ToJ8UzLTniks3ZwuGbusXrCxTbRB",
  "key12": "3RtyzRJvh7jgfKHwDXBVNpCuQyPYx6u641CmQrZg8HasjuaQe1Eq8nngK8RZdjJihrXgetAsttdH8sFXWZGgcmHG",
  "key13": "4ryMWKQJ4qXoS4XLMEfUhhkkaFBJQTQYnE1EvjbRR39NXCgCsxpAn7zWr5BvELsmmGsdsipZB8YYVzMqM47QBVER",
  "key14": "4bJpStGpeSbogHbMaVyNtBz3HFpwUwEbWshoZBFBztY6pJhfMZXcHP5sBjJvgoE19FjaJfiAduwKZz8NWRon23uC",
  "key15": "2CozxW7VrJQovYBNMada2SEoJZmwoLjXDg3jQX4XiSvR6cn8LdfBGjR2HbA7hZVcr9vaWsGrqtMgeH4wJzHTUs1n",
  "key16": "3yUEFyHmKDRFyi1EnWs9xWBgoLSxd3ZAaQsXPfB9gb9oyovfVYmNmftg8gTJdxJ6qU7bXkNoLFwCEou6CTV6ddyC",
  "key17": "6uxezGRUJ4ZmEmHCHqyEgSVuHfdvNo8Wz1GmCJgfGCpbMu5dZkdB4CiGnS6i7pVV3XhEwp7VN8iyqS1SSWhLfsh",
  "key18": "2Vv2jpdYxvwz8i8VC9yfGRVGG5P4niH7Q4N3UNfUSh46qJjSzeRRFWSPvqqPCRVaYeN4dJuyTq9pGcX3THasfR6f",
  "key19": "3KSZSLMH5xL2ThJcccEX3ya32w3UmpgjA183iC8ThcQQLf62DgxCA3KXwpB7uYCDyDsRqjk72wgwgcUhDbhbkrou",
  "key20": "3WfgaEKSzK2iAcTd7G9AstkthA9PZhq7pVr1XuTTBwN3eVhTHju5HYWo5apLRRpMXJm2mJ4bUmrGbYMZdPfHP6fT",
  "key21": "43M3gvzMvw5a7p9Qrg8JoMVfZ9a7HTmjvV7Bzv5846dBTfHJ9dBNVUcEWMnycfor8Lm7B8k6RwQgpQkBhzRyb8U8",
  "key22": "29Q1W718sTMP8bqDHrZ4aFqoeKGTeX8c3oTgnDufKaFRqQCm6rYuohf2Sy585S9P5XWD7eiD9KywwFEc9mxg9wiD",
  "key23": "4yrobHUy8vWXUR733ArWPtfGXaYtNrkCKqJMjs6bSSnJ1eYf3xcasbw3Qy1FBa4h79cSSPCFjrDc6Uwzxtjwbqb9",
  "key24": "21VNJx6pDfrStVV3ZNJrBwQiy7AhAd4Yj5tPoj9nSKAbuFwcYtdYikWKF2NhH1aVqWmjHoAVGNyESdZri7iCNCev",
  "key25": "34Jtx9Nx5P79f5ia5iYZ5ovWqXhvFsLzusnr55pzujjHB8erDVZpw2AfoVwSQweZDTuUZtUCdZpKF46DJ9rUr9GK",
  "key26": "4Q6hXNTLE2NRt3j4wvFwfxayanxZWHjjLtgmDhTe9au7sVodTF9Zu6GsFskhRXAYqgKaH64dqMVJDV2AQsKn4S3J"
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
