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
    "42zw1jivGDRvMBqs1uwnJKZQzXLW3hBz2AjGdtX3MDFgmxM5YynaTuV81baoHKxTfiDNfMSYU69sxkzd2cKxamGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JquQdshcGbPzXRK4vHC39vuTQBuyBt1sNE2tpJ5kfKVz8jyW5yy8P2To8E4RjRFYw5XqrSdBM3mQzUWwyCzyPVR",
  "key1": "3oLuobBzNLLF8pz8VVSRiSXPJ573wXDJEGU4mfSngVZ7XAUF3bQAbDguBzuPGKucvCEYEjzxvhK8RHJRHuPGPsJa",
  "key2": "22B7TdMSSfjQJ6au7PXXodiuHXBWYXcHZQ7UqFwcSFViKu8LnwZfmG715xfXiyhWiMP2FWsB9LH3iVZ7HXUyvRKc",
  "key3": "Wf4oJ6onwLjLqHbgMXFerR5K6nHfkE8FcG7YqSWWjvFUCKs57hqWMiwaEuEfiCZtDNdevZHsWr7imoVj72R7ztA",
  "key4": "3cRhKbkpUGsF3MzfCar7X5p6RkQKe1V8NusYiGdSkW4vdxRjxNsLJSv4iJNDF3iggQZMH4ZLbBJo77PzRbCXqcwJ",
  "key5": "2kM8AxeUiJk2SdFGacVuhJpxQgsjg9RJbaSNEoizVLQPeWU8KjX3aV3nR2txGcXKj5nT7hqD7cEfvUBLXGzFaCeZ",
  "key6": "5K749vCFTnsWN3wL4WutN3xmTxpdLU6AtjQB2KFyLjpAhCRxiFPjZUQcoRvuRtPGtpz4Cbhyko4iaYPuVzH29EMF",
  "key7": "2g8xLj35WAvDCE9WRYnNppXBbwLVNSEmxLQhSkMHCxCFBw3kkjbtNSRNDMQMVQKisRd2yiUdz1Q7c8DpWXrqpHnB",
  "key8": "5SxX7qQk9ogRBf9oxYkHqMVjTSjovG2ZFHhdsBJGuYRzmUWkq6oQ4ELyccU4tgePRAjhutoFDNEEUdVqRmMttAyF",
  "key9": "4Ka1sJ29FnKuCgTyXsi31sf8XsPKucnxG3D1Fs7rE5qC8ofsukSbw8v9a84rAv3CqKG9SAS1NEoLcrkBcJEPYrPq",
  "key10": "2e1TcGTx9A1VJH7LDKNjeqh2DTqMfnYH7TWtZUaAqiTAkXnRTHozjt7CgKmmqk9igCmC86XP7ozTSAtourkuYd3R",
  "key11": "2UHmfxaaZQFUcFMEcjt14fWyutMnPz93Y7wQHu67XfMbL2Zecnx32fznMLQJ1r8jnM1rqfdU6V2xb8CUCQGMgw1P",
  "key12": "5E7cS8yuJfi534UvKcvufP3SBCfSUzCARJNatvkubNP3mCfxsERJLqKB9oXtAGFM25KMGmX3rtUYajdvvDgQJiWa",
  "key13": "utF3MfMwK5T1M8MF8j4f5pdFneWm3piAn8ZpzMSWyR7eGYrvLXNw2TaVvnCHTnYRebkMX81mezqAqfUSKmC2ELF",
  "key14": "3oxFrXMKinHj5r1k21M2XEyQyj7y2PyqXL1XkzB4yAzHPrg2J3oj6fQMRzUrYGJ4h5hRz5DGfSLKgUUqHJgZiGJG",
  "key15": "4XCjybjdNJ3zcyjLT1L5mNuYT23GVoiVmoMRRT9cZGxzPSmqkXcn8vHsUjRWYsxooaASZwiihQYejbeXopKJLdcg",
  "key16": "3PeYbuWr3aFYPrwuHag1uv3btfBpEmoRTVwDpGhf3hbdMavtTJgsy2CRECMwQ3MQ5iHzMdnW6DwQQs2z1cHLcZkj",
  "key17": "37npVuxZGaoNt9z54VXcAAvTXPkjdNynDhE5FC4CtPNWECUaVB88iFRuEtfi4U4SPtW3n39HvpcoxEkkK2KdFath",
  "key18": "2S6kZz4NhEGvbmDoZNwLU5qhn9hxrMmmPmLDB9juemMGr6gR8puyKCb6peiu2jinepBiPSYTwg7LE2kH4k8ggtRx",
  "key19": "2kess3shm97uwJ7wHubhUTTgWQS2akavuiBxXzM4Gj6sR8u7FwZQEMid7BGhzQVT2sVkiEKzvpQXmqFFdPbtHHbU",
  "key20": "4sT7DdgbfMekpFpVazCZWcm1Yqv3FVsX996u4SzJUF8Z61D8m4vkDrq4Cs67WBRb8Z5U4fuGZtcxidUAZt6MuUcL",
  "key21": "3Gb5pJvt8g2yg77C31fK7xXjSbtoDrH1pkaF2Xcta1U4ZwpuWVN37qPcW7ieAnQccTtBq7Z9wr8CgrYbPuLNitLj",
  "key22": "57uWwV49nH95HkHozQrzwyzMFUvn4Pm8rWfN5TcCWGTmFEHZEFbUqnZCrbQAsk38M6tTc47xovna52oxXVLQp9VU",
  "key23": "2osWEHbsngGwrw11wijDhG1XzQmgdukXQDy7Rhbka2EdsdUmQWTQivZ26adNLUWPSAnkcd63hPYyKzLLefo9MZQ2",
  "key24": "Fdc5BzqZJwymjWQviCWwwyhmazcuCrG1NDEoyfiaNxkW2LGqfP3mY2psG8Ldyb2yjQvWFP3JVzj7wcrZfK48L5v",
  "key25": "2rfsiYax4abBv2n8uneKWmrysrrDKtEA6efXRsR1KitqLtUoY6TyuBnYvA5CXviji4nLqeFnRb4ZNNTDauNb8RbF",
  "key26": "5Hn1BXruBDnNhMPwCY9GRpcx4GB6Ze5jva7aJGKxAPTZ4gQ4MqZuysVSsH9H22uRiaLkdTQ5gm9XMA9tk647cQui",
  "key27": "58VA2Re6GJghZ7ydQrU4x4gnTuMNXgcuKke4b2LNc14i6cynQ5J2oJzfsHR9hSHSsmHfzgEYBGKSgHbKwuXDsVdj",
  "key28": "4unA6QyuoZxM6iWcQ1VqwAaxDosJerzGr226fQ85LkZWA5V1S1xydah9jdNfrmfsnz17Z9taykwsdvaamNGziM6C",
  "key29": "2VdasH6dSCPsNsZCDipx6ozhpkf9TLep6txcV4Hfvaa4iCqcRbUSby1nF3cEPKvKGtyBAhTNAC9tN7ihS1hsMk7j",
  "key30": "4r8aJdLYg27fxdkXd1f3isGDiww63bmauTPbouDMH5mA8PNCXh7U7JiZQKWw36scenMeqbGnfwQu2dGzXifu11Wu",
  "key31": "vebGgYsVDQXN352P4cLfMSPZ5fxpFTD4nfX2uDRosPqbeZQNCsNKB1PZG7LcTKk2kXREPxVPKEVHZgnYu6jKMn6",
  "key32": "87DXQnWZsnMBKBjm1tz9qzto2oKPZcCsBGfXdKUpPS12U2Xrc6cRUx9TwCBsurDKR7n71eJMjY4WRdteAR8xNPP",
  "key33": "5Uq4yVQMK2RF9TCEuPX2JLvL6LTfGzFeTBW7ks1Q3N4CeKkuAQ9smos8fkFx1f8tMRE8PYSDJak3bfbpKfJiYPf8",
  "key34": "4D1PvXcYdv1DNDLBSF1wzMs6v4kPmjyCH29z7P57T9mUDh9tfgcELz7Cr2dtszHKm2kZtGyvmen8at5GPc1ebJt3",
  "key35": "64xrbk1ggen1ED8dnNg3XMeSaLdSerCC144s72LDwQyVbF2xZhwYWJ5QtUwc8JSmwbid9Jd2AVt6se6an1GirEu7",
  "key36": "4Pyq8RxxNSVNRE8MtsK5LC4B6tTrVGyqK9sKnQUZc7g4tatB4wMhrQZ3CwdUwVT8GazUdMi9WLK6fa5exp6Qr6rn",
  "key37": "bHLAMfVe7HiPNCUC2vw6pBTuPw3UjpWfG7jJLsUEnoPo6tBkU6JMuZB72wR3UkHRdZj6eCzeHcREDw7oRGuWy7N",
  "key38": "3LyRuz6PidDQ9JUZ4xWSiLCJ1wQwp6mdVxpXe1rLytYwysjyt76VWt2YVeqpLSH4hkZyyrbJ4u8gTmhyxwQD4a4g",
  "key39": "1FfLpWqu4vU3Km6zYWYu6cnEeSY9wNc6gvp4FKXMbdPdq3VfDw2Vyrv9cPcEePe6TtaeuSWSqV5VKUVg6dnvMdR",
  "key40": "5WbQFUsEGzrawb72sCqDVoig7bEAYsuyZ5UudAVbgcxaE8yigpKg1oT2bUgGb8FSVdsdpXoZicGdnRdXkrg47zBE"
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
