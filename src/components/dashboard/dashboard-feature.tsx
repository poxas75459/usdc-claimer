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
    "5dKmKfhEHzqGLE3xqxfFuR1chBiANgEAqU6kKh8FUrpmjHJnhPjAXSf8FRXWR2kTNqgi8W4PnyVznwEHZAneFsfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hLZs9Psiw5u5QkaJDqWGoRekVMigPufztRB14HwQxzNpx6DrrtVJ4Z3MEhu9wpt2HggBiHrtKpU2MH9UyT3euEY",
  "key1": "YRpHC627jbeLRy3vJ85ZRhnf58ojh1xVwv4HdfXrwSGHKctow4eqsfuC8rzHMi1bKCWwPckFLtkgUJJx41RRpfr",
  "key2": "5wh6BXkmAswEy9FyKGoha2FqcNFawt3ySpctnw84zWMt7vCghSX5ni2UrFEqxvw4A52cmQvxExX4kqLPvB6dtEdV",
  "key3": "wUawkkKEYKsTFEtm5mJ2LbkNoztYwhkKsdUnfi9KibN384oxPi1LEh24xuT6YyJvcbSLJZqaJcM5E9oaWUVKTMW",
  "key4": "5bkqR1hGt7ZKsukbQG2R3Ecd9VyT9q1hk2vhGrVB7PBSVF9HtSY9PGYyhWtxd9obivYeDUXRW3smxNbFj4k56Bhc",
  "key5": "228qGbgYivTGoPQx3znDMsReYesyCMMspnBWi4QAd7XvWYBremPbLP6ASCNr6Z9oGJLZxt6AnLbzNfm8gVBHTmSC",
  "key6": "4strichuVizoZKQ3fWVE2uNtQC5Qpg7PAevTk6P6Pq12Y6W73JgK9NmmLqhCWzReJJkX8PLLk7Act859JevwCwq1",
  "key7": "Ah3wbRk5kD6QH7u1tEQNBhxk721hrAd3HdNS7qwd1KEQ6hyZ3CVFX84hNVwPrh7Gx6tAS43vtEBYh9CtXChNBdE",
  "key8": "H1YAop8uy45mRc9oYeVR7yrD4ZYJGjeQEGy2H3576EpWY1LrKove2jtyf1z81QBoD2z8pCQS5VzKur8qJ1zFjhn",
  "key9": "2QpHLYpNJFpb4hVnCdB6j38Qj7coQnfT3pASDFCf4TrDdnqgxYy7NgR91wii8arh1SighFjj5nz26GxgpU5EGu5Q",
  "key10": "3omF6Rse8EvAs49pHgB2skcwpabnanuVYsCp8xnS7tnzaxcyZLMyBpim8S71aQLQtnQJNpEoth2UEXgDFErPLbcY",
  "key11": "6682NL2WJfb9KErm99Le6xSirNFG1haNzrnLvAk4CNsMhGFzjhvHDZzNo4WSv3r1gacmtkopFRa9C2DKi7NoSxLs",
  "key12": "Qg9ePEjaeeTpd72GT9fk4UKaatDk41sHVi1SsPFQrEkhTAf8Ss6QEjAmevUwBLAcCsP4m5TJcmViya5RHmtpJzp",
  "key13": "4H1yEuV1FNPyEu85XEwE9PrkJg1KuXTV4Ra66UGsXwmqruQ17bZdZYjQjqF9i5cYLitzFsBUp5KNCbpPSVeL1oAZ",
  "key14": "2nSGWRgZbfXzcuyAmAPLN8LhEFDqmwzBuy5vw5z8SFgSysmAkVdTYWTLcmjgLcPdBviSACf7BsNNQ4yAnjJCiQtg",
  "key15": "2Ncjn4kozKeTCDUb4CkePRiJHHBLgyrbAMUHh9SHNVfGmBZLi9WXU6ozsinLVq3FG6bTT66juQwS3mfnZKTZzvqZ",
  "key16": "2AyqqEQzMH8WYLVqSRx8eLpiqcP6hxKx2wsvXLLjfSJu9jvq8KKDiVYb4Bfje9nrHXD4HdxNDizv1nxDjziWQs6S",
  "key17": "66rmhtzZ2SE8HsJiXeyUtneLhUG7yYhPoHMKtjxYfsLSTN47aYSttorRhzKXegoNzBFZM3bJh2aUFJbMyNuF9ZP9",
  "key18": "2QGdHDqCeLS9oeYa4Bpro6Nn8NZWsMdcbefVjgcFV1GqYcwPJFWWaLAwsbLg8nj4G2hmE2Qcy3VMipMWKeZcNoAC",
  "key19": "4afCxECk4A11uRbBSkaEsoEZbeR6Gq1Gvq7AtxgYthAXvLmmEJvMJ1bxFELNkzkRANrAsa9ubF88C8HBLzx8DfEi",
  "key20": "m764dm2XWrwtE8XnSsQbUXEZhePPzMFkSnafNiQbGY7NdGgfVDtJk9w2LyPaWawcTE6EJAnYN9Uq593CZ2sN8dE",
  "key21": "2QCoL5GbhqqpoKdSAh5ztKHmWxGFy6twzY3xZKeCzLAP4grzMFZq4EVYYGzzeyuiaYRf3cJghR78nc9kVhevrwA7",
  "key22": "2RC5pxDtAKEuhid8c1HEvbcA8oGTXDQYRLTFHFj1RFYjW4QRLL73MuvCNMuJrRhknFNHGKPjfFRfeJ7s2zariEDh",
  "key23": "jm5cXk2a1WE61u2VguyTdsosyTwNQStZZPKgZ9VgBpCVy9MSE7gwxW4mpVrRvbehm6UkpFoAbdbvd3J3Uopd5N6",
  "key24": "ugaoJpxCiWDZW6RSEcdWk7zRdKMuNcF7wY56TMYwBtUcGEDBaA1xTqZonfxfr6kCjBa6Z5qV4Supnkp1B6qgekk",
  "key25": "2KG4PgAtC8pWx8ye5UyxVCLqwejLKKoyJKsvR5GQLYdi2PW5rQbHWPofSSNDupvDNA5R7caHUBh4fNZyeC45qndA",
  "key26": "5zGJKxnS5qZ9WDA5eWXTvEGNRRPoKjZXLnsJkvaeKqdj8fQZnE2TfJYQ6cQELHa1B6HWvyYb184wEgffz1XCgQiP",
  "key27": "2iAU27raTcKThCM5iJr7eXJANwEyKEQudF3uWhMm6QVZ8a9Jwyt6QJQFH7JENCc3oAGj39zsPx6xv3BfZXEqVwFC",
  "key28": "FmxAfr4kQLrv8DLnw2B7bRvwXBRFoPq4mzya9riSyU8uQQjvuNM7y4dfSjWkh653v2bXtAgQiyxEKZyWdEbKZtw",
  "key29": "3xt7FRFexBM6Ze9xnaaqs4cvGPPVt2ZphSHUFoSwVJ9MFAGUdzNK4SQsUbYd3vnd2bUPqnVboGj6sKr4s4LYbFvy",
  "key30": "4p6QHAgy6YN9o4tETju51mJwXK8No5DEjWNB25dhZcERp9ZwWLME6utcRL8QmPEmQBUFKFWqQQurpoGudjko7aPM",
  "key31": "2E2EMZDFj7b7rQakeXXMoxkRRbQ6xUmouWZU4VXywuDBWVayAcguPGNFmyzBohbfqPECxqXcHwUnywyeD1VZ7kmg",
  "key32": "565y4BBYWzMNmunxZLBpzTGnLox2pvfSDz9DiP3eLYdiJ26d9T5ZF5d5cst7V8ihvXjaTEWoakcWjeqhFjati1UD",
  "key33": "32JeawuMBA3e1RhD3x1b28cAbpvcuiGixZXs9RaXTrNTwzXWZdRRbB7VkFErvXoVZbh3wQGaDGfqkQizMWGutpm4",
  "key34": "ounTsZTqy8xgDF9458chsAsPdmg9aURHQu7J5HroWBvR7KiPs5bXDWa7jpfrGWWMGV3whwovgtAvk6hu6k97m6v",
  "key35": "4SJa8ZwEnrV9XeXENJBnz6mUULR5HT4BXPrCZ4q5ursbudbp19btZumauSf48AiZuK16EDRhJUvjjzP51Yd3kqMD",
  "key36": "2uXm63t1dDLezbgapMBnYoT4eNPgJsyAYUVmZAS5YFadyubXebNTyuZJoxvHddFWe2ZaWuYz8VXLCRTXK8jbLqCm",
  "key37": "5DBNPHNNTM1rgsBS1WsvRu8ULPtCsYg54BwqfFgwuGUYNeJJCqRZKsvx9tmWoKjEbMEVZsQVvJzrAu78eTmVMPS2",
  "key38": "2Y7JYsudpzA1dggNgQLV48EWNPcs9NsBNAadw4679kTNRAT6JaYPmJNCTFU1ZghtNa2z2y691URdutEz5vSD4j31",
  "key39": "TJkEpxbQJzjtgxxLPQkcdLYoN91jo8RRMvHLuwuNiaqqFqeQekkFDA5NztyVacbtYoZMmANtTWFzWZyFWnpD8v6",
  "key40": "43xQcX66dummQsMkRJvNH76Gs5idjpj2tBmkiGDXm5FrRysrqXiFy3KeWYSwGnv8pKFHtS1oft6QXNkskZxjFuyv"
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
