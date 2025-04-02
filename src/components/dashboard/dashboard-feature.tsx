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
    "5VgD6fCagkjYEg6MjfD3rqvgztZ8RMwJwprSWTneYw8tWMLeVHr2fCsWq7BSRvEmiqPxBAEYhWgujrULDQHyXoV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kMUXT8Y41YpJMtVwgL4DGzmdVvkUpHXYKY18Zwu38jpumxwnSB7E7J9tf46i86H4dYGrQn8UURDpCcW2GTbgEE8",
  "key1": "5PeaQHGn9Sk2nGRA7ruEuFKzxjcZWjpQ6FCRJjqF6DQxJ5qmJZG8DemKw4rp3J5BmyA9Wp9MFFHLkpfure82D8cM",
  "key2": "3JmWE5Jnf44bxzipEK4ujVMyBFizLsQyMCmB4LmS9csCtuUMSZNDDxLmrjuztZHjh3DYHeroXkhVAyS4dGiJLRfJ",
  "key3": "3G8ynEjApwZbmCuaFQHiey5973eQwAKx2WkLXJ3m83xBHxLGLSkGqx989gz3HZAVAX9fW5N5JP5DXEYJHMGXTMAp",
  "key4": "4UKgJ8EyYaAPp2qemT3oaeEXg3v4popW77tSkzEAnMSHCXPSWvN8zYukE8WM5TWRYwJjEpdkeDuEJ9DNjq5nqTHE",
  "key5": "epEodUkFtzCYhrQnJ7PYPMz4bZWBbRJ6Skqmb2GERGJXTEztyrrphJq9xqV7qysMsCQ6uuraMXBWuraok4fd1XW",
  "key6": "2DdVvgsApXkSgimJ9z3QcoXRhSFxGBrf8jz9yorF95RChWfomwECPd7a7VvqhPu3YBVHn6aDbwuo3jspvD7sqV3H",
  "key7": "upA99SACQxLgKXhzwMAwRXMdMW8DXvj2wNAbJDZfC2YtfXZje42EQofXM8hJKXCigN9NqsJTdYAN2R8sSwCbd8r",
  "key8": "2CQw68uAowQzrXFfNMH6TimsaoYNr324tbfeB26a3B5Cirghh7o3qDfwnWfoKDfThyU8NXjd3pnNivyRPDnaW6BN",
  "key9": "x6kPkAgVb7mbavV1csaZW6qwvb9iK3oojz6XXVM1JQDSpFRWwBomAwW4HM4U8kiAoNmtTebjeoVdcWqPYTtYDcD",
  "key10": "54d7aUVSyTa7wL1nASumMAtZ9Y63hd7QRjBXZV4juG9Z9JxCtYkUmgA2pCVi5vvE9e5awQNAM1RrtfCB68YTmW9V",
  "key11": "4q1trTTETqXgHrnSqaJx2Y58r2vaWrUkpLM5mLaxJ1mHQPXnNwnQQDjqizv8KFb3YmZXG5BUzgLL3MJ1mWaN7dME",
  "key12": "5gBDhCND9BmuoUMUxsKNmEJtyJ1qmiXLK3TTZgJZFaCE68qJZUV4g6r63LKkH3J7kULbT1vuvktbFyddErCQEgqu",
  "key13": "W7GvvdH3ANPD9oPh831CMayv99xuE3XVzHsJKHFM6dv1dPGNTxGf9Qq5F9vNoDCXiiZVhBzCJv7Gk9S55nbsBws",
  "key14": "8c4hmBj5YboiKUCavHYmeyzuDK1c2KhG6w7P6ycxKypkwd8r4zzDPNUQnPbeXbA7r7NVcBGpzUVFxaq53FjjhiS",
  "key15": "5NFPCj4mrb16dC1PJdyDeXMAkkHoDr9KzCSRekK9bdpp25VyxdLu29mXBwtDVgzfMnnJ2RKg6w1nWZNQiYysy6GN",
  "key16": "5DVSRCLaMgPayHca3Z4hXLByEasv8BtodoAHuVqCNdvzzfYrYWvp9u64qLquscpBUSRNs6v3zTRRKZasHrUjqoVm",
  "key17": "3jXiNa6u4VbAwbXY7mmU7M74Y1Lvz8DZYP55dRJXxTDFVMc91opfP3bwN7DfzmQjhteUNPG2fsKSDscG6c6YRyx4",
  "key18": "2M78ywDTA51aLyHxBJq5CsZ3Ma3ULjsVbDAnftZHJd6Ka2KrsKNCgRbccZU3UuyBuZzEAUSZAuF9MsnyGit3dNq2",
  "key19": "39WKGo5d8bWiSnrkK4vyeqoA7q5xdxJXaFnro8ZurJdMNG5pRsjkRUde7MB4M6whEtpM3AJKjamGrGegn2w67VZS",
  "key20": "2854P9WwUz8GPAQscZsHcRpgDqzHnN9TUsG5BcmPiv5o5AmMxCipD2r91R1NQyfm9qZvuc8uqv3HorQnVwLFHNUG",
  "key21": "5AJrVfYKp6GCyXiw1CURCiJ5WpwekPZFmYNpuN5BfiviDdCxWKBnP1cVMyR7GXpxX6i6U2edDMfFzLT3m5jqrYaw",
  "key22": "5juKBna5GyuWSjAhMZjhvhcLeDmYmTLbR7fQqEXxax3xHVff47CFcZWHM3MTWjgjq62vyaXov12B9hhXx6nK7d4K",
  "key23": "3nj5no7bS7RGDLjfYsvpT9tPrJXfqR9VFhARt7Aqhc8sLN6iMB7tq44aDoLqPmoKivBBAYgxW2ixubzMbtRVAkHj",
  "key24": "4eMV9ob5dPpvB2dLyk26C2RAzYifnhzkHgDLzb8jUuxHaH2dS6KStigyXzigNKuS5YPsJduzMUaxJ4SdhwNdV3Fw",
  "key25": "5upcK4mos9L8q4s9s6JEgBgB33z2VqPAdhyXf7G7u55QSpS6horsdRufqZMqLtRrrhq56TPF1itaDRqhC5zCkhbf",
  "key26": "3a1bXEVHG1rksU7S3429oBDYbFBecAxwau7S3HKkBnM5eXzE3jCNdwmYrfQSD4FiTWRjCNvQarBkB6CZ5uDMLSR7",
  "key27": "4CRp2A6XpBK81bj7XJi4CfzrNobPjn1ZDR6vfns35odSej3M4iTDnSFLedrFGwfFDDaSgfpEpiMAzA6wnvFpN4YP",
  "key28": "26GtvRLfxPpBW5ZRWdaRPGfgDdGN2uQ22ykVLL6rQWSSCmaw6EwsHBWBVLPfbGHwqsDHSyyVAPVUd8kpNmbR5H4C",
  "key29": "46o1vnq7cyLPRguWTUDdX7o5uZV2JLgtcrjwt1xJw9ydJdbutQrZSMermhhRmY6LGrroDbnnocURripJq9DgjGvB",
  "key30": "558fjGMSg6QWeBwHbXMVGUonXAzBJnr5rVvDZkHuGVybjhquWDGfzV2DkJPyVRiKsJKQEsnk8rPxkYbEVBywmrHz",
  "key31": "23XLKFv5XK5RNZvRLLuYt4NAUwwdk6pPp5syT7P88oHnkzFaVjihmBo7RR9PfHokHd1FZPSsyEQKmmTJXdn7rmqj",
  "key32": "2kSLNoRzm54LrG7b883sTBs2q6j93oksctP8gBDL1M2VZu8NkU9nj81aDD21Eiub6gia1RfvzGNx6KDwmvCGyz9g",
  "key33": "5m79fcBzHqp1bCztKTxcgGFAuz43VpMzfZsgsWw3HS8oYBWfKQZ3mJiXJU7VtmQRAStXFvDfG7ZNzEnVZEfdevCr",
  "key34": "yEyBmaMQYpyVN4VZsMuBrPiC4MUiEUX5oZLK3rGzX2GWgSFswnKR79m7NQB4WZjsp6skHVAcRPzgHe7gw1iextj",
  "key35": "5EJFmci1ceLmxj1G9DRnABc8fSvTiFwzPRkVraskS27uhUQYaKdjkTqK6hVx6HHD1mUYZX2drxcsQJvNgJSTbRpA",
  "key36": "2ZWcATznhDthXcTzv9sdkLH5oRpow3fA7yAHgbf9uwnmfg3QE94y1cH4uw31z5ZtUcBLTTYk9xo3oqvndZyANkXC",
  "key37": "34LsfcG5zt6vxtK7YPZf4Rz9L3AtTQRQUeeitTU3N6Z93M8eQTs7Xt8ySpKGufgKvDW33grZJkKE2t1gfa1Dttde",
  "key38": "yHDeExQqhkiuCM4HsYpoWPViR83TR6bUuRi2byxd2JX9LBXuR55rAWA9R2T1Mgs1YFFFkrzEWkSQTDNib5Bqdx1"
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
