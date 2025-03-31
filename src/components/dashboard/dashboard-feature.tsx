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
    "3TDbVjuLMiS9Ltnd6FVZQSbBRt2zaXRnngauM7pAsxjhzRJEa15qyCRbziKm3xWQxsD3t9j9BcPZeYKjhwdsdzZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NhswDWWZT5nVTeVe4hdeaV587qwWNqn5iZ1bMkNthmAfk1HtmQ6bCPdSkEuZWddngNoo1sqy9fD7uCcKyuhBmyE",
  "key1": "41mgTfjjbmzDmAJMZVUVcJpZr2hroE9zxJhV4X8bW6TCMw5i4pcjoMinK7qrdeRbkpGwxd7MW8iB7n1uqv1C5Mco",
  "key2": "5FFJwR4zjJKHH19paJZt7oJ7Tysm7H2mdbaA3aQbx9sHnGNHB9pUNRACLAKiigXUu8qAxUq1FzLoZ2CS6NqPNH3H",
  "key3": "2Mgme9wjnM9AycxqvteTo9C4XpDiAWH2N9Hb29nNVYPMVnCNfsoXicYkhMJ2fe6ojLsSnyFHbKqtqteZDetjf65V",
  "key4": "2SbWjcBoNhcp3h53Wo58gdFuVy97nLbpWk8YqyffSxzAv2k75GUKK4ETsdm3nrSBz9GnZpNFVmK2untY4tYJEqNB",
  "key5": "4VdE9JcpMncvtwkTDTFKjNNUSLqZZ4KwFanMnZJNX3JFxdeHcpeY6GFVgXMC3r6G9HZb21KXLSAuCPK3TwUWwQ58",
  "key6": "4J794uwqL82PA9oXUFttu7JKM88Dah2cNerQ2cpKmmfLr8ycNg2hcvMVDJfvg3DGrFiJ2X5X1FNSRADax6RKUqy3",
  "key7": "5iiPsVcMFDwPYV2ycfbLRJsU3FcuBEroWKVZojfmutnEKJ6TvkRcDWX88FJxCYoAzx6NiQH6zjo9pSvyF8UxSig7",
  "key8": "rBL2eR9QnVQ453bcQkzLdBSb9m5cCkRTCpQ28u9A89QTdbYGUzEgthyvxyn5s9SUYcKtn9wH7e7xdsNuCRTcmJG",
  "key9": "2p2vrE7Sxa2Fb4n1zn7ZrNWTJHCiYMeZn7JRekhJfzpSQ8ryC2g5WiTYHTgPdWBuFrjwAVd9FboXZtf8GtnR78sA",
  "key10": "3X1Hymbiy7A21MWYLp8EtggEVG6BvJgpET19nBev6Pa5nbfwJfwxo1LKJc8q4XedMSeMwLupuCqc8SXq27jekQUS",
  "key11": "BWgj6kQah28mdAz7FWcKW3GVhjnAWELzEXm7fvnuXsD3DJdvdYEB1cqDYkDiMcY1G1f59zB2qF9g4qbFRTPhRQ9",
  "key12": "4YfLr1mV7NQxLdS1ZpXve5WHf9Bui2m6bCNyHR664yD6T79swdTmqDQPowJ6wV9MkBzU75LfG1xwW5VaV8qcwqFh",
  "key13": "4ddTCjUa7vTeDEtVEtJq9djGtDHZtzfawtM55rLhszeujtmXjhJ4L4bVWxyYumD7d2eyj1vhRWMaUWXnhqRpSFKW",
  "key14": "2oXR642XVxQE3HeXSGjAMTeHqfW1qy2M6u3mVS8pjAgbMhfY9Lt8mdLF9UKxuW4DnUmsrGcUbe2PUAfRC6qTPxeG",
  "key15": "4873SzfUSkrT8xzgG57CJGg32CJHuNDvt7q5xRzPr9VgeKgU8L1uRvmViVwBjZfekigZjC2tefas4y33TTN95bPD",
  "key16": "4ExLN4uxDbzQmThDTdyZ97n9g4gZkLwiEZZR8GrQRWA85DE7QvcZkJ2j5rjV4DfLcGjRjkJ4VGRE2ML2267tN6AF",
  "key17": "2bsCB6eGWLwVYgrdNsYmTagsgxKcAApqy3fHK2QTTmgLU1RzpegrrnfatGnL6YZwTnmGEC1DzWqJpoSMrftHTDbg",
  "key18": "4hjdBux36u4dR9iQgFJHZbcpppZrcyZjqamZEAKg67M8zCLiKn86dDhuwCQAhTEtdheB4dWVifa41yeaNhSET66o",
  "key19": "f9ofB2qXvD3eGg92VuN2dnpN2tayuhw4D9me6zD8EyN5onaU2C3vQmezxxPeGzYcr3ZftPAXQ16ep9LaoLQ22qH",
  "key20": "5cKZQGGnNJp5mzQyyMi79dditd3sLx2re5RfhVV3TRNcDsgMGbmbARiKukoeZV8e24trDQah7dpjuKgt7oCnZrg7",
  "key21": "3go9JeNddekAK3oAwicBFeB6srvHJM8xbcBbEqXs9h6VVPKFHWYQ42tHPRpyXrBiK7xKe9Y7SpqdBVcrnZbBAtAw",
  "key22": "4rmkEUWi8DzGZZENzcDTvFY65xkgatGg72iSWo3cQSaBFSYGiuYG8GYs8rT8S5Eya75nhRpjqehbZHaa81Ppgo4q",
  "key23": "Wj3iznKHiYRnPbJKEwjoq3ZEMceDvSyy7DXbQdHHpFUZ3G2V8G3hYbS9wPWZpMqv6LpbSwQzP65GDkcpuv4CsiG",
  "key24": "3XVGcfLwCoCA5gVbWFSc9CmhUVocWV2zDsdFkY19fpjqUnxwuNU5KxFF4Gp8yWWmA6EiBoBzQeP7PbZFesG8BxiU",
  "key25": "2CLXCVCvdc1uPYfVTk2RJXpkZWTP5KuLX95wT4PYdocTdc8YfmE1VL5HzCgpYLh8FDWGtoqXviMwUPBSBdh1uzTS",
  "key26": "5ZHbAW41SMo3dRgBgw9RXtgwEzZxxskJZERjjSiy7iuCFZE8ZDb4tCewt5dvLVWEACQdKpPwE7pPYFLcnChHsGur",
  "key27": "4GutUdRDjp3oNsnwK4KavDNmLfym9pRuRMR4Az9LK6Kcmh854KJarfmP7MzKKmaPVp2D59JuvJFSNJDuX4qUGrUn",
  "key28": "46V36FdsPMwvTAKrPWzVEgoEBM7ELmw9XCbyFhGbGM3Srk29zkpkyNLhz6tVv7GiyUZEcWbhAT3VPyW7moVZnQam",
  "key29": "29sGMWKKhitxHKDGpTYsJhxAA9GhRN24gyckFHdDKMz7DkxUC9uqd3kMtjiH2go1V1wGJhkL3c4zrEyfUZfaZzfz",
  "key30": "59HBpqo484CrLPU6qEJXgW8dVTY7dRrWRyKUJ3yZSU3XrV9zdFpxtZfeCyWsSNxaTjGrFRzfM4dzkzjn6UkKe5q1",
  "key31": "4gyojLMPvQyvrD6SkGnVX7UkVXLECaKu6SdEy1ujnv1yQEEXbySKgMCro8JyN663HM13kkQ69TesJpZFMuSSdzV1",
  "key32": "cFKwqY8tHQK6sW5j9SRmVLNmYtDdWw7NxBtwPHGEiJVLrxrwKJwnyrLBya7GagoLskFf2MH9EatMMAVPgoBuEsu"
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
