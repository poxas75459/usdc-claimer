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
    "2v7WrtwRGCkykHTEJDayU8HAJf1nL7DbCwapSDmQjVm5a9eYmvJTHgAUfjRv8hCGeRPYbQh8y442goQaTwuqbmyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wJNSBMVL3kmHbrE725PKkupm4E3HJffvxUhQBmdAYR2oz8MPqrLUP9rBHF67CkRGp3cvdxEX7zYPgFoCjMFU9pE",
  "key1": "5EwWuMkpRsAtZT66G9bqRA6kYwXYGR3HrS8HYPCP6ZGoZ9rUMbh4paZN2dcdSqkcAnfPfZmFaFcWSS9U4rw19YFT",
  "key2": "WbDDBeJfqhBogUxiiXDtQDogVvcyCNy7nhtFY3rmGvKPppBWPB7QShyPnJjgpR5eAZdcCqLBeQfRqDSk4mjBMzj",
  "key3": "5GKjbEBCa8mvDNxFGEG9o9A8wq48zZi7pRzBAvvNkRjiTyedAVosXx4yogB7hGyUJCAVwELRimvXsa2eMzXaVM9d",
  "key4": "X7GMiZ2yR9cUR86FgXbBFn7zRJYAkgm1zMNyXbpEzwCZU9U4yp8V9FLhgyA82jyvqkgvQG53xoS8maf9kfGELtD",
  "key5": "56bysJEz3jMbeN1M1xgwoQRXBHKDDE6S45yd6kVYBrDAVR3gonjgL4idsfK6ZY6tRaMizAxwmP89Wc1gpREXWYhK",
  "key6": "2XCd5QyiVZhSau74AFMgWRrkifs4x5Mxr7qFdqm3UbXtwBkHo5JAyd96pEJu1PP6ngoB6EewSShebbMQjJoGTdbT",
  "key7": "5TxT3WVSXNa872uSWjkNVM7QbfQ6prTUTMJ628bFebjx3SXSxXpeTXjNLZNr2rnCtE77HkSh1vQC2qUo8NVvaoJe",
  "key8": "5W7bqZADMN4jnS9r3KncoPUm4G28wQjYyoUcTu4oJmVkrFAxg2tXLdTu6ATMZptWkTYtZpPLHpY8k3GRq9MEJwRg",
  "key9": "2cQwrEK9vkuCJffBLgkTZRroo53yUzHDAkZdzEzgDc8P3WFYSsTvAuFmJege1bN4vPzyUks6PihGr3sTkumiDi6r",
  "key10": "rKcLbJh4FmzMqZTAYkSXk5UBMnwrm7jTDTsoreDWnQeSosJe6uCKvDgXqsBEU1uTvpSoEejqyLWXEhs9L1E9kTJ",
  "key11": "4Ci7BjBkzW3ttTpigo12XPtN4B8edd2yD71uJSJNQjak9So2GcnhanDaXqAbPye2htRukiRxbugYv72dowiY42zB",
  "key12": "gmDy9D3W8XE9abfezdjaTANWHohpd1AR3RzSFAtbNeKMo1TCtjd4fS5Kvtv7fMBoMj78iS5hJ5LbtboMNwQaakv",
  "key13": "3F8MVenuNKf2mSWTyCycQwpy4nAHrfRPLspbekK7KQ2o8TTZY4Qz488ir4PzLaB1njU8caBw4rZJhSjPnJ6WuqBL",
  "key14": "4TQQyWsQtRB5PkR7Kutw7mPMmqFwcUbDhSze225kjUMW4Tctgck1uT5YBYVGJjDGJ1sCGEgAk7sC1CFAutYT2Cao",
  "key15": "4xr94c6z6uvHKsCVPFjvp38uevyvFDg8LhSj5yofZZHaa2hTvdnjWCT83fMi7SvcUupJremF55HA5ybRfmMoctgF",
  "key16": "GLixnVygiiUDotW8QEYJqAW3VcC48e5T7frARrk76Yd7ZgHrHhaBdgCvdaXub1GuJ3RPGMEQ6XtxGiVj3FQ4x3E",
  "key17": "4VeUXJsNn6dx1hCouUMFMdKRg22F7dRF1ZTSN3fZgGyoMv43so4vBoK7iqW5iBWSL7TZ5cLr2UoEjNj8GzHuoJRM",
  "key18": "3fA9MLdZwqMoM3Z7U5zofqkGJXQgPJz9yQgsoCsa4PNrGDobk6aSLuxNVqcVEL4HACf2FCE5ZQjCaZpU2R8dLqyr",
  "key19": "oZQzusUKPX9Nxyy7NYH36ryAGBk3aWzE8ht6ueh6hAKLuYjxYzQbDEVCNkAv7bDkFSWukDCZRP39xJQ8bGAJE2t",
  "key20": "2xnJvSDJT4vRz8cAUvE73zNsrnfuG8cH7kVCe3NKYePM1pzHAV1AvzRDzkjiDbp1tq45qskAk1enn7FCQSpKAamP",
  "key21": "4L9mCgReavs6kTVbUnSgbQfUVb9CJbGJCYQrn2Wbgoj7Accnu8pLbZBQaBoMHpTXwCymdkmQJjKz239s4u8x3n6n",
  "key22": "2dbq8VirovToVhXqGMSG2nK8SXa1g7PHSUkgCVimQpSjZwp6J582Lsekcwah4L2vo6ANN3uo14rGyiugJGpZHhuG",
  "key23": "wjnQoneB6D1xf2XCGKsZKiDnAr9PukKDsC4iGzg6bLUKTCGJr3V8qTRLUTb7TeBEswATFPvDvJR4EAfTtf9acm4",
  "key24": "5yHF98vXM9vLKHxMZvnrAEyna7HHrZji1AxW2oQEhpA66YsgPVjHJ5JDDMonL9YLQkvkKUc2LFQCxqA9PctRSbzX",
  "key25": "3h2LhW3Mu9dJfcCwRrmtYLrrjEk3hW8EeKd1WQp9vJjR5crnbEzp79eY9DkrP7sQELCcEvP7EPobRnerea5dAJY5",
  "key26": "56h6SzGkX7vpNS5kpiNH68cMirnpm6E4CqfHwNk9JNy3VMtoQ7aLQoJ1Zt95zLstjWUhgfzd5KwnuGSLKLG38KT6",
  "key27": "5ptFeXVj6QqaWw1abWZ6CLjHDhYuLTGXicnartANzmz9mjtJiLjjUH8ot1risbFvDZ5qTcidYZvu3WkPds5JLbzh",
  "key28": "3RVrUp57nATA4ALXuR4rRwmE2ugLVasydT2qPHWmTBDkPsEnNdL51m5feDbQ7tyj4NQct8cfFqNmwNJkmqK39amv",
  "key29": "5XTtxojm1Jf5oLMR8rEQzt9kcVtq9rLoZi6XCuN2GmWqUVL8MLKT2BrWbtW3B4aFv9wUfURinvnKCcCkDa46Rsbu",
  "key30": "3RUCrvbfwdeWC2Xs7rFhrSEFaLdxD5Ymmh2GrhJLVN5A2LxGZsZxFePSPJxMsQMVBD6HVJB46Aukp3WcJWvyciux",
  "key31": "2ZQ8MoDzwpyc8n9SkQ41ocVuR6E2FPV5REDfX4xH1YD6aAWhLf46S3iB4gc8xdcQ1CyGqxF3Y28xC7HEhAeV6CbA",
  "key32": "5ikEaUq9YJtNgREKYCAetbsJYBTt74PqW7hjTbhYhmjvC7Pa55rda8KMmC5ZHexYasJhWLd3oe8ewRyzrmV587iQ",
  "key33": "4hKZW5qGQEmnpSgFuVAz4NuR6sAYw5WUSp5S7SXHGjLbSurCdZomT5xnA4EU2fBYxpUD1U41e13TvtkvCAsgGd7Z",
  "key34": "2YUzFrV9MSaMAfq4m97Cj4zozU1fk5vwscvnwZFzT1QgFjBJ3JXRUddkan8koThbDwntefuuauAss5Zdvfu3NTfB",
  "key35": "2YLF1kmTth4nrY4uSvFN7q4XuG66XxZ6Ywf7AjxVXu1kHHjJYnxA1tSqqtwrgRKg63mbFN3WYyUx2tF6EKABAJaS",
  "key36": "4s4gPNwA9wDyvC1T3w591r35X5rk3rsGHJ9ZXHunhJJXCW6d8UJX1eb9U1KDDCFP5Z1iR41guo6rFma3RDrjfi35",
  "key37": "4tBfA5A95Wzbr3S9beKbRVnc5g2uL1uVjzDZLRfBaGA2mdZ9cUCuaaKiBpZvMW4khc12URYZSXMbPW1GJVdKLDcX",
  "key38": "2D4bSKzeNqY5976XWwJ7fn1VbNGPpd6MNtzf3YwcVCCaag5buGxpAejUpJcKTNUyMczvkUbrYKtJabnbpxf4Xbvq",
  "key39": "3iweb42Po4pq7HUpUT2MZkcKrGvnpYVwtkoCftBFdBWDJzr5cgHnCvDinmNi4Zk1mANgDAqirbQsjJnbB37AEQCU"
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
