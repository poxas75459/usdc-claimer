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
    "5i3oTm2vvNQbztRu85DqFnTcWU41wY3e8oyesHQoYZi2pqgvDZApeF9ddVPACzdovyReq2w2HS1t3A2LoxwsfgHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N16vJn3TzNTWGecW7CG94grBj4QwMrUoJcocp2fBZ8bFyxcbgPWJLBf6m6aoEJiYVtzuJprsywC2X2WtvHzugqW",
  "key1": "2a3AvzjPZpTfRGNL6phBsSv1o9yJwfx1W9LqQ7kEAR5RiTchV9gJ9nEDgLR3Yqpjr51RkouwbZVkr62xhZNdVvHR",
  "key2": "4TeLGWzcfDS2iA2AcuY7jusMkJ3VjDxZoc9ZADe4ByGesKWyZVkWrzfYRqEw5Xb524VDA3X7o4kVdeUcZYr64XJm",
  "key3": "2egj8jUeRu5NXyRST6NPMmF7pV8RKFiRdXXNfFCcAnJ45yULQYNusvpssyo5qM9RQVKW1X17kFF9qaY7mHQ8cMvG",
  "key4": "2MX8A8ubX3WD37ipFusqDcjJZVy1CcwCXsMZySZLrd78BuF3jFmimyGxYVJxALbiePWk3jiyr7rdkRd74nATSbU1",
  "key5": "3fqLsjDVgdBSLJqD6VicomqsoxtUDvvZaXXyMjarXeR5xmc6oaoMDgtYTUHfyVqzoDdpdZ6NNDD6dBAj2oz9BatY",
  "key6": "3mHE2FzwWSmyLfr8d2pgsYeZvTHa82wK8aRzK6KYYpaKtM4tk4y4MCTgGp287zBgYjJNq6jWSr43BjZYr3XzNLFS",
  "key7": "5spZwfCyUj5sGPYkLnfVjjpm53VB9Gu6T2SA7rNh2vHg4gRjCAwP2jEnoA4LXDzbsUYjth9J9WB7EyRjTSpnZWsE",
  "key8": "55RbnVBxd8iqcAqSJYYZuDsGgZRZiKPimMuK5ukrHPEJShux1szEb5q45qYDF4TqnhtoERPTuMPCh3Bh4efC9MxU",
  "key9": "5zx6LDGjZa1sahEDMhEiX7Hfi7RLEP3JF7efev648SrYtMyVhhcre6Vc1KedhPbnWTobTekKHs4uonZGNShuhEiu",
  "key10": "5nLAjo3EEDCTnxCqHoYeFp3p7oZtHdnQ5mSieFYjSENtNUczv37LE9ZiPSjwkzZNjzLABdTTheLfR3c8fcAHXEF2",
  "key11": "33K3DeJabnsoei5C3DXZG2SesQviXa1NSKQrJLGctx6qZZjqDL5vV9mNV3sdVANLPxoPfdRSRXe6FU1LfyLmgtup",
  "key12": "5zXCq6HJkRd689r5GGVNV4WSCNWZzAEBqeijic9eHCF7TAKpiaV849n7Czhy9cNh8GrYGkmrbfJ1hsaXfuLmP2ys",
  "key13": "4GfK88xmvoBG5CWYM9WBSkTkvbf4LbN6cHh3MRhZ6Gp6ZbgXqHZuEjryBaAs8QxpLVMhn4UrYYGts1W16b7v4gp7",
  "key14": "2upJEmWXeqkoSke5MUeUV2VmTN1Zx16Yzd4hxD4waQ7LMtuSbZrdR3yPWBPMpjZnJo2tTjDEF1GBgrPWpWwmKM9o",
  "key15": "51NK373hTGGauZcJGPSG4gZLkHC4dcVidCUHxMiZw9DqKrKcURGSYopcmPR9FgdMp5uUyQ2UZntV4zj7afBtNgDN",
  "key16": "153A4ciMDVmrVX3ck252SKmYf2ics2TJJUmdLndYtiKPLrTS7PmZo6m8ZG3niYrLG1fj9Rm8HKSsC4BGVuaqqof",
  "key17": "5ovGmbWR83H3m1acenqgcwrx85K6eUNAcuGNTA6yoXuuWaVDUkZSzHpmp99k6W98PnVeoWXQAPuA5Q6sUAz2TxUV",
  "key18": "39NMxjVSfitawvTQPdgLk7bvHRh62HkftjqHaxteQrBrPXyCHPWsYPp51XnceB5oYn6gtKXMVwLKBeWHedV9pLkW",
  "key19": "4ivGJoZcG6Ee98SuuV657WvyoLAzWnqMFSYWxnoVM45Gnrd9QH235JHb5gYFcrgndnQiDc7jsDwLijAz92fodaUp",
  "key20": "3JPYJ3hqeeVqN9CLSuicTws1y1pYPGUwvJU3ubtCcto9SSPsnZ7j3HfJhd6pnLk68GoCwnZE1QpwRtygBxEUzpfd",
  "key21": "49kZCR9uU19vvgadBhkSpTJ3zmJBK67W8Bv1yXpW3d7jQ2LmgpzhShYM2JS4H6aZq9YwERJVCwT5RUJQXUyMeYKa",
  "key22": "3NtW6VGGvnhzDCAV6EbGPAC891apBHhmgPcL4biUkyvWp8Go7Dc7EPe51TxUbMUmdi8TUUMZaj9noA1LcJxWudkF",
  "key23": "61JnEULXfdfQLwF31HiVk9EwoKur8NQwWv1fRwBkfJmZdFPw1wutCFAY6XQVmu4VuDhPci17TJoC9abg7hpbNkcs",
  "key24": "4x8Zhubuar8zjj5uqVv8CTm3rMa7sA4h8oVGqe88SPWrhxATw2AinDhcfa4eujTGZ4wPfesJtGqP7JB39jE2ZLbX",
  "key25": "5bQ2FCmmWSCHFzow9SwYZSectWZCcKYgEQMb36VJn7xCiurVSPxhSCX2DKkNtWa43LBLv9Gmmemf9po1yyZ1EWgn",
  "key26": "2athvENoCkkgfmCGH6pdPTteSArqwHZjqEyt3jVrXCCxGv6h45ATSwpdrxaYSwVt72QYd81cjMxuvJS54SpDTGdn",
  "key27": "3e11AWuWN8rvpXx7B7zgoM1ANeySECLeb8Ve5FDhoWndhcQLxVvxncgHpUCCWNDyovw6C5hSDbRZxg5EXmkuscLC",
  "key28": "zjpd2PHnRrHf2qXWEkd1tKszEnhVFpJfXn8S6xke8L6oEdEHtcLuyY7mMdmERcgGTmjA5hoQDk61Ju3hory8Q4G",
  "key29": "3KTofHH8A5H5n1FhQx1NmY469EY5Lk6RJXnCNFrPwrmTKUpZ3uBzfNq1wFnsvRcF6H7GAGsDdmxiWeeRaUmj1xCS",
  "key30": "2sNmLywxoNc17b5jpd9uRRmcc4eLHZjPstZ96hNz5SdGQe1217E9GKqL7NfS195ta8TvqvCVjdxcb6PaoHUBu2Yi",
  "key31": "5zNtdasKPCY6QKXKE4dNHG3TVfVetoy6tHgPgLfKXXZxQmbRonfe2vdZnyVRs7pdA9jdNy5NcFX9eWsVJ1rWZejg",
  "key32": "5d7kT3kCtrp17CjfPCtSQ2dAXCcgR899tKriou1b4VGkFW6e5AApWL5bp4jvLdtSiH6GcYqC1CZ69VU18xCQ3xA4",
  "key33": "52j7RCiGEeXRMbgGLCeJeuHHteZJv9KkUPk1dtX2N35NqFr5in2C3nNtTBSLQUPuZrCjkoCXFKR9sRJR2FF6cSu3",
  "key34": "5szNHVQLeXE3FQCwtBgo6EJkcu5cKKM9xfjnL2xMp9LQ7u4ySRT495asCzVj4ABipik5k4MULggKVqLnNpBgb8Uh",
  "key35": "2rbr2SrWogsezwJ1vqPB47KveL1Hzifn34DNd8SCT2XXBd1hzC1rZC49hdQ5HYeriVPQqSLgbqd3JdpQSxsUSvjD",
  "key36": "3Qks9akpuirHSpSuVPF8xxUxz5CR4Q2Veso2cYQkjhz5C5npUxH7TTf7x8sPt474MWSFzeLGnt5sMuxP8ajAxobv",
  "key37": "1MPQea2NLNkJxXxV5yeSYn8EK3EFtVLTxEyFfnuQSa5dfjZvLXz3FomYvLZjFzDFECmRKo5PhC9DujBfb5cnCKe",
  "key38": "3k7rydfpn2JTJCbBMSvFY3SnjTtPAKkMRh79uyYi9sESJhUjauxWbyjpLShARDzkZBmjEDcn7feJkSZ7idRQr4Mk",
  "key39": "Z7bWNHSkuBYRydpQxG2a6erfPCYMFWSbRUUz5tNa5RNUYstNizas2Es3ALkCEbWXFsVdTmBkEVxnqP3MioK9M55",
  "key40": "4w7cwLZbUAQAtG3uNA91E8hyLEfV68ruPMwugxN9UZnuqaYQUtyNU9hUffPyqcV7DWfjkFpP1WyykmMu97HTe8Tf",
  "key41": "4sq3RUAzNPKrok77PRAipZ6TiR7L7JhX4wPrrV3UXPp7bnpj1yDjfjYBgUkn9swnhRLeKk59ZvokooZgk12oLUUC",
  "key42": "3nwhZ2DeevzYnKLwHoRuUKA1sjrWsq4Fa1SdhUYq5pWS4eaRtaodAztUpdX9TkemWP6Gy99rth2DuRUiTpJqudeX",
  "key43": "2sgECLUqAenbsapLWZK3pKMUX94Cfykgy32mvucjVBWeugiYiaWUPeeuFx5xmCfzpz3dnUXF3yLrLXqS9LzRJWPd",
  "key44": "2Qt7wZhWdmL2gFW9F3pLPSndsJLUhAQjCCHfvGiBh1MxqUuoqC4SXfhiGamCoc92Wdad4r8xAc4KmqDuUqp2i45S",
  "key45": "Ge8Xr17Gv99eJbKbR4L7QbMCsMtcqcoZPPzvTNS48U7soLyf3JrPddGpJ2mqW1raauxn29T71PwF2YB5vHDHAXt",
  "key46": "2oFDcvF36TxUShUjjhtevCJ29gcsyGZ8YacKEGSq2ABPTWAKg3j1QvaCfNLfePFVwyeaCoHpcAdKj5TGWgEdKWob",
  "key47": "3uq9EkRSEci6Cs1CipxaySYo539EVMSz27iqZtq1aBHv8cJHxt3KXTy8Pz58DXk92zr57ch59qgogjHpJsQJirNS"
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
