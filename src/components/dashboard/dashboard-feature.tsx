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
    "5ZRaaB4ehJgXbFSJbP8cCXBsog6RCpLro1e7i5hx84FmbQtUPNkq4EtSSUAtazPvkiCyP37FtSSEcs2wHYqs7TKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ePeavUZ4zDYF64Yw8uAuSWudyruiCdEJ2p1WaDBnJUXSLmVCLdEsx7tRkdhBYquVBxgo5qLQQ1sxgoXspUVvm3",
  "key1": "841rsQySrZJCtjxXJdBxTeaq8TrHwvnFgb5L7hpRb9atBXaqp8bGa87UJmBCuLkat8fcLiNeJjJRgMCDXa4k4AS",
  "key2": "4BVPMtHdwM7hEJbCSxLimfferutM5g52TZ3qBt7gH9xgnWrLEKLK6XbRSwxrvu7GnEuSf818zGN3z6iKpQ83BJPD",
  "key3": "3NLYGazrwWA5SE4UdXiugCX77YHnbh3vozFYA3W7HBQZZ6TLYn5spEg3aEjFY9z1dqQNMMowogYkBPT3tpw7k2b",
  "key4": "2w9LAYZ4oxRDsYtB2uZSky5V6D4iphBMXvuHJKugskgjf5oSogpFX8iFd8Z3JJyxTi56yAQWRehLjcbX7N4TsZSE",
  "key5": "5TCqJtCErduZbn4cjRttc3BbEAnab92c4brMeW5FnBLagzmS4fKg6iXzvErLsHfWRfoE2V78JGZZ9zpMPfVPGhLF",
  "key6": "JLxuW4pptp7F9a5QNvcMWL1RAG7oC39R1HBzz33et95Y22QvSZXaU2VRGD7FrNfCuoTsuH8fcmG4WgJwjrShxDr",
  "key7": "5fehrWu3uxsxb2g3gEBm54gWjwbuRuDsbnP7HqVZdhnYyzntbqcDSYzCX6qQtXKtGcmuAnNDaszL3d1kj4fyJhEH",
  "key8": "4nDDdD2iHDpfgo9xxzDd5p2jpRwnCDdyaaTBM9B5sfZq6TKhMeTTjeNEFoszT8rFfU7qCBJUnWYHzsSBr6q7G4fB",
  "key9": "5eWyU2iJf8V63r4J3MPsECyoycFZf8nqWSWoWZRRK8z8RWZTSC4WpWNGJWGuFkYfk8ohW3SgjwGgYPpVmA5j2tW5",
  "key10": "5v53RwzcTC8qUoYgmMdnkrjze1mBejHCmuPRcAyNTLEXKEnQaySV9mJSNmjWrDPbzGPN9HFyFPL49voy4TAGjZ7A",
  "key11": "5sFBiMmSNo3ht6KR6bCr4uvTJVjqDye4vjVcAkhXxP2vZM2CVaYMfHkL6WJW2u9fkex79ZTvAk1CYg7fay9hrme7",
  "key12": "282J1AqrFqK8sfo6Woxs2MVYqMub2GCRUXzU64iyivUJ9zkZiBQtXx8pyt9YPiKa1mXmtWqGxD9XJyS1WU9bRQsQ",
  "key13": "2f4RixTgMi4eJhmmCr815mFsNiTVA3VeYY7BjZPmpp7hmwz4ADJcpXLWXNaGRHFgWWLq1aomTePMUV5DnrnxXiQx",
  "key14": "3gmvRHfFywKmyGgm62k85ng2UbvV794mbKRarRqL9DdpHXYYHfmE6z3bJiAAZxZyJu9WqZJViciTqqWtoqt3k3we",
  "key15": "3DkCHDv6beyiMQaF3hahgLpsX5BGkod222FQpxJTf3ZNsr1GWWU937Bsj1YWGq9HnpX4RBiXcNZoLMpK9YLBAtQ5",
  "key16": "3gob3WFeoMgvxkdW75bQfBrBS7ir2cLEakrbntJ13xz3Ms9zDq26jChm1i7LL7CwXpQS4jk39xTCh5LpHDQmeeBS",
  "key17": "4FdWMvJAaZjhAR8uGEH2MmVaPwDJTv2kZ1Ra8LhGnKBtfeQf8usoiAxLfVndDarEksNi792uV11EgNxF4WTSDsMZ",
  "key18": "5G13z5TBaCW1VtZwGixkiuTaJaG2yuzpFTEDy14FRVqFaFhY5ZdXorxuRKbwj6BbKnyartRqpkaqANG8wc7hBANm",
  "key19": "2niyH2EhgfxnE9x6SPiJferEx5PjeBSwCJ9SEpk1vA79o7mmmcRjWLdSafpLFtuofpq2vm1ASqeav3AFfgrnjzd6",
  "key20": "4jUBr1qdxmDFpYmFuFF6SA9bJTjsFJbJ2uB8RX243vE9TnA2DrG7GosSPUyht4LS7UMrswXTEKfvNepjSksepeW",
  "key21": "3eL8ChA3XfzSwMPCzhzyMiiXmH6V57ZQcE8bZi6evy9AYzQdeLqqrK6q3BdDFuiFncEWTUJbWnZ16SVPZPHVrFUx",
  "key22": "5MvZkAk3JqsixsbF1J9Bp4C8P1TUDcEUszpM1w7zjbKqSXsK8tFL7uHGgfsZBVtzSEdtHt6hrzywto5e3mg6X1rE",
  "key23": "2NwN3E1Zi11JsbhZFZX54FTJMSFZNNAQpZMKZjQ18q8robPpna2D4JrhjU8j8QneyUuNswQcogJs8PQsPfPtXsNH",
  "key24": "4Lcf9fv76YpLwTHRZSqjL4cvVkHFpAt2mku3VNmk7HXfouLcQLfzBcgpUgU3fsxmuZqHsFvJhqX4zYRcLaR47oDu",
  "key25": "5ZNyuAv24qPR8tN7WwbCNkB3D5zrDX4q6cNHfUj1zzWFK2LfMUr9rjjqCFDTXNYryS8yKNkabt39R6fiwRreiUig",
  "key26": "4DxDPUTVrf7huNb5XrdhuWTeuo7wTPMHs948Sji2PDaYDTXQBcNZfRvFRhPukuKuHMP5quYD8ZHn54dJrTunvVsr",
  "key27": "2ef76oug87vpQKDRRnhUYcpTUXH19VDj1Tw47MLsqmVYdkWdhTvBppoYc1f2PER6tzijb6pHHJjRWAXpDNPMwsWR",
  "key28": "2oGY7NpXwusKPayCFJfgzP6MP7tsU9A17uGeSED2RM4Dp71g8ej99ANynDSMTaSA8Rc9ieSpP12uSvXJaznFrvRW",
  "key29": "3rN5Dkp7oZ7NaTRW9FMwQnysWCuuvXfPrGiqnwz38JYZtNBTyhsV4tfayCLiqYq4MKDyy2ZC3Go1LDb7ySu8jGcx",
  "key30": "3uzQYb8JAFn2paPT5ojVTb9C8LFqkwaFSSFdW2MBhM56sagYdZoffDWe277AaGApLu7KymLss1CcVUCMkhBxSmhc",
  "key31": "2u33ktAaWAgCB9Mio7vrYCdyiHbmVRMKUoJdUmyQNzeBCpyenT2fvgBkrEaMhLGL6FzTQBt9BKYSy1GMnGqn6nTb",
  "key32": "dG8kJAuc499Z5cTVg4bBfTyyKiv47BrVvRRXBPmSj8DUN7pJPuzRuX5k6c9L8hJyhCLRbcoqWacnZDEnEo54umV",
  "key33": "5Mhxfc8rDTwhayumwwSjnHxtzqaN9YXBuj5ovCaPpQQ4CQcyL31HZjFE7RRGLEsk7jTGxSHR6txSotaoYsGp3bFE",
  "key34": "3jRAwWTMNQKi23JSRcHp9ihUKFqzMHCrJPFPqwXDtfydzu3YgtvvYhUVJuMm82FCdxD14uTeP5LwMjUY94QC8BvN",
  "key35": "369AtUJfMucTWNUcdVSqC4jMk8GUEMNpRwm8ieH8GDkg9hEH5AgPjvfRxB8kW29qTn93DthwKf4CSZBaPWA5cjEp",
  "key36": "4AQpiRn8oFF3AingsBc7uorbyZZXFzbvmMxVxBAYhzD2mNsAGU4UHvNV1VEUsyZvs1mw6i73Q4NG24RSjnZ6HKwA",
  "key37": "3NwY4dCWewLJaDZEd7bHk8Eg5XBJKSymWhhrmSVwVNA44j4n1FHLSLToeJRJW6cWMLFA1aqwbxpoLbYc8fqVB9Mq",
  "key38": "3L5j9a1Eb6TGH5rvzgbDZzNWLiD1GsDyivzSUcxrvo594Sr65H1JkqiAZ21ZXaY7GWu7SiXTm6MP1acmfaNCprj4",
  "key39": "4tVM2AxXGPQ5Gsi9ffPjnRSfh5XWTNSTd6m5TyUj8AJ93pSHUfhRYaKXfNxn1s9mNLxnixMU6vPbqvno8WHvACgp",
  "key40": "2rombH2rtiJZqHvH2BMK6t9rcs3v8XGTcJNiCrRJ2zTMuvAeCYzgZxr8gh3QqQVuE6sRyHnVhHr8XznyammCzScv",
  "key41": "2Ut2StBP4J7SKGBtj5k47h2a3QqN6Tb8QUFQM3FdHBchSg9S3UGupVf663eXX7YCU3YQydpACFqG9GYorbKHkyCB",
  "key42": "k1DvYicUSJJzPvHC5rS5F5eb7yS92QiUrp7aXtvNrhJ4KztBTisEBREpDHbtioVP72ao3EvbuByny6kFaZ8poJG"
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
