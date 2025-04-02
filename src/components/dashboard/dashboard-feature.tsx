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
    "4Qf6shyZcF1pn7LWrvfef45qQGvUe7jKWrKsqW2fK7ghJ1C1cXxJP11UnFxVnof2ANth1MNnM6a53JDi9n1e22fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ts5h6yUVsh1Yi9zCKAfEaSBhD4fek4hJi88k3QQuE1ddGr8NmAWJstFmPQdrtVB5UuqWasU3hBPCzRbCdA7b5Dt",
  "key1": "4DMzRUg8Rtp7PAzp3uzW1VCPtw6YXaqLzUBPpQhVhd6M9iMTCihvnG5aAKDQABE2aqDUwQZZHC3oEh3C8eRxb2X",
  "key2": "4NbZJh4MY3P7NQkuQj8gCe1VuMMZ2duiAGLVC3sn1QDjmE1SkUpPLSJJA9XpCP7oj1CTsjBkWnmxnPz1DomBHLsa",
  "key3": "2B1MEsdTaP7eDLCUMQMsnEipSLz6A5J49d9mtpTroUbpngWzmpJ5aPZ69waWACqtkc66NiaZmjQqfMzHZL7CL3Kf",
  "key4": "JSPCfDu7YfRGS47R82czURWChGifkxP5SDMhyCNKwoFMfYJ2Z628rqS3uFBWGzjJGmFsKdHbG7cZ8j5vnYnFCVg",
  "key5": "umiTrtxJp8sPd81ucCeK9vHKsbU3LyBNGmETiBaYxxv3GcBep3EZo67VFpZGYK8CTWUGwNbPU1JGRSS2rDjk1oW",
  "key6": "5QF1GwyQVWjsLzoikXemQ8CEyGXoxv8ndkLpZLMU2vGetcBun8GTD2jimjMZ3A2VUPFQGSKViZJDkMYZtCqY17k7",
  "key7": "ux9CJb5icgEbTqagv6ieuVhcToQEec346ZMferAykHVzi7sWUcDwyzadJXqrWNBYmjAbDCKDqZRSq1TTPBCy9yc",
  "key8": "3PJgZYvJT4mDRoG2TYULxzKmAo75Mgqk2kghz1612RnjnNafFXbgeFAmPYzS4fXhtaSqihJnRrT18v6utR7H2R8p",
  "key9": "3s7LVM8o4UkXRBcvS7yqDYNnv7bVswKdoepNvvQjqZWvdTYHMFxh3AEokuupZfwpsTXw2pJmhe5tfSs6K4hY5nzp",
  "key10": "33vpMUxXwKNuTjbqKuTHVMXYyUP5VmZYigZZnGdAnJ5iW9LqAqMrHC3xRWRLj3yfzMV3Ash9n92b6sjHBtSEr3eF",
  "key11": "3koeXmtGBdH1pBiSKeHvDJFEeRfRrPvkaMPYTqMk6Aq4oQ5T3XaMQ492wPg6esPeBqoUzBsSBSponyvxr6ghZYKu",
  "key12": "44WyHcHo5ugEV1gpSWmZXPw36gB5STHp5ZcgYqopicnNsA1FAr2ZbUKsVJh7XQiVFN6iEZMiu3HM7PH7tRSnKHfC",
  "key13": "4DryDfEEWod1KeDhNtH9hX8B9ZmM8H5dCaLStkPQdL4Xwh8j65Tfq2GYK5RRZyAak32BiA3U1ab7sAJL2DuHU2Qk",
  "key14": "2jYMcQAZGpdDsNZbS8j6VetaUGndewbdugdvwLGg3gWk8MEdETD6YcDD7JjPBicoHSkUiNwGDQ29a3BxmZqzY7fg",
  "key15": "5e4NtaVdUcvFDBdCSWym3uKN9NrQsibM5HLRs5JkFxAcYULWx3NWWed6kKa925BYFau8YjHfTMmxg9r2g8gc8Fvo",
  "key16": "3ND9i3zemjgnSV5op4LVTi9KWD2WktR1jaYGiv6DzVQJ3Dm13Qh7jsCGuBJNUMeoGaDgSvxiJ5wUTiyJbBk8nrvG",
  "key17": "2PdjJKZhotToqxi5BYg7SBSFZzU3GbXbDBKuCFJnvv2Xa7PXDoCvjMANvd9rv3WCDjCDwFUgaLVZ2wjLBJo3kDzM",
  "key18": "yXpvQddqLnCrrwwVEbRVKA8vUtDePf3XZiDuJp2X5qyUuLzSGu2qj8xyXCzjwtY8siA6ka1RMYLBnej26wRby1B",
  "key19": "mx3qfZzNL5xJEbht8ZUYJNqk9pgF8gKjBrWrZyW7GZDgyZQDtz8wmpTg6Eha7MBHLus1gSGfXm7wyjEZveAfamV",
  "key20": "2sHJkL5PFQUB9vAgeD1YqLdhbsgqFQsvSvEbrRUCQoqzekjt4H9JWj8QJAoGTcqCtvMo6VzW9v8PKdTBiMYMYpEG",
  "key21": "3h51uSLc1NtCUQM9DmZq4vDh7vgEnyTWnJ4ohH5CURDHw47A19iz81CVHzoN8hu6BKGrnVYEzcfak91ZFVsTzhfw",
  "key22": "2nYXWbQ81rzabzgoTqXtkFTFxXWkwmvbnY2EHVuG8sFbnu9Nc3hcwJ4fP2odh7fyRuzXKj6Bn5yor2hUhgF84B28",
  "key23": "53VbjX1RdSiDjYRqnLGzJUsKBgmSe4FwaUTNwRKCDNmSsZmfZWqjpYjtF5jx1TtBUcNb7oxjEyphs9ns6u4tqDxH",
  "key24": "3wRuuMCZgpsNnBTfT6DSKXBCt2t8kKWsu32qnQiSa2aconuVgDvSXc8dJmJQ6JoXxtEABd8qRHg1o2wDz4GGP1ax",
  "key25": "5zNdzwe2CdmA44YGP2YxcKE5CLxF4VKm7Yrh4uSJpwQg2Q4H4rApZzhbwigwpuzgeBXkxqYFdaYQVRFsXQ9TyddG",
  "key26": "2f1JEVBA3uniLZo8Yi25MpZVJS9d34fsH2QrHDxEw2Pic94EoVXbo2ToUjNcwYU68HGBvEqy7zA143vLsmKu5Uht",
  "key27": "6zoy49XHvyATFFVpjjKEAE4fLghNs4grGuKtS4ZK58nrdW6PWXHbbhFgC7X4zbt3uAmrDbummWNmzoTPCeC3Ki6",
  "key28": "bCukPkKXZdhXWocNJekWgBarGDCjAYHT1AS3BCqMDTcXsNZmK2mTdpiwCTAP1cXLZMUsb318K48u5HSeWEpQnYa",
  "key29": "2aVvBMrFFZAnkW9x3vfZnoc7cQStubqvkh2cyVfzXkEpKtSeQpoyVskPrDxBGc8BK5HeDsiChDXbeeE76YkgdFYU",
  "key30": "f9bDE5WyxaknNM7o1pJuMtCQxtAxizM9BWkUDrPjR5Q5f9yvU68tPjMYUT2iTLefnccV3ARjSDbr32ATVDonoZq",
  "key31": "eQQjW8kjVgM3DcgU1iVGkuKZ9gUofrVsoouvg4645KqbRRdP9b8WhaJ1Atoius1yLbofEVsqjhK6xiz6BXUS5z8",
  "key32": "zvLJ7g73dpxycJVS1grpNuufFbqqgmJHbbLrqLckWB2mo2dhdnXnYtY5zKKnWb7jEd9p4kRnPQ6GXAvtjRPVXF6",
  "key33": "52wbHE9ufAMMfUMmkgo9QNfhndLoytcmRdmhD1CfnWpRttgKFsz3UheHrQmffKc1qwvWPxrXkxoVEoRBDAnHT4xE",
  "key34": "2egzecU9JgTevqT3vehpLug2TBPejrmK2M42ckUqdduibLZNwy4sFyCDm4zvxQE8nUYx1dKGJSiyv3uNa6DgkdVn",
  "key35": "432Xu1EqbXXwZY2WcARpGJ7u436DD5F9WN87FFMNXj4qQx7U2wxtq8pHRZc6MHcR6WEt7yTe8NHnz33HBE2xXDxR",
  "key36": "37f12PKiGvqT37Gn6rZjeuCbAT4jb9CeB4rRnB6mSfZxvpAn3otqoCL7p19jXywPC2GGtfcaUKKgKZCpFfFxMQaW",
  "key37": "5bAdj7M4oDjHyoUU4StUHMzsr7frJrp3LQyF6nirNgqtZwZKGX9E5vGCMCUdqCgc412ZnCKnH1WAKByYeosNkuZ7",
  "key38": "3DjaiHispYrcys5yP9Gk2eRjiz6CsruuLQDnE7fxx72pPv3Ucrb75kBsn5J6YhrPyehsSvYsyc3dduWSmAgNXrPY",
  "key39": "2LZQd1uBdGR9oMGNWF7kovakrRMRRF4YpLHXMwjDBLBu2MiGSDGCRnEF9WeXBK1dyRwL4y5ahmUPKxa4LMQg2D5x",
  "key40": "5ZLeoSCEEJUxbmDphUT5BrwL1GiDDJDandkHQCLafcF2Z11usErQzneMg5YDWQmkurDrKGjQAxGDCPBZQAcAHHV2",
  "key41": "3Mp4RwvCwUhCAs4B6vcUFpoaAq21EiUX4GLUDbvBuXR6j5UHQG5whf2fQiTZz7s3TGTsvh8apTtbgMoej3HnnftQ",
  "key42": "5HVqXyrLDpp5gAWSwR4wSsiy4vZSuuBkRiEqaonwjEo7n6S9hMdBmzRQYyxyQt2BjNdtT5YXBUQ57A3Vfp1kQ64b",
  "key43": "4S6PXxZMxYJnRpv7q1xaVFA7ZkXjmpTu9zWRU4b7RobqGSw5RezsXA1AH6K7avU3Wu99VL12x4E4XHAPQ4QjYjXK",
  "key44": "QXtmwMM1yUyXQU9UC4N7QLdCVhqGvaEWi8BcxC1dq5Cja3P8MupTKE18NNZxV7uKkhuvMfeMCDgBQz7T3P4vtG3",
  "key45": "2SnS9h8NBqcKCKwKemR5q3GzEuYai73VT3Ef6a9xNCcbqiKva6AXHKET9rT3gUdicyySGbF57FeavUjSy1QAoVdt",
  "key46": "2PdJgLZGu6q8Qzd9Z3UWz7zPJZVDXpNE8T2vFWKwPNaNBzQYstFfzxk6UE4eBFmceERxyxyb7Cx4HAXax6b34tdv"
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
