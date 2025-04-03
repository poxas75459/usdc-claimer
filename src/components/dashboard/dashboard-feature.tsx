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
    "ibzaZnAgfc5qJXPzvRdCUt3TxVxh2jDYwRY9ny2ok7uSX2pbkVZFB5Go9B3LHRouYAQmVGVQ7GBRxwKuYEeoz19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rf2948ZNLKkD5WXRAwZLkFztCewkuRv3xyrrZqtZSpkQYJnSGGC9TFmRmww3hFivsMYQWLkTw3Gj7VhTP5hWmMA",
  "key1": "2yNtvj8aXxF6pJMJu5Jp2rvLxp1dWchiBuUMF2PU6kxnPCHWDCCjAwR6WwboUEc2oBMcod795YJLKLbXZUKAYKbx",
  "key2": "rrkGbunnQAWcwtDVKVonFX32STQSensr9SYGotC5Dusm1K9xdqdT4n9yv5pgaFJkEEA3KkHowqZBEDnnYCy3SUY",
  "key3": "ig1zxNChHUbSf2SmAMvpuDHyf82PN6DsxXxaPLxcsEpi7T9RRqTUbD7s4p8mrPbKjL3rSAY1kG6AtGujx97zUk3",
  "key4": "2ExzwQT2NFde1ucDsvEthy3tMddcdeDVW1KCqRtSKd2CXdxTFxn9BLurDf7NtvghFd23Gryk2tqtjaiXHZ2K1Haq",
  "key5": "mDexNMyooCsDdy2gp4AsEP84UitzWJeQopUw53oLLFPhzG4bbRhbvDfonxZ8sUkE4heajqDg2yvg7TSwsZN8734",
  "key6": "4MCv7axZUxXLsBsKmKMpb6FcxjVxXwdhNf9TcjSLR8dnGPNJhaBbe1s8eaSHUmsadsh193yMh1mqgmoRS8yTWaPG",
  "key7": "1UaXuxc7u5uLpFTnyxDENTZMY854VirXbG9AVdm4Vbrxm9QGjYh95dH7VZzQcD2SZgcuFPsEULtN4AduHLShpBt",
  "key8": "4Pk2bdRXcbPRN8HF8hsNgso3A1qE2PtZ2aZ7KV5Y67DzTy7D7XPHD4TfpBcZVBkksYR5RHxWzQpjFb7TjFRt7frH",
  "key9": "3fnKaQBFtaXkXsC7LXs9DGHXW1LuGE9cQx12Ukkm1UQFUktmfYbeCr7qkx7bo7eqJMV5VoVD24VDnUVmNaymEpR7",
  "key10": "5tVZXaeDWGgmZiMeGk3j6VVtaPcfUBU3qDSMeP8sV3UnMznwAAntY3SMWxEbgCdjf3VKtyWyXTLDBjCKHUa9AQtu",
  "key11": "4DRyn66BPnAvQWh44efrqwP8DaQ2nyr4U1vqBapN8CbCGj7cHeptEXpMUqNCSmjLm2D8jDeaYu24UK1nWSuRxCiC",
  "key12": "CvKKXSouWih7DH7H8sA9wTVCanp9mYjGQrH5H7mhC8n9LQAabrMGsxeBccZfBWxdBfwzkRqHLd2dXUEZ46oJ7Km",
  "key13": "4oHkxrsnUeYymZAfzmpEtx2ZWBJQi69Qiv6tjrRZmpHb53dAnuzxxeUeHzrTFkQVyTkZjQ1M2BSjXGubC2TnqkW4",
  "key14": "538Hhawq9NGYWJW9mszMJxT6gm4gCMHJEPafqh2Fb7RQq11No6aREGptX1pC7T82QzPgBnh5m9diKWxxWdVWEEkG",
  "key15": "62bvd2eM1MRBsQBzjPL8cuH4iAbEgS2wZTfGi9jDV2Jk7kpYcV5LNhbkLRFWheNSrneaN24pjEp25PND3PdKEqhE",
  "key16": "3Dhndit9ZbTVtwWFhX3Q3MwZupUfuPWhHJKnKoWng94uvLr5Sn683KXPsJNyYdaNTjy9xhHpHexoWj8o8o1onRQM",
  "key17": "4QZexX1sucJNsk61L5JhMTbvXPEka9eWdp5Q47CYTy2Sgvhc5VpLwpSdaLivBtfkj1jHQbkd5JSM6CitzQ57Rprm",
  "key18": "4QadvRxRgqBrwFrga1tccoQqDueUuoTcXS4iy9fX59AdB5F2ksmka5PqtLzvgmKmoYQ5KrRCwAXzFDaWMWG997Yn",
  "key19": "4nXoWUWzwAEdu4HTDwC7QbWvDR62o8Y6M2Gn4At8utmcwV4YJwRr4eHki4muJ7qBX4RfDLCGxaVZyQSsFvTU6uTj",
  "key20": "5Mq37vVcx7z8raJXz4kQ3piZ4gXL8VacTnNoALpW3MM2xc5hdVKKcSGy2sKLE5cJqCXJsiXT4Nf6rCxsbRb2dYEZ",
  "key21": "3EbBEqm1v2FGBGsmvCcKaxWXncUc2uAYntopZjnyt8khNMjwuqAuwaiFHJB1wZX5uF8g1L2tm7mWqLARgxhLEsSS",
  "key22": "XqvRU9hZcyRgXtbYtGzWr5ZrgiH5Hos2SoXRZ3bYGPxeVp5dbjccKJiEdc5QH69GiPgnYsGrXEDrvw322d7pjTW",
  "key23": "DpLTU6ExkcH6KT9qfYnYGH6J9esrDZ8CujX2FWBEyUXmBZr1eUCuxvnC4g9vGaf3W5nYpq4s5kqe6NBhgPmMnBQ",
  "key24": "5pTek5X3e2g4Dcbku3R1dQU8d2UMn8cuyoeGPbhQP77o9Qfj4soh3rzuzyNCWUAgicFBUjmYNv2ZuhPt92GQn2S3",
  "key25": "VofzrRKesr3CqsXBYA1XaFpAwxaYGrePimbBpjXRnWCRzN32UpEsvXGLaT671jLE88EXZuor8zHWrYXR9cbRam5",
  "key26": "4oo313kKAnsiqSmjm52oNym3y9UG2jz65X9H7qLGrjbevBecH1g6ncNDuW89zvpdZJGWWPdQqCA9La2k5PSBbMLP",
  "key27": "4Tw5VB5k7ihQEck1jar5DHZSz1jCHTphEVsUp3Xa9sk3wzp6VAboZK3A3rDy3NcCoDiDKwVjtScdGcMm6g18HR4E",
  "key28": "4FDGCVLAZMXreUi8BpN8jW2sKD1ZVT8DWDLUJiL3h2oAzv6MnTq8Y61ZmS2iJTMxxzSrCzxDSsZ7fivYjgWou4ca",
  "key29": "2Jnss9t6qyPUkgWx5ZdAmyE2mPAsCYnYap9Ej5yuL6Q4upbWF3Rt2juCz7DHWEfxqv5P1agu3ypD9AZDQubCEBZK",
  "key30": "3j9h41urcZHUzLhJZAGDR2YC84FgGJjVSXNF4t9N3HQ1QKLv5G5KNcvn1QqToFS134d5g8GHCAKYSvsr9rHzF5Ts",
  "key31": "4EPLGChMtGAvs24nQ1BVbc9xerPAxQxd8sVKPhAbSm47oSgiMPdufPUGApPp4PRZ3TUrvnv3fszDhyZ54Lzm9swr",
  "key32": "3RcjpnVeyzmk9T3HDAt2c2VRxBph63BgPiWXyhjvyuxvJU2CwfZjP1nSNAgMpVUJAggtbBoJyouvXXEgnLtSAGMZ"
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
