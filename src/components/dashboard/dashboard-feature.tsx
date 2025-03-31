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
    "2vBND7L6i62U1tuEhXje4DjLqx51YkMBYeMhJPkbufPNjyVoP8aTcmo5eyaHWAckFvoXLcCesSKKofp62Zmk8Z7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8CHWqhVq8TX9SWE2KKZZ7RSwExZWccN9LN1oPTnZNwfNirwKFmU9Piw5TkyYPGe49VL9goNZbzhxkMmoL75kkAn",
  "key1": "5Hr6Vw8VoyMTesfa8bJC2AxHJ21DFiT93pBhu5kfPWxBSgjF4ytyb8zFBLrs8sB1SW5UP7eRi7zLUeU8EwReUSug",
  "key2": "3zUNETNwFA4uWfJrHiKDYbBAQcD9UMBmQtYf7V7gX5Q2d7mnV3BKznduGsoyADbVhfNZFXv1bWADhjGZCphkVsv2",
  "key3": "kCZQ5rgTdpTK1doeq1ARB69uB3xRPEFiwCjJLLK8p8iv8T94nc16XW9v15PjMDsyt3kFoeZGGKysWmJmJLHL4RU",
  "key4": "31qc41imQYS6cqe8LdyJHgJas2VDtoRHUyVGL8vzH2UziUxyh9xc4QY7XotXBsWZiwbZU1qFTX1dapYxRsuRZcLB",
  "key5": "2xCEPu3ERXWFTwDKRvjH1wdNVGKTQic7oCoNYwTiuQgEAKspUPzHu5PheGUyNYhFHNc3vLqsdd14dwoiyvkjptBy",
  "key6": "2zWkPD5HvUrKW1cMBEuL5PPuGVJsbtwYwss8gLg76ukWFf1py82oktzPGHLX5hjiTbP32nnjH99umLiK3Nj2VSAR",
  "key7": "2UexWsr9p7cKRw9wDyT1paNDrMYUkj1wTCjiYCGNZ36ue6QMXa7EBC5X4aWUPSvCPdzStreSK41Zf8d1up9btCtB",
  "key8": "4NE53y78FkHv6BYyi6g6BYBoXpircQLu4LUtLSBZGpHZ8CYGNDUAV6w9nzkH5vcc6ij7o1kNsjeZ783uUEfe5mNo",
  "key9": "3YdWpkWKR5x7EdXgHQ5vjVmBA4swQpRezwMLXxvZypTnyqhm2HGUyUzMnHnPEQ6DeFHbvmzWE4LXvjk4sF6dzjjf",
  "key10": "9dW7kdvsvq1xoBsXNAMEQE4BcXAYb8ghucvjxyYU5p5FD9THxL9T5tovQM7dy2kn4W637ezi7ZrG1AqfEL3Lpsy",
  "key11": "2TqGt4wxUhTVtsB5WP87J4ZkL841gFSJtByZgPiAmn6GNB7NgNK11rHWSRuJHZBp1TFLt7Qh7LndZEFpfaH1qbAP",
  "key12": "Bg3fcZSsd6VQsK1dfqYUnTxNb4uxVV3aGyhvW7Ew1S8pM1JQJEphLhvTBPJspcJpU9gNLvT3zDYg2bPUCXvxhdy",
  "key13": "2qjekohawb5uaSFBGT9XRJb5tFdervZz5Hoov9kLbGutbyhYVZSNkvRCfLVFkwHiThX8wjY3rU1wZAFGdQeb8zZw",
  "key14": "3iCQiFE8HNXYZzorzda9EFCyZ9ss2vQNotupfS138FhkDgUTmMgK2mmNTFogC5h2saifR23eSwhgRaKSQyKKGdyr",
  "key15": "4RtZFCguB1mBgsG76rCXjkmNt6QkjDg7fmXeXHywoxLKDU8ho4CzxPasUhrfM1NyH2obfmPaY3azne9mf9VexUDt",
  "key16": "4R2RfmUTrbrMaTgj6cvQfV5k4pMtKTeZFNmoCZvzRrGrZv5XQkpzt23f9KrJU2VbeoTbtF5ZVo1oscgYVyfGpu6P",
  "key17": "4YCqieju99TkyRNhjck5VKLHu3EXH795V4rCk8HTngja4F8VetWNnQhAQwDa2vWsCNXWQ4ADYkauCbmrU6iWcfB9",
  "key18": "3PBdc8nQJwpzwdGcAKohzLTvX4EsRkdL3yU2hPJkhjSmBssr4PCrbcR7zWNAPCmMpwYuzdfZof4q4N8LL7RDfBSj",
  "key19": "2jNaYizu9UfPoGcNq3KzcdZQU25R4j65iHrzYketcE72WZDq5TWeg5hMCuxLPxFc4cBpCER1QuGiGArGoPSL4iPp",
  "key20": "scADX97NtNZFseQ7VxEmGR9vrJzebJ1qB71QE3SwBFAGg2Y1yVu6E9ZyW8ipa3XjtvhSLnj1U4KoMVF95Xzyh7v",
  "key21": "4tTtZQnLawN7FcLtYjcgZi5LttY899phaLUWm6qSH3F5kTpXKPxubMGdVBLQwk6ZsJKvm7RQuoXrbqp6vNdhwY4V",
  "key22": "2NUsYDS1GsYDDjg2nyYjUDYezAAd4c3ht1hxRqdvW1cypF48x2M65RoXUi8Q2KdCTWmDmYGWLPvKaQPBGqhmCfno",
  "key23": "4XQiWXfJ3fy6A46LKGsfnKS4e85QCf7LgPZM9hDhD35sGsdi2gpgnvYjyGcFUSeNk4wAiWv3XDdoxRE4vafsLxD5",
  "key24": "5yuiw6BpcvwZ6gi9nQXtpP9E5LyLCJ6RCtgvVUXMCZpntX7iKqEcj6VHbCCLc2Z6P5jj18qCoRQuUKNW5rirjrsr",
  "key25": "4PFmCXkpVTkCxwVomEZ8hNTWQDvwCXe4YFDjk4i48uoBJmYzASPandG9YTtFiDARErPg5Xqd18u7WtD4ikuCyftY",
  "key26": "5rF3qXkwgXrRccxcKXGbgQwDC1WA9hpj3sGrVoVjwGMifAymGnBb8bGByWsgexA3aP1CYg9LwVgi7XAqr5wk9rGY",
  "key27": "4CEvS1tV8ad6VM8KwjnZQNeCKixRMYCfWVyZYunnGd6ErPjvBrtb6neUZAXKyqiUQxpVjeTXJYRyAUtjGzmgnWEp",
  "key28": "4tLnHHysoJbqRyUYuAnAtqCKyNPzUxrxY9bnKwkPqSQeSEhXbfr8U9cbWG1PhDAbWmq8CwwfyZsBsLuvaJFvqipB",
  "key29": "5huDfspHusZtLgAMrwGXb57jiEZDmi71WYyZcBpJATsFpMyg3RnpzZT2h5h9iz2aMaYcUD9M6xcSJJJ394o7Ztbg"
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
