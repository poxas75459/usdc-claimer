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
    "r1wp9NSzWTtLE8ABsckvGJNtKvSXeErfZFrhyQ8L4z3t9UWBTQEYK8UXrisUPDdt7A63DmGDFSBT4WYa4CWRHhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XAZ3nm5xqhyWLRmgHe3XpT3qfaDsh4yoMu5mUvD11SJqR8CEJ8jCp7U3QRf38JnWuZ5aSthADfRJkKE63Yu5iGh",
  "key1": "djEL6rLd5A3xY6zyovm3PCzYA4naLumRUGrwmPXCXg96rQuUhbrQrp7EzpHAwYGzru5B81xRGxEW2R1ci597ntk",
  "key2": "3cjFrugrsxGm9gbH7VJeNkpDRVb8PMceJpHGVd9tXpBKnrLqxFgjYjKkBHQ9yQ3FbJan4k1tjsMNXXJV1D8eyvUF",
  "key3": "4imSnGQL8GhMYqVhL12Ej95G62H5CTLtA6YsuavxFm2eHgK7W8J3E1jCTyPw8idp5b5cgxZRCzzk54N8FJ3T7kEw",
  "key4": "jG11cm7rLvzzHwk5vwgYEus4cKxndYWyqZnRYotdbhxMrwCoTvA6wdtnm7snKXeyS4Uw2W6YfaM9uRRkmyUQJLt",
  "key5": "4WwMbt5KjGxF1crH5dz29qNenDzZvvj97EECdhisEJ5UEHRBhTAPhoTooRpH9X9nqihL3zQxw2UsJX474iBMYBLy",
  "key6": "5ESRBivHDyHjmvd7URP4EMbthQW63zW3E93FNMLHZBCZqUNt3WdjiVeg14Q1gLNR7yzn53TB4975G2b1Amd8t8sW",
  "key7": "zFEnWg7vfCgoQGvGPdSEg7Qpzg2dhRY5ZkXNEuKNuN56VZAmhFrR69upwZAmix9rAxtc1ZMUB9V9Rgze61xwukg",
  "key8": "EfRhPfqLrW4ypkNibNZE2pHtj3o7QhFXYenoSRA58YARC8uo2UFAZ5UyTr3mn4japXLnWQqx1ortwciRcpx6feP",
  "key9": "2sAeHPNcAUXuvUfJZ9UWRGPM1GX9EsfpWKmQYkXamxqbnFeZXYuv87eMd4X1JZ5VdwS5n7UGfpUnUYqynugVjJqk",
  "key10": "3UiJWDxKNPFnyrYkNhDyEgVMcRAb62CfMBAxqVMkxZiQEW6bxgJH4o67K2FPGnf75Tfayp89Wr4HQES4EDzubHKK",
  "key11": "2SJ337HfzNhFLWvY8C5krCzG8vT1K4TJCNxLj6KWKMKzmr9nCZCwKhDQys4bdEso3j3REdTD5c5Ct9sJUP45LkjF",
  "key12": "5qFd7YFSsjEwfU9BuKRmzTEkLPiHT8RAQB5y16PuL49Xnog1XaKQaw6MGigqLCJZarx1n1jEsC7nNpuqqVCxiEiF",
  "key13": "3ALHRhA4Hf6GQw7CHxVUUZ7P8rnepenXa11XL5Kmy3sfpKWSHj5T8E7R6yojEk3n8nTuyCAA8LYc48vrcqp3BTB9",
  "key14": "5RQPcSXPpPZvovpCxfwaYE6B2YJeEsQmonwo7jz7iLgArbgdqHBu2ucn64CnFKFXo4fU6vVC1b7ShkK3yi6PrJSJ",
  "key15": "sMjqR2oKRsH6eRsQWdcwcACYo9m9JCxj6eptgvUiqSPCcdXtox8PMGkBWvXtP9kMYwCRPyKz5hyzDPsE2KxmFs7",
  "key16": "Rcg5QFAxJ16H4xvZqa2RKLKvnM1S7jn6UqfzoBvsNdgLamRoXUqoKK65BiM1ViCtNDWCXVWm7tWnwUY5tjvnBLz",
  "key17": "P5zT9aUqMJVgubRAQUD4zrJ4zsF31Kc1ugwCkxJ8FwYyr9AS2XfvWTPtw3XM6bkAKbpXrQPT7r6EdG1LVmCVAcq",
  "key18": "5QnrZxgaK6776Zs4B3cbLM2iwdp4FDCxFBnkExj5K1KQupqeWD2YUAb8HXWMjFvXs5ZBi6J9kynMiBB2hgzXkaD7",
  "key19": "2YXNqUZ5PVgB1cphAcUGqto9syi8XxTeB71kr8tJkfTrrsrSpsDkJKsTKuw2u1od8oeWhVd8vYxcpPCew6P2E52P",
  "key20": "5yituZTZsYQs9dgB5AT4mZSoj39rhcgV1d1usXLVjGJXkgCne4y2Rp8fg5hVEDoJ6KFTmZ6XTsYtXAusy8aiiu3b",
  "key21": "4YkDutY6tkvdWnEJsXG21VaJD2VQRY7zrdjhUT1shRV27vZadjDAGkpzo6ZYMran3tmc7WQmzfpRs9tUN1NQnDzs",
  "key22": "cPfbENqWoXN4zuGW46epjsetYzHLsHUoeQuRVgHdakdo3vVNXoAc2SJ3HMp2dQ5X2rpBDYyErykSXKaBVkj6g34",
  "key23": "3atDcunVKf2XpNTJDLoDUmYs3ocJZX7NFFQtnVCo79MzLiBhhYjdDioeGaXUGoxg5kcMhf3UChpZ89ALZnj21E7h",
  "key24": "5n3Y3e2z2xiqyY1YA2Djt7F4PS653vW8ZLsk9oByDmdpCQkPVpADLMiUV4JotHYAQyv3MeQr4gC4CJBGfwSFZKvF",
  "key25": "3wYg9Np41xG8p28MXcV1HgheWHoCQ99tD1KzXEe9HSHCMnyKK57YjkFfqaqWv5mQfL59QnUhr3EqxThHuCAcaFmW",
  "key26": "43dyAze5LnCHuznMCNmcAd5VNK2uZuzs8X3qzBhSkD7x1Qm3gLTyuut8Hq3ndDKu9yodrZbe6XYpPDVenMq5XPQY",
  "key27": "5oJkvfuKqB7P7WbskYJkPzKwkwLZwaFi4bYRhrQk2rxJrpT35eS29pUTfec33tAQ4FaDfbHhDPVL5ixCLZECw22Q",
  "key28": "3Ai665ajh1FNGobqXMz3tMTMpJWyEUdQYDapaNU9nhGDgd929ZbEvWTGT7oQ6EaJrR8j74yCXWGmrpgmzf3DvGY5",
  "key29": "5Xp3bsuPhvqzT7zhoJDAu5gaxXXvFrPRJ2p4fNxrMEdsmdk5hUzXe92kPyg98yWkAzLoeHew6oz3QrtZBXhS5i3k",
  "key30": "331XJRJp6jgH2eg3wZtKmfcY3TN7QaFCg3L4htJcuWTF4q8YQthBgaSNPLUoWvciRzRntVGBLuDQc5hdtJf4dfYc",
  "key31": "5Ny3imRFRVe3N5UWDZFHFqtWLCZZC1dYrQd9h3KGVvScu4WU8EamzJaUkvz3NNqkCEzP1FurRZyobXaP8kChjzet",
  "key32": "2TRJzV8HAnWWJsDUvzeP5HKkfxaoxSEg7JJUpbCySyNfBpjw5D2mtYGXeczWK3dNH1qmPPgNc9H16KCBNfp6Em6Y",
  "key33": "4XNbxhHQN2B2gVYakZTkTfQ2m4LvXnn5GcSbHhfXDPRPp5cUqZjrgHFfnw9tTcRxWHnywk48rbcu2r1Nn8Zne7oq",
  "key34": "JViq5JVLnyaR6Vz51dfgwyjTbBUQ7gdqSjT7zUK7E756w93u5i1qzvHH98MtyjRZtWsytoZjBJCPDxkBjiMdYUn",
  "key35": "5F2Sn95excNASJgtwdFePFFaY2QboMYTNu6ttXfr7Dg6dDdbUW49znkHFyPnUZ7Z6PgqByMFJSDCgURGeh9ep761",
  "key36": "2ezYWCsMTubdNmF2mdpZetNAruYiFFMcuiXaqeCWQSbyqt8zyDx5c7ufsrFkQxzgKS9RJFpfe79Km7NdjhG1DXQo",
  "key37": "5WTRhYgCEP9o5eLxjC5a8Yd6r9rWD8NDwwxkQj3Ebe3pNXA9UEX6fXrc7kuVMEXnHNYgigARV8Q7m4uQtJqxsxFT",
  "key38": "612NHnUhBAef18R3a9Qw1wEcjMLQxHgmRj6qBHYvJQHNm2KAw2vrYVm3YbaDy8p5G5xsUAYnRLkMot3JkPsX2huc",
  "key39": "2zdxh5RRS817ur4FpeM4B93xkRZfd9LBbgCLiD7Vy69f4Z32F72C7cjnGdUnqgXatysMKZeTZRwYNjFjvQhj5K9c",
  "key40": "2WcW1Jqt4gnmMcLxqfArFyjhwYqgzVp2qWrJ8FvGCJTaBVvKpAgSf813WppgyYHuZa35jxhTDmEr1ND3eVV6gna7",
  "key41": "5PfDPtVJSWDgJgfifuheryQB6RfmfZ7njUCudfmsc91jEF6RLkWtCF5KpLd6MpAJ4zpdpvArgdzLRB5jihZAy7XP"
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
