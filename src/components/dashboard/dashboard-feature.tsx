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
    "3drRxfg1Kvaa8MYKUU7DbZDKDMgBJRYt8wwMUwEo7CPLCBdHWDi763Qc1RdPGw25FLFVXTn6Vxbysk24ZntrpzDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61mhf5YHyso67zhx4k9YmWzXmFUwLhPXrGgRbmCfChQUetU6HQAdyn3vWvumX6JfqkxV5MGDLXbZAEVNzgQe1CmL",
  "key1": "xSTUNMHq2HJNgtNRjW7XkdhB8M7P6yGPLUXPJw5RYgbsxx3mq51P7aFh7Bhce71nhN3b9L6WUBDbCBqCpUpvuY8",
  "key2": "4AJhMKhWTN3VF8fxuhma7HYaKDwjphViudnKYXcZfV5TJ1tK8iGVRWBmLxaHTbePTDFw8cbrmFWwRUV5stACe2RD",
  "key3": "466aP4qwU7PksE6QA9t7dL4CKP3xLePda6Z6nY6YY2SHxAHQ1iqzJzUg6zrQeFwpN6JyuZHv3YhptxT9uhCbjYps",
  "key4": "2PqmEh5FJZFEbdZAxRigr6CciyUXz9SKpAcSWkhqfk37xaQbWMFMi4B7S2hHuz76pqbwxQFCzXmzuef17AuG3eSC",
  "key5": "4fpBkT61b41QgMtsiA1dzdYZiGeEgmY84YwPM2v5btikhRMxmpwW1zQTm9SEQT5jZLXto9SE7fubrvTZ1Qh1pmQr",
  "key6": "3YHgujYXGjcQHAPYkJkmvPSfpvy1MvktizZjvVG3XjuWQF6DiPpHV5xHqsSEd3r7oHwNpqKkcQ2b4bm68Vs77DFo",
  "key7": "4oN12zQ14JZZbSKX5FhaLbwXdKVTJbhtokyjbd4ootFa51LdtxdeVmKTnqfCZ4rMR6hfWeutWzQz8gwxcJzgq2wj",
  "key8": "41BXAazub86ANBeequJTnxBUHhCGAguiafNqVqPBTTaG7AKQw7oD4ShrojHtv8tVhEd3QTuResraTjF2xhGat4cV",
  "key9": "562B8vT41pphME1zxEmHKTYnMAS9Hh7oV79aHLLCsUQfCZckwU2447DVM7pA8BmjTgNbgAYGdXGWnAGXtYZdr3RV",
  "key10": "66vKLYy3EThfBRZPkoHjQNrBcGhPCTB5PCoAGp2gxRHK5H84936s1s7VGGQAULMfhdtwQ2A4XXLzBNUgwTn8RY9h",
  "key11": "4tkcA7vi7qG7T9T6kEfVSV69QgrMXviwM9ZJJkVHaPvtp5cNtmubRmWfiRCBgw6h2pMw8zCWngB3H1Wjy3wedb5g",
  "key12": "47KJvSsLSdyYex4MNkHU9kCetvodhCV1bws4C1FftRx1iYpu39tgueJ7TeyBRV2kCYZBMw8Tfd1YHd1oJ3BjuotR",
  "key13": "aVyRWFja7pfrxX7Cdg6HjHrda2rWd5CFsj8soJpuhaXpGE5QaPXg6V6uXX3kXa7NZMBbo9R5hV1RfexjQJv1WLo",
  "key14": "421qsDESpnEyHoPwVHKgmLY8NYP9tqwGBLSBbMwTJt1MFhyzb8okMUebu8vzRv2tUfYZixAqpM38tHsw1GFoAxGm",
  "key15": "3vzEAjGhasQRCBEUFQTn4a3oyrMiEjy6CnXQS92f1B7yiu4cBTSW1AcmMdRgUtSVBUquiNuRgLHYeTRyF1Ttut78",
  "key16": "5nkmhzx7XVTMM67YYvgvmrn3hQLe868YVQUDYduVUHb8VhYu6SmR4aUYXkU4EUAFTMDLvcCJqqCmMUJhchJ4ncbm",
  "key17": "453hLCvn1iZ7FKKmmQNHLZomK3vdhwqVJfJ9BBYT7wGqnJsdz4f8xUoUhxtr6RoRfMH83FKNVoj8YRQp7Zb9xArx",
  "key18": "3oWEEuBYXhVmgjXYZFW4SUespSAsMhGFCdA71QzacoSNNpiaZv5c6pWCUsqsQHFVnsoK8EXUpnv4aPknEDDugCZv",
  "key19": "3UeqDfm8QsZ2MHSGDs2LNZFMWsqeT6dCtK8qoaK9Aze43c6vqoQpRDqcF9XLLxiugtMLBJbYrJ5MkTGrAooJT235",
  "key20": "4V6hRrThuXVcZ67NhJwgwBjwUv7kqY4UcKZsBDCgJcoaTW7uxFzLjwwK7mMhUhawVyCufkuWi5Xr3gmGX5BapSY7",
  "key21": "93EjJAs5S89acRAugg8aDsMthazgMYvANWnGgWp86HGmME7zQP2YrFN8AkWsgLogU6UmYv2L9boKq8CHWWtXPRD",
  "key22": "3oWT7WzyjKdLUypE5WJJ7p6TaGKu8b8eGJ2vS81toywUJJJfKjZmZq79Nftd1c22MRcV3dq1s59RvRsuXBHmdLRw",
  "key23": "5zgzfd1WmWnUfU7oDA7S3ms7bc27Wvp8K2XxoKTcJaobuUw5GYhDBhrGZ2gFhNQAYHqQUMm24XjHsYEpiHBffovN",
  "key24": "66oemrfL2gyAg2Ay8fBPMCZxzuBrc3UthuZTbpDxxkexUmRczJwjxDTYXrrMu63CudgaVAiedG8YEb2DHac34Mf4"
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
