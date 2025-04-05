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
    "bBFTesNMQo7KMJ4dnyEP8QtesEc8wV7jabv5KWqs4TuHmiS5PQZPsk2oRRnSu5ao8Kp4cahzhjZvsjYPZBDZtFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qc4mKcPZsVfB3oDLTuuKfnjAYFws8Pw9qbtvEwTV7RE8fg91kvPwBHa3wpWdXAgEL3J62ewj8nPwopURmMV4pUB",
  "key1": "2Gk6wu1EAKGbawsvM7YW5uAnnU6bh55K8HsbpjYvkJRWGqWmJ9Ykrwevkh52UNXXmXidbNLu9i4UobnpnKPFEu1p",
  "key2": "A4f81enrYZEJbsSUnQ9ySiZdoxfjhpRLL7LfDwDuLqU7U1GzVUENvkWcdBLYD7tF9L1zf6Dr3DAjpwYzu5mf5AD",
  "key3": "4n54hmykJQCarCsyS99ZhPPtWJNncSQZcAreqm4jhuu2wKYK2MScjXurg3Ysjj5fcVQwVVE3hWKSkN9vWrvV1USp",
  "key4": "2KozA5To1cTTp8J5QmXcDWgnEnjgvTL9KWjG5AkSj5uhScYNppkmoPdaf2LEfjuVqrYobNDmiZkJ4DVJGakvKoai",
  "key5": "2QCmydp7etNirKCTu3Xjwn1J2FYbZLbNtKxUrhMPAiRQyijh795pJooRGpNgzCUXBvA92PYLCK7Svd4XL9NSQzeD",
  "key6": "4NnkNmpLaErAHFRsppkazD3hi65XZQZ5hm1KfJt8VKyuKmJyBX3vHXpT16BEjNWd25HJ6Jv9kQQDdwRJwFADu6iH",
  "key7": "4L9aYzrPSQQGLDH9vZi3RccCYGU8pbjw41HnK6vuTv9ZGCQmgWGPU3WgjJ6DqDxv7T1CfL6tmqyfunNrLsE8uJnE",
  "key8": "igGC9fkjrMvgJ3cA6yKLpM1zUZdVq8TfFR5khrsfTo182TWrsttcq4oNjyJjf2dG1cbnUfK65Df91g5Mk2fcpyK",
  "key9": "2hF8FBwLPJpV7adhFyAHS1cBqPn7dPp8YRy1EMenYmRoDu6C99JRmNPL8iF8Rq4cT3XQ8jCZVX7si8NZqEkoBdrH",
  "key10": "2jWBAangAuYZAfp6a48onWco6UYgbT4oFZVYgtsjC83B5V65dvu44d8xH2sbRAAamiwN5kMqBXSY57pkphwE8rQd",
  "key11": "vbavePjoW4ZvqEXWtxtLdJYwBZTU1dQBD5iCy176N56DJUs4igzmEARHzAxaUBRL72RP19TfaG4RwqGLRCztrLq",
  "key12": "4EJRVAoV7Nq3PkzvjJuHWwY4QTJmDL5eEeiAsCNN2XDidBCvbzt4PBhpD4xZ8uNMd4Hn4kXXB6o9bjdaYz4vYgWt",
  "key13": "4rpi6T5xv2uuJhyMsjkn4omtCzX9Uv7bTH9dLTh43CCKeLQmhBtTzSmRvo5cuFDaUyPG6kRAxLj8VkhSugW7GCho",
  "key14": "4i7S2ANByuauJdfMnZTqHhUWCqjkXGb4KSi2iG1QGP7T9psAnEhnghtFBbgyXiHb7EV8EgBHqaL5wdCnksz8XANW",
  "key15": "2mNnYxNYGMkkn61HC9jwNNmC9cSNPGxNimJoKXR4ZSFAB9smrknqRi1xGzBJi33d85BzWuXugPqcm2JcQSRnDhJ4",
  "key16": "wYLytL3UHQUxQ86asPyZrXSzRBWPriEFZiNWBQbfBF7RfXpR1uevS4D5fW4omxXs5kCCTMg9QcMxGEn8kqcvCU3",
  "key17": "35GmDP2Yy8EJKmBzxgwxXkL7TreenX9N27BckYjDyVSG7FrZX5nJYX78BZ9bEHYxgfGvysPhjgn5BPNNBM2B3WVY",
  "key18": "4RPh7NBuhmqBoqEGdi7VBWXckFEHLvM9bDdZrZ9mWaY9b2ySkk1AkZFzJgLrNzrs3FLuB9deXuMkzHDZui4Fdi6Z",
  "key19": "5Ly3PdeeFhHAkp9BNgb1NF69dP9DU6xaVer5isEz2KcLSc8tfzx7UdiAB5AJ6ZYXDYcruipsGTVa745dyuFVw8js",
  "key20": "3ooSphyxxomxXfGQ6zuoCGpWKK7zrEKRLozVQmrcpb5DskYyS5pqYMgMd4spsLnT6HLNZGz3irXEYkpi8jQLtDD3",
  "key21": "5cLocsLV1zyF1M2Y9ajtjQJUbcaUbvJtZiyrsmVkxuVppX7qWuSVk2oh3tLD6LTyfgiW4VMpGBVKxU31xQap9Joh",
  "key22": "5nQjKkJUoaXkbtsrwdTo7dQ7rW2wxYrpnQfJeSSuk918abZFZcmjpzxFSNpBoGeeGPyYgCUKyF5Lk1ZAw1KGVyva",
  "key23": "5a61W2Q7U7xzkjt4DrbdYwnnr6oyCPeZ9ULyk823QtGzC8UYewCow6zYGRQ3ucaQKGgdsJeJHjJbfnes6rXJ4N7C",
  "key24": "4Fdr1LnSmJ8xvEVGiT7y4hDL7uZ6SuXQdoDZw2SYab1QW6SjSdj85hJPpfpWgcmcvJN5zNHzVNPJi6XBN48Cphpj",
  "key25": "e57CdHwTgWB8NXns8bEdJRiWD16xkhdneehgTT7xrvZ5ZbZt83kwWawqV7gWyqTZhNMcy2Sr5kwCu8ahnWvob9F",
  "key26": "G9fyhSxdFHxaxGzQzhnWDyNbCPvRvW7TbDvST1Q41thAdPRLnyebNf2mFVTy13UDWtjH6SqTLHJLARGZAAiRajR",
  "key27": "3vspLbL2JFvqANcFYpuKKVfHnkC73fNuN6bPfwoyomNdpcMG6Maut5uxn6T1HfKhKoUfE7P9Dz6fXXE7FN6it1w8",
  "key28": "5TJ8u7RJtvLfBRjEc78Kjj6fZ4g1hd85E3ghrjaQ21kYZtVjjjDsACrRMjkdNobhDZHvoaRikamnLFRjCMUigjuQ",
  "key29": "Bg42NdgMDjsexLWrzDN9LPCUr2nubz7FCJR8qXcHhD5dkiQtHCvFTse1WQ1X7KAnFnw2zURLmPo9VxLPD7yDVcp",
  "key30": "371wp5yyr4vfsFQdPfXqwz6i2GR1J6LwoSb5xJnpAc3ZLbTJfMkNr7mUPK66Xbpe1D8MVcxhzhHA4dMS1pZrkJZK"
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
