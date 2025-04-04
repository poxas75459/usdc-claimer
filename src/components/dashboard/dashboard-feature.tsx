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
    "59GV9VP2W24ERMioN4Xr5WYW543p2Lh5pK5e9XbiS6ApZhwkFCT9MXgudfEHfmC2RdU1R6tsxzVrsqLJQMh86rQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WzaohckSnhEcDdPUQmTKcXNo5tkh37cFej75zrEdwbakxUYSKdRUGCjRNg6ZuPxxuJ3cu12JHw2MY4NsfadBvVm",
  "key1": "3xeXqZFxHYyyfJ2D1hoywf3BG4wTb39Ytq7T2eab8GUkRz5oqctrnv6u877XQXVRXmgEFsPaYxobzKvx1tW49f6i",
  "key2": "3KwMBaersxrBof8tsD3wTdnw8S3DabMuX42CdFZucyX2Z37cYmWoyqzwQvD2Bzoe6iTqr5A7M9bznXKFnejVhjPG",
  "key3": "3UA98rbpVyXq64Kajir2DnZzQFj5dyH7bBNTikaJJohuBzCNDJ4hZduTuwiPMfyz6egQWcr3GrArRQpDg1Uy5txS",
  "key4": "4ZhjuHN3VFyBLLUMfpGCV4A3xdnxXyYaTHDyMCa8VRbYxfHGK9JRNN4WXa2KDsVpJZh3MeTdeyB9vBZyz4TzG9HB",
  "key5": "2czEqGr4UhgjogBWDFr7JzYqgerJjrYyq9hTRpozL5AWYJdPSkGGuw2hURLwGiLj5TPMGnPDPAUrME1DMUkdwEe8",
  "key6": "2fmUsAKAdVbGrWohCWXdNXbuAiSBRd6yrGMTLnHNM6h9ssCwPKwcR5ZWxFUCC2Xq2SH3CHzhs6eF4r226c4YKXWi",
  "key7": "2Yv1N4MG1PtkdeaRY8d6khjK3kfjbS74meMMKSxvbLzBTHLr7gAE1kb6UFpUh41Smt7wFbnTTp9j6yM3qhkQj3Jn",
  "key8": "EXG3v4Rg8esvBdTxbHQZoBiqxyuV9WuQkqVfHXAHjh8dDx1wpMHF1WiQopvBKAG2RYZ7oeGAb5HMf4e56EbvYYe",
  "key9": "3gygr6uqFWwG6o5Amu5tucLNrx4t3eTrwyHybfZwAYV4HLV39VuGvUs1H69yZiM6c1dDdwgQ4FyTza2t4xVacnSk",
  "key10": "2WgwK4saR71nbaF4qkYdegqFP59VThcYuDrbPcp8TmVniiLoh2rabg3RRYzt2X1sWDwXAMEyfeRWbQzoso4ybZvr",
  "key11": "3YQWJoY3NQ7DzvdzC3KhQssyW3iWN86JViaNYAJBjiA5RfBKhJoY6vzMuc3741w5HRMxbbTdaZpL3LAYniJrDUub",
  "key12": "2iH49JNVGR8DRgJoqD9rVDogmAhirrNcfH2vW9i7bX6j11qGDBMzvMcLkJmWqdKkXDVewrxa8HBSqYNVvxVMLQ2g",
  "key13": "4yeUqBBLaD9c85q2vS4TGDmZHdz8KY4FCosTnzgCTV1cKgX9KoZBe8Wcz9WUhszBJXjKEe5E8fQeuujSY6mudv8S",
  "key14": "5yuv7eGYrzwgs1sdy7nzjvVknjD2XREP9vzkPEUyAD5bnQeTfFgYE1rRhVFvEVKnPhDvJB94iJSBYXeCuckgBvER",
  "key15": "3zyvwoALXfrhN7KAk9oxVPii6dWHqMDgA1jDV1Tchac5mgY7FEdZZF2x3gYaiiHDgwGHfG7WwdAfnR1EccJAwYG1",
  "key16": "2nSUSFgnMaCsYW5NnBZiBXc6tKS3ywSPxb8mQwobiJUTnWC5koc4HTxkBMoscWk4JmPFfN1ajDPLYnwfQqdeQUzU",
  "key17": "5P7sdoyYBHKyhF4Mt56Bxj3rxZVCTky2tnnxcUGKm2Kt68pCoMYikgCtYgVpVu7Q4tYQfMAUDuHpP1kGnNGbnWh3",
  "key18": "yNwSXradLBzsyP1acaR3c7uqWqMh4TKcc1Z2RNd2BKXHAjtfi5mt6qDLavqLzegJo11qYtiYyYfZnsJB5HxvDCx",
  "key19": "3eVZLV6SZqpdEaxkqWVJ2dFxVZeH6FzhghrH3c2DP2E6kXwuGicLfN9rM5KDWtrz7DGNesjBJJHJofw997dz8zrw",
  "key20": "2NSheDhqBqkwnawvhkPqzpBTzi5R5K3ojK7wLHkAwgpK3wNHTD5JVVrVyVw3TDypeVLujeBmktjJRPnwA4Eb2pji",
  "key21": "5wyZyQcXefYEN49uD2LdTdQtYjCa1AHby6YVXpWnmpD66js3CNDYytxF8TSsaEp8B4W4yVsfjdDHkTEBNdvdvXAZ",
  "key22": "5FWtaFo63SSpsr2BVWXYZQDLSbMvCUonBKwWKemZ7pYQUkf2gkPiZfmY9Gbd9GmDdy9ALtwgbiiysryMxPrtL95k",
  "key23": "3VQYG22rEB8pxcVRRpowmLcExq6BMCHchMY2M8eJKjy6xnQii79mTcxzQKnNT5oHGBhVNSmXJF8DrFzzm366pQi2",
  "key24": "5nbCr47S4mkrmCct5JkJXGk2HVWnVwVCHzNab69pzg8Ej9uiNVKVd661NrdNXVAZCTygMGCKPWFEATEsDncfEfqo",
  "key25": "299UcFmGAa1UkmYLkT2fHeXNchetxCoHZ2wF6SJeJ5JY3s6tkmUFf8n1q44fGXgWnRh9z9SkCCe36VwvUpeZrsnw",
  "key26": "arVuaNf1Z9vaKikGmL9f4m5MqCGJx43BCMiWejyP9pyYUECVMiq9MacowGmuiMkhouS9PTzQFTfKzb6fG498UrK",
  "key27": "42FEDPVW4DmL9torKCyymmmNvdfxqGtBfozXTYLpbLqQKGSuqBTwh8HNvFJgN5ubyiqrGwxfSkbRi5fGAm62JkAf",
  "key28": "3jf3Ay2p3S3ToEcank335aMX5u9ey6GZK4zpupbbjQ3cWTtckp6qJ4XCyEqvNi8jBUjPLoCNxtgYL6QPUd5eTCZy",
  "key29": "Au7kDNo5WxzJc7htixPknpzsk4aHuFchvXpix76t2bmsHfTMo2naFnvVGRhfgbQopkvc9TTmRspw9bWq8vzPJgk",
  "key30": "3kgkJ2kJbwxY6okE4dQ7xtgGSqrqLu4rbCANp1dYyNtU6bD1N6k2MLbk1Ub3EmC5FcFMzFhUSfVoiupCxSCHLek5",
  "key31": "3VYCJvkED4LQHNFWA4Qjq3RWmhajoyKFiEdiP9NQMELKGxv5aRA1h6HfnNBT3Dea3tVVTZ5WWh2PrV3EtTGoEfiq",
  "key32": "BAviNiRqaPK869D48Zg21KKzGUzXaJHv7nUhdiVEKqa7JtGSN9JqXzCsv9LVSJq6FbnL1rXManreYoVPYYafuWm",
  "key33": "mCcPXeEje4Bgm3yLPTMCDPrDnjuQHwAAzMfoNti3HfknAJ4sFJr4aH1kq6TPJfvSwwVcENwQLtqQXppvhqoF3Vz",
  "key34": "4o3gjSwukJYtkcGA8MeyBzUQGVfmtQruK5jo99URZYWzBp8ro244asUCBdv2o2NMQ3GetpDc86d4ZtE89sVaBskP",
  "key35": "4Avq97VXfpC4ocvJMnPg37oAuhsihQUG94w9ntm75jihEtvfjieLTy9DWBM2NiiU6SH38nSxxdBaH9df1AHS4Avw",
  "key36": "3nPsjH4a6Pi46L4wSdGQEVboymuTv7WqcqbZmJuJREpxTuQbYAYPnpsByw5dWdBofnRQWByBf7RmAXio9mAXqKYQ",
  "key37": "miemSCigBZjQBEJf2DqQWU5smnvox4nxwtvZtvv366QyfofjXwPWubcRq8VBjmrnj5cS1Ko9pU2m2ERHuzo6ukG",
  "key38": "2eJ6rRTJvRnhtBbousKqtWCmpxsPPzCsUqqZXXkJLLTdcjU6PtL9X5ZC8G91GBRt7WWvxozej7F2UqP7aaK6YUCs"
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
