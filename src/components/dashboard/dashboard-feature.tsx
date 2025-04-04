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
    "q3dUinL83QcnjqR41Y2K2BbTpqhjTTwXoH9tQhrbh8LXnoNBEdK75RQaVbTUpvRMgDFbfYYr8gjQxCTqxS8Vko4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kZiuQEUwa1GBEA9fL7AtENx9BhmFozSpsNBVUFwbS5ZJbop9g7Bo4KnKAJ73VesVc8Px8aVDQ6o95BrjVPovyjV",
  "key1": "3dK2QaH2snynEh6daDfXVqSVmQk31BjvpbqfDoQreVwmhPdjUmA1shpJE11Gvmrt8sh7SwzipfatY4zQBoRJgQkE",
  "key2": "97Bv7o3Dpko3CrM38ByYBDhcTuiHcd69Bt7h4knqhCQLKCjLmjZD7iXk9BSJnbLnaG51StJDNUMVzKPm9RQ8FZv",
  "key3": "4636jCCLRoUEwtc6WbG55itomvgb3B8DhGC7AiNrr5BSZx8FqUtStSRsKi1cCXgrc6znsprQc4dG7MHJHA7mAvWa",
  "key4": "2yZcrc6ePZRmBd9w5sidkFZHKmFhG4phaDC3DdyjgyQwabo8MbeKGx8vUzhZ2P1QPPt1WPTSDePR78rhxbSXYZg8",
  "key5": "4oCoiKNATbbiwmh5EhbsjNYuYGDHvVRY5ocFtom1B3FsBVRiDfGbudnF8yvQiuNo2ycDNk1UmCsUeTp7cX4HD8xg",
  "key6": "4haWFbqk4T75MDPBh7DweiigWuAQ6Q6JKBKkZthPBcLSmMHRnre95dcrnq2zbEL5zQKJZ3BEg3BeriZYXz3zYbHf",
  "key7": "4BaKTq14dcW8BrNhE6oDCa6x7zJ2TGdwxX36uBZtsn6UskjYgQdm8mLuN4Rmdoy7kEN5Qz2Eux8MZcXDXyMmi4n3",
  "key8": "3FD89812bZD1LPCDfpzK1SgV7irCYmehtaYymzgYnyZGxunvY4KJCbmNYzdxR3yGHJeuSx5kBW4NYMo3F8zHg6Bu",
  "key9": "5tQYZXgvs1o4fMNZdaNKQ9nXKDhPpk59GSV7QowYx8RYZcE6YdUiTbXXavKXn5rVUBopp6wyYb6DQFHvgoUZUpxm",
  "key10": "4TQSo6SX3C7sKLc5udP3EVWEfX6vc9FvG7pciKWT26fWnWPsvAxDfHyiacaULr6bb21rFof9VHFm3k4hNeErkd2k",
  "key11": "3BTztRRGsvoxxMqet2o7PfgLcX3H9zFbDDYucioujR2FxENvsa5Tb2LKffDr1MeTsicbfv831M23Qc1i4FvFE8Yx",
  "key12": "9VHEWNcYQjzu815zkAELto31brWgW5HB33ZsVSeQdVPxnqwQQZwJjS6JLjBFVSh236PaQogqQDLZvwRqJ5DfohV",
  "key13": "hDuuN7eDo7cSYQRg43bGtWpRmLpiqfBtUyxQSXwMkMiGvtDEEr3vbASBGauvNdgGJQwJvHdWrLw6p455rCwDYei",
  "key14": "5eeGjdTrFw4nFvdMoGVh8gs9XAvw2whSMvcc37vFvVbVxHpdGdaofGwzmRsprgA1NZwQZPmWuPAZfEzeLr9aXW2d",
  "key15": "US1M9NDhfNk3DkE1D68cwWzD4XwaBv4LiXQAyjEQqbNk3iQboFuQGLG8FeeY4t1MLpgYaZyY2b8SEifzaXxL3Va",
  "key16": "2rgw3PyXSaeQn3LjMyqrkiLKPsNyaKb33HvTsGZARpf2d8CKadAjPRPcm23GisvY6a9ZzNiN4nFzjyq5v8xygiGj",
  "key17": "4xR4yc4TRnDdfAmH15WEAvRbfAXZhZZDNMK28oTFQWgsXkRVnKdEQ9cQSygpEpxEJHeg7yz1AMvYR2sjySynL1G2",
  "key18": "62K7g3tDxm3FqSX54sYDiPcdtr7BdvLipkDFPLQqsvaxM4eZh4YPydyR5ceuQpeHrdVHZU9hWSLLDmjvaTdPQBQv",
  "key19": "3P6NftyS1S9S8Zk1AZEjtYu2n6Ch94TmMWg1WFVb943LBckCtCjot1anLqgDvWht3t4wmcDfPhiVSKfGEwvYQ47T",
  "key20": "PLHLB64JW4qzZVv76H3MKva6BEtvHQfgD4TneX2r4g3RMUCSZf655WDZc9WWgZ2KYqe3878C1rijqJn3tPcwXYS",
  "key21": "46pprQTgySncQfAmFuTKE6tBzYH78cW9FHMMguVxGphWLwo7Hpgj2UvUtCycGJnc26xDf5vLwu7J23tufZmnEQvq",
  "key22": "ECCwAZbqSpChSzQvcDyipStuQGtRXQ7wxA4zCFNLrr8qW8UaUTpB19SD7SRoVtz7vn6otQWfAutZdgxQJgrYmiE",
  "key23": "56XBD1VJWvXcFeWmnMBi3qYdkvMcHzhYQVcDGXVRUNyRD1cgVtCoq7t5Mwb8XKvaNKBgrp7WNkFVya2oAVNJHnqo",
  "key24": "31XtBkh4hSLWu6HQCwpbyjGpHJDypyYcFkKopb9TZ7fK6na5kjnvy7pWRCNRG4n4V9gBgyQSwuLeYSzHYMBZAcj4",
  "key25": "4wcetfgFYzCMZVPQuHViY5GmuPvpk2jgAhiKr1EJ1duqSrdvZx9Kj93CWDE9D5iVhwejydWdfd62HvSwkyuANWdp",
  "key26": "369RLRzNiSJdL7GdC6UsA8q7th1Hu2CibZSnrYPPzjepkcfQYh2eyfbLJYWyKWa9CTk7pBGnQ84CeXVJkUcW9pdW",
  "key27": "5WZpYFRKKCodDre6f2TPMTo7dcKhQ1onVSbWw9bZaV9xBhvuoQjS9eFge5rxUvuFgobDa3eDiEDRbSL9ewcyDB8T",
  "key28": "37aJPbmEoTnDSMxXexHdPLVTpLvSovWC3R2cSbdK4zquLSrHbKPpdaw5AoLaPCMk8ejYSW2ZiWLBM6w42Xd7eqmY",
  "key29": "9Q15osc9ZB1ZgYj9M861Wat5rsWhA7WieZJRtYdgLsMqN4AnkEF5iV9zL5nWmNUob4HYfs73fK4uLAhB6eVXk9y",
  "key30": "3fFjcqxYLsVaPmBcxuWXKoZcuDgW4WGG76NC9YUuRAXj31KPK4URoYKfmBVDknwKBDEymg5Acz84tRaiw8YSzEzS",
  "key31": "SDnVQtq7nDw5yWQ4dd5edgZdwF1wao7CbVzGhgtY3ELd8qpVZU2pqFgbqc6znK8Qd2xhN3i7rTjvSdW5Whfwsmn",
  "key32": "3psnBdjGpyuA3HiU3mpMbN3QtigHtjoLsTCPr1soHMDpGyhk8pcd9QK3VKwt2T8Gzw743c6HfxGLNL8KX6fxKK7i",
  "key33": "5TFriJVckxioqiA8RA6eD5U7WygUobHLm3SUHZkF8KZURx8ZMLt7WsexKpzzCxigfpvhqWRbWzG1Cz3DmSP6bA5w",
  "key34": "3NSdSoMsGEnEUgATjNfLvUTE29cTHY8Z34LZX8xVGtcudTM4QVYf7nQNu27d2cpgaTyBPMkxmLexnSUhJSKmMMJ8",
  "key35": "4MmcGnSnTj5FN3rVXbDnkfBBJ4jt89ZUh4E5HUYHPj5RnE93VQsNbxdTjwob4R8qsDZzWdgqx9ciwvQLUXQ9AASb",
  "key36": "WxoEgEpzahmekhiuxBiK7Uftz5iYtmHcY66kXs5VjcfBdSfTzABTt4r8Tmh13NYdi8QRxmJMKNBws1nFbWk7CpB",
  "key37": "NabuSb2nC1KG9eB6nKojBvL2eP3p4nETtLNGnCwnmWYwjfNrkA8UhL4hRYYnBPdCgQH5Z6dC4zZVdZMiPEFdKpH",
  "key38": "9mS8ekCDvJspxoxqL2rFkoNXjKTk4XCqJiqj7tPchC66RvkCasJwsFCf89mEgMWhUCgDQzdePuvxpXtWGRK7Q9j",
  "key39": "jqPP47FRSD5qkiipQQMz4y6wkMgSMJd5JrFo4XdPXcYDMR7tbsGAK9hfZqbH1opMCxuERjZufEGHhYDro6wgY6a",
  "key40": "2AyDZrD23c3nMettZgDYYaxCMdeTnaCPt8mZo4nBT64Q3nuK6Ya3ZEFzKqH5uSGyPPCRASxwLojhMWGNWsEC5KVn",
  "key41": "3yasiur1tpMxcGyLfhPD7n51wuUR4zxi9uSr9gJWqpZE7UontBNu9rbULKcRnTpnk4bDAzmKE6VWsxtvds7UzBUi",
  "key42": "4YMb97eFrLRWPcP97zJdzmrL9JBDmLQ1ToScWRFRA6aEcFY9A2RZocQKkUgDj4X66zHw9uXWEBjTKfMTWpmYuhmt",
  "key43": "3EERXZ5S4F2jigTqtk9bJKfx9sxixLeFo37Z4zJNJtvgqN2caGLEWfT2vVfEttbT2EMKANS8AHp6kWrZJqCWLoKo",
  "key44": "3zf6wbW8NHM5T63rmkr9bw5jhyJugYvHKx5RmZApsN5JDUn8PNmSGVCBDHrkkZWR5JuYLc8vGohhB7emmke8Zq6y",
  "key45": "rpDUneabjngUw8AEJyRWsHjZ47hmRGYqKUDNJRAHSMP6s8SibzXUyprXKwQxtLD8NvQ7Mxr1g3wXT2Q32rJs4nL",
  "key46": "fLLknidbcMKVD6qqRdp7yTkTPUmRDMWWShowZ7c97gE9oVZB5PSAv9oJRdEVTNW6nMfqmRnUS4qn3UdxMg7PqKs",
  "key47": "CeL1ApB7uW4m8pzoDDNLSwQEaNjQxgkhQpBTovJZba7zrmcQNSEVVHEksHhkFspoaH41dfFSkAnwqDQhi58cGmk",
  "key48": "zPcyRw8jErQMR9WL73KpJhoBTi5K2Qfk7ZytC5Bzkid6nrhoDPs29GjL5uSsaJQqABGkovoapnxEpoRz1CaMyE8"
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
