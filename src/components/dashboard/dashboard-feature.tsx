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
    "2ug8hiHjUj19wT4rti49gcG7dWiHpNZWPdoAdHXKWtuB8wRoSdDGWFEt8c5gXF2Pa3EhmViRi2gTeZr4j9j8nVj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "397g9w6GwSQBniJdn3gg36n82Rwj3DNZRJsLy7FUAQCZ3tGEd3HQumBiTVwqfWm67CeaAZfyWePKPhp9DDtXdvcT",
  "key1": "26tbQdKhJBBBZjizo5N4hZPkjK9fSEQh1wKEciji4qYe5d8pit7asqqQ4WsmD1J7tG6ZwuqMyTraX3zC74mM8chJ",
  "key2": "3jMpv7hrxS4mhGrf3vbsMBHAaxzz2ZHvYSBSyngykak1ZxAouQu86W3QAvNbTDLTFZvjCKAJ3uSBxznJLWMxDkNa",
  "key3": "3MjFj7MUz9SRvVxgVukTAwABaAKhRKRG7rdJVWJnXwToDMo8s56qADqGGxFQm3TNDrjXGsW8cx12gEGnQsNgFBSR",
  "key4": "2Kzsct42JCMgi3DSRXdNgHfmvm2bCiXfsteVhYmEzmwEEWstYuj2ermSNGzbKHufM7TY4QgLy9vAWSqz5D3rkgHB",
  "key5": "2jLxMu9Mz5JZGuzk1AsFHVBhLnqgqoyyhfnBVxqVkwG9dCy5NfwMQuckjjeq1otRQ6idGGTQZgkRC9ny1ZhjGinG",
  "key6": "25aoUGkhe15761zyVv4xgGK39vDijS92cMizJq275S3MxP4G1zuhindWzXK5n71Skk9Ba3VUz9LSGMGsAF4jvTDs",
  "key7": "xMLbfjzwan2yScUxUShLc345yHbUYinm4GKmc4Y5o66t96xxytmJLp5CCXqWeByAL6igKvRBxoZWnMdjzEEccXE",
  "key8": "Ut6PzMTd1rRBV9WpVVrykSL2eht2hRgosZkdpUvUfAQVEdHLGiNcWQC7V4XP7xUtqTe7RJL1BT2qE59yB8m9SYT",
  "key9": "D6hscWhrRbjoC2NVk8z57z8DahznLiPncGf8wfHQc3Wg8KUSKj3Xb3R65aiRS7FRvTmcjBef1xv1hbceWoWyAdz",
  "key10": "4vFiNAY9Su5QLFZcjhwULGyhRFesrQrMuto4dg1mCFXkNy96VyhwNmhkvmKWBQjAmmwrz5LNLMk8hDictZHCrRLW",
  "key11": "2Ki8yj7QKid3iUQU2y7H376apvPo7MnCYvvjYNzsjeAgUNkDedfQy9FfdaKWAnQCJ4MiBwESf8B8cw9KDFaS6bKa",
  "key12": "238Ty2n7WfHb8xsVdZ6E3NyHxvuf8TS8UFsXHTQqYSDiveCSgkkpKwtFnF2kBiMgVAMbyxfX8dEHzuj4nQ1w8NuJ",
  "key13": "5GypqvE3GtTZ2nk3CeFE1ivefVBYdTNqGWmqhVYMGXMuuNy81VbUGfU6mtGSYNa7y2F9ZE7SSg5EYX332TYPBjdD",
  "key14": "2AViJtvnveQVkDYy91LBSrfsUZCxTYyHHdysiqUtCA2mjybFwRNH7PsRReWrELjzsEN94BMsY4n7xPjk6Px5JDBV",
  "key15": "59BJwV2QhYvMFJdw8TwHxkJPBafoLA1962wwQ7ZRCnwZfA9abNqcuimFGJFfxuFW5PpY4Mp5Jr9TpErCcXJ7jPcf",
  "key16": "oMtGd18sySK99X3B8xeuV461WW3wCSLmqigRbiWCygvNYMGoh3D2jWoDhML2WgAGSqfnj8YWsE6oPVH5KwxZmS1",
  "key17": "4psiLuLu3wg21EkEzhHPP58xCQvv5UFAQts24wXCsxnxeQCcGFzdpd3GJ2W3Nzw1tMshFgx1CBNaxgPyzSsqAT5v",
  "key18": "36dVKekcFuarqJfZ4jtJJ6JGA7JRk54mZbMqbNNRnyFUzHSMfZGLdsHuHFWQigzE3eVWttLtNRZUAtTBMv7aymkc",
  "key19": "3NQf7SSYMxH6KkCCsNGMWCg7uQLq9znrYU6wKsXKd65mtia1qsuTmftAQQsNaaLzXLD3DAtKK9YnFAHEsKTViXHU",
  "key20": "ZHHcm75E9of88mtLZ5Lxaft5zjodRwX2m49zDXSK8YMMRiihto1GYDmTCduKo945hVc44UJtVpqa4NSduH4bLSW",
  "key21": "3a3VXG9QXBzzWuc7YsPtQb82mXb1vLeLD7ZkmL9TkYkutocp4LC7rEpaiR9p6K33zmNE7BQkY9T3sXpUUUWYSTfZ",
  "key22": "2D9Y3VovgoREckiqrwH5RrNcEZoRFGyqFCrNWWmMESLcJSZdLVQ5P3XvaWUoQPn3Kep4DqwBYR3gP15vd1EKCpBN",
  "key23": "XjR6cpBFt6fXFtnWf7Jm9G8fGw38kmkjvcHNbrEvXJd573a2YR8ytFFLd9iPYTF3ZVNHijReTJbTJap96x2GZg2",
  "key24": "2iYnsQSwJeYTNCdQvbasHFxqfsiu52kqDzCi5dDJpgyVpBPxqQQaUCSz5in6S1MSAt62MQW3gWdweAkBfieQdePN",
  "key25": "Yuu5oKYG9KhMYjSq9eWudT6Z9gKSaP1sSFuSrf4j4qH7MgPzbKCV9mtWFFnsZxpJvK4fg9vXRrPVww5uGU27pxS",
  "key26": "VV1PqTV4f53R87qHTKe3pbe6TZyDvCxMv8XSefVskMD7BeKN1a8FfTJizrJUoJBNJQ838mFLdR3x4cM45WW8E3Q",
  "key27": "3VdYg138PLBfVQZWGZF8eAEB2ZoGR33JpavRZQpkCdH4HTKixnoGTuAJnnennDUFNbLRwmRJVavrghN8ADfaApZM",
  "key28": "2xAdEdfvA5TMSRyXGKo2ASMMuPXyZy6ZirMw8DF6612zPWq5qnc1PUKHRHMSGsgzjSApBUDR96GcUEDumbb7fk7k",
  "key29": "KrypkrSXtqoaj9tAdR3Ccx3aeteUxfYMNx5xhsWaAvgM6fmSKrknqHmEnHxpEGovLEDgWzwAbrPb9RZCQnKXcVe",
  "key30": "48KfrTu1RQdDdks4Sv2JeHqQHhzbvyYXYPCU2XXDtBhGSRtiQGZKU4qBDe2ihnpcr8HRsefnx6HSA5VPC5fN1rGX",
  "key31": "4yTKemiHiNae1tHWoNtLupZS1rGJiJoRpVkhEpAU8wK74xj1xvyMa8DPzt3MDpb2VzBBXjTcV3GkM81iZCZdZKos"
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
