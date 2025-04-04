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
    "2QSX6q7mk2uHreJuQqf1XxQCCHighnNppPAKYpKj7SJ2JrKaoYgUE4m1g87CMTDBo6EjQ6rW2KgnNd4Nu4VwH4Q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FPnkmZKVXwzhAWj4JArbAeBy1jajwiqoiHbjd5EnQFB21snGUH1vqYJY7PmRJ7WukeQGzY12D3UmHNdheGPx62B",
  "key1": "39MxnF9EaP7HePdmtYrQhpAPhg8iXA8UyaDC8ZgRvSdFaG1rr2V2CnSzf8JpYG9X13hoCZjJJc8xv1VHvhpy6bsX",
  "key2": "d5ijQgUCYbUyXcGoFqrY8JeJHkG18JoeF2LxUJD9CDb9W9vDYeyJKEobeEnZ2PWuwhaqHvdfqVzbXVKATLrepJS",
  "key3": "31veGodqWcqgL5WoGF2EU7CzvAeeNCrKsDDgi3Q9ehTga7WMHgJDKAbwkfdtpEGLhtkB9tP63G8wASH6PXVfdajd",
  "key4": "4mjjsaub9RWbtosV2YkYq3Ykgj51uJ7YtYRBxRyA48QukA7SoxLuvbYPGctea99Sg5HL6sgwacZNzYUXs9UNnpNw",
  "key5": "5m9aYAcHWFMsQzG9YB5enAt7riYWbEMU7A8iuEUCvDyAiX8uTpBxYE6EooJPb4udMr1kXHtBR3guaW4agdNL4rwF",
  "key6": "3dDdw7tDq7HTp1f7mTi4uqqnPGhaNPzjFLbqsW6fEqSPAiceFrCpCsTJQdyVciM9zPVneSESMnrgnSEq2wyYiFy2",
  "key7": "5DreWRVqdqJCLEpJqatWSfaPEoqG3XHGQXwyKHr8PwkgUKD1AZYuToEuFAZsyoTSvWM94WSdS1Tat2PeYuduYYj4",
  "key8": "JWogaJZh5kc9qteRhNkGsZhSmepY4wTV493nzV62W4AURr8PaXzoHddG6mLqq8G1AShJPVWErYKu65WBcQ2C4xR",
  "key9": "2LV7sdoWLmepFXNyeKSkCTzeyJBiUzaDqytCxE17HZQSe7urCgYRiaahRe7KQXJpac4TBE6WdYifEoGZh52NVtxE",
  "key10": "2iHaFZg8BSe8KtTNS8UeRpDdaj4KyauDfFAGt7hkZyCRT1DRXAvGBGiZUXF5QzmJA15pLm3knwbwyBUcxoYc1pgU",
  "key11": "5TrQ8kKxB4MBxAmn63XfypJDB4HNeKV1nxJXHYKhvc7ngFFfb7ygtgW5veJfv4bF9XQoxdL8tQiZZAPGH5YE546x",
  "key12": "nDovigwDLjCXQpwBnFPt6XTASYsTyD8Zu5qhDoDdpJXjSi8n7R2XJwFYrkA2Efd7Tj9fBSJv2vf1uP5BKrRLNMt",
  "key13": "5XoqeQbP8XeaudxBrFQwPTvqmXRTy5sVPgbesPcxAgEJjcMbNxg771XGyCsCEQ9Do4Ubpp1djBYaKhSWYsQZLNSA",
  "key14": "29HKmkckHkQLipDDCQujXWCpHmhyY7n3ygrUUBGGY7nYA462vGWBcczwsPm67FHeEyVBAt6giPJeXaHjaCPTtVWZ",
  "key15": "1bmjGfeRbm35TUnQvPYRBFuJzEoAytv9Z4Eg9roRMBewWDGG13GX3uiv14iUZBFZjrC5ybhrP7TNZMsu8sYbdrp",
  "key16": "5AZho2oCBUeTmJCLK3RT1FpuPjz7E5Y6N82tWjQX6hEXB3WoX4LqpqVm6sMVg7PScs5JZAo9rAnsckaRXuUcGFa9",
  "key17": "2zYHRc4Lnn2KcZbwu9aeh5LErPbvucDHUAZAnHConmwDyVuXyDg12JXEFpHzECpKVSjuY5owGvEwkv5uXrM8jYB",
  "key18": "2aaGcLQoUBaJiLvnWK934YVPqDmQ1imBR7iNn8GBWxo2QwBBC6QtsnvApn5Lg1Vm8w9UKBMhWSL4BYQ5U4TFwQkU",
  "key19": "2jZLpRaovZ78P3Tp1JM4vyhCM9yk8T97JYvdVbS6AvjL5xKZwT6MAVjwLhAt9MRJpFEeedDkJ5JaR2Mb8UMdij2d",
  "key20": "2PTips4SRL1EjX64HQY2EPRPAARSbM7E4z2XZWavW3dgctAHBaYMTXsDZrxJ2BT5Xwuuv9aU3fxvKgGJxJZetpU6",
  "key21": "5U76EDEH3SkPDMSgqiph3bdWPTxaSnBk17TJ6E5bxx8JPy5VxuUrH2Fjz7RqzLGW9sQNSzs6Ft63PrwnJtbpqPYd",
  "key22": "3FpbzjrSQBe69MKUhc8MYFLiUJ4iniD9yekvVApQYuxUfsK9V6mD2zJXo6KwcqFdrB5BJYjsgVS8T65QEbDRHCH2",
  "key23": "28SnVUpiKhJrS2ijP6DLWtQah85Uy5XoBGqqk4k4TCimpgNYxsrnf9ZYvk2BywX8pSzx2FKg6ysQaUqt8cfLZAbA",
  "key24": "2ajgTn57KFd1JWQPMA7uCueE4up9Nuvc2YDnwRzqpoTkxFLMT1TvYqpG9HZweCTcXnDi4mQ87HzYzka7aBFbYSv6",
  "key25": "4Z9SZz9xu3D2g2ecNhbK5tFj65t1T8PaJ3K1ZLMo1FNGzjSn1eZTHHPpLDx47Vs6YQggmF9HgC9t3p1Kac9umF7G",
  "key26": "gUWLuCtE98npgXxQvmrWBeqAw2huapKrkJoR7qQdtPdFULzTGgoh3PsUjqyePcFS2EjPqpQ8R3U6CJBunH278j9",
  "key27": "4gQkFtACvNU7jisVYwfekTaXwNZtW1h3g6docBCTpjzvpSBvP28Ubvh6fm48QNg1MahWHf1L2FW8Feq58kEpMTJH",
  "key28": "5QN4EKvfAhB3CPL6pfcwDWWd1V7oyk9fqZtnfNZjawrUNavJRvm41NG7hS9hCf3ZWiiqyhVrTTjQKYAnXRJjj3Ni",
  "key29": "3LW2ZoGYvXwLKyD6YSt517fFLxd4bmQshh5hQ4aMFrsynMGubaLdkrvnXeLUkRCqxGhvNm9duNoxffS6688Zt9kf",
  "key30": "5ACPpR7yCii3kGytXCpehv24kfRHnjP6p4hx4eZH23uczNYHiffc5iX8BmttYkU8vtYNhCZfFi2gV1vWHR777Fk8",
  "key31": "394x96davqRPBFKwTstC5owT4YQf2SmHtZ8G6eeBwYVXm8j2seMdFW2SZLEJmnqMERGsvRh3kzWNw6fgLe9pZGMA",
  "key32": "2YtSTgoMEqzZ6j82vwQ3F3rFs5dnPzcrFptrYFKAEzNfEAk52b92Bq1VdTkxnqCSDXkTPF6tLKC9Sc28AuFHGHUc",
  "key33": "3b8yh9rmoCkTuBoujBgbijZBs29z3RJgn7SNxJnNt21VYNW2SUaZj57dUTvBhDqnZr12pMZPLXUsWBXB9BXRkDqx",
  "key34": "4R4CaTb4paRqwyXvjnMzgFozMGffamAwoDrvpsfEnQJbZUwjwfx7EuLDa2FUUQPQJA4f1pENzRq4xAyJJ2CRNwvn",
  "key35": "oi3SUgUJWVDsQerdgG8TrEupDWMofV9WxSwyYAAqnuJYToq1UAZezAgrAsooAvE3AB5DQ39YxfL43gnw47q7AWg",
  "key36": "4sWeCHJ5tszpMySxWrR74JPRdGCUfbK8VUgq7cjc4pzG8QLio5U4Q9j9KFvPf5LHfJt4msACzYpq1V14ZZxXpWYT",
  "key37": "42vseW65Uyp7DRFccFKTKiUYBkBG46Y8M2xDDPj3giJXzusG3QSFgB2jLeNAU25xfvRGkM3icNwTyq8tjoHTiv6h",
  "key38": "4sGMovU92jpgA1ssUKWoMykFsfLAtxWJjH1caaw5kzCL2mrV3CtZCtoP5mbMzpurfDf1Jq34D7TZawXt9mAbTLkw",
  "key39": "2vKpM3PyHtcHVGetR8NJTZmr7efow8GBNRLtnvr3jvUDxVFWhd2h1CbCizRwokzJ6SzQcVtWQXAbwC5FBgStgJaf",
  "key40": "4ki2WJSDRdyRX5kw93NbkBuew2ov7W3oFUt6b4y5PgobnqGkN3KsfXE6gdkBojnetbP1CSiwECQjHbNR3m1bfKak",
  "key41": "3U4BvFwaRiNRYAdbieCmPwFNc6Rq7yuStA3qB4DzcS5iEmLNgyF6gia1Wdwwjqh8CQQvgKe2nPAsgZPPrgRDRQbY",
  "key42": "4nzJhWv2oq98vmC8ZkuYUjCcH7BVaYHqY1x72Ahk4ujVtaAJjR8YHjSoAaScXofupMW5p17RHNKwosLD67qVSaND"
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
