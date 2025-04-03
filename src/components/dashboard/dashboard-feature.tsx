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
    "5Pnv49HWL5gMkMfYbSNBQMvmoSWr69YqgwKD8ykeA6CXnUQEzHAyj81fFMWVKWccBgLqzWWpj4D9EfKtPdGvFA74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j3wBzQgBxb2pWE7cv8aJhy1yKqMFVYQ3Bte8UPeMLLxNSVo2PKDPcBEjhk1FBPdyosLskc4wp39fNxLYgJmb5p7",
  "key1": "4gkmMfwwCYRVWsuDtCBzLikKbBYpjwz8bCUjQjmVni1gyBF5gRGLKm7pyPD5i432jQKSQnKu11xdshgtofnczXLM",
  "key2": "5dCEjNPsMqRgWjgVkqJaeKxK3JC2p13iqtUZb6BaniWQ99EVpkacPaZZ4SVfmeUrZFKWkBBB8sKjLn1JFgmakP8a",
  "key3": "4cAQSkTrpZsLwK8XkiXDzsBZL8nEULRboksF14oYjMUpJdXXwckhkqgXJSDYcy8bxc83LSxa7DudwdciBjZzBLwq",
  "key4": "5qpXvV8FsAzmAWXkqZ989tKHJQxvjfo4vcHZUE5yy5DTRAQBubQTA81upFnwDcdxayJuDq8QsqygHaGcvm68YvoN",
  "key5": "5ooyWH3Mf3vKjKKkAg5EQ5WYLx13M8fHgig243v8sHjFPnHpqZHxxa468fTXXu8Kpd3U1VxAtBsZaXFsGBVfksWX",
  "key6": "24TAUj2iY9NJkR527N27YDUccTRTSQAuT2KdBbYHQQYUYVw1i6HNfRVZKaSnatWjgvAkGyGV3QuPtG4atp33gRwc",
  "key7": "5bA48mGH4BoyAqY4vWcc7VbALFmWqyy6kKVupfD83LqWySGuST7G3s42DpxpkNtnpVQbcpL7W3f3eCoeqjTnWEgg",
  "key8": "5sSpzvTSpcJ2oNsxUpDYM9RPNhEW1GdEJfgZBgzBp5dJVWWRTwsXh3Pd3YGQsiKUeFDERAvKQKvHJ131BcG6RCWG",
  "key9": "3BG5rWAX5GYkm9QMXRDw1n87ag78qGMWHdfPGLqVebeZZy3P5znM9Rj9c7wcRE8FMTudYf2Ew6GoK8ZNKxaa3UoN",
  "key10": "3yMAa1LJus2ua1X8zyxokR7JKQbDCZJDYVz2QFSAX6RmCStVdJUyWbo5tNS7q5QgqfsR13YT65Vr3Wf4swVV17ta",
  "key11": "3FSEeU46JiBmcU5to86ALUtz1MpS2xgNqdxLRTsuyPSS7vSwcht7zTok7dD7rwQXf7stYSF9aX8Cv2mrxvuUBmVM",
  "key12": "4d1Zm9nMQH9xiUXJXMp6sVXBhBXEYgdSCfTmNQctZu6b4f1THjv7wuC122mG1gE99yie8JB8CTbpR9ATPpGGxXbg",
  "key13": "4xKgLVxzMCXZ9cRRTE1eQiRLP1AzobCZ73C7S7n9icDYjVc4x1gMpqWih1ofpkZJyp7BFj63Azeuw9H2PRVGmtBo",
  "key14": "5VtBUZRh3vznZs2hBTi5rHKtwTeLLYkqgXcQGjDQckpg8tox7h4PkMZXE9ty7NFWvH3AuQV7pViRCpTj63D4vs9n",
  "key15": "4RW3vunj8eBZWjJ4CsWortDTw6ExzgqcdR1zB5cGdyHrYcYj3Mj4HSbTsCZNBgwkTaVvribxRnQfCfZEqsxJjW9D",
  "key16": "37ZtvqNicfgfxkByomr3ESPcCZHo9XueqbFDQihS4wvRQGKk7tc2bn2ztnHoC8fPeNjroWzpwNA5yTQMYYVqVB9i",
  "key17": "gVgp7zXGoo98pYm8eSeg1UPLKK1XMKxbLDKRfyAQrQ1gEShSGPamCXLJV82VkA5mggK9QPYKZYBxCQCe49HLSLa",
  "key18": "3WSyA4vy21PD1JzjNKASkAkghR7NPczLPRMrmtAwzZKuQgDu7UJQhuKiw8Sz7AaxehJSf5drUf6VfjbfaEcTdTRo",
  "key19": "4dvqF7BMpirJ4R4tjfLGo3GeFkG8bRcXneWZmeBrnF65T65wverKyC9eGaUPyytZR4j8gzzZnP7h1yUBXdAtVEP",
  "key20": "5ZUPLRHBviCb6Bf1SGpfdx2C8tBs3YRyZ3d6cy2E3Y26B3hKmxJsuECUVUUfWViSX5Pbkd9vmFR8vJHAGCQ6atEV",
  "key21": "4vTEMLUZn3RExHE6vTe1Z76DujQcsezE6FCYiyV93QrB1Mi4WNjgv7GJ45BSbAm6fmDebZX4bdMSucw69YGDwJ6i",
  "key22": "5XbSrUMHn4yj1gRQNEkaHuB9TVbYmitidd5DDegLmJSYYc7sWUnV4x7BzX2FLwSKE5gmezSsTnQBRzN73ywTbYYv",
  "key23": "5rAGzU879dS2WFJFovAdPLYAmufTE9pb1RxCD3DCyGtKYj6N32ZJTsq71Zr1w3p8uQEUCF67VAP6TuVuaCSc8ANt",
  "key24": "3tDnEjKa5SnDVXoY35e2X9ZKg1UWEZMVeyMecsKRMweRUd8P5fHmRHGpKZJny8q9StLuY7MgHjNzHUnbPW4VX4bX",
  "key25": "3Jt2rNXPyhEMn9c3FBgX75h4W7WtH9WgxqifwGbfWRSbQsZu6wcyFjfVdBwEsAh7i9GgbyLXjWV5wFxAupsL4Rru",
  "key26": "28PjYEtVGQJU35szDmerZZSk3XMn26svacUzwTD7rRPbk3pdRVy3zTUhLRxiz7jtNWGg375fY2WC3vdKW9xto5Xe",
  "key27": "bWp6hWkzRHHwsmzjSvMoXpAShUL5NqrovL2TQAGYAyHw2Dh3uRs2jHsVD3t6FTkZwCE51tV2jMVYg1p3PMfkxzE",
  "key28": "2UyadbWDBR4LXGBz4Y8FhKghxzieM6Qa3W76PQPbgqxZSp9xdvA1A5quYBjQr5H5gzvsYTYvQo869kfuiaaqaT4M",
  "key29": "5pM4vYHxYASWYuv3oT2eBX5krTzKmj8TkviNuJ52Dvzbrimatea4Wsqj7LnU7gCVJibbVXsdpW1hFcFnUH8crVJa",
  "key30": "fJhUVDF5wCVVEYQCqKG7xxh9vsK99FegAXz5PAwdYQzWp5Rciw3NNyy8t6f3oXMhPGrm7gfpDMXxf3N4skUmG7U",
  "key31": "ELS2qg2BR6Y9q2vTxCj3EnebAht2HLgPbQeTPH9CZChENCG1jS9nZcyvrCggXNRWowEhfbJ8aVnRwVwMFjpug8m",
  "key32": "p4Rq7BbwR6QfzxrJKXLi4oqpMaVJAqXREWuBSykDS3NSKibaQ6Vn7aR8Gv9Wdu3SzSHpP6uq3fmmBK8YP378338",
  "key33": "4vPh48gQU4byYZMbAp4XAreksbFNcaCC5R337Trjfz1iDSzE2uueCTG2Q6z2q6HJ2WULrGPTtfJxHQpnYPod7Ljs",
  "key34": "5fboWebuAe44jpwHJU7u5G8K7zjat9hDeERsCXbLWdzWErmn8JYysydsEnyLwUC1wkuvgrXfPMGwwYhyBgqcQjs3",
  "key35": "3aWgmzoSqZUPZzMKZDYVG6CwxtAs8MosuLKCMJSSjjjVBns2dRZED791JznaibX9hPcGidFYaMHNVKefbRw8LjvA",
  "key36": "65hjmmGBfhpkZyDegJCcqxJ2n8h58vhcjqJK2mD6zChjBVKT3qAELZg4RgbN3VUvbkXS3nXvNKimoKkk5Y3Y92JT",
  "key37": "3Ds3f818zZomZh2SvWMcBsj7LtqMiq7oZyCYq9nTEq7yoRdJDCBtch1uDty5NMADNfeTPP4EgszptW73K7pCZSAa",
  "key38": "4uGUzt7cckfZ2dcpTq9fp7QnMV1MMy4UzbmpVBcuRqwCudkkdNimMDh9o5bDfCuABbZxTfUwKpobzds6Ds9uteFN",
  "key39": "3mp8UicThzzmPBBt2TrFU58EB3FfjsTbCQpX9j8YrrQhcm1Jcz7Z4t39jQAEKGUyJtmsnfNVEmKc5e6CCwmDXnMh",
  "key40": "4i31VrwYhfDs9ebzUikF5be9qypUkExTh6sctjr7HqEtA7rqxE9CwAwWD9HcBcuSL8SquS3FGYoaTtcuLG6XpqgA",
  "key41": "4hVGU4FyWRFm2okAgUBnPxotwGXW3p25cZZXuzmR1sNiYU2rj3aHGSMnriieBKhZ7YkDrH79d6E3uceckJpwRw5N",
  "key42": "2YmMMJn7i7Bh28kZ1xf1HYJCVJBayAfCRuADUdrrjV5WgahgpRQg75SEqihYmj3PZXPhDpofkAtvZ5LbXrDUBdun"
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
