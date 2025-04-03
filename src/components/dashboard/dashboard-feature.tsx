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
    "48nkNbWpJ7Z5DkVmAHuc4QajbR7swEdxH4Ae5nVvS6ZNFoAv893u2eFd62vhr1QeckgJ1PsTXwVQcfBCTT6EtHrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hUk6xr4QqK6p3byVUbRCttUMi7h8PNNURD8FykwjVce9Ln7q2ZYg7CGUbbGmYrDDLXXiiyA9cuPhns5LqQpW4vW",
  "key1": "hZGXRpgy1Ls5YkmYD5EAAftrGu7N5PAUCiYTGPR5EjcAzzFHsCk1KhoUwhnpJZsxwAvFETGUPCQcohQNG7crEBM",
  "key2": "3x46h2HpQJwM89YjWSaJFJmdjUsD1VTbj73Bza8ZPJzs5avbP2pnD91e8YiNnJVXatAzDibYzfVqLYUqeT3HEBAk",
  "key3": "3i9qSDzDrVWu2CyDnejrwkZ5vHXR9PJSJaXnUJooZvf48WZJmMPE7ib4QgszKrcX39vRQkg5gRyr7snaLjR5Qc9w",
  "key4": "5M7kezj4WA737XHwmat7yuxW6mnGNbZYzoGsouRe23tYN8PP7Vmj4W97XhX3pze35ESGJQnNo3CuvWKj81nsDZHW",
  "key5": "3a9po1f1aCGW7bJcDifV6ToYvAJ8evyQWzmAoBxkcFCmRjKyj2e9GaUzn73AjXKATbQCAqnQmWQoa2QEmff83HmY",
  "key6": "jHGQiSKoQcgw9cpw8sRWduPGpASA3MSUee7TENiS3dFvg1g7P9jtZiTwzP9qiTnPfUVw2Z4BuscVdvDgFR883bW",
  "key7": "8e8xGv1BwXDV3WbwEQa5urmsMBHUGCkFtihaWDfaZ7wQKc9E7Skei5rfNMkCZ6iJEi3Y99bunUPS8x1EwG1p6f7",
  "key8": "5CTCMR1JeZUAR4c53Y5ujrQ5W3KzJ4X8bPuw2dND63iRqwb5VUDt6yX6PLrn33BzAacns9Pnwea5nCEkwhgErSkL",
  "key9": "57sqbxj57dAHFzo8nJKgaLLqsjJspQUzhMYVo8gCUxEkGFJRWXQNcQYxFVT7K26UMJMwdaK3S9s7nQ1TRq2y3aDL",
  "key10": "58p6QJ9irbpbKSxVjWZKtadMWwPCRFiszPZteo3C7eWp88ptWaFg4Mp1RBFahxi5Nx9DD6B9q8UDR8ZJt2dTBMns",
  "key11": "2weyL7ZewYhgNUxeAjq4NR9erc1uwNgYdouKv69asn5ZhUKVu4gJM8yY7VBrjr6xDtpLzKB5SHNCkYwX3DpeFmDE",
  "key12": "4JqxkdSuRZkp4HGkTZr6Qaph4eMHVFWYa2HcWto8hZLmF6ean3w5E6iFz2uKPwAAGiLCppZbk8HLBqDuLQyubBr7",
  "key13": "2NAaZTNBBCbJLGjWJGmZ2J1L6ygxcf819sjMiBTbnv7SnjdWFNhXvfDcd8wBfCiovJKgCeSD2dNA1KMxLEpJqo43",
  "key14": "3XrU7Touk1xXotqi8CEyJDwMhCESkwiRhMGicabxPGA5C9M3cNq5euJ71ZALsqQUbumpDCMNspXBdbhQPEEK3ka6",
  "key15": "34jwsrkpWVo7SCkyaDsu5XRQ1a4n4XQEnT8zPMiryb261YphzQEaNipmm1M69rJw34tUK9vSpZWnT71ZJGprchw9",
  "key16": "5CucZRsfBC6MThPRd5P71dnZRqNuPgiB62fBP4RKqJeZyGzH3WP8YzSFF1DEc2pDWS271gNo14AjUfuHWmZngRKr",
  "key17": "3iZmLnYtJ8kYPVq193AaWGLog4J1W38P7tHWkrhz5v64A24kUfEhXWtb2VpdAbSsHwQjSSvbN3Tcc6eZQpHk4t76",
  "key18": "Wahjg1QCv1wkB4FqY48cuayYaLT9ZmYAonHzEkd1Jw32z4ux26tJjzFpdNemmbSbWP2kNuMEC9TLHEN9FaMGyy7",
  "key19": "4Gz5V8Z9nqoiH49SvLRTbhasQRw9P3kESm7fwNQGeqFd8SdR6HWH7tZpnE255GMDWFEkthUJnokHqzU3ybkm77Vg",
  "key20": "5fsKtynpVMMr8VrWDz1gMJv3zom9NFQMKsMXsBKsp93FoGaYCGFwr9RWuFQWn1mZPdrJZ7VBoxAsR7gG2M2kAiiY",
  "key21": "4wAH2J14V9vXzBc5NRNwfAvejpunc7BuGWJ5UKmBsa923kFunt31kGGBBC27ZfBHgvokZqsAv6NgCzRiB8oFogrS",
  "key22": "49W6visLC1dUmoDAx7j2hsV2WK2Xhogf3EVmfUDSNBC9KsMKGM7E6cY1EnpG71cBBSjjG1KUks36b9bPgB66cnr9",
  "key23": "2yM5emuozPTCWpPXwCzUTJv9i4TSmuuiYKMgjR2e61Hj2c2Aj6aFcWBwX5nbdKGsVAZceBZiKmTNVMwVbztFxLpe",
  "key24": "4GkZrdNcUT9xheYZ98HPC3vqJHbBNdsamU3Q6Z97RdCBnifm1uhmUF3GMXvZBbJkbyHqLirXQs1gcN3uV7yHxtFX",
  "key25": "2973JYtBby6iH8kHHQhuA523eywCi73NaQEFvk49s85iVBaNrTwpeJKnu9uhkg8ue3B3rT58moJyeZ2CpukhRwU4",
  "key26": "3MuToNSesvCLCe5ziHGDfqhHBQqkFMYTvAoH5Fo6BfszahqZsd77zabv6zEJGjb5hzUMcd9rcncd2CdVRh2YnB7v",
  "key27": "353vLihi9BrqFad6btHFDHhysHf595WcNi59ahJHaF5k1YjPgWQbiyKn4odMe88TXHQjqXeCnte6WSYuHAomJ3pt",
  "key28": "bkxPoCC5TLvx4SHTULMZJqWw1taGe77tbzifqd8q8fR3REwwrZYBw8mmWArJeYHtS73Cb9MFuBWnc8AwBziowkJ",
  "key29": "84t9cRtFa75JUGHQCAyykDF6tsEwz3W8FcFw5EFfN9EgBaYr3m85paWoytHs81GkYbwy8nBtVa1ckbzQAC5ZYQE",
  "key30": "5ZMGtHmaqyqi8TTqZ8CedDZHE2gexvVF764hH7yvVPFYcghzKtYJSsNNXtey5LZ5VSAbWNEyihYJuNDgKgziQf7u",
  "key31": "5fadh7qfR4FNr3sSpAbXxrfezNVkZzr7jwzvvukcaz5vVkumpmA5Lte8geZE4w3qXdg8MFBYHzw8iQvbbQmsqwSm",
  "key32": "2pRSxbToxRYZuHTkBXxBRk1HFyFe8zJGA9ry1yvmDHqEiZVFQp22vKN4qRqfyCdhus46vF9ywj7UdATufQDd5jeJ",
  "key33": "4GbA7WeFYTUhN2mcdytTWeXwLENKoEXWuCMs5BjTC2ubmgfrbbHMbNcjgRqEsz4dVdYCzmczbGgmbKTTD87ahe2T",
  "key34": "9uRjZbVfXBNQVjzCY5DDQvaiMiAEWLk6EWdmYXNpx4eeb5VLdJvLpD8E4Pi1NXhUbVBuEg5dfwN2Ltb1g8DSPkz",
  "key35": "5EqsjJLPdGZXY87zYTQ8uCEW6NvNx9zzwTd3TyPR8wJBRDDtt1Qgw1ezgxrafYBUwfNgsjzcGwAnqY8ixiUWAgYo",
  "key36": "2s1mbPpGhitaypJBS8jwVGh1iA79hR9MEj53fsLoTAPYhcsHNX7BpRjCvZpvk2e5gxVb67A6gpFNEhuPWUJ9Macp",
  "key37": "3Z9UmfPJEbrtDf5AssQPQCxtfQ7LHGhceeMPEkazetvLDUtrPtqKCS3swmfU1NbMwP73XNZaw9eyYGt1cYtAZDjU"
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
