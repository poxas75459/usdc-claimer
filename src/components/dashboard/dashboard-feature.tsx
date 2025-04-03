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
    "5pNiTDh6m66L482vkx9ReVhLSm1StJsZfQYe8rgBMyCWcabzXf4riqCQ5nAGhH5VHsziTAGwkzTakwvU5JmdStFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qr1t9PFk9emr7YN2gmmNAujC8VmFrzKnZwAsLMp4m7nm6MbGrtEPJNz1d4EsptGJCpvAX293rH4gBfMoGTkapwP",
  "key1": "2wJ7QJdf8GVbSDyGPzu9Vj4YcyS5nrbeZ1KSQ32mAWzp1tPYjgpj9GNXimts3W3crDdSom1LuU75ffKUmaRgDFPp",
  "key2": "4UijmmLsEQcLWshSLSNGa47tFT2q2CeTTQmTWNitJ64hi9E7Gd3wSKHk3QXFX7msYH8gY144N1z5muvKysmaMsX1",
  "key3": "rR6pEGXC9EYhLXwW5Jv7GoNMyKasgpacjNJJxxHsB9dv4SCQbKyqHx2rh6vr2u8Uo5J6EoeVvZ9nkRgR5oTvYG5",
  "key4": "5cZEfgFZJqweTF556BgWLP6tWvCDRLaPLEZEcF44SiDRMLB7QgqjpWTgpiac5D79wqMdXXcUA6PtLMA3ZmKiTUPX",
  "key5": "2jacJCpVsyTsJE9C95Lp1ZEHjAtyUmawaveSoZtQDnQS4sTLisDvnBQvcRwNEL6pnDmWwhqRWn5AhhKmjj8c1zYd",
  "key6": "5DNtBbbCFmH5htmVa2iXz5nmFU4MBm6s9Rkzauq5jtt61V3gD2wgFpifo9BwkG4kGA9gQiM8C2q9LDSGWoxmEWdS",
  "key7": "4ikARLrJ4ejb7ggQBK6WNdzBi6SR8BA2rDzMUhZ8DCpwerDcqv8raHQyxknDiz7dquASZ9jVuuX5ofj2E3uz8aqQ",
  "key8": "5bJ4S77cnqzSgLT6qdyJh9d6DMtqRvaZpxpTjNzuPZuxVLHYeAU3RjbGpEkdSdCioSmMV9gbTf9U4WBr6zktupGs",
  "key9": "3tpfkfvYJHtr7mqQifFHsZjBJge2AfnSxJoyWHAv2dXcvjLt265D6vuRyNs59zYJRYgwGTp5byEwC5myCmC3enHu",
  "key10": "39hatgDpAPa5BrvurLsQ8GrdkDecejWBdfFUNjNBphfat6bexMF7NzDG16i4MEQFszpET8r9pCjJ8vyu8um7Xh5g",
  "key11": "hPtVPBCgwDFcDCosQQhtkufTiKdnT4LxyfASQNpzzJfWq58w8xEXQ5rZMQzv7FVAYFgqRLo8FxejF3Xemk4gvBk",
  "key12": "5jm1VdesUUspcaBePCz2of5Vyiy9xTP9nmFUU8BfuUP5qZVSMUsdT2Z6fJKXSG8Af2MdJB6dCeB9ks5j6TDpUy6j",
  "key13": "r1GW7XDtTNTr4sQdnSD6DJr32MiWr8pzT1TeTHUoQGxUCQzkXBsdQcnvN7ZwqzTJLJnnz6LTFRP8XUwJfVe8ZAw",
  "key14": "4HEZkBQDVhvC99FSxWP3zoh7bw6X2ib1Ky6vEPpPrJzzn8QjwCpp6o8YBLY8rvsNxQ1kh3yPjVNhLxEGyLpspHVa",
  "key15": "3J6QcvFZGfzfuzfck1tjsyDxsx3o3VHZ3Jq9oda4tyS5JctFGnvqtbVsVHZjm5Z9L82KT7Zezw7w92daCk7gNXxg",
  "key16": "3kS9Dkb4ECA8fDDa2mnpWzMdbBckh7N23jykVMKj3AbDzpjyF2iSqkoBRuJn51LTvBktXS7NqixsVa7Tto6FNVpU",
  "key17": "5QsTLUrw58ag71wNXpii547KX369seJhnKASP5kVAp3gaUcWEho4DcJKwrM9Dj5h8uVcBrCqT3qhRRGhKB5R267E",
  "key18": "5yb8T6BqBHawK8Ni998RzkgH66rwNdpiypyWPnv7zJj4RUmF2kE2he8LXFkYy1NQm3MjDtNG7KH45e7E4tFyHzGS",
  "key19": "55Ek44NxZovLytEHzic44WU5P5vSKqoNetWvuJuFffvTrnwMen8G4BGXFxtXbhPzMEjLjDqtTyjxvXVja5mUgrc1",
  "key20": "3H2q9uty7AwoD4gYDruV4cBkPb14AGig4BGADSRkCj4Fn3zcFGYiizKs6TPVLmCyeW9o3ruryAZqXiNC15eQQaV7",
  "key21": "WycmiiDbiMuTqCTat2yiNTuwSpfMnspUnec1jPtFDMtu2rY2HcjPUw3n9a8ektEPi9tA6zC1LTBbXukUc6QCoRH",
  "key22": "3hLSa8pkasENfWe5S635mEDre1LVRWPCHoAj2wLXUUP6zgCsEEiS9KXAWK7JBnzKGiNj5WCRw3jUSvV7WEtgv9cm",
  "key23": "p7crsLHCnHSoB5FqLbAxkwZkydTUpznTdukvsrBPzMJqLaAcdkqBoh3D4ArUHnF4jJib3gnahfVGa4hgS4nPknB",
  "key24": "p9uxwnqjNN8ehCyMTb8qzK5eMj8Cm6ootAd4t6zP6v5EpRfe9wt5pykKmjTUoZCfGsqWf9n1sLELgjuwC9h7kap",
  "key25": "3aXvam5KQLRDLtqDZn3KhjAt3RSYK6vLt2r2sGVj68jAxQFRfvnakJG3tFNwEoKUWnmAdpPwnKFzqjhq6tWGAuLX",
  "key26": "4GFnV1KjkSX6grDLhKV5kV8E9e8Rpi41vkpURYvhp3KSCrnN94P8mHLet633sY4zcykvg4zpNNFsy45LBsJpQMrG",
  "key27": "3K8TxGkr8ZWjJgLY7BT8M998dph1sFGPvc2j6DGamP3hTYDH9AKZFR9Q8TatozBQHdeg1sQ6FRanoC3HREBq5r5w",
  "key28": "5nnJeT7uS4pPKnz4yd6kBKs7RdHeDA5hCTiTkjEy4iu9u22X6dDtu9wby4aEnBtwAoki7sfrdCF8CtPFYJWvH2wQ",
  "key29": "4rT2d7tNVEh6V36MhRMSrV1D7mtcmjEw8iUzhnAsR7EKhZRn2VBEJmWc6bHajm6YTdAqwU6Mq6EoTd54rydfHTYE",
  "key30": "51hMYVzKhf9qJgK3rXzjAkrEuTeoGVyJPS1zgebrSaK43tC4Xd5Mf7o1C7hPcTGg6jbR1cT2ZLAcHDPLoNhQzq4M",
  "key31": "NmPNkp1tfdSGAELa33fMJcvquABJ6QksGeDmAmjgSZT85BZA2Dpy3EBmDjaYraJgDRUGMm7DbNs7G7dAZaUVUrb",
  "key32": "46cfYGvUHZiueGJT43tj2Zwy93eSVU4x5G6m9Usfm4t7w29NGoj8yVjxpxYDWTpde5jf8QkBkGPwGYacnHzqB5ke",
  "key33": "X2PFCNtjA5EbYAWbVF5XL2ZULVmkd3Hz78H8n7jgdPn9qBNNmz6kTm7prQddz1kbqMZY9rBVaVqQ4A6qx6tkUBw",
  "key34": "5R1x6pfXQNHRFpVaJDW1kTrcLFmHqKFQ7ePT5VaUghAxdNqxrnMeCBbshyEPfnhrUJPbLtjJvQ98rrHA6rb1eDF2",
  "key35": "5Mn6UFwq6QTnrXoBy5cSCN84XZqt4ArRKTXmHnDq5MA92UC7zBY5uKgt3jTWuTN8TvfuzSiFJkcwEAFxjJhCkWEX",
  "key36": "5Rrsi4MjK3hBAZCffD1pVSSZs19ng9xXoEn8jKchzBiPDFNyr4TD5sVJWUzPFTf2mUUicZmwpR25qt66Mm5vDTEN",
  "key37": "26y5brn7fph6GdBqBAKjAavKbn3493z5a9hzjUcYyz5HC56v5n8foDeBnbAfzbcUtx1EXi6DmiPsC6FL9NupdKXP",
  "key38": "bUEq5RfXfXuTGBc68zdgoKzP63SiPUvKvkj5HJ7ymJgjoj2pT73UxxcEdcz9Z7pfW9HvyeEVN4oq5djmMxZTHjR",
  "key39": "35B8rkgHVwhmqhMMUBaVjF3trzcBycVzRnh5yEo633rsg8Moobn8iGvqxzLmbYuyTRaBCKuporHwweMfA7dkAfZ5",
  "key40": "5fAmxKJ2ta8Er13M4nfCCpYsHmq1E5B7cUpqwq6bh7aAkWXgz474ZF5MCxBygAjyYzRvSKA3kVuXuh3iN4gDGrtP",
  "key41": "5Jjk5vvHpu5LkpqDRk7B9EGit2CLgqkZ8wNgkvUUuW17pU4fJ82UNkX9Yj778YMPJjFAErnatarhN9oB5zsgLdji",
  "key42": "3KKW4yQP1iiCiTqMVE4B3YdPaudkXyHj8VbFJGMwmPPamHDDFH9BHeHnF73i1iCXg6inQZKQEkeZbgDk6tkUz2Bn",
  "key43": "43rxnFyqSyRYKBtz3My7yw65A7UNyVwew7dZp8BaAUNQ29AfbcsUXvMSidTnMDkQt3Yvp5n1UjLZMcSL5g3xwYcB",
  "key44": "3xfniCj9S6gqzRu8AnQ81NZqQoQKH2owathdD5hUT4DuaJyYedtiumCpDHZ3j1SALVsWUULuscvguikjcRL8zf6h",
  "key45": "3EdnsB81CLH1JRokP6NG8hjo6hmSmZh28SVZN57fWvpWowVa82w5ui3N7gHqsLdEw8aW7CzB796Ejf6cjxUBXkp1",
  "key46": "5PWSE8rb8MHJgG7oikVu4f5NmHeUGXrCLJ72cBSJfe337vnYqAsc3hGgCFuqejSu2KqmkP2RYwBjvpPWPCCJEK4S",
  "key47": "2RuGT6Q2zduQMVDR8fQSTvWDSqYm29NKr9LQ1cQAiXhSxiP5BN7f7A88wxYzoSwXkzADG6Sg7eEfviaBrZ7uFnyR",
  "key48": "2pTvDTm99qWznycb71QNwSP51PPVwixdeqF8C9F5XPWh1MX4mTNkWoQUw5UQdSsTCruSoLHkrQQZC38cBrCLsusE"
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
