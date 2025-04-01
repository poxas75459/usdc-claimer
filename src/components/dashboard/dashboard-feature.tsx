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
    "5qFNW9VfA5BQDPAMQUHPjr5W76GRA98jthqjNpLUUZ549uqhfEstKZKHZreEbxMdUF426bvZzoNeYrCx2TKsEgH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c26QkWPWV6LxzSSLrkFWg4dHow9aLF1rXzLLQJKJQUVu2xAQvNuYDnuDqur4mJSuKq8vHaGhidBspoZcvNUPAbh",
  "key1": "2JmuARGwc6TiVqK3smRz444PEGbX55HVJAuzLZ24w3ijo9G4mAe7PcxFRthcoLr2h23fYQEqQbxugcqtkvS7ixTB",
  "key2": "2TrYVFD4SyiuYYhepTA3GL6KM7M3YXqQxueZdN8ZGSTz71i7fvrhNaNP9abfwrgdopA5VPkgk4psuVbSfLRHPn5o",
  "key3": "4jiAawdSfH4HpjiKc6Y5oRGZwB7GoY1h5KESc7htmucxbSHHdD7hNBk5p1Y115qKH3PdSgsgatb7Lr1pg61GDioz",
  "key4": "2SGdaqH2n8Aut4n565KxZDVLC14habAG28A2q13WH7Pv2SimoFHv2mKQE2rpz9PBXbZLJ7CLGCidSZLWbSSc36Go",
  "key5": "eke9C7mLveCZP9gVNGukNKCxLwbHy7Pa9ikF6GkqewpqHkf6kvSowHdxHdC8ZCpxQS9oTHrz7cn9QQNteKuLMMh",
  "key6": "ATru9E51bgnYeojjbvoVAwGvkRpZFmZ3azR5MwuQZi5mWVea7vudBrkwLZXg1YKJRQjXKnHt4WEbmRMDPN8HkxL",
  "key7": "2Gh1Xh3WfiRpdSxLNsRQH8Wo1ZDHjQryco9APoUjDLETkHgcNNvMdtXP49LhsAX2osaWduMUVJv6aMheFpzTJ6L5",
  "key8": "2qTKVDq9XwVgWN2Yrntx6pJMbHdKBE5LcCMk19uMkgns962WTyjFRjcPgtiFjU98HwzadVdnVWGeqpsNQSeCZtUx",
  "key9": "53pTzdXYjX7GCSdHgFdLqGEJkzYm27qbmbdQ9viGfgyH2uyrP4ScZDjYTeHp23kpqkgV7GS1LaHPTLtHxuwwULdm",
  "key10": "4HkWDnCTabEHYcAbmSbBirUZcqHKzTRn577CjRvDsbkjByWEdRGaW3ww8f2LQ239B1XspEpUsTSzwWT5gcacyddz",
  "key11": "3DEBQjEPKY6fLkMrnQnYHRvkc2H6TNuWfih5Rn5vD6wReN91mPcy4fEbhVVGoWBUnwEAA1XEZUwH8s8fJqNtABkU",
  "key12": "4Uoi4Jqh95QLnzYW2ryytKbgT5xGVkBfxNDQeXTtZKDnB2nSUL4D9MNjZiAs2rRjnWLt5VjMbtqx1pcK5v1i3AH9",
  "key13": "WQzWtBWD8NQJcmc89f5Jy6Mu2Fthb31Hqg1Vxh1wr5xwtBcUq31Urh7N4qHPRQr1Gf6T2o9QgSxsdxGpgXkbtDc",
  "key14": "4xtFG6abb8xvSjy76WaUvdjtxM2ZRCN4Bv7ETaD4czvbd4bXK8htBjAuiLzskVCMs4cFYNpTbN9wWwFWX8tVjrC1",
  "key15": "uJRdGVmHLihtHV4SD7oHnfmqqL2rGbDH4g5UmzPWLewXAbnnHWSDrX1H4gPSo7GTgwdTG4qCz5y4YKEcZGDmNV2",
  "key16": "2hkiZ2RpkCTSZ18pTF8DuPRncackFBCMFg8PcSK2Y9AjXwQZdt9e3wGGBmDPatcg2n27YNp3yxuEUnSaC2X4LKvX",
  "key17": "b9oJsWrpQZEPWzx88uihqf51oGDqpAr1dnBFA4B4Na4yZUp7FpZrKWY9e8SRivvPTxfP8s9GU6UAktDr34ioTZJ",
  "key18": "rrYyidYMVbw954fgBNrT7QYzW2yYJFQLhhkKp75oWdVDUEPEuo2xooYMtsYZbn5qTRrRvASAeBKNVvA7GdB1orE",
  "key19": "5Ef2hty8TUuoHo3dkfUzkFnXLbQLjtGTVaiN4gXfZH5Y3eJEU48waT55mVUSFaFAsXyHfRwPGrxqVWmWd4XQ1TL5",
  "key20": "2jqLxYAUJNbcNv177JAKKV9fLpZ5CYWRwJiwhDvb5563DmHGkw3TRBrLHKBr4ghuve8nvQA178GBW6Vdx8tTG1nE",
  "key21": "2LgufkKG4WN5eRWXZ99uv6GQUCBBMBJiGiUPsFNTWrgibn3ouqQUhKgsPmshepx29KYmXX8yoXYGE6b9CwdxGma4",
  "key22": "2jpiqxyozjSTPZdJAxsCm9hHjd2CfaJBthYP4bAzQfPAwXeUqhzGAJs2HoX6BJrGne5QdoXdfrrbMRNUcHYeteKk",
  "key23": "4ACC3MWokYrHb9TXTFUc36N3motXJa8mUyru14BTSJuwhWQ46uz2iwVzrVv5ApiMY4m26nFFacgrcbGM3X1M4E22",
  "key24": "5YfeRA9VMmb36vciSzdcNTTSMQoLNnaktaPB646k2qTpzdjdyeXC9E7FJAPVGHjN8GQT85H5Nyp8zRVEA3ULdMa1",
  "key25": "61jvrRhRe5UBYP7v5FGTD8fiXjPjfs9NP3kH5AXSMdBzGo2636LKZeF7GRFAawRx5yS6YMZ9AodSL7jrcAo6KXU4",
  "key26": "4M8F5cjPCknDrk2tYqJQu9JQo1FM2U9W13ERLtUeNF9E9AHVYjiXAWWSVP78GoKwEMPQP4qWx3WsN7NhaUVboTb8",
  "key27": "sMNMM38S5xWz2aV76WCgdFCEjXaV1KXTQC221AV35er71cixo57yttgjeyKUKYwsL1eXUMELiju9rmTVZkD2eUG",
  "key28": "3ZfQc9wWrFhzhJomYLx9biWzzezbLfp4QRM41DxE2MzqpKkrWSTTpaJwE5pPcd2atzrxp9cGLv5U9piJjfZNEHm",
  "key29": "5e7jk6A9rWiCfkJ3cH3MhmKoffVsDyTgSEP8edhtUpfRCbaxghkUVceZspzxookPgN7fDc1GL9HRqa5DNAszDJxb",
  "key30": "3ojqY7d39Q22xHuBLsxULc3iNDjDu9T4y7uKQo8ngNUgiqGNR8XM6dvZuUJWgECwa724P5kNHsNLPYHwSPcavwXB",
  "key31": "4zaAheuW4FWAYvsCvnS5f92u9KtjCzPto8Z9xQEVDqHS1qkqhxvfujyfisH8wkKGeCLBr1imtoZmMRhgmZVTtYiV",
  "key32": "5ooNqwLCksr4qpPCGjrT7EKmbrAuFNhxisYNBpnePG1Sk3jkZw4yXVSnC9XUenjWMv3UJqMCjyNc6S8ubFhtpK8a",
  "key33": "3fceUJfNuSnvKM8ZUkGBQWnucxDk2TNi3ghcM9sHTZfyJdrTuAUt2DQ1WsnP1Yb151fBB91bsmNzoMMDwYpfXDSo",
  "key34": "1kaG5ca7BAwjX2VQXzQauVt4E1rdoUTARp1qpDSRNzuyHaFp1NwBT1KT7z2Ru4JFqMxbq61UnUJyk96Q4LSZGFi",
  "key35": "6oeZPmjNsBz1L9tjVKgQVf9Lh3cxjbqU5FnnirxMv2A7t3ZdrEXYc21gywgtR43GsBa2CXFZupAWZ2HGzYLKFD9",
  "key36": "4N1MmuZDR6BFJa26Lj62dAxPw8gcnBnYRcs3L5SyEuhb7rSLg5RrueUZzVWJURDyEcUv4AMDrtcgVDcBwzLBJZvY",
  "key37": "471hS2gqReYtPUUfZosDukdjwVZVkKPQmWRhdQmTSsxoGy4QgFFWXmpC1UpV75guu4vQmebzvDD3jUAy7V3sEFBQ",
  "key38": "5ZFcbALJHHgkmkw7EAgJv5aNaiodoj35GqJ3gjbqndRwSj2yoSdvhnmjKw2UoXDBp4JvE7Vbstka5nepZsMYif2a",
  "key39": "p5spviK1SDDSBmNDw45FdsAmPj7YbPrDvkRzTySTXyRMi711SEw1oLF1tyHg9eGiSCvs9VxHW297m3gQgGXGcSr",
  "key40": "3sgFTA5KkVYzA8CtWCXCejr9b6uuttDUf1vsCyGxLwqBS4Lqozb8jf71oGcmXhNNEUSwF4SthFkpuAEUduvRqekL",
  "key41": "4SALRCe2eC5Z4StehoSzpGFv53ub2r8LXCvxhdakQsXssiBMtF3GLsEsJhh6uPzpVpF9GdEX328zEkoyHUShGXmb",
  "key42": "3nhAGFR1pFubyiTubNckuBLS8aXBdmDxRmdwoCRSmvgbBZqcikiBW9yuq8gE2sdGjTXLfqmexNnhxUY2Ur33FwYF",
  "key43": "5DeRJZgGTskuHBUvayVGQ4JEo7Ag1UcPhGWF8q3tbfr4mpHR2iJ81vQuuZ5QmTDmR6hftwNsbEiSUbzgZMaCQ3Fg",
  "key44": "2wEBvuFFBHXHuG7s4Hr7WgqMDVeg4u4g5uu3tYxFdqX95qVkmgJXPY9erGk3W3782aYWB1E6Sbqz6GS3b9qcNjp5",
  "key45": "2QeyZ98UqZMK5Z7GvnDa6BWMhPkc5NxMaXtNg5D9LqD9pjnRZQa65yNYaPFHZyicSurwU6XRLqyVuCwNTdcsZwpi",
  "key46": "2mQjUAcREy74CmiyAEZJKrPVNWEhn6jm8uEixNDqopAAu1mGWLsBKGJ4ZqhqKEjyqChaJe4SghLMwSaovmssb8wh"
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
