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
    "3QwhEFUkkTNQys81AwnqLgcNSMhafnK3Q1jZPaPF33sucP2B4mcwKSjK4SwRGb96jBCF38NcQ8wHW7W1T8SiA23V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34gizTLxAqjSbLevrwbcyd7YRLdcGtQj1ZEEcwdtT7ChFUQK4MpvqQVCmRgEban3sLZTVBnqkQK3x3SrKTEVHyfx",
  "key1": "3p5ZZbym1WuZeRWWuCBPxzu6X1EzRyVGxdivxaH6UKz4RyZxx5hgarBDvJSRnXfLnwmpGvudgtmwfsWsTJfVhV2U",
  "key2": "4ELwmeHEe91sAJT29P1AGoNuqjxCGhm7ZbVYncMxhFXFpacSnXStK8ZRmpt3tvP4SX8tSzC9TW57qA8EHAkgSJJg",
  "key3": "62WMv7aepciBtWwdKw6RFLrCro8WoQgX1vRi6ZK1hsfTUFVXWBqWongmQ5d61gnmPE2bj2vz3PBZdoqmajDbU7T",
  "key4": "2E3z71yMrXMKikNLBBdxFLsWUcsGjDyGuHyTvwM8syLNxRW16QnTStUEpYXQf49M7YK4bieEmazX42U4rrNZvTVd",
  "key5": "4W2dd3r7XJUo159N9KanFw4MiGXASLtMo7H5c4LCKaxYapNw4SfJyYBuSjP27tpQy8hNkDGZ9XAbtJQ7U2eucczw",
  "key6": "5YeBAhvuh2g25F5V3nWDvCzBtHNmaeSYjyzeVUuyJbBLSeQCNiDoGMRCxs62FEzNQE2i1sWWrYuKNVKfq7f7mE2n",
  "key7": "4BAihD6rPAc1aJBygtxd8AzeSKT8dz1xHuT8Zx3qLjMo7gAk6joPxfVW99SkeUk3RkXpiJDtr32epUTw9i5oati8",
  "key8": "3BY7fWejxdt5Dqkft6BLdzcV8oiwYkDVa1ufW34qRHNujn3k996yXJBXboswRBmnPrFCXKjzhHUm8ckvDPpsiwRX",
  "key9": "2KopfFxX7UKrpbYDArNrYFAzUQkktJUsaiWX6UtLWUDdqrFMxbUSnEAH6yzMjW9VBpmbM6gW2aRzjqzA88JmRjSX",
  "key10": "5WaxTU6coDCv74BUySxh4mX96HaErYbtyByZTPXEsHTnQDvp4VnDViUCmJX8BMKJGbjPA5dWWCi1aQVHsfoJc1UP",
  "key11": "2e7RcGP5FrsSixiexTzNuaenHPcJMuEJz6QprmXMwQvvu7v9j14A9Xe8rt8nuukESB9AjTNSNBzZxhKgcVPgj8bJ",
  "key12": "23N3KNQ94CegKEwFkFjhT7SBvMPg9GKUJF63v9Qa5n8o1L1QukaKvk7EGu5UiMcaTfi5jyT3W52eRYPdcSLt6FQg",
  "key13": "UmStD8Xu1tTRYiugVx75usSQdDc6mhMyEHcL63jHJGfwNQUtGoaeG3YZ2vDeXP2FE2BsjxrbAJcNcyMrnmAM4dt",
  "key14": "5zvMtqexfTMPRrzF8M8itZMX7J1Tz5e5LLs56CgTy2EMfsoucEXHUS4sHL6q8CAKvKRJJb9r3pszAqToddzTV3op",
  "key15": "5Hbtgxzu6tGGyef1GD3EzismtpvSqD5k5HT1EyQ1jNqenDof4uRpU2GxsGtj6d5tJ6ccLAeRXURvezNBa6J4jqem",
  "key16": "4V4YZCCa5h74sMyrfVsvQENJGDjEuyXDmfWUQmCcuajZfwxGxLqXX8M1oimQM4vXwDenJ2SwaDw1Nc3o7BEYT61h",
  "key17": "4bHrkVy2gnvuAXVmJFEV3oWQfydjdyLgriUuBRujL95i9BbtmvpagPhWxYWk78zqaiRRimv9gbNnu3hzyBzEqrCT",
  "key18": "4EEZv3tiB5MktYjc5TZpM9BpHhV4KTPq7mxHy9yAkrPP6En4iRPitv97Tr8xh9oW62EocnrwrE7JqnuGCHZ7K7H1",
  "key19": "a6x3BmUgUjxdg8UxzKfQP1vEgGhg7wpQzuT8j6AbL21dHVoT5xomA9gR7FJFcV5pLsMTvpDEZuDgpYaGQYvYQsb",
  "key20": "5EDfnw6L5882qd5JBZ9Fcunf6JrbuXKstm1jkq8YzoX74MwskWQCwqUf41GH2edQBRxHEqApGzmfdSqxy591Hne4",
  "key21": "3Aju2PngCt5dtktZKMZ2uvsN3ymNaBdH59Ty1M27pPa1DE6gaD9uf7YG8sjVSNyCMpMtRLpqp9qv47G1pzSoBT2L",
  "key22": "5Kz8RjCB9PSFymjmzjyDwi5MPTe2StdWa2GJpviQSm6WbFgxDVmWrB9Yr5hZpVHHJRXhquxBPBSZXRQ1i3RegVmH",
  "key23": "3qoxw57VfkeAQ1uPw3G2XdfgxidN3KQxhHjGik51BhSBZshff5xaUTNV8yBqinmZm4zeXtFAsGB47HEi29gZLimu",
  "key24": "2rJGZ69Qepn1ycbcMHyebKaYUw6kuNhojNv6V5zsjUGLHEWUY9arkkS59YSUzJWGkvpYq8Cpoz6LeCXNcJDztud3",
  "key25": "5Vjbt3QT6RdFjUPdTpG8kD4GsZ7vwByR4nCZsXr61L2zrG8CfpbH22f7Uifaofi5NowYxKqspLjR2Kht6eDGMhB9",
  "key26": "2tRnJTaVP8toGyGU5JatXpThVzAirmRZpeH1gWemSfXMGEeHnVF2gCatxBg8QY4FoMmhSSJCbMwD1bGwknY9U1Md",
  "key27": "5fxLzvkm63byB3aXvSRr4ojdczT5zx24x3nj4fCEbz6ShzPuGVTqukyy1KePv5wLiPkkKLPJxkqE2RKQEFft2wxs",
  "key28": "5z6ZXpkwSYFXs7KDZKiiMzE8WSFG6Ytp1y468EiFVHsDkspijio6K8NrPnG9KFwQkr8UkVeujv5JDmpm89CSRAe",
  "key29": "4REfjk7RV8XNrwSd3biz1ww7hikhUPXmbiWA6a1BvNep9P8TTJ79FYY9BFsNLjtmZLAnErUTr6ap52onsS4BA2i8",
  "key30": "2Dw45mp3GopWWqERQtFMHt9dwmJyc3BQ4yUbKjX2FE8etABFMySJsiEarXs2Eo7WmpgXYRvp5GcEk55taUZuZiKU",
  "key31": "2FZdfFRYkQTMAsjTCwWLhG9i9ZXJMbPKTwHjtDqQqYkDiSZGJeAajDrbv7Z8Qd428afebSgvQhxUUEUKiJyzTknm",
  "key32": "3WvUJAs19Zb2vspVsp2ji8pbQQr3jDGUKmeypD6dLuc6tEHNEnrn9fDHsKq5vHd1CxSHFnmcybV6BDoLau9dWqkA",
  "key33": "nhbmFPE3ySkuGFbuJhVABW9ZuVaKRdsnjb6tiyPFS8PgekjoegUbzQA3qBSt3kGLiQsqyAZKraiBPLcUNoPdTvU",
  "key34": "2Fz4FmeRonCkPRUN4Jj4RR84skpUxjpHzrKGud4X1tkHyeZzfNCLf5HX36ztmNAvFhpVv9r3JhGYhiH9BbrbaXSA",
  "key35": "aH2hiMdeukaT9iimJmXZPgArBey7vRTgZGeHGBamjWnJ2GKPNmX5vq9Xg2JQXEg9LoiA6kqDwkcCoCSWXHxizwW",
  "key36": "2zVHbCKfGWcSakbTHJ4ePMuszufGvyNwZ1UiPoYZoatMZPtQ1Y9nuPfvMeSHLv5RrR9uMFd4tdo9sGjckgFCjgVq",
  "key37": "5KxV38gmXifdiBTQo9bKpYWQKiF8mJtLzyorhS9KoYuezsY5mwTzCG54RvawBX6wKPTMpjxVJNi85Y7uUsfkintM",
  "key38": "4huSHA5segtjyCD45UjFtdeur6bPtiVNxy2uYxE9WnMCiPuo7LoPSDpFZNeH9ym68AnSWRZ2nj6iajuVQUbxNwGq",
  "key39": "2FNGSSzEbXmt3wNr3gXSJFc6hSWnmfixvHzU8TqJ1MzxKcnjPfKWEmDNCqFFuY934rZEF1r1hkvyNpGcMzcurBa",
  "key40": "4C5NHQVWHk3LEF2soicVL9uwzhBTKCh886R3rcWFWgEjXvw4wWtVUohNd8zSmuzmhQRjTFcGwzt9duxfVRohGYtc",
  "key41": "44CmrkwxuRpVKuqKrGuhP16NwPVRwTMqaMyyPA6bG9C9TxaV2w1SN2odASXVKZMkPHQZ1L7VHdUmHPbAtcbSTtV1"
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
