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
    "2njUDoak5qCFtBCNEqJczzWMxtXfdw1Fy2bXwARfL1u5ybmcjdoNeKE5anMunUm641hx1goDP2U1gub3tBUtWVwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTfcathahWR4sZdT8yyTWMndtXwtrUkcDGyfJxNpb7sMsJ45qMqDwmcdeeZnJYUeajWzYX7EZo3jiTMbQCSB9kC",
  "key1": "214hcMvHKVMiKFnQEgbqyjFdR6kMsgwdrDnFipfXw3RN7txqgmF6zPbPyucuDRuRMwGLQHds2rNJfEbe5KcbNq4V",
  "key2": "4FjNa7hbmsgz16pk2zPEVYXjGHQiVL91Jbstnm9L9cAnj8bWx6oiYNPZBdrVML3SsHQwYkVvRbYo6h6BHzvwkFt8",
  "key3": "5kNKZ73hbkpVwxvw2PQgogWijj9dGs1YQp1KarNisZXkAQReczZ9bQSMy6ZnPp4TVJuhg6RCeuMx29wFxrHCCo7L",
  "key4": "2MLmmgAdnxuWvJwrQu6Bu3mcSNFLysBEE2ULBbUKmGeRwsLS9vQCyWrQLe4n7dEqrx3ZH5PPEN69KSM93j7e67hr",
  "key5": "2jfPhWCrfbTnd78LdYZBHziUDcixSvE4JUXfgxNZZrhkX81CC5LWKr3stfsveJX872p5vAeibiV4quYH47hV32Jc",
  "key6": "34zRXZihejPZ9b9ihow9p4B3kZSq33E4wsHYAgrffEKWEcvFS86bcAFS3APMctRYL7gMgE5bTgXwSaEydKLirTtH",
  "key7": "3uuwqRofKrpxdLhwKFujULrbbA4QUCpBhjyvLiZeH8bwJWkNiwcEF5A4cxcn256fqWYApsv8eYAkiduWzP9yzfbo",
  "key8": "4XcKc1j4MJNXwo8Kf3q1mQMeCLDe74q4xbZikPGrezEv3rDrpzdDeYTw7XnyC3Ca3tuSDpRNWngUZ5ZfWypsvzXd",
  "key9": "3U9cR4vLFeinaEDaneqzKF7jJ662YszcVgpEjNZLa5HSqfbg6pSV5oLEK129i5j9E9Xt4XjPNq9SshsFwfkPeLFq",
  "key10": "3RW5WxgKSn6drLheV1xNKrraPsG2CkJEyosu6Fkq6Y9fwqSbn7JurdTVCStV5NF2sFfcvuJSABJgHUv8rroz9aEw",
  "key11": "4AA5jGGrVS71WrQq2Rs1sKXt8AhMMQgth7vvTnfZsfEKMikqua9Xx9Fsp2z7mm1zLENTNHSWsxdb3ubD3A1ckh2w",
  "key12": "233coAJKfkyx27YicjkngMkANpRCSS9m3dgT62FNwdAnkKwBjNhJUntk3Ltmpfv3kshUhzzEjcrTPWNjZymgZV9q",
  "key13": "2goyShYGR1GFf4s4rzXePFvNU3iQDqszVH5i5WSL42NZWLRA2LzhMRir176HF8Xrry4nsDXAitfAJV2ajFtqJhr2",
  "key14": "5yHZNR2dxZdw2VWEdpc4UBouiWsZ289qtUnKChpFPDNG9Mqjfi9CyoAiZEVP4kFrk8wCFfjsLESAjcRuYE9UseCD",
  "key15": "5iBCS3MDe9P8rrajE5GeUxwaazSPreWZnV7zrK1di9xr9ZmyPFaaB9eE6YmMmaj1oaRCzmPng6xT5YKXs2fMYvp7",
  "key16": "3gB4DnPGEiqqE8i7qgDdipnMMk4hioGannQtNj9NkhtsFcDrqDbHJzuNNiaESRvwyrPZBNgysdLVfj8s39qMNgQ6",
  "key17": "2DkX4abVswaprKzrukqi84JvhJFpdKhYUh2mbq6W2vwMAhUX1mZDRviD2UrBA4dGqq9QcnuwPVXFSA96LRMj2QZC",
  "key18": "2VSLs9HkQv4wjdLK9PJxwt3dZWnh8TicvVo4tGsRrkPNW2YmkRhWKhqFFfH8Pe3phxoMU26TTsUyAzCk5tj2cTFY",
  "key19": "5U39vDR7xwfgJAmozG6p9qwD3nXdnLzrzBzsZzsx98Ha4d59RragFaQgnpDC1j1coBafx8D1NtebBKKeU2aJ7nHs",
  "key20": "4i7XE8Vesvm9SWwTssqjV3hH9zc99r9d8kkzNmFDET3RkFVv3XNZiffRLNHrUTe4HavmjFKvkYhmVoGQc97Rb5tc",
  "key21": "4QDLBo7CF5pNF3QmhqfU6C2Fei9Vktifrno9ztprsjdfiYSMUgoVhjVfYuW7p9tzeGcgjYuHV9N7njvAssHuhU7r",
  "key22": "5P7rtenhxnRJjCmbHSfGneVWZaEwa383vpAL2fFkWnbyS9tD7f3XMDwmWQvv64Hv9HCaTSZH54DYYXqw44SCW7uQ",
  "key23": "5YydLfmVSGCLysWPyYQk6VUvJpLBSux8xCCuXMqwcDqNAKCsdJHHfP7PntzVz51U5Sd4fWL1BVmBGYgqqTRqz47M",
  "key24": "5qVkCAdiuRs7gNmDoZN5fESKWehnChaLpH9Cw9N4sYvvT8i62MUauYkXU9hLMJic5dW1xM3r3eVcqba7399oTVP7",
  "key25": "4FwkRj2UNKE1tnk7EkjnRp5SyDscSodHZp7VXGDe3TUANiWMxz1fiq3berLP4uDeBCYkYKJMdRMRfG23ppNRz1uH",
  "key26": "8bvdYF6NAorpVbSkjnt3vm1A6yd8gkES8dcmXdED1KFDmu7X6DtNe7hf8w3Pv5efCHXLYgPGtgchzbLGMs8F8FY",
  "key27": "2EVX1iyd7dcz46fsgozoNnbaPtZruuFnhHH31n2GVtD5cXp5bSD2xroLMpqyCVEoweKQcFhRpM7xjoDyr1HZJ2gv",
  "key28": "MPUqQtTeKZepXqNT5MhVNo1Lfx3yohGia85mL2qToHPQHQ2bzwX1XWeYD4fu7tZL5gv7GLmMQCsBM1qbSbDapbv",
  "key29": "5VjPvk6BLDK5F7F2g4GXo8dd4UjhQWJV9kkxQAeHzn3vR8A5SwRwhBAhttPdU4Sbn3Z4pgzwNbaoSVneroAfnEXx",
  "key30": "21mgwYUCydK154i492Ryp1X71KyKCtsRYTpwd8522DhTUgJbc3638N8d3zHyL9872FP8bKuaRTLDfKZrgquWAN7e",
  "key31": "oEFiesuyu2oa62yY4c7pnvPEUbqpJbGeN3KmTxyMSavmAbMtKjD3ujErTM6sGkzQQntwKNetUnesfV7Gt9YfoUc",
  "key32": "2fiRoi8TrZcL2bHDMQr2KExi5ZRm2DpXJVUdcdNejrdLXbzHbvQ4uBt8KbfsamkeQ6B8YtrjWyaEd1VPe7TYCWsd",
  "key33": "3XJjeYarUuX9x9rQKqLFLc9aQ7EjJuXDE3vAbjV4frXHT2P9JWKu1LCSbBaSbsoKMUvGG65BsUBDDoYqS26uq8jE",
  "key34": "5dxF8XrdpwgDBaEbb5aj3eCsXFZz4JirNNDQKAzQz8oBqFQCMTYCQMfGL4wtytevTxWQgjSas8tst1CgCdEYsFqG",
  "key35": "k1juu3HBa9L7JKtAJwgYFteKRQYsfXhWXVgBuzAJAnH5Z6ErCkjwkFyaLwydbvfCYEsJmr1cJbBz9LYAieLkj4B",
  "key36": "gUVJRmkRESsY3w4W7vSQeo9tsk7HteuS9JHm6oo6brPdfR7k4u9kRAEWk2VZ35f74BkYd25ReWcpWspoh7318Cy",
  "key37": "5C4zMtgUtYp8gchKj5dLHFVRxkkFJSHZ6JQthUoQw38VFFqFyY2YzFqeXMDtsCo94abCDThuKnL79MEUvFCnsMZQ",
  "key38": "3n1w4drMmbR9at6yCPmzkve2SnUK56MYjaMMPgRFzv358hqRRYYH8gQDdiyx2BFr3sgNa2g5Zg32EoKnfqVkUHmw",
  "key39": "5L1FtJdRtWJykRPQ1gdeWcuGQnXt8XUas9dGXT7suo6yehqsrtAj2mQpDPZa3a89MNFjUnk6HQZCmgivoH5KLHyr",
  "key40": "2LrqveLPhURMZ6efW39TMNixrUJTgGcGywf4ucUrFKq7D2NCRPUyzF5Z6eb2s2LpRPxZzU7RKGaNzBrP4aaBd6Dg",
  "key41": "4iynpFB8ps6ouxxsLmSaeD9aWiZX3mTKqTG36h5Bx52HpHbyek4BZzNNeKS3vMJbGez97B3hmwH4RbDerMz4crgd",
  "key42": "2FTFFHBKrLUJrjN2bWBojwVYKuxpM6mr2k8mWdwd1jbQ5P3tizzygNpbXmkqcQe64HsZxksZJSFRgm5Jw174fs5F",
  "key43": "3YSrCd42TucJrzRh88V9KQYsvXw8aiz4GRpQBoKeNdb9hkJByWz5XbUAYjbmHgpFCiz4eRhd8iwburwd991pAHUx",
  "key44": "3cD8Sx2pAJ4e9bYSU5aWnGZbjPZMHu5jQvP8d229TEGPFcXJhDppUmtpTw91g3i2mHFmiqbiDpuWjhqvfQ8Ni2ct",
  "key45": "5mxskVFk5oqCt6zPSSEBqJ1H5BV1hvM6GnmLwSPUCxpmBTbWZvS6tcnpnUXAtf8iTF2QFhoYCPsDVXxaMeHWzsGE",
  "key46": "32bKMFTytHdUQfY82L6ZZAH8BePfGLaVFEKbcPP5i3bZGjQxSUqArdHP9MNLPs4gbapwqyZJmVxrSo7W8vwcNm6b",
  "key47": "3k1WVGuvJGHBUZSCbrLCJ4HDgaqf2Bj4C2435aQzTAPkgF5msY6zwu7tgLXXZMDLrvHb3BTQtV4tm8UoYAiyp8vK"
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
