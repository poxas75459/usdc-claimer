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
    "nfpqQ652wwxJRk9LpicMHSYYDJpHLzTdHVn3Ln4DdAc14FTH6ZJo8d4g8fuXEBA3u5AnFgmmrBdFAr3yiVy1AnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zr6TDUXBdXuwf4RrpPHbZG8VAMp9AsZNDYetQid27FqiwrWqa2du6nuTH99t7ZtzVrA2sPzXfMAQvaFdwQBUuPr",
  "key1": "3qdQWiUmbg12Fu5V1uVn3mULMKnGXFRPAK1a6Lph2dQCvHVVmyFqEndMoabvyr2o3hFW7vHabFbQKJ9FJwFboYAp",
  "key2": "61C5NWDexL87j5nXcKhxwNqSR1zSdhDGfxCRwKsaYoRv2YVDRza5B6LBXLN6Pe6tSP5DiPyVXkkJFrAGhDivPYwb",
  "key3": "bcKFaGZ5wdZkSCVCDGh2499yxaPNJb6Ssc29SSi57RbwTZzSzY5kMWeHDWmzaFVG4Vc45E2GtYcse76C2pqVxU4",
  "key4": "4UPZbFd6xrF9qbKPU6pG8aHh2cU8WDkuYES29ZB5ocXp3FYWvfNryhLWzgncjysNXzHHTYBiTMnDFCnnLguK6KFc",
  "key5": "R2PsR92RxFXhfUTfDL1mbeAoBWjeULm7vwBdU7C9oEJqjMDkXSXA8qbHSUoW3AnQDUYudCkm9cJbc5CUYLEpAPY",
  "key6": "7vJCuveyT51jn4cYKQGHPvVFALP9TckJDDKAG8hBPgvuzwoyyu1yD9HiDS3Dnt58XZvmdGmLff1FY8HYtThUKcW",
  "key7": "5qdGQtZZeDSfWo5xjW21uV8w6Px3V2i2psBfLnu2ves9aAQ8ZnCtfGcUm7JH38cF19Xc2Wi9mx9S3cbNhdohRBSE",
  "key8": "5vhTxkQi6yYrFncaks7iXETspzNsvW7o17JXuT3GEYm9QPUUqoktnfwDSHpxEnWVCyuz4M8FtcWyyTbaHgAUj5zb",
  "key9": "4t3ZvdV4WLVhthuKS8FQxxfWrNEbo57hx2EQmod3HyDnD4d9MTuF4qQXuXnzZDBZrhqtj8puBFpyNEn1VbqT1CVG",
  "key10": "3pTKyxradK47qwYPrXMmboemH6rcwTugxD9SW8CBav7U2FDueqBpbfduZWqRnCvhYSCLXaWdrnVZaDra71Su8iua",
  "key11": "5oAcp5bK2ZAXKXe63xvm5VTou8GNwUqFondG74uuNitF8hRQz6DL9JSMeDEmN28c4mQSEbFVQJ561CzSm4wcds5t",
  "key12": "2yieMU8RorvkhpQFmwQ9WFWr4pU93sZU5h5tt6Z2hP5eEHhpYKmLLPQTFVPhgzJ4G7obRP9HcxngnVecsypA51TS",
  "key13": "2MzzZig1WjhHzuJDNeLV6ndXSMUycqRm2gHPRCbQ6yn66Tsg2ArxWnZd3m6N9Uq8qp8NUBd4LR7YWz38HfapR5dN",
  "key14": "5soqDHX1vYaJ2zjLRjW4NHLxxfjSUFXK67kJECt3N77kyVf9yDpQFBWFh8RTCY78FMH6mLyzYBp6vFS3khGSUJZ4",
  "key15": "3PFHgTDoumfz5TRkBaw7AbBq15XcTmxNtq4Zet4TPrAi5UiGcxEmpdGugc8teFgmBoLipHMNj6ntVVzkc4B5c5M",
  "key16": "57iSCnqZnmJ4DiB3sSmhDrkx3DyVqy73HkrC54s6ZGBEaERWz4KG5YZaEJoKkn5Swx3Jbgw9yNjwLnojqcu4NdG4",
  "key17": "3t3GhkfKwn2bGwW6zXr1QdWqhbgXgeyXkZ24S9SKvq2299bKMpS93NBF4oSMpcRHqjy5WUFNhDm3L5oZZyT411Fs",
  "key18": "64Fsi3hjqJ3BReTYGzyyrCoATM9kqcbBamJGKWiTbg21N4rxogQLwawh2tGZCmrcjzETaX1FRQnyQ489R5r1afPF",
  "key19": "2vmiRF7z5rzGRVE6LtuARcsE8xhpPtcqPZE2MNiLJap2fgssCwjPaXaKhCSJtz4MiA6c1AwX615DuRJkuXUtGCBR",
  "key20": "qwwHMv8tKVMDujvN474FpF1sf4n2aMr4N68RiivGqB4ZuhpsRAKG4RHKkUHGjqTLSmpJQB5wRnvLgK6EjxTTJzj",
  "key21": "SCYPACQuB7DK7s9dRdhJgWefjy6DYDyyX26F4y61WkKgkcT7hdSnQtKYFhfGgLkfsZvCvqdbg7oVzYAzjr73obt",
  "key22": "5iy787R9BGodTuRTXNdE6DM9LJB3PetC2J31n1dTi5Pz4oJQCpcGpyeYLMrvFKBKVWBtkmgiPgpkMXrfxS5vizq9",
  "key23": "2uDSDUwX5UAhrbDTLJ1U7XTTdsQHRrs9ZYGVaTSoEp96FRsVebAgMgP7zVfvo9EwWzteCkTKcyZQw8wy1BnmZbKd",
  "key24": "43bG5PsSsLbnUyQCZFT43kSnN3urEyS3gd5f6hhDc9cf6wjaKZ3fS9mwrhVVZTHxGEXj3DKQBr3YC9NkSkeme3nc",
  "key25": "2UTSHyFVSXpMr8fQpjNf6SfyvbEo1PUs8zL6LVdgdowphwRoZaHeRvr77fEkAwZZA3jgToCv5qE5fh7eT51yJeUE",
  "key26": "4w2EZVLxuf3kh24L8t1XLVh6jn9UQhgyVTuHrsGmTajWaKwfwAFZSiDNZiiFJS5i3PkThrB2PhQNtbCxi5tw45uj",
  "key27": "SsqBnzhoQTVFEggo9tYgospSUuj93u8ATc9b8wspRLgYXrBEwrM7pRxuGbSpz3MQKpsh41qT6CUw8mUX8jg1utT",
  "key28": "yQiY9hPNA8iEERqxi1YBimoxbj5pK5g6GCDq363KoPTMyhv3S1m8mGLwG1rWNPAzhe7sW7if5PiRbmM5ezdgVfx",
  "key29": "2NtKg5DfztJ1Xs1wzN7EKnofSnNSD8xY6x3J16zCBSoPKPBaUUkUR3eTum2AdSPx8aAYzSHvabyfuHJ8KNDadM4X",
  "key30": "5bZgTwmLyD8vXP9ok4Z5eTDzAiqtnBkzKPffQBsTpzxZPhpaMkaeDxZuVNT8qeHB62tELCUXsk8NA9hHtdJHrsGt",
  "key31": "4FZY25k5se19QcydbQomiUSRFx1RQVvAFzcDxMUo9sAYG7sKCrPZRFv2eUHe5JJ2oq2Jfrd1KjET9drKu7zjAWbj",
  "key32": "257gxBhHiueZP9WJ7U62MjVrg7QoaZPZQ9gTLaAHEjmFp8n6whXdaEKyiBhfMihkYEWC79Z3CYChZvQh9zaVJuZp"
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
