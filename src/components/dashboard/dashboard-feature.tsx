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
    "2zehdCoJ6bAZ9AxwdHMkwWbh9bzWJBWaBt5cZP6DtWmmCYegAHuc4ts5FZm6MUycpcpDTSDNmGBdHwXDx5Guivx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "usE193RqL9nD7J6hrVAhu55tDmTS9ni1WHsWgsnBJ6Kp6QoBzVHB9gSCnpqUTSXBJLuPeeppTS1UBadNxYCjdxe",
  "key1": "5kw3CvxTEticN2XwhsHNa1TM2AMgKWqa3zmQD7TzsppK37naHR5gPAxj8i92SYbuPMXhWYEjGEDCquGzGGA8gGNR",
  "key2": "3pHN81H46Uh8ob2GE8jxkjybV3urH8nA69aLsnbcCN26WXz47R3h1akzpKQ7EwhYbfueP4Qn17V9Jndh9mZCBSQD",
  "key3": "5NXXdst7qz9n6cWrKhhgS76nAnQv4Ss9LxwY1f5PkaEKcRQUjuZfBWZb2TrStRf1YoeGWEwFztezkXp7oeViAydC",
  "key4": "32EnJoDaUMs7Nj8ZpwYHD1FRyHt8ymef6HQU6TipZ6X7kTKF9NWt3aiU5nPnWCZYqQXwc3Z1gzPtrX4LHqtqPEkA",
  "key5": "4eDcqydoBgcKKn7vZQ8B3uRnayHBDrxtNkbb5e7ZQbJLNEz5K1MAcdD33FWpiDSTLrpbcJeokpucXAVk2qB1wjGf",
  "key6": "85wg7UQcjaqr8PAp4XZ6RoH4jw2Wt8XqGGa4fq9he2Vb4ZVRDV42iu4UzHoM3pU5XVG4hYQDuCpdR6CTAciUXY3",
  "key7": "4VvKLjq7wb5BCT2yZXDDuS9CHnyRiFMd5iAnEh7VTQxKPEh35xspK7n7vaBSSgexp3E6Mcory586Knb3i7oEgUBv",
  "key8": "VL3ok2YoyxCbBzVvJsXKVkC6Axy5KtrMwZ5bVQCwtXjCgW2hT4JUak8y8DV4Lqh1Zw1xeDngG2Z5QG9je82cRYP",
  "key9": "3ds72ZcYc7eSqDDHb6nBwphsFF4xzqfEQBGKWeAg2AGx27KSTp5u75GrW3bWEJiWvH1xc3k2FaReSzx6apxuEkKw",
  "key10": "65m6NkhRQsDBgrXFJTx3WWW2SkVKb3dUa38j47hoczMG5xhbRCT2B1ik6oaFgMrsT5SFVCLv7TSVm7Nu1jgXKhUq",
  "key11": "N4PyDFPKKVGcKEEUSKwAwqJ9dASfuMR3x6ZTd5WgKwG4H52QWMoNBWPRd6VVF9n8B9UZMkzwywvaxP1Q1K1X5Bp",
  "key12": "QFUQ5qUzpk9JYAn6ujftgh12XZWPdt3VXdpAGu4py4H2dp8XEbpRjMZ6bFsrpMNf6qYkwmAkhps99maLNufbtKv",
  "key13": "3NAPucUyyfhf7oFdMPUMgNsSYNBxGnXA84JDDXbDQ6jmAoYBbBnzV3TP7tSMrpfT2bWhSRLGGRURwFiSpF9NrdKE",
  "key14": "652PV5wXoM3wKfWDY7SMq67butckdhfj97A8qTQZtMQibfBAceMeaufGQgy7A7xziiY9aJxCi4EhDHMurcDE7Q2",
  "key15": "4Wirz7AfhrbnyeyqKkpHDxn1SGNSG4tAmfc58EWmZsg7fNspCj8wZBNrXcdukuPQNWfkLYuGvsVeUfSr3xWWZPao",
  "key16": "3SoPdBsebgRcjcjYhP2V77Jo5XZrPwSEW8H3b4catDMoMmxGeTS3K7msZqxfUeUdN9bZjxrDsueAJkSc355rAA5G",
  "key17": "5SjnU5MqtQgqPedfoiyBi26i8aeG542rZqjz2xx6fCrfrTmZxTs7So4C8mXvp9XyvKDkmcsMq5Egbpkzh2XH3BTD",
  "key18": "3PL2u2MmbrPEPKgihMdkcQjsVaWZGqcukhthwyM9EGuJy1LV1uTTAYVqCJbtHKegqV2Lqb1nVwH6tL2ZeuTkXpqc",
  "key19": "32bz96Q5wPWqN69KFfKhKdSFuqyPDsG5ghKFFv1fAhKkNLEXhWPiRviUTyz3VBvhj2UnFFFKfhma3TRTXKuauM6L",
  "key20": "2TP1sqb8pss31YRkvmaSSrHaVLL1ADvYeiLdMgNaLEurbhbNoadHc5jRDccCsKfAdrPyX8zWwq76uhEMepUoxpGP",
  "key21": "35LMyWXHazEn1hw4VQf2FMaxF2TQNnGHEjmZ8vx1EDHE5CmDLVjXPG8jgUW423LgtekkwwvarAtAGww2SWNV34j4",
  "key22": "3uQSGzCjT3CuiEsQLipwTMTfaqeFEhj96wSevZvVvpyWJiLtPf9Kaq1gwm6TvXQPTz5E4tZpU7XRPTzLJfz812Ac",
  "key23": "44CwYXq8r6bHoMRv9HzpNfveuTRr1M4Bt2wRMJhFTNrPwuSc4odgsaR9JVFj99jNSHbqrotcancUemaYi6LM5npZ",
  "key24": "2J7wQkzcSgsNHQkZKFykqntVLqP7YK3dCVhBkgAyWkVYZjBmaLyv9YZvNz4NvcPtdQ8bqTTdaWAypwhs47XPhape",
  "key25": "HjrE6bkkc989U7wPuFHo2eCB9ejKMs4chDhBUy91wFTZwq8hsrzm3Cy5Rt3XwHkNHUTSiWKGw8Gp6KjieHPLso1",
  "key26": "4wtVaN1P8dPvKJsRhzHCcukwAohhzZcdHmiMZM7w81Qv2vxCZKzjWrEEGbtuHp4J6epf3rMqajM9yXhzQXSVaPD1",
  "key27": "3MYv5K7PiMZyumd2MD1UZomdEwAnKkWN1hq1QzYJ2BqoH2ePrug1nDXzJWpCNJQTz1msLzdkKVxG1D1EkU3kiPn4",
  "key28": "4a5Y8zhUAK2VKJFZVySNi9rkWosZuREWcGJYt1oBS95xbnisqwDcSvvyahGJZsWbm5PvNuKuNN9NdsQcjjJPuK3L",
  "key29": "BCyL1xWb2VBZHYV3n8eta4Suk9E85WvSdDRWvWrS1wHcCn2V7p5h3NjuCpPwz6KNaYbiW1B9rAJFA4nACSCzAyu",
  "key30": "3kpzAPcqv3D9PbuioRQJXC5c8Ztq4FH9T3MfZZXDUcFZJsV1YozPP4gfYFibEV2v5Z69Hqq2NPxHUogMTG8BgSzy",
  "key31": "529UBFkjAgaCm7SBHQ8kC8Y3yc5kEzatS9KePgzRscM5sYG3fLdbdtneHHHAV2EBKq2zwemgR2JMFYHr2t467ZKH",
  "key32": "3t2joPqbDGbFaKReuNUVVJYVHTprdBH72aMGKUTxPpYi5nJUg6MaQVqmcF7cJvNA8YEvUAUDG2omuhT6zZa4hfQg",
  "key33": "4a9insvfcNT25pwEreDKTKgYsSwq9DArpst1cT6EukMB5BYsdVqSunVpMKDTt6CtfwXLSGDLoFafD7gv1CPBYXR3",
  "key34": "XJ6wggpPBzc9oeEhB7K2b4CeEC7jyeg4MPCY4e2vWMaF95ueCn3Cw853mVn2Wix1aBiYvYvbHK23uiE4jPPqmdM",
  "key35": "3MYoLFVSRe8NrTzJ3Xki3fUeLQYc9dJwKY4Kp4rGjPmj8pwcZN8j6c5kb4k1cC6EGhkLhAmLMcMH9PWQVFwvEwFk",
  "key36": "39By7Np8CbYRpUyUtMowUT8XVLfrcneBncyitC7HxZ9XqEJ4mQAziGdpHyY5qiviV3KmViyoNyHytWeJeA14Fh1i",
  "key37": "5D1jYqprrPz5UB6rd65xWXVxiU8bvjkPc1YR9gDd99H7nb7b8QApi4YKD2ydWXfRFk9Byf9VX6ep22XB7vh8XGVi",
  "key38": "22mtQyQjDpxcPmb2nrnFBNQrP8cpx3jQVZzH1hFEeJPaZZwWb9XwUc1wjiBCBsuk2ZhipsDz5jQxgRhHS5QspqJX"
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
