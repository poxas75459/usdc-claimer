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
    "5Jzj8Xo6dFv2PUxBkLHgXAXQ23BhvpiwFMPp6WcqvVf9VSzoj4fAtmbQZF2ViihZAV9xYwtChzHVskptJYn9EX9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cJdFtAYX664XAChPuB1TWwMcJfUPwq5V3Bbg5zjG6Znb82tCpB6b7C1x3Cvjs5UKVtRsphxVoLaGtQxr2KFDHyB",
  "key1": "5157WpGDnRXfnotNjBY2zbkpeiJZJ7jsiKYJrTkn4m8MJZh84ifmrdoijxY8jY2Wjf2NMtxuUeZeHqDwHQZzw1fN",
  "key2": "ek3EMNSgd3xu2U3bMjsQK42tkQAeNXNu3xXfhoQz4DTmdMUVZtz9sSjP9TbGpMmkxzsqQwZQ6pb2bMEotf97zmg",
  "key3": "534PUN7vBEdDCiZ9d4rm4ViAYxsKNr82Lo1Yujo8gWBXov6QCKu4gADBc2SjQkAADNL31zdDfKcU6BxEQW7n63Tq",
  "key4": "2zUMe3z5o97tfARZD9EwsScNgE6nE8xC53GVyveqPCMVXAsZYEoZD4nfHiA7UZgnXttBC4YDF476WtJKPAkHmzhJ",
  "key5": "5sugs8uBXaUTcyfLuLeoNr7XJgyTyShnPc8Uju7JWjWyCX9ct8izCKxHx4cKpHtu6FJ8hxrXcvzxzC4b4kzhjwyS",
  "key6": "2vmbJa9k8mqKbh2XHgwmBMh8bFNUiub9tZKuH1s2jSX1WhrxHLq7o6KyWHJcgBkAHSmETYtRp3ofGJRMfuxUxoBJ",
  "key7": "4BWQzNwDZN1WS12rqpy5vshozJ3tzb4RmVSjsG45L5A2K2Tkhmo2Ga51FnmTb3vwHM6usGYMDeYCQXMU8L4fa4av",
  "key8": "2rUoMCVNA1JQ5eUJdqR67hdCCAtHDewqaHBf3H5PbQzHoVadArvtKKN4AHkVq5pc6JKFRV1H2EKqDmUjAoMdsTbQ",
  "key9": "4Baafpoitfmf3iBDcH4MwZLMaPcL6jHCtpWj2bkn6QeEzCvBCWok81M4Ckxpp33Cc5kTdcXnqftVKGJ4bBqBJw2T",
  "key10": "3ufcz8z4Y3ztajn6gnYMAGcY4VjHMv1bWuQgLLPMGsxyvjqnpESgJo7VECWv7DtmwAttRcVZdTzdz2nWEwRM28X7",
  "key11": "2cSX4dvJXwftDtAt1EAGWyQTBkueChujBkmbFi8EscP44LLY2tn4k1KHP2Xfdo9gXK6spNkf6yvgcwgBQg24Wj9i",
  "key12": "59r2KUUyzDkNxyUpMdifSPKbHy2cyv8zJU4bT1kFCcnSng1jofG8mJp5hxb5EmMzVvMQPzpYZVVQ31RtSfxwCgH5",
  "key13": "2bmcZawnvEXrMoZZysfqJByaLfupGnxQhLpPgfWceqAMJBW85v22xxgj1Essdx2SVvkuesENi8d7PkUFX5w3v2rq",
  "key14": "2SpnSH3vxKApRq3e8As1B7EbNwAkb8H7HGofpaSZdarvTXLr69CehRGXae186KD3LvgfcSxoxb8aDoreAL9x4E5Z",
  "key15": "4ZZKS44RKAbJ3SXvaMw1KapD14HFAqxZAQRYFn5HWwPfS3WgFAoVSYNF28SD6q8NV4US8QwJXTcJPivUR4uq3SHK",
  "key16": "4WNC97UPRFiEJM7azwTxpSfJ9MMzZSEEFuTnAUQfxv9HvXRtwDVL3Bb4CmZjZvtMwRmr543j2SrsAowLjqL1V22y",
  "key17": "LZQKwj4DzcTeMUfkPymugcepRFxKuZ6uQeqJ7ScNG5EZejg2C6uKFars51WJ2QpxPNoLvsF6RAQgM1n7ZWfPzfw",
  "key18": "3JYCdWA6HftM89UY3wVkLw96QjsYa7giEfcfvcq5FW8qtpj1oEsg8CELcCds4XMZyHhMeLn3B2JmDRBGbVMmsSPn",
  "key19": "2oebC3G8tX9n16vCkHaAi1Kg67T6nyNhoX8Am5zJZGFzXK5QTcC7ngzEUDZ4kYHYBbUn7o5WTSaLJgqzAGDFRmup",
  "key20": "2Yd3oyfFWCy2qznbhR7nfsUDYMjnL6satBzUAkPpWxEWdkBZQ2iSQpqMjtARzYfvXnjobu5sNsGoaaRnDmtymnsW",
  "key21": "4cvnMm2ZsQk8Eqipa6cb8N19zKMF7oN6kwxQv8hxuNgN2D13rjHN9wmdtGCSdzaG9ZvE6v9UBzBgte4sLQY3xjev",
  "key22": "46QPyvYDp4u62UC9Kchgr36ovBR9Jum7ZnFfsQedZD7jwKGu6niD8S7ViGTeKgrpAFGkrPScz69RDWK7tVEXEEhx",
  "key23": "4ZLz2QoGQ6yvCxRag3E5HNjkGm8SYJv2UiZNxBXtCU8k7QeLAbXA2hYPpTEhEKtgntrQTNDTPdt3ZvxiCRsBryZw",
  "key24": "32dMkVSFe2erkv2H44jaSEgqe6Fr8jz6aeC6XEraxXQxo1U78M91xQw7AeJxbCzChrSgbKsmm6ETKQEaZBhFhFyt",
  "key25": "3aXTCzdHseFLczmKPDDRWaQCRCzDJGGJLBkZncnjt9gfdqu4RBwEJoneHd96F9y9WHfM2BfZu5s2wfK6TZyLNz6N",
  "key26": "5KqTmSuP5wxvGzRUVZBRkQoevFjgZHdudg7yM3ynsnqrBsg7VQm63oDdzBx9mnQcK1UXwdEbTBN2E16CphLPqw9X",
  "key27": "2HkaorQ4PHTD1eBX6ugnqyWnMPK5jBf15DCPFVASWF9AKf5XvhEchzeqCQSMePnAa1sCntU4mXb8Tbi9WvTtXLRY",
  "key28": "5aSrKUKp5HaZmkFU7KurY84ivpRSUF9fjXbjq5DKZ3yPpKRi3SjBGPoi46nmTD6bC4wZz7K4t88M3NBjakEsV3Uv",
  "key29": "5iCs8hjMQNyxovZQFP9UGTSBH8DghKHyrBViyQLV2aeNy5VLFVYpVfrYJoF8MASdF9QBzzo74CJAdiZtQaPBj9T5",
  "key30": "4XbFdjF1XtfAR7DCaL4ziM5MLTt4EZrbiu64J3eMT7ttdZYvhPCfrEG2s8MAoAxNQ2Hiz5m3xqzwj1tRiQzTMoik",
  "key31": "39hbxnBZEfcZEBMCL5798yLvTSW1SrF6JYyVLF46cQi9ixh3H9CFTAj2rFDXV7zWPU3VST8yjrxzqpYqRmBKqMi",
  "key32": "JZREva5kUdvfx2gRhmxA1kTU2JJydXjnLLi4CojN2qyTyauc1nmfj1cevjsg9xfWN9nxEMXXsrk7X7PRwaHVXSX",
  "key33": "nBbsgguA29wcGMZYgzS2iTgKNUAfJQQSNjAgYKrzt9FDpHbTVYfgh614gTjaTYt38DeMn1qDw8wdSD9r9yY5DwQ",
  "key34": "a6wMuheUb4yi5v8sx5MiD6widp5Y88FrYrAjLi2BgErSVTSJ2JLW9ZM52F6e9WosSdSkfEZ4SWg5RQZXyDexihQ",
  "key35": "5tuji2KAnNcT6Nqth1JnHcF8QwmgbA9Yfbk4pgRzXwidbTHcrxvQ6wW1q9YF9XSJqfeFQ9u6VW2Kz4mjoHW3ksLs",
  "key36": "45vZwsGrirQdKWiB2ZzPsi5CKjFTYztfdy1S3mBG5k5uPnPBsUUBFpSgDf57tQ7cjvQQpjeXx3gXwqHeZFVgE7pf",
  "key37": "3d21gRuW7tusBSftqsf4fxbvCzXrLfMAyF2ZdjzSHNMbQBtHvB4eCjvELcbUNDALHaqPExeTfY99stwQkzkTfKxR",
  "key38": "5HV3isqmZwZ7uhbABfp5Aqu94T1u2bdRnTQCozyCh3LezpzH4GMmwRnspLK57NuF7141tBm6jAbad9VejTjFNvNX",
  "key39": "2z1gzinYF2hNVnmy1rf9mkSXab1CcauVSoDbAh9rbFmS7tE8JeURLCjdC6pJfQa4dbNY4pdUbvuejnFiRX3Na1H8",
  "key40": "4ERXgVK5h7QPkWdAbT4B3ESF5BtNoq1RNqHDT8NES4W84jBrdDSr9wFhMT19gbygLSuwspsLEKoai71CoZuaCFpw",
  "key41": "yTjTAobzCxc4iPAh9ZLMBGFE5QaFd19bhirN3CwWaQzp2vu4amMCoU1mjD2DRG2ELwrWXYwQC2zSyxxAAcmEY73",
  "key42": "5pDVyjSKYHtP18UZ67pHFX5GLvzRaLfqdFT3nf2mVve7YZ8QLyMj3ybWJj2bsycyBZ4BoAVnTCF1FDYbHEeXNTVA",
  "key43": "2JiDdCptWLejnWje2VzNrY2R9nrWQexDLh75NBJjiFtn9A8s6SQ5VwM19hyFwFNwxeTBBU6fugDsCTStvXzoZLyj",
  "key44": "5kzRDfk8VgtKSecxXM2QzVoqNMcsRSeJgVKFKjQYPs1i1PQsLFsJ9yJCCKvMhwmfsrCh9DAAhTg95esmcHrtN432"
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
