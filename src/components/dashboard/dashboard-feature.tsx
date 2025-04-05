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
    "4aEqSbjxWYS5hcMQjUPwSKdJKJ5wdbZwGHey1Q5u8cGgWccwScd15SovGhqhbVFkvcqrFkifdjDYReMvU8cP3v9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M1EPV3uUnxdYGojqvLZsnxZgYehHS3feo7BfsrzptC92ajc1QpU3GK8S4Tcwdg8f6PnJSquBy5KVQFQSTHRt1pG",
  "key1": "5FDH5FqudDwnRhrkj5jSYXxuxxgbTsPH8bkZ4rf66sZPR8RT1PwSi6aF7F4fJYwUd3HRrXQYwuAECFLxH3A45ybE",
  "key2": "ReqfMCN8MxhkX6PTFH4FzjodRdjy7cZ2xyZvBKt4imEeqmCN4YADciybJadeABXrYRUxbKXu3gp3zFtgNaP773p",
  "key3": "ygeKmAn7BsFtw33ox16t7C2CNQcAis3PvBHujYaPHbDDW1GcN49jGnpS3zeo1S7dNQwcna4Kxof6GYeSgCyDMR5",
  "key4": "44QT2iVUmkaQeZCUKR3KfxfMZKEeEfML3E6UjLeuWr1TEPcPKDyvg85LXR9hRQmtXmDKSFcdiLHTLvSqpEJPg6J9",
  "key5": "4B9pt8uwrtkgrZuhBBvNjE7vChUZdVZUF3xf8z75mpbydFLPtTCs9iSM5atLQ3YziphJ8aGXdyqvJR46DKmecnJ6",
  "key6": "4yJkFMZyK4i93kfLhdS8bbJSGMZNSVb7cCLoGLnyX3PPftMeTNhaAb6fQgbdVTDxqzFqr2TtGjxshviwFna16F84",
  "key7": "5ccQvzjcMNzXdQQZs2GwkjtdAfnQsrXBXFr9nR7cZhmS28ua53Pa5hz5CtBKSvfqjZtR8cKfSbQkxwTZtHgcy5MV",
  "key8": "4cLLqeweLxLEJKoW34dKKPCemSka6yz5HZtfAHLPcg94hdQuQkpjV1EowhQPHNfGKbdyodjkERZyQVMSk3Bj5YYH",
  "key9": "59a36YJ1QrmPcGVQgJFYbWWGGHiEGFiHKdyK2biG4jP4W1jhi8ceKZESdSo5Nd4W8ZjyMK7RWgHPVv5eJ3StssqW",
  "key10": "3zxpQCJ4sSGiasYqyJLXUzFvG8iTe5N2eZ1pF3tfomH1Gn47qekHYZ96uNmwbeMy1e4kXeVnMYEGZ2PiaPLRCXWC",
  "key11": "4dgWjnnxsiLLCb1npFrqEfekvYgvDhHs9H9ApJViq3ZYnzE6z7v26PPQ3u7nsL5vK5PdUL5spXVJ1KXyGm3NmWgC",
  "key12": "5scnY9HzxiZr6eNrU3DQb8arA387fxN5DV91kPFcrm52p9XUasqWueHi32RVXLLhSeQQFGKbud5jJRbtZgMmqK5g",
  "key13": "4LahusAiYkzUV2nEPo7wH6encDSyFaCZ5259qXcgPVfsccWSumNha8xYfqAWiYyxSrxGdKeTEG2jEn3Kq3khPbiP",
  "key14": "4YTUxEsh7kUf5zZDcfTiJQPG7ScJE44kJfR1vXgAvoDmr3hoBwxZCqHfp3TqrjE4XqDPXPP2NwxMqFSpJuJ8LKBW",
  "key15": "4uobC8B1QUKpCCgzapdkuiPv7HzpsArv9BqyWgtshL9YTStPck7hmr4HMaDNVY3yNYUqDX5SwLjhy72e8aGxh8Rx",
  "key16": "3xC3XJPDm47an7uB4goEfmjTFjXWXwdcL3AJb6RTvXap4ADVvR9D2YN6aRFVXUq3BwTMkArxxiGfvnza8MoWx4XB",
  "key17": "4FJsRbPmns48SkbTS4yV2QCtpVSpTVPCDAXyFUuExhqw2tWVF9KpFbhcD5hdzMko9Qs3ibbqxTUiyRhLsbXkPJJE",
  "key18": "3qxZxjeXNMnJauqrdSLkL5hmz5KNAF4kg14c97Ke7riNF1W3AoyeJ2tewnKfQcKSJXXbX9ikPQZPSG4T5GC5sJyA",
  "key19": "zrHogAdJnXq9tBvPtrfAatkfNKPBJgYHzhqRuRHUwRAkxfhrpxMWMFZUVpGSsnjrXtpyLq1SoNL1CDCk2cUUZ6Q",
  "key20": "63A6TfteyXPy8sSWkAnVSqu5dXr4WfrKky83LEBiAtQeqQJ3BNoKA8xC4PPk9gMTenzaK48k2ph7NktGMEEcErcg",
  "key21": "4b7i1NUKHZRhytKdf4qJnGM8kakReTNUB3i1aFiGtXTAP2v5HD2sgbVdNgxR8bAcv6SCUyUNVvstWY9uKXo4Gca7",
  "key22": "poMYqkXqfhyNKFt7CSHDfUy4nF3a5KwoPECGUeF8Gcxhk4fBxf5Npe7rWiAcz4NhrahgRajAjr8fUKfwqgxpwRT",
  "key23": "5VPr4f3gFyjCUCieHW6N4t4SCFfwdrvsoVoFVZcT5cpvaWqLo7pD5UAMvQTPBhxxpKv7o8mVixm5xHoxbS7BRQWF",
  "key24": "mHe9TM85mVNeRJiy6EoM65zm6WHsGHdjoMTyn1Cgeuhthis5RXBAtW6KLr6oiGZvTkatKbHZ2bzUzg64kYfQiP5",
  "key25": "2MYcHJrxEVjHBvRzi31yjSvSL2zuXRZqkRFokuKntMvGNrVq1GD3dahtFXuWNdR6FUfBusJRPNsE7QWBK6b31YhF",
  "key26": "65C9VgbJBmugvsC58e8QURC1dLeEyG8krYd8RAQpLBLzuWJ2v1dHW2YyefEqrKmeynJGtENaajFDA9QYyeU8qWQj",
  "key27": "4TKFCnbcgEGX6pgvna6aartHhRuXuYrz1s6HXmbGqm7qs3ptecyXGyRSTtnTfzMZDhGEPr92upJp4smhv34ZjvK4",
  "key28": "3GgD1TsCvtUpvyaHr7TXVe9fk1pVSUVrJiXVkEfrMmbr5PSuL5h5zvZ72yUyhSSp6XtejNGYEfzYGTYswsqTTB4g",
  "key29": "3foAg48owJneEBM8AZrFGvYWJuhsbVN4t5ddsazKjJitpinHm8ySHvQJh8CPXkyYDA3GDMZBXjhg5oegrJBFy5TX",
  "key30": "rJcsbJqJ9BmJmn9vYJsPMzHme1t1Tkrg6mxR3EK38j5MqGpcTYPM5vmi5dg6S4kq1mBUyWUBX5o3jkzzUcwshMF",
  "key31": "2h69WJeK6bmJ5uokRd3y3RH7fMAwv6NWaPAZHnhEr85qPdzpqVafWazXwTPoA4MJvC1JCVNY8KbE95YfRubE3e3Z",
  "key32": "37nocTVCTsnjNongc7aAi84h4ZCWSKctb1wfRvMkVWL2Fw5hxwZ6PzocuGMx6JR72BZmU5TV6tc8FntmnYDehUJq",
  "key33": "8ddqzafJMZkSVvrDCZWgEmYLQcTb3gfcpDCuaHXjiVspYdVKVUpSSicqzB6mPcTM1uSZCPHCkirEjLTQEAJqXzG",
  "key34": "5thSJUMSxUNuTSHxg5bFDeD35nWquCzEUgzKnbXSgjsdN6dPzC9Zx6CgFRwo8SVwwvpcQ282xNPpr3vM3poBEwDN",
  "key35": "4wafJa7j79zpvLN3eHspt7k17eUgq49WX6Z7dYrJ8BdRjg3uZjdi8RPRs5kPA2jRbr1ZNVcGyN8pEc5REpEtm2aj",
  "key36": "BGBBMx8qsu8UR7utotce3cv7zYT4SWce6ALm2Rp44UeRz8J7WYDMCrdRs31fckS7Dzp1Ec6zkH5CuodhBwANCyn",
  "key37": "3ttWmXPiAX7Fm8TkAGc2HzNU4HaMDoMQq7ioyDn78Cw9Xnfqnna7XeFEfQnmQANCJMJ8iDtg6C9FLiuA4ddU8DtE",
  "key38": "wrZgJmzpP1SaJag2Dc7pzR4j72AKuRfFXFN2PpZnjnDE88uTfgZ5mxxvTmEConaAniPARB9FudnkKpGqLyGRfs9",
  "key39": "5UuG8YvprMFtXi6QjeVsEnzc3VCJ1SDg7uxefP3n3aduwtA1jZavhR2NToB8RnLT89keLTfP2AEaZpk1ksAZcKuX",
  "key40": "2w6KivWbGi33F53ZC5gWqBUD5w3n8Fw3rvuALQEEwcvkHZdJ9pUE66YZPwK2sKn3V9qwefUFM9RtNcDkszJqu5KK",
  "key41": "2FrNYk5N1sTLGib8uJ2W54Exw5ZCnzR2aFjq2S2kvMKEAHekni9o6hoCNsbArLUMRCKrjfqwxZeak7T4UvqGcu7B",
  "key42": "2rLRPRQhNwLupLUAkaMLoPqw32eyC19m59A3HNkWW7gXpabevLsAbiHArhpVeGVhwUvDgTomAVFavaB8Af8Un4Yx",
  "key43": "2kQJEVDLhzzTdSwkiM9V1KTft7iYKXJHM6Kb79sJ5cyroCP7iaXbxYLyxa4xd7i9qKHPUi6QnbsHMjEXNdrrwZaX",
  "key44": "3EEjN15Eh1soBqAAXP2zsPSwV2NPWgYThCQWKp1qBMnzDL344aUnhQQVUDSVejxoEt6Qy3M2MwMCRrVhMfN8suXE",
  "key45": "QAazLLSjkKr1UAt6wNnjCXxSHXYUS3PRVFXA7vhG13aD2fi7Tzfo8vqawmJHwn5pLFJrAFfvZUMs4jzxESyCKGQ",
  "key46": "3vboE1LHVrSXKbtSpVjEjvKF3Z6TcFZdwWPhcshP4CkJDqLVTM1vQjM6xSV4xnDmvgGdujMAm6WkfBkdaP7GU8y6",
  "key47": "3AoATEsm512TJDykpGmUKuyZDXzZLjuGyBVx3yWePtzBeX9wJPe9CiHqvEYTSfyEdef3WtrMmqMMiGj8qaYQX7Wh"
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
