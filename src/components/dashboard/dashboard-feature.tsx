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
    "3RXzP4BaEior4MTfsYuHS7vVuDjUfLDY9k2eCH6X6C7tBEbcgnhqZ59GRh1L3BAcXXsuwSoCDbdr4oyzAkAZnao8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CD73cSQNrW61cqSMPuHny1nzNAh6r8ieGV5xujAmXkqBa3GhF3nwN8v8vRhf8KFX4viuDX9k8777oVojjeXanrZ",
  "key1": "5GeTNkyfMaCGpgigRRT6yA6YJxRkJLm9EgT9gp1K9huJ1AVfVZ9k6S5kpufv7NRcvcT9DCm9fh9vZW6xdhTzeiuD",
  "key2": "2H59MoezyMP1rFD3h3Rdg13eyhC7BXyveBXWN6myfGSaW7q7eqN7gyoiZVN6wzjSxUTt8Mcc8Khqpu82aPBf3YVZ",
  "key3": "2sopsaqry3vEC1XEM2HxkYAS92bArEKaYdKDYVceANzimpP8MfMz5Bra2z5FQFwNL9UwunZ68jTE7US8MxWPwgzf",
  "key4": "45AwnPzEroHome7tfDjJd2Mx45fhkeqrCGLsCAeT32Rem772NaxiYTJCUx5i3MzkMByEVM9h8xNdLmhfQRBBiAam",
  "key5": "4YkM2TZtxGB9ScPuPSZhokq9ifjyJveR6ksiSNH6TPUPW1wMwDNievXdGaiw2WniRbpkgRancxFN7jD4oJG1731",
  "key6": "4ZzQGPrz5dZqD8vrp4RjPtpUS69A1knuouQS2BViWjLaDa4pqPRw6qweAXffyxPzbYhAz8TT5T8vHSQRjTdp1kBE",
  "key7": "3bfvYofPrYc9FdqUcjXtUZjJi5yayqAXXNebUkATtUwBWEE946WjKVx6gQcnuC15yMrdLUryhw2wKVvrfXiiC78L",
  "key8": "5oa1nLC2Jv8885V8SLbLghLpRKohxWKUCEZFPDazBfeoh1SgDGrH6MkiVDz5kpArBwJd23GCTH2KDikZCx5B2HjD",
  "key9": "fxW6oXE1ijFctLo9xo6QjzJsUADhjFA3XppDedvM9Yv5MGTBiq7fwcAWmBviSWHZDcQYjwZpBhnDUqT3ryxhFd4",
  "key10": "37pQ5UWppcYva5giRxYVScf3GbrdDtQu63QMzP5defJsJvtLjqRj6NteWhnmRDoZ1rFMgr336FQzja4UbKAQhvRy",
  "key11": "2tSf5NK5DZr6iHzv8AYZXWyhG3TpaqRCaqyunu2xPzeXRgNnrp1BWSFWszRj477SEV21QVfE1KJCqDTx8yj99vPR",
  "key12": "34dpLU1MARQENMNa2E2GW443scMPA91g6HUBjnaMJEKhLKBMHDomXvt1PperXXVtLNZyZKRqH5mqd29EpHTnr3DL",
  "key13": "2gENswz7HkXvgMijeynCrXeSEEkfVqbj1tQsEZCrZrwuQW12tnCx3UgHbpTy7DuRdpyxPLH2Qu2PZn7vwcNZdRWn",
  "key14": "2rjut1cvSuzxiMFESvP28i8A7Wq9BrjC2meaGsjhCCBFGDsKiuHD3WwSbZwckrg8rkfHFuEEgjGxuo1J1kWiLJhB",
  "key15": "JCF3wjpdp8wZgyrKovqKF929VnbTfDfjYWP5nP7r6vCytovZX8QRcKmB5rusJRF5d3NwcrTkQeiCnV3ZqP5Gmzr",
  "key16": "63CL3Aion1ZULhSoc2wfXW6mbpYZTJvhgKYo39RvX3rVcxQyWbv1hCZcyCTpHQhXAbU99eVf8UVg6Nb8ceSMmBYW",
  "key17": "k4jWCqGAWW4AQM34f2239wjYfJ7TXC7gHM8d6ePJnvbZpHWAESFczyAeMmCQ4i2NrHCgecBda2VMWzgHZRAGMU6",
  "key18": "3yu8CijEjuzVBxuAGc2AmYBBHpPby5La3TWRMnHBb31PquVgVAFua6pgjFAoCJmL2g7QERMYaJYGVkERrt8SUV5R",
  "key19": "r9yP3W7M7XpH271fvvRKWDgMWmaTey4pXsEAiFBQrKQzBfzAG9vYfXnh8yJCgbM1XzQY3RTtJtvbEQ7pmZSkX6Z",
  "key20": "5oFT1DWv4GFNsKMGSSpoqJU7NReDDSepNRoRZxGFSJ2J7zsG3PK6A6m4xzckDszCrd6PcW8wr2wsbho8tzBAs4zw",
  "key21": "2XPw7wUFycNTSP4qyRdXC5nUpFRmqiW5S7jjjXeQGgGfkdC5hvmw4NLimmjHyEvwag2dRCR8KpDHA7Ut3oJS2UJn",
  "key22": "5xLSAt7x2R1QEqT2y7vrafRWoSwra8ecjHPrwjHvfDwbYG6cKnF7jZRrCPrAXKmdNzQHEzqBakpZD3YbFBZYMTrP",
  "key23": "47ZtGDJbDnFByBHERJkKao7wSUiy9ac9peLGB1T3p35AcRdcgJvMoZoEgmLonGk2pjqUWmF1r1KAorGKGb9SVWAD",
  "key24": "24ymW9M4xazLXAZtpWbf97H9nHCFSV5gAQmZ7JY1p4NwAizMs3K7MTvQbhkKdNHqEMumYMWcLo4HwTLTjgVGjib8",
  "key25": "4Sg51pXTPEtb8kqGFrhiACEBe59wfB5K5hnLmnynb6QtnbPpqWkNUAAjU3w48GC7o7if9o8wCLKMtZ66KxdiScfN",
  "key26": "t1btvXaJf1Cyj12xdZ6cqogQzfKEoeNeqRRuP1E23iKfQfwx3Z6LK6uwy1XbN3SRE7N3kpwVj5uJrT4WMwFBNQ5",
  "key27": "BwiS4KmVUaPuWjG1fiKvjd1n8pu7K8Rj7SRgJ22qwLX26UTMi3mLmd7MJ3A5ziTJ3VSYSRg8QWZt1nm32o6C58m",
  "key28": "5Ck1BTb1nGA5w1SqT6gHaEvkhHdJngysnP49hV3YUENqCXQs4xrrZ3s9npJe6T5EPHojrtnK966k3HcEG89Bcoct",
  "key29": "2EiCj2TLhR3knRKSHZY8THCv2y4kJCFYm4fQz2SFXrHAm3docDKXxfcqEovLLkDws71KHiMZcGze3F6NzmVX11Ft",
  "key30": "RvPQGZEoUgJQh4W9EXFjL5K8MfZAJYP3yjNPHebPRdq4um2CgL5uEqSoMMUq2GYt7HJ1mDiJDzbJQpsNytUtRZz",
  "key31": "EGYEjcm94qk8SqfwyJ8DfE9P1va2hTdMu7dLyb9ZVapPaMAMfq4NKvMvKCjMiriKMKacoe69F71c3GxLv5tJwue",
  "key32": "3sbE7qyz1YQdCGLiZUhv6EQhMt93mMCLcW4rWtdB7Fgz8sjoGHvkV8rsMTD4mT3odyGMFn3YBuSw3a6vwMnWQmx4",
  "key33": "nmNomSkx2H5F6iDEx2EeYPDH9uuux9oLCXSgaiVYWm3wmSgmS6piLWYD6AAyHyGzVwGYgzozLgtgerZX8ryXJi8",
  "key34": "2ThvHfs7JEmqmqk8d2yYHKsSysKQfiwsbYokQBNCBsktd33eNGp3w1Ek9CTCCE7geZN8VBatyZ4TrpLhUvz1dVRh",
  "key35": "5c8eCSseGFVDJ6qzgetRbfoJtxaPHvVu4nZd1FhNFc6xXvBPzeJi3fRfYoaQ1kSo3SbwqhiJpxWEsZ9WdbQpxKUK"
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
