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
    "4WousvGXqqSygAkjnsH7vY9EGnnN27xUTHAHihM8EjfZq2rYDrktkvhLpxEdERKHdUkDfNvatDZWZDKzaqUUCeRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X6NcVgSU7upuhWqz8sibaFZ5MtnK94Z9A4NikTTNPwEXmQerFkjR6SG4HHtrABrCoKjgyZWjx7gNhHzvygT9ApS",
  "key1": "2JAAGJncV8WQ8H1vE4nBgXMYXb6W3B2rwUYWkR5WhGTJaykpDaVui1qRzRBB62yjirPTguWHRVCrMaMeDPhnDAEf",
  "key2": "21owh574ps7YNsiogeQQXsGGRAPuJ16trBLQXwg8AFvQ8MQXteBEqVnQK2TQGjtXztUqS1ZF6BCcqEYUhjB2DFzD",
  "key3": "64NK4jVtE5HGb9NV8hcWFnWrV28XZxa4BuLFfyBxetvpAhtFvX5bj7oZj3KPcwnUFytECbPLH637mLU4D91d9uor",
  "key4": "FtQrKqyWBrgApNcGRZQviNekognSd8We5yrJXMwHpgV8NHzoXv7rDBF1cEoRoyFm3a5WPL4nPhB63hRztLDRCm2",
  "key5": "4iCvzXx7BiDB88srK1nbtZHLte8CVBSyomfW6qqx7vTE73shEYRYcTWGW9qr4pwu6g1B1xekLhAEqkK6hmnrN9wY",
  "key6": "3gKXLbrSVjFtarEqRe3sdGhFsAYdwaYBCK1vxX4oyBHdV2jZCVYzLnN5irpVJUnuBziifuiW3YnAQdD2BZSYuKfu",
  "key7": "2Qd1mfVv4fxKc4Ef7sQLMMbukUjWEKyGhtw5DeSw2yeD27NCxqzhaAKqCiXbB8BT5rtDGtqPX4gmbxvSF99kJJZ9",
  "key8": "4kJ6cXTasm5ueGjFTZsMd7rQQvhFs9EwL2qP3sXL7ffxSjgn3LyciofcN2NEPyFiX6wRVY3Bh1yrSu8fHEGq9n9s",
  "key9": "5A6LhUrxYwwH6QJSiVBVyRXucDPEsR1eyyRaBQ9pPSiCos3PQPY4iLRFCzzSMAawHYCWcwdR1xYR7krTDQGCqqQz",
  "key10": "5rgwp1kZaZrqwUMVA3pzNDLQirVirDW7tPRG6zhD5WRZWVCV2Mm5t5ziwRvDmyUTn5u5Y3Z54Ey4zq9Rbbsrn5oH",
  "key11": "4bWF3BvXYyM21B1XLT3wDkBFnwzqPDpn68jWeeq23UNq2jbpAY6pBH1qLZk62pCs1JekWyG39vs4uEp599yCr4H6",
  "key12": "dbUJDoNn9dahu7cetB9qyepN3QsVfGr5jJNMqjg7qFaKcJsxYwKFZBixJGMAKFNF37bVWgbguw56RvHaPf5TCk5",
  "key13": "2SJwRYYuAvb9fQWdXv7ogibj8NUY2KbpzGEw1A6idp8ZL6yH6HKru8cjcQXL8sbj5KkTy21a5JoDyGvdPmzU3EE1",
  "key14": "4KdT3jsnBiSJGk839SdChWDUuy9tRWvNVwY3BRGtL67UifRfSV1YKBqwfSbgDTogLsQBcmCeJpwDWW8MEd3rFFob",
  "key15": "2XLP4iACjxAqmd9KxophWQJrzKgyRqoYfKguzuVsiL6EhXmzSnp2xRqfHEXLsCGFDj6p6jkLcpeVF5xBH4YcbQpd",
  "key16": "4yLpfgPDLR3qKQRi6uA8d79Fhoxyh5VtZKhxVX5AqUwmxGvUDPjJyUKrQCYPSfb7aPYxwP3UGWg8UtD3d1Fvwdin",
  "key17": "4F8ftW6NpyGrMpVX9JUhUVxLt7cETNV1mow1wcNmfhddyNRp6ZoHEwJQy5YwfYW4JW9EYMWK6C9QijbLcQ6SP5jZ",
  "key18": "4LgYTGvsMb7F9iV9vs1KdMCAGrh9kwnuWyAcNooUuAxD2TuhnmiaNz6XKFZ9hgAgjoHrzKt5fMNi6T6Lh1ycrCmm",
  "key19": "59XznVqBEMDSS1uLiRGKTXSnPYqi4EXR496Pp6vvAkRQUycppcHiFC9BpoqGgNt9ezLAJo38ykjK7WVMAMNS689J",
  "key20": "4cKjuvyJgc51dAtCHgUAFiK6xmgYehKFd7maJZEtrSr1zSui69m1LinkBnCHKvRJTudwbhETkincGQk2AJaTPCCq",
  "key21": "3LrZF7kz1nqKVUKQhLFr61yuWqwH1qECJoJGR1pvhF1CA4x8nL1UHZQGZonp5PiQWK3WGSbckHqKXM39gYjHGMve",
  "key22": "5Q47qzdtNfb8KiuabJujbAHVghXMfo4vkMju8eSf7VKXXbLGd8ZcwiTeYMfo6vr6M2RqWRRVrx2janHfb9CciPdq",
  "key23": "2V8LkXkUnNzjnVfW894LMwBXSMJtHBQyMmDS5QEa8F8UL6QNnHoiqu6jkEAe76JQZs5rLhQxTVpYQneedthB3C2X",
  "key24": "4kHSc1f9AD4vp58vRmc5TLPocMgNVCyeKzykHZBEYurZbmqzVpMYZdoZJ3DmLPqNTkQB2hVHkJvRzSTvfPwmf281",
  "key25": "4MKtYnHrKSqp7bAxCyKi71xXngjzRXtsFf7MGyWZf2GZZBSvfhuJ1WvkJBi4aCtaMpE4dxFEaiwY2Pp3Yv3oaXuD"
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
