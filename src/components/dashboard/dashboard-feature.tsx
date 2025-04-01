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
    "GqJyLneeQURPFbZB4w4AoKLTAn921qF9KRrT3bsWeuh2cKcsauVScT48XRgBbnNZXmAkxxu9YkH8LuFCVpPhv9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gJ6oivtD5AXNAMKhjhGgiqPYibeBjexVAoAMbwczLHhGLDeoJv4CFoKApShSpLjHfzWATTtGpebL45ABQuMXwaj",
  "key1": "5LvAZN3av7ADZfR3yJcZBVoMiorMTB7vxaVSPoJPm9bXjHn1cM7tye1jgsfeeSTz6bT8oKYA8brBy4s4qZduatnC",
  "key2": "5AxwPVR5eABgH1TpqEDXLwogMf9HvspgfYrxiaUMfa7hge2V9gfqdKnkxcC7pmXVbcFJ74EG1fB3EJJDYB3US6YX",
  "key3": "jy3DzFSBGYyYJvxTVRixKebQj4Sgx7qXxTneeJ2iuduYLts2ynJv82RQCypgBTnubdKmWvJXkB8kfb4WUKU4uZe",
  "key4": "3iQU9d6YdncecctBDYc8ot8KhVAP4uNAxe9nDyJNnCHBkGkZD7hEXwZTdff83EvB8yhxz2tnQezda3vREPVeVXXj",
  "key5": "3GuZoNxMGvrP2bYcHvdenTBoUpRp1YUHkHjn6vHwUMqM8Q8rf1Ey5SL4CAzJcxFjSkMwtoppLnxjM3hDm59hLqYR",
  "key6": "5CtQX5V2BRGwqRcc3SWnyex7B34kiRGUC6CJpKs4HPJ2pxyQ5EsHRMHLz2xsAKY1BLbyexnnGRhFUNXhdqqEfPmB",
  "key7": "4v1CBwszhaDX8Cwc7EWWT1g1DB75tez9gd2yxTWudirqBpwGS7Z9tEJe4VaNj2nYe67UZQ2juA7QJHA9QPqNLgWb",
  "key8": "5Z66qKMrSz88zwKnBPhNGWQSiGGYwHYmanzVYtTNq2VMuXo8L2Hpd7SafsL8VkChPNCYpPgFMaT6Q9LT2KfwgZjs",
  "key9": "416aYjXoNVi4Vb22hagv1YiZNxej4JJuL5RrYC9maNUECbnn7hki1gVYDYfcCaqdFdAiq2WubjCNBJn2i2EFVLTp",
  "key10": "41ibnhb9a66hhWRjpwPbzPqgs9zRppzsYpgMXTb9P69TFVjgvCXAgsX3pLuKDc4vM2bBUS6RFLCQ66j6qhMj7wRH",
  "key11": "3BjXQ7jcHzfyjJq7gpgzh5NyEapoLp9rzVEhdSYtqpX9MnBTQJRFeCMP9JnE283giQGXdQecD8r8A5BjsLBWfBMz",
  "key12": "3kRKcvoiosWHQcZ2AGCFjFnjfqMgMkmwkj9D2sfMdZC5Xq5PjKmT3b2reZY5TfNsWSd3bMbDJeDjVCJVTU5nj3mj",
  "key13": "2K6cMhPAhqB8aCEKvetGimYucXM6XqoBi6bzioMkg4UAuheR5CS3pciyKgicNTuH6zqHJfu3Bx2feGwePUV9aRLK",
  "key14": "41EyebSZjATNevCFG6tWjGr4rKBjfXV74i6zdBWaekznurFhsA4YHxtvRS2SeSBAJHuRvYNkL91B7BUR9eBXGJNq",
  "key15": "EGpo2hegCG5t1MQCd5ggSNo8jCKCZTzfZWhPj9vtg3ns3jEdhiRkWA2hBzny8kr9ASBM2XfrXQxXAJJtqaYMpZD",
  "key16": "4Xzj5o93UfVhy8SsM1HzsAwMFQKUVhNWVyBZjthaoTatZY8kmLjZd5yNCMemrVLpyLgn6jkfUCatdBepBqGrLsfx",
  "key17": "EDUHC4eCCBaPhd8SumSQukEPDABzdYReEWuJfdLGTLuGBi8ahpsaFt32zr1XKGpivkS2Px1GhZyxqj8BM3MWnoh",
  "key18": "4wm2stXxvJq8Eu1cnJTyZ3y356oi5ehH3GAEw9kJhLnsUUP3sdTXB2keYrpVvvCJQ56fyhRGQqDTcTBwfabmvaQv",
  "key19": "5Cyj9cMN5aSG2BErQMsxiBhAeyeyEMCqfJGb3hnnJms7KBS4QBKsjqUcfhSz6fEBtkJfLq88pLoWDrpERuHnfpea",
  "key20": "37WK461T6bPSySAfHPfdSv5Xeoxtsn3xPLgp4znP18weaU6bdpyaDsCxa54fs4FVA7r24ZyrFaJ5mqgW9zA2TEcp",
  "key21": "4ewTpP89X5789TPG1QgWaCBQSCnabvCWr2iv22kyqPifkPvHKuBU4MxxwLpVL9U5sCG9iDAdFa2qq5g1c8hP7i9S",
  "key22": "4ZWcbzCtK6K3f3bmHfdnFZT9Btxc4UtE354cnRqAbaJfquFMH7rwyeyWQC464UTbNVT3MJaKKYNCzgLLWmTtbkYs",
  "key23": "2bYyaHXMiAhaVEURMpDmNRduZAZu9rMej1Bpo275x9GQVGwc8smcPeFoULbwbSeUmTkBZd5jNdQjzxuvbjnm8Exd",
  "key24": "bmN7t8T5ARRnLJrcMxGext7DCbkENAMfxks1Zx7oRPMKsGXnbKvZGwebXYt1KLdYv27SRySfAanfHadXsKrmm7N",
  "key25": "3CJJtpX7rM5xityU9TTf1Ga5AmYZRMYmyGu9EZC9ooDq359dF94VWm2ZvWRmsAt1GmYRBhW1AuLVNbG95ofewcEr",
  "key26": "CRE3E8uqaAxH4zVtjRyy3vdJSuM9czHB1usXxSWdgYsZsTyH8AzXB7A5m9d8PLENztpKtkZu1LWRMHw2kFfKRHf",
  "key27": "3oXkyTkzbYvUzXWNGmRdPTrfPkeoHSuqofnzpWJ6nySkQXiphUPNXAJS9dKPcdqbaakhcDtmXJb2zNio3Nxi1ijv",
  "key28": "442YgEFTjfPjiG7dp9UDWbKT1n515KrwTaYBX5zyLyoow3sYfQyJ7Wz38UogbPiyVzQW2g9X1y6Fniq1Ws8NX4mY",
  "key29": "4e3N9waXWJZ6m8qTR4VLmzZfkcFNkvaas9hiTQXY75UP5gxowTcpUuLcLiffKEaVumhk1mQNGgTfgwG1vHgtpLsu",
  "key30": "3zU1TcAGQfdRxuMrkAbz4eevdtW8VhtJkDRg9Yh93i5oGBcrmr7qrQF643G5mJnuXYEea3Bp28hYonKpYLW3m9iz",
  "key31": "3eGhEWfvaqngnEmCvunvghotT4fWRVeswZhYLnsyF5fDfoq7m1Wcx3csbaCmiinJrfejXJLDt82sHPTCn7tqPmHr",
  "key32": "416SCH4Y32erbstvP1dxE48evwHD6DAfSUSnxPmPiJN2jvHqFvzZZM2Ft6iHYya68JLQVvgVHSeyd1zxptxveUWQ",
  "key33": "2CLjW3kdkNUdmxrq169xDQ6AD8GMCjVePDnULhw7VmAK2g3tGimsX3aiZ6jJGESjTk6Zad91UdJpm86u2uCDnwbj",
  "key34": "4nSD4xHXa3SB7dcth7GzFy4BdGpFB6mnB3xpDuDsfjGAnjmcXuc5oCJ5dUDV9sAGiNv8zHEJJBZRL816z9sNPBGz",
  "key35": "5bA6X7hd4eeYwJzS3Hz6czAhbHTRtR7fqdDLMnkosjAEBnEc7BigQ4Q9xQDWCi6pwYJHsXSSZyapLKLKRQWaeXBg",
  "key36": "2JRXisVjTBE3iJqEfnm8UxHHqnRmBqC7cAut5YdgT4qJ7t6nmaAoPonbCBTNSTLdanSaKLyU2XPqkCVhGf8uzHs3",
  "key37": "3rr14VErpFpEbCcCb8ZSBwcAKw52U3ipVvGAA7iQNSYrQe6qhHLu7uVyM1RmH952pGBR1i3J55YZabGHDFHvFofk",
  "key38": "5LzonhtBxbDRavpkg36N9ba2uqwt1WfqqA7XU2tRJFrwWiiEhJiHU5wCYaeh8ZrmasKbLnXpzBaT9P1zXHVQqbuQ",
  "key39": "2DDsdvNm8xHb4RJpGDuSe1AGHW3D5BDy8uxEsaZ2iSxcyKkBDaRrSH8wWubmHqxr2YWXmjMxqkyqNeRT7pAUBvQ5",
  "key40": "5q2nsdbyqmD1DbDRyvkmUgvPp4UzM6tEZio3Uz2MR89qHtJmqs7NpePqJGm8CuttX2ZRkwJ5nURBJhUXJniXBVRh",
  "key41": "35FnvhNCUTCSUVsd3hwfdrY2aEceJVXv6r2e9FDaaRAPymzJ9jVRQVWVs76F7tGKFT7LsbMG5npDkn9rE3g7NMZa",
  "key42": "2HRbW4ZJveYfttzw2RqhFA7A9QSv1bP2qZ3u5wBeMjD6iozn2SscwVqcJzoK7dSp4mTBJUtQYepAa7LM1JRM7iw2",
  "key43": "3DNYf6wiwkXSm4zR4JXbjma4jjL5BhjKC3EUGQN8WuTm8wyRW7H1ruCbu16GyaqLXVPj9BRRPAATJySrgE5C7jX6",
  "key44": "57MzXTSaDLRVBJtk22z64AFJW4YKGe2r7sb677YEmc4AnvtZkCp6XhiXpYgR3dieF7b7CwtiTk78m1nV4zMpYiRf",
  "key45": "2hXgk49pfTDgsTjaWZoa1Vahzr86ZMPqGq4Y4H1fKuUDEytngF1YwuReo89rwTaB1Rq4STkvxRbbsmCgB65aFDTc",
  "key46": "3Ro5adx1FyWEPGR2beeNv9L2cCbCeMgayedj8yda45vvdqQdrJJuu27MjPGkKccqimmHbrXGH8J4NdPT8ecYWMgb",
  "key47": "hh332Ft6ukgedp8paiUUcrnaT243bQvcERP7FSusXKsrQp2eEPHz7pT4rpkMqDNrQZnjDjiAtk2hdBkss6APddD"
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
