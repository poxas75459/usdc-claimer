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
    "1Fu4Gpd4EqKs9Ye8ieZCq1AczCbe4eGigffp1k1NseUGj5kkXaRk8PHNRv9CKu8EuBnddXqY5cdYuAfPQZpBULD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NE9m6FQnjBxFG2BiVahG1XEMLyogfQRkCxoRgQ1bmd3DEX4t5tk2gUp21wmAsdVFUcRJtWEEDxC2SMKRuKSftJk",
  "key1": "5ydcioes8voSiMje6YtMtnDSJzbvk5uoaiUTKKd5gs3xCeGCEifpcxNMGu7ehzM6AQ166X29ssF72xD4Ap7UcdwQ",
  "key2": "4nqUzdCtLQgvqWzgSdPu5MdsWfR83UxsWNFFwNJmvj1NJLZ4KiadeTsm4SwnVryGSM58vj3JS6pGTrks9GDz5TCo",
  "key3": "qEAQjumU63VXouNBuCmHemsZidMFVyZM75wrj8fXuxS3XggGq5ZoesK8RoVikXDuei5aesBr3cn5gTdLFB8A3wx",
  "key4": "xRpZpJrxur3jtALia5833W45zRYUQpmGvAzfyqXLngeVssSv8nKp2Lm3J2utZBPPR1oDzHo9jeNpgDCFYTx2FkM",
  "key5": "4rfgDiRSvx7n3EyaeTn5UEhpDL6Rkea3MDua6LQ93zwAyPRs9GBDZfyJTvzfM4Jf9oRNVgpjNsaZ7zRusEpKzjWn",
  "key6": "4w8QbseVD9SJRf5BmC2UiMPz75zZtzAuAM5nxvv1yzVBUbEogmBEg4vUxQC2U1caDrZBmPiJsoj6yTgdJXfovsAT",
  "key7": "2E2gcm7HkC1YUfBPu336g67VYtuGpifwKZpDPZHfkJqRbyto9AQKXkTN4Z2qe19SNA6231EZ2kAjtqnwhvutXMQB",
  "key8": "i44jJNxDuuzEooon52Tjz3a43XMTxaJstQRamcnKexaR9VrnF4vYyMsZrqvHtt2UrB2kc3c9Tv93o5e5p9me6PH",
  "key9": "4mKzjcgQastuhPXhzYcRYbqmgGukbZorMJLWo6K2cWBfuk5SrS9StQ3wgrAz9aaoezsLLBzH5eChv84FBHVRFwrD",
  "key10": "3vHhKBALmi1G4H1zXiQX5kgMxmNbKgqs7LccEiVp8ce6V88CeMxxNLSwHBVry1J75vug5Be7UgmrSqGSrgwNPaNw",
  "key11": "4VmcdmiXLT5njzJ5sCwRRUFu6NohLHWNCgujv8Lhq32yFiWXEjcbBSZ1q8fMExPi5hwsWPjXnf4iApfDgfUAz4ev",
  "key12": "79BozYhecDzsQJuRRXCtFjoGj6MDV48MGEwkV8VRNGcqXo8eBo1W4iAVLYiy3HparAYaZMKZpXjL5tBNhxfotbM",
  "key13": "2QLJhkbgyNENFtkrTFmZSyp7jrtZpzR7KsFPJKPS6dkohnWABFYus9dCaR4xx3Lmcc4bS1s5Nr9dNCWkfLq56BYZ",
  "key14": "io3fHruWifuEZsu8sEgk1nppcgyyFg7prRNetbnppBdYYAkM6zX3JDFcAWFAYUxfR8Xapg8yH8sFkDAoDKHbf7D",
  "key15": "4CWMyxduuiFqwRdJRM6U7yZfWpR5wWrWAT2NhJJQaSq8GukbHeUB6T6GwZYtq3nmtTigRomsitgjkLjeknuW2Aoc",
  "key16": "HEF4GJLTkfoZWtPara22c6aT5VGWvqvBrvbCHYtVUYX5mq8UJpN1Fdxrey2bDcQsyr5kmMee4NfsNuZRnEoWoHx",
  "key17": "4UTeeDQB1a6CXHxYqfgtxTiXwPD3DuBLsCz7FYewX4tST6BBErosKFmqjmtSD4rrYmsHNMDTKKVVtUFVv2BqK5BU",
  "key18": "49ahfpEpfsmJPoYkUNLsqsE6NaX7ZT81AYdVpzKXKVLbR71GoCi8tRmqWJfjvwXEP5zVCsDTAgDgSKNpekMuix3g",
  "key19": "3sGtuJhNue5e3dBEnrMdp7ufFTSvxWUuUQ8T9XHkaMXbVvzixXwWeEUA8jmPrETRe9ci7mtHjgj4iTxLUQN4FaFh",
  "key20": "3hm8SQAn7Rw2wDri1vfYf4TFDTzkXnX1YZrdZmJzH1w82wqXbo7qbFXc79piYQPUedsj4Kypkw2SEZQ8KEyajes2",
  "key21": "23v6rN6fv1Xv38q8CuFAixEj3JqzFQ3aaVyr9yDZnnHmccaNYg5L6zaxiPuA4k6obhn9CtAH5BsS9gLRU6FczpvX",
  "key22": "3P7b5u3qG9XeGftBPAB6LNg2USYaK2PpQsKjAFEAuBGCiT8ngtx6rKJbwVexzsywKeCuFe7MRP9dzLLtSyVfepoe",
  "key23": "4cHP5XNfAG77znTAxipmfLm6JSP8WeQ7stRcUuFvxfei88FvYp7vndZi3ViERr1cRzAbvXd5E7MPcotgFmy7K431",
  "key24": "2r2QgTyYSBN2MFZiywQa1s7VrR8u8zqjc9zecX8wEgWzzHAtBBVZyEsL25SEhr4bwXBtC39qv3RbUtn6jr14KFpY",
  "key25": "3BUmjf891giY8b7QrcspRujvRE6NKMnH6SaJNi4nM5rpSAncnD5dd7T9smNywQLLiGSQX4tCRaiKsVMeJqyCpheS",
  "key26": "5kCBisCuaaWK9tH6Lu9tkhBDpaXEuab9WkJtgWoKsnZMuDAXZX7pU7jjvajdnR4Eb7mVaGsTrxHzqF3iSD75RX36",
  "key27": "5Z5NE6SYXZZCDg5MsBDfZCNGkqKV5nfK6bA1QukvCrQEadaL8RejhYzTMbWCjLxSWVAyb7PnS9iPYnzLVVaRf1uv",
  "key28": "3LUD1oPmm9fq3i1FZZEvmdH1JhYn2CL4LYJvpJXbgc9LYus66ufkC1y6BezUMetVCUoDdM2vUAbmjoenFsv31u6E",
  "key29": "59vKx5oyLZ3crg9SbaEERnspfuPnMGH5hurnSFAHQAk8qFBFYgVZMszatHY4g3K79bqNLc78qJ3otXLZStYZZbzL",
  "key30": "5NHKcJjub85D6LZAFc9XRiScbaWBrRMb3Yv4wWFadGc8wL8YE6PMF6NbNSpQhFabsiozjFVpMhe1b2UyFezy2Q5V",
  "key31": "GYNCbePUQJm8Hdsoth3GxaAVZ7mudQA7TrHtNxXABkAW8j884U3Wh1y1e3eTswnjzckQCY3dsSTuBuvi4Cymvhp",
  "key32": "2HWcPTuRAH4a3XprDpG9S98VNd33y88k4cKte8rFyJGLMExjjQeybNBEw2KiqDR7owvD9Z4EYyf9Fpkv1g8gbTTw",
  "key33": "2ue3n6cP5a1KAq12b6xEqogE3DCRgwC3aNBjBC7AWJmutrCpBqJ1Gu8r1G78x6r4iMLANvYdSyqLQbohkpAZzcr5"
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
