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
    "2eYnwpxkXC2LGZQ3rEbUP8nSFrguERnSzmEuasycaQ39dQBR5ZCrQY9nUAP3rhvXW41ZV9txJjE46bYqSptuyBre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tpiyP8WS339tBgv6hbVbKY92pyKJR1zfLZwUfaEkwZ58Ti6TLyNvtuCYdNJta6p7RPRcGoatMgBovNnDcQuTyY9",
  "key1": "3DRGFdCc34PAy4AQsFMvP42C5ZKw3DoVq9YGaHb2rKZk2H7N4X8SHaAkhCX1twzxN1EqyKFVEmYxWVFGX66xeiqZ",
  "key2": "e6YK2DsAy5ihV2VQXWwH8eUf3pSytWEQdhFeghgzhkkmEHRY9imzrkboibYXjeDzf68y9WKNy2x1ZkZyKRXcWAK",
  "key3": "5zLrkqLDfux5491nXQW6k4nzja9N4trREsBLeETNBN7rhiqReZa69BbSc3TgoMxdntvmc6KwwLoGWjKftkjJ1pDr",
  "key4": "2iVyRfjAAsudeMrKXGSjHV1Vjye3PmyhFDBQc53uQm2Zu3h1ZkKaZY7HY2wPDWJYeaecPafWey21P5mLBptNfQut",
  "key5": "5fD4HhV13gqBsbZt4q5CYe5S4aY7hJpQPRyLpnK5GmijbXzcjVRzDJLaAeW77dNRcwqEwCVnCzq1xK2GgVBmgEyh",
  "key6": "2CaxzkoE8GfX89YbDtKmSbGLt2KNGixsjNdZoTdAFTcVTXRtzfnixFzXDFFkfPKvzDhzPsSKpJzfyWcS1a8kgG7o",
  "key7": "3wUbbes7ek6DYhRDwPzPvY7SASS5thsRpeHDCBx9QXmVT4Wb9it3cpLkLTcVSp6NDrHWKiEeqTBDsKPop8QWM1ZC",
  "key8": "32MiFJyNmPSmrTg525xMvfnvJj3Na7Ea67sTKZPuUxvkUwXrxWhWWQ4kxQxXV2QSq794c8dpz57pYR9wMeQQNvoY",
  "key9": "asxKF2mbbED1FJYVRRBwuE1dgW7e6QSLnoq51bXiSimnRFuLQ2tsUmcpp5n5t1PceyeVCpwS3KCWDQ27gbG1gnr",
  "key10": "23nAHfoEiG9U8svqTFR3d2SoXUHhyCSxMd1m6buBjUMVxbF4QDj9YAtmnScyVeiU5aWPHdcgx9CnXNXpQ26iPKvh",
  "key11": "53vW5yLN86tpsMwfqTxKTP9tE2xjUUCVDnVBbwtS1Fzy1RaznksxADXAB3pHwpBA3uHfGzXfHNZjpzS64GFZSG5u",
  "key12": "3mxBu3qY2pAoD8d5JmUGbdn7RQYmGZ1jbSd8CdycbajACH1Uw8tsz8LGv9Vum3Zruwxt5GvSofFXhvt8nt5vgzjm",
  "key13": "3PP8Pts9dqTgSGRrhLtxxqFaHF2JJUiEMmKZbpCcf3nyaZU9FQyVkQ9uaTx4F1B8sKFM3Yhw2JeXyNMTJhSP8TyH",
  "key14": "3tQJUv24gXwWWVYfVMxyst432ivjqJZyF3CTvm1b9ehvXtPxsYiXvG7CgN3BnHA544cgsAP28XFTTDBCmrbtBYKv",
  "key15": "5udWLwitiLersxp5E5yyk4wnQJDae44GDriL3Xe3uDmUyCs4o9NpbUUTxfGWp2EQZWySQuufvxfe6TsYQRfsW8qQ",
  "key16": "3a5NLPBu9sD9uSGaH8VevYgKsDaGU457rVWwzjAMZJBhY7Na18ZgnjsZdEUZiiBt7Hwpi2sj7WsHLgwfhGZ9AsMg",
  "key17": "3t6P5GDoh5k2GpwtdR63kwkK2tYEfz3ppuLMMkGvp912Bm8vvgBJfbDLea5BUKyx1gEKDDuNoAqAY2N6Mp6V7Lqi",
  "key18": "yGPSEffHN5dHyVXvDbfdi8rcq8Dq6z2t1ryXTdsNvLa7WTEy2VFHBpCAtyxZvoVqYeYDLvvt8Qhwja88sqAjRny",
  "key19": "49uRMy4GTCZ5ozt6SE7byxg3pkiJCYbndNX1zoexAkqRNuhfT2q6qVB1HN5QwWzMZZtkkfQ4HbhUSB31D9EZ99ac",
  "key20": "1Eoeox6ia2owUHLzYRamPoLvvbAmzQGkqUpUwSyDgJxZZZieMjgnv7q77RfMBdpHSNqQGmTtHEAiWQrSNP9xZyR",
  "key21": "4tu5ur3eJkWMh2v5bCQUfthLWi3eSAZSA1cDfCC8YDEtu4HKeRBsYxeE27M1FMHqiDcHzfTgYHBuyHAukuDe21tu",
  "key22": "2ZKJJwk4Vs3U9SzgQVGRgwedoxLntD8mrQi7bnsy7WvUFRHofEatzSNMHTUS19Zvve11L14Du1VpEPcUXo6VZdQy",
  "key23": "2XRMXvVzEZXVw21YdKJMB3bMEaB8zpp8xrTZmwnaxguH2YnxCapdvhVooWszjoeY2RQZ7xMy3VEvVs4Su3daBEWM",
  "key24": "2RhhHsXWHAM9ZA1558SKzKjxJQoYYpaRUTsEnCmVQgAgd4VUfsJUwpuqWESJnPPUwEYaMiRcNmet2U3eJu35AWF2",
  "key25": "5GUNcGqpJdipUWEHBoLkMwTAELPYQG4hiJAoaoRugZZEZh2fg8Qg6skctB3UjV4V9s2rmaUuQr71ffZ7euAdsxEx",
  "key26": "YpUK7jfKcVTrJhMvCwkFT6yTd5AqKUQt5ZQBzJGUGgbJdTc2yqJ52Uoc9FEToEeurBNX2byvw44Y3RMy3QZZinW",
  "key27": "3Wd3sSwJpu2xQyPh6JFtkDKM7mGFAmpAWG6RktsVoQR8Nxu8iKGNYXi4F6Cq3ANb51gMM3pLFEw5T8LzhaTfhDRJ",
  "key28": "DtFxPT6QnFsoZF5gPMz2PDDKAmvfqc8w9gUayHqDs9ETEKvTW2UUcJRo82tQibJFbVKkuzQTmd8ScR5vGDUwTMK",
  "key29": "5zhkhKMUabBxEfbExQSN4aKG2pRfLaRkUDiaC2oHzVFCYFZpsQqFi4m5jpLiBVBUwtkM3r8Sj6SyhfQpGh3H1vwa",
  "key30": "3q1KaKU2JhnKGMc96dtAJdSAHY2z67daBimo7VMoesh49jnuuWRXRrvCcbyfWf99aKjdRTjMvcNEjXi17NTeYAeH",
  "key31": "gS9zRhZsuxFBpcjC1KqyuH9dMGc4kMEbMeaPQus2j1JcK73e3WS5T1TH3n2ihxXo9JymhuWywesYyMt6ck5FXoX",
  "key32": "5PQxwfvSQLaWzac2o75hQfuMGKJWfQvR2RVtRd9ccrU1d5kZuu8V9YEz2ymy8rCBmPPVTrptk4HiWjN5JuoR4X86",
  "key33": "37cPZsQ78yt4qFA4zkm9pD5n1pEMYW6Zs74C3rjya4L8eUbpVUAdTt5Nx6VNqEGiUB1QjgquT3qMJ6AtovPgF3zW",
  "key34": "tVGJekDRYyPVg3iZ3x98n9dshfX4UBcZEnx5Q6vNuusdYL1EhPhi2REtmk2zXnXy8gjy1E8D5qtEFJwv1HbjDvX",
  "key35": "mxCk2NRxGZpFow4ZivVKxoVrtuHDEFSsiz2J9Hu22foke1S4aTnVXEJySA687jDvBKZLyNiHAdjdEM3pxKn17Vr",
  "key36": "5NSRETeMSH7ZQFu4EscGdak2N3z3PJyEXARsJdGeHgW4yAvJbMBerF9GZ7KLrL7ADfNtPSF7yZ1T7bf3MvaP8vBf",
  "key37": "5oHGcPyGrRp8nuuZN59S5Gr428MKznMRdWiNEGeEcMMj3uWkAuxX6JKBTjhjzZq9X9akktGAVRMzG3ATXNx8tY8N",
  "key38": "3U45RpPnmJCgiaZac6DWUxAyMXsh9zF6Xp4rsFTmCcgH8sZ76o1vtnu4z3fXKrq7b64yueR5WEkqEVqHfwmDnesw",
  "key39": "2ZoZvw8xZx4LihPP6kuCiw69mnqzDHwAhZDFpc3Y68GzjmQZ6j1Neff8Sxu1n2XBUQNPUmGLUAEAHF6xAJJ4KHaW",
  "key40": "5xVefAvjpLynroUQZoxRVykm83dUvRzXBEQKUx1hVvT7wMPkeNGkRgneaYrRmSKBkFD34D5Rmh4oYn5iLnnrzt6z",
  "key41": "4eizHaSWWoHxAS3LqKL1aA2owwkFDHCydBvs2fTYTD6PwBeST1BBxWvr7LJcPtysX1kW5V3XEDEif2wgUBTUhL4k",
  "key42": "537EayEC2L98pJS1cmWWYMvsYapkS475fMyjkx58aVTucgV2f6Gs7aaGsEBa4kPG1Xtut5VD5ZzeypdSQmeYQKfq",
  "key43": "3Y8sVoTYTzY2K3APHM3SXF5bKTTcPGCqp4rb5tvBdFJNshKT3MU4Y3n4ov3B9PWCDb6aee2Re2RDNg8dVtkVoGta",
  "key44": "tunHS3hyLyJUtPuTQGt276UAFWhHK9v8jTYZ8aBG1D5BtvJNfuUmGbgjYdyqXnXAHmqVjyknTHt7UThJGxL1pze",
  "key45": "5DSPgVSpGjRtEudeYpYeM84JsaB6cRJqfaC3DdNsLVrQfiuCeF3nU11nBSEFuz9xPGvX7PtTh6pGuVizcSRAYMsB",
  "key46": "wkZoDw8CK4tfhbUhz5dgFFcZ3VqBeZsZojunZJ18a955HtUqGQHGgrrjQrqAneFbLbrwBcDXgQzfr7c3nFyRSxm",
  "key47": "3x8QYLyc5q5zaS3S4bsLNmwDaZ8xA2iGegF9E8FdE3U53tP6prFswukjmtmJNtb6Mw5iW3jDLmQzj5VTe8c9c4JJ",
  "key48": "43q4F63Wvt9KP5svHKHxkitDnf63jwSQB7zQjkSAp6ZzUMif2L8Mx3GnZrbKGjttUWDhRhviQ2opyDZc6ix3PPE4",
  "key49": "5X8QprRgoCuaLGV1wkMMw5dgxh2ELrTNwfq1hWF2WUNpuXRLeLYEXk4oQm4DaasWnV4sbpxnBq9gqcXuy39JPZau"
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
