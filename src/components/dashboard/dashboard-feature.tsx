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
    "Xs9J6q5jejeTyvBDuXsWjJt9Y693ZQkaDdayyQgLE7wfx9jKZbnhgcPNZJArA2sohckr7DnbgA5WEzY9iFZBYk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47vjUBKV5dakf3NGKexy44smRFTebsoLTBixyTCJDEHGLk1sRMEDBxhLdSCHehdDPoe8sqtrJdysDF72skkyvZ4q",
  "key1": "2sM1boFGi3Dkgeu3bQV8xDKVcfTFyXNabN2Wv7AhA7s5GsrEDXghtWKCz3k2C7cyGUTNhKfb8EP8CBmLUcJtMY6P",
  "key2": "2EVjEgrso4RVVwVLpZH7jbPH1qcaZbcFjk4BqRNCZeRacjpHwr67it62wi2MHT4r1S4d9f3DRevUwCySZphSVqSQ",
  "key3": "57VquSKB9834r79oe8SksfUTWssjY49vyoKfVwPzw1DNhWxHom6HHznWsKtjf8sMPPdy8reMP43FsdaQk9pZhVks",
  "key4": "hyVR97w94RjzDGrJjVaH5yodczUW6pS3YTQB6sjsfxtvqrSqfbcbFopfKrJDm6MU92ZEyB4Q3jDoX3CpkZ23Jwi",
  "key5": "3TsVWDhLzfae5VrGZMZuYtnFrDq4bnozpftXsThbEYpQrWcaJabmgXCjb5MCzEH5sAqJJ3xU7npS8iw2TVrwAEVA",
  "key6": "3fMZW7AoLoCb9Ccsc1hP5dXH4qsGKAL7onJFHEFyAZ83mLAbZruH8LCpGSxTdGbXiLiQBSs6L7KigWpVMAe5vysi",
  "key7": "3eUi6AtsCwz6vxC3LnunNvP6VjKvZBRzYKQSZW3vPro15gBSwTjgvvFsZf3LnyDsNY6W7VTimusixhB1p3eyxAT1",
  "key8": "61yan5UW1S9A54FK6KBNM4LScPvWgRoPME2BL6ncHwSqgiUHaPAHsGGTHacxXGUoSPERoeGEEYLZKqZayu1HNtQs",
  "key9": "5YFjgS2b19F11mzqjcGrCUYUYLsAyLyTTVU4agJbSSJDk7evs7LVyZmbigeQsjsyQpPKVcsGqZY3bdZffKk1Fetw",
  "key10": "A7BtFY4QsKsfYYnfC92fHXb5jnaofHqm78qWH3sx7oXsP4RSG3btqFmRyNuHzNyLr1UMH7BQEzYSX27PUh33hFB",
  "key11": "8LAa2nYAFyiy65nAWAwkSQauUY8FW3h6BSFB9LxiNgjs8wiMeQEu6nqV17q1Y8w4Yjo8492VLEzbjEL5tjvtAWA",
  "key12": "5692V7awGQtsXNRwnd7zWhoccaGfFnU5Pi5x6fUvBytYSNfL49oqdPu7vpvq1Mgi3CZkszCVbSKR641BVijTM3bi",
  "key13": "izhk9FPXJjtNRPDjciHFzatizMkRN7jM8tZsHpgxhNgUxcboBCASc8yZZsEtJSHdticQdR8uUXxcMqgZwJekepj",
  "key14": "25FizRv4RkW7RKnEMwxs9Q6u5iCkXFJdGTTyHhawvSQB29mTxP9ymfGRvVxfCyz5jC5jk5eT21UrFSRYFbBZmiyu",
  "key15": "5AkPRseBbN4dFDPpo96h4L19jFChpfrARymA2Eq43M8yPqLA2XJVgp9t4CiPuE9DeBdxoxisWqQsj3T5eK98cYfi",
  "key16": "55hDK9bzy4cVtnESeVrX6nKMjGqNiCvvDB9xPsfu7UzW4U1bu7m9UySxQ8ccwtgqEgjLJC4zb685573ehFu2C88K",
  "key17": "2k8ohPvufmzSfMgqyR3DsacofrH6TKczKhrCVFPJWq782SZoVm6HMRoR7sf4AQH7U3geeN7bQdEhefS7TGf3unk5",
  "key18": "uhKmy6CCohiBp6oFwJuXCTEXtDndJ53T8n9tPziuBGwEkBuCfrPxQ1jgkYseMVhwUxCZtfYoGqa3ah83iyKvyUy",
  "key19": "2UMKgE7bprbvaPWKyuwZ1uqPeBKYMCdgLh2Dw2ThvxBwc5ytwaxjHukX5ZJUomuTP56koLz4Nz3H6zY2MiUD4MMD",
  "key20": "24gA9WWxF2WPjZvDKhZri4vRZD7JNccQAonSB2KVLc1tvwxKcftSi9aV7FR6pJ2e74tgAW9WmPJsdQBDQeBkRTyn",
  "key21": "pj5HbwqTtMxU1s7xg7d7gkA8si7STuFFwm2v9ynN8fh6rawAMWMwMfV7L7kiTcoUXh28L8cWbU1PY348n9N46rj",
  "key22": "5JgKKJrsaEu9XXSD5siSNrBjPaq5GBiUr7MeHhvEywGsnsTTmnmZau1UEkWWaqEkm1ytDgGr3HVnBoKXY8HgjEyw",
  "key23": "4x4GMsrKjQfCW3hnhUbmj5jvEtCNfR3NRJo4tLBjaY6skdsdCj5z2nRqwGAXAhMm8EV3iaZQm7kZq4j5p3JVWFRo",
  "key24": "vrn6N6MYDUp5Jo5EZUnT63hELk43oMwhk8qBZoLAi6BB6999zxvg5KegwcKZmuSNrApTBU2NZS54gejFmNNd7L8",
  "key25": "4W5vomLQTab8LjKbcX14GWEjTJdy2QqQfhQriQFdvFz8czQjQNcahMgkQYksuyZbyEY7isRyipsLNEjGv3JrhFFr",
  "key26": "2sVgJe1RwTvy7TQyHDMGuyzPSw3eneh4Xi3jzMNUAfG3M5MzXCY6LSXsLPZQQ2nWGXH2WcU88yPcvfWCGs2regSz",
  "key27": "51cUe21imxKVLmeU88UzGk6VNVBh8AJ8LmyPGnkG9LwecDmM3h1d9dzmcpFUaXuV12zCQZT7Fn1xVzXuWfpT4wx8",
  "key28": "4yAB276cntGhcYCNyjmwD1fq5kiSFsRFLGPQ5jnyHhMkRgK7A5FrXt3hKDgYrWmSXp9Gpu5mdpofWkikK6QZQE8u",
  "key29": "4KLE1z6bPKb3GvAtZ3G93khJSRu81FvnekKk9zRk8TMX18yow9R2wp6LvRP2VZ3eeADUy1KyTftfFiLckTJiaeQh",
  "key30": "5bjXSdUCG8jUAqMiLyV3wD6Z9Pit4XiUdHtqrDikhS4u7FzSsVtmbGXESLPURSd61UwkHA4nb9fT9cqd4rUzSWr",
  "key31": "4DGt6CYFvDmimcg9obvWUMympTkexBaYormaezheteSLgnUigeDMtWw89Wq1dqCppwsxjtzzx1RcNjVJ7U7MsXaj",
  "key32": "4aUkA1Pa3ihi82JXDntYNBqpTAueripERJ315G7Hex8bufd7My5jhFrFPw1CYEnFhtXCz7RvwxZ2JzKiioWoXsJQ",
  "key33": "5hEpgFpDvgLHptE4TzPhmGtyNajQbKDL5d93ChQpsXSQs9SWkNAmUqY718dfjwz7s4mBHVH4tNmvKWVvfnQudiqQ",
  "key34": "5cZdrj1EsJhh6EYZ5p8ZwJyG7xSnnrkuDH7X9EPazvZiAJ9DFU66i3LuxRJ72Hpc7gKUoKytKVZHfRXecyLuAW1L",
  "key35": "MzSidLecdby48wHpVpRDrXA96eEFab8UmZWuPryRExhB9H1CXdvWSn5fFv6P3ceRFjG66dDedejY7hLXrneme2v",
  "key36": "39RfVNmseXY6YxWpfWbvtefmpkvj3bdYeUWjq6yVyyiDtSnEok9wSFMTgZqUib8cUFLYRFBu88EmiezULvxTgPkN",
  "key37": "vRWvmuPGacqHsSbVpsC2abmdhjo3bojJT46CUc2qgHzEZBieasj92ACA4uRPF2zocqyUiSB5cNGV7NoCJjGNMkU",
  "key38": "34SUZTeX1AA82h55rryJeNYCAYPBkLy4y8t136aX62XKyBs9XMght9zbkT1yLuvNJmYQ5ooz4V3enpiBdxHWGMst",
  "key39": "2WVM34bZz3TXjFFsajkGmXStubHc1JScNFtDT6VptygUSKyGFembRmo2gwedz2oEdFhVbHxknZnp2AQQ2WoBevTE",
  "key40": "47MkKNzdGVt8DZ1g2duTNSMxCxY45Cf35bfnozU7Ltb65ZnV7ST5jaeKd3adnFdPJT8ttrpqxNi7opc4cja7dAoR",
  "key41": "3MKX2G7RBTFy4NLpDBPiLdMp723SfzctGDrV2ygYXz9Q1dXfYHgaFJR4ZYGea4dGaWeKVmRQqdWkZBrmPqioEwDH",
  "key42": "MRc8bMqhAyVpyrmA7LLkicYvbrL9RmA4BiM4QfM1TvyXrdaWF51HTHVv9VKefY4mrRT2ZPcyQVYRwQG8JaoZyzz",
  "key43": "4XfxEmJh3v8QbDMaxSpooJMwQi6Ac1K4XZJ1kn5YUoXTUwB8RzVNt3DdQP2vGZdkvLFYxsaepCQJqmd8GNe4aUvj",
  "key44": "4kRonByXU383Y2pt1miw2JrF3VWBnB7AQBozEXKvgPtNeHNM4CnXh6KZ2TXd34fthfBohuhQPs99o9YLGhtwqBwQ",
  "key45": "5rYCUk9byGnxLKSRpE4rb1EtNiKTwnn8pupA73KpDqhA3HRnCcHekL4XdKCkm9ZEyd4jBHUQt4dYy8fLkJnZgESm",
  "key46": "2Tz9kxpk5ZuWkBjYN5ZxqH8FZEGQ9cqE818yHCq38eF1N9wnKrh5EiXeqDLHo4BUQ4uUuFZTV5Afe124KvrUGwP",
  "key47": "RNCprVrW79xr9AVqF3nkCT3PopRpKqUW17Ri2Xw7zePeF3sPtmTCMGu8u4LdkJq3FTdVVw2vpVY9UhJ7DjpLzuj",
  "key48": "2xCDjJY7fXozegQi33HkMj5Warv5baGZTapRR8tLPegyNfLvbps2L17khox5bCQC4Fhox1hrH9XD9jbXWiHgqdNa",
  "key49": "1GivWpCGQSygxhRZKot9woXfiJHVtD4agh8udteRryTsnuygBPgmYsCVZL8zdBMZ39Eg8hJjw95PHY3GSGZiwES"
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
