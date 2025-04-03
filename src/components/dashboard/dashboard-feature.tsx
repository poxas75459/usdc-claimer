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
    "55V8Tv4mkHU9HEU6UzhBAejYpFz8hjcWKRrUsVsRnRhZtA79MGSZbeAhyHuW6TWaXzRcuffU6dwrYtguUtZUG5RC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4heBAuPkhi9P9uQeHRhorL5uAuzMssYkEU3WMxE5v3wG1UBNZSDhqVgDmUZs8gnahGLbCzR1WiMBXsYfNdnHps4X",
  "key1": "XEv3uPjESTqBp4ng314N82HsH6ecTXXU9nWuo9Fn7eeXg9TMjVJ8HmRZdF29zvoNLJGpgASs7pVWbS2i6T5z1ir",
  "key2": "53Qa77SuMuejMrRig74qRjJx8QJpTfADrJH66QSAsSYr1R37WAAxf5iRgyqXPWK7z9UotxRkjJj463sKrSc2L2qx",
  "key3": "2hMpq3KKSje22qad6V6Z87Hw1mM8oefh5meUmejTE9W7nqh9pHCNGNTYCzTUAeSQ9j1iK7VQgorXkrvg7s689bhC",
  "key4": "4yxUzWmFEA2iPZsoxneWEZrZG7PeMtGH5bVpq7Ec7JSBSbtMmY9SN2j8zAPCgDrkRJ8S67uFnnvrYFviXMByPjVc",
  "key5": "3QCoRyEJ8KzNXkDJjyKtabpdykf8H5gJsmnrQYQcLLQx9FNyBJetShEmUXWbJhWavK1THUH1SoapH74M9LwZprWf",
  "key6": "4TFWcJAsToezVb2XbTaKrSbEMzRsKsMFmXMMJfiByv31T8i1SWpYeT2urMVoUwzvSudqakBAdNbVvMxa5LCvAcmx",
  "key7": "37ixWbSFTLLyikEB2q9Kvcm1HZBF1rMqmMatSD3dqnxkUNPHV511n1DpyAcMcY1ZnX3ur4NAkJMVvbi6LscTzimL",
  "key8": "bmcFgeaYAiFtwuZtC16DoU3Hd59iRWMbiv6CNhiwRRAATgS1zXX1YEsL7kc5jGpzFd9tiL7yaHv4VDX4RDEgFSY",
  "key9": "59JG1EQREWbAWfp2jWnEPstrnPGGTZzcx5Dzcr1iqatd6MisNtHZ9CgF9ajYWyVhtaFxyPBdiG3L4FzCaTujp6EZ",
  "key10": "592YgvfuJC7aoSnV64ErdEgH87u6pybNNiE29odBpAnFHbLqrqcChYUskE8Ljp6vBKyQZGUXN2Az3nbn3BzMH1wS",
  "key11": "23AKdPzoZdy3j64m6KABPbUAJefMiCR87ALHX8h7vbhgN4SJeGMQJ8KQxCHKdGDp1EsnGbZCxKEMTSZRQE9sv2zu",
  "key12": "53PG8wbVJnkfHKkmZorW9avo8SNhfLXEFeKacDXzyckMgPqgUyTp1mFwWBo67cbC8ZRYpuDYzGhEPq7dXk8EaLur",
  "key13": "Kzy91qH4Ka5BXPjZRE6erW1JB9eZoexC7a75oKXkamawdy5sy7eZG8Apox37HKJtBD87oCTekGmJiNnNrzWNN7A",
  "key14": "mUyFeQ8oha2PsmFu7gLBnm35CzdzF9i2yQQmF1zbYMGXqEQRY7UVLd2hXzFrKS1kJTGhaKfBB8wHZxF31AZpBaS",
  "key15": "4fsE5rcfhSHZhHsQHWpamq5MV9jnqdajMzoycFFwQhh9wSYbehmD2wft4iGTPAXqswLS1Aeni638VsAW87M2r5et",
  "key16": "4dbimsUxVQB6YjFJVxTEvi6ciKn4XxwSSDgWXEUGmX5mup4ZEszS4j2oizTyoZRqfpc19PTLhQYRR6qjoweCT3cz",
  "key17": "2WRT64WTarsHfvGxr3pYXpXusbLUEXc8E7nMi6AdkUbfsFgBrkWwsmnutijLaJe2PBhxkun4kQMQyK2Kj3YEod5U",
  "key18": "5qsCTGzLdfo43BLKif1v37rrqurQvyYy6WW16XQTBvrYqJ3EtuFnB9aMTZrppZWBJamcKYQ8Xwqo2BJVRhnCqBLf",
  "key19": "4H1gKXo2wZqCmfq2dVXL5CPZjJhx3L52goemBngyG158cj7XyHvFhP6kXK5unX9JGKTPw8rD9Zsp9dPcNxmGSqTk",
  "key20": "2qHSdkqYiXXT5LemTEqaLMtDeBdtMSkuebHrAP2CcQuQKG3T4spKd2JBCVeaPm29TEZC4y8fQJxsVSJcWMGHRCti",
  "key21": "25uKuekTfiS7nC7gR3N6D3nwKPMez1CWf8KEoGdkRPSvnnU4bwMtuTNyK3YNKV6amMQ5UUVbWH9Cmx8A87Wegiou",
  "key22": "3msqyo5gsr88v9PLQ85kVZLmj2fjuy7NbHfG2Pt3xADmqekhMJjcgCcRgzwGr3h5TwiffPSfGzX25AVpeYm28wJU",
  "key23": "4XGFFez5J9SgbY4B1W1xuk3eA5KZWt4p7t6sZ2rqG4hktMeKX76Aq7qLhv9fqMJHHz72YPgfJyN21UqNLwnsSwoM",
  "key24": "4f2wJiiJ3x39PQRbDBeGt6ubLrwfCejqHumHP5Yt1gGvZR8Jwj4P8PFHJ8j6YwuS13jMXbp1zyQB15Qb9ZZEpqCx",
  "key25": "3vbpHdEos8hixRQSuCNTB3MV55PSK59YkGwiBQn7Pbyj8mnSmp3ruHekbPtSvyVNo21VUaaU7LCkP3on9VV1X9ot",
  "key26": "5uSFY9u1eDS4zm9p1XbHF8WEDjxwNrRKS3wwT28RjAZk4HVsssxH9dUYEtBW7nXDuT37TuDF8VfCF5ABzqGwSGn6",
  "key27": "4Q6fpLxKN5qV2WE9SvUddA6TcYBtsFHz49B57RDmWgQBVw4EXfPyG9WPdCdFjxT2AU6CpEGBByBYQsw5Eyh2fht6",
  "key28": "3L9G4PbxQfHcGNs4nC6GX1o4jv71rhx5Lmq8FS4PHyL1DPfmVhxH53jZqMwWYpyascTK17JKzDbzkLGehqUaFTsc",
  "key29": "5pePWnvq8Jq6UxPQnWiASPpriTvftR2AreiHfHSW689Hxoy4LGmjcvAS5LrVHUXsv2d21ENijBugM4qE6NGU5q2t"
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
