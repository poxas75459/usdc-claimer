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
    "8MbiHmqiULVUBpHL1oQnBE7MK32wXyRcjpUp8rHamLmdJph2cmZSRnkS7S4ejXRS2mXNHmbpaCMzixEy2SEhEaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hg2KEJSnNqA3LT6aXWLT81CmSgafr3yWm1dbsggU2hQupjkzTxTcieLRx5GtpBt2pNRp6AYi1jW8zgehXupDccY",
  "key1": "2bQvArxZRZkL6aM2Yc3YYCjqo2hDPpWFxvrdtwei3TyukBb2KKd9DKuL6jjN1H9upraTp51VCnPJiHBxHMByfATi",
  "key2": "3E8zCNR4e1CnvF9P4EeWAHnLqcasVJuJhykJqci3MgDgHSd9W3Sa2KivCeJzv4zKyNMNitoYwBs5sYJJHGCxSW6e",
  "key3": "5uCnk5snLn1oWCTZ7UmcMWeo19UoGzV3bsjVhckDEJW9UPUFyLVhxc42N9KC4SGsMnjsVbqQevBgarvArKA6hEBK",
  "key4": "3e4jcN418hivLXazuwM5SzJ5srfD2VuFd8abrVFc183KA6qLyxktBJxvHMtyAk3VnQyS51zK3Exsgn4Uqs62RXYq",
  "key5": "Xg2UJJnh85CKNTHGdkVVJKLvJHeW1rvbXS8ThN6WTgkELzrEGJs3PoJihxdUkSJjmbDV9VgNX13dpX7EcqBeExT",
  "key6": "3v3B2tLrtKb3G2uFNghXYTF6cUhnWBHkzHhSqD3cx7AeA26aRdP8HmMNjU5BEjtB5CVC2P6KA5RCCZcbWKAnXBbG",
  "key7": "4a3tEeA2eqXK46JJVaG8wffYaMzB3Rr7GmTMRAcXXfUB8QgCaN9qSQuBXUdeW2SDj5wuVhvckpWLzUrJyijFLVgm",
  "key8": "5PyDJnUh4picvkKg7qGno4RDrKzdgaktStRSmgFcv8QiucuxQZ95GXuoB2X5V3dsHf3B3paHUbiF8cX9fCHGfMVo",
  "key9": "5DNSHS6SrK9xi1jwbks9fqBHna7rkqz94HrfvcPEWykaTreVy9sE7Abacq8cq1YDctd7yRXsy2HwND3RmR9oQs6X",
  "key10": "5jSfN5pooWHXniYgkqKVm9hq1nnuqHy5ha2EuJVdSWKv2gAdMaYoao5dP6KX6WjNh7BYJRmQFEKiicySCrwQ7sDD",
  "key11": "5zafmVaDN5R5xVWaSicTH8DLUfqAbS1wQqRKwy8uzUtuMbkHpofqnHUhNUv2rA4xRs3K7PtbNp9YVmQhsztcoxbJ",
  "key12": "5E42nfLwW9wTpxjKDEpmfsfu85J9GxUZHk9gzgzsbHwbtn6CNQx8P49XaV2ruJwJc3XdV74P5YdYRP7QkqH4cEjc",
  "key13": "5YeaVBMpZBuMo23vZduorZnQCfBuemFTm3yuuvvu8QYD2CDE8XRPUCWL32Z4wz5VPAnLcvyxcbM9H1eAURhvMcwZ",
  "key14": "3XXDydcubCAXpWHa3ufiQQ5LyheNLk8GC2s6GphvJuaaHhmzMJx5ECTJnVNF5PzY9m6J3s1HHPrT8a5q6jzfCgMS",
  "key15": "zohskTtWRsutaYLKqWhxLK6ZUee7SshxdxDu7khFZ4vbaHSBdyPTvuwGsF7xvpib6UKoAGfJyW9utHRWtnvn1hJ",
  "key16": "ZE1Jc6jYA2uSKqj8aChPcUGCg5eJLSu8p44UbdRqkbz7RffEtBFkXMdRLifBFZSmhq2KPcNFbB6dK38Ec8CA1QR",
  "key17": "4LJ1YBw681qdXT7Q3VLtEGATQ7gfbHwZcJKxKxbzQtjUtE1dX7FtdTVVFt86m7Cce5bBAiros3315Ff8T58YBBJL",
  "key18": "fhXrG49EkEFbe2guCkEzaKNNaib856oLBRAG77x5rm5Rp3cC5Dqm95tCvk56xRr5uUTApRfqkVzLa3aHvmVTQaa",
  "key19": "4Hrwhqz41QbDHCei6Rt6CAkVpWkrqLf4B5TNAUnqzHAdwAeaVXKHvu9YuKhFWHzNMSt2pTV8EVZbC6VVhGwXNFW9",
  "key20": "2MJr7m7KwZU6w8QhJFxGboHPBY5bigK88HcPUJ9JBJPGRw9JEoskucriQqc8joYzpmKpRdvY3iaJuE9BV2iiVc78",
  "key21": "GxR8Jvdk8DGh2RfF76YMfNrF8RvKVSUU58i9ReMaaL8Ga8QnCwZh76Btee5b4hL62RTtZmdgPvyeZQruSvYWzzX",
  "key22": "53t9Ax7VUWyrgtzScq7SZfVzcuKGQFtEwirwSwyRh4t1oBqdmen7gYFjjFJrbPKkJRZ2TovsWGRe6WQztzFZcnwF",
  "key23": "2eVFxDfs7gZ9n8DkGsfCF3CmJQXLxNcE129ym28SMqmbpBuRF2GQLL5r3ECcdeQeM7uB9hd7yjc9SpRjYh482rW",
  "key24": "545j5gN2hq57DUGCM4gCYtPiVh7GoMG8u5z85BBvxSbZ7uUyTKtRaD8ABDCYyBnhR3v8QgY4d8T3CJUxn4J2ra6Z",
  "key25": "4pomWXwzPSuFg3o9K4BN2zzj7YJm6h7hciC8BFGn5ouqh4Md2zTuvsVH2Fqk8EDb4STfbRqDhjVRwuV12WBLn3Qa",
  "key26": "2eXmTBdWePzuhxGCwapaucmf8gwJRpQWZVf5A6aXpjaAXZfR4QMXyvgJrVKxYFzdkchMqjaqheWNd5SZXMaQVXkS",
  "key27": "4Bdv9ojj8SAttYAdC1ZhSUKW9Em4RCkmedRpDGMyLCwW9hYLVsKUXJXsiJftKMaDQtSvpAW5QaYypXb1tUvKp9k8",
  "key28": "2SLMYEynioVfbYdD9KB6NKyzBsR26dERZZexnVMdtASeBQXxUKB3kzsWFF5mw3kykUQZJQuvVcN7aTXNeeebvzx9",
  "key29": "2zcWQ2Ham5yTddcid48iCqKBvinQAjeqBKyRxA3dvmdxzhN6UrjU6FTCGwqinrwcyFpNK9ohfHukKnW195vWqH9w",
  "key30": "59gquyGB3cDoGer3FRnH5nxrJhwWv5TYJTszECEP2ekyumtmuMHM1nFH72uv851nKcd4TYvTZwgLvsoq34tQncMQ",
  "key31": "4JwR6Q1rsphc7jTX1E6ypiBJbvHEj1CTQDAvftFF2i34ynKeyhthPjYuqEWoT6fiq78kZ5M2whuf1GSnEV7TxAm3",
  "key32": "61kWPxY5jA9UhU4k87NgYPxEUbrJVFn32kfaubMMJZRYHsnsSpPNdjw2v4wsFoiAAbpRpyECs2zhZwKA33X8PCox",
  "key33": "4hxf92vdwxLkhFYhk3FY1vuZ3HzJYNdUHyRbE5vgTHswV5Mnpu9J9jNtcmkJJm8qkWwxLBjGeG1wFWyNTeU1XgyS",
  "key34": "x2NLCuoeND7JnvbpDhqPruMcLX5kufCmEjQ2onmZptdfZPgo23cB8a9EcddE3XE4zoHhhsTUuMeszg48AzBh5qc",
  "key35": "5Cy4YsyDqvdMUZcVK1dBr6iKCDPMQY1pZif3v8bMWgWvddtA49kUnvweVPFcb4fpiVrHvzRVujGLzN2iysiBwMfk",
  "key36": "FPZZmpQS1Lp7RHaZ3bM1Yo8ytPB9RvNnHRJoM2DD2sYw1VZior43wuicNUCjEGBpbFHkUDcvziBbLb9JHJtkhpi",
  "key37": "5LDhYevX3WNZbMjJWNyLhompbTFCmaZji7MpoCBoq4ZN6hGuyjwn9CxDWnd5pmou3BSa9HRXfUzoKE9JaoutLMqY",
  "key38": "2B31Sts7NNrbAZvCWNTEBqAhvfJb12NjEg4uHVhbLFePisx5sX2iB4voj5NmhiiFR76QYGuvsdPzrK4NnEjmtWqG",
  "key39": "9nQw8joHp2f7AoynL1DEk9LYxgHCXtXkteXP2nyeKLvJRzpuDmRMbbPDZpMp33dtkHQ8YcnR5akayjfon4a5VMu",
  "key40": "5GWPV6NJn9CgFF2mMfbwngoCYmXVtsTtXUdjS2aFpXmVdjcg4oYQSikEFfkK4erx2GebtEXt6cLkQ5gAtLaAuZeF",
  "key41": "3DTmBMxK7e5kL6VzszfECnZX1uip4ThJ4omJ1d9sq3QESVCJ6s6KGMLr8iUfKS51WQqHkh7aGJWta5MhmqWFses6",
  "key42": "5x6t3fALVNr8ZKjBoU1fjvzyhvsS7oB8CQ9ZzHEJUABzA8UotPsYmsuDaP9QahPjUjWZLN83QsXcqDbFZEnWbR6W",
  "key43": "3QoYxf8L3uFF6tWeK2WMW35YTX1eXRCH9W2nhG38hQSKi5syyf2ekD1w7cViDXWVck9kTEWdTcx8UgLwdUC33G2o",
  "key44": "3mLwuRd4yVM2JrdCDuUW1kmeRHLyCNN6SwUAwhiLk9jZxZR9VMW5uy66Xs95Md4Y9sTB98VNNjsUCpFBYUUPyGsi",
  "key45": "33kkCoExBZXnsPg4UbummTdrJvUVU7gZjeom2JreazwcUav71XHWfFvr6pxVgG451rq1sXK3QBZsD26dPPo4oKfS",
  "key46": "5FJJevSsBs3vdhPMUhQn5ukgDnYRqk7SQeCmMEANNinmiGv7czGaUTvb7jdXAqBZtHobgJNvNmvqKubAcsFS8qgv"
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
