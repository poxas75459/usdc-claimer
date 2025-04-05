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
    "4FSvwGtuQBpQJFera7NuSf6x4m4tcrJczuujSb5Zo7oR39Tk9u7DvvnfAEeKT9bzHoQephDXZx6vmRxxmb8987Ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZaBo8B6eqyUq9kZUTHR4ifQd1DTgYHH9QuBvV7EiZAnhDNn9Zj8bBs2HjCAuPNwUkjKPcztsBbpkynPQie5cRKD",
  "key1": "4BmSsmuh3uY7pZFPWcUEAB4RCnwfVAgptA5BPmsQU6o7XKBLK4MujjTQ8rmxodC7L7mke8pHuUM1eG7A4fhZD5rh",
  "key2": "5n4vGgVCrQymMpNNPpoJ8kxWQViximmtZvUXhPkKDtrjZHXENsU41p4VKetfL7LV1gP2MEgZDPUnGD1GZKFZctnf",
  "key3": "2ZBd4S3WdFBhR9KT3khiDxWg9JATWW5GHzEvgNbKhYGCagwHxU7taZdUeTLH5n6kWMphwLwTXKK7p7uVXMTheQKi",
  "key4": "3MAhSngrFiX6AZACPqyYT5wNcULBjy3wgUHGss5vs6EUfZUQQwYQb6pBzpJayzPyMMtpk6S8steWVQ8ANwpkFnEK",
  "key5": "Tt36WzwXXfBMiAcfhv4F2Qq43i2QJ6PXDAtL9LwCTLvq33x6bJ9mt3uGK5VTmthNdKxCdrTeMGsXkbMtP8zTofu",
  "key6": "3N8gcBowY1cfthaQTiJN993FJaw8FpsajZUwGYK8CLPfpT1U3MQvikWhG3PhKU8wBCmw4aJEPeP3K3axsFdA1qF9",
  "key7": "5xmJNidkiQw9qv5thUNUBYfd9zGQ5ZtmczdWCfhk1KKc5g2VnfSPsfjJYb7JeKvbAx68smoyjqJm9DwVv2CdJ8ee",
  "key8": "wSjGd1LptFZnMYvmMGpCJNXexMFCLWXJmVMXyNsiPMvRTN3Q9jSMGJLbBLrs1yAW8SCuGMzUueCXajd84SwVFGF",
  "key9": "3UUtGAmQGphpTrBrJT2T8PrqYC2hMvbevDLW4jDTRGLZ95jxPWiXL2Ga1aQmCdub3mvsDwCbUwX5Diu8V12mtMAY",
  "key10": "jsLxNVQz6QgjvH5LHF4LsUhhfwjWNoNVX6rRUVpeC97R4ZAcQj69gxt6TuZTeLpkW8T9uJQt475MNGX9VMo4zq3",
  "key11": "3kWD7Y4uRwo4yqGwC6te9H6CKmqtJU5pRaPYQrvcda88B6y4WporsWwn2QG751xVCik6WG4qEMvKnctrvR1NbnBj",
  "key12": "T6anNCN7JDmubuZLUTimZuyspTZrZsyXxX9wFmr1Depf4TM5AkfzxGAnhQFkmnJmLsFfTUnDj7Yb1P9GeQvegkp",
  "key13": "jsBbheBcxzhSDJ9M683pd3JaNNsC2DWa8BJJzfgjowPf3ycd4HNbZnGxZBrnVuDhBRw5wDvr8ubyqVUQFUu7CvB",
  "key14": "3FA97YmQaxeB423uTTzK8AzWdhQC3Venq47kRatndiHd6h7rd6UMzUim2n1fe6aLpRvFMMNdwu1EpMwBzSQdTcxX",
  "key15": "3X2HGVe5wuv2zvmk61ncN13M1sis9QjKWHfGR8c7VFMbc6mjGMnr9vYUZCaaLJFAt3EgvSD2pwvFq5i5DzFmwysx",
  "key16": "23WMojpsE9zJxqWUcA8DEohmnVedNoh5KLCi6JuovCxWTvYusdBJ15naCFk9pceP3KKP3izXrDWDcbF4T7JKHhBp",
  "key17": "5MMbkYEovtH1tioSbKLPd6vgS3uM1wUE69mHXwcKvs9Tku59dVyAcxwbgPgFtrGdXW57ksPULn8RqxZ9qWQJjqHU",
  "key18": "2QFFQYQ7sJCkfWGv4aHpbdTk7rGZHANhT34RuPDMmxezineYfrkd8hCYeQy7KHVGsKae6ifmFjxtHy515Fwp9TbF",
  "key19": "2bJUut4DmPxkbWCZw5ZSPYuDw5JA4sfWJJs2KjMBzSZ7q5kJBJN3HTbysGJMBFDaZ9VHLPAoYxvEpNTdHq2qZJL",
  "key20": "5YUq1C9LEjXYFBSZoj56abbixmtBw41YKuhM7eDWHDxLSGALNP6KVimk5P9PJ829aZ6maV3CsMids5uwCYQZ224U",
  "key21": "41SaMEMPDDk8G3smijdR1J1JyxeHLo5KMnXLnMnrkrbvoEqyFJzYACFcbuTMfomWvETsXrzhFwkoNJYpb3VCzY1",
  "key22": "oAvkLf1b95VBxB5zY6zvzuA4ahJ9hUd6y8xfszggHCJQbmLkShKnzbJt4EpT1KqtaoxiUHrey9W7AmucF3v55TY",
  "key23": "2Ckx4xkbAtu8nLRta7ixTxAYZxjgMZ2exNDWLy51keQrsEbiJdjp5q2tj1NXe1SWjCFHs5Jmz1mSebdREBKW8EiZ",
  "key24": "rryAU5YqTdjkWD7fe2WP7R6UKpyfKdF7RCNmkM1vmDysMQrnik22MEhmsuoyut4c7YsyBZbo77MFRcvxgLPypU2",
  "key25": "2NSZc27auB2jKHGsAfPp4Ea6KmWsrafMBShTjnvqPs6E6nAATeQbC3z5YbfpJDBdKihvRzrKcJuVAJfg4BmQVDMg",
  "key26": "4Hu4NHcEZi2no8mHZQuTUynDhPA2oXHCdNduV7BjtWvcdcL5kScGmCu6dvLfZsPb8eyCABAiz9DrMEAJSvQABhbr",
  "key27": "pDvD9FxihtkyJeXwxzpsvRDhNLWBZ9FqHJHD93qDBRkjAeU3gCFHnj4dwzLy6saTj5JPvVQhNKj97ZsqskCNqoc",
  "key28": "65SBXZ1Gn5MftCr6B5C8ibjfYCN3a8y5p9qfniZusKv1jcUMBJHpXeQbXaeuXn3gQoo5AzeKM1t64XhgbGuMnn6h",
  "key29": "44uFKDqmeshaWQ7AdC5uGFqMo64LkwQNnBrqc9xiZfL7hEusaJE2zDa2Bx3Yn1DKjrf2a9gAraNoPAffDQtPpcPH",
  "key30": "48n9GDA934fFL8Pd4M5iAE2P9pp7SqL2BqyqLQsNydFiapXWmrKr6nikb6mrQ7LFet9SVs4qdNEdmgvGWLthPZ2J"
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
