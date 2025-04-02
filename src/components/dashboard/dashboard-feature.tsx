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
    "1RoDonJf2Ukm8Szh9WDCmoxZaDMRYf4ZzZMb5P8UQAjyjVcBQgKMpqVi4mZC9JBywmpEpRFaKymoHpAVNzVU6DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tuDGGMNohNz9m7tBdUeVt3UDpn1ut6xkJL12T5uag5KkCQFKaHP8QLXuK5Pjk5f9xfMubbwa4LHNMjnW4xEKdmg",
  "key1": "3BBbc7bbfceZSgwndr6hkv1dEd7of2ovzx8pVGbbV7LT9JpXpAP6QkwYYP1jQxQSqNUWSh4Zk8pq3qxcPy9VHoH9",
  "key2": "4qfNSph23QG2gzQH4bCP94QGqgNoXRkAco95Xt1yaQT33Fo2XUpCWZbWAVyG9HiZh2iXpHDH1sVMYLLKLjsi23He",
  "key3": "4RAa8V8NSLaaZZe6TU3QUvQT9DqEZcjsYWHvLGW8zw51dy3BBaCtXJ7PnaWWH1XiJHrhHxZXLZRNfc856sSjRWnK",
  "key4": "ejGdprZgCSuK5yUMnrDTdHwoWUAqWLtMk8mKRDCMkXiGR858rZi7vyfV2ZLQBHFYSeGnKVwAQkKC1ovTeoV3caH",
  "key5": "5xkAgyYSzhxJaaBvAApyhM3uHVscUHxqvgPyxn6P63fhAypoisvT7oECKkSG9exkmSiDCaqRAJUEV7CdmubhG3n",
  "key6": "5s51Gy7kPmmjaQYnxaQMvje3fj36VDuChY2SUSjtXJoWvQ9xd6PdRT7vSqhd4Xgp6Jsn4NwyhP9jbwNAxTNAncuA",
  "key7": "5sVzQ9rBKh8ahzKfc2tib9xWSMR48VqrPR9Awgi4hQ4RiwJJEmtjFaqcLviZcWmGUZPsTsnLJLzAmRT4eDPwf9hD",
  "key8": "FPmLLr6L6yCE9feRa4z4kbywmeiHWdYmxWHJfheQXfd235aJAtcJbNARvZMUYx1XUk6KADGQ2PBcMzcppWfdnLS",
  "key9": "bE1qHMDPVF9YJnmpEqdePVn1cRs8imtSwqvwevmWLBPSqFhzWLaCrACmFaKFEJFfASVMNHfKtxPdzoB9UVzWWfV",
  "key10": "2xbVpCGNrMJeP7phXLDK1Zjm7wwYYgVGqM5F1c2YCivwNf9t87PLUh1qWvvsgdpUMGewnARE7RMEvZ5Bu8nSmpEL",
  "key11": "xEGaZrgGEEqxCkFBvGi5AUEyaC39LCGgEVGXnEVW9wDoFtmq5Pf4hDY7bKbNEaMrHpyNKpi6npj5u5MeAddxNHj",
  "key12": "5EGD87nRUDzvQg4bQ3jHzGD8c9c2PZNQWcLgQbBfJrUdUqYtTYD47KCBj48VSpVQPscNqJpm1xNWMohgRQLWcpXJ",
  "key13": "2x9mvCTF9GHbN2gH82emsqUyUH36DL5utupLXrRDbN55wNzSNjtHJ97NPyfCJ5YM8aJtzy1reKUeENx5XDPy3hVH",
  "key14": "3MEho95xetsd8yJjwByCgVzoka38wZqUSZ8Qg4f7xV6ySJvEY7MRfhrQg4YcbppBYXAEgQz6wxaaGerx99Qr4tQK",
  "key15": "2qTButMUu7TSxNgx31ZjWBixNw6Bo3G6GezFaNy2b8U7Q9ZeBQ6WaxzosjXkC1NGoo23cWh3yPoV9i5AbkeGKojv",
  "key16": "5jCiQSBA6DvCQToq3Ex4ajsC6h8e2nQuEyNWFFKWS8iXo19Ap6LatweNKUQRLoPHqFfd2b43MxDUSbH6EoFhU5dz",
  "key17": "5xxVYmaEjR1KFxrn1gBZRZ97ywb2UKTDFe2tqiADBU5wK77jRSSzK7n6LG7jm6fDNGNLC8ryKm7emBfCwDWGYxwZ",
  "key18": "2SN1TmuKXwHyAdAVhG321YQ2Meh5RssEQXeCB7qh7ixUWBNQ777mv71pgt6DCkv6yTzr9T9gK9warcWGViKh3FRt",
  "key19": "2fA8jMPGUKSRHcbHkKAJKEPy46n4LfVc4vY928CEsqUs5DsVQQZSNaZiDbUB2WB42bY9hN3MP4pc19zRKoucKEhh",
  "key20": "4ivkVQdSpXWWH8hqfiBEvN8mR7VXeGaHYXMwr5xDmNdVwT94Xhw4f5FHi5GbQmG8Lk7ZHyKKjY3xUyMUfi9wWZe9",
  "key21": "3WoC3uXxGFxBfVKwrGtxaApxRTimuDM3b8gpqmijLR6ntKmvYWaR8dLCrbuP8uV4FhKeV6JV8MHmWndRbZAVsiS1",
  "key22": "vsc4BvHGob2APkfZzt7ShWoEG3jU9rHiBrbMbXS8qJZtwCcwd5KiXmVC92NPDLqhmw8sqTpRFqm5cZKH2uhvw51",
  "key23": "pLqiUdkigFaXCRMn36DCxUrah4vSBG3Fn2zC6b63iGQZR1urHmtdc8H8tjD12XZM7zYRjupsjhE3qT5meTiMFKm",
  "key24": "3ycueHNwmXweKceVzbYLJL7ZV7pe2o9eFvKvUw3AubbM71YdYJcHMj357g6y42z5A7416jNWJv1kAPD4pvFo4Xyr",
  "key25": "2MY9Gy7vLegw2BT5j46WFZvddF9GoRsqxq4kp2GVWFXskgJAAYSdCuLKU2sgdihYPmXnxxBcpv8ff8tVW7j6yWae",
  "key26": "2DRWpxbZduzypPpNUsL4qtXNn1M3uYtYhH36rkAiiPyABCraYHqRmrCRTHxJfzFQgfGtujhkzn4Mrhh1mSAcvXf8",
  "key27": "2Nbp8DV8EuVg6Mh82GxofmQEEKojn47Wy4mM2DVak9Ri5ypaFXbuSb5oWXbCt3UC1QSmkgrkeq6SUwZ3m6jJ64Ce",
  "key28": "5VVffQN4SpJcXezd5ugAZCQjREA9EgNKgTvDKCPunt2zXDjvKVn8djicLvCwnRmYAsn9WVE6CyLMsC5sP9xWegfj",
  "key29": "5yYmvH7b9KxtmVwUdFL2fXp7NK2VABQRJvn5sezDxXh4WAJDjzR5SmXmbZYaaA6cCcNVKeDzaLwkXQHPeihdXjrT",
  "key30": "3gxd1A1hAHzmhq2TmsCXA3RpB6vq64PkhD8bJKMDwhqnGgwHcNens9WTXmkdMLyeFtCBZkVoSUimNwf7yWq1TXS3",
  "key31": "czkKiPLKbAHnaPSnKvhfRHjfouo8RhZaDkMmE32PuiJykHMJpdSgEJdSvjFDxzMYRKTH3sbFmNqmCydAytSkY6c",
  "key32": "29nHuRLYSpaWNSzXKu6iNkEh9VSrQLoBPd8539if8kXorn2HvzMSyNfWLm8LqAiae6r8uh5S5XeEyu49jD3AHyRn",
  "key33": "4TCJtH8X5kEpmzNDKTUeGkK5VKMZsgx8XD4hXX9UWLYGRAx6RByY7YCp9RvaX1KCRCpcK5J1iqMdcJ9aquumxNuQ",
  "key34": "26A16vFVNtMieJSdh67PAQQURqjiHqjAw4xFDA7WfxWzPHJqjpoLik3SLkPMKdp8FjgcCFdaBbQASRwCfmek27qp"
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
