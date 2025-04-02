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
    "3tXprsvEvBPSEat6Vb42NkaeWindsJkn64Vz7UfmTPKRWZXu2SoarntiC2NJpZRr8uhaYEvunLoXxS1d5kYG3wRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sGxcr7qzP6hbf2uWd8FmbT9km9Y4N3x3WacLaBekqixxJbrvL9g8gMvcw5wfgDMgXtxdVxAsbHMe6J1GQp4UhVw",
  "key1": "2nbT9ZsQNucKL5HyTec4waHnt4AyBdAKu1NaXE46qgJEpmw77qrmb8SbdHbFdHmQW3V8VEPn51MUKup2XjFSvAse",
  "key2": "5mrAqaR1Rtxd6H6edhsqytbymnEkK5axEZQ52SwN9QUkcG67nnJJA3SuppSEQ3vvFZPBovMPcZKC1Qi8SeKCVEBp",
  "key3": "4NRZk3X92CAEioNwrpLUMZDU9FamWwZMximWKab4WqWS6G9PRP9wxqAda6m7SNyvP43yYv3oV1HJaQvnSs3yNPCm",
  "key4": "658myx9vLw8r6sAgKwQJXiUsrVjBRphKgKsAuuvkdR4fkMXXpW9okmV97LV2fYPS9SR8Zi5fcBjq7FYSdDzYgBNo",
  "key5": "2UkyjmH8hJKFVX8aqqNBDy1TFhyae8GtpLUNn4UQf3qkY9biRgsDExRctz5gDL6EGyTXvCMTuJ3JQ2e7NA4jy87B",
  "key6": "3oE74UKP8Hb6Hy8bGQJwzQMNMhL7yBZ853cggwdFEnGgDSv2xr4vCzu8zm6xcWmfUsNcsPqLZRg5xMHQezoiLL5m",
  "key7": "2SCXisFts3MZEfhVCQC4Hpcj35gfZk32h1XCaXmuhbURuwrmL5bnFBBM9EQej7KG3AUPKgej5CJazUiaxmw5uDJF",
  "key8": "2Fw6TxVqEucPT5JNhYDZb7qCwXaPpwjowf37Ns1omfkwfSX9cD61oFLZDCWq7ATYZP4NLerZuh5LxNQuJtFa52Za",
  "key9": "54rVjfruBzn7TqSxLSHczzLo74GMpP3PGDGRwFVmwH3ragXzKLymjR5pkvJWQBpCZpdA8dwtEv2hAGMCCDMuhBAT",
  "key10": "5mrmvV9fD9DRL71h2a8XF8RWocCZmG8bbthq3YZo5GPckheEqh8d4wZ5wUhhapCnHPDdAQFUF7o66c644TSXgYbZ",
  "key11": "3Yr42nYDUvnPnNYMErBjJHbteiUZY4q1s1785bmnTDW4Fmt9Dv6ZQommcGMhBjhtP3dagv5c8EDvxZnBUiwdxwKx",
  "key12": "4Lx8PrcxaocfZQX5GVvLTmvBr7xXYsdzvSCfUiedwsLAeQBqW8muqVAV9NfEDoZSE4wnZKGd7wofWTUM7RHZjG4R",
  "key13": "4Hm3VQ9C4T2D6m5H3odMruBm1iA7k7SQtkCekZJaCTMwvWdiMVhwzkW5JShP5LZKNH5ADVbaYDTw8SNTohxz6ByN",
  "key14": "2JRcPCZJuuKB9r7NRzkHyGs6bHUvZ8ukggLwYNQqpCceQDXud4MpAoyvztm2FtGZpQK9dzgAW5nQKLNDuoKFdhhG",
  "key15": "2Wt5txFbrJUAij8xT1Ag98tk8Eq5kWgpBdHZsnP7XS2Qi2eQ5LDM4vtc461DEdiqLhVw1zo3icCQ89JmSPuvCC8y",
  "key16": "23m8CCng6fDZw75rZJ6UAAV8DV2wBdXb1b4VdqYRw8HGoVUCY24R4XvqfMW6wVVdHNaNTvVG2R6pU8yLDFYvGQYt",
  "key17": "4RdoDrP1RMJakMzz3qW63YkH4bjVTQTdRPRZpzvp3thebWL9Pxe7Um5Lg6tb2GpNNPkeK5TQ8cQNX3tshLAEj4zF",
  "key18": "3Q7rWLzfViujhj9RCCqZwWkUNUgbYVHDkX3a5RirtvRz6E6kCYqWzxdKuYqqPh2r91iYXq8yK2NeQNzssAR6451i",
  "key19": "2ZYsRciDqRqnzxQWKxeF3pMsw9Jteg7cxpaAD8sMEtL4TSbYrDMJ4cCZGscrmvagkQrF2fqusRFhyM4M47NdxpJW",
  "key20": "3rbkxGRKo7JHjKPANPsVBwoEw1xUKVjDiq6XAXxue8jasJpUQBgPiHT7wKvBU8pYjK99HwxpXYhCzD4bzW7QRA4i",
  "key21": "5FocMsbjT7bw1cLjqkGd5gdEAYk4QPKEPCYBKXMaTd1ut51VX3ZPiHTqCtVUmdC1dHbKbaf6X3ay8GDELwKDvAAL",
  "key22": "4EsJZdJpT4MQ6HZCyPTpB9rhyEsRaQ8DbTw2eATtjvU5FZcVJzxR2uCvx2tjZA8rjRAtqDYKcuWQMmbuX7k7eXph",
  "key23": "5mxpoBzXhJcSQaLDNeojzyTrpSRpYvzDKmfEBuMB3mKzurAZZB64ovfpXMKLproEq89jmzChqS3HubgKPUJ132NX",
  "key24": "4ohh8JdWnuM4HqpHNxdCmmKTEewCvfhWEGvJ2NqBNNUpkH5W1YSWsn7DvVHiAQFZ4hk7ebeJ9zQZML7iyeqH9mEq",
  "key25": "Kd7MHZr4eiRrHuwWSXM7ue7TcsDXWuin1kcc9hu88DWqXnBZ74v1QfjJ4ymvFc7JcPtZ8w68hWbxoQA9pbeDiDt",
  "key26": "4GPchxTPozMRusy12AfcBusnayvLGvWrESVkJcfyZvxDuRxTwvN4ZcJdHvP61pQaPHycChmcgNZdABRs9Yn7e5Wz",
  "key27": "3EnvN1AZpKzKstjRqdiFw6shgCKhQ6oDDYV7saZZ69Wwjrb4osNn5u3kPzLFax9wWuuAPn4DJUzr5Dqatvvw5Jyh",
  "key28": "WduF1PKRNWoUVSF6pSLgjrEu3QWCEguhRS8kRNKGZZeKpGPU56fVfTBbLUod3AwZbn2YrYmr55vTSmpLa3J8ArZ",
  "key29": "4Dthx4kZ7C3yNmyZ3SthAFJC2UCwSEiMhEDVZcB4sfVfhCaXPHANcUocUFc5qiFYWyn4QGAocXrpckP6n2e7WCh2",
  "key30": "65fR8zUrHCLWDJ4HCSVhgXxCiH2d6F42VwVHU8Ra7qJmTb5qDTNF1SfB8PBgRbphHxm3vY12wXtYB45jXUcJDVck",
  "key31": "kGZAJGWDbN5yrP2ctMNen8KHc2hwwPsJwjZEF4fnGEQsdDkyA9sgTyAPLQe5bHGxZLDwGEZeJjrRkaRBxrT31Ce",
  "key32": "25ZazUkToJ1j4D8AkeoPUQBZxULHEsP5q1Z5EGAZk3t8YBFLa8AoTE4PU4KBbEVEygq5EfETrWWeKdAXTc32Awec",
  "key33": "3L5fJZ2fSnn5iKgYZXwCM5aZksUsNqcVBMMuiZ1u2ZXvV6bvMc35xejpjHsEYyoxeynEGscQFAUZHJ8pSRVXPJho",
  "key34": "2HyUUMBWpfd2iYMZsAgghVyaBsJwbv7pKVFu6ZkRaHNqWNS8GmzxKCV27iQpkeJd14WGrnpa7SyvBkykjnezKW48",
  "key35": "4C5oJvhRjHQBRnRhhYsZAL3pM2Z1vv7B6Mb7opA5anKZQ38xHUpwiBt7DvauiSG66XdgjU2rHLgAWNbXf9HbdLku"
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
