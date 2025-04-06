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
    "67RCdfkyZjnxKUATKdAFYEYSXk7SGaa8BzoFBoqKZr7EDqJqZuzo34Yn1F4akJLmsqALbiYJSrwP1u3FRYe5aGS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xw39VAZeUMKqKbvNVhQ1bwxBDur1bKxEKjmtvt5SwfU53NMUkNB7DUWwmkrHaPoSkJ1RMMoMhtgY1psQHY1ANKZ",
  "key1": "2EZ1wAQM3tQgyVkzKdGKz47buyJuKBTNs638rpSqmcTpVPPFB1DQcxFna1ZjUxiXwi2VModqHtHnt4nzUSkY9qiM",
  "key2": "45uWiqsLJoXrRsNxk7ibd8mqDVFsUeY7HhNX61cP6bbLUtLgNtFkJ313ZWm92XZ4aAzWgSiYbCTb9cVngHztTXKC",
  "key3": "2tMMNbp4GdVgwV7HqzJVt6dueUL9BhMNqgKxt7P2Q5zdCMUmKA11xSdWyQg4JcgcdRkBHwYs5DFkHUXFD2q6gVne",
  "key4": "LkVqi6mAyghepzz2QmXqCoWpLSDtjFEHkXSC2EcRP4r7ZTfArF1ur1gdFPY6UAtaEcxMksivX9vCaLBj1Bod5Ub",
  "key5": "4BKdYk4UCfxWykgyTR8dQ5sB9Ge3C56iQKwexEMZVAEqa7zvQvSRxWQBjvQzt5r3SmP1V5bzwBTcdckCjqC49wvx",
  "key6": "5GMPD63quha8MiwknW7h2px3pU4pSSe3ZHFVzeuPLfHpS6rXP1EPtgTcb9Kp11dfXgqqroVwyBTWeJFEKjKhi9p2",
  "key7": "4778XFU9fH9MHNg2keERjXhJ2VST3WxgKK7cKo3vZEUNuCvQ4ME2gUnumFtdyrnNzTRjadSCPD2znYbBz3L8uUPY",
  "key8": "4wmT8CHX7boCQptvEZJji2mB1zKPkRkmw7D6AgPPKgvAQGhfxPWeKty8k2BY1wLpo4nDaGjjAzE4E3MEsSz1Uvnw",
  "key9": "3dtKqXFq7cKrqaVCdDvhfxtsGE7vYXhzmQpHLQjZdnfF98qjca94tzQNgG39wb6Hqobz6hT5v8ifzBFPPTA4Bacd",
  "key10": "4PV7QTQcnJtswRkQ3PBywcCjmhQJoYK1CtEaescg8vCNgSv2Ts5kj4QkK8CVE3WZcdedxJhdCDA1ZZzse2kyLp7Z",
  "key11": "5X3WxY3Bg2iox6SFB145b3s4bUxK12noBAzDkZzhdifAkPBfDWitK4bdyQDrB4JAbjFuyu3PZUFU2avPKTHDgGjG",
  "key12": "3vQ8A88XPRjQWpioinbuffTksr95cgPn6SCrFJRVZCzxZjiirbAWP8fLBpEu2C5PkWod1ZotiMRWLrZFWrdKuJbe",
  "key13": "21jx7uQi9HNbxDJjjWPStHZ5nu2SYzo3EdTiduer6xxEsXs3GmKAEnfmP7F26fNbjXFqB94cub2Wv7xJkQn5Fmsu",
  "key14": "EnJMiZiQ5mkEdc1cR4c8W8fky37dbLXpT1tQZ8kEzY4zAsDKo9VRMg3JkJqnLpy8T1yGJz4zrfzPevwboyRAPL5",
  "key15": "446KqEEr3JL8zjK9jxLb6JG2KQWkEYTjXUAUVdyT5S7fxWtr4p3WLcynDtuGrnCCwE8vArVp1AceomRNpVLMZwc7",
  "key16": "5H9Jbw36RiYmexJnRpU9BtkG8SWnq22YuoCpku7PEQTVXWwZKm9b8MkxbSiko9wZnjDf11j6wHJSFsRiLm5q1QVM",
  "key17": "5vcL55ox75ALWqaQTdVXaQpPMF6qFrucPhSh3Vt2B91i5gGLMp4qeYF5d936FYW2tJesKkF4gam2whvC1zvRmB1C",
  "key18": "UpxPm9YssESty9i1Nc1V8xxx9hh1sjDmJaDXQsVbCLSyCa3AGC9AZuFKpWfCXAVMfXdduNFk88mbdaUNHAxkG6S",
  "key19": "4zMHmh8yzUWc4F7prL46Vfxka2ztGovxBkh8okTv7Z6BVJe2ZMGvSJiDG76WbGMydwv6EmTDw6712BMQ9k4itPCK",
  "key20": "4SXYzHDGSUz6cNrqc2rM3sRgrjqfuctofMJDV6hLuM91sZKVCaa5ghdAPLdSQwoz5pWjgDRpQgj8Xjk5f2wBYju7",
  "key21": "n39KRNSWMnZzAEwWr9kyht6Dv6fuMrZE5F3AwNfcvumUpFVVjVfbriPvFrT9uoahY5a3b4brxSBuQ2qxhGxuJ47",
  "key22": "2esNH9X1XgyLcJJk4fyNEortLZQNxuQUuUfSWqnCH4SBgzTAJ5CxDxpu9Nihv7Ky1Y4EmT9yoP43NRKFVAX45ibC",
  "key23": "4VB71B9McEnNSpCxfzcCu2ynpHHrcEEgj5sVB1V9BoFVJ6NZtGZmzDZa3A759MUQFcgSDng7h7HL9yArHkXZqw2i",
  "key24": "GGjfvrkvPpHbUi9gfDNDxUH6cYGPunzZrwm5GhMVKxhVbWpxnERUxBUgpkmtve3haabfru1w5VhpGjtgm3tryu2",
  "key25": "4G1Lhy2Kb4nstE6yiKPfRKTcsgdZHNdFBAQ9ZkikCPZo1RiUqLGqooyZxpYSrEBEkHbyWaZrySqePZMPywZh65du",
  "key26": "59MsxumYaoLZfqiTAs6p59TfdSfdTtQML3yfvMDk6Dxz3349D9yRGkudcL3JgT5NzAz8tDfMcmDBuSY2hH3bJGLL",
  "key27": "je6vuPe2BNh1DhpvsSFn3U2BfgtdZvpiYyXuCgdveijhbiqrgb8vRPXVFs2tc2aPj423VEG7Bg7P9WTouDc8i2Z",
  "key28": "5qWJ9PZ2TLwrCnMYwHmvfZiyixxNGMN7LzAvVUCb3r5Q3ayzq6iAyAJfjfHEeo2hXRnGyUCoT6Tu4mAaxsmdY2zb",
  "key29": "SWeZgHafqh3zHY4fyepscekLBxMaZrwDeoiECWDGJtWUL9mjGSZQnfUFdKfhq1oG1FjP8j2twpB3WDdM8HBYMrg",
  "key30": "4TA27NBdLYzakBreGN8EYLfd4pMjATFCGQhuJArfyN5bwMYZ5bSXEKRZDNhKwNjHPdm5xXGC73BU51qNQnLUC6p9",
  "key31": "4exPsHs2HpCo7taWz9LibZyA8iWBXgQsJjvduWesK24CwppwE7ETt2aSquTSUxFYeW3YiqX3WvpwGJi6REYh6a6p",
  "key32": "47zLm73isqt5gbtpJa6Pce5eRtmsvvJyuDj2yrDcgugB25T1BHwquERwBu73ztwX8tUr73R6JTnbqXxraqKG6NGf",
  "key33": "4vR9u8ckZTSf4wmE9xYdARAop31vVr2HSEC8LVEBQD41Mbe1GW9wB9V6bZe9DUYfAgdG687nakC2m8EjiU1iyoDH",
  "key34": "SMJmpTTiZQNcqKNks2LeJF1jkNidPw118ayeQYFuwLqmTE8LZn9SJef4y8iu8pAYepjjUB2jiCEViFf7xz3iHuA",
  "key35": "4DvPU4EXt9T3cd5zxeN4ohLQqJpKyrapoUfkdfQRVrXW99B2Gh24mEULuosUf1eKthQXtUQLigovdiN4xNhdWhQX",
  "key36": "5QEU8xjg4dmoGa7DD9ydTD5Up15CeuVEjKPgen9BuypcqPB1nNKzjEbD9CcRS5bfSiX9TK5PhbKL7hdzpvMCBAN8",
  "key37": "5N1Ue8eG9UsLyjZBxCeCtDsvEPprfXMJdfT5iusRt2FXYnrWRfabX6HBd6XuzaxaiqkX7fvyxzfwXdZj2mPf4oLR",
  "key38": "5ciD6s8iQNNCAGVB9Hw6i9WtuJY9aw2A7NXBxYW9SofRBTAFvfnd5bvWq6fSYz6SJuUXcYDttBHVxDq7zDn4Wo2G",
  "key39": "36CebDE7GqvrVj8bKw7PU9YvqByUiFeijkcjW1bMKXvAqj1ggsfoKwcBZvGmzXkZYBa1SEY3LHe8ms6ZZZMRfWzm",
  "key40": "5ZSkGZacJxpdoLL3ymS1owfY6194TgtM1R4N7uS44xg63Mm3ob1ZAZKBkFc5yhuWb4BVydrGAbVy7CPcssxLS7yU",
  "key41": "29mPKTgtKYh5x5rwLiJgRGaGMZE3HasChZ85HdYSfszfLeZLDHqMyFDSSkFEPAoEvdvwi9s2uRe6gwNLSmBHkM6Q",
  "key42": "rsXsCKMZbohXvAnYFRnZJVJXCjDhrnGPALcWF3YNF5aUyW2Reo4yJQZrpDRWhDdenRAQd99pFCQ2acsHTvXA1eN",
  "key43": "481KnxhB9LvAtiH8osXHvcsaPqxqgxmTAJ78ckWA5iQPuMSuaKQbksrra6gXgonMomVWPPD6GhiUUv94sTh8Xftq",
  "key44": "5snfieYYUp46Yzf8vyrz2Kg9a4kkBzq8hPwCfxUXSthDkDHNDYpVPinwLRLtzGU1ffPo7nmp3j3b9AxE3emMxeHu",
  "key45": "2V4fCvGi8eSkHPG81EHQoxy45q3aK5Ga53GoF6w5TgQinCsEJX6PEWKqAvozLe6Y8f1HS1eiMKF7BRZ6XTbhfipy",
  "key46": "5X9F7qGzEetfjLC4ztnLeFwW4qnWn1q1fu563vySyTDw7UN555xc2sD2mJsTGWJT8oBpZBnRdCpKZFsXai4wSzTm"
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
