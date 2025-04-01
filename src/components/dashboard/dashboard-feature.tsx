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
    "5MbjdoKCpJMk29eRYzFSVit5Sz5mXDx4GWVrtme8qe9homho4AKJ9Z1Pqi3YpCZWUT6M3322FuAQEmouMK4AFhL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XBCBTvB1xzV3vACyV8idj5G87PvicBND23WpVcDmqM9g3XpoWkF6iPb8x14zJQKBZ6MKk2tzgAc4wdTFcugSgT8",
  "key1": "N83KM2JMVJDc9GgAmsmd5uEZpiikddS38CMY6uUsMCSre3iSzZaEjfNac42BydFmDxXneCgvwsUV9L6yK8rT5b2",
  "key2": "67KS7VfqLMXSfQnJjrFb4voCshoag69piWeMAFD5cynpcU7VjfTxu6VkU7XGniUD2ZtxutT1Lhoo8eeAQ6HVu9BC",
  "key3": "4j3kyLiYHgjXNt5bLYV37zG1JeaQiu1vYVPNUJXkcpAT8e1ybSGYhrhe6mqE9vYpHyS1J4E96RHGxyLmzLgDjqHr",
  "key4": "3QKZr64JJVXdL9jK6MQcN22Kfx7WG22SrP6FXjJ3T4YkTm6ApJX4GCyDh3hG5MW6TDZc2a6ENKwz6Z3wr3mrJ1st",
  "key5": "5E4sbRRfgQSwH9CkxesNMxpjdFJKaB7ws7jMkwQufgksXYemQLGeiQUDSJHzFWvaioqd7CUEeT4dbm5Eu85sfb3Y",
  "key6": "3A6cj2NQHnJpAqdF3zTojdUkkMFNfnjiPREmHNR1e1EkxR9dX9h1mwgR67Uukt7QJgepjw9GkRaByUyJjdvoArro",
  "key7": "3VciFd39j53xodQJnfEgsqfuxYj9AHtZMRA6XNpS2KABMRsm3TZTtD5MTnvgbj4jJQLesHJg6ufhcgwSMLjmXLw1",
  "key8": "4EVZaNh3FHKLuvHcVgvi1tZG898ZrtD1Xnaih7SyPtsvqtc26GQYYtHCsrfQGVnSS5gneTEKLgz7f6dJDeGCwmwU",
  "key9": "TrGvJh9c5WjyPUeLQMYhzkFknD7KM16LJFLmB6QzeBkycUTjVNn7XDBtdQSBJ4NBN6wkWbv6nGUD2hBZRbVWhxu",
  "key10": "4KfciAJP8npvSystNQ7HNycFJZFxEcMpx3aMr8D4LuUDZpV1KGVAgfKfir5MrGLxpzHBFyECLQg6o2vQm5orVSKa",
  "key11": "62gwKC3uRJFmv54XfhZmukkUggVPQR6fYrL3L9aRfVQLCWN4cAsBTo5e6Web3MvTW6x1Cfxde2xLfEjfGxP5Mt2h",
  "key12": "4HzEMaBt5mEF3Z61S86GCNdMojp8aRJ97LVidPu8PTmAQeTXEj7Yt8ZcGJvXunLXCU31FbznWyz4BmXPD28gSrEp",
  "key13": "3fBexvnPD6XJf2YAvGQ1Zoe3G2rwA1HcANW4EFkz8PGnLif2g6Z638Xg9oE1s1reZge9UtwGxYThqeCDZHgJUm2W",
  "key14": "5qrMbM3MjSsMQQJGg9XVjBZkuSkt49dMVBVQHfDBAokrRUg28CkCjBcQ77yTur8eE2rJbQ3TYbbRvL6ouFAAXQM",
  "key15": "4QKnU179BFzCv6Q7Wj2aVLo5isdV79uti8HfgKw77eNwtQz12fCWoD38aQmquQhoZctnvdpzCUgjnjP7k4eUWk7t",
  "key16": "2jCHrf9K942xrKo9S7xosTXMVn41RQqZgBgcsBq4K21BZJ4bdqoUfWVRq2bmuU5DHTuMRwSb9PJsrD5zB6sreshi",
  "key17": "NoiC52gjumsjoCPSQo9Y8X8AwoqmQ4Pw13xuPKGreR2fc85U1juy9kzLu8HaiTNZqtR5p32nSx2VJRLPubEKQhp",
  "key18": "32izag7cnAzfEM7D9tvGiS3KuGojPn8MUr2VARwC6urR3zjh9P1Nkk1n8pSXmRLYe79aTs2yBKYeinA24v8z6Mab",
  "key19": "2S5hEuf84nGAzUnmw4ajJ7xE9E6FHsF5kteJ7A1136DR2KteFYzKUJ5oFy5un4MVVAe1xLSmfMqgQrnYRPcHzPSx",
  "key20": "5J2Z5VSo6dnxxgmZzoAhA1q8YF5zHECFMhmqXFE31xTnY2NhRydZTwPtAFG4RoGTtq1fMBMFnD365VB42KFJQrso",
  "key21": "2DRegTkRu1uv6BcHtZAMFH7tE4XzTcvG2LcFi4hMMwmztBPmpoavBURHZTsZUvusdtm13ZahkM7JWTEmBKqmDgX2",
  "key22": "5Jt8i7c2qVbxHT83FJW9qsbSVXNixFAf7Kor876HjarShywCceUsBLNvUwF1EAGxyC3d7x2ShpJj6AfRQRucUeVH",
  "key23": "3ixNmfR31vJEybqJjm31RBUHQ5smbHtP4p9eQhhwFj9rgWgPbfUH3HwcvMjEiv8DVYbkifQUW48EWMi6pnFDtiiC",
  "key24": "67Uvbex4pSWXd888oAQ4ay61vy8hQsXPuR6ahsgGHFvLJyQM78SgoGmD2jhLuYz3aYjFxmidGch64KDGqnGVgZJJ",
  "key25": "4HxB3auJvwRbqd2m75CbBFiDYApHKzMHWKS4hCXYJHS9kQWdYthTVhHMQ9qJnJsRVrvR1C8hkwhtTa5N27hA54PF",
  "key26": "3VkUPbPgj7Tqw7cTEYz9WDPfx5uEUaeF9jqMz2yM4uxmaC9y889avYVcSpVUAyZPcfsZHnw9MxAS4ebyZZ7EnG9o",
  "key27": "mR54ewufnpZ3do51UUxBKRfrsA5LhrQTMqAEqUgaiCgjT33W1TJCzv8LxFX5t5xGAGnWe4cKcLJ6EAXp4shppzi",
  "key28": "56QB46sGsH156Z7RBgpAViP2rXf3vWEmDBrDbHLtCRtqtPjDgpaXgc2V94sH9wi7S4LVc8GGGK1up2KAopDey5EG",
  "key29": "5PrhzMLj28gLYpfAeyfCd9HnVJxqwx72fUv8rH8WWZqdmkbsYkxtYnHnqxyEDfXu2fSxmwHdKZKugWDSnY8j3VCN",
  "key30": "2qWH1K5hDRUbJJVKxzp7GL4yR2YuxSu8zmM1NdifZpTPcVLBf36gTh1YLjo8WkKT9X57tyUna3bMRikPrbmWeUgp",
  "key31": "5q44A4KW5LymPQp4gMrqbciEj9Aip3uKqmVTxVqd8PR9fEfmhE1tVE8hGgvas8JVfRo126oLQiURq7riNscFrALc",
  "key32": "42UKiXkuYiHnWJvMQJdPDXNwfkncU9GQHZM16vene6b4LWe8whyLTj1XDTWaWEckUVYYPe8pcfcyaFLD6ACMUcC2",
  "key33": "3qoPx43M1UBfMPwvceYTVboPU3gh8kTGAtXdRzGN2xoqYp7CtRLmj8PQY9AKzDuXU1WtyZTRV36sYHu5jmGDptLv",
  "key34": "44d3RVF434QSDuSMfNN4Xp27hyrMzT95TqAfdZVW7W1cW88ZuwCoBTTcpfGHPJ7Ly4tLgNoAijccv82P7Zhj7asv",
  "key35": "cGYeDfthR59Rrp6jhBEaJ3YFUyF2dVd7d3A68x6oRzGGKX7boMPyUyBjf68xdinRzJYQ4hhpKA5UrJsxLAsa5ky",
  "key36": "4L62RKCc1JYf5sk7nJMZ2GhayREib9vf836pBhuDDYxzbmpdKwoDNXm283QvRzLDYw17ThNKTTcSVR7qLfJLYdKv",
  "key37": "5zwyA62SVuxo4v6ziRutzG6GrkFvxNkFb2p3h2sjx9ekPy5K6ZhHga4mTLWFj7mmcC8eAMkfc7cWzKqNTyStzWCg",
  "key38": "2ZNYtbHGFLCMTgWciHoU9GqUFh4apYyRL26anSbaNMuwFZ4koXimWTePfzv4T3jotCBTb9s521MgJL4y8aAG2uvp",
  "key39": "3d3USFVkNazWpv54K37iCqdRGEY6xjnVNARj29DDEQHhGDf9c9TmZ6jDPiM39kSpDUWNgbZ8Tdap8JZ6cudSNHrN",
  "key40": "5TEVFGbJ4wfoL5bxeiW9nWQxrKxcEfeqTPX3GcHPGdnRQeUm75DGwuLJPtJwAauZ8MwKNKNEfdpYCfYn1J21QtM1",
  "key41": "5ukHXdpXFf5Hb8oWh6h72qrNvbC4uNmM8HZYMKFdQkSzST5xrZBiXQPGT2RKxj4q1NGnWPSXSpUL1HGKkRernZQF",
  "key42": "4WibNNitBCWqDYMwUNKeKGc92F3Yu6g5anQf8a6tieVJYs2JLedaT4xMkekfSfutH17ew5LQ5P4RS2mfXnE3JZ9x",
  "key43": "4goU7YeJSkGzrjHXBa1D1Ms7UFT6QigenoyZvjuewdkFCPp6w2JnJRyobmmE9QCYdHNLAY9zhBwAcy5ELu83esqc",
  "key44": "GRhQd8r9Dr6RHx83CPvkjXdWcpRuz3HsuUd5Rop26DfFhxV7pArr3P4TyTWSErxFBruUTQ6KsgUMKAwYE29SRJ1"
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
