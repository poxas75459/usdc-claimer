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
    "3hUqMbkkCEuPvws44GabWRNbZP6q5nyEGStNezx5XqzrUczCDrptm18iaiMhBcSLydUM5fm8fseEHC8p1QvzQDrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rrCxdUQrvcdYtM15aRXoiNLh43LYv7uJTQCQUhcfp3E76bVvuihBQoggVvNrfpX2Uj41S2FWRxutDsCJd6DNsuT",
  "key1": "2G8FXBx4YKG5nqBgE3PucUSeFB7j7FgGXBSVbB6hXkNqWi3UeiiiKmaKQJNQPVRRp2gbCujn66RDqGGM9uBABhLd",
  "key2": "3Y6yXPgVXkHK4GZUKJAS83yxuHVYwpzoosyyL4ih4vm9NDpXUvMDaUY2vtP4LTY4Uvq1YhXNjSAkU9X2DUPC8XYW",
  "key3": "ow2iYGmztRGPjNGW6sUxVqtFZhEd7hG9FG4GifNh8Fq47D7B4AVNUSMt7bwKVnz1iJyJX28RSuCU8xaujYKvHhB",
  "key4": "2Yt6GiEWvyj3XwJQsQddTdfLjeRtj2F1XZJf15VbxxVySmpS9EYeJgNarNbZ8QeJvtjyDphToPtZietzGCvDQxcd",
  "key5": "4AA5pMEeXoF8qvhCCi8pBuPosUD2ZEGVsJMygUfyPCfUjTEYQkEbYW7RzCgNcqivUGec3JYRNR2XRTE5qyoyQEYW",
  "key6": "2Tfekzm2T7fc4n3tyQUJ1TGxz5GAApvVETsTc6DTkDkXsqPSMkAs2ZQuaWsWxJWaeyXzoMZH1L4hy9vw5CL1Nzmy",
  "key7": "3iTQ11XSQ2CUEP8Xw7J652FTycxoUBg4qHdJrwGvTKhvgsibFZEDEAnToLyAUYxrxTk2AxGFSJcKwhAoSfwmBeJ1",
  "key8": "62ju8RY9MsLfMGUmbDmFycseCcfB3ypnnNz8jjgZX8XWbRUUkSN9386yL2oRD2ax3NBvRJDnKqtvb5763rhvKJ2L",
  "key9": "4V3V14RkhYYKYndQtNV6KgPpASUWr1hWEUGHeeBXfJhyM3pB1eJzkUS1Jfmnux7WHvjrqnsf2sJwGUz1cNQnGVvW",
  "key10": "E9mwSFgNUvgaRBTh9PnCc2XhmXy96HEAMbiaqA5SKBJDyUezMS7etaTCmFyzmmJGHPN6ZEoCej3atyvYpDb8rHv",
  "key11": "gLwpd44ay7tRqUYDz14qJ8WDhpBmkXUJuseTejheyw9XjT6ryxpi7w5pb9M7FHowEDp8shTeuesY6K1REZWRthq",
  "key12": "3BwhpafWRoPwq8XGp2WMxH3Vq4hnYLbnB3wpeQ2N8VTcMW4Axd5oBBSCom9z3TdtBdtmzUFcvrpQi3gSvG4EKtru",
  "key13": "2Sbo1BuHZ3Z7phxVFZcwXpR6iaKxrztBpWGHZELLhxXXPmFJHcEfWU8yNrQts2YS1UCAA6dQFfAQpoSVq9b3cerk",
  "key14": "526MYttUd7MeSxNyPZwkmDptWjEScKCQLzLEQxxiYuo2ZLerjLUNrV1Yuuj4sUpsb11phahthB2Y52QW8XNjjjg4",
  "key15": "4Vjwzruz2or36Vv2k7jBEucUir4VkMQ7sWc5VDkrL1HyERVyBWbaUkdnk4cR1ELLWFeAPTQUvtftGz9D18nZH3z3",
  "key16": "h13CAJdBDpPNj3pR7Dn1eFY1ovHos1mMfMaNxASkbcGKocBL9j1gNep1ffYS2QJCMDefWyRDzcTPW7UEJ5ZLu27",
  "key17": "3FRFnajxBnK7r46PdckE4tUBZZQsLuWCt7H8NVVu6tw4rzENHSyWtctHXDdojZPEt5LkUQrz14ALiGM7TtbBXDcr",
  "key18": "3pH41dXpKx2z7SAzYJfR12ZYkFqhhxDpDuQ779weUzBjvxhMd3LQKGiDhtGC3egYGmp7wpTDLHG2sDfopyRfGAuW",
  "key19": "6519HH4qQZRVNFkVodrD57Um4xjAEk9SuypzpRo4rTNyrep599CKAW2U51opzuj4nRyL8mrquDMgZKdQS9o71BWH",
  "key20": "2AGMnEcFVzZyRfVpRbMSs6b4Ahj1mEMZVezRaqSeKpMmjtPMx15WjEwry1BoZ6q2FivU48KyMbEjPUGGDU6NBhyU",
  "key21": "ru13nTfY6RYCo94xeYhduoa6NEwkbXi6cNrVHpZzUvWCoJdUVyKZmkr83F7ZtKYz5nhEs7NSLDp4o3BEdsUcoEq",
  "key22": "2yzm1QirmpasG26nEDT1RFxpLcLJMNPhALHZ8ZnfKhZPDumB3MJvtHEn9oopSpDvrE8MikHvBQK4XBQS3RCB3sF3",
  "key23": "3Qg3Q64sBKZP6wXVHtPCTUnnpSbHMBHzxfVq7jWuP8FLhiFdm61dfCj1Yv7dayEx5f4dtUkbKwcEt5htpJGWd3hw",
  "key24": "8usaHwWTdtKdc1ev1RayVheacpRcbRf635qrC88bN23ji9zSW7JScdVFQiFk9b1q4BzMhsbjJAzaYJPJ7ej9KXe",
  "key25": "2wBfM7jmBSd3Zzv1GCj2MLG2sfCEjDLSHXwxoUHLXocucwZyGHZoZJ4UJigicAz4ypaY8RmAtFbGdtadCuj64oMv",
  "key26": "4jBRSJYcto5Aj7nLWDoC6Wj9mgXTiU6Zm6rqMUuVkmjB5kjmkpMnBmttp3zqfvYMch9uQE4WVHvEeAGNzeN8dRNX",
  "key27": "5Dwo8bGPL1EbLA1WYzoeE1S59GrNgq7BDJxE5xzf8xr26nrjo3sUuu4DjVGqkiuEL8ac9uvMB2nXsiAoT956vZDh",
  "key28": "4KozwRq2X9cXpKtsGoGxCMdSp94LL4nPtP7ydRMaWuczYnrxogN26u6YXqkXtM3Xgsndq1HBkY9YnHpFHFrQzpwo",
  "key29": "MVj3c3CMmvMDXsYMGC66D3LMHm2J8aAfj7cv2H2VEXV2chSb9yXJsdXkQHiWJRbMde5YPJTqxGCp6TA2tBGFQ3D",
  "key30": "5qqRnP9x4Ydrvg16zwJm4sU89K2iQgFTh3ShYKjm4RtCvXSY44umUWawGR9biMLQdvsdh6s9MjWs16DekPpHXU8B",
  "key31": "2QYjGKB8tjRsCqGtvmo2tqyAkx4yYj4KrzF4dRZgZTweai5JRTcgm2RzyTKY1pYRFDc1sDkKE4YLE1sFcUVBNyWz",
  "key32": "44sV77H3nHMMsaRcttLNzBz7UnvMKdxz5vqCbB62J2Cqf4WUDAiUS8PMLJmDs15afLjvE95uUYB62BvRFLFr9bko",
  "key33": "5q3yZ8wiCTqeiARDxPwRi4gzxZ2C3qDRY4ZmsCQkcNJHTjv2hsrQXKTddfKMcXruomvSxcnJSQ2Yfvx3pFJ67sBt",
  "key34": "i7rgD7QQA9czcevF6uHCK3JVU86Hx4a3Ru9KDmycSKeLrFuVecCvPPqLpbMezCHx47zDbjrFVJ2hXaAqTqew6nz",
  "key35": "4oUFEZ4UMHZbj1cYfd7kmnPa9Gpc14Nt9pPxBjrJyfa8iwWTV3UYsHXE96LFZjGHhZHy1owav2hDG8FMPpb5yTr3",
  "key36": "47DShFYuf3vwAZA4dcGDwnKUxRMY1aUY1iySeRZVrJt2njHmFotxCb3BTHLV8gzKHhFkWABeUoiudaQyHx8ZMuJ",
  "key37": "4AMp6KU7TcCMgHShWPoJTmiufgshx9X7FLo3BQFjkXmYPFKmWF6FfTBsmh1CvUVqhVNTYwcMiBVBbDi9jbeeGV7q",
  "key38": "4m1z9ucWsSjsuE7hUYTyLDm2pUsGAKf8JgivwmsHti9voYKQH3W4uw9nJGeME559udJqZH1nqFsH4RYGqxss9pNR",
  "key39": "28zX59Sm9y4trAHJ4i4yyzqA1exJk95YSj21akS9H7HcCv8oEySyWzxa1m3vKwYKF4yE8cgPHa1XtLhrXvMK4Hf7",
  "key40": "3mTfUduF365jWN5Ndag4WDGHzD7r5vCEPtfCP2K97qLQq85V11dyHkPf3kTU89s4F9TAjhLBMsAuQ5rDngyi1Tuc",
  "key41": "3hhL55i2Jg5o2jayDn7fQzdciXr9yEAu11jdD1SudthMSNDL6y1GCsn4MSxtX1RJ4uP9AJ8g4mnR8CW2R8Cgbo9h",
  "key42": "3qArWvhKM6bKmWnQEr7F3CzbbtFEj9mpeHgpobVkFJnnTQMADgZCyXXcoM81ciCtnPg87Pcrz86xjcv9J7dSM6o3",
  "key43": "5snrkCGSXvCFhpPJJfspoGTpbFmQPSjN7Xkighg77Fcv1EyyVA51N4evn6hdLKVgVEKm4DcKKSnb3vTmUg1Ev5K",
  "key44": "ffWkXx6WueSTt88J49HTWf33Wdm6bvGtqGh9SXxJX3Zfy1PNXWBYVdbWLyS5zjQBx3BmYdbkxKLe3VX4hSc39Hf"
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
