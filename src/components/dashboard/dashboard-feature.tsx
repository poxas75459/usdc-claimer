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
    "52AaqChyNoA4E24r7SYhrx62X5F4fRGGSoWBBrDVvDN7N9i8sPd9eTJq1HCAHEiowKea3MPCbqfDcUKrvoBSyhLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ujLByarcwhG5nzgcTQNtGb5XKrbdGa5HjQAghNcfbCZotzwaPD7ybEsiCPtBPc6n5NHM8q1kfbkiDLjXZE1jAtf",
  "key1": "2QT5MQmpEyNGEGwhHRxzh4LEW8yEDJjRu7zmdQJ4bBMTncBFtSWTxD8YvUsmXenJWTq4bA5QhVGnJxtvHVVyjWg2",
  "key2": "2ABi254Q9HXaAWo6Xh7UeFGo3JVp6xG8J4ySzS5S2jDG3oZxgSLDXxUPD9zT1b1B9edK8vxVBQ3btuHxwhufJrJA",
  "key3": "F3yxFJzQxshcHnsZGCQSVSHVf9TCje8j7thaS8GgapqUTwHsWSb9iFEznjgPd4jGeLoZqrrPz8tvi32whnvz5sB",
  "key4": "4Hmiq9BKfR8TQE6DK9ApT7LwWiG35QMbaQey5FoywjeD4kFpctod65ZPJXV8pmhCyGb6m9oqHQDpyRVRYBUiEXVb",
  "key5": "3fUKZGWs17RZaFWynw7iLWCchvoXmeSD5y8rZU1KJszhT1MFZ57ZkToLbnnJ1miLXhAHSGUYsaHsfqgfPSdyUSgh",
  "key6": "3wWLoMEXm1q4rpUFhSD1p5PQrYaocVHvwYv434TC9uEryhb2KbPwz8ntRg7fSVnAeJ7wRqgwtLc1R9Y4kpfSLT8Q",
  "key7": "5aBY4srthQUuFW41se9Mb8UMmwnpmTJ1xVrEiXBjYRFD1ux8jeiuBJeK8PgSuoNR83oiwWoRguTTSnXRqWJmTYka",
  "key8": "4BfVf5gkDXG1ZXSsdF97m5y4oqqs8N4v4J9SEmSrdZNcEnwaQT39r9qU5FzdrvBUFoYSr9qj5STej8Ut9FDxNGv4",
  "key9": "4b2npWoSzQjF2Mpc1ez8RnkfasZHYDStrD2cGDREhoRga5VSHKjADDMjsfCzxKuCyrgb1QLozQd7HD9hp6xwmReM",
  "key10": "5ZyPnhoCGGLTxB4kXCzUFetuMbwUq4tV1d5hefWF2N3u874XZo5i8A9iKFRKUB94cdNWzXVFHJF3R7PdK1iaukL2",
  "key11": "GaybkpbDz288RpScn4Dy99ZdZjhAuehA7J9g7xsGAHZZmNtqUCcu6QcFmNtpJkwXPxAHATnHoAaVsKcvhFPnYse",
  "key12": "5Y5yE5HrBNBnskGGT6e2sQWBtWQ4LHTdb48DanwceQADZ5FKBHAWCXbES7iRSjCXRu9ve53cEZhez8wyi2kfosw3",
  "key13": "3jzNQ4ENbTx1niRAVsqDF5ZR98gPug1YhWsEyL3Md3NS5BcF9UDx4HmrSjZ27VpD9CPfvSgMhrZoJvimrTkQpReQ",
  "key14": "VsDyJi2iUZ3AxUoEa4RvkdSUBzqesNU9zfM9qHvK5aCAsEAgNpa8htS9MdJx9QZtJt5AC2SSXSbZsvQPWBk8dcZ",
  "key15": "4XKiNhpDs9Re1GMXLJp2aW5uSRHGRXyoNnhNzfEU1oCciEdQ18BJsHUAMUeU8XpHYbqyJg11P9V1xAqBVdYXYfi4",
  "key16": "RrHyxRR4GZ8EbbDD47GtShDXDnYhpFm3ZySrLPuLXRRK53vNN1AB3jRgYKeFAT76HtYd4AxyVcTSSSAHEim6ESD",
  "key17": "5nyvB89bCWjmwJAEr11otXemiyxL8FV6WWm6BumDHg4C5JeZrPrNX8sUbrAVtfsvqZ7vZzKnsAZV1XfdGLM351pv",
  "key18": "3YtGvyvjQRYLDe8Tx2boK9hE9M2ZRkKNeLq7by3PpNPT3F8tv6QMbKe4fCFF2zCzczaHtN1xH5koLiGnxXf4Qkem",
  "key19": "5nZBfu7X5joqVm9xpwScKhLRjjgjGoA8a8AffpC8iMtqQAVCvatjnEF9K4vSgKpgeZcNFTVm2gW7tPEro4uRDe78",
  "key20": "4ZZcV6vZ5ZvFGH8j1YQEVGpeYqZiQajaudoQLt5egU6cQKvCRsyVqbaZcmBFEyifEvYEcXC1kQY55QfR7KmaVaTL",
  "key21": "5PncRxK5HrUdPJgWobrDcgNP4UZEcKhNHd637aSUecRLeAfbjs8hkWTkFumXpjd7ybMDWSwRtK7HBFxkEhs9kr76",
  "key22": "2Hab9UU5vPVDXaUxpaskWphkXtG8BALC9qs21ApNEtdH1T1gBV5p5sTgov51GxjrBAucgEkSE2Lg5Xakj3D9yuRA",
  "key23": "vLK5TW6DVE6cTvCocUNeGggNgfni5RcxV5ZNGaGcq7eue4tV3joTcyKKojibsXpSkcSVcGeLhBKywAGfVc9p8PB",
  "key24": "5JTV23TTdYX3dXddVvuMRS4SKZZ4NkrGUVN2cMcwd3jDcgfm6wEX3NnePZNdAU7qB5H4oKCypvZj9UfJFLJ6QXFY",
  "key25": "YhjjYLg1VPauccp5awtUEaenHc11nXYamqbaPF3R7Wp5G3KQxHXfhrRTLr4CJ2JBvYd3BPTpMoXjktxfDZbzW5E",
  "key26": "r3iHedbhpP6PjdyDmtPuVXj5Jg62DT2MyKCcq4PVoLRYFi5PnsF7kUAUVReJwo628qqAk8FRfXZBj3BcjiqyZWC",
  "key27": "hn7G4BMTEsahhRXbtAyScQJ2vvvbp7oaJHpatg25Hk97qn683ZmZkoh4ahx9WTUENXKDVsnvrWogVjCj5JoPVnu",
  "key28": "2MyiV474X4QudPoMSSRjAjscFzbF9nMunQXt6w578uW1JLzdPU2dUGTEcDVN6zGywqHA7fmVkFeyFGPfsJjNgrvY",
  "key29": "4iSefwo8q7uZjZzqAhmRQAQUjWQZ5dFmfhXhuTCGxLRkvJTzWBGG2vfU4Pe9qfSLXUT3kMsNkQHTvJJJjXbC2dhD",
  "key30": "2UdrXg7PQBpbuP689sBzjdn1FwMPUtgmLfgm4ttkdWJ68iH6KkBip8UkaePSXugVKgNBrNSgzxidkVdFZDA9JURz",
  "key31": "3WLtUngM47w9QocVd4K2RVTqjRJcRZ2QyFgazLUQW3Pzs9osaPK5zQK8VZLMDS9JV678UmXBUUYeFLbdnPXNBcPU",
  "key32": "3AFoiF7nvbq8wULdtgwngAWEVVug59UNBF74UTiB3UMYLSth7cNZatVxsNJFUCRju9yifNpgoYtbhAYTyp8CRtmv",
  "key33": "PH68fTgZ4j2XweLnvwJ85WMDo8qvuJVtj854i2SJFi3MfsxrpFdh8wrjxAL4Xnmtjp3U3ucPBjV2GemucvbqFxA",
  "key34": "1u3x27cD6tYWZvrEKDnpWXRfaYjB661hKH88NNvK8wUeVvsKTuBTGnw9dr5Hjf48HpMm4Taa1rKd6eFzjVP131t",
  "key35": "51HyF9TwtVmBSrF6LDaQLPhnWFP7b3oK6soVxC8FCiV6WtiGEL5eGDqvg4Nw2TKRy46K9hCeGeF1cCu2djnwPefj",
  "key36": "66T4JdBdCiHHhYpwHA1fXTNM58rQ55KHTfRGKkXbiLBsYshqjZRBp9kkx16W78JsLXrXn5PG929rYtHppHX8cjuj",
  "key37": "2GL93r8wysbJb7UUMGvMZWT7JXApdDKmWh1bpQ2pxf4bshuEAc6P8pPb5n2mHSrqPdZTMLRosxLv8BiKdt5b8a51",
  "key38": "56EyeNFpavS2KVu5cXrvEnVoTFdtUnwG23gNa8qEbc1RenaNUrubterSofeYDZYLx9JqMGCxyLFRwwDHnBZHEvyE",
  "key39": "3uCjj4QKF6NW4gx8P9Qr8HtQCQvf4trhMgccU6s9ZGtMf2GzNBK9ijqeaha3KZnv2JSKQmthshLAxF1xoPDortov",
  "key40": "5Gyh283XaR86VYiWUpD7dPXAn7muxfuuWoWpLFUixbex8ytBLy34rUCiQQBBS76PaRbZ2mfbiLDku3o8DioKF3pW",
  "key41": "2VaeeYpYxke23dXJdfwvxjaVqoYdJubnuzVcBpCJj2sNos5a2Wc8NA1Moofag1i4bdSv8vHvUfegysMpmp9dpCaE",
  "key42": "Tw6DdJHtX3jnD1dMWAxJ1da4Cq8xBSEsSsxAKLFrsTkqXZ8ezKdkfdCjXpSQAwuZWTYyDGzcpFxC4anU8Y6ANLS"
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
