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
    "62uJQKvTG7bSfuHAMEZjZNKV3Gf4h5omk2FS1ctRDbGS79A1zQnuQ8JMZwYXLbR6Q7nZmLYkRXBNDzqpxW8GSVc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bzGAz2MbPA9jueN5L4rktZdHAwiKHhEvrShutamzjcTddHZAwLzeCjKQcqCi5T6wRuv8WsaMMNrpgn48AzLFak6",
  "key1": "2StoBDz6KdoZWm6oK17dLfLbucHe46BWten7dSkvoehZW5x5ZFHf7P4Ce3ZVGFoZTTTPuLjLwxKSm4ScF6PunFiZ",
  "key2": "2YUhmJEbD882AUMRj2trzoFGnXB9VXa4mb3jrtGyDxZjXESEAQ8FBfMNPHCqCNZPyYbdcNaQYksXxQsbNDFdcnxA",
  "key3": "4t95TF5xEAsE7b5bQPSmaxbpHCzz15FEzNfyMkAdqhdW87WphDohrFUVSRnRFuiKXaS7k49i1f3Qxkq2k573NEsw",
  "key4": "3jsH35DZHDdCEBEgxvDw8vhKBs3Xc5bVdnqPtyts9BMkxXotRVtoByc5cHnCffTa9ujZPEg6uXYVaSTHrGBdFwPH",
  "key5": "3ua82i74qSoSJ6DDuaovEA6VAwKPWG1Yk4iTzysjEg7u52BS8zYBcXvnL8SVSqE1z3iHuoT9FVKM3TSJ4Z7jTZtK",
  "key6": "zhah9jT2KXujs8M9D7FWFMrZxD52FJAQB24SXpFvrryokqEjgRduCezRTrgbWz6umZuZj89fhPWcBn7rhc3gBJJ",
  "key7": "53oE4TJd53qE2YWkdAwrZ5AmM2CSZ8VS1SJv49wmSXRCVffxcxFApwsfk5DMzQE68vy1kypjrGtQ9Gs69Dkk87KU",
  "key8": "2KD6FBTqDmACngNiZ4HZSKduhSKrGeqL6qF6hgBSrhmkGg6iBUtZbuAPgajeQj262mWg9RbUSmDoJX7s5DRWLXPX",
  "key9": "35jmftMg3mRXo6ZMyLHZRJv9uTuMapdpTjvdhXnx1GkZ6hjmgGJg2SXNgzZbCY4oPYxCg23ysAnSHDEJFJbhMey1",
  "key10": "46J2QRV5XBRP1jXrMiNReXdyk9k5sBbrYgneotyhDmNan49EAabfo2M54xDMMDgfrUyNCB4KxMwvoM2tcj6z2ueH",
  "key11": "3PwmJT4jXustbrAUGRnXRnYhnifXtkm5F1cUyPqnAkgfTi1PS5TuRGPeK9BgEPPUrSoasXcyAcXr8qLUBp3VoeSa",
  "key12": "3nix531XZheJUEA5ZBXrcQkMo7W3MctvYBFTsyAQfZ7wWyZXaKdi1Nk97Ady15hWvWNHUKSahzV8qxY2sugUBVJw",
  "key13": "zoJgyddLb8J384TBvzpjoW63K7szLwsZbJWw5TznhqSGnvPnEpVCFLqZFwbMjEDLuze3AiE4AxLSf4feEiLL6Ra",
  "key14": "5gHuWV84BSpZXscDJaE3TSxUZtgodCCQD3p7swsRCGa95qA4y9n6nQsb1one7Ub9ZKjBngjWRgzmBVdv3NhCaQUs",
  "key15": "5xYqcRDaWCfHzN8fdNdfETwGUXJ3vgvAqwY571BBBmfDYXyJSbkFzj4QZSpEQDRmWeE2gzBfS3hd5pv2e6vcYrzj",
  "key16": "4jDqw12Gd31jpMCx26qMcoYj1zBHrH44xpr3Qr7v7EP2p8w29cfNChhna3HjTAwNsfu1gQ9T8vCtK94W3vy5KrvM",
  "key17": "4SeH987Fsc4Cgt7cvmt42CvEZRjPpGmYzG5d8hsof19VegH4Lm4A7WszfH5tAnHaEaDBqfGA5dn6Ed3yRnkwfguk",
  "key18": "YWC1ABY51pMuw2nCAQ9Tq3yLG4qjw65J8wzEjJ3jFtxDbnrr1wcdGUJTFLbXA3qozaSxMxY8YLakPva3wBRKzoz",
  "key19": "35uPGVnQXfDQfJTYz61edhxnd4d3vnoS4rFqpjV3MzqGgLvheprhH6WFScsjzGEFCUYVeyVvwVWuufBx3aDqFgUm",
  "key20": "5CzoYYH1tWLRwLXTxNpswwpyu9bwotpeEixzuFNj7VHK1kXQP5YrokR3LU75KUZBWfWiwUdYLPWYjJrAF1zYztWN",
  "key21": "2YHQBWQuJDDSYniz7fmBueXzfBmN5PE7z4y9KSGFwPoKzaufP3KsXJZWwYxrqzTnBR1GZVDp6gfsAqEqAudzzZR",
  "key22": "8KwxP9h1rWHby81BGHzyMLE5xXEdexsSzpxdLLw7GosdUa5uGJzP14KavYjnEMCv4GrX4jvuGW7qDLX8qCQznwa",
  "key23": "28wMnivvM3G2rfxEoVhM4LgUA6NJtWoDcY6kp1zG5qa4KVZrpmdJjZb1K3PSKwp4rokYvpLYf8uMSRDiicJmydfV",
  "key24": "5KGQvFG4hL2JnsbJ7dz6jdA4ea4oieJXMXZowFh4eUCiM9b9zV6FQLFn7kte8xXuRJ6xFQcfsyfAVW6LDJWbNku",
  "key25": "3sj1AbaayLkk4KEXxzGbphp9BpC9uYLgPERAhM5eoLUsbd5x2LQ5DLAR4xvHBVSz58aD4yuXCXL8xQLhQVvtYG4u",
  "key26": "5xZERYv6unYA91ww45Cgj7mWJtAqtciskxrb8FyvT3XHKnBbVbcqesugVc9dLZTb5YCh4gbX6HjRp7Z6oxTzLiEx",
  "key27": "3cBR2ur5BVSstQdmSPnAimHmb5vtYmFSXRWBExJREKrS76mmj2WzuKNZz4cuWh4aQPJAo36xriAQmi5L6rVDrZSL",
  "key28": "2ReTaLXwospv3Jnj7uhDcfqURNuNwju6Kvv352E2iVa1pL3DBDS5Qm4QBrzt7cU8TgjbKGjg8dS2ccHos8ERW88D",
  "key29": "3qsQ4PEfLnUw7oPoAU23LEJX5rZPwJjb9DWX9q8B3Hf6RtDnMS1x4QH9Hp1s8qEmbTiB91h2itEWa5LKavje5RVF",
  "key30": "4tothZPuNx5SNYzuXmUxXu96SwFa9sGyfxTnXUoPuBhzxTjtHKsWnJpd6yuHjBm7mN7HBTHFhqWQzgiDWsffWRqp",
  "key31": "4CLZtSNQkcPEBRPghGxN7ub8G32Axs8SF7WTm1s5HKr6DLWibmF5HjNCqVgrx2iCfEyH23N5hcdzXm5Eu69E7Mtr",
  "key32": "3JXma6WgWut7Z2qyUW3YUH2TpyAcwEtsyQxZVWkuQLRiNtqpmiJFfL8g9psXAwf6Engfy4R4m9twFVVusCug3X6L",
  "key33": "VyU6j2CKB6LStyT7JtVWojSeHjcbX9aNsUwxJnGESQaHgSBgXkNFGCsPNZKnHYJviCg4d9XJFTz1jmgRDMo1NmT",
  "key34": "4Q9hJsakHdAArGcrhyEKBH8Ax96jTWSMVQfCpPkYH2FZwgaJrGLqW3JfMnTBNyr4AaCS2Aso92fRmHDbyGCNznFF",
  "key35": "5BiAevNW4XV4A6WwXoq354UiMsw1rq16kik45PxdGgXaURuDNPNq1MLqHtLrrqgbiQLzKmgq6oGJe4qBDm6UdYA6",
  "key36": "5yqfn3GELo4PD3dzHWKEq5m5fqRxV8zJZxTDFxubE29XNaVGio9H3wWR7KoXYqk3oAH8A4sdaDUphhPKXJqU4bG2",
  "key37": "21PdWNpJN3KtTUSSG2xLz3ae575FUyc3pRQqMti3rEoYW1JS9Kuzmy3PWVp5Yu2rKNrPz9D82NFS4J24fGwBpNoD",
  "key38": "VnuePQ8U8rnWDs8JHhqBJebfxfHH7itFzqh5zkBnCjKgMEnduWhgxSzeQHoaxgnmUpioaS4cPdkg33HbJXcoHXD",
  "key39": "5Xx42ZAzBse8oyN7TozVip7bjAWkQsLm14ZwbRroR5R4a3UdXbiAQviF5LEb4az6Y6E3eKQyUNdYM67eRYZBCU2x",
  "key40": "7Az8WqhiuDQNbxHyEzd79a2mCuPqekF9eoyKp4GLvMouSr9yUVgP3nFbh4PYm7Qu286Xg6xWiomFGeZwTERuzRs"
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
