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
    "3E5whA5NJ9nRn6HF7c3PTnUj6fqsVQQVczTLzTbHD7wGpGDhZXSbUcHzjdXdLtBYkbAbE1uUiFYhZGtrAFrF5D5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQijJr2XNvq2YUxT3XwQGETANTVbuy4454ciKEaSaEbnBy5pe1GXJwyZdMd8zCG2PFKZWrw1Z3EQTAQjqTfbhvw",
  "key1": "5EqKsJULv3suybrCSCMGDNSmeQsjvPDsyPhrXG47NWEvCxSZoBBiR5wrUSxdFBeLhRfBD78rYpLVWfdYobXTrf3K",
  "key2": "s8Qwt2Gb9jYRCDgDPaZrKSCxGxhh1yngKqsRKFZ7LUQdndeBFArT6FSF2hYMGko4BVqR3dp2BQAgDXGSjend4PZ",
  "key3": "33rh2JWcq6rqoEEa3qAKS6HA326h2V5rjWNF5WvcLc7wJK7nHCdGG6b8zLwharedwfRS7dTLZ3UAwUZY79pTmvFX",
  "key4": "2cP3nC3CmB2CGcsz7AYwAEmTyBMxekNazmG5Wf8wZugsDDkLdsBnhKDsmYmHthexjgdsZQHdT3kBUp8XDzfZwAG3",
  "key5": "47brHkZgNF5CihpHfM7AiFLvk9QQiak6abFPaNedDEhratcjTMen36erCc41V75v6VLj6jBbiFbmDcJjape5q4K2",
  "key6": "3688ZAo4yi2M8erEhDmSJ3gSGUyC54VHoid31W1jsWwVvMZ6SMSw3DRM8xzsmbQ6nN7oC7cFQsTmFyo4aeQrrtPS",
  "key7": "211Q5NJVmsC7aM2uijVK82RVTJ2dYXcj1xwj53mpRPckDwVdP6NZAtciXyRK3reQtKPGFUidQAvAE3pf7wtrZftL",
  "key8": "FoUxsKPsTACXEngzxjJsCVuKY36WEECJaiuyU2Ztasvm3FU72BWS6mPnXpN9WmqqXmjV6P2M29ZRAmMn3zaMMqx",
  "key9": "5Lx3MTP2Njk1aawpmmu1kDjC4wySMxhxF9LUnn7R8yCKaUz6RYYYGKLsU9tufLWzjzDwTSjepoLESsfP53uz76SG",
  "key10": "2PiyAuJfQ2qXpmx6oaZZBMaDfvCQWinCRphW99QDxnDBJ5i9VFV8d12k5u2GEMyG1y1iRX3ob5WNEKMmH2z5zwTG",
  "key11": "4kYJrUFkrCNsFVQHpHHjJSJnWp6qFrptBG4pD6g4HS1sGMNLTB4jVewMmFSiXs8xyJSLKin54pFArE8HnUZxcdzW",
  "key12": "5feM9WbSk92ZJV8eXU1vkb9myigLygt3Mggrp4RxGYmBVJw69Nsj9tpJjTsmh43XYqkHNhunuQHQ2cScrifc6MVX",
  "key13": "5DiEPe2PgcGU5X5AtSTn6pbeDLMkDgdJxbvFbjLhEduq6nWMzRNkW3oYXz5bjY1ficsDAo92Caa8jKQ1VH4gF3oh",
  "key14": "2WbtPqHygRE8vDx7Gq59SqmuwCwcqFH8MgGsxiJUETKHtKyQ9y4YF6P2XCBezBRFkazQANbHkwWU44KsawBNy8Kg",
  "key15": "4DMU66FJbVRaaPcTyTn3SoJ4JuCWn24fG2AJYcdp9oFWyNEuiUaHcaj69ZgKzefhNVvwQqkF6qVWvDnfbK7gR2JN",
  "key16": "2ZyekPLkra3vuTzyJjbFcm6x3F6Y41Kd1dSZrQHcshZPHmcwuLnWhR8DAzy9BjwahwvKnxQqzeV3Z4P3yArjXKoh",
  "key17": "2sgYqHHrBQj4mi2n5QRBofTk6HLRAmEZyQxo9wnYzLy7AWeEZgshvuy6kQDVt3HWCXoH3HRAzqJjeuuXWkt7UBse",
  "key18": "5qS4dSXNrPoFSoYC5DbN6b92uvwC63tDbsmNrrPRgJaSrwrE8wyrqbAvJcEqxNS1pyhYtqQAJ1FxRV8SNs5ZzYvJ",
  "key19": "3fmkcyBNoJad4rnswoKdG7NVib5dHxf14Xm879EF7WGy9wiBvhh1NKB7hrXR6VrPjyK6RwpKThpkRNh9YqLCprgA",
  "key20": "pXYLGWe9gUo3efZQ38BCCViyTcHULrQv21DZRagACNrw6Tyw1YRX9CDgKtzNJdYPjyqA5ycFesLjzmNNJrMVpRo",
  "key21": "2kB5ZLZRhtWhhuqZet9VNqF1BrfDRdbMgwfS76ENv4ZV6U5Gb7xqTDFdqLKFJvwEnLmBiE1u2d9hnij2KcFx3NJk",
  "key22": "3hKr2rzmnQAd1BFND4367iXHmehLm257XHgQErSR1F12uSCjaVk6Q7Bw73n4aQKKua8DGhbzQLPToDoiF7aN5nbf",
  "key23": "3hdDu1kwSfTkJLpcMc4GKep32bL97aaNoxDjhQRxukD2pNYQ1m2JoJJGWwc56rm1ny3PMcBsTN1oNBZpEy12wVyt",
  "key24": "bsaQx8SU9ZGtcJ9LC3Q8N9TF3Nu5V9HaHQF7Nct8pQA3r9kp7FScWPRdbcpvw17tvbk38ihp4CamQzNtByC4VXq",
  "key25": "xQ3nkESqzPrpXQE5LqUPdiNEmbagp8QP1D5DrWzYNP2rtr6WEykhLWyAuVz92saEqxBHunFqB5DSUrwKrz5V2n1",
  "key26": "8hUX4K9aZFbqyW4sE3DbvFqKFMCyzubzCLj8CdMc6DzkqDikRwkveMrbFF99fZJAkkowG5XheD2irGZaNg8rY4Y",
  "key27": "2eiHXd1xXjwSQMe7uttE8LPrkRP59MotQd5ggWvft4vwL3hxBsTTQSrUPDpuSRncir84rLhhDqxzrY2DzqNxLyys",
  "key28": "4JSuVKew1yYU4XaUhQ9mBZ8eGbCPricCJxxtJ3fSzbZQzvZdz2cZxGWAJxfrsYbT1UdQG8tSvFh8NW6i6pNLyFD3",
  "key29": "8yj8vH7QUQzmwE17sac417kT4ekZCVigGJQbjdF4YHgfkpdEGdE6u5dKDhm6k2xR4ACYNQ7xwdpwfeAFzy1o7hL",
  "key30": "2g92LndemzSTAiZQdMY6XWNPWwNnB7cf6VdQfduHzTuMgvw4PLsk6BcLeu9B8TdK5RJADAeiNQtbi29zkG7CvYbt",
  "key31": "2rEKZqf3JAYzQYVXn2sZYYHPYYAFdJdHMfpmCRbsL3CPA1v2KsxaaV2BwT24tL1cimPLDLHTVos4U4tazGRRNKyj",
  "key32": "8AjtBLbQfyDqANyrRdQ4RHecbp8psDSjsEPKX6737c9p6u4igBSefTetLoTFJYyaTjwxwRDSAq7dLzWCJE1HKKg",
  "key33": "4Z75ERM51Xjg28MmeosmFSTyvonPniKbW7wyNmY1jaKNgyD8xJBieZYrzoF9eicddQPUCTHp38yYvmGAzhfHpc9W",
  "key34": "53pRVuiSpRwoceE18hfBH85YwozjPPzqoFJFGbSmAG3TnkcDFDAnSrkDxw13mkqpp9qU4mpssosyCDcaWRnDu2ve",
  "key35": "4qtEoF9wrHSbCAqqTACBaRUEqUiTdTRdLtZLCUoLBWjFpA283Vz9ch7HtLdqUDnzi4sbdNsKZ3S8HYHwL42C3kRC",
  "key36": "37oHJ2NGsSeN911o1FpNxXPmHg6ndWcaB6nqSv3bYAAySg8SPhte3DxbHX9M4nXaNokdJZxKwAk2qu2XHpAapQXY",
  "key37": "5pBMtd5vnizDXZwkq6cVPS5xpP4niKEhn59wsDj2d3axru5pTuSojQDmxJGX4HSptN6cph8otMDhG8snNKnQqKU2",
  "key38": "MA6LXRM76anfEVwRjNeENWdTfXrkduG1d7uPqhFTYe4jwNS82L8cjZpSEiysDykeSzSgc55h89YTC86cJF97Sac",
  "key39": "31NCBuKyGSpVfEKsbD7KKvvRkD8oXARyUwcmjB3PTeu6tuJTpYP8uUrZQY918L7g8jEXyCKZ9KAgoJsLsoF66rQ3",
  "key40": "4AxmfBr4FsCdhiRLfXBqQxEw5JadPDkNxweMP34x1KKq3XXEq5AFMrY3Dd4gvhWNcNAeWHuYTuUksDjL3pRdV8fs",
  "key41": "5cmMsN1Cn8BE96LLbhP9s5MWKTfZ6XzQr2vxPd74eYWfbUpLPt8gDHbJ2P7xQPkJqC4gjvAe4BRo7PtGYcYGceuL"
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
