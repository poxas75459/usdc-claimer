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
    "5i2p8fcDdqgP2GmxQJmu3prhHA2FnQvMbWCibXa9G5p8TSnNR8oZPC82UAPiBvkuQ7FcHbVN18HPLaftmCxNFi5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29LrNTYvnMQSASgspzBo5hdLKW7m7vYJoeR2euWbBQujdcLT1XvFk4UGWqnWu2jDVE9Wse11gba8HnPG2Po5apwT",
  "key1": "35XbSbdHi5zJUGHgbkNEjsketwm6ManyrrJ3s8tTWwWaohWzZ86jYhJTWYMu7Gz38wNrPdhDKNek8wV3oc5sofan",
  "key2": "4C79rcmNZ2f2oxeiv42MjUoTfWZQXpjrafk1pDW1gZmPijDyfwE8ZbVC2mqf2vksGRJb7ac7aBctuWVUhN2z2tJ7",
  "key3": "315XVWw68W16SfUxZcYJCe59nvrHgba8N1Tw8hWUxS6AZ4Q65iCyU7oR4HWibQLQoyHo86WYQagnG8FpT8HNQ3ju",
  "key4": "5Gz9wjnmi52jCFec7dp12eoVrEH7sk4pudqCzuKra7PQBMHKU3xPmRMAV3LkzBivwf7bwcb2oi3bEdWDg6FXrpGA",
  "key5": "5A6Z86t3ayVWJmPhvtf5CFcYL74TDnAcFUp44aW685P5JX3qzFgCFtsTjwd5rujN2YABs1TZGmu2RDxbX36eW2ez",
  "key6": "4B9yYcYcun8b91KHwdZTo7uXGfTeEfH7SDuxbZGnM7o4FtiCVGsuEzrM37426XfZxvpL1tpoAC45xw6AE5jeBhTH",
  "key7": "4vUQ1tzwHCQR3cMahsfdA3Q72y79Hi3L84RD8TQCttyB2xcR3chHuh49rRTtoL87XeDdL8oE5xWTknMQyxj28ce4",
  "key8": "5zBdY6ShUbaDKHng6FZQuxwbsQjy8WznhCWgQSyhoaaYryLLNsy6jk9UmsAvyF3bCHoK3bZXmpMwXNTNYdy5gc8G",
  "key9": "2UvELrC8YQofRfHb1DWRfKii2mrqVh6SWL4piD3g6FpBGsyyVyj6rwCAJB9zebUzWNB5SK7gaQirU49VSqkZ6wUa",
  "key10": "yzTXZRpk8hZ8wX9fe3uQBnqR5LZDwM4SYmCqk5uFEJ7NMj6cphbSahW2KRtW1evoUVoL3mTNeAndGA5N7Qi4zEg",
  "key11": "2wLRRdbc61a7eVG6UHCc3rw26ze8ARXFZkJEXkJiEDDVpx4jK4pNi2fTuFEUDss7rM5ZkHCiKqLUKWT82bAHrvzE",
  "key12": "25LTABPJ44bERQp9oE1T3JafHpy3vCMVYXNFRSq6gKsDfxRZzyJSzrD7hTDU8K1UiCPdeovTbus1c5TjPzh4Px1N",
  "key13": "tJcQ88VVkrSvYqMdnk69YyheJhVXqLMg4uYK1QRgLHmMMKekq715vErkzFPKgfjzXekCARPuHoHm8QSkweL9FrQ",
  "key14": "mQRgQ7m51Za23c7nRKF4MbQptXLSPRiMUcxG4Wg9QnRUj5HJR9BMjjTzv67f992pBWsHWiP52ZtnXtYEpGMsQwD",
  "key15": "2QqmmfRRvreMTaWExQab8TdfoVBoDEFkbUg1MeT9k4QritZC8kWu1yz61XTHkpzNGGbvPefbTd5Mcfb677RDdbuP",
  "key16": "2qW5nqSqMProDWRUqcxZyJz2UYpzCXagc79gmqRaDaVmzxTpdYsyKog8nbEFETeax9FDf2xv5MArLYA8B5PERk4H",
  "key17": "38ArTPrZbwFVj9ECN4c9ziBTrCRG1NUazYa8eHLE4iDnFHuUPw55DwtpcPWeTknFoQhk1UQPTdVSzwugZPjZ7G6k",
  "key18": "34N9N4aa8TyTT17QkGUm1rH5qUNFo64dzS7NaneoAnRkeWY1S1yYKqj3jqB92D4yoEU9UyQQWqZMAd1nKz3twHB1",
  "key19": "5mAeohAnm1EpVxKsxYFVAuwJ1jAXnwbfDdKBs5X8Sa27JDTDzM4rtUB1aCAR3TSrrT3sxUir8RwkMpqaiZGJceG2",
  "key20": "5G5Tsh5jkWT3obF6kfTPmmLmQcwQudwvPNcWuYS2rdssQBLVzzHs1Yg2MehSbLws3yN5XeULkQjmAvbxGXQH1edJ",
  "key21": "4z5jPpR3i4hBsSiJx3tK4YbobBSt9KzzSvvo7TLcPVSCdHqVtDuN4GeKCKqBbG4NZPqsiKx1XFEPNS7Tx5CyX66V",
  "key22": "5Z584Nnq93c1Kzq2h3ygy6rN6vUQ4KKKEXbVh9kV63yNLkQkF41DFNS7hFFbVwxSqNGoEu4pYNeWHKz2bd62j1Hx",
  "key23": "5er6gErm353PpuJh9k9hrApcj7U6YviaubEQrXR1Y1iCJWLoQu6YqnbZ97m7szL3b8mysGytsVrSLqhyixu8Ps3Y",
  "key24": "cY3ZK2NxBBxTfRsioWhsDJYgs25RM8ZfiqfWqQAN5vYUXsyi4kJVbeZKQsF7NcQJPGURsSXepFHvg7SnAdsn1Ee",
  "key25": "3A1TcMTgGMQNj7xSHaPZyBn1pgrNX31jXfB6wKXDD1gR7B7jXqpmbPQgf4i1bUToEKr8xfwy6knrXuGvzqYnE8qL",
  "key26": "4E4EqXiPWADxd3KMQgUaEw5BQ7VbEPVspZpybsLK3RE3iPJ5NGT57uiCS2c7G4JsoNXqK9SoZnzH2yyfdHZTwmK3",
  "key27": "4qun4jhyLotzwjvJWuQHD81aYKNx1cgqWxK3vE5Qh6qZ5W9MiStdnSZsyYXz1mhWEag5LuzEZwCTkmJLwDCaYGD",
  "key28": "3F8hykZWqYZDTPuVMv6FAkCyXHUonxbrmkowWv6jynZdBEWFkYcjCLuatjxPPaz284MLsDkm6Jx36svVzPmgEoZM",
  "key29": "3jZRYDR6BMKBK7jC7M8Py9xMrVCPh5sXTq2XcNjKq4frgQfBv2zkjnX1AJzYg8CH1o74rE5w6Xe99Djo3CcgoWGi",
  "key30": "2MhdJ89ESLCMsyFSCyd4mHJTTNc3Rz7LLaoSMWez7VnXsvSmRq7Tvaaz9x18tSpuHN8swjx63ZsuHi93kuTNewq",
  "key31": "3YWRysJgnC98qfG7a37pApzv4Z1E6gJLYRUrgdB8pQPrrh77WduKvugVB6vJGKP4KoTrPgyG7jnsT9HpZPdknJce",
  "key32": "2wAvFEusHvDdgwYGCjSC7RDHyu8ktLPqGLyooBdA2nxQUx5bqcASm1MrqfiTJb3gAJdL7q5uRVRz3ab13C9o36TA",
  "key33": "4tHMgAU729WgiZhi63eLMUfbHebDwzNJu5TRnPisFfNdZHh4MLozr4JSYiQDFp9L9JSD6ZX1SPRHFbAsm6EdnYKR",
  "key34": "2yEqw6b1ao9sqq7yXY5mVsjRMeu6BWhhQMFYKMKzenBzdd8D66dJazvKZBvZH34JjJ1ZqW9qHe4mLRX39CvPmxz7",
  "key35": "Syr5m3kmcqEMsH4RLGoh8CLbyFcUnZjyeJaMxmh5pomSmrhy9AicBpkBADTumwAC2MHUtLFFJg2Fb3bMFwsty7w",
  "key36": "pG8hjbTCJGwDqdhTm4cfCKyVeumqG96ZdbZQHS3hKyiBnQyM66BXbwy7QcQCyPVxg4aHgWeZ47Rm5r3JH6iJiBK",
  "key37": "4JSRvCeBZ6CrjqUDoJWkUXcMrSh6m14S194reQKuz8RqydGFQ2zfWGXre6fRh9KXmsyQMJpjZTkDbnznU1597TC3",
  "key38": "5XUb2uCFU9wbCwnRtjJ1Y5ppXNHqxSSEQD5SaDhM64RF3zsvCR9gP9LvMiL1SmNkTn4VUZwLqhMSR8uzvTxRRWip",
  "key39": "2LpZ6gYspDD6fHoiyfz2wZLfBeSm5QFHyRVUEYB7gPtsMxQK4KvrYWvntV37wqvdQSmyZhCdoRMySsHp6YeJRp5C",
  "key40": "3qnrFLqEhVjPQthZUcSZbkfcwAiAZa4iYQNWdjZteLpU43womRVNdQjQNK3crmbU86qmFPDJRanfSMzSFpDh6RJy",
  "key41": "64dXxKmaDso7GLGbggY5xrGfHBFnBfwinKwDQNGyv4LzApB493T4c9fCndnxMT9y97cHG1GX6u8xS5M9czThwE1e",
  "key42": "uofJuQdVNKJTdnotvEKqU5Rvs7bY2iVfLZ3Rpgv2DZtd2Xtnw3S8f2WUc4RuButNHsGLVdTnhqTGyymw4mscqmB",
  "key43": "45B9x1cUiRYC3PsQ7uGjWHLdUmdnrq9KNpvAGV7kpAA9fFDLgFViYuUTqZvfHF4xu2sqTqFzHSPKGH4wsfnkkkmJ",
  "key44": "3mmnateVnzMoJT3HQTcZBDMxQGBsU2ftXzdj5nBiMZa7najzT4x4MKMSPiK8H6YjcC7WK3CHKXnyJT6tNpSEVeeN",
  "key45": "46eAQCsn3PGgARXF6mJ7nUtpFsetEPK8KRqWnhswVZYA7TaS6Zyu2TVD67gdThwqde3dDfY9WDZ55rquxk77EeyG",
  "key46": "2rih4JzycAkdYug9GCs1EJfs6vQuSxQS2CYUjLfjpM7MrrFGZDaaH7VM5MYSQeKPVKyVfX3SiqYf6wm9d4jVXjCA"
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
