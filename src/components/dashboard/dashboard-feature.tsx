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
    "3qnf2y1hpCGhoX7wFcgQtnRDRtiM163WMq9qRmY9h31PgSRqbSWzK6HUg3na32jm7RPxzcAbracLTr13rWhXrT8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pyYJzqYKgTEmacrko4881HYSe3bTS6wP985RuAMzHxSHRXwKnPJYgJkF9CK95hQjeE394Hxno4PvqFjcpzaaQrd",
  "key1": "2QBG3vFnb6MbLgjn4Q9EMo6NiadPKbazQYyXJ6To72uB2LUQQS1dJY1w4CkYL5zHYt2JAjUMBmwzsNt4MWzko5YZ",
  "key2": "QffvjBq4RkH26fxEc1ZrH7nr1oPHkShmKruncUGaqHNKdbRmC4vzT62rjnU8vxWuJh26WD3WDwNQkpghemZrR1M",
  "key3": "4g8vg9V65piMiYPYAA6eFk2UcuXCcMAbGh9sbYWiZkUkJiQiPWmhojHREkrEqQ24Y7ZLiWRFboXkukz5AJcdJeTt",
  "key4": "43yVZme6SV71SYvYQqaX9rjREFaAnXewDr68tRR7nX36kKc2xq1Wt4Zz7J8FUQyj58UnjMmnNujqjxnJNfUTn4Yi",
  "key5": "4FheiCLfprDpc92bXuHGaMscmJuvK4Bj3gSrgiSs7xWuLNdz2PJfx21E4dFU4CCSFJQWCmY3ectEgi8q935pSwaQ",
  "key6": "45Lk1vijZUXQ1s9L3hZ5BNjCDHC1J2zQAkqHkTFrQg7zXVKwwpeAmRwp7RcGNDcMxgbkCWaWgj5Fe5FQAvibeRFH",
  "key7": "3FdyQH31znnyEyPbqN5yjxVNfiR2EQrRQ6X4eXKbc6FqUYvgi1mivyAmYSPezvBFtUCp8RmwZVtPzy1gAnucHQgj",
  "key8": "5QAAxznDsvSQa3iH6sgSZHwNU5LFzxTetqRD2cntM1B6XJs7VT66j2p7X8JYuNnD3irw1iSwGsTtDn5WtcT9ZfK7",
  "key9": "5XRXc2q8oydrKFPjFsnfHYuXZmaKXLzTviebsGacSpNirQmQEE6bTuC6rhoMnDfUTrwidNw2t6RmUjS6upJmgVk2",
  "key10": "2bB6bnLf1u6dqPavCkxq79yv86T2ynjfrvALDLR5VsXnNRKtC2ynKRe8s7M2o5ARmryd17jtZEQaTccHqaWCswR7",
  "key11": "3KGFr2y8PkdkP9yHSyYPWAsvpL3QsAYNNaZdWpwi8PpKFnhZprg7WXnKck7gBkuzCwdfgqC1bsipV39efi1UrtbK",
  "key12": "Lvakoz2hDCWTTfjnaN3YXQiFRjCrkAyhe8JGt3ADefkcYM9BRETbPT5VkXhiysARb8PETwyDeygC4SeoHPFgjSA",
  "key13": "5bkJZXH3t8GLnJWnoQmQfFE4KQCijH8NoEAognvSB19Wf5KjNVPfaCXwEArj286g1su9C6F5MYxHpRLWKsx4ytfa",
  "key14": "3ZxYhZx7VYsqnULDfLsosbJHgeUoB3wEjaXfqWyRF2XndAY7MGYcxcVYHVi3HS9BVLbKQapECXmpcprAthnzUPtG",
  "key15": "33JwwN4o7mqNXeJHxMS1dvQtwokpwWn59cPqeqHRepNGM7KpZxBYQSqUrHyAYkx4bpVbsFzwj9XotXcBn8uG16EL",
  "key16": "L2YoyK8AqvLSSvQZrS8gYe1MGUQFvq2iJgJ2pzjK6Eje1UmbYkBB3afvj8fPRroJAFTup67BNTKFFEWztcyFYLK",
  "key17": "5bVGCqFLkifDZVKKuenZ2qGvty7ioGCH8sWVsC9JK7r882wM1y5v3VK2NvEnYcmUuNhGuDd9fcJohFJMAdN9evr1",
  "key18": "3GTgayN7oitCkemXGvhgYSFp7JQi3SKZMpgbFKtiSvjymg8VooVYDoPbqcsvNqXUg7Gni3wuTxFwgwUDMzAGBAg4",
  "key19": "otRYG2UhRWEwaoTKPjSkJ3HbMw8ZSNdVrQZuZdwcN7k5Kvce9fDRPdqTbcwuZvZytMKvPeoBP4nnaM4Ea8uTXK9",
  "key20": "5EwtnjZFJk9pRtX9BGCWSxygRQpjmsbqEteW2YuF827obsMXwdnwuwqrXZ8YtYj2EdezdQgtWYXwCLEkoz1gZsny",
  "key21": "29Ha7CYjxSfNmDmcDgZRcyNSbXCvKyBG9AuTeTG16nVg18AFycCtyKWz4EPE8fNj6SoCizF2JH9AHkkZxxGmBskq",
  "key22": "5DWWzDanZHNUASA9Zuory98kgbVrWfoVPSyWF74QX148YKZutBZqYVv898q4jqKWAgQB2Y2JuJa5kBPELFdDbRMm",
  "key23": "4AbYhbDPUguboUZRmE5L2madhBwH1hmWMq1HCn6fkB1tdbcio3sbrkQjjwufMVUDGFpPxvxSVDesnBoTYNGBGAjB",
  "key24": "3YeoBxCeQgDJgkeCeZGRvjFnRJNKxRdeE7NqoLevbvFntwFLQEc9y5Fk9Ff9RvEMEh2kiA2qkVViQKJY2B1sYXrS",
  "key25": "3WgYEQ4et8WJM6uEocT6wgcEo2ZAbt4ashcwEbrZRyuMoTDKv5uvfDVvRkkbpNpMy8TpJd7UFG3VAM8M7GJvcysi",
  "key26": "43hJWU6c37KaTk3NFszASvTwj4LCEzNXT1MKKNUkkug51qDwgybsju1hRbqHozQCf2mW4gjKXyJVYMoEt3aS5hPh",
  "key27": "N38Wdu4KhiwkM6ZXczboH3AhTodFC77svvV9ifJ4buvXi4WLwjZAyhAnTu4LWZPMq9DiMDRunWqKDwMiyDWVXiE",
  "key28": "4E9hwpwqU4uNSYUFSZqQ1XJE6eKXLapFeXuM8cAawHDX1jAPccKo3rd8dm2noxs23HDgSbLzXoPoJS9GCNmBuCKL",
  "key29": "5HZXx8JWWgJfyo6iHYhR4GA3bFvtpQ8mQDfu63VjTYGkWrdYm1vCVeTtpJPi3RBTASC7vujLrAiLPTFw5N2QEV8K",
  "key30": "2AdA7UKsvg3wiDesbk7QfPJ5zGEFvUFQdYPQyQrnSmga8zPFxvQZLnCSDamh9oKrSc2eAkvb7phN1vHBZX1vfTsX",
  "key31": "38Rk6ZneVBYK82vM6pemMaMAUAxnVtnRVUC8JmhPro47MvuAHvWm3A8ddBYot5NJ7nCM8ncvhtUGHWTgrEG2LJqb"
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
