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
    "4vUyHw3hhdHGhS3zZYnv1WiCZsaKiovhJaGfJ4bS9wCZUTiMaYmFNsGpLaYyzqVAuzfGZHnsfBZ37VeEbyjr47pH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rG1wTJkGuWnjV5mskBwxE8jfBGVgEGZnaXRACWGJnDmsC1JG51esR5UfVPio64A2RYsBHCHotrfwWpPmFKmYP2t",
  "key1": "69FvyjKEmhiGTb62fJpZ1mWKDoD8xsnLwkfaBTVGhfCb6EbeLiJ8PeHtSVTWovJ5EHD2igtKSxY2Q8yjkzHkDGX",
  "key2": "2qi2bRkp6PUh2YxPJhBamRkscRjj4o4u33XVocWgw1ebKnzDCaQFF3Hr2EQkKTVDQQkx7XD2nWyDNd9FB6WJv3Ft",
  "key3": "5qzxu2LKne185rih3SjCT3VwNQQbxN28CZAsC3ucrJyQEPwYa32uB64SwXd3AL64V3ory72cH5bMMHDimeHgbWqV",
  "key4": "1XXVWKAauJg7MBqHATzATBXfzqphJZ1kV5VJqnjRTboxCPQSXWjH1MRaLWKF2z7yX4nHXUBgCsx3ZoyY6K5wYTU",
  "key5": "1EqUc2cBkRFQbAgtayicey31FFoNNcawNhvtK2Pks26Hdn2jNwhLqzqqHjwJajCdQeU8Vw9T8ZfMdD9Bii7pUk4",
  "key6": "ZtHetkSRPobbCMqfNXMJbaEv5CqS7ihz8wKKGb264H3Lfr1vWwJ5fzu1GMcfK4XfXPFyrB8G1AZyi1qwwihMLR3",
  "key7": "27KWRogaqQyEVJs88XoExgb7WcyxRUgYZ2Tk455JXdBH5CR6FZaox5CXzVKdu1aCXSJDugckrTGLgWVQw1KaJ4Kp",
  "key8": "3o96AmJQQXhJwHTVcEx2yxViJPuPrEjgk4AMGn2Z8w25ittANsixpJPLqN6829LJ8ajweU9oQCTqgQSi6avJwUCW",
  "key9": "5mjrNvxNWCvzdcAYLm6sswcgtTCt2YSRFYP5p5gESU3U9EYSQgoVoTNsnd2qjFwPkD774hxQEPdu5eyn5TscHncc",
  "key10": "2R33kcnxAV4HRqetJs5LF9zv9w3fK8KQqAmTZSrLMbG1PxUu5i9zrpUq6zzQ5nCrDrW1VtQzw3WSRGxE4huNqMtT",
  "key11": "5L61XmpgGyTM1WmKjpHB3H4PSSMzjHsx1HtHCHgnT2LjcD4H1utyWWHhJbgH3rkP2EtwwfhRFfqMtDEFGyjGEC9a",
  "key12": "XL7rMFT96jrpqZ1DBQoJFgjp8bBXmgqZg3MWYwLS7za8nDLV1gq1JVSJxezbTUgB5BhoTSD4SQyE7QUtuQh3kZW",
  "key13": "2YjQ2fRGa9GupSyrofZkYmppAWvsinHroSV3aY17AqZmbSf9scdfhKnEq2AcYuNSJeMoN8jMpWdetWLxBeF5vLmt",
  "key14": "22CbBje9ToZ6x8RmzTvZd62RKrmG3oHTf79T1NpkabpWWZCgcCMwrTV9gTmNHpo2kC6fPUnLGokfGgZTbcsof1gA",
  "key15": "4qD7SGRMQxTGRYtWRLbw9f6j4XAEQkBLDubq33r4gAgpKDbxfXQpkqMEacKJDhkKw5bTMU4pq6HCJDYRGDjY6dLW",
  "key16": "yyyV6w3vc6zYrZfB8ybwUZ13QBTNkduceYZkDeCpvDErWgFVvMxJ442pJToVRWYSzzKi83vKfwKKjxWTvjsQjqh",
  "key17": "5eHrAKT8RE174z6GeGJwkHAR6AK8yX7MvDVYhV11qpGVxqyKWLj7KeJcVH3WE8TbFisysnbZ2XTGu13gCiQZ4dP9",
  "key18": "4BGHKSPxVyigBjwn5ZqY5o6woBv8X43mLTCvBJr47G4ugR2CNds9btKWstxTjE5btpUhFVnoE5KCgudATZE61SHM",
  "key19": "2s8ZXktEhUc8Ki6cwNPiTukbR39eQXcDVua45qdvUV72PEaLBPKk4gPejgGLGrMTmuuPK5vuxGpqKFz5rBGKcrXC",
  "key20": "9XWpAFdoJ6afYHkHNTw4z5ke65MdihLzEry6mPsqEJWVrzYJkiZASMY5AW8kXor3vTVJiN9sBV3Mg1avMkZd6nd",
  "key21": "nbMFqxptUamwA7BS3uy5XzBqj3aQs4xu9yx2KrbMJmCnBv39Z5KxgaPq6UBuTbvim4b2NzaqmuJBK1xUGPBnKJ3",
  "key22": "3iEVWJgc7BgNxronuF6GHEUryycmD62vqyy97Lq1AGvZ2FtLpkx4PbtLod9ArhtdGpDpjKigJdekpkwebJL8vP5B",
  "key23": "2tGBu6h57cZ2owvfj169nJRZjiKpz5TkfRBZfv4YuGa6QCwn65phD9TPtnDcmkY5f7XyBMKWvvv7XY1Whi5DAH7U",
  "key24": "2YAh6X7gu9WjYRcA7eLz4MAhTSTk5EHvcce6ZUDHLxGuVhWprbC1jiFjXf3gFWTwYcmCcBBbtzMgz4js5SsqXy8m",
  "key25": "3GcaquihAjSKJ44rKS3vY1rN7vYUUzXrB7CWypUbN2fagepRYrvPZveK3q7oZW2T48VSpvwp2oiBh9bUzb6QjrX3",
  "key26": "29aGWgruUfDjGRpmANWBb8UEU9kFyCk4LqtTx9rDvpFVNoK2MjZSRp4SiLShqeCjrJeoN99VVc1wvJ3yyjqSjci2",
  "key27": "3R2vA9q7hPRqZ8mna8mUHY8Xd4HEn7MpbPG6McAm76YVdr3VK7PX5fc4cEJY41RsiRL5BcG1hyZ1QHZKSQLgVj85",
  "key28": "5v9R2cvtiyM4UeBEhaR4pSWfrKSR8wmD6LBuA9jPEzYc2UaFzkWFNSwcrnbCj5J3rkswZfccXa4J8fmHFfBgsoLq",
  "key29": "D5HW3vmo4PpPM9vKRXiZsfvw1AP1x4ZMkRGrLvotgZHLeUMZmH2vpqSpAqezG6tfS41uvKc6576jz3UvbtVs1rD",
  "key30": "nx6PZ1iEcGYuvFPfGpXyZtfcQhj5HpJ7DYVoH7sd8uewHPfudq7MTjdw13RT4RM3ZyBhNfJq6k2yM8Yap6hM6P4",
  "key31": "1rGGZ8v9XBnxTeuFhUPADzuM469VHrtnTWM19vNtn3JGj8ycc96RScVpkVpEuqu7HjZTiuaxv6k1YLLWTYjvv3W",
  "key32": "3CCoff5Y3RdGVmgpZDGH1vTYENCnFjbbWVfZhuYZwruT66ULg8LAF6cY1gS4FbdGbqQLnwoPpzuwvLEnNL92C98t"
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
