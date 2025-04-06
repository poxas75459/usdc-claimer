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
    "3Q8Ews9rtfQghXdWAwmfiM14hVmdUDSaAEQkVuxffX8YBtV8pqzF2ztRAa9Dx1tiJNXb5GRcTYo9ko9Lng4CdAaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q1tUiHB7ZAQCYpEUgtg1NMmZoBPBnRKzDpCtUeCkc63WovLj4U7337TGGCYp6WFPrUyQfPVE5oNBTkP5qX1V4YG",
  "key1": "5BtkHwvd9w6RmVCxgAUk1VDKx9P7bcYKTYX7XgfEYXH2BB2isMPuKzuJh8VqCp5g2TV5HjYwPmyTFMHpTwkJQzbn",
  "key2": "MVuoGg8UcQnRLr4pD53wVr4CoYHTUFqjayrSpU3bxz5EpufB9oUmFJ4oBZ6FRsXeA24zAutYhEHPeEUrKhrPNFp",
  "key3": "4hbEz2pbqigKXq3MvQNdnuRxK5vnMnPLwMHZvntntA4CYiyB5FxgCTeiRvge2LgmPkKpKdqSt32yHACRWDBVpWGx",
  "key4": "3NxT2o8tgxPCmVwSxexBA6f5at878M5mKTkVLkFTrCJqus6xNdwkvx9Vv93dNRKcMLYBsqXht4HgoHU7egAr5qrm",
  "key5": "5oJQcr9pEezZpuDMYCCnmF4n41JEx67k7UGRr7CH8WFgYw2ucvhUKjymhSKTezSCPVFgYRkwhKKmqroehp5AhypH",
  "key6": "2ibQw4CVrMqwxTdRYG7UK7BSc6tXxAw5KpQ5kDcjzkVtFFEiRei1umFMqvGnvbCLEo7qCUFAuyWmpwL5jahZYZHG",
  "key7": "ni62X7jZ6vfxJU5W3w1JWDumjcxpA3fsWGt8t1rzpKoW3xLrACPCAAPD94Pyps6tdQ6GdxSuw7NnmKgYUFH7H9W",
  "key8": "Ppnaja88i1RnkfzUTKSuS5F5peqbMyeKy8FNzivvCRm3y7VgbE531pYkva8sqz6PBcRjMBuAVbjg2WN6d5KcRZE",
  "key9": "ED6jjZ2ffx3aMWXCXrCCyeCkKLvWwuuPjA3bzJ7tg6FoSnEDumTNswWff6uZLk9j4sfTki31LCer3VePx4Y6sHt",
  "key10": "3jC2WDqUP4PyuwZ79PaZ7nNrPJw27f4rSLvdfzTtEkcbyjQfk7P79myBLvvxF9xsXwyZ2eBaMPdcjxKcPTcFpJ2v",
  "key11": "4PEni4bcZ7Sbo62dJfC1fW338DRGwG3aLh3tGwNi2ZRY4qqveyFDfeb1kXXaj4GQM1rm4Z22w3BmtMER7M5U1akA",
  "key12": "5zMp2s5RbQYL6nR9gdTmc6PWfY7GzTMtPfrEnBKJKG79XBLKhBDHebCqy8fRQZERBoB5utW5djd2aV9WfhiW7ExT",
  "key13": "5y9riQ6G3cJPG7yUBk37jqfPXdqSyFJFSQxHgGvBBKsBRKiq7LokCeJe7CSSftL3BjUkPUBoZv1ds4pKRMN16Fsd",
  "key14": "24TWv6M5qLb4HRYiaHjwytnzuj6K4NBekza9pgyoYNxwezJdxrARvGJw4P29Jw7mk9wpztZ3uFkjPxc14zsYQi3C",
  "key15": "CgBn7ww2YZcgau6HyKknDQExbqq1cTFtQWkLe6juSsXXYjCPFstA64YHscfSXUvubeYp5SBvkA35Y1uKHDVhh4i",
  "key16": "63gwtwggSEfLZ5CbtaFuwi1m7NK9FYVpXhZXQnzNdyE3gYRFo3MUmiE9YLetnqXqr45ya6yjHSX3JvQMwF6hnerE",
  "key17": "2Ad91YrMN7QwhzmaTGsze9Cx5W29zu4ztec1NrKfQbAvGtQKcoj1h4A4qJLc2oMo2XkSfKW1prkWgd3qKv1QUJod",
  "key18": "54iZX9Y9QzcTL5xmKbxDbtdeTp2WEoyKTe76ZXgY6YyjDjJK5QPxuqiyb9AaWFypckWTLW34RPRPA647jGJaD2Te",
  "key19": "4XdZQAgLijuZnR7ZBAnU4WPRUXjEPnaqtLijPwmFWnvmNdhES9s9AjyPy75xYHGVEWvzZDvdusZnGLWWaFjcpgP6",
  "key20": "5srnb23NqiWfJ29wJPcYkt6D2LpAny82Fxj5UKBF8jY8ZZnh54vbKyiVZrU486mrcfP3Tfs1irDUgsuztefKDD8q",
  "key21": "5TcSVGf4Ju2jMXyBFU1B1iqemfTYELmFvt2pJjkuw1rBQvajzX3x6qwGk6EGBTnjYcHBhZFmia7pYwgGt7wNQ99x",
  "key22": "26w4zSGR2VFdGDd2NgkUogNFFCzz8iqCaDG4dAT64TbCpBLveMRkTp9wdR3godzKoaS2GZxoJQbxutfs7R9iqiSd",
  "key23": "3h1z1EzdHRjn6JrsNPYFSiAAiBkWA1KjWbs2Y96mXhJUdGWRRbinH6LGvejaJTEEZLKLyvUspTodk8T7Q9V9hJJE",
  "key24": "2uppURdf91M3Ammmixag3kTr6aBqy63fFfYNo3cFf84zYXT598sPMqE1Ft7VKXaHkcEhcQV7VE15WXusjc8Wz2zM",
  "key25": "58XEocV9k8HcxKdR8NXcXv5LAX25gTUaW7pPVjwUFobEeMp5yXwXJFGeGa8QswPhhoSqH1E5xfJu2FhP9J9qnC36",
  "key26": "5KuxKVjiJiuZJtvyY7CXYim67PKDZauveTfPP5iuXeA4vxW2aG68QKYCCFzVMfP2sLjn1BxN6rFkpHiG8k21pP4p",
  "key27": "3ojNtPUJj1Dk8fUY6ckUsZ2YKbu1e1G52sT1mWJiobMbWk3XcKWG7Ffjwev49ENzeHa8GKa3qwyYmTGAaY7FU2at",
  "key28": "2fDfE3GNEKdzM56mmd6ZSfXb86FNUkMzbePh1W5wxWYUmPv9xHrh1FNvxsDTSjJ23szAqpafkbbZGSUwucYxUucw",
  "key29": "b3H4Pe6bVBB4qTEBnLfVVShzyQfeMYiGBMeiHYGvbNbuzqVE4tmdud9Zkcoxwsmd9uWkw2CmRc12L7BhFG3WwkK",
  "key30": "3dkXoLgAsqmnaP5RqjbKMx7zfNxMrqch9pawp7zZVKPABh1E4VtFETrdvLsv4fEiZWhUdhME36ssAQTYawKs3jHt",
  "key31": "3mxuBKVc8CXkMebjuZKT4cjHwxDV4h81pLmM2sUzL8bj5sGjfXBwXZrABSSqFbEagHPWbLqdWeejPVbwmbAjs7cY",
  "key32": "5KTnDA7a68qV1EcKyQ43fPfKN58k6B79ETRTrKfse8uoNxLS85jY4mSrhS7dMfGwAWWrpr7QtXMUGhGZYyrggn7s",
  "key33": "Gqg9XsYUjwYUiZMv9hGp55XvcGrj1KKAuLoMZcJhviHGgsZKA2YmvVPpzkXqfwhzWnJU3xPpdoh8zPaATjiYhwz",
  "key34": "47JwqRo5Ta4ALwQU7ewtHgzimReb1dMn8gYpR9usGCUPCS9kwgruC7qkFt2H3PDY1NTYnr4imPCaGpawGEjiReuG",
  "key35": "5LM7RQ5ghK3nidRdZ2z5f6LJgmMT9pgXBdYJo18S5B46NqZSJUBy7n2zGwPSV8RdG9DoqP11TfNP4UjK5gHzALze",
  "key36": "2Rn9ymWitf4LKiBFMtD9UzQ6vf5StNjL5bBvJ9vnNuywW3rximuzezDLKsKswirGEMJFC5JV8xHb7JWHJ84kaMBT",
  "key37": "24xsYERixNmzErreKVwfumoFmxZW9AQWFodESyR7eR15pwGHoeb7rzZpbPirvxAMEj2umqVazCxZbXCgPMs2RhZf",
  "key38": "2vHr52dRLSvwNUB1BCV6KfjrdqvaYgFfbAFTQG6BDeR7bqsaPmuFtQHV7qydBr4SPfmpZ3BqaoPXbamQHmXNNBNU",
  "key39": "V7iTXZhFw6A7ZBVbUy9izMYdBsKpVKLB8RREieVyGu7yg5nXXtVQht9qRa3mtsKjwUjsxiZPdDLK9NjvbJWfTiW",
  "key40": "3KaiJxM58Qhb6ik8o3iN9RfH2gbaxtdtT9ixrnyF3DS5h2FLRTWyAafq7FTWtqeorgRDAJsRUNc3vMLAzKJVoDLX",
  "key41": "3SWzwocbUv2e1XNcnHW1qJHkqUP3UGFGqMmxVvd1sPWyEhywBxT2ewZph7xQw9Yzm7xjuWUswRY1zvSWxgdCr3UP",
  "key42": "5gb6g5BKrN6kDoBskDdg4kdhTREamd77CEJtrGyCRH16jd81gwSRipgKEmaimMq7jwqWmW2z51mofkT8kWF2smeS",
  "key43": "2kvWm9RrxuNowUvhTZc9fnfJaxYvKqjpTrQurNrC34J8Bp5scDFD18kZZyk1qfpdTyMrVHLWEDgP6UeKxiWWPYg1",
  "key44": "e2MixtEfiADidY5BBgEHxzeUY4ykDGQX4VWwukPUR3gFLANWU2AJJ5F8rsbZjAB9Hfo3qjpii3gDakJUccyiGJZ",
  "key45": "csLkQ8arU9JW35KbeZKFu5kn1bagXAQggtrS7CMsDCVfmf4usNo7uoWX7Kp7R9zVnUcYronb9QFszxrtkNcKDLC",
  "key46": "5jbZbUsJ6N5yjEt8z2Ly5StuXoRg6gC91ScVFSYkzh7e3WBigKr76jUNqMptm4bQwjZmMAL3qa8MJP13w4wvdDxR",
  "key47": "gvqhemQS5zBPCac7nK3KLmdTjkPdHUMCLtzFvVdiKBdfpRTmgoLrf4xticVNMcWzyKnsEyjgRXeRkJF3NhFmCE4"
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
