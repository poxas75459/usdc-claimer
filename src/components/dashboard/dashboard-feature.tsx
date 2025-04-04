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
    "cW8m3Q23hwikvVVQE8TxSbmAUjwPfyzGYtRUa7GAntM3uo6ef6vikuy2dAJDBMTFDoeoz3qptGVDNhethPMFUjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aG49svvFpbaoVhibuGz41rijjGLXCNwwczvrRa3P1DQWLdDeav2gKSaiGCGaonwegkNhBp9HxSXz8n8XbhQVg27",
  "key1": "5s1xkemZW7PqeMqjmqBLwYJG49QFjf6wYCTn1ueyDDn5GJQprVmQSKGUo5LpnYsLy6V1zECgMM56tS1NaQzVNT1N",
  "key2": "2EuG2gRug8q32uUkbpD4y5d3ZUCwsE1JmDraqYy3gvvKi7icJse1zCL4wcEFEZVZtTaEJ9GnHszinj47v5cvhpjo",
  "key3": "4Z8goSB6ddNY6452eAwdTnPq5oEWrVtVM7iosQnd23nXg6EQzB2XjUfW8uxaMpKW3F4Gycwb5yS4UigPZmX2oGVv",
  "key4": "4wAQrXJvE4RS9c8CRZXLyUp11K1pzjJsUCtTPHZrNJpptbkYA5mKNyfrKtpZX9CwY2AQS2FrChy83DPGo8vnmDmP",
  "key5": "3BP1LN6i9cf2gojSXPu2YaDr3bLfAbgujEbD6aAkQTstBgwH9rP56iUgduFHSgy1NJ9WhijVufLH2EDJSZpX77NR",
  "key6": "2uhGdyhKWCFD9p7Ste5g8wnsvFfgT7snQeJ8DDvhpQRWUEL8Y27DD4dAsa1VYuZQbkpLEX7ssxs1ZhvDEock2HER",
  "key7": "243LQU478DwfNFuPhE2f7hWhZHXkHr91KH2jzzEGNxDRKRGE9Ymek59YTA52K2KfxoMft78HtmR464Cwrn81KMxe",
  "key8": "2KV2DA1ji1748zccKB9XRixJeDVisgATVHEnB9bS3iynqCW8xhCrbWi9213Scn8XrS8tfH4sbAJ3yt9z4aKp7dtc",
  "key9": "4iSBiRh1f5N95AjfHq4ehQyAecKWMQg2WscUaHJ9Sdotv54keqT6vd7joxYCKggJhtpXiKCphWmmi1oX9AJcmAbD",
  "key10": "h2MwgLBMykkWeqcZLr6NLVs8eHUXSPQNf5MuhP1Va4wSVq3RUFYKUAHWRNnAUoX6sLECuegEayPcDJ2w6QAbZV5",
  "key11": "3e7Wr4QH1cGbhPkwcxyT3FA3oa2uKyM8E1HH8f6NZorWoz7PWYeNN8SUkumXZ2ZksoTZ5kysKgpuWhpTKAvAVNYZ",
  "key12": "fyDFVQ5aqGmGXH8Aw3GFM9mc1exT864N7Ex9PBmg1retGgGT7Povc9wQZJcbQAHx29DzwrkMyEzL92GJD57zcg9",
  "key13": "4oaUnCbVBDxRnfYH4Qo1VwYm3DjkYG6g5EPMChsAB2M7PZ9AvWdP4GQvhs87zYPvrvTGGUwhpsPKZb1VNutVX6RT",
  "key14": "2u89jbATQ6UZqvh1tPKq3c3UXCw2y5k1zVsQC7bJFiW2tacvHTtfr2n731uSdAoif6ech1tKxm1xCVqPxbj6XNib",
  "key15": "2tDQdcBn8sUpMrSX97F4SiqPECPnPJQCXWVdZgKv1FYbeQjZYJCdhnk8VdoqKNGGus25XNWiHQeVvJux6TyF4Bk8",
  "key16": "3ELxsJTt3fyVbCD4oUeg6NAuT81a5aWKFTMrmo4ub4CSV2Jcs4ZoZbcjq6wc39D2MocfCCJJyXQcwSgGVjNPesq5",
  "key17": "2NNxSGU2SVQXJFA5XoV2F36S5gLZCs8q2eNUKdcn1gqWzH77Q7AqugNQRs7wLgXo1shBLQxfDvC9YmppKG9UEdzr",
  "key18": "5bbx3Rwk2CTERGXWRHVDYMSarCeVmeER74idPTuuejFurzYfJWYFTRnWcgRBQfA3sfAua8gZEUmGg2VGCfHwJNVb",
  "key19": "2tiJfj1qq6NgdyJ4TpjRTjQX4XJHtJk2VTJbzyWsz1x6awkoNTw45pdyXnBz5QsdPccDtGEYbunTY3jbf2LQ1jWb",
  "key20": "5Vb5BeFxXJSfRxduMg28Eas2uzENdX2ERK3jjfGyFjFGuNzMMf4N4KmJqHGyUHprZVC22tozW1WZqumfkAzkG1kp",
  "key21": "2iK5eJiMBDFP51W8HrHLLm71cwGVVYWyWpva3YHew38HgPPqx7xzmq8P5zceYqPXNUhyWvErGCFKpZQUwPzM2LC4",
  "key22": "3DnMbMHkKVqZ6gjF7VKcPR3mynq7CLeqvoZPMaUc1wmSunsD1zx9U5wri9iVo8ZWsfHTk8CnoHsPfLWhzQrXekXe",
  "key23": "2yWNsXNegS7PRVA4fQGJDUGewMSnH2AszonLMchTDb49D1DAfFBftdmdaBC5Rzdv5whRUFtvRkVDdbSEiTStXCp1",
  "key24": "5JpsAcS7oy4uPcK3bcTnNPkQEb2fkvD4u2ydfyC7gZsPyQ3xgfaaduLqsjKx5G6NYf8bCC77YiF1RG4hJSRXLGuE",
  "key25": "zvr6rHETbXGukXKi3QqdWrNTip2s5Smivbs7uz7j2ZW9HtMKLKsyJvYF6nytcKrNZ1kmvHzCWcbDCrM5RLtcvA3",
  "key26": "2p7RBAS5RBFhcANoRyG2s9dEdtybwDdQLcyVHwivKvvPLbV3qZxEHKeRgHr1p1ydnnFZFpFqgrWu725XefAJWzro",
  "key27": "jBxfbvdxn3Sy4fHHWDkHkRU9BV83NnHPJBFX2ZHeTG8snG5kGVBjjSxYJX7YeHcNsrf22pCXYTU6YgQhBjzpjoE",
  "key28": "41gWVUHtAtnX6zoo1wLQzct6eHjEmtQ9SucpKKWBY4tRgy8ctRnEQCk7KbR9T7vK9ePEcppmdrMQJfGCsgiKiFxF",
  "key29": "66DD392Pox4E6SWkdKAddq1qTeSpLdZXUGD8x4MhATFuZwZJcMd9EPCuRYiCGFoVbfceTnNH7T3GX2d4m94NeeR9",
  "key30": "MWg1JCRhqp7MMmfEAYUxGPK3qC8EvwXmHaySAE8NqnNQuA29sk5tVBJPkM8SSHW4RMdP7CJMyByg773rJutCSeJ",
  "key31": "2z7CxA9wvHUF7eQy3Zfw1VfGuGKPnAJzzWVM5cPuxtPmoGgTWgx9gz3fJrfTUJ3Gb7yoLMhEqmib2hYdfwcdZbPW",
  "key32": "3YPRVA8cYc4VtM6aLU6VuNQe2rHpXUtMWg8oF1neSsubJBHrefKXBHKesp2NouDeFq7z23u3dF8J6bP4qVKz6hmm",
  "key33": "3uMWfhJ295X51MX9DNcBBYoAdCCg3Hvep5HsNEGgaqndyD7CYtw2LdP4Qwm7MvkB5YZc4ZuGaGUT3vjyCqs5spoT",
  "key34": "qXo9ZN3TcUtfdZgnHzvL2W9mJVoiKDbZh5YoB9jEkXvzfxkmAwdsuWYu536sMtkDumhy15w6oXvMaWumWnKD2vp",
  "key35": "4nxVV6uzKZx4shBFeHUcE75DZv4tNAUFaPx1oQN7Rv8a6qt4eg2sgGMmKC6YS8g6akizPwr2VNKGbsrTa6fgZWnf",
  "key36": "xwxPRPJ8BwfgLQxTW1x6EZDCeWLEYKdmVyMmwkzFV4ZYc3bnoafQpf7UjTEJUNwg6Bn5EU2t51YGbFCHgHQ1foi",
  "key37": "46S7qxQTeL1Jrds7xuZGoqRJEZbaV9Vv3gdxHkFwpjrCouGnk7rRtBAD4fJcGLR1N5L2B4xQ2B9LfaMFnyaGLthA",
  "key38": "3Xe6NzUTNfbWeuNPWgq3Un38SQA4NCSFkiuaajsbN5YeC4qhnjGtjbdbQeY1bfkjeJjv2YSuNJEY6KxGohqYK4Pe",
  "key39": "3uqHgAPsfkB4UcUjQADWBWjFxbrG26Ke6j8Xmw9RnF7rdw7CWAUotpfAqYJu2X8iBVo1YrLuzzGqDgPKzSrGJ7gW",
  "key40": "2wfgUfYEokhz92Zf67AVDYKunovmj5fykP4rExjH3qEVVFjE1pJYxwkuyT8Gy8ndfj7VwWaMK7GV3ywLFFEVNnzw",
  "key41": "3hHr9kwa9XPrexsfXsqHqzkcLZYEd8qqmxfVVqHkGPmjM2mg2mHCUZ5H2xPwWjJTV9bPWKFKDXtiiuVqJNz4AQ58",
  "key42": "63EMdriCjEZtgFn9GAhFKudi6Hf5wEzfRJVkDUQvmSiKVc6KuaxgpAjVbnxto1ZbJMwx4xuhS8h3R11fooQ1qY8f",
  "key43": "3igPmCaVfFFUktaCwEBwEVJEP7qnjxWhwUGeUM5eJfUTQhNPPtZb5NSVpVE6VHowM833zP4hXVcB6iGbV8D7Gd4f"
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
