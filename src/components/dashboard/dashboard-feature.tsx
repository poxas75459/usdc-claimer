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
    "3His1ni7KWGUA5qn7LXwwGsyBYreUwrz6DfCodNgz5vJgLJG8b2nXJde7WFtBVMiKF7f811LZ23Bhg4k3dGZ7HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3spCrSQwiTbucri4Seybs8i1TmYrcHj2pe3njPnmE8dt1wVmodu7yqG85nf8RZRae3kWWaLYs5uNNTffGj1wR7wz",
  "key1": "5KZae8RFqq9h7BT4aTdwVU1GMHqzC2VSNosUdLVuPnkXsgYfCXadqgrTnkLPZ25v7C63BPDJ5t9i1oZEPXbbQyzv",
  "key2": "5kXyH1zu47LXfdgmYfpoDrxYtpwZnAWvSvzSiPS9479FMkSrrVTgijTcZ6m54yjAGsYa1Rvc4GBK3wsQAixubQJx",
  "key3": "3ETdQphcQ8RZdkmcbPh7MukcCUpcoX6qhTQkBDkgW93U2cNQYqLEi2ogrAgsv2ZxAN1PfvABCrFk12KhfgJpbHFM",
  "key4": "5nwRiGY1eECK1SyxwMSxLxzx6ZuU8rPGkWS44RmFsYGSHRRJpoaCopBZg53tyGfYbZU1sdod9JMgBjTEkJuiMtFa",
  "key5": "stHnYKQCL519uSvUG4PwsBHQQWFRr5nqNZx5XMgFo5vrpjLVeE38wjudZy1kiCqCjRwSWJZcGn15dKmcsWQAgt8",
  "key6": "5h1ozjoibUcMYtUEgMjmvFmPEeao5wcaQJ9qVwnzg6C6inT8heoA8uJcqxzwsqQpMtfsodCfAD57ZLkauajmMpZD",
  "key7": "mLpnR5pJevjxQXUUraXndq54kZSM1KksbE6L535frMMgoVt4i1iFpebyTfnx8oRoJrtfuMqBv5dHo9LcUado3m6",
  "key8": "3NXRa7Nwuy2Xz6XR2zdwSv4o1Abz4U82PgRGCHhrtei3FswYgHq9FNy2UEo9hrbC7zAdDuJxYcXYybHMwdVxJw2k",
  "key9": "dHhpD5YMp1dPGbzsYSCgSjRh5qigtUrZDS1kkbJNQEDcBwas9u3ptbK62apAKwF4mzMmFPMRVABUgmrUSHQi21F",
  "key10": "UbQZRbgoZp9XguciQbfg6ZW4NJaNsAe5CtG8rscSXpmETQH185ScmeHoLPrsVXvasp2jRFt1S6vvu9V4B7NZLpt",
  "key11": "2U9RiP3Chvds5ewNap7Xzb3WyKXugD6Dw2kjXrhto8n9hnwfJwyx4din6c18jVc5wVVPGW7YQuZnUjCuECrWjDDD",
  "key12": "46SGfFTJDowNV77yz2LyHSJ2qWzCZBAHZJTFARDF8Dvv2ogoL4kN7G84jyEft7M5dN1zsbU712ACRozKGMWSNdva",
  "key13": "3oGUbXGr1x6YyMjZ1fKhrU98G6rbZRGtgkFh8uHvKqPKUPKn11tQKpJp2NuAHRKnUAWQkkgTgseGBzRmRHck6DDV",
  "key14": "4cihfzC5zXscrub3tjzCitXoBfJwbDvxt72hHhYjnNoKjAZwrSrri6y7gLJ3XEn8adhqPtmKmfQmsgKR8BExQ1Xc",
  "key15": "Zoq1ZiCfvVAaBdL4KjZ3JESPzyBJiS1ZmEoxe21gx7y1DN7teQRm7FmBoLsoXRtvSEJfgcHvQWRgsrUo5kDTvCf",
  "key16": "2crZijS5jmMwwvSS7TmfUnE3qR6o6wfPR5ETaMj8JFhHRnhSkhWWKE5sYBoBSsiSv85hazFs5rf3MhyrUoxcEL22",
  "key17": "3Dq5Z53L6kVLrc5pbQ6CnG9TmeVUpnrFdm9zvkgBAcNE3yhcofApdmMuZ3Rp2gKXxRqHvyEPC38hVZVG3PFQjUYJ",
  "key18": "3QPYESEvhaTDndySE63obKebusYzgZiJseDyRJqvXwufLxd3N63MF4CHFUsjozPvY3PytGGFBkQhYQnMmUga4MrF",
  "key19": "2fvMnM2adN5ESmBZ3xMAbYgcLMXW7XoJLVKq48xMBrBSbewT9jVQwmcBbhwABC9jwXJjqUKt4gkfMUrWMjqMAckG",
  "key20": "5NkwAQQfR1s6C1iDYcZKMnwL89onkDBGZdaUNoHbyoz9JxwyZAdQVi1Pr8pkFU1srdBamZXzLJXGqv8h58Ejrs9s",
  "key21": "4UWpx3dm7fhF6L8NEukE7cpvJa21NbAFgun5gdG371AA5c6WaFWWe2zt7mxPGgnPDgK7bwvsu5cQxVd2spB4KbDA",
  "key22": "3uDB3z6ryHyrNdHkStY5uR779pkGUm1wfPnhxuKoRR2u7AZ5nt3vfwD6jeCGdNvA75w3ifHhsVmH9BwhABT9uUK",
  "key23": "5d7um5E7pLLBEGLn64NZjwAAC3SokfZvis9qkWcryUxWzp22oRXoXhQZofnQTcwS5kXtxcjgdngLZWATqSGLq4pm",
  "key24": "Ph8Hd5mxKkYbARA12Wyo8m64UqbjsF72mnFCQqHy8FaUmbRXWZNnikUM4qmsi5orMTxaR2jptZvMnpo4qKM1fVw",
  "key25": "2DBT1TZXUMoegJ2GCRaJhJJuhd89yyebTciY2A5KgFyBiQgW9n1cNPiQ27h2HEB5DEaShZ2mRtRscfBYpv6F9zLg",
  "key26": "2ScX4gAmvjLVgEHNqDzMUj1jJsFmuS6wMUncNYPStb9yecAVH4oMGNcSFruPXVfM4Frk6a9hHzgZdkNaRTh1ogk5",
  "key27": "2pGnakJrucgsDhQAiTTZEhuPf4PNamCvD94ZAAC51AwQY1HjWwQCraJHrXfjw77cQAqrXeHL1Rk9eVKnMa5EC2sa",
  "key28": "3oC1f4SBMzniqe5eYCHGzDxp29gkQgB1TEB6p3PwRVTR5wWgbZfEx1oyhUMS9HVSm8w7efX3wbWy2VcSqSb4yB2q",
  "key29": "2bUBx6ce2oCkRa3ZMNaEuoKGFMpiZbkxWU6c6zUJRho5r5bbx8dFUJry5EeZggFZmAEKFcCRUFUjGXbqE425iajN",
  "key30": "5gzx2XNzYDNXD7rVVuSVNTgyCxmXwHysCaXXjfxSCp9TVgjosc9S5JQ7zTZwLBVnKtSDYM4wU6pztjgmJJeyGC9f",
  "key31": "2syBfrZH2mQVa6mhRWXNSBDVKDRYtk86SqipN1Zgbdojs242VxKxAXLQwj2fzTY2xCKMcdupkgTDrPKnrmeLkdS8",
  "key32": "4CVV6RX5YeNLeTS4CGtE8Sjbn2z9yivXbYxxx52cQ3udCGS61BBybivBnHCiNuUtxyRZkgjTpf13ZkUZJJMRubJQ",
  "key33": "u6fmaQrNhec8DfdfZwekcChQMDYyYfcpDpo2sKESu7QMKgy5oEcfinecKLRGA1tKNDKoMiHKD5y4GQMbHPWXZyT",
  "key34": "4deFWQmrfsppoPJVDrcyTwMJrpcKcmUDrtW724T9efQrMHFME5XupQdYHky1tFaHmKBCysxUcTUQEGbVWCRjz1aJ",
  "key35": "2t1v5NhLnuNTWP5SKPbcFpK7przqypCw15b7ZLPg1SkB9ctaDZNK4bmaP5MsfB3J5udwMYXRvbKtwh7c13uXUBb9",
  "key36": "3PRVZA3f5R9tBYscfTHnWvFdTqyZ5ixKmv98sWe6VPMqCX6abZmSgnrqJf5uHdjPKiBXhfTR1f2o69B1QvJQEouV"
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
