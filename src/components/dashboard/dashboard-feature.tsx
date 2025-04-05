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
    "2MZkYRXkwpe1wAejw8Q7KbAd8R7gjPyNBxQtkGAbUjAk7wdJMjz7UnENvpYFcCXMcp9o6rDYykspFtySqQgEgy74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7V86yNVZ87LweaGNV5o5G4wdEBDNth8BSsPws32nysZXyhpwgo6Fd4WNE2zWyKofpTeAiiA1rxzn3VqhJX3Tps",
  "key1": "3uF3pJ2XN35HGqxdTmnwBwrR9nnZXDuP4PFKYf1icffbfbxFyBPVg5yqdKekWyZQeM2FP9yXk6VrNX3MQAA9fivA",
  "key2": "3URCsKv8GQxFU7wXYoW715btuoJTro7aZHhQBt2BVi8FpJEQZ5ToYV1CQ3ZpZhRBFsC58D1W1hsJA9p5hXKYCxQe",
  "key3": "npWjLAARq9UbF4f17snp4AZyYKagFZs5YS57fcoGJST56uhev8jR5AwEgduVayii6KdeHQizRXujbYUNU9H1ks3",
  "key4": "CKzXUmRtyvEP2uqhC9H3Wt5mWrNmtRktnastyGrcgugM3KJ3BvXxfta3UwT88Ap78jqQNfvqctrQjDJfnpRUg1A",
  "key5": "qaHfVH1Gr3DoZgkx1NoMLHFfU6wrK8SV1ezg6o8o5x1Q1SfLkbgtww3GegwTc4WhvZtEws6x2QHiFAkU4B7a5Xs",
  "key6": "2SeHNuAb5iqMpYP6xaMZuQNzpuuELZi31LNnbPxNLVWoAeDs8ZiKcuJsuAWt4pMapBwWMtDAy1P9D8hd4Q5VV4Uw",
  "key7": "2p6HmyguSkjpv6q4PSm1pk1PZhgj78dvdaGAefFRpT9UC2jqGWKRDQd7JJ33xv5Jm9A7NWfUABWt6QAKKALgxika",
  "key8": "3FM1WMKSWU1yd2sR9JcTPJ5xuBstmf8iRWMJgPPndrM2SGgwVQvy8qqq2ECEKPr4MuwnVPbwborCGGzQdpGUkV5U",
  "key9": "284SSquzi8UATfpgEreyEKxeEjM9YC1jZeM8Kjm7WpiE2CWLopujhpUyBLp1cwcmFUJWCgFwiMTJ6MLgdysh4DUg",
  "key10": "2sruJvtCnDk4HKp5zvbRMfNS15Farw8TBJz4XV9cFiG8ciY3QjViSYuBmZQj6yoyaoqsNFkzNSvHZPBemqEkp2Ab",
  "key11": "5fa4jveGDQmu9GgAkDkzd8SZsDYFeJ1DW5p6abwzmT6iNVnKfzSZx1ZVQo5zUA5SV5AwRNeG5ERhpnsJshd1nqXk",
  "key12": "4iDG87C3Kmkrc7MFs7rGDKd2m6vTDWwS9P31zNtUa2DzH7ezASJLTc5f4uuRHdR3c1vxFVGmoA3qZ1sZWf35PaJz",
  "key13": "3wnygKgLAsi44eihNgzf2YVVkUGrAnmsq7yHqs4HDQpDvynpP41hVtyCbE6E3sL2Rbw3t6KudW5PrC42qQEdiBak",
  "key14": "39bgyr14JmLmzEY2Eg8nD68QdQxJBB8wYLLWJ29C7N7NTLtymKWS9L29bbtFtKCTffu7SoQuyBfFRHNktEpjG7M9",
  "key15": "v3nikNpjPUijsxJLjgmGVkQnXHCHfvjU4gjk3WKnrwA7wdbocFjH2TGq9RFkVGcpa8xtV9QP6spSQHur8SB9TAQ",
  "key16": "2DnUnrJpVd3JYuiYM5WWVwBeB75tbh2oXJMu4QA5ZeB1EAevu3Bh9hFfS9oDxv8aKh6TMtBB8oEYze2uoiEGHqBd",
  "key17": "25UZaJ6Bk6anoLgXzUtwjpaESbqB34oGQdnyN5WKZ9uuycaicizLg2jtAj7wfTtf7Si7dtaLNmmSEXKcy1YkGw25",
  "key18": "4Z49oZgGCVMmDvXXcqJ2khe1kGW6Pt3S3UgKosFqL25A5LsaTWnrtyw4xvrUwvfD3rAE58gkwWS6R6yxnzWF5Jq3",
  "key19": "4XDbsq1K9NBXagLwRuULMFsLyrszuDj3ZoFwV7m1Zmz7qti6QsWMjpzZNFv14VcE5Jajgg74Yj7UGEtvEXzXqU6j",
  "key20": "39zFUcqJ13wm4aHEAUbr3ZpL84PRuLGQ6Lx5eP7fjT6iviPMhCmUBa2kAjsYPchjVe8wL5WLJfqCnNNYzA1J6h53",
  "key21": "3AnHr512gvLykDeZwaMA2raXjXGCnaxYdBJvTCLXkT3tkHowvtgYKPB8wzti6DyZ1SGkG986wvxptf1Mb8t96uMf",
  "key22": "35geCmfDVV4qb9t3t6N5AEVc5PKSRvAyWdiXkmyBvuAxbHcU94poB2vj8j6dyvsTy6HofvNJvT3fQNeWLLyEVBvF",
  "key23": "2RTRzFasNFwPtDvEDHaz8HeRfRkk2NbwjGUgyGHnqCqnNbKZLU2JqyeDij3hrFBLnEXdWYHu46NmTEGibcPhPgCL",
  "key24": "3hH24JrjAgvgaGxRcfX3zwVhHsjZFXnxPYhF6z1T9QvZMWY2ycmsY7qQdoVpfnQtFmVyiMt3wzPP13z98P9HdBuX",
  "key25": "5KTwiQFQ7rRJaWWerNDwqZjj4GpxHk7nAmZsqnYfpsqB2hQQv9W7P2hyu8dDi67rus5yUT899yLvSHPyeWJqac51",
  "key26": "kNEUyMnHNVoCRCVbZK63io8vYoFyedTfqZhNuBkFsDBn5PGxp1R4GJhXYxEn2CwgKH6hqcSfDZbyyEAP5QkUm29",
  "key27": "26uMmTQvZJaVFm8bv7wriHq65StLEEHKcc28a2TDdbmxYmXUgsSMt6SFNNzkfWvLmVq9PxgD3m1fi9DLnHVrcis2",
  "key28": "Dmvcj3SfjJ7NY4YxVmNZKVHNiijgwTRe8U5GQm1RhvShH42mq1TXjEYBxrZEJjUJm954dahT2H6gnSq6KQC7ryX",
  "key29": "2EWmhrY8AeSnZjnLohmeqi86r1eNHXygreu8YCSLiRLqzMczZBih9AEXNn8AgV1QKsDYKpJkYiHFfhXhXLom3KMA",
  "key30": "dpi1kWPrGW1apbskubAXLAVHqoF5N8qTYqpDDxrmnp2kpXQhdvUXDnBudCKqnn6Bnudcr451QE7aNeJTowcE3tL",
  "key31": "4ks8oSfNXex7UTi8U9A33MU9sMBsoPGr4nALLUpjby7i8w6KyBVx9yG3eZbo6gssQBggskEWj6vhHeQhSYFqtBtC",
  "key32": "57ZcETEAxfodfLWKzrqrZpPE7zWxDVrsWWSB1eSckwJbZ6qiTYTBnc7GDhcoxPbwvnY4pCNfWEYq1LYEuRPWGPWx",
  "key33": "4bx13bey6wzXztShmCxP6xPJhurbeb9ccoJvCSSs8zuWnBaardcsSLqbhYgk2C2jcivMXXNa61opGCEQNJwrcx1p",
  "key34": "5uFoZpCERcrMdSqZVtufzWuMy6iyGziU4di9NrbH7KMxE9n66Dnamk6N2n9tZLUixFBfEvL5gw7sxcKnoVZm9iHG"
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
