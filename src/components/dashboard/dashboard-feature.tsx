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
    "5uLgbKMKEzwXmmAQbKhQhqY3y95YeQb9ehMDGDzcRUpmohA7DgknRJv2TTcwgYr637JsW9YABSZgrwd1wHcpCxDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SANiTB2CNN3PBxRyEYr1y7dmQyvpDYsxAzkDa1yNBqF8yjA3AdRJoVGrkd4vGaSZd9G7W2RM345uEXMfJbBxQAC",
  "key1": "uKuUxFpbyVu6J6v6kqojuftzPuDX8iueCv3RVR7ttKoD9stha77Szum14LRr3nMwbG9q2LsioMB9PRuo74NhinG",
  "key2": "2TE8ffseR2c3ZiEYKNB4SgSyyBVsSR6ctSfY3Y5cGnwc5Vdczv6WV9h3iQ2rPoBY3pBoMZnP842gvX8oTuo8yWpQ",
  "key3": "TT8ZChcjoEa6NFkrFsFiNAZ9YM4H1B6EQo4TRy52GQL8p22Qrmz3inWssQuUi6m6zn2PcCj75nc4KbZT7e1r14y",
  "key4": "597rE2ii2qKLVJHLarMZTPEDddJDZVix3BZUpE6ZkAQxFRGBnyqfX8NBEy8jtsjhGPapmivtPiZa1znyF8kFAJVr",
  "key5": "3rMkm64eHFj5ZosmqcPsYLGtt5c1TYLFTWmjM8XFRUvuLeKAtAR6QEP6CCmLPeFyGQFKADaHuFV91x9fEZHAR8AP",
  "key6": "4A3Ra8NQWQjmRmmCKYa29XQXhZmpB5XrjeQy14HWg6wddyEWvTJUuwQw4fNLp6snpTfXThaxjs3NeEEREMzm3LJh",
  "key7": "3fTrAFGi4M8v3xqBYYxY3R6TR5y2PrFeiTEjJU5JVwjUScLM3rKywtr5rEwYqJqi9TiZB5vLEjwaXykoD5JZEuXq",
  "key8": "4XVEwjAiQYyPMcRzYaRSmViKAaetg1vyiyQe8Vr4toVHyfEea3PWFM8vtb813oFdv5U4dqGYr5sYXK5spnF1hRYd",
  "key9": "3ne4684dcBxKdg1VooCsDobBtgbJqBHwXjLJpsRRfnd6imE3TtHxXErRq8pnbhAB6tZrkdfPMMNmF9dJ8ohpnGh3",
  "key10": "48DA2xY6hVfCUYUN7P14GjtqnMQk7WgHrRz5M2y3RCtKQEh3vPxfG1CbkyV8G18e2wXpDC9JnaduV7AfBPPN4GP8",
  "key11": "2ABcaLT9b58kQHTy8J7654BPRfJFVLy7Bm7disEEmLxGqFXMaYjqp9dqPK6UJk8VftrcwuJJAxxvV7HpzFRaZ92Y",
  "key12": "5FMuDMkYAtjR6d1hrEL7w3qio26JAQFT6VpaWWh1ar5dXtM8FTaSSw6BZEtNLULEtf8byD5Wv829r6QjBg2zyioZ",
  "key13": "4LpFnGVPSutAHyw1ajJWqY9Hx94vi1w7vBiTRisK67CSeZqFmqJdcGpD51Mnu78Tm4qxCFk4wKRC3Mjm3PsehZH2",
  "key14": "2tjdyhmXeB93fRs3FCim9migfJ592S5C2rPhvox4YLKQyJXkGxN2DAXPv3Gav7o1MwUg3kFMeUuD5rLEHNxx7C1u",
  "key15": "3Q9S9Vqcv74L18PWKFooqTPB9ud9dYSbwEoFjk59jbbUpYSrk1FwoRvRQ4SU9vUr4QvAoyN7e9w4eqyr53Nr6quT",
  "key16": "3TyHu8J94dQnDnM8F4B3UrBTxA823xigUJvxTtUz4K569G9Kud33CxNWHfYDMhtcuyCHrVX2CiKt7ZV4aHTSXqBf",
  "key17": "64Jb5JeokuTcmt8CNPHUALXsx5FzmUXfFCmptJHr8JnojUJEx4y1pq4djPNWa2m3SJmYcyhC62aNHkNV7DFu9mUk",
  "key18": "2Q2SehehvK5HNgfgRMJM9FnBUooqdeR2jKusEFmSCWypHrMGzBT8vkpdmnuWzy4xVQApCvRZ2N5QrRrZp2ME7nHV",
  "key19": "43aYCyoDUBaDVhjCMmcMzkrFdUEJXFoz81No6Pdg7dUX1n3bBK3zrXoav3TxbCbJHEsSqSqNn8ebT7oTwZRSA1YH",
  "key20": "4WqhECZu1xrx1soMUWkdjgNUFdBuTF2JqydZEXyoeCA5xr3NFtq7qW5TDXUbG3PPZBaPsLBQEUGg87vJpVag28zK",
  "key21": "3uVQJP7QgQiQYqxV7E2NBBmHXfHWckz388qqYsD3ECpPWhUWApcMymGR4nQudoNBrxwguygRFLMZcuTg7doJ4k5k",
  "key22": "57VZ39ZPs4iofRAenMg6VbXGyYtUdv2bGZ4TaAPGBgi2Vxag4Tv7JSb7q7KkuWFs6Fv9JJEtSsUYMa7xqeP3eq7j",
  "key23": "3qbSHJCDkaZb3WGv6vLxL67t92abrkFvRYUfNGEAtGomVWHyQ8xTXH8ywqCytemQzyzj1iBiuwMnz61U8v3oELvT",
  "key24": "mqk5k1vh7EPHrjtB96nmEEDHJ6bAdVTGrE4gNuduwppzDWLn7c28vCX5aYyGBMJ9nENk11AmkDjvH9kfmKuGPuM",
  "key25": "5Q23psVoNamyC7fbYP2peTDTMQujsczmZP3oD6FoVw9FG3jCeFUdjpzepfjsuhZz4amUBA4PGWGe14LwengypQt6",
  "key26": "2Lu9q5T9cVEViagAdr8MJe3QG1qjGVVS9nLhkwyipsaPPeSCeqeyFXPBvZv5XbHCuQkcsasBfZNmZ3jYKcKyRrJq",
  "key27": "DwzBcX39o8f883EmTeH2hXDHyYn3VCAtnDmvTsqmvYqKXr3fXgfTJ2W5ddCQ1harqmjD8p3GCcyhhfjZ4iMKdoa",
  "key28": "vwbibqvJJMQzgMgMXaj4uDjMdYiRh2dhGvRxk9ALSXFtEdFpv9AuxCqRgUfnQmt2qPxRZy7CPBjRCXXr5tYfCA1",
  "key29": "7muGodSmyxLfLi5gYGLABMM98itakpZxy8L4uXcPYS3wbBngq7UpNRZwLtoBRaWmjQ4r1x8yoGX7QeEwwykdevE",
  "key30": "gZovfzbtKzGJSpkY3j5dW88EFK5aVg7xToqkuuAyAfxWjWCV37dWnaBuhD9qB1r35Qnq67D179zQDGUe1WxvRhp",
  "key31": "498cWjgiS49Unap2ivAs3LaExpKT3svSk6u5gK2jeUK3upupuZUCv8YBvgfggSyrjnwHXWk3QqpX3aiGa8osonLu",
  "key32": "2Yau4B4g5xCBLTx3btv4yMBKMtAnjtnHVWChFfWYRYuG33gQYmZZX2P2q3XfaL473EJBHTPB7vQu4Q9QSUjgSHDz",
  "key33": "5jGEFMCiqUEZNQBiDpdCwpAMe7krP9ge89eK9QqMZpMbRSeULX66765fPKacGuzr58KpfawFA8tPtSfSVsWNQJ8N",
  "key34": "2kbR1QhkL5R3bS7B1t5D8kohHyn1T9ST2gCACQMSUoXPmuQDMozss64Mc4QtaFKv5yC8b4K5MCmYwg815WMFacAC",
  "key35": "w7h4nhLCKymWKAnYiiEUQhMUUYeeNJhyXNsvUuuZy8P9DevjKhKH7hXN9maEBzmVELkkSCaD1thvrUJ2bYouU18",
  "key36": "44Cof3CjZug1ZPQQqbNDAF8cnHBMNaBk2vbCXwMNYsz7Qf8CUcA3GAFWXXRUhMD1hoDfZyWoMQU7nxnqvN7f8d5F",
  "key37": "48NDZ7PXfQb8XvJ4CNWusHECkf2izwBSuCV9h6jP9wNW86iLRYh8qjh9F9bQeogkZ9VhQEvtfATCFjYcy9ivyd49",
  "key38": "4eJP9D4218dxfpKiVApRtN3asgEaZvvieh3uhjd5GqRJHHxDEc1KbhJCYh31EJpyXUzCSHK1kiKgmyxg73mMjpjG",
  "key39": "4LxiXASzM16WSMUVNFU88EF7TXE4r8x8bTv1WRjEaFkREFRPRY51exRtaRRicnYFRq5C1PYyLzNjFd4btsnycrNW",
  "key40": "42e8wd7V9ZY2YBPHFTKFLCBzC6bH2ttCXAADGuL3YTTYnZrfHytUT8reK4jjV4CYvxkydC6th9S2UwqQvuke2Yjo",
  "key41": "5aUmHqcP9TtCNcfHzAnPkMXmPGzdV1AJpKxiQdtTPcYaZxUHeLtS5GPdPQJ47MMqywbE2uoPJ79V1CQ21p91RmVQ"
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
