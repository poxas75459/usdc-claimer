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
    "24KWE5rFdBiX5HYVBnXjUg13F8Jza8F4FEyfgZN4CS4MWa6UqohJUNdmoa3jMiKGXRZKKniMRsK6teZknfmfV3E5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SCsxvGmMPfKSaiE2iJ49ChojDktgJvZzdxKMaAZkKS1uMszVmB8nv3w9vLQKviqoLdtLSgHUfVJ2VZ57nnWBJhj",
  "key1": "5KZPc9ZefSovueGdjgaFdrmobBC8Lw6Y2XtThYhKBEz43RcwLYiqxmTLosLBPzL4c1oGrAAMz78qkE1wcvEd8msu",
  "key2": "5eD8CdbewnsXYe3ktn4PPkJDkDV8dPgYEWw4EX1VY9QkLbNNzgvkgpSeaewh9SxzcFvEr3wNUy3fgR2qEt649atC",
  "key3": "4RkAm1f2zsLiPGE1rcBEoLhvGYyTTXGsJ4NqZiw7brBV8ERoZvh21qnnGCJJPWRXwtkf4ptBb5p53h7GfYn2tBy5",
  "key4": "43w8Ms7ppfaeQqgsoLE1fY3XZNgzK9RwvUuetdpZHKvD1WzssXtTS4ZD9vR7Y9GBWBBwohbVLeB7wSYgUJYawFpX",
  "key5": "3i2CELQLdxM5wHC35nqe1cfavYr3YJ5dtdPvbk3CefAX1ThB74RmZ1H6PFuqCSj71qfD2Z4kA53NoV16ZU9xe8p1",
  "key6": "rRUebWen1pCxbtZ3tTWkFMXDMH97kyWU7YeuTSrDrzz7JdktADQSBMRmmSTZdnGzdKqDrsxtPdpQjt2DsLomdqe",
  "key7": "683xh3BjXXK25ykZ8nvKJrbP4xrkB1JwnpvR9FHRbJk1kWbByUDeTxWSRhmtKjjaS5MuWuKhhtMz9Fjrr6QYD48",
  "key8": "EKayBQsXSMyQk3p1njvUGJ8JWaYALWd52yvfJFbjhPymVqii65ixLiFFLo8E38FfSbqrh4suY52A81vCAsxEia5",
  "key9": "uxbu5cRoSZ5rmKxcK96ZySszsMHyTaeyZCktrWK5KcfbEM3JgdSDp7WtmN6LBGj3krrdDPkMy5CSdWn62d9P5e8",
  "key10": "3AUNiPnMC4ZZm5G54d9DFVLu7Qzbox7APbnJ8nCEDgrs4NRhToEWpuZKiAg555tfixaeEjTmtDzYMWjGpQC6MEjT",
  "key11": "3AAwCh8r1ywbwesiMARvStJFCdGKZPvVedbohj1pYuXVU8bZD87yiBu3R8qc7c4Mi4vLX5GyDsMxFb98fhZ4abUs",
  "key12": "4UA3jckCesksi2EwNLhdp2WSki4QTZbAkLz3TnTTcmmrBA1xoxGMn2feok7xUKMcm1FsxDqmzwyFr4i7M4iSSswo",
  "key13": "1jeiMZsmgCzrAxzG5CDMDjUvLqdsYhX4kKM27bNceqyXVVhhfhj6etpgancH9uoBjN6nBdt7Cd462APivr6Y7Sv",
  "key14": "oGyTHTi19vxbAtoGPbMaYq4KYkusDMRQEye9RjWiZnwoUGnuZTRipdvku1hvmnjbQkBrci1WDzFHig7bJaLwaHC",
  "key15": "2mNpTqncSztXDJTUcseJ9yWsrmLr1v3taL3tYrVXXjJ3ZRDoNq9iuniFPb3NCwtDH5yjgZ8TxQ1ynf3vJTun5Fsg",
  "key16": "BP39LcyFbFFmDzbHpxU1KQXfxAg9bxuuuFPfuR7aLsZoJY2JmHArpYAikeWLN7St8MWJS18r1N35jP6FQxPGkXM",
  "key17": "hfVR68huPkCTNZ4Gr3X32nUZKeXroU8ndV29CP6jzpJeJHzJow5Cq7uHvdQNLWFUMSdeYksAx6LbuZu4qZEvaeH",
  "key18": "2nfJ7eQS2ihHmJ3jcNMSEyt6jRHjaa4EXoXVuJAWKrrQ3nCZtHMkoV9u3bsPPr8ekB5KoLvmXv8tkNCertSF7Chb",
  "key19": "5uC6FzhhUGtLe2sGEZu8SsEM6kt23iPxg3kQCiVHDkuxMNEA1hwoXQtudGenFQovZofaWfhcLbxkUQQfvvPrajUT",
  "key20": "2ccTQagcYq2Ba6TFTnZU2UWJ137Y4ZSYhSsivjoo2fmSTK3QAEq1K23gh8abu3h4bynTvtfLGk8PorMxPuTvZjXW",
  "key21": "45W3CLYgbyPE6WioLn3uCi1yyBtfVR8tWEEkYE7Zk9qEhkPSjPCvGoQw38zdksYmEK5De4SSCJRzeKpFWfGNPcBB",
  "key22": "27AJexbanMWPnn1gonivxZkLMVopFi2vSXyQQCPv5maQMGjXTJhJncbdFdmJNFcj8T8ggZVsJMzQ46uK5DQfHtJ1",
  "key23": "14BZN4ygxpHczGT5d4ragdTebD3sKdpK2rgPJKoxP3xFCMabZx1aUV3XkcRPZp84f27HEnAKimzfwraCVHCpnHc",
  "key24": "QBh6mc2vZToptgZQRdWeZfwpJXxDFEaRKqk2pPcMezVK5aQ6VXAwDK3zBs6pQmK9qWjjy1pRJgpHsSr9w3HWntQ",
  "key25": "61LKzjcF6ECLjNiWZ9YFQv65ao857XafYUEnYBMU5fGHKUskQta5sTge8DnzRdQizsUHqx6g7Bj2F9RpgpR45c4A",
  "key26": "5wH9VqYCAcQamMFAXieAHoeTKksTjtLvqGXJmEenrgz8ZXDhHoRRpNrQCSasPRb4cwcvbR3a98urWyBT1Zd9mcy3",
  "key27": "29WPTtRVZKKc4GTdNXgKq4PouMHVeXEeLMDQA5pmUGTrJZMG9wg2gDRT57L4X8FFyVPfUmNBjMfvAooyBw9axdKY",
  "key28": "4G35Sj5wHcJQmsTg1f9odHLXnNR7xh8mCziMRo6D3qj69ABSDFYFaZVij7wXkrSbLLxiqWFFhhLJptGwHwpS8Dpa",
  "key29": "3kfwWibCKDAYQiBF9uJPHUNzviwp6qDECtjYk5wwFb4QeHe9UGFzk1AJAnXTksDtj9wkPsjsn6nnq7quRsqkupos",
  "key30": "4UAL3A6JfAt4zQ4HW3gXzyHhy5FY79PNkzKf6rSRm2n6rBPsN3foUd1e4x3YCrQpi2TW93rr19S4Z5sP7DsX4XrV",
  "key31": "4ACcSKkj5Umib4WXbbQTRQ5uQJpdAdJQB6F2ovqiXZrj8sRkE32e2KbZwikeC6vzSwjUfHSoqKjqaLia43fd1sky",
  "key32": "44bvW8kmv88yZ31U4CqPaTA2q9C2qVULdeCR8zGJLfzjcmBng7TELkdW8a7y8srrmbiwQPWt446dGKYAuyJ53FBr",
  "key33": "36XKaiLP9ZLGXGdyJKWgENcc2VXxauhqUtBdEULbVksYapNGba2851TRbhbLM1ifkpv7P5AN1aBGcFPCxmNd3qvv"
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
