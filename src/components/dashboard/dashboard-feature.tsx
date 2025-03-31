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
    "5yf86D2SAnMCBwFAK2h6x5C75YqdaP5wEUXVwFTJjiAqaQvLZdkntEcxToeGBnxArfQp2U5brNXSuXW4Swf9zfPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BXRhB67c2MVU3Sof1YtzoZKkTkZcbyPqAgfKBo9JNqPDpftwED7ckZvwNqWorhkZy5C4Fk9a7JNrLB9VJjfd5We",
  "key1": "2ECGbR684MPGDxyYj7LzvJXo2bqJWpWnW9g5BNqnrGvAWC27HWjXG9wo3kWe4vFcsvseKhVPKQRFFoqmNtarqahA",
  "key2": "2sh6nsitntvwXYH5j5HimobXtYsph26rx4nqbusHPPEG6bT1jeiDFn9qTvLZ3wf9j5iXyAkDFHBFpNkrp9c58oCn",
  "key3": "41RE1W3K9r1ENPRTEN3LbZGe2FdmDUfbcn5cUshp2ywGmtJo2q4zXtEmckbKfCpAk48jSqpDhKsHgrK4b52Cz1eT",
  "key4": "2yp8jQzBb7NGHBSzdbjw6vHByFCTqieRdqJMw9rpfLEXoKg9qoT4GYMmarh6FwLt6gomy1WDgYuFg3Kgb5vVkYC8",
  "key5": "4kWs1wc4HLtt4ag5mdfAgLAi3JtZFTmkepB5MMLvbmgjgSvQsugDcGq97H5sFgLZJ2NAQTpUPqxYPoaSUjMoDHvU",
  "key6": "ETxEUh2XzpVWr7tZYwMDuGvybb6Ba5eanzAL5emJfUXeVU7JAAUzu2CLo4bHwrgzEHgmhe3sUJTeyKk6Yo7HMN2",
  "key7": "4m8xo3xFXtDfTqjYHzd2Wa5M8FvjcchZgZYwL7ZEavmSHeMM8erA5uHpxP3TxuWekonTecMU4cjf6ZRvwUFfm4kP",
  "key8": "5AJUstZ3D9GQd37rRKnc8hLN5HY4HCNKTkXxiK8h8SxSnCW63o5YEm17F6c5wBzK8vE25e4riqU2vQ42AzJAsyGc",
  "key9": "4SLG4CW4bjNGodAk2cMbcb21mYgWcvpy8brjtHxYuvEzstQBcvjzCLjb7TFKCSkG7cA8KN9FHCfmycohNDwQVyDe",
  "key10": "W1Yg7LhNQFawL9schGcn4eV1iWabX3VWSiJisQCRx4px6bxKgghomgTMM7X8WjB7PbHrS2y5FimP786fFt6zA28",
  "key11": "4r253mJUZE5qtyuaWRRAkNN2DoQsVEueC2VsWuN9JgfCF5K7E8PavE3AsScCaS6W5S75jYHZPuCzWqx5zSDVYg73",
  "key12": "4Ygy9HHtu7qnkxtCLvuqyf4HmMMMbYaJXM9JEH4M8LMVZTuHaaXkShtGivQigSFmppR1M4JHTWkQUtXKnwGVhKBD",
  "key13": "3SeUJD3znkjdmXLxoH59fUYgB5t8MSuwhA4EPLWcd7SKmf5XH7jYo5J5BPfDcdszgqGj3R3yt8wh93LUtxUo98PT",
  "key14": "Firmed986zMeWbQKyjxYtvv2vnZDYveFZbouP3XhF4mDobENteJqVQgV8ZkqDxsQo4WsvFzAZwbum1LU3zskTZc",
  "key15": "Bzfkg1uEtvjE5RaAp2T9izDUw6xqY7auDzcvdxNx8NQvmb5xzGb3PF6BUWJE5FJGdjbwpzruk4UAVisKv951aP2",
  "key16": "QQvm4fjnEf6xigXjXSBBRxD4jzgnZM1CvxRwGaXyK4niugTPJ2stjmpv4CtaPcdjjF78fRgZkg1tQqgGrPSEpza",
  "key17": "VMnZgc4dJkKjbZANyqXq5fkk86FgBSCMxFy7mQ6NZqEXT8kQwk1q6Ku4uZGEcXG4tXJQrwFAFzbqdNdY8mHeqmc",
  "key18": "36hkQ7v44kTatKe61LFTXEspMp3xGt31EttmKJvvMLaDz28g62XkLeVV2Mj8CwRLyF4tEoo9AmhLbvG9FhUmgB7a",
  "key19": "2Azm98qmZB5wcdVgCpsMUmCbmBDtt6Y69JASXviHaSGTYqEHdq2CzVreC4Jc4rzvhghYds1ebYSJq5iM9ZWzbXVK",
  "key20": "5iBzbtLaq8Z2mU7pdw5FjP9scButjMbJ3YZZCkSYeJxN5mVgj6caNwMWBuadcCFvZY55eWYUD4XLPjxnt5cWzm1f",
  "key21": "2AXA6jeRoeXfLgA9rzPDpKPnAszNG4A8rMuXC77xZLWMQqkxRbv8YEj9njdBCPEqCJMsaXEWSJwWqD6CnvBQzkx7",
  "key22": "4zSk8Ras1zggVGgfnayAWXEuFwD1wVuaLd4fFXx7d9K6LP7Cveca7h2FDRhMrmpCt723S1kcrL69meKQoAJFQaz5",
  "key23": "3TjFq1Tog7gCAfr3LXNgPZ7riH3VfVJf1Fj9qjVnvTJSR7Bv9Hwg8KoVhqtxw4aFzcJ3u15wYdAfrcbQ8GaQSjkx",
  "key24": "49eXhUtV3dQkaHAtFpyo6aT2JXq9YeKehSAsycpHekyTqEHAy9a4zL2jfSpkBGawzgJJenMcwgn9t7G3eGeiN6qC",
  "key25": "Ho3sGHKDEnwEhe3fjNb8WT6Y6iMQg3qpAMgempgRaeAU1Upri47uSW7UPsqfWWW6KTNqUXN1LDU6ZjHgptUdEF1",
  "key26": "4nYrwHh5mckztkcP7ThUMfRZ91AZNnSjyuECF4XiwR1mwahD5oojXnFnTE9k9dEJDMb33iF9R2LFy15cDKG7PKdn",
  "key27": "KiS4KDstahTfCDW9Vf8xYRo199mt56sHdfxzGKzLZvkdmNgvu9apRLdvCWnrsW1KAT5hncuVSgNtooKdfCKdVRf",
  "key28": "2wJCyfdYKof3symZNj2VwbYc2crT8hsNUTFscjHFJRECwvi322bARzKDNh1DWgkuz4Lt68oFmRj1V74VNR634Ees"
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
