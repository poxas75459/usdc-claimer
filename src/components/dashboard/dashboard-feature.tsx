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
    "5w9evkLmXsKx3WmF3Sg6tMeXs1PqagfXTnVx5g7pUCGe3tsH12bbFgU3d9Pt6qcjb25mbZWAB4ThHh2X7JzujTa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usZCAQ6GkPnQpxaWA5QJXXcQRVJiR6irLfzHNTKN9MPMEKWBmi2pzemq9SdPQVpGko7XQr66RkSfKCgMMYtubD3",
  "key1": "3fBC4sJ4qeQ2mnMaGFct3rt47vWEHFKNPhVa7oHCXQT9JUzWn8Ea8gZYU4tSmKRBy2pxUMpB3PfGaA8H17M3HX9H",
  "key2": "3ZzrWsynQVCCwwisuf2evEQADyR8NtFbcADTJsY7sbPsP95r6vCshV1WyEoRp7HqmikgkUPGeS9ALGuyDSDQvbim",
  "key3": "3pmn1RWXt3ebFyE8GgW3WryRrUWhYFuy9vGDCGJ9uCXcnaFmnE9iadakXWFPKCCZCoqD7kg4HY9Ho2gUK5Ay6ZhF",
  "key4": "yqQt4jGTZJLTPg4CjgsnahHqWt7HbGbFxpVTyX7FbPJEf1Q11Em18LPr8B9dQEv15bETicZu11JUC5jC4d5zidv",
  "key5": "5Yvwd4JFncbdneJ2sk6QUL2x14v5aB8fVvpSKV9gJZEZDV1BVgKpxsNufhrAFyLABiYwfodtuvWVoWFRJEWrMedm",
  "key6": "ekimSrmHemS6an8gjALKTGUAzEdTszovmQNsNoQsdC3oAAUAq8r1WQsNrYzdwJmHtwvH8aCVAyQ4WPPRM43ny43",
  "key7": "4jw5UfNZW2wXTP1TxSh43L22s2BB5Q1LFbejNBPTUpPWrS8tJvhmQHevBmjG9dzuEDirWTy882gDUkAA7QWYTUEy",
  "key8": "2cL4ezzWUQvKrpP5hm1TKPgeGMNopqL4rcsYAKF5HgpmKpsTaipAScjc9Xy8CEF6CNunvAYkUHeAPgUgUc6Xji5i",
  "key9": "4GDtkWSjykg7rggDmXrks2geQhFjYxLiQ4UZhxfeJtWyysp4iZdVGw18pHEBUBrrqxpyLSjnyeFvx2zsPUQxrHq9",
  "key10": "613etzjvGUyhoMtBUcxP4Do1jaCkBQB2bKT1CYa2VszuqjvpnmHVmFnJhqidJpV1fWcAx9Q3obanzykWXhhmxPf1",
  "key11": "zVNdMyTHMb4EQi5Hj2bdApsvtN8ZabbFuHbQcARjsDhrwhTXsFdcZ6goad9dv4GyAdyB2HeskFE8khv3cy2Fm8n",
  "key12": "5pBtuhGmWj1xXjB4FMU5fJJdkE2HVwkHdPuu6eCcK9RftwznWFYHqYnDF3eLyg2LzkB1YoR513q5fDSvCx7tmp2m",
  "key13": "475nfy9FqmUQMykNjyCKSGPhnRYf8coT2QVQvSwf7S3HMuTHHyUBmTUusNt367DgyygKPfHQ23RF7xUaZcUd4Jo7",
  "key14": "2yz6DQFokH3pr5mKNw6xLugAv9i4aGYUAjQbB6osH9Ubsq8mxqbHwdYyv6qnpaGSBWhGrdWLTrWVafTSMoyXLGLV",
  "key15": "626qojxCF7A1LEQn3SjbqS2qGNFkM24SKD3P9NzxgsgFgfdDVzWQ9AiKgRBqc111VUxMvkBwy28dH32uf2DGstv8",
  "key16": "4yGAA4yQ2Ubq2YF2n2NWeTyjPhmisffcSEzhVG7Jr4HXnYZfJsrJ4NZEY6mCgFpLPgWwEJgLDzYCoSZSv4D2SyGh",
  "key17": "57c13mUa41TVLE3mtWGiY2KYr3TfauonW8fetYzzNuqgC4fitkmkGTiQAa2M5tJdCPW34QbRvmDkeBFXYQXkhYVm",
  "key18": "41jhWtrj8bGbVb7Tcm7ryFQVJy23xjPpngWXMvFHvDszTaq9U9yoTzWf56yb2zaZhPW1JPBMqFoi8jguG8qPUmnP",
  "key19": "2MvUYpEaHa2NEJ1mMkqg2WCG5EPYrUYVmJiURN4jEoRgHYP1m5ND4zbxUHfoGje2ArNMgntVejjYdxnHMQz2ZKwS",
  "key20": "5Po1EAkBadupzNd3imgEeTWFPuyDa3xtvwbSSdYgv95EamUcNFKf9VxVAsL3aSdNsT7N5ZXcDUTn8Toe69oJKBhV",
  "key21": "mWNUd6Hy55QV1sDs87zB3LWieifLkiJvSEKY4HajbnPbCqafNWvw784kNXq7jwZ2g3Jouwe72vPseLb1r9WRaWQ",
  "key22": "2d6tPq1vqG4iTuHpew1RrwZetXrahNzUdsw2kR4D1MV8usEgLUDWBwA7AswVeTDKBiGM34PC9tpS7LTLsyrNUs7a",
  "key23": "4W9jspaPF97ChQhWk8yF5bSzyQYMvFgCXi7emaHe7ZKq2tAWaffKYecGvpGN29HC8pR3Ag4Z48Lyd36sKz8oyypr",
  "key24": "2jPnDnSbZNm3Y7ft6853g3FKeP9tBS4jri4QE9CvbwJXr9Q43zez36CE256YSFYppLi4Tpnf7m7MVxJiLHbddNfg",
  "key25": "5q9YAgADW9wtYFFDbAU6tYv8D5sp1FNp7wRx2heVk4RTUkNq1NBGdzRnd7ZrW9S6eH7fm82bWSU2gJ9fEqj6Y93y",
  "key26": "3FTL42cvGdzA9xG8iKyuCoZWNhHZvtLdciCXUyQJbEqrPup5Xa5qJMuY35XqwtHJ4ibBhg66DAJNQNfbGBZiRyvp",
  "key27": "qx8EEsANvfhkoVnecHo4EiESSTFHn5wP8BfgR5cF422wcRRAaoiCenSejmaEaffGtQwsMac5aKxuRJ6qyFChCuP",
  "key28": "4VqMnfXUqwrU3z4sZDF9JkHJZP7RUN4fuefGgCtUXeD6cwZeVkXKkT5Z3R8CCP4grPPB1uVHWU51mmsySX3E2vrP",
  "key29": "5SdaC8BdRPjXLNpGSBxSG9QNxcFt8kPv3DmoG51Ypq4crcFTD61j7fhMfdt9evLT3sXzJPh4d2qKEYh1ZwExS3xa",
  "key30": "5KkZdzBdLo4uHWvFBZBX9bdTGquuyQDLGZ7Ue64moGQKdTtSR3Yog5wArgs4mzRurFi9ZBKiMGFrCVMEqmgLKAs8",
  "key31": "3y8Nyrc5qs7uDLuWubQgi2sTUNfqgHGieLFTVzbFhZAjSgyE2GjpdYk9TSzoot3sBLHxpvupum1Jr8wWiu1ZUmiq",
  "key32": "4e26udKMRxUvSZghmjnXxFzSrJq1kv8pXxdWe9CicoYiia765DzKhN3fatEwkNyoVX342yQ5EVRbZ9oVdznKM3AZ",
  "key33": "4EavfRUbKVSRiDZVkZueVyPSowjTN6dQvyKWQx5YSj7VNVwGS2oxA9ELdEiqxyPnNcar8TXtzP1yxTQrSHZu6JjL",
  "key34": "5hnu4QXUeZjGAs7rfsjifeBdSpsC2KnNeqpwxDdaUH5N6ewTKNRnQ1nwzBPNprHiEP39T694pMySYKk3zdrSEAoe",
  "key35": "hT3pWkFoWdLMffhUZnSFbJh7k3sJcLqDnWuv8dXZqm8mKGafqow1kPvgcAQFXpPpTC8QgKWqEqoqnmrTtyym9DL",
  "key36": "34VraWMZEjsn9GaPCAvLGYqqYyV55ZYXqCLgcFDm12drFsXRYWXz4paYhVWLxrqQNb3KCZ61SPzfRT9MNqNGafU",
  "key37": "2sYCnaJQbx8bs7bJ4N215hF2yFCcF86oFuy67ULf9YV4k5GqBLch3Vu6qWwpNqMP9aYXspAErcrRwUivKwzH8YtU",
  "key38": "3KbcLLwFJgJbXHrPcEmFCofHUJtfV9axoPtWxBe473LEeWneCyVJ3vEP8vedHAzpkpwVczYpFvsqebiboG3FF3Pb"
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
