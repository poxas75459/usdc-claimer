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
    "2QNbf87X8SMY6XsmwFEHEv7KwyZVZ41n8tjPqEnteDGbSdWNi1hvZrTcJ5VC7Vvz48KZ3rBsLCUm5dpP8iWgWSvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nz1N3C8uu7Vu4CycWfc9tUg4uavVdiAnAEFkzRrhFMkC11qzh3G55StrFjZdaD1ZUTJWub859SdXJ2mHFPE3y2B",
  "key1": "27LKNEyv6mc4JpnRr3seX3u6S4YgPimU3hywyBoHBQo71YwH7xkovY6SPiVWUqHJBzZZTzpy39AFLCg4wavWTaLy",
  "key2": "2urw4SbGMQEcEdRiK6Vo6zi3si228kEJSYHoasFtE84Sejahitq5EiW8fszx7qTFLzKEL9RWqat3R8H3WQULtikh",
  "key3": "3DTkadJ28GvpnU6L5q468JPc7k8Sratc1MYECpRqLBFBC7JqXETUvvdK16P2c55p3VejFecf1sGbNmrNaNnpk27Y",
  "key4": "5oHQ97hrx5bGyYbCo64wDKJpfJ6HUV9QtFXnao3udww6quHtxDubM17aUH1DKBxCuAJjtoK1y4CnKdZpdDhFoah7",
  "key5": "21MovCaShmaANdthvBvhfgyeXuJAvuavfL5dRrDvncRdNevMBdy5gx8mpADYtCipMoDwEE5zdXp5fb34VbTDogvE",
  "key6": "zLYdDjtTXCZBwLfbaa2ocs1e2hhpJdZM9yv9Kj1eYFjL79BjWoTvE6rx5ztt2877WdNarFUZauuhKSMQ2VG6S5S",
  "key7": "4xbdiZH9x1ZHCuCM3CXfs5mLjeAurz5KA5i8CFHr65ZxLRQjRfb31JwGtAM88aTUW86hCEKzLTEhiZ68NAxtiu1T",
  "key8": "LZ55V6ecu7Jm8psbS8BPVe4okp1NGv7TBTFM6AEB1iWx8QeirC1iu6MTmwcbjHuGNwpqGy4kgnkXLA47bFsh5r8",
  "key9": "32WZpbwCS6egXKC5BKjdwERM7KKNNBmQq5ZYBVDH752hLHwBjFQdWRdymUGofMeVMwkDAhEu2ko8B3PkiWuX7NTZ",
  "key10": "3XAD1sxVfXjH4VuE4W5V9hz47wxVztCsbF6cFc8DpDo16aXtmCktMWLaEW9VMfCCWA2FbSMzzcp9Nd1drZHKpwhk",
  "key11": "5QEDQZ7rNayKPw3cbbkAcsowksGs1nk7jmZvU2yW2M3j33F9twEpktaS14AySeUE1jj8BT4yUyEsk43dDZVvzVhe",
  "key12": "SUL3a35h2vxr347Mgri7ff4d1xx4RUCuE8ej92b1AgRPM3kWj4mXf9YtLHDmGCRWKs3FGoyK2cXfMGLoAQ2oG6g",
  "key13": "4meqPhr1yG9at81DUVLi2Pd8fPyqJperqCADM2FdZRbd29G5jiGYVzmBP16Fr3otshXmPuxK7Q3vUqa27sLLXyQC",
  "key14": "5hW28mnciBBL6REDrE1w72z8cbZyyaG6sjgU5AH4LS5dN18YnGcMR8KLA5TnjRLvDvNGa8b8PcFgXkTMjqgv75ts",
  "key15": "udKiovybkZSKMBDd8svGE4pFdL6CbTaSX1NGfgUKxBxHiNHCPDSmm9r8UsmB7beSbEPiGmFEfPCSDwUMweFxpVw",
  "key16": "VH84NWC7ciQwWXM3dGKLmhm6CRQvSfZM856vF928ThanNMpV15taEPtpRa5EnCbN4xtadqQZpkWFzXJv24rK37W",
  "key17": "62fXc6crCAYn7HwHQrNz23mHaJrRBsqe3pK1wBSBhfZPnS6y92TKDfk9y95eJh9iDeW4zYbTBiaHwTib4ZjtmGq7",
  "key18": "4ikrsSinnLW8HJhsCyekx22YqAwGX3zVzs1F1Ed51CKUdTg962FU8cRAhMJJX8fKkf3opwTicAXFfWAJwKGWKhhf",
  "key19": "5VvdcyXPWXeVyZ4yuCVdQGeVgBQZpbPpTKNDg3FwtNVVfbkXKEPaUxsVbk2S3rgrNgUa6tsF9hN7SE2kBN64Szg3",
  "key20": "2HoewXfJpFyXaWQVqsJyqeVw5b2GmzPB3K45qMcHjPWaErJoRrdkpVdhBv1C5RPGa5rMPVmvjh5QLj2UgDZ6Mbwi",
  "key21": "2H2Y44gGH6266hPJaqencEYPuBjytkntLMnCu26hpDZhBeyx1mgDvf5toUV36jWedYpeGvY2KDQAXT69j5CWcTQ8",
  "key22": "m5C6dVwvRqhH9K4goSxso5TgnLbf4HboGPACpk6iPHHDFShZSj9X2XZLUuUnD2zrzLb2QLGgL8M1LZW9WH9yc1W",
  "key23": "4DcTgpYqY8CfcdYXvffFRSTjGTKQtLqJFHdy3DrXcQJpGh8nxs2TtH1ksGMnaoeufYPRYurSGfQsVX3RCPsDDpUh",
  "key24": "3PHmFbY748mzxJSvpEhmb4Cw9U4B9gcbK83crV5oaXCPzLTKqKvd5fyCjYmheZ79ePxpfbjLViT6W66C7318o2rz",
  "key25": "5yLJx3LFGS1mjNKgnghci8aRLmumb8kF8vJtTdH6VM4KXL9G3JGdbQjS7Lqqe6r8giGMgrTxCPA2kTfPgQLS9pis",
  "key26": "3mWcvNLzFcMq9zGwYRH2jvifq9EbivWUrppwXJBWvhcXFrWSBGYYFabiFvAPPMZGTa5MV21dKMA8eXgbx5KRWvg8",
  "key27": "33SqEENjinMPw5kcdUNSPHEddBv6a5jbAVus13v7aRc7ASfimyd2PVhdj3MpxTEUBJdaR7oQB4FEpGesK7vQ8T2h",
  "key28": "8kNhBRfgzLaWizvp8vCXLQM1cMbpLtVidrepL6NwA88HyRuuzYAzpfGm4sgDVaKUTX6zEmAvE5LU838RZp5vGJH",
  "key29": "64uKQJpJdG3gsUbL6fSQnPcUaYPMdrnr6CKVZveCoFQyRYsurVFSM1WXEH7baBtTrDtcYXckcN2nCubzWL1Z2jcW",
  "key30": "p2XFDX7BbXJcsrYXB8uGZeAbyQjCLsw5mDCdd1umHgrbjNnXA1m1e1K6qt6yprff66gcP8XNAKSZmDD92akQpn9",
  "key31": "5tJz87dQq9juEVEPzRuPqCuYomxfsaspMS2cGbSFP2UbgaRdkpEs8oRiFPZEHGmucsKRcLQS1PqYyVmATv4qqdKx",
  "key32": "2u1mfWena6aMBdfZyZoDbPXPiYeoMTXprYVpbuCt46t9xTkbtGwbKZqQatwC3T46y1fj2FWqkwA3QjaaWxRuHB2P",
  "key33": "3nyns6Zg2fvardE6KmVydTRwovbyS7dCbpBK8uDWUnQuL4bf7DHKpTtNcNVmLE696WKkvVPiduvwGApH9TgYcv2F",
  "key34": "4ydgx6nYnhMwbUMzi9QfkcMsU7yr6KejeSU67ZYwH3kFD3cMs8rsN3t8Cgn1tk4fFCRutxfHJu8xPG5UpRTQWMAQ",
  "key35": "3j3eKmsqiiAiXfVgCMTYi75nCWCcWiGypiSVYfH8uak5dTpB3knQQXEdFBvSCKazTyzg3yAxdbugGpJPqFAYs7ZS",
  "key36": "cnrUqUfUYTjttPEbshsmjswzvTkYuT7DgVRotCNdE7P8JSXpbRHVD1c6kMofNJeLqEopezf9xsPSd6jPeQ6Hzvm",
  "key37": "22GL3KSkRQaKpNmj5C9unBFz6cYVwMksoq1nza9rx63n6t51xaWTx36L4ZASBsL4FXhNgKw5yRvUjXTJQMxCuE9F",
  "key38": "2Jiuc2MxJMqGGZKNh2VhRHFdM4RgMrEbBvEZWceYFqch3Fa8cgiRkmJ4N7KGSt1giv1Mt6j6ypgNVpBaDG3ZUv6E",
  "key39": "cqYJpm8zWNQsq4V8Hp3LVQrSnz21uymVbJMVSkK8HWCqJbYh7do4bwYaUYJh7MNwpowi9RqZRpRWYEUAgVNegD1",
  "key40": "5gPS93ibUs6qtbmxDiVSTvMJsj4emygENNYpe3JAdwErVHzF5a4CciTXjEQRVaUT1CNAmUqFtm9pXqcsPHN4RTZt",
  "key41": "5SX9KaSYSKmQ8uiPzqAWQDpcdKp1yudNmEpz1YvLV1c7xkTvWvPGFUC3P8AbhZ8J6k5Y6ER3wxj1QHDEHovN1B79",
  "key42": "3BTFzeHrJZeSLtyMZBiqruj8tsa9KsPHbEwSvJmgvjsFZtZXkmZD1a4SdGpbtAh2Ue9gFcreykE5xBjHrFZsEpg7",
  "key43": "53Y8p8DjW1oejH8r53kCUXftMJShdqmcTuAP9M5fmuersExgW4TfonwKBYpg5XjWu2UgqJ35CQVv15BVv1k55RaE",
  "key44": "65pT5fZzeq6JWgpUNaMWZTWwJoAsafb1B6uAQ1XakNV5MsjpewdHYMtAduqni7BvTqoTaVsdGcVJEA6wm82Uda48",
  "key45": "4t8uD3GuKn3UZAQckEtivyjSxC3LcP9gJXFMtRh11981JuxdM4N3QKVSAwX7LuQjPQ9uU9uRx5CyqEZcEfZ7W7HL",
  "key46": "5FnWoY2cpXTAeX33U4ChsGvpHKkAQU8nX9b6krUyR9LVe8Xy6zSE2YXocGdMt5cGVBiAU6N3VEfBM5LWr6vRkdZb",
  "key47": "3KeFUMGnBdCLkGEDA9ptkzUkx8CRufmGKcWvzGBwQtJchdPGeffThg9C4uVCxp888nkwKiGDXDmEgsB7VfSSQH1g"
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
