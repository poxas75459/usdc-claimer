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
    "3LtPdD4JZX7Ew1zY9SwbKTKZNW37kPGbQkga92CtKzjff4kRV7Whf81HCo18XZjQrZTQY3fyJJhM3MuKoAdjirWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hrs44n7uQ2gaKRaJutGMAUume2uUuthr5GuXTUdXaG1cCKStFyt22ZHr72gSQBMfn2fy3MG4gHCKUJcNsUoWU7K",
  "key1": "49iSoDAzjE9r1NZW5Tb7coa9RbRzU4bJc3fKNnR7wewtmWzMxrh6ezY7kz5HvQPxTzVyk46F8jyPGCgTK8G4QnRd",
  "key2": "4tQ6Lz8TE3VnBvePW56iRsFFwu2Qn4XMsdKJqTQXEKELB6KUynukj3VDX3NEfuFqFwF4DwvHB9MvKr1Wfpqoo1nG",
  "key3": "5QcbqhZxcnrBgHETTfBNZcQEqoBxvcjjbTZf7uaBXVgTU518v4KA4KPhM8DWPJHKuwgDQLcwaVFRTTzB7MRqjxF5",
  "key4": "WmRUi6xPBqHUj7WDZ4d5q3AJz5YKKVJspikg8We883vkaNGFnPdPZtiRVhLQcpJoXFgc28y6opudFmGJQpfMEMH",
  "key5": "FskmawE6sxEGX8mN4ehfF9koL4mRdBhi9J4DEmxUYgJaVNTDbfDQvt5LQp5jFqZj3oZ1GE5iGqEZgiDkTDwJYTv",
  "key6": "4ueaTVYFyHjyMdwnJHwuGFjxxvkzVN2aFdzrwgXj5SFYqpgjwDSKEVgzr34ApStg7PQioJMeH4fr3fLUMubcbvBg",
  "key7": "QnmoRCLtPzyuLWFG84o3ywHzF6V833RtXK8TSW5BTbaaRetrRsdHzR8kqkUcvcvxNTtyzidmSQkdZQgExmbod6W",
  "key8": "66LbFWUBQFFLrv4WKeWgTNqTNdyXejbwuEU6SZUgzYgEokrnmPALf1nBYaU2tCXgFnAVL97VsDXXNNfdtbX59RLX",
  "key9": "4KmpJmeHRwfbkatLs58PSgzkRwag4W2LLbyMBWDn3pq3aJFs8hMWbQjxkNqyCsAy27HKV7ZRfXCCDxnQWdUVp1vx",
  "key10": "4DCDXipdX3DQeaYJKbGCC1imZaiKvEPdgsUR8XfX9H33YNjXyWgDDhY2j7dVFZwvMjrwiZBpQwnZVdnudJjLZb63",
  "key11": "5DBcywvXpor7evCeyfahwwYcxiy5u13PeGbCNcFeyLacBeFiYH6Y5FVHhiJTDfEN9Mv1GjVUgnhE8q9eigpkQodR",
  "key12": "3jMDo18Ddfy5fwukguUS1LESGRyCwvvHCXGQko9PCXgYDTkhVvXTqsPWkQc3wTK9PXpaNo8CFWvCL1sus3VXnEQE",
  "key13": "k2BgEFwdRvr3NW7fUnax8ecrZgZAymz3ZXzUhq6m6Yv1Cc7vhWXxC5KynyUSEUtk3La9D5xUaSFa1YLE55diz64",
  "key14": "YBa5E42i2A9BFNnNpgWyhF3sPNAWu7k5adrnGr7DtuDt9FQL1cSEv7tEvqy99Z8AJfegu5MDEuGrVBq5LoBXvEf",
  "key15": "5QHJfA2EA92shAu66fgYVBr1ndjLKvZY9u6TWtdcRk5M1YWoth8jufzLYGGfApYiq5KSsYunUPkjgBxk3LuhMmWP",
  "key16": "2HF3sAzwDNT1iW8MA6tuXQLLaeamx2Db4BvH9nswHuSBBHuL3Nq8aT8eqFdeTfZq3duAyuYocGX2n9PNP4pe99Zn",
  "key17": "4h4G3gc8siQvMxyF1UgNzz6da9QosqcP515xjYm6mWYw1eU1i9fZHtupk5HN26scjUqbBGbAEJkgdvScDSoc7rae",
  "key18": "4bAeZuAEB9itks1eHs8i1jfepyADawXeqVgLrwzTg2vNaR8sSSBKZUpMLBtnfLaDoSzEQLH4ata7xSqRxoyrbBK2",
  "key19": "a6JtrGehBEYBeBuFL3fv4F4E5HKAGni6ZWYkLjXWQAg1mwF1B1Byk1pVA5MD2jm969VFFskqR1pm8HvEse3Zhru",
  "key20": "22cHUsUgcGVFNXrH46NHxjNef5zBp54f7iNmK5dmsThcFofHFUDuYQmr64f5bKqHpM6SnnTsrVUgc8sVucwBd8Mp",
  "key21": "uB5UwMuwmDi8WfExiXkJQS92SDzFoDG2mNNeVijAfP5ptab26gdXo1bgKcCieHZDFeAdv9GmnQ5ZqTeCkigAVU2",
  "key22": "35J2TLDVGgcurUXmdeqD6beSe5QhtE4HCYz8JwMPpbwzZMEcAWVoMmW4jQBKWDGioTNXEVK4Zok1uTRmQA2BKDjG",
  "key23": "3ckkABm8W6Bm1cydntUpekPxjBdPDxMgvtgzFLpwHkvdSwwwinZpZ1bo1u2Dky2pTYRw9LyjW9rqtbashedzHz2x",
  "key24": "5U72cbnHduGqRbu87ZKUkV96rE8A1rKjQ59yGugmpTnXV3ZP5zHZgaCX5wR99xd6gxmeknMBsf1Jrfhyc56Wg7AR",
  "key25": "45PMn4VWSjSrYq3FFdJn1vr3pJULZuL3cWsfV4kRobMTNQFPAu9amMhb6Fn1sbQnhHsvY4MefiBjd8RpoiKGkgvD",
  "key26": "3HzTPomysfn9oCYNZWpQSQX5bg5Tu79LhykcEKDrAZDu296fYTLVFc4j14F3Hg6SQzu86MvMf4NcxjQA1ojpiDBE",
  "key27": "3NiePfC9vH2NiKzQX47JNgeHBP4J5LQidWwtYfDtu2bPzD8eWfTMCsJ1fWZx5mo8b6hAsD63G7Wib8gGr1AKbZGR",
  "key28": "2EYhvxY5XGusnN5XXJf2NuU1QWdeFmH6oACZa9HdBUJVw3ZNLJZmKcsmtbvULoGKctSiySvnN9GGEZmmQexLxiiB",
  "key29": "2cAFvWVTmp77QgjQuBFxn73BnBHPEujiTSj4DJ3ZeM1wr4ao19FuPP36cvRKwudYiayo9M1iS9eEKiLneAPk6v3D",
  "key30": "3SQkrnBAH3g1HWBxF8WxZyAT2BeoiBHQ5HwJJq56KrxpsePwXXek1GrZcNKy3ggvj4wgqwXLUXVjfMfkrT9PUhVs",
  "key31": "223b2dk1KeUCMSiP8HXd31hQkzGGYDnszvQBcPz21F9EfW4sSJ7ZCwsS7sAYrj8hGbtneBSEf5un3yLVXyYTURMk",
  "key32": "5vA8JKk7RGJRQXR6jP37GtXbh5xP6rDwmBXhtaBe8hveQv3E3MiKCB1vMGbiHsNR3yjfAksEb6q3tQTNpZunfewb"
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
