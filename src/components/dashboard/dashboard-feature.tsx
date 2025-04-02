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
    "492ZnhBkqJbwysffqDT3PcBT9PyYH6uv27zT9DScLjzA7AvLfQxXn8vATWhd4vafx4WUn45jEAoRxsqggnQJSBcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E1iW6S1ocLBQhc7Wu4ZFJ4DPAmz74vrenUnRs5kg9EFxMjgzHSvNgQdY88ZAcWuqkzYNpWrYNSnohNPaif2naKU",
  "key1": "4UH73Yd33ofwSkC5Jn94SjWVu5F48i8hVg7f4sRqn5JcNS4t6VCVZcTdP922nGH4NyHxsrSBgKDMjsAxgVh74p1N",
  "key2": "4Toa6ESTf1hWUUmZN8fu9fonsMP5eeYYtCDdGac5CXD9LfLQ4uXm5UqnddcrtvRnZzzAZ7c1MJ2d2bFHPDJQESsk",
  "key3": "41DP3DNM3jw5g4kLMTQCkKRJSSgrxJ197Jedj8oXvo6tZXZFJ33DHkRgjvyPx7Xrzzj7oKnRrejPJaLzbhbV5b1m",
  "key4": "GkEyDjBBGWsurpt2sW483auQbd4qQmGJ2c2BwPNEK1suxsee4n1WYeZ1eJqefQiip4eXxHCC7jMFdCZ1eYYVBDP",
  "key5": "2qK3efWa8xzREvLhjprE6BsNYQ9XP7AQrJKkQLSNbdoPYcHyrUCxEeh2ANG434B88J4tic1b3qbFbubmfzhoVT6b",
  "key6": "5uztreQ9otHRnmijJCKsxiL2Rw9fV6gvbwRX4QHmkAENoVtrBW6wskvwX7VUdRjjV2rVL8hHGDyHc7BpFRFXgQKd",
  "key7": "wWGfuacRgv33pKssgQ7EeqQFJMjEW2x4rVy42hui1TQLhzFdw5qCf2gVwXCsc3pH1AY3sXrHcNE4AK7T67p9bWo",
  "key8": "5CWNjhcCNtL2dHefi8kT1stTm5FYwEZ9DJrUumwqcymNd3tB1fPDEigmEv79bKXqAbhDVugMczyRSExcWuga2x1J",
  "key9": "4GuGutRsbgwHrNAWmaLr4BmCyhKk6YK3YBLtsbjkTToSUFs41YvaPiEWC76rQzM4vY9QHxVoA88bteBtPxSx6bYL",
  "key10": "2E514T9oA5LZjewQDdKD2M6H2CKmw54sCQuid2Zc4to6we1eRgm67vnMciyUqwENM3yPobTyzUmNdyYWV8y8hEJv",
  "key11": "HyYd5W7Q93UuHndtefTjKJwUnsW3VCGnnFU6dQ6fw428XUHYJgHVq6NiE81iemU6o9UgamY9nXdBiihj73SKLaj",
  "key12": "3EhoMo6eNrK3NjipqhC2LotXisJwSpMTeUZooWKAjr7tWuLMtDRKt4xz3uF3n85deDjPjUvdgdgAonTW6jT5tvfc",
  "key13": "4ywkJqhiJ1LAEkgNA6AdMxTXURgkPSthRPNyq1fv83dEgcBPegP727R87c3o4yjrDUygH92zr6k3zQxCV41buxDo",
  "key14": "2LM3tAKQiHDKSF3KK32Tf3qKtKvzEBYdb31sUgK5BJAUpr9ZUaZXoo3dfnzJKWN24JBzWedQPyA4ypy9VfCZvvS3",
  "key15": "wvS4SvSqMhehhn6jAQuFKRAjp4L2WN43uRPFgkHbmSaLQ1jtuVbwVprYXskM8tj3jseHC3qBvDwYHXdZHwWy39T",
  "key16": "45sCMCtxcaXVUxL5iRzGpNZ7PtsQQSYidGumio7upEbBohR6WjPX57RgMk7gZV8rQsm2YT1VYAq2tmaZ8t3wdVvv",
  "key17": "3HPdoE37hxa2uR1oDGbuv8NvMizXn631SgNwTC6B4bHGkU358RFNSXTBxvFii3i74QsDZ49tB7AKQY1fKXUJKeXn",
  "key18": "3FT88ySKnEGaXyJPofAafd83G1VGvyperEDdsNWrpSb7cQZiUajo9TtV31EYXtSdaLqmPYtnHcWB95wQbSLkxNLh",
  "key19": "5zDF8hhvzgcuoNrirh273sjYXjnWuPnwDbBBiJeUNQXCC1c1Dth6cao1vjvTf8KDd52vk1Pw7XRjjWU6soZqB43f",
  "key20": "3A2hhh3qVcuhXqidfBDN5365AiLZM9kH9eoxmXD1abGuf7cBqACGNmb3kG68KUnjymbk2tXqwa6LoPPkvfq9k8tc",
  "key21": "3hpnAA3vPkjXbXWBGEoMnWxhEvYUxP7VtU5g1DAnwPcQDafm3kt6sRx5q3JVZTi9Tjg31pbqSzaSL6w7dBSRT3hL",
  "key22": "3849xzJiw6wBeXJFgjtogDM61Urr2njKHQfApnVDgfn9tR8DY2s5SsT7emwKjTpznAZdiERZEzjQVgywnvQWgEK5",
  "key23": "3knDCad3mytJnULPFcauL3RzJEZyzPeB11rJu76kR9XkUmJvwnzWLie1AQcMQZfVjJJEdVuahvYbbmtauhLqWSty",
  "key24": "27gP1Fn4w8RJFDeernDCZ67UYVfozL51Tez4DxQKZCiVhY2Hj4ner3a8kJQSMWyg2tY942jmD2W1y78bCArRM1KL",
  "key25": "4PaJeV6BN399t1Sp2smcL16frvrnnD5Wvdy2DmX3U86CBrJxpt3gEMu7FC6h7aYXqq12UkfMt6NibMNdtW3UoEd7",
  "key26": "4qnidQBKB1ExTyE9QGk5XNgV5iH6ZddgpkjEzoveKpN3gTRfGUQP8AoMduZ3awiKgf55shBjkiXqBewd6ZKFhDJh",
  "key27": "A7QsphXCsztiS5hYqPDGfCLKj1fD7BGAACDseLLP7C6Vx2zH37erUacvgbStkVcTUhhSfHqcGtZaSGKyty9r8KW",
  "key28": "5w941m9CHe64hYJn1v5RtFrNcUMgm2UiEFTe5X57CdzsAWZ4uJoiD4sizT93JYECzoVTpKA7w8Y69P4xusrve2n",
  "key29": "4jsBpwfosFxDDideCg58aJzVJpW1nNMGw8MBkyBJn4uvWS2HY1tjEnDYwoFtCmthLvgrMDpmigJhghabvZmLmQbm",
  "key30": "y3JGk8ePg6AL374TrLYma63wATiMK3CCPgB3yszQZWBEarJcRD59owDtp6JKzLGRRkS33pTCJS4JPWiCuZn22b6",
  "key31": "5iQLxDDhcUcsXYcT6YzZeCCkVwgavMNdsGgfyVQMbwVhMfgz7DDMgKhxQbgQu4V9qze1p6yp9fWAV6ybGJC2KckW",
  "key32": "4fqn5tJBnwqyKyctgq47Ai5rTfKBqxJugLHDebr8SANRpmULyLkbKDXpWar6SWTCqQ7MDshZwLv36VL7z4BDcYxf",
  "key33": "JLHPxRzYDSsWayZFqt9peWhmJvRY5HbLibQ3ZuiDnr1xgy2Hn6uvurLqdwLNr3q8G8rtXguFgQVqbnz4NS3tj3Y",
  "key34": "5bbDjkebQrocKPQUgb2xqByXnTC9DtP8rsk4CdseRR6RrkGewdvG9w5BsqatvCioKqvKe1H9QkEv5Va3GXXcdEYN",
  "key35": "5LVariYq3uxe1QSHdRGENiDGQv4XvJrRrrPQp97CAwNYwK6bjeXTtwPgEqQZeF9gkshqWQqSsfPDykSva2F5egx4",
  "key36": "37NBJng3V8Mptrzw7Y3cj6hmL1pkdapqUedefPxfaSkdki3zyfHtaavZbXToX3JuTdNCLkfSq1hZ2u24qMPGWyL7",
  "key37": "QRtEURPFhnJCwPjih31cSqQgpEffsEmKRs8amTWQzHm6eeDMtr2U5MwQgb5ZoqkSTWwYpFv78Wa32g1C1pifjU7",
  "key38": "4NbNdGFTUfXtrzrMyN1DGug7CS3aHrSQvBrHDruV255BE4wJmz5qQGWyzjPuDpxCXLX4z62XhahhH3LRwuqKr8jB",
  "key39": "5nbKnegBHb3DZv772CyhcR5ZuorqqeK8pfftLA87H18W1niHedTapjy15uL6o9xucSsEcF2okPHpNiJx2GWW8svP",
  "key40": "23QxfpstCb9amzKCYVuH3PHS7pio7wae9Nbth9tidtuFeGwkhYcjmBMw3HMCGJ5E5XYCsym75jSNzaT9EHkAvdZd",
  "key41": "xpp6EAtSopzVBDuo6YMc5mNBtJHvb29EaJiUpH8g8guCYwCmceL8PEfrvPattDZEpwjwHjoRTe3tiGC3BPwti9V",
  "key42": "5HYhf7KA7qSRvDX18vqc6ukfNwUSTLbfx8TFkgmhNzbKScJf6LDxsdyucSG6FH8ZyeG2ENCZnZeRNDF8zzpzMXrD",
  "key43": "u8nmbx5ZWyhrHfpCtinVXP5wer4JXVYK8zkjfdiba19fgFo8Qjd5efyR7HWn56J3efJuS4AsFBXuSuNAgXwCmJA"
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
