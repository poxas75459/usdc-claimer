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
    "3wUSVVn9NnxYuXacvA5K7ZuD6Xu2zpdLkUAroaqWV2grR1LShpPqWqxtdGVQxFKRSuaSzPjrktkgduuapTJpsjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29BNmigFaS8mJ6aNGuAfuCxyMw8Nyv6CFavLKhAz133yWrpHd5QLh37yrRqxwgdX8aKMMH5h5BDCP8TruKM3DooX",
  "key1": "2wDMWo218hNe6M4rrQ748pHWNVKzsHH7bVxfYyJsXEKNp6GsbrC9dWmig2XLBZWxsKMy8kCUKGhtnuMF2aNHucXZ",
  "key2": "2bU8CEvfGoUBfShw8Qj3bDZDZiVc9SiiN3E5v9KBHkGSkojTNmaD4A83srbzPDV9MJHjQcEeXmfcBgnA93wSVBwY",
  "key3": "2duo5i8p3BTtjMjLkUxuXxsgV6B2MoaSewRHUWUMK6gvq4QZJ2hjvC5BSfJ7o9QdRor1RoJ5xh2XYZ6YYzsGg5S4",
  "key4": "4NAoKWivkven4c3CGf5gdU633QH5RLXNP4PSGznhrrVXq1D2WHZXAVAUkwHydzTYSJGfWKpDnGBcqkr891ZozAWC",
  "key5": "2bVjqNGKACXAEqoqM3gxhAv3Gz7qxN8t8GWGarFyidfSZyDNSfE7zEhSwDDAD39XiGPzMjLLVzTZWbi2FZVnKakU",
  "key6": "7URx2a8WwKCoN9Gw26ZZimtu6FzR13p4mBCMcAArkqpZkJXatLTkRw2xD18f3Uh7yP1JojXvvq1ozC2dwEzrFqf",
  "key7": "5LnuW8ZmT1swy9a2pRHsSPEqsu3MnS8cqZPCZCrm2w6dNknEMjKskJGn2TP7CKcEMZLRVf74WzcfqoEHcQNA1X5s",
  "key8": "4ffbGFH39NwFQbw5T8j2oy1ENrc6ysf3W4y3gwbGpYHn8RD1Pwq8bkUmFY8rsMKyMq44MS4ZRrF37iDgFXLQcKLb",
  "key9": "2PN7tah1DNr5zhufHbuXW4GPcjXkv71iwyCydY8iV4S6qZxwJtc9YE2bmt35wRH3KnTmhwbkPmYCBpqSWt8EuB23",
  "key10": "3NZQv723MPUcjZgHub1BzTN2THA197ZMPt3Jk4RorM7cCrQ3vVjUtBoKfG2wLGacaky9PN4XdAgQJDwp7wZsMxun",
  "key11": "4MHxSv2TbPvkWqBbqy84GR67GZoKQbWk1yQY8uAMCPMjjwhEG8dJYv82DW5VjfdejK5BSz1eh1CSbzEYU7foJ8ar",
  "key12": "4pN6nk3JVrXcPpV8w9Vjdqwi4MDHdW7APauRVPeh4FcUshzPd3ZHg1vuUMSiVBWSmjxbZyfC35iDom6FXRaqgtLW",
  "key13": "5es2BuX8YS2kh7pMzaAem3skRwm2jse4Uq5bJJ1pgovkXYUNs825FMSYiabK8BNPxFktQGanbAGQvKkjF62UVmAA",
  "key14": "RXd3kryTqL2fjB4Heos6xdBfoyea4BF1hK5Gf3a5SDTdnp4z5KdxtZTZQgmVX3Ko6Bopp3ARHacXsv79Yq8ZVGT",
  "key15": "dHFrFoWx8DxmMubrqLuSJnso7CP9AwNEWg78JfbN9H53mKgG8XaYiD4Sb9auAd8ybuzc1RqRNYvU4gpjdeMxXTA",
  "key16": "2bE5v3cZmjNa9hN6BFhCaHTHwXe7L7JXLzF5Fn8u52R6McAAskpRgjVvQhUN1tgueu8u477cGTbtV84mAAvMCEFu",
  "key17": "49Rh9JhZ77yL4erugxf7mNyXkUbemWGmyjExpE4bxYHwou2uJGiguYyneTc7vBa8Qofbh3DSvLPnANTaFN7ZixtX",
  "key18": "VMmSDtHviaBQvmAce7ZwDf6brReeeAVBjvaUM9CL2B961xutTbxQeM7LS6RhFYqnQStuqdfEGAoqhJUPQ7UUcBC",
  "key19": "5nnPyGrkSpCAjuTNNm2jY4LLKVrDfg5Coc1EMYAU48D9BkRSecWJzNhpQB1EWi5vkyRTWr6mGhQPp34GXjTtMUwr",
  "key20": "dVEjjtDJuCB5ShvNTp9WjUGhmjiUWd26DK4zupgnHme6uW8TpEwExKeNeN4buYPawRqzcBcpAEg5U6UoVc2hiry",
  "key21": "281EwvUBf9B3Den954tUznmvRYUmkcTWRBzinfFmgMWME1voGccieMQka8uYMGQz6hhAe2iK6gh9PHqJND5oZKBR",
  "key22": "5q3hzDT7i711qVJri3rZDmJ42JvYdbVDrJeLwSix9rMVpsfDdQkRZx571oT75SX7HMizgF5CK3T9PNZZfCieZ7Gs",
  "key23": "2xpxPShmYBqjYjF8UubqbcazSAFAcnWCMDPZ7Hfq7eVyHh52pPp5JompAgdnR57rcukR8R9PczH5qqBGYRPyiyL4",
  "key24": "5TmKCFuwPxGN8g8RrvByZPv3XwVm9FmA56uPCsus9TnnH1ry3qYAmXL1ugkJs2zASDPFXVNByYsyzhiVijHetVgq",
  "key25": "5spz6o2PPA2R7T1kRqSb76ZAM47bRsUnEZXhZNkzbj3iftAMcSLxYRXWd6xvKWWNCzfajzYgo4RUeYsSADhVLrdK",
  "key26": "5wRAyuoQpDXkNECQbNgAaWiTkAZHVWTSWa8wnjzsBaNzV9LNk34d8ydShF518STCY1E6NiZZgH4RzqsQzi3Ekh2B"
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
