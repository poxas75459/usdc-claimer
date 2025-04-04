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
    "4yc9U74a62Uwi8N1q428ViYXs6RzesM6m4Se4ThxVSt9JormixQCGdvHp59NqGE9dkPwe8gFCxS2rYoJSp3fR91C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s4SSqUHcRai1cHszaAUDLUQMKxcQ8VmjmLKssgtwHBgkhABMQtBPWJP1EYPCvwYQ25jBzcUxQRWzu3Y8nA8mNtk",
  "key1": "4UyKSD4kqwjbvXB6TfQYzy4xzp17Ui1ruV4cwJ7V9jRCDirbhocVDTK199sPQyferSjgfAuY3G37irgdoDuoMWKp",
  "key2": "3RiWqxJoiVgbmTUfJTd46AqNBe6Y29bdgzNKosvNMTC9WkthYjZcCWQrTXZ4rXCoaqPS69PptWutqBjDV8AF1jJ2",
  "key3": "3QyC6rsZddpqkz8FAi8KvR2t5ymWUHtSCFTWQ8Xp9FER2y9qUSphP2outdACBWHZ9JXCd6YvmA4b1uJNrSRpY4M8",
  "key4": "2uhs4k1Dk1qJkvRjtVBQ2MUNwMCGvowB3BpvrLVPnJY32kndLc4MBUSjNA2MBp9LpCjRFD4qfjfWEJ8vmXspPZcV",
  "key5": "2LGmH3akf8CeXTyadynK5gtd2WuG9vBPG12UPXxGoLd7bzooACWfYx3nVY4fYPaUGbJFfRyMa9XB1g2RqfxiiRLn",
  "key6": "4hXSfLqHfZz6NFbZG8ysrZ7kFVhK35W3su4gCdyM5CSbAZTQ1kUJeyb88foRdcGNpcxb6jvVUcXZ4jYVbz3G31q6",
  "key7": "5fep8unMWc4U7gAbXDsvdbUpaRYK5ZCigpbUn1NXL4Cs64vBcUBz4mjit8nFsmPS7K3SmjTga75wTpaJtpDFimEy",
  "key8": "5hMNgP4zpD5452p2wXnbUStXbMmTjyntXgFpxp7E5jP6bATa9puKPPvaCJtm1HXngruvVnsMf7sdhmBVmQLNncBD",
  "key9": "A2LiCLBUx9v3JphFU7aHYGxVZqmkHJzKWP7SMPnie9SGgDV87ybaRoZ25eiKVx9YkfXH1UJnsvkH9rmbMNhftda",
  "key10": "5Shwe8wQcZxAL9KdZUFn8XeVGDy9YVBVtEWxYSC59c1JTYQB8sV5YRMabrMbUhxUtRAY4YRT3vwqoVy4enEamcpN",
  "key11": "sqcMbx8viRzzhqCXGfpZWLdRbXUBmWkcYKZ8aKzC6Urn8crBpsquCL295ZUuofvWFrCndZnidy961T7mFmjhP8V",
  "key12": "374jod624Cjvy4QjUjBKsKQeWHFj23S8GboQH6BHpAiFLqUEpCSqzqKUmLbTeYwgWhbdGLuy1Jr8XEcs36Kgi5rB",
  "key13": "3UggTaaFUAd8hDWLeScYyBxEprNzTbTviR9Xm8KwY9UuG1cR8FHrRCNxNBwH2mJQjZTtma8VcDZk3zGur8zgU6gp",
  "key14": "5UQ3Ahz6npFxZhGgSuKZ9HXpPizr1soTvgqtvrKMnMXPaEq8sfeMQ9y3qWT6AKGEzTaxPkjuzUE1ebDmbNhjB7d",
  "key15": "2NzhFx97TJyECfCgwKffXyGBpxatcSMcP2fUyCxiPXpZuUpPV5GPcJiheLC4Y9rLx9kscVFYa5ZdAXixmxLCmbLt",
  "key16": "asFh7WtWmPch5uu89LTqXHe4Dz84CJngM3dzVkJGVDVLJWTBCUL1h3oUkM7YWKJjQTRsv1t3GXUDkbpCw16YTSU",
  "key17": "5ixm7UKcJwHYp3mZD5HHmUWaReAhKEHHG5vfqQ1aJJcP2Qodx952Y7mLeCBdtDMaz8882dqBZ3ugkXtULJk4A5or",
  "key18": "2rtaqNBSpTsdbSRmRHATNjJixAoMD4zd7fQE3VjKX7ZGw7xa12UC8D41hrrNLS7eWZ8FYFS73EdKszWF3d12Uxhu",
  "key19": "4e1JC4FQEppm7NSsQAg5MmaBT2TGoeVEKUb3QQJnrNkKmQgjZViN5xU25879vtfJMDLapA2SucBEX8GcwXLqRPzS",
  "key20": "2XW1vvzB46ZXsCr8MKo7LCWxjYPUEiuL9SGpakFS18WcTpx29Dt1wcbJHaW9qVpSMm1CmFqCUVMGBoJFrMjfhKnj",
  "key21": "56kQX7R2hntR7Fr68K8LefqjeRFuritzxxt9cPMaaWDxh2FQmp6q311oGrmbSsZahBWMn19CkiwvyaU9PQ4J1XPp",
  "key22": "598J1Zk9GZGTjXE9zFpxXspkHUV9cS9EMaFKBZEHMqZcTd7WdgVTKzmqk5wj5PM8QHS7tw8yNzeGsxVoxcrPTqtP",
  "key23": "2uren8Yn3W43RB3nKA171yvoYk8u78d6vf9jyAqhqazbsEopweuaZyWGuYJ6Bmj26T3KoaAtciXBy4d4yWEncmPL",
  "key24": "33yLjemogbvtqTuXUoE2ew5vD8SM3ptz68xCTNdT26qXdJEaegZKzJpsiKJbx6aHWULVM75E37aE3GNAehd9pfBA",
  "key25": "4ziuoyWdnsz5cdHXmn8PibWxEHpZTjzi7jndVnRVESNknDMpiW2GtWFE3RMaWEMvVBcCF8jda9dM16AiPbtePtZ5",
  "key26": "2zjyp26hwbJwV4nyDDa3YRuVkNASBHPjqH3YuESwUJZhXRWawHP6n2zjfwbKjkNDXKXpSV333TBeFoib6o7LAugz",
  "key27": "24U267rzmgTvUmooptKyTc6jkRApNGqSpjH8mY2f7D5iGuBFz13Ab63LKrNGGQWyQZKdCpfBJ34qCB4hHH5a1dnL",
  "key28": "WGy1xbSsgFArps2kaMVb4fsoQmx6yckoHABkMw5ATsKjMm5tBnQAjS1i65kKRjPQ5dtcZXQK9MQqxAnAsFjPDtx",
  "key29": "29b5MvqQutxnGc4dMgeDT5hYQVrt4kH54T5JPh4hpeqrbaQhAoeKhB1pmfqLPJWweeMsSUxqCAy44WgPaZCYyBHc",
  "key30": "3mhuZGfGnSNHA3EM9Tb5MTvRA8zYKbiAq6WGfbGp6uXVdUe6XxSQKWmna4fagZk6VEJGjWMA86qJuGsBFsKDQEkm",
  "key31": "3qvAVG7wFtuZtmJnA9HVwMKY1Vb8wF2YKHQ4rXnsjHENv5QbsrhPkQ5WSqA4ppLiNX539DSnpPvDdZ9pn7yvpHWs",
  "key32": "21WdNAbTLiWRuzVvEUXFANgJAfiMzwetAbgHrd6FqJwYVag3bZAFYDfbzUD7z1Zc4PM6yvW8Q4ip7EKFvSMXatrs",
  "key33": "2o7X4S3xMBf1TByY1xcdbP3Gtn5Wce6w4Qn5yEdUT239xJsKeFtTeNWaGoG265t3hhwVa65ENbe77fcVBL7sMfbF",
  "key34": "4ZHFeEHgWbn3ZpGgekX4CCAwhAhFGrfZR3E4jweXGpneR7q9sdGCjMopLCr3Kq8iXjMAjUwn3ZZNAuPLgTFECKiQ",
  "key35": "UatV2GEyGNCfwcdnWokqSEjH25nGTd2jZyV2CDxpLiKt7Gfc6hxt3TsEJGvbz2FqsNPJ1MW9UbXTSi61tG4E38s",
  "key36": "5xfwYEy4tcdhaYVinBoGhYGr68tMQHTuKuDx4Hstdm5JF9mtUCRife2yjYefHPmAqep1Ta1wrNCAz1q7635fesNv",
  "key37": "4rNmkpVruf6kxrkiR4dE1rCNNaSCNgfADY8qw6BJQxVymQJgW5yQRdJt2Lf5Sb5eU779QAVbdqFZnd81d9RTZLbK",
  "key38": "3GHh9kVMfvnD6XtvW79XsiXQMSSLKXe4Yzx73qduphAvvgXeaswsNtVtQRx6zCKv418rPJQKBC9QWF4QWsUuweR1",
  "key39": "4WqS2F7xiQJKuDx9BwsRK8JFdTJoJxFuJ6SBgtgJy2M8poWApAVeAaJ9XyqHDJK46hxnbYdydkftmap1JFT7N2ty",
  "key40": "3ALjwhRUQr6KJmrL3h6wP4MVCK3MizSLvPCpRNaA4i8tUuG6oySRGMAMPrsH6gKDgi5Tv33coZakUhfxrjVskrB8",
  "key41": "5aeD3T1xRNViYtai99BezJbkYQP1qZs8p7S6nT8JRPSbSBEyYpcWc1mpNtrTGMTDUADnH4tssmVVchaJEPbv8wtm",
  "key42": "3KHSCUUDVfXezhHt8sLuazseGnJ3DYLzM4zrgjcwQQR4ex5VTkr25FLaFaPcnLw1tPf7X4ArWFMSUCaTKkW2SaTv",
  "key43": "5WLoes88nBsvXqDfAvmNiR124hs47rxKRCTRipiiV9wDc8gCDxf7VTTekKPR5ccKYFVNU6MBNPrfNiy7mFzjNZws",
  "key44": "5CDaAgoHeTQtFQVFYFeK2GMJe8SymBVcHC8TyGcK4VZgwoqmDhfACr1a4toPzNrApwu9viAZNNuGcM4XSFhQVFYT",
  "key45": "4YSBBD1LqcJea3EXHqWkzjthkrDYvQNZvmSay46gRY2KkgUU5gXsGeZGKoDzYtx4vGbsMGSpvUhdGsPTCx2jmR3P",
  "key46": "apCoJLUXwH3BBL3PHN8XPwa1B1t4fqpNVYgNYCVLCowfXKn82Md6U4RKVeWfLcrwbr2xAPcxvCsdCrxNFcysLo6",
  "key47": "36NZuVgm82npCT5bVWYJkqFEwgEAzipcRhZEcbxsfNo7UeKTCeEDLKMc5re3BMC8S64MmjZ1CRYHA2C6Ps8XHohd"
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
