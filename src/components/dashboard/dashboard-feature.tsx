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
    "32ip2Vj5b4DVyZqTZCHm3KRebGZjHrAHAB5fyUyzWPPUN4EDLSCoJh3YavwdRw3U5jcUMpZpnDzqqh6UWMtzVZxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LTPdCAnDoiTaq2HaQKFEyLtcyA7hQWmGdvJztn91aVPHaVZzKUN9L9uwABow5d46741bsWABR5wVMYpVCaKLPVv",
  "key1": "4GKD1A9deTQEnGVvjQvA88bGtMn6jR8CCmff7yR1QYU3siDZqyMyyQHs59Qgx1AiF9f7EzB1f4T1vNF6QUwSJSSD",
  "key2": "2Y7FibmoHHaiwKFmQqAMLTKCHKwo3gWEHXYsiDLo9fRKULxBirTAzArwetkH61qKow7vggmVBpuAKpgfXgshG1zh",
  "key3": "5wYfKVNR9a8uQVS2j8MWKZSNNLFo7ah46dZUaET6drkSjuGTCT53NqJh9nrxip1GTbMiy7gNvQGZrqRW6xWRoziY",
  "key4": "jhwDbkysz7ZcrXRmPXrvWsMuxD8UReFvmNjohDqCPqtAiVRc6EinAacpPGrZERttsvREvVQj8ELoWcLR2APzNHc",
  "key5": "4TnPNaZJ9iNZBK6kSKHwFCNKpNmZpcLci1aGehJ5sUFPyjRvaSTcxwF77cGexShu49z5HDHyut58YE12WxGhr32d",
  "key6": "4Qg44JkVfd1brD7M3Ka3XTiaecWiUj4on1P2SrNi6gLEiPpYrVVckQLTFHPBA6iSfxUFBsFkWArypi4gkHqUd5FM",
  "key7": "1GyjZwP5tthzQR7Zm5kgv7FMyK4bpE4nzhVatNVDVTW2XaStBjy5Y2YQi5CBGd9m3CvFuWQnYuyVRc7dUkGmjyd",
  "key8": "44sUDKakGsqoJrgUUVsDu3puskn9S9TrYADDqTxsLkATKHsMcpGbLbyXu9fEZ9xa3uJPHKDP3TSRuN9WvpK7hn14",
  "key9": "FxvRSJXrLNwBVwuWm2xJ8FBMiZ3DAzxHVbPbd8DwwQMLSPmtAvTAonA4DyxxPhfTpGmCy9xQiiJncERVh6LZo1s",
  "key10": "3JefXeUwY2o563fX2Pd5czLX2gkgzZFiEThJwv4ZyQaWPxD4d5QyUjxdnLJGjQwaDfs3iJgATDmFtcNdrJMg47PN",
  "key11": "2QocEnQcS5FNheXwYTGZ3fwhw7YEzi5GfKcV2iZ5RcUiVpWnRvfpKt96gt2MrM7B3GxrUGWm9qPR2m2iVapTeMML",
  "key12": "yGSsdaRLo18ksP3cdEhPdZm3fpCraob9DB7K8yctVwgCAi1aC4715JKAPXvrVvYbZWUSQYKp72QicDyNdUaFj5J",
  "key13": "5sZm1YdsYrDT81D4qBxo4mkUaSXwwjTgr3Yqj4DZZcjwaZ3CQLE8DnXtoPFnxVwP5E49hLZCbTwaAtm4NR8tHShz",
  "key14": "22kF2WhaU9gmynPVbuXHc8CYzmcy2x9rscNaPWFDYXsjfhtb9vcxCoomvfgmSDne1VfezXBHfuJkReYyBSRt5EKd",
  "key15": "3un7M3uojj4EXQiMSapdh25bciKweBWHT24FsgLsmnbzSKd7UDSrRFu8n2Up27dW6pqUBPqewTRodAL6xB3JhgmD",
  "key16": "5JqQoaqgG7dCpSG6LyukP6GY3Rf9EteXn6QF1XHbzaSa5vMKtwNFzugXxM4sXe7Z2PciPN9tKQYZ4GcXjpUghG2Q",
  "key17": "31i824aJMPea56QhmGJTCLMVJF5NqbMbodo89aZ2Nj1YtfvLPhmHwX96bhb9GPK3zQuVweuG3hmsQhCkJaBKA3Cs",
  "key18": "5AvPMtqsw6o5DZRK1C1FvMb6BsSwwRD9epFzuFmdjbTTVC8q8sZjs8XXAvGMTgA27Peka9iejcsihbzDJ8bhzHqU",
  "key19": "2ncLiDJsbMDpzff3ioTb67LemtM6ArcCd4C8HkhZ5oG7fnn9hpeGp59bdpKMDYYNCnurXBVwNtCsaAVjncRNqDfR",
  "key20": "JvnBEobptE4MNoCwT7PMSAbkC1xKpzfPnrQzpGh1o8Zvu4y8i2s76ycyENopZno8R9P6RioUsN63jZjuBpUa9iS",
  "key21": "5qqRQuEHvXHvBBDVbY2eF4eHFGyS7AL7yTEa9R8BgWzwL8vm1b17v5EZuCoa1YnAYiiP1eWPhv6H445AHfYRB6sQ",
  "key22": "1Kmf7bUeFmtCozcErNNK7QgLP52P1zHuXsoAxYurHvRirQYyA268d5sHRwLHXnLJBDJWEgJC8hjb3CqcHco54dP",
  "key23": "5KF7Aqmi9FRQaUP4rnodkC9JAFTYo95rj8DD2ywSxsGw4vHnk1xvK5uUYJ9r6x25fdMaqQJoJWKgWvsJBu7Tu9Fn",
  "key24": "uSDy3ht9j5vVq1Nsf4YcknU2SrtzWdr4Q4QbvxCWUJohRNqxYeN6dwG1xvoLahf3uRiMnq1Rtxm15DCTzftgbfz",
  "key25": "PSoeKkiaQhMUDSzoPADFBYUYyFS9mJtw5uhCqzecEjFYeaYbCyJ3H3bqUEoxSTQ9pryRWnPrjhzr9o6hh9wCRyh",
  "key26": "4rzh7GmP6DPFPQkEPE3wPhSqNcDr6kiR1sKr4j9ZQwce9RigzubcRRR77gYjP7ztE2McfXqLCSrtAdGARzF5co3Z",
  "key27": "Mu1wPpjWg5dUYG9BZRnxBaJ3x9iyV2WrEtU6NWLpRQe3zZxbao7fGt4tvCStQtKTshGPkNAGGDHXxHcWjJ1zjYn",
  "key28": "4HvsbEQRKRHFapbDZuGpJPaqEFkwF1a3ihRx4xjLqxbExBhN9X467KH13Ev7dXARDeK6vw87rroWbmizeXXAYaEd",
  "key29": "2Hsz4LXuQRsvJEd3Htz1qtQ6E2jqa5ZYHgRqvx7UznoPZWjqrD9JMyGQegE4AAj3uHgdk4W7yc6FopND9YpyYTiq",
  "key30": "5aueNbfgP4KvzLaXXwSenVK4vhLV8ZSVDerv1zRsjLUMBgfrakheag7EFanaRRw9VbR8pnup6xW5iDASKWBz59n7",
  "key31": "qVZWYrcrWJnPHkrSJBQfUJ2vMjGC26aBiZ588hBXQU1CoDHy3hg8YVnUB3cRgJ4kaApXEqEeQSLe3qifmwDMJ4u",
  "key32": "4cWyarxEGEKk5YfstNjXBrGm1koikF9ENwdBvVKNijgrbfUB6i3fk17kdEfoa8cFcUPc5CUBmd5mMVXNQykpT1dt",
  "key33": "4iRpr84BaNJ69Zu7JAMUNYSVk4kUkm51BAYXhohsqXDhNBFkXsYDzEbzB6ATKVL4AbcZoweDY1c2hayu4d5DMjkC"
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
