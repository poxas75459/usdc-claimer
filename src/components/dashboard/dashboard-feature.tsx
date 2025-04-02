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
    "3VSqkG9dwGb7AHxqpdM6LHtfBtncw3BKvWoKnyD3NEPexQaLnXRQeZzUuGRqwnEVuqgyuH9UWh3eFUc5bgjWWgVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vDvpzCQFSzo6rSkoDMAhRSwMukxpsEsWEv5iQ5aPsa9628JUp1WdEXW1AUMyJ5Qfhio8pg3FQAewi98jHFEoxUb",
  "key1": "5jakD5Q66dL1DXfG76NvZ5rpHmzUkpY6JgGH4KaQw8iV5dQLZeAjcfxWgMC4oKrv1swUzxARojAE4fWdg6D7zZCU",
  "key2": "stLZNU7wWz12LwK8n8powg9y56jy4D2Pn7zNRtnVkWzNaotHwbeeWHPMsyNDjrPMpraouf3YHPJgtexKJ8mUnx6",
  "key3": "ehcDBgG3gjShqqpjoRDb3cncVSe62HtXLFkvbg9WS3ax68cHNYtuKs9CU1eB2sRpEgMN9Pmk9SMLxVGVeLyBuNb",
  "key4": "2yEf4kQMST4mEhAWArmHP2RqDWuwcNX5bFsE6QMcpsUJ61vg4VWAvKPxhSoPzRYW3rcrag25C8wdoUQULKQZbuMg",
  "key5": "T9MBip2idJdZ6sTuDcFsFqgje38zqgEisMnsqho4jsvjE143TBVWUcZRJz1mbWLMAN181x5p6EesXRott2pNRGo",
  "key6": "4ZC4cx6xRSbeT4cyUthgfps2yzAAZVF1pkn5PMr446En16PqF7tVUKKuboqqDcmoRQ1Cw4tyJ4BWbpRcfBH9XWX2",
  "key7": "4AbLG63dYoMqmkmmjmevGhFu4pyYhyuF5Vt2QQaXCiLQuqL39XMdD6wysDKAKF5hpa8CNLTRB9XyYQ9n56kk4W3t",
  "key8": "2ycG8LXoTYtaSmSge2D24RaGzKHpu5K7xKVzFKT5PqWQBnFZRuX9dXcjjXjwjBbQi4AWQVxEoNtYW7c7hjRVJXL4",
  "key9": "wCWuzZqsLAXRqqdbvHFPv3ksjqtfyQc27AQEcbZe6UCwZL6VpD7Dzk6xpyaa3bQtBFYaXbMYT3UeKgxMU5QwteZ",
  "key10": "28MPckueVck286JWH5xej7YsyoN8TdFXPHWkmbsBRYSFhm5Pi1EAF2yhx4DtkJNLTGz6m36XXS6jYAXE7wYAtroL",
  "key11": "2Ju2j4wVDGmX4SPUv8bAvE1bhWo6E4e5wxq3WBJCk6JWzt5R8nBaFAhgCRZigEBYRjB55jn4HuCNns23fUZLaLWS",
  "key12": "3mFBWpR3sq6JihcEXPZgWN4waYggdfj8rgi3iArvyUw5NS3pWE8tju8jArE5ngQtpvGCHbdFjAaf2BdGb3ztEYut",
  "key13": "qjZuBo1HFXkxhPFVNafwsvHKFi6i1UaY5pSDEF12HFJdKph3Nnk4askFQbTfYsEEN6FB4JtprfHZJquuQ9PhgqG",
  "key14": "65Y7qv5RBebQ2VD5a2UHngz44QWuzhSwS7MAsvL7XyyFjchtPeku88Lk5RXMffbKbYW8Eqf5ESNbg4VSH2pGoqay",
  "key15": "5jwyCN6GwiMGQvSoyTd5DwjnYQpdw7DWBDmHp6N1BogPfrxzTnDau6gbjvgkc6FfYXD9y4enhnxFUTiuMNPFu2ZG",
  "key16": "2zaMsrCKUtaSsNHxPewbyAbvF4TpGHrhDtBeC1kMnSoon4WSrG4Rgpx8S1ThVa4j5ukmRPV7cXf7ThFnr5TxcpAR",
  "key17": "3bvYRVYADkw4UyPgwNKCviPRmbuia5GnSBrEhd951nYcqGq8n662jFR4t5BAS1BJd5P7x1YUdWRMhjKyFP5SZf77",
  "key18": "3hhpxi6pxkVhW6NPVFHQcHx5aQFcAqtJ1pcb1MKnTzjCVyJEHo3jhkMA8f82HsvJ44u4W2bhpFkptXHsB9ktvZ27",
  "key19": "2prXJtdpc39eVWeknHmSXjASKqcT8QpisfQN4EAaCsdV8VHGtjykK2csZAnLrL78m2AyXbMKdgG7AtPvscBRpnaz",
  "key20": "3hEBE7T4NSpyi5GgjAbtkAHVrVrBJxr9XpbRxSjNF6wnU36SFyof9P433v2DP3jwsTSMqK9PHYggJYqCUMn9zFVb",
  "key21": "3e5cj6uzSPj8J9JmTcPNyT5mAtNWjN6CMWQU2UG2zbZ7RvbWKR5Sww1Q6tT86baGeTKYPqcACVyiA5QSJjJevYPY",
  "key22": "5F3j2dGF6b7EmaKdmMQcK1WTfA13VCzrMaeua9kNo2VGtVYNVQ3BTpGuSkooYs4zM6L8Y45X7yVKtRwksoJLkSgx",
  "key23": "AA5sNg6XVhGxPvghviAJFgZFzy2gMd1gp7Fug7TAKbxttXpu1fUKYmFi2omaqQE4RCYz9JDQyMMNue6f8sAuFvL",
  "key24": "4ta89e4DBdz6QH8t1uye1J45VSfuBgtLe2x3aAPMSaQmLgHPG5urfvvNwWGJD7TWZ7Gxd8AEwFtHNTkrKfgejrDu",
  "key25": "4wTuRmj5n3CXvbYVTkcYSsfAhuNF3M4Pz8cQkritafMKbqKB5NqkPsg2ZPargzoePTY3Pu9gvv36cCxtWKseSg5i",
  "key26": "2UkTcEzU3FLUkZ3a6ybibSunFqu3rhzAgM6AfX23NT737bbvk5BiQAEQXHD75xe8f2GwE53adHLn2bU7mYvT1wnJ",
  "key27": "d3GbLkAjML87FnbHJ6zXJZtuVy3z7MXJJaEYgSDnhdDy7d43tuq9owf3TsrzFBQZg9adde7D5gw2v5Ya6wsFguF",
  "key28": "4urXvc7SD21HPRqFbg7UrfhG4bLUW8nSQ6JS7bC6D2BJeraLCSTRpJE5gbCBHQKocCrDrRaUfLC5jq3Asi8uzZNb",
  "key29": "5QEArPe9w14xbQCk2y4sFS7pedcpC4jBLHpRt6jwoFWHTDBYaKgBWzkZQk1ShS9mBTtU3yrify9fZDRFFEZGL71K",
  "key30": "4v2WmNt4269fdByKKCwMnZhHypRGuAkz5VnS4bSAFV5DWUpPfdL4n7DUxR14Uht2ucW7QzPjwsUs8CA5uJGYpw3b",
  "key31": "d9cGDPQdQX1QuwEQCxFYK7gMw3GcwkNg7MFQmJg4ugRZTf3afLK67Hk7GznDjAF7PNk2T5XgFoCwnWYQ6eZUhKJ"
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
