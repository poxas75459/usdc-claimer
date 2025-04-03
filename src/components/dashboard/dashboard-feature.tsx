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
    "5wien8WNu96SBNCgcgsoRNnjDvZJATz9JtiXkdcxKAyuyx1m6J8d6wAbhDCG8BvfLFbGykN55hVnvHC7C2fDQfyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59uacbgwG7BbmcRX6bUnJSmSsmbNcvgDYvojaoDrg7FZYN69aF8YjiWMDCGReXzw8gbqxEMZmCSPVHbrhyHgv7Bu",
  "key1": "5QunYM6YNFeFH68PjztemPyd78BA5ZA7H5YjRLDKjCSArHoJnzMrNCiqymtFyuXPSH3DqZoS34NHanZMuF1No2Sv",
  "key2": "k38jWgosavVxKxzNQcEtJRBHeSiaYzTEbaCoW2LgWipiUX4TjZDA5rrPbaBvTpeHNd4Hu8Eug296Wnr1rwf9LBF",
  "key3": "3cUKUKcYLC9LB8dPvUGBFv5hGuyQxFkeJp4HJAtxBmz5QPFjyen5e5fjCzXHSgSkUqskcNgkARKx1rXCEV3s2eEu",
  "key4": "4SqLC6eXLyu6NSdakwwcea7CeE1YUoZ937NdmFssoHorYaK6VuUb6NPQsbj1mhf3zqHmAxy5ktgePn5jV6uDA3e4",
  "key5": "3jSQWvWpMgmbNd4n23ZU6yqyjvsTaY38ffQ6QKNNDXoY9xasKBz7qhHREuWdFfLQWLJmpoNjNkcrPVN5WrfBEdDs",
  "key6": "5XPEi9a7k8ixRgbUTRRn5LQ6BNXFwTjiRaGmK1CAfJNyS9FRkg8c44W8vdAvBbUdfEzF8vHVfoJbGizyogD6Ba7x",
  "key7": "5FHjdjnu6jxmu22hq1LqU2rsT5YXSJiYtcuyt7dfEUjTeVyRagoWEJdX6fMk5GD5sqRGcuSmZhSXDLg83QRFQywi",
  "key8": "XirpLcvDKWLQBVLkKUx2srTF39x8gyE35MwssVWbTCkJtsa32GrFoRN6pqGuHzQRZiWzrMutqyDc6Th13teM6hk",
  "key9": "2h16YN1W5PopYygsNAfmum8p6m8ZVVohHw5Yv9kDt5pkD4ohiin9epL9Vc2WBCtgfyQKMHWt3LXfHN7DDXbDTPof",
  "key10": "2kZ36pqHPWfzbq2YWPhjouYqzZjedWMrC4UHTA63UjmSfe22VgF73518mNrbQmX4fGJ9JNQLum1uUR65udxE3EGd",
  "key11": "yC6yjFCeCLTNz1WU23n7xjKXjv94CzdM7ufvJmhr7Q9BtCdwATysCnf5LtRhYDnJCFeuRu2qHdYMy5rKHZd8oDp",
  "key12": "mSojnyhWFhV4TDvjC8YKrUAW4VjzeZPEDtQ25Prxu8HovJNF8Jj84Y2ohRHeGQmFQuY3RPZHfDYtjT8bjg6rrYQ",
  "key13": "4ozKjPRvE97AoGGRtF6ZPmgjgmjHgnwFD8871xkjhrq6nM83mKDfCC4ydNtFtvxx41jtTE84C4PfBYFno69DvBTg",
  "key14": "3FcHzQb4uhFRcrx3JN5jZd6LVb3nrmMd83E2w8GR5w42XkrHk8wC4sKk5MAz3kKVj4fy271BaMiNpsXrf9jtkwEb",
  "key15": "4KPM7xLAB8TRKC7tYWdkDySigLWYpuSnnZdmLgiYS7eTesYFXXRr6weHU8VaT8iLWmT9CpAopGtsM3JbpHqaaP5b",
  "key16": "3eLVLyzx6RLyDJbEEEjSH4fNEYYYuFNG4aWvYYcobiLJ9NuCMxF3a1UjFxzY3aYrQqoCw1L1ovpvG1cLAtK6wwTA",
  "key17": "2nzC8CWJKVtQJkuetQ8vdPHKeppw9fuzaEMyEc3gzecE5L4NUzbHPnAzb7ugTxmEStJ6PAsgCEjBCnbieJtjwxYC",
  "key18": "3Pp85FkZ5mEkppcvznKeQzoyynvLr7jvWSgNDLHFqEUW1zSAzcxvPADS1dgYyyiqx6wkrdtEW89Wj9mT3sPX94ex",
  "key19": "3r7qn9b37VoW3E9kLBxJFX6WBToVycMZzDNN89QYuUJUtBSeKNbfa48o3fco8ZgdFuns3Jg9Yv2hHmMrT4wMBKHR",
  "key20": "5JFhCK1X9Rx9vTgnqsQmbaw18L9BpR3JVChv4x8X34v1hUt7uZKjxhYsWoDT49evnDR8F8PAjFw77dxdxvApJYQo",
  "key21": "AkccEszkgR5G5n3AQtjM5njmTEhKMVgYNuRmPVRMitHZr5wH2gJDB1sVpYnUNJsVeVhnzgZ4bDhwNKFiRKZUBqh",
  "key22": "5CLVZXAZqDNwPHWMqGY4qFHeihtDoq4jzgjeP48Gno9tnvXMd37LFzatZfhUmgnXu3jfQRoWZAg3kZzqJa4cfELV",
  "key23": "VAh91twA1y1Z5q6L9tBaFw4qUkK3QJFHpuSdcCFwWJWz5So6bkaTaTi2XnRMB21jaE1s2jEjfLALQZbTZhHyXyy",
  "key24": "4XauSfJF7jcFG6idskFUuYskTPEy6XvQp3k75CDRYB6y5rKzPQboLNV8Qb5B1d66oRqrQbN2TWubrBFB14ihwTuR",
  "key25": "yE9VEbN7aEhNyK4Dq3CZdczaEAznvoPNTBRNSc6sPyGcYbPvhonc6nvcf7pKtKF2A6mYV62wfAEi4gYmxFfsxxa",
  "key26": "heuuCMSroYbiZFEPZrbNbakPKsS7LEgLUyt8hApdogpCnsqigLe9BK71yjQ64iytWZLrkp3e4dNUvbSuQPaam1J",
  "key27": "62kaMEgd48Nw4NdQnBr9H4nnCUYfnjcj7Cp4QRmgFoUZrJ3nvcnMJwe5ejw9YmsEybhFHtTp7HjN5n6irVEi8zBm",
  "key28": "3TkMZC8z1HxqBxjvnitKpQGvQQUfnd5ZXN5zHDZKk9ZNiEwKPPK28kjwJLP92NXE5SpYDACo8P2wBosa4CDJhzVr",
  "key29": "26QkKDM24EpnbhUhEy63rW21kWEYMopzq9DYrGxueLqHyx8SGp3xQecVa2J27yTH6KWa9c5ga7d3M9YgDDeXnFQ4",
  "key30": "3mX9kXeQweNheoqC2jM8pcbCgKtWHAsgKyszBc1v3vas239jjN4yzpPw7T1mXRU1USWvEpwkconH9s2G8Czzome5",
  "key31": "3adkJvxLw4bXPMV18JWGJ195fYPtuzrRDcoEC4VkhGvF1XPcNUsmkVQoCFTwuV2pQHMckq7k1PrkGQJGAE6WVn4G",
  "key32": "4hZgk3JNyxToH7y28T1YDzcmM8PjtfGC472s5JZFWofsmudXqXpguddx5pjwETXcoMiAGbs4fFzQj5kAAGPh6Zv3",
  "key33": "5yKoRYfigMx8PRJ3NEaHQXBWPBv6Ra7yuxtdaige5Eswno6i33Gfh6R5VvJ7mLQULHwRRY41r8cM55kJZESoYcyU"
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
