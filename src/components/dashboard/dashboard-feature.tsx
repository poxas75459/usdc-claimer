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
    "5M7fXKpDGy5AFUdpftjup7ewxDABBX74bNWwz28X12x523y43rLZHDR7MvKMQf1BuuFRkfrZvwP3c7fXTcc4W4fZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62hmg3BMN6xe8yeDqV9YQmA74HLRvWtHB2KvTXfkZtLHV6reGpjvAX5uLq5xQnUPLErUb6zxgd2EPvS5KhcYWAXg",
  "key1": "diy2gFyQ7QUAXtVXb8i87ZBN7XvByJcfRVQz7WcSqafcdrRtNrv4Bfo6GRfP18G44EeGxqmVpqYTJXfV6QzyKhJ",
  "key2": "2Y44isTCAM52amEPqte8CijcN8ePJR7j1HXeZWb1RJPQNxZQDscg7GuYaYQDhLBSdQBC36KcjwkF8VgRz22Hecec",
  "key3": "4TZaGanuie1jGRFtVdjLP7f4Hw3pVJJmmHeRmUgWPEnNrewxbxGUms4kZENm1qyYux7MefHyBXV9sMTSTsFMbpmt",
  "key4": "4ba6PFWvZBDAKSLwYNf1H2XFEw6u1vZp4h2Z9As4WdmUV7UXKV63QCxRbNXw3mHAyK85AmtvJbuNXGwezwejNkSo",
  "key5": "r8SVyeyhyZo6VUDSCQGeX33NUGTk5qhUogtE5P5qSqvEwPbcShWaKqjuJWVw1gAjUFNZRyP865TQPPgzvJYr6EH",
  "key6": "3YaReE88rXKUkUAg4fu6c7U7SUZehpLZUU71p4m6hG8tPomACrcz2rUXs6NBQCUhEL1iU2KZ5UP1Wuxb4Y7c2z8W",
  "key7": "4EWGSG1qEAFMoxV1FJgH9Aqs3yUa9C4agoq3GkmDP54LVr5jM4ybgsnyJbGPRp48esyFUxKRpLu65ZFTzyLf6KGG",
  "key8": "4LgkjptoCFaDnfBcT6sGWTaVdZkMgaQuYoztMujua4HYCJscEujCo4oBGeHCaf1xowk1dZd9orimHzwhCnvSp4BG",
  "key9": "4nLy1bUJcQHbNhJTMB9z5mDiHc56bSg5Nj6TgmLJZUtTL5m4zq1EFuGHpKCTSyJTUC3WAr2h5HSXkhPmS9QkpNhM",
  "key10": "4P2YNJjJZkpFdTzofUDxxUFouJLjHfv8mt7eDijFHitUde91JTLia9RCACV9uHU2xaNVS3Rd9PQPmpa6h6Wrx9AF",
  "key11": "31qUFhLpX65yUBGMUBUgvNM5RmRH4haVX8khvvNsFYpoF5rNwK5pwt1x1kwUrxykst9kx4T4oiA3oqiDEiXH5h5q",
  "key12": "5dRAvcGHhzx6CMy5L4f3j5yomaXWhXsAPBb6C2QSGJvhQ2XZ2SRuHS6DFTGypd9DtPxP9pbBeh88eeVGBKgN9y3d",
  "key13": "4jExEpey2Pq7qqNFjZoAHbyX7RtBVP95pZuETgsXQxSuBFKpPcJTn6ykbjqizWEhyf7kmipugjCHrBwcCZkQzixr",
  "key14": "24wMRqTiC3X31xmiNVrrJXTxEFp7EtBn7F7Tgmcg65y66jij8vssnatFkcXHt1PkJLbL7ftokM7AHUojQCDvQRzH",
  "key15": "4hJkkGqqv6vmzJyKhQo8of6WQiTVurUxxT8YmAUiMcbMe2bMEEmmHGMkM6GLKyVB6anYz4igbyK9URfB3hUFMi6a",
  "key16": "47CBqLpX5QR6ookAwygbW3eH5WSpdUziybK243Af2RT1LN7a79E9QAd6V3b2BzsUz6uYDXJjQA533fpArxVWk6mD",
  "key17": "26oE3czXFVpvAcDrmeFJ3ESCV9VpPhwQiWLzsCHZx7NDYhTRfZgShZKwhWQbCV4yFtwu6h9tiDNMorxzry3gCfkG",
  "key18": "2Kxh9HiYNaJTfjPyRFb4EtWypJ5vvS8mqJz14UtX4kqhgeBCFzZmXnMu5JurFZusEnT4VDngoi6eEYe7tdz7jNe3",
  "key19": "5QQSiVebNu6hp5wD7nKmu3NzxohRQuizgCugYXCTEwUwoHwQbRP3uhRyjJzGLt9Za7qEwR9SP1U3T7soxh3awHGd",
  "key20": "5ZC1mhnzR5nhRtuPCx4q1L2HFd8Xjr9ip64ma2bDHCPqMqWNMbiGg6jmHQgsuNHqjxpCaLYnjKwGgnPai2az4X9u",
  "key21": "4Evi2vr24UR77EKabb1EeS9GDJB6FHY1FMP5q71NNSiaXPJQExTTHqAG8FPNzuzoQrWGesEkDoub7ydseyLmUZTo",
  "key22": "4DiPxMk3c6x1Tn2w1C8pJTCpMQrxYUg1V9TXxBmdYbSvEVymi2nkWjbbAVGdSeExwYdbuRUG2Cv2XePujFwwAuKs",
  "key23": "3AGQ4S9kEkeDFuW21n29KZ5aMLb8HXcyRgp6wyAuKFeJMV8D8nGNyb7yatoMZYEnDtpu9cY488zvKTDjkfyExyNy",
  "key24": "5taa5CYxmiSLzx2LzwnKfG8xnCQU1nyYzF8DTAWyiuVqeeo3fXQdDLbXEvXLyHYpS5P6bTvJ1LUG4BAxZsWY1Nrm",
  "key25": "4sBL4nd2Rokw8Wg5rdu2zLfstVRNrf8cTDBvoGEeB2HuuZCajDQmgwGFYKRoSb18NArrgM6gAu6pqMFkJFxAcqfe",
  "key26": "2y7HkD3BYC53SeEnw3vmSQPewqvHkabQmFxmQLZRFLWa8prLJDAPkUBe28cEDNAcxe8TH5dMmGBztxXNH3MxY9uw",
  "key27": "2LEZFRBS5XEbMGmYGHohDLt6dsT47CTho3kWKm7MbZbDD6dzUk7z1NYb26yiC3JouNgxcd8m3C3QcyXYSqxinsHc",
  "key28": "2Ec1oM6SFS6ANxSPxMce5uSBCJ16pUTMkgWM7znvVckN9w3u4JwFZy9kphnqrjHzVcZvA1pdvVyTDKVBd67USWu3",
  "key29": "5NV9W6hFun6Jzbi1KfDjm1Xt1JkdgAYYSjWCvjA6jZucNGHfNrfK5pYF5JMdRCUcAgH83Fdkzd3SAykdXQ7i6Cf2",
  "key30": "4Goh7roS1SbJMdQVNsojfYAxPrZUc1Zhj7CJRiyFu36SxrqvC6g8YPLnpzuNUyhM1TMva6CX9EeMXsmAEXb927Zh",
  "key31": "3zf4nXPuoYo1ebE9TFgUm4FMa4WiTKJ22d6JBVXCMcZbCELv1MATCmrdSqsbu5YPSqjKzcCeB9JsADXJAqD25xRP",
  "key32": "65T6N9d9yfn1TGma398ymT1etVyQdJB2mHVCPKvywcPoNXJiKz9VZN6s3jPcskcMTE49yAcwHLorQ2DKFrdsZAVA",
  "key33": "2xsnfQ7QMJ18h1d7pQuxvvr56FSP3PJERbkmpWE5Hokdprkk2f2V6SAXWbtSr49i4b6Rjffu8xAUUYfvGDPuw7gf",
  "key34": "2gLPhafR6NcguR7UgwPGTUxq6BiBhPPctpJjR5Y2MkUCRvzkxmkB51fp8EVgAjhALUP7u1oLsqrdHqJgkvpRUQTU",
  "key35": "YxVEpyJeCLbtbjQdVHNAq7mGd5KDJZq9jwCCc7b7YoKckZk5Hmp1r3HYYa9o6DZP22iGAVFWwxp7yERMEGCT2Y2",
  "key36": "5CmbVZRKvTmxqXAEYAwpTuurThUV81DL4p7mugbg2u7KdNuWgmkBsmVupfgt4zuGqqsdhihdMYLGnPPaLjje2R29",
  "key37": "vbVFpkgHRudrzRHNLVXgxsv1pRTqj6bQKjsnrcsrmSzzedmGUopGtqXeXg2vJ6NtYYYDGY3w31dHgSGMYE7Fb58",
  "key38": "63i6TTdAHWzb1mF8tgfHui2UfPt9rEDYQmMaDZqYAoGr2uZC8kF8jXAjH9bnEVgKervtxJFo43gYEyATj3bm66kq",
  "key39": "8x577cErTFymtbmoBcfoydH6xFs7Ew5ZYXnh5TrwkhcyXQYjzK9RZghZyQqWNCgC4Ywh4LvYTani81Hp5PHdhoH",
  "key40": "2PqnhdeZFJ6AkAcvtez5jLqbPpzNtMyW3Mz4izzXwx9EdqHr1WudGt5BA7bsSgBacv81R6GntyC7nNyNi3hXrW14",
  "key41": "5hNsBu1v62j5Ho773frEPVCQP33QdVSMrEwRzXcz1wifxukuYaiQLct9brkK9k9sKwP6uXkNbswuDkfeTbb5uAFr",
  "key42": "3KC3kUUBgBzjek3ALsye5sEo6Koh56kcXoTZArBZx3MypVScb4MpNRKSecR8xu5713uRXCw5iXG9chca84QFoMyD",
  "key43": "4eAW9ojRn6YshJVJhmjHwHzseGBjk8BRNQB1zyvznkNEBKzM1TdYKAp987EcUatvcCNSWyJzRwWbpKscVYDcYgE8",
  "key44": "2EgMfwaWjUTMtuopV5D4DwSfTz4LUgjKtGiSNwbebymjAC1wf8rPmmPko3PJSR4UFXrUGDDRacJkGnuSUVtHxnA3",
  "key45": "5LBr3MEZBqGNVbNjVzZ51XnzMrePQk3BqZMy6dKB5uCKUT95YrRiV44vgN33SS9Fh6F7yvdptTZU3kQQWLUBuCop"
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
