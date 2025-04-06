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
    "4r9qUQqVGjgbF13QY5zGFWV2z2vbj8nTyXTnEKRCp1TFy6ymHTbFM8vfSAYZyQVhggdfsKXEDyRdfSEWCqi5YXoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CCfmqfXc7fnVYzDE15rzHbMJVKUmM8cdNYXetjfM5j7mu6AKaMjbX7qWj6MBJa7NTpT5mj7CaH4ZB7QDfcovM7j",
  "key1": "2LZDncGm13av821n1bBBmTScJmHHKfTk8NogLqwa9VS3943LBpGDnM2B6bRrPSbXoUxoTqBgP9QBfsNSXFSt4gbf",
  "key2": "jpmmT4RKWCeWn87wNoJUkc85Shx1pxRJU3SfGVU3tPu54nQdzN9ekuAc6jMFdYSnPHUQr69C94uufcZ7hb3m1gQ",
  "key3": "7KSohGXJWYyqMZPm3AxHcRXq9SVENvBrvDEF93cUT7cntwLuaWMLHYjkYhKfsJv96TnjJ3rtoAQJHiq6pW7KKdL",
  "key4": "4jSTjo7mh9LKuYN2xYSekCYC1sR3zQ9D2Gd9JMdCM9J2pzQzWyJU2Tag14VcHLAKCKZjS4m7AMqc6cprb1tMqyC8",
  "key5": "57uQF21QKmPEjKSMHsXVN9ovMVunWwm7KSaQmu276NXhCD5wH7ioqnpVpTnKW8DVFrXQt74ZiUxzdS9a1QLTxxbp",
  "key6": "Tc1x2nw4BGYrfd8LmP32E5XkgSdchtpmjP43vU6gowhUTb1fn6chdLswN6dvinUSbUnHR2n9GfA2aH4VihqvQKq",
  "key7": "5ghf6HKRn7MqUrzFeUjn9jF8GtUajT47DT6gadAvFwsna1zqFmntDG9txUq4FLXo1J2ny7Yju7zq8J3RBp5QeKR1",
  "key8": "WPThC2982uu7F9s1FY9PTprkJ3H7yGuMmfv5nUvLJQg4tvcCvctuAWuxZgc3sTvuZfnaMti4g4gqA7VyCuMG7km",
  "key9": "45jXTyf1HCzC7AU4fc1AZ1eGugeunw4EQZAXSjmCJevDWSEjVVWwWGSphtsD5XjE2Ve8HE56od4uwo5sioYBWufg",
  "key10": "yCAqEDLBtKdXute8RZqDtE1MunasUqc7FWThTVJV9G8P9eNi2tvZ7ytgxEX9L8RvFPxX9yowWjXmLdheB3fyzfn",
  "key11": "371kP3b6LZrdLSCmBxffFqg7ZN68hZmVxN876tUF3kB1LMErmMGadLZBRY7qSQUaSK65nu5JVEWh1S8qHmRkCtW7",
  "key12": "5RXZSFfJSbtbrUppkybn1skRiXmoRZk4p63NjTeN4Sox9nkxVncR6psposNYrKaJbghB94dmhcYEjR4MHRDmxDvE",
  "key13": "42jkbVkuixkcvhiSuPiye6D5HJEjQofS767gAcvd5wsQgFS93CH2ycYZGs2zf3nDVz1n27dY3GVyqLuAH6EW8fJU",
  "key14": "J3N5wdSdiVmXHv6hudyTihZk6uCr8vsVrZJ3sU6K5J3qfpxCmhzmN1FdCicr2JJkGbheNRR6XbKFnihJ7bFcUWA",
  "key15": "2pXyj1dswFXs6PyogRRxKWTxoCxDvfK4xE1qt8kaJN6nmQV2M1C2ufawkXgYEYryPbPDhGKEDFXVxGGLrYgYLe1b",
  "key16": "4JNmL8S1YPyZQCx8oXR3iHFsf9ZjgGmJpYw4zumcWs5HnnqSW4Mh6yNioozSxe8Q83reFfn7azEEdaL6TnptUThv",
  "key17": "2kx8CkDkpKVJPEg5j59RKesRej4qGTE3gqxkeBPKfb7R1L7inrTFPULqjp9ouiSFEVkTb2aB5xDfJnEJiZ3S3MrV",
  "key18": "5o785QiFvXozgjpPR27LFschfnyG1Q2uNnoLN79eShtr93vJn1SwgMwmmT3FNAaD7Pw8zrgfY3qmMKVY7itMxdjJ",
  "key19": "2JFMHrNDyrLjnJKAGCD2MViFPYtNjyBJ2w15ryEu7VMZGfFy1ng6moyA2h6azBXsnN1pmRVUiKfqZzbrHQVYQ1dW",
  "key20": "3ryYt6UqzTwP3N4n2qvQoZEw6mXycH3LgvKP6BBEA3iyn9y6REHM1qbURZR3WNyDZX1y5eA5h21kV1df1wExn5G4",
  "key21": "w3uFNnnooYavQUHh9v3auqbC9xdF4yvZQKaiYko6YGVwVGtSm3sEy9ePZUcdgrci8rfJwaeEhXZNcN5VPNzbMdB",
  "key22": "4GZ6Kt7ih1uQQBk3mPsXXVkZZ7i8hW3MgwtsBxDRrbHeWynJFznSPaVDsNe7mQBFJCMdH6kyfU6TisNNeH2oyKKw",
  "key23": "4AvoGLtzvSkGPSnPeupGtTbZFuEVTTgkj6urEZe3LUeySFzVc5DnVA5StMGoGohWk5gHNk5N57mVrtQz8bz3AzkW",
  "key24": "24nPai5cQ5bcLcpVNLW8YHg22pKsWM1vNLfcB3TWUf3ev5w4d3cz9jtRkFBn5rdnhzM6V7rxnBiJK9tPjZA18jtC",
  "key25": "5VjcSmuNks3tndTcYUKG4Y5YUifpuNTiJE4BcBm7ZBL18VtaDr5wzoiWKUSDZ6E7y94PhLEp88n2XrgKAzMWsn8p",
  "key26": "giMHF585QxWuW16mavjghTux9iTG7CfDC9rMnBujtegsaYRsMhFf1aTh38xW3XAAR4jhXcSrZTApY82erpAuwTD"
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
