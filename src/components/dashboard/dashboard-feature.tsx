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
    "3njhRSE8tQ3ArdQrUS7uEQvZVV4ySFb8dwcywjtoF47L35hnZgztj62KW7QD1YBH6T5WbrMes4Zd3QAfhLTrVXf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "127mLECKQFJTfaq8rR8DLZAqzENs1vJLGcNDJqXUbAezPTzsF2xFYVVzy55HG2CUyYmCCxZrnVLEmMGsC4p4YN49",
  "key1": "FS4wAHkqTWEbQhhA2PuQyAgqToCe5CqwyeF1uxhpvQUCpNEc2aYtmnvHkVKmfZkoQmDK4Wae85KeHbErzHVsRGV",
  "key2": "3X3FMMs45EjTQ4kFhzWZmb6TmfpjKRJnkS33CA7YWrAk3rBVstbWwRWavWFgG9mJMjXKSFBeQatwDh8e8Jg5LNnZ",
  "key3": "5kXVJJw6Mi46uDWG1rwcKSAGSZau8nvhBXidbVwSG3MpVUEk99Z4DECxVPHPwWy74mN5E8j7GRWxvgYPbLxihgxh",
  "key4": "5HRefH6e2neJZq16cAQCZ8EyZ8bSFgrGqNZuTZGppnZTVSiJsSaxwFNzttwLGZwRS4oz5FS2d9xRhKt7t2rLMbtV",
  "key5": "4WQ6gX1cbhyrC7F5jePoPpyzj56f9VpFY2Yxmekwu1z8rLtb4Fzkj1iC4T4gFjFCrNYLamXZ9it2Qq2JENxvW37m",
  "key6": "4SC8hDgWsXo7SiSeGKmfad8RMZqGBQM961nSEx3rm3PzU8bMtp7ZXsNwiqaK2vWvKZNGf369fYASsq8ZJYccy4Ac",
  "key7": "55eK4uk7XRvjxE3qvtUjpJDcd7mrdsEdjTQunQn1uC3fXh4nAReaWLA35QDUBY42Z28R8YuHfs9ezmVGpHi6Ae2k",
  "key8": "5wmLpqwyiXks6yHRMK1KwSp4AQC5KPEoBTapXCymswjMnaH12bv9rq3na6Kod9bdH32286bJig62J7kGxmEAgp4T",
  "key9": "2h8rgH36Z2R8rfZL2TCGLhkpkpbkV8VDcGQPNowFSgQ6RM48c9BtPat49Edb2voz3PQw9gUN9GgdYjKVjsWwPAss",
  "key10": "2q29oWM9fchU738tJTBEMiVJXYbyUAVrA6urfiBCiCTJEUmdBhpqLJc8iXrFp7BphpbPTmR8sHUsTCgB49UdsMo8",
  "key11": "3YngFW8kCMAPTgjMnfHy7AXvH7PJRyzcck4X6Ztuart4soLGyxMz7a7UkDX5LsSHEgik3kT2NpSRLYw2phxariB7",
  "key12": "3sgWrxVrPKv7m5FUosDXiCxj5DdfDC2Gwab2MbURsXY6PHcvZSNEJ1Qg4eiwXYU3vFVejwPJ5vbt31ZZfYe5RKKd",
  "key13": "2Nxx3AN9oS6qUpDp6NiobEGB8QfbLTgJmvdjfmSE3mXv48kwNny28Cayk6Fj3LtU8WfCqCZ9Uy36C4J9thgG2Et",
  "key14": "48cakZgVnWMdFuSi9HiB7YUaZ5r1Qn8dgUraxejg7TSWdUxyJYNuGcGVjNcdM2PmxT71n8YyuCzMWKerMfjBDMFg",
  "key15": "2J34HRiZUhdP1TNpXVkrDGqGLPQJBqTaL95F9BZzLMQ9J61WTTc72k8k8YUFWUj4N8D6SUs19xr3MFYknrqHfccp",
  "key16": "2iUndVefRfyN79Vr6UJhWVAqvEvvsyXvCABxwTsSuoZMN1pMC11TeygxaLmNUK5PtWAsXu1Fiqp2ZFeoxqgaKWrr",
  "key17": "N9KVeQdoimJVLdLv5cEAhLgffZZgvX4t3VNCimdy8DDe6qTDPfC4V4xiDhg4i6RZoc5KAMqCG5SzgCM13vgom1f",
  "key18": "5g4fGwxVTxSWqpHmCYVLn2Cv7xhPPxYuaQSocwe11FSj4hfjEiUhWQ38grg1fzS2YCFm2KDnEhhkrYw5EesygwSL",
  "key19": "zujrtzZ3SXZR2rkbawF4h8n8HNnuzNUXcPreNNQGXAzpvgrPGE6Rvu4W7wVJBB5gx8sxFn82UkQbkvhnz42nqDd",
  "key20": "5x6Fx1Hq6VpxRkYpTWxbHGrJA5g2Uj9VjtR1xsmeeMJoW1a5jpHrUiV7YQH5qAMPhhMzSzJ3gQQB5n6uDNWhguzM",
  "key21": "4BJTt71nmrJdcZYsCr1862nVMNVYq6fBFSMhgsgaGgtycjH6897uPQwsPnh5d3DCXqj8ZGV7mXuHmhV5axVXWqiM",
  "key22": "U5jgK4Sdycr4QeD5JDhFyzo8N9g69qZLPEw9edtyMh7NUM9VLksHdVbSXETM5gVMukpjUz5STwTEEg3DYjJxCGd",
  "key23": "4QJkexgQNpfJkwATbZkhczu5G3ic73RgKt4y6CvueSQk4rjQiqmYwSgc8APHCXtSwaM3uUokNhukvYCXyg2Lvbbe",
  "key24": "2Ktst7Aut8c8HKj3tw2FnqtVyYTXoZNBeujjuVfe7sAFQt3ZnWxYraitbb5VzVyCqqbuaoodWtvYAaSj5ijSen2k",
  "key25": "4APhbdVpH4NWX9h1uVFRQ5izoFT1zz4BG4BVXxjcuNenQxax5gLogArV2gw3SEjgh9qYMKiTKVkToL7Uk8CDx3LG",
  "key26": "5mX42xEdg8uqaSEirucQb9UKr53VAsFSrNvWjK1HZfMioSNexn2L7MwYD6wceJd6UTbxi4ij1UPBGNQrRvfDGBYJ",
  "key27": "36si36YjMsLcK7JnfLpXiy5cgBLxH75zKyi8frP4orenarDDNeXiuxJE1baYqurBg3ipy6hUzbJyhcay52PVwEo7",
  "key28": "5T2fB1CSHrXm2tt2FQ5DAew2Fq6zSHg3iSRKPTe28ZgNfoqiWaZbz3pLJRutbm2CkYiBhr4ZVXsPYiYVQNPcM8pk",
  "key29": "2QyhtPEhcnA19jcF5rDje3RvcPk1wisey5CjT6HzL6i79FjfW7XbH6PLZGrhSgK5mUV1amPvoT6x3VxKiDpiiE16",
  "key30": "gN5ayw6fUn1fn2ynZsdPfmMwFxNVfDwvGF3Bh4wDGBVHCBd5R2aixNe8PZHSS13EfPPTb82hDTi4u6RwCrKKDit",
  "key31": "2oNm6M355RW9Le1WZcoDk7wEcx69M7vZMHW6ZeGmGUCemJLbCCmXZFdEtp9wo4bcdeW3R2T4ANkzNziywiLzxX2Y",
  "key32": "2JG1eA7i43jwqwcqx3btVocNsa3SDADWFvKpvKBLiT6zd3Eiu89EvswBqiTkaiWNQdJw6qJkSXgyaYLiJbDRVqT1",
  "key33": "5rapV9EQmEKZtapbe3jL7BeLva2MEns6eAZMCc4KqaCdfUYjPk3sM6LZRq59aPrK58B6KTSdGJPkxX7eZeJXQ5c6",
  "key34": "66S2zMobGAv32fj2CryTNHQQ6aGQ6JkgDtiKmekhDxKCcikhTrEPvr9JYfpTCGUfHGBc8Xwy8vnpGYUtKE9dDspF",
  "key35": "4JZHuJWXibMB12z6cdHHehDaVvkyuMSoiA7bvDphHN5GYGbTMukFJmowsRZx5zFTCiUheZVaVSqD6jth4rTGj3Lv",
  "key36": "3aaByBY9thfCGuxruoJQhw7QiXjkaNUfaoJoB9uzE1NE5fuocY6hFhASpWaXdPo1CWS9rG9H7qbx5yiVHH2CVXLq",
  "key37": "3LjLq4HzNPGFGZ5zTDKSeS9gMn9oWAF6uFaxFGpgN5uHzSw36xzLLng78gHUNqdCfTbDGzbB4EkJQi87kNqUCyaK",
  "key38": "4XPopWpdGJuQHfNDPGHuAZ3bJXJGKLpS3qBe3cAdG7B84xn48kGXLcYn8cm5hZnHVeXgQJFU5tV6Fc7goqUyEVu3"
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
