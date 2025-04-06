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
    "5iiBkqtWV4HfkD5vg5FSqc47FnkSXdY5W3GsQzJqAb4jKf49BhCF5j8Z3k2i7raZ9xyYEJf984ZQtvZSq4jYJaua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tT1s8qVvsKLNfZ1GPkZMjzAEJBsBczcLxuDwCuPJFRWthb279rptTMUskXkJDFSSSCD3nBiyriaS7LpaL53ZeBk",
  "key1": "4za2FbtZty1FcdQnjPPMBa64inxxxoYyJuw3yk9HEf97fWCzV2rsJ4bcg1JU7Ux7fRKtNuAmhssQLPLFtcj79ycC",
  "key2": "51rowpU6r6XCa6F2RkM1eqyzDXMcSvqhJymYqPFUiAk82PnUo2WngRUM8BP9Bn7afnfjUsVNamETS3exdmxtx3nR",
  "key3": "zdYDnpte9ZkToqRMjT1j7msL7JDfG6zrdwiPh16p9CDAhvCebxHvzCJCLwggnrB8Y4MbCQQJjV2FbjzrY9SmdJV",
  "key4": "5NoiNio7xDY9HQfLBpknzC1x6p6Gf2M1pYA1UAPS92VdhTMgREJbLrcbgYk5DvKmMhcLMg3JEN8dy8J75MxLevqP",
  "key5": "2g2hWJYfsUiMAJxKUAsFNLi7EiiXLGwKeP8g8P4rhECFjbygisqDzUpNn9TEeih13opA6sHS5ekeLqAq5yBAwYNX",
  "key6": "39t9CLsdu5PgWaubzyGTmtrZtamfxBBNCmqAq54XnZYWmDtXwmKQBHePgmWUpVAPS5Vjkp3W7JtySLqoMt1jZVwS",
  "key7": "2GGVU4MnPEnfGQ9MbE39ZLtW4JYiQLRwR9fEGnskp5uvCbPBbQD721URzJMqLK4ndBPbpXKmKEKomvZHCDgD4om9",
  "key8": "3C1eoG7kHjGqbVmSzbszD8cahrSv7XUndiwtXVbvwLkQNpo1ZyL7S8UNZBfLjcMJoxHdf9tjDyYh48r3BpkTaXXW",
  "key9": "kcXKABmBTWBFW6A6KZZZjRDjkLbQwvuu4Zp3dVtpaxoawRCiJZrziDZGxHiXmDXSBQR8G4F1G7ng5di8BJbcyZA",
  "key10": "3g3nLZZ1jPshNnvvFjD6B6ju2aszq4oJ6uzwM8vtesq8fzUUgdtmCqak1PBNJtaGNeu79CTimWxSu9Xije5L41m6",
  "key11": "42RC5uTHQ15KTHf3KX78TGBJDVZoCYAvMAPLkE9zm6hbTAbCv9StXZE6hAgNnR2KxBLbiMYDuXf98G25FTfwa5vH",
  "key12": "28WhhbpniC37cGMiS5bCgVkBzSed9QQDRC29vjCXXGgkCYsTMf56pUJ2M5d3WXjK34Zoh1okaAA8sDGDNmEDsVLy",
  "key13": "3cFsrUck6HufA3M6pyUZktcyMiCyms3aUkaimh5LNPAn1bi6Uryc4iNT4JqFzX7r3r1Pcjei9aJUixJtx3zfuTnb",
  "key14": "pG8Xc8gCivrLPamxqU2VKwDbGWfoVcoa23CkTfjvn1cVsUPf4orrxtsszcFdrwxAx6Ysw1SkPocHcgo8Sq8wcQd",
  "key15": "32P46KkhciVQCMKnbUS7S29zRdeKMYPXvKhUSGLM7Z1n4rWgixFCb3QseXcZfYRzMdACNhq31wZjwV9Y942iWyur",
  "key16": "3BCn8c7s1hoo3zD7WNJ4ULZLQB2jeqjMghRQyysTGvLrai8bq1ogB2byMheogWfSt489rHhifFXv2sGJRirdxkXu",
  "key17": "4hDdKBUUtk8WJ2fUsQKTdvcbjAgkBYGxTGAsmuu2aeUGHBQc8WTzLRkepHKCPacze6CyhEE6ZxUQNSE7t4yjPC9T",
  "key18": "3Xj71Fq6Jv2ttdLavJhG2n5U8yERHcpsxrTWV3U7QT37VBxCGRy7UP3XdpJfgMBFXrrmSDmovWDA3hhx5cmgijVN",
  "key19": "2TY8pAQoamZcHzrsZsY94MTpZzYHP42o9YtCwv9WkTUVAcQnuquWEAXDWwYaBf5yGyoFno7cksWwQzoYrcCMsxBd",
  "key20": "bGjSMc7uuQWdj3cyyyeZfV4HXX8d7N8ARU1D2uksCB8ycuZro334SJABtRKrHSEfVp1sZiBQhqGqnrJ7nq8qDXh",
  "key21": "38nNSwf8qkonFqMToGAksek2ihTkz7NLwGd4NwNTTDxaSUg5wESDBu2Gr16s6zxC3iAEVtq9NhxvuHjZb6eyr1JW",
  "key22": "3kotJhpEBfxizdhj7e82E9mdEtsUhzjBWWPW9QaQuxr5QYxRDaSgcd7f8xSVqFhULnwvY9yQbYqjH6RSc7uFCmP4",
  "key23": "3QHrLi9G9jUiGUcgHPYH8RKJLkdjQnKVgPZvTMAYCf2L5RveXArVvZ8oZNWaTwBqzG9aAPKkmuxhvT5rAaAnPZGG",
  "key24": "83wz4yhh4fvJiny4K6PLqmWGgzCm3vigFSCzAP8NkXr1RRDFJZrWTvQK33orqikmmp9p2EvibvEVw3HmJ24iGFz",
  "key25": "LfbjFHNTtsSxYafcecX1HUDEor3C6AfS5w6x6Tvfn6Jv5QHiNapiN1EmFzt9JrgrGAFE8oZt2rFzkxmsFAbFBCT",
  "key26": "4gP1ur4zWgdHvA6tvmpWjpySFaAfLfAVsrdFh9MN95Z2fFYx9AShro9iQphP5cYGgPfkwiM9ucbZcAU5v9r4jcom",
  "key27": "3gMtvCWqa57KYmcQFvFW4qf3WPuSLJMm3W683QwXopGmg7UiyVSkDMmHv1MHHaSuBPrVp3Z1oyduW2YJNVGBXfyh",
  "key28": "2YV5jbqFC6zmT2FfjNp3yXzJRZhxdzefiY3cBaZaj5j48dDS8A8otsp2oZWT16dDdkMtcptCJJNnnvbmamQKuUt5",
  "key29": "2qe1wi4FmhYyGyg3oFbHobX6WffZkJ22C1sEQaqWZj8kZr4fv4f9GByJBdBfpuMoaAPtXSy5DA1hXQXWhkReCEYZ",
  "key30": "5Ra5S4CFLHb9qK9RetbgxVeLWDcDfjediFUqYoGhTaDDVVDbgUNvRVvxNB4RQxFgFiGuN1WQPDEDxadVMMk2ErvY",
  "key31": "5zBXbpkw12qmyAbMNh91aw39cLaHEmVTQRuJZHcRtEPXHbXY3gsun6saujVYcxw4BLAdWvTxt7FBFSBMzsEkkAuW",
  "key32": "iNT6PRN9fGsapLsu7re6a86GikjUDRwMgcKA2qRQP56dgGt15AKKwJfMY7j7uPoE9WDkeXraXr4ptBSZhnHKHUx",
  "key33": "5sUxLcLPD5eZ2gP1zBx4uhTB3jEivUBrknfzTjxkvUf5girudmdyX1B6fmhhcdKs5eoZF2f2n7uJAG2HbkACtXWg",
  "key34": "pnJoBtbRzmGEq2m2gPKY8rEWcGNu1z6Xowhk7nCscnEYd3Doz2ErWS1KXZs1wYjQqtQ9dYh1FZx1jMa6NNoviEs",
  "key35": "3BRbgWk5FYRk1K4o2abG1pqmzWLXDiuNZaHKbP6yghLSX1FZYm6WFdQL32tXbWRaGAx43NR65zfS2bWWAe5XbGVx"
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
