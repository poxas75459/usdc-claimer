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
    "5VMDw9ssbYZxWR5WGsjawGYBfPfLatCffcN8QrrSNvt2hti48yfdjkeVRU7h7mjbc4yiGrSncpY7UR5Pa7pgdk96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXXkT7MieoxgoR2wbCsFPByT9LW7NQV3AyCJYis9DZH5V3EmZHGtQHN2YyXzS3prbQGgmrXmtN7Jq6W1LaAFjUr",
  "key1": "4XUyeDQnj5rptkBUhht6qb3ihAjYJDbcrJZJFNahEMc3mWZQCr21Wu4LSMXJbG6uDx4F9jsdE9LsLbEKFkn8Ziud",
  "key2": "3V7p5Y7pXXL7P3hR3rSopX8NdZTPxKJbSTsz91ZQQrxe2zEeRn9iAebzgwFuWHNVqaBsy1UtrBxQLKJVnbpUcegg",
  "key3": "45AaXW1uLR6BTRTok47uB762S4dBcQb2u2HNWff1thnNgM2vUT7AKDVa4NDLE8Mu5g4c4MWwpB5xGbvAk1HK3idh",
  "key4": "5NdRTbX8G5pjDjCJwYWbQjNNpmq8G3735LGWqhRY1tFBbyDKBUs4Df3ADPiD5KboPJ8ZC7x88YPifsyvrQ6ZD7Va",
  "key5": "2AvexSnCbwshUTUzLMcTBeQrW3TYJFQrtBBsTWKsocGZkMRnY7fQaEMkrZHeQDx53QmpKhYt2fwLKbXGgg3FncdV",
  "key6": "3J3pgxxeTJrcxSUjbTVusaTS7Qet4XaT6wzieKJC6XckdzyqrkQb1AUTR9dhmZ4hgVkx2MviiVwp4L1aRWAHMzo3",
  "key7": "5TJdvFZnFnHAg5mFVZnfQBphpYRot1zSaW3S7362715BssRnKTYnDW3ny68EuvUiiDFw73ENqpoPhccnsV6NtSFk",
  "key8": "3HsL2SqDDzmLs4vuxUNY3niScBn6ggatEDdWE7oEFYQMGXmY1rZnLzryf7V3y56uK28jhMZGYe75tUFPyAm6boxd",
  "key9": "4Ap2kf71cMF7jHGCnpVs7PACWH71eo8vBCPvZnco8RwXDg4ygoKTX6mZKwa1v6foMXi4rUdnprDgwu3j3y16phVD",
  "key10": "2yjc4egYCgVU5QiFB1f5ALMKTM8bdKhzNTP4BJ6kt3a8xugHRKw1LWR3TxQggpYAbpbL8WwRzs3cuHryXCM3tvQj",
  "key11": "Qpco8q1CKzD1jrnyS8j8LNZXPMU1C9aiicHVY5ySbHN4sompTsfSaQNHuaj7wDzod8gqYdsyGKBv8fQuYbA67hj",
  "key12": "3gvNXmmzPNsqrp57PAuob1jQNvyfDFw1utHx8wD48mdGHfuCtGzCgF1HF6AeiTSdJGowcn2cndp91DrMQxxcRivC",
  "key13": "48yqvg4QdoxnTtcb5cL2ry1U1kKRsYGZe6PMG6KoceqYDy1HcqYhUL6oycBzpgScdvkMfos3xRF9bKnuRGNt2zc9",
  "key14": "ByHMVjrkEHsvgrpycSmqYs62rFTYjfY6Hj9Pv2WQ46yEpp8AEEfuvnMsadKEVMy5S3xmDnLHrz9mmdUmszsNooG",
  "key15": "5ynfBCDY6iQh8HixhJEtdLXHSLzNSvLSGteBDYaG7r7jUn274M1dBK6cvJ85H4e4mp6TZF9wuujmVVbXdWBGDk8b",
  "key16": "4vftWge2bFfJ8rzxEddEDcJvJnFBhDsjG3Gf7jv8tcfEpSBoBQxmb8negDdEDYiVocmK9kTdMLMWDFt8QKFdGmmd",
  "key17": "3p5MJ7cGs99c5UW8rVDJ9z2mGgDY5vX1C9rKwbuMvcP3xHSsVMz8RoG7qf4KmPCSiJXmeLXFogXx4s4TjLqmRfgd",
  "key18": "4BTamvvPzzoAPnANpu2Wk2gKQm5fc3w4HDHCgC31JyBay9V6fSkL4GromtKJnCLvz2wgtgYzH7fh7FFCmH9kNMuw",
  "key19": "2WGCvGt1XLLn7b9nssCJeCcYzCxJMDy1inyE4Pm9imrjZybQhuLhE4o1ezNboQ9BLBhv1tmvLgrAfZ6deGeSgc7K",
  "key20": "2gMMfeJYPDhAwj1M3SqT1FGsmGTREQ1FSX6NnWt7GZAFm5si5gZt5TFDR5Ukm6V7GQCBK2auwFLsxGnwK3Wmb5yb",
  "key21": "3vtb79cGSS2dCxe4tyLpraKv3j8AGqEbaW7b97SdzaTiGrn4QTXm6dzAdLsPcHM365UjotUnEDubWLYG5uHqEUtp",
  "key22": "2t8b6B4TyN2ETSL4H8bE1YztfDF1efLmGqNUszpjnmCYFs13QhDTeLdiKp9XxtRU9QhF9KEyhTRd4Bqh4yMxLEAx",
  "key23": "4gvR7dNYv1kWLPUhWzMH5qcycLwm7uXdaRf7Dd2dUgpXEYdRHKBhMKki4aqpDz7j11q3kHc3SN7YnWHQ134YiaNz",
  "key24": "5H3zPxPzvRWKwJ2LG3gh8snZXaMKpU2qLyov9ZydnoMBd2nRZqa7AQpXxdvc1KQT9zMf5FsP97cDgfNBBKeqdJRE",
  "key25": "2pJNEu1RSQhfo5Bk7wKPLuLtNKaG8J9ubmUK9f59dNtWvsQ1wGjk6XJRvB5fYonjVhWs2qfRCshpFJtE9wPFbLL5",
  "key26": "5PQ1rkNWmPPUBBBBjpbfXYD5Jkt8YjP41o9K7JpDcp6eBctymF6tLZEyycHiJqdusp5XWX3XGozhEUTsqBYvbrum"
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
