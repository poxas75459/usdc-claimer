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
    "5xtQ3MFqBtfuEo1pLJ4eHLZc9B6JiNnZ8wcsjyjb5DbY1Pt59Z8MGMDaBjqs9duaemKda2xAfcQxM1FY6UT327YV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BGVCf2fmba8W2ftSY5o4DmUZZRu2aUqQsqM8PDSrVsfAPDqDvZMkMUZwqpxX6eHYuqcAh5oe9VpXA9B9sjvZrP9",
  "key1": "2pJkbyKzMdR1KJYkXx8rQbQjKL8CpgAMNEH168mgYaXd5xYUafBDvTFuETipp69qQJ2zPSFqKQV1orTx8YPaA23n",
  "key2": "2JzuptXd5F85fVAdmvw1SQrB3xjonVhrmKSWWy5K6zTgd7qzb2CV95AKKHs5ameiUkxLPEWRmtoqefSCZnxbMj3s",
  "key3": "qdLd2R8FyTWERSRP5YY79Dv5teY1QHteb5Sr4TBHFKPxJzqbPWS3wPaRjJNYpbjS9JmY1bvshfR3eZT22L8oems",
  "key4": "SVJp7HRNfrsWBrDDnAuohfYWk9w7A48GfVWetHvDSjSt5ZViEa7Sm3bkyoGD96E2fyrMvB6HN1ucTNhRfqTpYHS",
  "key5": "2nRD75TKC2af75C2gSJ2rwtxRYcG2rd8pbHy4mzrkYx9XCbZbTh7qnuydDFWKJ3f1VRuNvWfhXP2eBiLCkt6t2Fb",
  "key6": "2PGpDSTrRF6bWEFiuMuoHWtBe9QyswqUxHQbUXRMapgGzRgLQrzAGBVJBrscfYLsKqcwj2DjMMNBXJ5cJoiBaNgw",
  "key7": "4PPUPAeMHDuMC8yWnJKD2uvxeSTREs3c7kDPTkqbmpW2YNroFKkx22KVtNQhA5ctcdc3vLvbmtKJhfzfRPGsaizD",
  "key8": "3okCEFymz2DuodNWfWnUr8vvSWCnKjyePsBf8crFaQ5Q1FSd6c1HEHzW9LFipPoZxKnoVTWheCzKq6YvyASbtsvC",
  "key9": "2FkZgXCGXqNbiDkuDxQeJJYN74daBUgp6md3cZxTfVPJgCXRgjLN2PoiHvvFc1D6u8kaRXUaFdzNzhpQGbfXXkuZ",
  "key10": "2PuczEDSzeaCQxrfPgMW3D7eVhh2T7vKEGtaQSDVUttsBHapAhb28pf14BWAXcNLHVirfGeN3yhQm8RpaF9B4D8e",
  "key11": "2HhTRKYyTh2zEH3eWRPTYXUho3kAyGA1dM3qkRhp6FL7NFpKbqjvLZjvb4Xp9Cy8vCmz6Dh43qgqyyzH4xK7cjTT",
  "key12": "3NVjrFcTHo8WFF5NaFnePMhtoEPcecuLkeYJaBf4Ux82Cz2Wmqy2jsLxd6Xg1F7UzAaPTqDyVzbFyUEPrVWAtX39",
  "key13": "3XKXsqHMb9uFmTNSNvWb8mEAbQu82CdruCckCfTkfKnrWFWyEGoqUBbv3fzEQXSP8AJzUSrZfcBQexnhF5Tq33YX",
  "key14": "4kjovdMEcvvHFx3yVEuRY9ky84Eucz6KwqZLKUz32pEZU19B2xRASj94Ro66moJ1S6MLeBVEbjr1kuC4TiGww1n5",
  "key15": "NdpGfQA4XgxfhHBLrjUXU112eBDdgGk3HHvhefyG7EaVFtWf7hEPonjHwi9iw7uWhe2YXrWTzXgjxTKbMjLtQKy",
  "key16": "2ijcJsevjufydF29onSMDAHHvfFAWJCVQyBgLWe2WXMYup8EJqaXktzVwdPWuzVn9yhFD7kedJigs61orEwmEg3t",
  "key17": "4tcCeXmiG4uJggzhYLV6sjKSGArEm29C7cTSf5R4efFfWgyY3aFcfwHWfpzWsagHDPGWivfChtZrgFfuDwkmChbr",
  "key18": "bPRiZ3gjp8ECevHJVnVwBqjjBrzGq7NGERSzWWidsacNg5bj2MmR9ZnXeLRbaTJDBX9Quq94ww5wDf3zc8vZdzu",
  "key19": "5CGUdYWPMd7Ze6vHdX2qM9XSMeXBmTataMkkBhehwTnunmEeRdcpeuwbiZ8uAyEmjWDk6TajxL2QeTpqgxCuiYwo",
  "key20": "2f49iq1A47cTVrRrZcpt8ny3YyQBoDvt2B3dvZNbYNJBAZfWz2JUnqnkLtWQVpFTkQxAR3REtxYeLF4PBgMj18Hf",
  "key21": "3sJfd329Z6i5BruzRrJMwKDRRDRWojL2Kzujtattdte8bquHLbbiwrPEW72pRhyZfP4jNBUZ4BW8JCT3mtL8FDfk",
  "key22": "CEGNMWTUi68SozRAC8RKQikkg6GqYGZFjyVn7GQUw6WwzykajLEB6pUavNZNzY114GbXp2dQ5D1FoJi7Rjdo9dV",
  "key23": "2TmnJs3qXjogC1BRYs41wCNF6otKtzpYSmquC7TVopWQr7DdyNwXFdb93mtz3ozUE3qc69cPLqULmjkFK2ENRid9",
  "key24": "5J1TVvNRGUXcyfarCAecyj4qf4jhBwxAC6gCszmNhSYq4s3JngwSDdSLaeLvhKmjLfcn4yUQgde3inZA7dxjsPXo",
  "key25": "3xmbsMEFt9J8EGsAr6p3U7V92X5spqcw4M6RJfJuHfjrSgV7wkaAujtwEDptTBR6oJ35tfpm1Qup3BmxHr52Rdpe",
  "key26": "4uV6FydAUZzf2Ti2BE6LmCpziep3jwZJo1k9K7oSNt5cGV5r2dF25ygYayfYsRYc4iPnfgrpBw2WrCLb2Cvr4aSc",
  "key27": "4z9ZADDSdM2xVPdxkPZ1B7ft1QbiUZDwZZbTiUJxgV2p6aLH99ipqZ4TQH16FycE22ACgpoZi1BNpAqzas8yrcb9",
  "key28": "niuYaNbP9E8o4AReYKm3QYfjr6wmPSt24kbfMoSYNDcit9gRjydD4YPQSvGT2RvKCMava6Fro7cHZtQkRbEgKjx",
  "key29": "26Hf4cQCk7yz5ucNXm9Y2TjpZqThnVz2CAqDMYABjwj5P1YRzcxJzdxZWjdh4QvWUAABdeMEDYGJf7s1TGkT9Doe",
  "key30": "5SfZFm35xYcwFxjdYQuQgaDV9WauEfNWAt4MtRXLTJ5WKnRP8kEca7g6amckXRw23azz6pZmHBBgBKbpXM2AcaBQ",
  "key31": "5ntUvU666uHBK2gobvb38m7HGpg2Tv4uMfwnRiQYt3JmH5LQYyfwQtdNMUkq1P8DTSWjqrr3a5HyAUH8TN74cRLk",
  "key32": "63REetWERp1L4SgQkvH3C3aswzi8zQZtCutns8XwhPmYtQ3SeYNBv8b8vSbtn8cueDYSfbcqmeuvBpRhMk6nPBQX",
  "key33": "5JPSRan6VoGnxALYTHMFx9gRv71agJ8GNqyDZnXW7GY4yKHmL47B23C461abPKyNnUxj2FGQAy568e7uJ7uw46hh",
  "key34": "2YFKaaJSGnZxx2dBkgkKMKcgg1ao6vugzMb326tjbCTcqiU69Xb3AvEtqmp8h4xRFhMtA1qvgh4KAA1hBXgzy4gk",
  "key35": "4E5mH6aVDKLRpDYxua1dtYCL5h6T9pFCkhjGL91AsqmrqFFvBXAsBY3EFtZeEFmdrnE3C6EHMqFzZifLuYrYcMbU",
  "key36": "2UYXD6XTKY6AdvaQ6RCmCTUTqcSemgwz8AdK3jVJnKwTvaHWJMzZgH1S4jtUsYxKLQ5GohLJ1zbyCCZXbbu43riN",
  "key37": "3bn4HbDyTpdGRJZKE7RuUscAWw2dHtKgyUgkWqPKKBHkpzExELiQEkZN1wTrqeD8j5Y9q7RbW8HSzcRELDk4dAy4",
  "key38": "61J2amYatiUJHKsJM5g6P9u6rtA6Wotv4mneSCXyzVdBCXH9ajF9dzsnCUkNUNwMu7ivTcPJXKNqHLkSRZ5K1C18",
  "key39": "64NcDkY6riF866qNzsZBQWDinXp3sottiDvkUsdwhg39hBdgqFYWPhioeqNFsrwG14WTc3T3f6U2Ex3o1fXmfoF2",
  "key40": "5R8CmP48WXQLRWWt5TGmrWWfAjnd4ooKW1TKXXrKXWYT5ioP3WJRC4vq1sdoeeaDFUU2zwnUWcXq9Q2gEd7fy5Yt",
  "key41": "2tRbvjyJk295gBkuEtSNY9inVSYAuK4djEhVc4jWQZZwAH26XJyj7rHYUQE36s24DYMC7y2girf7Cgyxami6NCWe",
  "key42": "3duQpdyT5D3Y1iWFawCQ5LcE43rLB1DGo98eE5tLgknrWvW3z4WkuLH5QtgMpc3crV674NwwHb6S8kUQdpzzJat1",
  "key43": "2QAmcszE6UKqfgFvrhmgWdLcBrcBbPU6eAKTAMZF2as7vGAbEpg7j9Jq1bDm3nsEPbKvRYgEA6RRVVHnJYB3zcoo",
  "key44": "5Fs4oSqvNzYYdxgEQaWzo94hvGQXLBH5Ta32a3bg7uXbi7rGucNpXTbSnha8197m1HHj6pm18784afAhhUMPHctP",
  "key45": "4LPWEijB1hzV8DkWiME3xReEXeQrkW2wM46RpX8bi3ekT9BNtWqk1nDayD8gznyfYeiicmC1vyC2d1AbFxRLzajY"
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
