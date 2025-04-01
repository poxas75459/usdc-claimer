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
    "3hPitPHwZqvX51rQBEYwJnDAcYLu3AwheKvL4ZHpnXkB3N2QinrCDn7DiBgH1uXYtpCYfGWygBVQme2qphpCLwW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36TM8ruTJzSkSuFUBkuhGhF12U4q7JuvrAPRi5eJkPGCbCmCRdHW1QbHxMqfv2wqMsKvc3Lt9pB8BCdJpt79xXWV",
  "key1": "3PFoLWnruQJKQb1Hx4yf8nCbE8d2eggk2NEqjQiLs2FfMbv4BR4YZbsjfzfXUsXFfJ8ZR2beapBpaJ7SHFAJZPXm",
  "key2": "29JxGMNC41odeRvThfCaENSeZK99MUMUN5Fvn34ykdFtx98yZdA9RETX4GtEzT3t9VhUbtqPQwaz55SNQdDnSMAL",
  "key3": "2fxgk36FadKLQWoG7CwzLFc2Un8c3isKwoFPrFnA9nxq7AQ1YMasZysYNchZzY8rSnbhKwfuutJf8Rw7wsSMVHYp",
  "key4": "34QU6nUjN9ktRq6szaYTg9EMcrkQuF6CQMWaxERKdtJamnXjLSJE5FoZeXGSvs5sjUJDaRwbRN9mTu6Kv4QJrK3h",
  "key5": "7Cgug5Zs2rSKuXPcTLCwzVoHzHTqbnoNXbTLeKhBME6JBdwYQ4V1qkXwzaj4rsKdfbgEoeVxaJYqTXqc2mUMvYg",
  "key6": "uPKMmGzj5CCX8DqkjH88CkkM5jrsq3be7Gb65TQ4WjRN5MMLWkLB17x6wLbJY24geaPDprn6fTuta6m2zYqrPPX",
  "key7": "24S8UHav65fdEQKT13ftnD1aSPqMJp87pCR7quj9LiPCLXxmwtW5QbZ5BvCGpaPsZGWbjqXVnZnEbFVSDixu43qA",
  "key8": "3KaE8vBnjcS9FHUQ4JnHJtaX7PKNE1t2ycmBtyG1W6MNmPgwbZd7oJQdYxHy2GaHjbL6g58moWAvD6n9Cs7DGi2D",
  "key9": "4MV57ZETgpwejRuxe3S9eyvmVyfBApB3giG6BoraMJPgpDjiwAtY1waDQ3qpR51BtPU3Ta1pxCpdnZqrJ6sQTC8W",
  "key10": "cutxDV4g83cJLLxpKtmniJmJvfKH1rK4y69SExSijC7xLxiJJAM1Anhz5UbGNCSRmsuREuUg4xehJE5YXWpV4vM",
  "key11": "cen6QcFEHLMZfmYVjhe1FdD6zJd8a4iU7bgiycyhLijjh3HFzsdiCpn5396rp9XoKr1vdi212h7vtboNox32K6m",
  "key12": "25W2wjRrFtGuHcj6DLypryBFVxRssSrgdJaY6ydZkwSkUFbi1RqqieUTQFkAXjH3VS81pot6NsbUiwjHAEBrEeek",
  "key13": "2mbGPQ7U8fZss5sjKdG6pFCUY3DYfFqRRZS6mJmztKWiy1jYk3Gi4cgPv9MBeXJbvLbp8SsVNaGTbiUTH2vNMyha",
  "key14": "5PGvNdLd3xCyY3XHVtgL2fQrcCETNabTV6fyzySfojfo6wYoRfAFXN5XTnYrbhhz5nQjH2fvYsdxeRpyjUUUnzkM",
  "key15": "2xXmMQLHfJ11vunddD4iCzLMJEmknhwDuZtn7g5EBXj7q6NTjch7oz8hYfV4WKNhjBDkztUMG3PWu9QfXrcRiqqv",
  "key16": "KjzgCWhH42KvrE25W879vUHLSSbWYsRZszZbi3t1xmntCH57d64m7WBYAjQVoiSiSv1TvtuCpemeWgbcq9fd4Fp",
  "key17": "3h9AUkbgni7PQSkEFpkRehQ51Zi57p2UrVxbZVWChsGB67oMHdhVn1wDQCnHNhYYQtPaXXaw77pwF6KWpxQWqnAf",
  "key18": "4b2BoxNwfQm2gTbNCmDQui6yZDKeHnsK2HKF3bTHRHZFMCDazoMWYkEKiBFkSQTczAuCX7vV7uCTy9t8LBJ6JQ5z",
  "key19": "2djdR5hy999NaiCeXFYjcdptPT7N5vALrtzmjGcabAxLhfVYgJbq4orMLDsdUV92a7dQsYiA7y4GhxXDcsVUNwhw",
  "key20": "5T2ZuKVNDbUdNDH2yoiJs9vUzCisUAzJaS1aCdGcUYgHBeinZjYNLzmGfxSgj5HSpwfBD6WeJDwfwgu5Dyi9QA8x",
  "key21": "3NzBTrQXNJgLa6V8bXkFYTcx9xx3t9tsvp5NkQyse26W7HmPAJuNoEMsKiyJhicFVe7vvNNFCuBgzmEaiGEVMxLc",
  "key22": "4gj255xtpSz7tAWWkJVvUA6Xh7Cr4RJiLHfZn5Le3N2f6xQN8EEBET1fjygGsZSseAft2vJPgfspLShdSSUPnCf",
  "key23": "37wBRKKUDv9wDXjyb5x8hVgCyTCECEEbNn6nLkQAyi7V9qPR7iy4gSoU8G5PgMEzhCRhVgYKS27mMGtzgvWuB6Zy",
  "key24": "4sC6T1q1erBoptGtjLxbuFeuvx9XVX1JcBqVMUyh4gRZwfqYBLpq5xpQzGEyBZofHMxunz1cqy7C3ereY4dMdBAH",
  "key25": "5wQ3sp42xeeEyDMDuM1Qm1K5an1KPhTNi6dgPxfoP3whKb4XniF4a8x5ciRQ3zA8t2PFMPUcf16bEbZCWpL5duFF",
  "key26": "3vcxh6mGVL2g6RZpjAzvpvpaqj7tBPkcJMrvAnLmAJ1WnRmf6G4PbWDdHsSTEkFJ46joLfA4C28D2nmErB1g1eFB",
  "key27": "s6yNBsAuPdkhznPhWrc2QEee8cE7FewARKaTPvxZuaFkFfUYxtrGoECU6NgsaRCGvf1xJRT6Bo7iCdNNV4NBQUc",
  "key28": "62R75pDxZP1z1PqQVgwUBgYLocuVmtkHFrwTPdhNbRCxHa5ci53CXFHqZS8K4ohUKem7RGfiVnKZejUxppVbt5ni",
  "key29": "2hiJqAdxU8TMhR5gGvSNPuLmG2Sw8WCrbw8miwWLo44H7fy36VagebLidk3R7CyV5VUonouCkKaJp9t5VdR5iG8o",
  "key30": "5S56CKexPt1YWsvRadT3DyqPLPSMVytSmSjVNZ7C7SpLzHi4beaNzw566gQm7xtK2MbanLBP4DJiRwFa7pB8wgfG",
  "key31": "2Dhj3q1jwJKQwZgLcHzk5WVMJqsCXKmY7c8rDmhLMzcojDwp6hsfBhEGPET2t9xzPHULLXLedaoXvt1bCoqRNkC3",
  "key32": "2JFJfJpJhnopJXvCLD7mprJgxJwFiYTdqSSJ5Mtoty43q5atGDiPTb8j69Wu74j3k6Jze5ETf8GutsdeHKQ73f3Q",
  "key33": "34dwiA97iRpUECP7thAvggAWPvFJz8UWpf1pJcnBjduWK1tC5LGFwFRBvqrWHoyxAtJW5KfyqK5MwVvsh3GzTCCt",
  "key34": "2wS4zktqB6zzRfMN7yWuhRHVnAoQQuJACqHpWMd9zFuFJVB1dZJv4F4433ecX2fAjSx9fwRMQxnYeA4FRMn4w88E",
  "key35": "3sZgBAGJGPUys4Af6cn3vEsUwcGXzRjUXwVGYk95e6Ja5oSzNFFuRrNW1MBLAZWkMoR1PSNdBiH3rJtMcyFyWUMT",
  "key36": "56JQdpqg8P6k2zqExQC8RhNhWWdoDPTZku7emdx1xEBau8WygCjpujGA4dc578abjMvZMcKdMjxeSztFM1RHZ4nE",
  "key37": "4h1cKk3pRijHnAMWZUWJwFx4vg2fGBqivYyytBDBF8Dh4er2Gp75fmD3hYPH45BideefpxPrC85CCftXVW1hoWry",
  "key38": "5y9K1qi6g34VJs7PMiSYCP9vtyUXG2oJAg6hZXjx8GqrdEEz43hwXNXHRxwze1gQDUMAUm5e7Z44cmJKaRdrLhZ6",
  "key39": "4ALA6sxK63aCbyB6W6SKaUosUbyLDq593oCM7eZLU6CijP9Wt7X1iXo3jf7PXPqMmGG21oCmyTK4DTqKcMRnSdP3",
  "key40": "4jUp2ZWdwLuDiFXmpS1HagWicUnXqCugY5mqbGoBkyZ8dhvMy9GHLT8A2jmefAvbCMVsTTRxjgjCXFYqXcDJsVMo",
  "key41": "4iY7EeNiDVWt2HrWqPsTZb5zCCrtx8hz7EkRtF4WidX7TcGYwuKwMXD59SJFrsNjLWohCBUac93vvyBTGathQDgq",
  "key42": "4WSkaYwvttVbw4q5KtEkJrcdhxqbkM3saZqsU9JkvVYbhBsfTcwP2Ed6a1Y2yxqTgKVJ3PsrmJPUnGxe4BuAS3VL",
  "key43": "3zWLr4QM7JWWAB2g8Z5tQ86RdS2HzcVyJHa82SmF4tevm46cYBaKCXB58dPCqwcyVkkBzZtQrL9T4pRMmMaJeZUD",
  "key44": "2ys4mhQJtkfa2qj29et2gfDsjUrBY6N7c7iUJL8EG75hhN3FtRpxZsXVcmL7363s4HDRwsqdFhhrzNwucs6y2bHR",
  "key45": "CnYU8LKAaQa6V7fFB2fxgvnx71L3qZGHdE7T4erDTVkyPJJUHjT22cuzANo25Y1449L14UgrX9EaBfweptpxAPV",
  "key46": "sSzYi3MbLhWN74uCAX1sApzTsTqLnrjQA94zKgKbZyfSYXyWEJbUBvmQ77B167nybzqqU5D74HVrf1gda2XnEqk",
  "key47": "S4K1WSwZpX29HjuBX5Ji5P2DEyJ93i37FB6apnLQaWqgq6BrELKNrkUKdLC3MQrn6pz9GApmKhfjFis1my86ena",
  "key48": "2NfxvWQWhoDVnHmiPvVcmviRxkFSghSA6xpX3PH4D4HHw9m2LscZeAW2DasUbtWvs1xq8HTCEb54ax7UGfZbLb4B"
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
