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
    "5n8BLENij93Ptkc5qr9jvo8whBJWAFc2Q4ax4t3FWCqsyz9rnai1omUqtohhPqQGcP7NTTJpWmrWgqDnDBPsGrbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HzGUn4KN4zu193UB8vBFouibuetD1x8jEs2hj2JaqzSh66bJzSmCadzLRcTLix2Jx5AZDaP1Ae1u3HYZmMa2TzK",
  "key1": "2G872qX8N56RmEzreE3S7DWgDaGWKoe5zh8SzMvUR1mUp8n9EaYaHeQBqknDjWv2Npoqi9b6J7rSZorCpgyBCvZD",
  "key2": "PtE8jLU2gy7ipE5zMyLjLyxnStLNaXsUTmvF1Bsg3ADJiSyfMnxzmGvD6Umj8PwxgPATEsExir5NzMveeW2kdHZ",
  "key3": "3KxQX46PDXbviTUz1Qd4CGn4nDKzTmc5CSCPgMD3rYTofaANuR3PD9UNHThM7cRqa41Ere9SBYn6Ldwm2YkbMpFR",
  "key4": "T1hcVqwig5r8qLq4MB6bDapbce7D1M43uQ8f1yPmnpGnfugY2TuAguHcThDc8sS28444Qkkppa7XgYQG9ReCCCA",
  "key5": "3DCm9o6MTSbs5D1kAHrkpkrpeNa664QwiBS3pfQPwyF1oowAbdaVAZToUF2jbWwmGt4yg3Sm2tPQZaEupgN9FVwe",
  "key6": "4DwCu4ME9BbCAh4xEGjNkGZDd3vQbgjGWbDkCT1PW6JJP1A5NrVscU9p56MeHJsFsqVpfXKzWZ9d4MPKvKAuBsLE",
  "key7": "4TqxQ5RkHLpYwAgM54n2ytQoEWnPyMaxUWpgnvUCXBaWyrXMYRqLqh9z2tVeEEd5z9rhKnpnA4smcmKTt5rfRDg5",
  "key8": "u7fc7mpNn52f2p8H4mZB5qo9Y47XkaKK988K4WA3dRL4Qv8N4nveQCpLpPmzBD11sLRxBRotyTrZUSwbJ3q596A",
  "key9": "4hbmr8PRTXL9feydxu4YvonD9vVHyNzKDFYYLSmsmyf18rkxbU9tvdPJywwTgyXjEMETKrU5BWPthyiHoz25m3P5",
  "key10": "3EtXvF6ub4B8yHQyHdih64DuB1irbvnNJkeN8uGpwTY5CqFemrbL67tLaJetMFvA3QSzpHEAB8airWdNVFnx8A1p",
  "key11": "37QXXeMzh3MN7BmDdm63aQbCaKfu6ZEdPNaE484C9M7xim3H7HKdCWQmQPpRgUsJt3a4WyuCMaEs861hUzCqFAMU",
  "key12": "2qthETd4gVHtpfLv4558kstUywBPpPsR3YNsN7AreGsps7MNhbSwBSSsmTBX1bgGBi6yVWWAwGPSQDpUa3BYRLwD",
  "key13": "3isjbXAftJFZKCFxEzaiGq5isbsFshQtprGztwPfymzktzwAsva2F13tWeXxfhjuYKsDBgStCK8Eom9XWUD35gy8",
  "key14": "3UGJibbTewrHa45cnpsKgry7Fv39i48a4vRk4MB69EhbAM28a1L9aqZPNgG4SnE4Bzvr9GKtaDya6NPxKkPXvf7h",
  "key15": "2mVMFNHuCHX1CYTKVbvKF4UHe9RhQDhYKwMg1m6ZVvZvzfN1JmyB814XWhUQ1fHqzW2d8XSptPdPYGx19eaxZxA9",
  "key16": "4uUYUxDjeGafm17JMdEwLoXdFRD4kqnvumD48T86uN1xhRrFz7pb1uWFsj8Ai5o2bwsmJ85gY2kXX8HsTemkNPS9",
  "key17": "3ExqfgskRT2erbXRKcqiAXBYu4c4icF3CRtqtzXeHEeBpb1YxDesf34Na4RerwgeqwFpoRhjRX8PCjjRfCjRtA7Z",
  "key18": "2TWdKrYN9Xwthcnv3HDG5JVn1y2eLNFbxu7M3EbM1wrySshpiUP722WYD2Ee4LCPRXLbJp7DEaLUpKm7qCzx96Po",
  "key19": "4BaUohbd1WcoATHAL99BueRhHF5mJ7uwSBj4DDdttzsN3yrXUrynks1kDpseWm7FyCRZg3WGypSVrL3RvZwd1PiW",
  "key20": "55eBpkDKzMVEy95q22D2GR14aQJjWB6Z21B8coUyGpMsFM8qt8kY8oUEZ4b7UQhGtWxwpQmXKcNXkEtwE7t45Sya",
  "key21": "2Qkp17VHNpgKfjPUuRXz8Q9gpfgL6Nn77Tdq1PmunpBiuBUoWoXsvFJm6eQAcrvnS7FFCmR8kEStxDiVFpVaTU6X",
  "key22": "5qCiSJrssjBK8EeiNUxbKgmEsiNMRqA4Gp9tnMdsTMfk2F5WzVHx57DNRp3fPKfBZ8Zfuvyap1gqf5svop8hedpz",
  "key23": "xQapVTuNbMRBTGmemp5pbPkXpgdEhaCGMS8DvJo4RSEXStfntBvpwwWCv1UA3AujqvdiagbR2EcqXSvVdSMcrAE",
  "key24": "nGSbo2G1S612BWmLWGnfigMWahxR5Uug1sC1fq4Q7vECWqLTK6aMtdXxoR8BnpyiFMr68Gpa2dyVycFNMikfuqa",
  "key25": "42kZrA1G8igrxxHXpMaymXVzAweEZycVHnEuknvJx3rVrEF9FtW3tHgunLg1xPfWjYr1M9Z1UTHqCqTH7xmSZgXJ",
  "key26": "4iJJ8rFfKiiUiPXNpGrXazNmDDw3bNeAW86rogBMWKdc19Jc7KVZX8uJ923raJSCohrchaUDQnirjS6YEuzsWRJh",
  "key27": "62Sk845NRQDTxW2rAPVLqz1DYvPmePYp6eRESpirfxHwHX7PaukLh3qLxUUDChpepmy9dc4b2yUdaw4McdvT5U3k",
  "key28": "VpWXUzdtsj5CprCZXUZYzKtExRp1x6aT16oUbgpr1eNtXeDGQSGwEuqLkrKEeaStgiLV6GJqkZkrKNrDGLBDFE2",
  "key29": "5qP3bSwoYj2AFF59mjxzA4oMFMTCQ9FGwwXi2momaif3F7HntT9qtdzbLhpuhTKfML3vfLd6vb7zVyTnh84C5u3U",
  "key30": "5Wurg35ME4yv2YjWb9dYKXrAdq4EWnYQCA1ckhgfyRqj2G6cv6PSbitxHNLTybArFMQ381PWmY95QasWJudxszA",
  "key31": "66PmocTaECLbizu5WrVjQq6vNbRL7tCUWu15wTSfu86V9UKdDnz9UYKa5XnusqNAxcJA4wrxZ9qrVRwnRFdj4ykF",
  "key32": "3dQLE719Ty8TvQ1jXYJNXwNGTDp7QxG4aRvYc1cQ4YP8DMET45psZWnPwAbtSTVcfQ9vGygRbpu79w7DeT3Nvik7",
  "key33": "5cXUA2DiLvtMVTz6FDuLVBBcXfKRH7DKnqH4QA4w6CjC96HVLdE9rgjAs8RoCGrY881SujwA6ubvRzzuD7YTs2fh",
  "key34": "5Mxk4y2axdPoxpWT2sUsKPJDNzG8tXPeDJ7RDmrVec8uYXfmxM1Xi42PHnhka4EXfvJsFgmLviorij43LcKwhEmJ",
  "key35": "5AL1rBo6DqokyhHBBddoPPubEJiMqjBSTFTGrXnBSKZHpSTryNnwE5KWjjChNjhzris8kT8umkLy27d4M5yvCaNo",
  "key36": "LGYgn4LB1RGwRCrjuCYcuHuTm4ET1d8eZAbFqcr1PXzhW1CgfwyKPHkCLrXsXBHnNNmXiHs1Vec5iszgYKeKuiz"
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
