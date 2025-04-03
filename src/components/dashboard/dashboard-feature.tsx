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
    "3kfnikMSejW5f21ticKggu23SVgVTgivSrNV4b49dqoKBTDGbMCD1CgRukjrPfXPtW7cpT5nyqXbwnQRhtEa3o52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AzUtzG1T9S2odJNmA8xpmGdqSQCVFjMTv3gXeYZ25LKUMrzwTzRAaqtGYw6mLGx6ZHFMxNUFJ8t8wdZBLiVcJEW",
  "key1": "2cDqK8GCVVrQ6TwPChBHaZ5PXiDxRwx3LQisovANUAvpSkpfRRk9hgkGGcc14QG9RgY2WrtcH2HyRiS29v2wNzrP",
  "key2": "CZt6eAmGXtnnFbsYzcwFMpfQKhf1B17AFPARDyaK4SzdnP3pcMYX12xkrQrpV5PTE3nh5d9MwTPz9yCp4D2enAS",
  "key3": "31ZgF3v6TSdtM58oAi1nz4xqexP4mRzaWC82kZfwAiFrweoDb5Z8DpyBAb47FiSbPwi4Gz4GQFKyLijXCi4CdtA2",
  "key4": "2ZwR846ZrmqgWKsNkYdNAVSEDpp5YWBx4AmNSA4UT3wFmtmRTEgr3t9EQGN6TVpjVPVwsNb8TJeFxK86iQzfkuDv",
  "key5": "2NKwYEt1cdraST2rehAvNV5HMgWVJaiGi6sY4gv23LekQfG2uuiXVQ4Hj49e7ZmyUQgkrJgQVtNhFi5Cd3VP73Kh",
  "key6": "4GEc4vo8ZLMeWsxxQgXET1APApzbNQbmQ2zBJLAwSCnC1XjHf54X3TGiyku73xnSPHGFnGXjQVijy4wKSQWPmTyd",
  "key7": "42zB5cNTcD3mKtQBkF4XtkGLoVQQg7aVCQ5PtrVtNfK8adFDoQSwQVed5MtnDLMsSsD6Svb1J2oNwRY6v5J589xs",
  "key8": "34q7UmexKaz1fYiVFJGDDx1wqk1ozLnvw5LKqnNoT399AaQaX6aCuathMVFAdgRfFR7MNTzPRDv17JQ7XJSVBhL7",
  "key9": "3Lv5NqWAF8xFWwo3Jpr7NTXJ8h65J6RUQooHJ2d1JqVvacpswhTS1eQxZV6e6xCtva3Ghx7w1UoQkburagYihNFU",
  "key10": "3NKzjW5ZfL9zCHFh278VGxoWuugmBiK5MmWJ58Ca5Zn9uYaiFExJc6UcK38SJQmMRk2veJofUbsdcXwaxVa4k1Ta",
  "key11": "2w3zdYw49NcSSBGuBqmNVTs1ecCrXsfwfLPDzjqAvg9QfeZt32w1gfZB8mW25MZe7H5x2pkDW6pr8ooBv9Xwe5HV",
  "key12": "5iFcWGpzABxy1NXW5LskArJCJfZT3pFcs345UHgqXi8VhwDZ1sgSQxe5YhnqFauUr92X8fYhpvTFgVA49fSGyD5H",
  "key13": "t6wuUQJCQAaWVzZ4sr45j69TY34DSPQbHDFLUzNNxv6iJ4Vv5tcZZXawF1ZyQMn51WwkgUeHwZuB2cmKEL6YAgP",
  "key14": "63va1dvPoUetksSiDvW7Pj1m5ggi61UMQvZ5baWW2s3kCQxVNvvEnaCjTqoweqfnBQbVvuPYYyTUeuEZYQmyG44Q",
  "key15": "2ELX6vD5uh2eLTRJXnyAyfQidLwhTEXmFscZC5XQacrqGda93oB5ebRqW58BdW7wP7xXvAZbF4WdqnqFLqU1PBCU",
  "key16": "33M9sw33stPKFUDPM4gtmVnU7oQaW6FGzQjcrzqqff7tY6R8SE9ocg4LCWpwcSCHEXmhYb2ee5WLE4ADKQbXuDg8",
  "key17": "2fUS8HigKdi5aEi5MapdYtDDtChQxJbtqt4X9BciFFq4CXL24ZfBVzmyCBmhTmGCE6xTTwWmaF2EJWjFDUTGuV1N",
  "key18": "naCGer3SadgEZ3Eme19s5YNAiyGvifWAY7Dm27nUQTYWCkBypfhydZPkbnf2EsmgPrCvBuTth2w5hB2pL29jLLw",
  "key19": "2nF8QSxTfHFi8s1Ve89gBqMzraM9EVg2ziTbLoXeuHGbCbiv1sDEgCnewded8WrAPCTtTHkfyvzmtPK5tvZLD9j7",
  "key20": "4EB4kP3mju3Z9MaLBae3qDnF8zPLd11Fsss9eRskjdVTrx7BscPgwoKVZG4XRkEoS1jsEGkbCmjNppiiLCU3dJKc",
  "key21": "5YacDKq9AFubtbcDijpyandGFQAxn88TxNLQ4rEjrFbmN1wy2LV9R3KzRPKkdyV3xkc2AJnXeJ5UtusTQ6uYGdrU",
  "key22": "2Y2Rfjg5LoLuWye6BK9EJLVyraufvpeqeBUEykJaq5sTJAQe6ymDWutNKKPKSUScoTuhs6vojdBCNrJ1qaGVfm2q",
  "key23": "obsjTS4282jxs3UhWp16NZKLcN1fJ3oEqLPALnVS9YvLx8d1KSHbnGSpcnNqJe5svppq8XfjSWuZu3zPLGwKDPW",
  "key24": "1AHayh6a3z4KYzt8JzjLQpSbbmBrqJegN45W2qNai3NNYkMCXWzmWYbm2zU4ZNxh5xUFjfVG2eG1PvRBWgsrbYt",
  "key25": "f9YJr6Z2rdt8W2D8wPJekjyBM3BfxDFidbfZ83pLSqjwFeAb6csXyHZmJU6M87WAnPmuxSGWtURSBx7QjTGr565",
  "key26": "4jS93Xs8uwyUB9zeb2RF5Q1XzZSw6CVV8qFAZhi1WUfvRYPVV6fcSwwSYREywMNB97f8oY4AgMNZkQdNjYgNeF1e"
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
