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
    "4pUarnK9pbWcqoFsWcuWcZtDAvb352ARdjMCxaMjJPZcDrwDBdBaLf3LkfvguBQAnbJXMSvp7toBGjzPaUH7VrRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uv4ycWHSYHQ45BP6DupzFvcWgD6iFDPLRAM6JQVMwABPCdUannpHvMwKHihBrGwjKNmHmhQCjJ2VVBjG9winNBH",
  "key1": "ZcUfrR7D8EW1gCznQC6kkSibf43GXE7PHXnKRmXYvmKVfX6n6TX1DSiLinhLvKEwB9UFM6munTFBCZuQhoxnBun",
  "key2": "5MnUtSrDJ8wVYvWPosmAvmaQ1aFf9sFXymgyNHCcvgWKipi2MC5usfSt7HsZSNVmsTfuK2bMiv2EGQiPucKmj1sk",
  "key3": "WBjfFgiknjiFRWnmrPALgQXqcA67NemLJZ723nQGsjNi3LYnUZ2reUaJq63PPwY9bnAW27sVWmJrbgjV3gp4Xq5",
  "key4": "4CexauDBgZCu77xSoxrzcYwdLLesoirGKJZapSC7k2pU16Cr9aGnx25LsUPSRCrW7KEiR4pPErs8cELyn2kKorWD",
  "key5": "7omUXvZrHbLSx3BhR7tfznBePJm2xTURaTdhRrDzySeNRjCGuMhqXwbHTSx3UmiWFHP6ZhsS7zzPYJvw7sixXMT",
  "key6": "66DGHoZQ7kybZbVVw1kCc2HuUvEsPDmnvhhXP3naCj34ZqGVGiHcidAu73K6txjL4jX5Nsr3WL8KwKFFrXncuo87",
  "key7": "3S5MAmPn9UnxZV6rg3CaNTWhVnvS2nwgCDj82KiVwePiAg2XE8GknV8zmeubnnMkbHG8xaL3X6uL6LpfSjCTgCb1",
  "key8": "4NnwsUujFocrK5f6LHsXDADVXYg8CwqGt81c1mJcUzXYrM6Sm4YahGx1Dvy34mWhJSqaBeuKsGYPbi9y1f69QXot",
  "key9": "2Jv71vLcbBTiPjL8PbJuBWQG6z55cVjiKTYYh42vwzR52r7vvsxGs4tFVpRc1XXUKTfCty8MtB7gKPiqA555ZKfa",
  "key10": "7rcWXnXrooMm9Nw54Jb2gmprbQvuK5mqY1qxoscn5oZEf7p5sqoeo6iGLBUeyYsFGtA2GgTTB2ut3pY3ZsokApm",
  "key11": "3gQ4zaVnk9QGzmMTQmBGYbnToDkUyAeYH5dchTm2NJ6MZttK3YcsgT9C3QjrfLdWg57HscXsSgtP47LpeXvrHoAU",
  "key12": "7Y6yJExdoChQUgd4GRM2a7YWyxiaacjQ8CxXGQdaNSLySPGd4B2aUtPfkeDZ9arSukGtZEHLAExq9GK2VGd25qq",
  "key13": "3dy6TTMU6er463yvFGacG8LUGsptUQvVaFTKJGjQ82ASKJnvsrwmsCJ9wTpw5XqCkSEAueDG7414samwrRTiphFE",
  "key14": "53goW6u2n6EYV5mp6DCkgFxeUxaru61cxRAHUEVZMYhCG5LwUqG4cxZaTa5Sj3DsEzfiJD7LUMbjHw9jedmEYyc4",
  "key15": "4tCmHdLVDMshoidiu5jm9DPSafyiUyRke6FxvoMJFRg4PHfSA73SWE7KATCzT6Pzsau2ryyeSHD3WPz3F2Lyh2gt",
  "key16": "3j5E8kmziQQDYwmhF6kZKKBb6ZWv8q1nCz1bd5q2P9ettgBCCNu6fdxSjUD62mkc8waVcWAytkebAmN2wMMnTsZb",
  "key17": "4rjNoo9fDLcLfnEDP2PA82b9L17gqbwH4bPfBWF9rYWt71n9AaZ444ctwFQMU3hBQBPg2NteQ7zJFEKWeRWDe9m9",
  "key18": "mAXo7CDtJezDDq1D1hx4AXpTyN99HuwvimoeeyHUAsAiNiE6L7tLvT82br7Ru6uaHCAf6YuNSH86ppYsQYLpVGA",
  "key19": "2kx5LYifekJc7pCDcYzBY2g3MMZViyLxnxuKvJJPFXbQcoM6un58PibczjdEhzxK9at36LXWQ7AWsekuuUYr5SYd",
  "key20": "5BE9f2wcFfXyDF5YczomxHApUn6mPQakxctGku3hCwt8yp9hCxzokabHwUj5QuLpSgAYh7TB11PNnuHH4A2vNGtU",
  "key21": "5Wcb98sREZc1SBMC4rfQjyV9TeksJFFZnG5AA2UxX6QRGiKnkSYYVxqkzp1bXZV1WazXw6LGtUeJyHmub4RXiCBW",
  "key22": "4YcPWTZ36mFNjLhg8mZMownJ5mJhfdrKwXkyiW2rFFeqfxt5YbvZb4VX2JHUUiwffujRycGHJdNmnfBWCwZpCeB8",
  "key23": "5hn59xHyEvsLgGAtYRMWgitvnNGBNvTzXDzyHm5uGaX19bp2LWgfnobiPrHAUuDAsAxGr933xjAGq7teLxchoLvK",
  "key24": "ofepeuAkUnUqh9AVEx7NvJ34fK4iBz6X4gDEZLW36sGK7Kby6cjy1x3FAkwxXdDkNS735PRjSkWGpH4JJzPr2v8",
  "key25": "2hofeC8fup4Sn8iCrCwYN1WBeUhjhYGEuaFTNi1E9N7Uyxc7Xb63Vd2LUS4Kh2kXvca6fNV27EE3U5Ntrhus3FR",
  "key26": "3MsajvF9xFBF5C43LyAK6NVNnACbNxA2pBY6wJAiLcheTWTyDethv3jRt2J27e1JQUhVYsimRfpZzPnP7SAPkzo8",
  "key27": "654ou3PyPa8PpUS9HpbxXPFkHimyKU2TG5LZmrnT4eo3yPbtQzehm1qnZjuWoSKxHH1q13Bfa1WTTcFRoGZdywXw",
  "key28": "3ndRjye677WQZmz2r7GxvzFMTVtwCYqifVQe5eUge1JgNYtmNUxTs3MxzsUAGbVXNDxr9qs3PU5tX31o51m2ULdR",
  "key29": "2oBcLcEbts6EJA39i9Tvkasg6oz8otNTeiv2kRq1ywc8r3HvQDdqYozr79WVBp9K7K8wb16DWanKAfgFJh4ZD8kS",
  "key30": "3X2WqH4F7YEN56YzDYpc9khU4CRQmB5vso1B4Eajg2BVnZLdoPibAS1CfoBe6YmSZxrMRkzvYddshANDhTarkUSW",
  "key31": "4bc6VBYfcicJMi17xyGjkckuHLWfstXyK3oHTc2aEj1GBnPaE2XVDe4ce9e8mxqm1U3PcbYCb9r4LTeVAMhnKUKB",
  "key32": "4NfabxWg98pSo3Ycm2d9sHqU3g21DHtJUyPFJNcVQPeLLgHCcFk5JiXTM44rzhE4CHNiagaFBnth53ejzhYWqtgy",
  "key33": "3dyHF9pRfSPUQwCAhJinnNPKC6f1wTumvvAEpZMTvLWWDPUVbrYdhqSQS7AKatL7b69hRtRDEXakkfKfymzA4vhW",
  "key34": "3kzwXsV4BqSV4Bgp8GvtK9VU2otwKq7cPpRifw7eprW8Ch7Dx2qXY7sSQfpPu4mATbgb1NcG3e77x4fLrk6n1fd1"
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
