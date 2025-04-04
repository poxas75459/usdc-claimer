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
    "3T3oxfsTPzYr8xXJ8ye2Fj9cZrfe8S2oTGGTEH89yAEQE4wCNXqS6etUPXfv66iTBmENmq4yZ5B4g5gStHRULaAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T7rt8QQBdDSSLwrfehbZesDPwSYKdwxUqWtezFKpGFLJdrVi4LmFRafjKvMYFPBdpwhCEguZM44RnZQxreQumF4",
  "key1": "BpkeCBJ3igsBZAkUk6N1VLcwQMiZA98okn3gApjRB9MAxxe7AqiL2sR7SLhiM1iZJus6QmQn2Cg3VTNXCuEbFh2",
  "key2": "2Sz35wsoY2DeJNXLsZN6nzfHrjFmnaQcHoyrd5bDHejFbGtQgju9EgvGpKFZvNrnZZLw4goSq7P6jdf8ovSWdsvf",
  "key3": "4BZaRH736gx8riThexwbn26BSdkZbCng6m8DJfT78i8KCVBzC1rCWVG8ZyMjwJan4m47vW4VtHsW5JN6B9dsuhhf",
  "key4": "42Kp5Up8wMyDuvqno7foMZ4G7emcnoixtMYeamqvPersqXVQ8TkBpm9LPmAKGN88wU69knF4PeoSgphqc3VLfJqC",
  "key5": "C4h1sWR6tZt5McrJkJ8mANw72Qrix9v86dESs6nL9UL3fLbFJeXjvDbqpfm2hhUrXgUJicEbDos9qTrAQexHEZ6",
  "key6": "B6LHKtRUF9JzQFCpnT4foGUcMMNMmvuZzBxcJFo9wEvtDRDtHZCptMQJN1GpcdigFdD9wcTCpRiuXmHYE9V9XER",
  "key7": "4ikrNbqafaYqcmSQ4yLTn5xXZBpgk5HPb2nvWRk7o6k5nevsaVikDequBtxw4KYKjbPLYo5KiXMcAs9zvU1cwfTn",
  "key8": "JGGF677Jg6sttnDGZJYwbTqvu172GNpfzyc5jZZxYJhA8rnXTg1agMVru8TXKDALBRuZgC2D1nzSZya2k61r2JE",
  "key9": "4QeGVPomc4mCHA9SU7QTjE822Rquta54F2EMrCA3FqXZrCwejC1eqYMrmMu7oeZXeKZJgCsR3MmCHuqwCBsCpgjk",
  "key10": "4qJhcAqA9yM82HYJKHefHtTh2kwTGY6bWGttX3jJkCQRJGJzei3VapwxkHJFx8VUGW2XLPCC55ZyVLVrQCiaSse8",
  "key11": "49Wcu7LJi8jh3itdietWuds6zkDccJCvqcy97nHKXqaa3XXRBYebNhLLTWA8JnMz4UJDC5TDdoBSBG6TvgNf1ddf",
  "key12": "47gdqvEXrFZgKCVKtvt9Y39A7bNrFYsr1VgUoZjR6iFmaN1Ad7vb1MF28Y1Mfc6XsY64qFFz2K8NgjaeYYxCVQrV",
  "key13": "65wUdNq8XU5AF4eAmxWpc9mmKRSvf2wnEVrQkZDdha5LtdBQWjpBfkZqCeP1z9sPx8pzdtUCnTTdU9b1HRTHpPK3",
  "key14": "HHf6omSeQ42FtqTsyDLYPryyqMKfmZqrUFjnnx7vWraz6MNa9hfZ9JHVkEaviDCMU7DWFSPsw1joC9KtqQbSYdM",
  "key15": "3qNTBqRucSTXE8hzVSP3aYzy7JKBQsEMoJH7skaXojD9UbrSXKVCdePeuxJsSjduHzjUXqnFmNrg9arZG1pQYkQ2",
  "key16": "3X5N4pzBcqzytJXrmcXErAtKYBLLnaQ6kqN4gMvQ4Ep7LWMRjxFVaQcTpsW4H3VPgEUy1mw6rH4aDfevA6wmFUEv",
  "key17": "2g7GfUjPYSSF2wDvmedKo9GsEUwoWoqLr8sC5BcM5SBX4jvni6ryemaj3R4vtJgiY7yRaNukYtg92FhEVV5cw8QW",
  "key18": "36uWBVpTaErcAtD4rJkYpXBKLcB1j9pBpGAy22KMHA7nTYk53uPk6UEhaYq4VhnXishzJw5ZZ2GN4W2Z1mAf7NBL",
  "key19": "5MoiuEPkyWNFecu3FNMib5qW3QvJTXhSwXAS78Z9SF3QdHbtvHZuqumHuKrs5hifpifXaBX75YytugrJoFMaPt5E",
  "key20": "5vvAoroJzuhErJJyuiEyacoDcC2sjW4UvJgKSeCKMBHmDgmj3nuSQBsCE8DyEAboPbZE93Dm534WaCEPcQD9gimD",
  "key21": "7YoziyqPuLB2CAYQjc8S3jKxNasSr3CHmXPLFF31KgKRUCMuL3eCzA3N8biJfFFRReTTyELBM56aHi4sk3C6Gm1",
  "key22": "3FkVfmGBtH2QygTx1aDejb1uF9wAvbfurM9j34PcsPgvUWqjB24ddVPr9iTPWDjoFWDmVDnzuNFnVTtJr6phZyHa",
  "key23": "5XB3YvURzfhLXHFCSgkMDn8YAtmKUj4XMKbAtoEz182bCfc7HsqpQKpQsYkmJGF1L9qx5HywR5rr3oStpL9eCn9U",
  "key24": "2kBcUnZgFavpkFowkX2QV4tPMVcDD1BFxTJ9TXhcvBAfHtpQS6cNg5GjuFxZRbK3euXxD7K1Pve9Vx7vm7mqp353",
  "key25": "2ujLKCnHGGXkUGmX3U5cSjc8ZxQ1ZRqmYbVGfYzGuBSsw8EhgSj3Fvx3WiaWp5T9mTSnzK55EqvjrxiDegAtfv2d",
  "key26": "3Bg5GzDdDsqPMV4ouXNE5NPEABHPJhRabjUG2vDcHVKGGbTPUojZTz5wh6qwzAwqLwPV7q28Msu3M5uXUqPrhAc1",
  "key27": "X7a6UhAyzGg1muPyLDW9hLiujaTQn94pYS5qnpvxMVMsMb3BjBQKeQWywhsE4TugJ5WfxshFLF9DQtkb54aELR4",
  "key28": "rXES2rNK6AhBWWdZodcUU6LhvEeiR9w3E3pevSeLBYRqgtRwAfJ7At22Z2n28YkaswyoWhxr7vDLuc69X9N2KQ6",
  "key29": "coif98LN545ukmdQ1ZaXoKc1a9NPa7iB9vQwPrnoihEGGiuYiPADseSGgCnssfLWo3AfiFAFpYhMEUfYaBhpqrk",
  "key30": "3VA3ZN2xN3JFKkgSzwo447dW52btzBfcMVHZo12Y8QcjAUiKBWivE17hEGaRuxjPHVuEqUWUrxxoR9V1fGyKjwYq",
  "key31": "3PQrnoGQxC8tpc12q2WY6gUpJtwHpJnN6k5hM1fq94Mer9E8gCd6BjfquYmo27EtkUFmRERVEXB65AEjEV43X7JU",
  "key32": "5QDKzb2VjeDtbhRLePtfHXGUfinMWNyrF6VgeY32p4B41phJAyZcqCknSeJooZkML4fcdqYTXbe4wsDouK87xcMi",
  "key33": "4bvvZGauPqieA419nbHTLnd1YrX8GHn1BuahUAY54WCVHYm4WrU3KKzvyDGGCrYEgEjdK2Y9BsXW3N7gmJXrLwiY",
  "key34": "67T1yjh4SsLzT8XZqknRariuiXDs5uwRyFQR3eRyFvQoLF4w9jSiFhRFkZn42WE6NKu5jvAiKcYZHGATQZePm5hG",
  "key35": "5MJtVbgj52WWEH11yr8rJfGf64kT734vAD7FC5eRXbx1qDxQ5Uq9L1jrBQRH6zejdUWK3sy6wdUr4TVnbFxaU3V4",
  "key36": "3F7zary65kcMpVNMxpsZc7GxAEJYmjMBESYFj5VB4U7QuzFhgyMG3Kz4kgKt1fhmPwbH7BXLojdWPFN9sMT1p89G",
  "key37": "2EKvhLus7uj5uhbbEBSR1ZF6GETKaxFWoxEjzCNLmv1ZhP5DnVUCE2hJvMpDUufuvXt9tTmcJz3hMbQ4gZ63LWwr",
  "key38": "3iTGfBu5s84o5R5pRwDHPb6d4E4h8Kj4EianDB4j9hiQZF1rNShwR9n1DZtQWQcqw3orn8cwNW99qD6toVdJ3wNC",
  "key39": "3JUosHhq2HRLn6FMx2yTaJedxwhzSCzLE9CRKeHCetRcbzR29d1upmjvpmRhmwaXiEji5mGa9N3UeUgNzYSxifBU",
  "key40": "4nonuXX2NCZg4JxwV8hrF76W3PnmiBtNKjQhW8iagGDmaNHkzkRswwEFqaFspB4oGzH2hJ8bh46nwkS77QLRzUbT",
  "key41": "2KVPVDAzCbiLZAZiAr7fTF9iy3ALw5cJf2ArdHBcNG57PTdpGyPjRv9zMKpT4Ccp2PYF8C2Myighp7BhtQ4FJWFc",
  "key42": "63vnanJLYFyppbEHtZQFdzzjAyy5FHZgXDfCQtHMb3F3aFhxPjFRxSoawmS5zN3yQHm4csDUxUYHRzNjwU6Fy7UT",
  "key43": "3b9M2RF822mCZ6vDCuF3qw47gCJsuJKZRgGe94HYSk6xxAVw4rMH3RApbbr2jvQyY5g66dUwgv7fyryGhhzY1PJP"
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
