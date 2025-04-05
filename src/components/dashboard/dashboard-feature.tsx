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
    "5dgzpbsfaWHAwpFGauc3KkMhY6oL43WjZYLG1adY1PK7WUyxopxF71nzjBmoWnjWrh9ofriZUiSHZGceZ2KQ8tH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32mttBCrtUE2xYBL2UfovWnQS6rD5UE4suLB23QyTrhQBKYLpbnoshmpbht7vyuqpJ1ysRF7ydFqv9pbKfV66ovY",
  "key1": "63YgSPPQCexp7BQ9bs3YtWCuRVxrvVQAVw35dsghThrFzCJUjCc2WEy9aVuW2HZqyxFrcYAgdtuqnNmxteAKNRZE",
  "key2": "3x8wtMi25QygUttQiSHrEzByGsiHRuyCcMpJxHu5XRNtjg8Jfb8bZhCZL8JuQYPbGKejJCBfmC5YLsBRCF7h4eTK",
  "key3": "Dd6skGuKkV6APTMyMDvqAJbXaLhJG94dXheKKuFEGDQjWH9jecbDFToF2oszZu7nSektMcDM6eyNfirDrQL9ziR",
  "key4": "4XhmMA7qNtqDH1ETNZFstnUkHcgo6XTaGy36scdFiExkFwv2ajJJ1Cce2YDayVSg4LmsBD3Po1RsmZXM6q5Hqaum",
  "key5": "4R57pPKb5sn6fcPfG4fhTmsFqA1WvXx7P5pnT48QLzfTBu6Yf2ENJAePEqVmBXVENbLehQvEcw9CRHTaLBsALKMK",
  "key6": "PPmKmxg9ASNyWgTQzNCSjoaMtZ6a2MRd7cn8FTUX5yFF96XLA54z85vRRG9C11JrDiV3uZ2yz1cnjsr3WVpbc7m",
  "key7": "4UTkynvNquwTLJvQhaWELHjYuxjH4uTuQbgboCUhb4Am3zTnA96AbQ2w3vjT7XayZyjBrNkBaJ1LwBxCaBai7ngK",
  "key8": "fcGgWhZsvwiw1k21Hk4iu7qQZmnjrybvBBSAP9YW27RB7v6FEPGCmd7KWtoMsUR3ttFHHHdTDiF4AFsVZtyuThv",
  "key9": "5imkErGC94PTeW4zVbiWAQDKfC6mTSyEJdh2RVC9djUhkZRb3VUTixnb7gdyBoHxR1qosem7TeTPqUL9Q9sR2BDf",
  "key10": "4KgGmhq47jsHQPP54AaaE2w8p66nJuBskR4WmHbA2fzwZjMwEtZyu1LAPUS9SLLnshUNGcLoqBvFPEVu8V6EoUPg",
  "key11": "4fNyTxDvjojSujvz1bqvRTZ1C1mGiGHkYCRfm15ZmKQYUApkKeLxUsaFDkMZxGCzgdRxcEujSwrVW18ZndgPQ5R5",
  "key12": "5pwYWyS8kUhhRzczqkSCKFcreBPcdSXKRiN5Bs8vuNwwekbzSpf5akr9ftRms1S3W2d6aCSA4eWXn2YTcuimx2qj",
  "key13": "2MenumNEH8GyBFMat1fuf3txCNpHLgF9TF5LS6S6SYVEwQ3DmMT6vn8ciPRHNRgDNQypumwZ9Z6ZJEPUyr9aDLcL",
  "key14": "3bWKZePRqSwg7sopKNmZ8iWtdmeQhvcqTfaTb51iLTQbZSNGQjknhZMCkHqTnrT9743L4UhfE3ivN6vHzarWN5Mv",
  "key15": "4wBNcRqHfsw5kDYiy95mFsoEfKs53NiB1HVigzBtbyMRsEJk2p8ouVxXFPywME8LSsWGjxeu94uvM4EPZwWBYeSy",
  "key16": "3xMyVXeQniZ4tkFWPHrMpeZAHwT4XhPehwXQW82r6xnJpATPfxQPu8MTycbSpirQbQt5Sfob3LzWAXdzDTEvF5Je",
  "key17": "4QKXmXnQRQuVnwTE5e5UdXn61qH2Ygc5hS6qZfL5arsTNPCHqnVYDNVE9nhsuT1Cd7rTCkBbh7YwooSxj5Q1H28F",
  "key18": "3mpqYnV17wstGbJvuZcAcNXD4md8bdXmu4UJriyZB2MwkLrhEQuq3wvpZSWmMNVWQ5kAFNKuVborrpM8DUDtp1jM",
  "key19": "5TydS1fCfefYPPMV65JxMRkqKRF48mtreQk2AgpLx396qKxqrE7YfsNUcUST1e7Ywf3WeLAitRL7PsQLxuSvr5GM",
  "key20": "4XRT9yEAou2kTdAoEP8zzkj2M91mvfqp5ByreaJgZAGoBFpPbFCG8APD8HUQd5weoeRR7Z4bNysRALSLs16ZDL89",
  "key21": "4FYseY2WC5RSp8KceuEjoU9oZZngoCjn79Z9tGB6MKj8zFeaWDVm9f43sTWey3iJNzADJJBwg5dZ2i848TkmVf5f",
  "key22": "5duMHuQFNU7JFiqag69G3JAt81Exhh6jiLpZcbgqYjJn4ELbAZENFXh2d9s1RF5sbsq6tZq8APuhmz9vLiU9ksZp",
  "key23": "2MMrdS68S6AJbtoqZcHPXHDWsDcaAyZjietMvHgNuq4wQKzMxbwMGAmd7sK7U2rp8o1JcnFNk97m5BXLv9G7qNuc",
  "key24": "2kyPG7zmAJ4toRcmM4n8xZJASCNVNPB5kn37pHSJY7GEqb4q4PppDXQZ2hjFmHK63GBn2YFvvTgg1EqzFbxXb8cT",
  "key25": "2xZQUaYQKZhaj3J2qoq5WqhYrAW69iAkeYS7HxHc2QZ7bznqhHLht9SQGLVp11M2qF7mCPdTubAcgYAiSf8AexDo",
  "key26": "3YVD2DYFaBYcGeEXZcQtQzfP427GWRBh7vtYZY1U8rPC6iotVYFxdEavSRhfC958HbTJU8R4HcHafxmzAsWV8ELS",
  "key27": "4rCTUWYkzEnxCoipRvYpLGaEoXy6Y9BgeHxaxdbCoqoezvuA974V3C5dVPj9JwSELEuoJZ9Dp1SPgeoYKeuN5biX"
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
