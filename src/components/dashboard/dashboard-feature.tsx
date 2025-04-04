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
    "5MSnnoEZHz3CdJJNACWX43wc4mfkgd7nMCTsbKELxTERdonckJ873VC1bsJLFYKz1BqmasGJEKLpb68WosLwV2CL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xvZwoYX8iVMSzmrLCaStcRrsv85SsCQLfxbY5HvwT1FdqLcMemXynk8bzoP6LjUj15VsC8y5nar3XQi8AW6N9V2",
  "key1": "53foEWqjDJT3uzwvDSx3N3r3kMxwR3baonGzRw4LHV2m4Ltsbw3nHAsZsPvCmUUpJGu4y2zoFnSkHMWX7krdY21V",
  "key2": "5QjQjgwA75gymgpZtGoXQ7q4NHJ9b9rD8QP1sNsJphoHRgJvemEKSvNVGYSsniSBpdN81TBbmZdVC3yK1Z9uDpbm",
  "key3": "2eUhmgtyzj932cd4DUUHWGAnEx3mB78kaqNYwwEtR7WoRuxGF2cwiFRKYokfvdR1LTheBXCrhBatY5frxM2k1aa1",
  "key4": "5CWcrQBJ3yRTxoFHcb7rGHdTBtm9fSPApwzRhGfDbYK4JwEEcxmc2JmKHPeNzdyNy8VL2zQJFWxGpyShTvLfFyGo",
  "key5": "4qssu9K96w9o9hBYN8z3vb7skHZbnFyaDV4pAYfynEHATjZ3gcKLbpKGcS9ZPdvv6Do1bGLczp2KQjyVBcFnZmvi",
  "key6": "3YLn18cexjaVEcDAsTxH8tDNiy3aZiW7JN4AdHDusUSwMPtP9RC14sg6898uoUBMEL6VbQZbht2WjfR8rczAzSAG",
  "key7": "5RbSU2WoDL5d1jHKAjvBvSHfuXhzsxU3wset4NrsieLVijVYTLdjkNBayh4G8yzfv8z17QfWH6eF7DBGbBPGUeo5",
  "key8": "2VUXQvWXjRMSm1BCBnTACH774UL2wCtvsUbtrjE5733uHTiiZLmjFvsTwv1hA7UrxZtnJ98F5SbwAY6ED6QsTUji",
  "key9": "3mwpZroxkK3kXmsXZmu2b1TEpKYkPRNQe4CCxncUWgw9tQKBSPaVhZhYnuuNqzgTb5SZEeifSSdLULVobf2XrRke",
  "key10": "2u1exXVBU6En7AyCmRJAohcsQrzh9QwHf2eVeT5mXVPM7Qyqa4ushL6hLQGBKuMYcTbt8sSCWFhs5kLaJC4VRNcV",
  "key11": "2AXCgCttwnBTy98DkTc4z1JYDi3eLuAYUKZ9xpU4Zqxdw8G3qofVPUqtCH6N4RboNwtzi6qzPQcJNQqftQbM4fD9",
  "key12": "457KYni6PZLTZFVYvpKtNtKkffSVMh6mAxfEZ4WG8QUYF9iiVo8qBnqocHyd7STki3oAACqJrzovX2dAqrkf526H",
  "key13": "5Fb7eS68piYPhJzU5jUwcBSeWayadCuMXTxQWZndsxpQ1FALkooj9D12Q78XALRU1gG1zFH7MiEiZu8wcKcBKbqo",
  "key14": "nC1KeVX8dD3XHx36DFpeExkWGmuj1iU63Njbz2xHkpT2infF4qDXp6CLXwgUrG9cPDpLUA1yvcv1aQL4gZ4cMtN",
  "key15": "2xykBNqknsfY2hBwaQqNkD7jYqjmWQLZwS2PFyiQJFNDoi3kQa4iBZkSwtYwPunzu8fvhHhdsJ8pzG4bj5Gp3Vn7",
  "key16": "Woaz9MhqTnKyftP3M8kptPFuosPd1LTpvNufyaPRoBDj8oMBLxCN1ByC7nKWRyChi644Y8dMMpJUaL5Z8QxK2H2",
  "key17": "2f2HyWiefrFbhpmDazHiYAFb4CezVMwDr6ms2GgagTLoLuiYtVJBdUGk4EYA2joXh45gJ97LCFzKfmtDrCjsf66q",
  "key18": "5iNxHHiCV3i1v4WarRzbYQ3E1hCjUwgeKAVobA3AQABj6Fq2knbmiAwptfvBWFfWQ6utgDxFKQxCP7vMf8sRQduM",
  "key19": "5dbTHY5qF3BoX7q5kkk73EgnnMoShnpFmYb2dPfCYajNzRbnKfa5TPmWGPaEWkqzcva2viXTBpQjc6DhJPYAobaX",
  "key20": "3juQwTjPNBGHxaA46VqiSzUkApjpoT2iEtXFnVsyUgkPsKY3ADgvZnCwtnytPwpe1c3hmy4FhbimJw8nx1Y3AjaG",
  "key21": "5wgXdsn3FFsxnb6hEvbGgC3HvAzDPV6od39NduCKnAfiTws6aMjivBMCpV7w15bb3RsuDvWSHR995QV1NMfGuWRQ",
  "key22": "5zYRMnadDx1ZWe19Pzg7sYsyhrLxzAGHuwQK9r2JGfmQcqhbRwuMC8kP8GapW6VoJk9dUWfVzq1inE4htwMGzPnV",
  "key23": "4nqSwDCpVsEaJ9w2wovyPHnZNEQUqFjog9WP58Efvj7x7fSTVs3yoxWoWRTEevGAF8uFGfhR2RunC7ecpyX47E2Y",
  "key24": "7jEUoVrmQ2gzJpsKwFQPQdAJ8UK9KENPfDq3PigeLm8NUfix9EMD9fMBdL89ojPK1C2KAjnZjGPvdrzjX95SfJ5",
  "key25": "251U94WNUyrmQYiVN7jmHp7qW1nW9c69xoGJ1BcRnNvTxhYr8JS4AMnKrNDaMSyP38suJdB4ADKeuvLsLfRWCvrZ",
  "key26": "8EAGb6eyjEHDL3NTzWFc8QeXpzKG7sTfwYHmHvR8awzG4XewMkBGAq1aQZYB373cQtBycTvtZwe9BzWzYt2DYqN",
  "key27": "2A1u1GQMZqByv9obVduPqXSGd1BjnPCYLL85oNqiphopcgaSNAFmeup3GBj9EsDYaKgtxPDrot5zeaVmia7D1Pxr",
  "key28": "Atea7zLvYRco1ewAUDunfkjbXvsFQ2Eu1QohdyXYbuJRj28MjFnaMjYkh4QNqtpxstHVcPHkHwJkdqKJL5od2wa",
  "key29": "5g1L2FQLM9QPBeChGLGc5g6qDKM7LmZ5KPWv1r7ixL9YR2QVhj69AqPR6C9Aq732ituqMNYJZgPjWtdVBZayysb9",
  "key30": "3fbfRGxGaH1VZfTbSdXwtofgAwjpmpwpu7CeWude5x2e69VuyGbnixb4VqWYFrbx9ghn7ooZ7iZpUUg4G4gaAXk5",
  "key31": "4xuBp1yfeytaHbBnCv9XYvHxqBzCsFQUeFqGzQYNmwXwEaJwExY3kGvSTzcMLYZJsWiFWnaHEe8rNpXs9Q545sNT",
  "key32": "Cf8EnkRBjjqKVuR75fMvugvpjT6zibRNxv2345kfWF6a3x3c85rrnDkE6gQ2kU9iEs4uw8PJewjih2h63nEmJTm",
  "key33": "4zUtY9SkQMR3DkdMEJebaGJDoA7XL9BmtGdHcwSaNULQzkfW8yCH1eK17XLDiwgtC25iHFf92Qu59c9UeVeMFaPb",
  "key34": "2m5FbeV9ztG5oLAQ82SQFoYc8TvmHxcbSVU8n9THHYDYfMGtFrNeRK4xrTjvV3BW7gp8rS8zoW1PWA9cKwqQUbrw",
  "key35": "5v8NwzwHZjRmjT74zXKJKRQURxkniYzEVoYkMMMQ4T2kf5WfDUkNe3B1ncfSsXN3cf4Cm6msidN8Vkxfh7aH9QvQ",
  "key36": "4s5xpqfBhxCuagFewas13aCcfNq75F1RNT8Csr9vZAqsGdFaB2FDmyBnQDAUyw5gjLd9b6LtAehMows4cG7fMCwh",
  "key37": "2MiP3CGXZHcCVf2TDuHPJhkZDzCYqfrTSMMFsSgWoxF3UQ78884ozXt2npMizDZSkWs2vqSC9jHhytFoS9cZeBwE",
  "key38": "RzP1CLEE47R9m45yDKRW493tbBW4dWBNCKeRo3apNzZyyoszA6TN7FHpeHZpCcMcLhJBdCNku85XFoF2d9JcLMd",
  "key39": "5yvv9s6mip4C2qXzaPcUXcxQ6gjB1pj32WBteeJwB6rWyPngPza3cqg6dBKHf2jbRGPJkP63VdN71hoH6KuBAm8P",
  "key40": "2sqMJX2LijSrao5mzCQbx4yPZsCKaBWp4vPHJieX1NDetxMvRtzEBfATEWQJetMGDjReR4KZ9u3ZT6ovGSdsrEG9",
  "key41": "4WZRHvRLbbVPvhfQ7LzQTsNoW7qKty8mCBwwKJbu1zGvagVh9P5m9J3KEvdjrZ9wUm8EeAvg2HKPBqWQGeH5ApNc",
  "key42": "3NqVR6AaxuV9bSB3PS6y2hfCgEw9VWEPJXVvzTpGAqPAWhG8JcpgyWeMqf6G9nxzAYc7iRRYt9X3frpAbA6FWWdx",
  "key43": "2W2hj7fUy1hWNAxnTqpT5qddegYb6NcM4a4SfY4WrFrJVTZrSBJ8V9uehdB1ziarevW4iMkMkqiktMHC8JrsDfGE",
  "key44": "2ryBqWGRo97WvoFvaEzgMySV7dw1MLY9RGcazqFYHZxujaH1V8eWiV3DiJfpwLBfJtHvG5hfXwHviobksa3x7pMu",
  "key45": "3NM7ZBomnqMBAbojVvrgWVeWVN9BavJhY7EHHMM5SbSEVzsadPMhpAQQAbh2MhCo6CLwtqwGaSmfrCtcw9eYnaGJ"
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
