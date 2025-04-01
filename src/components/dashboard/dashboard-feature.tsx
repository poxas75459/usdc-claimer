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
    "3EtttSGWFgimpnMsLg3YmBRrJXFo8L9DYDkCLuwrBqKaJ6AzvcKfGWLkegJzCqE1M1dJxKB6NPc7TY3Ku2S1mNGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ocHkcS4paMB1SyLYXRfs9n9ArRoScfaqcRBvFDh1aRkwnZZ3eShmphEkzf7mjhuy8eETLvLXbgJ2DZy5L6Q9EGV",
  "key1": "4WLphFT3KRpy48Te3RXvAKQYM5JeFFb6GGKQGKPst4ntMMsPAFgZucacJaDX16McyM7dCvm4NZKNsEHdKJpwKiBj",
  "key2": "5rdtTamviMRXZSHCQxrd7eQ7sg247jMVW2xh7GXhc5RV5xBLdjMGSjqspQNLtgFNpLt4WYWyVzMS1ic2Q92cUcD9",
  "key3": "5RkKHKvK8AR5BUuhgakSjeSwzTDVoUBAtxM2Lx1QEP2CNoYQcmu4s5vHWRjQ7tiPujn5Tu7kFzfEj7BoqhVDhAwp",
  "key4": "JWbrsT6SxdH9meT6xeg4DRWYu9m12YjHuGssgyPi1LwpsH3Gh2EBULJ5Y4Vvyjjc9wjwGuKQW6Y9QabM2dLFCkR",
  "key5": "22WAARpKAWgVMXYgB7LCtm38Pt4k1vqdxZVjsi76tHUaqA98Pbnx5hhzooGdNWMbyD59qBrv1oL6FhsxUNNhWT7g",
  "key6": "2CbgHU3dt7KKqCY8VHNtfo7LhL2ZxTHmuYaQRd3TP7XB7qKgT1rv4EgBmtKTLz1KGZo7iLq7JgLtF5b1TUrQMNTQ",
  "key7": "4LpYuWaibkVZAaRqRARxiqsjcGqxEah8jM6XhJb93BokLPFhm2aAE3SbXLFJ3kF638WXrd6xb3Qm3wpDT66deQqF",
  "key8": "DJ5zZixds3TCTzGQfKaAA9mt5uELxcTGcHHRzsfwT3iY3ZwtUPxga7eqE1VJ3NKdgotsXfH97siaQAzrzqPgXgm",
  "key9": "533fTYGeXH5ZfXSkdpsLWH8AoJjjqUtaPXSRySLUk9RnRuWbk5DqUaC6RSnrqW2fR4iYVrqZkVkMpLMB3veyW9Xs",
  "key10": "SS9KBfUZxyEq4oLFDyzbvjoz4og6iKvQNeQyuc36uH98MQWGG9k7ogWYs7ZwxLEHtv5BQLfdjnmCbfTQguxwRqH",
  "key11": "37N7MnM8T6yx9ko2iszdPEQonxe4rRKLBRPmHQWxKxWcC745wYy9fMt3StaWvSv98AB1CyEwJ6rVJxMCw9UmmUVH",
  "key12": "2DGpQWhqHkoH7J3rVVE8ksPBrBXsjSfHVnF1BoccMAm1s3P5crJ384xXFMTdbAByxb29Fxj8dz1QK8Wq5XqXXcBM",
  "key13": "3bsHAozg5h8PEYKhWdbEJCrCYVFjg7WekcUL33U2fgK4J5rcZoJVMBiQ7YduvRz3jPgrRwSJWDazYUnrANkyTGo",
  "key14": "5Vq1Sg6qnZTFkugnUjUgHBbMgiC35YihFmaRKHD3F7C6d4nA9HNezksMUPuvpgENwtvXFqMAfEzAuthMssgLyLRB",
  "key15": "4WedFeh2BWuQaKpRerf7wyML1gKpTwkMSA1w2e6p9d6N7t2ZQYwPg6FQgXJ4BLGkQhQegKRm7xk9B8qtLL6JNCdt",
  "key16": "4vfMQu5SUbbqeb9NceWXjD7FpcvkZSuv5vMDqv2ptJKJr3mbjBgq1XAPVaLwvtYwdPkD1cFGBvZYdoGv7KntqSHe",
  "key17": "5Kjz9puHK7ozeRipNREHpkZkS6AMsSp72FAwDEWi372WFV1rjxEBNV4zBj1um3a1ciTJotRgQ4LzVzE8jDimY3go",
  "key18": "4tvSF4kHHUqqHY5cugD33jKz5nmhvsCi2gEdmsZ76vU7QJdr6mKrCDWxwUaaSUMbLbWormKPQQUxy48ygE5imYBj",
  "key19": "FGaxGcndBiJtXqogjveHxbUquE4i1BA6V7VqfNYMfR247ac6WFWSo3YHSAjvRhhNUUhrgHkV8DZbz2tD21cTTwM",
  "key20": "3za5BnQ65zN5DqYAFbeWqDvD37mTJHV4De4fYso9fBMwRdbVwgcW4ZSVjGD21hjyVq3oJu2NNCCgTq1qD5r4Jf36",
  "key21": "A9DKiwuZFdXM3KS84cqg99oWQH72U5T4oRzVrByAQ4hVtzvNiSU8eVxWWmh3Bro5UiTMPA7Vn2nD4KAhd2EjafP",
  "key22": "5Smzg9YxCaaLAiyC9ADdXsWUUUTFQWwCPD3sGTQ47yVWpdhSFqU1fLYPgYAk9nwoq5SFPhypkAKm2cgvRyY7MoCd",
  "key23": "5apAZy8yvuhTLr8hYvFry1UsWe3Y7BtYdptrUivdt3m4sF38a7zsGwJguD2qjUV87e89TnRQ2VpgRWxZHb9HDt9f",
  "key24": "5tkjpxWND8b5h6rydcoQNU7oFpck9vYnsQhpU3oKeMoy9bXxiUKpydeoVxJrmCCtBTSukdLLAX6fDxdjcCvKTQ2v",
  "key25": "2rHzxRCaqj8XRBwrLGhSbR6xwtB9B9urhVQhz5VeAo7Mkm6gRfDEAZhFS1sZLRbEhcVQ253iwE7dE2Yrh8ocjhau"
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
