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
    "4oDNXFv2hjDs5qCTtGGVNiBupoxdx3C387dPr41dMi17M13fA3Xks1yM6cHyUxd8ptC1YHrNyQr26PJUjAeGuWH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NNDTHi9hxCbH1yxbnz6tQHcv8vaNtrs9EWFkeRybpUqw8AcScW82cqv41BwQeqRueyNUJ44ebKBimkFW12BLPyy",
  "key1": "719Y6Yc6qarRQJ98LR5yFazdybLsCcT6miCo2Cpt285S4pJQdRfMEtavcMxcKVSUiS8cLug6XsrickzfW9SVF9g",
  "key2": "6418ZFo3174PfPwnQb9b5rY8EhDftmzUyLuccVUhE3a51RvwEduumfFyTTq3WbPPWoXBM2K564dYzFnGTJ4Esyun",
  "key3": "2vGAiYhCRjBRSnbGenpoC5GLzZUJGsLsoiRaZNYEYoVc7MCHtu2JaWqLuGKGuscRqhJAxL5Bnf916WXGF5DtEogx",
  "key4": "5UTGJwZ1bNHSuVET1hacCaYbsiQgjYWXBhMhYrtTAAmWUtVi65hzyTEtCbpd6Vn1n8VqoSHMfmuutiumrJY8HuEQ",
  "key5": "3Xf4SrzcJ22xN6GKDzpvZHcbHYcGFJgYszb9azmJfxUnDBZT9CAp6gg4KSCytPtbm7jUv2eWeUsP1EHq1KyNQFmf",
  "key6": "5Dofk9QsJ7QgWphPMtfcXcrL9FbnUM1ec9tZPKdxYBheTHvyxybafQakGsr5VPip6jo1ytqtnMYevqRbf1Kd3juu",
  "key7": "4Np5HGqudeFyky3B7YLWnSnf9iwHbAsDogkVLhToXFh4dqURSXePJfYALXyprXgJJNxEaMGbzs3cJeTbUZCgEBbW",
  "key8": "4X74ayMUva5sakqxh6KjM1RF26zN1y3RYDcWtUZpQTQhuuB76P1Gxp8Mxrwth4qKizBrdpGbZ2vX8yQyQfutCDuo",
  "key9": "44uRz1zvXbnGsZ2QLwXFdvWTBzm3NG1S33F9EiLDT7pQBL4rAZ9Z8ohj5AX5QeVPyGNnCDDrCuPQcHaXmitq98Jj",
  "key10": "3SrkgdnzVdizznJBWAUD4UjSg89Y5tD2CjBdfj958eLaQUjKZUhU5ZEPZEJtoWn5rztPUuv9S6xxtL13EQz3ojaK",
  "key11": "4KjGUqxHGCyJk7ZGGY8otJMXN3QFQe7tu6pZ44fsnuKWuzZ8JzrKJov6CiDGmPWbf1RVfjsgNH9mdQDE2jQMbyES",
  "key12": "2Pikd1QhHotoTDL5MioZsjT2EGsz5PHuhPiVnT26PAaNP3FwYyVNwLdwWhTSkU5GJq84sgitopRRaSG15Kp4Ph1E",
  "key13": "59DnYE93abVxf23QQjoTM5NWGm1W8cjs1DKuGdf7qGkTsFBfMWV5V1STbsESyyWDEdWEq1cAPPKuRyGcfQkKcwkh",
  "key14": "4qFpbU5QGPumcXKqx8Z2c8QeeZk1M6T7czn8vcKRdUBRmvY9WFyuuUm8ktPwjL9vwNqBvQWgvyewcrnXXaomVea1",
  "key15": "4s76Unu6Hy7TpuoNpsGDfyMA75JvJhsqLWrnhpNLrBSPa2Sovfn9TNevCqGdDT56kJ1cv331nS6S73xyzaQCfYpB",
  "key16": "63SLsbbnSKdQan4Jt3VNn2e84mpKHDkbmsdjhfUQKoo9iKyf9n2iBWGReb4joUvRRSFuwMMRgHrxJQ9i4Ecq22gC",
  "key17": "4pgE3F6YMbJR5HRziVqVAW3Ahw2ijLBXSLzVkMsA5Ef7PdgCptDxqvRHtPCuAfot3cNJPFLgJRSWYxL4LNND4Ckb",
  "key18": "2FZkKDU57nH5xe7QPqHh8Kz2opoNZuuwAHWg5DAAh4sD4zBfyYzwPHzzmEUnH1gmsSGuBsgygWN45sTFjzXEspEX",
  "key19": "4eij32y7Y22x8a5WPN9uYSEKFMMmUVvo9w1tscK19s8cj8Agzp1atuz4Hv296zXBhTRoTfs4UevYtQjPPQ2oj7R7",
  "key20": "4SrgxTqx9qwnqewM9X8T2meDFbu8dRPGEEUan8JeZwKz4WyFFpHexzyT5jApibBK13VXAJbvk1GcbX8exCYxDrXj",
  "key21": "2rKPYD6LxGYytSZ9uD17UFpNfshZJKW5j5gVZhGZ6ykyYmh3UmWefprmdaQETM9xrNeHauRbkTrHLpoWv13pNavK",
  "key22": "3u8vXREHmSbGmzwbd7XKF88UeUq9McHG818r2PAyLyzECSsap7grtJvKXxgyTfeknwX2nxxDWHopgi6khKmsUNB4",
  "key23": "32PaQygqfLyVC2nVGNFwseG1icFdCbw4qaW7uBSaDag1PhMTnopzSjQZ2d9LZa4PdrAsLzudXrts6Nd67FSr94c7",
  "key24": "3y5BHhonQQqtm2YuagNpB7GMmwbP4LrMfw2txuPtvX3egKc4nWvz1W1NuQCV4kzJdpC2zJabm48FpNQPJXVQPZzA",
  "key25": "j7Yg1rkneaHvjXovWnBreEHCMeywtfehht7uS28Vpd19criCAYsYScLZEv5ps571nBJxXM8psp2FJrYTpLQB29y",
  "key26": "5Ly9ZvevWHGQ1pSTcJrhtfBTcoeBmVhRxvVPn41L8ozBKFwkChq3rpaVvGh2StB1AZMCAt4SBBzcZHHFNcoRPrrJ",
  "key27": "2rpdMgNzappCbypyG8UnEuwvc6EiLiBMW7VkLyYuc8oL9Z6UG5gdyBMv3qiDXHz5UtCJsRVyem6igrfJ4TctWF1h",
  "key28": "2KvrcYzZs5ycW4meziwQCYY1nFVvCZqUjHDEM5PfNCABm3SXudJZL7pPwwfwJGDatSv6MsxQStqKYeuX3buAZFju",
  "key29": "4AmtVPba8tJX1oFyjJC7ApnS7H76hJdfzNcA63SvXxRXuJhfiX2msCzpd8J4ejahFyjhpMLdyYFJafk4g3o8TsLW",
  "key30": "3PigRBGZowYrMBoPNWXUPJegfb95SegXzcJipfuEH5VbX361V3Ai1nDnjJ63ADsWJ8zja7rx8n2fkt9PAqEsfPp4",
  "key31": "5bgG7LNpNaMqXrxbnSfSb3VE1ztUHr11Y22jD5cDYTxk7qUvRDVeaU9VeiRZgrhnG1i8XY5z4if8GxRaFdJUAUr8",
  "key32": "4uHSo46hg6ruwiG2Fd3UByztsVK8hVLhadByXuTvvf7cDfw3Jsgrv7KrdhpxXBzVq5u2Gmre3RSS4KknNBDBZt9G",
  "key33": "FwBTUjGsntKBU3oaonwCvtTrcw47jN8p4wn4uu8189tLSrZxrz7XUx2oQU7kREpmFFLz1qiHYTM3TmAryFeNKrt",
  "key34": "4jJJyPhg3aYGCzLG46KA91M9g12jGcPJC7W43e1RYx5PxJn4FipDf5yCAUizpnE8ZsQKx4mMc9R3GicGTsm71Ls7",
  "key35": "2dXSvqphMVrHCTvivpkfw5yPEYaK91bQ6GLJCfjmR365KthUJB9gm5jLrXm8ooPp8aNw22XmNTizQoRv7NnG5aKw",
  "key36": "4GUjzEHY6ebz9GDg8XSpCqe5NJWUvHd8cHEJK6NLM2DNXkGdLdHdAY9yBhXq5Z51J1qJupUyRdVxBHy1y1qoYeBz",
  "key37": "59TEuzu2ozuKpGhVFTXeMjxEX6Tim1wRD5kwFLddpDbsyerwvcHL7rvbWF88DGBoMaT4xzhQftQLsLzmA4kUcqFJ",
  "key38": "5C9g4mGotusx4DGQHKprkXuJ2So7noApU3MEyMeycofNugizLCugz1MLdAf7RebPTq7qS6eNnBZy9fB2f2q2KqjL",
  "key39": "3Ep48zPL83zUidcSzNXqGBGw7greTvTQm5woxzwkLYPQVJL2n6oudbyUvsiapSi8YBe4XPq321zm4zYu7J7GU4V1",
  "key40": "Xk1Tcsu9i7X7xbzGS8CXFtrTQB7TJthDYQyvDD6EWTDacQS2a8q1P1W9FV6NdHxQQwEZTYMUbJ9y15Q66rTRpPD",
  "key41": "5Rp9hT4NgXsD9DChn8Ym2FnanHHVzbYZb182sSRb7Z8BvipU2x75ga71TNfJcjfrvFvFvTBaSqUfnsh8bKCaYaSS",
  "key42": "2nsNr6hgq6Eho9hjgBHrXoL4v92AAHSckuu7QxvgqpEQT5tgrHBRi6ZwY6kgW6Sb8GiDRrsjrX3RWfQCjqv4PxsS",
  "key43": "3ahjgAkoY4nZCnHj2ajmbrPkKtEtarkEgZfJxdcCVzYJDzdjmDBW5ZqWhzfXeFyPUkN2iVrfgzXsgSZoxicftv76",
  "key44": "47tnjyURm4SeFPjBB7uCgPsye9tzGytYGHGvUg32cFLw7jqRdUHtm42s36WYDs7wy46UFviZ5YhXfRLNMiNwwuR3",
  "key45": "Y6GXuUet66RVmtnBwhoz6kBYYugmM5oKBqGsPm1YAhwUhaKYzifcrBYXNkPh4HxXqJ4kixVBEfziP8X4jFtdzpW",
  "key46": "36LkHJ3fjpHLKK7TrTMdtL8rNFcaVSdYWagRKFh8tN3kGsArUzMmtHKxck9UVdKYDFxp4yRFAGb46Gqcnob9Rdch",
  "key47": "Y62zwsM3vTsnknsbUMr5kA6xYaSNjnhKMwgphuHMQXKW2ezguthsrkJRLpykp11Cnt5MSSWtPUfiPZ9TGGZSDnZ",
  "key48": "4Y6KygweWVJGPHZcYS1P3ELfy8PFzJ2W5a8VhUSRo6T7XCRKaCybc6oq1SW9UecP1GSw4CBACvkHjBQCtZ1xVkpr"
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
