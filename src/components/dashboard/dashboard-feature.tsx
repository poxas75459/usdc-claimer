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
    "39aw7c5U4c5bMfbCnYVakzz6uepixx3UETNGZrYVb4nsL168emufhr7QBAgb6qMdNbkLxDn8DcGfaMhVVewWiRuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fd4KCs2rqtkANLRQPuPuitnvP3P6NgEu5dXpotomNfYmh7WUgaTeFuGqEV1q3CiaPprUeae2kxWJPSatyXF7GB5",
  "key1": "3efEq2dQ8sZ4TNrN7apByQtjG19FugAiTfpHteXjtfpU8SN13w41LbmNYuks4V47VDMBBU6bENS1tfNEGPnGiz6b",
  "key2": "2YtS56CwXPzBi57SSp5SheU5PedGtC2tbAywAy4sc4C4cKy3fSnh9DNfDwKHoxHm26U8e2eZ8QjyF95zTgRHXfaa",
  "key3": "23VdQs9SMQ1dk5Wni9igpWLinCcuiceGiUxHC9bNupBkhFQWsTNbBxD3nNea6GypTaDFTT4J8iw3r141ugtGpmjm",
  "key4": "3KnYVKvbTPrAt8GZDmzygcDM8KkM4Co5P7o7RzoqgjqYvv2AgRvp9J6p8mhR9AeEXMcMkceCMdd6w6qqybbkFbuR",
  "key5": "3yjeW1waLqQpTX3Kbuj5nLpDmCK5rzziAhxsTuSZLEW6bc8NbZhGnqBTu5tXnvpFHFGX3PcbQ1wjpShoQfaos6aP",
  "key6": "2SoRmSD5SSJ9QvwicCzS5JKxHm75WBG9QiL2wCoq9GJJ63478uXuyiiCkDrBwK8ybDfWXxPD7wezcksFvCLzoAX2",
  "key7": "3zL12DzzmrPzTPtSooiCYf4K62qHN5ZPqPU6jUY1xkMu4BPLiUzvjx9Qn41eLKcVjiG3dDook7H2cpxUEJGS7827",
  "key8": "5qDUGypJLt8WkCaQg2AWpjkqazPoHgPaKqYt2nadS29dHkAGx31AQy9QYqEKYsTskhBu68TTua6LYm7C5nm1gt3M",
  "key9": "3jbpt2kcf8CdJPZ4Uw2sVy2U1W8tEP6aNuGXLKqXGa7DpcW1YRkNgS4FLFgdkawptGdofZopSBSoyyT5tGCyiLaf",
  "key10": "3Uj8qaV9jVJXVzE5ueo4o8r4RK8VfQXy2Q7imz1PqpT2xyRCtoeFP8rXorS994aHDoqvWcFXYfa34gXS4Ya6ctAe",
  "key11": "62CfQKRq4jrGhmrt4eYp5BAWRNkTxCDvYexTsYDmjAYjDRAXeEM5KFNqKCrczPHXtfKJ6BeFvzB7tCbTAUL85Nke",
  "key12": "3PWTXqArHBfJjmXc5EnTpfbgvhksWzZwgLYshPnaVi7zHNHuENA4K8s65cQ5D1onFk8xPZbMGTjeWRMWJubx7sGM",
  "key13": "2B9VsnjWJKFQHeC9RfctMN8wim6L7rJkEmAjKWFrcaNnAChx9Bwte89EqNYeEMSpXtTVYuPyjUpS3z5nbKrvBP41",
  "key14": "48avd9ComMFgsu17D4Ze4firCBLQcTmJ6YLAxkz87aVc8bEgE98mqTj54eVYfGu9MDSG1d1eDqkuGDNVCotZTbW8",
  "key15": "5V4EypsETjTfNe3gYo2rtc26bwHnHM3TAm8xXsnXZUZwW6Xxw1hyfrs2V5xSZqj5ieHJNKLxDPm89jS4qfihyHhx",
  "key16": "2oGn1Zxp3oerY8DJdjvDNW8393VAXLFMXKeSVejdWk27LGf8Bei18TuwsScG88JbhYQn9Um9hESj7qLuHZemu7N8",
  "key17": "3hrtiwHoW38X5UX4aLANoUejq5nZN7zzSFZXeWZQMWZz34HCYJRv5jv2pdae93sr6KG9YuBEEvnKAicpvCzBwgbd",
  "key18": "5yK21LSnRmRsR2rtLXiNWG2tAvpFvjzHJeA62WRzHtfREma45rfHXKg5kaqHUEjxQns3Pvi8sZG1nmcfaH6md6v1",
  "key19": "4P3dmp4gpK8femFwduybvsrEw5fWQEw7pGWaBuyndS6nxuCC93KfyafWMT5fu1XDcW5LS7WTXA7GEZ2nXHD842Xh",
  "key20": "3c28zkJmwTHtw5VMa3ug6xU5FrCHq2ipXXfJVh8PTMqwvRtTSKQZjfQS8qiLASeY4x6cpL2e3YtCwVeQR1YeBjy",
  "key21": "4BQ5EqRDtfYUPedwqGyB9XkLG5TJven2fNxhrBXqDrw3e6GQKg3mTkSCTLcUk2T5LSctFGpy5APEomPgRg6TxaP2",
  "key22": "2oz6vj8U3oAqKKjvZLzSTurMjeRHQQP29LtnEyaCEDvaUvDFaVBQDkZofK9S7LRnCP57LseyZZRtqdPVpequnPRa",
  "key23": "5iK7BrqpzkcUVY2fncSzPFKv3NShq4JsWDm9cwFBHMTU6L9ysFipXdboAUSZEPtP1au8Tga4MHpEiwgJLncd3ZMm",
  "key24": "3TcApxKXk5ay4yjD2Q8GdLDaU4CHC9Zrq3hym8QQR54xb5JFbB9wLSpfxobcSHT9YjSNQZpU9RkF9XvGvtJPLgbK",
  "key25": "2U7KXxYMT41sMn2QMZ86EYYCzQLi3RQtZtZCzdLekBwzahX1j5mc7nej2Udi94RcHaSj8E6RjR9MA5d5wcN4vrMe",
  "key26": "5Mt1TuqPo1pKg4PqhAfi4HovS2ZrSx3LAFibAM5KNCSFD6jmGc7C3NYUpS6hSDtaU1tX8TG5fymJ4rhcAEqxK1fF",
  "key27": "5kVofC5iixKuTBTfF7sDqzXhML2ftov4N1Wa8U7gKbyMLNsvNRF58RSn7GRrLb47GqUABD2GmvWW3ACYo6fNXWGJ",
  "key28": "5k4NSChW94Gr1tAWh9RWFu9GXRiDQewGc5ycMgDSzAzGcCYJrc9m5NN7fvrtwfNHqknJctshiGSCgqYNnqZMv9RB",
  "key29": "4gcAPvuCGJFofsM88TgsJysUe5ddJFQvmQa9TBoDqieBjyau1n7xckhvgov35wVpqECYtD79sDivuegzzV9zy8wi",
  "key30": "dejLjfWMPPt9SSVevq85CmWy6H42H4899WbTTiv5CgbxmUFieD8seAswiyoFsQaQEcDih6UsLtTKu6bQWfwknPL",
  "key31": "5LuNpaVaXzmHSqTswWomVANvHFVDWN6tEEnPSveKCUHpmG2nWpM1qasxtD4avGjRCfo2vUwmT42hKXbryP3fq5ej",
  "key32": "pCujSQzWhkFVwYvfF6Yg7Tyh9uw8j3ken3aXBHtPYDjN15zoRpCKd5xbn2ZtTFtdCHiz8rXzbenDdVqcXK6uDXE",
  "key33": "2sVxmeWHvvdTwNsUE8Yf9WvRGAhmsiZzWjY59AjrGNj13etAswxzKmqLJWpJFpx42KxZD7eEFZ6fRfK47eSPTH9A",
  "key34": "4myCaGx7zpDyMWuXHUfqUeMDZU9ifEvotzoWUzbXsXWPmWB1zzMUTw5KxsgRhxKaDiAMTJHbt24srSAcDCnuJLz5",
  "key35": "5F2dfz4ZzMB7PWY6bF5XeP1k6v9dDxMKtY3ZPphrvBZ6bUjZ55ry9qyppohDkT6F6WKSYXyqv3asCXrve3zqT7Gt",
  "key36": "5xEYiCGih9SmaE7hrUTcdzV4D7qMvdZVrXJVWrUG2LDLfHZqf2fQSZTkbFwrzWCuc59pxndfn67PQTAuukBQ3Eo8",
  "key37": "4v2idQWTn578Rd78UDBYpV7bA6FNzZ3HDCPDfinCGh14DYieVJEBikcUB8YsychXDh4mwJFL43BztZLyqi2erksN",
  "key38": "2VUGj6oWMNLMFJZxffDKrPZkRk6N3AKA9cc5rVYSUC8LNhVfC2rFy5rEaitoZdKZyFteJPR9YcjHq7yQYj4ySw1q",
  "key39": "65YxgftDVT5zoAri2PbWX9UrxuMy6LhnVyLvcGh7HEcKkDF1ker5grwLY2trbfGgHp7SJwdKvBzCa52yYYn7rePq",
  "key40": "KtQhe9Afr2FDwqg1mNKbtipxhZZxredkwBAgPuUxYwRxmjBSX1g7Gmonw4LA69uL33Q1gBMXEjnPsdNeNK4ZqLd",
  "key41": "77LH1xPoiw4z5QzfwJb9GFE9Fff2ZCMckQ5pKEUaNMAt3Crb5kFXS44irnUZtancPuS5n98kWzL5XzcuYB79yfy",
  "key42": "5fkr2fBqMZx4J1JcmiNw3sJSB4wA7aeWxkHyeToZ2A5gnJeZqShx5y28B8uipREhrcJfm9RaHL8jk9aqhfiztgRy"
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
