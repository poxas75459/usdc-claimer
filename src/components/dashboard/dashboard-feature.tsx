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
    "3amKGEak34JSJJjdQcUMvWqQsRv4LuyMoMP1o7VwfsR589TcPCtVSNkFuS2VMbprtjHueu8RpvngFUbUCoYTtjXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59nfjRzrj4Lis3KbP9jcRSoi79F1zqq5xz8JwCB18LQ7a9NoFxuy56HdBsN6Uew8HDZUfXRCGW4xF7CoAuw2mTi5",
  "key1": "24e3ibP4QkxH7Ff32F8GXsHegoRwvZJZfpzpGp4pZrN6HaSaioSR1q59VtELt4JbppiyU45Vc2jgeXNmW8FYBGry",
  "key2": "dUnZ7cB1peAiYJdttJ5QNitJgDknLoEZ9DVtUF8TSNLnejT2bUVMwVKdkBB7GxcPi8UMmLXHAumdwQBw27wkwbP",
  "key3": "2MyAVJ7i4BQ5RE8egQN7ZzxNqgtBdtsWhPmp3SgKWsntGUFVxU1bRVcVCxWwwMYfeYu2EfCbaHGQUKKE8c8HydSs",
  "key4": "3y3DzJZEsrPSAzerViz1afdt2Luw9XcHVEKqh4fAeq7CTbbkyavFeTbfsDPYfFsxLjmY6GRY6f3H8Hr8uHpPjFj1",
  "key5": "3imPriqS1VEF8JwpUroB43L1zaji9sKJecb7MoUDDZZtGoQMQn3fSD7JDBcuxFKeBEyLnF1NRfYizbf7ofbMbcgs",
  "key6": "CJMfh2kozLXgm1t6GdHkZhziJW6vUh1Mr3Y4uvcybdq5kchgqkd9xMYnVe7KyJmjaBUJi6bFLuFMK3CSzaNRWF3",
  "key7": "28A23kTkgrtSnS4FNe1HrWjXdXJTrkFS7siF865CAY7oKUYzh1UPXFTkRQXgedNiUcwPzUJjQHu3jSZAWsHDctgs",
  "key8": "2k4A1NyudYZAdk45DwDyEUpvKsmd6bKAZYJsY9uKS2mG2yDZhr9mHHdtDpafMYHwhmgUb3ATJ41hFpeTHXBUWnUm",
  "key9": "29d7UvG9fPUXNxgZyCNnvqqeNnbVWrNbNFn3VtWTNQFDMzFJzWQdyc5S2iPuZFrmc4BovKZvZbQqLyWd3aXbGGNa",
  "key10": "561xXCHGSWTRqF2qzsXEjnvg1kLnYfZ5hvjFeN8A5FdcE1gbfFTiRuVMjuivs3GTBmABUvfMh3QF8S97D3H6bsnk",
  "key11": "2ziFoLjfiCeFcQMGxWXkWD4S1a8RA7aGieLomSpjWHpKkdfDs8bPF9uxG6vaWQbEaw5QQzsE343Vs7f6wgXPd5VX",
  "key12": "RHXfaJAcw9NHXB6SopSxZ3A1Su3fNkm9AHmfQ2PhqmpQ1P8gdz49fNYozs47bNFuqXmWWWebWvHr76TLqNNkaAU",
  "key13": "39jvP9KvUspk4zHVoXovXVAaeecgudsU9H4r11ZUei93SMiKUGcegogA53GmbUe5FcXBTWHFZHMqgFv8q9jXkkUf",
  "key14": "3g9H2TY4WwNj4Uq2RxzhqdNFYWvodaHNe3ax7DuUSzdCBaR5vwaFBhSEWT6nMYzgwsGvLQGj8rdXSqE6ZH5ihehP",
  "key15": "3FfA95dDsV4sEMUzC7df8LvJdYnEueDg89hbxSczi1DLEN25eMZ2LCVSkGLT1JRZWKztSuKuWAd3RQvikVRdtmR3",
  "key16": "3nCWsWyvoFBJwGZVG3RSwnR5pKFZhJC3KTQSWFLb9KbE8g58KrAXNBxGHYCgLJgbT9F7Si6go5CfCTJFGYRFyPJA",
  "key17": "3qXEUxd1pti79as9tU93xxLRH3LZWWAUZFWxjM1cLJRvMCuVKMyBeShPrFpi46UPoeBcT5dKTPcAmH8uCpDEfk1M",
  "key18": "2aMvj7wZN26jb8k5pRq1mwrYhKwiRpfc6KcSiDme2JWEjkBPu96MTDpWcUYHcADFUdpvkVyPFTPx3am1GvWFSdFq",
  "key19": "3krwJJEx2jettkTRymBebjpQ4ub3oNkKhrG7SEXEAkRhXs4mzH5i8wu8w9VdiyyGh5xgPGoo5zWWdiHVXquQZBBf",
  "key20": "2Enmgjps49YHPdGD5mXsRmnbUafrzbJangnt2ssVLBjRQ173CP6PUHBi4EsNFEzFqYQcTv4wXQ7pbJWaEZPPTGQm",
  "key21": "4MzkvUuyXPPFpwvhf2VFZzgwEeawDYzV5d4WDaP1xf589wLP52jbief6f5E26VPsfBbh1FuvhoAFZxHouRf5dA9H",
  "key22": "4gpzyf37Njt5Ln7ewTWRnf7R2FJ2SC5zi6kszTU2VNfx4Uh3Uz6FwSKg6tbjBbF83amhx84MfYUPkgteqxr2ieW7",
  "key23": "2xNGyc7V2ZsgNdjxpjWFSHFkc5tmwuCVUyXEPGZ5z4dWP3o5y3ki4KpBimrq7AmZUgxqqMvfaPZgvdYFx6CZsenn",
  "key24": "5sroRK7TmFxhyYWda5wt8BECNqAHQ8g2hUwywnCEUrBrp3ECsy5WWoDy9WkYb3KeGVyRi4RpNZWWRk7UnrfZDWE1",
  "key25": "2SXsuGgfCyR51tc9yJ5KVaMajigBrPin4xJGh7oCCYZTiHKhGtKv6UggYNRsPWqoLFbVLDcUFCP4jdYEfDfTWFj7",
  "key26": "4yg6NL8VkqhDh68ni5yt7x3msKfZpARE3MYf84CLKYipmmTBD88jJrjbXuDcJjUKWYFi1wdSWWYydFNsAenw3q7m",
  "key27": "5QewE7Cc1RE5T2q2e52WJ8yX2rNwUrrLtP12r1oEXbZxUU9A9VGhwJsamPUEUaqAckiAPD4HBDhJ3kPNREjPpTv4",
  "key28": "HSFzmaZfXs7a4xTJb3bCJ68pYvkdJ8QVPAgEyJWM7WiNJDYdYfLX4fknZaLFgs41vCcAk39TV8RqZGLomKFnZc6",
  "key29": "2WgKQqLFqKsEVJGCPTvFoGW4BRGYzZFg9PhzF8GWjUWnzB4YDM9yxqveJpuzY1KHnDdScYKPob4WZ4bT2WzQVW6K",
  "key30": "inTYfZuTS2st5h3SGCkfTmDqcX9C2A6pGcqtTbErB3HrTkibnDTxafw18rKp1xDjg6TgQ1sGhySzenqYG5HzwCt",
  "key31": "3qbfLJ26JL7zZfDbdh568VbRf2eSX5FiFhb7Yfm5zP6dXVCr7c3eGfWsdJvtbB6tg7Y26VLEUpNa12WRX5SFN1R6",
  "key32": "Kjkh8eYig9GdF9A7PNp62euvoZmPq9opNPhTMHkbHtQansp4A885Ci3SmJMcoCmXoGyZkA3uCug5wyHPykpY9Vx",
  "key33": "3cb76WEXXBNMNaPYCqiTpN16i55uFbkgJK8h5aDW8uvTKawmB4pGGrCt3yqUcGgRqszcEnUpaJgkvWXmjseJ83g9",
  "key34": "2MTdGCcnzD2ALLEK7aQBLynspBZPFLA5QsdLrqsBw74uVAvd6bXjQiuJo5j285z2f8DZzC2wWohBvQiLnwZCT2VN",
  "key35": "3rJnxSSgqyPVrBv9v6bfLGs9fRLkfkeBiK3HUu21gQim1cRZ63zkAsWTZQZ7avB1rNBsVEcQjn4baGMxTzhdfLaK",
  "key36": "5kije4T5eEkKqiums2ostHrqMGyMs3nD5HAfNfyaxCuHuJpPFZa6Aif4CckkxHGDYQLxa2hqZ6WjMXwJ63459XyF",
  "key37": "3fECBCP1P7EiDgzf8A9dGrSwew3RJL8TqpDEtkvvJkRxQddC83ujQMKeVEwsgDx9ctZGpLxYxRz4YNjzmvmXwdQF",
  "key38": "3TfJkNCjTgeGdXuaFbHb5q6tKBCaSdcerY52C7zoZPCVdgLE2QtfsRi14z9qkvnj7wWq3FEv3ZQTgHummus31hJB",
  "key39": "2iLkN6wQnPizfQwNuiy6LVh23qxoFTQYp4E6X78EYSe2pQUTk7PzNqKcHcaFyTxdhPuNUjf47WFcmeteFiN7zFfi",
  "key40": "2Wz9cwoA6oaikf2KNnKZL7UiLTpiPZxNhZrF5wzzmDeKtr3ypRSS8iBBF4GUiASDJzCJvHRLQRE5pJVEAiwXxYhx",
  "key41": "5WfhpetDup28d5snWfzxsrFNYFn8TNNanGpGvbiFwrc8tL68XVLUGA3xVshZYWmB64RuvkxGAYRbM6LK9VZK39UZ",
  "key42": "RVSpCXh9Wev6xEzsXuBQHgtqSKwAVdt5FxWkiY2YCrzeg6ArkXzUaHn8WbG26r55qicUVjvf8RW6UcX7TqpDcW8",
  "key43": "2HyQsPTMr9i4EkAP3g3tvVgnUxXvKGH63edaSuG6zSaBwTwvr4WATtJ7h74oAtK1vZJ8tkngF8cbnj212EUM6DCT"
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
