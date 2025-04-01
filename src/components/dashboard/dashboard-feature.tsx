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
    "4X4AsR9FHtF4EeWn779tb7Eq4A2bLk5pShadgGgngY1gz3uPDMk9HnoZyX2m7bRGuLRs2u5ToswQ6mEBEYTTjZSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47et4emp3G6hTPStKpqSuqcfBF2GsiQfxTZVLnw1stJgjML1wi23NtmTfxYu2Ji1BzvJPAd2jf1ofNbXTKNCbJAv",
  "key1": "3FRduwEWAxrWsb9rxZacXc2MLQVxF4TsT4Jq58WJG7soaJcipuUVo6TZpyL5WayPgCbeR7FAd5XPEvwZ7g5C7wmn",
  "key2": "27hRLiiDmFYADX2SenLDMacFucrSMtj6bh2hQp2eSULoRwRpu5FRrzaaP6N16Tv1ueB8nuxxUSAieqQiVAmzzXCg",
  "key3": "5VKjGZigxiSumpiXHmxqBKyMwGWvBC4GXkJsH4W2dUsGkXejw4ULeiAbNEa9hyH8FXJN1AQ2GLwQtJoi5tet7cgD",
  "key4": "3mbFVfhdkitBbRmnAWJxhymF9aBd6c4GZwWtLBLWN5gR79w41QqmB3xSRjGXjXFWbubZ9MdcRrKfPxvbKp79Eatx",
  "key5": "3A577dFHpwo2YaMSyG3qkXdyEnqusfUDK64SE7iSU1c8GtqJHiKuvQHoBeoDrtgbaXyFR7RjmAHBrdE497ohRwKY",
  "key6": "5qqVk941HR62iKh67Ev2ffvbMtrzSQLhHooxhyAxvQ6BpvmaTB7XkMa2hMNg1C8mkCSkEHHZ17sGmrAAVisXviNw",
  "key7": "3P3qysK9T5oJATY3xrrqD6uxUno7hPRnMxQL1sAhHwXMBATTtswgKJaGsqHqqVfZKTYCTctNamzEW343je3FHiBV",
  "key8": "4mMVzyWRdrD8rbuQP82BgckuAF5TFveThfCou5Gw7yDr3r5j6t529j8SejNhxWjr6Sqgf6zCcuHuZqZnx1nGuxkp",
  "key9": "2gKdiwb3UnkKcKPJMsDsNXWDBwi2SPAXRdsT99gqniYzCBBjjgf1tEbAAdGWQtdZLC2RyRA5HZ9DeApbeZVzut9P",
  "key10": "5mtmbG1NF23kRNpCRHe7Td73NXfx1BoG3YLLQdRxbf6se9MTAfz8u4GCmRd2t4taGpgXUYVq1StaZmw7ogi6Xm6a",
  "key11": "2Vhw4XuTkZ1gMbAXek5Povy5owh54XxzbvNTV96f2GFVSm5Vg6scYQLNNqGQZZikCiz8U1avC24AZvg5LpZdQMin",
  "key12": "55z1mWNMwv6Z2bvrJA1ys24gtbUTmjn88mCRceiAw6amhBT6ukDqoUjF6HCxLj8xNaHqQPn2qAwM2tBuDMxMNFFX",
  "key13": "4i8W9Vqg9kxEsYVNDYT3eJ7HbMYDaBcLQcHiHP11GLuLNnTHs7guHN7WZB9HcphtMaHeKgWzSdPGBvFV9f7RbhTj",
  "key14": "39sUFrBpk2cEj4W18VHYUGgSjJXaXoeMeLMoDKJyZf2zgGXLQeqJvBvFpJpfK38g5NRnhS1g9pKUfMJwoxN6vtKk",
  "key15": "4UNgE6iJoQptqjxQqQm8dYtRzyESfGkj83eJdrKM3WEPzkEHDLrPK7duaEkJKtDjYm36dkfcRYzHKxibktZd2Vxw",
  "key16": "26b9WbiJcU41m2go8jYPL3ycYH3bAnXUHByu3VnWadL1pPufdeSo7qYgfG95dDkjRBN7MNfb65Nn54z8gsG4Mz9p",
  "key17": "Ry5KJixX6f3tTr5C48rfXe1YpATQDGoH5nSbE6Xm2jAwVXckcNtwebyyKGyw1tvj3TQKKS58cMgG923eMNM64Vg",
  "key18": "viMiF5GNgisxpQFgCS2a3mKcfBD4j74hWFL94jRXiC6nfUtKXE2oz9rCsFPF5nVSgAh2QxwZ5EtEd52hQZWW8tu",
  "key19": "cxpYEDhWKxH3DPBiG6DSjfzCFkeTjR44BxpZPF5ZK1LSkhBFkpk7HmkGrHirS5kkQx5fsDry4wmbPddmqb6Dsy9",
  "key20": "5nicQ7BPYQyETZeQcWZnsBnQkMiuPZN7d57kTbrdCTv6ATVqpdi7WpB7AH75DGUbHAEFeMfrp6XWKzfE7kdckYfb",
  "key21": "3tJXB1dcAuMGTSC37bWFvavejReSBZr712isUzVjmoQiqHDUcCWh3hScJTnKsnPnDEWeo4aPPk7Nkg9JqByU8kL8",
  "key22": "2o2udWGMLBLxxQ5wZDR3yA7k5A5jSR3QsjRXj5NEY8YXuX6JWaX6v65EPT63JwvayohdGVE3oEWFFpVjrFJXparo",
  "key23": "Tj53Dq3YYhrnRDc5bFCuLxeqR2UYUbMuERo8Nv3Ty6Fwc718AM7EgaFYNs9g2BRwAdcfepNV7a8Qhsopvtzk2Pg",
  "key24": "4WZTmoSWLRDX42esNp9ZdxYMNAtxSWfEwaCkeYMRZ9p3Z2bM38qngKEGdryL53KkV1EsZ7dq84oVgJQjJL4naNyC",
  "key25": "3gMo88fJ4srsdqHwmnJhRW6DNdDjmMbGLEzEWeGYVrWMQ9mc2qLn1BvFkMPS3KaV37SEpsexq3nVwn3erMSsj8gC",
  "key26": "4au6Ge96McguikrVCqUKfWY13LoeBoeoiR1tau6zkELi5JgHCAtbdAGqfFoG1qVanfwdL9JgmPtuoBUihbEJ72Pk",
  "key27": "5J4wxLZ6SLoMF2R2brFCmZDKQaQcwJoz82omZsXBDBN63T2gYZKcqf8pWhxoUedBkEv7K8rHj8ki2EsMwW1extux",
  "key28": "2SKp1nL8xdwLSR5X2BGttYjJb9pr6CgAJgv4rKoif8qXA3KMz6MRJuYaCGVxc9m9PQNdc8AFvXSctbe8B5TvgERm",
  "key29": "4B5PxYQ2ovEP5XEEVZ2GZd8NJhPXNsmJmjVkyCriWYe7FgiAnGKUGZeuWhvxj8YdgYWqGR2znE7CyuD2Q79S3Qg2",
  "key30": "6p1XqUdoKRoPobHhhkAxpVf9x2JT6UnyaAR2eVVrUJBAtxAc3Bwxe7puMi8ET9k14GNQJXJf1dGMEW3BK7gLrXq",
  "key31": "3yyaPq7Ebsh1SgkFL2bTekzwVqoweAJbsBeYcxPa3BbDQ2bXQgiFVw8YjJovVjNxeSbpSKcQSiboigHwb5vQmACd",
  "key32": "3q5nzs6FMb4eNAakSigqTXktn4i77FfrXNXSEZBoaNPCBQJF5rggTRWryziyCJw2m74fz58TvnZt8kVUdcH2phkW",
  "key33": "2QMZTfmDKWNk366TcSYPXvwPvhrp2j9qHNd7tx4iW1wh9AMf3Ni3RMuuqTxyn2UjpberWkQbyy56G1FetW8skYaH",
  "key34": "MkGvta1cM8ATJgAEuh9xGARUQcKgSsbVA2KhGrquy5W2JcGyTJ1ciRguSrCepADMeSWcRRS6YQZA4kh3FHZEcp1",
  "key35": "24xjZEDnMfWm6seg5VfkY9Tn28SuFUvNKahCET9bUHdJihCj763qyQywnBcJENXj3YxKbHiG1yukb6Q4v5PoVf5D",
  "key36": "2JvLZFkDyVGimjQzPDSf4LqQB3KPAAiUiEzz4dhpdg9VToksdaqt7VYe7TqVurWPxnZCDH16SNyRPhGLXx9MhSE4",
  "key37": "5XBBp1NhU24dSurozMu2hKacG2qqw2YDQa7XJwVvv834z1SnDKL5W3fECeVuGcAXfjASjDDKKW7PzotBJUryjCCZ",
  "key38": "5Djw4hfaLSevPy7DQBGAjPE7j5CuKnXYLuVaaEAoe66Pu7xgJ2zYzAUPYcVbqXLEAk3t9v87HyxR931CA2aXrXib",
  "key39": "22zJPboPizR5WzhHtAMdyLa3HSqFjLV6eYcbj6gEgydYbLpzqJ3NSoqZ3sJM4bYFRRu6RSeCVBtYBJMrbvmNgL1A"
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
