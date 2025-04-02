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
    "1LhHEGxycURnZsX9qxM7nLvRNheQFLDwQMJhpTZSYtZb3aKRDzPp2mXBmJeK3e9o9TVck7gqvLZGJvsuDCA6xc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nQh2ApUQk6BrcxbtLB2qEhbzHv8FEiL2jqifDJrXXbhu878AcarhRtiCKJJHTpeY7oF4p3KHxoXLBZe7DjwPedN",
  "key1": "5DVRzr1gPbTpMSFjaZjDLEtrTXYw99jDKWww5U7eTq75tScxsztw5XmjF5ppcCQuu6NHGqqjA5jsNiyyo6ZF7RM",
  "key2": "5VecpDB2S2vCgfrkAcgBqHWn4sSihRzgdBYhcPK4H85s1Z2ZTEnjuQF9Dupb6igTfPZkZhv6PM2HYkwnnAZBPNpx",
  "key3": "4RWSFTJcZM7o28EFpXxetEQv2YE5pm68kvoCX9wkkWDYavRKwPFyyQwm7bKQK4RgA5DzXAu2GzeGU1w8p1fEMVvh",
  "key4": "31FX6HAK58SEykYWeNZC6akKTmD5Dq1X4qcdKWDaYfupjKeUSgXzjbj2xinkDkjkPNR43cVXMZH48w4G9UnrNRTi",
  "key5": "25LFQZ5d7j1eDrQrVSLqQS49Zen8UGQCNCCYTfkp8EhtuKxaG8eDcCsVGgw4KCfqueW6SiofSTL4yqae7NeytSwq",
  "key6": "2XLBzfit5svsQxYL5QPbVchnZnHoXFtAJ99ttSgsTHapFzwMstsNUgXeFfvBeF7t7PXo9ToS3yCH226QdQbGRT6n",
  "key7": "Ho7KRmTxvdt9wyewCtTUwpmgNPz4J49V6iJYEnEAneV86b4TeUfc6AxroC8SpbCR7GiiUhuQG6YUz5m2e77GMZK",
  "key8": "45moYfwSbKT75TVxNENeABS8JhZQFw6Sxtu2jstgdC9tXPuoTFREevRCvsAdmVdXHyV4ZXhKAkTBjctjxpeA6Ud1",
  "key9": "3w3VpdHnPJWBhwwnwCFhYEwsE1P4P2gVVj7R1qzgkjBKYKBi7wtBGiS7ii64RoFVNBq7DofMKN6DS8CpSrq1jQBf",
  "key10": "2RxNN57AhrFSinMMYZbLRuCZhT8BwhriXzmMwT9fvsGRq7BVAgx6sP4mnAQ3kXansUaYzhQRCeh7j3KY6FvEXRgR",
  "key11": "4qcG3tDWxR33cSBMMYyWp6FF2qAit3p6Lg9o8Dnrshst1TxRZJxCpyqnKUeYBAwqD6WTn3P3te7Pknt9YKTwE6N3",
  "key12": "5nYTeg2FceJj6dsZyPdVoUvnzD2xBL7gJkz2vYVopMbr18hUozMVshndjTSF1TfxLLwcXL6F53gav6FAH1jdPoZk",
  "key13": "2TG41eMF5v7RVV5sHjc3hxbFuBjgrUD9jYWYv6ot7B3iMjyy2hdBwinHPvnkUg2u8tewb5i4jVJgCMvkiSEPbBzo",
  "key14": "VbMj5NVtuxHcxG4dLdenxMW8GTzJauLQp7R3mMGuJuBL1uXCTAYc6QXK2ZSVwnkK5TcKADdUP9nr1h5AJZDCzTk",
  "key15": "67337szW9roFMuEEJo3eS45EqUkkBVvj4xZJpgUS89hispnEarXA7XjoVs5ccLbUkq2ByRvRJHeusQbUBhS599LM",
  "key16": "2FohUcbEbqfnTB47xiXd4MfDsNAByEg9GpjyM49Vx7UErUBZDhrp7DNnpBFKnoRm9hVjcZx6MjSspwwxCSLib5iV",
  "key17": "2pt7NLyEeEzFPKr2vBeYdfyUz9TrVvCs8AL2Sg6QuEyztPLGq2UmdXiG8tq4yPKd9X4VnXVg8zPbwBs2jddmdu9o",
  "key18": "CDnQ1QG9roGKSBEQJJrpwnH31PaiMZrx9WaZZjdsFcbaSniAXFXLV9iWZWaBvfih7ofEgzo7hz7Qgwoc1khRncg",
  "key19": "65poGYSyd9PvtUVDZpbJPET2aaFnH6nvK8eLA4iLEwZBjKJLEyNUTdRX6kkLFK9uDC66Rufo5ACyXCbuZgAnyk65",
  "key20": "hW2HtYKUE9PZWPyw743uD2oJkngPgE5Qn6wcjLZJ2oLY6vLtXTjjjCtySz4KiWbmGq8niFfZ9phHRYQk1yWKMvy",
  "key21": "gGpXE66231quv5Uq6KgbLupadupkVHHfFh9N7m453R1aoKmd2F39AxsoA6bTRNPe76QepkSegyBN52LQaM5bAsg",
  "key22": "3FPx2LKVVeP5R5tZnvnEhfbXfwwpwLWoRc3HvtTKvuMo9v4e8uKL4mLvKUn6wKrMwWWdwwPeE9e4VVLPH3tYHQRJ",
  "key23": "axSHoSkRt5hqVw86e6a8kkygXj3mPESKC4rWvDYo4DMU6fxjFki4RvJALV1kpCChF6enzeBQJapkxK6TCHwcABv",
  "key24": "2D9PmPyF4YWJzwGJA46BDXdtW9tj1KvQ3HYZMXvrsGhnvgt6D7cV5aX3o5mMQD85yiNbyKE7wvtz3r2WaV94JN1R",
  "key25": "5BcNCA7VvBYxbj2R8ULvbDowcuBGxaikWuAsGXLmYDEvYbtZn6QzGQz2jhmPc9LUDvDA58D6nYzNSfofvBzKSrJo",
  "key26": "2wSkBoL6tDrLkqf8oXvoUD4HmCVfgR1JJLSDxMJdVX22WP6LUBAbritgiBbCrTHcZvDC7G25KJumUTT4f6DHT9G8",
  "key27": "3r6uR1KyEUoB87g3f6QSeaz7ngupW6h2s2PGGxWtNKrRLL8CbrFegY4B7MnH8oTUDLEoU5G4pCk6vYLzLb74bzjm",
  "key28": "5izPdg3iGjHbfvvLfvcpeh51KaBWWaXruHS8J7Ya1caRhN9a2qccxDP1CfpAmJ2cVS2TNiJ4SrbXq7fmJP8Eiw3r",
  "key29": "iV4kJgUxcVu3i9E2hYMCi8pakhnnW9ykEcKk1HLd1wKL43Tt9Coqyc3itSuDNVY3HaTwts4czFQW48gxenj9N5R",
  "key30": "41QZAbs7QAmtgeixVGZ2crnUuXTpg8avRapzAFbCgZeBSoadDhRoMN77jdmHugtT5sNHmWTbTqBY1UQ1a5sj3Q78",
  "key31": "7A5MqWHrjfucgvadCiwp7LCX2GhHBruv7rBayfNaN8CCBuR3Uar1UCy5duXbm5uKgmrCKLwGRFgBKqT5SP9gJSj",
  "key32": "mSnXvhPcWBcoWgJ1yUkvPYnMurzMhB44rt7u7Xv77SeHHcpvhjrtuTrum5K56H3CT37VqpH55pFiRhZME8NEHvc",
  "key33": "64JQMjCraai6MRiAbUuvRVtSptFAhonCwhtdXXMejvga5hAWjXgEHbqBvq97ZQxkUtoe2Ltb5UXr6mxWYcCkQHrp",
  "key34": "2gcMhKuMs5HFAPnWrqShT6Wy4FQExtW89eict7sKBHTjryhAruHhAYrd8FywGd2GsU5b5bpH1vGz9W2RrW7PE1sW",
  "key35": "4SvjBEsSdkjekiC91PbhWEdVNiDANcezR2w4YJ9DJhwWMf7jwWWKPoi882gRN6FcrY7SZg3rrYCHsBcz4Jd5SRFh",
  "key36": "4PCbTiqxzKCKpepimN61xtVf6ZQ1DauZNWH4aLDT3Q22PfsNEe7jecZu6q3m9UakstkBerSeVkaymdpMxahSJP3p",
  "key37": "4jiSJNMXEC7soNgJ6tDEPAJttgrYtrsWfCN2PDT7L8yDDkWeRNUQFDmWXQS6XAZ1qjcZLHU23cP3mPLAHg9Ep74v",
  "key38": "34JwiwciWEsnXtR5tQKkdGkFzgSX1ngorr3xb7f7BJj1k55c48GE7EvHfP9GPkHrhCj1Q26eXd97rABn3QqSCXvd",
  "key39": "27ZHvL1LMG3nPGT7CU3YTjKKxRaKRc5zN7k9PsVvk6uP972nKkShEzyVogHsDWB8rLqB4fWSLd1e8HES96et3DqJ",
  "key40": "qMbb1Yb6f5BFw46BqWJH6F677zGqQKV8YeVb5bePiw12aFjQDJchfbU8ryf5w6gxF5SU7sEgtjSamXZDEV9Pq2F",
  "key41": "arX3cc5C1gXj74Vnzq4r8H72QXr5oxDa8enEzYLvaDKEXYFwZnXXc4NRCMtMehNLE2shrTVHTitDzBD9zotHVvD",
  "key42": "2Xa8zQ4DrndDtZ81JssPaCPbrhq1Rk5C6sLLq9M5JgrbHfjgEtcpCR7YRv5mMp3MF7b7tFniNkQ97WwEZktVX5wy",
  "key43": "2A3knPGEvEM2WYAJXRw1m7gugt86is8Sk26vpEtpiNJXxHsE1qKsFZ2BiQjG5meWs6zR8wqVMSo8r4joJHAVgYes",
  "key44": "3bXCUkTwwLU1KLYYmSPk6hVP8Vk8YjKQQiDEWqdyWfNZvPF2Jn632S5RHgdP4qrbhvY3y4q9VL4DH3MGRzaKNwLb",
  "key45": "Ebn1hMeDXzBcZDPEhJNiy2YkHSyZh64DNovmKYQKPKRP84QWNPHLmZrMgvvBSCVjcttezEYrDCgT1juyJVfDGBj",
  "key46": "3k6Boht3FfjVAeZ9YvvbwynWkYrnT7bwHCSKsZdysC9d1pgNEx47fbddcguSAEkt9hVfquyX3T2Y5BoMGzP4hzjq",
  "key47": "uWxcBBazeJKGjJvgdZwSdopmYtMs92w7vWpTAE4wWbdtwoHGga3927JM17sAsCs1xqPdUnuk7BiwZ62rMP8VFLy",
  "key48": "461FpK3VKw4ZrYYU16yovFSEzqQWJfENjbrWXeUga9CUdmpuEAS7Xtp3664EideDRKETityaSWRQ1fM4aXY4nBX",
  "key49": "5tH1B7AhGzVcxjc394Jv7vHNeecSJMXtfsm6K5U29MUxDAm2RxeNfwzrVqU4kysMVJJWWH5GiSdSjcUPiPwPWv2k"
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
