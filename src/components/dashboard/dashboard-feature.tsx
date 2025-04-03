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
    "5gGbwA2LkJ1XjqiMtXqFMf9i468WUkTWiFegqGz3e9TXrrXEabD1Q1FZLg6QLWfnXphbe64LCdDogxyhfcqaegnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xH4UCnKe13RY19JNwDgqUycjdfUczThBTcAe2Vtxi4Uf6W1hE8ktm5kjQAjDQUFfBLKs5RwLNZvrukDVDkyFF9S",
  "key1": "2C61H1HNyLhL2Etq3r16n96asinxFsaZQitutFGVCANgoMJEiMnREMUBRAiUApH8c9sbsgDn3JXaq5wM2bQRY1LM",
  "key2": "wRrWudvvt1ATciHxgjnFt6nLyq3wTA246aM6nhoxiGgWLSYfBe7NmRLXAuPRUaiGYaas5Ei7nyB4JjAjgcCNokV",
  "key3": "2gcBVXUwchRYamkn7jRsxssRbH27gLyDNMEe6VYbJPuDm3f9Dh1Z6LCnetiqNvS574YVRrEKKMgS3A3ThWxPEpuS",
  "key4": "26Vjc85UeqwGfHhbrjrRSvpV7eP3tuncfqddoBZpatW91xdsXrxZWd5ErR4qJEsgNixsftJgHyhfrLUsbVXcWYj6",
  "key5": "GnsTrEgmMfCLDbwhenNefg6yAk9n3gd4mPhskvdStvF9rnM7stbhYn19NCmMZB7EttV3RTED6hyA8QP52hnFJdz",
  "key6": "4uUKJPEwU3BdacLQUj9hTQgL5zFk9YuLEzKJb5X7SXMH1HZN97LSN6PumiG15EjoKM6UUDw3RF2LfZeksZTKA6tE",
  "key7": "2J9qhzGV2eDLJF9vQV5SKJNMbNj1NqxxMa2uqn3Y3bqMxjFVAe4MaF1nsVisRmTJ7WPQbwUYxhSni2Nm7RRmWCzt",
  "key8": "2JYQsRL15GtQK5AUQTCiBpF3xPFy1NSxZBpYz3xtyS5EL9aFZf2tEFHg1xkoXjR8qNMFHwKLdCJhDeQ51W8z2zgJ",
  "key9": "5wL53FjmqPtjhXqZ6pc8dVrriNU3CoS51vaixMUEfFZ6UfS4SWdkGk5H4BaZZTFF2kg81wjnQxAg7ML3m2NBj2GF",
  "key10": "X8gZaetZBpYEx9pQuFmH5Rjtj2paKSaNshi87TvGGEdxLYWyt8gUoCvxKUdh2t4n5LWQN1RyY4JbFNJWgcVnpi4",
  "key11": "3R8zq5ALho9xaA1c6aFQjgnifELXS9FrTTASo3ytWn5B6YWUKxj8DTY3oLvyGutXgtGeti67Ag9LmjuB7kAuyRto",
  "key12": "2nFxNNWimPbUbsu38B6ka6fQDiLtR5z7RK7DhKcsM3J682MmRKUAvJLEAgVzuxndG1yN9rf2rcpuMdACrkpdueTS",
  "key13": "3znGFZ7EzXiKeRRb9Ri9DosoJbunNxC3R1gQTJBB1Y3479fNjV6beDZMUhjajF8ArwWViVjbFR7kAh9aJHLLrRcN",
  "key14": "3kbpPzwxYjdqjZcigH8HZPrvN6EdzphuT2PtkCpfre4EcGE2UUrzgZaPWXJuajy3eFHJY68AvC6juBtU3kz5bq64",
  "key15": "3YSgzsankoiYo7C8eZjXDF8tt2imjpC4dBMCVPBa58NSuxQPQtsQXzroNmFXfPcxQNGXhbroWB2J8i6fceJkwuyw",
  "key16": "2cchW4RfcsxUiZqZEEr6Zy8EJKK4MkENjNiPdMNiJKo56ghXjYbkG5YuKrSY364iWbmgLNrMqBnee4UubeLVDqhG",
  "key17": "4CPJf1y1BxCT9ZM9hfGW5LZ7TpgA1rkAQeMxqtaUqGc6EAjpCG7AjZ4yvfvRCNzKw8hMysdgDyGXKG6beeodC6XV",
  "key18": "5dytn9jU8ZqobkgJuzNdwT6Vk1w3joYFaqpoLx3qzDgciXQEViee4sqNJgQfo3dGkpa5cVacpHRYp6VHeHhTNHp",
  "key19": "3Etc5J8dt1ZSv996NS98djNGGpz6qWUZaeDZ1GQeEv28ixaa5dmBq1kb6hf2bJURkq4FkdbnwyVvLTSU4vS6Xz91",
  "key20": "5AcZk8dtTMUFhZD2x3aSw7VadTc86WPeAHB2d9m3Ls8X7RGkQsDPzSJZFW9RVHQURmK1y527qsxh7CWo8UXFBZgE",
  "key21": "nKLe6JFYimC3AFTxLps1fcMGo8uDHxbDU2YQ8KvAk85cAKyxioxpdNArzxbgGzgxRxgp5tM9qABi6aRCdxkftbf",
  "key22": "4WYJXKRb7Buv6BNp9rpvvJK3w8stY9rg3XVD5NwrKVtKHFNM3BSS68GHaUCTVu1VXiZGKtogh5UKGQrqrcDRtqDq",
  "key23": "67584o8LaXD8MXYwauVUrB2YKFFtn8RygxrWQhMMFBWT6p3Lr84fHHAHBE17qP4Ddz7G3CWe3Y53VADYypKLUL2n",
  "key24": "5UmCeTuQ5igUqxQ4pn5BdTKH3NMGvSvaujNPrrccnqFaGNN66HPcNbjspBeT4jqEuesRtLCrN8TAuqhLGi5T8axi",
  "key25": "3zwdnCSotysMxiefnDz8zz9iJ3HfB3nYLqkxpToAX5xUszWHHAZqbeSgE1GDZq4zRHGG7XQPjG3dGhb5rJ8B9y2a",
  "key26": "4H69CzErErVN4QXtkkTEDL3bzTXr2W7XMrmm4QMDCUAF4S7ckuxYZKQ25Xkk7CEJxWpXCs18ZW8ejEXuzcUvPLF3",
  "key27": "fvteYhaFDNfwSw6EedrwjbkhNQJVNFCp6fAiRkG66cnWB7A3TnVhv7NRgQKASTgQtbGtSN7jz27mKc3d1gE232c"
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
