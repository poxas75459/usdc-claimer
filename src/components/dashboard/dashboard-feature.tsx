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
    "4CGBPxiJPwVMDzBYQpvj1LTpF8X78zM2rL57FnKQBqHVY12wZkHZTfPDEX2mu5gwsZMU3iZacnJFR8sEHiLTfc87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mCZqtGm9LaecFnFVgWcf4Ey6LfvcorYAXXV5tXytacixhG6YGMUTvzjKBckGKoLZdi5yxP3QdiLs3mx8A4sssXd",
  "key1": "2cP4Pi4FUuWW9qYofjmYuQyH5MiCEqhZSsaT5CQSJ6aDXasPxahqbXLbyMWfZr9d5tVK8A495itLM9ayCKETNSW6",
  "key2": "3azegquFQBgSvvxGY5YAKxiG8XRESLXAjVDgyeWq5Xs5a9f3atCY5QVVknbBjwhyPVUrPtJE2FVi23DTpRDifXgv",
  "key3": "L2qx9jGD46LPPtXKqpTD5nmoDNKeLGSskAn6FQ33p5tA9jNgrpPsEsFcdV5v9xFyyh2HdyFPrYtUykMahiUqhbc",
  "key4": "4zZd5K2MBos8CHi5Fbysw6uqTYkraqNH9fZAPsbx5rr4YnQgunL28HZBxHG88dcZQRvVrzeqs5Mb779vcahcCSBV",
  "key5": "mhJYBvZzZ392t4yPnnED16Jn4HpEAey6WszJh1Gz2wUyTe3F9yqv9aVG8WcwE6zQddP4wS2QYhKsH4NqyxdHZ17",
  "key6": "4pnAyWY415xQMxbfeci1tXhNrVjCdrNafwpsTyAhbBYPcm6rtr4ZgmJEvJyap46C1MhHDEyD695k2896QeoQXPp2",
  "key7": "6WKjumTmnT8tBjjjvdUwP8dPuQZeHBK7J1GfWV2vknXb9eAuDwUMwceBzyAbck25zT2NX5wepTmTeftz1itFaxp",
  "key8": "3nbxoZXwarLVcbpaRdjwwvyp4wA9fM4EY3YRCF22kFe1oEpdSkiD9j1zGwLxDkv499hcTq4sJx3w7DwneCnRyTJ6",
  "key9": "dAjW9JEU9DehUxp2f4RgmA4bpbjyujvZBnR4NzdS9oxhC5KMwUPaQDJSuQZ3nriVC1obUi27Bcaqs8T9B2ch9Vy",
  "key10": "3SK4jAdmEua2AePb9B239BQFaP4jVLoAEPNDZyawrqJniWCHyKCmEBwn8bURi6xaLsnFugQ8qt8YNVegiQwhCumW",
  "key11": "34W2u1Fc5uBfYKGrqsK4o4BKz2HU51TkafhYdyAr7Wu8p5Fn2LVUDbo1kHLhpe9YKWyTUPkYCVZfDBdYcDdWMvyE",
  "key12": "2gnDRwRgRU3puy6L91WAjSeHcFonuaVCc93YeiqiKQXLhYQnLp5SsU31y6iDf2LyD6K7iNukdLZiKLY3wYkQqxuG",
  "key13": "4QcvpjhiTmuzZdCf8TCmHRBhj88NMaKL81Kez9V2CzGpt8b1wWnB3DNrN3ZkuPFPNiGycH7CiWZUzSGoDCPTUppj",
  "key14": "34aqBAG5WD8Gd933PrYEDb2FUKY7sQShbkU9RxNAFwdLEQmvR69XExxCzMZVANHmEvAPE7Q3gXFhHFFjNDFhafq6",
  "key15": "4K6E9iSGhvfuYnwR4KyW1pgn64W8RZUDbyqjx2drDnJaEZ2jaaYnytuxEmWMs5zScjoHPnLq43UjE7EJ8oR2GdWo",
  "key16": "5dDuscA4z21JAuPq7Xw45aBqMxuqmKaikuHzfnXpE9BE1D6CuiDoMSUHSH8EMN5ya78LR9h6e2sSFMUD8FSNpHfh",
  "key17": "2oYXeHQn82xSzU7ZodxMJ6cnJVJrZihHm3jyJkXb3FM6d5hbHXtG79TZ4awFLtrztiZtoXVKpSic4SMuj3MzqRfi",
  "key18": "3AGtCLMFtz3fLxnQF5pGoXDi3LLsQcJd8x4Wh7hpQe37WQ396ffBgxNsteTTZKxiRDm2ZWWnPLDQdQZyybFEKYYR",
  "key19": "2BQzRL4n7dHKqjb7BEzttXu4vidcVeD9JtxjayjvGNAd2J9X3L8kGPoEEYbTeRxBAWoQ1JoQdiHDjitvPLuJySB9",
  "key20": "2JWqaWWeKNihZCHBwUuM8uZF2Gfs5qZgoUJ1FEQwBMwaM6z8oGJqtVaHxyC18s7v3wnaVoNXGToHBg365cjsNBS7",
  "key21": "61XC8cKFqTrotwcbXyQWcZyawHkRLEGaCbCSKMwv97fsFvyKcrER6buEJWmQGnqB1sWMx3m9hhQSnPUQfv6KSQg2",
  "key22": "4Ed6voNLnMggA3CNe3no8LUwJFtoo12cMzeQcyVr61vLrecWxz1Gg4gyhzdSYVxnYNFF4TLJJzVSbacG3LL17E9Z",
  "key23": "2SqmfoJWYiDdus82KrKq2a9hz88sdBQyQjc7cSVsKQ2WAskhAnd4JqDxfj3xW6dbtU3QbvhtFt4Qj9ivLFpyV47K",
  "key24": "2ZJ27VcNGPwMMBBLwrrsjKs57i4mGn5Ny3MScUHEYMoS5yamaBQMd6kgZHN8GXXHv3bdwodtfx7MGM7Xk4gKqjw6",
  "key25": "4pJxrfGWRrUxY29EBwGAu4wGFyZh9KpWcCaeJn39dzaQrbPgTdRfs8vwaUE8be4aJhsqayZ9yPXE9dRmSrZExbvE",
  "key26": "dWLxSH8oiJTi4F5qRUUmzncTSdcrJrjr7YD953jo4gK3iduhVTZRrj1C2oXMCDf4bvYeB7aFUdJpjngxM5snjgy",
  "key27": "3wsaPuH8WGrKt6ihK6FTcyww9fFHfm1fA3d87MoyXDiGg2ftz1XWsoCt59cBkykRD5UyrrrpE5187v568LNvtTg5",
  "key28": "2W1dQj7rg5ijecgVqfmhV1HUcYpehk6dFLeRqYxW84uFcjJjc5EkY7n36KeVGmWkELAqBYJHQbbXvz8ZwmDbkqKV",
  "key29": "2VEHKPEjkWEmRsVz65cWn1dJ1CcdUydNogVtK3M9yU39mChfZ41Qdrb3vwymizaHYmzVwjWphsSHEeLQa7sdbboH",
  "key30": "Hjh85yWdkkU4Vi1x581qTPtBPN81eGTgohGuMjzpKPx3mDVN6upHM76kNCxdxuFBEWyUoCGgwcqPedqYWGuqK5x",
  "key31": "5NpVLWynkxSRoUD7hP8eRcDGFDFXzYmxh7WYzSZuEMayDje5vUsxM1nUMbcyg2UMhUMwu8pHahFbtCCiFL6Tb8nn",
  "key32": "5zA3g3h2y894Z1FtQgnxf1Nh8MjX1ED5gboVtM1w6DJjSFzhfUDdusEQr27pj2s6yKUgbvoqqHiJwvZKrRkTwPbR"
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
