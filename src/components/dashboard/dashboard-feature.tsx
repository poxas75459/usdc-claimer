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
    "tqKiZ3L9xdXwqdwLdrxkLpkW25CQHJZndGBopTYhYri1kG1iGBkr3uHivojW5HJTazrkFauRuux8xoHet8vfWmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s7B5tZ42hKAw3AEPvpYSWAoKuEaUL49sUV8ivxLq9REEnLjzyiW4JGqtsBFeHev3G4sDuwNqf9Pzkvniz5qvgQX",
  "key1": "2rVipKat1pmxQi39AijNfFXRYdSauKoK4UUwKpGnhGGa54GovddW4D7r7nbSr3LuMqf19Cr7VPZMKNbdUUNrsc82",
  "key2": "34Jb67g95SWPFjE7vPRKTuuo1m2dgvxCqo4sntbm3MCXCFegJ1yALToN9z5pepf5i45AMXQCp4HFEQD9KjudBY5B",
  "key3": "2udF8G6kM5NC2Bp86QUYM3vqb54YM9DeZnBVwu4pfDUcRgUEw3bsG6Req5tJji5Vtd3N7dRMpJVY77HgMgwfVHjG",
  "key4": "4zyPr1rEhqaQdxVBLst2YWSgbDkuXvHfoTL5FeR1htvzESWvLJebSBsKhvLiSmnuamoLwGbZvgKXRvydnaF7dErR",
  "key5": "2VcUyDPY9N1spuVXi4ii1xbBs9ZLGtvvf12UXPzwGGwFmVGpHq5xyBM3iZk8Zt3SDxvEGZeRAN9cuf4qZJRb2NXt",
  "key6": "3KwvLKPDf8kVqiehRTpLjv7pU9b11XTMELaEQo4AiUTQ1C349BiNsHVTKHuBbxwFefzFuDmEmBdVPRf9hhxb37s9",
  "key7": "2ZR4j4oa3qZPdwVMgwoQ7AnGtuaGGDjrwtRjs8GWG71LukX3QtAk3nYNyrVPMfgsp58cV3YooPncEHt2RLJuYCkq",
  "key8": "5UvVC7McYkhA8LwyQ2rvTvdUykLRaQTAzexTPgLXCTxJUL8Yd6gFThmmbGMC32KmmyhD6gKSuhSvyHRCVE2G6FxX",
  "key9": "6487CisHbX3yvPVvkpmEQRkPQtRwUHYeaj3cdkqbRXNVNUnqMnsCiYq7gsDT5qNpjP9Ub4r9ArC8aaui5qYmdALx",
  "key10": "3U819bBEZxdi2z5P8CjQpuWAkvDoipu4deee3TPTVpJ8nE82EdwrZR7osx5GmtBByffSMxifPZADbAERJJk66kBS",
  "key11": "5fzZvtRHoiRa62RZmkhJSJCNHCfCEzZ42nZjir8GxxzjMVgt6pP5rwTbtVjc8EP1gKu7BerjRmj9s6zL2KrXHynk",
  "key12": "4ADCXvELrr8peybPYq77V6fcmg8QdAhJBTLHxnhiXvVcMSzGtV4KbxC4oMkwTbQEv3cHjtW3QStifTdB2pS1YMkF",
  "key13": "3Y8HdhzQTdRqGFsrG2tRSAQnjbvKpnp452TRGtugpyhzyMu1nPNJrFYfFVF56XgHRMKspYJXqs1eaxrkZf4MhhBn",
  "key14": "4yyMXogxrveruXRGG8tGwVTo86QChDknBnEGhB6FBxqExEzdqDEajEVPfQJRJVDZQRDN72BDeMtfM9NacGBhCbgW",
  "key15": "4kQWYvsfJTXLN2EwM4oPm92JPN74MHdRYnhDDGygo6gAKBa3C2zLfeUby1tsL7PamFAiJFqJ13dggLVLba345qHB",
  "key16": "4omFxzp4mCqtcbBAnQDhagjeZCj8jcj18Cyho2MSDMNQfDmrcex7cDo2fqdtGFYZGCHhoXVvZVh23FE46gkCABTM",
  "key17": "3FvSsbAa3GAnihmuW7o4Kdn4SX2zyHoqgoyGgmQY5dzqBTwH6JdYX1zP55gqKxrEEpZaPsMEeEMZZeteoeg6bjWf",
  "key18": "oHCoF5WsjKxC4MNWwS6SCWC9H8EtFbJhxqKFBGCt4QQhNJREoQdk67NPPni3zmfaLqpJYgSFHr3b6acYms5qbqo",
  "key19": "3P84xVLNPdUWYAzBuRXVNRLrvFppXp7LTzog347cY3WQ2gEAKyvZf4b24F3hNQVfWftdZddGLaoyidUvfqzGj6ci",
  "key20": "5Jen2QFMMbqBqLGTVTWbS3kp3gopmWhZ7jRRp5vA8iftYRURaw17J8rMRVfP7rMp4rXZyFSCr6i2D21aUvCdecSc",
  "key21": "3ZdxiUsZkzcvejCpkKWCjyLdvGh3CsvvLm1mU4eTzuf4uDuUs7NdHhJf5PuKb8TgT2Hb5zPLTwypKfdcjbSjZUnm",
  "key22": "FUoHBzLGCuue1R4ajghVLqMLFetNugeaaTAySGVfWcQ7GF7ZhS3E1ys1qsrzXFb44nchKrsYZCRpU8Kvrb4LLeg",
  "key23": "2CUCYpoTuUAZMJ7q4eahm5T9KHyKiKdZgyL7Gm7g9iCstXpJRUA4hCkwPrCYPCss7hpXJuVkmjvnFD3FWXEZm8rE",
  "key24": "HKxCmqH2ooApgzbGRucb7xgpckFrYwoBLEy7SBVz2JPU4buVrY2SYWsCiRaKwebmuaKDSVVTMRxp1pMVk9WZU8p",
  "key25": "3KpXWMcpSrcaaYPxnCVCwTcAPcF7Bj1wTDo5LgJ1aWEJ2s66dSueotuS2Bpuu3E53n76C4S8UgNHjFod8rSzEAR4",
  "key26": "3uYCyeWgpnH4uP6gGQG25T7CXV8TBFf3dYqQiUaMMqApxqgmwWNehjhUqq1CxdfgfChqxML4vxAx9X5XZTjEE4cY",
  "key27": "4rJycRnu99SgRgTVUXLZd3xsTyec9FZ1kAoAm98wBw6d4M9Wu7CkKQBhV6E93t3cKeXzzeFTqf9e6xotuLWMRJiv",
  "key28": "6488fkpPE9ZbG58WShmLYxgBMAWUWSDWq7RqHVywHrSvksXw4XeLfdfKretSnzzh5UtHH3izTMSCUx2dSRxjK4mC",
  "key29": "4TSsTeuxBXhSiM1tkNe2Xw7TXRcHBwQPd5MK2v7ysvkWkA6fgyjCRDhgAPU7Ddpg851qexLeaDsdbPBgLomcsbi2",
  "key30": "56R85DKSYDURiL6gkTi2yeaxGS2ZhKZUNQwMEYAxEZFKwT3bjCWeEN3Gr8T6J3tpgA3EKgct6iFnSssiiihNoorv",
  "key31": "3tJr12YFAg61spYr2HmwWpj2iMHHA9VfaZeHgEspTuCuqYP76iqDyFppMAWXmDvHyBQWeBvcF4QAi5CTAjD59QnP",
  "key32": "2R7ty3xywMVcrGQxYqELVWn8AL4wd5ewKTpG1zRc5uxmPKvAuyvPDeJ3cTq9W4asyNBC1cdrZeYPcc4mDqqrCBAd",
  "key33": "2uaJ55KzLc3JjtE22Kd2aiATLUSWjS1vpTvfJCpvpVDtDqa81J41VZbiszcEwrMgiEs48e4xB1dKZ9xSkfHxxGme",
  "key34": "4koEw5SfRAbQbiFHeToaFwgaygZZbUrzfc12og1R7hFz18enWSqrMhynTJHLz8zZja92RdAQoYS2LGSz8oG6Fnq1",
  "key35": "5jMYhsz3mQxejdW1wzE7Z9ndopnJUxn1pKbKqiCyTSdJuk2SdMkPREaBvAkcrBr3QpB9uqCRJrmVtpyYa8VeYRz1",
  "key36": "UgZdmdBAaqWNinEguZTVxQe8D4f3Avf4fqabLzCwsYt3zg3YhCm9yNCdpSxpcYpjjnmAFw2eMYNnasvgSevTJVq",
  "key37": "51bv11DQAh4vvjkfEGKYd7rFsDZUBYthHKedkZEgkkia9fUDtykSEzSJAqt8mJKHZf6AGLou6deHu4rom5vmVyHh",
  "key38": "Ji6BaaqeK1BKmT6qeDcAegiDVmfCCNrxzghaRNpo9Zztse9QwGKZFgfE8bpx3pjyP4dWRk6KWr4eQKQMXNXP7pQ",
  "key39": "2J1zeesbgXpFoVGnxX5viCbMNsqdaB95eXEQiyRqMJgCAzCku7tM56RdqWGKLNqYjRpAeynwU87k5uxh5hzXvfft"
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
