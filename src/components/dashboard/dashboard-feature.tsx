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
    "3p8D3KTxmB9CPPnrCG4mZgCqQ5Q9f6WK5d37aahN8dyfGwB5cuR5mKCdppmQfjMkAWtEZfNE8WQ1UNF3eL6g14oX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pLCRy7C4EATaPoGbCMkPxuBwRCjpoktogxNU2QX1HSYJsvYHZYBEK4dyHc4DL4xGvh4DBHN6N66Ujrg874mWgM2",
  "key1": "3KSCExopXpQeUzvwUgcgkUfDCEeW41kTxVevfEpiM8KQTjovUjrX5KHaJ2cfoxyTzDQpVyyUXwBZzzSSZswm8JRs",
  "key2": "tvLHRiAsEMJjDFCAeKwMo9gHBa7K9646LPPQoNNhttwjdZkD4wL2Q7J3bbxNXFFcPx5doBE19YnbUedVzot1enQ",
  "key3": "3L3Jur7M5Dng6ucMFmUgNCBiw4HexHXZdGDyn7LJGVcM7BcqFKbeMGDyC2uff85w3vGT9KMR4T43jTmkRymzuz4M",
  "key4": "3cZQ73mC1hApynDK3aTwLgnkatmb8AeKrs4he2JSrHxtxEhyTpNpVhN14qUcQK1vvC3SwbzCv2WdzCZEkksw4jTa",
  "key5": "2yeY8QfxxoYoz7H7jPsp5ohs1hxyg4vtV9jG8ehai9PDKHTkKdWEALt3ufg8X7FNyvoBn85FPCEJLLgPQDBDfZJM",
  "key6": "3wk5JsJmknpJzd6D1r3CF274rs3hyfq5LdsU7CRX6E6Q2mD5YdZvfCtZYtE3PixpRnzgQuAPh5dGPS4avCPMu864",
  "key7": "5PWBs6bNEb88zksw7c6iqXNKfQM2kTXy34TzQ4menc6ET1DRNChM9aeSB9yw62bFvcohHE42e9VS2ST1ymh1z1oL",
  "key8": "4zx32TubxNHgdbCXZQDQzPMM3CUVMFZpbwRhPEmwLr3M3hHKivC5xS9AugdFTZXQn69Cgz4SihRanbcpeHmBbYyj",
  "key9": "Ra7BCyuPwvYxebZb6kAWvrwgYirxeXZUxUum8k849fmG1YqfkEoKSYbwYiiyHra3NpjpH6356L257zqVfxsYsDv",
  "key10": "58UongDpkztprG9Qkjmq25E9yv8LcU6cVknHUhcjfo2d83GBNjuV2UJn1s6nytqCPr91PeVjiJBdtvLwp2MSnfQm",
  "key11": "2MnfSf9fg1CfSPUaf2dyjYt31UTycmYQ2JKZNmyfrHBE9bjbVPrjekH8CjYTVfb7cDRgRn4LVMqkFoLfYTgtdbPP",
  "key12": "ckheWnow4dLuBQqfe34G996QLrvG2cvrWiW2SVnacmXR7GEjLqi6FWNGhxNG1SvbKYg9eM8bPE14AkD5iyZdEv9",
  "key13": "5MmeisPqriVZtAi1Gn79PeZpiKGy1EEWYWgqQDBgScXZsWAP6VKEbBuBjkHnnXh5471VWC4jegG5j9HcioaAHxRc",
  "key14": "3EcXHiy8rX2WgzmN9FBN1zny13EaFnvwm2yA2FnCjHHQLD2HN6fv261n4WGhwSMkSiE2zZVaqfBoYyTLrntSdo7s",
  "key15": "3KbnSk2oJK1FdV4M6Sg59aK5JVDGj8fEDfQYTmSAQK1Y1ZH5dMpsnicX6BWsuCGCr72vEM1m77rmDATsDGn2ti6o",
  "key16": "2ozFeRjMQkjaeN4AYkB6ybLFhvyuRNg9mJgms9MjUV9Cy3ZARpM21tWnfBDfQ3ge4SVcr84SKB4nHuWEAaqF5qUZ",
  "key17": "2QN5mBnkU2iuRjR8KBLykfp3j7tCiXUrxeTrDhFV69DKb51GqXBJAAMuskoVxx6khe9CUB9hY1jUjFBgegVxDH8e",
  "key18": "54tMYtPJnLTH6D9rSLmDp9nhLL1Wrvm9TVBSau65zPHxrxrSr4hcSrzHsqRqriAy9u1XymmKbL2uV7dQf21Y9dwE",
  "key19": "533EUoFcYSUkK7YZFisHrvfqyTWN5Vnp6beUkXHpD61DJdzJ3y7ynVXaCzoy8kBxR5moJbFuTYLwUfFFL3KkkZdj",
  "key20": "3oftRLgGipyuZgqbUvQkrheWvYae7vFGTqgbaiabCnArwJccnv6cPjcrTqMxwxzvH72FPiZyKJJMK4VZDFqPg8tM",
  "key21": "yFQ7cbHqonSmzbErmkm1toRKSz1K6Apqpy3CcxQaNPL9vcJ6ascSLxvXNTB8zGvRJBHcvrjZybU1yL1XMMGZbux",
  "key22": "KVrGKUpBLHmpBHDUq3W9Fwi4PbQ24WQdjWzFvCwipe1jVF29V5AjgcCTwvpVCEAiF9haFQX9oa4GoaGJU11LdzG",
  "key23": "4YQY8t2HnGn3rFr7RUrk7nipkixupJV2gnNWA8LL5o3aYo4tjqgDHNUErnQSs8D83a3xZfwdAr3VfymCpTauwyTp",
  "key24": "4ekeudgAgbEMyswwxcKhpXTD4VjHfnd9LC855g2cXv1n93WR2Ko1981qnrNmc369ENMrT9gie4PnuiNEYpfHPq1q",
  "key25": "k7Pdu42bf2VsruEx4rvmDZYh4wFCsjEFFeNce6nU2cg3Fg7ubqTowCmwCw2JMHEuzCcMaSaotXYS3ASU7Xvmrr1",
  "key26": "4GW2jYjrDziKNeiktHE3Fz1GMEeqSQJzcrU3945zGfQVfzFifsGHvjAsoEgMtJ5n9WJoTbUcCi7iv4MasNXKgvtN",
  "key27": "4TY1CKs47a9JdRvCpprE69DK67TWXM4eTcQFujARcYBjBduVg3MoKb4AYWQWMg66Lbw7y4QCs9o4e4D4XmTtjQxx",
  "key28": "2SrDPQD6PPyzpBVRTTN4X4jmqZ2vXVg4DbZrd3GvTPnTZH1uBA2kVrJMnss7eBWDSsHJhn57NWD1KUXb8PzgXo5v",
  "key29": "4pAnnpdMP1MHNG68k1Fs56EUPeKKaqs9fdptcBppfXrJNveTvQiPpnSavtGkax5cJxNCWiJ2QVdsF1U4LK1WjwtJ",
  "key30": "2Wy72etxjHVEXQWj74MKx5XbD5FuYpyz7ZhqyD2sDqUmBG6pXrRMNfHSDT8KsKrEf8T4fVAFTappMjUpZA4zdtYi",
  "key31": "qa9Jn7ZaKgdYjzTvJHvUoMpFGSdjzWD1NmcftUu86oYTZYuy8iRTydsyVkecP8FnSSCPFeMy21nSbVukUzLxYaK",
  "key32": "3w2zBcMYr9JJeKHew9G639dt8zXdXxim8z472nhdjUTBKgNnAzg8iQGHac4QcDiTp2w7s6QFt9X4vJ72XKXvsS9Z",
  "key33": "5DLP7rLd855PbzcWsNdAAzvi55uvWYXz9Fr9CrTznG6M6UH7msLyX1EMu67SJWQ1sZk1Ai1LSdwW4QuotTfp7eG6",
  "key34": "3nrLL8S4aog34Ccqty4jHLDSfogPgziGLERGBwnjN72Y1vFeYH6XEQXiBeZS5tFRBy1XK68bEkbwNGZCnXifAaHV",
  "key35": "2FbvzD3Q9kAPR6s7SrGPwegwUKwa5KQskzabWTuPCbVm3G3xhzgA6jXhbFohUMbfLGBADfqSy8r769rBSKvFZ7NP",
  "key36": "32KjqKzGZFBkbmFqKMhEpRNpwgH1iRVDVG52GQ8fCnXwmnvYeJwDJBLpg3UK7qVtucRND28ZRhuMF7pQgG3eK9qQ",
  "key37": "He5MEgpXEEdHX5F43AB9FEtmieLYkdAxnwRC1YqrVWFC5CXHkmRk95RE5yU1uMq6yMrzgNijGrTki1bgyz8h35s",
  "key38": "4UWLtmWyokgwM33TxiWJv8jMiZ9Fd317gmT3mpEjGGAfxdrpLegV29wuZ7GsLuknfKtLGi5VrCdNZpsgbMsbotzz",
  "key39": "YSMoFRwnvGPcUP2JWs2sRVWoQk7cnCM2BjAUhJz3eVrotC6Zv6axLPdvawtnVVvNL4UH2mz5mavD9wye4J8NkRF",
  "key40": "2LKNPXPDA2HAy52GfqLW7m6v5a4URc74PdRWAB31nhNwo3XbouDkJ6J8GTBHoY1bHCXGYkkVK4mEcHtrkjPrF5Hu",
  "key41": "3URK75LLaXbcRb8Mxc91gvHVpuQUTxHoWcACS3Dt7K9ZUfvc4CLRpeaS6tr3gwxzu623iHExDNNobGWFgRf2YuKD",
  "key42": "2Wm6eE1TcyNWXbGxLjuJDdPCZkQAqWKoWvNQcQLcvfEVVjZuxqm8eidVRAfXFMMTTR9f4s3L79avDVim3gm9LXUg",
  "key43": "48kKSy7dtJzXFUuBaMdXUiEm3WYoe1TZeY6YRTYrLaJPodUJsLe9tsrJtPgYGmkeZk62tRgRh64k2p81DM9oqQAt",
  "key44": "KfpWwtUPiY9ZLc33rnWD73GUENNNnAMeA3A4ESRsQpBJWxgKitKaW6GNmfQnFbuo5L8rFQho6AUo6dzgyyypbGg"
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
