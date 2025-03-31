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
    "4W2N2MnnZT765V5Zx7ojGQyQ7nri9JD2WP83hvixaPy9WzmUMQFKEgUzTyPtxhf4AF44pX6Gh9vHRGCbCHjLV9Rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rt51vA9KugTURUaEcgYWEVXCYX1aHwGb2E6W9UYE27Y8VcouborctL2eE7kfMfAB5PzAqKknafV9gd3EygMY2ib",
  "key1": "5tALtxKucDVyv5W11eUYirJ25FdVUpSXrjHbQzHpkgd6ZikF4ExSrZwYWPDU7prBrKXDbgYPJwBJkCBjNzqqTawN",
  "key2": "5B6CteUdXQRinaAUMQwbFrNuMaGMenxgaY8oXWxz4CSCvyVLdWNXp98YuLhzFxNQEhpBxvma945WcfGeUbk6mz2n",
  "key3": "YvRc4UB6oyxBS33bBp2SVqpecK7rW5fyBZZpdxju98zFwkGeE17RUkRcKnXNRsDmTZV5pxzVUFebyYWCc86PNtw",
  "key4": "myGq1ZA3keVsqvTf4fxD4sLkx5QtCtj6DpTjbhoDvpYLKTrgZBZdXnxWNyntiFMewPPsksPunMMfntie6TRBxGE",
  "key5": "3xFpGEc3nGBbPJJCVS6KCqPKypzBXu97CZ1eoo4NUN1rFJb7uevga7FLhSPiCixyXYnkf3V1Ma5H544bcG95YqWw",
  "key6": "2bhy9zCeJcZSBSf43iaLNFoQomMs5uTthVFDcpzmYm32QF6UK6XiCKLykFK7VCJ5ARZhoPYPfLyyAmxU3wHnqUx2",
  "key7": "fh4oytfuqHptYQnpPUijPWHoxLiLWbt1U2w4U7BqLLWPKCE5ey36zD8XbNY6SNiaSwvpeYcjpDnmyMooshUdPRg",
  "key8": "3dayXJYYBnRzHmwxUbKB9zCuzTLE9iNYSyQQzCWfdi76so1rnt8nkRhnRz4rRjfXyHRavCXGRD1oHGeqgenXuAkd",
  "key9": "Ltpsg4Zwbt3HJJaV6raVACmQMn6x1nB5yeXLDXE4urZfhgT7mVxx4mT1Vj4X94WkwSEmL8MZfXwk4gLkNVqq8LX",
  "key10": "36t5AmtLRkGjgABKBWqmWrVM326Gx9HdbGZaDLmnTpxUVgNZnpNU5rJ7X1zU4HzE9tb77G6xQLwfjQs5SL9UeYKc",
  "key11": "3dRksTgNn5foyyapi2CaGdxvtBqdWFno1M6Mufu8YPoudQvvKRhSrX2wrvY9SLSHkajZUeNX1f1KDBbEz8ZFU3jU",
  "key12": "2f59aieixWfQqGtwonSqsr8VfPjdzRfJAxRvJ7xVmAZkqey8YD8LNisbk4q5trpkjxwH2zr2ao6i6pRR2teDiBdo",
  "key13": "yNtVKbwgo1mJDmk8KqdgqhNkT38UD6raKbbeHndsaqdy2b3Cemm8PTTfYnCfFWiaB7xtWRYRrPXBNW2FMvwxkZc",
  "key14": "mV929sk64jKi4kg95x3TCXBhoFeMnEpBDvmZmQifvYiBBHsBwEfVyDC5pU4ohRNad9h9v6Ech6HeSKJNSPw3DNj",
  "key15": "3NdtZA9hnNVwNkw6zojmRTCFsBNetxiQmRyHnAc49tR1SSasN2vyjLnDHs8ujDxqwXLj9DRBnUGZ8GX3Bjo4kz4V",
  "key16": "494HkCf5Q1hpTTaTdBgA8racQQAYD3UzMJYZo3BUyUANXrkg7gby8VgDeY9phs5Xcdv12S4jrytuKyNhkAW7nYRV",
  "key17": "3JYhjtPmygoEDiD8ktqRWJZCDyhMvmV9o5S9Gki7HqZ8hBSwJ2BCHaEpc68ok3sbgKFzPneAdz9u2oQeU7XcJVtG",
  "key18": "1X5hjeesch9oDjdxcu5eJKm8Fxe17MVB9ozozDCKsj4KZm6JPWUZ6nypmX1xgQrzW6XoXuqw3zQiTpZrJiRMz5o",
  "key19": "2XuUnxA3o6MEgzHEj2XtMxBGXB8w4wDa9Dh4Po7yBBmY8ks9NX7fmhP5Z2mNbBkWejbFkLq3GYR3oGNe1Sbn4hJV",
  "key20": "3pmTVwSLzHNVevzLRrw2VzmXJM7H7Jmg4U7JTwFJhp33mLkXeyEerwCa61fyKBFRMWv86d3rVXRXGf6nRQapCE9x",
  "key21": "5pN7zGsKeYFh3yGoWqxrQLVHumUA4GMLPYxMbgyz7SaKAGhQv5sqAeVrwc4k8Hm4sjabGBamPnWDVDyAe7tsPD7k",
  "key22": "5pZkB3zZXidsXMQzDJmnkECszms3T2ZZYzNjZ619ucDKLdAiMhUzWQT7W14EwGxhoyFhgjZeKqy4cK3w8GGt7s3X",
  "key23": "2KcW2j4NcCpNNQzaxB5axiFBqoZo3X1Pg7WsQic84MLLKd5zu9UQgAq1q3KZ1zGV2Vwn5jSBdwUAXKzxf4mvNnRj",
  "key24": "wdqMMrDgT2xstQxn1jMtuhvB5HsFiA7h1Q3jmVxmGuWmfko7bytvDNJfjiCQGmuAfMiJViTrR3ZzFif384FpKyf",
  "key25": "2EPZDYQxVWtcHEF9tYEFVuj9J7nr17zNSJVbKXxa78gtBc1JQ69n7jA18BR8yk7aHa7qVhS4CU4ThXenSL53uKDt",
  "key26": "3iHy5Jd25xq1an8Lkg8ZVam7ZssYYMp5bAALho4jMvtyCDfpfWxRWqYS6EM1vhT9dZb8tSNaXF7usqG9K9VHpdUN",
  "key27": "4XZJnqG6eG1Jspfee4ZUjjbspCWarQZR1V9k3qqrMsf4ymf6z7sALiP8ZoCYAax8Np58nb8bTGfkZzvnomNw1Xhx",
  "key28": "472kuffGpYWtsTZTGFajbssBWh4G28hAKywUU4G5GksHh7H8rVELKd84iMWYdhTSMwviJRmJnBMWKD2FLPqksAjC",
  "key29": "5xkJzBdxVpdg6PxXqWgctomBPknBCw2rCt61fXo9GFZD2VFehm6NtqpoS2a2FPshg66Zd2ciLTGGJ3GaauuU9L4h",
  "key30": "3yoZEYPE2muiqGqDgVKBvmwy2DKfmaBHWDjoH3JcBcMraFNYhJoKGCfK1Fdt3sKg4jXq3yufnYEXbskQJ2qzXcYg",
  "key31": "2dbzZT6aocZsXjVzUwt7Fi5Gqeh7td3cPgjcALzCeGKC2qq2eiUKhtkEXkKFZ5Lx7iccWR2wnsvceLynhgfSuJDV",
  "key32": "3di1fSaKdDALecLxkuGhrLVC6sUDUhxwmksXs6GoEB9WZKri8SxaubCxyD2vRwn7drge7tkdkkvgYcH5zzrBcwiq",
  "key33": "uRsi7iekmpMB8AS8fXLmB9xvCMx39VQ34jRptGqFp4KwNE9fu6KKJNq9iLvrMzrjL15YXjSgxBiss9ywanuELLN",
  "key34": "4n1dMRskevk6mDSCTc6k9c3zEK7LS7P4DibUCiTL5NsFbQf5HN5E7fJ4P95TtMgHNWWwpNCCcfFjoN6FHWbMabLz",
  "key35": "5gCogZmqy3KG4G14kqaudVAMdYJjkHtqejwZjTryPb16pH75CqARf9GuKtSmpDjziUtjnoouQuNWBDiPeenJRGUo",
  "key36": "wVn5QkcxZkVG4JcAqixt7arbsXRR6JuubzhZnEmfRrmdeVnrQUXienZa5CPXbcT9x3wj3kKyGn6Ms9W9rkarBTr",
  "key37": "4bdRdTtjBMQjyZsGLxN3RDRCDKMA4UvoRWaq3QX5gN7jJLvmmD56T48KUkR5HXhMTaPx75UeZPwFp2xgja8mGcX1",
  "key38": "2AfCFSzkodEkT6Ee4v44zMuiu33q8osAxiyDhnmgRbFcbowSejhMpPs4T5o9FpX2Tk5oegqzbjvUk9Gkbfcietdf",
  "key39": "Cy4iJwcpaqD6sEborvarycQXVorcnBgXbtM8Cq2qyEwGyzsLziF1qUZUKcmkJAbmDVqCFSToko2YikutJtjPrFk",
  "key40": "5tEy88mfej17MeV7fyanjQ6HaGYyY4sQJAdTSNvjz1d7giC76HZTJLwQP1FeCXHVnm8npPP1Yn1ZkyknjDjWfQ3D",
  "key41": "2zaut1ZCk34kZKBEN6t9VbmQ7yqE3VfYNvEdtENrokHDxZDUw54ykKhdd2yz9X4dJxKmmhAFAqcob7FtLxUDZVsh"
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
