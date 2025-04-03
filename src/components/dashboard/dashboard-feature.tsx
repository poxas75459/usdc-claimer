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
    "GGY91KgRWZ6dcAiiHkXTLTLmYjADCSzaCMbQvywDT4oLhgeZVpDiwxbjgPY5iJ3TC6hxTeBY9vFsoMaY8QpcdRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPCrB6uvxPEVp72X14cmKSb2uV7Dm8w5nXMU2RA6spzzYRkwsVP39wJNaPp55mMLXaM9ktunNzbCKfeBNgoT2pB",
  "key1": "yf8pSfkCepPDDKDE939xDt48xAtqDAR5ehAtbkM9FGAJftg3KLM32SjvskhBbwSiXMux47pkt8n26oiDsShhR44",
  "key2": "QJBChL6rZwVTuPQy9z38PeyswrJkGx1dXVejF56WeMGZrHCDgaydQPfngmUsNgWCoMFfAGgaNX23KHoChg1at4U",
  "key3": "39vQC35aGNqNPFjwt15mPe2xXtUrVkRRP5QNsRaDexTVTRdPrMWNUS6E6nk5Zab4teeMBiqTNbBaAXqRMp5Xu86B",
  "key4": "5SftUFbLaNxTfzMkY7ZhNiRgfqh84cpWx7ed4DDEoZxKSPyzxcuZX2fru7Mu7SmB5AQLJWN1PkGKYaGSNe7sXJq4",
  "key5": "4oCJ4TpNKJk1CkGL5RLs2DQ5aVoNMB5oEfhKjBHGYZvcAex2Ug9bk5RRkX44ozZfeSPYBeCxeVV7R7b228jRkgyf",
  "key6": "4qfvfjkTQFijFCV2GgJdBSxDp26GugVhf7PBRj5GxKRcF31jkMGaH7ajAUifverWDkvb3ywjsDqDFniBzhdVPqCm",
  "key7": "5ZZdSmF3W4X9t1onGSMXYCnV8qyNn47QRJY3EYULg9wigXVk5aADBtZciLfLy5W8gyovTFggAHfbiBe8iDxhTw9D",
  "key8": "b4nRtYHgpnaDk7F6pdXiTVnC3dhPjudhqU7nbZC3krC6PHDgdnBgmZ8oreZVcPNv8L6KXvVtYzwrp9gEnSQ17yn",
  "key9": "4gtjPK7pgiGzvE7BhRqSDSeaqJFpWGzAy7dYixCWZTxLYGtV31MEqsYJZA9YY7nzxh9BropTAgdufB7U99y6aMtB",
  "key10": "25mrHduc9bNCCM19yRd7ZwpTeoCUmLsdPACaM2ztdz8C54RT3GLuvG8R93MPYCXVFWjEDEi6zPK758wWDn7rGXCj",
  "key11": "yrda7jUuD7bqX8fiZbH6wNSckCEREmwqCobR1RAuSeiLUbZ2w67QH7riRCcjcm3bSRPTxSLVt9DWthmikm27Nb3",
  "key12": "4TnMGgQBhj82PiGYDnHm8f37W3ojNRKYqAWmdibP63u496twCG3vthB3EUs5dPSCcUTkuLFXAWrff69NFHpUr2S9",
  "key13": "Q82M9SP8m9UFWfX6no7r6A6hKSLXEXThcjtmgE6jcKMm1TLveJduatVEqd64mG9uEJvX93szR75QCra7EhVgJNm",
  "key14": "2PCqRhL6ea3rn9X97Mw64MhjXeGFZp3vB9Fczegu6ctZhxAGGUSYK5kgckkNZNLQos5Sbd22aFXk6CoGJsPonSRP",
  "key15": "5KApcHP82QorKQFigdtE4cnWaPPTKYwu6gHy5FcThK3zRc7ELx6nVbk5NctQiiEXkN2fR9nG6UM5mRcQpt1MCaKq",
  "key16": "QgfPnHZo2Au9pRAxiUDhkiEYx2QSwQjh8gJdh1vYWShxKyerihPLD4w7eNrWciYTqhMz4LzDVcWKdV2TQFLfEuU",
  "key17": "3maDxb3MKMmtJdRHPHgbsAHZGwAY6rPCyDxXszmXWMG8DBk4yUdmcBR9kx4j8swubtwprgjNvnCjZiUogCmzyX7x",
  "key18": "4aDrnsXxhTZpqmrpetCjov6WRWy1xwGVdr9k6hHnzGpY3UM7qNyxdXJWMktqReacsJMaMgx2JZBfWk3ZtWTmAYLM",
  "key19": "2rfficByrwNe3K6ZrbnheuSLoUm9AQ1HfukXYWAJpiJHGPRQci7JRno6EruuE9qP17e83BsP9Fu9jTqboPadfTXj",
  "key20": "BCZ8kjMh8rrwTkPBQjzUFfK7FGzf2zZKKx4m84uN4TSHYfi8KLEmLVdvAt739BSZTXej4n2kLDpYYMft5z7Bpmd",
  "key21": "48uj8MXoes1Jmq7jCsj9KzGqpGYzADM8GbQRNwENa6TDQtLtCjdvh12VhdJVvnANkVxdX774hNA3mVWg4ojcGMGB",
  "key22": "48h2dwoStoBvGs49QWvJ7CdkuFJH48SyvgzV4vYA2wsqFNG9dhWGL1J3bkJSQ1oa1shbiXN9CJLcqz57hGAn9WyS",
  "key23": "64iXfXre1DU8VwYGzrigC8BCnXCLg83uZK2RqiigYcoLEGbk35kpgcU26sMV9G2xc5Td2iyKLgdxtuRc96ggJz9d",
  "key24": "471kjrCXixVGsAA7hX53S9rgCGvmZXtVkXPQoEQGNPCM6zw23JCb4frdTYzN1XAaaFR3XDxK4izF6bbUEYe2eQeQ",
  "key25": "xwkcbg4CBP1Bw57Ev3H52Bj2dMopJeXyXkAeHrvwEWsGhFZk1dUwa9v51fhTjyb7kyQV5GQLMJd9aUnCSKqNFUG",
  "key26": "57BPWgNt4KY6xAN4H1pgcii9jNXkBuFbxbqxRdfDGnnT9pdKHh3BSpR7SG8SxCDtkWdsi2o8LXn3BkGnHrVm6ZZv",
  "key27": "5g2rB5K65qyWcCK4AnPcqm9KthHy4NLftQZwy7jrFUs12EqyDKy5BVXrxzWdeZEvzXmVdBuz6NRUsXCVNJb9JEg7",
  "key28": "VnoUio6yMT1E3dC6gU9CayxtEzSkKnsyT7pvFXzB7aQmVnmyXf38yEAyCuzX5xntGfLgAB5uiNnULoehLZS3ZWE",
  "key29": "5jJd1umBMs8bWnxpr6LP9j6sVinCnPpf8ojdRFAjURCjqHddCtHWmsUhcjwy7LfKUvEF6CWzjbyR4dLrWQX2fDwC",
  "key30": "5jmKMhFPpmmZDFBKg1PPoEfzjva55csZqe7AetivGs9NJu2Mh6p181kGHEkBusRJdzHzDT4GRSkMXHF4SFV3My3p",
  "key31": "3A2br6iTdF8eCughu1LNvixcdLpzT9JL52qUdGqxoL9b93TC6vsxH8JE88TcMRxygNKBdwKXqkeYyn7fuN5biQ4a",
  "key32": "5dX3fQkd412yUTeBv6tx43xjXttjYZHVFzJE12HVRUijruJXPhsxXzEYJe87tvvRR4iUdMguhMCEbVVHwhUpmNfL",
  "key33": "42jLYuxvAkLDaPoht1a8wDteqT82vy3xUbFPqaCsJ17Kiukfv4i96uaNKE6ihg3bP2UhbPi4CZTvoeNGT1kHpe1e",
  "key34": "5LddrcKenskqsijsv9bHVnuW6vPvaFZaXLTsKCVbVqe9u6cCLYc8514VU28LMQeSUfsSBVbZHCY3WzyMsZi6tDj3",
  "key35": "36Th82YPKZa8ogK2PPjSkb6yLEzG2trW5B3J7ALH8UfXp1i9mSfy8GUQppvWn9sjijs47w1yT2NHVfEYK4MUU8Wx",
  "key36": "37gN1APwvXFqzCZmejj3oP2ZPPZeSLtXbYYBwLyxQdmEwYVAvB4SPgi8kXKZLU53omsSGbZY1NgtSMmi8hjM6NFs",
  "key37": "5qLabUMsUUzY18pMbrKKKdRusHvgh92pmikLUajuWP67mipBBV2v3SoftQ5JBeoLu2qfT13HRGKAA12TVv7FavcT",
  "key38": "2EPe2PTGgy3WHZrbg31ZexFcuVBrRgEJ53rtVAmPSyKZt8DhMwsygk82LEzXmRYuy2UxoyiALhDw7kQW6gWC4wFQ",
  "key39": "2gKa3xWzR3EinrvCVz2vytSj5UDadkrXJrmaQiSYoXw8u8cbMyiQsV3e9qEzieM3sjv4sbGGH7jph9EMUdXG67aT",
  "key40": "4qjn6iijitQ16CU31mXPuYk6Amkg4WYLaHGU8qVH4vWoNWrUsE9CQxzhoGQ26wJSZiNA9rRyxGqrBHPurk8HQaiB",
  "key41": "46qrJpYQFXFLTydM4iChFfmLfNwJKf6dhSDBNGEnkZBRrDaqKEmf9heC6nRSeCC5eHFB7ZXKdDkiAne9DtnEpEo5",
  "key42": "1wwW6xjg3358pY3XqFKFbHFty3xBZHBUPXjDc8HSeQ4P6kp5oErnBVCBMppEuuupf2Jpz2SGwe6jpkxrg56wNS1",
  "key43": "5zUB5oUUFWwFSNmzUgjXTqNtoEgTf6SXDC5vaPY8mBQxVfNEQMs8JM7TA2TD34cmFM1ZmymLuqCyqjGXfPYwh4Pp",
  "key44": "2GdeboEpEo8AEm6MLEJRm83G7yJ9XSNwE4R6Uv8Ep28g4fV7UD49TaCPvUqNtVTRSLqDS1Hnp4WKis4TvGhD6Vuv",
  "key45": "4cn3WBYWE8nMYdrEtzFkb22DqsXAxPEdffBiypH8qupy8s4MWqQW6t1esuvGnuSCW33VxSQZeTEhPiVKYg7SQi3f"
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
