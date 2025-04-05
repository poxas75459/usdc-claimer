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
    "4p9XU3qkkqrFnWoPsrrCLPxH2iUJF5Cxpoaj9WJtVfyomZukkJpQrLmWzJi6km6KupbwUDDu171DYYp5bN4dQf9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GEwCC6sn5dnWzyxM3xixdtHmXy8avT3aZ9i4LY8y2aKLG98mrT943joPEGdBohsqwXarYhDDohG72tBczevRUUD",
  "key1": "5nwRfDqkPPv7NixUvNkKk1gkAd6MXxzyvyjmrqhWkUkNUr9cowwazJHiaZuXdFZhYNYUrWmJ2tWz8LovKnXNfJZY",
  "key2": "2K2tgveSjNtsbDeqKfBhJQTNvKLMWSL7mfvUfbRtU3T5uqCXXjfNayrQEFBog33prNCGjaPqNzdM2oUff2ebQZXi",
  "key3": "4Rd9ZdAbv5mx8YVnSEva45fKknKSy3JYccHANmdsrBZQp3w8NXzBRenQnWww9ZQbTKZ7s9CUqQYvccbp66aWDpKS",
  "key4": "2czTW5dKmqxRqLPsVRrqZtYrmBWVvQW5cYWHtHcSKaroLND9pH9ryJBjvCinxnYsRMRhWvjzPVawCZFH5CF3PFF4",
  "key5": "2UV4fdyMZXAGoTTMgdQvnSRN5Hdg2oWfu6K16q6aF6Jarif7obpqvcrTDsgd5YdLHxx533FfHL7unLq6gUSP3HzR",
  "key6": "3NhMM77ynoY5tGzCa8Dtse2pcrS4P2Yi1sjav1uXVLyb69S9uEWwF4BqS1J5HWsUauYPEVocb5QSBMGHzpqnuZTJ",
  "key7": "AsuXJMgDpdZKXMkkUtatJn55NhuAG3wenMspqkC7b7t9NwbS4gAs9aTPJzguP6on6Un1CHWHQDJt3e61DdTj8CY",
  "key8": "3ZTSskr8P2qsvkXvTtyWpUHReitG2HEkZS66VDY2vVUDdKMa2VkqJYeThWiXtGrGnAiajRfWN2mHUsrHV7Y5aJG9",
  "key9": "bUsK8DoCWqXFyGCpBKcC6iCZmNDPP4Fbp3PGmgwJfyraye7cwgsWweqFjgTSYEo4hg9uiZicXWXjcp9wzX5RmjT",
  "key10": "4ZAHAtghKAGAMHCAqc7ZYQDavbRUJEkNo9ncpwN6nhEDCSTk9HdXH5r1cUfF2Heuwi6akVyJu2u6n4dcaWUrzwVf",
  "key11": "3UgsUmPrFJ5Q8y3apnzXDbSK1Rs12pvX1sc5NzsicHYMpXa9bS1Mnqg5MvSNKgouJP3abmVVxismpiwN6EUsv6Ks",
  "key12": "42Xu2QCihqJqPdgaDkRQn9Zw3Abvyoz9UM9QMGSgtkRn4Px9tn2RVXUCUKAQh26Xba9CkEg78KKDHQtTMzrujLEV",
  "key13": "SL4HTSxTXLPZX6wKT9CCyqN43ANvDwctrCypUNyNBhfD3SiHkUcrfY5y873sw53YHnxanmHtMw2susGug6RewJq",
  "key14": "4wFbQKjB3LCFYznPXQfHdwGHj8tfmiBx6ZxWgHpL7vHfup69J6TKi8VxQqzEJ6nPBAYxfHdvjY54cgyiuhCrrr4i",
  "key15": "4de9d6mGn5kaLZbwLNAgM3xcg7GnquRCyegiEYGaEki7CcJ5uH2NDVjQNwidps8Jxhc4fauDjdEBhnVxD674r8nr",
  "key16": "5ojLVyS5M6oQaQxgrp3gb8sa3Ko4V2LBBB8afRUmwCaW4zWLCgW89biCLdrXgzdbwvmNLGY8DDu8PJkkSa7EVVeU",
  "key17": "2inawLUjgPbPttgNLiT845WXqVEjfKdQqN8dKh4dau7pxphSR4Vq7V2TL1WZdz1NLNpLA8Gy8xn5zY9eJRbf4yp3",
  "key18": "4C7NEH5DTXwqXYMm83fh1dtB7FzxTf8qng5U5A9moN92uEehppf4Y4oCf5QCyE3S4hRZL1foTigKQiQoQicdWRX7",
  "key19": "5hooQSsqiRU7jH1cF1YE8DAkH25eAd6hwneaE1XgWkZ1H6Xqa82YPaudFHDwDege2Z8Aum3yi6M4KePWVKguWt4J",
  "key20": "567RtZE4oXn5NW13gw5jNa4ZrCSd8SK9JXyeAhZUiFKtNCZ8NiKgUJPGo4oUSCbuXkH3VbUyoycZPjmzVa96tKHy",
  "key21": "5XGoyk3MHHQnua9preGUtP2S7SAdJkF2dsrCoktvoGN4QqWVgunPaScFAr54Sk7xzYyS1Cn3UCkVWcUVafnWNEMx",
  "key22": "2YuSFKtys2fWF5SfWwagFZSn1617tQHMgZeFDS8WTCfC8Ns4uSeh3jkh8Y9PnnsV9WoQ4dwnrBhiPpLeSRp4fn6L",
  "key23": "JgybG4aMkfjbgby4vNfZ8JSaoy6w6W5rDUKwrgBGCN16oV4CCpDwrAqKebJXku29fVztuVk3mn2RHwsQ8hSHkB2",
  "key24": "5PJZQsZeX5o1Gcr1HGRWvrK2sv94tgocnEH3sezPAQhGw2YrdRPd5p1XHUDyWPTJL4MPW39D3y4TSY21EJ5fY5RE",
  "key25": "iFgEcYKd3YfqxqpBScCzEzZZjtQkjBWDNCyH22QuawANLtREbh1Jo8fvUKK5faNyn9P8k7dQHqAyYca5W7CN91r"
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
