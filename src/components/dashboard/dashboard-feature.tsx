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
    "5fzSJZcG64p852rDmbwmes23BMSDVkU8EY77tR142chCjVtUcKbr91aRopGTeMQFJbef1EUZJrQVjs1gz6NbM129"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42oLjJVv5FPRe8i48mrC8UqnnytqhvhEZMWwga85nYju7XvzakxssJKWehduQhDvjYpdsVbccDZkg9zJbNGP9np7",
  "key1": "ApffqnhwLDG5dGcJvLBhgarGT1eAfcs7FXcVPe3VyPBw9brTYxP9aPQafpKXSLSq5iQ8bGAo3W9svs3XNWvZ4QW",
  "key2": "5dMaB7jv3wpHXAqZebcczZcLwDzt53rMCGYoEdxb4ieVFooMmH2USExvQM9xnByKYTzN1UE4nsoFtsVNHYTe7W6S",
  "key3": "3mYVokbpguczYJcKPN7LDqWhskQMe7awkvet9qSpraoAWTQTZpZjGaLTZqM7jXow8g69PJqB4KmAbomDLq1w9pPT",
  "key4": "2BxfxSh6XwxHwymVj5y2fE1s6VDSveEFyHhMSUVEnGtcVLZnVtc5HR4AaZRdUbCbgn77wnstrTugGtdRSSCSLreN",
  "key5": "A377RaYFFH4U3bAdCfk4vaUWfFUHBRWSS1GEjbGFgZvnqYWFXbswY7Fpunjuy7CUyxN4yz2ttmvCT349fVhoFWx",
  "key6": "4fE7sJbpjbXrCLJgaUPtkmvbqXX7TSEMQYR4xXurDkosnMwEPSchBewwAXvgX8RvFY3p8rszcjFR6ecqwdQ2Hzkn",
  "key7": "4o1TpErJGeUsftfMvo63yBjKGA9KHwTyTgGwuXMu7oEGxQsknhEF2jqjkKj2Aqu3CUGci5JGTNVH7v4daVVA4Dru",
  "key8": "XyWhGTkDXVwvu17N8ZtTBojsC3Gvg9LwUPN7sevUEhNTtGWdJK5GyQ4Y3NyeWonxh4JxCW2pzFZXzS7psG3DyXW",
  "key9": "5VU8LZw3jicwTutsjUuWHSjgKZAiwYpRgxVPpZp9qc24qs9YLdsP5aLPuxrrAPdgywd4yiYBo98fsdaA7kGirYXc",
  "key10": "5svFFWFzi2JUgoG4fYB4eoSi8JXf5DMZLAYE7ebAujvN7WGrgbDjYWXZUSPvVBTcvaKsyD22tmDfPmJBcqZDCQJX",
  "key11": "63weFm2ScZNWAzpdJRGnbRnkjzDsjLt4a2ntShhFokEYyeCc6T4bTfS1C1jRn8xS5ntFgrpaZ4JgQVf4ym7XDVxQ",
  "key12": "5Ra92quSTdAeZdesFcmr6YAoikEd1GoUMFpk6tBYzdMj7VR7QY3WJrdV3tTnuejHkWksBF5Dnia7DJzMnhiBor4r",
  "key13": "67ad1dw3BEKgxUS2gSHkd3HqCrdJw9v2AEkuVqhiyH5Gn5P1wTgVFHnCyRujhZAkouJJ28RzherUQmCSHyDUPfow",
  "key14": "4CE7VR36ZUNiuA7Twio9FwUZUEa1x6cvoCAKNtJUZoimGWWfipKAhXcZwsEN7cjwDMWuCrQCTNhzjYruBdkX2LsZ",
  "key15": "4r8deUWEPoQQAfT3BzcareLDBVQvt66vKjivaUz2gQMTmT8rojt1rKauwvAb3rW1DxvLhWiJ16Xx2tav3guEtz9J",
  "key16": "5VhSRfk29bHUpzJ9sEiPjXCfENRNUtDMHFuk3GjvRPCsV7tSZCDNQhcL8PmKzJrRNaxTWEdo6LfzACjSVDAtzBV9",
  "key17": "5mSrT1KhSPyCLYpqkrdCuhjuDLo6MTXdwQXZmnk3at8eqxRip6dPW6hpXYAZyEwqoWnhq5Rdmj5q7vNrRKqen9dd",
  "key18": "4V8FQVsCGjTuxgCe133gBxYCzUj3r12mX567Aswaq521u6k3DQYDQi4MsG6h2cGTEsgQJ9GuTCBHP9w13vt1Tmb1",
  "key19": "5XdCG9yhVahay1Cb5Jw4ggFR9yL4tMh9Ur7SePVcpkfB82nwJMdQPtqzCejX1t5NqBbAH5wSc9KpurytQ5X63yZP",
  "key20": "5EoAumSV8AWuJ3JV2rDwfiq586vmuCCK4LXBosnhqxwc2wsh3YhA4pEjYRSKjsd75XCKoYDxR6rtKSPMJKD8daBE",
  "key21": "4Pe3mmG5tZo7bZUmoe7uP2d8XmNpWEQ2M5d8fZkv3F3F115NpakXBeTwM19J5szwikF56FHRb8GvxhaZgfVHUK64",
  "key22": "xhf85fH29zjwwyETddYp3T8M7FJi4bDEyMQSZJdu4oqaKuH4H97GvbX3XztEmrVidqVNjMTaaRbBKJsUjH9xYzf",
  "key23": "5ihd3FQgYfCtDU96yVu9yxs7jDsCdFDS2bD7oThk4qHWupXx9neQDLYfccip3resCQb8nM7k3QLjFUyerpYM9www",
  "key24": "66ynaXhJR6M3fjQfYQtnn1nnpwVsc5nerbrEDHPrHSvo4MLPHQF7LqEc6vAC9o3BfSKVdZHx9MNFM77Qws7NX3jb",
  "key25": "4vmh7KDCqLT9ckeJGaCXemfKjGrKhFYPn4ceR7Qgj1qqcpFMQdAbjM2zKTLWocA2PXk6KKyTi1TggVQGeLVSgUiL",
  "key26": "2HquRnGcqBnfor6746WPtotRMu5DEkKyzD7uGP1DgitAehr5bf3NVxNzWPtpvSKkp6KTiQEkzw1MWajJ2yFh64Tu",
  "key27": "5xA42YVTANL7uTmREsEu1ZTZRMHurSLZ1LKsKpureGC2BUtMsmszLUxMhtsYJgVxBfoWzroGL5cTehg7ENUZi28C",
  "key28": "2bsYqCBsfADauWb2ky9NNZoA2jj2dYKrMLoqcqtGFxoQ7F61vh348PUJ7p1X7rT5gVVegp1f2ZAksw2aKNYABuLa",
  "key29": "4cPCKErMSrK5ttLdTXPEevnYT6netc5rfRcM6Zb6F6bSqV82N3u2AKrpQMUJh4Btfxhiyh2FXaDuFUCgXRAoYKWq",
  "key30": "5yNtTe3rDgUERDuUViZh5wbCfga8yQuf2vP2ex3ihqMaJieYjo5Kr73qXoM5kVPa4gP42991E65WyQUU1BtqypqX",
  "key31": "58MZKfSM2CBEcvw6a2Cgvzp6GBVNU5EaYa7fbswiMxm4fNap4nX6HFJS6YG8ksVoEaMYdPje7quzF6Jt9hATdjeh",
  "key32": "4h6dPevs4X2sk9gfJahS8NgoVHSUfUEFkcPePoEAUZqff5WfJZEZ1696u4oyYUaA5qNV2hPKsH1x9MBrCCusVzUx"
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
