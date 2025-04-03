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
    "X3qbDdL9gv9nmkMkxJct6dUtzkgNNJxh1BRSGcBgmJUxejQqtxF38ySccQmZ5j2gWtpfFEvJ4BwYg9zPfpNNSRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HiVLbyrogKRVZ9wfJCWEiCU8ELA9wM19Vwcghd8N8W3aSaq2s3iAH6PgpH7TBN6u1Xz61RGH4epKB5SNrULYS7p",
  "key1": "2RwoK8r6ZuFYifCh5YscFmZM1MJAMReyWALdSpcKRepd67vTcrkf6YxNsSWeMrLjemtgJfSvvvHrK1axsj1Q6R2a",
  "key2": "2jwS8AHy1iMz1sYA2aBMNZP7m4sNXjHUjAaQTjPqzPMuvZZoGMZ9fU2DTCg1zGbhQntUAdFhCZLsZNWtzZ9uFw8c",
  "key3": "eWF15K8RUX3k9JT4CgVUCpbyPcPbLFGexMsEHBzonyVL9WUoo35PnpFLNNbmidMMRZDHAhxqEjoYEm2K2HmWMvH",
  "key4": "rPy3XbN75LccQ1NbBsMCxMxVYE2SKiMi6mwnbCeYBd74zrCZJrqnDGqwEbNqxJ8kS2ebkbptwvVxaKgYrWzFstD",
  "key5": "2TEyn3xcDU1bFu1tS767GTnyHz9CyCw7ZqLbMcq6VHP1SqA77pDLqEirUNhUnJaAcyX1X7id9jhkjmyfgEKn9C4P",
  "key6": "5NEMmbakgTSEhfdTY4Z8AU1Gh88Yg5KVMFERSKztRJJCt32agTVGFxpsmVZRF4kSHMsE5sonpm6JFSr3D457LftY",
  "key7": "4BYKxu8M2GJ9ZCV8LEveS2BdQbntqwqsaU6hTLBs1mjiBM96yUjVZUb1wHWtRBcC6g4wqqctWUBoiwkoMv2mgwak",
  "key8": "4osyudzooVUVGineWAU89uQ1BycCDW9TBs4X1595YzpotgNuSzC6jeeyv17Gp7uyNsx4D4H2m9PQY1EXs9UGjpwB",
  "key9": "62FsFpwa7hgCPuL6PErcjsybsdR82BfSGcPW8zFqmLEYi1e5AA9uGSsgM1RJjT5CdLXYbKK9gn4aixyQyw5fufDQ",
  "key10": "53n2PK61LpDxSCVfA6S9YEd9bTzXN8g47Fznw6UeAGajEvHzyKu5UL8QssPq29ur86SVbhdXnXurRrCJBQaNpKcT",
  "key11": "3Dq9JoCTm3Kid3ohRpx7cztnkRamdEoFbUNu5smd5cLbHwd8aDTNJXk5bKhcjBe4sd9P3LAPxL86S8r8RebV6EPf",
  "key12": "Hd4BkAWpofMUpuRJk4UWHd9mLE5x82a8EKVSNxGsYGv6syda2Ko72JPazu4CRTHNzUcCmEaAeL13buDAQRMEzWc",
  "key13": "2NW8RwUFAo7GeDaCMN4jbBwoWQm27RibafpdN4RNq5agKihku5AW52dPtBPC3ubWYk4r5zZe5owq2wHdCYE5zq9W",
  "key14": "5JSM48PbcB2zzVctzgVLXbHbP4vdBvngUAFCrnQRwPd78YQ5LHD5xrLH7Pgu8jnBQ1sDfkwWUGhiGrEy9AfwAUMU",
  "key15": "32cTZpuquKcJDhaEMs5ogWWUSoZ5gtZPeoYq2kGj2bo58QfsJMhjzAftk2AMpvoN8SdSCxt2T7Ky5nCtuy58LECF",
  "key16": "3xAY3tho1B459aiApW41rqTY29QaSn4uvk16emSB8sEGfzRbbQaYMUWvrx2GwXx5cvKvbcph7di1qq7VM7dJSMXq",
  "key17": "4wiz9CmCALNSjMXYbJXeciBhyyU9go1BJFENo5vGRtaNeH4nKxZTsiZq5hEShsS7spGJ4kgoRE7KZ9VDN6mxru9w",
  "key18": "4faavEXGWos1r7U5qcLjpX87cs5cKnhK7y2rwcdCrjmmLPJdJAKeMZzn9z9eEU5PWhThnQbQCmQKeHwWJBwTguCJ",
  "key19": "35maYCcB1ZauMpX59zdXJLF7rokjJDk3MppUWy5Nq5nrJDz7qxPr7oAtu16BcWuLaqSUnEBMK9VDYLCUEaDqEmJ6",
  "key20": "59USXJtyNMcGYfoBXnqMqEbprZtKkvoowcfTVzqAwcpptptGF5gadXTv9jFuCG32T9VH7cnvmrBgFFBT4sB2k8dB",
  "key21": "RwgejXgVHTqE4fV4zg9UWAEkeSFfoN6mWckFxHdRjKBbeUiZjoL7RQKFf6kM7Ue3Xfyd9R1ZEe8virACbfb3r3E",
  "key22": "3n8zvET53czW9jrJzDGign5FvmcGbcH7vVTYjdwaVGFiNhsjYBRAtLVphYmjDVKEwA4z5aMXHqb9fhiZiBggSePJ",
  "key23": "2RmAoNS3Wdje7h9qy3PYEiC9MvK2H9u5E6Xvrw5xTZst9FKju2Ni9cKHSy1Ea5LZbUNSNXSqKaXTCchLxizyTjy1",
  "key24": "5WYVPzyzm51DGwhUhiWAF1ioUQJjPFFjBwBoNmpQ4C4N7aEYPEfPfwy3qaFqvwdgyjdUtmpwTcKAaLYeMW7xPXLV",
  "key25": "c3pCH11GKuJqZmxSzX5mD9RYj9gueGGTBHRUbxLdEe1Hn7PpxhRZ6qE7PRZRzq6mAz8pB5TibB8gmFMKpmNFASP",
  "key26": "55kpKcR7GbdrDhL4tUNj47ixvEE15mWRhPQMeBmpvGcgsLTVaxdfipKS2pxv8MA8EWJH7LZ1LBH96NUfcY2eDLhW",
  "key27": "2vrWEqT9FokR9s3djhK8ud6N93DxKpuPMWdsMZLn5p4MGa7SPjmYMLn7sspg7q9LwPsuxpGx7mRKYn3KmjaT3muH",
  "key28": "3A2nZCdsp7RiQk6VTcmSdwxyehzUkNheEh4USm62jSuJqPMeeJRuMtCRYU5FQXBVWMjKxuRYxVCQ5n71TYzALw3g",
  "key29": "4dGmBZniFPvcmYu5jCD2hqpAWL7LCEQMFPAVhjwkEJCyjP72Up5L4pVb1woBVYvhzWKsvauk6yngWbmQ5ofJrBfz",
  "key30": "4PYdyvBsUjGghph8pnyAj3mDm5s4Qixzv2o8oq26dCzRoJog45pzM3WDfugDnCUiEbHAizm2WNEuUfuR3teBNTpq",
  "key31": "3P5jv3gtKC3otofeLxVJrVt9mZko2ZSUAsdoGnrcNdBKH9t7oGiFwdDo6rXwYsYp6roug5Y8JnhW3bN5sXRgexxo",
  "key32": "3A4qabEmYzbF1Zoazm2TmrvdBzoWnWBnrGznwsShnjZVCctbs8E7WuEXZWwUmLmQZj7pxpfaPJLdUi2ZE7KZnByU",
  "key33": "2cqZswR3QF4rMHVHxJt1Cnk3gmCQ257KmFEs1LN8PWnp5wWHtqr2gewrCt3K8RbMrBtuo4nZvo7SmxQQWYms7VUC",
  "key34": "5spybVqpKRmE6roxL172qNgoNJfyuEpBGv94hTHpt3dcBU3dvYrkkYx74kisCetqvE4jnEf4QTuY4QqC7Y6t48hm",
  "key35": "2fPKiLNQ9wUyxKyVAahMGwkQjPEFg4rCQSb3B3kXNqT8m7mW11Y5Pt8iWfbNaSgA2ZSvePzF1tBparYPXAZa2USg",
  "key36": "3KEt5XXeeynZFhRY6wFaz4yFLnBb7zLPB83EQ4y5n4xFBMFfMzk5LrJi2EMktRraj8rFFiyRZFj6iUfdcvBxH4Zg",
  "key37": "63F3BYnXsHtoajiQh9w8iCqkUKaMMfgTmZZT5EueQFHVHUptjVmVGNbYnJUnberbAGXpESL7kpP39XZJQeAuWDPt",
  "key38": "35CUktKngVUXWmMcgTyswqcMJVMguJfvk94TbZer5PCWjK8EtPSkpoFKhsgfuNkgoTUfYkPoMqqEaABuWUs62Zgj"
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
