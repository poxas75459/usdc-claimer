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
    "2GaL9np2VZNAa8XwgU1hgB6VVVzhUFn6Q41HkUNw4uRaJ5GLcbgvQxdBWxhVzMdQKFu3rSz3KCEqgGdoF7zSJ4QZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vFdbrbj9xEZvsUNjQZ3PQVhrS9MxdrqaeAnrXuFr38U4rMhYDhaeuN6PXp86QQhMNr1qUPhQiTkstsocenPc2XU",
  "key1": "58HLn34XWGSsSJdnPkETYE3cAWQMNRYpJ9EKjhtZvcqfpxh45ERBh26nrB3VepWgc8fS6tvd7YAgdr9XVZ1MZUCw",
  "key2": "2RkYMT2hjmJRYENxeHvA62Bbm4GKrRrBjhqkcLgVAjea77UQEgytt15AW4Jh4UWJJfcLcS2rWzwhMAvyynDoYxHw",
  "key3": "4wvpahZCAzEeodwQjJW3ooKDyaebDNDUS8Hz1qzCzgixpr45NGzp6pF4Gpq4rgiYnwEey781EgyvtrDCdaVbriax",
  "key4": "37P1bmbCjkDBNiLohXPeYvaMrc9oEaNzNLFFfiU4whUoUWdWSwhPtd74u3CFZCHMuE5gy2CTAxTKTDZLgmH2br6k",
  "key5": "3j5CSYgwLGs9GeNAkbASWYGo9413NX4yo62sy3sm3eJmoFhM6u1UV1ZZexywpyvDpe4cJRuxMByPzq4QoriWpZRj",
  "key6": "2CM9RFBtm78uWFyJApVJF4i9EtUMYhoioDDg8kAMBKs63fGyQXrsSigcCg2rhvDdJNuwt6A95p3MZNkosyRoH9Eb",
  "key7": "5grrJ6YtKnNtea8CKu1J8LGtT2BPR7PrzHL18sQGn8w5vbPMyL6dP4HGwLhGQoFkMrb83MnSXcXSyAcSr9Tibzco",
  "key8": "46e2qjig6iJSyWgtxJxm4vVUPwQcScSM3GKcj8ukNZBxPXyf26YMKe7xYMjdhabm9sU28aW795K5kMQDZ1H8ozC6",
  "key9": "5TPed2pjc4RdjaGW9YyKZ7ex3fPKyHdB9NcqvKp8Q8ACjBvEcKrPMwewCvD2fjTSNWNfaUUUViwQ1JPUTBLJ99LU",
  "key10": "5YjhsBG7p8YJUdXmGVUzMqm9W1jwjtYqXypL2nrw4Hp7wEqpv3rErH67iHEv66w8JNdvzV2qhcw7hRSGTMkFH7Kf",
  "key11": "5JerQskvp8zB9SgHqkE9hFK4Q9qD7auHYzvXQiL4UoR8nfbZFpkdYKW4UW9B9Px2LX7BtweUCQLR5dNj8jEve4Rr",
  "key12": "5XpNhZtt6W2sxEbkCQ5VD9cSoPPCAWKn5Q8AHmWiDzBdAm539fwAsiEHfJaRnEZfrSQTCovmq9xMze4TRYs1cU1w",
  "key13": "4o7v1J9KnaAiqFUbCE4gKB6JRjzZ47aMzMM5Qhihr6c8Nm7ngNGQKUoWgckeCMRdkhdEXHuiNKsmTtJiePNuVYA",
  "key14": "45zoHaaQqzqHGm2LmPkt6EopzL6u62ggXmojP6cBgrVNfFkaje9aZr4djQ1SaBCEgPSPGzPRYqZ7FgxHTeCCnwoL",
  "key15": "3kN3SXV6kcXmc7Mok7AzufHE3nRsnYNrDibCM6iB7STJQMU8xEfdXxY4GNuiwKoyE5M5EkmBQ9gWqwnBwoyB1DSm",
  "key16": "4SmWcyqmSRvgJqTYDv5VQgpQ6Kqw1WQQAmGKGb1ey4T3ssffczNQZncTfPUzev4ck3pGbKXkRqMTNYCveXBAj22F",
  "key17": "26scUm2XJtEn2nZzKMNgXyuLZpQQi6wMH2ajTeneGLjRniPPF5o1cJTvZTjxw2UpZY4seMWxtSeekwK7S6ncHBB2",
  "key18": "2ex7YHHVSsK6wYjcPDKi1ofw9GW5AGWMEx8St4zT6DoWhcQJGva2mFR8vVCDucQazcs3gVZJNFd4KhLtTmLhx22d",
  "key19": "56aKGdLBeQTTppL6BxzGEGn8Y5aKk8zpghSAY6UBbXF8XxaRfRHQ7ux1aGbMNCMGWDvjQS2AvEhdNZe1MgMNu4RL",
  "key20": "3Sh4dnGBCrAW4kRWvP4DXgBHUxoWMhR6MtaaZzYKGh5FuqWzj3GiDLxzqhba9rtzwDvzK83qbu9YKn8uEn1PbbhB",
  "key21": "3pqVXAhqABKeap8h97ws9wENc3yRMRBAmduerBUzG53E7r945Le4tqauERiYP3BKsM34KjLUXTR2SzC8zpQVE4za",
  "key22": "2ccPtcAvkhPVdshULQJwJrxTKTTvtQixG2aWbujsUvEkFXQn9sFVox9ZzVRTZ1w4QXPVZnBZyjT1CjyB9u2LRA7N",
  "key23": "2DuULxpKq9XeGNpdWXsQTaQz9zpNPGHtDNAwncDqrm24gZwgg1ZKbdksf6rCVKKM2Ctc15tfURrc5X8vtt55Nbta",
  "key24": "2kZCJ3sjVEUZce5DL9TwygmBNLJGgwV3mi31tLV2N8ahaD9cXyAe9b76wgndr3tS7UDDx3CjLB6wHoZBF8mApNVR",
  "key25": "62UmxhM972DySMwnd8RmLsUUgPmf5PD8DyeF29xognZSWez3LZ3SAsgajKLgYXS4jt6Vn8aR8yUpHRqqrazNJBWX"
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
