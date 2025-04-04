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
    "66tJLyj1EjbktaVCfwiegt276Dixxu7x9tnxuhN8TFq4dNJZ1rEBF8vbyguraM2MykM8fAjjSFkD1QahTjZYWQ4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vkhw4y9o8BViHiGuSFXvXbWFQ2qPy31wsa4tWS5Wfd6z8gbfy1EoTZfWgcTsz2Btwhh66geyttb3RAuiDvB549r",
  "key1": "4W4MgyiqCkfKXwEUqMrTtgbm4zGxyh7Z8o1SXyFUpv8BCqLsbwKTNu3xwj6iGghnMVdz8XxZpujtLNtZmp1ov8FU",
  "key2": "jH1RUC4XsYSY62iGV5vSns4HED61cr4LdxUmDWSRWbSbHM1VCyEHoG7wNdjTKf5SvP5ysQmtmUE3xjxh4GAazyv",
  "key3": "3Fh1PpzbEF1PjraiXppaPyKH7wxKgYwNoA77ENGoHTJ7SQJPov3kCtQX3avaX3utxJEW9LqKhpSS84KqBMb5ebet",
  "key4": "5hvSZ4dkVyrgkTJHVWcE5qYNHmY2GQZ8zLfxFBiHsqDbezt7RuWFksqi3HoaWEwh991kQ2qZX3mXP6kVuXWreLm4",
  "key5": "5nAWFmq9UoYJCb1LS8yPF5d7uBqFYbXJ6BNerUnmhEsM3DFZDrfssth9GAr7sb2dDzCgZbiK4ukHUV8bvqq6stnA",
  "key6": "4esVfzD4aYX1HVRzt5hhx193SN3GdyvsLAF3zEY24TAPegzAotRX9Y9V6QF2V8TLYDkfAURL6tffUk9kGT9EGKXA",
  "key7": "5QMYTnjBybeamvJzu4uvMntcLVdwiR5SoPuiyv4xGe5ADncA9NY6orijLz93B32LAYXtD4w1iR1VoPbpCDy4pHyJ",
  "key8": "XQMJvUWKgZaTEoEnJ8ZXTiVrHy9vkEXrz2jaULJEYgxx8dUqVFPUoaaaLvYLbAmMJmXDBNSgzqXUvMdPwAfaHV9",
  "key9": "2eBHp384zSxqtbwVfvWXkKZhcHLvzGQ5czzN9gmGcNGo18GpfamRbZTBSi5c81fJZ2PJ7bpSidD21iaQKZmnqV5f",
  "key10": "4WkcyAm6LhsFjhnntB3vQ6dE2YT25pH4DET3DFYMmLvLfT72ffpo6hHyo5AfCcys9g6dsn8d3v6bxcpYtF29KXii",
  "key11": "2wASikoSsUPT4tdT2ECfDUzdBd3Awnb6ottA7mKs7C5uNVYAhE49ZaiVGrdHYFWfoyfMi2Z4xoQdaeVbapqCtLzX",
  "key12": "452bBHTqc9zfp6uCjTRwkVMdctu7qNGmj3kaszkqyacYwmX94v64rohCHq9354XYcx6W1UbWaPeKqe5VihMomXUW",
  "key13": "3pR1wFCMEz5WDyNtuedY5TgB91gmWn6DoAeXwsY61bSnh9BzYMMGFKPRNbgT19KCZxgqAcUBWNFu3sRXGNSoZiQo",
  "key14": "jhiRCgsx8f1KN3JsAZDxDpvZ3UQuJWWiStJxN1NcG36gpNoSWtPBBnZqSUQG3RtbmUzpCfmbE5ti9ArYCb77eXL",
  "key15": "5Xv8G7hQPEecJYwTfgM5wnsNVw5zf5SjXgN8r7266zt3at6ozuvzj1zeB2LnupQ9FND6o13SBeS4HtnDWvxHtYVw",
  "key16": "4QoFCcicNPExT6TWKnmsBK6AZbtKdHaKErYYvRgbAJjDWVRbS7go8adx2VotLDgxG5sMFYyVEdJaQ7eB52ioPMZA",
  "key17": "5Fj5nDmvbPYQg4ChV2Y3BVYPaEmmXJ5RWK6NQ6hW9PhwKovrEzPuUciXn9scJxQPCSigFvK2PrwSkveVfF16TKPh",
  "key18": "4VFFvvj5TvAaYU4WXJVG8aw2MoHNoQMzRPn2eKhCrr1s7nuKTqHW2GTGumE6t6uUYmSaUFrUBp3h1REeE8CNrrC4",
  "key19": "5FaGmASRMB18QmbmssLXujstXyfRM8Ayg9dd67DTkX1GpRFBpnWcw1LRK8Bsd6oRAH3DMvcouZKTSGZdwQR5XuP7",
  "key20": "5rBVPQGkPyTUDnmxezdkJXwL8u3MExRE5s5m6moH3cmxCBe31M5sKUDMRUP6FvB5uYoWWJd8mGaaTgSKNJ1GR3Vv",
  "key21": "3NZZRJYhzjUP1G2q3XdRTcqArvSW7HxGf33tyifp6XjtC4XxijVbf76DFCwfVakyo3H7D3aMyzceonjW4CjqtdN",
  "key22": "4UJczsj4GAmdqCg6KJB5vJT5zmuQxUTANhKunr4nhzGwS17r2AjyvN4tzh2ip8QvKEjJSQs8NxoMJXLVPXeHUxVJ",
  "key23": "2KTPmzhCvbLyQd5W1esRpBcLtWawVrjTqmXCSbdtQ5eytXbaqHTZv9AaRDc2WSsw9kfSdyieARjWzm3onxcaq7C3",
  "key24": "3xyUCbrAeo4Ugg5wuuARf9x2xG8Dej6yh2BgWhaNZ4s8L4EKarv9X8PkrdLvadzXFnYBbz6gFkak74kMuaAtx7Ga",
  "key25": "5owHu6uxcnxB8A5mX1iHxdH94fQtG64Y1mpuC5S1xVqTNoXWFZ2MQ8tFjXRenTQCnQw1Vi5QndApwyDmmzGjLBeq",
  "key26": "35nbCy5j6FaokenzTCFrHLeSQcD8ggBKGg7P7xQHHsYvo6uA71NEMMnzjwsZma62X9amfGUKQ8FkjZJGPFpNorRt",
  "key27": "5ZtjunGasdhzJWEWc7fRzhDqku99K4pEdyfLmCBccF4qiJ6ELCPLsT1xu9QcgohTjSCgoheca9Q8K7zDQeU5PUBG"
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
