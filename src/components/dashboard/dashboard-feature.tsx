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
    "3gdpye6UdDy73YcPKTByBUe2XCcfX7T4EvoEf5FvfUfmqZsjvpXGqx4LuXG5Tcb9PfTgZhh8XhFyPBwobAQ8Rgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMAnaxZPjHJC5Va6n8ii4atkDFiSeXh6Co7uPA1iKK4Ds6RnzhvyhohdgiBiJnQ8Hmhx1dVZt5DBTAhkZXx1gZN",
  "key1": "225KmHThRRfM9vFGVyy3fBGGjTaGrg8rMftXabNf5XcW5nEm4HvdJfLcGwj5g4oqRfxpHZCwVqniU2V5yk3x6iDH",
  "key2": "6jwCNsVivhZ3xRpgtWc63qt4ez2L9ueeXSqKjnn8FZvoLhyj3PWcjYcfgcbAB1sjyeQHxxxPkTX8Ludb9hAM6yB",
  "key3": "mwTsMLQQRi1qVYPcQR8PK4oh1KJySBMUv4SxNN99t1odYZJmHZ1wUMEJEQ8LTRtahRfSky6wsTt8Mk5czNeubns",
  "key4": "2yPuhNq1WXaSyyiMczcFakjhpGuCJ8WxpXTpDBCYp5H2XM4ZPJg1BXNFDvikbyeh6D2pFAjyKoLDkn8pFNXhUaun",
  "key5": "2xSkuD8xhSG57QjTLLPxddE7w8k14iKSuiDMdoYzdTKPeEG2XDYcQEVNHtu7M5ydCymXTdmsunmJP4s6CLS8Lkn4",
  "key6": "2wQJegDWAir3HnYY1T8d41w84qBX7MFF7wurHVoRHrxuWZ3k4a42Cj5kdaCSECYyEB9odMUQvjTA1CsyrshwqDsN",
  "key7": "6ru2du5xqzpAkbYzRTsQ1DbsGpB1PoQUy5qo5D9h5yVXrsFtgyj2joT3NHLP6kookYPJRJP4qhqgvdXPmreKXmV",
  "key8": "4nbDv4medxS18HwWYk1B38qP2fEY5GyEGvuygUdj8SVkqir8rGYTUJacdc4di5RuXUFwhGeVMnM8XQMJwmybHnNa",
  "key9": "5zAFKmVxFoGHSVhibMjYmt9wmDNA6nQY8Bp4hwK4V53KTcL1CAqVUpy5E1dAvYuHkXWgpuu1uuAB7uCzT4TfpBz6",
  "key10": "4nXe7Pq4TeMyfzWtFbPpNgTn6RZFLPw7UiUHgkWF3rMu8j59QuS7R1MS5zLXm87Bt5iA4ju3QXeupqfujyg3ExaN",
  "key11": "2yhnMZgEvAiFsacM4TSJizgztgCGZorPpTfqLx62ZdQhcWxSoSJ1RLWdP8WGP3WobkZVEyaT4pPdbCtJoNbMztaR",
  "key12": "DudyASLoJps2sJujxhYmVR8EsCTLh1A8k7MmSyuKKT3dZzPZ5GbnPnwFnnXCdod2tUiMNchD1hVeH9VnXkRVSFU",
  "key13": "2KJPV5f4k3aDHS152dxqFUJQuhAgTSpGmVpDfPkgp4ugXJ9i24MgEuQp9PUkhtwVLuw1CkjJ8mzJZTjYFoRP8tp8",
  "key14": "2nqqBL6jqa4xuPruF67A2wPZ7PDxARQLWHH3UCRxv2nsCHejVW7g3Go7sAnsmTxsKu64Mow1S2HaL2nsLxiWYC6S",
  "key15": "5QxriSWLANSNYoUaTqFqxA6wZn8Cf78wCgJLzMRERg5L1q4VkjW4PiETtBi3BcibVo6Aiu55RtqDesCdkAuB9whH",
  "key16": "2YSrHhnAQsF9mbNM4kpQeWvjSjAJv2wbSq3czw5Q6hhEZi96LqiD69qAjaJws5Aeh9ZcaKGZ3m5KzbKEPURHDqPJ",
  "key17": "3aRNygSxJK9TjpdztPQyUrX4q1tXMxd11p6V1ttFJmkbovh72Zcneb2qEzMRC7KnvfVs9LniUqDRaHrx3YhR5Ufx",
  "key18": "2xkaWRiJaeC25A6EBDtfNNSWwDnQ8X7jrBg7pECSXZYoeZkSjf6zLpi3H7bjAeDEoiN3DW1H3HgUXC7P28x5B4Fq",
  "key19": "2zxemdGrBwZj9vAZ73mhwkTozknfLwUEyYLMV2aek6mhxk7fCuQpnEo3KR9qX9FtpnWWeUVrCqmHNh8SAjXz8M1h",
  "key20": "4Ym5wdZ7EgVLKFab5e4g4LUKabdQn92scjUKEy1PurSw3jrNkjeUCTkHckk2QeA7r6uD39XwSEo9ooAoxNSR3vm2",
  "key21": "3VJwKMSttD7EvKfKuH6jaN8233igemmPkD3rETh8PwfqPgGdQc2AeyyEpLeNjfqL7KkcvECJUU8SkGwshw6mbAyM",
  "key22": "5pdVQEBqm5eUfnD4vLU3PoF9ugzVZfT8P5Uz7Yjyxt79SxnxFkzJday96AhLSV4cNZJLL1yy9ENXXNCYME7F5a7o",
  "key23": "2hz7fwrwX5nFuop55CpjQzmd7J2eJApYRsmQYAi3hak51wRniruXVrzrW4szedaYctBk1vSUcuifuLTDLtBei5mx",
  "key24": "qcbn6qj5rY6gvqFV3KgE3nCv7LsdJFbRZDmhTwnMLbWADWTHn8wAfP4E43Qcap2XcAYic12BKZaKC15zWcSqmM4",
  "key25": "2DZtQzrsEGPbPif627sc3by7RLoPFi8kWToc1T5rwZQPfjQTQGSBRP5LnJaVTtDoyQaxwXQyGk6aDUnkJtrbY73Y",
  "key26": "3T6TtPQGa3LtkXG7ng8xAPK5CCtsuvJ8eK35qB4wFCDArw5EJNycSxgHvHXagqJyN9Sgic5eL9j7sqrvNtw8c2bS",
  "key27": "5HygyY3nAVAYt9WwGyTPoQpJTXzWsJA4ZVi3Fw1xdTBmYcxwjfAk1cPXU3wnKx5xRkKq3yoCdveJJPKicMvYWXm9",
  "key28": "27yrKk73QHuF1nHVnvwMkedzEapyCZj4zvWCEbmajE5gqxq4rVRRJpJcyDB639WZsE6GXsH7fbhthdfEkBEgNmNo",
  "key29": "UG4kU4Mn7v3USXboya97NexQooEaKSJK68oKuq5nLLk4dU4qd7PA3vy2t2xMKF7BQEUtLGKEnBZyUJxc5w79RyD",
  "key30": "5B5jArw2YsPTWtUTYzoZjGwgN2jMvXcPpsqCQMfwSssbQoDdDHQw72nRtBDGKATMgBHrRby9NGcsu4ErhHxp14AB",
  "key31": "3tvJHJKGbCHdZBpeZR7e9HZS7Tt8PBUgMu32XFPjpYfqxpBanW3SDFcu6wiGSwc3EBgY7QUjZ5CaaFuq67fWNNn3",
  "key32": "5xUEc8PPkPUG6FZXxdH5y56MebUZiGrJos8GjC5a9TLrEXi5qXquiws9kLeuKQbmDDKuKZYCk3NLB6K6G7vyfJqm",
  "key33": "5eZb7u8oYow4eGUrEAzZyub1JhrRsN78Tc3jXqPp7a5qw2xkJjpwT7GHbx1kpKYeWZ89bUbSb5VaR8i6rqHqitFE",
  "key34": "4ZDKeA3xt5RuqMQ1RoQWAcZZ3Aai49Fscxa9RiHRhogUHZVzVzaaeEhScz7GSWrBwvBEsJjghXboTs6CLzj9bTHJ",
  "key35": "22J5WCsjApx4s8fwcgiHxgxW8vGRDMTJpQiUChGE6or2P1NLyi2dwSnUySXSravJjYJ48PoiqsfuqxjF1SJ64o6W",
  "key36": "EYVzAyUEptxvrNQgQXJGt1roC2X7gXaWE9SyQ6qNFHZPQn5jzukuhDmi5Y8E5GDskEnRPCqCJJZzqRrkEGh6Bdm",
  "key37": "3f8aPgvFyGmxsJgW98oSdkMciP5odZveqEhoLrN3Wug6bC4HkZLbiq3MuKWBAutmeDh9rYt1fahTZgQhoK8YMeAz",
  "key38": "4vibezM9jirkKgKnVNdvJpdPTrH3cJsQH5B95jE3vHwdixbF2f6naRpXbpwPKmD5CC3k7J32PwtectDKFtTxXark",
  "key39": "5ZVaaJNaGLE4zEFrdKvP8dF26caWtdW3P5rBHQF3WxV29PsYvVXFpbA56cK4HBgi5w5TRozorUC6zCQemqnxfTnh",
  "key40": "36QX3tSENippnN3nfaBoM8LH6mZNzCE9g25UAKef1XXkeGwMimu8APYdakacquZjfqSxRu9M88L7q6nYBbJSvTo3",
  "key41": "5B3rpzAz7A59GhY15NPnPpzXnZhwCqyVWj8zMyHLPFCx2Kma4fXwEtWfrjhxXqtNxZZoBwoLSZo8Hd9fEYQTDUKy",
  "key42": "4mDt3Jp8JKAuXiMpfKGpFk9ARe5eeKwJpgCquCihZjt3EpbDABqLjQbrU7KNBVyoNNXVfJXubbfAQ1cveLREj1ps",
  "key43": "2bCqVZGLBrEyuXPF1mUqauQ597AexJcJ93pQSaRp7JARYGCra3yk1SnWUDrgHEJDasohjAsdoNwFYYRJX6LC5R7f",
  "key44": "2KH4UxSiXkWz2nUia3KwNFoKg4LKymKvFmK3NEMPYspz3GZ8GU2yaaSTaNigGo2wmheLBonyutybHhLMEt43LhGJ",
  "key45": "5xYXyfh4quFS1YXpjnwZDPFyPcbDZA4Fafhk1VTxrq1d8EmREeQnSEDuSBK4qx412AoMWm7CvahErKQQt5fxhhpH"
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
