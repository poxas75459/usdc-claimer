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
    "3X8tCMTHovcK1RWsHL6WhLcJ9V8ETWggkq53L1Ji753rAeYPfxXJyZ8RMDaUHyZQKKbR9YSCA7tufJcqjzrAWQiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLfEUJbuAUQV8vcXvL23Q9tgHSRLCwP3CSVRD56rFSpWEX5FNLJWFMZeSYUVBvFYLdzfABeJZhezHs9xUUDi8Xc",
  "key1": "4pK9HeE2ogi9FgWg51jWmmhSLctLVfvbkvT8mjnu97c6evbdudsR5Pq44LNt2B952xRYdG8t3EDh1zrnQ4qBDXjr",
  "key2": "3YpD9BLUq8kjxNhFev39FETqMi4HU2itwUXufZZJEtR9SJzjVS6kJLuYVx7WwpQSfVrWBSxsv6cHG8eSBvM4c3Zk",
  "key3": "JTriGZwSmpNjxqQGEPoPGWMytJiYKoMQcMJNzwwg65HKxpHzssq1KSgMQQjcngqxc2n3RwJabD9sfanvPiKkuce",
  "key4": "5h4ySkDbjumMbAhtNqBVvugSoCH4pnc2CEHrhWZZLZcDroryyqK7iAXRrfmt1FMjxrfuTum2tkT61ku47h54z25b",
  "key5": "61TU3vWA2jhYXhLNh2R8x6frzUUAAK6YcjSTid9ktMSq8zXGwUpu1umYawJNZMYiBmSbExSb2MMcXuhzhkJ4xRVb",
  "key6": "5jAAuXBYqmRqo9nibsi6HfybrtgA2vKPGnXeLsssCz8KTPUFYetaWwHMUENxQUoefxNmYabswzghhzpRbqdi1uUt",
  "key7": "2ZSuQSg2hM1jn4PUyvQb78nJQWeGNFuhkys7WuovucU3RxaKXwDU5X6X3LqoA6VJzuV7zD4rmGQ18e3JLpKkaSSD",
  "key8": "vtNhZcQpJHEaqvWRmUepwvPizDzf6mEugM1PjhbfvBJ5QEedkqDot73wzn19bA8pYvjhmKqapHbDXSfXKkkmpBc",
  "key9": "3kgmSTtrjmjHLGuYBnYoZtkJ3Mujic3A6dPrxYeggSgGk6Akt2AREgXoUp9GCfGYtWKMYmd4whqKWifgTKfNYCBb",
  "key10": "3ig64hv5DxANcUnvF9efn6MRwDrAv7N9zpPqXmxY7rXPtWKv2A47QgehjEeffRxWiu9djXDxHAEW7XQcFrxBCrqV",
  "key11": "5tYdBv9cFYnx5vHZJygqeLyggFecZFCe1DiM4mxuaBL28kEsamwrSPqaDfpSqCXw6DSxnrSiSRzkDpC5QJJzgZ4",
  "key12": "2afAMwNZLKyzv8xJNqKCd1ecPdoj5e8YsHmH75eHWU43jTVJe6ByK8uyWdjFA6YSx6tnptnEv4JxQjNi4ao4ixJx",
  "key13": "2CyXT9Ao7m6V5cZNCoVuaEnUpENzy1HyGiidXFeTcZJbShSZU9osvXuCjZhTqik2NXmVcaJSh4zJ9heGXUC4Mr4s",
  "key14": "3kCVPQX4LRh1L7Z9F1qBajKireezNZHWZyGvYoTqNkom5ZL5ft9ydhCGnJv2oKgYbW5tpk56aV9Z5XHShQksw5re",
  "key15": "5pt3JGGdQGaV4KAn1ycuBiFvqspcT9VSEk3k7SZfc9W7Xoo3Ah135opA9XnRGC6z18ZPnvzamH2Q6CaJAouA7j2g",
  "key16": "3VWUdEFjD2Drdj6LGw4DVVscbPWXwvGbD8zAUnnbJLf6nPpBzSYPhNavcgz7npmVkTVthZWAoiY3kqf56eHSbaSD",
  "key17": "51rwh3x1nddFoVoHCvLvesophchLVXrwkZ7iSrLn2mVheAJyzqVRdcXD35kqWQGhapXbxurpWcTguedqvasheGwA",
  "key18": "3mzwcr2D6baNECGehAhjHhhmTMktZ2CPULJ7NFAzGfrzLhM1y4rxkr3W75HMvqSkH73DqfxTzWV4tqkzniUTrnX9",
  "key19": "ibR49pzfDcVyjGbpAgH8ZPrbTgX3kfXptDLbN4B4BWCpduPuRmtMPCR4zFRFCB7j4dLcuHmXQpzpvofXEPi4Ah8",
  "key20": "613rzowRcW6qU8g4LLPbfJApcBiReeh5BaTbsdvr2i5xjCj4HhaTiifRxGCyf56sZceheyZDJS7NuW18E2nwqw3F",
  "key21": "2izjEwZa7ZLKwqSfcRqyd5t7TzjoDQynonyUgu5ZwrKM3X2zdF9wftk71NutJBqaQRdFaFfsvVtTeJBeRiGVzX27",
  "key22": "5J8h2PwaXVAG65QoH1q2iVczkFtG8DRoD2uPg9kesQu6WbXKpLUse2hdMFXkUxYDRp3eZD6eVssost1uZsz32m11",
  "key23": "4zNJxfYjf1uGYFxPT1jd3bq3wKBvMhCkiFyC83hfWpzQtnq6GyBxw4734QCmm8j4sZF6runS9PZQmYbgsNxecwY",
  "key24": "mthUhFHNicinTui3Qa4qJ8eH3LCFpxDwjky9n5UXFasnVPiL3UZ3uDbkZBAjsk4iTffyEVxU39BMTopxvtbV2Rn",
  "key25": "3gRuJGMZ4kN4Svemoq5fUDKosAWcMyukNBMo3CzvJQDdwavErGgBELNbLq2RJSTrA7B1SRVjAxikQPePhiM67d9a",
  "key26": "5ZFkQZrarveaPs4nvmmMaMDf1n9gqb2rAVxtW7wcJ3hgEgHBCAtyWUgb55HjqzvnTg4cXy38QnphNqhY41etFFhe",
  "key27": "2rV2SNDZF3DhZ44grawgkhxoXVPaSXmEC74sAA9gBMvfujstDRxZcWEJjw9LvjXEkUFKRwEQh6VyNcmLXadSgSSG",
  "key28": "4b6acC6hho4KqPPrho7GbJPUYspY9Ehyxm6saWxLHyhX3GM74phqKNywSfLHgcygAvm2qXAPyMCjyPjzQtoyYg4M",
  "key29": "4WxXmCY1yJLBmKSM2f2Gye7wciZbGpuLrTWcxrDKU2avwySy1hV3fsaVEmxKEMdP7aHoPDdCqumY4Zh6TsnNn64W",
  "key30": "4SVNWhvGGWeLiv8xFA3S2ia3GFkJjdwpM1x22LaRv9X55g1qNv1p8dRKnvA4DnbUBJGN6gjZWmfww3Y9XVQMMWXS",
  "key31": "hngx1gty32msgH711ELUhAponJdTdSs1JigngscYWZeCZ3HMNLo1QKNqHEArt6rmqBPgMw85xUNVFsxW8k2EG3x",
  "key32": "4StTn6dvu7cCgeUGtpwCwN4BGMJ5NfQbzEiNGcumToNSrhKrb3zCrKFngSBrT8jgf4FFRdy7EyYrWaUgepN2NDmB",
  "key33": "59WooVwMU7UtBY9gLSbcGDfMnDGr5yg55aELr9et4qwiyPPDn9JFNH9JQjHoxLJbSumrEpYDByJuumTm8aLqBYcN",
  "key34": "3E1Gd7wVVGWajdjY73XZoErpSGSX6wEp7oDXuWS3E2kjHvkT4JLG2Q18REMdHj4GTh6WTgB61tiAabELHFPpXqj",
  "key35": "444f8ALUFVmvXNDxEJ2pekcEkfMQFJKe5xzDBYUizBY6JFkzXDokLNjrBkssrBnYHuKri2PiUogohEJihPXL2nUj",
  "key36": "4zzHmmDJJqRWPwppLYABKhANe6KCFVsXu9y5pGGRdMoCPJxPhBXEqBBotynxaSU1hbNXH4d1N8BLRFVpTXkpqYBg",
  "key37": "62TYSd1RjbNHpPsBQ5zkuszG12x7ddE66oNhFbyEnwHLsS19DwikmqzhW9GXzxfe87L9zHxcKMJwYDeEcHQCshkj",
  "key38": "3Ad8J1dyuYV9KzhFHPXHm2QT6yo9WLs2DmuPCLxDefpwge1HrKmM2BVrdXn8jp15uYoe15JaV9VARYDZVVFAvo3S",
  "key39": "5W5cmGuZig7fjFtfRZbXTXSAdA9MnNXybU54XZdEXEhMXmq1Sdc9om6pispqmXHvRQyKk65s4mZEBh6soUrzPz8g",
  "key40": "3wHFsXPpKfDhwrAp3nPMkpyuuUafe3do2bAkWp733G1Kts3NJr72qPfGNQHrnURNxybwyr2DFQF7rYBvXFfp25J5",
  "key41": "2tgbm8h7xF8BqG2b2BBZzhTrdDnM3Ppfm1rWgcBGeSdCS752hbJiV3BMRGMPvfx7aXXtzTm1BtbmudK2BLQWTVj5",
  "key42": "3KqooPzNxkY9urhcsjAchgo1XnR97GUp9FgV8NRJ75fEN9d3qiWBSdpfnJKnmWUSUEsKvTip9iEUa5sDjxDMx2fE",
  "key43": "5mAnxQdN534AmEBgDVCt2QsuoYpUQMZMXsWYx1zZD8tRZpyVX8mtKLXVyyN92zVKGB4M9k48GFLGtPBfVw5Djirg",
  "key44": "2e4ZK4pMenLf3UmRiG1VCHfXku8etxsM7m6nZm7KQqhjj4snHdPHtpZttUEnH2wJ7JUJh7bftAk8MRQSu6WGqgCH",
  "key45": "5YrdKeWJwXNJ7vQ15EVzb3wDZqN9jGrpUJSrd4XxZsp6VUicVWsWHnKjGAAPKFstj7x7jHWGYTSsYcJSeJ1HnBHT",
  "key46": "yBcJ7sHf4RArrszK6NHHmQ7oNawYi1CLcYxMXTcv9uKHcSjH8DEmeHb86KqxHS6G8RvbQa6nb7eoFdwnfht4Lha"
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
