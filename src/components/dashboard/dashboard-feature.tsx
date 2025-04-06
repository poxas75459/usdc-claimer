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
    "52tS7qFHDgEoDkK1hEm7SbECvRxdW5p3Aysioc4e9imeazrN4jbQnGvaZgh4pFYyeyvJp6risk6tpXsCmHUAMgMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BkAPpFxPFbdgcYaERjBhW7U38frJsjRoykn8biDGefBc1JDLGxiUyRk1CYrwcbmyzn2QvjPpzJgoB9eKx3BiVM5",
  "key1": "4EfXcE3DPtkQhqZ1NXSYETDs63qGLwDSDwsjkPyhj2gLbW5vSJ4Z2NgkjdtLYyFUCMuaD67NJ6qDpwiKV6B9GznT",
  "key2": "33zBeYUpWX61wAjUrYqPS8msEYhLpF1Cd4zCLvXMom7UgmdHMcC22Erf5eMpHR3vw3T1UW7eDqM4rzgJiUTFykm7",
  "key3": "4oawFTf8fhy9QFq5UpEDA1F4QoEHwg5jXFC9xuuaWZue8qbWtd7x1Rjt2t2wYPgCkxDfZeGS3WYJoJ6LS4YL7UFS",
  "key4": "5psHv6uP9dqgpmy2JjcJS51XsCBuXtSp8QsgnJXit82MEL93uWvrCVfbHjPJDTbmWTHcSnsYTxau33KD2iBPQA5p",
  "key5": "44hCQVLCV6WGsayGXVTdTeo2pkjXyxn8iYftczqVA52pFvTcVMrbkxAt1v11B5Z9xsXQomsGxJ9MUNUH9N1vB145",
  "key6": "3XYmJxsF1XvDy8ZrBukDvZX6pLJY8jMR5yaa3btyRGw4WfLLQutQJ5a3LFcswrZKX3MKa76zFt33Q23ZcwRUPjx7",
  "key7": "3PDuvZNdxEQ7T3vsgGTc4xwwSQnG1dTo8NAvWP7Meky8BmS7ySPBvW65hBi2zy7bfKsGozh7kEYuWWCHFieHYLUh",
  "key8": "52dJPdiX8PrjDz5NtYtuXtHRzVNCgGnvQp3RtUM3TCezuHdKbf7ybJfiMwfc7ZthoYhtaL61Udy6pDHVNXSvjoUw",
  "key9": "5czNFHvEqih6WzWyRw58kqNkmgp8LXdof737ckoHcqBRuAhMi2yZCpcsN8xgka5Kpdwsn9VpMJb3VstmGV2Ag4hc",
  "key10": "5tDpvEShQod3aTez3oom4STz9gUhRSjZf8NQxDvAi9GUDYR1hTP5KccKfuML8aaeMFtQuQrLrD4JvVu88uFyU7fA",
  "key11": "5nBm1jrgThWqVcdgdyaExqEoCnLkuL5yvB592B1rqFCUC24KMsjszHiBXJAxyg3MxLRSM2N98wbjnYPWB5xQtvUd",
  "key12": "3YKJLW5P4aoawDUh1Z39EweDCtVEhzjNmHYU3CvJxuq66A2vvSXQDd2Uu7XV42K8ULnh9qAGHu7drs3ZP6KogZXi",
  "key13": "2LFsQd4AxCwe2G7LZruB6gLSdvk4LgrYnrcDTtz3rFKKSFaGgEbkfFcRd6twrbAtZqVuifWeRb1sQdnuECFZpwkn",
  "key14": "4MdMkpcCCaaTc97TTSWqB44YSbHD6ve5muyNXxgTjtcLfNatyb28Wkaf8oHSZwf4rSdVYLARhbTeeVZ4Eyyni4B8",
  "key15": "4kGWxfrYdXX1pyyE16ZuTf5L6zbtukHFywEeRGZWee6HAa9JJNDEY32a2xTbdYE8tuc5zaC219vLT5eJZA2qmv8j",
  "key16": "4LmPEduGjUAkCfZKJGzCadXMiw4N66x5FXMqwE5EwVBecwNJFgzJWvhXGvA5rhGyKzC84X1KCdJ5gTU2jJ5Nr3L2",
  "key17": "3TiM2iCgvViC1TdsXSTbgtYSPvSAKfweW5ersNwtKH46YkrjmEEG1kAthpmJXjNiDA6YcTLU5jKaXNoaL9cgJvug",
  "key18": "GBsuSWLTpc1m4RfwYEt7pBADJDgEZucS9C8PUxPMnU6NPCp2EecNNBmkFxtKQQ3QbpRNkmTUHMhK1aX6DGJze8y",
  "key19": "651q9SgKEzeofpFtUtFopun2KMCDEqZPqZVvgjYHXaypgDU6rEGc3KhcXgcRDhFUWZ4yJRFxj2S62mjgibsCXkgv",
  "key20": "KJGBZWBCEzwRBjSeqQ68eRGx8SM5ZESZYGLVVGdBKnpRsyHh86JCQEFa3HeeZEvaVobrY8U3tFVNbHrPosab5Tn",
  "key21": "aq9WdvDC4DEfw1wG3QQAeD4z3oK4tyoxLBJstVCf1aoVPJmD5JhHthd3Dg59hKUMEtadotZBFhGRt5zbsSyARUV",
  "key22": "AqtDfZtqTW3Briq8mZnAFZk2bxE4T2xScPWGdkPgMC26dxg1gqYuwAA3KrEXYN87LCRsWPopwigEP4DAFkHLpSN",
  "key23": "55sVUqscpCdaL6sTsDMh9jDQTebEw5PVFhMmqbf2ozeTucLWAf246t6wJoiuRyTG8H1dZRczjj11LjjRcZYSU5CV",
  "key24": "4Tn7whSRs8W65cbmNW8ZZTsrkYG7MRfgVQZrUrL2EwoNV5MHHMy1wrcQuJi3JFKmtu5angnHLQR5A7d4XzeFoyh"
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
