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
    "2tTTVo81VTPA62ezKrMGvuBViyvhfiyr6wJR6RnBh6d7oy2XCkJk39MK8MU1e4MGrVqgdAt69n35L3ouKMEQ3kY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25b9s7WDaEfwt38vzTSQHuyuM9FVhRMhoBCVFFWEsM1UbUGcWJjZ3z3rnZMvczZNSBnvFdQQdQpWbiNm6QRfyisk",
  "key1": "4MNLy1f5GUuRJyANKDDdrgECd4UF4qy4bLDHErHJzqVbQLkibSTxz6nCQTc5ogKotAfUfn7jz7UeQUd43nWNHyRE",
  "key2": "H8Lz2qcgzAB8sSP4j1gvvZq5PnNYNGfmvoaGaS9BELRfAxDyF9MViQx782Khhhn5MNEt8QJg4vgBT9mCVo3ccso",
  "key3": "5FquNK7GscmpR2R6xr4morQo7dRHAFLborBuCcewKP1XcaLw1xYf8mUi5qa5CmKJVvJZfFwfWe7s42EyTubc7Ltn",
  "key4": "5ZBwPUb7KdryjxqJ1LrTJgL877CPMD1bjU6NPxab6bTswnn8YgaW2GbsvsBkehnKyB4uKj9yU6ViMT9Yn3sByKE9",
  "key5": "A5CeVpMEBExCqoVfQDBapdkBPfMgv7YetmbUaP64bD5scoJktaswRZeHzKvLuGowM6vs5ioDT11i3TgCtwgtbit",
  "key6": "5pojxirNPj5WBPLLNRHbugpEXMSbdCToATjc11B4NQ5ySEECum6yLq3dVhUwtuZLt7cjzMfxSrYQqT5xrukyKJvE",
  "key7": "5V9MdWnApTaZTtCmESKZ2haaCoxsE57RPC9xpvQ1qMcGBwNQjbtoFZgHGFCEqZDe7vqDNNBaJqJGhgq5HrHBJx7C",
  "key8": "2aPGDtfNsiix1LSjTZqeiC117o288qe27GKJgp3q7nkWaWQ8VzH4gzDe2kGvRf1DWk2HMr4LsLZB6amJEHVUFZYg",
  "key9": "5JmDm6VpJ1WCkAGtz97Dofz2QrJMFKFr2oWagwMEbEt9ocsvq49Qt7mGALU5g1zQ2d2o4bQUigMTymxNG9j8yEQ7",
  "key10": "r2AntSZBboLK7L3J8gz9EVxJBRxfr4Hu6DBYSN8yATemq5p3keu4wkRhADVr5qNasJRmyNGnMVgjtV5KDHT2xA9",
  "key11": "G14eDwJgHWLAapGTEp9YLG8QQ5pce4W7vTWNQqckKK9D6YTCMDh15Ls9vaUYeJCnJgss3Yi2q7LZkq5QM8Ly6mw",
  "key12": "2ucKrjn2tjzt2LXhgG8TFgrQs93M2gui7Z1v8S3FYt8QwdEDwujG5Bo4U2Sgf1cfF6C7bnkZzjgWBzmRmESARKbi",
  "key13": "jhqfXMSrVqHe4qvjYog1Mn2UzJDtSxRqhXeun4eL93vrbDjXUvoHFEVzuubuBPPdBEAaKEFN4yJmv6hp8PmsenB",
  "key14": "HZwGtqk29cL4kPAy3cr7PYxpcpdGLCRp4XuNRRuUzXMjKZk4ZAjQkDR9uGxN3zZnMDfN6zSwuzJ138vwgeDkDxu",
  "key15": "4kfXYQ7F17Xpa3x5PRn9gHE2Qw1itZC9h7vWxVBwCSM5P6DpMgZAxZyHTwdD5ey6ZQTJJyXx5zAb8AKF2H3HWKp2",
  "key16": "3Urqf6ZYGMTfHjPmdKumHmcqw1YuWFVGcHhrnmppo9dhuq4yCHqYAL7goDK5EpDHKukmDFuqCCMS8R3AAbr14y3q",
  "key17": "54CvzUyLg6YBNR1EDHe59tm3W8wgrkWmvpyqRrY12XBAQxpUFMMS3NLPpo3WkHK4FY6jDce4rjcvi5sHLdgZ4XZr",
  "key18": "5UsNzJXgyJhoxKvozTiUkfDShCkpDJcEFgpdwQcp1Bg8Yy8xe2RxJtC4wTH6BQptQ9z3KZpeGn3pD4HVGbhPB2uY",
  "key19": "4S6KWh4sqVA2teLtwqjpxpLr4PJo2XjTk6FWi5TYcN3f52EWFmkeECXt1NXZX2BnVTohnDg4z3aJ39yFL4SDLT52",
  "key20": "3sMsdKscSvwYTZDVLsFmo6KnwJQkgiYkbVu2ihtimf3aVrXjFemLZJDZMLLowZ9pPdqLHYmkqaRUZU8jgu76Fped",
  "key21": "4c3589DJ2dKCxfgSLEu8h5MRMbr9z1atWFP4nFbJ8gU3o3w6e2nmD7nc8iJh3hvygmFR6m2Z2J3w9LViukxTWFRG",
  "key22": "4jTYXcVe83LDdppAEeywTL13MQN7cpLuLE8yc2wiyvNTRxYiXoYdtJBhbyQNYgTtikiwVWBC1XUcSHxg5DmkXQxE",
  "key23": "4TGkQFA52Yfks8vR1Fs69x3Gp4muk1VfXfemZQB58H4NC1ZGS3vR4SmUwsS7FPyowec7BN46k7RZKkTLG4QeZ9Jo",
  "key24": "5uqsp3FAsKK2TNRz2umD9yVBirQaXBvK5EooLNUes54kqs7BvFRedDFKDRFoUCrUeCYuTnA9qrgCvT5DPuZqeiuz",
  "key25": "2Ph9vKurMNxk2wRmHXiFjpS4TRHyLiYVkri4HX6QSqxnVSA1kh9WX9Sqctw7xYeuzNKB1YYTV6APRJKEfgj2BuLi",
  "key26": "228FATy6o86JBNa75HZ4Davbtk2RN5ABJau4ooJEVYWi8nUNZ8UGDPkex2X7DW7uVg5vVxmw9teJtGhYdSkQ4dt7",
  "key27": "2xgbq9PN6JdsWHFFaF8vPtgVocAsWBdPrx2s1Dr16WeHxLxERBVCmCHw17iQCUYbznKdV6JsrEwj9gcFdXYha4k7",
  "key28": "26B29jDM6Xh3XrkYCPHrm2224zToRfNbnHSkJS7RNQVsUss5okZVPH7Row7WSWopY7f66GSc8frba8vrnCPdqTcu",
  "key29": "28m4edb75PdMnVymLkA7MUdPXkHNFyWG6fqWYMmZT65H6JaWwMc7ktzcDtfRHwcuxpfgbntxA2oAzrbqpaYbLEBj",
  "key30": "esjqJYtUH6sKpE34Wjrzgnt4EnskRDHZpq5rHJqjjyWEgFWFpN5i3YoaTGJDWSHjTP3M9MrWjwPem2BLPNAXkmW",
  "key31": "8XwrNSiuyPSQC4je8Nsf5bPVjdFCAwau8zCzbr2eoVq16n9dKGB3onwzyFFJktdr9weYz2g8H6HAaWQ1hKoe4eu",
  "key32": "3VChiy6zsdmxb3xxWWBMNwfH73qjtqA64rfz5gFdABUCMUZhYEdBEJ4QJnezaB7X5YducNZr5oDV4Eyzi7VRMGdC",
  "key33": "5ro5gFixJ7pmvseDPif7PAWB7ZJM5n9xWZejVWfKWxYhLneCmxbESMrPVWcKUHgCUVvwrjRVN1BiptUCgwWkUzWH",
  "key34": "h7euEnkqx1gb6Hqdvc9VDp6U6cXJNMTFH7q4CEwK3RcRJG8K1jFqVHXpYLM4rMNiDS6YFh9AHxveqjQqS3BzghE",
  "key35": "2mdg5HRo9uEz5a4wrdbcxCrL5V66PmnyU9wo3ZoeDbrEfn7s8VXJ8UX3PgV76iGYFDedtn6k2kDjeyGhGFfy8vvb",
  "key36": "65MmxqK8yM2VXnMQQE5UGvLqU5yRub8xkk7BnGh2n5Bo6bQMkrPJnMPaMum2FZqNqHqHAHXKEXvKQ7XkRNKe8nNW",
  "key37": "2xBQA6qVgJoaYNnUjYeP3DF4GtmcKg1Xch8VWfhX68N7z8QE9EsrvbtJZV6bechPoj4BaHfc8JqgTTimYfSGyHrq",
  "key38": "59RnZY82EMg5WCamgoSj7C4YbqAuPi3yPr2P8NGHJ3Acv5jzQDrYcK9aimnFZhtGa9bujj3aKCD3DqU7husxSnPh",
  "key39": "3KWNAjBaQQwdPSFF83ap6YFNrcHBazrWxXCg6AGHrgvbvKbk41w7C8hX1QD7MhH5PLBN3DdspUc81MVD4uraHxnS",
  "key40": "D6XjpHnTbGKGR1cZoqZmMUvE94tP2HfsyTWyP98HeYPcmNpNi2TrQNK2zY7WSK6PA1t8WCm8WzVoweX9ygytP3t",
  "key41": "4rXqra9pwfJs9aLXuQeD5aSatcUv77vnUgUqVGxmncLH1eMFQv7qRhat3HuxLYhzsunjNELp715ZvGo4pwbxDqP",
  "key42": "3JnLnyEJjU1kyDW8BsoXiTW3nDiJvqEnepPXSjPU6GUX53dxF1HonJvvi3YC3iipwZHKbFuG7n7NfGtZ47KWM66Z",
  "key43": "2iEhDxVxKCp3w5B9vy4Kv8Urnq69BDgWMLrUvV99pzYsEmCKM9F1XtmL6rxg84uiPys3U7pFgpnHTrbWNZya42XX",
  "key44": "2iRuGfbzsPi2R3i5NKek9F9JhNV5Gxui28Lhk4qoJwwnnjWjAXNZ6NqfHUgsXMX9KMEGVLn6LMXPJCCQdEuL93dt"
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
