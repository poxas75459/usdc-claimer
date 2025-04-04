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
    "4kHCjfEGjXPZTDHXuLxr9tN5xvKr9QkmeZtLf1tVdJT6Z7H3oScWAczs59i779GqnUNkgKX26cTLMX6ZSM9dh1E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uiM2dfziBL8Y2G5LBUuqJxViN9ASEB9214oo9N7dkmhCD82NKn7hA2qeARg8uUEp7FjmjW1czeMHg7gUk2AvofM",
  "key1": "2gdHokZ5YSNjwwYX1HqsuyjFEf5ALqBovarxpjTHBe1iofjxvEW7dNf1MBcwnU2MsvZd3LL3n2JPYQMPyJuJRZJD",
  "key2": "4mcpUey8BBxge7aA2YEtJFB28cyQby6QtoVLzJKFSec92bdYKBatF4CCyAYUfXEbbheP8Gqe7zxaGuiZXXZ5KBLw",
  "key3": "61sVJaW89uifuw5Yj3Au1bqydaCyyPsdYWDgpSoqaqJ79YzEewXWr9R7kZb8a1ehHLzckKd7M9XJsyf9ZQ3RUUwZ",
  "key4": "2hQbq5UhTpWeFkr7qvDUojCCG1Se8csg4vCBMnoHqZS2tAsKf1NMRFKXBSj2bhQpm2cDLtU1zi54tmVJDNZu4JKi",
  "key5": "4ubwAnH7VsZ8c242Fb8Jdy9SFucbPY6FshdkGq8uHhkquqSTBVv3bMEGyUkXuZnJVgFWSigHRURrZ9B2PhdQUG8Q",
  "key6": "3WyJqCVhNaCbtqbJybQJH7hvj7qtgidddmSqzV7gKb7spg1JAVo6EGJ1TVjbN77cdnXwqZC6A4vCNJPZhER8PDWD",
  "key7": "5QkeHhBGJn7FKE6Dsqg5htEb3tA4q6qxn1HwtfWYV8fE2XW9W6MEH5nWd62rjaZa3mX6ehvQGBCix1BcQ38QrfoE",
  "key8": "zsf5SSJ1TZey3Proz9p43v7DT7TtD9gBmAagNnT5M6yonqEfziNfLpmuATWc1AbZHP6hKmUsSZSuyqF7Bvp1vcM",
  "key9": "2k8gVHEwQ3eRoRUAnjqK5gCzWauYf2EUuprtJry32GJPcgDhEF7QKbaehU6DsyH2vryEAWCMHfGTcGKkmMmmPNZm",
  "key10": "NkWsgFWYX8QybHYP9QWznuCk3Ten6gFJM9KtbB2JNBj1tGuz6h6jEqDYJqqKbgP8iVKW6DugHhbvUyUhAqbyZVz",
  "key11": "3cu7T2Dp7Z415EFqrBaUAbjoswc8R9dz1Qiw2kR2U11kmd2gU9U5KVzc52NGv66v2MnQwBtthVN2rXgCKXYZ3CBQ",
  "key12": "wtdFqamRjB1dhZ2hUcU9ZCuxix4VMUnbPZaxjz7cFq21YUoongcriy8qhbWcsbwAKMTxsahZJBjpN7bA8cNkoob",
  "key13": "4KvYjJE65XJhYvAZrJUjeJA9qEekRMYJVd7PKepnoYHuN6LgUC7JTFzK7q3nYhwAjaqrtDy12wfuXSRBz8dUkY1Q",
  "key14": "iYHqufaT33TmS2fzkeku86f5bD529tuM7ZsDr44pLjczBx7BmMs871XqKMGUTvhzUdLUXPPC34KKor4kNbLEhrj",
  "key15": "2cwRE4YNF6WTSGg4hme3QVfnqzkPQZGYbvuuQbijz9VWSqFqWs3TDzLZCMT6nZoKQNgUZryT2AKhJfTDsUqw9pMj",
  "key16": "4eQej9RyCqiLTTGhcRRvJHLB2D9AawrZnqRTss9fSzSQfnPYSP6GXy9fLHFFp3y5AiUp4uNErPrZq9Wi83WF6exq",
  "key17": "3kQXB4qXTGsXuMUHUkfLPDPQNXLU9Dvm4wwWKGadM1FpjmsDoE9y4gvbntKw8QMMsxqQzhAgtQ7F81J98ChgpEqK",
  "key18": "5sky2EfNkugez4NC6cFfsqGhogyESA8tP6cSSFg4qdidMsVyyNNdkpBD86LPt2yxwtKBK8XRKzLscBxqEEEPpa1u",
  "key19": "2GZZecsqu1k9NAtYfQgdYbbhBaZp2CQ8HoZvgS3YLiRZk5RAJLEr6svBQ3JFUfWkh5G21xGGyDrecV848x2Rw2sz",
  "key20": "5cbznwWnPVax34tNe9Sfzq7XyABRTbN4YphdCkQxDp4ccyEz22VXsB9adGzQgqZrduU6gZxGPvC9y3QnUUGjZFtB",
  "key21": "54K3RKLiukd4sqKA8dEprU8CpSWvcZmxJhSz1cqiixG9gnR7t6cTPBbhSx3sqCY6cL7t1hPo6ZS7QLJ45GKHvpBg",
  "key22": "MpcPft25vgkagMeRkKLp3KBYoxAPQ3o8vSTjebcmpLi1oF3Eb8KGwt5DAPFiPab8DzsMH4RF3KTbniUkmNqDJ4P",
  "key23": "3PogC4tnid2XREyqK6eKXEBtFZ6Qo2cXoH9S7Sspe6WZtz4pEJMF8y6xL7D4SS8FZtWVEZnrS9vNkhe4YEeHeUbS",
  "key24": "4yWVUyhJHwpFYLL95jckoP1848jGpVBY7FLeimKti4ii5tT8vwEJNHJvGKfhc6qwXdSwKX28f6FkGByMsaxsf8xR",
  "key25": "5jEUtQGt8ftkokEteoCXKFRQjY6DXtr5tMQiRGjcFsYemzFTR3mAf4iZk3ChskkMDohvMa2r7QfVr9kWAZapYvi5",
  "key26": "3Z9jR4HMAQKa8MfmcBpoMEXpaJoEB1oZaiVgFC4kCzVXTuGtrQXAcgJsTtaSXZy4k55xkoJcpQx6pUZzUscso2SH",
  "key27": "3tfmddNQAwroUUnx7iBtVG7YJND1TX9MP8jDKCNxjut6wwNSpQEGPzGawVitNYPUpNnqHJjMzBfQ3E9TiuLaKv5P",
  "key28": "4ragMHwaUpCB9DLTDd7ozS2fUdnFy1WNsgD9D1HJKBuETREjbZCtpzfHeN6Rf7esR1jjnZeaYs8DFTLd2MEZrbho",
  "key29": "R9XKnna9deypEjNuW94igSi2VXZBxXvERxYLRLBak5arh3u2j7VwUSJpvRUYvRdcQVMyWtZg2jQFmNAoopJLdMz",
  "key30": "3HNc2YJjbQZxoeohnM5ERwRPuM7pjeV9NhWHK7amQpszU5mzGsvtonePuTWZrDvFqXQJUXb5gRgxUuCWggy2foUf",
  "key31": "2M5CGfYEbrK4fYiXRTYMVY2fMYMZfd1NLS5BthU1L4Wgeq8dw6iqaQjoLnNSKXCeffvEWTyvdozWAhFTQiBw8e7b",
  "key32": "5zDKG4wFYmzgjosSSrqrsJZXXvy796JLYeSX34QWciQ8iAQwq1jUYy3o7o6fHyyXaB1zfCfMyPuLW7R7zpPYNx36",
  "key33": "4LjDQhagyEj2TM4q8KXaW7PmwiSxjBUHUeaphWeoNXNbLhwgJa5Echs6zME759p6BSyRmnAJwei8rgkzoDboLhZV",
  "key34": "3DBRsJ1qGAx42So7Qv9SxDj9f361cYHHsvEJywSS8GL3Bj8kPywmByH3c9Bmd4Jrf83zreLnoGmLqkNCfPZSBAZ8",
  "key35": "2BiTcCMDkaDeqZ8NKheLMNmAXndwJDfYsD929qe5eqfDnFdA86GfDeGeoDAVeiUcovkMReaPELwMEahaXaVfNdGr",
  "key36": "2wqYUxXNmweHAyatJYqvGpr5gQcGTy6CVp6MTz2kRWMaxBH5beiPf59rcxrMwyzaXDEaLbRfFxheytjoeR4sT3mb",
  "key37": "4b8U9MjF2WYWYfmNysF2KekDP4exnVA3ggqPMwCX3jjPqSK6Gdt2zZfiKezAgVLy7Nabt58kpT7KEUNhK4br7Mr5",
  "key38": "27pmAsCMiY9QVCqaf3miGFRzdxuEz4ikNcwMuYwJTksq3FSa5RJFSwE6GFWfqoMPxt5mhBSpa6rXBPEq382hUTj9",
  "key39": "5pVQmN83dQv24LKE6kZ37e9JmyU1qkizyKpzEaLm7UnPN7CQCbGbwwxt6CaVp3SBb9afqdFCbqybooCe1Cmq3Cry",
  "key40": "5q2bkNGBKtCibZkErSy7iBV6BPSahyEjk7E8yKDAjoakZkCKKHBqgmMM82uCdwn8xFrorbNYLMnFBu6rCZoah87h"
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
