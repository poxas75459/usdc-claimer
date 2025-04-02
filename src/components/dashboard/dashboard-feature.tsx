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
    "2Uoj518pEKSFASqCaYFxTKiefe641L9mwLNJQ8YP2C31ojvsRx4bnSw2zm6q7eaFKBb2PEoWEM3nVXLcj2UUyTn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53UPgVWJXSmDViV1uZFv1bnwF4R4K2maZTAEednevSD3svjZyP5LeaER8PR8qV4v9sq6oSXHMC3DB1SZwjKKN6Xm",
  "key1": "4bkxNjkAekVewxgRBk3jwPpKDjjWpcYeVHi3saEtAkicjUTxNfyXzVYXcCDyusA4Bcu2ZFt7rfnCQ9zvNKwiRTPx",
  "key2": "5LxuoGBrVbQfDwdULc2GQdHScLffJtrNZD9ruw151Q1Rhfv3jKTJYh6dBfJGNEyQSQ3XsVbS18L4c9gYemyp7dTq",
  "key3": "2evZBVU7fboQoeSsCVraLAJhX5xLZDTdYkM1xMGTQgKgm1tJziNgvhpNZkwHzwn7ZrfMyvVG8F7hK7xHW17bjpe4",
  "key4": "559BUyRE7Y9LdW4Xw7H5GjHSWpdtyUkCdqvQBtEeU1eVKZ188BiqfVJ2BewmFeRbCp4jry7VrJBywzZHych9QizZ",
  "key5": "2hV4ahwR1NqoTSwKsNEX5GXWHNZJ7xXNB7DAivzoVN3EeQBbB3xW685Wf5gj2vje1uRRjYKmSGMFKrrf2Zya9zFd",
  "key6": "55jira9WFQCyQGb4T4Xk1no1ZTgnVRL4VBo3APhxArhCnHnNdAx7jbAHHzraWnejzVgUC54eanqrda6tXPKKsFCy",
  "key7": "KvcBnJ5JbXjpiDCowcbj7TuwQ2vdDFXkCDmEDcksmyNChAJkFspwuWoEWwAy1hPyfXC2P9Vsk9kxEa4p7wyUGEd",
  "key8": "3h2sU3hnkBvy3rErcMwV5791v73MXZD9DN9YyWPvLNiYehNfoVRAZyPktdpMVAJ1qRZCHKrXxepmUj6kbFCb5hYZ",
  "key9": "3KBiShE28dC3s3pAfLxs91Nd1igiarrjQfPn2r6mA5zrXeErVvxuAypgZ4QXX1sAAoDFD3JwG9wMQ1eRonWh7P3u",
  "key10": "3pqRXHcJZHFv24sk5Nh2tcQo7UkTh21hy23u2eHjMCvmwXmqbURUBEg7yyXpjF7KfLQg2rKL1r7SpXZCCej9nJ8g",
  "key11": "2BBzoMt7GZ77cQrN4oxCufPNn6NHiC1bwQJ9qrWS45ccepdPHQ4CvjfhvwJM2uYYt4NcqN8pVvh66CU8AAeVSTMn",
  "key12": "mFYCKoWh5Hzw2nsWYrKJdksSEVYmVKFWsss1ki2BMqVWrE8gJMAfR4Fnqx6vtgL7vkAGg3y4aFTWQCFeomLMQ1K",
  "key13": "K6JtRBbBYxTR9tuquCNTktzJimFHFQrRJ3C9fE65DgAJBkBkvyjgK85yKtiUuYKnqobhjTMej42PQ9y3B8TMWT9",
  "key14": "2unaPFQFE4Ne23v4Pos4w2m4zNhpaiJsMX8KeMjMmhMxFK4qQAfhCYBnCxXMxyfuUjxbmeNyr1Ku9pUG639emvXr",
  "key15": "5nXSKtiCgeuXTVj1BtEy2JxFzGNXWcShcky66F4s9YoG8KMN9ezRuhpnCB1MbmVUgRGi8iGXuKNPdTSNc72FiSc9",
  "key16": "2zMqZTtoEu7518JeKvRga6zKnNB4sMCMsrd1CqwTimbzwpPGoCkc7Xjt9L9et9xdkhHWbtvFoZVj7Fv7U2onUfAA",
  "key17": "2qfNwigM7d8P74bRrZ5HznPwCcv2umezsvaxEPtBbGBLRc8tQXvtwdM6UxdCf8eXM3QkycNySXzU8CMG8HLVTdkw",
  "key18": "2dB4swaGdbkEZacXHDTAAiuUcSCkfWQB8nEpL1uo2bfpAougJL8r2Ja6LN6FdJM8gn8SEUtUqGDoqvySu6aZZ8jV",
  "key19": "2V6vTRuDcpy9jp1WDY3m5egkWHmGdUGbi985GDKhq8cVR9n4TmaKsTKMr1PoCdZHBxhRLSGpQtqZoDNk4nzUAW5X",
  "key20": "2GXa8McUtxU7noEq63PV9a8CKTxQxxyeSKXhJcvVxevBQyxPngEubjFQz38xULMXQVffdYod7GXEH2CGS1rqtLVs",
  "key21": "2hDfXe5wjs7C8jB1oahipYN48pChNMaQDaXARLA9uRnSjBxNfo8nfDUA5uMQxt9UivKo7dws94shaTJkKLbypAiK",
  "key22": "5J1hg294c2Aof72kDyCDEzKsMQhfGvtjRWvBWW7Kg1oDYc2LJbW27a5npDYUP7HpgVdy8hN2PhagLNvSXnu6YR3D",
  "key23": "3DSAo3iniNMj96shTQ7hHZxJfHz9TqX6UpH3Ldk5oDMEaM4grddSkSDyg6iUo8S2XJqpijSsnqeugbC4fh8jkiPP",
  "key24": "aYwYzQhvaR8GTQgwGY5A6wPqb2cABJSs8X9zydb1tXrEiVL2PBLLVNMesh1bADHqHpYRkhtoonZsa2KGkqRxA62",
  "key25": "3Tx1gnbMYCAhnGa4MQVbSKdyFxVt2EP8Lf5TEbQvru6tbDDNx8peUMTQpq2aY7A6UCBMySk2BZ9sRezNBdqGKLT6",
  "key26": "Zsvu6vnqs78qTSh3tndv3YccB8jcayXkFRtEJ5Yv8edyw9hbVV5Q7syAxT43y6xxRptaFrzw7wmKb1mmiRMciqr",
  "key27": "5T4nYGmpf2QLS4adukszG16FsFUWq6XbqFN6CzHFBFHsBsCfobJe4xASqZiS7CaBe4TZiYWvtpAN1yckrLeGKQJH",
  "key28": "XKTwhteviuwV6u68zcV7kup948vPEEfGKGz2d9dhP9fM2MdRtLHDMgsCSgzPnQVEQqpBc13d5oSU4wGZKc3jk5q"
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
