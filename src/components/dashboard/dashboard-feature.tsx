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
    "57vti92ayHXgeApvZErkxDxBjpCaqwnuzG2hjpMSuYwHYh5KP6FLce1qPgEqmGqqNqRRwLEfZZz5cqeKo5jcVaS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y8YzVVNfsTYj6qJdnSV7h8dNzFJVj4QR6gNcoPfKZN7VYkoshRy9wND5xPHPrGaHEjf5a4AiWatby8zEo4GrNtq",
  "key1": "2BeJCpdq9Skc6NpWrwudSChVjfTY6UHkpi3rbte8SjZ5n66XbXtjwiRVK6UYRfFKLMCMFwzCRGGAwnVFHikzBdkS",
  "key2": "3FVHkb2ffM8DBtpY2MCA1BgTQv8XQZjJh5VfzNxcm2quXtYagwUrqkmHPPL4jgJE3CHJrWCLHEyYMmFc1tfaLLco",
  "key3": "545SdUG2QPiBnENgphXq3CvNmc9rUV1TSr3HGCLgLdugRmSY9kPLrsmqBd6xtxFxwB2GLtMWDwPL7JQzmdxFZvhr",
  "key4": "tN9JYALSQDvkZEg1NhgdxF5xxviCJkukX5HTPv4zirWvoYQ6EaEUCc5LhWLRzaGB6NNWXKKXqGFYu8JKmEcWDCr",
  "key5": "3NLyMiFFxijw9GkRoBLkemfS6YqvnhtaX5B544Hjcq8edZLSZEQedsULDmjWbZbpxAXVgYA4WGrSzpBwq2iLgT82",
  "key6": "54seMsN1L6k2VGDHBQ3bebEQa7tHoD5vwxd5biuPqW4DSYyZw8H9KgKMFbidFKM6Tvi1wukW9GVWsdPjGBVZj5sv",
  "key7": "F2ZoxkZsYN7MLFoZnA1UfSY2bL4kWXohr9SnrJUkyGi78phXUuyH8XRfW1SwTQbpAKyZYvHEhqt9msRHu3nkRen",
  "key8": "2vicrh71FYM4ykhek5mtaYEGZktmwBnoGJxHFk688fugWdQ2svLjzuQzpjxpzFLgNChgUQDDg9SgGc5SMAYQLvKm",
  "key9": "Am1hBCfSa2fL96ngGZv99bpvRRoX1iY3BCEXK3c8notAPAryGzRFuvmiqHRW33UXB8cBBLkU2YahpMiVVjFbw4b",
  "key10": "38gz8ftSpvaKfeoXUSrXWLokWqvwneXWD4B4xjBZPJtnSDZNkq9Jb4v381eqkqfdEqzssdzoUbef61oQgnbMNLyb",
  "key11": "3rf3NBdPJvjW887X8Z8mSdjPLbWncwxVsFEd9eSd5m52ffufmGTBAsL9bJPJzkfb1SnE8Rejo1FWe5B8mzVhzr3V",
  "key12": "2qsFs8wzPj1XvtfqyDWEU8t8uemc1LeyceLZACYtqGkwofMek4SNQzjponWJG4CsB48mZkoPwQSJ4Dk1298CaQAb",
  "key13": "s1uQTeRTqU8RiSAkKY1oiGkEUnb47hyjRx8FeeJ2qbf2BEnVDvaVpfejMxXWKXifA322oFdQvyc6Qy9cYz3SnSQ",
  "key14": "3hyMFqyqZUFw9ApGjhTAAmxSoAvj3SoWJnhCYr4urEMHz2T7fXiVR7Uqb2eZxirwYsET9ZANvcQC8d6daUUrdtWU",
  "key15": "uZZzrTkCNWD7uff9ZXzNicjX8q1utUkthwgPwRMiUvvJd7sZ9pZhkEhNp78yeprTHpitxq9jCc2Fetm2TP1FvKE",
  "key16": "3KjYR8sgmvfxtkRfhoc19amMicRECokeLTR8pzz9PJusshz8kVywef2HWAEfrS5zXmPbCuQJv11xvFcNLkxUXcm1",
  "key17": "4F2bHDhRHLK6pq6aEQidRepffsTDQh9wBkJYCz23G7J785CCieNBhVFdCsDrNiKaeaJv1XsmhYsef1Ly49bfZZ4A",
  "key18": "jEk6R3H4hcRUjfggaz2LHeBHYAky4kVspXBXey9bZXRFg3RAPiwjQFZ25JqmEvEfvikkkXDLEZwF2oaoEnd2StX",
  "key19": "3zSyCSLWaJAtyajnkGzky932uHmZUEeGiCQuqWkaReX7SHpTbMLoedGanAjAGkjcNvEVvG7BvcdgQ6fVpxxQVErX",
  "key20": "34446QSYmSmf6hyMse3DCz6GqnCFPUtfvkNTe5FovJxg8VYfiQVNL3xugFNL2VN4z9AXuHtRdr6zfac2iVPtFqjP",
  "key21": "3wsivc7mgKzLr17X8er3wnFLSjA7PeAaGFCi9yFap9NjonSbhrAQbQCHqhhtuGsoktyQWqA8o6nZ3dVaxN359wGX",
  "key22": "4m8QkEmqnCV4A8FnY4bMaVDHieyEssDktPph9rJQ3HqEh5nsqqiUuc1EyksEjF5mKmXznSaF9xCNgfY4cVMvu27g",
  "key23": "MK5Z6yhUXd4u6bEfaBqHmFseQdrw9CGoa8Agx8roYPcm5QpSJ4Mx96eMB7vJocXWxpfDG6rrArzV7e69pCBTkqe",
  "key24": "62PqScf8aqtHegH7ZoDSmEpmvHR5uSqsWmhiKHMBWnAtEj2YXHtP5ZmfYgDpLXyNvQW8HHJNGbe1CG7nZjACTChD",
  "key25": "43fCiXfTUQcv8xufYXRUgE8kKNYEAqY7DjvFL8hFysmqQVXZeVEuzYA5qMaUDwc9egvMY6pChe692yVqAPBCHrch"
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
