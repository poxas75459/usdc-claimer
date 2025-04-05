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
    "2KzLqT6qrhvF8bT5DhtHN4FyqZiDxpRFeqMPV3Y5kGfVrMfG4Z52fa8R8y84Vu1oVpaMMUGjWDfK5ZanqUEF61jD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D7Ayr1FjmhYNpA1LnHviZwNSChby9zmRg2w52U88vob3hHrTUzDX22cVWMXwSyAgis6tpzey6soukb56jE25hy5",
  "key1": "4jDah1SEQdzqvK8wATRSamZu1A5RgX8ujWUK6wPSWe55RHJUjknqSR5mxiEzazPb9ng8eAEkTCatJvT8xhUJMKam",
  "key2": "5S1V8DVvVZy8aFLJCak4GYCz4s3epSjjzMQ4dnC1mjbaBQ9QKLu7bbgjVtmm1SMkf3xe1VUuGL3jQbkDqaDSwTQA",
  "key3": "NjuQyxD6Xr874EkHkCJDXEAiQ2S1qXGvuYqwuEcEqwXGGvCzkW82Vsqc3SybPXp1uA6jZciUoXwsPSePKw5vd8W",
  "key4": "2GPQELZvfjUgVZw9M52oY58G1uYztzvBgCHXE8menfofSf7u2ntLBNxhGhZag3yBQbw7gufeqJfSPk3PedJoDTw9",
  "key5": "2QYW4aom8fAcJHTtqoNrWXWxicRE7CLPmYQCbw6WjwwZW65WVTxXEWqAzVPm3HskD3VXcXMXmRw9XckhHsQFiLBp",
  "key6": "27A9mKibzN4sBdUrLnAoJRKARf5zPzdCFCdxGoryjH6eU5NZijTX6BAt9qupQ73VAvxJhSkTRdha5GQTSbVTpRby",
  "key7": "3kojZiJ7YKhBHFz7UU1Z8mVMCfDKpZ6EbiFzoRxBpFuQdBExbiHGNgbWQabFdN88K7LxeXMAbJNZasH9K1ScykKa",
  "key8": "6sv9NXv6kdR1fQZuLTjqjPJiAWJYGNE77S4PgDQYTnKV8428soiAWBtaXLJQ6VM4vdfWPRCWDY8GTueFP3Z8sed",
  "key9": "4J89VYhpgz2t5mYywjeCHwvdMAaVXetdCX6dfcDt2JzZ87Tp7Nhpm4J4454CbcYzf5vCcKbeRsSUnmfuS2UAjNrM",
  "key10": "N58PaT5JBHg9jGgTUrrPafxD3DBcFa35zETo2H4pKLbUABPSytC6v8XfEDqpbsfQ9qBrNyTCkpG6yytzDLtBz6S",
  "key11": "55CxPNyrggEzTSuugJouGJGVCbh1drGzG8LbPEPXPSNT6f7GZRBuVkuqGiqHMQBCV1nqx2vyowyhhgaLzmX6ptMg",
  "key12": "45VqoKm3oyS1STu5dq1FDG2j781yWQJuTfeXZ5CgPYzcffaK4vdD5sGQmdYMrRqXxL17qmzHK6GC1jfRBnGZfR8x",
  "key13": "66C8mT6PP4rWWX7y4idiHcavn8VuQjSRPFPkHUMXW1adpfc43BZP7vPZqdEKWdYFaSQXY9bfWwNnwrS3UsgAniL6",
  "key14": "VBpu5qiMEvvsLEn2XiqybDK8hsQfAno9LeSLeZchxNbHTxuEyEY2hZ8jfYmsoNw4jj4LL6VVmYg7ekTVV93UYDj",
  "key15": "4CbyADNJ8xqFUUWP1GSYHPG2npfvw1mrjN31c41p2BJJ1GZBBSoagQYVwMSZF18ip4YMh376Eva9YjKGKbKk9JTC",
  "key16": "2Y3AUaR8CXz7v5iBHsAZ7ceWYARWARm2SDYYVnitFKi9iy5SU9wVtoFitvSwnHHq2ciwQvdorSv87frokjvpq9HP",
  "key17": "5PaafxsH5Cm3spaA2xGARQLDHiiEapDNCUYXADRu9BMX95ScrfAejaUoS9Ldp5yr8LQGdHdAvcFJbSLby4LSegyD",
  "key18": "3rVTK17PY6vFVjRKcfBAwepsUf87dk5Q8NWVF8bsskVNymsF47KGNUCU2KcXmxLf1evoDKv5Tv6nYMHNTf3XyKnd",
  "key19": "3FypxK4SkJFtVQU63WHu1LnATBCkforCVvHrfYQUGVvZkgywAaByaSEhVDNedSr6ZC4PgK7geDWZfTPz9Uf1od4F",
  "key20": "4CAZrUBsPC1vPYZ5SXm95Yw3qcnVHTCmSCNDvuHRXiJiiMqwD7UnPipy3ufn9hEMQ4k7EGCDsmACnM7VYS4vkyFC",
  "key21": "5Z8b3JaTAFuGFpMw6JPRPJzwjx5q8NhyfWuoYEbGujksftiTMT1tx3tD3EEgrZsKpf7F9o3MVNiXSoAQLbnQxTvf",
  "key22": "3FWYyMgvXTBMYMPoD9sPap7wQEzKzgPV1JrZEih4yeLcH6N1tme1st8ASJQqiiwMSQXtfdtiWsAZ5Q5cABKfc7Dq",
  "key23": "FsHS9aCNHMUuAoSKAjxVVVhHLdwRzbao6BdeS9G7knHXUH6ncqHwzp92qCqAV2QHHE3G2v2q1LkZzFfSyEs5ixM",
  "key24": "5Am9Niusn1u1dZRprBiUbu8XYwzXCWwXefvaduBS6LpnxvLZm1c9X2yVvsCHyNiySXFGWjmgR4tEdH9jFqzNq4jL",
  "key25": "21otikPaUYd1aAfPYaCtEApAhxESi9cQFK4qSxPFR7izyt337VeJ7ZkQATtnyz88yBCgUo7ybRPe3jBYFKG2gGzn",
  "key26": "28BhdkjCkkm8B6SxH31CswU9SkqkqUkGWguTkbPR3Skvy2SWz5WaWGiTPMCQFd6Q3vw2oYkkdkcbQ9JUQRikHCN7",
  "key27": "39sd3KNjWMGz6cZpwmQZRX4nEnZicB5yUKBRQ3dL5hbNqtoXp72ydU1DZumGB8vJfTooBmzrK4YPRBbwjcCHdHa9",
  "key28": "2N6996sFvun8H7UBP7eSzsNKduvZZAfNtcZpCxmGcBZE1HmHcYa7gGvjWhDzfxr99RhJKHgAGsfWSnLSANHVN2Fs"
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
