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
    "23aYSuWejKMR8D4RdXMguDJAbNjXR7rzZYvf2qWbvJrBr9ifKphmtdD1uW5zQCwjYpkzs3h5zmsXYxpZXTdYMXPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eq8H81WaFiyNN3Qjyom3eLXV5H5Da9jZ4KQqYZaiummT1cvx9K6sRS9CFfSNutjEjM2cRWQkKSy5LTYRdRb7w6u",
  "key1": "ghjLp6EZKouRtoHHeA95C9HSvLqX5zAaJ75vYw4KyuBTm4yPCGC3cr1XRag6HqhpoNPEJwZEPnrwZVSrZuqCjJD",
  "key2": "3SHNTH2x5E7JzaWUHqToXgmznEdJmWvF7L1zYB8nBULcLErbP6rff2Q3EZU32BUYZ7Rb53Psz4dRXqSoagzfHwiy",
  "key3": "3gN1opUgt7ZbucwDZwQr8KG9UsMe4Ucmi6qW3WmBxcqxSiueDwnxmmpNW184HxJz6xFkZvKfnReRGPwcRUGygFEx",
  "key4": "3syRdGgkk6HAMVo8xBSiYLQZGEkh3wTfbEkK4x2zphYw8eXt8WFgrWJrqyDr71FLXmcWicfvhqGq3Zu2N9KKP1fj",
  "key5": "3RVnjspuNcWpMJS86sJEM299XaYeuc23YFUKYZLdnfjcvojQzL6rs2jqTDeJR5supem37ffw81nWVFW2cBxh5iKk",
  "key6": "gK1mQqdUVMkjEns7fjixrAwtTTu3ziKR7EqCpUzYgTWAExBf8Fi2efR66jMZJeqvvWVSm3AxadXK6EVhQMkVHu4",
  "key7": "3cpMGY1zjT9AuQDcqzu718kQFDq2oz1v43R8sp83gCJfAYtPeH4ySjdbdesoyJS7z4X6pD5TUVhdUu9C994EhVmn",
  "key8": "5NunFuYRTJ8oxNkviBcrJF16N9qVAbGFzKsVt5BuBckBRuvCuZGDGu3MDxiXrCTCiXmXYakebSWrTGcjcKM6ufA1",
  "key9": "57zWexbsZ3oF8fT3TioCBsHnETGM3Q8tB2sJ9jvaScSin5Fc1RCwm8bTUkjxWgV2Thk3cJK8J99jLFkuTU5YoERM",
  "key10": "ZtFHdtzm5C5zdzzZvy5NGsDtteuUNeEUHLMuEwvvfjvHcwEFmSgg6rgoRurXf8thzBBDsXygMM6feZ12Ben3jag",
  "key11": "5XL4evHg3ySkUvEooArAQNKL1ixaMVM6Gb6G1bjSPc61pDpPdxZawFV9vUtZ6jLBzT4ikkvKbw1aT41Ptju5pgSc",
  "key12": "3aG59NVacU1GTjbguUZucNqwS7SqfYSSEWeobvvMPgLWJgiKuLqg6BTNb5oXp7orscApHf1P1Xf8fLoXMWwbYUUU",
  "key13": "5x4s6qtfZRqnWg9QZhFsxSmQUm1op8WXR8usVvPHzTBgtgDHYdxcKnMMwWCNezaPoa7o972PkHrmkaRsuNX96yre",
  "key14": "5XVXs4dTHEoaFLiDhY9sMMXxVNETSEDdopq33BDrXtKbZaYfdB2MV1jdQLcT47PSZuG14mfKFKebsDnqRcb6fmXv",
  "key15": "2FLhP68VVVhLBEkNd2W1g8VAfFTHcN3DtBy2sctyh87h8NxE9m9xhrqLifnBapThMmhYyi6knQYX7Mk3MyTekMEA",
  "key16": "YwWzrEsfXQWv1f6sJgBAYvdEf5uyKyo8fT8SvmYnJXqNyc3P3iwm5wwSyrYoKxuZaSSiKFpUU5aNaG6PdSzWxQe",
  "key17": "2MfLTpSaAgN2hNRxDdVi54r4995gLNcQ38USUqQ8yAqnEqKx98ahqd1Z4qkBc5ixRpQMF1oDmPcvRsUSyG9BS4bv",
  "key18": "4Vz6ZQvUQdeBbRxGxGM4eh9dc3ZZbXBDEKQuUuPW3HvqHFnVKD75HRG8i87x3AYAVbgmyQjCf2R4LHbLtgAun4DA",
  "key19": "3r1W1iyp2WGRY3cFwKGMVbDeCWDm9iJFAaC7gsLVkyQJUFAbPESFGzKqULNq9gbi76eRCr37Zmy8U3WeUR4Lsk5n",
  "key20": "2UeB9K7SYpUXwh5DdtQeGsKEg5erJw9xRStfenPWEWs6DKcrPYrNetwLsAWUqmpCuo7KRyUyt9GSSpS9s8Zt64eL",
  "key21": "5CYe86Mnirfg71eEytFAuBRqnCwoCvpUZbQGADekGJwdfhzauA39VnhYuJyYgwt5bL5x5Xee6jWzVgsgY2Kupf8E",
  "key22": "3PGvymGKchEkqjz3MT7acEtYELG7TqSvxYvot4BCdJ7KrgSwZdqmV4JNGBXnRCWzLRHMmDUavEApqivKmGk7G8ho",
  "key23": "2HYGsVU1SsKMVWVpGwx2ge5XbzZ6AG6qKG5Srof2ru9fGw1TBJ1Q96LdxYRMGsLgZ9kc9YFDMHfRvnDk7U4BA26e",
  "key24": "4ka7siCq4tkJ7qHajCHKPDbw5y7fdspWhNVBR9dAYw5YsgNVhiPaMWuTgd5JNM4Qiev9e8tctgChLQTptT4r2Sof",
  "key25": "2Dzeqki1XZgugmTrCKX8QJpf3HMnWv9RrpVFKsSeG8NAVum8xcpbrjG6mY1AzcjjUTPbxna32ED1A5uKG4KTXQtZ",
  "key26": "5NgG9Wt55ioFq2r4HnxCowXcuAapked9yABLbA8WAHNJBrq6jZSP51To1X6Ubwub39BE5zHPCH2hNB6Etm4N4PXX",
  "key27": "5Dv6PPM8RCzDsvgMTodPsf4Sizk7pWjLhqi1XQZdPv6CGQxdDDzTkP1TYMErN7imzfY8h6kZ2yagBftSCMjovKLG",
  "key28": "vYuKzR1jx3yi9S3QskuxFAidcc5FKmXxmHavx3ULY8AYYGu6sE9dPScwH9cdLmHPt9qgv8AsHXPqkynCsGsv97b",
  "key29": "5eX4nh5TprqXoVByc5ECoi5FWdHHiP18nGaa4EgvKkTGdevdy5msd6cXYU2HLV2geYzotRpQmcUD6txp4Cn6ZLsQ",
  "key30": "2g8Lv7gPjj51quUd8vCjHpRgjKbpQgPhQbn4wxNP2wCUgyEKtgmSxQzF2Xgvu2KxgkUC6dMtYsNU8zNR445qMyjM",
  "key31": "4gmTbbVtNPnaECWdkq419Ufk3SdP56BfqXat2BYXY1oNi3AApH53WgauszvYUFBjeygb6FvcNPeD1M1n7WFcQeRe",
  "key32": "3pJxFQQJpd8u7YcRgxuny8e7EV7rot6ng1f1XoixMa7KdxBGrq5TXMUvBbph6PvSyKY7DX2vpXnsmX3WCrKyy37v",
  "key33": "5M9jCrqWmJW1aKGL6QmAFgXZh11F5BUxr2AaQ5qeNRUkTJi7dSEL4tbECaARdHagAkQkU8mAz79qLD81gBNhj1fS",
  "key34": "5Dp4tvmtWezaxZBMaCWqgxtwuhDwfrmWBQywHZcFG9Jhbcx4cinM2c8VhaLsb2e8WZ45cJH2CSNPfBxr9zgm4M8y",
  "key35": "xjSTDXc9gsAg3Tpvu5JLJedm7bja26q52Wz11GZNXhERNp4LyBqfMqabWLgkLPNGffVpN9wEeVi6KbdkV9WixBc",
  "key36": "D5Fe2cgxqePVMbbNR4NgdCjGMfjWmy7sLwZB47NsHiDtmSiCQrFdEioAx9dTExAR5aK7JQvB2nLmjFPLHUHwEGq",
  "key37": "2Xbpt99GbJdAty6U38fv9LcZm8QTjMKUEjFydNjRbBy7sFXz1XHHnWhYGPLnTgK3bdRi5yNe9MxgTfLJ4S2smw34",
  "key38": "5ww3FKw48xnBG96AFZfaqp8sB2m8a9WdujXLXzWUfvaiJFrkga4QUgwYA2KJrguoasmgEUqR9aHCE36Gj4ZKwxR",
  "key39": "3YR3MVxsjst7CTuv4M7fR8td7giEDc1Bb34UAtdLrJV9EDDESYKJYZ5gY8mfQ37X56aiG5NbVnXm6aHkiEM1jQpo",
  "key40": "5DGnmeawFNLLhdEUmBfKKhZoqUYYqJ68EVPGx5eyt832ga87S9aEnZPZDo2GjmKapCfB68BxT1pKkcHMNVh8ssuB",
  "key41": "tNFRk9RCR25xVtEXTuGoN9LpBA6SU23xz54VRQEKGGkk4AspFhxuus3sTGCCF6dtubU7iYwvRD7fZgMb5JWmjK8",
  "key42": "5BjiVvNirJGKVeVrrs3h5TTTSFqeRq3WVSRAryXD1dEMWMGE9vHpEjGpMFw2dA3UepRV3H5crzvaFR7s3Ksu5Xyo",
  "key43": "4RSm3DDYmLXZCXPndgSJ4adNSUSbMWE6Js85Eaw1bF3K1WW9eAx9HoKkJJFQRdG3su3Ve9fSWd2yxcp9oYEzmD68",
  "key44": "4BCsBbREZNoiwjkbcWoWyF7RqYPa1yatzWEwCkrWFaSURzMnEC7mGmyE1Bz1HK5EoXayhxtkiVNEJqjAprDSChkA",
  "key45": "2yyyZaR3BASz622ieSwqcbQ6xu7VCgwom4QFtLE37vHsyxm4xR48sEkuKioZvRzfwD11vxDCDfiT9mVqJvCwRiTo",
  "key46": "4oYnAwckHfifnnPUByNrZxmqaZpQkNDSxCj8k5epqSUUYEqHiNywy5AxJvV5ZCBp4Cxj6xuMsSKoXWXZjbhjC4JT",
  "key47": "4idCBcJKJDs1d5ygp1fxHeoqbJRTx8Xob65P2L7NJJcqjjoYW67tio1u7STJ6z6Pd4Myvv1GBMBPQyUQBshAgDvy"
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
