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
    "SiqDH5ySqWqnGD8vNt3st5G7AYGZTgG3sXNyHvX7m8JGSQvJpQezUDTXywoVDfcGmqVHGNmdttHetGAUU6frQfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mXxtYWKvXvSQrzDNAYSwj6fzdCSgdq2ZRHxr1wRPwFDA3qpdrGCfx4MNmD5KsLTHcbCiFUi7EkfhXnevN7N9n6w",
  "key1": "wBXmEe4CyHNTdX8wVh3bdq2QS5YsAepFaTua2GQbepHaGFkhRVhwkJK2FHXaM6BEDcEcNQGpNG2eJz6WbPrs23v",
  "key2": "ug22VWQUvaAWPUYArjDKbztMficXT3Z5VFLt7fTycNYkN9VKYai5Ykd8C9in63XePdgQgroBaJdwWhhC7iqUkgC",
  "key3": "5C6yExEJwjrtAzXAeMHFGU4MayF1VyvRZjP87kAySwSLr4xixxQ6EeVYMKH6y7YqxEDvWgHCknTPH8VTj4Cr1YVR",
  "key4": "2QVCaq6UDLjvewJz6fnLHzX3cXd3DRbc2xjUMXkoUajDdu5qvPyXJvxAbdqfdqt5M623Bn2iH4Wa4QcnKGQ6Z6Lk",
  "key5": "3qnWC9CDLWmG4tVqdkVdo9WDkfSUEpaPh8NizoDgopTpzHNmucaVGg6Pg1BE1rGSLvpxEE4FieWRfLSLJZFXVjbX",
  "key6": "4NpKic9t9Y29nZ1zepvjZSieCoL33VeCXnCivgazyrMr4BEn6NU4qSeM2YnHskL84m6eqcE4Hph73ZxLZXT6EqxK",
  "key7": "5oqiRxYzt78qbpLtY3HMFHs7k34PsYaiyh6MrQmTq5VQs3h1vZrHeRcgyg8qSCYQpJZ75Jj1RV99Lb8AHZUHNyLn",
  "key8": "24b28wTs5WtKsbXVEL8TGv8DE4KjHBrtVe2DL2fhcjsFzoLajfmnqxcZqwqNJ81M3McsvRASvv1TQmuaqEoDirfB",
  "key9": "642KzDxh354BDERnVZYswrkmmcnLZnEYmfWA4ZJ6QWfjhbNFGqfNdBeJsVkEfhwBPp8htoit6nxA4qUrXNfjcvBo",
  "key10": "7BwnsQm9oNKAW92rVN9pywT1HUDFLQQqgXky5LXzs1h1an1NmWwbK5muTDNGajArCpU2PaMkes5jru93iSFcDNz",
  "key11": "38XzL2HRhUYWzmtCUSqy1Kyrntyw1Umodu1DiHEKetAfMkbtaGWYGCK5hjAdfAHriofm7FLbuGsfJpb2Maa5NsLB",
  "key12": "cYtcsnEgoukMrA8VV8oKMSbGatPePztP8ZRRkt3m3htsbMcGNzwJ5nRZJyqs4fmPCrzRyAbmNX6deSe4wrBRi1h",
  "key13": "3crhy88yKd2kzycw5aEcjyjKb3Di6tLfKKMdDzq8c2CJpbFkKf6RMZb7vNiTEwh3XCc8gRAzM5uc5wt4ycQyX63d",
  "key14": "4NsnDbPrFTUq3fhXsdY5RhN7NFfBscSnnQPd2EB77JxWtyLhkbrP3hjfKc6uLBE7SP68UjwYKqDknkRPb8wLBEwV",
  "key15": "5CyvMeDnj8oZ38tFjyBki7weAMAENHcHwrUxntoeVQ5EuR69Kbz2f5kBE5pAuDPyVpHjpefYUjE21r7Pf2UXp8gg",
  "key16": "2GqjqAkWx4EuLXdyX9EMk8uMiTtcgnEfwoNDHEpZSMinLn87mBqgMrwUDPXYBDoDJGpVQ6R2yuCzNiRDWSY98AXF",
  "key17": "3eVB11yFaEYAC2xhkSVH2NnHeE5E32FbhfcDoPRcSbJxvd7EhxYCQfUmejWLBQC25UX6sBoYcfATc3pP7G8h322w",
  "key18": "3iSczsBSoNo4sQqpqeGLv25TjQj6jX96uX3pH8KZ2ZZ7DSqSr8YoFULSLeCSK7QT4CWUE6JsSjadzRdivXnxWwLz",
  "key19": "2T9nv1mtYDbwRG3gGeqt225M5oopgUG3rDjckDccHmSBzif4iSzeNj3UKhJHb5kCRYL3ew8u33Tai5mgyHiBW6Ki",
  "key20": "3Wo34odtqCp1GhrtFzgXcVyerTA55NVbwY1VsUiectme2GGFFg39gRVFQDdMxpwRpz6cf3tiYnN2HRGPG6CC5rG9",
  "key21": "2f2vsEUXmMGM5LSBpT3NNkfnxstaz8emvf4EnDfP2bT68TxH6xZLafm6zUAfFYV9MhXC4wL1pq1UKeCECLLJkPrS",
  "key22": "4pqVJC17MhfJJS6j2bkup82zSXN39BEt98CjBkT8LvBC2g7P2mRuAHEnb63ZfW7bWWKdyzxnXLUMYP4Fe6v4EMsj",
  "key23": "4b3GaUQogZTCMVZBPFabhBAzj7RRATJHY1VcabpeM4vb92Vhi3p7NaM8FzGNVyagg66bqmRJfmgYSG6hSmERtsEi",
  "key24": "4xMXYr6eHTfrvieVXWCxdmu4QFW1nimrKx31wnDzZJuqc3JsLocj2JYoZ7chpS8aaxWSePyCL4Zz52ZiMXUgrp1f",
  "key25": "582JUzojM9Z6CxFd7VAwTfC6v5nEegVB1sPeT3FTKh21Au6BCamdNwKsiQf5FVfnKWBy3cxRgMm8dgtZGt3eRn9J",
  "key26": "4tvGdFtSgTTRmQ7oY5uymtCPteyvnGkTxSNfPegj2PeAH8fpCnPBKR6NePZcVGoDSJmSKG4pSKuavZqqxsZUaHmy",
  "key27": "4qjWMuDNNWdNRj9Ku1ZqLi3ZMQsFn1gyhAvGK8XewJdsrsmiXP5EfLuGDKrhMETxxGYmq9NH5b2jnENMN2otcqS8",
  "key28": "tbRnrxH5MV5u1R5b4trF6nTp1hpNCSnBPttNnwenryDSr8PtWFrjavHCMauGPDKs5uGuvR6NUzHWEehch53LMGf",
  "key29": "5pQtdFSPwzWD5y61t1HY4riZtQvojukvLNrYj2JqtuatDZdc7ng55PPG9CKJDvUYGcU7HZzwRxGK4NaMkXTwp2HF",
  "key30": "4hdkj9Z9unSrfzQpg8Kn2aVWk4kjCQP44sfF5FmjTf2Q5VY4uesDbeVuodx97SXZwtbq4ZJsygmRThAfj7edBiU2",
  "key31": "zjp1J5D4yH5WWL46JJkYWx9vqHgamXSEmPRm9xB3xHwazT6dU332zyZWeXFrAFJ7eQPz8h47ooRxiCx2mQkJezz",
  "key32": "crZPaxA7N29tqyxSgM6eMpaS92Qw7P9QeFcQ6GV9S392NRCLvhE8GhD7n4SpM6kccLegH99SXG6mQnchgFevomc",
  "key33": "2zwVqEa6EnAGjZNJD74tLiFWa9jzn6L8zfWFkAhNwNmPtP8Fc245SjCkknNqE4eLFtQu7eizueFYJbtLs6RT7MbK",
  "key34": "224CGnqiLBeceFASrvr9pfbtJDtdAyiLn2twfXjwg6E2PZyZ5m8qjXdVsVKbx64Apaqz7KkA2JSvKppmTp8rCPYr",
  "key35": "2ad1FW95ywRQGpo63Ffzs7GotEDwSfqHiBBbqUJ7fFypoeT15i473JRjwj1YWk25z6jqTB5BmCkowtvM17cL8Zmh"
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
