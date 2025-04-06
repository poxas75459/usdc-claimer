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
    "5da3jA9mKgzsJHQVB6qsZ9fo8ssLK8uQnYTkatMsVwwhv2kgasqvzpyTr5yjZc8VLEVuZsGbrMnQbpH5mdWkG4GZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26iVrBY6EMgrim4RMaLM5VJVWG5ciRUWUoxpcJ2qaDpR17UrxTdo2wb68aDjMxTsXsArYEZiLJeEfaiRTgZuDmyy",
  "key1": "4hZHbySxUUiZ3t6L4kiWtZfbzTfDKHR2UQWv6VFQZWXdTyA5GZAmvDTnwSYaYtLKNwE8BKVbVP9r3Rw7N9uYJ8Ju",
  "key2": "3SvsmJY3hHpf2cMmdKYArB1g2ADf7NDKEqFfnqMcVyZBbcZaNZJyJMCkZSSnctHZYhfyCuRrdvA8NzrarabWAKnv",
  "key3": "3SdaxjKviJ4BYFdUMpTyqfResuFLe4i9HABj3trqKEp5uyxVy9whZuX8k9UB714bNc8HgS9KSeaNspACYNVPGp2T",
  "key4": "3SuEnG5BunPHqLwJaVtJUr8sUYe3S62do1FmTof2v2Jcv3ioGVHz8mE5CYu9J2gThv1sTca1DhSNJytjJAEvGqCi",
  "key5": "2bk71ejPeQixWvLTM596vYxdce9jvNrqashjmgCaBakTZUcLD81CX5NEdawayUPatWLX7oXkm2wXUnNQQ3hBFP6z",
  "key6": "FQMgpdJ1j8QuMmFtmyo3nYtxZLdYLe8X3qF9SmR4zZF2SXpSNj5sCQFmnorvaLH7V6nCVnVWCYasfQZpVLFBmee",
  "key7": "2SzcoENLYeq4M3vf1EqqBwXrggTPXMQBUAcLtKvsBY316T6bLRUfukTAm33QpyHFKHXM4rgCZnG8GuX5X5NRgrHH",
  "key8": "3XXH2Cj7bWr8j6j1z1PxvcnDKDNotUYYLmpU6JAMBUn8hrLxkU9uGREhz5RzrN9Yem86XfeVjaomR956fkpnBmZv",
  "key9": "4ATmrwm2mCYQSsfaPXtMsPo6nSWCNaRk8MZ4fCxSKk7qB5XJVUtanvBPdddfhVmoSXhNtWrJ34ZEaWKBZ7zjUJ4e",
  "key10": "5QpjL73xe7pnJN1prmZnWj2jD8bjrxJp3fTzDgwVTaq3KPK8UmGvtaHsKLWMWzRZa8rovnzvH9GFRJXPs1mNjfQ6",
  "key11": "Xx8Y8j3c6m9xQGRu86kHehkekrx4ftjHknnHR3fz4nN1MfEiT4om4WwJmDrurQRgt6EaJLzT6d1sSnM3KSVJocu",
  "key12": "5hJR5nVBimanzdJtY9Z1LhgC4KyRSaogJ6iVdtX7vRYaxJxm3fhLUxnLc4iVgKChu2XFJej6Rns5Lz5JuC2zptAM",
  "key13": "5YyvjMqfTTmAASVhfuBpVfamxCC5fUY7QaCJJb4gZxCEAYWak12GGEGGdH9SkMwWpF9SajFNPiMaQ5KXTynsL3NG",
  "key14": "2Uevdpo2xgsZ7VEwpLYNmjQFrwa5HdiBNyEpvpXTVd4Bmwaa1pfSgqhuEqUyenwv8RdTSWE1t2GVoJfoBF1FYdEm",
  "key15": "5UQxbySokgpen1wRZc2pYe1CPLJeXtvhssnGJ4rtvJZbBG3oPHKQxHUNGCNdBninhxuHa5uRhYedq52Z51Gz8tXy",
  "key16": "23FtJ3sFSz6pvg3n2KVaA54mxeKAAfHwUd8TUDmw5U2HL6iTp5cDR8CF69PP8hG4i82dXFHRabk5H7fLoQJpzp4U",
  "key17": "5vUNAstXcgAmjbvFYTkCxe4QqAU1tQwVVX2DdKvpefJt6Zt7nPctJwhk8NkV9Bxp5ZwEXVAo6CW6u7VVD5FoSbhZ",
  "key18": "5DhsHRaPkdTL5rT9a3UxWJXq3QzrHFjMBKSKTThvv8HeY6gN3wV8rmxsHuXeEZDcdDW8uhHWqR9PkdsdMmW6j9fi",
  "key19": "2v15vyY4y1fzyxkPPPwMkvR1oZyLm4oqy3w3xukxUC2DbFv5BiEJf6C1dNWbDREt29tzB3Kbk1Q75nioC4oFekSc",
  "key20": "4HE7eYmuaxLchfzPJXbBd4ZagZqX9XNYBZyE7aAkCxc5jjcZNkN3qYsQ66FTXceW1sEtsRbe5WoVZ1BM5NqANaJr",
  "key21": "CydFvKsCmimSC4em6HmdEfudt7dKHw5dVoeaNr7XUHCGku1fGwLBaZPuK1STvV5qRJXGCrWrfdt9avA2Yt8voRJ",
  "key22": "4XhfegRzfttw2xpX79M8pnmTuC6kEkc8kw2u1bkPNJHFyzckfdnm1yxXPdNfi2vMXTLuTcRLsSJhwDRuGB32XBzv",
  "key23": "3ieskEuPcMda2KVpVi3HCFzwdMRo8pS2ToLKmN7hoEKaqKMRiUWHqJG3TL12xZEmifMBxpVS9THh4m1U4wVEmgxx",
  "key24": "pyEuKuTgGhLU4KB5tqxV2Zwv98ug3c9zj7jc916BNnG1WJ1pww2PeBhervXhg7kKx1HK85dbXFhqGMhWUhnkrtE",
  "key25": "3bCcmQspPN3rUK8pbZ8wK3Ksf4ryZfJjfyFPB6kJPvxyYwvuNzCrMiXR8QwCNtiLKoxLGpUGPv88JEM2UioU8H9e",
  "key26": "3Pvgr9AUwSJqqNWJDGmY4HzqyTHZQHdDc8EzAs1HL76v2uDeVh2RzP2HtG4pJ9Kpcg1v5a2a2qibaq13jg5jySDA",
  "key27": "5UA3Qfh6kdy4XHbyAgw8HLeo4Ye8ztV98NAnXoTWqFKvMZ1uk5q4tcjitDsPnEZF7myKetJoXrdLN8h1GApTZdh8",
  "key28": "5LqtiZJsNo6NkymHHajft39BRj36ftkgV2x1BmJd9ss5aqsw6bq9Ww2qp5RMJZ7eLpwoZXhTfD6y6oNCtoxMDiDR",
  "key29": "2KZQp47wH4G4ZEUjMG7hCYtWPoE9jmZtbquvCvHv1X6NmiTvB3puKf6XLQjELJ7bsXcahSYVousP5BMSNhN1pSAV",
  "key30": "2q8GPBd69Xpf4HpZfQmD4v97KNd6ArH4fLcqXqkd3zWrC6QtyLfkVviazfnCx9aQF9uK6hjXncZbF8HKs81CSuSP",
  "key31": "5ejdSTEBbZEfCpaTCCK5kQqqXLJYCrXu2xjCepDcYYkvLhfPUqR1PyvMzcBPmLACbfYS2zFpUdnXzPYDj4xKWLk7",
  "key32": "3ak2ZSmrYzoCz7iwLL68AvhXyqij9zJ8n3DTrJkeSbz4xtjoWE6fHJHg1eX3FKCiiy3xzZe7QZ7ivodtQyXJQVng",
  "key33": "3TNUCKLjEK71VYtxDJbzhrSSWj8vRbNRhor4L4G5tu2murzQum3WYu71M5errj3xaHnPLmh1aMLo966NgHosDCP9",
  "key34": "4b5qCyVywbrcoKZhXwtRYH6XfkTsfJCWLhe9ahUJGUPPTXMEJMtTo3dfh6dD3Kb4vTQ32qToF1HXpbYWvkWSJqmF"
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
