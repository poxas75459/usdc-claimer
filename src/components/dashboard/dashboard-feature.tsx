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
    "2UhZ6Pnu3Q9r2SBRbL1qnq9ZQysBFjaiqbL4qLWuNy6SZ6CkRUs7MXUoJ7jGKZ7bm5KBAuBbjuieMq4d4bvGfQMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CfLdmxQztgt22iAhBScd5y8LbWzcsoubyx78DSv9gDKwmQcyRZm1bCp73Q77TRMRQid5GHgEjcG939pfrhuTWfB",
  "key1": "3G2ne23ermKSaL9cmRLK7DfDBL3mJuvB5TdbKr43usQ4VC9cReuSQSeP7f1NnZrjcaq4nMzsvnKKvqDmkc892KBw",
  "key2": "5NbffzKHTDiKhuojmDHGBRDnWe4awVFAgLVT2FFEiDTATHApAmTG3rPGKXVRY71oEQSXcs1rqvkEtKoCshFRDRoJ",
  "key3": "fsuXcXosBocivSuicYKELKEfp8ArNVVkF8rQHCkKTA2dT3FkV5KVuETPXDfB5PPF2mUJthYjHLWCQBer7Waz4eU",
  "key4": "JcU4Q5FUioGZFnTDs5UAaYKtHCu1ncp6weNgDWBau7bEniPgX4L2JjQB1488i6RwZr4N8iYJzrso5xMBLjpHUuw",
  "key5": "2zmq827egBLSkMfTW9zASEvvBZri2ab4K9CUDZscT8s8Y87dYsRvBJLqzZ3x5uB2KdK1cwr9fCfMRcczVnQGsFTh",
  "key6": "4iM7GXkQVUi8L8axeG8ZvwM5Q7ugG4Hhfc5aRR77qTbQyeTUB7XwDNWG7ygjmH58C8rSEEaeciWJQxAQAbXUjuC",
  "key7": "3KLy4zkakxsPYTuXKHcCWquvBQCPaTBh9kLakCCKhf4Amy5iidNzpUnowyVJ27nN7oLj9wtkAvAhtKx31vLAz8wk",
  "key8": "5XDkBWAt3R6L2NMkkZot8WH7mPsUvGYZQNUtZR5X7CZfUVCkZhgDXi48TA6zPr5cN1rQ4rkSwTaX5iiB8j4kxp6F",
  "key9": "fs1kCQ9Mk5tZz2WFMT7kYbTj8do68HHEgbQhithLAbi4b4UcZpxtN2jLHJgbaHrHFE4B7kfY5t7EWHw53HLjFsZ",
  "key10": "4MZ2cft2PHg7AWdp9YrqjHdpoVgRtzT23tYC8WDpVeRW6jmVK2TxtdaYhwZria4yXSRhPSsQXMHgAPWbfuiBLCb8",
  "key11": "4nt6AjLb7pPKuWfFYLMbZLduZFcXvcD5iwSfFvPqHWRV1cpS6oVhoAmF5wmxZfAGabfS1zb79ZesNbCE5VCwaqyo",
  "key12": "5Whk4bYRg5W5FNA5mQWuZ7ycGj6ueYNxHZXpR6tqU475XB51ZKPQgbouoCiXko8MGtkHRQ5v37hBuAJzsmmSVhar",
  "key13": "4hQVvCrqYrMRNe8nGvUx6byKcYxMiaLNCeMd1VY7LjciFCdUBFWLKzMU6SC9HSceoSsvdyjrPDqjLSVvFaGQNd2m",
  "key14": "2P3tH1CBHP2XFeKzQnRFaoiZb1PKhw8wc2K9GKk3RCh1977GbpSr98Na8sFFHZGXAruK9PtEWF3Ev5PARrMGnv6R",
  "key15": "6rg3GyiMAqLbrMiH65EYCT1iBpSA4HUKJVyEkMXP9CWk5mqBtB8PUXww9e3RMHqi4k1AuYFpZz6TteyYudnGUNc",
  "key16": "2tFPhRTJJK36yvVqygUpb5PfQVuqAhhrvHMrSDwE7M7uVw9mMNwuiHa1c5YuNea2vFMLMWBA8hxZn2RHAsxFvAAF",
  "key17": "4uD1iyqNLhBhn8MMS5MLEyMTC79M15zYH4cz4fpjE8Y3WAv2VRWSu4Beiwi32v7FRN78C5dSxfJzkX46hhhfZ3PQ",
  "key18": "5KB3eLXJNDUKg2ceTFU5NgbD4CghXqwSXLzMc1q1kXJfH4BzcS3Begje4tAS8kcrHgyECiXe7ZbDCSBQC7HkDGuY",
  "key19": "2B6262NCscnyQx1kiLpAL7JXwUrxuVTKc79bv7wX51cMZssGLrNba9ThwsbTtfjkthzNKurnDqAhywXQmn4CBFCQ",
  "key20": "2fpg1t1QSxR5AWmJchqzaqQPLtvEC8DAbfDcRMDfX9doQKrCHwaQie34Pi9fcV1gGzCVGqNKiArXbEQZx2hDAHcs",
  "key21": "3WpN8xWihCMXcAys4HpHRg5GKtxtBwKhSpGVoZHTZUshCZL42kEhr1SK3dQYvqQJB2v5CJSwTxhFPrBAtkfDQXvx",
  "key22": "4KJgUaESucY9e4RQ71YLRwvf4bYssGX4o31gRR8QZgyLhW9QK8Sq6bh3Ak2arfEV7Boz5zT439kytuBods9r43fh",
  "key23": "7DrViVpvGhrbNXLz9S8ifw4Tn724z4LKtbJfiXAP3qbKvoWNugdGBNwmn9GTKiezhmceJApz1bNZbtSiXjyz5JM",
  "key24": "3D5eaF7g91k2GjYmbBhyYxmuQCUqSRNfWEimoVZKxh8j7kQx5x9MxwvLDDywXjAU5E2jmypZxmzb5J7n73p2ETNx",
  "key25": "52nnvZmLXcpCru4ggbe4FMVwUii3MRwJXNm9yaVL3LM9LN7itQUSrq5jg7EwBBoSSKkEyNMXyPHJfzUs8nn5G9gY"
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
