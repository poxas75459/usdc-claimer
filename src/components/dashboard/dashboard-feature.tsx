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
    "4Dj9YrSMNQCZwXvicnRyyJugB6FBgcQULZdzLinMwC9qkUrD4DX7PtQU6QR8Q6aeK2RdvD2cjCmnPdgyvFU6c1RH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CcfrbwwwUo1bmAndw5Wcx5iuN5L7E2DXQLB39m4NNm6DsLGYLGa9xKrhfuPPLcKQPacoLah1sSzgAAbXEuFQ6Fu",
  "key1": "cwVpkJEn3MvhmwjP6a4VuW7qhoTNxxBrLRTrT6Y9fydMny3Jiu2jp58UQJaH67YXMkozWjmHEPWi1igWz3aNVzD",
  "key2": "2NELNECLBthJoXaw1mrVNSHagtpqnqWaEqKa7k7Ses9KUuM9qLskZYLynLGwtGcgQKZPNiCqpFxfyvhJjVRgsag3",
  "key3": "56gxkxqmaGmnpBUpCs89uaLzkhjeLf5sNakLNcohxa642hc55JkYxyER6iXKuXQnFUaaKcZHV4kWwWmyRtWZVrSa",
  "key4": "3g31td25DE9GzHEMQbhjAMyMVH3VZtcPZedAuz2vGacmuTRZnA5Q6vUTKXXBDau89RgKh8bshvYZoQCSmCRQBUMb",
  "key5": "2NdNeyfMG74uXv8WnfEUSpjwHoNLXSk84tFkyEZTkvzFPNRvfvQ639A31MDRfCpioDCN4WzbUiUAMzUz5tyJpigu",
  "key6": "4wMd3iNnuc49mrCNAfUWwjUULgvYC5tAPqwX3zCkq1Fu52BgCqZY1jrk5P6KHERP5XrsSyy6fvEUT1vdGJZdWRWW",
  "key7": "2uhSGiTvxUu7LiBjTGsQqyDUq5ASa1jBSoRkWTGkPRYrXpQPqrPbzEqzwjcv52vBU8n7tkVWeZRfdqpyRHXimhUE",
  "key8": "4BXkq2YQXb5c9cFh6tHStyYkgwR5srxXVnV12ThM4ZdjtdbgHbksgFSNHhXjddXXsxBRFn6gNefFvGWvSdHqujy2",
  "key9": "5NmAfq96FJuJCQuN2jm2vrshepFfFNPKBtXMsL7XaE4Q7nAfco6UUUoAr6hvLFqzkaY3pehjMqvXDru1LqPu5Hte",
  "key10": "2nwMNPLcrNWHf1VWzBhBurTDP24iDsnszmSC6tBTuAnk73Ttp4nZBzDGJv4zuy5UNz7Kj7y2tQgW61MdsHcAKBTB",
  "key11": "614GcM18v2BSbQ2V1CckogUddej7DsewooGPnjfkY5ViHeYT349JXgWRibRZ3j3iQUPkbv7srdaEZj1X3S6tEENA",
  "key12": "61axqRqBpq2j5GN6SfaPXFxAdnEionREHpcHgkicNpmF5yXdaWKHoy2HPbxPFDabXhwowLLrvzJM93DUMnFWTEPP",
  "key13": "RECrn6wvK6CfA6CJ6XCNi7LMoEM7HpNCbgasT1gF8JkYAPY3pKRwfN1LAVDWiX1Dg79upeX2wzdM5W7wutRhyj2",
  "key14": "4VYmGfwtBGSKFYT11dCgY2bsNg3r21sszmudEfejNqJ1zmSqmCSAMTmY8yaiAxK2FJozZd99hYVeyZZfBDSuaAyx",
  "key15": "2DzEM3MbuVWHk21gQWaH2Cvyzkre6F3bco5ouqTGVTKTMfMJcUrNkh4Sq4MxGvxt8XDFeCdWCtM4qjQaJjKiEfhf",
  "key16": "4wRmRPGKEe1CUai4dhkK3ru9Ph9yzuMktcr29zeqcV6aSVSvFhAjSakkDm8q56cVd4niwLtnsj3vN4kgFa5bGDJs",
  "key17": "3c6tvKdpam9oQAZUi5PqjcqJQsP8UnHf2HSssCGHf3QHwMofQgUChjshFExaAb79JN7mt4goN7gaZVCC4ndDCiLQ",
  "key18": "3LN3tjkBs9Y14B8EtTpDc7bTM4uNJkWD2VhMmQtjo9sDaRVnPFGm7Sg6J5qZHwj2oqwNrLfZHJQrPp4a6bgMrwNr",
  "key19": "3WbtFLjbw5LwPf34FsmFrma2LKXDh3hnys5y2td7Vmnym6bCwdECcpAxvRvL6DjMHAvDBFdpxthHPydTLdEZ1ba2",
  "key20": "4rXA6UbqGEFB4TXGRzyeGD1BCGaUMf5nhuAM71LHJJxWgYUZyjpVfbbGH2Pjs3Cwf6DX2YPjBTB23ry9Dv13aXxi",
  "key21": "4TbB6EsigxaDRWgC5mNrCLuu26U7RYkdnPMbxp6e5CneJpTmFbJ7mdf35cyeCMrUoEdCsg4DwhMEZ7eCcK8ycUtY",
  "key22": "35geh7Ve5EYxue7RqaH1x2yoAbKt4v93jjFUjJ6ncswxJsKmh5sNn2swgk6SMw4LCYcwnCwyk9U4p1dNpgAvH71M",
  "key23": "GXaacpVqjXo9tm6ebhe9wV1SFKvnGrD9sFvKPSkA7f35hFVi857QS7r6Z8ZaXnUJt1ceLsJH7Ey915u1qQH4u7w",
  "key24": "3s7rLfQvKRm56u1e8U9LnGbjaRBtU9ZbLaeiupahTWYrYoJmRVPafyecDBhz1BbBpHfVMYaYqWzYaRzQWYoeW8Wm",
  "key25": "5aLm2ZL9DqXvBum6TDxKmkbrNTM5h9YzJDvUgZnHXAjpqEEhkG2WTVD7HHdA2tMS8SdUkfshKXAWBZP4dmmxAnpN",
  "key26": "5jqEcS46xGytbqbsmSndEw7E9yAzgZcQtjbLoPx6Ap1Z6n9coeczqzogJSyQ8VWKnr5pRrnit74SXys9D6ThVRQ5",
  "key27": "32NFjLQoW9VaKCTZrgt8h2Civ5ZZZDgwtbyv4XgKTdN8FLfYta92qtRdPZF2rKtej9R33r3pn3s2gwwKaE9XA7qW",
  "key28": "2pfh7UtWHUK8Ng44d5sGAL1TRoQwqimY91MeTjQVNU8YDHLJjREdG1DcGLDikbEW7qcKGtHY2NgRFk6hwgw1gBHr",
  "key29": "4tfLYM4TgPmjUD7B8pCCfjUSMKunqh9wmW3zZLTGuqCva2iAed6qvvw2c5s9qgMkDE53UoZwHEFWtGwLBqFi9KqH",
  "key30": "5JWNsitqVDQDFu6DUwrNnnssfVoGdTPBg5BPsoLx1uwLdARmSvZxQmg6o2QYo5ugxk2EWekP1W4BgGjrutYrd4g6",
  "key31": "5xVUYivnCSzajAbav9JFKWpQYF9Qcsmm2X39pXzb5ZVJxGJzabE5fXUaCeZw7bnsKaAYfK2aYvRPAvLu1mS9bc64",
  "key32": "5DtnAkUeJY76gARZQXmNA4CzAc1CRqBKYSGpsdzCTRtYpo4aV8Q6cXSZUd1BxroiRs7AC2UXQQaBXrGueZ9Vwo5Z",
  "key33": "3Yxzcg5Hwz2dXxiFF3Te1w74PjDBAg4ewTrHPcU9JG7cdTBJzt98uT3uAwKWmnbZ5MvdhQQQQsocy7a7KiyK3y2w",
  "key34": "4A1XHFb9ptJMfzcNcmbGf21CNdQDrivxSGTYBbxoGxgv9bbHEcCKfm3U5Y8mVNSbHHx2N5iGQGGJHQMTDayitGUP",
  "key35": "33ZzYTYw4Yjtk5wdZnevM21B39jGTcViVKSyK5FUtgVFiuyQMP3k3NrB5tGhmBmi4GG71XUqK6mT2234DVDH4iAL",
  "key36": "3GMNhe1EXXmD2rXMizsd9H3QqcMEL23TfERTNB76e34aVppPq5tQNkhV21n5GCyWByZUoQiW78LPAXbhccWPBtTJ",
  "key37": "ssCvbuSaLoiT4US3csj43tTjA3g7t8NBHrnK6ivMen5cR2Yj3y7xrqtKqzHhLimHxAj49s5dJmHsYWj5RuJZKkt",
  "key38": "3moBpLynMEuz5FekL82YApaVtDwAhMhkc8GS4k6ZVdkddiLJpuZkE6oNFVzM1mGurEXNy3ZDvWzNMhkmYh2Q7z6G",
  "key39": "4yfCaTJVinZX79dYvH8ErBmnuF8BiovPFYaD3viMkp9NctxWWckb3ewBeNbmzxhWrGynJWAhypFAA6zzKkHLgKug",
  "key40": "4mDuPbGHCBytrcGzCDd9ToaZFjKfk7BmuVHnG7t82eoN7FqtmfsBJtGdCHqA493XxXyXgLyJGKZb9C1ZwqDLXtCy",
  "key41": "2xvvxYcdGagFYaX2F12oDQctojkLyPjZiB34Qh9gMdtQNersND3DS3E96ZcmEvJPD3SQtjwAgwzJTWTyEQTac6td",
  "key42": "5WjMLdnEGwnoNH7Vws81rZnyrCM1HWPpmhupYaydw6VqS3N9mxUpaEgqeRWimhpjXpVzjj5GsX1SJhtKBAPrH9Wn",
  "key43": "MkcrQDKydCZnCCVXL2HDUsme3dW4pGUatf85p8i29suWjY4xzyDhCCp5XnfBPFmkkUpn2cGSKnULDB4mpFDcunP",
  "key44": "3rxNH17BWwvvbP4P1LtyEV5Amgeq1cYksTRRVSsY8q7AQFgLPaUuhM3iK5gfdSuXeHKdRMWXvoVebhn6RMTVRPHS",
  "key45": "3fDsRJRMDp6jr8AamY7VUVkCf2T91zgiJoxGTcNsFrovvfDe9KFSoCvkvWS8Aurd4Q7T1YpsRQS3NHwTQMUuRoFy",
  "key46": "5VLG3MWviQfTq5HiRnVZyTC73FQp6Wgwjsm2AChWuFPiFZG3FHZyczUaBeeNeLaTiUWeWRwK4C4MCsPd3JNikB9N",
  "key47": "gb5g9EawwtAXXaC4zAzdAQePozQu6TwBijVvWgd86wBusDJtbsMvWK4PzbZZ4KjGc24QM6mpUMcJUVLha6Px5RC",
  "key48": "2y5gcNeVuqx6DF5BntNGHNfpCeVRBr2pohPSG5VEfr8yZgL1bySmuHskyDciPavWpnK6xV6hyvwEz9fQt27NsPZX",
  "key49": "5KACKSpZRP2SQq62aUxgdQz62ZBVYfuCJkeKmYye4i7cjuCKaXbHGcR6iovokxCPAcLBzgbebLar7eSVaT9MtDnv"
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
