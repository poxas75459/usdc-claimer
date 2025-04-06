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
    "5C27xeTVwNCyfZ5X4PiyaYcR6GP6cP3X43kdJV2DvKauAgG5jfysP6Rirs7Jw2ZzEjF8r1wEfRDc1yvDzPqNXy7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVZFZVR4yCH9jaGEgbmf5ooJ73bHzh4iLQ2rSQKE731wLMYzCpNvkv8vZeUr53QN9JkdW5PV9mu3VfuLatoLVZa",
  "key1": "5ZwR3UkYvtyDyXAw1e23tz7FPxdGjWCLiyjWQ9KygRrtbpsvobDcpcXqZrsx63jACyrPouy3Z9irTf4hZq2JUAfE",
  "key2": "2CS9i5cWkmmHQhnVQUzbc3vTu4pTHuvAev9qYY4tbbjenU3s8M3oAw7AA8jZGxCHH6NW1McY8jLR8zxgxxSxQvad",
  "key3": "3PHPQFCWeEGDVgLYcojXGViidqdRAho9beFhdWXkF25d2fe2Mw5zvbd3wb8coBcSkeB27wkEcJjAib1EGHBMb1kU",
  "key4": "4t7W9HrvAT8pAPwu2H3XfjMB8va56g397rpjeGnjXqyeJReDcPW84ARE3Wm9Jbr25hR59E5Cg45avAqTd5ckHm8e",
  "key5": "3kA4VzSK4uZ9TPBzrPYJ6xRctMxPZeBF4YDJYrZoxcyfQY2x7UAfehTz7BDJb9DY4ZfDNynHVhdQaWY3J3fXwNkv",
  "key6": "5zwpMv8YCNHcZkkJ7haKwsAt8M3Fe1g1Htkb6PGLfpTYkkSQocf7nAbWhth6d2JXGqyxYAQotnxUnFbAVju1sKsM",
  "key7": "35xTUekkRcBJKfxvip8eWKf1taUCUdN7ffu8aTGWij7Mea3BWWaGRVppaz6SCyhm6RoEqcNQBXpufYidPcbvRibv",
  "key8": "3bPAp1WookQb6gNeYkBte6H1ov6hGAmn9Y3YKcYeFpwxxUzrgjwWmw6KLzmBD1Nn1KWhKiETq1NTq2Bphnp4uzVb",
  "key9": "2spQcmK5VXrHb7b5iGuLLKkGu5My9LAnyRcwPYB5rtaNytcK5QjQ9KPF4nCACnX4qBiHXpcgjVSg4MGa7EyzfUJ4",
  "key10": "5sUXtqSmsnRL686Pwk2FtWXwN5L9CxKCE9MyHgtuRK3t4jKFVgXTw4sq2DyeedvNEPDQs1ZVTQanoUXPRg2CvduT",
  "key11": "3X5hvzkJbuvJ7QYmEqkn5iKsia2z1uK8kzq4pHunDGUQMAySH9Sai6XgpqP9MpSViVCpnwCWFjxvh9jbbjUYZFMK",
  "key12": "5jxb47UXsfZfRsZXgZhGNi4r37UwZs39hrxQjXBchdCDw1YMuRi9Pqx7mX1eGAtysvGXJPm1rTFVGtzqWPbSCarC",
  "key13": "vanFLA1y8Qmt4JecVAq8ynfz4XtdasnGWeW1fwBvTczxrTB1etYw49hAxQiHUyVcdsgeiCcXXfGnq8m6SiThVYe",
  "key14": "5rj8n4YvCEgNsqeJN754Xo2Eh9TEH6pVcK1z6z7Uxf3h45Ew6PXu5jE2xS3yfU5kzrSW3tznJ4cg8ZYW3mCitHGN",
  "key15": "3mBrd3YdnYVkDVFrRKM1FT9ftCFueDXZJMwp9uQK7D4j3qJdFn67i2BkWaGCzZGTHB9tkBxaiqDpTSkKRBRK5pvc",
  "key16": "5KPPxoVXVcxRrtVwL7o5gPpK6GEzu6SR8UAEjnfPbPrWW9MoVBKijKjL9V26BjKpxhBWRrrZTLWpja55rHuQs6j8",
  "key17": "5vnUaKUuN5hTZFbiBdJ5MPUm3WqGmUCpm8fYDQYLmC16thHQA5rw8uN8CqVJkBxvU2E1dXRmHdmVq9hL1bbyh4oj",
  "key18": "2GE3NAi1Qgr8ApE2mSs1oRCqp7DCLs4hg9iEaABXXFBeccYseQwY3z6xMQ4SnbqadEB4TN9QTZ7u6bFpyC22frij",
  "key19": "3gGV2dCUSGBqi96tQtXwpQneXT3L5BhUjvLARx7A5b5VFXqfVxArsTBXy6E99M5ViKS1D5eBYFi1BXMqEn8L76p1",
  "key20": "b9HV5VPYj95nprD7kgcQ2gAGNqNsJb6h9RbWgbx9Bto4RQ3pt4dYQwRZ49vBDDWrEbMcDV47FggtyqnvMvWoLbb",
  "key21": "4nSowLtj9JT8xLGzM4WBeW9mPhH79ZxZzPkZ98PgBvxBeQ9qHsPVaLJKG8dy4zE9rCHEWySgYVwab2D5DhpTaR8r",
  "key22": "4wv37cGDJusLL5VWf2csu9QEBgvdJC9oci2FnuUauuC8M1xfFPN7dBAmZTAfwXcwB4N1bbT4tYua4gt37phsxVF1",
  "key23": "dmC42yC3TEm9KerCvwNVN1Cv68VMKgQEoUi46pAYk8hrbApeYm2DYr8b6sR92kPd6UK6C9Vp8JRCAEQVkReJfEi",
  "key24": "4WmFrQsQJ6bpWdB6bTHcsbSrhydcQvk7FijuDKHGuL6WSjLqCfgmMytq1K1NgqFJGYJT7UyczjSC5NYGCJNozpzk",
  "key25": "kG6SMn5Y16UXXGmQecDJecf6Migsya6wZQDjX9Zwg9vwg3CAkTSMivWvCePSQnJ4uxKTKYLw4iqhVVEkYJrFRav",
  "key26": "4DC7WguMYrFF6M6akBpk4EjbkJog76fXfDwypocfcy6HRwvur3tjUcXsY6NoDY61iSKcufpN6ETxhbDzSXEiD8rr"
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
