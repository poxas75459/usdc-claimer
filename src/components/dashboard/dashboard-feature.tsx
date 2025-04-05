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
    "4W9DjuEAuKMCMkTgTzAxD62GJbfm3uHQWXMuMyvk42vAhqNjcmSJUX5ry3jXxzAZhix76D6o3juMJDnuyiXoSLqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m3KFmUwXoGuCp4XcVu2DuhxBnTqs3EtZFNC1tfZ2vFJQxf9rJnP1KhJGHWcW6e3rduZPCNh64h2FkArzq2h6AR9",
  "key1": "2tDVEoRbsWCePftkxz8oWakn5tNJiGWp4cfaonA4rqB5yAdRCvrqyC13SdQ49CKhPdkRYyWT8n5eoTMBR2Cw4R36",
  "key2": "3ayev9y2XNKETqMLoiB2ESES755bbFiz5BzkQEuzM66dpGZPRCsWsSVm9vuzDdnejHQA9VH6PCC8qYrurfUCC26d",
  "key3": "52479yURV3QLfdLcNygoQzTjCH3VB46NXqFERWrwDD96VQ3F5vMUkpR36UcxJjmXX68VmFsYkxDGWhK57fs9scRQ",
  "key4": "4UYVN5zemwQAQqHscXvpnCv7ajteBC7T7ohQ1WYavdw8CU4H8U1rf5qFygdb2PjMWrZ79AsGWNpkCNJnGMSxZeKc",
  "key5": "ANRsD78HuDFvyACCyqGC7LrQV2bEvenjvPdRtVsGK4MThWgTpDo9Y6E27eZisMeybtqDMweX786Nfmo24tRgEP5",
  "key6": "45C1brtJnUtrJPRofGVh49yW7i1ggw19ZbcKyLjrtAWZJhS8E3K65h8x1rs9KSgErbtC1DJ7vtZNYuKvsTs3Bo9u",
  "key7": "3UZtzB97C4QhnRm2ckFbE6whMPpBhg5JnfYi8vw64rtRd2WFu6rcRkLkpDRQTWrBraxCzGQjgwDejPHzG1oPkTtN",
  "key8": "4EkRKxDteKeXqjuC37ug6PUUKNAAUtda4VdPbBNsDvUy7aSVzoyxU2pyEdpqmvGa8LFAZFt1e5SUB7LrqMWKrBCb",
  "key9": "4PWbPk9EeYZCSS4hVQPF9ZRzft62Y4773VkyQrUMWijREG9YTy3Lh8EUTjnyvQ5ud9cqxcmnSPowQjfXT24htocv",
  "key10": "2t24obs2v6aMmaZDkXsNs4r1QnHqB4dkL7ACPsZL7RDheNtgPEfBJQTGYZVBspFAd5b9VsyQqSsSnvuaU1Wdkqfj",
  "key11": "3LR9HwoA1Z4U3v4oAoWG3ie5hebF4nKgUWs2WhtAMrUFXoWPiQiNddAQSqoL2nS4xW1TjfCa1QcPZkTaYen3vWtv",
  "key12": "429dQYhe2wzYvjGQkfUbGc369dbET8UY4VhYwEpQZhvFU33pY2kpZV6sutRXB7ereT6j8MPsoAWVyJLsKXykSBos",
  "key13": "417up4vgsqzZadt7wUTbRvjxuTE9bCwJzAtEV7N525376WCB1Hz62CnSGozPjf7BxK2cLikv1nWWZYN7eU1eTzqu",
  "key14": "35PEoSSaWN1iHGZ9M8dYqsqByBvWfRwqujAQEFAaswCr9jSWBqXrfFKfaBZkN2ypTmi1oWaxp1qHHbpB3w49xCWt",
  "key15": "5tZF31YzQvunhh8gpf1TAoNnRfy6M36dd2hwWbtxqLDtz3d8Vcp4RxiwPWZuahGsxZRsLMfScMQy6Q3d4quq3ZXi",
  "key16": "gSHkE969B2hExXd38j1cbDeFYoiboPmaYoiqG9NHLmxaoxym8Mo7HAYdpSqQ8VwXrmAetSsf9khhtb5yveVtAV4",
  "key17": "33LdUge2QPJ7EHBtBh3ooauysSwKgwsiNnfaGeJihVMd5XVBrQuHSGaDeYcKhPBwWKfL5gfGRps9Vk3FZRLB1Z7P",
  "key18": "287H14sk8qenK8XwsTgWxs3ZdkeAzmR6Ed1F5DHcFkqANJsbHfmHyrS2Z5DCspG6ZSc4eNdkVgN8h9rp45FiteQR",
  "key19": "2HC36czt5JqsTR9TvAT1bNiQzDnvBMQeDih7TT2T5mYJNAXRou78krfrkJF7UYBBB1BV8S36SoPMU7Qxwqm2kUoc",
  "key20": "5ogmu7W95sjRbWb13aZJn8kAg2Mbg3vyhfTca8ivtmzsPXkKUHcunvBZqvDZKvk1VtCVo79b3hdzJvmHf3n24Zh2",
  "key21": "mHbwYDtNoFCcPdG3XPDheQkthu8PZUC17x2VdWpV11RDY2WJa7MU38iJzjb5ViGoiUCUgv1qS68n29goYzpzdJ3",
  "key22": "3KNZzWnAKMp3nvWQP41dkX8ws7VoS1JWPiWzpBi2xNwbjXeVkZkNQvUiQedTGBQPSLtY9LWqNYwhzCjxvjtArqdd",
  "key23": "4HdbdhEbpSoxvikR4bHQXEvt6dbFAQZN8Cv3XSWKNKLP1iwG6xGBxNSmUyeX1RhxDjUicRPuA7dt5SediGphG3Z9",
  "key24": "ydaYu7L1ZFXJTjrBhc4x2VfPVSLjL5R8Fbjegekmi6V4T1UV6p1to73dvBRbpjH7PrRQwJTvAjPUohpY1PxDesc",
  "key25": "tA7AsjLQcoVmhN31UX6yeWM9D2yx5fUHY69Dw7uRruLUEdyAzukhqdsnae4H1wBVWB13Db94omCuv8jN6nyz5mV",
  "key26": "3ZnubNVw3ETUANwFaipCst3LpipNHrM3RBHSP5AKk1cXPfgWFtkUQDBsd2SnZ55PYNRfY6auar6tCmH1KtD2TrMK",
  "key27": "2QxJaVKcgQmy1PbX6yFURRQNMwwySsaBLAKdFpkMs3LsBtquYYGkHkYyATpWR5AbdKLkdytRdZBCgaX3DKEpPjd6",
  "key28": "SB2bKYMDwKgRnR3MVU6ASdeUbPbcHuBhmbiK9CdSeaisZH4o2x3Hjxr32bguZmkxm7A5EamXsVmSDFD34kz3Ggz",
  "key29": "4wQte1XvVcvmXgmnQZvnNjeFgEWDdKtpJ3t2JLYhy5rD1ztkz9GEN6S94nHUkcRALSmh4Ssizxfgco2vZFrBeUTz",
  "key30": "5Ast5m8n9GizoqVVnWZWHX72v7gjErGT8xYpGo9TCoq6qQzXX9qXEs5b5vj6Q3TPAGoEvg5rPSGLFnSoP8yonV7K",
  "key31": "3CBmtSuMMR4goJhcBtx11fsQtF1UQKiKrs24EYug6nSFSgS7DekZrG6XrXb3zmbBzLnHEnDS2D1YsVYuoiMoJhVo",
  "key32": "KKCuAsd61NKeEWha25mXdZNgcyhQAy85uASRmXLRjPkVbs9ximgQGiJo3pnQoWvfjD5XJYpJqdbnXz23YHLK8K5",
  "key33": "4HVHmWVeX17vMMBsgrnevQ41DaFDtXRjUsyY1jcMKfTS8KLBTWohwKn5J5cXaMgdMQ41cj1UwGGCoCf2tFcgHJ49",
  "key34": "2skFgmUjzJb6bg5Chzomxs1wcftbdXwJ2v4RJsq9QPS7wXKcy8MuVW4cN3sbQ9SFja1AkqDXY1oCEnX48ZcyBMuW",
  "key35": "54c1BwieSG4xHKstSuCmsMnNvgCB6AUefK3AGVgcp9QCD6Fs5s64iGeppgFjg86D7Lfe2cwvqTqWTTiqKu64NbDg",
  "key36": "4YHPgU9vnF7AxbtjPWXX6bwtX9sdyoj7aNjC8B5NzAWH56edPKJoah4dNLQ61ZbVZHc3CUDbVhRed6zxuLeE3R48"
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
