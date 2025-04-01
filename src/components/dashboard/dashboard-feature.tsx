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
    "2L7vn9hvnD2Yocb5a3y6D1k7xupeuRMtMbeffRd1xDhLLPZbrzQbijB6rsD94aEoF2PuLnsXa247YgLDhidDh9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pAwWYtfhRan4wT6kH4LKCXQdc789MYdb2X1pXWX3EUoy4sornvwzdxmJswUATLqx727pnQv9DYdaB5igFPDGS7",
  "key1": "4WARDoiVtYpcH885ww2P5YHUwXfbPGwENLxorFzkDsJLaExVLJzF4YXDqjXFGaynpwDRoe1GHTg7LYRXiqDxLuWf",
  "key2": "4xoUVjp29hfaQoraqeVRDeksW9vJE5fWXfRzML52VRtkhasjszHv2K3Huj2JW8hqE5GeQieG99WWUm9MHEsxvdxv",
  "key3": "zeKNi63otvoDcBS5wDxNScLy8WNkBVYSjfreFMvtK1PrPGbaccZZu3ViuMAh9ZBSkdbNvf7K41JntvmwrM1QfTA",
  "key4": "5svSHKcmQwsTxF6Lcf4er3TpLqWcdSirXNGLqMHNA9S5TpP1WELkpeGxDVbCXA9tATf4n4Cy47XPUkorQjWn456h",
  "key5": "3dkX2NsAHFwLSjLbY2Fw1wThVJfd79z47fHnejJfF34fsLw1obAPH5cfTR5uVx6iao2vX2AbkjbAjQzPeD1Audyq",
  "key6": "bscNqTgAs42maF19HWqQbcs5exDsxKx8Ss8kTQwyQEgu2k1eYW4enUgEyoGcLXroMPjiBSTkkMefnGJo4MvdBpJ",
  "key7": "Sb1WSGS5ARb5jN9St3PdJcK4fsE7HfmP4BENe87RxRZfAcoX5KxdDvmknGhBfm76CogmtPdVQDNWaFPRXnvyE8z",
  "key8": "G1TLiZ4Gee8Jp2b31jSpFJPpDW6ZmVRY1rU61CcfpHXFackYSgAHjJ1jGrzeCzcWjsV8XEe5PkdN9gKYYdkBzrw",
  "key9": "64h3N3hY5weKvF7Sj5dej1YhjjGR1AfxFWfG2SQQGRHRDNd161Q8WREWLUvEsRhFt7v6sV1yCnu2ezct4gWoENNq",
  "key10": "2z2deLyi86dfdgmvUdewF7hUbMAZrSCdXXcknUqK6LnPtDrZpfvbHartqmCoQQTwKTYucYXTCqJvXwRELNFt2smc",
  "key11": "3sajSNgk93dSFSUMrKS2Cpgj8v17WBucetSn44mi3ixqrZ83fCs6YnTnT4pPR8xhy4mJ6GozgbMnhx5JGKjruBCR",
  "key12": "5TvxjpY6gxBuF5w7qfNDi3CxrDZgEQffPCjEkf61chvCsfo1k1LFrmuyH6LFdDyxxU2znHUa8uH9SWqLq4QdJn4d",
  "key13": "4JMh6H4Dp8BbBuv82ZVcheFYtyEDjxWFCdL3s2D7aipFm24LtxNJYbZeuXn1sP1Vy15wkMAPTwi55sfEt8GSu8bN",
  "key14": "4wSXQz7VNBBzb2M5Nz1UVUoSNQDKzcrvd2psTqyrbZKapWLSU85mJZNyFU4vUFNXzDPYcHfvKB1PS7Z9VdiJ7rND",
  "key15": "3tpjWT67bSLhp7FW169rXov4bvnjxVnKgKFHNJyvLzMQJ85SW5kCGiLTGhfnjeh6qzG5WQZ9GfEdVJE32jdLuG17",
  "key16": "a4R4pNCgHsSnU9WBGxiiu3KTixX1JbNoMyBRdSwdXfCCrYZhFaxp2xNQh5eKsivbzeKziSjpuoDVWbf1RfKAXQS",
  "key17": "5tepTS7GqysTfawnZrytZ9dpGigRFY1cFrGtsBLXUoUQigFBYAn1J8zWVppZsJ8sS9x1kmmuDzsRTfvMHECba4gJ",
  "key18": "2paswpCR9tVCTk55mXu7Nqq3P6Q4bd2YjscTZrnkoNytV6HMzSGKcNPBZiodNohD4J9vNeaCFDnVC7aVrTst5LLy",
  "key19": "3zhnzyZY6c3swYeJ9Agut7PGk2CfLJtmrSRgCQTxcqLavprJ5QxnRASA86bMqDJXLgRtzpGM2iCa8saL6d25aLNB",
  "key20": "5Jab7jLs1Q2TNbnmCLadAmoPd21M3GqRtz3B5JRYLqJrXum1wkcq5C5VbAQm8dEQ3bHCuMJmBktVWfuZpS3vNbQP",
  "key21": "51KLJni914HAYeGd9gYrTjBc5YWWYicjm3igeHP6ZyLmUkeN65YngcKZtNVAsqBiL4LE5e1SQYfTQFULBtKoPSzt",
  "key22": "3Qng3GNHhKt4qhL2xPJEGqhjpw1yKkSp9BipEiAq66NWxVPMpAEeqGLRvF2qzAGSjgRY6YnMJ21UTwheQufuRn8C",
  "key23": "65emps6Hyxo6zxtB6ugcBoes7PohiBF7SyQD1e2ejGt4vupTGtRbHsx9LTJM4Q5pHairbmDEaLHGZaPKFoQaD4UG",
  "key24": "64HActfJMU5nyfNB1jKCUpmYA3YtvrfJrGDoBAuewDtZd1K5BqsK4h1bpKjKDPEEoc3JQB2kTDJwkd4i3YosZyqo",
  "key25": "2p4cq9kCz8HnYj3nHMd2oRfKLsGVXukRy7AXvZXTxWckFzwBVpYy6fBsriVyoCAWrd61ezxM5TsiCKgzMM4yGE3s"
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
