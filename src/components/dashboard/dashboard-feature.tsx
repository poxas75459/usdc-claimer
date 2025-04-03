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
    "3NKJVn8BDgaZ3AxY9uTcas9aHErKfXzQUWHFELTigUbEfKSu44UprZbqpCQtBYsoWHURgjAojHjeSWVXmpB7w6h8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ft8EiiHjYck5dh6jHi8LjowDWNVufzXMAgBQoh8xjTxeJEKqexTMGqd32jYa7RokQPPvM9xr3wsgwTcM9r3AFma",
  "key1": "54vDtPLbjzFHvsjueAqnemncSxgkM9UYaF1fewMc2sxPvZK14vvkBm1j8GAEn36poAvu43gi3u3HViDzBXR4jsEz",
  "key2": "3yZskseMXLy22u2izoup58koeEJvK7AYDEjwedqh69uaExuKdJRhg5sfrtgfVDz998DqQ9ky25j4y7MTwUTAfxZS",
  "key3": "2g8rbDbnW3wykGi9mZx2MpR6ZtL6bKvCbRiAxhD9X6h739eUeriGUhT8VQ3EnuyjDzMeVQB2zvKFzpY89PpGwF5Y",
  "key4": "3YoNn99JE9aEg5wQhFLFH7cwEuuP3hxyCn6iy15i5UtunEAvgFTPrtywaET8JBHBURMmWdiJ3pna1yM17PqYvCbY",
  "key5": "4EpDf28xbBF7QMy1MuwKsq17FhuAiBX8FAPcywQV3bBogDry36WwEkPa4AjD9d5iDqz1EERQUXykshGdZtJbQ16S",
  "key6": "Su61MvibizpZguddv9DB82fZwX6Lkc48TYFbYZiNCv3uLzLUF9oKCTuABZhSJJtMXhi3rPfCCK9nMxyGSnncnNh",
  "key7": "RS1Fo6MN4H4xT5Fw8p9zDVykm3NBdSv8cZQqXgPUYh9ExUrPfXdm39w9GmnVXEgsSJ4fBczKeQkiZmwuVsBHir2",
  "key8": "2584dy1JqChoUrp33VtD1XHa6jCrmRUP5s5dRNovoyZB3SHCK1xBYxfXQQ3F5NAmZZFSP2ZWosxtgw5JaR828VtD",
  "key9": "5TnKh3LgC6MqoDSHo3KKxGa6MjSS8DabuzCY1e7UnajNMpeuUkrgazZnmR8KXJFJJBQVBm6J3LLpWGf2BVVErh12",
  "key10": "2MeQGpn8KGvpKPMfsWAZ8hDzuETkBa5FWuHc5AMimqHNSEcvuJX8NwMRK5chp6wnD1kSrS4cXou62Dik1fRXBq3D",
  "key11": "ojE1EU2ucnQLWvvRW92oGTn3JyotwGGnPrsoANC8fowCpBQV3L57kjUpiaajjMFG22Av1CAb5ZK8SGKmX6j2tLr",
  "key12": "3PKyHVJvT5FriCn67mp3t33mUVsS57zBNxb4s4Xq8VMfjuRjP2M9oL36dZMmbULQmeCnxk2Bqk2vXto3oktonXRj",
  "key13": "zyANVQv15USzEC2usVkupvxuRqWk7EehoKH3sSV48gwompN3P4ibEhX1Ffc7i9N4Mf8msk2eTmo8Ppzezdm5o7D",
  "key14": "4LHfvqdqhzbqJ9eqvnn6RCUsKFvji3rVwkuS631SdEt39RRUQmHXazC2FMeBbNsW6fASrfhdeogqV6fLZYk1GPYG",
  "key15": "5szDUhwmaUqJF7P3q1cLpHH3KXDxrKsH9BAQsMpHAv2mqTEiWGkjovYSdKjHnB3y5rwFdLAWqMEp5N5SLGrL7qEB",
  "key16": "5WeAaYrDpS1LQqusFY8733s19o16AoW4J8yTLNGUvJHW92W2W5p9vxKwW99mPCGS8mVxE6bjymFfr8TP1FyVd8GQ",
  "key17": "5nFn3Qb5u4bhtR4LMuUuQPK2jLUrMxQBh5PzqM2UqkXTGX6qyVawcao5WpDw1LsgcZJKMohaJK7EzJcVmBpk3YM2",
  "key18": "M46FWaV4yt2JbYNAuwcbAisknRmNoFaeZ8BJiWNhaapZF7QkAgQDgN6XYWKtZPZ7waqBq8nJcpJFTPoLV8UBW6k",
  "key19": "2wsDmiSB72badpswvBa3N5dy7V4XjkcsJ639KQXrAcEGmKxT9nVGxAEnZf8wmRpyRR1GGYFieyin4uohqHkaxHr3",
  "key20": "5kRsThXAGJCzXFksXrhuKcUXANjPZ6Hd5Lnfw6zz46VqW8kWV5eGaRtnDAFnUw5swE7Rk3RUKZTiX3i5Vc9hRnvJ",
  "key21": "B6iQaasXBeA1BaHXmV4kcbRU6R5DYwtTd4zTPGZGTNdQbzF9ih6uyHsH7Eeu8fdFKAcbVdQV7gSxt2okVp2quNm",
  "key22": "2y2Qc5hVtv3MXCBFLgpuDMd8qWT7w5nyPTvy9NfwEAQxoeYuGpnxiCAUP3kYPnBTG7BW5h82gcJ4hqQPqtwJKYkY",
  "key23": "Tb5sXUyWX6UhBcWVnpCkXZ8T5gho3gUzcMmP7mNAc4HHNMZoMQvZAmRQ7WsqikDgMwF13RRHwxF3Mq4Y5ebHXAi",
  "key24": "4MYoByQZ9b1mQMyqh6VNHFwxHg37o4pvu6GxCNeB8FZfBFVS8a5xivh4MYaVHQAvdhrkhwLTJMyQ8UkcbR7LQzQa"
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
