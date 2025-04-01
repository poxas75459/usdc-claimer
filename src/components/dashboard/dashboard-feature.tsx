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
    "5benhCS2MyR1yuUaaDHf5SSAsLXzMxFhZYqHSGAdp5FdovhhK7Sru6Ezo5ETGX9KFAyHcCnpcC3d6uCmHMxoVpaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "462hWvK7iELhyvkBxhkM7LD8pnTDigqPpXsw3zJ1usDdG4D7pkT8taJqYDhkQ2XWjPfwFF6QiELGTSvznq5orUUm",
  "key1": "3TdE63WdZRowVgj6Bt5gW4fnscDdVWqQvSQCm8U8z1vmdciqfQ8jCrFoKShyY6DYAu98v6MmaCYsQo9ciqsFGt9Z",
  "key2": "4aJDcdcGLdEo5GmP6aCxbYDe83xNZZphk5JjXr4pj98azJ9AE3eoxBZK25KoCeCeFKe9QQLNcX9fwcTwpTykx4ne",
  "key3": "3vDpKPavRsxzBZ8rUixFstEiLvtkkpf5fBoV68f3Ut9fdZ6gGm9RNbAcDLmfXge8HEg8k4wshDG74SbTHmA6SyFe",
  "key4": "3uEKarP4ChqfY3KgAGn8dyDxpHRwznLr4BRZBShQBX9kbvw1FpK7kL6riaHuMV9MtZ2G8qHJCHgbiuHnki1hccYg",
  "key5": "w7yzgD9tR48fsgyZq2hCjztVg9yVfV6bVFocyPXHC78Mqfijq7pfEAzY2vPa8dGXWg9ytsthLvYKgYw2Qeqyjkh",
  "key6": "5i5qN8VD7jyXsuHrWQB6hCKGxXvch7nqxMYPSzhWWapBaZiPfggSj4cNXJ2TpzWX6VyhyoobPJHKgrEz8XmAGxgV",
  "key7": "3vyEXiKxbJ2vhdaYhURrxsu5s7VA8PwQh3P51UNoUQqRPMasjqn31syMZHhqgX3cngsBMvoT77eSck7PBjx9F3F",
  "key8": "5McdARFbZcFSQ9uDoVh4pH9Yt8gqQNT299AGKkCsjmtWaEKcJd7MBEk3RW1z6BGnnksDqt9QpARR3TMYSrva2pqD",
  "key9": "CqFsuvABhdHjufUuRXC3FqtWbZzPpRg2nw9Hs4NGB3xWgeibjiyC63diNcpX8tK4PUSUQSwWKmV4S4ukW4HdAo8",
  "key10": "2kpZ5XZ2DtycRWtx1tx3VyA976E56RU1SAHq2nsHj3BdLKEQbpn1P8DFPZF5LFygrr5tDEW3Y5RcPdPKXDf98GLi",
  "key11": "2eVGK2Xxt8N5YZSmCvF8xxEZ2fh49yLVCe8eurNK9fJsNvuAng5s5fjD6dgbsDmmNv9FNfT7CGEkK5epNvxRLj3V",
  "key12": "3EgPFYYNFfGJav65t77HCkjYp4iTUQbmcD4S3sdv1JEYZqSGMQkiZZKiBGevFZnifR9kWPAWteQRYSccKmv6mjWC",
  "key13": "4hzwKKYkXh32VHB4ZrsuhDsoAhZs1jQ8Jws1w61ZPoqQLoZu7foLuhCZw7BtXexVXxsghdVcjXd1hQAazQXaDiZU",
  "key14": "46hhR7oxM2XHVF69VP4CXQxqHdB3nUxuNDiHKMYJ2tdiPnGVjKbAHQrjSfAJibdhFn3Y8dB91nLZRDUZxvMSwHrN",
  "key15": "3GrtjZQjNm52QEeAhpfpGwbXC93zyYWDq4VQHRMveWAXfWvH9Pnfb3bdr7fvrTsuTwjecVHHs9D8r6JjZVTywCRb",
  "key16": "5jRR7kZm6QaJkdNxXQ9bdNNnGSx3KGGGuT8ooR4acDAUzTjE7MtGNT8uX5upSe3XNvLcWhjSWRBCxF7bLvhJu8L8",
  "key17": "3a59cg1BrYmD7aN1iwLCBpsJ9V25eBKHuETk5ewaMQEiKBH3TXNRu9oeJ3uS9qaiphjic2hJaHoVko5n1xfAUAAq",
  "key18": "3YN5eyHwviaSQL2jHpdLN3ESC1dTR8YESwjBs5N6hpdhxmDLPomsU19SCmhHWFVKQWQebE6eeNP8yQiBf8r5h4wZ",
  "key19": "W1KJFPbrNMxfazGbFzJiBgLNkBuFgy73F7VZjCQeDYzBk7cyGrNhWuUExU7fay3jY4s43vE2Jnx3SiZRHH7HdBj",
  "key20": "2P8ixebmDCqhUoo1psberLS3wBmzWn5mWVSrjYKSUKMvvERJZi1dZwLjJJ9LHcRqtbfjFaVV5bahxscYhv1dmyAn",
  "key21": "4ZDoh3CUE3rjnpBoGTU5rTHXqsViPqXXBFh5NuUWmG1hcx3wqw5WSnS9JMzyQoGKYszaWS1c3ZnxCZRGrkbJbyez",
  "key22": "61btbZU93dtZwxpDCeCUhrCGDJPwBuUMrafDqtQZCz1TznKCy1v1jyTV8NunswmqkTu89kfDY8rsp89VV6aFNtHd",
  "key23": "wYR4aR2vTDvhkGMPLSAUCpqd5vFsLTb97tze26n5MhDqySqCqqksmvUtiSKcpzjZxyPC9DM34Tn2B6FmMWc2wPa",
  "key24": "4zETp3Q94kqPFkRcwQU7c8kKbX38Xn7qAvUYSKsvEkZfUxv6ge13smf7rDod1uGh4ehipahvcyE7XaK1mTSbLW7e",
  "key25": "2esAVruhkwFWexgszZfFuAJrZg3qVogSmLtuj7DNmTq84cr6hep3TnsToZKAS9srFqJBnGZREcNXfbT6Ju8atgHH",
  "key26": "PySCzYQx6fPtfNerSXX9oRGxx9zRUS4kcvWvHMNZLQAvzGHeWZWY2ogtiPNyEUAroSg99hSKTkVc9gC2uTyDbM6",
  "key27": "5boJaN2f4zn3YctExnUkiiEVuFsff1MgeqXbKhcgr22zsaKZSYPToVQfuj5kCvchS9sFP889WhcT3WG5bjSnSnnB",
  "key28": "5M9TQYV7nKvakXNAsfAWLTzctLiWwvzN7FowRujxBa5R1RPMdEd2Cr1d73hAdY2bPxwZeGYXzMc1Z8ziAZC2k348",
  "key29": "5x6m7kyCxtLFJNWc8E6nXAJEcN7Ug3tHmr2S6XnoAWz4ij4tQsYmNiEQdaNFweNagCTMzbycwZfCvyUUUYQG3DEa",
  "key30": "b5YEW7Ro2bQWipNtyXRoGkn7vubJuGmerjrYRQQ3c56bwsDZt1CMs1XuAss6hxS5R6Tfa3Vg26idwDtX9vfXiAE",
  "key31": "J3aksXrSYCAR8GHqFbXnpQspbq5qPNJKkJtEVqudPuuXRwbg2HUjWNE5gmWewmMGmBeqwJaB6YrhFcHHmZRPynS",
  "key32": "3k87ZEfbL9Lqvjb5tMphKHst7DRfjCu6BxUQXhLbukN4jmi1PMoL2XmFyh5nAhVZy8rw35FgM2vaJhkrqXW3sE26",
  "key33": "5MEyBz84ECVs9ogzd7S9BseFap3ztMiiDsaAvVMta88LHmHfxHRq3CmGmmam7vi17xNANtaWf2xbfZJBNEaWoeej",
  "key34": "3DqUap8iQHLrXMF2HypGhQdMPie2amWLtWmwP3W8KS8ejVuiqSm39pNbWJU5EE8nobp71sU1VxkoAqzGZrdV7NjH",
  "key35": "3GxRrUcHaWBrDd1uNbZmz5YDerJDfdz5a2KAWv8H11Kw7Va4QutycgcubvP15AQXDqoaaEoa9gCVcR3jmuKknyJg",
  "key36": "4aMyZf7oBNff1St1GeUPyckKkdno9Gtm3ZfsS678E9FwqjydfLKeT6WhZXgT5Ngq1V1AobPkqVFc1u8AtgDZFMuK",
  "key37": "2adXxMoFEBy5CZubHDFazFL1VroVMgKgeAh5UWsXBmcvrPPUGBgBjByvnpRbkVsDtxZgQQY6DWWK28CAWg46thJo",
  "key38": "3uAn2XJ2ZzWrBVyLPofjhKJTm3T2WgkJ1SY31yG5WQoAjvLBYC3VZrTjVxx8abgGdxHMXuRwTwEq2bSmKQRhVVsi",
  "key39": "4T1Hxbi198Tr8j2ZNnW1jkuYbcWUyVqocLEcG7fpUt1wcD2bdyNZihqRrTy2w64jF8QvqVB5BD5djtqdzXKdNeoT",
  "key40": "4TpfTheQwLzxKYmaC2UiBhhpMYigo4CoV4hetQ4KdyFxrgH1te81MF8jVVwch4R8LBderVYg8NsFpfwYizRFeaPY",
  "key41": "2297bRbj3uJHwywATsJrCM1PPznUYmZHXsuUjZ1MdGPRsh41DuDy665PjzbXp34kqB6fAMRJFbjbmRphtwgVPbju",
  "key42": "3em4RxMtXi1wdiiF31N8Hx8n3KTtEnpZyFbQqCmg7RGFAbEMbheUe4oNtJKTn13Yr1gUqgTCAD429jgVjvuBwi9B",
  "key43": "4UMiTvds7ci786Xtufg642ormUtk9HrciasVPgw1NUEzkV32Y4xqyEgTtWUoY3Bgc62a23oZii8tGmzrXy6mLNo7",
  "key44": "28HWfFvuYzuxgXEZn4VLkmb1KW2JvH6qZSUTny5yWjjzdikbgZnS7guVvSp9e3nwSoYoJDr32xiR5ZfgqXQbaJjy",
  "key45": "4HAnP4K5qsf71KstG6anZPeFtiUpJHL4ZGVH58trG5eKzwsf7FFhfwGT9TVJrhc9i5RBqhrsK4b3e6cthPRxF4MR",
  "key46": "2bYLVjwZkjkw7xDxKTnXWHiPHsN4eMnZoFcP33Tsn7b3gQUcQhtkj1ZZ49BxDC3D4n4uCAGkduBDp1pvXZ43CrS5",
  "key47": "2HX64mfUYbmz7bLJFxAG8bb26uAFzUoy59Z3t3ynbE4itgxdm44pZtJy87pS9QamxjPaYsLYjkM5apx4Qptcg9Dy"
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
