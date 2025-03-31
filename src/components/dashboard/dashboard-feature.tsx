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
    "3qcVL2jFfqt6oBYRanMLzSx3wJ2a4nKuJJStXmdVPziwfsxFYLSJ8mG177pwc234TmpRn32UhFJk7PGgdAMJHbyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AwH4bfxFru7PZ9XgbSqFcPTsBhn9PRsaj7XYWLvcn4mHQfAkDCD2bofpVDphRuHfm8tw2xuLvVsBLir2CBf236s",
  "key1": "QGqve4TP3QPVMsVLA1d5xmyptQMyf54JhHqowi6ip2kZUq53yurMdghu2dkdbaj6unMvQy9fgTBCfcKYBs6LKmk",
  "key2": "5uTSsxMGmeLYgtd31CPLRLxBJbbpRQCN3kqoyQd6vhZLMiLoWBqyNjAbLUrd6aYQLMXNY7Q2xXvakgPmeRzo7zfc",
  "key3": "4fpRP58P43kTfmnDdowuRMEw977BV4VDh4BhEBSdFz8YyhnjwFojkbNz3JsG7NrA1PX1Swyt94Y9F6Wtqs8ic4j5",
  "key4": "5qZZySXSse25QARhuQwUvazkXsRuDTmfCePSLv6hGBSNnyrg1UUmLzZ8GrbWz13v6chhFGjAdYKo8h2freMqvyQ4",
  "key5": "B5ynr9K27QvAmB5anCocegnpKwF743EzeTcU98Jb9GBuzRPUoeaEQJ2kgyYctzh19eXJXVaDAnfZHdvpMQ5bsrq",
  "key6": "3gnFwospAdbjYoGgkscqhTgZYqpYVqNYhXdQzBHizbT7HavZaZ2M1kwFakMj9TorUQNheYTJQd8yHVqAaoJSP1zZ",
  "key7": "UpmQJncQuwzfYfZZQFy2ZuhwLxbpuH1Rr9c3WVZWhVnNGerNyNsd1QD9REZgwwM5E3MArjAhV9DDHUVQyZSeEPn",
  "key8": "cKKfBPu3icWYpDA6dyeU1fbFuyhbqyZpAU5qFkDsFki2QRFt5Kig7P7zwtZRSmq2Q8n2Mti3dVXu9tK9r69Pz8p",
  "key9": "3ar7x2oKuGmzUMUvC4g7TGc9n88pVpM5cCHmu5XEvopSFi7mhJYfc3zwi3yXXXV9Di3Q8yTNxFEjP5vPkAPJSCRe",
  "key10": "5WufkqJQYFdHzyNzmde5MBKVheeLFb6gUtLQgHeyMt4njhSfSV697zUr1rFN2Uy6y83AgfzCJEqoyD9GC4j5DraH",
  "key11": "2fYzRGiqrrW1kYbjvyUQd87kzzTdESiPdqJkHpksiZhLMY63ccDxW6GiCxvgXdWzUSP6APX3gpuKVQ5kzv8pc7nh",
  "key12": "mkKjNyRxSbc8EmZYMA7Xacimor3JhpioERhhuELhyRA297eX8XYDhoFGHjRrYd4KntyHsgdtAbwESAB4PoKA5Td",
  "key13": "4k3ZnR2SXgq4gcEf8SNGghRNhpcT9Ecp4xZJyni5RLLgm8WmNCown3rtyA45EvWRQY87P7JAKB83rhKTXARU7ZRC",
  "key14": "4KvDT13CBhtC2ztymB3bKWH1s29Fmnffxt4xgTyKcG4LhdznAYbSMD6FoTia7n2M9NsitxH8Rr1f9tZo7nEuXa8t",
  "key15": "4AC7Lv4ZQ6qpJiQPkCjv7eTgdTNoydpKSBnwUdGZXhdVUXq9bRgWr4fp13tuT97Dn8AemTtipastefqUPv5W9BHS",
  "key16": "Yh5fGr3K4awDpP3tHZVVaGxmnb8kNyb4qMwfMWLbeUtmtEroWkMxaHpq6CsS1X1t9Ua6HpbSR96dti4nZ7Yeadg",
  "key17": "4yA44V7WbUD8juJPULK5nidcYtR3D9rBaHhUueUcBKokRKJ7BJGTSL9iqknhXnxQM2rYAruKEMZqV1cPTq6jhZM4",
  "key18": "5w25G9kqgrdbJL7fvSsNwaBKQMUtffD4MKt1hQRs66UmTD11hLd5tYP2AvQgQTSPyjt42GbjSbP9jZ5mXCNeHk1D",
  "key19": "3PDkB6VL2czHP96pLZ8hCX6HdX1C6VBtA7MJDkv2sKqrmmPGMuanEZRBddbGqk8sgJJsba9GYVhKPB14RuQ6EP9e",
  "key20": "62LbAzpAE6hzWQYHpxc9JNMsk4gmoZRYcPuafUVLGmddw4UCj2iYMtwgGCUYTrY5m5VfBEK56K9HoDuTYDD1tkrg",
  "key21": "WrRzfhxp2LmTtorygtTw3AJvxExwH8HnhNfwjP9LJjNibRQB95dswEdSmCXPFGSMsfAvQfSVFyTvHpfazvPLwHm",
  "key22": "UktoxV1fci24oHuQgLixfk3EbhnXo3HKQxiFerUeSxLszUFzzx7NDyQ4tZ9HdEKo42fwa72Wsc1mgo3s9C125kw",
  "key23": "294gRsFpmZwr9LvezwFv5Qect5XpqtCFERvqo4MD9uvvGm5biJSHfCyq2zcmMb38jZGczbJkbHQkwaasrTBaqTQp",
  "key24": "TiwhTJzHQxwXp1cYpLAQXwZSLg11f3iHdmk4GCwJBn4N6YReQJMhtC8Geux6QpA8PH3Rz3KouaA6YpsqKnx9y39",
  "key25": "5pJ8wZjkVN5LKFeXHvVeG2E57zgTMu9vukP9HLDAwvVfMtPopYuVDS1ZAkLN4AYNkbmqd3rYbeCN9TGWYdLEvyCV",
  "key26": "5c2EF25vE4uCep8iBgcupsKstqLphbN9daxu7Mf8hTp8r9veSHu1GqK68mPYRCYgT8CavFJrNRrSfofPQQjHpEey",
  "key27": "63BpGCZZKxLyowhVE2jG7QLZji65WaojYvVemQH16k5m6vFEmvLDvwHp7qWdZJFG6Gy1baZ1PRuYAovLmF7S6k8Z",
  "key28": "2rR5JD158m1ycSpjRckKjF5WU5U1HhyWKqqmztntKXakupTFQmiLC6r5tyZbzjpNKzUxiKnjigiHn9zFHuVBcqtT",
  "key29": "t4A5mMymHfPM8vp38491ZYBcs3QcvYBFs4NALPz5HXEQHz8HE43kZjkvNSLuZ7gegVUz1wWWphpFJp54iTRszem",
  "key30": "41TfjpihUbg7fRTpGSBTkobjBi9hSS25CZvgdiDuqC97qLC1VYb3HYrehtwiNYqboDWPzwDz6EoCjubr9ATizda2",
  "key31": "YjgxDWHXxHfUJFAtBPaKBboqe6QggMfYAnuaEwkNpPwXVDCbK8io53VjWzTkuAKN6DsyvqvHdNSoPBaw4EKGEob",
  "key32": "5AWXrqydtBbesruXCPAhe3g9DmhCZCgLfijkpgGWJ17BJGztnWZpKfG4D63RdVfnwGeC1xb9y1etzqLDGHRdFMdJ",
  "key33": "3fLq5caiKBxRua5jUA6Q6M3uWNo9TfHA6TmLdAdXG5iUti6fBJaTF4Jc3VGrpWDwJ1YvxbwwDNgFGjdtbpd4EUKS",
  "key34": "3YafwTq7cU14pS3nK9LDcoT8uT1Bvwguuca9rrKR8Fti4xd1SyEobNg49E8QUYo9yTsJEdbfhoyNxy7pYXY5ESXt",
  "key35": "3CqMmZp2ajRgfUUjKbCdXctgut9muu6x8P7KUviG5SbjWfSbywQNKZw1rLggF1TzboLQ7KNpjqVBBESNfHcw2fux",
  "key36": "hR3BKoY4T1pD5e6Y4m1hCJrzn2fBjXJW9giEKD4A3dujf6bmitApNUDTQogQfBSRYzk7Dd2YUgMhZGnx633gKHi",
  "key37": "4DShWNB5TbbaJhDzZeVXgmB4uVvxNc6Mtg1mLcyoHzVq8YYjQPstUjpPh8XQNWoYZj7ziCSVAC9ikNJxEpmV5x9X",
  "key38": "ep5GbMN87dohsCxxEMfeTQJWz54uVBRHe3KGDXn6KpZCkMKd11FVQ2zcWy57dHPJzTLDKBYStV1XDHu5mT7354T",
  "key39": "3azMBCJrEWnpk4WknUmZa75zbYonmbReB6mgm8dCjdWdksQDEtDafj7NoT2pKWWbeN92HLqyjcPtY3hEvMzsjx3b",
  "key40": "5n3mcDvrRUWKoALbzfrXVmA34mHYZGLJb3R3FsJnfWma1d7fB2W7tBKbsLx6VB3pcjDfnrgAw7PG31cLK3YapL1Q",
  "key41": "2idLfy5w7to8ZdBHWDU5Di1dkheSjnBQbEcrz4S1V72SgVXpboRiqNjxUCcTJUy7MTjrDkac65XV1UfTDqHLsdRD"
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
