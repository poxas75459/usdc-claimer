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
    "xgaWWA51GcpBqonWrGKmnBsVbxszz3PWjuAzqG3NWBkh8BiJVqGBbjAvBt8uSM168kcHKs3rEFdvNJTawkFSJGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35gRidV45AwtyW9j1i6RgDnrAxqXTXr9MHFBbDoBQwo5jMfHXHdkRxVoh2c7vyJSYQ2BAveeLYe8e8gEKzoXV8NP",
  "key1": "H3L7zSeGLoFN7DFthz9apQJFryroeiTR8yP4RPFWzsndhKrEzbUXgmwd9P7JcLsm6uaRusdRDAP5FfGufrYk3Ae",
  "key2": "3mxD8MCwGMwp4buFLH3ettK1aK9ksmn4m2HCbNnYijz8KkYcN9CzCdDmCTqeaW7vREGh7CYV4P5cWXJf8JQGjRGR",
  "key3": "2rabfLsTSmscMQ86RvkHEoWVofvto5FMxdQnadc8EmT3SF2Z7R24X7yygnjqs3S3hBHEZFXhQk3JGx9Pr9roWuGy",
  "key4": "3BuzcKhajJpgKNHaGkdEp69wJtdZ17tsEmEMqsCZE9UECiohe2eoL5xrTM3Juo4B7pPnYyAudcJRsR1KgU9xuGKo",
  "key5": "3Lz2KqS8hrEbae1QuvX9SoHTf4R1TzWWhKGaDMR5DZADngSC31guEZ2R2Cm6ankPFkBRTBaxFy1EgZjtLg96tw3d",
  "key6": "2B9D8YDbFdi8zKiPKJD7aUVtpWLvhevgc2k4nQeKXxWb443scjfovEE66gcPCSWB1vwxBrARTL6b2mynbdLQZDtQ",
  "key7": "63n36hQtoWGPjUhQywkTbZYE8TrU9heAZqmkFykghHAJCs45eD5924HD1z9hRD8RaA92ZLGviZ2vYQUhVYrK1sKe",
  "key8": "faJZaYczpGgdadrpa7YrL3PhAnD1DjkWtz8EBSpwgLQtQMinaL4L2hC1H1QJW4BJaGRXLicz3e8ARzaEdZkWBFn",
  "key9": "5okLXq96C5e2rT5FR2n75kgiqkihkZ65Cckxzv4h2vY9s3AMKruXcMv1fmdTbbnD3AmY2VSXiHnrLNejEPuMHfRJ",
  "key10": "Bi7Q9wHFNWcPX1CfEU9NAxJCNZ9x6afj82Rw4ji3qihiDXHNg4MoRZ9AUKYaxK4JVnUe2xrEPPTTzhFNgHdKmX7",
  "key11": "qRPuJADotDhE3xLLxjw5mhf7QiaHpP7NAedwY58UJfrBn4BbQqFVG8LEXRWebiv7Bdx8RYdK4scQb5XXSMys75Q",
  "key12": "34WtUceKqHJsPjH33Aqypqk53TBa8xscWUPZbMFNuqbA19ACG6x6NUMKgUaU8gN5Wq1rroAzfdaLCUdYb3hTBjGb",
  "key13": "5Dk2YsLuWgjLZLh7tUdHwEdH59VzouyQF8eW3XvKS9ppwAPFVK6dpFVKVSZAkjJGB8VLiHtBS8jKcsSB7uAe7qqS",
  "key14": "26jFzsHqZU4qPw1Yf8kEbWpJeuDdFfS2qoFj2xbAUnKNuPcEyQnz2EmN8AMC6ccWtxkaRHSByKEbDEzciRUuSFr8",
  "key15": "2rxP3NcBDU7PrRepyFHfCNARa9WgjeJCabSgV9Wy6kbpbNfWduwpF5hs3LeGVDtCHz2uVYdpNL7gnkZxYmMWNPfi",
  "key16": "5TyW62wzPthzHYnwNBu3ZDfS9QHi7JSwo1fudEmx5itcuVG5PVR4Z21ue4YrtJsAtYVpLPubcTACBsnDpKpwpk61",
  "key17": "4epkSzDaen7q7bRKmtHHTskK4MtmqrBN4n9FJzn9FyDQEdmDej5ytqMogYr25FWE3bRxzCZajHUrdGxmxcs6GZXQ",
  "key18": "3C98tFwGGGrfkNVKZzr61FQm84QxjSUpbRoP8zBURheDqHFXsqGDvEyVnkN2Dd5gYB6HggXkdUbcwKRr96vRHZV2",
  "key19": "5PDktRn4xSq63Cdyzi7P6GNFZVuCJkZc2vC8AowiS4m9ixqqdMZsFAnCzQxGXXUdyQmhHHv7DBtymCcpVcCdeCvB",
  "key20": "JBcJSX89uCZ3ZzTEHfqxhB86d41raREcAVpcqNq9YkcZWFbXXW6aY1421GBbLaao3zqqokqeDa617GG3WHYpb4Z",
  "key21": "3SdyTfjTvztwZiN1Gw8Gjb9uv1nvUVjsbNX8mbgCdjE5wE3MRxqwdL8K4MoJFMa7mFfUJtP7KZ6qydo7MAa3HW3E",
  "key22": "pvsJYHjfvS7XhKMrbPfkWvMFmhp3bkp1c5wC5zBpaoQrYJWAaz69eygDsyfdq9uzUtvWJEAq2CU3VQC9t6qr2sc",
  "key23": "3mSfeY3VhgZKRJWD2i82rzLNiL1oBk3QZmWL7ZgWbMiZWptSZSYtc1UdqpzgjDciMvR4EoPr6irCAnwZTrW3D9JH",
  "key24": "4m8m9cLKyZemAn7DUtLDGFecP3LCX6VGm2YuqW4UsZZyvnMgvJE6evapu1zyLxVSwSLdrYcEAPHXU5ccaHavuRnX",
  "key25": "32moHdshhW5e5VETHAyUarQCx4P1UeuFeAYkLTznDFVoDDXbEqQfskSpcDL2NDeon91cdQgFs6vLs1SeBtq6CDtP",
  "key26": "4FugR4dhfoCof6uMj4rJea8p1jb5KeittwSVCypCiNYC5ss8ujKuqjBwXKybYEkiN5y4bVMbSYzSLDcYgx1PWGrC",
  "key27": "uha9HwGs5ayPVLyKvt2fj12833153ib4rAGPCpPbkznCM25KMJFzXNVnA64NWDXKSKw1w9jiAshpseGZ4G14ner",
  "key28": "3xBHRehAbNznLRouQp35xma8NCDFmNcJ5LiJWdZKrjdZD8hxzTNDKtgT1iXzA3xsug7Td7NPyAf6FC5Qvh4vTQNg",
  "key29": "29SBkQWK7DjeNYFaZQw1HjXYkwoZHMKWKvihVqWKvZMQog3taS3AwBug2wpmxjFTEBZokKYgiiMtH1wP7A6G28u9",
  "key30": "5Rbz5KuK8ryHVNPZh7L2B8rc1nGazrfHHe5km1TftfrPTBgGvGMbnRnhWWTU4tuEhMj5qeT1PxrnMocPMBcwmyww",
  "key31": "xCbT5X6KSniYvg9qLuUo6CoF3YXYZkzoVxywUAPjDKhNDWcykPoMqSrrVBhm955rYhTPBhACgBvBJbJr9NiJJFa",
  "key32": "3v8iRAWfhc4uMgLbU8BuyXsbip7DRf55DytUGCdA7UpjhcqCFy7qfQ6LVhuD3XcZv2owMVmtYnYyVyRpTkMZ5aG",
  "key33": "7j3zSuG3PmbzjUebRNbQm3b8KYQB1PAQzos1s2urWhygRQhDmYdmNjNZSacLbAD31fni63KMm5aNJL682HXB6sX",
  "key34": "4jSesZMkVp99m7btkuC4DmkzDb35SU9jgdE86FfiMWBJWhMhQrdHtLENDS4aiNpvpFu98z7cQmuQUYE9gLAg8iop",
  "key35": "2tt27WnhyaWKrbmbZNp99GzdrBFdXfbXvn4h5cjNwYHiCfZUALEEFxQ3duAindtww4Ebrj1yLADSWwqp1uAihYZ9",
  "key36": "SRNaem5MChBTbj724SaAdyGDoszrmvXvNtwZWEor9raqSgZe35jnSCv2jnbx2TYoQKsb1YQa6CCyZBED7DumRve",
  "key37": "5wSwhmxy72MipaPsaHg3DrfrZ8EwE1Q1FqfDiAgeLS516Tx7ZQfcmQpi6hizX4BcWBYGb3UUjojsMynGn7tDPELn",
  "key38": "4mv4zAfsNojBfp6M1NgmxNfHc2FBRDbbrzo4axnWnzcVyns3L4NdQnpkCSrLCKDLtPZ8S4nr73mEodUSws1Zwyix",
  "key39": "26GzBC1N1wKGTmF29GBJDQMXnexp9pui6UZrK1TzJw2iAS7fVYqtsz2LoieYteBggLanGzZQfYQeZRKkRLGDPWey",
  "key40": "24Svn9GLVhHq6uJg8MjPBLwZsRQenyrPUcjpMUyksMB8hMGaynLqXyvTUGh2RGc7m2pJmrSA9oSNRvcMBJSJLkBH",
  "key41": "356HtK5tnAwf88ntQbiSmbHQxB5X1psLoG6YE1RKxPS6ywXPomhhPknifKw5X2F7khbyXtc5FH5tn35ruAkCwX4Z",
  "key42": "5bw8QGJWMafZtUpLPYG85mGV9rEWoyZBCC6PUXwDMiL93uwiciPLLZZiQBi1AkP7CVdNwXTFgfRcD47cxj4bCTZs",
  "key43": "3XGKiLzvc3mFw3JXN5GwqjEu1qcLCUQbf79GLkhYkDzzMZbBMT6k5nDHrSYhByhz5SSHk7Q6xQ8RUXK7ZdN3fF4k",
  "key44": "JfU3BhPNQGH5dQvoRHVsFakjaQvQm4i3RiVQfsNhqF2Rgwb4DF6WEwohHUeRymvgozYE1uvgQ926Vujr2z31tet",
  "key45": "4Qt6D4SMBvNrXd9u9PMYmS1QagTwCrAwkhvTQwjvbMAbY1i6t4cT6CYL6ZAr7D99ZCVg1M4mtLx9WJPQixfPLpxY"
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
