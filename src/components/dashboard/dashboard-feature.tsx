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
    "rv311aj6dG9JBPGSBMcUgN1FawvJfDBNnZUrggNv9Xa2gvn13B8jFA2rLKNME6JrVXPcPoAetNcndYP1rVdnBUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2STjkFwgtBGjkiKJgkzDa1TPesHUz1ytZULn9YLpBLTsC3xTMNSuvHXfXnkMqAmHQWBz7szibqyn2eAtT5z2Ay5Y",
  "key1": "5w9zd5oMRZG14D2zXWgMWiG6Q9mxmYcPKsjAEoVYoFUbrFkUgbZea6yPCwi3hxbpGGLXES1Sn4U8dZeJ7QvbB1AN",
  "key2": "3uNJMbXWp5JtTVqtkj5Tz5cP2s1sbTGL7JjZmMk2WT5hpMeHM2RiwewDshhQ5a3MkN1AJ9AomJAe5ebiaq2YC7XC",
  "key3": "27gzU2JxWGbTLmpJkSNovEbbKM7uZAcLWj3AGjP1QJNEU8fPBmmbJQhu5Qici7sEGrYWUTghVZtk6LqUH51B1pj8",
  "key4": "9JETFFdEumxd5r1kyMTbZ7ux4QQJyGFPACNTF9cq2ENMgeXkWRG7p2ksRssfNvtTA6EjvrZtYd6jenBYxmaxALG",
  "key5": "enGGYLFRDgERhpRgcbBUYoPLQMCzJSQ4DS53SV2EtYR7YQTBXpp3pmDAtYMDiB7TS6NxFytDfdqzdubqW9DbnU9",
  "key6": "HZgBndN81t4tczeUF2RpkcV4j6JGca2s2onT4xL7M5e3RgAMc2t3aqmAGJxk6W96XbovgSoqTTeEQUkHhGe8cby",
  "key7": "5x4VqASzvUXpvEy7yRz5Bspb3H6VXC1579gT3qgNJCj8ciTfyqd3AX1SuyRCNWtb5UgUJ7yv9ys4DBVCd2413ac",
  "key8": "5oRTa73NTATeoXtSgaRuyTfN9bsDiFdehG29WNiQWhTPapsMtsQj1AaCtJgRcSsjCUXG9x1snuCotr7bNxwEiyVK",
  "key9": "5ALHqEHcvaJkeUySZJvwbb54oQL4qGpd8RvrHiJWioJQuz6QpWex2cY4Uej5fysQMvL7VZmkXnSLWEKjuszZVrex",
  "key10": "23VcgATRB5cBpkRm7pkdXNuiXDiXnLTnoEuixw8ndQVcbind5C9e3kRYSiamXFWcoVhxkWms8zm6wp7HbV91MYqA",
  "key11": "yrWyJrzsrvBXtv7HaxyBzyfzvFpTfiAfywrsFvALJVD1yJH575q8MsR7DudCqq8xnMaSe8A7LH4tWgGj4fm8yn4",
  "key12": "3cpaWv4XMKMG7FeecacT4oAztVBPejSrr6uedBeccwZhhYKgJF93RuL3PKSLMm1VJVBAnp9rFeCwFbRpDuuMd1R6",
  "key13": "2Sh97GfTcJoS1jKTaiB3Xn93Dfzyr7nLsv4SuHQzPVWkwzCSsRf35Z2MvYdm8ph39Et28PsFv1cAQ7TNnwbAj65W",
  "key14": "DhPcFNQ7rUNyUQinu7Yavph925vt7niRiQCYsnhtAYUBPjV1GpUJ4h2mdDmxU4kNEJQgNjvmrDpxRK4R7Ya81J2",
  "key15": "4NgBtxwSrYmJuP9vTSNmVqmv9Vao2q1tuyFDQ45iYGahUYDJ2F2rBK7yXAZcu2ZPb4a2MzJw7TinaUXtfMJcdQxX",
  "key16": "KR4h4zJH6iGNjQABf8yfpaMV62mX2yCZB38ptUtziPfUaYDSMZ9d3WwwenKkNMHWBcKyNYdTQjKiunpUoMbaN95",
  "key17": "35uDu859ViiZwewendxzKja8QV22fM8ckEHQMtX5xscnVnwLwQCuewfHcsAVmCiWZKxqDTyUVjv5yCZq7VggBzhC",
  "key18": "4SZJ7sPEsjyL7zoqF1r92cKURTYzpTGX4d4iNuPjVuHiJ7CeZ9uUfVjzWYydukjsq7cPyRJgmpoeXMAFdrkDo6sR",
  "key19": "2UPmkz54dnN5CWUnA5qx7n4gKtu7LVa3jDVQxgAZ1WHuyxTMLGYFKuqVAxo8kdpPMSL34SLJaHnp37oYdSJstfwA",
  "key20": "21HJZEqoqo8osLq6PzuMNZTukD779Hg2EaW6WMniX6YaTAmnemaY6rccouPGv3oZeFAffbgNAtio4Vt2qU65NVcs",
  "key21": "4MbU3S3oSU3bD7xr1v9gMYjvSjBABus48QohgdHXHaa5wB5p6iAXgsGqgyjT4jeusifzGFc7yqXWX86FmpjLaTJM",
  "key22": "3isApGaXcFJoMb92F4bdyyjs1uAfWpcxAG5mXurkMSi3tFhYzxzqy9gMyXVgpNqpXhLM77VqHvgEDuBYo4xCMpcv",
  "key23": "5TdizELrSNWFZrzuWboXdoDQ975Lav65fxchk5rLRjF2FvDnanW41QN9cBGFbnZnwy7evPzkarNawUBGzLzfVEvg",
  "key24": "39yPgCTHSznqiBTgJriCxxY85stPGBd7SVra213psvfeWn1xa7h9iwk4pu3k6yzqKQSGwi6MCQngfrRazuDtxs4K",
  "key25": "2M3CurVmjkHBB8Cnnqp9BRazPq1KMUoEqVLtWBsNP3Z4EmWXBfdbadRuKeaiG4yG5TXCfq4LLyPPwQ9pAK33Sk5o",
  "key26": "2fP5A4rMA6xzd6eZ1xHff9Ra6k9or5YHifURt7hsgb9nzgQhJLhLFr5yqna4w54Z743qcwBqA44mWbAjitG1TZEh",
  "key27": "d1p5wxh5qQzfeQaeMusyUu4EEg7rqNrn5Yk8H1nEmPBUNvs2Avu1YgJqNsD94mAKZHCXJVMEaQ8QCK7gyt8gxwR",
  "key28": "2g2B8aq6ze5ZFcQRP43sECYoMsmjpoUr79E44wxLhYWE5paLoxihv7jR6ubvfPjhMPmp2xEvZyGRvZKgj35mWPiU",
  "key29": "4gcBwJKUgDa7hEdYkJsyy5mT9v4bYL8SC3s4HmD3p3pa3tpxzLvjnqKhmh7A2A9ghLrfBTqFEbydK64j1Yfu2pnW",
  "key30": "npv5KrTHCBazt88dK9aULP38sJBFwbPgp4B2w6dUYA1vKSUEsPNPjXaQqFaYxUF9XhVNQZX6vvaKyFqFYsA7yjc",
  "key31": "K7XywU3axN1nUFPCH1hhRMJcp99pnLtkDeESqk5eRqWFwtph9KRwfNPM1KPrMe4sTK7x1UozadaLzLXbeAL3KTE",
  "key32": "2sciQhsMvXKdSjKMc1v9ew7xSi6PL6ZYcpFgSa3mAb5Hf8CvY6rpThquN7o7RjkuQt2h4hqkW4oYEAu6aj4uR4TG",
  "key33": "J6GLYfdQPuG1trFNkesheHLjPEeTEqKto7S1pFqGHcJNvZQVwBL7aPMdqJGEFetxBd8ZTtMHJ9m8iVj9JeeGXhH",
  "key34": "2kWDZqfMTGnYjcfr8UWATG3mdrjTvkGNe92nrpjvqDRsP5wfS1CYdnGetwyNPq3K2ENz3XuAMRAammg64jmCvkYm",
  "key35": "5dM1VToWXyjZSb6MuWSz7n4T3DLxTfz3byR8ewdo4e3GckLoHqkittGEdUR4xFJkq7CBYmQfrN6Tocp8ixYVKfWH",
  "key36": "2UW59JgXHi3c2DN6p5fUSaRiEcNE4k57ZkrWEgoHzRF3p9FoMGSCvcpGYjtkEfAPsd4gkuXu3zSkdeynu6so26hJ",
  "key37": "5q7A4xktYdFatyZxwUiFT4vrE62Z13BgU5Wn4cyafXEufGCqVTvDh17eBnu8QvnTo87LWAVuypkKdfp53LNNfcHA",
  "key38": "2gckss8aNk6un5XKCJz7M2w5tXbECnjtQAVxUPZRSPTw2iUNv5thLrbRA6jBauhuzPqnKjThb8FrcFo8FEx2AgLb",
  "key39": "64WWbHqM7ZrciHJ4cLskKufbwLbZ4E9WKx7TwP3ELh4oa94UtwXe4DDF7gipro32NGnXFGKQe6eZUVw8uKVxLSuL",
  "key40": "3z9k2A6pSKosGgy7epGLAAuN7AxR9m62EnKRdb4A2CU2kRhXDPSEScFYU7LUzVeqStMk5pvpnDv6Uwt1ZTWFbEu7",
  "key41": "28sotXE1pggakz4rjgxwKmjzhJM8CaoXrZBnukAtQRP9w5cMxrdRqjZAr5fpVfjDRSogdKosUkjaMfYWBTR6GBeD",
  "key42": "27g98TXxYkKyx5eCv9TVpXd6YDGECjbuKpHh7Z34MGzE5u4nsteD6VRnAXajg8ppkuFStQktn3266fX3H8PC79qg"
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
