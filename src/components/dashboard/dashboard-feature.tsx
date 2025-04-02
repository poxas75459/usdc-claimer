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
    "5SvPfWEe2U8Qd3P8KRPBdpEb4zSAyWVLsE3ZbsDkkUd33vFZPfC8DGNXpvzScYyFBAZ1WQshTWyWoavZZnz3StKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vyHCf5Pase33i6mfFKSE9EJtyjsq6aNcBifbkJYh4NMQhnzZ2Qosg6QX9b5MQ4H79brvtLudQ4wSJnfayWoDn2M",
  "key1": "37GE35QehtNV58nvPH5zSV94fD7M2cFBkcsypcwBFoq2yi7oSXfiXbq4DMzP8VsJxGFei1jXc8ZCF1WVJ7PQVG9N",
  "key2": "3jh5puH1Vy4k86aHzvdgLpe4we596ww2A6VqhuoW6Ghb5Lpv7o7WjCwgWqEhbAFWeG3EeXiDr3T1nWtUc2XNCnHx",
  "key3": "2rAbpu9krvJqvvGxfLBbRU5CWGchTvjLwm4Z6ugCxVexoR2Zf33CWzxdHrb1tY1mTCHdAoRyWpts7LJcvysMTqVn",
  "key4": "3crjHe1jKxhPu11vUNVipukYPeoNoi3bkLZi8QhCTr52U1cUcCEMcnfi6NrPiRYg1ap4QDtqZBBpTt8XVVT3z8ZD",
  "key5": "2cbu1bUP8iVsCPvdV5hw9w8pRubH4RWo7LhwFQpp3nmTvbuQ2fiG6vSeWRPwa3sbJYmRVKQ9YujJbDsAwSLFyrHq",
  "key6": "5aDiaTeb1JiHMmmGauKxf8JHXe8ezAhte65MnnEDDH5Q44TPB3QvkHLybxihXkDzXbpVWAzjyd3nKKPxTtnUKekY",
  "key7": "YFxoq3WNm32UFQHXCQSHGF9T7ubZCAe7nW86NDcPjUCBpzdLbDzsdy91Y1FszBr1cRrVw6qQrpD7Vd8SYeUie3G",
  "key8": "3Xp8hhRDT2bvjbuFWEdpRE3xu7YCkq2Qj1odsCWcfvX7qRJJNKCS3gu33CKdZDKP2bFbpNsCGE228b7YSZ38eG8f",
  "key9": "4qh4CZ2kjzqvYkLmz5MowhrJaKi61QGPSMw3TFQeUDmhQj5ywx3akPf2byseAUifmumiP6QPScwLa7G3prE3zxmB",
  "key10": "3fiM5PfyMuNUNM5hycPQ1pryk6Wy9PeoYrDQRbbJCnRjQzWeKgap7331bGTDnDTuqfqfFpLkXgHhUYMi2GPvPEEX",
  "key11": "23xzAoZK55LdH8PLjieLwRjAuNbMBABYBvQpbbkuhr6NWaii6L3jPzsjY2rUWzcrLpdmHUsnVWKiZKeAJaQSyeUL",
  "key12": "3g14QJx9WsDbpzmsqDr8GFjhsYTPrvFZ6boVunAKVdcuSRyAkpLqDKHU1HsZKvfqpxnq3pC12cd28cg5fBybCcGT",
  "key13": "2N1YGytsktPbNG14sy5kmj5FqTn55SMxjbdXWPFpZmZC9xUBiZkvN2LJgLmJGJgocQ9SspEuxwSJJtXdn3Edr6m",
  "key14": "5XMZSZr7fDQNpVPjp2jcStjjLxeteSvCL2JZXddGwKrPLetVDxnDXKqiHRMYbZuiHrTutqS36s5hthqd63niFqka",
  "key15": "41yR3BA6tcJBo1ZjKE2oJeA5s6c1j1tZKkBoy8Vdt5zwnZ7YjrSJv3iCmKGALLWuqk1GWf85kHv77qGeFzMrxkzj",
  "key16": "521QdKEyMDf5Vif9x727fLjp88CXsCZqTQxjCW7Eo6Qv7QU1iEKUk2BQEMGvnmVw4duDt5Sx6LQZWgoQXkqd9rvz",
  "key17": "3U5Pwam9KQ1u6abh6PkDAE8LMVVg1Y1Dz7geYzKf8saHny2i5LMWLMWfkYf3rkrwQqLBeCXHsunQqgDUtX1K4Xfx",
  "key18": "47PH9YTSHkbQwE6qRXF77cxG9qoS7tDm4Hi3UCJLezRTGMoRkkDXj99VnGGALSnn2EtX1m3xSzk4g2Vzt3UaNRGc",
  "key19": "5KC3QAfjdeZV82mTPP7mt7fSXLVbBNjHcHJsqW3Luzq7dQDkzWCkZiNxBjkNgoFd7hb3R5HNdTtdsSmKb3xhfe5M",
  "key20": "4Z9XZg1cotcAE2CZfWHvVTkzus2Z5T4Zk8uKuAavDHEuK5K6QH8Wv6U6NYw1jw64Y1G558dFJDrz7XjkrgRDHass",
  "key21": "4ykUmSyWcWcJGkPBK74riigCJeNG7a4w6ivUnmJYR6vbuvqypDFu53PZMBwrdMZCy7VENW1DrugtNNz3J1jXjZM1",
  "key22": "3UVGo5QGG7WMMwBC8R4XCsivPnjxxqdK9UsJvtZvyEZnqnd8yAENv93WNmZx6yCHW8GueyGrY9r6SHPzgDZBkdot",
  "key23": "4tdF8aF7MpFt5w4uYn5yA7wAZxmfc67Don9cXWpqe3Es2V8SVa1a4csvoqPrkYRkfJLWiJ1VaRZAcxiUuHfGwoZp",
  "key24": "2YD66nPyUVK4hZeyDRXTUBBDQRbujxqiNs6ndouuF78sjqLzLWTc8u8D8j2dBhoemW9WyzfVd4ZDPvdjyUnK2EZE",
  "key25": "57amFrWSR8wdnWoYt5mJwMWoh6uMAdHG1HHEgyMtqVwu9262wZQ181UAUVxsNT22Z4DiNsk4Hm63L1fAPEUYeryc",
  "key26": "4LZSxJc9LY2a9ENbgh9qqby5Yi8Gw1fEjoiK6LFmGWqxvRPF9hpFT6M9DFrtDUxnrTPN2xRQpao5LRr7cqZYDGhR",
  "key27": "4SzgwLPuAQa55pM18swNytPNQXk4JSrbpzaaGygUvTxqpNq8ZhEdXnXRfJ3drLC4CsP7GvR9AWGQuS1jRv4onauj",
  "key28": "2vgaMEbjbF1Hq2hHjSkWLbB6F35W2uJCpHabjtuvkePCMTqSfdZzRB9dGkrf678NwjQtFV9XWL6rEs2h35gx96Cc",
  "key29": "2yjkuspD2dMLWFcztLRCHuFzCFr77CQVrmTeVwrYMTii5R7XnfxPAVVsstGH7K2XHeC3Y5gEiWV9UbuG1L45NPVW",
  "key30": "2Zi5aZxrKdVkQL5wejDWfYs6WRx3uqMxLq7K4fPuNoWPq6Wwb1WKg4po6ugp8dx67mrXZsrNNt2zf2xJVE4y39SW",
  "key31": "ZXeCtoh6VUwin8iwDoRSvXmBHEBAfN3raVSb3cxNd2j3SiwLXXd7Rt74dSeYLpB3bcigmo897NXUmjcCBq85Xmz",
  "key32": "4jXPvGbmowFdMzYM1bxX8aM399KdPn3bZSKPZgBBxAFvBpoHNtiszjkwoihNpsdrL6KE1WvMxZ2YZiXjCs9AwcD3",
  "key33": "2Uxqnk5T9pvbCE5WgL75m75P3LpSppsLGwVic9UGDdyMtLeAZE3orU3sbpWFW8UoV2LiXG9jaRbdk3LYkoaXeP5h",
  "key34": "whMpYbWDHdUeRRocHBmdqnf9KkcDfPguDBfpdtpoT4i4N45Kvhv4GHD9ajBps6q1rs5kdWVGnbjVkUi49BiZfTj",
  "key35": "4FHVV7jXZ6yWRX8HL1S431PTi4nhsvFVmzAnmyX89kbQwtKMkL4KBhT1GQgYMwCXq6oWDZNeFbBuC9kPffbyYavf"
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
