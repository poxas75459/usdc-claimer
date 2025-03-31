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
    "5QZ4gJbWVwsPED95AXJQvBhZ194m6F23Ck62guNmudmxzkuDMS4SC7tihNXPmzsoRZhNtt12kLpBGy6mjcgUzvrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64M2VewoAGQSTXT3RW1XW2pERqT7dhSAihqeo4MwHAyEBwp88R8MKTavQrS418SFezCpgzKzt3EJaHz16SryekXD",
  "key1": "31pfy6K41WtokxzUdumWTjc9eUXSxugBDQ6N93aKrHrnSujAt2NJb6cEKZdFmBwQt7ddkLGdmP5jD7bZdrfMPBi9",
  "key2": "tdmDPm25mMUCZisrQ2mj8VAnkFank7K3Qog3CjQqKCrA6khtKchAysGsCsdjC3SdePnkVyqLwp4mC24y2hEr4XD",
  "key3": "2wpjuheKNdNmdPKAMcbUqnRrZUNqkghbqTNB8tFHNdRQ5k46TQHzUsfBSBxf5UixRHxMHNAv3i3uKBQESUJ7CTiz",
  "key4": "3iDigY1t2SRtq3nTR6cNaiYbzeabgUfZ6fRd1hZUcujHLftsSBMitmPDct1LtQeQpm2ohEkk9P6JPWqDX71eTb5C",
  "key5": "4oCzp793ykutaGbLh6Lwm3tbzUF6VuMUvvg5dcU9ifinYArRGvYRz7bessmvJE9Vhhz9wgadRXQ5M1zHc8ZzehT8",
  "key6": "2iivRBse463KMEbnbAG6KQXyjgnHSJ2x9FeQ8SmBMd8jaDEM6ZbVZSJJB2AXx1EP8XRmf66A3QhmMTYhSRrXK32A",
  "key7": "2ADCQ1RJzKnfYDLkmm9K9j6ga4XiBeuXf1qL1Ly2Mg3cViyonMJaDxFSDjYn9gPcW5RT48U3z1JkkhNMmEyuhLPj",
  "key8": "38cv8XZgRsVfXXUit7i1zGrYp9yM3XNJYPjjtNn55TNPWV9yn6uio1EwJu17yMudqk6j5B1RiZ6sL716EH4QGRsB",
  "key9": "4NK5qLeYbqYXhQ87tdhkaczDN7yHXooNSCEaUGuY6WLT1e7kyT3WBG47mRMpk6KunDjgT48xG4fuYRbN1KCJoS1E",
  "key10": "4xexeKntKfS8cMn7Hr1cpjmfGHtp8CZzxSmSe1jQ7dU3MfRMqnFMQgqeVJ7MeM3fZ2pYfY6kYsDnMfUeHfG9kAEA",
  "key11": "Q2fEQKmmXcB6tZ4xw6zuSm4osSbUWeAcnYhN44f6xNbLw71AnTXDWELwgEL9rSQ9vev1kvCGG7MDGYTewTxBRno",
  "key12": "3N5z7evWFGtnrnKcxaVwEpfRQLthHrgK1A3xbA5PmZRbR3qMJL2uUUjBXcLVf55ji94eKAZhWCVerryon3nEkWjE",
  "key13": "pnLhqCxHj9eNnox1YgUdb7qTD6hj9dtgm2UCM9jSrz1i4euUrkQPEE3u3iKm37ojS2nPbVbo88iKQwTHbRAWZGt",
  "key14": "5R8vntzGm9wRGUsP331JXFUHekYUyGSXPV2ghu9KvZf6UyTjPZkeG2aySvsDdk54VbcFrGN5Njab8ubbWXsT4EqN",
  "key15": "3fjaen6tToEuYJWVkkr5cHU9Y1FMTuyaFzgVymnTh7pkvEVkvDefu7BLeXvM9vfLsgX9VEuzBi7Ru51GNUUFes8Q",
  "key16": "6Z7WQAtCtRLNn3XYR8SczVMd887RhmRojzWYBAVtiStFe2C1ee8Gf8RRevnU8Uj6s8C62kseP8txXA96MGQAoxx",
  "key17": "sWCbxa2MARzB6bu7ScTsFgCs9DMiWv5k9p1saDfga7kuNaV1eftFkMz6mXWxbYaewN9cgXRZsmT1tRQypxEFaCx",
  "key18": "2y45pF3SjTEu2SEZrZJjnhBHt4jXTeVSnxcGeKGD8k8jcz5fatwJzhmCE7rjTPH1tmxYhqhdc7HSFjQgqnpX3g6D",
  "key19": "2Dn3Ka8qTHdbzP7gtqUswWTvz1JMVTgECD3LkRqRNKDjXTtQmPoMHr8R6VjAh58eNXNxQMqjC5ZhtUKeQ7vTTypj",
  "key20": "DMM5ivCwuMMMjvYtWXxcY4noU34MfiXSaCJkRHPobc2AVjLasRenPiH4ZsFk8Yxam8ceRbMjvxBZGKM664gdTLM",
  "key21": "3MS5ZkaXjk3PuR8G9L2LtTRiribuMr1hcgjgaWrwBfJNTYzwBdBPe3GxmvGMsEaUqkvsgTTPk9t3XWWpkRASsGTn",
  "key22": "5AmAPzkNE4gFFxqgy2kHiwLZ1LZEX9a4qYQcCCE5h7UMBuTTquASHQoR8dadwuywkWx9uvbrNyD7bwuP1gS4S8qH",
  "key23": "5L7F8nXxvEiXs6noobcpxG3qz3UBfKErohrhek3zH2HMV1zEjRTPQcjxwAQHwRvAYj4vZWTjwcV8LKQ31eM9GPq7",
  "key24": "2n5CySbheAwCxueLFq4Q7gkkr1Vk7asoo2tRVyqjdfhVx4vmYFW8XqCghr3rBxSwoRZvg7Ux6qjERX1673jM1jrT",
  "key25": "2VsWSHmYu2ozaXihXPxgGx1tUYNsHvhbucoNvKQeqdKbKGkZmq9Q7Sb8qcLDWD71pDDyVPPgQVnE69pphi3ZTbfE",
  "key26": "4JHtXnLN9q75QbrqjrL3TLD2BBZqSAgdgEoZmhNyANMWgMjboNSUvBUUzsiR83e2FGDQRvkGNYiqzL15Cz7SLgu",
  "key27": "3wo7qJY42npEkcxVdQdmZ6nvuKnNpD8bXj8gKttcR7qYmuaEu9G9nwviHePD7Qkiudga58zoNRryfM9uAnYs5vcq",
  "key28": "23Ea2hcxUNEAtxBrMLs1EMUwJGsuXiM7iUU5H7KVtmdtKpECt4cfAdLrrgj1Y5vynFFxLBJBCWQZNHZkSZxsSKT3",
  "key29": "4QyoF417cNShKXjDGbiz83GoSE1o3jmN5v1i3W4jxx9Ls7WfehxoSzjpET21xCf7qtBZGWVpFS9kfBWCncbLTFVE",
  "key30": "2L1r5AGw1PZ6jR1QiQoYyvqC1xhPr8Zi9zwDP2pd4arYMMubC3rK3CPnG4ssqw6QCrRRxxrt9Ux5RwZg7tRbND9A",
  "key31": "5CY8uutDhCwdEsbyuRT12CPmSsNxNVepBMZgpseHD6f2n9691gwXLBHTrmZA2ugQjFDWVzhw1ghTCcFUQQcadrF5",
  "key32": "fpTBpffEKreuLbVfRfpPtizWbRSksu7wXucEdrXmLQzP92NGqYXkVKwpQwjrweZuc9bbf5ug8mjxwr1zTqFZQBc",
  "key33": "2zt31meSLTmnMVboNRcRSE67DMBuFfNEV1vKf5A2dECXZB5kr35s9qbE234UShrmFrrT28qYxWewBwQYgoqpnV5E",
  "key34": "2QaRpj9hfPc2XY3oyhHQowhZ7KJn9V7qvn4U2e37KkMRJBdxPspajBhvVceohXvZ4XusmFa8E5GMAzgevw2farWy",
  "key35": "jUMnkyFYiFbyt6SLjgd7mcpM3rmVgfMHeS7qgmEhcbXkv7UGQsTE1e83UiMc18qzSR4kCLRPmaXhivJnqk1FG7e",
  "key36": "4EpEqMyRVA7M7ph5iSWqkNcTpuzt2SY4PSnEsVTzJKGdTaFBMBidXuo6fLuJjxRV5MUeHZ5WM53xMmnvZ1Wtp9Uu",
  "key37": "5w91tbLhfaf8bvfXCURa86nGhm9KHhKT6Ebk3LWLSx6a3LPjMeKDjXYPHxT6LU7d86dXjgAKbSB9fsFyasChDVdg",
  "key38": "4oBJBmuWvoRbykEjN9qF7nPZyzM8aRFeCKj33zBFtzUAreSdAbohTN6VtuJSzuayjuYuJMRaHNZgzaq8p6xxZtut",
  "key39": "MHSdiLjtJbyxfzwvd6TntjFJ2JpFQcmcC1SFdH8GsJqde9dvfpdgo2vWYrixd5FbBnwTeGqUcGNmVHbeAKCf5hd",
  "key40": "5fa6t2aLtehiAyEkGF939Ztynga1QydLLHKRc5AHHsccUni2bwqvGz1SVNGzSFsmjtWUMe2crke3hrHsqTtB4ZAX",
  "key41": "5TLayBnWPCnxqDZq3XVe4bRtswnQgeyLKypooZaTxSYHzuyFhg9Wgyx9GeHywXjG4aAYG8jJKw4b7H9qyWBxk1bz"
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
