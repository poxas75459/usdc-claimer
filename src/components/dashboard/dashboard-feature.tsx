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
    "5SrLYxgMjoKTogahNzHgszDNkRVp5MTuvx9tby5EyfryXVzsxCLszjTTAPsjMRWk2qgPXfJcq9gtc9shKotJAh59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tDNzdvisdCVzy2w5nNs4R4uYdfMWN4fbyvYMhMLE97cAPPHdKJjaMRts1Hkt6YdjeVncsyqsuYx4PkLEpjAaKjv",
  "key1": "2YF7CBR9p42iKnh9ch2N8Kn9MMYuZUJM4LAZma1YQY6ND4ShQ5NPML9pYp47GcWKWnYe7gzRUZ7SSPSiQZscXo36",
  "key2": "2HGdUmsnAeYFYoB4Mpu3tSv8r3cdpwzvaG7hg7xvBGHb8Kkt2ukWuhhodS3rAEJZ5YRJWxPAefy2cqWKQo5rHJwC",
  "key3": "a8myDWjqXjMJMBCaNgmmVyLBVeiFPkHgCj3CumUCR9fv8vCbz4acsbS1N3F6UmrKVQkfyKhi3SVH1YyRbU5QjBE",
  "key4": "63yXZ4dPgBtRVUDSxPCNcEnnh6zQGZvU3XDVbWzok8ChdUUfoHZv6KnSPqTKcD8B5jRyZCP9Kzy3mPEcDr8ecg1y",
  "key5": "4voSeyfD9JR7oFbMfV3GR7aE9UMcCB5QHFTWfTT3BND1Kb9bieCUPpnMyNEywKkLukBZTatm5QEkVCNxWxriutLy",
  "key6": "5XFGthCXLh4s1VyimnZKdZ1iD9pGWvmNQJ1Y3o1ksnwedkXVehzASecDevxVsUousRiL47t9mVV2f8iNqMLYZkX8",
  "key7": "3xXh9BbLzj8LiuWYEhvDD43WbkMHkZ23cdy2TAxqXdrAfkfbKyiADAgh1CrTkE3EJmecLHBXvr341vjHuwtcQFaV",
  "key8": "3ckqR1jADuA6EKJBP9UMTTGKVvkXyytfzjCZ3RV9GWWjCWKHX5th7mNEsL7MbCjBxZZ5ffUWrWUKQR8q278QgQCw",
  "key9": "2x9pnH6HwpTpPQV5w9LhEkj4JRtXJ741su4QNd2uUApj979pqoMEQZ7SdnKM2HjgKdZm4VNuvr278hsYifwzyfuY",
  "key10": "3CXtYwah664vCjezKVxXvwZkhFStutamB9TpPhE6rgEnD1qngVtLZ4oH9RwyTK3PXk61foMPAkSkDxB7u1hfcCVG",
  "key11": "5mS6b7EfdvpHzuvApSxXZScfUMhq8ZLjFGYRMrptqikxvCQGC1974nACPV2ba13hasuDzJ5E2SWkqDFnqiJCk5rV",
  "key12": "28pcoXTTHUbfum86cW7ZPpeikU5gi6WfVEXxNJR5hKAhChxepCawRqXqNu72czNkfC1ixZrLprnUwcaFbLSk5S5p",
  "key13": "3WiBaxwqub7GGoTou4USTJ5SCaZJ8GvGM39wT7nH6DtYrZvDkJhCfCqAuVpMpxpZn2xH5rfP4a5bQDan4JpxV3hS",
  "key14": "cF3ALeH8V4iaRojQRWrqxT2tfPCzyA2AwX6qWV739rhHqHqSDeFoz29YxFyErHE8ZBHrziTZNVsSBTnPzUsexQA",
  "key15": "Wvsh2WKQbgVT3H6KFJ2gh9qKYqnHyRLhp8Dh6E9zYRSvHJHyDHN5BQ9qPMeRL1crRyUarzAhgfPoNdbhCggqMqW",
  "key16": "3SFKSh3bVCNfg6fHBrJF8Wis2wDLpwPaAc8cXtZe4kgSEnfWH51xesQWqM9SFyNbvonSjdsy26NMb6rgnDuLFHPJ",
  "key17": "2zUj8RQHKknjGRFtmEH6kFqumthePhuCAEj4gBGQCE4aRsheQnt9Why9Qva9fU1oJeWf9FyDPsvBU4kpv36kzNof",
  "key18": "3j6ihveVXQEypcp4VF4RL72VtdfLAHxypoLx3jDfsMZEhSFWqsDcvpbRsTG82du4kMmzRNrVN8qPUyYqyUD5HRbB",
  "key19": "4veA6wmtKBMzvyr5P8zGbQfaUGcgwNHQ59rnPM6o6Rm2DFG6psN8Ypgm7PabqEAggKJdpoXjx5LRKoCqGJWkWtgE",
  "key20": "pZTL8xmycmECW578xKkGZbg4x2cjXr8t17X12siPQuLVwwshHG8u927e8fcfkhn3wx8KGcinfr1YcRkVmH2fZ4S",
  "key21": "3bDFdqbqpnY8z9HsCR2nHrYXwpwc7X6HBH8rZaUraUP8CZf8PnwACKLWTLzEcubuCk2dsQJQsgRxsgy7qh1RY6fM",
  "key22": "3PbiUKSducVAWVqQRZC63BQRNR2KUwfGrnt7DFKGESsDUXWkCVBXv7uifAbNGMdBUfPTJkLxFegB7QpwD3jYT8He",
  "key23": "2t2KXhwEu7nH7VXPhBLN1BASmdRYkD6qcdDh3uJipv456ukLuEGeq6WJ6GNGEJE7pX5SDtPrDwKPB5chC2hMt58n",
  "key24": "2SWNfxQifjhPdCBzmoknJh4k7aG35ka22UQUHBkAMhk4qFDPz1snTULGmr9R5AxRkc4wvc6N7PHzwesUYYPjPijz",
  "key25": "55ctFqbQvJZaP2CwSqJjvtzPqAVGkVL7XMk1dPq1EHUZsMgLxz2C28gWo27gMm32h1P1mQVrWNLixJdHoHAY4NsP",
  "key26": "5Q3eZ9evEHTAjfBXAbZduBqjEKXKSppbdNikUyQHgprDaTF3w6umJ8aEpHjYY1khzBiMLiYEzq247URWuPzvecnf",
  "key27": "2cPCrrqyv7nTomLeA57U3KF1AcHn3TYkzaT7ojRsKcfjWr4eGc9tVdYhRxTTT5RNP1mkisGpNZRGL8aDijktGLSY",
  "key28": "65fGad4QMEfctdxAYBwnPRkk2ZEsbUwCwxcvNFSar5CGToRYV2LwJm96Wm7dW5LUWMgzLApSaMi8n9ppjrHww4MS"
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
