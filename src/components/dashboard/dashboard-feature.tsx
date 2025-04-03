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
    "21nKTaisgQZFu4umuydM8ATh1eThZ6GhbkQv5D8J59WguQofbH81qFc7rxFWbgCj7WJAP8tvPXaG8igLKG1SEaWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EUeA9trtXz43AQPKRa39tvExgY8WRokULoY2DxFMCkxzhd1xbrfsMxnD4UNdDvpNMnfnJvXhHD1z11zDyyHpr1F",
  "key1": "54N7sMSuyP4bhk3A5cg28sHfwCnmrG6BSvt739EoFE3M4gNtbNze9nhNS9KK7mqEWiVcFT68aGBScMMEXeWa3jPC",
  "key2": "5SvafSrodrZCFu4ZqtmAaPQHmNiCb2Qojubim1rzx3BpmAfPfmSD7MVLNkqw2vthwFg54utV4CVjg9wVQBmBd2wx",
  "key3": "5jW3hu6b14DFBmgtPf3YHU2bXpMxxWNeRQPhdYSr4Y5RycVgqNN4tqbvajscPAUxAB7D7ZPUp6E15nkJCbkswMpr",
  "key4": "2vWdVyPbdehg3axayW8LjjcUdGUzyQEvrQi2vHh8zzCyZYTDP88r6B6zL3EgLVj6N6NWeJSfacACcMzJkLZyMF5W",
  "key5": "22J2YZ6CKjcjZkiN6MiU7BV9qjHDBcVwmcoiTaAvL8x3qUYR3vy31cTQiVh3vxu1eHRDiZGvSyuFoEE8Ty8DiDN9",
  "key6": "2y1LdkucfGJ3mmaMpeiX9iSYGVLRTLEM1DFpBn9PR5Kk52ghkFHvs1d9BwiwBwWfj7XSyPhXHSVmK35zU9rEXjFh",
  "key7": "4MpRUmhmLuQ2aqmgNJfjH9KfMMes7TXSvCXFEbXwn8wuLKjbABbsWJfyKb1t57qWQF9huGPgT7LTR54mny6tjay3",
  "key8": "2Bg5auG77gsWTKxP1tQwJk49Qyj8bjhpcXhAngwrfcrAChGmJS9CHhhBEZtKTndNdYW92yKuJptDMkPv2rZQuYb1",
  "key9": "2m49XqSjnJew3z9qFATKD3PdbwgYA7feED8jysUmTMdQSvnCzAnPvRJS8ySh7GwSE5WCAJzzsg7knkQDHekkeiZ3",
  "key10": "2V1Wrmgb6tUmgUot9Fy1cjhW3bRJX44DYbe3npXrm66mJQL1MDmvcvHX47NXsxmmSKREkPA4uVQHyQaufT7wSrat",
  "key11": "5gY9AWD6EqexrUH1QutgVqfMGTnqvCg2RExiozjExoXNpYrGmfKYEwy79iCSWQy74mvLcz4EMP5bsz3Ma5wH9Z6a",
  "key12": "3PiCGqDWCnsCnDm7eoQ4ibDvphf95y1dEfueTb2sp63Ns6ubjazgAkok7gQ8DkN9r1bTJvoQxKHqksDuPMS1cAhV",
  "key13": "4k7YF3mTm4GeWmAmGkXX9PqFxVeJ5rpXLGwY8n38GnqH15CoeySGieahakKw8VyEUyzw8257ertXRdUiScMfTssw",
  "key14": "3L6qmLYyGSe7LvM4T4HzAHZiwuHb3q3CXeBgWiG7rxG7mHUqJcdwiR2hGaHHNNjkpPgoRaYTCBVdk4BRtbxMNryh",
  "key15": "4F3dskk9UwUv6h49MSFeYEqxmLmG3PptomYKzTzHnm8wrXjSZesjoCULNUT6FgM925Ar9KKniMdTZKZZUc19vLxj",
  "key16": "63S6eSc3t6No99rMzHzsD8zoGNJLCsKfaSRyoycJe5Z3XT8L3fVWjwemcaAuanfCitydTVsbfpCdTS4MkHnP15wW",
  "key17": "LmtHRoYuUsmpPkZUszSAHiYBcxcfkQNxLyYtZSxGaiq7wTfvqw79yTDdEoDagVWfrsfmkTvdF5PFhv2Zuu5sG17",
  "key18": "QdhFKgbqJsEBn1Xt86XsvVEkoVU73zANYddAJoofjD6HyDmwQ7GJvNyx7AsKfHKNdfHz3NnXsxW8ZmRNBDSjcL5",
  "key19": "21gPhvrBginQ2jiBrH4Mo9bxezckmyby1wYSZcXV7iLgUgMrreZPxWREaXKdDyiaZfSrWohbjbQ5RwoRxvQ6514A",
  "key20": "3uV5pBTzUP2LtEbQtMBpRCqN4iXdZmoy6E2ZgPMFb3EgL2nLrCXAxq8bLtfj9oDLdqvfJWX6YZ275JaGGiVLFqGL",
  "key21": "GgJdtS4x1TsY2yvWy5px9qX3hNgipp56Yp7CZt3ckZEievqXXuL46hprVbrXisnnPbD6fNGGpgthXLnRWPs2WPC",
  "key22": "5y431nq8mXDNA3cvF6d1gNWRp727ipdVzZab93yxNAgsNTBXREC7YuYLtokCzGMHDF3gg5MntXcYnLFUxhrLPHjE",
  "key23": "5cqUWpx5uhaxmPLET6F83FVQxY4at8PiFQxb95driU9Y4BMBKeGM3Ks2ZiHVjY36rsFvxMDCQY11eyyVje14ZEKL",
  "key24": "4q22QcXos1BAR2XjS3ogitmjNp3xK5CjCaF1EWA3P7TKiQ8DgJ5DpShPMJrmebKYWp369cEhtgW5RHDPCtxtBa5p",
  "key25": "48ufk61bghgwbEZ3WrboDvghgAjMf9YYyZctDpDqS3Epx9jdMgZspztCXbJEEPLkYSYRUn4MKT8zvMznwZrFwa4u",
  "key26": "2QDYWD7r7ayPL5sZTDgSpncg6yyuM4su8eojGKYCGLHDK6LbvVq9LPbjuD8SUG8xEjSm9HmQ543tiZqCdeoX8qTK",
  "key27": "5RPjGJiGPXQjKqHQ9PzxDbfpg1yu6CNx65GDVZV4Dp2m1NJZTCVouotZaVJmW3n1Uyuv11ermW6prdMeZqvb7BjB",
  "key28": "5LUWF83nVxvrUuHR3XcAzNk3x3i6sRWiuqTiccpcXSokF9857yjWTDS2V7CQzniGmWRxE51C3cw5NXjUsFKXZ2mi",
  "key29": "2b2vQWJJG1JyqtBC7hujvk2SLziMsb6wPqU9u27he84uPn7euKjEoBYd8tAPNXWHxsr5USwbGUick8rbvhMqUW46",
  "key30": "2kXCAh9zzmAKF57GVgAWwtFmNzvpWYDFrccJum93y8KXNzobogAJAY71n3Ga13R2Ve3w79G5bJvhpGYMrpctyxqd",
  "key31": "24M3yEzEzZhm9yt7SsJed6tHYapDyjEFGCje668bVtGZrciEHMdKCeEnTBkLP1PMQFQg24Y9MHwzWjrdqxeC9rc8",
  "key32": "2Xt5D53i3s9ZSBkRdEDsnrhn8K4qK4xXdD1aN2niWnKjmoKsrsdkMQFrS4JqjZHByJMKhyZtW6ewKe3U567nh1ii",
  "key33": "PoFUvwtZXRnJ7nh7yPepDRrKBfK7HeYYcQjkruBJ9Nf5VK5RmteQzKzeGXgbxXhG9MN25NAa5ExBHeSoEG8SzNS",
  "key34": "63rCTkxYgyGLyGGM1pJm2sTjJ4waC9nWrvjTNZrPuspn8sLwV25pSpEkmnC7yWYkJFqY4nGg8gsPnbhJxYCdb2kS",
  "key35": "27paHTvhCUqcXEDuGygzgdVWNdwJicUPhB5w2Sv5Mk25FkBm92wt6gyVEPrbLRrA8ftmvgm6PGgR2DK5LHrPZpDK",
  "key36": "2yvj7rmDCUBknyAjxseAsj3pkLia1CjGPSLHiieMCWiyEU1q1Y9YZYKrrj7QWcvWcZwzUs8bXLYCkmCn93WEMynw",
  "key37": "31jKmWzAJegVim8dpCY1ToTY86PoKdC4Cmscs5WPdvPnbAj4ybfgfV7UKXrg6WGjXGcBpnh1gVXt24nE98ATEXfk",
  "key38": "4gprZqv5Ui4AbamJHf7589xpzX1D4My628k8n5UD3qSKcDFcFH2vL7pqikVoft7Za7ij1QHQ6eXdSK7fZXbgJawj",
  "key39": "3YUstcUTuqy5Qmb7qJhittxULa975LAkkB8bLZLP6yqT71LxbcmtDu3KXgmD3B5FSrQSiVzydGLq8wVMpnjwveta",
  "key40": "48HjbE76RrtavhLNkBa5mNkvqWjy5fePAr9YYF4Zk1S7bm8Ag4SdTfytGKw4jZyppu9DXZ2GDA6oemV23WV6Mvm8",
  "key41": "2wQfEA5YQGtEukM7UQqb17PKQqzoRJmcoU9DjGoZ7NyfGkBtGntMefso7WyM8QMpYoMA9b6pNEAXorZhvLvtnEqY",
  "key42": "5TDE81zKWnqMt3NijG8r4nvZ6w2Rbua1AkZDrSqGNWayKi4JkxR6ov1ADXpQB9XBtz6Z6Gpam4hmA3qbjWQq7PrN",
  "key43": "2qegsyurEYHxkt8yMViavoZsJjqYP3LMewhk8QWPs8gsdkjHhDwRYV9KoY2vKB1axzJ3X4hydQMXSp26N7ETfZSE",
  "key44": "4PEULy9fthQKo8ifecEvgkGZtqpJ3kuXmmJ76NHuZEdEan4pty1rzyTRvhPAhZAnev9h7Gmd1BZhzkpn6BSaarfx",
  "key45": "33t2D1Cb8oCbYuvC1MuBUEjb51BSRrsfcRDeAY77PoC4R8ekAmQGjhnAzhjHvgxpuP7FZiLpugsuz34FQ1TJ8Qzf",
  "key46": "2B6ENZZCCh1FLXsPfkvG6eRo58mJPLVAH75ifWxHzWrsczHpGiq31z5Ju25zTdYXjnofwUFS25oFd7n8JzfnWvmC",
  "key47": "5AQLxTMocLjYbbbdYgTy8UjzeSEYKR3WjvezNd2c2AqQDCq65cueEwcd7FEGYRyPPtEEDb2Mc9NYfnmxuVMDHk3J",
  "key48": "3NjgwHk73qdd1aw4ct5dFSAhcwEdL5jymCbuPdYyXVPMbHRk5F8oEaCjBjcMdR4yEbk5bZXqP13F5vP8GaSfSqCN"
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
