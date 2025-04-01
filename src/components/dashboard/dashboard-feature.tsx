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
    "2pDFY1vQs1weXHeu72C6JwZoFN9q6NEPvn8LCJSL6Z7FMCBz55SpLZykwdrx25VNBm453ssLYhWKxSqnYxXDrVhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xbreXWPJcGiZ3RhrPxBVgArU6FGS5699HocqT6u9oK6hPxMypw8dxvtzrkoU4r655DhSMHpv7R2t8d4dZLWRC6z",
  "key1": "59adJfHtqcoBNCjMnHMVkBsXfCstMEhNk5uG7ncQwyAdFPomEYw12o9bURQDgvPqAFm8eoPbyc8ih63zgSetoqAr",
  "key2": "4wGSMc4ksGXWLfBtSKgeLvM9Bbk8jUaRcsx8DGBdUYb6h8qMoPpLrTYD9yK1UzTrMTSYU4rWxMAb3zYBNRarfBdu",
  "key3": "3LfuMFjGHm7JEuBnAaz985Nf5gKnAaQp5Y6VZ5HRs2m4wZQawmHBtguLwrVXv1Wzf82uEDNazMrGu6Xwq3MgUxgq",
  "key4": "2usvXwgzTQDfySidmUE4MNmNRj8Dht4UXhV4n9LoWZ4WaiUfe8RrC1rA1DGqMbbHhkYrxVGqWdbooBDuNsqUJ9oB",
  "key5": "GLPX2cWatvaa95bknN1rpLfhVw2KNJoAjEowANpgXDactpXXzqcnMZ8pY3n2isoD9NPxgXB9LST8vbmcqwF8m6s",
  "key6": "3cXFzWrB8oAGx1HqLGWMF3ZLsk1XffXaaGLCVzA9XHmSxMQoVzV5Vkw4HRaWGzMgrNgqRQxU7gaRSV3hhFiDxMV4",
  "key7": "23F6pkLLR72cvoYUoqTBuYmN2NfZty1tbhqVENnBSiw7ZYCmBeTqS3Ars9qyUj3b3eN8jeie81uQR5eoN2Bzi94o",
  "key8": "ffNa1Up78nLGQx94eejjF6Vtxmd5FbQL1hdybGjZukd5oNob5N4k36nin8r5xG3fLEnmKjCEC7Ud1yYhk6sEYMN",
  "key9": "56fy1ZVN2RiVQ4F357ZD88c7NSLHZMBCoB5tBdJy24JhNBDbAY4WhMGnunUX8jbPiqbmBHUtQRDV51tQduHmJgVY",
  "key10": "4qKs6fmThhHpggQ8cqxP4YKbCfDx8BkzD1iMKJAcfLGKCNov4jgtSCxJtZ7tcsiTTjpbQrDYxHcYTx24RDs1QLgB",
  "key11": "pXA9FBzXUmy5x48P6TNHtrhtzUXSjpf7LsMbVw35PgsLUG2PXu5zATC4UCzBiKQCC5en7TZ4YgaXtAJQWYSin9i",
  "key12": "xoDuUwTxJ3gmX6oHh1nDZVU6fBSBzE7XmZ1VXW9TjQE5z2qgbhAfc86FxwdHqEQqRB7cqvtoca74Y2VZKh3Xk7Z",
  "key13": "vCWXMjG1pp8ZG37DVaVRMYnjcVhEM96AGBEAA2aPYW7NwnU4hN64rW7R9nBF44kBWD7XxnK6TF8E2ygBTUJpcg1",
  "key14": "5A1oYwXqnXcZ28xwCjA2JNU76AT9EYJdfjsvv7pcW6w4VxvNEpBbwrpZ5ic2oKZbUtqjnaW9qG85tziZoReFaqpe",
  "key15": "5LEuLKQwC6yTggPwSH8uvuvx34iPzB4sx4dcpXv1ByZa3WUtfddRJRCoFDPpmGCkjvYjzbaikDm12sBBQzeHYzz4",
  "key16": "3C659N8roWXqwupUC9QarXnWaBkZX9mH9vMr5PvsLdHTtfSRiTuQe1ce7HUPh293XF69vn3KCEr2dGMBwJxKGdBe",
  "key17": "4hDPCXK8sqT4hUKTkRLQ6tgfM7Y8bgjVNN7YxmuC6BzB4MRhNeK8YXEJgQAZ5TjQANAVcjCZuuaxkkBctLgrxZc9",
  "key18": "4TJzUhoYUnkisq6YvJfJT8uaSo8GQvci3WvUKUcUW3Js975zeratKGHeEYFJw5stpu19rzKe25S8R7FTK3YFHqGT",
  "key19": "5h85mfLE5jQctMQMkNbcHnifcEC1CvCUP1x6ADFNwjibreCEcnbXAuqYbSJyZbhndPioKXHTt5nWxuS6uCR3LYwk",
  "key20": "5T5BUv7zW6NxBKUqauXZGTzrz76N4Wwr6YnKbXEmZs9DLGXsWKQqPgzgqt6BCCWkbKUa92qvvPKien7jfZYAZPwU",
  "key21": "4YWsT8k2x4HheJ9bcogP63xinuBRzyN6CHiRkygWVvXHfSr2GDveRcZSkTryWJBMyTZCqeiHXUeaFubd8CQhT8KX",
  "key22": "33EJTWirsMVpMfakFwyRK8HgbmckwznHxN4Mzt3GH7Zw5yfeudyU6KQuS4uWWPCvMEZRujbKuLSR3GiyKvSpDAoZ",
  "key23": "3PeRQod6CxN6bptKuxxNDwPT3mKyPvP5mZBiA2y3zFKVXjuwou1A8Lvi4dtRQgtHsYKGS1HXK6Yqh7RhD2vbtn8G",
  "key24": "2KZ43vTn84m23MewjhqkwgyMq5oCwHGeAJuZGjY6Hy4HR3SiANEJe21k17bueFDD4pbfF3E5MeY4rDBPEGPaV9pL",
  "key25": "TbnuPbq2DjLYLBE895EvQUKmixkgFcZ9MXAHGspUHHmAxfSbt8J55mMNcP3m5NNbsVyJkwpQaYFAGGSbNrHmAjc",
  "key26": "4nMPVurS69MbkuptdSAiwC6rhsaTDeUX4VG3S6s8BXFRSd7sQVWkxo3QFu6xDdshDEsHPEp1hC9rnKZcEswNCoaq",
  "key27": "2Z7JgbrSGjBqskqEfCF2i49A6KFWuabntRdjzE2dRC1Knp8h7YHG5wR8S2v6Ev7MgEYs28By2VNcqzHGpRCxJN7n",
  "key28": "25aDMiymA4WX1dgQWoZpgLKtopsoXgEvf2iLw38ggrEx76WVrbd788B8XtPUd4eH284NvfYNLmLCE2t2Ri7euRQu",
  "key29": "4i6arWaWZneyS9DsaNhgHovY4oDh5wVnLiqRtugBUDDQZePwfqxRswdHkxRgjFRQFLRxkaDLE3iJ9T4uyNfigq5k",
  "key30": "42mSrK3estScwdXP4HJ7SjAnEWzgZEDf5JBoJBeJsTWxyu5NubkD3dhBgbmGa122S9VqcxqxnCDvXhupBnoGoshk",
  "key31": "qpcYR96hjLYWJKrsFV4GVY2jGwBfWevftfwXDYVAWrnxv2ifyeFXzw4Pj4YfaMDrp6K1mx2LU8U5VgVKcMWQaXc",
  "key32": "3pkVWzLM4RVEbQhd7TZfmxQa3q1JUweHnMfLrJFwAfU6vsk853XnmDJfbSoGWrNqZiBuZxRz5T174fdxzoxfnQYw",
  "key33": "3Je4uCkpnnNYCC59Tq7fmYwGGmu9qHuDxx9vuApEXhRnpAfACVp7vySmUhjTb1uZrAen6RqATJeHnfiP6YCQK4tr",
  "key34": "3Wv7NBF4GmnY15a42twpnJq3nMH8zwgRHKrQ6MpmHx85WoxMaVr99uDATJ885LCXk2YVadBgAqA66TekokN2tABx",
  "key35": "5cGhF2oxJBUGA3iNdnQ4V7eRW4bhaPs1XgK89Tbh22zJQJWwvPYzGX3twpTooQrvoXjXx8ejVCLEpuhTZ5AnCPrj",
  "key36": "4Fxe9rVWky4QmSWAdiG1PZMVbYU1CH1gMvQr4VW9BvPhigQQvBiFMSkU9jMFQPxo5VgPLadEMrsrvVzoxx5MVrhh",
  "key37": "be5tdAeWkGgThiRZECgSYzhyVsCUgpU4dn1eBxzwWMad9SZTAmj3ajdpX4S1xdiGQFWKm6CB5i1EW4ReSHv4eS3",
  "key38": "3xrNHvAuB8seQHzxooffMporSQ1AMnfuVLm2yeXVsqYRDkk8ZhRGgWDeZv5wDEWUqJnpxYycXdBjxVySX1qaPi8g",
  "key39": "2Ebyskrq1ZPWvNxsTkPpfHSxM8kJvu44hbecZi9ACk43zzngnu2kQzVHsKiNNUh6wsR4pnjpxZRkP2qUsZbXfKT9",
  "key40": "5xBW4RjmK3L4APzjbZRWsYPAriHtJc9hxKkLdTCfE2V3atHqTHrhMbDZhJ5akq1TTWNmxeneR7aGynSH2TKd89PT",
  "key41": "1N4Br1dEZik1P47kdfVWnvgnGBo5SM6rd9bnXonwzUUN5qVHSroTtBWMeoZSU6wbfoKCJpi2ydp6qJ3FXBZ78KE",
  "key42": "9vj2WPdHvzoc3xcUDd6Vwx9HzpKXnR31M2dmiLgz4NJxo4yzFvPg8xiFRr5eyv9c6hNgiUkUaNNzycoByg58TCV",
  "key43": "3EhZTkeU8GnUYiUgjgaD4RB7Q9kZcCKh2eqmFKJbZy9GoCZ5ZA11VVH1FVC9wQaF5qna3aoxbaU8TmNtqwhD4re9",
  "key44": "5wLpXWrqaNe6mu7C7MuXh9Hp1R8NcDcyYbQ4ML4WPHwf3WnTvj11ncjTVkCF1t6dHyiEMmEyASBSHmHn6FQDxsYA",
  "key45": "3k9bhefnTWCiUkNf3P4k7qoSJ6biFJp4b4Yt63bpMEGBTrmd9MKr7MbQdfbtABgkFgEDBNn9iJEg61hoLtWs4R56",
  "key46": "2Zup7GyJStCmSFKPReyf1skCztpYZFBgrP11gLtTKY35JcSueQj6vb7EnB7XhjjXNZLtS6JzoWzwPaogvvNHtPSR",
  "key47": "PD2e3kfrWk8vRVajgcvpXoYgK8mT7JyB7X2ZWMCaeHVzLJFDnpxhaM9KQj4bsSp2MYpPk8vZd9AP6NJS37pzwHe",
  "key48": "RG8PaF2EJ266s733BwE4SzS9qdUpE96pB1vzKBsybDibz9QFT7kvgQomnGtpARdFzhDA8NfDFpxipCfW1NponFW",
  "key49": "2NV4yNU6GLGge1L1FJeb8DmjE48m4X5jSBwqwCx2PapKA9q75NFKGMS5x9nR2KNHciketrmovn9nFVVeLZyisv8t"
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
