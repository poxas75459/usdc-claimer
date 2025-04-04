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
    "33ckTnUyct8cpNUUmDGU5WyLbZa8EvkAszbFJXrbvciwiu8S3fVwgQa1Bq9PiCGH37q7mtm7xkTYak8NJaZCMQUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zPRnzKC945pAeQPMKdZheJBt5qfSrZ4ZaLxp4TLGsbHsUJvHDVMnE1c16m6AnRHyTKzmHe4QmHLX9bSBhTiaZWK",
  "key1": "8F4yZ5wf915frJuzVwrgse6ebtBNyMhMVWQb9HXtVFk3Njjfaw7wHMZiqVRo6BcvGNdtr3xiDA2Sr39nuWNrZtg",
  "key2": "3s11XpoKucGd1WjdqJ52xJM5M1Cqzw67YXEdGf6H1WcrvRDKW3DbQUnom3KawVnrSHnYGmnzdCcKqr5o45L58uqi",
  "key3": "3sE5474BruZpCKKPrtk2dBwtr17UdkDKJpRz5ANFbHdD44Yxza2Ekzi44nXifjLQapSiK8AUkSMSb9hG4jsGJQE3",
  "key4": "3v8io3RAbppXUtqzaYP2AbjpSyGJnWPPqxW1rFHcHhkEKj6ZNbNDMPeBXBGE4iQccXnZ8x6jcoT6FV1b9v1V49s9",
  "key5": "4uJ19t8HoRV6t5YnqFV1H8678WmXpkcviNgnsQ5rT6jUj7w4QeGDb6UcdRi2nQbDWDjfMtefbHM17jXu1S4R1twR",
  "key6": "4R7UfqnuTPxU8Z8q4ZFA64wFDo46Hob1PyViRGfz6ibzvFhqqG1XhPyXrY2Lt9VM2EGDqsW44vVwzkxmuPM9ZrTW",
  "key7": "64QiUnwHSPaTEKDF6FgcDycuKC17TkYzbsPQFto4iup1FpYspVc6ayvwYsetPmKjwhV4aiZqCsb4dXdqfvdo3J4Z",
  "key8": "oRct5aXWUJYuwZKnoJd2ij9wD2gowkYWnWUTLmGNJqzvxvui8oMfVZv4vY2bnY96rGZhd84htw25nXSwh8mg3cP",
  "key9": "4oV1r2Lhzz5yQ2DmD1YMQ83R8AVi3JAPg4x3NPTTQa27J4jE7wWrv1r5LsWTNCc3pvTPqG5A6BewEsgqTbNoPk9U",
  "key10": "Hx9jFiQFuntsF9wmDqpBahSXwLJyYj2Y6pPQjo7kLMYr9Q2kptUCJBpjytnCi6QucrHyiTHjh2x3F5vw8Tj6NWj",
  "key11": "Fp2kNWAPpb9YHhYUsrQyaPd2k8gSLA95QnApEQ7SWL3nfX9BbrbYhwo5zqrvYy2JQSFqnEVsdXL4VucfyapYuLi",
  "key12": "4mNoodxcgQ7s1Yniot1HYfFqHmX3rk4R6nwnE1Cj5EBRDsu9fWRbLZBBLXZZj9HCutRHWTTKQJpjVH4DvBXGVxSv",
  "key13": "4SmxErohL7YDDXXXoKcyQQCprjtj9qeBxcF2dgh8iDAvKPQHRXgvTHH3rMUzFFoSuP2iM9rDYzi33HiLu4YRyoxv",
  "key14": "3vBBTrEWfTF8WuHKZ4Zzb21n7thqB5SHbKsJsuzauXvrxBunFVWdRJJge4FCpK27LtmSDs3fkgaZ9gB4iMQeZyuy",
  "key15": "2zzCjUjWxa5r7YDGpSChNmfbD1CnPWj36Z9EHAU5K2HLJUsrSvUk2xGdTHRfRURZq2LorAFW5HLhG4Tugjh1pr86",
  "key16": "53gXCtzkH9UkRtuR55q95Pwkrx2zffTTDpr1e7ZMX9ZQziN9hg8h4mw4B5U1Bmix1m3qSnjxRon2F1vAEwz5d8ZS",
  "key17": "5iGvhdVhntoE4MHMonQ37oqaZfftTBviYqoi1o1ynFNWbLGUvXoMo2biLhw5XyUMMnjQoBC2LaYkGg5N9NYm7SE5",
  "key18": "4z3YQ6wgUMVV3dhAiWrXAW7SyP4MqhtYfc7VAUjrAHJG3CwgDrz8rV5g29z6LuHwyZDqzhFJUynsZsfRpmqc8P3w",
  "key19": "4UgVJKYwbCLJJ1NHeAbe513rDQsBqtR8PNiP9hVvYW3GVCQKsMrRxVP2EVEcBfJRLbs77DYVX4BrR7NFrLCUXNd6",
  "key20": "qyW3YM1vwG9Ju9kbAesrUYz4ZJzU5zdew6f2yXvpVnhvRw3ujeQzThGHgZ812F344NSLHLw5SnVSZKv8JfYpVb3",
  "key21": "ydWMHDeF4ovGdSGYhjk8U7GuR9WZw1sZpTHsZJsDoA7WMFBRenhssjQbbLCvHDGUyPsXmxD9tMxztSmwvkztppc",
  "key22": "5tSE1P6Zd2Sx4Q2TeJrKg1NRVk6PGLX3cUkDzNdfomnH88Xq62c3rKKj6HrKcTiNRoR5VWnie8wFSaQDm8Nii8ZS",
  "key23": "2TtsHyfA93WsjvEo59qZYSYAUozuz2FAVzZzsGyjBuDvpzfL3RHwwB6eCmbmnckuSmBLwf1c6NjzRywqpqDLSyfo",
  "key24": "52rm6PiuGVMUw9Kht1ooV7xZP5CQRmdQbeqV1uCokKS99mWEjziVJcjZEdtMmWZYXrxAqqsUfz9gzwKDzxZ78Kra",
  "key25": "5zPjHAugeKDCa2QyFPycg3T2opio9J8EtSA8J7PZstqBLoWC6KP2R2mLdoh5L3JoYJt67iGn6FnCWxotVvQMUBMc",
  "key26": "4HY2KsnVhhPc2rPoUPk59z3URhwmz6mGdYZDcrLCzGwL8Bz4dTitMSJE1yzgJYdUqxs9JM5YRmQR6YQKV6GqMCMg",
  "key27": "4G8K93CMYBGfDK3SZDyTW4kBwVq1cTw22PTyamDx1zQoy5krMEbhw2K8YnJuduey2BxCxwRtBZfpKxFiGzorEGjU",
  "key28": "485tmkk1zChMS5vqfUApegiuzWwbqGKrE8w2fiC4tPDLLkHUujuLyV8m8ZvVKiXWapoijxnLrJNcdKMWfLpi8xpX",
  "key29": "5JcT1a9GNJMtPcVHdFRRtDRxdEqu2hLn6Zi9PSASQ6iP1KZpQGJiL7MWwdZdEfrHNDDYuYcMDdxmTZTWoYECwLV7",
  "key30": "3XeNnRQeebwM7usfrHetgDyBea4K4KgzKWN77Pemmb4M36GR1pA8ShCbUxQGizYT5QUxG1f4VnxmaR9SQfNSJPc4",
  "key31": "2eFqeFccKWG62KXNYaPh23x4VT86tLrLKifjrW7f3o1zeiyfh73S7BDE1gVykiiQEkhb7oVNzyfZCoXPebZj5ugt",
  "key32": "2Fq9CzMXa3Gufj1QmHW2c4HPKHCLai46tFXdDDfgbXUCE5EYeJdRJNpsdjtgZa3nWbkhLW9ogAk85q4tugLSaviA",
  "key33": "5RBh4SCBQ8xUUs87en5Gg2AbH5QmueRioDBPA1bfoUTa4Pe8LCRv9ZsNGovTXin53hkiQQLQrx2wzGisW1Hppgjq"
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
