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
    "5r4icmFJpymbeZ2eUBH37Q2hp4ceWQRBqSWuzQyTwhXXJosWJdooXPpn9HLAeP3ascRm7cQRLnEWqu2KQLFHsKfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CKptAXDP7a4sDhZFR2qPGV9jbkDDBWNbnv8r3F7kqeDHqWGT4hXq5TnLgpUBTZy7CAuahqwwyQaRC67J46mx2CX",
  "key1": "2FTMfeSvRVn89KrfzQ6huWGHfqmD4eXPA7C2weqzLFKhY4GgndkZbmfgSmQi32kf2tQDidSD3n2BMNAzSC4mMYTy",
  "key2": "2ogqrLXQA4vCFLVfY6ahEBTi84Ds5WvA51D8PX1BfaGE2bNGy9fMe728W2vi9TNfwuUZchjVjb7gMsUWAdYGrE4w",
  "key3": "5fhKL9YU7UuTfCyGDgnw6Vkah8Rh1A3HrBF1hnPBP2CbYUtYNqpTWy5fgCqpFewYbcDao5BL3MLRJAQqcxgvGggq",
  "key4": "5M2XKjSvxR7rGkpKiVF1fdjUFtmGt5WAzdp3k14qM22KavbWHgXN5oNHETRa22REM6sEqV8MHJTNeZYgYMqw9yEz",
  "key5": "4MEay8qKSXWNVmwpk1c2r3U9J6soJtuNgRHi7U2nsMqzXo75jTUytgfv9UwmsTJrLDbqB4NMh6f5FzUWitst6AWP",
  "key6": "2hZWPSqwjjn66jSpLTpV69gRFbkLnoobPdy2CVGdsPQZYFrQAkjVSUHvKvNmHyJDKKGmURjYoZC4sLr3tL9MjbTo",
  "key7": "4f6r9RRSYnmyqc9LV1fVZRCPhSaQyxpKBvwzPWMESe3kEN6nf5fB7sbvNHWGD9EgdyDDLLQqrXeNv51mPD7gtL5W",
  "key8": "3yo4dYoM5ToZMFtp1o3DCCukrauvJPw23xoFDCHtXEVsiq6s8fh942N3TSFrnaHTdNesn18vMTRZ1ptjuLjk6HvM",
  "key9": "37uthqYmD3SU8V97rsQVjiFXWSNo19R5q1GhwRz3aLLEk89F8LCSeX5UQJo6GmKQf1yEnRn4gA7sucf5xx1Ha3um",
  "key10": "5BspKH63vE8A7yEXs9d92WhgdnTXZJmi5Ds9VsLrQi9ZCHchdzvdmEBB9qUQ5bnmxGwgbgbvV4tca76Bn27XL5Zi",
  "key11": "2x3FvRasj55LM1x5PMr59MpYk5HKfRdJGEPbHK54oaCWodrif5Eud2nvGsCoCDxdRESR2G9bECUKEzzHQCEtn47Y",
  "key12": "Nve3QUHKBjbNuGZdvN7wA84yDjFTb9S5tsN2RL11oA6yUPPY9sVermywgbFRRebdQZYnVYxRrBaj2ChCXypPM8d",
  "key13": "2YDJvhfHztbz7fADbqUksBiPSrVGLqzbDefMvfUC733XLaHYrNSo9dmmxvFpbd98BNpXXYTK85Nc64hNTWAyswJC",
  "key14": "2BTC4errW7bzBjZiUfMesfANikiwYXmD5MyLV5QZEgXBdpEBt5tCFvCnaws1ATaqxXpU7EPFYrXiwnYun9WaJK7X",
  "key15": "5Z1dwsiMjqrZ4ua9wiC3kHfPCWdSGtins7HfdngwMgxLtDnNyAZnNQiPYroX1rsa4yGxTXjLJBtJU6o2sq3P4SEY",
  "key16": "3Eu8wPeo3yq97HEAtzktWbryG7nWNqgzkJ9f8rDNta6R9hrEXha8bpAhBz1DkyT6L1u36P53YCPzZEueonwYzoFj",
  "key17": "33pacLyx3EZtf3LS9UMHXmoZL7mgoLi4FSkZXB6CcYkgfLwwedNzk7ZfaT342twQp2SvktUTHNchdmWrK3x7H4i5",
  "key18": "64sUjBwRQFCRyvs4fGLx4ExxGrR7okj3BEaCU2i31SXoKHfJtSRwUHxtuhiGJmLmucQJc8HRZ12RsZyNy2t9wove",
  "key19": "2pt71H6yHqXJrM7NYXQwb4Cv2WHXbMu8tChkRbarawNMsrd4uACgP8ZjKaWusw26m2qBqQP7erArfhPq4Vas7oGU",
  "key20": "5mivfTe1aM3hhVtGpyccxcdD2737hWbwoEorMtpcGwtiRquFQAE3YGy1Rzgm3uVViwcsfDGv5miXz5K7xkhBfmvz",
  "key21": "5sVFGVYrqrwg1nXyiujUia44JxUX79qJm8PkNkBm8HnSoov9CYFWM3y5qKjerS1k1L618FYQnkn23aYpVc7hYK1M",
  "key22": "4kRMtUNSi2eEYZGhpzn5xyekoTq93wC8rUyF3KA7Fc26cV5kXkke7nZ7bzG8BXkM6yTpfXTTfPDQqZVSYjSH72UG",
  "key23": "3vZGqaejoTmd4W14JbFnHuafc2QwGKAxo5Ay7Z1b5WNcaMZtXy8JyFUTW62nN8C8YoxhHAYw6yWZfMyhJSph1Sz3",
  "key24": "L66QH9gsTUCeJyiyJMFDHsfJCp4oo4VVVSEhU8TeZTfKDccw8w8kAfyqoztTxbKsAZTxZ7wS5t6oGx9mDeSkhxz",
  "key25": "3ewyY76nbWqJkNKFN9vDAjvCqdzpjRerGFJJdZXgUbuPsbG2Vz84jhZiEoLkgCEcoLKWWYw92Ca1BDLqtvYLukYD",
  "key26": "2THSEumhdqt3u98QrQ4CLUgdPT93uQEwsZC8Tg8KyEZQWW3ufG4sPZWwbQF8HMAi4uJjjL2JoXu4yK2HeLMqYnCz",
  "key27": "64bw2rGQySaemmsu2pwkJQkNKTzErxFRAGXx8s86sqqYDeQxDRME9n68nzCAZnZgADM7UBF3AFqc63g9uib6yAGv",
  "key28": "5kANCQT35wnK9fAbJHncf6uJHVeop2raKwp6SxrL3F7oRgWVaUSTtixhGkcZvRZSAhef3q3WUCHW3Ksd2VZ8Szur",
  "key29": "4NZc5kx5vWFH5TZQfAG7QL51pWR8wQRxdDvxba77ADrvGkERF8bpHs3WGAb3SwZ8Lad66omxKExfWjz2h4KBLsSi",
  "key30": "4MqKgvmcnSVWBUBCynL73ELiWt98CVnaswePHjZFJgKszWFuu3U93o14HBcL6WLkBXyVMjy8vj12W7sVVgbHQpUx",
  "key31": "4Ya4C7qYQM4dZNx1mSoSNjERUZhs8bVowv7oNB8BoyA2zRpdt2AuvVaJMowaZjtLPpEutGwhfwbJZBvAUjhqZps1",
  "key32": "5YsWhcAkfdn7kwgLW4zP8RK7JUKDiYdeM53XSuEaDPCzLoRWZbX18G1WGJUfuF8PwzFB9zJJ6CTq5VPvD5KuaBiF",
  "key33": "4KuBRqdCHuzuzsFZ87H1gKr5oR9N5g3DzT7BCTcXNqaX4kZCsuZr31rESFisTGGqvtWgkjEUg7S2n2ze3xsSF6kL",
  "key34": "4mkbG4JwL3VdjLHrdYbunL4n7pAAjaU8buu7n3RWPFH9XUdzV9ACu7QwAQpUbCjibXDoiN19FE1sAQGWP77rVX6F",
  "key35": "4dWem7Q5CbJ8HVWZJxCYKQTTAR7TNnxa5zpwwDYFn1YgeDcrFY3emddP2weDnUUX6EqULqsoRgY8icNRdybm5Nck",
  "key36": "4LPS6v19E3wLFBDcEuhyMVEu5vwyskj8yrASzZYfHgprTs3KrJAgq98BbcuLjmNxzzBw9xNrH29euog262EAzQtm",
  "key37": "2Pep9MscwjYU8dhhD7bMxiWATt2Uv3qKDzkkMyyd9fZZZC57LG7P2QAow45kCb8fDm1X2rnBTKvPwmzK4FWwbkc9",
  "key38": "1XcA9Kua8irC4pyEGBva6aqAp2GAcAEN5XokNLv5LSHNpnXQMaDGhnHXENNJNncdWJA44Av9VHefrDnJzTuqCsX",
  "key39": "2T26pXasGjpknD24pfiegbMPE3GeqUVY9GL5RGcsKweYhHuGWh5S7gyYPRPbpRb1U9ueZokt2YnZHNSVB3fWmMcM",
  "key40": "5GW9BZFyGuXSCMKUTUvYY4QB2sehzbqeQgfDCvEaJg9HZsu1UdH8X9XBsfJus2ARF71VhypyHXYhCVczNajJvXEf",
  "key41": "2vKkeENu7Sgh6VckP6GmevKq4BT6STAZmLsD7ErcHYmWSvpB5TbHVWSHKEhQ9fau9WTKkBv52PJQ8e8MSirSdBHj",
  "key42": "4LAV9gQpRHyp5h8nWbUEzPoNxEjDarnbJwFgDd5XbJ3ASuXtDvFFFpzGavTKNCs7bTMEhQMV1kiyeNjRfjmKCLkr"
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
