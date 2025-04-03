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
    "2gEQ3mrhDUyZEDxKNXTnoKseKXwBq1r5eoje3UyG6fgahJm1upTRC5awQQNePyThxTNJq7z681DJ7hGL9oW4ErSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPVjMtZ9ai9xYfPBeRTkg47qQNJ8CGK6ZLsWSBQyMEyeB8MBnssbneC5HVzwBtXoCWMPwNvgwAxd8nrskYU81N8",
  "key1": "5cFz8cU9qwDC4v9y2Ey61sW4Jv3pvq9a4eC2F6oqTPBVDgGpbnaez2kbqQWMV4sTMwFfXn8V6HkNovJcdUqtXor9",
  "key2": "hKWqc7k7BowezWkroCzufn9sZYn3Q2smmiSQb1usiKeQ6HVuz6LFri9gCKJ2UkKhygnMoeSfs5YubqoXZMPPeRq",
  "key3": "3VR4A5do8mL49E9346eAjYwGPkXw8daDQ1mEE5bLYr4PJmwUjTwkwkcsGzPKtpqv33K9p7rgfagT3tfs22QJLXah",
  "key4": "3AhC16WVvbbchVRcuGp5HsS7sTDXrgF1KfpeodRieGQA9Mu35hbSUpAPQd2iSCnB1KKgAX9A8Anw46H4pfcPVH6g",
  "key5": "z559H2Kz8rtf6e8cUZJVebZdJbFXfLsfFmVEKfkFPAqBkz4NK6vt7bjw1tdeiGog442hzptSbVEMpMLV4yGrX5M",
  "key6": "4rSWTZE6KSFpf1utLQNVqif66eZxBSUfeNFT52n2NFADRyKGs4Q6mDhuqAoqRcT7kwN4AJhnPkSZogJzuksCuNv8",
  "key7": "2DvTURoMryw1UCLmJvmp4HDbj9D5jL6njpmrKz2cq25uJEwMkcZQbXfKUJnsbm7meRsqd6Af71WCnH3vZnNw5PsM",
  "key8": "2K4YpNbSNZKDLJVf5zWm2jLve2ZwDR6KEaHFQKxjmhC6zd1FwUCFKMiRd7rY6gsJ6sQy4Wfgud1bxUcfziKuv9JH",
  "key9": "gDc5XCy9Vx5YvPo2KbR7bHFnKZPJGAodVWNwRSokFqMrVgoEkgqD3iZGq9oWErb7c7rspi7foKsmyTUy7d7fwk4",
  "key10": "4bP8tCVQ9ugLfiFA3csXvUK7AFWnQQYGABn9rLsRHLSDAVgMTbNXoFDumkDqeEZjaiBRBjNtpiTsKMUbYBjBWTfG",
  "key11": "28fGa8wZt3JxqjngRY6KKjjVqWRoh1RHoToK1c1PzNG7V4417qAJr8VYyz4iznidJJppkLU5TSYwuiRaXFHdtV8W",
  "key12": "HRAFiuK3gQozWbBAhv9BpGKkNaQUpJq9n255G3mFCa7Rk64snXrq8eXhhqeLhnCu8qj75srLvkydcYgjCYqWHFE",
  "key13": "28ZyR5sfCTykAPVuPRP1VXmKxexrtNxFiT6i9XE5YpN17uz9FNqpppugEsf2WEuEEMUSPJkDTawStF5La5HJtzLZ",
  "key14": "5a8MYSuRUpjSFTYnzKxxiFmQwB2UbQn7Lp38MtGWV16LUiSBDv8SbwGvxDfrR63Mw3DU7puThJEAj8Z5PNaeK9mc",
  "key15": "5hf7xMYyh3WxVMtuSdj8cKRfPmGDh4HosiR26QJ2dwvupwq3HU8nixQWCPyw95mWPz6y4svxd7pLjnto7X7qV1zX",
  "key16": "2zhBCo2683TyxhM4d9pvhFYv3ENFCRTtmhZ7tWEP1591vwsZnwBXoeaaM3nN9SXcxPjvZTtJR7H3u9krMYR9s2Dm",
  "key17": "5Ax5hxL4iEAfvDdqznYwzwfeUi1od5sxKEtJtaeGH1fqQD8Yktsna8D8VAMytvm76jF1oHQGUYZNcCMtSawjWMLc",
  "key18": "nTYKwkVLx5bfRYfghKMoNqdLK5G3nsX4GWjjDvL1oyPL6mw65RyKFH7quRMmdaMsoeypwad3VZAzD1ei2wU7xnn",
  "key19": "5aagfzr6EmjemWhW8Fj6xgvxV1B1r9qJKXEE281fMqfy4PYNgvFNTCUWSV1a6t1DvwvhKV6JznymSkGhT3mZjKiU",
  "key20": "4kYRUJZWgTyPU4PGhjujtEpLxXb3uYKEUQTLP7z6nUffdoh8dbHvNdcXhPHPqQSvLf3vxJmC1xu2ad4uTkLJVNq6",
  "key21": "5zrHJKkb4Q3Asf1fFedxdAMNcwSzFjikWtziBMnjtk7yUMiMw6ofbwbqgThLHoWJymkpqL9WHU2GMEyL8n2N3Y78",
  "key22": "5X5Qsvh4aDMJu8C6FMnhzHFD3hHmNwSwDN2pUHXRAAg78FXpYag23tzzfcbEYbMmW9eo6qjBXGcQdsoNbpdkz1p5",
  "key23": "2dWmabZpzj55CfY5S74DKE3yzZhtTJhYiaMvDepjEDbxndvTQtw4ko1Qjn3gV5S9bnWgRpenP46BwQkr1k8DhKQX",
  "key24": "3tR8FDXeqSEqDSj1BYhC4ojvRYZQwcKFZ9XRN8zoYeDDqb8catxXpEhBA7KY1sEQuWVxbdydUXrwLLcYgTrQpThJ",
  "key25": "5JYzCQB1Jb9UWf23gyGwT9RMjiHwn1DZabe4FXS7JNb5wHVxkqvkVQMGnMmcA51JezNAXh52tWSYrPCHd6S6h97f",
  "key26": "2Ap9fSq4wcgUdJrFzBM7UpRJYe5vUotquSrGnB9VNGBEku8b6LNnT3tJsj2GiaFdqbPtxsrm8HB44f2NfFs3QWUj",
  "key27": "5Ec8sJrfmf39ATrLhY22z1iyQAoh8sZg66hVfG5Ut8h1kC1rNc7nvdr67aC8YUPe7bQCAQKQi6k6KfUn99m6gJ4P",
  "key28": "3paUWjKxSwNnhnBtFyhHUpppjBdKn3CQiEzgYr4td6dYL1K5V4R1UfcaxJjq9JzRpY7AjE7cMWwBxS5yTR1cfKfk",
  "key29": "4MLgp1RbR8FK1FtQ72gGL9SANQv1CPMck4SvcuYYScpoTcKDxSYYHQi3RDNH3StkWJKKEB4xuXwHWRtB9kQSdMsJ",
  "key30": "34cBQRbFtGLz38jZqXY3z5z2E6Jzwk8i7SfnhhjKXKYncS5zBk7SqSzL4SX2LvMuxHTjSUxHYqxb1eBFZnM35UZL",
  "key31": "23eevBvku49pfrNXHbCZCapm66j5X2LnkZfgpSCSurYLP9vF8gXABNodxnpMoh9TvmLGf1qmCUuxxqrzoW2ZsVvM",
  "key32": "2XKAUMZ8nAwmSy2X2M1kUZVwQ1Uy78hxRVwcyKbJSs7AQF43WP6qCidGGcNVU1P3Bupv34NTVHcFMzy2WnijExEs",
  "key33": "2zkoSEFy25ver9k3ncqqmRjTvYuGMpB1iLfqd6skgT3YWWdnsawdng1MPunGTeBBnxgt39DujsowmiwaFj8X3yqu",
  "key34": "3EKWR33m73P8gpLdzNUvgnCqsEZFLjEzkMzY6EALx5SpXtFNTWag1GviS6Hhbo4H2Xe5JkaDAFsvjEtcK6WboveL",
  "key35": "5AAyGtwNZ5N4dAD3iij3eZCbssKkeT9Gxb1r9HA67yhvstt48tCUN7jpQvHeyALuA722yUzkssrALe5Bjeby99BN",
  "key36": "3KddqStuKrFwa7Nwx8yaR61PnW49oC9EVt3Ziw43TeQ2dHB4YhF1dp9ghYygXqedWL1sHpZZ6qdJtqm8jiupPUjN",
  "key37": "4uZLNfUkCmjQ5YvzsuTbFJHChsyRRqv1DVb3Ce4vW6RsJ4aP45oxGLEnRDYM3xobWY3WXwU6k8KbJzeMZnANASBV",
  "key38": "2PbaWQ5YSKYCxd8FLXDPKjZsahWH5NveY818pwhRv98d1R3PDX9CKTHKaHbZomzsuK4RjSe54WJ1FXvKkmp5Sqhx",
  "key39": "4uNqgpFwMCX847ZHRxQquL8cgJ6M9p9tyBQnyvAYdc7UnzhFP4eyQkBw11kcMfGpnce3MWrJH1ub7mn6agi4pXmQ",
  "key40": "2TmKi3WgiQxx52tdycnCmZGjuBF7VKgkKvfNY8GC4dGuhgYPFPqGxNW2UXf7a3PLyAPXYxrU4Fb58ynXqZrKayhk",
  "key41": "3N8zFbwiDvte9t1KcKraQrXVmpwzYxzgBw3itkB2U1r1V69LSKcn7sprxBzomqCG5zLeKND1CCCKHoA4Xhrkf16S"
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
