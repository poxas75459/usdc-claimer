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
    "2ogr5vXVuYAk7hPsQcVc9BRbnhbVFjEFP1W7gvDZWuyUVfHAFT4n1GPx2QRTcQLfy383mccezTPVxsenjbxrGaRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k837GA28HHwMgyGPxP4c2wRjXczkpy8uv3eihgkj8pmbdc4HbFSwNpsz1NxvHU7Q6wFqRCHDfFoFGcUrKsG6SVU",
  "key1": "4CiBsfAtcHLdpmLuJDkmcpJVoDiy6sPM1kDeC2p5TpfWe8kKHHMXQoDwcwdhUnxqtjcLyRYEm8Yym5pdmRJx58Ce",
  "key2": "2uEeVZ6mVf8w3fegKxzUtpUa5Qkdavc7Dxab2JB9edwP3nt4J85z2vkyUvRSUGYmmfcMeWotuwpj2fSBrLoiqAN2",
  "key3": "2TocPngviN5LYv7YSBwiXWreXZc8UUvLVqVAXxckzYh5gbjM8Cz9y2hQW9F498Gjf96WZEZR1cNag9dxfayvJ3CS",
  "key4": "3KWCtB2sP3w6mWHS3SwTjsAzbmxgxq17vPWibBG9vrWtm5nWmWGUuT35MvS2Xo3deHKQTk713pZmt5N5yB4ZEE8S",
  "key5": "TSxt7TyX7MU8v1AyeLE2abKTDn2VoY7mdJpVHuhfBiZwVtdYNeAeE1pmbwCh617EtAuW1pam6icRu1SR6rkQDyG",
  "key6": "4NJjCcBfy3t98MPVWjfBC3Tua64V4V8C5GDAJbUd5syUhe1dik1EwbxqF1KfFw2GZZumCXXM6z3xonLCrnR4omne",
  "key7": "NFPNC3sNEwkJsqiDwEPt3nBnZnyN7LLv4BnDcRxD3LSXd5NNG6Pnse9A7j77w2FshpFN913Guv2iEgM2bPqXGcc",
  "key8": "56a2BpV4mw6iCaojbZi7yDB297Xm7nD3HhWVGZnN1ndTxEyErzriwXt5R2Ke695xvbTjSorY1WbTs2WN6XR7uN1B",
  "key9": "4ZvRNCbmTvnMpaHD5DjdyB862KXxjX23vQFfkSzX631naH8WLVuPV5iCkY4qd5Q6jf3eNwNori4xoYwDMns1C3uj",
  "key10": "3ARFMA3UD8pS9B9NcjntziuaV3ojKtdRBUVvcmRyZpXPqLkj7jarRxXXahWTfbqTfzcQULUKmVFcfZ1XMLrz6YXf",
  "key11": "4tnAvdn9vR2hvmVATkU76oQxUHqsVEkeoLG3fbToaHBgAqA71CpDLEuE5vdvR8qLHjhHebSHtDSkAWLmSxNxaD3f",
  "key12": "3AEbYhyYt3SmpHwXeyERp1JLyCcymf8a7o9Ck5Pytw41CxJB9n1L5LeNJ1ajou7zHJdCziW2rYxYFSPmSMxD3p32",
  "key13": "41jSwCZcU6HJ3kYrixaduAr4iYHoAmEqasjcY8Dw2NXBvv8jiiXriNXXLsuncJgPj3LpZWKGy3qBijq7z1Bx8KcS",
  "key14": "4urB76Jwn5XiQeg2BCZ5HoEYCsoDjvfeitmigozundUEWgTuG6D7ccBet83UnnYhxmTeYgMEMrvJzXyCVZH9Jn3y",
  "key15": "k4CghXjm6GYQeWqgEss7cmgnNBqFkLmWATb5jsasGBQ7xdnojbh9j4Dc9rS2tPEjzF3LQboZZ2WP3B5MqZ1Wyo2",
  "key16": "5LB9XF9DsTW6PENmwyFyGDTQ5kY97RC11EyuKJmsuHW1idwRbYkydcVjopi8ssCaprQGExd4HTj8UxfDrPjRSWBq",
  "key17": "2MQEPhkL3JpL5zGqWFUmoqDD5q47BxKG4Rx1Q8WWmseBoDRjsDNQ5ZT6RByyQ7owHMsUV1HJQxokXoY6FfyLBacq",
  "key18": "uv64tnBdvdoqcoRmDfr8zJEPqt9WxcHeBZkn5VF3EsyPPctkswVVPjwrK3AoqqviM7HMnxJz83qBUwXx2oTE9XN",
  "key19": "9ddyFJKLuRPrk2KdN5wNqqpH6tkEd2mj49H2ZcFZdDjKmnjm3RBkaozYz4q3CLBc83FZCw7KPh4cXnErBZKzchH",
  "key20": "3HRG1uaSHxeeQwJdhVDqfXz93bKdcUdkk6MBK2Zo3CPqzosTaySNzjhzDV7ygyyehpVQYean4rW8hoj3UJ36zK8C",
  "key21": "LJp3etNEGNNtSStctYrsKSw3GWHQAm9inRHsAiCKfwbLag3oUvmtLAcGkbFUUmQjaPdHDNfVQvF7RwBkR5vk8eR",
  "key22": "5qaT6GX6UYK4sf6WCdEBGQKfistbyV4NpLxJi1bSbJTGXLiqP1FzN7QvGGQ6mVeGgT6JquJ9DtHPmtgXcMZeA48h",
  "key23": "3bi3d8kruKLRXhkHXjiup4Fkkv6wFsmHu16do4Z5iER1eNhyown4GvgEm4fahfCLdM9j4roUjR8aTSyBMYUkc8E7",
  "key24": "GGvnzJd7djJtfo5nrXeQKpEtEQ6qeuSrGsx265FKWB3kXKPwP9eX1xSqyVakedquNSMG2wyhZPo5FuT5qgiEuAE",
  "key25": "4Ld6hbDd1PyHxg9E2CBfe37rmj8uXNcqmWjMPErqfaHnVYxC3f2PeheE1zzbFrfnM4crozsZFdwzJkuEPycWtuBS",
  "key26": "NEJwqVdFCaXg7E52gA5Z3ntgCqz6rfD6fYvvmtjAsdfy86XFbJA4DgyKtBB5fELeAdttBuQTCieDVE1wXgLNeXN",
  "key27": "5ZW4eb5R5csorLc5CYBG39ujoAJP9Sb81pUd17wCaKmHLQRBrx5fvuthnqyja6PdKcrey5azb46xeJSHMngum8c4",
  "key28": "4qX4eLu8jhAYTnuTgWVyvQgEchXtM3meDXSg9ovQ1BBAS9aivfKsFS4E9WamRdGtsFkxwJUMigtaUEtrU8g6jmD9",
  "key29": "4fE58EHtqMuvTpEamwaFhVT5svuJJrR1k9Kr9oSqMXoKDoqbGqRCGPV3sCrDxuBFj8YXYe7RdVvo6EnihMWepUo8",
  "key30": "5WF1HdjLasHscuZRYr5dxC1PiUs2kiEUzxxKVZAoeo3fQbZBKMaKZPHVgJeYNQXAMGyxn1M751XZSF5KoZ2D9mXM",
  "key31": "5k1t6pxtcJPTGxWni2gTwTGp3R3yy9KRFKx11tSkn855i3SyzcptjtE2drz4W3uVvNsDExCGs6sBMMPXHzpJY2e1",
  "key32": "4HktPMGC1gjT48twHkqpqfBj8bsDjoX7bcaJQhhRZ1DMvuntJZ8XyrxGmXjuDiVNQBnLKVppSyrQSyGicMsttuZz",
  "key33": "54kAyvce9Hs5hRkpdX3D9jmJTDFmkDvjTzPwJ9cgaadWPZXjJbADt4oF5FpkzxEFbnMuoGnxfZTRxeYLKRaPVpki",
  "key34": "372U9b4bKPj9jnudUWmLn2naz98xgBXsiPqo1ysYowAGzQ2UNLRNSfLQ67v5L6aWq28zBnLnUSw1cDtvUTDrm4dR",
  "key35": "5vjtAvygmPnnoZ3oi9XfrEYwLnm1Ymq7cphgesdaQeR6vBgT2wq8YMj1mvaGLaKs8GdLiHQe5ry677JxXFVZQbgc"
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
