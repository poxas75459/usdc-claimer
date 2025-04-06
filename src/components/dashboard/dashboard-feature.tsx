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
    "3X8vGNLijctcb34pbnACwjxVs2fDAfnvbs3iFUdRwjNdLhZKhMw8Xq1MnwBs2j5QVuHZnGBwURhbwMazLLZfU7tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UYCc68MHVkZV6kCpPqQ77FWHBiWfeAWUraWu6TdnEom1cHTd31Q1VvR7JLkXi55aPppfwHwjSJJtgYQzGR3scWD",
  "key1": "61CJwoifve16jJZ6afZrhkK5iGGNhowfTN1V573gXRMyCJ7nqxas7f8pREeZ7GBttcHsMsYxcTpuAWzLvLvnnhdH",
  "key2": "4tbRfpLvziVXkrD5jWKjYhyAi34u7YJbyNHw1j9HTdanDx4s8FphRp5PyZFEptYxobQQhzakD8an82ED6QLTaLKv",
  "key3": "2CZyTi6xqZb7F9gPHXHnGcVe3662PVfJ1kQhKGjUS1ky2wUdUgEcewSbWm6oi4vTEgH8PmAUtFpSUgZ4zjZg9Pby",
  "key4": "3Cce7UHsrZ7GCKEoE8hFu4iZniGCatgfDTLQDUaSKW6Yi1dtbRY7VrwjyBT6NWRSZtKZQrh73m9Dq6cHQQVXVbb4",
  "key5": "2A4XUYkaEjozjfhKcs7Wwr3rEXSmkvi49F5edyoEwjHMWb2wBQegvhhuU33czVitgdvsWJjnvvHBbhyeqtm8YBRD",
  "key6": "3iW7P9XABQhJbVJgbCa5cewBerJmaoDQ4urcewt1fShqnMRwgm6NiGnHE7f4soZbJZ9LNz6cJdE7zH9akj2RdNrr",
  "key7": "YmyUydxcEdBTUyiKhoeyZuvuiwx6YjhzmL9yt2u1CPCFQzXEbY3TY2aYF34wHkESmGWTMTTxMH8f7YTQDCmbK5T",
  "key8": "25dY4QB9WGZqFVyHx8k7w9ezkEgekufEo5YUreptjZJ1M3B12dZ31TfGd1iJhiK2hHdGNL14rA99rHw8BtF4ctVF",
  "key9": "4nTxz5QZ7aahqEDuLD6FBmrW5WnVrxkfCQTqtczWocg8JCR9A6wh8UpHkRNborEa1P2Zpt2s6vXZTURgGxJbpRhL",
  "key10": "gQagAGCNoJEfwf1EgVZvrU1khNmvigbHPNzijNNN5PkaYsjDVb7NVDqReVeobLqvhi9HXvFM3iRKZSrfogTqYJh",
  "key11": "3QfucMNU69rL7dDxhe97sQbFmwETE8XEj5Ri6Ai553d23Dnv3Mn9sVustDpqZw15zCpp5Q2zy4CaxrWJ86NqiuGS",
  "key12": "3nuvwPWum4staVh29wFMsxaxAiibezo9rSKMEFvdUr5vmtUrSABbuoCWudCdCkw2UiHY8QZXDyhVsYnhgQ1abyaF",
  "key13": "2zbpWjqKWDXadSiS721hPaWVXjfwGcpQv9dCedSzsPUZ5HaMb2P6SFrQnnif2Tn5bBrVD23fqxLnsinHWebxxBkj",
  "key14": "SM7TGZccyVWpzgK9gqWEUKQtaV1TbMa3q5axk4xTt4Y9nTXvphf3A3Lyh3tJGKse8w2rdh4xGkPnt4vomjifLQt",
  "key15": "4d6QVXQ5Ee2EA117FqJg7vJgWit2yH8eZkzzU8VVnxxxiWotfn2LuF4hrx4ZEnm3L4CSSVpi1bV1Th2bLiN1jaqj",
  "key16": "67NJ3swzMJK3eCGwSvWU4CVcesP1KhREi1WyywQLPV8hcXuZHJVS2TfYYeUVXWr283UHGRe2A5cBn7oqDqmWhuyM",
  "key17": "3PUv8sfwfSht5ezYD16Qr7uCwvaP9C95fzxEtg2cQdLXMUSSfi5WMM2rh4Qh4b7bqsMiLFVg48pQB37cxpCnvSRx",
  "key18": "2MucCrWyrKapAzZFssjsLUjjNo7iaeyWd2hjsi6AsXzcYabNA5GtHPd1hNPoTybLxXxMadTCWoDZKwFVMmMzXaSV",
  "key19": "5jURv8HeZqHmgiWvaNNTHFCeQjKhM1aisyTvsuFkqskSY66nZ4v5BrmcZNynMkE6ogaxX4yuNsKjA6d7CnqCeXb",
  "key20": "4RpgpPBZedyEZt72WxaqT9brq7WFtH1d7sN4cJRA4S5zr2JeXVsuPidRbNtETTrsJ7zDNtRmDJaD6dEzBZnozPJZ",
  "key21": "41L1teMziUCFsLBFffFuptbii1QeHB1hccsXAqLfEwZxtUK3zMUhbf3sUV9uQxo2fqy1MH6qKv7nc8AhGBrT8YxH",
  "key22": "4mZF63vmqy3UmeNvGy9bFBaBTdrGDFb5rmbdXFzB1CVmaxX1QFB36QdGYxEGFbrqJV3UCrKtJnTdjhmx7FRu4Nnn",
  "key23": "3gQHS7z23DJ5CS2joFjpXgvYG5isKXX1d4UuAneF3KPpVthMRLKendmdQuBabRVfvpsdNCseSBjPjRe1pT9BmJgB",
  "key24": "4Ee3LUJzx7AsHX2EyHBbPKZ8SKHrbRGmjuzkSNLcfVH6PN36Yeta4a9HPWTktGEvArjvwrRSgUuash2yESU9kXPg",
  "key25": "62txpoMzHgymDL84AvhcNJpKARN2PJJfd6Hw3d6XLq7VLt3JKVxdzvbuPacidxzqwcXBnS4468EZXJeuh2zdg89e",
  "key26": "Btqbzh9XknjANSECAX5TBfGfdrw7S9AKBvJjmaDMxyqLfvuxmxq5Ur9Ka2QrUtQd93bXknUxr4TPJGEwqZuzESD",
  "key27": "2CNNk48D9nyb5kpm4dqwdpYFStD9UiGeF13cQMJPg4WpupXc4EZAZXphPzNqPi33XqoJyDjWS9AovTg27pGzPsJm",
  "key28": "4BuDD12wfQynm3Gu238j4WndyqfEKmVKhR2tdxD5miphCHKTySEg9dJAavce4gH1G5dVZNP6Y4CfnV5EGpG37oh4",
  "key29": "2PxeD68LxSYMovgupjaAtsJRaV9aikREvZuTnqfuf9TvhVKWd9S7DmwyVd2rwHmefzjWQgX9jQrnVYoHtU9p6aV4",
  "key30": "4uCbXsbnP8vm98EvpYt26cAdxX4mpk1pPDzSCM3yPVPmGMuZuyikXCaFmpLeiGtFydthPqLetuH7Qvk1gpz6ann5",
  "key31": "4KqacjYtG6d6wttQpVmmLsePd6WT8qHScXHxxH4EapzVCnQChTZAnDQDKHYwPRkdX4ca614aFmAHpQ8fF69VtRba",
  "key32": "4Y7egzA69MYenz8RfdJL9rmCJVAcfv94dhVhZFV5iPdgHABQQbWM3F9aREU9JZz7atZqEE4e5ZaXkL88EU9CRTqH",
  "key33": "3cUA1p9KbEdCcxTobpzftLAbwLwkY8sR5mH9sxGXaUMZL1LM4EMz2BdNdVYV1XXaj6jdSSKpHeQuvYm4w5QvwVFe",
  "key34": "jhSA9cgNwtELKZFjsiTC3r6tzhYMczgvTeB2zYL8quntygkbpcJ2jUf5SjmLh3tXEYNx84ZqohZ5CofDAD3g7qn",
  "key35": "4deQNmujShZB1cvPPqkNdUpDRyi1hiLuxyBgdJuwjUTJKsBTviPeEBrXrnP3jZZdYocMuKxDT9rhMk4dKbUKo9uG",
  "key36": "4krtR5qU4nJ2aTNEpVH8gaANvCRGGABXxHqTAGZUqxLerVbGydgqLR2hbSePy1HyMiXpjLWrrAWgM7HBN1a7SgZo",
  "key37": "WbWNuJzaxAdcyGJEvdbzCThLxoc3V7aC2P4QjE9d2BM95QseDAaWMsVMr6x4ohqgjm3MUrEhfT42Ep3a9cQTrFv",
  "key38": "2CHqgsYrP7rezJ23UT6C3SP3evM9Fdt7GZaQqzr6AdxN9WVxg4Knxc6iJT8k84DfKXAxcZwRLcoCtWicAfxja3h1",
  "key39": "4rMF3t6iGsRnnRrqcLzXHg2bTXYSEFTT4934QUUDfbiArhNSGW1P9pieJaQ1kbYJ4h4SwRLeQj1PvXTmMfCuF4s7",
  "key40": "8YXeXZVJdpgM4uU7pgjfoXmVz4rpRKfWy6ddRd8pTQti8DvF5nzWsbaT7T43uYbkZf9UNoSzAypD27ZxK9dwxMu",
  "key41": "314KXu6SzUQdqm4VCiGR2HUTPN1g7zH18eYk9UKkizjvKxeyLXD1ZfcadjfbZXd1eQ6NsEVcAvqe17UZczsw2FYs",
  "key42": "3M4xaEVXBu22RqkrZqVVMRAyL7Gsqxz7xMZJy8usBFzT38TYco4haV4NSjjU3AWH9Ye7CC69H6MNsXvM9fBuLCZ3",
  "key43": "298rumCoJk3bF4CS43thmytH3sN4Mi1ygv3mV72uPuN1nMrzbDh26ys41nSh16i1JJ8nVkEEgpTXAToB5VeHhmj2",
  "key44": "21NkmHYHtSorEMnCeT7Z9rfYjDyPw6oYn8qhUkdaRDSE62B4NKxsEGUSVErjdNyGjhNzDCGXjMfoDjJMtaggFAiM"
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
