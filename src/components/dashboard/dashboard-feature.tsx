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
    "3Ax2mFXR7zZJTHjxy1bzs6CnN3JXyUUhwa87tm795AEMaNXV7VHxazEqox7Xo2STfj7wpwveW8Stcm6G8aj4C45H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLz9gpioKNT9D37gFxx7Cveq863JzAAbKPthbusTvwcHjtAPb3FjvuYYpeC41gczUAkqbWgNTCHGWMheHsAiJgd",
  "key1": "3VjPnxzKtnzGxQnZKkjTg9EPHBGnYpbFrUNQ1LsniqbSaHfYp8WjPifDtqxRZFxwWC6ZAqinzwUzv4g1Q26J4Dxn",
  "key2": "3qGk61Agdq3XuApVomLAQCUA5ma9Vb53YjnveCZC7zZRhvbQFco9NiGbm6gtDAaZNTfbkXNgt52bR3eU5z1Anbbw",
  "key3": "4ivyUQZPdLtZzMkqn19PuWzPf7pqxb7fabc3j4QWa9AuNcronF6sZki1eJtLhLjQoQtTrs2rCqExQyWForQQcREY",
  "key4": "V2BAPdEB9fUzhDhkWuU8qukJjzshyFhKoBwj5Em5H7xaQs9sScptNJjnLEJp57fErjHZz8gjF3kLYinu9PmQYm7",
  "key5": "46fvKRo4VaEKJ8RgDFbt4xUtGHhYMJBJb4sWmSbETDhKrChwqekF75evth3d8tLzaAkosKnUbBB1qQ4uSWRnLehp",
  "key6": "395nirUu4aW6redMQL7nz7CFFgtLSV5yb69jd5H227yMQJC798zjCWWGCFtXQsxGMhS2T8Wv9z2Bb3kS3X9S8B1o",
  "key7": "3xxqM33HLfFTQRg3MtH86ETbsVV5V1rEXgxur2xBvWEWJmn5u8hXbaoxsDaMAGxkSyYhCFuNh6kUvNuMAhir193c",
  "key8": "dS6cPdUFDxw9uTGXTPczrhxM65z9hKCjVeZeCRdjK86zEP5HqWn4x844yxJhY3WoDDrcq5GXdqxRWMagjgEf5jP",
  "key9": "4vXH3eu69AufU2THYu69omGDyBipLizb7taArATY8q6JCAaS1jXtpYbbydMSs11zirwgDw74GXn5yGAm41n3Atjf",
  "key10": "4g2FspomwFvXr6bmwZ8xonE2tsrcEP3ECackTDPVFWU6BDBJMBYkXd9jw1hMxVsiLHrDeeGDhcV6BF9sWVs7snP2",
  "key11": "7FEfhW3Uf2QbF8QC4jpGuzQN2Dd79LkpsBzSBH877tUJ6EMSBvqcV9QpKZM82XBimSSrRF17DZbzRHN4dtthq6g",
  "key12": "5994f656GLDmgGB5twTiN9v2DhWYCoYBWp8JSm4M7sb7GPLqMdGQo9Gg419D1UJgpDXyJMuUvUENCzoxxZVn6Jd1",
  "key13": "3ZpcipXuUWtGoiXqmbwuaSQ7bo8LNL3Y3wNUQUKiyP2MxzteEhedePoa5VgCsLLF2yQPXHxk751yKmWTd7R1hSt2",
  "key14": "5tUag3mdAFQz4BhJWhmZ352qaeXgfVJwfDqECpwyTUMjPPR76oP8i5AX326zroY79VeWM4DVyA2kXFcvmN7szHsv",
  "key15": "2p2ak37GVChkPhXdWbH2Ga3MvEtQ6kEVpeZawqwqpMTj6MB6AWRWL4eJWrLvj1bPkk2U3MhrNJpDMLMCPuSpSje8",
  "key16": "2GRHDxnV5ZQjUbuJTJDLmso1Yc1CNMq6QVhh3T27KLVCcdmuicyqRgVtwKGJxvJMULhoTvsGUpZEGLfrqg4Dyjxu",
  "key17": "cUkWsHx7j4TyiYtMN217nPMKdU2FHPaaHhnQqu84a2D8FB1q8M5Sz5gvJWgJTunX9SHm6hsRqk66bbeXwdFAyUd",
  "key18": "3TabrwxA1aXGRNd9PEqtxtb4vxADnW4zMn7qAPvHCk9NBXLxpNU3GTSQwFfdPtDLy3MP4ksvja5DsSfJAVsBtKtu",
  "key19": "2xz3svfkgmeJkCKKCWNTWeNK3Q54sR9BnCjw3eNFQA63CG8f2fkm6ukhbYyCPvxWdLBNDU1fx8EMZuwQhJyaVWkn",
  "key20": "2wZAxwpDNUDzCjKkChPnRCv6aWDvxUHMUbcB1nDoRnq6cFHNGVQLHQBXj1CFb9NWU7MCFoNDwHczEkcmUxfEhMU5",
  "key21": "4ZGtmRgWTxQcUvQV27oVzbkCe8HW696QDjBXmwfgGLQZ6rhNEJQp5BatXrF2JHvbaohjL7Z9XdFGXYcLB2xqz5vA",
  "key22": "2SwfC4LFJrEmc6JyyCSYsdudzekYhzsHw4kSVNwLJtyw3yNsTtqGPZb3uMY4pWdfaQgqPZjKCCbH9v7mMbVBuGqH",
  "key23": "4inHeAibEN31JpG6EPejpLWgEESnFJJyQkoqFMRfu7RworYxdVdfS1thz42u3NVSGtZDDaroroEgGA6tK9bPdjvW",
  "key24": "4hvrwJc7zo4guif3AFJGF1E7rXd3yiJMPaJcw1WzEmWNGSRypwFGfssR4UHs1iAhTta6DXwrhoY33XqBoctLLZYe",
  "key25": "31UCnwdWG3h9LwpNZLsGKE34QjUU2BgQ5T5Voj6GkUjtgiynWGkNVZ4SwwgDXoZYyt361UpubUnvcejEyE2nmZrm",
  "key26": "X6sU4oQKtWNCsUeBAiNxhJdjPxHUsGtVfcx8oQvxHaWCbhzVxN9XDX1C4ZzRaZFwfzix9C3wcxPT3gK9CVzi4uk",
  "key27": "67rM5j6qwA5sSCTK1D83FEMc1kT3Kn6VJL63GeZNNqFw5fVsGVRbWfHtoQoY3wxaMMTeGZ7UxfxJs4w34sNJXVtz",
  "key28": "2WCQ5qe2m5sm127PEs6VUGTrjSwxebUzDiTYWg9nJdYGUULSkT9F6K6fBoWhq6w4oTH9zFYaETWPWVN1Brj93DNn",
  "key29": "3sVLAGG4RdscpgVQzPAojcQk7iCTbUX4hSytdXCm7G4rW4Q5z3Dxr9CQxGFivixBj635XTwieLDMs1am9prfksjr",
  "key30": "4CZdwPLV1DLRdn4p9GTESei5R7sQvg3Ms3GHrsi18ocYjBJw6KmvHyqoWCdFEhFafF7zHVQ7f7h3gXHPtq5cHPB4",
  "key31": "65pVj3RVfS4cQm3rn9jHNAEjwpmtTvsKV8yFJH8nrNy1TQVnd3tSo8gWJYdwKAQQ4JAUnA27wMuQWDyZSmzM1PGV"
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
