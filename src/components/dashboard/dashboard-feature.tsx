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
    "5Mt3LZbTnzfmBhNK2vSiiiHGyZckX3w9dcJ1EBRuWf9ymrWfEFbkrEnPf8Fadwxm28iYwp3qBZzcBVNJ7anNB6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kz652rJRtPCp394VdRLHu15R2hFns9kjroyZdjX38zY83yCeTZeTuTzxG4XqHYjPXosnkrYUg6dHPk7srFFsCLo",
  "key1": "4FXAc2PpnKvqZnx1yZRfomKC6e73UwzR81ksgms4E4pwv9LeRYfhLYChnvm6WM5gUHPyLjuDqvJyuSqg5VeXfkR7",
  "key2": "49hCHXTvXuEwqy4CtHHWj8u88TatsPfTxb8XVTH7ch5ZhyUJZYwGnKUxbuvD2DXx26tn7ZRZWVqj2iC4bp5wHoVf",
  "key3": "36itSTUaCPrdYJFJrCEj7psiYFQC48apfBcAcbvLDGdNSiNTYckusFiccqpkSC2xASnBxwMcwGgHnU8DHqCPqSAe",
  "key4": "AatA84Rswyh3mkq6iHRy6VDYNYrjAhngJhw8sUHMCy35V9eHPRP6B4iqcPbCNz8UpWo7uAwSzG1MKzpS4qZTpMM",
  "key5": "55w7bq5hUoHw7qPprXQEYmWbPExjq4mfwFZR54QVHiuhB8s5RbgStyFPRJiPG198FBZ8hYh1a1BpV5sNgEMo8gYy",
  "key6": "4AMHYYVWLpwc8x2tm1EpcoUVFVW7SHL5eF9RJns2HHJCiKj4of29wx6MjuuvLe1RMNGg3p5aJAevqQU2KT27wAbc",
  "key7": "2cXMGnYvyCUbaocKQdxMyEHSZCzjzw8AHvHFAk4sPsLJtLHCh4aWYcfiyx6QDgVK1D7RNEMA5XBC7b33ZiWK8Bho",
  "key8": "44MdrYNHMXCUgfhnVNLFKpQLmK7MzUumCVJ547xWCS5ianj9ZfzP6gc3ewX3bikewBxoi5sCkLn17K2hCnijF96a",
  "key9": "29xuG7DYqfDaa8DD1qyCKbWjZgNwAyDBavr1xrFgR2GrFBikWD5heoV2T9ePo4dL7s4gQbFLPLEFZJ39aycRxEQa",
  "key10": "33wHUfad55rYhpzwDbYhVGRvjwNq42D22GeFBkPzttoiuCK4Cg2PYCuFhiWTmN9cUvBfrFoXDWZcX7fT3og6dpwe",
  "key11": "bL2cMD8hD71cpJZYoLvpZYye4HmD4jeNwSeZYELKsqL12B32nLb927mkjVJZxYnvZUnSzyYQKkcbpchnW393mot",
  "key12": "21AEGaU4eW93LwettjdpEbx6XSvqdyqRvFNnvYVaGyqwkbnoLwArYLZe6M3D3GB5JKwft2fioWzZ34aD2v4pYwg5",
  "key13": "5p5a2VHdnFo6xu38nr6gmpbzVBB46aWJJJNXTBCjX5HStNFwuENChxNPY6oQqkD5mYiVHwXR2oFuPHBjNTq83tSJ",
  "key14": "57sTD1rHTTKvQV4bx7Azti9vpGvmZF7spQUrKxQvy32Nu8Rnb4paeHLYzGmFUNAVZLCpzNmm7i2sniGM3WCMxWwS",
  "key15": "4vx3cdsGyjE7U4deXnMRKohiprETqVSCvhVZysVuTP7tazH2BYcKQBqyW3L9nVuvGJB76p6tRUCZRjk6WhA5Ge49",
  "key16": "2mDLefWUJuX7Ny6Aa7KSXnFJkqEdkFvWhb4pvjS2Acr9YDfYjvEGruDjt2DQEDzBbq8nAX7dWwJmM2ut325frsSg",
  "key17": "54WFK5JZ6oRgXJZfkQ3ongS2R7f72XauxX6G1YDxQ1s5i13SbFuXoctsQ9haonPpHUib1exfyXmvqzi3dZZQXcSg",
  "key18": "4puDxrf4xVbM1wu9UpKFMxpcTpgLYNZyP63248PCx8dPCeWqp3uyrfz8y9T4nM1XzEEiyZacNMwbfv44kSpMPJwm",
  "key19": "3g3mKvm8QRSz4sBRhNgM27dHmQB8JBBCJ1gdhcknjogCG5WD1BjfkYkb8i6XSVUrhzwXAgNnbENCaFZVLsijzpbX",
  "key20": "3GDUYbKoBMcwEdekugHgPYYjemyebxQLWL38ktSm4GMhVbXvCXX2G6su9Hf7BA5mVzWtYJMU67JJ5HumJYri87y3",
  "key21": "G95pMLcwEHjd6z9PU2fgHVUrp7nMPfWKokcsEaQPaHyXSXXN8gUcaUi7FJ4U2orqAg7smnjNcvQULeLkEUTHedL",
  "key22": "GctB7VambEvuwi91NzapQXrxK9yNPdpr72iWepVjbv6DCTD8ydXyctb3snAAngRPwbUCvdoNjdf98Q41mFBAVSP",
  "key23": "sZywrZpFbk58V3dE9N9RJRq3Hy3WfqsbtS2Np7sSeAL7Kv19UGVQZWgBS1HbPy5ef9ZwTX3wUf6R6dpUqxsPs9C",
  "key24": "3JeRAjUHDRjspZ6G7sMwm5HmXQmvTHm2kGvMH6RcxC6kVS8ikCkN3zdHRvYA7SjEYLfucbWYymDotPUGbVRC6aXm",
  "key25": "3hXj2HL1PzeSP7vtEnEGKSe1YEYG1pkBEm9VZJmiNdunHATmJQgdKvsFzHmznKzH682KjFHmNzt1ER5tYWaPwese",
  "key26": "2FnddyWvZiwuF6pMrYRH14mJhDBY2sNmggRBS4Qw2jC91ehtpFDPBoU9SBWJJH3ZEM4s8NofpR5JSxZGtx5rQBGQ",
  "key27": "5rMaDruexdJysonJA689b4KtWVBfq2FJkhf7cJXxMQyRpRuMi57Qx5wAZHBbyAH4krXuNnpFgNo8d3TP5GEQpiwW",
  "key28": "CYoBMewLpWpaqBCySTeAxAgmiQK4jEzkzYDUeBpgK59ptdtwbJFVLffPRBaCVrd2Qim1AYTTaDaTQkQv5TzwrEL",
  "key29": "4GzyfQtJtkpaBbcAS6JqHLjcPZrc3YCn5R3wMx5ZfS7VpufUdSTQMAFj2KUhbGacmVysVU9xc4vDZEUxmn5UrGaK",
  "key30": "2JUsCDnY4N8y9rFVvMtjWw3AujViUpLuKpAJDPEqdx8WvVYU8BTQatde9s6GV35APJad3ZqWCCQJ22tktNqRohBf",
  "key31": "b6p6scNUy1svBRibpN5UAtAnv8xQKRPBdMoa7gTFkWEfBEhNeUgSz1DvfX7sgZtVu539mH9UEXp56XDfoV6zWbF",
  "key32": "3HrpaUDgqi5rksSxrmYZptUndKQfN6BVcMuHQ4nDRHo4yFWS3tx8LD67ckh3DhFAQ3rFKVKvqafqLPiMtFgz744a",
  "key33": "4zx2ngtzXs8F7akyWq5r2EiGNQmS6KcrQ18VRbXwHGzdZdRoujoNar7cDqJCDpBRbLgkeNQ1HNkAPayybSu86Vg9",
  "key34": "2BABFpMxY4XU7NHE4R2YCnskamHmkHNENBKBSGLCBLPUrwYmTk2Yu4GvwNVNx9A4T8wmWAdy21XHXjzggakBbwRX",
  "key35": "2EnXRG9u2z1cKzRUvvCpdEJQPp32aVUFR1PzDSkcWmHXy6HFcLdMizanSbGboe2y59n5Cu92qWD7oF4UNF6iCba5",
  "key36": "3QLWAEeha9wtUoLCLcbnyPBNZZuY8TvWfMMoYr9FKZiXPfr9wQnerx5mgyeGtXJ2J97Z6XTBiRcv8UWdF9ek3hqi",
  "key37": "2brVqSsdyj3P6wK9mtsnahspbU6JjrP2zkRooojsyU4X4ZszUXKtaHyTqzunjeTpbRjL9FUxKCnci9i6yB6s83y",
  "key38": "4XyRxhqCZQhamXMpWCx9D9S4KAaDw7vKYjXuWNviBWafAKPfgSg1zGJWfZaRxc14qtJoF6EEmEDi2oV88hZtybm6",
  "key39": "5KBKGzrCRv5RMF5paw8RFJVum7dJH7VGXigZCPrHF2cNdVJFhRr33rjL31ZZqxTSxGXHimUUdwx4e2DMNZWfmUx2",
  "key40": "3AqUf7WWsrEZZSy8i6kn2MN4Ygubr7LvjXcbR4Hjfsrqq4yeBu9AY9pPphEWnJWtJHBGazvw6EAvKMHXSBRnTcg1",
  "key41": "5PPNGAXMp3sGA8H5WgBof32AAhyy2H4kmSi25Pspjfetr5gCFdbJouSnnWnovuEKvCj6SS7dNRuasmyxh7KkNsqL",
  "key42": "3XqXrV94RducwvbA5cRbeLXP1Bjg4hapqUPNrP8hWj1vgtrj2bRvFgs4P27c57eYHk1Q8Rqni9Ky4qQ6e8uiNSr3",
  "key43": "atByqzrfSD7k8mvr43kq1Aubvf48fEhL6YfXD2H2N8Zv9eARGnGTvS7KfDWQfQhZ13VQVmN2WmVPMrFNvFGvuYe",
  "key44": "3mH9yaDvLkNQjhMgjra3NB97K2TW5S993dxM2FqAjkhSMj4hmAjw8pnRmBhYphPufLhwv36VGJui7k2tx7WPXNKx",
  "key45": "grRNL5tfZ7Y4swrsiMwHffPjNCremBgEY5pkoRs7XwugqAPrBBcy3nLLBWBscoK3WDs8pF4B7z5ujQxRq6BKtnW",
  "key46": "5cH5btZx6FxAAxqpYVJpgSgMtWuFBRmTsJfhEMoVjxghBTMjLAaw82eokZxYRBedUNJDq3twnXaHfhWaytCjJQfx",
  "key47": "2u9dcw3CyvbrrGzfmiL2enAWMRmZ85sPC12NrZnQnmJK6XPwPViBdSahvZ6x9nWWRqohbqNu8SEACUy9Yjf4df1J",
  "key48": "5SE6NsEqWaQDbCaXb4VwUEEuJDzQ97wVMnnUZGPz3ogh7ZzKcbestmrC2JUwdsYEhGpBfzKAy5UzAyEQAmfL77gA"
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
