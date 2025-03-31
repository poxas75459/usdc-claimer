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
    "5N3ybBEL6Cn2tzj3TRuevn5Sej7byxoSkD1kEjrqu9Z8UHd4EBJJcP4DZknSxw2gaNBTLCcXTMWmHv75wAkDr4aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ogSSXhhtLY824rGjivSCdw1J5mjf6517jQnY7Bpraib1py8uouQ9zBQpZMUx16XTmNk7iwdnwASsPV9aXQYcMJ",
  "key1": "2DpGo2NzwEhfTADh9YqhdPgje3vMoqXYpTL64MLW2GoaWhS6EmCzViB3vZAqhaeAmvY3ZByTLsrQC8x14ixkZR32",
  "key2": "5F2DdqJzfoKvQiYEPoGttxX8kacTzCzuh5wzgE4he74iPtxTgjrtKyMEGXpmFsCy5hepGjw5TLxUceU9SBpQC2KW",
  "key3": "vKKdJsBMXidyCY2XbpMiax4VEuAxfEhD5rgbBdkpy66Twth8kuXfLpVDWjjZ5s6NX7tfufhZxpX1c1oD2Pho7k1",
  "key4": "A1H4eZtsduuzWnPhZttRm7azBbbPtGqQrbNUmkdo2JhRGKsemmUPkSJwV1uFDQzrWNkVHzHQ5bYckzuyQbBbxAQ",
  "key5": "3wwwyFphetqfQkiyjFqGVzd4uNUqJgeGgMCyeYVRvVmMgZ4awFqpn5Uie9wDa2jaG1QzDKQgNBM3rxyaD3eZGGTr",
  "key6": "5bZKgFGYuD7axnZeEmzDRt7WvPcHYcWhyjt36Ps2NHuNB7Rc47TAwbX2C8euxsowPQwPFsnNQbxTRUNobJ63wvDE",
  "key7": "591pEvuv3WQdfL5z7wzg2siq96mQ8BY6UfbgU2g2TpkqmywYuHq1bKw3DZpq8jEA2RegRAZLuBcA9DHbxygncoZn",
  "key8": "4XNikbU2PyXtc5iKjaKycRUGU1vam2UpStQiNvd3dpLA7tz8suyvTBV5AFF2PHw776zW1qcw8AKLAzPrLxQDyUm2",
  "key9": "3RLPBpQz6n3JX7GhGSjKxMBjDrwqYUx9a9JHmHXjAjEPwBvxJedUT4kLXvCE9aogr9fLFDN52eLiGz4KhDZSFhF5",
  "key10": "5Rhub3LZ92CoNvFbzV7iChxb2XneX5bWbckKXde5ismh2DrTrkvCic6bzCb75Qipk9uzp4a477Ke86SXmGcR4zAU",
  "key11": "32wjFL8nYXeiM1jxPNmTcipu6Vsex1soF8LL8Pd7coWtbdDiqcDa95f3mPJF8d9b8ueVoSeLZYSGK9ksk7USz5WQ",
  "key12": "3jrbi9PTvtauKxRVhB1utPs2F6GbuUjMVPRGdwKdnqKvRVvZsWGmvUgDoekLCVd1WrJfPkuPNfpvLPtgJY9o3RkY",
  "key13": "4djfSmtv1jYvkXUTw8pzoW4uWM12p1a4fDJC1ticGGenTjCDt3rjBxbW72QZVkTyTSn3R3YzKADz77yeqPNiyRcF",
  "key14": "JWP3RvtQVsr7CdQrtjudtcLSQjJyAcBGVNdw1N15AyX4y6H8kVRg1ArxqeHffBVzDBTaPpPrVRqM4YvY1YJCn13",
  "key15": "QKJgYKZ4Ffk3ng1qEa6oPqCCAey9Y6HxCEceKdPAFDh2CzfxrE7i83Xz1ttdS5b9ygphHPbVZyvZtgxt5aTMfsM",
  "key16": "67riVR1qKU5FYQfawk7J8FN32iXWNRRM2YuLj8g54c7N7e7ko5UfZhcJ1YpBnPSAeYToEug2y8LzMn8Wp6mjSDK1",
  "key17": "5HmoG9WGFWDhkYPi3gmUQEHoLXQiJut19FUAPnWSFQB485icQt8aPDL4fYvQrAmfNZwzmKHcncXoQHdgjPwrzoEy",
  "key18": "toJrKV8U7wZCXJ7J2yVThdC1aZ67dSHMjX8qs1pCwGDP89utY1Kg4cWJZejDDHJdifodkwQsXNQ3WkrCTkNaSF3",
  "key19": "2zwkSBuWrfMUVygvo2PFSqtLsif7P6wnQeuoestKyHukh9tRCdjr6YKdFUYM7quNBxvcqwyAd5Dg9itg67WjS2DK",
  "key20": "4nX93X4eAa16AZYbiFGEDVYeVzLeqBYHVexhgGJgN6i3mnnVG6DAtbWTsu2boaUPc3ct8Ww29YsEAgLkTYiwyc1e",
  "key21": "5Qw5JA9x8EyY3jhBwzffhzrW2GpEc8tcon5rvib6mu6pS4EExAmGMw5hnckLhWFRomFU1SQWWZupS3vff8cV5dHa",
  "key22": "5rChz5X5XC4mHYwYcU6RXQ4qyPxsyVg3XR9K7o5ubjabCbmUyVGACoWPaVdoZN1adYxCA5u9RyJm6RFfTVQGJccN",
  "key23": "4eqBXV3XqnBEf8eJLt8VKkZbZjhAbJidh8mqPxZGPX5eC167KHJiUWkUWkeXEjrp6Mg7PJSvuMdAAPdPubGuQabL",
  "key24": "3osoCpWSg3A1NzFKZzd9sgkWrqAR8ogodCFdVCAFtsvPedLJXKzSmXhiER1GLvp38hQL2mfW2USutnYJTUK5YdWz",
  "key25": "yyz6cD1QZhfhzrxL61bqWhN17SFZGsvy29CeS25cBErP6v16TTDmKo9hnHM7ZfsiTN3GkGpU7zwxycVMUY89RdY",
  "key26": "Mrb9nnuYnPM7WeXP53dE6xueigeBSpTvXYdDfGCSFL9NL7AbmmCK7TZdKq1fioDw2S995T9pXsSyabWwrUqPu3y",
  "key27": "4Ys8W4wT4pfx9GWRu2i29MwKcXKGaf3tBjavtNwVZF5EKbnAQ1q5Fp6LM1TT6HRm32BSCxbWjFtsWJBQtbhZdUKN",
  "key28": "2SZtGJhGiBFLUS9kpVnaJSL8XwK3E5W63uRhWzbDPuXykc21QimDQ9DJoGWEKYdMh2m4WSWYawDgGUETcUhzoP2d",
  "key29": "24tEBYUZ4ZDtYDTfSPX5C59RgK6NVf6Xi66tTEssgGKHGnqJKwkrBqYxjcmoC1wMNLNhvkpNt4LEXVTZZihLBtF3",
  "key30": "2xk58p1n1gLRTzQAjx4i5uadacxiYYRkVLdyTn7Xm1u4aGGo3y65F4TNUn3YGBLBiAwuHmTuhEwxUSVbX646vhkG",
  "key31": "QP9wSR6HPpBeHxzun6k6qvb4ZNfJD6Fs1bUrxb9hMfffj2nTG8AAJcXk9kVh3gasrQreLwBixARy7JieL52wHzS",
  "key32": "64VyncRrzzkZJEgygFrGPGFMbZt6jFu9bBevbT59j82fhAcwqSmpuV6rnocawj1TzP79tEU4vc2DxJEHxMnPb5D5",
  "key33": "3w3M68gKhJ7DG6HvTSppJcRFdnDZmuV6dzDd92fozvnsyJ2ieBKrHwek3772zwhNvWq9ad1zwe7juRHbQDofPQgx",
  "key34": "285f21287pD14F4SrWMbm8xRveEFG2is2ovBgx7HhWFoMJht1ejzmuFZTYvE8CLAhn2GaJU9xFZSeyJK4NBkCmjK",
  "key35": "3LYa2DAeat3YHH9yVM27uT24FxKTuUzepDQZpP5Q1gJMxdoEYmy5CgxA2UwujZhUWSDbUnG5Pwa1JCzCdjQoj6yn",
  "key36": "5enx4iuprQvpC8zdnym6ipTW7z4nLzVcXkaBrsZXjPPWdsE4HFKFfxUnbhxbf2WYxxN88BLwL9FDHncRA3kYTbjs",
  "key37": "dnjacaNSSBaisQ84tzYncjm55iekJ3m1r8EYyQZo9fDuq9Q3UGY4HY6xh9cxkD2kZaGyTabpjNksNxpVsd8yxhu",
  "key38": "3xro1Xs8RFzVYrFCjzsxtmHY3BGfCvR8UccGxn42SybaJ5QeEXMetqGxXjk7ryuE9stamx4NN1vZfcjvMALXtunz",
  "key39": "qrysk3MnNUQyWyFgPW2jrcccNfvM5KRsK3vZLma1sz5SzRwUEDv3qLFRNowH3Nd4gkr7GUc5qUoydzbg5NbokWp"
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
