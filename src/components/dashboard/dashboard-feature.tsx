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
    "4bgnB1nXcQagN5Aa8KRCfXMyeM1jjs1cDvkyWHWc4DuGyD3G7wxXQhpjBABP7k9qH8mgmQq4rcHhjNyzcNnYkYqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34bsKJdavh2AS83hBnDZLHkBa6HRNntRcQuLjVJwA79XtPBD6K4jtmfD3gTwSwUJ92rHsrY3EjL2xVick5pghTbv",
  "key1": "5DvWeq3cyjQDHSUAGJDGAyq3fp5dsTdju7272rT7YugeTjNaLcwDf93rqXBNwb8QPfkEkEE21bEKUjEzfgyGqcvw",
  "key2": "47zpnJEFUJFS8SZDibLpUmE1znWrvyydpJZf3z433M1hysAaGkXRnowBLMvQzqKM8kxBXWYXrY4ZJtcaeHu94cZh",
  "key3": "5v69SqmPXvJJ3RNjVHoeiDCeN7vqLmXG6SPWirqbyZhCroxRC1JEJY8BpGhPnvMb31PNtrR5p1CD9m11o9dohPMX",
  "key4": "2GDsmEcDDMGDWQN3kUcFD3uDWPuNXEjeE1y5QGJgzEdDWVALKeww4sdTvwzMGPJ4rNDtVSaJkw1petiFhqqH6Nh4",
  "key5": "2HwDaJY7P3VKroE6c2X8vdwE4JzGqzxj4VpEob2kd25pubPxbUFwJXWD6Lssm2BfkUEpJwvX2NvH5WATGJkYLUw7",
  "key6": "5UWxJZmitKEz4iSLizbUQ4J1aeQwxsegif6mvpio5NMtsBzYeJRnabJBp9jqSWiawbEtZHa8FpzNSEMuSeupN8BW",
  "key7": "4GiPogmPv615juwRquKnm2XmbLfNAnirBUqfzDJJsK9nch92cJBC292Dvvwkw5j3FMV6QEb5aGUyTPvUf2JrRu9Q",
  "key8": "hcmp7YPjP6GbAXPmWZ3QsPj5sYUZjDdp4HtQrGCrScuNZDRxjgWvd11EcXmhqQnTfLroVaSDYEaSJhohtdwxvBE",
  "key9": "54pwJ3kp7LZ5pgF9vNtk7JRUCzugJdKZj6Z2k3jdCE91tkG1Zp4fFKXWAC2sjRCoJMMnajgvHuhZqXaUdNtYBY2c",
  "key10": "3w6DuKqf2ZERezTWrb78YjTUh24VXnxSUcRWs3rmLowvAi3dGUoo3wURvgPcPpY4RAWf49xzsHkTAANiUr4pn1CR",
  "key11": "4D9d8rUQTgrS2smTobuGLEY7W82nDziBT5QvPN37LdGYFmUoUPCsckjJxV1dmdteQba8zPd1McihqWmKUNsZoXwx",
  "key12": "7kdASN9XBqemQngL129yLuRWD9UAR6uXcSsrkpE9au8s3rQrQqeVMJoQMcxShzbbQR3CkcvUkvCSLdFfeXpxN4U",
  "key13": "5RqfFECYoC9eTryDeFo5roMrRST4Ch1Pqmwk2gmZuvsMQmaxPjhC4FyNCzxWadt7dCEKzVabBv7zDEty4GGWeEku",
  "key14": "GEFYE6rTtuAV5Wpq8FLNGNMpDfTUtjwaRQz9MxFnpEjwwk68hTJ7xmLvfWYjDmhQyRhXLY6YJ6fAfUxNdfjHazz",
  "key15": "4k6tgbs3xL8rgK35bqYhDzk6BH1b82EX1egZwXjTjmmKBfHfhYe4zPYLEpTAPuLmVf19dVvMNkQ2AUrb5ucqye8z",
  "key16": "RVBHD7Vqqgb4afbWsWsXBDf3ssXhxcxAbqhuQPd58U5qwGGJRuegEzApUFEY1xkjEoCppqjiHhp4fzgU4SZWU5Z",
  "key17": "AjybXecHbbNX9dmNTitecrZE9W2bXvjZoPNhY2SGoTvJdCJcUjeP5p1NTUXX3oT3TJeVMB9ZpLddDriSx2junof",
  "key18": "2GgZnimdUZh1291r4BbBy9hFsxTUuv8zXo1sPFmdc8iTpoYGp9k86KMB8bsQtNo1QXvugpbMFmw4n35MGvs9xecX",
  "key19": "3YC1Uf5NkpXWrHWgY39Euxn7hSPrLWqKU7P6QpvaUedEB8AoNnNKQDktFRLYCuRiLtEiTzeF45KGTD8bjyHjs8XS",
  "key20": "JjY1FktpKo8Uq3Bc4u61ZkUK4zffPhqUDqGMVhNjCfpUgUBM5LrRb2G7xBsAVCLyNakHAPPGcSerFf87n2i9mUA",
  "key21": "5R7KjSiySkzugTfesQrrGEFtrpjY8WC3fAmwAgHBzgLpy11wUWasqijzRMPGYV4YzvDvhqd58jw2AyjQ63B2AgHx",
  "key22": "LbvytxNPn4kpUcEvDHHJ9z1BpTw8RyQ32SyYYjeZDDXBfsTkYjfnu1YQruWvyntTePTqktZXzZnH1PMdufusfkm",
  "key23": "4kaRSDaEUHraebnjaWMPL7RV9iMYSDGKncEJsBPGtHTVEDMWic1pVhFdoHuRFUvsFeic1E5Yz48CdG9Q9STcik9w",
  "key24": "5fUGftyxcxdfMUDBMdzyuSuxLDdKEStmwDoLdovZewfRKuCAQ41qt139Lom6DiKqQavya1QiYfWp76H5PYDRBHdg",
  "key25": "4iRM3aE5mRRmP59oK9CSEDgQ28mcim4sBLgLmFj6Y1ogPKU6DkHwbmrzSNoDBgK1tHWCMEdVXrXLWnpN3J7Sbztf",
  "key26": "UZcwDVkHYiEsbw9AnFHkZ4rknNu2UNvkagwksmuiJu28o9ntrTsxSGtZT2T6LYJJCQqyTM1UCA5KA1zFmc874Zm",
  "key27": "5sP8WSgLLcQeNvM2EozywBpGtD8VpCwhCM83stgHVfW1D2iCUmaRu3EMv8RNtbPm1VLSsXjf5QpvEe5qt4YJy7vm",
  "key28": "4aAUncVAT2sWnXBdTuJTcrSwVPwnXUMmp7jmxRvwYYRVAa8GZGoF4tgfg6JVoxwGN4r2rb9xn32S6Km99kRfW7oD",
  "key29": "2ZUwHmo7KYCwk7emWwBxdyaWHSkeE1ytzz3Ujq2GPHzHF9T1QZhNiz7sFCj6hcVJzY8opDj7qSTyx2J8M3wiLUsX",
  "key30": "12TfRoSk5dxtnNJu7bH7bqp1Wy2usATFBiQwz9Cbgr61WRYuqf4hiepGo4Kem7qKCB6xj8gmMthnhTXHXziPJbo",
  "key31": "5c7a8P3eHboWoGzRE9KUnV9cGMCJ4Y6sLtouoa9Dho4kbi9sA3CoVjbeFZXStqVYNw5j3YjWVWBcck6asYDDeWh4",
  "key32": "5YefR7oabT5QpVrsizx7bgTTWaLu68J7Hc1HG4zxb7cyZtrZEY6wJzwtuQ7aZ16PrVGoT2tzUrJvPwd3izP2FHWx",
  "key33": "3osiXpqVyLzyuJgtjpThCNCztF4D2N8RSmzz4kQFZuxfkbb1bL8N1Q9oFpAxzdGvhXbe85TvyLCJDHGC5Q6topTV",
  "key34": "2Y4EmmW2UwbsVgoA49cZkRqGXyWJBthz9bfcmJ7EqoMwkKCWKJRm9bLVT8JiAFxG4EAwiykXRGrkVowQuTx1XKmg",
  "key35": "31j5WTekiWyAwCTE7ZJf3P8iUQwMDQMy3PAYtkoRtuA9B7SskQa44ugmEcuugddT2eiKtL4zvDMPZBb3EH5wKafP",
  "key36": "5aezmXz8TetiRbUFDdnjphXwJRiUbU1MtcY1BYbsb2uaj9xu2rt9HAmZJu4uxB3nirjDbKW6q41JTuDAqTuLDXHY",
  "key37": "qYrjCCtCbkvGUQUdt1KFcPujAuNC8bhaysUjwDjBzS2GjZQhdtS2FeP6DsAqpt5YAoM6FxkryavojNr1v58ZriP",
  "key38": "5vJXnjFfRdAb7rk7c32rFdZwTA3qkGs4vahd6YQFhviSfW8iaSDFjqUzvK23CzvGuGzUnpmUyCq1JpLgZC79EA5F",
  "key39": "4XbfgmWvF6YfNoeKdUDhxecm4rqJAeatXYo4CKvAb67hWRz6RbbvigHn8iQsbD4kPK5NnvKDnmM5GXdNv43oibhE",
  "key40": "4M8s2asMiFVZxSUFgSySteHTdTxDDG1nZuhVuT29S5DP6Z6qnVmnJubLSA7fZZu97Ktra6GtPkKuwupW46kvDzC8"
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
