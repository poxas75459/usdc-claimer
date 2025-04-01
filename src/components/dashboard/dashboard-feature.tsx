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
    "4DtPegjbqj3fTysW3i1QRTZGcDsPLycLeouZqy8jh3SvGNrit5SqNdmBAaSct3w9mATxokADmxAryT83hkJXyX8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mqppczULmFViwsJrskSKHxm6ECKQwVuxFvreStKuDHkGNWuFw9k737KreX57pVnbjdj31njHaFvZiiVcknagRSi",
  "key1": "5SRYacbLh9gZGQQKH1mjdiX9NeA58SvfSdqg5cqvBLP8WqYJfrQgqwAqnyDn9rtUJS1xyQvkkCbMp7KWpfqcSLME",
  "key2": "4VrVnHDuVEavwdKCrnn3idZxf6d9EEynkhjQfFm7kBErkdvNxAgq4hzYXuobCCbUAtMWKwcxRUUqKyffpGtg9Ujs",
  "key3": "3L38Au3hgjMFKfhU8FY1KgQrAgAxSKkPVRYQpkjzScXia6tngds2JGUL1yHZNf1dfwhEY3uXPpSfDJ4YBnUKNoCH",
  "key4": "29sL5RdoG71VKB6YVZ6ERz625HkRH59LKicyRQzTacXF7RaEmbTi7xJvMkixhaSiaSJrPT2fnCbNKW75Ncrhekh4",
  "key5": "5nouZTBDfZsGiY96iKhGGVh1HFZTZgPEddyqJKLWMM9ZCUyHZFanz1Cpm3yRoP3V3RWiFSUx6ZXvbYbozZiAoxDL",
  "key6": "5TuptXm9NWJhGHTizpNkz3cUycQhXRrB6X57T3QyxaGtRVRse5MKb4uSk7HqhAPE2Sxz4gMw1vdiiSJC1WjJnoxr",
  "key7": "4iBTAKqynTU7MzdxEpqzHZhpLoZKavK9umbZ8efx4rVJqm3DarfYGi4MmsdtAivVcbguZ1DSua5pa2xj6VeHy9m1",
  "key8": "3LrS1snEK1mzZ1PzhPBZYi6H7Djo3KAfibE2wh46NdsagEELYmwM4osGPdfq28LTwdL5X5zsN93pEaBvUJy8is64",
  "key9": "26vxNojLjrWcdbiHiuQKWL9P2BZVqMDoUtZY9Nh3vdTPpjoRJBLXJeqfuDwhok6VhnFrUScpviNs3mTbQ7fAHxfK",
  "key10": "4DShaFEX3v8f3HhAqYiKTNLFqtAgVLdk2NP8YhEQtGJ2LfsNCwXMHwBPvsc3vyD8rBom9bq8kVYZNJx4x14dLTH7",
  "key11": "5VdgmYDdkGabDyQuhaTSeD19GBipxd1ogfS9L7FsSv9KoeshY17djNSd1RKtaBYNSezJGWCmyiCEJSnWWEkv171Y",
  "key12": "6S3ACJjniMhLhHCT4eBaLv1frvDwrb7p5SaaGwns5U2yJ7Choy3kLWh1bxKirGQHf8oxoczgBwaCFcw92Y5Afu1",
  "key13": "3nS6iruwC12av7M2tvTY7vFesDqZgoKXS2P3czPLQPuagidAz2tBT9PNRaxRyw6dVQ3ye1rbwnk8hssJsXujcCUe",
  "key14": "2TPU1SMgrZXyswYsBDb836ytZzfk5P8UN8kCkvxTXhecWrcz7kd4fi4aX5wcSMWdnbnAL6HSUJMh1EhUS88ngB2v",
  "key15": "2S6zKHzbpofxTkHvFF8HbE2wqHbDxqDGmfCGK5JytBJdbKejZVDEAh5Ak48uD2kyCw2tRooagxh2J6GmN6ZQCvRj",
  "key16": "5UGxZjokx7ApVaLRhE1B6z38SQ7F5xGsb5kpXgUTKg8QDGdWTjKUnnA5v7YjXSbkV2vExjHhqVENdBn6WUT1ty8K",
  "key17": "222prvSNZbKk7svGUyny6jMYtGUdsATq8pu7ZTqwqkVnNQrFZ19PmYfh9T8Y8cnQD2HX8JgyLUHpdJFQDrkBJfzn",
  "key18": "3pTij3EiFJFqLkPRJ5dRRw4ySpQFP3jbJwZwc9cq7ZbjZYtCDFYrtgD3bz1koXX71cjPSST7UaRvZbyhb9vnUNYj",
  "key19": "2GF9j7dgWQEzGbhhKEeARgYMG6teC6Ut6JAQEebEPFnKxYGWnzATMnMj7RGDZBgRxxFJzPpEXmUNbc7Pg7RzZsQe",
  "key20": "5c2kCjZA5PAzHKfYcwPk9whXbYS31xBENNp3MseG9L6pKa3Bu3h3yMSQpRfWmDWtUTX2TtwCPngUBn4YLbxoH4su",
  "key21": "4qncBFovKg8NdCWHkdJJhLviL3shstgrqjomRkuMwYRMqT1YADpSc9TcFUmD7XEmcHs1mjpYQiZ3vaAZMw6VisFn",
  "key22": "oiNAFKbpNCXZAZruoQZ8PVR4TaHPi6RwyzpHJXRkmYSoZpQVBDLPKj5NSveJS5YnhAzX1qcFf5B2sb55GSrz6Fp",
  "key23": "5yqQTNaHraFunkHG5WpSe9iD4Vi6Pa6kSvYer1neJBRSGKD6Z69UPrBGxhYTTbM5DoTwzXjNoqYsK8EQYt6ZhbLc",
  "key24": "5fUPuwJGhPo9b2oUABB7hpVstw7ZkXWa3JvWzedvz7wAUaFGgxbwsWw75jAnghno2HYqeL3N7nxmH37YywtTTiBv",
  "key25": "552GdGJFScrUS5B3ojiVjNkB19PZxnHkNeb8RWkZu5874EX7koo9ThcpQcpVbv5KjcvEZ3dpBSTi9vgkiCtmU2zE",
  "key26": "aNSowDGxuN4RnbodVqq9ufeR11Dp9Be6RwAPLyqZJAfFL7PJSHU4gJHk4iTxt5x9o8jZt2kzYyR9foLTAQdymfm",
  "key27": "8vHX4Yx4fntTg6bDFNr17tt45tEGHXRbhQVrmD1aKPzYgzLGBCYNzfcF2Jy6jWD4BdSiJ8kPyRsSzZVUGc6Ng47",
  "key28": "ymnLCsKX8R6gY9KUNxRiGqA1YawuDpP8yd11VJ976WdStB7U9T88qHoA68tcgqgH6mTuJQJDpouYwP5GtioUuaW",
  "key29": "4dSed2uWWcgQLQ1rAuJ3RaxiiGdspZwZxiA6S2KCztm7SsdDHXav8GJ2UpznsEDvpjGfW9tJjSMiTpZvWZbvmzUF",
  "key30": "4LypBByqK7um7YQGEEigTUw8rpy4NKX67iFAvCD62gD2LY6TFdMtj3HuwxFJ5GTKkT6yTGSavBPhyZQHF9jEREBG",
  "key31": "5svyQUvE28dXjKp9RgN8mYHY37Chy9jb6jPFeEv7tNBBFiZhD1qdF19dD72zxDXnjshn3y6PkAhThhkHJSGCRkN8",
  "key32": "28GUmZUNWtxC1qpXouZAn7HVcv1aMcfNcWpyB9agAUoCzhH7zj88iwB9Mggk5cmTyL9AqseJD9wZ3BhRYHmb1kfK",
  "key33": "2cH5FZeUEbjya2Yzkf5TjjjfaeEs6SCPCneJicYEvkB5ZQiphDKpKd4W6koHKWqSYE8iJyqvMZWAiEi5dSCeXKbA",
  "key34": "4yjrGSaakR53rgFxjrRcvZKFWUGzn8zRTwcbRHpWLHBBDHsSVrfeCzVEfWweSLgkvRnXFnJHB1ABvW5TAEMt557E",
  "key35": "4GUjQjEE2CVwDyZjNDx1eN8wYUmFWDvM63eS1bgqPqV7TFHFhFarFZdCKe2HYsqjMVp7Y37j2bvj1D5XXnTHVQag",
  "key36": "2afYKze1cQjQtz8zFPF2ENBmCBBKtWYV96xbkyixe6Zctz588wZTZ3MPVFz7gnh4AvbeRnPSJKLVFNnctQYgkBnn",
  "key37": "4mDiL5v5Yktcpx5hY2rSUwKDBvgzoRo4a8j8VQuudADfg6riRKiF6w1jM16wyNnpLd5mUJE79PuZR8pGG54wkk19",
  "key38": "4rVivYVJY9Ago17hJJSbgs2UYS3JmC59tXCd93wLHxHn1bjn9qmSYCB8DSDUJZ5ymcHKoeW9d3L7MX2znsiTY8Qj",
  "key39": "5U8zdzSPNDuGBrUpwnduKUXi3gjsXghyNRV1SCx5wAbyfGHARLdFkjzYYzTd8SizzcRjaXJcKK1DH6qm5nMWwSR7",
  "key40": "5jpyMc8dLoMxfLSJpx9U8r6qP8UhfWBnhNXFKD6ffP6dyHdDCmkGiGEeosDu3JTwxAr63DL4gjU4JDjWUcCVAGLj",
  "key41": "21icX856W2LzZLGb7Qq1prHzV2Fr8egPthP41oabK7cwdH7rPfVNSqNbYyAYh2oGG7ezsW14at4a5mwKgLMFbYG7",
  "key42": "3vgssoEKbEv1daucKKMz1jZGQSyCqnWhZa7zVtLtYqQy13EbyZnNUV5AhYQ7k2ybem2GD9LnSyixjvZqdf4P9qoS",
  "key43": "3j69pghJpZdKmCSVEix6qVjeZiCRGdVuD7t14bj46o25ocNduWuVSv9EsFMKyb4hrZGSA8Tk28EEq5dsC5dvfzoh",
  "key44": "62xs5jYucNrMK1vpMeEnLY1wJqk8v5yEjUK3qCuAALiyC15DVq8Z3AKonAaocFRwKNjNVQot8H9gvUN8XNWgTVmF",
  "key45": "5PZgZgm6j6kV2yf5JXdcRtW7p3oXx94AZwjyP79riwyxEBHgvFqVFZd8nK9wqCRUW3Khh3HVbzUE1N6yGkNz6VdE"
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
