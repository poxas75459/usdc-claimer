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
    "4MVG22uajG1KEA5eNtnezq999K2dxzoRNrfpgxwjshJWYN5n8qR83DgGNCL7R5nt5UJ69uqH8hmKi6yfBEhujYCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b1RmfA2ZzpEahjuuWDiubptnVa3BgSK1zVymqg2tu9869u9StHXaZKAiQMu2cBy2SC7V4hQpshbGMkQdEvTbMZu",
  "key1": "2VdPuDDRG84o4XiMkRPhSgaxDxY5gPCozQt4ZNR1usL9ci4573gJbynxDjKT2DZ779hnV6ibPcTnnipHYu5J3hSM",
  "key2": "5Yw6c3tFi7NY92utznJ8tjEMpvA5mvPP7DBXiCZ4EiF8uWBPC4Mai1f4uWsjwX124DSGynrMve4g4e9JB7Aiuc4J",
  "key3": "2xJgZCNEHxJssy843BpS8asDPAiMKhXRfXDhqLWFw6Dv39tgkm7rJpJrqrSnaVTy4LwoFroairPEGRFEmaZUy1f9",
  "key4": "5T2YvahRftGemixqAYmXRyCcVPxpKnfqzGdvT9a5dkXsuKM4kZjvwd8BUBB12nwoh9wBuDCURcgTHnR6hTAwMdKX",
  "key5": "2RYTKFqZX6E7fFa4KhMwRsBQBuqENZ7FfEoZ7RQb7hWTJwRsLrQrhAyGN2Wx4vncEmFkAGkDZjSt9dPRWGKfbzcj",
  "key6": "JRpdjqDwMj9rQL99gMFNnekYUeJxd7XHWp5DjMBov29n8p4Vz7C7TSSA8KH8dvHF1mAQmKG2hSJQX1huUy1pYDR",
  "key7": "2zVhpXqHHCM6rLh3csruRXMY6c9kCKWxWUVDzqHg61PfSJ9spKoHwKH4zRASsQT4ZKsLT7txufLH4Dy4rWSe69Z3",
  "key8": "5WEYdYWdf18GE9aVCMCPcoLQhhXnXWsQJaQEcAgNYuudKHoecgBadNeLZyWf5V7KVi9sUcnRsBQLk4e7qde1inwD",
  "key9": "fi3zbSucpr3M9YZBAiX2qDEqd794GJJ4MMq7Jf4y17aeTce7XuJFsW8AdP8Qdoy4fNGR5eZyeRwfHqjvSRF8XpD",
  "key10": "4EWZVvCmqAibAcMNFgqtPQcksNk8HC3QqbpiXPkKD4BYQcyHKPxffXg2md8mDmf2H14rGwyiyE3Vs6rgM1mciF77",
  "key11": "21Y5cLAPFPRZgpR5ehm6AUVNtjYbGEeLzPMkwTxLEeZbMx67YnhDMfcKncqkzoP8p552eURQNLkHujCFeN5KduK3",
  "key12": "ujNaKUJRoSqpPaMGNUszg7Uo6TWpVhD4tQx8RxC7gY6MSs6ZFfNoxSrLQWQf5yqrJ1JB7HRSVRr94FuYwEJGbi5",
  "key13": "46XKLiojymJdLbMDcjMNj2LD3M646hLNF7pS8U1tyhKJDFC1fUn9Qwx8t631ZR7qhyMZ6efzFug989gZ78Lor7Ms",
  "key14": "2dZjokf2j91qd9CoZPMQZSEFkeZTT1vLMbwfGKUSgjzAMhNjuUgTNpwhFKzpmmzf948xZhMqKYj5PRB3oEU8FTmD",
  "key15": "BdcK8dmC4Yxo1xfEMjJW5RxGyfRh7Vaq1UyesxrcLydEgUoaq39R521Hg8cEMCVM2qrkfJXujKhpyVEeN6Dasjm",
  "key16": "4DGYTg8aGMY2RkWcaW3uyXtAKC2sEEZsDWYn7P7KHGYNRvzhRtEcDrvecmsThmhuikGkrBBhYiq8cM2MRWfZUuJJ",
  "key17": "65KPuPepHbEgcQ5wxG1cvUWuxJAhBHSUmCtABRMhrMAYWA6982c7fnTFGN4jGEkmxKwMuuc9YrCrybZ5dpdRVksQ",
  "key18": "2tBVdSYUbHZ81Pihxfj2aYFW5WDkuxvTTfv3hrvxG1GNqJnjWsVTjpqbskVhJ1xmaJyHtbko8WVXLUCTAf2DtTth",
  "key19": "55HKMKwW7akPhbCRMA84qy9xqrfvYxNsGGsQM3DuWNbAYnvrRsnXSYixphqx8ue97GE9Yqn7sSWNWsrWxz476dgt",
  "key20": "qVRKrWxhT7Q2QjGLnqJvCFY9jAnZ7hEof2rAq39oo1neep4dSjHYbMrkGjx65gpVBVeXRELCBs2sV1ZtuFiEi8J",
  "key21": "5Liuv8uXwqctYqYWXFH3HE9obZSR7ubhMGtixTDaeWAe4TMFTyzuE64r6XXQuEwpcBmF2wBxuG3bHDnqeTBfezJn",
  "key22": "WzoSvp4vrGfMf77WRhe5Vvc84ck14gbZGzp9rPiM6BaMHAj48Prgb7m2i118gkDujhL7MxFKqiJkwQzsVLm7EwS",
  "key23": "3NVjyH1dVXeCiU568HaRQrrWHiFxyKgfZ1Aq7s68A9k622EhydwAZQmgSxWSYR787XB5X6DwaL83Hc7mzgZp6Pdz",
  "key24": "5HsXVQNFjbJ6jNs9mCP9L4ApTzJekTji2XVucufHEAb8Q9pMb465oMVVidkq4y84hibTjPfxftrK9xKBJs6DHg79",
  "key25": "54R7U2JKMQeg8WYhgf5goSevtuT9b6jyr6giRYaUGfjDzTy2LqUECwstMYovpjDwrARWsVrjeAKeRZfnX7ZkmUF2",
  "key26": "3JVjubM6YNK3ogA8PTxKmqocMYcMBSqCHyVA2QNU2AxrK21HRCUL8yFqtScTidmtLifuNGQKmi84HyYpGz6XJpnR",
  "key27": "2sbBRRWsg472n5Aw2q47wRuvyADpBUwQYay56nsAgPVHbcRfudy6S2MtkQ3D7GSCy9uRozNKz5wmkDzFbbwrexMu",
  "key28": "5kw7WJhAY3nBYNdP3Uh19TTjAUhkC9cWqD5B8PkAXkA6Ham8WASsfKB8gTLCu5f4v3yWkzda5HMsanAiXNJJ4erV",
  "key29": "3KAHTDCNKXjwwueqMcJwpLCpnmwMPRNrUEmQfEw8eMPnjQ2KW9GMeKn9Au2H9z1uhG5Pm6Fdrky9u3ZPo38TS9Qk",
  "key30": "5gHcybtGUiLUmgvKQD3d4EQYfcMDrQGktgqqYQUqTg4P4DwF1bFhdA7WfFsaJNmZuW4uii5oAMbvJ6C2V9BVxSvA",
  "key31": "4iE2BN9yGnJwVBpc9NnPPR8ygPFWkwXfoTNj8PjDzwzfQfxsDMRRysLEY9JChKn5WAuMUm2kFv9qTv9D5NeU37Bf",
  "key32": "4qrbxpRzX55GDNzSLEunARmQs66poK7axwaifrQxT6Ze4TkLUSZYFcAZAdyuRThxRh7z6dfLGNYkhBUWXHDsRzfx",
  "key33": "2qqQb9LspGFeJLqsMSRKyuvSpfR8XPg8GBQnYACksSKHUJZV1p9BUGzaCgjCG4FBcezsSr2jCpmEuT65fz1Sj4M4",
  "key34": "4GxZUjEmcVe9G6qrv5fj94a5VqktiGwE4XRwV53WpkTmkmE5g3MCoAAuwfnsbphAjhAjEMj8uzPPHwSE4pfowU4A",
  "key35": "5F5zVBUeNVZKwVpynjXEVZp9RvaXxCKCJVyDXec3FvfZkEr8etQ5ZAc6yZSfK46oUG2xLy2NKPzZjqedbGCwtFDi",
  "key36": "5Ppj53VdFYGKWe1D579RsAutKPsGxsaRqd19qR39s5zVe653EwrTz39tGwEbQTVQG26VcpEy5g55jUpPSR9zYN5h",
  "key37": "7Yvxq32h4i7m1TmCR8TTtJoTqZgu5KcYWPxG5tjSN1LxyVQG7JNrS5pCm3stPeRZGhzk4yH1b34FqcPcfYbEhsE",
  "key38": "2HGRS2yxeSNB3pfjF3WpYG87hyf4ftfdH1eAWvkY5Yvw36ZSHmdNYL8SkqQvYNeV5qWWvDMjBPvcZsdWdSqX1Vc1",
  "key39": "3oYh4M3mw7z6T36emSktBbL3mdAnp5JJQAC8AJ9WzWTpHVTvDD71Xvu4NaeKi4EXzyPCSNEobuyHZSwu7KVvh1Vz",
  "key40": "5qy9PNwRpcwnvWRhDKRKFegLU39FFPCkJXDve51cGF8sX6GH2GbzwsiBcGSj44jFC7g67bR7YKwqJXEzpW5v9bp2",
  "key41": "3k4A28cfMpNRnMTVRPJZ5WWdYsEqMu8n7E7R1xAF6YsxWNKH9SVPkcXqegH9LoxKe6qHPhQCozoTsENfhzafkWcN",
  "key42": "657uH1cEgx9sXEnk2yv1PpWtnaBGUikgtwoMW8YPgdQp72UkvWFHLWLZZRz8yAdPqsfb3egTGbyq9wpatU3K8A9a",
  "key43": "3uyTZAtPnrp6cefQNXUoamMWGx8tPrTQigMtnkqfezm6yBDLtrVw65QGmPmpxmnyUSzdMDqm7oX3sAmf5EZ1LD77"
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
