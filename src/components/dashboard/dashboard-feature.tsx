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
    "5jft4jPEcN6LGeDwr2rfrzcA9G4CrAZZ4qviAQGXrWXhoMorHK6LXkJf15kJFaj5JyHXeCTuwQciqHKGbroGZJF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sRYGNd2UybRQHpjbNFsToCTtaV7oq1VS4ACuxjuoQZyx7EwMJWHDs1sW4X7v73tqBJtvUneqEuy2db1cVevtJeU",
  "key1": "5E8vLKKqnEHrM9QfS1BQFePoj6DHs3uePbLW881VCUtd9EfwPUQ7i3STh39nJ5uiXLmqU7oV8E2NV2PbGvW5y4aE",
  "key2": "3NtrVPYQD7Cc4G5RNedVfPqwckLrAw3FBCEs4PVJUqB4a9qkHLWcjt6gF6X3E5KnK67oEnVuzQyZeMuMwB618E9p",
  "key3": "276zRTzB6mAU7pG3AanPSgx1dM6tTHh7NfS3uLeyu4nwabt97vhqL395BGmGfXg1woKowoXvRteTBRHn2jjpvJaF",
  "key4": "5C5okEA8bvobEFqzzVHe9ZuMifmQCi4UNdq5DxEy5HoKjTzZZg5KUxoDCdKqaV2VV15r2DzvJiEiKPA4FMTuddNh",
  "key5": "5ygf5ss8fu3rG22swHSjWnSjKnNhT9iZ2xH7kiHrJgji4F11CtwwbgdATZkm6RZXfxuBQX55v7YvNczdWd8sAjTw",
  "key6": "TB3kLNTamrdcAoT58Gy6icRpHJLbZvkEDcGRXn76MsarjYT83mvjDVayeQZkpYDh1MobYEZ85EstoDZviyYNKVu",
  "key7": "5RKBCL7vC27QXmyRjxHAyjBDHsqbQTmiraehFrbuBgExi8JhUR53nNxVpLBPzX7fdLYvt8s2qvZkdSkAL6RjxyxS",
  "key8": "42DtVKMbKGdEJacvSkfPiBHGWjkgEKKj5pHioQLKHdLjRzEDF5AxRw2wguPEAGs6A8AW3wAGz9JDewYBtmoid3Jv",
  "key9": "28Vs2ZzcMFH5FYaKSabswzZohBnG39jkKChCmKrPKgPPZK2FiyzRDMgnGqoN2aKzKadqD7vUWzPx3rFpPrbhZ3tA",
  "key10": "2Kf9cVi6FhvZmoFqAh8SHp3Bgvsto8z3AcP27AHDacxnnZMeHEmfUDV7M3xmXAzsVQcehvW3ViN8virLJiB3H1pY",
  "key11": "2RuyaEMheyrN1pNV3E78Fs6PsnBeScNk2EALw9qaCrzAUVFFPa8wj4RyCkCWRBxHjawCTqtgqQLwC217PwZuB6sV",
  "key12": "4d3zdhedfsCxx5uT9n5tKRGpMx3CDSdBFuCSZmnPR6Ae1gUsUfbSjVwztiyoGEZZNL7sbj7xonxyeehPiqYBRkRN",
  "key13": "2MDbzQAJQw2jmmN7EZ7LC3nwaquRJ4rAg9arxiFeyhcsqEgjachMYuRx3N1bmznZZ3KARkJAHPswWTn37RHVQDvJ",
  "key14": "2buzCgrQJtQeEpgMFzoAmLtNWN8Cjq49S3699qmcYccZLEt7StYXpVCXgkvazzGJU1gxQeMqtRmqxTdmJxUeug7z",
  "key15": "3VzQTX73dVsCummcEj6Gd55CHsbeEryTRBT6saiP886PTRBvwbURn84u9bGW7xLgjHKbpZiQY3EcAmETBCcSE4zq",
  "key16": "RuZnQTkZAtWRbYpV8L7QVLmYrp3A99cZ5q6NX7UdKFnq4vWeE7pLvf6giTCq7crFSCjbeeqLDqtHP3AhSgSypUc",
  "key17": "2pEzqw27DAfLDbb6L53SyFVKwxU8Lc9kyAZbVcTnfmGVrwRZUMNtWTQoZyqKBrCanRdTNacZeanAHv5vdudy293w",
  "key18": "2LkQQ2q25HP6mNDq9H8LfwKairsohfHrYQoETPYLLrNgPfHJYhpZhMBhv5f4jjjSQVzxUFKAddkuRRwkRDAjDyN4",
  "key19": "1st4AWsehobrvF8UJvFw3ELbzyugXQz58dqKLcvjm5LtRdJCMLexvjhbw2berkz9wwnWe4qjQn2faYpHsLuL4Q5",
  "key20": "4hdQjfTEgRGVy3kpkYPCbBPzP1hB41jJeQT1Mpkscjttvr3ZV8jUPBuUmjdnJ1ucJP2vea6YMnVAQCz87RY6P6tv",
  "key21": "2Bk4whHGq72PxLe1ef76k2tQNCnh8CtqfiwivbMDU28jtFYiTgMVve6Njth16fuXasDejGX6yPyJqSQ4Jio65CdR",
  "key22": "4go8mAG4BhiUDyQBdzCWsQL1WfpWAoqCPpfgB6aDKzKvbgpYCcJbzSpcuJPP7eyPpz7jsr1qErZFFeSUUwfATBDU",
  "key23": "rHsgdyPXV5nQp2sHxHCYDzAHwpv7srbJndu82gE1FKmiSCoyTtFgerg9a9Sg5F3Bc8bwQoeeAzQxmRKMubQ5dAy",
  "key24": "61XfbJVsf2gnsJ7QmDxd1z2gDtMq4QbR3wMdHWzyYFiBDaMjTywvS6p8YEcQpaTfhhqkxCvM6YjKT5vm2tJZ6scs",
  "key25": "5phTUGVsZr3iMk9RmVB5vqUU234pvrSKk42iMsNn2ExAuG8NVNRDhsgH6yyn1ziJpysRU6QCUEanmEH6892T9y3E",
  "key26": "63V25oDxQQuyHYnKcEfZyHfF6JRdre3LchwB8mtBTAubGnu8HbETfmqsm1hRjtbmwDz38bKRiTVE1MVEGbvpua42",
  "key27": "TUPhukfPghzGyUoSfWb2Xxm3G55ZWv7ewsHNV6trnrCbt4xJjK7e29uc3hXoBwL8mr7WS5kVPTeSQUiXMhrVWZm",
  "key28": "3m3qNTGS9689cvZvT7XCM2MXnhuNjD1s1ryvRiaq2aZ44vUUh8dn91CNj9Z1uXT65iQs7nJVTit7yxw3b9jRu2gK",
  "key29": "5VWed1YMY3uFnF9gVaiCtc2zXLXKfLmVbrjFknic2e7B3kQXnEatE1wSrAMtqoTwBPkgCg9kyzoMR3MCj9F61Pyo",
  "key30": "3N9c122VvpbUwDxui9mKDJd2h3DQPfCWPenaxCxabV4SAA2GdY58NwXiSLXJ9AwuxDHxaRxtKRmtX78ZA9HaevaA",
  "key31": "StApE5GeN8Mecc7117n5LVnwMX7DX15YtMiWbsUYYLYhySSpktKZFPtax14oXa7mcfFR8Z993REBzcCfLxCRaFk",
  "key32": "qJhUYuCKsEwBhaTZuy5cbkx3cf9f95kQrfDd5Hi2MVstpw9Hdy8ttByNn6vr3GQKX4X4X8BCTdvhVGTudE7Xgv2",
  "key33": "2jU9xtF5BSkQyDNQRQXTdVEhBgaXJAkv6dNrPpHNnu1yEEa34BJbkqbR6g1NZ8V1Y8VrQkWRFApxyRqEbjM1EMg",
  "key34": "4FLstzjEQMtN94TRKfxeqJRZakqU3tJSNgFdiZeFfc3kokeeZ2rpby9rzkkHnNCd4jvRNuE7t1z4z88Yy7DqTH1v",
  "key35": "6mGsVeSb3NrQfTvZvjzhBHPqhTHYzTTFGSfmahcEdaWFPrf37aiKUcTL9HMnmWBz77m24mfC37hiz2HJ7iojrny",
  "key36": "oGtNVVgWZnD2mc1aFt9iA1QapbTZbV7SWUSbykGYYNZR2K4qv2SzAaRPtVWqBGJrfkmcnQCLqf5HXaTe1GT8oPf",
  "key37": "2ZcPNNuYLPy6nMuyWMEUQKAAjM24YWy4gGou9PXDMWbRTPoRiaFP8QcfEScZ3yTcBmyWb7K3sjt66TudLxE4vBef",
  "key38": "2HbH3FhUwmxCdp4MMHGAZzuYQr3bY3L5sbwCiFKeqLhXsRQYcQ6qJaF7FDMHuKoTMz9L8mjBoqKJoL8npLxTzW7L",
  "key39": "2ginjfMmbK6Mhj3ENeoZzvghXshhqJUuog9DgQRzmqo8jAY9r3Q8fKyRvfJG8QR4VyzQJY7wiNH16XHUAgvEMaK7",
  "key40": "5mfCw6mj9TfbGCvpZ11WTbJ6dj4sdLS2mj6PhpqrXvhe1Zo6ddoK5aPJAf7JS5QukJeYvCKvH16BmaL28TK64E2B",
  "key41": "4PPyVgitTMWEv4xMQo2JUBQ1Ky1F77CLJeAviJRVSm27MzcHxwSr1afoXTgzEW9N1LhZmTk21RiiTfDcUduTF42n"
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
