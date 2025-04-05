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
    "5VTtBXDi7aGgqUzAMu7Bv5AE8TUPqUKF4zDhJtnRy4j7e73bPRrphTsB7eCDJKcgBVAGUWJGjZr2fi9EHrcqs2nG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hwaz4W9fMC9yRRCpDFSDuTKQegiym76rDfRPfuyWR37uCVmjs8W2VhSygCK7E9tJVdXtC9To695Q2dLSUkQmVoU",
  "key1": "2KAGUYx2xLp35kb1V2gPLcSeDP8sfuVEyKKWYAAe2ifXNbaJdeieM71wV45bBMVMT92uo1ExUuMeQju9iWarghUG",
  "key2": "4uQQEitRZourDBAUdjBwye9ghrJGeiFfibpFqQC3UAyL4MYCDE9wqPbP3gVzKcLhaPpygHAbb39MmvrauTk2EJiq",
  "key3": "5ZYvn4eYEcD4Tctb5aTeGjVv8doFXZV7YFW5zEmxdp6UjKXLmnGQJw3AYGXrJGEyKFHnY3Ye4N9XPAQt2XY4wkhD",
  "key4": "3E5H7jttwitUEKTLaNYNTCFP7sWMpn4rYj23KdfPYcZFZtUDEvwmud5sApiBXaCN71XujgR2ZDwGxiVqu3zwYPCr",
  "key5": "Pb1S7YRrvWZJg4XAojqDhQhra88d9TSJWk8bgyWTLzKNnxShhZerS2zCJywA9kZYKLkDJuh943sT4JmoESQSDHt",
  "key6": "2B282urtcx1NCW3omXdXvVAfNk8BB8ihd3PQQrhaBK5uiaWqKknHnG8XWwb4n41UMrkt2QW9hS4aFqk9nMpiSKRg",
  "key7": "5inZgh3UqZg61r7XCJTaPXa5UAVQNM2WRw7X9cH6xTJCKQ1HT1ean3KEqUSuEKAXabq4GCDgf7BhtfXQ5yT6KBSf",
  "key8": "5wk79MR1oEkKA2gwsPP19HjyULsEdTFuw6dsr6kUZJetrorBQW5fGp7SgJL6FjwLsiw87Xn7vv717MEDKAtF3sXA",
  "key9": "55WhBMp6tdqAdZBtyzYrSLcFzYt9Jok6N2gz5CVb4m8dgBcJL1UafthB4nNGK8DBVTaZx1ogmYefqhJ933eruVuo",
  "key10": "4hxNNqnA4CUGDgnDCmWwiKcAfHT59WVMHqqV6QJWhHYt15SM42amdqe7T4TCdHyeVzsDgVyYBwyfAL4kWPXLvWTT",
  "key11": "3StDWXFj48mnLgi5crCcXEMgrW3qMeX2CE6ep9mBHv8ZWegRS2i9yknRdNQoZhsugcNHz8LUezrEZdvkTdfWY2jF",
  "key12": "Qfb7xCrsD6azZgMX11rzb7AZRsmP1sghMZYpXH7kAN3B9qGuV4W2rFzVZH3VF4VvkkMBH7mRV2MyTXR2qcj5NES",
  "key13": "3jB32uA93SiFbkB8HAaBAWqZd9ivnbdRkei7utrmxKjFuEr4KNHJiDUZ6DcF38CP5HTGsLmZjNZxCdbArM9e9Mmr",
  "key14": "4jaugtuughi9fjtJ4tNxqfTyrn37em96sLWansfJyJi9nmU959MfFutfVyRbVY5KAn4nDuc1xYLxXPUhocJXaUqb",
  "key15": "595YQQa5i8TSWvjHDb5LhEzJRFCN6uGT5S5Hx4GWkNpZvjsgChB3ZeVWHAokEw44nUJo2Wctw8U2Z2ykGnWFESF2",
  "key16": "4rdfc7j2ydxkNndcjXELbHfa5DbDsF4AJtnhmS9Dk2nm4sgxREBEppiYGNmr6WGUxwU5AuKqF6YQYSApc2vcAqK4",
  "key17": "413yHyQMZDLSXAoVJhURPHi6fzqtCK7VxVGiUTXev5s6TcEiShjbbo5ex6CM8fF8AqF1GMDsbvWEJvEFCwAED9jV",
  "key18": "hqkoUQ8zysx5ixBq2zEriM7W8wEnyvEmw4BjpLMvPKbpAHdUPfpE7BQciaEZ9KcSzJXJna1XyKLaehfWP96GRHY",
  "key19": "53qnofz5HWbKRSBU5BAGVXH5aRqwk4fjWUDzSxQndbSdvAEaTWC9LU6JUBSTfJQSv9XGJSSSeZkZ5ZajVwY47wwB",
  "key20": "3LzLCdCeTk7DqKzmEam79wmE8etaYgB5WR2YNebzWQTr6g6ZgGt7z3481gSgEHC1PtBAc8W6zwCGZHPaRJy3HAPT",
  "key21": "2rnpiyakydov5RedKz3jQGc7HGsf61eGbLH1MncHXAe1bUZtBM4FiYBF34sDWMFckvSUg1GvjeMsBnwrfxRg3DLK",
  "key22": "5iiNyw7tcV6ymFCp3HaiM2vT4YmUeechG8jACjZVcryqHvWjuAWxYKAKpL99H9NqMS5sUGcgudpP1kPimwNF43PF",
  "key23": "EJuu2hk2fyAhrKB8NVxfA12Sq2g6eGe58yCg4NchJ3HnDwzw6zD8HgR68vztUG8gDJt46mkJZGP8bpSqHtWfTNF",
  "key24": "Gtgpw661LLJng7Vay9jn6Rcy4a8qPDadReryLKukoSp2p31U4HufMZQeKbhDNzZnD39enTGsZpGKEkUJrcqw4Mk"
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
