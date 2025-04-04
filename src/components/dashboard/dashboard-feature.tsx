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
    "4soS1uZjCfcZazLS7rq3cPv4nggLdFRZNCSkopzPKHgCzS4zVReCALdNRFGA9v4tapoGFvbM4j5V984USTe4JhjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aXFVs2AhzL5T2dKx5ThX4Jyisk6topJAXddRvEmCtKXcZ3d7cMZFUcyE7EVY8dn3XcyY4viNria6V3LaWc5k9AB",
  "key1": "o1zpcVJeczk6JUsf57GGRncwaZWHYqgD4gQx8jrSgPQGe8T1A8KfaJqtarvQPUC79SS94gXcGzH9HNYjsCHGD6A",
  "key2": "2t6xZEDEwGgskcrQTjTjMJjGwtHMRQPYgQXAL2c1x2PSj9UNVCUoScsqWso6hnbuh9cqCnn6C8BTLv5juWVBTUon",
  "key3": "4PUxAsg6wcZtmU8USLsrJCNjaD7FAeip6dh6ibPQMjbmTDyFyECmuoNnivBkgDvcveXGYmwa4TUmKvvYzFsKaFYp",
  "key4": "b24jMNjP1iVppJLaqCrpjoLjavcMQnXCWU8rZpX5CEdPmzYYwbYWbZxPe8J3R7LUgrwcwq9jKNrr1NqCdU67Jrp",
  "key5": "45BHWYA4J7P3kNjBZoVHcb1GfnE1StpW5sQBDveKxuCqKg32akA2eZCw4otZAGU94ayA7mYUzLEaZTG7mczZhHWx",
  "key6": "5ZPxuZ1DdpVeeeh5R9jNgaZqhXGBaM4sdoWVn1gTc7JG3EsfJEnsYKaXHSvcqpCqVLGvTKegS8tkaNBhKqnwMKSs",
  "key7": "3vKG5SdSQ4gQbiV5yQmzG7cNHPv6jdw9CG7DmYiiCiQkRpoXKin4ShmCohnSQyZ1UxERYagxsoXhreECT3bN5CR9",
  "key8": "jWD4Sev54RXWWLzngTp6q65M2Gd9VGPGnXid6jtAMubMLgfaFSpmrdwBcNYoH4rDPrLGBp7KQEmxpqto7hL4PMY",
  "key9": "2eAgiFTbRhsBw3azNukMhngka2EgbYjuNJTSi9614T9JU5vdFerJAv8UeyvUnddSZWqbkyxaZDPJdzTdd8wFhg9T",
  "key10": "5Y1nGTB6bGPpjqrjZEZjGpEBsqxRWXSMhTriHuL5yBq1msRYp1tpyeRifZr8DPUUMo4podsPizennrjyFCkSLSSj",
  "key11": "sBXciE81SX8hJC7As7Xn45EV9MPAePFCwfPiATzb7Xfa1dSB21DvjSxAXGuBGd9gvS2CbAHbu3ZRhhQWx5xiDWU",
  "key12": "2ajr8139HB17K4XtXxT6yAMLneWT26oLYwz27ow7tsdH3gPDLCQ5AaYuvTrWc7Np4Qa13puTo6b75t917a4pZptw",
  "key13": "3ACJMHNXdv1veUSATLRHuDhCCGRMJBPebgFQuTs1HmuAanizqGLLNxruRfhvLaUroFCfF1BeCeyboP1b6qufXuhP",
  "key14": "13KcMsmQ9cLbNSbUDCvCYh6VA5TQM23jsc8XvVRBowjC9nZLSAD35CcgCjzsHniLP8SL4Cfp4c7E5GJXozXearV",
  "key15": "4pqy5QkMdoYjc2zJiS6bjhDaZMkxYzZB3emrDJf16aL84ZVa6VscmUMofeZeKTXHB32SKRgF92ai4KksgSEMs6tp",
  "key16": "2WRVCKY1U3ShEeVdfLgiBSZNexUrHQRf3LHNcigLXjVzrR5pzS53yUsxvdYNLjvumAfvZwuj6BipML5xB4pgjvNL",
  "key17": "saJS8CJRHLyADdM3KEwUUsMc6EkZ2sbz9gAfQLBbWyNhrrDuF9e2TJGvCv3YkRsfg9h8NPf7oJrMAnKqcYQDWXH",
  "key18": "4HYrnpKVtQ7asCLfgffaQGuaMmhRYQ1aUcDGDPojH4nzwvLS1qPxTPchktyeDaKermHph3ySBKN5MGhvLrx7KSd6",
  "key19": "ZniBAsFhQZrwnenTzB1xSRyK6Lg2YpEyjDQa2nfKbVAo5QRgtkdffbsUQ631uQ1yky2DeRbWHhMBqbcQv8CvXjn",
  "key20": "3iPxcDYd1HhjKyXapXLMhHeHnY3qzaug6phLJu34VofSXWBcjQtLMWq2FCKRe2Byd1MwryHRKGe3NV6SEGVVCGFR",
  "key21": "jXAsz2ZCsd1Wot5Mp8RAzAhbFaUpJjNPKB2JrHRWYWF6KdZUfsfwXmenHv1YRBJnzCimtGXKdTuK9vxQbeJdJqq",
  "key22": "3pMfbGSm9ZW9tB6ZTyRfb98XNQQ3Sd9sWcbmj5D2X7UAwrMDm6XEyWgGY2ZejVw8pZzELampRQuLxXk5fbuyUMsk",
  "key23": "3jDLJYnqzdHdpDDwZXJTDK6MCZ8VgLSTakAskSaz4Q35RMhXEJjyovCzewNFgA4KzbvYTQeD3NEYAqkANPBrTYpG",
  "key24": "4QdP2QZuSzEhFckg7aCowU7fa9AyhH6x92cCt9qNpkrfZuR7aTypPo7TnNVMxnET7zXMHpuBWMPx6etXygHg7K9b",
  "key25": "31AWppwj3FhnW6o8z7cgfKvyty6NVhUQqVE1pQ8zWCt7FVqNmt1fr4D94R23zv2bcbv9u3HwXdTmjuL1yyZ82Sr4"
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
