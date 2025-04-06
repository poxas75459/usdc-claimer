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
    "5oG2bFrUGd8TLszA6BihcDu5FRkJnprj3nJwtWShcvYagucf3zneSfiWEKkDGSuFHfJbAtLKZpNgqvzeMcaxXMJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wc53RdcMqo9JhgVoeKEin3CHHoGqANPFN4e9M1SEXsYQHFNGArW4ff55uzJqSXiejd6f4oRGZmC9Zqi1CdPSJpG",
  "key1": "2EpNbyEE43MHPXNmG7DBeccY7Z84R1XvgPXR7PTkGgDtZBG1cjsdEyA3LnuqZr3wKPfde9XiyBw8wrz9PB8pJ7Ny",
  "key2": "3CQwHKu9v6J6y4BNoRXHucNCxxcpsxmPgf9KfdWgzJtYu6NZVEv2EwiNLqPmbRU13h3ZHhAz15zijjoAD4DN7LMy",
  "key3": "36untGbTPCM2N35WJSVK2F83RpXUDG4KyQcvQmnh4X29njL27rGFZK3pMrbx4L9XvnoiPYMJzvb8xgBQByHBCxRg",
  "key4": "5Xh5jmS4S26NdAWAfH2M21j1HKwhMaQPL8JBuQQsKcL3i6A4T6iccZtzg2ERkz8eQoiY2AsiUKxvNz6AZzVkVqd2",
  "key5": "5SqYoQz6R1fDuhCyMR6135cUeJXVZk1C829QKMTH2ea5wz4s5wwZWH3JM2KCJZmNMJJC9SZGP6hfS7SZo9FWnagd",
  "key6": "5dac5GeLLWhLDtuXRDXJEmGKqrtJoCbGKbr3jP74Eu1Y7Q9dxG9XhntpnjWaytP3Vf7sM3LPbUT3Y3TonnzSrZNU",
  "key7": "5UdFbBiGRauEQuDKvgu2kyEkBsZoWAacZjT14UMuA1GezbYya9z9smVaknb3KUaPrjYpBLLtPYjEfb3TgbFa8FYv",
  "key8": "5B3MJW4iJaYcox9bWzhMzor7CSbU4iscBpRDo378R86jxzHi3PydBZZymTZXP41f4inHucqPLSBiv41f1vem7G5k",
  "key9": "2KJk4bMi2B9xxApofvgc6Dh5w3fFa2GwxJnj2jbByhSQ3TbWGsrRPE3xgw5fdN6j1xxrgh1okNd8nf6h7NFSLd5M",
  "key10": "4jcTk9RamkDCK99ivode9w27VqQesJfqxRBTdNuqmkXhDRRzBiFpsErv2PMmVZW2qCevjA7ZTZLzWQ1Pxtx2HUwQ",
  "key11": "4nnyrGP5dpmiKJo6SSMZGvibqkYHmkmZ3aMEWh5HSkE4hYHr4jBy2mPzbkY4xS924AP6emKmtb6TvAcxBoxn3P8u",
  "key12": "3arytuih89SpBT8xWayJK8McyXcS1KdeJz37i1fK3HpJBNwK4RabXAzvwbjRfv9VyYvSZyv2RrqU2Dh2FNk1qjG9",
  "key13": "3B6QEsUKPRPEnNyh3ZPoJXSDrMhijDyBYmjUbpYcdoR8Q7Ypc7RNimiq86u7wkn6Koc3pWs7asqJVvYwXm4ssg1W",
  "key14": "59dXJrFzXneaPfZycyWHCdMpv4YmKm7W7RZ6xC2r2DQp78DAfD15fNkFXPZMZjw9GNmjQuvSGFwDRKodNoaxJWAB",
  "key15": "pWaHf6Gw4hCX5DpCZVsVxpbQqJQHpWaR1yAQz8keChwUN1TLJmwarLjHzqo8X5cd2nFGidH4spwWdmwcGScAUEU",
  "key16": "5WRJjBnfuk89U7JLDaWgtF1qy7NERTMjj4Mo2TJysPnn7611sBzkWYcx7g8cxWkpGHXWMwbyuomxw2RmvUMYu3wj",
  "key17": "3jfY3ipyegFKQQhNJ2A8p7xo3SucXaFuequ1kjdS7g3cbHnoPuaT6YGCwBrSZo6CDjt3gT2XoBMmrmdsmYh9P2bP",
  "key18": "4xySYVfh7HCitDk2Nz4SeckqqctGprGYy1vHdygAKgdAHpFawdEE6rMy84YvUsMCUyj1hgvxgFcs6uczF9irzwox",
  "key19": "5eXJ6CCJioWDf8zLhcLy3ue3XW5q6gi7DUdfaGucdxgRasVLoFzd2AkESs5FyEuWNbYBf1nf21YqKN4x7kXmmkhE",
  "key20": "3YJBmQbpvnHD5ZjhGE3pkXAEbvaFS5MzrT5NEHQiov5o7wdSys9YjXLUiMwC2ppY3xhhA2mYfVHFfTMFrprnxNQA",
  "key21": "5zqkAk2qgGrpiKz51oifoBfYEZSRYx1mQxRzS3zFKAUDtD2LtuqTzBHxS9z61grv83doLF8aJTp3Qg8UVCFF1i7f",
  "key22": "5nYsNoRcdmCbCTciu65CYA2N8pPE9BAbndJvzVZpS48dTzn42dUtywqCNJ8ztGdsMN9cPhbbz2crMZsTvcdXVzeF",
  "key23": "3QWdhhWz2M4bvdYd9h2BNdnw7PfJZbhRE3ojTVMMKhMbcSSQF6T7scsKYCKhqfoXRycZBNJ9DbVhRqWHakZo3gPD",
  "key24": "2uYGneiRDgTQmb4N2T9nJEtBWsYCk1sbdCZaShNa7xAqgkr4HupfuPEsT3qs9EFUgQCyMC5hCazuwziaGB56maAw",
  "key25": "4U1UFWJyTeN75s6Gx7ygGqsRaL6DJehT92kvTEn4HoFNLucZTd6pH2hFoEGzQs9XWebZb1i7mP2jfztYwGXE4Dab",
  "key26": "jt6dvNGLHWiitV9wfNgCdTWqvL47wxQmH2NP3yTVtioxVKEUr9iXr7mvbdUgTstJzYRr1q24sreS5iWiRPkB3AY",
  "key27": "2mGt8Ku2CaBFiR6Cbo8vtcXuMNJ4fFpMnarxRDwFgewH5rv4GT1rj3pXxGqgkocZbKX4mWQk1DkPQvvTfawYDu2p",
  "key28": "5d6JYmoPVTkjeYrs7ZpCyvvtnSvNrxbtSNeEEW4TEbyHWCAQbg31czkUexYoNLLkexU9dGSNr9Yy8eYL9fHxrp5q",
  "key29": "2fjJVFyXFBcBA4avTvsETivwHi3sfeyS4nv5AQSAhwxKpFN2v7LhN4Lfb8yz72WDJ8uoU5TyzyHnLMqrJzwaFPRD",
  "key30": "YjzZ6ssxMMjdZEYmMfxTmUrqcWstomRHa3S5bcQTkWkW5u9wcUqkHesqVCg8y1PypqJWtN8MmYJHwdV7ti3MWTx",
  "key31": "2GovMLnvopUFHaLeB5Vc1KoKh2MmWHaxC92UtHTVAt1ejxP57NYuyz4wh6eMgybs8XNm8wsaCyNUQoDbV55yitte",
  "key32": "34nzbC9JvhufYsDnhKSnPkvjDyBg6tTLDVtK9xitEBENxRTPUKNu7EWKTxX1v5om1LQ1UYWPxCkp7etvdovezY2C",
  "key33": "4eqpddRTixEhuHr1v8rXnXH5V9w6fqvAD4tBMqPhFBMTS4NGnXkj78g3iVmXeqAZFURMqKHQDiA6ShmBTtgUSfVb",
  "key34": "4XM6Df9KuH7MPapfBcqo8eKZnGtNcmsmK6pXCJcBsK7h1892H5MCgtLgCEkKtYgoho8r6A1or56PbDyrahtp1EG5",
  "key35": "372EHNVwrM4qWoCPqJ9Y67Uo5A1Ps4b5fLbTqBi6aXkj3at2nE48NPLNCihqmSgBB1idrYcvrwpuN3hJu2AkyDWn",
  "key36": "238ExfLThnCv2L5uS6LFX41iacWeVx3RaYPSYVg2WbNLCoXYfnqkzF5gaXYxAGLbEkf6upV8J5rLtA8e2aEYATKD",
  "key37": "2m6LeEQzsnj8u6793NrgeuVre4H8QnhWq5o1B6GhTNfeh4TD365m3ctGnJoCNVkZkRdaSgAgtxmuiorzE97RS6Ws"
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
