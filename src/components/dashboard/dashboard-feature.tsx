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
    "3yJsemTdvGMpLrjR47gnhX6UfxAEbZXT4PuZi6zDyMSBLmeZ5vqqYV3FMFyznbBw3Lpu7tAHwgpoAZCpsxbw4CdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PgySD2eruXH7Yv1qSRnEuWeoYdit1CQZgutCYraxRmL4fwvqkLp4Kcp6cR1hEZeoj4qNiy1vBv7mJZtw82NhLQS",
  "key1": "4vCia78gtzi6CXUrtmrTRncaGStHZ5X2seLF3dX66Jf7w9wMfEwGYiKtHRmG9VEEtAUf3xuGohvyjKiAPc4M8cSf",
  "key2": "QQ5naVgy2RtSCe1C3UWyA19WJnYiX9ovZs4hCHYG8HtqLt9ttHkvG2Wgc9JdQgL5ZWaPuQvEKcavaYXK6UQ2L64",
  "key3": "HEB6kTw9pp8BaTrDJbY673fLHDkx1b2mHV6vFfxBYbPRrb9eoExx4cpQ2FdwgruSYtnjvoJWRRQ6iryiZp9zYYB",
  "key4": "3X7MQGG1wstaFCvyAQ54dQ6wx6uBRWiVHq57kunAtnRDtAcF9rH6xoYKadMYj8Jvxv3dMuC5x87ftitjVAtHNyg8",
  "key5": "5tAXooqSLtRoaBAek7fHcm94xZ57mshijnfRQnXWrz7yAZThudKEP7CjvRz8mccYaPEFtAXYuePSrXMs18F3JqBJ",
  "key6": "wSzgFXgwq4638LKcRocxGQhxVhytz9iHU4A9memDAxH3tm4owyZxbJBkD47udmoCAZkS5ncpSBSmdRjKy1HozdS",
  "key7": "5VMBjHT2z7k6EEvp1Z1ThT7phW9UC2f6Y9QUd1kC2hZ8H5XmtBvcLmxhv5aib21XzXDkFu2y4SYcpgjCCnuq3p7t",
  "key8": "29Xe6njChxykzPsZZR4rWmbePTMBbiRsm6bxSWwLF1DhJBVgkNmzBRbPrcsV6WqETuCgHRM39FNokJJkMZ1L1DGo",
  "key9": "3CwK5waHA9UQbauzHt2douVDiTeYoUzFo8piPFP2RDb8bpSEjGAYnxUiLWcK3ZFMg9o9gr3cyjo4z6JaRbHnwDpP",
  "key10": "4Awd1LRFPdDPdGwYodVhQtBEhX4avWZuwtq5XLeGZdiNupp1ND4DAyeH3gq2Yrpoh3a84QUUN45deX8yRYCwqttD",
  "key11": "37cxVXm4WgAoV5iTdmXicAkpKSZv1NYx1ecPj64UnAcxaYayGLJCRLUXYBTLwT3e5wKmqCxkBNoraFWPKN4iQ3ao",
  "key12": "5jC8ngwhukoSS8SPhmFrNH33qyT6kvQEWNnxini6H5ztjgXm2qt6RpGyhwakbAq4tBknB4UznYL7HiWxteozKoo4",
  "key13": "58XDXjBHKZG7m9FiQqi6qtZuK3R5EZ7mNPj5ButPqEGo4BAEEcrRGcEUHNz1neZ3Qz58Fe1U6V1icreF2nasA8Ag",
  "key14": "5BQsDcsUbHTFyxou6AdDgKwh3RbAFYwBRNHZSykc69ya7y1UaMTvgP7d4rfX75yNegnp32K1a8zuptAzmYgtDRGA",
  "key15": "2GFpWXPN2BwZWpHf91aYiD25hY8TDw2XR6RVYvgykR6WNQJf7xFtKZmYN6Qq5TVN3zXv8o1QW95rbGXeYRfvJk2v",
  "key16": "3kgUfXcpF7QBqsjCtUuUvTzojc9JPxyZALsDSxFqdRvESnUd2RhtQhHmqVvqeqPxeiDckaJi4vbUk7N5d8aLCeXp",
  "key17": "3Ynw8vRxF32evEoedc36pwVT6F1D8AXYRcQum82U7NMdXFaxg7NgjGACeDvvtnWJJQYEC1qmfih4nKWrCfrpBGUo",
  "key18": "PviT746Ry994112MzpSYviN8ay4L8awvq5XDw8n5Z1bHvjcwoDV1D7tYfgpYzoBt3zc22Tt6AppbxcsLsQfKh4f",
  "key19": "gPka3SDeRdsaXEUe8d5CYdCKaPfZiVd6vCoCAjc3ePijwE7zScxArfGNoeX9KrsfkeKbqx34Kdi1GFJ3gevvXt9",
  "key20": "37MyuriKY9iu6pudpFusHTLCM9JnH8SLojebewVUjJsbwWuN4n3SC9QrhX4sAkDiuArsNVuuhecQpika6niVdisL",
  "key21": "34ZUnmskSNWAAi1a2wBVzqFK6kV7xVENhtFftbLL88VU8pJdz8e4Fm1ZsJBhsLxLUVgcGjb4Qzy38DkJ4gUmgW5T",
  "key22": "ipooGF9d5uUQpUyQs8jvgNgNBzhJ9hDBjaHy1RXKq4Qh1wStgHR3ZdvujfFK74yzVXieLCtoZsQ1x5sKc3QCM64",
  "key23": "3JG7NU4q2C4RmqsEBmgtGp16LGzZdet9YUDk8fioJ87zj7ME9ArTBbei3KPBECPHJTqwsLGdX6fxeVtan7CbBWfQ",
  "key24": "2JL1292L4SfWw3w7umfB4fhpHinasPypaUB46iygPySacpbmF1Lf9zZzkukU7t1oBeEG5egBvDMGBZJ2Ms2huH8G",
  "key25": "5gQn16pRHvHSWVjiex9f19QdExXgq49kFivibryeyoPKVaPAcT3Ef9nYdu9WG8Xze4RfdkVsVevnSh2ZeoLHxQo9",
  "key26": "247HWwXrWhHrYMTo3xW9BGM4JoqSWbjVaW19qK6QEsoGry1o3USvgGdo2AE6DCSTudzMvVQ2NUw8Uar1jEBFXdrg",
  "key27": "4iLS9hgkPZPoqYrG3pknNVvxz1xUbBZCkYbE8HYXaxqfTo3R5GogH8dxZdG78CjrAd9gbuu9diP5avmmy8EUJLfX",
  "key28": "uvimSLosS4U47pEueTABKb99EpE7wHx3E9uvQP4eAB6ZhY3wygTL6auRTFKCznoYE8Cq2ofdf966UTQkGv8bqBr",
  "key29": "5pfGjZLTDtKQwRaht2YoaLiXj4hWmSVTuAAmgFN2ydcYbwWXik2W6e3NtBavucLH9rj3SChfDafecuYPkctTJjQC",
  "key30": "26MwYWMt1w7dRoxK5yQWJDyRC6iQqWRfwWQZ5tCaRmA1GHQQkA38QgxkUUmMxKokh1Ft97NEc8CQHeRMfMPWjhFH",
  "key31": "2jRNZAMJJbdaq39X43XChQKkUCSBFdrAVfj9uBHryGS7pGHHgPSU2kFznzamyj7otKbhDofoqg4FAj1uE9shcYaL",
  "key32": "5LeBU5AMzR4yf1kaFY4qu8r4NrbvagN1WgJ8TxkvSZwuECgDmftuVhqoVmqDubaErmEjSRe5a3ykJfSuM5kGPVH8",
  "key33": "286BoFM3XXKzRnzKt31MaMAfAW4Ltk5e6rwsvPFrhjEFDoZp1ee41mD8BycQD56ZsZ1tAoZfCpRzNknyfSBKPQpq",
  "key34": "5UryxoEgYr1KKRXDuJzrkEi9h1gxYtxiP6jCZevE6dxmyarkrMLXfMZm8QYCyDJkDZSumK9VFTeyiELAfdHFFJxm",
  "key35": "2aaaCSgAWYzXu34Ro9GLNzcWkncxKqmyPHzKBLaWxCSjSzmzCxwyjcdJMQbQuCxPMKY6MJNZfeGL9fCiyjBNwJr2",
  "key36": "3dNxwja2a4f5g7ErrwQVX26wZG9eXteEUEcu6cvwiXNRMT3ZYQZegviQqFwauib4huh2uhBSvpzrBmuCbpE78hHu",
  "key37": "QY2o7FxsHeKi3gDvtbQjhSF5DKBWJPX85YRtzgvxxpj6UXGedcnbzYf3pj9WZiC5Hk4GXV2FNoHX5DHws3YvHFs",
  "key38": "3c7PmjkTMbZioUBeoKsmA7amsbCAWHsZnkNN8dQ6QaLYQ49Taq3FqVcJdgv9ywv4iMA65BgNU583P2DF3q1i69SB",
  "key39": "32tL45HdF2bwbRcyFTchAD8Mr1CEshtrKdFKbdwEAZAHV16MCE12i9PUuqgNq4G4cD2NcpTvTexExDskj69fFQ9A",
  "key40": "4P3bByB8qnKcw2qXWDubgyFe1RV4ZxrCWjbcCDzUziJs3JusuqjCQuo8aGXrVsSpVeL5f7GV3ebVH5qdRNesKUn7",
  "key41": "53uMKv7vs9S1g17VFgWUBW91t5LRVWAzk6YkDdsq84LNTUTd762q4DRSfVCpyvYJL8pkX6WGgFvFzmiM8PQuJZkd",
  "key42": "jS9W2e4miy7MK6n8znasx3h8c33axwSoGXmwYxrHeBFiPMcJzerEUngeUTCmR9yJt7pZRm7bgSSWECH7WQSSp9m",
  "key43": "5UKuZ67UmoSCr1XgrsARqisBWJ4LKy5XW44hFyP425bz8AhyThJFxXcHCyKiPDC5iPQMPhfqH7nZsCXRKiGF5UXJ",
  "key44": "3rWnBRqufJDh68Un2UZXpWpw6SkrRW8FE5KiYtxnQkB5rVSMeFm2EWJpQZs5DBzBmy3ngYEebguPodpQwcAZ5vDt",
  "key45": "63YpizLY2UN5zT7RFA5c6bdgsG5m3r1ALsydRRYWYVQ9tMUaEfnRU761dwcg5NQLeeB5RezeBw5XW9T2NAVVxnru",
  "key46": "3LAvRqcvcdwVBWZeComw9v6dQvhXGPV6A3KRou88jAXCUeSScGzirqotMFNyRitbXH1sZM1GmGvEGqZzgptEKKaJ",
  "key47": "5Mth7VqFCoSoRjd6hhke2S7McBy4VPn4MPEdPEJjgk3fo8scUnC5Cg5kWMKZQseYzyaHBdxcYNUesX7ZnKnKSkb8",
  "key48": "3wSZWBd21FRVJET5Wp8qbMC4AuhAtpTmSWxWJTLmWE4e74jBc9XaH2uaeq9qnuB1xvqTG1sBvXfcpEJvcCituSWs",
  "key49": "4dFvXRdytAT4NXGxNfyt6KawyCAifDiondGfiRacnruUdvYy45R6TvSzPzf1CbcQHMnsZywRFJav5ZbYxHXgrQxK"
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
