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
    "5FL4ZwfVZNufPqKZX8y1f9Xt3nYNsvqHLYTtrsmymKqEs64bRv8jF927PFjkMdXbRu614jiVUvZHBUnBX8XzvGbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64V1ncVPfTzYNoGMCDPgQ6WDtw1EEEqmkmRcw2mYktCKtHyUjWVByax66KoPUVVTdBE9Cpg2hJBd34duUtsRYCWG",
  "key1": "2uhhMMDXisAmSNEmYALXQyeSkZc4VbkR6VMjVour5cAxFH5KSfpnW7HMcbj5YqnwoMsL2bjyNUy1cx68HarVw6yi",
  "key2": "EQ174B853DNa9TptGb39LjErNrRNRXcoYdwkkDYBpoxLCVvxxaUd6eeDcGpTdUpzGeqssaqCmY7w4s9xXLdaxVK",
  "key3": "31whqzxhAnsqcSkFqWBopRZECHM5mDhJAcMCd9HgcsnXTJ5jUa9ecKBS9kzDP3iok3UXQDWGNjTTC55RxKAdZ8NT",
  "key4": "5j39zA9bT2dZGX9eG5wvuYqWyuHCTm7EUhqM6K7JB8KBh62uznv2QKf6M6NnKz4Pi9Lrv2777v8QLJ8JKRhh8stF",
  "key5": "3DDvihkimtAr1JDiHH9nfBfuvtQYqpjDL4N6C57pEPpSJZDpWxJMPfrvkW7vxrvYRKYxinoXjrHHGpS47kAi6VKW",
  "key6": "2ftFSbQ3kurDRQtY8PUPo9kVqbeZydnmBdPLk8gvjdFNybC7cdA6WLn2n4SoV7CDLJhr9EQA4tUhx1HntwgqCucQ",
  "key7": "QJk7ZMHL543xpZ1xLaFEfPoy1vn4oLohM6q1Z7fTMbdSh9hwAVgpm6rnubwyDswybKDv6BW58JPBtPhT2swFRzA",
  "key8": "rYR6KmzcXtUbevCciuv7swZeEq3KGjgnY2L4BGRyMt9ftAKReCSkUTSkkAXEjKuFS4huFXFWRVCm5aNnH8A3EoB",
  "key9": "5z1uqVZecq4TtwpUBgbGuSbLcmxQY9hwqi82ybmq6w4LMUgQCHFLwDwVoai1iFK8uvHKWNDnZQeQwqJrKW6i5WG2",
  "key10": "3DEz2NeBQ6qgTQUbxGdPNuYFjDH5MehV23qqYtamDRhxsYJdSTx2dD43g6WZ33Uid21ydKyGwany4BWwoBh8qxjW",
  "key11": "5KtpeZ3KhWB45qbqy6qTcLMVM1dU5bnaVGDh5TKmZTN8NyMWfxQx3u8UZMpiB8gBjERNdn1Ld6JP7nFxNu387HpJ",
  "key12": "3TgBrgauV9THxqP8NCHDfSUev7PT9TRncZSzfNWLvW2QQnoRskMt1VoXrngLDr24kVYmcDSfUeXsEN77vrESf72R",
  "key13": "53jpq8c2EZsxHc8fMTdKUgxRnbk3Sfz9t6KQVoEpmaWMSW6KfDFAGJW6aFEfrvzUN4eBHAXfd78JoEy2z25wagyg",
  "key14": "2oVw1wNdQtK2t54HSFHcY9MzFNQGjWMbHscmnwouBjqNNCSfEw5ZmLEkQkviT14n9c7aYXXYeQnpmZCEocqYA8Eo",
  "key15": "61ht9vWFnpE14Qv3yJqWytDJW1Dbqrpnwi5BCF2jp3KbPJDJRW9q6KWXWws5XiRA1K6YB1mdYRVUbFUVgnkCYoXc",
  "key16": "4oa12wSeNGa5DiRbziB2JskEVVRqxfXw5xAa7C3FT61Rp7VNGk6vcH7cwoQzA2DGtgamKvZZz1URyvWJFw2R4QrT",
  "key17": "2VPBUMECCur6jU3REPKfRmiBGYzAxCfNgfJvv3feoKqsSwQ6Q3nQPMhzFwBUJnFQwr6eADJcQ89jcwxCHnyANVH6",
  "key18": "4G9H2B5zPaUoQL542Gg5Pt8mPL266o7a7a3bugVjnQgipXWJpq4W1xiDoLTPaaJ4y8uZQ86APhsHNeBn5GLYaNDi",
  "key19": "PHpqJXvCFMECnW51mu7yg26Br9A4A1f7Ahd7EQZ2S5rfDKxjWWGVSLkaFg1BPJfyJaYgSe7bhm2h453HYaBFdfh",
  "key20": "cDyU4tXeixPweyjPNsbaGfmTVPeNoWEVS51CJ6uLGXpsRJZA6uneBQAW4soEmRWmoPnA8vdrFTTzcWcaxULWTbU",
  "key21": "43nEoLf2KTxVbGfnkCYGPpae55tmNVEUXCRPYP4B4fivyfJdY6f5iXCkshNnUtX3VUjToDWDWJo4X5VFwWThEstE",
  "key22": "4MFsjAC1CPWzuukKA3Lcg62swkE69TR9MsYRT9uhN6NaHU87L5D4oijLywaT3gr15Hm2M5JUUAPgWaoaWuwzviPS",
  "key23": "4HLwZxJnj2z8AZ3nnSWExNQQAiqvECdNUThQhiNqdeGGLBfSBeqAoEH2CQZk5nHnwNECgWXxtgaLjF4GUznUyqr3",
  "key24": "3AkiTuuKub9cFJbVRKDwuspeZyXuD8ziM8XRKJyjTRo6Ckzumeq6vdU42udz22aA1K3j2YJ1gWveekcqMVVL48L4",
  "key25": "5xMtMj1dtzdkuoc3UDL4n2Jby1YdL5hurxsrN9dst62Cv1vpv8x8xuL224RMzSw2kMVJiDX2J88HPhUcCxZuaACM",
  "key26": "Da7NYy6nQiUgiBztsTiZ7E61BvgNrcc4nWFESYLFJy5V5jHj558FdyPG77KgwtijTmagXcopGrENUrCztKudetN",
  "key27": "4EaZLGXPy1xRVRWv63AVsZDoLMuGATzvJEahGu4DvvCmcFwSA4nY6ANs9MfHFBLE2fUgnFjPW7yPLyNQ8e2eGRnA",
  "key28": "3BjGWLRUDX9thPiR96sd6sprhNoTHYC73VsTDZoUHaHefGWtcCqL1PLVLPebo8K5oWXc4MtFoHNbXGEcuyrfWDrF",
  "key29": "2BEeQNZFqcB9PLHLm5GyrxScED8JFCQA3A6K6ZFu12C9ERptw4CvubG9syLMfLTCtuB32XAzq43yJZyfu7tx2yz8",
  "key30": "5ms2DUj48qMwTcsPntPjrgJ7nA8PJmFRVY194tV7RqHqT1TjM9opPDURnFQ3koYReWaSTLxqUcVbrB3Rq2UVb8vJ",
  "key31": "5jF5q6FakCixQVtDgUF4mznQinDaW8jRXyMkqXvupnWytUAtLmUy5Ddwmw5rTM5ksYfo6TbwpJmc3LRwpHjaQF3X",
  "key32": "4nXrV2WV1LUEe8tmaCXyJWajafdVGWL2nQ6yuNhMRhdER7P1N2X42aSaTfTvuuVKkUaPozqjVd7HwE3JhXc6VdgJ",
  "key33": "DjsFZQWxs4B4iuWgtcjLKsDihV1BCAkwAVJuC4jA8Zu6SBTt7oCe23wi6o7CT6sfQS8rtcsqrws6dkJQEAuzGKS",
  "key34": "5bbGFyC9ne8QWrf1tGbUnAr8WDJQoH54sEiVnjNNu5qcFYYs16nu83Ry1opovRCubvn6rvJBsYJoQaZnx9FzZAkC",
  "key35": "5crYPkaTvGUhWfF7W3Bdkb5uQvTT832mdkBDvnV6mP2whchSEvs74Z7m8osw1w4NyJbV2ny94Ld9Wep74kbLcrXT",
  "key36": "318MwAwS7NEZuVn4jwH9gHuBqR8UQQUFYDL3xQV1cC4VtBEBwakdRe7YmEYqraJAn3DHoHEwaSBYUgyAUsfRiFMq",
  "key37": "4SfkRKUaycAWECty9Q33jD8b4EBb4bwrd47G8U1TC5cAie7PJUqYLD4URehLr4iuRmLMW98eQtyWPY8Pqqf5VFed",
  "key38": "4JwbpmZgaTVCJjRQpb2jxpJJqFvD93845NPxoU8q8D5XH2UECpAxWY3jybF9Nfq7tV97jL5TTBe5FsgE9SmDmzHf"
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
