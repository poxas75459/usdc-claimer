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
    "2Uuqtwe4vgopEWDXrP87a6ffjH71eKvQY4ZGnyV5Dd3uR1zgM7GQ4YyKpdcZFJEBw25upcARN1mxMPERhVM67fjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PfCvYPrxZGMmFiuTXPzMALi3taHPfkPBBKxodZX9KdfRCbk5hyziNcvp96BN6J7GWGdgC6mBb3FiUywixuQW41p",
  "key1": "49ERVWfs6QmkR9vv5jgfbB5GtEto8p6ePT6c3Eg337HVBg1eD4A7ZSuREoye2eyxVRfNDjZhZ3kJRuMLdD95BT7d",
  "key2": "2oNGdjsQzTi6NtQJECmJNCewE4cftTcP2tFgu7R1grye9YCwnnDPGhSmHhjsMQJoMLkAv2DhYz41MzuWseoGnysx",
  "key3": "3jsEG9tBhUZCeJzdMtZGLhf2g6CaNF6tH3HoyjJHwBVXTUgy3Vub6UxsQTUZ5izr6NuwjU3P5pCLdytqyxyUCsU9",
  "key4": "4Kyq6g6JkCiPnfxpLJvrcYZvks2HqA65UmTWZfn75rmWLGhpKFFfp34jtiiVNrXvLmTQw1L5kmwWrsn3J5PBCKxN",
  "key5": "PrvY7irgVb8p5sS5dtcFsrfSfYjoh7RpsgDNGGgkr1FUNEGo3xaqYcumZ76LAgEVqUK2WAa8dom6gx5kC3mtrz8",
  "key6": "2gtUvXToHaep3JQVhPkyfrHY3i9HSSW7Q7vyVCyQ8Nfy3UzMt5fh74BfJfpoYdn9b6XBSGesybwoz7rsyiaTxJTw",
  "key7": "2E8iigzMeGnJxrx1dwwXmUfxWGuWoEeKFiXYfTWK6JtVcd4jF6JEJwTarwN72XwPgRDpdE9tmB6U3fwCoBVF1HEK",
  "key8": "2ySicihmunzKpexpx26a67AQBT9U3Gue21ibnKp6q7eadm2YQUpY4mnryNz1kNj6RhputEFeAVoc971hjW5vTsoo",
  "key9": "3e7ZfKeWVrG1QnoamM9Ysma7V1iHiaY2MFKZ6bzegpuVg4GdGF9Lob289x4XArN7nE54P8agrfGLmJn56Z5DCFRc",
  "key10": "59MZ2pWkdY8qAuQqGmUesqkgvSVszVTAbZpbavCidoieWpiC4NV43BqeVLKBqtqrVCcAo8Cxa1vFtiYLzw492AG4",
  "key11": "4EWNXphJWUbPwwQQMKn2vLe1no1r5zNbqMMsoarw8zNCiRVfkvsJGaKvYVrP7jTeNDhomtS9JgVMffqiSRUtuvpi",
  "key12": "ZxWV3M4MWq3FMeU8hNwBA8bqXP2AqyGMbrmNSNLZdtT5zrzqY3SRkVg8sHEVfpeQWKkExBKJ8FfUC4ENDqwQ8u9",
  "key13": "4DzCdnL35JjxNcDirZQSGh84pWtekt19unWzrBVC2DyvUM2TeZ2Ta7si7hLoezbV6JZwStqkXNRSLbyv6UKvB94w",
  "key14": "5q4aVAB4VVpaoDY79LqNHeQ8mYysaKgfDFGLad4zC1CJaDm6XcBdY2vgawMaVy8c13JNfkLVKgCX3bystoaqA7VG",
  "key15": "3VJZ6da9QwVV7zgmjULXvBQEULRjUe4hbF2bgSxaVHUk1fYehFR7jiXF11rQgaQ4z1Kg8jqWRtuTvj57fd6jtVZj",
  "key16": "3m8FNmSr5Xiv9qPsDSzQmnt86DqbrRyuqcvKah7GVcC5BMVTsYnqw24svgZ4tSqzVXj6BfPAWRCx7M1QzfEd9GpH",
  "key17": "EttgnG9C9V5e3LhE2vtsSeYsqqmJHZvEnhEXEc5GQsudU1j2cByNdNJjKLskmrdwwYHpT9S1UJRz2NEPNdPdLog",
  "key18": "9qu6hmdfAD5D8521Pj7kdnfQGefKgyCa7WA6sBhQbZAPU4k8r7sgs8cFntfuTF5Lc6MeRFPZ1h2Xe9YaQFbwkuF",
  "key19": "47p2PyEA5JZGdraJj54jbgH1t4v7gGWPqrmRJKyur4ooeo3MnczH8qMaYdT8beUPw7dw69iwnkdgUvkhj62YRYJd",
  "key20": "4HPcbZEKGA1JgKLgdN3N9sCcw5UPtPFkjtMyQv5bTfUXiasxEaKZKwbb16Wdh6wEXECxvzpCP8dy3ifSvn5WkjGC",
  "key21": "hGaZdQ5aVF6ZP42LohUXuKXBS1ZYh7JzZp9CidhVDi77KSxtsySE9AszKY9BCuxmQ6Y7hPuXAYDwUYL55n8mVAN",
  "key22": "3Q19FjhuvKKcw9A9wQv3e84Cb24E1Sh9icc5YioSpoCZATCNShiaYTBN13UsTW3iUxCzLLjrG8HQ1DTpEBtWjcNq",
  "key23": "PLKisxnSzqKGt15yuVf1jTrm5njDDK7aU5uRLoRDB59ipSnYx8i4ZckwU1RL7vhaWCi4HmRV2tUc7X6R9t5HkAv",
  "key24": "JoYSLz51tbuh9Ek4uVPQSpieT95VdkTJ8vMx3hEmadSWV1PBew8QLhycmFRpTJuuqWQKGxeMgddEruin6SwVtNc",
  "key25": "2xFHaCjrQnbccarXCirhgJ6HDVRQYkziV8Mi9nUZfiYem7NVLaq7DPAH9vqp6fqrHcLtu8pYCBTqKVB7PpEFvaq6",
  "key26": "uz1mDbiPcJe81S7RaQX9utyeVvB13sTuESqZWHHKm5fe7FYFwDJpV44iwigcpf4izgp1TafXAZXny3NVFM2siSq",
  "key27": "7YNPR2JKAEg4dU7PCLbvSJwgbqMQnEASRQNPYtgZBRXa2A75WRF7hha2rT9ULyLvZgVzKzdhaRHSSkfGVdMvoru",
  "key28": "2SQFwD3sV3gGStfNnjaRP2nqsormW9eTpatvXuvqGxVzMuhWUQW9iN344nT7Dk1HKoXCf5kzBbKa4rdqMV7G37bP",
  "key29": "3nK2WT7hWDsvW8PqPvASZGXuL9CPZmSgdVEP2cP9FEhnUPkQRN1YxMmdoG6DTMSHa51S6Npgs1X6EofT48SZDdwX",
  "key30": "2JcHLpcN9aMMy3NBm5HXVPXeVu5iv4xuvr4wiRBAWLj1p5Nef8JBYRDTYaSC2YnxccDWL4XXLXbhg8WbD6BweSy5",
  "key31": "24DQBZEZ1ZZe7JueVH81kLaCLUXPfP4rCdLvFacBmWjjPJRYCE3sw75WPHgpuiZZvVPuG6MPxXhFiKvpr3Nsy8Pn",
  "key32": "2aB1Nwxu1xxu5pzU2kThhKwD9CLmzYhNdxsxXnUzkHpxtT4qG2VZikXELZEcX4YXNNkKrngkCSN29PWBSHjjdDbT",
  "key33": "3zdWrcPhbuxkTJbMNKxzGFr7UUd1QK7jo4kFDrrUcQyYaxymJvBu6WtW6r7yWB5wU9FqBpipoZGMnFRJpZaa71M1",
  "key34": "3pANPVw9NDr5HUcZ3iM5p67wDB6ZnRtpN8bKVeR2e614QKtbWmJBxHHuruoViitXLGuVe7hm9UsMAdTLcRhGtnSj",
  "key35": "2QhAw77yFVrvec9EcCJgaKCcyyLiS5sEunMBm9b8BRpZnVEMyHfRghfFCGTJceCS5on9srsZ18ENPvHM6fJsDdQL",
  "key36": "3EAhJJjpza3G3Q7QzZrGTGdBjtywUVnqURmYCGVcVXrWSzWn7Mjy8UDuwTdJANMLHzH9quuVfooJ4XCphmYDvyoQ",
  "key37": "4TtMMYVNsqDS7Fv59zikPN6ScHf7J4qjfg4D3hwQ9Rvy6PK6sK8qtPiwbosxz3PS6VHRGmy9ejVrmAm7g3vd1srm",
  "key38": "2Vzs3Lvptx1k8GenpqrqQ8QXoRZMj6aCgxfnBFnnPY7DUmbKavBReDcEpqTRmhmxNnRidJepYDvPm3pU5YRPum8p",
  "key39": "4iZVmte6yFrV89PuX9GKzvHTgS8K1Af1yjSCAxvUNqwEU6LdwsQ71Jn7D7nz5dW3eL96SQhmT9Ajj3ncn5cZQdau",
  "key40": "4jixxFRZEkDgVYFk9GhJfjGHDRpEAN3Ss5vGbWV6KhPPTfUBnCjNMqDWBb2FZjhDKkDULAWVsdWg9bNeooQrnigi",
  "key41": "4H59ZeqUQqSPFK8y1JXuBrKJH1FPjstRMjKofBih1Nsv9pAgu9wcZanHypNL2R5i1ruvLxGmzqsf1Q19Hpvm9eAt"
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
