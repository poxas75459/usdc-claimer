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
    "44zZNzbakZzyeQaZ5uHEojEGQrWc7gbsAJn1R9A99quBmMADGiovcAAyqUGZtVPJqKtVAZnA1wgQ8myAest9xUBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzgUxSsezKPKBfBNyim911hFUeUt3aGSHtcpzk71t3BW6Eu9u3VZLWj3AN7dGA5T1ACJwauBcPFn97BVwQvEwrM",
  "key1": "59NrwzTTyr6F6pVjrNnKGa3DV4dbmnyszRd2jE6sC7mYEVfwsxeWSLbhbw1EYTTBCxusi6ZrSF7cj3v99VGouEsT",
  "key2": "3sMEBssNCP6t3kWzGyaprvyQYsenvLyQGpK1coAwtik9h6W4wXLPwcd7nv4rCQTMeJAP3dcW53kLmUA9qqPkygEz",
  "key3": "41cQ1L7fJhS19Ppueh7FMk4ETyQUR3g5TbFBXdTydDhnC4CDHk344vwLFcH6YkWQbQgUzjeBiSiKVVegsTmzLBKr",
  "key4": "2rkYqL5g5SaZAUzoXWFyEd8mq9aeHsN63iUnpFwmWY7TG1WWwMpLPH5P8KeXcp3nKegfh18MbE1H64usfmFowFe1",
  "key5": "2YDTnoay21qKx7k5UZBQDmxrz9dfB8QiGBMoXYNayVrKQY5DaQvkgWFxnVQpjK8iQLB2RSVWKPLBU38VU7piCNRQ",
  "key6": "514B5h5uMsd3a4VEnHLVGpgSiSGyGdQKkg8LEvs5aKyNXxDE9MZfe8kXmtjd3ABpUtt26TRMjdK1XM34z3e88QVe",
  "key7": "5PdPu3uVcfo8NTNpR5keNM3iACT1SuA6JgRk6LRcSa1tddwPW8k6oCQMZN8nRKS8F3M4B8MuPu4z1erWr6yeXBLA",
  "key8": "55zWEHJnNxYWYRS8caP7AemUhGtss29zUgXtwEsAdaEVp9MMxLCNdaTLDpBtgpGA2aAx5nJdepjT7ZWTbWDWEYzp",
  "key9": "2HhENxeKUZor94FWM4JADkRNkoNu2zDgufXCgHtSCYsEuGmn82EGBgNdk5GSvqFdkCcK7cNSEHhMcSZpCiid3xiP",
  "key10": "AwBu6MuAH958KxWGSq8v7rgeFiB3ixDANkA3E7SPoDn3FWKCUaXse3VsCcFrypmgo9ZEgjAQMe1YV9ruegXQQhd",
  "key11": "Ppe7BaCiY7EW1brWpGD4p8GWpP3yUsDDsngpSqpeuEfsjSG7drYhXgHXokTsgnie5BH3293c218hYKPxRkmYDdH",
  "key12": "2WbPHv5PG2crGii8HRNvd5zTNawbXDyfdHftXqC1jD2sUrn36uqGNPWmCyZWBjDgLEKDtVm3MDL4qAiHRp1ayUpq",
  "key13": "4B5QWmVYxYx4J4wGKcFWfKVvnouNRfanUDUJr31PAWuSB5hgxRfoUnU4JfecMcU4HMfNekjc42dv71y9aXCmdWvt",
  "key14": "QM9ncuejuNmy6k4HoDLQJuQdqzsPHMHQX5Cco4m6epQBuLsjEo2oC7VAXzxwtsUqKqJxKFL3fugFvSzm6gv4qLv",
  "key15": "QScn2oyAgUvtg6CeUjfkwomizmYAiVn93sgfXJH3A2tufxW6oKeM8UXphVzd4jT2YZHb8UvoNkHuukaRKo6dtoF",
  "key16": "5QWCBvbxRoTwrL7do1nEDEzDG94GZSixQvnG9USy8BNApvPg78fRbjT3hieNoFzt9JW4fsqxCvVsppsX431hYdjS",
  "key17": "5Y7VVEx9mqTsrrrTsyM8DYiYyxF3Gvods1AcsNE35Z6o67dqjBoGqAVh5JRrkRMJ8ewksY3bUpn8U9nXJxaLQqYz",
  "key18": "3xwvmd21ELfSGyGGcPWmyPYH51EtcSqTZLXAwQ4gDVr6TBQPiiFSKVccgHaLD7FBxsjyM37p6MLi1KuyGSqcsyUW",
  "key19": "7W7Fgw6bC9Mj5L2hzhrVuQ2L6uycm9WTtk93XUvetCaDb6HoMYTSQDPXhgvbFKRcwyAaLSLxjQFXJt2sboZz8y6",
  "key20": "5CFigQiPVfL42JoFzvKoZoJpczPT46hoCJPqiCJXv8hiyhnSMMtp91BCap4HBpHjdAk7DpvvbEMFmYAVQRqyC7gP",
  "key21": "uv1jJAJ6RnZ3GMpTcN7batne2svKucnmTinr1RjxQM7mna2DeHbyf2QqjymcKSciuNiYT3pPGpnyarMHFbnwfcV",
  "key22": "2PVa33mVuE9DaYY6RYZLRZ5DxXRg14CiNYBor71UDf6AmK45AXpCNScmtnAozxu3GJaKAyHJYGzYZuCqNRKY1asH",
  "key23": "5TanAgcwv68AJ5rL4AnNDLmD2dQ9a4HeYPG9yipFdbGzEYvw756x2qm6oQpEAsQa3W4XZFAJwP22vardD7JqWA9c",
  "key24": "5mxLkFqNR7HSEZUJdj2wzUaCSLPWWq3iNPhSnc3hhtzwPamGBc23X3UKVnMngcaNN4qS7LS6UuwtZkZg1zvXy24z",
  "key25": "U6ykVoVujnvuSqojVpveCYnSjBS7XfVogT7HzaBQrePqn6uTAXyw9n19UDpvBNYjBpE5YCQDwEUa9Xf3Jwa9DbB",
  "key26": "yBpJrgFfuLRa2VF3kse8kYGpTEL7gngDBg55NVacx9dReuqTWpv5dXMvLSMcrL8g56FUPB5sr5hMQn7v4gFaHoS",
  "key27": "5xNNY6ZWzVRqPyP1ctE2dS147ZdwujPZUXjBDu43mrmH92Y5uTyCaf4dtaLzTeakJKiRAx4evuUQ5ZaJnWdkAsnj",
  "key28": "2k5wDLuuSVXU7i6ikhV86dGRu84LgsdqgDPaJtP7WksnXSGnL2Jp2XVQn11Mo2skzwmcnd3EKjBh7GsdmFQd9stD",
  "key29": "2ntwgTsaXbqaP8HrScWP5giQ4mvMNJjLeDhMgLH4cA9KBL3QoJxG2Th6grA1MuSx1RFJ5reWH8tNTsUgwaRBBzuB",
  "key30": "44L3yHNXuADiKdMawYDRf6v4KaA7Rd8cYcLkipQNponCV2ZNNTaP163jkgvYmF5E95ymRASPy5ewsm7PMPMFr8tT",
  "key31": "2NeaMemxAvooLWobAu3RM3VmxsZazosUrkY6Rs49axzj519Tpbryy3QQJ7B5SVFzknauGxxwDVWuoxnxgkxPRFaF",
  "key32": "4MjaA9VmzTqq3t3B5Q39wFCkxrF5UwqhFCjwqG6TxjeiRUWZfSLa1iJCPsVeUxUAV3frdRyyMqPYk9RhKSVxx1r2"
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
