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
    "5UJBhupS5rrWLN8o1SZXa2ipnXxwonm786meiWjHPWKPmikNSt9bCtWfJbkLc3BwiJKn89uBrHLQZcwD2tuEfdNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQ1PPQuYyk27YJamSHjHxHKoJWDwpD695ipFH4Mzd2t6M7766nPBitm866RtC1CxXFcTQ7onmUtyJ4iufF5FjK",
  "key1": "5N2pD8EGa4GckEaNzci1z6RMUPD7bSnGbaSEma3mGe1364Ccw7u4ZeMfjBqT4rZRkxsyo6ZF15Bt1DtJ6daPRbUb",
  "key2": "4BoT73FvaPrvTW2v6xYPH68oqea1DtFK2zZcDZbhthH3d2eVQvtxG2FuZGJEZSdv8gRZTyAPs9iAYCAsZngN4mXN",
  "key3": "5STyxbgTCvANvBgDHuXEAJ9rd5vk4qUTL6KZSxZhdaKrLG6xhHNjrg5oD9b6hXruTGui9Y1UEGJa14AyxqgWE7qP",
  "key4": "8x1wkGF4VJ4HzszpnhLLWGHvQT4UtmsB1z3idvLVHX7Am5CA9DjTNBpsX4BnK5KdU79qk7XkLtiTJDJNcjanRgg",
  "key5": "29UTqAWpNppVYAparYHjpPJgv1vwWPhg5j3qAViCrveSfP8KivNW7XaxvZ7mVa5F21yPbv6PDytQrYh2kNzhXCdQ",
  "key6": "3WhuHKkcz8F55MMciRbYsgCdiNkFoFhwYZjVYyjzr4vBhowyCfbSdfB6TJwd3YFmE7rDoB9qxZF4h5Ebi24XjPSS",
  "key7": "2Bj2PYjpJSqWMiwvaHtUKKgwG4PmHrjJtAmkXt9FzmS2SSx4XjC9eo8KXi8beK5YWyGBCCjG54NpvcqmvdxuFuJX",
  "key8": "3QxQK8qn7WiUVdgpZfMR4mberbZnMdWMeRPHh2X6DGiW2HR55PNK2ioaeYNGajE1oKXzs2UYve2vQFpCp9RPxsaN",
  "key9": "VMFWC1VQaApstW9W3GAKsGFLrLdU59e9wBQDd4rTB1xvNyVUa7iNZUEwJMRPAzTjDPHDoLMYrnsgKheEZy1BUaA",
  "key10": "2tBeQsBvQMCeAvmUkkqRGk49GUfjz8W7ZTnr6zXam56gcrmnRvchg1eufj6j2ndb9wqUX2DDwJj8CwvmgTpvr1GG",
  "key11": "66nwpMgEtWyasyMbnA3P8MBgWkHoQ3CKBmo2pnsVEedq4sqA4H5XxAhR2VKk97rHcqyLcXNkppyhubJP7v9uCaFU",
  "key12": "2wfxFL2sDMbFyusyxAVa1wR8p5eThdTgUKtGxFdTkxrM5PPaD93SAkT4pg42g8iqDf8tKU6RM7BThHCZfB6hYYpL",
  "key13": "EgB1ppyyrMSDt9dZLKaAyQMwkG2J1qNTHKyMZyHZQMiP3oBH66vs7ysTXyDMut6CNY3JfcTDvoyBMqo64y8aQ7h",
  "key14": "4CGsBQvDfSvdY1QDVUYfRPUXLmhqb8drBUsjsprvdgNXpoLw94BXVAQxqeFeZBxjHiTqqN13nU9Z6my5LsES8T5",
  "key15": "NgaUu7V6RFB17gHz3pPTMvmuu1bHgvHd6azsfj3qY7fsokSt8f12zDVah38HyhJ4UGM1v5Kt9Fy8gPF7xdGzz3y",
  "key16": "3vtqzCqt7yWoBMSP6RsBwQKTfh36BWnEm7kt5njwzRpa7W5uVG3AtRXgYCYRWNQCGGH6gKMutTJPHzhWQHV4Poc1",
  "key17": "43f5bFbpPFmkiEes8JH3pjQJh1LkLEbmKHp393seSjrksh4ADKS8RsZb6nTxR1YnTvetofZYPSGHb4oguS2g28vi",
  "key18": "2dCG9pxsiuKYiebMxwgSMTkGVxNNxSh5B5fxWZBdZcqjjF4o8njQHP88Ed8HJPPQdwFzzXn6ttgSRUNuMEK9cB9X",
  "key19": "3swBivq29iZVuSe8cjzfWVhbxZrAqJoDsPA4o8DBKZHBBnNrk1m2owwqy5SwxdmoqJdG8fe7HYXNvABEq5KiwjJC",
  "key20": "4nBvTfSPVCw2oPWu1ebPeHAoXLmz6J8DBhJ9j9cocKumNYjbF9JD4EDrjJra7fvexpRfvP26oe6j7KBtgTgfE9vG",
  "key21": "5fbKgofBBSwTMD4shu4pJKAzUH5ybn7fkPFcBaATRd5BzCcqnnaLwtZDwPVorDozMhLjZLZUU45hQoj3bdVyzttL",
  "key22": "5Wtdsa52XNUjvE9jcjhw4yjhaHeUGHGgsZzseiQFqFqyrEQHAjRvGPfTx6SrxSoEwoNLjMRZvFGEqyknU12SvmFp",
  "key23": "4LVpnRh2mPn4nQMHhucYvVTMWsauveHahvtKbfGUyYTmfCF3FF5DUFQTYKXmDgasQtzWnBrZ7v16PFLLuGY8ryuY",
  "key24": "kDEhCkYq7CooQ8j8HDb19Kz13GSPR74GM5ewuw5WaMsoAoHzbdcQwucKEEdDZ9YxWyNdKkTfKQj32WypXHUEGLW",
  "key25": "9bMmHyzX3ysdUrVKAEREitTVTvJJiW4dm2UtCCMsYdtghhDeyRLqMnXTagfuf5HhGcWoc2HtYuJdqFdq2Tityb1",
  "key26": "2AAFKLJ8WESqxUSUd8LJvULfNCUVtEgnB2VJcRm2yASTDUMWyQYK49aKXrP7QFvXawUhfYdovZLmjponFWjdoX6p",
  "key27": "qjHpDsy1qhsyLkBoyhvTGdyQgT6Ha8RzQVrpcD8AdNFSvsHKLin52AFEGMmiCqhZbAhGkbnds46KqKB83a6biNV",
  "key28": "C3Ls32BqzFdSKEHZRuXmC9GuU4Wxaiiq24e7689sa2ebvxbnYwwVE7sD12df319dXkkzJaeWkRTakAYbkhkK3Am",
  "key29": "5bNA5Q9kSaBD2tQwe3xLxRxvfoWH5aWKouKyJcd5TodB2g1enCp8iLBmjk3u9CkgF3XJAR9JGbSMdigH4n945sFU",
  "key30": "4587y6fzhoEkikNauf2Px828xRxGLA43VhgTgPpPAAPxrMuj6jK5n3SmKArLnz6gGMJ93LZHUyyxQ4PFWcHDyLbz",
  "key31": "Vi2zrJpgxkHzBPxJgRN25VkdmZspU6tTNMJX2cNyQg8KhAVRb6Hbwi4XLCnwHfSCuy372H8i7GboG1nEqRyimRN",
  "key32": "3XPTNygBkNEWAyEyLjSXTb8HeTcMrUYQJZLqYcpv34XvjxYMwqNgg7CTaLusKC4ctQkZSdFc5wWvpokAvwzyT5KJ",
  "key33": "3btzsA2XMGUDfJETfXFGPMUkhDMo7bpDw6orEe9P6cTVcMSuBRgNGKExbuwF6jwPe4RfHFcqTznqzTSUoDDzxhue",
  "key34": "43VMgcVPZ7cFfUvBk6B25GSSoxbg2nxPeJosAQh9qVmBKPof5hEb9DK9pQJgvHLdsG79fYnMqrRt7WK37HZzAjxu",
  "key35": "sJzvvRyrc5g3LNdyVWRhiX3A3o27BWH4QA1DCay9quzyCn1CtfzHVmRmhGBpGB7FX7sQtcgTzyb7Td6idhi2f9z",
  "key36": "3QjHeyKJU2Z5ojEzRWURFPhLM6Swg8M1QKzLiPagu3tPpaW2KYoCPjUWhX9bPURWJL7AStQd4mGCFeMYXSN8ys2H",
  "key37": "4grKGAC9ne2FixcyGeqM5o3jrm2YvZpmfC9KbwiyZ13YWb2yfbLWwjoC68UNYftgtC9upzXrNmAVQxPx24AZtVZZ"
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
