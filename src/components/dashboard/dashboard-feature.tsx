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
    "3sXDLSyxBRwwTsy1LybxoS1xMqFEjCNBsaxNVXivi3HXaH9cAEzA8B4GEoPKuAxgvMevsr6gcxQtiZrPTptRdcrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpmfV8RJsUSuwFGgsspKQ3T2d3N1e6nhto57QGvbybJ6ohEM9FVj8HsMAyzo8yJXR6VnwEP4rzihcmTKpX3LgpR",
  "key1": "5YwK5LZBuFqGmWoZSZUcjczXjMy1RM2GG5n3tajfM5y8QieNiSdZxCT3m65vA8zdDRj2Gohz69o99QBD8fMkG6ad",
  "key2": "Ep5GEEzQWtABmqbWh9uouPf2oNkVtWVHGGcEQUBRwkVdfUk8vTmdEe3e9y9cC4ZTz856t1w218kmF3G5aDLzn4f",
  "key3": "4hwf5tsKuTuRB9ypXKgX9x4Nhm5yiQ7oVpj59kNMMLwR3JUMkNbvRDVsaCUbPhrZzzwQrVBGKhZUPJTMkHWGqrk9",
  "key4": "2RPusQjAgSxw8NMcd7PPvUG76q5hV1nimw3ADqdyoXNxU4mpzuAiX2AwWkZxDNYWjejZEttbffbBUxJJbVFvyT1v",
  "key5": "2zDfCuBjbKCJ7rHKmQVSTYUCqSehBAMs67J3p9cvWvNJDPS9bh23jYRPWxQp3qkBDLMhkgCGuEaGX77UraUghS16",
  "key6": "2ZszCZ8TwNYRV77zHueQjrCuRdQ1Sqd4Gz4ZtabVvqu81UWAvz7dvhdrHuSKPzgmb2TFJrHgxGryeiUG9QBHE9k6",
  "key7": "3ouK68g8E6bS9j1EVL41ZeBk6oFrogivwE9LPtBP7BXgTnizTP2sPkpihsu5GuoUsMu4VqdFro7A8NPBSVQZsQNL",
  "key8": "qCwn4o82eTcfNxDpP6FJ7isAh5s1xh9SNL5uijYXzusrJhuLWWngzQ1GNmjAWF4iw6eZ7YvNfQ43gkedsuy4Qhe",
  "key9": "2EuTLkPStqSoftk7udG4vLruesSmzsazFaXcVdiPTWjKzHzkoZKiv5WYuFnweANPgaoZcsnwA9H3nP3CWXaD3Dpv",
  "key10": "2qk2jt5SNoa5iuwtAKRw2GfURhDQGUq1oEiAktA3UvpGUoMMxQqZYg9TEZNKbXRzQtA7t24h4QJXDebrLvaGtzTy",
  "key11": "4LbLha7C1YySkJfMUW14EcLrgm4gFu3A9tCLw3J7TRoCHf6jx4woahrfHzg3KhXGLoF63QENaWPXjWGLbv7mXqy9",
  "key12": "2BxhybaYYwTDwcDujsoyremcb3kpw6N4h9j7PVxeRaSAUvumdp8ViM73gtjsbYMJkkCFLaND6s9pnvT6CAX5bq9w",
  "key13": "5ogu2EgSG6NtgVdKG9o9MbsSekJg4ws9xDn9euYxb6ugcTkT6TZLZGf7QXxKMndZu8DMKR3sspzshjPBB2fAqRxL",
  "key14": "rPQ77dSm3awYg4m8ZrmSs5ArJ9tLdqFbYPBXDwm7MKwsyQA1V2jLGZssC5Kr6HEwgPgU2wgynujSQYy8ymKGhT8",
  "key15": "3RvgYe7RFwZgJav9pchdPR1cXDzSUVLdm3LaUxPLp21EQxzySQXgTpEB8qDaLCyEYVfJ1PxLqWTJXSedJyLXH43t",
  "key16": "BsxTYYi5qcDC3r3jPpunVvvgUtCnPa1J1pgfknoUJvihV37Vmw8qJXEv2ixJFiLAUCVdRZTW2DpoHXNJZqvLp79",
  "key17": "4xkP1jsqr152V3EVUBRPQfq3KWgHfBmvRG3TxwUVkzgJacc93hiFoJSTT3h8jscmNHSDYAijcZngnHY8azMCY2Yh",
  "key18": "3xLZCsb5BwKzZwQtWyL4sZDpqWDPRPbJ4Jr2JPgJwE9CpxqV3Z14qqwzhEXkMYnDsqpdJa3weVFTqzqvWKVWJn2U",
  "key19": "2HSUUxAVT5JoU9yu17FBEa1i1vwMBhBSmpj1RLM4scQ2XCac2zMiyG8pMTfyVrbqZjC4H9YrPqi6JxxuhrNUvrvH",
  "key20": "2xp8NTuig7YfbJASNdGwcCikyG5sDTeik4EYgB3juwhLTkdoH5XeCE16aJmbduvGWw7BAyPD1W3hisAtNfctJZQw",
  "key21": "N2hMEUFVqWPdHX2GPsAx9dvp4Hpra7qnBAPUASiKy2Fk7eEtuKq95U7QX1B1t6aJHY6cU42oGmV5pRHFRRXTYDF",
  "key22": "2UYrGMkZaWq2cSXzwHnWcHpELzQxrLhipGdNybZ8j8QR9USfDgjMkRh6L6u4iQVj3KLBBgnhhL1L6VESraWewCAq",
  "key23": "4ckW194fhhfE3XXYJEbPvw6MiQwyJ6tc7XR36a5ivSh7vVYoEwhrR9JkEqiCvK56aJHyoA3WUjrW74fPQ1cYrLRm",
  "key24": "4UeWX6BMpzeoibxzwgc5YgPPiw67MepZo4dCN5wsh5S9cnwUjJRYHnYZWWL3y8rzpbqbbGiP4kt6kdkcd82PqjKi",
  "key25": "6LnaLXXNz4YF66uzuhFRteU8brvcCyLjYvyzaPqcbwVbmUyaLRP7dEiuRUgEkpdSsVZquHBNeEAmXVhBGSZ5Tmu",
  "key26": "4AozyVTJSzyjkMjp77hM83MAPDM2tsTe4thQkFCJD2c9e2NuazFi4oqSACfom67Frq1L2X9F3xDpP6E4KWC9smzb",
  "key27": "4mD5bWtrgXBjX3vFjiUsiFKdmWMYbFd8Y429daHcZSp6ieyamTMgxGBEHFypuys86BPCYtJNsUEkL8BAJ8LLB28D",
  "key28": "3FNi4mPnw1ner245bmM7DXXH27yGEFMsPQJgRuQbsBNsUBt8hygqsF3cxA8hgXWjUjzWHGsLx5MRU3LA3e9hfw8K",
  "key29": "2QQ8uov9VHBncSEPJpNwCx1Sidt2oViCdvCiKm27jjtJKZaj3KjVf5yoBKPncrwyo91MkAjuvdn3x8jfEJJVh4Yb"
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
