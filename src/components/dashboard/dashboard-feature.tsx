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
    "2ajBbkBQLZNEg9MA5q2PyhKbdyovkPinWVHJc4fov8MjoYbRpN6ei4Q47opentMpXc4ucE5NsQsMnDJPy7QRtfGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WE5gzajkVvrN9gnrQBt9HTN4KvR6HyDP3ENCUA6k9EGYFVyHV26X6mN4QvY3CpkKRkyvLanvP5TPU5WMNsmPJNd",
  "key1": "4xpeHZNPJhuxSD2c3JvirT8k3vCSAAThj8bVETjpRfxK3NP2ZRsquUovm2CaAeWeSktJFnQ9h3FSSEiquMKDRy8d",
  "key2": "4hUDxi33DMSUJBEuF6xwHvcHz2MEjWE8WtHjAYP5q5P9CDVUC6p5EYWyGkBEErJarMQ1CtTu8VerXHrwrhTcxuCT",
  "key3": "i3bhvmzrSG3dU1Nwe6fDkyfPxgZBrYDj9McB8i9FuAtYGUcLaVrNunMZy8VaunQr7LDnF9MBUQ4nAsBHMGHzfVU",
  "key4": "zmgLCdhd7g1Zp8MW9cMgqHeskvy3pS6hb6GTBxvBxTXaLtVCVPTaJAu7oTWEFf6ZMaXA5eHhEceR5KGJVXhJCiR",
  "key5": "8nA6jzbWyWTpBx9oRdGmQUZt4tx7RE1ggsSe3BxZi5nBDRQaWw27t48MQumwVq8QubKT9c9onPY9pZ6g9TmpdvZ",
  "key6": "2CcDwTpKgnW4PfUMFooEKptXimBFUrTG85MDaYBYDg5AKuV9zskvq9iaTKzpXwcY8ThgqTDBNW91TpScpyzPeLeW",
  "key7": "36qsTRuxbhgimNM6k9B9z6983iMnZr7nVSrSYTR66MeeX4REhTXnd5a9uFvouWyJonJbU2Ssnmv7jhT6aqLRzDms",
  "key8": "3kUdRHQu6HKHcfe5to6K987myZZ5EuRYNjc5WFxWesHrwoM9QEJpddwowq8MycD1VXP4vdxt6nYHxAdLKB3VtnK1",
  "key9": "5GDCRtazJvKzBBott5zHSSy2Uqwr3QHuaKV1iu3ZoPiLyqTBnPAGTjMVszkCkRvj1idvFyuWct2w7FyVqQWENsPd",
  "key10": "5FESc5seZWhrCFmrUmhatuhsfK5eqaoJBAKHHRch8CHZFxtjKitsh12Cg3ZptEdNpzhvfjKDo7FcLSRfYNzC5CYa",
  "key11": "2yEuf83rzhHrCtxW7nceKmjw8wzYvjmo8Joja6KpwBixFNFLgcmdNNikUeB4yXG6G5CwTGyX2Q18nASeLrPjPK32",
  "key12": "2PU6i9DtUaFm6pJ8uZH7XM8ebcqBoSRWXuFmoegunzxe4Y6M5ZEeSdDZqaysLCftA6nzBwzSMTD4thQRf4PBZVqE",
  "key13": "3Ppi7uxgoRxuTmvESYW4wCpgyLZmpRzqhjKeL6s62bPYKCYpA2HZAzE1TdnsazgMeQNzHj2GgzWMkzghHhBUmLs3",
  "key14": "3P3gHJYeqMdziMUmXf6tCZbnQt8xZLG7riQjrorRAZQvGEkWX3SsXu3x1ifWap4t63PrCBYs1G1bJSUe14HQcm6t",
  "key15": "37wBD1PTr4jBj6dshLbxnDv8MKrYaFQU7nmvyARXk9gwf3K2yygJoEhLDqCiLUC6y1xWUnxXggwcXddWfsZCnWjj",
  "key16": "4H61RCoeHi1Rrd6GdwCijCxm34ziTvwNPV4xozMfTg1JGnCFu2eqWnTjJmBwYjoLbz6oC5UwARBs7hP71oqGjn1E",
  "key17": "4aHz2Jy2LxyUXi2J5LuGjvbnnyk5y8dGuvwTKuLJvp296xtnWmLqXPxgQc2uRnEHJyzaUwZFq5coAsRruP9gvSMP",
  "key18": "31t54kZrH1cqvE94jAmmgYruAnZshY2KGj375xjypQBWqqEbQKLTCxnBJsD8Fy8zoYF9BQpukeh9XhkNsueg2n6s",
  "key19": "4oiVf8GJWQaqvJXehMiNrNTM7HZhWyiZCwbLdKzC2J61tuLwBmMCwYiJzdedwNuthfbFgKCTX4fLg34X5SFfgf5j",
  "key20": "5ksj2RMdQAPyCTLRMbMiTuQqsmXQPZSx6dJApduWX9Bae6jMnP7dvq1iQmehYydQtQq8QhXPu5qwG4VEWUNAA38G",
  "key21": "5uiVMnS3fHiwyGdCBZQJ6rzak2riMQwPkGGupc2av26jrxqHqAK4cMDoLjtb1RN1J2XsxAMyHQ1MM16bJDjCdzy7",
  "key22": "27eLUCDFmFTBSFUyCdWbmKQzN113LrHDiNcsB8f3VmrwQvYcFBp8b5LwuTvKHaee73QWCtMUuANBrnQVThT9oax8",
  "key23": "48RExdXBwTzWE6gSsBuXUDEanW1hbJ8XC8JYtyPymkmVKNvupDmmJD7zgpX5yKx6DKWuWfGWR8Yc52u28ysUTwtx",
  "key24": "5rdBctkzo268Somxoqcc21gCNux27EeCQMi51XEQXvkjExPX5UDYie9fG6WZXunNwuPnsZseDKLh2DqeZK5pFUaL",
  "key25": "415zddDx63tU9WZGgmQCiwFoaL5hEjAswu1gw9sUMhh6Fk9jPHSaiEYttxoJFiheY5mdmsFXoZt1F1vrYFErGcME",
  "key26": "WYZG9vnBQ9aHo2UBP7XhZgnEADpJEeMHFLpZ2ZXBgim4wJBQ3Ze2LmN4TQ9ZeojeUgc2XhDS6YFXoUrp9DUPoat",
  "key27": "MTuNTZSvU7zdBPQ748aJ8J8N1DgWnNL9XPzyZrZCNRiDheCxnZimEmfYgauRwjhYmSUpVDiADr6HAveGvKLgSUT",
  "key28": "3HHaxdseyLXhkUy2AU6riXU38PsqpFGC2cRT9dAQgMMhz3jen8tsg8KuuHvYASGWGEX6z8J7jgwDdL4E5Leb3DKL",
  "key29": "X6mKeyvro5BrWH8rBYdNmEURZGzhZJQpKA55CszQnPyVovvmnC3ozcVpGbB5VWjhrR37QtC7qFrKGb8tDFsew2w",
  "key30": "2wrSBYwA86mv1PprJpaaxTNCm4eHVgXy8E5BfLpdmbpW4BYH8CiwbEdGGea3NHFEMVQ2DuZrFi865vqWJZJ95A4U",
  "key31": "3cPJzec9xLZLHdK7SLFr8c1J6aboeH7eZSSXssBUtzM7NGYUDU1sms3Th45nuhPoAZVAjgwNDtC7mXtmkZw1EaeF",
  "key32": "4Qu9XFV7KSMoPbybvAdEQ1xuVM9Mi2ANJTCHK9kPVto8i9drUHa85jiVofGr6TvjyqcN377Ycn9mRcYvmbWARR3T",
  "key33": "44SuXeosB7bDEVxbKQJ9UXQ9GpBGoDQxkJZwAVHn6XxP1wM6LuiviQhB5b5jzn5SHBTSHz4Xx7bERgFoNpERmfvq",
  "key34": "5WzUbSwJiRZfkUmiZGnj87hZEBmwWWVMe3LWyoLD6oCLF2ww5v9GgWmRzMQBPHub4HyK9RvcFvTmTA41oQtPCcFf",
  "key35": "56B4cFFDQeetYsDUVwDAPZLACkFqtmVM8ppyFbEKFbiAn7L72EH82SbezhHMCDTrZxmnXXTafT5DhdYBNwYfdqZi"
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
