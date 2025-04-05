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
    "4JbDQDvhwzAPLGsKU9yBBBCCUcALT8Yo5XBLfyKXGcLxCUSPzSntDwAyyUBNNwAuFGU9c74LzFnu1fpucH1w81eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n7ThFDx14mo4EQdR3DfrTKdhn9ZUECbT8mystcb6EEQhhDzPg77m1D9wxrYJ9rtyDfkWjo7Zs6Ak5CT4UFbMyEd",
  "key1": "5RyLxLtGgaaKCkdYLE69GRicAqZGJDugq7ZYdB2CjNwddzAea6U9s58CwBeC3dWHogcyTyqTw73y7DeaUK2RaF3N",
  "key2": "42qJMCrx6UQPa24bmxWPNsatGXSHbkCzJ5Mt3ZUjXfgFy6b2VzPHoNrMuQ7rTjE2TXNGZ6XeGdqHWggLhhBy1rf",
  "key3": "2TM4iWc1Edd2b8dGS2kdAu83KHzXbztD3DRW4VNfyC6cb2hYPcyDKb8Z23pFGpKZngvJTto4itdH2szmYo3vwYf3",
  "key4": "eExuRCuHbfwZUWSudfSNxDc8e2JvjV5qyW3P8jkGJPN6cu1mfrqJShcntTucSyZfurbHL42ADZhBFNUYyxj5TbR",
  "key5": "5WbnrkHvhbVtxsMpGSoeR3HTnMzLCp8V4qFcF9gvaeV2o89qNXKivPWLZdwgLhh1Tkh4J6KSx9VTebFjQsGt3K6P",
  "key6": "2ZQwi2dvzYUMhuJ21y3nGRVXiyToQNsDW84dWoGj5GVdU1MhtpvNSA98sPhCCw5weaPR1YKXqkyvbnhCgYxjeL4g",
  "key7": "3sWuqdy8dhbkoKDMbG7NYJrWJyFfWryRQR1ZtNBLKrStHzDZnvdZ4USuFuGqa5TXL1F3gabEXvhVx864xNYXLdEJ",
  "key8": "4Mktn5kq771qZ1LBmBf6F4FvzkfcJrsbhppSntWHuxEzTd3D6edKArB6mNcALQSk9wz7oMQmrHixT9Ao5tbthPdV",
  "key9": "39NHqHAGhR9nnYeHoBJY2dNiFbYuSxrkmAiSEWNDWzqyG2pmJKeybaYKNF2ybanqGUKsiQauhejkp9FNzwmj3gkN",
  "key10": "4qbeA2gXtkC7RcuHoM83cvqT3Y5VMzXNsA8P6iBTj2DtQxD1cZZ5iwieD19nz8RC9wdxJwnBHrBU9YpRn1tK6FwY",
  "key11": "3M1W7hL1EGz5NfTQKqetxyMeX2T1AyhqBd1Re8C5ydCd4Khjc17PcxBFjwCZfFPpptnRdnTft89ggtKTtaGLRUh6",
  "key12": "535aWweQPRRX6JmQhqcZsAy2W3ChgbAadsmTGnb6ohSZrpR7CH4SbKJbj82PhsKdjqiJGUB9U1YSnetKs6x8HKv2",
  "key13": "4G5wLyypgA2UbYv9cM2JRy2ksopQoLemv9DJiFrrTp7SgvL8GF8PSfBtK2htJUYun24cmuZswCZnbmKCRSAujoPb",
  "key14": "4UGLS8YZSrRHnYX7FAfadjxwrqcSA8h96SATVKfoXsE75SJqqTeh8QKS5yiwYAszC2baaskXgiVNiPAedQmtvvZZ",
  "key15": "4qVa9G6FpAyvcgBxFZFsroySFWkqddvW6HoC3ffot4BZor3HJFDxqsv8Ugk6r6tp3UBus2PhbtsSaoNyD5i4Y9J",
  "key16": "4yycXiSWnK61pteEPxqA142oQSKvkHFabkdP8deN8CmNqoH57sxk3RBCaVnVTZM9X5mokqSMFEfniF31pUgDbscy",
  "key17": "2iUqY8xZR1bUY6HYwRqFDDqfqzrEtmu1nwNvM2869KB8KQfPQhJMhp4nifLdDELw5PD5NYwbeZqjw49HHxBottMs",
  "key18": "2F2Esxqrs3gQmk4oLRWobitcriT1Wdqgj623Lv6ThModW7w3oCVD2hTttDCeUZWTLGymMAPHQDQwSxsFTzbWhdVk",
  "key19": "5iAx2d2tgPGYt94xz4G5TvgXLNAixstCKDppipaTFTBUJXFjVh4tPihgg54UFdXPYe9GqiyXozUwTL5adQtVeWLY",
  "key20": "478mJ8NZ6n7MUjXSKv3DgtcYMBSooqwnL4F4s4q1w7bE4vPexXW2XBeR3aQySuHKwSTjNDZFFgSjdg1h5tqx7bS2",
  "key21": "oZxcGzZ1VALFdWqXNNrUQsedUL5vHgqFcqHzwqB3uqzUE52P8GYF8Z5JqCg78stFzxzXq6eskZpWwkC1KFxVokB",
  "key22": "3jtMVwC8UhXYLyUycW4KBcohnUaRhrs472KPosndJk884yCgbo7TyNuXgqGFm1mtag1Y6q1fZEFkZSyjK4gP8Mjs",
  "key23": "Bw7n2r3tybJmXMkj1gKYeJ6fbTtmkyq9vP8amKQHpfcRN3whX2XzDpy4dpuzGy5CmBMCBe3RuDxofmsvuXFRHJr",
  "key24": "2iE7STVBBw2JiKKyQWWdm8xeWHJaa8UwXnNKhGNZLqU919oEPeogsWaT6v9sivM6cojhbPn9cBKHYp2qgkuuYaLH",
  "key25": "413u9XXEfSDMJsG1wVe4qKwNGPM516g9N4hAMiJNhyA7AomiJwtRX8BSoYPGJGr7eh2vJbRmMLzQXk4vzqU3VMzG",
  "key26": "GWcpS2x6jaSxg4tLuQcp5ygJsqU5iCkjdQEv5t8zF9bcwp53b7eUTtTGWEXWjYzifVRTQoavWRTkSncq4zN9mki",
  "key27": "66PP13DEzkmqTvQu3Jq7dsmNynGSkBqbTTJBXPzNtYtn4WLwxqMdNsfZnZoiQ3DsyS6svrg3Zja2DmWmmUeTug7x",
  "key28": "Siao7PnoimgaKAcrk9oPkWMDgDhfzJANA9RJ7hLpkc9ysMpsSxqsnrqcUBQPBJnjdrDyjokL33iZxWycU51U5xW",
  "key29": "3JhnXMK8EMmCYMdfqnBRgHMxY5ANCfqfkRkXqmbJEB5iLRjWo7kmFp8gkZwGSFxRmBPthv7BnQhgUndfqczHSuMf",
  "key30": "YtBG4vsEvC82YhFGLUuiumJukmhRAgo5kJDVDUDF6NfX9hjPTTTJcocbKtqxLHa57fY45dQCohWSn6BPnkRFePQ",
  "key31": "43sTeqVBSzyVVh1MxsEBBvDpo7tgpaQUmfmNaYDdbAf55pYnF8pJSojFfpwnSB3NCTMNyZHVpxaPhwbSQVQjRpCG",
  "key32": "42YtGZFZELVbkkeYbvZvNLvhDTodYUH9ZxcVJje9wFx4rbNBeQLuuVVHuGoMHEi8Bdrx5A3k1kmoYQcQD8o1JZKQ",
  "key33": "5HhZmiSeGR1AaTksAhPWQwiepLWHhpENXHQ28aL7EY5TPWJpytQtZgnt1wX77Lvs7W68BKkpbPJ8nfDUDr1JMab2",
  "key34": "4kLFZnNLxbvWK85soTpsyMN24uzX2bATEJyctzBtBZXBMdNzhaLh4NvfjDfAJszNtPpnopdw2rkqnnais6TRHryC",
  "key35": "5Di3JaKptNCmd2WAKLPMCTTCU3aVXo3SkuRx8Q9bUcYZqi1mxrS6QPU9Qxom6hNUgjyBZA7QGrvwmobzv3XifVte",
  "key36": "64TxSYeTb3i3iKTHy4tkw5N9R4QYjKrLiPADkHU7EEzJWFToh7vmaebiPGbYEaXLtr2mCJwD6Dzvx79sAwtJhfoa",
  "key37": "4U4PMg4P6ueLV1Sr8RSU6VyVH4pDwzMWGykuEp6hMa9f2GEKHphgC1LvLrp7szwsQhS51SbMBRFkVtnuPtEDgPZg",
  "key38": "2JePjZfCySy8LqcxfJWp6sFXEhTZZHtbTGS6XKtgMKJHg3Y5GSH7zsTsfHxrpi7LtWcKSbu6HRxbbMfR3t3Ujh5U",
  "key39": "d8gthwksvgKLhX6KiRqGiMFDs1Mtup5bmbHEmf2dRwdiQ5fS3y2ad6pxYLs26EmFfusLqUDKracK9yAGAKVdPWr",
  "key40": "3vMHMeTCmHP6JUdMwT5DT4jTZdXLh8TBgjgwptxFjxJMHVn4MsJda7aJ2LFpG9US4iVRPvojKnT9GKX2Du5uou9A",
  "key41": "56eFw75RmWXokCdd4iSwydnZg1gvEYGYCftNZnS9Ufu5owLGmQSs1MWjyvgbEVubmX4jKg7CpDRQGqHZyc8YURF2",
  "key42": "RVFxn449iqkthWcR4cst4cCRaK5EJCX7NsEDKbn25HZ9u7udiGFANkYReMPW78v7mpeBjFUSKVwBqQiUkeP5Hnq",
  "key43": "fMzd3hSFwneiPa2w1STBrMASsvEcyyjdkH28oQWKf9KrtaJwnZVo3DKGUSK24JMZraYnzRgbe7S3AzrGoxM6Awd",
  "key44": "5fkZSLWCghccTY3Z6rhAJ18hTdTSD2GnqqYfEochjFBdwxUzQxueEZK2HdyTPV7AL2NvYPSQMcexEXfB24xdZqCX",
  "key45": "5s4qm5neZPhWCYM5FRfWQtARa7Tpw4HM61RSuMchwwKtPb2Qrj3fDG9Wg8cTe8HjsRcbpTj4arUZNksdj9DbiSun",
  "key46": "5iWLiD2DTdikA5m7HnkXRV8JgyyfL3QPoEi9SFjqQfDFdSqL9SvA3jEdA5i4PizuW2ingW1CfxrFvFLXeyHQKhiP",
  "key47": "2gLf5JR87WDTsdaUP3Qgy6dMhKJSjwnBsLbtb8WMoPhxdKxpno8VoUGHanKNcFnCfPL7j3SZF68QBVQh7YXQE4kT",
  "key48": "4EdZTpu9t1ie4SjioyuYfgbpMDN3dfdxFvHQQ5okJgLZwWwKaVRtSogZbTjcLCXcuJtbUTAgAwmSy52nHp8PzaKJ"
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
