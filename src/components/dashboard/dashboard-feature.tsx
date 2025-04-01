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
    "3XG7DPcghZ9aKpGtxuTNSxJ5keTNV9Rbvzpk69Z5ZYy5xLfbPTt1LG6dbYZoN9HbMGMGGqtnv8oXBgminU9mdHf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pbjayq8resQqWLADn6oGz6Jb35mz9uM92ZcNgEWvoqChS2qf9dTVXu5SC9pyiPXrZYzk5JAJpVqAaTbhMwV2ydB",
  "key1": "3msu8EF7rT7PuUsrpi61gFzrwY2iRLUhgGRVcQuUAuWAk29NeC2PjU5guGtQWJunFebsvHSi9QiTHwvz6WsStJX9",
  "key2": "3vhB7tNEN6Mi9sZqHHRqgrTHvu5Z9VeYqffSQ9yfWZhbVU8KoeUJTVeWaK4mT8xuciRu2zWizeTuVvrCKaPaouLN",
  "key3": "51CqwMRg7RZPFLvQReejroAgYPiDZVrFYdaeDqGFKA4sp4XwXHfcsfSQCX17iA8z2BQhVwsZMPLfXDYh8yrYz6w6",
  "key4": "wB5SvbcuQX1a1VP7cCcGs91dZskDaqtAGBJvwiu4subuys6HpzagmiVVMWSWSs69PqfNWVB6Ci5u5Hhyv9dfjmK",
  "key5": "5rcupA8qaD5QpmDYxLSZwAesdwv9ta9ciQaorRAzoeqoTwxFtTx4MB4CEZssoTDDM9LFvgtJuAuX5iEcQxJPMqTv",
  "key6": "3mw9mBKsWjT7yUmFzExj5sCNzQJdkuad6T5muYEMmsC6p3xQqK2tJKer1SpgHpBTGHkRiGC6buTHpg4nJvodZ9md",
  "key7": "3AopTwJWC13eCHZUsHnSYASvQiforYmNAn3j4NVq2WQMJttfXXYTy4ofe9nzTWhUC6NkaBq9CCTnzdD7AsTuX39M",
  "key8": "azpq9ccifxAFhDZ7WRiaLsGyrPjGmpG7f1etNDyhdVEijasvhtqVVdATt3TbMDq2zznepNrgzjVy6MSsD4QDLPL",
  "key9": "W5WMKQDa3ytWVUbtuguCAjg26VoyV2MCtL4aLo7TAHxJUpUbYcwVAQDPmHLUdX811w3hRAXUYyJGe9ACfUadQGv",
  "key10": "5AKypGm8SpTYsj8kCWizkyNvDYx9HPXsezamHUWe7u2DmAQMtfLb73Du2cpKqHRreRpSV611Qm62z2nKmSZYhqsA",
  "key11": "48qBuwnEMSYFui1wRY9LEoUbTWtcPu7QXQYVagRQieaKdVEqteQqrTLSjapnj4vzub6FinRoqC8mrJWbcDPyUoLG",
  "key12": "5ZWnqw1G58hULJRRhWVU3ka7jbJj4t65Zqd2dsftagsB9VX6yAjYqf6r95x2uisum4KiZwGHLAeyinubZdzMwbTS",
  "key13": "jA27NpAiuuxLkKpLZuhqfSeRTB1fXh3QKZmGFn2sVaX9aJ9KkzwRpmCG5QHwx8aUmcDaoeP2LKLLVwZSejTCpCA",
  "key14": "3KPeyQ8GKyYrKXr5yVhDwSTpP7N7oxGbHTBZhCjQZ2DHpiNcFpxzF4TEVa9kcTL6ujWPmTgi8JQodRGgYBL67Wn6",
  "key15": "58DvdNJzaDYvv2Mn5cnsaEc8SXhCqKTqvzjDuDTfMGD8PYCxwp1i64EZh9SLhsQKsZbcUzb3VF3fuub38mRjqyVS",
  "key16": "5jdouvTJS9JY5kyVJeDBwcNpfWFwmABzp97oWRAo3Gy9twLroFfJXEW7fay3rEwYeD3kyGa6XepKYPS9ZaZzByRv",
  "key17": "22bSXqRGF3iZTjRAtACR6jzf4nmBN7ud8rag49wx7riCXQVFjRDh4PHUJHKTF4yAKiyzfAQJkeJAsncqULMhzdxU",
  "key18": "5dWc9pioBfS4h1Tp6rf1vHDsEM14rhZKdB58FbkzbPP9X3mgW46YK4F9LruW3WnyKRZCD1LdZJJcTaZp2zHw6E3v",
  "key19": "3J1pq1cs3UXLPXgkuS794ZfE9T3P89ycXaTsQErYjrK5RXumVDeMDGzuMN4D5YL9NqJ8BwUjv1ouuj46EDy4SLgm",
  "key20": "4toVb1D5As42nKC6CH3TabHt5BvUkraM2JKFTpQvmXfN6CcMfiWAoHKowA5nUZ8qZRYvXUyfddobSp83kRSnD8Uv",
  "key21": "yD18FEbaeJwWi5g76JSDhnt8rNKidGt2EZ9RHMtCoUMbU5dZtUtLW4QtDSXY1BEhhJt8pXREPbejqusTbmy7ee1",
  "key22": "2PCanRGgXsHG36N5Bfzy3dFjGima72vitc4FSDn5acq74cTEACQeJs4ZgEhCEYGcrGJ2nEbi4TmiFAwoeVtwx3e2",
  "key23": "5VJGJZSAvyYCdtyx193n1MSuADPsDrzzE8xpNRmW3JUsc21z3QPyYjAjo3wdktR5pcRMiZrh4MfpHdezfp4F6BY3",
  "key24": "5wgLCcpKUDQhZef8mXViiKFCxhbZksXQewwPxgdxHhbUA8M5rJUC78vrscJSF9AeYEaNxPeAQcEQQynhpLcUz5wS",
  "key25": "2Lu6EZmJPRzQuALkMbB3DWtYP3MoLowLwH4wgnQC8TyYikEb14r1BGzfqcTE78e8mfLYMnJs9MG1vAsf983hVW9E"
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
