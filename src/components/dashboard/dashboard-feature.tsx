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
    "3qj4eJ7DaKkpwc5GNDwhjuqkKiQpxB6R9gx2aUMJKwLsb2NrVcptKsN6W49jurWufHbMtuKWV3aTvWxBf5kESCWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tjWXiURs5ehMN7y1T4itAHoQnmYTCdwULWwwZ5UkpfFsEQiAYBgG9UWb1e71tjrXYzcYVPB5t2mRKENqGe32JmD",
  "key1": "4WEBwNizsnnLwjDHjw81QgfsfFT2vCBbkodT8cJ8iY883P3rFqr239hAJpWGASpCGHk2rn6eAsCFBEVt7dxuM4hH",
  "key2": "2vxdut6xDtQ4eBFE2XGotUTNtGg8yyetek2MTAa7dbR2LXikbxkgq4AEAh4i3QRW7E117T6cG56uLVqsRe9DubXK",
  "key3": "212F7RV1GQoWZnSV2zF1SKgkcUUrKF9kWZduMYLoeWYRdWCB8AkrNmrruX7TZCbK976XkJ844EANrDtv81E6PwP3",
  "key4": "39TDYuv5ho5pgMuoofhm2q7EfTEaw1uEXsKLUgmax9mnUxxQg9w9BRmbEeJcNF3k68yR8Bujs3WsS95DGrZo9M7C",
  "key5": "kwmAmaJjbHhHn25kKwDbhGmYi5oRyDifuXBji7b6Rpm8aNhf5BF1QXXS6hjc1XzYdc4jZ8WQtKVKS9NgxBQrp3j",
  "key6": "4jE3jWECqQo6CPa9WiftYrKRibjcMUWXUN8Mj3qQYzs93ihrNohGqjyyBKQQBDTRaf4FtLkcN1GteZqW5BqC2oyu",
  "key7": "5pHFBUuhtLWJX16yoUWRo6nsnMPqGXtp6WQWymakwxdCNoARdbFYkK4WiGC84UxWvQsU5eLD3kLwq99UpVuVPh1W",
  "key8": "56Lh4fKqHyHDxYYt56XHQ5aLL1mUPqSevQG3nBsD7U58cWm2mdSNqfous98n4WZv7KMKXsfXVxBThxQHJx7qgrv9",
  "key9": "4yJMF1CbUpUT91Ur1GjrX7eKV9UZP63sc7Er4JfFXq2fEcb3yMxrm7LmHu7tyKke6Z3DWdA3VyRxmnACGUxGDm6k",
  "key10": "2LFY4qi2hfNCdHuH4a2ANJ6Q5hVCZw5vTcS2ryhV6VDFxJNp2X4jzGpaegc7nuyfGh7tnRmEQX3bMiSkCTVk1BT5",
  "key11": "49Nfv9rBbsfwyUfhykwTeXVsH1YCWKSSSN89FJrCxrpQkhZPXKfT3Zw1pnVAGTLGMUU9QiRWqvJSMib5U8WcoJph",
  "key12": "5Hvr5ZrCcLJXqcm4ri3o8mXFaUGBhY2ZwwBQ9qSjqUCKTpe3ZfCTzXkHCbr7awjB5KxpN21yPTjRzXNeaSc5cu9Q",
  "key13": "2zK5eKKnNsPxkEYEsamdMQfLoGgzfR6EhhBgTUFTLXCtjqomRqwBv9kDRsA7ZZr8i6wzWwv6QrP1z3wJf7Yt7uqU",
  "key14": "23WAAhx6EN3f2KrN3Ea6NHVpyx3PBdPomdScC77xSGtd8kgcDPrpwsz4jeBod5DpG6LWFqE4EL1Nae9CDogmoNJX",
  "key15": "gw8bjrh6xac94EuZdBDKoq7qMmiAgrCAjUwUjjheGXAzpZ9R7V5Rz1RpCzr9NAeTRvmvTHXjFn3MhG7xqSSmEtk",
  "key16": "5a2Hqm1hpu9Hs2s12MRq2Rn24mVemK7qTpdTWKeD1p5HZiMFs6XxPpdg8vNGm79tdR6uE8TWsQNc6iTvPAVharQp",
  "key17": "4ncVnbQYPTsFUHWLnH66SmX1UDnVRhppQxYRUVGi5hpJKKsRpWS5EsaYd1Yb1zLD1ZawY1nW7UPumKpqoH97gUd2",
  "key18": "uWzgHUVupdTNr7r2vze6529m2PWY3wGoBxT4uZfy83o5Vk9oFepNBRLu2Hv8AcJhT7TqDqjRUm5v7Zqiwy8yCHk",
  "key19": "4HVeuQXPfeu2wkqyq5iDymgrvtCiopNoHwuuB92N9WedXT9iUpJFBxp6dudRPotFopHSL8fAbei3Kt1jS7tvTLH5",
  "key20": "mmZQbaseFkrKNNodVWRMW3VGpJ8sDh1RkmpoYuvtB99qi1XuVwjgiK3fvJQQjmL5R1BR8WCApB4GP99nypNsdBf",
  "key21": "Pp3DmiWkLNws7XEr1ryo5and5g9pP2ETa7MtK3KzaPCgaA169RMZqT2J1YuDptLXHbarQ1LoFpDVYwLg98s732C",
  "key22": "5yUYarw2h2sEFQqS32uhsEz7tjQtNmM2iLGkHG3Dp1deXVwXsUQAtKezxmrQFXeCxPZ3LBHDoZQD32rtNuuww9ZW",
  "key23": "4caJbLYi8GMMrvEBszN793n4Pj1jKPJzZeE1i9XNRrq1Bb5uZVWmreXHHdjMN9W6NdmeLD1CCjC9degWCiJ6aMYM",
  "key24": "4jMwSVt9jBHViCRPwPefdMZpGYXKuPp8KyGuCH5ntsQXyGX3mgoy21N7fDKP2pECzRcLLNJ7DLrNBA1i36KKGrD7",
  "key25": "36S2pWBKaD3KDubcYpHgwG95zwRkthyStjgmGy5hrpSxUQaVkcu7d1xMP2ebKywp43ZiQsrMsQJehJkwv7skedgw",
  "key26": "5igw346fqsCYF4yyGJiZ4xaFzucGLdxMT3P8762FeBw1hYvscsmTmrFZAgcccufqHPGp36piT3upnehUiXusfD66",
  "key27": "wsw5Pm1Y4kaBTVYBNRc4UtKuxYT31gFbtGZG11BLQCZNoFNChNW6E6NYWf6HUSqFkPYveP7BEu6o22Z81xtvVJG",
  "key28": "zBb5qw4Vkj7i9oUqCnfM5LkpMgSb3Kh7KeCgidyRQ7GJJDf2cWPoGX7hon2XtT5dEADXPd4mRU3i3KAcVMqvGTM",
  "key29": "3rLSFkmj8a52pqMBUTPXwCGCt1GrT2BPbFiV3JAfqKSLsUXKDf9TwdcAoVwAjJvQKcKReiei5QSug5zvuYVFqrSe",
  "key30": "2CaVnDUqB3ZaU8GwoRrmbH4CZ9VxRyxuvYY7jbfqJjyWv8SgqpW2Z5hu5B69vcb1KjYTiAyg8Cf98P4HbxQusvH4",
  "key31": "5E1XptT2dakcwMiYVAhMypciCd3SDWnK4wzp3EvkYAcgBtLQSwP2F3pYi52U994SqCeGpQd8MVs6fFSsQ6bJjYxs",
  "key32": "49LdC53oFu1omp7DGdLWJXEcURTRUmhp5VnrorgTLifKFQJkcukxrYr1WhRm8xM1TUTdt59nM2ThwQSb9FivUGBy",
  "key33": "47agcWqu4angEPF61yvP189pwpEXG1PpDWn5KNku2zX5a2EFkXt2VhBjud4z4QtiCDEkfrtBLbtethwvrcn7wHMn",
  "key34": "5ribUNBjp7DBV5ExLoYjqw2mG2ArCGPnJwEHqP8WKmQVYHGSuWVgaioiv1UF1aG2m9raBQN6sMbTgPknXdzqv1s",
  "key35": "3HF2Z583SEJzWrKPvj7uuC9kKh3jwhE5J7HtBTJBxg3UatzcKPSpAYx4nKGAnGHpBdezbwewZrhNjpBzKLMR5oxE",
  "key36": "3Zrr8xYX8efG6vB7TnDDJErrWqjqSsLHhJEuyUwFgECBZkwJiir2P5Yw6KBuoFRVqeVGHvFfUMods3QL2rouzvN5",
  "key37": "52mTqNRwegamR86V4SUUTiDTUgW87eLKAqGd7M4f1To9GBWmmsJGoXo2bqXRTfBo4yN7Ad2BY92d7uD249DL8Bfy",
  "key38": "2gX72KWrkqFWxRWBo5uY6bjhe33M6RfHa98ruRtvDfvedwbYVLsoFAb8MQqs8iS9vajzfUR41uQsbT9ksaVYUGty",
  "key39": "53XKJW25WdQWLu3ZioPoFj4boc49j5w7pchmDZFaAhXkFkb5QWzijaRSPHT6UEjw2Ny4xmHiKCC2JuwqXJwet8GH",
  "key40": "4eyHZ9gyjgwWChMMxPbPJvsZwusPQQJg71eCDxFHs1yh8gfdh4aaGCQDRnqcmJvAfzfQvZXfs7aEwpf4de2e5jFF"
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
