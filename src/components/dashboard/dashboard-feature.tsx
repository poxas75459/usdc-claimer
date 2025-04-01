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
    "rmwC7A2zzBEv7hRjoN91jwAzo6oGfAoGn8Ubve4kGkrdQAQGgKSB3FLSEECJ2dAMFZwfa5X1tZcjMgy4ZKo2dMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "663sLAgJkb88d3nXwHYAFurjM4MTYrCtfpbWwJ1FZNyrRRKVTuEyWRf5DkbnY9M1ThawkXmeXpTUtwLi4MnrzNTj",
  "key1": "3NZExogVxTau4F3rvgaUYp1CFR35bVPm7bf67bJ2AuKQ4vd57p6YxDRjm65Jqz9asiRGWefHEWnGpPNkwp9DdnvS",
  "key2": "5fAmiLCgHAcbthg1EGsfUo53H23m13rreXauS5MeCNPerGy18YSswS6i4r4Zt5LddyWC89HPk3QqFUpkc88puZPW",
  "key3": "5ubq9cTNHgWxfTca6TQk8MYmNpZ6BtiCqhu6DtQcQuaBMRs7MzdAsqiBQdwhbi8ekRJQtnLVmKJkys5vjXk29Hdj",
  "key4": "vLNn7NZRhJobyfTaj4YAjLKooYYxECVV8ZPkwnpLeDtYhsJRL99UDFqzFpSLLsEexJSeFmSbDhx9tum4R8Ft6dK",
  "key5": "4Yj6wopdXfdRemWFLnmp6vfEb99vM9q8NixqLCiXffsVnB2DfxNq3zQXDp7tsti9JWPRrPn7NjSo5Wsgi2FgoyS8",
  "key6": "w1TABwhibAAbNcYs9z1VM5BrCmrSGBJHzadY9jTEaProcaCyrPU3jS3gByn3VEkYo8NahF5njh4ZtLmfAS9wDku",
  "key7": "qppBVBPbABKnxwKmYnhJZaiZrEqtqNxhoYbmqWPxP8kiXwLp8ew6xmRCJ3PpSPm7HmjBizxoJCCRme6WGk2KBnm",
  "key8": "5zoLiJRn2vbh6Zt3yUNPRnoYKiTi3EmoM1dZZFeFfC3W1Sib5oSFWbYWWzxHtGiixMpPqC7t7Q4twf5KbeuESFUt",
  "key9": "3m7yKkBCpkrZXKLLb4NPqL1Uo9qYpGA69pBTdCP78cVr6TsspDoSaU7ZJf1pVHsJp14CzQqC8btygH6UxNriLJZf",
  "key10": "1hwFL9jEMAWnZR1byjcqgQACz8yY22Z3mHkrsfCfjmtYeLwmXwTvoMYoaqmE1d3YrZ6r5EZz8ripLmm4TWW2bN9",
  "key11": "4k4J2xXknsFt1FuJcvUonLZo88FzDL1W9wrJu5QrBhtqUduvLmE4yWQeZuLNXHkqWpXLsmu3QS91Lv7JAiSvWovc",
  "key12": "4xCvp8ZDvSQuLDzPLzCkFZ9jEjeVkCMAK1wjR9DQwp6CNYVPGJR8pz4xCNk1N6eiYcHLef624LmKSjPyasm1VLAz",
  "key13": "4SGpw66c3WXLXoH36q6mWXRCULh3GydHHZhyNmRravKXqR6QQKZF4QXxGo4qFPhj3Dc6A4SamFYdGYC7appRnov2",
  "key14": "4i755X5d1ezoSkebueCQ3vhz7z3Kcg6WkQjm8QtQ1gA3Ysjf1eaPMvkjpKeUTZP9WtcNCqGNT17KqxfEkA2chHHi",
  "key15": "4tUP6KZVbshYRQXRD4HtzA6VTd5TjY2NyaNgW9eRFCcZkYUHdEJNUv5HuJHYg62oxoa2bD7q5DGfi2N4KLLjE58W",
  "key16": "3WEqo4uvntkXBh8oacj3ZgER8Tz4Yctt3Uu7ZvP95uoqhDGMP6KNq2WEgSbRjMeoy5ssHvG1SDhcs4RW8JUZsQQt",
  "key17": "3r96pYarr4KC8xmUcb6Lw1qbgXFBN6Ay9JNbBjnkmHMcxE6fmfU1Ss21WsGFogXcc5EM4cj2BEEUvUsxRAvvM8qn",
  "key18": "2GkFHqB99nYSmM1d3jm4PFhJwcwjC7Dik66M6nNsRMWa2FVZu753epwwM9e8SKbx5pTqe3RRnQWkzWWxfXWM9LSY",
  "key19": "43Vm8NYAQCj9KEFoJYABHvZtA5JXqsxzmfBQZ9wupCJufyzTwSRjSsWftoCB8C4Brza9XB85oJQMbJobBeVH5ECX",
  "key20": "phr9aJRGFqAwqv7iCLebLQ5jVsMaaBUMXcdgNdp9pqgLe7pUcQGaFd64Z6NpZmZ1qvocapfp9p4Ea7SgW2pjts3",
  "key21": "Ust62zuLKM6UQzZ29ViRVzY1EY5Ef4krnSLnpY6d4BCb1norExt2iNbxDj2NN74B3kNdz2yWTFvmZUJu2SdsJu3",
  "key22": "5GM2TFdHnwcW456qJtQ678UnxaU2F3eC8MSVPy38TrkvKfPxWjv7Lo3Mu1LagFufZSgkULf4jqyNAFADyxzYoqTV",
  "key23": "2Gb9YwRjKDVTw5rB7JDTdvkFNHAbNSxzLxNTrnK8KVTaDfCAVkn9d4cge49DRVmWZgsW2ZK7ZeRK8nuoz4W3ca61",
  "key24": "5hb7q97hfrkrupcs68mzpHUvHcSwaNgXZbpRPgavXRiogmzWhx5sSc2wzrUYxqJfPbLZXjVDGguq3Kr2V17ZwG3U",
  "key25": "pQg53GMfCLQ4fdKAkoWh3nVF1Gb8HJ43qwxYdnuXABk8dme4cMKhrZ6o6WqEUKdmoQ2SXES3Y4Hifui9b5CK7YD",
  "key26": "4cWUxZbRS3855ymA3o7ZqHSXyEkNudkejasM7THoQbreZPjRqAY9oN4ksJYDq6HHBJD5hN5T9Uvusunvu1dAcsAF",
  "key27": "3FmuPH7cZp7C1nkK6dS522hzqY5M9ZKv5eRrGySjHAvD6SSn9UZ8qjo2qwGwQENp7mspC8iGr1byYHtwhmPBdFYU"
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
