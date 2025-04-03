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
    "2vMecDHVaVh89n5ekKQ6ZwfAbsxJkYmpaCp3MuebhCKwy6bxhYhwadTKKWRabfxPNTN4Z9rZyceoJ7RtbAcTQAe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fkQkYwep83i5s3zyzqbJskHBNng2EypsH1x7NYvvT5fzFV6kakU1khLZuHvFXoa2o1dFPjp5NBtV6MhCNXNTKdj",
  "key1": "5rb7AT3WjGxuhUG3PcY4EQndaYXKEK1EQMohTwwZe8NG9rz78cw3E4Ru7AHxf5QrY8R1zWVoMQhG6XR3JA6HWJTK",
  "key2": "5uVBCyp5jfLJ3YSMgNEixtd7zBWAYnXqvC6HvyQQZi7hKDbEZRrjuJVYDp9oQuRpgKoHbgEuj6HAUQRNr4ZihD4q",
  "key3": "3QMsCDNbzJbGpUo4kbfoaurWbr6gd3nF2Wargv2G7PPZqBBh5qWFB1t8BvZME89SZDhTGJQRWY8B7RmiSJvUmvDr",
  "key4": "59qmcnVxgrsDCFcjm693sTZspVmLtYx4VNF9tJA8yMzMsFP43kCjXGSa9WqGdTZL23GRjB2yENhDxHBjMUFiYaof",
  "key5": "3ruhfsqqWqnbXbzzXeX91uWV8PaAjgHSRVvFFSGR338TyPf2MEwpLDPkExyDmSWv5fTr7ywVSDGhQW9VYzZzAQHH",
  "key6": "4kePPfbWC3ztzps4n2wpZB31BX8YbvtiCydFiNUg3wf4KZFFZRzYdJNf1ffLm9Aqm2AW2iXSdtZj4g5Na5HjCdYG",
  "key7": "3D9XEArmhjwkKJraAv8Depf3ZB4gZSBxJbZMkwQx3tCeu7bTxUSXkj4HSgq5KRZQGfKn9yLxT3463DMh2zPC592f",
  "key8": "3BU4xtSqKpuYrv2XDikehNK1K3GN3PKyAESE7Jr73jdwvW9vLjjLdqbhWDMz3MzsdfePFCPF3LeUncYN45iRKBwH",
  "key9": "4B1kyeiyoctMPVqCjWrmzCiQ3nJhJokkaAk8yBFieJHt6TRXNJFnDGPidCm39tS9Y9ubdpaJsDBZA5svhuS2QT7E",
  "key10": "6C3jtZKdZneS89y5Pg6S24qx8QxU66RTQAYWMsxmVNGZFAaZ83tt5v6nXYyEzfmx5Aw4MsP84MUSvFNw5QuFeYR",
  "key11": "kDA6nwbSk1qMZSLVK6hzXKNLSU66b9U3Xckb2XFwERwCfzRTR2Hn7oPeZ9M7Ma9DiTV3DUNiQcWi8JahGtPowjn",
  "key12": "4T6GPAVpyN4DS9rTSNJbv6sNnJGsBVWjjJjECBPiBe5eBoaSCv5YkkCzZekEbfTpmwDU9rJMijJf8B6BoXXuDS6B",
  "key13": "4DGvje6YreZwNAjfvrZ14fGrvtUi59qpd8wmGai6dhzatQbthTrcw3Tu1hroDSnsrAbj7oxHD8EtGBirrqUwK2n7",
  "key14": "2DCVFGcjLWcGTDAsd3pzYRYTMgKENmWJuPyh3rQFWj7zqz7gv1C5kPBNLNhZTtoMDweLSSTmWWRhBUAMRqRjByvT",
  "key15": "4EMGeuy6azy2AJPPqZhH8EzqghJr6Z6Y781Bh3TAd8teR8yW9vbRxHHnMvfqUEueYztMwa7eQpxC28DpTGbYipkY",
  "key16": "4ZW3ozFgGM8dE3Z59snTc88TrsWDG1LzJpHgMBJk4ZawUWqCv3qZBw8sVp15ykaPoWyXwHrW9wQha5W6997UDWee",
  "key17": "9yVqrQJ64NneP2eL6tXcnFCCBmpoYrzq1dFNPeRpC9JYs8wsFNEeG5Z7FSyvNM2ksmVbwnbX94npq2SFJ2pWwRK",
  "key18": "GPcesCmHUW6ZkKXacjZpNdC9Sbj1zHkK8ji8fj4T3uczDqSc51PmUCZufeUKGvDsoqABphJzZjkrnQqFyHY45ze",
  "key19": "5ReRitjfT8q6zzDQavzkfW8TTCY3crNgvy8S91xH7d2zskNC1os9WdAX58RBVZrG1jV9bb3uasXcC2sq2yMhFWum",
  "key20": "4r3oXzNYcaJ8dnnmLjnfT4tL7oZscushT5XjqV2QXaAvfthQrb3hq8SPu4aFKbGjBvHcJBG4QxcwDYx4TMidTHKT",
  "key21": "4ESuuLM1HgbgDrGhqhXmRXp4bWguHD4AHVV8Re3rC2terNH4L67Eu9BxSnkgpULPrLyH61cfTRLhVJ5HpcHE3e7n",
  "key22": "4PUKCG6iLD389dZX1sUufEPjxV8m8Eibe1rkh16KzzVrKSH8WgypmD4Mxr1V4C7dyyr5LVBmwJAs5BPSAdziTRNg",
  "key23": "2vYakSPfovGV6r1f9sHx9MYHprGkiSwfq8qpuwYsrKyQsjPbPAzcBNN4uGe8TpHijzvSMdPYfv6QoazyPKCueauk",
  "key24": "rkWVnjuB9GngHqRnppuDfPgWJMbdfcPmcZ38RdSCJGt6xzuhzqCGwpN8ieBLzMJHps1nu2vt5BYyUdFwC1bwxwh",
  "key25": "3vBmy8nksgYehm4MR9ejPop12z3YBorsTwaDjyinJtZLcwY3b3BE3zy2mo6yVFyW2vxa7SwAnsGbiaVed4Nv5Zk3",
  "key26": "F3v3n1ndceAUdQRBvKye4rRMSucNfdVSbDqUsHk78uAqJib3UYHRX9fP3QEtSwQUqdaV41FmXzM1UAdLadUfpGL",
  "key27": "uXYgUhASwdiC2vuJ6qNhDQ3PvgoEV63SZyFHekqpBfji3XNLqgCRV4gxQ3s8esFXgFG4K6RR8psbLeAhj3tzhDq",
  "key28": "64vfKrhbszye7SecWxRXNWUYBmPhcEGnrHnfwCMsSQWJn4ocYphh4SuCLhPZsRpw8YBTH5QEyvcGWcBgut4ubowq",
  "key29": "3R9DXFbjffvs9kXjrs8r3yorZV7yPHGHvGBqRffEHdkBurXLgvTmYyYgiwaZEvC3y8JkV8SZJfCSifopXYALYwAN",
  "key30": "4FDK4wpxzQrcopQeFFTREQ5HgcniNsQ3e33AjkFJqwxVWsSQTGcyCEFGb6tNefT1U7SYPEqaXoSM6C8n8R8MrLnr",
  "key31": "VbsRmerRvb3jtg2r9bDaTbMCFmEeoUZWzysQEHrUWNkWuKVMBQSThdcQypsj4rzGL3Q9cbchHXBRYNXPg9VchRm",
  "key32": "5nLYGACDd7iaGjM6Vkkp9NCUZR3XL3ktCDLkGriw8uaxUAJaFQhEcLejiYxcAAso5XMHZ1tpZ4LXV4zkJisuWyQu",
  "key33": "33yZsehWEZEkbwkeD9GBNCBjgCqCXseLgkyTZFwykCykHLHc4HQttEdvzdLh75W2MLspEKTrtncBkeZFRL2DNA3y"
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
