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
    "4d9BpJhGhptMWynZwANQHkyGreQmQC9G6HWeqKwqxKhYaJYWuYJprpKWmTokZZh8UNvmcjNJKjJ9qycEcKwn3ksC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "466ZRv5BJTtxUfYZ473wNq2wUvuo4WsZXPLGDHU2TbeKFhFDZvLbVzNjHccmBRRreSzG8BpLZHXfeaDFVrctV8kr",
  "key1": "4UpoCaZgT85ZabHzRk8de61ABK9J1JC5BQn74U1j1kH8iusZFu1Pw5Cs9hBgHi8wrU5anhQu4LZV5s5Bjpq9FPRa",
  "key2": "wKVWxgYyeYLPgEffaFXic2pXREt5uwFoPK6BXwwBeynJcRMGpkba3RGvFXzs976y6ha4U2WaDE3a5xwwjkei1y6",
  "key3": "3CNyWqE9i552WpnjMQ5M7drX4WshD95u496TQTvuf8jrGWeKpXrKNuyUeXiuvP4CHtyKyV5ZWib8pLUQVXtRzC88",
  "key4": "2bXa33HqR4AghvraC2DpLvxUdBhpuepHxG7WnFJJ3cbViFJg9mvQrA4Z6DGEBuKXnhspF4bKRUzAHXGeAfhsmmBz",
  "key5": "64LPCMiLJc1dLFZ14zDaFy1Wx6hxm96rYUdMsQrVVYrDpQGWA5HaAhARcygkJxU71M4DanKgG3WyedQspqXhCu8w",
  "key6": "5947d9dcRMvK7A5jfnPGZFX2t5J6Y4yoVwL47jgqQgY5nBP85Au2aQzrEef3pCThhFVzxVyqMr6MV3Rp73EdtzkZ",
  "key7": "2hD6XK9F57w5RFvjqLfSpG2KJDwhjcZ98Fd2G3rr7jKXALE2egUqdyMrqei9r9nmwokbQtagMNTmnvfPTRjkqpNC",
  "key8": "5GXTmXb9heRN1mpLFCELesuF37FffFEcywbyjrRawje6r7f3FKQ8vDDH6v14HqDZ9igK87bNwJ6UUUq5qEH9HuLp",
  "key9": "2DEJxu4X3yji1Bfs1EMCvUGtjXZ94VCRXKQL3NcbCmaRGbX4iN1MDgMMqV61354jsarzogbecezogB41VaktDyuh",
  "key10": "35Jy7xAQEy9z5SpCbaxP1L8XdqMVEfVaAtGe3hszyTi1sEREbun3Lu34DbSvKrYoXU4pVf17qD957DmxmqeV3GdU",
  "key11": "V1HpC1jE7R67PBXzGGU246RwM8XKKpYDPWEYd9tbCdcsjgSV7yBf9NrMZ1oqkDUUqhkkWEwAMT811JybcvTDbVf",
  "key12": "Z69tc8bu55qnSWdBeJTr514DXJJyAjAJoTdKFopCuKJRTpSzaGJNqQJzwL6GYSYXGTm89HhWwQQ28XPsCfV9PEt",
  "key13": "2cKo9dd84G75jBcfNizrauSKHhqhY4JGG9xGecnAHu1Xrpq3ZBGknhdpMEY2ptAuekjtWLhVJpuDfmzigR8jjx5k",
  "key14": "49GJmjnbkApHEGfDRpXnqDTgZEz5AHTrLv2p8PERLVDog3sCD3szTYDMbEy7FNaYBe4Vokdmt7nkf7f2m7gBq2nF",
  "key15": "2WvgPEq4X5ni19WALM7NKVDoutYsNUMNTjx2Z7fjUQMgHZBMu2jGmanRMstw8CQYSJPW1xC6RGms5m5Nno3dr2bD",
  "key16": "kYGNNq69gCcAciM9qFTw3Jcp2Mfu1uREGtjbfXcr5NkUFu35WtiKbdLw3xfMRmuE9CpSn3mk1UcVvjKpodpD3fB",
  "key17": "3NG3G5QcnAZ3ejGDzkqCFSB6obAonwowLa986DGLtftnyK3Fik4Bu6Ss2CKL4uz81kXbgguspUBKc9Ff23cXJt1t",
  "key18": "2gMWMCoxLKTmwAn4LHweumE35ntSnWGZYMFvgcTBen7j1CJp5mWXNiikqA4rt3aPCroCPWuvctRh5QmwHmEztq9q",
  "key19": "4kmpGBxxcnxYffVQb7aKneqvJyAKTMUcVz5qoXV2bfx2DcDshZBeV8gdAnQQGB9igGgiSDTwnAajwrXWL56opiiS",
  "key20": "2B5Zz6AXCRCPLrwSwmv7XjFT9SPtTAZpzpbQPq2wFdcpvgu2fwSGe7xVPsV7W9QsoNdQHgUVRMwG4febrg5yM8Fb",
  "key21": "5Lkm1FujQ26urxuSi2b4mxvLVxaAmY49KLaPqC4r4BYwitosFpKnZvxM81ieFCkFrUBt5w4QgHdDy5A6Saga2UEj",
  "key22": "AA2sp3Hu4ySEfQNqQGVMszjQfSKCB2t9DvRgsB3SVXdwK16akAco4vm2b6YvozRhcU5ibqurHAta9g7u41xVWQD",
  "key23": "22rawLzpsPVqBpHH6JR58gPRusB8KtFV6N4EfzqxtiW1MBythtGvnK2GsBb1L8oXW8pfF94fzM7dDvXBCj2ywy5L",
  "key24": "4TaKXSG9j4Z4J8prgjVh4kTbx52xYFKRm83Fp2AS2gHduFwNW9KCdBdn8vBz33yHfFWcP7y68xmnj6ZBztcNatAh",
  "key25": "5bnJrPJ6mdQnjx4QMhDb21RRVfXEb4pDzDKaJJ44t5QEeKih37DzjhQSTQkMcxNKcYTsLBAcJ1UTHUm91S3ssEYB",
  "key26": "2rtzyNi7k7LvZjXkERHndE8FKPqV9UVf6Ki9iNn6SfE5v46GBzaU41BzEUfyvvEgLM7bzyw5d8j6fwXDQkzi9HqR",
  "key27": "29PXhAmUoP322P7tLbZ8wxsDQdcs2syYak4z5QWJpA58HW3Zym79CWk8xJjRUJDWpPhAu2SrmGYHZpVDkCjF7suQ",
  "key28": "fbtdVwqB1GjErrQaqwTUKhgLu9Kg9QKq2AJCn6bu98DDnMkCfKvnRPJK2PCWraZunTL91ht95xGAP3jwuBsKRNr",
  "key29": "KuYhFdz3mCMv2N5WHXUfiCYaTgP3UaE4ReekUM5LRqX5ZTZf5Tfq6nYae1mBMUSGHQ4ekZVZ2HRsmsJyb8DfG44",
  "key30": "24W3BY2kH56msrT1EAdakGuSX1Xysnzy5b2mGqM8b25Jbd7YtvXVChLfFzdXnSBDsgrUShv8RGPG84qLkkAJDtbi",
  "key31": "4PL9zkTBznpwCtxJcpfLjGPwrAkHJAkwqLAssrEu7Lm6fBGevFmbm5AiixGzb8nZRxPFVAzyBKWDJS8ZQEwFN7q2",
  "key32": "31wgvPHSsUuj9zQKsx6ZqWG8NRBMgSo9Zhp3Uqb9MSgrThQPYkrGh6HfaeSbKTbtUs2zg1ZL2MzfPYCf9QCxy2Kp",
  "key33": "56HwbqvNchoTBtJGiNyMh7ktHwJ8fDTdghesMqNCKb2Zt3RLeUFpW4a6FoPxsHDRfA94T8MvL2NSyEQf4pPDtkjp",
  "key34": "2detNAmWW3CXdd4s4GPQKQqEp3MrC7BQkj39H8djajiRNeyNHz6JULn81FYyHMnxeBBMf5HCKZUXv4ss44JgLuth",
  "key35": "2MoPg2CzWKTFSj1o7UsciiwnQt88ToBjgtRdE4ZaK4a8JmKKRwZgmRnvhWZ2MH4nZ9MWyUejoS5E25DMphnpM1L",
  "key36": "FxN2d8zvKadMXDPDNYXVbzFAyxDkBUhHBwcPsk21qfyKxcKcQvR5yT26BytArkQBs93vB2xxsU8J1FyWpAtyKR4",
  "key37": "5isXrjNdq2K1W7t2mNUH7w2AboFkok7EJoQJygsAxCeE9bfsfSErvJmV1otyFJgo6i3EG6xt3fqLYVcUr7YK64BX",
  "key38": "2ry2FxAkMy837jCUrMkGiKj5NB4NLmQECpXEwsm2w1Ef4ShwK5Cww2P13Zppk6WRmPAjL62jxtaNScddMi2P22kJ",
  "key39": "2TseYLnqxwUjhpyoHA55gERK7chtkiWBqZuNjPHi3vNux9yLuD2qVJ5qjJVEoKvEyL8XF178Zm3B2D5rYMkwLKpS",
  "key40": "4XxRUd1nnq8UqBgDhB8DQi3szmNGtvS9ZCaw5CpHaYmSLMX3wZvtKJhL9pY5hG69Pz87MaXCyLpyAe8yCvN74qLF",
  "key41": "473cgwJNRpqcuN9WFuoav4tR8uexYwaLjjMdQhZC8m7BgwbLTHqWcEFExC586TXCiK61r9d2D51v21EDxaoxuGxV",
  "key42": "rMaSG2Ge9WMutzgXMtHELQgsqrSQe6GCDZkS9fiewSdy9ng5HnheRZKJQ1B1HMppLsHscBRZDJGQV6q3biMpKVW",
  "key43": "464V2D3VsWLdKbGgkbM7ByjDSvfAqjfteFbe3CoiyuTYnNEKPJc9rATqfd7jhjoTcgRZhSdbtC6p3aPDiU968shd",
  "key44": "57BeouUTrt28saMG1ifTBUQqNJVg3dDCkSiY8kLU9S113sUgWUkBnUKG3n4YnydaEdasdvYxeUV1EehMy3VDxM9R",
  "key45": "5vP3wRCmeEgy2pWKVJvTvK3P49Y7Esy9pY451KMFcKVgnmEQrZJxHhbmgnEcnvjbvwQZqoLPZ7afd34MhaHzdfSz",
  "key46": "3XCKci2CtL9gCvuy8qGjxUzxre7d6XHozSxioqAKMYPJ5b9qnYpgztcbpN31yxmzToyJwfuzV1a6BBhcWR2hhLY8",
  "key47": "5Q6tSpWKYUz8nbWmf1FieQP6LWs57FJEKCM6QMtrN8wzJWnoiCQCRYYXm8s78wBUQT2dQnjgGQLmvcTcKzpxtHik",
  "key48": "5ZA2NJJ2mmUS2bn9TW9TQnBirzDSsVY8yVt6weMHn23YMfh5Ateu8CJ1nJ3sMNkVMpbrNogvJCjbH6sYh243h2QV"
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
