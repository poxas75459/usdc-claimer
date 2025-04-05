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
    "2FGdNx2HmDV2zzCZDMgnJi1oxwM55SmDKGfVdZZmuvDpsME2cnhwZChTivUKGEmTK9PLw64uRSVUs1TMGbJ2ns8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SkXDLyLk4zbWoGykrk8xvpB4jFwmi6dxNUQKyWj6PGPT14CJb2c7gGJC8Fi1nEQWSBY6JD7CKGkwmkmDYF74h1T",
  "key1": "49fnspV15DxExAYD69i6yNtSgzvNGMEAHWgncEyYscgsomWyo1spL2nH1tW8EeVgdmkH8hGdoxNgVkd9Npy4jFAD",
  "key2": "3MDLwDv1kJM6fPdhb9ZMqTL5iHHsPdqKVaxPP7zwcSUf4jjZ7D2kiykQQkKZNCBw7WmoP2ommDDyxLGi1v8MAJo7",
  "key3": "4gmq8Z2L1rkAFMjg7rXHkX54ijRHtynaaLDPm81cCT64UwVv5CGJpXx5cbNJ4kHS5MqigAX77VgGMKN2hhREZmUE",
  "key4": "62d5E25FXd5Vfk32Kckko99bz28yLELuLpY7LTHZmLHfQZRyPTuUCTBTTrCQR545gV5c5tTN1UtMDSSsbP7ntX6j",
  "key5": "5zSrdPLVNawfdNiA9RnavLd34P1PTALaLaKts2SqcDRDLwhurZVTAuKwSjBZtuM7WRyvQitMoMPRSUY7S15fBW44",
  "key6": "aNiCLmRmhV7RmoT2ntpTKfvhMhHNi8P96mPdfVhrWbe1RRdSjwwhAw5ewHwtrpdhBngiHrpZYxoiWU3w7ZrEp2T",
  "key7": "52QJMwK7a3L8gbvLUSfudetyEmCCgdrExQSwG4cLg4dpo1y5fvFuHTkMANFehSa9RrBkaMbTWL5L5q89Z4PsHjEx",
  "key8": "3mVxoP61AWvyHSgrQQGAgLQitnzMVTKYLGgZSAgRavXUqeymuiheJxEQe4f5ztQaBk79CZUwgNknt36EkpJXTJJs",
  "key9": "FKdhnwVKnnBjfyZa2CGERDK8KH5T9nxfmfnm918g1Gjc21GqFeUDmHBEVGuQi8XYPVYRoQFYKJRw2UZq1yFkv6f",
  "key10": "391kKkA5WBzmpVKYjGTxYJGZUpopF1cvWF83sBLzCo2x8QvNAmgWri9sUK44wjnJ8WQbfQFxQ9pc9oCoG9LH85hK",
  "key11": "2dP8w5VUg4SGLx8oZ4VSghAq6vsKAp7KPn2kKee7GwnVvAYXuc1YLtJkdLc38dxBg3jLo4sEv39m4nrbA3X6uBVv",
  "key12": "2xFRL6QG3rEXTijPoH1rethiUofhVMyoyuQVVdQztw86Hnpt7ajtdFVH3N7pR1F9Y5MQrmPSwUKAuAMQGZDcnApy",
  "key13": "4gjVGgcpj4HuMczpjwqTqB4Z5auMaNhu9nqBmMz3SyjWbyfAg1nbbhpwEYr7VGNAsNYYXapAQ9vpWxatEiH7SuoP",
  "key14": "42Cf5R5johkwh1owoTeJZZBBo6VHqZAWofWhU1aRRcVtCdN9sis81woj2qZYHYeRvsiVg2CXHu1gjr8RDKJwXhgT",
  "key15": "3rhygHFj7gMgSptk5nKqSTRC23599n8wniNo9h9t5Fwz6VJ47SMyPMTPck1JweiKqQ7YEh8qKKPihZWqit9cWick",
  "key16": "4KPqi4b2oxWTjMgZfp2Xidh7n9CuVa32KsYiGBy5j54y2ywWnVA3j95XpTs4JX8DdF6gArQWYXir5Joav8LBJwGU",
  "key17": "3qKCimpEJ5ZS3f8AGMK9u3qwDsVTBVH298sr65KMbNEWkFkGsJvGQPnd2Rh1S5VqbkamvR58Teu5AisvhP6x2uX5",
  "key18": "4aU4WJd5dhxt851ALX8NTHDJfuCzjZd8ybYpHFyBxzvEYfbLqrvmi1DnveJhzG3DWAd8RQZYAACiY4Fm1fJhXQvz",
  "key19": "3dGpEjrqu22H9Vo5Pk2Tw1GkAHqxbgWeFvAnErQ15Fxk7PRihBzqcfo32SbxAHSdqorA413BMvxiDp1GtVEu3xTt",
  "key20": "2YXeEuxMKSyGVzYzSWUPddRifesXggb28nN6rEmPVjsCGyegpgdd69NumUH9Dx3V8ZsCdL4a22d5EYFErqr7zbWC",
  "key21": "4oQpLBJnkyDj4aApMFJfRXB51P3P7c8Jb1Lgk7zuUgf66CgB1KSsx43CzrGq5QdZ4rzWXx35RbpMaWkpgXLbF1ku",
  "key22": "RLLD9AZEmC8Vz5WqBG1qnfM5iLQaMBGTjWUnwUdNWh8hk27TfTGpSsfYa7PfXLo8GgzPKPQBKE4kiFoPa1CLMqm",
  "key23": "3LKKdne4sUXhFu3STiwCkSpamuYo2ZVYHR49vRWwm9rd48aDVw7SYcv97UjMUwmnRVyQyHKTzkC6ZhG6NjijMkb8",
  "key24": "2DyezmYU4ETSCxjz1i4oJt5s5AYDhNpgeZbq3s3GafSkeg6cqZrWYf8jGY7F8HRCtqjfeKmk12s8fVC1xHPRHYnT",
  "key25": "2eKKJcXxdjGz2dK7JrM5WPfJ4DxPA8dcc3DP8eMKmUL4AT7UxsDTnbEg6SrTfgBJdtAD7W7omnxuEJhBcLFce2r9",
  "key26": "CW8vUiHsMXHm3sBC9UEVvewbx2CbQyfwym5bqbSoyCc1jmXLjrH9grsbzYSjg2r8oGJcH9FuhS4uCRjWTMxtfxA",
  "key27": "3tcyXSUmcob9twxBFJBe65RhtYQwzysvUch1ieEmpRA7LbVBctaDDJgACxGwcANnGMvkm3z7TMtBPwP4JbbydbH1",
  "key28": "eh5vZWF1x2epKqePGbo6fnhn45et3tQBswSxKoXcVVHTBhoNSKjaAarq8ToooR67g4z9gePKVkY9ay8DCPorCvq",
  "key29": "5iJKSckHhDJURhT16WtsJLwBAVsurz3o5ddx5NbekAddXXi9zmgiMUikTZApvGurp4PWX9cfND2ghny7s4SrxDAH",
  "key30": "3r9psyxsUfu7SR8XN6vNvmjH9CqZA14TiAgaotCyLk9s4MU48qmTSP35TT5p7PyyShnRdByfSt4SEnZPow8zKHXh",
  "key31": "4ePqMVqyrddYB5FoYUSLuFGckyVk9AKWkxuvJv3REqmp3fDSbs7tFVodQi3KNXtvfqFdK9oTazx2gEDFP3JPeNuN"
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
