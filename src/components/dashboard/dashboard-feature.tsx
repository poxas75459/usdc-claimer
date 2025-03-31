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
    "3qZb4CAYMPqumKM5nkfuUTs6SSJa1rXipndb26dFtQ4HE9okRU8JsguboqpaPHoismNjXNFCLkPHWDDtBJJAHjnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7RF72TeCG6aWWFoPKTughDiNqK91LXGvoo6R7cvth4itQrjRPLXtbqx5nEXkbrvYe9nMCbZpfEMREmaBSsyShv6",
  "key1": "3puYHS3NQG4kJ3mNQ6nL12JgnXxB9hcpBR2gAtTbcwssT2LwwDF9SPJd534uD8H9TkDQya2Q1azmSxdMDhGRjuFY",
  "key2": "5uhvNSP1pFREQVRb1iJcD9HB4HMVry7tqg8hcQpXkLGEuur8gfKW2kTQKYP8BBeMjRWhsscSSmk8vQPWAzTUMBrm",
  "key3": "56BAKMmgyU8cSgEdUQPGor9XSSSdBWnwesZmAiCS9wnQrLNees6DJW6YyWKTFtAiHRpAK6t8CT8jFn7ePFk3WB2x",
  "key4": "2EFX1CgsyosHhG1HCByMoZiSMoquKeCJmGzSUa3sEGLywCiiqE2tuwHi1m183dqreP5bfh15ayxagxRNNmS8PmTz",
  "key5": "9AqTD92Kdtg9B33QiR8Dipbi6C7v7jSmpHSfwbtH2NrXBi5gkokVM3Q1EfWGZP3S9THyFrr9C3zD3h9kKuFJ9Ag",
  "key6": "3hxYUUTx8jidTpjLB6MCMLEXH4EpPh1UADdFvSr7LmAPa7XofvqH98hZHsvKkdX36LNmPyiFV4pWmBuTcECNo3P6",
  "key7": "5tUkpnxcUxSu2rjkUk5wkd1sBNUQXgzwVP2nHaQVy3HFzfLgd7kLmtE1EdyyXWYgTwp8Gw84ZUTJBy2vf1K8EuPA",
  "key8": "43snN5NTVzZi43KKH8hUTmYnefYqomBHAPjba4ezFxKpgRbRH71N3pECiBJKYwAVVby8sVsh1xgdjiXJ55UQaFgu",
  "key9": "4AZviuMgC96BS8eovMuDQMkq6F1YsCmdKqbhCFnHKBNeBgZu1Cpq1YjEyXEv2RaRUtthK8odYz7uMbfxx1uayVKd",
  "key10": "zdZyG49b7pCN1pTQEKrSceTzL1omfWeHj67G5HiZxSzpoXvu7SkHL82qr5UrwDthHKeX68LxnnuKtFHwkKXwajG",
  "key11": "2fkwxPURUKJeeoLNgY7fSJhq98RsGeoaWCJ6jFma3hYzc2NSGyGxsBRc11gPUWx4S4eQVGMeFzCnczMVZFnGF8Z5",
  "key12": "kTkLov9ZN1DuufYKcdetHWk2FsaKqVnb3wPTH4GededASCZKjwGihMjV2aARZhDGQT7RSGDCWpuDhux9y5uRb34",
  "key13": "3wEUSjvMHiBHuVUDuXn8SPjibW6n76vCRmkNPg4VtQHTW7UVbVmcKSUQ8EpxhwrPStKkVB2DwrJwAd645Vf9FZGh",
  "key14": "2NmczeNigyHXZXxCWGNsqBmVjmh5w84pcqve6HQsxVpae51CfeYq9WbBVUzqJnhB6VvLFmtkk9p4Nj5LHPjXjG9v",
  "key15": "5588grSB2zqK7J4pUeWZ2DHnkGcDb26qHhPoLTmiDbQYpjHZDGQEP2vrNSmnH4WoTDwnLkWHGL3rg26QvhVit7XU",
  "key16": "3hUecQYC1XDWzXNbCq91CPbJ5SfiEdiitUki5LqiiabhASg3JDNwV746ao4EWh5DeSVB8dEKyHQxZqzSeiSYv3d5",
  "key17": "v6omgKr8zGRLFATWCten6P5sWHwMg8LXY7dQg4ToxYamxENCFmMsKpMaz7soXAD66LYLX33PpWKYH2P3dTVLyQs",
  "key18": "4KMxLmu4Rfgjg2N9pyxYQRbdzzsMtgaHKmAB5DgozmfTkFJcNSiF5s6AwUKEwbD35oa9HAz7eD9nGXy5SjMm3W9N",
  "key19": "uqNib2qu5njauopDyBCETzMmtpBUVomAWZVg2vyYGdW6aufYSV8onEv6TKxZfxsGmFNqwKfdkChkEwyqBgn1ouS",
  "key20": "5wpcnHeuD84n4RGuAAQAKh7b37HtiwvS7yszdv2CVxQ3QPAAatkkdzYi2zSqfiKdjFQqoGXB2BxLBspVDjSTV4vA",
  "key21": "3CLZ93Q8k2ZxRC136s2ST6vovSpD2g4dwqpzgv2zGpu4xdiaBYtRHQmDuwAqaQrd6mDhPTrdSJEGnh7sUhiJHrfR",
  "key22": "2gPYUdRNtgMf7NJbeHsTBeaXedR1gs2B49Q6ykNnqyj6kY5e49NXMb44E8DCJfpnFUHPa5gqNFjhuiPggDtguzRY",
  "key23": "5BjocdHQpFrknSDxWtFx4aRmxmbUYahnBrqpftGBavucMUbHdvuJWwwWekySG5ysj7bhV71bxr1me8MM2r2SHH9g",
  "key24": "4PZuagkEw4bdjuAUzh6T21NsZiR7suG17AxYeCNtKmZQdWyRAhXikeCY6yj9o9FG8PGSjXTQtQMgjw8m4BF3YS8E",
  "key25": "391bF6UdcDr2CYUxBf6HN9G3JWvK3eKrznshzdJaHm37BMdmuVchTYdxkAQTe7Cb8WQwEH66PMQJv1gfueZLmeQp",
  "key26": "65mXX9t2KYtmh72nLsY5tNLscJt1rTErwd9QxAghf8pd47UZFiHJ3MtAEDHHPVmbjvhjP4vqv5QQsdnKTjJiQtS9",
  "key27": "3AjWkjX9x3WWyyBQdUZunWn7efdyJf4hZny2THmypyBBS5KS9meuGztzmBC6xgaxZ8HmjUh2EV172rk5isaseiNb",
  "key28": "3mprsiJpMvpEBnpTU4riNX91euBJyHMqRprrvqgUYS4R9tnR4xZ2tTPU4xGMe5X9bTNmwhH8QUYQ8B7Mv7CN7LWZ",
  "key29": "4o1M1WTeA98E9ifdw1HMr8pYtdTiFADe1dFQ9ZjB2cXLHd5MDviJMpvGggrcRs2EeKr3dWXpsCViVRnugdrHn7U3",
  "key30": "3jJtJ41NXRhk86ZpgZDgTq6zsEJQEyHsNn6bMiFgucBQc9ggPsANtPR9eQSGhZMn3xDGs1orMGmawZvpXq4eaCZd",
  "key31": "AHuBYGFitGhyeVPYKZkFqfX4hmc4SMWuAcDis22Q7vPk3nNC8yC3Dd9iPStMf37AtDDjDXrLhzvhkgndhbgtjJ8",
  "key32": "3zMp2LvcgUbenPUM8rEDZXtwr5tazfbGGevGjnU2SanDS2mAM6P4ptRCES4DjHPfSAxYghrZ7ATFnMMnMbNiKtJn",
  "key33": "3xo3DHsSNvfoRXTyigjbZJdPbRCYeuzi3HLK77N4oS1JpuexLnAa6mZzpHypuG9xwv1bsWFxETVaMbr4jha7uZjm",
  "key34": "2QQDTtVB5rD2LWYBUUgKzPxkwUGSFZ28jYRjPf2g6shoTp2nMR1tRRJSLevE4NwrB3ZApZfX64w7vdzyGrLwYubx",
  "key35": "3TK6YJeHEbBhgSCWrA5h8BTkbXcSPppSp6yPY2Ld3iKTfiaE64FUoJggfL4extduEL8Q8sJNPxSwqEMQW4rEySzo",
  "key36": "5VRcHngCJdvvhpzjS8cVRkJCanTE94xSiz997wJodXGtnsPXCVN5vp1LNPrJr26zmUukA1s95q1vCykzAAbA9WH4",
  "key37": "4z9x1EKfqdJiL8n8jqUNGiP7xia26rEhAXCBDyQyYoHfxGePPgf27kgdE1Q2BjeMDfzeWNzjRWxWAnAzTRYMQ3BU",
  "key38": "3HzmjsuhnrhiW6RpnsmRjurhTw4Gez5uXTqeNto3XqwmXDbYq6JUaDXGjVKAXxfxraCnFaA4eEiL8JTkkmZyyEB4",
  "key39": "3Zp15nnjXQDJE6HSi3QxUS6bopN7YqFyHCNFHHUks2g52NeSDQa5qKcqe2XG2Q5JRbbKSHNhxVkdTSRLVXtyZPW7"
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
