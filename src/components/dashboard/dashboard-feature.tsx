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
    "3mUxTt1yyaFuU72HnFxMAdLaxBUVbp8gsyUM518uUSKE3XZfHicsBbXPUfNw9yG4KV713JNGVcvTxioxNGztD6KG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ksVjFhmgpm3xti5xpLNjKPukkGCattVqmC8QcZkkBJF8nPSBHimsA9SoSej2hLpuubQcpaGaigaWpmpGcUt7Cf",
  "key1": "596WEATLF6wc2fpTDjsavv8GcwXYSKaPXAYUx9p1uLpDRPxrDnJ9RSXiBNNChatfULc12Z1pcHzEYxz4nnsnXiaB",
  "key2": "4Wg8z6BKESdYhAXjwXaPbziH4iGSamnsEqaDUu6hVd4THdCRRhq7Kew3mWCMctw8xk9u8gwUNi7wsRui23oo5JE7",
  "key3": "3PJCY1UUtDGoegvwskiRpzrP1bE8AjcRMUGGSpNRrBPyi185U2T5YUqooebHKwsuZre3jsjc6nEs52NJ1VqL8Y6v",
  "key4": "C1Ws2xwwzz7n5Qz4A3fSykpyswSyg4H1jBYwXe8eLLzXd391yL9WjrV6n22vNW4stm9GArDnjB74SMEn5srZqPs",
  "key5": "3nTm7Pg84ZnENyKvgo9umXAY2T46eJV7nasSse8bDBUJdSkibWrQFUDznt3ULoNc9tVyM6NNwcgPPaHiXspBG9RH",
  "key6": "2ncjjFgPTAHfWinVA5FYfWtHU51DV49vyfgkayAFfUhxyGnrj6HHeeGNDF6neJ2gNUfFn3CvM69D7utBNWr6mxMh",
  "key7": "54afZsVEULcCMi689wh285Pk49HFNMgxjbrq1QwKTpcfNxV6x1RL9ZpiwDENtdCUT6y4vypySErgBTkA9y8R6vox",
  "key8": "3jNSfjW4HfBNd1A9TPtGX8kcjUzznvp17cn6crCB9zTHg6qsUtca5tLAZCDWEmaQGCUUHX5DD46mULwgXJBUgtLd",
  "key9": "5w7TGSnMUbWf9766yT1pkWVjUaLSPu3FTbPHUXec4Noppdt5Ru5L2HcDJFFmYK5F8QXUEWZtYDKaVbFLq58uwWSd",
  "key10": "3roSyMBhhe9vDfhYjDXDcaCPA7wnn4UAwSKoVk7foZcZJ6pP8D7STU1xtxowBjhy6WirSptFtfr1BYsrPDSXB7dB",
  "key11": "4HntCeurdVEYAuvxcMedP7xkNGvn5gnmdEAaW1b8mVt6NEbN3pXrzpXqecdNSCuMerwqeoT4qFZz2cxLrNQ9MiTG",
  "key12": "LKsJNWLgoqasaRZ4XG3fT3pPxFVN2CqAvUHz7tcQbAt27wAA1P7zfpNa4wHDEY7HfVFoJMVhKNcNVJ23oS2Qtic",
  "key13": "3AiKTJZ66EnKPR9nt8uFyAGmZXVkMNvVLq5Dz7NSiUEe3QrJ6MLaDwfQz6MMFU5k37KcdJmRVR4ADhHf7kLkdefP",
  "key14": "5Dv3EvyncK9kpbpDBfoB7dthX8PZP5JbHef1MAET8LiSuEYnD5oSqvgsXpYHMhPqxvLZ4469yWMTnaK9wjsdTSAR",
  "key15": "2wyEpi1PD3CVWPdPZWsYvqCQNqov7mTx7fmX9eHstdMFEyS9v3fRoMENeJLrQtNbAdw5DzRCF5Lgw9tq6ET5SHLU",
  "key16": "4jpaqNGkuXgZx7jdJ4aYexKgJST88J5TMzJpvDRuczVqgb8ittcQxer38fWTmto1S8jw4CRpT6HeAjfesdPGM5UQ",
  "key17": "3QS72JVbY8tehA4TPxhPJ5TcpLHybyhBzvTodZY9xwsrgQB65tndpkKjhRiPvGE2kmxyGiA4uXYAtQ17wKBmqstH",
  "key18": "5BvsSW1GXVZHyqgp6CBqKEjbimnw8irCJZdS9J18hL1mqvs8GQ3n25wvZgjBeZEiJbhFiTirMYqCWPBZviwF4SMT",
  "key19": "2DvhUjivxfrwubr2s4XQYKcM2TPudegaMKTpPMmv3sEDSN4ZJAcT77K6DktKieq9GQvvRY5qDrTqfrfUCRFchB7N",
  "key20": "5S7fiNabt1gu17zuY4avC5PW9LNNYCoyP36KCp7jmjK8xYeLJuSpYvBKojjoee2wZGPGY5cJdtRFGCw3tLMGffCK",
  "key21": "2Ycz1egnfaJkceDNPKinoQm7CUfy6nD3TuizxccgL6tozypQetmKNemb6GdphjfuM34obkWjJSoqJFiYCMxg2tUb",
  "key22": "67ekqPhKUM7YgwDxmycgm7xJKxtRRxCnxvtwRbzM7ugQGDNTGuc16jT6bc16i2aQJAWfNzQitZVZANHDLJAMtREF",
  "key23": "5v8XkVSZMJimRaZBBE6ji7DHC1bTqA8G5iwTa3GGE25SLszaRnfgsLNTzL6bGp5hb4wutPQA8sXaromNPBgRphtf",
  "key24": "4hpGC8WJprXxL3Ga7Gu8FgVYNvGeGog8JT33ezMHicESGxF5YmTsztK9p8AQ3Wb98JVxDPEd1fwYBqPKfTRgwKMY",
  "key25": "5FFAACrgtNKkS15XhsnUqjNiV9HX9qM4EwQkxc6zh69QBHQDeMUHkHHvYGRmgtZfaEs8YN7nVkfGp6MpS9f47pca",
  "key26": "Ag9WGQihBsieWZQKgS28t6BnGxEyJfDxoiQs7o6Nm2kZemSdFTHE73x1Rh5YUBYBGRfodc8RxKYw6jaRnMLicdh",
  "key27": "4dJhrUryDk48w5KXD6zYNYikZyUgTEvsaPwjRSBgA2mBAWF7i6C65zLcr4c1yfbV9ZkH7gkHMU3wUh57DuWCJDNv",
  "key28": "3UQq7CfJL9ZssKeZaCxTPNZnXxa6LmeCZaPTPRqUy5jXaEBUyaxUWszgunVCsj474Ynbh5RrSaCRnNYFW9umA37K",
  "key29": "5vVBfyWRjjWr8pKBmsM3zSdWxxc4urNv9An2GFMkAgUpcvVR3KFv1iGEknahXzXdxV5PcDh2peP3pZsiXRujA6pT",
  "key30": "5J9Drq5NKpZ6Y8QL1WttUrB2MCGQGWbvUmCNpQTxLJ3KuChJ61UkMboFXw6JFLfjXwtYNyveLpA5L4SBQv9R2ard",
  "key31": "7RjfxiQ1be8bdzFWaByepCKF4yJGwJCK75UZvBDXaJKuhhZbaPbcxqmaHmi9iTphG3imEqVqiKCrFY3eesTpaEE",
  "key32": "sZwJNFLCwHMx1aFWA4mYHfY4yUZovwmrRYBA3VJPuVREkKkquDyVAs3WHCj9tEMdc3AW6uDuZxVex7iaWY2eKZX",
  "key33": "Q95GNMupW1zeJp7CsQXS6n6bit6wvXse2HDK5tDCvjunvRGwH4R5b5vwMSh7e4Hr5s8cTutdZjGyzLEiNU4RdKs",
  "key34": "3eg7yXkK3XkMumXPzehe4gdLU3xAkhWAZmj52AQ21nqh4CwCbwE1HbHsrB4pjEus62ekGppdb187gVwn5Q1r9MrP",
  "key35": "VWkAJGSmKA1bx6U7N5EHXmM1Ln5x4n3nsnMTjfS1fWjzNaiRnpmkVYwwCzWYPxM3YbPgNoWtGFbAsFjpzpPv9sm",
  "key36": "4ky6XTCKGJyTks9zkvx6wVJguk1qUpgQmciFM3omcqQb8guRhHsNVxKFVpNuguf5R3Vy6KgJCn4HEYkqx6zP2JcT",
  "key37": "3tcGpXnXjfX8mtHvdUyPoTsTouQia2zPiXsA71Q3No9PMcWDaJYdc1PCcPvjy1xrMd4Muqp7TRqHBo5ThqMTsRLe",
  "key38": "9GbyuM2P5E54Xoz8MdvPKUskvWQjBUz5Svxff47eyQTvbuHERXnyVyo7s5vscXLj2kUuLFvALLcZ4zhLdoFHfXi",
  "key39": "2qqGBeenKwnHMmrN2vmnzvTpfUXLeuT2DD4ervhEsQwdDjEjmu64M8wEApj9R37pRSYYdKZYRD9FTrJFfs98Qe1R"
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
