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
    "3VG3LPAHGneoAx2FNJjTbLWWoS4C5abbFUFvAwW3KX3PFYbkRp2wioSvnKNgNDT8PeJfnBT5cy2vJiTFm1Ks9aB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3evEA3J7YMBgLQAZXPQQ3TfnDxS1KBSJB1jG6CcsBAeLNeUkF7mNpS8bT2foFpgCFwcetbGiC9mjMisVWj15MzTh",
  "key1": "3jaAgNVXH3TVgtogL4ggFMDEUk2xstyExDad56nUnGwfKFsoEY276u6reKPAtw9q3hAsZhnYrfF6GVxZc7QfyBMg",
  "key2": "23Qfei1MTxKMK59dr7rd94fEDKQPnuu4yRiqrZsh9KaHAc3h2p3EgH7YTnA1agBN4p2jLggL8KUtGjRV2VUd5GoT",
  "key3": "2Ef3ZwEyBJedoWEXZrhPd9JTdbbDxJ37MDo2cgW9vT3rLtbKeQZFKxBJzmh9w99cQBm4njTZZ1vcsfLEiqbbhCWM",
  "key4": "X333QDJZrYK9tNsBmPR7Ebth878D2Tfyvrq2JueJE8ouAvNoeDTfHMRSR759SbuDDs8VrYXEQNkWYzbrSSCtbBw",
  "key5": "3uvnqKsFTZgEirg6jVRuceMarftsFeVbHFP94npmJdvhx1gcHFbKcux3hPcromqFNHRCSzFmusbozA7yGxxR7nUo",
  "key6": "NHVGujSC36jZMqyoSkC6sAcoeLW7YBgzFaDhEqfToAQZ61zDK58bHqSnkziiVh9Qcc4iX9VqpEi5gEkf7mbexdn",
  "key7": "2icGrgVF1h9fRfi3eRTGbPfTJkZi6kAKyH3c1vF6x49QpUdq5Gder5d57qndSSeBuoQgoCnBwmHgzXok4Jw46bZr",
  "key8": "59MEKcq3CSsn6omwv95RKhtmcrCRTKXG9heZ2E9A1MajF1YtiYgXGehi28cYiRVVRMuwfv5ZKGqnYoLa9TeoGYvQ",
  "key9": "2DDgATWMMefLrs76mQaGmvVMqpf9Hbr3p1GC2yhNwBsDDu79W5KkxmPhBA833ER4pg7fo9ZQdHZa8JLq9JXfgNPX",
  "key10": "JGSXLtn29cC4Jege3XZC6GotV4weWhPAkJvqKEMa7peVikurq5BhLTzNVuxMVEUXXv9XJmQq4cPU9Zgc5VfQFyh",
  "key11": "3n8cmx7myBi22UqB2xhW8Cm3D6Ldz8epwYHw41DccUbuaYLU7HX7DCGrn5SCGBFmGPXJk1qj3FwmGYtbBi9tMW69",
  "key12": "3jFgirX6oWE4ZMrLV3MKDkFv9b5f5otepk3vSo9QkdGp1Aiyw9D4kajS5Exrs7cDbh6PvChB1EWbnZBN36hoJFdT",
  "key13": "4GGpRTgetQwanrhML4ifU3FWwUBQHDr7mceehEX1ds34k7xX3ZhjrwafErY7rQymCriyttq5b7qVfXq32SnLG1wc",
  "key14": "4areF9CrpD9gwYZ9Wmup9KTthLrkM5bpsEurZTeJitBZdjW5HVJVxd6BJ7z8SqYYZbrtYGNwytksCtxDZKHoq3jR",
  "key15": "5XBUpVMb57aJKkGRW6Qx4La7zNWVFXnPMriMYHrKZaCAtqYachWJqTtjuXhUByTpVupcKkbFHavpzxoiwDaWWXYi",
  "key16": "5o3VVC6FSSqfJ4hs7nf561cdDJRCEyksdw292LT9jbQVeB5y3nHxmb3eYjZPBR2ypejfbXSY1uzbTTnxgy2NLcPY",
  "key17": "2xUuUxNTksnunGfjNfTkeB6WPL7o4uttXRLgUfAAq6kw72h5DwWJRYnqgKL8nxy6mG5uRbvcxnPxdHXiB5grBQvg",
  "key18": "jo32jEpXLqNfzqnj5Zuets2GnBnKR1uX5zCGoaYvoC6meZXA1YSQKnuy5kenxFXceyuaiLMpBvSBMnaUhvdWYVk",
  "key19": "46wsKwrhHcZQfyi6pxzww9q7sufbX6Hamq1vhAtJroGmW2ia4U2C4Q1jvMauYt4wKUwkCvs6WKTmw2rxi5FBCFst",
  "key20": "44tkhCipn1QW1N12NRrpa9iUGUcaYmuLNdceUawmxL1E5JFNuMdtWaGtz5Rt7DmRHMQaauVuqZgcUuG4iSSNG7sg",
  "key21": "4FK7y8G3fTyCqT3GGnDhWxeZTXGagzyfALUAaAMnxLEueAh5vAdLxNErWEYXXGgog8fgLeAYyDDcMqHZp7cn5Dzm",
  "key22": "3FJVT3m1yfVKaQHCV7iz2xEfooEVV5QRDgjBNw86UksS2AJZkadcXPKUCwCbXsLQBsAmV3kNxrvxafQAiLcYABzt",
  "key23": "2WsDbVvmYdnNDiU3yrippdafmeaVp15xtkCCMvxSyUvvPX4eFacbdTmXgX3R3L3mdzqnbEJcQ35wzu9sZmddbnnK",
  "key24": "8D1FaLzBrPAH9KzpEsuP2DGkYpQvvB1JdTjtTVTNdDEbXFvE8SWDxnETWUQu4bSTWCRLbMK38CaaaY9sZEoReLf",
  "key25": "21vp2mPGkAY6e2rG62f1TdxXhn7Jv4huTAqi3dYwTuFDTSypeMyHsQEnLWTbNi7stUk7S2cSb65rUGXHHN9w95xr",
  "key26": "V9RAKwkb7fyirYbbXhecxhHwSEZi3RtXi578KgRgb9mD8oV1DARXQc6rAQXTFS98fFwbjUYMnxbopSKhRYmrrJZ",
  "key27": "3PFdRUw4G1oNwTtmqnFWwi8U3n8yLDUg5zaZCDgBiTttCCoFuQtdrKyfwZgjp5UQGYjyYXJRwp4d4LZNhwQH73XV",
  "key28": "5GgLaWNHFtLfreTeAYF7BTHDZD7vEwt2kwVJJuRbjQrc2Njnd7mt9x6MimwiomYZ3ahUUCGu5JXjU37rAGWsCCYW",
  "key29": "2NUFs5hre1xT67mFnxvussrMysDnsGpTWfypn6wuyYkLmvvNrtHpXpdJ94nn99qK2wgDSE3pKbWJ9ohPG1UftrzG",
  "key30": "5SXR9UReTemwUW3FAchJh1Z5t3nyAQmGNncHDP6yP5yy1KF7YmTuMGks6Le7j5hgrMTQn9CGLP5hBdDYErGA5moz",
  "key31": "41jo4jQecvon2RznAzYvhtTJH3QrPpgChCBUB2Lgz2wwQykMCRx5oiQxYiX6i6xTWRo1QgLb6zbQfh54xDQYtHui",
  "key32": "4HkH8RMvJhbivzWS1BsiBCRH6EE7cpY3vkinpPQuW1Xq64tcGEfxMTNiag4a6zbb2wnEL7mMqU6mio77mD8fiXxE",
  "key33": "gvkWzeQ45sKMxJCERXywwXxHxjajhUxAWvW7XYuGnjsy3dZtozhNkrhTbBCN1aAgHkSNV8G2ME2kaFnvLBEdh64",
  "key34": "5ZV19AnENBbXDz5ardY6KCTo9HhgyrxH9EZfZXdzg1V3qP8hrsWgM1Rsx1BwnkfToCRWFmmUkZuc1nkPn9QkqACv",
  "key35": "3MfNzbRMCBxKzx4oG1oCYKoxomNQt7uWSZuqtTzkQ6rHapaGwLALc5L5ek942DsDJnTw4w6i1PNu9yvXVjkHNyse",
  "key36": "S9gMPrae6NRDs6ocaVSZSmU88vibw8n6XsqXZAvus9EcuBKENCmTh3EhVJU4epTDdDzm7u2d9GttHev93mFF93B",
  "key37": "2xHUFzMzo5R5ucoQhx3wcg5fhq2Q8aYGzEmHnYoewUrXYrxELgrjdAhTH489XGA7bxHHEy2Br8c8cPYyy5ghWBe9",
  "key38": "2dcorwZ72fBsR9c8UE1zMK16jK67B3WroA7U82y72yo67J5dv84DmvUcg65Lw19RtC34ds5RN9HsQ8HWSuGNBabh",
  "key39": "5h8k239MaHiYTVxWVhhL1MFf9vzBDg76QaN6vHST5ae5Xvrhtwvt1vBxzgKwfdGUVzYUZpZYaj3wh8DhC161Eptd",
  "key40": "4Zr3NyeTZBDmeQy5ueWrL8QiwL9ZaYuY1ZWWduxLTDcuKu6WPreeqrrQWPnTN5VEWdshn7CLCrgiQzeCRUFFLYEd",
  "key41": "ayuCqmjz6bj6NaMsoj1kCFXo5DihbeECFvR3oZcXuFyokuubxHy6r2gxfT1hWF6HRPfNjMScaP3ReYYNhxFHE3L",
  "key42": "4xc3akRLjCYbVNJpKDCsyoEq5WkyPKTd4komKTGT1LyNTWUFqv2KxKk7SNVmB1T6V8MDFBTvw31cNjAAD5USqCBc",
  "key43": "5wxe83rGtebhWQvoqRjwwoxjF8a5J6VUNN724hhBR4k7npriSnHgY4C3XYwdS9evdVGDD4i4zLWT9DadPirwE7Q8",
  "key44": "21eSjvFovmYUUCGhLNUU52VyrCSkgN6WfaohPi3dSx1rzVbfAipSFo8jfPitjq4noD6ojDEYkvHz2KCi4zVLpSSF",
  "key45": "3BdYuwESp46xmKh5TjhqfCKZqdYYRaC6MXjGGBCu5vA3J1bzfypD6MEhW5Y6SXkz8ZD47pWrsnjYNiiCSHSYVo67",
  "key46": "658bhQZffUCYREJvMiKDK9c9aYvtxdGPzpj3dFzzHcXEWqyuJxXonE1N9TLKjA9KsWGBADEXgL937xt6satrWNJd",
  "key47": "1dqnRrgFSm37iThbxmorPvXdBAG16t4WwxVAWAjrTDmJ5Ftzark6zj8eEKxqPa7iVwkGhW6UtG2gVN3PUwgLFMx",
  "key48": "46cByKXsP5kLBwdjiEtrd17u61ewnact2jWuPYd2VJXFAB9p8q9yu2HNrXfKXBABfbWmRYW3jeawhXSernowayC4"
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
