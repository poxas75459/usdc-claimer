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
    "5GwT3dDT9jCXemMd4sJ9uH2ts68n5DjmFLaifQ3e3zoySAgBxrDAhfbUuHktCWdEaQw6ykjRwzGzWzqcACK5jSeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZwAWBpDiemsdX5CNsgYLDMcxm3TVM7AzB34j3cxStrcMW96WDF3gbDig8qLHYUpB3uYQRo7L92ZM3zJ5dzsrzK",
  "key1": "3vy9BrFvLZkCctFx6w7JzD4tyAgTLHZVBKLEwc9UVQhcfW1kHiBAktYzF9vkxtcY7dqm3f5A9FMQpjYCf6VK9eoj",
  "key2": "4yScTerZhE41dBmjjZgVK2LyTNB2Ld1zQmRNjjMFay59mjqzgzyqQ5TE7iLBFLorSH7waxtiNNje6kyVzY8V3VG5",
  "key3": "5vRxsegsHJSrFMqTwmhUM5NDpeCncydTNJboTU4b57YN5a9HKBb61q9Nf46qyZjJjrFAuN5YexVZrVy3EHpePkpN",
  "key4": "cBXXSEt5FiMwvenuCfpP77yGeddaHbbCDdhmYezjLeyPuWV6FSQTeNjGHnH2kJ2Z8JjyvaN3Q8mKLSDgPqSgZ1s",
  "key5": "2jNc1Y7Prvj9HQBrivn3mToBiXYJEWvD2bhceQoLcQKyjqRngVdZfCzdjSQCknM9dkZWWxEED39Q5X8hL1oxcTxN",
  "key6": "2qYUEtCVME5LYHNjCJ1ajdudf1hFBoiS427mE7ynHVe4ufZ2czfJahWxbFiChepZ1tPXNSmXD7euWq4P4kAUQi64",
  "key7": "gy21S4rjo2NCxS443xhCXAf95xeMsESoMsNyZmZvY2D7Z3obag8FjDKKqQvAvDLwNR9GAp92wT23sVoBB1Rm43Y",
  "key8": "2PJh2EHxmXuASUHFcqMmEXVuHmsL71JmsTo85BUuGN63bbkQ3qRTc8Lf2Y7YChGhKKnMG8W539LzQa7Fy5xBgpup",
  "key9": "2tvpT8Yg5sj8AwRs8AugLsBj1pL9n6eme2Myu2xUh5kk16ExUaXbkTHXuX3TpSpuxNRZxmUW5C2ikyyaGDyxJdVK",
  "key10": "5dS9Qr1Qprhds4BrD87MkMYQ4srPawwDJAUEZ8fji3t9e4ZRVg9LiAu2VHkVFrWJtAPhyj33n5vVghSMJcDqRUYx",
  "key11": "25QCGWqL57dXptv9w6x5zM1ALXzgVUPXNzFr5iKRWxUMqVWUg65NLY7PAx8cCd2gtcvHn9DAGuGj25sSvBS2NRH5",
  "key12": "qgfZqLCfJWGvRHd2viQdNEiWbZ1hGqrNA9v5XzizqgZoEDafpPsgpATK3NtY4jtaDcjSayvStyEoHk7pmBr8kF8",
  "key13": "3U1xeFknrFGYqcy688sG4mbmSY6EfiAfFEyr2BpC88cCayENpsAoBcBRpQBzmRR8rJi989UzQwQrPQzeFos921Nz",
  "key14": "56kJwsZK7NKb429seKF4bqa6XBqvt8TfGkeyW1uU7hPAKYE8z8GFvqCvg8qzHVNPqxgtJ3uLZQShx6vhuRBgKXYW",
  "key15": "3MCbNdiEkHXAeVgvseKP929dMepgtjsqeChcPaZBzHfezGv98y7juyenA6r8BDfxePCVEStFSSsHNkxVRq9i9D1f",
  "key16": "64Yg56quo2Q8Vo2KKmTUirbrUEesygta7iruNYNpeVU1UKUxoKrzmBrbmKeW7qRwJZoEr2U5Syi7mHu3JDt8T51Y",
  "key17": "m48zU2Lvj5bZSzbm1GgcWLu7tKJczxm1Grvih9ZqNVp8GoE23MQK7PULnR4MacyM4DYhaz7NUkFvXwgHZukRzo7",
  "key18": "3nyyyFWFmHLc4xdHzr8ajjjLQSRf4yb5tpKGGfQwceZY3z1uPxFc6y38Q8zestxdKWCwsk8yJHBJH1cYpiaUFWoX",
  "key19": "29T6w7VrF8MgmpXQY3EQytSREVJUBTnK4N5s7qbx5XNu9cKWkr1qwdXxGoi5M4bGH59o1esUUiDNhPazHrrkjGa7",
  "key20": "49otntumfZHiGACUPYNEDBqNaLbdL5R8EGs96NoDrqdKjEfR1vN8eBLwcnCChqLHcUL2JB8X211neGCNVBAmhGkN",
  "key21": "2bCDbTmhvYEka5ucdeGCepHGv7ASGVDaYFze5fxzNKEckpP2xxgzeXFXTt7MES3bamvPrv1jnGNJPiYuycEh6PVy",
  "key22": "4Q6jAZg73qWhGXm5SJz8QPzA5iMSgMz8sZGzkhPDgjShBLX3F1uiSZ5ZDApMbvEb7ZHe6JGVgkWaA6bdzbeg9NpZ",
  "key23": "qdSJuQQ5rncoFNkihqqbuUJRDfcNdHsEraq8kSaMuct5tedK6hCHTetBUTkjqvhZ42h5bux3vQ46irE8GrCppuv",
  "key24": "5Ud5W9xw9ereco1PaGEufCYZDBNVKq1gq6VoMZUbCtdVH5rRNVQ7LfCBubkkXcjrwAgfkJi2p3ZjAk6SQV7ezYzX",
  "key25": "2PjaHgiRApaCfeVTDQT368Pxthxsmgmr1PpCXmwTZti9NRxyGcr6qEQCK5dUKiGMFUNP4SoXKHaHqu3PRoCAjgME",
  "key26": "3SRyzHFpfXv9A6MxdBDRTVsNdDHr7HfjQa38ZUxRotZVL5r166vFHgVu9r4dTbHHxJhpJuXS42EhzKEoYmJezMMB"
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
