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
    "5GnZJ2iLm6Q6oemShkLLht6RqYL2hfMrhCpxMLL7iKjj25cv7dd9SvBQfL982YemPPFnovj5vCifuwjNwDPdRtxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bNGujLwjaVh88akAfrBEgHReEMc1oFC9P3DCKqhn6qXu6gs5KJPgriTCcnwzqBDZEcHh3tAsRWrCPvLwYak6QtL",
  "key1": "J9Dcgs4XMEjAw3QM69fHudpgispjjjEZbj2aBky3Ezrn47HTv7D8j44aU5twp5wbA4ufebeCupu858u1t8hcG6F",
  "key2": "4ETnXJh7ouBK9XdNjF3zrp4o8BBSorjhL5dXh1yqGToQCHAuScU4PJSZCsqLQQ6diPwJjKiHuXMjaNF7XDHJ71wX",
  "key3": "Ly5XEkrbRr4msaeRwh45CzQvecoQhQXB6H1bujU95bLVQGoXa4NUW8KcfnV73crCou9kJW8eQfqdws1KDDPkP2i",
  "key4": "3kqq4QjobABoC9YzyQkoFzj4Zc7reMaa5BdDVzLb8ppNvj8cA8CqWRYptZeG2nWEXxFMLKTjkGSTTtfCy9s7zXGq",
  "key5": "4edea6EVjCFNRZSdgTwqVGTxsxaVGotMzhdBBC857c7azU7NdwtHzUcsLRVSydriWxyQD56gDJfZX3pERcJC43Xv",
  "key6": "2uXB6F3YTkfqo6jvQNnkNkPqn72vLePf8hfvkFV65Ndn6XTyrTXgeak4J9DQJxAz4rrPS3u7QbDUEaKHCPzqbtRD",
  "key7": "4Bgp2yfj7Xv7676cemm1655vvDYfHaPNEzFNcMw3qxGNb1TAS7wfs76qkWRkJ8TYtnyLHg3r4PENyW35d5XhUNk5",
  "key8": "ppGTE7uw59bqDre5FoKBUBU9AoTBasYrBxE4bPx6VnBD5RA7vpXhbW1GAWQy89KuoiDBUDXKbkbbMMZugofaVu2",
  "key9": "2QuWwdr6vquMSMM3XTNjYnJhS33XeHDKDXv1GYLnmr8G4RfTeDPgxdMn1e7P4zi3BxsALph7hhY1ARNQAksYQC6n",
  "key10": "2aWEB9NLMY9jkyX4xgapWC6FkCvKitVdF1aadtkTXfuWr2AzfSeza4qipGHz4X9WUi17UcGXNbLTcqt7vp3NnSHR",
  "key11": "4x9ocUEBXRpi7DiiaFomz9M9zqBCn6KpFbfMan9ALGHF6LJDRXnHgDSEZfYaRAVtJ2sL3mDZywub3wPjVm7p9Cc2",
  "key12": "5vwd3HioGBi5rcZASbwwqTHwFBnFohxrkTDFpGMGKWGE7H5qJ5x6TeygWxJ9h1aaBRafXqUCZE79A4Wgd9oLGz4A",
  "key13": "5nYFgtdhpmyRr2NSbya8dUZtx1rRysFXNj7NfXXAc953EcmLyZnWTagKv2kAXYbKtEQyxUUYQ5mJkULSoSfKyvmc",
  "key14": "5pMCv3PnxqrsSWCkRpgutGeBaVpvphsyrn9zRLGWjqjYpFec4MVP7LqYQKRpBnkmGmx38zNUVaYphFwLzJAmMgdW",
  "key15": "3CK1Q9Rhp1g8XpMWpr1izM1UwaB3HyoNQhWR6Lsi4VQLFpuYJvc3aZi9uaVeR1AV6Gmv9YvRYTRL3coBhCevpWrL",
  "key16": "2aYHzJcczV9xwCm3EeZvrMVijCoKgDLvF2dEqyDiak9LyrHHcdwTRBYyBB5Dv64dRLSqtcBLa2nPyXFd29hLvebq",
  "key17": "3RLY5vqtDx83P4Qh3rLZdWejrvQP92VYoPKpH1tQerSRDzVe3bzjhNfgJsVSuBDsEL8K8aPEQVNepVvEFTmaQsVs",
  "key18": "3pX1etKn6rV3uTAgA6BZjCJLvz41RvUkaKtSvjmjGLjnym2LHai4YLiM2F28gGjNAUwgENFhBd99zdpwBa6xvj2D",
  "key19": "3NUF8qRRciopE74ZCFsKfs2sPuhiGEMuVegY123S2gSDm7Cp3qZ7qGfuwSYehYb84NEgWaqVXxJGLbkiDgXrG3VQ",
  "key20": "xAJyK9wr5bNgHQ29TBg4ywDNc15CZD4HZ197YbYZADhumU12C5XAB2JyHQWVfaLzs3U5fVF6eKbFLh7zce3F7YE",
  "key21": "W6fK26KcSMa8zdfAqy9BAUdEPvxd7weqrowiEC8y7wpWzJHyoogHSjindw18pkqtJ8jhbDsGBTEF97ETv88Gh1Z",
  "key22": "3S1SLLUjM9ACtKX68wpdz8yv21tFVuLozSdM2FMV6BZJqmTX9zCWMJtaq64PW2P1WuNE4XQBsbbuhfkNcqy35PhK",
  "key23": "nuFvTT7E5V9P2EPGtYowwHcVhwXUVeFXYEv4xwZPojMzbxb6awBVdGr3DPwmqy8bkeLwBiMv55MtUTuYtLpp9vz",
  "key24": "2YaGhY3xk1JEgiBoeAK5538gh5H1xZS3xuqPBMcTrmiEmwSP7BH2tPttoYMwF1hiVfMwgif6nbrH7aj8Gr3DQSni",
  "key25": "2DKz1mnmvQBgW6TUfBfTpAt3vP6m7x7qW4QfeXBDtYoUgwp1f8RTSNzek9bbhpQNV7j9cFfPsDhV44PCABT4pzvW",
  "key26": "3gtQMaD22x5Qz9ir1eYK7qjv2rBPyWHSX4pefyMjTd1fBGXTMfwkSTkrjusLUve2irAex3JLA4Tcf7u9qzgpwFeM",
  "key27": "2QTpjfV2CzH3EmRAnxC4UsqdhjVBnf8ZKfGe4fmTGE1nXvN8jASPM21foQwHCvg6auWZhHPUCnGqDuvHSWRhX3W2",
  "key28": "2PC6PGdevsXkaXMTYudRJdUGJ1B9HcJ4KWyd1nSG6wgjVcaHVWmrxrvWWzRanDd3ijqtANfNba2cWC15UpYcWQu5",
  "key29": "2gCKb7CWUaVZ8Aa3kj7nKX8tRtrB5cnhSAK373ku18aieLXmgfwevG2qsU8iqLtg8GZJ5QNmjodrVWjbSc5yzDJX",
  "key30": "tZhXdLYM5qbs5PqYHJpyw5LpPJEKQY8JiCbPjyRsogs2HcfYFw9e28x1K5Q1We9jBJXhpXFCw78iFAh9vhNzDUt",
  "key31": "MAY6cXkUGgwu4pwbeFcyWvT6T8cWK174k8sKmNs2CcrXAiB2fNQy8Zc3TsXR8tdZ6ssdcD2kGM8DJVSujhSwzMr",
  "key32": "DvxuQ659SrZTeMBRRLF4QYfsYxqszMo3exmVQ1jWYDD1D4vBZNz4Cq13kBkDyoJtyEF7XP7KwypiVDBt2AWLGg1",
  "key33": "2GFszT5auWo4qMUDuydUtT2B6FkePpPwsESUQrDFT3rzJ79qcJjKXbbEhQtamyStt6JRMW6JTF8kQXiKSNQkhUbs",
  "key34": "4UqXqPaHTRTf7CvKekkViUdHkM43nwYmSzxxVhmkVJ3MRADTYr9Jyut88hu71eqwHz9RTycQAKd9CKpqEhTfkAr9",
  "key35": "4ZsjFcTwwT9rnhyDh4V5xn21YuVFH67i7s2KuWDeRBrAZ3LLGL2tj3yy4BWSxBtYED2G5CYuMAjaPKSpAm7GtFTf",
  "key36": "4DvfLYLEXaHU1RF1oywW5WRimYZCWjPvRwmRoDo7tpyXwZMpJLNk3A4qTDYJwGqRFc3hCi4mSHkcLpd5uJieipxA",
  "key37": "3sxwFGKcuQWK3P7NWotdqzDVQKBPrnJohA53pUMeHQyQ9X6hUS89i8J9pyWnWTq3CCKhXWj812MCe6qCYGMBWPUi"
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
