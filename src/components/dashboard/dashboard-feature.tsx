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
    "42HS2pe5UhYfAZR5Stnhjw7FGnQS5Cu4GrSW8JBQvaGaLd7k86Rt5AYNw7s2MCZXafeAzHoYKE8b321hTvzMXMhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MkRzxWri8kHQ9wjw2fbrGJoRrcAKvKnWnFwRXpwzz5aCAjp53458mAbboGXrbsHfYRh5mRnqtkvjsCXQeogAP8k",
  "key1": "42ZDrd83pHLekGs1kbfEnaUP7qsTFLzmjJSxCxTPGinYVTideoc37cQT1CjKKacsnDUYbz6Vqq1Mm1NdpsQ8t8gT",
  "key2": "3y7PbToCReXAEhyJNkKCh7h91DaUmLUAfRo3kxQq2dQSLeAcpuqN4qmR5a5ybyWBMaJ5TnzJHBeoSUzqR28Gvstw",
  "key3": "4rfU6CkZZesJJiZJEb12qvfaBC7oYNGTEyXrpEAhrm2nkQQk5DKG4F8y2bksuLZyASNrHj1t75e2wGLFRz1sNVE4",
  "key4": "3hxepnM56HK8ukWqWfJCCsXcxuBpBMoYBocnvzLFm4E9eBwSTc7GDFrJd2agXApukHTbYgd8D5KuS34EPbuRD9KT",
  "key5": "5RA2TJdL3P2QMX5rPu6VeVC1hAwTzNTzDhvQdgKKouDEJmXJKreWzubjsYBafFPEW3KdGnaiUv5sAZuWBoKAh4Dy",
  "key6": "2rLif2BFwykk9CDN8YdcZNG9xRa9tPE7NvmfFif1S98jUeidQfX6NtDt2h74VknwiSie96uwJPuybSAVqSSicp96",
  "key7": "3sBwLDtKWfGQn5S3dXDA8kYtDmARekW32KsTmSrFziMX9Q2USYyHVbZGHzoUwZc8YxkwZyCiBuVtKziDe4NpgZJF",
  "key8": "Tj2eNWC2i94F2AKQWM7mNcEoXR7V8aAjDFmdCkxzLpMuUb8CcgnsEomsu3EH6Xipb8uKsmfc9b1e2jYTc9KXDDH",
  "key9": "4WKbmm8PXuEVzh6hEc3vfX5cqnEqJeuEyWPJVM9xV1L4i4EhJ3evWJsfZvEdzqZ45EYLoKo87S6ucVKrH7RHqRV2",
  "key10": "4GSYUEhKSWMKiMVZKvYEJ5sw2tUnoV4ZMqxVi52v5cn87RCrv35mv5yToRoXvzDbHvCsV3YsQFzudgmdGxFLiGxq",
  "key11": "54aDeQYaVX4b51Y1TzU7VRp64ufub48jfhm4MpgyC25w5Cc2cFkGWgsukiN4jSzrdmnQnuUdHQZynGwuPKZYDBWr",
  "key12": "4fEhT5AuEtavfx2MxKJohABmKobUwhNSK3Q3CMJgD5dBxTYy5cCY6aJmD4veFauiHQehMQFyTkuQ2koPzaMiWeYK",
  "key13": "5WPChvsmKs83DX8SHXjV9KT4EQ5H3Lv2RefYB8WNAVYMjJvAgQZDNJAK7rF4husvfLjS2UPRoNKgWVFj5u5EHPbk",
  "key14": "28DE5wmTrMCueihk2aB5ZRczcHcZqJsmtwinrAgBVPnjR5RK2bzmH5yu6d9xpZ1NekYiyRpCD14BV592cmvgJHKB",
  "key15": "2qcYrNB1Kvnf9oKnW2a7yN6XHLy1imzxE42JVs8ouXMK4vEVnANPaGBpvnYP9bB5hYvKHRDkSbFKB7BW5gGvcqRb",
  "key16": "4vN67qv45vnMzFnrbBNCFhoXMNb9XcZ8nEejGAFAV4bJ3ZmE4CcuWfQww2Hbqr3LQiNCQjuss1hYtjXC8xa2gQgx",
  "key17": "28sgrxCykkXAuj11RZSyRoKXvjV3sW5uuA4M8wyGYCFRv26gd9gEXymMup8U9ZvLdNc5E3egC2MQm93p1Bm4zrCi",
  "key18": "66wiYcXuV5YpxzcpUUUpDsUWzjoPv4ZG1ZFNHxg2hAZ4by5Y3Hv1XJh7wXjWdfMze6ZJqSZJoQXwQhreqpC4Sfvb",
  "key19": "3bkavpQ7w5k52KoWi2PuhkG61Z5V3gCFVpx1Wg9guN42tgT8Xdb4J5H5wBfLF1oTYzXgd79uPRb3mnytrPNa96Qi",
  "key20": "61WECUPhfZF7gaaBWbN4CBcKB4vaGYA5grnU612Wvq6sNiuaami6cadRyyHqYcagXvJDX32HV4FduzAFHyk615KQ",
  "key21": "4KkF3r5xpE7gLJgB4yCP1CTqtnjW9ZqBfujwEn9sdyEZcui8E74ozZkepwgG1DiVKWY38BgJio3rNKAbCzZo44Ax",
  "key22": "5YzAyPKRQ4xHMC8HwdDJkTCSoia4UE3sY7mVT1svmL1vbwpEc63EECq96h1E7Y23gMnWfqY1ibT5TvFLqUJr4qEb",
  "key23": "2y8wYa4kwkYZpQWHC8644NajAjG3YU6m4ucVPwxYDtjXKjN5KfZy1tsu3aNFuZo5MPB2HxhHiBh22FqzgdA67wnh",
  "key24": "g6YUH6jwR4YzY6du5qeywB3pvo3rQbUJEc9iosMzSV3b71MKpVpPrqCPvF6guF6uq8TzPTnHwRw6RSZs9kq4H1o",
  "key25": "46gqmyNEWjsyRrnUyEJ5t3Vbmj6Ry1rBKoybtZuASRyAHNYUpXgLyL4HdSbkciuqZa5VBYrqRee7yaZiqFxyQ8m2",
  "key26": "DjdU2mDFCQhHKMYUrDTx1Ee4BrxhEaZgZQVURpioGw1q9UuvkBDnNUpgbVaDtdrPEmpAjSHQy1UfFT3evENMYBR",
  "key27": "65gMxbf281CvHC4Hb3bxeSaowrkRZCVwZb9zptsHgJ7Cz9KqRYVqe7sCqb9Ry2WSrGvgNZ4y29n71T7bP9YWbdpS",
  "key28": "5fC8p8m7bVQJbgXPdCWt1FFFqdM5itf3t2aX8XdXeoFn6GHDni75ALsX87R4HwUc6q3664wFvu22keaynRtVQCMC",
  "key29": "381Pa7bjBQD3E777K5vBZ1PZR3AxWrgGjLLfMKwEBF7hGebbdEcTLrb97oBX1fUnUb4qTU5cZFy6TAmmmjPCPaAw",
  "key30": "5cUiu7JYzhgscRaRyUtSfPkq7V7ZLDThh7ufWarJJ5fkquRtf3ZgrYJyP6hrnjDEF9dKWoPQb52ptKhCAkxQEUaw",
  "key31": "56kQ7shtX5N9PSsyofR5ewHH5W1AXwFzCTapGiiNrVJhmr4wiwHXsqE95ANu2RuDVDMkh7VEVJGmFCoVmYMxSYDL",
  "key32": "54tYUgaC9AAdMbgFu2yzvebTXq5udCKMjYZR8KUMxitgsDAx2aa9NvZzu6b7ZTG911GP5cHzA5XiDVBY8Z5rC3sQ",
  "key33": "45xLWVEK3nsgMrbYoy2no4PmC7u2DWN9VFrAaVi1taVhh8jLxw4R68fAwrKds18bUTjatGmRXGkxPY38eijNWLwe"
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
