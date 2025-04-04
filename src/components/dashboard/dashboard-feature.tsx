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
    "45yQKs2P9zuf8DA3xozAQz9YeANEAtg6CYxXRMu8Bx3jqpSKJWGQzRQ9ERuYRZ79RyEYBmBdnuVxCLyx36DhSLD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58xU91wgEauiuD1wQymkwgRVXUgaCrWvsibqH5GM6tT1c9Hamx9ZKrNXJ2FKfS1c4sA3661eMA3RqFxTtzd6hmym",
  "key1": "4ELAWS6bm6AP2VWuoEM9s4LnwFiWJ4puqULPGMumYWkcq8auV4kQzUDt5nRHwVX1d44JPgz9LkwfDHbChZmR3woz",
  "key2": "4QEyiW1KLMB14mWpCnkTfBz5kmm6niHZfGVx7STz6VHNRVicVBgUk8ZcWPfBnuqqZAgwy54bES8YnDjCpuHwFsCN",
  "key3": "4oDwNDaQxZ933sNG8q9FZsvwfQkDQhQ3QmDmTAozCdyYXrKZYnjDAXXfbRqoN8WntxXmro54E6ozCoiYT3ojCngK",
  "key4": "4hCeBNx5onYSYETMQHMGkM2EKLWvrivV5cMJKfvKkvXJ2imcKmErGAyo13rnHdTTbYgJETLDSAH4A1MQx26uiEWr",
  "key5": "3QDU3JHLzBw4ir81s9UkByAe7Uy5B6Kku2dd4pyrMjwiZFszJS4m1SXn3UF1cwDicRSxWMgHFiM1afAJyz9hW4gL",
  "key6": "5TXxYhFYuTBZ4txWSvhrwxyqgfUZS3F3BCxxMjdUvxW8fJp6U77m9Lo7NWFCvBjEgBup8cPxvzNEqkvBRYrYQUyn",
  "key7": "5m9tPC9pQNGub1ZzMJegmeWec5RQB5dQpjs4V7NJp7AaXjvXp8CiHPsgs7dzW1W6kW9nY2ryJj8KFqjohYkb1Yd1",
  "key8": "26D9MaHCR9c4RVqxR4KL9az6g3BKRd7MXFm8rktqAH2kcRpkjCmSwk7eZYwX28NJAASSMvYJEkrjbNtTXC11oouo",
  "key9": "fDQ4yyT1wxoRyxQdj7KsKbtgtxWRbyCG4hDH3fdffB1YuhY8ZhidQyAmYfpNuZ14gbiERy13RwkBcrasNjadJpC",
  "key10": "46CxFDHGZ9i5XUDND8gv7S4eYc2Dn6S9Gmis3nfSR7LRcqEyEyXGuTPELxg8tgec45s4F9obEm2WXRjaWBCVUvrA",
  "key11": "MQNxP8xLKNmG4bUecitkScyo5MsXGKTdG5V2EW3yJhqbywDMALS4WRNKeGqi2YeepwMugxpyXUEMxBdpPcZLj8s",
  "key12": "42n2f1fvu1EtBW75aeVZmjQ3KUvVrBRAK9hHa2fLzK1QPtmiPRpZvGtjrmxNN1KecowP9NkakfJJ6vfYTFRNeAUS",
  "key13": "4ra7qnM3rmwh7yGoLPFbvqQg4PkcRXeTrt2tsPJk75YUw5sgP76DfRYPZnFdax9QmXQqwAvdk6GZK2S9jCrTmpQR",
  "key14": "YzjhrCbCJuf9uRoUsKUmdDh3vSW6Teu9Eg5bYdmpX1KRMmh2d5miPkQt7i7sibXrunaMZfKKXY55JiL1FLvYC2z",
  "key15": "2XRsaQmDtrQKPjuDTxcSdnK7DyhQ3i3Jc7jEz3RibTgxq5P2T7GAeE1FQKLbwVasPFJea1XGF7rYbTHs7rSrPZ69",
  "key16": "4fGcQ46WMLm3Kb8xsSe5VWKiR9CmN7mQs3ELw3DzekQrQTTzRjhmVEd489gJvafBuqnzWUgai6rfYgcr11up1xKu",
  "key17": "4KivjNJUwa1Ps29mkesfxCDZhSzJCKzDotPc2zgNi4Z96ehDX6axijao8oSLPMmtctLpK5WePjRibkpt6p2rPWcP",
  "key18": "4kPAsTM9RESRGgZevZjaZ4amgEMGWfGZNFyTo1qPM9Tqhg8g8C5PpzG68zWQciAZNtNermNbqLNcKVnMSmxZdnfx",
  "key19": "46X2BSENFu1sCBn85z8Yx87baVMnSrwU5Q9zNRGNdXyFveH9c6jHdnssmkBxNCvdFq1XFHRu3VFs9UZgFigjdoHR",
  "key20": "51LoASCkogi84ZBL6TnGePChMfPKr6gixorC7g4gHUFfPhse2kmPdzLDGNzz6msjFRMduYcQA4Wa4MtpQczzWr4H",
  "key21": "27GH3koEyDRY4wk9xsLsM7VANyPwbQ7BdLQUdRX64MVoEvFghNkXtY7xzfPoRgfJ84UZRayB3Pp25V4d9mUVJqQq",
  "key22": "5NxtRfKaVz22vkJhpyqxsmsKakudu81ppaKgSrrVPfASsoNQpTcRataSPC1Ls8s4onsBsbjE7hcubkprLNj2YhwU",
  "key23": "4Ckcfw7qed9hBMwKnqN45qCnPFVMPJD6iHcCfyrS3QkRQXmyEenBCUGfu2JkeC31qs7uFcttiW8YH6zRZSbd6jhu",
  "key24": "4XtUg7GGAuRSXQcJxTCtGu6P9Er5x3Kf7J7nA8gZop9RpfnT2o6bv9Q5JyA75MQ5fZWyVDoB4kwXgbov9nqx691e",
  "key25": "5GXHoKnmSJ2M3P1MWuXXohNzUbVU8xQUWuuwi98J2ehakeP5hn1VH3J9P3qJKb2s6gy899QY7Wp4AyrUXwYohKf3",
  "key26": "5YULxdKXWGjoPhYJQDu4scDmeJTkEtgvjBvhZ7TvLAXBWaRNwbwb2tTAoev9cYtG3LqHDs5VfWk2iZfdvj5ssTK5",
  "key27": "3GjQ2HQzzowZq6ryfVUwt8ZLxGComJ3YZ8mQ2WcXCyHNy1nuaoedsG1GFZjKomVyq1HjsEniDUjFqew6Eot86w4c",
  "key28": "3i5UdcS45HEj8yP66uyqmy9KsPNcRJo8z2qgMAyhD6paTNXtTGCysuTuFoj6LxEbjuQ3CbZxgBjsefSCmZewkjAe",
  "key29": "4tSviEwETLkVqgxukojTHgiaUE8riNQvKv5GKA1UX9FVQgrfcLBi1F8kDPPGHnCdKk8RaTJTRyxUnExn37ZSfyfP",
  "key30": "3wqt8FF8FHdJ5fpzcLCjBQWPKjriwnD7JnKi6kR9qE7B58ihcV81bL8qU8SLsfbsMDGiLpQGSnKXWGZceLFAVYBD",
  "key31": "YSzLfipuGkb1PeznoFDtVAGZWgMMV8FmtjGSxDii2473cWqWaD1VHTSb6taKLsnbYy89pQpkxkDK8KyHRwvH95n",
  "key32": "2286EQv3dGxfchZ9LMRY1iSuYtDizzbfujaWgAkFHbpdR4TRCQU7oBLzsfzv8nyiuc29TZ9JcQXMNYuRrJp49yYT",
  "key33": "p4iGBfsWuX1wpWANtraehAKKSHerfyNsjBtnhCzwa8ZWpCkRp5XkCANac7cCFPjQXGDnQsrySFUHTZF2M1JeKTq",
  "key34": "2iPGPV6dRGZSR48DJu4UhLEgrcJ7LSBZCyLkpab58Xz8XhgQvLfi28uDY1Xqf5nJbXSzBUE4vuwe5ouhW1KM4ei",
  "key35": "3qUr1UvuVYHSgn1FbMqBGuoVu5x49Rz1K5zkcSkMmRCjw2Xtysp7cKgAzbTUtHnLRPgnx2FeCcfaxvi9T4jSGEsz",
  "key36": "5equ7HaqengJum7Z3zr7aX4YfRz3hEabbfZRpKcp98NFXd3kQtCEciDNAtacN9woakYqZD4TMfVkv7xmnPh3opLt",
  "key37": "3k4qtFMxxpMApzHM3jNvwXxSoyZesXcEDxrpuX7mampJarKkM75mWonrc3g8aRvxRgHnhdhxE5rtE2MA1Up74UiU",
  "key38": "K49i3F1uDqhkBwMivcB7Jve4ZFmxXao89o3Fwp9iVHmfMnzSRxfRH7JzzL76id8oqkuGHe1yzhgKteXrv61SMim",
  "key39": "2mA9otSoxKrz4UzzvFX7Wpq6dsGQyAhCKzYQP4aMuPVLnYGpBbvybqaJyoJPqcwTjpwzqLwe8wmepbnS472ZZYZQ",
  "key40": "4h5xyNXtyR6LRcwx1E8pN4JpdVD3UAbo2rcSon3pf7sRCDVzRe9mt7jfPG45BstdSRpbXKNDudWbVwgz7q9PXCM8",
  "key41": "2rpn1D8op59h27iRgnHNWaMhRjDsQPNJoreoaL1yVqyGXhagSBQLaaq2X3N8T3HtZGUvjA4LZFyLjMZzxRY8Nd83",
  "key42": "57GJBA8rG1vdpTwJeD2vBzkW7m6eJK1ABeseMt4rqZqZiWSpbxxpwcpt8y7ppbW8aP97fE7ZpRLQMSSzRSHBWhND"
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
