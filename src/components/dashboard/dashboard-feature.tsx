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
    "26CbZNwHELeEm8vLuw4siQP7egwGHuHYEL5whHkcwtFMnDi6ZCPqoCQMJS5WfCCFzk4jrEMtMR7szeMMJjSPv8C6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vSf1vSfvvnW6ApTkMZWoBzoovPadvRCWeStnsDnAfW1NSb4adrV1QSx5zsvomLPoXutY5tWxYwRfA5FvVQAvYGD",
  "key1": "5pg8a3xxWhEiDiatgAEyhEbje8WgN6MA23NeGy9JW8mahBtqvMvPpm2FuqZzQf2xaanv2Bd1jCjeYZ2pgYfiFykm",
  "key2": "2PMAnsu5v18Lfb7Tx8ULB34LEJ1bDJuiBZcUjJ9rymH1RoAeRXdpXNpjvikpxQkHGV4CWxJpC3yQSC6GRYzjjCwM",
  "key3": "7XCM733Nd5wqTZrtdLvUgamn66pfiooHs3fBWj2JXAL4W5fpfAq6WW2k9L8R6Qqk9HRkVdJ5ZK7zPkFvCUihaTb",
  "key4": "mxbYzvxLFhJqUo9S1ZGh48joodBg8JdavkCFr2jTGzfnHTrTnHAmZuT7FLEEk4L1Rr5XB8WWJP5yEvu7zUkmjks",
  "key5": "66RH3C9fpmZcFjcCC1T2D81Yo6SfCY7os6cRby76bPZZm83TVYw2LTjVRaw2RRFMeiPN2ixphvzthgRMZ3C5tAnw",
  "key6": "4WarAMezEysnP8sS1CqLcguu2XajukGgkwQgZZLKTifr9BnBg7Qn5iCytCZy8gGAy6AhSkctEbAzQ7DKwAx6wpUV",
  "key7": "4utbPzU3gKAjLThkwa9adJG5HZFGATsYMy8GASiUTMHdUM6hnKdAG6j33DhTM7B3mnt5T8vNWGnFqCNdG8PWUhXy",
  "key8": "vYPWtSUGgSL2YKu93NdkK3CfSCBz1YR1yrVPFcJthy6YaoftuaMuumwG8aVD88E8ogZWREhiqTLTcUbpjMQjNNi",
  "key9": "55P6qiQPTNpZXLDfxD1vEdebMKRz5kaC7Q3MPxnfHHgMghrjdX88k1QFygFGqnUBwzBeNCKJ8sot5oDsbAEuky24",
  "key10": "3NxpsPmEW1ndJnw6shNtmijJwA9pXXyjtkWn9XzCetXfZ7dG7eWQ4xqCBtsyJHhu9Qww2TrZyKLji88DphrvsjgS",
  "key11": "mQg1ATXw7PETDznLbuC5p2D79mCa1C88wuKNWqzL7Ddv8vRUNBTpB9F5F9xuwTVRD93pAu7rFiUd2mcjHY2iiX5",
  "key12": "4ZNNqoq3jcLHq7nmFFveHvq1vWAaEVr31QRKNtCwLN4BaKQcsxD3LqrcWK6YHC3VeHdcrXPoioQ9J3bgDXfmCSto",
  "key13": "2kPjZPmpXnKV1oEqV1sFuvY97bQ2knJN1rycPWgZ8jJii7Rhogp4utavG4RKgmFmxPEAo16ScJTEu2QdQaZL7GXn",
  "key14": "4B5uyMznhME4iBLaB5hNJNEnFHBnPdqd7uPL2X3kpDzvsg4NCCpq8y1ehnhXp1dkZdSmeH1QKh8SZQ7i7RAF3G6m",
  "key15": "5GNn5xRkZvQ4B2KrB3kVSBovSaCmz2iYGpjTtVs8eJS2aDYvEmmoeRdUDgasfco2NgWKx6e5ZkfrQsrgwT2P7d45",
  "key16": "2TcSCmkTHmFqHR98ek5fwRjULBmgQhbxfRtH9uzPjkS8VGci6Cdb6kfkC3qsxQcDaTgNRtjHWQarXqoVbnCKX6qq",
  "key17": "2U4gQySrSPZs8K6LMmZ1z1FPLHZjMw6Cn57HsTcBP99acw4AAhygwadobm5519kqpDmsSwVe2Nt24Dd84efyMvsT",
  "key18": "4WJdyeiHahmAV9e89sViAR7CiaLbDRS15Gn8UsiWYyg1SfMQe81HNqieNhEWRWML51YR3nJSM47ZJTAviL6Lsc6E",
  "key19": "3qSf49879TAtGf4iHzFC5M9JZA6wJ3i4MbD3wFmf1ctsUkN7cdBkfKuamyupJf2gonFuYFwUhWvVvne9sbu1Ze1L",
  "key20": "44dojhK7rA5D3uaT5N6fEob4xT6cDyHA96YEjoDLexaQtb96PoEDjwjy1r1WEAVbBiiNYjTGKSnGmcQ54f5rPXF7",
  "key21": "5AP2cnWbtqBXFNbWiQkYJUs8vau1JFMLXmU7tycBJrRgWkGHrqVacjEnZcaoTby4rJeasoc4Tp32J67TDYULuBco",
  "key22": "3Vv3Qo2oxEESi6azvuCmqxjQzteg4EerrG9LatpczBu7RiM9RLM7dXV1u7SVYku1caTGSPGsMycjctjirRT2rDZs",
  "key23": "5faVj3SUMfguUJbAtpqJ7djcLrZEqzKxokWPKnKPBBPBsNKNiDCfXHJmpNKdMnCibmmGwywRdmi8gU9cWfhzYdaz",
  "key24": "3GS6tQH4gBRRqQWA88dE3qDUhVni3STs4xgZ1uyR4noi59px6NnYUXfiGyRouLTrWUiaP5Ba2VjekyLcDkjwG6G1",
  "key25": "iXzQ8nf81kkyMvRVsXRJMiFZL1UepnzgJVoRQ6zJ9sUTRB7Vrnb6AgE76rvH9gT446QfkcRLV2KrGr2k5ZH99VD",
  "key26": "61Uiwq69nz7cWMcRqvSxMVcDEnqHNfyQUsQ3v6LUU7Z6iwakt6oNGh8EpfGNopZ7jeDUGR4bBcAT6N9T7GyGNraC",
  "key27": "5dE5N5gkJLrVZ1HN19xWMTGaLW1qRbq6PPvAD5ZfiyLUhS1GifoBqGqP9Z3f4hupX4F8mq1jtcWHojgzXeLxDbGX",
  "key28": "2XnQ7uBycfjxZfjEAYQoxrCw3Peu7SGwtEXDRQ5cDZhoa6g6E22N3xrg3koqVcJTxKij2FJBLHZrioHwDyB6sn9C",
  "key29": "R21RyKSt2naQoTksWoaYQYBzz6TYfea2zApG2DXhy1EgJv4rzye6WFkCufyKYE2ZUzRBbnN6xSx1qto1SPo5wAo",
  "key30": "4uRYSMsTEhdv5EPH3bpynhuQJEgVzpnX3q3E3apqAK13BBZ1jGukDXpBhymVzex6TSUjmpweEKUN1d5fMtgZ4a56",
  "key31": "5xAKLrY8n7o58CAcZp1kmp7jNbw51CnzFD1N5UinHbr1YqrSPvp3LHD95XQ4JqDhcFqM6uhpRxshmmGWhr5iSHQy",
  "key32": "3s4fzdnLC63ghwGA15rFXoLEGbHU3jaT2gj18CaphTqPfia6G7g6783GQNRU66Xivtj9k2rcfCvPQ5a54BsGu7wD",
  "key33": "2DPSa6HPuMUkKiR2j6f8T64dLExguPTVqRjGq2ZJN9JPFezJYky9euAHnr65NoZSXksX1mhcDQnEVPzN4LC892NS",
  "key34": "2nTF8DBrix3KPXUXPSMp2adobReEg6j4gdh88o1F41w225JCsFj9Pwd8GnXwJHXckHYzn8yKETMGMjPs64rjXcJ3",
  "key35": "3tDZdjQMSBx2caYrPsuktLST6FPSFuyZEeuDtwqhdnqpxYct3Sdsnk8tqbRGGzNzzHbZcDd2T8qY3kMrKC4GP4eR",
  "key36": "27DU9FZ2wZHQhTgvgnNtV7787SKTXoC6E6z4v1zntXVmdX3vMJghrPAzzgvNUeZEhraVqQzcjh5WF5r8bpfPFaEp",
  "key37": "5oE5LSPdLs9YFD9VEqxSqvhSNMc8qsG3xY7gDeGj9pA18oAPTXX1uLYHxf9S6U3xWx3vbECbAUPQeLwUKEzq8VN",
  "key38": "3GwRytpa2X33brfhQotNYARXagU2sSF2i2TP7cWg8dsFv6wqjNuXPnsGcsrzBGovGinntMe1VBmeiGaNV9bJ7kz4",
  "key39": "5PydYPQuVq3fiJVmUjQaiAGz7SBLQ7Z4ukNRWJdY69tn8SVR3QMSMVUz4c2GdJqGuGz9zfd5bpu8CRshvYhKMT6Q",
  "key40": "4Dx2yShQ47GFubYh6U7uahgN6b1RmEnNKzePCcbUvPa3pUGoTGheU7i3CgxWyAi6YBA2xCx7TAn5vZsfc9dQXJ3W",
  "key41": "LAitj1E1mKJacNNJaYTfg2aigXUHwFrmn4SHTgntLjc4axATCJVrFKa9KiwnyjLKbJ71dm3vpdfaLPQbCqQNF7w",
  "key42": "3ExfgRdfhteVBBPW9VFyE66CMizT2LLCBLdMZy2K7m987Arx6GWhgtoNvYmiPxNQLBKa85Em7JKvy4GQMMXKLWzg",
  "key43": "4Xc6nGZxzZbEKcf9dVAuPR83fQJ17nrcV6XiR9F51CscSKpaypRgyENKnwaEJLjSntnJ7coN1FJcns4qe3PmdLMV",
  "key44": "4PLQSYSabbrgyaQ88NGgus4ZDyUusRY6Pz5rzbivh8S3bTLQ8hjD6usYmeGCJ2gCA3K9BysuAkehupKrLE5tbxFG",
  "key45": "4RMpZ8qpzP7oVYxMwtM1sTdRY41asdVk5ZQH3qMgimyaEKiYcvgJSF11E8MFLpEdRBcPFHB1EN5XrMZrFHfnp2gB",
  "key46": "3rQ1y9XkwrXjbdFMW9CBapAw7s8aU4s4SAtxje5uzzzXErXSXQfyzT5VGxoh9trdpYfZYQipsZMTyC1Eu2cZJxsE",
  "key47": "37j6Mtuk6SmPYQfKJWLoJcA6vRCPgwd86i3HnRbmppbH7wUJTCjwif9CVYL2cinZL48we1Gg3pC838vSJ6WVaGca"
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
