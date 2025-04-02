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
    "37bnv3DAp2e2Q5giBKiEqJHRofjPZSs6iBwfXvMENQv78DgccjWrbvmyAbCvtAZAQtaMoUChEBQEUcesPo3tZ9p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "644HUL7WgRbasT1HHHdrtx5jQELrMYC3hR6Tsjg9q7Lf28QANNMu8fTY3U6wpnfmy2mWDHnmYNdD4KopqvbBYEMT",
  "key1": "4y6Du6baUdjuKnHEy5XhNLDpchuCdqGsVRaKeKXztuGfWbtnteGbTFR6XM2FbsDhPULVdiqDc4TRbqYppSDsjkCq",
  "key2": "2FpsQtgbuupkCS5mYkRPj8rBbwcVeNNtgsE2GBij4Aerb3rp2biDbvuCsXoiBvxV2mnybhYM8GkrKYtxF5QVPzXD",
  "key3": "fySuYAEnjQhdv27g6TrBvB9zvQjcQfyNEhDTqbbD5DCGfYs1bywKbZmtB413UZEAn2eC7FUwjGdZedFwHcpabWT",
  "key4": "NwVXxmrMcCeBEt9MkY7SbACWUy1ukifC2WhSPLb25asmY9D2nNbh5v8DgyFr4mfyrrZrPzm6gbiwzgSPqXNLVt4",
  "key5": "ruhgRvBCaDCQfMWjWuzxVcq8P6V2yz4H5WdCHPBufNVvNBeHFLKzRdQB4g7hJgupj2wnrhSxuAGCYkSdXYgU8qS",
  "key6": "2FJYCEm8uQmwheJCadpoX2NwkDRSgHccSy1BsC1whwUZSbsd9pU463w9pjnL4pgfgS1sKctj9fw61ZzipBWyU5Mc",
  "key7": "4mxn48jarfPrYYfELpY35MfWREZovZmDM6uqauod1yxR8ucVeJjuX9ASdeLfNtLuvnMocEJ6hSSgKzBv8AUiXBMr",
  "key8": "4DdDvzXbfD7RfkAzFZqmAKAUfUqTcskENhniffdE4eXYTcTgs661Ph6dmB1MGNqktpdrAvRU92kM44T2jeXhRRZR",
  "key9": "2NSJ2aYESzXvAtCs7qjkKtz1D1xg8zpD9X3ZUXtN9nS3xJbkRxDiiAw9EbTNYxRYhdjZNsC5m1YwkZTD6FeT2MAt",
  "key10": "VRXzuqq1hNNVsdsLvjpXFjLEHuq1fn6rN5XwqHXz1sn7y6ygL6fzRWEt6nbuY9VTCCcXP14AAPcLfu4yYxfyykK",
  "key11": "2Gsw2uyTeGDyRGCYVaWrsEzrsMp7rewFK8PQdG2xUCCQ322dhPdXzeYKS6iz1GhfDj8AxkPuLRQoCMSwUMhemLcs",
  "key12": "21hJFvjUazPqimdZ5eXKTwf3kDMKMxVHJ5jTKJj2Z5h8NczYFfaWfjjuvYDGNKrfvQVxLiYStQuTRzYZ2iM7rQNy",
  "key13": "3sPWQc4RqYVguRhXbued1mxnLhMSKvgDfNd4ddCpkSkiRtmCWkFaxqG2roPxQ9taXUzjrjWKdL9PN7A1CqfDcenj",
  "key14": "2XqSYGyahAsM3JgQso8GFrCGjj32yLwnXBoSTXZDUouddrPrwWsSdbEq6BnH3VEhTCNHFjTQQ3W8BxZx9EDMmLgD",
  "key15": "47MJZLRCWkigKVjU9owmfnigfQLt7xdViM6LeiuGjjy2SVjy6XGxwKYT58DVkvvBw682W2vpWC2LZBpeqxcmhSHW",
  "key16": "4ipeZTjLYU4fX4EUCCV4rSQGG72LRrPivHjY3SZcxZoqNiGwYoSQsv2rtbxb4avL66mGzs59yx8BKE8TAuE6e976",
  "key17": "NMtDTEw22f5S5cVVJfcM3wDMjYacH7C5rANpBCbLSXoSNSS34gjLt2ob7jioCUwPoYLmqV7yDwz3XdYQowyaRgD",
  "key18": "54qmpCUWYtbtEr6QxLLwVndQnQ2yfni2ZdyLi5gJ5XrbNnhexMnvoSmZofnNGWBGGvKC31YphNQDbnaGMVXASS4B",
  "key19": "2PUUBNACTvGhy138SZTGEhHi23CgkZwS1HQRj43Qs1qxioW5XYonkc9BviF5tDfYJY7BZH4gajp62pqb7cuRjea3",
  "key20": "5WwL8ZYoi8Uz2HDKPSvPoMVpmRdK3wRvN7R68SS1CXMdVZCaBTR8N3gu8ndBsFFapXjcJowz3Rbo9AxyEWBAGnHs",
  "key21": "aPQNhi83UpwHo3P5e2Sf4GN2LP118sfZKiJvknJFwNt47UoqLamc2WDGVYCGSdGYW3t7sxtitrN4a4Z8CwXqqkv",
  "key22": "3FyaxnwhNEyjRjzAN7HU432vtBfa1r8HXtTE3SekDRH6AqfyEBsiqUpAiKrZ2wDqZPeKYaDij9exShK8BrtJVsDT",
  "key23": "51zyWZQ2BXKw8gLpLkYvebCGPQjr7F6HdH5Ni5D9C7Ax2HbFX2yd7bLeW5fWNvd1ezAxhpqoBhrwiDdCQTVxW5Ru",
  "key24": "9NPvkLco6dY1nYZNXt9xVaxVPEgSe6QccEaPdTvYPxfhFD6bdqd717DpVNEw8LTB9xkYvHqKSYNbtYECMhhFwNo",
  "key25": "46ABYW8rZ71q4ksmCGug7TkyFs5wDFBc3c56S4vTvg2rmAL496T7WATwo4fjzgnHx7kwLaygitb4CK9b979ncgE1"
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
