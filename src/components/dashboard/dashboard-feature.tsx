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
    "2zE1rmKiZDb7RMHnhDFMu5t1wBcPpasj1hV5Ly9uN3dYzvGNr51VFL5xoJGAFMWstxr7fzEMnGpxHvy4qLYAXtSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BzECX9j12aKGzH3UpHyBi3TQzwrtvMqGmVc3hWU1RevV9adTV3RXTUEb222d1emNhqgGTotgg4agzwmp3zyZ9M5",
  "key1": "4gR2CUPkKqk89Um3KtTw8KksLwKvTxF8FDqxFt2AoWcY1bWfDz93t1v8qG6qz7PDR8pb491ui69S41modUYH3yb2",
  "key2": "24pjAe1R4TzUahCVhh52z1YiarsTE4mEwJXnVKMApDhzZxgfreJcroNWR1FsxZiFB7XVPCqhYHVxYemRUdnBF4Bi",
  "key3": "59MNB1XVtU7266hQnwynGZj8WijN1jxRrPkGRWidskyCsAnhCs1d47eB7QQMUkNL6Aee5WT3MDgQxUhZosEmf9qP",
  "key4": "2Huj3ZhVADY4C99XBQcKXzvL9CYBJfdWm3baVrA4irqG6TFqweAGYZsHq3mDuAUBzB3c4bwyxQhHewBkeePLbLQN",
  "key5": "4cDvv1i4wafw6higKmm81ppTVovEjc5Cg8JCBr2QQote91dzTx6bjSvsRpfUqM7Nko7aTsAFgsk4ZKkPY11fm9pP",
  "key6": "WTxndazu5RVYQs1p2CNGdye6VtSvusrrgzV5C3ZQMmxffwmz2D7fkgtKt3RvT3vRgQsij9auQ7bStyoKxt6vT2f",
  "key7": "sgfBMbkz44DyzJFudR86BA7i4TV7zzBvKNbb8Yzc1KvA3f3gKshXJzjqbeQKVKGXWctBkPiayrLPe2Mpzm2xUzY",
  "key8": "2QnTMstreaPeWjF6CnptFMohjTHMxvb3NwS5G6CkdhaFKTdm9L8vumBh5ChcTNPK4F9CDERposXMhmTqv79d64ZL",
  "key9": "3RHoL1aB5tZ2JpjNM9E9BUYoXF91HerSKYQwXP4Tpa3LxpyWjsGtUeiB3hD2EK4ZBfRumrYyvr9wtJCF4jn2Sfsc",
  "key10": "4Bav2XQ6VKeg8zY4qLqfpozBWza8ysvYwdhaLxWwTvipLAkd827UvqRPqyuHU3sMtDJx21GEZaDpTukGM8Zbq3J4",
  "key11": "334QNoTu1Zm4cFd8xqL5riRGN3HQxgDfJ9popYoY3Q9ZgW5WL16Zb4tkmVSU9hcNe8zLQ8L6dmGm5N9ChpEj6EMs",
  "key12": "3Vsb2kAWmqFezPxYJTTjHezSP57ibPWmR8jz4SJ2EFTyfSj2vurFJGKCXATEYofoKqNv3XAfF95aSsxXbYMV1Q5Y",
  "key13": "3MpjVyaPRFoSHyT2QW7bxuTxSxGz9JuVnXvgaTmZpwDeYwc3J6BZTZUTM2upGTrgcoSB2AA4s2bBKVg3P8v2enUZ",
  "key14": "38ztg2orVaPRdkuFmjfuoVEPQFmwVkDGcVkAuYt85UXXFcHKP8bkYCDBurz5gWSsYV6c1PtUDJmpLkt28niurGkm",
  "key15": "5THGySZgCey4a3ywPsCWWgPj9ScVrm363c7m2eLRJm9i1bZW4bFnbGH9coNQ296eF59pqcPMh3P65sAcxvafwmsf",
  "key16": "51G92fwTH7b5g81aTaYX8LV3YonbCn8uKyetDh53eE9cPTKWwRtTzdMsxry24D1jPqvvkvA334PhhbSwcpofPGmv",
  "key17": "4xjoPpK17FeAYRZUyAH8behAYT6wVeWMriZ9fJhmqwWPkb1c4dNsjcxsVpPWt8XsGyVnwa6dyNPMFcP1S4gT7NUx",
  "key18": "4D19iKMoSiCKcFjSAvk7CLYRNJwNNNSW9UHp5eWVSPuignJ5yRUbsTgMyJvFaN4GKat8bBnyfGbc4UWpPqjmnBdi",
  "key19": "62JfvAFmLDLCqeRG7UN1cjmnKLTZ2rBJCiWScgusDcvqFC85MqGVYkALdtwvAZcNeoyZSjX5xUekMBqrgZqVzQje",
  "key20": "4PjFsDcX3dJDdL7VsxsfKcNjZSyFhESHcW7X3zEwkRw4kdd8L191jEi1GPC2aNufHCDHMtNWekPApt7R44wXkeNT",
  "key21": "5EQCFz9yp2LNhJsRNi9L8ZEzic4vhnjfURaS14fMgJd854Uab9kpjyVKXcVnnHtHb78ihe6jn4W2Si5CTxKcSzYM",
  "key22": "2ygwWGqgLTpN785WvL3DJyQGLH4cjHWuceHx77z9beHwkEL4jvcRbuFE5V8NzDmXRsrRjKHrgE31ghfknrCtk8K2",
  "key23": "26LJAwguEqweCq8ZkTi3mJ2vgVURbC8r8L1d6zHudGsTaZN8VXcp3ve2qsJ9AyFpeLNk3EZa6LxzvozLsYc3vpFU",
  "key24": "51E4CnH5uZET55ywd7NWg9RZgpWeNYzJ8EcfTkvefsAegEXW3WNWvve56XFT4B1MwmXgn1UuAm5mybNmhMFSrWSh",
  "key25": "5ZbAZsNLLSuFeb1HLbQcxGLb9ZGPkiQrgzbG2DJceqLR5L25qjLoYvhC74PmAXNvia6oeNqqipvomHkb8orrC6ze",
  "key26": "26g2LP6bFhLQHtUJMMSTdRMfR55U6pNQ6rMZLwbTEhu7e37b5KyiHTGY65XCrCB3D9Ch7uuhj9VPk9LpBRgfZcMD",
  "key27": "3yF8idSsUdFLtiWntyfv9gEd1ggGrAwZ2MxPMFwLS84awzeRw7VQ7KyeXvXEXQAahhq26iX8vpU1gxE41Cav1Cxg",
  "key28": "3bQYt1U7yJtMhBo6p77eAQWzgdKiwi5gYgJXMUJN9jPnRpqqhVkTuwXRzDkWnWcX5UR4FP5trQVoF6vDtRnwTzZD",
  "key29": "31dph6FA5YFFTXb62X8v1RfKC82gRyGvheG7FgG9EooQkoztdYYzvJxmNuP6xZ6HoiM3UyKwA8mQ8Tymwz5EJr5w",
  "key30": "3Jq4ATEsDdAwcsTuCwrPCzu5K8dU5CRqE5YxgdHpaLiuXEgiBRdeY1agSM4Zf2YaHDDsQGDmEzjmqqTiZznEJNuE",
  "key31": "3PUJE6DJmNr6HBTqvyW5SCKMUftXbs8FhyE6imh9c1UBe3LztfSdZXE6N52zBJaet3Ztt5QrQNCnxY3zXmohUJS4",
  "key32": "59D5H2bZa39gJrzQrQXQEiKYzDjDyVX8CPtRmqt7yXszDHvBgqyait6F3Boqve8ed7SWdwn86VrXuPp7qAXsB4AF",
  "key33": "2G7ZppcaMR2EXzwikHpvp6JjQrP2vnRCWyEB2cLUAr9E6DgaQeJyW3LVdZXvMLjbywL7Wf1DaxYqMrp5mTZQAADD"
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
