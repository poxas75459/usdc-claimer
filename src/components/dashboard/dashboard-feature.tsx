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
    "2QzFRfTd7Sk3DewhJYdzpUwufZebeiCAV3LneCAhgRA65SZT4PdxmtsBaAX1P7fxbNj3vpd67o5ShuDqar72Qwyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wW5ecTpJf9pN2gVpYb45KYxy1QaeKKJdMCoU8WnoKsMDociK3vvXBkv6XjfxyS2XuzSwLUPYzHJFb47KNi2C84D",
  "key1": "28RTACj8CUu9ki77aPuPTh2v7bVy7w5xu5oCoxXmQ6gyYK2RxRQG1H7jMG96RXL9Srg2RLWY6dQZirZnYNHLF5BN",
  "key2": "4aMERxQ3zAhuj35g9NoX3XPNwWoL7LGSH7rmb1hi8seCkBtJt2Vqv9cmC1kj11jPy2nVS24jZi8aCkjXiEh2Ac8d",
  "key3": "FQ5KbW6GM2MUqkjWsAGBUrY4kywY5nkANA5L8X7SEmZJx6roEx9vy2ghrPnoib7Cb2c6tcfyYVyeB8dXJJQwWZM",
  "key4": "87yRGHxXdpqtG3PLNuYa67u7bYMn4qpEGj81hjEUTNgbMWJthtetb6Y5pkdLSWMjXWhNym6pHB6vZeyNBtYBcea",
  "key5": "5SoCjP986qia4gR2ngkJmdhq8gaKhs4SPNfd6D4Tzcv9EL6f5p4fUBz5jf79LzKBLetUNsmj7VtUEBRL9yojKYS4",
  "key6": "Mr4FcSCKPe2kzaSmjkrmXUJitnJS1KkpZ9eavaBugVTadpFJdS6vvotgtAF2qvC9MnPoBWyzCrCk4qTvyw9jmKM",
  "key7": "SfKXVpc3d8SttYZFEwoHM5abLfeXeQTXWDWR8X5JYqVYnf1MnbguRfCiohUw8skW98ABZ8mnekagHWd4mAamsRF",
  "key8": "2UafhzcoHS9KPWXowurBgUaCNE9Tas4Q42NfLCYWzwZud9HMhoEjnfKYQDTZLKG1m8WMF7YUHNFBR84RsZhZQE6h",
  "key9": "2nXFFXV4X2eDtLePTgn4docQtTQwwoS7WBryTChB9DJjGGWZTCRJ7pYxYXsN7KRoNyQTaBfFB7Y4sn6T9BGASEC4",
  "key10": "4meeqagwAZPSudVCyK66EtvzJCqHDqBhykiNVAV8Nea1uXoZBavKU7sWmT7H6iA9jsK9M8Rj5qLTu35WtuU1Lqnu",
  "key11": "3jHC4WcUjt1AciAFTJUJZ5yxwDcjDLdhMu4dWJuC6fMmWko9NCMtWVmuhL9Pk6KzXU6F2B31NDBZq6tLtL3T9EdE",
  "key12": "3VUw3VTSnt7Mm32bBVxqRcAge6R9RQShsrFjZ5Trn1FTZ5DSjPyTPu1EAxsjvJRwFCmcNtdRQVKjjE4SqHmpsAY3",
  "key13": "56hqkVZzadeD7b65Qg5WxUWJzWSvhSVduVaHjb2KyDEPeaGpa6EBqzTjpxNLiXifHDkEUm8mYFqM7Z1h65v1AxPT",
  "key14": "sxQ8ucirEA46Htqi2Qkrm5kbsaZDVnP6TWXkJgDqiK6riyYbsgfXPBQxNNoPFGqdWxkb3Y7yxRaLmJGfXudidJ3",
  "key15": "3vHw8xaQB7FNETaaARXxegFjrEANcxZekpe2RhQc3AbvdRbHwkMm3NjHnUxncdKyWckNiNe9jAhTHmweNvpbrXi9",
  "key16": "4Vpm5SvHNmAHsKbSCJhbmqdaeFf3ZAzjZRNFci4FvmbCoZ3HifFhjwhHD6mZ6zwEeiCZbrvsZ2wF1WBruBYbiaHg",
  "key17": "5U823kQcAJ7nJxwodEYyLZLmUYD5nSdwDbMU6Yk9mTxYk1oDqqzihn2n53eCwheQKZwRUtrsRimzVKSv9pPvbzJt",
  "key18": "3eyFrKuWZ1yJHYRFJyRqbRzeYkteMXXzHozH7PHM3oXG1ponyNYb948GKDrQaNHxMczUJMFdL6vctqw2ZLkj9Yes",
  "key19": "5bc32Sh1XfxGFJtt1X9hoktzuGgv7b8Yz98UmRMDed5qaZ1onNq58VtyMtxUsV6zdEUxBha6VeBEEDnXRufKBrFT",
  "key20": "4wX5u8Urmarycn1Fr3oCYAWjgCTzSJszxKPv7XrDJoYPmgy4J9UkCZBkkbWKA7qhPE9PUaosAiHuisUPB8BRn5p1",
  "key21": "33dvABYpvY1qpKENcmpJR6AE9SivDTYmiQDjJb6tZH9jkjg1YR7RMkn7ovbGT81Mqs2T2SfrDHYnqSikvZ61AfG1",
  "key22": "38e4S99gAggVH3dkXwKVzDy98AoXypiGzqio1SJ3RWPA6YV9Yzp1iJ1C2787LTr5uj9Dbp8VxEC2KYgMsFVa8DsE",
  "key23": "Wb6kCjUGXotFuW4uagNLPsfwo49XAEpAGg7TTHCzJX4i22zSiC6osy8WSKQpoyxVKc4M1WAz1wLhu9bpKJkkVhe",
  "key24": "5XSJsRycroZhm3geRTL9NUGHKXqXTukw92Dacpcyq8XT1pGtvwBbcqiW16w7VZrCGdX6UN4TEsmshdTWZFcu1cAn",
  "key25": "KCAgzmjQqA1DwChW6aqx87b5b5mJDDVifTCmP5BXAqbuS8tVJ3gLS8DisVZeU9huLNBovKX7ifnU2ZrdXF5836C",
  "key26": "4Wocw595tLRPp5D6FvgXYhQfuMos5JzQ8D7cPE7TTHJYRDxpq3RcmnH2qUNiAenYszkhNYhqgbPBcoPj1tv3614H",
  "key27": "QiLNY8oaHcsMqJFB3WxjFrqvuqsjNxMCmW5ef38qSiFPBvuXbtxRMTCVpTMzQMbb7NCC9Gkq22UUnLznq5q7q6W",
  "key28": "2hq7Z1yWdGPEcz4zNJBicEbAXia8rTPisX44TV6wY9zSAhHgq25eTUaGVtx21iEnyeva39WidHgJb3W581Xo1kj7",
  "key29": "278Za34ANZa4dMxUpwTt9U75giRPGw4dkgq3xd1CGksB2AqUt2pLMeYdyaGNeNqNBtF8N9RJcEjJL2QCYqDPKUxy",
  "key30": "3f8ur7uoKEdpvFCWw2RjyXSn29hWwsP5psLeWCWUmJs2bvire6iv3GDFFK7vVwcoV4pU9an5qD5jaRq76xkfJJXb",
  "key31": "4AZYySFk22cAW2dxCA7fUm25cAKhY29T3LEJSVYymPjKcKdXzhu6D1fRSBtnjuyymRHiDBCPqNxYijtExt4KNq3P",
  "key32": "4TGgNoQbyhgJLmr2KbL5wuDgvvVhzMCoL13Lwh8z8K1ktmfBYjnsbp3oYxfhMTyX614Zx4LBxbi5mxSQR5iSvuye",
  "key33": "2GvK85WWarNcCdMSzuXmjU6bYaBBAeQsKBH8Bn1poP6595eiVcRgEtYn7WehpCjbg68rW4nX7rqXVK2fzj2H6tch",
  "key34": "4To7M45AuKyxfT5p5udKtQmWS6d2LRoLJaYbhnL8zdNzV3ksb44y8UXuzfxxQ2PBTL8MneaDUpSp68aKWs8tRovW",
  "key35": "2Uzh1XW9wM8mjdYWqo9TJ1t2Vnffdc752bCa8GnP5G6sphtrdz2F8HEFhrHU6QcergYsKNeyi7NyDxxqfLPcXgTx",
  "key36": "4Pm5J97M6CA4ytCjFqELutZGRhCipU2yCqi3Wi9kBvsxTVA337aeB3Ksu7rVuEhVEwmxDKpp7v27gv8eieGuQ2NY",
  "key37": "5TKf9tCeWhRsQMnP9QehAvTUMktqWJfaQfdPZNFcjAeRxUhrD2SjrC63Nfr4wNnZ1LdUtSzscRGCWswracEjJDJx",
  "key38": "3BGz2fnGurPpggViRxhTo5iY9xM6s4zF32e9CVGNcyxedgs1m1xL5owwuLgnLzmq8bdEhiAWMbSy9Bp3zMSoaves",
  "key39": "5C6zgaZ1xp6GtPpyy7bAJBTwwGoVgRAEWjKED2KH8FFpy8ooL4AjczfzSRcpYHq2ResHkgqkzk6h72R2AucoeWv2",
  "key40": "3fGhCc8tuzt6VNERsHvc33ykGBhn5sNYDygj4o24PTp4i5zebpvnu8uo2q6fmEpkrgxXUpUP9JfCWVRMwbH7JTo5",
  "key41": "4AH1Fsebe4huacGSeUVXf7XqQpCogF2q1zCfq5KC1smA21Jk8iGAeSL8RTjaiBhqS2myhQLt5xoVTn9bVFVoVP3U",
  "key42": "3Wjj2sk9MGiAH3D8khSQ1JTazuKonNuRc3eWvcPfMaSaxKWa1FAHU6itAyPFtqTFRuEsFKUuqmqVGaUqgW2zNJ61",
  "key43": "5k6AwSL7gAnQso7qoHTUxdwpZT1YQnfTwkqhfzMaA85oRj3sC5VCAU4cK2TKpZ8nH83hB5nALta7X6rv3tq4EDUg",
  "key44": "5sZziR6MPm3viwZduX6DRaA1PNPFfQmebAo2qkJW9EWegehxNqULt5h2bJCto49FuiSD982iiH1TCZz13A1QoaGK",
  "key45": "2svacrEcVvnsZ6GdCGF9gduZxrP1hW8wkxjG6HfepeA684KqpGi6cPhY6CyQY4nMDQLk1BAmVZZuVVGoutyzs3cJ"
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
