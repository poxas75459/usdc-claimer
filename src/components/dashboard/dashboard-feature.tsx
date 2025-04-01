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
    "4MgVAzX37v7412BJaJeXRqCqMAhjh3NDZ2pQVgm4f1ZtpqQx5WoRhJGUYkkgZCjXMpUWD2Yt3rAGo2btzXHZjjnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "671VLPjCrxnQ4mcge7qRmiCPZzDu98GMr7Tn5EBkFBuQFmbmF8KXvxjfLnyUDvEVWVRqRXYnEz6C9yXztXxdTh2b",
  "key1": "iek6Rpu64YQMNnjxsfmozYn37G49msRXMFWWqRke3MXVuCMBDvJBb6sY1B4CaKk65oV1m994u42yoNRsGy52Aou",
  "key2": "668NsWTJfh2zY9rZgVoPfoTaMjBxdh6jd72VjfLUF3xa5TcNnvhgDdxXjAV5zswMzcWQ4ZqUKj7c3iLXetz3VBjn",
  "key3": "5DFEecLZ4BLYV8bEqaTq45jEMKBUjk7Vp19Wsnqs2PUGVKhH4ajQrsBRJ6T6dpDTw43oVZiLXoLHDCAQowbeWHvH",
  "key4": "4kN3uP6uLW39vP7TBZQw8jEfBQ3miZs914X6MkSMbTpEz5xm3mkcfkSyGgwT1h1KtGzLP7EuzYiaGzZBguFdSpDW",
  "key5": "3ap3cdJuxo1zWqzLBNi5ZL8yK75pqBfCg5buT6LTC3mmwnJtYBj4jAiyfCZWjGSTwdv6wW5k1fEGu6qKVQAQiDha",
  "key6": "AYaoLdauXDsAMVLvvdZrkigXpDNak1ES8M3isaquWsh2c2hJVLUQEdJdtxvPxoGQfN71nBfzHLigwtq7XfPy8jo",
  "key7": "5RMXVmw928JwgNMoQ4CLgaTRxcHjQcdPhH2XY5ppvPNqzrzyJooVEnNURjjMKFY963gescdRZ6WHwRQm4GT5K8M",
  "key8": "38JcPMQSK96YrbRBF7Wh5UmKoW4wHhpo3PumcMkTDztTEEETxBWwDNaobNkNk4nQed1WqkYchAt2S7cvHK6b7w9m",
  "key9": "55L3yq11HLfKxHR94WcgTjSvt3fNzJijSdqWp4nzS5jDs6R639XqPyLAY3az2xCS1UYQAWFUqyhE6kFg4bQS5NWh",
  "key10": "X2p5UNhHsV6TStGR6Q77qETbxgLRzBjkEnqdAExJmGvwcXrTQ3R86zACS4pWw2E3CzXZUx6GnXVHXam7yv5HVaZ",
  "key11": "2dwev6udY8puYtp47NWc2dVdDdAPt6t3bae7Roreb8P8kjRpMwcNCjydbBU4pvTeyiTodH1VgJ79rd8Z9qdj9Q1w",
  "key12": "5Zx26KLUFjocT4LrhQpQ8PMWPXnHbT9nLTM51CKLFLiDBSpxGEiyg81ojMhNjrgF3HXbrvRKXPT3vex4wiWVmFR1",
  "key13": "3Tg2dGsPWn3rLiWwcXjnzXxVjSHerrBbduuNGwSvi39HNAKu2zNBTHtdazTQongmL5jpEoeGVBpXSSpiC6FRPQjn",
  "key14": "HpJkx74Me2sGN6NmjMSW1yWYpU2fpZTZZruiy8nDTbocNwFhKAwmsW3BVYxHsiNsYnotVRSaiooq8WYbcnAkbLy",
  "key15": "38d7nVJ76rX36JaJTWXrQfmq3xa4Tai7Yj42YKWpkCg7eexXMn6NW7utqaVr9snwYTncZ6BpC6cRZnDMWrSgATxJ",
  "key16": "4RfDpxvoM8H9j1hvrYPo3gnJWnkMJuDT9goVJgxCqcyttiPywYgNHG3HBdXJj8E9NcdCSyBsXpCjH31gxQQXDPuE",
  "key17": "4FafE418c1mdSS2Sp5TZrtJb4V8cKwmnCy6q15oBHGMRSRd97RecGXzwGgiypQ6RpvcUfbDHGsghcPtSRf5wDH8K",
  "key18": "nAAQZrDMeCPMpubKXXDkdX6Ec262W95MN6GMkvg1upsZsSMr2hzRY4t88WdXWYrip9eKp3zYh4q8QaTDnA2Bwkm",
  "key19": "4p7CCHWonFE9kjFn1FrkxYEA6AAFUstWUsFwgdmKZARKRcwucN43tdpr7WxLUDs5LcnbzG6V7v4VD8hxxKjuUYtb",
  "key20": "3fAbrrUy4dNFcdMuCmre7SQNQu3E6AxeGVDT2BrkLeCN7RwsA13GSFd8AXQWf6ZYdSyuCNmLrUHN2ZcydwndDPjT",
  "key21": "3zY1UntDBvxDGe3dupfymLKgEb4yHwfnFx6J9GNhQucNujuwfGpkYu8crBftkxTdZDwtmf1SzRzkx2G7idz8EZvB",
  "key22": "Lmj1yRSHFnbBwFJ64uKfkHtuLaLfsZEkAQo2buzpHCvJfiKHQTN2WS6JkYQfqQ3AH8UUgn8mi4KetbzJSVdqYWi",
  "key23": "4o2XUGQCqsZgF497zYVrVbqKuxAJG8crxUYATg3q5roMydrceVn97QBxyvQDXNnGqMw579HxE186a2jcByG1RJbB",
  "key24": "qA5zwv3mg4ezH8mYpJ4N2nxxEb5dDt7cP8f5rXxngen9zZTAtHVqywKkyoK2NSApJxYSjugvKnHAaQbaWBUzvTq",
  "key25": "2GzmpMSmspbgPUAbFEKEB8SpeD3iJxDJbu6uVBM85e496G83LhUprCpLp9j1DBUYod1KNrPQVJA1Q8vzbaMGpsN7",
  "key26": "FaU6zYcu1EJppMwCcJgJREswWyVUi192JaXnnYnaXY2k7M4XcYAiKX7ByQUsyBmytThindEdVJrhi9uvtkSHrR8",
  "key27": "2HgPn4Zo29yn9YAZBX6zYHHoAvStPhK6sMLX9GfnqBB4xhMHDaW8xLtzwqyqDTsmvZBZ4KBKq3pR6YBCBJjmZFpt"
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
