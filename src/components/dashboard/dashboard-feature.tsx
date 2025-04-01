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
    "5ZxLLZwRa4EHinevtzmyD5UTB11aX8ysycc6okrxWE3UJ3iVHHTpwAutAjCJyarDm6Z82WE2NnLjWi2fewnQSw73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UZQMmtmez9AaZVJNxG1RP1SaWA8rbnRmoBfgMX3XvfsJpsTHAWWRaMTwvQtK54ssyWh118aYo42jnJmdzcC5rs8",
  "key1": "Xts8oHtEnsKGQ7P9Y5qhjr8nyy1CDSShCCcJ8wQcZVHm2eVDnAEonYJLMv3jxJz5xDVHWvPHUdAqoGSR4DrkE3C",
  "key2": "uU4PM5HzmoaygsXyRzkboQbCsXFNQiHCKph2ZpnDKyfuHyJnQ6vDsPRh4YJZ42WELh9qhUtEpxPu9pV6WZCcn4j",
  "key3": "eXbo1W1YBvD4VJXkBKJukHaNu4VTAuLhYJMprh1M4yxDwwbMX8cjHe89P84cUW57oGoPTs85K4BcFPxWCaYvGUR",
  "key4": "dhkny5RHqqVB8qjyRfHDjCRpMUZaeXi4y3rhRE8fNpPU9DWaLL8ieBpdzZi7xJutREi8ZiaFxjdUHzEA4uDKjYR",
  "key5": "3nC9FR1v4b9xwQYJWpQtKrgW4bjdM9jYPWUKTcCEEZUWSKmhy6CkZfcebdziKMA2jWdmMX1dVEfsXE2qMgeRyRff",
  "key6": "baQkYkyAgueGfxZFnpLz5Ty6okqD6FHuNPpsAa3jujujsB9bbH6TfkgZoPhMTNotZPdjcHprtSm8fgtSzguGaWb",
  "key7": "2NeLPJxWED9V44Fq3zn4kYDJTfK1g1feeBkKGogrTjnD5aKvmsxNJ7CJ1kLkFHYZWVWT2gpc5PSDKUy9AXWBajwN",
  "key8": "45DumPBrJT6opPEyn4YM3mnm4j2LkX93VU7iisvxT4iSvoh692x2KAGLccSnKkjuBHcLJoCArFu2cKsEBwj6SqNF",
  "key9": "3hdzk8ysZAuFaYYiZReJkC72VoRLXxKcm7nM8zeaxffx5dCvQcUa9bYyQBuqLu2dYUf8eKiwZfckyEz2WVVgai92",
  "key10": "dBACFyj1EaCaV6fMonu8PCani36Cuy2AUccQZRRpQjDmQXS1v3J46vfGeVtYY1cGQLXwcv1vc35z6DVG2HjzNrC",
  "key11": "5yWLaVbajTtxyXJBcMqsjyq42x2E2NeoRQGd3CKesjgvS8NVARYmAKhXnBH9UctxBxUxPaAv7yZPZnNv1W83BeFg",
  "key12": "2SCTxh7bC43ZDUipeb47PVU5csKzELrJ5MVJuS4qqMjMtEhu9ftYytLVQVBDQtjxBpVBUcX1MN5brpXZauYN3SyL",
  "key13": "2mSBVvuMEYC9PDhNphQKENuvndwmSGvW2nFLShmEBhoihhbNXhnR5oRXvoZXADzBZS7ZxZTNiDkcWkwTfPwyBG9",
  "key14": "cjcVypyPd6HYjCiEQKLoCWBxWFcJmg3QGj6HpNsqp7qGR7dUZstoHKRn7FfFwmZDVX9nVrsEiWQN2qo9dDrUWBc",
  "key15": "3V8HRg6ajG8HPpbhRt7NxGZAHWD9r8CsW5MwgmMmSMvDVmNo3uB6zzjmPYJxWgght58CKcsJDxbKX6a6EHz1z72z",
  "key16": "5ciP5cHrg9jvzvSnQTpKfUa8RWJHsJrCYLqGLiipG56ppKA5m1hfLXHtpb1ueoAUwuCTaNBvGLPpFgC6zVvKDtCd",
  "key17": "64GmcGXd7tMQHNTcEfKExXD5pms5YdNXEB7KcfJAESzEBbWVpXkKL4HiRpPggkHUomTz7sR13HPDnP2xtfpwLmm8",
  "key18": "51nnPKim2bVuV9mqAsGhW8tHN3xwpAToZitYdQxdHLMsD8xNwojJWMjFtomftiW4LuHotsGukk37w1RW1NPYDCFV",
  "key19": "4rSMErcxXGWKR3u94T3DAhohapcZxtwm7NpWvGGSDQXxCY8MJsLch9uYwbzfDv5gM5SV14RZDdWoZJpTt3o87Peg",
  "key20": "2hXtcW8ZmQMhy4TDUkEAaZ8Xea7fT5UP1FyfujPL8VS8Z7BM827CdtKH8DxhzjPwhRDqxtQhr2gqQLKQH2QRsSHv",
  "key21": "4ZqCUFGMPT2RgQaC8NbDJgMC4cY9R25JLyaSu7pHJm62EfSaq9YahXg9Lg5RaJfi94vq4fiEsWLubzSLWhbYiCKa",
  "key22": "2JqjxXsapfJzZPzujuDCPhQ3FKoHRjAguxUwyCcoXNejj7nQeXiH5nFG9aHtZjDvLt4pYRBNdQwqmVsdaTDeMWrA",
  "key23": "2viuTpFBynZka1hBi4UFNtUs62WApPB9crh2GRjVhpZm9tXYCCFpbMe2We3nmd1YZ6XxJ5nT3Sq3JkTrWhbB2235",
  "key24": "3XQ27uhiSc9Uu7T65rspnNRtwztufR8RrySaw355ErrpgGiGHDhDY4uRTyE3H3tzPCxNoTkcCSMtmH82KuZzgpwy",
  "key25": "5RcGuKYt6d26R1Hgas3PVNoZ8nimurft338GHx1wDdBMoR44cC6ChpQS3fkHb2s5riNYmpRfVe4YHi8WL8j1iKyG",
  "key26": "2o9wkAEVccpNCEXPdo8qNy16CjqwQZjsNsgndxetzu1Ak2eu2xYzbipu31QaYB2kmyG6PMdnHsBYSwXFnVaCL8Hc",
  "key27": "32VY8krdPezALqaDQCqFq5KgZ27GvXXB3fQ5MnbRvoTpdnNuAyo6b4fp1LyQSzLAnSgwPiqhtP5y9WfmhKGgG3VS"
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
