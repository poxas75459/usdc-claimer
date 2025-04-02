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
    "5Ltzt9Hq3mx6SA1Q2eA1P31p7sUYgMLXmGz6RjYzBFgsETwhKdUrh4rWwfP1Dp3hUZjcAezHiPNxD1BS6dwtztki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7JYFmRYZAfuxBDs4y88z6VdWnWEUpJAj41oipmE1B78ykGU1JmsDhGVo9U3J3a3eG7pZxwGja2oVhDuqHZsSgR",
  "key1": "3Mg8zSxjUMiTpfxyrNxEYhPdp6BbdsrTZRFq6RMW6abBSLNVp8ubqDJbGzshci38gafuhi3xcjvcDjvXcWchgQT8",
  "key2": "3aocj941tcgLLn4ToimYDR1jzwkhqya9FxKSpSQgzfBG2ABEGxRxLNsmAwqQntX3HG48z9tZTij75kXfaKTa2UUJ",
  "key3": "pHuDDNpCNgtvVSbwBFhtwf46XEfkLoP2cUYzKPNyPUgiwtf8JcBgapWf2Eb8eyFDtQrH3qZ5kkv4fvqaqW3CNWA",
  "key4": "4Zux53kTx84sCUrt4aXbLGP3ZjA55YSvizfVF38XchvgSddzNQr7k2aqWPhJi15VuVPkC8HC7hejKztnGFzPrD3a",
  "key5": "4kwDHmRizMfG23fq8wVqQnVCAE7RHfbkv1wCSNn4v8kXEbimKPAZtT3GgF1WeH9eF2tHdBSPF9Po2gBxzohCUgSP",
  "key6": "45oBVQx6t7XwdCkidCvVE4Zb7Xou6wBrdXLQf66vRKvFXhvsp8BBFyKfBC6N6zcEbLGwBYDiPrCYV8vzyvBrepu2",
  "key7": "4ct1eupeZggfmBEWNPKvE9sG77HWhP7EGa9WiFnZu4CWJ64FXqfdLN4dhwU68CWzhq7yz9ESvC5c96sXV9Bs98Hd",
  "key8": "5K4eiafdSbtyYttJSAv6kr2m7bLpAPBzEnn7DXvBKBcr1fwrpWM5nt6KDzvQaUSNu2e88kdwqbrQr1Din1pLVxdn",
  "key9": "2JQ55kn6C3Km7QvcfQsN9cEQ8GXaKqYFi5XsLSdNUW33VGfXSe3TVwa4PYdHn8eFm4SF57gsebFqfyyD46kF2WKa",
  "key10": "3KCHDFfP2R6ByVHfLVEL7Y3tdEywsA4m9rsesRAmpXtQJAQhnfWTkiwYKMQSpVxA21PPtC8QkZn4paGoRvLQ2RJb",
  "key11": "WmvXxTfVk1krdaJKRXmk7ydsJGx2y9niZyvQj3Wxb61tXSX7RKZ3uvWTCvkQQBjQjLWhqcwjox6Qzx2swi6V2AN",
  "key12": "5a3MUvtQwrvJwwmGR4UfbwgofPhVN99gPGo8y22CTVgLGcW8dPEkASPzbzU2ZUkangChFYRWkNKqVoyNaMZxzwDY",
  "key13": "3nXUGZFdLUFjyuGrdF5Z85AcKxvAQDLfKzdtoep2bJ9VFQbmQqkEgMGojwTukYrt7dwQeoLwUxjWQDPYaHPJmoSQ",
  "key14": "3yyeDXgfDqPdA1LT1gCMpGoEG5uqnhPpAy7V5MaqHJV9tXNwmBocL6uRUsfei67Quhsjfx1CF5UNRnqiUvN5RHCo",
  "key15": "3JHB9TfRhR2FjuscGw18pLksryoMhESSre1FeP2tobnJCftmD4YQfBMXzuFdUnNthwrjHN24g2feSU9LouTjerBx",
  "key16": "4evb92C12ygEDGARDWZn1aVXZ7aBAMLfpefhLYjPuq7wcUAcKQrS25i13Nw6hZTfgocoQrmZMJuY9WdhSkPPMjmi",
  "key17": "2BKnyb7WCE2YAZ7z6mapLZVwpm6xtcpRbbGqePxxYNZTXews3qUgq6bpSpDkbYToDd1snwiB5H8cdWkmNmPRUKHy",
  "key18": "A1BrcJJdnXsM9jyKBJ75g5ATtFpERvn9NkYLhVDJyAyzvAZJfKnpStDrVjT3TwWSVYuzgyjwk8acesixjFt2UC9",
  "key19": "5L99mXJVnXjGkjqu68AycadChYurxZuz7uuBLtJZjygosKsWU6PS79e6AZi61Dt8FG4yXU8abcJ641hxEJ9Yjw86",
  "key20": "5bJBSV8rstWrF3mXiPUAyVD6jyFimR4m6iy42VapSeqYymDTEZVKWXaBye2fGkm4py7XUoY4H7Z8Zm8imxY97khM",
  "key21": "As5JrnMeDbrRkexVcPUqcDmkziGZgBrKA8v7VCBueQJWjV69fJsBYc9znAsx91WTYfZoZUBJvDzsbngRaJNt3YC",
  "key22": "4Q7VdibPCneY5aA6CWeSxy7ViKBvytS86fYQQmbmDfZZs2RhCSvYvYPWe5Hi3DCqKwCuzqFLyEsh9ydkryFCKY2B",
  "key23": "ZBsXUAC5zyGDrAB2rWJa2TDGVcabffUJmTgzn4MyXnMU3EGdTmaxbX2WcXHXEc5faDGYRYvueiUXrvedHJXV9B8",
  "key24": "FJggFGmxiRwtEUiD6YfMTLLciRK6R37DzuPhWUX5r4bME9nryKWKhbSyZWq3xJaQF8Wwa3zXfD8DHsTVTNcpE8R",
  "key25": "2MWMcy2WCE14QEf2dpfNqSLvYu8sh1J4txqHkFAdWanbzBEYoBVY4VJ9LcwygdndNbnDUUjFWUgRHp8dEM7rPsez",
  "key26": "5sBGuZjBVRaeqqbJvjeLvPyVcfvZEBPbaEFRgqtnDqWRqw2SkThHTwcqicUTfpvqpNAkJt16vyo8EZCRNiDaVEJq",
  "key27": "2hxAK37dgHPoDNzaUqzN6mACT7wUHa5vG2xGeawt2NuwzA9zxZ8KjsY2o4aSzQ7emq7ekWkShUDFGaZ4pkrto7Zv",
  "key28": "2NVQF5kqhJEeuh6h9MHSHiQ8LjmtDwHnQagkFSdWELxYEVeawHsdTZbUE3Ch4fYmiKVP8rhrpmiLJutdSC4w8gK5",
  "key29": "M4QAvBPQctHSpxvaRDpYBQsTjTttxYsMXwd5SaxYsiUpVm8pFkfZZqQHaFJXiKLrLWtJ4ybP561Cjy2cWoDMQJr",
  "key30": "5ULoVHroZ7yvxRt5A1fBUCt9knLXcQ8sTWonvUsXcThVsQTHRmZNcSVxYV2wTPRMaMZrT15QEDe3cCG6VseQtgcJ",
  "key31": "QqXwrmrrmx8siuaSeVyXLtUvhrdXQogfUwKDEk5ZDd53L1vFneui1zkd48zcuYzaNTTgxuERQh9ViE1HLNuNMbt",
  "key32": "mJ4X1yRqQyWVKUeHygd1e7am9BDjSr8cwoCt5npcVDDMmFrtEj5wQWMGe2bA9yTxGWYg9Et6oDhw7CLvhNXC1jX",
  "key33": "3s1JPPwXBMVAWV94DE1VXrbM71EzYPocDjBMxEWnAXN2GurvZ9cB6m8woqBWxEzR253qScAegCjZtSgGBAuJLcs3",
  "key34": "4hD77XtVzDzoXEx2Up1oQQCnApPZsMm5SfvygwXbLg9LPiDzn9u6Fe5xnGsk6xsYNuchNpfqV6j7DL1gHMLv9LHT",
  "key35": "WhGxeNqcH4CttYtMVqE1BV8Bk16z65SwPSt4UZayQAiCcJ67BVQfNCwib9Hb6hKrFcNwPeRNZtvYscKgbqi59sA",
  "key36": "9N6NSMQLGA4QQasszfFJjQBM5RAbR6VsU4HDwkRgctxGZRWpSbLdg5V4i2cmrQ42qc16u57b3KcRTuMjZNRkbBz",
  "key37": "36q3fdEjfduxe9iERS2Xt38gFmY3EnX2XeDzondxgueuKevhQMkMG1RdFXDGFLtQfgkmsAMXHuAVB86bKrLzQAcc"
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
