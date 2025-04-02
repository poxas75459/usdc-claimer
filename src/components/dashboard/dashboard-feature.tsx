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
    "4uNHxLkmadRvLYhgxqEitQjineYjWSZKSitUn5RDk1PMghAya6obXWASq6yYfy8N9A2v7LZcHHnVJShVpEgiJNV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Ta5ET5QSLcUd2uKEVuPDLbgahZRKy8qjnDSN4X75ycCNjVh7GFGz5bfrwvvfwBusrUM24RKHTFhodY9G1zrwUE",
  "key1": "TvxD8fiLsqRs5ZdcdJ57n131JxEYk3Feq6MFhEbayvobZ2ugS51KVdVgkqJm2dEggi6nHhz53AT6mmTxNj8RgxD",
  "key2": "TVrtt1NHpvC1us4cuSXKzrYUw2xAJiVQk8f7L5hhaTKnqatCJBYYQEHJXL2SPBYYoRfHtbwZL4zeLjHZsD6MGKY",
  "key3": "2SFHH4buYLxkBdD2CQXKf3DTfZU1JDaHqsaYydxzQezsoDNwgge7WsvFEQyvebN6LUwNsp58mVFZ561y3XwG2S5m",
  "key4": "66XcLNbowk4Y91TdKjMpgQgWJrgEGKM3wNJ24tHeMuM2hMa1GyvwVG4dJyTwymrLpZsG9zv6rn3PLFLpgC6SQGmv",
  "key5": "GQJyMZGqx4Rw4wmR87wiMxLNpcXWS6opYwBNM9vaH9zdfhWarny87MGnrrAKFzaXSu4xRqBc2N91nWEic6U7c2E",
  "key6": "2j8hNnEPrLRPPH8aDeziqjQxmozAGe2TY4EMHj4pJGoDi7MSahRDJCJPur8qssPExefGF6vta9p4zjnECgdJ7W5r",
  "key7": "2xhE6xKDcQyoex8UtD3ZRwM9boJ9oqgqGmy41VcQCdhbhgvQcxsTPbL3Uquut3ksYVzxmZyxta1o6iPAsBbSyVwt",
  "key8": "niCThiwPmNpzQPirkCrjaPgsuuqxX23hjmeagwCGVbtbA2XiKzYrEgGqJz6Zhzf4GAdZLt3oFW23DwoRFJBXLMV",
  "key9": "3m2FWzCqZ1ipPd5RRMCf4YpeZnj7UiTjrFYr6MAxLX64d6FJkhH9aQhpStpXJYj5NfWbmUTkjH2tcVj8ge3LrzJt",
  "key10": "492xNpMT8S69rCyC5pgqkZQNHAUwwHgAJ4BRfFxsjVXoTDBi1a7g3T7MeNmsAKRjQHJ4ewkPHDPhrH4Cbf9wvdwh",
  "key11": "4mBp9AKTGaRwknhSabLJrACKWZaYM6aajmYTTyS4hDEggnY6HCak2DT6K8NQDntLeBK6EidHRwBeXaDEyBnPwnBT",
  "key12": "3XZb2G38Bf9xkaBPxoUSzRNTuZUX5iZN1MuW324xNhCWGWMpgzJC7k8zsRoUmWD6A1jAFHrzmYYLbmEw7engcRGY",
  "key13": "5SxjAzFND52eT5cbGpVvTD35eGLBD3xQYLkQ6hae63pFU16Vc1kaz43Xy4Q6djwNZRqTB8DAJ5HxxGW5JsQR1fod",
  "key14": "33zE8P9GksmpVGLukCnXCnC44Ye5aUuA5DaBS8xgviQsNDZb9JWA7WVmLFJnjtGbGgnxYAfUUb95uU3m261FCiba",
  "key15": "2C6vqzdgLHtGW3puvhNab5uGAmn2crY3Dvsx9KWJtjYfP5QhLCZGQJhbo5vx6k97UrbJbpPMVLjLkbKzWD9zMnjf",
  "key16": "3be18JHxD2aLtZVSWmz4QH2LQ8xbCnBPNudQGVU8FiZZLcUDGzj9VPcRYDG8eQofBAT5V2qFExXtFZML6dMv5L4d",
  "key17": "5iXN76wHKEJY8N6UdcfnmPYVHG7j1FKdLJdA4XG7qeQYesYeaTfvESi6rszs141KwcBqnQ2T25VhLzDGHVydEYnw",
  "key18": "4oFBXzqywCSS9JZwZvfC7U4jsMUcykuksnBXaNCvj3eaf7yCuwSCj6g8ptgtfr6eoTpGZCcM6P57deQ7vN1H8bra",
  "key19": "4DvDtQnWWhrPHKKCA8fxZ2az2c85YJBkn2ppmiZFoy5Mz8mcdLHSbwJ7hUhtMQush4PMsuqLHaNxwNGD3osJrevA",
  "key20": "2oYDTcXm57fYWPTGMAVAXqEBbdmKfoBYybybav5hya8Zpk2JqzWLwBNXCeGZGnL9VDxMK4T9MzwXjSkA4B3eVUmD",
  "key21": "3H72R3NcgP4dYZrdft5zXDkhM8PmQXMDVnqAsqm1qZo4JWAYHZABj6rdYsiS8omGtvxQ67tMgzJQ9JGrUotrkdPF",
  "key22": "4dsUmQyL4hgg2yFWpWqHYH2ZpqVQt5S8G5KcZXqf2NjjjLyfzxhPkeW3VNhBG8fVR3tGQudKQy3btSBRVPEUV2Kk",
  "key23": "5t6agGQLDbhwbjqZiwerZUMXjMhMT7dWfeZk77CFFJD1VbnoAFShG1GyR8cTzXZjdB1uRDJVmZZk22zWYKPMAqKE",
  "key24": "4mWWfaHmq4LPWk2C8Aju1zZRMGzA1xjJDpwuWxprX5Mp7Cbif3oejTHT7rWdSP1ufAjuP43HggHa79UdTsAQ22pj",
  "key25": "5sz7UqpWnrVcKsJx25wtB1VZtnhcY53nPo96weU7FhoBUTkngkhB3Ytd5nfz2AXtNusKfaYj3spQsiP97i3dhXpr",
  "key26": "jjWwtinvQdGyRCqpcpVxmJ47XCWbDQ8SPW7EPfn89qdzdCKdJapbXvtMA6PENpzo3DYA7VrgDwY4itZopGhurGt",
  "key27": "RmyTp9mXJmir5SzYUC9YDHpzWuH6KoEP8szik2bamT1h8vk1jfJg6DHiGH2MZbFWx7P4yzWkwj8afacaMwo9y9f",
  "key28": "4TTmoh5LyAW2q1kaRTwCdGngijinVeNnfU6YjJXCVtxW9tok4TgYkPUqR8nmhixkhuZUjYCvTomyUov3SodkAZwe",
  "key29": "34GuPhs2QqgL3RKRAXEPqwageCcCqjh31CYAMPCMEApHWZpQDi6vVw2oWDKr6rKyCpKamXD9TmTAQcAAFLgWio7u",
  "key30": "ZAU6LkZCkJvh6XWDbN8LohtMX8QUYzjT4USsDppKQGrQWV3UGRSHUCQ2aBVSFiPV4bqfDXSL6BN1eEwqfEBGQv7",
  "key31": "4xLMH4QrE9tf3Bzjb4W6GmZWfky68qoDoBWHWMA8WrYvEBgVj5gRa93q5bSZCfndMUs89GVGpEYXk9ZLeiyJ9KRe",
  "key32": "4NVw84ABNwCLz6Z3f8T976xqpdZ29cLWNNnb4RazSaKDC3aG5hJSTRNrBvzT3u7ZQuofKp2M3mcttJ2WH1ieJXmr",
  "key33": "62ShMLbRhssqesJjE5bhuu5LRodruWsAk6Ri5ngtxUzGdSpNprAeVFWfwSz3Q7WUXMq8NyQKSFyNfuWPXVBGxzys",
  "key34": "3CUAjwLmLJgcG36EGKSAyHwUSazpebMnZ3SRALQTcB7Q9YQPDBJquVQAxn752o4uKJRuBkibNdfNihv4H9YEbhbF",
  "key35": "4Vke2vjoE7v5e2wrkdjEKXkThgP8r1JQeMremSqmbiqmgAVCcPEKnbFg9kJ3zFuKeqofeUAjPWkKJ8uGPABoL8Kv",
  "key36": "SM81XUGWhovcNomz2WZQYo5HaWPYimHdCuvcHc64hywesyXhWN7Vo6GtKg1gw8cpctNz9Vt96feNupWyampWasi",
  "key37": "2WM1yYpDhPaQck1t54byLTnx5SRx7WQoLfd5LZTbpDi9Z8YPebCb7FaPAyyfio5Mz8m9Fzqaxy5ZUQ2Mz9RnXFYo",
  "key38": "4pcffbmdTyFQQzX3mkhxpJkod6sHnwjNvHeDSRZqbJBBU5CpJsgYGmxBvbZhivQY8Fr6dWzHakXqddHHLbGC7tN3",
  "key39": "P5okSkSQWecitsMpYfYx1GoL6WfyBcg3e9yjKuRvskUuVh9XMrSV4oLzJq1noVoabzdT2uhtf1JqEUR4kRo9iRw",
  "key40": "4bTi4gWnKFBqkWYKCFboAeJHmkHde32Ej8C5ae4RSo2TFDHH6cG6Aa7xxoBCzSvGoVchQ6bZPxvAdvFxGBugnnaZ",
  "key41": "5fjQ5r11eM2fRJppPun55TgKgYnuexRzcKs1yZKf7nEy86RQbbfKQ2YiTY4sHHpazmHhAgApxdW3Ce9ZPU4mnZc3",
  "key42": "AuuybhZVpd3zZnmTGwEm49YbyjBEm42xT6unBY4y7u1aXUHHFs2YLHv1zYpqRUV1cFRY3KRyNUat6kS4YWgaoas",
  "key43": "5A498p1bwk6J7YDDNTQDiVZtQDUdx5akfT9Qebt9U7FfX1KeSe9UHe62wEyb9RgsaFrUwJczjq46chW6JYwpNNRV"
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
