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
    "439EzN8xGYUtFjw4R4PofS7NCXcctzati3WX1vRMFF5VLnqkSPGR3G6G76qHYpaLD2jV7wB6SZmFWb1jD1qu561A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ez4nLhhAC2MJxS5XrzoFNj92pKBzA9GvGgFBxfBs2wE6AxqmLBxiHfRpxM35utfcWyFY6pxyLVnGR5QZoYwjVvd",
  "key1": "2JVcvP92TkSjGkEDEKZZLGUNWo4KvNh5u8jpuRuPpHasvAQeYuJ39DLWf3KUnxFUGTbg7Dm6mss44ykTen2XQ9xa",
  "key2": "384mCDbNb1aWEg25ioxsF5dReYAJBWko9EVzGNSs66683M2fhHNRDJBom5uVaUADvdg8WW7CAe4P4RA8drTxPwmQ",
  "key3": "2xGTxAzW15bAQR4gzidbji8gzNwt7iEKpsh8wXQJxB6m2o2MiY7C7NckiR9pHdEmixsckGmp3d3SmkHMY6BZbceT",
  "key4": "5cyHhJosFjKQJNbUjG1bzQvviA59ARNJKkJ8F5ZtiHvzu8YaTmhPU7fF8zkvmmerqmgWGRDuzecHE1E5nS3TxuXy",
  "key5": "5W5te4N7Y6PJGW2x9t2iSh7N6QhyWAjpHFTuDitFpJv8w7aFHjEenPNqZ1h8k68BDAH1F567Y9C7BQsZrbVELZbe",
  "key6": "579VEG3bTCBJjkqVtc5Y3jEzES9VXqUzYXatbtuNwokVHhXQ8zH3G4jjRkCKumCzbrNnBZ7nRGaf4mFwJmNb6AfC",
  "key7": "4D9zPagv5shRPACZY3x8ggzxf13kZutY8rS9u5L8Xd1UcWg5zBzfziZzrxWxxrg4NBY28bBGHY5Vyc7tQzz7HzNd",
  "key8": "38xXcbivCfWTMqJejW5KiaH3A7VsgoQbmTtKy8vADEkgTX51qPyTPa4KPBqJ9KqyWsQWHjgWhCgXfGFfLLtVr4bB",
  "key9": "YGqCSG4RtCxGa5S71SeRMzgauf76TyPKf1kth6v5x6JcAwtbr7joXJwRkb3gQZ5aKk26d6X7DuWQzLyphA15yLW",
  "key10": "3A1ruZDw45XfD3rDcH7G7nDeojjiWN6neXHJ9odkkeh7TKZFHVwvQ6bwawgQN1hsNVj1mCd6L4LCLWoLSEEUgs9i",
  "key11": "3MJ3LRo77GvHL3XdECPwEEpcfcM2U99pXLHfBwUopYsozMcL3MXs41QSAjDZ9sjUtRCKkP7jzCKyx3ytt4UPms3S",
  "key12": "5KZzJp1h7LZB83WdKx6HzeTPQCktffSnjSfkdnLjoT5Vuoa6Q9K953nQJz9F4HFekAzsYEALwLa3rebetErkp7M8",
  "key13": "2mrFHNHuPmEbSJLGAg5Gsgqz7Ap6QaJ4i4hYZ1nMybs5rzCAcdi6KMpiuyaknvFcHLdu8fUXWY9hGGawrLf2WXed",
  "key14": "5sqeW53MeEDghJUnsc7eyRb8MdRNaApMaVfzkgXWx8wHMnoVnMwfNGEmGQxNPar5vTQU1TxSh8W9GhePZA4gLvmy",
  "key15": "52ByY9wQk69rqt6F4GNpf3aZVJFkUCB56m37VRjZXLRb5R1RiipuGXzNHuQSCAGtctfNYadeYrAGm8U1kFVGrEFP",
  "key16": "44KwdsjzEx8YErWiJ57Tmgu3RUtcrWdBjeuqNj2zLgqZL8FLM6ze4LeGbdJUvwENg178Q6vtQop7uwASkxdFDoGr",
  "key17": "4TprnqWCdiwNJM3kjPRsQeSHcEQYV6cm6Kg9XpXRJxYEcMTByyccMkefRuG3j1tCmNuFsc9BLFXbErL33kuW2AH1",
  "key18": "5mUeGEGBtfnHBvUFwabMRknhhfnMsja4ZXUzX3LosgwNCs8YogFJP5rH7dtwRc8A9V7reByLLTiiAMBUDFtz5WQW",
  "key19": "4DMqb2Gxy58Jv4qamCZsSowL28VkL3mib88fuJ6PtFSmtYDeZdKpqFibDmDetV5APKXbg1MYce6VQxZDkiRsgmFs",
  "key20": "64wsg5cYwDjHEuJv9dKrqAkBgqBeBsHoNE2F1rrbtnyyxEFu9pf6Td4ynWBGYY9R3DrAY2v38zXaQEmVrfJNtoXu",
  "key21": "kXfkxKMwu6db5yJcM1UqVETnq5AmUXqYWSRWaJQ1MpNxS3UpiFnPcUJcGcwKwbu17yqrGwnfzebKKJvLydcG9B1",
  "key22": "4MzcgPmLm59SUPVCz1YzUa9Dn6c1tNfvCpjsog69ZaSLmgiaH1N6WnwFA7BNaySdEpBsFFcU58pdWi8DKwvjRDp4",
  "key23": "3RWZZ4Lm8b6tN2KAXx2JmYmabuXH4LMtxSxj3Cp1vVVb2zjAQuDf9dinzPXCTrqNffntTGE5YSC4h8SGrf2g6CSu",
  "key24": "21yUTUnhDvzezKKPsbRsYzifVkz2NNjLoDHU2qasxickBrnRSKUiKe4YzuDoyhdx5Bsk4MGoXhXRt4r6DzdzFvsg",
  "key25": "63sz2H4jfbbZ7beUf6QhfXrX6MV5jWSvEC1bTqzek2j4sM7V6LafCsYxqK3B6fZ4U241TRwBs5pRUaGeyhyKFqop",
  "key26": "9n1ZygY3iBpYdEZKtjrxxJ4HFBvn8yJhExruQrgBUrM7DuweEDTuxaCYkmnhqppoFRJVP1v4kiQ6tGpooK2eT18",
  "key27": "2mKRh1e2wz3AcBo7wvewP7zMfVsBaGhLk2rhgELNgf6yeJCQLCfvzHK3Cr7TcEZAmBhbtge2p6cgGhRq9SAKKSGY",
  "key28": "5LHYXxmFeW895jAv8DsWkMKieq9X9hSsjM3Nr2FbiF6J3xhCMFDY15Nzt7EcAve2VdSeKKPW2thkaBd6g39GstV1",
  "key29": "3DTapUdmF3hF7VdRD1UWyxRVQ1SQmWM1AuHay8kSniM2nFncjd4rty56Tmh19URA7instBJBbG8adajX1VUtCfDf",
  "key30": "SBJUBvSeWPu3CeN6cobWT7Q9ug5k1SZAV7mAwJ9KHkELqHsZ7NiUmvsib4nCXd8XvYJrdX1L22jJb8uZs8DdH45",
  "key31": "5u83wY4jEu6y1Byms4KBHomCTFtMJpQAnH1BQXd6CtVvAkFd2LwMLZL2Ke6KinwV5FFyPkWuVsMcexDKpNqnoHnd",
  "key32": "2EMqv358DZEw3FZkxXNprpZiJrMZfKwUDqQVsSPKcvDjrj85iLGiCHUAu5nWXn6iPnwLgPeWSnw6YvCLzYfFhufF",
  "key33": "45MVHzKbTWPe1Qos4RrsnbFvAdPpTXDRCm7PWfAw9RnkhQNSsYfgshhvy21seKyY6zZG4buVHz9tUcb5Azj9wJnS",
  "key34": "33gvBqb73VHmjVqQz5tnBoaFiqNHxs6Ne5iM9NdGXVWoCDcwZjP9UP5j3AFtZjuu57VhyVg6xS5RNHtApHQow1Fh",
  "key35": "34ue8APZYbTbYCYrcRQHmmipTWMgJ34XcRpkNsuC2oJ9pd1xU9adPbM7XbDHsWoUKfgag25aH5nULPpp6PRpvknP",
  "key36": "jeawki393ix27BpxqB4dMo2huAnFFpHVg4925CfRGVMkQsQiZVSk4qWox22gh78nrXi4zU1PTidm6NPX1VP5Upr",
  "key37": "5CXjgNMZuWw2fZqx1Zw8UiRXxrGdAPSuUUkQNeFhdeCoKdc6M4VUvJgAgWnFn7v6Vrfh7vvZmLNbW2TtQ9HoRzwS",
  "key38": "43TYLdtJjzLgQSWA6ACJ8ctwr16BEPPDaUmCYw2GyKmABQAQUTKtd3B1SLU2zoWL2AhSdHVjdhofsydMMhhQ3a43",
  "key39": "4UTzsmY9VmmiWV4D5rHYahWbqbAMSau2tNChRZYHGoc8hj9xaNz3JRZf9B7fTJrzEfxVLzUyTDPi3sYqJyifEv5L",
  "key40": "2t3W4Lgf6FLrG19uZZbkUbCpjvr3MVTEkPGcZx6x7x6DtktK3LWzeQaGkjkBQCGfCmRPr2sppbD1vqNzQTef99A7"
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
