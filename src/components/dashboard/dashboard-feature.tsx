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
    "4vW2r59e4s3idTJ7hZrHWPWFt5gGhfNdeqLqtkCjvHwRGRzGrM8QxHGKFc8Q3ZkD1waxfdjGCTeKQjXkZ8rSVXWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pCULqyRKgW7Rkr8D7Tgfpy9D2EegDU1ax14BqxY9o3nuSN6xysww6HDWKSfAurtwzBqqYW7JP1vrGHMCwUFfoHv",
  "key1": "3KkNTgrZ9HbR3mWXMbtwg3uqeMME76f2hcVoDgF6rCmjSiC9zmSoG7B8FukWk1V79sdLCAKpmknWqDbSftdeRU9Y",
  "key2": "3ycTeEspkEry3ZfSFDZa4E1UyyEiC5z3CmkhreQEJzCdUKtUbYZZWskV1pkswQD1sE4PbGJhWqHWqSNMDBPoq5NG",
  "key3": "33LADYhHahhiBpngWzaXovxvetkvsM98RJcWDzqMjUWhDELq3o7vT5cvih485usdepiLns3JfvyGJmd8Y1NCsuSb",
  "key4": "3xBGKmg6rhT9sKigAcnHqGGqViqjKBV7tSKDAWLoZie9jHXT5ZYfX4cnf61WncFcmbJdKHrgA3EaXfXSyysHGUXj",
  "key5": "5prs3ZEcCQcfsrV6A6dF7gtU6ifS5dNEECpinDGpekk8VsoTYAr8N9gDmYeD8cahGJ8iSm6vKHrqR7ThHGY8yBgh",
  "key6": "3NPb7DfPRxZ5Dbkdafnw4yCNz5HhZQZTHkuRnpFiXAH9jcoz5HfVnXPFbLhHERAhMVQE7RH6ugorrq2Q1QK9gDgR",
  "key7": "9Snx6z9y14EjF83grAzEfXsCkBW9Qb8jAUiWEmKF1CJpa2uVMvGfu32SjRAK4Um5UahMy4uT51T6nhoXDx7rYQe",
  "key8": "3Arg5JmVaqkcAHiLB8GrgvqCXaeetZvM6C3Ytsata5hRWRV4cb3U1sLWtXjEKbKVmmGKS3QfBf56AbJZBavedo5T",
  "key9": "2RUTrqWWtjsLshDCXx7XjyHiruByMUQsCPiyK6k3y7w1WkWruk5v3HXsaV1MoqgnqUYCVyC5gBw3q78JHFTwTAav",
  "key10": "4XhekXgLdsbstKdH5YJTjtpvMP6bCMfviNEmskfGn7Kc3qkWuKq1MGAfJ1vHfrZJaQ9KUTV15a2mdQMuUbuuinba",
  "key11": "2QnFLjh7pDky9FV8LhwuDQBSenNhCfUnmStLAe9fKmbVpNuQo3baSS5w7yzdEy41AUTWMGG76HKWS61nYXLPhoPL",
  "key12": "4rLYsgtVa1rhN232vXUrnJeHfUsqaukJ3xYr5fP2nsnBhQqZizum5qPWi9b974KgEqPM4unPdQByUwiTVZx5hxPU",
  "key13": "2XJshanJjNhiLMzoJtptj7Kj1m8L1fR87nPqhyiKvsNr5YsFuqkSdW9mLVkGrNmq2YEigtxLnELmZNkhjKiPC8qv",
  "key14": "36j9Ye4cnVVBoQDHXiU2sBPsEgk2Fdrc6bywiEbnN6hEDfoneQGtgdkDBCXY3zudGFVRtM6MyFVn4tZMqeCLUSgf",
  "key15": "5h3eqNuhuUEHine8sR4Bvo4Xxve62AaapSD4Q3m8bX7tP3uzF7L5BPqa2nnD3rpBe6WoEPPhNnNQFnCMVE4mJCiq",
  "key16": "5ddeWT6K4X1JMR3H4n99Jngz6ncb7Q5epEbD6nyYtXggnQJ3wXmShfgFtoXG6aXSUcNAtRzpkjTSGxsvQyJpnEav",
  "key17": "ufnmRp4kZ2H6N9atBfQtDAu9gZtC826TUwD9AJ3kSfM1dzpYo7xTAEFRv5hgMVYWyTVq1cAToyvLtnd8aCFrBXt",
  "key18": "472L735m4XsLqWyxWwMj5zUDDzYFgbdMAsGesPiqVQDYeg5bdZVAtJAfsGvkJ77pyA2DYq2h7ZocQw9nfNzneNwa",
  "key19": "2asocmipRqtQuNCSzvSKg5ge669Uz9dDG6Gx2rCxaoriQDF8DubHYXhVEB1955wu97nXALRcAYA7xREbU9NfdDrv",
  "key20": "2qigahfb2C76uwb7RUDnfEkavh1CWxXTtzEgZfk8zTjFUhP4bG4VyoD917Q81Cp8iN2qWsqwcLQCdGnri4eiik3a",
  "key21": "bAEkC2skfy2g6XYE81Kde3sL5UokN1eGiv9FSQ4aZbcv8Tzi31T8oDDP2cnjzDj1K3wQcNRokk61i1KVpoqDdCG",
  "key22": "SSgr3nWwVa6fbdZV8rAXcWbJNixryC1ikMTQmSbtJwRTzQ25ZCxsm28yznCABtvPT7AhctetjKCaG5mPZjxQ7Wm",
  "key23": "sParwJCMR8Amggfu83JLEkMRG9AJDLeQCU8E6Pjpg8dWp1nSH7YnxAurup7LevF9AtbegwW1p3Mcc8GT3iMWV27",
  "key24": "Hm2zhEuhdseaJxyPkvQjarvDjfGCLD2YQS8PzkMbPy9iW8Q4EreVmbkeiKmWm2aZWgpNpQwKomYn2e1TgbyJ4zH",
  "key25": "4M2PykKfqn19uVrfwJ5RQsKq4bR4PYVfE584cBZBLADZ1fbLpPSGNZ9EbEFSHhzipkm68UU7bzzvjPUwV9ds5Eco",
  "key26": "511WG67FZg3myYA7qmypGok32xV9pziWzMRG4QrjaUyq5Vc5NhXa1CJrra4zUVyD75kxvXQoiHymSE7BjYWuJYw5",
  "key27": "27F4Z5b1RFwYRKnKrUxxgMSipUusrwDso9dFK8JDb84evN5zZqpqdd39Bs8Q8MdpG9dX4g2TaJT2M7qoQEcJfioL",
  "key28": "5jV4VUpfQ72uuBy8KfgWxoH8KpQqHCsJE6ZvW76HMZzD9SaYvaSrMJmc69bsQkVPBFYVxKrCocC8qcyzfEneQpEH",
  "key29": "2tVgiBwYNTn6Xqy3p2o5dBYGCphRJZFfj6cAsNbT7oCSaawdpStkzjFYxkFNsViPCwoLTaZhun5PmaaWs6AnXu5w",
  "key30": "4JsDoq5sD6YYuhDMd6A3Ri5W1biPVANZZ5HcYEqf4jvXpTHJmPKPHVsCbiB5DdYipXZ8aBs6Vkuw9RaXDUN7Rvzk",
  "key31": "615wsyjGxrBewAN1A32saoA27gxMJQVTfWEeDddcqNCm2ZqpohuBX3Yb5WS4NtxcWBufTPBCrLiAgVVD4WGqD6Bm",
  "key32": "3K3ApdV1h3TJuLqNqFDpM7yqbDXePVzcRA6oNH519PKCHtfsPrmSCPDFFu14CDrrNtgzh6sv3kaQ49bLZ1y6G7Xe",
  "key33": "4ZCMfVcp5XzEBSpCUyf62zL3HxXpDtKiymmNY1c2M43UNBp2mkTxZmKSt78PhS9KUo9mgrwqy3macBqsdaZD7BUX",
  "key34": "5cQM6RH4m3kcRoy3yMSP6hcSc6bKmCArXAzqkCJKTfteqVmMd55kCu2Lyqvqy7Ds7F6K8aCMtgX1PL8xhbR4razs",
  "key35": "3AN8Kn9g7iGKJEGERAr4KXEbdexKFqWbGGfhyuVWgFwJuzXhAS5c65Cb6tiJHuN9H63oFEdEL2a2vYtpU4LqPZvQ",
  "key36": "2LdXMy99bAPqoZpL1UHTnxjNmo4VhcvrxewJKmF65iSUiSPCxnWndXE7NQNaY3PrbWL5xHSXPBDhdcyTaH4doJ6v",
  "key37": "5gNvK8oBmbKsCvc65p4JqM1D1pdf4PqPtQjADeicn1YNWZ9a2JZkQvBMfaQk1MoeYgACadaQBb2ahC3sqvyESGm"
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
