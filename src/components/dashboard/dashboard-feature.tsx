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
    "31sD1HHx51uqG8wT78hUuJcugyEcqz9LFG49d98oLNfJMp5S2MPcXJ4Py3jQNNQhmxvRQCeocCzmXToNZ7UscpKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58BAe8CYHz6YfPpteCTu175F8MspDhZDZWo3gv7UHktBobUgM2uj6eyotHN1MwMPnqKihASnj3edCqEcmPfjWYxZ",
  "key1": "3DovtDioBJna2qRDjZDqPz9aLBP2eUzqogzaRPJtJ7WMzVRNWcTqUYe9TJ99zm3ZUDfDor9awvP2k5vJAHdusnQU",
  "key2": "27BrKNN6jxi9mVNZ1EraZDAZob7MnrUg9B5tGxnj8Ys1AnM1boUbTYvQ9zsBypph5ox1Ao5u3meF29bVjcxKYSQL",
  "key3": "2kQ7WGuDcdnfo4vdh7yrsuXUdawQpfjEvkrcU8W7vx7VvaYbsYHn2rDvHsshRV9UPAGUkLaP8oG6NodFfLXAyjdD",
  "key4": "2KdfbBWnhj6SyaJYZbhrqikgaMtc3va3X9fYVdkHjanNddjfUqFfMKsTdc2d7BnPFgdJmFHxsQm96r3bR6QQruxr",
  "key5": "4hqdfZyutSe7ueuCwFXCbPD7ZG38eTdFbq1bZMYuMF9D7aZXQDBGZnY2U4aWkwfkYYBuBxbsVx4qr3oQ9mbazpPc",
  "key6": "63cpSr1KK7ynG5i5knzW4xVFRyV6uWkvLZJCwC8FaS3YZh5HV8y1u1b3PD6XqfQPN29q2tzfEpkgKTkHy1UDWKU",
  "key7": "4pBuWmyEMAXZkRemxKvZfqXrfoyZziPEPFyv3K4E2uGT4nNeHcgZSyA8eht6oLSYBtsB4evSF33dHtTinidRNg4Z",
  "key8": "2xeE4eGnCAPsmMK4yB9utWwHUeERgaZTgfAxACMQr4VWBaaTX91FtQqWW9mnmYcwWp79Nzw1a6cX9PBASGN2aPn9",
  "key9": "3F8RGGggj6NdKn3VjqTLLW5ZCkiS7zCTjVpcNPNzvawMMxZ6XAnoDJLsZsM4p63HRSw1ffEzNBMu8DW6Y2vtvP79",
  "key10": "2X5r6Y4AqfsDpXNHTyryudaBYLDvyrjwYCKeVMc9NsQfiembEXLKcdYUsafZ8aMY6wRrQ9zGHbJNVgbuxmGmknEM",
  "key11": "3babVuQjqdKBuqJFmcsXyhHVMdRMyBDbDpbvuzUzuAdtYe9CC3wjrfnRPxitMbSfMeCYsLDP2T2TpPZsRKf3r9qi",
  "key12": "2GYcMZZb4t7Q45j31RgUvgye2sycX4Zp4JdKcnUTiEVufUC5NxCsJurfxQuZS2Q9RByY2XBB7zWyUxBnRzzYGCmw",
  "key13": "3jWFFKNBXpY5e2sXpH61F2opSJv2VARfSBqHXi7CrzrCG4RehhVmHYccaSsm6KAP3HTzEc9Br36uBunFhNJP5pob",
  "key14": "MnsREAXvrKHoznxsEqFd5fryisedDi8i1S8UnVt1xY54VQs3wGgQ55Gd6SNyXmJGgcAkDuYdzNtkQeiwnucz3tE",
  "key15": "e91XVg6DdDMW77qWBKhuwsP1jv19tmAuk5cZ6QH33zfJ8UoEQvSoD3FCT5kKGjxUY7VCsPcCFbZTZthw6iGjfUt",
  "key16": "3M3pYnJhKE9foF7ZywK844iTz5eupSSce24g8AgTABW9dzPHMSWatNr8E9fhid1E1tF5WM9hUnvw3Acb8YEcPPDh",
  "key17": "3Qtzo2mxdrX6r7K4zDyMCcCtNtFCZnELAezihMn2H7UmDXipMbP6Z8JSQDWJjREX5KG9fHRiUTs3LXsUgCLAF96p",
  "key18": "2yDCFVH6eegEafjv7zufZ9zmuHh8MSZ7EiReFQsGo1onZG3V7LNjAFCAMTqRZPnsr1jERqT7ymNTAJk2AAAP2c9x",
  "key19": "65o64guzqVK4nqWuTJXUJUiTkf1zhU2cwyn2kpoS2quKnv17DkVpoZf3ZeDFqFEsEY6UcwgHruNXUhmd64zeALdT",
  "key20": "3UqwcwCRZz695KaEc95G3riJfJnXeLv5iwGxMCRPJhz6737dAks35U116FNcnf5EeEaYMPDQBDmbFkZEzyRz1PGZ",
  "key21": "pqvhfU2og9ZR2VJV1nV8WgbejjwfssB3Mw1KQvYNKbv3kNuKZ6j4yUzAuRub1EkKKRgAApShCpLWivpHvuw9qVV",
  "key22": "Cf9C38BhPvSsA84brgDJz7SACyPYq4UdS2m5ZwYBWMmuGPHNxFV6kgeHfc5bC6t5uSpCntYRLUKUaCwzzZipM4h",
  "key23": "58tumMLVC6tZFxAUy6PrVHfU4hjS7fwWfyktgrq3wxhA797yBM7ZapwxRhYG1rG2iY9u5sbFokAVm4dvKZ6grY4F",
  "key24": "5P3o1YgC484tr8fMvyHhM9rCa9Y7WoiFMcaWe8rZA3oHCs125Te7SFDPK5u2SREPBXCW3fTbgxSfSsenX5hWjmkR",
  "key25": "5y8aUtXfPFZYyLYsqtnaauB2wsDc5HknwWajD9Tok5zmx9Ro3DNuJ8xc5v16i1cHsM251KGm9VF15FAuTfqk8TEq",
  "key26": "56x94o6Z1MGcEpyovTk44e1RUiD7K71mDiCkWouvcTUxfA9eKJybFWuVkp5pi8BEgr6UJZYmjA8J8C2WWSYWYMvs",
  "key27": "2ttQtM9FS1XJ82zGCAGYh7DgQoRCsTTwp1xWTpVa9TgXqpnhA8vUj1Boe8n5c7vtfcg8Lgz6wDsjN4AWd7p95QPN",
  "key28": "4seiD4jLg8SJdgNJpNHQfXcqFsVg2oXL5GyqRjS6h3aaNQXCeP7bWJP45L2c8KetQq2S9qC9uWrdUaqnDvTHx839",
  "key29": "2UvCekvD2B1bfBMxaaruGgDTGhgXJPJP7bb9iZXE8UgCJumouhTk6TvkTQ75J44kJ6vSac9ALJ6H6dCeJJ9zKCD1",
  "key30": "5CkK7ajyX5sJMxN6pm2UvkLzHZ6YdHc4g9KThKV1XHHjNLpt6mKvbiB7CwAVJXr84csj9Pqo9jYkaqEqSduUL9JR",
  "key31": "4Y2gj62diXhZ6XDgxeEq8orQbSp9xLHoBboAH6xYUBTnVwMc66oSk8vocjhGe8yN2TgbZFZVRt7TCFnp1gzdQsde"
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
