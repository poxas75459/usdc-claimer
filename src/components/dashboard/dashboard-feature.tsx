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
    "4BXWSGB78oC5ZLybNs1LwbLjhMiFyBysTzcZAuHQzdt4koLMruD4zpGH2M28MUeP74JxtjyAE3QFtFZAiZsu3fW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZHUsThNYZhPmPMZJDjEgDwgRvGbqVbDvgQpRCiS3uU2XApKc9FakzovsqD4artaMxNb7T61bfRAbu8HooKKmfu5",
  "key1": "yF54mERRqDMaXZjp8uuDPaT68NuezdAWvHeT7cTXGMfquHBwBA6uXNjj17LQC32JVCHfH7YTSfC9ZAWetktwpb6",
  "key2": "4aJbvcqYbU6ttRjbDFVpgKgAePWRw6ZgvrdNwQQ9pLiWZ6PyUHiHwv6vs9Msc7GamSLu4Nfpt9GBxEgauxFaxCti",
  "key3": "2t1V9kETaUyF7do4jTPVmgioERjaqb9rTcaXF4KyxNKK3v5rQ6RsAgpnxhHEdZzTpXZx35raCBuwRETsSdJtwSVm",
  "key4": "5gWdmfRihwHG4epuHWmtj9C7uRMrnYS2jFfpeRYvSLUKnpvsSsC6b86JvAD6jRVLRDXqY4qXaAar6mPNw7fE5qLd",
  "key5": "61YBU4J2UdEGpVQGcoEV3J5QG7Ziry9WN6AUv3NagmXDMN58awyaB3F4tXc2miiB1J6STfuCpCpNtqZmgk1K2Nf9",
  "key6": "4XwhyMF9u6aWPhd5AzztHPJZ7xH1j72Qbf96EY7FZiCCALYiCTJZi2aDp2xJYi6DU61EHUp5Z94B1KczLyG3qQQY",
  "key7": "RbrDYrsjp3yKt9sXHFRiaUnA4L6zLFoHYkv8z3qgTFjEys2wEP3nXsekV5DU61EooNVciZiZLjoX2aHMPjsKLvC",
  "key8": "SZ3424cV78Gy8PY9r5pzsM8pPDUezLFxKqHcU94anh1zGwkBjamRZJuPXdu6N53PbuZNFn2nJb8cZEsmCeAsuR3",
  "key9": "2rKA9ptSwXC5ZUgqsUkA6tERrzAz24bAZaCBtL86jyAQkxYBJiE3knKmkyhC3BsRLcTKYxFiJuzcmd8E2SftdTAs",
  "key10": "2szVZhm2iwemzKqnwBrHpTGAUfS9H9aj9LzCBTbMvZTHn2Uk6ijSvG3NZTfpPxXKyZW1usjUx6HodDJoZPfHTJDY",
  "key11": "5rjzyk8Xd3WvKxo727KfYcSymmGF29ZgSWhPAQXVMePSgn6EFhQ4LP8exRTZ3sTk9R3TBzyku7uY8SkccJuP9qW",
  "key12": "5dvT3Ccb8BgZYWCu5n691VMxo36gQQVrM1XLgPeiw1nJXJwCSkxrE7YAcniseeAUR2i8cz36kweqRjnFZxWZ3RW9",
  "key13": "5fxtAH3KRgwP8kGjs3LJbyQBJvLLDV3KnqGjt5JpGDrMBCjNuECr3bqsBNvHRTCgM5NYh6zP5cEpmdyXUnhJKkz7",
  "key14": "4bHxAGqCtibmzJqkemAjyjk4y8juJAYwcYE8fbrJicJGbm5YPccnjWaZ1oVa87uR8CtvtnRvx3C2rwDpFxsTNabv",
  "key15": "3rEpq14NLHZsQ5ie8aFFdMxjT51hNCL924J4FZpNEiBHrjzA6s4NBQ1rSnCtwv43KnHee87kyLfpaKM21oGT9pY8",
  "key16": "2hn8AYAHpjPHQ6pLydsQJyfgqTi1mysnMjsKr71Bb6CD7p7CfKTJLWYxAWquJARc5pJqg7sXbjqKufVXcJ6P8sVv",
  "key17": "3FGkseh1Dv5UuCCKHnnhgDewZPvePM4FaQo2pye8XM6GZXN77wpMF26vFCtNVAwZDsjpChFU8oiA2HjAQH3EiE69",
  "key18": "4EU8DoA6CFfM1R5Eno3jGNDSutaYW67NyPBswvVxRzxFyoVqQ2P7yGbe38zXbjtQnVXf85eH1RcRuZviu2DiAxWp",
  "key19": "2zM7RCAXkgikcAhoowVgdDKvbDUdkwZTrcsCpN3SbjjgdmXpdHHnJ9gPrVwDVaZvgrqEeZ6opziwWaMSZ1ntsVMj",
  "key20": "34otbg1gyyYDhJxU4EjfqB6qKhwRbZkiniLg769RBMxFKY9RejrG9pJ1F6kDQNh9pJK9EDTzJzqRPcrGJjdczCjf",
  "key21": "UxVjvH5bjn6KcuQg2GmtmYiqeXCYxeEuKt9GgbKM4Mkgr9TaCVWQVgkXgk1EDnvHwPRxNsbfESRajaHv4HrmnXk",
  "key22": "3s31EcyjUQeYZqDvw8oMmCBZBoUrT3pVbvwjHwuQjuxyNsNogmWXceSNEwwLpF556Ky98uSBiqhvmYBUb3JYC62r",
  "key23": "5rjjG9KiXjCa1x2Qyham7kkM9TEchmrdvRfKE32ZRk8zTc76DL7MBob5BCHxcrwjkNRf4Ku9TvH4ZhvZPaWF1WF7",
  "key24": "4PV94CtMiYk9CfcagLUMidKF8JoaxkJ5RUicRZ11YEsvUbFBzkxstsQh2MVoewnxiZXreeGCUtgUzKWdiNiP1HRQ",
  "key25": "62eEGvtijJkahga96Fps3mgAsXo1rRPanZSXdbbTsSPqVNtx6UV43DC95rpFeNSk7fYwVUbGemGYmT6WSW5b7aRV",
  "key26": "4L5CPUyGiVSrgzk69WiEZJCXD45TjoBda6MbcHRkh88f4G1XRFCGamqiMXRczQeow1N2zzZqU8SecjqzQKEwJ5pD",
  "key27": "5aJB7MDYHTjN9stQmduPAcTHTDyM57yZtqE9RhkrJFNs8CMY356m8qSqkttz9mFjFYHVYboT5xGKaEvgfLDAnrhM",
  "key28": "iu6fWFSzK3X2XaSAAJ1yGtHkPTkso5qnyoPoXzypGtNBu65PE8mcKYM6yErMqv9gkkGJQriPEcy53ndjEoNY6jd",
  "key29": "2Tzj3zk4KFrBwAMWNYLAoMistdCBr7kBUv2yY2hr5q9fBWNzDD68QHxdF1XrnihcKcfcpUcBMqUwhT6rjmYqT1PY",
  "key30": "2gbfanKRT4wnqSMZdYSNPRtowzWiC22bb6k14EYycNjKPgVUdRnX93miD2HqJcAsrYzLRaF1K4nNJDwSgQ3UNgW3",
  "key31": "51bpwZ1B2f7vticW7W5ZcaVqePC6CyZ8ELbqwnwXLmT9AVHVWP4mRWasBbDxtKzk83iopuwyxCM9CdUBxiGykSBK",
  "key32": "2vQCi5MoAyp4jUCyX1Tgyo6JJvKjjmYoiwceCooV4hoW3trhJvtheBcHkukao1RwLFazhGFvwCUm7HKJ2jStckm",
  "key33": "bUQLJEAzruZu3imRPvUMWc9pSDjpz1rtxDUJykXdMbuetvjd7qdj3pWNjiN9w46teVvypTFG51dJxs91Jkngi4f",
  "key34": "5tcQiGt6G3qGCax7Zda4mjLcAwzdQ44fbaFSk5kgF7EMbUc1rTfyBWUbn9w5tmSYYaW8N3s5vxhz5fHNnGGbLHJt",
  "key35": "iyDuoUkqf8koHGVNcKuycQq8dZLvyhp294HLpEFfrzvz5g3n9buGcuxRa3WveQHn3zfg3W2VM7xXE3JwHzdL5Wk",
  "key36": "K6E4sDQvbF7K2w6D1BULUw875KjCnARmEVcT4PQey715Kfz841XYZnB5TiUvTCCgsXzYo2geeYUfxRBQ7r6c8kV",
  "key37": "4jXU3BVTKYzjvLr4FPzjYA51oVZFusrqqXro14GXp3eJqD8DTbFKcLyKyYm5X2ufiCb3c12jda5pdb3EkZcHGAB9",
  "key38": "YhBQKVep7XQ6yb2C8XZEkjHQkKTsmi3XZdMUaF368psm3iorY3Qw3UdPgocT1DPHNLpGUJXxZwpvxaMzCaFKDpX",
  "key39": "5WYpRiDqMywMAdenrgxv32UCv64PpXsKynQckue4et8PCBfQ33mPbt5JM7bCpVcNq3bHunkHWXMjdL81uDyNjcki",
  "key40": "4DB3PAVTLB4ycM4AL5jXt88TZPzWCdxqL3wtq7iPBpEqv43jB3FMakysAaZ5bFDf92Ja7kLLVr5VMoxQZkguA8nT",
  "key41": "24hjkwa2ZjfsborR73PCSnZLYpM2YoK7ZcjdfYGhsjzNQS99YGuWSh7uM4uceij2pNPTYcAfHP4NxrbN2DRqfqbz",
  "key42": "4gtZehUBtxwzP7JvRYUYgZJvhSvEFhaj5yppAT5QeShWFetTZv1ANgRpk5Az8THnVPpeXWrndUfZ3EBYQ9FunDWX",
  "key43": "4H9Ma92Do5Nsvxnd6U4ie4GcammQFEoVeazvQZN2UHgA1zxefM2c1P8SDsVxwxidp5S7Zo65h6TqwrMesPBLpZsG",
  "key44": "23dUF3a1D8YhDtVUT1UxPJq5iuka5pkScYaHewwLqXDvi8DtNJcXtsRMMoPMoTXvoEth4nEiT4WbmqZWRKWC7DBi",
  "key45": "7Q8h5JDTheEBPb71p8DiGDhntpNtJvi1QTyZBnK2Shqhw8zsz48KbnxDgJ3pqoThnocPSpZM4hF7yLCKTPNXK45",
  "key46": "2o13FxbsLS7q7KKjYFfabSXV2kNDPGe6S86kbUZ45hjKj2WPqrEbmyeg1a2V8XXBDxbcU3bddAtgQ5GsJS18iRkD",
  "key47": "3MJgfNFy96KegvJjnQfiJmv1HLuwQVna7SzW5y1dfzWpuV9pHzBFJCx3TL7hWhMpN8G3j41XujMuDQ1BGumLCVM8"
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
