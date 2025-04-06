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
    "3tuEbUDHeFKw8ndp2uKT4Ga96ZiZAqPQASh43o9W7zwgCD7L8ZgsanzKMEwfgkxuGFxFZBCXbzinCY29xAwXv2JU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y2h1nPYwTJv7sWfgXjzrgBq8qerkoVd7ZL6ZhHBG5kvLsbCPhTkvUjmyDifS4ebai8VZoXT7XCXmACzg88UGvfY",
  "key1": "2jA8qBBpsqGgbqQmbWpwAHY7gn8iFwdZxJeKHokcPyVmTBPYvN9dHWSCXQjmxVR3vKWQi8inm8dWAET53wy6qLAX",
  "key2": "4kFCzJgJ5GkLisy3Ai1yT26Rzxf14tU8ypMgnqAMRLPAgBMMgcLpxE1cFvhrdhW7wmx6HC5UQwdVPN4xRbEvx5Q7",
  "key3": "uFGV26zDVmmG5iiy2qv5nb3gEJpA5nXd573t3vgUgXBMcZG431CXzZv6ct3htB37QegYYthMBaVdJnkJXL5AJh6",
  "key4": "2GXdvRwxNibsZw6VpcNDcRBcAxv9KEPc295eBFYSbKdz5boaZCtXqqqK2yygo6WNLkfRCLLuTo5FvnKS5H8mHeA2",
  "key5": "3u45c8GaHfKvhZZQNKe3xSfYQ2MoBFW7e18BnAExPZAWhS1TtL6KtHCuNsDbb3p7XRyuQYQLYkgxVfvpJrfeapE1",
  "key6": "3wuTB5Ni2misjJteG4Z9Gq1VJq371xkqTA6uqE6ufq5JZmVwBGkZRdr5ETPqgqVGu7riq9BavjS1Do4ywgH8nAgX",
  "key7": "28d6FEdL8j8Z9jhgTXm9KVD3gpQ2dXoTuBPqUkihD9uo7ciqCPAa3v1QZrjdb6HK4HScKuwVWLss7HTokGEeLJJe",
  "key8": "4nMz9j5YsP6nD6F28w6z3ZFn5NHtum3F539hkWd6fcZc9SRBdeE5dQegQfRcCopfCtWAaok7KXdeCk9EdCnziyxW",
  "key9": "4VKY1zXn96uyB4pzJ7zW9VdWHcQZvjmyEKAzzfuZ2iufgt4wa6AYnssji9Hv79FE3ZCm8rBgy8xUH8dNvTiy8fxG",
  "key10": "vEYnnSgvAGYS9BFyQrkw57gnJRDcRuZBwZHJ4cY8UPLq9aHJKGQkZ5o7uy7egeuiX2WiLYdo4UujGWppd8NQmT6",
  "key11": "5AXLSp9ysg2apfkY6Fx6UuCM1CY72gKpqCNh8sAWR134u4MKzpFcFP3NSrWf3kPPLqKBfUxFtq36nVFCFCb3CmBQ",
  "key12": "5VgJqmzhXQEQdvcCY8EVzDdiegxLNNw9dk9Zy8KaJGTcJLS666TJe1ThgX8XZ73qq1uyrDLSWSgxHrFuAgqnquEo",
  "key13": "2HXq4HzDmKPDsGZM8jv6Kk7Gf8Junibo27cjMxQHcsPseswa9BG2oPKVJX6TFhzUQePKVRQo4bL241sfnf3TxxLZ",
  "key14": "3ZKevrHMBaSX3KFgCK7SoTGcQ4wwWgvvHgv36tTR6Cb2bKCR2Ebf1KNgD8D4aVtR1GD7qkkBHsB5KuSH5KqAwHxZ",
  "key15": "5uZqpSBMuHUkhsKuLSAfarfZAP7dwfX7RUb2iHR9E2PK1Fi2gFf91e1TRPTpLmZwexQRoSTTHRMgttKH8DDn8f8E",
  "key16": "3Abx5FiY4kZkozMNBez24uM8RN9GxdzQXrwDmcPcyXSAjYW2JtA1cmqixeznij5duky36Cp6vrSYozHVTsks75w5",
  "key17": "5YW2catFhdL1onwzenuh1EE5G4FM9twjPiP52uGKA9tLcxuSAhdUsyppXNAowzGthSJE7XmhJsEJNEhXotFWucDX",
  "key18": "8r1rj7eH2XFvcntfR3NRzhUCqA5SUysaD3x3z6Dc7m9M2D3Kn9U7PUGzwr9JSK1BTUnNtt46bkRzSgJttfhpDN5",
  "key19": "MuKr5Tu5n5ZCd2Xhkgv3kchDySBDrn9u1ibtYfjgTKCoQEgBruAVwUmXEioXpYYN3kGbdJzbxHn8LcUxKko7rUL",
  "key20": "431ReBeHTVMe2E64khM5kxJgLWLyASAzMVAXnx5tzC6PvpnjtFDNWMDKVXqq3WduwGnSrDiiX1LaNNS8FQi3MtJT",
  "key21": "4XnAQR7DganjHnMFPpToBmZ9eoPH6fRSEcZoGqMc1A8fyoZYU6fB2BCAUXHpSkhngL84JRaCYafwP5HKs8b513Rq",
  "key22": "3wGhjEGQhQxhb5ZWvuZ3cpazF1U395JYourN9f3Bt5r6RF93kCokxTy45F3mBsW2EssK9JJS5fueTVswZkdRmn4U",
  "key23": "3GKUdTVZ3zc4HaZZDj8Snj3vkaMmYXZ8SQk4VfWANnSJf6CHeqwJ3byZ4YjzpUPoHsvnjrs5267jL5xBo2GKo9G6",
  "key24": "rGQHGbrWu55Dot6eZV4iDrUG6QvNSjab7U2fTxEyhBKaHYR4WHLG1Wtp7zqZ3WjoEo9R3UPNBqYYvSNT35ZFzqo",
  "key25": "4qvmKTdssWSLHq8JfrT7FeJHZP188NfgzfJWX2pWPUVMSfnSeS7n6FKn51yNCPoqvm1vsFVQVsVo1Cmsb5d3VS7p"
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
