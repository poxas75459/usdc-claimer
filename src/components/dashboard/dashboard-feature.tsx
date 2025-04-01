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
    "67SFJ2cQdYeKVHPyQBspLBjvQy8EAoZeDuoGwJZokz31SViwfvDpMp6Kfe43irVGHhpTat21RpyfLdziJhhzZogt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iLSJRdP6VySZjZZsTVzsME52wABLE1H82sCRiD7ECCb5bJcy825z7CCca8MkBzbPD6wfsVboBGhjmHMPmBmCKyE",
  "key1": "3PwX6Qpd63bZFmsNTqUD49q28uTccN8cNvMuvsLzjp5zkkQTHxbEcgy4oM7xE1gfhp9Wgm3YkpYGYcaTuYuU7zcJ",
  "key2": "21zKDmjRCyeA1AEaPS1VEVcHH3kZhf7m5E9piF5BRJbEm2on6xnKtxMrEW6FQVxwMWUCnunhL3T15BY1fVX9rBkA",
  "key3": "jdjPgNX562iDekbPdVvovKCZUVD2QVfbQwoRPWEQCdbimt6guMsgHLmTfJpgijMQvGBkWe72mhMBU7zBDDtzRKi",
  "key4": "52h2t2UteA87Pv6onQwYXJKEMLK39xwQVE4m8Jm3jdrtzUE2qiQznHqp5VSX2KMuLUpPKxVqBEUD88vuq9atoYbE",
  "key5": "4Vbrym3F3AUy7dHbBrj1Fu7e5Mgbp7QfUgbwntPogCJ2e2KbPR4cPjXxxzPuz6H3GACTjehVQSwGHNB4jRM17sCt",
  "key6": "AosbYUqeX414xoB4D3o1SuxJ9oFQX6rnEjPr1cMG5Mq1EzYYKxyfNirmHq4SCcZR6P1ffcoBY1cTs4YpV47TpYn",
  "key7": "678cZLu1MWrTEfXc5bTVEmkYzKUVRRiZSgQGH1buGohP8wTgjwyVyD1E5ZGMbTQZQ7isEZXLef6LZpz3ak2P6mMV",
  "key8": "4gdYFpTGSRJRDhSwiPBwh9sPKbZ7fuizH761bqSdokWSgjE5dtcwbKQegwyYFHcmpPJj8QHBSmyZhqLVRdtsyZi",
  "key9": "4quCQmTS3nXfcAFrNm778kiHXxwAy3RrskYv1sBUo7CJistAhWgt8vX34ddFAFhUhFXi9eHPnbz1UbgK4zVLj58v",
  "key10": "RpxUE48zcP1sjmFm6RD6LSsngnuKNykQ5MdiZXethJEfKHQxDZAChrxrUwsMm2wiffh9tbwJcRrxJ3oy3Ez8ST2",
  "key11": "65UQUFuehDtD2BwviPuCjaxtfN4YK4ZiVLfuHWkQsvec5FYuG3qotqjtMbAyurJdAJMv7s3Rg3GPkWmTdAn8mGjt",
  "key12": "ayjwNJxLoh6SV1r6FQDEtmpMeVLWga72KTTKRDCHBpr8vT5AVvvrLr5LyQnjmGcBxKRQtc1FQVYqJwoZc7LRaBu",
  "key13": "ZnkvJFPBB6Dh7RVQrqjAsAzKQgozG7gkSEUquve95gKmjWDzSvzMG7X4Qh24GrBg6MxnaZgDPa7qBdMzeCMRFc3",
  "key14": "4iHPsmYaJYV4vPQEjdTvWJ4KzrGbTcgtyEHYnd2W7mju6W9NMekgK6WBcfuQYPZHtLyNdgWTusm9H6eE75YcoJFR",
  "key15": "33wV57TjrDWtnusL1PZb5TbRSYydQMizmuYdFPtkCSofNiTevKfu8sm1T7Uf3jxmh8dd3RKBEwHSQENeCyxb1mGB",
  "key16": "4XodvrYCjsQnjG4tjgqi4A2Qighm7D9y11uPTP99xdYEgtytUuRt9VfzNoHekb2zCKsP9G9jSkmdXPxgQZwRsbjP",
  "key17": "5Tb31GTLP3Q1vmUrwkve8BmXSeSydcXYszH5jBLshw3tLauH317FhEWRhEpbMhrPKG9kxQEA5WqVqtqyur7GvAtN",
  "key18": "4dpHfTPooFxLtkb68nfMgdXQ3Hr5MFU3fM9CFyMwPA27Eg5aaRAz6PtmtQryXXX2Je59aVKRs99JHEr5n7wiWjTa",
  "key19": "2pHqH7mj4MnQq1yCNG5PbPongF8eLJqsNvEXrBeDpoLfN2ti4ZN79idkFRvzu3HTbBzCdXLHqMCi7tzTSdV6kvtt",
  "key20": "8zRZ6M3hGF3Ud4DUvA3SQE5MU9KuKbFRXEC4y2ShEBAZ1XLA4WGZm8qngP4FijgoQy65DXukvSzbTyZaRhtTBAs",
  "key21": "cCoiimk8RjYCKpiKJBENGKYVrSgLCM8fy1R1tN3RfjW3AZMhuzngCM7TBERFn8y5XA9hpdjupDhmWAhHhcfj1G3",
  "key22": "3n6AAf4v9RsCbqjQYLNKGaRoWHPtngQakJpymVmp5hF7yJA8pVZvX4EoYjHtUXmbSVXdDF8SkwVw99DFhtBodn4U",
  "key23": "4yVf37DGmbc2naHnkgyByBf5SP89fu5a8Mds4V7f2nBN6LxZ66ktdGy7rQvpvPEtK2CkTdoGZTSJrKz1ujqU467L",
  "key24": "WgCx1PCf4f4xQEUAQ8Q5LEDumooHghiJoaXJs9pvKCzzu7tVbF4t7aztFRb9LrxRWiTfV5gAG44A8L4TqHuhCnB",
  "key25": "66tNBHYBGU8v1BzvLV7VFavoJffkAd8Ce88beothMcFYGKYj8vV6iuFwYkpTZDrQDPE5VtVfxUzuxvhJUvWaHdsj",
  "key26": "5YPsFpFuKnNk8RUTsUBxgPPuSsnVYxsTVD2QN1bpYX2QD2Q1NtKdag2Yh1rUYj2fv28oiVDs2frkMgqrGNddZfNB",
  "key27": "zSqyiChdFBVuK2i1YZDYZ4ZjxEH6XzX8s1CdunTQmqEWJ5kJMXfwLXRyAYq17nzjigoS7uosnZvmS9Bqqh2g8KJ",
  "key28": "JVGhrQV2KSc7ARwmqAvhf8vEaYrGUfvPWPGynxvVxsEt4sB7Hscr2Mct5Pf47BkM577PXXrS9bNiUdvT8vRtiEo",
  "key29": "497LqKqvtootwvMKo5LRSsdFDV5hsPnQatxiyqHTfvvLxcyWLJfjeX7Vzi2eezPRFVLU9xEYEeuRKtVQoUmeoTaP",
  "key30": "rzdVmJFu1kWh3Txri4Pbv6iQnMxdJN2TXyBmApuUUf6nRVTeZAe2drNnxqWW1dy6eh337yPWnFyUcPYL3MrWREw",
  "key31": "47DYwkrr97hRaZ4bcM64tQyA3hWFywp1YcZHZPg4Qbev31u61TjkiRKY7yNPaKLMGXewGoWBnS3Tmf6hPu3SDH3a",
  "key32": "XLCLAxV86GWkE2ZzVzpNHoVA24o3CxD7yiYhMxJBtnpqYnEAMCS6tFHwEBHsZ6tu4kwU6aPXA5XUvxfiKsJ1W5p",
  "key33": "48s6pv2LH8ZA58LAvYT93ffdiViL3bE2CTj47GWsw4thThHtW6qQUSuNMZd2UeBa34cJUgxnaEqN1Cqm6pDgB4Kk",
  "key34": "4uW1JL9ZPcKsY9VGGoadQqQxYrDJhJd3koWQu3MyMv8UXG9jLmofTH2Yn5BvzPEV8gFN3sakPm2NdhRNBSu2TmqJ",
  "key35": "svLG4DMMtZRbGqqqgq7yZwaPKuHpXqnRtWAhPBL9hSBw9p2GsM4Sa5uhycRDMRgm8z2SuDQ36mTPfwQGGQUoDXe",
  "key36": "4qcboAhFDFQGKA981hCB6Jxoe3EzvuAZkX6XTE7N5iV7WbYDZqcXiHx1qMdKyu5SjFgkkCHHPrqtcarV8dGiqDj6",
  "key37": "29LYkLEGnDVqoE3Hhhv19mpVcbWdaCFvT4N6HbqtXseyFGVnCajLM2pq29nf2CooBKyw8ukyPjobWSLXwSyRRdq9",
  "key38": "5f5bLuPJB1wECqsHXXyLTHmg8s3YsEihvZnZhf1dCP7exzu3MRd4ZaJVA32Bczr1qeCkV6HQvPRAeosZDbB2gMz4"
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
