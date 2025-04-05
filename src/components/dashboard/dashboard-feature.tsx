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
    "XtoUaSqMFkwvYEcS79jRNc9gK79Wvr2HNCRo8rNXQyNiomS29DR35Vfpv4kB6xaFf1jRYu8dYWLN551Gyj2XLf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fyB8BF4Yj5RFfBtALzWCmRki1knwrZgnATEq6J5aXrQEz11eWSYDxUTaxts1HWpVx6NpEj925say5k26QedgMVY",
  "key1": "2XRBYhFEdTsNyU7DG41S22bGjheywUApVTrqiyEyResZki9ZYAqspAvgN5YvATV3viZuYgSUZuZLAcWRaRu9EwBg",
  "key2": "4a8bmBp8RjpaeuDG97a1Cq135rryp11w7WuMHTf3dYXuvwjf3XswGSmAoPF8BiWaqCx6YfShgozu8BS2TRWXpmg8",
  "key3": "3jptHpGYikyGn5WQZjkN7p3RzcWbfDY3N4wNqPN1nSVJkJ7m83i677EXzCSL2jdM2YDKFtiEhmq39eWXn7uFSV58",
  "key4": "5k4LaV4JnYdAXoskJHyyf1SpWW5UqqqdJy5ksmeEB3vQ8SX5V96end4FpAiQPmSBYv1eiDf2i1kRrukJYe31riH8",
  "key5": "2BSgDCWR6St4bkt1zyUsMPYFYALrHQzXUBmqDyq7qn7mYGdt4xKTwtNboKV2kz5ikbmMiouz3CgbjbttdMqxLTir",
  "key6": "8msWtNC5qGWsXxeY6hXB78sbLzUroZ1DxEpWHe14kDauzsiK2Tots5Woh4SbbgcxW7xQZYfPA9VkHY8eSjiE7qU",
  "key7": "5SNjvbifwAsKLZ8LFyx26c8XfSqWt9Znfxvi5tzmNiwPBEe4qkJRjGhURnUDG7Ng8Z8yG85B4v1MC6QLaPCTLYeM",
  "key8": "5eJvqUMtAEtt68Bhxpejxf9KrnLb4815ug9LmEtj9xY8tvsVQUJ3ou3sGPg8TzAUAw7R4GYLF53hq6T2gXF7cYV3",
  "key9": "2pq9rYycVcMKqnzaQ13TPJqe5utvViNv72gCB1mLu1LgAfU1E2Yve3mBpoEbn8CsqLmABK5x8577c7PVeYmbnp3s",
  "key10": "3K8TY6LCEana63bxsU3sFEvzLEchyD9CdwPLYskzdy3wzXZHLSXCnog1v3MKzgHBVBGoBfq7KTFkAqMTGNUxGqC5",
  "key11": "4XcqtXPmRwTeWfPYQ8R2CTLcUj3CJyFgMkFKHyxwra3CV8vV48jhnV8LRNhGJsgcw8RyAHtgDi1uCJzjkZ4xZieu",
  "key12": "5i8f6dDvT66zWUUBSUpkecDc83HQNbo8RJa6doxztYJtXYgpQU1uaGe74yFVCqdWo2kP9Na17cgHWRoXy44esnki",
  "key13": "5rRruo7sqCJk99EUyUYntfzft9BW4kJ2u4Xwdfr9tf2EDdGZ2SY1aWE1T4BNXo6LBDCh4HSyvkTmuA8W2G56KPwV",
  "key14": "Ww4r2pzedmzgGiiHiafxiMyUR4nWVk87j4Jo8PUD9jKJi7w2BDGho9rAq7SPmjZsmEB7Rj8RN6TyNem1D5eGEhN",
  "key15": "2ZsPMzD4RYWYfAT7q5weUYrsRbbrjAKTo7G3EEQcnM1HXEYoU4s2FeG5a7nGu6okFVa9TV3QkAQimiqXhXcsMhex",
  "key16": "5vZLTmzuCdGcC6RB7imCSidwkffm4wochKbFQgoT9LDyRxG8BysNR2jFbGvPTNPEkGkEeLpF6MT1say1nLvo4Cpf",
  "key17": "4rr9uJ2pc7of7mSiE9kyQkErBf9HBi9Pan2qQ8XrF4kGuEyUtdzfPCYAMw6ouXCXdDHXNWTsDYgmWsD9ddjkoweL",
  "key18": "3sXgQccVN2XE6d8h4DPsCStGsK23wtfRJVYuFQ1hvnmg4JVQgnHqWavr2wbXp3UVsUpBACokRWq67CRrPoedNcUb",
  "key19": "61YkDgBQbUvN2RSXsRi8y5Mg8Z2ghUkBC3RjXuKFSv5ye7STf4BnhkhCDhPKuiEyUS44HVS96J2R1B8DoXot3v9z",
  "key20": "4Zd4XEJD5VHiL6Cs6GuzHYoW8NNS2CKqt413hVXbVwLJc7kLjVr9H5oKVLnoeDeM4nViWkrA9rnqdr9AKcExpKab",
  "key21": "3B6oos239wRGtkqh5mtVwdvNQmGRsTgZS1o1V9n5Gn3T8VV3FSqVfrBv2QWbzpdNpDFk8shdKtzJgYiT5uzjXeYs",
  "key22": "42i3U2XgGvNmaRpKtTKHyXMpSjAeFs5rVU6AaDUYJDxktRsmMs7fD3GkQXQzJuaM3EAXsuvrNKcr8DJ4uLNjn5rS",
  "key23": "3UEEHX1VaoyedRzRzu1cRd5Rz54mns58bu15356WMC67rohC5ou4TwKNkd6MRqC848ovhcs9fMkrY2uWar7FKJZS",
  "key24": "54o5xYS68kFkF6MWUe1kfuRntkgdUgUvzJpF19X5ai6yeQNJg4XTG6msP2JR6T3kCHekbn3gFjQAb17EjFaLHJgS",
  "key25": "2opdHGsEEvv8ZYEmLUASTGfvcp979v2B8ALrDL6KfnfRSbqGx7qUW6cZvfvCZmDY8k5U4Ha6U5Z451RUcD7QLGaB",
  "key26": "2B8SqueJd1MS8kMFF3kNS4ggzXHyUHG2d7rxTZoXXM3rqAgjYTadHMkpGcKpSxCoLTn7acsmFo7ZCnKQfEyN2Eeo",
  "key27": "67HTwnjGCKapRVJ9paBmrE1RK5RWFtghFBoANEyHb3v1ayJaqeLUtAziz7sovTr7afB3DUZn1WrEjDt8dNXsc65q",
  "key28": "2Z6v1iRxAG5248dhnxGZ9efu8ttyj36RYJ5JW3DBGwVcKZbj7KRJVP7dUDULhQPRcFXS6JcsYXmPfEbnTkLwZtHx",
  "key29": "37RHUvU4xqjoPGaWnaXemnvvLFEQmmXdzYaC6rWV8Rc6dvkpu4fqXEBQ1TwofBusYyHikiddNmSxjKSmWftsTZCj",
  "key30": "2ysFQ6tqT634qCLSYr1XixYE16VEzTT2sDbYHDxkod71Kyg3RfZLA8VEduwEAt78fBa3pQ6xHqgsTMu4fEUPA8iQ",
  "key31": "5eUjvJAfxsa9XTEAeGRB1zF7uz5FQCRmycRTokQ45PBp1sib4uWDVH85Ti8h2CCx3ntVbwtZ3z3HRkqr8YYAGvWE",
  "key32": "47bDoefSHnVhf9D7yvqTn9fL5R8vHt55YxAQzMQTsRq4iZDL4QnZUhWLSUY6q6ND38tRiz9w4PrDC59kBMTSdvRr",
  "key33": "DSjqoUwWjSFvR5aNr9PvehEwzqb4uJ54TgwKg5FAn2yda2gz2YFyjRyUxcJfQ4eLsVXrMEDk5REBMQu2KtfrtQX"
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
