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
    "52Gc7r9Jyrz78osZ1JVDiMtg3WazVBhiCoXLLxmciMw3Jq25xVz7YDJJKfHyZEa116Nq7hQtt2W8WbfTsw5xRLvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HZroDJoYnqmv3qbNr6EhYThZrz5qeMhd4Ba2YHryq82hkVA3RmpKZasi8TrWZnwZDKR82VbFpSu4Zvkr51BAFDF",
  "key1": "2NFQzdiUMtFRswsZE4HwKZnpy6pdYYJzKhVbXDXsVCLXGXvKFrvdF2qPahbKRevwXErdMaSvkWdNnBznqGegiPiw",
  "key2": "axeQLDdPMLgTihChq4i9hy7YtbkTNY15nbjkVkdPxjYzCsdw2CzE1e5FcRXsuRGmvVFc45p2NexPEH6rGTMhRF7",
  "key3": "4s5QJQmETEVq2sFi2z8gCe63y3pce8q696FvafGYMJ2uwnf1WW7knCoiYMTWkoxJPGptLNvtqzSmgkrKpJBLXEsi",
  "key4": "5mg7C4JGq4kL17NvLRyox2xHMESZL25qBDt3jUuWTZoPtzGSdin6XjJ1319uPuxazPkXsTn1enrH2BCusJWqLweA",
  "key5": "2PruW2roqYUyPE1gpisXgci8tSooTFQgJduksWCktrCZcM8EQm4MDGgAZAGmFfHMU673jN99GGNEX82j6Jghz2vL",
  "key6": "4iV3rBpQRCruBHSDLPQxLu1Fn9Cm4s25KnC43nfnPuSpvBKbHdssgGZLP9nTdzrPGPE7L38qY118AuEB6qtbRiJh",
  "key7": "5GKdkQizNq9Nr2iee1nVknNRYw1jAUkN5RYUUUAWUvHx9dSVtBoy7YrqxJF7BoAq2dRvUEXqXD1P38Wb4tBDUymb",
  "key8": "4XYd2JGPZhbo6bwyaPjjcjDGNtNaC2tfNeKD9593GGs2LPL2ATLHnwJYHG6GEP8maM2VnbdYARLCn45bFjreW96",
  "key9": "5KZYM9r8JWer9jJymk4QGVCAdroVX1mvC4WQ9xMvrQWvqzY35PTYh6yQZf3aRwvUf8CBEY1z7H13SCDE8VDeYmqR",
  "key10": "AFMqc5xP1ssqiG1U7vX7QNv4cQKDx5s8yBcBQ9qNx3JTUGDwEapNVmXtm1gLSjq46sTyV8eJiJ7myi5fH7SFT6B",
  "key11": "4VhFWTpBANbXd8RZJoWmkwGqDKb6kkvCE6gCDeLjePctiwuoHchHgnW23wpqu3iM9vVx1egGGz8jyydKME5LX61g",
  "key12": "QpamvagGzjV6kFyHHDgcJNuG8TkzdsVHWCAFtEkijnFvtuZiXq4aAjbNjyyqxsYVzavh53KX4ACPr9YHPn1QPaP",
  "key13": "6BH6Ddfrmhor7MM1RMgyvK3k5t4XGWpRzRMitUkia4vZ8cyF6VAreD8jkTC7WmRMD38RNUkdaJBoT6tqrLE212G",
  "key14": "3uNobRmzBX755FQQBdJnD7kCNnJyzqVBDpoi8QwPAytHipyMJ8HH1eZqpx7s69TPRzVvPxfFmU6FyP1jbSheJbmJ",
  "key15": "4fJyCfnHQ3dDYQQ7jSFgMF9tYrq5XMoW8NsBmkSKeP3SAuwc8JGj623pRu4YWd5kS4o8ZBWwUjzotRd39AoQ2okY",
  "key16": "3XLmWoRaFTMHuSmUSTDSM75nfwN7T3tC48K982ZNx5M5zVgQSBFoE84b6AfGr6FUjZ8hd2qSaxETQNvWY2qQ1NN9",
  "key17": "5Ej5okpGEnszBoNAbm8JbXdtM6H4zZsufNaTJaZ9WWFa5MsRMoKET77uYFyY1FjoDdiKnvz6A98qXciL7vBaZeVV",
  "key18": "56qiZ8Z9snE2y9sBaS211TVSotqbTv7PXtSJ5neUi9bVhmkWQntARDhjBbjy6SzccSChoqU6fL9hi2m576AUShbL",
  "key19": "4UGUaU6CZYW9z9yX49PNwhFKZyFYsBYGX44q4yCx1D3RhhwV7VYrh4tcpudDMeL8ABnRNBC21QhHPvkAfoMAV2v8",
  "key20": "3LR4am5WcDKxn5XSFs4B7HosPBSKqPHZh1gHfJ3CrUwGpdZP6Kjj2XwbvYpA2GbFJiNZLjdo8kuhaJH5GBMgkXdT",
  "key21": "3k5J3wjkhCdSksnfzTK8YGc4hR4Aqw1iBaL1CC67sGT5dHkiTYXqeNaaBpFDZA6Ht5b17HRNkvLrrrxwwhmrbanu",
  "key22": "2mHQ4Veums4HEjnqg6fQq52WDNumDv7APWCGkoyRfrhw22MofWhP5gR4EMCdpBDJKUipf1tMioo9KRcBqKgWHacq",
  "key23": "3SitRgNFa2EuZSAFb6Mh8e9reeWeLUxx9AQaY8Arby7YxtxCqVvzbjVzCs9psnD1fyBceT73dXerKbRij7dNNxbX",
  "key24": "5cLyyV4VHGphA8fTcCgjnzfyxyrZ4MSXcf1F72eJkcXXVwn9ZgXDwZxNpzUvjjs5D5xVrUDUCCcbH8192m5Mx4oL",
  "key25": "3ftJekzHJz8yUcmGhUfgyJrAN6fpsqzXUH7rkuZBSFxh6gfbh9EWDqABMaTprvNQRVVe7sPgytseXfENzupXFKnb",
  "key26": "4PgmL4kzYfQ61gWi8AbFfYLbastYjRu2ugddLFR3ykZxesn1BtEFZrG1do2ZeDJtaGjFpi96FF3fJpa4tAaeuvKV",
  "key27": "2y5uRhExHgyDhq5RPU9kP3SWdNQgG4kJu9L2ieNvGc8feDcgPZJvaA8fgGYG5zNDzhTYj21fct5fCbqtqy9eEj1k",
  "key28": "oRhMbCWLoGSutRCvsXG4wE5rRTAKfgGou9zugr2QJy8j2h1E4jMfFAT9pp9mLr7sDJo1zo7gbgWxNyAE5Na2xpJ",
  "key29": "4kJQNPDBwNmK1yS1EFen4ZfJtHhUbCbfT65AUFv5Dn9GaGXgZfYDcaCGLjaG3RAAp4dMmZCH8w8CmwqBzdhhMVEn",
  "key30": "4o4ysn57umvHdPThjj6SKqKr6FzoV986gSpccLjYS5rELkAFS8kku6h5vCM82TCndnTx5nMZjrzcr5oCsRSm2SkS",
  "key31": "29N1QFFTLfn2bpxQ6J9S3P8aHzsMVoKd2jhrNz4kcrp1jw8rnBmtFVrT9UAvcFwcVkzXiFomMw32Sw7SD43Cwjx8",
  "key32": "428HEAGnQJipRPYjAjYE9JVTA1BFnJRdMEkdmG9Ksw1RCcKHFyWwB4FwY9mF2MkWJC3YBjgYVjPmMNDUiRenxSZm",
  "key33": "3NJoQUVacqFDzoymHVVkV9WzoqJEbLG3QT67HpCew65YTYmDJebgmXWXCDN1cyzr3aszgubn6aZHqEyN2wXbWWaz",
  "key34": "5D73PbH9EDEStyZmG3c8bNvK6yoL5X3oXq2A3NmwpZ3eiAxJbj5KLEejet5fgDqM4Z9WNrMqrSB43Z7hSmaFwpK",
  "key35": "2rdZrVjbew9xz2Bx4AegkBPfRwJWddPYk3p9xMvj6pWCyzXvkcg2oFJD6qq4iKpDSb1tTEHxo5ZwiuTNwy1CjRuC",
  "key36": "nsyAdbWKwMiugcdsaVZYQ8gfg8h9s2vA836vqjqcyyiXbMQb6ZgJqJ1aidgiBfLPz9Vd17w9cyvKNxdy6Dhzmqk",
  "key37": "4wnxxtpFzRWYUezrt74n4BJoxexmDCn4FmFEUNjLCrrLrSk83B9xqdJs6Htjj5Df76hYyiC2ZiXxSmhyfVEhsHEC",
  "key38": "3ukxysx565oggwBTDzEPHEC6VyooWHgqZk6HiSj6Jcv7d2RhuRCf5qei9riviXz1aC8MSPh6tTv2vuRttav5EASr",
  "key39": "3FNUTgkBCVxV5gH4iuX19TLCxm38zQUk8Kd4eS8QxTQ11VnroTJ7ApNxHaApk4A2waudJEWnF8T9iN1Zn8sK8J5c",
  "key40": "48FayDgJ37SbmH3qtTP6Ct3nYPszF4F37DvVQ2QyC7ydYmDfcBMimjbSkqD7C9kESgT6bVxYGepSARMq8B6dRZkM",
  "key41": "4MC7TbgCC2LRjpPgxx2FoAHiaUzX1yTzaSuR8SXydqP3acJxyh4J4XpLXPBSsB8YURDpEyXUXgA8RSTQaNketChk",
  "key42": "bYKkqqBwESVqRbfmvacF9Ax4GY4k4UrJnd4pZn7opNNZfXewQj3tpqmoJXujaSw1UDDWgQnTtFFZWzpxH6Scpfm",
  "key43": "2Fyp5QnQoUBALstcPJ9aVSgBkQW4xj63RPgSf1AxtfbYTVs45aAQc8uu6RXTrJxgQ8ExnbBaVdNSLD9nuMK1hZGL",
  "key44": "2ifFQuMv2Ro8zxC8t63PT2Sm1fc45LoV5RZBNb6Ezvp9v76jf3gDZNX3tV8i2caouh5qDZbMSRssdsbHRBXF3W78",
  "key45": "9rZ4vDTBDPPFXwVw3fTThsSvTeKKS4FxhPo76AHbaoFQtZSpJcuiaez2BvC8vdT1ci3o9zEfdS2H4DtHum9nhXf",
  "key46": "3XynQ42X6yJ2d497SChfgRCE8ovbRMXgYfjkeCHcAP46oMPDajdgaQD6bUf1K9MWdZ82hYaj2AmCw9ZJcYqfh1Lu"
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
