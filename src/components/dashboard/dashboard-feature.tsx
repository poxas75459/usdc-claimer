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
    "D5HWdVjpEwovuf1WA4LkE1WwXXx6Zzv4fE4UH4a7ej4sFgR2ECE8mZUtdn14xvKgpLcdm932wfbzFyAnXECJsgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zsWYyDbx6iZzMP5H3fmkCqkMD5GVNQegh5EPQ7bWSnJmdxXWKw2nfhK3wDe4DQ3anYuvyA3wgwEht5a7sKqUVyd",
  "key1": "23Cg7vgYfZ59EStdea2x2cVkcMTygd3SKRKUrnxZf8tZr7yqYBR5VnsZFeaf3E6YoXUKN7A6giy3hNMcX5AmDLCm",
  "key2": "9PAce4ZNHePfLB8YPfwVuTMpNjWMhSKjkKWuuRhVQ57ZWPAUeSKtSq68bYBc9AtEjudLjQkBvdTpSeTuW8oSra4",
  "key3": "537rRZYVEutWTAxcMteRuLx78wX5k31NbMZaBU46GkWbdzhDkV8T8CA8r4ujaJMMDXC1S2iNWAGLyLBGXBZ1jzJK",
  "key4": "BJxqogrBPZdU8asX87RzmxnzcQBtQKPtKK7x3jW7i72c6XXqcrDUpcyFN7z2BFSXzC9o5wCBGWzwYe7JSc7dT5Y",
  "key5": "3d5HAfoi49LdAeYK42BTgUeAFQyhWVani2AgwCVw5GEHxnYortvCXUzDZNtjQj8igGx8CmXHGyLbRzxVdwfoqBiN",
  "key6": "uEh3U9LnFSs5DfTCYNWVeMCeRz2CqKqAPeTvzmXLdWQePfVxXob2QvVdrWe6czzAQbtWJFDphNeKDbWbMDFKEin",
  "key7": "2yKwNU7skjnvEVUvN3AFtDmK2YcQbayhkFrns57ZfSzuJFy86hgCkA96Gt8igLxnf7QLXgYp99rLr8p3mZjLW2xs",
  "key8": "3rTu3N82haQCnezGjGJtt2eUcpnPkz8GnECJQCFtW6xvwbJZAGkKtSqxZQAtesQ2U9gKTA8xfKDmwuk1acMTEWa4",
  "key9": "zKQwvrdbNHGxTZ9GHNCfFUdn7zDBhBhYLWQK6oiiFxD9VuUyWcygpfQFHHYpXs5TdXXWX5jxjCmfD6kU1CfdrBw",
  "key10": "42ZvxomyAEKq5PfspQGQecSERw6rJzNtu8VtTQU3ujz1GPKhZj3uEigBzpsiELPof89G2ekPyM127TZwqtaBuNAb",
  "key11": "47oQmhXW4Gn1zfTTtvhMXMn6VoFtuFEisag2K7p7Nyq3UadZ7h7NRAtSbG1Lkpp8L9jLsKAvGVKftzDVSia64JNa",
  "key12": "3S9ZXk1fxkqDYjhd7oc6P3zhm3BTJR4HAdrfkGzVurzPFUiqpEsnSmKccJ4JHuiLo1j1e7JPnM7ZkZN3qyz4UpQ7",
  "key13": "6566CNCJTEe1DXFvfKXLnhcqKAXojjd1K3Q5GnysncDnGvZVCxoafocutTskqkjsR73BispmJWdZzTopXzdSxCU3",
  "key14": "3Mpv56CYfxfaf5rueAZmzepJtGDpGdv9MaQ38ijnPWGV3ojvzJfF1NVcvJDVcUemQBCL7qrhqHWAQeGUmKMvVRVN",
  "key15": "4N3hpz1gKbZchFHNEyaLd99Dbtauz2schyS2Bf7zvMz8iNDQkWFsKig7nCWLbAAEqqoCoDP7YoF5J85jfeGDk8zi",
  "key16": "5P4d3totfDWAd8BYiaurUnSf9M5VxJkCAXdzv1BVY9iozKVSQF3zo3h17oVn1pfvYGWQcp4nQxKxEqfc2n6orYxm",
  "key17": "5E9JV479SWp6HdPymJ767i8bZURGFV82U9X2NbGUmXjU76pSrLwQB16JjB1FKYwLTPx4W12re1LYSbvn3BopSwoC",
  "key18": "4i1Hc5LPbbDiJVxxMnmNCM9NbwTEFGZZgqAh96bLhsD5NcZBfpLv9HayXb8PtMqgWAisZC9ioxHwqqfG9dz8oCcj",
  "key19": "389ah9FyFeAJrdpq6JgG8Ew1mYbtzspvrtKdTSiWbA1VneFR4B7heJb9VpUUHMBmMAqoN37W4jgxkMsAJYkGqK8y",
  "key20": "4T4itF9GAriG8DExEftMRGD1D5a3XAPV7F6mAr992otCqWY52HvTkpSNHoKhgVYLFATDaZapo79gNifUoMAjvWpk",
  "key21": "2P184XZdQceXSEoTfbv1cnv7YJUQAApv2t7zZvZCq8qDxqM9RmJcHV6vtisk2hvF7cDGiZYG3QgeWAT9qJdzuwfN",
  "key22": "5TXTL7D9rUvZiMkSVxsm8yBz1X4ZdJ5J3utuVsoHLwXvGyBCzwG1gjPNZRKtAJuHWFqsUwfkcz53p6NciuCggthd",
  "key23": "KdrRP8TrtmS1JYwtxydr6LjnwS36pWh4GSaEysozHRNcd6vVLKBB23Z7cdaNzZmLJpqL2TNsnNLxfvzdfPJkzy9",
  "key24": "2KpphiEzWNGfhkahUV844uYgbbVcsVRPvxgZVt5ksZHaRCEzgcbmBrDrg6y5GaaYxZ6shuo6ESnRum46rvr977p5",
  "key25": "EXXmNYssJ9AZF3wJbCCqHVsWhVZTLxvmrhtmc1MK1FUib876Cn4FqZQvEiqAv2JuZU1aXRiu1jBBXFk5dNxihsw",
  "key26": "237GMXnSJAMyieYaQJnQM5DE7pGLpn3kubRCpern1T5QbDDR2c6wART9FiG3r7thKn8vyxcWzq8fTjuRBV3XtohZ",
  "key27": "3sNY8M5pUw76QPtBJ3xJLqcG5qFvFQw9F4aRhpSVFDdNMh3KGaXhQi1BuDKbhfNwaiCp3vEKrMTNBUr5by7qEK7A",
  "key28": "BBFLFwuiVP6gcnoXVQU5jLper927Grwt3zHFpQN5qk24jBru68VhXr5Hy1JVy8tYz3b3ApEKbcL8d24qRBTZGjo",
  "key29": "5frccYmf1sC8moBkjhJNgDx4cje4EUhZo9PwwtgjyCdZzj3foWkRZAScMy7meNs1cZX9g7ftcnuhwmW48LHjANV5",
  "key30": "Z6mQvFSwfc6Y758rHubr7gj3NFQbnNtrL1bkRnJuiXSMi3QADJNVKjJkbZLWHemQs6LbuxYvWLHtwzTHtTeHqeX",
  "key31": "4pEqcSPFFDYGiA8EF5yAxPJLHqeacuNpdfMbER6XrHNyPRY1TvGatVfp1GVuxWWb5N9zxCoA29fT1wHyA8Hnk7sU",
  "key32": "4jYDqcg8pYA4uYDXZ2rhbRxmYLnFT1jNEoMrFiYGAQiMck7p28DhYvA1jt4m1Muvq6pDWBmLPUGSXSkbxGKQp3om",
  "key33": "3HiHCYr2ygzZeXyS4XTFptcRy3xL2xhTb1KUCy61uwaGAn9eehTv6Q3KQAYWiA3f1L8YP9kKco1ZGXZLQxLc389X",
  "key34": "3Rzjnvkpu9Wm7iJWViNnvMJKsCNKUSyPRqzS9dzsMH7QGMxpkCLTALPXcSz3ks19fDskerGPp97Sr8LacZF6jXvV"
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
