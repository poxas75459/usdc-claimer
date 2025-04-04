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
    "4m5ZGjXZQvfJR4CvYciVURz2M7fif2oNNAvhWcpw18EM5Jd6XcYZbsnroAkxcopyZtLmphSDpGFeNBkzSpymKEjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WvtHey7wpzyUjVaDi9T8BhJYLdumfgJhN7QfgY8LzJuyk7B2HDC711uyyzVXeotormWuaZZSDqXfBqLBArZAgtN",
  "key1": "4aV4UoB26KJav1qmENhSNVKoGsgST6p9Dd58LQD2GKSU1hXAZRjrkKGGi6D6NS8iNd5SfX6QtqFYAbk4rSceqSbo",
  "key2": "4m41w67XDNjX83or6NF4bzCpLiFxVhiCxk3ehqGhUH2BiF4KxcGcHxGmQL35Jt6wrwq26vVH3g74KHW97cJKEtzq",
  "key3": "4uWsnrbN188YgioJbpmbFm8E7R7eq8WSDwUJANyFM2taxx3iLGJgRkNw5FySNYpb3fVS1z7A5xaf6p2iUGMYD9J1",
  "key4": "2AMRTA6ts5jPviZ8dD9jmsDEYXHVgLGQDn85kiFkrGiPvSx9xsN66XFetybdhQh2meKRsLGGT1Sm7DrQHhZs4BB5",
  "key5": "2Gu6piDf98oFCDNWsHvcd1atBVDjyRBD4w5yygYuWRVfxr6oct4YSAeFyqQfP8JfgsFMpwEyG6poqimWmkB3Vzv1",
  "key6": "3x8CTebsorN3GoACoWy97gFgq8mLjs1wNaqwAA46YAgfNTcoxyawLxm83KsnVNbLiCfSRqsivRXtBovnQUCDWP3Y",
  "key7": "3JAcMz7XcwNJ5M2GyvUdY9L5QkKxj7dSqCZWzp7yRHZSPfVERnLBomRtaYmDGPBsZXx9oicETEf762WPJAGKr7f7",
  "key8": "3P6guPjDm7AgqPx9PPpkQYzsvU3PNDddLjQL5BAsrZK66DWNN4hWG3nEAcaZ9bGevxbVpHCpnmtt9Ph9trDsg1xz",
  "key9": "2aejWAU7EohqF4Xy73cR5veD1K4379Np7jVSW6JrL5PBb8cj4o4suBTowQ7Ck9mAw9kWuEc9WuTubyjGKgKMkSXq",
  "key10": "2PsAqCzrdLqwdzT3Yub2cE14HxxxccEBFJ8AZaUdvgWyZST6EJd4c1T4NGhi543jGAePxJ54HrRaP3MdVHsVqeHL",
  "key11": "xgFQk1f2e68wvjcSVjvB2Y8GGY1FS6b8bo6hymmWYkwQWazwvWB79YRdo7AaBbd3a2m6jXoHVsd9ycbvn2cYnWK",
  "key12": "4oV87i669hemPJ6oZzs534ByW82FgGbZUgyANwP9jvHC2gH7JTsYNXuJwgE7e2JeefBpZ7CsVCyjGNrcdvU7i9h7",
  "key13": "3WjEYUHgqs6bXWyRZXEymAhX3UoeNxQ2X2BsZhvFS9kqdnE7bFxJTZMetc9oaHKU3b779CDGAmkfqWDdEp4Hn8LW",
  "key14": "3K864XWF1VWnd1sPcRWrd9MW5hhyPPPQsR5XRjFSbCUJvmHCy9Z9T1945uCvbkz4TXJBm15WmCYL4L1yHXyaSdyV",
  "key15": "ofBz2CUARyK63N8Ssb3HzLeC4K1ZYesa8736SjpWXRDdho2d1yBfc7cqnv1E4fPLkLDDxpHCgvMnpWZTcc8P52i",
  "key16": "5pvHyNSryeZd1vrNFAiUEYm4T9JZbLASA2y5Rh39U6MfDe3vmGA8N2qLJV6XAXVcUz8L63PwtZyaGvqY3DxFuBGK",
  "key17": "3TZGDrsoGGULNhdVqTHQsWe7mp1bjQ9JP9sL6EnCV9mC2WAAaMtSbL5p15RgagZcDJ4JWeKAtmKbEAYqHJ29wtSq",
  "key18": "4N2vgZqq2n34DanfgD9dKWmJ6A2HjdxAbpgQLFLgiSfv16eU4mJKwK34mLYtJ78L3GcBpxMR3edPjpt3KtC4ReFm",
  "key19": "bdedpGFaCJ541j5qtYLUpVXMrFHX6zCYSfd1xFaTqi3JXNQmPMhkcFf8aZ7znBuyWFvT2kGG3uH1zXzWCEzgbwm",
  "key20": "2ELdK8jLCrq8xjxc4S4VgYjpLdZGFWGqqGJZFKhZmq5unnxTYxfK8V6PeuNursJwL1QLTyMvigxyZhThcw9m3NFG",
  "key21": "67GEiiBJ9XiNEk6QCtiUSVC971Ww7J4BKxsdmU5du3DyLetNKhQh2L3Ku9bfAdTPZWxmgtkqvpmGpVQsG3FsWNWb",
  "key22": "63y7dQybYYZ9VqzzN9Ui9CBEkkqxiZUDh1DWgwzkKnVNGBvPUoRbp3jhvqvoxWnQZFTLKyNZc5f99sTvXbjNw4xv",
  "key23": "5uhUYFoPpCywa6iksn5aeSnLPmQ7UwyMAkgSiwqxX4d9myD7XXG7nSnbkRthJRQj8fwjtWfDaY7RirUnZKK3iBJ2",
  "key24": "2xZydNp6GmyLKpYQN7EtuRJcxSQaNQQKRCqyYvHREEuZ5fAWCefmRkSesKDBncTTk7X75XizP7P8Nb77UiXwyv1P",
  "key25": "jnjkZHSeVjzWvEYYcXy7ZiJJn1MZQzym84x9ZZrq2FLJipc3AZ8qFNU6zGGrba9aXM4g4GNxTNRhr774399A4og",
  "key26": "2vnBeMwFHFyeYxrer58rAELHe7ZCg6oRmEyfhRxFJSGVeJu7GyJfxzJMXKJ8zdFtq5cyhtnMuc7obC2jHfrtRULw",
  "key27": "56WKk5TbWvwtrw3rv3EyGuM4iDV8QdmQjEbm6k1Yszfz9RYKKHLCkqqDWZgGgwgpw2M9WqF6wjVZ2nmjGDiWhUGd",
  "key28": "42duHTveJmcqag48E2NkE3p86ESZdD7LaLKtjqKbb8WXZLESH9WHq2koMS6RhoqXbfdGDNNCvLeqm4jQZpEzYXmN",
  "key29": "3gEaWSWTg1GDupYKGmuimxGvjGv9q3TrGabfP5Hd3BsjuRPz6EDWHrkKQvUZZJirGJ8xiGQPYkWQdctnCZv63tEj",
  "key30": "4c6aJWvGktn296AERret3ZGJV4RirwpvN5stEnzWWg5ikqJMuFwSU6VquvbbHzjQc1LSiQ5FYyrXvAXxCyp6zpvm",
  "key31": "2MjUdb6Uw5tsefp86fvs5sRiU3Muz9RpjSNPggTMGoV4JwVmF8LkBvg4cvqdbFqUrzL2gL6qkjGg2By1zJpTmWeP",
  "key32": "4AwbNwDA5MKcvkDJmJ3jgZDaDALZ6VvtWszGcFLRNX9Z1GKUq4sPCP3Av8CWahJ9vGwXLirbvd3XFujRbFfyfGqf",
  "key33": "5m3w1ytaV45bGcvbHu7fZXgYtFmX6fSpsUFSJ2UdpjD4NF15ULMKPW4P7JzccLQfY4RB7Q1HpxbsCwyJq77cKYqy",
  "key34": "4HGdedpVRTyML6A84FsEp2jsfidPUQFcaFARoe1JFcCpnTXJmQ4owEUs1gXWCtCNo1o57TxQuCo9zm5mZsdQ8YsJ",
  "key35": "51ujd8WLyyYopFZNdXvMW17W5wvKBwhyShJt34F57zebkVUybdfC5xCint6xECDLPb12ZhbiRiKZHaRxW1jikn4s",
  "key36": "tG9aS6dvSTHDHR6Jvra8VQbUfB3dqPpEqa3D3SPeSRfenuj8YfKzJor8RzkmgZ2kNUhEL3uTikwPRRnmAG7CHXz",
  "key37": "4QNNbhnuUfkrkbrhJ6W2eGopkEdzUDHUw46A27MrQnUUDHu8C4ymSsUKq6o688VyBMAYwWjguaJBfjnixE6XpURg",
  "key38": "Q2nf1sSVicmwpejYq9sxtCagk7bWHwUnF8KEXNqn6Z6oijxy8DKAeK2rebNwem7V51mcya9pKyzGEBUq3hzoqke",
  "key39": "H46egqv9EndVw5Sp1o84uFewpSX3nQtEeFwuZaq4KKg4pu4U9qH8ffRDSxiviWsbfKuqsb9KCZH4nmNhgCDGgvn",
  "key40": "4z8KNf2MNwGoKY2obydTkSjLXkBeCjx4yRaNaijixcs1zEhnohLvw3F88qVa1LEQj3jMcZXY8VEo3CycJmYfVXTE",
  "key41": "3FGycKK3QkoHGqn2HRVBnT5Uto4QUq5cvLMvUdCM2tGBENkyM9p1abmrydZpC1HxHW2qukm6D47eQuJWWgGs4fFV",
  "key42": "TPgfuBPuvaPLncTf2nFNyXTAChai2ek9G4d3C4VKH2fTTTPZA4hK1QAceWiLdTjowazkGBJHz9kjvi79atGypDD",
  "key43": "FYrCjMS4TMd2rtwgoFeemdu1ens1emPc4cfi7EssJTidHeCpZunC7j27qtvpu812ndyEfE8wAP4MJBbKfED3Cjr",
  "key44": "5V832fi4nmyYqozjkJksJcUK6LJUZkbYcQrc2Qm6xxTNGeZNEqZafqZuVcQr8zUgQPeTXePTdXmsG3bfx6YeNs6s",
  "key45": "3imVGDUy8HGZqXXVaaSNB2K9ynodL4KRRGm4PqtKTWKWAh1eWPG9vwmc6fbk3ryH1rPXwHiXawZVBofjMRCek9jq",
  "key46": "4xZcX1cTH4g7bsZddKftF7ZifYNtTjUd4zp119n8EThnRV3Wi1cGJd68eWovvSyS2bSvrLSvtAbLa5aTfwAo6bMx"
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
