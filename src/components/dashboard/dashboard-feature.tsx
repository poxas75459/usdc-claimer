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
    "4BAkcV6J1b5MHPG7LNquwZY6Lv4aSFoT8e2NcTFbyosvv6LmwSSnzCTgvAhJUkCuSE33RTr1DvPFJVYEyShCWWRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qv88CsfBheLqE7k4nV55dQfwqMYSWgrUEhEiVrkstSdQLHGpfGP9MurBKYnyfsANyzyNgEuC9Sd95uBQrFhf58Q",
  "key1": "2Tj1pA8K9qFLJZkzsyQaDKFCx2PtEZwbEZXdru7gpPMWLKDT2kkCzb8WP4PUiJq6JReKyPUZo9o84j44vPGjgq9K",
  "key2": "2hsP4ZRq9YcTyp3xPAE3JtjXSqZLp7MLiExH5RXmfqzqrFBWLErSuJdE6cugXikTFa524aT1BptTBRjh5S3ZS8b7",
  "key3": "YeoWnLEsr3bK7gaWohJ9nM172uZARV2qGS7EcviFAzoZpp1hNV2wtuohjxowQLedwwFSP12va43tESiwPEZqpyy",
  "key4": "2mqiELVoHxpULPzLLQKKSc1e9hkFGQbnt8i6UdtzGA8xmXNN5R4SNsBy4H1rsa4P8EuL9QZNfV8XrZpuBxjP4XQX",
  "key5": "gJLTkx2vLXjjhT5SdtTw5akAVYJMvpAq72qxvPjDmPVMFTnRb8PBag7pjoSte3xK6RHcwE9bBF7RkxkGxs5bRMS",
  "key6": "26pMptZ5amF42sBcM2V2wyzRiaN36Z7JPgnyQ5a5GsGsbo8qEtou3q56W5QKNGBvbN24pkpMD52pvULYnmKFw6oW",
  "key7": "4dREsSAcrZzsr3kEmbkuUS1hHAx3nmM3B3uECXz445u5UkL5YqY8n2Xf5KpMWHKtAQsUu6xq1j2jnW2YRibf6KAY",
  "key8": "2avYjC1mSShu8E3gbLAnBC75SYaPWyG8FeDWjrdUvn7sN7eD977SHL5m794jYCrpK62gmZvLBC99uTquh8fC8MC1",
  "key9": "5FpURwnmv3kDE7H5BhEBVrUgGZpuBEQAA6LKBZVVF4dd4juzWyM3g93K4Z3Ja1iDwNrAoVYw44gLWmEPKXKTxvvV",
  "key10": "4XB2EVW4nZmU7Em8FL3uy6bkty4QosnoumrfHP8pQGK7ivb15DiLJvD7iw8qSwsKGZ7ZKyZN78fZ5bZkDnzeTFEA",
  "key11": "37C5WzbDNp4JNT7KiWCf5VD53jkyU8RPnbBpGtQUKAr9SaXtspqXCUbcwSqpqs2XdZFpjKNPsi4dAEX83eoYHSXe",
  "key12": "5xfU6yhpTZQdV4S663wFKQ72tpX2uMvaq9kZHq7W2HXn6JRxqQxABV3WiCT97c2ubDU76Eup2Rtsw5xWjnG5DRQ9",
  "key13": "3WgtWTZ3nARHqTnNdUYBgkhzetPsuXazimGcCiobhrGcGCMtCAvPjsQCVDzuKudjhkkDVpXTFYYjjTbmrXxcYe4x",
  "key14": "3djszFn5VgiGmZim773zKarkxWSGu6MAv7EdZAG4kHqizWisQmZiDremFmVEZoLtZ7BgtxptCVAHgUzv9e9dWr1Z",
  "key15": "4VYg8stshJv7UJyTK6zBiq8HP9hNqpEmar6tUu8Mc5BpEqt7DwVWueb7zK7qiL8kXVNyGKCkxaqb4qDoVP1UQHiC",
  "key16": "KaoNnhyjTHK2pSkvxkPSbB83gw7w1NknAWkmVu5dDWzr2UnzVw9EH17NaJUXun5LiXjuobuqavrdn8ERffuRGhw",
  "key17": "2SHejvC68ExKhY9fZPWRqeKKN982MKnKozEr8qyxpL1ytgYwDjsdMgd5g1BzTSEukx3yt5ZRu9pe9mFhsfkPxBgR",
  "key18": "2xRr5woQxSPyzwdvoySvuf3zSTZLH7uXkQuKPdujwnjbPStTQL2MmzLq21MqwJcVJXfd3jhVfxNwAwfUusPgaMe9",
  "key19": "2rukKEW3hVHDfHy6GVB7gQCFiNwfaoy2zG9Loadh6uBrssk4Vn1uqmpSVfU9S1ZZLfHbZhvjboBpH4m84oEcoXbD",
  "key20": "BWuWZJe6kE7uUcPTwBPWVxScnHqPRywEYDVRDsbBYwU5nw5hyHxLKUshoDCisrNzrz4Yix3HQbrXHKAyTdV5FvV",
  "key21": "TWkbeSFhd2rfwHZS2Hpb4cKvnxrKPEmQ9uL9N9ytPzuHcqaypk79zM4FFDLCivFxtUcErYp3hLXKbBY9swZgx5h",
  "key22": "5XoUW5LFYuv8BU9HdFCk4Wp7yNJf7EPikuPyHUV9DuHMJ1E3PZCxAQpPss3LzCGCeUfaKZuBq9QxeqUa7CzGpQRq",
  "key23": "29eR2WUKEkV1mcJrPKgW1E49nct8ztu45vG4SC7jPXHAh1X9ptXShnygbfZ5kytwkDzaVFYpZiW4iVxxESVafBjU",
  "key24": "2aFXkCi6Rkj5dUqaLA9LWZuLFTpnRM4uxyN5hgkQ7twSJiX5QYR8yUxDitArxS3axUN5j1hwm9h1GvaiFS6KPkZe"
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
