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
    "3Lnb3FUz84esK2C9mzbjP226WTZjzmmPnmd8ZdzHVAt5TkaR1s43ML5HK7hQfoeJUYRbVVe2KJodUFLNFJMDdrww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TFZ9kMGmKCwD4UcoBaggoyuwsbRMz84bYbhxVDC8QghJBxGxBU3UTebXqhbHcrrtMVmtmBR6CRbQhneTusoQd5z",
  "key1": "Nc1PbRtjB4tnM51VNRGPQBHEG5pMqBZ4qSfShFZNoDAZLJ3sgTGdJmhjWq2s3VWJWeJvnxh6J58EmosujSXuZgX",
  "key2": "Zpvk5oNVKNRpeuJxvimEHMQvfpTwkUZ6oMg5GMNQPmXkjFUUjxJ6MtNf2mPNX7383cT7J1tvdasSvGzQziKDMg2",
  "key3": "4j4pBPFJFNYs7U6n1eRJ5iMBNbpuE82GTogB7FQdnZkLDNhVj14JzKrRkV3Puo9NDQX9q2tMzwHhxRUA5HSPWTs5",
  "key4": "5ZpPVcxzvsyrHquveRRJZwuwACwEBkWGddvKBz16dQqjdbxPWZLfSGSj8DHkeDHUKdhx251Kw5DHG8b7e6FBXyLm",
  "key5": "2scCMEnedBDT3nnLwwapzuHe1jg6dej1BjV3GR243He4gLwtVWno28S5tQiKAKUdDn725rZR8DhdWSdtJHgyCom6",
  "key6": "3rEsvnuwLmk5Nruwr6f5wcQCmjs4sxtXHFuYZfPpyfKGuNQH7TsKUbP2465Q6aVUbAH992sSpZSE6oxWyLLzFStP",
  "key7": "2mE2MGpZKvb2kRqQK5sC9uMexU9rDDyh6qujQY78rFLPjgRNt7eBvQFurwtdVAD9CbkikNKAoPD9jRgQB13T7r44",
  "key8": "oLNc4EWPmtgWRDGqnwvtBcuW2g1Fi6xramn7L4iYvEvgoqZ8DMC2D1fhby21wLCv5oJ4cybfCtxf9Rvdgp3ynUi",
  "key9": "dHR9jWq7PeaHb7QXCq3ZDNYpVsLQ4zMu9dBygoXjnkQMdikGHRupDQB99SJw6GMjcLdtcdQbjSpWhWZ1iYitPu7",
  "key10": "3rBtdbHBQNXGH1HVerUxZgktPuQ21DSvj2YAjXR5TWcgCCH1VZpVaV31ZvojmA2qdi9dFiAqzkjwTXeBNbAQknYt",
  "key11": "3zUBb5oRJkV5ZrWWC4bTjG9x3WJqBmj9YGxVtGvMCqHMFCU3n6jK9pDD6BBKLW1xHF4AYQupRQZtNDFVk7V9M33E",
  "key12": "5woXoyLXHYxEJxSVQjGfWiYNBoF1sNz4ACeDpL3ADS32kAb4gJ6quTKur7SLxKSoZVN8x1DVwYKcxYnWkgrEd4aL",
  "key13": "2AJSA9HPBp2UZNBrgcDdLbMwtcKtUY2tsTFWBMwCgWktCo9abUrRnYVxWv8ucBgK92yFBfixUH8n8jc4KMwnbr9N",
  "key14": "2XBKdUXPMJVpnKBs83giT8aE7jK5rk8RWDnJr1EDQPdPVpjryRqQnuvHXddanEeiXeCFk2jCHmb9CDXBCuE42LGF",
  "key15": "3JCPEvKxiLou65fL1JsVi76tVzTsb2rqDfSqC6trYiMjF18nKdsfaKcd9g71nPGgw83Vta2DSRwUE5hBoMcdXCwT",
  "key16": "3GgwZ68DvWNyytDg9aAkAZ66jz4WJaQCeunyLkYTcPYMA9kVVkpmRFxdWyRNVmbRcSGnr1RaSZtDcVib5M1iSPWS",
  "key17": "2u5RKDofcpDSShFWaGkzvJLgPURzCJMN3BH1pmiSz9nGEzvfN2ZnJQQ7y1XAjvmt9MukDymKH7fxiAzQVcs1PHME",
  "key18": "5KZZaTdeq74K6nJkPUWZyEqosSR6XZv6ktxVaKah5MrJFbnSfE17rCfCampfkbvDoKtq9F5ae3ZU3UKRKQZiL9Zt",
  "key19": "5QwnjQVFSBszprmKB6braNDxS7x54dpLdPJ1kyNokC7AFMXspDyopX51Q2zaBU2uYH1M5wsmjDTUYrg4PqQRTkLH",
  "key20": "37HscpyuheeEGSV2MkDU8m9abdha1692vrDWUxJWxmqSzr2Jc9LrPQenFgph4j9inhy1JUc2uh1bqNNtzx59SMKR",
  "key21": "3fbC9gxgPP5ELBcGgGMrWo39yxNeGHNvwjp1bF7cDbzVrhuBp6aujZkUb55HuyV96fy1eTpF4ALpGFNkpqKgS3h3",
  "key22": "4vCTJcpXMFp19S4i5bgRDDMJC9RS1obc34M93bHcdsm7qzoviwAqjbfZQGwRqTASaumneo42ZBb83PCKHtVUQ1Yk",
  "key23": "QUM3A2kSctPsZFhgFrHKmokVQAsaJRuzUxLfpKrkKJZFSYiFD8a7pPjXe6bwLT1sXun1cixZrRVW4NqZz33BE6p",
  "key24": "HExQPCuA49w9jcWRxqyjSHZ8mbMjfcwAWXmazaqzTzmLs2LNXK25MenE4mMNVLN4zgmgw6QKgjfugpRDLk9bEgU"
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
