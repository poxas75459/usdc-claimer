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
    "33cRx92u4WRBAPFSax9u989ouxtsTj6KUZhannG3WChihwy9ppgNb4Zw6cMgqprTkuCdSsGv7BPtizjMJoXL88Li"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xECPHn5mdLFXHdCVNfDeJjQXi52pjAKPoCwRDWTkRF5cgUcCXNEZsyeL6FbDMpxbkur56K7dRhdZ9RN8o6dE6GV",
  "key1": "3iUXDtzJS5W32nK8oHguxMPB1DxjVkDzknWisn4dgYmsNfuPpA1xnw5HzwQkjeazNpju7kf79sUfRDbSWF1Jwsgp",
  "key2": "4cSYq4hzTVykaP8FnWHyaBhdKfV9usZHbz6fNGFXBCnYykMc28UdoAQcVUUFTKJjozTFhY8UZWFJRV7eQ5ikHrJP",
  "key3": "3B8aeN43CqpRgZBgvcn7rPfvrnXinF2sxu1WqXpcrMiBDKKJoWSLG6vLQvfVAuEXbbKP6tC1nRx7kLReXQTNS48x",
  "key4": "LAAPxbnSXP2Dk58t9mUQq5tdsjks1bGfSeTCp18jEMBF8WWBqrYPhw6uRwCSyf313gJAXPEZ62Esntp5CHd6G3A",
  "key5": "461r35aZW4oJHXwVbnS74cxEegsrgRotoaf7yzZ8UhMxNPgyBrUYFNAJHzWa5mka8aEZq8ftYuHqNtYaAjoTDHu9",
  "key6": "434X7iuDv4WrFVm5xNwLDp8VCaMQeUZojnt7PnVruPdQbR7vsAM13QVC1o5jhL193e7Hf7A6ppvJadutdEgMpQeP",
  "key7": "4gUfUqPpGwX1cfxhzeJ1JppkKzYUzkfwfiQbMwJFNbkEt5ktR16KpmXb3RJv2SWQ2W3zirsjWYnGPkRU8fXJpYcY",
  "key8": "3k8GXHL1RwesLkzcYgsWyFxUA7YKjf2La11Cw3RNLkSvPDexDrB4fvTHiUrTo8tSYTB2kApaP5ccPxsUFWPoKwx6",
  "key9": "f94eGcq1o7YL27HGPm4ZZZaB7x9EZcNJr8Xkfz6H9Z3Ko2af9nPzC1gojYqktyu5zyYxfvsi9caotF2GzvfaWc8",
  "key10": "4N55YEbgaoeakWLDeGESFTAdG9RRBqGuCpXFFWse8mHTtNWcnJGYUjG1fgE9fe8dTNExBWSSAHcoVZTX9uCKmKi2",
  "key11": "3VrhDrE7uX1hHxuXPL8sge4sxjP94xNyfpXNhXMKtJSZMHur1WKfZx7y5DSH9hAPV4CFk6LL9XZEnq6JGT5NCFgg",
  "key12": "28c9uVREGtxvmDbKTkxR8RNaNMf2yR2ZTT8UwZWZpmtzfA88L4iLFLTjR48HhASC35trKvLwFnTQwwMckAeMSviX",
  "key13": "3eqHH4t4ytRvMdy8LbyaKAgLLpLsSYKL3RdEAkscmS5n2bK4VomdTtbNsTPB7X1dmKhgf6yxWH9UjBPhEgaVxxUg",
  "key14": "4jv5TPMVsLw7PZYiobrkp1b1Dur6Qnqk1SwvcFx8HnDn6bdbWCtMzjV72dXgHSo7JwcFo3riu2QCes77TZsZgjcw",
  "key15": "G7TQgZFgJ54Bz3HdXhVPdfWwQ5CDe72Jau7sv98EcySyJMwDXkn63foTfRzbo6qpWGXXHTxC9Zkr3wFWAYwbv6Q",
  "key16": "4RSQ99QZpS6c6b4Gz7mTKLmdQd7H5NJ3HHD6L4QRonn5F4J3KTETSWWo6m7VKc6wutkMcvp6xVEebx9gEng1TEyv",
  "key17": "oG8U9DjC5T8TZks842t7AUYUTeE4vESidDP4aMwFd3y88Ba3wj8o5wPqVue2rV9Te7uskkNLkHFvfyudXRjvLz3",
  "key18": "5KuAbHWdwT82sbPxGy4hg7QrxPo1Dpyp6yrJg8CgcxYcLT1cu1rtfdKKp193c1GGr889Aht7aofN46aENCkZEvPp",
  "key19": "5NU83nZqJmLWUqE4kgSTm732joLjQMJ9CKByC4F1X8geb66gayzofC2UAgUY5su4DdwfgmUwdB8tC2yg9rWP8wuc",
  "key20": "5aBGwVm52DQa4Nt3i4hmCQ8TqjTmXxMFNXVbmmhPkRrD31g1UZkFt5bvSuyoHrTk8BqPFzAW9ydVSFe5G7pzMBRE",
  "key21": "3Xag7DLPt4YQYdUkDBuJdm2SX4ZmVE4SbUNt5QyyZZB6hd3xrp1xBaHENBPjJD1mFvBrqNCWUfb56sXLBAmqc1Zq",
  "key22": "5RncZwuTLJMas3J88v44hHLw6CqpgysatV86fm1dsamCBviPuuQeLj9LhNQxnDrNnqke3jGfR1w1YMxuekvc8RFG",
  "key23": "3UDtD52bBDufn4kyyoFCksRGrH4THBUDvB4d1YTwERuMNrhfAvdiRapYsDnBDBoZVdfNHCrDeLp6NSeiuvUvAZf3",
  "key24": "22meA96cjTHrPe3WgbLpfkMdi1LdQTbuVbcyHnc49ADj4UAoHSD59PWy1veCK5fqa3woHnuEAJQVeNWk9NkP2yyK"
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
