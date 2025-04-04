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
    "2ceuVryNoev37SKKag9VqYFTim1t7zcc5KHLdHj4CdW4uYJuWE5XhrfMximnAVSi1dMXN7EsmcucZHJMYHEWxDVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QLpNmk457ZKFvzGZK2mgR2ALRpARdP3LsqMXsx7MYjpSCjZdsrQTe5Ya3pPBhyVyxeKkU7SAxrAzSAmAU86hcbG",
  "key1": "4Lx1spfgR5wCPs6u9FCwhvy72DRVE7G7X7ACgKyF47mkoMwYGRvqEbtAyx6inyw743ZC8CKgyytcxjpcrg5UJ2hi",
  "key2": "2vhnwdFfeqrnDuZgKYUispUMFgbyLv3CHKWwES1WUvQdb8ZHpTamH5LsehqyUbcNLBJk6djweWeNBigkpraCyy7k",
  "key3": "3ULL8WA3m9fLhB6oAxCJLKn5piFcZRJMjSvW6it9iTwzCbQXAy8oXRMCjsKiN1eHVWkmZLARhBGGMwSXXt5FZpwL",
  "key4": "5V6Euh8YbJDBEwoNzSBBME6FTC482Nc3LeJH8P6CPvuHgqrjtFZafCtWxbwdZFyWQ2hcorcgc85ZKw82PhvbjfEq",
  "key5": "27bfhxSdPbCuutHR6wc3sR3AXX2z9L3xxXnkyjUqf2Lo8Yb1GsJZUfMh5CpQdzwWeubepQw9Kd8bHCoqHLCVdton",
  "key6": "U6DtYuSaNjNjVSnW8VQcaVVsQCP4U3yAtcMBvJbdQ36PuQrpcyJL3Ps89erc1ZowjWvRqQKMxRow7nNfUxXvS5j",
  "key7": "3CxH7kmZq1Bg6h3t8dfnrwktxZuxhv36n8A6zrE41ziyWej5B8GuPdwbsr4dWEssXfVeh2cnepcFsZUkboZt12hD",
  "key8": "5zePxXgwTefzf2Pa2EzPzc9g2ZdAH9SqokR4sCswAXKodfvc475dbLq3dm4TFdP8P3BXvZUgg4YRjfAY9p1W19mp",
  "key9": "5TcWkpdsuTR4gXPxJXjqpPLE5xZZM3ecNSzkaoviUwSrGo2ZUfvVmHeiSwvURBMWNoFR7DCuz9AoL11iQ99RqmFU",
  "key10": "1SWig8AeujkYBJGZAwFzY5Ucatf9wKj173uZRfhzBxUC8ovYVL7jYjMbRLuWXV55kZ7Yoay84hUGHJWzTPydRn8",
  "key11": "3857zH4t8ExnN4B2g3eLeft9isu13752ztWD7xZ3XcvRaGWBLrv1s6e4sTH7MRh1xvAV756WHR7JJvePVvSJugyY",
  "key12": "21FjYSuVj8F2SUKsxVvsvKe3TxQqUDozMa8GnfJKQZYhg7DSNpi1uVo1MvRQCEgb9T9XKwNMZcsDdtbpW1b9iU6f",
  "key13": "42VhJsmsYKRHJrJp5c8gqy1euoj5pHWuEXSzcNX9A4AhPrkdnFk2sENbqMGX6qm66rEET3Y3jgLXahR2VFt7bRP5",
  "key14": "3oq6yqGQiuuPZPtmyA7VTLX15tNBeSfUDwLs7fEyVbrFFesfkUz6VfdcbcCPPwjhEhhEjouPqLsJdw7FyyMHDc2s",
  "key15": "hwPdEzDAuDou1p62rjQMcvWZuy1feyKMe7qSfEEvupUt1mqpdF2DHFv8nCjTDnaSvf2vYuQkmut462Gn21KgyzW",
  "key16": "3rcUJ1uV8iH8PQy4huKCcrDy3fafpKKH7jBcwJDAYGPBmY1BekJf3tiNDXnjfa2AXhUcaXmWqtLPHsrSFge8uTTK",
  "key17": "4trA2LeCcDvCTa3he7erqAfZRGrP6QBram2DZ8w56W2EHbCWYP1SdEQGzC1ga6KiW48WNsW971mhwivtEoyi1Axb",
  "key18": "4JXX5SfH93mEAsGx5eFmt6GJKxGyFNdCq42sGCFVAuAdKXTL1Tzo2rDBRUD5kaxVyGf87K6wq7dJedR3Yzhznkqy",
  "key19": "nvFn8ZPLZsa3yBJQmJFxBwgePGPqZLNrM8dzEgsUWD5FwEaiYrsVdH1Qsi7uEYLBLyNL7qhJKVEYRb9FpLBng6n",
  "key20": "VtyRR787VvCDfQvHtEBbz9kzHLNcyNm2sJBAzX6fXKrn51gQSeR9bUx5m9LB1Ceek1mjT97hPHv8poqZxRn2Kix",
  "key21": "4792xSADm6FeqoSAJN3z1TjGpksYhD2amRcrprD2Btkt56NhgzAtvNthePP7mFRuWtiJv41CLVTZ6j9RCGVMBeYj",
  "key22": "3apHPiH345DiPRuHYQf4ddVd2JKZQNmUWkK8azfkyXMxoWm1wwg7pNPAfQn1whYspbzepbeJAU3BSW8gjnwWRgSw",
  "key23": "4538kf72Bka1D2vMZqDFYgVApcCmYXMZ8w46G5XCP7SJuhYbvYmemP6Dhpz3wgDcvr21DgF9KCy7QhAnNX38VHcK",
  "key24": "3Rv8uarwpbBkZfFBczAKLccVqBHp53orLCc3eNGsqE4iDP9iAFKazRVZ4Kee3676rzE3UWQYCynhCfZjrFwqGBdj",
  "key25": "5uG1TKoUQGofTMmNWKCLzr1tWrfgGJ7ZEnk8BCnXi5k83sB5rkT8w1fwqu3gkxCAyKnTLuJxdxG191fbmrHicbUT",
  "key26": "2e7Qx7PNbVvnGCM9u65YhBxJn8T8RXYXMvWzVwGqPuwkbGCPZf329QF2mMvC16EF4U5rD9e2SKFDRJ2HBF3pLyfN",
  "key27": "3UQihby3jXyaF4jvor2YGcCfnySZW2eubzu1SS3v5pWoNkSb8JsLneDxjG8befjDNY6LktzkxqNaWYkTBiWAkaKd",
  "key28": "21CwtxzcAeA4pcpLbZ4G83rvMvQGRJGE2iZJmrE5HWC7F4a3XDfcEUq2sG8ZRfVmYgNvn3ZG4aZxgvceSwPhBZQP",
  "key29": "3HXPrUUppvrX5ZZSdPQE5nXufVgKnDw9bjaAheV8X4WrxUKxQmRqrcDysBofF9AZyEd7syJMmv7nLVh9vY2dEbsT",
  "key30": "2jeauXkefhU8mwkh3DkQsjMT4Rxzk6tnQnBfF63CLbcZB7NVUqRBvGPoewiAwJCsAYXNA8Dafg4DqQgPQA5mtRKk",
  "key31": "3rcJnNTf2udGKbYcCG6tVg2vGNdhiMYZSqjBSp8jb2TRg2v1cGBbbUmwayXoftkJG8aEZXXECjnMFL211Cv7NseX",
  "key32": "4Sox5otBgjUknPU5KMc96Amd4jKM8bwRkNY4YWPH39y92ywdpuHxRHJ8e2cDz6nQjrwN9mj2DNvPnb8rk4N7oNgc",
  "key33": "s8zSaEsKxUjHzGiSheE48eJtJTyiy8GWseYBxPbNXzPo3HiZyTgnFEemwFi1XGrqyxngMTdqjw3avjRSEEegzBv",
  "key34": "6npFTFxiHvZdfYaYWCkDLv9tHiZgTuCetfg2huMU2TKpKBLwFzA27uhwJsG5h6ztkng69UY9reP6hddhTxNtAtQ"
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
