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
    "2hDGMhtmyUQ7N3uKcP71QDEoUYSvZUGZTAB8aJF3hqWNMno2QwaE5ysgV7WG2Rh7fD9xRSZCRojGvEmhDcdQjct4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DBcbqjmmjPYJkHic3wG2t53zNRdDRP9odKzSUiisFHSq4Gw3zXH6PWVnZUaNhSLN8VUBGVTxFy8ow9KYRpLiQ4t",
  "key1": "5WfeYwMnLmKk5JqT9cTvVda6ZQJJWh3kf63YFpTbAjPxdFCj6TGEXGr9UfN7ERsPgoPdHNrgPQJEfKLK9QFgwc6j",
  "key2": "3ENU2Wo2wqYxxk1NwRgT2WU7w5Y5ncta42UsJCHb482p4RhGcmjLzdywLiT2WLSupkupDAgg7umzGShkWWzTrTup",
  "key3": "4DPdvUMsP3gyesVpE29JMm1gbw6w9KrgXcTTF427XcnQwM92k6PiM2SsuPx7r6UkQdtz9mryHyGLAUjmS3atMZTp",
  "key4": "Dewrqb131aVFTaCLZqsEAL5sv9CFb7m9owfeYitYdzGXMkrK2wXY4MELgyjtg3YSmaZrGTFTMq6gZmzMukiLC5r",
  "key5": "2T8nSmZ9hksJbbYhZFpwVmXRyK2tGnT3PD9TPFh8bASMAjK7G2MBC6Fi7hA8fXZERqPbBR1yMD4fSfERcro8umxN",
  "key6": "4HQD8aDhZyMDQdbtzqyS8FNsDtpsKt41N1fD1avnD1JcRDyZmALMdAmFywzw8BEtWNW8pDzswXakHYYvWzV8nD3V",
  "key7": "5pJ4WGCyxMn5gLwm8QsUcEfoAF7dEhsJS5MVe48ooTGyDCL9wGHgaxrsmnoE7pDY2PowkEHzecyCjDnBN1MG9omN",
  "key8": "2bFQCFN9FD9Scby9EsRSipUET8jRkf11w6G2qfmuA9f1vyRTtFBw412QVe6ehEEUdx59vMc1Rqwx78aRUTmUA4tt",
  "key9": "2R92Xgo9DuMTNQWmNTUcCnUXV6gmnqSze6BjjB7L3GZyFrCUmqM7sYccjRpoCuur46rFAWHXWwoq5STZiogYJWDS",
  "key10": "KeL4wNYA2g6o4g5UFZPjDgcoFVhxkf1DRcenoesjGYtxjvkEQpoGx1QK5nkgHiYtUKBvAmxQGg9WiBh8NJQa5uS",
  "key11": "5oaWdfvAEUMzh1B4TK65J3WhN6x7VvGemH1UKEPWyFmNukkfmJ6M5o1vuXtPahN9kY3rAddKDzscwWghPw3HNdHW",
  "key12": "4LLdLimpM2zynb9rCxRMK1FYMtTNKb29JeekbRmYkudUTvaYR2aosYR6nZ5DfDjHnPKqZWpphN19dbZWRYhGbvbs",
  "key13": "39JAaqpxUbmFKqPukf6ceX3wmQTTyG3KYsCXWaugmEg1yziX99nNu2LiZU6Z7z5RqXU6V9R3mV8f44kVAD3ZrLtm",
  "key14": "2stub987FCgFy93cMMQJdHGSWMmaS71wSfSwNAC2uXDNWeeFB5zCBzzMMWpogvkYwV2rx5RLJkinjFfDLuUSzF9v",
  "key15": "5bhXqy83MAaREJ5h75t3GseiJwHcN5cVz3jN5RvA3U79R6jH23ktA4gfw9mZ5E4Vu3bLjnRtb4oqwWg3YkVkwUAp",
  "key16": "2FyLwnygPHDFgL8Tw5RNXmT4UDYgxZqKBeTFx4fgheXnJkpmjreoPG3cPpixfEJtuoQeV4zg7sZZp18yiJ5Zr511",
  "key17": "2AAfHenwpupbRCtxUfoRSi4WZt2BF6LocM6PyQwr4PKhe35vP6ghpxSchvA7M5UNy9asPJJeqNoRw8ceq5D26a4R",
  "key18": "4zRe8v7ZnnUvBUjSeVg8EHXm2d3EZKXNNdMJywugU7qm8pajcQbptWB1tzbsKjjDB7CuS2zrJKC8VyU4c94TS1ge",
  "key19": "5N1gZyJPW5VQbW57oQb1ccDbFkueqBT4vZZaunLrXrsyCGjye1P4KCPjZSgaCdHwKtfFpoistNL7gxCAgr6U4y2B",
  "key20": "21A5JrYf2eTYN5DvemVCzqU5rReNKVXshcxV8zqfCUWxmv9t74dZRVMZYox8YaXmrRBHBrwxe7pbxf99Et1SkHBC",
  "key21": "3qHwyHYMkFL7Px2QEYvyfLiDxtXiLLpvD7auwVgGjNsgRe5BrGg5Z6ZLZKuuzaUG7S4LhL98EaUfJupSSJcnw8nB",
  "key22": "2UGAEaF6yb9RK9GaGAP2jNt5ydQw1hfzFhQQL1NYMGUGpNZnJaEyS1LaXWpVWzt1j74VoDMcnR9y9uMRaxdBgA8o",
  "key23": "126QSsEmWuytdNADwXa7JgXKbpUXzEcVmf1s27P8DWk5uyFMDXAwnkUo7qWQ8zpy1UbYrjghRHp7j12owaiyAFeU",
  "key24": "EHLgMTZGwJG7Bm1r9uqFTsZSG4fWm8Yir2S3hKyfN3bNtSAcs5GqnUwUVEHB3RQxJrC6umfdSomRJhoxzboUyZy",
  "key25": "5bEB4itbC61vPfVmBRWRxJ8zAWzS7dLigAU4KWm57EDxSAKNsuSQkLqsgzuW2JSQ1xrn8k1iwueTWPkUA5NUKEtA",
  "key26": "2GzKxBhWwKpqSexzYSzdXP15VHt29xsG28xgpn2spv34k3Kgk2rB2gHQVmB7xppxhDuhXzEhKTCbmvr12gjRiSTC",
  "key27": "tV2USGFvUAy1Vq6cqnZjQjhmvbQ8arvaQJLJq1XEds2J5mfeUnVMC4MtBCVRDvkbkPunZWWJqY5vk8A8xyRyiW2",
  "key28": "62u5j8d1819gXPp6zSvDHKatjSVWTffbMapBDWccifHDjRMY8uLCZceB5VbKTz33dyQVQm7c1skDEugsq8PC8gCB",
  "key29": "W8WbDPA58KTPBYJfq2JVNPKvomP2PtvMBwPSio6Drx9jf2zWoDVxHNpCM8sq3pSLoKXRjaK4EHkBKhxwFzwu3et",
  "key30": "NEAEvYFUv13J5u5eGToKRkLkfRWau5sWQtb5YM8wPCb9j9n1ksHc27Hroa3Nvb3ZgKL5N8dYQouCNtXMMiJhvas",
  "key31": "44Yb7dBMsj6ejC5SvXxfBy2R79FK5hyQQrnjMC6tENN48UHMRx5THXB1QKVeqdbp6CxiZ553gpr362EBvhv2LQeR",
  "key32": "5Lt9LufEbTgQr6w1MrZCqNXoiQJciWoLJxhFME7GoZVyQjwA5vf3iZiNC53nrfUCWX4ade2R7jhvqGGHz6BYtngL",
  "key33": "4zVJHGS9pJv9UMuutUmtG7m9LnB7YjsNpBSWerXtAS27Bf4mhEWYni7mAzKEGwmdTvFkqUGXuusShwnfXPfSwXBe",
  "key34": "4ig26Z4trPr5K9KCbSH3BDo4jQ5dsuLuLcpqQQu8uJb4bNShhkN8BjnnDodswfHc7DTMy2Vdh5pSwMpr57wSBwnD",
  "key35": "4jmcxYbMKWD8EeJCrAXJFATpDH73qChDFrbWxLZg4qybKr4fofLfzgFReu7egB1H8mxCnGFGDahQ6Tt6K1cZaASt",
  "key36": "3jEjnW3yaYVKW1MXBpSXCztaDttXtvr8sV9ak5KbSbS2VHNGsp8APS4mQ4dT2JzJq3uvvu8pmJc5HEkMiKwSTvYL",
  "key37": "2YVBYH8W5eNRRjcWudfCJNqVgWqU3sqyTPGAT95xT3fiz18dUxgLn76Pu7KgakJ5efNETqPt9Yt2XGHxedZ9jEzD",
  "key38": "41hYZVvTeYHeaEGEjWFvsFA6o5LuCVV3gcUxSgzFUzAHUa89mj4RBmu53zxzAUyC1a5nnwZC4CjJsK69sdC1RyjN",
  "key39": "UnTaEb7YSeVP7X6GYKEXGJqSvUT5GWDJE5Xxdkvkg11MsdsNkuQuv6stD1bpWkaMcpawPANiLpWk85wc96nbxLb",
  "key40": "3fV8NddRLJtudyBpJRwfE3KqTR63xjERRpoKUcbG2cMLmG8TdaULfAjfeQ1F6Gbe3yNexxjqVUHsRwhzohXW2hA8",
  "key41": "5x9pmAVmeHQQcUSqqGVYce1Ng6Tn57WT4BQsrfJj5VdDyhzD3qGpMxyVeuP3ujQsHgUzQxJr6qv74s3EwUHj32bk",
  "key42": "2YEaB2ec85g5v3xLDnUTuPsjoeHfgwbRxqP1LxjAJLre7sUX4gAZYHyBALwDnaf6VC43uBNT9T4AS6s87BC26J6N",
  "key43": "4Lzfah7jZXHjS93hQPcd5cHhWtuPfk1dSe33iiaM8hjopYuLcLA7ndDX4eihP8UeCE3t8WZWwGDFsJcXkmJ9jvZZ",
  "key44": "2VW2rnkZp6zjh3ZqPbwz8WG9Q6CGG2cg92sAspA8ubnttT5312TCK9P7hpEkoJ47H8AppjZqDfxo9ihcudaY9hRQ",
  "key45": "5KSd2vE24KGH5V31Mx9yqkhfNnKtfivPF2zcqct8mMmtLLhLV3KssUewunoyvmH9CNb72ULA6DR3b1gxF47oAktG",
  "key46": "5LyYDDrywUD9Np1GGxLqc3nEHZ2VisgQ6hjx4f7AnYWNp79BmATkhG1MHDi5zUMGqk1e98s6sm8iQxRD5cVHjwku",
  "key47": "5382hZivCq4GjchMXHrY5SJSJ9TKWtXnopNCs45mwGYSTHW3XTJBbH1vGuiWDZuXfXzKTAei43XVCuhWHF1oyEux",
  "key48": "3YM3zcadYY87VUwq9sDGQSS7oKGfnJQ25stT2LaNWsaM2Y4MRAjzhm1y7SaPT1gq2aTwCTT89YKn5E2WR1iggoYG",
  "key49": "mkB5fBBMwohzC3vY7QpmAGMftw786ULnkWmCP2ofHsYet2UnR5KqQigbBHqso3komNYkcrSDizuw75CZXyPgMfm"
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
