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
    "8jnMCUizwAyrineEXEdb9ijvXneAfb1C4xuncvftydAAwwwPXjyteCcqjyMaU1T1rUSv82FjvC6iJitvZhYNz6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NLt8KxPwTDf2gjFBg6XsAXvsxvDPk5wxYFT8oJf5PoZoNFyRnbXkC1xjCYrt8iAxZkBVKWKXeRAAuYVVF2cS96T",
  "key1": "5fR16RtZDCMC4xPtoGc9hsjqWCzesz7xbdkJov8BKnLNHZHbCtjv1pF1RFT5QLkEDTwabzfoFF6etQEY8TjAe18g",
  "key2": "TETt8kFgdHhyuUXNUt6jRZnWXzJ89cyYAfDXcGFfcUPmNusm7t6wBrobDxrjaaupP6yN7Jia6KSVH2KHWgCRnEf",
  "key3": "f5gBZb2boXt63La4mTR1FaiLPohXuLPFqKRUzTZo5NEeVMy8RfzHoMm9V3eF8LTmqaCxzhomT4NqmW5R3aDmQth",
  "key4": "2Be1vviR3ZbTk3JZyXkRnLQxmZsxo9GxSZynMFY9cWwXiYYsRuRYGkfmTDyZJtNCJ4hPyfQK8jfT4vKq7NTm9xyP",
  "key5": "587A6A86BqCekJKK6NBHdRfqXbQikuuhPjHvWHbLeu1DztH2uYcg3Fny4dV3VtC7wxVJrTphPV1tjCFYTwhU5Cq1",
  "key6": "sHQUexnZFCDbcahN7G5ty3roL1HD1TqCMowYRgaNMzFCvKe3XHv8rQY4YiXT9zGyer8NFVup4ufTiDZmar18QER",
  "key7": "2ZJY66Tme1GBPZNbUUAm24FVHjwWZwHGVAgs82UmHvaNmNKLoiw5gEX8e1KMyG3ezYCz5VrQoU9TETutzec8vUg4",
  "key8": "5r44YeQvXU3C71AjroHXJtn8PL3yQahU6WQ2wfKospGPaikgicLzc1x5kbNdS1xPY67817Y5tg5ueHiQUoKEk9CG",
  "key9": "GAsgDD6Sgq5qkSwvXxb5Ji2Bd4bwsF8M8uzaGE6Bn27VepvmDKB2SAE9J8tqSKqWrmbtKCNLYCHJbLAZqXe3qro",
  "key10": "4eXBpXtXraXjsS6tVrasoXhrCSc69dKWtFHLcrHuhSZ8uoyEoZutpjrn4Z5mqA7CjfgowVmfooR9vBRGy7xngt5T",
  "key11": "4TZFhQRZCxh4d2wAZNPpu5TP7ztAVThoMu3KqfnvkHmZW2eKRCh8pEZsdev1v1GCnMazznUXsyzRDH9Jkh362nt6",
  "key12": "4rPS1vWrdRzcXYmykqA8coQUrEx8VhPpuPDiizCN71mQ3MUwt8NNttgNRffhEySGmB7uy6zazNbZRQWewjbUXRXT",
  "key13": "64tHQfyRvLNaZcLZmA9gGCYdYpMk9yDDas8WSdPZFYJn9or78o6Rfd5pHDhEvqXixnG9dsMGj6sq6DsKiTaqJ1az",
  "key14": "37H6r15JcyKkGPnvmHco4zsBpBswCRCEx7z3y25cJoQWLymeyzggrFJqaFeWXpy7qkyGFmXpUi5LexBBSVDEbZkn",
  "key15": "2csndKHK2Zo9Apq3xZFPQ3Kt6P1jFjrwFfFsgwf8BALUBPX6PuQQZkCHrnMUrUib88yxagY5whzCxemNnBpYLia2",
  "key16": "4RsY2F3ZDKJrL6uTWtJqkEgMPjAEzvFARjqir7KnPeb1x2dMUkkUbkKSBSdzgiBYBw6hq43x8JuBqtC7HuXvCRDh",
  "key17": "66kiMr8fwzJR64K1izhdL8FkFpBMdWrgGj67oDeoMEzozgMppXtw7hS47SdmjAMGRV8Cs5Y8H1Tzjz41fLZH3LtL",
  "key18": "51vppTgSC4mQ9mc9FcP36MzJisaHZfEEfaWdJF6diZzKHVz3tUXnxz8xVG7Z2jUzHpvD9UFAsk4RAx3R8CGGkoaq",
  "key19": "ondwnFGuFPU5Yv4TjDc3GpzHzXpTh593fZSBR34P9xaL6RNDF9BugFbofEJeU1BCLRZFVLcByAouzWMnuwNNNTi",
  "key20": "3fHE2Ri8PFXCs8a5EvF9LQPkQfuuDSNfhPaDKeLz5NHNvbx2Rgm3MtrPEfvF2EfzsRH4Jdj4S31Y6ZWqzsZCgJta",
  "key21": "4xJVjDJQJD6md5gzQJepGMptdvVAb3gBw46rMWHX6pMtCKgCVPS1qEfaPGWZrvfWGNML13epJ7nrLdsC1FURwHSH",
  "key22": "QmfSySgnsUvrKdQdBPQ6sdMGWpJDBHwpucftxvGvyQqu4psF3xrRV5XUnAXSn4vuxrim9k52EroR6DWdXTEMnPz",
  "key23": "5VGEd8jhxuFCEu6UaKJy2JievCw194UWbqikwGLeJagYJrc24XGZ8XxCyYDYC19fPHb3XNcFkPZ9MQxALzybQonk",
  "key24": "5kc88jF2GiR43hck23uDSrBa7DVbjV7u69X2M7xazUcgiatWkTS6ncjgHxzsR37eLk5aJmD59bptXmKTxmG2M8EK",
  "key25": "25h2gGTD5ayqFDGDgxHN5CFxHi3DhDNrmrgyTvQgq39VxPqd1zkMzcEDGJGAD36uvXFDpg9jVF3wBB4CzC3q7ZoD"
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
