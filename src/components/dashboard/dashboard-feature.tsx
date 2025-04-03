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
    "2s7PkdXxFhn73toWFYaSgbX3B25Fh2YUnNxtAhFcubSrYqReVe8LzQvfwQmLxmSUJFEuu6modaRTUzmDMbnZ7kYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkiXKfmBfmq8yZoQp1x5LWZytURmGEcY4DbNvscJsDBpcUQCTi3r3zMjHs5nEmoKXnrxwtZXUXYWxyQvNbtN2Su",
  "key1": "4mF9J4yC6fVCup3h2FNxFESsREaXfNAd67Kr8A8mqnN67PQWryvGzf2MqULGsYLEvvXA2TFLHzFgETaETC62puFC",
  "key2": "VDfiGx5PmyPPDBZcinvC2EsvyRRCqrgA8CpGUbez95AoJiLUxV53HKKwq2dRmQtdXKyokiSSW8j9oMtrBkomdAu",
  "key3": "2ice58RTSD1BG4BbSZnSGctq2SB7yv7XuMVTkJiKUMuoGLLhHZv1P2xLU3thP8AgcBUrrASGmHqUwL52YBDh64yo",
  "key4": "bda7T3KZFBE27ssfc7DeUvCZXp2wUoVHrkePYxhDovEVDxXUtd9TFVWcD8vnhEW2tnVPs4A1iy9CtmURETZrRyi",
  "key5": "5i9jv8miXA2rqQe8Q3CNJDkiY4bPZdMFUQX1ZoPRpzPEi9vriYLLhHcnE4m4XKH3iZ2xLmJpbjzBcKmoY9uqYdkk",
  "key6": "5DNv4hng7ZtpampRLgsiimY6B632J5fKBDR44SgszEmz6PAkcLZk5b5qDpvnVxs9SxMXKzNzivTTAUGEeH2KbwCw",
  "key7": "2FbM8GLdAocKJtm9kv5vMargkTHiGKcYD5ksNGwRfEUBe1a1MkoLvJJHcL1VjEDaDbxx77S3TyjFWKP3ZMJhVEjz",
  "key8": "5tg5fuzkEPyQDumztiBSAQADbRcb4SyabwVhDT8pfWiDEy2G3ZJ54hFz4Kuve9cehr77FKoX89kh7Je5LX8ySnsp",
  "key9": "2gbfdmzzYjoBRpQWsn2tWyTmeNFWvrAzisipcNQS5F869goKigHgzts6Avk5tV39xAPP4Du1Q9zG1XLhprf64ujZ",
  "key10": "45EEqB4P1kKxrWbWK8KY3yNTA7tpB9nNmsEdKyLjBk34VkJWvjQHYCW6H6pt5NQVVH3F1A3gEeKoWXiLhYhE313M",
  "key11": "4653WnemyruqBtLev492dbqdPXfqQCaWBbuXoznZppEfyNAebeieWgTYWbh1ccMrc5nBWtfhro7Ug4uZwT5j6PgK",
  "key12": "hmdHF3oba75gRu1QZwuoZZ44QD6aEdLK8oFBVEkK4Ljuspr44GzCfiNcgvFLSr6aMcWi66HZzUn5qwiCZx3phzL",
  "key13": "YFpLf47HrmJfRqhu8gU52g7Tf5c42HJUrsfYaPU4yAEBs57FRJTNKZZB7wagSDu8xcFY6mLuhWND9c8NAH2hSP7",
  "key14": "38dQzjX5sLnhbot3NqkZAfNxEpuoepzbtzsSfztR4bVtZwYnuAmuf3DZnDwfXrYShLSVySMT8TDANPPizofqBKK6",
  "key15": "oYEXDpZ963uBU9h3adfmHfEGq5X51QEsu98YgGfCGiZG5kwMDYq6tF9mNDcBGx3otXKaVNAkx7Jg99ySRbinupe",
  "key16": "5y9PmCu9ooYygywQJquYacJQ8FSPZxnGyiV26jGckoafskhcg2526cMwmgvJZ89iKuCsYo1is5F7iaKaCsJ99wT5",
  "key17": "4oQkrKND4FN3kAGyM6fiSv3bdSdYypSP3rg7r6MZDK65FQPfxFsQjCMHi5WL2gsrJKoFocgLCWt97Dy2eVVXGe6t",
  "key18": "3XPzgiPX68M9nSk7UcMHzARiaGijCQteSLFsm6hHTCtn7ZWree4t9YN8uETpupMc3drPrNAgr9H5x6Kjkhx3Zaag",
  "key19": "61Ub5uhkM2PPaubFhhYYvX2kq8oJNdNYpGL9ZttSvi3tNiPMUvQ4EexXQ2hWMNYoGmpbhVQ3PVHjxsFwW9TBqptV",
  "key20": "3ZFwTbXb7mKx95yc3fBrPvQ9dUFtZEFahXS8shKrjQ7jR6ugH1muaVujGfouRgPn7Gb6Sy2kxMTRmtVp9NyS66hL",
  "key21": "3qW26WnFeV8MDtZuDyFX55ZyjzgCTnodMADaT4Efw63XjiUfytyb2uHzwNw3URFNHUDhuAbyCTAA6Mw1Bo9TJ6Fc",
  "key22": "3pjvkM6QakDgWhPBwvUQ3qbVWjMquJoo6s22omLoq52uveS5tqbnfYPfpvuKh7tY6V2wroLQa1gM6RJf4gQ8KiRH",
  "key23": "4teBTaFK74EGkamZ6TTTNKd9wqPKrqwGKB8ZJXF1sE2RasAEa9xsMAusCM5untmDCPnxoqoDUmTQYkzYFkwVdeJT",
  "key24": "54NwoUSgqYSYuKgARqyYAEpx2VAr7Qcuv8ydSmEhGYoiQPMP51mTCjJyFRxZTk1Z3J9Q1DUjs9bwSSDjZL8gXec9",
  "key25": "c3y4hFGhxTSzZjf6YADdxWUHXUXfDiPojBauQzTEtJkdcCH6LoDwgmDk8fcV1w3jkrHNrxSNGq6d98QgEt77w1Q",
  "key26": "27ZR5htcCrmjoYFtogGhQC9iuDSyLDqnWLXH1fykspFqB61fiyHqiMR1unGiCmSp4giwbb9P7cFxtij5vzk2pvwK",
  "key27": "21iF5a8xg4xBX87eNHfi7uKNf2CPLmy9iKfSPxGvTDtUGsEbocmt9HHbRu9tAJ8PFfRz4VVCivLazRNXnZeGQqKS",
  "key28": "2sh779iqPjFwKc1pBrFbBc22ydKfcK4FCDjanuNm8JiVKUUKch1WDh6xAufHke8Hbdoejjvyvx2Z5pDmEgc2ZZTv",
  "key29": "3seJLGpUnJK6HV3qpEVEgtLSdziW1ar3vMhxEw9WWbu2NDfTspFSMdq1QEh3XnmVv7ry4TkKNmK8H9FiDZQiAFC",
  "key30": "xe3frLktasfYqZXx83oTYhNXuMJHkaxrpCDVgthZ3DeW39F7boPaa29PXYJVkYn6JJoU86GUyNQqrnk7wfQHAP6",
  "key31": "3hEV73dkB446SJeWNDdXTajtnfrxYXccmdXd4jMrgq31Bw7FUMYDYkfXca1jrAiJnEcwS4ey9Mxp4nugNYvvRmKs",
  "key32": "5yDj3exSv3qRPwAo8hxGyjjfufxw73hG6CQBPwohPZH2kLBckPdffK5b1e5k3Rd8PeJYj5w1ycSsZPiCJSUthJH5",
  "key33": "2xNCh7oD5HJYAgMWuZi3YJbsRWbs7Ur5f9toZ524egGz9DcLmch6gqfX7RerMo9eiRMDbTUheZxyku7aRRZgt6xQ",
  "key34": "LPg69cMfCFPcN9A7ZRWxc36ockwf4WnRYBuw7huR2TvHaJixB2AjRULJcQW9mqvfTeAgHvrbFWhjySkhUsXvywa",
  "key35": "2vQnkLJs4BYnKTtGZMDMvu8utyB4LsWajJAezpcexmJYhd5vqC8cbxC1LVegyonYKY5eqWf6JU9GKbRotRLHm4uG",
  "key36": "3rq4ZLLxBZXm4q2yDfx7udUkzZWaDv8xQkQr5ZiqxvPkJx7C93hTdVuBjHPFT7UPWyDDc4uz2D7zXZbBQEtZqnL2",
  "key37": "2y6CRz7u39Uj5mDq8HQC4rVaYMi5SgbmRGd3D9r8Mj4Qrt3eiHYnZPd7LVkhZ4sRCq3TPfPQV9ArRdkJUyojvtx8",
  "key38": "4XFT4VA1JGwP8AYrhH4FeQVg7PHvdQJLmiZakZx1ooVKu2BKanw8TmPTpsgwUut1saPBi4RQ1ePJ6DgqXoJvtzfB",
  "key39": "5yRmWgsp2E3K4dm9EKqGXE2FFC4mfyDVdk9RSSXrF7wknLbUVYebP2pdDk4WhfJipu6Emp8mzex1EYFygDu5PSV8",
  "key40": "4DwbGW9zkrqBaJpFhva4js63UQoPxYGGwCskqNZAEFzqZK8WnQjErupEW1axYznvRzisveAwiAuRFom2yutyD7sk",
  "key41": "arog1S3JQWwn13AW7oA7fmD9Y4TTJX3vh9SStmXQw3bqsE7Bfx9W2yJ4WLjRwQEAEfcDyUPwQLjjZeLWEew5js7",
  "key42": "3cr9gtH256dRY4YfuuJqHeXDVPw8Bkdrpi6gMNBKvqsxyTma2mpKAm6kwvQVVS4bLUaaXc3tKpknP7HM5vpRQ5ZG",
  "key43": "2QedgAXysefm1RCsKsfkN2LUtzdv1PEpxUkHsM5ExDd6psnZPhdMYKtv5ue5oyj6EmhwNqTsSGSUqe4aCCV7sTsG",
  "key44": "464x6sLFBEXtdAaetNi4ifU4Law2WA5qzmYx8Y4M6GfUVQoe5Npe6CaFAbsaKgxdoYBGgpXruNMRNtZqtj6VjrWt"
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
