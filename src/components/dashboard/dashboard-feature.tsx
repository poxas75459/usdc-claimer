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
    "5wYUqLfg5Baam4wJCV6AtwPQZfRugtoe54x51Uh16vif2mnEKp5dCEtf9HpA5yx7KgkMZ8KmZiLjichYb219gWdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Brq6Tm9pCW2RgEbnADkADACD8cUHzub7jiRAkJ22edfAW4bm1RxenN9UrtixEKeLciKA5PEQmzqDrdJJ7e37PE",
  "key1": "4snfwch3v8KAWKCRZtrCH7EQ9Q3XmhrQ2ama5HoZv12XjxNFLhRzQzxpqzEe2RTx5S7KhPRjqqGNNaXJZiZ1aYmL",
  "key2": "4rxwuxwzABNfMEaAK3cqhZZahMFdDHiyyTYZFp8NBvz2e6Kb44r5nRTJhWMJqrMa8C6UR5hTphujzDWgu1fij4eG",
  "key3": "27Cdy9QmvXrvDgRcWbiWn7r9zh8ob8pQtVE5BZpSYbHstzUkP5fkyDnkEYMAThGPFf4LvfKULsVFZN7teeHY81tw",
  "key4": "5iBPXm8WBXdrt6pn3BWejJRPPDXXSjAYHJZWuLDyQjE6CznMr2rF79KTNZRrhzwKnib89tUHwnbqdKLWN9F8xpXw",
  "key5": "yqz8zGD8Rp5bHhi4eDvmg6DgEdMASbfzbTv4yT6Q7QqxkKALJb2dcsEpB3SXuFNTh4y7svS4HqPcem5Xo2eqEVc",
  "key6": "3BWiiH6RmoCVrzQB3bFkPheeHFesYnt8WSHPxhJUkeaH6QBG5jWTsgmeJiBUnmKLY3ttowkYXzYUQY43TB3m6x6b",
  "key7": "4KLQDsABhGzzEWSEMGpsvm6TGJRDenqs1UVJkNM5HNeeeRJvh5eikHzztm2By4zq68ybYVwYaU9H3eLEwmidvjK8",
  "key8": "5A5jkqKRavvqZHWW1eRg7kTfMoUXQq36Ds1L896t3PDYws4hm3Ho6TSmdNehUNq5rES7fY164UMYpgLSqqakUmJK",
  "key9": "2dAE6ckvhQUEErny5xk2Gx1NiboMQFW4tuC4brjAFC55sxVqtu6Kc6DQ1HaCSnUEp9YSzpwmeMddF83Qpv2Eq1gn",
  "key10": "4CW9S9fW9HvMoPv67PVokwAgaoz8Y9tCaMHyjgZCTEQWMWsahobrHtxoQ4RrEHkXjARBYhx8bzfMvugwMMZVwTsy",
  "key11": "2jGyrJaCoVxPdyXEyETajnM6QksS8ucEeGjvBMfdxUviEY6gKkbLpzimrFeJKHNkHmGNagjYuCnASUjkB1KMnf7M",
  "key12": "37bCAVoo3Sh8Yi1mUeqfhAs5qsSEjdHf5DGVU8hK7ptgYRiamuoMzGzTxHZucd3zBa5fmhsWmpgakp2DLzLXPTpN",
  "key13": "5TTGNia42xadKfJo8MXRTxdqwHU2KDpD1thkd1Mwq7vy9N4cLWmu9tfsXr96V7VU9aPeCHmQZKeUp2S8YFYR1nXH",
  "key14": "5mK3n4UVxu1VnHHmdoKZVcNyYTq3JWeiFBKmDYZMJHofexruB69ojk6vdaNiQDaudCAco6ZdvdeEWk6nS7LaWX44",
  "key15": "4cq4MZYBuR2r9TasQACjqdMVrK6MwBdarfdDwTM6NtdkN3tzM3ujjq9uwG8frshiDDve8W7gHvzfUtqqqMqhRx9T",
  "key16": "4hcA8SSV9QhKvZMFc8GWZ1jbxM1iGZd5GDPDXMfBkaNybhsV9H27BP6yS4xevXDead3zShW26qw14qEvuhjDAcXH",
  "key17": "tWxGKAam8r7ab7JsLkzhFPJhVfmhpG9qewH7Nfk4WSoD2zzF3PE8LxpFVEhWYsJjQqCbPHvAhxgsSYierAWzd75",
  "key18": "FqS2EpQtRcTfDLMAC5BqvygTvCTEY7ysmSjCkZsKGg6WbabKAbA6ar81CFSz6dTUsvFh2GE4B6H57NAR7esU4uS",
  "key19": "qfysXmgCJaojoH5bdGc2gQ13L85drYU71UuPz7cZJRFxeuEAmRPuM77h4oXm7B1UuuVCa5NpcXi2A2o5AjhSwb3",
  "key20": "2zaE9bLeB4G3jQD5nwNkvqVpjycY86bYZsAj2tNHHBGtjwpn5LzkVPTuyJS2LjNQyZzwNBDhWw9Czw8pfCj5xUXs",
  "key21": "4xnmp1TcoERthV7YqmP7TQ5AUf58AgRHuRuoJJwejCPHx71BTVErbvzFsSd5cEgpga1WBvqBbk5DsRKkudF3ht3w",
  "key22": "4UWnGLu24YWo9GhNs8BkGBWrs9LGTvtT4AhKnzNx8UUQyoxAewjUBV8ukCxzBqeThSZSom8mBxnPDkgszSqJz3Kt",
  "key23": "2WTjDWrAQL5QQEVYmhQzXwuZ9SFZnvE3NcXpQQw777Tx7RWtTwRoDDnYqmFfmbM9mcFzHWkCBoLhWyTkS4YPg6qL",
  "key24": "61rdakqpYi88Aa3aDcHeqDfCf7BNDiscn6YfrCrzthv56qb6FY9HpexXJg5eDJts6VPok7qYrgsySGx7nhvcdmms",
  "key25": "KhjUeXxuVaHmSyQqACQyMmzoUBYkeXLZx2PuHco89U2zKwS3XmiYnY5qFfJ6KYbn9SAQEHB1kwwLPrJptUuoUmf",
  "key26": "4hqioU3s5iNX9ApepjRSCPVjsCA33fSBCHty1XYHcBX1NcTLdYfTpoCJ9Z6EJyWE9GXbsSeVrTQVRvrngX6bFrvb",
  "key27": "4buG1wuQ87BerhuorQoTaHSvB6BZHvtriPchmPDAVX2kfdE5h1MyqnAYx9S2yzXW9k4zep3YXMu81PB458WgkeeA",
  "key28": "56k3zyAkPAiLYhENc8xL7BiKeob9mzUBwvSYPdM98rkM9RPqZ6WA5VbsT4ZdD9qWEx5ZaK6Dhf7JDenbHHU6nYrE",
  "key29": "4iAQRskXkjFjNXn3trDWyX9V5foFPwLG2YQkLCKPxYMnjo77ENiGDmow6epzEvzesZPTEkfwd9Avtan1XbySe7VN",
  "key30": "ojmeDGzTL6kdY7dfRnq9BnyYz3UKp2g4j1QUKueSEdU3698YL9yaTxudDGZpUMncx2KeGYekSjZNkAH2HjqmuAb",
  "key31": "2DJ7DR1e3Fw9VDyRVP4YqukDRqxfXvyJPmD3JoXAbwLDCnE7srv8pqEnQENHLujVYp9dDQ8vNukaZqsCU3wKiAFL",
  "key32": "2B3XUHeeMuXtyG4xydZ6MhUndq1jKxBkATZjU4xqr5kayrw4rL6tqd6eHhLS21MZ6MXA6BGX8Mu4sPdaDihTX5GM",
  "key33": "46P7biVuv68LpKzJA36jxMczqe7ArbfZvFiA2jTNXR4vpcukeXAfxpVDE1zSXE9kmnqjtW333wMPY85SAKgWSLDM"
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
