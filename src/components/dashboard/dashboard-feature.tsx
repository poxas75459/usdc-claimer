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
    "3qYcC8drFrnoYkNSzMYcTLZiddrC2DaEStXKToQ87FtwVBsuAiMfEJ1LRQss3EPDhPvj7HVrucc93gtf2PWhb4BQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Uw5E7wK2UsfgSnp6cH6WqWWhnsKmTWeDYewZMN2xPTwy1bcLqAfhBLUzjmD4b7XPQF8uMCX6gcumiRY8fBNDg7",
  "key1": "64QGZV6MoWJhqLG166C4wAwdKtQ58iGBwG1BuaBxVAUyUbNfa6MEB7VKs9s6pFopaLx3FYBFvvbGL6mtkJMPhjyY",
  "key2": "5nFUob7UY4iQtxwQkJguGnUXJdgbNku11mVSEKK8BZ6uw91mzNToUD5ZkC4qF5Bw1jxW4P39j6PAyWQ4yyJcDwpc",
  "key3": "2mJFv3sWrhST4s9pmRntj5JcmBEcBDSdz1EjhPM89VuJeXmpLzoNWo2wTYrqGr1E9ifzvSAwqDuW5Lmf5CsBroWG",
  "key4": "3enpyoJLaPEoyUMAgKs1hyACCeuU6z4cmz7tnxmfVsZzf1kDtsKDyUKQFSsk3M6nxJnyqFdiedhPaJ4bXp7GZ4a3",
  "key5": "4jfWYH4ytfirTxQdfnTnsTsGSQKS64ATcpuRdb5KUikvFp2zpnGjVXxnzaaUiy8k9hSD3jA5yWQx5wVoYZMQFrXz",
  "key6": "cYNaqaGHVKJxa1ZoUkppv6YSxC1hDxbpsxH4U1Z8Kr64EG4u2XvCtCAasTXcww4sTCfrieUwpiVxcEYYwEPShA8",
  "key7": "4jVsyPiF8jWpZdxSu8njJfES11yAAP18XgCBTSKLQjCvSSAAuZrCc6KaTbF2VfRMUWt9CSRH3rjSN1RRk8AW1Laf",
  "key8": "5Hp19wEDncPEbXPEsXuN8BLptsHCA5jgWBuFX257kBbPkycL2uShte1mu34bQ11BSTWcQs4AehKPztmz9sXrHDuu",
  "key9": "2DFa7u1MW3N8dSUfkpUAa5m8Sjzqf3VhxhgKo5dez7PTgkVyuewTa2GAn3NPKsqd9GkE5jgUXBRR8bEydTuNMAFq",
  "key10": "5sguWKd89zpejvbkBUQaWc9UhezMaaEa5W2iE2rrYbtzPHw61ccHo4vQRJefojabbxA5UNNn6oudoGx6jkwRhoNV",
  "key11": "5YJrvxemNTKZwtYLM6Y8bHCTA5Jaq1JgnsgP85hAVs9RuVuxrcMUCvQHheg2C8Hzjp6HTLU3T5zvVZToazFFhzfN",
  "key12": "3ESxgTcERobsK5ukBVn85akuenX25xhwED92bt3sApAxsXeJmcFeucrJE8GvCKpzQUpGNEb7kdkiWhDGq8NGCZLe",
  "key13": "5t1BLqbtd8KSXwczdbqwiX7pA119foPrx1ysAgDbrKurGCrDva4GLquSCb7sAQsZ17phVj6huqaE9zBkCHKhZbzp",
  "key14": "jiqACu31tURK3S9vqSrENg4jjjbyB46NsLaQ6PXsQGzw6rJe3AH82z37WpsoPYE8XttVkhZWvCMBcDP5vWzWJDw",
  "key15": "4Va24dw53rdVm97pLfMvobtws3HZv6s9RWY98Vv18ocWiGGXi3ZQj4kNddt9mn3nfKMGfKwQTf9nL1a4sUCkfwTw",
  "key16": "4D1hqAHtpfDPCeiwWqFn8p9wUr1WtiFtjSBhhmnaE8TG81HmVRbpiyGRZd7y1q7LEMq8Qe3HJNAkkxkSpNj6khgK",
  "key17": "3F6awyRS81qe3W8dcVu2bj6p6Tcrs7vY2kKd96edp4irdWX8iKqg99Hpz42XxuHTcm4wWFXgX8LXqanyLuLW6Q1f",
  "key18": "2mKtGAk5piHw9BEEDzWmbTK8a2uMBGvVkPd7BdUYz3DQGhwbmxHpNimJQmyunFv2rhjnPcYJxJau7ZmNhmn1eS6x",
  "key19": "2SdyvCFqUUBwUku24tx9qhVN62727uboJAaiTQEex7xJDggpM9TAWhH9Lkj6tJcfdc8KeDQTCmJFAgvXZrwk27ov",
  "key20": "5tVPGazTipC3KKVbMcZrfjMcna4is4pLTuHW1yZ9DMPh94nDFQ2MJPeuGydkHdNnfHC9ZsrZZKgb9fEyK3WKkUfE",
  "key21": "4ztnVjazPitByub2MVyBXzRfVhfmobTtDkuX9an2zySpNNMGReidu9GBgWURfKVYjq3bfSP9wXrhmWLdSSVDBTD",
  "key22": "3UNUokRM4X4KtoxsfZEU5kmn8ANVi15rpJPpj4BZqrowHyTv7A27R1RT1cnvfkuPdxySfD6G8Em8ZoHMtWzzQo1Z",
  "key23": "WXZ4iLF9C8XRWH5W8FcZ1AyVj5HEwyiHZv1Sho2UzhnyEvBsGThEicpUnvhUd6naNZAvG9rvyU2N4qPsKVroyR9",
  "key24": "2B9vAuDpY4RUi9uPvBTrYHD2yyCGTdwPSWXiH89V5ZebpdWXpJgN61cS3xsA3LVTpRzfNvFbYE7B86oweNqDuPt1",
  "key25": "okbeDqTSJFVvUnnViNJusAxLa5DtZZtFXuVgaaNUkw7jBGzHREwtPtfJtd7tFRsVzgqzo3qgwreBUKaXzs9WT1r",
  "key26": "5MtkrHBBHjxS8wDHhaZsY1TeCFnwwxrx12cJEnnpVBRsfyj7jzLLwZCpa5vobLN6ofKpiBhmqfN4ysvMvKW1uGKm",
  "key27": "2sYLQkTQ1hkfQcj5Tp1tzF4mdX9kpwjGoxAQf4dpuzZnvWzCL1dq4TujfDA5a8dqYtVfgqydwjQZciBNKdcB4CTD",
  "key28": "2PGRt1GaT4UscaA9Ry2jHpTDWouEiYj8Bzh78XwcuSjE3axwFXp1WeCzXjF5h73TarQ583Rc13G9NWgZeMPmHhD9",
  "key29": "5xx5GMNvFTSiTrWaLqawtPFwPExQCp6SyaCxwHcjdXvDfrt3ePgrGPNiPWzqKD9henmuDa5XZ9hMvb2qNNSgbzDC",
  "key30": "4ESKSHqh5WWZbE4K6HtSp29AF3ru6a9MSZidLnpkszpTYYsLKgBobx5sepZySZosqca1WfwK6MQstrxNzd9AnLz9",
  "key31": "4eZoLQM6aKQmEjB9dJE1ehaQCERP1vGhqARLeBJZaX8HbkAcX7JL4SDqJ5iAJNricx9EGcZ94wXccwcLJ8gZwJVx",
  "key32": "3DUiDHgyyUeGU9n2jxf4Yj6KKRbwkWtvejfbdTxxiYTCPcpUPwZrUZhHPG3jzDZv3usoBUNdodQJJqKdqqH2cmY5",
  "key33": "vLbbMSuWVa6e8ofiiDx3fi636iwBDyR5JAA8aikuUbZpVqojBmWHCRHBzz1A4gGagiEFvAujt2QBrABxRtuKPNS",
  "key34": "5NWAoZJH1Yj9iQ7edbMpLUrM7fQFtuMGXQwFrke8NQwURuwhZX2THAarqZbdgCQhWfxSvMDew3MTfKUuZmADTfdB",
  "key35": "3tAs8CiHG2aFhDFQgF168DWJzpwV1X3NbDQxRdkjaJks1Da8CKwtSQn32tmNysywhbygeuMfHtB6atP1HamyfzrC",
  "key36": "5BMgqi3gJjZcXfjtUdAtArXRthM2h3yVwtVqoxnjiuebJLyTiFKCcWqQNSJso5GHWZtELyfcMkErnpt7QqrS1BeM",
  "key37": "3ZfoENNowxqBT1QsAdAyTegF2sWUqy7wtmvX2fmMwinCJZs8jJSZQ7tzqPs9PKXwTMyzMZxVUmaKoHMsQ4eKe5tJ",
  "key38": "3F9eVjALfzDVMHBmkWTi7N3JbUNEUZfxBppMGMTJ9M8S36ccsbogzUv6mo32MYtg7cDYFy1Fu6LktkKN2sd7Aidc",
  "key39": "5W479dc64psVPoK8iijdeYZqHEZgsEcaeMbuD5Aqt6VdLy61jheHGghixr4K7w5ZoqWUnHzv1zZi9xHQmRjG6WCk",
  "key40": "4ScF7UGMAgf2dswp71RtUZyTn3QbaWYZVk7oZy6HS4gLJZbgoNv961f6TKELFqAohbhRT8aUSZTd4uhDLajKjbC5",
  "key41": "4pctPA7hfGEHbbnJJX3K7RmCprMrQNhVaYCp6fggSbpKwmTqpjSfDjJ46kKKvoVGmMaU6DprrDyKZVQmSDGHG1rD",
  "key42": "5bij82kTaCuG5GiX6SNJe1yn4RJ5Y14DHdeijmn4RjoD9zLEw8irjmZweqdZcSHjhbwJmXeWQaadjpznWQkvKZxs",
  "key43": "3kYUnurPWidNec6nMLD7k7Hb2WMxwTkTPxpPkaQpSmX8YYkAYoqfA53ttTm7CtKZ1he8h11wmDnRX5jSGD13AJoX",
  "key44": "4u4FzW5mmvQ22RQNz1ENtg9y582xfRR7WL9NQP7V4Zeg273DgBjbP4FXLYZk4n54hZmhMNuRGNGAHmhjXayjz9a9",
  "key45": "sgRb7Rt1GYyd1VpdAynASyKn2Vr3SbsN5GSQEownUcVF2QbS6UcR5iGZCWcrypRzjbUaQs7rVFgPtYkdXMqHwGX"
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
