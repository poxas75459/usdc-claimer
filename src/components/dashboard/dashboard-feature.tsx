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
    "3auVRvSdHmE9JcRM1WzLoX3wNbtGhbdW87s4diN7dsQw1vEGGugUsh7F3vRPc5yNZ4Mcvo42kaGNg3BYpHvs4DoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L7rXYFt4p5Y1LTUQPSkSh6ENFDw2WSDEgqjaNPLYiNkiWSg9fe6nAj6WSErYG9AZ3pbpF5uuLrDuShm6M1e7vFX",
  "key1": "3nYCh89PFceatr4bFDMdzA7Ku9a3Emzuxq2vzqMJSwwTzUnwAyCkX8eP3RD6naiVEqXDL22Gy2u91PoDdiv9WmHy",
  "key2": "65nDKiTU2MApCcyCkL8jrDFAPv8SkkUXwwhKTAGtdesJ6xTGVdGigDNfmEib5s47dXpfrx33mKgLV72GE3MuCruC",
  "key3": "5NdAsuzjpashNXkmdGtyeFC2TQ9yHqmiRCcaYdgYcK3SyGwq2627S6A4Z1Zqa2fz9VyXFQCpNnU4ht2hQmFzL5Fz",
  "key4": "3jLesizhSQeFuhBADmAcjr26yytakWpByJGxVSxLkBQBVDJ3Bg3RQYVR7wkgc3PxxVNjdFmea8om1m4kiDyVoeoi",
  "key5": "5qLcPVEhXwktgtdyXFVxbes9XpuKc54D4KrK3UtJ4Tam3hwKTWFummQvk7nqd44wKunqeCLFR5MebvABsRuCtwZJ",
  "key6": "39VBcFjCiHb3Rx7QKHYEPJ5px2FJcNKoHGQtRvTW1jE7tbqe6bfWSd7Prk7oEvfJoAcQGgADDszcZoggPq5piRjH",
  "key7": "36fc3EB1UkWjKeup82dGNnVbSVh6hUhj1E7Mz997CzNmVcgBS7ybUAtRz9dDSts2kU7QC7uR14h1ztgMBHxhxnhn",
  "key8": "3KguyzoLgJda7k99hvnZCTGvhoEVopZzRTNDFazMiA44x81Q23ZCQPDkZ36N5J1BjNykb6np6g3p4VLXv8CcdEMt",
  "key9": "2XHafq8EdGMv3LrEoQ3BDfU1z6hckCP8Nq1mtvBszx56ScW7rz7CeVWjfHywSPm4K3uPttvRj3TRT3Pd8sNLTspp",
  "key10": "2UcRiuHMnKqDMmyMhRSxhfJuS5A1GhA4iqwWmwm2Z6xbwTe165Xq48tUoWvd586Mpyyv7s7QkencbeKgJmRbU8Jh",
  "key11": "62r5DBAvDdrqZkxVn8JQirsMmDs6b1gki7JgjAbJ1D9V7ERDNxHoh7NfsrGibLjzDF2NjpKwCxnfcT1zHhQHvLB6",
  "key12": "3RMndZb6pHMAZbqVhjJkn3txAdwyDfD14qLrtTtWziB7WoFSQ4YNBoXSdyvZYQZH3gB7cjbYv2AdRp8npXerQEoF",
  "key13": "5HUWyajaNKdhiGXL8LMm1V5nwdbnsRsZ6RtMntmKCHbvqSRJCy9z3V4y4tY7mSJiDctoynK5KEQ7RiKPi94QG37v",
  "key14": "GW71YYL596DYozgN7t8UdcA4hECiK1BjSWe5wS7pdLnyGSEEBGWvZFoR1GRsWZ4rGs7X38PYmi43fwcKU3MHYzH",
  "key15": "5EuumreY8nyHYko7KMdNT8XqcS7FhZZMqm6yN9mWDYqdWLxgwor4fSYUSe839mCpNGb33NxhBWkUFW74prnAXmz9",
  "key16": "2JRGktZdXcsoxCiQw8dU876VTrESzmVjx5Y7tsAs7xMFBAfFDW7ctnyRTFH2aVwKr9ExyoGoMcRZJQDN5ezxjRMH",
  "key17": "h4ycHUUCwBGqwUSK1BL4q8xyKgQz5dYxVTfvZ2CezKBExP4gUcoxXfq1UBvs5RzNDZyPPjsioyTUVxPZL8azwxV",
  "key18": "2t73Qo3KCACYiQSpnmV5R9zJEMPMd2ocnZw73PdCxaSxhnPHiGVb8Fyj3Eg4nGCaLUrXAE2iNLJMNSFJ32dNEM7z",
  "key19": "61CFpd4Vmf8u5zxZKU5v2U3DEjbBy9ToKZ4sFXvaLwcBZHFq2ekpJuedE3o6E13GuYQctbrXHJf4dih1YpXrprrW",
  "key20": "5wbeBoMqQmj7K75no3sJTTZmV6TXXm7QrGMBtFbv6aDJeasBrThNd71ouAYYGrUgqCWdxnAUuijxE7Uf4e2jGVMP",
  "key21": "3oHaPnQLeX8jgvTEoJygib2CwZbx5ydX9Ag5oza8AwFFqcoSQtnweuNrQKWt5h7ZsMVYXxkGop967kRnYgf66dTA",
  "key22": "41q4cRPThwmScXRdHVSsYJxNtkEUDP2MyHM4vWpzmJkbRKFjjDQ5Qu4eW1nrnrFbMq73LhL8GiFmYCydTmASygQV",
  "key23": "4RMBbrrqXU63Gd2CsRUKpJbiJKeRAiFSK5RJUiJ3fzm8sj3QdCbgFg5XmavdLNrDBGtggbmSVCtWR6v46o7UnZPJ",
  "key24": "okbbP9YU5YwqVfwhymivejwiJ4iJE93KsH4K56pXcncFwpS3iKn4cajoCEjUE5gHWUn9PHp3r5Pggqj3gDx1xiK",
  "key25": "457rudPtXUskGpoMWK9928JmSkR7z8MxzsT2AiMeTKaYeRMai1a294uMywtez6uY26e4ZYrMfX9xVYNDcLZNXD87",
  "key26": "gquFKrb6YS3dwfvjAmQMA7di7A6EL14L957LjYPoCxymCsa18S9Gjex7a6qettDMi7sgNmnjrGHqkn7XEKYHtfg",
  "key27": "pUFQHe89BZFWZhkN1SbRPvhLzcamaJkgTxGk7RPesJh6E3Utn8TBQrQUPTEFZHooaTBmhWebTQWyUbGJLS43NWA",
  "key28": "4KpqE437hE7hp97xnY2e3zVNvg6auQZuiyP1r4qu6wwJiGR7fKLufmLj5fVmGD2F5RP1S35TERmp8HTN9hhcuPuB",
  "key29": "4bw8mK6ywS5kiUwytjEm8YKsJd9Q5wHD4ifc1ahcXeEdKjrv7zaYgK5TNMXHH4vtHJ1JzsmkF2hZ9J1uEAs7RumC",
  "key30": "2q4ycpKMbFFbWBbMbsP99zPgdVmZ97RJHhE4dwCq8Qw9SPXsEniiX8Baezdgk7ZjB61ZxbgxURBCn8BL7JCkrkKb",
  "key31": "hoJ8AYVsuq1RNgrYfb4tgc4VJJzyjdWyPm83doL6B7MYbA9rpv54erTQUhwYVZFxN8uCe25s2QVS8RtBQVRMZfX",
  "key32": "43TCQukuFRus4G871uJYYKuk46aUFmkqnjZZYtm1Nzmgkc5B1sAFEmQzUqrAo3HhG1iM7duAgYxei5XCEMVmXX6J",
  "key33": "2XUozE89MczDfowB8BSQxBE3pbyPP6b6xsHWWRcJQbPeWm2485GfC9GcUWJZKjs3mizBQv5E1XXowBgW1hHQrmSN",
  "key34": "4v6yuXxstHWypKRt9Y72xbahmjRfFdfHZKEdkH2HUJVCWstuP1x4z95N26ReMXLDzLf2FGC58oRNjAhxSX2tqrjy",
  "key35": "5Q7gzaWx8HeS9K8Y7YugnDfQjKstKmrhAbt9CmJRNrpDidKo2p5LBJf59Z4K6vajtAeZiEhX4baoopj6cCogcjtw",
  "key36": "fKoiuGaf6NR24U9XztmRiuzuNDGchSfEWsFnVcEsdT91CojFHeXofEWzMmavmFvPBuzhrnwbsUCE93R4hp742Hy",
  "key37": "24AX1hVrYZeE3nJKCHYMbnYBqbujiWbmSVVQAwJKiAKKqdiHSU2SrpCbbZonZo6ro4v4qXiRLAquLiKMizX5kn1E",
  "key38": "5SjmDUgdTQphRS6HqfG7REYEB5RuyJt4tuyRMwfs5zsc8b2N2TMwSofiS4D2yCUjvL91ESXVp9tFYfYXuXbByJhg",
  "key39": "3btzG1Mcub2dVo2dmRSBa9nTDrkYTKTWWLdNp86QiKXFVUzNbLRKb2bcMz3DeptzwZXozfh7g1XaepQD8csc7LNa",
  "key40": "2SY5fFjtzLwTzUKLy7TboxSpZH98FLr1SfJvgnK3s3VbjWBjf4vSZxn4Rfii2g6eD75VRtR46Fxd4Se9y4mMKT5Z",
  "key41": "5TZiwvLD282UhUjvi7n5XZtp35CJUoE2aTNzCLgYNPJ8wxE4W8zqw3P7hTBE1fnidbjcbHTGyjX44z9eX1Kf8TMA",
  "key42": "5JL3uNbAWzFoXiaj2fFR5WmBfFCtBjv2VR8ViW2NLTTaZPZatnBKcMsUvMb8iZAVWfiU1fyHiyh9JwQGh7xqhe5y",
  "key43": "867A69QxKzNktfHQYKxTayPddcf3cd6V4HbUNh3HjSxGv5EtzXGkJSvcwo2ENcbEbA45fLWj89Cmsh3mXEbAbvT",
  "key44": "3QYDb4KZ36s2Ejxco8tfB9kapTWT54zN7x7TaiQop1BQGpE9f8UhJoNkr79anwU1zC8VUrKAoCoWZ1KEBuqbCTYg"
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
