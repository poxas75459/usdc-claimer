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
    "Zri2uR6RTdnXisWLQFAkXFsbGvUm7eCv6DAGRAvbpoMuEEM2PeFR8fDGR2E8RfGUpvzMWnWMFag64YNVztKWCiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25P8Zg7vUCHNaHxN6Nw2MvhrKFgLEC1PPGY8vtQg4VMA5J1tTw161sCWW1ZcXQHW4zhnGfeP1BcTFpYM9L38xnz6",
  "key1": "46TSoZNE7hum8vHYzZN5pKuzZQExcLQMvcRp9FcpK4s1j3DmM1QFGQrzqYJnzkbmawLWRshQjSDrTfcMVc7igBzB",
  "key2": "2ruo526Z8T3uUY8s31siRjE4eDhaxcLMPFLgcrsNkEf78UxhTXo4PaCt7qDrH4C7q7M7BxoXzcsy44PVDQroitpZ",
  "key3": "2VE114VbFUn1Hwuzqx2TQcM5ZeBRB14rd2zMF3pxFN76cdu6aQS8Cz1UTmPubeib5HjLLgRBTppHGTE1ywMhmJ3h",
  "key4": "5d7ZBhiaU48aCcTXdQPxdgeuxCXPtXiuW41j6oVAdvG6bZy667PP2rKNwiTbHURxdhQZv2DAhf45iaNj9R129Ap1",
  "key5": "hf444Q81Jf7LiMMov9L67wdj1YEP6V2hhwxwTR654hMdFzUvAVotNbybC9iZiiQxfM5ewK9VD5igmRsefGNDcd7",
  "key6": "56oiccvvcNcDy6JiH5suQKKfv3MeAih2UCGCtbwEeK7jmtxRRFf3oFjYCDT9LqoP3kxtbcQv4k8QbZMLDQXpbfjD",
  "key7": "2GPfiJZKrk64ZsvMeVJJd6viRnU8ghvnFVwpM28U67ZABMBWA7P89uyVXuzY6rTj8gc5vNnaAZkJu6XJpfwvDN5o",
  "key8": "2t1WcGhpcatUhEwxfwjh7mJ3QDH1fb3Mr6aLaWHF1gKFEasirmtN2xfozR9xJS4AVwyZocnwkwNeD2Pu63EwaEid",
  "key9": "3PWaecwoniYDSgcCvfVdxeiqaUdvspNyLaRT7HM4pn9DWmweLo8SRn1eAM1kuzfNoLEcJDWjaBkLuVMqq486MvdF",
  "key10": "5kpXEmgTNu6NHEQxekEsVGbc8FugFGSeG4tgad2Nj4FSvNEjdctJBekLWGqprroFhJmsxKw3NKnsWV12NsdUXu7",
  "key11": "2ZxvuVe3nEvkGYYHwGwJTcH4Vej8itFTQndVy2KuhnePEHj85ob25Gm88kEckaVAvo2SGxQvwEY5sbq6N6KrSuy2",
  "key12": "67LmQDHhjWbhmwTZC7nnaUJxVYQ1wSfprgQqDdhUPd1aSdaUSMvWgtJrnTH19Mo8rGv9t7YvUnfpRYCiQAZT33wX",
  "key13": "3ZS9J7SntaSDGoiftj8xm4tp7cyvZ1hteC52Qsq74P2gEqN5Q1KtEygdCkNJhbx6wQH1yHfGX5edebSnmFXBrJiP",
  "key14": "T3pVWRvfFtom94xW2ae1f4wxVbp3SNeqVCRZamtQM8Lsi8ChpVWZHWEmmM1XnWy9KAt8vXZW2MuhF34tLGFZxrk",
  "key15": "3YsCi7WjooGpALW8xN4hGLa4PBcF34qBHn4d1d42FJk8WC4r8a9Bu4ZBLvTnedzS9t8Vre4ic1x9KpbB3xf2nKjr",
  "key16": "3ydzAMUhCobBQRxh9sC6EGqAjvgG6Za7W3V8A6fuARHueozZz1hAQua2ra1uVvhfes7VoksTZsBxmwC7WBj9HiTx",
  "key17": "TGHQepmvQyxpLw5uWrwqyjAZD6oPDBNNc1MXxzv9NTtJ6UbXSSPzdq9XzvXJtA1dhCvUk4XqPTHqENohejxDLyM",
  "key18": "5pmCRUjx3pLxpPgQgztve99s28M8bimaDScRFQEewp3DhfFpuD9CaXNi9P7AcR6FF1RAhjoiYsB6rbqpvnnAd354",
  "key19": "4qeSbqqwwNbAsjrZ4AhvL4twqFD8dhsBsL6LXP91gVaXEk1QUcPC3bnXD3jG4jJvtvSDWvD5LB9smZBDFbUdZBXE",
  "key20": "3HCB47suTFvxN4SeFdNgjfofbAQGb7Lhuw42biXg5cQ1hc7kRM7HAK9VzWQprArJNpqu2JKseRcnBbMNBfoAxjg1",
  "key21": "4j9KpFJSp9gaWdnL4rvWuBg9obB4u37uZsG1jHPFtEZyqcywMk2MLXN4Nowq5ure5H586EdcBB9uHWJHoCwyneKa",
  "key22": "3vDdLmRSm2WwgsxiJf7E6PtHS18Twy2GEuu4BjeDJxoKt167cszKtQR3KxcQ4o66yoXUkdaoA7AG93JXDVqC3ta",
  "key23": "4fLhFmptEaTyFDmVszwHhxugKRJGpaJChMog4Fuj2PatuY4ZFr7RJSJCAhd7KdsC9DAkGhMV5SmcVwCXqrJpopVy",
  "key24": "3rZvMVAJ1nZdzD2rjy13dmtUQWYBsQ1cjrUUGurLqFPcFvyZcUbVjVwXEEy61tiqbta4k4n9CzqpMjexowSnnLkY",
  "key25": "3ADWYHmN4ke3YDedEbP9zMBz9U84fZaKzPXVpj3tHzeeEBYHzT4D8cnds1aojPLjihD6Qt9YUFnfCc7TmrRsKmPn",
  "key26": "2Q5StQtVyyZKdbyavVD5vUVpvMn1zS4J6zys6vWoAmZoinUB61SXXhRBHysVjpNxphgQyRs6w1kXjGvMr4MqLPq",
  "key27": "3cGEdeXLsGgVBRBkAPdPMbskXJoy9NqXj9LpUtZdsnpUq5er57eHy3CfkqCmQhmczovAun9KqrPiQgJPz5xZMoRa",
  "key28": "WzjC4SPGEArFPFa81iWun3wV4SoW15M6u58vTFzwZv555N8EbPMP9C42wnTKdfRKTH8kry3ZNsg1f4K3q46xPnp",
  "key29": "4MGBeUthkHLWCvSe6Z21MCeVSazQfCTWgtKtxji1NLucLVKyRKJJPbRvTT2y27mF5JM57jrr4LGKuxHZYJBvzDk1",
  "key30": "4Pi8BLLuL7UFUnLnqbaNTKKSH7QrWB8sMKs9PP61eQThzSEpLY481VxmxppcsJLMc8XKvcks64QnFQ8YG7YU4c5X",
  "key31": "5h4v1HcLfjQz3gnKLyuoQLsYzhWhaYTUy9ntJiMWmMNMH6iyggkUqyJmqvdTLwXekDHx4t8RrSqKXCt669Zwk6eX",
  "key32": "3gNVsn6rzLcwtkEchFbBwoXRQTo5HaeKH8Vs3xLiEUqkymGEtbK8fXrH7vGesu77g2HyYimYe7AmX4iGQWVJSWnD",
  "key33": "3MgLVH5bYE1uKW5ZedB83GEgSxMDjwcr9Hmt7bE3evnZEM9nPuvRG7nY1vrJfv2C8UoUPjr2iKhgs84tBZgzwSWW",
  "key34": "5iRBy9oSw6pThd8Q3qLdNJW9v4oqyvzBUMGaWe7kn8iWY8udjttfS8BcLZnU2QLcXp792y8nuDLCRFFhNdH1GgWM",
  "key35": "3g2UyShw8JpXDXpBM8GM6YmimgtaoZE5tEgxTsCx1SN6LyEHcX1PkfLEfXSt1eGyFZgpTZjaLQy12x4qGK3CNbTH"
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
