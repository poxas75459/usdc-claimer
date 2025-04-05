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
    "5piyfV4sSuo7CfqsuGVtAJR9JD7aRvVv8HH7GTVsVJDp2hin7rFM9JMRUmTQtbQz3JmBkt4WpqswCuv6MRfZGWVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKc1TYhEQRXK73p26ML1FSkQYGCGuroTqneqLVX8odUEianpWKp34sFh1fsAHscTh2dKSgH579pxsz39zc9TQMd",
  "key1": "49xqvby9E2FKVK6EoosM4ZgBSFQtw97UpNA15ZVSUFh7hyePj8T1crPqbeTahG6ofvyhEz85WFSzLdpNwQisYkq1",
  "key2": "3L9DvQHaonwSVou2Qz5wThYV71fbfMNaN5ZUfZD9Za23VNzzJSMYWQhGP1wTwwLvL8w8Xs9FKNGhzrjYLVrUuAFP",
  "key3": "4DBtdptUjyK1NrURyPmoQaf2cFFbxNprziiFJddpm3AhBA66qMP9f6jRY1bYsh3AH4WtXGALkuvJVJVm73iPqT1o",
  "key4": "5Fwag45G8MmYb6TEdUUggpfuekkCWPQ9TwKc8YhLh8xufh9NvXZgAC6w9LGD7oEYm2raZWbusivo1TvwfmrUGSU6",
  "key5": "35ARbXyRspbQnWiBgw4oeJy6QZomkCeQZe7e5eGpDa81L1nBGmbMBgFeQhUfTFBmcD6AgmhEGycaejCe7JBFpsor",
  "key6": "4SHEXa5heLEFnBcTNAPtsLvQyqVnoKWQf2EY7MnrdYbm3SZmAsLi4Eapbb46n8AwaJUPKKy1CmnjGLd1dHTCtn2b",
  "key7": "41apnWAco5WQoPnGs2muiBWyLjQGk2cYC2UXFxFwzF8hoA3QVqGyLWn7SGv5urxEpik94EYrnVvT2xTyqUrfG7tZ",
  "key8": "3zDRmPZrGW4oYFwQ4qcKayZXt12iwGm9csuS92WXFmhtH44qm8xb9yDKRq8ggnZDzeaTLmqR7SebWqoJuVLx1XJi",
  "key9": "67DgdSKjXiz4CdNga5Uxv2TLSxtoqt8nHn7Qq1L1uLiQma8iSq4vX5QJ17RdoJbhqypcySdRtPk9BN8EX5xSh7Jb",
  "key10": "3SJsHkC3codtGnJhPD47MrtwfRsr3SQt4SQ19wNFa7fNco3jopoq96n4TbrvfMGqnMC8Xuywc55EYQivcG4d4ndZ",
  "key11": "3T7HVSxTmCCDLTAqm92dcNeyYqochs7pcpCqzXTbtFEKEmeS1e5rqjhV2QaBMPpm8zZLZeVRs3iE5JJQDL72TQrw",
  "key12": "23NLxjHoQsDF2GaccbF1yMrbXDS7UKYacywRPFcLNESwfS86JtCyHFdca7mR2TJuGRTTXmaNaHdBxMapXroqgV1Y",
  "key13": "2gZ4Qn5fZbxYWy8qGWETrinmrpsUjwp4BDkff6Kv7miH1gUWEFrKFTrtghxRUi13cXJiyEvvUwjroGQxF5c93Dmm",
  "key14": "4f2QGgQRWq1t4K3CaiRkJoQD4tfDfgLZvEx4kZnqUVAwoT4Uhc93rpRKTY3QL2sL57nTdrLHUbw1Txx9XNrBRL8y",
  "key15": "5vmgNtJbTAgkLELHstXZrGkd7baMZKK5PeJZeiFeXBmxZRgT81sqLj27TcmvdiG1bEacaLqsR15YtdqKWAGcUexz",
  "key16": "3ToZ7Awu2yTJaYWTAxG88EZRUqCTc1Rr8iwUKNbAqd9zw5Aw8kHtKyyDrZcJBM8FNj8SDV8kY3NJZkYiziwmqXx5",
  "key17": "5BcBoEsxZfqgpQwnTDBJcneEC9yQUhRjBjW8HDpD5LvAmLH6V3LUjk3Uww73sXnHzwaWTMtCjpV96FgegkoKg757",
  "key18": "2ubxFAufMzbN5woMovLMXLB93jTn2GeDhUN6ZKPVxtrMDBDVWx2cg5byv5ThQ3X5zVF1LfaDo6pJ8f2fv1mNjEfi",
  "key19": "5CjJH9WkEkEBEXb3p99Nt9unWcWXZ7GhyV1MVC6y7fHuYfkRipUNfxPdxDNtz5AwHGHLBVW9SDpqCSbk8NF7fEoY",
  "key20": "qDyZCCvmhKnE6N3aQDhmVJUqNzBgi1AHeo2ptFzB3n4qGav66Fh1gV4V3aVzxzSkFc2jSJPs4XhJ2MdLndaCXMQ",
  "key21": "41nYN2qs8oPBDfVfk1dfKaexgUvVPQawfgMovuuRUsAoWEiyziWwZBcLNEFPRyzpfcBt8WPP3ovAZfefweyMR5rW",
  "key22": "5BRnfSp8vhfdztp2aeEJF2f5U7wYNLfsjGKmuqDK1ygNuNHRLz6oTG28zmaYgq2qxa1UrLBuJErT9vZiLEgCbXwe",
  "key23": "44EXG7y5D9Cz1Ne84rBk9Z1vrSteB2isxykQidUsPXGXqqbHGbDJpdaCZGBcuYZXbQZ7xPMHNeKDTXjvuhbxFazW",
  "key24": "4LKCQ52q1U8nKkA31Zu21K1yVhjCovjGTUs45gXZQTVppoKeckAoNDxXSgQ7vbKaAxq9Gbv5NYvtQJBGvxFFv8uY",
  "key25": "5K4hCgwtymRyZ8cVo2yjtFXjtpyaBKQqMQUnS7E8E8qKkFz3oSuwQTJYRgNePKsR8YehDhX1bp3E4QgxawGGGxtn",
  "key26": "kvpfWnwiVz95niBhXzSieBvBKdRSRLrxk6bcwMpiGLRRnK59vB775HTKjRnvBKkW3xHCNd7vQ3VFdJa1NnfWDD2",
  "key27": "oZD42LcWagpbzhj2H2h2xURQFF1W1tdSK9yYqxvyVdVWAsTF5GQLwwT1FTH4yDVe5s9CBJv2qKLL7fWAwAioC44",
  "key28": "3CMVmxB8geWLRVWnAaNT4AyMaDdXi9tKCC13xvnrPcXCMkYvNhhHUgXD2ZWHHFdUUXdzgei5kbzzkZufB2rXZfk9",
  "key29": "5c1kgSFiRFHDr5ovMGuFs8RjX4CQPQ9xajJJYSw8RxF2oikq3UhaBTJ1rMxME2kDjtCWNSovandNwgc8KiyzBiLU",
  "key30": "55kxQQGeRxLMtj4CysZsYxXc8cZunFCWnQprSvTYoToXJicQng9ApEva6T9BQcycdroXZR4oaDo9uDdD4F6LyBXZ",
  "key31": "2fVCHm7t5g7W6mwqcAQP6YLQtatLZ8mwxmJvXsRkAMndXFhExTTW1gcdx99Mpem4wm7M28vE4DGErDyvwut4YEUT",
  "key32": "3KiQueVnTsZpDeHZxqnJHnJe9aXH3v79JkxdTfDbb8wY3taR7pdas7CyyqZUXtRjJzct2fWbXFwL3Hg3QMhL5ULf",
  "key33": "4EKsCXwBB22YZbZUQ38CnNVa5rYqJ8fEf9miL9jDHv48Cw6YsNCGjhyagjEvrDtEHXnTs2m7dUwVZfTQCiBW6qmJ",
  "key34": "5DnJFfZmRdDgFkz8oFdZRortCX8nDfaNpKK8LznT44YPMFxEkxADmgqyxyDxxYc2PiuN1hgfLRJGZZb3fX2GYUfe",
  "key35": "Pdf5xrPWWFKGDD5jjy8F8SAC3mmk3ESdhJwm1nzVCiA9deBwo1UngDRNLauNbxac2Znq65pHa7oJAxKKnPtUeMg",
  "key36": "44g4erHrCBN8pkyCG7xPi58zVzUkZpEFirgQEnH5dkDYBuiWR8ML3s75E2TvmkbjsBZUD3wTCy41BH64DU9LXZWc",
  "key37": "3PgyTxn9HTnUnERzrEvZjTKgx2eEof9zcKQSdrzt3qe8gomMD7QZExzBcbG8YGt5KMfqm3ftkQsY72CJi5kvEFut",
  "key38": "5jiRohGrkhMHbMzcGfz8fxCy1qwcLRRKVDgwViGkVHjtZ7Cw3CittS2fAqdcPC7Ex6AtZtpiNDzsPaacWUegVMBJ",
  "key39": "5yiKNkLjEHeicqEGAYZsJDCMQfhb7LqfuzNr1BGw7dBGCbm4Bmsd6mx8mDc4it9ybMycUdweJjC3gydvceEUat1u",
  "key40": "2NaUXkoqjw8U2GeuCfXtygvSy6PMMHBLLuMYLjSYtfvisMrXGvMAQiTzY1ULbgCu2XTyvVF8fGhYmaVw8X8ssDco",
  "key41": "XnN51ywtVgFnq1mKn2w5mmcy8Bx39kq2Kzhz31GbfkWZMKcoGvtRYJR5VBbMz7qiZdTe45LzQX1B9dwMG43PXa4",
  "key42": "5MKRTd3XAwAqkoeMHhxD2xFZwyeYYdkcvkQNZwPDycnNeobKK2spwiZZ8y9abaTXkF1qUYiGCraVBf5DGRucx8XE",
  "key43": "2Pqx8s1nNsKENxQNEA2GQN2XxbnihUqpqxC7VqmBzRKRcNdTwbCb8fYAFFgPzqUneTEnsB6kmBz6ZH73gBG4ndKm",
  "key44": "3stgY3GPcdnXpqxfpTETV7d3UoBbMrGhDvLoV3mrkLz5vhxp1H27R7Y1ZUc6G5pq51UCxjxr7ttmofdYYWJFsLoX",
  "key45": "3nHVbfMoat4yAcK4VyxZCjTrBMjyyMKtML4CxYeUSUt9YUY6mQpomZFd1rbQpydCrofstueh8j1FjGCk298NTaQg",
  "key46": "5AvQ15cg9L5xhiT4vPhh9ToAzR2qha4WmM7DhSap5oCS1oMtmoZ7NtwJdAogRskppX5UaasA5iRxzdHUf6xF6vmR",
  "key47": "7BFUtQySsYkTJkwt9Mq79wrkmwHRKTPW1t1YR5M9iKFnACKGr8BNrHPexvS2xnofnjeqK9xYNyPfgqJexnmfjCt"
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
