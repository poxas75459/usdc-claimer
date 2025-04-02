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
    "4qcQsKLxMT9NsUX5VxNqFrzzTik2RQobkyHNZYR3wL4z7mVeqitmakgBE3uM6EWTjaW7UoqPXqhNDh7iYd34mpb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sJgqK7969RyErAktVY3QAwWqbVNdLdDJ75s3W9YRbETQF3LQ7jcA9GYd1tgzd4dMsBeKedJ74iCDWpFP14xcyTg",
  "key1": "5zcqELGDfD615aNnSPFQDrs37ehQKyWJD89iTuavkqmqeWY5UTiGEuv6aQLjhdCdSdYjCvEjDTPY6e1gkGNFFoAw",
  "key2": "3Ux5tPa3gRnQvUbS2m4aS3tmW4NLryWe8Q1KvkBiyPBg2SMLRqmhBQs3LZGx4Xk383jhc9UZJBDVLHW3yHu3wLwm",
  "key3": "2yVzgi9haksTaJjB6XXxdYjrzwpk8rBrLCkYZgnG2wUUKjwhbYv7kgiTihUEHcZAayzZU9NKGjzxmygjKvKxiJnn",
  "key4": "3PvURTCmeB3ebJZmdYV7NyNXAwAxdEximFsoBY3XSPr3r8ibTmKxKu6CeP7zzNzrZEjHmE2wGMGrPZfX6nE8EndT",
  "key5": "3Ra8fjVFkyh26FRijekn6iD4aAGWcLBujMbMv5KD5jNqSWEARsxF3iHbVjQxye9DYh7pac146HFoqBV4FLjJP9NS",
  "key6": "3kZDyibdQS5nsakkFhNVFzG9DRU6PWStpMUZqEXzJpCB1QnCVrsR5CQ22TfzK1ehxHV6Jjog2Uf68XPgB8UaYuB7",
  "key7": "57camjQ1qZS7FJzpqQ5K9e56B7gXBGbsL7PpVofyJPDCLY9Nf5Gz5VTwpHK16tTjRzSyWv6CJZyTUY7iW5z9BAPd",
  "key8": "3AxMpQJhGqh717KvHGfbaozzqN9HzXgfu4FGKmFmH4cxiikJbXizV44CaJrM4WMwembSRzU8ogpt3oTywu2GYonH",
  "key9": "57EYxVq3RNC61PDyofsgjrEo59F7WJe6iy1zQEiirFb2CuVNmt62nwUezMAQWMBwipeAKasZCoZS9PmK7uJbGKoz",
  "key10": "55AeR3a6KRWXbkik41dexYF8cdGK1W5B77NRbyW43QkpQqU3isTQ3urFxEnG3LVNNSnhoV2y2W7aELqmgB8ee4Ry",
  "key11": "EvRFuGsavtYzCqLiQa2dZVXwoaYh3W4yuZFyFWTrpaA9yBCUU7J16LFswcjcZCTfbPhCms6jFMN9ii4kXpSsY7x",
  "key12": "5KjUf1kMdXY9MGDvYdjcnkesCQRzPNNsLpe56iUPQf5yd1aG9SAHyG2ESSmj66xsFALkUizL3NKjNETAR1MeCpWn",
  "key13": "2SmvUDS4xSHK31LiP2yutuSjbCajxLQ2knb317SXBEsvjRvyQnBKYXTsUuwQhUBwgQDB2vumC7YmqjFFLGCgG31C",
  "key14": "3YWmPfj2xJAnJyvpRcNbdEVyTvbGmNwQDr22yJyP1XcXjGP1JYDjiJ2h5uXJiKhYADvRK2QZd9crgPec5tGtVk41",
  "key15": "swrX8S8Wr1Bf6NWom1YVdfGvYWkzotyo6cR8akx5kihXsYfwnXddona8xSXEXf6ckxQcMNCC8pR1Em9fE1krntE",
  "key16": "3JaFz9AuintfzS9rnAhXaDGGMWLzkXtKmqfCtdVDNKS11PiXzx1Pvmu2T1kWCmdezhws2gh3mRfdbEMQSLDwu9xW",
  "key17": "4Xey7YF7H1rwzDMZ8gsknyxS6Eoh4Jc2iLbxffqycLw8jxiMjPS6uM7rWZWFa2XR837LCPoTQoZ1MKpJkccfanYT",
  "key18": "5Uhu1LaJGgvA3yQ1ffmAJycZ7LBWyTi1rMsSz98hn6FyF2ud2rvDCnqQuvFmU9dUD1KoVy5aFJzsfpjxkG7fWDHG",
  "key19": "5G1LDhpuL5KmbMuGkZxmjgR3HbhwijmSneRW9yvMS65qVruTgpUQ3ktXK5YcqgBpdU48rs5B9RanCcaZKuWMRQhG",
  "key20": "4muqpcCUaT9TZQtrYGoNqVs9DBxCii1kT24xMgY3FVVTmZew65rL2UhfdRFQje399TdMX9pwuUnjaCRz1Qrgm9Zj",
  "key21": "3j6gbfShfVcnz4ftzuAb4bUFsS2bAUUGskjUFWPcwMSHCnoVi1sCSKZX4EHJ4qc8QmNC2vo5CRaMX6JQFg9Mi7dm",
  "key22": "3vKzUXx8RaHoCXHQXmCL6skZPENXX7xgT1H3FVLbEysamHYazR598GqC5wEUJM3oAxAErvbcv8Ak54sbyuvFQj9w",
  "key23": "Uh37hWhT9gNxqGfBcoXbXcb7DFeD5ekMH7eJxKvXDmCVHSbZUtTovgiFP1bQZnSv1LviXZA6xTb2HZsh59Ns1af",
  "key24": "4zd2ccC7fUnvwU48cMhi4podWX4LTqknrAxC56FNQFxuY325PfWS1d8wH9qfGoCKDZ9y873H7SScMxLCSFkithio",
  "key25": "4gyPnQsxxLiRZNdLEKASUugsWZt7Y37wBP3kUJS1nRfffPbPfS1do9sZhTjre5dXra1WVSKgja21ZkoBYNNWW6vu",
  "key26": "2mBhuWFJwLnJnea7UEX3AQoshkqThxRtgzRQnjabwNKF5fMkRuNB2yfkp78XjEphXANN9czbhJqwBBPbUN5jBzka",
  "key27": "5jEFXV6UbhBFcK3sqnnFo6jTZGhMUT8SdZsgLEuk9dLjYYkzv4SneqEsKca3A1GPXSA69VeJYRauVjoBCX5QXhmF",
  "key28": "5vZKayN33oYsTaDeCLqVktd5zo1ueBasngjWAFihATzxdaJiZkGyEnJhDPHYEN9GRHzUcJ5ft5cY1KWMCcu5c4ST",
  "key29": "usz9WWCdYBe8rxE49e5G225Jc6zR4DXHM2cPnjCDZgcd1S5F8AyAWVN4w7ow43AXu9pWA1a9ApjkHjbg3Y7PXKR",
  "key30": "3CsA5YUqFTz2Ub3tmL5SBuTZG8zjr6FnQNSZkH2DpbEGQGVExE8PN9juNdgVBw4CjynAAK68qWgDgmhgGsAGe2r2",
  "key31": "5BgNohZc8V8A95mY2uHBpbiqTF3jbBG89VXjC4sFBWZPASDqX5njSddgyMMz7mQmyF8Y17QWFAPm3gv12ErDq4kx",
  "key32": "65sVy2RwhXLZckM4QwBHAXg4wymZ5QohuTPnbFSsQ81b9xGYTvJUa9NPuoZjaA4adBJ3HP3ePurXbhufQFsQnhtC",
  "key33": "2NKgPNy8WyATe1kxeAzxaDZsCzUXkTv5nDHvzqwnjM6QdJ9HZPgmeYErzznvYKQNNHZek3QJRMx8M1r6TWrLVebj",
  "key34": "41FWMUqNkR3uKqd9ZtVLuoFXpMLdR8drTqSPVqUmXQQ2JTVfRKm9Sw9Z9NjZXeVqQT84gYYugbJ9Ae48UmToN8YT",
  "key35": "4UJW3TKvCaN1iRtPN5WLetbyzqFArfybK458jDJ3QECHwU4wHawzbt7gfvg1tUYTdVAStvtBKN7Pxsfzzu3VbCgJ",
  "key36": "3QzGXfMoe3ffE2k6i2Wo4cmvWhaN2gszJCSLNxoPb2ERSb4F3kHKc1wHkUgHBVvDrkGdS3oBfgMXbd1z8samoZ7g",
  "key37": "wgjxBmzxD3Apiof5KbCwyP7M8SxbfzojE9TxwD1Mcm4CrMHsdMtWZYJnrrtGKaPLbnpBEdN8YKR63VKaGLSrsWT",
  "key38": "hMtj2CPxtEu6qxwy7nKoXdrbKnxgpUfdWBcF9vW1jb3LiUK5NhTdyzQvB9Z7WgvdRUGuk1vxuS37BBPH7C9WwAM",
  "key39": "5TBXkkaaKJLXdRnuZYmCyaGuWKj31XqHnoD6sGaPA6YW1GGionS4KcdxR4hGevtx7JrwzFFCqSHA9ueHCRsPnnre",
  "key40": "4RtGPF5GVh6gDV38XuYp9pXyCnmE7DinkrTWqGUWSBvjx7fRFacKdDwXiNx5bDcaQxndRUwYXr2iRap5hD6evwSB",
  "key41": "2KdCzoq3rhGeYmurvn8s5SBMrpwAXNzASqPdnk2dqp89TgufwZzKtQ6aevFk4G1K2TBNAXi1RqVeHu97PNEiGkxf",
  "key42": "52zUrbz7itkaqJZXvj38RWdQ4J3yVEakivw2FWSDbtspJx7Noja8YkZa5wj9JsMzrrSqk3LE2ym5EpgREbcnYBca"
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
