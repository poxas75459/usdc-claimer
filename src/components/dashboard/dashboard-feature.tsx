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
    "3ws9JSQdqEnZBHfWMWftFbPMyTxeHEyzw7movnit76K2TbKwN8GvZVbj1e3wRvKbagZfgALu3XAGVSmU43C4WaSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MB6FJ3AdMR7THvcXbRCn4pTHTogMdcSkRwbhDDScnHFTkQMjmBs8fSWEmUiUvi1SBqr4rYeZGrLSP5rejb4Ndzf",
  "key1": "62A6hRpARtH3HYm9iK6C2Car34V7bZV4fV7RoNMbeicrUYuSuj3uLAkuyaEtjMzwTuoc7rvmqTsuJ6isx3h1gHyA",
  "key2": "9h7g5ce2aABa1eXqzVPgcgcbGwRwF7wjEBzyvUAf4xZeWJnXi9nGkF1ae2Cwh7pgiTBh1Kwvs5aThZtS72QirsF",
  "key3": "2tAfXpNddYGmEY241tJxefVzobNJkPefChy5SxGAnY1Tk9npuHxqDQp4D131Xb71YWmQi26mUMGevzr5TEwB9dd4",
  "key4": "5TXRJG5NjeG8AuPp4GsnwCYAS7jhifrv1t65FgG7SMj7Kdn31c2RrUG3eYoCkHThKxwe4H49oFosRMoZir9dBjd9",
  "key5": "5EKXcrWQEuWu6W5yuTN4xEdXeMX148Z9RHyZy7kGZBWD4cUqGrc9cCebWbh6FK4D9HX3QUTtCEkW5NsZw4Cy1RXB",
  "key6": "5oGCKESz6F9TpAuRRPSuoujzg3RojUS5nnhhk4CZx6qkn6qtoG8iJ2nkcRpQZvn5UAqPbPeJ8d9eRD6jUTvK2qgu",
  "key7": "4fZpKumACB9Fjh33RVVi5nFDr6RqiDtBgiN5qspW7sFXYu5oKpQGK5C6cn7zgoGhNe5azSm8je5CvTstN5rPdE2D",
  "key8": "5tTRq5NC7czU24kMipY3Z743orGK8h3nqAtnqvqEjzCMgQJHtFFwXQ6CQwNpm8xpSpD43MpsekxqFuCEaZqvHXyt",
  "key9": "2HQi7DnA9n3kcmu6xccrDBpMQ5vjtHPGRtm5vJmHJit8GFbDGT63Hj6gN9sWRX7nAjBAqNNPaqccqgMhTndeBejD",
  "key10": "5GAxiskqYGN8xAQvnkfwrKydKk4JDbHw2uTkbBtkGXnZbVyfWfCzh9oPVLdZapeQGVrqBKRVfCHvYEqhiv9Pjv8",
  "key11": "53avxhUZ92KTLaTNQycwR8tKqD7JQN7nKvs5mAeFuirjAPPmeGePjQ2SKpu6Y9hg8BYTFxqZYueLXdaweL2MQSFD",
  "key12": "3Uw4iFbhT5X6xrZHYJGZ2UZYZwhcMo9JgLBgkN2mM7xn9tJ5JVgeJrmsRfrTmwchBVduvJc5kJaJ1zKhM6m3Firm",
  "key13": "5sxzzPAM8hx55HrCMJ26rKYSY4p9dvUoGhXfzcaWuXZvxUyf2W4LriqzGkoVVDVTYkAM33427hnibo4w5L27wUvi",
  "key14": "Xi23Nmyvky9K4iPvtVjHjxxBcDVWJkwZ5aTkWz2f62VxqdH4joHBqMb5jV3Ti4GUwtHr6oh6BbA4Kmn792kkeFm",
  "key15": "4H833jiaNsv2B85G6A15G2Jyx2pek5opr7BVN3mK7yScKRSgvenZDbR3ZZjf8agf4b1Mh7qdZgPQ4SboAjWi87i7",
  "key16": "5TnqBhnDRYzXGzkD9hFm5Xk2TssvHDR1WjbPSepjnkWXTYcJdkB443B8NfcYbcR9oswLhFShrpX11i9azDEVE6C8",
  "key17": "YSHiFHN1TrRz7HGMhUEdJ8biyfkR291Haa4hSwB17oM1KgrxpZTavjkL26mh6s7Q6q6yNDkjMM9t7rCdNxTeUKo",
  "key18": "2yU6K4vZx19wf9HrChaXpMVUJafapA2wS3M3tebbpqyzHToJjzFN3K5deQxU5dPJuRqmj8HcfnzKoFPNW3xrJVvt",
  "key19": "cKdHr4HV8ruXLgTsPL7prPf8gw9MQJ9vuUp3QiZeGDGcr67eWsS9ux4rQ3o8TCoW2BPNBcHK5bzv84DztCHd7hx",
  "key20": "dWGxDadjRsEvJDLZrAxZexLugHdfffyn47jqFMbLoR7mnAg12KftsYUV8wLYQ9n3vrX3cJnD35iz4wTMb6ehznp",
  "key21": "3DzdPV9K8Mqvmt58SFZyfkm25rpehMc6FPcgP7PBc2KF7Sfue7tvdnS8vekeHNL8oUdnTYZzjjRDQEBS18xmu1Ai",
  "key22": "3poCVE158g6Kq24qZXuTGCauyfkTSTrM2hKErpnN2tLCrUwdhN2VWLpCVeAuFhopbqzGq6J4P5C6iDGbe5ucRWvA",
  "key23": "4uTHYXfZLyzaHTAa6twtvhTwnNbY2pPt6rdd6mX4phTCC9xxExnvqR9NECWp3x61DxaZ6AV2mMCtUVmXBNHknUbo",
  "key24": "ZGscyTcUfmn1X8Uk2DqqFNnF7AFKJWZGDp1hh96zgHCM9BkEJkap1QvfFyPaXFRt4szk4TVwuKDCLmsypRwuVGa",
  "key25": "GatYwLXNJN4ioBD2Qni8XFzavPQXEdkvQxDbjwvZXv79Rz4v4ZFKpaeWCCRtiohHhxy7mKtY1k2DHUEHi55u2p6",
  "key26": "4gL93BEw2o8bY593h7hiQAyUbNDjvfHaMbW4FmiU1T8ZvL6CM776nbQAQA4taB26Q5wjLpf47gheMsMrStRoGC1d"
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
