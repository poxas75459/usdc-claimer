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
    "5CUwyGnR6ko9HVNy5hNxM51rJ1eNHic7BeXesvYLBX9uvE4Gn632hX7owGghpq5x1V1uVerDPTUakRtoPv7uiRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k2ozYeMpu6bJXCAzs27QvhuuwBLenJKYnwE5UjTuFVfZUJF3Fpmaf3MexJiNauWi26DCX7CcQnJEwTS7yRbCkvT",
  "key1": "2gozvtxJZwivY7BsYdR7tDnejbo1zhjwMECwBDBcaLeAkciF1yRFubFpY6v7gVJygHp4T1FVYC4pcvDimKJ8Vdoq",
  "key2": "Vhbk4u2D1ozFeKtLvr8GkXNJd7zhAtqJKLzLC2kJx8dBiHJM5oDymzXEMDLcQKNNsLEstkBzNFWFespkdSXoZKM",
  "key3": "2KW9jL5DGCb2du7PR5veudujyW6YD8FPBGfK2zJVv3Gx6F81YcQ6VwryMDw8dp8J6eXJV8EzBMsRWFx3aMs9fx6k",
  "key4": "5fLdTWBX99YkfTgrjbeY8YM2yKuivYV1ppKtVWYJDy5HbCjCDToApaxFL85zwz2TrWtV8VuFXYHpRCUa8DxLZjGe",
  "key5": "4kdZuY2iYARFr9iihFqbKcQLpzRVidZyR4a7a8euMfiCoxrc8nDuwMW7HScJHeV5YMppbELEm5if99N4o8obyroj",
  "key6": "2D5fnWhieXDWj7odqA8fhwjotg7pUF9VUxwn596Mi1NRxZupZe3FU7N6x1C75Tu99Wha52NgP2jfrknuTRiBeF6D",
  "key7": "275xWnCvjB6bMBmE1E7uu5Ye4rcfNa1tYNK2gWGk73cA8KjYZehokDMnPZ9jZXBZbhpvPZhw8UU3pTsnM748WZcn",
  "key8": "5owmRz8AfPLTGFxsgucg17NiTxjAGESKDJY9setzqawp1A4gLfHGwA3d1mvkqFsmuiUM76aXssxwi42BbrAMKvbg",
  "key9": "6jFG5dHYqA2XkPShyZrnXYqpiQSDM88mGz3WShZyqrB1dE6EMCmNp8QgAndkZiKaRR7o3M4Jqt1mDCBDWF3pzYT",
  "key10": "5MsNc2JFTYRqnvjAAWXxjZsuMfPB5mpcofTpzhiTmYWAeTfpYN916KqLdRHhtqJdMLyzi2SSLYmCiDP21vCtFChZ",
  "key11": "JvFDCJHZwwxzA6VZvWXrpHbTwBkn3mcR75jz2iTqQEwe4aZrweRMop2U9prys3EThrpTZn1cT5MK4cG76LEWEFu",
  "key12": "3HmKZnqxmGoepyWuboikdV15ciTZEMMcYjmpmB5agTtGH1Fzv8o7V7vtvhsYRs3Xo83uFmYb8Etoyaz69dRUAUWS",
  "key13": "2Et4jwxRiptWwdrFuACSpCJg1QyyjkDaWDiQnSydeFxj6SyhzHKShsGYgyK4fa9ociWFLm1b15ehAB5fcrcHahPf",
  "key14": "4DgJTxQDMZJrAFcpxPrvrF9uRtcfcfWsmNKBWShJV5fpcmxhtx1FNRNtdKdrTdd6V36KX18ZNhUbZfpWj3Cxhs4k",
  "key15": "JSwJ7z6oEb4D7FKrY8qWC6Xfz9yRvnUQFRU14Uopc86H9tGRZoe3827MqkP8wC8UbuNDBEXCLzeczRDh16BFYpB",
  "key16": "3WcCDfhb2CU1fPsh2QasacvQF8vSomHws1ozTRCazWU7iQN2qSEMTFrUn6WTX9iYEYTzC3EgQxnQYGbcvffMcSeH",
  "key17": "3Yf56HKUNsoFcuHoBy5rRxJk9zPmYkfm2k8wGKU3AavbUCztyE7G8cPA3kp1qzDZL5DVCKX7M6ni4NTNsWt7oMxz",
  "key18": "35UawGH1gCjidURd685FJeq8x3gW86Jwn6yudPLox5WaCzAfrLSBhtX7FFZQZYXL63xdCKLUEPuU7Ksz5MenScyq",
  "key19": "2XaMyVakXy27dsj7t4jYkSNa4B5dnkhcahgGDCS9Q3di3oQAXqzTTc9DAEP1ZPQw2ytnNkDqppyucoYdRvnHPaDM",
  "key20": "24fKAnM8mXom6quiHqAzjgGj9UPc24pScdvvD95bn8p18d8jmXK8XJfqKcqnNUkAo6LWpicnrnxE4AiHR2c6Ehyd",
  "key21": "2DxsEJ1ANZvD4qb1aGk1CzsmzRMvgEwe7Rrs3WCU2ueuDcMz67k31jD6ncN6PFB7bduzi8MNziiKCq4p6hivjJdE",
  "key22": "4iAzsPEx8SrJqWVqxspbBPcf2xA61s4g9yzsRvQpA2P6z7M4AApPdf7Z9jkcMoESdzHZ31CTH2eLsHDWNvZfeQiV",
  "key23": "37sqRPdPX2yyqoLw7SjztAe9fdC1P6MUqudFCBy7WnKFtjSpKib9XsT4CgjKMUYVm8RQ2hxYeN4sqAMgYrsn8mPv",
  "key24": "3g3PGLXtMi77tvmEv3QzuYr9afPLrdTPfYviRRPgWsxVbsHwFqcCp74dz5Jj61HoEeF9QX2C7DW9b2jG9btqx6Cm",
  "key25": "4gMUQpArY3yYQcXzq9kiz3hSFS5wCuTHQjSFThQfy8h8E8o2DvXQAZuWFYiAnaYVMMsSbqVvReLFCMR3K8QBFd4b",
  "key26": "4AuAk4sCaw63318Rnxt59pCszeGiYeWo1w2AbTKq9juaUHGrFiGTCjJUiVttZPy96auhDDispkj1CFeS8eJx4n8R",
  "key27": "NKPJiK1vr44DscV9McfEZ5vSLbrMPdsTh5e5WXwmAFAxDhcU6q4C3S6mSxzjwXAgMyWGYKN8hCbTEtHhNjtLJFp",
  "key28": "5ytLrtedVAcsXti3agaXBm8Q1pSvwQZfLo46AzCZusZHJLThk3q7v2tZ2tSaLhTJ6YPBMpEsZbjNiJiq9yoLW4ZM",
  "key29": "4fmwM3FWGNTTZDvgj9r1WLAcCRLHfxXpceyibcyLHZ2jWrtZM1Cp6gQcnQGKCVXwNReK85xZFHN2aM5pbdwVwNS1",
  "key30": "57u9GT1CpV5VkTWK9uYMBDtv7g8Sg2vxuhvMkooSdkBZ9ikV5xUWtvfQHCoT3trzjfmVZj4vrcSoNetWsSxQmsQR",
  "key31": "2gKmCYT9dDXGPZh6kau4zD6xEkfaXgdaSyYEJq4iq1uJG3Ym2YCZHDQtxTXh95ocEXssXZbVk5araCFLCnhTbQbE",
  "key32": "3rZ7tLFRLPCz8hxswwM13Mo2Rs9yUfuBaiX6M7dB4LQbNbJiWMyWi8xD8KyuALdpdJoa6QZBDNU7zgTBa5UryV78",
  "key33": "3wBWhzLW6EptG99qDrCsH37UVFC3jFzi22aMUZHKvaZQ2hQUj1MHqT86UBkJ6X5yW2KCTyQkSQef1x4aZkDUHsjL",
  "key34": "4PRkvaCXLgCVRcaHhH2yLfrHre5wZYDNKEo7s5SdeyEwkd5GUGGg9ZfCzADesF9UajhZBPbWvzpAsxmSbKtZGtvX",
  "key35": "2EzsqV6CXkjqRJ216UiWEatRJL5a9mWUAemvxCYFes1BqF61Jjb3hkRss2r91MYqdJA4Eev8Vs66CKt2Yrd8KZ4o",
  "key36": "4QiqMQ1xaKXvtFEKsDQvu1CajUD1zT4dEmzsiK2tfBr6nE1dwgXSkxdoKcYzyE3GuGEhsWThVvi8oXgpegguozmy",
  "key37": "3aQB1JZUguSUD9W9YRHv5xPzp5mzVcGNFhBCqh56MkzFuupK3oY4fKuUyzwRVi3esLuBDyPmFqpTyYwoAwWmVmQY",
  "key38": "4uCafrWLH95wHyLyBfrgQVt4uYjHQRphJ6iigFhv3BPD3tKNZdhx3GzWF2DJmoRs949b3HbeHst7XnhfnAAC3kLv",
  "key39": "4J6oTHdKt5j1YXL2F8fpUJuUpbD4cLK9xYPcMzuWEXpmvSNRMJxsyWe5uhZgvGu1N2LiWw3Dc3SXFLAs4MF6fM92",
  "key40": "pTsEfSrqzVZe4Ru6oN19tue3EWQ2vSxBzNV9dbUpADq44DymDhcdU8kJqNS2WcYcfuuYZF5gY9Ltox8AJCLAasA",
  "key41": "5ouG2V3GiiiVYnHXTdDU7kX2KRfLfk2EipukB5D6Pc6JszVzYkDf2AdoeVprnP2KqWd5BmGiDMKaa7jbj5mCQWdn",
  "key42": "314AKbN9vyPMzjknKTqud8jp5GJXiYG1gpNQNTcNNgd2ixKwTMyYKFe4y6iuNuoWRTCuJfU9JPsbM8Z8RaUCaRuF",
  "key43": "4Ho2ttjxKUvLbMkN7zVvSMLHpCBytVqXS3Y6cLkMhQQJnd5Ln8RjXfWhe9WCDta8dTTfFDEo6rbHRLPbJHpuaaVk",
  "key44": "3AnWovNjqPdwMESWDorzyCzB1oRCRMzM38cTj2ce5Q3g5GaA6JQM9cKthTeySNHqsFEDGuG78ggW7Bf7HEjJfkW5",
  "key45": "2qL6p5TYZXHugfcWgZAGNo1bzoUT2GPqKCDyvPwwqNCLnBkHm9kpCAgFRUFKxbq8RUCnM85j6KeJspTGyixwHQ5T",
  "key46": "3DG36qTyjgJ2wos9sBDm13TqQfAnPP5uHhm4cpS7FKnhSoXBnjisUR2BwhoNyWDDxfSW4FkwJSgUTbnq9TZM6T8R"
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
