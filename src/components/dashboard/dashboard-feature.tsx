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
    "2FGqcKA1C9ztvvhMKMgy9mdTbMh6FEwrFgiKgiTi3tx6XiKUYNx9ewwPqMWbiCZ8iZpZEjG31VnvRYfwpY7xLZ5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47D94CX2zAj2gN9EUgGq3VJuhUFTcd8Nmu9tTDAjtctWcobSXDMQazZ4TztAq6k4kg4zzDF1kfivNVHzaA6CyCpu",
  "key1": "3D59kFpeWXUKcoxFTzypDQAnAGGLzxC9j4PtqpjYUxmd5ixw4ecnewoKGzcmV9w6hc8mmDRyLHJ78drSwRKk1txx",
  "key2": "57TJ6B49ZxYvVDuLvTuPGWmSywd39fa47X5S44ZEbJrUvdb5a76ktB3QCZHrUXHPVxuzuZG1NU1xZuWQbUTBMSxA",
  "key3": "4SBjfzCYN8AJD6zhBdsGoKWMjP3QUDHpjkynokjGZbZ9mBdE2zhaMCaGG5joXFsD3bQtYwD95Z2zbR83r44ymt1e",
  "key4": "3hwLTVdALDeyz291gzXamL2kdhJ1vntUZn6tzGHwUUfSHu1jrjaWu3enZrsodjNaENhkG4ZscN3NEL1CtnBUJAzj",
  "key5": "4DL3FPTrg3fwGAFXeQgm4DHNT1uyj9tGMM33SbsQog3RiKwzkPWjq6QcaSTENnCFQqzkHWehduaFvBo2yAaZCxYy",
  "key6": "5QHDMW3Uczpa4A17SQp2udyKZtdexBd9VWckmnkBPFAjm4SucqJjoq29yeWuqHvZCTWToDBDg2qDufM4AKsjWH5f",
  "key7": "5ABH3PwXkNpk1g1CHwp5tsfNVXr9oLwqXPLYXSbXGcUEffqt7kSJM7EhdmqAAF2Gr9tfb6HJNZ4tPAwWMmL6VHsf",
  "key8": "2GNCkwkUSDizcEoucH8p7T8jAUMj3RFGMwVR31J1xWEF4b99DEvjJMhcKP4U9MEen5MCPi4qWDkTFg42TD3UaJjg",
  "key9": "2DUEhDJHzSqM9haf1NySX1nCkasfjTEYy1VnU2yva47NVyHLNAsAvCrKf8CBxk3uRGSnkLY7WTFPDHABRVVgwP4b",
  "key10": "3d3BQL2Zcb3gu3EB9VRzAUGStYij9FQyroZ2gpczpCu8Z1vGB2jgf5VasXKUEov7ZPBzUCUtUf8dBLvp5fNW7a1h",
  "key11": "4xrKgpMnh9ogoQHW65hTR8cYbPY6mS4s6vGHmfV1i75n6n3DUNFKspXxV1w6WTGRsrmhPfP5w8TpBhqn1JjP6jr4",
  "key12": "2reW4PmoHbijTVW7cqktWYDc7wkCjJ4k2tdXSQcPPvMyBxfsEfx2NyZ7taidq9piXPFaerjpJwsQcKQAsDdrNNqQ",
  "key13": "2rfDctpxdwGTTQeT3vdzWoa8NnudoAXYQSfZujijHCyyLNAxReYmSbNre13jpKSQm9kwAAjEaotW6Gdf4CT1YAZz",
  "key14": "4obH4Fbo8FJdfQazh79hfpDPQcjya4RF8HsanZzN7cwWAAFDAzUuSPh2gbtk2BDoUVqyo1ixaic2eEBRX9ts7Hfm",
  "key15": "2x6X6xkMWGYkZL4K2y8W1XcqiLmuzFXJnhsseSKN8dB2pEREx3UpQfScWcAuMyJMSGW3MRXUq6j39j6265NF1HUD",
  "key16": "2i81naqED5uKwoG2Fn7oVwJVJaUT5EJLmSd7uTq7VicZBEA59WsgQpvhtJiTACfUBSUUwYzdNWFPnmiBEL4whpn9",
  "key17": "3s538HMoJm3wmZ9oLfBg2umjwrs24CoUvpY4z8LhHzwPeR8KHvA4Cy5FpepLWFtboBYyEESpNhCKjSKbGX52PK6g",
  "key18": "31YguxEEhiqiJpJwAC9jTuaxsSk1jiNVhhf9QdT5tdDyfB41oa26UerfpCBjGSXTWkeqnzTWwaM22pa5MRYAh4YP",
  "key19": "5ortE5S53tubuk3qCwUxczodZKcDffjoSSwN2h1yijJgffbqDFGFJPkmBkikrH6aUm8KgmTxYE4DhQDdEUnaAM1U",
  "key20": "573ccS5Z7C6ozvT1aXARg4kkidENJfAi9yVpN6UB3rVXrBjNfeyq2nNjdePxKFYWMcXx1xxYwoQWt4HJYuDUbYWf",
  "key21": "4QjUBXkh3NQRTqiD8HLUrjUX5eWZg84gu7e7A2B9rbnvhDo7TUGFFxUXE16ik3jLhVMVeGUTdwK8ecLPu7saxdMh",
  "key22": "4nXpT3nJA6KA3uWsqXY7WPbTBrHvgavpoamkmy3idgDmyDGW9zpN1XB4w6PNk4RPfW85JwEBoAAi5HecnYUkN3ME",
  "key23": "4VpBJ9CpvjXAKH3VjyjF2Pqq8mfKFvY8JUYxNQ7yfKVPkEXNsJMpirztR3q8wRPtj7eDGvX6MkVSoLZY12h4JJTa",
  "key24": "4a259AmYhx5zQZUBY4z1jzGYqshJVDbPR9nibSH3zJVsVHuueMFdBTMDbtTBHMAKkdmox9iGZu3GbKiPfXgX4tmp",
  "key25": "7RSZXjV7cHRfhKT4oYJYsnEotcaBDmpSsK3xQUyfJF5H2v5FQdnHsWZ5MnCvB7GVCUQMRWVboWNaLaG9ja23jFT",
  "key26": "2tuCjWBzPKP6jZ27s6QTLtaSoD98oM1ro67isoWcQ9AUCneaipiEkuH5aPGFexz992oEzDJU9AvYefxBtJ1f7BNE",
  "key27": "5pDbZjmLE5dafDU5KEsJRB46CAuVBxrENrqjXGR4DZymRh7KHfUkvyJhXxvaCV6JDqwLPYLKsroBiHyxCz4KuKAB",
  "key28": "4oGjuabtbXp26N16SLMX2td74kmipi2DVuSmcDjfkvnvv3rsL1uBcS3gkBxztaTFqbTWK6rErD9a1WJGGTm1Zk3V",
  "key29": "3HbXxKLUQkTJdTw6ZNojP4yJWzaEToEjcMytBguL4gBm69xFAhDtSBZL3VgBBdbVZjncbFM5XHuQMmv1mWBAkDjr",
  "key30": "ZJ2mP2NaCS7jqBmN4DSnsn6pR3DEsnDYBDumxtdh8jeR3TkrBsTicANLjMfjPSTCft5A64RttPutbgVpaHUgZgC",
  "key31": "2Ryjae7au9UGppMzdBH61tTntNq7BcAUy13mDR4ZvavxPXvvmSWo3arPFiTktYn7DvxGqP2untDmHvmzwQbij7tS",
  "key32": "2yuMK7ua2D5aon51xMZ6ijy3oyxzjAoSYbj2vDF7EX3czMKZJ1G38SXtz7vz2QcuxP6HhyMyAhFRV1Z9tfYzdpBt",
  "key33": "4YdvuVoeiYitxJDscPwcbg61Y8NxVhABJ39JVeUTS8vXnVgy4FDeYnRGrzjAsbqNZupxqR9DpGKNvoPFPh4X565T",
  "key34": "VMnLyph6899GWAVwiUPE5oEzZQUbqHfuHs1HnifELnutn3KfquLBVr6uaZgnppeTiKsvC2hrzMahxXKiPVxCTfU",
  "key35": "3KGEH1xPNc9wZKQHu6Y34fC3m15S2B6XQktXG7mwQKnuZCBcKgpcowgJV6yW9qcMzaRjRnopATHXecQouvLy7yUY",
  "key36": "2hYbVgZHp1fdUGLi1tyhbSbXqNoJkoUFfFq93uiRhcq1TgrBhT9unthd6AC5SLwHgpVmHV3Dd6r6Vk7Dt4GPu82m",
  "key37": "3cmEDAPnakKEm2ZKfC67AukGjGfReqrwWLjMSeyCMFz3s9cEMfG8wjnuw3HhfATf6KYWY6JqC4AxHF7FfgQtnTY9",
  "key38": "9Jq5CEuX3e9mQjSee8EEKS3GHYLqrfAj2KG4qUXXyYRdDd7dwTSAg7UDt6X9Np8riGMonFJe2JsNMzNQjfqP3dG",
  "key39": "3jt5pnGT7Ceudb5rUziSY5stU7Fno7g5af5g9avRYAoa6qnZYfP4hXNsnwfRx4fwX19oopfjBf2JKFYrtATbVyqQ",
  "key40": "3TSn3ZniMM5xyVo8eseM2Xp5q5u97Q4Uv44VSFcvpriLUqCNmrMfjrmHBfmG9kBFgmjgK6hqnoX5iFbEGgCQf6sc",
  "key41": "3GGiokWsJSgMz9ZeneJ5GRdzqQ35jmBzNa4ER7SafNUshckivNmh7nGuDmm2zfbuvrFVX6vNAD7NnskhPpWGrPRB",
  "key42": "3mV18R9uQ4ebPGoo1Zu7QEz8S99Ti5vvCixQa2hsiY8FubKF9icTWeAyNFdYGd2JHCy9n4GBkLAK99QwY8jfHhFx"
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
