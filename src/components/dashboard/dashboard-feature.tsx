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
    "4gyS7StfnRtYYoKJ5ybnbmRb6gcCy3srcixLgwjSESQ4ptvEwnE948wGfSz3UWmQonnpEWCscpu4DUJYgqXcui6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWJxWKHeNDSydPAGUMTAo1VSkDQJCK3ejR9peGMhqzZCVJ1Lj96Z3JxgH9UpGpR2wUPvzbbZENZS2RbvZoZ1p7S",
  "key1": "4qQWD1iVpWSoc34c4DSpG1PeZ5WZNe4eB5gabhAoW7TxMMmf3Dx7tMFQC2CuLDYXgzGYPiE419fo3F1bjeWnwmdh",
  "key2": "4koraFiu1VJcP1895ZZxwtu69WBWaTsDqQJCkxgC9XDhsSiCTn43zZunLKS1qqpqHEXm6BaC3PkyfpiZoxHb4iU2",
  "key3": "Cn7Gs7tzcK6eSqD8P39LhMtvCQT9CRsibxfhNEa38EqSHUag5sey7MJnCyUyaNZufAoBHTAUYpBZ7Gh3t4dmdPY",
  "key4": "3iP3pkEx8oEpvodXVmMCPHeQ2poP7UJYhBsVx55AQ6CjS3NVkknP1TtYSBu59DbiVcoaZ3sxF74rXcvVCsxkxJha",
  "key5": "3EsfipgVAVycX12HFeVdDqoDaZmikn3H5zmY7xkvJUGZhxScTTdGXpaWx3y3cW3yf6wSfzNj681BgNaWNnyKsSXw",
  "key6": "4FAcqYHhAt3bvMGu6cFnP2Z3a7kBxKMKTAypVFVSKEE6zgU7R7pPJS3QuWRyfiksNRfTeoM5VPomUTLNUQGvHjZB",
  "key7": "3ayGZFeBxiXMbUJuoRPSiZkMNJbrTuAWD2597oprRVH5LwYFS3f5LgvEwxnwi5Nrh5qtTwuhirSup7SytAiL1pN9",
  "key8": "3pNFpBcsJ5VTLRTLCaZ11WXm1XTiM6ZyxeFzh3Jk4RtaBV9zWUnEiSHsm3rqsjCv7UKJsD4c3h8DkGNR17B7fp1v",
  "key9": "5MhJp67dePmfTY5BL3sB6k4bgPrtBoQQzwGY86TbMBR6MfyLNF9Z5X1JNQtrS7koFWgpiCqqHDTjFA6VVLfoefkh",
  "key10": "36DDp3jVcm4DHVfutt3Xt8v2NuogEjVwhXcEiV1d6vD63aGcWC3r9o5VpgHGiF5vn6d2BM6bS23DJr8FF9UMd1mY",
  "key11": "4pYdgS5xNt7E6Bnp77M1eg38d8VerxhTZsZ9Fe9Ki1JCkXCQ6DxST2qE88GXYecRLPN94hH9v7XcBWLLeg9wvR61",
  "key12": "3CZktRJkdnz2t2C3rvriHA7K7FniUNzzCYPGHjnuANEUY5AYFPqxUzJhzgj2LRLT1yvLFvNZvJwLNNkJNag4aXFV",
  "key13": "4YAMc3uAuP9JTEJVSyd2wopCR6ZnE4fAHpkhYUWXJnjUbcZbPMGAnZ3zFgqez9Tk6Wek7xm7fvfoA4WGtuGnZkpW",
  "key14": "35eWsG3cAXnxejQrg1hhdXM6jVhhfAy8Wy6SkeNvdrLjrHDmGZRHeBufKo2ehRmzrbQeqLaVRS6F93bqbi97HAQB",
  "key15": "5HFd2urN2Q3rabNyykgNBPcxjjnB8fhexj5a4hcoz1HWe5DieYu7MnJBE7kk9VyW4ii8D5AgriM8TTNnoBtuNvsb",
  "key16": "5VoZ5rVA3KYSY5n7i5Xg7z8GzeFhDVXkHt9R4KsEeLaLu7TrMavtz6qhFQo99W16woTjZ86jeVAp8Ky7i67z3z8K",
  "key17": "ozRfUzfsWVymLjwUBd5XLLRYv3ZxjSCZfK4uRiiXT1eWTGD7gM9kxRjvcWrxHtRaib3i7qmZeZpF1xWYV2BDLQ8",
  "key18": "5y6PqVEiaXHZmoacbL5KWb19aBmHkRsBAyAQSAHg1ujgfW2sRHqcCfxJNpG1UwkJQV6mV3cH3qyKoWJM6XqkBBa",
  "key19": "3qHSc2TQzoWHNGUVMHD5HjAxRPmVL8Dp62tdu7RhLFfXaKLR35AKy7uErvc2g7qvYQEFa9PoV7Q3vYtqS1x2doot",
  "key20": "5jds6tUuGbXdgcNFsmG3HX343dwNXgsoGZg5Bnu2wsLQ4nyHpUusQbpWcfoWWsX4Ea1XVBNXZcvftiiphE2YG9iv",
  "key21": "EyeDFkBzBknY93ZUN7XfJzL2LyxFjU5Z3E7RvQqK1cFvnUgrmCpXPR1R5daE3Wm2idEEpKB6ZgGY8rVWvzHhA4F",
  "key22": "4oWJ7Qd2HaiMPEV3RQh5bBXd9BqkH6rSLCZGK6PmJNpz1iiKR9Fc9zRsdUBZBcTauQ6RqvBktVapxPxZePDyhK3Q",
  "key23": "2ytvLuvA8NYF9mtjGSjSTToYr29ABN9gCVgSQTrxAQdJgNQiESHnbRArMZhFbWJDsM4oy4YopsyCKcowULRvm5tW",
  "key24": "T19RtYGsAiTz9AhMEZMDUaF8f2iZno8wDZxXtU1QGpfVXJConmPz1216Pm51pKDhPiuAneNiNY558wWu1WpJY9h",
  "key25": "tNjxQ6JPDKj1F57vsXdUktpi7YEBMTJvp4xsHLEzD6QVKfRhySuWZSs5vg6DLcsRerLR1Sx7zNfh9WiQrZDip2Q",
  "key26": "iyc9it8NJrF9XhfTiZKH8ntFMeUDrntxgCZBzCLkZKBtUTFvWK5w3Gs8sxsEiLXc9AZtTEr6C4bBvdntVTiFvEo",
  "key27": "34grcRCSi4h9NTkL4RQquTJyLubgq6xP9aSqXat6vAKZVTtcfNBswfwaXA2WVNXosXtfAvx7QNjF5vy47Z24dPLf",
  "key28": "4mjZNNpdTrY23nBobFQk8EDySoH1yr5cPakKrAYd4G8F4gWmXpD8pPqY7embeXKvmEL4yQeLjoR1bZ6Qp1sY4418",
  "key29": "2zdEjrwG3tbce55eyAbsKNmezPehNocBmxxvo3KcNWe3qFyd1JTtLm7mb7E5cy411oTACkhKbP8ieZhMX7ayGwYi",
  "key30": "2oWoc5Uax9CqkhcNP1itZ83z3VS36EMS9ms1Pet4h4LUHc2kZVXzaYaKDkhs6q4PbVG6w8Fp9PxbVznwfvUKDjT6",
  "key31": "5eaA7eCpL74U3PKBtbziGT5WurMhg8rieBZMPeqndrBCUoZ3MgFjaARCwGWeVKEsmPLfacSnrk9y5cPxYYBf9G7L",
  "key32": "4m8KRbXo9FNv2u9pmpM4QsRvBwW64BqSdnZQHbvyQB3FozJJToLcBJMEa9QReseatCDJD5uqE3n472E7Fuf7KXCp",
  "key33": "5xU9BXDdeCU9iSEkiWimE75jH1TCJccfH5TtHRGnvLtXzXooRoDcnzETLrySf3NBkft4iPYwGb25BuMbGT2Hiurb",
  "key34": "LhAc5o8e6PGdgePfA9jFFyKGwEP1SF7WeENYxvLwZpmmtZ7dNiiwV3xe6QFrVAL7RAQ9GuXwWUgyP2cXCdtQXAr",
  "key35": "5WNF8Bbz4DoKs8bVT6Tv6a8kWGvzuG2fXEpTqjeZSS7fcokkJg3Kvp1eR1AZsuZ7ZpZxM9Qj6VtMCKGqTFNTUcyg",
  "key36": "2uVzG21N5X7Pqrauax8iknTFcJEwPW3LrwqqHoPdhQ5XX5LaeZtR26J9GU3Sfc6JhoWgvQfvK4jPg6dYaJvCw7dQ",
  "key37": "2kNnr7tbsm9TPDHr3w7DrQz68FUpS4Ro9tzTFykP3wpgyhkvyvyeQxfRu58yAV4EcviwsqM995URq3qt7Rct3ZPo",
  "key38": "eWRL8oVbx9rLeT9oKr9F4ZQMHcKrPC4HoP372LGXZcPgMZa18FAEq7ehyLCUCfTrqmZfy7ZM3dkYcTgpS4UtPMx",
  "key39": "4erB9yrDLku6zHYwWQ15pPW1qRPgVFTftfL719j6EiPuLd344xAx4HXGTmf7BQWvZN3VHcxKpf5dJXRiqb1m8YpJ",
  "key40": "43vyr9UiYdY1R9W3YyqKQcBTzSkMyFbZJib4PH8qqLmXzWMNbt4gGTzC8qZKSh1ytEndXqxtAM56YHsoHVaM6fd1",
  "key41": "XmYyagTRXvRsnfcHvtGqA9KqHsyYUEkcQfypZJnm5gz3kxcSH8K5hTbqQREj1kbqRKt8bZgQHbEYA2h8f5q3BoQ",
  "key42": "5fvEyWpMNwZszfQZYZe5Hq9Ehzmda7gtgBWkUnkfZd7gRbfKQHuw8q7poUvi87fK7soYyaKXviQXVjgYqkWchkNB",
  "key43": "2KZmym8pwhhZMi8xTXbwGLM7ifBoRGRpXa4kFs7HEtXd323tZsZ9562fDRJJgvmYZKUbUdJEC3mUHzn7zhGqagtd"
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
