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
    "sAbFcXbRC8Ax41QpwAaYYQ1NSfV2cvnFLyGPk2FE66ECBLay9buNsfH6nV8xMDrJZ1hXrHcjiC9XvPnqe7Qt7wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SybZyhpsMLDskRCqun4Qt89rPByCQnGGMFcg4agq6hrQYiZdiSZdMHKP5RAA49aNYiuNQWoNCYxWQPKQefBw2r2",
  "key1": "67hJaGcvMBXp6irB7iGbPknCryi9EJsjsf2C7aoKAP8bKdQWuJs4Bq2RBE52jCWXY1G54teFiMmBhGUsNwLhwmLe",
  "key2": "xP6ocBSjrshL6gChazHT4X3gyNNcU7fYTTH1yCKJMehGUwRdesHosHuAyTCQXerJpbX6dse1y7Y5dA67HJvkT54",
  "key3": "2mqM52fxcjpcoPfthXQTgELaGfEFSDkuUYWNfgRCkCAAaNEzJsLNGsmWmNMBoULB3Q1EKR2wQKHStGPrBEJN1Gqy",
  "key4": "66GsffSY5zz8qWLqNYi2pLdqX65VzSJDzzD4firZ63gWP1riALABxfmGEN8X3s76Jc8LGyPL1yVMpqNhQy8LkNNG",
  "key5": "5LY9tZF7363Y1WhYrHSGW32ve6aJJ8nzbcP3qi1jUAWCdp8emReKT94F8crXgvyBMSSxKPUbhqzgkJg5eAzJwjvX",
  "key6": "2u9JmPvE8aZjcQeskYQqBzyzs76RxJwnxFDGNG1nvXs7CTZa6WTHxfRge51K4wyqEDC6ok2riNqy88JNApe7smFz",
  "key7": "3FaKf96xxStZnWHxTZcj5odgRTsQ3tL1PEbFAgRzKfAFeoaixYPnwXuDFgVHE3ZtuRfvb5ss6BkS6viH8ByYgaYY",
  "key8": "A5zvkUkdcEH6k9RRXYNQSsVFfzkC2fDehTSRVsFL5xXH59Wi85JJvr3P3Cj6azcPFtVcACoixWMUy91XEgSutwQ",
  "key9": "56HFJTpBeLCBub3Q52hBKkQq869BtRJ79jPRztFL3PsuVHyCs3EnK1Hb7p2VFoGB5vXTiXEwY8T1mjbTdGu9n8Va",
  "key10": "3hVU4gniXZqF4WdgH14SuJ8fCneS3Jsf39rdUX6qiQJJ4PTbY2zPpCENbNsCafrgX96cLShEN8b3d8XA7bive5ta",
  "key11": "3eEnktV9VoSS62eUTSnaZdKCfhr568anxnkGoGDpZYAL2RYUKothsZ24szH4RLJEUbprL8rju5YBVibTpPNfjqA",
  "key12": "5WTUwhKz8oXWAxmjr4ac8Nx89kpHvrZhqJFPx8Xua3N6zxMCVUmUp6U4HQavvYhLEeKEmAxhxxmaYPYAWywkWMrU",
  "key13": "5s6sHL4dy8w6XKP2VfrykYQXgpzyKfKWQu4Qr4zKa1GbJo3KtPTQhhDnK9Uovp5Qmiq1QfxehXwYh1PnLkP5uQR5",
  "key14": "44STVmPrZdQ5x5hiWF5iycvjuaP82EGEUYkZVzRrdMqxn1SBKzLoQGvpKWzbePHWKfgPRnKsN1CUe4pZctuHQCBT",
  "key15": "VhGrWUJCUtrjNzv44ac2ZMSZdqDgQfQqcUMWfkQudpvdKCzjWkMimiaBpDLas8wWz26FgLrewtJwMqzxQFn6oLS",
  "key16": "32RVkLA4F5dzj4B7j1pHGtNS6CVskHVVeAkoT3cJM74huBtoH6Yc2AMY5hQrDc7yPsjTcoXNai3cih6KjNQwhKCj",
  "key17": "3Qqk9jWN9vc17Goc9orL36HqnucMJVF82qqgXtqCNsYKRDWyEZe1LBvMNMC96aTGmtV6Yoz6YfXe5E3qBkkFKvnT",
  "key18": "3qtm45Wo3KsV4N5ePypJSYwVMrGJ2fejx4xQMPehHd8ena6w6LLTUMUcjs41dDrYces4QVw8GyzjtgLRXUv4nYB9",
  "key19": "2DXnzY7zJ6NujVzPCcdfYRDstd5Zsq4n8LfPhCCGYAhfFcaNXkt2dCNRXmtdQCoyeZv3Da3EgrTd1bUadvHRGPTQ",
  "key20": "2EeURARN5QVprFFGhrGeW7zj45NEVwsd7pcidxQJuae6UHjkGZC3qQ131akdu7zjMPTtC1PvGW6yvk3DKGFBRgUQ",
  "key21": "KNewz4jZNBEBctfGHysYgGPJzuL7eyphuHLsWEvfF2a6b3PMq4vLZn1JU2HXKxqgXJZmNpiwYKGepzu3bKzvdt6",
  "key22": "3CtW3QYgZFnfQXK6CUQH6SE8CbFUa7qFYTjA3M8UBqS97Egy5BYS1fNF6JqpzBWPu8ZM9s2fmpftwxANPLogfMES",
  "key23": "59mECosypRHM9vCFqijHTnzpGoDHi2FK6wBjEVKEBd45yWtEMRUvR56i3oHNMNw1MLsGuyqBZ1tYD18GwNpSLBqo",
  "key24": "32L2MBtZjTUnk2y3khDYyXQnaZ6jwLSB86YzWRTWz6j23eEw53rAKQeLbJNbrKSizQ1pPMJFi5jAveUHsn65aw5q",
  "key25": "3nQ3JwEjLuJTRbqMVod9Hr6M8B9DE2JiCJyKsmjDUh2qQzVPwHBNEx7LTC1ydwpWuC5wzTRbo4zxxX3naZFcWhx9"
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
