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
    "2zv8iVJwF8eQUMv4B3VDSFpHn3yTAp1WCVKFmbVd6bbCv4pih7WGefLBWnzb32t6aQRDnsrdn8BMSpjxwL4heCEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2dUkBmgpNhWaKo9bTcEhycMKGE6jTRAftyviyGVZRNxBv6nErW7baBQxiohX3ECQdxpKRKqSd8kWiapUXWkdJ4",
  "key1": "4DGBrssGM8GhuFvcsxQYaZhS9DcPxhakXAfbafNvqHDKMFbLVfPSSvuSdSuEjHcpc4kZMLZFb6CBFSZruUAo52Gm",
  "key2": "WqW8aL3e5QUpzMVmaimiVwBexjxGVQQvpv1WfmiqF76xHfwCoAfN4PHMPoYwE86JY78ZsXxUcytJLVxQeQspnDY",
  "key3": "3byJbH68sod2ei1mMkn6SQTN1HdcKH1zJAwmojq6ueProR9TAVqB4tqGXuazMPWy4HcyHweSG4CWYZRq3oWUz2yT",
  "key4": "4pSNKcTKLagEyhruUTqspSwxcz2gvMjFmgRy6HvLtXG3j8Wy9Y3ANUkizVUDiJfGi5wiZLHzNH4bwjpPaEm3RkWN",
  "key5": "iPt7N7sENLSASvFqhv8w6ZLTUSGPj3hiG5oqCA4rSqw7rTD5E4bi1dKPmcZ7DNcdQB2cArGiEZbAoqqUyvv8h2C",
  "key6": "3yiYEq7h2LTLuENojmjsxueze9NNb4GVf84qyizK7P7Dym3HAAR28qJErKWFtJN6fZcFfKvUcP8vbG2NBsgHZqxJ",
  "key7": "2uwVjMmqwdZ88mytV7pvTsr6us9ixAuxBsEaXSQ1jj7opmGxPkhtTRVqHjnFJEJB87CTcqgS8n9RGy1trwCPM8nt",
  "key8": "2kZoCkaaLeFjXnoUtVqPKBKMwJAcDKqSJVojqF19VVfEiXfWaaQCpc5xawem3RUacMEzyzKx5Bh6k2whAwECwM2s",
  "key9": "5YovdDASJmiCfmshDYeXss7bLqTvRDx8XmG8F6q4kgAro9eoSFF8Lnnc1yEjkKicZQ4ph5Dyeodcgvp9vAy8fLvr",
  "key10": "4ok349GX2gaxViMUtySU5eKYes1trQ7DexpTz7uA4KzbAsMqMxpzbTfapqMBAN5bPrdwPA6VHKfrn8ReZf89HeQU",
  "key11": "4d5A4X65Je2YtnMzuivxfBR5EYBAAaYV86AWWAftpBoY6GSD2dFxUm6hQG4d2vEBgAPJvDJQuyYZHxRr9TbZCnh6",
  "key12": "63jAxJPArYvj2ctfZHCsogVtxsVaFoarsEkDXqJLN3LRbADf9D55CuQCznFchfr8yHMFkf7yFiZGyrpqEHaoz6Bu",
  "key13": "2bLbA2pmrYibTAVLqRcq8zypXT8UUNvHeiwUMwJT4yekAYzSwzQsYDtiEoYSJqei6cxTxdiduCUmWLPcsMd9gZ1v",
  "key14": "3kw8RJJWx5cwe75quuPs3iNNPWctN3ynKwRbTNyn6VuuAqDyvTYnmStKqVp9qFKmekdU2Ft7S6hgWrBjqRRfwuYJ",
  "key15": "2J91U6bXWZwxzkVDEw3YRSfUmSBay77s6nh1DzWrNUYgkxjsgY3oEpVcN2uxrHak1s3jSmwTcs3211KDhRjh4JUw",
  "key16": "Y9ZxkHNsUV7Tx1EUcZr2pw5khVGW3sPQouMqSasBkiHD4rQ8UeaH3fpCh92RTtfpuKPwSgjwp8GzqMHwiWmYqac",
  "key17": "3x4ZoRtcHDszuZ2ZKNsqrXprTS5LGrpj7PE3UZ3KKrDMcDHBkUSkerTzjWLr1KLsBgsdVnPEdifiZo9tgew8nL9K",
  "key18": "4HKjBeKnMxqsoMVitN5v58YZuNa2jw9AAnJfHw2q3vsC8m1t88nAxXA5e27MRavjwvY862ypeBG1CdJbbRKHkZY6",
  "key19": "368Fprc7f4Ft2ewtGfhbeRi14DaVqsxCiZULxjoGHkcLbtSBxU53fHz52MrLkFv6uenAreBBCZN3LxKTvhePH7jN",
  "key20": "41AEnfrdLFPPfutKYzMroqqF6hJh2sfoNLaDyYSwH9L9Rataz8AsJ47cpGdkighi6WzjLiAHGiA9Wp3v5NxbAp7Q",
  "key21": "3QDp2QhTxnFQF17tkDXkFzQs15F2iJps6wEiWUNxPUcTGqfTWWUGjzzGJLSUAc6QnWNyjdhGo9X59UDcMC6Kzy1C",
  "key22": "5hmPFyC36kqaDreqPMatgpRhWZEs6ss6A4CavRLyFCJVFJBGT8Mrma1RpDZG9W7Ys2m3Sfh81gdA4CsUNsJnHqY6",
  "key23": "eCd6jPZVArXKxhHFoRDENn41238mEYsN32mnohvaHCyGVwMtTz2Jc5n43q3NhKc7FfkLzYV9GcLVjjUj2ScLN8r",
  "key24": "2vteP1HbgQhKEo1vzBXymb1ijFwAiawWWU9QRjNkbFYoQY5jtMGPNF1CxhVwvN4emGMPVdGtZrWAXsupxvLWdvck",
  "key25": "2ZJ7UaTeoMMbprmwe1p5Yz67zLRUibwPJbZmkV6M5zDPLsFJZwNhZ5YV7bSzz7iVM4yfjkSWqDDVpa7p6Sj64PUz",
  "key26": "W2zrrhtocft1C73Bout1w51AXhjN7Q7zv3C6ckaV9jsiJY6hCzy2oK1whPf3dcR4xMTFLK68q7WawDGpcfR2pH5"
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
