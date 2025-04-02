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
    "3yqugpyzPTuXQC4gbmWCNhofReFkvN8is6r4DmetZjLmCjA3nWBTKJEmDC1aRqJHxmxxRckk3sgce2A2fULgxXTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h9HYeE8HGaCG8YTzn8VWK7k7NgxH5yfRU1GXc3hjEkcB5mMJdchrVbziYWjSpjH6yiwBPfMUNhBjm5utTi6Jct1",
  "key1": "5x2Z8ndgyhFvCNFuVbTUnPxkEnCJuBGbh1KSqTBydxACxSGxzvZJQAkAr3fQ7dv7R57KuygiBnyneJvRgpBnts4x",
  "key2": "2WchQhx2p5MpJWmfE5y6P3Nx2umLKyXmh5ngZesgfTh57jy1J5TPG4Rauuugrpi2fchE5mVRTLq3vj221RHX5dPs",
  "key3": "ffRGy2Sr64k55JeQ2MT9WAXBxPSX7Hxfuehp4Yo3xQCNqqAmBYb5B44F3wxyCe88416s3N4wVYe8FUGfbhs5X4M",
  "key4": "48Mp2xrBthHNQDznLbnxdbVv6bhrKpaAfwC55ydgszd4hLC2Ryri2riTB9gSxCUXyhWsUsiZQX7Z54uxCxhfPPgS",
  "key5": "4SZfj4cR1XLH4XUXfZi4Hmo6PWTSHNWh8UWXo8spymFV3kcuoc73Vgh91uqyCb28kCcPFBj1op5fCWUygyofhaTy",
  "key6": "495qz3aUvkK8kwSZoTw6VR8QM61wKKsCzRqZS9Atcmq2kfCgWUm4EGEJrMLgNRcF8whYpBWv2vZ5FRCpu7Mh6Vbq",
  "key7": "5c3W6KR2bKiVUh6QmFozhspJooh5YfLZAbxdca1SsdgNf82muWnrJcHthccGGdUMSFWwtZBPkuEcK1ewaCNjKwuh",
  "key8": "4YjqahLe9DqML4nrvqs1CoTrxzPKMHSs6CJWf21joDjVPgNgmJhQd7gtffvxaNPhRQdxiRu3G5ie4SjeQvJK2zrT",
  "key9": "sJKdsMWjj44wgaE5TSTxwaV2nDtDp2wnjoJ81WB7gneAfvi1LzyKyEqaUMZpzsHhL5NBEetEFJgsTLGm5SL7eYd",
  "key10": "3rqrPBV5X3uCWgZ3N6DLu3ecDJxr3tagWtYXgxdnnAT7oFern3BqorWWcKhP5WK6EkyJoNWJMWMzZ5iHGKvpsJtw",
  "key11": "2Q9yii81qn3VcmZjxbpVTLiVRCHB1DHeHHjN9mpLXm1WppMMBK8wFqBj7GByz5yVp2PL6wXmV2r4mpxbsf1VfHnK",
  "key12": "36LKa6v8Pfpaisugcvz669XfdUxn4kwNUFuXTNvQ7LTqZCsM1UgVR2MCCTZPn3o7D9VKaadcrn7JJjFA3ruK9rAd",
  "key13": "mqYMfS8qdyU4nZXjp9U6QPevDwKDvZ27sbLihShepEL5P1KjeFcjwtEgsdnL88D4895f6pUEYNM9LciJ1Dqz1ah",
  "key14": "5wKe1eeP5Ch2NwFCsFSrGKaRtR3QCwtabMcBm1CeFyYz6SLN16iBDJVvX1128tyaDp4Rh1FVk4v2vFn7a7Hnb6BA",
  "key15": "3TYH3EY7wQop6cTSfqgJWDvSQGnCRPaLyzpcPpdoEV1Ld4eJsJkvjyhiudPpMteNfrDHuBXN1DF64yGnY8YJHKd1",
  "key16": "BxXXcF3L1FeSZmPg1fw9mysy1JKTxENU7UW8FkwhSmtrpQ9bJ6P9yTM6p1kCc6Wi4pAERiYT8UPPZK41nLDXHnF",
  "key17": "5ipecg8XLdKSxzVAnwPTNDH1MfJNmttXzNJERcPgrnbym5AVnzangARed5QY14BKhnnuZY387fWKic7XAV9uZ6CD",
  "key18": "2rhdgAV15LmRyybMY7ZRkjf4ZJUsHiCjQ4PcHRTjR9sqycBsAEGBTmVQ34DWJH5dB4SSkrQGmt3wwJE1w6k4LP84",
  "key19": "49fsDEGaWwDeMjUdtY3mm29MGedWdvQMn37RwJR9sezQfqG6zDHoq5T3LVkN9NCptRGL9b6VMGz4wT5KfBr37cQ8",
  "key20": "3TtfBxa42whSfmgTS4JMdiQcaRqCgmUvfeACZnD4krWJgtzU5t8jMcGDacsH6y2SnecDR1BWH2C2bxt5tjnHn3h4",
  "key21": "24qpnyffLU9YLdukurntX6dpxpGP9ba7pMmuztvjQfvpPwLMREiox9bczeYVYaha5szgNiaNEgEWoxgQRDTjq3EJ",
  "key22": "2t5s8diQaxPcwREDcjPixcoTUXCNdjwxY5zdVYEoydY1zTcJ5PytocEiV6cG6wtsvEeLto3xcGvpb6bcvkqneyZM",
  "key23": "3RdVsNR3VK7XHcd2jZj5PNJQLe4MbWqt6GWm9JR2PvdbyEsh8sjpKLcQNGmSPfGZu7sT8F3ut6vZiw4uDKuLoic",
  "key24": "3nDVqi48jfaRXyixjwHcNKXHG9XPKt3sgoycgFJMqk1XfZT9VXdySepLbNgM9CzXDdhFtJ9DNAgXBxGDeaEAXn4h",
  "key25": "31N9yZXa2Wj1gaEwZzWNapL6dqCJTCB8qK1nPZyhdCrLgg1FqRTDwopcsxhoAbwXmZC63snBtySnqxKy5tCZg6jc",
  "key26": "4hFQaqbgdPBbc3UNQTJLFzwWuey1ohA5YbnrNgWLEPvuytHM2n9Ub524RqSDKPW4FUV5hkKY7KwVQXgE9UVD5FG3",
  "key27": "4fpazCrhmqQb6tX3YE2c71Ta6Xq8VhGhoVsr5W3Q9J1yVFYEUe1PnmdGqjnhA126HnskC6b7UAtyrnLxXLBP5Hsk",
  "key28": "SzRZe2YV8sbwYJsjvAM7fZh5CcBxjys7S6QGvcBSee6wTFJDuzy82PztXbXuRUB38FRUrPtpnRe5hVmSkseXuN1",
  "key29": "49KHS732kDQ233ne655vfadkSm8kMzArwvvyBm3kS1WD8pBz6mqKugjxwkumMtuoyvZgtXVqJfUhRdUxrKy8njby",
  "key30": "4fvthox4HQ5KT8oNFpZVBqsmgHKBSAtYvpX987H3TttAR1XunBw7fbukt4ydan698SNREa5f153KBzAHMDV3u7K4",
  "key31": "637nKnWJZ2edAuor2ygsekGnQ8bZWCGADQemkSXNZEgxBfPW45b9Xx5ehJnGkrRZqv1j3gpWjVfo5AYJ41URCNyn",
  "key32": "5oJB4YTmU1Y6rQAf41FEcD57YzBadyBmMdwvevNVh9YEAejKnUD6K1BkToZuNY7xcUicaLLd1D2Zaybp7uzE8Wo2",
  "key33": "3MMUnrfzq7mxYta2yRXdjGQPYQHm8bmWqJDbD3kxhYpL2PMD39PAu3fewBGUFy5CxMx8oZkE9ENGdwyG6cFiX3Lj",
  "key34": "4Nb6QddrLTg71qYQHqTHDjNCKn9rSnSLjHpNjMqmWFE8Jvi2n1akwhWqZih18WCMhRyBu1CepDDn6yCGpQxvXBXX",
  "key35": "3Tj7xggFUMajoDND3YrYjzsaDF4kAk5AueF72re7rYAB7vCJKeKLHSse1Hb51CbQWfKr96jqrnt4jP7hoQuvAHHa",
  "key36": "4nQGRM1tj7QfEJN67mN5ZLbxToKQz4wUJPLpbfU91j4VoWEfBxDY6faeWYLhG2a7yrFem2n2brhGUmS8KfyowUq7"
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
