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
    "38apnsxfHNCGvMgyR6785V5WVKVD29gZTTYyTCaGHWfZgRBxt9mKJR13mtoy2Cwq9nNhWYegMHCBcUa7RmjpkbPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wzmTc52rXcLDkLWn48aQtaAVYyLgYstAniFFBgPV4UhAnrgTR5MWhwYdhhiHQhvwo5oLgT5vk93nCVGB3tXNEiC",
  "key1": "52KALKtbXP3tpq7HzmjgSCWc6fppGPDuSkqEb7EJ3P6yPEyvpzwjghtPziLHKee1hUbBt1Vvs56wANrBFkGsPoLc",
  "key2": "5ED5Yq9iDnfqmAFpKnrcs8mwdDWUyDhcSzz8DnFrg1SqnAuRhzJZsMBcVnbTVYkeLQS4gUEJtPxigCGt8SqVNE1f",
  "key3": "4crhqJvfUo6RYMfbHexFz8JvPFAdzWMiPNcTcpRHrVxdsMHpRGzYSmM8v6cVnAyLbrWTmj7b44muUhRJMPJbD4wR",
  "key4": "2Tr2EJX9qaKDc1KuMadLEiDYNCXviL7Fufj3FfvvBy5Hfv9b4MaMi6gyepDmP6D6ugjJjp5FiUZc4K7qkwyMEs7d",
  "key5": "5B47WYsTw8MNPPeLQ3wqq5AcnH6R7g1uJZN3eYZenoZL31hdZN6xp4DQLxUdirqENzVrx5SeUhwnDfukjPK5yzqj",
  "key6": "Yhjh6EXCFcNP12rccHs1xZUU75U9uyURw41PTLfhehmqCbotKkRMa3k22RFifRRGFLSyKXVtW9PfSqmPChutKSY",
  "key7": "ep15HmdrtjNNsFJoBb9iMdDypYfLKgH29NeyQtuxTcsefi6TXQVQw7qi4uREpFH5vfJEm74tEXjtQJG8LuSDFnX",
  "key8": "32T1MCGw6ZnKh9jrhqjHE6EzzL441xfyCQzURt1q5N3AQbJKdUgpmGToowi5DDEgMwtt5QUoMNTn1fBij8ppo9yW",
  "key9": "4iposvbBgqZ7Bg7hCKej6JSvyhF3UYmfqZVKLaATELuZZeRupxQAhqfmSGkBNyYs4MiTjzDnuiYVzuSdZNJcvwT7",
  "key10": "DQPoyQhmd85BQ4XqJBXT2CMbQmNzwdMzYHQ8hN7rQrTg3juj2LuWaJbrNVAqe5RdJ1zFeYFKyja5XWrwnfed2ry",
  "key11": "2iJajksp2FDHwyG4zwUmBytVbi8511YNC21wMFug3ECjdEk4fJPPnrMkhoFG2HujNtBXGeC4V34nVsbVTmz69wRo",
  "key12": "6GXy9sMbKqiVHyNNHXmqBRM2HYeacuMqQmbpn7EzjyBWCQp4LyNSTmEoXJwzEoix4iofyxRmM6iRi3QstDyYwLg",
  "key13": "2a3GADD6fZ6JvNxBVDJhpSYhvRHyQVRTPAoRewsSJQs47FmKWJfWuiVBbhNUr8HeHRXR6DxMxobsKjA3it4qGBbR",
  "key14": "2jANmj2n9aNtfWMHSXzPXZzHEs9RzVikiwjZhq18SoFQUnNN89TYVmV9F4Wr4q44oaxAwnqNd3vvDSvsXDGuf9xy",
  "key15": "2dSNuYXmYVG7KeVE94E3o86nfdDFPhy6XQpLnGYkxnTEhFjejarPBrLWyuJo5gh2jnCgMFuhpYn66Todu5pUhk5x",
  "key16": "2Q6MdAuorBMWCNtdH3JKFP7TDN2MumBvzNUCYRZz7Ymc61Lx2hrw51jMaVgvvLe4GJRitM7axUH5c1w7vZEfEsSw",
  "key17": "2M1DtmvyorxZrQgHBZ39JTrXUbhMx1ZNwjM8dwtf5idKD5wHRE6LPqqiWQgUQvyUWoKSjujawfoAKMQaiMMfFMpU",
  "key18": "XMJMuY4VTxARo4aKAXNP5CGDrJ1aLYuK4ruHV2mhRvXgZMpT6bZcoPu5ZKeiViSEpMHYkT39ChX3Zirj9pKtvep",
  "key19": "5NVczief2MGZM5KpZijukduJ6eVQx8bL1JvGV2kdZ7rMuBujpJitDs19GXjmBVkQomnoreF6u7RPQKCTPAjtzWSr",
  "key20": "4yFb1s3gsaDwbY5aT9RfrZxPLG1RVie7hdsc4zc9DjwnrueBMbReYBfBaAQJfH4xY7sqqh3zdLGeXsmA3xz6Xw2J",
  "key21": "2wa8dWQpsna5bfLahUxruHFwe81fLjfxhoxu2po2G57uVqfaNLGA2FLASJVELaHKxEE5WRAdJz98bSDPZC6XaHo4",
  "key22": "5nqC6X5dERPFNaF6iyHymJwHXtAUNtFdNiifi7LTsPDYQKeZ8EoAEoZKXzzuLsUipM3mYHDv7MpshCYs63ajFP36",
  "key23": "3P5q43n7G1VVt95aTu3SwG9JQz3fYp51tr5uXHWbuifALd7FDnh6SbDW5MozsN4WT2UDhE3BRnMNLh5BFvvvyi6q",
  "key24": "2W7jJgizXL9dLSdRVwWops77sEYcfeYNwamrwdiPGxwTpZwnRiPx4tdD5pU2f6wjukk66fMUDCanSKreiKBSFnqY",
  "key25": "3zmacUXqkC4CcouhUhnwUcn7SAKFpaaCphntpFQhfnAkQtkweAQaFWdk1SGMHVcc9zLFJvzhyEpLNBYhcEmUvHe6",
  "key26": "3HUPfck8DtSPkwxemewZhkvf41Lvg1r4mJqEijwu1P8SYqBFoHN4L341EhJFME6GbD68aMvsEek3WoktCFM4wxLg",
  "key27": "5EMFirTSoFZeuL7xpA3Rv1keHfw1vZSDGk2PbMCR6r5LJri2QHPstQt4UUG9dXUS1a8YEvxcci3zMDNZZ6fJPG7Y",
  "key28": "31Jp83HuYv2eBEPbP7HmzThz4wk21NZecaxW7YAzGsJP7h1CWEaxicRrE4yQ3LRPUf5Fi6wxb3488b1n1yFSCNmX",
  "key29": "4gbthnCm1nUnszeQJBFcvKr4aXKirnZ3Kaj2Qjq6ufrFyKr7RyMWo1jPa8SuPsyUy67SJKks3NmMHydMm2RcvUMC",
  "key30": "2DPxevA2LQ82CVDRGtRf7cMKgg9fb8xidJoq3C7eJmRmq4TU99q8fqqYPUaaL7UoYQ5tvKeTvhXTdeDJYSS4BCQh",
  "key31": "4MaQnVoTK8dwve8SFvJ8z1UtFWccQzG43YJTBm7zPkaWpFbYQ77H9esX5Yf3FuhodpNa1ScfJybdxdY7y1irzRKe",
  "key32": "3NX1vqhveMPDUhXsGMQmvCBgSuiR3UazTqCUhofyEbRzBkEAKbyRDkcTt5nu7jcHWjZEnSiQErMkxAApvxy8wXb9",
  "key33": "2YR3NoGVnns28eCjTt4H4uRFdACz9e7qFzi9sFT1nkLJQYyGDxxXCkCvstNnjmdvaXWEXepWY9zwkgdeosTNXpWw",
  "key34": "4PoibUebFMx8ZsM4VUAvr4ZqiY113wjfp9KK7dUx8gGat6gWjua9Sd8CKhe8bm6Pymyjc9CtEYCrvL17MieHdZGE",
  "key35": "4m29nywZ5wsUVmBFDuysXsmcFyXDGXgp93rfyCnns7RmTf9cFast3Fzrt6P7qXPc1hxipxY4mncH8EZ2nqLS4THU",
  "key36": "293QMxdoKgwKMwhUTktPqMxbDRPHQH1LLbDzuPvuHhBvz1yQoDHX5g2CZX9kiDizeis4qqXzPohHLy7wEPgqc5xn",
  "key37": "2etwnuXLgiwqYSgzZhz1QDMB71KcKtLbzggstHcU4aCtD2mW1vUjzuQAi74zMqazMFcHVkjyEBecKddnFc9DbQuu",
  "key38": "gUy94ox1SkwinSVaKgc9zcsrnJ3msoZ69Gku3gpdw42xyqRJK1ThrTP61QmXeTtERAPQoXcAymTdzKjdJfGuKvv",
  "key39": "5D6sZTYp7Rmphw239bXmkA5kTW82AmCVTMwtcCx8Mxdkfm56JuTZp9YueHaWxNFKGCgpJ2NvpgsYZgJajTQUA7Gr",
  "key40": "3JW8GAnJuL6hGyZisXJFQQ6dUHGmQa1vZRcSuJoLcCrJStqvZnBnXZbZvaMa35h3PYcKFtcqbpHjuck6usuxDa3n",
  "key41": "5spNg7UcruekpZnrwAsKzdNcgxw8B2VsnYJxSzdQEoHYNHvxB2WqXA4rrP2ViEprozDfy9HVP9TAs77StXVGYVR2",
  "key42": "WfX6jWtL88GUzZjDcAhudhxQEbT5izBEek6U43aYNnfL1AUxo2eZjmWV1bpQ346M3QYEdAx16KrEAKCLgwvG35C",
  "key43": "5q7Qd6HvW2Ytqc6RiX66E7dpraoxZTVgFQtfLPJY2U2HvZho82xDXqzRdS9HzD1Aba7YVESaYCxy7VgU4SkSKw1j"
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
