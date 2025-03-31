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
    "3jB4JiiYeyPgGXBBtEXRzDsrq3S3f8vKJo4aHyaTa3gdmSNLj5oRSWo18Mu2YstEoa7neXGwKSW8pezMRcpUZikQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HmpPphsRytFP2KAUY6CxKTrQPwZ9FhxurDYuzQD77giPbn5dE56bvkBcZnGT3phrdVtMcYGAiMH8QagHVhUMwwv",
  "key1": "HqUku5bJoEYKgY6eHX3WBmPRc2mYV7H6a4Hmf8jEmiFek2Hh6CXTXrWMh3XeTYBhZWUgG6mc8M8eJrLSDMKgC64",
  "key2": "E6XhqaUy4HtjB72dKfNkD7gjQiMJNHU9NyPVM7acfbcB5EfB2QJizSGA2kQUCrEDDACuz6JKKdvyLToG8q6wJPr",
  "key3": "GLzTPiX8oq3EG8pSffVW7Apq9qyYxmj9aYk8g4bro4tWmsZZgodybS4njaKhov8fGZWxc3pJhDJwhHFVMLBtQv6",
  "key4": "514tWQpyU73EyzqH9LXNJ6ShQGD8dLTR3QEnw67rBVbX12Bar4C8u7Ec94vzJXQV2GR1N6FY8AMsoVNWMVC4uW5c",
  "key5": "2ishdRsERzXshxtBt6cXN9u9Tu2WJ3rvzsj3ETirvytZV2JiyQdsZjSKjnx7DByzLVEGm3Xxf7NcavQdqnuxdgjy",
  "key6": "FRNMhuLBQWjtq7vyhcJfDch6tPDnPUhxW5Dq58UCsy7wmuMMfzvSi2qLBYKcqwp4Vg9mJQUpfqvwefn5BickDK5",
  "key7": "27AqUs2BZAEgTXV4kscj6rZhUnfEFzBBz6uB1CqwbqYmU2c5vkisMHHWAuHAb2a6LYeY8r9ZfjEBWpkkGT1Gndqe",
  "key8": "5R47Awe8ZEz9RMEsimPckBYXuvnZBV9EaNwnBqQJXuw83yaX7MDAoDoXMntgmegDbCPUc4HtkEyedP2XZ1RPFwSh",
  "key9": "4tviVdT1yapsTkosjWSpwXLpWnKuLjqypNwfTqxoGLVt6JMMQMUPXRZPuFQ4owU6sK52NNpQ2Zuy5QAnnum2LmMF",
  "key10": "2j7KbqfzTDCxrjvQn9SedT8JHAyKMUde9ZKavgwqcNWMuBVZRhtnExCniQ8gr1TW8Y8fpErxvND1S736fLqtfjBy",
  "key11": "UsBMNWsnx4AXujviCke9Mk85p7JJcm16NNqshwpT2FtPtZa3TWxGVy94V59nJjCWjmwGGD7kVBpCydqtRFfkMEG",
  "key12": "vHR9fdXZ3P4dgbFBX6d3Bb3AxmATfaZ3uf23Hyyhr2vpuNZj8NtwipmVyjvfzYZLwmeJiLJ8kwkAcjPVrfi64hm",
  "key13": "4SMr2ZzedhxknxjKKwXBaJyPVzLsssfb2X83Y9NmQMa3kr9UMSkV4xLqdFTM9ts459P7quFFsPNdGuHRQmxDtXZM",
  "key14": "5bb5XnU2hEnuh4cGfrVpJU2kQmKeHNx2nZe8egu6xLs9pVRdMRaq24kKptE1f4jVsMQho8aSvkPyzvds8j3TG5aH",
  "key15": "3zjWNmevtFLJxT4iArXRmShwdJyfqf68iBULRZZwHthtN1WAP6s5ZPHqHy8MxGgBxjGAEqFs138ANbKFYu6c7MVT",
  "key16": "7ufHe5tiiy6DQjPqVBEamHrJ364ddw1r1g3RwWWEYimAe1UX5n8mbX7xcC2C5PsVut2iLhPZZX78yJe9wSr9Rtm",
  "key17": "25pJFJhFx19o9yhRvzn68AotkJzFAvJnLXN3f2riZZUubPE9oyjbtMExfuYdMApuo6W7p9nF1vrMDDH6v2sZPaa7",
  "key18": "3s2yjzVgVqNoe9jEosvcdXp9X6dWgxEQDcVPKc8d58gH2GCBd3mpSP5ardwL8vBPo3ZbDsBMS3w7UadvniqUzc4Y",
  "key19": "fVQMU9AEgLjQSoXL4vSBZR7eGgGJ1Xx3fs1bvMKtXaS1zhkYuRtgiLchBYSTdNm6833TKRczAm8QFDd1NGtDmy1",
  "key20": "BjvW4xxJjRGz4YManaxv3bJUjL2PS69ADwj2uuqYMzyKCGe4oZ3diNnVLkHRKT5fu5vsq1463jT4CVbL8fjL5p6",
  "key21": "5PZrPm8Q2j5pJuD4EQ1PqSPJzbuVoJDTJ4Z43FjDk8r1LoPiZMYb66CRJaumiRT7BzKovybWegjJZnZH8cD5dC8u",
  "key22": "58KcM2bKiiirhgdhQJvxWr2bNHbZjZD3m4tsJTSVwkHAdxTGmosbA8SzGWyJgY3yX7LDRFvvyf48vDatDdKWrejq",
  "key23": "9ERSoUTADi9up9jogG6DgUQbpcFTCjA1eSRqgACum5LvcW77rMq4BYmQ2YBKTdFHt9jy3QLPF7EBumcADhuCz3v",
  "key24": "3Tox9hh9uND8ckw1LikwbXuBPVmceXuZrpgtnQRmSGoejV44x5tPgrgRyMs8Gu3ZhFvxbh23yhubpyxhjne1ztyC",
  "key25": "37x9xxussStizgh7xbT2cTXRKjKY3x67xmnqBPRj1MBR3JM6f8yvw6XyWdJVk6ijAA5pukykV1k4A36ubEpWgf32",
  "key26": "SxkvSoLwDShxqvAWXyL2d7UGWTFCEZtTsgkFAq21gZxkwhoq3Q2zbbxhCT1EyXdqUcjfPzTvJAXc6jkasruGX2x"
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
