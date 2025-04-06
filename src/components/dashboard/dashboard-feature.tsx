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
    "3Y4uAG37j474cwNcJuZeoMHDZEA5GXWQ97Ezd76Gc9onZTf8GBovmn4zrnpuodUxPWfG43MBDs2NMBw8DfpyptHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64BtfgLvnE8x6WXkpArgF945utvD4dJakGZM6LQYAe5ym2Va3tp5AcW8WJx1hd5AiuNjBAwQxiFMQU3XAtjCwh2Y",
  "key1": "38S9HuUGYtK3gLrVGaXepGg32i7UWtFWLun7SC7TsTj3FTP1ByDD47aPgLstEjZ4LaKthuGDCV11zTDYsrgt1mLR",
  "key2": "27MssV9ckZzFDGQ9Efyx9dDXnPYrxD6fyVSvqcdSu2PLD3RAg4t3hN6bP4xGtm1XshQnqBit1c6XsmJPwHsAaJ9C",
  "key3": "B9nnJc3yFPZaoBDFsPvXrFjQT39kzVpqsrri9MmEhxKpPDq77mt64gwQDL8DhQNSJyhGe4j4c5xZtwohbViMjZm",
  "key4": "3RM5QpaSHoDJwuUpoDvsD98srYY7W6W8S4EG4kTQC8agjTynCCJTMVaAou4vjPTgevJ1dCaY1qN3rQddZ8nBa3C1",
  "key5": "2k3aFGSNmMw1RvuPWRQqMmByihkKuzQdH2yaHmiAjVwB2kKQp8Vkj5as9C9k6YKaBUzLdeeZpuZMoMrzBb9sCBCd",
  "key6": "3VU9NVtByUcmpAFagy5StMaSVAAaWr34kV2sEeKrXwjrt4ftukso5xyViJmGLFffXw7DiJ7MKjTXYon1weqks5S4",
  "key7": "5e4GiwWfRUNiS1Bvhsi22DRUhKgWwRMcR5RJfFv1R8oQAWz7VJ7mGxLoggqrFkTP439WUHmqcjKbVrWhWYXCBr7u",
  "key8": "hoz4iktpnZ258jUv1mKLFgCMovdcx6jzN4PSDw5T25U27vxjyPcbLzZbDGGPS62vXf2JqJApvJ5Z5ZnrrU8YAh8",
  "key9": "5NtYuM7ATjDsAe79aWrX5VJG9jba2giLCvtmiksbpkKiwzD92968eg7xcHPxFujQL1HwbPakWfNdkMC617PRL13y",
  "key10": "45Db5udLgG4ZG7haepgsmA5LumMMkY62xbxb1bMfXoKnMJLULxSNaWBiBweoMA4KH9adKpzM54myqjrbbmepjbed",
  "key11": "34NBCiM2Gyn4yPR6fJrGJ5nqKnLG5MpcFmFuTSbmFgqAn4uit9en4URV7UpQdvnF5opr1adCQCpczixBn2q7YRUt",
  "key12": "2MHDeTfoFQEsTugB4kPUddUU2qzSZyUKo1XHhNyBnVy3UdcDZ7WsX8wtXA4LqfXeMEbwE8dRoVP6bo3v5sGboWDy",
  "key13": "wTKb6s3xg2KeSa8Mh13oCxhR1nNVgE1xb6wtrjg5GuNWqp5yqV9r5788M9AQKmEvvpVmhoXDUkAghXZzqGZSpnV",
  "key14": "5ayYyajFTbf7XPt1K4Cw9dR5kRtafM2QDjMHnYnmKwm1UmCKqv5EyEr3YDMQJfjmKdYFtThmasBNxr5EM3NfEPWK",
  "key15": "2gmdf3WctJb45zdfKmuKuLBCesP4PNDuGC8we6FKd1ULA29PsS1Pqr2WPVPCmH2UK145e5y7DTTpfBqgwxg8B3Yj",
  "key16": "3rnynyzRFmVrgBbEobMm14bNts61aHk1YviKmTWKszfwg17tJFnKXpZLWqhAP7WF1yFDGcBhzhZV67p5gYm2yhrG",
  "key17": "7z9sfercB6jb77SP4iRbBzW7n16wLARg7FNdbvQfQRzoc5zcHLmXVJrXUAML3YKkVDwiY5CXRuaXModAg4jyGc7",
  "key18": "5qzgpwzCcX3EqN9DkQBYR7pG8BDjJdfPq218B6ofNnZAfRd25bj41F5F2MZ3GTepyLgFS1E9MWqskMdW47hT41Wi",
  "key19": "5EsUgXpC3Qs1zx6ym3u65MLLu8DPNDEaY2zHfMHrHgJLRHZ4mdwAgwRpNZw8XinguhJdAfyuDFs8RiAuiuqFeJHb",
  "key20": "2WASerN8BbT3izCXGgt8JvXx8QTTrkB2kvJbGMZtXew6Rrgs9QwxNCHAagLUZy5EXgc4E5iPBJhvQW4cn7q1fySx",
  "key21": "5AWngzUR1LyjvCWaF2o6BYxk55iWDFDgTpgz2B4yM7Ytf74617Me3mADoLbvoWYoSuvL3SiG4PM9VqHmz64QNuG7",
  "key22": "4UER4BCa8hnYXC7k9NevGEs52DBWCtxfYsyrJ7KbnUGRBvWohTLyEQWbnpT8doiNXmEZeed8SkB4wH7aWGei9ZyX",
  "key23": "23fX4WENDjg37MMSr7QbKkY83yhNWZL9bsZfoE4ZRdznB53f7tfJbU2Ezg8vkaQ7o5P6fE3MQqNvNYcsR1F95us5",
  "key24": "2JywzLZTm7y6dqZ8bzPZgbTTtPJvrTjZRFiwnJSP785d52SSdPn3o89UTQpGrw91hFxD2UxqmVLBa9K18zWuu3Kd",
  "key25": "GKzpXSA2HsooKbXEDS2rWTVXGW5BbCtKkTQBMkqcAxxpbCSNkAJeMzAzR9M5NU98oZVX2YHUxqhpeR6WkjGqb6v",
  "key26": "3owkZLiszNMZ4KrY5B69qxzWHHdyc9eMqsoN19grBwEw6siHLtphZ3E54GFb5VyRSSztzJFarm5oJkboeRuGimLV",
  "key27": "2qB41Qd19Nzb13kv2WK34qebedrs2HANpqiWxJibZVUmKPgo8P9s1Wa2X8bVxcAHsddQD1rFbUNKDmTikPDo6F6j",
  "key28": "3wNXuKSArqf1aRHqVsEQsWCV4XV7LqFAfD6jZQNpHygMgaT8L7sXjDcU6aB8bZWhB6tXogznkSymRGLMUeGDzeNw",
  "key29": "3RDj4tcxQhMBUVkVh78arNEizHeCBxfHCjgoUJG1EmUoaZCSdfg1T9MtdF9sZQV77pCwctqTufnJwUNDH8DvdjTq",
  "key30": "56wQxqxBEbfbJweAGM1a4xdZQjpeMZKixYsf8WW4FHPF3chLMZWy9m9fYDogeVr1du2rcLyuhzs5iF5j4duAbqAU",
  "key31": "32fW4n2pBYuj2WP6ik9DyHwU2rnUYVyMFj8nkppQ72FdzUjENtUhsaruTEdZNt5631gmpfiwb9V7sDwZgCyBnXyu",
  "key32": "2yaC2FEudTzwfsqqkrH12W3QgaE46C6QHEJYxKzdsyURyeFfG669h2ibrRwK24p2tsMZuHpE1Db78Q1Ej3QFepZC",
  "key33": "3y8AEUooMKoyDXe6CmipkgUNCMsoqiz3LkJzMb5WMQDrzX4UH81wBetLuhQvkQjN8hv5CG4V6QWJEXeaUGqp3NBw",
  "key34": "2uCCRmvTH8R2c3DFCjt4bZHrcm8TjxYPCAsmA4SqoxLBHRY3h3KKZaRxrwWxZQ6orh7pyYnBEfxovLU4MPPj8egp",
  "key35": "3HKSE3QxHaB3wSxWUfbH3bj5SjKtkUR7jxXfPY4LxooVZ7uQQvEBMUE6TayCCYBN6CkjdGPfAZ9iMuCUeXCbu9Ph",
  "key36": "4pAFJmAKx2JQpkA1mzryfeVV2J1bRTnhEFpXZpm4ZENjk3UtcNSDNtVmJXiFkTKSXK8KLqagjx74ekg5cZjhWaQ3",
  "key37": "3BhRXmTb2DT1hQHAKjS4E2XG81ja5qP3x2Qfpg1Y1FJphGKLce4gQ24UY8uiZydA33qYrE5HuWYMsZd3PW81buDp",
  "key38": "2wKk9B5C3wvUC1X7cLiMNUAScvcFdMrU6RUrsMcm1dpor7Yvz7ULZXaAkbtpEvhr6RVkLTDgtjtPF3BRPuwXkcyz",
  "key39": "4C3QP7GRJAbteQztgDoRejWjAe7DL55T28BmfJd9yYM662tr9dDms5LhVsPED5njC18SUoTvhVH3D1jr39q2TtCf",
  "key40": "2K9pLNhGuggbiECMzxhcUmJfDnhthNbt5k6UpVutLC925tB2XNHeytkZQqFS7U6EuLkPq3X2fm5R5tDgrrs4fb4B",
  "key41": "3RQAjmHofP8zsoBmGQ8jQaKd3gzHsrMwSRi7REmxKKZAcm4YURxTwwaQJr45L8mkoQPP8nWxEkorK3QZFXQusfz5",
  "key42": "3Gt3MKbdbJgUzQYhfiJEAi1jbD9rQSyxcw6fP6QUzsuR2Hb8dp6KBHFUUPhHoBoqpaFvVm7v7t4U1vXUFudXgDjQ"
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
