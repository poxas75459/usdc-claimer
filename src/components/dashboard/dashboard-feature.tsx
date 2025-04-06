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
    "Pb25JGhhqfzFUszueDAwtXfw1Vg4mP4U3sp9FgvekSKqSnS8zeXgm7rNED444Wh6o4yCZk9Ai1bUfxF45jLRSr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58V3XdMq1KVeWEkjomFY9AtBZDGdftQKSuGbbHCzKiNu9Wc24X6nyvqmmE2xDQuajggvBQomrA4tVcMxoNA35h23",
  "key1": "32odv8KjpNWXzpj6T6drDiKP7VKnnocT37JBvhGeu7MoyWaD7mE6KKXSmM4eNPdaQ8hofVksXgX73s287eaARvgR",
  "key2": "3JFJr4kNmxhU6WFzhfGcdStqrTZvMvnB273jgAAMrCbtmFwGdvRVFAqH4rcqwo9DCNtgxqT6cwFLzwTbJf48eMyU",
  "key3": "34YsrpGUzLbA39w95LguYa2DiFzqXqRDhy3KDZBAGMJPeS2nWYyxTu9pESkBHFjjBbbZJMYeoN4yMUAoAoEW4nFK",
  "key4": "2fMWZbbAs9EzhB9n1g3GjB3SK9djjVvqLuaDUnxYNSZsL7FmnkQ1LzY9Yf869E8VUN5yEjb6ZAo2VpNefANzhZuc",
  "key5": "d4nwBnu4mTmkw9BwdcmuaArCNvQws75zVzYDYHxigYctuAUTNehfCtjEr7GZRF8BXk4mkoaJWm9zyUMjxzKERTh",
  "key6": "4RPUFGmfke8rvsjCHwyBxWTRrBXvMz6grJVjxNDQKJJoqMAtFMW88ADdQcpyXVkd5ErCyqoCj5JW6TeXtPbSmWjq",
  "key7": "4Xi8T8DcgREDxqmPujTvGuydRvGo5XzNrgsv6fez1xA7L35Pv1xPm5Xvw2eeeGXFm8f2G1cP68FcX2RhPnC2W3aa",
  "key8": "5QPAWkRFosgU7wdVB3ywqhF6jwKHH62M4vGxyCoCCNV1YAicQzrRxrynipJozvobrESBVjQd9VfjknLneVn2zxg8",
  "key9": "4du4jt6yJHZXL9r5fttaZkdmurNwHX9Mnqy46bhF3wWzBCLVD7JqeyLucPaezzUG75Tx3LKgHrsd9tixXQuJ7Ctr",
  "key10": "vdDSYve1zZGdtaubhtM4QV3hQwFQAm93wQ3aPCom1fjMv55XMPkh3oASKTVmqmLt6EdixRk3fAtr8TDf4thEo3k",
  "key11": "4LJLwFTjLRoYvozak2sBgnCusiwTpY116VJ7quc69HU9sXBK7GgYdPXy12Kkcbx31jmgFd8iGNgp1GdjAHH6VLDx",
  "key12": "5tVZ4N28qLFRt9Buo6aqeAXFgA5KuBnbtqCYJxU54UThR5shJnbUwSCvZtnFbBbVThLtKd1WYynXpxTyUTprSYHE",
  "key13": "2YgWttkQyjv6K53FeUHfgHMPMzp5xi8UMNTHovv52iqpL7XmpM84JPhiXxixXoVzxejAnALy7vq3F5FbicEP2dMo",
  "key14": "4BiFsp1SRSq3UB9qrwA2HV5Yf55A4ayRj7Ho8DLYagfU3QSYQmLgLfrMWdvvpTi5xGA7DM3AuLCzjYGZ2bZcEMD9",
  "key15": "9wYTf2bBge5f4KFgyonBT3NpWSVaqkujFCtyYQG4AmYbaCxE8hoqWDhbTNz8fgddTdXQn5Hjc8WWjXZDLdDBokr",
  "key16": "5Ax1845Jfm76pzzx1SPC7zuezTYWpDbmS6eZLqMwZd74RiqBjuKCbXNCzn9D5qcSXjmFC8RWFv6ceqejCbLTBBvB",
  "key17": "5u1rfMRQ5DjxybSQq4iBZEbTc2gTEnRc6DN6ms8k7txkiQwn3BkuZSdz9Z54bC2fbsw6YsTuPsKgKd6wfx8BuGkE",
  "key18": "4ETd8umPWCgZ8WBTNK2pvEMqDwThu1vhVSpJVG1dn6pKThx3S62hQG4wG9eRkAXftvjRzV42ZQFTx2ovYMJgDuLd",
  "key19": "5NfKUG4CNyd1i5TMQcGPWeuwFxVjFWgEN5cz3Mw2KW7N1JWvNaYk6Twuxr7FsHv4FKLNzNo1v42VNZx5tFMXey3E",
  "key20": "4H824ikZzfiLZJPPnu4CYXQABeHv3VJNeBLY7wt4LAdswuYZfDb2JoTARUZCXo87dbaAdTCw6aSr3U54ofJi6NMW",
  "key21": "52FNjpws4mUVFvNhan7hXhLBJyacXskCcWgM74dvJcE46nFTjEPFF9iJc5LDG1RrEkUmSJe5d5fEjvVm3LSQj9yC",
  "key22": "qe43w2a2sUoNgoxDQ8E7JxdPZD9wmPQPsSYvvt78aWG6JyCH93fudZpdkAwZKRu4fX8YvkwRZFY5Ncgrnj7frYP",
  "key23": "351rH7t9Tv2dUVaKce9ADMdbCCTFuRVn1BKH2iNwZeoy1yFsrD8YwU6N2zJRjbc3azhxgBG5iuSWDFLBGU3VE1vn",
  "key24": "4LADyqihXkehYafAjb66yGwXLdMurArKZN5HZSstLfQtSDkYMqeMGZC8iLPp63hVHH1jwQ8uSgVCefUWBSFvB9QD",
  "key25": "5tdeZUuyZNSFksbfcrsRuCaaSTxi9zAdvSYq9MsdGYmEBEHfCpc68Dn3naUc7HrEuAfZiRQJNvZEbPbFJWAors4e",
  "key26": "YDXdmzyLpY3xXgKMgLMKeD9hEeqfinmX9L2oBeqgSeRchPekB1E9BpNKgKxVVuqq7khBZFqdDfCBLk5KWw5j8ms",
  "key27": "4bGhRnd7uA6BaHPZLehccSkte6899razMGcXDaRHe9pxXydjpndpwNxsFQawxT23qEgajGKbt9mRQN4cNCtj5MLn",
  "key28": "37pggBe6v1VsXe3aDQbjLe2QNtuBaRTDpb9tHpvmkm8GMYpVzrUUsnvsWweWS5sm7qQhoraxosUaQjrZnPJD7XP8",
  "key29": "2YbobBSMdzD9uenegDGpmfTjgJbf1tQUbLAZZBuRWaWSWTsjx9hEuopQaVRzgTixTjdtdiozRdAQrvTWntAc8Qez",
  "key30": "5thCFherAAFT6vzpb7sB6roJLGS2sEH6gb5xCHhEJS1PQx8Kgtumj4Zu7S9peLCqAwW6rcTaEiuYMFmgdfSf4uEZ",
  "key31": "35QEUr45fURcGkuzA6UohLiQNYzvpquL5DDS138rp1dT3QtPMZ9bCVssLzDGYUMt5AsTKtn9aS91xkMftYPa18mb",
  "key32": "5npY4chfwyFP2beED6mPF3Wywnhy6mGGZnnR6aHg3SYAALtHSAQBNZ5LWAMxEx52sJUMVaPT3ELhqXt14c5vvEQ1",
  "key33": "WZn3KHodHfT9fjAY6BZUDgeteUECGkmSijfniAW2YL137gF6Jy5mEvKgqqhDiP9EGx1vda2AzrvS7kUiorRgoYW",
  "key34": "5mknL2PghKS3816xbnmrwdhzQnUC5nhJsneDD7GVrPvXwYGXLzu9yEt1JqiHKFhGUgxWmzv8urKU1sqamJhfhkpS",
  "key35": "5jsDTtNAgr1krGA8gT4Fnv79pi5HivPAHPTnUddsZa7jAucPJnW3QMy1Qy5JKQYhfHQLiSx8kSxvCVkVoJzbXraX",
  "key36": "53AwfMx2af91kCwuPWXmMw19vn7rQPG5NAxDG5MS8hzN9DP8p9SDPesEYA3WQXAip1oSDsRCDoBAzv6xHzqQdtzk",
  "key37": "41xwFPqLRYpbodSxdyZi8iZ5Jw7eg3aZa3kWDqofycpSBQexhxs1d9p4oCcbDE54LbNM8CxQGSsxYkCEeSeAEKwk",
  "key38": "27pyWxCvH8eUjcsUHaWeRdigNtijcdEaWdnpbdXFkxFZYY8iLrwNKxgAoNFM9YYxrsHDLvnM6pVP3Ckf3b27RWoS",
  "key39": "5A1GH8ffaqkZjS8QgFgKRZb9cvduXBi51YJ7kHBfhE9yYtf1CSFtEwjcwyaryCGtvd6QVUj55ub7BTJQ3uJUxYzd",
  "key40": "2xpVmGRkVFz8wMkD87pcV1iRXZv86q8UEiPMZebJ2pBzSYZnCzgkcGEEALA7vr9KRqvpNQyop3XXnsUojhhk4H8d",
  "key41": "5e92LB5vaStBrksTFJ2irtYx1P51JLNUVz9HjWaq3t615JS6EV4jm7yMrfhWTcjV2HPFpMZQVmBGPqoFSeT2VRqj",
  "key42": "4MdCe8rwP8gVbVuong7NHcHFHneQV2kaGFQCMQSVUT7xwMAaoKWF2yhS4PozVNgHvJLtx5gnKq9n3To6XXYm3mfR",
  "key43": "2y6cjhmZyRE7BYzDKc5CcMRf8HyjgUZ8Laf4uNL6ZfA9zncKqFc194ZhF5GHrDE9CKqLc693QECzzyBCVwqxuj5e",
  "key44": "26wv7Enp9z9XMc6JWtTz4RBo8WXbFdaNH7s1PonJMZSmjA8v5cTJNC75EWuFd8CSTFCcn6f65SW7NZFChGezqQ2B",
  "key45": "269XHSXtsN9KTcjxL2jW8yrxpS3npqftGKXpdHQ6iq4WxR5vWDyekHiw7QJcAzP2N1aVUpUaFU6NmX3StuqE6fwb",
  "key46": "5JhE7cgiv86PHDgwE4UupL7dPD427sv1t4CVMTgjsYtmiF4oXQJASDfNQK6AUvUo2JWjM5v9RTNi8u2ojpRNYE8H"
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
