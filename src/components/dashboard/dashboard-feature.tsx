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
    "3EDdVtQjvfPU6ZtjHBrKN7dqFdmN6qM8v1fAmrK3Ag1yyGLf3EgLGnuQ2RN2T2D6M7qrataHEfj48HoPrcQTaJKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxR6sbPerwQHKghQ5Tbm6RGDGXXsCGgoZM7iRc3Lu3trz7tfJsMNNYJM56BiLCBMiBBQjQ7mGWfzVmUCmiLN1MC",
  "key1": "4uKH4XMSNyzsVzqQaaYy46ywWrCrAS4CadYh1FJDj9QyEdRUQa8KySGvPCmfPehVuCfZWhqkJWFyTd5jernoK1ti",
  "key2": "3tTQDkfhJEqAPZUMH4E9gA7kxw4yTeTk63NbUctDLwHqM91mjg1sr14ya8NxYFoPxt3auoGnFqxHej3Bygqj8Tsc",
  "key3": "32Y9c8xMkqhZ9iuRkFaUyQwbPAkLHZTRYXXbT6jZnCSqJb16Xsdi3QySAfQSm69hFDcrJUpBnxjzzQfJ7QjatyuU",
  "key4": "5CYhxRqJeWwydypR8UshXb7GaxSDcHYQDAETd7GMQTTGstQ9u6tK9n9Qo5B2vRkKLvG9y2sWPg73Mb4WuX6EmAUj",
  "key5": "2jTRrf8R4MJGhSBgpmCWAMPcVDhia2kj5djj3i4X4LmnCSgqGYnad78xDFsPm27DjGJeoQywLtm8zM96Qm7kJwXR",
  "key6": "5tknFnF1Feo4Fr53BuAr7Kgb57HHzsUULaaLTrqjznCf17GCwvDNGbDs9TG3n24isepxMGsAVLW8LMnK4YDFd9Na",
  "key7": "2WsjxBuuJFR6EsUTcJ2AknHbtsp7MX9yngW5qecyJrYUpVJLVa8PqXsC1SRbHiYdGXtkYAG62L5Uvq43uSaewg29",
  "key8": "2qwaFmJnSnoxRm5GNRsT5W3FTLwKVtCWWrWQX7HKzdYDPZ3qeSK29hWRVvznqkdLBy186cw1V9XnJAcHR5Bed7iM",
  "key9": "5dSdrKkvKga71t9yBmuskN5bEsbVpc26NG5bbCHzyrqBmrdHhq3BPiY4W9BHx7LQ5Ff454Rq7SUL6d49H7pXEU1h",
  "key10": "2Yx4BVMukbkp25nyrMR9Sq19fXs1wgfb85C1Brfzwi1LbjaipHbUrF4FUryWpXgWhrTFCizKYmr3pTyEwVwFyA47",
  "key11": "3UVAuKeK8zkXfskFPZXGFwCwQ2YwtUfaiHQ4WDvfmHYrQJ2RVScEQuPkEmrutCbaUSgcqXsBHPLGqVx3RAB13KZh",
  "key12": "4qJgHozH1b6ZB4wiMM5i812F6gAR9fCQjxcZQqCBZKtPxaAPbajodvoacMDp6kkt3ptaLMmUFhYLxvRsYQuDNXcK",
  "key13": "5ossoqcG6gfbun8dodH8r2fv1PioAfwhC2ZAvztJTLdS4g71EN9mZnyjHPAnVovNce5dn5Q5ZyYwZGrweJctimVK",
  "key14": "jDd19APKwTrqBdt1M4CcKu5d96wvxvXBAr46mRBwkHXuCtBQqQHnH1q8cfX3qxJt31vmufHnWPfo48qdn6HmpiA",
  "key15": "65xHHHZku6RnLGkfS5NDPxWH6AbbTmvGo79s7FnrruPUFSULKcxwrPy27KkWWFMwLsajif5U2RrQDYHbJPyeDpD1",
  "key16": "35HKVVmXyUNh3FRoPmjiVgZCRzwqBYMKBGASxFfUE6LXJ3KCSWDm7Lj9kZdqstMnqKh9SyqZngZqbubj82urfjwm",
  "key17": "2FgCHSuJgV6vSZNvarUXZzNRDwAB55hFpT3oKXVE7n6ri7r8cSXTgyxiJtN5Bst5CAzU7hiBeaTUx8Y5oUsfUCGx",
  "key18": "5avA3NGoLVKoo7w5hDPvPgxvTgFKojxc1d6j4J2Zin4HaqZJYGfMN5yhUit6YWpFSnZXt414trMAYEv6vGsU9fTh",
  "key19": "532w5jh5eZgvvG6sjfygddhyCNV2NJr3G3rqps7Nq8AGrYoEgg5sYHzLSQQ5grSbVJNpaRAXkmNHrouAP6k6PCqp",
  "key20": "4EHe7TFwbMBBZsiXqPaFz7HbpzF6X8nHigj13PePs6Tabtx8iqRbHRYi73WrmHBCDrKQhp1pueup6E1WUeNTVPda",
  "key21": "3jKDMDdifgVDBQnXt4t8W2hM9M9PW5Wqw6udiSgBLDP1ZEn4A5yhi2bbdEWj2H32wCkvtMd4ucDAZtV2aL1eKmsk",
  "key22": "4JkpSAu7MQoLcrUcLBZJffAzRXbPjJudtH9yvDK79WHZCum7S8a3ohSp7WrYhh342vMupM3JLNdfedmRhMzV1vZC",
  "key23": "41N8qWey5g214W2ACHzUz3KVAoS9MvQWW8NsRWkR9HAhxFM43ALRRxeBHfqNvbKLPsnn3R4ZyCTJxFVJmhB8PFjW",
  "key24": "4edgxm7VfQUESryDtHnViDZFTm9cYc8SZ5Ea2pTAqiv5SPNc4jPAdHvi5M97GXMVTJdPcZhzXRyN3iFr1CpcDVN",
  "key25": "2A18s3XJQjYogHgWBLf8xqZU5kDtTJbaiudZRGtYtiYRwmqmvfg3pqnnTGryrjc9K3VNCmLuEqDE2DCb8YuRUtZz",
  "key26": "34oj2jwESrNC3E9xmTnQ7FrRh2kFWgPTKDqSw34xKs3Q6pKgtN1u2Mb3NcaHWybnGbsX9pfouaPXK5eUfwjL4ujY",
  "key27": "2o167MoBNJx9xppcTvgYg99SLFmCoGxKfAyPTLZjCxNTJxhSYWvqCLuhKpGserRzpwqQkc9zzqx5LwszWmN3N78S",
  "key28": "4U9Hen3u6DFisLz4GpxfptLWMQVddWS4k7ADDc4oGsjNqjp2FQRAWTJp2X8FJ1zBXDxhQiAxuPv4Y1ZMVsUdaTpZ",
  "key29": "66AxwoknQsfYUEgTXd8eyQT2p4YjcCaML7BX1opRyWnFmqXwve6AyxFFPgcHVAPR4fBrB8TzFnQRofb4aHNPbxZt",
  "key30": "LQkBU3DF8jxiYfhC4hmZgazcFjFdkNgTTNS5c1kDjxUny5fkDhYKERabB5Ff7gEqhtq77PrV77ShPv4jSLUVEcs",
  "key31": "3rCfb9p6iepnXjpucgt3F8JPEKTQfZ7DeuTf1VPEDTkcTiq4T2PDAJCCawy3zo1dZDEwGMrhJrAcZpH8yJFMLgTM",
  "key32": "2e952WnjKzyHqxumsw8PX112JbxjiKVyjYWhsofruFY3vUBzpRCqg9yo8aDVKJf7ywzckV6rGKKnqneknee8cPyL",
  "key33": "jPFvE6Y3SfzGFdEDVShKvpFBE1Aq8ewPnReCaCNquB8RM6gTk6k4Us1HRauhcxDmpDGbRiHjmabNro479ZJg2JZ",
  "key34": "5YsqMUCp3HXAWknQFGqwYn8W4YVjrVb5j5vsjUZu8PusmbbZPw7BuyZQdPpK6Cv9XjQJeLSVhbJqe57uyq4kfkTX",
  "key35": "5Bwg8LpXjanR57trYqYLnBdKQjmyHYeKwiKpbfVuawZZ7XoahHxCacor3p7zLs8F7wxMetjgcSS6GK7v2EJEJNnR",
  "key36": "2HGYz9urUcU9WJtrFkXMFWTQGoZyqNdwE5uopHAkVouV1sUbRvxmLtBzNzuMFKbpQiJixWjHW2qio13HbFXUofKi",
  "key37": "ykGwyqbkmmY54eSYgWoaY6EkWkPgmPqvuHcCVcjw6fXLUiwUji2TGpJeUF4iLfLTfCJJSosWA97f1UV6CYr5LqJ"
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
