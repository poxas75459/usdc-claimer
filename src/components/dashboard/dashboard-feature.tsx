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
    "8wD63DZv1kqZQVjNU3bfu5osWCHteCK4JUCuroL9dFFDo1refimpr2FKZegv6vtKWf1uFtojYbpPVWM9CJU11Nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJGwrqy9ZfwXda2zns1sLmySx9thxuuLeQQG1v5eg9YPc2cetFXbqETT4fWvqevp4rZoEirC27nbQyVHn3qs1zf",
  "key1": "2u2Peb9wD9Nng7hgH7j2AHQE8QsktWx4apsCYxVMKyHzCiC9FMQfEpxUX5jPrtNfgKTdzeiq5CTsHE379tFhRQe9",
  "key2": "2nQ8xzHtGsjKZrbTJB4Grp3AHKkCw5Xe8Sj5HBHphKEhC6igHVezz6WnbuYRXZXp3s4gzFJeFo6URkDbZJdewDqa",
  "key3": "2qnk62TqaFNyvy1GafPGDrBPFS9c9tLmajBRqjVm8khFVVxiuURZgTJNhCWm15fXT4Xzpm7rhAZcGB86hV1CWqyd",
  "key4": "2UmgnJjUHmxfCtAjGdBL13zjZMykKoath2CtVVwV4HWHPtgooCxh3ckwvakHzQwFh8f6ujUhnjd5m5Gz64k85xzw",
  "key5": "nYNjUk8K1hSSaBZ57DkiFe5CA8hvAocMw7RjUCkzt99DFsYG1grtQAg1HNwRYqMNo9gy88ykHpG1DuoopphQHJi",
  "key6": "5kYaAhNAnyTN184LzBHR6RKQ3EvwuqiPXSDy9Pk1923gs6sv5ahyuh6kpWJjjvBWuFs8qDqLgvZADFEZuXFo7yKq",
  "key7": "DbgG8AERG5beYMmrDZmmXxMR2Tcn7sGF1o6A1fFRRiUAaYjmuiphBLw22DonsX2TdWCbyK3UDmWCPJN2RVTsQ4u",
  "key8": "d8szyKxpoHECwhP9kC9yWL5NeGpyYyMEzwSv7faguoFu5CVsTLWTeqnLLoyiyYt7PbQCoZF5WyKkzKXP8eYXPU7",
  "key9": "67qT8PCFcP3nxgjEkc7Hh59NhNu4nCdzqZAfCMs1KMTv6UEcX66KQUM8V6uKMEV5PXPfxAwgusgMbQsLuRqBNuYs",
  "key10": "2smJT1WSo2J3rFWD9WE2d1fMMF1bkMpaLEbtMQwh88CZEw4kNFuiyB8UtTDPN4gVW9Q6m2xS81jUsCcvGmqffARk",
  "key11": "5dLCQMsewLXUJPL9MuWLQ5ZapMaYQkdq7GUHXscqpqRp6gowvuBjQHe3JhiduUZjpUSEJYjgyAzEc8BKoBBxDr22",
  "key12": "3vFG7K7Y9HZevRA6db2oopa7mT9EV4Ex5WdkbQhwm78KLRUpswp9GSG5gWRoXK4AJeFed7S3Tw3Bc1TdZ2HL7YaB",
  "key13": "F6RMPoK1aqcrswKjAoZdLRxDEM47c6QRdpxHUKN84EYL6TR2ypXSXNzWQSPTHAF2B2fFmicBrE5fxcmkm3CHLp2",
  "key14": "4d477ECi3QJC11yswysFpVu29NHNYRC9mdGYZecmnEaVmBvGDxbq7P3bBmzKf6Aynkw6zJMojkdnCAejEevMrYEy",
  "key15": "2o3oUJ2SrNjGXHadrHCPGcFj6PR6d5nwCcptMVS3xoLiQdtnhZiB6QU4EyWDYVi7kais3HAJYckaYquumWXhVASQ",
  "key16": "883u5j89d25PVmpWrFNKDbDcieycRNFhUoWUwiPWVTuxiH3jMRAL6B1mW99a8EZHdEWkEtXrHL8ryVjSFsMB7CA",
  "key17": "hrZZmiQkmshi6yb5KL1DHwVHKz3EJWum9hcNzZbyRsoA4A7MKxM7jEUk33QjExLRGpccLtVzh4zRCf5qgipXp3F",
  "key18": "4DASAf1xXzaPcTb9n6U68awpaybNK68eqqWVisPHQUojam9E6dx1T2B3Ee4TDHGYE9Uyhd1sC7ufjbdthNjUVFRj",
  "key19": "4pBe8e1KQ9sKsfN52KArx2hWC4S93ri3mGTEECjQYbh9hVHtWWC4uEmyU9e7knT6EwJUbzgMps4fbz1PccqidKsy",
  "key20": "3ER67R3sBtSE3Y62LPDBGkjfoCyNGPjL3XDR7zqDNx7Pc7gG2k8LLTmnbiBee5avWnFQWTrwX9ysmiPf3bVPurkp",
  "key21": "4BvpzqkH6fTqoawLcHaQwc1vpTPtpBERqYtZN7MskC6odu1Mbet4y9zXTc1ER7gehXAtzms6okQbUTcdRo8G1kL5",
  "key22": "3j4VqjbMyG8CKXoXaWATZPRq6moomvJUN9t1Ge1gbswUdieLXL3uG4JrJQoRTqHkkLHUFiX2yHvD9QJxqbnzebSJ",
  "key23": "3oDNcqpfPPvfnucwicSJdV51Eydce86kL7zS7picjgyh43p1RrjMhij6TnDFPoS21DvkxEGqbnWbw4r65kbDr4Hu",
  "key24": "2tRi9Y8w11uQLsJ21erGWeXWoiwgefJdqjUcUxCK69YPdeRqRttBb7gAvuQ8hJ16XKpzNTJTF43Ueg4P5Rgex5vw",
  "key25": "mKcfoi4eFuC7mCoMAV6mbaQWzTpPSF4hXRQYDavfWMGbKDH2XVxV2dcfSn7uYfkX2iB12c9dqhvPdC3x5A3B9XP",
  "key26": "Mws6yjFXA2CW5DqJoRpVGGffvypabZ8oLr9zMRAaf7J6UN8HTehaqvpJXn6TyDdMW3fdjbjxXfH4N2f27Qu2q3w",
  "key27": "4gsDbnCyGczSkAvh4QLB4UL8APWNX3XMHjVtcSd18iMSKdretY1LLZ5AfXKbAebwGA7eagVDcXHwWBzTXPEevQ7c",
  "key28": "3WNQuN4cjv4CFbxpG3dfyTmFZ8oESTDCfJrhmimcFfRvKV8rL5Py85WcanwpC7YD68DNoobtX5zW44YEKFKyaWuW",
  "key29": "5VsRmzXG9yjbQwX8srTW8oCPefq1eL6k6v4usaHcshqubYSBWMr7hcQdjEGL8rpH9F39Lf7n3q2dH5qztAuRw7zA",
  "key30": "3aWLXJDq9Ast6sYbCRdkQNwjhB5J7npcZaLy8TL6zjrCmSE2ZtXHsSrDLq5ZRafkF4oTC3gQgoK1nguiXA6fuWro",
  "key31": "4SVFV88mpn6DCv412MEWB1FigNa1btTvGypco1Yp3vxgyihH27rJELG6PDfLuop1eQ1dGjsxT1WenZ5vui1fsJUo",
  "key32": "3MDkfbr73DWgkUxYZ7poPxFdNF3z4MGazxZVHwMhteneyJJ94dbrXoS1Rgxfr5xAA91etqYnEg1boMPcX92wPF9E",
  "key33": "5HGffFgo27jEE5gqgytwAX1SMHk4t7V2vUVdKda7aBso7FZXwL6YVmGW9HhaVckGqziQG2HoumQNhcyibNWxwGkH",
  "key34": "5ykNenJ8urssf9XxPpNGYwHns1yWDro96QQm4F3oN29Cy7F8JuUBtm3EbYHHJrUBoPfDB63jJ5bq8YGXV9khXGTZ",
  "key35": "fqp8wxVrBJtSaYpoP52RXbnmQESnoLwykie3bH6Fd2BAAooPvUQibxtGUKjQDPMYVUN3pV65mh53nJRfyQs9JqC",
  "key36": "5v8WLgCu7LBuKx7aLru42Jzq5nkfLsQzi1v5L2kmorhcwxhva5xp64GxuNKmZKPkGyM2171ohmTZxJUxo7epdGNz",
  "key37": "3LyhhuqmZ7wW1W1Gj6r4H7aPe4AMBT7ai8a21wDQhQ6EXD9PYhzkEJGZ5UBAkDm83hpdu8hM8FhdA2ZgGmqXZBqV"
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
