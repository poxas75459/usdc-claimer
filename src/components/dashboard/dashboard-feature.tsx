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
    "3YynXn7kuaN7R8Y5ScXX2Lc7ya6vUTJY2KPqJ2Ee2Jg59TZ1TzQJwGRZJu3xQdhivUUMnZYVX32UdEHknKxK331N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kHxsu7J49vgR1ugbAVaeQPPrauga9BtfYd3wGnqkEyKEiaHdHJd8nd9iDmyT5ake5um7Xno11weyDkxK57CPBhx",
  "key1": "5pdq8cWqAnU8PBAGZ4xKN1kyoZca7kA2YfCWktZdTA9w1naKfEUoEzGzvsWA2P7KUshkhmAtj43iLU3uQDFbpavR",
  "key2": "3eJAzpR4xXXKNcZSpSv7HZcutwP9NNt5dnuECjTrd2UWNPXbx5FpJvX6giuWsNXgNhFXsYSR9btJi6KSdx6JtfSJ",
  "key3": "3eHNSsYYEe5U33PQrbNVVExjCBMA19GKGVxgwMid56aonEPfQC5dKdUYzXBswnDAxfPFfVuW8t9nUYyX3bMR9YAg",
  "key4": "5z2AqCYmmQmGjz4ccwQXLK8rrURJbeo4dgXHAvLi5aT473rfk5KEW6x7ZnEkzrnc7hTYEZ7pqRJkuxTJp7unsPxW",
  "key5": "qYdxXFwjnEqaTy9NEQXYdyo27nZAQGbHvBse3LN1pNLDAjCf6UJhuVjhvNFvNUo4tajX3yQozgTx8J2zJ8y4EuQ",
  "key6": "hdVAPeJtD7VRMRo2PFGmbAnrk3Bhn3guUHxKRA56ZwuHvQJ8RVGPvb5nPUxVDaHDviVFWcpYJk9GR3sqUYjR2vg",
  "key7": "5yz31dwJcmwEtmj2iKqT6vJ4m23jP1zSLpqJHaLjN6TLbg9nUfZiYYpW1ZXkhFbv1m31qWCsi9vkhL5bF2WHk6dP",
  "key8": "UYA1gg9Wa1Yhaw331PxzrHGPyropLEXM6Su5AMjP3y8H1yPg37u4FPZhw19zX9egTFpKD7HPf4awWiUmRyK3jo5",
  "key9": "4vJ6x9UcstJJxj4b5xpzRY3RnxgWT56U6eHPjhxcDLukULektUzXjmvBWRaEZfSV3XHQdbZw8bh2iwgpGDpRAAp8",
  "key10": "WLe9GKBG6h5NPXG9AVvfezstNHScCtkB5GAm7ceT12Xsg8fcwREfU1cupQUhk1T1K3LixCgdQrByzcdxNQGcvKs",
  "key11": "Yvv5g4Zg3ze5AsnUpch9YfNUia6z3g4brwJP2kDknoJXZP3hvJ49Zry3ztbhB4wy21zHvyZD1egCKdwPv43KFif",
  "key12": "5fKXzeZ7ZFfdVfr5T27CABsGUVTMQAgenbpm3arjVucv6vuLi7UYWbwzvq34N1fy2vWaV5ictVCwGgTAspNV8fuW",
  "key13": "266MDDuDU4brWJRAD8Pv5dth13tW2p6zJfaBDtbesbz8hhn2gkrVGt3C5v984BEJHfGW3BycDcKfVtEt2knmenzE",
  "key14": "5zeSJ91n6P4j1LgRQ41tS4yskHoeMwTZGjXvqQqyLkZKYwMbD3BzSuzG6CNpvU9i7XVjcC3bu7k6KzNJRgptrQC3",
  "key15": "2As7MJiDJfsXL2mqmbLd7mroHUS6q2UnwFTkxpdyxt9HtChi748T9vX13Jbw7dLpNsYnnqf87YTwn4u8AJAzKgpC",
  "key16": "5ZbExtF65J27reeba9BdqPRcGSygHYjNcgA1SPNJ6tNaF5R48Krmrmt8EaYvfVRM75quBHiuMQoAdKccb53seeAp",
  "key17": "65tGfhYb8i58qLJBSMqeyEBYF3Di6tm3nRghgdWy1ETbnC7cRToTw2xnP7GMFJsnWUozvvrbv5WNhpxhR5cqVyGx",
  "key18": "3Dy5NNMZFK5fcAtjuYFvcMwhNqwkfLddc9ZXe6XAjzbQ7ZnKRioM8CC2MsDEAn8MqWxpRmwAhs197N1muEmaZ8xr",
  "key19": "2qvToX2NFdspkdyUf72xRvQ3RSkfgYuw3nsDNs8ARYbSogB7e8KSDKyLoiDEd4AnLQkfNpCjtsHsmCXveCepsqWi",
  "key20": "iDaZRBwocJo5BnqAbKhANb8RJ9WACqiLwpyiKsT66KgyqFa2Qu4Bn9MHbLdcRb17WmJswCPEbyR3348sJ8hrMrM",
  "key21": "5fDS8CXn8K8bm4Rce4TJMRYN24kugjgnUzUZYwEn7qW7Fg9A8XMdB3jaMdZt4fmA7ojp17JuouCrFYUCEzoX33dg",
  "key22": "5xV5sJttwf2YfugZZ7d7CVdmTB2vA2GJ1jSa3dsL7JvrNdsGRt6Hbxk4mdQupAgwHa6GxXLkFEYtezmjsQRGPEHw",
  "key23": "3QTYejUWuVuNNWk3JW7jrEzRUs9oTdcoepFvdp2A2nGa18fhUUkdwpMLvVdgFSTb7vtbd3PytKj6cJoHiCwu3ojy",
  "key24": "u81inxEYXa6o4kGw9qMeyrUUq5vKWCYg9Vg8NsPNKX2s3j9DMbrP3LvEPFaspDcPXG6tfBq34KyJuREzhp59421",
  "key25": "6538njJ6PHAq4rn5D8NxHdkXGYqaDiDQ97f2f3hPdHJuV8MYFtxzCk3uJqFCeMNZAwywRegkgYoBvQxgALPXUsUp",
  "key26": "24pVi1nwwCJeoCQbgTduS38HnHVWgsRbZYc43PtbMgz9qNp4MNyiS9oEwBFT9zgW2dYGsmrPQuNihEv3NMYXspFw",
  "key27": "4r8rKJkVZkbEvrByeCtdtjHo5n3gCcCBEuxxq4bTB1ToegW9LNjGevFxcFo6LsXNF6pCY8xh3rTBxZgiKhQAumFT",
  "key28": "4aG4e7nXPRZ8sm5GgiATo5JpvgjyotPZZ4tyHSLX1iEa6xic2yw5TdVf3hkgP6J9pPu6ZoamFoBLHzzuEbjE3ptz",
  "key29": "xLgFBRgp2ZAsGb3DxePbWjhHWfLKREVc9BEY8dbzbP6YTJT2Tsse7iQTXqxpst1BGD7KCGwjxhxUZQo14xJbtsf",
  "key30": "24umgWcFzZMk7SEpJLdf4nsyhFS3T1dwGFRJ36AkFkxzTL9b7CjYDX3YsTDDCDbLfW59YbwL6doiu7TezVMfs5ZX"
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
