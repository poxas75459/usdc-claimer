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
    "Z8RFjqJH3RhXHyBcML75PVdvhH7oTqJBGDQSMiWunzeuXn9vv2sVWiJuPBPSqquGCGCarva6HEyrjCyaDYveR22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61y5LhQ7ZHVAcPF7uyvSVpiu58CKr353perfJZAjjrn1UsYJkDcznYNBjrxuBAMXBkD6kBisJKZaGYBmgCjB8muf",
  "key1": "5aXeGiGGrz6BCMHyZCyi4b3MxVFXePuStgR6d7MctNqi82vzd8GXqgab598SXJwFZR7XBjVgHwj44rRg5NLFaWZU",
  "key2": "3tu9MdBAZsQBbgkC8nK1hp29xW4Wm3bmWNRd5u5G3p57wy2qmXM1p2VVgNF435KND4XGSgaEtcnuEG9Xon4uMMWS",
  "key3": "37C2cEBoRhvLKzEr7nRgS9Go7mjUBMF27UNAEDTHYTufNBUJchtToTRibCKjQyNbvff7QM9uDKAzhr94gMqNJTg1",
  "key4": "4v9nirde7qWB3zw4rs2s7M3pmsFA1EwK5Ewspn7t2EjzA6L5ajBVdJyi1wUcNyg7tknJEBW8dTMfotSgBEgfiR5S",
  "key5": "4DTifTXgJMWbEYUtYs6WzbRkaKNTJpTA7XsyaU7z47aNTeZfsZKMbvDXtZ231PJh9pAkmeK47BNaUPFw1yzVVdqE",
  "key6": "4cWp55CTQ71PUM5z1BKzwhQan2X5JcGCV1X97gbRzPtZAKBKtiE1UE5tW5mz398EBFjGM4uu4PkFxGF9A4neP1Cg",
  "key7": "5rAzzZCFPBRdZFmTnCKnbf3iHQ8JQwXuxuXDyYzkkTqG1X89fgpSj6hZgPdndCBNPcNRKF1ReKoX3Vo5FXnEAQg1",
  "key8": "5p1ykHgEtxUUgV3VaaMtF6JubXwxbjyH7U7KMsDf58xMEwe4Qn82JuvWs37pVs2cLbppQc47YGcAWssfoNbuJviv",
  "key9": "4g5PpudX7tGiRtyxAKsaHekQjPNdpcjxZRfJP7n38ErM3nJqePL4YDBRtmjm9ZL8ze6hvUTKGTQ4ymkDeFWF11j4",
  "key10": "3weJNDyBopTjRLtcjgqXLjeCwvpVgtKcvuAabPMRdHoCBYw7GFkEJ4RASRnVfbFFfP83Ww2m2WmYM12DXKKCuHw",
  "key11": "3NtRUF8Z5G7swZ8rA7qCQ95V1mVX3iZMV6QbTsFFoU9ex381ujygvEbgLMjJmmLS62CFNtu5Z7ed7VJsf6UKukWa",
  "key12": "4bpmWq5q9qKKVsqmjtgMqhNDJkrq326KiD5LNFPPyRWTZ5ZsUvR2yzcEDit7vNa39nhcd6iyrxBbB86YBbAqQJoX",
  "key13": "Eenhc9uHpTvMPEsmj2xMnCiTwwjdLBMuFZLHg9X9YGXTQFcKfopjeVWKyuLfs5uBEFpXR12EivPbcCpx4nPRWPW",
  "key14": "3T46En2gLVjH6ZFTARk6ZsBCciJrC9VtRSy6gSkUNaW26C1TYyhYJjGhLRqKdr5YYw21jWamNGJfkFcBjfoei5Z9",
  "key15": "4XmdvyiQjhu4tGUM1fm6A3VndQLvoJb1HhKPaNyyCAkNXYCF2wSWvnXFHVMHjMyUs8wVbUihNPvnLjbZ8LUP6FQk",
  "key16": "5DtqjiKCHQpV9vTCoSLWu1erYNXNqE4QPJjYTYgr2gc7X8ABQV5yvHKqbY6MGQXSxJLGEXCRUCsobmbztERVxend",
  "key17": "528m1KJZaKMse1AFGhsHmsSysjuUPXfYJpTsizz9JiPcFfVnmsVV4Yc9KXh3t4iM58RmeFnGgsWZYJtbDmK3UwDi",
  "key18": "2SukYotDME6ZSY1SrjmMVLMfEFenYA2V12ZLF5hFUZtxwUceEcEYqXJbtrugVhxUy2syeHqpSYptPKLvzmQdFDZf",
  "key19": "4qkw8jAQF8fjuGypAmJTjX7YBmn2A5xkyZ9geix6mMDDd5ZFobAgbHEH7x2YjMsjQoZACpk6zGUTx5x9BeW7aprf",
  "key20": "2FW4zUYCjSzV6yiCtGLtWutwTCF3nsG9iujmyxMKQpAxrcHA6wRq6RFthbNE2WwKjpu8n7BxFZV2AmftRNJW8xxD",
  "key21": "3jztLqRKRyadcriApEbcoMbqZPd7S3tQaaUBcAVcEjbLF74VL4urQufP2jLL5GU7ohHQ9xjARb57RzgBBMo5LWqo",
  "key22": "4PtU6TLxBECP14k1exS3NwJF3wx126KZ9tGQVpf1EHsoTByMg8M6ThE9w25NUhdaj3AbaeAGrAYmK6rUqTMch8xi",
  "key23": "3qFby2fknFtppvwWq8iixKZ8xj3kLgXBKrqy91zr9DXzMLYHcmvH9oFthx4t1duuNrXjM5sakvyppiGqsQBkTFjX",
  "key24": "3jx27geiYYiFFYkccKf5S2PCK33uuYckrJibLUs9sPCbwFPA5Rwe8xJ8TRZsU7b127htCwgqDtfULHE5MLFac98R",
  "key25": "45FMLbhxes2Jjbu47aPiLyjyfqAs4zPWnaaRj3q5NgjramzDeExqLoYX9jvDJNCRwa8znyYfBxQvyn5X4AxbkZeK",
  "key26": "31aZjKVsEKjRWKFjjTJatgYAfK4Cs6x69utfQb9Dv7p5hG4aMYDsiFSWRgezzLFY46ZScDJcenHagYEddwFhkSbh",
  "key27": "KzFxELngSTyM45HXvW5Pmpkw6DotbwJSTfAuFPuKLtLDcz1TZgm6M57yUvxcnngeJfEXPdPqNh1AaF1TWxhV4mG",
  "key28": "2262qNb15gafmuhmepr8uJM8K1DZcZvxH9i2VpxipmCkJ2oXN8E1WKy82WVUMG72uw2afu1w6bJV6bEGW4hxAKN1",
  "key29": "3Pc87XFv3AGVMd56dia1YBtEiwBBFUBykfaknPqZ22Ni2MmBuumnB8c2vGBvd8x5BC3MbeR49gEz2hDUETCrJNSu",
  "key30": "2ZEM9ErsNMfEthgKS92dAruLFTrrEBeoDEgVgaSAEahh5dZQ4i8EtznS3irmQVYHUbYjg5HvqngsdxV1u2x8JoUh",
  "key31": "4xk43YLe3TGiHRQtJydcFNP1jbVo9nWbAEp4RFdDhmiiNeNd89x3aXKg1iLCEWw2tUSr8tHDoREYThyr3f4P9LSJ",
  "key32": "3qj2vKMRvuEXXNRuGaWiypEwyCJKaX7L1DSn5VeqWGFQrxMee9RiQ5crqp7UeFHH8T6zN96eS7DPjmonXFDdNkQ7",
  "key33": "51U1sEG4oaCs8X3xSCToi3sjuMTEbp4WFi7mVZVy9KrKZ6jvYSvHcN59bjbdMPzmNWorNkSxrBC3Sh9MvzVjy3KU",
  "key34": "cNSw8Gj7spTiW9X9MJsxiQcJe5zymdQAMbb39tm8Q6jLNaCT2Skj7oS2zS88bTqPXcv9qiuJnJSYcQLB9d2LNMY",
  "key35": "4GFyLDuyZMZQ9qPwiA7xEmDWn1ZE8hMRCWwHMvpH11wgj7p6Ai9Tezb1NRGN19XLi6p4rXUsysj7AUQPKzVkQJ8C",
  "key36": "5tMmyHkTuEZw5SaHkvfckVkAZqzkx3UsbLL7TjNMTtPmjPwCH58Mr99CoKHJGGyK1KDoGvMa4uUqHYhYu3u41Bi6",
  "key37": "3wWWBXcJyQHUGMBN8NF378fadBXj72atA2K5qV2nDXEqzeTTMvkCQGwg3m6xNnYGyU9Kvja63cQhVan976LMFZ9c",
  "key38": "4U75HbaoFH3iPRHscNCUSq9pjD3B4zUQLjirFCC4KoCXvE7Wv1H5GmjSNaozuzWjV87zdFGm5RdRCC1VEaZmQwn",
  "key39": "4zZb8N3gk9HyhYpgom8jzkW2s3nuUN4nE1fAW9Bbf79dGtWErydp2ZUQMLTnfCHwsqwFYktHQJcT53jVaiAnMnNZ"
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
