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
    "5FZ8PVkC3d4jXxVUf1ne9LKyndT5ttiKCD5BKZnuQKfioFq98MXvkwEqsbotTAofz287JmEJXsqQj3hmUArVV8nR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ov7zVdMeBUEKW9Bei4ci1Rdm3WAUK8tScB1a3h16vptZuLxzt1UxixRrdmRb1rJHgE2CSJjWMbL5TUcrcTqv5RK",
  "key1": "3eBuszoCN6Mg53inpXCdhsapGqJnH29z38xo3GX8H7GA4UMVdpp2FCPkkcyrxWj5Mvno9D6WkXJvmk3U194aoKWA",
  "key2": "3s9ZCyror1GMuNMTufYdf7cfnyBYeu13PKKW2k2SAVvYdkKmHV3Z4d8ZCiZQC5RP7eaof9NoUgHFbQgynXv4mq6j",
  "key3": "LQ4dFwh4vCAn2qXW7fLv9Mfd7oiRjgMw2wrfFyQfbK9X7fqBQnFgbDT7Cd5Y89K63NRfSQVCKpangm8LX2tXbdx",
  "key4": "NhrLWgYshvYzzdcX4nH59X5CDpKEAZqGTSJqzwon3yB8XxDFL9AAJwzHLTXCbcCSpv6f7q7E5bAiG1szfHa7qUh",
  "key5": "4dawxYmn4wSPeu3v6ja5vhf5dJSygqYNZJUtnfXvLBdsdTDjky9UXoC7CGffWHYe8TNyef7kJDyCpzsDHnQ8uWrN",
  "key6": "3dLiVtm3WbFr7cskBnk2xqfPoXNyUVVGT3fUwQZgyTFGjDPswqmHe77vqDJpf4fk7sWMgJN4J91Hef49YzQ3KVUM",
  "key7": "55H3YrMYw7mkNBk2aZrWKiHPLuWxuQFteUsWysb9Gspg1YidZTWEWGTumXngunfDGhMNacbH9hDs4kt6dzazcmr2",
  "key8": "5w6bRnpPCynFFPUpUrYkr2Yn5iGN43zcA8obw7KzdG5hM2PZT4L6ZUBJPcv4ntbPTF5CWN82s2aFBHyLiwXFGVBA",
  "key9": "sbWskrqU9kZevrLarhtiuhjAck3p5hwc49uzY7rrQWhHy5Qa2KMJ1JgDUHUpyzJv98AKreayggFSJWyVat6sHFR",
  "key10": "5REEHhki8aisa4rQuopcRU13NobrEFBGvWDJM5oX9RVL83Mah1gxRxcianfiTUtzs89pLq8tf9AA6n4aGNt9HAHC",
  "key11": "tb1kdh45D5yTfWJ7B2BEqkBHR8T9J7fk4sjs7wqg3koxmqTLMkxbYZQN24HnZv7k96dv7tgM9HugQkt4TqrckfB",
  "key12": "GdpyZK8XKSx4MJ7QjY795Zr87oXvqDtjSG5MDg8aNntnjnuXxoNPmzdjCCHPjYmGYd1bsxnb6CUF6URiRarG484",
  "key13": "AThBMMvY3og4AytZEd3pPpV5jGWYpNi1taaH3YowdcujysFZ8D2cw1wBme9ZnxVB224VsXcYkRWG6stPELGSmFm",
  "key14": "Km8bVdU6qLHQxr3BhteBfxn9rfUYb1YP3yNNSy2LeauBWMcgpP3ZuVD5esrtWGStRXXG5vS3hPKuFaeuRaWkCEw",
  "key15": "pdkP455e3E7NwnK6vJnQLyyejZSKK1GvvKpQgSFDXrL26TT7RoH94QHLxatcA4Q994FWUHZVAauB76TGAyowsYN",
  "key16": "3L6oLjQK6fvep5AYQU7vD7VgBTSzCzCdMTtRj2N8Vziru4vdBCnj764pdbKjn5c75u8uQZKiReteM8qJqfsjEhtm",
  "key17": "tqf2VZHw5GdmWLcmnBk89kChJNALLFs5bX8gamdJncGsQNM9An21dX3vMQbi1RgKDBKWg28cHxie9Gcb3krngPu",
  "key18": "2rQZmwiEZ9qPUF6N1T923r22f1yQizM1Dxxt9dwFsrjtSG84GF577DdYdoZfdSRsDp3Urtpw8MLtWyUcoRs5qEaB",
  "key19": "2ce5z7awbSwwYQnYoTyQzACQzqmBFh7uD6JGqFYkMthyBZWrH3RxjyS6WDXeLZP5JAhLKqdPfniP7VYT6fgMHJ1G",
  "key20": "2pGjVCts6SD26aAjQ8KeRjhap4dz5fFiwoFS4nPtZvFbdMLhBoNEvCtP6VoEzuaEpLbkFymsjDE8me6fxfGwk9cn",
  "key21": "2qs2Zzf4guFPCpACAWj2JGBdWGPRRGMYewc92UdbsFVaABRiVyZQiZ9r6vg9RKm7xrDdCuuaMqz4cP9ptQbsLfjk",
  "key22": "6FhEF22WRTXjbK5J7qWzSqT2uTJecR2H3B99RDAtbunGn3j6txKxVBdETdTicNnvHGHxRUcfF5Hw8PVZ9CvBH5U",
  "key23": "32AwhASf3b8TsyJ4rvMRAvaFJEZJ999mPEtimdwLjfSRCk3Z9QeaS2AT7P82XEhGHspAEHcK9x4hUcq54ZLHU1Ld",
  "key24": "9D9etAV7VQNJyithCzZuwJsSvy4BSbDvKoMNhfEp9DReEayHiZUzYR3Y3WbAiLLRic44V9L4MrAb5HkTKFqM81g",
  "key25": "3wBTuxeLvRHFK7TLmAHNyrT1y28Ed7f3LfMyJBS14zN2iusHPL2QM5mFMRCMR9N3Rkeeu1Jgebafrv8bT7gkzjk",
  "key26": "5LTrdhEfwQvDYwyFfU4MkZSuBQW7GzF3WWb75mTbTxtgjUmz4s2LGuuw7qfKxaScCJLVLHu92fK6FLQDaHK8i6vz",
  "key27": "y9sXiftFHvHzYLx5mibL5PMDuuGqNTCHRWbmRtgqoki22ZFded2hGgefQQQLAHiA8LppvqZgD8cEbVmAoAjEfzm",
  "key28": "2NBU6R834sejrDNpoGMkuvX9svEn4UfGnFYciGsNquZzhJxZ8Em4xANArP9aCBMMNpbQcGsAohmxmGNGiqhnM8tU",
  "key29": "2t78uMqEsP8KtyFdLMxnpYdMgwpq8PVMgyZyHCkQhMsG7kevuhEufmFgm1EZENGLEPWwqu6oEfVY5eUxDqJinrRa",
  "key30": "2hY3J5AD8iQDe75mpoMMiNTy3c7w2VABZSmrqR4M7aRSQyiF7Ufa4o4t2NSDtwFdN7eHepZece3cqrxHfu4RZk1g",
  "key31": "42Mfsd7dRNY23nqamGzNQ7PGJDHcnq71QARU185pg77AEPJUcLMcUxaDA5Kk2iE6NRecZ4WMdCXJkN5PKZZ3Av6F",
  "key32": "aNTE7pNuiVnkFzp39Cf6NwB4qjzCVUuBXQ61joGkUFRWXoEHaZnCB7iRTYJ5edjYfAi6FjPLfcNXwSgygybZR7W",
  "key33": "MA2dwbh2o1pRPf9kVCjvueW1JygRHKYG6eFyBrN5k3bLSuiuUvv6QpVYW2W4htettveAMngxCyCDQFZsuLuUb6z",
  "key34": "3WHqgQDuXvaiTy9ErsqumwZmoonQMmSLjcfm82YcMUR2vdpveJdSzQuhkVkQqKWXyg3c4jsng8ppJ4mphtbYsXMY",
  "key35": "4CEqFqn7qZD9hh76rLYQwPyxT9y1EBGnhaSHQLCh4FaG1mnsPSaeBwVG8wq2MjChUA3wGXi9ivut2GpwirznsYTw",
  "key36": "3XP6WQmV6SfGF7fZG23CHQHj6KMXSLCkmY2AF2DriERpPcYJyyZwawY8tL6rxm57VmujsPyT8DNLfL6H9NrsYCWH",
  "key37": "2xWHwTpwA1mUKqwrhepucMsy1Su9tDE5Eatwt665Ys58T4qdpETtPRy5ULqNW9DPwYZM9VuBvwvhap1BJakh3PxJ",
  "key38": "iM6scCBiRhyYY45zJiidqKZ9Tc7PiKrrghPCz3rantmTDb7oe7zZ2ieyepLzEABzwNFvaSBM8jeMr8qhuTAUN1k",
  "key39": "4QGPHCDtKPKhJyysUwq36Jx7JERbTeSwA95J4AsrdJzFQnsdbfgmBzDzJg6K6gfUq9qqNqhoBnNikwgQQ6UbinMe",
  "key40": "4aTRvvVvUYn8GG5Fdx7aVkh1WkDmcwVKcMsfXMGtXXkA2RV41dXSfc1hDZPxVRoZ76xgvyzgRXP4kpTStVS49oLP",
  "key41": "3JTa9H6Brg2MS2QpT5c6hkivLmYsc2MJvAE612VtTJMobdyVgv7cLgNN5Y7yPVyWcSe6xWNHJf4i8naa6iaXW4nR",
  "key42": "3pvbz5QkkVpFAnqg25wszK4bgA3ztZRXAATQ6cnGeBMuPcUvYQtoFqenHfGVa5paP6DiSYDs3bPna322PxLYfTtu"
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
