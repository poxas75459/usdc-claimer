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
    "e9r8eWDa2c8usZoC5mgY9A7Hf52oHAhe6N4GukPnk9Q5x8XuD4ofqUwJ6H5mx1DDMAHEhnVrHa2F7tNzx3rDCp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5soi7rLrYEeBgP2aeq8BvybNAMgZ12WSK54rYvhNQuKHgCC197Eicbkt8qHdz1LxDz66aMRDVppPYiFTfY2cTiM2",
  "key1": "2PLfMFcTiP2cXbBCWZ37zhJ6iURfeH46PC7PsbjN1uiWZeRrYmxHqw957kTbU6WGzomczgAaP3vtLiT6CJGcki2g",
  "key2": "4u7P1FD3hxWVXLfbNJ9n6vPZzx2vmJsLg1nsPHFnejEVacGHZSB1tx3YvaLVqC3Q7SVUkJPZnyGZoMRNepURbKbe",
  "key3": "EyKyZAaFmgtR28Tm8jKvnJ3chWhzx9v2ApeomqdQNztFSTR9dRMh5fJ5a5eHobuTt3vJpSDQqNtH4KTq4o9oKqN",
  "key4": "3jvdcGQnmVdkxWxXevB9LmQq2ysQ1UpgZwEKmUUqVmDqx74KKuAxbxG49GUhQSvtbRFqDv6zvgN8QsRSaT9NUvWd",
  "key5": "1JPCc3UEJ7N5hKysHwDBStvyczZo24vsMyyvW2YTh72LE1ZryooL4qBCZ5Q32iZv4Pr81crHsYD4SD1zR74hmps",
  "key6": "3frzH8eekMbNgsbKboWDHPJMMzUs8x2s7RXTjXb1AkXMfyjvgB7ZBWcpcFne2uLVhrHxKN8CwpCAqQSATovPrfi",
  "key7": "5q1qd21uQvAdztBHhcFmp5JSazikpxCUADwa2Kj4saPjvnZePhia6Ksp5vZjr7FWpDbkWtwEGBd1gfSJEP5fznDJ",
  "key8": "edsLf5y3zJaynr9K1PSD2mHP8nNVFSx9EngewGsyoJWJvxS3KVbPDhB2th6JUeGnKHyi9JHQEfEdUH5kiouwwor",
  "key9": "2zFFCWtFvK8phGffkAvnptciNvXEMR51Vpdu4EyiXFZ6qUNyvoJifx4r97BgbXHWqZDR7vFUartWVMiWxXVBX9rB",
  "key10": "2g4P3vW5m7FrT7zQGNXoN8RnQALYerXGsvdiqNEtsjW7orii8XWRpQiNp4CecVBDnyX43CtHXviFcEk6VsGpkSfy",
  "key11": "5c5f5bYubatYMXYXFjnsTBb5nyxR4S8nuLJX7fpfQxmiNHwNWpHVHrpeZXYDzpbUVsurVUhJdsfDPeZYoZhynRam",
  "key12": "5ucNKfztQDqKCkAj8gB4AvXYBqp4gHpSvFmgQ1qVZGWTMv8d7ddRohFYaL4z2xpmSmbgCG1tqBo6tX8TDjAoxLFk",
  "key13": "5vTcGLm9keEcN1TiN6wELVdk9Jrsq2HZt9YwCG9msN5gF6PFU6T28cLywAAKg73AxNH21eCiY62Ednz3KyET5jnd",
  "key14": "36u4RAxkJXax44jo7uqvFw23qxnvExQAbXPoTH36Jg6DGHvhBHAqbQDiKsBiBjj6kgSgaPtndw3r6w8sS9p9eW5R",
  "key15": "SaUbzA1A2Ff9W6d3RP2An4XvYkZY97FkcNuAezGsgSiizcxE1NbiKoqvrD5wNNf55PLvCceoaPrm4UJ4PfhnLXP",
  "key16": "5AJNkNvY8A2aueCatj1WpPQVsX6u2ZhgfNUB3euRWVXx9ZHtwuHSNDzXP5kFo7Jg3LiTRC4mbPGEVAsMq3jQKSLx",
  "key17": "5Gi84mt5hXotLypfKTmPzxJkvqR2EMx6FnNWBBqHib38y1vbrmFcbYoT3SjKjY9JoccYitmuz9Yi64wwoVMizzVr",
  "key18": "WJ4crtLgPSLE2okkUMMaxfegg4r9CuJfQj5wSPrjWPd9vWYARuo6GE2T21yM8U9QxtS8o1N1UNpS3NoPtMdWcTi",
  "key19": "5jJ8a8RhuGXLGojs98dsaEvjkVFvPRe9Ltsr9hx5mN8YRMEsBTQLgwpsXoa12Pr8dNJYhLXMgdyKdcqB4seeh9i",
  "key20": "5Zsv6EUZyf7NCkxbGvAbrHbBYA6qr4V6xwFjhx2MeZrTaZwdd394ByRwQRhypehscaaQgfdv9JCFMr33LzqdPg87",
  "key21": "5nrm1mt1BjRUCfFxzvDvx4zmyD3VbLqH51Yjs2TkfgPMd3RLZxMY5q4VzbF8TSac8a6xFW5eyhWVGF7vtZfpBLs5",
  "key22": "5aNdLwFDPLABAPRASMRj7JMKEgSdVnH32aKkXWXHuZQBBmT5duZ7A2JdN9YnYHYhncGqw6YZrkQFwMF7qSf6wfJc",
  "key23": "5uN6WkgZTATQ9pJRSyPWBuMGmLhznbigF8QgEMmDYDpFKABKcU8NpvsGf6H9DuotCfUirrt6prUBShhyZ8acchr8",
  "key24": "4HtBC65rKrqHSTekHnRF31Z33kBbJa762DZiKDywkBnkLXumMPzyvnus3dRpKw45AcqGsd98XvcthYvQe8YSRqXx",
  "key25": "2frr5CgPm1uNvEaeg9HBbuUXA7jc7K6iMPz7Nnpx9mmmA22DqA5UqnM2iUbaMpCmxwZ4vRAu7u2oSH5pFy8L5mLE",
  "key26": "2qwn6QUCem1aw7CVE3sLwEp1znT7e2ioCLrnk26w25xQyLfVKR4cfQVFcThm3Zb4QFAH9f49LU1UNKC2etAtUKiu",
  "key27": "VH6qEhRzAb6HM2qqaMVMdkV2aZpEnC1pPSahq3ZQ2L1DfcjG9YsTuJjLKmCCQEpdLX1PQH8hPGszwUU9XE38JK1",
  "key28": "4RsrbF2XswRcpCVTHqerW5i5xV9Lo7J2kfRaAN4qgjpzvJmxfyuuUPzP2sSDAc6PUxKzsTntupgHwxJeqQh5DB2j"
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
