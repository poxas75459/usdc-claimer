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
    "2xjxNyq3WVogcKLqFQFBJn9mBMNXwrRHRbE6QJEn9xkCFMpGH53Q1Lnuw2wfTATdF5MhUfxs5qoPJF569vzHLtCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KGyWNC9zs8uAZns9iNTXHcFKJZNKSNhorkKcnMepPT7iXbGjfvZRLfTJWQWTwNwYAg3WocbciW6SPXh6mSRNuD7",
  "key1": "PLDngYjGTLp5v3FbdybguoggpfR6kGuAZ9eev6yYtbVNv1wFQirVfY8yEAME1wpPhhUvAp8vfBCuuhJCx4fLeRV",
  "key2": "5r2rBuy5A9184oG77abVHVcZrotFav7EeCExeFzCUuk4DbDxKdbiMUR5cp7rPPRdf78dcRM87yNx5jCHBjjVtQut",
  "key3": "WPk8hvKrJgUPSPzD9Rwyb3Mk89ZxUkEAjvpw1teTTkfiAx2CUvQsvnkVAEZEtCeiPV6avvde7kW5kH3jcSdpUs7",
  "key4": "5o6Ae6VXYVxZGHVfhiSCtxzTNVm3s5fZUfRaLoh425iskHD5V6t4dagk7sBgicTPisQ3UMj6bs5TAFUZSFTRgviT",
  "key5": "4f7WWi6aU5GCPvBnH9By6EV18VUGtTUHpQMTEAF8hEAs1zGHuzasLSn4bGegGU1LNwvJtyPAwdomtTt6nvkpKKPj",
  "key6": "41SKNmR1mvMD44EmEPzmq4GBUdPE6bVAESNJK99JgWoXWbtxoHUknHh8EGa27eNAWEMSQEFBUC8vHtoooibZG2EY",
  "key7": "6a3HzQeMNjvzEgF2TTRTHcPsfDKAMW6cMTeeW1XPhegwzr5KRszBYzZNM4ZsdKGrLYVQDzLprwVxtDodbdyqWM1",
  "key8": "5SHXHKHJLTMFSxh8WCy4Gpc2za88hCtqt6c8RC5A9kutvSgEitwFhgA2gsDWBmt8RgZbrmpREnQvPuAimzKkkaMh",
  "key9": "NiPsg7vr1A1tM2kVFvLkTUQoEjUjDLahoYJQUqcxcmCPUSrHeEUfq1mJU8ZUgJ9haS4qFDVfBYJMxdowhWJUWRx",
  "key10": "2toAsX7NmfzFdprfBSBcR4uWFvgcKFHsbafGyZWD9ufjibqamVPJNi7thedk5JNDAvGhW1UDRs4V59RzKBUH6aaC",
  "key11": "4JKpSGW1yH4Y9vtFtrjGwbxuFjxT5JN5G7364TB1n1pLbokVKyzCDLAxcdcqZA2WBNVH4g32GP6itYVGNo6ehzhV",
  "key12": "3QWVZhBiyPEAhN9ehZYaa9aFzrET2cbUqvsbrGYQXXijcYP2sFKPbrgKLYKb4kgETWXp6whjoyGVUmi6sGA4b2Q4",
  "key13": "29T5wHZyLYmcrHN2weqt2SeTk9yeNgmjDrBLmsiJFVX15brYF5ckMcnGHBLXcHiQtyeB45AiLRbcLP7gdwWN5AGA",
  "key14": "5KRPF4QTnKxcmm7WkojK7tUpfGuFpSTucCLF9HckTMctCw6o63fiFKbqG3bRSeRCmWCT8c4cU8y9snT6m3Nc8WRV",
  "key15": "4WBataJKyrpzPbhJZT3KHeb3iZVyktjpTZbgeHPGWwb4hJW4LL7r9LfSGQQo9RHBmAh6qqzVw98VdL8QNVfCjqrk",
  "key16": "3MymFUeqNqtPdemRkuE46ujPxRoWqVkAjTS4bN5RxzWEE4fXvSrhunSzfr4XvgMhBHSBHSUXFbX62X9BZ3pkBEUT",
  "key17": "23AifAzTDs7wJB244xhZNDAxghfSaHUiKYgiEMfF9fojRJTLzoNojtoiexLZgijkvVnLtgWg37aRSdcngurpnpCn",
  "key18": "2pkd9tLMwrBQXZyikc8tnmYoFF4k26vaVnWwFhU4Xg1FmsUSzP1GpA5pD9S66NQrRHuZY7u9taM3cuDdfqt1XQW8",
  "key19": "4PWckMVm2fBRK5RpnxR6SPTDYpku1Eqptx6Ry8iERYYw9e71dqcwootSo5jV8Cv2ZrqPKVNSZ8Y2kqkAM876m3BJ",
  "key20": "4R2yLi7uA6gge7Qpt3UiPzRLVYrjeWzowWojrgNehYGvCMzMV4aY8FtMA2nHquUMyWeLduc9ogDEmnifeKuNWagG",
  "key21": "3vhMQ9B1oyDCJMdt8zwK68HypXiiBtikSb8AgiUgnBX4W5grc8HjQEJy8fWf8MZRjMitzc632CUNuet7r9Bmfyri",
  "key22": "iQP983rrvEkiEezSLtdDS9vdibxkV8NubUYxKy9STEokVGC47YBaqnNsZ9RDbF6xYk75xawHG8EMBRy3mKdtgu7",
  "key23": "48xafHc6Zb2jrntVCcrK7w8w41aag1dPdwrx9fgcYJn22ixWLxzSotSWGVwoRKSjJA8CfJNC7X33zvbqteS9rSJ3",
  "key24": "37hpWuE72dLG1BiKbUKXaCM8CwDoXkuNQASSLbpvxS19VSURtsZefZf87jL1zea367zY6Nsnp9BLPDzdVQsSFoa1",
  "key25": "FW88is8VpW8kwUwFttzE4QRjDbmF4spLc15AcZu3GdQDSugdErq7ML9FyEkfnZWSmRRmFb9p4e4uYvYfgW4nuQS",
  "key26": "5qj5MFkozZiKtpMyNP8edL31LxFVDThjB9JnWp385eDEBrhjPs9Sz2Mmu1HWpWVXguDKGfBfYWX19cJxPL5S5zi9",
  "key27": "WRDWSgsCMGqKZBgaXCXrtKt5MoQetVBrfCdkRFRd3HqtFrKK4acwLcBAXm1yhB97wwUbELZAHMH1Mduit3EGVYz",
  "key28": "XtQGkVkwRdV7q9x5UqdJxXPSL1PNa6ekEpjaGsHHXyUsRZhJe9Cjmy1gzn7PTJYeV48wRXinymmn3oewFK1Lrog",
  "key29": "2RQKbX9HUvEU11L2J33WqmpHBdGNUxJQSLdPGfveUXgHUjF6THGwh4yZBfB6eGTKqAQFuXQZQVkEaCpZ3cyk63Nw",
  "key30": "49ZqsA5eVupcCjwH5dTF6QsFmHb6Nh3agEGHtoPDfNbMn3rPnxkrhZQeu4t24QtwjxhVtka7yMaRu8rNbudEfBrH",
  "key31": "4ZX7c7RfEEj65cBT31fCpc9MCkhTWJ8nQWHyNpbbv3BwYSnceemYDXiabvisVdixEy4rN71BKzi3PEkzrzRY2A7c",
  "key32": "4NuHw625cw1j6LSmru675nRneCytFPtejcssyMKbpcf9Yq3wfJ7XaQcC7qQq5CL9P33Gkq55eTL9aSygJcvHUvvr",
  "key33": "4xv3PCX4Q5DoRW2VipD3fmCnGg3yXwqb5y9qCzaSbdwoqKvHZQKYThJcHA3qX6AspBMLBKZ47vRcu1YXh2ei5qh3",
  "key34": "41rniNLDg4cb3uKLmfREtQ7XXYWapZfPnLEs3R9QEaXPsYZDZJuePyH5j7F9STVCQMgMU1QwzFc5gzKvSKoAA7uB",
  "key35": "4Xtr8LpjH6iS65Eii1UHWmkf8or51ABYQmHSQ6cNi9PrQYM2ZfkfDHQCBzgWpTUGyy4hr9aXUrEUHXYhCioZCfEE",
  "key36": "2RXTamVXvDUs6rC6kGzyF93J99Ghe76aNz4RHi4rRn44MPZhNKaE6zHQG6MLqYuje3YuSPFt3bArHjn5Q6Yyy6gH",
  "key37": "4X1QDrnTbMvwR9fvNNV8agFmvAYaJWqnbvHSxqyifUQqHC3qLkTpXwo6A8yxc8RXW9FQPFFKSMK53GhHYDY7spBd",
  "key38": "59E5auYfB24UbriV6GmLMK8GqwT1hnVKopwVrtMboxkFrNqKZYj55VGg2pjfB53hHo11miETpBb5pvsapuW7FQoN",
  "key39": "2ayssPh4KhFitWV4YRzfYTevKjtZjUWch28T2Tfd8YAVdUsAuw7SbecS3uasFmV5zwXhHb2LS1yguAQjizLFvngX",
  "key40": "2UjtyYGS6L1ojF7UXYFr24nWQAqs4GKi5PkHWbKF98aKcokHRqXWGfH4vQ8azKLzJKxvJptUHb9ahpaEmWY3JrjX",
  "key41": "4rtJshTd3o6cnAtCoW4p6YPxFPeqpzQgrePjcHxE2VuU8mxUYPnjyUfXuxwAtiBLNZSPrCJuzM4ACkg42i5CZk7k",
  "key42": "3nhBzUay87X1M82WxgUZwriHw8E33yNFtC48bKbeFoFC4wfZH2JbxtBe96fdu27CoJvLdp8ZvJwmvLWKgH8UVtiP",
  "key43": "rJmGdUW5BGX75zUEsV5yXUFxV9Tc2GwwwEHTPckYh8y9dzKZrwP8D8L9foyQW1xDdxt4F2SFCpLtgqkPn5AP1nP",
  "key44": "5rbVCUcsDZDNbDEFR7zB3syEyovJQGRYQp6mX1bpVcouJEQ2FMaxxzytpG72Aqpoz5GJiABV6yXfW6FJNygEvJGj",
  "key45": "5XRyFWxG7aGzpnczgf1aSLaWacYgameYqASNzXMBSixJLNg9AmW4iMD4Dbg48AAevQZ33nMiiXfVqARL7LUnvQff",
  "key46": "4zt35z1qeC4YoXykqQtg38Y8ABLvneYSu3bcvefcTJuy25uJ9ECDmFWS9esgkoE1ZTWrG3zt5KBUH4rLeMHFcW9u",
  "key47": "2YSKxA4cbmwE2KZWxxcsZb91VcDpSKBPxpTkmdtJser47BxsWRrjLkoyvLWWpH38SzZMbw2ZTfCHaMt31NMmAfZH",
  "key48": "5DLceQ5FpMduH6fYww5kbGnkmJ2YoFbhAxQLZspJji31CFjqVi7LFxqAS84wJcDx4a4BjyZyu9UBQTzcazR93xYG",
  "key49": "4sEKhpzmrWs93Nx3EfAoaNW9VEwjLPikvHaRHnpXZTQbEXAsMWEcFxLPUiLnpSTk3J85AT7AV4vMrxPu9mrMXPCi"
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
