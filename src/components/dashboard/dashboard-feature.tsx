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
    "5kc8bzzoTs4x9iKqkvEtq3QxswoBWEgiGDFyAfLSCVrtPSV3WrQgrq8upFHv8TiysFRJEXePqPshQHjCQysbmoWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zeSeTcN2hSJQnKd9GYKMSM41kB9aMKV9DvhJrnesWFFMrwoPp4BJLpW9jU4RmxnpR5P3dXJFZJUYYhmSxbfXaFL",
  "key1": "4VwdEVitBLkhixhTBHiXw75vUUQTbKpNxm5Vt1WFq53YXShwbuPKTsiwCkzvdHx4c37xQ1cYSf1dYaenTBwHaRSS",
  "key2": "tcVHUS5iJNi6ikYrc4na188T4zujnRMnwbaguerZodojdXLUv8WPmaZgX7ASBbMzabc5XhRzk5tNY41YTtD1eYV",
  "key3": "4fig4ArFr7U77y7ehFCFj3zhhJoAhPLewdbUTM9K9epdDtofGxxpb8Rxdxo7QXWTiZtbYpE2qnrguS1HHKfszY1c",
  "key4": "4qvDb4fJrn3sd22ERZipb4bjNtLLkDzSYSs7U526HUFChJD7U9doPEVSWazYqMszokHazsyKhty797Vhupz7ZsCn",
  "key5": "27Jd5Uwo3wb8iGjvkUBi3kPdyWbnMjKJJCQzfGpt1qrZxi5SnzatjUvuJYhnHCVZrbspuELRgsegQunZ7j9NkBC5",
  "key6": "JQUs2GvDrmk4JCjrY8ZXvbLkqirNzbWReAGzqQHgPAWSdZ4Y5ZPk8ir7XG9MSgsTsJs9gJV8qPKEAbXwyXc1KX2",
  "key7": "4XHwKZW1Ye23T3b4Pdwpdnk5PD5Cr7ULYYtMyzxaLuagV2MEyreWK68EPnE7zpPabyXaHqBJQpYvinVJmEiXBadY",
  "key8": "2bTMve3G2x7zy8H3yfTa1UjnMADBoz6qiinj3K2dE4MhP8Va6o8K19MkXXW73yC7AYwgX1XyHiEEHd4Q8z85uq1i",
  "key9": "5iUHLQsXJ2njF3NMjqwPZNA5g2RSW7VvshRncyg7gRM3GUyqDV8SLtrzLUHS2yLX2S2cpnfC9Do7CbHzSoqT5eTY",
  "key10": "2p1kXkei3evRjZgdT8faZh9Rbpfb88Rf7ajRThTxT96hYXDee95G6hMYSofsujzyGsjwVh8DDj4w2gwkGm1jQ5Y1",
  "key11": "38sf9LmREHvnnraxSRHRttHMXDgnzFyERZ3NJeYD8yFtQjCqHLds3tHDtutvefRehmNqyj26uTzUggrWNaeRKkpE",
  "key12": "35PYGadPdSYgeVSorfUyiEspoj8HJYV8hgMK7inT2Ym6XJ7NwT1v2CkmKtWN2tBndFLFLA1GmFKmYWU1X1csfSFo",
  "key13": "yNxHQzh2RHfE6NGw434qaVEkT1rURBhYTd9ZVvABWmt3hDpks1eBV3EQVe2DBQYnx6ttV7UH1exoBcCXPFu4Mvq",
  "key14": "4e28fMeyMqKaVNNvW5Zey6MPTerBUiNmwqmX1WF8y6aXQMT2LQPbqddGFRnL7aNarXp64jUdfRaWwVNaLks1bBV1",
  "key15": "pxSrBkr3tTuHGYkPgoHrFS2LDui5GwYp7VytHxBLS7WPtRve1i1L9Su2W7WeLA5UtJwdH6W1eFcpYi251kks4FJ",
  "key16": "4BsqSn8nE173QLJGqKztLuhpsy743k4qLeLSUan7FWLYe1cSNnJbnkw7JpmT4gV9oLieNHMZLh7QxQv4tU4vDBrH",
  "key17": "2PKWD9yx5QibvTUeUCqpgiM68b3dRUGMKV9DwFggENz4TevVZhrnRdGiDh8GbdQhGx6bzg14QUS6gbFa4ocL1EKu",
  "key18": "5QGcnFgn15opvh4wqNHRUHjLftr4ZNj2xCu3U69GNhz9HHKGSjnPYdwC89pT72iD9R2LDHVjbUDwyGDt5F5ySyd4",
  "key19": "5Y14SeT5C3V7DuSVwQ9Gosuin87wJwNbLogVASBugYXeTt12akH68wCqGwDQUrunu3A4DrnxLSC6fKuWnZYKJNqz",
  "key20": "38RGwUwb5GAtrwW4gmKxaFaxrvUJqZ4yb3Vr5yta2JDvYXtkZ5wd8pMeFWDCvHu32E2s36QsRbKsnVbvdpf2DkLB",
  "key21": "32ZXU96aaqmmnVWRGpdSNgyFoL5Lqjcvo5mtmYtBmK3s4i3eehCkPg74f92E2Uj77WEPMT5jr8zmkdKDXFxzNvZM",
  "key22": "45zivxWRZeiUqSEZSCLw6RQqaYcnujUZiELCs2KkYpWPk9C4PBYW651E11y1PTK7sAsGjKAnDSZSpL3iKD2rm2mk",
  "key23": "36A62znYi8BTedBFRMMkymuMpPhqKzyD8WnEyxfuMP8v1zVVW3H3fHKGvNtMnyZL4v5g4LohDXERZDDBZiwWF12E",
  "key24": "3sriUsnNcjp7xgbyhfwXi9HZAXtHhPtdTodHr853ye72dvE4e1RsQ61mgvXgWYvAxdi9ZECUpPn6vJ97ZnX944ZS",
  "key25": "5ABtAah8Zad5ghNUa7BLvbw7E7mTvb767WBAJXr5LBoWe6Vujz6h2BUMadgJUwGF7SZLq9M2yauddejGpavReTvm",
  "key26": "2YcJw7kFU1iGML1qgbj11gMqZXj7pD6bKLXDpSBxhEK7h6Va1zfksUSwJ4zogeqk8dQAd3frE6ZaFCx3vyBaHb9G",
  "key27": "5wTmrT2ntvmeLw9TiYMLNcTToaoJHmAJpuHiqwtZsznnfRTecZEzBuKBTCMkDNh2Jq9qmu2SygWJgrgR4Z4koEAg",
  "key28": "5pD7CSzqKhA2u7vgywdCZe2s3HSfLXxgsq3xBUKvHnRuRxDp3CjRq79cmoWi3TYoS9LXd3Cvs2pyfU3TS6ZtGE5b",
  "key29": "2BArf7msxwYjvL2kjTTT7NVBo6funQSF9QmY3kwdGiNr2owu4d3p7Dg1DXEzv3bvKr1DDhBqTB8Ht7U8u8zm7Mh",
  "key30": "FRCVKTpzZFgoR7i9m2Gu9ogVFQXjurYmxPxnQ3PJRH9yrhLhiKJUeyYwQ1r2CYirpGLY5WNEP3gfWDxdf2zvREj",
  "key31": "41foHVTfK6vWico9U7VyisxC5Ba2nyRajmADsi3NYhv4PuHhRyJYg7oPHyi2RjHvGBKEk4F8z25nEyqKH75wZeAY",
  "key32": "4KzZSgfz3fjjoQsPbqyLMTYqAtFYhsHG5JXscGAdjrJwbtaGAxmYAgmBZZ2F7odnKaZ11JmE2KrzqZi7753yzq3M",
  "key33": "4Aqbv4cd9aB5BbqEnxu3BntonV7JR68FwSe5UM96XXsaxgEFk2ndh4vAfoax91BB8mm3FpEqDBDFmXHKjrQMXHrA",
  "key34": "6558Mg9QunbTgP3ESZ7vdf2uEMAdwp6taWAEfdfh2cjRTb8HH6rnnormyRMQkarJ8RZ6FTsC8kZ6GCXjA8GKkLaf",
  "key35": "2dbpvwYktp6Carb65Dn6cEX79agL6KCEbookZjzUwX5eMbFRygHrKUr5214Mq5sTYcFugXds8E4Sxn2G6hoRAaCW",
  "key36": "218hcQUGCdaQgPR4a8CciRbTAGY3DWQfd1dfJFU1JrgQLt2QAVbuyTEL7Trve6DSvR5u4FzpBn5NCuQjjLtn47cV",
  "key37": "3LCZJRQp2BvicSPq4jv8AuhGjQPJdtf5G1gn6CtwgxZ5FPRzgv6Udchc1HZ1x4A1raEeHAYWRFAfwqkHYKUUKcTw",
  "key38": "2eYvsVaZsVWYHvtaD73a7rrYEkXpBeCmwYQYDfdYdYsBmRaaRSZ4nTL5yAq4wtdrPgtEMbPuytvWFEayUAUhHpif",
  "key39": "afVNDaQL3QvJWbXdZZdNgUm7A9yndjfsses9o9J4EK9DqAybKbtCVqraKdMD8qMG5bNo6wJqo1dJ6XTx1Uyp57g",
  "key40": "2Pd6bMeLjCxLULKgjpkyg3cN8cENbkttYwsBpYcaNN2GDYeJy1bSBL1ymaKxHkeLRjknSwcZV7obPXAtHea1aS6S",
  "key41": "4rdeg1nod6xG9nnRjGHHon2RnguZA3U9zikbeA1bSdmn36DPjDJYGHJEDVE3pDB6vKnLcn7maYVErKFB3YLM1nV2"
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
