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
    "4zbLQuNGcwUo1eyGTrSQJKqjjqsbt6yuzmBzRy9EZkv8YDSgqDYKH2DKEALwbsLNyzuAQteSctYbhXyNnNytVg8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GgqK9pLjFkLzoeSS6Tq4Wz6rAbFGc1WrzBCqByLmvUM3xjvRuYSHDL34WsRKzqgxP3NFpg2jqMp8ADS3gEuWYEM",
  "key1": "4UYERgEBoysZzWb5pGTApkDuKKFrVzkC28WR7N3iPZYG1oWruiBBTYYE9ie8CNAs4uuLhbAqHtgKR2a6Xex4kM7w",
  "key2": "5RAVbXb88cpdyo6RnqN51sHB3nGxBd1NLiP4GNNoFgbLFjjiogMJBYmNsjURjgKxbUCCq7YX7hVD6eY1bfxL5Gu",
  "key3": "5y8QMgZVX7fTRjCcPZ7KZKZ8feLxvLzynLFjwrdfykDQbXcwQDmGWfcHd9z36LupCHGodwoNCcBEYtdpefaeQo6b",
  "key4": "3iZN4UDcXg9rNfxncZGT4AhBfZ5NqsmPfYUQwSPJE7FfuCs3KBMATRMby5BhJxvu9qzRd7NCivByiLJ8LgjbSREr",
  "key5": "2SPeWUVdhHZkKYaV3Yk3efAiDzFsUihjmQG7o8vg8wd664j8ZcrjteQEGTGk66SyXBL2yAbTzsPJkCz5yeWL4YJn",
  "key6": "3P2xbPh1Qd7CShWy1vHXRRgaKXbc2KiGbCcECPkqRuRHAj2cL3JRZaz6oHVQmJXNpKd5w7s61x77UZSahhWWaC8k",
  "key7": "5RAqXbZTywv4Mt5Lqkr3BjrrMiRBGBMkQf4D3YfudCRUkXPohCA4hr3MNCL9Lee3rVY6aTwmUPieVKGkhaY73b5Z",
  "key8": "UF7Exk5j2RV5z8ktKE1drvgCp8zRxLmiwHWwxib4YUesXvkN5sG284h3tdSn7rgPJCXNsT22mbzbETfK1BDTwxr",
  "key9": "2z7GExrKjDojyW7ibWbBPBwhAQeP5xDuwB9oLWrxsQonmDMnadziZDeLj8GRbAWSkBYoMZePCmWRPS7t1F47Voix",
  "key10": "3FVXqHEJGEmvTw8k3dCj19NmxVBDAu2vukd2UJNLDc8j5yGRHNvCQXiehtYbgBJ55t24fvQCkAn35UaiuPDYXUto",
  "key11": "2QUDwLEb9ZZtwAm1M9JnZuYaLhJiCzBNTdCoN8PvKYCf83j2Ua8Drbq5PhpNSG8mkcRerz21AFayUWktjh5FQemk",
  "key12": "42GDMTtGz3EeN3yyaX6BdYLFmvBHdH7UFFVdF46xQirUZUnczvMF25aqSiqR7ppkXbg8kWCjytpVNF987WdX2kGo",
  "key13": "31AHSXUFXEfU3VU2XB2M6jdEtTjgXg7RFK2Hon6vHRS5oPHvL2ygMUUee5bHr5iP7UzVExgzsXM9LYUw8JoMBi5Q",
  "key14": "5T5kRuNfWXuUpg3zVQHzsCcuTBQE2RgQEGzE9EST9gsnEKQNDdL3NgqHszBXpZJaw3QMzYeaBraQHhRb9TrHN1iw",
  "key15": "4CF4sLaqCtUuC8QfJMCTz9MDNbfw7Vb55UZBtMtA8qoW6pLnktUT6qtTwPoLeXRT1nEHhgXTkNXg9BDEP3ZFFMeh",
  "key16": "2kZNQJjS2pRbdV6dLSEzVkJioBNHgsRbgrHtCBZYB9V9ZV5PmvKrjBAdm4wboccScUVCtSDU8cKqokqTWYZC39ec",
  "key17": "3KdFAJTjS9exSqt5B62jzUYuMvCCNEgvDKUvz2RbyaKLkYwWZDaKniB4i2pmvZpDBfeheWzZxoRWN5ZH8h5KdqhM",
  "key18": "4fCBPbrYsUHSPRhpRvnqiZXM1u1kC1czBkEZ3yG6Qbvv5FTDgpmJWHXPNuqycf43X9Jf7uP6wkkeWW6u8bCCtqhv",
  "key19": "5Sk28tNgid3wpTCjJ4amBt1psv3oCbv3SwpCzfF6PdKfVuM1A5Ahn3eHhtbvt8xEVkd3AdCsgoqnosgq8PSwoyfX",
  "key20": "25mbZ2gxJqTjuYpRSPE7ZfgBZrzonvEGfWDrSyfoth8ktf65FaqQTwmYcz6tuQQembLcL9GzK27apW3U3PRtVXDX",
  "key21": "38ecQsHFCb6ruHjZ9HAfvX9x38DK87UtGsdw5xfWs5N9HZcoNt5AP8ayRqpbJuRPM25tJs6arByjEUEMtJYG2vGY",
  "key22": "YzJ72RfadgYGMCnaJScExnbuCnKjZNHfqhKauXAWNLp4dETm9kKz64QTwAtfVcHrzeeKPJH3G48FHnbUG3ZFn2r",
  "key23": "3HB8tFY62tCh5QwKR9CfCPwzfht4jUsDCH3cXd5npdmuyLQZNYmErCSxAM8pKQKoPMhxCyasv28Tn7y2MXwvCYRY",
  "key24": "7ESA8fYyNcgqa8E1hWctVBY2kQKgWndEBTqeVLAa3jXL2cZLBE5ENJvLYygJqkUJ79ipNtZeAPC7Nok54Zkfo1K",
  "key25": "3E2KaWvUUNtMpddMTbqn67Z8iJ6S36a5AGPxndbkfTXPPyKX3WZMUjW1soaGusQA8YwYQrSdrkqaGhQ6yLsA4RL6",
  "key26": "3DtnqfkBHtfRaTTDsJkFwhFnBUdKbg154xtcbh8tQpGzNbxrYzgb75hC5edeZpFBP97UZxzeimzZqBSZbJbXTLcF",
  "key27": "UnpZS71niPQGgSv4PqGj7YNBTtigCaeVkzTsKgKN7PrSkNJZ42eeUmw4vtB2fWvkViSkq1fzH6XauvDzuSdUNju",
  "key28": "4Enk8x7WVjCoGbg2LDkSrmAiSGNcrgkx4jNHi6wnu2eaT6za2H8v5TBgiCXZN19a4FrLSEnbVnRvbYQXrAPggwCt",
  "key29": "zVgttrztvEKHJDHpxTUVN69BhvekoN7KJcE7GEHgNstqfQLohJufsLt4EUqzm53jXMLTLiLVTZaxErWop4dZtDo",
  "key30": "4BfKLhiWbbJa74mN4YHayEA5HwJB9CZh8dmYaFembdm7s2F1kgRrYB6S43RNHS7QASYWTz6ixKkoVjwzrAfKxizg",
  "key31": "3hQKyLVe89TwgoqjkwzsSTBotNGs41YDrJktuCJvwnQNebD5Cz7fJvfdwdDnFM1r8ycqUNsohfEToFUMA3NevqGk",
  "key32": "5Dt4jWUBeM5ps4ft4xDQkjwHBKrsYgi9rtN1qu9vJbHnwKZ2aon3irca8dRn9D4hugWfQQiB5gQFy8f4cSJSZ8Tw",
  "key33": "2JfJPWFy77xmJi9N9ggkABnXNe6chAgrJxv2r9V5fbvdm19oqiH8pAwcAd1xiTGPxTmU5nUMv9kPZvTjkQNaVRwX",
  "key34": "4B62yY3khUDLS6jfbyDahqKN2niK7AdqU1MTpBdVYGxFiPiuPj7a7QAjV4x2rejobec2DqWM3xD6pkZ8BufiNLKu",
  "key35": "4QPzvzbsXZs7iVYibPbN3gX7Kb4KoMvJ2gEuqGRyRbCPDW2hR818TAUvdnzqLFw7n3Q1c7Mujdf3XXLYaadpfBWG",
  "key36": "29eSxT4Q63qr5evDuAFQJittdVC8W7oESmkGPSA9qUkB87MuPdhoDqkGNnGnWjSh8A4QLjYfshNz2Nkk63uviuxw",
  "key37": "4ngM5VBUAPV2BcABYGaZ6sUX5HA22Y53w896UPdiY5zxWWMUy48Ry96GpMuNfF3vLB4ZJZHuGJkqA8Jy8sF6f2iK",
  "key38": "2BKH9jMjUVUVyfBHPbhyxugZNebgGmGWhVvMpmGGN4nTLATWFcFc7L338SaSuaRpjoY7RdM5JkoX28QYQ5FVuDBh",
  "key39": "657s9kxtSYwwZB5is5vfy2Qe4jBXApj7ZwAeYzyK8AyPJUxW3Dms79nQhfUTXHimwcn3ks6VAuMoaZQFeKno7K1d",
  "key40": "ddZ3GRXRJNAYQN25GadSkM2DnWEyEyovzq9S53Rj1JaFkY41QxjtnAzGaEgJb2oMTyCtdavBkHKcKuQsh6BTabA",
  "key41": "2EjZsQKsQiaBWiHkCRrgwxkQC6aVrYrHnibXqP3Vh4FjTHrxSfvsbJQJ36gja3J1FsmXF9ECsyuJDL7zFHsqkuFw",
  "key42": "2Wu7HwMVbCLaS431qGz5YZEDDNw8jUX5uGTN2UAU8rWdatZXn2joUW3yTkzUeqytjwhUUmCwA4aMpTnPUspgMDDq",
  "key43": "2c8W6R2HuDQrdEVVY5dPR25ErgjcT1b7EwaRWcWbDV6yMtaAHcRER3egJjRAXassAjeUruS9Chooio128bEUH7dT",
  "key44": "5UvFw1NLLW6gQLqHqVWXgS958gMJGzsQoEqqYDJrSDuGDLrHCY8tEPt7kYBpheksrncAeNpSrF2iY5YzmXswyBjN",
  "key45": "5M1bcpNt1c34tDaSbQNkkhn5KdWqqHPWCReRq67ad52yS8Z34HJgp6j1DuB4MDfpd2nSJChfeWzsVUFpcccmF8yk",
  "key46": "3oSm71Z5prfZkomkS6ocvRQqEbFMPt7RFde9UXRss41X2yvHeYT5h2U6mSMowoF6WNt4kqEab7BtqdbEWezBy7nj",
  "key47": "4iPWAYYnRHb1nrymVcBNgtfFWNCTi5aYcUZLkUmHfbcCWj7pkKVvpCEhaCgc6AbKo6tjYvuLQHZWr6jUrXiaVYiM",
  "key48": "4211NvaCBTbJNoA2u4Fmma1EDg4moe6xcRAoMYVZSERDkt527UKwbEBKQYyZ4eSDdd9kJYQZn8vqLED2nCaBKiNT",
  "key49": "4cd5FUJrR4xmRpcXfW7tTkdd7bDyE41LBTj2qqY2qKexEifLz3vYAGCQM7JGwrg1BMHNjc1otdzUA2mvins81pEX"
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
