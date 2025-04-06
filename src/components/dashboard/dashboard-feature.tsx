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
    "yBUJBS37qqPsjQqRgFPCgzNHhh1Ya9yBvsQYcz1Ap1s3hes1wRjgxkAPJ3QPkr4y3LdWTMPGvhh3U4F8xz8ZyQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qY6yM474gu8qSeQWibaRtEgKhcYcrgu3CxtggMPEzXuotp65JSAGoU5ECmxMoMeh4LDarTtLg1yyFPoCc2uRq3S",
  "key1": "3eUEgrp4qmKeNz61CTcUYcG3kqakWr7YWPcaoFZY4gkeHbqYJ4s39tePK1Ucwxz7Zxv9Xw1dtp6vanU5g6qkBKHz",
  "key2": "3N4dSqakYRxuFoComW9aasKDxoCcxFnWF9TkC5Q8Q53dbL2WPNZsuofHiwqTqGNJFPYzNqGsoCK92m9LRFPsCGEY",
  "key3": "4315Rd34xBusnrrRw3LWXE5RsR2SyMjnCbPz3WzDFtQzPKyqQpQrmpVk9BD6PcHY9ig4V7DEvULb5U9cxe35R9r",
  "key4": "4adTiE5Ufj6whYxZh5S7WrtgEjgnkjopRNF2Nnv13QYqntXedoazAttwpfkqSzB3wVqdwUpFXdDSvokhQEJWon62",
  "key5": "4Gt39L4P4fFXvPJoTokvQZxCXk7G6M1MKkhewuLJagCVLkfdnED7x2WyBxDa2pP2KuSs3WNb9eFaVKPfKt3mSUhe",
  "key6": "wec1ByMRMkqwRMyLt1RmLRXFdCE8ZtppYXuKf76fi7MVrRr5RWvY3EWWWbqfHEKfUtY8RjpjHMnWuG4tRvSMwdM",
  "key7": "57zn9hTKxDNjkuBywwsPJKiQZonio9jyB6tneLHTPis83jijrxSirxtaiDEJCLXfLjTkM6a9UccueuKE1y9hMB6J",
  "key8": "5BsQKq7ZH2KwrLNw2m5VNS8acJhGf1brQ7B8A7c4p1CovjZS9Nrfb2KBsLBjscASKEvXT4BwS4vWVEiLUdYQokfR",
  "key9": "4LECUm6qQqqhrt6nfGYCD7FNgMSnpG8bbYk1b6SGprrxPST7STmfoETwsy3FQ3Tji2AMXMpKCPvC1F4eAWRKzN3D",
  "key10": "a7hmkVT3q4gGHZFjtUpggM69fEFAPY8bT2uU2VZm4C7BN1hWrJUuNJsxBT96JUNgsdPAKyvhNr3hTNoXDA9C54o",
  "key11": "24ZPCdCFZCRsAz9YSHW7tmwnd59MBLF8tgtFGeKzQf7L9n599uh8EZLXWf7P6vUKr5bwR95oXAD87beQ7T6wUARv",
  "key12": "BzkUkydtabdzE6f3issk7HEhYnwvWwTyzxjj5UJ9wSDtuxTEDTj4MhJfv9Fix2GSZiEgHXJxrbSxU5TYwUWSQ8w",
  "key13": "4SRV9TLpbEyvUtkyXs3dp8VkMUaNtYGQ9muYqj78v4FXYVmWwy1z4AGc5vP3MV85sN8CN6NrWHKQx2Zo7zg832BS",
  "key14": "ahS9zAujDpLSvZ378A6kMtmzSaJ7ahQENBDszPiRQNyT9DgnATimixeqx94KvMu2JykSqPgKBQ1NPfmvUYw31ET",
  "key15": "5oxyXD78tYfBbAYMdxq3oomvZcnsrr3GEp8EXsgXxiD62HKm5LFV1NGdFHA5hkoQyg37Trx4bPS6JoAbmnf83wJE",
  "key16": "3iJQzGhULtWVPEbJV9goSWP11ttiLXgdaXMec8hs78gSYT8cAt9rN4ysv32iRvfEtixCg41nsxVMoz3GVhbjAPHL",
  "key17": "5VXvbqdpjvDKSAC4YwE6qsh59j8C2ioDkxbToSGN6zTUZ5fQc34WoH5aY4GHGAj9c2nyFk3eFFtQ1E4KKHKW5Piv",
  "key18": "2SaAWwDvrc8zizXc2A5CBdYWa3TJdnjqEkn6UPE22edC6HxKaQv913amVekK8tYcepYwsZfdrZ5yRbRxUiMMdMbs",
  "key19": "5f2zs7hLkccVjkufZ8QUXF3Vt9CMX52vUwrCQdxGnwToNsunDSodMhhLdAnne2WLm6ajSnuD5TS6D7viUceohy79",
  "key20": "DPHEhLLpcD3PpTBPr7zYqKvmE1arqDnG1MRqQpyymovgRxAsG6y6Q2gsoVeezNwdS4DrgJNqC1XPfpa7b812ifE",
  "key21": "cPvnz2zG3sDkoNWfaYLACSJhaQWsXqwKq9jER7DpozcdHnteWjSTcbZokhhg1E7rWot3mGBavnFkdAVM1o9yis1",
  "key22": "62ihsoHJVhBioURZVFPsvb16AtKs1tSpuhrWCPWv9GqpYu2Qq26crBcgoCui6tXRaNRD9zMdQ6bdFdPjy9ULFok9",
  "key23": "4saJUbUWCTCJKJVCaj3v8DRuEkqhkdNeFkFx8N46x2kB25d8TmCTaCJFGHhgHoR1pxqDXH8zAxoJh2qhmWVm4yJJ",
  "key24": "4objaZxBGK7TZ4LVjhgmRK5V5DCK6bM9VrpH5zjBK5AV24huyeyDYbRSL2MGhRKCTPsSg5dv7F3SHmbokfXY2nPC",
  "key25": "2jmuzo9qGUmgu6UYjpiGvWN98L4kV4kwaaHN1cVZEygwjWu6Uh6tYECpZYeSB1prFXMYyMRkF7ycQ9jMJKRTtSNd",
  "key26": "NrLVQmCXr7LB7ECUr16boKENNRT5ZaaXxseuJd1ZeVgvrpFnfHkY8rDpbMfaRog7pATDPoQsb4euQAFeufu27DA",
  "key27": "5jSDWnF1u32SmEktQbHLqiKwRye7d9RMRkEcExsH9egM39TeFztVHDJSYrG6wtdq4weRKr5cgRCe3kswQHMjcMc7",
  "key28": "2jN5g6BgK3gjuAds1GRqJWAwUhihqT9dwwaRfs3HoXdE7eu9UrGm7gVLZtJ22VRy9HBorzSv1Q98YybRj45CNzj3",
  "key29": "5p7r72kaD9MgyMcjy7Cge7RSd1jedg8Vyk6pJWcjkqX3WPCeoKsUa1rgnitxVxdz46cRfTaNAD4dHRvMAhdjdSue",
  "key30": "2nmj3t8vvbc99c9nZjEjeFocfRNC4pPiDqsY3syeA9Mrdd2BSERieYi9zs2ocmZWvn8wDYbxrGiiJxLd4mxL1wvp",
  "key31": "5gLMHs1MUGMKMGvEBS5dptv6s6CryRzrdd6kStBcWqat9Jqs7y42kNzZWJf4xzxaPYU86fcoiUnGyhi6ULaZN2JF",
  "key32": "5nQnrm6eHbwxA2DaAg9fGmgvVgCsyAuvzjnaEk4iLAzGCznr2vGj2unXPx2RdSrhGSUoEgpTvpgKj8PyDWMXpV9K",
  "key33": "4Sj5jEa4as9ZEnVVy5d4TV5gLD1ETtjNwkEaEXqWq9G7RtwufnyRxYU8TnwPPjadmhxKEEFJBaoSUGoz6KReCtod",
  "key34": "37D9RUV6H9cY1gQSaeT3KnaVTPVZsgEnwPntke1yctQoUYF1RYg17DY81bqoR9Dzz6eKctigug3ev7pf5d7e5XL2",
  "key35": "25zykJVECSscHPZ9U1AF1qwSmUqNRLMsQrSJjqB5yM9goLTXMFgGcSj5ZdSu8qgQP9PQmo1Q9cAQN4WDbq5FwLke",
  "key36": "4Uu4WtPGnN8ESvaAp4mjrPE3hWP4LtZJA99vQWMMyzrvVrmrNhEMuJajWx8a17Cv9iQFwPYwQZryf1GdE5fNQmvP",
  "key37": "4kR1CFqyG1VE9NZDQ3QxFURyKPkVcBMGSKypJ9qm9ZjAYUBKQoeG5DWHAndfP5i31J9viciJkohoRSmbmpi6tf71",
  "key38": "8eJxBR9KtY2UCdnnqqWUbNTqMRdVUUKEcTS23hFD61nricqE43P3Cdwxn8msLPF7NvxdW1VZuskvzRYU2f8fibq",
  "key39": "2xUZJmbCdg5R8x5njXtb8rMY1dvUQBDQ1wjdP3wZo5FKsgG7Y4whDuDXsBLG9sQjgMwmKEy4c5AanNmpTghJzUDj",
  "key40": "o8GC9WBLaQECM4cQt5t1pY6Nv5qqtUjGSrBVTzVyuhQ6mDaVs5qUuNcFWk1rYKHoNAppmZNi4o1SxLTncazDUQQ",
  "key41": "5DeurSfxHK2iP9UzTVGQyuwo2xJeEw9BV18hcfngPnVXv3721TVHLofX8aq2WiopNWEsjHANrz5D2TDoTdYtgavx",
  "key42": "2fN23pwKEUVzTqbd2bqEs4dVkTmeG7BbwBEYz75n7QsudrLbEqfmbAKhEMTLjtUbvzshsHtWTStsMNezHKofDi4j",
  "key43": "32ttHxZyxocMfuo1AFsnN7irtbxaH7EEsd9xJJG3suqKB2cmmy7gybyoYUjh499pSZwXx487zeu7B1iwHWXZivY8"
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
