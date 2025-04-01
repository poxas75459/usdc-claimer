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
    "4d3g1cowcZ5ujmMx2JcJkagCR9sA14TPVZeXmcr8XfhABkh6jHzbG7tjZ4PAv6Xm6WPp9TSaoyfzzGHJhVrf2moP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BCaTPjmx4deGcRxYCmjUjkza33zf7rCRCzxnHHFbjkP76mn99MudEskcbcrgWvqV3XZXy6eZUtKcwHqMXoJAcrY",
  "key1": "ESKS7kjmMcjmZ9zwf3rXchtjj5QjJWoFUL2UaYy5nAyPavwsGNFhLty87QpQ5kmKrGSTWuYT8D5yNXey6h5dLGK",
  "key2": "LEWwXdxCtUXW628CNkZgwQQtjqeahw1BB8gADmQunsrvhAMoXztoi3ngY32XXNS9kneY5TtWGj76ekQpVRKWDDr",
  "key3": "5P5cXkDtyECASbNPyEzv9RcZZNgvyzyLaA5Q13SQQ1rrA1yZegN16ZgQ6gLc66MPcFj3d5sMrTsdYkoTg8FQbQ6j",
  "key4": "2EW692e6c6jaRGDBq7YHKzyQXrd66zcxmwEdY7zsrb1DownSffAHsqkGVhAuZ38FhY1TbCoT2aow4GUNJQaKjHr4",
  "key5": "46BkAf247znzynAFgyC227f69hYzMHsdSJDPPYP8RpmKme6iNFqgMPgA7xaS3RbDo8tZRMR4NUJzwGcv72UyVgBG",
  "key6": "2bWtBUeBGPLZXszgsVT7B15infgFnrKeGUqhDgu6zFUaLzb7y4SiKvESxL5tXKiCQUbzSUjXyGcTrtftt1md8vjY",
  "key7": "1VntVqBv4HCWA4d7y7rmism5fXTCxjhvDAqpabdQCV1Kahy1Vco42HCfA8SjwXgvMnxRsrGiUjfWE66nPfZcNui",
  "key8": "2c4wL12xCVje9UMW1V5asXGUNPiGN2NpqEHxFnSpJoaAFY3iE5BQgcvRjgKCNvPC9EYYgTzEWR7swMPPjyh4NkCe",
  "key9": "3yXQF7tuUV5weqUByTjem632yAjy2ncXNb6s5rhnksxCHwh79RX7J2pdBykbNLs2EfshSGLTYG57f7MTQdDdkoYr",
  "key10": "3QwtPefApPqDbs76WDgPPSa1FfwGE7xa1FmNXjjHsnnktUGX5XBB36Fz4EaUss95bZjDt3Wnr8ywyUiLhzunywGn",
  "key11": "5giBLVMxXEghdad7faA5wJkuXWaPVyag79waxWvGPpMWg1XcwGTTi4zuLnMM7UBzeBKnrfZD3oZCvYPcDn8KUZ3w",
  "key12": "neSoenaCa55qN3xBFVPEkW2duTjCS3JzCKaF4h85hfgUu4VVKLNeGzJTUWF88LR7Eaj8bv1RLRzhEAqRBpjUq97",
  "key13": "36xWL1n4ZmefV3SYxZqBJuw5S9uLNWhZMaD1XSJ3nwjG4GeAdPHdNhrPXmpirGp3u3fAEAFeX8beMvvcjvbS4i42",
  "key14": "kJPiQTsatzYuFCxNrUTLnDUJ1Me9xpRcW8UwCBv5foy8pm2eHy66S2cBRB9gw2XZJKXVnDdDyXD98hf33YjRNAS",
  "key15": "27UaY6qhryN6qgT35X9bffUmpB6wem6Q7hzqiAoj9diG3z4RYET3mZfqsDJpRqKSHuSmSKvDj6fTqJzow6xLM6JT",
  "key16": "3CkyYzeDA8qAdZGDgc28qNvMrkaT8Wmi8BygEeccAGEE4ncQ9c3ZYgYMzsnDmFxvkoq8z8BW7Wtz7xvgyKej7Lum",
  "key17": "2HqWgJa1eMvHb8pfwGRuJ8Z4XpLDqRofnraecUQVBb1gGt3QLTFcY7Qt6nAJQmFzzb8rTN6GzRHMF1UuEywqhZT",
  "key18": "fEfmBs6Ne3uVt5Q28LkDNGt3pLYtrTkqTMe7xK8ewotdLXyzBiET4785rhfuFeqv1q67fXKXkdH6wEAiBnTb4LQ",
  "key19": "5vaABKq5mi8G7EAeX8dceRQ3vTp9cuBLYErBGmG1BV44oYyKieubBFZ8ZUNYxPNN5zWsubDJeEnakGzst37GAVUk",
  "key20": "3nxHQDgnXeUDEbxLqPebEtUYquE6XEMTThK1VjNkm3Bj5Zi7uc4pZY445rVH1PPgkh4arjhMZirSrj736JaKVptQ",
  "key21": "3NgCHsWy4gG852e3Yp9oQS88LvbHVwMeDX5Phq1MtuiiR6pyvMzYEArw8HZMBKabGAPEtvn8NMfuMcbUz7mBEpK1",
  "key22": "ZRoDZtS3Vqr28UM1xz68Ur4W5w6HLN5XHSUJmWYedhcVy1nUxSDUkA3y1yAkaWSGwhML7G7hpP82BMVQLn2sAH9",
  "key23": "5eVeu5XhPDDFQFa9sjcFPLsUN6bX5gvUJLve9N5YC4WW9oLk4Wtw1iKZ2Ntvag5QG61Uk3YUm8mepNTbiXuEp8Za",
  "key24": "3odD5TigGQKm5SHnS9nKdvWBSkiwRU4wPYqhgFvoCC93S2DLsiEvGTzVpdjTaNuWrUF21kcUm22n6B3P8jG2NzJT",
  "key25": "ZYnz6ubCmojbtZwYj1BmdSWTFZBRmcur8kAWJ5VGxQqjXuev9dbfGdKjfpVqRWbZbTvGjTX55jUku3ZPYxZciLg",
  "key26": "28ooFLy6LysyWX6ykZn71hPS3racAymxoY2ZncScCw8dYA4c3D9S2BS1JK4sxYrQNidT8BxLSda4NdepNZGuqoZw",
  "key27": "knuA481uEjyW4JJ3X5H4eyBkjneNAvxa434RPRrweB7SHLuHLbgv9JfPMSLRyVqZQv68NxyGrtELLtWeAUtEh5n",
  "key28": "4WTLCiEvWZW9j9JqhMF4Kz9jt5QiaP7XvuTmtxS2t6DBmaJGwnbnE6x5KRQL6wEGQdbaoZHGMeEyZnVTwfS7mJVj",
  "key29": "bDWkDhtnDirFS4YiziG5zjGnPZBhuEb3uwAVZ95BEcSgDkvZEKKoPbVFfZsNuTBKCCEh6E3ECNkh21TaMyrnxxh",
  "key30": "2KCja8b7DWU2zo3VYJqFWDpM1rbVQWCKon7rMP9odH73jGyfNhsMDZ6QoRhz5sTveM7oN58oGi7XTWLUrcDnko3c",
  "key31": "39q9w37Vao6FQ4EwV4GniwCD1FMiB4ZodJs5iYLEGjcWbZNKtRub8qZmQ1axda2DeTP2zNsRrDEZdZoyrPnrJoqp",
  "key32": "2SYjV9DxzLuawUMBHaGSgZkjNeWBVZM7vbHytgVhJNumcPGyRihQkx7sBVXSHTV3JJgPp8hqyKLyzArnWZkLKzq6",
  "key33": "XJRedT1sDtjHbuuw5RBpPJm5wmAMKmAJ9zMTE4eXGs1u7Y79VAhA9t6VwKiPwiM7DT9r3Qk78KLSUpsEMCB86V1",
  "key34": "65kNmoBbNiBg2yAJcn2RLAqbQWTa7gkwiuUQhve2RxtFDgjP27DXEeJP5d8rxQKfoYkWbz6XZrfKpmVY3XT6f2EP",
  "key35": "4Hkg79kWc6Eg7SVeZoSqkrNxbWDpp2ST7pcSnBdsFrDPXAq94irWZP3fEyBdVdoaw8pcJDKYiuiVgLfYvA1CbNQu",
  "key36": "fa1tjJnfs8nFzd92vSphbHrGfpSv7C5shPfcZkPytLs1DcdMAh9xiFtWqtu9E56HBGeGRJQnSgbEbj9tGUu6t3R",
  "key37": "4TpRkDFPkcVsG7K4JfFWTfDkqnahgY5BBDbCoAqAPmeGG2qv9HzJwd2PFW3Gqm6TRe33QNTRXhRjGCsqbc9KdVPU",
  "key38": "5419eKbdoGRyiBtXpY1evQ41GrByjRLw32Ujukuw8ESNoTCHrbazgXHteRH6WETuM2ToMqtKVtLoTmZeNiCXbU9j",
  "key39": "4CsKMoaJsXGNfC5Z1N3QnNbdkHMmSB7W7UJ9VmY1zsWHoNkE1ybcYfxiwK7744HMu75fP7KqWJk6ex3fRzAxNTBB",
  "key40": "53zGf1xuVT9NMSZTPDSysf1ZgBPkk299fWMMtYjBHV8bSkzqMJhCy6PYhLhjBWTZaTnt6ZWRWkazqqHuaNFwLUo4"
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
