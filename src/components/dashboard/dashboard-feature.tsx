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
    "2EbSmJbMV5gRJU6swHGNKQctfMP7934omBhffTRaRsx6TD4UdxVVsMLw4oChFd5CNqGPLb7HsE6gRuw82nLTe12d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wvyVXihy9SMEUYS6qGYm6ASwK1FtFjZX6kZtpT9Ag5ujmEwWC4euFJ9jxWHKrL9a7HioZrisY8SDJpMEus17PZ3",
  "key1": "5dv3QUHDijsShR9kGJBwsnDVSLC9LF1A3scTjL4ECiHi4zTQ1vsk15Szaojp2fxXxRYWuxFw48JmvygPYdR1ZLLa",
  "key2": "35nxBXwZTH8AUh8WrN3sgyYcVmRujoCD2PcKeC1YKCo6yz1MUpGXcvSC8QxAgWAvQzXLJp9DQRJa18vGaMSbtbbB",
  "key3": "3giPEGJ1bgKBpFFKR1WydhcUuYPMVxt2qMi6PGJDov5EPqPpmEvynQRb2gdwSwxtbrCD8bjUDnzjPDQECg27GYtk",
  "key4": "2K5XW6BF73Nt75Mz8oFKLWfx64pvxz77jikn3xpHp6LhD7oibK8EdR9X8SNNVjbR6SF6SMpwcqD1YzZ5V8wZjzYK",
  "key5": "2GAstVXyGE9svk8G4BbbaBowGXfTfb1ABocPP6f1258tnkN87a7ELcSTrgQJoz8yzamaZXym3poRuZAwcezLZMwg",
  "key6": "2gFhzH1Qeq8CoKCvk6VfjD5mMwRoi4CXX66VT89SiYm8dSdhcqpbFUaWVSj8mCAPKJ4VbJFbkbX2gCtogv5Ephsk",
  "key7": "3Q6oZnXY2cpQZEdoSGSWsZZDhHz5y86Ttxx4DQdYEo7JwNtWvxcEq6vwpH92kB8DgXZxm6yFnkEHoFTm2aM1vdYk",
  "key8": "3Lc6wkFFTnMEXdc7iyFaxRTfHDjZ7X6PBptMw4FhqXpespGJFva2pTyHWERymftHCw71GLcuqaiAJ27yXAr5MuCu",
  "key9": "4DtYbsz3WJ8kCB7qWmrFuUbnVZqQicvksWuAYTjh8jftE9zLzqgqrnxKuu3EXv6uv7zyJKLoqM4nrjBPwb4hQEA2",
  "key10": "HzL6Q6w6h7XPNCjrBpH5LjwxkGbK4VoT31NXs17ihtpRTuj7TkdNwMFGFm3Ae1xg3MXYNfJxcYQgQ7ZLQxpskj2",
  "key11": "4rBEnLPv2TvYRaSWbmrM5ewzNxmah8swh5PT3yaTkDkut8aKHPDmTivrfNctPf9MvLjeecSx5Gb5U7auQequaHYK",
  "key12": "F1onYCiE21CxZe8cWfKyWKD9W3F6y5UzjMqujMFsKYGH3bWm4b39EWFs9iQ4keaqzMU7dfdufsZr1A4mNRChtjQ",
  "key13": "5oBGdqneR4QqqgptATq8WY7yAdKULEfHmne5X3vxxdqPzqHqzVPDXh63vVpYzRysTRmTFXmKBLyiMkC5fpReeYXL",
  "key14": "2McUxQKqhcXqyxa2kJ97i4DXWnR5kaufTty9Cbqo6D7dyCiH5WqssjsvkJkb1Fi6hKh6Br5bWS78nFgBvD3qzVze",
  "key15": "4Vm6w2nbk1MGZyvjwgZHcrJ2NaXdJ5Sfe2yWaLAEo3KqPfb2PRETEeVj59LACT1EF8Xwx1SL3BJqRpe4E7AHKbAE",
  "key16": "4fmWvGMmcfieW2AYcMWP2rLeiiTanNK78Rmtm2PGKFasFqv8SzqM5yFK6fdB9sm1pJ2udQtXNeLn45tZ7G7Rx77o",
  "key17": "5BHgY5c2n251FKSXf1o8w3KNjTufFVbzVHPf1sjAKStQjUW1oaFHftJhkut57Er5AmbYMA2BijGAMVazaPNtRSk2",
  "key18": "3um94riD7k1jYycDr3wBzFM4WexGMdGW9prhW2ebVLxcn6YeyWJUPzc4wwNVXHV9GLvbaaHUQuFJQ6ECwfUkzJDY",
  "key19": "4tsVbYnkfda5sUoKjoBXPAheCcdMxEM8pJ45KH7D7Sa2edTxUffNys8hnaGfcSGCMXyBPT9vw3BYZ2UjX1YUU3ZX",
  "key20": "2TcL8nATZaBMonJkkcsxwvTALGWAQxhpLH3CqzoZUhSWF7X64b9dYKzS8xuYC7uZpqxNnBtZsziGixE6fjx8v7g6",
  "key21": "314WYre9nkbDDYvgnZ9aherRvCkyuwzhZH8EBkq5xsNwKXTD9dnR1V3Z7hGpWHcn4WzkmcHNHZgk4zNXRmL5om1G",
  "key22": "5hXqAtoi7g1s5piFv9eqSBXGYaB9zheuf9WPu56gWFEHa1wsSQ5wyg9FC2CqjkcnpbxDzayFrAfTQ9moxsDLaZN8",
  "key23": "5ZZwCMQ8up4rM48TJb4VD8b7stUtJbWKedxRUkBCdYK183StyF7wJFvFdKLZsmvXSDBoF6V5ADMCoZkoFPPUAa31",
  "key24": "2jbTzbsbM98x87tiLeanivwDWpymbrVGyTkWAc44Xy8CqZYwX7jCXjfVSkdr4ZV7FUdMpLifeyRDFpE6WULfiUQW",
  "key25": "2QjrqZiaRhooeh9ByynfpcAZAtNv4fQh6LsHCyMHZx2TQc9GevcWfYugyDpvXadZYpQPZnx5twhQFRwjfh7tVgT6",
  "key26": "3BjcZ4FYjrauCoBZxrPkVyZhcnDk7P6PF8XNLjeVVVo3jxvLSSF2PYYzAfKPCcSWMLcCm2BTtYtNdtVMpmsyw1eB",
  "key27": "3QY4uvQCYV73yMMuvpnhz8J6wcukGqXVEQQyb1nbLpqtoAuZduhirBSUdb2wsnk9siKT4mXbRtykSXqhvfWuxyuC",
  "key28": "4nhAbnHUymof6RsgK5pyyZmaBEhmj7RhwCNc15ePFVPpTeJAjfZuNSu6wGSwM9oVpjLQjhn665okii9s4crvrDSZ",
  "key29": "3uJ3KWtzvrLh8domouhsUFZtB5f2hWbybMJG43ZowXMNRgebsWNFwnNp2Nrn5rWr7whBrU6G3Ha4SRmLxNSGVofH",
  "key30": "3RjRB8MLT4Ugkwswy9f9TVvQxyv6NnJzvY6KpypXdjxvmhgZ46cmhUpveRXb4M4FFngknDdxP5XPiLZVh9WsEx1x",
  "key31": "59sFjhzkNiznQWfEZRzXcoYyBVEnH9qWbH6o8nJiL8FZGZb7zY466fnGtYg61fmB9Sez2RZomeoenRRZ6RJfea3A",
  "key32": "4gWwTRhEWEFZjbvkq5TrqgqGWH6YcbThSqbGy4PeUXhe8Nthn5Njad6DCJR8BM1fSc1GXYAZ9ERftQHUEhnDJGGG",
  "key33": "zEephMPkgRf1DK9XcQhKpfHV4bcp1kwBDj4bmHnHkTyxogyTU18HWg1zuEoRZjvjeVDc9uu3of3LF54Xtf5dDV1",
  "key34": "29p8rjVuGjPdiEX7buVPcMqvE7EPut3vTy8bwJspPPCpYpvhwC4UDkXJdsjC18PNZvquCp5R6HkEt5rtEFQYs9QF",
  "key35": "4uUvPNW739yXYiLCvYMnZDFYhjKZLcne2yaZKGycLf5CvG1Av3UUNQxaMrr1uiy9Dx5DMXQXod6NQAaKM66WHnQ7",
  "key36": "XZLjcGc7jDscToyoGg21iiKoHMMEvMAhsEg7CW9dQJCpLP6CUzF4qaXnBjThPrv1oG3FDvrEKMSi2VLT2unoS2j",
  "key37": "TpB2RG976u2yXA5eFLau13EJntdSHekqWvoEc3JwyRNHueaUbzd8YoKUjis48cTVY59FFBiH2CHezVgs1pUPTBz",
  "key38": "2SgUkzLtMGokcDqtAqYXdjRom5avGeSr7Jzf3LT3wuFDN4W7jgyjyUXVhY6qCT4tDuyfjQAZ4ApbrUHQMDfmvzED",
  "key39": "VNw9oFpTKA48QjgV1qgGxm8RPc6orLtsfWHbCVs5z7cTvTQBnBTJKQRHbPhRxfNBT2UTQdcqxUEWLk7pyh3HowL",
  "key40": "3BLi511uFSe1b2Gd5n7hznLxyEnKeXqf8iURJ9egLcoeqDj2CAaT3Es8VMQgFDozCqjEGEVuNfr8mV8mgdQsF5JZ"
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
