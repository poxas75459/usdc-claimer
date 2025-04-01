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
    "4Sh8XkepRgYFwqDSBasNVVi6DoHMWfdTGMARovnUCmWyEQGUM3x5RnLaP8pyFNy8hPYgChUWHuvYMjqPSkRT9eM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgjRNJDMkpmJ2AEbSSt6qxXc1mNTRQtMPiL2hyD1zfEDU2LWBimmpXYzGUfotgs6b3EWhtfnDz1Jz6R2NxShHio",
  "key1": "26aJzkhwcu7jQ743KdHHirmVDg4GNaWrtLjcRAGkabQgifZFhF3Pk2AGJ3RXrRhKNHjkW3cALzX5X3hVttrk9y3J",
  "key2": "2ngnZFtrtkhjXZRLX4Eg4gTqXd4dtA1zopdcxPnn8Nw39ZY6DB4ThsGzAzDbL9QnYDPq5pWc29cCqBrxWUZtKz7U",
  "key3": "33BfqJo5V9MeZrRWfQJT2Ujg1XNq8LrSB3KVQpcyLnYr9pRZNyrYonxVBoj8F5p8iRGBKJGiBGRAW5aUwSwsnSsR",
  "key4": "VS13dFB9iD8zcjQQqDkvCqLn7WqxAktd4cTW3xD35icbFSWNa8vLwAYuMEsa6VgSeW1wmfvwtRuddccgs7xzzEW",
  "key5": "64UpcTAFe43qysAAMW2aaUCMTLMKmozDX9DNbGJdKTnPzygMsyLPTtsWaf34y9qSbmqmv75NHT7BtRB3Eess8C9W",
  "key6": "onBTy9PZnLaN5Cwvyjr5QWAhqc3U8C5kvCeUFhEucskpNdDwbHzsXp1VVQwoRDei2BSbMqMFsapY5K1UbYnYzWx",
  "key7": "4oyCLkYPB3TV531ScJuRpgQqUCfYbWAY7irycq9qcGgRE4ZAA5Kvj9NdzwUf7vyxwV5JARuAYHcq5GXrkera461t",
  "key8": "4atsniwbbmUouPixHWjF2R1a3nK2tBWtBg9uUzeePP2pjov2pTDeBb33YphLprSDWRUT4bAvLvMNCz5rZvhDc3Hx",
  "key9": "2xLX6cwGDr7b8J87Kd94zGtj6AMVb97eDkkSesMM2iHtQ7pnzEfuWQYXdi7zxBmd6JYV6PYPMbYLXrpSR76G9XSt",
  "key10": "PQfv82rmMFWxAMRyeUJFxwdbHiUMPFb9xfTCTgX1vAsFW5ccWFQTkhWTQCkmuFEvBhPVYxxwwsQEwbBDd3vGdAa",
  "key11": "5qwQpvEAcNJmAHyUrmPdoTnBTLpvc9bsnr4EGWgxvV8k1KRopNxyTtKESvy8rN9N59SabMyu6k4WsvGTK91mZ9a2",
  "key12": "3kTfXBd1gya1HcREMVT87Bw2cNT4jpKDBNNR2BwYDzrr5tfeJdoybLhKUxceCRTjmohDdfBgPpUxSi8emejrKaR1",
  "key13": "4DpFBZ2yyviLNUoR4JNzKNJCcCVPbcqdnmFUfVkK5dqSk5G96mPugENfPhH3YKiyFZ4GupBocVXVG6zZmS3HdbrL",
  "key14": "A2dAh9jwXkj8TjwFkYLN2e9ova4JP8sWtX7cXciuNLBCdnHxF4itBqXb8WzD9SUC1pPsebdDRAe7YQDmxFXf1qV",
  "key15": "4hQqpC7LrSmrmLaHtBsvwJuG6Dk3hNwDzHaGxCHiJ6eLNwJo78t22isrZbG5X9AEU6NaXNXfH53dyRzCo2jvDyK9",
  "key16": "n5vSYN1wHSScMdrpwrnwHKGUxLTBKjUCvR6s2L8H4ndvLVqhPTHyx6QUv5riRyYrpj6dNsUjHrC1cD19F1c9D8J",
  "key17": "4wHqUA2uQXmQFkdhc9rWvQ5TtXzWceQb9iTvXYjsZQpVRMrMgkGU9xySa1h3PreYcuowyudMokU9rVSW46BPD5kP",
  "key18": "5gsgJfSUkzs44PhbQG9RdhnCjTtZcV3Z48pGAnHTArQimHHCccoQDPiR2GsNwhYAauF3Me8ULzRsQX2P38hjXvYy",
  "key19": "8Dcr2mXyKBm51SXwhNCpFEXbSSXCWwj14NVekNmyhXDUryXY5bGxPn4sfToSGrDa13kJ2votTdFEKcctDVKUEn7",
  "key20": "5vTmSFHuRvEjtWqsa2UzKbyzccgGXALqiwTaMskCFv6csvZJg5JKtse3MwacXc7thVEmaeM7AKQXWpKN4Us67PzX",
  "key21": "2DrzbxFsWuxUNwfVrrpZcxhfkFfHSPEqhsZCR5Rwo8b7AdoDK4q1b3z9kEwGkTqxpmx13qDt2wL7r2GW5MdYRYxX",
  "key22": "4YSgGq8PvqynARptvAYGkVaFyKLuFKqRT9gNh63tPJ2i8viC8vJ7t6sqTPD8nWNz4P2YUjnN5sXczmPoB447CYB8",
  "key23": "dznjTcPk2rfbLnsFNfQuhgHZraDtCXxi9pzUnzE1j8pyDTykDGmuab3E5scUNs9sF3truKeLCARr8E9YkPagVsg",
  "key24": "2yXLr5VDC5q3qhdTsNn9HncF1pAJsgD8bQwg2i3HXKtMiLGx9eSQ6NfSMywArNKTyhA3dshhbjsnpE93TARgEo7A",
  "key25": "2qTrqpQowPKaJricHgrcdSvvobfLf6vAN7ho7f728b8gbVbXqdVxQyYTebpfLsGUKYogAGvwP6UsMNzngAtqKyWc",
  "key26": "42rUYh2EN4QGUhgHxRzysR6GWMX9NdqxjR12FW5ceEHAosZiwuxGHgNjV561nUv7nszq2AH8cwRuFxjhZSGFoJi5",
  "key27": "4LQFvc616AeU4zhEujD5KaxoaqxnbwEWmAcxRdL638S522qshfhwXJZ6GxXPE2sz5LkpP4kMWbdvMvesJUrPriSB",
  "key28": "5cA29k9Mr9yMzLDymgRZ1PKYk5BP24UjCjztCGkvrUhDcfst5ojTNAJBkXoKumsoeRuxsxDZVu5xfgiSoo6MLPQY",
  "key29": "4Ek81jBp2KYcWU4DtAYybVP13PXQz51kjFcC3F7RJZWH9pDCQy1v73J2stZg15wx2Fkcm5W2Lwd1TbWm58mH17ek",
  "key30": "7fKNagT816qYbgqUXKcAPd6EYTVZgZTcLxVBZEQM4pYN5vUao294Lg9sBp9TyS16oP4Bx5ZSXkdoQTssQKRiocJ",
  "key31": "2BxVhvoRZ4U8iSHeayJPB5RFwjLcXrB3LdMsKVgTSAAem2MmyxLhtEBKZP29A1aDteLgHWLsN5FfQcdHzrE3JNTJ",
  "key32": "xfUoDxVq2RpMCWnz7AMtz1AmwV1nr9HJJdWxyNCJ9SmUV5zGeNue7HSbhi6NgteYxbpPtKg72uGKvhTy8nuGoH5",
  "key33": "5i7Q4V8kqabNbwb5nLcetGvmUSMAHyB1T11Dm19o4exwexkdi3XFoEsFw1zRZnnsFHHoXCG3P8tKbJecrYXAWiiv",
  "key34": "5nFYztVerFeEossvw6gv55RaPkPtnhnQxSc2oUPSnTdzNjTvBCk24i3CYBuiK16pyQXCThVTX2HA5wVHRFodvKGG",
  "key35": "5f7Cfi38Yarqbf4tARW115THUcDcQ2b8wzbhXHuj5mESDhcBwUzDTanYaGNE9oyP5VL9KC7rF6VjyxG7HQ7QhHJB",
  "key36": "3y4sdeQQz6ZQEgWTTW5wPNdtsmuw5j4ut4tyGSiCxAbUpHaijxpJQ3vXyadeB7E8Wswx7mFHbRUcwutBcLMUX4rG",
  "key37": "5ErcXBh2udksmUaG4c2G5mLdzAjEiDivQbyyyGZ9nBRaxVdSWqxvG2JAUAbW8Yx2XhnmZFSY13BfUTkPrFU4MS3g",
  "key38": "4h6ZpHoQbA4w1hhGw8TPMhJm3TNq3tSkFnzttxAinApUHqDW6WVHgBknHRW5sdWcxFy6kxiZ3jgHkaBi6UMDFdg",
  "key39": "63wGtExk8uNS2iRGDEF2ysbXdMJMqnGfAkH4Dvqwkw6wHShKzjH5B6hgbovYEt72xrrebEKxL4bSb5vQPwqvtbv5",
  "key40": "4ZpzHeoCijfb7SHCE8QAH7b5jbqVQ98XXJBmWLghNhqDErx8GmofGBE8DqJo7fk9sDGooLzLSWedjdbXDA9mMsMJ",
  "key41": "3dnZ4Cb1Sm843Z7uyZ4mAU3aZ8EeLPKvrqHv7SVozSqvMRbeCXF5uZhfVVCvweEjXmnHQLaEJQzwXRtqZBb6w1Wx",
  "key42": "5WZLJGMRMDMw6yi2ZdvaEgsQnxZnJM3TwjSUT8khiXadZAFt4WA8ZeBZW7xh9EeZiDajADFPJuDAdAyBrCFPBuaP",
  "key43": "5YjRXtgrYdi1e8tdhhVAVftKD3exRUPg175zAoa9PMz37nyTHaf38pQ5YF1sjYCDkCWvxTNGD4pjH1GazZZix4HS",
  "key44": "8HpJdUx82aHAGTV928K3JefmLw7kCoY5vzXW7CuZFVu8GbBYNXTvGHsxfFWGr54ni1iDaTYzGH37Lby5xHhSTsw",
  "key45": "2fWSXQHxRTHn1sc7ypXNsCNR2F1UQhd9XPnxfRSpKPedfiaDGsSPSok9kaMfaSdBc7yZBE29wbJRAJRP2b54uGPg"
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
