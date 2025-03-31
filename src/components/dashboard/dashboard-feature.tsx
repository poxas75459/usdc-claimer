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
    "28tyhupwfXMTMRLdDALrgg29VXAb78XHmPySmNE1E9nZKd3H8uxY7a8UHATQyW7gWLizeYfRdYzyDHSvN9BWLVdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czoj4pmNv9JXZM3cDvTBByx4W5hTDUWe4RSdLNy8GD9WEvHKeLCcokYZaKTLUFDFqqVQmfiRfARiP1sxN5wcbPJ",
  "key1": "5smexkmTTqYM3KmYsZaZAsy17mykPTHx4R4tgJGR8oLu4aMCccdbPewUUbUeX3aSA2HcCGYjAo2jj4ksDPW5jm8C",
  "key2": "5oWKxE29bcJwTdgTp9uGY3pP2nUUQ9yR6yoXusSjiU7nRCXhP4wtwjwur2AvHa4bwdv2Rz5TC75ivKGtU9Ce9PZu",
  "key3": "42BRoseRU62VFia7yeLTMmZ3pk9bo2Dd96gcrpDMDaCXcwV5ZzU2jSqkvkzwbU1oRRpkangzuWGmEjfBJ8mGpxAp",
  "key4": "2bdKoWdxcEE1ASDjNbQZmadxNUUwc9mLWTPgTqqjpnu7AJKiWwaZCDunVbmvprBBLrm9tdtJNbw8GhFofLkahQWr",
  "key5": "5r3rVUdqGs6BEEdnQ3AQkTsn2o1PveLtNwce5v3xSxiiAzLf57ZYDR1VR3aCgDx4V2k6Fa7L8JQJ8tScwa6C3NYb",
  "key6": "2WkehjTY5DJq6xksmbVVTnFPRCX6CoXZUB4YMRaiAp6PnQTF8i9Dx8RXygQXrLxDUUjvud2EhwWu7Fib4Z2kszR5",
  "key7": "2YSLmLPYzSsAupRMAco8c9yhk7CRUxJeZyTi5hGYpsUgYQJw5KzPboi31d3y4JG2EpX7F8LTnuA1ahMPKCY9XYNH",
  "key8": "3R8fdMrRmkiys6CRL5RvxexgTWxLXwFyePUpenE5UZ6dm2dpVBzJuGmNF1YExnwnFuYNBANLWJy8wxT8FWnoKYCc",
  "key9": "22xCY5LWZW6Y3mqbS1trvFUVWJ4PeG9ZkgwAy68dZx3N8rN8qStEdqGhTvYb39pQbGkE4sieibyfrzh72yscEzuA",
  "key10": "2VotW8ciekeYA9HUHTxwEXRK6sqtnxpcxQRgWnL4vsz1dvg1FHvsX2ou4wErPMsBmKBLcpyNGL2nCiWPbe5gen3N",
  "key11": "3NuXun2bg3BsBHu2ZwK69wMRjC99pwyXi7Jhv9iKMLgYJjbZGpK99gN4okKyd1BEjWHDjSvsjTVhHAAFTuLb5BkZ",
  "key12": "3nkpgLmVnbk6nEopiWsUZmr2FJoQbrmTY4W2i9xdevbk71kX2Q9V8FNEZ4PrM4DqBzSBBQtwK6zPcnpRZxj3BYYj",
  "key13": "31eiqW5wweV5JahaC2r4nvR3UrHXFbRxYfSXCGuZyZAr8D86vueB2Beaiv8Tz7CfYkNKrHKVnTJAsKGiRSVFgcXz",
  "key14": "fY4fbf4tKAFPy8pifBtivpm4Rk48XdsF72j243xEzMTwNGsjpohcLrDaPSmtVdDpjWUpxfeC1BFjQbyFqbj159t",
  "key15": "47jRKXLpf7LvaJmtL1VRwfKrRgcgbyBJMbyof8eNMAfiEuo1dS1xSj5E64joHAPj5gqPLhMea1UbsmQGaUyknNTe",
  "key16": "35VYBMvQzqDyz5HumHNf81tFQX8ZuHZEJ3gJYpK7Pka7GDRWU4FP918qaeGjdyXnC1YmN3W2kSSD4h24uwvqakak",
  "key17": "3hAaMJ4yZq1QsQMmnizHCCg5PQx5yp92EifmbArXWY1KDT8gHpm6Qmb1jP9n6P1CQXRS2S4ZTahH53J6iPuqLVJv",
  "key18": "5UZ3znmGqZ3RjBzbYTqYVJVDNPG1DZ55n766LVe2cE7Yf55P4bCQVmtUbQbZn7Wq7N1Ld9JauJ8USjdgyRGwkh3h",
  "key19": "3r2vbv8E8m9bjUqUF8XnrA1GGmdnP3CU7U2yHd34rbDKVeFHrnKPZcQa6Qb3s7Nv8ZxuyYyETf6wwKUFEAYqz7Wv",
  "key20": "4Vu8Wh7dY1iwPi4yN4b6KFe9Ju9LJxXgnLFn37MKWrx3YuJfYBPYppziSE5TmwZi2qebyAfbS4TqxbxjqnpXxFwr",
  "key21": "2Spgp25EHsaFyJJHPBhMwHtj5ZQsGBCW6SSNxq3aWKRfdzWzaYxyAaS4tbZa6sMQMqwbvSVz5jy9gk5dciBxHc3q",
  "key22": "4b56LPT4jwT1oz4Z2gJRmJn5fH41FAe4FdoNXzrw77zDihxXoNRDyqYHmrRbJ3Esv16SDbvBMh7SpqzYRMPB3UC3",
  "key23": "49Rv6zAuJTFygLkCk8E9g5aufSS5gFjbDTUmCNQPQBhTJzsv654FmjkemniNeUiAr7ybmpFGvRdpxd7pwb6myxYq",
  "key24": "5oAjUQ7QM5LJcp36LqpbKLCLEwYXuFBaBPWvRQFUqK23jrW3S1c8mTfVtdxjmFk4hMs24zQsytwxJ5hBQtrTykZm",
  "key25": "RuhzntKEvGQot6iBbrbwftdijCpYr2GR2SPAPdyy98b9Gs7vdifEe2MZtgmuEyytsLEigkLjmxTkDbCeVMUMEa7",
  "key26": "3fPyYbpVXVMMY4hLJpdLZPXpP29hKZgNPE4qhuC1SwWpkzkSQRxr9RBuA3TFhfHAeASdhArQLpBuBHfCfpoSZjjM",
  "key27": "WiSdQZFreteyZzCgtpEbf6LC771ZiNtKjrMC14wBjL812bGscfxcYVoWTgDiESsJZ1vJUAXiJhWgbDdCQdgNusv",
  "key28": "77kt9ujMRWUAoiqQAhSrBiPknfMP6iTsBDeCpMxNmDkVwjSvoSQ2HFWiUUZfPKE8q38jyrWVHT4PKC6qJUNs3zd",
  "key29": "4YGMgDfNspeqdB3hdPgCNUWe9DxcnvewKukD9AWwW4VuV4sL71Sjoj7i9eqEEiicpFEmb4ApsQyn9Tv7RA9j6jUh",
  "key30": "k8GWUyjkyQ9AqqFijxXGeoTffPeRaFGsAsDhZetjVV5JqHqbGZZfebVcaqvy6qKwWdqFpCFFoaQo6ufEfReVXAs",
  "key31": "2dyJamY4wUBkrsEdrk8zS1cHKqigPMSxBU6Zg4P3bCYcwPe4nk8g5xTYKa7U1v1TZCAk1PryS11UCrw5SzAkM7zH",
  "key32": "2ZETzvZUft9sVh1qBvHXYaeDQ4LZCXS8CMr4tRJGZ5jL6TwJYrWa63QSJyeNS9V6REHXzTPcMDj7RSNqMMRc44dm",
  "key33": "2GPDXgXVh1jagACDXWctnxoQA39S1XG2aQfdvnB7fM7Qo2Nr3qqdeFwRtdhbD9xezrSQQKWCriVWxB77dcnPXD2a",
  "key34": "5TkGNSPuj2zmPKPcWmjcUvEPGTvm35ELGS8kYQYtfsMzTwsYiRufyz8ZNdeiNR1QD4sBPcBRFyfW8YxxdZnXKiT8",
  "key35": "33tfxxFn9WFC82bQGbMKJXnQqSFR23bHGzhuoJRsiakcSEGLzmFYJUi53DVrffBwTHfKuaS2MS47sEGGKnDG37Ze",
  "key36": "3DHgEsRMqbh2hwuAFiBtfN5jpTZ9VYeWxS5MeFF1mP1EvrM5ZLD9MvKmK39pXkknm9u9ssb8s27xRzWHHzCHFpVb",
  "key37": "TV16xpFJFDg8xLGneyDiXwztMXzHtsW3YN54dT4NejQJ9vHLvFozMDXnSJCtWgnHioEmXyCE85nXwu9vbAm21RN",
  "key38": "3ejkcNFWCGcndXjqK5b2uahp6rULGdPq9cK4h8JFcRsVyQ4CxtEk4XYyGZrEmgX3RCcWKfahA6L1TE7eyktqvNBv",
  "key39": "3av9EoPKFnwofHpYE1Td6Z1BpAAZxeWBiRvXQja1AjYwdrbELZCE78HH2cwAgbUR233Bvs28RvdT4mDJZXQpaFSs"
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
