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
    "3Gq92u9EBooiuUpHiEbCComeNCigBTiHWSJEYTi9ag9cVQRm1iEUsikUy6xkxRxS37NeyETW5arhbnGDtMBYvJxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XXd5SZvqYsQwd6J8A9Gkr42roa9dyTGv1Xt1w2fro6gr8Ved4hMVrZSC2UKWQUxGihxLZB4DdSW4voajcauK251",
  "key1": "54AcSr9H3zM2WZe944STCawFk8svvaW6X66iKaCnoFjzDSY7y2zLMib7V4wuqV3pkWceidyrrkiWKTWZDwKB9WuX",
  "key2": "5ZiwF6gG2wsooMNKUBQsprdKY551DTaoB7A7M4qN1VrhZm6MYuEkR7jahGDChDvVCLW7kgfTc7QRKRhsAJT3z5FE",
  "key3": "3VTCMdZaxtmUCvCvFP1WQrc9HNRgAuzujdKCLnvaoGp6mBSk3CcMzcCbzoeABRc4uNc1wYa4BU9y18BfwSKogCbD",
  "key4": "LqwVxh2JiSoxuT38PrU1aSfHuDYoWoopNagGRY4LpbxVFszJrXkanpJd8stXxacnXkJVqaCkhkABNa6eJvxq1GN",
  "key5": "5LFVXLVdmRUHZ9QZrCr5k2LEAn4o1JJGdCzfzk7F5gwxoLE5jQpHfVQMvTB3h9XAGMHebyyZa9Eq4zCUi3uThmbi",
  "key6": "iSsEjKPWaLgCk45S7RNijGyLp9G2vxP9uGpucF8UbvUZ99Frjg2FFzDu1ZnptwQrewEMkdRg4vEQQ6qK8DskSQG",
  "key7": "2dDBRWvgCZ2xcqyvLMWzYfCjpLY1iUpv8uq5u3uqBjuqAfM8YU4WcD3svF5Epbk2xyTsqDefFQbdWo5CtmBxEhFn",
  "key8": "3hpZHmMNzBqczRdKCozywXmMAq5iyeF9QXGoxGsExvv3CLHqma4wvCs9Fg9BnwRrY1TX4LBqU2Q4NnYf9i9HGXwe",
  "key9": "5zBv6t3PQdantFbU92pTUstEwbC27MmaKvbMSVCD4ftQb8pruYPWEmLJCbhFohLAQmdeezieAk6dTG8aWeB5Hdzz",
  "key10": "5eRBF5uzUa3isXCT2xfLXcNQmQtApmi15d8a96mjGKbuhmkaMwwk9jhFKB4GYMAjiXW27kTFy34EZPbovFPhgxB7",
  "key11": "4fLrxXUDsQDJPSgQJkLdVTPbY1hxgFV185dFDXUDkTfLDLbvscbU4eYKtFkVGbjvUPdBamKcKGtRs1LBWQMSoFtZ",
  "key12": "5hE1oTcJKVB3LV8MVUdgVQJKdbkVJqRLhxQfva8xQo8j8R7hcA5JtB1h4rfhttzsAtmUNtNGEfKomrHvSNy3p91",
  "key13": "HXStUXw4pKLvn9U7Xt53xMWXf9FpvF3QGe4Jz21yTVojgfKp7rSViAJrmwLYV2wKccXzUxbHaqwEVAR9x7dX73K",
  "key14": "5mGRSdn9zeqLKdujZMsuU17HgU4Ag4zmKiLxKNYhMDQTU5mm9uYWV1UnhqLFEQ7cm37bdP7WfTvG5DVV5TdeRkp6",
  "key15": "4gQQ8LTurW1qhw4xjWuzFBqwgcTcLMdNfwGH4s8aGq9ScPPgmYbDV5gNuH796G6GArpsyxmUJHeVA2eL4aTY8qsk",
  "key16": "8UfKDah7j7eHjWxE5qkyJLzDnSPREvMcHLkrJkJLRDrrCQ6PsCmwwtRXaPEQzzuXc1aTwGfM8Z4wD9o6YgjWs9i",
  "key17": "4hMtNZuuzgjmRyjfJfpDJU8RAWHANcY3wMEcTzDAr3QtQqpMqrVwEVGq9HyQZeGcwsUXhS3xGbuMqDTkGznbmw87",
  "key18": "4kohpwvtzVipAF35L3oJu8sjJg8cdSZrc7ty66LD2k3trKb3SChx77yYxgqoyQQB7XMVYc8EzFHfuya7fWim3hGQ",
  "key19": "3AFZ6cnYQVBwarBV6swb9P4J5AGM17ivQmTLvLqHSiZAQTL2uFuJdweJ8iut175zMeVHg2FJhL7M9zpv6WwgctV4",
  "key20": "399GsDb9foTvQFwdgd2gzhdBsytd5kAdJPJcoWEzjZmx519hX2QCeLKuLx1DLxqCzAMv4tEi5TwJeuUcgc8aRJ2b",
  "key21": "4AerKMgdZ65AkHYd2as2U756Y8woXp9ops1fYaaKwBk9TaAMQFgSZ2BSvr1FaBPDe3tMxwoRRyRuPQZdhyeStm1Z",
  "key22": "3xFcBhbHY7hMK123N6hjBVr3XDS5GnM1agoYP214eXb9UsJNMX77Tkbzw84Dpj2FpRXZFSfBnwM3ji1kCpga439N",
  "key23": "uhAwyhG7TAMUKNNyAL17kfKJe4KpbCQeZUHTeKmioLY5L3CqYM5N9M3i7oyvoFk143CxxUwUVbEofiKwnyA2yF2",
  "key24": "2yvNWJeAfgnXZi2DeiWRdhQccJbZWPTps5o3vr39qFLAbLcPQkhhSGsod12NP1hHMshKTDgEFG6cC5iahf7ruWmH",
  "key25": "2xahZSTCs6EUNGT8ATroB8aeoPxBe324q2aa62GxAxiFeW7cT7fKbA2d7Xma6Z483jgpKf3SAom8aVNpkkCeoDPa",
  "key26": "xMJEUrXAtj4usXYz4GsKB4sXu97Lu5VTqY9DJnRHGsQzkUnHZJArfzUMvSutLbGcFMuJWGLgNNJCiuqfYRoG5pU",
  "key27": "4CTVvTCTjTs5WSgdhzTnCJKQTdzUhALPPPFirE8pSSoKr98Sndrr682uigFpBeYVczkfx3dT5hm5astG4JT5AuJT",
  "key28": "2bvSrz7qmsQu9hvxdQ4cePyLgWxkpBAAZMEjP4urGWsUPGkSpUg5ZzV57BRLhEfqXtPoG6hrEoPAbiPntCrqxkH4",
  "key29": "3qXauPBA3EbWxSLMFnszLWsFBYBsrita3AzZbRLJSz8zq8Bc2FAfKJocG8UcHQRnKLCCDkmMeM2zv81phR82UbKE",
  "key30": "2ufTa4ZkcNKgsnPca8t7cks5TMxWcMYRR9MPqNw8eGZz2ccV2BAS2W4q3Zf34dtFw9zdygYVRWftTGTmfWBraAtF",
  "key31": "3MvHDVoMbwzKCLLi2auEsqZ5hBzAD6mTmmBcsEE6hKswDkjrZBd2ppErBV6ZrudGpo4eZWkoCR5n2KxKv7o5m2S1",
  "key32": "2UjMEEyAorh6Yn7e1jDnMz4Ef2qNjgrnMZHgfoXZaQX5H6Ct9eS5eMeuwSWRTmm6gtCj4qpacjA2veWauXrKR6NL",
  "key33": "2Ms9q9Qmu1MmzCdRPceCnkQPg6mWjh9F4Mh6DjfxGwmKfRJzVAhAaNetR1DCd9pjHs2sq7dfoBbmvDcr5svuxifP",
  "key34": "31mBTcN63rh86pMowzR9o97fe4iHq8nMsysgXFJJQ1rpgCV3WFLfocsWfxwymNEszR8CR2Q3HkKwhdoqeJL92f6",
  "key35": "3gTR17UWktcBfjgSFLSfwmL2DshistUttQJiEsfvBwuS3zB7T1asbNXbvCBhaqMK531kJtqMDSkBczU4hW1UQzsf"
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
