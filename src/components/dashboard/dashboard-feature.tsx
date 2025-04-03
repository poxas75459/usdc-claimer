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
    "iAMCcDA53DzLNXbVpBkVs2gNVgCpwQgRaowkAjxPSxtLDspz6zF4FjwCV3s2BjNf2uYpQALgwt2Zfmxw1zsv9jR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i2k8QgNESvwdvRbpLoN8d5TQTRPoNTpQMvuZHnJCUQNXnBspJE62bSga2hc3FC8AEr2DFp2x4oXQqJUbG9yfrGA",
  "key1": "49juRNntBYKfEnPyM2SzV6Z8NCh8eWJ8eVYf374HpKAL5NcedHpcwLQfLVA9Q3hqJ3tecskyLu4WJ5Xn62JV1w45",
  "key2": "hnf8TAqNRQp9fJxDwbazbWf8TvRZucbLdc43VpQkR5qvnTq7RhNTv4xXaSvUeSeNgvMCeiauAWFQTbiS7khLAgB",
  "key3": "mwoeurgXfFGGgNeuJmWWxhkdx8jGv75p5SVZWRSXibd4WWjPFUj3fNMJbXQ9Qi4rod3rsbXYWZhEByKJXj3Mkow",
  "key4": "527M1DMwv3Z5rpCazbFdFYqeLnoojUqSAPNufWfMnEEYBJGLcDBG642dBtodV8U79ZzhxtimAYnYAVhHPubSdR5B",
  "key5": "2hyL7quVKRwJ3wfAZgnTdTz9uDpS9mvtM3BnqdtLodfUerx8pKJzKaL6yjjCpt3Lb5yHYer2qaenwgDoYdhqFYW2",
  "key6": "3F84rYwAF3AoB7fxaEESqQmbUXTqfZtFDbMPT7ZcDp3uZav3xthJgrVBmaZgmwxKzTdjd8s5WW5vAJy9oVAswy13",
  "key7": "sdmgghPMPLS6zL4rGeoS59MYV6fYD9xSUV3Gw3vgWgAoNfpCmGJWbs6dLSHCKbLpwPRsZpE3FQ2hcFxvLeJVhci",
  "key8": "5KMNYcTYoBVwPmpuVHX6FfDKh124Qj3dVycmVyCJYtUXk2sgu6djTuWAGE4pG74uGcqo6WbPc82cK9mwaGE8jZNN",
  "key9": "4KmJCcrqz5xrocUHGiBvDPHUDtFfkr76neJNY31GS3TASRWrdNx7gci5C17GunBwqiuJ77mRb8MkRoKCLTRraS8F",
  "key10": "2jV3AyDj2YtbAoqRXD6uqSanVyARffqae61qpHo9j4tA2cC3AL7uo3hiU62FKzAeUXwQapXSjbWpKFR8jVTSqRSP",
  "key11": "462goSRdj3AdJouPTeEYfJq2n9qRZYkUbhzsZZRdUGrLJeKN32seT9nVDmrXtrRMP9CDok5VHBrvNyfiMKTqZmGd",
  "key12": "5RifV2zkLUbBLqVsDrojjJseqEkmj6G6F2mtEzgBuCqDnCD6pAWwL8jymuDauFzT9sWqGjCAtARzti2bcBAQjjWm",
  "key13": "3AsM5CUWj16ACtan8eUpA4DeoEVEYp4qPSxsbs63NiWxYMy2c4A8btu928vH7knMrb9gjVVoaz2cvDpgLG1PeoWM",
  "key14": "4cJUgNfk5f3q6zSF49PVJyFL6EVRLCBzgi28VXc1SxXFqBXFCjTbSzmVty22maH1xRQ73FCKfuP6xaqVhxz3t8bG",
  "key15": "2z8zcjiVWAZQ8RNsPfi6NpK2JgCvEiVBgTs18ksTCxH4HoerZMFvpmGnAPL8HikkmJtzFncR5iFDPMiaVF2fC88m",
  "key16": "2x2WrG3S3UKMZUdZhKiA3P3VQsDMUAwNNgF4uLGyok1GeKTMnDaDQyBJHB6MtkqCnXDw3273MUsrSjzgsrmtxAnh",
  "key17": "4zAvinAj5Q3VvJr9uWq5xjMrxV8AfAtpLDAgn4FexBx65X15mn2CDzJGFiKaoStsoe9AhBG1wBkYLBDbXvh5nysF",
  "key18": "3i2C6Q6jWfpNuc5HbZVn3DkncPSQeov62FgK2eyEt6cW8Mo6Pux9HfYkKSpigyW6nEecVmULqNYRCBVnSaxUBbJw",
  "key19": "4tzwKN1a1acCds2fHKdwi5hh9AifTmKkZMzHatX5Mk3Lid6s2kbPKPmPFG25APYLVrkyxswszFBpidM1eHJeY49R",
  "key20": "H98nMVnuBhk1aAQh31xv6WMBcWtV2yzHnm9UepmNmYbNhB5cDo1CHYV9GPDhwtz77UnhBbixv5kmsaghJ8tXMSz",
  "key21": "2ox7GhxTwt8kJr7HsKtKkEJKDCSkjMtHD6d6ve25F5T4FmfcuCQsmiU16f8KqEirQv8uowPSgm8v1wABeBTHccXA",
  "key22": "4ity6yTcBYc327N1riYG2uwUQeFWsXYFPkZ9iu8Yx4ZzfmLMAHU5vctxDXcJgu16q6ftTk7SiMs6QFTCLdDvqN5g",
  "key23": "4nrcVXhVzVTSx6ScvvtFQHofj7AeNv1zbR2FKWWJrmaz5exGPQJvmLqkrh7uh8WLmDeHoo1CuHtR34ETE4PRU3HY",
  "key24": "5QZXYeR8Wc6AqeeNtQ6ySNYK3jx1ZZFZp9MhnDrwYjfF5idtbBWkhNy7a4Ye3ZS3ae6F9tUjAxustTegi3b9bR3V",
  "key25": "33VNAYpCKJBU1oVMnvK19UQ3nU1N71DoCP15c1oaoAE17PcGe1k2w6N9P3neK7g2GKBS9swfsGiSE3K7emgm9521",
  "key26": "3mJ2rAZhUBw7JcUpjJiBiYqekC34ARfqq5vCJLTEXFSnhicxsviWvGFJ4f9CKXMkSBzNau98nqy49DsnBajpEEEj",
  "key27": "5WgeBGmBaLjKWpDBszLkpV1aaRNArdE9VmWgz7dJzz5FHTsZN6xwF1AunZUXSX8EKiVeLh6EuA8phrPi8n6ehhMJ",
  "key28": "5oBzMwUe7WrWcf9PV1XmFrNwQhk24WcgeJ5hhEncrTzYcF2RuNq34AeE1vQpjWWhmDBHygLy3arwaaeFeRiukqMB",
  "key29": "2qSMnzRdkeLCqdNRWvr6NfHK4589jhr1c1BhHkTcmpVfcm7XTGzFQKWiGTQCeno9bND7Jak2TFL1j6WQHHWSEJfQ",
  "key30": "4pzjVBg4C5ZwjJvdb2dUvAn5sdu5jstiaRcKon7MCiAfhCPc2kZpwSJAogxHxwQQEkDv5gUhp3msLVUyQikUrAka",
  "key31": "3Ugk7Cj9QNfykLLKyw8s6f5orSmqvqzHwyEUPfU9koWWye55VAgjAks7h2cuFTDsokUgYzMLp2DrBavr4VLaQhq2",
  "key32": "29dc5zWz3YTTVxVn2DQ9Zs6DspKaQN8Us73ojP5Z9rwfdPmBH2DHF9Au1gi6qtiXXjvJ7ZhAFWSnD7HkjJb9eY72",
  "key33": "2avA1Nq4JWqcZ7EcaDbN3RUsDXHvoRsbbUvrygBZmpr1Cvv1QybqpiEQgQSP4vcT9nNvny6JM76JaBzfpMyzM7k7",
  "key34": "3Vt8Ywk67u6PpucLhESXjcuHAZYvAgjCGsGLCFytUKANu375G6tmjzsGLqsZRtYqeNJy71RUcrriSypuUPgzfsLG",
  "key35": "5y7QTMo82XZP1nZBEHd9N59sTvnD38jaoVtNEz9LK2dFwt63ZDqXRkzK7G46ByGboMPnJ76z4zDikuFepoCw1n4e",
  "key36": "22aNNb9em1Tu2zrjcTyc1HZAAapnbfFpr4W8PUw76i5r5yLNzNhcWU28LyXzaVDKBDnHPAauFzyMF2Qvyz35HbPk",
  "key37": "te4xsbwaVr4UUEduqmTzFRnUFVc6TyyK8WDpe1j9gDtAWKNDCMEpQMUFRrKXao1hz4cgkzYq6fSiu96CAdtHGhf",
  "key38": "2a2qyv8qbwDvDarbph5dzLgaUwzSUWZq6RwX1h72HPPpSfjAjTfCJABY844bMbDF8614VTHUz8vqVoMefAWzcaWi",
  "key39": "G3kupND1tCL4NTHKbARsAtwTjjZeE9viTwz24EQ133ipDPMwxkKZJyPk1F457uvjJBqHPcUttN5xpH6rSvrJhjP",
  "key40": "51AQ9qQnsxrCsQ8QBv7M2aorK3wyZUqeuwXbmbeWDjKV5mz3sTDciv4LpBpUF7gcvaiqmW2y1or5MwzDSmw87mCa",
  "key41": "5S6araQNKp2qNjsBFTNM1dQb3JjhcS6Ta1LmzvwJDNDtDEpDEda72orpmozFHTEgnNaSBbLkTEXA2gc8v9QrkohW",
  "key42": "2fMxVFvRj3ZRc4d4f8nbjgUXNGBFgTGGkkyxUYB1wmP8Y5i8x8wjtgaBbvCV6XRtcuEej9s6XmWNH2QLxA1Dy8R9"
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
