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
    "g4uYVGA6S86U3ge3JZqNwa3VMVFS5WGgsY31NxiTnERPTc7QcaHsZoxbTAn57k7B546ZFSk6wxr6gSMHoKjKCJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sgYYk5xuFHA4c55GGPJeVT3VFmZE7sKHVGbU8Zwratm1AKRPYHghQU4jsydg8HgxvumZva4PooHpxFNyFaSYP5f",
  "key1": "4yfHS5xZUmumwRHEsfASaz3xNdXa48ZMeaWcwvqjJXqXwh28zLVvmLMA9sXDq7wHMnacwfB6PxHKCRxTy28EFWUh",
  "key2": "CLEoyD4sqgDGghFMgh5PonktDSuTB9zCY2f9GK9tyeEpWnrhPTvyhqHRcHBkvuBfp5hV6b3Mh1LQW8z8ZH9495H",
  "key3": "5iqs9ErZDk4WWgPA8dGaAJhVySvCzYLjuoaKy4LMYQvJjLdZxQ1Y5JSxpi4aF4ZwpcDB1AjjXdgNNZ18XVP4Z6Xf",
  "key4": "4ZdiPUPahgcYQaaBJ1SdQ94FSA2q2w1XT42bTwpprWXDbUdiibAt6NFw9WWpnnXvHBDJrWKnRGxEUMW7LdfWxF9x",
  "key5": "3h2X8gi5PR29fdpTkq3qR2Vy5S9YappNDCBHbugdBj64Zvj1HZMHk4FrhqE1G71w4PUKYv5UA9WFnNEq9YP488x",
  "key6": "35W9r4dQq8zs9ZWphYWHkEupjvBVWsDEJnwmvx3Er4zv7KSkRK43NCCerZ82a3XELAAKP56abrc6Vxx6o64Wb7dm",
  "key7": "5jLfYK4mmCBDNncP3MrefXezFPKGVX8vPLDbW3EFAhd1fHEe37uMn3EEUMoGeZ6rFuiARmFumgbwpt24W8BrAqpZ",
  "key8": "3oTNosStroJrfRMwjuojSU9bhksDu8P38an96eN8vZRjWzsV5yyUy5VxWcMZ3rYELMC7eg58JadfXJKiShsvwKiH",
  "key9": "5mFXVLoRjUXT1JHd73sMp22EMzWsb8tr3i4D5nXJUvperi6QDArjGB1WNwMvEcFGFE34hWkuMuAUb4XDQeDj3hpV",
  "key10": "5ToexLpiKZ7JFVxyEW7TrF2NZGw1baQSv2Ym8K6Z824f1ZyzUWBZEm7t2Gf3Bn4AXAFc7qG83QkKwggxPZDJAaJm",
  "key11": "5JpkKfpNXTSeJS6yAtpjmDPFciGbFxqoEPRdsp2ouanrYuj9i7hei4vjmBKrs8zNKQ7Sg83hxtzsRgVmJHtVcewK",
  "key12": "3uz12QRMw4M4Ae5d4p8u2ChLxUH625LkRXFafwnpZL2YJ5cvcnb8V3ybTZF8xbN2rt3kYwgQcNwaJw5mSHYTGBSm",
  "key13": "1KgLbESi6ENVrW75iKiZYrrBM8Z9B77pqFzZpRr34GLG5ob1EsddoWLouyLLEGWmWih9oRPoqsSHnt8rHtpnyQw",
  "key14": "2YKwTGmzZ5KXQjQrgzydhRnxg9PZCmNpnaJfREe6ak2nscwSJkUreCrJVWTxrGbUmUTrbG3oHjar9RtSf3tsKdxx",
  "key15": "3C9G97twvzMnT9YX7j6akAMbQoD3Pfni6zs1pj1HPVmJw8cWAbvZv3gQt1qy9BhVuHBbAumZW8x1BEEsStF8PPs4",
  "key16": "4d8zbLWzge2o1dsXwWtUz4j8UEtVxMsokA6QLGKgSocL3kMbi6qpQPBVJNpJjkQGCuaBvwroJW3hzYmr4YKEajwy",
  "key17": "2xbhFNc1pEqN3Edd3kN4TvuVNBCXYXZCiBvoywQ7SH6WXP9L1Jh8sjR951qfFX7D7HtTnZCy1oJjpqxQk9Mz9SP9",
  "key18": "5EKfRk5wS97dr6Kk8PMP3uiEQcjQuujLh1fvfeM4QTU4WdtRyjQqTiirm1oFNapsS5dSQKJfTbCFG25BgDLEkFB",
  "key19": "3vTsam7iWgjaJna1riSp9vCpdxiQnAzxDjvQrpFY1PazJduDj4fMsnCQLB6ggzQSz46w51TdYDubFmYHRCyNUMc4",
  "key20": "4W86VougKpMUgabr6jqVTC4P5knzyiY1cheGyvSbbmhyLjDQkUx8w6Jr8s8HbecXgXzTELns7RQoU3B2Dkw1Eaq2",
  "key21": "2JJ5EdtgWEP7Zs8bCQuij2RrBsVDxTMCgwrQFEDUJbFVAC58dKtHHxehvQqb53bBe1jdFEdUG2gwSHnineMPyCU8",
  "key22": "66UPDyvfePrP3esCn69Nv414dXH1wTrZkiKrh4pTa4R4w8pyZYwTTnHNgAKjTZqyvzUbfg7wkWABjLo2QqzGko1R",
  "key23": "3zp9MzsTx1tyBLxpez2j9LQB7Hqd5j5KcaHh8gYL9AyuzkZHdFchByB3MZFwhfdiudDiCtZGKs6pfgWk6BMJnqhg",
  "key24": "2NRXKEKvU6kjjWh1E7ZcPxveh2rujbpjAzTwkd4HKdyH6nrttkY19fcQBwQcR8UiBKMBpLjvspbjXLeZzMhKMpZ2",
  "key25": "5LPt4xRcPjzW6c9QYT8keALsRxxPJpLXkFdygpJmEZH9DVEcriJgACWUDoNQNNY5oUskvSyTFxEkf4nCGwiww9m7",
  "key26": "UKRxFgXSS5VSxy5J8hfccNit8jiSWJpxBwAc62uEYEL7gohMXbMsQpwbZzcyqQN8K71dbRqQEjWne8yM5K6hrnd"
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
