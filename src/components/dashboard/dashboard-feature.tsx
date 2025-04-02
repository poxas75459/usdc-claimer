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
    "65MnEwVgo6KdyeQfZoxohBGMQjWBiPFPgbxFdp3ymsdmXBHS8BhEA1Cu6pq3nSzKuHynH1cZJ6b8hAJaWNWwL9XG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33QWnSjbmaARa6mCV4qAqM8vQWL5aEqQpB1L8owDrFAwXo3M5mH9mbUMudGyM68JwFDJjQvDCv2AhKGFsxnGRf7t",
  "key1": "1QZ6QueXCM4cLZ4TazjNjStwNoWmPCvqgN87sVCXeTsGJJBuB2TF4syMg6gzPq4vojcGkzZUKVHivmk62vawcEv",
  "key2": "KwM6iFB6S75KoTfTgq8kLKBzgtipi4X5m3USBLk5LYa4XVZ63jpeweLmqVE8FcQHN9uzQ88TSZ2rvZTX24qHQ1d",
  "key3": "2BhPqcCJUTuEVDzpovyDUKqP56WS2GrwXNaUAR7AccTf4UJ5g4pxARqgzmbe6vnh8jZcDhyAePw6wetpfSiNGcja",
  "key4": "5UA6TKDX9FzoMYo2cVv9fiZJ3FFL9zJYbGMNddWtC8EcMJ2x8VcTh4WtgkBEKobRAT2yVieehw9S7zVVDFSmfVek",
  "key5": "5ourGFWeJXdomL5627QCfVmiZe7BDWJwbXzUThFMqNjPR1qQ7LnyqD8FBoVWYgR4qNJAVBeP5TZghsFHiQ9UKYYg",
  "key6": "3m5MitX7bk1mzzhWSewgH2deoPfKNASeFc1xd7RwedngkrHWhZAvJXauz9u4BHRu5yyBgB2BXrE5jW7jVMmjMvaS",
  "key7": "ytMTNZ3VLgu6EavwtnKWTXD567oUvFVQ66B6ihHk55W27yQReW8wa2qPWR9AXyR4n7c5uLZmzCSN2xxTkWvaUmV",
  "key8": "5vHZLfQgZ96dWrsXbAbu93ZFj5Z6xC53p4YUNFAMcF7J8M3w3w3ysZGvGVyKHaP9zS75qiVKgeWZGER6iJ4MMTYi",
  "key9": "5YnX8wfD2rzn1WPhKc4NJPnq9jrG3P7BzGrEXWjaLMMwEWNk7KSnyDjUba1Y5ckcFU8ZHAJfAKth1hMaZVponfKZ",
  "key10": "2EpHRTTe37vcqUjQitqi1TxJXdpszFxtCFMJLKdP9v4QUScxCkLkS9gmCbq8nkFRsQJdcBY6mv4YQsXx7rX4ovfa",
  "key11": "32TypoyNkfEVPTNYpVDvrdXtDagSrDN42amUn9eJFgH31vt5rLZ2CT6PQvyjUqch4jbiU9fVS39SXjDC9GTGnJrp",
  "key12": "VzDqemvjVxZjnZKbXPnmwPBLt7w454NT4idiZumqeijNP8DZaMZQiGtTPdaUk5wF7xggQbM2CmeJs2zeB8tTwEv",
  "key13": "kunsFYjGAQUa1RY6bfAuYyPGjRKpdjswPi51tC3c3rt92mJuBjpQMjFqHiF45oemUypwamfFp2QkpWEU9Lwfja5",
  "key14": "fQFcsyK6gVDq1iMPDovxrWPYZeZigmeAvF2Y58EVX9Anqwg6A6wvykTSpAhpWqJAMTwq7U1cJ7KDRYsZ3zN5zZ4",
  "key15": "59CK4ChwMNZ25EJTH7rkRzhy2z6Wsp54pei1HhZiE5B1SfobNfvrKjJe89bDGMyqtjHq9jmW9njdffmRXRbt4Bg8",
  "key16": "4ZoSMtD4jc5sLuSubA2ADeHYbNyedMtiCC6pmuWsu6MdRoD1Wk8Ls46ookDqSFUdZX6cMEEaxE72AAsAHXPA9gee",
  "key17": "5tvq4gRb9gRjmBBfmP78ViUUYm1Dv9XBMcVPg2Y5Hcq3z9PDvHSdMeN4fggGxH3L1PJRVp5SP9sutF2epAGoGTJr",
  "key18": "5NE1g6nZcbPHEDUAZdg1L9gBJNJLFRXGM7cBKBr1Y56Bo4YBVJx5Ko6ALSaR4NAqXAH7UDByJTjRAgiag6NzT8Tw",
  "key19": "4Jt8HarCtYpK8PztKeHsAkK8gA1TTkY2fNw6heQQcL5aJHizgoGpxtbUxA6MFGBLV9efgyWDLJcYcvDxhvKjCxb",
  "key20": "2DWzxzuq4BBNjwPMYwUP6DWoWAdknQ4qwztwC7CCyZ55xLJuzs4Y8Z4YAwuvDSMgcDSmhAiYkWmbFR17tKghJ8Gv",
  "key21": "5e5sdczzrKFfnZ6dpkFXbAP5KSEi9C2jijaAjddUxLBZ7NyEKDqDxN8QE9boFTWJdk1wMj3GLkTEnkzZv9UF7wfs",
  "key22": "4G8T64akaYfuZ8fRujKeSavf1RQyF16GxMfCGePqSdSb7js4HQx7R3CrecYqJarNbiiETcon3UXWBnFWrAG15gNC",
  "key23": "qGVzFw45uxfCv9xCmaqeg3BQYNFRCim1hNMMWxvXj32BfUwFFUV26UVqTSqKDRYFtB2ZbUb6J7RSmwxfTXvVthX",
  "key24": "2uVSwVks4eJyq59mACEbegwVM1nM98bHF6EikVHKZ4s3keDbk3MNNJD3Jc5Seaycz3XtUX8nU4VzxZhUSQBjfZep",
  "key25": "4e4cGfF7QsP83mpUBXbncXZhThCdqF7Qg36xTgt658ShbHUZMwna65qJJxeeqJVA8dJ2zdmJG87LHYJFcecM5sHr"
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
