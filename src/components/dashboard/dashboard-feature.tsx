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
    "3XC4FVbj8fwmMJ3iPAPt6tVfj7Up8jMGwnyPEXVXFJrg655XhSXHk8rhFELbyaX6M14RSjQ5pAGAUgsbi4N8k8z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zoiHWKc7koki7TmaSqwoZVuFWYo5GUXoKrqr2ajivE2a4qkRAgCEthq6MMauJ2VSfEos9EBNwgvWMpGccK5oAe7",
  "key1": "KUcswpmPaAheAzM1cGpnymv7TgnG53kqJ6v6oYZbddeWrQYZfVEjRptzzAmwmr7TQLF9cYTHY3dApMJqre2xi9D",
  "key2": "63oT8LXP2fouXKtyb2i7BfDsAq6oHEwyTaxgNnosniPo9Y2GYJCRByzpk5UZMan3Umb2kULQooEPGEaaayc1DSam",
  "key3": "5aHRdR4nSXLmj1MJTMqdaJwWNZns1owZBVeLN4541NyiE9fViZUKyQr62Et7sdLYB9x2qG8u3Y6Z4RBLThRBfo77",
  "key4": "56if5i5Zxa3FRmgvts5U1rD4n7hVFcymQh71wMbjNBEq4yMUWz1hcyXTN11tvzEmsALXKqUKaGhNbtbsBQFQG3AN",
  "key5": "25Sr2VuFmu4fPcP5hxPQt1uhj4DSzowaa931y5fsrJaWRQoiFtBMpFmEwFar3Ev7JS5AD1jZCUetsbXyF6aDyz4D",
  "key6": "3GGdRLJjoiuFUmmWsRNVNbZCTv8aBxsj8PuSnw7wXTckFAyXSLchsD2u9qbFP1hs1tVmDtmzKAWpHvecQHeVNf8",
  "key7": "vymXgwFwxGv2y784rAnAAhffKCFTRUQpsi39Z3Njc3qrwFk61inijPsHbLSxX3q1tn1Dri2o2Zk7z2CwtdXNhia",
  "key8": "5kt938mokjK1EMxRZDwC8jpz5Rf2RG71bTzutwvnRaFEX8VMFPjuSKUYnvusLye2pGahZjpZjUBaHVsNZyDRjKzR",
  "key9": "aze6nbDKstLKfUrFKneJ2TdGmHHG4nKoJJkAeqBrtNSFUNNH8tRUYZrs7D9xfGurZq5Q5fJAY7uKKojzoMkxLGq",
  "key10": "VfbHRcDz7QYHZ5zmnv8dCfiA8TQT7cdWEZH7AbJT2F59sRiYwggixMdLVYv34waenaJ5jyQs1k9aAZpac6xvjNp",
  "key11": "4ZdDEtxv7ZUyWMNZSGYJj9KuA7ToNRfhYH5BMCQWt9HXVd3wnotafyEgUd7HR7D9dWBQaUo5gwph2TEgZ2gxvY8G",
  "key12": "3Ee4T2sqEB8vMApyaKqY1wDgr1MajWZ59YGwqmLLxMK2KsKKJnJezKD3SP1CgyKZHDjBA1oxj62dtz34am4Q6Av8",
  "key13": "5cN2aDBwv3B7YfxjtGzEq8p41nQRpGFdupA8meR7Z4UqPdqNtGgn2RTXV7qG9fYUPyZne3s1vwKrGyFw6q6DYSci",
  "key14": "5wvmekgHkn6UV36W8JZ1iVh5tvxHzwYAe6FofWTqghXqa1sBgGyc9h3BPkUPR52Ld6Tww4CMozcXvpaM2gfpT43m",
  "key15": "3uiNWRVrRRb4tenvAdQCtpqQ2afzNyQNoXtG3DBCs6ERm5p4bDaE7vfTdrtHDjb9xDGFUxZNUd6F5wKKGwVK4zDz",
  "key16": "55mGuNQ1vAX37z1nVzWJQ6BYeUqrSVDLq2wi2skLp9S9gWvmoWXz4kdREtbzft9Bc5vVfYi9coyZLmYaU226mfoF",
  "key17": "nQstoLa4XEHFBtxA5jTepXHa1DTBoLrsuzpAEPNqDpy5KLKKf5a9pLjE1AB7nekMJL7TYBo8rxX3vK866L6GRvt",
  "key18": "5MNHQJzAaWn5BFeHD8Fn2djqdQmhwbCwMoCqXYNqdFTczsh77LKSNDdMX1bsWAmGg5Xh93VqHS5DyK9MkaFz1dou",
  "key19": "5HMAvPTvFYoLSmByzkuZWMU1wAHAg8ae7KBNRbEVTSKWkmeNzRBzaVwLSSAJvccxivzShrBV6CsCfr1YGYubPBzT",
  "key20": "2Ud5WJyZBLaE3sCe15esY1f4xcXnVtRk6JDxbmA4cgGrKYc5mvRyEMyh6evADGrh3oRNK6yLPRXgvXSqNABeMo8t",
  "key21": "4M6zVFmk6W6cVfZfPdHLmahd5MSxQx9iQrNw7Cc6t6AEy35NvURoRmcQcmW2NmhPMVa6UgoT1NtuRppGUiF3EGaP",
  "key22": "4ySnWeWGpqiREd2osUnjD4zJLVigJaeYPYFivhR7v5uZL7QbRLzQgM3feAzVpYSvAMmnu3vu6orqJ9QczjxELNfC",
  "key23": "4vSuNvW4D1hz6QAnF2jMannvNmsJA3DYV3SX1d4QMTL8tDyE1tjBvRwkFAcxE1jr9g5CQuAd15HYMjtYEamDs96W",
  "key24": "2bFSvfn2beARfGZA24eiRh8twAKWQasLxfc3dmJGusSTvtLD1EGA7VZApXztxca1vJweZAuWhpXV1G2YoiXww8EB",
  "key25": "41autPUUW1bhbhdqTfoFZ13TbeJjnqjT2kskhWSiSHFGf3NmtTijwkTP2CNFSHS3zoceFWWLYBoPrh2VEy8PFHYi",
  "key26": "J6sCvSw4BvtDEuwNvuCAifcLa7y8MTpRumwMvy845mQkqSoq9av2sWvAFSMQ3NtdXp51ejzNj91hDTJgRGHHKyG",
  "key27": "25c35214933dzs6gn16TE7PZdVsowA3nXM6Kn7UKyqC7EF7K45sReSrzP4BtWNvPPNoJ9i7T3zskzWR4sY7dKK5q",
  "key28": "3dEXf9bwt5xmVzb73cVBnanCZKoqTAp5eZdxNPTaRVerY2k252f8ErwjKKurPJsJRVsdvUCG4Ve9NwtdVPb9zAAR",
  "key29": "wnnAcE46JuEuFgHuCfp1ho6tHrs1tzunLu6yPDfMokaDmzeGoDpZ7ks9cZjRpnAq7qxuW4ZX3wg9rfxcohGuaEf",
  "key30": "2StJnJBhEFShytoKgMZbzyLuRPFTNV98jp7p7FJbAcVdaSoZ4PMEdVdogrfsUGFAY5PF45TrXK5ktkHyzdukeuvg",
  "key31": "57zkPyi4aBUqvAmfWrQrRzXvXJYNCifVvFKWS9HxyfbaJk9LTxgwRipLSchUgCh2dw4VyXmwUf1QbkUwJojcFW3X",
  "key32": "4wvLmac9ufiWBpM1myYPcaCGQgXPEGVuniNVW2kigv2zgGEg6kjbXq2BZBr6wJLTmW6QjUCVwoSmgQWFEum3oo3h"
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
