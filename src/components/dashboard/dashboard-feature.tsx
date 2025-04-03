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
    "3aFZ1S2ysqEgPik7MVyGxto4vkzAE7iPSGUadpkjFsfBA1TmY4cpjxgCJYGy5YFN2Cj1ZbuRPwfeNK8fqNbMhkVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kCoTbHAS6y8xA28QYka7gzvqpiZZtg9jFQiWXY1MMfy8JonBtDj5YZhP77pk5av7zoXuq8E5UM8jpDwGfgtkpSF",
  "key1": "BE4xbSqbz8EEDGfdu4PdUoa8FJJmzWpa12Nua2TDxeT3xgZczG9EVfHvf66W2UpZ1o8Uo2ratssrbrUzKP3PV29",
  "key2": "52ypTzc1QgmuFKb5BzigvdGJBQVXAeLA7L3EyVmY1GWwNq8CaSEd5PgSUSuAUmkJeg5yKanmAYv3ojXFi4HtD2tT",
  "key3": "4XJphJuzyEgQaL3YhAuhuDYW755eQVeV76oRTFdXrQP817EhtNt1fX8ckQvVv7AsmYcv4JxhY1E17Q1S11T1U1Af",
  "key4": "2C8Ja8xmoXzGrab91We3ckNirMhTp1Wpf4HYUCpkoak8TzGi5KzNfFopVZoUhzM9JkCJoNqDUQwNhQXxTm2ySD1D",
  "key5": "2VLrkGK3FXf18yp3LSeiubkAtnw3o5AF6Ygd5req5UEoJdRcyiBSETbvbMaXRgioizyzW3nLeCnkWhtMjm2jMYGz",
  "key6": "4ZfpwV9zuiKXr45rYB9GsjkPmjDY63RirLgCADWkBjXYaSxeuVo54j57xue7fx5RkyVh446AyJsqE8vqwwP5VPwz",
  "key7": "3D6YdTonAT4KMGqekMmxwWQCvffnGP3WoPjeJehrAF5RTJAAj9N8SjDkBuFLkf5AH4YRShnnDUjaiew6dXYzuiaC",
  "key8": "4vT2Rti3JdPdnFyfyT2ckc3TuEYBPjA42pJr9GjKFAqYqhaPF5KvY6joaoPizJTA2fNWn7u59MG2womHneramBMt",
  "key9": "4xi5zXrQzTEWuqdvDGYBSttgtur6t89DmkfM4PTFUNTkKfXkt3UW2WF5FPp6wpwKrZyz1yKTM5PTjXhMqWY8BUHK",
  "key10": "2SE787Q6mtbYwkDA9LT6hSthDTYCP1eEw4cney78q8WDGS7F8J68RXgB61UwZ4YXtbnwk4ChR33KLfLKuK3Qzj4i",
  "key11": "48ie5vnjTj6nR88eHX6dkdijx7oVStD89y9qMDg75mhuPkivHCwDFoC8abmZZ2DAtWXZn6Cwtqq9oCAyg5xPXGoF",
  "key12": "5wQUjH6h6hs1bHQ8jki9dJGp3yhphj8D4W12ASSZeNnq9XMJNoKPVTmy21PfQRp9tZUZRVvQatCpzfYhiHwV7MZP",
  "key13": "4EiYriMkHNk5N6oSjVeasxWYmvJibnzdW2Q3vjW2K3nrgD1jP5m5h9uHmFU6yGkFfBHhT35bWkYmEBDqLbLKYZCD",
  "key14": "2JPwCNkVRA6NCVTyAupJsKKi56AEWehoY41XcJsWvCyMx5bqkBDWiwG33oTYqwSUbhcWX2QvQZansnd4BGpkUD1s",
  "key15": "dVQBYhxmJNvxpubWrgb5zNt58svexEkjdJijDENTXbBo17Upr4tmLLrNpqXZDAX3KKQQFqPunbvTN6GNq1sWkBA",
  "key16": "5eXgfraSuoxeUNSq7zufP95YwELkXqwTsty4G6jAP8MDvR1eaZt3Ab98ANmJ98nQuzibTWaFJ9qXsadH34GWMYpe",
  "key17": "44VZo8QvUgbWRFJzSpk8JoSvGyS3QTvWzgkM47j33DTNqEKLsqBB5TaU4guRm7dQxTL69sDnrBgXTii7edemZoEm",
  "key18": "cB2hiC5KkyLPvGtU15kcXn8xiYzxBRn9QXrmgxdPGraMWDxfZn7kdxYNnBQEPijKMppEPuNpqUBMSCucbfgcHJS",
  "key19": "3u6ajur9ouc7JUtCpQVVBSRScUcipxkRB6dcjCVgCtgBoanqdhvkMtXweWNAcZ8Qq6S5eMRxrNJKJRRKYa5EvG8x",
  "key20": "r4CyWKjXzd5Ymv3AubkEEmPtCduuR2XrNMxTMUU7JuEdkgWyFr1GEF2nq87UAG32uzy6jqRjATA8oWxvHXfQyWn",
  "key21": "3mqgM5ovf8q4oa1No2FfNUQWAskyAKQf6JG8ARpJYvehXD75JndjrrwYPyFcnbWsyVvzQgQTQapUyDVXT37Na2N3",
  "key22": "4eYfqVwHQsdoWLcGWNynBqGdnLBUKStFQhGpzZbwbZ73CWndA6XPrGm1Hz63mjE4MmBM9nd4dL1ahLfG5piLeFLH",
  "key23": "Bfw6c3R1UDNj6ibjaSKDjkTsPPDnxzzeHwNdEqDu2d7cQkcumb2yd2j3ouzL59ff9BNf8mLTHoxXXScKdwCR8Qo",
  "key24": "2J4f5udmLPBBk2jvQt7MYz3zungDLXNqZJJV4XNSwiDWWTnJAz6VnjNbsgfQffsGhRCHT96ZJebG8viBVVYRp8DU",
  "key25": "2J9fasvvvJzieQoU9raYUHpD4hREwcvd6gj21x7y5TXm5htoahnMht73doz59cbht4oh8RggQEGRDujEQUve2shG",
  "key26": "ZBPbNBFnyZk8V7JgKdkjcuW8BBmtB3S1ur8uCdBzcq8DFkEpynt9hYcmqH1UQD7HPqq1wB7rWrVTFcoU1AsZUyL",
  "key27": "5DbAurYMuyfPerYL7AdYX3tvJ83Y9uYZyzKEFxmwiXw1xNZxkPxkRhQR7j9RtaL9k3NPqegw15N48d9ST2DS4TrQ",
  "key28": "2SS8MV9kUmpBsFXBeePb4AzC3tYXCeDTNBHtv66crgELSZ4rX3RSjjxFjrRtwSp2efVyCP2zBETzUKrUPguxqLGk",
  "key29": "MAoMjDBBZK7AXfXu9CMqFvmTciwqXNCHmX6CYpKHLzxgRMXYFWbWABQwaq52KHVrTP9FUpbALUyssfgcicdQ38a",
  "key30": "N5RqJYgbuPDUvNEjwPEE7madwk8mhgaVn8ULYw85LefyMmVRVjq9mXrQTqqbZjJdtV6x3dMvn2jF2Y6G16HymNh",
  "key31": "TpTU8kHLFs2ByqWCh4HPbibDEDomTFbCrfmLwJDQzLETzS5XXjzsKRLrPLuczpLnRZtmuzgUVaJ2csVPsfDyUbu",
  "key32": "38tY7BtCpWaEEywUedfAhbVYcqpqPzZdxxrFcXZNwHmJdUXK2edzQqNQPRsFcjb8Jq8y9gTg7HZeB4qB36tqTnkh",
  "key33": "23k6UiGKNMtHr6qKfqRjoRqp4hiivcjX76EYBFJPimcvXoAYk2xF8Btb3uwQfrg6FDw3d9oyEBmPfzywMLSP5RVf",
  "key34": "62ZffysFPUvSsoiwJv42VFZgEwgz6D44n4R6JGQNDzmMjVEc9UP1gDdjCXtfuhHocoTbVm6tcoeM1Kw4W2uCHc85",
  "key35": "LiXSR2XWbfYZ4WiRtP4YHJJ8MQ5Lg2HXPzGApcMggJbt93WtFkKiR4TCBQY8mpaKJ6j8tw4LPgW4rxKe86uUKNr",
  "key36": "5aX9DiJZzCu2qF5sY3D282VFjXUVp8bFz8ABiCpa6x5YF3AtEj7giDMqpsgsskJUQRSF4jBj96ZrzG7MBruuBp9A",
  "key37": "3TVjvDdKgnCqcdgw22QjCLGWG1Nvy5ZzEahEZZgeSJWBTyb35Nu3KjxDgpoTPMGGrpEjcgnQJ5qqyro1kZuXwj55",
  "key38": "fa9Yts95WR3URC4WntEA1h5iFT1MpUYL7TT6mcVexCNyMc6GMFCktzcEcoFSmAYMwPvXXmwMoxZk7TUxpDrEdKb",
  "key39": "3ciDwtjkJsz9qNVmxfKrp6gpVKDC19zzkww1HBNtFw8tJazE9a6ZDMTSF1nSRBh4R5Q7qFg2DryyJPgYdwr8fLcd",
  "key40": "2r3mTmzTfs6XdMgZfhKhAtvrgavBnqsTRusMZUrwqD1wvCYWCoydJz7einDBZmMXtMYTzBBKZA6rUYZCi5bEAnpx",
  "key41": "2JuyFfYvUw7uRWR9UtSQbDC7BNQyuciAzf6N4xj87dACjeakmAVF29yWhmbuwUGkoH3CPQLi3A6jgU1US43boQXi",
  "key42": "2YQ7AYiBoKEj2HomtpzmnNCpY5oD3DwQBkQPKgj3EELoJGSVeFRsY4cpcCyTnFjHzfxW3TDZGf5hbuUEPTgaTBZt",
  "key43": "2YtXvMXwjJGLVM4MkcGCe3WPYu6VgHFkPwAMJmHD3eputK6K57CknGuXwpV5WkTgZKKiZcvgg4VKSFZngEAMfHD9",
  "key44": "5NezJBGhdUNtbr89kBP5eAquijH6TLpzmBhdLKRi3yesc4wgGEXxn6KXoh2u63d73wc2GpSWYes66T5q36NRGRD7",
  "key45": "3YHYTp645xmjqCxT56h3FwuBgC8uM3FJRKsXfR7ew4ibKzPeSCLzqk2xg9gb3c9CREZbSgtkxDaqKqsA3LPxDvXY",
  "key46": "3n2rT1tgDhZ41KfWymWTS4NkrQqDmqoLmqFwBcG4HJunD9SZWwMQZNQBqxktcHnZKFLWjQFqjpkwe5KXFVkuAags",
  "key47": "UoDizUro3Wxph5K6yen2DFYiARTzGj6e1wEQ87g3dnXdKKiLuoXJLriWJEqtoAz43WVRa1nJzKAiwtGrDTapSZQ",
  "key48": "5NXwq2EBuDVzxUPHk7XC84iVhZp9K9KGH2dnCiH34BYcfAxcG8tMQCwaKPSKN79Dp64AqSv6qADXhA517c4yrRtv"
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
