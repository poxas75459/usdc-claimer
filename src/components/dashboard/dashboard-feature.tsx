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
    "3vrhdMU9SsobaGeGix1r9bSvusGskZEFbejFcahDuQJURDoDFftBGzQB6umWDWHjPiD9RvtNXj5s5A9Ak45PtgHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j5tsRxwK2EMvvKWj4CT7trXenYtqtih8yceysidnqP4ACCKXkrmXc57G3Cn9y9zyoCquon8fLxNjgMwU1zZBxuA",
  "key1": "679eBEENhcAUgUQc2dAjPS86pzFMUDr1ojiBD6QijFjiqXXiWs4NuzXLqDcSTfKQ8XCcSbdQWG6V62xMi8gvBjQV",
  "key2": "4rXWsP5c1rFmXj8ku5yZ9BBHVuyXmCWoxQEuT1wDvZWU7nLU1UnK73yWwTn8Ey4RmUUHvJaGF5UZkjLQT3TJnaLp",
  "key3": "VKF5buLzxBe5xj8m7ZdvigooghGmFn5cywi9uEu67J2oFpot3c57FdvDzR14iZMm5AzSDKTqw5EfFeVtffteWKf",
  "key4": "21PVDvxET2owRo59szcXbQimBv9JGKkfTjxL9smActkHK2FhofVYnS8tXJAhwAyHc5RRGQkCxREikd6JmNNbrnX4",
  "key5": "5r8ZiRYnSrgGgdEs9zJqiXrnPFKnzi6jHXmze1xaEaXFFMDQ62iJMKiErsPLY6sEbgt3WvvPLMPBQ4wpnbLfyPAD",
  "key6": "5bRKGyPfFKyVqeVnEy5ZyMeUwtDqACfPPJqPSpHPbtB6eLQJKpbyDeYncA8BEHuU5WgjKyGKW1CJTCKscqQ4HTQS",
  "key7": "3sy231n7DFGEarmmqRpC72G6tG1NfJEe6Wh3QNpFXvcUeikg6qNoQxLtcU7ry2gmv6AY5d2wyDZ9Q5nk4hne8yE",
  "key8": "5jQAv8JZp3xzbThQLcmYRc3ruWhTm8Uk5FHjajhXJJZ5kQPidGK58yQRkTZUAadsi4acu3fw9GyurvaQtb6TBr8j",
  "key9": "5cf5R4w7g2BnsPHVpNMXfp43mWwcpU6GmcUGzKGk7SMR2M5acih89jM7faYM5uyosPAR1Y3s85g7rTQDntTXqz62",
  "key10": "4p3k3DpPLpyXh11rYJawDL3JM18dTwEHHv7fi5gKXRBTMMCfqPighjmzTzcbPc2gnWGosTimFnNzTdDwfw896PsT",
  "key11": "2AAo9uFifukzPHKK5fof7txCEGAVbioVFMiu7586fiJDz4F4jZjRC7JJHtNpjBWq3hX8MHPtq6eKswZQQM4zS4dL",
  "key12": "3BanHaiXSC7xK1ysdKD3dpJ7wngidVgsCmSU9JZ2dWzaoAhNVV3z5JEhdhBkAWKG7vrs4YQF4eDWKpVMtdQ6ZkbH",
  "key13": "2va3N5Xb4ytyrBVbpobsA1Nrv1WzamSqnvASofigW4m1zvEtY3ohNasdKUabHaLHjayee5bVkk9wD6nMmP1ixD47",
  "key14": "5jvJuPJfJS3CYB5QctD1mGqhQWZHHooRxUn9YhD6idKqrcyYz8U5u6gCtBMrht7eWcbpwWV8VUKnmyiEAjhTsUbF",
  "key15": "2HXF4bbvjMRhxLm2QRsk36maaNJn2L4hn53hPNEYy7Ctf5NBp916FmWiVBHifVCDaTjZDUXBh8jrKv8FgfqaB5Gv",
  "key16": "4bZQT2hJ4PmeKygHFvh61Vi1CJAGB7iwRyVg5T5156K1cJuV6PsTi6CNnpDDGyeFmT7SsotVLtKt4u3ZG4MBA5e2",
  "key17": "3rfDtwVtr93SwRk7uNmKWqHW8ENcjnG7dgJqgHhDtAmsRahwpVZn7mk4y2UWcNBGC8shBkKSYG1Jpt7ZbKBq4boL",
  "key18": "2p8Lbf5JMcY4ZgeDLTDXsMaNyR1hKBAS92zGsVq5gPL1eH4aXLgVWkQDAm9v18wVTkznVX1NAdcKSPRdiPTzh37v",
  "key19": "2zZdSACJNdw1h6sstT2LgiwQnbwQTSGhduLkVxhMqzQSKaPgCMEzVCZTjYPCD3Vp7pknKqaxQ2jfYjAxCwaxHjQu",
  "key20": "3zRmU7aKi1qZHWtyAm2GmrPrEh4E2ZLsduibxwb1VGH1HtCZmh1993ov9AQrjgd8LQSdj2XDGjjz78JPWi5W8zva",
  "key21": "4ZnhtxxFGQ6M63sAJftN9PDesLEqQotbUdVdDUVooJjqcwM5DFxJZuKDUaVdy43GYmkHjvDxLmW68tGXEDxbfjB7",
  "key22": "2RGRfWfVKenYeNn617PHNZ6UD3MgrrJywNMGHudZgvaVWpQ9jkSqikwag27PHYfZXdUcSw2NodTxSasGLkhLYnjf",
  "key23": "3WinwoWKcoojEZVRy1Rzfm2Wck8Lh1HdYbhuDdun7AkeyvpXVfauoko9mQSkkX9AKEW5wFHJqCiZZjQNLnL74kHm",
  "key24": "4vNdwNQY7BTN3ZxKhb9vaKKgyuBgzTjfgiWNCbbyhVzazXreCiSGG9CZsnC6a2yNzNP3iT1M73KJxUf9rtHwbHfW",
  "key25": "568EXhJcCW2dUE1fgVwbPSK1DZ4tUEkvsatgt5dU8i5vXtHi72ypU7pjaAsU15b9Dwq71ymksXi453gig57bJH1f",
  "key26": "EGw848Z4dBNDoBWRBTUAnv4zkzWSY7iDpieUXLQ5v7gBE1oF1ugLN8KRNr9syf4oB9cV6o4guFDZKVEqMGkgxD3",
  "key27": "2HJy5PT61gANNSvaXLKANRuYyH2wDrEMvQvSBvVJtGJ772eMr4W4KcFkAN7dnh7QM5DJ41gxYqSTS7Cg4ybRreVY",
  "key28": "4wuYDrBdEWi2H44LrfNSb2wP69Sr9Qn7eL5cWqtdqo55fkD8PqpwPUQhghwdSKJvEhSGvvQkvFtnpxRcK9gN9uVN",
  "key29": "36AERWK83xEj21kMiJtXbH8phbSjVMEb8JgRi1k44uQfsA86F6man4pkSGJAk1nnjawpwngAseQVg1Sf1EmDh2fa",
  "key30": "3LYVUpanbY1qhQ8UiDwMzHNiPWWqNUjJkudvQSKynL7Fn1xGxLfDgAAEfm6YWbYTsS1QbHQpG9WAwd2HNZfyKSXF",
  "key31": "bhvfaaGW8v6qXhvF7ewYuh2Yze4UodHLuHV4e3MFVXNX5LGNm9adNWFMafnSNfwyTffmP1GNsJPAcZcGB2hzFq1",
  "key32": "3m9ue1rAjykdZRebpVhnxTudiywrsZ9uRJss5XojXVwuu6xCN5WWvzoxuf841dixh2FCXkUBdCA1CqLXLDQacKim",
  "key33": "386qFNgbnRizvqLcaWzF2hVQsxZBbqxiXpsfwScSYt6vTSJLF2S9aRLN4aZkyGBa5rwt46nWzrBHBxSQuHMPbLNz",
  "key34": "4SVXs1cggrSporP5CgCRfdTS9fnLx8x1nBMfYfR1JQDov1otW4XJVSPFpVANgnWk2KP19xmvV9F1qMaCPS18MVBA",
  "key35": "5LBdCbofvYmz7iNDVdnnubNYGZqBm3FTcL7gcvG59FHQMqh4FLrS1Yb6ACFxkzPqMagfEdSi6ve3XC2jDfRm71is"
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
