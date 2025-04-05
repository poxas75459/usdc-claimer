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
    "YAPDhoo98pWgchQtHWqxFZQeQXH23TGodiZL6PG1coSXQQPn8WCx66bCXx8dyRKTN2mNWJ2kHXdJvefUnR4MBNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iwJLg56N4xfd18xxnrdTWVhxcMc5LFobWY4tRpYckzYPop8RjWKy7JoXPsLnQyPHcbUS6MZoQPGgaqEe89STuib",
  "key1": "48xQWdDg3HXXvEFeov46bfxw8sgQq1aMouSq6MWPmWfFoFiaE5VuNk25zcJu6LVLtBenZ3jHYqyL5mSKUPX86EDW",
  "key2": "2RVBvd6p8MwePuQ9HNxCQKemX7WXLBxJeig5ftvPW8d2SuPEQYsuuzc8Gk9RiUK8CgWC6Y99sVpBvegpnmemXt8K",
  "key3": "5L7rDgKEVn17vmijosyn2R1R52KMNsJwSkF1FPPgf9CrPmAADqQ2ZsjbzJ4vC34Tcs6jzjxUJKfjM8hPDEWLp4iA",
  "key4": "64F2s7NHGxmu8jHXuYxmRYMP4i5AqMoJkTbQQTLXAC6P9ZkBCt63nQYfdD7xWPPhSF2gHBqzjvKgiPFqpX1GNZpb",
  "key5": "3N69dMwVxRpFtcHbCUc3AXMDCDizykoFnYvDfEA68hVzMdPxcGE6DDuwVYcuqHADyK7uEjs5bhcmqxiMK1qzmSyx",
  "key6": "3HjChbZe5e9jwQYfN3TuTNU1ho48k4dswjuuoL5zqqZ3iPTWAvaB2hNsUJiKoBse3ynXvBuGxD8Sktxky2fWQ7Po",
  "key7": "48Fm7smd9ccJYj3CsB16os2RSpou3GkBY4MwZHVeXGJhdRUm3NEmTNLjb7LVHQmuFeG2rG2bKWAvrGQt6eq7HDcv",
  "key8": "3QBGmu3W5qapg42JbHiw6V5TFTN3p5aZRqCS8SB1NvagvdLt4XN4QTCSo31Kk8U3G76RJU3XM4xhNrydNy2au7Js",
  "key9": "4gRMsrtRrXR6nmrZM3uiUT7AkB7QVbxTvVJHnQuRYityTqrnjN14pgWTnxqRtJ22YnyDip21zVov9YHWn9VWYdPE",
  "key10": "2eEku51nEGjYMDs57eMzL3RuUhKM1dWyX4nCZNkZAudFNeX7jWCp8AQBLvqrMWAURiPhjpr4C5A4fpzC3KcK3f9A",
  "key11": "LreHHWo4jnRSndyWCiwsJ41onDahLC4Xjwu1Lgq2L4puu49mkbVa7xYEWitgZ2fwyZWP9eE4hkDBT89mi8WhMJK",
  "key12": "5yhTcGbUZofWyt2Zr6iUZRr8YzCwJkKeKhVJ7UqCm8vuBRwFFvrSHf5P6xaeCkC37eNL82WffrZXGQj5L687HXu5",
  "key13": "2fPgeq3n39WD1fYypzSkRYR2ZR5wSUydGbuM5WMJHommc4ZkqR1XzpUUjDJnK8nfCJYMZjmZ3t5GtfboxFDB8eYN",
  "key14": "5YRYGKXPvD1q3QX7wX9Um9Wct4Mcut3sTJ7xgcxW3yzmyymbE256L2Z2t1anF3MmqX5g7z49EfJjtVh5PRXH1ye8",
  "key15": "4CTCYyjipxYuBwFycEcqVMc2usYVkiEA2WAhDotsRxVP3geNLyCVeo8SNFRkDEHFmMKMdxmUtw1fgQGX3n8qj2uZ",
  "key16": "Ng2gUKiyvukS2Z3HnnSFB9cPn9pGkH8d9XmQc3Md2cdeH8q9XHZ2Ym5zHs5f497Zf6KyFE7AaLabUNpT7nxbwGX",
  "key17": "4K7dWDJydVUfBJYxr2sKcUUiNXzEoYKvjP6VXNWnfeQEyVufG6eFUrVKS6swj6VznuWK3q7mDvMz3JRBNyNizazu",
  "key18": "3MV2RLCzUNjMzT9bcxrX8xJcHqjiF66xBbjGiE46HLisRJMWa4X1n9JBTrLdAwQidYyap8qnKzo98DmAs6cAxu4Z",
  "key19": "upDVLw9asR5HYvtMrKj8expC4DuvYh5nsqSEEQwePEonZDzDSy6D7HDWgTXYxNNFdKC7rCz5Y69ubxCaVK4BEkn",
  "key20": "58coBKCsExWdVjexHUstzz9rwxfauhGpfwLDpj8ctdoaKBtMRUfiLwPurgjj1B24HPg1BUgPfomnN1RWMcQDjGHb",
  "key21": "4H5AnBkge9ateqs2U769ZL64dfDYEhzPFRHCY5jFWTkN5rmEe8upMemwSb7eyK6y4dM7k9o7KZt8ma9xNrEqwrVt",
  "key22": "2jhCEfrwjLv7gNjZeVKX3twbfMsfEz9t4AUaJhTCohJdxgd78zhXZHHQUg72Sjj3aFBZHa8ATYyMvgPC61usMLzj",
  "key23": "5taFfE8BkmgzHyx7xh8HjfkRqbVuEoKHhHZn5xC5rZGz9MZRdSPkwQNCQsMkgK5Zp7uSWWjPiyKkAESKjbzsiPVW",
  "key24": "W5XqwMJu93aXsDzJ2Mz2WWVCgB7mgREJRyhkYLffvNebeTKMe3iJzkrfzMErSwaTCqgmYaRB63jmPSUREL8GUxu",
  "key25": "nXBgiZg8R7EkkygXvPaUMhhs2AAVDGcYcQRd6eFPPvjfiaSjZAGrdu5QG1vxibH9jcmvrgRTH84RtCQg76e9ge8",
  "key26": "4C41GMhRxeoeJ7H3UepGRCPw3n1QVULEhJtp4wkUpFVL5Th18aHQVcaRgh7jZmWUbkuvoy7gkPrfZjas4FehDteR"
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
