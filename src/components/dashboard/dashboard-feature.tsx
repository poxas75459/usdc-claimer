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
    "5s9t2uBVCNEuERgqJ3FTYbGT3HTkx5Ngi3dQUhqGp6k4W6mTGj221K1aAbyEkpjk6o6FUTGhQN2XireeiuKJcPEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWBT1D7143wyAEfoF9xFkZPB5P8TsxX9Wu2mG6ynnp72Cxn3onykiiLG8YRHowG9zJxtgNB7JDf43AkcGRMkgNk",
  "key1": "54YLY7BSgQRvmJzLQeJuqkP4vVRXtBRpLtrqikHvUGBMYEBMPA5RiuhS7SspNAgwi5Vswp7zkf1XUc4euvubC7iJ",
  "key2": "5gmuun5VaZw96N96i4tF2xrgxk6RcXuL43L6Wq6eTA1254aCHdhkNwg5cKyMjgN6QWFUNrzGAUBRFCXCFAC8KPaF",
  "key3": "3hjQ2Xv5HMRzMEe4n623K6wsv7D2EDfsVyZ5UkHqK44PWfcTXEjhfPPZPopJQYP1n7dXQ7JxUk7Z1Tf2HnBvRLgP",
  "key4": "2T91v4Bfe1xJmkiFUZPQY4VKm8txWKQDpeXrGbHKnUWCsnEw7P8hYT5EEZETHzDbZBzxiK9HpxByfRFy4KNv4hyc",
  "key5": "aDBqQviH2coQZaqSonR84pBS9HuWRTcuxJvN33DZsRZUm6m6L51gyz4ZtKFURmuztq2i7es65QZKuWG9G739RAG",
  "key6": "5wijVT3DtvGy9MEbz4Zu8BzvA8p9YotqQgNH5ovVwYecwQDRZBFCF3oyKStpgfn2sPeufF8yV4taBmboJ7kCxEoN",
  "key7": "hH2QBxWJEegRKLeT3mqTPUwgLdCWDs95U5zFqS7TZeNcm63WJkRsPrjmasTaMLHqUMzJ4Qpt9go7LUZ7q4RoTsR",
  "key8": "4Kvbk6g2BoeqiHxXSfFhn6t6QB9k8bFqHZ3At7pXybVpJhJ2kxfcjGbrDw9ZvBAvPV2enUKsviX4c38oP2wrJQ4H",
  "key9": "2NNYfnbZebM5KJhMSxapZHee9iAEsdyskKVGArC4hL9y1k65N9RrsBs9FK1WG59oyXhJqy6vMwcnrwN436K8mCJn",
  "key10": "3HpshHpuD4bEPFF9QGgE4AUgM1qa1z3ZijBsrwMqcTgfSNXyQg3DCUwi2r4GnrXAqgBNRYpG94c6ow8wcRjNh4H9",
  "key11": "4phDEmdYL9uL1acdPHaEbqo1DwdpHWvFzdDN1pAWC22Z7bA2ZgLduj3aH8RJLouSAYQTDxJCb6KoziiA884nVdhf",
  "key12": "5KrW9ZB6jfdm9qXymCQL9HvP6GPRD2MRZwwdhEx6zD9YRegbzedpp7AaZyHJx9pc8ThLkfvgUUpFGayiRnwWNWK2",
  "key13": "317ep8Cg4CBg1ZXHEpzSNiv52LcqZrsdB4Eez7BbAvxXrb4vEvw1fgZEQswVXoKSbBfaeRhgpyqonVNPtsfof2pk",
  "key14": "5rGxTmAfVkyysRXyKjcjR2YAdLiZTEBgJQDMgFc3VW19oyV46KFojaCUiJmNUgkUxtwbhnNBC72ZUmtiCH5NYqnf",
  "key15": "3eqtfts2WN2ocvf61iyTqXw4RFMgeB2W1k4Aw2UNnKPCjrsmkU8dKb61d7XKoFNqrgR7snFN9KfyhHBB9ddprLeT",
  "key16": "4u5PwrrDVm7bAa42EmBHzdKFU3HgQhxBsE8mFckKVUhGH1nTbbetLajBjq7tP16M3Rvjz1ppHjjFnrpPbZPiFmJY",
  "key17": "7WQDL7aEcarU47HyaPSV466fWXEDE6wvZnmkTbWuGE3nJmMz9P6WbUoebmFDkz2ZqJfw9CP46raqU3y8AhhVfc6",
  "key18": "3nistu7ZoJ4iqGth1t13FhfXpPupmx1Lgto4tM8k3q2ep2mVAFPGWGoPWLA6Dejhb9dzT1BaFzjQn6qepwTR76AS",
  "key19": "286txgsz2tmYGmFFQHiviE3n2MDNuqvbYivoFKULRoZ6TgLsoUU4HSAyybupeB4SSCdd5V9dbVxkofrUWVQ7ZkFH",
  "key20": "4KJmbxNg6PTga3GaPtYjp4htLfr2Wepm1jjPEX714jsuSVs2diayjVdMmZc4eN4nVL7gxDwtFVw3MpLa2fjY3bjE",
  "key21": "5q7PP55AB2cGa7LiQFpAbuVKPQ4owgfxxr4DQm24w33yhhC5PLTwAHdgrTQzg2yomH9R4kcwXmZnoYpBhfAMRv5r",
  "key22": "5LPdB7PuTGbNKYhoF8wWrfEvfHqjeUrTfg5Lw3Ue9RSH7VuGbhyqYw8QyvpwPFfMjvcSZ2jMv647EZFYLKC8UzXd",
  "key23": "5miDK2jQQ8QbNBDrEmptLiwbpoBuvdAUHYigEyeWUo1zccv98tqneLq5RUVPhvWRuxkSpqf82Hweu9PD7YAsJh5t",
  "key24": "38gSeBzb82W9FGkF9HQQ93rgWDuKa2kWzJ4pUbzM6n8atYy1jTVn5XL89fHqVNTMLsyg78KGvBxmtYMgQSuDXvjk",
  "key25": "2FQaPciyaiZ8v2nLzkFjE89sGZfTq2HnAfUHE1Kir487FyrvGTUtjGZvrW5roJHwLuFLJti5zUBSTwFwsLbELA7",
  "key26": "3rG9fvCSu25Q9hQY3o1Y6jbEU8DadQwLuk6KM2CfyCuv8xzK4JEcNpJ9KtzLKWFUMD6h5UVdNmFaZVUrKnHGXAzf",
  "key27": "2HzSvDoSG8aXcYaLDSKTk5naCf7Czxk7Vr7GsqXGcQtBxVLaRFFyMHnwdqgM2tbzoSCRhSwucNpjBU1z75fDEsoE",
  "key28": "2XfXf75Pwa6CXBdfnEqcGSZ1AdyS53ShiECSpyXpVR5P6tbyak5TzJZoNKkDnz1KqmpzJRLpQHWrj69hHSSaebsd",
  "key29": "2UNQzDMpSrs938Qp6TH5iFbb8x7En1wmo4VguFEQKhsEwAQqinj8XJCA5SeYe2AToxBXe8PMuANkQZCefBJ6t8Nk",
  "key30": "5uX6g5oDz5c34RW9PgMrG1egRvjhbbjAzRYgmzPCPgLh9JZgqZmSiN3cU2YgYKHnRpacyusCPa2hGzBtcP7ZnXFY",
  "key31": "2Svm8Sur2wvXYP4tW5fygt7QPYEfXawnw1y2XAFSXPxNvcyrGSKShqCKXw1X1s1oTMbfo2mjMfFG37HNvYo5yqEB",
  "key32": "3K9FhMRHLfkAwqBFKPQ5LhgHrGVoqFmaWL8SburHy2RjTs7eMSC6Ki9Nv2zZr18N4rDmnAyXtG7YPSvM2FHSLzye",
  "key33": "2CoptQ84PrS2vho7RrChYRL6ZM6YMCG7utwjn9CY2pJ843B3cyiFRjd9N7GmKbsvq5nvMLZ1zRz1tLSZkTasGNHN",
  "key34": "2R3nS6eDLZ9HUg46qiYLJfEDipopGf6VfGCkeykpsmruLnrzkTn6PJYgBYbc1XgSmJR9PYbW8qaBx7irPZ25xrM1",
  "key35": "3TBRvtHSpQ6VndfJBii35TwJfCU3ni8xsxQRSgjSknFEjbgyd2CMCMfuF67m84NrXJW7fMsGfbmSn8CxUfCzhunV",
  "key36": "437BWTg1E6kegdRuoKHbv1HCFDJi3PNWCKiSQTfFBwU4QThGjbMZNeCLusvvBTbDBxbfDpFZwcVT7KGXD4xisB3c",
  "key37": "5sXDmHHMBWXTd9EsscUwAHN5hKMWMLHPB9q2tdz4wmJbgBW5umQ2Pdt279xJegbvNy4G7h1Njw6ixKVaaqCJHujj",
  "key38": "33PW99trSXFoji4SdTG2PLcWDq3XkiK71Pg6ewqAmT6W5ruLAv2KKgrbvpzc8R6bKUbyHFJjEPK9XurbooXFxcpj",
  "key39": "jAsPJsV3GZGvvuFuNr9eub79C6Xq7bKUENmnkzqxzQ118T4TVWnNCKGkgWBTzDRX3DxtgMWwzhUjTpiGuXBdLPC",
  "key40": "4dV5Yq3C3kAXcqnzyZzhbsvrC4rdVKcmr1tTowiaLzVWnkxQ4xEs2qsxskS5kkR7LXHj2nzRFW35uSgApRLoLdY3",
  "key41": "4iuDjetNi8Mk7JfbZukdDezX2J4zbzh1Z2KfuYCVNqoegpkM8arshebucYchBu6rE3FJzBqeNdTjeHMT61tcQnyL",
  "key42": "2jzz7iEziqqXUwrLMBn2MZr3LANW2ZWhbevNxfqSKSeFwvaUJ3MrES6h3Sb43eDfpDMBoLyiNYfXXtSZJJmNsSeh"
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
