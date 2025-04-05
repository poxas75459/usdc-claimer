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
    "5CUcR9oyM7aiyfEToELmLks9j2vHsZ1QeJyzC1BKM9o64NJTYuVzSUfNxNypWAYaFv4VahzLxBqfDpPeTADAgLjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uCCAhLy8pVkv3hXprpwPcghcF8cEtBeJYfruaSn8gNHcVCD7Jw5SUv4sJq7BedgeTsxkYutg4bEzGc7BJpU8LKe",
  "key1": "4REMwbJm66oUxLPBzUXerL3KpVr5X9JrCJrQ9RCX7PGreALYsnxZQc1QGAJm6yituvbHEqzc4bJiAFcmPEtrrt8S",
  "key2": "3Bt5pL451o11tsLAkkmNzqAq9tn7gU8FsAcHpc9pCGrU18veUCecMWVXReDXpQ4PQo4iA2aRahENyP7rFrGcGCZu",
  "key3": "rKCbtM3TxGbsj42u6d8BFTmCmJ6keUCjf2n4F7iLc26DMkuRTGjGuNE9gAw9zM9CbL5UVyETuaLhpKVbEyjCekB",
  "key4": "3oP7JxiwyS5f2Ajih8yifbDbcGvZ8VBa5y7cB7Aoh9qR4HCr8M3PUPUGynB5Tf7xmYoc7X5g1pYwRxsF532D98Fa",
  "key5": "79P3PfeBB3EzF8tjBwca11vqQZo1eLRe43Az3RzJxDE31rpmPLnsvf9pQziuVAeyUnv1cAxs2enuzJVbP9Kkxnd",
  "key6": "mZj51yGmLqGzuyJhfdAXbaDZprtyAJ7kn56xKrt5eYWudFxEPMwKFdrxLXGpWSsXHMZ2ZrZJ9hWEJ1xpxFxBybP",
  "key7": "3jK23mkM3GXHSD4QpoaSaZ8GMMWfp54BAWe74S2ycVR15T1vHTUP78y66SQqzratpTnrqboCvnb6rGXqtDoYmxjg",
  "key8": "5MQzVvMsdxtXouJsoeHpN8exWGGAvv5frUfiWznfCyXWqdQturoAzo5Bwp61EAU3VA4syxyv79YaTRaNZu4qp2rw",
  "key9": "QjMQtQX2tZgsJ1hFwNvbcCzGssUqdUQZhfvKnkfWv1Ed5rKytMwZiqLtHttzoLwzqp5Njq1NM1yig4gmTNUmTs8",
  "key10": "3MoQBTLtx2AMhKzLTnBcWLPWPnDvW1nHW1ek6MTG4BXwGzgx8fSCMA8rMt63Xxy6s71o2svaEBdxRtG6TADZJsZ4",
  "key11": "b5nf8DbVAuRJxQcv7GTNdbiYgvVJGW96Xh4Xd8YoVnW6t98HfvsgvjLrPR5SNqz8zMAZNXvP4sib1pXPefpy614",
  "key12": "4u7pTH7yR7LfRUFkMsVGjPujyuBvfdr1pduFzGaKaMpXFJVX8FBPRPejQTm86VT3tB44KUyon3Xpe1xkf8GisWpQ",
  "key13": "32GZ77gSbRBqsHxZivs1dUMhCMif3RuRoFUXKeRbC3wiZPvNcQ47YvC2NMv4VVAfjcjJ55CfemTDb6oFX7AmuGCs",
  "key14": "gCgpKquqadtoknUbRVJkGRkxducmGQzr6AAfb71ZcmmgjpSbu6wE9UN8fFsV7ixMr9dSV4Y2LsYpHL6FA5Wu2g4",
  "key15": "4jrn6X2mSjmsxF13t3TP4ayc55ixSpJ2c6zmjNg1DESXzaip9tHJEPKAJgEYoYDwX5ZUReM7JczMSETvU2VSxt1E",
  "key16": "3AAcAPMsrffbQnArDaHnkhjocqP1jzzu22HJ7xsFm3ZJzYfXfFcELncfNug9McnUdAiM1JjD3eCp3hoT31VKUf2u",
  "key17": "4VFgbHGFFKbgFWLeUy7NShwHJjSfwsM6y4vWChiAuF1hFiYYbAXFUfpp7PiHKG4zhLdqugsyEALUw6FJXugcQkto",
  "key18": "4ByYJT2rbFpoFaFSgNZiEQXVH9DGLae7L671ztx2txtDFJY9fZQcem8JQ6rUdSJQdcYVsziUxJRwiKgSo7vhEfNb",
  "key19": "31eAHfUbs8AsRjkzi1uZy3tQTa8EvZegdYxLUng3svg1VmyKx6os3SWrw7DdfurGRKXbTxRcMKDHz3P3UDqatztn",
  "key20": "536h4SdCdaKdPdqFqY4Cst1VMwmrtvuchyqjHr5iwQmaeog838FcB38niTi9vRaL94YQukCAeTJy8BFDoht3zFD8",
  "key21": "2ibMrbtasEUXyCDnvULrDfE8YabY6dfJkJt4S3vyNuAcMThemfzzy5TTiXgGVGg5yZyEEXbxgqD3X4AoFa8NKzuA",
  "key22": "36oAzZofvFhyaDEwtAzQ8gVvpSGwgWcEn1E4ase4gaWuXjyaiWtZ3der8VqVnBJFqeser8wYuZfpLZ6AyGBo8NUp",
  "key23": "58aHqE8PTTy8RnDmAoXjQLvuDGR2SkX3TkM9NmPuJC6Fh6b4EWsMz9egJqgf9PisndXhBM2QzJeiTFcgneyoeyhn",
  "key24": "n469xVcHtS43AkmWV1LKDKi7yhGvXMnLLT7VgWE8cJorvFBTHHcFvBgyZpo8GabHh5pXseQiCvAb4UEHQDti2Sm",
  "key25": "7caSnFxEhUVt5RB4J6Cd2Bmsbp726qMTteJWtGvrsFkqcJwVNRHM57R6muJH3UgcipDFwy6h1gKnhnDzEXSRQFA",
  "key26": "Ed2BTdfYuZQ8oxmD6MR8QF937KCexU2gz3V7FJpi4PK2MFLNW4LgmroiSCZvLHJLiBZG3YqGPVUPFutJUahoouH",
  "key27": "2wyBFmo6GQjzQUnFp1kTDkQJcKeWCHxkDmmjWj228dbA35ewfFu5D9yQ9tgVWKFcrXiUQLZiemxTUfSxRqb73vny",
  "key28": "3f9S8xd3n3Kc5FAmBCUbBwFw6oixJBaQ2wJ33qBU4kmBGgUj2uzgqS5e9jaRQwCQpgW6zQXrWzNnJz8uzUBmeWiF",
  "key29": "GCb5Pt2LS2qBb745noMiHSEh38wcngC5AMpRERF9b8sa1Bc84GxvkF1gkicj5wVoEHSvfnjJX3q6wwesxMdPnfh",
  "key30": "jjuEqrLu6z8NWUL6BXsmWFUNej6q8Pt1FvsuzvWJLsSFCjLohxNDWfaprAwpiaVUx2pn6u2974dp5RXwTFzjfBt",
  "key31": "35SKwT8s6vm2th4dduV48W8nruxJTuXTUxQF6Tbtnz4qdGSLZk9K2CrNZzJz3d6eq2Lj8oajW1FBhNDPCryMi34Z",
  "key32": "4FsZmvGKxTgbjwRTKYiFwiZtaHczzhZ6jaZH18FvYtJcfZxdAhyjBN4i4uC5MYWnibPYpcALUYZUgwnmz25kki1V",
  "key33": "5DBBLj2y1DE2ipFEocLs4FDQSuGdSoPmE7kV6K8StSwM5dVq7gMnrz3Sfm8X2Vp8ZaiYbkNaocozBXAHrotjPYqE",
  "key34": "4ZeVgMXrMEwHkQanKWnxGqRMoYCTHhocqNDmhUxYvGhknheh2X82JhdNgwFGFSSSmV8TJyEbJcP9WKaaTMLMBToT",
  "key35": "3Hj4aQDpzWpKvnJ8ax6fTd1EmxRZc3rkdy2UY1LXtbEHR7MeS6B7r9kszuVqWJhWfnYouc2jqha5PXGw1mg42Cqj",
  "key36": "3WRXDQNDQZnC4dYGmTjfbdKoUtrAFGxpRrdgt82wC8djEagdJeoReHGRizon1gfRfvN3oYk3fB1bfHHmAGtVJhDe",
  "key37": "jXGVWAaWHzFtVxYrpvzxaJ7KmPfLsRV3GKF6atLw8TxykjRNooFJDzYYzcpR8JqPaukkLnMNtUziWA36Rq5Pnyr",
  "key38": "23i86B7uYtC8hs7DwNoryPbrZFmg5f4uNMeAyZi6P7RyuBpPPdasDg45h8dJEbfCQKRGLZdEpqnpztoBeFBhihyQ",
  "key39": "2uhjG8gQfr9TJER8DJeGGUTbctGspXL11H2zTiSKguMpWqGRxQkbCfqhLYFdvasb5z6fEbeJqNNqLgZLm6zABLEd",
  "key40": "56mDfPphzSdXyVt5JEAviTKzPXMgzU1zyihisFNvNp9iyhDNHQzrcrHty2nA3q2MBvoNKXegPPR8DdWiXcihMKM4",
  "key41": "G3nNLRkEzwis4jA2Bwif6SF8PW35NgfYeDqH87rpT1A4gwzEp7TxjuHAbv33nkGH34nsNLmA9WV16tEM1QZ59Md",
  "key42": "XVeMoTggCG7FDk3ho15nZvtgtxJoqTTRkv2fwP2dYTThspb1vWiKHJmpLxkWn9SDygwBd6zTmidTwDhbzbnjPjW",
  "key43": "WgEVtTE9FLq8ZTQWNZuRhWqYnrpdbwdBSFAQDT2z8jCJ8K9TnKBtvKvK2EseqvRDQoupzpBap98f291H2t5PvqM",
  "key44": "2Sk4y5CY5bydQJoB6GLztUfpfCpqTTrdxWoi2C9oFqvowLCMddvF9jzc6f8jPUv15QthDt2JR2mGh4mZjwU8YZjv",
  "key45": "2LfTp51rnT7UsTvw6MQjpanspfffPTQyAZuEKQS3ac2USy1C81E3JVzP3k3uy4fcRqGbRPnpyFnAhv4F5N9XfAn6",
  "key46": "4MYdw2Y6DZYKRGE7pVShr8o6TdNjADkbxD3CdrDHz4z69iEZnkChtVGQ7LnJhRK99gLbAYyrceaDJJY4aMujdvXX",
  "key47": "38d7FTfGXJkjR3VjVUwD32WkkjHYQmoLidXk5QF6qGpE8YjNrrMxipQMJNV7pxV4qkHDQ84JMR5QSwizzPmPn7Kw"
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
