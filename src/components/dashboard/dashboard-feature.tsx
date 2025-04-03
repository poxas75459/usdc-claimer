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
    "2nmwGCL3LcdrwV3kNPWA7asentXvh8SawehsSAMCjH4woiiSmuSfkU9LKNLFhYJgUd8Zdtkn4rUQUsoZ3nytoBGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51QfgmQ5GQxy7LiAagUAyyy6yrupoyV4QQWKpcKdMXjQCy81hoH1ih1uof2TiSNUYPHJeWwXfAubnaLY1EBgb1xq",
  "key1": "5CG6L9nSHeREr8ZbWv2Ze5TkaNDdfPWzZ16upU72F7EwQVcDADA7GGKQZcVXgVQAPYaZfnySZgkQYAoAG3qMUeVB",
  "key2": "2qS4kfKRvnwRxMoJc2eq8FFVcs7Fb5xGkNduzeEkdYhhCr8MRrDmBLMukseoavbeVq7BFRpARn9YNER2FVYQpwB2",
  "key3": "2ec5rg7tz3JyiPYiBBdnoxYQHZDcMeD41s6jwwknZoUpduQbvTMwEtjwReji4ZoqLTwBXmkMUoJQpi8buBEfzNAy",
  "key4": "2AkTExJfKQuHPWNNg4KGbN9cZxEbjekKJat8jFXXgN99V7A5xP2fB6tMebuKXBo2uTwPuQAmEtxyXmyuJPbJzL62",
  "key5": "ru8uFpJR2FtWbwQ9kZRiBcR1ANdnuZnqsAcK9fpTPtz5HZZyPj7EHwtJnngmMwhkfLGHstFjX1rn4EQq6qKRzjL",
  "key6": "3N3i2P9fcf2CbZop9ipjRt3omuS9cxqLWo37GtcYcDBNncHL7dDB2JPCSebv97yme1DzMiJUkeDEDrespk43Yjaz",
  "key7": "4ANgjdXUuowajscPaQGVMxckfr35WYrvAPavyot4MhJtcRYieB5XY8SqwrnZzTChka3M7kn3YqUKi5V525wDtdTX",
  "key8": "5dYid4r2Q32mVP5KfV1RwmFDm1u4qtLwjmhibS7ADRYzgZa3ncBvBVXSdKzagbQMb57LWYRy68Z2cTCr8RNq9voP",
  "key9": "4ZQ119ZyEWcqLJWww2oD4kCnPHWhqiP4kdpsydvUg6NsLxM3mRGwTYa9soVZYHDWfBFVKgk2SSkvm3DCWQbHbBp8",
  "key10": "4TJVR4zZnnHywV5jcygfoYQn5kQwPBYio7X6i1Sd9y8RUvx5XtSQ6osoihPv7s4g7FmKjgJRZ4F6MBw5e1dweBXQ",
  "key11": "52Eq6y8QnP3RX6c5mtuPEiPa78aV2yfZey3Dnq6ZiApnqZmioHMuS1GnnENJULW3oWXTcGchTJyebAaxYzggvKSY",
  "key12": "5CqowqXrAJN8esVtUPqCEK6pqtHiwAr8JncAqqtHYeFgjLS2adiTrdsZs8DruTPsAWtP1Wwa3y2cwz6BFrXMFktT",
  "key13": "4ieNjR1uY7uGUPLmDa1YQUSErTgzEQLFQvjq2EqBdzqVx4Uk8EXDA97h6Zf3TzKCjSQ5hvjdYJ9BX9wD7KWcXeFt",
  "key14": "5FYrpRGrBxmSPrCYpNKqHUetdiUW5E39frsFLPV6iK4aX3fawGgQiHDU7GVovD39oXzZZ6zotEFx97LMDHguEA9M",
  "key15": "GidRzcRWhFQHRAiawzQo28f6ahKo45WAZsNn5RWen3ULiAb3PZgCUswaMdeYF3NHw4oRvVyi3BGwm3FR7H1kDXC",
  "key16": "5Umxf2GKn4MCxyGkCx2yDXCV7Z3Lj4SibKxfdRc6VxG3u4ScZkncPDhAEzaHews3goPnpssWBxfSR2mFjFN5Rhf8",
  "key17": "2HnoKdsngt4zrghfiiAVaYEL3hisQdVcE7V1at98jMedPKqX8WchVP6VJ1wu7tvADHfUfyvwqDASo8z77KFEwbEE",
  "key18": "58zt8jzndrW9LWRi7aZPUbBcbfbaU6UQo4HTWtjrYPnU16eGG5aZZADeUL5Ai58jZSxPYZMDw4ky9MRBcjy3XiQC",
  "key19": "4Sjw4JCQvbZxARGMNimdAdbdyyNAqz5VKQPYw1X2RisUR12utHYQBm62Ky8tYfc8USPs3zN3i7MkHZTPHS5P4cLw",
  "key20": "2FCHQhNhdnUqhy1SQSogDBQeYJvemhzMRB2Cg3AjCgEq1rjEBSCkXFZMLJA7LU61L6Lsh8igmoypzXVFcH6qhB4h",
  "key21": "XM9VeqYPsoMr1tv2M68LptUKHwdDSvunbJqLAFbMjig2Z1PCyFnnNgZpkLCADLnjFALwzLaWBBbjoHteusJ1J9F",
  "key22": "5UqrHPazb4YR2UmpNzj9G9Ujkarep1sSkkBVk8WjYc4UGx48y5TCSKseH2R7ZJbWM9MaPmG4BpuU8NdjyYJt9hKy",
  "key23": "5hXLPr2qaoEkdk6ZnvcCkhKxGKFASg1ma944qVNBn551mPxyfmYDWmjjTamJsi5uaASNUYxcwP2Snp3qu2ehp3ai",
  "key24": "2w7qYTMAcHjxqxa4gypC5hW1NWJ3kiF6Q2S4qGG9Koo5ztkLM79B64SETctyKAFiedToy7pBAWhNokGdyTed1h7c",
  "key25": "4TKkFy5q9K3EcPsgrGxoXgXiCHXFpU6a3KwFsSBqdWJpQvAVXMHrhfFRtMG1qdcfGTSD3kHUYyQzvUktm2uVHMKK",
  "key26": "3fHWSyWbMH7YgxZF7z6BUUCiQhpEaNaHCN2LGpRTckEyDeZn5hsjkWySRUHD9jyfSt9gxHtFMPfLmGm5hUV3a6uD",
  "key27": "vga4AT67FsnRKkAqxwYCUZqAquwUKVuDGryuxQxfac1tWbi9bdYbqaEWTuWQ1EzKPc88YR5MPe1q3xrZZjjGDuL",
  "key28": "4sGm6rYTEfFsyiPezzbsqH32xo89Av2F3TbAQEpvqionBTUS9d1MxPhzLLNX4DidaBks1kTHqDtt9uWmpfE7ugmS",
  "key29": "34yafr2fy4dgnqEB3kLMMZahRCiCKkp7cuL5z9c15riotBmVfTXn29RMcfRiJcb9hwSFZ6kyXgMKdC8khk3SLmou",
  "key30": "4bH2i48b2CCTXZyYMQM2bVaKzKN9FVncjysnS64CE1dhM5FC617txgKN2Uhx6JQBwM2N8snfDypo4MartakkQ1Gx",
  "key31": "4eswnFPo6yPpjXGUFsHjyFcXQM8VvaLpYGCJNdwNJDEpx4H3Hrn1DLqAYhRC88EyHuac6u2XU7Kg2JrXR4ZbZKzH",
  "key32": "4LKL2vjVPNz8Tk7SVGuqFavCqJjpmXf6gdDKZB9oEmfnB7xm84apF8gufS2EsqW4QVWFJZFyFRdtnM96uCqT51ji",
  "key33": "3nFaXBcyDHoWScCMCrkr8GS2aXB488vHzc9YC2Cb31kqLHTx2wZJANCJEBHLAcHrmrCg4vhU5h1ik47KtgQgYY27",
  "key34": "4LMr6bvSLCfPPapKK1P9EBQcy5LoYXjmp1c8TPCdUVuY2PpWg3DeEfc6U7Yg1bVh7xewzCuroSQ7qE2CC5J6oNWF",
  "key35": "4QZCTituLAEvPK939mVDTdcLgMaQN3E4YpSRREK57PqhJFYttQSfvSgerEp3miNLndNw14M49kqD5PjZrFCxoy9i",
  "key36": "45CkGV5kq8Qzw65qkNgDegWcc562N8HifoRWMXBpKZJ5vTjFyUaWMhzkgTkqEqrWBGTdGdhAYr8tVBfJQTi4hpSS",
  "key37": "59uVukpT1kAfFHP9YX6LTZzP4pdVqV2imr3VRTLed4dcagB1ZZrptMKs87JzdJEhf9HG5VMe7nqgBjBZ8tMugtcu",
  "key38": "52hgac1a5x9RTUwpYT62Ygd9yjPnp6rwjbYc7o8FS1jHLSfZkRDjA58XAKBnYTZoyqA51XfR7De1aKGi9RjFkuEK",
  "key39": "4iuCTXbdaHRHiTvMs1o1iragaajbUgqYM9VvPk2KV4NP3HecoyDkHeL7QQdmB4uFX1gqkSkqFY26BMe3DEGqKmF3",
  "key40": "4pBpwjK9BrcZLdJ8tDRt4FL3hJWNev22TygAg9CEVyX2N3upmRmtJupbpSfYwKX6brbGttjQohQgreMTrdEUHBbB",
  "key41": "TWKY26VC65zYN8tXa1PxbbQGcM7uJw5URy6rPmWEfBQumqyyGAzvmT5APo4QvkAaKFDigocuCy9vwS2BSVcD3oQ",
  "key42": "3ovoWtp5CpveHWjBp2nH4V1TWQMqGg55YyqAYKpgqgG4c3eXkLtorEHTPnKMjA4nPxP4HW1qAfWpwKx6hik21s4B",
  "key43": "3GYHt7cszG4V6cCCe6FiMvwmJoquskd29MStcSJb23wkAfngGmZVz4DiNN9UzaHQBrLkweweGF9EdnuosUzDVghs",
  "key44": "3RGTYUM7x38o5ijPaR7EQoRUjE2gZwNZzPUTsPHgx79ij3QeU2XCFquYim8HrHUBKmnSw2fr2JSsprLxpEg3bKWY",
  "key45": "2UxzMpWsC7Kmj5TZyHq3GjuUBwaYfJWZuAjAXVwGYhcRCW58zdhXUWMptEx3FwCbCPcsfkuG5Q6vuD3G5b6wCZ5F",
  "key46": "2Jrdcjhn63QC9hRuEcR9SW2pgcDLmUvvKX7Hc6MRoH5XGj4xDrpgheFxWdepN5dFU7XujBQLdxvnDpN5FZ1V5t2u",
  "key47": "2cjgtxeLwJQWdZb7C8bjyKRj7s2gbLWoNpbvebKxmzeX2phavHdHdiF2hX71CCmD8UmepHFpRmtzotiywkoerUvm"
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
