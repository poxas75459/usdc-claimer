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
    "3u4VMftNYnTajSgrBxpNTYQTJe89fFAKJqXCjwbYFGCwxQcBrFJpYwWZ5JZ3z924km7weoS491hD6PnsxtPjKevq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28mVJg6WBv5jrdXZK7QA1aSmG2ekXbbpTdBWQmPvrTn3dfzfDL2aEGdAjodSoCB9f4oLdsgy2V1V9F7BHU1R5Fd2",
  "key1": "5XsMUfYTxsS1ZSAVb5eiKhXmb9Huoso1kJBuppT5myjfedCrkFpZEwkPUtZp7JJbiUYbaNbLAv4o4NYZ7jtNtdWf",
  "key2": "4wZRiYgGWCxRz7KodeJ83M4btNLLAZZwcZsx2QQoP8tsVn1t75Ytoy5fMtBM6yueh9tWtdu21THfyXPENWb61usJ",
  "key3": "66goyWEDrfj12dkrbtMsHYJKehhJ7iqDQEExXkG25muj4pyoik1mhRo29BHJREamCbgZUvqdx62Tfva7x4FuBrg9",
  "key4": "K67sigMuMq3BAP91viLvXZFVS6MvRViMf4fvLeNDYiKqR3dfcVB545o5KbzUVMmu75ZwXxvicdnXmoEfFW5qKx1",
  "key5": "5L5WvqbEsYMLHoeCJ8MzrAbSzLmvCyk5Sq6yzLwHHqSUhaUQoeM6RQR2pF32uFn5pRhePYxxYGpQwVVTAxPx2mhY",
  "key6": "ECx51GX2byac5VJafppCAUoW611SkMFzny5pMxLGC9BoJXfeYQKZe7RnHHNM8prucFoZVSva3uykFncvB74YkWY",
  "key7": "3tiwf3vxSx9zXB9E9imJCZZ93qtWpq4tPSyKwvNvixDMjqbGRsFejq8bX9CsEKqPwFasVpEdxU4DebB3pcQs9D1Z",
  "key8": "3JNH4w9fioACDSFunYYMGMKGZdrevie2DCd5cjku8E5RMRbAQzL1DTgCJ8sSo3q3SM6tygZuS7mxW8fSxvUL4Ggj",
  "key9": "2Lw1D5qKiVbNmkrekwSNii9GNDm1DurUEZxoUniTdjbAp3kq9fuEfU9vsJMR5CbYnGaWWjZ2GiBFU1pF855eYdKc",
  "key10": "3xTMvWwXQ2ty3eJdWx6vHYmhDN16nM18H8GCitWq8VSGSaSYTTmDfmM1KWuzmUco2Bk64b1GTv7hTjJAMP5s1wKd",
  "key11": "23PzzseNBPGBNhRMAXbhyjHDJBpgFf15bx3TjGVZd6KFkH3jSPqQR53BJhXHFXMYHeQuEx8JJUBHdRRqS3U4o8jx",
  "key12": "29nk6yH2QiWPUcbuJjEo9WAVYC881uRRx2oarzbkcXxDJoWMsdYMj8jYmLEJbufjbxxNrDETpmN7DeFQhHSqngW3",
  "key13": "BJJfFShPu7W1b5uH14X2EYNkJcfPiRR4mjJKUfFHw5aBycD6HG8Ac2GC6Namdq9FsT6X8STeazBiTzThkJhju61",
  "key14": "4ZqHG9dybTP731SDzdWPRQCxkG4Rc6yeY5qz5ZAWSE1rTdnDJ8tfVNGJumnSoLnvm1shBdA7N4yVbVHKNNEkmkQW",
  "key15": "5rjwPQH4JGbyEcZn5SiE2dCAR57ZkfQa8XCrVNbyedFgmEhsTRiF4RinqFeBUuu29Ts5xG93Wjf9bRzTXU1ks8d1",
  "key16": "5XzdFAAfkxtFLp8a7EUbXb6ukHMDqXE5KcnFv9Ltkm6NCVdLbKgatFquK9YmXhbZa3bxLYj6xUhGRr27vdBeKzx4",
  "key17": "TrXZnNnGuq9GPE9Lpv8R7WatdPFci1EiDLni9jeBERt4AyBpuMnyw84PgnQusePeUXfsC8k7KEKJFEktGSDFXcV",
  "key18": "4WP9paANy1RLsKG5YjXquh9mn2J5bVXfgJ4wYJwEuUoU3fWCST2hBc48ADAYEJb998wJFWKc45nZm1HDDHDZuPhA",
  "key19": "5hrtbSbsSwyPihrNxq7ub8pFkmipTUodjqNpdM1pCcwfgbgiknyKkzwf2qrswbFiJcxFoPXtE9csD4SSYxvFAPGy",
  "key20": "426aLU8YYFsSSnq1FsDsSJZUs8SQ1nNhfd5HGU3RP41Jvu8aij3AHsH5T5UxTFTzQ7zWkHQZygtf6JBsj4JkFuoM",
  "key21": "3ySwszh5LYn2Srrd8XoiLd6VzhJNJqo5yce5yrf1hqaiE5Ub3535rk7J9AEVWhuJvjCb1GB7HH4udMpC46zNmwjw",
  "key22": "CSTgerfTcuc56LgeRstCgi2CT2gF2X1RNvWzHDn5tzCy5GtgwPE3VwYsrbqZzmfxNznoz8qC7xix1n6M5uDHj8p",
  "key23": "4xbRsbSHVm5qd2QtVZQJja1KusCTfUhxFHYZdKmofwPd543c2NdHPAMhT3ijCEt5ns3iudjq8Jcorgz9ZjsARUNp",
  "key24": "4RAjkYvAzCvjL4WtjdkK3aKGY8d8MuoUtM79FDCUkQUXUDv4qiQT3qEzphKmopJR3ay4n5fVp4Jq99qy6oCz9HDW"
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
