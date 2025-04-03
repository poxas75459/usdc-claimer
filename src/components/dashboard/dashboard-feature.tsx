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
    "5Nk2mJXtWFjDy8vz7odkgk3ydQmgeEvvrQG3whqiB4MJpou4StTFaUwDHC2q661n6SqSGXU5u3xrubvQJ7ue6YxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RGbcsqT9q551AXe1k1PPuWSRDDFax9L3eUAbNa1UH5MQTRZL511zbTEvkip8b1oFqEcTxdWxFHAqEVLx5Nbard6",
  "key1": "3rN869gQ8CYdCEQkryP141apMmR8DAgSQynGiP8ZKBNfWdDmFaA1izsvJ3Q2fSjK1tqc8oFmnsvL8vhZ1BBLpy27",
  "key2": "3weghntTVbDJCUzE47kzVi3LdMghjJjTX16vwHvGEExBbc4GKfon1EqW82jNWHZz7hAFYp4UyJQE9n9R3mPZAmW8",
  "key3": "3K1myAWvZDne6jMWZnb6zDBRauV81ipAzCyNzw7WYRuWQrby5RTatUWxCEfj9wQDMqR7VL4AcXzqqP9DK7EV6oL8",
  "key4": "4UAnTtFFZF7dESvC6ZQg6rzH8c7TM8VJAsSY3g8k6ZQGhqCuwoYYnwFRGKDCtEyHseHtWdwgmvuW3vBCRcZtmzoQ",
  "key5": "3ZhoBNsJaeyCKhU9WynwNM4HbPBH4o3sbNqWeqThdfM6jPE5vGkrr81CcALPw3FdC2DtZSP8Vi4BLU7Thv74ADWW",
  "key6": "2f82kQGRVQW1xNe2YcUkNnPntDwjkP863QqCwNF7WMTM1SJrxjg1VxEHmti8hVnDQD6kHEhSndYqprdJ7LUobM1B",
  "key7": "2DyCcKtwzXAAKp2puf75y6eFykcgz7RbCD3Fb9V275aCGCx4o5zLXxFzLbSozqtUgKwniQpcepKafzYJ9J2QiuQP",
  "key8": "ywwtGBFG2Dca87HRK1BHEA3Q1KLSs2houuD1gG6Pg9Bor2pCT1wMtPmbSwCAgr2NQJypweCT8f9hs1vLGu7yWn5",
  "key9": "2B7ADExZigbiTdzPwVdERyRuGc1MphN4RhWwDDzqNt5HU5tSh7eRae6cGdogGG6KekCqNQ4FNhpaXprw2nibsUkM",
  "key10": "2FH3CQ325qcQJrjW8rBPe57Qp7RHHaVCcNpyZ4R3cvumFdf3xsx5iHgzFoXZW722KP99mWz3EpsSGCfXRodZHs3j",
  "key11": "5EEE6ro4y8Axzckc2pc7WCCvoajTpHB78gQ4KGazAG4y1MbL49xjDAVuaFW35bjZHRGjYhEAZZb9ffQRC9fdaPV1",
  "key12": "5WpT4kL73FHQGsoVymyquDYXiMP3VniRrcphywcvSm42dEkrE4ZoxgmwAhHGhJ5jhNmEe6XpwkikmzBczDE8hpZd",
  "key13": "2d2in5Hdzw57q8qCBuUovmegbMHqpQjJKd7s4rHwaAVEZtGTKSdcHEHN722kU5yhriakHtxhHUP8A3tKqr2wyB5c",
  "key14": "4jYdgdU3PPS9arBY8tw47EMyUQpHVH7x5RCMoMSx4xVVmSJaD4BA5qa3CDtoFkLjbTKe1aWsgxAjfciWXrGPZqmx",
  "key15": "3jmZZEKPH3BEwxWFumashsBWBAxinRcFAXj3sKbQXn42x2Lm1yvTH67jYQp7YvPSLmmq6e5AyZVq7kwNzZu6V1xC",
  "key16": "67FHTQSMvoD52dvprDvEi7Dx3vcStjL6CcPmHFQCCjuKHsHJC48ZtVpuMxzrwHnLoyf1yFVDzdNjLErKkCG7tCf4",
  "key17": "5MiAxuK8KHNT3bzP1KcKw8j8CyRqxfnCXKsP7fa7R7yB3XGqC2kjPyKXTh41VEwMHLTByG1oyBugGQZTaok6dV3M",
  "key18": "2tWWhe5NRKgAqNLgRg4VVH6BYoMo7cUtydh3KfNkwTMNUgAHf8RvPnobPULALYVhLw9jwirVD8LRj3jq5NrrBcmJ",
  "key19": "5f2USYJSF9jCzDhndTq2nAdLt8oW3fXt1eveGYpeCZ3PvZ5RJs1sgTmUoDkCkMDESXDLTx767oYCoe8DMAwvWgFg",
  "key20": "4xZmhdwP2zygUhSrwC2XLx9ppVPLWbmvEABiqFZaLWPY8cYrKELKDiBgVZz5vJ3ejzsfaVPkVjhGHrqxEto66WtU",
  "key21": "2kzEHjbXq1qTtyxmbNEjzoKdphC7vqgJrebxQEJdLJ3X6wyJLUmC9aBxnkPqUt7aEH4tfw9oocQBUjcWD8ZK5fqH",
  "key22": "JZq6bpfS5aFLR4TjrWqzZYKghAC9QMxLjPuARidy8M6F4GrXyA5VpxnR7PXNYn9oLnyaXr7MuctbFB3gCyZYbnP",
  "key23": "2NCCyvWGKBLV79GZHDvNQas5rMnXnPJY2JHgSSUYWjU8M7i5rUprRkwZsFJpPVqwJYEAkS17uHYkmzXsYxnW8dEB",
  "key24": "3QeoJcun9vAZf4Cpchc8fGAH5q3iT3ayjMUy1msRH9i9ekx8GWyWYQeL3a6UHwDd4VKGVxZHz278w2x3MpdYohvq",
  "key25": "58jskDpxJ1u4tBLj5LYTaPFswbiJzNvd3ugEbNejzy1zzHcfdvmhtWh4z6Hq3M1MEwLjr35cAQ4jET5YtEBvXXnB",
  "key26": "3T5WNB2po96xHCVejCRZv6pDAjYFoDBQRH414NRfnCd4duwifEKseAKUf1hk2Ejiahs6HW7Vxkzj3xwQDCcnjeRi",
  "key27": "49WwZig78eEuvQF389ahUYLQZwPhr78sVU4UihBo758hRWwuGHM7dDbvcMEbokuVkaheUDRnRwXj8WGkWEKz4vo3",
  "key28": "4BcWC4BL45EPFSrpfxE4fBdjs1P2TqUd1tBK7hbcjYtqQqpyEJ7r5cFRanL1wwhaVu9Jh5c1wEndFmLb7gWLBe6f",
  "key29": "4cXoatm2HqvPvjfDqJiqDcFiVPsCWowVMtgGEt9WNqFrRXWC6UqQfBaJjMuMFmkNhfMyWo2rmYSQYhr5gfyvDnce",
  "key30": "4qjdx3Z2sm6tD7BboowiTGYHezjmBUrn2o1H8LqnFdycYj8Yd4xX8Hu8HxAZ4BMC6GR63NQVpViBiu34HcXUtYuU",
  "key31": "S7uCBRfrDTrW2y7v1ia6qAaUhgeDXdqz3S97sRB7M6pZxJFAfnVWv23BYkJ3TPLsUGgyxsJq87E9M9LWDa8guko"
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
