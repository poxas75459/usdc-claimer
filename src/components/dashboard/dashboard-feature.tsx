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
    "5DNzKm1LDMcw84VTGGuy5anUGnZfqgJqDZEYFMehZVRSSvB41E2LXAuSwzGafXTVkkVc9Cs67d8b7Tvoxc7xGoV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4paQGusdA9tMzmbTuU9RTGazCKFsuxaC3JCGYRUNosSYC4XXqmyvU1kZgW7ftNScffd17W8voohESjG2s8FczBZC",
  "key1": "SGSVKgysA9WGkufQrEVtfoFYw9t54dzd3KxF7iZA5FCH8MdmDFLV3tj4UFRpcKwmdbiVhiAfhtvixKq3iqC1AsS",
  "key2": "3cGMJtvocKGotkRsRsBGgK3qTQ3QNSytyrR18J5W4PFgWa89Aq3Mq8n9ABQHtSc4eowk58sMGjB3xirfpGXXcExB",
  "key3": "4wEjFDeLFy2gkWN5AXpjJyJBB1pU138QcpvCpsTFXi645RWHN6tRwonNBsmwvExYMyARWihkXA2BYPPwTmY5L2mY",
  "key4": "5Q3qqxx7aV7pP52oMGgJtNrGNTc9BTxQwxmc8vx6nSGXjREbNF2PkrkQB8EFsNxhmDfHzewUdDubWSShv58qaSEL",
  "key5": "4LugXGcQXrXDuU3U7QxDniGhJyJr9WR26ovSEm49YZjrh4okYeBDjqRSyMTTz7yFKv35i3eJEKGe47F5Cq8yP9PG",
  "key6": "2EG6AMHJzqZo8UDyQhjFNGHKkatnRyyMUDDsZpnki578SdxwaAMRRU1azkKEBL6ZhHFPLqUJk3RLp4qW2k4ZKTHc",
  "key7": "gUwEhYVwgCG6pwow9T721dw8GYNJhyreGcNHnPdyuCXBuaXSuC6wu1WMgmfk4UnxmBKCzYHCuV5Ra49B9KK8HmT",
  "key8": "3aGnRfJBjUXY4RKsm34hbptwBjPgfwiSPRnCotTnexHjYjbq8V8gn6xJopSND61TudayxdhV5e7Chs7p3hFDSS46",
  "key9": "h3F76Pk7Xa1f4C8RZpFEo3durwtmYuSbCKgZnfWR1YoXmw5fWQwsAbgFb6ZRJkmfdqK2zGS1QiggG9FztXcViBM",
  "key10": "3PbacHGnayf8V2Tz3QdcwqqrDrj9gvFSHHwFCuKmVXzhSbjtMqZmp3TZDwZnPGQs1SYSeoEKgxegNnX4J6dvs7cK",
  "key11": "4H6VqpVjM7Z2FBqyfKGfsuNijz3EqnCMXqx5mHjtBbaGpuxh5AWkYVPnkFNSB4myw2ZBBDG5N5pP4LSSEgNTSPk7",
  "key12": "3w7jkD2ThKe1oAj5j6D9Xe9hbMx5rQs7MTk8x4JpCP7YExpuoFiVrteySvp32exKn8jZQQhwMc2PTehekd4Nn9Hu",
  "key13": "Suh2gqSXAP3E2T9dLg7feqGR72eqTrt7uGTvEJXjnvwyTAWBnZLzhfyiv6zVEXr9AevEKPvwhj4qqHMrhEsErUU",
  "key14": "2bvLj9GhHFf3ybSwZM8jyyGaZcKDLBYu8GA7d6xEnaFPSGNjtvrjG7VP2DSaxdHCpZNP6jiHJWxY86NPqYzxdW8K",
  "key15": "128VnrCba8KMP5DsNtiGHg1grLVDPJjVpFPEqzCQkpejdDdvHrEDxpx7YtkhKKU49yy2DrvXzWh1PVfQaJBhqUWb",
  "key16": "53tQa9xPaGAyzPF12B9HxefASRoAzZMVQAVWT5SvbKzJXEFTYcVHU2TqzbgAzNBr2AYw4FxwEgkQF4EST5dtq1Ki",
  "key17": "5Da9XWs8HmDKWLtcTC6nrWRbWxBKMdGjnCmu4dz2iA6ic6ZtzxH8er8RuRcgUZmRFPEoxSGoX2FTXNi5G1ENnXBA",
  "key18": "5adobXBSz1VgEhCgzYyTRH5nhCZi2MED96Pnn3pxYB9LoXXqNQLVwbH6dHqnKihLUy9dyuFTPvUq6HHzdG3trgW",
  "key19": "4XnrpHiG4C1iGCPhyiWEp9Z74ZeCYzhEzJkKr5NQ5651ydizDDVXbgkpQnrK4mgrQhqMYMRCtwpk1SuxERfADbck",
  "key20": "25R3CrPWHPShQwwDJyLAFXnUDNyoSpLaES7NF2efTfLzqhauvs3VrUZVmbrismmHD6AEwkSiXFFHXQTDEHxCjocp",
  "key21": "SkeerqmqGFvFfNYZ3GCPPAy5cF4SqY3XrPgcB5ZxrqfhNe5y1g4X13NfRT6j4RjHBW3A7a7AcwhEEL5JehD4uab",
  "key22": "4Z59Q7J7RmAALy49hhxYmaYGUggyWFN3uGAAPTWbRGozUPWHoZaTb7tbQ1rStyJWGD2YtkUh38YfDRRNsbiBAP11",
  "key23": "48vRdM88PsDnRzbHJTRwFAW5hVWQEXLtZfNmzdHkm5BbqjWG9cGbkZiVGivieqQXbFNimiYeDYuXMiB5oiVEZqHi",
  "key24": "3pdTSeks1Rq6gnJPiRyorsYNom3pRPvoa1X8XY93iBquEheL7Nzpf2Pqhjr8NFRQuCJFooZFcE4xtJqW3BVpcHYu",
  "key25": "2rhQHdxyvGjkmGSNMAMXYaP4Z4ojtVbeCp1PNhZ5LHTqvACHzAwA1XPmjRywYswS9yXRak8sL2cLRKgiQPvGk7ro",
  "key26": "3hghXY7R94QZyFRQyJj1KCMdRxoTeZDzTn4L42MQncEZJgUbHPytBgq8AJngg5FrKKKvPtgherBXgE7dFUp81a8K",
  "key27": "SHzxi1jCfuLAFsEWHEJqJ5SvZNLh6cUGHGizhRSsUfPEDXNe1TzzFkbDjAWS9fhNnYC6hS3qWkeaTzCbXFkiVth",
  "key28": "2nFgVRrazpVfDSi7vZ6qV2Fka8g3GUEp8hp1h9vHmEeAXuB2EeqTbtfR64ioDoJ3syNBpyof4TAmz1BzLNP13Xa2",
  "key29": "3nNd1BUWpptNiR7QtjjxZN9UyVTzUbZQf27mZeiFQVtB9WEZvR9tyVELhCp1cWJUwN4VgpP5tyUKnSN32avm9615",
  "key30": "3GXx8WCmQNoJmqdsksZ9rZhXLtTMwGnGSBtxfdGnhTRQM68D8a4Z2aL4gdqc3eHb5JthDwUNdK1N8yoKwv9exLFH",
  "key31": "2aNLhd4yqHR5LmaDhed3sCXcvy5k3nGzE7LZzSjD3RGgiQWs6STFrxj3HKpdhReY2uFHwoLmJyZSaSLSyZZe98in",
  "key32": "29KwyDZc8K84szw1n9KpTKDh9Rm39teeEHEpPkKvjhnGRJ7DkpVcCwK6297WwoouCLvfDdRAS8WsiJbEwzjdHB4L",
  "key33": "3F9Cnv1fqm1YUdLz1GcyoWxot5BFKA7yDSQjDqVsqghJQPuq1vwhPVe6ffXLUR8giJM9mkXVSE8d2mj6UN4itjNq",
  "key34": "5W5yAT1YCokYk2ftNJ3NgeV9vjanTGAqXAZVt8cRmaNbfGW74PfzLKY8gB3QwYcvuKxLzscQGLbkZQYpYS5i6d37",
  "key35": "2DG3wFpHzSc53BmffRtjByk2tqnTQ1i3K8mZZzuHHSC4iZ3GaNdHfxrt5qNEQxsmnAUN823bALKUdrMetd8hG5Y2"
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
