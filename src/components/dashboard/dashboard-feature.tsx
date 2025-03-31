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
    "2st4kfhxvF2GwQWXX8xXv8VfWVQ4JLMFawfiGUjXnFiU9wBY1BKZzi1b9BVLXKKyzZPaccnCFXjMZvs9p6t5T3PA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DFmo8K9C3v7j5e9WpRFsCAN7nZ7guxVLirLRbLsE4qMEcpR4RD6vzt9gyMXFHNwEdxAEtp8gWgGgkaW2GZB5u8E",
  "key1": "66UNDwh2BGKUcbm7PFMdKh6ifHcWGK2o9ajQh5qxgcutjpNt3myJhg5LRxhd4aaX5oxd5XsWGwfkNDEXNtgTYQff",
  "key2": "5iACq4GYXNxNgDBxTfMcZpYSwd4uu7HdtWganPc3yvfW2FsS5YqucHMs5YRuaf4pn8vuW9gaMkM3mMJtt52Mf9Ri",
  "key3": "4W7gZNsxiWaZV8fcbLmbhKefmHpNZfCRNvwXsFFx4vpemWFrMsHZGbAEJEaNwhDioY76NrBVUVnP7zgHrkBW4x9Q",
  "key4": "4uVbeBSTJD47KFBZ4rtetcMUgzs5Gje3hWZjA3tZd5xdwrb2fdtzTRdif9oKoXC9kXtcTJewAAtVcUqEF2Kan7Ad",
  "key5": "28cgVgHsnprFwy7vrp7A7X2pPmDmZW5H7PsHvyC5sGogRh3s6qTXb75wvGpSqtyFdZ8MgvNQrkowF62khWtWBHnQ",
  "key6": "3KzqxYaDgD96Wne64Y9NhoRs4RJmKHrYzo4t7du3rEeTzn7hg5JWVKY9Z1Tib7h6QKCWPJR7bUo5y9xiATpuR1bh",
  "key7": "5iPAdJWE8sQQkDXqnuYD62n8Y4yBBQKdq2CWxc7RcANf5KwLRJZGJeXY921F7n9iEsDLpDWfyQcdu98de4xBuAiH",
  "key8": "3f7jq9b7Q9GJ1KrQgVDTfF7FHw9Cq6sy8mjo342tCE4RywfnT7PpTvR7sCJvH2dRJdfaSD67dYdgUwuyH5vWcbjq",
  "key9": "5ryPa9VpvdKWmgeN4GoKh9H4z6gGqd7DBUohYYri5Tq2Y8QmaNuYLarnR2veRdhBnnb8BVvMKASE1yeAwYn6axwE",
  "key10": "5TEBiFTf8cntysF2RRk7291fFRqRtZ5FQPV6uCjqb9PfXCPenyHEtqA6XjBEbfoedwcwkdMT8upxsAdadHTnyS3v",
  "key11": "5eRksiwGiTgbEQVLqpU4LnXoBSrnujuQrmqVYXEe1Nf8Kc6DHCtZiCyBZNeRuYQawwyfuMKNen5gbfX2Qjb2rK6o",
  "key12": "367uYTsPfL62n73Xm9C4ue3EXPPeNUKYBTay8UT7hLxNsF1xrnZx7719pLkUJDXetVNtsb9aWpfRjmWDPs584ndD",
  "key13": "2Y6791wvLTsWBaQttXZZFTZGHYpC984UeMpJtNHwS5osRM8mQiEfPQhzHC3nA1BP15cmMwHCwZLiL2pDuE3tYViC",
  "key14": "CKUFS46KK5ob8LJydxbhu1wMrNmPiYd82gLi9ouQ8SCcUnXmz7VKDg5e1K56XdL2rmcJzqupfcYhVs31pAAYSDY",
  "key15": "5Udi1was6H5FQb7Ad8Xvodgt2B7Uo2eNWPfLDNGatB6ZKrtNgjsRQfSDZUjgpUWASXe6zLtenFYVK8sXmAdbBstq",
  "key16": "3NGYYvYGAVteTHnKvFgRaTbXkGA22XXL97DMYLoooifAvs9WcWHyK6T8UJTGwCJHAERf2cquVLCWmVCP3kHuxMD2",
  "key17": "2AZ5EsVsCmbbccQihLqXaRARbuP4HNzUPat5rppcYgynZbbMBVgy6Cp2Pt3eQYrw1sgKEat2ks6sGGGxFBCFAzF",
  "key18": "67Tc1xRfMNyd9Ap1k46p7gRuoK77buKNGmnL98oD3iqDoMHb9FbtJ3jFfDxyFjv5Bhvrbd3qjg9DhQF4m5LSJwmK",
  "key19": "2YJ4CkcZpr5sD2fDzyLBo1pqCZVLPqssQSQWg9xRaqepWrwc1Bw2gMRMbo1SxYLff4v2iC47r63caNdhDvFGDRx3",
  "key20": "4H2bAhp7PNWmnStiG5YBanaKJcSy1hLPHK7gnfAHwdjW8XdqWyxYYSM6Kvs7uiCspEKFT1hAxhnPcs4thiaCjCTd",
  "key21": "5Eg4nywNj8HzKcjxUUfNBsxzzk4kHDxhgiDUBnvT9Zw55Vtcv2gerotWZSXuBQYSp7xtb99a4wxFaHtafYSwLQMr",
  "key22": "whYGUbRGZLZ3GehzkLd6Zqgwy5tmqVxLVouyUpHzyUiweStWaRnAZtBYUTr4eRf5NE5nUUc2s9YhM3MRu6oR7vX",
  "key23": "5vivfGvQAteVb3D24bnC9MAzBYwZx5rCiLRYKmwRe8rGPYZyXx5u2cx7HfNKnk22h9ZkRP5BGkRSiJ6m45HEW8C6",
  "key24": "43gX7V8EMDTKZ2kZKb5JTrmzXfZdDCiqG3UN1s7P6KFuAo9GdvAMaAgZ1NtpeRsEqDN4D1EqKQuHuruKEsyMQtBP"
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
