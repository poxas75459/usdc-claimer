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
    "497gAFTc7Vq2eE2bKT6JWq8LE9aydLKUVBtS1uyzH7ADVcYRvDvj558ziczucB7uw522zE83HQi1x9grNziaDkML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "knHSWLHkHNSCw7VQC3NvWbg4aNJqQHg7GbFwRb8VNrLQTEL4KgN1pGb2YFukKfTyQB1b6g6e8QhpsAhBHBG43Xs",
  "key1": "4yKPrxyhL7Y8tv3qemPtxgk1WLeE6rk5etjVgV8r65HCmRnc57b4KyjNW8vE2UTYhMSqgeZcFcDqX4HJesoZc2eb",
  "key2": "58vadBZV693z1BPcKRjwnXEKgVq67siB4jifF5T4UTuk8opxctem7JAizSw2zwFo3vKpdG5MvWUPwfTsdRWVj76q",
  "key3": "xqcvjV5cBkr4zedeToKgbBmdproAwyvCf8uJMvqHg5axHtpgY7qrUZhAmonU5jw3ZxKgnKBb3CwfA8ebeHznqTo",
  "key4": "ubak9FXgHgQ6xRzFvCvm2ztRP8LwboV9jgu3YnZ98BVZfJD3aoxGxujcaXNz63kUfhzuQeq2Kk6CqhGFPwYVszb",
  "key5": "4uFRVgCJAzBJbqChUKBThvKUyp1VV2iassKC5XMQPw8uTNE4igzByJLu35gpvynvTUKumt6bh1TS1ZWRxPNDws6n",
  "key6": "5MBF3moJXKycxMWXZUzTCwhPjvizDzNzJB3Pb46tgPMrG98ZM9UAbefV2Zo3u3Aw6KRf2WYszJR7YjA4CLMZSpgE",
  "key7": "3qSP19Wn7XN7pbdkBnc3QR78vWz5VNwJuweu39Z5aDVR4uHzGgQLtfXSQqm9Z5edkDzgW1oacrQVRUpzg5n68SUz",
  "key8": "KZHyeazxGRyxUW5v6b5NzHPBqKXdAY6SxEFrXFoogMg4f6w74EKUbAz78yZsyUeV1QkdAwZHiJwe4FvHdDd8H3j",
  "key9": "5CpPyaWA357jFMrengfm6jrBcVKtpFdokmSv9uQZJmZRrNnxh277Y1yeVaibguKWHyx6ZLvKLmngHfY43FbJGK32",
  "key10": "UTapDgEfE3dWAq46rNHbeM7RP8DMQFsJUdgNG8H4QdMprXdyr21w2dWUkvjHHPfASrR3c59HzbXeJAmz77SRssf",
  "key11": "2va818zw5uZiciHvWzSpSzPgABB6UwSkjPw8esEqbSvBh159dDVSuVUjNc2GXp1Ny2cnHeNkSL6uDD8NKqRGxaJj",
  "key12": "5SPiX2JG5rBnTycTBpayrrfFRtMX2rrwA4PdZUhGgXSswSCg9Vqo6D3LGzxinf1ydRppo6hijpqXa1KbCYQWs3xn",
  "key13": "2sXBgxCU6SjA1ZYyzNDbvmeWgrU8U8Rwq53VZbqBprExkjMAjp82VnYvBrNb5mnAG2itXzYTjh7vzFfzuDqg6GMv",
  "key14": "3TVa9QvNFRYCu4zmAMUNb4Hut3AcwjEY7beX2gy27GMYWzvE4Ez1c9YJ3tEHhpNesnB1YP8Q98pvcjHC8oJM1ZPd",
  "key15": "2dLRZehBS5hB2LHJzNqH4ifiDtcxxceBWH8PeUbqUS5CyTeGKktf96H6KniZUDsur6BD3GQLyCdozH4FhKTZTzvC",
  "key16": "2FZhtDLQAvVJhYy7jGRRQdXSQe17JEVXXoRxmDRtvw7issVto1ZzgBBQR73tXYXbh8SA12vxTTWD4qTpcWYQMwFr",
  "key17": "4NaV6dhYjF4R7ZfXPnV59Jd6VN7ksikZAz1fkSzpMGsuyUiMSL6xBLTgyykfvkU7bzaFTH3FBuAZVQepc5DtraNq",
  "key18": "4XeYq6WpPXwmnTPAe93v5bX8ADQs4t5vxsXYbLY7zvFdBE4XoUjobbpVkkotno6JMPUnd1xUdCRWsFq9qfAdubzf",
  "key19": "3PFnsqjW3NvLNiRFkRVNzqdkX5SkQFC3TQiFYLKSKiZTzhod2Yr6oUmC7fJoeadtj4aZYh9tvVjroYtKen57jMo",
  "key20": "3rQLynbYsSdgY6aSADscGWuri1Ashb3ugdooBMKTveKuyXoDq3Jj16vvcNEFz1pqkAqhVQtXzvVMzS5nMP5mTQiK",
  "key21": "nH79qWsCszNY6Kx1Ze5LJ5wVhw9GzT2tpFkwKFMvv1MGVspcbPsQhJgwQJLsMVrgzwVzC5fMzzR62ekpdWfB5ZZ",
  "key22": "5LE1exvgCo4HVtXzWh3xdEfbfWR2ae9oWZ3QwQWuu3HxZFhLmMnASSatuSBQB7Zbhr7Gr8bKUYiCgN17vCbUHgup",
  "key23": "2RNik5r1mDiUwpoRQmDwAt1qwfi6A9q3L2FSH3LPW4riiZKHujsXHr7qP5c6yY28Sjr6KXUao6Nibdfnb5cRUBkU",
  "key24": "2gv2vjGZi8dKMkd1dxfEnS87JyUayWXudHxbfnbVr9bM4quzcXFF1q7nm6ts3C8gP1euoAJy8HVkmPF3uokoMk3h",
  "key25": "4XjnZC49SkfhfUmm62LNf7N4USnUsV6vEgabZMUkwRhQqiCovQTWUCJDCdLHvxMbG3JW8ZjVPhuh1W4NGEQB4JEe",
  "key26": "4F8XgE3JxmdFaeKcCu3tT5jiSgL32PNTRFP4xBxf6XKEUA5mZ9M7dzM5fTFJcQJ9DhAoUhKvBG4Jo57acSKSwmLF",
  "key27": "3NpEn9tP4j3LWTuY7TvUESErkK3LDpCvGvV3RrR7H1VLaNtdke85gxp8hsVdsMyzqCk5k9aQtdkMqDnxm5tJEpD3",
  "key28": "5Efm6H44smtECpKdJq3AWNBrMYQ334hqJv3vPcU5YKpybZP5diLJmxhxBJhrx6MgZS4jEChPigS1vV7vMWcCMwcA",
  "key29": "3Hc6KsXVggtXEnVsQSVZzLx9etuED6p4ciSGxi6ixzo9fUk1SNj2iJ7oWBqRiwfNEjeokgNQGWuhw7wuQWX4RFhm"
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
