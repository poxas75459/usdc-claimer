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
    "2B7LKtxcV75GahdqMkuVWrRBr6BvHTadWPDPinnywgGu3TNqhcBUeztb4RpuEq1HPa66EgjYoPNVyqirdxD4mv7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rBGtGizDLPhovhM6LytjgFRGv16sE5QWfWYEHGAwrQkjdF5W8gy5BQ9QyxgKuh67Qhepzz4JdQaqtEUAPkzKZuo",
  "key1": "3bp7hwnt7pmpqdqgsAkdfMPoqWV9cg4fQSXQmMSdwbATkqVsevnHabXWmKoSopP7higpRKQzrF5KNJzeKPFvsXMK",
  "key2": "TqiXXYbQZixTi8nqHux5uaXdLRSLztggU2rhCGeGZ4RPp62qmGJdKLyfofS5eENgS4xxRYttGAXPct7w85mXQUD",
  "key3": "47EZ6N789c5LVChwW5W5tHj9KuzctzpRAK6ygeFS4myhcgC51HEuxAds8CRoXjXGMVbJQn12yPB7Ygix58D3hned",
  "key4": "4qL1HL7U8Ri6LyNNQSdYaf6uXi5YnGDkYvp6hAaQmXKJk4pgUt364QBQPJCfwRxRyU4i98MrgqJC7WkKmoJmauEG",
  "key5": "GbrnTxaFRxtmfJJVQsfxesRJDiE2XiKq4cbSynnPhYLvi1DdERQg5qb1TznFGmE47zVWgHgNhBWHaNNfnLmV2RK",
  "key6": "3P7Cvu29z9CHyFHSUBCompyMa3k2u9jY6y5ammKdK2itmWjPHPUHyFYNLY3koWg55vDKNjgzA6r94SkNvUYx9E3A",
  "key7": "2LBqL2m4WSFcoLBcTVuti7aTScgBBzGTpxjqju164HCdyMuWLuafUNmzn8Voub6SL8FH7exogNL9NQ81VX4KUecM",
  "key8": "2Tzg6sowHwFKQo82Yht4E8doPFsQp9RXrnasLqHJEKD7qiCA4JYsiBeCSbzqaKE1XyhwBAKHd2UezkZFdprypqzH",
  "key9": "5hU2wUH2EtwghZAVe4A9DRSin4E1rVC7HHvAjExWyK4QxXRSKdgE9k6nVbbKSGLVpvPKm9M6LsU3ShYANm1VSYzn",
  "key10": "FQTC7GEXXbB7E9MNWTHDZ57p8xqVPWVYyohXkmFfv5ZJzDKvT6CsiEJH9TeKo4MVFoX5XD7qXUGxdsVmm1mvg4m",
  "key11": "39dP3bqEn1f36McZbiMxzFvaVFS6bCxZ61FRwnF8tbpMZuSuUkEozseRqKKhfWk5aqW65CPcLpEKooSVTYEHNe3i",
  "key12": "Kc5ULwaaCG9E6Mn9x3pxku52s2eTsBP2nnMfER9SkTkCDR88sXReB3EJvouHct4jCkeUSWJhfqsN9q5uLPh5PQW",
  "key13": "AUGkEeupvuYSAoyBiBQzoqSE6hfQntDVCjniicA8KSEzXWez1bVwuSokrNrzQmqrjPakom2GpsrzUXFwZKDmQsw",
  "key14": "4u8QLFyuiN6j2jCXYJxficJj7jQKqLzWChepdk2m2DJ32h5ZkK4zFDi2b2tcGGxTFfhtLzGrkCsoMocZ3bqBXoUA",
  "key15": "3pTEZMckvYEpL8B6cbHL4encwHgRJGmUtPppUr6352D6tSPP4e2FMqjePLiiPXcsqimHUXoxiVzVjdiupqLPMQEN",
  "key16": "2xXAAFjxtFKfuKjLPhoPDA8SxGmpYZQMKwJbTgFhEe4z9mFQZkV2bKRFLrNRqgGReFGtbwVabrDeTTo4S5wS31Xp",
  "key17": "ZudRWwhfgquExrU4XxsM2Z4SVQgUyuMgcZbF6kGd6A1qvbti2vWV9qEea24txbJaJGip4uioZr9FdX1BpTVjcrX",
  "key18": "3bKnvShbNuk1AY6qDQq73w5pv6M42iGRoKFJzVDQvXLaua9DenThRGhrppAWBrsxt2YmqYg1SgpqPKQuKeccmExE",
  "key19": "2fo2BXCfQehc5nWX1DWAp6A178pNH5uw6mwAjPqmzJhoBPCswsenLKCVTKqG6s8aoh2LWgTmEPuWUSLPSxMogtHr",
  "key20": "3NLoKfPC3PcgTG4JQ8tDsvrV6JFRsZyREdEH1dzGMdmWHJmhkQHxwvQnembuUoVzxT4GgpD6tguJrB5Ms8v577Dc",
  "key21": "KmLbhutJ74oJnzcqG5tPYyr7FzXEiUWGCFni4dMaBfwXJTEG12ynDutFjFnENancdrUvvbY3db7v2TExwHDikJE",
  "key22": "62X8b11QjDLdebbnhAvM56wcDfsJXKejBtdpEvSYoZxpyEUvg8SCiycNFrKaCzixmYgxHeHdvE8WoLGigSaASc24",
  "key23": "zdqDMJZVJ6UZBYvKZ3p7HsnseqRpJpL2peDv4U3VMZAZNzYXNgQSp35jdH43695K22NHeyYNHiNyJHGUYSfPVng",
  "key24": "3geKbhqrGRuasEb7gLwvFrQSKYRgtJ8jzy7Aa5TGq7uU5SwBEEu63f2ejrohNkD759s3wbJoS8GdsrFXAGvXsiH",
  "key25": "2nZUkALe1CRNvn5TUzfsmYgnmHAJb7d8uKWVa2CZPumzbLUCVhkU2rboBsmxtmLycFjwSZe4BinXq7oWLNNinAkz",
  "key26": "5GPVHGEyaT6nkSxGfhwxwoPzzV55qyaXkHAQzak3CQJHRsfNLF38SAMFR6r38fBzPnjsEKHfdjeV6JhCvNHzHRM6",
  "key27": "4HqRjhLGoo8YqPQTW8wTexjHJBMRPf8NthFKt8LeFXAy7aomScJoj7rA6nG2NpM2XJw9Kk2u413PUmTo4myHMkCL",
  "key28": "41pr6cX5t7JtF26TeHNj9JcVeSrqXA588EfAaqnyiJYEkTpURj4fSY7YpA8mxXz4MxZTSXhsRptyWucNFVa7bKft",
  "key29": "MoYqczmzmN3uPooni3FW4Y7byYs7gB3An39KSwtZFC3mK55Tgcq3sepJqSafu4ywe6ctUCPz7qFCVDrH67xgxjC",
  "key30": "2U8m2Tj8cBoR6qtXKbHrJZt7j7x5ecBdRCQH8EnVUD6HYrLWBGSp48cnQrSBP6AqTppo4qQKXoiDZeKhMRU7azZH",
  "key31": "3Zyn6B6FEJewzkRXouF3MRDLk3RsWPFFyaKxsnqMuByyHvGdDwaT8M3THKeuqd24TTFWomAXv82vaDVqVM6a8Loy",
  "key32": "59mV2AmJGm3tKZyH4APCwVRhc44L4XS7ENMMKnHzg5XpTEE6aNzqmv8ozi4v1EEvrmrE38iZbRB43R3bqefcJveL",
  "key33": "63fZ6fDDi2jwJ4vyfMaUyMgfysGojCp7EiH4e97uhqhoG773zsSgy5H5SGQTu2ZLuvz9SoRLTt1WgaZfCwzeu4FU",
  "key34": "2kVdeG2FcYWSCwm2zKvKtYxoZ7KRwPyqiPZxX6VNovXc1EPpV6vMJQKpE3tQEmXSnY8uS3hFLrNjhMf6vdL3UVEh",
  "key35": "2rZvyHJqkfQFKRbxSY5xm88nP7ZwsiTXtFbSqe5ew4Bf9dfZy3P46tMWhYySLBJS5vyCa9Gdt16iNrHQPDweMdo7",
  "key36": "51dbDsMbuZXorkm86KcdMShMQdktwzZP68KnpQBfdieTVpHz9Zj9nC1Javr2ppAMyq1K3AG1TpruqqCmoiPaZuv9",
  "key37": "2bfLXHj843L4qKg5WR7jvw9zg8puTX5jpNbWZ4sPsrRbueUGYsbejX78mDnBmadL9sUWj85UtXLTip1GtzRdeJv9"
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
