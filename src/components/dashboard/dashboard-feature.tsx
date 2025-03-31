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
    "2zF3t645aJjJBBkdeeWPydJFcv4hrj9514AypJ3hGHGcjjs7PzWH1zk2ZGofdRH77RwFLfRPQ8fpZDBn8NBv9HkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Guw9hBmEQJaife1tMCVVyNH2vkmg3daQE8kpmVQTCTh54Wow88fCfTfRXifXYtnv5y2vGh9PtDLMiuK9yddMEub",
  "key1": "cpCHuSeUxmKKXsce5ffwRDUKqa9Es3YMiYXbeUdc1BWaaZKbHxrQGRbrMJaWQ92wmNz31XALjVxiurc72nUjSZB",
  "key2": "38yAHFssmGdZZiMgg6x3T4rm6hLHDYjy3qYSQPEWhiPArJaAzLHS4bpPVkR5L1ZqTD8sYwUuvbXW1tWwpg8SrirU",
  "key3": "np8W7yjRNj4sYfj8XVwFypTRG2wGsBCWZPw1AHL1SGe1eyHSbZR6SBoLeyPBYcSKojj5cwyDDRN6gp7upy2A6QT",
  "key4": "4WBwjfx7pQdYL6CE4yq3gAzBAtfYPeYYh5LnTcpC9rtscVXMRgf9unmFawYd97WdLFMXAYupAiG8TH3vp1mhYa9m",
  "key5": "iUFSwsPxibA7ZNZdUSYn2x1y5VLb8yqJeJ1ss72Y5Eq5NqSF4oY64xFnqeMH6BdrqVarfZXNc1QdJwKnDWgnWKf",
  "key6": "4zrCq6SipZYYkqRec1svRSDLSuAvGCf2aadSR9jBE7Tvk4VuC2mSfdAzxkVYRGs6dyJQeBgaaSmR7buDYzurMJbS",
  "key7": "BzyQ4MVygNBtLs3Z7XkbYsXZvpE8wDcHpk84PbNBFAo5uVJYFHsk4q3rW6U1iJgqaqTkCH2wsoYr46LEhPpukUk",
  "key8": "2FRcLgan6U6U9KbruUY9GVnuqGVu3TJd5rpFD5h5cdACfLSCrfaKzyrDLvgPSuzvD7F139wN8DvTWVdehZ3L1ij3",
  "key9": "36oZhT4SHTKX51kCt7Q6oufojXaLJuEtSjFWUGBtwm6z4X7BJ3nx8RdE2jusB3L6ymR4CE8uz31vLnnHJQv7WKzc",
  "key10": "3KsYQ3G6hUs5y8YMgBE6oj897uGiXjeTXxeFmpdWmKwnebLA9Mut1j678kNR17gx6EaDTkcizvDekSNjnfsBJ4KT",
  "key11": "3aNnY7djS7ZQZJ9ERXTCT4UmZWEZ3ExV22nZey84nQEFawsBzgKKbirWgib6hz8Dv34rjdqCRisCNAXg3rcJxsoe",
  "key12": "4KNb44MhhFgDNkwSXaZdk9ukuXvUfA3sQvz1Ma8WnMctUu2MCx9Lji7R1X7UNQGjVx7kqkkZGPn2kH5gpagbFkYA",
  "key13": "28inS6eDmWBgCdPCQArRcKiZedNh81hmGrmitaomaQffFrEAYwJFXkouCh6vzoAYn5jnH9ApMdsvEf19szEjN97H",
  "key14": "2i3CmMptuthCFzccPX8DM7y3MW7svACqhAmRze2pU2LyTPHjGodoikgtkbx36q22PogmXFVPLu5bUgqpwRo7SiHu",
  "key15": "Sahq4ZZn4cBR1ajccp1PeWcoG8F1sgkbNbfu5iT13nyHQdc4d8KnuT96UbEzezcFiWrCDA3c2b8nEvuZeg5hMBr",
  "key16": "3rnuGPsjRGqj5nxUAtduNGCnKzV6q3mDyV91mRhn7AUAYUfx9ipQE7r7fkhsgyoBYC4GB7adavPBQJBuACPobLRh",
  "key17": "EBpA3TT9ajApQpDNwwc72B4nmvvnteqVLhDrHJHYTaSk8T5XonpUkiToXeYDshiGAYCXbzp28DaRkEv6ex8bdqK",
  "key18": "248CY44ZdyoVzQtQZDnbNTsdQnkWJ5uTjCG5zgUABYL98FPkJjL5HBXSeMDDnSphCfxvHa3D4jWV7CpY1nMJs811",
  "key19": "43Qf5Qh2djsNcfesX4RTaUwZQHuPxpDjqQw22BbmVbj7jP1xoFGBGqpT62QbhXmaAnEjs6Q4UV5qbkgwTyuzdKAD",
  "key20": "2ct51Jp1exiviL4whWUWCEV6LLupgCKL2xUYqyRqq3k1iaYaXURLWCYsaTHbbQp4MeGy8dp5e6NLsHTYChQmDZjm",
  "key21": "6GRXwxc2GeURFABaiibyShHN4pjEhssDBUSDqpcUzX7jg6ndyUgRgKH5RtVPyxV6E7xKmQVWsqQ3vW3nFM7Kctm",
  "key22": "2ckPKwPEM1m6oAyHMRHc9UzohY6Bn1tSSYer3siKcL43esbV97VGaKYrK8LqP91i5pxzYaQmY3Ui868w5e5NKNsa",
  "key23": "4KQtrbCPyRdXDmpn5FPaX62BK5BwrRLqnC4mfJw6Ja5VNpDGLNa1xyQENoVVWVyMM9Ti3vAp4fwnJCmikr9yQkCp",
  "key24": "4d6LJRcypZemrCqyfBiXESMPy6bMok6VTUA9xqw5w9UusfCeLcSihkPr2UqEW6KMBqdybjrXWV1ht5R3q2GWettF",
  "key25": "BydRHs1pz7VcoznzeUM6cxMpBk6kMqexKEHr8kpyGvw2TzL3vM51gEzRQuMTeWLmXwtngTvbkhSuMmK7tJvCoYw",
  "key26": "31ktauQLgmN9eDbXf23DAfoKwemQuLyFKdwp6ceK2aP2bGubFCcBLncqK8Zcy1aWQyhEeZyhEa9kXPHuHTJPYbCB",
  "key27": "2HpGzrKMHLiuBho9t54AncGb3iPqSc8w2WoJzn84frqteUXB7fTwyK4pgDU48GaqAeDff7ciRkDjEGWzasw9t3ZS",
  "key28": "52bMPoxFTtPossZexwi57Qco1APLAxDAtm8z1G65Ja1aNUmaPkUNwG1CU5D28hUq54bViXQW6iuLzzzGa2NCyfMh",
  "key29": "2wtdZqL9HdA19MKJHng61K2DSZ7eafEtf25sQygdaFgYx6WtzK2825nwhmVjPnTyVLirSvREWnbv2ST7ef3X6S8p",
  "key30": "2pYwBWfyUezbY64HVCQw73jg6zCUPs2eh381ZdzweBipt2pvazJ8rTyssHEzZ162KNPbXF1GQYc189hq7U88z7NX",
  "key31": "PegriVj6yU7TZ7Ssjc5tMg6iWTHRfktR3KnnJPGJbgHXgUUJKpx1TLrsxEGrKbu7GzYT338noQbfGcHwYHLgypy",
  "key32": "22n4ZHfKp1Bmtz1HTUdd149hckcNwFZQLkPQB11tno5tgPvnz2zqxPZ5WJfWzpEvqvsB6xyLtp7b5yu7CAp5AdGD",
  "key33": "4sxSAMa5bniawCt35dRyfGjYEbuxevHYkJz4SBF33B2d9n9tFKj66gUtYQvj7FW8Dj57hZd2tzZnd3EGP5f84qBY",
  "key34": "63sgQ28VX7LxJiEbbBWtzooyUaszzsjhwShansd9xoaA9KidiPG4Wdpf3VfyumNJY25bodX1AP5iuyEgUpAm3A7o",
  "key35": "2R6BrerwmBZ6Z5S5FZuxaB4sFZwm3B2jy5uZtSSV1a7gwoN9GLGGgcgNeUYUZKEssbohF2gzveJ64xthVmCKVQEC",
  "key36": "qfsYp5G3c7xJ4WLxQyCfA561eVrNLV1kkyZsaxTwJ5WiTp1RMKQHuYiHF6dcpdV7YSmtz65MYSrt8smH5Tte3bk",
  "key37": "4ptkPbwEozrZvc67gTsRphPqUxd8tkSXqDGYkh8VCTzkSoyLzje96XwEbuogYEE6qPEjZip5bjqy2Wf3166Qs9eZ",
  "key38": "5wDoqXQTTXUzU24Yj9niR99ta7a6bqZskb2qj43MAFW4618SHZ743G3tJMLWaVMdYkridaRoD1HR1PvjPVrhuboK",
  "key39": "msZR3WRijxdQTmyG2LQLBPdqcsYmmVJvxNc1j7BWSjz9L6kiEnbFGXr7RNbLXK4Vy8sj92uox9aXBWhxUKX5LZ6",
  "key40": "3yTh52TDGNuvWC4xMaByejS8pnkJ3VbCLDchVWTtPUgShdmo9X5kmDwrUHJnKcerqLGTXYSZWyPTLrnc4KVXwhTW",
  "key41": "2K3VvnwqMrQPim6gFsqsrX9yMRvWka3RytHMXmPwYVJDN9ffsiN96v9MF3Xs41KMH6iRVhi1xWLZMpZnd8GJ6rfj",
  "key42": "39fEw8hLCbFy8TpZ9VgyyF5xMHy61yrEfCRJv4LyXH56JBiti69Vq8NSgBN3LWGc234H6Erc6Y39s5PryBnjTDGr",
  "key43": "5zmiyd5hFL5ZTvGLWpfTDsyjjfvUq6t4psh4TZUwoZgqEAnYKDaMzzgbHzusAGB2b4GETN4oTcMaB1LuJWtcVj7Q",
  "key44": "5r1miYosgFZKSrweK3pFqo2KETssQxXpHmqrMmL1MQsfiMm1EjLNqzKPtL4dnkhr3tF495z5Y9x35P1JVF8DqKvH",
  "key45": "4NUj9oAh5usk5XDV7SqsWDwZjnyU9T2AtC9LYyCSn4EUReQcrHmqkdEY7bWp6potYrcFDShkSiPefNBVN5dRtJDR",
  "key46": "3Ldbe7Dp8KJQT5yKwqzuKFxs1dSm5znuvmfDjYSiiynCgZWp6CWHc9cg7m2agA4EduTZuzevUtad6S5U2ut3xFWQ"
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
