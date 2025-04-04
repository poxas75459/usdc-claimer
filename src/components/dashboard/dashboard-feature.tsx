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
    "5vPsTCAS6irMGVbFBjUaryia73L91L1qToRnMRsZQW9eWBCLupWsE4GsuCQJKDggFoEmeanGxgcaxABnCNHxhJq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D7oC9VVkJeNZAGkk8sCyDRdaq4H3xbVKQdNJPcWmUeaa1LKGPt5156HPfUdSMjJyMkrX48fc5q9kTXLabsCj5fw",
  "key1": "4kSxJVJwMBcJXkz766fNU6v5AnuxU7pMrtSEBjudvuzpnuTf7cmKKZgbk4bpNdFmCByFp8tCXhiKqKynjLEeot4h",
  "key2": "5J8RpYtgsdDeedxtbgX5si6FFxNbZn16ukkvmd8CL4ExCd3Lko3Kyu9tT6SpjEXTJn8Bv9oTQLegQn8vCata9Czw",
  "key3": "2owmfnyR8NifUSut8CUAjqLAt43vVSyvPfM3Rn2GnoA7cL8brLquapk3bFHt56Pb4WZayGMhizQDbrhfJxwCDSHe",
  "key4": "3XTvXQrqP3yDAqLveP712n1vzhfevwMLRmqV9iXU9xMxk9WhFBhSpxTGe8e4mvzywvfXoK44wdYcWoF77DiWtDjx",
  "key5": "5jD3wRQaqkSc2hJnL2f5Yn6mXbQUkH1EUiEeQkL7uChSV4qVAMmd6pvF5Ncro38siKxz4R3vm1Br6epinHqB22XR",
  "key6": "3178GvGWuNkmL5hz9CiPGTVmhZsXvAyvwYqTNzP93FSiAExJfm6mXfnPNJNtijFrmit4G2ftxrSjgRNSQWzpMKmv",
  "key7": "26SFTmWw1vPMdDKEwhMwzcZDBCenF77kkvtdUfoTa6SNd2LwSAMBPBZ67yZJz8arNceMgnVEuzgSL3MB2J7qU1zy",
  "key8": "279oWuCt1Z5AFRGGHb2D2XGoaqmHFGkKrxQec8WEzbhoRizwEU7TMFuUSALTZUSaM76nVYXu3jABb4VHhZavchX1",
  "key9": "mcbgiLDaBM1TLMScv8hAxpRaBHCGzKC8urdmCwg6CXscpdThG2v2FoBxLvh4kWQ8Xza65s4YnasrUgVgK8qMNfq",
  "key10": "31SnCBaKLNPsnZzbg8aX32AWqcpXQe7mG3PmBa8kYKCSvfPDMgF55rUf31KHgdb8EySA4r1xN1bwH4jk38w8Jdy4",
  "key11": "iSv2iC45zqKCW2R95uPXrqUmibypHzZhTy3cWtGjg9kwvJ8sJsD3GYXz3wfsE3EZ8AH6ojeXHdpSiEqC2esMVtD",
  "key12": "65DsmYrTxCypTasRt6RnZ5Wp6ZB3DJLrEitsLXsXj31A8CEmoS9Sf9NYCf2TgsK3WQNnvrT9LkY8BUvGpVT9wVr9",
  "key13": "2zifda7HyCmrS5cETDfoNpQqpfTfsAhNunXFGqSwVmGpjEyCsozSoBEXzREDK4jxGHu22wwfyfEuyj1kCF1ptqje",
  "key14": "3J5K181nhmfMWLL3Eg5RojSR8njacKguUVi9byBSGmSubemVuFWrKzTDZSF3CvEVgEsJSwy8qMNvD53KnS3J2w7i",
  "key15": "3ZUprzHPBj5aYcicUwMpxjFgpKkSPRpv72ZhQCBM3JX8RJimAAMPqhAahCZWjz5Ags5xGkykCZ2JpvZ5JQwGfvzb",
  "key16": "37tQqrRsoFADw82guyq2XV7i3oeDkLDMzzY5TPtDQ1Jos6EmFtyd5mvt6mSWmsR7PPkZdzat1QHnpthtudWBDgD",
  "key17": "2vhhzGYh3vhGpUSZV55C1QWhRkTLn3HAuLqMagybKNV5ypjBD9KSds2SEsoQsvHuuhTEEodvv58Yav2K3E34G6dm",
  "key18": "2pW6fSQqMTfWbwp1jmFzW1p38KYheM5gJX4SFjyEJDE7TVjT2rQBy6q2AU9ud6ApW1mjmmhoFoLcSCZgTiu9LnW2",
  "key19": "5hp6hZzCYqiUgkJjSBVfBxehh3XcPxrLoMxTwWuMGhXGih5jjrjzWQjhhM5yqKfmspqMPvCmg4f4yzU52njQR1ua",
  "key20": "4QZUxHnsidfsQj78cr4ohXaH3Tbgad9j77wZuRbCqm1gR2wgY9Rj3aucF8sm1X7ue6oGmgj3DTPTPGPSRKwJy4Kq",
  "key21": "2nPpfh21MoRbdkt7Wf55wFh65ZbmYJnDwyCpek9L69SDiDqf6q51WV4ySu5irxjyWHtoNTZQ2v82LAvdGXMtd5Ba",
  "key22": "4hC5p7indPJiknWEaBxJKgbcWz6XVUuzCH5bwo6CbzyXR5dVsEs6WGeNwCKTGAmpo2iY9vyYyyma6wmS3FoQnwVo",
  "key23": "SX6CbD5jfzLEjDApdvVvWkJLoPGcvg6sXRvnQhJ2E9HsUmegq3S4nPp5jKHetB6P4m5anRF1f1PwY22Un7cFpqZ",
  "key24": "498VftAw2tkWxmzehHZW1Gp42Xwh3t4oxBx7wPzyTGQ7EbQ4TULKddaKaaeKoVoPFFdECtH1Ldh57Jmy4twSuzXr",
  "key25": "3foZ5gY453ZCrMKmXMVZthBRp3976aHyhzVEe7SVcKtsAyEsR5XLBzWMxeJgE3J83WHDrRiEdmBd9ZQbzKKFA6Us",
  "key26": "35UKuCKLjkMJnEAU9KzuAGXKsKzQRjGYuNhBZfwgfuDUiJvC9542C9ib1ptSUdbvcfDnSnWbraJCkLXGVNzj8qMf",
  "key27": "4MFukx4GcXyjbVAdh47SvYF1yQYzYLWrVw4qAj83MzgiiUjyNyEqRBk7vT7Q7qHfS38agy72QVrE3XnZtCh2sHtK",
  "key28": "5WpdXKhZ4mPHMqtgifWMFxJTutmMrfeSexEASorytovN6wawxwKwhLZy8fE9fFHx3NvMActTYjBsn63rcZmDWqX1"
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
