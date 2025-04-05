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
    "4Xhw4X6S7bWw1TRLcWoCcbDDT9GXT3qqCJfWdrabSrkiDAWmf2qk5HKYPaLcLuSomnCyyLDkEQLUzYWVjuvGbU8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wCtFxVA85DAW6da9BLCYcYmGuWWjGimfbbQ2nVhy6NEm3vC39nzKcRkP8hF4zA8U9aKreusyAW1G4tCCxNpZ8RZ",
  "key1": "2ZyCJFd3M58tf6dv2zJ5Qm1ccBGJxmkRAgTbB1TVH7vA5AxSnZkrW2Y1GQvvzYdexyECRkhErMM6A9RQKoDV9HSc",
  "key2": "21XP6iuYq6egxdiocb7SskqURKGZ8TMVhgzpFTmtx5sp721KKqfMa8dwnnZ5L4kLstjfUKskp5VqB6PGCaifaxwo",
  "key3": "4xQEuSq4CiDyeK3T5SKBXRBsfmQTogBnutt4r2pEwDrbwntaw7S2YCTRZpR453SP8bJseRt6vDatoRBXUjjBam6k",
  "key4": "4WWAmzeBBWCarc41XV8sCoQuZvVh2hVS3ZuQjqpzVtU9BauVCtfaFih7o73Pm6nLJw33jtC3cWNXQqCyTf1ydJSt",
  "key5": "4yd5GWZ6u8cTTJRg9ctDLm3PfEHNR2TEv4mqqpcnqBkv2FhHHSu6XjtaTntnAkbjwA7ERfpPz57YG6XcWt1oyghH",
  "key6": "3gngzzHREFq6A4ySpQwnJwC7b25KPAcaoZYwdWtYUkTH6Tjk7SN2JLy7f3JZcFXRiTE5zp7rNeCuYjqRQtTofujJ",
  "key7": "5nN7psAuCCAZ5U5cwTjSnZGAtCmeqZFgwJcL6jGZREUox15S9kHWn4FiciwWBv8XHGWq1hnZHDMb14UNLDPqrPxH",
  "key8": "4d11xbPuyiipDgghxd3qZgKje7Znd394cy22GxPmvPVbxpRDNwHoPLKYdacJNhH9nYevtvCUTQM51b77inG9CQz4",
  "key9": "2ZfqhRdf5Xpy8DVhMfLbHrN2eCUc6EmzPPUnuZCHDDzjwYiEVaunTmWnmBxL9qgM4JmyRqgNeBMLUv7Mr7hbaFE9",
  "key10": "5nBh3pCz3QzifvxHMxNijqTcpsTTMXDnPe94Ath7josmmr18JTvkBmwh9cJmgTFJTMWZtoY4978unG4Df48UALoq",
  "key11": "5J4ydoBGK7GEc67Zj1Ku785hcsXpn8HYGZ9785NHjv4EX21h9AchBLmjsBXCRR9nNwGY76DVxX8AHQipyQFcCHir",
  "key12": "4BhreyqDZ6EnTc1mZK9W62CJvrsD4HG8xL1pji4m53oswHgC7a1ZWYQ9WiPXMogH3HnJVPzDYUwnmxiSDBKXmoEF",
  "key13": "sy8zxghAKpbRm9hxG9VbdoLGyapUjHKCQyyWugsvqjP7fngBsm8y1yK87H32WdAYM6arevssykqQtRgJn7VPF6F",
  "key14": "5BSEH2xFCVamdCygLpL7DwwB5BcrVS9fYwHzMn61MuBCPxptBJVR6KTzzHLiht8oLJbS4mBiSyrixQc5SE7qmDwk",
  "key15": "5dv5YCzQMPgykEtXTLPSuH21h6EJB3gUH92SHjvmr6xgFLpWcUzrxDmvHBtpzjU9jwU3yLqRTQN5TZm2tvFPtb1m",
  "key16": "Btey5Wh6gSHeHLosaCvmF4XwyxMDPVL7GVPK3jrXjqHnG6eFWfCuSFYU2uKCuXDYLQDYVA3a3nV47Z6RMz2vvX5",
  "key17": "2enYqQvNywATersvkX2SUvja1noudUe9H1EWcn7CXACQE3Y2nh2VMjLb5Q8TGnAu5QkJW4qBs3gyiyHaSkmHRTDJ",
  "key18": "5xH9NGotBXeWYivueEQBkK8qX4vKnHut3BbFuv6TavYdQ86pMRfbmtJ2K9yGEedQjEVkA9N6QAjsCXBthaXiPDt3",
  "key19": "4wN2u8kVcMo1TnCKBehPDLqTPEZS7qk3ePtToAbV8PptgvVMep6wYgz9HqMUuaZdDqAkm1eAHmsPLAJpk7g1HtZU",
  "key20": "4B9aLywjA6VgQc6Uzq6TF9kH8fMwYPsgyNT4ou5KHYSkMP3iQBMCQVoaUiw1j9KLiFAwx72oc2m3KjBoYQooJQ7N",
  "key21": "319qFrpGP5wLVf5LWaqzPSQQt8Vp3hFprdpKF7aomLPVzZyYSmr6J7iEoid52PvGVbK8RmAMnycAdpVou3SZPjSZ",
  "key22": "36us8xEN2xVVU5fHLfCoq3Ysxic2PtTu4fEmKbYjR8wvnxMfpK7u6ZJrTGs2Btmgd37D8SUxjFC3pZRzKk6veEvd",
  "key23": "vGSVWY195NNUPcUwApoP8xaQ8GuMDMcSPka85NdedQjEGF3H8bBtsCQmAeAXXKmmCH2KPmWvZPcpBu9CfCVUYAg",
  "key24": "5UW97tuW9kqRhNr74yYiUxmYqbDpKTiFZZnBE3SLKEQ9kb68ppRLHQmaraLpBBtUW5fFWtcwgK2seHkAVNoQFCDV",
  "key25": "5j9AwrRNmAyHzkBusYnqDn6rJ25vfCmdwTazsz249snv5R24s2CbrmcqktTxAszUCj8pbCYcq6BKZc8nRWpdDJmq",
  "key26": "4WyVaBnwo9gecc9ZRpGrH7DeTDAbV9k6EymcNcGXfzraxqnRLCQZTbuFJtZTpT32qxpnW5pZxSkSZVvEokGdELJ4",
  "key27": "2qPABMz2d5nHmz4uRdQdQczUB8bHCpiu2VZ62ku34uFvBrZTWpnnD9D9P7hHkphKxtg6bmUwhzgetZ7MACwrSAZL",
  "key28": "465i3N6mkWTj8r4dC7RxUJwrg4kYcbnUTmbDP1J42uPmBjzt2ccseztkmv3yJ2ds6dMpftz1NowT6EpKh1FNHi9n",
  "key29": "38M76NG7DoWeHWrQvtWDfegF736oaBjYMDPgY5VCGuSKSq7a8oXedZ4uUyGWRBQQJnvmMYL9SoFrEEUDVUMo6BuJ",
  "key30": "63yv1fqGhmn8XDEHq9gD2DveWtnFbELkD7mvYiKmjM3GEXqPoD7Fqjq9KQ2E6oDid7E3W1Vwe94eGCdy5UGBb9W4",
  "key31": "2aCK26eJByXHw22QdKQy62VNFk5w1uFq7kFLTuJpAUterYhsEvsxEfGEZ4jMe9nAPKwJEJsC7FcvCGc81fVAMuMc",
  "key32": "4XR3XWG2dCatiq6pVUpK3ErjudxcACybtvJgHGNAoKWTymUXmAKBptdYeyvygsn2aPrcdu8qKsDu7zvfDCsx8hWH",
  "key33": "2JKTnSzwSr8pQ6p5831cHcZosMhFp9Fn5D1evKuGEHwNydTFBnfU5Q6x24tzXT2EsV8S2Cnsghg3FRQz8y4nrZeC",
  "key34": "jycSWaz26svibkM6bJu9Ho1KtLUxP77V4rRzWzuF9gGB4WcsjKja7BYCQMs2CvdDTT26SvFUMevzgRyCKFAMb9V",
  "key35": "3sDPkatdY8FvpRKxDHWt7j9pqnHfdEQvgS3nfzsNppo7GBuG6AszzRTknqgKsAzfv8cGxaND6mv86x7a12j7tn6Z",
  "key36": "5kfccaHo4jipaTs48SrEBim6RepmfKkaQ23NgnrVj4GrvpsepLdgMGH43zU7cdzk97mgkshdvyQUxNYEZ8GJWHSz",
  "key37": "5wJd6gjKZNdboYBycgTidJe17QaE1UwWzV5Y6jsVaSgc3o7juKcMfZAWUSy57iEn3u2Pjst6iAfQE2WFbxdRw3XS",
  "key38": "pph86XxXWx1FfjggwzcsaW4rGUpt5vq7Dm385y6yvBbb8TN7EG6E5MahXrpvos2KQvHDkqt4DyoTjAonKH11DCj",
  "key39": "4UeEbJULBKGJYPYPgBhn2c7t8j2RRSsrXhnXQi3FPJAXfeVL4Q2CNP4cTsQ6M3dTLeRFUTt4DG8QNZeZf2sC5Mgi",
  "key40": "5R6CYGuBTs2cKnzAgMjn6CcdQoGxy6pvyh2PBdK1kgcJZHTomUvdWTCXS9Pi7sUCPzV3QVk5KAS5QC6uXFh55ZBo",
  "key41": "NJmMQ6dL6wVYJZxWeSQiFR1YdksEcw5TSHtFQat2HKNGXkzoM97oAMPaN1NQBVQw3cNYYdH52YteydzJR3D7XDy",
  "key42": "57qnNHZ1JuZ9sSYxGyXvuYFVn1WD3Hy332qMXXDWEVj1sniDaDadwAdJtVm1KomTrFgc9tCzpQnytp5pvC4y2CXx",
  "key43": "3X8H8p4GLmFxkNaUoTNJiBdDH4pWHzSHcM24haJMSYfXyo2FXUxQh1j2CiintvEYJgDm4nPuWvJr2iQYPaaHbeMn",
  "key44": "3du9hEWr3PokZibZMwnwcvm1geTp1iRxHM6Zj3bCgYbytpcxbDowyMzxyVWuMueHh9RWqLu7vFVzAKh5KXqoQzbi"
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
