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
    "2io7YCoAdpMB5FAKq9TK8EnuRaFGQXBuuvdLxjjbogf5dzVg2oBjojT2cooqKcvVLaAEhkZZbCd2ihTeKpwA9Wgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pbatQcAj9DHajAnftrYFQ68zApRJRybau2BbBDRFXazG8jCJ2m2NkEBPukWNsPLhPcq9kSXtJa1ySDUNhYGsvuS",
  "key1": "4wLG1MsiQ8NV2iBZTdtuTxybP5tt8gyz7knFZfrJTa298kgbYHS9RrH4cbrXLACNeD4d4wvCB9SC83RMX3AyC6Yv",
  "key2": "3pUpuszWPZ1FSfpDRuQEBFnUY3L6NVMQF3QxD5skcurgXXGyKJPwsqLN7dA6XJGyzPxZTT51cziiPbyPS6FAiMNp",
  "key3": "3EDMuzEDFyavJbDukzh717NnbLsecCbpygWLjoYCeFQ5trmEJbaBEiaMSuqxSsxPws5EUmUd3pM4xzZSYZb24AfV",
  "key4": "44KBJfWacMyyBbMRAqXtvmXpgyYtdATrcMyJaReByYvFht2hA4VLfsJH2ZLPmy3Uz32Qz2udsZVFghNaEY9ZvHm2",
  "key5": "qnLTef5jMWDrXGAsA7adnCQW6JfWq6uWh5b6TAumgQGmwSWbQBMQ5fHjRCXcBJMNn4eUhHoKi7WqyNPihrnCorL",
  "key6": "428BwhogcZFwDmTRiJCSJqL3AyjcVpDSbcwpTDx81nM9ErwzH2TAGkLG5CBtKXV8EB8buFbJYHTX7ZyiyvHWBtpP",
  "key7": "3D72xZ8QD3jbYWfTZuGGd63sGhjWyfPVMnvjfim9DQ8YBZSmbsE67GKcReihe2A975guhGQPgrVAc5Zi6UJ9kmNR",
  "key8": "5BeT7tTYZhqafYgRY7M5uhWUC82a3FxeJ3ACse4QY37L99x6odqTn5y51ToSvKh7tmXPCtnfpy7AHgsugnfVBqWf",
  "key9": "Pqv7BtLm5D7JQvaK6YmKY1cqkPxLBZr72Tbiaucb9oxQ2vuYWswXJqifQY9Za2tnAMJPzLdBSfgg9gsPFfXyQcD",
  "key10": "2o3mZNKk2qRFxTTumkAFW1UKut3DPnCB6K6W6VkMRBkjDp5zo2a8ZtcxZeRUdQPApw2hdHDuKYR3U1MCDgqSKKLr",
  "key11": "4e8oHaDpHwHU8L8i7Z86VTvH9chRQv8gtN3dzSy7dvUStZzPube9VuXueXhD5LSE3dWtAjfUob7D7byXKir3x8Gc",
  "key12": "2k6SP7nzYEcGT9YTkDExyv67Tktryn1FnuX18oytamz4aAGa6HqeVRNVTmhjKAXALRCFrd9icjVBY6Z6P44Dn5PD",
  "key13": "4hFPeGqb5WKK26b6MHknEu5P732b1kTCHwry5Yz5J7kNFjH6RxDMLcDWJ7s7Q2U44XZdiKuGCSZKVckXtrgmtn2C",
  "key14": "5eapHcrTJNDAMeuSkviAzUivXgnPo7SPbUsyTxt4KAEnsveUddjGJfLXEBL5p8ESEhnmvevQRjuPyPqUhsCfAZMz",
  "key15": "58ibNtusLq4jgY5JXTWDsTmmfzPGrDJfKKqcETAW6W1ai5qBenvoePqV9g4x5eayB8aiJ7BBUXSfufMQ1nPbR7mA",
  "key16": "4jeNQiZLumjX4kkt3cQp7RKwmfVsvb8Yn1zFQKmmZicWfT1p2ojgtgHR5nE6PzDnUXV6qi6X5yki96GYGJAfnvxF",
  "key17": "2YiFYfrtAdi3PMng6du1dFPqLZfg3ypYdCztYwaEmgcN3NwP3cHJjz1fUTaGofdwPhsHj7mzpRJz1AmFA4nEkJJ",
  "key18": "5EQqp6n4pRcAa4pBFGYBDoeEtbZHn6PWNzEz71CzwmWkDtheqarW3a3H4nLRcjexju3uzooB552SzPBtFqMhLQgq",
  "key19": "3UT83T2pyhf4HMpXwpocGX137DKRXxZ1629kQHBqPpX11PsNY8jvT4BTTh9zvsVqmaLk9S95CzV45HfShXdF4U62",
  "key20": "2nZfKfpoWBW3t376saBGAwq23gVKgsvASs64AhnP8vFYdphmkse16Jm6XNZwCaSB99bpyku6aPsvgW3cs1nuRCM",
  "key21": "iE7d2jCeYaFF22aFxuXe62aVkpUHeoZ4T2vyrFAjgKjFBNnBFwzSDpjAmrcd31A7DQ9xkhrMSa61ywRzhs8oU3p",
  "key22": "3nnscG6puP2JNtXUsfoXPyi1j1mG4G1K2JaJCYExoHHweqLkSjHeW4ZMkMG3Dr4fHfoVRE3SkML9Aw8GRy6uvjTZ",
  "key23": "5d65YTKFj8T7zj51LBXwA1gPC4KvLE4gxsm7kiFRscNwXh3qrP6DdqfMEpeqeYBAwS7fAiPBEHndmq8CMdS7rR7b",
  "key24": "4TZ8PtZvtWRXDyaTytAeCcnfC8gvtj8KHEw9zJz3WDc8ARtCahNWNCdCUTvi5b4cuVCzVSJCdaWvaFVzE9K7f9Xb",
  "key25": "wFzw1bgkFW1ZGM5TUEH7veiJkTUgC96RowbQbY4uVJgFhtKJpSA51QjS23pMR21LPzpEMxAFZMXSjEqvXjy5gtZ",
  "key26": "2dtBv4b7NDcTJXNoTwGkyQrRrrJCCe2k2DQEhS1eZg3Mft49QqEeSsvhUr4sjyRdRncxjeN7Mpy1nrdFMBXqSUCD",
  "key27": "58sRcRDWf8hDntaep7dn5wYmCGRCAvCZxJctQ9dBrHhJXAMREhTPZgwXm4Pa987YDURCvz6k8brd4LZr4aHFKCGr",
  "key28": "4VzUiUPYrk4J7xzLFjbwxccxrtaz2BL6vs2B1VMka3uj6CsqEesi7ze3yZ57WnMcsuBYhdvvknnSp3m9Yh76mhsP"
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
