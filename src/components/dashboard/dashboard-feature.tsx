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
    "4FPnVv2uAcuhgiUxYLe6d4yPDvmdkgfVPAMTPYYeyRXEL69ptPtEgVbutwL7hxXAKnL7cnVa8YVwhui4hjSiMyS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3prqwrSP4bYTfXpGcUXQ1hJ2SeTqM9GKeszdpqSfwgrqkgW1gDyt39AFYqZXTuLEhdzgTko3PcdVR8YBvTyH1zJd",
  "key1": "3zZDJG8Md1nVjbdHFRNZ7UA5C5MQmh7ZAibuAKNkuBrapjiAgmiHRtDrQKR8c4Eb6QQvYU4JxsUWL3Jy6E6cQuR1",
  "key2": "5FFK3KnnkQMhoaQBCon366noNMoTieyUXsSGo5cBMezEoaU8cx7bqZwtDJZyYKzxpPcBAZgkw9N7UBFsHkDXQXcN",
  "key3": "9Zc1mNYiasBgiJTfg3ej949q93VbnEwhN98Q5RyszTn4emLPEX96ZgXzwSsq4RCz84ayzaZQUjf2UL6KuEpPFAU",
  "key4": "2dH2FVGaFq8V1iFJJacfmPwV8PnJ5izDR89kjtN2YR8KmumUFKpxSDdNJgAsHTKHw1BjWt8iDuSTNJRBn3NHv2s3",
  "key5": "Bo5kQAsMuviUGyLFAYf1imbhiDZFMszfmS2wJiUBdX9uJkKpR5La7AX1uPxxFhTg6w2zyP3gdopUkXjxv2YX45w",
  "key6": "256BgzMoVGk8Qmd2U9MVNdAkXAAHap1LyBgLTfMgh3EaZ3YbJtQadzw1UbaeJpJ27h3UXN76AxfuM7w6BqEQFv2z",
  "key7": "2HZ2M59AbpyBLGfefRPhma5RoHNu9A7m93jBb77EvErPvFuHaG46oq7TDMKHZbvDE343NkfpMWeLXNw22gk4J9an",
  "key8": "4qF9ebrDFecsB8XURbzzEy1o3LEb9QHJXXQcs2j8accHBVkRaUDHQsciHP3UahgckQ5LRdsYjrPzwB59g9oWh7M4",
  "key9": "2MUSGBmhPpCZf9BvtpZhsvELBxtj3xPUfdwB9Dd7UNxuicMz17LEjRy8NjLsXmz3MJYsAiE1rK8HzWAYsgvfwu1H",
  "key10": "3uuMd3VK6tyRYqGkHzWybCjQMyzuA4CExyh4rb3etXzQQ91C7QL8BtCqexhR4Y4f75H4NPtMhcHXepgz7Lq7Kwq9",
  "key11": "jajxXqr1eqLs6Fi3WprgWkBp7Sqvjp2J94p4s1ZCHRQEmHZb3d4h49MHbsF3sLoNryhtEQMAhrN9c2ruD87xpd4",
  "key12": "3pL5CDf3yVX4cyR8Cc8xpohmDUnA2dbXAeGEio7DxYfwDairmByWfrzSxn3GCrS4m4YxpmBDM8aF79eFZAuqztSZ",
  "key13": "3dASnonfmkTrjyswAXHnf2DX41nP7Nqb2V5fEPxguCWoqWQJZ59ETpZq1CiRtd3gw8BYG7USsPydvgAG2fezL7wr",
  "key14": "5w29y5DDzsSkUrTbhJTz1FCM2q9gRvUFQKu9PYZuJKAN2ShbJ3W3LB6Px4MhKv2zrVWXvhwi3uV9aMH3JcGXyUcB",
  "key15": "5imRQNyhU28VJRpCGei33ovToMhC9aSzMpoGpSrYzsFLFqyum8ETuLpR3Tz9eCGTiLcNDXSMcRpTyuKai5XTCu9g",
  "key16": "2GGWvWb12gQfdKq3m3PpPCQ4K52fKqa7tucSjBipKUpiMZbJhRo8TR2UUQ7APuTJcCgmuTQgLoub3DhHdQiJfRdt",
  "key17": "S3C1XLQEfhGrFaktZgUecqhLRRWNvNMhRg3ittofXTLQFMkxvRo5GaisHoLBiPvv65a4Stg1FGTQbsEC7g3mxPC",
  "key18": "4xWtGF6dYnJZmkeTUWhm6C8ZvKL6JFuu8LfNtN9miwKJempNJSXJkM77eeVzHrZztaxtCjvYN7m1axnUjSJTDEPu",
  "key19": "65AJHowNunn1PiuqCXiUEJSsQzNPUtqDTpkAw6cXzy1JvmstEy39cGehtduSgS7b1chV5d9aUz4taCdkcn9xUDjs",
  "key20": "5SxFjCP9PFbSsXxWbBAQbbYajsHzcmRN7uN3HG8rQ7rm7a34jyhZSTtQVPLBiBzjmDS9a4qnTmE5dYhS3J7QnomU",
  "key21": "S4TsD3rKXHPKFzoAyPxE5nyuonXRmpoe59CCwwQTn3vU8jPhpiBh2GLJjM6wVtP2LtFPmjzsTsCG1Hf78hcK7nL",
  "key22": "9D2YFnXFcVP1bJhoCMP9WMH7MNRUDyj9mnUv28K9n1t1xP6pnSaeZGhe8LvNoieKix9vm3osboF7MXKk9XYr4yy",
  "key23": "4pnZEGfY5f99kEsCNaejk3Dv3MLVX5X1MnCiZaRoG9LqPAYPdhu793Ld1mVhy8qjHRjCfWm3LEGvfvYvTVJLykLr",
  "key24": "SWtopcsyeffMCAUVCoBeCiDGm2UJWfdNcEH8Gv2kkz9oFw5ssbKVXUW1YT4mGyYssRS4L9ThNy4oGLzcaqpEEBf",
  "key25": "2z26abgN5ZTeS2DCzB7FzBbFNTf2YJAknSawEvDjfBM2xAbQiGCvMi6iBXJsjgRvy9d7ZAVx74kf4ZPw9bST7ZEW",
  "key26": "5ieeUQjmgfozLkQXwBDgpcESdKF6zMw5UgiPFjkjmTatfbUFixH8eZJyScAG26hHeSBS1wmKcmozYZisMcgFyVyh",
  "key27": "3z1iUwYUgnBuq3igANVrNxSVjCr1jqcxZgRwL48TV6u5rxsR3twsmAGraGmqaUsf9sCLbmd1p5ag5zFWRDTiE254",
  "key28": "3eVtww6wkYc3ZWZDB9TvCXUvMEaw4HmRkwUCXGAa4YTbNWvFWeEz4cWxjhiCu2BXhNkFuUbZ3rhpJTxYqBC16wVe",
  "key29": "SXWBjes8e27AQMZwAoknVKa5XSdAxTceWzWT9BoVRx1zeC9REydiXKLpLsdYBwS8B6cczMvjeJ7WEFBTLiY6R9J",
  "key30": "2CT8s4MXad84V4ZL4uiPWqMGkLxMZMorJCaxBXMD1GCWQxD6xmQKm1qJbcqh6Achi6Kst3b1eYHky5hSP4G7EfdS",
  "key31": "32MvnuiT5bffK69jvicZ233bL3YLrFRHFrRFLZ1AYWePvATxs9zbLmMpr4bqvQLFhDWRqnBHMYWcvFqfsvk2ZFLz",
  "key32": "54GqtrHaoZRcxejb53489ACszu1mX4dsVSZ5pUJWDXyKaiDJ7L85yF1uRs9cVdcPZY6SKwTc1L7SDncg1v9EuX6D",
  "key33": "23GBaXThGSNzNVzri5yC1HUzAtBYTcVtSRnNyyWRCX7ay9gEkzA8WdzrUTsH3NTamnYdC5ChYgvE9usHJooDeAiY",
  "key34": "5v8uzUd7bCjr9p1rcSYLShxZCpFLuoanJ2YRjpMD3guho9Yd5996JykNWRrgYNfHX8sEdtQmu82B5u9wJrBaNFw7",
  "key35": "4nJhhRrHkh3xxzW7ayAmfar5oiwpdhGVUdWPHmJn5H6e1MWnk2xioSUvzUaqfyC1qfwcU74UQ36tCxKm3NPgCMQQ",
  "key36": "66VRGaTVdroJPv4fWA5ZvfRqZzf2hCRyQuzgmoSw3dGZWrgULaY2x5HKPCpScZZxsd9yJ49uTDFsdos7V2Wir5ts"
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
