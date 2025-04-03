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
    "538PEBaDHJULFzzZd7sigNyzeXiejwMPfjmDuQApeewGj9aHMRYEweyYCuYB5PKadtgBcx4Ys2jxdRTJPuXTjrkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YhEueRNzjwW12KaDPdZGpp7csX6itoZPfidJiMYZAbgnRvXDuVmXGdHYNPArqaD7PBUHLNW6zu1zM6uRwgi2f8u",
  "key1": "FQUrA5aTQTqfm2kWEwLuB4tsgim1vPTDtBcEaE5H73DyiYxFW6VcJzFWbeQxQmgUjstfDc6PzAG25vQnCZPPrV5",
  "key2": "WicG7ExpNvxqx6SiSUpgwa2A9dHqek2ktJXzqZ5gffExHF8dAcQdpGRoc79nnJJi4zPpNZtADAJMwcnCN1feZeA",
  "key3": "3NP3at38hBs3rj42e6awEBNcTpzGrB6h9rkzonYVESgtV5Mozv1BkozAevq5NkkuDuwK4wifCrHda94cA7GjbtSA",
  "key4": "4EqjPt8XoTWEGvKpqHkBcJmN7sKvMQdSmpFVTmKAzPLu1LkQWdE1y3QdCKkb8BCp92nyPnfuoJ6Mtoqu4VMJxVJS",
  "key5": "3gR6dCKJgKa6bFTWJiZS6r1GDgy7jKLTSEB1jNUpBSzAkdiuwQ4qPC6CzCN4Ej3PiQPVq2A9B6DGWfBjr54va2rK",
  "key6": "3iF5w9NMdRxqaHYdCPgLpnatEVWgy9PaSjQWpwF9VKPLPESYiXdRdwjD4wnyYLspMd1gGvmLHqYBoW7U2uUkwPtr",
  "key7": "56Pb8dduzkbhqLnraYf1xyw8FEZCrEroJkRmRErfQWRLtxND54Jj2hn218LT6UF8cqDCsBJBeZyT4DGRcky7sZBK",
  "key8": "c66F7JdyAPDToXGckaf7DoQtEttrV2N3GHEZteGnWGHYKBVtcjf7pbSZjpYmsFZ9g9BKEAdDUQ4zZtDbz6QToFi",
  "key9": "5uGc5b6Q9eqG93kbBWkmu954rZZ9HHUHbedbtMYsvpAwqzF2eBQUBCffF4Rs4rLuMemqPmry2JgGWDEYasKfg5EZ",
  "key10": "2HjJVrFvm9RTiQXwYT77VC7mgEYU7hNxYn4mRySiF969oAgJCtK9Xtm8cB6ZoCW4k3YhtQxc8CQWnQXPjK8Z8Rjy",
  "key11": "uwJhsU4Wr41yDAUhkApJyUUhiPB91u6qw4EQQA5LdVE93b3Dc2rnjmo653RuzpomPcdNEaEG64jXRZ7kJhCa6ir",
  "key12": "5WwXf7yMFsyT1ehpeKqRf1aGMSt9LnWjBz1SNhmc17xbmFWxN14sz4yR19jmVYQYgiXG6rPdSeHCuronTBS22FRk",
  "key13": "N1DjGyoinah5KqZS3qAsBH2mXQZWmuJY5WWGBLgde6W7EobJZxUDECfUx3g5VQoa9eruaZ5pTDJYGN6ZZVvmBoJ",
  "key14": "4yGXyM2gHA8r5KuRjy8iVogq5uHiymXssfQAiy2RuYKVoZ98qPpbBTF9NwwZiMdGZG63hbtc4bKfnv2HuHs5cmu9",
  "key15": "5AMHoXTWpLFVpLi5ELqkLjyYdkCaZYCVBS3BFNy7ACVazfDbGKhgy42Tnv5AMbCvQhd2JwtdkvwznQ7f2V6Fo6UU",
  "key16": "fg5hBu8DLnNM65DkVjAy6DQpjEzzNmc6r2ZxkGJ2eAttEWakQ3YZwNLZo7Smhh6gMMHUrpdN9SAsGcPhH4Dq6Aq",
  "key17": "41sg8k5MoBdS6nxY28Ybj3kecPcpEh5ie4TBa1iaoU3eHmQsuLrtrSsL4yh1aUpGJwJyZEofL3FdNfs3Ax5Z3SGp",
  "key18": "57miRi3onw5g6nGAR2PtQUJDJKDapFNCfBwcY7aY3B4Q6S6tZuDXHfEWWLy81YsoSKbtpZ5R6chw1zpb5SFfvJfh",
  "key19": "2e5DGKb2MgJoavDKr7QpYjFCggeDNXtWBZYhiQcEe6wtb1ZnruJ7T63nh2etGyBqZAyiUetjNqGGzeMbDizzdabN",
  "key20": "2TLwwrYpfb6dAhcepzdATHqe1HoGN7G1BtyXoBRrad76LzY448UUxUsJ3xzfrJ3hcoPUEkQkLQCEKbe3ZT7sqUxq",
  "key21": "3muLPaur5qvksmvroBY6nhNXRaJ2ie1cGVVSkWqKkxnWvh7eNq4DWvtKsXUUWtfctcCpQj5CkgrQ644g1RmXvz21",
  "key22": "4MhyvFjjwjtQpJe94XFhprMYpDtCDs81u4PFMg252hyABNNwhT13orYPvqEHMHnnfE29pTArwna8utx63q2J8A3p",
  "key23": "2NzxVCZNRhqougsZVNTeKfE7MhzxfrGjAqRVoW4FnP6pLCA7rSPj621ZsGNAdh3dp5kzMW1YELKxKwh6e2GPBgAW",
  "key24": "iYiHjHA9iyMLvd8syHPtsxNCEHdoeNMV96ebEG1tTmMeWagg58PXptYHLBfQHhiMmJTxCuTz36kQnK2tbkKJNE5",
  "key25": "1yXoGiBHi3PaBntEDfkmwyikEa7wkq5cbBzCY2xps43gR6AJKDkKd7S82jvj2km3CZkcotwW3bLXmmM2ExgHrkE",
  "key26": "2TnZucfTbeUMP7APH7AD7Sj8CQH92vcY5YqPkcEHrhLy3HTyZ2TvG7dFH6A19KwBG2dNy5g87xobLdGBJMoqLcgu",
  "key27": "7A1b45BGitvbb3YzRAVgz9w35NH1z5RWLnr2J3MxVd4u6B3Wd757JnDdk5d82Qmd9vHFMDaLhCrHYLwxvUWByUe",
  "key28": "5oWvQwFE8VZGwcG8zqRntsjH8eRybRmV9rwegjky15ffiJwLuWwCM7prV5h84c1SSYCyGTuQ92rjygQQHDYrdvaL",
  "key29": "35fbA8uzzXeAe6suukaMEeDvgK7oRocYDPZkhXSHn2CptnENxohW7qdJM1vbf1Rg5zpZWSjZxYL1FyZzwiPgsMVE",
  "key30": "2N3MgmdFazvDkqwtXRoFom7Wsqqw66XbYxmWWT4PjxpUZGSacQu7R2mhr5f2DUzgNMDDZdtsoEXmenHMfxyeS2Yz",
  "key31": "51MwxCkrkW1uaVfbGdXwCbCUoqRcNuiiSdRpy4EXySa6rr32hJ1jgUuVduWctN1QMGEbSagY5qBxZb7fkc674s4",
  "key32": "3NVQ7A2wpxbGcmpZFEarzofJrxfFRioyx4R6kc8nX8WWh7UG4bFxk8n6YHQQ7QqMjph4zgVh9VpgwN2uNqEyZVJb",
  "key33": "4qsdEZeorgZjLnMzwtbgNf7QeZA8ce8k6ec8E6FTWvE4WsqYpTp9rEiRd7tuwB3hs2Zvb1xSjBsoMi33bBekxP2H",
  "key34": "29bTDLLxRUMjGxVc1mBdBTV3J9cYdkWoYKVzvd2BXyToGjiSZoVhTNtbRwYQN7fbGnakR3EeZg71x4pN7cG4ECVk",
  "key35": "52k2D7LgYrwQ5wNrAfVSwqugob3tXs3K1XK9b8EQ4Fq1x7zJMYQtuKyzyd9mjDYaYDJ1ey5wyHFH7jhQrYN7Sxfo",
  "key36": "27uWPatzJNgj1JfBp5hVWKxoNw89KNR6Cai7pjvFpgsdbcGTKPNvCyCKLwL7b73UU8476x2RCsqZ5kNbx3PEeBhF",
  "key37": "2h5P32ujEFq24M6PyYYU1eZh7CCax2gP8PhSsGVbAUayvHWm65cbY7KSGp8jrj1o9g1rLK1JBFXgxmQdHAMxvRYG",
  "key38": "4QZXCcg3c1a4z4khQNpZAcpz6xudPuRiwg1qJtARXrGGVA8QuMgP1LraQutZ78MrXz2rjCzpGRiitwdspA5nKqTE"
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
