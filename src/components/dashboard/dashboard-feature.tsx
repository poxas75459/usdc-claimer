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
    "3nNUiVSYWbX4bejjauiZqQ614XjDJ9NXPSW9ffmuDtkYhYRAoKBThzpvkuqnZd19ySENVUQH11KsZk4Ur4CAM63K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qWaS6UM2Zn62QRWNDNwixQmuXJoH9yiuJPJ5fDd31PX1kCMUU3YHjq2fqkEi5v66WknGx36FhxHmBn2Wgc4y237",
  "key1": "dwBYWphnHgAxr5a4aFCnAPe2Lg5nSsNYVUVpxEjVJJCzfGHwA1bxwTNKmmhw7fkgDrWBmeQrr8ZQ6ujw9uTqrmo",
  "key2": "QiHnwgHxnD6WqV2oJs27mSDgwwQMi8sVB62YUdQbZtNVxhJLupYS51R8vBL7V6PtGQ2SLK79faakdam27MJ5YWv",
  "key3": "2au5wYxZNBhhYnctWihPMTVdfiq6ALtb3SsaDmQJXsePXijMtbp3VecfXyPkAigkyfTaQgtoxB6YZDqyqFoH6Rp5",
  "key4": "47opyxQF2qEwi6Fod22LsS1fUUDeBYBRLm4xmLRrTLK8QvJizwLA3jb6TCDbZN32LR2G7hXXQUHYkPAzDa97Jcm4",
  "key5": "5WyrTpBqw63axhQ8veuTbGz1My2LwR81t3AiqtGHnpNS8S8ft7yPfspa34x6a44fgwrvBJQbvBZ74dprntE59Biz",
  "key6": "jHKCAA46VzPejyKUZK38jCTRSPNAfE4XX1V9vgxs9kEVCCYrZT71cGB2BAhXeEp9dsJ2iE3HtXSzYWt6YFVti4d",
  "key7": "3WWAMfhYVkEV9fR7gcN4BJ3XvcmKX7UXEzannu2PFDtfGYsvdiABoDoMqPyV6ioGQbsgLbmozPbK9JfkPVS3kjBm",
  "key8": "25Hd3E1FfpLicgXqzs7zFCCab2bqst1jVN2pChz8kYL2jN6ZxrWcUXojDCWzkeSVJ9MoaVEf4sjejbifFB1yupqM",
  "key9": "2oZQFcC912NiKeQpXFYbmwnjK6Gras2rHyJjyWRdtTQtbAXCYBe5Aw5eWpLn8UgcVuqjkYMVGRmZpM5izZWnDHER",
  "key10": "3vDiKFNaA5cTzhJi6KW5Rdgxgjt52NUDMF5FyNYMFyiwSaANaMV37XrkSX4hw6dzBNejkgwF5uPcYozoKB79818Z",
  "key11": "A7qLVc69H2dwe2sTDF3dYt7k9NTNYqhFJCFcEHK94nt3oHMacXFpQdU4xVL8kE4V6MZACoykSYKTer8UExi7p8U",
  "key12": "ZGe3WkPk8UPmftjQs2hMnyJWjzjuH6DkRtucDjubdmeSL9g9j79LHH6QQV1f2mNg8nmm8M6MKZctzymocgTcSF5",
  "key13": "4ntHWhuCkSxVDWWgg6cNZUWqGBqeio8aBfRJXLJx1SaqzuqUUkBKM1cm61vZbLqtWw8d2ajq3AmGa4mP5rBd6pqZ",
  "key14": "4YUXu2kTw6qXq5XDTvsRM8BWBWSM6gzqPcnVU3e3jDbaYs97AiCXYwyebA3bFFC4wrEtvah79g1EAEDoFh7tCqfZ",
  "key15": "5tc5s1xNDtird3R5YfamWhdfWQbjP9RfH3pP7ZHwP4kBXrq23agg8ddUmG9vswsiSJYAPEBGcVb6838M7icAjSuV",
  "key16": "8zWqMUe9vwQAt33S2uB5d7z1aogQRZdrLZLPPpUdvow7tdWZyM9HvcnnTctiych2GXpoX8rtjppEEohEzDa136C",
  "key17": "8Q4ZZaTRnJzPLJzgVa63AnmUJUj2sLrGSi7gffhmAyCKqV2UnwUgBbfAchoSGJxMQf3WpjY9dfPiRwRLiq2NsmU",
  "key18": "23kKqgDgRhHRNFb98ZvjhqrmHTZKhFqAKy6xEHCHdE7tZKV2w1wQZkD3UkauEoaKn2AwobivPqwoK1L1AComDzGn",
  "key19": "4V8StNyZxiPs6h6RqpxD2jFXLbL8gHcK4GgzEnrryAgcKxcnazn8Kq2ueZdcXWi5wJhJmXEqzKMtaMg1UndUKfqg",
  "key20": "oHDZgoLFRqebLT99DBAbLVHeXMFa8mD5XD5jkvGVggz8DT7wJxXz9Y66MgXJX27vhabDPZGKfrboW8biEtEjRAa",
  "key21": "iA25B8m2XocqgH6azcjy2XdRrgyQrSAhfe5mAgtRkXeErw28bFfRtrKRgJRG4ztWSFhBn9ZG6kiy63Me4Jq4wFd",
  "key22": "iqCM1Het1qY2yLvzrdixoo6UEXHZyk5MQMNeY8Ptt7E3CxF3m5xiHJJARJ6ExyBJFvQxhFx7syLDka7vPS9oemo",
  "key23": "26m2bWwGiUTWdAJSfx7BtrMeConqBxqivE448adtshzoPEB6pCXv2NT1V6fRFp4YkvrLKeU4Kvoa8aGtrnn9AZYC",
  "key24": "mFv7BrQP2MhYmf5NNXasG8tNbbKDwEKYxXJLT8pwuGpyFsFo2XuGD6kw6ESNAcJHuvUwkS8e8GNWWnGJBmQCfnS",
  "key25": "3sVcv77X3xLpMwJbLtzgHvqNWnF9RJRGgGoUBAV785PSQaYEZX1uDPAFHzhj5VDFcBRJZa2PnAKwMSj5kYmqpw8g",
  "key26": "goTWPyKdTpSDkXHBnLLC7RsjprBJN4u5Sz3JHUjJ7h2C8EDYk7KBJmpGFP7SwcMcnESGZnHSB9r2waSszzkuvjX"
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
