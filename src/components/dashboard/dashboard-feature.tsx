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
    "2x7LgKcbMxNT643Cdbrd177NbWFcWH4UMetT1i4ewPkustwUGvg4oKC4T3dkAN9qBJuY9AB98rWnvZXbwtkJZMmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478HJqKVoDeGjzGUTmpo3C1ArpExBeb8xK8zN2XYN63VWx5wJu8EtGdBu9Q2bQMcPPGc5WN9qFwTJ7HNWUrpSMPw",
  "key1": "3nmmcjTvsvWtbjn9AeVPxMYsWP1QNnKp8C3omDHBsP8AuA67d67c43QjQrGbpofKTZEUkqTpE28p5GPMyUUBdTev",
  "key2": "3Dv4wenmep2PSubzxsACKERzU8hRbTQTHU9NVCNKpuMz57QAnLQDqv7TCp923depj2UdhLsVFWum68opP1xCJKYv",
  "key3": "4WK1KSm4Wf577p6wKByjDy4NL4XjRhz9Y2GebqBRVuJgW2MbqnudNgEM6oeA6S75fGRBREhM8D4CHrqK233ngK3Q",
  "key4": "HZCsjE3UKd2Ru38ERyUCoymcyTdQWQ5ZcmENFB7kLJPxHJAwf3pnRy8nfirj7icNKPGo6gyWcWmszjqCjn4Kq9G",
  "key5": "GB8ycL2s9eaQEqjV2yVJgFKUkBhVq8ejE2ivNQ6a6HdHEDFYiTbkW5N97FpVtTGhPGnKZ4z4sHxVkUvVcQTT7qG",
  "key6": "2fbHj2Fi3kiWy9Mek24dBMD7Nnd9qCPCFZXW1b5pyS8RfFLVW7AUGi6uSZqWYsbBTuZo6rPFzMqZ17Ua1J1Fb9t9",
  "key7": "27hUHDCUahR1omNdSk2v8U3SGDVsyvUk63zros6xKWQ9r8AGpAbWwrRQCjMn1SJGb6gSCP8b4MwoCbAR7CZm3F8D",
  "key8": "2FZT9UyWU5choVxxH41zH14reLhueyDhKyZtoAewHEAK1TVPnbwERxAtu7voGAkJXpFVdz9cs6aU4VN7UamgKLyo",
  "key9": "316VSFst3XvsWhQ4gLegDqMk4KCqQKKjEp8wqDQhVpRg73pS8fWsg5kPyQN8V1ALZjaJ2dCod5Jmyrmqfyf4JTzD",
  "key10": "2bFNo9vmrTwJpWSpbJVQHC2CecKWdsR3ygWGDMKyBPBrvGzX9JcEbAJYKgMbzPoCBfvByeTjEHczBQpoeGfNm9JZ",
  "key11": "BtnfbfLBSrofmFcEpLADoeaPVtDry8os4hjAHM72ziYrA3f3JwzK6Gvo1kyRBxkecsw4DGnZu2xjSzShr2oWtXS",
  "key12": "4JxRQQ5VVo4njCRJW6FRSP1Qp6JuqeiZ2ozPLbbDonYggc4LAcZYQJjxo4EmM6xDpYMmkmksFVHC93cBMATxgeGV",
  "key13": "67gNhHdDt3gkCNiMkYPCZ3PDf4DJ2atXcrtGJW5JHVMA6F5i97WizVVtkQ5Hnxxe8dnyfWkMmYjw5xRc8LW6tCVg",
  "key14": "66EME6KtzYwZaax8MJqDPXm9ZtEEGe8mL5cErxpPwjAt4q7wAUuWAgNZp9PJfAU8DrjPYyodie1VV9y2NZ7ojtxg",
  "key15": "5ud6DTPp7cB2RAqRxa6Z9xqtkJK6damrH2xU7aHyzqy29gveWLsBFTvSdBCghv42BkMnKA3Ks7vYmZCkxpQreiad",
  "key16": "37pvrGTsubGEEa7beA8yLciKqoessxAEFGH3zTLJAPpZj4qTPwhMnkDLXwr2zuGv1C9jvzfi8ek9rz5ygwoUecqN",
  "key17": "2TWH9ySNQd4JgqiMaEDve4JgcNCQDYyd7ZJb7XfRuDJpJisQpQsuP6LnekfXQHzJxWmpptLhvfPvQAg9vjzJpD2C",
  "key18": "36svZvo4j2n3QFjqgsUbPKhEXAXkzfCzYJa7rpFqxBnZzpe7B6VK2XqdkZWaLVLs5B3u5EsmiDxJ1KSZJbkRWhnY",
  "key19": "3XZE6wAjCiqT4ketPNAthC4oDZpE8yfSbygAxcLHCwYAGWsk7rCCJdszjeGxkd7Hd15XYRrjmiRHfZTh4NxEGhcc",
  "key20": "3sJWqn4hoFHSrAiwBi9Rj2SK9kUJWm17i32g4uqAidhX4F5KViqcLtDqFsZUHuiLv4m9nE7kRv54jTmgS1c9Fovc",
  "key21": "3NcnJJH84dHNXXCPjSqhxBn9g8z83CTs5NJj2TCniM7d1ih4W5wXLtvFFUU7XEZusjRp5PZGkPaKxYWq8U9LwWgv",
  "key22": "2qGN2ECKJJ6kY2nth4mfL6MaBb4HVmuWaw3NEQRty5eM5shWNQp3a2Gv59CFwo6xc8vSDbBUcpWta3WYpkcS2w48",
  "key23": "5wScxWsCEy1xu19dE7XYN4zWCnAxsHPF6DbSRtuqq9RgUhftTsWCgzXVqNkTWiHDscBzvEWQ9vDLKWg7HMVJ5QzA",
  "key24": "uwriGtxGrJAjwZy9uZhfU1rH1nJ9UiE1wsDtvxYUMrFtQp5Bz9s4VGC5HpruTd4NfeSR71FWzvviCvfKTNtC3jE",
  "key25": "28GPQ1xyDpB4wG6cKRT1oPbtFNgBwzZL4WcT1YvPiJejDcRbc3MCX3YZDPHoM3MQXo2chB7xHnqBCRX2TgoewwMD",
  "key26": "3BywymcQmfoPZTDBVBn1TWJF5TjC9WRCLz2fkjqiRzNLYtHSaqZHKosvQq2D5wQmNwQFW9Ba1msrjD1z9Ha82zRX",
  "key27": "4s5pcQpiozHZTkTs3AmCnj6S3jEPvkVk5y4iJ6W7Uk3UFYJJAWxp7mTbZxnrzFhDGt6A1Tf5BDRH7t8gkEGNy6ub",
  "key28": "3GxB5PvsZVRPLnrKSfVc4hjWTGfLTrQqTyuW9zPthStAqpn6E2YwjhRqjzjGgbHLaJCYZtG367WrBBvdhUtaBvrt",
  "key29": "RgBZ74FgwDWMpmWcjZNy5dqbnUzPpWGs1iCPVM7JdVZzV55ummpVdmnHFnVk6GampAn8cf7wyiFxS1Ciy8FCGGP",
  "key30": "5hbC7xEdEHtyysA9q3gs2KnUJzPxAhbE9pmKQBLSNrE6wMcsS9tQTZXkVJhAwnnGjLg7eE7KL9gNMTa5bGSGWy1b",
  "key31": "5bB3Cf2MtEMHtnzmRV9tJLomC1a7peLVGuJf3SZeiea1ipZjxJJsxzYyMNurQ2CMM53uyBPS6AP3Reib7kTkFiEm",
  "key32": "2UbZ3LAykjZJz8cwPjrciHtDeac6XaTHoKkT4St6L6eZdZkL1BjRiVBiQF2VuVdXRVnVJLYWwBPNg6w3yoo1cLgQ",
  "key33": "3w7pfxsTxNVnzCJSZMXqg4d3wnbCHyKjsgLR2WT7RSeycjDGzcRbDkiELLapWZVrFEH9DUd4nyUjC6ip6HSPCzKn",
  "key34": "4oSd5H3Y9sZqPj1C6Ny24KkRDELqeTga2xYPTFmu1MyxsXX91KBanfRdnw9SQ13qhUwY9MGBpBpTqSnPBFutacDD",
  "key35": "4gpUhBiX9hABcmAy2f5UGmG3U5tniMpptDD6zmbacenNKCXK5jERgNVApzr5wQ7fcg5Vy6v3bYZ2CRG7zSPnugpr",
  "key36": "MuKHVBNRWMmHWkKA7dENXkQPfWWgU8KvUusi9XycpzJWWJxHhvb9rXcjnXh6rhTcaWvzfiuar5PTkvpY6dFYoBA",
  "key37": "5mny8EwNGkCB3SjN7pS3rpf1k5H4F31CQFHyWT6wbVy1A9woYmXjjZmbAhBCiMKQEBfWATH3h4TrJJjV4tnW6yry"
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
