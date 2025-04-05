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
    "48d33MPCbzpqNiF2S79cuvUkLH2dwwJJ36nmXeaHVwzPaDRBAiXLtPbzoAPUSpt7dBNsqcvKrKMwXcrsaaV4EuN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CjWyoyTcBDXrGed1daU6HUgjp2zHzZHDFbkpVF7MMjGFxngPcRoS72w8pq1REHa8F4fqxwPgU4hhz5Y9ioTg6fJ",
  "key1": "aXe3Rk17M3kgFsym6khvxD25NNt1zE6ta3US9s43BSLKCpkJo9zy6f2rodUeDdThtXx5r6v95vXYQas4xvmNs3b",
  "key2": "4KcbvDT9e2XWxjUhyU23UpBYMawSVwEqakMsK2zJUb1PEad9LfEa62R6afmyAP9o4CQsXkeSosNPE7BgrQGm3dMo",
  "key3": "2Ktx9vCwNSw2sqsiNPdv8Wcn9jdDUjeEW2dnbYHKWRgDtcUELe2sr26xsgnZdza8dDqfdyFeHz2CU5HnHRoRacva",
  "key4": "56CNRByroBwcbCvjqzv5sNMqpExwnZ2N4ij3j7M2o1Jhi6i9KBTwLrdL4VdLSqGD2mrf6qWjTRQeqhhcR2NfA3vg",
  "key5": "4fqB6HMw8FuuURSNSXK4ZivkqMAyQqRZ3uEfCihTZf9H6fAj6sLDkzy5eBYB36zj82ePoqxYY46hUeBDwktE4iC5",
  "key6": "5YtvvjjqSZXsG1fgZUxsZi7Gnu8YYzsXy7vqREj9z6X9gS8CLazskXZvR6Dhs9bU7wJtMLZMnjtgzTUWxybWmxhv",
  "key7": "3AvZN9qToWUPr9GzHMFbti8wTQTQCJJuxCb53wTgTJTvZdasFKqKbvxW3eM8qyG16mgAuC8qK749cBG14scokQD3",
  "key8": "5Yk6ZQjFJUmVmxzcB14s2reaczvyRy6nuTXjbU4BBdsuKgvkxg9Z9C3fA5v3CJERpESa7ZfUsscY87v3G451xDPh",
  "key9": "65eZcjwtq6ZjbD32YMRsdTz1Tb1Gyi6Wec5w6EdAUqS3QZhLu5LnF3KtMZfHfrq9HQTkAPXrcx8xELytyjt83EmV",
  "key10": "F19boMkpuUZwjGhMtfMALX3oPb2CYcqhkp7maiukhfAm8MieMrh2baxLqdriEXogQ5fZZY7xWd5M3r6DAYoHKn9",
  "key11": "AeGT8vaPaNBZNsaMzmsfJPATW8b6nYRPGzh7p1Ja3r3vUsHX1RT6p5zxftkWX13KXaQVUe7kjEXd2VXjj4TbMyP",
  "key12": "3ifQeB7p5QPtZtaLLC6kNyWWEMEhcFDiTTVcFQTicqbkn9wrLHD44j5NRxHpuXUQSFQGdfhpbnSjeRiJf86x47xn",
  "key13": "7fYMB3SZGcpVTk2aJMhMa12JiFgmrgrce69f1nBNh2ec4vior8r98E3hw8PjsBRuvQiPsGEnuNN7K6sN8weZhHx",
  "key14": "3GcxxZfXTLgk9uW76Vz1thYyBjpHgCXjqSWhG12ypAuDeqhAab6xKDWZxVFtKRGKQiEeTZjdjgzAQcHb3msK971",
  "key15": "x54c3YCsnWpMMTn4mqtwRvr9tShkyNSB1CDHBDxiPT7jr1rLmixDUQRhx1nwBxBQBgK3zKyqYN58TTqjSJBUXJz",
  "key16": "2NcxLsYeuj526hYyNZHwrkDYcA3CrhyysDYRKiumA9aP8abcoCLZEkW6KEWf6JGTiS6td9R8Lkxeq4fBtwUyVwPY",
  "key17": "46EK1eBo8mPAH237qbEo9nRYvArK8yGmE5LDQX9xnysbsiJyFHBLtEDhZC8WGj2hVUbfaQbzGrLJb48mxbFBF5S",
  "key18": "4ax4rYcTVUVDa6ezwmxunCnc89mLjtmmpJPjmK7WyNzJDCaoNjU5SuGjCxs3M3zn5Ze2hWc3kJPJGH7d95Rskvpm",
  "key19": "3Fe3LaDK3My4Gyweet6yU8wnri6aQX5q6ZtLhoSgWDGQ9aQRkGZDJT3ekDFGicZ6b2BxZeJ8QjrbJXvsqzqWFvyY",
  "key20": "3At1Z4M2dmtw2nG5Fo2uhtmAtMzpJDyL3Rwhi4hkS1xRXVZt6xBKKhqVd5CGqB2BkVKGnzsR1VmJHQ5bPE3dpTWD",
  "key21": "wuQ2E9EPa5pkqvACFWGMthjScW25UFQCs11fTyk7uMWqYKUfbCkvjLRmQej9aN4kexzNEFGajt6CrjoutzMuY9A",
  "key22": "2fPDJFsuHQcRd6tQmn2o8Zd1od7QTNFRLCi4T85UtEc7AUFSEzezws4DQcALCuvqivbnLMExmWrb4EQvTeGrjeUS",
  "key23": "2ma8KHTaFPFippLw2Tg6yPMaENzi47RxYRK5AQB4YbirpEPgN5UVsvMEJFsv4ycmo4brMQ2X4HwvoZzxQa4r8rgJ",
  "key24": "oAQKhP17v5DA48qG8SkaUv8LnBczAAUGYaozc2sS3ipXASuCHS2jWehgRQmyCTYaYZ6SAt1JqZFBFji7VTHWP6Z",
  "key25": "61Q2t9utE4EKiZyNWZyjNzSAXhkPKySFyY5m1AofWNnFQZtNhPFPMJuj6VY2uca8LhveWPpv5D4RTuYPBuJuqT9j",
  "key26": "3CJP1k79JYxa5c4mea112AEVvznAtaKHMa6pNYmVLZi7R4mcRxFESoQuVQ9wnvBYesS8AEMjaUpDr2Sst6PSgSa9",
  "key27": "2rshvGNhKGkPxprBUjcxkNh1oncmj7FA4Vd1XFeBfm3W9mRjpdo5mTD5x9k3BD97Fh25WkGfZvP9mnM4YmQMZCPN",
  "key28": "644mn6UCbTNCSz74dny9YHtLxWJkBDG8jbjBM8oEacdnhPz3QA9Vbmw4eSrZJbMcARHxrrdV51ZXGXbp5Qm3yUES",
  "key29": "4QNvgFKFV1ZQU6cSb1Xxu89P9Ruin7f9edPa2e59jAxLcbNiy4DTSaPPXJsPAurEnErWB7WWmJ3VhJh36KhDufz3",
  "key30": "4ApVUN5Yk8B8RbgLJqqv4At5Bm1uKvSp8sbfbp8Re53DukiRxw9yZgTJ15jez68QPxuqC4eoukv5wPjN1yqRrV4",
  "key31": "HbgFuSERcQ7oCZak6mSPLiWxwsXSFt1odB8u82AHuYAMNNKhjxXCfaUYjP6QpjpEMSmTf3BkL7QZsdu5TW6SYo1",
  "key32": "hqjRD21w8E8pmWVgBf2dAfSC5BmFWA5vPPeBc2kg12ibFX5DViqKY7c5JZzTEgSRDnuqLFYYs3dWi2z5ParPJWW",
  "key33": "tTJq6S362pSgka3Exj7bgbm5E86F2KwwpCCuMBRGHkhHmp2gXjsG1qtPya2hpiTfqfGeH2Sa6TQqJvrJbYDRdxQ",
  "key34": "2EbndUP3TbzGt2rL6MQc5AqaVbrMRSCCAyCHAFTskoJr1DQ6xSiL556jSnJdNth6PSSz3Vtip14TNYjvJZccLg9f",
  "key35": "4Nf7qQQWK37iXK5Z7Bi1tYbghdt6PPMMAa2t414r936qHp6AE3Ga3HQ4Yaqd9HhGs9L7MbFubnx5fgzy2kXaD9Qe",
  "key36": "LGvjtMfGDo3kyhk2JKhe2hTV9Pzsrz9BfdnzeNrqnEtXLD53zpx2BAFtPZgxxGsZTcAawif2QQjhfM7XMWqXPaA",
  "key37": "5n2Gx2RbcbH7T5UyC8Nv9zp6ADnWZRQe7WrsPnS7UMA8GYaicgSDPx1am2LWV2GMfVZs7GZZRNt9mn8Rd36xy4GC",
  "key38": "cMeNJ3VNQRwA5dZV4wkkFUQSvaxXk9kuLkBbF2iLpfhyGxuu8jtQ77kgsWvSD92Tj8LmxgtzRywyM6LAgrronJ2"
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
