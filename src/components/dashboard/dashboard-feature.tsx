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
    "3tJbfKBpFZLXHL4sN2rJkmtiAHPnhootVE3mwg6dnpNzKTW5GZo7u8BbvsdHtZRx4EkGXw65uj8NZGWZx5Qmif6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Hh4idM5QBShpkzwqZ8Bkf3U6poG9B5DLZWuwKpPVNxqCvNkX4ozjdQqDxaKZVpr28damBAutCoyTSJ857g9ae7",
  "key1": "4zmRso7ZUo37byQRakGkwaVYYUUL8xGXcYdHj8Ge32mH5jNePq8Pozh9y7ykb3BqcbgY37DZ5WDAt35gcknXxLGf",
  "key2": "5fg9h4fbgwr8bj83i31n3E3E7LxYyWGgmmc17GJLpKVj98F9RLFcaVgdj7mwN9VZ9J1hoyXiaDtgqegWYPr15tuk",
  "key3": "5BscARxYUta88nMXW7Nz2ZJxqk8epg6SoYafsCqyut6xPA3qNZjQwUPCWVzhp1mijNGiwWLmRdPEGxptgRkgU23L",
  "key4": "2Umj4kygpzwEUbK3bdv1rQCLCRZ2JZN9VsEGmSHHUBR2FiHBZDE7SES8yXD8esvQbQtnv8DQqRZjCJQ3UgNrYsHu",
  "key5": "4wgCDHaGCDHB95DdDTNyTjGqp9iFfrHuoWvzdNMYynZxz4baaFN5QFSHdmwags92oBLHurNorpqjJhQkza1HdTWR",
  "key6": "5Kbs7VfHNPvP1BbzyQZPSoTU4KzL6opQNBKLsXMvKuNfZGtmMWauxS1WaUHcfrVwrkEibc7CLGgr7y2EuKvcnVrS",
  "key7": "3LSxbDjG1GYmwBJsxVR7AcpNtrqFPLraGrMyTQWQxkx19C4EFaZLb9Ep8HXtdSWi8j23xFYnZys3VyjYBpvETPBe",
  "key8": "4ZUuxXRVXQ5A5mSVyjBs7D29Cgzp6hkaAdcRqSxZfx4Jtpox3GHS1NseDaTaErLKNxHnzKHJB8tkrEvbwUVPjGsk",
  "key9": "4tqqqvJ1A2ptTE6PSrf7tnEApB9XzgBe4prP6iqaJFVoT7gybGJuGUcBQCY8PjE4UoYrVgPY6Q6y48gsL5GTGPK2",
  "key10": "679xXABabPokHDVp1L8MkCo3Q57c6BEwrnnX9PG2f9kRptniyzv2Uxwm6tkHmR95PYP6wU87ByZ9Cq6UzAMB7N9t",
  "key11": "2EdwY5ZUHkEeSemyP2FqZjQSkhw3BnyyXsdxNrfEvPjAMTmE5Q13wnU2wENe1fJDhs31K9TskAMNRmc8TNQH9QKY",
  "key12": "4pwLvgtEsUWj1owDhNZnAFabHgPwiP8SJUAXjDGu2deP88NgEeDce6k3DsRk8XzzPzaZWkeHAkZfA1g7Br3bQufG",
  "key13": "657YTu5LSMASaqKA2RjQ9NsjUegC7jtDZuP6RhJXAJUSP6VvuRtUQDonnuogYSBMANfkBTcZoEaL4ZinFzvWLpqG",
  "key14": "3s36TrZMsf5X3HBEHXjoa1mEip13yraqEkA12Vh4JkGMwBnPDxeTaENP7sCh4Fnt82SNV9timLaQGnTJCqspXuuA",
  "key15": "mrdWLZFka7uwAaNT3HxYjZkTs7aGczmSiD9SzQRXUf7QcwazB5phaWx8wQVqBh76es2mRaa59F1tyjniJs9M8DG",
  "key16": "2cUzCvvgbVFugQxoxTjV5x15nYmeZukbHYAnVj7PUBQWwRN2PqzJz498uHen94h5aCUXkRM8QBRjmxqdhdVXq1MR",
  "key17": "2vpcjrbk4VB1eTYmWrpg6jnRCZfBaTkoMqsDh921EG9xwWvdYGDBzEN5qMABHcsQahcPze3zQaism57t1C3PLV4k",
  "key18": "PYZKy1ZjQY8MGanWL6ZsBdFCV7satmvmxwDWo1aJK7iXY8a2QBPP7AhZCpbPw9ikxvkprSED2Y8nhBL3zxs6nMN",
  "key19": "373o7vQct3sxPDtK1uFMFMAu8qA4YUHvQU49T6J5Qqw5WXGUuH9ts3JTHXcoqbpyrFLoXmJpjtBVcjLwQjRuiirN",
  "key20": "3GnCiuN5fLgGitDeSgxFA9tkM8JRDU2BvLPY4xYS5GzLcQzYN96dbZBZFzBz955R1mDsYtnuux1TSDn68ULnCnvX",
  "key21": "2RkzKqKz99bjGgGHJ2sn2BwwudVyjNUqkxmvUHLFXesV1fb2VekxxAMg1GsnPuFwYLpyeZwKVYBsvY1W9UExZ41w",
  "key22": "33sTVZpqWeD2wbsWLZaDmqCeJoPvNA9iPxPEU9cfwmrnC6Qto8uUwEjXj9Bz9BGubzehcPuiSLfWLY7b5h3cu3Sj",
  "key23": "fwafVsAzDVQ3LjGY9hueDnkorWFm9Hks7B4B844UJVKcuBP8b5tdEkJ65nt8NnE1pxM4dst8MTuvg5qVrEeVeEP",
  "key24": "5nNzwdb5iepv4PYP75C6FPsmYQxQZDr5fALQ3w9ZNJzEj7pvgKzDP7495afKXqF8Fd2z5s9JQYPa6awde7Kf3wQL",
  "key25": "2sJKwEzimWNkDEWxKgeYCwiwxRmCJDsbAzsjr11tpEiLFFbhWh7FSZ5Ea4wJ8bW3NX4aQcNvzcj8nfiYXaRBSEh4",
  "key26": "3beoiyna15QV1V6q4nyLqJ88R66rH6Xrpi5L8HCXCQfoJRG9PZBq3gWP6dkzj4Q1JmvRa633h8396Tcg1xy7obtY"
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
