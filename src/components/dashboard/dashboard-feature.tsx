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
    "2H4498SWYLfYkd7sag7PCCkKnM2iiZnoVPZFiTaHSVfYf4E1ZCub8Xz6Wr9A2M3y1ZvyYpC43KgyR7YmkpQuUG6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oq2Q6WsBvGPw7uCZXct5Ht6g4oWPmsMkgbJwL5cGhcKQ4vTBdbtrJ4QSeLAaKK5bwywRhTNPbS6C25dFnRmhob1",
  "key1": "5T1yAGpfWWg1uJSBegWBuHhQnMC98CbUrxeHGVfF55fKPnPQjm3nnhhttVa2yjqTXL8BbZ1jiAFY7exVhu4z3Mze",
  "key2": "2UoQakf72qWwEAYPqkR8PUF5LR4P9A8vk2ZZ81opyMJHNqMjkzz2v4vx5akhapQmU7WQZaQYwE6vTESmUtz8jZQC",
  "key3": "2ryN5cCbeZjv3VwQViYbrqSig46JMj7FQKCXZ81mkyowpcpcmPNGERw9qLv7Kt27ygTzKtTRq6395eyjcRnc8vYS",
  "key4": "5hXwNnz2TZNrJTyBpCrUEHxTRCnY3vNEtvVsDUd1z2jh5uENLayWLtnqbYMuNtiacrtAMpFjqn2FY9h3tFSPD1eF",
  "key5": "5fB3LzDngoqLub7n4ZfErRTbfffszao2yM2Qok7L1kHZEpFALhQTaYfguVx5UBy3myb6KHi6xeUbbbx9jKXRaZKq",
  "key6": "2yUW1Kx1BVzxTVvBgnRQXyJ91SfzRquEabqQRjjsYG2jJUkegMFsQWB4XCqJRPmvuG84CotFUfqJnxbeWy6GChae",
  "key7": "5aFzDwBmc5dECuTr3unxtc3XmK5mkXBJXgWF7om9ut6J1r9KLLLqXUBnrLe7zDjPSjyPBu65EZDYf87vJTigCLy3",
  "key8": "eSkVbxTXjV2DaXmauCgXxuENGxLBvogLyZQxC6HoT9pNyHQ9gaZNdHtQG8C8XrRgFLU45ACTSmX5MkoFU4ZXoMr",
  "key9": "b2SpJtnPUHnPy5u8vUhWEQpDuXmJQpbQCeJ17LtMzgu7dzsu61JbLTg5iHVD452ecjeLEwDGt3cQK8zMsNLGBFj",
  "key10": "5zpzFen8NAjdXgtnt2mRAAtnGmVhFrxForsHZj8yiQAFwykzwHt4V5mVTn3zJD4fpADGXXj72sqHncenj3HeTeCS",
  "key11": "xD7xcTWxR4abVZq5rmgSJhmh9UUGrTuEvtkxLTUUdi3yKYB7CjkcRA9PcEEg5BYz4Q8LrBynQUFmSevTAxJthAC",
  "key12": "5mmYKBFTds39V7nasDeYoZUDGAHzC24BafonE9thRQ8rEHiRXbvyeCnnXoo1T2ujd5h5Bu7XJTyzfuSAH7DGEuDo",
  "key13": "5thgyCGAdwzuCVgDMbmWTtorHY2fs3RxVqYx3CmK9WuwUsAdTvKUYB8E3tJCz2emafsrDz9o1EyZ3CJbsw9yGou2",
  "key14": "vGLXT7B2ykNZRgc5gBsdivciHm188YWEZJFjfGQUsErqampchb4JyURKQSdDABMzcPdE6PWp8TzZ76GceeFaHcg",
  "key15": "3VqhZHHdSz7AKhk7vnkjSAD5PfGusPaxzTGK6WnfB7wkkyeqN7anSUVLjamb1cciC7b2yFNdcrdLvRyt8XA5giQd",
  "key16": "4E6ohyJzw3r5M6NRoTeaXXBmQB5MfLgvAF9gKo3EMoDFZaZea3UeNUjyd8z8YHJNKVNcU7fV9ymiWhwGZLWv7nBW",
  "key17": "2Gwh5WTfRoSftmKjteYkJJfUW5gju4y6GQfDd3vGAee6iJrybi94wRRFZuSHQu49qGfmEeR2FV4F3NypRorz16aJ",
  "key18": "5nsyMgAHyS4p4ze3qstpvUKeRj86yBUn9EEjjQupyPEHEqZz92WNPvbDxPCdVzXhhW5gAocCSzdztZDNNXMY62cp",
  "key19": "62gGmEWyhtiewdrm7AHbTXqjTWwKP9DURfAUEv5kKkpJ7RHvUVctwnPuN32raMo5PYC59PD8DyN1VVcM5JR3FMjq",
  "key20": "2EYwmnkcDPH159aBMCjcFqmugyHSiiQySrJ8UVR3orKUAFjLXQeG7ytE3JsgM9u6hv5qzz82CvHVZ6ogUFmkFZxg",
  "key21": "3Vusggeyq5qkYGkexEKPfqwPD3PKyaQmDuVBTqCLjjHtfYW1RRsFyp6AdtGi9fk11PVbiEsxfuJXZys8g9hWRENn",
  "key22": "3XNN4eoupx2ZYxn3tjFu8vFZugfmSbcgL2voh5uysPAs9wLH5qUSzcFvAnGrVNZirhjVhgfXphg3FmtQ2Qke6HtS",
  "key23": "5sqnauM6ZxaB5gJu4hMaqmJQXnbwx1xDaWvKbVuVa4Py9i8DqCFDt4VEPvfzRy3wRwqjG9DvgzAAnyQcxRQB9dWh",
  "key24": "2N6EbcRN4txTGfPbPPa29uQum1UKWpzUjUVQ8ZLzq2vZNLZTBMUkZ7mmBEgZaNVZnpufx64DJFeZRjz4vaDwfmSJ",
  "key25": "5QhHrU5DWFvLs5pmec8QqnWP2ndjWBtvkRa8ZLG8rMEYzq5rQw8buf5NNW3jy1AZA69Po98sF7SqFbyfApkCHFS7",
  "key26": "5xPFbFqwmTp3WeBhxXm3FKV5gnidf2tYqDYDjQn3j4ufCKS65hTD5HwMxoFZZjGmPtQUrN7qEibmwBug59MyLM6s",
  "key27": "5DtN5oCwU733XAUv1mW1Q7zeMjdpm7KTv95CzM118UbNNrHmE5R4iyGS5zmY7HU4xvBKZdW8iKhLZvG19MhQQNB7",
  "key28": "3a4ZbmxEso5VbhWjrAZmtycMbYhvS1PzyxZznfyktKuECscVcs2KawbdB66sA6eyLMJyYRNPsn7NQDjsrzR9CwCG",
  "key29": "54BaDsqz6iGReAJXJ2kqmTSRxgPnJBAnQHavWh9gUvguUsaRwZsmHnaSnWPpX47BiBuL64SXBMjeRQtsN4bdL96j",
  "key30": "2UDYRt4jJnatwZpYXAJ6LCxrGA9sKrNeLTBKYPbjRp8vsbqxeuYHTrmB1HvTnFhAxn4L6K47XgdPNp2CN8iAgvN6",
  "key31": "4EyWcgS8xkNxT5Dpn1Ure2bKvZWHDHP8b79h75Wa74RJmS55yTDnLRsdqdwGNPHtV4rJD74fhzjVucP55G8T6YbU",
  "key32": "5d37UuxkxQbooNRBgFUdje2JYrFQhkB4Q9hUFjQHZuUCMM5R8tBMn9wH5VpKx7XAcWbRUWg9X14Prs2WcTTVKM6E",
  "key33": "42nwJijadyhVSUYa5bpyNf9kYWRMYANeFEEKnYUUxVAkaMNy3pavEViUsiZAT5gozLTiMeKWwn4KTKRg1ZGuxRCa",
  "key34": "2AQ7KRWnkUUARi5CvMSvUU663yrTpiWKZVptREkmydgJc9nXKD863jYUNM9MzfK77ETkgJcCVBA5T3JxLJATgpoi",
  "key35": "4cF6dB34mXs5w4GcDV6FFyH9p41pmQXHqVfjYVbLaiNRykCNMXkz8aHyhmuYT4yFmVd7DX9ASKbQhJXXtUygRHH6",
  "key36": "33M6qw1YXUPV4m5hYt2Tc5iwtJxD5DHEmKAsdicQ4AAiovarCZjDL3ofSDEDs8ubBU1VgQS3whJzssgcExP6WALF",
  "key37": "4WBTncWXQLr3ZBkkd2iJNayJLnsyDpwXDjW1MTjaQrCiAusEsRRJLRZut7V9K87e565fune8aYTdMf4NaoSHrJYM",
  "key38": "5ydHR3wwkiNSssN4acZoaBqbEbjQ9Y3exxtwxAgpzmpgcL7CPMvzJzN4GVEJhUAq2EYZXiTUWYrKmdTR5UkVscJj",
  "key39": "DnDGEji8AyDJPtByofnfna9F3kScKJkcTw2pBuVjYmQFCWs4EBLHwYCPKfjmSd4x7qvHahPabymbAEw8LmHt3SP",
  "key40": "2CZhdhQwUvqhJPmC7PUviKGH7oHeYbNkmikMq3R6ddVt22237tAzwXEJUDiCXQu2sbhBH5W5dyKjuJAXMuyi5R6p",
  "key41": "4vTdcMum4c13azZyiYyHtieup9kPnAB1hW5j7zodez65DtoBzqu14qeApd5L65psn4LKCZ3bQdNvcvh6okSS3anX",
  "key42": "muzxSn9W91ziDJk7mPonjP7YTeFeUj26aKYTRd9ghgEiMeWdjUH6LeXvSzcngBhQVXShiYR3R7mpCVdYQ4YG7eC",
  "key43": "2VB94a3ygWE4eEQJCx2Z84BuuCMP4tPSAQnxGQSPekK5zpgBB8d5YMVe6p12vthmXjxwjCMTjmTmCccpKtaHjjUs",
  "key44": "Tktp3aNz2QXaEJjWTrZuHvkNDAuSgx7fG4ypa413rWWQv87pJuFXcT91aPcXLL4MKsNjnmhJZFzoEzM2Ms8F63u",
  "key45": "37isrLquXk6jAHNffxtE2bAVpV6k2bEeYVPeqnnraDkZqByvjwiNbz78SrkFEgwyYdjH9wdgA7HNtph2bJLaSQ3s",
  "key46": "5TtWq44m8vVGvGt7AAoESz9RnC8KpbZuDVDqsMaaCeP6aoK3mzoMHKr8zET2XTiCswuHdpWEaoaa566kHV5ReimW"
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
