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
    "4kEmWqLmrNQnbJtWL8zB142ybvvAW9h3KwDygmowXDcVmC4jW395nn9Y96DsvJ21B4etepJDV4BPDxvXjZQ3dyUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qjbVxWiegtLHGd8aVvvAKnJWUsv9d4dnR8F1CGq5bMctajfjtsXLrkubr7VoF4ib4KAkfFDYhEHSNjLMVFyFkzz",
  "key1": "3jsDDLdgL2o2Dx2oyjTixGusn9turKEGYGBCy8U5CWgz5LykYaLpivgayDrVHCPTDWuX2MKqv6q83vQ7V8XaGfH6",
  "key2": "4H2GWAEC3c4Pomyn4eGhinwbpejDLDS5RJs2SMNaiW6GJe24ozRCMu12tbd3ds45tuRHMiwFucYJQaumRQMfy1Hb",
  "key3": "EXAVy8EfcdtResYfJAXJx3JErCiYDv7UgCFZ36ncTPRd9LpxbXMgCuHUcbQ4bC3qPbCpUkKv4zev8QwYexmux8u",
  "key4": "2BFMZmrVWsD8meA9bHF3XCLnCSXjwXvgj6abDAYuQZXPzvBcnrhMZiTw3mdGqFMMQpHAtGbsJY4QKobzso7vx6DY",
  "key5": "3rax8Z8iK6hzKPh2T63owmtzw8MxtpqYAgNJRVX6YKGxi3A1m8Juwq84VD3PH6DskQsTyyiukkN5SHLqZwRe9P9Y",
  "key6": "2bqU8r8s7yv248FRmZpZQa1tNvnVCBF5om7t4JpgWMqovNhReLBLQ88NAZFLiZDh2Dser9hdEp5BVeS7WNZhoCNN",
  "key7": "2yZEH8z62WeZVXo5kfs7AVDY1GcCpqPpJfE5pQvMtHB8wxBBs9jPc9Y2f1tN8rbmhjGHaTK3KebyB62zq37XpTdN",
  "key8": "7MPbs7s4QuhfRikDBZhZqGPZjQSWJPPcVz6aTpAQJ6WDJicu6HTxrG2fzEVz1jUSHLZvP1e5CieqHrBpFQpdXmH",
  "key9": "5LkGcRvpfp1FRmf4GkwXBBdrW1ny27zB3HWQ2NqS15f5up5XZBepNcuECn4wtz8HhgGUDq756zhmfXC4gmNfaYBE",
  "key10": "2174KoQLaqXSr82dzxVcmmH5m7deNNkB5a9nV625YLMQ1dCUAfxuybZfhwqgdfk13paF8vC24Sag1ksZF8uwWnpE",
  "key11": "2FeRyJVAQJ3aGBVArKSkzaY1bGthZtVTRDQnzAFaxcGBDxYayG7KfYEj8Ay6eBWMZ8sB2wSgamtmCrynd3ntU41H",
  "key12": "2JGU2hDkcDFnLu1u5yx6uNKdMR8DbJMv4KpfR1MsiMD1HF33LbWUpX1yV84LzkwfPatGFi5Bw9fZihLxM2h6vho9",
  "key13": "wHNvsSZznjyU1fYzveDy6q6wu43X6Zy7j9TWm5FAtrN2eMysfswr4DK8janETVGo4Z1vdubB2oiwTZa1FkNzVb9",
  "key14": "4D2acg8ejgNXprgFXRhxn5yZmzsCoeCn7bMczgJWBVNGQUNeSTFSCM7pCR5GgJ8VmMsQyNe2gAKjKQmHoh8461Rs",
  "key15": "3aHr53nY7PjrFm13ZNNWKmHGW9YFuVHJz6WtQCfGzndhJp4e7auLr3HMmPkpLoevFDUgyUFxVMs5hW2QZWp9NYVa",
  "key16": "3yX4XYEWqA9nKMpjTTUn1sikTMQMsgrdshNnhoASfJj2PSCficBy6T6MxoLYCwZCEV83hkHZRyK821zL12E4s2Hd",
  "key17": "3hyU73qJZDWc4qoPY2Y4S3ynaD3xqAeVQeNeWDqZJW9G8Lbp4ZmvZwkqJZEXCXaVb4zysFLztqWWjYs8dJRQesC3",
  "key18": "2SLvVwWGUNNQvc3EcnoYK8ET75LfN3qDk3kdsWpJ2FmcHhxTVPozRyepHfEaAp71upvwzsJt8tDHvcYJzGJZZqvF",
  "key19": "5EM4t7QoV8cG8DUqRKQoU7vL2cPuBgCt2u5CwjWaNjLoNQ9YriecUpLXwZ1FQ1x6AiHtSEFLdSqzTtnBjEokzoew",
  "key20": "2yqVjQiEoJ13RbHi7vzBcsHvZZ62WECcyxbH1eXM5fhWxeKLwKRPnTqwnPL1VHh2GJ7a6XvYuX3uvTWS3NXAXkSg",
  "key21": "2RnDXh4h6rqo91noZmjqngW659YRFjZdWUaGrhooYtZocEHY877QSpm3nWZRGCnnXUvfhr8L3NbhLYLxAkY9i92y",
  "key22": "2J4LLQhqKi614zByrVC7nfdf1Qw9Tx2edamtNMqqVEqe3J9Pu7uTXB9NnEu2NceLUuuF4EXdic9cQK1uGkTRXVPp",
  "key23": "3bpSWt5M9GwYcCaFWw6kxEftQVsTHbjUS82CuSngqJgK2BTyLfF7rdJiFfK9U5zzBfUxvvp3g63uPyDKBRX4yMxD",
  "key24": "34t5xdag9XhtV77uwsRh7qj4fYefrAc3QaMfPAAD9o2UDooj1GrXoqP43Vmr8LvDqRnjGo5dT8guLp8ydkjCNtVj",
  "key25": "2TCVWnMp2cJJ3c5P9ZBTaMAc1az452aG5YMRZZ1QKcP923AfpoFmBnSsQTwDN1XxMUQUkMeYWeGyNvQ5CsGrgLRo",
  "key26": "2CAxGCWbnKxoGk48srR3och1btZZTXr4EZFpYthrD3pzkq2sX6vPKNVHp3inSneZ9As582PJ3h3QFwniaUYWZZpU",
  "key27": "32LbxhwUNKnzRSGDPAM3BGaFSA5ZxZ5wfk5qQ2jngdaKWVzymo7wGRoxLgVMYRoY49errxd6grHZygXqtowjaDJX",
  "key28": "4oStJDQXLGbX4MBYcD5pb2sspw5uDecPsQwwvkYV4vj6BiAHE1qL8M12G3qjdPZkQBjVkGyZnTkoDLgL24CxBxji",
  "key29": "46Yp1vufonKmV22egaEmD7NXRdsDxBEDg44HRYGcutSh7GEMUGAuALHTtA5s6RfbqPe2yraY3f5aZKg9fHE6Ujif",
  "key30": "2PY5Dj2uxwkCtmYxb8Bb8bgQshjfPxT3nDKPb1TJPPegwJvADaRY5ZP37VrVEUBi3Jgy9k2iLyuuskFoe6aTMms7",
  "key31": "4iMFqGoaUZaW8xrjUav2okXCeo1oaRppjnSWqRoBUhvPcM1UVtFpp5HeygHT3Kj1ettT4fPoj2Jz6fjkumTi73Fd",
  "key32": "4JME5osAs5efr9CQSfX9MBK479iXdgJMAw8weL7XP3cJ4zAkBzuJ1LMbumt69ZTuoKZ36c1SRcxUSqfzLukdW27z",
  "key33": "27cqYGMRaLmeAkkHqs1DddvL5L9WMThjzq9tdYR1CbR61Y7wLmUQQKbnrn8zXyMTR45e3poBnaDxzAc5s4NP1QDp",
  "key34": "56tSCYiXivmhRdaaEpkBJ2JcbTw3s7Az9Sesa3TEfiGvRf6RaWZFCjpW5oTzN5yhBWCgBTMYFXBeUQhZzWt7eUJk",
  "key35": "2RecSKa4MQA5RpxJ1dFFJ9A75Xcc3cFPmiMsP1wVzeqZDnFX1y3a4WUj5k2WrAUWgpjytBNNfvcYyHkaRDuQGwmb",
  "key36": "3uSNdxWrktNMVXv1n31hrVvg2uyfHZDdVnGvShJN2uCQgFmPYL1wL4nkVLkuacqPuhYvcr8MuQizYTdUjiVvb2Yf",
  "key37": "Q4qYGPvjVbJQ7YQYmzhPdN8AQHzPTEugm6rwasafaGeDTS6S3hUp69WhjH1Mrd2WPiiCmwtNFjVmEruM9V272zA",
  "key38": "4CiWPfJYAfDiwsfVANahant85F8vRiKvWBoByifB9XvfwUjMbv54RHuqrsUKpHL1kfGb5PMsVChCqtNYKLzW6eLG",
  "key39": "3XCPDP2qJ7qB4Z3yfE3tP2AQ6z7vpFcKvW5s6P2ro4mP4dwRSXuQJtXGbLDj1emo9ksKKg6emRMFMwvYMqUb6Eu8",
  "key40": "5w93u2mvxuXe6oTgyGJH3qt1imXBJkGVi7u2pd8JK7gaH7zLozEuhBPCJWwkK796FFyYuBhQ1udUAZEZ4XZQojov",
  "key41": "bjCSRQP6H88bjjYUjG2qPYrv8kZHRDZ737QWSTdDKcPyBHMwKxLRjkkM3mNLm7VLdbf4d6FrVP46DLcogy5SYP4",
  "key42": "gmd4bAaZrWWPPmDBiBaYWMS2QPFqodsYyuYbqBgCcrcRp2wEGG4VpsY2XUwPT83pityzusFVN5d9zJRf47xh3NY",
  "key43": "4T25UWePfCYNxWFCGtK9M98WUHsRVLfSGqKzi3NimwWDJrrXvMo3ZjJavpLAkhEJaQvj3ePqb8NQn9TXNdpN4L1q",
  "key44": "nuTK2rknah7hviJGf2AzVcpvXLw6snnGHXYZpYUH8p4iqwfShFPQUmFg5b2yEegU7LBsmKzqrkP6utKBGHH7swV",
  "key45": "31wF42JQCbnXqiXDcBYzBcuXueoovAzJgcdhqggRVs7gsQeGwcs7ZqwKDqxhJ3wJftGjq6tx4A6nUcZzX4qwTwss",
  "key46": "gHxkZcUgPUzNxEt5KDLgBv5UBiQhBBxHvRzpt4HvB48yMi92xm1TFk8e3h7nKVQXaPaiESBJh4nthUuQYZ8dE1N"
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
