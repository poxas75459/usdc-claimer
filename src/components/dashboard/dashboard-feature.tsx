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
    "4KMUSLPwFNz1FqfbBWmgdzDXHncKhriz6GpFsrdGkm7VEsbUdiTS2X7b8Mz7tB3HX3gy29WeqdmH1xKv1HvM4six"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E6mwLDzRK9WB1qqPgkk7zW27c3hBsPy1Xi44h1KNnVqnydaCk8eru4xD5hCFzbq3hYt2w2BtHxJiaYXP2RmRQT",
  "key1": "2QWkow7LhbmcBbeQgeJ84BGbSUxLJLR4YbbAYiRxX7zSuFoyxftGX5mY9gFQGttVgfYd5e9aSEbso4StJJB8pUTf",
  "key2": "3potXruMsYQ1JHCa12y2KpMZZri2SfPasDrCdaBdPT4hvQLYaxc4GvBzyBin1DNE3AXUVRio7WC2FH5BSK4Shqqg",
  "key3": "3t2QSA4QwnuvDPmHZpg2uy4Bbu7SBF5ouquyrDfViTY9FM54SHpQpDvRy2pTRtL34gUT9hqEVEPKS8dK3qquxTcL",
  "key4": "wuJzzj2b4SvGkBgUeRzNyDKoPTjysLbvAkRXPa5xaWMKYYByQF8dWXDxmikMV5RZ328XHAQM3aYNKWMxppd6qck",
  "key5": "4BpqWZhYMHH81SuX59sb1s7XC2g4So4mCBdbWAfF6sLGuB47fbbmCew7jMjELPsS75Qbw9bUjLPirTPPoTWfhQV1",
  "key6": "AGDenRL7Eg24jZX5cmJkS9uWo8PtxzgdvvU9U3zrTJABQDBiWhn8Vps1pLqY5zuf4MCNTLkpFyY8yi7pYB5df9Y",
  "key7": "D2mxVabgAU88bEQHHXeaEcbpUWnpT8QR2QLsDHsYacMeoNF6QT3GbGddTaZJgp4jeu6CYfiq4gVe4DTuX83VwGk",
  "key8": "3cC1pJaUoTsV5BC12rNNBpRvSWJe6nYFf2xrY8EnvdvRw7AkuMiniFvzciGpWyMLe6zMR1wdjvC7QAfREa5N7V5n",
  "key9": "2yk5gNeqX758tJ9RfG7mzFNCxjaAjC4sfpLmGZVopvugGfEHKUe52fJQ5WWZ4cnxbQraNWxzmuKwFcywX6hLF8y2",
  "key10": "2khz3nX1hYanLhV9rAPZKxNomEZ3WToKeJZesXGT7duR5SYhHd4Yoi8GBiMDPWZ3s4qXrWPdE5a8Sr9A5QXG1qW1",
  "key11": "4M5nq9TRegDia8DiGPKC4qVMqgDUN6az5BFK78K6jPwW3e8gEuJQm6jbf4KWuEiytFvG3cKfqALMAoF96dBcbgnP",
  "key12": "27ctp5KqfbdiRTLKVKMBQidWAig7z9oVbn4FEtxpRiBpmGxnsgPRYqE75Vm6BtmL9HuvXaBGw2agjVVQSeLY29qf",
  "key13": "3ypaTBZsHJF4miqcxWwPRuCmKrPuH1KWUd6axuTTRGCHNZiiKUofHbwrgKwmDBgWJyBwfywAP2tuKkoTdL1i32Yv",
  "key14": "4pjwr8G9vUKbiV9meZs1DoPj6uqv27Bu8kzEWWczoQqBywzEuTjyLXhisC7XpxmerrZnMCEY8caogqW1zwNh5nbu",
  "key15": "pxB44pKfJTsBpxTvxkHBQxXETjKiXKJQfU3k6DHCjZY598ajkUDiWzeF2Ny17Zta16CRKN8bJ5LgX7YBzX5q4Wy",
  "key16": "5Fv1VLJnDeEiMJuf8vYJxFi18hNYcrv4S4f6sQdzsjDp22R7funLPd4owaBZZPLArVqfMz8nd57tPAkKjCUuRqn4",
  "key17": "5hsekessD7LKux5B13EdZRpRkLZsGmYYrEPe6z3rsJqJuP1va6SFRnoxBKLs8AxMgkxrPcjfFYc5q4NeaHBoYoE2",
  "key18": "4G5KwMoV5pBsvRh8CkGpEriJKTc3ZqQ7WZXCYxaKaBGz2Sbx47w2dCz2ErMj1DhZH8mdquZVxUF8EEtbMZAA8DhH",
  "key19": "3s1Hvobc34eW1UgVk9kW7YmJZsGaUW3GM6ah3o3Q7CU2777zkso9A8QKjx3EaQGZGEHjbcqSnU4iN1qpuvLEhTic",
  "key20": "2JrZFg1mbMnme7S7y9uycnCnZZYnCmnuXXne8J4X81zJNLBQ7ZMQcT33wAYMUbhQaZmziS2RN64T8a5pa4HiSmgj",
  "key21": "2Hp5rb5YgGRZgnsbypiGDt5kQc8pqLgEWWfLAYpbKWEzyQxwSMzRqUgaTXxh24MVyuJmJNqyL3XM6dDEkXiXf9oo",
  "key22": "2RWjo3T7xyyFG85ydM4wtJdGWYk6uAr8DaSwdL5qy6fVhoVS9rrMBZ1h6gzkPtK9MrFdfoSprkKhnwQ27FKL2XUR",
  "key23": "EtueQdUFVDTxVNB4YFrJ44pKNR3Xpu36sRimwsR4qucq1psnqeR9LFZCXvCXYcZcQZpuxFrq4ahegszbpykLdtG",
  "key24": "645ZN71Sx26QKqgXaUkpynrrbK6ZGFU7TvDDuE37epBvz8cQCWW9uzJAjJQD2gQTK31bxjpPETjhmsz5LNzVrAgc",
  "key25": "2wtireec6unUFnXNMNWkMPm6n6mtaYUx1nBYFF6gWw2DdPxw71aZtaTT355uLC7Vq8arqdVDADxxtUndSydSiMou",
  "key26": "4fCGSgYN4wT6u9mXxqLuAFgVpYEvdzUnivLyMoYKrwJdMbz3dMvS4mGwM5Wt4CtMSnjr9XJZPjf7yyybVxf3REgU",
  "key27": "2VAR7FnY7MPX4uinrJz5pk7qAQE7BCmXTpFzph4ox3722dnTmkrebHUBdSSLGU72Tyq6Nn1gZB6rcKH1E5gn5uUU",
  "key28": "4B8NZ23srvJ3baJBEe2Xta5bXvKMXyesYDWCb72bHSrXstGy2g5rULnMGaPg2hfUARerFrXSdKfssakfo6EXgj2B",
  "key29": "5QSHs8nDhokVcFLvL8fvZR9iYwAea8wN3j8mTvd5eUmiBDVa445hx44QQupUM9s3CFviUt81xdgDonCAUd9Kfyqi",
  "key30": "3AFHxTJoTcBP6HSUDmDNXyckdQmKKsrxv5EFqCHGuwkJMRhhS7u7KWogbNGpV3H55KFV7toDEkJ6tvkNLe1zDFG2",
  "key31": "2PNZx4rmARPkCo7x94pcQgArKToB9VJwyJsJELe2KhEsZndpxCH5L2dBXUd2cTSMfWY9RKkEMrmbeiHG2zooKkBG",
  "key32": "3pYB86kn3M2bSRBdoCiMByuC4mMQpuRZPTZTGULpcKLtJDGf7WAYvyBDKYq7ZHA5eDYCwtdq3msCG31KtUj2Agre",
  "key33": "DNGjGvh7inCQu5QP4suRLzxyZyfWNUzzLwDc66iDHBBqdfbHweyoitGvna3mibvqKvhhvmD3b3NrBszfzTEvZSW",
  "key34": "3frDWEquwak8WHCGVRX3XK772sj4q6eeZ5UKNef11Lm7kHjZTKmHbkxiQqNppGKrrxZfnVfa4HUsR1cvXPDgyzbk",
  "key35": "Xwmndy1FUHFvVLk3BLF4oDnz5mURrWzQVetK8iEReAJvfmotc4njJKrdQQD2shRJGqnkRbkcFkVHAKhsKiQbR7D",
  "key36": "2cuMzwbW83AEQ15DTL4niQpw7wVPuWBYqAUaCPuvbEvWz9XmvXeHLBFqzJGjFbvTp6zBnTzMqNHdpKaiRSoM3PG1",
  "key37": "5K4i5CaTFwDAVGKYNTDBYsHpRi5b77PwLKw8eE8Ysr36H3uuxh3AUeKVSue5GYTPraHvJ8b4BEFob4bzxzFuFfsg",
  "key38": "2H87nGpCYRxTxw6xJLQ6SWkaxt5vfVFQ9jtVdcLGNpwVH6AYzyXQQPQNfLWswvPAcceZN6om8V1yF9T8vcxEFxEK"
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
