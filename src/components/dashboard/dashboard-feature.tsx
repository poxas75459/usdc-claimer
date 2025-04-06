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
    "67VZjN3MA87sS76ZRG1QWof1s3x4pJhTofyoSjrY6E7Z3dPvAYbcD4voaVSDYZnF9u4xaSfNv7186PuSVJ5TjUm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZpaFVC2NW9sFeaXcou9TzpNYALoExjzMyK7xEmGP1kZfYRcunvNa6B8DTQ9iuz5J5ZCwunrkizikPQY9DnzcYhd",
  "key1": "4rkxjDDGWt1GKtNv725cvR7nY7upTBJHpuykWbrSz7QZGet8V3ZZ3Eundz3mAn7W1M1SGBoHBnQ6DXTLoY2pmo1p",
  "key2": "4ojareMRHiUpiMR9yHMo8td5QG9kK4hWqSatWXN4SskuWkgycoDW5wABDW2PZXx2w6zAgEARj33e7TWbgmAaubdZ",
  "key3": "2VFWppAvc4b5BPbQDdEizcm7BcuawJv59LGVyRLGLDpz6awr4Fcz2oE4B9VPd3eEL5pmQj65ARqBvCGuXcFq1ycZ",
  "key4": "9NunVLpwqpzXCm9JtcLH6YQqVrrqq9QvDbP5PCYjFS8ayZuatymNh3XjzuV9QSmiFKaTFNJw7Rm4NqPzYeMtWJQ",
  "key5": "2s8RbDVdKUbakLadvEpLhgiRN3HrjUyWH7idF5ppmCWcKA174YXWJwdS4bPRVh19HMTzEGc7bgGr7t1hS9iKM71c",
  "key6": "3hTdkf25dinwuy15hR2ahzMyApfJru7bFaBWUoxEDfi3rNQbMoBWzS1DYcQKKoJAsUkyh9NgKcwsn4F6yBgmpeXY",
  "key7": "5yCRhVGdUAJdmT3VMYd8Dx25un6NiNZB3T83SMiMyX2BEhVR2qcAbMKgyh6boZEtzid3jJ6xA2MS5QG9AAXV8mKz",
  "key8": "59GU1frCSt5DqUPLQbMbDw1BbeTdjEXncbrc8S2rHhwAcDxqdRzq3Gt82QcSUhNeYUvy9TNzqZcAaCo6WCy8n9uV",
  "key9": "3bWP4mAQEef1kVH8phobhk7DBHf6cPttBSFEjzCXRwTp2R2oAvaFrsxoyBPqMntCjWx7iRRDR6ufmPB3X8CpvKw",
  "key10": "Gtd5ybJUJ76FBP7d3dwwDFE5DjS21zGhrUacn6Zes6cERriWbhzeWPxRQXbdzQN39EHTGJU3jULUAsKeHQeqdwy",
  "key11": "1LJiJowMdc7gk1fSkuPfYQESS5NvwJfMRzaU6jHSXSRUV3GWpaFeeGvgngPsvSGb18cTUCs35rvM75YfvMP1y3K",
  "key12": "55RyR2THQ9G97gYBLMgW41y27sgXLDtU7b9Y3PDcQLx5AwwqWV7cv7RVFfqNgrK7fTDJ2qGSJaFg7dPvpgezhmLs",
  "key13": "26Fz9QwFNdfAmfzVb9h3XwSDWXYG3JF9rrV1AADx6x9E29wxBnsdCTvYuoh3jzqy4JDZ5dWCP1NoHeKihwEQ1odM",
  "key14": "P6hsBrDFD9X5CRdCcCeLURmRQyPZuzcTfNxsMCmisPuY15YfbveVyo7r1s6R1ByToqJ55YEckBTPtwCpWq7BXsE",
  "key15": "237hm3Cz8W8KpkoKMK5vH9Lhn7WcJzCuHuJx4ttEmVt3AUW7hgZiaQSTSuBjgKKWNwJRLs6RvHJS1MAtCKkvcvBq",
  "key16": "3NqbTkMuYGWQzi9zUHBx8VyueTFa5dNDJcPysCwtnh9mTbBb9vbE6ptcswcdrhh4ap6KkAUEkj6rKXVc3AX6UoHw",
  "key17": "4ZVCvEWW93ZUuFnfsmAtZKQUeqprytt7DwPqroiEgVECfJwo8Sn8w6w6f244RshhnMtxH2HqZu1MRzDr2eCKQfKR",
  "key18": "4gBm8k93rFc8NLE3T1fKk9M5Z5xxuFkS4kQr2Z5CDdRisPcSpfkAmjXL2GFuMzaQhoSmjDFdXuES5ouCxXABJPBC",
  "key19": "2YuthT8BLLz9UyGibmutDAaAe6KdeBCasq8ASykoKDmJvYktYsbFpscnXXA2ucogyDyTB2aMby2U5C3gjxHCvnGL",
  "key20": "5YeAQ1xHqQdxpYWMocLzeVxaGYMB21LfXudgkHxPRx9yXx9VVCgFXW77n9APrP3RGbSNrcvQFWQitjF3kSRhgMu8",
  "key21": "5kWvhC1UaQJ36vSK3wdjh3Fw965BRaMTGFBdmib4VCwLiTFvLiiTjtpfGGXz9pVtfkxX5DnXFa338o77QQ7bfFhp",
  "key22": "2JTC4oe9bYLTdNndZYiXCdHCeA1HK35ABzCcLJPhDgLbBWtJcerCCNZ8jyz7Sx4QqaZ1M7JYBQZvZ3kX8YzpzkMM",
  "key23": "e1ytp7De2jr9hy64KpGmhEKh4pEx8UuWLsSXU4sXABSTYmTKQHgWGSXx4aJBc5YdTpnBTyrom1cBZ9Az2Ay4bAa",
  "key24": "4v6kVPShwiTYpsQhTfXv8pSBriogpf6ELiufY9gDtXmPJJ6Uxd1XN9QvZvyTm6gKgttBEm2h2raojs5F95esBrDm",
  "key25": "3BiFhhWFRvEVntNweZhzdWK5JZLFj9XN8Ym4oD8Uah5U8qfX5yDqHSfAQwuCBJ7YPQ7EkmTJhwP25bby8JNvLGgS",
  "key26": "5BFcetFikR8ZBXWYRU6SDZXW9hfsFY3Mm5KfcnAXFTvJXL8t4dPTti8fVGbBzh8FzQK2p6A9HFb6U43dTkPpdBoE",
  "key27": "4JV4NPvZ676spDGi1GYnyyfDYw4svRdvAAJAktK2VAXXEegg5iAYqK4H33accYBGdKbj3ugR8fUQTgUJhsNHASFx",
  "key28": "5fWMJcJTuX5VHVUUyjsAHYHWcWsHBqZrBgtEGQDvMRBGNCw8KChuerrZmamTn9YqZNV87eiA4bqHAf8i136VnnAs",
  "key29": "3J2srkuProWVoQnyyLiY9DDzroHuDTy8APZ2uMAwvCrtTy3Ewd5thTbsYNyJxhKgfHVvdgN6fnv6SVofTKcppRS5",
  "key30": "2ZqvfEitkwEbEw6JZpCQZFD3Yo7PBcvBTvKJ7UDMezzPXhG4d1mfdCzMwo8B3joyzoBmETXAzUJtJadH5Lbff838",
  "key31": "4ZXD5ELMdKRdffBM7WMg5zvaE9LTN8dFPGNWK1JkndnXVqGEdRBUC8LP1qwyLt5LbSpAMrr4zATR4wMPGzNjBsPC"
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
