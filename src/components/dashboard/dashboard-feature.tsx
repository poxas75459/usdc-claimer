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
    "5SK3Z8t7BFMePxzV4mWycgRzYAXZFxXX3CnqJye629WXKHdCPgYuzLbuMYrsKdGMQx1MSRo3Dag6AEKdcTKthfC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pEQxBHjTXr6AeefrgYBiCrSgYJX6fn1gcYfqUeCPYW1wqmJGAXCjLhRzwQERewGfTDRTNtfHCYdCT3hWcv2xVtr",
  "key1": "5PD2aJ4MwEKvHHWaGpS4ZGLg1DrP8CXbPTaE1p6oZmN8JrP47Z1DsjuFTzYsTVUhfikRfPaNaWxZhLFTVVP8nw3A",
  "key2": "5uidGhs59u3siJNsFMAoGJw11bnzo7P3Um7oaoyKKEtbbhRpuowbhrZfFtWX6CriANLmpNPGSkaQDtuN7md6TvYd",
  "key3": "dcJMGpcySGQwtfkwCfpByjZC5rSz1uQJ4sUHpdVZ43gmZzkXjpgjHZ2Q3CTDoAvcE9xKUPS4Xx9XD8nLRkdqDBq",
  "key4": "2RyCQEbvS6RjsGjQCy5GkXM7cn16xnD1vwzunb6L3R9BrGr8gz6SjwKUAoVExXikTqQjMtXbSR197t3vsHy42LBC",
  "key5": "53m1GCjHMKXWdPhXJwkEQNARqncwdpHSsnH9gE9MQn2QHyWajLceofUAkfvfctvRavbtswZgiLaPMT8h5GPo3JTf",
  "key6": "27cjQ1fxRMU6s3sUqH7SKGTwynu6xWZ8zEehUvCqHx4XPoHbKsmNAvbvSqQotYZUtrZzHd5GZGLeeZYniDoXP791",
  "key7": "1PUPGDfW23kqsbhriPN7xLTBAGfSJuFZfLU2EDMd2tmq9Br4R4q64cpkNwFPxpRcpAn1VuybhzPSG7v2udBBzMm",
  "key8": "5znQaRgtyjLPTBJidiS9iKQPz5mL6pxafnzz8b66qb9gxfVxnpXcLRLp7T4oaWUaBF7f1QkcXG6CoBcvkob4fDj7",
  "key9": "3c34oWoJTWC3S5KdduKdv6xH89bx2eaEMZQWjDrwrtCMwUANzdnMjTAjZJxwaKpQfUUCHPtJRX7AUB6QchzPDso6",
  "key10": "2QWL5rKaLXan9G7P6gg9yzmcgzaKmerRDofqTogm3QxKV6E8YLJX1mXu4ABMhyMV4tqxa1No8xXekURetmihJHgm",
  "key11": "2QjrZMQgBFdgK51R9xY94xJEAoyYEEmJEj7GCq6kbf6XugXbtG6PDUBkk3dJYMoSwj6fdgEsp8MnY59E8i2L5Gov",
  "key12": "eSpVGFPcSdqcjbysJJKTRirC9uCLRbxB973H8tXj8WZhB8sTEpitsvgMLfyUKKRe1QrWF2zHhen4RBrn4s51Pai",
  "key13": "465Kw7jkWohJZdRPM2nThYdEm1xHJCkCncoBqJyzS42Sovcmk8AdoKL98bLDs16HDi4QjXfeZFKTynf1eHfGtevN",
  "key14": "45wjQB2ssTVA6na4W2gsmzvPZnM6DqtkXzx2SqEULB1W2BcyAi5fY1up3KgUkLKw3pdGrqnWHN5Ta5VsNjAz28o6",
  "key15": "5wZttEKfQtHPYT6eZAkwEiU77zZiVjvBFiKkRT89aiLtLCyLvAQxAhQNrJvb48EztChGqRe54jBAchbtbmqYv23D",
  "key16": "5NJ6fCEc9Po4fz43w3B74SuzoST4Rycchu4SbYbXwLEAhm5JMk8wg5MCdbmxt2FwNwncYuLq6ukqdjD2inubnESr",
  "key17": "2rCAC5A6ixBoeGZYTtTYZVoNx33MYVf8F2YEqYXFKDc8h5C2A2sm53tEUvBQ424VKYdb9NWVoznq524SoR34GgeJ",
  "key18": "2Qi7fcwp7SBVmPBxPbwhA3sjbd1XosTMe12sHpoXVihz6KUaRWs5bsYDK5aebdNw9FaRGb1C3wt2SyAPvYMHtAbG",
  "key19": "4ngmxUcL9YUSad2j9n7yu4NwDJDdxSrKnAA7FwVws279VqRCE2WfdTA94ihfFSdB6YctPutZreug5HrSEZ31ANSK",
  "key20": "3BsYD2NVifMbbEioqaQmAMJEFnbXNyRRuLCK5Vh7JNhRJgWnokMp6VpntzC42T1ZeFbsFTcqPX4uNL8msNx3A3C7",
  "key21": "4JYtbReVXNvHoyWQNKYC6eYoPGN8N2Mv4C8bj33XxkM9niXjCR2MjQxaK1xUh5qSnB8nvuef1ERUXzu6ms5s8Zj9",
  "key22": "dxUMB4qGJ5BsxLvKR9gRNawaTj1qwoFuq6Gw62GZKVJ9BANXvaMXrp6tqC8s3G4e2fcTYWJzvxcukCAixdk3epp",
  "key23": "V5pAEjarwNU63ouEVGcJoTv3eExMriEkniuybDzeR3wqJrukha9PGKBzAPqtaejDt4DijBwx4TQ9K4S9ewsu7W2",
  "key24": "3e8BLnwm2ArFp1fsBH87XRkGv4pMVD5iUY1M63HvQrym8adSVymT8HJDEtA6jo7JwVgRh5cZbV8xLhxzcBgQQJgk",
  "key25": "297B8uN4raPTj2VMmKtBHJc3oSACmusQUazZjuw1WLSxbVAnkGPxSr3E9G3txsysaChrcguQyfA6uY4Kh7KjCeqZ",
  "key26": "4C5Pz55QsPax5Y9dPhhPYCFB5HY2bbbDTkkz1NKipxWCjf7SNBEkarXWLRtg1nBvS9eBRenr6QXT17ApYk7GmrLt",
  "key27": "5wjn3MmGmmaZPKCMxnanWqpjFN49KSgBAooq2Y9pfJ76k9YxQFNjAFE9uvW1s217akqwMmx3iKLPnuBQbAiGqonh",
  "key28": "FCna5uvQnCWfxViLiT5BcgZKUVffw5GEdw2wP7sPXLyBSmWDBzCJCSAG67NRfP1FxnrPu4rEhGfo7912EEzbfTT",
  "key29": "3J8YagfMsdA6RyHakuiZ2n23cSxhSm9j49XAvqaWkBKcTUpXLB5V5q3ySq2kpdghH2D6C3y4M3vLi7WXpKwNz9vS",
  "key30": "3KDJREF2pWZLRJPhdo58VagzLFsdPDuRXPTub6TWJPg5LhaHKFZ9Fp6JdkZvsap7CEEfZA6QkE8ugyijFHKbpYYM",
  "key31": "2RY7rbg9ChsektRV5xNtP4odvsd4h8QZnkHMztqo2YG83ExmUkXLpS6BQkGG94b343RvBvvLP7nRHQFDZN6maABJ",
  "key32": "4oGJHZZNTx1fvNUVJgJsmsg9qyJHyrUBLDCnGbzEAJM99WNmV9iUbv4AMeKWiCapJB3vQWMjmLk8RMtEKbJKxbGd",
  "key33": "XzXjequnSj3Bity8NiPLhyGAHBrFw3TH7kRoEDAKAgKoH7pjLPCVN7dLjGtic5TQWyVfnWSo6AaGSxeuHXopfy5",
  "key34": "3BqdyiUftXzyttHY8LzfRvfToKoZZZGSAerrSu8UqTLuMTCqZkkc6w9yQ3NXKmA9iBqDcW5t7ShCUKWMcQr9CSwg",
  "key35": "4qg9aWNri5syWL3seF8CqZxCt3qWw8HsN4xGcStW1jwwgBPsLSdLoLYPPUNM4AfqYWuXrsPspp9ssqizdkWEH6ob",
  "key36": "2MvyrfHpdSmkexSCtB3upDTxXfuv5xftpFQEAEPawQRDbRuLf8xo7idDV5e9v626tc77nSUTep4zJhs52eahQsAt",
  "key37": "5zSt5mr2vNzJeq9kAz8RzNbx1SNeZM2pwFHr1XVT6D3tseWyATXfo4b1NAVLnjXjir2ds4WRn6r4MEcUd1CFABFh",
  "key38": "4Fn1zxiT5Kfotgj3QQAKLB6Lez2jqQwfDa1QJoENH526DLnHYJAaVAP3S2G6XxPX9jqaB616EdKj1eBdcYgVdxbi",
  "key39": "4GnQqRUmVkWF46gRghAjjbaq1TNJkXwH7Xw8iWauTxFXq6sVYU76bFNiaWjt4uGEriKNRxneDnwMT934YwXGgMSn",
  "key40": "44FsWqYUg8Ns3Zvym6QBc6U64Cn5DKTazEFVfF5QPBVHZtwQqDvHc1nFTTRqrz13JmpGwRsCYB7LpBcnS4hzZGZg",
  "key41": "5SKfdYrRZZzZeT8n8xmDVQi7dUWpjGfE5UAtxtYj28G964czyP9JWp6uBSXxYu9fFvHNXfwGvBcTJdYJp7jLeJHd",
  "key42": "2WAY8LcLhcyfetBsmsdjJBSncNvvNVK9esk38mKaNMb7DUV3rRvXF8U89Qqho1XSUqUCpiXeVmhCRPhrcPsLKVr6",
  "key43": "3hz1zSjVyAufL5gJikGr9PGR2hmPcD5xCAiUcq4h15mB84uPaE74mTVazHQwXzpV998gTi2e5SbrrMs4MWCcan7d",
  "key44": "5PtARTDN9Ji24BFLB3c9nLaN9XYRqXxwXcmhm6KHUACo3AWTVQRvSYySZsJZttNpudfSBT2UzdyzEtnnDgu7ABgr",
  "key45": "4GPnDnC3hyvdqg5YzP6DD9cJkz2fivFBAtRj9Q1Srah8gec4fEDZEjVQ9EtKsNFWJbV4sBQu51rkDbusZNjSLMyp"
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
