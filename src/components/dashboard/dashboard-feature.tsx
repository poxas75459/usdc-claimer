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
    "4f2jU2Mz93WozyswRacqkjKrHo9ubwghFtdK8NgZCJ8365ikkzu5Y9fz1ckyj4RLE9KoSLq2wHEpdJ5HbZB7TsLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zARzZdzU8brRgnZnsNCfUwKKhPBaTXwU7JzvaiwXzoMRvnZbiUXuTd4rBPK7D9RMYZRo6PtWq7G3TxdYjCkeDX9",
  "key1": "4hPxyT3Kq7Rrx3AoKxpUvbTviWBpiatNuJYJF8axAPdH5JXnzo1XmDPo9MXpk9YBGn5vmmWAaUCcU2dL1F9rVv7T",
  "key2": "GTSB7Nf3hHTXrmLPSdjWEYcZuzzWmUCH8WBnwC2juapKDrgKWr9TV77FZzJ16d6xGSqt5CAYxMH2JTqPmL7EVSr",
  "key3": "5pTJyZJyHB4AcnjX6DhfuDE22ngRg8fVQRgrPrsoJZwz1ZpZjNiBjXkadSoBNUo3gCFoYdztE8DKxVKceaqfPE2t",
  "key4": "566PwGEC8idFdp6AxTHsbkRGwBbwR2wvwNPtm1eeQdTCz7C7zRvjtwHLJUyt3dxbKrCojBje2UQNa5pr6uBTroug",
  "key5": "2mL69JvX6kwA9WE1eeaktzwLrARqMwdiv8w5q151BUp4VDD92eKY8QZgqqhXo97ZFxywt2JvCbyp7EJk2h3wb1C9",
  "key6": "5osSJZoX7ZCyxpnsWV3nJpQudUyX5mc1WFsyLGi64SJZweaLCz2XtMukDjwdmrNfKB8g13HYFt5KGCgoQoeg1iNK",
  "key7": "282NpKWn4kj91CeRVsrkGqbN3nSiMLN7EBfeg8cJH3zogyYiG8c6vXW9T6JZ3qET6S7hfLEPaPNyQxLHkPAfzSKC",
  "key8": "5CZKX7k4G5AvrAa6gg1UjoDTtTiQLWzVwhSDjmP17hm3Du8FMbWwb2iF16ifYVXZo5jL85pTrs2hbhpDUgo3aAB9",
  "key9": "2oycUTwR7HPdbsKexAgk1rZd8MXrWCbxQbRdMANSEx8AwrBYuNvG4qb3HezyFNuHjogMrvEjzCkrhaKmJ5p8kmww",
  "key10": "5mFWaK9aRRbeVGGPeSBywoQseRuxqnDNpcr5BNqeRSAw3akDuYvH1tnnqpArvAdrge1ozkWYhXeRTyZ3RXLa5Giy",
  "key11": "3REhJRsWNLKTiMpfvW4yEjWQDTi2a68kvKjbaow3zLh6zFTaTABibD3nsPfV3jnS6V1YWsMqveEDT4iuM2buKDqG",
  "key12": "QZJ81zmB6tGCGqrKMRPjG12JaFYkRVRHbCNsskKgwdayp5C9ttibg7WHMR6cqBc1QcS3fgm8qkhD1iJ3hdmr9An",
  "key13": "2A98vE8qqYgcL97UaLXL1qLG64zcYQ4rQLzC4m42HAhAo2maZZn7udcokWBnREfctmDWgNJNGNKy1Qga2DNJq2Xb",
  "key14": "5WmeqxdejVp6BoZy51HVqTGf1A8JVsLvcwAneDpfwd2483GnHPA1HL3ME5xq2WxdjHqLNRSSrhP8F5YEeLCtHafH",
  "key15": "5HDAjkXdJcC6khHLcQ8qybULiiYahLQpXyujjH669ddYp6DpVt7sGrv5w8fVdaFVwXYXoxh8pKoV1bGQQtyQ3TNP",
  "key16": "LQ8tyRLE7wcSeSAoUP4S9ciQ28rSZ3ckhAzF34A1UquMXtseY1ysuGFhTZaDGzAcjoF3LYZAbnb4FkBeaAqjAQw",
  "key17": "5rkWqts6JUiFvKJ2y9HviykfUYtxEWcB8VqWJfNe6rVkQrxfpkH6vfgxS9ongBRtPC4VpE9UtJcmKLpFqcvM8S8x",
  "key18": "2sj13rmw2vEogeVyQgXERen6cQFsUMxqJBYfKDoLCfjvMJFDCvner1GmEmfHSvrENBjvrjc5RxZncGBrGeQ1wz3p",
  "key19": "ArtMAjUMEHxwRBZeo56s35Nd9h6jhh9VDMd6v6txdxJQDTE78vifdBVMB9cV9AVS8ZJPjjp3CvVRmJVuzxrEYXE",
  "key20": "4MQVj12t9z1X1fF7b2EtayByHtkDN6N1ux3hzCACARWw4R3aDxfpw91nGb2FyrWLeQo9pngoTAG7sGu73MsVjw4Z",
  "key21": "2ZxvumeKibcL8AbUsEQZkfuk7zHrWt5zENT9JgnTMtXqbe4NxXwPa1J45ra74ATfGxYSVxFQPTYArSNRZqsT9rdY",
  "key22": "3KYRWYoYCtGziNbvtc3Zpey798UV9ig4oD6Wi44bWoL2n9EesdVsH1KVDP5wDzq8vjaWZUW4XtKcuCMdwjnMjqSd",
  "key23": "5yTb4AKPBVTovtVjRxCQYCTK355mmGDqxydS26vTagYY8hDTgViz43MZCYKmedE7txoHXt2TX1WVTUKhpxcPFD8f",
  "key24": "QmDY1K2waKsWVcWyjmNcJ97BbCN5hvBzGnFvzJSbywGyfVsLUYGFKHhfJtcgoxND8vDZxnS4ahiAgHi4fz1FaGH",
  "key25": "2gwtRUkKNqg1ZzHqtwox5EEn4kKqJoT7yqhHbHYV6DGdCeTbQXoiwTC46b92HtJwotTxALeTcYjMA8rXsSEFqL3U",
  "key26": "5sRDnCGSwLwRru4PwE4Go4qYQj2NnAUmM1oCUauFtHgn9WkwTDteLVQBiSYh5Du4KnxrnTMpUKJwsJiHoN2xj9CF",
  "key27": "3PHBh8adtBR7MkwnXv8zmsL2rGB2oGoqSJuG6hhiAoy71RSa8FJMj13mBUKhQqCSt1HktEuNdmLzEpNNuAJdzDhj",
  "key28": "5RPzf3p7KjC1BmcL9uKXYHBp8PMcLZNfV2z6nyT5jEDeQAjk3ReNjtD7gVPEyjov8zNfzJaocGZiXFruQYfrQuMg",
  "key29": "3BVZeoSXwwy18AiFC9KT8LPVdP2ovE8hu58da2jbMdDC57ZNRgkNzXpvWdc7TWv7AHU1yvyooUyazuKedKkFoCAc",
  "key30": "4RD9iurdwiYVarYFe4NQiVBYfpM46NJCtWHkwMyqSEp3V54h3852dcs6N4Pavz2ADNz7yBDfKW8yTuzudxY2ojRy",
  "key31": "4WZ4yEDUoVq2sTL97fgZ6wJr3hkuhWWHLxkDk75RqKz29RxMD1zjQhkCzTvhyPHxQxnzoqCrJhcFYC2dnTUVpHZY",
  "key32": "hucJrHGhrqg9RPZNAwn1tC4CrKenSYZfS1a3yq3sU9HMLStEBVaMvcz6UUtARRPzwReoSjNxBH1LVM59rR4TgnJ",
  "key33": "4eaMtm44S4UgKdbaYtm7z9rdmr6V9G1jqHMhHugZ6crtKrR1YhwTwfJKiFkCYkU2oHBx8BhGBpKJKFqK8E3MGo1A",
  "key34": "GZH4kNyNJDmSNRdLrBrmPZTQKHTWTaMn8WKvpoybCXemGp8Cy3oVtci8MNnusp93QBUZbaguGQWYLhi8cXcSaCJ"
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
