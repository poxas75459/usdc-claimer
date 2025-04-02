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
    "uAMUNy715q7XuRUMWd5Ftw3cT2FFSP34NF4hamgQZtBJLnFiJfz7VQYCgSWnxWenccKUjuSihyPpmkAS4ZYjeTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PUmkG8HtRt4kKz6GaztkFAXv77pzDzQtCpQUrXou5YNTsZYnGEC2kWBYbLQST2pWLQRtBxUXgtR9jhFCPjMhkgd",
  "key1": "33aEDVCpkKXAXgkasFJHBBz8N7TZdDE6GEhHBoTWEsnYYajKK1VLcM55RCbz18uvGBRbCmEfJ186Y7GvNPT8uSpo",
  "key2": "3p8S3L1Rhr7nG9NnrWtLnpheJc6tBqPK1cjMktd1dS8VALk3W7uLiqVKf1P1pmcxZHwmbBm6pJQdJ7j5qynWhjnQ",
  "key3": "gJjbesRPHrEu57NumcNJMBrhHPDp2qCvBMpNizSLZfwDs2m7buT3quq83RRkcHdoF2gSH1jCrZ4xSoTzHSqXt3m",
  "key4": "5ZyqFaRDurs2HuDABN67hxfiHkGWxUHNSC7UBmXFnPMnt5FZ5mhD7FjyezBWGw4F8wzBZnYGd2TSvWsS78FtWCFw",
  "key5": "56PoAdJH3JkYVM7YSaezysmgB17UsrYTgv1GUSjEsSSLEtVdhr5sqk5PcDRqyBdjTTzQokpeYZixi2wvXHrT57tx",
  "key6": "5cfaX5C3FqByVihSQLzG5TZrTxZD9wAh1c3CUAZawFcGDYyYNmTiWi3XExhkNKzEDqCRRgAtSrekGRd7YVEkYJzG",
  "key7": "4hg1XejCBV43heCepcj9x8SqjDTbpAW1Cow2Rfg9G8s9sKCPTrks9Sh5uRHULWBWkAagLTvxBYmmEpFuPx22Mqwf",
  "key8": "5QbowWXofEoSmxViJQUxmqpipdnovfLnFpbJc52p1gE3UgZQsZAdGSpjXonZqGTjbdAcxgL1Jvrm9PprAypKTTkh",
  "key9": "5JWLLnMP5fpAcnCBavt2mJfu6Rv9PUUR56GzAYAdxzGTxhBt75MjiU4P9FJbktEeQkTnNBtYcsrkCbi9V37WkPZA",
  "key10": "2E4cZRiFM33KegkpGgGTkjyuXJaMqij8GzKpv9PYo3kh8oxhTcAEbkhh2foxGGxdiccm6QMrdjTCNDdURvivnXmw",
  "key11": "5MQPcVWJsNUMYrAzQw8EZkbog9YTguSdpSE79ZGWUocHf9Nuhhegkcfh62n8s5jixc9ok8AfVKfbeemiCjNVFk8j",
  "key12": "2cM8kR5i7EEPJfEaRwLoW1aB9GZ9kTxze9ia9VFmBnoaEcCfa9vmDcbQJdEd3zT56vPB8QT49jnYeyvPUaEM4WdA",
  "key13": "2BPYNhnhH4PQMiMZShgVgKXDUK891RwivV2kpGHgYhDWRGnfshXuwok8sSP7zLfHXioQx8rLo2EPYbruaD9fMeJx",
  "key14": "5HWnpLnD4wriVRj6NzwHVeQVBBhBZmBXdbjo6KDey8VWeRT4ZcCrAJ5HChRL3KAPagFjsTbJcVf856LzHStPQBcD",
  "key15": "5Yzoeu3gzz3SJAK3RicdLtWXQw7aqjBEav5YGwbT9ghggjXmQHgMoWYuDL5Rzbi6VVqxPfSJiRB7ubADnmjcXGym",
  "key16": "2M2kW683PPWd8Kq9fdC2oXerf4818pYBojemWHcDHCugxba2tTgLd2hoaGtErU4Aktk2hLcLTjrFSDL4V9SRXPTg",
  "key17": "5CT3BmALnCTtZEi7aqU4y1HNGKw81RybDtZoNAfRTboaj1JBsiwahMZqz1MgLGKqTiEBzFZgmevBnTjCMAaLh8L1",
  "key18": "ia4csLh7pwvoAuoxm2h2qPUJLh7rjagridebAoQaSxehyiaGEpG4tBB7mczVHUAY6JxWAxeeZnYJroWq3tFpJwG",
  "key19": "4GToYinA4JswJiDvA6LmL4Jq4kF4KWFLWRLY8sVgfqVhqdpTRqkxaqKi51FyKuuXm62ieBu1NDYW6JtnxniGmPdr",
  "key20": "3thFukm9EapyQhXJ1djzkR2PVpTWGbJKuKtB8cBEQ9hFSGSKKd6wFG3CfnELfytNdbkfLTRsjWJazPqVm7Pjg6Jy",
  "key21": "22s7enpEz5swokJmXxDjfoML3LX6txu2mtZPWFUSiRgyQtUjHLxyVuUuqDSkxJSWxzsMCkU7aV2ZaunHyvntapiw",
  "key22": "21U6jKevHcuk3wukXP8CoeZQKbaQERnjwkt7dBPpdN8EmwEgTDr7fpcWiJfGHCFbrRwiBUJcdU4zvzi7W2CKEy3S",
  "key23": "uiHsJsxuZG4TydU6b3LKNCfCX1cNiByZrvKY9HuQCC9W51mtLm2K4nHfwA4mK8yQujb6NqEBbL8tLWDwJiPKBBz",
  "key24": "3GESvbKdH6eaHPRrKM4RXzmPQZoShrYM3wgPeo8o2BzDmtsjRPeExZaZd1AJ8YUMgsaoA2PBHEkfGKR5fyZAaz1x",
  "key25": "47CU5dt5DCi8prjVpJoCJv2cKoq6d1PbcigcNf9nxcrFsrW4SWhSEgbTLMamHGeC2Pwkc1YJ8cHkKvr7xffXFStC",
  "key26": "4csaLEzd2A1BnCssRQeaDKkYok5ppWuA9c8JcrDT8pNehnJPJFGghS5F3dPQTCv1kooZYWbSfhWztufHV18ohahC",
  "key27": "5H4S2F9Qy4nYDNPYtpZxnpTtNS6mnEtGc541HYk4eXLq5UnmbEBvabo59BtNcb4AwJATPQPnbPNP5UW4Ah1AoRXg",
  "key28": "49RCd2vGgFtqhuJTJh45Sa2V32Wooj89p9syUP43qmjRPxH6urmATHTw1v5DFehmpMTGVnN3hWWKGmo6zKHUxaQt",
  "key29": "58mh7mRvcRb1uL6khAcfrd6VFtSMii8hdb8RaZX15bs1EJ3ETKUWjCJgai6QpTNDjVop7CKkb31gbxSZduzp3Na2"
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
