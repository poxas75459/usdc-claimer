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
    "3xnAqE3rwcEbgv3oqU2KmFZj8rrdzmNCWybZLC1TspYt68ouEiwHFyKtHaprsGovX1HwHtAqGN6K98RcRXu1kHng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ksXnqS1megvaSd4e4DRpAkd4oadaqAbCuMqmfPWsE6VeLXa5X4fa7YYzwuGQNLWnKMW1J8ATX1tkoqT3HeQoorg",
  "key1": "2yDxnnkSGujQofHDwroF8gDTEvQXvqwXCEoJyVFmo1XEg68MLuSPbhVbP3iKYyS78g9SKqDvesrCWTLnK1DoSUxB",
  "key2": "4ck86fMNBcMQp6cG5VbG8ooL6ReXAn7MVYwHGu9oSDx2M7qvib7rzNbfLUGkm9S7QvCMgmLbQcX3yKPSrT1QEsy1",
  "key3": "2FnPrYevVYFNXwbK3BLi9cc78PdGmQELDQJGWJMfHK12uz6KdpbVcW1rm7nZ8mGrJoBfRvjAmnec6T1HjsQK2ZdP",
  "key4": "39Fa9BhjtPF2D4J4sG6QXg59UmSKPSPVwADrL5DtvgvbX6VMmyELJcRyz3H9Ng7ZeqLmTYVJX6nYRUEHSxJ4NwXX",
  "key5": "5JYt24GwmoHqBfKCNkP34uBpiVuV1gqD2HK8sNZYpL3CG13uW7ETkV9Zp6CZz9m57skXpQTM9zwZRyEAQJ9Z3pi4",
  "key6": "4bZ6w5px6PafFW1NFPSK7jUv5ugc4oUexamy4CByYjq3C6oGgtcKFaXD4fesDofCoK9YgzSDFmE756zLjwNLezXV",
  "key7": "4jiRDf9dhpQ3CLe6ZHswgsfVJN3QkYpaXXFbDf3vebf8KXvGqsUoJvBFxSdXtVCe5FeTrV4qnK6WZahR7BjeoVs",
  "key8": "238yt5E2eZafhV9DrE79oFoZQ3qHVKU4WfaV4EaGjroQDyCRUBvppT2wp8iHS6UGoPs4tCRbANDwZiKPdBygS7r2",
  "key9": "2Nr1UmxNzS3uB2wG1Q3ANkYguEt6ifGpRut3Yo9cGrjHAip4R1dn2WMrWT1yXzpd3fMdNdmPtVRCY2EV9U6bZYKA",
  "key10": "4AM7EnN5VvwAc8ffUbbsAkH83qDj8UiTSjXpZCyuMPRsuHFb29FK4tWxirjCsbnetUqXMVn9D9G2t7G6mtBM5ZzK",
  "key11": "52E9ahnCYXZfwuXZjiAwKFG9UgyqGRS5wq7t8KAytFvTteYDmq8PVQ9V7d2W8vKYrMSTARcwPPu8g5HuDuq7L6ws",
  "key12": "2dpgEyDBajTj4WNVZHN6CG37YWGqNfXcUkPbe91hYWS2Fy7foMy2tLRxHJXQuGCNb3f34zkBHVPizYeg8oZicyTJ",
  "key13": "5vijkdaHHHDLiPWDBTvR2fdhk4pvAmKN73RLPdC76pZF1dr7FXH1JJAGA7pPoY1TqW8QPN4t88gXbQs1dUDXVHyk",
  "key14": "3gFfysK5ibQd7AyoamYQv7BAfVrWAPAPw6Jjiitt3moUtsd2pMNtrmy4FkjS3vbisiU4ihBAgpjxxedbiYmpBRMc",
  "key15": "3w68yPH5xW9r8h9twixJUnHghaA7S5iB1CePcRE5DkpoL25xwpkRFqgrMC72FJnJg9EWT5ue2aKiZeDb3kXK5A4V",
  "key16": "5CqmDEscPTwayE75u7NiGq2e9hewg2rgfhBzmWpFZf2EYYMaosEiCNxcGGREGByiVeY45mFxtgukjPHVHwSkYDgz",
  "key17": "2vvY6Bduwf9m3FHXwWa4gA6gSJPX1yx1WFTbZ7J4J1mFtcVEh3ap4D8sy7Bz59dkWUirYXhAjS3v4qwaN51rU3PF",
  "key18": "2p7zKz4hxkKb2XSqPCjbAScUA52Y3RCG6LHT9ycRc4x6MxHr6UiExqsDG4nHC2j4okAt39H6NL1CaEp9w47ut2da",
  "key19": "5Cj1q74taFiW56R1gcJktuT1ubjP3ESqEm2tUkDoGhhg87vMSgRQzUJwgJEGxwNqkUQDdDDeihEJF8BVNF61Vgts",
  "key20": "Fe5LEKTjdTqmQTgYgBoS2yirXjsxfrxgvnDuWyiGEqUmfZd1Z7oD8UBVfphbQ6s5VynNQ662d6Gu8XcsfqAsDjQ",
  "key21": "2nNMzBFHsS5j7DUdmEEe1Cokac246iEYffEUoact4yJ61V6cSFcr9vL62R11HAdrPttcDJ7PExTY3pZpBA9Yz38W",
  "key22": "5k1YmXxkvr6Kfh2u44sSawGhPxo9UQ1bcVNdWEMVBMLPndWHc1h59AYNbAM7NCKkveBE2YfvHo94KgThcDxnriPk",
  "key23": "aCePf9np6b7oyCMtEhCwZRv352NREqYJa24SUcz31CDkBXb4JWQT9hfFUSJyx3X99i1kDDuYngDszfRN3wDpA9F",
  "key24": "5h9rGWSvbJ6y8bpHzozaBefgkt5tRfpngFNm9aa7d4biftmDabYRDQMwqtZzK7yhdvfPE1tLnHzf5TjRAV9q64XR",
  "key25": "4ksDVqjYFNo2votcQghwQtwzABZYxGFSNoxT7vAaAM74E6fM9MPrZpLNerAR5kSXgfEHZvht7MqoQk8PHxhQP5tt",
  "key26": "4y9ja56EwoSmiuurPCzXVD4woysnmigxEhShkSkYhys3gfpKZahJopKKwfLVYx5Db6XwJjj5xkKCQjG9rqAZEXhF",
  "key27": "MV2kCGcJbcRUKJfimTt3uwWM9b3ZftpbuYZVHZiHW4v5JiBwtg1ZZPW1vHHqRg9zTmEurCDdv6UCRWmwGPTUf6j",
  "key28": "4wXfzqVEkorhTetWc5gjNyNjvmbAwEVL9gerDbDZA5sNBngfo1AC4d4GeCLr8UdAQGx7WHp3D5ws3mP12Dyj2nVy",
  "key29": "3kSpJU5Cb769PM3Zvao5dG1mozjxrxuHreC3akniQvtf2mL862rC8buM7FFUzMdU1KvQxyLcYRUhHVeR2D9q9xK6",
  "key30": "32wf2uNcDbDDKLvBgLmhV3H8h84mjeAxrNVCaTtGHDxLzfXS2yqUKC3xwuy1kfeHQBWb6QPqnEiyqotVtV2yZwXy",
  "key31": "k73fouLAdQsG666ihPEZ8rayjsbfW1CeyBSGhWnGxDYpSBCHH3W5mUidqfjZGGkPWBRQjAvjyXxGrXUMPdvTMUc"
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
