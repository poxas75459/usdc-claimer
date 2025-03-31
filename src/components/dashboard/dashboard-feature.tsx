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
    "56E4Dzx9gE9izGEP1fNrZdrEqvvNw22596Q6zDda3pBMrPPDC9b36iFP25DmSdam424bU8jzMwb2u2we83BzZZ29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M7q9yJgsKofGL8fJ1aEXZ2Q7qj4gvf5z2pA6xHnjy4RsFhLv67YqLssK3mL29xG9Bx6FyPaGgT8TKvmv8iG9Jyt",
  "key1": "4Ki9x6VVcnNrXv5sbCNoHQuQGfCYFtydNvCJ9VwLqVuozTmwWBdEkhmcE5z7K2MB8DNvBTik1jG1GFWULG9VV6b1",
  "key2": "2tsNLFHK97via456x5nS5Yt9NSMab8oj9a9MHBqfgxeCWY8koK93S9D7WKVMqhnppxtNh3upxevwLUYM7dk7DM8",
  "key3": "5iNBCVS8hCZUs3cFv1A6fFhBMQnmcqVBLZBnXkkeUMgBap4CYjESaRauj4WHe5hhE3w5JVv3R7NCGAbUCstNz9FR",
  "key4": "3qnF8MHu2aAcMyzo2vtRBhuqweLfLajyjmrtMUJSehCnQo5YUoKNitJnvhD6vc6u6eS9nFYk9Dt1YHgGmnB2y6KQ",
  "key5": "zsrEMxvt9ooYBh5EkNdFsPzRnJdRPnADW8UPqpgcQBYY6frhqJdypwcAeKzTsUPFrQDVhURrRxeGzr3W6Ecfo85",
  "key6": "5yFsfQ4NbSodtTVEnvvn2179V9tHbfs9bhXE31YaR334kdwoTFMFKPbZfCZnBMKeknMcDLUX4D4BhcGCRAXLp5dF",
  "key7": "5VsJn25QgEYR5Sca8cFb4oQ2aJvyzFabYUyDwS6ngczmZcY43Mz4hzMWJZergYyB55g2jXbjiuemdqBXUorBh6QA",
  "key8": "2kyaWJK7puQ6pjqoRkrcnMfmdHVkV1PVzdN88iif9b9DXF6rX38CFRuzgvUuahZPvrYuKBewJ4Qy5mQhVfFg2FNT",
  "key9": "5vV27eZinDxwPJdQkh16D5dT2RsTXaC19zmniEsnVQXGxo7uNwuxTbhE9zsya5nKnic7Vr5uK4Yaq7N5YjH9PBpN",
  "key10": "4Mk7CWgBhK4umjaT7DbJe7ZTsDMEkeALNqriBJuEhxu95hrKBdw6HU2kUCizfPy572ySCyeHQ3n6LYpn88V1rHje",
  "key11": "5dyS5dLZ4MuiHcw2GetHbxedBi4RhWUbrxBEj9jCuBKutWoHNcLxgN69XN3mq5f8h6KHdqq54mb23b6wg1xHD29Z",
  "key12": "5Eh4Knpuwu5wkXnmwyVv9TLzkZYACDA3bYT2aHzoALG3VgjbULUWrrmEF1B93dtYq8TKXS25SoJeUF44wsai65Ze",
  "key13": "2cAaUXQMTMvCVeJF9gZqv4q2bzyDtuyBAYyW9zbJutQCsFnqMn5k88nvAKGFW7Ud9rvRQhgrU1JaYVSEcWZxSwid",
  "key14": "otQmyWYaGCvScUK7WWcCCGaCTUHnUH6pVMKubut8GsdQSCVHd8d7QnQS9YBHfeauJYFGRXNMrBPRNrjcctmZTcz",
  "key15": "4c3U4waqipUpfn6s8DWjRx7DviEbHA19oMSYzSQqMrRwfNSuTn93V7peSzfgSC9vg82MquzrqR6jsCdxGDBFjvaT",
  "key16": "FpR2Lqeb4GiyPXjSYZtkzqb21aR32j9hMA14tEvUzoBJ2GBEq8wUMzSRRY757pXMJq6t7j15fEUuYujnbMyDcTh",
  "key17": "5Ze71hrT2V5HMwX9VUkM4oGkWAkUkvNPsWGG98wiqMLevwbqgu2zcYAH94zZ9tikojwXpF9zvBJkUnRpgkiNV7Ro",
  "key18": "5rXkfqwjAMkpoiDvB6GERze1bdpMBrzMaXLsQQFaDxZRLt4qQBRBoykMYkDVnntFZS8ufQwktzC3sYS2zm4qYU4v",
  "key19": "3htQ1r6hweUeGVWXMVBeHE1BujM3Aefpyo3wCP1pXq3Ym7DHpZwmZ4CzzABBmGcbnkRhouxh4MCdpMN4XwCqq1bL",
  "key20": "2fsKnvcMy5Ckdh9iAA3jFUZEkF6S8ywhsBaq3yDPucBoAN6sDWyJPgNv8Jf2tyPD54rtPZwoT6xeJUbdKAkPen3f",
  "key21": "4rRbJ5rBREAjEAHt7HZeeZrMJ7ygmU9nVPmPFUwBtvcx7eg2AHnGEFQ515ecakTQXFEg4nnrGZD1jyb6r67px1oW",
  "key22": "2Hqk9UeFwz7F93ZYEwcgQ3WfTsSkzG1CdSnCLM5ER8kgG6f4u69jjahsZxxB7C288XwfsJFjuNCZgwZzcB9teXnU",
  "key23": "4S3TW8gznGsNGVyxUvbtu7oL3tH2gCEbfHVjGtp9X4jUmtvzZMVdXesLUg1sGLZyY3sJBb2x74C1tFzcDuwt4TSB",
  "key24": "jLW3mbEEgtHfRpymbjuouhxa52isPmdZxM24qpctt7aYix5egeYFT1vYjRCt1EM9FwmAxSAFhK32nUZN26YUFi9",
  "key25": "3ebAdeCbieJx6pZQ9G1cpMHEh4ZHqDuamMsw5KtnBZQZ3GzccFNQXPjP2wg1YFy8tYkoNLBKYKYZsNKMTBQ2JaVo",
  "key26": "5Qh6Zd5FfwLmnzePYdWXSNjxfMJCgwUBW7KaYLLRRsq4zAhkBJkx8kGQ9FPEwVpy79eWTN6pGNFfZpJmqvuYuJ7e",
  "key27": "5PaKsjufLVbiTdtqkgXhr8AXHgURDz1PKeN1kghDtWjwYk4LLqfVkEZFGxMk1c56XK2aMv9atgDRv5xSXF8umcv",
  "key28": "4zupuJ7Z2j4cj6mboQfNn5gt2MkgASsWUdotLvjmkUN8syPdDjCwaH61SwKDJKspRDYPARCwwWk1mS8Y6S4WaEDQ",
  "key29": "56VvGeE3Er2qfUpzfys9sPN9KEiiBCM7fQFirNQHCfitKxQknxr9AFYnrx3hJTaSURLS44TtuhSK9LZ7CKiPdo78",
  "key30": "aQJNjtcgzN8GGhJfR2on7T5Qf2xpBxpE1x2ge9SimA1Rmr6oqK5sPvZ7YuT7UT8dHQKuiyQdU9q1kMA7GG6WZKg",
  "key31": "ctSvBZpwbLjiFvCB3adciz1ydMSPX9NSrKVyKSCygtYD55APR8xr3hL5jj4tFGFBoypDTztaEj7uevTgweAsqdM",
  "key32": "oxiJnxdRPxbnKQppjxBxWXVaTwhA1EkA6NV7JtjYe7v64nurxN8xEP4Vzygd6qxtmQmSxH8ST65PVWeHqnPcFXR",
  "key33": "4rb2rygzvRmyLRd1xBEAEFnowvwrZJxeBZRnWgJnXK5qYDYsrDdhaovKccw5TR2keAqj4p38AdnFBbRJGzbuGQgB",
  "key34": "3gE6HP6bj7jpYRUm44moMEEuUxoW6iC6PvbN7cqrVn66JPqbYcm2A9yswWHt2TQqeJ141UcP4yvgYuFZ8Q1e18Ei"
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
