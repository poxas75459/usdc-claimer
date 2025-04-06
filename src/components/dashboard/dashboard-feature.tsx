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
    "569y7W2YuAV7fcf8qJ35yXDHWcduR7CQ754k211a29xr7YaWyuDRtDCBKESmmwsxf5J1mXiqvLepLZZhLUHDKmGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BAGjnsNYrA16WaWpXcpacidv7en6W2s5MXLSXSFnqSqoo43gGbzg4gq96y1ZVkrWk14vF3VSWynGkq2nsJoEmv1",
  "key1": "3rKahgB4cuojtXg3SMH1dAnZ7sfcCKcjb6MrYKETCy6hAqUBesbwDLq491DUddX87wB62vBf9bgG58mVbCH7M3uV",
  "key2": "LKiq9iRrieQsTueujxfhJa2RQXLHbtTaRZU8kVYgGZ9qSd4ffcUrzufCpJFdPcBUVomrA6iSLz466eWmf7trS96",
  "key3": "5yrtaQyZq4g4vnavhZSTjrvqmvdXcW2A59r2cdGcJX2ZASGMuP64Akt1Nx1pX8gG4sUYVLR6TFAseDhNMVV4Uiq7",
  "key4": "MuCZemWbL9158kJPYuKQKuy9LEw6qWr4cNF8dKtn3wQt4fuoL6zMPtzaznxbyJfabwxTvyzeLQ5UnvCo56oJGDa",
  "key5": "2Ny5rakGXoaoNJCp7T5kj1imDZM9QyP5xXJZJAej5besmdX1rcNvhxqAtCSdKDx7CVuJD9YNzeW3vigvmuFaexV3",
  "key6": "588A8Xm9cAbPVJgCS6qqyeRqMdmHPmw7WkidB1wZhySyGnpkG7U2nfomgNTEHBjByWE91BSLJFA4UnhpXMzdAe8M",
  "key7": "ZpfvvgUGnY1ruMuVkaXfEP5MQ4v5SN4WByeoJWaetjs9t3orV9zGxmizr8HWwZ7q3xyT3AvS2Jk3kdmK1GevKp1",
  "key8": "gxNDrse1pSfqi2pNsL4j1VgCdzzLUQrso3obwtsdwPVTgcoTYCnnU6JLR5js5zBxdVjo4khMTHZSqZS8ZTPg5ae",
  "key9": "5XLLeAhxE5HWkSkFvGbwtrSvF3J4fNHKZFzWzHFKv6vEwSh8gHqzaZcrerVHhRzLYxVmTs7SQNN5iJwuNdGQhV2C",
  "key10": "4UrYeGjbdTw2L5gfMsgJU4xCfN8rEBnvUnJV9eeLjSqDtT8DjYxUYjq7Beak9cGe4zsmafLfyCXcdS79NWWzJeiJ",
  "key11": "5pwx4k5CBNcKTQpmPdVtxaR8Rifc1kgbZYqmS34Ww64jKbC5zXATgChJff1XLmjxY4MbTZT35WAsPRBd3YhRNLNX",
  "key12": "5WHzWJmYTtLPvJVqhKDQzD1YopfgL4mQnTQBL774HBsZksPUko6eUKdwMapKCSjf26Lb7VAMS86VJXhycmDsjKQT",
  "key13": "37Z1un4X58gEqGE65n58vEdzsF2yMie5FzCgUfUJr7hUxemQPFLc98RiVVkH51HJo6pG4Az3Czfm1MDfphsj7Jq6",
  "key14": "5RhRW2FXXUAKPyTYgVBb7y7qZ8A91AUEAHahoV1rDJYiaXyzomSnMFBCDGMD34AhJ1AkMXHZVEorVeUJvqm17NgW",
  "key15": "4WPGnGH6ckSgZR9B9SM4SBNEjbxYFcuSfpxpReagvhJn2E96dKSU9gj36iHcnzKonekuKZWmEnW27ZstMysekpcB",
  "key16": "4SX444C78ryu6Cyutcj7x252fD47cr71WCT1TAFxeARsnv5c9Py1hhRu18T5t4aTfQmyJTJvHFHWBDg9rJkGcZnn",
  "key17": "4ypR954Smm7QxgEMjpFywC7gbwLAd86hhuSwVZQQv3pdrz7Cgq3sUayFrCkFg1f9okSdpPciwwA63f6jRnhTo6yN",
  "key18": "5xJut2MefCYfJgsUm1waZYR9pEepBmfeZ9V4AL8PwstyQSaCrU9QkMAuwGBTA7yvMNLtw5Jsmx9NK3TTJSVF9r8A",
  "key19": "2jH46JnQPKUVyHW6oEc7j62HE5eUZdZ5D9gAgo96fP7rnMzmogcKAUYmdYLkFMohcj4PTHptbxJb2D4rAz7uQdEA",
  "key20": "2VdTVWBwP2oyMXt2iV1EUcHfVMkSdXXbjRySKBN8FY8puMLj5wtPEgER6wmf1mB7QQkSuwJ3B8QcFYrh1UMgCK4Q",
  "key21": "5HDhKFzWr7sJBFioVwB3MVfm1KRzfBwPkkKRWsWEHn7s3ivSY8aRH3omsTXrprMvo4GHk5DgSkykvS64UvCV122w",
  "key22": "4tDaE4Fn1pgsD3U44LGa7Tmag3ae4BScDztctGRkJGjRVjdd1sN2cmmbS1qneM1LLhbCzsiWTD1dq78Jq18oAPmQ",
  "key23": "2JpRMaGHKK3sWXekBN1M5NNd6N94TvAJqRVUJj5hYyFrqUdGXcL9fgqcSR3eZzH9jNVzTYvAUjSr57vcQDXaNDe7",
  "key24": "4YN517XQfiaCSRyxQj9Ngs7AoJsGnSCrV5rtgzxF1c9ATEvqja3dhK3CZ5Lrg1mgxvsPkERhwmFHydb4wjRvHHgq",
  "key25": "2nhkTZVA7if3YyMP6dkApuMWxKZEHNMVCDyHtr7WmY3C5VoBtjjSM2aN6WPqy8zmKGqW9FJdjrYmjC17zjoMwUFC",
  "key26": "25PZKokrDtR3RBUDKQz7p6pbqW8pybevLLqFfefdcXt9vpqfLV8fK7iqcLGcKqhL3yMfEshMFH2pv3dzbhr7ATrF",
  "key27": "4YE4j8ooUMXdPQ5KAcFDyvDbtsT1mfvPhzZ4wZBRySXy6Ma83LxHpSayHRXvKb3pesfQQZzx2uppdJkuCgJ3fKsk",
  "key28": "3RAgQxxiFT3c1Fjq8zM8Ayvn7CdQe4RX7XxrPystsBvAVSFQHAaMzXky97prNoNM7SSiS8pyH2xe63cvgGFE7ZMb",
  "key29": "21Ykh3tGqyV1aha4iR7gxGtvzMYWchZTAdBjinyJVfoWuAXaXLaR8i2zUWkySC2W4ZjrnQscVodCdhCtZKhHqz5R",
  "key30": "2M9sT4Pq9vUSmL5EYkhvDsiQKB7Kbjw5oKdP72DNhsr9uJutocE842iPMaZUfBh6aLiGFt66iHfSCkkw2JHPZi4o",
  "key31": "4L7vreQJxwaJv8PyrbkZQf3UiDNwTcFiJdcdSc7zpgbHBM9v4BDpLtAHomJpK9yp333J1W9G7UunBraQt8bTNYtM",
  "key32": "krMwZR5TAW2VFAQKV2CHTmEeoWzb3UMspxcLcaUxNThRKrWKGnFshRbh74vqUKmvtS6k6pJqe1bxpaWixmAcQc1",
  "key33": "66c5znjaSTAbrzTNsW6Y9RHGPmbEpdRu9VCiYTFACdH4pqx1mDxqRNPURFDjBfiBRLewY4bwegZfaBMonwr9ZrFw",
  "key34": "2LdBxTBYBdhJv9tNAoXYY8U1m1camJUJoLWWgihB684X5skH72RtVELsyzVqEC4dkEyE6jqapyRyM4AZd8UU535N",
  "key35": "5LfXXaRwriwhKQFufMBrwFU9DDF3g8dV8SzdBVRfDsJgz5Z7VzbNHU93SnVjQnHjoLCEFu8RU5kUVR3bM58mGn1Y",
  "key36": "3Cgxbs24M841HnyK8Nc3SyhPcpEEJT3zwDyVKQ9jVmURZ48tJiXAGT56Hh83dY5U7fCD9tCxpYCsCFQxkgwR8VmC",
  "key37": "66BCqw5hUHoS36ykAUfC6KREdea3w3mrrLfX5mBg1Nor8YT7kTMsoJd5S6Q4BuyYJkQYQ7ZHc4E5GQ6EM6ftSCFT"
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
