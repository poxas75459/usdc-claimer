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
    "brJuVwiVYECh8giYiQiwy9ukKJZ5u2TRExbvtV7jgAxW6yZw9g3TtpgdrA7eahUmGUmhVMkSryRHTbaB5wgVQQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vwwagvwr2wWHy2ce3UPffz9TKLimKFUDd1mFkkQgJ5X7YYFyg5XrtpVYfzQfne8JaBLDpLnHK4RszNFHrg4TB9B",
  "key1": "2XmeNcwjcaQfSLvgWGJVg9LZP9yjmTrsvYLwg4YUjP9VSxt42eiwc1e9Dmg69dksMthNjAp3fskKsyuhMnqCoXE1",
  "key2": "3Vvu3RPxBEkeaGdsewoPeQjREdpAt8ur8TrEm3p1Bki3hcCJu8pUQaHYTa3efaywrNhuiueoAhAuJsmUb2jVtRNn",
  "key3": "k8rFMUDD4ciTaztgs74tnjgE6Bsu9rLrGLMgHVqxV73S9vRRDEJoYY9bx3QRzNTd6uGngM6jDuNo6yhc9f7rNmW",
  "key4": "28zD1TBXWDgWkEUbKpdZUsj8QUC4vv3rdqho8WnhFuq82SLpBW1r5HaqsxtYDUHTjbNdfAX1EohnVzV6TNuG88Hu",
  "key5": "2GorrFYnHCP2xSSNxo8Pv93bEvignd54F8tYpsFfdXpeeBDGQWLkoNhK6sxbCbTKuGULVCgsKLcH7yqZChJXL4DD",
  "key6": "3qePAsQ9ArNzG35ki4oi437n9QQMyAJsPNwu4TXSTqwWJcL63DEwqqc6pDfreNkrYynxkuFu6sJ6GPCu2e4ogFwL",
  "key7": "2h3ZV2RKnNkUf6V22hWncf4LzfrXET2f3ezC9si7rkfekjnoadbcBcCaqiPVp6imYDuDHW84VYFKtQ8NrAgnsPpm",
  "key8": "62RYkAuQd8vjTpuF76DxTbqdR3R7VTQitSWWBk8DFu3yYMtnuj1kHuNNowbFxo3jLYsXum1HS5GoxSNFLr3sEkBQ",
  "key9": "4fLTrwTaKAy6fejZAe3Ev8QkRWpfTbXEoCTFg1V5MALLdaRBjYBLRngqgY5dTHGQx7fM926CV7sTAv84uPnuKecp",
  "key10": "FAnExB4cw8YvpMsQtD9ybauunffxfMeEUqVgB4CqNwmqVr4RuTdqGqC5aUgF33wTvA2xNNemm6yZkbtjzgaA2Vd",
  "key11": "3wBNwDVrA39cEpjyAoSnHWCXNjH3cQW2yormKYL7zvV7AW5ZrRJHPQpctjZhfjuyQxWeYXsem49tJ68FbwEpPM7z",
  "key12": "fm6wjRV3gVkJzqJU4MM73nZJopsoSeQpUBBn3ztmmXZyCjZWRagiYWxHdtTwaxjLUoryzZHrfK6Kj718HUqPsAP",
  "key13": "3H3KAv8SSL95ujbNBS42DfgsyUcgkeiGuyvVdWszCTDGZ2wBqFjgCEX4XKEvAWXDg4Z8eH24MqHcZKJf1NtkcPWL",
  "key14": "aMKsAcapHYSmeqA2KCaFPTU6ibkgb3nDBN2kNAB1rm7RiD6C7yMPJu6TtWK9Ff4e3rZbFRtVrKA1jnjxqBEApJk",
  "key15": "22EMwxVjwtM6SEWqHYx3GnGrogKCP8wKxQTis8dSrboSUmszaSfAD7Bqinhc6CiMvjS2qJpfoP7ztftjqJP2JrLp",
  "key16": "5qYMSnBnSrxSBtwtt72PFwfAXrdXRVKZ16dyiAC5FdSNDc4Unr5SqsskxDbtWNVXH6Kqeej1axZtFvCzpTMGp6i5",
  "key17": "24DejqakxggYtTJQxPFJQH3dWGCaDpn485SBfNb97TuZoGGnCU1AYbWCcqYms2ST8Sahs9aRGG3h2rhnSbhAFVkN",
  "key18": "5WYixH5W3PabSagojMJ4hBJFN7XoRq142hFJ8Wo173S3uAdTeeuFZNKgHFQQHVYbJM3zJkeRJ8uMygxTyA7m8KcD",
  "key19": "2Qdmz4nU1MeVNSRthgZouuSPgpzQLa996wQvTSadF4bkRAkWv1rRnf23iRT5TxUo5Pks4vfzmYKPe2gPKJQGpUTV",
  "key20": "5sokdRLzggcUGFni8TfmwarBDKCBK7nQ69G1ghym6rLYCZcT1qnWXtxPmo7MsdhXGYtAffHzyV3Ev6DBm5aSpGNm",
  "key21": "57vqfj6BstHRtK2CWeGYvbDUD3YaMcXUdLc6WqTZZ1kqG6TZ1o2W4E5kTqzB4zKT9ZpSFoNZeiqvJY7D1FA56FKS",
  "key22": "5KkT2jKpT3A9FXAXKrCKHC2A4soodiMGaE71zXGAsbKjaPdkLR62167han79RVXP6g9Sw1PjRkaMKoKA9uLXVar1",
  "key23": "2qPcj6fQAiizd7fJP4NX563ZvtqiPcXv8B8V8vULrtKX4MrvhB3ceWgSsqdLMWaHLSr5zBD6hqk98Vd1Pt7bryZr",
  "key24": "5cGSFLGEKbXf1AxQKmi7J6Qn5BYSJD1x63erfHu7VtWkfivpuM1gbi5NyC8WDb5iZuVs3mXVmhh5iSARPp9Ur7nz",
  "key25": "5Fn4QUvGVT6cUSZo6P2QfXrXn7TYqKXaXXKV9nJqgaNkGqtTHZt3MRszviZQhSNQjrU1UGyHgR95pPb8wywTWd4m",
  "key26": "52n3Z6ysWfgsUfxSRabZkppSV1iK9a49MmuDV2u67Q7jFLAzWdJLm1TocprxPvJG5uA6Y9mZj5HuupWZN99yfr9B",
  "key27": "2u6bNi4LSfmzyLnFaofo1RhifEu2F7vDhSb778D5ChNhHujt453AVRfSjbf2FYvMAWoRsAa6beM27j8WP4vbYsZB",
  "key28": "4F1kfGZk9fws3PN8Ytn4kNCbT8pkqkEmFYiSF94HeVmBZSQTG3uHPh5QQsYaeVcAQYhBXU8WaimmHo7YtEvwj8jH",
  "key29": "34b1XmNzYBqPbMmqXtoJcUtJdbyjFK7ujdPVhZ2hxqgWRcpCPjt3FmEX7VbxAf2xY613oRpgCaQdE4Stmg39gjhP",
  "key30": "2CrEFYmemzVYSWwdaVWoVwyda88tzFQoC73ormyB7vSURe4CZScTcXYqcBA2H2sodbgyr8RicYRWtFnT7UXS3SxH",
  "key31": "2sZi8XZ36gUTatj5tQz7LmPARSHQYomstUvfBXDSY6TmRW3rbWnkGsos5cndynRN3g5xXgVRLS13tvERuQWSfu9x",
  "key32": "5dMm8uBdJARxmGFPNP7ZA1YV5kasDu1S3Ez1gcjDyK83dW6R8HfXr8WDVUjb2u2afKjJ9tAGzSa9mRXvXtaxFK6B",
  "key33": "Cb4W1BqV9kY2g5cf75e7cVzartfcmWBEFEKGw1BarkWqwd8xBAgRtprkVyL8F1c4zogB17ijcABdCCcewJcuSXY",
  "key34": "2X4vjraTKjXsUNDdxRv6UnGRVEX86CncEtR4jdkQMjSQoj18umJTAyYadqLbHv1oUJdHKs73xZppgtgGw6g8Fwrv",
  "key35": "2Ni4Fu3f2vrWcaHRTb7pSFKxBZbUtF1xLu2gpkVeysQtRwquZ8AkCA1JjDaE7LWRvXf2G56SsAtpy5Le67H57ZXH",
  "key36": "4zDNgQvq5bYBe9K6fh7wTqDoeheEnmaLVtm8aLCxs4PUZ8U1ouhWUs6VizEunmbjdtd4duhraR2atQnRmNpT5YTf",
  "key37": "3rEoYPGmsYgqtddA7FPm32YWDPGM5S8zHFA4JK87d8i3F8VDrAzw7G7afz1rTtHqPzhpEsCtr52gb39nzVo1vfhg",
  "key38": "4tW5NNadSUpvXp6pYebsSwA6Th3UFK4xvWYuvNVLhpKWe1hbMet3T23Gp9AcmnynoQTJ5CYyzyPn8BeCcKR7NVR4",
  "key39": "26nrp2xYRqtchipzX82F7GmVsFpgWTdquXrSNkf1xpxjSNYa8Yn6U8j4Ebky9YvZbinAptVzm28RRWFBhUa4huak",
  "key40": "4g5HTct5R4mjf4ppBcxmDB4utbzsm6UjDbsW22g9SLKz3zZnxMFwtUiL3aQ8pUtKZyfbvP4B6JFJoWA448qhi5M7",
  "key41": "5LaPezeihbkJ5VW4mmV7sX3hetAsKfqBjEYmP7ig7L5n5siV2AEEq5afdgbh5jeZ4DpqqwmLjZRsWjjifLTNoTnV",
  "key42": "2qMobBSHzbiyYsgBFVuLSBrHTJmeAu1j8tkQxwt9P86hpaQimEm7Lv7CprTC2PK2eqV2FZhtfDDjPeWEBg1ma2G8",
  "key43": "GmXSnGssYiTBHpenMWfkAGsHk4tGTdEyg53aJDQ7WWDXy8EBd2m4CuzZis2j2hZ57VqfdiyKgpxs8fy6zixCgL5",
  "key44": "4uoi2iANbNfFARWutA2vPvpD8EeuMNMFT31zd96QVMHDTztE6n7Vvjc3acbjoai187B6z937hFzVKsoHxyA3xQcG",
  "key45": "2mSBMbUZqHyD357KpfdW7XdtqU23GKEsPdskrZaXcYL64V7s15BF1cBeCMFjZzno8y5SHHJGdvCcRA2xnXy8XXWH",
  "key46": "57enS9EXyYDbFkNtwKNQJmCCmyP8DSNme9D3eh3JzrJg71beJpsMKXTUnsWWk7WGXaNXzz8NZZY1iBn7ZRwBvQSU",
  "key47": "63cWpqxF8VM5iwnhWR8K5Kqw9zAw8eoos1MsYEcvCVWMX3GYg7bDNoXMMEVtkVUFEhNygJre1irbKGHAjkJaJ4PE",
  "key48": "29mbNxJKnGDV5uDxcwFdUruRyCyDhsAh9S3GDHzwMuXrpnhWmABo2EgEacP3BgfYTzunSDxtmWvoz7xFKpiVWYWZ",
  "key49": "a31syLqaZCsogt9AivDK4m3ArhdHRw9P7z6cZQTTEicoiyyaG5WhroQkKB6iwqEMuAo7Cva2AuW9p6MFK6HMC16"
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
