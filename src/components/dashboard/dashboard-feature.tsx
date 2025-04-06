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
    "wgvmbn6dCGpfSRRHgQX1TK8VMWb9wWAgmdsjSSA1aiEB2VHMqcknje6LAhU7RYip3KhBphZfzAX6z7U3rmHGrFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXdi5UEgdyTM7B9LfQbPKbAGbpGAJRmeNYAes7BydTAyNNwvs2RoGfaEopwfuLSR9tWo12t9EBGofyiy46zwBp",
  "key1": "21eXhQHu269yMwceq4WVDTFCePVHQtZ54vcHDBuQixzCSHQZF5oLGJJZyExxLZr9zgnLTpWgQpJoMvXxTxgmHQz9",
  "key2": "XJSu8sstjP5q2aa5Ev37bSqoMzct6jJUBvDPpgBWGXPq74qXwWaJPa4i3hE7G2sBrnYpAsvq18VLNb6rbtPDv5L",
  "key3": "2EsgVetpoKwbSp68v72NNmwovw3MVuUtrLbTSu2XpvgKNRV156cWvTfZfpN9Q9CgYmCeuapa6fzo2jspUSSyKnNL",
  "key4": "3C5hq5JwXVEFkzsj3ygGfh1G4Kb3b3PWRJxb3geSmxNZNmwCWkTAtppdP4xTz4jdE3RKDDcLbafBexp3MfVcezjf",
  "key5": "5UJ99mRZk8N3YemUDuJy4jjNmhj5k6oQoSiv5wUfnmGsurwCsx3XzVmeTNJkEAtNbtp92t1TUrLs8XEMVDFNfLqH",
  "key6": "TftBgEX6otikpp3CiMZM7cVUVPjE4prqMQrbMG3BYARHzTmWXKwbxffjjtVNvJqyquAU8Z2hgbGfJ99Z8qryFey",
  "key7": "4KGsZJDcqGiPpUeZ2NbYWNHbtmbnEghjSZce4TC6w15MoQMav86PPJQgUbXHKPKwxbCC8eRmBPhN8R6BgBt8DQGr",
  "key8": "3tju9SxjmriE7EvMYfQynaWGQNvrWXCCQUvN4HddawJyxZEmLHwX6L6wWrSYQUAJmFaUBkEb93TqWJV7ACi3Ze7S",
  "key9": "tBjsesgH86ct6a7Dmwz8cezXVT3ryKecfVXU1wfCXDZxJCqg2sv17TEvvhgsusPmaTHB811ZWisSzSvN3Y4MCrb",
  "key10": "4Ns4fakvrZCNiEx1GAuH2EGQpaVpynxY9j1gPuXKRvtt72WpdK8fFxnKF6pL18h1juKUY2oTAyEXNgJtd1bFL1WT",
  "key11": "C1FTYaL8RkzQXiBJ5JypdZ94d41ArdFtwmyN4Wx1xff6q6ofLpqoqF9WC4gDVFYTjLuAYiGUfHKtPscM73X1naZ",
  "key12": "4hxfaW9z8QdPbVFTNVvWugz7yBf4UkNyYHUEenwfjswx5MuNsLiGzb7fuKcMZX6eWiWBBuUN5ayn5nJkVAvPSp2r",
  "key13": "4Z4ejyxjbtUhPYNzCa2CD5s6FtT7q4dWhuCkVTUvM5mtfiiCLB9aUy6bBQm4Fjvbpbq74gp6XaL1FWokxLV7hrrZ",
  "key14": "4YULnZdV4xp6gc8c9roWFkKAnuaPjLu5ZHsPivS6RNRFzmqF4Vc68ETWp3LAWBeNJzSjYEwBqdpHfeQ9XGBFFYYZ",
  "key15": "Ue8wUkx6jCRZGMw1Czin34sVK7th8Z4HtXU8b1McFtiMb9tCfiiC5oSU26yHfGDASAwZxrfcMPoZhwHnuyLbnQe",
  "key16": "3TxM8Dy9e1mwfbinVN8mStrV86PAurs3Qk8sh4VyuLVa5YpGYr7xAxk2cet1XAYwyzFd3L4SJSZJjJwBWoeJAqgS",
  "key17": "3ASB9S4PYD1Qg6YqQZ3voG9RweW1cexjGLJ9WfwgD3JvDJwbZijavA8xDEuTHQUuX2w6Ck5NPTF9fdhpQBKq6dye",
  "key18": "5HQdmRc7Z1ij5mGx6yXMg3HzqBu516gvwuNCZiiRuMRHLHyn5mKa7f1cFekRvk2RBJC2ZdpeftD1fkv5p4kB7ZXR",
  "key19": "2sRkaaMgWzQDXgePXUR9FS6mJ53pL8VAAu123fwwsQFRXsxXEVa5E4DnTwMXbiW9YhvBC7JpptzHSMKDqRCtfwjj",
  "key20": "58YsZ3cTzsBNVihygm65ucRALiUh6G99o1TmBuhWE39k3kSBG1t9PrjDEGWURaVCPoocBYgD7TvuRvxbGw78wcQy",
  "key21": "yzWRQUDShQ5mUUHGA1MjLPDW2vLtMUabiLqGW8gdyayK4vqSRxwysYC4EujQrd7K3aVzXvkrJ8GkwMT8u1jogCH",
  "key22": "284SEoS3h7cakD1q4i6osnB2EbD27UKFCDMs22eoR4UCqzgwELCfxwmhDzf8iDpFMJvHRHx14NmkkGg7PhvAJgur",
  "key23": "3A9HatVVA6Rruvrw9fog4ctztSLzBGEWeduD3rpHs2N2k5J3aGJqyx1CrLotwr146SdoRRMHUSxwzsMFXXF3idwS",
  "key24": "5rHrW7M2d2kyzLoLGnTcW1szX37YfnbdVvVs23VXuD3LMsW8py6Cn8MfXPqH568SDQq12B2kWGSa5zUPW4mPqvJh",
  "key25": "5yejgfAkhddc8Q1WZLiVqtqKZok6NC9X6om3ui4drfpQg8aHz3WQLE2uBb5Zwv2hHJYQ9qPbGbNVRdhtXUyso6q3",
  "key26": "3BWpYR37BL1UEb9p72nac78wtX7KNp4oYFU6NiYfvUdH3tCw82duQEhqX1MfKT1KudTQgpURmkARw9MryrMNT9cY",
  "key27": "cBrZh3MSX31CHPcByhUPTphLx3a93Tu6mNMfL5gqaTLBbrowLZwxpYQoUnLwhsMo1bVLci6w8ef69ZYuioGdVwz"
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
