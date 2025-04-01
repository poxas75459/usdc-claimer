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
    "rzgr2r85kQgGyc5bfSa7iBsBTFqWMG46wtQAjGXkM4ArvBrw3BkrUkBdTy66f6VAzTxbTicVE71DVhaKBaPCh2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QGxQHG9N7HMahe8uwA9TqNVCHpDucRPDo8tisuUAtR6215nvQNmUUQGFwcSM5Kwq6r295aHx23PZHSUnCfn7Mkt",
  "key1": "4YzNsB37QX4ANz7zbBxdfj9DrkbfzbKojJ6yw32eZtazdt4B4t7GFH6nR6khULNnDqvdPkAcbtzXmno69uUUBgTX",
  "key2": "4USSJWFqhy6D4AXrYrcAqHmYuEv8F1mTLrLhc9Zsg6S13JHLp58bcGVQF6x6mSHDKY8EjGcwFQorQgXn2atGCUjz",
  "key3": "fiyMa9tFg9Hoanq1UhGEzkLsEryoxh5PALbWRFDb43pzMVBmhPmRAUxfb5ULdy2kuVDULN8URDAsY89JTYny1EC",
  "key4": "62fqsU63Ve4a6YK9p5uDTVPdsgKfQi1vyVk4n2CuwaoAxuq9fbZ1oBGUvMbzjAePMhzPDUjSU4tZp8D5BHn2GJXm",
  "key5": "4oF4BYia2x5Fwbc9iVi26GmPHsGLtiZxC1RwkU8gda2uCMoa5aKgo1wDCaGE4C93x8JWHAbzqkucsGdRrAc7t1QC",
  "key6": "4K4ar73wEYG64Ugq6YeNTpugmKFiV3WnUuDrevzGVyQ62BMeWqunMkLS8b3u2TnCzdwdAUjnqJDYWJTsUHTupCUh",
  "key7": "2xQoZUGQ3334bNnQUSHM8swHZzFSwpt4CMvr2cyH59sxSHx84HSr4LJCzzEECgv8udN7EKTQJANGQYSik76oe9a7",
  "key8": "37Dg7xo9XgEcBSJDHSejLq3UdAtdz3T1CYtj4cK6ZHPfZUACnPxnqAxzMKYUGdrTy6XB99Z4zsW3WZgDfxXTESR5",
  "key9": "LokVTj6rGR4jCZh44Z7sYBZPXRb29p1SBDgRH3XAiUn5qN3F727wTjXs3jREhVVHhGAW6FguGTKMdYcgBS1jZcy",
  "key10": "6YC5zj9k574vVRiRkQ6vkXP6wjdKJKo2xb6ssv84yqcvCq7LjwrBiQnKCiegMRXb4WYgase9W53YQSJHJGT9gYL",
  "key11": "4B4J4nHvZZETZyS6f1VgFjP3H9LaeL97K7u9Ty9VSLUjKyH4fVV21w9bysZzemQ4RucgfyeqrLJpUctnZSWRYsDZ",
  "key12": "4Zw1tVKJu4qDRNB3FwGLGLbUE7VmEX4TteRE1m2ooFxfogKyAQfsyWPKeeV1CY1z4TyJvQCbt4eJXfd7v9a5sYsT",
  "key13": "2CQbfgpduqo454DLgvV6s8S1tTnbXyrQRKA3YhhmLRMmtEjjiwLP9uEPwwaBK7wzZrGt91dNwYD9RMmwfEwrmwL2",
  "key14": "43mtFVw9CzLwqU95cxWba1D3qmxnA4TLFb4bATji71s4s7YRzmnNjyE8XdDr8iembLQwj8LYv9bD5fe4ecNWUKid",
  "key15": "2rS6aTWYFUHeAT3cM3JsuPGfxCMLLyd7izhP3wTvE22R78vApxsXZjXfuintuSfD72gLUHAb8DWcgi5u324Ki9vD",
  "key16": "3tMjn1aHBqxmoPHEptHsqgqWz9eXVUUf2TutwGTJ83y7u2M5kJ2vfakXt2ohTNf3dF7S1k8aYpr3k9x8ibubLKW8",
  "key17": "5TqMPyxcuvZnvjffXPueqWEXZNVjzdw48qP17ykznAQH4S9TUXDzpxa7Ly8iWCPmBw6guUMVKWJ4RKCKGzFthxWd",
  "key18": "5t3bUAv5CCtkDy7vtyXrH5eRKo8DBu9Ltn85NHBPK5EgoxchMhMD3oSaKBnoBGMqRyZPS3GttqZeQVr3PxDP8Uxz",
  "key19": "2W7JzQNYRG9S8BAXwew9LgcA8MwNUWdosmAsae1oyvwYurjhV3tX2wEJDLGfbcsStyvCRRgjy9m15AqYVUfEuJig",
  "key20": "66nd5ZVn6uvh4BNvuNLfpdHyPhrvzS3MDFmQySwPRLfxMG37zhXiaYC1WeBde94vZbUyJBsUyz33o4SdTYHrAZKG",
  "key21": "4TK5cn91LuSu19F1Bgspi3Fix8yqrxbv9PVzTpebP8mF1kcpsmeZkQ7oaG5ysAh2uHSPRkiXmS2Fjp5XaJfLCkN8",
  "key22": "4dVnTTLix6EdeJ2F7uhXbKnWEpC9ABMx1WTcu9x3s2LBJoCU8Tip5hM9acCBXdeySemHDjZZDrjab36ULdDm3uod",
  "key23": "omv5xNCdDEJFTRXQVGA9kh6aFvvd55XggGAqFd65UX1Q5E7FGAjQaxy6PGrYHGjdhJMxfUMYAmg8ViWvMAQU1UE",
  "key24": "vtUQqDwpAdKZ3WZSQxWAf8ChbpxtSi6S5uTvGrF9tYEmefTXgBkR5agFpRxLU7dCXzZwUXxFoQ6WDBVHgDSUfyy",
  "key25": "5q3HPXWuPY9u3quJvHNz65vPh898EKBEuqw7VXBbnwtfX3kPfAECM2qYkZ764UnfXXnqFQcd1NEwfiS5Uj9m6W6a",
  "key26": "4Tjorzehg621tvJoEzjtdE21xrxx39nwN2Jm9piSvoBUH8Q5MSocHUnuyHZoNGXWivi6tJDmoHc3uZsfuuHHqrdy",
  "key27": "5eoKLzAthakHEKnMtZCnEjsqZBunjdedX2t54ZiBp8nYauZxrZNCCyBSxkuTQZG2koE8ULmB6VZvWK2kPVy3Pzih",
  "key28": "3TfmwW9DonPukV5WUdExRzQxfrn3SWz4i4xiHqw14W38BQ399LQ73S1xraL1T2FSnURcADvCG281F7QuRng3UsWr",
  "key29": "5wDuTQaAkyTE4rPp2PUH2q4Bvbn2UtRmjqzyQPg5X3kKmTQ9uMDBqnsihPor5Cep8ZSqN5PTvQR5GHJMtsRSfF4W"
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
