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
    "5ZRxsA3bq5sS8Zr1Ls7w7kF3UcNVMeoBknsGxKwWTA499xpXZZ3Uk3ugvAvFj3CkXzDkJCJE8mmSuYBjwMv45c3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Sf3niWhBGu9DPpRuZ8iaVNQeyiEqEjkD9Lvv9jXbe5uBFDUWu9e1SbWSB4Gdvj4NVP2o59NwQocXQiXiReyj8x",
  "key1": "61ExxajEdTN2jRw4HzXK2HSiUS3iNijeT9XWT9GxMSi3AhEviiDmFtHGFscwdXUgzcoAQyybhECmGgKYEVvxm8QU",
  "key2": "cmqiVs4KupFPcWGw76dFMUGcysjMTo63LuKZUbWotgt1uGemjDcj4NEXvrQdgCL1vhBY8t8tJx9PF5vtLZBUiYV",
  "key3": "5JD1oNAqU8oQ6gyHoTKkV5pWV1tfbt86ortfnydHVWDBqB32VjQoGc4C8KQ88yyNVuDzoJaVosbEw6FTV59NjFCt",
  "key4": "5esWT33pC86kqZkPMrz4wCrXcVeok7qirfBb9cNFYJabB9cvjrD1hEnGbbJREpAPSoLv6sGonNeJG7hEofn86dcw",
  "key5": "4r3zbpsYibBDn3yaW4XNsdhESnNEUQZUormAYhK6V4QNfH2zLffmWqozwg2ivsYjQw7jxYnodCzLMCSuQjzcnrYo",
  "key6": "5rhdeZMBLYnTgNRZA8gBuS4bGnetuMRsHvkJ6dBm7XjTfqDJgs7q8as2fLcf3cBWmAjtqNLbqpNoqvCKQhLFGbbJ",
  "key7": "mYA1NtRZaGXmPTipcvpQG3xrUynATrjw2sgYggdStgLYc8o7r4rRKP2kKctrMp2D6zUPgYoEt9iX9m5Du367FBM",
  "key8": "3TsWj5wxTjsJSSuuguKnnTXUBAAuv2iq3pGm8G7aP47tc83c7LUNXuBJVJB6Arnc4ysddSRmw84ceattbhX1dyRG",
  "key9": "3wrV94FStzDoRCfEUGuFQsPzYCr6VzS3yzrFDHpfecpNST1zp77dsipLD1e3w4xrqY8rtWpa2UJVb8AgBhY2dGwi",
  "key10": "61tVAQCak9ky6Yg7SscD1znrRNz6xKDTa92Bsz6SCAMoMoLrvaydmj85gMiMMoqBgNZfVgBNmhXbpoxKb3pjsvRy",
  "key11": "3jZsUWxNG7o77cFyNJcVCayuWzPAvdV6AqqVuMiWLPqGpbQJAZhkfMyJGH4NdTxFJvZnYGbqQTtXyvWphdXp8ar7",
  "key12": "3BDAEd1PJ1D64uabjEtNmaxCMTmzGomvU1QaVE9FXU7g9Ck744kS5TdpRNZX1eZ3hM38YZigFCQPCPnVsxZCUG84",
  "key13": "5cLMAssqWQLVkREfb4PunAc9Lba3PZhD2urq8mqA16EiKWCtS7hiF2e8VrdbiFPyCv2dVyAgk9kKdgAH2f8EJZur",
  "key14": "ZgTbfXn88fNWUTYLKRykqguabbAtmHuygP7VZKe6n9oYpVWHb6f2LFzmiDcUtdTqyuGm8FAj8Xi3Fu3siNqN1GU",
  "key15": "99S1NwhCjggTA7TbRpxXuyXp5DAq7fBRHR9XTE3SfgxBAjcUuiVAuFj3m1hw8G3K3wzDRJ9f5RC2iJ3JoyeMDCW",
  "key16": "3EFyUCUd3yAHnq383XwCzEDEpE6vCrjgKGM7TqtEUyLBcdU5KxxuyRZe5XqJFH1Znqj1fyUzwuT2rqz2iyzWbB65",
  "key17": "3umn6gEaFULqeMYA1Xy1nbvvE4ijaKnKceEy23DovSizfSrmbh3BVWCy6mSkn2TMxhFVkmwWVALg8NKmgB2oagVV",
  "key18": "3UHnJPtAC6RNT9bKRhsd9d9oKUgRphHq5g7tBjFHFcMrdZqPtmekkRNXLjz1Nqsm6Xtk6qZQGnLTPA4eR2JVNnPP",
  "key19": "51k7TAnrkkgc3YiniUQvncmn8kgw4EozTRtDVgz3PDsje2xTNQE8Z5De7rnxESmD8mSDwFhRtoHd5gbK3jicT3vG",
  "key20": "5miSTQmRedMmJyso8j8gcAXaLS5EJNPNsvLeDksBFfJ6HXkkX9ZT1mMseBVZ6NXvUrkLXwhQK9JvRNQftgKpERbZ",
  "key21": "5wYvieJaa8DECUKuNJC6nBgufJBHZbhfHuNsxHKaWAioqZ9hixXuijF9P1sPtqvvKjmfac2VsSDEinzm988AhJGU",
  "key22": "AyFh4R9hHkx4kY4x6vQYewtzz6pdjmZiCwhmTNsLvRaKL1vx26aYszLE74vRaRP9Q1TNqfoVc8cR2TUnNtis888",
  "key23": "4aP1HUvzZoErm6z3SmjhRGMji3ES2Q4SqbYwQ6DsBS5GgEFnYevyj1Ssm7t8pUybuXY1zfHGrMEQHDQzV1rcHoPP",
  "key24": "3e3bCuUhdFyAK2fAQg9TSroTJzyUMTKoVeoJjcYxqrAPRMkPcmSXWsSw8VesuTgL1PDzGMcW1DPv2n1BCeFdMfy",
  "key25": "5QLbhJ7LG7tsEy5UrweSsYjtsLgV83aQc87bXxwv4t2RCjXks8EZ4s6RNVeAteyLtBpcWr9rCWytaXU6v1hA2QiF",
  "key26": "71KbFd2iU5vumExvLrq2bbfDLnbrxWrsWUEL81aa58ZtKvSb1SA7UBAFx3bKKFbbbHgeDULTZUyTsfmAoKKYBG3",
  "key27": "4V2AdhwgtQHbvPPLxm2irSDJFWu5Hcox4usDeGredA7jeUwKSSU1jPGbn4k4bUJ7AVbXbS4CbLjdEyQXRGGF94M5",
  "key28": "dY4YVHdc59i5ogNaeZqcCwMyj12DXy2e9jCKxvTb6mijjRx9VeH3G8XuF1fYYJvRmuQGzpCEhf8iDLCyt6gfuY9",
  "key29": "5R97HrNJG35B6BhAm2dv3j83BiDhgxvdZ8vmKzYKJK8fGDJLX14F2ZUZvyVuR635j9TWCiLFcvmxT2jqWF2QeR1w",
  "key30": "BSckXfnQVJNj9REV1js7w7dw5YkFNHem3cnoJwvovzwWG84dqYycwjSeM2R2NB8mMWFZM2eZB6TUum45izEZgrN",
  "key31": "4GXcgs984i9DUKJcwPnm1fLxesKDyK2GksNgVgHgYFE3cXbGXoztfdxEH1afRtgwnNACYAUPGA8sBf4KE4LqjLaP",
  "key32": "9EnNnnwDzKJfcLSvcudrmxDgzyNNbfZ48wt3H4E7CY7ECYoiTna8wWR4Bb6nuZuvPic1zVBRAx6ErJTE1LsKTr1",
  "key33": "3HQLKuTzZaYnN2y8NDfnBZBWea46FjPaQEmKPjgEPhojFcqfCBzGmzBnJ6rwU24howxnjmToemzZsYK1ZZCM2sQ9",
  "key34": "7BMDdr3kGeyMJ6SPvr9QYMVxx8W7YqxqUDMrg7bRGUGLWEs5DNqYmzDTPQrifEsu7RMbbTidDGtjgesjfdnEUCe",
  "key35": "5493aSmY4HBqk87csadZhgd4xyPAb5FLAmGk4f9uqCmAsT7WLRYyhhsebCbYDfzTE6LbFtt3Co328ZhQKA7B3rA3",
  "key36": "xcZ3HBpUtCgNybRdiXYj2JpjpBRX6M6edAmiCTuvsWg46R5hxTGowUCsAehw2bVrAd2GLdVwEpR838X3vqGcT5M",
  "key37": "5RYe6y14Ewx2KXwRkfoJ6WdKha3GN1ZJQuc4KHadrBHywARPMTcnkVAv2uiU8XgCejYWs77WDyjFN68CsWg5XJGV",
  "key38": "4v5thoxVEMKadxNmtAAMBNw5p94kMijXzwEFyMxSZ6hjUh1xy32BXVVL4kVRLT8fpL36pZ2VKwc7AKtdbyBFKvdi",
  "key39": "yrT3vzYXJnSBrZaQfjvTAAjBDuodLEU9gEUXgTRBAFqDTcASvov3hBEprKLgC6b9m4Wxi1NzkjCnuV3tLsNaQsj",
  "key40": "5wtwbNdkaawtro1gyHs9vSDBq6fiFK41cvMqhmMP51oJjZhqjfxALgeCPDpJALdTJhYUAsTZiJe2rUPaDgt9Atg1",
  "key41": "5V6QfyeevwEKosgGMjSY1TfSMeWKjWLLTrSxBAR6iroqaigU1FHzQvsTC8MA4Wac5QNT24mNjffTeDmG8S98irCH",
  "key42": "2n7w4sLmzKeH6UNWvoGfnbhz98ZQiVMDeiZDomxwUk6KYSoHhe2DaYz2ChkYKGAXiL5hWEf7XUAZurPJFvDsEK1F",
  "key43": "gr2XmVR5E1aJmPsw6CaaV41LZde2Rzxe1V7VqjVU6m5W2YUahWaCLRCQRiLyPMHcjfjptGou2f6hG7bBT7HD12k",
  "key44": "78L9BAQMknsacjKC5gGEx49mB7TsPxnxAHSXJUPNFEsMBKnVVsRWPd4k3UmoncEfeV7HEigB5BK99oLLandJkDF"
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
