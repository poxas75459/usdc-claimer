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
    "ZW7n3ayRHjcWitx5Fm4KgBqYx25Gmjc1xK7UBi6oMK7xXCDWP3FApVKno9NCZUitjgfh1v3XUznWFxL5fL1G5MW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385JHquxojB8FUpWZumeBFnuE724F4Crk9VcBC7rWr22SFipGbQPcEU3U1WsQZ2bR9KtvVe9rLREeNtHtpXDmGqe",
  "key1": "CVyHpktnxUmWTXAiTAM8sbyoCdHnAh8YFDzBJQ89cRz368tdaQs9gGwJ2g5ZPGe2z4gxWuqjTAbvpcZSJQBey9Y",
  "key2": "3cNnC2j7aHbd5zLqfoSLXZvBhVzWDAPZdAB6XrMdwhgGxwDcFYDSVvZZ5gy68pXmoXNq9YYA98HFcJUtsUPSznQp",
  "key3": "5RqJCjtXGqP9Wh9a57v3unGLXd96KsLKb5zmMuaFbP3F98SxeUihFdjwkGSr1pQ4bFU6RHEuTj8KkwyrAmXCDfY1",
  "key4": "3o6vWHmGRdFkQtnFcpVtxcGM8nKDDNFT1Nktpa8upfUrLbwtzXxDTxXnqJuevVjLLFeSk87QaZ7P7JxkjoHkhwWu",
  "key5": "5Mpvafukc4T9Q9X8m6NusZGMr4m6Eco3pEHDiYrN2bVWF3YmnY12mszEWEsLLa3JsxkytrC7QUGuajviLDXzzTCV",
  "key6": "4SgyxEwqqpXGAkRLnMfaoFZBdriLzyHmMxKHBn6dtZZuQAaQcWYrKkPGifq1uxNg5GqRAdAtH6Bv9zRSFZdqjfsr",
  "key7": "3GuLyCoQpz572aZdsVtWSceksSEwT44EGSp3GCJtHf7Z1QBC5tXvB4Xes1aWebgnCzZWPxxwdUPip1MXK5W4qLmR",
  "key8": "5ceKocp4qMp31vhfDQbBeBRQH4TdjSu9kYa95UvWofWfVnGXq8sSHkrVZeYEyz5ysptVEUW19omCGefJi3jpb3Wh",
  "key9": "2RkLYk4uoWxw1Mu7qxBW3GWvivARDG7uA1HNSTnMatKWyCHtYYajQ7qK1KWbXJNk51QASuqGRHDFFoicdQU1Jcpi",
  "key10": "2VWmktdVFeqT9xLKC3od2hN77WdYKiZFoF9hZKkGFunQ3kEucNdQExUyhLxt9oFJjbiz9uDEW4AuH6QDnN2aHh9q",
  "key11": "58nkzrTtwEeJRFxkgPq2jfHyPtwuSDAfV3J7v7K4BdewWwHBTuNWM68QthgHH1Lwh22Gn63c42ojZRkEPfKjtb6n",
  "key12": "35ohvUGR7rRENdfXCMFf98FT7D31kLcZb8W3EBV8hGGXDLvYMo3drrZKV82UvpXJwUYqx2iV7j9J3pkMbXfVYsXa",
  "key13": "25fiUFam4XQPWeF9UXtF4qLoGjFTWhmGSsCiK2XchGYh15T3Pna3gpMa6GfBewQrSjtCrgjxDZBcmDTLvavsqiFS",
  "key14": "4GQ4LtFoUTT8sTvckHxDQMGoMEAr7Nx8w45cYjcRMjvCmbtH7czHk92STpi7S7BGtrgFghC4qjUvVLYRwN6Vy8Xn",
  "key15": "3J6ajUjTEzvrvh6LQvW2uCRzJViS9DMtswyuFjHFCeoRa3wMhQ47V1es6KcoCacn4RQEqpcP6kNKa4kYrhZaTugX",
  "key16": "3RxzU94AQVKxUMUW5tnq3B5qvAutAE36DugVpzEoHLptZEDMHGDq7RmXer4hoLkn6wvXeZ8Nsu8WBMre74VuSyqK",
  "key17": "r9mQyLMfJS9V9hXM5Hu6TaownTC9hUpbqvgrxf5uXHdRanwGbHXoTiRpjSRkTra83ESbgrBfTo3McH3bVyvodtb",
  "key18": "2EWHtwt3CL5iQyvgCWFUN1NJLCzqmjBmxD7wQemDo3HUrwZPUFnXLvwcL36oBNg279NTa7J2tibTdpNZbXkKxHUA",
  "key19": "5w4XRmsF7uUe9n3Yb8wkagAbKmpjaiW5N7h2v7xWRxjAQFKvEwFboxYCFteyHztqH5CTrJnyPY2MRiM9LggLqPEX",
  "key20": "5itV3m3KhNYa94PunR8eg52iyts9CeT39wFqKigH8wAmhdVQe51hHgR3FRpmCpiSxPGWjdTDz2Bf4jGXQM9tNqep",
  "key21": "5badqKH32W8PDTR1ozhFvyHpfQ9M4wJJRaugcvZnhQBq5EXPTcA8r4JByhStPT6tGbtZwmcgmnbLV3i7nvKXi9qH",
  "key22": "2jpTfMygixSTAKuLp4GiAb31TpnKma2YyPbLXMMEMbTp9G6LNc7VP1YoLpnVnP7XLxS66cgeLfSamjpQaKtzg7Wd",
  "key23": "2sRkn6LQDtt1jfbzC2TkvoAreF11puJ3u2onXZ7WpKcZGt3AC17Fe9VDcnoYR3jo5SnpWjvxf6TsL6UWrmTQjJxv",
  "key24": "4EfD7YDbfWMgwwCYEqvUYQohQ94YoXpZBVufpkYvRmQZNUwurcj5fK2o8qRJkJxvY9TQ4J811k5QHJA3TYwPoipP",
  "key25": "24KpVKMXLqGPBa83jFxrg1n6qmL9kPxzhSAH5dF5JVWK1ke3xANRuaMLivX59BhVQHKaAfE8Zqe9y2qTEQ96ARmk",
  "key26": "2xFuwcc9EkBKifKr6qWeCERkj6JoyrZKhgTQZCpWg3u18LAqiK4xT9Hkwi26oJE9ThYAicP7x9PvTsMvf4iK8JZq",
  "key27": "5cQK5GNQEaZ9nM5rrv97jahktUVo3RjciEog73FAZCg58pD6WZ9b8N8NthwsiDZXjxPppkDtSNEfQQMSiuocWoXK",
  "key28": "584uU2iD2dgSYaz7HaV8KHUyncHr6wK1ZYRGKt5QCPCpC7zNwJJfxrr6ngTAbAk71Rnpduse9smazuc6ToN811JE",
  "key29": "s1du9QDbj2pBjAcN2Re4CtJrfsako6fhbHjKsy9kdNzHnr8b6S73G54taazbyB9esTBCi813uxzsoJpWSY8nEMn",
  "key30": "2xg7sbeKK7XR7aEnpnNmE9NWt4atgX8bP8V4TbLrSF7QeWQ7RsA86896uTJFt2y1mgox9gfRSPnGh1seSyteTtDY",
  "key31": "XLcNYPVC6Yq6wocD6M4CKY3NrJ2gn7jSohJj2zo2yyHB28R9Ly3adXbvK5ERgDzB6HFMnp1o86PXB55jNn9S252",
  "key32": "N6AADTmWkBn1XCJA21wgbJMdf5fEBwH2jZDS2NLp6ndqfv79zkv3EAEbdpeP3DEqxt2YDoCUkBGxGpBDvqzTmHx",
  "key33": "2WaghLpWkUMxVtCi7gNp6nqDDA6M1UERbhWThANtMBQLkE751ArERBdZ2TbSxt7UFkzAuTQhArRdJyix13cwFxFc",
  "key34": "5SUNj5MQf73Rgn73UqmTRwbmykxQGZPyDyRDTionCbB5gfGwXMrw7LMb2WPyeSf5grbHyEvgAznGR3QN3iYbEsrW",
  "key35": "2nxVt7TLvXA3YNJCLU5muqUejyxWqC19op3nsLZGudxEnLpZY6pVS9fHdDZSMA8jfyQywTMR4S6jYbtNvTc9mjKo",
  "key36": "5yjhaKL2UQiCxka77jfAJX7HiP6H2tfE13GUkykDfVRtNovWxhcK1o8fjN8XBue7tPE9Jqcn9stp8k7P4zBdQDsc",
  "key37": "66FPHR7gF1EweAYw5edjWLg9Su7ySxKA95YGRPsqA657A3o1i1U3wcSc5PRPXgwebzLyj8nXws95WWZgKPbgrq9y",
  "key38": "2yCvYCB4uJjZYPPr3vx3wt6F2pHtK2qzHBdEfCqHVr6NK6yHrVdnSz7mDx6U9Za4D9ERXBQtGiwndgB28KKFNuUV",
  "key39": "2iYwoHqStLM2QSLxjfE5knpfvmTaAoHUnwWAyqtMC1jS8fYwVSaPgrDihSQr68YFi7yGc1nPA2qUwqe8rC7rQPVh",
  "key40": "2coXhsRKLrQ6Cp3VHizVmkJBNeYCi2Pc4DZ2hP4MiHttvCTJNmMGNGeRmNSq2NyboJrZDeztmXrunP6jBm3fwuj2",
  "key41": "5HeBvfXEVoRgxybyhHTnpUeUhbbLyEDHu6rc4sdcUwuHsPD6BChf5miGtUrHBNxFUeLLanLcDGyfPFqwxNQqnzWC",
  "key42": "3A7kqja8uU8osSsdTzaweMVq1Wyktw4nD22FD1otF3jG8sLL82D4o5maZJ21v6Pcs4bN3yweWvwiwwQpb1g8pmLx",
  "key43": "4dgCp8Gt3W7fcwuXX49Qm6BwS91Vxer1qrFAMNvezM6v8Dz4bMphPDJkEx7JWXR4UY9jQ3g9g5e8T3HPa2EUUeT3",
  "key44": "3HSaave5ygtq1uLBBPwhV4h2YtWT4CyC1gqZqArd1y2mbKpDTYFw3KGAzjYijrpVvXAo3S719onwskn15jHPGDaH",
  "key45": "2dRcLFGPww4bbuVMzdxE64PU8Z5hbuuzsiS8j6NvSvkjLve2Xskag9vvL3LbiCexi7XdTTWp1BzWKyNrEgknqixp",
  "key46": "66BRmo6S9Wbk3bUifuTdhir9SU5RLUE6kAYjD3yu7WSGPBtFYaBTFzZkNfAAsm1HcUia3AwLy5ipFuUEos1E6w4A",
  "key47": "5nhWDcPtR4BCtJbVySc88gpoJLUx9Kbfmjmb1LZbzZsN1nZNMyZJLHKCv6EL3WKV2qgtSXGSk9wsA8TYMwJR9ZJL",
  "key48": "51rj4CP2ydU3zmYhVzHQjpkf7HDcgXd2mhcRyp9KfuFJvFLWSpjFbvAqFUommZ5dfdpQCDDw8xV6ZgBrow26Hfqs",
  "key49": "3d7rG4ZstQ61Y9JyCXJxaBJwYL1RxNNCh1qvgkQfahHbabeSV6jVmM3qwHnx1DMk3y82s11yy5FHhRq7h85gZzEj"
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
