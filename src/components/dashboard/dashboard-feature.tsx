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
    "4uBFRAPkU8LEaQxWkCu9uWwgXpA9fL3mT7ATy6TCTPx2h79bw1DMyfBZVsB1EVwcfDr6bJRY7cZx9XjXrWkSLtUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p7Z5EesSoGQ7jrqhLVVmwQ2YKDptU85mFRKpDnyfgqe8zYYn57VAY4K4hWzL4A3tXjboDrCeDxZpBkSktp5YSZE",
  "key1": "4JeEEyCySMgpVjZW29ad8Miv9gUMFtyM6tPa3SnBMuU83Ha5cunqWgCJN1GwJthPzmZh5di9FfDUz777ZqUZJZs6",
  "key2": "5JQE478VBGnUEMeigqL8pDZ65fHLU8Ro7dKngZemps1SSLdKERed3jWmwT28QC2AbMWxoZnXo2cpijt5tQfNimNG",
  "key3": "5Xb8oBSjJWV3kNeF85bpCU3EbGKjgh9hQW47JLNakZVp6mtcXGwTPcRk2gayXkBj1xs94QQVySVj14xoMqwQzGYq",
  "key4": "5tZTG1AHthBrmAJq3hyP1tGwh57MUgvXoPN2BrZY6SvqpwHUEGwhnPY9rmqrXJTF9hTJQSLjU7nMaBctFiwgQ4sT",
  "key5": "388yvKsXmp8SwGGKZnDSrs1YpXtw16mYZhJ6JPeR1E8stJdFiU2Q8iKPs8y8qayMGBcnEaKrtDVsxYGy9Dkzz7Vn",
  "key6": "59XEJZzjt9BwdUS5YND1E4MEs559eNstKDpvgbsTD2rwC2D7RLrT5eqXU9vsC4gmF9ZLE259um44K3gnpWLMPa4y",
  "key7": "4rUds6VdbW9PEr3vCaQEbWQJcaJ2KXRwm9PM7e9ANbb8rRWD5iKr2wtY6h5eW2zo2ujjUMgcakmEpuUSa7iY6eiU",
  "key8": "3pVQotTh9a5tN8xujSi1f4Sxu1ztNqAp34RcRv8qxzsr3qBdvUerF4c2KWPnpaN8VmoDCVTzTn5v8hK1cESgT7Mj",
  "key9": "bFfWSXwASet3SQnm3LLXuQ2XfPCBoC5CZ9rscVL6qdZLAazyAr2GtGuzjvXc93FBjuHuCD5oahjp65ZPpxJqaKm",
  "key10": "MCD46cTTsYVa4keGThhBAogjvjLMEknXg4TLJiwinQzV6WKNJBhu54aiNgg1Untr5vvJMcKnUx4KSxiyeibK1U6",
  "key11": "3VUEX5AEtpdcnXMasDas1pXxZ3qjf1YLb5ZYQXMmpNgZgxKN4cTrxWm63AHqVEtgQiVpYbWgBrjwviHVCGdyd63H",
  "key12": "5wzAbmC9PvRyRrMqhQtJdTCV4u1BCndFJYxQc75rNbVnsXwPKgfNUrgas9yEEFKMreCMfdwGsNS56MVfyFViTTQj",
  "key13": "2uT22SEwqHJXKpkY5wsr7T1rAdyNGvvbukFfJmsNdNRYxgQqkWUVsF7uA46tAqtWLQpdTAhAsP7aGk79xkASEzQY",
  "key14": "3oJq3TTMJr6NZpvQrwdvY5bnLAWYr7AW1SC4GRW3ANhhh3o9Mu7dKUPPwvu2L66DtaNpwwaDD2HUnWXMw9gVddm2",
  "key15": "BCy4vBX6uj8eoGZQJvmvz1s85MxfBAakLyUDMo5WsEm6Vdmj7v3DmHn3Un8hesSU5Pv1ETvkXpKupSQJTQ5VPBA",
  "key16": "nyzZcUFaxWLNad9PGrE7FsRDiVKAJdEcMfqU11ykZNm3y3wJqwFFTg6js9SQ2jGb5QtMnYDoveMg2XnpzFYuJkz",
  "key17": "5WUUvgRPDobBzH6vDH5EaeaTNudjNXDySzMq4Sxg5AGM4xaXXtWbB55CdGYNwJH8i62iCp61cKpnsCijov8hdm4b",
  "key18": "4tq9efF14ULPexmgsAgcrYtRFFic6DfuHq9h3amPJ8qpJmMhJL56xZAT5pu2jtLSMZLypGC4voLb1mT7MqcqdLyR",
  "key19": "51aMNK43b6av4q8ec86g78vpzRmhop6Yrr6oQxVQoYMnzmWsCpxvFmuKopL6SdswvEBAyLo3zTb81HaUkWzctC8C",
  "key20": "3dGrLAjVJjMKyen3zAJ9XF9hE2WUR8psMgiNYy2FA2jTeowiQQ8UshyWu73vvc4oE64H5hvih4kuzL8ei4GvHmSu",
  "key21": "2ovkfVGyW7gFGMyrjVVVsNJ1E9MAaQPUbDfK1QmJoZwyKRBqeEWVeDoQm4VuSWrsnPdvYHExTcpAMaY2BfHnMiia",
  "key22": "5q5o1x9fUjdbqfocQnt6WvupUtVnp5hNvx8cXrMBCinp8yd7513HacVAoioASd8Lrry48bQfkXTDQJfLAvhj45zY",
  "key23": "2RrSXtu7nFDeCyv5XZy3AAyBwgWY2p2XRamURrE8juyhGCQ3VayFqjANEeAF4s5Z72NgKfM36X6nYPppp9ctcxPP",
  "key24": "5rAFf6CiuFce2M3oRZiFyGvxXni8VVyToeCYLN7xz5682B3E3t9jc9FdT4ZgVHwT5APYe5gtCP2ygEq2K35vDuwa",
  "key25": "3Wf3K382JRJg2NKjqmmy9yQ1rzyajDrgNEKvXg3rsXhBrWC6pCcAEP9BMMSM1ejN4pHeraDzh4bMbobmwxqwd7Nk",
  "key26": "3CYsmMHuQUkxKNUGf4ofCMQou26KtjLnzMgEh6paNsZwPoFW9wVedf194qdFB7yrqhhmPRoaVUc8HovGPYPzzvUb",
  "key27": "4CY5HzbYvGpNnESYcQtSxpcke8rzcN3sEfmENsNKncXBvLXW5qMUV4Ao4ri1tpDfzzoYgKfLUacbf7hH3B2KFzrS",
  "key28": "4V7hCVtEBT4mzQuj3qY3tvWji4GkQ4GEfoXvzeQD4fr8XgMx7eaV1UhbD2onrTSvcVcAiss2PSTJ5NmktfhgP1MX",
  "key29": "28grgoQnYPg1UWxxqe2kb57PgCnGwMSJogwRnqx4K1ozFeFBgPU2GTLZk2CVgZrgBEa73dWsHjKpifNb39gW5sQS",
  "key30": "5nX1ogMjCCF2Gre2pUidpo7T6vwfQ7Jkgj4Y8dmvoJYvz76xbzy796HskF9ExqA1TZfeAWUE17MhyoBeEr2ZM62E",
  "key31": "43LWNayqo5key3DxVttfoWWc6kv3ek8b2qTqCPnHuKqkwkz7YNtQRbjcC7Up6EyTy81D74mmeJ7DFJdje9QpWiQk",
  "key32": "3WiS5sAT1FSk3YFi2GxdZZj9LqDZoF77muGQ4MwinwrqQH3wX7gsHmmxLXj2XrQZ6DVqw8nSfCyMytSHinctRjMp",
  "key33": "5Vw8LTJ3Mrwi4FbKW3ntuefsGWdGwWccJe81XGnH56zXaT8rrjK8GzgPMQHDM9ZC1bSLnifMaMwj7sykuosCrZyC",
  "key34": "MdzsE8y9RZgnPaDCofr5p8wbPAzL8xMXbMAoxKyB8dKmqpn9dmXnsaERvgURiMRRpFn1zdMhg8kg8FoshhLSAof"
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
