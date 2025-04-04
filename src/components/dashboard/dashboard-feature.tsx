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
    "5GGKzBxwxaU9dKf9g5cZqJHSg9PFi75NBrr1MLp1cuCQ457cnEofGEynFLetScHtS5YTBaFhvZtyY9JeoavqxN4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sxBjM498fk5DTaE2CGk3Fq7QzL21kxF5AuKa135gybPkdWTgbF3R2QdUQRK488u7HAr86NaL8zmsq2BLCCi1jYp",
  "key1": "4SpV8y8rs46AdjuFnCW6DbCn876Yvx8rpzTZJFEwDqkhGbHoujDAn8QjPusTab6YzirBhbyZVu6VK6FwMD6Pomad",
  "key2": "ydSaKCL2PxBXBqSw3o2xy8kAW8ANnHtL67KAig5eASWhQ9c7qbdhV776dYMAt7uFaKzg55Lhwe5SGBVaLQDE3XL",
  "key3": "3qeSuXJSFBsv6QzDnqkpXeSEj7jr9UNofALeng87g9dfoyNXfCb4xiBpiggYxSneat8WeQNV9VkuAenWfetMrHGD",
  "key4": "2WBWnukerJeTAKb9kSuFiXSvzCfRNPo1xzqGAyZxBsybdgSY8XpN6cYBBABGRhSDdzUByxeWUJYKpNYss9FB6mma",
  "key5": "zeqaVrQsH8Pf1DNhjman9Q7127cARSBtiF36b6UCKF8c93CqxScyM96jDgGPRHr9WFz8KQRR5ZHoifD2sCnbiDz",
  "key6": "5cWXqh19AkGkoPcFcy8nEAyrEb6nDBdUZvxWXQY22XCs49g7LxRSWub86g7FHQU2qC8Rqddixmnk77uk6DukvNrk",
  "key7": "643dLdHEj7SZiELdEGWmeDWUwtNZLNGHHzRcucunUZ8bYVFgFWYMSFc6c5dJFpTu7TUysKduyPHfKWrAesRFJqk1",
  "key8": "5TjePPCf1NKyzEwZUFuuNaw7mpAMxEnXfbSoKk6vCrBSV4fdr9DrvUhuVEuVjQthqYtSN7AysPTFAbM2gaY77c5S",
  "key9": "2g9UrLPFmonU7gLQVET2Mh7zeTcRU1d8uer9mJUL1MaJ8EnwynnFPChBKgdpJb14Uzid8BDY3hzLuSRSaCJMrmxu",
  "key10": "5eGMiVgpscf94uRS7RHuUjVpzuZRAR8gkoJVqQz6nLygqcufkF4u1Ky3hGrQMG4xgxuhxVKoAtSiE8wQha7Gwt5i",
  "key11": "qrDxRxtLQ1xUoJ4AxqdEzoN53gqoaFRW2giiggVVgq6SQ4QxoWAZo3HaSR7c43jrMv5jpEpqVGeTG7SA33VWNvw",
  "key12": "zc68knvanAmtzNzt3tgvYpgb8anGDJjEZP3wP7J6ZUg9uM1z4dgYMe3crVFvbNEi2YjZ6YszgfWx6d8xgPCGE8y",
  "key13": "34es9oMYDRfMoREmaNccL1ZBdpLEBrBVcge1HpSZsigHT8Zk6fguVTnV3MZh5W4LiS1uYPBLA983HDV2N91Jmfhs",
  "key14": "4ceY7EMaNe9dZUabaKPu6HDJAo7m7Ut4fvwV1LMX6G3JETK9uysp9YkS4jGUkMroqUPcuL8mpGA3JmtXSU585hQH",
  "key15": "2YfXNnKcQE7T2h8rxk5JKMZKEkJDhnXU9gNVVCWge5fgEtkrmSj7gcG31b7dwbBLJiRqWoamxrcffTWzDixafRUW",
  "key16": "2T9i6hVVLyfpf1VsPt2WX8MwF5AewVwfU3mFw2FhiEUvAFMknc2RfJTCS3icWkeffWbhZzCURzJdMot1auJ8yZvo",
  "key17": "474SSEtqRm2QZbFpsLwoxE9f8PMecY8jdDjAo8ywjLHccLF6Vs6mkgvNJrLxmLtpgGW3GenZLHfgDGyoqSvjSEjC",
  "key18": "3rNTtWmAXR8VBfBzgBN45LcnBY5oRSw3LmbTVWEvN95RdGRxaN3aJsNumVxpkzjGMnVeqv43qaqMkE1Y7JHeu2vP",
  "key19": "36qHpkCs1ruMjjfcUBM1qhcu9RyXHGAja5qCLSxAdP4hj97zUvDBd2rTvqvfQ7E9t3CnckfK1aHsTaHJryhztwRV",
  "key20": "5AnbBqpe8Fdypw5vMfG1aBKHp3Qyd9a2WMoUzNgKP6hJWxhZJ11QGJKeb1UhAv6ghPzS7y7TFJn7nt4MPRxi6CWs",
  "key21": "36Mb4H1Wvum2o94nvhigtR36rcHFKQD2oibT3oxo5gMuxEMqK8XDvWFPbWQfECD7wFaHPF8UCyQiqdBNYYSComP2",
  "key22": "2PcXADMxiM8aofTkLitiXzx9VDLgUcNrhfZDvcqMZUCxUHihHiZsyFxGyvtS7NwpL6mgJZrtfMk6WfUjX5bGbBJJ",
  "key23": "eVj7DiWcjeDecHGebySogpZAdeioGD67RNNTmx2d4g47Ahrn3cqcKkDjTwewKFNdfm7sgsPS7Sm3oBWjiFPutFW",
  "key24": "2Mpjpaou1ARUdXBgxE8xv6xyUQ72YpsywnbZsqPYe2P2XYu1gc3hSnw8CTbaTqgEXYFgp3xJxXh1pSjsBpMdDrmR",
  "key25": "3TA5iiVhEBtvva5EoQUos3Zk3PwBATWm8jcbbA6tQSMMYiuoNoBaKtpqVK9bsdYmKw4ULk7bBLBLndxiWhxP5L5Q",
  "key26": "2M2ix9i3EfFAsAR4jFgfcQxJC2bTBACpn6TSzzP1hDTCqWCqofpr5XQBzEuuHWVvtCQ92WV56LNt2mznnkqnhaQp",
  "key27": "xtiAdbtL4c6q8ciyh5MmR4gvdq4No9mFaPc3vasrDyGjppaf7fr8AAxZcQYFvBmV95QyLg7rsg7yvjBQLr8cqox",
  "key28": "o8225yVUiWp2cAujUp41tqmXZE96igqbMppASNSYRFsLnWA6uftHpbvaw5Ppu2Q3J3oMrwoAheqM2jtaKvSe6Mh",
  "key29": "2eEvQtUMGkG8W36upyPreD638FvadFu9jgRzpNUdpEFGEnfjUANd31BU2Yu8oCYk6NzizS7r6d9WVtvpRsFZPV9s",
  "key30": "4sKq3XV27pG6MqLjjpjd52NZdrLqbrTEpgfiV1X5ubZAodfwGnCv3tQVkukTSGAG4pangYduG3Ah9drWwNKGJAHu",
  "key31": "5embCt3nfpWZsM9YdugaEpKXVvC564FRmTAjz82xBykEVMb6x4z6R7JMJrPMY6hCW1DyePpnUjVvjdhcpc9zExpe",
  "key32": "5WdLB8fMV7x7djrahMcVvNqiLgV3JhZwUKx3ojijEbkRVrj5kdVUrtnWpGMMwJ8TtwYKMySu9x2brhY3snTvQPeJ",
  "key33": "5Co2YVvtpEKMXBZn4s8YmjAF8JJ8htmhwoZtmWKEYT4znftzY8kMCkQf3kfxmiDorVck5gksTRkbfMgC7zymB9Kx",
  "key34": "53cGQ9jNEaue3Y94Y6mqJk7YNxU58x99KHcLxNWd7d2bnWBeKzDot5Z21TNRNEy9qux2do3kY3oAw6WHgCsbkXUu",
  "key35": "NV7jDb4cmKYMn39nmqJa6m1JstYytRD6SSB52QUVmBxWgXSfHFpnPCDbesvXnAXvjk45okGJ719KSVPUcvS9uDH",
  "key36": "2ioGi1t1xBEaNSQmywYXbjNfUfvNNpmoUQBCov1bC5UTsnR6Ssyi1wnNJ287fM6gjGZczDpeXGvAaVtYS4EUsRu8",
  "key37": "677GsQPUTk6LRR3YhgvrqwFpYFksABdC71Yeg1hcGYLXR8HfrYebWCPd4bJA7v7a2S99yE2SACrXLvshfnGAq2Ck",
  "key38": "2B6PL67zGowc4JuEt42RPYwxvj2hLz3t78Wcb6KRzvAiK8dYWVynJUxiaXRsK5yUhS9M1BhZ8MnVuAANzgrLNvAe",
  "key39": "4ch6Es4omV2RQv9cJzacAheMph5hPiLezQfnPCJHNJLfFnhBrSRygGq1mgKfiU9KKSMdodnxeFKyJDMYTASyFDqF",
  "key40": "2zLWpVFVTYxkWUjKSuihi3QWvsZCF6kQetQmPYTr17qPi6FJVw7F35NnxwBPLuP81bEJrDAA2ETRCBWcKKB7Y4ke",
  "key41": "5jG1b38TPKZK1mJKsR9rfA643AmdKyxe38VzejfKD8oZ3eyPFCrPL91AHwTUSET9oScgU1DWvtF93ingj9iBXxPp",
  "key42": "gTbNrDpT6F9gbRjy7oAtYsCL8pM72oENAicP1DayGhDk4u9oH2jhgjxogr3di1hRUgwj5inUL2JsN5osHktcpqy",
  "key43": "2JPqRdRo9MopQWhm5azydKXQETi12Yxghu61Yz71eVymdWQrpy6CqjGiquiTzNha6PMMmEUoqmvun5W6FNFNiSns",
  "key44": "R5R3WBmrovBUwD6DT1YDp3Vx2DGLPwXL5SPkJ4uot8m6d2XMsihUWaHsxUynv6TvufHJjCDg6Stxwujj4gmy2eU",
  "key45": "3ZxN89rEvBLpVCrrnbErvZ5kgPwAvVo7oSvtoXpei7SVKGPNrpFMoFAJZf9dX3SifW47V7ixjupAJuEnjt3QgZpD",
  "key46": "3sL2AVNb2ESmkHT2NJhP5mzKy9EJ7mW8REX3dvhz9nQ5K9EdgGPMM2hTwfgnVCRHX5Big7BcFqHuvMQ7c6RiitAs",
  "key47": "2yAwpvyCyU3dF9xxzCGHkZh3r7uFvXzePUpsnrcTVMeLRajU7gi9bAkuKSYKPBymkBy7QknDNNeD766euy46avMR"
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
