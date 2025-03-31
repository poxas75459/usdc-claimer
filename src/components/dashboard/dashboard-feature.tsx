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
    "3HFXzF819NkdQDBfetScaXkUBWNq8NzQdN9ciw6f1wm2tWoEZ1514sgkLS8Cfa5gPqVUVjWjKpNkgoUACcyvf2yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Em1mPqPc814iSeHV5y1pEVJ4L8tuXuaHcM42sRrfFPi57mrZfwv1ncC6DuagfnKstakqdcy8HoEaZSyBK1R6Fmh",
  "key1": "5aBWjb9qWKsA5WBmdL1edR9WuWG6u8xKbTeENmTYTq3GTkEjXigNARpfcPQhFxiFsE4ExR1armaE1Ssaj9fqgZcX",
  "key2": "3ynNCiGLKcxQdMAsCZvDsbjKeZbQeNdMWviiNd4LTE3CKFfc5E4Bn6AUwg7w9Cir7tVbiX18KaWzkXVzhC9H6iaY",
  "key3": "23LsTaq4vRvD5BstTE8yfuJhdY4p8YypfzxXZW9wrzqQNtTVNY7NBXZcnLxiB78ZueZu1PHErKsqhfvy8pK4psRP",
  "key4": "5duvkJgT2aohf5EyzTvUx76oa1zvZhchoZcdmzYHrXD3QVyqLZfNFYSpDji8Aagu94FxpbJDnBMTbvUjBaRFGUr5",
  "key5": "jF3sHiq7YbJioRf8iwzzTcskJG1c29egoyRHkbvjqXLiKNGy3f8JwBJXdxRE1b2u6T7HUUeUYzsVFoGvQvmTi6x",
  "key6": "3JQ5cm86ZjTcg5RopKz8sVRNVzyr112XrgmDUBvvE5ExG3bdKMtiRArC8U7ktNHPjThC1STYYEW7FqwavRTjoCjs",
  "key7": "4FrazSPJdRzZ2x464ECpvseBmTtDDBz5mE7mgPTzMxjgUFuADpx6ex8FTMvUa1FXWSQpq2dHZeCB39Ztq2Y3XvkX",
  "key8": "2A7ZGPqZuSVagrNQSPovfPR3SKK29d5AUU4zDyVkgxDrbv4zpKMcYTXEyWqbhsanWr1ZbfM2orDMURYhJYAdt2Xj",
  "key9": "5HBCWYdS1Hn2ri1NM5K3GNZxzRMnvD1cWqqnRTcoyU3YMYVHqzGTZPvB6HTuXNiM9LRdRfDstsYJwvpk4ZLnJA2p",
  "key10": "2cK6EBEmfBpDixn9DU1AqxY9hWMRV6b2d3K6YCVj7vG1br5VfRzuE8P9KxkyL8roQrhkKcf3CrAokPBziFm2aZsa",
  "key11": "3vRkH6MMmRZ39XWTiwZMDfs2Ys1rWUNXvnxdez4mnoUw1zB89nHWNagfqCz93AT72Dkvsrjz7ySsnFxCGyqRjq8B",
  "key12": "5CFfwWXvNdu7vNRhydNF47PPK5gmJfr7bKY7TpNL3gcDG3VNeFyRd6ALnFULZWD9Z9RNAtdh8K4rEzmaxRWtFefH",
  "key13": "gd8k6CQwmJFgQQBX8yoiGz1BuSo2sHmcEFYR9EDopZRxRroZKyjWHWYCg43vnvoa9yMnN2Ce2kJnA5Chq9RSSFP",
  "key14": "EMpUiEKBKyMtVoDi8puEafqaJ6PjtFNzzpRsavm9MUVP8p1VHvDPCiBuaKo3rcmoBGUqAgDhfLBzS8HZtjFHvGk",
  "key15": "WHiGLRdTU9BUciAa53vXKN6Fo9a2XV6UEe5szn44iVjK3a1KdZZ3w3U8WP43LgCPQfR3zUoAsypRyataxLWM994",
  "key16": "52dSUQBYLkgDnWKT3ru5UEtNJfanNzDkp1kaEQGs3uW4Y7x6hAce6WpABDb3DpCaF5vdSAA51fViQtTA2VXCuAJM",
  "key17": "5BtHcyEiMXCPEeAWchowUPAdC6PFGcGqhGatVzM6MgnphPuJmWK5PrjMDWp1ywpUp7eYSm4GgRf5vqYWvznc9Bcm",
  "key18": "4H2f6LFo5oNKX7s3dUCyg5h7dPKHt8xBSSUWJK9PiRMLbvf85hrr2AtBVpfw3bqk5r3GP6SHgfpG9nYUa4WoNhAJ",
  "key19": "53pK8JfuqM8U1TVsL9fXEfhKdzaoDo622fayy35uEYrt7LyhgNnmkiQqeBDQjrpAw3ZxZZUpLdawYHQkLAwFKiPn",
  "key20": "3rfosR2DYQgdCBr1rPBeLQQ9axbynP4cEAFWWzzcmf2NcbYrQb83aiZZ2bMaFLYRyUWMBeKDBzP1he3sZpE8Dk9K",
  "key21": "4TAtJQDRAaJXRS82S8xYHEFnMr488rgH9smms8nKJDbgXSLEcUhanxbsDtR9qcsHcjSd9yUVxn8dJZtMyzwCtsgS",
  "key22": "2LXSHPd4MNy2cMmfJQ7RMgYWPwG8Ko3PhFPNkSaAKaLg1qkzof2VeAJtfmXfGm5MmpiJVpPT8EFr2oHAaFn7qUzq",
  "key23": "2oBadsjgwXmSz92n3GijDjrcDadxTqLZQT2HqPxR15Ev3qqXNZvTxVQQtatBcJstwt38ENg5p9KmZC83xeXcpkY1",
  "key24": "2F8TQWAdUGMMDVHiWpTTa4L38y698vfm2xf42gzE1PbXaXjLg31ckTpBuPit3abQAmpP14xMf43uSU7Bc8YZK1HW",
  "key25": "2WT4JFHgeFxTY7gX8j4Son23XV9FFsSSkTqEeVncAnvxibicij4Phrw2VNM2g4276Ts64WSmG3JY1shewkVVVnmR",
  "key26": "3Fjm7T2gVzH6Ney2Zyjg3HSWDNYB93NTMQdJvJqtCLnLHmj1j7FqQkDPyaJCfDZYWZ3kYPmD7S44y6XUhczhRGCt",
  "key27": "3tbm7w6fNeRWVAar54AKX6VK1dpS1HrAyRsZdXbbM9a9uBWEd5f1UnQ2KXET65t5qjyh4XTqV9txCb9GPm5Qnx8q",
  "key28": "5npHDf6FLuv1PN7NYCS2juwzJwzm9GWMXV135o5toqcHhmZcgBnEWYu6T1iiu6wRp3inpsm8t7W4ZukChjpYsnsA",
  "key29": "3yWtmDMZcWeYLUMK45Jqews6tuqvcaeegRGRCmN6tyWWPGLhRdUDp14PQ7UkjgGZEW5BSjf9WVa56g4gXqQMgT4K",
  "key30": "2wXGHGW23DUfqvTusMeAxVbKZgqaBp6x2FRxhDFjAbPhEViJfVMDcwGwEPtUHAWz4bafxh7MGneUngfCHENAM2jb"
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
