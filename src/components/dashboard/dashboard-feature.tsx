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
    "3DZA3NQAPTnVQ61LgvRzUCmgs2dsaHW6orKsEgtJuFXLyVcbCSYF6e7fm55bJoYczngdfyXaxHH7atM4m92G8TZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NZVg4pLPg1GTLnv2rUvqRubzcYyTxXjiafz8xmZiLUQETM6niBrHB85kgfs2zSd2MdAs3dD7FjUoeqTUctPHEc5",
  "key1": "2Rr8nv4MXq4yeb8RCYtJfPphPSNjjB3enuRcVD4jgDzSs6NSrBMNVE3vdUom9qW5rJ2jAPUUbLLzEZiMcXQawWG4",
  "key2": "5XhiHKqwJ3sbwS4hK7hNvA3rNT9Wk26jVu9MryY2WcMxKn4wm5brzrvLsqtbPyNtcvhUYkUVCYh3kxc9Qq4gx7HT",
  "key3": "4nGvX4JHc2VUJctfeWYyZbnVs8MTw73LwF9GJTKq6nnLXHPTJYp9LWVmNdE6G28XTZvSpQjDWX5H4Zwa9kZ6VGFB",
  "key4": "ua714hmCE7ZtQZ3LPcs2Ghowq8G5utSGcV3w8gWCtZS62kKDAk5rgc13PThr9E6uzA81vdFxe3xHHkjE63X6C7s",
  "key5": "3F3NcKwGDoyKMc1hmqFvA7EeC9c1Kj3zVxk4RDKLfmRahreW6jN9McpqukMxWy1titv9g19jMQicxuLwKgkPXJfJ",
  "key6": "4zYaBBLzaoyVfWvkZB5JY36MDzNwLVTmKNsKYAAXfwe7hknXpU5VWEMSz5XDZz13aCh91xTTtHtbFQGkYRmXpYMS",
  "key7": "5447AT26fd9vs5d9K6GsPnUQWvVF3bJzEaR7JSCNu6WDyznFqUVr75TSNq89epdGQyQd1jqDifXT3K3xHAERMWFo",
  "key8": "N7mnaemjDvduJtBKY6un4uwQsMAC3SrAdkXHXQDzufkuK6wJ7HNrEBmFDirnnruMy2oKVYUARSQkPxX2qxFxNa7",
  "key9": "4D6MQhRQDwyh3pb6rrnpHR5YqaXRk7hBGyE6W7QcaJUPCPs5qqkuqvPFvhDAUSo1z8hcmCiUBuTmiUxpgFYzzx7f",
  "key10": "4Tb2HD6gTXodnYKHeMLKX1ZMu7jcv31b4CHwEmo4XoLS8C44SaiVFy2JnRJqGnEX45d2B77JPZeyJeXdhYELvPc4",
  "key11": "2UsgTnhnme9FwnArJ9N1pHNRsxwuhBemx36MHktns9wYqS9svY9ZjQs6v4ZCzcWyeiJYLwgZFNBk1yih9BiG7Att",
  "key12": "5836hsoiLbcdDB9geUM7L6FD3q4AsxtuBQbCH1qRW32GUdNeYErbRNpg3rx7ZT8HxTiGbEDf5eUBQAccrccfFUFA",
  "key13": "TaLqeZPHDJQQQvAw3Qqdj1epocuzTetUaJo7M5dvFqaPVnmsQMRbZ4LejwyM7iZ5NVdp4DrYXQ8YUF2pueHtKe6",
  "key14": "2bWkGUptmWTWDVa7y5ZTVukmRzFgehMAw6KPac3Nh1Q7Wi4h73hPmXjbJhrbRBAZFnD2tx33L9s9nZgX1wUnRVjM",
  "key15": "562m2qvLUAe4kGLEow6q41wAhb5YRE81WSZvrXKuvAsG9zYfeuBRPjFKVuUFWDyipSXDcXitsMU37jYRxkEFmYVz",
  "key16": "3AQ47QySVpfRw9e3xVENioH88CdfvX3dVYqrKo9vVgpyAfQN8QtNFaRuiFHGvUUFpgmJ91pu8ekc5QQQHA74czgA",
  "key17": "5Msz14ubsEmhZJbTxS6qec2j4VpL2J5GcoYroGWGrjetdZX4ujMAVTUFj2ec9f9P7DydZbk8MDpsGEKTuA9JWsHZ",
  "key18": "42Nj1zbsePFiRkE6pDWTorSd1tvLxvi4ehz1NeTmWJbDW9HCrpP84MDYuqskrFUF1yZWCfTjtUkMDdmWwQozJ8PP",
  "key19": "3Nwt9UKc4x6mf6XXUktrJwv4yANWQhkteVqRxy1n21b19M1FCT1pD5SZqPQA3wqs41n46fP3cSWN8CLCG16pFvQE",
  "key20": "5UVNDtDZqcEJMSwNkEFr15E6pzzrvYAFMEoi5AgwYw88N644Ak8R1wzmNWCeUJEMqDZpirv2Ck2XUqFkAbfnvnCh",
  "key21": "WSP6gMLWJfVvaZFUdWqwdF78bWEXHsKjWBeUc44jFhxFYw5kXJevnf8cjaSWNRAxdLnFJDJFqw95gWBy5A7JxVK",
  "key22": "g6B3znYhdW4AmHb4XxPHgCA4C9DrRPrXDASJmXSTDuym9q1cXC9RB9xh3Lwsdy1R1NXADH8qsqR1TYDcY9CNka7",
  "key23": "5dUPBN1YG6pVEpUs5VQeU5xW8DnW67T8BiJN2uQ4m3UmjUFkHAL61ncsYyj1F7sShLfVxKUJWxpY7tLuiyhrv6rQ",
  "key24": "4dxtFZjxgBGK2QS7sEpt5LhANxx48CXRatSrkwgAetMLmvvhn737RXmFomSnXEwGqZ5bR39hqB7d1vHAeP6tRCGN",
  "key25": "3ogrfJBDykCibbxJa34BhFgiMgDeHg598TDbYuzMtf4p8tmfFnSzyaf5TbS3VqGB9vcqSzK2HEuz1b1P7VZc4LJr",
  "key26": "2NhngUVsca2X13pGPxt1MqoV7f6ntkyVRc8WynYsFyyp4JvKU61bfR7QAwj1P1WZcQ8ShvcUZktMBaEteRQH8okx",
  "key27": "3XyHGZHJdsBmYtrgXWYAEyhtSDMfWbYtGu5QfGBnD1xNCd9WKnbTnBRf9Z879KdLRNoWZpzXp3CDVXztdLVGkSyC",
  "key28": "3raVDPWqVL7uTMXWXKPiE3nFLkW85cZ3SZYR6TWEVL2CZVskvecr9DDdUpPPzJFtK3u8FqssZQPh3W58zVJv1YNd",
  "key29": "5YNQts7KiJoFfRQgPJ2yYu95rpcFhiv4YbwacswqBxfy7WoFSKRsivM9htLcB4boY8AWh6bSpW7FWvo3G9AjSE1L",
  "key30": "uJ4TWP73zNThwifhvqR6PSQnw4tsgW1wVv3SqsYiYfS8eNL2XsdwP9bQXipf9EZ3efbEUrbcp6RX9A2fQPTdF5T",
  "key31": "XK1gogd2MNmVQxNsDdVnTQtYXJj1ejfRCfq2rooSd1qZtiYqmF3w78FYaXxcaw5xXFoJ2ZaynEzG3Y9H4pKFr99",
  "key32": "5qTHTQSg2VMg25BjJb47LLdewbw85BhcneNe3fGmJivKzXZe8azYGBMAdZCDw1agqMDBG6UHbFaYicWi451e2Zkc",
  "key33": "3uFubxALyDyknG3oXekyxXepvUPqbDbbDhGEix9d6d6fHiLemWqyp8w6CNQBgeZepxGx4U6VTjTNbdGKj1GgmNbi"
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
