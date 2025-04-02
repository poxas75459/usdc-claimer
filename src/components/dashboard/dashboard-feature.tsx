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
    "82EuduK57bmraz1EHAXwDUBQVd9iVguQCY7NwJJX7EciDqwsZmQDimQVw8hL3UFNG7Tyw75t9xuunGPyMq77mr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pkxk6YErpRiZgZmBEzZrk3d9VMpJBKge3CL3p6vtAh5wuWpjVfVT5YtEDeEJ3A4QLVujmjXexLHXy9NmKWRsCYY",
  "key1": "iZtjDLUmrh4uksNZ1o3sbdPxdXD5kxB6kfSWkvxw5FCHyV59Z2FjGDJ2nXJpF5vdiPQjyf7hW3g6S3azq48AEgu",
  "key2": "U5wKNBXYgLEBP3qneKTP854ZP5ePiu42guYPHavRDLYZTLUXLHnde9HyVFetTQ9Pi4jn1MsgaG2MkDZdQpguP7T",
  "key3": "2DMDugk1S1bJVkgDPBrpQMv29JtXPSeTFse3x6dSzYUAft4yQgykNX5kTUhfLaVGuFTuXCqMupHQSkmGrUynPX5P",
  "key4": "5BV22JFD2h9wAuqceez395GAfTLyWUHzEw3paVLeqwYiBAXSQYRuHVskatXGAWixTy4dAEvxAaL2JUgtS8PUAKjt",
  "key5": "Yt5c35P4KKK19wFDtPposy6trEF6G6ysdGY7G3JT2zW64wybbAc1Gy51e69a8j97CHXFajFinFnwhsEs2MeJrjd",
  "key6": "5xhhjJLHWcKM8DzrugWaFn4xFRBj5bsaUX7bMnq6np7jfz5jvv56QbousYMxVqvZY9zjxcv5SCJZaPyNUEChxCpY",
  "key7": "5JZfHhbSMyQ6fJpU1gj71WwgkXWNYfBAkopiyL2nVv9ComEeAymUFsQTTRnn7uxknG2UE7jNyVKL4djjhXPZ4GKp",
  "key8": "2FDYthWaH4La65zQi4AYB4nbRVJCJn4AjWCYKk7PhiGaK37s6fSEfoF3XxATpYNmJRJk8hf9Bt18tRtSbvccKvTV",
  "key9": "5agGY6cztqDDuVp9UvWFK7f3f3ZwhZoCEJ268JkPQwke2mu2trWV6CKxmX7JyS8gqJsZnb9Rk5oJWM1JtMVGaD6f",
  "key10": "wj6RNvNmRht2bxq1EfSc3PfGdtpuv5evYo2V27TYhy2PTyhFU6bJ75FmurVMRn6tdtbWSvmwH6QCZufSycp2jSC",
  "key11": "4aWPcULsL8GrswcBrLte9LGk2DVsuXmNtH1D6KqkovrwTjC5Lu6bS51fTK42yzMqe4PkTrznBeu5AMnzYJbhG5Ej",
  "key12": "2sQ1KD2fxm95jCZtkrrxHH3jwjQNmggQNDd5MiWv1kMWPHoF2MEU4YqdsYtksRDZUrYmkxza3SkHRSGQoh1AU56J",
  "key13": "3F2FetZryPrmrdxEgnRviLTqdd84SCiYDHHLHueNCkEEy3oTJp4aMeu6X7h2c9AZ2c4MKzJrGSbR6zMCSpw65SMR",
  "key14": "38A6DcRgDxPPWwZusaQituE9WFzHStNMW4oQoTKYswVaiGTnaK33Q7oLrhgH1npYe9bfFYDai56Jygv36KvH7uFC",
  "key15": "4kK9nNERN87t7jvU13mB3hzVPsEPr5h3xqEJvvZ2Ap2qXmCEZeDzwVKHmGxc9reU96bxjHK2SQALGrvz4egQwL3p",
  "key16": "3idiynyzbaVeMf2eAnAauTHZ2bzUKDin5BoFExzK6CitDMQBdzxR9SrjLc23ecYeHUfZkfuzdJFumfdkBzojUdSm",
  "key17": "9xNnXtnY4uUGBdy5VRNSdHMqTk26wTMR6g7MiKJdpemFgGoF3w5zcfuHbSUsReYvZjUE3tfT6ud3GABy7be1sca",
  "key18": "5u9HWBrKBHRrEkXr379TCJJXhUh4QfyrMdo24D37V3eqbwB8rsjrmmLjmjkkHiMdmkERprFF8JzHbH4ojAX71ciz",
  "key19": "3d9dmDbrDdznsruo2BQHoYdvYiX4XE9ouV2J5wzmWdMaHT3chQtXGcdz6gYxxpSTw3oE9xr5MX83g27T9JgX3J7r",
  "key20": "2EYB8QtGRJNxtTDbR23tyxuSCg6mnD27PmGZEcSWRE5J2fn9nMaMYzmLTuTfFH951NAVWqr9zhrbRSWaG8jM24h9",
  "key21": "RbJ2Zze4MQFDZiZLjsvrvRr7xh87CTAe73roh9MKnM5ghRJcFM8B9vwMwJjCwP758XYaqWtYEe6Ec7G2nqBk4Y6",
  "key22": "qHBbFNr4CVnCo9tUvt7MuyfAxB6b19w9F4pQnubHt9bJJXfcABgkZX1H3MUReMZm19pW9j2jvWsy9Bb2B52fiZb",
  "key23": "4DBtxqSV5MBoApo886sjvDHuQbzob2xF3UnW2S59UCmQGW4Vc28U5Vh7fTPd6nSRaBL3KQEJJve24z29XLbRY7Yj",
  "key24": "22Up9MFTWnHKuhqkveyaqFzJPu8vD6dhxgxyF3qgpHsbUZJYfJn6RVypeh8DsLiqT3LanJVZuk5zrKcmVTqKAwq6",
  "key25": "3hsxgvyxZjmzcRxVwBBhpK7rqfkTkREprFbfpxxAMSBvzhC77rh58tzkZitBPvvXhSgcCauh7VNQKrD3Yw3smEHP",
  "key26": "3tr34RimhgvhXQVALpaTqVrTWoJuMQ5gcPKszmuJgBGDEFTRGGR95Zh1BAvpVbdWGYjaq53PywbG8Vjm1G5oGuUv",
  "key27": "39BSJhbHx8FUzir3mySQoZngGLPuZD41jWYoq2crXfzeAqhpCab27iAmGiAeJuZ7B3boGVcbRTaokD83NJuXVrht",
  "key28": "2BEXbr53gttWqirFAkTQ2GgazjF3ZwjhZX1qasNJd1NgiQXtMm5n7oqLc7kNzFiAQH4cHDbVZEUJLjvkyTNpW3rw",
  "key29": "5uWczbAH9rfcGNwdSbc1MtB6XjahhYhrJENwr8UhKN7nSwvzS1MWZXcKrDKkA6jrFKXCHPgTHzqvhkLtFxdiWqYS",
  "key30": "3gappsq4fyo3SQ3QcGGjX3229b9UoFmoDtjGstFXmUDJPr7u6XQSJVQbJou6zqUDCiTgSq6hQKX3qwFZP2n9U8ZQ"
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
