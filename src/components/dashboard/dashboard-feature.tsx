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
    "41GpTMrmyoutoB7DCEFJ2JndvrXeT4hy58cytttWQBssBZRXLpgQomBzXg7eEecDvQRiKMvZBvcsaNWTcDhYqtjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oVFtsYFghFepmJX4DH2QbSGb1poCaBNBQ4hV3bkAJUpTwTczEWk76EYEy1Sxjwq4wuCzGQRtMgUyUcmwkwdYzPi",
  "key1": "5VXDsmX3nsSmoim8EtzGGnVsZ86hL2wt1crfnMGicjvJTK6c8ZEibzY6urEzixsKKur94CBuJG6ZMwR3KeRTaMA1",
  "key2": "udxekf2W6YLAdBDuNPtSWCVYPz6sxCNffgp1wWsXM2Pq1bZeqpL3SK7cMJzVjSanH1zYtMTnidsKJyRC9FzFeuK",
  "key3": "3t4JyMY29YeGX4iUKu2KJ1RkZqHTdw3qCLrWLjXLMbFM7qAk4mAp4msFLRQqLjzVqSdbWrgdNdKwA9ZKnz9PPfaU",
  "key4": "nUfZBGw7nzXaP3XZs4BoHU8q6FxtJFgFFiET94AC2KbxCgwmxn6HeHzJwN7c3KpVenZR25KMZYpJmwu8YBtcrzc",
  "key5": "2p52egFPzCw4raw1rpMf8HELVP4PumauRYZgi61GUforfTCy7pFU8wgPpjjwPuBBJ92Ltg4TanSWSMmcMCGksrCc",
  "key6": "5uhLQ1knkyTb33E6FYfqKt8hogG5U4oLniosL3G4iE24cASwnJtV1sVrcsFNzieVu6Qopf487ncc7QgmBhY7D4BP",
  "key7": "5LPvLNmf9ss3vutJbHKp1NDm1ubydkf1Xro8vgKC3zgpF1kFYi7zYJBaqgWqN6SYXuegFCWv8vG97E52JwabA4Fn",
  "key8": "61SQmLHZcJxLw957RhDoViGpX6fUrFe18wAZmuUBtWwXQ5a85S3rnvTjQPM6C9LCqhsXiTaxTkd7AGQhGCWzXD1Z",
  "key9": "65V78EZfRHiWptyzGHbKoDW7mQUkLAtPG63pc7rQEeNZfJh7R7JR2BSSfTfCLRcYM1Ja7GvgzuCT7CH7qgEkjKmu",
  "key10": "4Nmr4H3vAyLE4TzBubTX1fy3wcnCmkM6hui63Nj9oeFLTqc7Gz6LbCHBz7n6NQcqhX2L5JjtQqGBgywYadkHYKej",
  "key11": "5ooCGVddG3MMU2NuCWxMrA8TDXgG6T8jaB6gcLsCjMxxhmGGkw45rWCB8UQ3dm4MNU5efCtcNz3dNPd9tBHVFxzN",
  "key12": "4iPpG2tPvjjjTQwjxxgjvCdM6prQ9NYtymVc9zEwNC6Ys4y8pfP3MN99C6ayDat29ip6rmK2CR2vUyUEkRYJY5U6",
  "key13": "2zT7Ym4FHz7a3r4Cq8ygVQb8MYTpkt3mKzHNYJmXfzw6TrXhHE1Z3SCYmwe9oZWBgLmhkaDGd3jhechsi5VSCzap",
  "key14": "26pmwydD1CcXvxbrxVeVDaiGrUCGmNA83K1ZhJNwapm8rAwcYqKTFuyMociqpZ78XEvU6oVNe3NLVP9seP4WokyH",
  "key15": "vDTNXMj87N3v5nUvatAsZNNm1jgkjAhvP8TNucfFGnY5SMDkFfQgVZYKQ83zTXjnLUSGW9vh51fhzUU2Br1kkdc",
  "key16": "5xUnvj9RtGAd5bGsB54RRcRJo14XtPUQ9h5qafSwoteX9U2pMY1sTTvmNVxE4jDBvdMoAqBKqd3HTJH49F7rLis8",
  "key17": "Y3Z9ehxiakevijpLuomAcdATSEP2AbSxCGMkqrHnRp37jfZxNtXPNtNpQbZDkiaaLmfDs8Zu9TnLM69UgYksGbm",
  "key18": "5JDQR5wJf6hkD1VEvN89rBRzr2P61UoE5RdN7jiz9CiF9yTxXiKSQhDvc2b5uTWeNMiCawXJc7q37mK5UQe6Ez86",
  "key19": "5Lz89fRdurvPFW9HEqgqh5fWgHahtyZXqHvc3LXFrecgyjPvuRZzczXz1zWVd1n6JWgVGefpdzd6XAY7tTiaYX2D",
  "key20": "eQBPpMzQNxRMtvGk5u8jAUtcdXS4vxHGGyD2V8md1Fua3TpAEs2Lmsj9zr4iVYPoJxQV8SH5qbMZW1xWkLv2Kbq",
  "key21": "5XEkoZBxWynxpk77DbJY7K5yfwh4aCmvXJEQDg9XjkTMoPMWR6vmkQk4soDbKuzE5q3qQ7A7fe4ZPjoyjMrZqYQb",
  "key22": "5FSWTetiehqW8gaAcvVeAMiQGYC7H1FB98trxE4FwBWQSMZwVfpEt6xhKVFGZeeHFUTYVWcKvDj5adcEx9TVgYVF",
  "key23": "5P2DVRqTbJa48YstaYRYJoE7ogMBZgfHg2mZWTgw9TzatTZU9Jn4eVtmCRbA3AfkYSLAbJHXNuuBNM9aarsY9ALi",
  "key24": "4RjLfY9snDdzUazbchTw8hkQA1jUfp81YVP1Hyaq4UXMAj7EBvNEv2pjaUqWSY3KbyfJSGsWsofm3jsMnV2uZGro",
  "key25": "3N51tPQvupvSNyWY5EadewjD3atFzdvWMyMQC5VDh1hBiG9teG6XqdMSxUaqxyZpQAgHj2QuwHyEsEEpVYMm5k9f",
  "key26": "65JuNbxkbWvv9bzJPqf7uTiC2LxXMFmdzU58xKmpc5ajrjbufKcVYxfHZPQ3BPdaq7raBJoyma32j5cvWVJG22Gv",
  "key27": "31KtaPNsEFu9EQQB6S2BmGQepjNL7APAL2x6qwFE79BQ3tmRbjg2jKkrzUC5bvPeFZxNagaEMMptzaUXz7tnREtU",
  "key28": "5p9oywCsLyWNcqYeTchnAFDHmR2U4tPuNDvygsQiV7u4Z2rSezX3Hgu5ZaYqNmnjqRi2jCyVTm2NZbM5b6SgcvKe"
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
