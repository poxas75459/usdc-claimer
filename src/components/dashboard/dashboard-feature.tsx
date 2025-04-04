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
    "64smL4HqAbq2jkxkqs3XCad4brs45UucYA5ztuE9KktbkFmBwBD8z1Sj2D1dwbUW3s3hDBWnnoAr4n8bYZLgrpqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MxW8x4vVwTeTehCEN2YRfhS94WdSrmMpxN9FifMbbncJc7MLzLteAX7yK9iRgUozbazgabePeGLv6bw95b2x6XM",
  "key1": "2N5d1M2ZUu52oshLszDabMt9bJE5ij4K7LcdFjQDhtQr2t5GRoppkg3VVLgZecuu95UmQPvTq7tbQhDw74TpjnV9",
  "key2": "3dkDKiwcopjBowqXEvDbutXh48NsrDAzNRVDvtEwTHLurUDHPjYg8MmAUWXvPhA1vxiNwU6hHen5vC732YrJkWpd",
  "key3": "4XCM2Y8Hx8PPnwrgSoD4YfutKXd2Pg87NqZPLL8ra6SgwsYRdZSYQNG3JW8TzhGFQc56VqyVwLvk7tzYJ1Z6voTP",
  "key4": "5YkxgLoQmZXX2msqJz2Hgnn27kit8iGXYUREqyzAbLxLWGzD1TzHmw1hjTrqLMsk5g9EnqR8qWpKGSwLAwegu2Zr",
  "key5": "A9ZXgvZ5HJfqVBffnBY2e3WkXAriiKUmP9LjWwvaJYpsUj4h7wsCueDsvXFy5zr8zmcToocAJ2mrAQJMC1P3dHi",
  "key6": "53G5pfySbhspJKHH98PbFhxfZ2RFGa1f7NBzH6tXgCfE35fCjfzbmAtJRboBa6oLPppPmkqMvGvRew5gKhtyDau4",
  "key7": "5SLduzX1tcqBGe8pHo1BX13RjD1YgfYqHmpemutF1X3uGZytJSakbNPnxK1FuRE3sBXoGWWqSZ5GzaXeLDjTviyu",
  "key8": "3ip2ghhBPKmQhqx3NwvmxXrcjghSgBS9mAUtViEffx1ibHg3vYXnAxuvWak6fjaot8Dw5saY8HjjqZn33jvsAhJs",
  "key9": "67Jsf7cpA9htesq4T8LF5YWNHABV6kiTgu95uvpzxFpJgUSMaXHBGKDBoJPp9dXkP2xjLXSxHckJKqFg7xYUGhda",
  "key10": "3ZRjozeAaLqB6mt9po58N3fvqgQ4mtxvc2cufNhSFAeDVWuFVN3RTXLPNJWhrnYUSQAESZNrXKPQBtuXHr7ATQd3",
  "key11": "3G9qV2b5TnnAbXzVHsDSrrH3zgjN5Pzy3WtW7QFe2wwwPFTTQmrJPo28Sm3PBbL8BaJWijEPowkEGJjbNHacRbLu",
  "key12": "5W121VMfaumUMMRJoiL4oqMQLiQcx2pncYJ5uUaW6jwjexvgK1hA8oD469f6fcUFUhVXkmcR6gY49AG6Qn6hC8CE",
  "key13": "3NUvFLBJiSKDhe95LmbhVQJKNAWymAP1wgay6ruHtPDxQDfjadf2D3sDYXBEhnWja2eJLftvqGpHDKnXWSqPFYu",
  "key14": "653VkyLdiCC2jN9JaCRmr6j4df7szzrg7HRt76hcbk4isjLauPMwwi6JNTNTRdQs7xM8ys8ksy3REeGLXcJGcvsj",
  "key15": "63RdZYknkSYcqrqZ2jZkfN29VqtrG2tKz4WHV9Rj52ohFesqgtjkq1pWzkeixtUBjTRq5DabCC4TEcUDXtg9hZj9",
  "key16": "4ehDdkcJH5QrgEm9rwDF9ARN6QV2kdRJrBriNurMpj3BwLtNx7vFxzv9M8CLwbfz1GkwegnykLT4dM2xrndz7nmZ",
  "key17": "5FuFWeWd2qhhWnPXD5Gc9Kgsqxrs9Tnj3XdQPReRY7gcPnktx7hxKw58HYpqoQh76jXANFibFVCrQk1dZYyiyHxp",
  "key18": "AWxiFV5mV2FEiZ1YwSZm3Bn1vGdnf8UohicG9Kz66t4XB4ko7jhVHwkfzAzXBmKm3uqa2aXuNy3z8knTZ2xkdU6",
  "key19": "56gwbDjcKqHbBrgAt1oKWXCrRTk2G4UMPDEiupYtzpQRCnxFcWwTdypEChodKyXXU9PBNwz2zfqDPLfGf8YeR6gv",
  "key20": "z2Utf2eYGqbEzAWSx5kcNzhZRuAJicHKAxgP4VVKVW6RvYvRU6FntPz4netoKwmoziFMQ4FEZJZuHSEW4uPeixy",
  "key21": "5gqEts6zmb51QDjXNF8wsTaXtfp5xuXeFmUxicuqU12J6jqHTyPuFM79qRUzpE2LnKpPcDNGc4rfLyVTnihfFPfy",
  "key22": "58AuEZtTczQMTitdu8dSqxNnchmenAiephjJ1S4bB8cnhEo3zpS1Vmo1m6Dr1MSTqr1Z6sQt9Ppf5x1knEQ8TSt7",
  "key23": "22PHqdQNGJvRssZ78AAkzadHLjnePzgKkB2JqkkC87iyb8PaJdASLe961wYQwRBXfXreE39RmHSuycPq5Vke8ECZ",
  "key24": "4nWookW3CqBg1k512mYp8XADCtk8Jyozc4iuFuqt5zf2PLyavPEDTvfTSN3SsXSULxo37HsDNibst9Rz1yL4wNf5",
  "key25": "3AKpQTFVSVaqyPYvjZk9xCXSTL6ufkbb7FELyPRiDmxn45yrqJeorQPwba8icJhGBkqUA1YYf1c7T2XpEhdiZRc7",
  "key26": "2G1mGDWuJE3Yw9GbwkPvhAfAcGKuUCXYxi82wycvwCCrbyhacii3v8e2KExhx7c1u6CzfWXMLUdXodtCN2vKF18U",
  "key27": "ZwPM9NAjmT8D2sMs9NJHtaBKHvkTJvnbRe6fthKvFaUEJwA4u9yXwRWx3DehCYSbxuYW2Z9KGpTpdPN6d1XdFJL",
  "key28": "3aa68QByC6PXDLBzEiBbXrM5HqAPnjWM48gikmcJoyyBEizhKjDp6m7hC6XDj6T1J79SvfErmZ1xXFYMbK2QxYjB",
  "key29": "2dwcNn5gGiuUAkkfQhEfCT7oUFkBXJN4R4SCamQjf11ADbygSWZz5cZpuirGWvKuz2rsgF7amX9L1bHTjc46jnXJ",
  "key30": "365TsrwfSsgBxzVxkAgd942GRov4ikqswEx7oDcJKtWcGgKCM9GyK4z9z7qVj5Fv9danLdT1YH78h7mTUY3tVVG8",
  "key31": "5rR3MoTKxn5rBwjEQJemeTKL1u57HLz2BsHcvA2xn1MPdSpCgz9qBFf6uAJDtq4mhPCqaWgUQMEKWHpxsfkh6QLw",
  "key32": "8zZ1Nsy3aton8JjvJoFFunpmkAtjjXH6RY7QP5jZTFFwDJgcqXWzCJjF34xSQ9ErAcZVpcvabQPvmkyUrJ3qREZ",
  "key33": "3ubee6ELe8pmHsXMLqhNqN1WvB6WUpUEChAZMFVYakJ4VAWnFYg9rWXKQNmDT79MBRqvbs3Q7PL1TKgFqggWPyea",
  "key34": "4WoyeRCTwQeZJGwCxn33suTHAGLqvBaK86BQZqNL1M2DueMW569kSbRtKBeG2HiyTAsdWGkyp3uUxkf5jKfNNcWV",
  "key35": "5z8GCRJaqgRAN88xZrcbz776zhoLhfdw6SACxKCawUn23rTWT6K1KGN7mx78Eb8PGHaV3PEph5TwA3HFHhCXTxA6",
  "key36": "2PSdYn2Jid6xPMn9HzcNDsvunKWDAkPm8ci3t6TBcJWVC13hERW5TigvgxaJUvocMPQv53WUvJ7hJPDdMvH4xEFn",
  "key37": "2bLggXs9adMhMJQXKLVdoScBAeYeKubr98GzDrHfxBHPrkd9aK12aujmn9bHKA5HoVLXh53DisceT7fJg6JG19NM",
  "key38": "24cjTejWz7R8FrdZgg6RVZEAjc8w5rbWqCo7s9zPZtWuUgkmu1GRxrihRDERPFPz2tZLhwjHbYAyyai2DavhMgKY",
  "key39": "64vhhrjshYbPe1LD9EX7Q8AQda26yD49nRmg9dTxPod8g9Hr5VGN4NwyeG1dM7DG3tvDXtNvCrQzaG1ZVnuMVDiQ",
  "key40": "2s2DwNi1i84SE8wHzgvFPy28CncmvrhZa6qmnKZiyXujwjerDzwrLohFuSw5J4YrNRyAwd2hJsEfKLTu75qGkZTg"
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
