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
    "5GSZ6W7Qz4d2a4KH9jNWH9yDcSgu1qAPNwtW2vAx27yySB2xvQf9mA29HxaqL9AV2fnJ9FeTgGaLXLdmjoUCDtqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHj7Ca72YWq7xCxZr5XNEU37tsXH1XasuwV7KWSZpE8vLEyqQtw7zfHtikdyJJEvLEUm6njUqEAKoCByW2fX4PD",
  "key1": "66p4EdKqijz3hk4pDW3i1abb5Fd2HbGo67BmUmmAatGgte5wediN22Mp7xxJZuLGCFRvwrMngroCccFjHAkAS87a",
  "key2": "5xPpiNqvGkud7uzfBZN5Qi1rkcdj7FE3X7xHUJYGXGi6QUyDhHXWrXEULUoA1eg3mkDb9oY8VxLLnjbkqYFpMWSG",
  "key3": "5F9norRisbbTGNb9jjbqQBfBHwFcgyAMABr3d3NTCTWMmVWXoHMa7VromN89Skm5VGvnZqiSbPpJEiNQtLM2Eu1A",
  "key4": "2Sce5SDvRd2UW1gaqVXtNAgvcgHp9fbKf4zLMSU7Ni72dZe6ZMpidLfLXUqoU67BJWR9zLpy5ytvd5dWNMEVSeSv",
  "key5": "3xJ4i4h7B9iiUA3oek9eXayVvX3YEKntVKGPfMH1Y3aVXE3zDLhxNbHRNoaYWhYGrFgYFY2JF7HFf9vHXvPt1tyY",
  "key6": "3duiwQN8iMSdpu3tkn4xY3FYRAdfFEnqomuXsPqEsoVctoJBeQqWA3KvWWUY8Ymkq3BW4wttsnsQ1KgPFeBaAmSM",
  "key7": "FdXty6PuUWq9jXXnNeYLfe3WhSkoDkNL1hJQyCE1P9YBGvJkyaRVHz5N68q7vpr3dypt1JjaofdQB61o7nuDdxL",
  "key8": "iHobhjXQaFwkENG9vLqxkswbuP1pHEL9QyLaoA5CdQzzK22WEqckCoznKRvkgT8mAeYVfks2YDWa4kjBE2HtqVX",
  "key9": "45v1J68fV5JUqk1NHqJA7iBycg21SnhW95G9LvG7gB8cB5z7XBiXVwzL4hDViteGYDLexyso49zCYVCKBnpge6oK",
  "key10": "24oDXm8KLkJwywgqUkBJf8rqUVCGpoHW23s2JWWMdwLWS8mk4Fb5nkKzX4d4Ns4FjsUpMD5Qo6ynkMS8gmPC4yPj",
  "key11": "4KDNCEpMHZUQLMpiXUuLrr6VMR8ume9Exp79xmucQEw2NUAMycmRCCNYpkKDn3cGujeD6jE9VGSdYVU3ZGCgtrqg",
  "key12": "3Nw8tkHmn35gG6gnm9K7wDGz7TQxvsR5uQUqpv6k1uX65x1gLZoUvgv6yHhn8bnexqoFd7z9LLubzVCLYJUKVqPu",
  "key13": "3LeskCTVfsjJ4LNNaqfzmnUMPtY6UXs2xvpeAyv38JrheJHusBZsSW4XDiQPeRPNTb63sZKiF1miq6s3eJM2EpJV",
  "key14": "26HJoM65KmLeXZoexAutAtheZhGswriQdL5BC1p6TEkDHExdWZY7EizUQw27qha9XUxRhn4cuu8rJWSErsxMMRRb",
  "key15": "sEBoWzYU48CH5TSHzyj23NgkJCDEMiNLpAyw5LcdrNybFNgeoRPSamXfjSKsBM43LfkJbanSbu5KicqPbYaSt9x",
  "key16": "5U5WTfAoG8nTL1Bj7V5o63u98kKHaDHNLBDY31Xjs4TeFY76Qc2UdhgErxMUfUt7RBesFYZLdsw7Sbd7ejwW3Sf1",
  "key17": "4UrCQQ9uhSL73fKUpYX5ZyLB4XLfW5a7GrkevPz5Uy7asN9pEiXKhiHVRfnRt1J734PW8kS8cti4RFy4QcqnJsvr",
  "key18": "5yaKkhgmzaCSgroWHzFo1YvjF8mSjdZYJFTuP7uLri2HG8oBBBDtRH4ciMN1x4Y212bVEHvMRu6TXwCmqeK6xM1a",
  "key19": "23W44nCtEhdJHx4tHdxqEUUmSC4NvUhFsMSiDkd9Lwx4KFohbJ7qjXV9oGyu9WjUq2LXn56QPJMEKPLAvZ1Td177",
  "key20": "2ZQRFPynZEAiX7J6vA3RVqPYEYoLLcB4RKgfHzvXXeofCSgxoqhHatDuR3BnajFXuMhrn1AHcLVDRevGjzU1WgWc",
  "key21": "VtPTfc5XwiWFkBHaWfbJnfKCm7E4RBMWhFHqkjmgMKyimGQDwn9XpANTPiZAjJYEB7MbYPUDjFPeNsYQm3MeoxL",
  "key22": "4Ch1G6tpKoCQUdHh7frSuL422YaE6Q4HcQXmDRhsJP86xorFK8EDyuGKcaP9pM6jwXpbVwCGvWPH9yHv8AHRyUUE",
  "key23": "5ga2Jb7k3VEEe8Fv54Q1fu98FUbqUQq3tFWr2c6hXMr4rgmUYAQmV7dbiqoQZSa6s41zbNH2x1Z4uzmgptNKufn5",
  "key24": "47jU9hADRLtJGGfGHyYzfdnZVPefz3UXrDAvcD8vXa7YSXLqxxk6mgkR1xackj6fErqg1pUJvrB5LSkTpKmR8QXg",
  "key25": "31gEQwxYa2oXQV5eu2WdKev4yNUxxo9NETPauPj3Sxtu2R5yus64fZ1HWKDyYqTDG8Co2Nkxy2w3MuBEWh8wJjUh",
  "key26": "3iBzgqnWeyQR5wqEXVtn2sgGHL3gXnC9DFy2qLxTRDxpYgNfdhmE4Sw8uWe9QtMtt84TtCkU1mRm3mKvmKy3RD6G",
  "key27": "5D7vVXwMZ9hxWQmiED84TWAWwjU83vf3qr3DVaNjwTajiB9PRZGyL1xwvkUBPgGofA3c1SmRPBHXRwj2BmD4srzE",
  "key28": "2zapPQsBzHgDuq1Pb8ey8pJAGfnugveeSz55GASqTqVea7vebc3NTkSmJYq5JUuQiUYAY8ccfBcExfTshRbmdinN",
  "key29": "5bowp9SZd59vx9hNJtneBf2wpMKi1XPEghkrZmDvHwWxaJQuhmhQ8dp96z7ZqT9NgBiwafk4qehvpAWgDVGB8rD",
  "key30": "56BcgcykUNCpFQcPWQUxqV5fwFTewSqQfaAxC6fW9NQifgtEhb9vTeQ5wbjSn7D9oEZgJJULH4uRqA8ydCnKHm6D",
  "key31": "2obskDR49w8GV1qX2wSJxv4iAGuEtohkXGTSKHUbQv1JtBYpAKMEq17caB8M4ex4rNiaCZ9vMx5C3ZUtAhLqAjrz",
  "key32": "3ZStooQTH2SKJPM9ExC7eYYxGazmSvBECmYqWrrLgJ3RynkzmUYiyHxzXuTKBnhBjqPHnPrqRdeuc1VN1CSW8vr",
  "key33": "3e5VxHodSNXkyVwYAsZTYsBJo9ExjH26ipGPeAWgdRVEB1Xvd193khSjEuNbfEfWahGk5gjBgnJHN78yUByhL4kM",
  "key34": "5SJwMAiE17cFGFs9LahcWeZb7y4PXjkry6u8F4gCeirupj5fWm2TPQNFRuGS1sPQpZS4R487iwS3rWkbUi71fejm",
  "key35": "2z86uZzK4gi4zGUe7o2G8DNnMEtRQruyteEZjLJgHHihzMPVMQuhm7bZ43LpyYkKzTmDTjjm7z51khiqrnykTsqU",
  "key36": "5ZvQGsiXw3JCRHTHkQHGLXMuYEyNZy37xgFLRUFSgpWVzuNMutbba4Luco3HNFy9VJbpyDTh9ekNNG6qPUjsEvpP",
  "key37": "2YTPmyaxRR5RNkA5PKChJRDy9QEnHNQZpkfktcwjXaCR6k3gGLZNjnBsdxNQFC1pXyypXem83dST8iPDL4qZ7zXD",
  "key38": "5XCQpCjckGzJmUW4NLPje8HDJN9WjDmD2KC2AD1t8LxzF78EXm7wiGDhi71JCCMeQw8UxSXNfqdZAyWdk3kiLCVS",
  "key39": "2hKDRor7hUjChFKXAajpKefJPGHXupLYVxzqVxUHbQM9rtByaWkAd6R3RRPdsnfLm9tQTPMW9iEVtPSGUdjxTajT",
  "key40": "2oSzxo5YYx6ozgn5Wg54cofsajomhKFapmeH1NNMTUCiDdSVX3YDCU7xxq5A3uwa5YXCpc7L5Bwg4ETjEVMijMjm",
  "key41": "34Q4gguQbpRJWRXS5CihqkfPQVmhRJ8eHi7Wc61Hp35J9TpsCiX5D6odro7o8kJ9XhN8YKQjQdVctbXhFEb4Lmry",
  "key42": "4oeFpsh6QzWFHYP5jvVNpe9mqoVwoc8C4SDBfDJXpxE1sJt9y9RCzyWphT5mCxMCz23QXKTu7kLMpbgCdkcK4zki",
  "key43": "63g2fuMw2aQfmamjnMztbkTLZJ3eYCa4zt2tQuNv9U7ZWSaYW9BnFmBZ8gsXJf5hwch2D7bfL34vfKfeqVjwqNXb",
  "key44": "4uySeR8FiJPRz8ZpPFnXbRu5hi51Zg5stddfeQyzzXN8LcFckmR6WhK2CfAicAVC3ZuF8RwCegfk16HdNAxyDEZw"
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
