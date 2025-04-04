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
    "4faP4JuQUWNAZ18dn4q8bnEat3smJGtFPgf44FZbo8ULm3T5vvoaZpg53rZ9ZqoYEjnSh8naMHEapVo6EyMVj7tE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bWuo36Fv9j8bDta9C4dVF5XpxatAieeSfwKcXmKmcA5gFTeVziHbiACx4rk54uHxiRPVa8qGAogZFBNHUjByMm5",
  "key1": "3CQjZW5ps7mzX7zjbKxcH1YKVmU1rz9fVi4U4P1GSNR7DBBTjhanzRFxrJDBnv6kTY9RQxMLE4nYukepxUfvsLYw",
  "key2": "6AuoXEX5VmcnLiViReYTezV9frmpY8tdwscE6J9UDS6Tg1H9JJygfshDXRcipjidnqFgEcwacTaeHUEmSMHCq2k",
  "key3": "3VQgXLxw8vhXHnZ3iTNfcocBq7AAxuy2LcPLeeweZehB6et9zgcQoPDimaMiwUagmxzENsiD5P2sbZYZ3ZFqWeGd",
  "key4": "EMmfgNjn3H5UKFXNysLgPDRD7H9roaWJKGeD8wKdD25r5KS9YaeXeG7Ka8EYQrWUVWeYWneDqshyroaNhKFuRzb",
  "key5": "4FdmxDtRMuQrvGSAwHscf6pAFvCcx1k2Hataf3XyebxsFFp2mwZgtHW7UZd1Ej8MxE5RTQ2s1kx4FnEyFDLmdMLc",
  "key6": "4XjV4EpNZGmtFzbETnG5azk2MWEknYmwFqLnnJbb2S1DakU9Qgcatu6hqV6sMjYSwAb5XCPuuSABuirVHCYPyUQc",
  "key7": "3cDuhmWJ8YNRC3r54LvNVJbTx4kcqToYSMwKCF4pYzfQwzJov4zhyQgiugVHqyf3V6z7kw2CESAt5Gu8dQjPqGSE",
  "key8": "3gGqGTj6op3z6XRUjzVxKMKJdbNVFZ6uVzZRge2AYBViP7nHMj2aJrAS2uTe9fYi9PU2AFL1EUisqAFax6GxrK5p",
  "key9": "4uzkJ8k5Uy8HCHjsAqRufFTzAD96Nz7MaAgsoVYRXuwFvuVExFXfxepvTpwwyFHa7XoxLbTn4TgPVivmvibCVWtJ",
  "key10": "2K6YZXDzze2LZz5w56D4yghTPnf6171txo7MSCwj3rLnK4WPb7gdwvvkKhHSxH6RXe2YT8jAtLXVbxqHRNc4BxFj",
  "key11": "4AjMMxLKdCgvAsi8Ay2B2pMA8RZCwEr1V8oFXTsmbFoD5fRGByYBTGaBHByE7h4N23kgd5ir7zR4QcLYAt1T3CEV",
  "key12": "5LW1kVLwV3QLNZu6QWdy3cFLnciNuxRwsDUqkvqMg8d64Wwtzxxuubuc2o5s71z13hod2hyJWvpD3c3pywG56fEd",
  "key13": "HMVHFvRnuwXqR6hwupV3SizVTsgYHZ5WQ4U3msPH9Hw6yoJw35GTfkibmEoiP4JYvtU3aTSjrnwNXJxUTjpKQW9",
  "key14": "5kLVB5dkJt7eyoJQQbCQ5QZnW1gUfjScHJFBPyfy8yDc6UvoKRzpNkZPigCGSnzSA7mx41KdB4Hn4KgADqc115XM",
  "key15": "4Y88P1XGWW6m2GhKCWD1LVXxWnT7FTkbe4u5d6gTQWWgaEQH7oyW1uegPD61Z3xdn3u3ogNV4Xbcg7GdHBs3jyn4",
  "key16": "3wDUNPzxS1ekxKz9diGZrV7CSzpRKgTK3JKwRsmZY39TFSDmT8Vo5Q1i6Him28LTmw6Ph7tA9xajpUnVmabGv8b2",
  "key17": "4iDu1Sj6Ak8xBE7FdygcT5ofnkyTy9iHuAUgdkVneb3v8epv6nMbmmbHURMcWAJn7bHknMvJpfQFmReUuLhTvrHG",
  "key18": "4QqqwoV865HPkboqeBaRARW2WtJrm72rmyBXBYWfY5ns9nKm5pUKHLZ9MNKk6E9tJqzGHTdpgQdXsTMRZPzj9oNT",
  "key19": "4sz9dRAwqPnvaJnj7tciZLf3p5MsKbFWD3HzFQibTZnViqa73TYo1fGJt3N5agck9xLPjXYosvp6y1d1qT3bZHHV",
  "key20": "2XrVRQzUXZBUkJ3RL9ykAagjKWAFp7kPV7bqrGcbwikcbxcxUu4By6962A898zASKJne758PAhYFVcu7M6DP3JX",
  "key21": "j1ZysVi98qqr4A16PCaV4deeXA5a8JbiTq1zA9YqAgnD8zDvp3tnCQLHebjyeiXJnb6ZuRxgoFa3BE7Wm1KuUKZ",
  "key22": "AJx1K5oHZDuXtsnAxGZP145imJoYNGD7B8ro8rJ99UrKijk6h1SuoTRrVjodZb2qjcCLj6wQHtcovYtCYqc1PWo",
  "key23": "4fSPUfXg9k9cMtLSU2do68HhnsCrKx7He44fAcrxv82Rks48AVR55Cs4QPQY6P5cRiv9kuD7CiYZY5TpCvdUc4uH",
  "key24": "4mcgepW44xZeXon9sVpZxr1zTsQo8pBUPmLY1jqKiAHBkWGYoScN9X5zXpus3hXTtJMJrBWVMVnbHvUSv8LEovVY",
  "key25": "uwiuv2LeSrTAaTxk2YA1F8JYdmaiVyCR77swUifAsd2Jmg81SLVAD9xUPs4eXQyDv6urbAcLcc2qLypek5xiq7V",
  "key26": "2mhXATSyz2DMRwg3x1euwmZmNcyVGTQZbUUtWx5HXQGDAsavf8kZwR5hVrk8zRhJ4E7CevNUnjBeriGQ1ULoQrfZ",
  "key27": "2xbtbRHgdbd56uyerNowYgSXpYJ1eVR7Cindrs3sG86qhefLXux6F661bBc8CdND6Zg6ThbGeCTMjuRUdnXd7sUW",
  "key28": "4aG79UGKGfNqehBuWnoWimuCfsY95UFjSadSSjX6LiUnFiyke85MnpqJSCGoEoYwEdSEs8QFn3UmE5wnk4wJCKAp",
  "key29": "5zycFeTifq8voNt7XKKnM44gGpMWrA6VeUAbpLhm9V6q1vNsb1cJLBjqGugyrzLxnKS4pG6Lz7d28U27PDuNcSzi"
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
