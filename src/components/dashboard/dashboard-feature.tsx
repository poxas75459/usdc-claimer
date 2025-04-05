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
    "9ozJM4S8eT73sRi88N15CdhRqDTHST1WCxXnVtGHfXExwX2YCLp7WSREPoPawwBTMDxiyRz2NyLmPVZMxVsHfxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f3heyHesbLPDUDfqxtgr9tMsF4T65V7NjCRKMMvJir63GqcEgPaeFQDG2evnWxzLGSA8nceWWNt1DVBF6wHSKuh",
  "key1": "5oPCs6vdUTPQHGLieuWT7CJpiR7Hfb9NuYntGxHt3UkJdM79RWfPWRXjMs91GthNJpMbofXW5fMLpM8hJazsmae",
  "key2": "tCF9g4coSRZv1V78A2hnEFgXiJCm6tRT4Y613P6WgFE4WzrBAHHBha5SVsKYghPBWNkQ4bskkTChN1kxsVyncfP",
  "key3": "3k3isGFgEEh1gFe8p2Vshr3XJNRTjgRgmfMLry6n5JK561HFvu8QcsCeGVZhiSXuBaXaU8xujrWihLdv2vQA7xY2",
  "key4": "5yrR5DVzgCzixWWFDowzuFPo1Nz2bbz94ssJUyXT3exnZfJK2vDQFRWU97AQcBRgHKg2GYtsThgFbknSAX81mqrn",
  "key5": "5W5PPDQDAG57UCEPHpq6E43hhBPkHQa3Xa2Qhs4oavx74LJ7fhJgWLxpQqHHKk5V3peF4QVcKexGMks3oA9uqmTc",
  "key6": "3tw8dknSbm87LDMDbuy8ZWzuaYCybuQnrKWP8JapHk6T7aPJrcVP88uF7K2Face2ckrCZUMG2Zq9ANTCr9gmzArC",
  "key7": "2Ax76YRuHv6sMTS9bqdk18Jm4nhCqAkZwohjhaaoXyUmf7jHkPHQiD6t6SqzSJWgr1Rvya4HeC8vx4RfwyN6m2B8",
  "key8": "WoFf33PXh2UPvPfCB16kZzcQvwd3UaE6p6EyptGJcd5PtwY3Q1MK48NRCBKFehjsWJd9vJjSxjPcDiE4wEA3tZP",
  "key9": "4it3m3v247WzD2GJwCFsj3g2LpcPz4hV2ijXo31V6W2EGNXJ88GZiSHJGUjqsZAV5xqnzoJSkKFFEm2wYSN7ACHy",
  "key10": "2d441bXDFPhvPWkLarQAX8PrnPCQ47WJSyLUCYC6UC3PtGt4MfgtE2Fy3fWEneFUi9dBejg9fLKabrxe8C7pGBy3",
  "key11": "2derhF8qW87A6xmeSfxCJ9J91JJd5ekb3h3AwAr683jWsUfme4oZbwH9rprbzHWi3ScSz53Uc5ra3UcK1zUgzjRm",
  "key12": "sjR6gLoyBYURcaysutXVGWsiQ2vtXNG8gyrHjcwNdDLo7kMaZZAEi7AxDvU8uneR6NZ8Es8jhw6WyLmyw6uppBe",
  "key13": "5r6vpewEWUPArErh7YLp1RmFi61Sp9h1T6SESTvx6AFPSEjxRofPPrXbiMqKi8txAXUC4aAy2Y1rD5KbDrU9FsZD",
  "key14": "4kMjxQwNXJGXDQcMbeov3g5AQssd4omMkr7vMSvxQ3REbAdouN5tkwmAqVejkhJf6DCX24CGahYzKFAnkEfq2tBT",
  "key15": "4tZ6GjSnwrXg9RVd2cjBD9tmiRqSEN9WPEuHVgLtC3wBiZsQk1v71iycBAhbzB7fbaG5jtYjDP4o7Ckk8BynCsgN",
  "key16": "VuRDhfKhY1a8DqC8WDTtzVNL7YtBJ7JEE7SvLhLycmGYE5rPnaoTCUEQ78mdKP6BFpRA6T4wD6WbiZAEVgsgDGf",
  "key17": "4LKAbWtkuDyCovEL23yGxGym8eCX6ER3MuyNbjXoRz3wDDRFPhUYxwPxU7EEzWWnDng7rjH4EiPNGJof2sfLHJ5R",
  "key18": "49Y137yGB25Ngp42mdc1KykuizpNtgQrdXayPUQ9UwcobHmWWRuXcHk8DECXDFTjcKbRW72Lg5mZtqg36meHGhWG",
  "key19": "KcxfC2sQdmixqxGQ3ky6km7BmhTMWSMEfcsC3zha8f24z1B9CwnPvnPRcH5PMQmYXpwayKqn9yCjKyfnrz2CTw2",
  "key20": "3HMrGt4FLGfcjC35PYbEYncbBo2MyDiGhm2y3EZNYJwrUUAiLievXzFCSxKPRatNeeN9Ko9mS36cuz29E17tCdg3",
  "key21": "3RtMxayRYpn3MCejN1xvyP18RAzarxWU4tUsKAMGGewrn1usNbfkCeuopCc6dLK6mD7WTSCUxaqJA1vu5QuWzayh",
  "key22": "5R5zUtAFaZD9fDDzh7QzViuRwLJf3UR3NUCAwHbd4mpTcmuZJxqUHad9r1byKgGQ9WQcFsFgpRLysgLKrd6MknH3",
  "key23": "3zUBHd3fRMmhypYYLYaRUZitvyGhqHxK4hYvVEXoEXdJjgrnorZFjQwwS8i5n9R9yWUrd7NV2UNMyRRprMecgWhM",
  "key24": "2UQc9zoWHFXPZn3QmuJPYWfwULeE5hDDoQtKEYLyzTyTWqywFHbou58pbJ2LxzB6D4yedbCB4yFBCBj1qK6eH7pB",
  "key25": "22CQZY1eWDy7C1NxVy9iArT7RmLCvmFuNQTR2yH5nfF8dmoJd5dcxacsupj9DA9Ux9VpNw3w46mNi1tCzfb6gFYF",
  "key26": "2tAVjbvSqtQ4UseJqfdd9EFaqtnkJLQLtjHUVLh29fhU3awXtLHUJd8G73NwQu1XAtTJcXVkM5WtkbBaGj4NyF9U",
  "key27": "3kZGnHPzd2ZvyCpcgxA76nxB83dxPWp3B6k2QuovopZoKravbHvof9QvEP6RwYYQ4ZvPnUEGQSCVZzuiLF7RdQpi",
  "key28": "656sHUVrR22xJSk3dGgyb7wGa1wi6yMidqBapb6i6x22FbP42GK82QQa5ftkkRFnuUBcCKZYc951toJsuKTv34jZ",
  "key29": "2n27DyLdPq39tSESQU8XKx1GfiMduLy3fa6nTDixSAMWLU6whmjkuQZ2hHyeYTuTRC3m4zTJuS3vFX1VgYcFty4m",
  "key30": "XG4eK8BbgqrDbXYakhPwyHTbNQ2eQgbCxReTrSRSHWvvZWL432bCRJSAnc4FKdqXFv3EFVLePhRCiFEVuh5z4cq",
  "key31": "5APwQYxUtDde3FUiuZZbf2dsErX8qnbYyUxmj92jj4cVBW1fzZPwEPyazC3S7wkxfWidfK24bVBsuGRGieExq7QK",
  "key32": "66tMZQafBYUmBQuM2gZsVQfEYCQE9Y1ujZDrgU6WdHmwyGHjDaYb3tGtS51A3bLK9zwiWqiXsipUEvSD5KWWp1Rf",
  "key33": "2gQsAYTBMrxaXqiwf4C2QGUgvyDk3232Hx7jasksuGcuazJBcupr9PisUQ3sEvo6UWpiPVvTJq8AN4sfcs9FBgWP"
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
