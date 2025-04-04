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
    "L7iD6yjqFFQ4oZxXRP758YgEHKijWw2W5XJyPLRYbor8TmbTxhGuqTEjzgK59SPeh2pyjsfQs5HA6DkjZRP6q8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFd8Z87w2J6yfHyFdyPom74Vw6ewRi39cnN2ZYRMAkerjbB7gy9rCY5xURaJ7jnvN7xuwMs2B4RY2BBNyE96jjR",
  "key1": "3KycCKjhe5PSRkAHpyLfnjbakeUD2hyiFxcmFzLTgcvd6yHh9RTCSURunysk6D59oMRuZt96nAiyhtFqbP6Kz3PN",
  "key2": "zay5NQieg3rsB2UCsZiKWmm7rjHZMXfmHC6NDzedDcSC2XudZGfRYK5mPpYhHXC53mNfft6iLH7J9ER5tZmJnLj",
  "key3": "4EWxWofUw4b9Rr7GAQBxMvNGU51GfyvPKcR2qjE1udJqDcmCMf5Li6KPbg1HqQNZMChKfgDe4waswC1L2K3ahihv",
  "key4": "equfvpD7QHNa136nW2vzdM8pLR9cSi4yhus17ae2fbVG7ruS1uM8wR9CpN96HmFdDvD79TDMEo3vLuhQoqs5xLd",
  "key5": "33f9DywJMJXHewoTEHa3BNjBQ7U5rsCxE7WyX6weRS5WKk8UWiY3AxVSUfQFSbBidgQuZTsqQH8HBPgpL5wsPnND",
  "key6": "3gZEMwc8WfF78o8X1YtWwEV3jcdqmQVpqKW6PKTiogJ2vqyTDuM4cJQdQ9965knyFFjEfzSCrSA868iDmq3YVzkP",
  "key7": "3hRduk3tpVKc8afuWkRWiqSFq2vviaWbrUB2DfDessDe2z1Z8cUvzEXr7ebAZ9qycccEQNTwLsVW2hUEukcYvViv",
  "key8": "2N2um8J9nqUmoTEGjnD22kRTc2HZD7jBSPQx5k6RXXmm6rLzXiuHPh7CHEqwqMkeTnyN37ruyT9A9kWb5AaR7xc3",
  "key9": "3w6zq5PfGmWvgQ3VGZmiY8aZaBP4Ps66v2V2nfEETkWmvEn2LvUFdKqa3zrtihWpjERMVgr3VYmSENfjNx1trL73",
  "key10": "2ew2hidm8LZS6cQxcKiN6gCFCnaSkSEupvUYzf7y6nWkBdftqS9XvyTYCSnTUcguBc6zDvZUy8HSXE5anCpKTd5c",
  "key11": "4xwGJXjfkky49Pjka3nMftLpgCDofgbgySB1Gx8Ttiu2Xf3tzrZbHCczJXXekxwUntZsw3bkjGiyWifyLjWFJtkp",
  "key12": "2S8sw8SzmnbrGkNWctPdCu7RTLjWZjuQNZDnZ6DJN61EnfezNrEfVMzcQ2uFocfHwNU1Vk49BebzBYG9UnmamMpJ",
  "key13": "3K56jjTJwEGk6bmiJAN1BfEdi15TBW3JGindPMknrU2XTqqSxbyLFYHXRAmjS2zK8W7kmq823ztmyARhYd3HKXfZ",
  "key14": "8gKuViLi2xRNkhDYP6YVsgsq5pH7LjvV7mHTTcce7azV8DeXDH77kJmQvFkSMNuMuiRRmsUHidjzA2Z36QsycMa",
  "key15": "3agU6maj9fzBcyCiZCCjPTu8BGA2qN9x3pNc95QDmJxjqdxdUGaSEJ5uE7iw8HdNRvxYLpQpQSrVxmapgAW7mTHz",
  "key16": "2rVRbxH86rrbBC1Qcrtn99VbteFWgHd1mqzDwnmYxKUktQShGcxyRmxRaumySYmYT3mfbDr8qWQHNVHbjm7CGFkb",
  "key17": "3gZXc16i9yWu5deV2fKSFTKWUCCizdnme8vKq31KrR1tw6tSefTzMHUkxgvD8aRubAGo5haD5hUcTZxkCEgNK6zB",
  "key18": "5ucxtjiGbVh38xrwmfudeNCz4VM6NteDv81kqzKZxPgV9YhMjoqJGvdcyVcsV3dBMDAifTbN8XpHP6d9eTozNEN8",
  "key19": "fxbS9SeaQ4pCcLRZBxE27XCZiciGmnUL4vGibB2SBcaCxBwZ2xBXwAs8fBji1Cnsy5LMKCoZ2LYGTofhHQVSiN9",
  "key20": "3zNx3tbay3zMLswCbzcm2EAKmBy5meo4s4GWVbvE2pjWMGnEGnYjcRbd1zZMhrhMsPajQf1WX6cBjBq8nH271xwG",
  "key21": "5PmrZexiaUmDy13yDiJN8PPnJb1CEoT9Dz4iDjSZejWNkei2nozU7QVpq7Qi4sRdA24mysnG7jqoyQZqd2z4BaJJ",
  "key22": "4EzzEqoeA2gyFirk699mN6KLRkUSsU8CcftPvaP8pgkYHy4pHWPrARUSrGc4etpjBpAdfMcuWoc8dZ1QnMVhJZX5",
  "key23": "28gXQEaFw1EaDRnkSXG9EzfwVuxtvWDCT7Eff8sZEoWHNGsLvczFDPSYVQicSTWKgYXYnpTocWNiPcs3xwYPy28B",
  "key24": "pEZ8MhjRWmNkJ6Sa5maehDahwJqEKaBMzcvbLAFBPsmFMuc4csMfYGgGYkH1vZ8N8LQsFLBnSaJRpfAN2A2b6H9",
  "key25": "5ErLbmyA1gT7NEmtQqLQGYHcZHaQzsKsvFxH4gfR9DT8TWShUd4cys881RNMMy9w9GGi3jduKqMFnJHhTP4ML1qY",
  "key26": "3GFZXzZFtAqc1Emh2TbcUvifVfn6h5mrMmdzHXbY4ADjRSUaxFJ8Uu5hafqqjPYVzi2JMWe6NmUXja1FFfGWsTsf",
  "key27": "353ewPnDnFcRwpqqV2MUwWFBNsB6SQ4t4mqj4zySLZviyPDy82ubFY2p8ePDBSXR3FYmmPpk9xnNGNZcQM1gdimc",
  "key28": "4HsLrTeDcbyhbHMMZAeGkC1xSsKLBLG3aneEXnrxCvkGrLqk2x7TAZ4R85TJ8jxpqero7aDQR8BpdBNfKvxJAQU8",
  "key29": "3Cf1CstjsktydK3d6vp8hMdJvgSS8KEteGuFgnRcRw7cfUF7HZiyxQBY2BeVqbhrxSUCNz3RWyU8XZfacDYCQLsd",
  "key30": "5Fpkjb3xp83Bh7znHxAPPjqQHEhg4oQtq6fHSzBz3iYYKLkS36dwo2KaDHePz3Pn1pcWbbQcq7L6F8r7AFYyTxQW",
  "key31": "26UVqHxPvaDTha7yLfXYpHMJemrKs9rG6w1iLz42SgHpagSExRFE7mopBeN1TbbC9XvB2rT5NxsWz5VCYv6Yjau1",
  "key32": "2KwQWQ1WBkpxLYnQRbdDTs8MnCVD2CB8GSioarkG8S3A2Sofmqz6iVZF49bEPcXV87ZHP2Kv8T5ZP3dF15yL8Fn3",
  "key33": "FLM8AnXT959LW9xKUD2bPKEdGZPBvMjgoyrNdUtdChdUUBPc1UeDvecXBrMEF3v7GCtYCM3tWmqHhn43dGjsKry",
  "key34": "kdemx8hXtp8AdaGiqknN8yZNo91XmpVigaorEgphPJqda5Uy7JaR7JNjVzd9tgKjWUdExog9Xdy7cY2E1We1eJ9",
  "key35": "51zoahV4rGB85ZAzS415yJ4oDp5vXXVTAuq3a5oAVS8hzddoUj3Sakrgqc5ehPUWx8XjD8dkJQPSMfvzASZoT2uW",
  "key36": "M2zSWLoLnc7FqifF5kHVPUd6ZTvzWzM8YS2D4Je9vcQ42nKcARuVvFe9wbp6ASwtaw4S45gj5RdttCw5gHGsz91",
  "key37": "3ohLdjS99imz5xk4AE5tSpiqN6ZoB1RWiKsxyRXdpVPZYd8BSp8by8WZq3t7SSA9e3Ak6xKt1ErfACUBNejTd48D",
  "key38": "5ZWVixAK6e6K4ReNu5TfSDMnT9cXQVjrk2f2ULXLSe6rUvBJNCcAsYquc79qjW5HX5XSzX5GFdspHAF3DP8EeG2i",
  "key39": "3uAL4qA4dpyanK95tUBFgRLwTr9mUy9ugidNtWHJbtPBsjXTLTdeS1KXCCFBGbtdEvxYRZLtNJnMWLdWFcBCmB5C",
  "key40": "3cqFPhaN2V8aZi8UTBL13qeWmbhWaLBA3CChmEAZ3uVeMfZkGyUzeybrLWNf56qhebs8mJtBHDZQwTKeJDuE3TWp",
  "key41": "3UPYyKX4NBwZHuVYD1JwNbuQKqzyjuozebwtZL8t4AXhVmqksdjn3kZFbkgntUZgP95tNbq3u6WCoYuBRiDrBt5z",
  "key42": "58XAzB67UD4t6nn8mUrj2Ugqr9Ui5woTv89phNYGSN4hdgXRtdHFYwZGHVL8hNbc83QYj5XLtCwUDkiJvkSrMMf1",
  "key43": "3SmDwtpRbZfFr4Z7r8QP4dNd8y79JJdhq7qt732aaHV8xZWcLypAW3bEHYi8rehMxGAunWFNonRr4PgJbndGcRqF",
  "key44": "5h2ZtWzHEdmRsuMKptAfNXHCBqbRnXUdd9kX8GbpQkYi1SV5NuXdBqFDjFShJWjAugZtbkc5CR415GoRo9RujN1G",
  "key45": "5RZBErKu4DdnaEddTWYKe6C5zpNDGWBwLJNufwKmyE4gP3MBwD6L1pWcRnmafobNK2sXHGG1L6Qm3auG736PRXXd"
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
