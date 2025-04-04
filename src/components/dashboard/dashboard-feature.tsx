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
    "4tgnskoJhAPy8KLRKPyR67UnYS2T3VQS4NdUhyzQXwQRaCPGQ7LySPh1cKwUjDcREWscpZ13SrzUvGNoFwwUoNi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35TMndJpazKFJo1KJamTdByaKK29uDb7jtMbcoP6i29Xdw5UHzhbKGw83ZA52JkagRSyGaBXi3kbeH95vfgRYWEM",
  "key1": "2n6ZWKKugbhdp7BFWsG9sToaoLbfMcq2zNcF3aFpGRtCBZJVfBKVkhHNEGoopwXMsPAU4spZEE6QXmZy8QRYjA8V",
  "key2": "5EsekqQ4JtnSok2ik6BxAasdUaR5SeBvZsgP3Z4QJuUjJ6QrEr9QoKMCaiqMYKB81BRTJHERtEhMrCeYSLxdqmrA",
  "key3": "r7MMAnWFKUMuvP68vL5FoZ651DtLGvee2fMsP7eXAS14uFNFJE281hfQLCCXA3HHpVBmQtBUzK3ggLTepvYgtru",
  "key4": "2rFENjkoVaTGAJJEhVPNWUY2J7jwmkLzYT2WZrPiNvwPDhgLH4RpFAHdWmYQxHxeDvSosPbq74htsDWBmzY7oWRy",
  "key5": "2F3nRW7EWy9wBcPn6917cdp6LsyEigCzSkhNqjc48rZWCpJ2QSvK88xb6yK3rnb11LYmAFG3MRxp5JAZrgZZrmjJ",
  "key6": "4roqXsHxp2LGybeBnGQDZhQivqwrGea9US972Swsqi5cnRbTtNuSZxb2Ug8NhPvBzkiNqK9YREQnLdkybEMoBQyc",
  "key7": "3hAaAcE2VsPdn8siSoabVq9APniZiAPiSG2W27FuDG5w5sNYuSso3JTr5ScN68d28b4iZc2kQmkW2DhM2sagCGBU",
  "key8": "3bpw27GnMFC6ShKYZxxMuZLVc72bZg5UdUCNDcgHKYsvTUtDsdtwhAaSNXgcfSwcT3Be6vk1b5M2FqmAaETMukGf",
  "key9": "5A4ZpbDPRrufsERZYvFkkUh1vYo3Mz8EthjXETz8HX1YixtALTALs5csd4LTmanEnVoyJq8Dp4R3CiDtxtpnR2DB",
  "key10": "4WuKMVb7UtC6QzUREWtL11Snbk6mTm2jtPRFa3JMmvwpGCiBgEEd7XCpjeGpkxA1jK3p8dPd82CAe3e4cH9sc22n",
  "key11": "5hr7zdjQYU9RtamqQaAEfcpF9KajvvpempKSHVvHH5Yf9fv4ExTQhhSA552Lokuv26onPTknmXpFY1kNPD2BqnX4",
  "key12": "2SMQaXWAfavB32Gyi5Z2XHpNZrYWUg8eLYuhcqvAVctQpqDgYFcKPssTp93w6651sUVjmMkzeVF3pJFj95LCuKvD",
  "key13": "38JGm6aVAgKKkc1zGCvC74SvMGwzjivGSwsHhCBBNZqejB4jA7eNArfLirXWbwCAbs8qM63SawrBUpLxbahQwhis",
  "key14": "4AfAgiAjfHxAxgenGXJPisEbErodVC9Mt9hnaQzemRSAK3YQcZbKtHLNRYTcZFABdeWTWR5pbXJXuqiV2AZKQ3Az",
  "key15": "2s7jXb59sqKSY9Zp5rv6wXoSEygGKAUC6uTHP6b9bDUqFHtMSzRRCwLaRAX9WuT1AUrknNMS8PNWbM38V2kgCtV6",
  "key16": "hRVbmrMQ9p7dpc9NQPoX27jgeA1aNJyZoxuwgAUwgeqd8DVk1tEzckJdAeRtCEyTikrbvDW2nLyjqQKfzcmzBAM",
  "key17": "4yq3brzERFMGCYH7NurtCxie6zvVJCUPx4oKDHxvWbB9F8xMDAcFZTfp4jxfFfbxxjEyojoVgrLKLiWMjbcYyEWE",
  "key18": "5MQgtLefuuBy6fxZtEsduZJiMUvLmGC5nJ9bzaCR8dbPrE8fRUakLjnXLL6JaMX6ArP6Qvh5M6efHgZQPmjgKjzq",
  "key19": "2Vb4y6UMwK1RFRZ5oKZfeWdsgAnQa9x7mmmNEeVQ7ZsHaPSTrRHJ2MNYXw1eQwLaEQ1xxS9SJHzqdcAacEJD51AW",
  "key20": "3nVDorsHncQbayxkeHZUd1srB2h4MZxRuYE2P9KnuuvMChmZiHmvEYqPThiMsSDMjs7qv4BCWDGVR7irG7KdD5V7",
  "key21": "2Fy4ThSiZfYVBfLGDgecB3H42BsKgaNPStfXg1aUZT9e1ZYoAYe5JCAar5k991Ee1rmBhanNmMuF7PtBEKDZkKcs",
  "key22": "2384Sd9xn3fJVh55savKQVdmRWPUSaNZykiqoYuc3nFX4FSaFqpnzo5LWHYdYL1ceRdvtA4HCsfdwjsRdBZ3rTca",
  "key23": "2MwMiTF2Fc9rF17rpBnMZLYzKpipWhjbmk6JFST5ZbhqDoPEnxYCEGS2YpowuDpybd4QqB9TXy152c6A6B4UQhCZ",
  "key24": "3mQbu9tE4StvVUNsPZLJPmhJW1xN3p8bfGUquc5YCGRBRuYZiw6a4CuRPKHKFAgGYC7wfvuQwTJWjU1fdHhvP7mo",
  "key25": "275qenH4FzwCSvZkK8ZiCy5AzswTQ2mfDPA8HNo9vUzFht849V8j1b8hqv4A2zeqtf1uz8fgiFMvzxeJMWNDwu8x",
  "key26": "W7oYDhYXFFpTx3z2aM5q2u89GBnDEHLQpV5iPP3bVGjh9rPFwJzNzigsYdUj1ZYsoEwENuh3cz3VP29REdXSFiP",
  "key27": "5dPBWKaMYk3wmGFDhj1PGr67ncWbsQjmGoH6uoGcPMmUrF7Ln8hy68FZWYvvdSrMnq82ss9ziy4s9NnZJhrNtcoq"
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
