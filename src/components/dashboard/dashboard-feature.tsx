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
    "22kEnwrjoxJWNQx6JQgMGcLXo8J8nat9RkRaVAbM6gZxGXeYAzJSjWb7fjtNkNdoaKitnTgTiLxv5e9wMmPHCXAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bEtUWpp3L1vv4Dn2dBTL1xiPwXpUc944htoWbKfQRin1zLfvKn8KYqRCUMvLLXxjBN3d1rirSVD9nH1X5LrFMfR",
  "key1": "2ELicQwgPUbmEL36XvSKGn5546aizjDoKWpNkqJ2DQaN6CqmtKT1wF6DMbx8fcfETow7Rb3RLqoQbwYh1pbs1ApL",
  "key2": "3VfxC5DSgK8jys7rqg72ttqFFBAsu2TmnzaNmSRc19pnTU5a1EYUcni5jUV6ExkX1Ymuv9mXK3NBtG8ZiPkUtg1n",
  "key3": "2R9rJNYwayTuxVmLR2huxQmrT7g9ZxUnYmcjUc8EWeCfNYvE7cMjjAGet85aUPKMgcmZfmpYjmo5nqAgVzgW4vEP",
  "key4": "4k7ZkcTGxQBGmF4nh6mf9sCJgHgj2izhwnuV1Zy84o2ueHSYZJuwcNym2htPV3RU2s27iNDcFZXN1MaeiTKEm6M7",
  "key5": "53kkvHpTsdSpxPjVEQPdyHWSP2f2C18AAhTAszgapB77puA2BzL5cdZurXhHeaxxTrVfpuL2iAhLxfS1SNxvnJRd",
  "key6": "3Pr3r9caNiqHEP7bvj5kGoQocE1M1u7aiqNhLqahGJDm8uy4MAfemKiZPy1cwCV5YUYsL7RVJeRTUuWxy97Hap25",
  "key7": "3wTh2roC5svjDHbnjtHaxNR59qorSdCiA6CTGNVFCtRLhSUmpijrBEFg6NxBxfV35cF7WP7sESSRF9yRWRzR99Zc",
  "key8": "51ah6WsmWQW7gYnwkGvsGt18wy5zJtv3NTg4ALiFLjojp24awjiWHAycqFK4AS4UorS4gdeUodw4eQnjK2L5jcxQ",
  "key9": "5bPtdHxDVhxNkHArSWHdbcMGPHMt2XqP8dLNtXFPHg1khtvKPyZ6HdK9vGY7ug5XhLuN3o7MtytoF4QJN8QNWqqx",
  "key10": "5aLyd85ka3eR3ETy5yaMjmXqKPah9VHh3N4UXVm9cXaYEYtNWEuE6DQ4VRVEvYVUEo2H6WGrjknRdWSNdHXwJHTt",
  "key11": "56pb96kP2n5rJJsrXMBYXr917uGxWGzBTuSHs1MbatdGqUYpnQgQq4wjb2gshHug2sjZxUvLvGRMULFVx7pfnfU",
  "key12": "qSUWd5zRfZ8tyutpqQiUXbV9VEbgPwAvycTPULuFkkBTpu5NXQXQURDax8rxbn1zmNEa1bADK2AYb1xhBaQD3Gi",
  "key13": "3j6f1VhkiYU2BrfdcHXhuNqpNfsdbXxrShAdnPS9n4BLeGXXTagEkWUzZzH1nTtMLwFFpwEBtHFEhMediidUmtJr",
  "key14": "4J6K37ZHvgdL4NaQ1x2iEeDHNddP3FRBNyQypdUktAyHgaE7GRyFEKz4coDrJ4HxW4KPYRUZ2K1F9sYrmPQA15by",
  "key15": "BhBAuoUEGVX5w28FSWL9qYk6FhV2TXLr1hRQkcHwZxNGyyyySwFsmr837f4vjkj199fMRG24FbJ5DfUqU28SLSJ",
  "key16": "57U45yD3Z4XXNYStJJDZmJj99ABDcRwFJV7eSuPxEFbxnRdQSv98xAWSMu4LBvEWEEGpvFFN622gYZar6n6hDbvb",
  "key17": "34kQRSiPrHM9uvMC11ANVX91yboVRkgGmgkauHhJdiWH3LZW9YJNiYPwGkm8TAzx92pqAypfqv8AcyWisj9d2opD",
  "key18": "29vSUqvdNn4W4NnMqTmKUcaKJBnNRBdTEAZDozWm6Po33PJH4CFxqzkeWtJ9L93GhWH5vHs8upcCEX6MkKD9NQq6",
  "key19": "3uCpYMU1mRWLkC738wNA2hdBcqBXfuyqsgUmNUjZEzWgSdvMBcdMHTPWCB9iXp3BipuRmxv4AtNUEQ96zAaVXeNz",
  "key20": "5ZAqu72aCARS5sNPaWdrSEegSLuB5gnXv7P2rhjUmo2eZ4JY5danGFwf9Etq4fywbfZrXFFVL6ufszGnWD9L6Q7Y",
  "key21": "4Ho3LAX8qHBEMNdx9R9eENYxQ3wxAHeQE2XhhNFY2AiVSs4t98KuPwhDtAm89raAyHyapyp6Rcx4pDggY4zSrTQo",
  "key22": "2kgQv5enZkvdQw25upt2kHEtkDJF28knjdJnzhYk5KR7BmfEfqdSXm85JMx3UtxQYStVaoh6S8PHFTs5wJtWTQxA",
  "key23": "4xAXtgq5Lu2SV6N5uC69KHGgmkfbZzB3bqio6pwTdQAw9QzdzbNtgXHhjVx7YCDvQ5VEwA7JviR13UfpTzyyTASQ",
  "key24": "5JtTE73nYr2iJNRUSjhNubggcWG4aiW3ZtCdwc2znwuMUST63gzVThm1zvzNQUybDdL8x6SiP3SiQnR4VHScAdCv",
  "key25": "tGvLEhdSc3r35PEtW8GgnhbCn7Awz3oyr1tP4nyMUG1pszyAByXp3pHSBg1W4R5S9mxj8UpRXjAQbbjPTQppaEu",
  "key26": "2UrRKjw492tgq5kf83m9uoZ2p8VquhHfrWDCxhzij1iRtsK6HNCNGnSkqqRhznze2A6vV9BAZBrkn9U914gx7fgz",
  "key27": "2EqtcLEXGUDJzii6vxsiv1FAYCHKeJDB5PYRi53Bt6uHcygCPAZzag4B34XSE7cdQWjGM2Wxopw3giRgLk2Mmo17",
  "key28": "4EcqZ7ggBh1CwFyFQFAhQauS78jGJpDCMJrkpvgityuywQhgmsQvBA6AEujQGMFt84U3uLr2UkiE83VR9YqYSWRC",
  "key29": "3fH6CuHGqfNBeL85o4ecFdyzTLPm25xYAgiLjwCNcUB5pyCdq3tAnqEgExSzbPJKQobvXcJkGA59oYyVcMRefXcV",
  "key30": "4WLjJkGtbhVRZzvuZs54wobwUe11yDTXocf48jLLh8GTHmXEHL1mj5sTv5MthaGG1sd8jYhjGYJP1LosQtNDxCRb",
  "key31": "4V5ZioieM6CsWxFHbKSiB8v4q64cpf7PnUSrB4Wwqcwp5oQtRerEo6JDJJQaJ2LrJ1xPkTaZXU4Qf1xfPB1HuFD9",
  "key32": "wkE8iCFmy738C4B1XACisxr842mYRN2sfwyAgtnYLrWDiRjTXatEtwz97CCiBUD4jEJgHRS4wkqCGVuXjRHwSxt"
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
