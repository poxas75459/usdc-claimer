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
    "5KE4wN32manD8PeAdzbYSHS3dq8DP5yUZU48EuLTCSSqQLqZUMigchMpmjFRwx4pkasRkoVoyD6W38UvNM6NzFpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DG9Acf9rodUpC8V5NhZaw3tsTV6iEwqPBviHuB2S7SrGFza71FxCakqkDhibSH83DWFRwuwagJbeTikkB24rGu1",
  "key1": "298xxyz15pimcxL53yDRnB2xkeexXgXF4BMRdtCqYVRQDMSCjdKhsNKVmjceq6BfDmwKerFM2LMPvrayhiCcm9rH",
  "key2": "21HpWteZvr2dSRzyuKDkvGg1JzA4FpzL6CCNADnPQLcaVxonVESiKSpKYL3R8sjoNCqFx7dCmbFbKZNm5K1j9Fee",
  "key3": "2ZmEKFjAwLuxv8SQXoVrDHtk6shBNkfzYbqZsiupPd5j5chXnFMUTwdr7L85C255bisxMe6NEL4V43Tun5NDhNBu",
  "key4": "3jG7xUQEzzGjT4LWMqb2AFEaNSyk3xCUeN2Yt3p5M6L59xfYabWPQVGSnhasFmqJrmCQWBXUx6ubLDhTW21vUsLu",
  "key5": "CEhUiVRNnFJTrhmipGRpffbt2UEF6q1HwphQMT7Rd5rEbAMDomb6xwSWyYKxY13zWYD4kQK4DRjfSxsavuwxrMh",
  "key6": "31vKvE5WbJovA2a9xBAZR2YbgckrNt5MngcFix8ax1ScHUS1MapqgVVXSqXTp5kR2Gco4fdJ5re7EuH8UysFscKm",
  "key7": "4NQ1eq1BhUwVpsjHDdYGTVQxJufNVxpax7ECGFAD2P3VSeCLFqHEKvgE3Q1SsYhivfJA6RRbCPimhtnsFBgZgrJa",
  "key8": "35bTHqhU2kxBhw7FMYy5YZwYjNL3mHZun8Aof2dY5gzpBdzHvNdJfKCnwcMP5RiJyC1DwAXrrEVz2U4ofgXUbYWH",
  "key9": "5532dSdghDGi2TaHKRhJEJRrpXnf4erLszzP4dZYUJhFEYvkv6aCc43pgfVsNsLoRYcqxphXtEDtsGWpgXo6Cf2t",
  "key10": "2EGWaCeKCnko8Rn6umQmvmoQY3kgcmJwuJP2KwVshZRc85bqJMc3WCcPTpYSnaLF4URLasaSThT6fN9S9pcsCie5",
  "key11": "4GPjrM2ZM3fRYthj2yi92hMcJbMEEHboL3PKu9hczqabauAY4s3zBX8aJgWy7gRW97eq9jpYLbJmBYb2uDs4q1qc",
  "key12": "3k4LeCiE5TeeLyLBFfqm9WnBjH55oXqHhHXi6g1GAhzZUE12xcVB6i5HycuQxoubzK2NzHohh7fcieFqiBr2Fke3",
  "key13": "3x6ff5Bk5w95Uf5fZvKy9h9tCJuU3DESxuskzjGPr5wfSoXSB6MsCejHFAyLYRSVBRVFFVGY6VQT41rGuvxpRKHP",
  "key14": "4N3rx5Y8tAVsWBRPvxndmpJm5UCYgC3NRmyEkqnQhHk3kyGFrxJMCmB7h5aQWtCa4hKcQVGHQNdkWmQSsGdrBYPC",
  "key15": "5iEvVq7jYoxEG8w11e2DhbJvfV8k25vfZupX7MbZPsrmPEGBXF2Hu26TXQDeTAscQXrbFDVoF9DRN8wtcpMKzGDk",
  "key16": "2b6voX4aa8U4T4zbrFQi66F8hNRKzHwiXxr7yEXHjijJmX5UALo1TvNC7mAavAtj5W9chH8fPMED8Tj5eAX2czpQ",
  "key17": "9K93DxKk94QrbMzxawRJG38q71irvPXPnmCUR4Ry3BBHa4Wk3nuJEAQnpbiso8xc7Dq6tVBCihrmKyazKj8PAVw",
  "key18": "zAZjRnVcepWSemMFGQz4YNVf3984imXvPZQaJUd7sp9zmjkca4mWfo4rC4HJkN78UfzATZ6K53X4UMCmHcBpwVT",
  "key19": "3D8NqKFcGjMu1taHjwZVQBiwjTz1iZUjnoKfSysnzdEGHehvzZ4qtNrW7GzsLSrJxvM57tW2GoH7dAog3HiQtHnA",
  "key20": "4eSGHNDWtFRyiwXYDN3mYbxhPPv5CQmycpVKDi2qBpKugZyG8HVEmzcinr6sTV5uuuHLWgXcjvr49mGesUZWeG3G",
  "key21": "4BeBmgYcrMkC9ggZn33hiTjWgEJ5WjSvYh7H45PdqwfRp1xwy7DpudgkLpMDSa3FMfftgZ69FD3MT98g4WXdt2PQ",
  "key22": "3ofHraXuix8T6XQyQBeDBMgB6mPVctQbCSqc5r38mxVsfv31foLVmejD6hw7E6UesCKpxBRraxXNCmTBLCfCNkMe",
  "key23": "5pnFdYbQchsRTaUxGys6bc9Rx6Touv2T3JiTz8Fc1igcZTeody5GMBuZXq2dRNXE18ka3jGCzTV37TDMHaHNnJBd",
  "key24": "aeZDqTf4W7vB6AcnWj67E5wT2z9tvVkub4tHpoifwiNj1FQcsukF5VRgx6DwdiFgL36VcbFqVRF3VVnqVijvix5",
  "key25": "3HyUKosAPe9gwgq8z9xprZKK3roBnrdjzbgPjEdmRizNU8Gads3FMjwFDrfekfphofPxzmxp8VTKHyQksTT5su91",
  "key26": "4gLQdHWKzhU1M2WUo4HrkbLYL2UU1wCeLooh1Z45mwZc63qTKvD2jF41XbxyE3vRqmWQp5HACZjKkgFpFaDT94aB",
  "key27": "4FBnpqC9fTn5NbYj8oSoWgxfgBkifcBVn4N8NS48e37rsbBBa6PW8DrVYHMP9FBMrnZfwX4k7GLLzWMo7vGy9JdP",
  "key28": "N7WndeYHY3im2fV7ZbbBSkhQ4hgxCHKoFzRLXqmYBRSck64aosXNuBet8Etwdd1wdfj5XprkyPcHo2GLN7ywDrY",
  "key29": "58sAwYQuyHWh17cQjcn7VdfPU1FLu6w3RzPFGzmvXh35LNv5URamYXbUSQnNcBqxZyC9UMJHkVcsHstddPsfQNKE",
  "key30": "2Rfz3hZNiRzUj76sPNW2CT15QMtavU6QkNYApG3MiyH2MPHsMbsheBr2TwfTtBPizoe5pKhS91JEa8bMezSnpuQ7",
  "key31": "4hrWHwvZN18ymYmZFhiAuNFRqMtzKZYc4Xnw32s7PsGSSbPMKBfjdaGcN85qu6XTFWLKCcN5TetouWMsm1KxZ3iR",
  "key32": "4wnRrdV48sxjwWsyTPjaDZSujSzzq2zbDPaAW8ZiMokSH3ppbSWjzV8dpBFf2b3bbWAuKaMrPbeLEEcijMgqLWJp",
  "key33": "3y6bS2ytuQK2C4rBDTXRkBLiwx1mjjxTjJdi7i8U7B75g42HjK7x2zJf7ZXCe8LHtHHwtGefq4DTQq7kjSzR1nVK",
  "key34": "24PkFzLc1Xq4EEKKqpxDTNP6Les3eKmi8AaXa34QLKrHsEiTEQkBQpcMbK91GM4w1n14foRbB7QHfvt8zWoWfYQ1",
  "key35": "RSnbrY8Hj8WXMK1g6YjrwPw2aoQw9Q49hQCEkXfX5VrWA6EDNSKrFTD8gi5kJ71qppojxrarB9REiqqvuUnDM54",
  "key36": "5RSjDgUo1FiPuCg1y3L3EKHbMqZuw8WYrez2ZiLjBvBJrUSsWDcZkTynz7AJ8myBJKKM5NrfJax9ZqL6fEHKXVUR",
  "key37": "2saBLrSr1EmgJs7odyJddhztzUm5rk7K8162SsyaidkKUXLVvHnqbMFtb2yYLmawqM1oRUribhQzKSAAobSGBL2m",
  "key38": "sW8t5Vwni3MN3Y9WYFsGrvM8rttweWiacNpFeCvTSDv2dkcbLRDYjFwPHRJzFPmwjj17ctNCxFcLQHXHJWGJRKq",
  "key39": "5H4yJLHUvrw28dwPHdvyXy2qbSGURYyfABZ32n3VEWu8GZWhJvQPVBNVXLHHQHVXrJ6TLL2xhkRApu6QDe49AkF9",
  "key40": "5uzj6pwHinCTfBMEbQkWWTmW7pz2tm2ArCmukV3AiocpSnbZXMh2dAS5JDEgudJCTdixT8KWkLnAhw8TkwxakfjJ",
  "key41": "4f8juRGNVeDHssdu59c2A3VgoACkSYZaTEuqsdE3cd47zf84Ek61cCbYDJPvoPd9K4hpfYggRfZn4zbk9UvDpkmA",
  "key42": "2uafNs7nAWtQ8C6fc3Jqi3uGXzaZZj3HiEZAFHFg9wgh1n95brcTQx6gxGaGNRvXR5MxSMAenoKCxvjomrJGS6yb",
  "key43": "339QQTkCQcqM4pqneeMgF7n2XraGqDkFyfwLcNYFdJNVtGbE1VoQZaffp791fHCK8CLFCvjZQvMCmmymgriA6K8n",
  "key44": "5M9Ks9HvKT2y1xjRXgtpAztcVL7oZJc2RVSTebetjShR4cbGfgnzcDDo6TrjVQfFWQvk8Cc26qZLZAmY2q12MP1G"
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
