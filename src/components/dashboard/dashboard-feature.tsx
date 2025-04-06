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
    "27NyfzaAUZp7wGNRMXsnU3HbKinRQ9QAc3HwEurk8mPYXedsh1DLBGy395npj6hZz1n4tJx8eC8tcws96A4LbP9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33R2LJwLK1riBEbViS1MaV21HbsawayYimoNjxATSd36m4dJxLxdL7SLua39EgaFGgNM6fiHLKzoZLtm6EKtm7pG",
  "key1": "2XKembUEgVMNgcRLe5mfxJEModejvPLnScsSERAURpXYHQCWYPtKs3veAW7sFk2N2dEtBwM996pU2cxNSSeERN44",
  "key2": "4H4hGE39XfFo7a9fhUq9BFwUcEF2TNyYU2ioAmbRD7ZKL5cZAyYb5URzATgZpi43FExpzWYJZvLEH5SG9s2x9ePD",
  "key3": "4iwrYcENny6bfN1WPxS9SAPxQ3qM6ibCSKCNDiJfmGGe9fW3avbr9xoiPC3mHPXpo58hrbmkbogaucfW8EYJo4Nz",
  "key4": "64boWz2d3VJBV8BRS61UR1HM4MSFBEsbnQUGbPMDck4Ew374ouRjkNwQ4VwQDReQWvGHimqmX8NxUCom6jhR5QFE",
  "key5": "5YzYstfhe2SeGZLU8DFB7ZuAhYX7PkjrvL4gDD91tUFPg64qdiL2qkfURvNhf8gEibTJdQL29aWBf1uHWiRarTmC",
  "key6": "5J4zMf1JzFSuc6Tvxb26Qc6awDASbdufVZ8PcXv2KxtbQyCZjpggeyy6SajxXGx8PPoc8RSsJ7hQ49bisbxqhVNC",
  "key7": "VnMm8QCfXtThkAQ2eG63DUsV9LNNpvNXNZsSC6kpbiMXugq6hxWCYNaZz4t6HcRyyURmcSz3mHJ9ucZ2Cq3RqKC",
  "key8": "5aPW3fi4xWmp4jNsnBroLEXq9XMXog3Re276UWp7D7VTRkjFKWFQ9vA53VfADsBNG931xxx98o2BRqMDqfGdye4j",
  "key9": "3MxaCuWFDWuPH1vgs8wgn3g5FvjUgACuUJZ6b4xKqTo4Sb9PiBWKvnJ73GVCLqvgej76z4QDgnXE672uE3X2DC3L",
  "key10": "3zv524ns764Mn5PCdPBc3snQ2zJyPTYJtd1YznLWiJBqvtQjdeTLFKdDqeWEFmzE4xsVzvgwyx84wDNB252J5Vh2",
  "key11": "35Smp6LPoanxvNuuBUXpmQv1nEps7ALZi3wQasdPoKT9N6em2hu2SoLsPbDLch9zwFgfcWdEEGjAdXT57LmyEFbm",
  "key12": "4N2FygJeN8xpfdLXXpVuUeqJfKudP6TjPXjfzPBPWHa7DFVu4EAWfAjhu8yhDZM21mqPYFca2jbUkR4jaaP4MQM6",
  "key13": "2kmSAf1qYwncj3qwHvCtZN9XaQccVma8v8JFvqLAYWJMwEgKVWSRTNpNPKDrtH6JaETQ1qVuhjLoe75RmJB26wZo",
  "key14": "3P9Ndf3FQv4bxNx54G8GoGbaT9rawMYbh1RLtP9zVDN4sHdb7LfjxU2GKXYWYy1SEZdxWrGjLuJpAzZsDP33LqvP",
  "key15": "5bJ7eq8fpjPFa1C38H55Kp9BWPdWgWENThj8hdb8AMrNKq6P8J6H22X9UDaBtCwX3rUjVwyAAyWrgKvLFj7iJEC9",
  "key16": "4YRmAQzdJ1iDoYJ1fahtsW8jq2SvWd4iMcJPwyxc4eGhQwhPPsbC6a66ZJCtpwDjbfKgVUvJt2fBYThaiUpnfpPG",
  "key17": "3SLru68wn9XuRWphZoNvmfXcN9CKh3op9gbAJqAkusx9LXRXhEe4XC6BsU1nV5uEKLFo8ZqWrymzsFcBwN86K5JL",
  "key18": "2YP1tkNKHdjKo1hDqpBKHZXXRr2PrP2j6Yzfg7iTiSG5jhwxm6SqPXNt8QdBcamTH7qgoCLkfUK3xHL438nzKcgE",
  "key19": "YsiDa5Beijcj43E6DgMX49YQjt1RqfmrVu4zmm3XPkabLt9B4rKfqCqZzV3ARjxe6M2PkAJM1TvFNx5ToehUYW2",
  "key20": "53AkoVreNgZkZ26vjbpzRpiUWMRGFhP7wGEEfLemPfFH2SH9DT7Avq5HM17EcxcqxewPLR2c4UB9D4zGcb4aCPyU",
  "key21": "5WDFgNVUEK9NdU3w8JquH6YA6rhX8qnAs26eppjJvbwJ7NhKAes6maVyrF3mP544d8KfRuchXu1o9nt5u1EQjjsP",
  "key22": "3quPNRLtMg69SZd6HLyYD5JAgooofAMHvdaqTuU7SnGcEVGpkHKyrUJe4uz4rwCbbc8qH9bAcwq19ZBjxJ8hJdZP",
  "key23": "4pYmH1S7oXbeemmFKUunMw9cGVfRFzpH5SPGS4FsFc46Db2F8wv16JsosiqTCBHvWU5wEcvM1UZqEsDsSGGtdokN",
  "key24": "5U2yUQppGNmjHoDZxrKGmnfNrJ2pJBrwJDyD7YD3gvw4sjoKMpY48RimMBSTvtQUD6gsk37BPco3RdfBZZwXJ2f9",
  "key25": "3k9mCWFshkCNjr4CD7zYUHYrq8ngbh8wNv7F2NH22JYZkrVxtn3FAj6XDBkPQ5B7eRd1jigxNmjZQJfXLXnFK6bX",
  "key26": "5XvcuqjkgQAUAxBxUjtsUXMda4Cz39xCUbvCkL1HZWNuMKk1LaVqi4R35BTvgC4phWgVYa4imqUouBheohodvZGc",
  "key27": "2rzaawPsXSoJGpVS3ZsnX88SsiMZsdMKVmLegSaoVQhjpDWvUfpB6ZoL5BAmJJo8rNShvmzjr2HaVVqSfMqJKXHZ",
  "key28": "3Nq1XRUUFGXFvdv596poLavW9zSySZ4NGLuLxvNkaM2khfB4GUEbHGxieHMD1VeAiebJsttqfkQ5eNGtsLqFAW3q",
  "key29": "4ofuNEDhtVPjSvQGUqXNFQsKg9C6rB42tD5bsJwqaKwd2oL9tp3Aa1Qo2SiPhPqwbApNhFFRMMoTGPCPTLqp1UfQ",
  "key30": "2W3YuZSec9EKSNSaCid466wHY5NTMNn2qGJvQbp74Fj9nrrQqTwHAB3Wd5SvwoZS873BFQqhvkJo8ThqYL82ekSF",
  "key31": "56f2h78kpa6U5dgyjKgrhBDTaiGHbjaqUoV2WKNVKvG5S3ivUvzLqqdqnU5ZcaAUCKxw5soKVyihGEvZJJCt2cMw",
  "key32": "35DMHEPRfS6JhvjoGC5aMjpxdVzKfoejqnpoG93KyZQmaWS1U5Szgodk1G982oCxYfEEr1CzQqqqbjjcGWht2jsy"
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
