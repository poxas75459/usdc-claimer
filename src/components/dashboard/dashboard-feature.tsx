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
    "3osb4rB95RsPEEaF1KgYVNuoWsFjKKazJAMYG2ZpJnutTViUD4QM2e1dDbTycK5wZTdWuYi3Prirpb3CPoVDwrHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H97dXgk3kg5feAVmLrBt5MLafX977wPswTnqfdg2xpkAXy7NcMMgFdWQyKbpYvEcPZdM54fYjYsfUrqUAxV2dkQ",
  "key1": "3s7EBCw2orxshKQkzmPfEfgdfipXkLu6yp6Qr3hRXrD8AEeL2LPvcWciUSptUtReH7TtKQWwkgniWn5QbQ9m1H52",
  "key2": "4bKm2VZxZKeJnYXW4oRPm1mmsMdZxqVUcWuqTBFLj3THUseQKfv3MVJGSUMj9apmmKeCMxvHobqb2eroViVV38iZ",
  "key3": "3GqCnhLoRY8GE46xP5z1hzdtkE2BnyRvQYiKxCZRFCf1XoLmSexLKxpaTEJim7fDxk9XdVf6gUEKEqJHgXToYwdD",
  "key4": "31MvzMhYYmR6QLvZ2dDKS94npASaPmz4GAA5pyhSMemcvnbGcmZi4pq4BMMo8RUZU31qiNsNLXs9hxjbF2Q5Ym5Z",
  "key5": "3ByTD1P7rbH7SiTeDaRthZRVs1VFi3EH1SA1TUHQfn8neYSrXPX1DB7aTczNzNWZj3fMCZqAYy8vduhprFnfZET9",
  "key6": "5RQCpe1ha6ZHj9PXVuVT24Efoh7LCd1GSgaFDQ25CbU9gQFNSrgVeooFnr2ogGYw6WVCANLjg5Bn899gq74324SX",
  "key7": "2JMVUyCVBafxBvdm8yVzFYZhTtXA6FJZ4yhazRwUu6qsbk2Y8pqDuCWXxgRtWR6zhXRRbk8NpMZrAPQxdmXtfsjn",
  "key8": "Yxt72gigMeRrhnTESoZdVgtLtHmDjyrT9am4ajbXBCRQveZi66YdH9rqCRBJDqrzncMyL1R6uBfMfnAsYod3cJz",
  "key9": "2fXT9iM2uEhAwRNCnWrczNuPfemAQiN29UsMuReCVYqVQDYKs1cnGKD7gJTey4GWarUwdRFqoRtVVLrqm3pYy8ca",
  "key10": "X88tBSzcmiciEfHkYPJ2yXTyHiQXATcoy6CochShJtPkM3umiTecqSxkTFFJSSwAPDbyMTRcnqHmYk4G2NcUFW5",
  "key11": "4y8prnbCMvR3xeFarbrisYw2kVqBE7WwmCzAcbgyqYyveRXjsKceuEpKiq7koB69Umxgu4GANf7Eih4gxPqzaDjR",
  "key12": "3Pp6SGdcYuMFSX4ZuHk7EG6Xq3UQi9u1ST6kHKG9uPFKRbMozhY9aFJ7qzyMvDPZ3YR69BCoqrcyxLo5VKFkrkXR",
  "key13": "xESZRx2auHa6bLABe5vTHs5uhYuCwmk7a1p97yHcC5QZAJJHAMCbX8uG4D2opRSjHpVVhVmxyyG32ZBJhbQLFgR",
  "key14": "5heiLsgZXH84PraWMiZQDKnhcRq25kKvDnVax3RcSRwV2E3aa7t9ZLLAGt2a6cAAgbLhyhoCMaN13zKC71GEw6LP",
  "key15": "25R9ECtNN8iRw2Bq4GfyerBDpGvbNDWP43N5tpxVWVcvf8ULQ8svwV2YUtPfgJF65UPm5iDqgoAkRNfx6kmNTnpp",
  "key16": "2ciHNaT5ABzmFtoiHe3DCxCt713LrVc4mkpovTGNx5By1VRakq1QFNPNexaSSixZD1USNHoTjLjQXbrgXCvhRumH",
  "key17": "3xaotzXzUvzCTWhwWht8cHQHPDUTXumYbSjSyHCJeD9HwiyrJKjkzEjZeRrgvynYtBKGKJPzQQEut47A5fvEUJVS",
  "key18": "65g1b2kLzyV5Te22uDsAPx9kNAA4PNWR6MMcFfYbyVv5JVYQYGiLUy4rPnGw4ugXPbnpsmck6wa3dyCaV3oYFr9c",
  "key19": "L1VSuDEXBCtL1s9tgzbnFVd2j1MRoFZFbfY3jGKrgw5tEw1DvSeshHTbdSsFFcuMc2TvRPZWcGc3z2eUBDt6tG2",
  "key20": "puqeq99JmunHZdNv1aGjkt5ZaxWbZkVzM6WTG8DApLewcs5GBEDkk4n9Y7j2BiBHsyNsWnDaX7ti6tvmW2voUvu",
  "key21": "3npmv5rCMYuFqbC2zrXDJC5b6fDRvDEXtpfYcq7MYaVEk8apYNyURU8WLtH3tgrWAzEGHenxmMV5cDZ3wDSfAmNn",
  "key22": "beEdx2M51tQpGeWbvYwNKKzHND4ZeyAatMZnro4QP8mmy5Rr1UYUPerM9Nj3Z8DRU8Rw4GYAHRRSVDrQxHKArzt",
  "key23": "24aJfktUYRBVcLbx6wjmWtZ1Hic4ENsqHrdeBFp9dKaPgiymscZq3mtiCvgM5e2Uuzmj1b1SgxXg1mgcjWTfQj89",
  "key24": "2aXciphXeEy2KqRVNfEM5pqKwEoU1CCQJUUSCB66VQYxBkeHvcUrWimbo2mrShN6DxqWtruFoJ2RUgWPbxgZYaQB",
  "key25": "2yTMagJ7seyfJpJK63RygFqroEk6kSHuiStMKxhKm7qaEe5HtCB8ccveicSjG5b5NkwoE9EY5JwoCFF4WYjCyujG",
  "key26": "wUXMnE4FN33ZZ1kAx57AbtT6xo5AuicgCuhpHL4vG2nhKdnnUHnEeRX3RB2gmKAzumZ9zfxPZyxfTpYXsE9fQUL",
  "key27": "54UVJDCbfJjmqKAZXgRvEtyteUvTi1PPHXMTGiLfd7cj6QUsHPQt39VPNx3L9LLF8y6S8wcgSSKeEkuh5jp5auVG",
  "key28": "2p1i916AHQxWic128mzrqAqXHB79s11oR4JxtsB7LBpejM4RoVMLtXR74CX9hvkmNyEtNEz7FQ9hDysq56Ks4ZHb",
  "key29": "4VvUMo12LXqTaT3tqzvAqhscMHKZDE5AoZU4E8fFL2PfoFbo3dbc7Lp5LvcSub7t7GneNsUqHepWn2kddCWLp4Fc",
  "key30": "4NjndG3DpAXYHK1t9rNZegwrR62HQWJuRtQH7HPLGcFNEeMdfKvyZQBzefcd1vmGKEZCAfVBYCjNhgWiQMtNkBMG",
  "key31": "i2i2eJrdLv6CVPppJMu4BXRW6HRVdpWu1DAdMnov4sWBPmkThDJANkHzUYBPeqKcfTi8Wh3ogSbXo59ffL4YoS9"
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
