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
    "3xBsNsKjcUqMA6dAGRx9BfixyK3HprFNDQwGQsRZgWt9N72mKoL6SWYin5nEUvyRPv7vyULUGyEYm6NePfD6iCcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oC29mMoFo59uYckrwvSbHup5uSBPhnh8jDLSMCLdcfstZjgZf9vnihPXACgp85UJYo34NaraVVi646HqXwjytoB",
  "key1": "37cVJRRWUfFMFZLgQmoT54eybX1MT9ke676Jxe2zEFTgVBmwbWhTyy96CAYsK8yYzp6BvydKTMgpByZowXrvFxe9",
  "key2": "3tKt1z8NLue6b32cee8ge5vMFfoEwn9dSFJh352tg41q5BzejTbc2fgKwCJG6zaRf5BFcY2kn49fgaXue7XWtw6W",
  "key3": "2zqicuK1BBGuZjNHu9FnNhmoxW7JF2iqcMC6vvch6u4zrX494DHKG7unW2XAtPsoXqc4HvScJ8zQspLCUYQtiHMr",
  "key4": "5DPtorf3SMts8eYecjWTtQhPttUp2LXiBtQqRyiLt4Ao9yFj6RVjVYKzpgaxp6diBpwvxPvSm5yVgqNFrcmWzCZr",
  "key5": "3ivNU6RtJExY1DiuUMihwoRHJwow2SgHq4KUjizfdmYuqpxCeYyKWMPNS7Hk2LidCcN4RLS1JSEgAdfh4mPgXaJW",
  "key6": "jpqS5siUMu5XSXjPXMaCvdqieq5pA7PXXiqUELfWn8ZnnG9nWQf5tN6KUFas81ee87RBZSaKY7si57uV4xgkCQf",
  "key7": "2qDgmJARMviunpW8DX3Pk2Fy4gekifTt4iXcfhdhV6zUBZ1CkZY6Jn6Qf945L3awLBGbPaThtozmL6fUa584noW",
  "key8": "66ackiyVaEz9YQu7aVh4Hfa3uRsHHxhzhPbZbejr3tAdeFyBndpJrSYAyQTnmsujsJXRrwinbeGXyHTCqrm8qscm",
  "key9": "4ZxSLeQojqjAMso79a7xBaxjph6nM8nuBRHNc4drVkFXia5z774vbapw6E9Mi97UJ8GDiZQ3h5ejXjvPYX6J2zs8",
  "key10": "3gG3C8q7DB4RbUnZR2cHJY12dNwQPx5A7poCnSLz9soKmrQwP84GPmrSbEir5P68tN6Nykkw8NoE6tyBje4up5jx",
  "key11": "4hYuz5xW2MhKrcy9kNtLXSWQy9ckrJTYBzr6PJRVzt2euiGewtJmawL9bRBWEfTnzPzHYbQWBgJEAbDJ9RddexBh",
  "key12": "48XRicVx7Kz9KUBhTyWATC8UFzBbUxEXj1AexnCoJriRkAcH8n8Q6BjyLiuhaf7h82cQPC3Wmf9BfGVnq83Q7jjo",
  "key13": "3NfBVvjBLxL3zqFXN9886RycCCBWbSaxMTFvwB1ktErh4wkoBywKwqfF7JWg8A4z6Cqxfy9fnyAx9PJNgNahqMrt",
  "key14": "2Q3E8asX4JJSXn44qqv5QfKWkk4gqwY3SwLqLzscxaN4jQHmHbvcBCGHbhUHc7zfdRdpyJf5r1XcrJvYq1dSL9Ue",
  "key15": "2zsBYtBhsU1TDMaR4XBptfDeWGjMP1DjKbQMDeK4NupDWRwJXn4zzPCMnVP6xxjLPWXmdAaDqcpPoyg5Qa6eccT7",
  "key16": "2HbrCD8oo6sCaVfNdrxtFY1dox21N27JjXhun9ckVsZRwdtZLgvzwuKrYndF8uXtim2Wch85zgtDeCWCTvg1yC7N",
  "key17": "RddNwk5vjBYzczD5aALG6Rf5DxsDUmpj3qbUVkKDBnWQ92vgavW6AbK7PV9vDJUD3CU2je19WE69U2aQPXMmHCk",
  "key18": "5hUqpQaZFwEj6iuueK4xR2fogdpvq8puxv2GhW9xM9C72qpdLkmyAfuRbKXeuwq7Y5vpY5HapuhjqwmYmF9Bdy41",
  "key19": "3KFjiWAjp4hYwf7qvHmjJC3JGHUgxy6EWzH4ehn9ZN8HXKG4exrAgcdgf2ekLsDBHe8Bg2Dyygc7inVGPtr4uetK",
  "key20": "3SXYYWFWqgwVScEjEhsZmyx8YQgeiwME8qdbYyenu3uvsXrcFqh3ue1L6esx8sRMnXaLt4kn66ZcDoA3CPmbig7A",
  "key21": "5c6HLjfyH8usJ1NBTMcGY8iRKpbjMpZqpgCi7r7fs4qPThjZUzpHrKvtFVUj6PP9myXUm75B31Hmki2cFpYxh17Z",
  "key22": "2aaCtkkFH1kXGnxpK22R5vzCHbUAk7BErZsE4LpGpGZc5EcvNerU4MPPRgPBtWGJAuMPYsdBV4MWHXh3dxRfzNUG",
  "key23": "4QfBTn7c7FFT9Xfmq9D8AfLj71zXfCTesmVxBasCv5KdHsxdCr5ejgF8wX51Dhs2fm7BDHwowCMeKF2GfSD1VQdB",
  "key24": "DeLvPtX7KQ4HGkTvCPpJaGSUAoxsYMwZZzTkWGfugc295YsPGs2dNhjFNhPCVdZd2Eti8GyHntY5MSiouzYPJma",
  "key25": "55tsxMjJF8UFUBfAqAa61j1Pihu2BkAYNtAXoc5VZRgrXGaMshmThii1SV75MimCsJGA5Zx33hT5n41ZmKQJtU4s",
  "key26": "5kY44tePqofU1U6i54cfyAgkqAKM7FxFPKnQdg6DzvvgRcW6bcMJkFCYbMwSSHAzJPAcxNqzkxejJFLKK9m4c7tL",
  "key27": "2HBDgpHgKP626ZuWDvhN51zmHCctwRobutiBkGQYq3FimdUUH6wJhpQ2tSBLYWsYZWsC1hsWqPn2Xc3jt8JQwXzQ",
  "key28": "22TDi2UxewkusWvYzNWas5jwKkHZCypq4zJbSLfBcpjgcUP2YWXkPLyXgEffbr6bjypnXWtVX1tRJ6nm39pDBBzS",
  "key29": "3M1KCXJFm8WzutRERfyXw2k5NKWivT9dKkwrA9X7aJdn1z4cYt2MgKDoxmdshPUB1tDiC4utqkwLBcFnzESidxCx",
  "key30": "5GzvHt8eCaXoEjSUVfoi5YCkmjaf6osdT9uX6xhj428UyvGbkJuZtA8Y9WUV8aH23Q5iCGU8X9BTbQScHxeVdSoc",
  "key31": "4W2yTKCfNzghCSi7MB2TGL9dswdZRy5uDsghDhcrn9xKRDYWh8F4Yi3yKxBvXLYYTWY5pUQ2VQeC9LhJ3kqNtmLP",
  "key32": "srv4ohcRs3vdVEQazYxCM3EdgKL1mvhkaKTGSzMSskQ4cfiUQLpRDLTZxt8u4E44o41NTnginJrsKDWEswTVSKZ",
  "key33": "5AGG4KUpn7weiN5WYsa4SLVFNGiJnUsJopr8NxExTfe2edEB9DPRkfWrbSYvHgLuJvHBkWrwjNTgpv7RNengTDg3",
  "key34": "3q6qVdq4ZRsJ9SBsEcRk1Nc4JbjUb6sTJt9ywckepDGjnYziU5NcCW1nWsK5Gq5GkSrgL3pAXdGGF9DXSDB89Ah2",
  "key35": "32TJt2MbarxcnfxAyD17P87vYxKbJRUGgQ3RHLD8yptm3NZkMZ5NPRdBg69cRezpaPWRsMvzQdK9jcV2JMJtYJA4",
  "key36": "3QMfVxupR2uEBuSXHckRqhr72PRBBdiSc44xRtvS9Q2wX3xXEHA8NQjscKPNxPDhLgqXrvi2hKqZH264QBbntGZq",
  "key37": "3RfkDvKkecVvk7umVq3W1JMYMcHxjZBN9CXLReMktdNV7gS2SqJAcMphAAS5nwzLTHaVuDFuBtHYZB1csY85oLYg",
  "key38": "5NDCvmhr7uvcjbvjFKwmcYCTr2nFT8Udmf7S6juPvo1CNGG5EiPzqEzuZTTpJvnv1r7A4zFfUpJXgP2m12hAcmS6",
  "key39": "67Vdc5AViRF8hL79nFrJx4ewVTHEqLZbkoz5Sqyou5FbKZuSQjqJXFaUmaUXdrmgz7d4ZR3Dbe9Y7ud8hptBJscr",
  "key40": "3RMS8AJWhJbtFcXCCRAzJMoeDYtG3AyzhVT7HHqSfXMFaWhU1vtXP89dCCb3Na74yFbnkfLoQrhoiSYWFjirmNxu",
  "key41": "2J2TMjkUq1ybQEws2RZSHpAw5o7d6b4Mc482r7SS36wmcDt8MpnnEusYbgukZFpYrKuhTYG14jf97yhmigzd3Bcr",
  "key42": "6KPUwsobeM8A42dfMhQQxf2KydtCwpvDGMTYQGF6eMWAJzG3v3kasj3Y5RorpW1aem9AMGieTHaaKCxoc2HJfge",
  "key43": "31MEwBev5H1rfZMV4aLgYoJuEX7xSZmtiAmKgzMFoDz2ZovDsSZkX9LaqsPQuZHevYGDCh7HT7u9pNaHqGDvhD2S",
  "key44": "3LcaCqQ7oaokTFyDr65Ecm1ShBvr5MZ3LVE5kkcWkWRXsh2HvmWxj6JJ2cHX9cUzTtoss4kDNmQHPSKDSEdeKNgY",
  "key45": "2t9WY6mZ8WEAQcsgavEKy6p4g2ZCsxyhgvkNo9dFLWUjjmmai2BbCHk2DzfzTBKmSkDUgG16Trw2trHdzqAsX2nQ",
  "key46": "3ZyUWbCuHNNEPN2CeaQC2u272zMwFM4sfJxP9VnAszqgQgz8b6BbY5AkZ2FJWBgUqmoL9h993WNNwbmYaawjqGiw",
  "key47": "5p2XWLVj1CCqmBCyu2vCMiLdCdraZVk1XQbwUox9371xdjyVvtkcgVSUJD7DLDuSJXemQunDPKoNXH54ZNKWwqAJ"
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
