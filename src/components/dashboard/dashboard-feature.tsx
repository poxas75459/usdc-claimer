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
    "2fFwX1tzkN2iwC5w8k1bXa6rjao5gv7NotZjHm1tFWzZveVy4qGCEd2cH8JZer5R1f25XBTStux7mYz8seaadk9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34kVcwJkzELYYwiHf6wQRSkeXeBHH3ow9vGLpmFzyitTvSbr4PxuSzktjZUT5NMthrg1YHZQAbYNWVQqHKHy9kQm",
  "key1": "5VkAgjAYvWyxsdYfr8hn5kfvg9UXnMaNdfVX8CdCe8HFfdLpY2S8He2phrtCoHD1iWX9csAv1P6EN4eSZXhrDE7B",
  "key2": "5Py7YBQnS3Brp5oiT7o5cMcDiUPhxvTGHbZV9HTirWYLJrRudWtNSTZnT85yiBJvorvMSa8FZuQ8JK3GG7jMjttq",
  "key3": "5XGd3M29AyMm7doVrWv9HpQRxeis7rfVZYx4AcNssyBXobJQSnRQYx24HDYWqNf77h8vqBfCDzotwi1E246MbKRQ",
  "key4": "4tuxnoYtzBqxrhHvyueREC2T3hFiijRN9MZW9nYLLarZVTfRWhfDkWui22rhTPAxC4wrsEk4d5wZGD4Y8tAfYBT6",
  "key5": "wnP1MCaYRzZmzuRTwGKpduUvQghma7G7H6bVKogTyYznxSUjqcHszUppRkULC8DfiHEmnKj2dUca41qkCSom6hw",
  "key6": "5CRYtm6QT92M7H2cUSQHnnNAq5ZDDkcynMkUVGBHFf5QgwyN3UmwSQE4aZfH78m8ZGsZ9jvfQpNe6qmPFAxbfpvr",
  "key7": "qkb8WVfKBc1CbkvDBs4pWD7c7y99jJw5nq1Wxna6LymUctQX7SYCH846DxLUhuVSLSCE8S35FwsEyWTyzBKnNf4",
  "key8": "4Eca5rG9fr6iHYuKmREg874dVCJpmiKaA9tQ7qmf3wwvN8Z3MG6aoQ9aaakrgreayNgFeeLPwL4AWXJ5Rtv4Ytd4",
  "key9": "dfGQ4dTBwJ6M7f4JTZ48jHqsaiigLHa9Zztok2h8QY7P2dz4yEEBsupeLYuHNtQ2Uejy3D8XXx8K6SBzpKYCxNe",
  "key10": "zC7icRHaoUmYf1KbVjsNaLghmMfFHVVqfbv9h8hCDoTsRi8yJDEzz2npUZLL18X3vsMhQo1rhWtHxFwz4jBp17G",
  "key11": "3VbEqPNmo4YsMFiQFiNsLD84CkEexYyKhwZKDCbiawhWNe4JNymACPNZbmGyNkkezijg26sPZK2ktmodWY5sBf8g",
  "key12": "33Lci7GiH2jGEtQSL2swURkvsWNiNWhmo22DXKmfn9pWP6LJmhVM6p1HKGtsDWVSK9wmjyT7jKQRdEYpPVHqa7ky",
  "key13": "2Vipdrr2ujqudFqYziVgSkbkEBUnVMVRhVSUUCrbSwiujCe1d41SkEwDvmkbqLhqGtqJPmqRRybHur4NYFHp8GvU",
  "key14": "5LGcH59tjkdrHqZWrPA7Hsi1pnaPCAzdv4x8TuNS9AHL5U7tuuT7ZroP8Ey5tG43eKysgbJsPVdygtmvvivyS5aV",
  "key15": "4RALkFkk7UmhoYyGyQNbVuaDTzic4BY1dCpJcNCwtK5pb1RtfZRfYyHjqsFHET9xfdV9CkCpzv24nznP9tzwvW2T",
  "key16": "5qS9YwdD8sTGL6vtRDCgJvZEv6WN3jPZqAhhtxh51tJytzpM1GpxN9tknpmLjPZscyzHSTLS9wpvtkFh5yXUHdh2",
  "key17": "2VL27TLFEz7Xcg84HUB2FPjdjoVC17L4kRYU4can5bkyFf6Cpxd1stwrZMhvXNxeHEjWtrwGtyHi5dWYVjWK9dBR",
  "key18": "3f5ZgcBxPTiMBcKttC33XZnP52C6WCD8UgPyDvU79je8qdvif1SsiXVCWzcNd8XmAx8BPLFTGzaNKKRSXkQLLiJq",
  "key19": "2JZTV5efLWwYc9zHVDAfjAx5D2h5QoATP62NWwjFP7RgqcDNZjKbfn2Q2EKFeuxc7S2NCCWqNekiU4yX1Qo7Ppw5",
  "key20": "467iEGVYpjuGEhFSThSJyHySK6eDhVeb2fraMqxnAZRaxQNNPpkz9QivDJTvvV8fNv61A6Aw7BTzXAWxh1Qc83oR",
  "key21": "4yhgeLJX2QQYLCBgp3vQG6E5vKbZkHPtjcVU14Vk653DMsD2xfFMLchF5XqhUPWN64mNzVjFNvDJKwbPB9GvFaZx",
  "key22": "2bzfavWWHMnd6oWpYKSe2t6pgh4Sz5EsS89XrXf9qjzUHtt5mLxsCtx3dqzjzu9TwkvFvmNq2DYn4vNd8Kq3Fqy6",
  "key23": "39bGv81WoxeEWLm2Ch8hTcpnX9Rx91pS46ATnRGkizKXTvBnqGrYtdMg6za5CXH8vj7GxWSrHvLoF1ARppXMRqQw",
  "key24": "4kdDD2em6vZcq36njW6mX6iPTmCr18moK3pgWPZw8pJN2YSURZNtJiQ1NMhxjYh8C24dddACty8Lf4owRYjnWtUY",
  "key25": "SUfKudweNFERncLshngCC7MbN5uydowfk8xzFSYET172x8owtrFCJ8dbhQwHrmTv3GcgCvPYd1smoQBLkHBUnqR",
  "key26": "36wFrKJ5RkTp6u1new9FRFAzMsmubRQB76T6daZDmKCzGG41m8qdkFh5sjVegQV4Jga7W4gg1QkNZzWqYGW8u12c",
  "key27": "wkwTzaWJUScGomDauYVgsJj6so4Zxz5XorZs4w9k1YJVVbU997EVDaQobJxoUuo7AkegbGqUkxfUk76ydkgkpAh",
  "key28": "ghKTXjC1DtwLCK4bBae7aKmP3GJB3tDYJsd54n2vTMdpDRxZPs42qo7oZbm86iw7KNeksCtZKY7VrNxhbV9HbSh",
  "key29": "5Lvfs6of2BptXstSNLD6wyTEHRR38CTHEMWECPe7CSNd1iSEH7CHeip5kG1cKkEunR7tdeWkh9mvDAs2CfRk5T4W",
  "key30": "3QYk4xnR9A7Tjb6cQMmM4GAgDXBJCheR1ZeFfm6ZQDwobMqAmKh9iNNY4FMR8rHTgYunZf6mJpaaNPWVnGDJqg2X",
  "key31": "UuzN7HUERHuwFDBLyFbcTGs1X1rgpmVCxLTNee6GKVEgqjkgbAAA5Bswqv24m3f8d5ncEsvC3qgATEk4jtSpn2e",
  "key32": "2uT61kuxsjeXgFSCT7a6vayxbQnQo15keCtYhQxYdzTkTn13zsouLU1KDhwsDGnXtysVs84aYZRVgbGrPuAHp1Es"
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
