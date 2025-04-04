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
    "3c2cBExWULw1vJ2516djjD7WSKqZfQp9FzPJHJdReP5WDJUBYQBfLxnGaR848QTJh3srSqjKNdBbso8Zvr73PFiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51EEEz1QBir4npFaK9YkzRRNSQAAUEX41UdhWmSWavnDbp4gSPXRCZ6a2d7daARyxuVEQhmNxXqgMV7pFw6hGQaR",
  "key1": "5xxHbyiJ9pquqEq4pudbC6whoKKUFEZ7pW6qD5MY1Zm9Bn4dp7P7waMjpD7kHinS5NodCSFwppkVPWpsaeME99JL",
  "key2": "2kSMvoFK4z5qqUioXUHhZXN5N9QzmH6skWL49DuPzwNqUBjo9miHTfcHa4yLRaphBAvQ8f2VZPrGEhexrubHEJNP",
  "key3": "4P43d9vLtdFxyCw4t2EECzRzHU2nDoZHUVE7fMnewB14TPg8fnQb2WckP9UhivbCwj8rzieA2V3JoPY7qzEWf6oH",
  "key4": "2sQSLhMDCfZ33dwnfYVqU3F8dT4Mh6An8agwVEybecxbRPY8fpE71K81Wu7taLFUuF2qvyVhwsQ3scX3T51idv2d",
  "key5": "3gabB1izourumu63SpMC9QsZ4uHD4RCYLtT7mjqYJZ8DNmqLNAZwuvujLSoMJ1v8Sxx61tZUPZ4NzvRyrtJ9d8Wo",
  "key6": "27HqaEsuGk4Piii9sun7WqXNqjBBZj6GQhU4CVNhHaGVwSVGbwmYJwMrZk1n2HJzaoJVrbzfP9qQSGaxBQGdtLPG",
  "key7": "2MDEzW9TbgroJLv8RdAQWW8PReB1tCeww4bun1XVpyp6XDAu977C7Xqn64Ncio6ER3LESxu2hjsRsKXEmKDFnian",
  "key8": "31EHekoqSeoyUc4J5vX4zjeHUKiKq85s1QoxfpZS5RXq6W6LAria2j69me1Rhvg9Wg4GxvmPnGbWwFBR3MDteKwX",
  "key9": "4xEUXyXHbHHsQuUkVjmHpPU8QKhfPHz1QE1u76iKNLMyQFqGWgDMdtDQAE2MGWwWAjWfoXik9CJr9kvP1v6Jjyaq",
  "key10": "3fUebENySchwsXPVAgaJwEWv31z7x7Zo5PG5SU5ZRvRYV3F9BJpWM1GSPMqtTahrgSXdUQYdADPjmHFFvadA5v4W",
  "key11": "2cRaGU4WPSCp3zwefMWuR4FftVf8J49doEMREBmxdw4JdprAZ76ANq5pbq4DfUjPUdN5LHNewqugGfkrzfuQ56yh",
  "key12": "4FWMNu2r7oPLiXGk8M4ric4nGpo3VNVcuT8fBjbu2BcsMLaXSJQgZyiBUqGecTPgmJAURMNxLW29SLuBxtEBiH7W",
  "key13": "5WCgG24vJbqxmFvScoxVbtJ5XRPX4Esb5QRjUUH52XNeNjPu2tJoCsFUvp9GGayPGmnDJ9UAWJs1s7EdaGLZrwyP",
  "key14": "48YaDoJ8hPSdJ8vTKVY6qyjj11BPTEv7auCGFtjQfuWgJsogkUUvvKrJrQWD9sHqnJxK9beSv1G6pPn2UFDicMfT",
  "key15": "2uHapNvfxvHAVj6JyeKBdU6uhT7DEpUUUzZAJz4gbvDLYFhuhgFiTecfvnhj1Gswfoc9LC8rc6cwmr6gHkpqTXvF",
  "key16": "3Q9dRkkwXJtA24HYhNkcvBmRCBFLDeF2ziW6MLKVHnvDQj2dneTgc9q9Nv69m9ZgrATk1eZy6p9fq83DhsRqCP6m",
  "key17": "uDCQa6Nf8MP3gBTK4XftjAYbTLWreNRvT4BNZV2oJD6wCUehCMhmqZwygaT8UQm2VUT77X4f3Z9G8DGqZpGnDKN",
  "key18": "63zAr4BuWXWvGm4yJijhwowUahj42AKNqMWwii4cFCJ4onRCxUUu4NriT8Hi3VsifsWFs6SVvnwDoZrPnXZgsLBb",
  "key19": "2rhU5sNWcB3DSfLTZAnxLrMHpAXh7Em1u5mVUu2jAio5tPF4ZDXdywgUPb1c825YvMrEhurCmQ9rPwto1meutdJA",
  "key20": "ZH8DQB6czbHj67W21qtA2Fs2PoJ4tsm6gUKYJUiQD9KCv5gfbbm2dvG4oFNKco9ZtXjFAPnNsoWu36F9BBaoam2",
  "key21": "2dbThjwKrDLCz9wefeKDs3PsDaa4kb6fT9FoMzdudHFDp5Rf3QUi73MQpdndjxTTDg2Sicrc2tW7JwSAbfbPtGUB",
  "key22": "246RQGZUks15DCEbmBr5Y6H3wjvVp2hHqyPfbVhV6DhXwiY1Hf6sSsDLnARZBWfAHBRAwtfDk9EqsufADPvy27vj",
  "key23": "5f8qU3xnUfncYgVx2opqpep7nJKTYHRziB2o3HX4NkAhB28X5NwDyU5BYTWfv6Ymmj5jNHr3b1rij9XapYXiTe8s",
  "key24": "34TVyjbhX36fywLPa6aApijwXBZDY6L9qExewpV2t2zH29a2GWobixutyxgFuc8uAuN5BEqsLBixfRWnLWYHxELF",
  "key25": "5UFT1zjCSJdPHSa344ud1bgE3q3Q2og8RQHceBXydKejtDiHBEXtF2o5Kts5anxH5bP58Wof4eFz19CKvZF3zNnJ",
  "key26": "RPqo47VqEKzpnSAWjwtk45A9JfueAhjhzm3cj8YH4bz6hmy6xaiTyLdJr56pcSjtb9skR6tspJXNztncXn16bT8",
  "key27": "8ESpBfbLZzF9cMfZKuousHssUUjrTnmVxZL9WBSZJZFMqvV7vSHNYstQpaYCGAdJ679LmDGR6mBRqVGzaXTV72w",
  "key28": "5x7DX4f4yRXES95UAGwrqzx1KYaBMW2mKpk2XBeaQNjdoRwpHxdFSgZD9cQMSDCSFpze8v4QJFMLxfe4oc3NvPfe",
  "key29": "3RTShHXDZ42Az9LZYAx1ETUAYpFhB1wnG9j9VRHPbBkgwKuJQXgsgaXiLdnzGr5M556JNrJpxTL8iDPXyUugBawn",
  "key30": "5Lc1QT3faHUtLFniKzrYBwjz7X3oyyWkAdtyqZ5fG1iV5LDFFLbBcYBgTC9Ndr3zAAfPXwmVBC1dD1Sbrg6BFGBw",
  "key31": "3uJH8rwEiXUSvrZuUcjw39irYD2FSf6D67cigVCGz4yyhepYMVhkcFf5H8EnFwsbLshbUhUSQF846FiK3szUKZSw",
  "key32": "UpZALSgSvBv9HNE5FC2yTxryAHsUbFmgzkD7m5c6geGb2Xb3VDUXQzHNv922F8ZRhoqZETPpLABRBu4Wh89f4WM",
  "key33": "a4N4DbMmorXq76qWPtya2qzG27C2XeBmDpbN54Xv4LyxHXyAEuXgXb8KUJPWksYiGByzK5gqvzcxpM2SgZ9Ghup",
  "key34": "3uGzwB5vCADT91uxyP3mVyRdduuAMFjzfM4L1a5wz5emJDuiqsR7Jya3QkxhzAjQnREMTGwuPbz16vs6XEYr1web",
  "key35": "2xRqXgLWCaZK52B8fNtssa3sTxcQHGXJCi8Jq3RxiF7tR52K7S5o7wmkfgtPnuzU9pBiw3MpYxFvKReruGSSHjV6",
  "key36": "3XidLBcmThZ6ZUA23S7FsbRf4i1TyZbkBMie2mrcNrmM9oBqCWfWjUsWeMpizzcmhA6nNukGhN2wcGHkBLQhnzqD",
  "key37": "4tX4LeGtQQQdrwVFBx8ujLChyc5uZLChCSDAtQQpg76N2z8oyB62tueysrvNCrZqaeSD2eiCV18yNfABM6fRypcs",
  "key38": "4eURzXsCcHqg9YQXcaUq7aiB5TVht8HcmjANQziNt2YyT4LEbqAuXjqLjjH8PuXmoaxsmwd9rvuLPnmbGqrrEZv8",
  "key39": "RSwPvH2F9akGErayapueLaqVvvEBd4AP4VmDDqoepCeytmMrxEfcNg68kxVWreLaHMRsHPR5Xur6RHfsYCS9mgU"
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
