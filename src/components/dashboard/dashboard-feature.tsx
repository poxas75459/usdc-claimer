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
    "3yJh1qX8U6i5qKqiYEdQgTKsCxYPU77ZpFsZRKhD7WXdKfGdqHESPN9GWFd7YEpYNyPr2LdMhFK7v1XCjL1i8eFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EoHFypm4hvP8Cp7HMUdP7pDd62WnHnoKKiT28ZwEjtLmhQnjHaaESGZgNReaqDizRs2bgS7NjcncvnvUHQgERFh",
  "key1": "5TUJkBTopoHdHEMU2dJkYb5P8cAYKMp8hNUdvh9xX4T1JbT2STPeERo5R5Pty1G6iry64nKcxgXD3U9fekSXhd4f",
  "key2": "2iHcZo79aYfRa1ewEK6vwUQ1dCK6Vjuig2dhuvXGa7xEnFoz5skhugHpJLwJQdXH6nQ9Khp5rpLBDsodLRYUV95M",
  "key3": "3QCQjZebzA7zZgsAENjX3a6hYexjUiBzXgXvrjRWvMRF2rLQc3V5FGhrZvk56fcN6HWWXBNZEyfWgUHTUgqDNLmH",
  "key4": "4CwGCDrTyABxvmFrvRR4P7KUFZHja5o5kiuLMJamwNQuXwwdFmfKHA1cVZQdZpDW8EU1WqbLEGJSkU1fSznsY7CJ",
  "key5": "4BxXc4K7HWeLGCt2rKTXK2Bp2iQS8YKudeD394THr6Tqj3ZMBmUYarmZERtsaeNbhpTnfYs6ThTcVo9MYU7qQ183",
  "key6": "4VGCQkE9k8H3n4yTybFoh4RdSDhRPPg19odxJFbEmvQ2gmRZBHTECXLYGB6FQ6S2RqZb6t8e4aKvYykNoQsbR4Gk",
  "key7": "4hkwQfSwfGV3hJqAo97pnvxvJVczvkKGPnbW9fE3PHMT1Rsax4Ct8QduYqGb8DeBk63BbRYPHiAkmczmdL922d7s",
  "key8": "35yi6kBzxoDBGR995U3xTG2hC7EnaYkJkG5sY3tTaKiUuD4kQAKwHvMPdruCeJwhfE1ak9obVLNsxDhPKVUjv7Nz",
  "key9": "4tftpc1chwXP6mokrxdNx8Lj1UCWegWm9H2ArihADnRYGCgyfd8mRvqEfwToGwgX5E3efnyhoFpQbqK77cqcqEtn",
  "key10": "3nfgrxcgs5uAKz8LSy9H6CVLocZduY2VkjZAvZ28wGoaGvNPGBrkqdb2KtE6XhEBTZpFeVbKY3fPj3UkMTz2rfHZ",
  "key11": "2PvsJYuHWqCfhg2U9jFjkaKLtApnoAzvKTDXA6Rx9i5GLrapxvzDNvPSi6T8qFMRRP26VFU38puXSrr8JdC1xQss",
  "key12": "2szpruU9wGnndTRh7nB7WYaPvYMdPXxVSw5hCPEUagfTuyG3wY3LRGg18J1fnkUHCbW6LhguJiVr2ac413TQKukW",
  "key13": "zHgwDkcTYTbXgftGzVHfbfAWvKYVesFBumnPFzKgsYBG2bfR77Wr8kHzxKfhgFZukUTvWKFaD7jE8noAQkh7omj",
  "key14": "JdVJP2ZmZAgBtiGwn6xDoRRsFXJUc19HyC4XqesKXv9swvqzoiDZA7iAoVqnPZ6hoAkJsWQqKdUa782sPRBwNx2",
  "key15": "2dxsvNKq1RYzWf9hxG8GDitQi1qUYY22k5EAcAyCH2sKnxxbyEsnZczaR6trzFWtf5xVUU1t85jdfAZb6E4MeD79",
  "key16": "J7j41n87eXiiGMQ2j86QAtt1SPMm7oNQ8ZKD2456UyUmVJ5TehPDYXSdRF1dwt81LwWJfLfoU8R1HU9tivEfvhz",
  "key17": "4yN1bEsgKQyC8uJJhRY5ejLmYurZvgBtiDpZAeHhBWUJLv2nVaKir6A8tMrwLyNgtLTrU1DbVjS3oeg9etCWhTrS",
  "key18": "4F5UQZH2zs33wLDjdzpXSNhfcpGiZ3VmRyixTT4Lq5GkwGwFpSNXHQ68Vs6V2WNM5QYYmVNCvHPbTQ4mwYAgrNjS",
  "key19": "KA7B5e3XXpLEqYLpDJcf5UC1gzXL2KfakndPfPesnAZtAvShDVLvvQssb7e1a63ad4gXpMH2jUSmaUb9hfS8ELk",
  "key20": "44SrGhrvfKu8vTLLSJ43RsyF6ZmefUAoKorBbpVEqbzAQk7NAaioo8zMMRkRiCf6xL4AKuGjEyHSJGEdteQoZXfo",
  "key21": "2FM7AkhfPQQLig9iWFdGttdvHC2nStKuWozuzhcEaTPSyznxJPVFtVhwsjPu34NgziYC9pCGuhK4yDAfX1PTN9Hg",
  "key22": "36eYV135Xuyu4nNQUWHjJGQANWQGo1bVMYiGHzbXzFwmP6xqa2ZU4aXAD76JGoXpZSAYdnK8uDE7wMgxUTkh6oaT",
  "key23": "57yfBRBAvkTsfcRMLHsjMv8oAwD8XaYohWJ77EPy2eLcoVgeJjYi8KU5i9G9bMshnQzL16QnkTeW4yFAYUmvtZVB",
  "key24": "LoabJyEzFTtYwvUmnVjx53pS2FwyP8txy1vGnSYU9SoQfoVvukp4ZY3YjzFdSfLUJj41kHCoccBLeuqm3um1rAb",
  "key25": "3wxFtW1Q1Eae1GcvDyBVKV4AdDr5k933MwtX6ab3xw5oLCDNJY8THERWGtsbCjAetkUQPBPTBURUjcg7cbsShpC8",
  "key26": "5fLRJ141DdMKh5ZRYCHFqBCSThh4Zk42YdEW1YMPainbvmqhhyaSG5jrThcff7VwSA4WpYFcAhVdVkFTrktequQ4",
  "key27": "2Tov9YsuK7Bab1sc6dA2KCP8FjdfzKFHvd1F1zfub2Ppvoqu9q9SP7JiQ2U6ETErAM2LEg1T1QkVzDmgNisRxNvs",
  "key28": "3rUW8RXLEJ1aZPxSTusJCByU4GtTRoJwKHJmmcw8jk3AeLqBBdjpdtSBQP9R5x53vUtard9fY37hSp9yA2wtFetq",
  "key29": "5y6RbvQrkPKYxwZFhwU6RQr4uK5EVS4LwaT1e2Jua1vR1YRW73f2ReuTcZuLWzXzo8FhohSQW4VTJYuYETHELYKu",
  "key30": "4FmxynvrSZdkXKpdd32f9qtshJY3QA41BfrRWLvP3NjMo9vKL5YBPeBs9bDkUcJewZSvunedDb2qSriLzJbgsiEz",
  "key31": "2hu46jB16XcKD3bTBs9woqUZASsGN3kSdHHxV1FtQeAFtVYjMCrAqznyjFxJN6H6pzp4fVKYdxgUEokMKb5t2w7n",
  "key32": "5ZXzG4pnp8vjykj2EGfabmEkrUKiY9x9QmnDhnvT7UD49QyB2V2KteW88jYX63F16SXLbfPdjoiru6smoXha2TKB",
  "key33": "9tRGpirfpaULWhSNBmnLuv2wkkBvk7SSLpbVvi6U4wqWrBcXWFcD4JXD4vvwZs3AQDE2jxjqNY4DDLMTZm8JrK2",
  "key34": "6Ae8jn7npSit8avQD8xhcg8erSGd9b8tKDKxheYMEXy4AmttFtkV3uoYBPVzBfXwa8k3sYyXijHo2vcPq4UEG7G",
  "key35": "2Ay5F6cAeK3knb8GfvqVhWNrcZKJNfTLSwNX16APipNb8yZora14TYM8G5Vd3TN3igXEW72Zu95Ac99FogHqFr8B",
  "key36": "35LQiiqtKzQYih68gQSdfr4jJhnEjyu3cmMyNrpKbc6hUYS81Bve2CtGRrxPS4eak2vtCNsZ3Y55f13fXYYX8vqB",
  "key37": "5GbvXCPWFJaNd3EtgLRJa54xUiB1ipXYG8yWDSnrEAwpgDyp9Kzb3SpEnFqMQrwTGWRhzBJRDbfkvXiwdbw4aN2G",
  "key38": "45NFoMrFbXZfcWaTXsTuyZK3b6zZobyzUaroDULY6Wf443yei9KMytbFz6BVd8NiCb26NkhxsDhfJDJWCDHWu1DB",
  "key39": "5dvsfAmr1WiS77mBzgkDn24seVDNWWzu9J1d87EacJovSgJtnGewoh828XbBmLf197MTdqDZyLbnWiSF6DXrUjTJ",
  "key40": "47YoBYjM4XLAtjxunMEQvCaUtPRMMB9dWZwqgLJbBYbPRK7dmwZMyD11HL4SYFvHai2LMuvcKN5ZL7aZsv6Win4A"
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
