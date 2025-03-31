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
    "5GN4S6pS9N6NosQ63pfhurFGjtBm7UchHUPCRJVVGCxGpSJ21GoiTXud5mnYLLAevFSyEVwdTRTBC4Auo4h3b7M6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e9rGh9kfsVnmxcXSUEqZAX3DjWGHJ2cxRAhQK17oM3sXUDCL7JMh82EfaKmRxfAgvkarNQK6FT2G14CQUzAHen3",
  "key1": "2cMJfeWgvARcDLAyiAnvC5U3zt3Ze6VZgc7E25GSm182m4oZe3jGu3XevjsRMdD69whfi5eckvC5HEANZjvUpJiT",
  "key2": "4bkaU7FFZEruqFu87yBEq81yxHezG5XPkUDR7yX8cfRv48895JB63Kk8WrD5e6W49qppTiZXm1WVEfU4fN9tYA5A",
  "key3": "5Jq7Mi4Q6pTkhahVevakkLgkZmU5KnnGD6J6yJvqu8tHMmYr8i4V7TrnJAZf1CPnqwUm6jYYKMrUF1Mji1NoMt89",
  "key4": "4pdcauC17rR6g5G9kPG56m9g4d6NX4fTh1w7AhyML7XKNmDTW9MqH7UnN4wLq2z32aLeCVnfwdAjuB4HhJCW1hEb",
  "key5": "5d26tZ7G2mdWjKJuB1xYAZ9bCpauZv3jTGDRzVN51XxsUuGocHBeU3mFsNMqsuCSox8VXTfpvPFnRVa2t6taEGxQ",
  "key6": "5ZdmKFR1L9E4512YAj964Es156XUN7Vpa8t3oWazZS6PKQKQgWEAUNxEVkrtRCK83KTM4PrswjHXEcHGrau9vzS5",
  "key7": "boaEaPN4uySyeYi5VJeuAFuP6LuU6UCTqRxHVtSVa6oTxBw555cAxmnYccjEf9UCiStdF7JRRSTgkkCt1mKYzjq",
  "key8": "XnXqDG9Wwer92Usur7FRhQu42jaPqYKapdtJ6smbLgBe5FiUgdVCctrWox4CjVLDrs1LtFJf7FvKAKA9LwqrLin",
  "key9": "2esjRCdeUVHvr2QhwES2GgarSYAJHxs1cn3Tsow1niYEcVGjhP3wVNr1knhkShwRrMQtLPfjZocTF5NgrKwALUg2",
  "key10": "5rXSpQCWngEPhHzh9EmsQRzh9G7RP2NLXdyAuwUijYMPJCkYLCWjkGDq6diFn1zZ9ohm1Ga9fEyE8LcaM6rk9uNg",
  "key11": "4V9xQ9DtHzSzXH6Qe69FvUo7N2hvMCzNQsXjcG6SgSzdPqPnQatmwrZ2X88qxjWoJcTYzPVt8DuPUAf4KPFcrMUn",
  "key12": "9PP83hDXQEVB7G6mfNNYsXdF2RFGDpUCS4N3whwW369hdqp4zpUw7NDV3fRi1V7qQCRehQRgo82KzA9WSWUAmQM",
  "key13": "nu9LkqVV3DbD9v6MwKQvvevMqdZ5WKa6WCVTqJ7zrjsjAcWicDvWcyDzXQJzCxmGTLBLqgKtGjae3R9PLgnDSCk",
  "key14": "3k9JYG7KGdJ1BsrtfXv1TutJnopzTXp5Qitj1TqZh1YTqfRbnL3mpMRGydd953rdcwAPBJGPNsVRxGDsraREWSxf",
  "key15": "4CXRaiupN6GM6MWiAgdZNZkp6bdjv1aPh6jA3adXN1brbs6qwLUxBzcXQa3EuqvbEoYCS1sDp2LXX7ymhnJGozAU",
  "key16": "R3V5SRAHvb7USNgaNQA4Uw3uZFw8dJbLwRgzq7K7kweT7YFtmeXhZ6zJBQKDCBxdFzPkfxDu7RzXqrMChmKLU7a",
  "key17": "28Y2j5skECShbLATs8WLdy8omrNdj2XtjEcwCrnrZVEP5gWqVtgrtoD8B8Aw3FVNLr5eQB88B4CfgBRs6WcvNGub",
  "key18": "4wg4EnDNAHN3q22P18sTDYSxyvy56WQkijFSZxzmKyE9tSkWrekJJoN5WBp6gu1ohQjLKNow3dtTcrTpw7jMFLmw",
  "key19": "5nm2Qg37M7D55np92UVLg1SRG3mtUMzUaDxKq6eDQy5dKbKYtzuD9UjZXFVUjKdqF2FTi8L2iP5gJunD8HH5YMwM",
  "key20": "3C21UVqUdvwNbkv3ruMAQPaS3dNrBQabNzqozALXsuotTGdHGMHLYx1Ris4oeLzdxgKkMi5CSurfz4yBEnqgzKj6",
  "key21": "sS5qVf8bCnBJVvP5bcwB1YDbYXCZF5gG8eCBU6xT4p1szRjYbsLi7HqDP2xkcqGothhVDkp7VkkHZvivNqAu8fe",
  "key22": "4m7VspvK3s3bCJy4rsnCRk2T8EAENv3tzsDHAnBu7LNKyqDoowTGfxwH6pQfLRTMhMx6ffosoWxNcVhnzXiuQNGp",
  "key23": "5TpbUGeALV8u6MzmNQoyEKjkFmoYomXMgiDeYinQgtsFzgtA5qKLFabxHZEr46DApKTZW4QJQZhTFEm8kJMhK8EJ",
  "key24": "49paV5YBuaDjT7CUFnvm52CaVCHsP2zY3aAEu7ndx84wbC1VhBSSSDsLUvrT45fPVo6SWdPsbT53yXCAwNtuikbg",
  "key25": "5kuUp3WfDKYgpk1iFyDBiceJA6gEdRwoLfF4QM4QRUv8sC2ePPDbNegtghpXped71GFi9WqGkguF7LRF8ad1DEXu",
  "key26": "5VBW3xiRWj2FwwrSDckoDmmzuPmLeNhDiFWEUtfz6Tk1LB86McE29dKHR289FDyynELSkJ2fXryVRTdL1dDReXVj",
  "key27": "5Jx8p6sncMAsKasTYTzRnQuNXc98SW4qV64fwnUB3MD7Ahgkh2d975nDFJ1Bb3RMM1Y9Feihofyjop7KwH8MYcE6",
  "key28": "655XeDaFDbKaKJXX3M9hqRrnPGiYcgMwD4kyMm3GPLW6y8Ca4dtWg8JALC53TRCxZn8ErLjKponZt91fQ2QpR6z9",
  "key29": "3B7NUAQYRKGMQvxrNAY4tPAkEitPJspawTtmPrNiyppU6ApkWrZHuoxQYD3i26rzU13V4vED8dh7kzGqDYbnZWCK",
  "key30": "3dmLT9YguUFUZto7vDRVyw4EdMaPJte4DAbAvfQySSs7dosTL6jTqwhtGNaMJb9E8AQMwB8dfMsw8U8GpfVqEvxW",
  "key31": "35NE5oJF8omRgTT3vE3nodkpbnmzAR99FkKqDSckdzrZmV54U2V3agBzuiafF9YBogGrgULm7FY1RAh2vuJ7gDTx",
  "key32": "4RHad38Ksb5J2xs5st65xWJFcbnUMiX5HJJn6WpEboSc9G5J7ZNpyjDTyDLpDiy2SaHUq3uuVsoxbM1iYHFSrbcR",
  "key33": "2ZEy73qYYBsxWkMdfjrvsNAX8Q5FeuRMb6RhRRE1vy7LReDBG8cQfJ4bPCDW2B8bdGbvaM1voERp2Szw56vG4oJW",
  "key34": "3TsMT7CS53Uf4DzofyWoYFqHuBdX1rnYJYmRmhN9owx8nVEvSc8TekCN1p9HJ5d5zyBTyw3B1LzydJWPjrXEE6UM",
  "key35": "jYQRsN8S1Jugw8zoMpzyUDxfktgjtorWgHBCnNLUuQj3xKddjNYnYfFSTiqmHeDXMym6rpRP6iVwqv1oBhERedz",
  "key36": "4Y24QviUaapjmtZZpB1j6odpheWoEwzDKu86inv8zFcn8WqHv4yboQhVzcZ6nnmQ8poQ4Dnv9g7hHq45G5rhnBdx",
  "key37": "4iNWefF6ofxj8dTUUDN2i5i2HZn7kh4AG1yUgsSKqcYqsasffEeTtRfX719pTcFfXNz3CXFjkWwabUUHgdGon1zw",
  "key38": "3r6Li3BbaQtsegAYRHHMLnu7dUWbVLfW4Jh7U626SJ2epmHLsQF8TZWRWdbArx6kji9wXC8xNWKyNzavbJ4ukKmc",
  "key39": "P3M5qRN4YutwTqPb6rRiDKarWBAY46SdcgFNRag9rTtEkRYC5G3NX3Ch84dikHf5HTqNeBqfu9ikwZXfxUYu28x",
  "key40": "643wG3PikNHdfwZr3Maz5ELFY11hBwY4z8vAVnBd6gpxYCLrLpQzHX1pnYM3hQnnZqhBFmmCYCyr3dhVqfvHQUWq",
  "key41": "3jz83EhryecYxZfy9dWioVHs6hqZbdwGm6UafzW5MhSJ8c3PGsGDaue8pwYaJhghkpqguBxQXr7Q7Rfwr2o9imY7",
  "key42": "5PhxctubLhNjQwKgqy8moNLM1N12Auh2fcsxQFGo2ffT6qQV81k64mLMvU4b4n7euNoksnMEgtaA7ZWefriRivVg",
  "key43": "3ewYySWmxwkTcs5Sq1YNWq8P9sxXGVw8yDsYkesztJiFvKZn3qZx7A7fmisp3Pz5SgspvNN2ifzQfHF14S5TFWTL",
  "key44": "5MetqWoCraPRfVqvzicdffC7inC4L1Fix5i2VDAbAHSjWM1SRAGzTaSRs4FjYwbEcgxhonZiLUjuwHZrCjsUB5Ce",
  "key45": "ojbaaB4jaST5fdRxgAaN6Xexn6Xrc4zkZ9jWULoMhUAyhnXV1chWmonpfZqPpLGhGpiepnPDETmzjEbbSRe9rA6"
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
