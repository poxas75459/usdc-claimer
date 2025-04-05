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
    "jZbM7AKR7fGVaUeC9GawNNqw6DnypoNsHiFiwjtoxSq1CAoPRZ6ob5xYiKGNunQ1x9vofp9cdysg7aD9K4fNy6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQ5AqMtYeF7dmayrzoJVQujKwU4GyGsSbcVRTdLicomkdpbFWG5GFJDuG9DLGC1iq2EzfCzVt9d5ffYwLjpFqcb",
  "key1": "49R7P8EsBdUUnMUG1z8HVfFpCc7q8HZQVwJZpfEom2x9GsnqFVjBGGkMbkQ6hvF9eo6NraQm9GPfphm8LrRHSdwD",
  "key2": "2pEKqc6p8toSSWqdrPjrM17xv2rSK4jTKnj1tC7cGhhttENSHnW4G3BkEbefQDbkBAQNFrNTqdM8xJGoqB3Nkrdh",
  "key3": "2XeBHmvZZQSjWb8KQtgjVLK2XDyh1MRgR3WM6weJWeur8iDBpGWXro6puDYwpNS3xWfMuq1ukCBspZZFJGqazKx3",
  "key4": "4oieZjBZ7rTYsGgZqaQXaQS4rgoU9qXfPMmT1P5otUDkrn7T7gqs1AuhEWTPSepgsB1k6tEwKBBgqAh15YFwhZ44",
  "key5": "2Nya5LCruhwhZ5xviaavZyUKaWj7zAPptKoecLareK9xPjLBwsVgDGGgmTfAwNwboeZVbWBhjVse6ob21GtPW2Td",
  "key6": "2oARNkgeS7oqca1dNvb2RJ5YKFRrab8pQFAPRmCRoSQ1H3i5Rbz9C4xLMG7WxNyv1tcYEJtMRX4uHZ9UNyJJETMu",
  "key7": "3W664r9UfrByfjDUfpYG3vHWKkHojP9fueNvbrAsEHGVrLnuXSTa7hRi9HBVibh29ioT7VQZ8k4tYJrxUP4PT7Q8",
  "key8": "3XRrxDXRQECSeUgRHATPVow1r1iLjGd1wM3DXrGMDdFwR6nVU7sG61NXD3Q6qzzuvQojLaezgVQd5ALVdafUDW33",
  "key9": "5JwnxduJQL7i2yj7DZMs8yfwfEa5azrxEW9uN1Xgqj6w39w9RJvYjQeMWwMkGZ98TF2GXwpwEhH51uwrA5RNdtGP",
  "key10": "27nZqG1FNWSvVgJrksvEng9SfrMLVJoGe4UyQL3EmM9w8WTcCaM6jCaXk5v9NrcnHo6MHBGTDqheGaY7P2HD3aUj",
  "key11": "2FGGsfLbER9khZQvBBfhJZtnYoiJYGT238jJ4YeZPUs6DBYUjLSDmCS1k7tFSFyw22JdwPxSci7xjWHbN1fF1ePP",
  "key12": "3xAVahT2xJWw6zDUrcY4eFgJob5SAAvLjPyvkBjThni4A4QMXpNPWZgx6JyJc3HHLizZLUwphrqvjb9q4KWX3fLy",
  "key13": "3sgXc8WXW5ixijDdt7c7H6ST1NT7cUV1EcK8T6WxSTo4snWntKLAQofiAbbf65re6wyaXGDuKbwQyxPnFzTfSK1t",
  "key14": "5SsCj2bbtTC5xckAe5VywFpQoa29KeWNAa6T9Dot1tjDKXT7xqkjQhJ1fyxyfThkBNTsxJZsfFRwtMNPwBMyrpJa",
  "key15": "42fKfUKs4dJZf17DyKKtLBh66PCXydg58zggFMEqz8iFL2SLj1fUNNKoXrP2U5fgPrz7AEPwxkQod58kmGpwG1DK",
  "key16": "46czBDH6d62ux3vMzY7BserCPJV5fRsQAta8grvdRChj1xF2qGm3DTLgjj9YCaSE4CyX9PJZzH4vTjF2GiWtbG9C",
  "key17": "2kScXTtNHojL3Mr2otb6NchnjmSzvnU4E2m9HqJaz3kQf3U4MoLAK2NXYgLubC5ycLsfuDcoSmk8HMzDv1EjUzKW",
  "key18": "4QbWtSW1EyuedVcSaTWH7AGh6gUSHWn2bJay5sa2Z2FCkf4b3es7LAmfRKfo9aHj2q2stL6K6afQ965aXcRhhPtW",
  "key19": "2KABY5YPzSk1A5gmdJHYLShhzP6yDiPksBEA1xJKLkEzCKGLCuR6BfmkFQq6nZXM1dqNmriP9gHgQkLYtVHuS3pa",
  "key20": "3kGUSXcg2v9Gq65cysUT4GMhEV1dR6k17DZguVUGaG9cQXfnUFQVNqLCp8fPLUjqP56W8441dGkdQQQMn5mxNxWf",
  "key21": "4kXSvMQ2gmkjrU9ghpPLowppeAmBdyV7rHFWwWHPZfYf5Ju1T3qLzDNLMpuNC8ujysS1pj9ZF7y86HrsqRPzEjSd",
  "key22": "5uX4nawc9WHJaWtAp37qArPS6NS2aFKN1aTCQJbfQP1LwU8gbevem9n8YYWVhFJRoiYiH9WhLK6NuM3yvzCBni3b",
  "key23": "5rb7pCm17Ku3SYNc4BX7jqzKw9y4GJLcMUb9DjdmKoMTHawafzKgWLjsztd3meqK3cVbdWCLyqosDFUqawKM2iSz",
  "key24": "669hjEgxFNWYoJ9TfiL6EtEMvHtyGbrKDtjdvpCwguH2SFPBACDGfwj1UwVK3md93dXMm3oFYpPJTgnk9GgQ7BgM",
  "key25": "PuyCU7SLn3BS5btTt5XyGDWfdRqoQsbXFAf3B5KxoK3c39pqTxrHsGgzDreqpbMqi15M4XRSGn65s9SrG35kiEF",
  "key26": "3d6L3gZcdeKQ1oLAvetmsE4pDEjXPDzH5FqX2DEjzjrmGXiyTQodnKuAC7vAj6kRMge9fDQXxnZRggDtk8nss5Fi",
  "key27": "5wvqhXvuXnJDHKp4VvGh9P6jMp4YuXZR4jy4WJyhDtBoTKQrAV3eKr5LBeGMLnSJT1MTDcwa3yhEhTcVnUGxSse5",
  "key28": "3sNErQu3GjGD4ybEUzgeTTS9yhWFWz5Sr2xsLfeqrqjKL6Kmb53Eb8o4KTfGzU9pCg8i17YLKNMfWS6Kvmp1y51J",
  "key29": "4DXFVgn5f3q5Dbsikkq2717UkMRNrv8yBS5PRcU7wWMWXLnmK42tSf1XRRyj7fWXmQfJEpNLDxr7QPhVPkAKuYS7"
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
