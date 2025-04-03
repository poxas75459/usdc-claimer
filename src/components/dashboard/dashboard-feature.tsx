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
    "b7wsLLox3vZkVjhBJ7qR1RWGJ8w115dFd7vPaN8TFJw9SXoHncNyzQDmUDJE2ZCUVKvm241Fv2oLQXRjnxva8dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zTh5sMbVcyBcMWXwNXP2MPt55bWNQ4MF9QMrArcqvTR5GFRUwiZo2Jpe6Yqbq1Tq9YjKfcyF7bKRydpS3WCrHfG",
  "key1": "2SFvkSCfwkStHpzJcrMNnnc6ukdtYUfMmR7BpXzUahf6ffDwRQvicFbTrW8hWzfX1fFy7VC17cCBVFzREvbRkTao",
  "key2": "33AZGCE8N3qSF4gAVd6NexgE4LnUAH7TzNP4FMVhSiLzvbBG6vpW6SYWQwroYoLaC5HEL1yCbo8thuSsmSgx6mh9",
  "key3": "2svffW34oYc3njTZTdArM422mHkF7cx6XyUWrCd8X8AnKV991WbvbrCVnYxNnK87mXxo2ZjWVts1Cswr2hffoAfe",
  "key4": "3DRGp8w1TwyR8xvko1JrsBuRjUVkekQM3GBT8mzSNpeQGyGainzZCm8wyJxHh667JTFtkQgPff5wA9PCqNifUs3w",
  "key5": "2noN6nw43JTvR2mbnfMeGv7HNxpLbyZLT1aUjMjM9MViz85HRWG72js5gP6su6NUKf7orZHnbm2vnpXuM1gW3rPA",
  "key6": "4U3Bfgt5ToiZG3SWAyCK3hV3yKqjEhUznAE9jViTmX7cRixDciLWLB7CyGFqXXvBhD1UoYgqJd4E5q9nm6EGQXeb",
  "key7": "3oDoecqaXD21qwq646SQW3NTTsjNwpCvRCoDWRvs7g1BjyRMjRenUemx9WCRtn7r7VCus3vwLi7xQnNsgG47Xogk",
  "key8": "2BiAadLbacJdRNVsVdBwqNQpcaFCdTzU2EokaortykCYrz6bufHs64pKDgW289GMQpF3oc9o5ox9EAgaoc7b6DQF",
  "key9": "4ivjEteX9SnQjmAvz6Ca7k4jaqiQFSMEe9cbXBVun6ae8As8jJZuFQm8QoN95tLM6q7yv3zBvwbyGbumYZBUcjiK",
  "key10": "2reJM2nmWpbsQJSSULTPUe3ngGqfH4H9PW2A6eaTZpNPtu7HgLw9Hwm5SBCgdtxfcdog5HLVYHeFvu75ibFTvXQm",
  "key11": "dPCDvtzTfDCFgWFC2ffLBQ33QZ1bJ9A8pZqe5GFCDD6judsPZ6MT3XpXE8PSYVQfUnnE8h2bZXgXYbRzL7HQjhF",
  "key12": "2f1myzezgxiqnoG4EiuWx4gwjxF5U55khgsZ4P9o3Bt9Q4DfCBvaQnVZK4DfRpDtPD2Ufa44fHVQjqKrq1hHMmMR",
  "key13": "o4gCiriDq7RwGSup1LUzhctDuH78AgsL28uVfWeaZ6xQqNfzPkRrqXZs17UXrGbVfzxkJBvQsVpEgpsVVx9z6V3",
  "key14": "3WuAweosbhKXsFbDqTZDJWeGcstUg3nHrE2vXLk65HfUqCNjEwkLRyyMJkvRpYdDc7M7P4YGpMgBUhhWh7DNiW8X",
  "key15": "31Ff3yvQbasTPLnrbXjS747cDGRXnEEqVYtuzS1hCwNN8fi8iUywxEpDY1twcbXLKQFgPsEhH3YoxyRNboA8LTQG",
  "key16": "3ciCH4FcjXaAVFyADtXz2Sg3iH5SY2dF6ztCgZNyBrXGGxQ3LdVjNpwbJvD5xz7sBx2wRkBEcin819CH1JgEP9K4",
  "key17": "36UQwRtbLCHVnuv8UEWYa94fpLmYUaYQEY5QSwGs9w6pqgbr4HKrxUd99u48HWVvi9Pz7y68zFnWwM9ZQiZzh2zJ",
  "key18": "5nnzhEuqbpPqhjzV7ABqWNTf7eZzQM8dR7K1YkCnaxwFfhMrgirTFhFzZfh67rsQG6iEdyYWG6DMRFgThB3S2SeE",
  "key19": "2ZQgLFGW5gRcLdnDPoaDNoA2EHxeoHJk1tW6MVZdXqH22xcw3krSqNZMBwgGswhp3J28yRcvyXU9xvmuMbBcb3Yq",
  "key20": "5V5h66kjgYXD1AawEazkP835k9T7n7177AA7iXKNGa5cEwDT2e5iCA72ufGyUHdLorXDXJuuke4sxEEAabrnozsE",
  "key21": "osqih4uSMJG1m3pjjiizrVksdSAuhMugF91xoh9cmhXQXcE5LKHmVhzNTX9BJCV5RhBk3BtEBBBcoiDkqX6N9on",
  "key22": "TeAJRXhB21eE77SWgXsYxmRB2SLMC6uSTRwKkFpH1AEPg1WFia9q8ZfDpHPzr8fXmbPyGNy5CMJC2h6QnUSMFbP",
  "key23": "5ASbeWqUDRmLAynTEQdrrhvCoCBWd4dCqrdKnews1pPnyhPxfkZsNmf7BUpcKand9gEYk8FXAMDUWj9c6QpR3mm8",
  "key24": "seVUGRMYjLgR4XEDq8PiYj6fvKSyEGRqJGcJVecCVeuNkjA6CHMxSQSKdx3mKxGs9hPNVsKMcGKawQ18GpcPyAA",
  "key25": "56pR7uNgxGYXYLkiB97p4BUUWQPt1To8vB3FFso7KvjuUyY36LMmcTzTsVMLHkeGq4YRJpojENNAatb1xtqHprXZ",
  "key26": "4Cj4arQAthViJtkfk7XaqQKec3cyzk6ow68gtnypPeiT96rnrkqZH3RtkssvhMsD99EDirUr72TjMwYpJnWjkSHh",
  "key27": "2wmBwp628eggfPJqRjzBECG17RJzKYaptP7BBGykJwbA7zPMfPMnVxPB9Thjx6jCrvWDNm7HzTJ77YEEkK1mwsdG",
  "key28": "5YxD7nW1ZHkyRintRbF8dAs5LdH9uafYzFX4XcuprvzJJFBqyqGiPAWs7PzaqiKZapgPtHyJsJTTZjJPToUCiivw",
  "key29": "2T3FF87XPhg2qSUmx4QgLrL7X7iRMeJahafmP1dCpU7NvDhVR1CGK7VSCL8QUBMQ3zLUA7u7j2U7ijcq8hWSUZBX",
  "key30": "XzKVJv9tFhLtVhdHdykfYYYsiqiQ4GGTdhHVaA238dMQtFc6xvNYpkZRNUBPQxvqSX1sL2T1LP8xCaZVJfFDC7f",
  "key31": "5dnW5Yuj5ipiaGeVbWdtVpqzyMif2BzRuitDi8dtSvT7gDhD8bD3VWrX4YwevhmLojnteDktMtssFkgm2JDoHHVa",
  "key32": "4LR7CsP1Kmkf5BTHyH9VGanW62hfZZeyGD7u57pytFqV75XpH8PKvsUX17BHsBFfN4SfHXJ4yPFi5EePv2vU4SFP",
  "key33": "2dQpxUi5aqXYHSiPkUuxE3Apbt9TmXM2WJaSsnvj3uXBKMrELf647dcnoancm5jg4E3P7in8V2KoDtq3rSYHHU8H",
  "key34": "4PvZarkxyQQvruKtoyshmjw4tFuR1PdnxNH6ttoYsLrRiuEXGMbx7FpXHzYHKQBdftqrUW4ARQmcqHCZewa8vJc3",
  "key35": "3SdxLFXQ73asuBh1Tn19rrSKEPkd4u4DT4G4sj5U8H3VtB6wZ2DrvfCnpp3wbAxH5FfzZFs9kcZ57yHkaXwbUSGi",
  "key36": "2wG8Wc5JPSKFxnytb4NKBwhdjYABnY6NJosiicj8EkRZ6CSrhA2eyZS7kvhLio3onoUeCUuAa4hukN1XVejMnPXS",
  "key37": "WAVpFDhu6Q5hAp3LPYsCCexwSLkoiqJp6Uijzh9TfW9fhs89fyw1uzKGwNZJqj3gybectVuDMNSWqvqWBV9XP6z",
  "key38": "56h3ELuWpW768waAHA187i2H9WGT1kbx4FbiRy87N7fh9c6wyBamtrDx4iJK8wVZ6de61SCvHHrGJDMy5GHfq3d7",
  "key39": "53jCgc785vs67a5n4ih441k8jzjCSFqG1vdoqyEG57uVLnGRuoTKPXsK1FJX3i2Q1uc1eq5UqEGjh1PQy31WAgVe",
  "key40": "2FiyBAWKoUUVMw9JeVAXoTFXnewaaULq4DjuSkB7RHePxLZdtXUK9LRjgYBgJb6LgqGcfNBjCmyYMaxEz3mPRfd5"
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
