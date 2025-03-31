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
    "3QfqQKVNtfeRXYgEaSf4GY57s4y9zPfFVyoYJyz7df3RvkN4EPzvKL6HP4uZdsWSLCb8qBwmtopYL7nv6A55K8pE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Fn8FKPCHgBty9kmUtpU6a9BVUY2aVMcrwFET7irB7Nt3pRsL5iQdHgHdByWAJBUFFdaHZTxfTnRoeqsX9brPZa",
  "key1": "4WXHQcVRm9esor9hRwkLVh3KyvpsoBDyBQm9jwj71nTJafwWUSLb3AFJs8YmAXZfmeZtEygyaRLZYBCUKrVsS6q5",
  "key2": "4BGiESdgVsTb1mU9ZbF5VgF7CnApYMr8cqVEjFsGfAxiU9in4b4NYEFsQ3By17vMoKBW435bBDCUpiKbVEo4hNMh",
  "key3": "4LMAm5PHEHancScyCocgWpYPizMHcFBj3psj4TvVVukYRvRjGYyzE2G1Te3W4oCEMdE4EWU3oMkEVR7bWN6j4LtK",
  "key4": "FwvZ9Wg8pfX3ZJjWCqX34v6KrwGjAZEAo4fisofwYv87VVTKTi6E7X8N5nWKUMA9sF6NTygvc5Nj4TwCkn8dD7L",
  "key5": "59dWoAuTijxvbERjt3dg1uhzDZs87zdTxLWvcsDoxjF156S9FdLktJiMsa5Vh4wBgKqUhf5eJXkS7y6WuCQUPHpW",
  "key6": "PAc3zEWThaZwqLzZvrHzZmfRg252ftHkAKVbwXu7epL3iR2zf5CvhpW9fx87fXqjypcYUpNBEJquS8JnNs5THgu",
  "key7": "5enTnKZLzkRFYHMyBF7H78aceSwznYx7NdBD3aKPMcxqWptztUwcSzQDJ8VfR7ArofgbhbZkiNhuCYME7hN4GrEe",
  "key8": "4wzxNCqnyuUiohh8Xg6dSZ61fB5WLtsPpjxFBeA4QLnKfdfBykcsQP3mhjNcMpcAhf65KAqXe6pwrrgzhRNYTFDh",
  "key9": "2Nw1CrpPCdaWkMtE8mkFHkoGrmjPE27VD4XmNfrTL3WCZyNNtmMM7efxLQVqLFs8CN9Nq9CVg6M8rHf8XoPKpMDc",
  "key10": "33iqXTpXvi23YZno5va73CTEMxNZw14rZmZw7qCBCarrEDoUhXCKptbgLykQDiWdkLsEJYSxHvx317THpY5YdcNG",
  "key11": "3HffdmXDMY3fihXG5nSoGHtHLuuz8q8DmtXDMENUt7yxQRyd31KRZSVB27ZQpxWxaa5anu381PF5KXj1veho8H2w",
  "key12": "3qnpEoG25kFYiVLVJM4D8JTmYoFQR4sHhB1kPB2Yj7DmJasDA82xCdLbo88u1FNg2jAYUECT19e1mGgGmwtvW7Pa",
  "key13": "4nDputDMDD6di5kduCJZjDcxPHrvpzsyxTxFizsvikW2qd6nwL24ADDkz1dyS2KwnH88F1sVVboti9w5twzdfdpE",
  "key14": "K1V2KKGRXB7KMcQFNB9S3UzkPWVMv8HPT8GjTpEMtY3WdaXoC1JjxZ6k3hNAySaZ1e6UANNXUZzxucJ5eTCVcwo",
  "key15": "33BidEAxJ1dGrZW1hgqpP3Q7GvrxRxRWiR3zrgK7xYCw9Zsw8BbhzZsxGoPpLRo1M8uG6q34q37zK85weA9tSsSn",
  "key16": "2HWrSzfh6h4K8DWcQTksxp4nzc2BVYG6gXVyodGUnjMqASVWqPhgfT3SAmsHsskruRusGbuGWWCmTKPgLXnJXLLJ",
  "key17": "4mp5ay4L6k2FZWXTnY1ZweBsUXEpTLhPRGET1CeGcfdkzZm6cg6efjcVvwqdCCfgvX3NCzmynREM89pffSqCWAD6",
  "key18": "muFLmGVmV5DyyDV6ZcUVE6pPzy6MV8D78xbgXEn11wjqUeZdonMa62kB7dewpSHPKEvDcyjFWUrDwiT928KwS2u",
  "key19": "2YVBNDDR7Te5BEBagaQA6LkJkFxnfwTbYwKrYSn4TFz7jVBYDX1LFwsqdot4yexoQpihNtQGdmHfA2om8aD7AZVv",
  "key20": "4yw8HPxhU1kJH8cyfqo1xwa8vzSbuFDChQe8FY7a8kcSo16pyjfDc7i9qedTbP4V77PXAkaVb981gZKAyDwewKsp",
  "key21": "2dt7wavhaKdYVj1tuhktnE7UDnTq8Yw7hDUq1N3anK8NPZ2d8XrL1DdVGJW8Q8TWALJUP2oCmU1JKTVm1pYKY18v",
  "key22": "5Lsben6fndid9bBSdnPjZWDvMTh7zRckxs7oKtUgdoFUvXpibhTaHf7HUWsPtpbvgH7u9or6sVQbdmBEm5s1K7iD",
  "key23": "uwYuatPcWpNJBSyV16Uakvz2aCwvk8swmUXE94xF1jLqTzyWEHj4MtA64scL6LNWbFu9gAPdZ415MUYKkRd74je",
  "key24": "44kzh3fUWHPgQyMbNRBazzirZTomf6ouL6wgcyxKUVPoBPKGzR4kwhAtTXAAsBeWBtoa2rzSnBSZVWYd4Ro5ZXAQ",
  "key25": "3PDeS1zytXdNC6FfuPwvPeTZ9QLF3QvANMixCYbNTBJtkUM6FZekqGMDMaYEKynWKcXsxtuoGY2DXZGL79YQrvS6",
  "key26": "hNFVftsA4QCjzTy5RQxrAxZn9PtFSRrtP36puCGNzYvLtthY4TAjYH2Y6uq1j4KooJN1pojwT7vZQPYqJ5efQZB",
  "key27": "c8ireEw8BC4L3sMttRcMUzu9XhUWUy82uWmnjFJkJmQjvUUAZeVQrRU9Qk2E3Ph85SqhLFDqkh7cjdVmruQ38wP",
  "key28": "4fB6Woh5NBKnaXkjyFrg1jt6NxSwyPD8RkUzHwr4kNa7c6hGTZzxMYJ2mxibC2DjAgVSGZn1vmBKZYAqHhWDGsRw",
  "key29": "2tn5A6mvFssESVEmbQhi3pEWkcJ1K4Xa4U1akeF1A2Ux5tba3Pb7mzc47X1VxCphsU3PaWTbge1WaS6BAS3EqxfG",
  "key30": "51nAH4jczTRneLqLE5Nhm756oWkAXTp1TLeyXuAHvbzZYx2dx9ahyG7jVNgEoGCS5QbHZjQxh9FT21J4yX8qtVQz",
  "key31": "2VG7LvT2taNFxvXYa9miX3KxqNfhwwt8yrNc6mWdbwyBM63oqCE5mUnzxLyrC43avhRWaZFG6h1xWQXaR8w7FA5G",
  "key32": "5uYQnofZo8sTxNXgQg6oZBuoHja9BHR2aW7v8EnkyvKdakQ95qA3DA4cg1cASdtGRTJzxtMjWKWfYY3Gq8c32f2E",
  "key33": "LuvYeiw54kqcjHyUEeQzEAk7YdL9JDSi7zXDzZ27orwA2WkfuLAdakySqwHQFpEqWbQMy4pv6THwKihS1rYtwe8",
  "key34": "3oiR6n4PCq4nSdxr3dZCurcXLGdA9vFpp6WkJMjYT574SgSuDwfbasAA7YnC6pKq4AwVfvtTPrD1xNwrHjUL16Sw",
  "key35": "NN5WQ8zfWq64G3XigPosiecp2F9BYZknVqFSTtJji2C2rUH8ZwRBk9Uyodsnpu1jJ2p7Hp2nzKADusZLNWdyn9k",
  "key36": "5PwVa28PxDJyqnN6eC34wtMpEjonqT6MQySpWdzP4Zzy6rwjeg2wrA27S7yQzTjughozFzjNa8hRbHVmdCuPuqoe"
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
