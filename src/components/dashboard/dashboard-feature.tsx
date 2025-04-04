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
    "2eREdqNamrasV7kqvKTCG9UefLYRnvnReLiyMn19RrJMLw5tLgwjURdb46WXYVsFbnpPHGXDhFt37xHSPJfxrSM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xXEMeVroSJZV3C8vNJynNq5LKcdbWdM1sUCSg6jRVqjtyKDQNVPEkkZVsGrBfhgfv5pYeWmy6n6jy4aqydPdFLm",
  "key1": "25WYxEoiCoYLpC9XcHo5tEVpeBiy4auF6ptbEPML52KpJ9MEhZm3qfCPLEJLRt5RQBazonzvUiivpyxjiQ7atBxf",
  "key2": "RkjTxUQgLvKwyg2hWh9fUsQe8UeS3etG6VjD696pwV1ovMg61KmwNKN8FkwhJ8cx2yLQPU2e821MdaGbQ2cbdYi",
  "key3": "3Gmi5GTWs6hMCj4s9FJjGJTuyXqxEp74LUbC4Ba2CR15CGW39prpUQjFpSMtzQcaDK9H2XFEdnjL11LB2LsfgpZ7",
  "key4": "3NUp2LLfci4qAVtFgBXtz8BKQftqpKvJLJ1rUz2CNqqaqkA6sDtCpjYqQC8VpSCgdRyCZkQyxNdJGv6WJx8mMH9m",
  "key5": "4sG3nePShZBCsNPH7fqpJzWrRDFXjRaHfNfK7UVW7jRYeuGipCgV9ih8JeKZG3LockQg62dwNBZNhKb9Y9yavvyh",
  "key6": "4ntKsc2ZoUkrZQai6b7kJ5SVCWJWZDrazB2wnETNoKZyn1oHpsPthFWmcSHKquvgtzcgr7pE3V4ErDFmJkU3Mjyg",
  "key7": "AyHH7kMfRzjz5NQh1ktnDA6889M4sYcHXS7499xuT4uzrfUm7CSjx3pzUcHNbtBCCc2LCRYmxKu4TEqHoYRNpha",
  "key8": "mUDCa7xMLmdsRMXxx8JyGaJ8eSJGsH3TFGuL4G83y5kA7LZ8z8VqhYNNtG1RTEcdgznekf17iQi6PQtjQHEgfg6",
  "key9": "wGxwEpWXNrLV4KEZfMdQBu5uCHUvT3SY64SwoDN53pkVTytZdtdqgtpLrNCh92sCQQ6hu2B9fvUqLJNNo4efVE1",
  "key10": "44BiRFDtu5jsUka5jYVuXYcRbW2QNjAgdjguZAYTjHJLLqgchYGhmDKeY2jrsq7gbqcycLhzEf9VMfQNWHoSEoQa",
  "key11": "3C4Rdjkdw7YCpsbs6gBP2EK7Z8tfhEmjt42x24DvzPxkKbGeNCJDhDUpJFLBSnskb5t2NKu8KnXSdUcg19fz1tGJ",
  "key12": "2abMwGcMyjjVH4fa6zkXpkGDzL5cVTNUicgCSDRC5sRYWCGwKQxQbcPFVSfy2trLDXf6h3DkHQCAyFfQRTJUdFPS",
  "key13": "cuUjeq5WzxeH1ADNHz4ZTRf71LCDivm9TxNijmvRJ9fpNBDHZ7KkdYqhZFV1XSBiYGACrrgfU1b4Fy6WsUKnnd6",
  "key14": "3VNqiJK56gP9284bRcboGNcpKg9vFoqrYzKHLsxUtcZeCQXLMh8pr6tcCcAwz3skY795HT8z3ML3LA7JiVpW3KVn",
  "key15": "477KD4G4kBU2cmDNG9bVh4DFZNaHEQrCN3uTbYycSXsJnkr5pDCJ4FTxeLjwvq5mrNe9bDqNqkEj3RH1FNya4NbA",
  "key16": "45hxZVcvNxV7FT2yRMmcYNGvyjBU5UeVNgMhPK6E3v3Y5o8ZNTwFykuddznCe3Y7bwLBpN18vqY76uRkGqs4NB2b",
  "key17": "5v9rfdtRhrsnJ5LdqgGij6bbPyfuo23qVqt2N2LJc6fiFwozRjuxSLA63pUYLdPiHoJzoGa6oAgYyKV8jCHGTsjf",
  "key18": "4AGiZzn62asZicP8BES9qRexUuvdAtR92Y2zH7wran2a7by4wuMxJwQmGhKkvGfpneQuiXWAd4MZgHfcprG9LrwP",
  "key19": "29CCQUjh8uCScKjp8Rf96vgHPFJYNSV6fW8V5x6WDem1R3BBAx3FnAHgYhCRF49YBV4Puw9oLbADmSb1ZNz7hzCF",
  "key20": "3tWuygQYbq33q9KbCe3trhAUzCzJXb87MKcZZYmd6RZXRu77JYfECDjUhzSVjRnd7XA5eGBoFZHzdpBiw8ybUoPz",
  "key21": "53KD9QFxdMQ4ueukDP1yLGyFEZXJhwQNToBn2SgPD2cktqqF9Tosfr5fvJvNLhefuLaGrkuzyL2ADzwBrcCZ4g1r",
  "key22": "2rV6GFTWfxzBFqmP1H2emX8m4ErrSUk3gD8Qow93raa7x8oydEY5asakeTy2qt8tPWFV4vTPswtzpRWJdYs8wksg",
  "key23": "JsZ4vRxWTHRQ95hfPjePFQLNVvXVv219iEgGheouVJwcTmx36K1qzrD5HkcUpjNQvUhVhkmPu4a3zEJSQBpKdrN",
  "key24": "67PgUccfKVkKw8HjcKSefqZsan7PHehAm9RHX3pZpaQt1KPE1hJB3s6Rq4DKybtgUgXSuMavZRnJiSeenyJ6JqMf",
  "key25": "4Zo3qno1VH9xvSsNmm9GHJ5BFLzHDehWwBwcYuU4pfQTLcUAhgYpda1X5EPQ3bGQjhFy2BFBZwtFEyEXQRH37dFi",
  "key26": "2YWbeyyqU3aNFJT9wrorAq3AzWi6wpmVVd6dZ1HByVEmvy58sbXmCWcUAFT3JuTVWdHJvkSD6bHmc7RjNZx8vwVT",
  "key27": "QiAWJ37UPyrdi8EQADdJ2pSL7v148W7F9u6dGGEa2iXzQWj2sjagSP62DVExxjhv7ddXxEgPoVXRjBzgrCAVab9",
  "key28": "487oZmiYxsoe3fQDp7gdyAJ8rEiBGSbwjqbHjjGooaCjuHF2NFQATzfqA9o5VhPFfmbwLyGukqetiwvzkUEbgK4x",
  "key29": "BB9ngJJKemvBkiyQ4ifUFMgCf8WCQTy1KNChZRTDmQWrteZLRFigd42ydjopGiYbCzEkUhW4CQLvJ7kALqRb3jS",
  "key30": "21WSywdTSvG35dR8DCdEeVsaeYYBCiW8m3EDrf4hkRmuBfs62vSE9xn2VoR3xSWNkUAtk8EVQqKmAApbsc78x7M9"
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
