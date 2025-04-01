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
    "47Y6mQrf9qV2YubEurUoH3aKkR3CgjN4ZNSMNDKPZBH3NmqoqVRbNcxYZVdXm9aQfC2STs7gCUg4TeZHu8xTBk21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YFDgZa5D4dyekY6e25qH2PRMeh65DAHU5KBM1EAdL3Qrk3bDBoYWeApDtmx5sA4ciaNY7e5zroSJKUwmnnFjiVw",
  "key1": "2FnfShDYxgvLRUnAe8ugWeHqn31j6aYAU7FwbBngEGymbjCwNS2KjkvNeYCtsaRU6HxS7zwHCXQExdSHf4kXTEub",
  "key2": "3A3DncxwF2jqfhH7A98a1f38WA5HL4cHjxfr5yXK7YYxZfo3jqv9cEi7RcNTBwY75Hyqi5EfLLsZiUYWK4cBqCR1",
  "key3": "EUXVGDUMzL9UtQYKZtw7ShN41PtMXUhZcXZ9BYqv5i6E1hFVN3F8NXc76a7bASLjaFdBh2C6rUQAkKkJLq44etS",
  "key4": "eJobcnCwuySKdLELfJnBhayj7h5xaiqM5BSZx4i4WuZNauxmcVM7PvRVQrZoewS6E1g77EkBvkaoEdvTeNumQ2f",
  "key5": "DpQKj56qTt5NVkao98tLA2jo4QA9cm9XxdpD4No37C7K2ZpM5ZPfKTrmDvQ9StByjiQAGdXepnB2oXK7E3skZib",
  "key6": "NZPtsZyACCRbmB1cyidYvMsEbDhHTFT5TmsVRUccKSwT1RCgkiXYwHgpQtse1bXZKUQRCMNrM5zEQ9uodJjttHh",
  "key7": "5Y8o7iauG7Ecsdtv3D5S5i8T4fkjgaU9naccb57gtRcbQm1m6LhEo7bvzobkSxufT7PbXHytA5A4dGDunwpiZdYR",
  "key8": "4aHbNodvHJLaJiVARWj9kV5vwsGxMtek4ePwiyZHzsH4Meaq3XVxuEye4ptoKR7kYMhchKNpeZ4Wq9h1rQvJj4a8",
  "key9": "2CDme8uVjonXkbcfoUXP7YhRyRRJjWWcKJQ4B9v1PCqSx16dPwtU7Xn425fhHPXSTKF3N6WGmoujJhcrYDKjzxVf",
  "key10": "3p1FYtrb9QMbTHQaj9LpNpeEgtK8n8wqdXuGCY4D3qt6uN796XVHYaY5R33fZWWytapibGbMhT63F5E1oSsKnSj6",
  "key11": "2XE3dWkYC5xxpMpJjyZLA2ie1si4SNV7GtvzUieaiytzDzu7kED7qnENr8BVS8ScmhJX5Lg9yG2q7Hr1a1sosJSa",
  "key12": "T4xTqDvKj34SjG3d2XQpz6dbMkeV1a3YFRbcMVz8kDuuWSM7dX8EUdfczjA6oQghAhqccqcHhYbrnEy8UA75hGW",
  "key13": "72qgbfqcZVKfwBeRbc8qSSrrYXeaR9GWAoCXkub7EFsTACcwLLzD2gaE4Sqm6mpoH2QDP1zU79SZxsroFddARWn",
  "key14": "5ePKukM1dTRbv8BsMgG3iYiCx33LQHQZQPpfoc2JEMKZ5G4CCjSfyg8PoQyD8j17dsZhdD4mZgWLsbdW9HrLuvkS",
  "key15": "5rFECEoKUKVU3snX2xhcvm6yH1v5J4La3yHVuKuM3gz5LEiPo16RYZBbB5hsfkT9X2SiLoZ1unaoRTPEqQhRBVVz",
  "key16": "4Fa4GLeXcmZDm7sJgeZj2p5PDZgcVEWmJbwxiB9WMonQxiMgZE2GfwoTrezx2ZjVMSxVqGrE3LqpwNLYF41XY3GB",
  "key17": "5UHouL8xjnxgQVR5PQCMgvGpgBbcxwXzEnA7XSGdo3G6JARvcgeAPmiMUHc3cwxAgkwUCxJhBRfyvzckRv2W91Di",
  "key18": "2yyoNgBaCZcnUjuCb1JsN5MAwaXbcmkhPTGCYy7DGGERtyNG8D2RzF6raxTonQf93ALN5agUUFEfb11mXYpL7MfQ",
  "key19": "5EGtxo16tDQbUCK1UZTpHGYPd39orcdrqS5tzhvyuPFSUmEZLJhDE5d1XCcxKPSzZABXMNQkazTg3GUogE8C2jui",
  "key20": "BbPt6AJ6mdyYDxA9978vwJ7A9g3twbstoi98PYR23wJkr9EVFxg4Pa1NVK6ohXAwB8MLREmAjH3rTWXEqy7mQMA",
  "key21": "4Q9oWB8h6AgddSyLwr3hnND8RwHpp8oTZ26W2Jbj6jYPzX4Hik7ueMW98MPdCs78umgq86UWK87zuYQEvABX6zPf",
  "key22": "ziYDP4zykpdKNzJKD23bz9Bw5u3WBba4LbsBJkJsvdA4orsaXKcVrPaYAfX3CUh3DFvYz6124bC23hNMkbJD41f",
  "key23": "4CbKhMai9hpXwGaLftBCykUP8DLQ7Swq9qnKdJKv77Km2TsHedy5kHKJMDVXGhWS72Ek9UvGiqCHqhjP9hHaAfKx",
  "key24": "2veAvqp6x77zUYc5qfBFSxuNRTxbJYL1nxaWV9bSbi45LEisENwd1xZA4UpvhohVBCQpVR6U5fSeBNo7hXH7w6Tq",
  "key25": "25YGRpvWpom5mKaW451iWyAKVv6RM8Wa9ffgv2o5ps7v4TCyBiGYkMDYsbXZTmjzgXrnYKgTVYNrGbAEL1SxWbLf",
  "key26": "momaN8bPDhpwhR8XQSiSHQTGXrzR1roQmkbdRh68sbCXgEdJJCDJF5VRLTJ3kFRpurp9Di9wA38PLS8ykfECvYF",
  "key27": "CDaxdtyCRpHKEoGXFjy7nvxtBV8WzAUDY9XidfcrDGRWA6bvoFF4JGmjfUBaS6iGxAsmpJNoHFGsFVzYCXpCBad",
  "key28": "2Vb4hURrgaAYgNhiDHh3WdbqV8PNkipTBaoNDtdF2d2AxUFYvZDVcnHddZ2V2ggqgGNF1117w11nErzdMiVjMd81",
  "key29": "3bNP1xgpw9hXGFvCzvN2HV5YC7QKXLf5VzWMbnF3ShSwG9uAFESC5fdnjz8Szo2xE1QCc1kC1HtHP6QJNHGfNfpa",
  "key30": "3WSMhRy3u8p1KbeoC4boKYikHkodszD31HsuLMjRfvUfGX8VqdbvBrB7czELycmbKqnVM3GW8Kogz9VcvGDxNqzj",
  "key31": "66R3bdQAHQZnhqB1KQTqmJnb2LwAWn8vUVXVCJoA3MbREovkrZkZAjoR1XEJm9Qm2eo3pBWt2QNyRGJvkFEDJsN6",
  "key32": "5HkZPpSwLxVzPtcK8eWxxW9AtCjhS95vf9LE8FSwrpUmPugggM5J7XDbwNNyRnnDnqKLAKKgbuZbVs8pTSs5u88c",
  "key33": "2h9Y5LZ8X9pARVVjnu7ysnmpUdicxw9YiopenZx1qppjEBfJbUAbecg8fLZPfWRGQyb35bqy1ee83dHwtgRpHc7R",
  "key34": "2RBs5iwkXqdgUvauB2x5cuL8v7gTVbjVSWkFF6bwHTUG55HfrzyX5uAfVPYPZ1QonxfGMQjzM4GEVri2vVVQu33E",
  "key35": "5BLDWCrQuUXEXL3r8bg5saovi891ksPBWfTy4BmukkX2XTTRKde3T7HTufzRJio1uX4QPYypghaXJFQ7fqUSUaND",
  "key36": "srDfJrakoXDbMQEwxNzXiX87snZWve883PAuc9Nm48PWFiUqAoBBTs1nGXR8rafMxpMDCkB9n1Y1WV2er3tBTgx",
  "key37": "3LA6HFZJeipng7hS6DcRYNDaCLyKdjhBvGkG6dG8QtrM1a6vA4Z6RurPqs8sb1xzDq7xMN3Qcn3emCPyBFGiez84",
  "key38": "R71RXK9A69nv3VgtiD5ttw8aZ9gYpNuUqNLDVfto8v8XsyPQWoJrpMSU7cjUnCM3yexYQkCAcAw6Bbos1jysxLq",
  "key39": "3VvhzJVfuHwNSaCrL25uni8tAKN8RTokaYhAcTLLQq7nFcozRgtTv2rDMBAA6NkQkb3z3c9RJb1w9RGMjyZoSgYD",
  "key40": "2FNiz7q5mrFfLuSB8hTB5qRY3aiSVXKRV51mRmA3KZ25YGyP5EybbLcs6u57TUAfoQRYeb7nYiuV23eTxzrootxH",
  "key41": "66Md9iusAdthbU1Q5g2oPC8w4dwVeEYCGPFge5eHtki5rLYTp6U9X6q24hs9nyzRhVDv89DLPW4zyMXJUAz33eoh"
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
