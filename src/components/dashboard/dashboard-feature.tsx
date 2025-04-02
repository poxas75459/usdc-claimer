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
    "46VxUMFxNRwAo1hBAyEyRYnucHVLNXVZr4ybYxiCR5De7SJTWMGSjuYhTM3YBWyEudxeJGeXqgYY9VnyDjNKA1vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KaBRLJhEMBxy9g7SBS7UTKrQwRwtDhscHJm1qmgyvauGyMv9cKxcEBNRPMqdTnWQixQpxTcyPoUKkS8kKMJagAK",
  "key1": "5Mpvib1xSGJTVCCHAfcAKCiiGZFMykV6Wt1VhJUcaVdJnV3AxJjJtwvWqx1bCKsUDjax5x188JspnBkT7BMf8mVv",
  "key2": "2hLDyE4aV8GTbFdv84njoTgQQqQpNquqyBbRUSPpbEPx4JQKe4ZF1EwpaA7geKSWqTPEm29hKUGzqg5Wqr4uhJEm",
  "key3": "3W3aQGcyVhg31kzdiyJNfZf11oBpLfUhb7dxZDwUYD9ywVtKrxF62UUQHcKXeBAoczh6TT1AVmrndDDthADqwxo6",
  "key4": "2PLWRgLJ8h4GjfewJLc8od77mXaJxuHa3hkaEi6sYX1vQ9VbfoRpuepEdK2sVZ4843WwDph7oFmmQRHao3tqvyBK",
  "key5": "3EA4YYbwmqftCCknk2cmhMwymhmqdXFDLwqK3QxP1ZQK2tBskwWfDGXssgp3AeV4WZJ3zc9wsMcfYZgJALf45C7w",
  "key6": "4XucZAXFzoqSwUB6XMvXmbNmFNspbEY1Qgbn5pWa9S5w65zEr14wkEYKsxmsgRbz7dKbBNVd7vQf4vZnpV3gZwA",
  "key7": "5Mx9y2Xh3vJj2Fg2XUuHnbHW5Vr7LxuVnuKtft6kZpiobJxBaJ3jQGPv3CmdkFEruRmTuwFxT6By2DYcJ44znitz",
  "key8": "4DqJzs2o7ZsRjsccrZLtgcoj5mhkuaV49nUpdU6H2E2WUK3AjwBiTZN8Auaqc54L47SAj3dFjkgiuFamFj8u6sT8",
  "key9": "66SEzCD6QzHpxWTYSKRn1cVh3QbCmL7Sjz82rUrz23QsBbxHoAEiqJjmXAo2u5AKKR7WZUGYmazq9bVHpqg7LyBN",
  "key10": "3FPGpZJVrwTu6rkodkLS8rsjQKnzn6Dm98H1uK7jA7iBvNcj5XSChWbpjy2vMBcPvB1gxTSczyCBi9rAGhFDKcsN",
  "key11": "3L5SjKotggiXptyMrHDCgHBPkC4R22rM5d9MdpV9HdtF7zuTXETZosjJFspb2o8yn2pYUWgJ4gKfWejcFzRgubws",
  "key12": "4tbWLVpUF6oQF3DFFGT8gXKn3DZMntwc5LAjP1UJTma5P5mpgM8pEeADZnMbTHzfJodR5QpEnpqrVMCm8Nagetwf",
  "key13": "32Yn8MEFDwRYdjirUExntcs7c1cvySPBYzWiGLvLcWJeMQs8maVFceMKZYaaaEVRWPD6ixhcbUm3UMVhrjUgb7PJ",
  "key14": "4hPtfKzxwE1ERNDgzu3p8kyX3m5Evj6zkLedBFmuTkArC1GagNEAmFefCjD4Q3h1w4XJzev6sL2aGnACkUQvLBq6",
  "key15": "2i4TjGds4qhmjLys3bv15RgoWTAkBeFNnevv5hvJ4TU8tx31yXgJgkJXjjxgp8PmL4hZAkj3dUpw8ncqQf71xxJY",
  "key16": "PZwMqzDdYvjmohZmeXnebw8TX8JPMMrNZAxDLfuBgQBS92GQFhU3mjdxrobEAjwFDnYzLqtXLESBJKExGmucjxu",
  "key17": "2WXtHt3eqdHj3i3W9t3njQkSJjRQLsv6UhG57CZ5HZhqDZmEcWSioBEeCg8Xss8Xm7wcXQJiR7rMRgLZjY2zVERi",
  "key18": "4LYt689NZDWzCFzHBXEWqqhm4fLqabRkgazSs3MGRTLZqAu9pzY2TjijqJFUVzr57QxRALN9PuzYV7QCo5tdGG5v",
  "key19": "4T6DEmEVWAeg3HHUJCZLrEiUFbYeJLdeaCTHt2LFcozQU4rNqJhbBekoV6AHQ3f6SeYNPEKJTmdeBSiYahKK2t65",
  "key20": "4FQ3FByKwGyHZk8gnhC7U7RdPUdxnwAazsH23hTp5JKMo8N37kYrtEKxRiCpiyCmBoefmDNZgduXGiiM7XavCmyc",
  "key21": "5gidNqqwypX4kaBdeNJqD2pM6jxH1UYmccDjpxTcvS4KgYa9st7UKjLbsdqFWxN4dx6CXVTeaQQJEbQsvz4hzP57",
  "key22": "2edFuua6EH6eEwZ4xDsbUzsJyiegCPQbp8PtwM7Ng1AzNyZERBcYGJXz56R7UZD7iEYajEp9iXZFHxTG9FeGeVY4",
  "key23": "44WnXoYmMxHeZFASgvJRXwKogivjFWdFvwsS2tjnbMTtMrxfck9MmzGJaUUP1EYKmZKqk32kB4ATRkpu3RJhNZpx",
  "key24": "Ju1Pc6ySMEwxrkAQ6EhcV3cobU1LonCAXJkWUD46DkeLhZrQ8CmXGCP3dVipAduVNyFD8pWdqRDbsUCJTZCARpQ",
  "key25": "4HqNHsh78b9hE345MVw7cB8yMEjmKP654b6GE4wQ17qkFqN8AT1j1iGEL1xDf8qcdjfUPFJTkBPkz2eqyXfdxJZ7",
  "key26": "2Ch2P5ZS9XWuj63nnhgToW7rbmvDmYC8rg8Nd2xXjo3b1T1q2ry9gjZLyvTjobm7Gm13TG6WqQEw2cNK5uDWZzcr",
  "key27": "3ktSyDJcx65GYQkH74RuCx7TpJpaHWxHmR9bo4y3ZD23xc2MiPAaGc85hJsR1RC4p5eNJLTVHfcMEPfYkFNFoeb9",
  "key28": "3dL1KBGm2e79zDqCmF74sf94gzPV9je4MYicGFDLvCrDNdmSc2wypyrJWG1qmjQpBdErr3TdMpqkWzKeWeoGtd33",
  "key29": "p9uSc5JAckaZcbeK2cmknPXq1rgXovTzjAAUcS16GzsoyZf2QjLCqMrwxv7n2DkgGaGGYdukkJQb1BS3oYNyx5q",
  "key30": "4M9ENShQBnQfCJorSjDMha4NNf5dUyRW9uDAXvzd8uC3BZgkjMsbpSbgZS68W5FygWc3JjtM16TqqYN3mrLDiThz",
  "key31": "m9xy6PE1hsZreGTEpY7ps7ntBiSugmSbk8KrzZnPLZSt9D59ns2QthcUZtZoibNqReJcaZtHq7aZJ924QTdR4Yy",
  "key32": "4g4JkQBX2cDeZTo9DBxUhamhDCUDuBDfyxqSAjTcUPUszKayUPJcoJgLaEYbsExddYtPej5LT9r7Fo9xJiCGju85",
  "key33": "2aCtfGVChaGZnRvis9Zfjs4FKhhP6nfog6VC4jhYm9su5pxHZQMz1zbF5kh5o3cmf5h45VgEVxw55EqK9beVyyTE",
  "key34": "3bxTKcZFFJ7tpeQ5CDwtqffs1Jx7SXhs3wPaGztuGbz1t61rQqDP6P974E8huLPR4XK9H42Xr59eRBpdnwHgS3M6",
  "key35": "49fisjgvjXU3k6kpKPyPPCxkQfTLVzY4Y4T7LTS8yMzxdULAeANq6Txm5c8z7gRJR3zTKXJ2qG6RTMV32vedV7xy",
  "key36": "4fVaDJf6f4bgVnXpz3rs4iET1FKHqbbp5EQ3ZzE2E2rZk1jFppvbdyGZcSPUNPWca4iZjfoD9xKNReTouciURdFF",
  "key37": "2F56KwJs6z1aQc8eB3sCBtvg4B36XsDf8tswZfxXxg2XHrMNhtgv3HS3mpmt6HFxhKjULd4hogzWCGrwYMXGvBrr",
  "key38": "2UA36UArmnjvc3Q9CUrJHbJnGaJJqv9pkFh26oWyzSMJHAtTV6rcNbjf3pAJi7G7VUxrJq7krv8Kvq7s53nsLXFT",
  "key39": "3Sty7UXhaNeDEh6Lu4mzj2kebTGrn654kN27gvAS6ZFBxKSBkVuPAUDTWNn8HsEDR7orn4wiBRd92By8TZxMhh1P",
  "key40": "2uvwewvHfoKxohDem53fy1bFbrQBTbfBJ3DjFjabMTiUEBNWDppCTskthdoU8HYCftCNYSz5HPZUATtzPHG2R919",
  "key41": "4dtD2LiPivRRxNEAnR6sTVWhcbQ9TAEAjff3f7acW7dteH8gwBDFGbL7Fs6eRpFjgwZWWZVCPcbkj5GL1NW85PB5",
  "key42": "5bppjmVxFPQCn9ZZ9rv2p4scZtgzj9VXBaQiVFrQjh35QoWoDWfFKwrBpbNLXvCojYqjHwM7V2heow2iDsdyrzDf",
  "key43": "65JyDJFfTDzqWoZr4PLNgFvm5vj2SmqB1VZc7uuppyu93hEHmx9gdE8246KowskeWU8zmNorfmHfHYYwAvBNCwdD",
  "key44": "LJhKLpqsrUGDVQcwE4g3ACWPw3oPct9p5xvcv8AuCCkpjkvSeUpQg9aNZVzKRZMUFJgqUa1hktasma2ojpZvJQs",
  "key45": "MvyNRee3eYdnXMxTJ34JjGHX9aA3tJ8iLd2DNyeL6BmUKGYatZ88Cnyx58wDp1prSF8Erho5DyAWTsEfyv8iZRH",
  "key46": "4CYtJ7iZi3LGkP4yCt1wfdVqjqFxB7irXNoyCXfVkKi5RLTqDCq5itR7ZmPDeR322qsKzYmmk5MnB6JkvjAM1nFb",
  "key47": "3qBBXqu3L9oZs2VdPLra2yypBLN1rMhXJzgA9bVLSgANKiC4b3iBjgH25dxSuatzR9W5N23in9EeTJsgbzNFJbn7",
  "key48": "2bx25FW2NTAJzQyhad8WA8FgQ1K244EVbSuPqAFsrBfkSJVYW2pGNDPsr8NXeBviXu8m2FCVqacMNfj52eYKUW6t"
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
