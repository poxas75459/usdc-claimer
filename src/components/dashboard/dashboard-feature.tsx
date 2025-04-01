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
    "3wH1VcCbPsWJ8sfmLigSdMJ4EDR3yKZ2WJbWrmHBAGTQpjHZYqksoC46mctnnhipUkniTjTWwX1YxAU9XzSmUkSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ey1wnGDcPdAvr5YgfE9dsa7CdwaNWfq1Z6ZKurD7FnkEm4Ukga138HN9HmZy48Xnh8xYpE1fd2B6AneFepvuxBC",
  "key1": "28cYk8yWj8YcQNPZDaqFPY36jzM27bUSMCgRqTuhF4SWShJpvM5ryjB4n74NYGKMicbk2AhxEE2PJC2yuT1TK53j",
  "key2": "2ZR985n1RJT989KcqSddvHt5X4d9K9x3CYqdsNKZqFsCTAZWhZEKQrQCWXEd49S2xpDS6CToMvmYo5Dg2i125r4M",
  "key3": "3MBbQPnZc6Qh3ftaUw1MUyjVWVuWVTFyh4aP5qqhz6L4RuLfzQ11YfwwFUxYW2jBJ7Q9zsgnub4poS9r8ZQovdFc",
  "key4": "2BnTGKR7c1GxKUJMX3bV77kkLBVE7U7zwQ1MwrMa9dhTx5RWUrbYz8MP8DT5vwJDPA9xLpiNS3Lyb6MT23hmYEwF",
  "key5": "2xzuTYhiW66vMz3nmm4m8Asp1RPt7gRpANcXM6USySkusDEPCkpJTZVAALT2XSJMi4gAYVAfAtfBKd7wNtKER464",
  "key6": "cVQMzpsfwL1PYLcCJ1qFaBmfRrCwquU9vq3LzvhY64QVCviM8F6eNXHesFyFr69oX4eK4AEtb55YZ4zZudAyrfr",
  "key7": "5F5nqFbSqghMNTwPYF3rPu76nCTn5pwJHZZnPEdEdsXBGNPEtgApBkSu715Zimz6Xi2kBvKJvqQLjwuNvemuajyW",
  "key8": "3rVoshCBjvnWSb4GiYjEvFPYPHokcaUTgpgcoumPySfKa78Gkca2RvQktEf17rCJ9M44X7SmFNifwvBojz9rFaQq",
  "key9": "3EvvGXYeD7p2MVLDBM7LT9CuSd7ekU6jpgYB2354dd14cr5QfR4wCQYeH3SL7c1934mgZSR7YVu1sMTccndpvt1C",
  "key10": "4RiNjfP5AveVKt9expFxS4JBHJE4ADcUYLTSYtW4WPdaS1YSVBY8ocU77Qa13iKy43rC3ccA8prUyXnnDKWWz62Q",
  "key11": "3LU98cHcMRerMaeu3SEUVEiZ5Kw2vy6gm8HBcbDc6JneaiHnrjNxv8NM3EU6pu1eupGF4PFrB6PnUsSMRFqimkK6",
  "key12": "3XHWTLoGN7bW5Hme8RFyncrG1Tvx6yE2T8UvNgL33RMX56mWxarXn6ydd81Qv12H5R9g4nRY8vgHTxTdLREZ69xR",
  "key13": "63Lh7T2gXgUHQRLefG5QNJmWwTT27c4phpQozVv8EVtLWYFamN6bLWJC3bE3BYAtvDystdnFbgucpv6QNwFBdz23",
  "key14": "GRs1HicQiwv8PgA1ZW6Cp1nmweAZsmjFKb7cktiWV5weitn2hoEJf2h8K8rgsZk7AEy1bXaFNdcLdtfhfcwUR3y",
  "key15": "5qRAFr5uQ2dBBf9f9gusPBLrT8YHyzJnUnhxobk49vwZXYew2ygweuU7hUXSK9KRpfgtiiVkvh8QaX3Kw4F2wEig",
  "key16": "cQPCeSu27QkGsE6qynfb7Rsrd3GnhFfqxP6RCDWQhhjpDeKMcmBrgCREWe96wNdNosCmqfHrcNuwNq92jCcTeHH",
  "key17": "3HyzedmeBKvRK8s24Vnacbc1Tr17GDQxYTd7iNVJG4iW9MWvfnQ67Tp2ZJ42zoc1NW7PMV26USTacJpBr5Z5nuc6",
  "key18": "3vj63HxdQ1TJM2q8cbrzV5v3vayKaTqH4bWA7NjAKByK2DsjmqgtMUVLHF1cSgYTM53QQP97Seu9UJqjmSzoZ77v",
  "key19": "2XGPLvYBBobt2ucLzybdGTvhe7JE9ZNmrfAVY6R8VL8KQ754Canq25icjkbtxfgpCxPrap6W2Y3s4aHS635MYxt3",
  "key20": "44vN3kyb3hb56mnWeaSRSa1FTAoRf44GJ6P8jmNE4AthfPjcfeMZ853JMq7UsdZ5E12uWvXhTXXt7JxarM5YCbLu",
  "key21": "4MLQQSZXEQsSjXQFQRYYqc7beme23iNm71VRHi98Cf6NLZuzJ2iXcg1UY5ZwLSrHAbYmCiKADLgwHaGD5pK39KXz",
  "key22": "kzBccNmwcCAprNgpBms71f49N1EUSCwF9ZVX1D6XcCTJsn36aanyanPrgjqqVgf3tNpd3dGrWtuHzAdXCcWoDqw",
  "key23": "EHJtSDTzNgSeuoU3nopcMCXEvk9pn62SA9QyCHfuGG2c5xjJvnyyhFvpo7KWqz1j2xX7EGVqFC86smqXAnx1jJB",
  "key24": "39URX6WtvfHnd9CT4i9vRQCRerksecsPCDhueS2CWi6myG4RPRLY2kXZGaTLutQPRQuiGgwAGdk3c2XnzJmYaxn8",
  "key25": "5imNEA6WnwxJGUedkZPa5g8oXZLTHHMxHBkoFHdkapscbr1av6h1fYfcUeDoathDSvWSMDCqyYW4YJZm9uABpqgC",
  "key26": "35updunvJ5L8ffBUQF5nL5HyJm7S87arpXoDdTeHuesUTpnxc8527HxpXfJ4hLZCjKH52LMwt7s3Rp5dickGsA1m",
  "key27": "uh9txzZbiPAmRfH9p9AV9yNSCXGDfjYaxkgrTZ7DqRRKPE7iXjmPgHk5AEPEit2gdPBsNb3FmE1xouvKXL3AYzP",
  "key28": "3QcGF7u6vfhgvjjdv69DnUmkiUpZdGeqgej599PTKQ9R9dkuRmxFSzhPTnK4vLWGtn1PZeYdiFwPatUt6WSff1YP",
  "key29": "3bq1Wrr5eV9MQ3Fww1Nx8aV29pz9BLVV56uDE6NAANjTnU9nm4mCtLjN5xXFGAgYiBYEy99mHTfJLn8XWC3tDxhX",
  "key30": "2pnQgx6tngx8QHSukWCHwY75qWRVard3e4pTHJrNXEGYSqzdU5zEQVkpaye21m1aHRPLAWooyLC7kRruGgymk59t",
  "key31": "2svDHDkoDwbf1AGbWsiKVye3yTuo77JbhBEYPHMNwoWNhgrXs7p4RaRAceteDetyFdJkhw7fCuxShPTTsCrs5tvj",
  "key32": "3J8UMZyD1FZwNkpZc6JPMzYbSZmp8nKjneu6y5pwuZVG23nYhuZm7dVfvRSXAR5bdaCp1GwsvBC6nkVhhUtmjBPn",
  "key33": "16Byoi8RdMr8HSgPgVQxR11vxvLResQoXz87Z8YjW36HmtLQs2teRZvp37WKVVNdt5Wvk8frnFFXMRDTnCnE1hy"
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
