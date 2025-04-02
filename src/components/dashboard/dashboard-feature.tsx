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
    "3cLqMi7uyB7SPE5izJBfAYAkkhdHeSZdVeFNTxQBqtD3jLDLyTxgR9HQqUAYdendLQWb4w9YRkqkF7AEpWurtzu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44J3W5UEjbnZha1R1jVcMq7E164vbntJdjLWkhvBqJQZftrHo6YLotpWYu4qjQhmJ9hKNxxKu37X3RNzEeUB49dn",
  "key1": "3phE5ykXyy17M5g3CbmQ7DN3iXUGxzJSR8zBFfdVKyTLc8BAn84N7p6BxWFF8nxy4c5R3K4yggoQuiqjiqVVfJX5",
  "key2": "24bLdVMaBDxknnPK9JjD5mp4vz2aQKjyzhaQG31Wwri6JdJhHeHN7gJXSoPKjHeKZEC8YS9yQCo7xBMxSU3afL9B",
  "key3": "4WdnzbrCy9ubPLhMUnxxxybx7eRok7HQRCFUhgKGXvo8LWeFZaGbh6qENqSB2dKi6yoaFzBpoo2cbXL6uVokwKDk",
  "key4": "LiJNS2BQHksDPJHtZ9pe7FPa78UmLcarmY4NLPWSgPupVWKUofVzca3GvNZ75Ay5LU18hxvTPGNrqrka42ZFxjc",
  "key5": "2zQBQNkDwRigotxF3dj1xLXCRYJVfiEbaJrwHd4NRrVBXNfBNQVH3Tj5Y6y1Pedr4cr4L1zwZikWgPHuQ3vYhAkX",
  "key6": "4UfigwauqZD3KVuUfWepp8KhS8eLwmHKdev6u7gnjmx84qERD553QLfvRNvnbDDGDKd86qwWB1j7VmQzB3oqEwTe",
  "key7": "4Jkc7w9HNicKt2cs3dXaHqsq1VNGj966ioBGhxNNW2tGDxJM7J7XpTA4p2rMjJHhnntdfcHLaEEsQufwnuWbyPUM",
  "key8": "Fk3zgLJwrrNjiKGuqPCYa5LuF7yLJpejRd69rxnhG1hMXiKyJYm7pZRYdfBmddXvysAx1j52fcEytEY1YZJArow",
  "key9": "5otd79Axe3TrQvyVuhq7xjSyTFyuowsb9f3F2YzJ6D9uhpMUJf3onL7FaGS3YMmALVtTWiwY1msyXJzunF1mY7GK",
  "key10": "4sZcr7mKZJhQWsL5TA6sLC8BN8kiqQP924pCF3AX53PrqZAEf7qAfFaFcvRFSAohD8jWBjdU6QCnMWPCWdyqRJ6N",
  "key11": "3XTyNFSD1w8jBtCcRqUF4C2b9jbvzHCc3fxAbt7rLGvGvHdcYbHPFhakiR5E4Erhxr2kGGnJcBNdAybAFDVn2Gva",
  "key12": "5cL8zJAVdU3BKvW969RqqZ8dYFaTWs2bfRz9vvyMAFZtAUJVpnFYZc2psaDRuKbnXgMqJ9fQiHGNydKZHrDGespe",
  "key13": "2F1tLH8PkCVd9qaSSbzm6vBHQfHhPr6v8d3aZqAX2M1A84Kf9Ye9Jf48MqhzMrAhFNtSS8aGfqTJ4ajjyxRPctJY",
  "key14": "23E9DV35pTni4rdwzCY5MfYAv1SbnhtTUBgYXvJ4a5y83695KpM6V6mUKXH3NSptqnt8MdLHyz6WuNZuhMtks6Nf",
  "key15": "3KjnVxG3saz7CSHLtFyD3k4A9cm25LBjP7L2Wk4ATtWcEytBYt7aAcUV9XAUeVD2rhNX1xcAU6VD19DBjdNCSnUH",
  "key16": "2YqyJskoU9ASKQk2HvBbpekrZkvkCCWuvAbFeCXWiBSBHd7ELy4yXwpRXBhK1kTfWgqr5HvgWXyY2SisjnVcwH44",
  "key17": "5MMC5GCDG3oBbeziatR6kRW8iT9cSY368KdBG5fKpE8BM4ZSn91X2Buz7pZgdQumUoDSs1p1wCB7LGR3CWHHDLVd",
  "key18": "3PjsqY6UHF4kiehX4p2tvdPrEFcZtuVyLUrQdSgeRZRhJ56bRZ7SaPyYWMyVBaXYFDU8zzaJ4UvChevYqwkr5v3j",
  "key19": "5Ec4EsKXcfy5QkQtZ2mpnteYB3nvs1ksX7RZQKm8ngztaNYQz5p3TX8q9iQZNWwbbNcTfK6DYmfHhymVQz51XFtw",
  "key20": "54VFUFn4ArvAwVGBWKU4QAKtEjSagADjBsY4RuA9tFAkFctKP5ezWNVQQbyUJvAzzuc9iHh86NyDonFhx7wXF2sb",
  "key21": "617AF9rdVtU8FDviuaReNVDfg64t6NbGduS5grpwCi4MU68z4sXiv8m4Ef3X14D9dGTJBz6XQLJsgUbQvSHvRwjV",
  "key22": "2UzS1zmKj5JwUSTPdsAHgwkSaQUwahnXTwhy1sL368TSxyWP9AU33YQ3vw4KHUeTsc5c8EKzNBrgPBuZV4t33Ex7",
  "key23": "5w7b1FQej2WeVNGEnS1gwwbEBgkyySKG7dAzXdAnPir488ccRLmtN2qqEVC4ELVNGXuzdxLSB4ErgUBc7AnKdzfd",
  "key24": "2BYgKx5ZEd2L7oAeQp1fWejND5FPKVGTUJFgKHtsxnT6GDG5aLmxGmLyG2rcDZ2mBsDUyMZbPXiZBQrpjiqrHgou",
  "key25": "FFvZ3FsdwqZy8ABi2vaENwSkyPCh8tSvSde6y6tFXwJxRTbencHYHSxjAiCMfvsUw9vpc2ANLRAyBQ8E8Gmb8eE",
  "key26": "3xGu7jTt5XEZYVKMs9UQHSCGbmoc8UZRz4iK4pJQVeiT6pYSTuJUwN8CiVqguXqcgCkjEtPsdsEhRWXq6JJ99PKZ",
  "key27": "379CBcxsuS6a2h1REPx6cAtMRHtHmbVKoos8adx8TSPDwcUS4dVXUdvEtFkChC3JtAY3t2q4z24fnzJm5h5uxLAB",
  "key28": "66jbPue3mswMHKmLU2Gp4X797FAXdzgMEgSvqpiSUbZJbtnRAZqKqVam62BznHkqDn8awoX7EXiJTNdjdevpNycV",
  "key29": "3szjXj8JTnkxHwWEy5FGeLC3ygKuC8JhrAnKC6zK9gFx3Kc8MdVKSZs26qiCz56mMW1VFMZ69QgmUuqw4qaA9wvD",
  "key30": "3GSa3tz6Ln7MwezUaYxdACsLfNaXgFRFRNQhksn9EQ9PujvA6fnLhr7fJWiCpvCahVwQhEq4Bmc6F5Sd1SbfTkEB",
  "key31": "2ee9RqHosaSqtR1mVXZcYqZTzTSq4ENyaKUHuHbPfHikGoEWDYtBLztgu9o1ADqdtt7ANsMAqRe2QDmfQBy6JJpk",
  "key32": "2qd9v7Eard9XmWPVRAXtoAp5gzPaLaTi9hp8G7aVPQsbsDy428twW8cViHFte1TdaLKaxw6GMNy5PtiXMC18FXWY",
  "key33": "2RJ9AdE5pBAUAvSpqZohgh3a2x6AyiLifX3tXeCv5gFm18e3Ksd7LZnZtVYxP3e5YKcN8w3Eo74bVQboV6XcxrjK",
  "key34": "29caoMiNWRvEZbtNgaas1F9ov12EKqrBS7BHYWyqfyUX4JsDdAnKjVGLk5nwj6C9r7J4RHdLsxHSLo2qF4gXCJsB",
  "key35": "kqvkXggFotBmVcULmAGj8eZVhGNo5vm3bwUZmduAp9S5oapZph5j8KbRcDJvVuEkfnP88ETaVmzfaDWpwgrJAuh",
  "key36": "3MxbZMuvcnwEn7p9VuZytWnD6m7vZG2NMsxSCdoU6rAgvy3zj5xF6BBUoro6WT7jARRTQSmqJvCCw7PixD7nGejZ",
  "key37": "5XPuXSGEjsg9G4zQrdqFWXTritwKdToSnQC8i5cx2Abe73Sd6Ts6pX89pQ2pytBJdTvZ6CqgdF8rJ2DkAVp6pbF4"
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
