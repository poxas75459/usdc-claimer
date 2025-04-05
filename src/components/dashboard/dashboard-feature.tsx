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
    "5LqWm9ftFgXuTKGazNuoLHvwkNdLgdRgZRpP1nZzfj7jNQ8BTpGFuDBPbmNrVH6fzKH8N7eudParqwBWLEksZfW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VDNuud3gzxvkPmZUKijS7D6jsc7Y49ga7Ldio57GER1XCTiYUsmXwjqebYTEWEAYWCQUeXFdDE4RnBPHG4RguAu",
  "key1": "4Vuy72iDjPNbaFF71o1KFCHEu49U1YKiJmNSTwEdUDYh1WWN5VBuNQdCbms8cKjeEd5x4qNyzQFdehAuRiqm1U3U",
  "key2": "5Aiys4MR4BrG3GwiCDvN9cwSJMNxokbgtdAvj8ZSZJxw4cfAFre1hrVEAPq7W7wnG89zYjTqcS9ch8rkViCbD5WE",
  "key3": "4W23PAEdRxZVwgqbCk8pmqNW4Zph7coMrdfbKK6YxonuXJatVxwh1vuVUWGW8sRrncH2TDzS65689YxovtLrs4WK",
  "key4": "V8wA74ZbxDAgFGfzXxN3x6G2A6HeLP5n84gNi7Z5i2awMcEYjpYkqYJyoZsjgn4s56hyydh1Ma7Ya5PRcVMzFpQ",
  "key5": "5TJjajymLFNsKL3TCfJ7fBgrRXJFg76gzAnZpZPwJmvgyvavWX9Qjm4w5BiGEJ1dnEWjjHdRNbTCoC3TCTiKfPyc",
  "key6": "34jR7ymHqWNVfLMfRq6LYUfuWo139YxDFM2NqnzFeNn4xxrgpjtynn2aPn8YgbtaiA9TzYjCszZ77C8vR31bgRfE",
  "key7": "3xZBtaGs8GzUf5cm1yVeguJWistyjYmhD1cfEaXaCSpMJM8b5Czyo6aNwgxdf1XmV3FeWq5VvpQfrY9g3ndFadRu",
  "key8": "3sW36nNP1QzGF972MoBGZYX1vx5MQK73Qh5XBH9ovqvXUfe7MVRgcV6v9DikZ6EQaisRFvbfDJCrYMUXDjn3qijx",
  "key9": "5UNvjgvYFD9wXACpKM5S4BoiQb9cDh5pWQJedcn9fHJMZsUUctRrTuY2DeY34hiXozcD3jn1dC3kWkif3QeMFseG",
  "key10": "5A8ejnyfsRMWPnyJys3VGZjw6RkVDcHhQrMozdE7kGjgsK2tyzi1UtYbxXxMhtJ6Tz5DGvHJWU5CnJTBFYFNSsco",
  "key11": "2q9hU8UxRUcXYJcGn6YmiRob8AoMpMdYHu1kwfCYK6W6igRzGADnjq7wmcrrpENSQg7qDsrtN3mTq5CK4yskYVXw",
  "key12": "AC5WsmWwd39C1ccd35PXXQsX657qs4TPnKPoEZhaGi3sfWUcB5JDFyLFQZnSKBkT5gWzvCaq2AMdknmKydaUMGG",
  "key13": "2PA8dxKYLCMVvrpyvurUQxzjkKixeffUTnfBW8W9VCThn2bVaDfu8QEE4MEav5TjjqqKZWmV2stCZx1LkT77hVXW",
  "key14": "58aM4P4uXg5yWK8jJzxeVCRfit2Re3Wv762aU8tSzN827AfqhDq3AnS5veaQUGd9T8dzPa81i61j84zv9aKjx1LH",
  "key15": "4HD9HF61WaNffKkVZxMwY8aHf67mM9ur5qZx184uxm9Jqi29MLpjaKCWCJfET1JsjU5MxbSx7CuYAdNHkkriTbRn",
  "key16": "YDXej3HBSfWeySBE2AnY7F9E3YN6Z3R4uTKZnC9DqkJLEAeuUSFgrcXSAyLSdAhsj8zutD843U8Gc93nc3fwwej",
  "key17": "54ePwCoEm1xG4mLYpLaaYoAvkVN6Hs7U2YXw3vNNSVZAYSP8UGTqjuNnxpxCnwHvQLNebzsCCFXqjKx4zehgACsA",
  "key18": "NMtAriwccK3y15oQ8JAUcwQ7Sn3Lf8nhhfXWKBfYzHNy9c65CHd9FzXgzst2vwDSCzgHRtqJrcUah44iuWgzagN",
  "key19": "2JdtKEzZZ5FQjvJbnE9D4hcYKnkhQxAs9iURU2HsaQ1hGgThyazPRdduqvr2m2uAitWXJN1N3e6zufMAYvJstJSy",
  "key20": "sZ1g3EJLRzBAKijoCqPL28FF9QnJHXAN4aiQKxaAAr4CkQ7QETiH2QdP3WTvTtKrXsUu6Sk86ddWEqMpyVpbFux",
  "key21": "55aH3UXyE9pvL5jue3HpbJWvqRbvcEjNNYBdCpqoGb1EYVSw7Tsq4LTKyxhupwLeTVw4dAJrnuWQJNhTF5vdLimX",
  "key22": "2uqXAXay5faqr6Dj3bAQJ5a1Peyp86kk5fQNyKwVpwrFH7bo7hLXvmGWj6fFrafEvCB1YTfFWktfAX5LgzcozyRY",
  "key23": "4DHCGfCrtCmSNLMBFhq879kmLhkqG3bxXk22BE1KSgnuNwpWYEXW3dQHHv2T96oqAFkou5LYgjsBtu82SHCuURrK",
  "key24": "57RMAJ2vexYVK4RgPffu5kMsBW36LzjApULnT7BJWCcaXs3i9kjFiYH7st9n6xSLAMEda8poGZra9wzSbxNq3iua",
  "key25": "UoRSdsxZQ1ez52gxtv9AqtvogXvid8HZCBiRXWb9jBR3WiV95JFZV8HZZj1ahPWvG1gwPWv9T7zmPoDesgYYg5Q",
  "key26": "3cQYjYRcNTmRVUNQay98D97wjPeGvFts83Rzye9KdbpAKdAWnXg5JrFLh9J8BZRcKpTxd6bHp5fDgqhGq1zBh4sz",
  "key27": "3az2pjBbwK8FE9pkY1ju4syyKqqE4YSF13WziD2ayM25LH6aUufy2WRQ6hBAW3hwVjkmxbaKF7sSN8nu5sNT5X8X",
  "key28": "gDHaX13SrdtyVqSXyk16CdCEQpRbZP9nbwRL9Yt9PNTY2bMo7wWo7DZwiqcpZmsbmdURo5aJ7bV5u1wLcPMGzh7",
  "key29": "5bnu8pCruvokgeL6fRLLwcMtfFnPqDTKNpsWBg1BrpoQeFu1bJYFcBe138U6Z1qMEYDk5n3xEEBY5QZTXhRApzGE",
  "key30": "2b2VQybvnhvh8bZkWkhWwTxJSrxVMav9N63r9Z2AwjvG5WbmnbGTzRt3tiwBuiRi8gxi8MjofwwSpVNXQFmy9gvU",
  "key31": "2ht4grxFaXxAjkgt6mTno4g2YKSZhcwvKWNbWYqNnaGejD1bXBozjwXRr877NkCgRt5xGJ3KbQJUq63qkmhwrJmk",
  "key32": "3HwUc1MFkF9YEHZQ6dxCREsikPrCKNMGgAxp1sYWwS918BsPaKt9m6HVUjDmgcB7mgv77fa7u8CFE4DCbfRWsXw3",
  "key33": "5VQVZRG2PiyQehsfneRY5aU6XMmL6F9rnqjh5wuqgkbEMjH97Nf37qqjT46HNgs8ummLWQ1hGYC3EXWMaPvP9diQ",
  "key34": "38HeW8eivVyNyD84pfoxzDrYamgSxAR1LChRSbAnomJv488hhTavn2dXRVcGq8iQrPsWZgvWdX2HCRyy13t2Z9Lr",
  "key35": "622krcMp2WH7chYekqYtJowDjd1bHEwkoPLKZqagtBgdtUdZTHwwCGf2hVGqeyhPHZ5FMXVSF5tZ9UND7QdxFwAL",
  "key36": "2fs9PW2VySDeXw8w1obBwkWXPhJHPn6phLe6paAuhDLsNTQBfX4H8nGkTRvgE6deoyPE9XDhNbiSbzdJ6VH6Medh",
  "key37": "5udoT7zmQ6gXeFCEbKuFtZsKvEqP6MW6DghAdAejBSeA48mj3T48q375TvyvYtjo9EzKHRanqPcanUe4WEj5hbM4",
  "key38": "4k3XkRhyqu49Aa69THGvBFL5mdN6MnNhhZTy4k2Cno6rQ5cork3mH8PrrP7qgyBxRvBLJxtVWN75WaHtAUjiApnq",
  "key39": "2i89r6FmV52iPavB7F61F1dBP8fHz6H8CFKTaC3aqBM8FX46q3m693HgNwtoZaTeFjAWKQKuEgfhMbDpo3qhy7F7",
  "key40": "4qn3HMkPaxDDJ2R2QukG92QDBVmGirKWPeTjisbtZJhCCpBpwUirsekvNDwNUF33EKAGdJ7PxhvynD587CtSSmXr",
  "key41": "Ribk5i7T3mbon2CAvYiFgFvFZxNU3Ty12k7UKAymjQGPe3d1dBpbGSmUjjTHa1azTcDB8yhDnzWXwUbfEkNEb9s",
  "key42": "3izHgSdHYu5zjkz4ZYM79BGroTBavECKo1GbTLLsYCmu9nsmy3ywF29ZPELDcEcrHaH4vrp7HKugRatTmNr7Zrxg",
  "key43": "4CGfb7QeJLUoR35tTLd53bRnoREQzuV7GbRiLzndYS1EKpA8XsRBEpqpp5QGAfJAkebm3nPhpCnXnSEynxs2hHio"
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
