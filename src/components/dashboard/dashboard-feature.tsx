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
    "45iWbGDjmaYXgGwQVkdoyf9attwdKVRmbE1vAJf26yx8CZBNAjBd9FvhtyKJTV5DbRGjqMGBsPWF26RHPxxzAyv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rS1xP4c3MxqAeqgnDTgbuPYqJ5qi45t42xtzNQYfkzLBP1twfNbzjBVJo2MZsEuUVinYC8zA1Bp3z1VjP4Pz2FK",
  "key1": "2RaFuLccynWvdgdDAbJk39vs93KtoJ7A8BPBfNWhVT6GHQm4j2CD5vHe368tjWoUoEbF4RwUWrGcRCTa7wgVRrki",
  "key2": "3Ezs8oeorhYuLb4b8gyQbqAX5aS95SEhr6gmx5fLUxH5JQHzr4CccY8DqSPZ22SBfmNheECF8SAFXd8N6V2Nviei",
  "key3": "4Ko2FFTzFY5UNFcwCEq2j6kEkXbU1ziLjtMtM7RS9okDJShimR34SoTqEBdHbFs4utCJbc5R59Rjnr3jQaAvarQa",
  "key4": "3HyixefhCzDLeQbaxfysVgnojPG6QphSPPGhXQVKVtkmwrcBaLcbLeeUQ7YoS2mWoo6SJy331kDCpzFbgdqnG3J",
  "key5": "4Ssh71jg3WS6GscCuSJyBtUrdhZfTcc76cgdMeQaBoH5oVm4N4dpwuqNEJ8F5EwCkVSgUWVFHsvdaREU8cJBtHkW",
  "key6": "oM6Tsmn47LoQaL3Z7ASWhbYkGZTZFKA3nYt5oAFA9LXJ8KnZnaDjAHEweKo7B4jBYKXKZSPSEJon1Bvf383DDHb",
  "key7": "3QbZgCHMyKWebLznijRCNMPRBoc5oUjD2XfWdz9Ruiw3RGVFGsztGLsNnCuGLriv8nM9sBJJtcHeZDBePRJHTCMn",
  "key8": "dBds9pz4H1jH8mw729pJnFTE1a7AE6r89YTKrQmhbjXsRFmhU3THR6hALQDXWgWm8RTHob8qjojNtnMYmzgBxG9",
  "key9": "5zgsxuzGpEn34RkVykbmxJHsRJE4inHxmzd8XAiSkdqaqyHdJ7qbmRa5cUScFWo2UYEZaKGb9GNPvPEwF6oxU2u2",
  "key10": "2CSDaJUSVgeeNJC6PyjM9QbUsVwjfRL7zX3H9K8iZXRdecfxVNkxUSvCWuGcouFWSSxQL9Pp9gttL3FxVChBknmc",
  "key11": "jc3nJBTuMVuB4KyNgakXCdpATuJnb6KSJLXgNvfe2cmGJNLqm1DQoiyZNUXYskCMY1SrAzSJmytQdupfemGn2eg",
  "key12": "5y2cDjnChLZjZkc8NQDvcehPXFiKPDR9w6ytCNBXq1VqyTT3bfL43KxjmzHcjThv9dwwhNULq1n6yCZTCbya3Z64",
  "key13": "3iNGJqh1xymoi7qGsFCZLhtPiJybrYwgPjRAhNkXzzCuoXF7VBsWz6HTKGZMmDWorDgxAE4CkrAFRMSywLyMXvcW",
  "key14": "5AYPaeqdPEWE4WBGsqhUVUjJmDeNtT7i1pKmijVTQHERbxhHS7bCECvMk5WLgAYc6okVBEEehWdZa6ESgF8GJUVk",
  "key15": "4hDmvhZ9gAWpLjCnNNqYrc5nB1GTV2Mpq4csngyQpzhHrhfaHZ3JPnes6Wa1uaJ7uNUTor4AUPPeZSzJJZRUcw5u",
  "key16": "4kxagz9t7BheLsU94FJEZP1j4iPzEYsz16RNvfyFiA4GDZFFe3RNgimzsAs2hVH5FsLmK4gj1D2dAdQb4pKBxphp",
  "key17": "wAtYjaenXmt84K4QkaBiYEw4r6BiMLwhxgcqz6R144HkgvNKuATEAR1u38Eci5KyVd4dpZyE33khNtnn4HfPp4s",
  "key18": "scYMEJbNDkERpjJWDTSpTgVVDVRSdit1rkhSkRpzBJkavAMewJrBebSK8288M6R4w9XLt5QKvWsCeG7i1xEWc6Q",
  "key19": "3mbD2WhjD921DMjkcP9brNn5Axia5tQNPU8zENxnWXrhbYjmzrcd7n69vyCzBG1PqxQKoE9yV6YoH7pTw8EWx3nq",
  "key20": "31XacP3wf85pEXwYqjwjQjZbJVPs5CGywbobs4dR5PYCQWhTZF1J9vJbjQH8jGioTwkyZK48GBeFjRwFoMR7BwAJ",
  "key21": "44sagxxfUjJgDF731EjcomUVoNTJchvHU8EV3MJ7pP9PZTyjz3nq9XmMPiYWKQ7Gwf4QgZjUxpxW1bsgyKb6Ts1o",
  "key22": "5grzjr2z8MPK8pwdPhrWNipFzXJDomsAQTpJubARMW4D6xmoHuNWA5owqbEuFHeYJkXSQw1kkgZMcva2KDaCDHcj",
  "key23": "47BU1r9Ho1zvuCn46Pz1tbKKem2tTgnPSBxbt2DYzNM1mz1sxLwMFkH6A3kVwPxwqyGWNRYzANj2Fm3QccPYCM2k",
  "key24": "8gjMXociyh9hw4uQYbyABiiDRSbeWSZpzMfRB9dLxzht45hCdRuXWfHiK6Hw2kL2dEi3yvDjqneCBvNfTXNVP8n",
  "key25": "2KtPhDkncSvK354J29vP3WbLsTxwnfSXykuggPJTUKyd4sNTgLDVdnvYbogqC9KqkyoRmmPghkVZTr5rfdJpgnVU",
  "key26": "7CknCKmUHkSU38pPkYHxRjPxmqgiFosXaAY1gYSM4PkCeHfEzF7tVazYtZAAzFzuiQNSkUg14R7a7uWgtJD1PSi",
  "key27": "67eUuzMBujfWhdeC4Nydf4NG6wXXdmEG3wBaBEMQfjgSLw4WDbi58dw33wspNAEran82pn5Gxvh1XDJ7aRZtt1xJ",
  "key28": "2ejgCgUENSVswcS5k9HtvE95ZFLbU4mWuoTH7cZLC4S6noMgF32HfHs6Mfa1oEXCVjowyNxTPK6UkoQR7xXnTfxQ",
  "key29": "pzDGxH1NuDesXTMpdN9dyC74CxBGzUyjBtm8h5yALKnj5KjGP6zrpeCj8iLwt85xibFRi5nGngbbADyuQC9CUKu",
  "key30": "47C45W3ivtUvhLmYrjHei8cSPyNPnMXQGKTFUL4adY8y6hTcW1W4nrwPPnDHzriNbWJU1HvWWtsaZ3VeC6pTYzR9",
  "key31": "5mtfrEFcWNasfWNYeZ2KgKdMjugZKpUkh8EYU1SuZLSP4EC4GQ3RCm47qpm5ZznujRxmFay7e7tg1q6h4dZBVDDb",
  "key32": "3wCbaVFovKwbJc99SbQpHNLiUpEinZfd4XYgQHn836EwDyUh1HjmBvkbRdAkwED9xQX79aiPFrQ5oGfKYVLbVpYP",
  "key33": "5AarufEcSJixDo8jcMN3mB6ZtihmfcDKYwty6XSa5WTvtXNMR1X4xrYBcrc8wh5YciYGNmiwwC4Cah5H7PYVNsv5",
  "key34": "3PCPeWBEKy7NDRDfLjnQEjFCVC4eFEUrxmLpgJrY8sGXzmS8N1zzAfh14BTbgXmPHxhwPnAi27NALAAfbwQgH6VQ",
  "key35": "2rz2YBF49ESQc6rZfkMKGhWdPyE1im87ZSouA2EDokDWTbZs1isKyMFacRTY7RBPGqVVvzzxaxeWRV5BcWAidSP5",
  "key36": "4qMuJpvHvgffPHVV7HnEt46eXJiHLCJtLsz7zz6imU8gfavqvEq3MUbqLJgsr6bqikpfamwdnUzgBXvxrrYTdRLR",
  "key37": "3e8DF1xc7WXAbCoh7pp8BAzx9TWEtnxA1pQ1zXFA2njjbUf4xyu1UmpfJWHpviu4m2bsYJVAdenAWx9qzHAST2jR",
  "key38": "5ErjfRWWZBBu3FVHP5rUvbFhParqfunRQTEJSFihG41FVisXbegnX8jpBRzoFkkioSH669Eu4AZkKMvNHFcqmsQt",
  "key39": "62n8ZzWsvteY2AHRojgsa4LLpEoCT6kjcuxCQiPUo1ENbv7AD2Sz2Jg87HeyLLiL62GZDfThGGFRrDsXJtr1KKdD",
  "key40": "2R4KFvH4sdu3QkySf53XjzZzgsj11E2FZGKdKUrm5gJ58peZ4BdASTq1tH5UK7yRT65fUtjw6UcLviDhYf1GJf3u",
  "key41": "5kAHDamb4dm3Tqq3RVtHeQKSJr6CLV8d6jh2hsR6eVm6FkSMdkSsD2bqmGnnVbKdQWexYGKymStbCTmfhb9LNdm4",
  "key42": "2yr8ffDAkBhRg29oZ34tnjUeSCWM8MbZJsVVKHf4sGkRMguY9RCr4rDwkSJM5DWVzs18n7uKyD5zTZvBEd2a1ba4",
  "key43": "QLHXFBAUjopEqCb63F8XdgornSm5eJ4hVp2iEB8NyqB84ocVCexQooRurrJTDgEi8JrW75FR8iywmVgrnJtR4mq",
  "key44": "3FdVQJqGy7GMk8XiHbMK7UW9jznqRNdYUXp71jLpye8CwxXdPbevzAWQYtuD2HE6iriugXbkCwdRUt2tg1vyhQnB",
  "key45": "4GVNe5yHwZwMxwKMcmdhwBkLSDyqDSxjCkvAu4A59uybVfNsVnZ1YTpUf3bBVGtK71gcc2TivkpxpbRx7B7JcDvs",
  "key46": "4iJCAPELzaE3TZxr6C8N2c7RfAHNBV5o9SVoV3UoiG47UyY9AZXU91DajQnVf5QXAnwPyvoTHbyubSQrhUCEGF5y",
  "key47": "3XY6QMo1tZ3ouKnyejMqBQkzZU6Cs12RrDL9WHQTVHacocEkCT1fvMbx7wcGWKsQ5eeZ1qUzZuTMpsCANW5aBsqc"
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
