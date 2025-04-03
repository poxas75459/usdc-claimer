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
    "2f1dsdSoWDniuNkD29jigMdtvcwvfSDKwh7gxvASm3CGfi6F7JgBZFGMyGKADrgUDMW712F7VWyrX6n95NdjGCf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJfzmgagDCWZZ6xsVHBTadCyyJuFR5MAzg1weSQvQE7uSDyLwK8q2eDTMBwnjLWqQZJFv9gCrfBAnYbFnHFiHAH",
  "key1": "4zHrQvUbg2ve46jVDa69BgWSWjfmBbXpCv99ebNDHwXaMQCWpZgmUUkpMZA4UxDEeYuQsJsHiPyKpdRdBp18HP62",
  "key2": "3TgZHA5jqkFPTS9kzVCVpaKSQzZTZkBnNcv8ADBSRwy4kWoGmw8m3S5bCAvqj6QEAUWbZxDN4kuycFDGcrL41tGh",
  "key3": "3F2gtcMfEzBeQWU6EdfyFdkmX2TUC8YqDLX14wwpacP2DAn5KXU1LrB3H4KoakvNe1ne1quAvANwyrotojFqWRea",
  "key4": "4XVqUgnZ3toLU7GQzQKcDa3Vs1Szv1J4RfFn3yb54m1XZVNiipMHgxyuaHaHLtr2AC7Bemy5HRCNkZXNyu33bKtd",
  "key5": "3d7Abpr63Mzrf8p5KHtiLCt1ccphpiK4eSU6MrZjS7vU1CBVWfErQgeyZirZzPGWmjTx6zXesT6EktdXCagmQ81Q",
  "key6": "3pdhptkBJAiZi9EMg67yGGAimT1VafKHT68Tf8gBifXsrFsq1kpR8nTApsfUA4FyZT1NaDghXYshZpfcBhdWFq84",
  "key7": "4LVwQC9tyjhHXbev7db3SF2RwZKwUzxdTSLE3Lr64hc8UoT6Zt9SxivJHVDv51m7Efd1Vz8i5ZQvH3fZmVuE9Pe6",
  "key8": "5EYijmK2n5ZPTeHMXDN9fX2GdmszgXPYy5h9sB7EX31qPpWbTxq6SJFqyRfY28wsosihkvF7J8Pu9ToHmm4Qbqt3",
  "key9": "2rdhtKou9oivoCyh13kQsy42bYjH6KFLiMJEwLCGX9TLYnThYSYU4xMAsFf981cr6UVksKp76yzSVUAT33no6NQc",
  "key10": "33EbeoARpHgQu13gg6oUevFZ8qbyuJt2keLYHRVYB4jfT6cZf7cMGTGLy4VSMJVJvwwtwmmNgj2TJtK6BoJKw4vW",
  "key11": "4QwevpCUWoU7ojRKGZXSFYmULXqUCqZCAYSRA8w5Jp13UEuWsQ6yQmtQA3Y6wTB3Vz9s5DkNkZ5jRSVWr9CwRt6p",
  "key12": "5djQ6rNQki6XMj4NVmV25tMdWoDfy4g9xuq6eB83CtSf5TvX5FkfVxvqixaA6t6nQzvoYpWQWmXiVuWuPgvCsrBw",
  "key13": "2kq46b7Ewtf3FueXz3PdoX2vYLXyoVXbtfUp6QFnYEcyVUuswC7yYGpvUg1sqnPmuUVaknjRUJKMfnLtCrR2HYPZ",
  "key14": "2QGsbUpJ7CQpXhQAa76wmjZE7hwYg6TuWBqZWZd1nD1hcTtqMa3yzDBsUaSLjUtJurE9jvTmusknwqrtiyL3LwD6",
  "key15": "2UaSFgoBoBWDa1VVkhNU4PGAseRHFS6CMQZdzxXmbqt7xNgrRZRFAsbrnLJgLeh8zB6FcwqbgHAHBPRFDCyyT8Yk",
  "key16": "5rEMeR5zt65C7kWPPEwE4cXtd4Ln95pVqA6EYpeKybiuqDf338RM7LSNvBHoCtHZ2323pG7JpCK46jmogzkP1C8G",
  "key17": "2SxrkuDY7fFtC6GWmooPoysA1hGJiiwyBdaoKyWsDdPwYr4E6iy1hbjxywrE1Dtxnzzbr6NWVgepaykjw43oaGrU",
  "key18": "3hc4jvg8h8DzHBWMm2Jrz4sQjrfzDwjTg7Hk6YiLeiZKw4y3BZuGoqo3rvGYT4jkDPf2z66CnWnS2voxkdT8LWjb",
  "key19": "57nL4nRy13YKmTA2HhT2BGt9XntYTfcNKveda1t5jaiVVv5GtGNkD9F3QGQ1gX44Azn12SH4UfchqfSYuZ5FWuDT",
  "key20": "53yUiKz22vEEbhNcYhB46cfaG3a41NmPqQp9hRYJwxcLAX32b6FK2oAxa2dzUVheV38Z7VpVgV7cDf67dgkPb7C5",
  "key21": "4Qdr53cZrXfdsvfWp2Z8Td2P3E5xWnjFqonhCtXmVSTo6CobyR5QqTYh6Vbc7oa2tH9gbsfisiMJoN5TyZ1h6cYd",
  "key22": "3YfQ5mr1bp1bq79SqeYuzfddA677o5qjunr2V8729HLyaFrdGGLCHamzHrK3PSqWfwZoinSBhwATbdBLPAT6JYAf",
  "key23": "3kW6VMqEvWsZXorm4mFGNAv9YGxBdtVoJYvmJkKvtE5X7yuU56SnKosZPBSfihqGudDn7wjQ4rLJmxRtKqQu4xU9",
  "key24": "jZn7WoB2oJsJGYB5Tfu7t272wmzWd2v7LjoanmHSJ2xexp5jiRSVtgctmxqY11yiArmZMMzRSxCJbRMTj2sFy5j",
  "key25": "5mK7pSGEeysYrmqYfvjzMMPoiNfyP5NcJ8nra6tYftRVQ1eb4GytMN1mgvfDtdPpugFj4vkQUGpmak4igyVmNSL6",
  "key26": "KM9HXrCfpyFrQe1f7cQTNP8AKgDBqjwm8PdTVBJrWzfTgL2kjvAXMFaer8xCgSbskqLhkLjsJYnosrt1zQJmKPw",
  "key27": "4WtVRWiEARokpe5S3fuEAJLfRiBpiJGBHjx6NtHxx3FqVYdL9Pgo7KJu4MBAZM1ZfAvkWjkCxraYjSdEHFRXeVJc",
  "key28": "3kERwL6P3v16Dkby45rsHQFpnNE2LtihsiYft72ncaMxWShKzLXvBdk5v3nB8hJDZasJ1ahsSMqaMcd4DzDovtPP",
  "key29": "3DxkLJpWnTqQi26CBcGMSdT1zkPqGkpQKKWMbxVdtDrZECPCxvuwMG1ZP4rjMWHyuerUQB1h9JTATjc2RUkGiKs6",
  "key30": "5ZwX3tvtdMQJ1eyPzWchKUqyWtJXzU4BE5ojPom9m5eZXvCJd3d75BnSvfs27fbgWoxAZVRL3xCJYtonPmMhWZiF",
  "key31": "2Pz3trdZYHVz9ym1LsApSNpygZNwcm1AGMrsYzstGdaouNzCZ969kg6ZBfnjQDSDVBNxQuoZAV9bPRUToXeaim5",
  "key32": "4LXbCtskFFRpZioUJTDANdi2M2pQymhfhGSU6YtZBK8viDWMnG6bWsTYySgU1mLLFQndESMruZ25FmAaMx8ad3xv",
  "key33": "4owKNYyTP792rAUutQVZNxz9GDat9B3VECcXCdrX2YrFXe9eq1sn242fvCVDTLstyuFAioGuiidkr1SaLppur1e7",
  "key34": "3TafszagrB1PvTRmasxe4deVeXBJzLobkbsyeZ8jeBj3wBCcWvfv5yZus5Z1SkMzVDAy1JVDu6STaqVh8PxKQ6GJ",
  "key35": "2oXLDYPkRFoTx5cEpRpNz6FpAFZunkqY8fT4qd6mk5eBbpFnAZoXLxdNqfdvAGBDuKEB4bzAytuA8dRf7BWQezYs",
  "key36": "5TgFXgerQks3qY3PMDWwYhoLFkrmTjJRjkUq1fP6dFDhrwn4EsBLgQmqp5uEN5Z76X8zHykbKZLrG7RbCWrzgq3K",
  "key37": "jRt2s6tihvjh2aR76BNCvP3TegE5nJp9rDiuWr3RTBBNRrRQ4dDRjFmEBnmLPnZ1ckyxJT3R5T3P7MqBkKE48MT",
  "key38": "mWjnBpXMqSTkqYEP7DfbJ2v55hShfYyMPL1EeBzNRgFYS16KCGx5GxPZggKAfiBhVUy4vj8VMWcTVaWHwRg7crr",
  "key39": "UoXPSdXoTEyZhJQxFhYqHDebpPeiaWf7nNjA1Zg2mBpcFuxo5zVYNgn1ZaEW9vCKM3zk4FoNMezivNHruN8Tiqw",
  "key40": "422ApgJAky3CHbsbCPshDeY5cVFjXeEw4oPqsHt5fhGqtijTbWkZb1RJbAcwn1SAaPGaTrx45eVeJoL8G4YYDP6k",
  "key41": "5z7UAnkw46eQvoUqiDUSuPvqt4H53K2ZCJgvWHBnjd577rB7m777QfBLB244r2Vwn9FCZAuxZGsGbo7ZtjGouFht",
  "key42": "2gzjUGshvcY31ZoJuubQEc6bnkK9FXJifLr391q9mi5rc8EFSxC8wt9ErpF9Zfc9h8yvCYunJsDnpktgTnq8gpSJ",
  "key43": "5XMbtfqybZtiy1TpLSndcBrcrxaJ2LmiuzqFRuyUBkkBJL6e73RDPe9BQrtYzqAKtkXJsHkX8Ld14JLN22E4zrmx"
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
