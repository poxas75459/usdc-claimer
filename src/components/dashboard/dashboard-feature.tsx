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
    "43uPihwyLxSUhTDdmty8TZWmmaEW98PrPMq56Xa3PQKxBZuKx9CxzijTKSRcsMatzq8CmvAoqWKHXiwZSVea2YN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q8AdzCWTyzeoR98PZYHR9a4GjMf2YZCar7GNNZc9F1ArjnA9RRbFjKRCEhoFA62FjK8vkm2RcsYSvw5a1H2eMQR",
  "key1": "3hEosUQ7RjcXYg75J7X4a5BZaMb5PffAkkB4299vMdUCfEmccmvYyRZa3HDuP4fQTvougF3L84JBRoWW9Cz5jH4H",
  "key2": "2USEuNSYC8vnTL2GGghxo2gzny365arz3HA4KcaTHhs6QNfWcwDDkvobJkzyb14ZoDR3HkVCjDTdNS4deuBXFaDj",
  "key3": "4Hwk8cxLJ9ewHsA9N3ABwqg1HKmiE73qDCUJaCcUVKhzQiAZqx9kzCEUckDz27DAYU6VEDFMADaXneDDMGr3dptn",
  "key4": "4Rn95aX2YW7e5Z7qGego6ujAwPb7nLreZai3jo8A5ENkCpdhUGVPS7TzNQTp1BGpYbCtFUPShX72GGS95xtKtgjY",
  "key5": "movb3pZqNz36mMGxYqFLpNRtsyLf7Wj8NiBC5yAeCEX5kSmon85NNq8UXkZpXRWhYz4trQQRZ2LYxbdP5Yv5jCr",
  "key6": "3Hv45775yS1joeGRogALLL6guNiwLAC7FzQhYuKKT5LziHkLxsZDg95rSmnjkRByxLURwqLqREGNrnug2uN7mLtQ",
  "key7": "4DK3xLk1dmaoUF9AAbkot3EMPJfSe6n3xnya84dMUNCDHDKWX1owRxWKge5SeCGg21f1c5QnZkUqdNGvpuFXpEj9",
  "key8": "4QD5MwjtL5cHthWhF6AH8DJuwdBvfM7uP3JQ3or7nFVRPE9VbHpM6oN1k2yKPfD4YVZdKsTvZFfw9PGWW1NzNt7i",
  "key9": "5xYV5jR3w4Je18X12oxnQkBprxzjYKFrYnAr9Nhnk6qTWmfzJcMScQsTLj3zzGfwm3gsaz85w9WUtGBzwR1M943z",
  "key10": "3ByRNyD4HoG4yUwnQuricBEDkqYCq9FpHaBURb577eJX8mD5zhNgjmL2yrfmyP1fjcRv4GvpwSJkjg2kyzmhC3qg",
  "key11": "1ofTU51Px4xiMmURrzf4YWsHJti2hwQHPkUV4kg2JwiH4zzgxZkeaLNUCUpQDv1XX1btzb1t5Gp3Ykqmr9gkA5B",
  "key12": "5S5tknyQmpLVE3JsV4khteWtefXgx5a4HuTc3qY1PDqjPfq8Fcm8b7DN1Cm21eSrBqxbmj2uGzhT3NujT2vD3gs2",
  "key13": "4D8cGS984ZMKZPGsaVfhxWRXYn7hCjoAmqTEkknA7D6vCji5pHXQqFCvb69Fw1m4aXCiWJcNfENF5ZhLgZ9KEVWP",
  "key14": "yq5QtnaatPu2qCB6YMdJMVVAgmNSYC4QB71ALrPgozSv5B4KBnCfcnddr2FtuSatce24wnKCMi5PznvZxh8doUo",
  "key15": "5S6hoGQFMQe17iMEsxsNbbC5qZb2EGYZFtStWqyngfyVZg11MAwT2EY2YZXwybCKgSxCnsR128QcNwFb3fwjYeEu",
  "key16": "2NSzmCeFRzdmuQLPwkbqUExaeDxbTgsoPsnMAeWvukNVJw3miVi7vRwdAUyfCmnssbKSygFzjTiws9DiqiMkUst9",
  "key17": "Sbrd8rgmyJ5Maab4UqJ6ufsBC2dBda7vn2hbo88Nfy1dUZCQ4tywH5Z9bDUy2EkTPyQuhdbTFxnmKGNmu7uCTu2",
  "key18": "8cikprAnc9XVd5JSEqAfxmUUgzFtQi7kzaXaF5x1YtjVC5EJPhoBDs4CM5K85YL1MGNJEC5CyHDVFpjqd79APUR",
  "key19": "wYUABo4HuwudGAa8Zu2ec4H1bELdi2QV7EEofFke5DVSibWDYw226tEyqGH3TeQbu7xgGZXP6UYptn6zVtgFaDE",
  "key20": "3Ldp7JXurs8sfi7LP1KrkA342d1Xs4ybi26xw7TNSHaSB1NtM4b24oUVgeqPd7ohCBgXN8forQv6ot968ntqS7YR",
  "key21": "YUv2YpYHNNJnE8WcjYrHxy6mm8dCGNB7KHxkexrKJwZd8yW1XrpgnMNxbGPXqJJBhGwawQyj676MSk9kgMtKpVt",
  "key22": "3ExN2A6Dz3ma4N4Gfry3xvmeyNMwuYygEK4FpSZcCRLBk1NPNpy7ikp2s2ZgffZTVouDA6URwEHQ5bFALi3yfK6K",
  "key23": "3WjaGBa11kpUmt8H4isjsbW5w1HRoUwmyyTh7bvG3Un9KBDTA8cwisdnpfuuMk4zrELi84ASRWubLngP4MpKzSK8",
  "key24": "61P7zR7Km5oAhE1yVJaZRySJND1oNvKp9i3fo7oow31oehMFkAWqi2X8t2jf2DmcwvkhHb7ktCScorpx1XpKF8yt",
  "key25": "26ePVrSHstoBFXcm4BzB8D6yeq54HGrFH9KUbJ7PENHqwAKBeauYVcj91wL2KQhhAYrJgiJwgD6ov4mye9p2hGcs",
  "key26": "4L3E7gf3u3Qg4iBhXcirXH7g4Rmdc1BhD9kUcCUgjG9NovEL8EZU3XXrjtEix1NiuBrCUDR92a6dTtfvs29gRLBq",
  "key27": "5Sf2dzTtspB8QgSuwRZiR5WAZUHsQUnc6LS1ZZzqKAAi9PwwVcvgaqBo7ZWwwSqAHVsHRszx1XFf4Sae6nwnCK4P",
  "key28": "3ZNTT61iCrqHGoYFd5H3wC9KWQiB1vEQVDSdGhYALhrLtLfXZkuhfKLKd3tEnfgZ18PTMV7s7oY6R7Jd9sRyVNp4",
  "key29": "2ZSQbmRTiHh6wT6weoYDVi9dN8GGeNcXG5F5jiuiAnVHX5PG6XSYY1RNujNfFtFPxoJdhQwdx2V1scA3PxmQdZ2p",
  "key30": "5JJUP2E2RM68VB9gYjzKV7J1pwBxuzAtQWq634sPZ41JDGJLi3AVZfbW3TupVdnSgMcfFN4tNEJH3nMQgfPQGNpP",
  "key31": "2gh85oY1qa1Soqa3dCRpv6EqdGWUu8au9cugNp2zv97PkazfeyvKnfEB9tKR8yC27VoGK8BrZz6L21AriGLybEa3"
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
