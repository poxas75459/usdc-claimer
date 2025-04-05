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
    "3Fd61RQUokx3h7eDzq34wywXzvzizA7GwybGYZpBh5h1pZvuNbSbbbtrR5MhTtPGvy1s9TJa3UqGW1d2dYJERAxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AmvBp2bFpSbSApA1YswG77tz6Z94SzSFmUUFYpPWV93Y8kj8J8o6uRREP29H5mKqwy9GvYH1YAXcNyh68DJB3R5",
  "key1": "4fgb2gMXBPHaubrUXaE9ZP2eZqyVxS6JPpFZbgaWa8kMwtT4KLjfu13FGFkmg7r3KQCh4iSUEDQ4dFtCM7Tnr1T7",
  "key2": "56kozUBQTdfdhDgZRGEcHrkHkmCbeqM2LwbqXQoW9JxuYa9SsaqiCjaUQPsdGLRsPCrmScsanWURo8zjyDxFrJ4j",
  "key3": "3RwaECCMxdwQvbCMX5aLZLRTaeBHmj1WvTWaSZ8EDnKaS4rFkA7aW88tsXbp331u43DYSnYsYLckQbmqRR9CAxBn",
  "key4": "4dvMG4GgsAPUDz81pgopjEY5RmXfSCeqKv3cJmsSRVzwTPHWg3RprRSyNZUFrd8sAat8muWVRG1qZottgL77ZaJS",
  "key5": "5ZA84w36UUNzPMGeuCVGECP8zeppqYu4enz7Uc8CCwuEcefCSTxXDuXQFeTutMqMBbxsodBRJ4quVcuik3E86H8z",
  "key6": "dYWVFYbSprDH3pGk8aQweSb3Yz3b6i6xrZQ5dSLoMYzoY2WMeHPpxrKf6A8BtFgzsGpBgSeh6cM5auwqURmvj9y",
  "key7": "58v1qm7fFEH9vQiFaz8uFNtPkf7KbEN1PiD8wcryGbHozMXVjduYJTRAsPJSbUbLGy6NsSTta8NwB2Km5Yd1YARi",
  "key8": "2xm6qwrHRGexRqja5e61YrtMKvqGirCKazfcUPm2cpkdNB8X1aBCLXKrRgRxmHCajBFE2d5UCZT3DE5V9yW4DcbS",
  "key9": "3vxqp9dzwSyVkRkdNvP4KLUVdaWFRRVVegyLigCd7AT6C9ADMBoUCB3rqmvu7bfCuLoMQALN5ZCEztqBX7qZ1f84",
  "key10": "1JpCuWxfdDUqqFAb7rqWijyBfB5QFFW64gRgNrjHnXwLDo6kDcp5Fe2Nm7xxxzXT4qTLnipWhNon9dxtfAQPRA",
  "key11": "KvAfWzVBg26GJefUUN6YTX39rZ6G3u4dAeeePk8HVhcbJSGADjmZRQaD4h66W5CMNHrsm1sgnpuwRaD6rjZLi6A",
  "key12": "SWKWYqmHfqjcgHMQc2d1zErfgzSuBzfgQ1bMYTjFAQA9J3hHecqCSMZTVC4p47yAtP3BjSxhaJhP6LAWsfsq6Yn",
  "key13": "2XeHFTrSVwbN2xypDvZ3eLvfUsCmzqkbHin2JWpRe6saSF5dARcJjucyNgdqwrvDR2Y1VhpoVHTg5NK1jYSPUsaX",
  "key14": "3iqTiSP8DWQFNGVnsq9Z2Yq9VuaNBgsW441fmhux3U8JYpGciUWPgkNGRzYaVHfvB19ATcTqY3ehhULrxqYExvQn",
  "key15": "22hGTkoJfzTevwsko216YU77p9HMN18As7vDyJZ1qiz7aUCSQaDC6oQ9c6AGPFvG4THV5Ef54mQx5vvsXo67YDnp",
  "key16": "3dwGsGq3MeNmer8YnshU7TeiSsauQWf4uwgc6sURaKAx3d524ZFMLSSpTDr6FjrvMWxuGbKfMXuXpH9LhoEQ3Kgt",
  "key17": "2dvpUQCZgobVoCvBLwpirnRf3aTwy6aH7ZQaweTHKg2zDnJWo4tdsWH6frXoXi4fmn63W9vFcaT294bum6xPUFWf",
  "key18": "4HK4hT9VBTeJqYcHPue7H2Nv6iJYfdPVLzYzGhk7zFqAHMcNUjxrYCpteGFv2mCZ9M4JZBXdoHG7MgPBNURreosG",
  "key19": "2Vqt8c55W6x15kLYkStWyYCHdqBUWUD1fXGdGqjwCankFMZ7gvaMwY1TMi8pQDqeoLcV99V3rMDeJDuMQM9eRKLG",
  "key20": "NxjLDhqeGinFSDMrubvVGMwbzxDeDSFSm4WAi75Kfs1DakNP7CapZznbm13haxD41KzXNkh6XvXaypmAQpDS7sS",
  "key21": "3ggexszscUJN8QYFJUpWHdKs5ABgKfUSxMkGXrvmxVBJHnStfW4YrQxWzQoQGSgsg2GhYGM1rWC71kHq2CUNVQHT",
  "key22": "2eggjGgQpqXcxDymhpyE38wARjKp8vjFE2n6C9Dd5dD2xJUvb3RLgbGiRpzENGW48FF3QGvRxce7PjkGWw7baqaF",
  "key23": "muJnRTfRPH58WavxAyFpQENxdd1xs5QYWF7NT6Hv2v19ahWdqVm8TcBnDH5ArgGiwWzKbEbreYhs4uaTWGLyWR7",
  "key24": "2BcaJj8UB8HmrQ7ZXJPWyDzwj6tJToZU1b8DeUE6wEc9GhEZZNgHbwBMxbeH3eL6FPgmAU3MzmHcjgkX2NHj8fuS",
  "key25": "5QGzHopRC96UykXBJohQ43FoAjE2veTQKypTTwZ92zrLxMck2at46rCpYggVVbJnxXMybBv48u2vwGNc29acqmXe",
  "key26": "4LqjofA4SYRWSxbPQ6exk4U1rkJKNd4mroUK3LEXL96xCgFZKJgWW3wBFX8Ep3waHzHERgaAQZNVpPXiuuYAupfy",
  "key27": "27uei4howhDZzLbSk4Bu6iMVLuGfE8UCER8umtBnyhHMykpDucuPfA3AruPTrK4NPXuRgMAMendVf2nfjUk3Ww9P",
  "key28": "QqkHWg8wiS3Hx2yYSdAht7MWreX3WgmLijQSC4zARzR9S6sC7ZKAkiy4WVvxy6UHYodZJf61UTZmqHouDKyoYef",
  "key29": "dqbTB4HRhApJSUkAoNK3CRaDNMfEU4r9h1S8DmWnFtZf3mEtPrpjBvBDLHpCdjrb6wCTmFrzwnfT8Y6HRR7bSVD",
  "key30": "4Bj8gLc9dxDRKpsGLVKCNy2AbNbWFsn6813WRUCr5oqPfLm6WmfJiyEMUDAtayW5St8TMkrQeNz23MsjakieTQun",
  "key31": "3ePWrVqoKADeFooT5sbuj2ssWhSKjs2vFRDYRveppoWJcrd9otGmt5367nZcCYkXdBDJv7Z2Qfzyg8rHAjt82RJg",
  "key32": "2HTMksWnhjVbegxUpoDPAiUtrDfkJni1pyJ9kZAGAxEk2uWhU2w95i2eWB5vveeoAHGFWjbZAamfL6U42LV5Fgbg",
  "key33": "4cRtw6QZmHPBYEkNijBNDtNn7NmpWpNWPVM14eqdBA4tUKx25M5RXdFv8Bgaf62g6UfNjMmgL14YV9DsBnMARJkb",
  "key34": "yRrr1PLceW12EXCfdjy1sjJCeikq7w8HbLyufYhLb5pjwCjUznizkRfjvvE1dcYBxU8xEE3gPbCu6DHtUHDddn3"
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
