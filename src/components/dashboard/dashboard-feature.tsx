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
    "5RWq49vEZGyRwHRuFpfra24m8EygV4tGCtkzCuPSiKqirtxKNyoQ58EVGxKtk1fGiK1Z5sRKsgBkJBUzMPnZR4SV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W95xFb4vp5cfnVWv5fyKeFA3TCf7DrHhUG5JNf1Vn6GiMUS5Sktp7TjkxsZ1Q13W3z32bv6Ptd5NZuVFwAso4J1",
  "key1": "SrRnM3bY1GtyYSZCuS2qVuGB9XhqeBWaAdbAjpMUs73WmWqXybzNygnJzLQTsubjR4rKZ1tBAomUj553KTLpHJW",
  "key2": "QSscn3QYp6yMR9zJCkMh6gz2TXhyp9Me3sCZ6PR1MM2DvZ7L6dzRQ7KZjmP83MrgfDJ3QkJQc5tEQ6HccaBk1b7",
  "key3": "5v68B8aJ4uuRkff28rRR64a6fchZwUJqKw1R5VMfpetDJz9TfrRn63wX2gSvLza8Qc8poTXfikArXpn4U2oa4xjL",
  "key4": "4Hy4JaTHvBZqK9kT3P1zNTgxXdjzpDJQ2XxUNK5eyuStEVR6mZKHc8pHoiS1f8N29i3byPxeJsVDSZrXjbgMGgTR",
  "key5": "65oc631dat5MYCuaEKZVg5bXPviDTh6zidg1t347ZxBsB1mBJNNshHPYb9nPjvGjU4FUjpuKqPEqz5hjD8PVYaNR",
  "key6": "HF4bxyWgqS1HYTYMdzYQ4iT41EQjnq11pXD5kfBEsKvs715px3VU2EfkRa6BuFeWZQyDycmd8gCb3qZqyh4fjA3",
  "key7": "2ExA6FKh5DagfrcXnr9YC5fLXzd57EnqF5cWBjgRGCxLdrhrpcHRFh6pPpANcJ9UzC7QuUt7iPM9YJuo6jJrwTo6",
  "key8": "ooZad29H9MJAtuSPGnW76h8AEyQn6fgj37f6Zm5i9cFWwFzPadvjpcSnD87zhSWichNUKqZBTDME9WG2TQCwt2s",
  "key9": "2NXMc8h2v5AHRyHSYVEzuuZuUuVZJ3ducSE4ZEo8un8t5T8pxK1xJ12rQKK7auYUBzQnbjwxd1DZwQkHMYZHdGqN",
  "key10": "4t9tLvSQscU25HGmt4yS8KVm6v5Vs5qyfm91t5JXVK3LjWh3TC88UVrGtpVTsPEZDR2X3jsciAfU4CAtcUGbuQ4F",
  "key11": "4udb7PDh6Un4DFppoTDRgq14tK3yRNyBCvM4f1Pi9ZkE5sfAUHu7iu6Tn4b2Ac8NDVkiiDGz77amUwvTeub8rhSr",
  "key12": "s11KW5Rq8rDyYzcytCLbcWrNqKCyvpQBoLgNLdrodd2afQaLEqJDdHeJaooV45atuUbnQ5upYvR89h83C6fkG6a",
  "key13": "2o1wFDYUpxykCn4j8xphtXZZhQtHGVRxwA7B1rMZ5dmLXpq9HYxKbtRYNheUjzQSL6ZFsb2fjk3NW1ZcgQcPcy6N",
  "key14": "rAKnkoDQQSecc4fBM7uueboF8vzKpNhQG2aW9tNo2TAprPar7c128CVW6CcUDWkHZzxjxTdbfRDVazdWvMn5VBU",
  "key15": "3oASra3KsemAk9hSu7wdpefEe4GhqaF5ZjsQxvgp4xVRMLSxXChoy13AHz4rxSravF7TYDvmpikJjaL18KkZ3GMd",
  "key16": "4h1wbHq8LypbqhdNR5h3BoSZqutQQGpaJrc3kU1SjpegSwTgwWPt8xmz5EuqyNPK7PEjQCVAiyphJZD4oJgRU3qG",
  "key17": "2FGEFTnQaJTdTSckdHu8ZCMqGZLorWBVpmf4wro5GuKpJU8wdwEypFfTZdVV9YBu6TGJGUkNXwcWL4L7se3TFZZF",
  "key18": "2HMQfNdLGfT2Bcjk5CVysCZS5tYDHUWx8KTbBtkKiBcg2xwUjNfqRw9TzNEMwY2jBCfeKWBhk8uYDkN6jZNWkf6L",
  "key19": "2gRGUspYSjb7f41uprXgNUoykCZLtKkedBnR78MRcFu6wtkekAP8imYLhtX5CHaV3k2kLHnsak3JXLPXixEKX62W",
  "key20": "2yvd8ZgPsS4rpLAoFghtpCtusxNeYfDQ4cNcHFshFsPhyJn5ms8agEvYrQHYu8mqP31eo4a9bwGR5Di4ARASqKxF",
  "key21": "3q7vw5fbtQ4fGEGP9LyEphk3EGNCkgsnsQADBwVDrzqWN5L1HU42xHyZctaNmvCrH16392awq6aq9zsMPrMLPquA",
  "key22": "5J7ciQCZk6h2qKXU7eTK9FzSDR5zbwT5J3GxYkERQb2DszhfCu5xtEbgXJzAw7XEdwbPb9hBSrpDJr1yvbwzNbRF",
  "key23": "pSsg7SPozp7GyFyGjJPssmrKxTHhUewDEMfD9ycYMYzieQKgpggMFCiNDPkUiiPE2DABZqsZKJXAenoNWSW7cya",
  "key24": "4jrZ89hsCqVzY7u179rU97nvtb8koiNWiBpxKRAFMeEYZgP73Kri1Y78y3ixipCRQCBbh9YDsgPszMrncUz28Af6",
  "key25": "5jMXGUgPFGfsyENCHEbq3RA5muzuiDwjWe56n7XSohZ6N182bwZtxzD2wzzowCutSYPJR2cby9KM1VFcjQECy4fL",
  "key26": "5riCDvKgQqmAZXn8w8XqivLKNcMT41dzQHgddcWNqRCun85zk2wSzPv5cjnCKmouKNwJbpqrRTfD1nLyvQADxaK2",
  "key27": "rjkv6xrrZAxZjmBbggtw3xVNrniQDfZttjF4TyTDmXvW5T3wL1fKJgwwkdkYGunQvVJtYEXa6fR6mXSRksC42jh",
  "key28": "4RuDhg9Egnkgjs8UWag1VyDS7qsfWgaQAMv4PPT7CSqKDRMQUHz38R7qwuBqCnXgThsCk6ATmf3KSQjSmkNmdtm5",
  "key29": "66Tc2cVTni8wsMSSvZsdF6XJ1UXBddnBE2aXg84v9VWy7nAy4eCavz3UXjoQAVxzFpHNgPPsD7ssVB1NpEwTFbxX",
  "key30": "2tn284XiQnXKFAWJe8kSWhipzGwiikhsM87XRf1VZofjhoU2fEat5h9inPGaAWtKCyeL3agQ1nKdcNCUhqY1jPoL",
  "key31": "5RZfecJzXwpJurjVhMzX7ygJpYZQneF9g6qCf2qVhCSVSuc5LhjVfWtanhAmpeoLBNAgquNuKUzmmsnYMzrqwomw",
  "key32": "2Y3DZagXXEcMgCVdJji5ixH6ECdze8BjsxoSCbN3tGAMxRwtPe4L7ecy4n11fS6Hpm6Y8eLZYZGog8RhTwPwo4KK",
  "key33": "2FvYSRMN3kKisfMnxFRcZE3QHbzEoMkWhJmLZcUwPFRC6KYpJGW3bJ3FGUcanQ9nVoN8W1k3ABqnX5mwQqZ87sey",
  "key34": "3A9DnhjTwbQYf2cmgCVyJgftvg8CrjwHx4fbgc8C5MHuffdMtgSc7Fm9XNAYTMC4GSCHyGvkNpJtAUEYLBJaEpsE",
  "key35": "2az2DZfxYtddJYPVzS5uDkeJrFDbjnwt3tuz8dVJbj3pJXYrizHG5RHn33UKEG7MwkzZP6nS94Y7AWXo1beAyZDh",
  "key36": "HV1PHXiNQTqzJCr1MByPo8CkCqBdS4yb7ngAymHs8ATFbmDuRShHCkJEsddWofRv2pc5XowfwEz8m4MM8wytUAU",
  "key37": "483Kag9w5dFWRGod3rCGgUjshNQYfsiSnfUDy35JQFhXLukV9UevNdMVUt56ySeUdaL4WW8WEH9rTkFZW7qyDDng",
  "key38": "3G5qe9EnrW5JB8svnaFLL2VosxJeUUxsgvMmP15j8D1MsBuC7Ltbz3UZyNPVeZuvCVwG7kYWVZVS1wcE6nGqCXnr",
  "key39": "4uNN53g1apNBRf5Fx1EYwdLLuQw3TdaPk17a417YknnUYnWQ5ssLHFLeAhA9dgUd87A5sXNpvrABunaivvirfSZC",
  "key40": "63Krf9WvLd15m9Yv9L1KfmXi1E5Z14TtuzcquegDxwoSi3MxqguFPnR9MjFAmA5LRJCP1SoiEwnvzfG3u5YM5CF6",
  "key41": "3vWxLv4tFK1Q4o7dWuNd9GQzJT85rGsEM85ufEHpS836cxKAm5MBoozznAg6h2rewYFXspuKLUXViPD72WZKfHzB",
  "key42": "3mo6dwQ515SozcFPsSEx1Rn3atL5E4Ayh6igNNGFJ6JJYHuK65a1T2LZcbnKcRWR2sxBtEk4D71KB1SoJETjGk3b",
  "key43": "EB4vDrJMnKhrpCMr4wfW65VCnZVLW8Lq4S2GsLtE37rcqwdE5fNnRNho24q6ALiK8PqnSEyqFVTaPzv1P9tmGou"
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
