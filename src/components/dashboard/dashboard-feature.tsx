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
    "4XToZTNXRMvv7B19tRKq1JzZYEB4AgoHjduYZEq9JWqWyBGYTiuuJUgGYFDrd9bANr2XyLCoVZEtreVcEcxrjjis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gtNcdGwbWC9REYDeWRpiSgXPLh4jKGiPGh7Uif25m3wPgrSpLa6uKGgAwcSmmjsiSuPTE5fhHGaN1fdxCtCwhcA",
  "key1": "4g98VjF2bcHLwPuZ4RTzF43mDzJaz4vitD2sF6GmNUmbz5dSaLNitDtCPUrsfqAsbHvJNfA7UJSMiSLVf6pwYMKW",
  "key2": "5MLKuF2ZTMn6iiDUQVZ3a5qxwyqzGQoNpJz4aiTKV3Vx9TkdhaMQwY6E1GXo9JUeGzcQ9DvTb6btirQZWUb815dm",
  "key3": "2F2FYD6apjCufrT3YjDCeBrMPnfEw4YAoUJHmFcaY5EXSv4HnndRUDs2Yg3fq8uH8qpdoyDTTmss8n57sPoTPh6U",
  "key4": "diFQBvDKEpKwRfSMCr3MPycFu1BjEvPCTqXYPJc8esoLW7LuXrSmtFbUjK4i6G2MWvgep2YiL4VAyUmQU5DSekj",
  "key5": "2NgNSJajyN6QA8rB4cTH2sVJgy9anvrnXF3VPjPjUopnf7R69eEoWufyhaAeAS3yJ5fJNNA4V4iQ5XLYUq9GLBXb",
  "key6": "4kSGNJQzjstgT9aLUC8xt6t174b5qDCiPrtHdcXdJzNN1sWHzi9GMyoZgQiHYYtt59f6gSQjcMjAj2YKQxVF1eQ6",
  "key7": "36yBPLeuHfpJNsRGwBNKUUETa3GuC4FdJrckxhJHhw6mruoRwFJ6ir8eGmT11BcRLKSQcK3c3fbuGmtCo1ozFbZi",
  "key8": "63tpVsDW85iqx9EeeSLVjdwwoN5e5twuskFzmtXSGQ2xrtZeYD8SygSt9GQvVLw3r1m95eBERe4UW9BtsZrH9hcq",
  "key9": "3BgeNA9L53tbXFHqeqwJm3Zu2QckFYuPJN1C4izzFhUdptxiYZ9At8j25ijUAhhHYma7E2QRotANpZ3XgEwp2n2j",
  "key10": "2A3mr5oUF2nsgM1TEUFQGJYLUP9m9Ud3S6tCm66tR4UuDSaJyjfYEDEPRvav9Nf1z2c99QAyn7p41ZPor6iGACYj",
  "key11": "5Xbi6f5TVTZHPokmyWMPfXFCtSZ5VjqLodtTmzZffWHAmdQ52mDNLhi1c9CXdnFMNmztR9oBihf79ww5151wXQ1v",
  "key12": "5k5maFqB1eyARHoDBEGjUQP3aNQ3B43okjJV4sCDUE3DCcGYqv57QshV9XhJfJeDFaE5bnMbUxim6jDk9qSuTCVg",
  "key13": "43DJ9tqpeZYEb4tSMsoYqAkeBBN7nDkDL5emmXG6ojc68biXMLjFjXtaF6qEBnyyZUwQNZ9GAip1mRgzFhcEDerq",
  "key14": "4BDubAL9QrLaZ5bTuppyE1nQz1n8qgJmTucHPzRMzTzveadVASnjrqV9h7KLNZn7894ZkbqYr1nuEqS5LwrjVJSr",
  "key15": "53cLU8FdqsRZjYU7KoqyUXVMLMmx9mzAFFQmMvbCGSFk1egEjhPK3rtJhRd7fEPmFd9YCVNkCYx6RB4T3CNmSymw",
  "key16": "2MzeGUv2J2Gj4QZdi75dDVB7p5G9xqe9DzRZKM9ezRjF5ULTsw7grDz7hy7CTMzpwbzt1WYbopoahnajrqRb9qN9",
  "key17": "54DobohAnJLeKiNdUFe2oXSWWbr47xhD78ypbGoioJV2StuaP8JGUBRD29FwdpeTowxEa8JvrJuPZCC92vC1wAAD",
  "key18": "caQTRAmqEfWqk4wcqsCUJxgHtv5ZDYbjrPhRZPPabFRYMrzxAfPcnyv2txUcPzvDD8vfW9YQUbkroMx9u8vViUf",
  "key19": "3Gttw4GBN21TUYg7RjQJ6geq6UWLgfZSt7jQXoVbipgy4HJj9g6U88xVVS1FHgQRvkMz4GGqGQMFw8kB2mLSE2YZ",
  "key20": "4N3XAByQqAcm4T1Eig8sMpvmxJUV8o3qNwvys8fDF4EAVmcbgwr1bY6pme5QKK7rRr1f4bcQycgpyif38Ck9oKqR",
  "key21": "5psk1MYdvccNMHxFeAswvkJMCPSq772LkqNfSqnmzXSMTQtw1Pg1BAS6tGYGDxApch3oWpthTeDrN6UD2GzmHnSp",
  "key22": "5GLN8MsX9iKEQqyAb5dceejtP3jgBSAdvTcLe4e4GSgB4jfB7CY7A1eMmC4cREiQjpepiqhZB1HieuT6kh3QdmeR",
  "key23": "4tN5CDpiCtkht8pxG8uy57pqTreikChdzYgKtxMSkHWSt6VmwRyiLzgFKZ6iA6JDfTFmYKQv8nc6Feg4VNgVc6zH",
  "key24": "4DQfKWNKgx9MtnKgXCcfHDYgBzHwpjRJi3JkUpWbdgE3fR1KMu4A8mmUDc9eYvnH5P7XLegvjw5MjSNfrBBkxqJ5",
  "key25": "2phftAZj2iTmjn9bjr6sxkQqC6ZUURmRNxQrya3dQcxXkoGQPaMg4wH4dKZrwhhonspzoDK8RdE3zXdzqiyTnvuN",
  "key26": "4ovF7j3Hij9UU5Yw94B4CnCvd6S8YXeGmTW8ESvrVE4NzftQqnjreUXtvKdaBaVJZFqzJh3iLygNZYFXfRiueoNb",
  "key27": "bprSJrnQwmGGFumD6qygExNiEPEnhhpAVWVb2nk8GGwmHQ53Xwvdn8LpGnGKPeGLab1MFwGiKJiYhvBXhWjaqkF"
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
