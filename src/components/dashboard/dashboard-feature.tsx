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
    "2qxSW3qMVL5nrUNpQExjv3wHY6mK6HSyG5P25EE77L7pYo94Z3w8fQJoLnWMNefZNBx3Ef6YjwrYKcp86Aun8D2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VwbxDeGyYnTccwiRbQW3Wz67YZH9gfZeBE5WvQ9DjqeacLG1szjCaHeAGpN9ZQKsDjTpDkCzSvtMBj5YtKBXjVd",
  "key1": "4diH5dA3gwHn7ujJP3QPfGAeSTWZMgaizkBd5BGy4PxCBbytgccm3gNo8dfjXzXwjsgJDcXqMPxPoBtJDqjFfkSU",
  "key2": "3BGg4qcc4dsSaGRHKpaoP5VA5fHUxv6GtvEVBhff7cGxbxEJRJDeT2dowf4uD6vUVrUGPpCJDyuJrYCGFnJyMrBU",
  "key3": "3LUrUqExzByEwRXRzAXJ8hbvQzNUpk8rHUkb7k7FsprQW2Gm2xTJgNVsgKebsxsR8VLFgBqJwofB7FHFXrsp9YA2",
  "key4": "4dCRJG1WQdQ43hE6sLDH6GHjrsbCG3Gdk7CDu8aHv4uegEYYqPTr4Zsz3v1wAwCWPM19PbSHbq5BA1DqF15hoTuc",
  "key5": "5vrQoBx9D7r3eTjPW8bTBQAAm1GLVXV85jUyNdRZurZaazvkbNFBySMBKDCNaYY5JfameMLTWHG9eAiTHkqxL9q7",
  "key6": "55ZzGkLUG26tiwu2XQYjUv6q5Qu1rH5Y6mgaUSXb3rv1abWGu6zMdKcsVxDyFgzoMxqBknwZVGYXiS91HBREmTMx",
  "key7": "33kjktWjkN7BfLLCGrtFedm8tdZ4VWF7cKxWuhsCSWBELnYoo7Ak5YEniu1MPa8zaUoJRxSGQdAxMHDxbpk4PvHB",
  "key8": "5hDFwHAuVQQJFSvaDsFBUmCYYmYmgPqmsSFLxsuKPGZsDc6myU68wDyrKY2B9XpCrYMT5adqjaKpscXqP2ejmsw1",
  "key9": "3a1YisHrH4GfnW7tJhhHNBMbnE4J2kMLHgGwddpzWmnGq6UdboQWTS86qTUG1ryfU6ohn1dx4qaRHUDu8PXQUHSg",
  "key10": "cbCSaCFvRqXi8nSvWNEfNV3PVUHt6tVRwBdtqASezgtjJgsQK8MdjDnr6Kjydz2WyK1A56GdFQ6EmwiBmveuGrN",
  "key11": "4LkdqfQgwnd14TPFB72xKAcDady4qo5ZfkrZL4EWVzNY3bexUSoJ3H3E3R8XDz9TjomFG35nFmpHz8A2hP1qTYzS",
  "key12": "4CpSaqytUWdQLApyqr6xuT1cDUN53Ne2DBHEKDScdRDaVw6LiXziC1enqvPjhvmvtZcw1xtjFRYpSBtWxKRuXNev",
  "key13": "47GH8PJ9iLxAK6Z6QvD7afynZdc8tFE15jw1nameVF559e8FT7ACnitpqgU3RoLNH1rZMU9KXGeusaxXgWKTcotj",
  "key14": "2NrP7UCQmcebLL6YZZYQ7d8kjDsLHUBEcgGMLZzJdvezxyUpuoLhqKqTw52ve1qdEoaAwUbgGBMkcdC2TVwhaojL",
  "key15": "5iCTKJqfQ82ZmH21m6xYwJePFwf51nPV7hm4sXmQyzy4gDvYbqzM2Uyb56KgvLumYwSajxxNw1bareakA33XRwhh",
  "key16": "PFkJsXeWrK8Sdm3uhCrbHKJXtsXyiMpY4vpCCP5wvuGw5Kkpb5RpPc94ijMhc1qHwEBL5RRb6GNgHC61N7aT3fS",
  "key17": "3friFWTChiMsPZxvJ6jrxbxzkVRQ5h29vNhT6MoqzmTxqari7X1ithTYCYMf6vCBPqZ9i5cPDB9ssmZZakn5cr9W",
  "key18": "5bdcv8Ua1hkZNzjDcY2kZRgdaYsXfZRdLDWVFxWXYyHy5vyGRLynZkq6fyFUQBtPq2N1aUofA1PS21eeQsaHKXu2",
  "key19": "4q2Ut38ppyrGQDvPuN1hBwB8pK4Zkcb1VVAMTQzB4bcsJhXt9u2Y5xEUUmPm356bfCe7fMRxnVucb4zLUct5HAKF",
  "key20": "3EsTsTvaQvjSGNDZ3oUUd1Ay16Uc4ktMJvxgXyvqTBbnezMSVKNVTBeeZVLxm8jk8bzdg98UzkchT6BKRKAQHpj8",
  "key21": "27gMtuyBGaM2vmaj3psx8UX48AhcynXWUKKnANDGzVJ3AaTauaoKRt4NGksUddwuJJD8UnkUzAqy7Ef4MfVH9jLq",
  "key22": "2m8ThBPVPFzEpnMqz5mZtFytsvgMHyKDZxDjLj236TqrMSBPRppUoCUM6QciiNWHFWqBG3qGaGpj1L2xsCig4rgf",
  "key23": "2FQNxSDjRNSKb2fY3c187FXeqxcCVvs33r28p3VE3LjmQxmNmA1WVSFY6sQ43pTFEKTs2eLUHy9xHvDJaDBj1dpd",
  "key24": "4VvgMa4qnxXxpprmi4fKRLQ76LUwXBBVu84ohx8h6Lmm9gee472R8eAP1xk8eQAc7dsnxFUjUaSSHHBPnj6h1oZx"
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
