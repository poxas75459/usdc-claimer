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
    "2jcb5PxHsUSvySitVTenyR5gFVU2m1twRDR7pQ4J6TU5CMwritGqvBZNfCZwhx8B6RKY9KycCRngc4xnUKLKR5xZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFKWcahC9a5wkrg8LdKcxZVYqgTsuMZYfPiWLg7D27NSAHVJcVNzZwzpDYRa1swHHMqvjdJ5kybMEf6orgs5Uo2",
  "key1": "4zYBHy6bsTNpTRv7CArvqCExYKYsVarbXVkqqqYrMzFUWuh4Z44WeusBrUmuP3MhTqw6yoJoptvGJtQCpe98Wvy6",
  "key2": "4QJTnk8zBwaKidZsRnr7BXMkjq7ceYdbeF11ZoWeTyHWhWS2T9MVUnQDRCrgQHTi9NUimZwiXzpwKWHVmtDmsHRo",
  "key3": "5EdFPaE11eJpJtmqicmWkCQSnnuRgZrdpNewgecyZT3oDkjoskwfG5YnSoiEE43fVbzfjESxcJakhgi9M5mRCTnx",
  "key4": "z6QkxAfMmPxNeg4TavTuL9zpGWEZC4fwA4bC3YF1zF81LCt6qXQ6NuX9gfH4vUNgPDcSQprwk6eRUJg2Siz9Lc5",
  "key5": "2hycuBjKUfo7tqQkbRTiMjEmcVW9Rr2RpPRiHukyP7NzSXdeVXvihbSEVjpQVkUdNjjG36bzykJjXrQom5g5M9sQ",
  "key6": "5xaeP5rYBS9mxbLswHWhGHKzPUG621Qagr9BZDTbUNw9fXdugmnCeYDGRJny2xjecWty1U2nsDofz7yXPskA1eZU",
  "key7": "4sAGSV1eY2T3Q1wScK63A81JxWyjgG3obcqhXFmJARS5fYSL69o5hZw7JVcrJmkSkDnu6ZFWdHTx4Rt5BtvT1aw2",
  "key8": "2sFZfb3ioZ2BzhLVVb9hx5w7s9o7qNZEedBSZW6hAq34UZwu3rqTcE6UzWx6okR1r9R2SawiM86Z4ZQvfGmW13QC",
  "key9": "3FApc3DHU88Cd4WJ6NBEDDsfrwCBPi3F8XontjhGBbQXs7hpXYuMac4DUwD1o8mup1NynLXCoAfks6gbzYHfyn7g",
  "key10": "3GsuxQBcobSfAjtbE2zNH18kRpJYffWXgPBP8R7Z8a2wwwDbyDUKqff1rrYd3R5yi2BcrJtMcWmefxwqNtGfHjSs",
  "key11": "5e4sS4gVBMMe9EVtXmJ3BKcwS2dFtjM8Cbu6ZdRX4PDdDvFWpGFuxv5jSZLJ987ug9kXdq2iHV8XLfQjYqcL23Pf",
  "key12": "2hwjEbruZZCttxdTqNZokm1WVWEEe3Aya9XSSjTXejVTjbGm9DyU9Si9VsJ9rKptFk9Y3sbXX479FFyp9P2FzLqz",
  "key13": "3AQtrT1tk2S739yeBensVu3ZKi1aH3gqhc4TVGraA6hF2wYxx2Rd8vRpgVY4pMGE7Kn8MGLWDscja6yed6giJTfg",
  "key14": "2u9PKEbFymywjdTJ2bMLuo6NKh32FuiVF5wpVoxS2CpomAyyLKY2pz9bxM5uvseNx7CSG8zN7AqkpXQJWnRqVz1J",
  "key15": "3x5JxSaNrTyuMXtBq5vEJXzcbrTWfoKZE9eA3dtftRoCy2qa8AH3LgpGJWMrAg1iMp3Ye7PyKfEY2BuockFGnhfs",
  "key16": "3d6S1CGoLKzMkvkcDo2xhe737edaspWprzyToJ75qhg8EvuMw2HYZLc19GqAAghA7c1mRVVFwn1LFrvMRH2krZAS",
  "key17": "2B9dxfSCLRg1s3pKt9RBCVMhES7ymLbnj4bwLBW1sjHasvg2XbBwuP7CFNGpuNBmgy2pNRiT913YnXy8g61Lfgci",
  "key18": "5RKi9rj7kURhmWspGs8ArFvxB3qDSowe1mqm5fQgMhupqdWLpPYDgDgucyc3zBPQZszF4bSQdLbuCqpQxC698CgJ",
  "key19": "3DbSRfcGvYBEoNshdpaPm55a2EBwogzVU3oQ1rY8JriJ5xo6YZGvLh8z1K5ZyrBv3vCrMCfdG9jWU631zff5wduV",
  "key20": "61guHjHx8NhwBtyjvLidXmd8khh5C64dFnVC6Ey4JtMopGEKT33uSkdXjSg25oDEietBPd8sNuLVLFRYtYoRsqtg",
  "key21": "f5aroyLcWapQN6Z1rZ9GFScg2zfbNCDsQ41ge8JwuC14wMcTTyrKSrMhToYxGYb28CxnC8wgGkqkHxcKk9i5Nzw",
  "key22": "3bJ5yFJxVRD8pJFY5PWysNKza7bF1v16yngZ8QfyauX4rV8EZLfqnzfDr3TZVwJWciKL9GeJxSLbcKGXrRBUENpQ",
  "key23": "37FbAHToiGXQqcxqqVtcWBsfRoo7CjT9zf3w48Ma6gzqXET2qqtnWQukhwK5ibFHoiH2anvJPBawEcLhXXsYW1xx",
  "key24": "5ermosRnrWhHM6gJNBkVNaWXoGUvTaWcdEkxK9sAvH6bHioho8kqdAuXZT5zYhsJuhaF7Yryt7M2ZdqUjA9PeK11",
  "key25": "5iQNAmYdzvhUt5UXUFsqHuiQH2cXoDTfyhhYZdPomSsEz7f95ptGkDidAhbd81NauNSs91R3cULHk8Jg6EYCGhs5",
  "key26": "4dAUyTrC7wjbYLq6C1GKYwroPn7Z5jDA4JRUDP2yHsEuS8k32RVCsd7JK7mKuvYX1RKkMt9i11Wv9PKRyHDwifW8",
  "key27": "9ATj4y65NPKDD5H5jmrXEjBaasnYP8XXJdGctgestxmp8ZzzSbMQ6Mi8wycRmS3feTTmeFQpjeKMoqwMuFFGcXH"
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
