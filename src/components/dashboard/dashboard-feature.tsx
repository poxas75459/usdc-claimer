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
    "2RYDmGhqJrddZtv1ivjQPNgws1nHQYDhh6j3ag46qwaB6MrswbnZQfTnEaXcTcsVSQX5KL9jZiKRv6uM1oGjSLaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgDB5Hq95cY8DRaLFrGT43dLqpUV4Mg3aXmHQbs7aPAUvqZ1sofGCX4R5qexgrMzPVh2dRaaQSAozCbeaFmbPuF",
  "key1": "43UspioHxFMSr9YvtNScoRNybWvuooAzS6Yi4grTB3tewqewA2pxdTWgvPRSNR5iKexiiZP4ibrupaxxQn2uEh4H",
  "key2": "2kGz36z9nNvVX1vgmR1bqxYiL8X7pdxJhBqFQyJxqtS3gCfmWzTEuAXtHT998uBMxNQYyopnnmL2sjE8TcyXaJkf",
  "key3": "57k9X2NAyzG7bw1pDNFnqhgY5xsxrUHqGgBWnxzyx46wPvkiCbXbm7WucZxZXRKzwFJqQbMXMars4ETXWLLvvuWm",
  "key4": "4yEKVuznFGSSzinJmmbQRNhD8624uS3RuusGUUkBxgijvndSCure2bbvdNhw97mjaazL1pRMJAyXXHZF95hDXNvi",
  "key5": "5GmysXAjHwLWy6abBZw2Zb9Yi1AYrzftDKr9cKuN8L5fxmm2e1hL6mQDzepCcb7WdCgft5FnAD7m4hKq1RUsP4bv",
  "key6": "5mdcWo8B2v66FXzfSisRFdQEjd1cpqNaXy3uDb4sefVR5uBgre8HL6tRPnsLWRARQ3gd1yy2X35H3i1nQcGAzxDM",
  "key7": "3exSiY1EZr8bkvzpAs4sjvmSjEPeMtekMAY357JrSozHmaFATLxdpvYeg3XpThK6gSEKUnRrmuEaJQVhVB9LKKPy",
  "key8": "5mJgstNEvVwPiuYrNj9tAb4TQK6n756TKLU96NRqPxD94ppnFMBaSw2gaEkTgk6HCUMVbGC2SETkdy5Bu5fJujKq",
  "key9": "5iYPs714XRWJZRYZwT2Ezq1qvTnCVVJWbS875oUdGvA56N6PvPQRZ8vWadJUvimgBcwxr1VWoy4kkvepi1CS5SdZ",
  "key10": "23kAgCWrzG5VGC5ouSFGMtVCr4N7SwswezSUFLHaFqD5Zwf2R43rGevRY4GqsXHbzEqoBey1yAmFinc8j3K4pwX8",
  "key11": "m9NTf3r33SXVy3gaPC4VDNnaNUpGQFys99XmKEccEki8Sr9WvkhiLHzU7GVFqQiyCoRBPwpegyGSNLd21JMdUjV",
  "key12": "4NhkhbpUNk1vvfRo1XmXuR1BC9P2RbynvhJTvbh3jnGkeCwD4AabPtQ1sp2NDQkubPXJpfoFhvkTeSQPpdBPWogP",
  "key13": "3Frcs5DpQ8BRYwz2HvYdPge6DhjnSwZjtf5oXoAmJj9w8ZCCShWq2guKpz7ENb6jn4hQFz3hNLzzxMbjQLfUgzZG",
  "key14": "2kTKn55GWj4DHAT7gbs5qtp5pJKbnBLPbSKM7JH25aS7G2RBAsJ9qXmr8nZB3Mo9y4vwFgAExp2FdQG73PFBaUj3",
  "key15": "5syiZwjAHvt67YPxvNLhVvUE2TrGiZZ9xyx6STMAKQ39a1DfGWdsp5L9J8Un2ARoQjzBNoDry6iaManbhUifZCja",
  "key16": "5WDmp5oG1sRGAxubU4wqNYxzb7FYcu9U8drm3R3Gn3EXiTFkq8ME6qxhHnXj1XaKDgHv8tSH9J6EaYzkjJjYYkDW",
  "key17": "3ix6tdUSNunFWq3YuyUejSdMzF6YuQGkKEqYMN2pGHEaTFGBBmvvYr2i1MYgaxdkfXr5nsQmk8jxNJeEteUwFBbq",
  "key18": "3v8XHk6woFMRhXK45UU4VvDEWX2hMT4Hb9EAc976gLoBH3af6anvVpszh174VLBQX85F4HB3CvFJQmBKjuXpqEJH",
  "key19": "Z1DgdjsDjSRg6CQzmMzDerHyrcevea287Dvgv2447qboJfuutpn8y8Zi5ZVYLZD3RejedTUu7yjFcBjAUrCibwq",
  "key20": "5aGpMiEg9iihHdyPKjEYMxyaQgmD7SCZFBRVMeX2ypsxgma22oeM7y4m87fdVo51XV1ThjBB66RdTu7jXmgysmJW",
  "key21": "2MtK2cxSJhkcV2zuiUeGVr51ovNGUoLbzxDvZjHAfm7k1hfESjQ3MzHR633QaG41UiEDR36Zs2QnwgipA6dmg9J8",
  "key22": "5sTL7pi2nqGtYyEXWgYyw33qcNcL2aEUgz23BC4xvKA3cFJKD4yah8PZShS67ZfCbzYTX24CAKh2bAS6eQSXe9tq",
  "key23": "3tyMUufWVtCpLJtrFATJbbhHTuYUAKW4unJZb854eUXSCLNEBm73hEjNCixiwxSpHQKf8oiAWdzLJRfp9igQxpnM",
  "key24": "3R85eBaQpMo9pMexYbAMDvsMpV9Fd63pA1yHjXsLBX3HbbEyiTjKgXCoEZf4tFPET82k5VgtEccSZ9j7ptUXkUVu",
  "key25": "M8Stx95CSrqavoMFWVtig7UVVHCFrwj64D7uhMHdq4hNhScnknLu5aCahXdHnDyaMrSFJ2ao4yqVdwNak4y238p",
  "key26": "2m5c3c9hGxQxjWQK7AmwK4RHZ5CgZY7xqvd7Tf6CAVSBEU2dQg1UNX4dypgRstDiP3JGahrTgeoZLmyisTFPjuVN",
  "key27": "4awZR9EsJ2ortsesgrfHDe6Mco5G4GhbrW4K8c4ZrASN614MJLcKsuPu9UQCxK2mMShArxXJzUpBYTbc3FHA41k4",
  "key28": "2LftobM2AKSNE7vvboJYVFCY5vkE71eEFJZKMEFPFCs4ctAxofSJ57AY3PkCu1qmN1WnyKGH9MT7z8y3H2aD26F6",
  "key29": "4WNvu3P5gftYCY6T73qSBdYhYZCzcTPo1na8UNLgzrRxbiosfG9f8AqCR94rggRProuDLNCdpTCEtpoRYxwqT9X8",
  "key30": "i3hFmy8LTXTkEebxGKqvBVM9dvKsFoTPopmgYhmHGpUB7hxfrTj9YbvvtWq9UH2jxniKsdD4uXrV5B7FmGcWcMT",
  "key31": "5ByDdVGwEimwtaqsbijQij7UxemT3x3CWNAJDq7YgqwyQt6M4Ub431ghJn4NWUZboevEgjVk11BDr6dteGysnwfq",
  "key32": "5myjnXXmK89KkzThzK1uUb5b8XVhVJ7HNbzMD3qFU2RS9TzqbK6JZNCDT2tQHmcvBN6ibEGvVRnysQNwLLf5dzp2",
  "key33": "2VNTft2w6sLgXqRcJVtgwv9eUi3TunXyk7r1L9KZGWhJqmTnXsYnh5PjieSUHma8p3WSKt6SWNCGZixg31L5KGPa",
  "key34": "4WAqPDnfoAioCDAHsjdCdUcoyF1B8mPGWWyteaLoksQLFYopr1ZbmqCdRuBCctfV2jt1w1QutHo1T2Jxav2xPNuf",
  "key35": "3GT7zTp1brFqNxSFbHHPbyQzBTcLMzar9JsmWVkKKTZQ7BwsRkjCTAaZyguLMsEgSQbG1jLQQbS52ZMpf7JNbdQ1",
  "key36": "WpiB5Hn5CDzWJkWaqh43z3zYkRkApBQmodn9MwVkyHZcUGQa5K5Fya5r7tVLGHWQZGZ6qo2ChRP5gyzJ6LzUTAi",
  "key37": "2H2oHfhviKtqSth8FqWVMdLFFqEfgRWXB6JbBuK2mg4t6BbeXnG8gKUwQudJtBWwkwazXvwPYJ9T9BFWJ7rkT3x6",
  "key38": "5JKd8TPpAzh4Y4MXA98xxn5TVYGfNWYhg11gc9wkWVViGfHc7BbdywEcRNsDHxeamXVvCrAbuy2iQU23cRJAmAuL",
  "key39": "3wYTvjMu4vQeQfZnfhNwp61Gzmq8MAXE9g5MP7YQskBAVXqzCsh5gUcH1AytnNPidBGqU8uiYThxN8E4B7Ag53dX",
  "key40": "4YXBWdoFQ8taFzHqnHmcnBJz9pN5mKBELTuobsDu6XEpZPdqmwfgSLW2UfgL1gmSuSCAWxkAw6fTSSmTz1qhYFSE",
  "key41": "5moYcAYr1dnQJjaJzxYoxKrdCBsbtSEPgErMEsoFn8YPe8sHseixAfuh2LDmCdckjQRB94RgRd24GVQ8fhWdpyx1",
  "key42": "3mYvLj2kYVpzVtcPaziuVATm9pqz3JvTDpkVaQ1e6z4fs7NPuiEEpnkHre1LvMCAtnmH32NMKoPsBSYXzoepRdCp",
  "key43": "5zH3EP4ctqisS1e84ywaqQkaZqzHoZ297JoHAGusKqyAXrapLZeuRd3wBCPUUrKh3L4s4BR3DkcKPGkVzMZAWHAJ",
  "key44": "3TS22BZnGe16YpXTzwM2WGF3BhainEYgzgZFUWxxrpAFmMBKEMZ9q8todoyPHoudvBaJqEMAfEfNBF7WQuYtmBsh"
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
