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
    "4xHruasSseUdvwBg37n2ruXUnbfnTM43Y3pLDCwPqXUymWwB4i5iTHeEqKipdLe8C5G8g9gmtnbwUqYoxN18v2dS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZHeRpoX6UxgPtna7La1PFontr1RRM8Qqgh5pmpXStAWaunAmNND2eaz5LC8hfKVWLrEBst73GMsBL5dX8aTGkdn",
  "key1": "2cqyCo64Wh9npxRjnGyyQ5eaBy9FfBKaqifmmJiU2pCvz1QLWwikdxK52xqqAzwXwuxYQ8tgZyRCfUbBz1vHtZho",
  "key2": "2BUkFrGxQ2LNbheaoJC14mf8MEePWCvDQenJkLDoSAub7Mm3JE2AmVkaS1sb1RhTrz2UmSwypQkQoEc2NXxdPb8w",
  "key3": "4dR5RADqMXZv93aHt1BfYAUQW4BwmSK6H3q6S9KkXiVLAyVsEXtbjniokjSZ2ATVSJMB7XtGWtVudoEP732x3oi5",
  "key4": "2F8yLbC24ejGUK8Rhj762Q7jJzhW25biTXdcJ29XGtTUg4TqVxDVUUQWjJERgq62gfiYYLdwgXBrVC4iL6JFn58k",
  "key5": "4Q3XZyKcLzqa6LrDbRCF4DZxK2F2kRmSuWd62n81BZaHYSiBbQUYEcDZnzjaE5XaHaEKzuYd6rkesqsMsZYnvoz6",
  "key6": "XVxE5Axh4dKfaHmFnQmLuzSqKd1DVycdJt6a4V8y4mrn8pHaV3c6ymsASP6mtVoX1AByXCByRCSjKn9URmrvvrs",
  "key7": "58FAwgdJ9nCVkfBFdjfWUxq13DnNpdkXQ4PQGaGpUJfyX9FbsH7JGs2765DygxvNStwcuus1xeg2sTxhFttwDzny",
  "key8": "2yBStXvguJQyz4EmLCAJ7xaeffDHBTt78DDhTHBXTPiCfwMnyFhkM9stF9fXY8cPs5X5Z1aia9cz6gQU9jdNvSBb",
  "key9": "LbLozk4pzG1gArAAwUCwbNwYGa34vb8yKWx7qaSbuyrWbFaZxekHppmDEo1wvxQZVxFpnHmgvuhVeEo33ssEj9J",
  "key10": "3HkpmA3zZaguP1h5qWLb3Stotv4h6ifvVFBcrSmPuhDK4P5YvTnxB2Jf8PwjsLjRcp7iVzoLVoX6oG8uqgRs7aj6",
  "key11": "2LjaiAVK2h7YdvWPUosPGvm2PnRkG4DB28YUNJnppvjH9tPyv9oEvfrSbqqGYq2Vzy7yrCVBTJMaaSH7MLQnN3nq",
  "key12": "4gs8pQ36f28CM7PcbQbo1HfvaLmqJwjynfkfj6Acw4FfQKwnqg3EnXWxFjYHxqCmuYbmLfPEFMjJ7aH6BmAP7z87",
  "key13": "29kitkR5A14knTkuKmUT6phfmFk73jYAVMTDjcmuLrYVMsJTqtZMJpxFqbFPhUj5NSSJx6nqXKykGm7rs7yVd19v",
  "key14": "LA4CYcxT7Sb1BwaSUHr69pgJ78YRt8tVzqbZ9mwXmvENuSAZB5bfvxurYJHoTf6MNAQNi3jPC4ffxWp6NQ5sSXb",
  "key15": "3ZXo3o1Tw1Vv6H76meimjZ1ea78t5d1ASR2kvJ4aFp3eaD1ZTU6pq3QoC1rUbye7NimqjSDB3UfUQJ2MBFN88Hp7",
  "key16": "4xW5EvwP3tiYwbuhDs6Y6d4cEHjTpMyP83vX1nXjqEYnUcmuBXmerqP1Lu6SCNqThmduBoJnKqVzsj2ZuW34wVhZ",
  "key17": "4xyJDSndCHfEiDoV337wjNKsbGzpSA6eNC4DhbH2aWKKgGkYBGfzCPRf7emEJakU2SWe4sjvkunYviG4rsCQQKuv",
  "key18": "3FguUfUBAULyiaYeSAojP4kAAcQzdiFKwgenbVpBVghcAWgbCh5KH9DaYYbtskzUHwTtRYECJChjzbj5cTRhVMrS",
  "key19": "21vNQovRfuhww6aYCWyiDWytvMByvYhbJAPiAUXd8ZzFiKvrhUyZNC2iJZZZGxpspM6uacTVCEmrM8JZUVTFUKUW",
  "key20": "5FawQsqzyRASEjbgeCgNndMK3PHdUHYtUUkSN4cLJBodHkxcB5h7k3AAsY9sqKxuJPeUAJCQguD7tQkd4E6G5rc4",
  "key21": "565j6N6jk5swEE3fV3ghEEc8bSzBQzEvZidPRrMLDESesFu3ARejDEBKdvG3bcKVR8PftX9kW6DsqKcgwG46GHg5",
  "key22": "2g59iChaz2DqLQfEM8Um7XpufdpepCgGCDWkGNoLsVrqThGZfyoTMd6LkrQUZMhuWVCFXYNAvPXLt5HQDfzgc1FV",
  "key23": "3Dw9FA2HGHdzH5K2zDk588ALZVBDeTephfyLZ6BkjQsJgf7kAfL5xnE4Pj5xdKSup4CBCXdw2nXdagMX43WsN5y8",
  "key24": "64h86F4irrBJSEbFW9iLtWYvyfrzsipnHyDxiUeiWEiaaffuBLWaFs65d4Ea7T7oXzJv4Rq2R1TEc5vcUW3mMYxX",
  "key25": "2Zu5TbvWNwtkGEthFyeX6j5Pr6xSoSpzcyz3GVE6Cy9XYGTYzrmonzfAZBDaipeY3LVp4adAkL8XSAjgmvjtwYmU",
  "key26": "5gDbyZNZPC59yTP7gcohiiZ1QwzMeNixbMBQVs1rMBSiUdUp1yQ1F6cHFEfA4CiLjJnNR7Y9BhRbDRD1K7KjeazS",
  "key27": "3KY39SvsAz3yfWPg9Coypff8ZsYNe5tSjbDWCdsXV1g9V3bzodX9QiV7tqhDgUGgabvAen4J54qyRw2XxeLfr3wR",
  "key28": "4RHZ1HowZVkcajQBcRJr6VSbRtucMHSNUAzTpaewMaSgtxKDr1fUkXBwQeE1h6fnrzTrwcti362qb9YvaFEpBhnD",
  "key29": "4okZGshWu6V8RiciofvzzC1e2tutV99zi5bCtxr1pw8urXN8MAyvzHajqpGREstg1m8dfXTYymp5Gjp2XeJUdfZC",
  "key30": "2vakZQGtfeBWNWdQyaJBDWDJsTgBdHQ8M8KaK7gzqSeTX7rN1bpEk4W8L2uG8DWaQDs6ViTioy8oYehMgXAb8gu8",
  "key31": "5ZVEG96Vd5oRZCj6ZW3UUaCxAF2N2HjiQeqvHQ7thdJQzmwrK7XmK8qNN8uyTfh9nbwbmRYuNfBBvmkkUshbvJTF",
  "key32": "3TVo7opQ81mQFJz4Q4yDEmTgzQayTFAeZuLvDCo61HXvXm5kbTZx6mPNFhVq5aHZuyFPp1ndfWKAay8wXUwMWpVb",
  "key33": "5jC5MuZDV9n8cPEDNdhMFbF4tRcQmnyPoSj1RYBQptUzzajBo3xeprB98g9yNzpfmEfhwrwHZac25ghbeMBesrSj",
  "key34": "4NsBa6wwZ4zoN17jyJUkFxz5t2TT6sbfz4pJcutHfczhw8SfZGbojf3aPMeqZUGkc2dJZonQRM66b51yCbXg8pfg",
  "key35": "3rRtbBtsodgQMZmJmii8TVNa4ceXZBK7QoK1pa9KE1XBcsXS4aB6WUWNPNgKFvuPgwo3wqEVoEcw1VQQKNGhLWs6",
  "key36": "2K5GT2tSf2fDzL5iisxanaVVn9gz7JcDY9EerrzEYZvuUR88d5Dn2tKgb9fc478Kkdkx653arzxfpZiBDT1cEjPm",
  "key37": "4MZGMVjV62z1yk1BHTMr4ciXHVdQEafHZBSoxFZ1N7htg8pXsDuFWtcnmwVJRA9W1ffGN3LtwcTaCpfhXteR98vh"
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
