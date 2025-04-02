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
    "qodcgtke3mdKHFKZyLRqnUPDtbKGjcF1CPyUsV54dNuZSLsA5BwA2wo92KVTcM1oHHvoXmDBcVFsCR3qKFZ4v7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28s2La8XKnTAYdx6wm4fc1BVrGHS8w9EAPE1EobMwwf6NC2HZmwUsRruGqcAAovtcxGeL7VXX31LgnSxoimYJHSU",
  "key1": "K63Zg6eRujJ9CGzzwqTBAwdmfMQfpSG2x3NYfFZEAqERGjharzrd9bjqX6NdtEqCC2nf69ikRPszdAN8CRjLmqC",
  "key2": "HvEX5o9yqAbHehn6i695ibLQX3N9AALfBxNvyTuVAdovWhoYgmgA1qaBoN82Z7KW9Qc7BS93nc7e8xSuyVwJqYp",
  "key3": "3N5AkMojiuyZpj5AUNvvPzwQUC6jNRe8vTNBBjFf1hEPtKscqJ9tZ537CBiAcyHQqj7BkY4T6jvZkyZSyzPZLAvy",
  "key4": "5MouLrvMFXo2cTTYg4DHy2nAW3p2ecUikWoqSp5hSwzaWDi2dkKXTvVVWg4NShPj1x3BkTsiEvaQS9Eb7eHPS9yh",
  "key5": "3fPPtDdF61TgBf6k3pgqCqyhPqz59tND8CmwkcZgvkdPJ5fLcMgh5PEmgVgGExqkGPSHsqYcECpRwz8jt9g1WE8z",
  "key6": "3KTD8EaEyskdrJ6RCmxZE39LTJmWCUFuhwzHy6EQyx5pSA8Y8gXMgNMuHM6oo6Da7Qs4PiBU8vXwwAjk9rpXAN8w",
  "key7": "3ras8948u4Mm1UxntY7gKuqY1ZPa2Qwei3zEXbKtrfED4UGuYG3rRZYobWUcJfM3w4JLKTEsw11jLH39U6UL5Np6",
  "key8": "55oAnppCgMSkPmEBixRgukL7jfURRGQjir5HnzmMfSAkgVZDi8tGdfe4oQpQG3Kktqt5w7F9MA7at1bX3Bo3Fo1y",
  "key9": "8uEc2DquEXPjdESotyEGctASFN3ffhSySwkEr3y5SakMboA57khQ9CB36KZvZqqYa7GArCDV4Md7UUBqSiD252c",
  "key10": "2MPqU1yoAchKJXd6Ax3AEKifbwDQvT4Q9V5iTQYVv5NkULvSV5mJv9MJwfNPKt1HsDgJfCPSbVbneTJTZRP8xmBF",
  "key11": "2gpwEx2CcJ4fXaLe7e4YRZU7Yyn7hvoYLUZ6hF14a4CfyGzZTdxWhN4RUmHRN96w9J4VeLaYzAP3sL2STdxSB9sL",
  "key12": "43S8heR3dVyFVcCjLQjgqfjAErYE1S4sV6vyyZeAoNyRi7vvKxVCVoqTJQCjb4KxicA5fXyQTBbqBKHT4goQcrP8",
  "key13": "4gH7cLxMfD37BcVdoqyWdt8xRwa4WWyooFYJD7WVognmeZDRvj5hJApQ9neNFdjTf8UXgDHZPBqUiNdJqt1SkKx3",
  "key14": "3SinkK8fC1sgoZDCJEqy3XdSowKnAz5xD6TT2BFe8LjABr4ugxdUMZLLCwSbi2UGgwUHR148YVq6W8bNyKJ3SMQ8",
  "key15": "4zVhPaf6qWZqCD5T8f9JUArNtJKGVnhdJNVxmgz2GHoDbgc9TFzzJ9rMUmb8ppSqGRL2xzHXwCEaXKLC8eGZarqv",
  "key16": "KcH7WQB9aYvFPseMJKoU31YuHcDsUS8EENB2QEc9PPSozm7U7hnGuKFJJi9cDNqVcBAsWwduVAP5HFLrahEqwYf",
  "key17": "5psis78hUb5N5L55vrP1uJioaaVa4nP3VMWwoxQXn7RtRbjLep5tm3pUNAq9F4MfpJUJ8NvvHwvKmvAqwGvo7hH2",
  "key18": "5jGjXcTwXWipuydzPGD8erKQHkigSEGHnp3vbsXGBQi6b5DMstUoWnYpBtfh6yPxMUQrUYuejaYhxZe5nw2NMvhH",
  "key19": "Lu48JtSupb5LSMVzGJkrF2EwAy1vyXbPDKqqEmQ3SFoD3TJoqPu9DKXraF83p6uPHh3buCgtYStvWSeYzHLwe6y",
  "key20": "uhmaLxRWnfDV3ykvGtvUrSA2UnFFcV1b1Bja16N5uz1pe4fk4AnXiRpuEV8teUUXcaaGt1e7MYazLc5MadcGKKi",
  "key21": "5oBw7Z8k26ACz1LoB2HpM8XcT5ig82jwLZntpgX2p3n7DNzWGyHg8FT3qrc5wJzaTpakrFVABQt6sURPSVEQsHv5",
  "key22": "5bjGYrKY2faXNGVEABoEWyivHB9pUsZovm7UTVk9S41FCr1pqzkM1KPyr7sWQHGpYKFtk9chQgrSsaHtoGAVvp8U",
  "key23": "FMSuY17b1ek9qjjZ2dw3ZDJ5vsGvSX9N5wfXx5yczSjjCdGPGmCJ7bfFeCKxy58vigZ2ibyJp44sWwq2yo6rVA9",
  "key24": "4WfmayuhEemDJc675jyhUhkWHjm1J5ZYEk59w6Bq2QgU7NGEZa1ciHH33uSDJuLR53RFiS9TktA3Xp84MAQvLcaE",
  "key25": "wZ1T5JWdCYNTiRdaq6CJF25bZ8cy8sijJVwGbFNmiaiQrz4r1KGXsbydWXKvqkCJ3BJUKmTbFPq8zwhBvJ5KuKd",
  "key26": "44qHpw7GMhYEgXph15es5zbenKwEDycQwBN4eFpY4fqF7FekxxYxEkBG6hLy4p9TzBmPPRCjSwAKSjrdx3eNZHGf",
  "key27": "2K3QphJXc6wqB6WqhdL1cAr89qDMKPv6nN6s4dQk15JaKfFoVryx8TjYyKg6xgfdZ7h7bfbKp3U69qFohvu5FRd",
  "key28": "5UXM4Vrg15o96UUSb221tK8xyyjpEVsvUDQiUBqyUch2esfRYD7wMrby6WiQvSsmwLebUW6akB4sRQyQJUGR72Yk",
  "key29": "QGfJ1j3Jw2Fi4HpPUyaSQDQ93ykZoYTzZUXMiz2RNA8iR52gfdcZAKkvXfBxfHTFkR4BxdRXBKk5PxUjQezvarL",
  "key30": "3MctcE9s1cQy7mSZiNToFW9Qc8cu38zQm5d8R7E1uhao1TqNJTAkyozjNvhE4C2MjHa4Ku8VncSvjzsYRABsARCV",
  "key31": "KKQvEPGFsWJVzQcLpJqK7Ax3ZUuNWQBxrisRG9ZAFQhGyT78xhyefKi5dwCXpDKFBQ619h3gm9qHmSd9pudc5Gt",
  "key32": "3JppKDyymeNQQYe8gcecrXAbXsPPuhpoYKgJqxqnAncFxm8wZtBLA3mqW4ikRih4mKzeg5PLhwHiHHd4uRASDuRE",
  "key33": "36MVPnWb6g1dmZsBho7BZQSGn767rqifMEK4bnsqRYXu8A8pzzMXzrjaDTXW91hcET3kRMD7ntkBiZZFVDmGdHXq",
  "key34": "58ZhyMU8b5dPCixhuA1mgpGewSLfRTpSXZFivJtSHY7vdVfAq5YQsPNBuewvREwDAxYkHq7Fzx1MEeaxDb369pXL",
  "key35": "4xVboCxSDRxRDw2jGnwNdJSDbxseqyWELBsRx9r4ZqjZjxjAvQkbWVtf3f7j8da3L2aXMBMMuHo7BXGeXneSnYX5",
  "key36": "65qoPKgHxozByQfX5rj94swiF8s4E3dDEaP8C3rhD31JQdtDS8eD5GHKvG9FNL959i3a4ZFNuB43aWaan7wq8yTf",
  "key37": "25vDZyNRQpcNLbnZGSC3PCg98mRXfNbXzyJr2rLf4DedJZXQdfWRKR2mRJtLkektSDoy2QdJL6g8GMaWt8D3PWJ2"
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
