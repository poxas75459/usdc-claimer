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
    "2yknakZ7RDr7pJxgsUJA8YX5ZFLF64ShXjoUuKf8U68gScpkS8g5o6EU7JZfU8Qt1s5ZGacZZ64JEyMB8skQRneT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jqL3ikEAYynuB91mBYgYD5Mt7KCGmfLCQvRikB2gZGzuprx1E7d4cG5Sa8pRsCxwY45Kq8y6hXE64B5KSQDSamL",
  "key1": "4iyUbfMMKQYmTvWAPyxQaSbdnRXTPNzsUc86oFch1zqJYpNGQUiFBw9FNrBDgJJXdEqjCLa8LihSZ6rTfhYvq6Da",
  "key2": "4jtUbv1HD9MERUaVtiNp24GKJdiLU6ZgjzHV42jRfJdEHnSpbJi6dyHGXrSpQ8catLAnnyT5iGDMfsTfAwFiDoGj",
  "key3": "2xdJvJvgchoqp6ED62KjWGwnsLe8exQjyyfdtB65oNrahGBU75jAQRztmDUCHXn9R6TDMAfX2LnsroBWVtYHifo6",
  "key4": "5aciMyhrMWJ6PhKUve9SwX3ZdFfXgwy7J96tAjYRjeA4YRWwpN8xhDW3TPXfnVYpcDfxfoxui3fWJUMcSxDvt2jb",
  "key5": "4ZEfraBvwGm4Fq59kcDJFUr43tczip6Ppaes6FHpPZR5f92eMbJjt7fEop9GfqAutNnHkFk1v8AyhDVaFSvX2Gmz",
  "key6": "3NTk1n5P5wTn6kQcrbyAhqVhUnkKuJXiUiNNmcXKnemAxrKfnphZbn9UH6HshwUT5DBQEg7zTxTwvkeJJHfyapUn",
  "key7": "3h6V2t8h1jcjbJuj3bdbQjGoy2npETnZtwB7urpkeeppZGqzFrkDr4pv6BhzcQxBjG46pb897iU1zbx6c1rcAfLL",
  "key8": "4DdNMPGwgBPT1SE75JaMEHsXSopr6p6tadLn3HzgGL3zjuqdSCjk4ns6PKCSfEMXUYFpA3x3K3f3jvZCCMTanKxN",
  "key9": "326xvSrHWsvvhigFjx8kGMDRsxAMboBPQ4Y2tKriRBsXFo2BBr3VHJCwNsbeF8w7qgjRNKV7cu7tjRRqc9YFiZan",
  "key10": "4tgKTz1p9CHhvird35kWWxwc6CKZmX14hVHgf1oQS2r6uxbGRQ7J2roHkEDaWR8CUGfU1UQpUEw3tX9htJZFvmDo",
  "key11": "66nDxwETKkReNN22E3PEbxYJ4Dmb18SDWPqmxR8rpzCUYeJf3Gjj7EGMRtnHRatrnuTEyX1MwrgtJvu1HoY4giaT",
  "key12": "FoXGCyxTrMkhcN4GyDQBcjudpQVQoYQk6w4GyM3mXZjvanFxYjFeLq7sg4dy8XtqZZkoycgvqELMzHQE4bSXrfJ",
  "key13": "2df3QyppnMRM437hMgZkKdiohKdY93YDneXCTdxTxaqZ8YTKaDcU42AKAnh4YdeqcxcPYwRZxM74Uc8TxmCpepMV",
  "key14": "4vtFKJmu6eqmK8gjisQFzeh8fpnGpQFv3FVAnBhuiiJiXmum6F7bbVpvqHTTqRVbhbh1tbeWz4z4RCpqc6Qvqddf",
  "key15": "4BJbLzxz7mQGF7iX6Y2Eq7gizBChih8Wkwrpevi6wGH5zKZbjvgUiDhGnqQ3rQu5wD7Se6DQcHfakxCkq5wbZujW",
  "key16": "4ihso4KPrWmU6vUtMwCJiXbx4RTexjS6ncATmWwzodsYA6qcyBADfqkUMQQSgVAJVd9CP3YjwKvXK1Y5A8kMPYum",
  "key17": "4G7RNTX5vqAt8wHjzjbjn3vGaj85DjXoEPXp3VeyVMqwMKz6Wq7XDV6zFX2qpg7gdLc24xw8nGHfpKV6BUJZ6YED",
  "key18": "4Yx9iuVqg3irjkSWNtY3uqCJ1Y4oBJoZBj4TUtD4N7B1PaoRQavXEq6iBVFvEvsgqL9zj1cXirmDfn5vk1DK36cJ",
  "key19": "LLvm1HiLkRULwWrGdbqDRi59nkigfwKvEyQcPDMe6ckL3jeTQADXi462eebjpQJWMaa2srKRhQKN9hDAbvDxf3e",
  "key20": "egyvi8qKqB83kt27j1BBeGvnbEY9AeqHdwDwC4iPg9HhRARrT3Cb8NxhPpa4rUermBqpF2rg4Y5EZzfvUAcRQUF",
  "key21": "2XV7T4oLewm9BKfRtn1xYee3MBQBZGUh1z7y87Ex57CdP5kw8ZrHTsTbhNUrn4dDm8z8vwAUsJuC2M2obaY4C3Xu",
  "key22": "4rut2tCx8BZTTyVU9D2UfeXyFaB15aWidzvVPmQXCErkbRNU2ZjqsmXE9R26XCD9v2vyXbjqq8ARhpbbLZkTQ6CM",
  "key23": "3VQEtXqkVrkR4tFUX3tn7WPffzrYCWfzgWkXX9E8RyDGxxBgpkySdVrm88iuXfUEqTowxEkEJ2vDaMN7XzuXWQ9a",
  "key24": "525aRGq2Tqq5RzU2nZ9gWXXipoYSs5xiTL2dBaZMJZNrbDLRfEx76HrLuPmXQfYtfJxkBVRcvrD2cptGBvj6gSQ",
  "key25": "Bq5oKASyVDf7Y5z2YTZg9Ckycj1EFGLfYys1WQgkotoSFdwv6fXxotkbrGQbmCiWERhMYQtBm2WQiXQBYfFsP3n",
  "key26": "2pzbEDHqsmPAjG1YxNhhsXjtYqAe7WvXXcK1qq3GxGKd9P4W9GwugoCXzRQweJ6RzzBrMy4mTvuKS6fiQ8rPAYRS",
  "key27": "2Bi9HpdB25seZrmWZ3uw3q9F9s3E2eVSdSw2Pv6kG9AYWuz5JJKEHqZZBJ1i41fGJN7T9h94xPZeDrQDGZjBK4WW",
  "key28": "Rg1jUqhWNhBR6HwerbeExWXUwQrs7iCZGnb1XTdwZ5TgWgzYqF7hA8mtjhSzc7qjXsXaPG4Xz5eErjqKqGg2nEy",
  "key29": "4tu5Q1MyqTuWvM5QTS9NUAKAQuPasF8URPkc9Zpn2oVUNrXaiVVy5EyGT7aNzTC4fp3Twx13e1dMFUrvjz8R3Dp8",
  "key30": "4CqDZcFLXVPTi5VfJ2mei2ynM6Eg3EikwWVGHzVFSBomnqhCEWEx8XiD8EXBggwwUcp2FinqiBM5jAqghu4gVUST",
  "key31": "5KjzQ3T91bJyy9kaahbUN7d31LVf6k71MMHNRQi6KEN7w6ZL7kd7rQ67o4Txc8RdRaTTehBkRE4UB6YyVwM5W4Au",
  "key32": "3SNGEW8rbsgvoyQ5NxirDGVCnLJrgxME7hrvvPmJsGhoPnDABXD7kqFp9E3r5GyHZHSrgmyQRyx69xRc22ZtTZQo",
  "key33": "QDsEHQjytDya9QZFPQWWSAdeJmAfq6GqmbBFFNS9qQDHbwJTkXannffJUhmF7tnEZHb6vULqyMZ5M4uRFBS8j5w",
  "key34": "5kbdcWpTfuiLrh56fbz5tHUKTChysu8bDq8JcQmVmB85VkuJXHrJvySYZ9RWqihXMxoF6PKB61HF2qoMpbcU6tvz",
  "key35": "2BBz8za25uu3xuFffhg2sbRKSEZvhQNZVMsJRfw87GCQg87ceqPkqc7dd32bfCXTMYjNynm7happZff15gRfQMmW",
  "key36": "2WUSzjfjX2tNw2SjgpUMAjt7X44rvBguz6rU8cwpjwtFf75kizohLqFyZmsgPv51X6FUa6JsQaEFaopket9Vdhvy",
  "key37": "2DvCSyK6oNbYjBoiSPes1PC5NmxLh3ThCQGENLoZTDFTe33gWTpDxRxABhDzo2QXa4Cr13iviCLFuZKYn7FQkaHN",
  "key38": "2E2JPoDuJEWNmbo3vwFPTtUNeeYrUz5LzHJSkmK4GUU4QbiCKWTtdak8eTGnuuC7mAgHGZDWMUevAoXgJ1jAwM1d"
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
