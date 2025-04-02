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
    "33SQchG9M6Jf8G9gLgCGzc2tBiM6NuYcpPRU1mtJSMJH6x6XwMih6p32PDWbb8jJurvw1oWLg8o8dFrhggjXP21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1v1hEiSSg4C83VX4f5dvr1crG4optd8R7aP6uezrKzvCXdarUky3rViNjNaMUjCm8oxTKcqGkic8idXxAz68iQ6",
  "key1": "2Tph48W57HjBTdR4qExLyZjyteGbRKqfrP6UuNUKhpELwL1taC4n7kPev1b5XWsVd8QmUSJVoQwQcKr6Kk3JHX3Q",
  "key2": "49cPrg5G54KmqxTFasr1ApLTzM7bYddxmpcCeKQofDoU5ZVsnxoWeqdjxVj2DJAgqiWFK1HxSMcnqA1a1pRkoJPm",
  "key3": "4FRhYgGN4EmWni5yGwhGcPVBBHUX8ZD1uJaNZtktwemuaarny9uMb1U1L6T2d6uadUGigKf2m7fDic8WzsWn4Dct",
  "key4": "5Fo3zNoyu4K4bond81nmL9Bz9NtQ7SjbDP4ZcfximBhRPaLQeCJwGQPsgnsgSnK2jSXdy2Bev8eXWQEms5bFEZqh",
  "key5": "VktJErrWjUnwfzfMjiey1mHSkY2CuDoKbRZNeiJBJnSrTcZgtSMKFVrBcBsovVMsrdvQuQSr5LVpJZEDy1KcDq9",
  "key6": "4Xr5pG69foup9acuV5gXzyZLJaZTdY6wBkgj4SAm9c8ArnY5SgXkvpNBUE5wkjgYBwx8qqwYtpGLWxjKC7mGHmUB",
  "key7": "5uxua5fvGGXp4xQngjbqC7ZSsqCjh449wKPSoXUX4DPNcVKsiEJoQZw2RQRU2bwf6Nn3EnEk3vcACpEbtdCfKLS3",
  "key8": "585Pr96RXKoN9zCyqtis4Fc5RnyD9PKy2buXKLoHvhSLUNpcCknMTwQWFg1NSuFeSHQRXj76LgrmAv8GaznxjBgL",
  "key9": "4FyUEEmKVgg1EmZDuJ4EbmcBv23AAcEoZ7XvCUDAbxmHnbKHgv2upTrbTteKE7zKuXtacMwoskBKd7SeKyDFzLrd",
  "key10": "BWVwoDnuNGbDFFYHawPDqzG3YXKDBL1t2d5usaJ92WNAnpZeZ2aHRpV7Xay7amGBkGrDSM59Vwr52mYn1rxRjgF",
  "key11": "4BFXeMpU2HGC5zYYx3PJvcUYzxrGAGoa5CfBVCsbUewxoEGUjMpkQkood43RNqf2zgUsJw9FntDWDpE4FXLadQHP",
  "key12": "VhCHmokgPA5LnQcvXUnyVGpfWdvyMgDNviCfeaMtigmiaM7RK9bvYU7SdS72ChNYRuQuSBVQwnC3p83U5JZi3hB",
  "key13": "p9itBVfRYGcdgEoEfZ4MmDaFKNmHGLv5oFuuqaeHmC5jHh2U1STPhMJWSgutPS9NykHU1fGkKVW77bpkd6FnKrx",
  "key14": "3wi157YQqCDRPkwdP8vZNPsKYb169KEvx8kZmqNydN8gQ3CJZJHHYzsPDVR7BZfrsh5ywLPX2U7GknVMu5G17rcF",
  "key15": "uTrwEcMmaLyMph9LSaaWECiNVzkef7D1oSLvWJpLkqnu3gcsvVrLDaRqzPQCPuc5j7S18Pi3rNwUMTGXzG7UTRx",
  "key16": "3gzecpfVhHwFKzvkdcnHeBbPZHHyxTZmGCow4LCLbkEPXzSeLHnTgZnomwLTwznAw4vgYchpujBZb3fSFvXku3X6",
  "key17": "4w3bDC5ZYRS7AVnPt8wsZeo61YKfcBog3iPNfmYQMgcHTUtaE8xt9vw5V5RnHnr5XoeTRZfg8QTYbegYyHbse6r",
  "key18": "2ietYSMZF7vZxAiwzWcViBqkDpLMo7t8JeAs8VXBB3JLSoSmWqixeEh98PJDeRiJjz2c4DaD3AHvCPtBe7KptEvs",
  "key19": "8KUMhbXddvW4aZpMcYKdWQDQvfgdqgfh2uocGjk4QNnkuy9W7pgDviCSvVf5Uu3HNK6fAA7E3VufRvKTKa4ALVY",
  "key20": "2WBZSV2ZHET4pe2XpSw2sfmrUuj6VJr7gw1sikErYBL3iUjemwkgTV6gdEE9VF6KXj1y7hmNbPwyu7VES8SxpifX",
  "key21": "3n2JuKjhBUo3D4P73wz5QhfUNfjip4seAzxDoHmNiQGfGz8RrJm1xrCatbwsX6HLMfUAd1KACkFtnctmMFLW6Y33",
  "key22": "3egtVDjudC4SqxzHPMBD4AkgRrBtSiieMydfCSsMA7HP36EZN9XpMNiFmBse2mbxLjNvyWscTpzaKqkxfyAiqPcH",
  "key23": "2Nt4gfEFtkNwaE1qtdEeVd4V61XJjBdtN2cJQJ5LGRT3ZL48Khkc6vryL6moo5fqqprMBDWt2R9oZz48RKJyhss7",
  "key24": "2MnG4m17je9vgFHMMQAPvfU7qbnPXaxSK694k2GzwqPu1A34c931rmQ3iPbvxgDQarJ6VCLxgJBh2v2t7McV1Nbx",
  "key25": "5uZygECQeELDUKvoFs3sntALeqt6xdzaLiz86epc3KfAseQu6DMMAmKpeNqjttmV6mgJuv1unsxtgbVn6ty8f9iw",
  "key26": "4R8gFPyLWZ5eyVZiAHh1vh2FmQ6Uaq4moCjLCzfd1B7oczLdyPpuGmJ9R5KJ337yp6pxjbFCcX3TxyzhiRF5HwXL",
  "key27": "2DsCn6d64zLGFX8PFPwhHmtzz5EjvFvhPs6YTDgpa4WbAFexFw5Ld6qqwukBD2dB85JajspeyCTd75gG9p6AE9uq",
  "key28": "35cFnd5aYDX37rhF5Jy7SEa69JE72q7YKWrTooDAgLQYWaqDBEAxoD1kfs4n5bRFf8HhT5D6adMgQaaMjfBMh4MD",
  "key29": "9cF1RB4SAjfrJs5Z88B5VZ72r3cEW57dAJZa2aK7SuzWZ6bmdkxxDVgBqycTcAqyYf6JKoJEuXfMHabhrtDgMm6",
  "key30": "4GH8BLyZhGQrdwn7YimJV322jfsqKiPuKX387xJ5hoKBwjW3NR3JPCsrQMcqS3oXjtMsSNrbGHwCKF3a2iXVjVti",
  "key31": "3bNRD269ioUmRHwN3R7oioMp9VXLkR2KZice53g8cj8eTWB5sn1GVbjNLCSXAqbyLgrBsnPR15qgNqPCJEFZpVQ3",
  "key32": "5RbWfgTHMn5QyQfqcrQtNFkPPkmjbzyLd4jawhsASSyQPouN3A936sSqfYTyyRvJ3UH6kdpmA4as4WBJJagR4upm",
  "key33": "5HoroFTA8KshyrvccUMDyGHQ37HpMG5Q1DK6JzEWy35vQ6Z753Q3xqnFwKjjSXXpA8UTWiJLjo7b3NtcxrSc53hS",
  "key34": "ueqNzhfkxroNwGMj4R5a43qCC2zEozqSpwDqqSvNbMb4xcVqLoDzMx2uUCriWh6GD1yawZT697wKHCrWhnA2566",
  "key35": "39sd5xk1tDSzA5m6w4gVrjnWAJ6GJrRumdpXq6gS9eGFMLvQH47QNWQs6bs1iaJAtYrjgGeiztP94rYUHhU4E5WY",
  "key36": "5eToEnP53KytK1weQZbap86yZxeaRdByVjGMz51KF6ofXkygEPp6MQixMDGaJBoa9BFvXk6v6uDYsKyyrnMf1wiT",
  "key37": "4dGs1UMAEkYvZgo9su6Lr6P22qKgDdQKFnW3KMvjKeCLbkcHBJHHuC3JYd27E69cngbxAaiRTnsBRKnQ8k5MyyRA",
  "key38": "5JUK48aaAEMz2eYDLjhMin2mqnkTbMmESLrkHJwkm9tk5NHcMeKLFQZU7qNaFBNc97reXgA787K5ZV9NhhwN5NbF",
  "key39": "3EFKGbTkihX6RyU5Wxfp7iS2gypog86TnMubATfafdag6FPFntZ4SqZtjZG8kL75W61929aLWto7uL1FK7rY5r1b",
  "key40": "4MizNcoJ1JPBpVpErfiZc4bfvHU5te1bReSXUQVdaJ3Ttd4iJhNiQCQcLsYbdqKCERFhVD5Jo342HrduAA4vKmug",
  "key41": "58Ej7YUUiptgx8GXmie3ajFEXm7TfWapK4QfUwLJ2pDK8t3V1ouBQX6e4hYgnJSQMr1DzbPXqysLAEup5QYi45Mq",
  "key42": "49R3znAu8fCSLhtUtL61khagMLojh5ufaELn8JKghDinY5NwvxBuSgvNRExkTouy1mjGujjquZmssvDJKVRynCXZ",
  "key43": "4CHpDrskF7ND1BN1LizCSAYzjPwSFZZHDj54HcJaFxtCgrKxN9CHnCwevsTGu7HW1qjmcF2ZR6iiLL6NrNc8Gkdt",
  "key44": "2T63rr9HEmjRx3mfNdkNbXvp48WQ4P1oe1qjtgLCHzFiq2KjT3sCykK4bqZXVchajS3iCkDwUNvsvg9pJtN2Uegi",
  "key45": "3j9fdVLWBcqiTckr9SXvk11UG6g7WmAX81apxiwgmWrLwnKXq2vbF5JKXHSGWq55wufKa3Uc2LdBAGbukmafFKWZ",
  "key46": "EkRRABEE8R9UgHsjxwSzSbFKB4cN9o6G1LaPqAsUuqpopMPYUzL6kuM9AqgdcMhsmciDe5uEB8jvNQrWebaJBYH",
  "key47": "3sQs6AkdPBkJ1a1X1pBqVLnD9AfA4Ucqw251cQZJxDgwJyivnX2jjk6KiDASyFywVHBSN2wrA2uhPFXQmEEvc6fn",
  "key48": "59VXM91wuuJrPHupceZPij4f48HAa7sRTgG1H44txyc7ajMAoafQuQKYWigLQXHKJo3zbChaAFr8LF97x3GnnWWc",
  "key49": "4oswzCq5zzTXVk2fNRsx3iX3M5qDmxh6hrDds9oLBtiw6HN4awXKTnA6cW9DzsvHLaA2XW2zfJgJPuBjXQpmpvgx"
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
