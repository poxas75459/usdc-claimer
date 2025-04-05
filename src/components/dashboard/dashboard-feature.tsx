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
    "2ySvPjKjzpnM18XcyWd9ou62ySnbRJafMU5YBiXzqpK6gEXby4Dnn6DQb28QiLMg8nQ2YohKbA1vdNq5xCAtW9BQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SorAr5ijMdZUVptFFg9jkLsQudqA579WQbmijAYXAEmyh8SY263YJfbymUKFKRkkiHCJW9vKFzsVYAqmMdVRnBM",
  "key1": "5KYEzxiq5TQW5kG6BKQNwKmxaV2CUGVvZptH1o18Xdgrq2EQhnZ4UwjxhHQzfGCFhkPy9ZdxzgqaBdemUqreRs7K",
  "key2": "3QzaoyFGT1kL2mLvN8DqGjaJ9ZcenvQdeEdGcgMpMCgjsikkoxwSbYEZnDKBjD5aemuuXg2zb24oChYJiSh5swxh",
  "key3": "cX8g5Gs7drJ3x3n2iKfreNx1N8cdMPJYogQ5y2ycQSNBcXyAq24VuBmHAkmfpyNB2BLt2UCEKxW1sC2qJFCvwzr",
  "key4": "5pAPxHbFTUyFaHMFeBFrLV6xu8KZaaMK1xryBEns9MBKBoMwvE6F56ZArYBUbcyPhGv1bfix1CZrUicXywrgk4ZA",
  "key5": "fmFzxxR8peYeMwHVVEaBuF5gfvySin5rJWwFsvYca5UCyfhkpdMZXD6CoeVwHWgrJ7Cgj3kAg4pLV63oX4j8T4e",
  "key6": "5pWkUzmhijeDDdeyddmsvSQgR4dcCsdxAvofEgNccEeFJEnPXoYMjciPvFZRUSHum67CT6sCm1mCrD6GF6KBuvh",
  "key7": "4zcHtj9pDBf4zJU4ktoKt3XKGtYYGESDxKb4JLAtsp4ZwmMpDrMdbyNGzXnfwYBNPdTGQxmz8Ac4EkBKN8JMzXjm",
  "key8": "4JECvoJaAx9dgR5Ny6Swf5orQ1VHUAFG7kEKCDYKfz7Aqn5JPpSSJE2mz1z22msMXuCwsC5mHGoXNugPWD3V2XW7",
  "key9": "29AfLZ9Q4ZWPNBG2QqULAFRBwBNjN7tKfFcaQVBc1TzRhSh2Zdf716ZyJqxkX5L43bjL1L1cia5KDA9amBeVNpDs",
  "key10": "4q2dwZ4XgL8uhca6M49w2y8cs836KjWVX4oUbWZ1dcwHoD9eyXXVqJJeLCbtFUej8xp6BNnvYEMDX9iyGYshXmSF",
  "key11": "2hZuU36kvxpAaahHhYa7ekYjxAxbji36pjSK57briEmLX873bJmU9PYQabgqwEvPzTazZisuSCGaTgPjDD4uWEHB",
  "key12": "3RSRn5gLg4T76x4MnRHZNHfRHPVbe7qKzkVXt3CLazNqrbCR1LVDYsgSqhAf4pwVvKXrTnKCJ13KoxPRi9zpUrMY",
  "key13": "QUmLjYyUygHwZnbPRq4sQA6RkLwYgi7SfiGqPPkGp1XrEZVUhHZ9cJv2bB2YJKQQjwHe3MvVrdKbrrw3xNupF37",
  "key14": "3WsqojVLnGThitxfenLqY2KEV5VQLeon19SFnma9kA98NAQRckCr8pervZgfH12aXH2HfW4sVv8Kv1E7q4vz68nb",
  "key15": "2s9mViBWhcp1Q7hSLXhKSVAM7xAUfcQMAAPdT7STBwRwDwZPRo3KysGQ1SWhV9hgqg6hUsfC8pxbK9QfkZvye2Ws",
  "key16": "2GG9t5wuvMHmLfn48h6x7xUzj3FsGdcaW1TWMaUKzudNm9KwoJMX6tpBhrgRBtWZG1DMtTSxbAaBzJiFQHLKTKi3",
  "key17": "3XFGVGuuCMpoKcwHkEgW76ebt5WLMiyB4wvjKQeKk1RtBf5dKy7bwsL1EdPHyztPWWSCaG3uANorLV7FqkgazLA",
  "key18": "3PJ6zpA4CiR8hqkGnGcyRtqXcVQ7iCaPGTJXzh3YeG2riEbdfj93m6r8qjbHs7KonpyxGW5B9QKXV5xPhzjzwZPJ",
  "key19": "3wsgPWPYVA97gw5Cb3xg25GA65ehCQXzMg47xkpDArw5t5erxMDwYAYPpDiK2CLaddNSK6s7uGbxwZGDzJUZ8nrx",
  "key20": "3cs7rm8M7zsnT8QKxj5BRK4X4gA5XyziMJFxsMRGraW9ZYv71j2xh15e6fGoiv1qbMJgEQsaiu8FfqagPVd9xMnx",
  "key21": "31bbeiiyNdCBj7sHUk2FFTSb5ei2xWi3nWZYSr26HTKjwym7bvs31SYuTNaymUF1jcqDHEmP8mEQe2tmZzzXrW6C",
  "key22": "4FdcHmbhpzmRR96J3zGtCXEpWpSdZDdAsPPYJBpN5WxayXNWC1UHqpXGTgCPDKQTCGccvFZ6dxP3kMrM9kdKMZSc",
  "key23": "66F1vRSsusoUoWbuZYo21a3urNGThEj154m3DoSkugsWhzSa2P87AQpzrm6pYZWb8Fyd7tt7GsQfxqvtLo4XLbwX",
  "key24": "fAWidpTdx88Byav6P3PiEbQkosSz1KY57s7ECtRWjuGq8LsuMBoSNvYQ9pi6URZLfzsruYyYqmRi2hQbm7MXBeS",
  "key25": "2d912fzAcZXgaNVCdLUhFNXErmCKJFXox4DLHFVGovChCddnLqNfQ2fZLG8sPYZXsa4TavWeeurVMdzudBJWCYzy",
  "key26": "k3fvQsm9E6Rx8TyYVA19cDgCj3Ah6P37QwhayVseY1USsdkQGXTo55DhoWaJLum3o6YpAfEryRuHr59ZNJSGk5d",
  "key27": "4nbP5sGneNNb3HXQzm9hNWusAYFPepVU938LHH8pViVbiHykeB9oMsUJ6ZqDspAppsuWjpN1qGUyMQYEbS7eZRGx",
  "key28": "SQoMncGRYysNFsEgA8YmM9sQ9LGufNjjbHy5Y6nKA8QUw5yQwvrDwUw7RLzDy2KuZh5iGuhWXHL1WEQSo4GhMJp",
  "key29": "2uLEcz9ZqLDTS2FVQbWmR6CCMY11bWTTTqeofQHPvJaJeJdUzm6KR6H66mUc4YaqQELaZYmdwL3unJYeUTEKNBEV",
  "key30": "KDgpCh2btiHyCgh78V3pMiHJoiD4udRea3xNXeGMojCUrEDjtikJaPPQ1aay9oinGtcR1MBYJVAqaihekdv7B17",
  "key31": "64EH3Q1A38f3uvbYGZihTb19KGbbpTsfJur4gtjjqZhpaUic88didEmMVmBiGGeh866QcjfrXUorHomdCMLAHE7h",
  "key32": "4PdTDDuobpR286qAqxES1gxEdPj8bLwHbRhfuP558jiMtouTp2xpW61h75n8s5eaKAiLsNkkAJKj2bJcf6g1Srmz",
  "key33": "4hoamDSah6nNBjRDD9i5F871TZ8LNL96e3oL3rytFMQEKMFRsBEVBtqPHvYSMn82XRZkSHXpoczr3f6GqWd6uYLf",
  "key34": "3AScVK8Qc4CFHAyx8G7zk2nyfVaaXy4JJcL2PUmqYiWEzMNSz7KCDfkqUqQKpTsfJqc87cu8bGam6RposspARP3E",
  "key35": "3Jk33nBACuxKp6DJyfDV14rHMBs2THtmALjDddFCpU21MwA2s1D4tSnuR9kQG7acgAQ4ENNJsCHXQ3f3vYsDuqPu",
  "key36": "3v6v5HAdAKpJ6T5vQnphp29EvcCzdQvUvhgpvcSFkU6Mn6Bv9pR6dEw2wm8ogVq3xVu71PdkEzSMHMss8EGS4aCY",
  "key37": "LUnn5KZUbh8fWekMTGaW5KNZzpD1MdMTdqrJBRnEe6GkZPDYzzuWHrPaFaNvowEG2QRnmBmx1YCRHqfA7Q2EcyH",
  "key38": "23Ms81FkiKbvTB4ChSfoyoYfdMRV7UPDHJsXiuGoFm2w5C1g5xaH4nYBq14d3tGzMf1JKZpFb9GKyem2F2MiYwjB",
  "key39": "4mUwMcxMRwz64t1DnrJpQhSjxDVw3ZASNbufinR58rWbGKbzqPotUV9dSyk1zdzuun3hKBn9pahRpPobpZMHxmVo",
  "key40": "5tXHEH3iDFfen15Zwz1zhNbXhpEJAntcQxWMs1amDbvfUFbkzS6Gjsh53SzZn5ZRjn8tPDKjtEm6GvQY7RbKAKx8"
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
