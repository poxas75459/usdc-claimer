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
    "4yoEVWLab2oV6oB6Vf7iEi7j7ywuuB6VWB2YNoc2aDgSMWtpiFYZWZkvLntCQTU2FDPTsj14hm5LYeUQifCqpdpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31tjovSLXJRx9yKerBJm8oqYJmYnjNH6MWWu2sNe7XWCgY6LVCyqsMsLyNaCSRbHXumHjYTvCSmKsyd4ZdvVG1np",
  "key1": "5XWPsZEyzbmWWsDEy6xhqvdFhwNwByPTuUQVcPo5P3XNvew2izWwAwtK7j7b13K3Aer6ZKPdCJG2GvUkuAhGnH7U",
  "key2": "4SZp4fTh4M65TKQbU4sc8C9xPkZXZQA2msekPKyzcAMef7dW8RtfwRzN562MMK4iWprrtLcRE7A6ZdR5QUHFF63g",
  "key3": "3eZQoSCHoE8zVYzBbVKvk6TFdW5zbMTst2iwkTHrGRXGA8G15ppyKvbhgCwjrNAgmNwHXRquTnPp6pgDyppahx1s",
  "key4": "yLZPF7KWKKtXwFB9gFve3YX2TTUduZtZgNqf4Q8ursjSqupPN1A8WqDxBCHbEzfyRQiYXp8TF6jTR4bao1QVEUT",
  "key5": "3wqthSd66eJBUjm88srBmfc9Y6xnuTV9kJzUBq2TP643H6ikNC9hjUZG1RANonFWpji9VrrJdo8fx5twy6irnvQr",
  "key6": "3e9Zr1ss2vfzSrnX1S4RJ6fFqkyQh4jom7mGfCQMH2stKgQVxByekNhUUKxGuNpBffr4XpYLdSYTfGbqdpnA1mLr",
  "key7": "5Mfea34sDX1RqQK6zpU22igJLiHLu1a8jTtpUxE9ecGupL2Rbye86oQDY71fkaGMKqbsTheyZJ3RHWJXGYLXJAf6",
  "key8": "FX1ftNMJ9TALWbnQCsoVtXoahFdJ8jtdfYvjBjxPeJvB8Pxqy3ep1zukkZkGtVDv2XAExA42ZfShsCnGCwzkTar",
  "key9": "3qN6wuBc4XWJk7P8X5zCcHBmtjbjVEQyLfqDQ2ARqWzQivqG8vWqJ4gPAiwm5y8bd51HeBZxf39ZKH2PKW3XuXnN",
  "key10": "5vgEdpL4iyAy9KiEC3GeRC16VLv2Cv9Sm2z9LwZYC8EpUfD2mem8VpRffjTueLoAdmpFhzsgyRWLVxLAPMD6XuzM",
  "key11": "6rRgaMzCB87oWxP2wG3eQPjGKT4WVUvDxL11uMDPFRh4ZqfmNLmHti9c6TUsFHFxpEUdCmxFaGXVA18bZGWpwDq",
  "key12": "4Kgnat7MxyCFVnLpF7GUjD9f8db34fAq7aMJX5vPsehtxm5PWmir3KvnZ3MYp2iWmzN88c5MgpzTqm7MUuqQ35j7",
  "key13": "41LfjKkZXssJZqYHpWr5XVJsGLCn2WFMXWf7zKK3XXs26MwdtDZaHnPmsW2DdcvM15Kwtg4M9dPxNrtjBU6g65Du",
  "key14": "4s7B8ghRxZ3yea4Yqo9JbwdSNwfoDP3MkEijCzQvtx4BVg6Y4gCkVPFSAKAvCjj73Gw4iBFvcszVBBvJBYSf7XdH",
  "key15": "3TYGkZ8kDiHJ5yjudXxK86zp2qBuNZo7YJBbVQRS85Tw7HkzrGZig36cK2sgW85aLC9SomFdKETYuk2cCScBWrm6",
  "key16": "3AaFY4JhxpVKyGJP26wvBbrWtUMsnQ7ZJPDFRJNAeWsfktqd3QeECnZY2b7PaDBwo4tinB9NHLZNYWECMrszVq7q",
  "key17": "KBoMcDsKSJS6k1unEET4ZjT2BbDWRqPt9GdE7spDmBC7nn1wd85C8AoWQDXp8QGG9LY6pfKxnwc983hS7CWs92X",
  "key18": "65poBSUFJUFEE85rLCibyRunSJBFG6VAP3mQdAtETx1Jioa8G4PgAQkw15uj3xNKxZ8osQxz6TUqaRxcrYzLvTSK",
  "key19": "4q2gMoEzFcov9ctLoJHrKVaVd9c8vqFuqfebQXCoD4aaAf7vu2fUV99QG9wiavrFz97ofvipGsT1qcgBqBkadTcM",
  "key20": "294dJ6UwAaLxZC4WTgv1tN2emFg2eH6VdmgXLixruVCtcj9MJ7tL5P8pZg4ZgJJhQKRNxWLSwYhQVzVtbygapXma",
  "key21": "5nfWHkW3LNGcwuBHrrbERF24w5At3uwJNrfMahmFjaScccjeLXsATZyzk11CwhvrBiH3PovN2TQM6WhV6qBhJCco",
  "key22": "WZ5JT3ngpTf6qBbhpP9e42wATREShPfVnopb4C2KDGQn5ZdnLDaq2KpuSSMGxAqLYdKAMQcWMqJerWWbBf29JDC",
  "key23": "4PatuyFBqxVJpiUS6JcFuTD7wPj4Y3J8cZkSzAzBsLia66Z9QuAoTMr9u8GwLZwjpHvxYsVVzMSFecpKCGVeFnJq",
  "key24": "2ruN7RPSGnDJPTteQkpjf1a9f4H4tXdWXo7v2H3rvHKMHwFkrGj93buXPFfvY9nUgk8JC8xbbhRYjwcJgn8HrucJ",
  "key25": "3RjKthTGMQweQah4FTYXLq35NUQNoeDnWctACAjmiWHPXbvHWgAqiUnYZz24t9JtYykRbRubg4Ci57E5dic1FVpz",
  "key26": "9t8CWFDjxNK4DfDyRApKApFi3GU2TnF6hYWodZ78byGkpGcrGxCMiHiWcExQPngcb5HDTuUTHChA1iCaAkpb2Rz",
  "key27": "2nWHvB6js7EapAmZbpjPnVjKtMYggCuHGH69tkqNVwb3aXNQ58LVc27PAi1q2Y5xGazb1uVBGjcQPUrbJNcWLEzS",
  "key28": "HxRY2HD4fWk7hasTERYykpeoaXVfiE8sc3GN6qHEZSpN6pc2vniP9thh3tLXNcVTU3fGmiaeRM4MbpdC2RCjowg",
  "key29": "5R2uAiJ11iHLqJkXSDaaUEggDUqZH6sqFPGKKjtwnZdyVTeXYyzaLYmfWaMAkhFB91afUcR2SVmwoxbJiw2JUiAy",
  "key30": "3YiVBfsin63fr22HWJx41gB1MZnuwFAMgo7j9QHu1CQMmajWsDwPWoiYjqwUex6Y8NU5u8rKGjUWbUqJdXfSeouw",
  "key31": "msmWZEH9EeMvuqv3pFbK2HVqQtkGMoiA7Zauf7ybTNHGTGw5nLgVmqZQiPdA3yZTuxf85HNSYP7wdoNy1NdvKMB",
  "key32": "5KLYMyHLJPa7YdR4vhFRLefWAeenkydmAcdQKigoq4gvxicUx8RwSFun6MLC1WXMtZzdpp4A2UBs7gpEdea4Sr7f",
  "key33": "95TJwbKNrUVhwtdKerS6agBrJ8g8z5e7BJXToTq8dkGg2EBb84S8TKRi3KJZ7V5MuBqXE4aHsXy9yTmLYNtGoaN",
  "key34": "2QzPVbF11YHxav2uHgZgfJbVGiGsQ6c2E517dmiAofqbEFaU81HHVCH1peoVpwfqbd4MDXV6W5jfj8TrQnxRtdDL",
  "key35": "ySwfnoLaS7wqf8TW1SEADL35M3L2BKzzHFczo6JTpQwyKGsE4LYsYP2iiD2yV8GgAxjPmY2KEyoaAuEUkQci8tM",
  "key36": "3MLE8HypWVjJnaEXUL7b9iEmxR9UQ1zXEWaYK4fnGyxAnMQ71S1t3eAE3k3c2dVb6FsfGmkZXquJF2Rww9uzEyRb",
  "key37": "54ww3CYzhKtwbReHwALVS35qfFfU53bDJwu2ZNauWBcYbEJ8xLyXEfx8LvsZSJXGbgvBfQqXMHApJWdENWXmLLmC",
  "key38": "2fxPPCYoQrQjWC6jALWJoLgGUnRKUuG6sLVvsSyYs7CDm97diWYAyvujxBQhY7gZSD6Xgp5gqTvR3qS8WWMdEERd",
  "key39": "5SSBhNhxnekQdCsrDq8hDZkv38UxZ6Ttn3gbcu5BJ8e58SZ4jvp9347Fsr3NKSxYdii88M6WMRSRpheV6XrhQkr6",
  "key40": "2NhBn99yw5XYABMu3fT88B385H3bYnHu8E7ufuB84K4r1nrW1sg9nYb3Q3Bbgm5276rJnE12BYjitScy7NbjPjq8",
  "key41": "5JJTUq8Zy8VYnhNDFd2ztQMLqECrJWGu2MH4iE9N5Sv68hBcGyWWEkw5hhbNPrV64Ge7zDYZUD86tML4HYvyoXGR",
  "key42": "5V6FDQenVjvGwAuVqGE9afpaSF8FXKNopY1bDYGaecMYqptQAwJr3yXx4vBPKuAaNuYwvJoJsMHxj1NBV5p1kPra",
  "key43": "dW2zacdTnWtuzCQ46yYSct9CDrAprAkAggyAkTFDUMcURt7KABhVGYXKEkthjHdBWoxzQ6hkrQ7Bt53WED6Gqji",
  "key44": "3PhdC3fbWvkFo69DuG9Ue5dz9Jbummupj3noMH9UAVYK7kQo9uuD5grG4ZREkCbyU48uA2y29B5bQosLTwyWfMH4",
  "key45": "3Bkg2a5yGYQ5u1HVzu3vdL9KvSo2KyFsuQPjjJgDaa65KjRj6CmMoQNSfvs1iuDtLTayGD7PJ9bx9VQofhfiSz2Q",
  "key46": "4hrLJgKQpAfvpQFHaVYypvVa4sm28GhHHACrBCVcGUjLxb2RkLZFTf3LBF9U7gmyr8CnH5o5SCjxhKwZ7zAA6mC3",
  "key47": "4biyjb5Jr7AxGBPU2KwVWeuXv5uimNKS4boZkDGQP18iTHZ5Qp9zBxRxx1Lr9EUY5ifr3ZGhdKxgseRyU1QZ6osd",
  "key48": "3TG4VtAXucD3TJxwvuWcujTxf8ULEWuU9crLy86U6VuK7RyrJKe8fq9xWjMUqm1wMXXWfNpPFPpQBgsyGhZ2WyqQ",
  "key49": "61qpKV9rBhWaCN51BSnRnvkKSNUfSkRFjAC4SnBa8QUtYVxtJGLKCn1UqXFBErcMBU1nbCQoME5KhhgLPLgSUjRF"
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
