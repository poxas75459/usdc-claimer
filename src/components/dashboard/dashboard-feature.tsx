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
    "4mNoYskUUzoEpvtxXRToXipBPSqLwn4QAtJ3SAeELWhu7Gt2uk2ppQNTmgURZQ5ChuHmBSYJcgVT6BL7PNEDNYKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tPnJ7SXYgGrtbSyYQrgHGFKHrpXyTb3Lt5boXSKxSh2hf36vBwH891ERjCbGewCeS4J9q1qKouQoofWTFmP8yM7",
  "key1": "41QKGrnW4BQenhKJCAHVQjRqa8rPjWefLFQD4e8HcyY5g99zRrmRFYu8BXcYTbMX1mkHXaesSb4T5QewBxTMUzLv",
  "key2": "5a6pzLPTiQ5niE7jiqwHcjZNoyWRtaHwkXFs7vg8PU3X2fF25jw4hJXhtS8JLZAzNczrmZbNQoHc5o5pdNJEBZRF",
  "key3": "33tCJHF6EvXYAr2xd8YBLwzg9Lxx6rrU9ukz7zvg2t7yi23Zqdh4gCURribxn3FsDNeDf4qVUM6dHeL8kkbh2Y1n",
  "key4": "4SKpEUh9mYHn58jvnunfDewu3ND2Z1HX2XEvdMyF8nGqXGoGT72cu5GgFRy666cQaUzTx9FQV7cvtFVqvF2yPGMp",
  "key5": "2u9BJsw9cmb4wZQVTBw7qvBAzXNknrJM6b1mntCPpAiMKD13TZuGsURYXDexL4r7V8yipB8yqRj6rm9vRUxjvj2N",
  "key6": "4HEk37B6pCXvXPd5fxakyMYEYHCpaUNW7go7GGxvhQz4Aja3iajNCgWKm8dCJ2mnJwzogdYWmtLRwWDFKhSUr68r",
  "key7": "48ioPiaXzdxPWtL7pVqyDvmXLhb2mPeewVG5S4mWW2DZZboauF5Q9Fwihm85W7cFXMooKZSLHuVpiQKaNntmgAHF",
  "key8": "p6Na5MALhmKJKQMAibJ8hjjbijMQQX2qec35sdNF5z9hKQXjhMS6y6WDVZZaF5p68mVUX1EVs48iu7RF8MmRpdo",
  "key9": "3mhPq9ALuKB9ANMPGFdziCmmPttfJbgNxqpQZkkYwcCLKsRXuET2JKvAq9hR2Epyv6HXcMeDhAnVnogYPALan9Rx",
  "key10": "4J87Sy9w69tG7fJB9yur7cCTzsYxMvQeB9nsdhxJDjafDEuA9d2oLcVzeA8Mz2q42YQpJCqn9MDrcdNcEWN1ZBUn",
  "key11": "2siTbKX2mA5CuDscFj2e4bjNPMjEUPUj12AhkbR1tMgpCuQRP84eVegJkkPVooKh3PEYuujqYgMXnFN8N5TjmRhM",
  "key12": "xqtTg8YU6gngfXntxMAEWhuNJfJPPSrTUeyyS3DAZiQH3hxw7pA1z9gQUbWZBfCQ4C3t9m5TWUT9c7Lkvbgoyjc",
  "key13": "vncacRnYqXM27CYDfABGKUC7vpDDoefCHREKHwZxm1tqmXc2AmAzRimb4UgRsD8osqbP2AnXYsvbEyKgWpR48j9",
  "key14": "38B9QscsQeZGN5A9u2dFb6AHbadj5ebBVZAKYTMJLrFusrEMsFZf65q92AXAYzkT4CjStcTjj2kbq1kJR9w1jE5q",
  "key15": "4YRCsnaYsQ8YLZMe68iURYi8RDTB5mfMmZkw3hD3iXTWvVRVqzACw3rzoHPSC2u43JDGZLm3HBVsz7CSH2gtGfKy",
  "key16": "2G3aWodKrzm5eRzPYGuw6QKStvbkq8uLF4pc7F9LpuEoY113yEXG7YidyvWn4GDk7U7XZaeYTo4xtX7YXLWhzpVh",
  "key17": "3oaJSHRvmeApu4SZFQ1UJ62pHreBcvouyDQREEVpV5PXwPGRUpTufUpWihj7vZHMhHU1HLgTTA2bj5n7GpZP2tJ1",
  "key18": "3o4uhtSZVy6gryGsgFeJsBD6cQb3AtYE6YWFjSKdBAg92ShxeDNg6wvR1SizPXuTs72nH23RxduSjypHACYtWGzP",
  "key19": "2Qw9Nob3nHyvFJg8NPMiXKHD5k32Fh9nqR8U2ZUxYr89fPbQCyf2R39C5mTLvwZgyK1wbxfTjcpoFfa29qQurW6D",
  "key20": "4bjqaT9jqif7nBa3genzNqfFego4StqwYwEQzwCbq752iZMNYp5koaACRqd6pygQgU491UdYkjzv1irFTJPSj4t",
  "key21": "4yLUCqu6QyueXGuHz7i51t5aER55Y2AtmJNoPjzwcXGJnsoGoRqGwZbdJ1A39jqfJNd5Y1DBk2KEGkjP1e6mWQL8",
  "key22": "4qDRzXiaRzmGb3u483cc2S4XH9KnQCJfni9rD3x3evYKue2Qj8u9o4fzvUhgpQibH6GQjdY48cjK9qqB1ethfoq5",
  "key23": "3ZDkauorjBcvWHqEX18h5czvBZpFtUzoj3xXErE6BZVwJyPHM3f8mp15152GQE5kN4WuLtQCEpQmV7b9tN2CsuR1",
  "key24": "5Ap7nDekBza6jvT56gSzkX9A1wHWcyxVL5VvV4yFNg46XwuAGnih4cunPMAA6JAotqZ3oWf3k8VWTb2aFH771cY4",
  "key25": "24vdcUMDUL1dzzGn1A6T47fYcKLsus4fkQLCzDcUvGCLbPainviEatb9ec9xnYiGGF3Jvx9fYmTQikohnk3xNKjH",
  "key26": "4M3EUf3kZusQCBogngtaQgwZGLTxwrKSwXexCe3i58rNAfTHGR1R9ptgtBQRY6K1Wp89ZSMu2qhyGKVnZ8BGJmcV",
  "key27": "4PRbewa5dhK25QFeHwdnQrcCke5fK7GUzp39mYDJiVrZ893DxfrvLXAxnzp9tb3UzSgG1uYELLGM6nCanQGQeDZb",
  "key28": "zcRp1zcek93MQ7asquapQooaaJdVoe58D8AMMr2Bo3RQ3yQzbFrRcd1tSDHS8C6LiAwxs7LXYjoSqpaSP1kyc5n",
  "key29": "2ZgoJRfiity67mxjx99Auw89KDrBa8hmHfCwekXa53uocp5wGQmMLhfR7y4VXf8zvr5NSVxnCpxN74PimTqV23WM",
  "key30": "38A71HqrFiicH7v6AQZYWXUXxgK94Jwzgu7t4MXZ13xuNywtAbjqhFULRt7LmvFboPte9ZvrGiRjygY3pPrVpanj",
  "key31": "21QBmZRCUR4a8GGfkEMgJDuTtcXwESWv7PhmQkVdojxRCuBgMD5WY22Xh8YwsEcm8Gs3TqBJF1dFKDiSdCkvhqPL",
  "key32": "2KPCGrNaxyjKL1WZS44149NjjYKu1BZNYXyzBYQSAmNTgrX3g9jBtduCoHqqUSce2P9oz6RQPDXD4nM2cLzY85y9",
  "key33": "3y5DiySmtmqvcfv8heenBpe9RBCHtgCV2Mo184NZXuhs5V5AVnBos13H8vKfdfwbPr86uutThoWQ8h4wnHdKg6Wm",
  "key34": "45ZcjxKgJg3ncCU5jdgoNCmsmd4Rg5v4n7K8kswdJmKv9ZEi1Av3Y3CL2RLjGa2UdjXvaQ1A5kHzzuc48YiU2FC"
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
