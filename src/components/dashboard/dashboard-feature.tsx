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
    "4eYHofZM3mb7Kp7CWFEZYSBwW5VtSxsHKuKriuSWmARNP7hTcHG1D2s7m8bqtsUzfVm3bEoVs4cqRWLVUTRGvBYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AN1f3cZb1rJh9rNNC6pz5E7tiGWcXd4toxQ1BinHvvWA4ZEL2aZAoJWDScG4vCL4JxcHstqeqtzMv7Mzt1ZAGS",
  "key1": "29dG2WZKxvnX5vXAKLxPv3BXa8KeP2GBi4zc8tHVRJDzggGBoykH9quPHjXzqWzxAvdDwgzebmamYbv4fijYC69r",
  "key2": "4J2Lb7ye9HqG6oAgzpomqiC2cGvz4NcwKUPeF6PB24AqWHHEQ5zwm1drjCcszk3XGzMuqZT3qD1MJQEACsdgpcvj",
  "key3": "67aFWGumGAerWAYaXZ6tmdg74YbRJXTzHvyJpMNMZDC4kBnNKcRtDfRfyLCXwgMajnm29FMLjG6g1x8dc4VcsGvR",
  "key4": "4o5GL31UZCEaMjTVDGy7NXHcG6TmUAdDdAksfpD3HfWz5g8BqFbNpxS5hJNv8frBaSXA9uZHR1ryXuwXe15yH3e6",
  "key5": "554rouT6uLJrWcuybQi2JenBHueSDL2wk7wfmHQHNZ4PhGWspupz5FHgkooUqzpNAFG3BZZLiv5Sz5NCegfCacRw",
  "key6": "2mkbvdCbY87KLvLxP316yoQseRJmdGKV1UyxXe56WDooEQg5o1q6oKVb2SxMypYkK9qMQY5cGFqZR7DXHgTPamZq",
  "key7": "3JbD2k2kbcFxrwNdn4XgSraqH1uP5KqWvxQDZ7xof2nf5nwuCMvaernbdZSzcyf4KAhB2gHaviYJsTiLBJ1oajYc",
  "key8": "4iTLMrxJADeo2Cf8Ci2XEpARh51f2ZzLJwADuKg1Jvg6Ti9KWxR5bknA5E8iRndCEBFSYB9uQaAFfSZ3a2taKFRA",
  "key9": "4VmLaxVqudvtYJqz9BMiRrQr5vQgYqkEWaJPFZXzWNJjHDqt172V8A9iMbqTVVVwcSTvvUPugfitjbrbVGu1oSFA",
  "key10": "2qTRxUiUBKtDkNG5Tnu4P8Et6KMU5hQEvkQshpGq6HXn5XtCYEdegeqDZF3uLjP6mHxdr5S6eiwg9VSigsopDpbT",
  "key11": "3ZhdfdQr8yoNpvKKWyqtSfXfTK5crnGW7WBae1XoLekPajTwVrRMPVdMKYLVUjgFM8QmvSZ3v7HFe9hBz8DPwA5F",
  "key12": "65VAoqfQu3vs6PgUEq1vLgoqY15buW1FYG72Gsn5RYkK8N1MGB9Zjso8dgwaFRUAXjMnQwSYZfcLE51UUFYr7T7m",
  "key13": "5EuJx4o9j6MMFQnyQbm6MvvmXBz76aBYBNnT8ZPHLXYBYHgpjaspNiqEke4UC8fCoZpWTVdGDwNjMSNpVGme3jdh",
  "key14": "58MivEtNH2hB4ZmopRYSXAXN4bcZSHLrgPd7tDrtSXU6ydFAtReZnt8C2TvwGitLuioiY8wdJeqwGd2u3maV4psF",
  "key15": "yrgZyPijJsKfDDHj4QwofWQYd6573HXmEkosdhgcpgWNG5cUadx1nLXKqauzM6qfRqqHqeAwA2HoynsLh2vNeRf",
  "key16": "M2GanJjfLEQGR9uheZzPTEiTYkuvLw2zgBBZ45HcYS6JZ27dhXHZJuGJbMDw9vTQ3aXRyiZzYY5xAMAd5XUWkcw",
  "key17": "3kX77K76dkYCX1boGtG5Rr44oG1Nmy7vw4EexCLk1YcJerEYy1PkiEPqd3idu8PrVtRc8REJ7tgecAj69FPThyj5",
  "key18": "4g4EEw23Vh9noPE93rodQo88CaChSfvGMgaMvoeTeA4qnyQDhnu47QXLApiCkfb2Sn4tqSZcRAmntKxWNQ7j6jRy",
  "key19": "4QeEZ9qavcxJgCvKs5xP399EL4SqVrXwURf1tdd8ons8sv9aej98g4ikdko6yAWCvAbzSRDUuxNj7X1QSyuV1k5R",
  "key20": "5pUrwVgWUEusFwVN2gwUzZmpGttFzWeYz9utYfkmjWkbynWd7Zc95mSmER7ejxqNJMY9QVVW1WbeUzitpAeZKfF2",
  "key21": "2NhB3kjXJG7tEUG8egJC1uR96UnwMNoi3u3C5g2jRimwZEr2oALpYbzYBHdtWk3sVdxdRUurWo6fF3HpNnPfzffB",
  "key22": "5YD4f5VDB7pNewn3JmcJpuq4at4bmoFq2e5iTwbiyJjdD3LCp7kbRpT4nuXXVUSMvepg71BnEE7gLhTpxo2gy8ft",
  "key23": "298hEgW3VbhDVe7MEojhDoRGH7ATe525iKK1Tjxr8gzpfFkWmfsnYJ6w5eU1TM1JPPLKKwQcBvYQNf1xSVEjoq6E",
  "key24": "4FUAmktujqGSGxHCm6R3PT8onkUmLwaKvGe21MZcHky4FgfZbiMQzA4Qi2Nu3NaKH93NifeKt9XbFYG7B8cnxJGi",
  "key25": "3RaUxoNqxdVGr5EjvFZgcyAuz5xBrihgkLuF4YYvVcX8vZCimariY7A42mJymEzYkCJ22SfMVGFgPPdN1nUec2S8",
  "key26": "2TFJRMs6vywBkcUVysZ1SPujxJjENTDJgdoDWDFp8jUX8rVWmHbEJjcM1yYneSvZZxFdDkHy1iM9kJDWpXvDwsH1",
  "key27": "2V7zCMe9pweVKJP2XpFpkEDUVLn9kx8ZqdMqgwyqUeSAR5ULQRPPxT2bjMvtV7FzGRhXhq2TggwffwN2V5hqp4eC",
  "key28": "3Y1niKndw1JVx7sxiB5ZWS4X5HNmLgUXPUK8wF56VqpW8ykxpWzpYWS2LFMtS22qFgo52YqiAohna4w1yDRHFaZQ",
  "key29": "tjYzt46DNat3aQRuC4JNR9Stqcs8FonA2eBnXLpeZsdM9MAhzPpQ5gDhSaw1w5iRfk6ewEaMr9BubX9ZFu4eNMZ",
  "key30": "5DPNNs7Xzwrg2ZugY5YZrSrKnNaQj8AJJ7WoW5YSXajQbNvde3xF5H9JFecoEwi3aeUkV6KTGygJ68vtM6y9cHtz",
  "key31": "4mUebWKX8jtv95KxpikCjfTKSbGcxMAD9vu676FPWk7kS77ir4EVN4qyqKLjdRQe6hcwdMFRQimNX6CB64rTsWCn",
  "key32": "5hJUYH8E8iDn9X5J65CKENzJP8ENXc4tc7kAuJ1xcT2KBuUgUnioh8qy6Rn8mAPxgqCSAiPqrB97HVTDZozhv3aY",
  "key33": "2Ljmq86kTqoVbdzszmymW26k22NqRWMdffxNpUWiuM6xmoZvaWV2tG1Vps28KXXC4tich5GVhAFihi5u9zxC57bs",
  "key34": "M3CYmpTLLYd2gznoR3rRe9NES1Jh2Rjuuvf9NyVP6WGrFwHfQwb6W4LQhGvVWCAbQ32nUEMEuL3zRikQpacw8o5",
  "key35": "5X6x2VUehqkckYfEu3SLZwtN7dbDWyyJy6d5APJNs2jxUjQSvRtv6BuiqZjnSVyf7sQnAW6xJg3SNrPgRnxENJEa",
  "key36": "5fzYxUeJMHnKpmMKALBdU8MqoZe4rU1rUXva8PSKngiQLwVbEGcESmnZ1rgHDRcca3G2TMxzq1tXQqRq1CioGivp",
  "key37": "4wqsk8r4gCFhhqR5P1rUVuxoQrCxAQa5bQTLJUvbD5HXw4xY8czRyDeghJp8HaD9aKoGhBfCF36q93FPw62WKhPG"
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
