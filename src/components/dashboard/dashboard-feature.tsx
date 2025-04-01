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
    "36tpuirpEJTX2teubVUtbTeBGUNoRvSHYZsuJnem19UE3MrDmYx3AEjKHkEefTpi5tsE764nVnXbhcwWbevEbY6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rKWBooAdzefAaRDKSvtM9CHNbhUu7HGGEt4VnzreChvd773gWHDTofbWAPq1emEVcfqVMPySnmXy9RufYS8d6oi",
  "key1": "4txgHQ761uYFidS2HpAbHB7fXbNz1FfMCyRgSKcDz3jfh5HH1hEMbqR4pXEWYBEjFiLnKVFmC6Yugtpdr5Utnt5h",
  "key2": "44HNbHWkM6ifupdrpoP73YSf8pNiQHRipne6hDFpQHrWSgTVS2ueU5fwnggHXU8Bq6qy3wAxLKSm6S3NhfAEScsW",
  "key3": "4cw2yNn2SdCkjVdKNw7TSeagN5vZw412B2ijUcj7SeWCmTgwqLkechqUoNKAahNyqzTJpZWtGWfehtNFXEAQLQ5o",
  "key4": "52MQxuP8492XC2hcoFHR2ctPc4KgGJJLaJAwwX7JVMVPWpM59QzX5YbnjRe4xovoe584yEB8yj3Rp3jPBjFFfpnJ",
  "key5": "3mhrEaWMgTGF8Y3pHXtoF9efN9YJen6ZA7rueVZN9XN97ajpG1bYrqkfkjqUzLawkyvBFy7BtwBuhkm8MpEPDcn1",
  "key6": "4KYs9NddUqJqiyYJvRtEYZC35ayY1DJKCrzPNTSe4BbiPHMbM5iUctZbfQ9XZ5cDLj6pAiQNnu5XjrfdiRsHqsf8",
  "key7": "5fNpxhzaAv41bLLrpNsXe97CNiMF6uHXaT4CZxY1fwDA7WDnzPexvwuRq7EFTcsjpvCnq6iCDRg78cQtEHxcUrKX",
  "key8": "397iPW1DcThfHE4k48qLA1tHVLm3bEj5RywTDYHG1tRmyX7RSNg6A3Jm4BMJtLteCoW69J4tFS7ezvBFi5SiBnYd",
  "key9": "4v46skiUpUoZcekTFNgRfTsrGJzenDTMxK4foibBHdT1P3m7kzLk9fwjXKXPbGLEmpgnkr7Amy5BCL4aeydwmaUf",
  "key10": "5dRc82Rq5XqeRzPp4CSQFGCiCKkXartMMhnyf3kfzBHTyqCjkoKjfBuPHitGUQm8DV6ENWihCrkj47whjP98fasH",
  "key11": "gQ1oe7qv2W1VZYW6msTbcMDhCTbeb8wFvB8oh9hfwvAhLKrRGwxMc11peB1WDDNtEpmsevxZ1ZSJGP1Lw1dtmc5",
  "key12": "4BnusGqN1ha7dwtCB6Y9hg1YjdGY8b3jf7PVDjYKEpYLx4jJJDBF3rdnCwe6q66L3eSNnyBhtxaEScxNDQkL7P48",
  "key13": "5H2qLNY2G5AoYDG7kUZDHFR6GskFk8qC5jVrztSsL2ftFXSqUWx9niGvXGkEh7XjVAU5h3zp9mHb7K7xd6dL3atq",
  "key14": "4hKhthcp3UYWZuqYPpdU3TFXagKK5ZKDa6tF6G6T6QdqcfYfghks4VwUiP2SWx2CzYvncFVdaX8ECCXDgB9BjXdc",
  "key15": "5sz7oH6APFtpoWV7mnfjxwTwu16rnfT5hpr2uqaBLE3Bn5vcWM6iqBMRGLJdJbsnzscWcjsvoGSvn7Lu2Hg1ohGQ",
  "key16": "2Uc24wRVj4i5CdGC5mmMFJqzs4iLnhWGDjhYa5bYKszVCnqBpxJM3mhezRazJyMLQFEiYMfnSyFnEKUG3iyxNfbE",
  "key17": "2FTfsMVTD2RNeMTVeUGBqWAiHJNCqGeeZkN5xKkv86JVEuXGA7YxiaXtVFusT8wfhNr4WUJ7BdP35uv5GKKMWZuW",
  "key18": "4yFefp63aasEYteeTRRMbejrWFA8zKs85GrzpitZm2JEwizo1ihRbGpvYV7DzkU8JxCzeofzpCDd1rY2WvzU2Wjq",
  "key19": "2HCm1xYZy9nSJ8HKioFHiZtExyc3Eq11zn6ibPdSfSitCETmUL7NYGKoNwxcCcE794qdXMMtv5p9hhHu5HvsreaP",
  "key20": "2EawTHjGqtHGZZFuCb8Vv51eHYUP2LAaFEWSPRfjdUyX8E5chmrMXoAXgLBLEgQZavBopnjuWUVFSyK9xhZZDCaz",
  "key21": "mbvwAkcQ9SKgEq1MqEC1W2hF4skyAkY3mPnd57EcmQSiQStczb3qMmcev5T9BkNMJf9Hkj8SGazvjHqrHRBZ5nR",
  "key22": "2yCMStSkF2w4KLMXhmnySzVMgdy8mBvNVobwHTTHumx5MmxnvNmAJz4AnvQ6Nhf2n2QmmZRzZpyeGkqMJg6QLHmM",
  "key23": "2SKMsHRrmyTwpVQSj1845vqx5Cxp1JeJc6Lf4QR1RJ2jCWBLhRggt6VqPozibMfi9nrfS2szjpwZ84FbEHmWzPRs",
  "key24": "3S7xiWkAnMwQENtvG4V4PTtHcZ9Ryt9XgxQqbVRt5JS9qeMT5CwETVWA3BXtNqehcWEMjZH5EACJnaTr1yFdskd4",
  "key25": "AcpC4WLafAJwzeDf4Yo7nJ1WxrER1E6j1aPegQWD1J4fZgEjnUCxtHJH6G6pLAHSAnAGnBhHwgJ4wDt2ar34bRC",
  "key26": "5pbH2ZHxUdFeZxAbNJVeL2P6B5bAHMNDALBET3HvQE6baLVRRgBZShP3FGSMLehCLfTUxbKUELvEgG3CepWE1tLN",
  "key27": "FgFCvzvY7tqKYJ8RdnoTnxext41erXU2AbAhZQj3ih76Zs6iTTeSMxL6fB52Ho6DNzAYG72LR2x6iYaAUpEa1rW",
  "key28": "3tR21Q7hLSPAdnzTSTLTYzcGtFncxjczBWmt75PQLw7eY21RQXmGWJi5CGKEzYt8QZeZiigQm686ibNpNcBsX9UZ",
  "key29": "2jcwFyZ2VLacYTC68umW9Grc7yS1aD8wPhumCa6JzDcfns6tH5JLFMHxPWomXuv8oGJDbp9kmMFTtrfiAoYXTo6N",
  "key30": "59TY3KtUCE85ESTmWaMVZcqL94otm5SF9WsjSxboenxhk2tGViBBRvwQbvHn1ASrJWfrDyBrEbQKk3aUNbpk5LaN",
  "key31": "5XXqdZwkNXzWuDHDuaa9BzVDp8pnG8Z1ENiP8o3RefKi4Dg6dm6wUHUuWa9Wxh6A6RJcVzYWET3uWY6gWZhkQR4V",
  "key32": "4GVyvm1226YdfcvtwfxtGyyMAyyp6Ta55QvN4tbd2owLBegBah6tHUuKN7VfGAK7THv5yupnXkCJM4hSNfX2mgvY",
  "key33": "3fchMEMQz8EFKbhSA9qLcSCatau1eYVMwCf3oLPNZZEeso1FbCAQru5V4bJzKCxa4JLukwuyDTor3LwFSdkmukkr",
  "key34": "PL3d281BNFqvhH6izqTLKxybSykY58WWop3VRzwzyNJccg3pDcd2pdy6H5aY4qKFwDU3sFsuCp9pYZZQ5c3mQZt",
  "key35": "2vDwhWHeHSWr3347uzU4zWncf2YicApUrmqFpTophBqBv6nin7dJR7aTP2GZumjCBHK9BK8zV7hJJJL755V6HMHH",
  "key36": "3ZNxRDyfMUhKq3gr38TAwsqPktdrj9VtGten1U7T2A7qNDLMJeh2zZAgVGrW3pU8uyguWiWSA97WdvCSm32TJ2PQ",
  "key37": "3TYK7pDorkLJe6ViHDFt2EjGXXPUGy1bRBrZRnjs8AXLydLJoAicF2JRuwYsdYLVzPzaFaXRnU2111gqibEn1Brb",
  "key38": "5GwH7h1UuqUGyfYQAUHTL1ttiyzPJD6qBfFfvjTiacx3E2Dd5n1rMixnS3JqXMkKTBnUnvCPVQFU7g2LHmkov7MM",
  "key39": "pEE6NFJHrgQdWCAQQD3WTwoqhyuGehpsRfRQduvqzCYhKghUn8htA27GxCLZRwix8BwiDft8sQjh9LsHdvNh5cx",
  "key40": "61T68a2GVMzYfGMqqdUpEwL4TyTPJq2eMZY5D6pRroxGe8kBaHAFqkYG6oh7hvJGz94P2FQ3xU4x1ppq2uV16gVU",
  "key41": "w6XTrQhoeRdxHwwhooxsWJUn2AXuDAybGzFv9CCH21CYDSSiswzDkpWdEi6gW2t4RFQHUoMinnk3d4CuVRACkkA"
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
