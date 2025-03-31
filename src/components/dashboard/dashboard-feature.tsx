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
    "37nsffyvA8wfJKHnrZKuMPebYzK8j98GUzENsBfjEqLk23iUN4UCMeDrSbPRfRW7qbAB9ZPRHcQcDisKjqyVVw33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y1VsCF1LZ1hECWxtpvXUZLXwuuZwVevLCtkq38onVxhWpvhWMPbWwTmRTUwYb4mqdtix3tBoKCmst5mcGeYrGxv",
  "key1": "3hLsK6TTJ8pfTbLnvEbzqm7dtz1L6p8xzM48LBepZxtLMxwBPxTHW78UC7RhjzRzFSJF86DGjNatTafbFuxvnxJB",
  "key2": "3WCVJXm6HjUQWFFds48wsKAnmRB1KJGK6sSJfoBh3R5NSQtgvCtMtc8dmrtvUstCBLWfVidN82icY6vu6Dj8QZBR",
  "key3": "4v6QyBiRSmQhHQgqKBYPo27eX73QZfEXgGWnrX2u5HVFTjhTetwNardsygR6UG1sVStTqMtoBRRMzwuztWm9yPZN",
  "key4": "4zCweruzmhgyQ1pCNhgSMXQqXmmdvCSvLPqvoPNqXXM32RoKsUirr5EMzTGVGdZieA3a34efxubRHNb2eggVBPNX",
  "key5": "57XPzXUyvqdN1EqKFdM1nHCVpoc95TuXPUn2QSnszrButjezqGre1ew7GcYVcvv3p9FLCr6CFVmrzxuCL4Z2791V",
  "key6": "24zuszoW74qQzgm381pjj1RouCwjDXoE5rVuoeVZE61oYNNpbVg4ahkQoySLdAND2pPqLyZnJPVwR1oAsrhL8829",
  "key7": "3bPxZottpCitdkdBb5DVmVJzfG8qu2mRvbQpTet3AFTr65BoU8DaF7ATttnhRu3VznLiFdAGrUgXJ4v65StUydRW",
  "key8": "2KdpkQAoDmUArnvENtXk5AvZprbyemaEj7mXzAhGbb9PKCBsuguk5QrJH2q8Pgxzhq1Ec6ikxFRA98JVrjwUE3Pd",
  "key9": "mDPy4ZcXNkUnK9ew4hQPa4JXQv7GUimDHLegKCHL8sbhukjBnN8KTqZNSMrsmJAQzkEmpLjt4cCA3n8D5yanSBq",
  "key10": "3wG6WhnqCb27zcpYCcMPcn8B3mGmLSyLP7r3zRD4AWa6e9UibCPmFuHtAV4osnnczN5sBQAuGp2226nBwQyWpPS3",
  "key11": "3SGjL5zNR99UNePvcGGuDLEcBhRsFsEHr7e6iCyq4bWaa6nyqCmM6w2FfeRnufM4a27gpNHwrjJ7iAbAuANxwESY",
  "key12": "35GCuQqwcLpZ9MrZ4rFV4oTPJtqk1Yc5RVRgdqmQCmRKBEZNfFBMsW2thSZJN32rogyBHRAoX22PNvxR7fM9QVfP",
  "key13": "65z3tSX39Fz9uZPvBYH68Shymg7kjjqK4JmU9KsJwpcPNx1SetuxVhgmJ1mYdY4ENoQVQULz4ehCzFcZGD3PmAC1",
  "key14": "4nzTBL1turrPLMbX3gzYpbiZFdn5XJ9EyQNMYubV7yVenpgzH3nMi2nuRUaWjqc1jDR9K7tuJKqPRavmZcknnof3",
  "key15": "4tEF4VVW13PjQkcZUT4kshF5CASrduEw1zfL5yZu3h3VMpZfUCJGukjon6g9woHtsaX7Jb981yHg5ceK8vjAiYrA",
  "key16": "5kgV3ASua8iU16JD7MAi81Uf6TaX7cyZt8a6fJnSNAw173uxfzgvNcsgDcvsh5JEFE9q3NZdZn57ngtgSLLkbpA5",
  "key17": "4s3ZdsUESZ8cUXrvmJEXVFJuTF9PeNojGR7RTkjpX8BMdQRY7NG7RYiTWLR8aYF5C3LwQC8yHSa9ZvNKVqhGNyaB",
  "key18": "4LodZke6GWKj4VgsvCuJKR726bDfdZxSbLkTxpr2atuHhYKMHePzYq7pmmjT4hzkhyZxedxZKYFthSZgHZTSWMez",
  "key19": "492BPyuzPQfhu3nbGRbdnRArQufUF7QrcXqzwh1c9dT3YjnPu8GtSupbXjvaSDmfmb6rkCZVmnKzPe6n6XvGvbyL",
  "key20": "uTY7hY1LMFVKnxUTKMvXYzetPaRAvtjdV8sfHKjMhx4rSdeU8sSDAZBnnstzhM9ypws24vuRf13ygzCPwyb5Ecx",
  "key21": "7J4MkRTw6oHkmqmRAkDyCDisoCY2HpVpWC7Cf2636rj6vw4WovmQbwMCYhxdTGV9wJgmKHkoPUPdMtZ8kztd6Y4",
  "key22": "u2BzcFctSDbRgSJKbEPDgZB6fN2PVLk3Z98YxwDtysoK4UYvp1JtdVkFWe3YzB2q4ZTfCxUhg3dgXPP5ksoSe3b",
  "key23": "5hy9G9y1mABNpoFTAyZ1ERSVYk6GdgFkkD6ExuJ6u7pyRwXaXmR8TMMEpGZwdMsL41ZMYGPmYiXVh8EtU8YCRc3w",
  "key24": "3GtvVAywdb95sh8gbqMBtXa7zWbvQzUNUFtqkspiH93mdyRx4moWGqWYjeF3zbns1KK9P79GwtEVwFzwdvj19omy",
  "key25": "3Kg8vACCpgkS5pfcg7ScQy9fv2AUyTTvsXJTf9XBnCw4uWERNJAE9zCh6u2X1aNsTUiY1MCWuBguNw4wCPgbdKu6",
  "key26": "HnBnNuG6wZisuo6CfXQqigSvuvAdtLyxv2XeGjeaj7zXqSzTtkWmFEdMy1qQYhpvNYmTNDqiqXMBT4Ucbu9Xejk",
  "key27": "5AZevoyBTLwggJQ3M3Wd8zFb2bgypKv6be7qS2nXPWr5zcsaTea5je49dQTNCcGVVt2p5MGvLfkuM76f97tuq6hi"
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
