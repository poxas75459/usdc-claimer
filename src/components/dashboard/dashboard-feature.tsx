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
    "2h1f3JHCHRoWFBdRMSfyuuYdP7XhqqVXpNxATktvo2gdF4RENxdcm51GwXfZWr9c6Cix7tocgyfdufRXicEG7D5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27GfVuNhM3zSR3ZoASjz2i9vsZ99KeDDxqcEtnBqD7brntqrSaymLoAmUWhxbpNxbK5a7CeUDJwEu9vw8R9v97SY",
  "key1": "43J2EvEnNqDNzygpTMT2gJw9scRzPBxRsAHFestmedLXouURHNh94JqgoyrFWovyah11BSNoVoBJFXA6FcM55RL6",
  "key2": "2JXi4zYaRtchrpDP5p5yyDDiGdYWAceT3YUHd1bYisgmeF5AAxsHwSiR8ChWVCxoLV6DZr3WcmW14UFtuPBVSjnE",
  "key3": "6opYQp3zYCenyiZ4mMW2wrHtSgmugbupf41cdkxLFf5nJTzfVBU3gVZsa74RwNj8bD8WxyGBkmcbuvXiHtJnzf5",
  "key4": "2P4SzFYikBZVZnzwZ3kr5Um2xKfzhmFLz2Z5FRthduNhoVA8tfuzgGmKk8RiA3U6wgfesPAUpEepH6NRFf8Fm7T4",
  "key5": "2xapk8eu1hmzWNNEbSWw96QNAq3GvCHc7t11Gg6XvkDssJXMFLMJhVwcCuwJci38qmQKTAmCRHzQzbdko2MWyn6D",
  "key6": "hc7WKNkVCxq9vpszaYLQPt4ifS6gqHj2BuyLN9NKWEdHLtUuyPZRHceQ1i378fUqTR4cNCLSAz45KVe1ucHgJjP",
  "key7": "5cVhAMDXzR1f8CKZUTuNnGpei7y9JbdqMC1SXavG26L5QdZmTKXLu6aPqK4LrGaSpgx6EaTrfSy1x9hy5iBcvG3s",
  "key8": "4SQ8yUbA8Uzqj9S5uV5zwg2P7yhKeeCDZAFr1hXK8DM7cxHrUYtPuieKeDdHJUA1Mr7y7BsQziNztJ5ToieGWwdJ",
  "key9": "5CsiNh8kNppNru4CiJB5hMRi6T3XFoHF85pkeCXgZhKUALQAhhHKjFpjwZqbWBouVCKvRGW8TBHWVGtqANWvCuYq",
  "key10": "43RL5VDPqemWnX1YXVS6YGpdpBstWQixgMjeWvGbdhqVmGPQw6Kym2qVGoRk1ETPv9zpGLWuK481BrEFEtodSBwX",
  "key11": "4k4E7YstyfMz2f36h48bMRvzfSxiEKee5Wy6WX1GYjZWX2DiFgjPzR5d3FADB7e1eV9WVNf5xh3Gr7sC4JDkWuWS",
  "key12": "C7UdUkagPH9aWpeB5MEgDA2ccCpJ2nioY5P7zY23BLmneRvimbwhDs2WkjgTh8GoY1AQLjAeHmGC4JVzxeE88nc",
  "key13": "47R9S38v6cL2EZVeHGLegbmWuovVrM57STnQBoyLqn6vBbZGS3JVB8oMLs2gMY3EaU8SETxvCjgu7jRPvgFZNi74",
  "key14": "2yqLthdekXGobndjsVNcCvV5atFmSrY34jEHbyP9BFopp3Djd2hRfmNqYZLrf57aw5ACEygatkUByRgog1GSmrWF",
  "key15": "nYoiLCirHm5V4Komo8ANVo8uHfWvah3MukSPuwQEWN16UWkB4h7Hp8JfvRVgb4RpBjDoP4YMdsDHiDAekgcxfFy",
  "key16": "4eJWiGzH93y5WXhSaRFnCnzDyK3D3H4nPyxzv5EaSN7K6mb1NpSfNfWhdKVErbSTyyuMUnDpkiyX7WEcWpNbHHBC",
  "key17": "5W2z7JsUknrP2ZrgDAEKyu3UPDdA3n5icT2CmD3FDQJVptRPAgghViyD9xJNtwXNNHyTS21p6yNKXh7S6AsLLDWQ",
  "key18": "4Xj17PQWJMaeiXyaQSRMnbhjnQJX7rbp5d8e4YNvTD1yNxTNN67ACqh5xznDFdjMrjqmAgGwvexv9KESSUrTMqHv",
  "key19": "2jBmyLgNfLKgRSnHkcRopxPCvpQXxFSth2kzuVyeN91Zpwndj3515YfeXkSFn3tfe51dycx4WXcnC6AgB8ZApsyM",
  "key20": "3BeJXB98z1NuhNeRkEexM5c7x7SvNibugZ7H1MF7Hn7xWXH7XKt9adm4R34yanfvdPefY5ujxsfp2LvBpB7GfnxE",
  "key21": "52DQUksGE7aPRZk9LEpn7G3ZLKFQu38xVd3NLA3H5ocHbJhmhhCkHmHMw2qk64tALAqk8kbZ7ZBjXfCeEmWAnXtV",
  "key22": "VdtNjsaCG3oMMjg12pVcMvrVuQ8CowgNduAsCLYFXyqajpsaTnnVnEDAkpDGTU3sXkF21pf58JYR3MrW5BpXxAk",
  "key23": "2Bh8QQUA6Xz6TjP1w97JSDXXS4mTXshMuh51znwsGceGqiTySqyjXbRLSvrKC7jn4FYf97zKYafRugMhZhC2nyA3",
  "key24": "63ksgBFTWuNbDh1LoYYDS3VxnTZSHLTw47YhhnXQhqrcXaZ8aX6uPpUzTkJQwRWLrDQNdrTHthPooJP5VuGQSRGZ"
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
