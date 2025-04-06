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
    "3dHg5d4ZicY6ygJ5L9ypVfB3WsxFopigpy6PoE6ceiQdQ2WhreijUkZ6R9HVr6y5xN9XgXuUNLRKmuFbqCZF3xBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENJfmLcnzpFFXhvGgijE1TdzpotHnXLfUs61Ap4DSgXfD34EuZmwY6rUeCKeMrJfmkrj7cqij6HzBzCKxiG2H7C",
  "key1": "3JWo7tG1KkCGbGBsqXrrVWUFQsW2eWP1LEfdna3ewR1yTJtDWrUNGmptWAxuurPNbGCudK7cKSLDBNTz1Bq38kqN",
  "key2": "432yVX4xs7AaGPAiCfNDGMymrmsnHBMssp1exdiJJf8sxqhgPrWAhec2oryBZJFBt71KRwzF7TM4ZmQUqUomg5cE",
  "key3": "393W4L7Tzmtx94goVNicLXdkRrzRvCdBtphXJQrgZc4WQzz8v1h3hayhUPqix4dhbTgrgByMdzJcSRPBnQZVP4tj",
  "key4": "547Dz1yALVyYnm9e4a7BPRDxw6XLED7ceRreN8QaRs5uUKWzPxUPCsFPg5qAA5j72ZEzzSdhMrXFi6Cf8VpUfadr",
  "key5": "4gbErPCgGJAqjZ3y9wiGkzVeB79bJqomPP4hcd2FMRT9rTZ1Lnv59ANNX9nZGUxAmnBPSkGDMHZWaqpN1PbRKWFX",
  "key6": "22xJrUdP2hEUf6HTKuWHrCXbbMyNSKoz4isC1izDsUB1ibca8fVxN439q51KkcEuCmjC4AiW2eR2G37w5Ru5KoSR",
  "key7": "hUrU5nfBwWCUTkViPnGMPVabFrWibwbvCeDQTgdkuVbcjVg6WyhNeCerwE6mMvj7DB1wHASMc1d6u2rp23CrhC1",
  "key8": "QPw5wxx4NFxW9NkBs18nMuQDxpgfHH1ceR4JT8EH9A1P182Zxud3LPk2FSPgLbYsZeVwP2UCk5J1o4Gg3iEwodC",
  "key9": "vh2ZiQGQJLMmnp7R8eBBfTP5739NGt8xRAbwyVxLDHfeg6wBZjEF9cjvoz4csFawoD7YE5S5ZMJpvPsFNCsWYGc",
  "key10": "3JpohDmy6PkDoBX2zYYFxEYtZBujs2wa5ZVw3Cx5wZ4EqznCs6uaHX8MJV6MeK7SzLT44k98c1dwxUkLoSPoqPdj",
  "key11": "5abkM5ZzZm2VuYBXwXcN2fHjZobQuLqcjvzAYugmuZar1f2U1k5T9b82grjnHKdE5iCrF4zVPmwqQW315kWuDYem",
  "key12": "5o9zHrDjzoFTKZVJosbmqYgJjfXWh8vMsoJ8ZozkifzSN3va4XTcXzTNHAXSqn88C6SN7wBhvXrwDyATNvs6Ffkw",
  "key13": "7UuUBtSfFbbSEw68nG9mExkVQHXuZ4GRs9Cc2fYBrXUx6dkpzcTuvz34iM8oxqD4SrywwX3y3pxcG1yVpSUKczU",
  "key14": "3SiGJUA5Q99VopSHQoTBRs5NMwau9o4jYyFDQVMjpVz59DumXejFwy2fcwM7tL5qCSzW144GyB3P6VfHqtsBSumN",
  "key15": "5SYD5hVZupDaSXCJFyxcLSRjfXRs6yVQ1JExM9jbhXA9mNSCw3aqPkKBKE2cYq5wuPV34C5BVdZ5P6JDSydzUVxB",
  "key16": "52pdBRbpqficpMi2zs7P77Z5dPCPCERegUeTi2oMFb9Amxdtru9Bhya8NpuFeDP9mQhFN7HWpB1TEo6zNoNiQ2m1",
  "key17": "34BLkXsjmq5VMZwRfMDygkSaJVvJmiM4V6SaeyMWbuWDifMT9C7kPh2m565VAYqbsufFKuobxDxBU3ASoaQGvzun",
  "key18": "2yDJNduZcxrMpexKLqsT2E9M7c5FjCpQgDhs7kQCBECNtHLMj7x1FAfXwgxNo5YXnQAsZ1eyW4CFX1Xt6Ng7aVBk",
  "key19": "3EwztLvqnvaJCHpmPpaETp6cyYpUTRD1uPNPyj15QdPgd8nVyiUGSE1NStXChWnBGKdwNxcZSgbUqgWHvQrERz3k",
  "key20": "3wfPiGnj74hGHtVfhV3E6vkmwQv9f4MSbcvmHB8bDDAxaikoyuMLs3ziBkZ9deifwo7iRu6NVpXSYrjVH7pTLP4E",
  "key21": "4Qg5DsPoFLR6dRfCQTqcSFZ9xYwzzuoLyK9Xw9MKzb79cgaad81KM7yYqYi6GYgjacY7hPW2G9En9DJLsRHwGmnN",
  "key22": "4tqwZkHEEEqDod36ijxSJBXiarfbrKQairtqevebwsFUQh84j5k4k9PGyztXcWxFxBM8SwPMPXpqZ6bnd5bDQpqG",
  "key23": "3N77SKc3SrwpUvtut1VHDktsE7SebpkFoPjyW7HnsjR88EggDXwMoUGW6UVkpQvA6pQZPr2CuXJkFkMpP1vfCgyF",
  "key24": "5zVinJ2sBGSgiXCcWnXU92nzVoF9wi6PfMka65ZEa6yHLx2zzt8dZfbvifbNdWVfLTmikDQpsDyuak6VMMRrHMkY",
  "key25": "5LdvYqoX4RtfStp2FxVF1vpVPESPuvSjWdsV2DKGuEtYDmCGkwKhr7gjendVYzW41SbZkBLMuES3hA6jqvRXeeYZ",
  "key26": "3HrJpMBrAj1C9mcqHZCxHrfkNJExxQL2tHffummCkf88yD4LaYSWHrGG2UHZ4b5KE3Lz9iTuiezNRfWqGefzQWLo",
  "key27": "3wHNN1F5YB4WDMkFx3DkHRbHDENNEbxtJUgmGjoQGrR4gZu6bnRRostXQ6eQtcNhbRj6kYtjxsbtCwR5Arbdsazp",
  "key28": "4PFN35BRs1h3saWuGCrDgfqeYNg19Jy9kVJF6xebBpya7E6WWY2YTaYGt1ev6MSwCYrdMiwLi8YQbmK17soxK6YL",
  "key29": "3fA8ZPFHGSZpixtJKAcmuwfXcuVSjzmZhzfky99rHG2NcTLegkSdnfypay3ogPwMs4DcAfYtVhw3hhpS9SUvFTpt",
  "key30": "3HCK4gqNGATTtvaCqNM4AEfTUgKRmL1gCSmzpLpRQ2x1i92fEGBr2FAcyn7qeXvaJk5PgHNAzNchXrqWtC8hbf11",
  "key31": "U5JiSiPLZ6zqwu4Y7fKsRiahn5nLMpK7LEUu9AKtcfF8r8w8uewj8HxznFaxPQwLgX7pMKjSiBpuHxLXoYT8SMu",
  "key32": "24jk7y3kGf2g2TUBBeAf4kqF1WqRfXuoK8dj8FijrvA55GmABm1odsR1csbaaNx4fB5FBxeJM9zhj8GiF3haFvXi",
  "key33": "349oUVjRfWGzThSNMQS26adg1wTTRASCmxA3uzMhjpFozz3Sv5SCwnNjFNWJZNDdWKKstE4ruZT53vS6ufpu6Z3z",
  "key34": "3dWrzxMhhAXRwtnC7pvySWu4JAANUrE2esAkfNvXwLp3HnEeNLdPvnWPeFYwwtU4wHdRVqBwjPwtuBoq8UjsVyTc",
  "key35": "3oeKPwM64fWE7rU1RU8toEvJbTHXfoUbKcKdUg5rkFdVzNaZMatFbgVxFbXV8wMznRXCCNibE44REYKJZnyX37GC",
  "key36": "5fcbd1thmz5pgFc5r2SSToAG87Rfwe49Hvhz34qYMB3yqvFtRt1V2oCnM1ovGqyfA1nufQc7qaqt4nWdeGqSGgby",
  "key37": "5D2SgwmXjkvndPmdmadkevqRWHMmN1zy4Ts328ArjKXSYWqK5smB8yhgrEHioBiGisKdNCAP7wuJLfs6ua53XGYi",
  "key38": "5S4c3g9oD7fHDaszPwFmCAxWieiXjvkgeEHHmLH7bwnx1VwdRwQRaTceedXuXJm3N3oeSGzTzQA8J1efdzey9jBj"
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
