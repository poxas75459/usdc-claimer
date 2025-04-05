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
    "7SDptxi3R6GZ1zRXJUfpup1mKaW3RirD4eU2vuUnuheNqp349fefLvVyZEmRjAXCYHL3S9NpCGJWCFHHauTpgzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZysJqNq6Njn1SXBpzNWaNrGZtX4EKEfhWeFHX4FjF1Me16tfwLNNhVKgu5mTsnMLefafuqs1kHdLwNcZKJdpsWA",
  "key1": "fURKMubadj2pSjNzgv7JicHf4L3ZQeBouhsSTtiovu9ChicMqRKpNNg6DNXzZvR35Eg2EXcT27T4LoCBQsByKMs",
  "key2": "4PnMibXQ5Yyw3xb3mgvn5Dhp4bd8xgq9GPYn1kPoaEAngb6kSouNSWY8b6hVtE7f1Hf12yRgWYtL6y947faxbpx4",
  "key3": "23GJY6pHrTptd8WeGaw4ycU8B3nE8H2KReSDQvNNY7Rbm5a1ZVaU4qhYggE2RFVpDcUYw35VWHc67kpMAZceWBSn",
  "key4": "3kmiAXE7MycxkLmXJ7S8dxAJPxfXBayCkyhcXMKsDbsPYrjGxGuVitCWP6xAZsNhbVNn7DssL2DnwQRAKSyDFYyq",
  "key5": "H6aewa52YvhfVoRFK5mLgBLjdSzuyTybFSuvY67B6YMyUBDy2KEZ6VwC8cnNxCgnk5dsd8UgtScoMQAvixCTMMv",
  "key6": "5MzqRxfLZybwunntzYrnfr1taiPo8cswVDNEFAQJddSTh1vE8zhi9z7Vvn8Pnk3Ea1xpLu2toJA2mna2TmFtreDz",
  "key7": "49hFdHYdLRqGQUNoa6Fog4rP3e2skCRW8vtiGQFa95w6z4foXTZmgBC7Vgx9nNishULgV1tgw3oKcN2c1kiwVJ3u",
  "key8": "2AurjtY4pe9k2Z981Cw7gW528gDYMNtJEQ6JkHTPMKqQKj26fCMNonNN9tfi3Z2cZyuPzm73pRqqXRR8311NSvwy",
  "key9": "Wow2i8foNuCHK1kLESJgvzLZr2UmmFi5KhfQMzxzQJMryF4u6GTvxjGVrDvzr7vy9icjYJ47KEx4UZJsDi5h7Pt",
  "key10": "7sYf5j1zroo64CnJD1BDCJDUYniV3RGefskwLkYjPYJomfN2yxB7angawX3jHuTKZFP79U4nJsYUhkyT7VxaKik",
  "key11": "5TVgeJNFfTBU19zjfUvrWTXE2yyvbyA1BVe9RmnGTC1FsYc2spAUqcnZQgyi36hhbiZyAQ1eNZAymigfiebBWM9f",
  "key12": "3s4v6knAWrmZ45owU5ELaGHotYpugbJ8UA6wnk3pq1sj4epvXWHvfUb7gfgbkhaswRZL8LcVQDEQzuxqGiRonB4Y",
  "key13": "48ejWKhwh4d1h88fyvabTWdtijrtiYycqg2xH269oGFrsX6pZrVzVNTZUAsYUgPNV7qGpiJWLAAaKchY5H7JZkiK",
  "key14": "27SmaeY5SSMYWxej3eZAzr5YSTDXVEDy5GYdohwyx1WoY4A7ZbWwVCeTKMLauA5snpsGcE68rYL2cGLFyG434i4F",
  "key15": "3RXejdNKqPG8arNG4kB7grC58DKMYYoL31CmmeQe9s5aHtAscWjhZu3C5kAGJPpg6jsnHBzq2oZrjCYqq3CXBqgb",
  "key16": "5Ljxk549L3jZtugoTfT3Rxvj22QBnqogBTatwbzjqHmqGruWu98Fd9GpJt1PmR1C3vPT8CLFpHY2fLihrzmDLsep",
  "key17": "4RV4cHMxwBJczyGf2bkkSSZZ6S83MMwjASW3sQoDHq1hQ8cJFmsm2RoquMpyXCFN77xxKHZ2ebbc3cmbqy1v5T91",
  "key18": "sMcC728ZrHJim3a2dAsy3FrEbF78pYXfvMn1mMr6rJdmnAHmCtV9W4evJuBRF2RpaFEAVYirukRyr48m5wWZ7Hf",
  "key19": "3JmL8vC5Qoj29rZ39zNHV9ShyzNYP3kny6K9f21B9urtJTvNaPmifNaKRATA1JeZUSipacjjUApxg6MLGAAFevF2",
  "key20": "54kCS6ZxyCCM5eeKQgANDTy1S3xFJrRvC18FkYMfwTqKSVXzJuD6CoBbDrLz2GFdTw3Uc2Ejz8ZkqjVYP7G95uon",
  "key21": "NrFoNtfC4bMxLbdUrZkyr82PuV7Siopo94n54HmRt7d3zQjnfo65dfQWXWy5m5g6c9CiHnJh8HpQh7tFuS8LCv6",
  "key22": "EuTYEStSQ1m6KYnGFNZtELbYCrYJhFJi4tkAnebAcXYPRejqkyHis8dUJH2pqXsbUDppAfZF194hE7YMQad5LV1",
  "key23": "3MjFJXH4kuQCYyz2i59LaKdntK65t9mexQpibvnoHD2MVsVtwN9TqcYnbKt2Pm6r1DeJaWdj94mq5NL5xmh5jtYd",
  "key24": "jgyPv284s4qSHc6eHC58q11wULq7RKDjsKFTbNFyeus38uMTwdGowZbgv7hQSha6VEhZggf7fxwqVr4Z1HAHPTV",
  "key25": "27jSMJZcvFu6mhLwcnTNeokd6xZcsVPn6heYKKA1JoMDf4ZAjZGCb34znFgDM1HurewSG1w9tgj6VkTZDhcah3Nb",
  "key26": "4VahCjfyGjvYgp9NCKpBdpay3jqQLzj1B86cLJeyW8j9zsn5tFB49FAVNJVEXAQMFDjb8gRuV1Qq9NrTpBLDWr1w",
  "key27": "2A876tQdroyEhQP6cLYvN38DnHgEbHVUmstx3cjDVZNQgPjnABL1YPxHjnTHgW7pQCEcboju4uJC24t2mizXX4ZC",
  "key28": "2AFTWKD6UQm7utDWCKjJSvne8freoptiBFNwLN8m3QSiety6dScvyGaFVLrXZvoWzDsVQXNWJPuFgCR2NrUzqfCK",
  "key29": "5k46HCD4ZGgz9BwEm6B6DkR6UE582tM3kBAa5q8MXbdtTSd9WyBtuJgkn9eGGZnq7A8SjQzjudmsNJ3eoekCTByJ",
  "key30": "5QyWedUN5mpJHEyPD1kwwFDHFU9XzKxcoeEgkYhQPjJYqoVyc7FTLFv4HswGyfcMLH7xAsiB2aKqB9rX9Tiau1u8",
  "key31": "5xb8UNC3McpqFQDnuYekc1SKgXhdKw8eVEpgPmNCbZcmoi6w9Ycw25SjbDUgmWUyQqDECdAbGQVR5LagvuwPbdJ5",
  "key32": "4uxSzK2W5c6RwfffUS4yFFa1yvb7t8mZ82YwuQWte6mqUHN4vD4AcQFu3tzt8npvqR5xHE1Rq9eUJxn3t8Rvi55W",
  "key33": "5RCQsuRy1s5DquuGHXpecHnH7Jk6KyibFhShcb43LcsynzWh6nwm5BuDjsyXqGY18Q4qkY5JhTfwzm8M6oBx8Dpy",
  "key34": "3otMutULQvFgh2si7BkXmpRqyaHqLX62HzzdjBCjmapoPKszKExmxoEPPNGdQustfJD284mwRHRpPB1v5CJ8Hs4L",
  "key35": "3yiWeAT3DW1HGMzUavF3AGfHm6DZjZdq8Zwt9s8JBuBuZBGtNf6rHDLLLWYnze5zv6tF35JNCWZiE1gqXvKCbotw",
  "key36": "2os7sSSGzu8pNZg6K4uCojgct3CaMKUPHnzELt6DYXoWQXhXQBL78fxdgnikwWW8ZSh5hk4k1assQHTUMy3E9hLY",
  "key37": "3Scxt99rFHy3CmnkyRPDFnfs56Jt74LQzxY5B46jMNiLmt4GeFZnqLFh5zHagRR28LigFVqjcsbtHHwVaJniC5S4",
  "key38": "28oNqqZP41spy14xm551ViRaxYHJAoa1nvCDWrTparjrbGCZeSLmpL5xMNjp7yHN3u4x5FSSguF9vWiobEffPE7t",
  "key39": "3xN7ZtF5fMnXEzfWdXVjiNRGDqReSQDkC1cQH6spn22kCZQC4rVMRVrpsagbMFmBv3mQny9UQhBTfBEd7euhD5R6",
  "key40": "63jjdsBsc6V1DdVoZPSzjFkuvpzm5P94JVV2BCtdVZBQfXFpL7uJe7yPUoopzeEEnwnKeAmfDUC6dJYcNwikp7sk",
  "key41": "4Mkcy3j3SXvu6UjJXhaRE2kqrrsDh4DnWGNfaNxdKBrBuXVDwLsrKTLowKp3w9VrLuRxWcgmpXP7Xnj7EMbaNe65",
  "key42": "UtXQdxWmdEcywbetPvnqxbAubyr7zLJsNUpyH7cWFsmLdFHvnju3cbHjroQvpF6RzfaCjpxZn6cm3DSqNARGcDT",
  "key43": "5UpK9gPw1gizoEdppLkfXfXYR6CtwWJHES58AmwtDNoUzRr8wM8B9zd1fmJK6Ra6YLPzBubHhFTMCHtD3LdMFmJ7",
  "key44": "NgULfCnwoGae2xVmHfjRKFLPuqSqfJRMvfZ1fSJe8M6nixwksDugxJUZcPS3uJdpfyr721No4JhuiW9C49MiGHT",
  "key45": "PEC9MYbAJTLaZEdfbLdTYvAfYF7bMPTgx7owFtTK73as26GJNx4Su59j7frJdUm8kkcjC6Nj9CWy6s5iJphf7mP",
  "key46": "39iA1QKm7JjkCCuXCvFyGTQ6mYUruZj4CEP9Vwn2srxjondXpMkWVmFQwjhwHuHGVzkacCd17SVzrxu8CokYt5Vp",
  "key47": "3XvHWn8U7vo98mzwavUyy3kF8KMW9QHk8f8SoWQDzTJeUNGcZW8CBLPQRCyttDDb9jPNhESgfpdwsKJZYaZMcWHD"
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
