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
    "4JpQAZoo4Adufss5UteYW9QvRF9JNqxUBVW4EbvTbdLSebGJJerkPmVh42ERYjSmFsu4kDM1T3T9FoLfBa71z2YF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zs7pwGnCWoiEXWESr8tk3wxgfqH7CEMvtXsSWebxkwjXHxT2ALPjahF7kkowtzWzJXqEP8yD8k3RN6obfiwN4wR",
  "key1": "5zcdtjTUzXr4jKuMbB8dcS5yF6wC5jsv5wngewomH3wXyGYXmkVhf4c3UQXekHnUeq9ZNxRgBtcLDZ8nW8TNRdTQ",
  "key2": "2BvnydD9uGQtTQVV1azKeZ4mYMHZqkn8FXJ4EqUuVbiGDZsX5nyTuzHW9yQdQnQYk73fbBbustAZPJ3w9QWoN5LV",
  "key3": "PHC7XSpJ5cyXJSeRWNb2b8xbYMbConMFgZuha5jMdfDkAntEUkUQbjaCTZRyFXuF8Rb1MKkNZhzQ7sevyfJT6u9",
  "key4": "5AbHxmZmJYDoPDCpVXeiwBwY4vddjJSxdrgtb3a3jQ3Lftj6hG6qTokZ3J1nsZMFYyYTRSNikBQhc2GMu3zGQE12",
  "key5": "5VzS7LjsrtaTLkc1wEnXymPwxQRdgH6kGzsajZAmDPzhuZ9C3UMeJKpE1qShUpuEkXmr4KCN5xRFbFpBs5B2JPzZ",
  "key6": "56QFvMwZRyYFbuBrfP4dPDarjwi4ddLbbR9xdwKXNEaCQZvi44ux5UH4D5FJ89tgeqTqj9De2XSfpVHauwqjPYJx",
  "key7": "2fL5PbuC6zQCGy9kUfYi4iTt9US1F8mQiczXd9sTFyu5941fGz2XAZ7PjgzEBt6tc5cFPW5yN1gpnFxcoGbRpkxK",
  "key8": "2dYkn3hkaTf35cXrXG3D9VbUciHdtCDod2HTC9kk6kWBsmdS2VZg2S1HPHt7S9P87gMyc4Ngeyh3nfwGd9Y82N8f",
  "key9": "5qqqenCKNkYRmexTyGM7mVz3VCLPoatbnseJRuMRzacrT23Br2VA1BoamMt8j4kJHKJBj92mAVDm31hjaMLPtNp7",
  "key10": "5jhUiod3PphNduHf3Qz1AuMWYJcYF7sKagy1xTGeXvviecxJ7kYG1RMVJNpyAjsE4Q6AAXBoVrjBDmBNc7T7tBE4",
  "key11": "FVmqNd7a5zARvEnYYPQHn49yWfHt4MXFgra6qnB4bk3Pwhvhte5t5EnwFqeEyjJkJa2xgqU1h1et2q81eK9Ffqz",
  "key12": "5121sR2Hm8i1iqcGNaRZfCWQ2LnS7SWq2eJ8QgbuDXgMxYefDWwbcLV9jLyFrNjowV4v5e2vUVX6ZxZg7QLwHNPy",
  "key13": "4RnZqUS6zYHoacmvHc1njdYXWoWN3Lbz6H4vg54kAxRPwiMYdzEiREtypMPNBDUXqwGrcUaLHxtz5z1NsnfyEMH2",
  "key14": "4DsHPkFNErBn1o1BpruZFpVXf6ghppAi6hPMiN5QLU2dZv1TMoF4ksxa15N3K5KXVTT6XstrwR7GsifsE5CB6JHD",
  "key15": "53h6GHpPqUQEzxL51qADsoUrfnACgbR5DJqbX4xUowcAfqiDhVgCTUhwKxuLG3YLzHR8wniYcAvVaipWQq7HCJCL",
  "key16": "xA6MFRowWh3Vj4cPwHj5VQWK1BkST5uByLRcN6uDSxSpcYURo8vHejVFBdE28Edzzrt9KEebCmCGH5DbWzMcRmK",
  "key17": "3pFnN6rRNJFy5GWo8hyQLRx27A8gDcyDzwdBTdTwKG1BjCanqYLQXrxUKNErbqghihKAP1uPfo5SGs5XBUcbU3Bo",
  "key18": "3f1SNbzCXKLeZYHDgxV3QApUiVVZfqDNCbvQmjiYEDwiDtA8htTEkjqhXUC2A8r23ta14Mi49Qsay7e2xzshs7N7",
  "key19": "ruBhAecS5RkAbWyEaYDeN5aYHGxFkASSa7wkFWGHkw91uWeNgaozgRYH7KSCtX12bxrCQ2oqJfK7B3ZCuJesUsE",
  "key20": "3bCqNm2WSuZxKeijzGDej2vyMkWUJjxcXkao73vLPpCqbweWdGPpGuSk4gJ5J2gyUiR6uGVWLs17QS8kM42VNS1d",
  "key21": "4cmrCFcnpYM5Dj6xc2S6adFza5HbuVyxQdHXKjH8px5iHFTN35QHVti1KiLYBkGGiNTMMzmGJBq5RGW3Kew3t9Zw",
  "key22": "3LsmjwuvXtKWSADuw9E3Uig8F6kgdWGMz7iagen7ZyFRLM42PzaJ53UFMrSsSftfYWoVGXmxXrrJQVGKeA75NhPT",
  "key23": "56JYcNkfHHqTBqGSHRxPDWpJyS4gWE4jneAC3z9kWjFzayKUGRUjuxs2voRyGkTehzrwSZXsoQQMDGB4bJGJA7oE",
  "key24": "4dLdT4goKQG38boaL1HKNNWGUgeNiQHQZDw2po5sB5wi8ZbJt1eMc53waXhvz7QTBTg3djX8iqvGMjSvpuLHArPR"
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
