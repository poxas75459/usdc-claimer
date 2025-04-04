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
    "pLDsSGz2zQA3YNqer11LHCusPR2aK5UNoBuPFTPtYDXavqnXEtr1RS7NaqwnFysWQmmKHDyXuXmq5pMmSL16dj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S8PA5Xs4eaFiuYdh88HNdq9qXBKN6ozrYKnUv1zvedzB8Cukia6nhzdpzYQZGHaeaVcdBPVnkQLnUpieAwKiJ9t",
  "key1": "5ELS4WNFmEYzdXuG2WHTb46grhsLmrxeYuQDhWzY89uf4BuCto3vezPPytjwq7KvsBELhTrsbQAgYhYWFGz1qJTe",
  "key2": "3MpiGct3dj1t9gnujrKKSd5D7zgstTLCuDyjBc22gqmUrRwQn1VPWFT8vJVBu1dRqARauxKhZaUqrHZdyNxzbvS2",
  "key3": "5xcKKBPR9Kf5ifXaixTJFqobfn4jGKmadkWyBYTWR9TZEjyL4ao4n1vJuC5ZBfJ6wa3YywtFx6VvPkxB62QDaPWq",
  "key4": "2Ba8Q5T5f1PTDnZCuTb7yj9RQ9U4A1d7xKxKGoCUdMXkNF8mkU2nUeWnGmuzXSBdCnse7NHNBfwJ4X7L1NFpB1Pp",
  "key5": "2xRTx1xe6L6ukCpxbFkSKpdLAWGqBqYLNf72a7qS6mkejLGZxuCJMVNN5ukjQM5nHVbJPupuZBxfNqwdVi35HpAu",
  "key6": "srM5UjbDimKzXoFYd9L2jtn3r2WPRio6JkzZ83P5ZhBXP2JwMVfWBYPieTDk9qccx13MBhnAQ23n6Bmh9VAEWSP",
  "key7": "4gPUWoorDtgRm4fW1UCZBHK6LBV7pC72wjaNyRgazSpGAn9pHAsSrp5YhTYFT1Yp1pRxe1TvDw6GcfAGiBJHdtwR",
  "key8": "4kyNuJrei2fXa9WAvjYaajBXffwp1tbCUo7TVBPJcSPXCubtnuRn7MUdZLiSb7c7kZ4BQrHEMo1mecvd1LKPsA7o",
  "key9": "5skBEJ56C1PRSY1fbVRyK8ZHSzL6nWobp5UFjrYLuKNDotrv1XPwSugVLGid2U3cFiE3eRKHFGwkwGhHGWMV6dxm",
  "key10": "3wH7DpWsuJX4EhG4gp1JAPKreM8fjj2dG89sB6t26LkRJuJaWTj17ubjNdcXTfTt5pbHKVjZpLnWHHTfzYr9kv9C",
  "key11": "5syE1dkpMxsJWtuc2d41VCqgu1aTveAGCm1sd3gKE4E7NWV3LhNDuhYRh7YDfCaZsTqhyt6mtzSjavP1dw8eJzHm",
  "key12": "63YA6s9obHaGCkDuHP1AQSgBEWDTGzjUn1rpV26AaUiUncr9RiksYrQpSfEgEMPuvUNTdptu32DyuZZf4i836Agw",
  "key13": "4sNu5Z2RuoUDaTAby7V27QV7AjbKUuuNNVV5FbNUDTQVL4R9HGAwpButP8GhigFxbLpv27KFcDohQUo4xYa858mr",
  "key14": "2UJYmEQ9VXz2jmGzF8Zm6yY5kXfE7sfmxhtZatSYhFE7rZfzjSrbKWuZWCvQNSh5YXVKXv4ezyFyoUj7vDRQNEqq",
  "key15": "BuqS1mxFCAd8ZoXCUW8Bwh4vEp1J2hGsPA3Rv1w6z8SJnpErg1R9etWE1UccDrfJzuYUp7KGc4td8k4bSMNqpE3",
  "key16": "41F23q4LcEV4jRFtRfgpNet1mXAegXSpBdcrG9wddfcWtQg7aG2nrvnVCB1oahcELCeHy5FqwMugSmWLBYcvzq4o",
  "key17": "5H7AUtyxuHJvRhfDDZCs2HUqTYLsEL6YcPfrVGkdsCwEiSXacGxrpsFiJNHsD9yGD8vNc6fB389Hawb6thq28QC6",
  "key18": "4ZgbPomoSnd43zmYm5VAZWth19u4aW2u7eY3GtUjq399PRtZdHEAMnXLwzpY3RzgyLti6oTTe9ZeDYV38Tm4y25o",
  "key19": "5qXYAfqVhvty6tABq84oVL8UaqD2ymnSMcvqxrnF1YHGxQzCVVnrbzABnH5VUnxaEaP2WkAw79WQADrzU8rbZr9V",
  "key20": "3u9VXkuw7FZ9Kf5Zch3r8yWbiEaRqSKHp62MTt6ffazsTztSqFtiYk8LWbj4Jp39Vry7EetjuVjSGm6uEgE7Kdei",
  "key21": "3jbKe4MHKh498SKji1XkvD28A4w9w97LuEVMW1JYtSMQCjHiawVKfUd3qsfZYwba6oh4tsjX8mYuJYiWYiTCaVf3",
  "key22": "4QKPeXX3GjnorS9RNMe4fvbvPoguVUKnadLRbUvkp2nziAX7H3GDSZcGX7zTDdD5B9tRN3NJwM5F2ow7HfPtvEai",
  "key23": "5zJz5X9MTaci2N9yCeoeqX9bJrxFPHRhik6pXGaBidbEoTUzXQ3JiuHdyqhC2Q9B8gGWJbyFGEq2cu8yL4Ffs5Bt",
  "key24": "4fzTSuLHbwrxZUgdiW6QP88bNUBWwFyMXm6H5Ho2s49qGC1vmGwWd11Pf3qYJayPTK9PPtMJMX6BUpbYmDL14TKx",
  "key25": "2j8iADG2tpFBciEvHRsEhVaGPfhsSZMArSswtTuPKcQTH28rhztFxtYJLrBJiU8q1bB2HgeCUtAAfCok4U6xVYXn",
  "key26": "58KyJQQPQAqAuxF4oX4Ym9fHAn5n7vpqSgJ2ujbGDr559MC2AWkzkAHX9wQFbTH9qnXjzR6bj4KShpiqV6LFNebw"
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
