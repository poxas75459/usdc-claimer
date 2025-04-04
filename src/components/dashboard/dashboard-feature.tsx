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
    "5ZypnGmUQy61VM5stZcTeJiyLNBRw8J3xWSFoQQTE5WXQazPvd9CGhyAgyKUTN1a4nZUq4eGuWH7VFichNtLPSze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VnowAWM7k2pvqaj6p9zz1usCRCnnxzsetXeStBESVuTtYHxLdjGXiJfeKggkPE4sp1LJzVfZHUyNsYxGjs5iq5g",
  "key1": "3t6Gf6n9zSm7EQbJcrt9adB4qYAZGUfDfodB4Qjuyoux2tWekKBTRgeT36bfEK1vEqERMDEJjGX5TUub7p4iFSLW",
  "key2": "43dUD4UoPuHg9YiTmLT7vBYdPqm5jm62NmFHgwvXtymX5QwXoQRwzsAS414dmYpHp4JgcpuGxQmm1k6n8HeMVHnH",
  "key3": "3FTXbvybUYKyRHrLc1sVY5gdmmbDZGnbHbgpvMraLTZA3LyQpFkzacSL7JtQLrLPArigpZavhf92d53vD141VstD",
  "key4": "4EFWDYE89r27xjmC7ukR28wMFoWQ3pirYuAMXERiEHg2zsTfAYU2KoxWJZJD8YobUWjextSFmyCfpVoKe93NnJr",
  "key5": "2iQcPRAm3CNsNuFeTfmgPKxvryx9uhJprVWGodYo4ek9XUnjGRHH7RtGbGm2fLdD8My6dAy7WgXXFGTkuKEpXjFz",
  "key6": "63dBB3ZZBjbHyUgS4iaommPgPVXTB7q645LkVBkodrKYSQCbjvQ1oWWkixEVddw2NVMtgewYxDYdg4inATJapaoJ",
  "key7": "5bZioDouKyFgQdpKCyBYkyxdmQghFvsYCB698DZzSAC4U6dKrzVKMj8b1F3vbJb1pdS5K5BMSakcgcm2j45k91Gy",
  "key8": "yazCauCD3rzCKmawoMudS8qUe5PKRgNtwonwD9BQGNG8H9ZHBMAjV9WPurjvDtovRw7JBeFq5XySprEkArZLqvU",
  "key9": "39kVJs3EYFw1jp3z3AuH3MwEJjr2VfzrhSVFQWCdS8GqPi5J3JBPvNfMQFCgD6eVGCsxMEFbfBMQfGsEu11YdHjw",
  "key10": "2zRnS67RTz6nP9hoGb8CHwT4nFqWSkA67ry1CbKfSDZtL2YbRP5eFDoRzDvNB6vRFpFCCmovq34y478UjhVjdGam",
  "key11": "9KXJRzHEUrZD5JFCeqX5xYpgiVjoTRbXQfoA3uafECdiyattzdJVJhNdM9NsPd9LpF3BxrFhCFJAKNQwtZgBXzw",
  "key12": "444go1x9tXtBNjzvwx7rgHNXkrPZMPBJMimbApFT8sRVqBczzcyoKAWZQYvC6SFYWVmJjYoCP4i51HhhnwWceupA",
  "key13": "1Jrzn1MWDHL9xbXTGZqdE2uDryx23MS5cwrae7fcabBkYS9AMbyJEmFJNJ52zhV413kUbXdeMUvRYMkHHeU7Byg",
  "key14": "2d2bWuoNG4JX77Rg48aeogCnKd6czNDRXokhJaK1REZ7JVkcdKiLDrzGHCDX36cdxJkoS8ZKLx8S7xHqVQi5UJNa",
  "key15": "qDYLvYBmrJeqAoYsLSZws77RwZHFMfb19BsZqcswjQAuNNBaagiETe5qz6G67bXmYhSKhsxMRTtMBQv2qLWUug4",
  "key16": "2CAMZxq96DucMLEWqDfvsvdTeGUWrtKA3jwds28c6JfXzgK1ZJ4bhkpB2heh38Ndu93ZDZQp7KhvsDRYyQRYXFRD",
  "key17": "EEd8KfCyrNDCuoBtdsT5BF9LvtCBxom3MX5z95g95dwVeZgp9eNyMNBCPhhVnsqyNP7HZ9dZ3ACh2ZE5DgqR2o4",
  "key18": "4U3Un7nzhDyKby2ANhuMWfZ8UwqAzExgZQig3yu9nNL5XJ1kUH4d4nWzUSoYjS4gcHU7yUcakwiGDzHgsLYeeNF7",
  "key19": "35nA3ZqtpHQNFe3zLsz7yiM5iq5tDCXeeH3vi4fxMYmWtNXiCpRxcDNg882EjTiJ6tZPTtDhPGPJzAqQxAfffugy",
  "key20": "VSnSE2xcv3hyGxgM37pRt1uBtQ9gWZCHXvFQ1vkUNE891WRsk29jvvqM9kohTSJCMbbhukhbAqp7iBjSYJeSSfh",
  "key21": "NTJb8StZTPsRPE5CsE4GzYxwK87id5ia2zzWSjXYVkT9KoDsSQ3bcGJhfseB6AG6T8qrY5D6NZeEDmr5ThPWSXr",
  "key22": "2WdR192FQ2cBW8h4wu4J6QkAhT5BkQe2ZoVFB434MyTpsTcqjsJs7op2xWAA5Svi5Lfi57kAQ8jJsJed7ZuhXz75",
  "key23": "TBe9shVvcRnTuFQtWCbsxpHseE6jE9Gf71kv81K4dQit6hvkqVEaFwD2dfpxnukPC3AiVTCw76Rw5ArcfgZwwCY",
  "key24": "4etazAPCpQCSysfYXfTNJ4eVX7KqTAq6Eg5QYoeuYCgry8KzqrQwUURtSSaRUVtV1Z1SBCY47awozWeDbTVSbYJR",
  "key25": "v6UJZZom9vNTLkkuhxwVvTZzLHmr6ktSxJkiQniZhxEjPPW4L6iELynQW9dYyW3wb6aXuURcj1iyYDZUbT9CxUG",
  "key26": "2QSAa2EJPkXpuBKY8BqHo46vn6G2wj7ypTMSXmpif9BGgN2p4NnfQWm6rXC9TWU3P4FccxnFCvrKRvRC5JFgz9zB",
  "key27": "3CoXNvsvVU9rqKdXhHApbQT7FpUfFD8QNHu8jDV8aNPWF3SixGhgFkZZcfjGz2B1HNUshWTzwfoTBbRZN77c1XGn",
  "key28": "5dQfqHR3iPJSvD52dSXC1gKxeJAJi23rkNVhedUaYiBhySuBptBeS5Af4p9qmTc1bPKGnderaqUigWukao3YGrs4",
  "key29": "22NhTs3GKHbSEvEJpR9JgMhjf3ufVhCvYsirrZZyvQY6eAo2rAhMugZzovB66cs9Y7VRJzJKAmy9mceqgrD7TEMQ",
  "key30": "5gYtCcbvotKq34eSpAowJyXne7dLdSq4RAm65ASeH5oxai29pPtDvRggrAAowPh2fwSUeVRgYMBi6Kp4GZ1eAGh",
  "key31": "2HjXbqAyqgviHWqemQCM1kSx9pUpcEUWSrDbrqKLnUUqR6kAizEBYjNr4M5R6k1zwpGsKwpFoZ4DQt7JTPZ7pjPw",
  "key32": "3AwmgERnqzhsHwU3JQptDfMBkKf962oth4p4wJUh9xQ2iXqd2gPVKbWy55xuvpsW1ryynXccdvhGtKWpv3k4vYMx",
  "key33": "5HuTFq5f9EYcarjFGy9bZV5BM8HWKydvohNMhLJErRX4jMendHZH7ptsCneweLHGxq1BqWjdHUGgUgMpvfq2jG9r",
  "key34": "524BVjMAoG5NHxSeggq7jJzuGdEmDyJ3Qq1sphhsTX6EEhzpqm9X3TVwXhj2u1dw1RZRTe96BrmuQE3Yp5vxebKv",
  "key35": "39ik2C5pQCN3CgHJTq83Xy5FEDZhRYMS8C12cQZ2esCr6wLFwM673vsC4vAsKLKUSiLKP1SQE1EDQu6VuA6DKPoh",
  "key36": "5vgRakVUHWTcuVR7cKXGzCjeDhN5YyjeuyjxqLBKpSMZnxVWULX7TbX43pMCT14UzTaEEeCEPh9QVWhzJTZgv2SA",
  "key37": "HZuKiFSdrGmL26Lt5omYriNy5bjbMNa645hSdGKpUEd4QgbWjKFufBfJMQnnLWtpincH72U5LtHrCEVqm8LwpTV",
  "key38": "2jHENdNCRYrdkTzsgVBuSWsJyrMhpp6gx7v21eBvsxtF9dZAeGdBoMF5tPKKWTKR6eaAWmGDGS7ca7fg4LMpy5vE",
  "key39": "5Rv1BHFsKjZasLj7uN7brH8B1QVTwK8Y8Yo3vZ3y9Lou4veUCreZt5jJsMduTZyuHU9bFRo583mXK7PQ1M7RN3xS",
  "key40": "z4vuUyQB4VQGQKXM4kAZrAJDtYGWGJP5nFsabKRpD8UDXZft5ghL5bZ35KAjAWJPQitVzTmyH3MsadcZeNuaHnG",
  "key41": "3Xr1sTNuMFH2hYR8X4VEEtoVpDq2Kd9jwRweQXGk1wLWqvpKxYJiye2mdhwwsDxVghohtSPXv3ttGRTp3XdZhVpo",
  "key42": "4zmtKCWzRqdztsxMTjBjXnguqbSG7RtXZhdBRtsPrmjQa9Nb6QVjEwXAcTLMpKB3NbE7qzPM5sa9RTwcLHrj3nQi",
  "key43": "368ddGN9nQSrDR6ckfm5YtSsguomWZLn2KS8KdD9eEs4maFiNM6gfyW46mpKtaqQk7WtHorUjiFJwevi9z5vhsZn",
  "key44": "3ZrAvdokKXH37jDq8AbiQP2UyRHH7VjqQZs2BDXWrG71fWdYKoU8E5DijRD7fctBmwZzeuDStWgkUfrptptZQVJZ",
  "key45": "5AfvDpYtJEXmQSCgqqR6akNMKXfkoo2mzEK1azQ7brpK5CyiA5wRM9U2SPYRfJrEMYYnsTWBZfUU6GsgHWTWbZAT",
  "key46": "3BqyfTeynu2gYBfwjVWBev2mp5hBuHFCKJ6y9YatPRnLCD96rmqLTAytGRKbMptS22pJxdgrwXcx9rzAhMLRF2TZ"
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
