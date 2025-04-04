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
    "5H73kosM9YvEgCBm53kagCLz4uAEpyWsGt3CPeukawG8cpvhpdbJs33i2KPdk4GYnQ7En9Cc1aVhHLdCKmp7UjY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CvJxXXVnENy6yNwApiUoFJKKdgM5yFQ4w1yA31sZYqvjbBt3M1uDJWnudU2hdQGT8AsMonzEKvRJJcfKoS5hZmJ",
  "key1": "5RXK98o6AqE4wpxVEZz8RR3yTZREwtQinXr4XYZj7QZfemDbuTU6M4cQFVPWVPdjbhjdeV4LNrMde2XLVmPVsNSX",
  "key2": "429PraPogixo4ZE4DVXpKCDazVWLDnV79Ax3cLNMTqpqqbHUcNRcwMh3ivRPhco5MgWBudV9oM5RAAcHLSC7xHJw",
  "key3": "4MVw5bJtb4VwVjevxxAR3NtJqTtZnGAPyk3GtvfANAUGZtEfw9EnLmtBFF6gwesquVwFzyPZauHLmn827FAnYEY7",
  "key4": "3cYLB7KRrzd7Pyg6x98YPAeMqrwzvLotvCBqZJiv7UUd4QvAQ4Qey8h3KNeS86Nf5JuLswysm6JNVVLTRyDSfgaw",
  "key5": "oeKAyC4SUp5mPDbSqGDhMGACGwBhsdcinVhBqrr82Mi9Ac5nvVd1ooKsfNwLLkwKmRVDNcaLaDt9bZbSdDdfD6T",
  "key6": "XkVwWL7L7mDuZCBrnduZUZpdAHCm3RWgWybiy48ajB91xEC2zwDpdz3uu6TknHjxpErKKaPSxcxo2sD5HWpBBwz",
  "key7": "5h69FtgXgLq2FeS7qC4Um1WZHNu2uyfURMNovycEG1bSWJHmZMRrZsYgCzebfAidMCcVjJbbDL1MBzFUZxLX5GC8",
  "key8": "4qjTAdhzfpQjgB4rN31Gi3xj81D3nKikdFtVbxiBsKCfRMfSdv7Z7pTGTAdUguCCJkafWPjLtAYkPjoEfeKi3Gc4",
  "key9": "2bqronmjau79v49NcEDhCiCoycBWH47bYTRqmu4bEj8xaYMbLmx6LotXR1aGMJmKfZLPFGFE6S4fzpTzTnTA6VkG",
  "key10": "2UAWDkjUdiPTAv7MxrkcXs9tLE7YHArXTxrRH66qGsfpbcLUcQfZvoS1vWi6Ldn8LpZrcQojhbXVXBgHAHD146oa",
  "key11": "KvMzoC4SA4QC7VEh2ayPSycM7vbERgfWDAb8VQCFyBxTURd4ssEKVrbHWcT75j2M3bABmX5cBrJqJq7xsv8RGdR",
  "key12": "4tv24wNTcbnPD4uQDZhAL9yWPMSrzNDmHkFEaEEy9b8njgGm23Xvo6pwtWbFWuWyHDeKpsmc259okDfBfxrp3hK",
  "key13": "nr4M7zqViTzZCvRtQ7v3AvWhMtDRDqUvzFBVrLrkzLsMUyPT6Cojf2QqE8kmfoqm6zA2Z1jYGRrWtfmF4eNJsVG",
  "key14": "39K4M2wR6eYEHhHUCWocmbn1G9PRJTPc1DSjB4NGd14zPUrvnivb2Djxg19KXaDiX72ouWLahSAd3AQqxFSNeNVq",
  "key15": "4WGi4vWiML1ffdwj9xnQrhJpTWJR1ur1AzW3rD485Lt8FGgKVTghX3Wkiqdqe8BzBghZfhSNhvfobqyuKZhrxfz5",
  "key16": "37EnySq3xzFHHn67qxJzz1i9yffMp7Q2tj4bPUKmpPrjvkVTopYytTzsWKHxCbAEabG7v7u9ksFAkQvgoMD9sa2V",
  "key17": "3z4rqgXm7AjZEim8tM6Z8WbBoVDve5L4AGDd5HULqJieUufSqDvkFA6sPkf6g4ZtvYpLkFjsWQEyWRu3f6S4VD8Q",
  "key18": "4f98QiaNjmD16aLpBBPtUkhBPYf1AQDffXnRsHRCe6tJSdTxmbvpjgzC9Xj6fFxVD24vEhRLjpfd3HXUDWzag7yc",
  "key19": "28FKubJLoUTGqEeSkzd66WfvpAhStyUtmf3jU4RXbHNSMKrqnj1KMYXxu7vLzZECSA5umT6nkoP5SoVkxR6yjFjS",
  "key20": "2pwkhDN8fzt8xVTWpShg8jqQVES6DJmejGKhndoBq8MAs4r2w5q271PnedRAhyPuece31mybqJPJQZ1Lzm4AwPk7",
  "key21": "25kJHmqncCycWhSAS2A9XXyABAjwa68reZjhxotRLwamQHKoqRYFfnMbgR4jX4oyk2yLTtAuwJkp7wbgTz7MDdqW",
  "key22": "3Vua7zUG6AE1EuWC8Ut2dxuMKerzsAicgkumHADbdP5xfDf7wZU1QdggxZBjyQjjWT72fAGXJJEfGiv46AUgR4gJ",
  "key23": "4Q7sZveW6HBQwodcjVa8wNBNfZbWwmr7TQiFanUmbD9WpQHvAeS2YHdF5kxVDR5dDKce1JwRxDWu3USPj7D147xc",
  "key24": "r12RLWQ1F8MtSGdG8ByeYnKgNDtMKmmdScmuQK8LLNTFGqnDH4HtRbRHiEpuYGus4ehC64fLqnYzYNihaaJCebS",
  "key25": "473TN8k3CnydpJDkk46a71W2FJbURJ4sykSSF8yzeamRAXKRzAQoNzMJbiGCZM2vgEp4UcSvBawVpBUhN1e8GCZf",
  "key26": "3xKoqWGfeeSDWxFFSiRb7wymg6wMCrFtF1F7rGDspn39Dv1X3QMqptz1oeJafxNKnPGyJqNmKUFK3CGzBUAP7Pc2",
  "key27": "2A6gnZNaokpXvoruMHtQcTPAhVfPJJUzwTNJyMpV61Nb6XTyLE4tpJ71UUMZNHzMKsaPP2rfZvgGUzdNYw1WFZ8p",
  "key28": "2xTJZXiS1rLwMQJVTQ7u5pjoprywxmm1At2W7ie2DAmaJv21sJiXfeuJHvBse9zpiMcxZpSvkwVEBwguxtL1Znyv",
  "key29": "5DCuwikrUpoKRygPiYMJNsD9UbbJjGPdk2RRSnhjqCAmrgq94NqWw9R8fFWZjmXjhCybQoSbTUvyr5G63TwDjcuq"
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
