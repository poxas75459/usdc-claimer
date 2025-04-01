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
    "a37Fh5DuPBdiBwQVqJFqLRWrrJ5jgz6Rvi2AQb7BxvxmZQvqK8TXjmS6TT2Waj32YqW7oip1TQgWFogKUEDdYdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66DPpZ2C2qQmTJdi3HeoxQSs3aVEZBPJqLoBoZuNHFojJfmeGFWKBh1aiKcmm5zupauPcF7qFNE5LVJqYwjnUmKS",
  "key1": "4AcMYPBN8ogfQSKtz6nTTetjgxVqmsXwFyhNLNAqwSNnm8F4YApECkEb73E5D3HequsyvdRDufL71QnkrEiwAAjF",
  "key2": "3grpGeovZ3KoQnZp6Qj2KdnCWBv4PwDwx8kAHfJbVV8WV5Z5YdmjLWJcCV9vag4qYMkcohc7k7ZBAJH3k3Gckufr",
  "key3": "4ojVtNhiMEYbp3GyLZGBiVjcvC5HTyfqZCXYkiGHyZdtbkiScSjbWtfipP8PY3o6YkNqdiA7SyMEs4WehLfBYaxJ",
  "key4": "4n5zd3DKKoyrDWb2g8n4cKotzssAF6b67b8UmrCNpzyGASAC1UMJfyq4vaBkcX2yB2Aqm497ECWU97mZvRJBZqM2",
  "key5": "5NEg6xneaXT69Q8vVvdVqexQwpPSvJ7d7VUuNHsrmMwY3WfFKnM1sZzM3WS4hTbc7dJbAbqe7xf1SYwwdwNHLu1n",
  "key6": "3esQ9D61cirBk6QAnCrEydT3X7tG3Nbvk8SofBDhFf7zxUeTmcYupp4gs8h5U8kYa7f6nofVS3CGWq6LRRwoPfYK",
  "key7": "2ySMibaZMvvV1qzs7jZhRGyV9mQTFsFuR7bQgbHqWZZaaxaBHsTFCSLbFvjKodtNKRHEjJAqQQDc47qrQu1HCuHX",
  "key8": "4APTbMKC9dAiEHmK6mFWjmjwvS9YpbYskJRW13CdAKx38rckpVjgu7wkFeFUudFSndSsFyaKVnzRR5GuwbPPhLNh",
  "key9": "4DDmM2DQ4neNw99jPiXz8ncoZrDvc8CHVg4m8JW9KboPo8gf7fJxX3SsDkNQmBKvqGbqarwr6Dpamgqr7FAdMQEC",
  "key10": "2FES8nzBLmKXMVQz7H7AQjKpSP1fapQ6zyLJTrtjs1DYQ35Z9wgwCALGCN5i6zHcLzZx5tTxXhyt2tnTsvSi4i2U",
  "key11": "5pwAi1e5KP2qYmE9jXr82WTkofqE4dWgLkvfCvTvbdqUtnCo9pBwzLpdeL93RKDDcM3oWUWgLb7iLiFJ58GzY2Jj",
  "key12": "44KHRoH7CJxsg4i8PSGTyaxdk4fp8AaPaR9njYTphMnFn6nTQEvLZbbuzXz8QK6ANLYaukTEYTTeBLRnmh62bgVh",
  "key13": "33x6ToKDGUxBSLWjHpyPuEoLGUW5S7J2Hdvbh3kVZ9UvSgXmVtidaGUtQRGS63mq3dek8jsP8etUUcdsrkX5ydAb",
  "key14": "38AyQozrqbqNhyrWB9EJjFwNaZKrY7wc6KDiPKaUrXSP5CwBp18cCDjpK1wQvemxEavxE59qZYa348H7Q6rsSKGY",
  "key15": "ow6UfGMn31Ay4wxTRr9WkpppSuKWFkuyQpYgbiByBBxf9Bsds2Q17yB167vVX8RsreKF5w39PcB3di5Qz7LPZw1",
  "key16": "3A7M8ceKcs6VCZxZh93qZDW7ZvCiqYKAZJWQRSX5Jc3i1LpzMRwSLQGtzzDs6w6iPJgtyPiFmiFdaMFvckkeVXoT",
  "key17": "4QGCCetAHcHSyP4nJQDdj9zGT3UjuTcgaEeu5iuSwrmDBm9hiioaR91Dx1Q19VGsnkJJzzmf8kuo4k32Utw99Z5L",
  "key18": "3mdJ5PtBwR9xkGRQLcQGC6Vi6HjEUhCiUkYJSBogcib1zUB6g15pPAvyzp5dBG6Pr6NpCn6QXjdsW9Jo9d2h9vL1",
  "key19": "4y1MHsUx1o1Wcngvb9tfqRp23QCsnMBS9uWDxiUXn6EPQNmEXbWKX7xhM43dTYj7vMfcGYELbH7WGdjZJppQoqKX",
  "key20": "zvhfEyBe2yzXDuiLdxaPNESLb4ZQxQQtsvb7qc47orHo88awrwnUrUa3jnjb2m1rqQTzD3K6YX1eYAXtgKHp5N4",
  "key21": "4PQBEpN4UavFds6xjxrWGRwGrHMxyhKfwt2Kiy1tyt4uqszq9695Fs2hVsg6RRzKDV7xpqKqJznjH3gWSYAUtPpA",
  "key22": "4W4RH4gyBw6e6B6ezZZWH2ozSGCEmQoxpw3ARSfY5hK7VvWBAiwaocbwvTemBnGkRdi6KTdfFK1Rb3XGs4HLnnDF",
  "key23": "wMKDj1v5XTfz2KZagwyiNNHwiG4xfZnN12g7piJnADDPSreznHqkhz88BpubZ72ZBDqWZYypoLD9y5Q29YZrMXX",
  "key24": "5JPwh4dXEDJk3UoZ7GrdxGwm8KMP5DAdoTJLa1gFDJiwhbNCWRRfMmTjwGRvkgPkVyjxe2bbMA3PUd3KqmMZ9UBe",
  "key25": "46XxwU731ddnqERnnXPnaQ7tB9wcgVmfSGTzZtmxT7Pphv6TY4XfVsWgvJZdzt5r9UCm8utvV48eRiyL27AkZrZn"
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
