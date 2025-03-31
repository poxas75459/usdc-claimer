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
    "4xUN353sCRT45RpBQVFZ7HEdaBpCgkaHbAZgixW34uMcEzjzk7bgE9K4fFvcCz3zHbwaH8kSH1fti3WBMnW1hLeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WfkNxGPMZ4GNcJyci45qCcWuzoT2o3BHb3pyVjjrQwPyzAv4nPUbj6FAbmPmSLsndo3YbtJENJUtfSgenfLxQzq",
  "key1": "2ktuRYUcoJS1MYCW3T8aUwF6nPeMZEQXdo7kRk2Enb35aG21nFh7qpTfPp5e2JkGZVnJ9jTgxhx43MYhQfhPUgmc",
  "key2": "4WnsU9kkAmhTJxqWapRjnWXKWNawciFYwU5iQj9TKYTa6FgVKcQ1EfJupGydMgJRQZLCninvapG2QURbVJEV6aSc",
  "key3": "2LaCGKdq2s2bAMQpC2f2xTydrfMWQNSBnpPd7QR4eYgyEscDAFAzyhWEYnz7RVJHPkf1aw4eNu7JADP4u27WEsRw",
  "key4": "2Hjktk7eSs8fmUEnjkPZXZPZ8E1SdG9bBHFEscdFNrRKASEn1HBAPmd13ZuhuQUV2z6Zymn3aQsDMKLS6TyFwJ8J",
  "key5": "2tgm9UARn7TwjAisEhpaaEC5PvojBUA3wxEUKXtHSUGn9L2nEq2bFcjf3RwGTJZAqTjSQeAPbiDPvT8qk3CDyHXY",
  "key6": "bPZpjPhocA7QbWuuiXaLuiZPiXrWmswtJz4NY57i8rynaZU6A5eXipJTuRimuqfdtjkpguhJTFmHr6ViRuwueSU",
  "key7": "h6BW6NdP3SM75f4fCJiQfss4SpkJKUJ5kxrGtLC5SZQdC8hTS8vtYBZS2AYhpma14pLDibjPJoW5P1BsCSgm87R",
  "key8": "vC8mFgDysrH53xHSpvrdmmcFeAdCRxfQAXM833zx95cjZUo1u1HgMGBYUqhDHY8w1wzZNQ27PVtFzeUCtvSQvqk",
  "key9": "3aMhasEwfabLJmkXxRzDymRQ5GPFfSW75inZ7WjnkEsbpLjbaLTYKJ2jUDrhT3poNts5Pcc6bDmPAJZvu3hvJcyv",
  "key10": "5BbWb6JVYAf5Fte7XwZfrbqzNTbBX16KMxsKXm2PGgTjwrdXiCaCxeWqUgVTLHkvRzB2X4yYs6gz97KRix3Pr3jG",
  "key11": "53yV3wwmZG87zNGSw6rJsnh5N3gZLp4XHzb43bAJPC2493gHH1AfLqAyXmbJhT5ggYZmdYkXGVwAS6bF8gZFWqvv",
  "key12": "5LxjDLrMB2AAmVSy9ri5esMbuE69JBvZYumkRr4YcHwXpM4nUSAA1vc7vQLEsh2To2b6ixNniUcyWdnToP1cdkq5",
  "key13": "3TcP8MzJ8mN6FQDNAmt23fvi3Jo2kPouVqtkrhCTMzZoQfLK95xaxZaA7AuZd2tNQUVngkqQCxxeNjuKfA7NhzNM",
  "key14": "5fYvZ4NoCHZmHNgTu3BnSeRG6izWi77GouucMvBhiopyANBFLrjpxsrDScvcnoLC5tZvnLfatvBj1tzVdwnTCAGS",
  "key15": "2ZY6rfou3fagRN3YttuqAww4LFfeYiPNNFf4gob7M3hgTf6oY1R3MwmLA9hYXfLjqaDRRHqKcFMgA1i4WKgE7ZHg",
  "key16": "383gghHZpwd8Xr8WCGNUUGBp1uAPnkPgmg6XvhFyYcRHtZehJt8VKdJQLz7FxJABWUVYtPhbFQk3eLic2n4phrse",
  "key17": "5u11mkrsiuTKPvQysV62EWgX6itqCHFvaFAJD5Vs7JpKPSv1ZKcrrUf4juRuP58MyU9xxBxFUA5cP7nz9hDt53z8",
  "key18": "4Vy3AJxPUN93uuxqqemC6tChxAQ7wh46UwgLCidPw7YwNCvyfowMp2vbtdgBRa2sVbuqXFEqkEr2J5MyRJvX7V6W",
  "key19": "3af5grDt9mbQZ978jFVtrUbuhsNQ1S7k1QQr5dpRsnJNtyEMx5WnwLnevLJifj5tQjtjFpBWAxK7DCXfyKd3R79y",
  "key20": "2YogeLNPWeRCT4yXCMc33FWpG3ui9bm6RP7ahbmisNUP2Z8q3JgxBzYN4iE8u2baVYVdnykf8mzyYc9cXt4SyeVx",
  "key21": "5Q39UihQE1ST7cVBVSjR85MQyHE2MdnvA1guBTw6DvzJ6AVibgbswVYWXqEoEK2p3pszkWVLFQPWuhMvPjfpvnnL",
  "key22": "3ryzG7rXUp274dydm8BPDdak8hN7qNFgC4zHCorYA224TkMbhXU5qpcFHJ3zJxzUmYiSihmEaL7Bgra6a2P5t6Z3",
  "key23": "4Vs76Bzv5WBF7tnwgvQBSJGGDEvzByuhYmjB9JYMj9LQ7KzvQEoQvTruH2PnoiA4EqXRYNMLuGPh4SM2nB79XQe1",
  "key24": "RXu9U8VGghMBoEskAbsgePWmz9Jy9J1gCweGbiHUNkghZM55CcR3HYnzPJ9kKFPM22W9cp1LdTx2HRXiJXxWr9H",
  "key25": "64XtNeHSet8g7snrsHgJJSUeRAGrEZSCfwiwRchaGFMPy6XLDBwqsUotSWHGAE1XdvmEvQXdefFP8Z1cesLVHpkn",
  "key26": "4Fs4ptXiJQtfGzeCoAB8PYE1jprSFt3UkEy7JcWY4NB1sTHrtJdPKkWye2uUjxpZUGteEj8ugRZSSHvmYpr7hxWn",
  "key27": "2VhPSnjqqY8GRarnaX7qENT6jqyz8boAB6zPvEXvcmB9qQefPQTcp8bB22kkWgugVJXQXK33xGmz5KoZ8cToQWu1",
  "key28": "5VGjdvBzJiD6HRnEXSVhnBmNfgsp1NzHj491UTYUw3BgxaxMwA79RBZHKpW58rAi5TTt7FPvDLAHRwHPiXK4oLEc",
  "key29": "4B4xQyqiLG4rQFPGfiD6dh3fLfZUGZ6TfMPyQfNCnjKo5j7589jwoZhyuZ6yWNGdangrxYiTu2eyufBrK11kTaDZ",
  "key30": "4Lq2mNLJA4Nk9pBfysyMh8AUZdZbu3vqRD2pu6wKLjnLQWiacSQ51UbDruhKACY8VdAwJbqRBj4ihyFd3GVGjDi6",
  "key31": "2gVc59gQiFRPgDKSs5QCxVSAihntNQ722dnivQMQyxNJnJoJzvnMcHWyfjHPBaYoiat7Y93WZyVWNLEXcJsNFTpi",
  "key32": "3nmtEdqkvy4SKL1XfNfveWJtE7j42w6aDwQwmPzHM4vXMZ8Y94F1QhMpRyxh9mtfZavXrfjZaZBsaXG9gamrGZ4i",
  "key33": "3L225MSbaUdLDx26B7UwCuRDqFQttG8q7UwgU6Jv9Nf67KxyAyTZzmQKrnsmrn1J8sL2xbDDZoUPi2ghDzRnXz4C",
  "key34": "csPqqYhGsfgUu39FTUAQniLWGbAacf4K1rB7sQUJNxjCbg5qRMTMtasmYZGAHXQBzNAdcFFno8peQUmSuKZF2QT",
  "key35": "3ixLyFV88kQcYzDJ2SM9U3VpdYUmLzdEEM3YK3i4jbPZcWYVsHDPhEsThe9uuQmff5M19tM2ofcuUfawzRxCapNb",
  "key36": "opThopWqtWvyptQ6pLN3kAFeRnz2QaWBDto65DfjuLDDahoSWW2GKvURUHSc8RdYipXNNuTrm2gjJQdVxYe56mR",
  "key37": "4Woy4MV1f4GXDj2Ab2hX1HckmZvKL4a9QyWGETWjHUqQXWs5NBLAcHfbE3SKh7wrrA2FFEKUJnt7TKwU9GryhAQ7",
  "key38": "3M6gcjuTxAbwQbUqqFGYu4eoH2ZDmujfMFosToU3AkX3CHPbWm2W6NTSVVPg5pkq2uypBDXpadDJ9oGzQUZKBSHR",
  "key39": "r28Zm9cTZbRtbWjrYzFoVWuZpGDT94JJE82i15ftqHc2m5FdfXaaFvPPV13MVL5D66SpAGLf9fbv82HkP5Epixt",
  "key40": "26UzeXCcuehCT3jMwo5KM57AVeDGpztRxfxHmK1M99zLF4V3MrXFBa3Y3THrJAWbEPTu4TCbg3PsibbcS9MFarzC",
  "key41": "5aCx6XyghfDzNEdvLEczJQbqjscn3NewtcE1468hNwRdbkwESUobi8NT7Dr75XAyczAfYTFyUNgb2s9rhd5XUHJH"
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
