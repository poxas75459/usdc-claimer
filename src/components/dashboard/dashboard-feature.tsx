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
    "4jZWPmKERZUeJgbTTSqxjppm3DtGYc9veJoXrg6AiAwbj7xEUmNkaANhkXdJBhUP49xmTmbR3UK7nDqfdU9ovT2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CeGZTjpTssGjEqhmcqUmSoq7BSLC7R79M3YJ4vCqahkcAyYqe7Jn4aNQsX2h9eKiuYsXhtZCA18inWo1gBxLns8",
  "key1": "4v3CnFWrjy1jMP4NqNcHq3j7z1jyCzUQZDSFccqYtkUFE2tU6Qz21q2LLEGj4jcPFLUhdeCvAQwsNVzZCReQ8pYp",
  "key2": "4xzeSWtamA81TGaq5FsZujujFM4Mc51ay3xc9k3Gt25TG6MYyQw7r7Hih4yJ8iE8XGpdYm67Sa41a3FgkMRSJE7q",
  "key3": "2SW9kVLJweg8tUanvff4dPXy72hhUySqip8zrypf9B4aRqBZuGYZk3tsEiv5zE8vySxxNfGm6kPnY93DXRo1o2HX",
  "key4": "2k8Cd42WyW8eQtjHFjMtiy1e12sfcdFhMahqFQBVG3SWuXNKU81PhyowbDXKr5ZMmuoX9d2sTxbnCqT5JcryN5W9",
  "key5": "5H33mYB4EjKkZm2yboY78RYjTJPuKN1TCpk9aaWk1hNkGHWN4PNJ7w1tKYFuza2MhGUocpAUF35TZi1cXbGntBCv",
  "key6": "4CcgpBFRWy3sRD9vHvZe6srewp8VU1aRf1NERTc5JE43ieRuWKHbJuFj8vbWD31Jfb79htJ6AGwZn4RxKpB18BhY",
  "key7": "5tAZMia2C1E5fcfhnQbcV35fwiXNhCazFAA65Jtgonqh1o6qXQMw5YybREB8RqfuQDPVkfqNZCBSXzWh1ygPMhkN",
  "key8": "63CiExcNJjvjTcGxfpNHr57hQ8sPB6Tb5si4wG9PDcgNqjjaGncAUzaG2d4PRK2HfMZahBGCtEyd3VKTvogRX9is",
  "key9": "ZJwKKQW69uze9sRspeJG6y5DSUj3ZHLYc3xCgcC3w7Vj2JnQWWzMVEby8C7yTfn9U1FL7rRaPZ2DeRinfGbvhs1",
  "key10": "2PvEMLSpiF6nUhpNhTw8BTKp897pP8o8zedFUhWE8tuQiZnyX2DyrA5dBVZfP1HkMfd8prqRKNSjTDA47cGQUbc4",
  "key11": "5QYXWAeLvvJ1KpYvkZG7m6rcRiRD57xZFu5oNeukwaFBHw3HFNgxsarFLYRhqHeqnkRvSKLUg1zwGuCHr9XCc7kU",
  "key12": "4HiNCmW7KG3QhU4QD7wTvjsqttLupcQtNAbF2sov4gxzFig5yCHLE7NMecb9YaPwzNNsEZW4LneKTukGEHsDh8VV",
  "key13": "3vTGc4KkCVsU9jGXKo7tpGLxup32oaENrMwZurcoH4Ssmd4dWQq26qw3mHdNjBGoJoQbHx9QDPfjruiFdVPXLRY3",
  "key14": "2eq4qH2sbQF8USKj3zgQLkGQJZmyh2YBMxsP8VfswxorV8ad9vGZdfFUa7JgbswmaiwNmi9qGv5NQwph1QyS6ajM",
  "key15": "Yq6q7dJi7QMyTYchGS59gMG2DVXiuMCs4yaEA3BS3oydAPaQm8p31eA4dKADtUnh4ye6L7vGR9CU1PwaU8UpDPG",
  "key16": "KzEqTsvzDgxuJosj12LczLp9ji9fGrcXFfcNt3iJJfSdoVxytMokVs3RWq1cVCEeJdwbv1DMBiX6wZrgnyGmYrh",
  "key17": "5hFLmmULyrctxezvGiwKXXgGf3BEk4648GW25x857zbSahHzCwXoFP3SnG83HoSHfhZsKeJfsgm1YUYtX6as5uVM",
  "key18": "4mQDcmUkvmRpj5eshU51yBbRzZAWYbGxfhWjQ2dqigaRgqf2S5nsbEMhcxv9XCYMJiiqz1geoMxQEhNRn8sosEeu",
  "key19": "4WYSxM3deJ5kS2pA6L753ECp5KdgiRNPeMusS8umAqHQji6pUT83GKBZXYifLRm4kwpEM63vAVLhvdQHMdYAbcM",
  "key20": "3dsTUcs5nsoYdAjvh3j7Pw1nfo6B2r3azBPr91G9fBnzonMshLP7fM3N6Shdru8hZMeunDphUU1virSbWPvPLxde",
  "key21": "3RN8F2rDCohuEYg3ZTkgiyKnQaWuQZv29zCt5zWzKC2qjwt7NDCAHFB2fB8ka4kN64SjnBsz8h3AqJSrHPZEXF9e",
  "key22": "6nhNsLTMSSxDL1por1UBvMT5KfanrTWydQJLXuZ6PjEGyxr6UUtYGfEceaRrKybAGsUepYBdt58xo6HaLCwDwnD",
  "key23": "53nRQsnk4vWCe8yfdsmy8Mg9cWsErH9AofY8CUdSvFEQaYnpjcUJThKquj5Tm77X8JBuQ6TtMo4EqtPAfkRwBY1P",
  "key24": "5QQeGAUchrHrTGEqswEt5LKDyVx6xzK93dWYJDquniYKjyYjdzWu6C7L7UY9QabJpfzF1y7ieXiAPKzdRbXmynau",
  "key25": "4nBoQsPqaCS4JmQAzJvGG1FfBDoYvNmKDmEChRu3vjd2yN7XxXHcnYzCQASedAa71BgNCzkNzgWnVCgx8vKzinvE",
  "key26": "2cYBspEat9Bu1WxqygivDFuYZQrTbY2XXoB6SebjUw2Csqx1ocDHsR2zeTQQoUDtyWtv2TAApFg1T9xTp9gJbeZD",
  "key27": "4cEctNpfrDdfwM1PqXtWKmowsBj9c9C5Z25poVvAS2FabjxMgs41FNUH6Ngctf6JU1RBChn6CMik6XLrJKZeFssV",
  "key28": "5qV7BNJWRLxxuZHPEEjZ5irU1KiUf9A7xmv42YkARhcaSyoi6kFVsH7G58YQ2C7rx24nLzC3BzNLjHtjtgaZMM3T",
  "key29": "4Cr6xSz86fhQtnpdAk5iotJZfY696sTLH7gSrtVkQbLhc1XxJX4GwPKTNkKPcbkZcuzQgf3CLjmNzvp8TCpZ1EAx",
  "key30": "4wkBJsZrRWJSuUYyodrM1qX39Cr6SVS5TJHP4Ez7J9VuPMscVCUhwiBYhhy8aEZdPp2piKaFaXXdKMVrK2TMSbgy",
  "key31": "3cSNmM1v9ss1AMAGQUouHunVn9AyoKom1aTt9aTtMnxHt7aphUx3NnsvyhDn6iCQmqnJxUdXAwTxJ9QL2hiD3fia",
  "key32": "58cgTv6ve8ZRUEgTCsL4jbYNvYjvo43xt7YvKAdzBLvnK8Mo7tuedNV9EUy9Eu7a1aMbsSYrJs9vYEGDg8o3T5hj",
  "key33": "s9qSgGjssK3VV186eZQAJHwtrS5UAtgnFXJXVTNyEDifxjvkipyQFck83qNCZC9MCTVi24Dby5HqTGUKBBXnrYW",
  "key34": "5ZCwJvw52WPHajC5srup6CGvzF2FkcSv2X3BtoYiV8BEhMhYwsEztGfDLaeBHZigor8BViPsUDx9UhuPaU6UWjr1",
  "key35": "4NEgu87UaVt3vYTG5Q4NKWJfeHEHt93yjeTkDF6aCkZjuXJpx4WbqPQoWx2Tj2a2ohSpyUKfSGLMtDn6w4VSK3fL",
  "key36": "vxgcLufBrHTNKHKx2zW2UguJj8HYiFFnGTfvpXJ9j4n69QXiESw5MzzmvmtLpDxNsdQBmb8Zi9QH6zqFWJWJNxW"
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
