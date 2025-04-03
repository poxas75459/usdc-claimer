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
    "2dH1uBS6jLBPqERdM3kN4QhVwPzpN7UhoWxiCMLNDFuL6KzQxJxKzAy27Kerg4VXEedBFxNoNiFY3QPRzDvTjqfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X6YfiUFG2BV46Pb9emNUR2tDb836FHv1ED2KhkRHrF9o23ERRnHHM486CmKuRC9y8YJCaa8zxLKKbXF9gsR3Q54",
  "key1": "4dXV4FhVRQYwsaq68qgZ3pPV21YqDXwUZpsfhyodt4JG7Pga1HxdkuEStZ77NPyTa9QAptEgUu21csjBPbxAxT1f",
  "key2": "4eoZ1JWKijCnNamRZTFxTGKwVYaiDrMMLCiN1fqyqEWEPQhDExrkkN7iNwqqm9PBGmkk61Fh5vmcjHEHV8MriahM",
  "key3": "5zdiGDMg4MRbnSTRkwjf8jpLPiHd7CzYYevUDTAhgGmwUkdT7Py7LFqrxWqPA9rjwq7a5KRNXu24zrXqjLbevie1",
  "key4": "5ijEphFC6UJSKdrE52GTVKN5VoE9dFHpKziyvGvwi8dGRBxpfMyH75FZDeLJGQxSyUUH9iVxbVLjf7GaUNb5Tqjb",
  "key5": "33d5rCECNBLpBm8P425M3vmz5o1yM6FarioyF6H6hTeK56oBrMiDv2soFxTsDc4CDspYJmtbYVTY9fvXv4iJwpax",
  "key6": "mBM14hZQZ1FAm1uZ2YYL5akcgS1MTsLM8vnNLD8HaTYErfRwjeJRdb63RhRiLm8VToC9c9TuGQokFiq7nBHA5s6",
  "key7": "5j2yWhtMwPkNQYoxHMqzZhNsZarJs3mYJZjDUvbf3U9pNhmQSt62V4Nq6HcktcNgv6zP2rDdcudNhWM2VHxN3BKg",
  "key8": "5YrXBZ8RED2JQSLztuYw1PsBb48ip5DG2d3uySBsZfCixjBFiREkYCVm5tZ7Mp77ykD3qt2o6N2oGA7MYqreYLxz",
  "key9": "X45rjjSEbKhugZ3vSt4CvGHFDhZXz2s1YvdrJjSqWy3s6RFaLJVrpvJS23AvFvxHFPFsjGZAgZPCakAQTxCUuxS",
  "key10": "4QCjbxmHvUAPiW7hKi5RvU9PPRa6Pp7FewBB22ASmVKXZJ2fsbRSXHmx48owqPik6ZwmfWKmPsiMPfpU7yLdb1qX",
  "key11": "3Awp6nyRwdEr2NWWaDbb6GxAVykgioYxvv5gxPhi5zQtUBvwe7ybB5rtz9WS8PmyGQ3Pk6gzSZjwBjLQdxc2tDBp",
  "key12": "3VVj3Y7wenLfMaeCZa5cK5odV4SNmJbExhJb6FHUabo8FXNCtaBM4Qq177E5mz29NyXzgBAAipg3vWRZSPQ8Tewa",
  "key13": "4rm2wVVqBsCS8bk8KfrR1Lt6AM3ZQ1WFDo8ZhntGph4T1yaDtL7YRhD8AW79s6btawJdbiU8HuRZ74QHDAsG2exV",
  "key14": "3WkKGzyFTabwV5dAa7oewXR7YPQShso1HvS1qAD8hYJaYxH86U97kxawRZ9RWrMzd79Ecob1BzgejMVca8yznGX4",
  "key15": "5FBR7fb5j11EdMaST2udCi2ajoCh8GCrYbX4MKDXT3SNgpqhBS9kTyJ7js3PK5J9jccsLooYqgJB1YhQeLueQ2nk",
  "key16": "4G6FT6VJqf53h4nT5JAgMsjwgNA94RSkc3pPm9AdUkyTC26wBVRespgWeAru7vfyDzu4pyM2d5xd1ncCZPi5oXkP",
  "key17": "3Q2MyPXHiFxqEs5dGNrfkFBLWGXQzaXXquGkHw6gEfAA4rZgS2jd15ZBRECz8pX77mTX5qRnhm1oKvJfqYqaYXdZ",
  "key18": "57shZ8NGzizXn14P5RVg8QvQQmwBzyaxk7PSjCGagihFrjYwrkVJWMKtcx3JXZUfSjRPTMvUuEHk4mANYFv3ZXzt",
  "key19": "k9xy6KC6yWBViTThQaBovqebmQ13sknidz36qxmY3RmArubsLPFAZnyiii9WiD4MX4ds9VWDDTA3VZkbK8DdT4Z",
  "key20": "Yop38JCN7mThcyboiAjtpqYnt5NPKbSEF9FeD2igWgkxzKqJut6hB2yrA18tVjtS3xwD6QxkRBRYDdc4tKZQtg4",
  "key21": "2pY2Wpc7rVs87csWhfnn3mYzHRY51hKRzQXnzm56aayLsR4GjWT9PxHateX6A2f9p8C9ED7eFLMziJEJSsKoVbNM",
  "key22": "2JoKB5GiQw9A16ijpnUexXKcZVuKpDjRAmRTMYZGgqbPqQvTAYLAvG59A3etJ45zsL4oz5MpKwB7fHvnSfCHpqq2",
  "key23": "34s1oUjhpq6gK9Ke7mZq2oPD8rs3pZm2MXx5Z8M2v2F3Du9acVZ7pXoC23ZeKx3xnL7r9ousJmu3ntBjyXQKMigQ",
  "key24": "33jbhoLPgGctaMRAFSDoiLJnnq4KUQfucKX3fP8YSXqoshhYmEBePAHy1cv9ZAN7NpNeWYArhrZa9USdVnGtZh3c",
  "key25": "Vwjqtx1zgp7SHrrNqXEEVSr3HVc4zXdTcUdPkyRKGTaQeLqcswHahTEgvm5bmGEqmCLsGmMdLMTBjLhSGjPwPac",
  "key26": "nw2YDH8aPobZbJT4LTYRGTzSD57Kf3Q1S8BQwU1xsH7vwX6dyWrCtXV3E5G1uarB3ecRXpVtAVC3t6bgWm5Tfkx",
  "key27": "4xaw5n6gEB9UygKtDwbQq6v3ZmHLASkPU3w51iVUJfpXZjwiYJn5vb6U1LUyNbrGMpxZ7msKC8Wv3HZa1dL8roHV",
  "key28": "2Z7XQ2bjNVQuh5nZFjtMnsvF8c95y3scFkXBETy49p9d2b7CsDhD8xBmaG7kHjW8e7iVcCdkg4EDFPJu4oBAffxm",
  "key29": "2xg9VQKZ3MwQ5i7BeS7tf8oKE7Bg9oCdEmpXkJ2qzqcrN9yA1HPmDMbPP6x56yEjc3GEcnu3D2dW43zsfnhU1NhC",
  "key30": "3sti2EXNto3bZbaErRodoWAyMHL3RZfzHEK3byLZcDf6YqFKH6kEWNm3HkfQYhaDbWe5aW8j8sEBnCrXozKYT448",
  "key31": "4qcoLdjYaJQV4mKNxSHDW22dJ3eRbAv1gtYCx1kCZ3HJaStvu3cuoreDMxPvEbGN4sVdPEzyCuKsJB4GojBWwk6N",
  "key32": "Bffn4U3dfKskLfijuwQGXeCwDGdERdXdbpQmqwc3T8WmUp6eKLi2giQF5MtcZYMQ64gm12TwtCFo8Xv6tLSGudz",
  "key33": "xJkpamXiok87bh3TJJsZA4cLwyKgqE123hrv67rgVVCVTHrdAhrksEETsoYW5eXsqAiSFTo9xE2YQaZw3d6ebmN",
  "key34": "XEZcD1McHpRRfqR53G76w5obvskScN3jKvk5npzkVfpGkkXHtg1TasGUQfk3yZy5sq1UFAup3cahjDecMsxkqxH",
  "key35": "4mXRVQHKp5EfMzQTPvpK3sLW2CBxH2w7H3PaX965SWYEwiL81Y917xZZBD9b83VEbo8xBtzC15j2RjjdPrZbW9k4",
  "key36": "NtZ7YRmYpB7ciA6YCvf3ygvXWeN9uW9LBiQurcF21Z2sRTwc2YMCKws6YpxTYFoMxzqu7B9vmJqEb4sAjzzbR99",
  "key37": "5o533VouWygB3dH8FjXVTmd23tjzeEUdX9UWUoNNqvEn9aH644y4qMS5VFqPxQcGbMvyeRFhqX7mSTyr5jCTS1dR",
  "key38": "59ZbZcVcKBGSsLpH3XX5gzJdLP4jngoU6kAcxsTrQFjQMWQiHiHoZ1XnoXhUE17uszNyJ7TuWnA5FfMuw31E2ncV",
  "key39": "4hZQNNMR6FqQqk3nuXjVRhTpNzyRCFViVFCDxtGL2SUfeQieVwa5kW9LKNFk5wuLtBo8eh1Xk1ARwgxnDWizz1Gv",
  "key40": "3sh74cuYVNgBH6xTpkrMz5Q3y2tBbfvidWQwgeLvBmrToRkET2Z51kf6hqMCBGKoopKEY7y94jtZ3sontEbq1oSm",
  "key41": "2YAbMR3shy7iC5btpAagFtHuBFsnBBy3fgzDWBb5itYyguJgsnJkhjtihkJE8CsEeFk554gTnLurNpCqiTchDFMs",
  "key42": "25UtskUqK9pW96ACfbP26RJ512mgXgNNF78RpfixWr2hKqS6jutQSsyUHFbKpi3ewjcZhhFvorbeB75HLS8Awpeh",
  "key43": "5SPtLBCEQLMCfRo6LYfAHzFJFrVmXiZtdCx6vut28QzAuwzkUwNtY5qn2U8iFktrCHWD4FN2tEu4ZcsRRcxecCdA",
  "key44": "3iX7yd5vDNCDFzuK9BAXwkujjjXCrXVpgyJKT7qhcdgCWNGm6YqJAk59nGhHosAr1mMuKoRQiJiWDooNqVLx4xYg",
  "key45": "2GGNhbK29AfQieDJZFc1sNQZ4ETuTxmyYJK9fmSqALDojbQBWBpQyTL4GiSGSRhAdMAD21PjcZBzq3CNzAkxb3E8",
  "key46": "3UDDYoaZ35Hv91Fkn5kC8JF2EUjNDvSXNpTRq6veWkcH4nu6yDy5ZH15KgQgDfdFeBqNecG3GRR6qZiBXsdeyHVZ",
  "key47": "rpsiniL6jm5xHbaP2rUTkixBq5FG2oQhyvNxuFfHZZgLe9myJ1zBeg39d8wpvqReMnWy3FttoTpeCDkZUewg8vQ"
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
