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
    "21LXxP32i7wwuWJGoxWmSYbc9mzkQ7DbBsJppwY6T8iab1P51cU54RJABsWqodQkUtU7WbnWfti643WmVkAw5Jo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tx9YNc1RKLg5zXEANqvu3MDfprTZoYHC6on9HcierfaccUB5yguKM9qbcK3s5o3x79gJ7JMVeibSdXuGkMuhUmV",
  "key1": "5XatiHYbKKYSeiMzkrPEqdT9TVnsuiT5dadYZPfCnvYQbxQhYVuPjvPPCkDYhQoMwGCTRujnKqkAXJfnKA66MwGs",
  "key2": "9BVbmXNc7ywUEkxGtArW6M1SPwgkcbyDjVh1g4dU1WJnmf7ZkQrnz2wDTR1egqgPMFKssd4aZnuT4cRraWSc1Kt",
  "key3": "5FXCg5HR42AE1Y44Dw1wioDjUAe9HrErHTHYuq7dPU4DMnGESpsiCD71qfjbyePycGH6eyrNNLMeLEqUmH3waDKL",
  "key4": "2Hc8zKH75vqcdFpUgzJ6BN64eP1YNu3LUK58cJakMkXTQ1SoUx1qeLs3U1orNZGgMPd5GVrthevzZUFaeWuMCC38",
  "key5": "5XRN32YuK9BR6F2u544CNLHStr6nerwT3s6FWMJFhYeBKqtoMr9ySjF1yFYq3fnKfU9K6xafKXTcRg9sDoZfGbJk",
  "key6": "ssWrapbML17MoUpELVj4agE3ZeCcWpcHY5SvzWKWaiL71iKvaxFzrk3JUiBuqGzrKcQCw7vhnKPMS9mpCj74dWk",
  "key7": "5DGkW2ayazPhkanzyxaJafDaX9b98Z5TfupfPyWPCUxiH1nXsLU4uXpUShbuN8gEJziopzbmmeTGkpG2t7g86AJ5",
  "key8": "2b7unzZFBHmUA3D6aUjyyCALFguwdtEKbLyZGWAv9tQUHWZ8KSBXfSnHaDvcKe56CuNY4fQj21txDNjSKpRus3hw",
  "key9": "2SsQqhq7RWUnR1HLz6BjEUvRAGes2s3HgKMh8mPXrbXm84BHVGS1MUK1KdfQYR4Vue7WVvesVNGPxMz3vW4UyeGR",
  "key10": "vmDdo6PFWB2gxSQ1BHmH746D6y7JNUPvQQu2dF9NNzTUmLSNegfjLf6VF55zx4SHDNzBRtSfUDhpSZ8pPKTY9AU",
  "key11": "2FgMNWuKZ6Zh5Gnj7YSG5PehEG6hVUdFBFcjnqcATfZTmnz445M1iYrP7mZ4AZtYNiAgPgSng5p2cPUiPW4BonS5",
  "key12": "4VXiB7VNEmRax4qwtGcdgsYLtRoihcyWkRDJUMcgBF2KMYSp2FnLm6SHmMeCjiVHijKtPL8iwiTYsNrCVkhGxFxe",
  "key13": "pvt5qC4B9TtxX3HW1mYAoQNRJn4zk8e9xY4Y5qUBVuBuF6DpqNBjdyjVzAW6gSMKWMqffrRujhcye2Q968cPjGf",
  "key14": "5D1xdfxsgrmkzudLvM3rxecTHcNZj9odSdSBEBPogDGLtJ7mqPNcQFMoADq6wGS698FKNFdA8qhWTqKbwX2MZMYR",
  "key15": "5vtPBSJ8KPSZng6tyuPWqSkao7Q1VcbUwnyPGGeGS51wDDJ4NycSZbcv7MLLLWhaZDM6ppLgUGvKChL4UH11HzwL",
  "key16": "2WGtmN8cZ7dmfAvyjf5BQepfWi2mRodsKs3cswFF3akJLg1hELM5SNY7PW55ssL5HZgqF9D8KiVD8iDyuKpapQLH",
  "key17": "5Ckt8roJQWs3a8ceYxRdQEeboFjFQUn3e4eYD8qvH22DfM8DYNxves7Fy2pVq8GyAXXV6rXt5L1CbRy7X6LRrBUi",
  "key18": "5QnfQvV65RWHkVxmaf2tQStBSHpkbuj4LXN9AzSrwVh7Z4swqqbgjFsSnYDsHTfqZUhQZopnp73NcS5KWUomqySm",
  "key19": "4Jv8YeHLR9atq1oaSoEG9wL9NF16Md6uRxJ8Hv5K6zZA9KX3juwuJ9YqV6UwFnHJkAsbXuvYMxuuAhhSwWNAv9FM",
  "key20": "PRTswuxuoTkPFg8Cc9L5uNinzdSWC2oMGUPUwPZgWLRipPjr7jj9EwX2YnLnKvSkSqnBZiex775FXhruP2x2y7w",
  "key21": "NoVSfJG8M592phNABFBwFiNReQAnGUetYvjTjBPE8fzmGVnYng4zNr338zQaTnBvMEL5kKA1VwM3z5ASP2yxP9Q",
  "key22": "38cifCJNnDXXXcPMUSfTwE2oBXdzfoVSJXXTZJD2sJwQMgCtWTMwRdZAHzEbjiTVdKSY42BTGBpJRJzqYeCC5G6j",
  "key23": "rBecrtbdh4moH7Yk7PUZn628psFzAuYM1NNZVyDqousodRsKzo1FDBWR83TauVeYCk4KB4vJbNP4GTZb77bH5JT",
  "key24": "5V9NWtUCWrkDe6rcaCC6BY7DQDVE1RTmtxSBxQ5SZFbLu3ALbMev58okPXH1emNqcdT49eGTAtxjqj6asFcNXT2W",
  "key25": "28xs6pMPJ1g49ojdbXaKhLjLhamzszCjX6bQLf2jFe2YR3RRf57ebeyJVV9aY3awpZMHY1mCR5MauF14HbUiS8f5"
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
