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
    "2gFDWsDyhKVCZ6FxMrSXs356DJJjdB7ZkieSc2emMDSQtuVFikTvFhTVkpxfLoV12T2aEaZZRPoNqNZQ1DA9fGcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36knGedrHCoYj59vgUsDLgVHh4SxvvUmZQpGxX7jiLjcSmWAhP4VwFvQaHacEZvSXxBVx2pfh7KzHLdxU1TYzjq7",
  "key1": "2Aw4TfCumkuamEdBNwdkzJ9NmT71davUA95q6sTcWZKmkRqAzgziBd2iD1r9XwdCxpiA1tWgrGF6wbceLZKxsGjY",
  "key2": "4pndwra7LJqFQhQaqpQDw2TB6gNQZUdKJLchCTJvdYLDB6jXwScDDNfRkPHDBCxR3g3m7P1nQxAQVZo5DXEDCoTB",
  "key3": "2mtovw4Q1Tq6odsw686JwdkVKm3xJ9WdJKgzY7HXALVdE3ZqZiY5Pzn1QK9axbRPEccEFGDeU6ahee3RvYMMaW8K",
  "key4": "4PkhS8X7eQzJQRsfxZEk4Yufg5Zy8peoLbd6ppxhvyqUDAD2cA7VP3sjfj3sjMC5cVNNDJEwbU1ty7EW6vwwAL6t",
  "key5": "4DsEQXBdCKnkSjDCZcosgeR8uJLaQoo81nwXAsR5ELyyRxxnaXBua9yLQ4fM1y7NkdCfkHfX4DeGeZvkbokckZUZ",
  "key6": "4P7tPkn9KvzrK5RdrsYtfSv2ungAvYDREqSDQ1Ki9disZr83PKqrMiF35cxLXy4o6RFFB71mHFVMMNALkg2UYwiW",
  "key7": "4vejPL1e2QmfQCDKZEN4g7hWPAXLEoAc1NEgYxBiEmUonp22Eyuok13bXCQGqcWxi148832Nrqykgg3KViVUfrDJ",
  "key8": "2vXoeD8fmXLdpoxCojnatrnPMT933Cb5ao4puZ6LJEFQuwV29Dt1HPk6H7n2UDvqkUYiaWVKB3QN7D289NAvNNoV",
  "key9": "3BYoTfNvR5Sj1nriJFzwugihKmabFcQdUyrksJ8WDxZwWxroTpUUSMhu17YXiTmqasK54BBKeFUzSASwyixiVjEZ",
  "key10": "QKLzDbKkN9tVd2LYLeK4ThYKyKhBnRSzP9wf1p5Cm6jXMH5nUuL7ofcnqE6L6vUC1wZVxDGR1eS2JCvesJZh4U7",
  "key11": "aEb9292E9Bzbfv1XSTxyeQEdX8VsadRTmZxpftq7jMbW6tXPw3r6PBiRPVKZziNGF6D8fk3Q8CGoDqUN8ZPwBgq",
  "key12": "5wTxxSTKsmVsFUTjbHZEPFsPk967okEafbYkerxJHxfngWcGuLVbwKjRz9nsWfVZ2M5jk2D56a1zU7Kvz3UeTjYk",
  "key13": "8pq257YJ2NHDgsBdNuWdxJddh3aErrdoSGGGWkq1hdLvSKr215CX4fZjAYWwAXb8p5M8Nd8WaKk38nNeXZLmQjU",
  "key14": "5dQ8uj6yq7U1gQNbHvwwPFm6s3T9rtdwjwX6dPPXqCWepQzYhY9QPjGmzkgdqZK5RDQcbywHGcW5Pfbdvyppm1GQ",
  "key15": "3pQ3iL9y6ZBxtUmv4kj4WRDRyu6Z5uf6yh2BD8jgM4SKD6DyAfDCSfqW96EisWWA1v6c7RNXfNQuCAAb5AFSLg2W",
  "key16": "3JLaSyvty2qtSzTfcmQpXa1i4VcfWRBMLHsQRfMNLa8msWdLNNjg7NeaWzwSVZQmb42JTqoEYicBh1Z5XiTrEjSY",
  "key17": "48oWHMA5tP9CzPkVz8sHKbWYu1R4aw5zE5gsKojCwzUPCvaxqMfpBDLkawEL6XLjzYq3JzqWA8MbvwKDHNV9RRL5",
  "key18": "v8MHnwPaCHsRQvrSbfL8PY7VtAL5Cxy2Nmoztn8oAPUgfKDtxNV3z8QH6jHmoMWibtsfdLFZwmZFLwUEQf3p3rQ",
  "key19": "2T5c8GiZVmPFehnghwSWaygnxGFqC367hG4CfLLhqnXmxZBU6kQSM4L8kQv7Jta3Tf1s1otZQAZbMvQEGBiVndns",
  "key20": "5xAsgUC1SCcvbHRHQ7zN7uRCgJ3oc2K8j1TwCVDLNx1CRtwUNhDoF26HuVHypVz5cKL8LRpjxBPUXmESKT7UGR7U",
  "key21": "2D48otrgr9PfbePSZJytwPYbcrCxeE4bskNh3ZHQegoTh9U6BuZ6YAh8y88XtXW1CuaTfLHs132Lax8nGMNJMz4C",
  "key22": "2RBNVdVYQ6CmeZ6aurZYUKoQDkEwKmFsRMfJyVvpFtQFUMi2GhQRvaGP86muNJmRKHhKhLU6Vmvf3ULwRYTFG9vA",
  "key23": "4svr2csyCrZ27kHEDPtzfV4xJsZd2mQvoYG4taEEUVEsCV25FwbfmS6hAVzDGSYZtBRCZk9NdjtuCE7GxXFP43g8",
  "key24": "2bdxLXD1gHuZFwC3AWgYHVRNBgkXpU4h2fxFAQYPy7E73ga54hYAsf5aP7z38xVnAGuxfZvYGBm28SWpvRn23VzJ",
  "key25": "2KBaBJBep1J2bQQEuT5SeYRHzhaPdg77YDacp5mvZ6XizsqVyXLY25PETjCtzo4CMLQX1uFUFfspJ9UeXwJ8euiR",
  "key26": "33zyrTY7r95tLPvhLnUiswAvNupTw78C2ZnabjRgLhGCNZkkDeDNf6tg56EYyxKXP1uiVHcrQ4wxRumUKzSWE1Ft",
  "key27": "5H9kHbtAShVeQZgCSTEmrN34b4YbQk53irREBTeBxwKBGZNShRLpSTczRgepsNUHWdn8A3inTCi6VxgbDEmoznWc",
  "key28": "2QYdb4TFMA3efpJ9okcmFi1hDWJs6PcC6yaC91Wdm7pB99KFB8D2hPfZzFtZ7ceWQRqw4XucZTne4p361NJMB5dK",
  "key29": "4SmYzh299hYqEHFcJJ4v5YFKJb7FTA1ipJaVzn7z9enmneuZjV8cgbMGnNVF9hL7kqGMzt3VMztxfnCDc9MaxoHG",
  "key30": "A3LJoAZ6kiH9XEAjCBo2V3MXev4brovrMpvvTet1j4hT7gwsEVYL5V7vdLGESKFtUCSBhGrs1hCX61X6SKodp9S",
  "key31": "24gwCsVCnpJUnw1fAK5VC4dPEv7YpvMhBKApeJgsN42fJ6xjyZ1a41e2cEEJf3yVQw34VodDGus2niBf9W3jExMh",
  "key32": "3Fes6J65RAhWfTzMGzRNLyHPpvQpQbWDJfQGGF887sS9BZcNGD7YXnpUbUvF98JzAMUwRGQKP69CydjyJGx2T1N1",
  "key33": "3BpmqCfTCVJGFD6qep5BZ2c6RqUnq1FYukoq6neyG89YyBgyExrYFPXifhzkXYPGfJQpYm3qPjc8yMtwWb9ukite",
  "key34": "4So5jUHYt8j7oFWJP919Q8ib96kKxwDWkE9dFyyVFD6wmCWc5Dooubk1Y9aUX7gXczNpYmBH8xo3BnbcCxuewRX",
  "key35": "35WPWtzyY57VZcJhfLYvBQSp1TxGr5xUD1KsWUxCSmkt3ir1eaxtj6VYQx3ZhwPh9vZ7t3PknTsH1Zm3qFKSqmJz"
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
