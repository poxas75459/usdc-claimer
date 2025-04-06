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
    "3yX4hAPjU4MLkkL1eAxw2kMJfseQdYdGv4NenhbovPPGfiiEGhFjUNGT3fjDUhD6aYiXJYsnyJJuuBYjgcFzoGAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFV6mGUYfuZWwbcHbqyzM8hFnoW5d4znAYPgXBagiNm8RHAh32zVpWZk5UEciVBBtj217jnSi3SKVn7af7Qd2Ha",
  "key1": "3SaiPAM2vToomZVegVGXEDfgpUDUfPCSfrr2DfkvyFeSQng4nQAs7dnE93nkG9omscGGMihaRx2RKRLwBPjStzQL",
  "key2": "3jEfkLvuycUyMrGPTGH8HdQmwjJKBrL7WUZ5Whsrgpbxghpp5L6znWHCYCLtZyHxqrgv761tbEBXsMCUxNWPvm6N",
  "key3": "4UigPpa46YHmALsUZFFWbZxwLf7EW3RHUTvZhXgfNvYNtVaauRKW81p2eqhWLkM9t2BxknZF8YCBoq5uaYXqo7L5",
  "key4": "5S7bzVKUrUgh2C98YeKcqginKVS9oXZc7tiALXwhUdiEVHmDnB5Xk2XFNNH4DnE4EAYyFJCJ6dHMRWKQxkRYdUVM",
  "key5": "DDd75gG9f7GZqnGzfKVgedamKLBuaSbwYv4yAN17edh3Gso2AA4eFtpHzUCk1U64MxhYhgbRyyu51Quo2XyMBXV",
  "key6": "3ETFtM2Y3qnmTWXY7cVA2BscUwAKu7d89SD5AxHCWGvhKtwFTUBLYY9tmws6heUxJkKi7ykQ9xANMpqdihSCXYL8",
  "key7": "fZ7XKm7zWVuNZ9Wea2dhesv5uYNtQ3XsXFynwcLhVV2mmRHU2A6UBuYVYqYjLkEUZYTxtnw4LMsMtQXq28vzvDE",
  "key8": "5AqQ1RGEMjwaQmoZTer5cP24w8D5jvKq7vM5F87jC9q9PUCve8a2hCjm3pSdbwm6RRoUHYqQvVGZQYkupp3NuBP6",
  "key9": "oboBq4zWAT2U9CNSj68e3ok53QCUFwUUtX9Y36HTs6Y9AyJzbrJ7ULsFvhS9p5xnBXdYhwLRRMZTcsA3eJmfQPF",
  "key10": "4iN45rdb3NSWEXwqHXmnW22oM3GcNK7W7AFdZcy9AUTUxgK6aE2UN26PKh6ck6YWiwRQTFVMCXtc5wFzqwv2zvGX",
  "key11": "5FsHQSMyAKS3VdD4K1CLaj3S1ijKzH3oYK7px2fJo1r5N8Rg3etqhrBsuftG4cj2MgxyUbnV3t2bWkzkapyBnJns",
  "key12": "258rJNVQC2StVpYM9UtXisQ9LthW3rdwqey7RKfgVtzpRq1ji2Z5Penx8yjdwev3kidzUjEE8aVXc5mGVbY8XoNS",
  "key13": "2ACogHHqDYxrGgnoUNXiQDKhdqJAuWzxLw5vX52N7jJpq8hAneZK9CsyNsmt5kCALyx1rxzSgQVFzxd7umc56YW6",
  "key14": "5UUQ84QXEVaDQjQ1dwfYpGjbv1EmVm1UdSxff2mad22V5h6V3dfmt2rqKPq1YffjiF6ghmEPA7t22UtzMppnXLwU",
  "key15": "3bFUVgpgBzVaNbYK3ndYbpvubszPX1XA7SM4Mpd5ui5gRrqqy5rumLtjVUwPNtsdb93mMgwmB1mxsKbhf49QoYkH",
  "key16": "AB6Nk5Caj5vHhvy4CGgJMo8ASz8wq1bD6WxJXySJFZemyNxd6Nc8vyNfxt82mvgfCyBRAv1CrTinp2nyDvQumK1",
  "key17": "579iaZgYwKNXr5Pzv1c5zai3RBsLfzzRkM7w9dfaNuxyfdBfFbHZBFREroGdpfo7FsD2iHXoMYCHjwiTvTFYypPa",
  "key18": "dYQ4HqRwbgQm83VAtukJ59FHXLMLpUNFUD1YmRKZq8J6AvTgBPn6p5VYP8YDAUWf4XYh969zvsb9awwqzTisz6r",
  "key19": "2z9kCNq2nUoMse9otqxeASUVcnAm6fUkRAziQJ8APkbwy5t5uJ8opLRefLvaTn7cVLJ7efqA8iAuKNJ4EBYkjcyp",
  "key20": "5Lg5o8SDved9ioez8EcGZrhYpjQdax2vaEimg43Py5t6CJ2Nm2c6gvAVjPcyoUBhQHR4pkk6umCa6kFa2XxkT2HX",
  "key21": "4ENr21PJMW3frxQf8DFMhzeWkWdahaYUR2YmXMCUA8CY4cu8m88VtmMmZyCJgmMf1YqjBriHRoX4RSQmFSG7fGPy",
  "key22": "21Bj3VK1N1MCqBPV41oNojdKRDRZVJkqR84ttNJEJJWE1vL771XqraJBnUoSufwmwCDUoGaSZxWgxnL71MW7UqSn",
  "key23": "3LKzGRxauMfFqLRk5L2Am4nKmmbTq67KVBDSdapsrZKhgZr8hsnQ4kemqPEo9LR5v4u5PGU3PDPetewDRBFcLkGD",
  "key24": "2x7v3NQbFa36kxeSUeYoTpK5qQSPA5jYbNJTe6uT3vYRW4W4C69Y8NaVLCUFYaWjrbLA5itBkeKrxLV5hz8SKuBe",
  "key25": "2CpBmwbFQQ2yLD2YWDyu6q7jzkNXFWN8DWG1X6qgUarhKhMVUNDeqp4t5hMTpqkCxTRSqagjMwxS9CseGYfMpZjf",
  "key26": "Lt3ztJze3SBndzHyiyvGxCN1GTToofFM1y91ddyx7UuQXKwh2Hgj947kdvjGKZC3SFsLvvfrvrrz7Xovd1D39uH",
  "key27": "3W2oe5rkiBBWXofrcJqZ1x8cZFQaE5CRmqJWDpoa9DV8HBN4TTaRyt5dZFLegR75JppxUa2nac6n1fNXrQCaYABY"
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
