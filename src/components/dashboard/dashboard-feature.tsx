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
    "2WtWbQX6qEHHbf7s7rsjBAZZoBTvAARK1rZraAzFPuxEfwQZsrLCYqHWnfYTWkuLYcgCgDPrJ2cjGAXdQ9WqEqfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29mT5isiv9aQHN73UrEYeSUZsge75xLSgN1N53wPUHKPpA1DV8W4XGBvvTfSphueoyjR1bqFxdGNqLVhJS8gBm9Y",
  "key1": "47hyQSsmgHiCgTG5LspEAFKWHc1pfg6inVhP3FcEQoYVSpnCKXySFbERZDgXzrxRn8pnM9mc61DFksNV4VxYkoSc",
  "key2": "4chHytj3Ut68WRqAmjcc9FFHZruQS8Nd6EMAimJ8p2sJ6HpLsxAt75CuGpbzPfyg3T8TChtY6PAq89U3jMM1V63c",
  "key3": "2pCoPfgiZAxpsw1pnRjTWWGeRhgkQkFeVnodtuF4FHEr4V1pKeS1kMNGriynatqgzyj22QWC5Hsvy2nNnrdDUrKS",
  "key4": "5ybiVqJSgKPDJYUxwUtXTdwo884TNqrKV8us3W1YKi6Re57LsSX9PiozTLdRNHkinx3gQqjD1wwQkzqs3UbBYZUx",
  "key5": "3YHy5tquE2XtHkXpbHDi3gNcpQerNjUDfpsqToVWCPqYru4KxMaC2Hf3a5dfkAx9u4N6LkcnFrf7KRnFBL6UL2Km",
  "key6": "64cnenSJz95D8FcWZGVnHuEtqJAFYTubvXiH8XCHGE4uGPxNShPgfGpdaHP26Gz628JwNKsrmcMqTtSukyskXkyB",
  "key7": "t1SX8cq7cLkT6qTa6JGzjR5D95B3a4Mv6AhcB5LfYXyZ9GWJrS4SLrdvs5wUP5xo5FohjCqbZy6LKR6P8dFByvh",
  "key8": "5DisUKQCu7wVxpA5rkFRJX5vQcYAQEhVHWqY7uGdnCeL74JbmB3kPzFp7xtCK9jycNjjh6zCUsGdDwd9S47wmKT5",
  "key9": "5A8pHBoVJcmVEo52dfCMjvtqwQUGLekH9Qi3Ht3szR8Tjy4KJ4BtGdHFU1ojoCCLNPbdhEhfvFSF58mxADChkt2p",
  "key10": "54xByjoA3NHWMDRDyUF9YTLVeTjPymcdvGPEDxLRTHaiKJvuLdzpfFMjiGjEhmc5a1ukXx2g7uuEjwShCCxktSDj",
  "key11": "4nPUTgGCeQJQkE7SyBq7Mo8tm1uyACFhLKjJwDmU3d7Xfz4Nx5shZjHXWAMk8rY6Uk8Hz2qB65ZPzBa6JQhMwcUY",
  "key12": "2nMazNUDLVjsSWGFMJgqSjEGph1pmkE8kK27xAAZHR9FXpeAQJPpHn2ce8Rt72itRPHt3r3NZNHwTXAedaHoXgPy",
  "key13": "4bWDwZkgK9mYDYg45Z7GmCe45S89KDg2DxcSF8eWpuAoR6UEHskEkwBT9wbZBVukBH33VGjWD8Yx6bjB6F6EAgWK",
  "key14": "egkCX7mWFfYvBv9tGUiptFXJfbZ3CH1a7D1FXjGDxBbyJP2L2wRrrSMHw1xXYFKwUypuLDRHhrzsfWNwyVU1w2r",
  "key15": "33Td788qJpDQrMVDmkyLVXHPeXyueDE6hhkSiC9VVyhKviaKC2wETf1HAL1SjV6G6727UVUAswgWzibNH961AVV3",
  "key16": "5MLTL9Wbv99VZ8VpfRJj8eaL3pump4ZZ1WCENo7JaFoHybx7zi6sToTJhb7ss4ym7btN8EL1HMATt4yL1Uj5XioD",
  "key17": "5uzuGR9Dv6PfQdio9CvwSWB1E5yyw8qoq3rTvFHjsNdVVaBqMRCPDhLceNmjCrhrHgK1PTvSRQut66frk6icjZtH",
  "key18": "2gzwMRqVKYXSE51CWvrZWkrnxSFK11wqdYv9UuRSEq1NTUV9R5bk2TMm74m4PgXo9CJD9K8Ug7ji1DEkdH8VViVd",
  "key19": "3ZW4RMTxNwW68oQ3sAJbbwCm2mamoSkKeR33pAVYf7MsqRqF9s4vw8Tp7XNJtd66DT2ASzdx9aiLzoBjde64bXm9",
  "key20": "2akRJTcvLfrAdKLxdiWCbG5kDTTz2bYkvD7uBSHmYFhN8eu8JLS9c2cqkGfWeT2FC1SzDq2Uk3q5h3a6M15VtuSc",
  "key21": "3kHEJvd39FzzhbhiMgG2DWQZ6c34U2LLBSCJvgB2ppUATbEMcWwZTEPfub7SCQyhuYeSNMDNhdkeXXiHUTuApmJ7",
  "key22": "2BsUj9rmmG3TPMBkQu4UPgJFdVmLkRXA4o39emJ6uBCjchFaM2fyozkkvfEWziHfWuDzPyRzseg17216E8U3UVyF",
  "key23": "2mezPuDaEXNPq6niLPnZnK6yddGh22D6xEBDt7z3toit7no61HsNJqzj4kE8kv5DA1y7wD7uc1zzmsoGmSdUK5U1",
  "key24": "2gvctukRH4LB76BhQvsmZnNE7M4ULgQKUGaf1Y6gp23Q8qc5GnSyT63hXwbHLyVwzGWmnsx5pTiZWfSj344Xwwc4",
  "key25": "4hT3xSvS6QM1mT4oU7jGnqpjK7JMyBKQSo5bCgYDxdzWpoYLhdVgsP19BSNrKXTYxEEVZaTQi1mYmdxHkD4QXwKv"
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
