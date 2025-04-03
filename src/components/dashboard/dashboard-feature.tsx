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
    "3XAqVSGU8aki5DsHEqgX6jxoh9XTBK5zqhMBq3ptAe4hrASGNPrDqLqkXJ6WiLQNEdoc7hZbibdM1HwujMvzMHW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21VmhcJpocccV9KfeA1Rmfmjaxbja9qH5CC97SSboysfzEJbL4skDpTTSx4XXqrLnwkheXfrvne54a2yGGo1EJwB",
  "key1": "4joqDHt91zwj93aZJ6BgWXtwN1joYsmioH1rgYFZjTTN3HWYisRZv5QvQ9T4N6LHnMWPuaciRSgqY29LaDRayGSU",
  "key2": "42RQ4bLKUxBgppT9ux6w1QdMYa9Y4eBWs2Vtqfrc9ULuGH77tz9xJbcVguPc32j6EGqqVvBYhmRKiNTx12h1sdFC",
  "key3": "59Nt7NayqU76K9cEZAabi5HVgtZUquoLRApdwQa5AVAG3SB99RXpFkHmFF5MXWFfqgZ16Lo4tZ2mFXZpVqjHwwTa",
  "key4": "2mLeVbeiLRt8uWJNViRocmdW5n5EnwayJXgs1EmYYh6B6wwzWGCmWxKTaQujvUNqLd1bNkEnsTJNDPT8GAx7eTVE",
  "key5": "yDV3KGdiSvei5T5ikGNE2NsaH3v1FCr6LPgGkgDxo52z32MvscAeq6Vj3wQbeKbQ5S2z4PW8iXcPqV7UteLbK4C",
  "key6": "2E6YR2NYa6wn6ounqqB9rgcDE45W9QZACxV6dGnLGRMib1dsFtyokUjCJMNEWVEe7d9XxJkpEVhNVWe8t7D6oAW2",
  "key7": "4gPu3RgDLPPrhjjT8WFD5utWh34xb1nH7QrhzBtodpMbMEV5jw79goHtAtJ6LHC7CXgMzHp8rCMhmP2GK5NJU1pP",
  "key8": "5Uew6QwenKrLwSdSfvjerkE6Y346mDNSAjFdX1ZVE6GH3ChFWZvE1WVBcE16p7Kocmq6VDG1wF4YDmLG9PZXNKxA",
  "key9": "3iHxvUhjsM2eQivgJsP7WTf2HsKFYeFsFMCG3fjXM9Akcpv4zEGyjCWfNurFnEGcqSFonvbJyfNbFKVH2JyymnS5",
  "key10": "BKPKMycZdi3xjoNVryHECjFg8ZGegYuR3b6EC73YbWdHPoPvtj2sX53nUxbgyAB5PjjtC38gHRNqf9C1qnnGM6c",
  "key11": "4HpoaQYnppfx3nX4aV1JXFvdPX9ZhS9HZpXWAeRTEzc4dwNMhrCVTSXsBSHWaTXVAu5WvpBnpTkNEAv1Ve3fPFNQ",
  "key12": "2bj9xWwqoeEhn2dS94dWBS7qpzuR6Ji5rWNQtxxZjvqzP8KMj29tanmydi7f55pyjZfjXYWgqpMWzDZExuKmv1jK",
  "key13": "5Y3XhMdK2Yx26Z9bb7rvtJpKFD33WbExJeNPKiYeXMiFAQJRZEgphvVq1sry9HpbDqFr6rnkf6qtdauEGivmikrz",
  "key14": "s5egf24ALaze8ripLzSJXyu5zc4w6CBnafk7LU2Tr9vnJQCrDTyXeLvC25TYYY7ddSsPEtzoJGG6SfeBFU1caiJ",
  "key15": "Sb7R2Hhoo7QqhF9jqezApgWHmWbqKDAQNzEpKveDW9ygBQaMTrbUEUozWCBVNMGUCsHu4oBGVCAS1GECwfR2uoK",
  "key16": "nwp6Vw8qgqUYnA8XhwHAfACQEx5iZe7TDcNJZzEV9FqN54kkDjSg3F5T4w7GUMr5heSMzjYHJWmMhxuAYjX6hkQ",
  "key17": "4GcvVJEm1JbhL7M9iPiGGhJdpVKko2tfQPfT2qeiy9SUcDdRgtfDywj5v9vx7cCtChgQEd3U4wMx9DEpVQwHK4k3",
  "key18": "3wk8LovwhxRfAu1uT1i7CQQ9B7eFuWNjcFefR3933bUy4ZLSdrBqrsfuCu265aunhJYEm6sM4MgoaYjpxsnkUT9y",
  "key19": "GF2Le1gHdiQhFxMNePMCXfvrE29h48qBbJqnq6KrDE8RJuiVRz5UfWeLrtw1xJhk2EbEoZoKjipqrKQua35jmSv",
  "key20": "41h1DAEFpNq8G8CDWdYcGznHgJhb4JvsshWfv6mzAnMecpikXQGTUNwqgzfCiibA67XnK2zCDe4VdWtsNj2mWc9X",
  "key21": "39P1KwMJZjEi82Ns5qBGKVEvsA7fVn2wQrkngQxxC4UzuGGL7ZSf8tXPZ59JYaWXyxeozH1voRm4xED78XfBdi6a",
  "key22": "3qgXyhNcy5NGfDrLWnDJJsdpJzHruHEGSPTMMvkSVNF5xo6KYkYEXpLiFmZ1UBpaYgCcQ3wxDteu3f2YTb5HUzCP",
  "key23": "57D5LtwbZepdZiBUTuHZBGxiuAfvZKrS1VdDWEyJcdk8wq5UgzcnNwpHwtQ9HDyrhVBfuq7b7r7mES5DUQiNzrwF",
  "key24": "gUDfyK6bS65oyoQLYNRTGTaMyX1dWksV3dWnm8m8Lqc8a5GrFSYnZ5VwDWh9jRnUjdU1f3WXJ45ZtAu7JnbAz91"
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
