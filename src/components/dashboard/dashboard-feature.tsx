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
    "5ih6FdesLf5PkxakZBnyn5YKfcuxJ87oMYfiP6RYS5gttbgiRHudwHV4RyxuY8tg2jSmYVJpjMjZQP8G8bxdYA82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a8akpesevDiZPwUR6vqqe8VA6Aq8dhsxyQv3xbrbZsVsXNV4frALnKvm1VykhrXPD7WhtMTtFCgBVypBMmnuhM6",
  "key1": "2ST3PntpXJKasU6smQDBBEJYJ8UqN79NhctAcyYrZ3Nyx3jq88g2TYM7WztFhDZWJGhLkZM6eVVFeGTsAyNT5NPi",
  "key2": "4iP4DbPxwWvAovgTFcC8nSFPKLPwSQLFzhRnQzyzRCzCA8cyAUcZWHsZ2fr3XpFZnxASyJ4y42wQQWt7wpPU2AsM",
  "key3": "5Z9C5Nuuqsg57HmRkDZKYkeXr1KonctFuD6iPJ1SDQMEXvjkNQSXV4832AGHQNP5zQPyF56PGQJH6b4UvD6jsmqe",
  "key4": "GH9x8Jfg7aqz3CFx5KZg4Jyvb7xk9Jr1Bq1WQmmF2547HLHN3atA41UN2xuwQjfXyV8z7QqfCAC4Df2fCEfo1kH",
  "key5": "42FjGJbyhGbUBVT9ep72WJzgVCzW9aLGjHmgkJ2o93maHLQEoBAKikwWYzrFhuWMZEV7PBncZnzS7fY5rJSTmFaM",
  "key6": "4pM9nRNAyXDhbKR7cb5yVWsyt7tip7YBf71YCT1TJx1NDLFQSmvKHt4GnG5N2v7pc3AsLkwd7d2BafQcinGXiCin",
  "key7": "5heMxBi9EsTmezsTY4JiezATfPf7QvjZdYQQj7Lsq9i3fbKKdTqQGTkY8Xu9Fai9MfADqygfh4hxi5zuezAzscE9",
  "key8": "67bs5QdSF1wEv1aLpUUqkzyqg2LM8QvWx4Hj88uGJ72dfkiMQx4sc74j4cU4S9zgBPnYgiVXZvqfWcCq3MU9yZsc",
  "key9": "24J1Ngik7h5pS23mQitpFdxg5DhxFbhKs3UZLYWuy4gw67izKkJoqoiRiPdXgnLyHzyEFPJFnqx4rckpqmv3ib6X",
  "key10": "4sHi6wXJ5utLUPYDR17yAaQTaFnRE5EDsQ1msmk6W5UMAveVdQmjipccAEqf4vdnvZpQ3An7dApXmizxKc4ftUGY",
  "key11": "38NWvotPCjSijaoAbyCNJCczrUigp5PvxMANNKsRPmVmcLwT4p2dJhK8UXH4nk3CnqPqbHkyy9HEWVNsGpG5A19c",
  "key12": "5XTcg1ZP4yMa6JvUBEnuwug4NRrEH66HZWsoBmhdL2pYkfNJViBmjjjWC1FbCgc6eRUXvzYEfggFXe8cooYKRsN2",
  "key13": "4tNrzkHKG5uX4SY5GMMbmRUfnzpXLbU5XEKeXTYqEkwuRNT4NdQGrRehAM6eGZZDNGVdYEJbr6yLU6AQn6gfuxXa",
  "key14": "3Z9WfjybJ2xPr66BEYMkfh6cWqDZFCF8TQUUvwgxSN6Ay3L18FYjJwdfCtU47TZSCCNshjpi7ss44gJpdTJX6GDN",
  "key15": "j6uXmodDjSgwA9U5eQjDYe7ParwTrpjvztui9scWkJYTZ5fjwPWpTLvRoShgNo4cWvg146ejEKkV8hGuXdnrAwE",
  "key16": "4iUsmC5YJDeKABLGb3Sb9L8io91CFjK4thEraYMGa4vGgxrsZgBSKKnoXgacJk2AhuKYd56qXNK3cgACApn26QPG",
  "key17": "5f4PSw5LUMz7ogr2MNd2TZYYYN15xhjqhNspXxRHzvR5A3oRjPGWvaSmJqyBW5MiXG1umkGAm4tpeSAHhkRvjwHF",
  "key18": "42hrkF2WMekvCLDdYTHA5rorxThqe58BPt6HCDGb9FDzHYMErHb44gzuRqyv2FyJJAumW7p4C9g6f3XHdCt432fJ",
  "key19": "36LswfbjeZgUzBhhijL4D94cLkze7YJ446gPADoffeoPjCid7dtvmr52PnezGnqmmMmGXbnJ7RJEp1TG2h13EZ8G",
  "key20": "5E6wyEmxJTstZrM2Ybn7wX7quNgLgSnvo5Rj9EJTYEzK31jKVnSrBUecBZZQMZCgtCvzmhoxmxX5HrfnnjAXJNQz",
  "key21": "xqhghX6yCHG1WiopoBPPzToA7Qu7t6HHvW3djzqEiKvrnQ5F2sMLgfZcAZ4gbtve9skeYHs4firqLdtg8zdQbcD",
  "key22": "2h5EJK1hRPDAKFzDsHMYvFfR1QhgFsxxB1Aisu3A6kTGdvxwmApPDVUWh4TLfqcFQoeYZpCwqr1xupCk6hKA7T3E",
  "key23": "4j24pZx7p9o69CppHAw5JwYs123MwknXcTWzQx4jXrS4X5J87awGMrp9C5MohoKaUScpCikKGtw5DmdfYuQKSYaG",
  "key24": "4EFQqtxoAE9BZ3gacNYamxwirkkKyJevVCDPbtjAXnssGrPPLSphXPkGiNho3RQS2zhgt3GKvjK7KU6GumxcVhf7",
  "key25": "1hwBu1ddjBvpxkcrTktCDmqAz1RZNHKMu8bpMZRpC3HzV9vJLc4AR2G4PxW4uimUiqim8ZrzAr8r78ZEwmLgzSW"
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
