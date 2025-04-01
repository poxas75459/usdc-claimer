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
    "2ZaKsCEkJA4diKNyijHT7B18bofpTmsZkh1CRwKMV6CBJ8t7fMtKnvJDdFetYB4EhqEpEbBSY5jE3Rd6uLEj2hXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67QaaALuNkjPuxbUoNXj7zb6k31Ydzha9373ZJEZTs2iSqM6a2NgH3Lu7mWyQyvjRu6Dfy5cBQYigCfeSBZfdhe",
  "key1": "2a5WCAffSxa6Y1ezB5BHwWSrN4YFdVZybz3EqwV8aNjsaia2wLq3WMVUtW7NTqS21evVe8Qgsa6Dt7x69pPSE8as",
  "key2": "5dyYXQ7uuBxn2LahKbBkY2Q4yFmvpooxiEafy8gF1naUmkEY8PeF3JqMxjdSs19MgZ6gA7pSZybABNSDjJjRE6Uu",
  "key3": "xmvzrTshhytuA6N5iZFBKSjA3WLeSfa59E8Y8CLTLZ5vjLFLuogk2BNTFRLTnykdHmjCUziBTuLs56nq6BDwDh6",
  "key4": "57VyFFRWYzGyzDFuKScWncF9248o8xd57xy3p8Yg4EeJcg7tLXrW7T96TfuXUGNhQQkr6w9KfUdEWdFdKQ5kWQ6f",
  "key5": "CAkGut9bGHjhNC5hL6BGrsPuNCNbiCik6KWffoXqQHJvm1K8tNF1e3XhCFjLz4gQLFKHsxCdWTwdKdMeYsDoNCS",
  "key6": "5FvuCNKaLrJAjorARDNf6bdJPSYbMZTxxiVk4S7yKGMz6pK3hTYqAguNtQxgaMyMN6aekUAzH6nQWyNGmr9Tn1BR",
  "key7": "2gw4BcHxm3wt6uXJXNdka2kkFAM3AnVgFiimSbN8b3eMSvmwEQ1C29N8ThYaA4BAsiYetVY4GqgqF5UtB4Z9sdnk",
  "key8": "5TRjch2v2tgV44DYa9ccw7CJgoPVHmv5GgV3h9crfJ5g3nsYv39x6SiG2qPVp9eCLBirFrG3R3Qvq12K3SSCKyy",
  "key9": "4HUnRoSXiyvYbSeuVcrqgnUwpE4eJjFwvdgF6CMmGMdMc79oPNiDTXU3b8udqQFXCdyR7R7kDf6gcGqsybd9gngt",
  "key10": "4mJGCEMvQ6d6zgShaWhJqPSnUTTk8mzXtBz7U1uAH3eNGKH2txFzVL1nAMVp4JA2Hq56jWithpT1sG56EDqPJPop",
  "key11": "5EhXDUL43tLWZgS4DtAiLDP4eS2iZ2jX3s2gAVHk8BCV16x7R4faNP3eZedDiKc5wP3TqPiUBX95ZSzAsPVkj72S",
  "key12": "5UMf1LP9TDdNKF9aHzXPpDogCnSZbusF91zN8m2UCPHxd8976XgZN238iDyTy8uuMk9vAp711Ux8jTrqH4X8m2po",
  "key13": "2NRpqsSLDqBFuhkYD2LcdDCzAUUFsKA9t9dTAAXF4QQJTqpzMWZruFgwty1UoqWKwGxe86u5oSL9zSHv1WpTgpsL",
  "key14": "3sw5uHbH9Ce1Ap7jPjVFngLXckGBovfCR8b9iyczeJPTEPQrfyRdrNa2rYN5kKKFMKpTq3kCRpftTMGjKhjdCQmu",
  "key15": "3mwgyJTTo7iWJmfG3Ao7ge8vd6HbM8ihWUtFTsJGB5s921piQeGAreioswuxddfZWkU9BJxDa1FD22Nf1ZZwjobW",
  "key16": "5g8FzGoBSMApsKDs3h7yRAqrvTMX7TtrVVQtbCWnmjupCqaCWyFWPqnCo8L38BzpTuzW3vQS5v1vaGywainQvoTJ",
  "key17": "3VJM2BusXYLXByw21Tb3hGpJXWTRm2o1W9SXKPjUAcG4p8o1uPrk7B13BvLK8dDaccH7oz8skwTsNyNwkXMr2gU1",
  "key18": "NvjcqA5nrXv3ksm63bq6HBj8acpjV9b1Rk5Pne86RaQxDuegzVb28T7whRBvNynWkPn3yKKuiWmNXwof9D5ssG8",
  "key19": "Wmw2uCsEk9ipFjU3r4sMqKrwSu2UcLVDQQEaqhypTaV1ftsLNxLgGcv7F4epDCDtuDbmAzPJUA9EdXcmbrBV83C",
  "key20": "2BuCLZ6iTFYrtVEEB8N2puBRKFYDJqdUSwh3jXzRpA3KDtHbSKSr2AiPDBRuyzgvqNbdL3Yg1nvw72eNpxiTAnuc",
  "key21": "52hmj3bx6kkoE2Kc2vWQg7Cj3ogD8qhDmPNa3bXxiWcYhjyF621Y7oHNvw1sCdRT5LrBMfgRavr5vswisrS9bqyu",
  "key22": "5A4jccK13TdW1LQ42ZcwDzQywuz9w7Jb8bmSoAnNN8LWm3JNrjDqYG7gETuCaTc5TXRKGqp7MdzjWLRYDVQvUX9o",
  "key23": "4CTcR73n7en5AKPwBxuRmdwNUwSmEgM427gx1mQS8mgiXXs4mWZm61JEmNgZMsde6Na2LryVH2946Saxz8tjefeT",
  "key24": "4E7hvvm74dQtu7SXWBQhmB3d3wFzknaNzHgVEMDkVdvUMhMLPqwhmgGf3mx74mCLixDZLoedUfHxRjRgGHgpWbve",
  "key25": "3pbhk5b3kp68b39MaH7TDHRGPUxA8y4m2F2jvxeLA6DnGCZiQvsD2Pf7WKVZersWsXQMXKPh1NdqwjaUvBJ7d9TF",
  "key26": "5U9MrVyAsQESypb6ig1gSzv6nXdvcvpcU3Ws6XsDCNC7vrNwEpnSQWV8zkhsBfEKNA8VY3iLJzBcKcFcHy2mMt52",
  "key27": "5MZ6mcmNjwPiNnJP5GvUcbw3aps1gkUy9AGwK8M3aVToND7XRUGGoxz2j6vzpXqYU2HyAWTNt6jhJ2N1sTLb4b7Q",
  "key28": "4yKGvA65VmaF8QriHisiqzewbtWz6bnUVx9YRRggbvhA615ghsGK6wBEEmqiTvjht3DQKKAYcjyJMtUxVn4VC7fP",
  "key29": "34qPTqngCPDYTHTTPpWnucf7UTRsFSvXwG3sGD4rKs3QE2tmXSHeiwNrYNJYB2T8nYy5dtRrWdgG6QANsZBE8Np9",
  "key30": "5KhSZXGrhvgrdvfLkcV5565cGGNgasXfr75THMHumgLD6LpjDGeeJk5PVqA9ayRKHS6VotmiUGqbUBjk5dA1c6RA"
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
