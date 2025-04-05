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
    "4yGXWwiczTYv9tAvHDfi9EEqffEBT2ymrCT2iUHgnqn53XKzdj99BoJVKJExTL79kGQMcAFfYaNjo8UqXRxNVttk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CmZNJGck65mmXzmkNwyQqVi8jgQ4qrANCkAxUoRW9sZEC5cMv7WiJAVEoYNuPxTi9Ao2vZ6bPeV22x1suH9wG4E",
  "key1": "4ALfsoiwjEFTTRyXvRd3d9DySpcSCooPFqhaNxxVFd9yU3hKm2xDZXXw1atHXbPo6JXmiSsZPpsudsXX5gaD7WcZ",
  "key2": "5yBHAcGxqsTmSDLYHsYciSuXNXqwo9zz3285gPKwBvLjwxJECGGz6iMJgB5993EF8wXDU6dHAxhQ7tG2eNvXSyd9",
  "key3": "uUHqDdynWp4pE2hUXzsXgmncQdwRwbhfHh6ism7nRTVcEAcRhtr8NJxoaVKS3yrFmiyy6qrtEt9R5Znni9FSnqS",
  "key4": "3vNNtp1PUvoe2oKgp5VN3DxzQXsDiWPmFM8ShepYZ6gNbFBaUDR2CWwNoZpWSrWYfrk2z1uWrXcEEZJJFX3ZV3RN",
  "key5": "9kRmTi5vZLBLeNwFLToC9YdFz7CE1CU4vRx5gzjngm3d5iodai3qNWVk16BsDGVcgRhz7iehLurMu44gyWjJiGT",
  "key6": "5qzBAEnSA5ctLnhvD4Jqay6iXKe1mobtVKhnNBWpG7B1Z7t5qqBURgURnfUqVMKxfUbDMd2u8ScmoyAcF2dpQZeB",
  "key7": "5qYDiBWBdUSr24Zxmi51n795D9s3m8AyoevH6zuPh7TmTnkNLMNnDbGkaYBHT1xx1K9wFYPgF4RJkK4HwCyQcXxA",
  "key8": "5eRWp9vBJsSBfFnunr8bWKHsrWKQAdGehBnxpV6DcaqFAbHeBDE1QCREeuxMyhJEYwnZDhRk5wXpUCE6keJ6QCYS",
  "key9": "2g2bDtk3NNdL7eGoyfHpqe6LZ8mW3QAMdKZzbuM219KsUy2YZytijn9onewxA7Qz9euVQSggJt8gBphPN5JXQrF2",
  "key10": "5chiYvjrHo99ubvUvabsQYPqreWvqhk4ECDuRZoZkkYQKBhsAoikgvrQGaNx8WLrv9WJoF1YQ4cA4zP8ARaEDrFP",
  "key11": "5StbWh6RWCRkcJnH9TFSswRD1tJ7Jqu5tH13tRuSr8UzxA6C8LBqQhpEkyTmZCvUySYoFguxACBokkzVAtssDt7n",
  "key12": "49rgEYBsUZtANDyoor82eFK73Cp9AFmMhofJ8tN2zv579ATsKBRb4ApmB3EwcKkoLyLay6DeAniXwkgS98KDqxd4",
  "key13": "3sXUtidWGHDRDe8eQgPznJsQdf8QBHKvNWDHuuzLShYXTeHmK2qc5FsSwPpTVQR9i2Brdz9F7cCDfVzyyGm2Qppd",
  "key14": "vh3jAm7v5RpScMH7wtVct4dgMZL9Ke2b25JkWg2RREMD89KgCqvA6Vw9ukyCjv7A8vyLAhziKG6bNY7A3UdK2D6",
  "key15": "5kytaEfrgofrf4WJDDCn4mYnFtJaaNZ2q4wv2FXEfiMqgf49G6yzLHVCqzsrEKXQ673BdLRBDDbiYEWNau6jWkLf",
  "key16": "5S77fKALQXECwAwZ7YK5E79TV5hekgL4cqsp2YhrE5LA6QbSQSYU5LnxVxtaJ9wdz98efGq4UVjFshxhEt9ctFa2",
  "key17": "yFa2DHDm7s9AC5y3uh3jBuc58YGAURUzhPpR8HvZu7PKKmgxwkev2SSYyikKowm5CMNuyugvQd4RZY6NkajAhbA",
  "key18": "3cN7iykVA4XPBobHFr9zs58M3bqqgMYQooidrauc3JiNEzqd3jX4e9j4zREro3YDH7vx9A3YTudJkTKVgENy43KE",
  "key19": "En9k4Rugg7BcsGqzThbmrorgdDcvkTBWi7rJFgd66Wb6R7h4y3qV9pHGU4SdMi6oBrsuJsYiSQWsbGx73zRVqDp",
  "key20": "4mrMXPpNWFcBTZmEA21tE5WYXLDEoSVZuUnb1XQ4PmoThyRN4qBoRzpRb6k3NhBDHKtzrb9or8spdmcijqBaux5h",
  "key21": "5UnWzqrwzpLL3awKE6Ms8544jocEeYTBVutstgLy6zBayTZRFGAZBHPv1tRgTucSjLuNvyAwhHXPGZoL2qXdxQ5P",
  "key22": "4Eje6LCejqc7N711SsApcAUWpZHnqsuhQNaEQdtXYUMfUMxBBMNscgMZGYKYfmLZpcM9UjYaWJxNzguqvX6YJnnF",
  "key23": "3wREyFVK3t9T5bsLNekPDK4V6DuSyr8qvqfeHw1JgD13K4QHhX9XNjdKHEswfqbSepzuXE14d7ejYXofSoJkwUeN",
  "key24": "7BXFoFBoKSkQFKxaSrYwPukCc9tJnZKnii1Ef5fiEHDiYibtzk1un6PgiXc5ikk3XoHnHPaT5N7a1GKz8YJuqh1",
  "key25": "2nxubaqmYcS62ZG5ARauZYGYSqePszt21nkX8tDRmvqbou4DknNsRrxPG8XHLP5RKJythDtYt3CreF9vm43rpSE6",
  "key26": "5jWVxrAkWeJbkrY7rCSPKpWuKf98vizNsSaqHPQpYJCFPMjZtWhQ3fAL6Yp5Uw7gMSRwjUK8PPXRpJJ27GzwFZuM",
  "key27": "kXjRdDpgDtPLau19Px17GwLANetAcVSBeVCra7nGhjZWRs8NZ5xbX5W93TXqKSFuPjtzfxQqc6bdQbztwJvf2EX",
  "key28": "5KyS6ZUts9gSaKaS5E6U4na3miwPsjwyriShgEL2i5Rz3SvogTg8GD8QKn574Ppb2v6qqCTT1gQyetCTqQuXR5s",
  "key29": "2LZncP7rXaJm2twdVH9rMU7imiZUzyKmpFCWk3A8eNF3q89C5AjwckydzCoiLMnmX24bqsjrVW8z51EVpkt86Ph4",
  "key30": "2xXQKUBSHXFkFmYfYLcRaSLZmZTyi3fF2JEKxTA5EJDDu6U1wa8Bx3fhF6V7qyXyHwbjPrrZTu1hNhxD1HAnxiz7",
  "key31": "5J8PpeZT6YuFCtW6Fk6DaeRbQA2kwRxFciinbSfXXxg15aJbHd72iAEK3z6EbNmbhq2vMv63E9yGjdgL1px1hPAZ",
  "key32": "3qVT8qMyU1jceG2DVndY5pHoxt1S7NWR6jnyNGSRTnetPN4uXEedB9d2jYz1ai9sYFEg8aewiAGtToxM8KrfhA4g",
  "key33": "4vyxTyT4YcZpgdrdFugd2zKUxjBGzst1fPDSrC2uLud28eedVuW1HScksAV1zetwmwYuMMnDAYSWsRPuLGPWX8hg",
  "key34": "3qytnshCvikVG8uQFygrv5rWp2cMSxWi7hqdSpkG6bvx7DARuJcyUVsmsLd5bqAU5y6NRnh4N746LaRBvtg2tcxx",
  "key35": "4obsruXTZMzWVVxif2nLKbLctxMpiK4D1NyGhetcnsVFbWBauvcmGeceREHRohTTwvRmHgi1HeRsnSHUS2FB9znB",
  "key36": "HdGDQDmzcPdqfRNpDhjP4WHayz92QnoRLYDuNJu3XBwvh7mqF2Nr4MuMLz1f85RzajN37ajYH9Q4G32UccGxhzf"
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
