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
    "5ynetV8TT68kYVrgShgqpCkK6mKuigocgX3kephTr6qTKMVc4X8LxTV3iVt1drWhbhGHwoXn2LYekfmrXERJzSLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s4JRKXWQzyYJcbVbySJS9gtojxjhVye3TWGnFjELCnihkyzUiJd9cySM1cySb8t8oVw3oYiAUBf11dThPHWTyM3",
  "key1": "4sjDiJnrACNNH4q6aU2yeaBu91QSbmNPPniBkvdB4QTYk6L7eqkW2qhL3Vx2Bm3Wc199BwG5ZDX2GprjoxjxQiUh",
  "key2": "5YcYany14z1WWBM6AezX6fg5GhzeRmcS8h6C6sukE7ZzRop4tMDaU9PsipavR4YRHuFGbEugyUj2U5SAgoXoXQUk",
  "key3": "45uSeHaggihHNxHz4NDHQZ69e2Yc7X7CoB5hgPWaWripMhbVy2Z4FrDkkU9NJgFGpQyYnoq5AErGNFoBbxpWarpe",
  "key4": "4KUVKgFwPThkGxCKnbeRc3XuY1JdFTY2KtNnRGHWp14sGp8Lsmj1AbUsmmVVFeg6UPsL4cT2Xzw6YXt6GnznUqBu",
  "key5": "4hQuwzEiwVxHCiw8APGbyJhwZDmeZ4wBY3353L4vrTSCjKTk6Yvsp5jnZP7qyMLyJmFQ24VNasBBEEm7vgCm7iM4",
  "key6": "YfrzTSMoh3agYfkvVLpbAWgPS6u1cuvLz1Dv2SUrp3c2bPBAXXixy2ekmhm8TjobKfkNpZDXnodx1rhg7pGPEUm",
  "key7": "61kLJwsZuF24XkEtehM92wKMqALLYSpmtzqdpg7MEA4xDmap9ux1Lr8QKLtSQoYWNaXtq9dPyrWa6XJNQJ7ryNAR",
  "key8": "5txV9oGqsaYGji7t3g9NkYYNNiGbPQxEC9cFY66hxJt3TWhwXcd2gUVwgBvkgcH6v36EaWenw2bM1X8gisDQDR3g",
  "key9": "5biwynbS3ArWEhCACLd6bY9fU7AmccHEBwuo4RZpWr7zk9E3fxg4CS3g1osTUhPisffcwP1GhPD3kzW7T3avihvK",
  "key10": "5ftXVeJHJ5auhMbH8mMjbexuZVJZW4Y8KF23R3Exan8EpNf8GpfMnYNTVV2omtgwxPJi9oziq16HtuzUp8Q9C3Df",
  "key11": "4ZNDjyZc9JwPWjzmCV44U1f5tZqeXhMfh5AxeqoBpYn2fKXMZLtajkWmtRMga4nApo1RiJrWVaEntp2V73VToMHN",
  "key12": "fugAkErBz8Ei1oLTNEitSHXRDGEjLFYoGjxFvnRsCZxrRWZWZJs2bBngjC6fJAVUtREHimxLM5AfuiJsRtMTsNQ",
  "key13": "omBZMWrvVsaxCacW35cYYWwHftnouq4gJc5ddAJ76eyjqFyPEnQeZQA5kfFNWbkg51tH93LBHDqxukiDXg87aLp",
  "key14": "3Bk5ofoXJXwMCYq9Tdvnqke3fgwyWF8oKi8WGHUD6qw8nF7U7reZM2o3VCaSc2PzYNbagXBQ39JxuA2Dy9kuTtEp",
  "key15": "2anNv5swU6ggMnDVi8QFx9PeDpN3fXGatUJwox4FSZYyUwXuhSPNLe7jXFqrd5FhaTTxRGnahBJdys3TMeKxwRoe",
  "key16": "grrF6dZjo3aDxuyy2CLVsVf1XWt1AETMDu8ULK3FCuP77qFBb36ZFroQGrP91ABHUabCrmDq1wCBQjVcZ5TJy49",
  "key17": "2dXbVAZzWjjzV2TN8wg5AbBwiHtnA8xmTqqJ34CbHEbsRtCt3mguv9qXNLBQx8Qvgc8tyTp4TSzWDEJyMwciEP4",
  "key18": "2Nh5ZzWhpQRoGC9SXyt47wgvQVZsAQQjbvUGtEY1h8b7YQHCVWMNSYnyR7kUwj1REEGYEZusrDBB3Le74TTSdw93",
  "key19": "3p9GspSjYWgRkxc8jg2QBXkPCfa4jDuWwg2P3V2SZbDhBhJzHqLWm8mRCqiFZ1KVouoHRD9yL9E3Luo5219g1yzY",
  "key20": "5uYkw55d6Zd3Gn7YejocHmU3vnMqzBnyrwf71UvaazRqitXZ7jrvqJDkABmzx2esTzyyJxMEGTwZoSctYEYTUZcA",
  "key21": "4kCPyUQhRMzwW3hFFihiC28uAZEAmoHWN5LUdbz4q1ePYqU3nZxi6k62p93eUDeigXUWwiMJ9U8A6Up7H9pcJJcf",
  "key22": "hm8phNvcDwC7qWeJp4PdAU6gmMfUzSco8QJoP33thVVdrq4faTW9xdZR1ps8HbMNu7gZeNtjcNBhDN3LJVn78uR",
  "key23": "3uzALZSUA2J8kBNbApPjPCik16Z9TynyRq7Tv9t1HCVG2cer61iq8S5rQpeoAQcDcL8W7iMaHXdgAa8KbQux5d3Z",
  "key24": "35juqQqUzfXb1vLvkEMiSEsEQ13aJpr2hPzdW8ACjFNEbbk5QoUw77k4SXsq43aDRuyQY9rnu24ZmydAFeNfPcD2",
  "key25": "M4HaFmWHrKHV5wydem6C5CxGWapbyVeYf2a1VebdkESFXNFv7XxuEj6QekbrLfcSdcSuvM1vV8DwUr9R5gmeoWD",
  "key26": "4vJGfhr87BNbtfA9ZzEmqijBQngRAAs4m8hWkLyjD7snGifqRdaGnDAFGUApV9W9iCFn6GdUbmyRKBRfAqxET9KD",
  "key27": "3EfaffJHDPYCBBK5neLS6uJjh7sk2CZM9Vseo4poEDdMJdffC72BcFY552LYWetFeSKx4qzG7gs6N1D6KjyJMrWh",
  "key28": "4eATMU5MtTqGsVgqmsYjyGzEqRYMQHjkNVwTee1JsFjDmjkFh2KWrRoyUD8VnsNWNjYafnYfMtyG6FPhGB2xqDLU",
  "key29": "3KUPvPJ1PmRyg19WF665ziRSMKDbdVJ8jECzHBxZv2eGMqD6pkk75U3kXVRsSzHs2Ys1DaV9MmbxsobugAcHhb1Z",
  "key30": "5FyFq3J4Knozr9ZeXCsZa3w1gKWRcXgHnv9QHRCYBfGou4Rm4VHTexL6zhuiwFtWUjtTFGuAvospQBnyZf2xL3j5",
  "key31": "3gwVTptUaerkERsizpuo66zDXpEj7tvuf1NMHdCELeQnuChydNYmtJs9yNB8UXDxkB8whE9kJYcYg1VMaDMaP57f",
  "key32": "3LY5Sv7P3c3AHTecYAyJyv8ioq5o21ZDbdkXDLT3eAqz5yWqJGu15BZrj3afED5PMyE59pZ3p4XEhEkB78Zfk6nH",
  "key33": "4Rkg9ESoX2m6nJv8tTZLEkZC5L4c9tBFWZxLL7gGaweg8KgS2kXpM41jtBqJ4gTZ6rf96XdyK9WWJnv36bJsJX85",
  "key34": "M2HBMGrzzTFYjJnRrZ2zNbb1T8DfPsG3bQk69L6JLMPz2TCs6khGA3K8VGSVbutLxismzGZHmDEc8yWU9di7t5J",
  "key35": "2m5emRcMEnLyWMfh5gzB8r2vE6LrvUS27tShwWv7mRvvT8GCNqEWmcwkydHLP8AUGjpZFQYcL5FwYPgQDp4CHgkG",
  "key36": "DRqeKxuoct3hSxRZhjEFYsCD3EQD65s5e5PM8QDmMXKPbW2QShYKY2eipDotwyXi7sxwYgjtaZdhdyENoRZaw1W",
  "key37": "4cGevtLwkP94fNwmVRWE8KuhY1jcFheCsmBk8zfETWeQHYSMkd5pyCYLnqNwzUT6JgmfRev7bUuSS6b789DDzYsa",
  "key38": "5fTA6MB2eU7ZmLBt5poVMa6Xw6tovrtCb9QMYoEHCH661RxKwSVW7LACnf7ndYhwKaZdPFTfTA1HgR75xfBVqcUZ",
  "key39": "iwiXH3HFCSMZVbmyeopKHQC4usaUU4KgBo4yP8HLb1Cc9BGCqeqN6cCzTEmEE4wNp1uKjmr2wXjoQDWdYXAiBP5",
  "key40": "2DPGxJSMaZrxJK6CmCj4HKSafy61hDf1G1nNGUjGjb4TMeEXXqPK8cLcn4KVJcCqun9jYPV4F6CKriWEmg3nmQdQ"
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
