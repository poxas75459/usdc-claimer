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
    "5Uef35cW5uaVg8ZGb32xKt94W41pBz5y4BDcmuwWjnEMx19kHFKA21exsnK4DzFnDuus7LdAysGHqMo9jx4E6qiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "egwN5jpeiBQegTf3M8RjxMBo661kkBervskHRbiPTioDAiBceiCkKgq4ybxQFcfUzRCcumWDTDsBSSeQSGbgmss",
  "key1": "3rmimcEvJJPGkhfhfMYrcVzuZd6DgBChPaqkYWRHsMQi8wdXxFiEQELBAtxQyNSNdhrAx9fYGPNDsmFWm9Z5n5Nf",
  "key2": "352zrT4gvyHYBVrFM45E7mhKLCJKqXSaS3kAc1PoeiLtR4yYS7c2dmAnQTmVD2fLgsKm9wnRH8uP5U6ugB6FNSS4",
  "key3": "645uhZLjxgPZCun8WXqZww3crXgg7xcCe3mEhHZykp1Y76DMM72X4krNpbHaW1Q5veXah4Neik59LvYkFakqPqwe",
  "key4": "2hBtUbxZs5Nc9WRf3ktvHtEfa2yyjkyXouNLEZaHoSChB2eiSX3zFpzBf8ezrfgxZebLwPMsfv2sPFz1BFAUk2mQ",
  "key5": "4CeNbPgtuKsB3SYdBse6T8ipY6U7zRTytTVC5fNq43dGMkHiuheWe2nJqvtKBRcZnqqeFywYuW4TdDKMaALey9WF",
  "key6": "ssr4jtthQVjYNMWP18SwhRrcsp4ATfXSuYGRwxdGcY587Qe9prHqPADZRPnC7yi8Uawcfuud9bwBjemiJoh6MYT",
  "key7": "4UX4tnQVbjADYNfjMomQ8FjCMta6q8CtirGiFFvNLKEFP3Nj3dSSQH4F7pZCH252TQLgBnF3QmPpmuge3t2EYCUh",
  "key8": "VCZWCAWGWTYUaJRp12CqpuebwVzQjw7iJA5UTPhSs366rT6f6xQKXAordUhLADTuh57oGjDfNcuGmUdYWxXUXM6",
  "key9": "4c9PwA4Bvjs18uhDSxkcnKoxnbhVQiekNw8wtHrk9LFtjdJ55nEPxNPrq9URaMNSHVN9XkE4ZUbSnim7mVNxtBZL",
  "key10": "7HgBptpTGLwAQWDgeXBsDfWS82aGMP5db8BRGB6WM5ZmzjxaES2ocfJuM8ijywbRW6KJLkzT36iRVahNmCyoNRL",
  "key11": "26DpSXd9T92ajN8UPEdab2YDrudUHNTHyGFaLqcxV3ovKcGdaRtpCEY1Je9TicMw5rNXojR8TX9jkyd4QzpVprV4",
  "key12": "3RrJeAzus63AvrHG2rxTD5HPz6M7iY2ctB6WwWyJdKrqCZ1paTNLDhgTDVuUWzg6GcY12uCHb9vPvHgsJtrkmoPJ",
  "key13": "2ep1t6Cv2e9AcSvvFKiWD5cvwUxXEYrof8ucqb8PTptMJATj3uKw7oU3ZJe39pJoYBwu2jBHn4BfeLrHhSKCkgnf",
  "key14": "3Ki8k8j3nkLRQktW6SfwwfHQhPxuLFVzZ9en1TQBFdPwL8JTWmDBUxrNtpDQn7toCfSDjqkmmNmUJNtLKYF8URta",
  "key15": "5Lmo9F14k3xZZZEkfriiV5xnzq1tpoV2CCqYwPncHZmpzqCo9xXhDHGMcF4kDeiJkyFKfaSvLDuW67qp91txtUH",
  "key16": "4wtYZBccAX3oT8wqCWr394PaG6PKRGc55RZobtUFLUaeia3CQVkGsZTEktPGRSBcdAGn7wpZ4J4xHqVLhrEEQUQp",
  "key17": "33rEAketgJkKGzi9XNYXRWyo7HCKgVPaHcQt6cJmyDpGfUjwUq3weQBpsfJt6uUmgFCA9fdsUspgELUEXaXmsUey",
  "key18": "4uJ9y1X5C2KzDrFZyJXUcYX6LPbxYhkvzz2VDAEmbrB5ucbFvqcv93uZ5U8wKdGhE9yuogoVyQhuNo2VnZfzVhhA",
  "key19": "xfLtEgnPAw9UkysA46AYwrtWASdAcYm9X8zQASDr2mWxsXpYMhJbWiuDoT6TbQdznxfcVfw3YmtHNgLjxNde32k",
  "key20": "9Lehi27MqdTQuozkzuevr4PVANnRQ6DyK8QMvSNXhyuQGALxJRiCC1c269MYWBWtZdZsjWc9Vf2NGGrqxwx2Hdx",
  "key21": "4Ecy6Tat7vdUYMAzFL9efMK3aB6rTZFUjT75LKnDsjTpMi3ABQ9GNEqkgQCRg7Zcyzr69Kph4zbp6ZkCTP3WXUQK",
  "key22": "NhHq8GfpRGzrSN97ZqtcYWrJXmCZoYSpTFFru7vYC9t58EUmZPXrGYSUjk8aQC5vi9wMKRZX9AgakWuNkz9cbjp",
  "key23": "3EY33Zuf6Yh5rxi9cNweMMtmTzuSa5YZNV5eDVotPBMzWGdYJvUXnXSLUWMwtDy5ftrvBVDGxq5XLD9inbuKCczt",
  "key24": "5jYzDeHDtch9r3kRjGXB97XBYGe1ZrPQPx5Z2TXPr5e4pkZ7fbBsi41V5G8esXTynJ1xkeRUoT2oirknLZQNRBEC",
  "key25": "AhPZhPEMQCt4Ypv9FvQJ848haTRZok8Y7jRqV6y23tfQi1DvuL11TyxUjQUTXnpju4ZgnsLkvXqp2Pcq9XzXnZv",
  "key26": "3bwQs2omsyf91zN3q2F1atUjbi78BVqbm8D4wgXE6wdSBJJ9qH9WM2bfRXZtKDNSEhaNUZy2xUewpCvLs5jmToSb",
  "key27": "5J8o3FrnfvqoG1L2gjgWAkeTzWaJyvXRiNJG8pX16UohZJqgViAtCG2cnJC8w85FukwFPRJtAcugjtKuybp5jijU"
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
