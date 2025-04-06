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
    "ubiEbxrTrEu97tN8jJRjHS3bUYTgWT4gUkysCfgNeR9RYeYR3zSfZwj2hG6jLAw6aYTYs4KgFppyK7QwE8Go4QZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "538TNfUuF5Xtf46zc6jPzu89R24MrJ1DY8mtNHsEVEZdfwsbaz5SaP1wd5qfPRfEer4HB8gFZPVhtthu9yeKN9Xu",
  "key1": "59shCwKSzzuh85tJLfmWDq8cPZR393dQkCSwXycsMcvKKCmUthj7fcr6dthn1p7tg7mnWAnr3ad4uyq4s6X1aT1X",
  "key2": "47xtHvX5JrM1TQ6ocT3SkJSGt4WFpaAyNKVLPxhsLRt6ApnA9mi6FpZftydDAo9Yg15WSry61KsppnGKGfe1XUtj",
  "key3": "2s9Dwdnwv6Gr2586ZZSqCN4E25axsVfuZCFdZRF8bG76ibUKJCJagtrYv6Th3YjeZy17V6n55AxfjPNwpRc1zeFe",
  "key4": "3HREn8ECWvHwZUs8FR66h3fbR2C6ruiohWM5S3nQdTA1vpD2RWxFQdptkXV8XCrn8mhrQjnivgFEHqPr1QMev7Wd",
  "key5": "4uMRCYgy7pS9a49YnkfzsPf2uTX9jtdkV8oxLQ6GR4d3XWXJ61DLkVsz5dS8Hw243wF3dEjJUsNreizk8XRtHCyR",
  "key6": "5CGopaaAdgPUxnFAWpCmsuRXZMdLqCUJtuf59iYGv9vzkKyYpacpDkvrx3sDd4AMP5hPKSjiiceyJh1dtCqg5N4q",
  "key7": "2gEMhaUDxVWEp6bTqp5YZK5SdrGSW4DezgWKaFxrNvpGmos1VkUqp6VocAmbZ7gpR3w1BJztT66xjLP8KiTvPS3M",
  "key8": "2T9Cuy5EfefXsNybDXSmZMwWRq4Pbpmkzv4PX6H6NNSk4F5SxyqJfRQVd5ynJcKVd7NB2veEEi2XTB3ibENBdUWE",
  "key9": "2DUGRhzPZZfzyoa3iamWAh8CQxQVrKtc3t88oajs42gWhPmGA2nWCG69MfoVVt9AaKuwkgEsCrionycHTR3je9bu",
  "key10": "5N9dFfwXBLcoqKmrLiqSLTC7EYSwEAhhdrYdfVoSecy2hcBCFSSRQ2ofu6K4CPDAgyfYwVYLHEr5UPpcCF5nffgy",
  "key11": "4xaEZq9F9x9hNwK84RUiCfuG5BiPbJosNbWAEwzoTBgginuMkSb5VyhPwt8ZNr7Uy1J2c8nJLH33VgmkdzZ33sHx",
  "key12": "21BnyC4Ko3NQ3sBWsyXpihDzvcvsRxgoTYf1cw6nvrijb52s9i7CroqNGBaPDfxDmUnh56qW9ZuPB5ENC2TA6gSb",
  "key13": "24Gqra11LogXj8mcq4HRsdyc9RBSYufwSV29TuYZTL7qfKtsmeJAPgVpYux8VtEK277LakDDHfZQdte3qYa9vtdF",
  "key14": "4skjyPjBrqBh7Cp9e5sb18MXnwpET4ZwdKBytVRvJ2vAZZvsD8kGGaqef7GUYx4QK1yu7uyHjXvabiUSFMhzoYCa",
  "key15": "3LMQevWRKmTHrqcDxJEbqrYsiA7gxPUro6UhQRNdtS57b5TDrWZjQkWJEkpvuq2qsCVyBxGvCFiork7naFCrtNT8",
  "key16": "PgR9M1uvsJXBmuyhMW4f2SdukdWMNQG5A1L9fAsfY2nTgWp7LKF8zvheRRKWuHY18xP5NVRNRDND8AeNrT26g2V",
  "key17": "2GRsuQ2mZr2bHooFGgx1qWFf4vDPRz9aYL2yWH7tpdu8KnXMqb2HhxeuVXDq6i7Hq95FFiw5gE5npsz56YZKh6oC",
  "key18": "TweSh2NZRiCdvNWNrzpFq4mWLkVCeBwMLNakoraSDFkgEyBZ2uSwooPqaAvYkFMj1cHTK2Jt4w8ymUDahCncP6J",
  "key19": "2bUbBn7ugKUP1o3Rgag5QBDbniLakc9jy7ArziXBRfKFdtE4Vx5RNqAMwWpU7tjV5a1BRVdzgjU1WpcYPHK7Qnnm",
  "key20": "kd6MLv17yDoBzhPnBBPHTeXmzQ8uPxDGizFPY9aJjC6gBCw8PBrQNW5wNzfMXVN2MTeLnaHAerh8VCvCo4BMPsF",
  "key21": "4cQxwQ1tGSnGB8dYan2K6Vc53nB2hfHgYCBDVR9m5WDHXvt1Z3cmTiyPtmKRaGfWCH6Ajhj1bqyCjB78NbHqzcqs",
  "key22": "4iSAJEFFzUZmthiB867VWi4ceVjQ3HJtbs1PNTVUUvQ84hNnT7vM5pkbYSVYCFc8Fb7Sjo83QmsHUK6KvndnjLNF",
  "key23": "9rFGmFoCpHPvC1uLdabq5n9bin8ifYAqspKs7VWmuDV3KzuoBS5EPQSopaY5kqdJeMJCqMtW5W5LtuDNfEPGABy",
  "key24": "3doQAiN5GtQtZVC7AoaPayCmzPtY5FQgZ7epsh2AZBaX2gYq9aK42ciKrYrBHdf8oCfG9dEuKiuDKVDhiBFVC7z2",
  "key25": "4fbqfUSEjd6adYugXZwZGuMrLsEzobTHD5aLB4w3JotXCVAim4G8C9WG4Z3Pu1kGmxEW5VdYM4fH7TcsuFwFhxJt",
  "key26": "7Q1HGjh837t4jxq1giwBWVL2YHGQJaR8JuJnfhaq1JTrrnZL8h5iQLGNtEfJ3tFDoC91eXxPy9tbfFUKvukhweR",
  "key27": "287s7LBRLpqfDiB7BQg1r9ZvbRhmziKVQAruVsdvdSX8SDEhwHzvXWX7Szx5WQooBrrsy3KS7fYNF2DbwACdAtHm",
  "key28": "5MtLxNVjtyyTNBkTWwBAXmkAoeSYRrL3nhTyb5MgxKXjEiKtM7wQWny2ez5DxMESBoBAJ68n4JLF5YGsQ9qoy2gP",
  "key29": "57EWPSMeie1xnSxudWDVtVkTVMyPLUYoWtDSs8sijoceodAoFiAUNZ5RkGqVGmHLuT3v3iwCeDXmVZAw5QinVvR5",
  "key30": "48MgSGJByLM3N4hiXFUjm3pPwaGYQnVqa3gHoeQaqRBpCSGjCm4kLXwZdRGBWkRznFLQgZWoCHxw9ZCPKhW6xFe9",
  "key31": "4kLSQG5WJgBRXoR22TpprnEp7JYvWswEkJUkSybcTe7mzgYaAyVnoxjbYdFGrnmqqeycnuwzF2kUc1iBnbgzMEKK",
  "key32": "rfVupgvgb1EsVHiepUqSgQUKF6LxzyTK1fDL3ia7truQ2d6wTcBYeXN8x1MRZYBomfgG8WJnPSrwRz5PTtr2PFb",
  "key33": "KUsmmoX3Sqot9MmV1ifaLbJN1dHz2vNWSKbg2TXKcY4hqr2hhcwj3mqUWwEjB7LsXq8TKnX7zxgsTkMkFS5eZHA",
  "key34": "3UVmuJchfejHsXmLxDoCjJmWX1yTSFBYGW5jyxfUzYYbeBqg77ndi88Kp4GbGEDYuo5FHm2hG6Lyy4WEWRXGJduy",
  "key35": "4G79LcCFh1T7s78B6TTPyuXWsKL292PAMrD2EyGmM2tE5AZ7YjBdfoRvzax83CVSQbAdYfXx2MoBvQiVGS2EoJJU",
  "key36": "3hcBrhbYHmdJFyD4GtxgBWSrpsotVyY62rbX8soLH9SKdUgugzNtrD25bZbH9r4dcrV7AyRZ9QabZCJdBq3CMoo1",
  "key37": "3pRyXmUYii5aohmYkxSvug2vaQHrc4AzTvi4k8JoSpCNjTgv3kA2kVUKEuXrJRetM5DAbKF7GqRpLkU5NG4vDQsD",
  "key38": "2zWBuq7yKkVhXNUd8YAcwENymKvKHRhWriZF2cL9yg1bKLQCFJS18VZ7P372vHunjxiT9wwgAze2SrELnqYukWvx",
  "key39": "5UGtMEN4xksX4bKqh9BpB34ZEz6pXzKvCLqdzGLSAMczXXwZaWvNvi1QGCPzU1F6SmetUmVB7SCz2TWJGAHH8CkX",
  "key40": "2fPf7BgKGNDxJLfJPsTBZMEeie8JDQvc5EvoWhyqmX4veHGWjfST1HCdKZhDpfdGrqZsagkfY8Q9jCKFnspUJ2qt",
  "key41": "3TZ9bHvcsq3SQ89TSqnTV8juaeKfHNkBiCywonXMWHXHGmj8YpcAtZ2QER2cZnHUZZVz9tdMUuHZYJvBgUVdhvX4",
  "key42": "5Wiitb3qqCRT3Yi8MgTBW8QLz6Ry92C21KGu9nyr2jbEKgoCz6kdNYaao1QHCFC8q3j1d8i7JPZB8jvxVubiNduG",
  "key43": "29tU83YFtdggT1BaT2x2csMefy38RrBRYjazAR6hDx3uK26nhCx1FLFSWJxw9n8aEs5ExcVQyPcHy2sTh4hHYCbT",
  "key44": "5B6vuRN1Zi8byGKBo8dtxAJV5rWoobsqhjtvnsYrKDXJGEzL16tNUFZsR91pPhtwLuLT71B7aLhDCnhVJ7biwWoo",
  "key45": "2nYck8qJgtjxXoky4wcTGPP17vdeh5JyiY3b5cp6PpBVviNY4wZbqGQwmgiH3ouDAFUqfzqpTwPRyNBq95YFQSvU",
  "key46": "43QxguoAPmYAvCbg5kBurvV2Bw9NdBBTqj7AgDKrJa1XyAYWYVmoFm2sSzmatE8b4HEihGyNGjGcZ5wrzSr9VPi6",
  "key47": "dhak6eNUGZgi6E4HxfBWH8UN2g4f53qxDGFdVuf7hYSQaWeT2g8iNzgofMTULnL8opeDfy6NUxix4LNG5eM4T1j",
  "key48": "4xRETxvmi7QAND9PVty6m5trdDqKpt1zxtFxx67fxzUYcmUshRZokPHw33prqdEr3FdCbTFmeY9QR2vnoC2Ct87E",
  "key49": "G6UDW7cmPQkn44ipqUoxW6aeyTmkRMYYjv3ZjheLVL2UmDx8Rj6XoXJfLXYqQvw7YHHHd32ngs98tiM1vT7rYVD"
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
