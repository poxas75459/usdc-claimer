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
    "5VLA9KDoKT78T82YbGrnHXdZKkpB6gzC5jbw65ijupUgmYsVy9fcW5fWbePiqPkG9KMYdFkGUBStqPzYYqEoc9Lj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YJqDYH63gP1CB8M3czNUS6aGpGp1qYgjv2JPmd5p3vP9JK3L8463JgLKJThKxBC8bCbHUWsdptpcR46srgd4vAn",
  "key1": "5N8xc4d9qKpz2gSWpfAe1H7CRQJ4Q22p9qcSGM773dXZRsrz3bcXtsyDG2khNqBnHyK8eVw35soog9TLV5XZjEjC",
  "key2": "36fDxQ36KGd1sRx1hobrySoLxLdCdoW6n6n55fhV8rbES523aswNDjoqBJ1o2QwqTN6N7Nqte7UTvQdXxEyjwhAz",
  "key3": "4PdcGGgeTYucupUCYKDhVK4ffdbxhFXpXhVk44jf1LgY6j81U9BsyCDbdjAgBmLPSE45CqnCmNsQU4qQ1AQ8dw2D",
  "key4": "4P3nAQXjU12jGgteRzQmhdJcjw6ZpPu47wjG9sPiUF7BZd6NZ9t1XWGKBHhRf2WkYk1FS2J2t4vZjewV7KjgZovA",
  "key5": "38WbXbS2aWiM2VMg2h9BuWBFzts3dch9m2ewR8g3EhDCyvYMoK5JS48nMpJsmwGYznQokpiikchqMG7cYQ8Rvndj",
  "key6": "56sx199hDkHhMQtkWPkvvbiqpVQziYLfUkeEue5GMcuCJACc7m9qo6mwGXmnxTUN1S5saTAU4cMSHaDwwPXxcGys",
  "key7": "5qvMrjY43Buz8YYqUdJ8oY1GVq9VqAbMEC9FEYUuN4q92HjQCkvesXJvfhzU9SigREPPDUMvsEJAXQADxt4xGwm4",
  "key8": "2JCX6PaZeoWUizNGL8TNP89qWuXz831v2B6Uv5q9ZSpTf8Y4iSqhtPNAyGcEpD8kp3hbMW6k5GYtyig1DYSmiNRP",
  "key9": "5srE1dWtoySYzvVmUjc8fXcugH11mesr6b5urFHwqrdCdgMNNdJnkXBEjq54kfCDSn8B9RbHjAAyeKkQ35j4XVvn",
  "key10": "92apUhQsXtB6rgMRBk5EwAJWfj7dW5x6og9KieqQETK9kL7yBvuN8QATabEVwTgGqy9kG9s44EBfhzgoByfZQ1u",
  "key11": "2k36aByEH7mCUrMTWPECyfq9N3XsPGorntqgphxzYJur2EmNc7rUGSy6R4oVSc326f6LCnENXXZKAt5LrekHvPgj",
  "key12": "4XHZtcZEGev8FmiEMCNVwxrQWFrmpq3PW3RDHBnubKLVtFrDi63f7PZpPsS6y18rzsQBkgmHtiv7xEvpvkBccpwe",
  "key13": "2RCnf6DEdKdEv3ZzLRjdwtUEt72YUM3bJsbJzXxjuTnJhmu5Ux5SemPd1TJG8k4hpt6wadahMHa4HcgDdTEUSGFz",
  "key14": "4ceRjNTMK2yVqq2BBj31moyReMzo6hnr1GqjueVUw3D32aV2mAxVCQypofGeL3vcwW9FEcAX9jEW9xMgnbi7Y9Mf",
  "key15": "323ovjDJcABukeb4uTeawn3fH3EpKwAUmE3rpsJGLzsCyQ14QvdXUXxLkRhMZXbHp1nHE87vb6DPnM3fwuhRsvaL",
  "key16": "9T1TTPxfCk42MAgTovecJ482dPEdjWZdfMs3aKA8G5CjviryUSR1PveuBFVE1Uiu2SzQ7zGWLyMSp7rsxChM4LA",
  "key17": "4CMs51zr2cv76XEvWVBiPPvpsbAxdr6vw8CRjwSL1761yGHgVZWnYbXAB6fR7g1PtwY1nXrDnpeU1NrYHtc61uzr",
  "key18": "nzJd9YpiGHfdeN4sHqjFQqjvboTsFPrKhSgXaLoZDa2EDGqc82rLhb7R8caxsjRPzNVAyoAH8GZqYBtKBvjXF3b",
  "key19": "5E7QAjFi93WQXA8YZambmLYMM9Zn9HMrcduXDWK8k7tHGxhJzX781XwG7ZYPaaWQMYRbN4orBQQyYTSw86EreYtf",
  "key20": "4TLAUd8bCemDYu7CqRuV569UNfq54cAbwvZ3t9eyErkyCvGqDatkffm3Z2ZGBzEC6NzBzhr8SyyRVv5sHqfcVJpA",
  "key21": "33iwj7D7fJdvDQTNVLuYTxUh1ygQA9QtpskxR7wXmxm7szKpu4mHdvutYCZCcaRdx9cUnSt3H4KJSR5LCzCx5pjA",
  "key22": "4PL9SJrAtKrcCULSF3Ttd9CbEnMmaEdRc1uwFz3bRcU1UcR7QAzzbwG2Znz73uZ1bZ2KGjUTac1mwJhvwZUDUq3N",
  "key23": "3wwAqGKHbXAW7cc3nMo13ZSSwsxLJbyJrT4Hq2g3SxRSN5UhmWtjA7ZGC73JrXqPsRpUMb8du8AfZeB37XA6FHa3",
  "key24": "dXE7K8Z7QsBtxKV7cduqqNfE1Fv57WT4CMaZfcwDcifWeCeQ1adQkyJApErcXUhqPteP2UbnKmYeWApSDsW8qbL",
  "key25": "WhLwPi9vzwNEdgMbAutUzMkmpnfeJwFP2DzGDdjk4kPX8uw9ASzQHhgJqCfDw1pGHMpYJGhroGpKEEunFEvJ6dC",
  "key26": "5UuHzSC3xdBhk6NzdHhMWwaE9TGELafS8TtLpm3KLQEfPBSKSy4hZuFHH1pTPVtGdMiaP5r3A8j6RPX8VK3oLEYH",
  "key27": "3nJEMyH1kUN43PLEBa17Vk3xbBu7C2XxrZFmn9cNvWyUFfRSEPQ8xAPsoNyVck7bpAynMe4Mc73EU9C1Qsyctvkd",
  "key28": "41LNJmWbY14yJAqgPMKVhGJxgNDWEB8qvFkH9McbNJqr6Z6EZroLGaPgnMNkRmdNhVBtHAobdAgJMx5TgHid5t4t",
  "key29": "oJcqUwa9UtSuAdkRZBLn2Hrk2ooZSpRUhniGP35BUA1t1hBbBQTLn1VQbn5SHBdGYfUY9CbyNdCF7Lg8EZ9ouaC",
  "key30": "3PaNxJDkSy5twwhBLvcZ1B96mLMq8nQXi3qPWpujU7BXsKEfF9r9YWqYeY3BZXFoAuoiALEcbgQAGr189c7MqjCB",
  "key31": "28q7i5pdFakdKj9nR8mnhnMKAWwWuv89shiFVQ5Retnnu3DSVhV2yWiQcFXCPR1jR3Nr9mp8uMAi5i3mnA5sXmhC",
  "key32": "2YyoZ7AwWPDqh4ZLBKEaAqPB2Pz12qXVfwBPiZxxtbu1jpKqoCk4hwfbpttn2zpNK8YxWeH8gH4S3yePsFTgVGnW",
  "key33": "4QpojwZJdgcRUktwRNP3q13Zpfa1WxN6fkBZDifJ2yanv4j6DZk1cRCJcjFGGPnHmxqeevvU44YrAaBGEi9VrRxf",
  "key34": "3NJd8GPyKCPpULoh7m7NXxWZdXhYosv7gNo1JYBPCXMHJkwgnXJXzsE3vV8RsnXmce8PQJCDoP8rEcKjCASJFJvf",
  "key35": "3u3FDuALwFiX3yjAPyQyhMb6tqYqCtafim5RQU6YAuMiCcJEUA9HjFURZDUx2do33TE8L52dku2Ei6XVXEHZt1QE",
  "key36": "5NHMchoyjU5x2AuRSCWmtoe6PM7n98aGszqDG2DPX9sCuHU9WZ8Beq9mnyqvxHYjyRXtwUfKjtnqAay51cfNgV3e",
  "key37": "29metLk4X9LTqwxgUEbrNXKb6gQ31UGqmLLtVRP99pMg5JsvB6Xxfru8ho9xVfzDUHh6Pij2y3ivaQRmQZoq923w",
  "key38": "5QSybX5jEbJ19ycYcVdtpEuSMcVSNNnjB9YR1udBFW3fkFLNfP4DJRhxBqZoWDNwR4kEj1AT1U994HL1BmihUsq8",
  "key39": "2BB2TYtm3oeyiUo6paUtGdiokq57xSro8kcWXiwCkezMHGWCrTYZtgm197BbrEzdyzgDjVhd7aDEoVnCtobRoDji",
  "key40": "2PUy9QerrRQq1RngJQbAJaFmufuqWTcamCzSFunmf1Qv1XaZtt9KRkgxwVk3ULt25eMPKBdqQPLLcPm7eVfgcbRC",
  "key41": "HkuQHsE46wiDr397fHEgHc43TcCdCiwpP6L22sPWD9nkVoRZDPhgUc3PRJBhCKpKe96ovNS3b5Ca8yh3WGe7Gy5",
  "key42": "xAJBzZMxN99sCM9uEj2EMryZb7FAuJ7F1viD8eA5QXvnbgt6E8azx8kuD4uf6QXLzfaiHsPDqfr4PxcHktFNZLm",
  "key43": "Yoe6Dt8apUkj5MEQWJYdDr3A9ajJSzHzHgBLSQekMrMkQhMqaWHjaNhWKXv8VVaZN47SpKBVMVaFwCyZSaaiDo5",
  "key44": "2ydXFuS4T856yBFiHK6A3dgVz6xF8KHf31koUGdL6kn6cPeGt8HYQn333SQpijWv4Wq1PRXWetiypCtKsjky89xU"
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
