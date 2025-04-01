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
    "8EEePxKDSJxpYPuVwJfaKm8sradgB2JCfSvLz7eSBVm8M61S9E7e3cmH4x1JCLqazqHSQQ1EK3G47dwTBvjDqEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tRnk7tqrArpddjSk2DG1KTSKJxwTSSPg27qAxS3xik8B7MF611GbUvicR2wa7DrUigcg7HAozxmFcdkbek8SkgS",
  "key1": "2Ymy5HpCrx15cA2QNEuTawtpqr9J6Qy62F7MRCX71xkzwNJHraBvDpZcrB6tyAkthP9ThGLNGuyK4ckszKW5J4Ko",
  "key2": "2XmnsebHdT6PKBjdETCjELMVgrtyJ1VpB3yj638URJJuKrQxWFh4tgn23ahzHZWsqRDqnSY3ySTmqawtpmcUiSyJ",
  "key3": "wKzFv6UChciFqWuxLxgPLU2P8eahHGAMraPDjX3rhfDrBX7z6kvzGxEptUbAnGqu22LuKvDY9CaUppGmaXF1qbg",
  "key4": "5YDnEgQwneqRio8noGMjKjFbj6vBMEU7q9noLjnCp8tqiMSV5taZBhC5r4yboUTRcrZ5NyBVcDrrTat2EKgxK8BB",
  "key5": "61rAXw3aEyAjVASQdeuT73zqWFeto13HvkpoeMMRqmFXQQ3mhQ71R6AVVYSMXJ2tkmDLEkRrKyU3891Z9cQAS55j",
  "key6": "2Z9euvytzXGvy6Ltkfsvo3n13bxfVrNXYQz8uPtkrcVQQczBk3JYU6p8cdcbADe7vGoK2DH5FDqTiqFNvbBKRRzk",
  "key7": "5gsPiDr2ywfAk21EeNMLiEYji1MNyi3z1cHQQQKyKzDtsD4N1huDNRQZeQT9QBY7YwE4xLUDX5CBpvSaBJBjsy43",
  "key8": "2Whc1NjnMv2JYAGBie5J5AE3TDwZEuyrn3MZ2BSRdufMrFoHFSo4go8sRfgHjPBCiQE3iTADW9QxLHGqFMnV3rNm",
  "key9": "4DL64dikS137h1oyAB3CRghkFy1mdiJwe1GRm3R57PC3x4yfHYMNaNCCnuxczaAThdtaCgqYLKUMiVoBiFYHZvVG",
  "key10": "37odeXEV1p3HQr1DELwiPzfp3mBxfVFrRP6bUynJGExG1wTEFGtfCfU3PsvdxAB6Zws9uTjf3nzCa9zFvwRean8G",
  "key11": "5VnWGecmmeCQTfcnryk1U8nyQ9izJL6DGKwNdZrLjNgaTv3sZGpLvDSquah3gRUmPbxViFoT6mUgeDBxmqDBmKvq",
  "key12": "rViqC6ynN9VSco7uKtkrSHorJvVPZ9R7N95zLCYjGiwcUiGnFCcm9zGvPwqNPSsgieBQHcXMyBJPWj56heUHTKD",
  "key13": "2Wwueu7zhrXD4K2ru3MT88A54SEpNgW9hmVshEH6uq59YLuozAXiHkoyx9g6hrPEA4cXjHUjFNwpyAS6xoBYRSvv",
  "key14": "63AWvpzKsKkueca7QM4BEQRmtAFSyrH659a3Js2WL2FXNkNmNGb64fXLoR5tvBQzCxX1rxzchwWzM52WZJtcej6a",
  "key15": "42do4ukinjrUvbZJLtBdW1rejM29xyz7yMixd1in3ZvGtsNxctDNqRcPRkcKRGL9e9oRQHsT3kBq6W5Q4kKxLKj2",
  "key16": "4bC8hN12FggTjdMTgwm1CvVEjMv96sZqT6ANVKTay5DQxbCpmqqsuSjN537bbUv1oxuKqRYzqdTswck4iChqMPkt",
  "key17": "2dN9zheje8uZJ7X7N1NnPkxZ4n7GwcyqFeRmCDqhcAsEx1grs8BwSp6gzAbZL1Cq7HpMmhb3NSY9rJDAfMMEx7Ge",
  "key18": "3uPdrJ4vUMJSqHWWh7GyHutse8WRyEomuxaPJXoz9whdcsg6PiapPj9uxxNTfYcGRhEeYvr37FKYE4ksAMQL5ZC9",
  "key19": "3aAwPH7ZtFyUeNwW5rhXHUxv5nXXsQ3rXECsKbcoCV3wx2xqpEJNbB7yUvn64P86iXA6dL3FQ5HBFk8vg42hPPq4",
  "key20": "5qzwhbGKTVRpyW6ZYtH3ejdrpyY9KEwT41aG2Hwd7gJMpHr4BcYTUKtWkZV1VTuzcRfkQopS9x8VUKHh4fnqmZk5",
  "key21": "4n8gHcnM4eF4oSWJofJuUY6ZH7eNFttfmipuWVguTv4TnXpYZWmVxvx5iZcQHgexMFZiNFhTBjSgn8GwiAuowaKr",
  "key22": "2rypzHdtnY8hKF4pzjaRawMsagsgHbpNQhJqzPiqpYBRMUmhgR8sLJZAA5hpvConTFFadFeZpVx8WUBgdQbTPLA6",
  "key23": "5eHkvVg1K4fTWfT7SZg44y6RWZGA7LcvfYkvbydanN9eSXHT1QL4vn2MQoEjp5EVxWc8wGGLPsD7TCB6h498WaLM",
  "key24": "iGmoAETbX5f8gaZBoM6wBxk8fYNHV5UF8JME2xHseigSByzs2QyMTX5FhV7hXvF9P34PHk5oDF4Vowskn56v9n5",
  "key25": "4d6xeYTmwdVPuMGQAD6Tnttvqtwa1LR29WifRKbeRjEPEaCvTiGRCSKgnhJhjehNfSM9WTsgF269myDRjF81AXHx",
  "key26": "2senYc7yooXwqdXCiKpNSMx6237gG9kTWSZtNAbbmDAoknGQshpaWB8B7QCoKdyqJCTqV1qv6bKX9grf9PmGchmq",
  "key27": "3uRae6EviuBJjkF8X8mS7Hhn1Nc9D9H1UpEJwu95nVkGyMfh98bYzgYnJaW9e8yLpM42Jss3vkTBBE8oUaQZDtGr",
  "key28": "aABQhoEpMvfzzJhU185TuXBLVZj5o5Qo5CCwNqihyEPukJB3kwdaxg1Rk6nvLf4Cg5o6zqm7D7mQggyhNHsBvsS",
  "key29": "5tXNTRHN4zRaDtVvxB9Bdjjo19v37p6cyRP2SCsDJN9YSYQmJRCS1bpJqBv1SenFT6unKWcFWxpzC9KmG8YR8sKo",
  "key30": "2MrJ9Xb2rz6UhdYEun47qGkVyjWCQQKPUmiKwpgGt8z1Y3QP4ZsPqVFBKS31ZPw9P7DrGdQHTdZf5obzQDCbyK7Y",
  "key31": "3QksboVfWGu4f4XjGAufzGDiaaZrinM6bx3iX6bYDASrbQ99rwgDUmK2kEkLVm2sZqK1o1d2WRygYmptRrmxGhRC",
  "key32": "2gzRJZz29iGet4AAqEzyQRnqLVfGiYoEcieXf33y2gwg14ywgBkc7hpGsfo4zTpFQhtA9hFiVrfgc4ZCMXHnSFDm",
  "key33": "34eqx9ugaoifDuUiZBrx5UgZgMuRLRVBK4TUE4xdhzZSPsMR213MbZwk5p7UK6c79g7S3cjZEfA2ZCKWpALg19Qs",
  "key34": "2ExW2rWn5dvZ1fYyxQBeyYQ9aPUMhajBgTFfpb1ugd7HUu7oki8mESm3QwGr8E2vsrah5ZQhNiae1NZQyjM6hcFF",
  "key35": "3izB8aNS8xyzZ8fn5SY3QedtqUFfdXqxg9Yyp3tHCWAZihAchedZBKJ3NGw3yygVXXSAqKaHZPPMcYx2wAQ1ZhTY",
  "key36": "23Uv88CP3Bb871K1rrh8CQ95rBD8WDSX2GNuRYpesFEM1xWw4vdqsCU1kQrWUWBqvrwxuWSsmhWpmvzkNrhYb8Gx",
  "key37": "5BThLVtzDFFyJvMNHDrm22aecy8GEnf12yrn81MTxFky5hSjDo1CUQufkFSbMvUz3cVxoH6M9A1khSQjjAoX9G4a",
  "key38": "4142Vh2MRQqQJvZ3GuKdkfMNE9eXcXeDyzYgUbvnojTi3VjkiRw5h9Xf179cQv93V3mgihEVhzFUEvFqKPZEZNzv",
  "key39": "46xT7U82XLkgXBfbtVJK7fu2cpf5ouMqcEx7F4aCsEeciFUJ4R9m8PA5fipKDVEpUVZASbcm4rVj94eBjMASoWsP",
  "key40": "3jerjPcUKUe4whknfuifwYCWURx7BcjHb3FXMNjhW1B3UoSBy6tHCL4ZYRgTk5G5zEH9JVT3tgQnuSwyRyoGR7i9",
  "key41": "5UKZJKpCvvHhV34Sr6yDgony6QNhDgP4qTLY2w9E6sQeEYzaK4K3geMLMTA2muxoroLBVuTMLzSfsYjsQyXepswu",
  "key42": "wKS7bhrc31jvjyTooDx6ogL55b1obs4YrDcT2LqtBFWfm4CEFLiyLfdb9BGQW4UyWGg4YjHaCeHCGeG8TgGdrPf",
  "key43": "2kNpCsTR7HT7uGBde5QXiTAjX9uZfkc7j7BVoooAKBMuJSBM17xvGgsUxoD43oGExYV55HVWm2WeenHwdTnyE7mE",
  "key44": "2sqHA5YfopxvtCrhuKemQzmnBEUoMgXJF4d1HPKZ7EDpxSz1vGLG3bmMxGpnysCWNe9ttkRFLZwYo17ShFS7Lb3c"
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
