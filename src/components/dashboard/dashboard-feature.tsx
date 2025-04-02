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
    "4J1ZJR4kDPWtR3fJZRSSeNtPUk3a82qjVKZGACKt3BSaFFzQhhkR4GZ6uwPTjWEGBKXabkDBF1hJP2r6HQem9jmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gEVFCsqViKVXAXVKzsNeMx7DEkmTZHvEd6KYTia9VHSU5nWwWbSRskeg1HTX2VXpmYVUG473SNjWNuDymJGsPgL",
  "key1": "2Jqy3Rh6TcGTkFDLoLM5rZoZRVJrkNx7fggjvJxGye2cv1uZ8qQK9pqVY67Yf3kYHTnvBcNNw445TN9v7Jp5t1Fa",
  "key2": "514YWk7W2JaFy5WyaxpGz46AesdxjS6D4RR2U5CnEMatdxEYuBCyQUYLwE4BgsHPJgr2BrykKxWo6URLHcwegDTu",
  "key3": "3taX2QCSZApCKPxSHyLCmEDirF5JnccP4HoN6NZ7DPWMudWJJkftHPkzLGuhAKb3bSYMKZjrzPxoZrAPeHhtyit9",
  "key4": "4mKij5uoe5Ys1gXfdmgW1vCdHWUV7Zn4CQNp437DFFPbDVyUGWarPadwKN3UdcL9JiWWLdCLpvNJG7qeqGpzkkRo",
  "key5": "4ML6JuJgSmGpvBw6pwdq9gdxQqYok9mV7zVknQ28QUAVSPcE7roYu8SNP8caq1TBXH29ujACM7JzAcFZuNpsxyeE",
  "key6": "4EtSF38svsKieGCrTcxsGvKQVyvrUtMTxzyhUZbn4PaSSqjHtqhxjECZNFpXsaD7TKe5dGEj1YRSXAYoqyx7FSx2",
  "key7": "5SvMRKtcf48uMk2fC8gtSVnT3xZbuu9M83sVMhSRAFwQ7yvz6YYcDxDYusyZ4meqKbQ7dDzPHJrKqY8HswRLV5wG",
  "key8": "3Uc1XqAMSLrGayqdxbqJuJpuj5mNAhnMBdz7Vx76VVD8vaBCybeZqBiQxzbp9DdTevXHZFXAzizS6Z3eVyS54pVJ",
  "key9": "mQxeNnktTDoDHosEhVYuq6mGrQn5nncoSW1NCRE5iNfsfEpJCJNsoQSaZQqdT7EnhAbiDndQotbLcB8ak8925Kn",
  "key10": "3NoWAhWSZxu4A8TQ2uYNe3LQjKJgF5phYS9doFrp9421UjNmC5pxmvA867c3FgXJMA3EfS1hexbX9KvLiXty2SFu",
  "key11": "4pyP4fG3E29sLpaHe1Cms43XYJPqvyscxxnFDai9FgKUNDLjam5dgnW2eXdQQp2aXi7SF1g8EKaE6m5RKTykftha",
  "key12": "3r9SY68p9EUqeD8Aq2Mqn3HFaexFbhRBGe3KGHz5WUmSfHWxvz7iGGQXDkn82yX1vNa9RWb8P6gdSV4ReLTW5B2o",
  "key13": "2QBbsgt7mkXtbU3wHBrXHLoGGdCHHGkCksKks3dRTnRkiu5EH9Mj5CKTYNVMK3dQ7jfvZ6HnTxojH1h5ukdS5XFS",
  "key14": "4Gv2KidxSoCAKQG2u8A8AFsxaCE8U1goHVL5kqCWCaqircGnpAjh1srwztnq6f6TrAwzDXxe9u1p7o688WGJtwec",
  "key15": "39ioKnQ6gxwUFe2DNzEjs36fNDKLjmX2wXtXt7LqTgwtL1AjbeQyR9pmSJgEgxJ17SBbaLB2Wtajhx79rcpoEQpr",
  "key16": "4fLmV5dUAipEax5HFDC6apDTjDhLnCFwsYNvJx9ShFarapvT99RDgyuPbu5FJcKeegJkAYq6LKvS64wSMZnukBcf",
  "key17": "2C6vjaoSwkQfdryLxYFVT7TscKmSvED3qMLHpZ1iTTyXKVDVBnViVFFhMtD8hDK27oTrEYuzQ38xh82J58NpZmVk",
  "key18": "5rxkSUzVX5DuvGMB8zb9mvBYsJdSrThYZmQW3Qu91adkFcY6JfzTG3SJCQ7vUKBGwaWYPnFgSnvdchRpR6JBBHtQ",
  "key19": "ceoiukwZiKziDwfDd62SnjuJ2iaM8ByFHRXjimsFyUz79ckVPnHz7b6JhZaxS11LurwuZd3Dfh9ojDuvKE814Dg",
  "key20": "5sX5nq9ZcbApnh12z3iShc8HH7Ht6mRrYGKPpWz5VfSvM6tveESikWb1uZfnpxoy5FY3KVakQheCZpzg1rSdFmSc",
  "key21": "2YJbS5D4BH9CCY4UwgoDDZPtGzANDkGantpNkQzd1Qu1gkWgRTWbhZW2JrDUYa4ANmS8MR258FSkAArgd2UrKpi3",
  "key22": "4uJY9rNMRr8UmrYQwCVixXFVCnuVCyC3yW53CHMmQcdfEDPNhemhyrisAtLqTqn5LW4m5ascL7zTQMzRaYeZZdG1",
  "key23": "4oJXmawbFjZZxwWRHK1eGYGEt7AwujULQJdZNVPfPvj2bBRQfBKCpwVYpAnJTUgCdHmkYSnQw9JBb19DJNRvb9BP",
  "key24": "4FCU7iDHGH9K5q78uvMx9b2ieR63piVtif4HPsgb3iDjZoB38kxo7FbVZzrFW3D8NUTPdTKpypQBDssmRxdfE2Xi",
  "key25": "QS4RPm2YSHLw5HhaFg9faHinsMeoYrDtebQuh5nUcSR5jABkijV3tXFizrTY2hoGPraGrECrNiqFWYnzePQhuX3",
  "key26": "36RNGsp8DYqzo9izS73fAZa9kHMekFJVgrxt3FuGmxQq6VvjcZyKVjRMHinWe12YLQUZVivQDB1nedGB3mJSgSHv",
  "key27": "5YBqZHXbxGWYTHtMXXbTi9b9rjPqrC59RYU421FxcGShP7CkVX5AFWJkJzjjCj4aPPpfTNoMRhGE5WkRQKSdFFbo",
  "key28": "3FT2Ak8A2iptDfkYxJvaANCCrrM8y3NVv4EkRKt427bXEuwBmHcguV5LtzLHyuwwnU6wfH9apKE9zz2yjAnycxib",
  "key29": "4NSPojjt3BgZAtP3i5vMiHC95gFZJwoLYqRsAcRj99qqBxYwJUX9XJugh8xKBwttbAm9DmiLg1TZDLr7qitoFtss",
  "key30": "3Z5pk8A9TeiZvoaBmmwUxBwzonTBqpn3AJBaBUm1ZjB7o7wSUPiT6yfsHqNztV1d73NbaFEwpj5n4RyoaFHJXASi",
  "key31": "3KP4g5sd9CqrV8UvQhp47tWm4vTvnbnpaHGU319xyDrtgF9TR1U8oCT9SZ2CP8tuVDK7tCRzSbjNSc25iYRA7AAF",
  "key32": "4J7tQBEcYPiyPQZFdGQU8CUSo5fWyAo8jvvP7Gu6bgPZfUfcYqnAgEhLa39VALyQHVW9tX8j3Gac4XRxCv8Z2W1d",
  "key33": "42RxP8fa6Y3Zp2ccEk27Zjpa5P9wMxkHVxvrQwWmZfQ38UxSvfdQgBY3ua9tsXRoLvYRo4vTMeRJHDpw3375RZvu",
  "key34": "4v2XP28KToEbqSBjekvS3owezbori5geTkTwZ16S5izQVtrhJ7bjUhh9f7iTfY5fkJaq7QbL2jV7aDwDXP4B192q",
  "key35": "38DpBs3jsxe4dD55NoamPNfgR5qZhbaey6VU5qePKfDZXs7YTkUnxNFT3yLTua7N9aHLXQbZgvEn5gpEqHKEXPGB",
  "key36": "5PMca4NH6C18WBzdBGMCv4Tq6kUHYwp9DUkkhpaWLy28cHXGVnJ6HRzcfN8w2bSuwH4cmGDMdCZCQvMiEP7zb8DH",
  "key37": "36kvEZks1HyzyUiMqeuUrFHav6LzRDXXWoQHWFV2ZVsuyLkvUVQ32LeTKbk9VL9H5RrUjVsMJeGtJcyEiEUb4oMc",
  "key38": "4WHsSzaiPdPkDwN9QXW7xdMxVH5wHqjByVYcvYy8CgyxkqigLmthptwNbboNsU65hgg48LmvcpTqqr4VTXqDpJe",
  "key39": "2UiQJBcCdL2CVFYLy7YTPwSeDCUoFgmjYd1epbQaUywtxckByvmgjw29AWQkH1WNjtwJogNwtPKARLhDnpKeikit",
  "key40": "dBb7bAVYLTSNtMVZt5M6jLy4UPvk3Gu4PKj8nJdD9S8Bux6mQchiawzs6kFbWN6BiPmMGTjgzHzfdKbK5yV3bfL",
  "key41": "3YRL5MmARMXmpVjwZnGXyWXHP4AWQK2JRQQu1hS5h59D29Em7jaEULgm4xpL4A7CkbXD8XLfz94VaHPJrHzLyNYh"
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
