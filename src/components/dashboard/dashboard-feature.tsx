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
    "54Lx2n9jmn1SfSDgBDTW2MHvJTbRrwcysXGtzm35CcFKPDGhRTAZg5hDRZJwc8QkAa1kVVbdwudADzbQmAurjnsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WGhuPFrLFQyvYerQ3vgUQhSQLFkN9P8Eq3a3HqLYu1sujYjiS1MfN5ZCUt7TE6iAMsSBZ4yPKSWEZ9HC8XVuYw6",
  "key1": "5W1RezfoQ2NMAYygMYKzkMjt4g54rZyzda5SSAiFGUBnRWLHAirUgUSvrMX74u2Ws4UKMQqYVZ6ncbSsQYcQ1dzF",
  "key2": "67VPL8pdFEU6Gk6kiJkyEJNjnHakz6ByWguTJoL44YhUagvafWTgPnoLyW3ZASzwTmEtyWjqdg1jdoG3674X3Z6b",
  "key3": "5DfEU9PxuKGkZHWHhjDQcSWD4e2ENfjcNxNdYiFoqLjz27R5ct4dctBAi1JV3wiHZywU537CiWQrYnsr71nxvAXm",
  "key4": "4iNQEyLKtJ1oxgrnRKu5GnMjuW83cAemi9Q5wKGieZhzgQ1GKv8zV5sDt3o2myYoF9sF16YZBMCXc38BNVqfEc5A",
  "key5": "kNGpxyv6zV2p5q3PtzoZFfjKwEZW5fAbuFBuGCJLV7PTugaKNZrSFN1pN4Jftksf1dxcwoiQT8gwzmGVC1p3MdY",
  "key6": "444MwQNQbKi3mUgdDfSS9bLfdZoiRGnUcN3cUgYmXoZD3euuKojo7m8K9Fkf1Rskcd8HSAPXgy1a2gHhV8xz1B4e",
  "key7": "5kHSqkCXwoqwSEbG4igYeP426WvdaK5FApk6iQTSMCDmwoy2o1PQHKXG2CGBjHFYduVmKrzxFyYXga6GBR5FbK72",
  "key8": "33U4f5pMDNzZwWrfMKQox1bCcZFAmgZ2z1iQNjeXihNiLYxksyWCurwpk1y5oxyL4DVyeK8q1WtQKQRjL7ftQEmN",
  "key9": "oyJBSE9KJzCLrB8NoatmQob71quJAXVXBTKWhBWeveTdnX2e4JtAsCMG2iCM4jJFuiNRuYghSAxwR6E1c8ofPyf",
  "key10": "5PKUQk1XiaTe7Xgd5ngXxvegCYpp7RCYHpeES8xFs7KRP9wyY84bVu2ocV4wjpTEi1vXXNjMNSu5a1LPJtsT5uwr",
  "key11": "RwP7RH1Nx8wJZhRXgFGcVewYqiSnYJ14JfLCGT14WWhD9mQtNb3zihTcUbxxrKT5ddLZin7R4kwr3a5PeUqyoSY",
  "key12": "3CsAqbcAM4E21ZbkHT44944wYiLFncwbKQfQTbTxWi3d1Tr22cypYt2MXMCwYJAiCxbmFuF4yUBKptUxCCEHcmd3",
  "key13": "JEP6sh2JyjCohZVJP9rDdYAkWH39rUkmunk3zRPUcwR6QzsUzbjoHHLzRFKQFgwwjWTQdFcaEg4TLEHKDAqscjy",
  "key14": "5vPuAtA6neBoESuCVuUL4gh9bFymU7b9ksAwy8ZME7159a3mhUD9Z5BNTBh86C3dhRuJ2p5uxfbZVX9MQNwwhAFH",
  "key15": "3po5wbW7zyS589WY3BCdNvcPKW4CXmPwjBbgfAYSnHSyaHmQBvx1qecmRu3Prcu1c33Q3VXo19tukZR1vYmFHgQB",
  "key16": "2R4JFLgixnhgGQkWRAs3K9E3jMDHtNdbPNKhSZJ7bVvJe8wxYqF1m74rKaau53p5BpUBVVZ5KqJjGLjnwtyaDDy9",
  "key17": "4thEzzKbEk69kt98t9MypZ6k1Q2bpBv8zCcaPLpihg5wn3VZTmPX5TaXndBNpQKgVvJZEEFRC7kTnFVwpTr5HsYg",
  "key18": "zspxHdaXCJaX6Kvtaf1oQkkvckW6411MNzXA23UWDGHwLZvgUhQzjxVcKaN2t1B639ScBr9v6xEXeoBXx8uAquR",
  "key19": "2f6Zfbkugq5Gzbh1NkJ4HLuDFYdNzcSCgb8y7nFkV2ffdUD6PM3gg7XttsJaR3D3Sy9Gq1X9hZHSUpB6FFpxDgZw",
  "key20": "4ftHCAoLVZxggFxEMLvT8QCJLxofTUewpjTb9PR7nKreaEDjhN6HdSR9rqejqrwz8KcKmEg9fURcTuFGhvn6fz9h",
  "key21": "47CfQoKiyeRaH5rmCoM8KhKhKZVLfGX828KDfm76ZgABKTwrbCwzHPyUoW5xyo6hPf3Yu58oFCL9rXqURkKEPatz",
  "key22": "5eUiW6L6ZhiVV78eCttZanPC4Su47DqW84tWyb7b19wKg4zCHAynR5esbcd6ui2J9h4BxMhWxzeQswAWPiwJih4M",
  "key23": "32uXtSbR7qG4jjvcthE1wuscxVH3WKDA9B1ZFhiY1X3Km3N5SbKQjay2rHBsCwxCy7eeSX83GNAUj4ouPgwc1we",
  "key24": "5KsJvF45N59BssneuCRqiJMAMX3K5KhbQmr7QBDLPCYwjdu9yyPvreJ2fYmS3TkGHdG7dNzpnJXzVPFomkpWGGSD",
  "key25": "49sESoyvaUVwRZBh8oXpDgdifPScg2rbUwsVsEoWH1HYcSrTTKS2LCqVVbNkteQvZqttdMXmDYhWV5TwsuWAQpda",
  "key26": "4akuhVeutBkWyfjyZcTCXUv3iZcidaygwCDbTb3KoP7GhCnrJ6ez57pP1GsWynHWf6AUTyb7E66W2zsAPfeJy7v7",
  "key27": "2bdTqiiYNS4qQJuZNszfXQ1Puc1aof277w7tPDLmXqWqTGSjydB4qnAXbDzTY9FBKhEX8jueR4kxVhs1BdFCm8vp",
  "key28": "3hK38sseJgAn7QKSiNFMcpy3B7PPXdUMN8pY5YnRZkr9to6LJXY6Hkk5ka7FboG9m9M4DjJHFgY4xf4uB29C2Dej",
  "key29": "4LUwQnEvKQiYA1vzEBzmuTFvnYBURVQVW1HnEXgvEfGq7AgUa8FPe2Lt24c7G4WA9JvgBeH5CMzKPzR9BaiwVKKC",
  "key30": "5uL1JcHqEynvTSJuc5nu5CA333H2yt2cPrZWKstqhTciF26iFD7cjHQ6JR33qdFZxu867dufkzRk8vdFfp153xjN",
  "key31": "53akweAuidmuUoj51gEKXkg92EpPNUoWxF9pQ7f4d2N3Fb7wpbLz5DzAfeYqXqPWLhCz94pFMVh12WBfb8vp9sxr",
  "key32": "5n6KgVMJY1sbhW8subATPyzeNEviCee6Qng4nWMZuzc3Ckr4MwyjmAu6RxQKT9NL2Tm77EeFx9X9mERkCDKMhreG",
  "key33": "63g3LRkEBP9htHrRwtjfzPgtTU2xEeL5yr2E1VN4DR89G218biFKi1Q66fY574VDQqpDYKAQtR2kzNETt4FQbKwu",
  "key34": "39GxYyCm3pzN9ePYU1K6n8V8wVLzifaCEEV4KKTVxx5Jbehz8WsJcA8N91tYo5LrBq9FmbBEdDH9NbvEwTjmmRQj",
  "key35": "3nS1pgjHnut6QT3tw2NaJNfyVMzZgoUKtGgnzuSDpqeTxW2raPCFqg1t8tapqHhJHn991xms5X6uBMZ85Q6NkQiL",
  "key36": "16BKJEr7ULBS5CkFcD6mKdUD7SsuqogbizT1MCkH4oFqATy2wgASpcnw9h3c9dwim1bvRnqcB7gdYupSdTN8fmZ",
  "key37": "XqMoeVsVpXHnEcKmZRP8nbpV7UbAEz5juDyYx1jkQYipEYAuUJD5oJbAjHUzEquhRgTMbFGP3mD9LK6MMYs17zu",
  "key38": "wtGeNuK22wMTPMxXCdKhyBSqtKizhpuvmRh4enQK3yjZDEAx83FwfEHwfQAfysZubGVKQa756XwQtJzZeDnqMhD",
  "key39": "2VRqDd7WnUxctok7PogAXofnoeNR4UqPdTn2CkRtSYyFMu3fSCtif8JET9mhDHzu6FxfgfoSvAE7yAAWtpRi5Bmd",
  "key40": "yqqrPNALg5xc8nuyCAvJKZoTop2HHvy4FQYj2hJBBNNh374xZNmc9nAuNsKHGVMVWcNuRc6uw5arRqzoAnV5woq",
  "key41": "5XgStRAsYAh9z7yLqJmoPjU4VcMX39W9s2hWXPCUojnW9yHtM4zuQwnPnTZ7tww1j5gEghcFh8kwvcia8gPutQsN",
  "key42": "2qKEPtHgWpNyZtwFsgQYJknHYqXuvusCJF7MpBJBePoEtmitMJVgAv1RXXXVikumPSqEYV4ahMjVqGuoebkkQptk",
  "key43": "4Lq3s3Vt75xGfHtxhdWRbPGHPQGhFzWmmgjf6pww5MSqvA88jNLraY4BguBwkH8yVcB353U2yKg6hs1g118fMcff",
  "key44": "3XtBV45A9DKSotfzD4MGMkzTiusinu81HywW8p2N9894t3cLw1BTV5m3nkmtTtkwCmJWqALNPLouaRgnwW7dDmEw",
  "key45": "2mvRPLSbtrUHcbq4W8dw4XWeM8MZe71ZGwQmkKUZhd6mpWhghwpYWPyJ9FHLREHzAYFWEzfi2Q4NTHU24warYEeH",
  "key46": "4BN3PY4F5fi2Wea5hErMu6YuRhZFh3cUdjsU1sXqwL1vejHsn3yvcVQMntTDXXBG8Xp4YC4tFgyrdEF7dnumRg8S",
  "key47": "25QchMBqK7njxK2gLCkoxxJ2ab1Nkge5a2qf2JQcDxfWuBE1umazGZjuow3joPEF8UyTPXeg45TVDAoKEcGCcvGk",
  "key48": "4tbiHu9GPZfDbJnphUPzKxXUZuAbaRng8G9WuoLJWDsdBdqnbmZxCvh6qyTQcYxveXpDTLbsL3cZivEGVzP3aT3o"
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
