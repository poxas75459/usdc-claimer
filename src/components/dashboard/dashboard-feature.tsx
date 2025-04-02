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
    "3d5gD51SSzZ31P21kTosbEc9npH5kY13Lr4x8KbnyvcnZXrLmCXkjFJG2MEKWAsG6KcETVgczsKVeMxeEyGgYRLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CAo9XVGrwehkji2pkSTtu6dUdvxrKnPJf2GnzSdhxkw5aJZcSGos5yfb6i2TsMxDYM386thmEDVTjzhbAoL3qpF",
  "key1": "4rdusUAEsDgNRbkrUtsfbMDd33HzvegCdkJQCTh38Bm7LKzgNntRZk8kNzX3svmg8Hd29pwtyd1sKdBZsJypVQgj",
  "key2": "3LczeYKWu7FF4pg5i5UoDVPzoHkUoe776vNZLtoQNqmH46FBCeWcc52jGoaHxojsG7RAfnFhaXwYUBmHd9nARCro",
  "key3": "2K2HrbF3uqq3MjfnKvt1uk7mFjfUC5vsQrMvYyjAmxBKWnWQp7SfMMELFmZoiWbaAtZ6aFAB5sVXEwvtoadTHWGW",
  "key4": "5gru9GhNBH4FSks1TbyAgKGTKWRx7FjdP2CvbMk37vwJCCCmnsTc5WtnkC1aDqkC1ihRKa9oB1qZi2qA78xqBaAk",
  "key5": "29dPTkyZFVYF552RBbhC13Qpeakd5yci6qgYnmdpRPWBHbvynSNpqCDoMpBussxDudieZKMMFheHwKdQAPJERLMw",
  "key6": "2vLVoa4C9ULVFYyCh13JJznKeTc2oE6LKXjjY6aY9Lg9ZpbWUnXr5Lw9NeKYYuTpbx4A2JeU6o9CVJySf9G4EZNV",
  "key7": "57SpGf7mARnPLsWU2n4UWhLVcDyy3nJH4FYmNARKirofuUaNf3WGaZWKuRYjk7iqVcaQ8VX4RvRkeLJbqG56cShP",
  "key8": "3rCkyXvXTfWavzh3ji5m3h8KbEU3Z8KL6qJTUA1QJs7v8dfckHiH6GGGk2CkGqvWSbuUQ4sqaXqd6R5KrXFtkNhn",
  "key9": "3S9CxhVHu3UTFeq61fGdE7DKnvpVTvUV5ETAbVnWrFtKJNZpqgpkmwKFx9aTx3hebDiWyQEvhD4yY8ctV8wzgs9B",
  "key10": "3BhAcT2ZWFfDbuPyPgrXTNk4rqQSeVvKUm1DrAFwSKBUXjDjUhU5ygVuTPib3aGmZiqYRWZ119MaGuyNf9ugk2D1",
  "key11": "65uFichHSMoFBZNWQUGBhkc3sM9uoKAGqHiGEigbt6n8ZqyCsLKz3WZdBpJrhxLFxsfGykyGLs8XcR7Sve8Wzj2R",
  "key12": "66vWkG3VxrbUPpx7x2Mfs9xXKCeycosisUCbMserXv9UxjbVoyLNn9DtQVyPNNMUJeDXcmf9YpcAjARKZiacYvye",
  "key13": "NFgepJwV2K82rWCBxS19R5WRFf7BzZVvWfcNFNXta9GCeTp1DeWBeRMcZeXF7WMx56zaVoPzRPPVouWzzWvxCMS",
  "key14": "f29wyQBnGxpNSNNPkrazfHFZYHG6K1HYsyMQHaCHAjpVscEsRMUoBa74NonacEfQt2aH9uhdSnWRcLxQsoDrT4a",
  "key15": "419F4mKughLidFJHwXem6XjG9By8tHN3AgT6224ThBMDHacoynasD92Ss8iA7p7Sp4G9pam5yy31cvEPo9yHn1tv",
  "key16": "2osZdgtUJMYkCwLCqMgYUT981wEbfi7BETcW9V6EvNRFR766uaaKFj2cJEfQxgVQBa7c4gvhSJkumPoqn4kgzS4V",
  "key17": "5UGNiu4P4gnnmvkpKqMxkMvp9gr3NJHhQ2yp4BfUcdek7KkcC3BZ9Gb8hjW2RV2Tfzweq4JBVKcmb2qcwDN6j4cx",
  "key18": "3ASttaT9D1soxYSbd8YpuRXpV5x3WX2h5U45Ue6RTWkXqk4NRT4ZHtcwiLqKjLvdexDmemu3hHK2fZLiGPfunkr",
  "key19": "byyugRBuoAp5E9VBLWcNYykTGJAGapbg2nGgnz526CfnaYVEUYivFrEDCMm2t9KuhmR85yBusS3Q7X8dH5SRq2B",
  "key20": "2vKrfYKbf1nFn622vDrJJv3Bezv7H2GaveEGbcWFwQAxH8uZKDavZHtWeUEjYPjQoeXiE4AGnyuMLxHA7dw9usqQ",
  "key21": "2MDZW5zWVmFLibRLXsMWC3BG2HrGgVADAWMtVQfMoNM8uEF8LEAX1HSFubeUFLLWUJQiLrHFHLw28BxKUP3wyx9z",
  "key22": "27KXsQTt6cQzb4Y3gVWVatdhno1pKNkMsasbvZPC3nLFpz1qDM7cyJ299e3YxbqhfNrMvboP6y7Aa3q58TCJJmah",
  "key23": "4aBgpjYZwXrD1XY8qpHdeDM6J89Ts1ZENn3HKA1LXSFmq8ZTFqqKvtgaUdh1cXn2QBZuLAvDDQdVbCY7ungzJAPF",
  "key24": "28ZGcBK9m4XjxHWMqeq84RtRZiMukCvckK7ZquLGvjV4TCfWz2QSmuWc7xYRsyVB7hwDpwyfcnwS158n5DUNzVTF"
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
