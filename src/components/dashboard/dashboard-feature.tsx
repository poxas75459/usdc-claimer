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
    "4XnuFYJQ7XA5c8fsxWbmkmMR2zeq6jwsE3WJiNuMn558jYHcQvW4qdQptYeEGuKSWEJ5Vu6mp8whyycWo8P4NLWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xwbpabmBuMvoKRRxH1XhVCLy1GovMRt465jPUFHLrFN36423i5DxQxmQZSPeiFhh71rSEPXchKmH1aajpxWEY6a",
  "key1": "tYk2zkJTuyci3JYjxVRsVZzoR5qvgFRpEbikSgnvxP1y5jW4xPX5G4W27xhWBwoveCDFpf4sCVFztiivLGQiMv5",
  "key2": "VHVusZepK2JkicL6FUG8tXjrVBoR7joxmm6Xzxj51KkWyTgZbef5iCrM6UWZeLxXdaNmzrnSokMp39o92K2dfGe",
  "key3": "47PG3LtZxNdJoZ3Si8HB237n3XMNkRiWaqGM9tpzu8Cp15DgfVUjR6DVebP36dVDLJHejyZK2BrY4rtFTdwQjMGR",
  "key4": "56rPLvQjaMp86RGqLCZ7y7NFZuNvBhaBSUJgqBsbQGnDXuXyXyb6azpD16BLKtPvkGYzfubPCxWmU5yjfsdMjYrA",
  "key5": "5Z6BrqUVQGnqbMLtXnV6gczmpT2psq2BmtkQZtp6VB9beEgLvvL68zjJL3W42ovLEpp3huaSgRmtvDQaVxXwXE42",
  "key6": "1Mm11f3HVuEMWokpx5fDuDMnTW1r9hqyDQEm2vVaDvkgqNEaWqaBzUo1GQrPG9XGX4GMUneM7PGxgwxTeSme3WP",
  "key7": "5vQuS9XGsupHj5tjwcAXhHibdDdB9NDBiqhWGNB1fPCGQueWC6px48PajMCJvwZyDkdS6edTWbPBE91o33CFei6M",
  "key8": "5C5cAw2hDpDLG5vMjRvwtoJsu38cx4vcLX9buFAgjk7n8DekcypQBNshc3h5XX4xoFXc9QTftak9mqX11DKhoPts",
  "key9": "5zeqLA6VvnEU9KHxJoDLZkFZuenTmDeWKuktvbCahzKMfU4mHDid6HJ6VdhQZBupjqtxjow9QkWPPfheRWbo2gdm",
  "key10": "4uCKAGrTDBfacMuZszT99qAC2pZ8zCKRccBWfJd4CfnP9rGscaVXLRiT4Mnt7e7MgL9W9MD7fcS5fSHEDkreJF68",
  "key11": "59dAkyF72mHRo8tAkqiPfPRaqkFfhJsXZYSJqq92s1NWQ3BmCC7kWvRKso3LrCkyZ2Ay9bvULgutw78XtLVbeGr5",
  "key12": "5s5z7wdoRcULjai94FguCg2x6ZbmtMdwaNVrP6N3qYwftwXYp4UXBwxNu2bxdQBpeZVG1Bc3PznRBhoXpzcX5YVG",
  "key13": "3d4HPVV5g5xUY2hCkoS7VvcUcZStTHa3wq46AVgQeg7S7oVGD8w4617GSZ3GZ36Jpu8bJd5rYGXEZgTrnNgUfYAS",
  "key14": "5xTNAjBmYBDk4VzeHH3QfEkb5s6MUzprH7LioUhbpdb5WrB2rYBiEHEfiLd6i431joebfrEdMjQSJayXkrgdHygk",
  "key15": "4XgXsxXG8yM8KVf63tHW22B3BhidZS9x7bnxUUGkP7v5yXC8iiitwpzmpyhyaRuUecu67Q7rSgyWaEjrBwKMvHmL",
  "key16": "2cPhgt7nx4NaZPPTEn5Pfnx9TUTX75gGqE1BHr9BDcdDweadwxdTeL5NVhPpLfaL2U28bBnmTDw84jgd7wbEiapr",
  "key17": "38MxUegsJavBa4TV2nTsBtGQ5PjgavULP1cetVLR8hciBYTAwff1EmtqhzYN25oQw2D8cA9NjVzvuVtWp566LYtm",
  "key18": "4pRtGMiLEBcf3m6ByM5F5c9hGf4YJ6iUkG7M9TfxpnnRVxszrVfUT98UeRy8CyrkDFpyDJ3toUaFiS9PoaNAXmkd",
  "key19": "2asjixhSRG34rD2DeE3cEvZZH9a5oSxhUEYvTDF7pQyYHU2x39ZseFjjwFrvGXsxtadcdFTN96ZCngsCaRFb78sw",
  "key20": "4bc5hXgtm9vf1sgVmBDYVpyiUpe1dScgxLeeSo8VZVDYRqFYuoL2QERrcypMvzV49PVDRppz82hr7Jo3ha9MGBsr",
  "key21": "Vuswm7cSf7QsH5JgzNLSMqNbaZHyNFqBTD1To85PQPYFKoqXYDhAHmUhdSPbnG4hpyNP2JPpLKD5oftsJRmGq3T",
  "key22": "2kRYkSRNvu2E6KY1jBGePQocksY5aLSF7pAvpXh8hyHdyjD5WVJ6NkeviCLMWbAMUWLvWNe77zrbsoqcRQ6baCzV",
  "key23": "2JRcHB7NsWNyq18S34Bb2MzjoYJDQa5nMThjynYLHU5UxANQWCZZ81E27mV7GtApor7ZbWsDgizAeRnpwEpBhtgo",
  "key24": "2QCc8BD4r7eeaeGKSBqfkWLpQT5nc8oYGeJA97gNHppF9DGYGwnf9Mi7dXfwxGYCyjDE4dautXwwoAXNDqu19voZ",
  "key25": "353FCF856AEF6jri6WTyENvHSkk19CTghV5a1xGFScLfxZc8pCoJq6RpjLyZ2zjj8UAdYPtiFQxGjGL7w2R9fMVW",
  "key26": "7yqvjwsoaiKu72xAgFsbU122gj3LPM2PZ6Z9qQNhfeL41gSPbGjJttGCrF7gRrVQhJjDFE9b2Payf9EmEVLfWNe",
  "key27": "2UKqN9mgtn5EbeYXXXhVPq4FsGqg3V9UryoYEvwCbEbVtgaCo7dEMFr28CQH6TFmG7aeNNrbGAQ1qHmLoVVP5MUh",
  "key28": "5qovYRnA6AZwkK75qvzMEdTjRdmbUW5wfaHCsxaXxeeBWAMyYnzWscXTK4YoV8jW5wYwBJvQF2qV8P5tQracyJG2",
  "key29": "qjCCyqrm4TcDHyZBQU62Hj5QmAHG861EBTVX17TRkwne31PKcwkNtz1T7NzTbfs1sfBHNUPf6SUMxFJx8rXBLHY",
  "key30": "22orTT839SCQU6wq7h5JpwBs8AphLo47HXHv7G5MM4twyUaGnvsvm2zXS5iYhECcobVSjCYhLoLH4F2e3ZiP4CSS",
  "key31": "2MJnTTrjhzHe6jrUUqaaBM321JFJbktL9MeCcL51gTsXqqUZ3xUEFzHVkiMiip4LqwE9t8KntyC7J25EAsQSXFRM",
  "key32": "39HSUWwtBTbZY5e5FgpseWhHqhkc1eJfqUkzMDHhmv6W4ES32zaYzmgxNGCsHgFjcmEBKgp4KpV6TYsYs3jSWRZZ",
  "key33": "5T6S1ZY916gjZ6APaEbiJZatZrE5w1W4nHnm1Z4uUyDb5KYsFUScNQ3NMonEHvrfvBwwsFSLJzuPPrGMzjBa6PJe",
  "key34": "37bHZKGaYFrPUdqzJt1RZhfc5RV9J3jQeEsVn89xCkWFfSGk14ontR9roa4hEcTEW6u3Hy3N4mghR4R4WoMEkrJH"
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
