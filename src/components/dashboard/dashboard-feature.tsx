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
    "2kVAbzWFX7UrfndUJKzGJWUZqjoU5DQFTGbnT7K9w1vrxzrtfM6fwshH2FXpPLJ7RQnCBmsvHoqjfX4YmYkD7FDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J8gzWCTqFitqGuRwYmsNNg6K6pGm8h8NM5Vsb5Lx32WrYqs9SZXCFESYtxzeSSwK7N9RHnXuAuw2xHHMHBKgnxF",
  "key1": "42y3rz2SfDFpdAX8k8ShWRYh5NyySsGCVrWrFZGejEzXBmY4uuLtCQFk3boPD3Q3rqg7Nz7nJMdpqFAzxym1CHTy",
  "key2": "42bBfu3CBcmUc3rbfHBxK57bJpM2SakSKevQRTbu14VSAtqSsvcReVQTuBLajWXe2qb14qWTX9DXACppWxdnLB2k",
  "key3": "3UC8jvcUbV8qdVv1kvYjrLzqiUkonRsAFWicfhvMwv2t19nwWY79Fu2Qi8HviZt3V5mUDcRSt7gkLPdEZbND52X6",
  "key4": "4YSyAe2VtHZLkUAfW6vDxZ6deXnkLhBuQ4jELMFoHgpAWwansNtmAhMxmv2NTfiZrSM5MFw86f25nSt4jVXRMt7m",
  "key5": "3UqjhyKmXvUSXEmqLZpcM1MGqKCZtiBT97AtS4LUGFxphchCo4Z8TqfmayKkdvwpXSRiyDu5DduUFgodpoJ7phvt",
  "key6": "3EQ1j3pNa9ZaJsCB1HkGqVChDBHxNeYtCaRsuAQwqQUiMdgsp939CQyR4tb2YhQmaSNyqHt7uoZdhKAkFVQGwJDo",
  "key7": "4gySBgQS54yy9bTDTDwNHhYSDNdTkyyQMwHPwZW76wxeNrjZhCgSeaY3Z2pPqunpWFHTDgNTL8bi8BCNkN9B4En8",
  "key8": "55Cn41ucWxFbcXbMx4Ud41TsptXLpF1VtpyJdMKX16ZPEKnBpWFpor2KWaHdYY9whY7bz5kVAoBMVcFpBrma9JbM",
  "key9": "2w9jjWTYKPKRecayUbFeLoZ43B5rLz41dt8mh6QjpsLUAecv5s7T33AqJ3uHzwQPiPfRLHMiusy5oLCDGxCNMiJ3",
  "key10": "5zGvGcEhSCxNLnjX5MMfEwK7eVn8Wz2erwZfoHP5Y5JYd12ajUGTbv2ddVSM9JWS6vBQ6eR1k2SG6c8hSSZjLbrQ",
  "key11": "2Hoh2Rngs2F1q27pzEVzcYMtHJ4i4QmJVJqHAZEfc85xxCSe5xGEoKHPaB9eYNRFUFwPbBnZHbqhkv5qavFgZbWX",
  "key12": "66Xhp6ftV1mmAGviQK3TQ5737rXZf7PYKrqC13dePXAAGU2kb6ifB6W366uDmY7DeBaAzC8zd2zYkbjGZHZ6dQ9q",
  "key13": "52GYtpMopNTN9Hy3MNeWhSda42VRcWuWkuHnL8xDYwZFhyN9RPwsTd1gUnRak4PzP9S6KRoiNfCD1fXBR8UsH71D",
  "key14": "unHU8bhJM7eD8isTYg2H2DMXAzBxj296hDN6Hbkt9Y4GMafjJjvMwHqQQ4DTsyjBkBTuVmmkH41fXkZS2GmfvMS",
  "key15": "xFNy2d9PMEjE23rxS4thEgRmay4QSQjzLPSFPaxSTxp3hs5zW8QJxy9n9DjPamW3WnbATpKpFS7VPvGwaQxgk4x",
  "key16": "2qJn7hMpghdcyg1uau6nnAKSMViBFEConMfU9kPx8No4bBs1JvzMCJv5rgqeHeQAhfdHMTT3hPf4HajQYtu5z5hv",
  "key17": "2yHcEpuUqSo426R8jvWMzRdjHiq4XmYcDwPx8yRUgPtXZUWwMfcUwLNcs9VZTKNezijXYgmx1xJdDBdFx7N39LEi",
  "key18": "3b4ieETpp4w5wy5PvdmDkm1JaGUG8bsrx1GqU6TKFnEXiQfyMuUnY45tFPBjNqzzGYXjHKSEhuRfUP32Gg94vA4E",
  "key19": "3Grz4JkJtG9ZQ9WQs3dFXcjnNzXiErAny3WFnBvHumxi7zweGj9frHhLitTEj2fB1g5D7VQdACHzXzWDmiFN4As2",
  "key20": "55ZfgVU14MMqATpxsCgQ5jJL9gNXXvGbieF2jaT5g7gBpjMX2PS1h4bfxU35Xo3sh2kUJ4M8srjfEReqRTGh7jtM",
  "key21": "54WQjBbKFGp5zEtuUKEMFWJLSaTvJ3UxWw74FEHVUSXR7QkueN5VWXUrbAuuSj2cbxRNwA67JCtbYppu1iLRmCuS",
  "key22": "2VxK3KDLT49PGAadJ8kdyKGBby7kwy1GvPRxEtm6cSDW7PXqjkGaDxRwxqNn8QTJSzs9rZScyaHen2NZC37xZCKb",
  "key23": "3PHkNjfYhGoCtPyHiz3qhsPVizBAXC42CkPDRZCofAK54dUDY1ovd41hzyEprAQzHLfARtwxHvKTiqsYxdzff29y",
  "key24": "vFfM2m6hRmc6oQGJySLEzbsF9BivgNfTtGABjPh8NH8T5S98XsttxPXXFig65yVxgemZ6QQqdXxvvVwQnjeCcE6",
  "key25": "3jFa6EuVHerK8nZ8jLqn2mvjLzfgia9oBw2Ciiic8pNMagNta755nbdzxoxiUYWDddJTUKFGR7Q4aASC4yvfeWuz",
  "key26": "pkBUNx2QP59G4HTazDteRtk7RJ9rr3vdSwnNXB423iATmff9wmh13XHoKVBoKhfcvGtUYZgvZDzkhEjmS2z477n",
  "key27": "22GRvokzddHV5kJLgwZrvJn3yEuLMbNCRoE23CXwmw9tQ8z9DQDr8huYDdkKnNJ4qtYD1vjukEGhoTYK4QzgnLKZ",
  "key28": "3ZET7h5v5Qvu2a1zdVKB72y5WBcuwp36rtn7nP5jBLnTL7WH3T2YGGoTKnLpLezCeLrV8h7LyP35uJuTXwumWviy",
  "key29": "2wCMGQR7dyPG8r8mDu73V7UvRuQUa6t2tK3uqVyzy2Huvv7vs4XUAeuRr96znpPhtRigq5Vv2cDLiHUVhxcELHMP",
  "key30": "2yF4THw8BPhjBJfDmz8tkXx5Jzuj2FqcFAssycLdkz5PqsjduBGJz5WKeZwgGjSvepFfPjF7LHxDYouteCAaADFA",
  "key31": "66b7muLwBT5s4saaYTdmL3Kx2scnKvTWzuUZ6c1Gy9MqfJwGj82RC8Tu1Cb7dRxtK4Mh5i82UK1Y8tvdFQppQv9E"
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
