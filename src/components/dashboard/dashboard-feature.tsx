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
    "MJqtqZ3mkFEbRyN3ZE9PLkBJzUWuw9BFNEVrrYiNPTYBAhTWaYS9YQfn51CXxiG6Wxd6j9Sy1RhWpvaLnCBXp9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HNUhj4ieUJs7FoH5AV7hfN4SXYUyWmjQ82cwXGJiX294TkSgRZAbNg5P6aqnHyen5Dgr8chXt7ix44YfGnwWu2b",
  "key1": "55rzYQQvZ1uQiXxocTxpWnhBeWngQTQrq6pabU4GD18aTeCjUhFKSEoVstKhBreGTJUVMpkPmwgrdaX14v8Ph3gc",
  "key2": "4KZevChJk5gWXv6RT1PjV4WHXRoNsQx5nDUY3Pk2fweLK7J1C8StiDGEZ66aQZxczKzshsPi3dhSwfaUGjBU2XJQ",
  "key3": "3ZTsu5kAVjAbaCArDZYxn8oCsqTdntqcp5aRv5vMCWkPLL61g4vgm1vdiiVYbExxa9BYspyiXiEZ9m6NYw62SjSg",
  "key4": "5bPxqcgja3gCCSYLPsKut3ASKwpS3qYzVRsHwHHDG4bAMisMDDJjP6PW2Hd2ovZG7jpaLGbNUsY9ib3GkSrCGxWu",
  "key5": "2b2x7nWRrfQwU3BNFuCNGyroPWTWMBVmtd79WoX7jYebDKnirMdwjdVgYGu5H94W9TD59gxPypD6bFPuxtiYPhej",
  "key6": "3jN2sqep3nNGW9nWhGQPqCKmjKEZKaezsExZvicV2epzbJSWFpBbn3xMwhSj4xuwk1CQaVzNtRRp85LprfabK17a",
  "key7": "5BFhJxrd8USrCjwbgyNoRBNa7iF7GEP1jy7ho23Ga4qrQYtQmsfiJM92vpBy61NP1LQQt37Ey2UccLHkY2hiMmMu",
  "key8": "5k9jfQsnrUfsgGchm1vLsMLn7fL1ABsLxYiy5u7jUYkYg8QQi3Gz6x6TQAyvexBmMeU6tSFiN2mdyTsinKBfaduD",
  "key9": "4GhsUXXWeupyLJgDg3u12Wex6ZWQK7Qg65xnoVbjGgJWt71VRZKd24zhEvq9tZrotjCZdVu5kM1H2pDwGfnLAeBp",
  "key10": "5DSqJfqXUQGV1n2ieawTzNRjyNvTJFX6Xdu3qoUvy3RdzGVss7pxNv8B8tWdRarzVvNRYwtxuZEusv8ZfSLZMS2Z",
  "key11": "2c1saTiCbRqF3VAhsM9FPLBCscwU4MMsetfpHytuNBvcx2sbQg7TzpYWTxPJSRcgVRS66K124SYc3XwxzfVeKzux",
  "key12": "4QAJv5ARNL2H2AUok1DR97x8SWd1HWhWMjbEy3w4g2H2qeZQ4gv76RS5r3KzTanWh94o4C4gapkDoGofyZHbPabA",
  "key13": "41Y9427dwcUreacUJYqUJm8R4Y6MjgteRVX8exrXiceyqq66f3J54JtD7EBa3cg9wFshohDhZMwQARMmV7nLTgsa",
  "key14": "3hY7Vh1kTFHzitcFD94LjMB2SRkWCE1uFr6pcPRDkmZL3aWmxDyXRoswwugFHD8ZpAx2x5L5bpVe95MZu72fkp3t",
  "key15": "4uzc2CKs546b2ZnyZpxrrmUV15XHwvmD3nwhCuhoJqXtDhbqG6DAnmhWYKG6jrDedR3zkvefXqQRUMYURxaACTRW",
  "key16": "5teDFDq48q5rW7D1E3P1wQNWfEQp3uodGJECtzfc6mgNPy4g5qYMvN4pNjSbJ2iXjkwhdwerYXTR5eZpLQCzrsEy",
  "key17": "4nEzA7o2B4xuFN1GjErQt9qaGDqFiPzPqauagnanWnFFbZMifK33CN4qd982qrA8WsXWPoNaSSsvmWQo6ALmN2gq",
  "key18": "66CkjdC9SbV4yB7ev14cx2kDYttb2cUa3Dj36LeYx3AXiPC98T5mWsC9qGv8Fy989i1uec8brscv6FGw8oXgDNi5",
  "key19": "xoyRLQH8yrBX7hj7CgGCXdHrZ1jRvNkqpxKZ5wB9vY9XHHJZX7dxFaVjf2n149onCbeBwFe9rxcFrDdDY6QukTv",
  "key20": "jvb5bfCr8ZMiEW42mp7eLpE8k74uGRuB1rpKaC7Js9rNT6FjWfJr78p2Gi6me5QqxMLQodhGTbSPZ2F9zjXhQAv",
  "key21": "21JbwRB5SFCU3459QosVqGrf64TsuX4bjNxQRqUFmdP4n7KL59JPWuJWgVvRTyhXfdus29AEq1GHF8HzW2Vccmik",
  "key22": "61MYG8RzT7Q8ZRWTo3fzydXu9JZNkYhKZ7cmAhPQCnuEAaEr2mSzJzHY7miGwM1NjsE66kYKBQ1p7H9tWKcK8nQR",
  "key23": "5CLP6qeuWk7cFLaT38pCTSAGGEN87gUreweLTQAexKLXi8bGypcpi6EaBR5P6xrJTTFYV5jDey4jRjWBNM4e2W3W",
  "key24": "53fbBVezKrbbjxnaLmTpWgMFhWs5xjPcHGWxTJ7B62rTasid8XV4qWEwPi4fLK12J7cvL2vF4NZ3FZpsmw8Pd5xm",
  "key25": "353V8jqb5Q5MFBq1WyqJWUbpB8q6bcYW9mGW36gqCUgn6zsFjuUHcuZC6AS5f7mkDgYCWA9DXLnsRp9imvn6UrNg",
  "key26": "2vhHr5er7NvUtWvkbCgc4Dmck5VUD1RdCYFZYJ2b5xTjUiZYwkFPUvFMe49TsahQVHR4Hd8B3onnDftmwMEfiMLj"
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
