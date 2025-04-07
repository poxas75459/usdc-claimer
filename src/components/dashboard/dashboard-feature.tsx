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
    "4r1uP6UGoAcz5JJ46Dcq866KAbqNsudZg25KjivCBieL6NdaEATYNhvfL1HEpSnHVJhrL9YoNL1sBt6yv8V19rrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FkFSAX4R1xF8YoZSoZEL3HsP7wfxs97yPg9CB5KnZET9Rb3PLN1WXv3FpQjzSmpCtUYb6BZyic69iEgCHR4wMhh",
  "key1": "3TyUMpyKDDCLBJCsWT7z6BDJjL4syss1Tz3YwvqmhBk359ib2GScZiAeatNUSmpRjc46xoAQs1QmTMgx4H4ExKUe",
  "key2": "47t3y2HrjqP2vZ1DC76UvEWLzkKxprwVfuJTKQu5jTjtRzcBcui8oPt3r8bUBQX8MQrK7A9TAqWLhf9XcunKP4f8",
  "key3": "2K6DJ2CZ87PgNTWjj8oVnn4rWK1t6xfD4DeEERqT32Zp2Uoykbgdew5jugobgvjVir9yXerVAJVFd1zuWvPRb8jQ",
  "key4": "4Vrd3Sfrai1h2wmgbXaXUgqS1f6idFZ8pu5GfPY94NuT1ghdT4SoLQ6WYkCbTb3cga1RNha7cvzoQiFpCN5MBTiU",
  "key5": "43sbqen7kB8q5MvzCs35j2Guz527M3PDAG186symCtf4s6rJa4G16zrhJnDtsir1xcvADF3E2WtGG8mWr2KAfBdM",
  "key6": "Z684SppZgLMDS6tueKw3WXFgAPUSZZnEP7Fw68hdnepw8t1R8nDzkqRJooRv8Nvhsac46HaM7BUwwpkfCbE1PtV",
  "key7": "2uL7ksnw99GsAV4bNthfSqzxuY1V7hGmT3wH88UviHYevoiJR718baCeaAqDbgq4xCRfzCc2MctqEsTr7d3FLbpa",
  "key8": "5m4gkH86F64HnfLyizJwjchXAAh4WYEmxR6KStnUYxQcLVd2jbd4zvLGuAkFsDN3HHjiahJhDJDusLTUf46DgUNu",
  "key9": "4Trbd2GWRZbCf7m7c1QuN2bMaGWmrRLr3iReBnZ1GSr73yLojx1wy8UNNXFrhVaVyjdQLLguMxWAWBoQkMoMqCc3",
  "key10": "4FVuPBvmpUWYV2tePLFGtRPoBraFFJDijkJS7u9kYwejDyvoGUQBkyDYGqdcRGrkqtihFL6AwQx6DmhEy5ZfAq8f",
  "key11": "5wyrP9mviATwgETGE6tdCD8pR4kCT8y2hRrSU7kcxrFj3oNk2YCpH4hQAS1X8v9Gqx9xBjRJGbC3ke6Ye3dW8PAR",
  "key12": "3zvRM8uhNiKD2QqxEmosNz377Gxtccj7gEmSqaxCWAt8e2HPju4HuvWcWFUGuzr4d6cjQ53Ew2fJ27Hgzpnci7xi",
  "key13": "23ecegQ4L9pR8MNq7EJWCgLnCwfi3DfHTas5wbEm6wQ32fDNyn6QvvHe174ZZpAVYBtbEVfazF4ZYAzVVNAq9sTH",
  "key14": "2EHywSiw36o3GXuwRgNW2psE7ExfTSQYPYB3pK1Pab3d6UtaSX7mdVBY4cq9AHbx1Lihh2PZVAgx6z2dgzqu62tm",
  "key15": "5wXosiK8b2xtzcermnXiuPVLQufAhn3bFHYT8J9uJiypyLaAeHEjay3cykHTvQaM6CWif1gnYfPQNM9hx6Qn2MMJ",
  "key16": "5Z1zdfaJSmAAyqxWrnz5UkxCcGMwL5899psNnSsQhjCEnkG58DRwykVbQHReWNYdoxwa9ktibTfsWukZf9wAbhrv",
  "key17": "3y9HnMsjNW7VdvkBAipGr48SMqk5JWQ9aAvQYanmK2kUT9uCDdcuoTp3mVjTuby4M3RDnmMYAJ43VSZCnkWJgXQv",
  "key18": "5KVV87zsq9CxkDqngSVhCzssQq1dXPaaEnCu4EeK9AyC52j38ras82gsu8jreYzskBMmAh7vNd31ZDRgWVULdDAG",
  "key19": "23ymyCzoJo6qBqRcC62MLAuuR4JKFAZFVi37kLWjm1HJFLWJBzPgbtaDEGvMVBsUAZB8jH4NiX6LEdWFyws3Y4na",
  "key20": "5MJKJjTkFBjTwNuzzDn7pqPVhCJVM1JikLCU9EKiWVvTgoTYBwQeoTHnoNMKCrhwy66cMVK5B7dtje6bz9KDnbWF",
  "key21": "4oWvdsxu88M8UXNbiaQLzAHssCdCn6HWJCq5ko9aaKeCjAyWsgx7z5Zj3u8qJ5tYCh9D57jx3sXa7eoboDk31kYr",
  "key22": "2dortmjLEQZfKofYe4Y1fhAboM7LLTYMhmNmqPdU6rnTqV2e4WaEAVGhai7wtmtWXgpyoyXX4k4LoyrYUWxreJBH",
  "key23": "5eQZoXtcFyrfaCj8BFMuda9nvpVT1bXhybL3uZF7AFqsuQALVwMQK1DJumUFiwzhsx4nQoMUwfGQkqLZSJCuy6sM",
  "key24": "48NzCywjpH1ZmPYGpadGC2SoUiVYxQM4WdVxLRjcxvZ73PpXBiKVWbwdPSBuQwo88UtUZTjuSzNMG4NYrcwrgnhz"
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
