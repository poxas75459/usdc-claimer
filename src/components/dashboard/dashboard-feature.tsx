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
    "2qvkuvb8XCQibyKzLnz9DbA5kSbdyUANmzAU1vuTaiQNnpZf6uu49NMGX1zbMpGAxYv2EZsCiBaja3Zu5C4G75sV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kXFUiwkufcvfBBWm8PhBFRDgevLDyxniwNrMcMCs9B5VdCnLHUuSo6qMXX9cpo5aysgXWaz4cFzgVcvnDMMAVsQ",
  "key1": "3FP66e53ZG4UNBWh1JXt8k515RGopqkA8B4ykJop9WKN7gsbFmga9V2XVNRa2ufiSXTHNRHJEYrs13Ecco7bvUHs",
  "key2": "3HbEcFjPW6xe6wzYaaewmGsUcr19Dy99vwiNddjo8Jh68MR49uS1tmzgTaXHxZ8SLS6q4zqGcMgMPrshJffLbMdw",
  "key3": "3wdGfcvoSqoL4nstC3jnYmrkRYzy2sCvZz9gcpRePtgwp8PbJtkYwELE5tWbd4MRSUSeYMmzgUUqjzLfCsRvyimT",
  "key4": "25kr78JjEv1qAuUmZtF42CWzvzr8g8ytzZcqTKUVtT8KKiawJQJkAm5cqcUgZb944DSWoKViyMJg7G1GzBzbdFu1",
  "key5": "ZCYbsYcDr1TVTkXMAGyKpRGCW5bmiT4qpTFqvVm5WzTJPXQnr23naegDho6TSGBmbvt89dbuEFDdLG5p1pGtSde",
  "key6": "4Zvjuh2CuVs8X7VwLL3MUQqj3jTWgHhDPw8VuniRKN4DvZP1KRUTGPeoG7pva46Jj9DGp7XkD81Q77uA8ZbNmo8r",
  "key7": "4BsppHJYiuhgue7jP43yCoErqB8TpwEKA3wRCbG9G84oz1LBHRCMDUMD9x7PCSpQmwTUQqcPQtRr7GQm4AeGBREG",
  "key8": "aKXgCUfdxCrCo2ytDHCoLmoosuNHyM4UAhUaiHcsjkwcdmGdudVdA6uaKeVEa89MbRzP5dwwXbNjyR8v9tcd3GW",
  "key9": "5VQuiwYtezR8GRELXtRjZt9RCsaTbraU2fGor5cdburiLeHZw6fUBiFsZkccnQZBfJf72oZCNEiBcg1Aw29gas7h",
  "key10": "4mkChTqesLEQdKiLJArBcXV86BPRTUsTLtwa2eb6pfbVypwLEfbRt2owxKQVrauh6Z2usJQyasiRFkANghEoJfSu",
  "key11": "49mfTPRXdAsLSUefhRgktke229PvRdjU8BjZGUNUQ55vDv7NU8TzdMVNVwf5XLuYyS6QijRMJHbFtCs8zxgq4LfN",
  "key12": "xzfefj6pEQURtEHtgPxAgiKKMUQV2FKQUzjb8B6aBNVPw18U92Mehgn5VbuhAWwdnewGuzRyWV5AZZ9Sd6txLAd",
  "key13": "4pgvQ2fo617aqA5TacfQvyYdPWwde7MbXQcLKqHfbRJsVq2c1EBdSaoNG6xQzjiYq8tNbrdsPToQjApPWFRUFDTY",
  "key14": "27BMLpMKKMvJCCajwyTYqJG24mJCfqkPcFBMMGJCaKwohGbCw9KJNRh9uph8bGrdAepJPQY5xu9D4okDVKjpEuuH",
  "key15": "7foWTiFxq8Znp8opByuFJBR1ZZ8MQ2kti3QcfR69APNs7LxXBqBZS2rzfVCVRaRkWRMSdyGhyF44r4Nr8EAjev8",
  "key16": "4CycNUGfqV4C9KT3WwF7ZB2Ci7U3FYD9TaSVzhfEJUqi3xdJjuuxFGEs86DUSJUmQQ2LD4DeCxaBS6jciUhkS3E4",
  "key17": "3AjguxvExzgdYJRoSi5gmgVEyvu9kER93vYqqX98V17PFobc6qH4DiQ1vLduCFu8ZAmzXQJZTiCpB8wNsqUFQZo9",
  "key18": "48qKjpFuWX5mpxm38gTLfVGSFpzkiq5TCPPiNMiqubBeNv99mtGWxoE3rnvZdp4otDuXDBgiyyuVkrWDriNEEp7",
  "key19": "5J937MkxAuVwDBGKFrE3Wmej49o8JnH9SVDkeaDjLV6PoZ3pssWu8b38STYBUNr8p8PJh1Bd2M6ZnF1a9qYUeA25",
  "key20": "shyxQUfbbaZbZHBvk4NkTNsMK88jooSvPHJRi7E5CVqrdWHcgBwZKtei3csXYyUu9V3XAYaHHMC7egi9oz1H3qp",
  "key21": "52j25FXLa2yjv7hhTBjABxgG5ToCZEuqCSRbXBkMgcmAvQz5wpBGPRCrSyESALzycH4zLoJnRuHAWnazo2G1EyBh",
  "key22": "58G5KKgebdRKWMSu1uQi6a4eXMPrrXV2aWLQBs6xRG6nZsHpEacdC8ivqSQVef853WQsyH38Bhmy6wjjLSaPLxqo",
  "key23": "p6HkWjUpYPTMXy9qVCA29qHBLgRT9EVs8fTnESofSYJt24aprGT9HG4RN85GuwUTCmhDevcSa1ncxiGJmTHnvK1",
  "key24": "48dG1CrvMzT7HY8MLhgW8WV5ESqfuPZQKExsJWbYD7RbNGjfZLB5zMrz5x7cDuCr1QsPCmVRbc1qXH7Pe9or2WsM",
  "key25": "61isd3i15H5CjZHpTiXrzxxu84fwWWzCrVh1kun5jGb3xxy8o7J2CY2FZN1UbrnJcEtpYUmceB73BF2ArTttFStF",
  "key26": "5wGMYKeyv65UZXuYWtvRFrJnN6g28pFM9k7QDEydVTTrA2dEd3DNyTKMfMgY6Fu8fwNPCdRD2jK1LWg9HJWD9fSJ",
  "key27": "3nDZWboHAfsSvNf8WD6Uu7hR6B7wKQcgFmi5Hso8fMA1FT9F7FSVYAFaSDhF9u578ubAV4we2omfW7w1fEFTj5N4",
  "key28": "4wJz2nCMpx6VfGEArFLeVYyrzvpJxbK9xfmaJCVFg383vai1pqT3Xsm8LQ4PPjqYcN78KHMqtPB6BL7Nu3oXXcGq",
  "key29": "2uL1U9TujVXeVxq4rLMW2qYLi8Q1G72g744dn88UE48V6gWKy7FBsVvMZn9krjG3mye2rUJfvLRiLT99a64Saupe",
  "key30": "3sFuhTmsUZx55o7kyyRFrNJR3ZYpMfjwYKZDKW1cwghRLFHbqc4P7ZXVp1Q6rmFdiBQGLvUxABwbLEmgPrzfaa8R",
  "key31": "3JrJ8xpbjiWAv4b69HBMGMpiSQsHyn8SLhkBeBHzUJMqu22TkVHnrLuGXVz3B7tkJsU5F5oerQ27xhZXaPQvCD6x",
  "key32": "2F6nGXwfSjtmi4UCJcKdDEDfnTSpB7wiQ47v3mMMsjNC9yS2CVwhLWtQ9ciBrqL6A6thh6WbUGbHmzJVGhYoudzM",
  "key33": "2DZFzqDe9zJFsVe8LEotKycqngWenuzioZxvCLuR1mUeZZv1L2wPq1u8DNRkSphQpbbEgRWK13qPu9vrJUZXkM1J",
  "key34": "44JrMGzok9J5BvC4mBcChMVphhPVZUzUyGgCUeTmVb84XynUmLRnwfVfR8nwFBS26c4Bi5MzofsGykAFtxBKKZn3",
  "key35": "3MnZSG4D5akWrUfAYWUv1fD7Gv1Npdn1aLtgvB8SviMBRF658SnoxY7pN35dUC7Lg9jvY9wit9m3a6gSiWtNXwDJ",
  "key36": "4DXh43GMbX98eLDgdd2ZkUN5L32Q6Q9M8wmXq6yDoyURTWHvhkDoJBtxKbpSqWW85xG1xCDUQT8cXBzqe1Sg6qET",
  "key37": "36rTNnRGusGqew7Cbe5QWnb8iaV5oJK1JUuQ7GmU5gKupGZPXS2uuowrYLz8u8AjRVz2FNY7mGz55p34wkLioRi7",
  "key38": "5LjKSn9We7mXiHLB8ddGN26NvNw75rwyJBst1JghM9wR6a8kJPR59jmrghqFiVDUBQr1SSxG5hYnTeoxqayfewcF",
  "key39": "5yKaBaKgJtWn4yxNiMJferAY3vDvPNqY4YoKg6RK35Pfj8ueALqNfy2erCVc1jD3vayEfdf19xrJT8W8DcWSAqXF",
  "key40": "2mknuvfBXznvurKkapYHLua59Ed9Tp3bimz5ZJEL29xwpx3APP89xm4qPBeLvtt4WmNeFr1Cj1xYumngQpDSYYFF",
  "key41": "3Dg2X4xoEGGSf72jVBVygeBJo9jTiw3K741SeXyn9WcZ37bve1RE3DVAkncZ9hyUfynj1ryvnwZrMiSgnhJgG6mB",
  "key42": "pB8nNBd5okrFK1h4AoZh5UZQSLFVvdNMinAt4fcWUxtZMiJqHfP4uquMrcBRZnjRgupX9zhL9AuroogeYU6L5pF",
  "key43": "66sepxUF9povDaWg9DCcc4AZyG2UYNN9xcvzuxWvpp5cPxoDotygE6UcGdGQ2udMQo4AMjqcXeZamTAPo2mJfoXH",
  "key44": "DgtS2BEv4j4twJUXLSK7n6Vor1vTuz1wEErQLkWVbUwb9J7EhAHeMdsfJBQwSAQHEAgS2nFZBQ5RtBcNcQnQ1ki",
  "key45": "5S5ZSAVQpGau5eNsd28uLiSM72vK3YeDmUgrEHbjvGfRySABrD7DHR8obHQ3vL6eSuBAUgQ6v3VD9tRAzphgj8XJ",
  "key46": "5pfBmsoN9vNAK6PnFWWAgtXRZtNVqtzBfWK9dBRai5roYfHnMLjxp3iPHQU1wBdcWT3WzW6JDb3oCSpynPJ2UMMc",
  "key47": "2ca3b1PAGtMGVDqJn4NyjG55sDv2JptqjkQg8RGCE89toxGWKfueCRuMCQATZNazrU2wV5gcvP37THWQYbrZL9pq"
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
