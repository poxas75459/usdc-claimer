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
    "5r7YQSp2VQDrMoavkDkjHTzapeXAfYt7WVETBobFcb1QJiV8uBWJYNbCb4MCr6MbVAPECLrBZYFHs29dchtfjR9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nYiQMWQy2mxsQDQDWogKTFnSFhZ86kEsE4uAn7AHzhc8chdHAR9uW81wfeEhmHNQUSSDJbfDFMeqgSQmFVfAeB3",
  "key1": "4Wyungs6Xvt9jjRYd1S6Tq9ymgMm9xo4H14gxJN2ewkK4shFQRL32s3VsfkL8hpv3Lk9Mh9AC5U4dQ4j499DFgn2",
  "key2": "4QH788spaiUBV1FWf6kSVP3PZz8J3eX5FcuAkKHcdmyLDSj6NGr9t3HiCS8cZ96ygWYzU99bfy6fMXdpfMPHspfp",
  "key3": "27PawHGG51JbCTQK8eiLFLepRWK4QjFgpyf2FB3GkGkSzYh7yxKhb9JFPZaRebucwMmzuVbixvUV7cT2QWqQxPH6",
  "key4": "56hNZCcUQvG7gqXxhMMcMDasPeDqDyBnhonSkGGx82v5oysMtzHmL6KMY6jnT4EZ5C2RyP6iodJAednDfnBrgipF",
  "key5": "csFqxJZxWnwuoRSrotZLvnmmcKQPrWxct7Ukf4egGKN55i9kDsvMYxzvEYh9hE6SdGMQmKbYXpt12PfT9Fy44hd",
  "key6": "4dyd2MmC7Sh2FkA7e43j1ZVg2jXhFTE8Qq3SdL2toARQQxnWWabEAuJDgNgko4Grpo5S1X2ukPM6TJjPtcfaFwoZ",
  "key7": "EM3LVorxp5NYFQkq6GNqordiM5wTvfqBSaUXo1u3R1SNhqo6LryfRP3hoLCc9ENtEErSeJgu62denJVMgu6zo3Q",
  "key8": "KuYFdpRtxDqDF2vs88xaq3VNe1oGiS8Jn9zL7oETWai9Ph8QnJCvmmHRe68gBTVa4qdBzETzA8htUJSUdXhLh6D",
  "key9": "46XZ5FiVhbm9BpkLYwZxcvCMVRwYvDYERHNuLoqJ8Juu6toPECHkgcxTTZwDCiU6Bapz2zENcX6kia9e5QyJjhgK",
  "key10": "3CQG24kc23w1UchCDbYPp1yBAcdGp9hE9TZUdNCRiw7DyARVR9mmGpUzNTphg87FqyEm6iPvU8KiBXA3Fos33bJo",
  "key11": "5xFrDXdiEC8q9iVX7QoC6k8qvpez3f2vFRgf9AW5MBcPfc72dGYizdUFGA1A4EoSYLqCnDYozmzJai5tTHviNPdQ",
  "key12": "caTAJgxdMVz5kfR5kD1or9vp3ByYu5LGREWY6zeN1d9A1h1siciQTTFrY7TangPbh3qZP5hXpChV2Gf2KkAP4PA",
  "key13": "55JnWnmPMHBDLcGyoxFhcdVD2qEUGSjeATVqCAwEXujhhh6da2VWhhgArAgjYpndC9jntt3B6yjVLdGBvQPofxYz",
  "key14": "5yomqDTRLNJBQ2xJKdLRHqzXyfE7jPYXDRW9RcgEEGUvXJHBPxcwEn42czstDXA2gT87gmfmXo8RhKWKcS8gD8br",
  "key15": "5FykPPBn4jBiYkVarjEhkGEjsiE6sqKfNCnA9Vo3JsKhyi1nDaFQiwd8VehnGJ6ydcX4MhCBE9Fh9EVm3ykypS5m",
  "key16": "5UELnMn2qShtJJP3MtYtqixe2ESj3JQePgimwV6r3pPFjpP53Wa3V8P52z3UZtJzsWMdFM9Eb8htExbGwN4vfTqF",
  "key17": "5ovJ6GT1A4yEgeHmn9dQndXXeRazjWtL6rrzqHFvVXzdbmiHpvBe2JBBKr4KBadyQsTNyyghLP97YDNPDwHW8hrp",
  "key18": "2Cyw5XfBYTidSH6G3zAcsZByAng67YH1dwwJ3LQbw7aqazzKHZhacLFKM2RQmRLQDn6AhbLccDsRpMbuYH9VXsiE",
  "key19": "4qZ3wN1E36kLik9CqAopMTTD3wFoBVsh5FehbexHCpBtNEjySYYsQuWQQjopxTqb1dMa8V78Vs65DQG5prCPhniM",
  "key20": "4XTHu8VtccxLAzkRdLE923Cy645BYfpxoG9bjgt1DzjEoDuxjdi3Rbs6oZkdSBBHxfJFAcVUYwNtSAnvwY7RgFMa",
  "key21": "4ikHoHnM6sCiLmH9zRvQmRRoD5gXWCm55BuKnMX96dWWhGCTZFARPpTR43pPiaMm7uRPic3k5REQzNf25PxS2t9T",
  "key22": "3zMLUDyE9a9mw4JTqQE4Z1Kqen7yhPBG85gHv2Kz9BChJgWDeGSdQuk1bWGUXUX7cxWFKtfCX6YVoAdGoxnSV6hP",
  "key23": "VJC3j5vv5gWJFmAT5wqAFjqbs92T9WxMzYL6Jyuab3LDhxE665waABRQnqJKq48zTiZPFmmNCCxHgmo99rthifx",
  "key24": "5D9KKydYdt21R1M2cX4fP7XgZWoYpqqYumDqXLxKWeBZhZkwuxtWPPmzVcPbYBKFXEXr1M2Q3W5T3CKjHwcrxVp3",
  "key25": "2er1bqhQaKGkj2ayYmhhemqXevyjvrF5aRyDVwiRUmBVf7Ecncv1Ng3FVXkAvZ2eLXn7apSmsLtmypYKz79oH28z",
  "key26": "45NSAwYWSpgKtw9shG32proj3Bf4vx6vmVKC9AtmGwwgVB7AK7mFgcJwnbYvwDB1tDL2KxTLpAtqh7QcXpEGp6d6",
  "key27": "4xRcz4Y1hcsfyzh1uZvrdPHBB3gSeLLzgV4xvTzNg6FBTygpLiZVMnw8sNoyCgbMvb314RfSAvWyUeGQywzTW4Jj",
  "key28": "355fNq7ybRRVThtvDM85hc1C65ecNeTH4GKRARc4Rk169DKAae5zd5Xp1ss85k3L4hwqJs9ViWV1iqxq49ERspPg",
  "key29": "5Bf6ZQTRRBGmYw5SAjETraFBtjBx8n16eZRnLz1BkUm2cCZ3bymEYudW4PPQUxc2wZEX1ta1dSv1oxiWxypCZyed",
  "key30": "4srWgGUU75bMHJij3UcXzJLrPEFnknXkPBF8krtJSRMZopucnWTbM4MC7STmR8zKFrKduCiN8ZZk9cwgAUP3JBsn",
  "key31": "2sCGwoHduZqmRXHf4cDW6ryMRyEkqNx599WfR2SYR8Jd8jy7qMUX1X6LypZgkxCbH3nMaaua6eLaeVABSEzh7ueL",
  "key32": "kKiED3QC8HQiZPy2qhLsM2eCFkCJrHRATcPN36MZafxcq6RRAKcvc2mZHAVrmCLA1DcDMcJfsfPDjMZEnDDmEZY"
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
