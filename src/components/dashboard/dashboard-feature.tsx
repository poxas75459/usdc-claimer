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
    "5Va4ECs87xAtfhVVW6VndENMb35W9sY8utcER19ToGFrG4Ei2uPqvaEnn7jyt1UwKRSXCBWco4QCgFugTcDfyqTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WC72iFGuk3tyehqwqZMf43ESfticNznify6SUX6f6xWEALPiuUhxJjhUiPmwPKqD2KJkh7VTGT9wfRCau3YJt7",
  "key1": "5oXhsTcstyXeKotj6AEvgb4BuV9ciFk72jhB3U8cBCKJBHRwCwMJvgBo9xDFWUwJ8WaxSGwS6uwLAFL7XGhGjapa",
  "key2": "adtiYXUM2X89vzAVsidNLRVH9r2fpvAWFgRkuY46TUcjaKLtrRjtiJPJdj4kW6F1oyZUVYQR6Dgqqo4qHpogpC1",
  "key3": "3KTgdt1Yee6BGWkhGUc7EGWa24tVQgjx2buyancMAznTvzGHefQKjCunLQq7BVRpBptjqbP4ok3HG3cT1mj7tAuA",
  "key4": "4oK2PnrFAJsmy5RCxWxaQtFnEWS9V9zwEajBeuMqsQ2W9RPSx1gDPRAvxJTmoPNYQNStQ4u5VAvtv2b76aCBnHQy",
  "key5": "419uX8hwNFY7s87dtJywoDK6PDE6zseQwnE5P3FLax15B1okk9SRgHaVePGUR4TKVZVM8NmKUvpjUukchEpVH1cg",
  "key6": "4LdnS9BD989cbrAkq8mRPRz87piJxKgTdwrZajZZsg5LDjT7ggUpHrCAThhbvrcHvAtQ751C898cYaEDuxVacaCZ",
  "key7": "4DwaAYtXshCmUWdcHC7ockwcofY5tBFtvg75bfHbNR6iLier8KBjgQEQcJwxu6JBExADXvof7svFhZ48KuAHKrVd",
  "key8": "3k2bWZiSckMNDonnBtxRjNjbNVZSgZBumYn5rnzFxmrU4GkMN7Wf5tnSP6tCWxsDcaWWG3NGdVmZGjdZtwjF33pj",
  "key9": "7wyfQj5JAzWtHgqTQkoz2rQaerd4RPSxPGPAPyP2YFd9wjhkbBCFtsbS4FnMe1kZhCrnaaxdQw52h3gEhApz1JR",
  "key10": "4qLTYCwDjV1c7QxTiy1ruwVT4geA9EXuycd5NNeSKPJPR4bPZAm66cPZxMWejXSBH5sSVSy6Az6y1rPQ9dRzvXFQ",
  "key11": "5k8prwd22LHwfD51LsDYEsy5P9h5jGviXoqF7g3R29HvExeNRq1asfid32xpDW8Yudjd1BeedV6Q63RLre8Y49EN",
  "key12": "5fyQcU9xwfVJDjTgv7JwewATjcFNFUpuwrPLJVB5FU5TF5TLnrBBcRYP6Sn1it5S7h98AsfiSgWhKdqKRHzakQzd",
  "key13": "4j8f77fgpE1HBcQFExTyCndQPqBdK2xUopewcfM8R47DyXRupq8Qwxqp9q8ZYPfFyCHEWBuzLGsoUEmntvSgPSGn",
  "key14": "4QHnxBGeQofSwncQY79rNU3KmaHYjenjTCdK8FhB7BctmwKAFJH98UgikoHwbEP6JKNJP7M8jmAPb2GjpSRxxsW7",
  "key15": "4cJH6ZUC7ygydfvDUmHGivk5mA48QbHrYjSy5YsHJLkjGCncqxJbpuErD8g6UMfVBA9XzW91Y29pHuLSkUbWK9TH",
  "key16": "3YCLKn5yM6XXGcP9PqV8tEDY2TdA583QahmYAtkyQw51ix8FgdcqjUBt457hRhGMxhK1PZBETh35V7ERPWUqWPSa",
  "key17": "ri9hzgVvu2x7E7rvYB1pH8k6dRzUutJbTURS3gE6pB14vu8ziTF8MFBQmiUxyLan4D1beixZpWAoTVqktzLu5XD",
  "key18": "5VtFFe1JBM8CZtr8mN4b7qKCR7nEZifW6ptHqu45c5jxjM3jDMoqCxLVHmyboQyJfqnPFudzicSTP19Knjorgeyb",
  "key19": "4yXUrkV1jpCX8eFpZHMiQ5tRTLxKNNmCwTZ5vsmaCHLMm5n6WsW1oNs4x2hzvArxoH8w2H9WrZ7HvJGL1K6ZLyrx",
  "key20": "5n4F7Fr5KcavqWVD2mE1jEiJ2qPeono7sezSEM8QtCcJqW5BcEm7MtBPY6GCRQVMfQYFtTAXUbsm7dL2R9QRarYH",
  "key21": "G6dERd9f7HRjvDQyocwtSsvcWHGJ5WeZTezcJHuZn55cxyWLJhdN9GJMQmL3ku2NEkzyuovqpjrxmi5ZRGYWkiC",
  "key22": "BCDj8S644R65khf7gzEm3zqiUVFS5CNc64wZGfAFWeKMHg8ViLfNVCDC6eckjxqZ2JaYUswDjdFwym4q7ZfebCX",
  "key23": "NkQTeg47pW6fih5KHS3UApbzyrvT32ekvnrjoDWmxXcQDAJid2zwKyEnSJANioTCwErgEYRcpEhvCdvmbH3RQG8",
  "key24": "3iPN6R8TY2Rd5kUAvY17yvq9y6YbVckrUCAqQwAyQuYNDyfjuz5eHukRTrAykYNeWnLfN1116MQ3kHf1TYRaqXG6",
  "key25": "45oF1PB3eFMJB4bPLZErXSgckBmnXzXyYqCS7siTzJ3hYbs76LBfBuffSxzX4MXsPHGbc7wnxGgS6W1jm2WuVGCX",
  "key26": "45JfVH3bWXFZvUVhhUbtWTFoKK3r5Ae5L5H5jJFXm5vTXbgGc1u7L7WLqBSSyBbdzATrNp24bP8QUfFTz3KpyJ9y",
  "key27": "rysBMczdymCeyYb5nkSMeWXAkBgCsGZg8G4vbMrJYvKSnwfLjkXYstGLLcFibgsPwmphuqc2YdRGTmQjJE529fZ",
  "key28": "57DGC7Ctdsz11cKUdYAVaf62NnpHPipPEKtua8iL8zgsa7hpgkbPz881pr432Ba24UuhJVWCEczmKHWs471dNMYY",
  "key29": "4yT3qdnVJdh8LrPjdKHeofLVtfG5iSqcNf8jSFJBKmFkezsN8U4DrydAF6SNyzXhgEDoafxFmGiVPSgkxQhJaFSQ",
  "key30": "5qyAnLc3RsEvnBbU9dheZLXhp8trqwhpcKw8786FavuuLJKCgCPb9f45nfYJhHMabqeFxbFXwiApGsgugY2VtMJP",
  "key31": "4T7eoeGQH6vhSxGyXym7ed1f4szhKwZnJorfq2WhtvHrPM58oDdQkwtYceKxdHwbtgGwTPYBvYTrBhE6eU2x2BoV",
  "key32": "5NfVXJgF5ASA8EC1nqz5CPsBVSCW3x44iDivX7nHPnMXk9bHg7NLBm5WVtTmMnPTRxedhsLWP9ZJ4kDHvvTwawB6",
  "key33": "2DEwPRcZMFhgjrtHjnTV8f588tKPt585BCpHkbem5kgHvRbGNJpfPetpuoeBAa3E4eg8pMyVDMnXyU5AtSoRSZtP",
  "key34": "v4hWzpg3x1Lay9UUQN9Yjpdg1P4Z2gH51AuMkR4b6KsfVcrQFG8rvcagmVEPPwpfaVU5kQxwAaRynkw8suiKbJs",
  "key35": "3wdPtARz6TUBSjTzSjtydSwqTCBp37fy8mtJhuowuYGWj2WonmC2yaKv1uWHyqUJF8PzkLfmcUM9TzBq6PBdeHCF",
  "key36": "2FiWtetVAkKyyPCxW6E9yH7kHqh8b4wts1xBFra4DvrTaxFrdV5i4dr4cVSS75CmTTNmJb6Hwi5Jin6SsSdckv2u",
  "key37": "47L17BQPmgVHXbdKhqy3CB5GfyPqAi578KArsq5aWHy7WhPvkWCihNLPnQEHtyDUdKWn6GUgiAQzeRCgFQ8DdJSU",
  "key38": "25aDkCRiyHLUnDQdTSUsU5s9seaeyoCMCsGmFgdUXyPF81QtTaMAmhSvy9bRCiya8mLFWEgwMFD4zo7d9fX7XcGQ",
  "key39": "2R7GR6fQPQW9yUH7D4NwbV6XCW7Az72Sg1yY2RJ6FHyczhfHi2G2Pu4E2buKGmPRSazF7cbQffWa98pUzAcRB7Ji",
  "key40": "4jKNaJek2NuDHjw5ZjzokqwCgnnX7axVWsYXTWDMZF6cD3o9zpUnhtdgNWqiPRfByrwHZcL22a6jFNR9r7KhcvSu"
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
