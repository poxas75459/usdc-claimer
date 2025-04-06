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
    "5gFMBsL32XGCpgy5pLJ8CENvbWyWA6F1CyM3eUQdyyDEGzjuy4SuLEUDudJ8WKKFBSDjwKj7ZpYYjhit2fWRya8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L34wCxrZu2kLNFjWDVTHFA7Cntw7ADHXxHsoEuRtndnLLQsszDWbxZ6gnHqUrBTSEXvgpKPwFvrSAcs8txK869W",
  "key1": "63a1qtFigB7egbK4mR2o8zL24hDKQBTjHVUXSDC9LYDAtCEBCQVWPQ4T24ZE9qQYBxNSJfBHVv8Mc2Ht6ojt9yfu",
  "key2": "3JoQr4cJq9Di1Zw8TjxzJUPBBTsF5ByLq7GWePspcwaxUodXhsEEdFB8rEA6ZpXKgpb25xihmpBv5wc3waBXCMpn",
  "key3": "5yMqfkk2J1eDJ9rhgzs6oedTeHP6Kq6JujCRrUGKKrNdqMT1Sxg9T1ymhz9gFaBQqVFGqPnYfz6RuA5bSeEGcju2",
  "key4": "4zSXgBFwnf41nEDzHTm2Tk92Y3ZaADR3RMsGdkAh77CTMwuGndvSQbNtBXVQafeKVYSmPZZpmi4HHfwAuq74253Z",
  "key5": "5BQbHHqtqhb1DUMbsf7YfcSDRey86fVjMdxqnDvxaczh44sExtZFSS5gRkVWsN5rGix9cCV3LcqSa5nw2w87xuen",
  "key6": "2ToU92gqZrtZrBy8eLqLvQmRsNQyKybzepJLJVvLD8BeXqNXvBWt5qhjFKpEEq9dPV4vWn2Y5YUf69HC6ZS8i8Ys",
  "key7": "3nRp38eumBkFK2BnY2kfjRnKwV9VqRJzr3mLfCrzbC5E18yFwyEaQvLTr7cKPv323D19dDpFDUAF16Ensk6bMw73",
  "key8": "48phzHWoCFD2xMqHgeVkmNdmpDBn27e7yj4FuRXXXmYbwbL5aNTnExLah9uJxu9L5Y1W4meodXgkX43y1XgCd5i2",
  "key9": "27rBsAiVaDoePyr3AMJhwaw8HwYrfAf3nbCXsj3VhuqQbY5mQBDcVetvaMjmAthDGp4w1y9sk9wN1BCZJtWbPD6F",
  "key10": "3atsFetDF8WcgsfNsMZjT76c9xeMyP821yxcVBzTeV22MgoFskn9FR6CZFP7HcawY12Whp14jTeEybfC39UVx1Ew",
  "key11": "5iZgwZs9v7pu7nE1jX5HY1zkbWHWYW7uJHrJUQ4WFn325uYrDuY3M7FgGm6Cvzz4VinyLeqvjHSiUbNLKAwmmrKp",
  "key12": "3SLbmwKnzifJkL42zZjeZY6hb7BUuACpxWWTvYELpSRgbUYnR18spA6cMZfPh8GF4bDeYSnHwURmueLsRecJ9SWz",
  "key13": "5JA5fagWJGweHG38BeDKEEpCsZR9nJpXT6oRCPenD7mKztVXzJMd8zRiNpZ5ddZmitMAtQqjxrdayraRY5xisepC",
  "key14": "2KrhG17GNw9pVSHqn7iDtkbjw5fMCvo7VYCSVLGuQxnEPdcifADDS63cgiC2eh69oTVEEcLeJWLJw1cZZWxDet7K",
  "key15": "2Scat3iu3wW4xQ4z19KxE8yNZcDiXpZve4eTodtQr2Y53Mwwtk72q6h5HVXGFa9AP4t8vn7gxNVDkra9MhDx62g6",
  "key16": "5APvRo67zHNMBcK9gLi59VTitQywd9W3hoPFKm9VjMciD7XgWfbFY88zkEhzmx4pLb2idvTp43eVVBbwN5qjJddF",
  "key17": "5bTRYQZFPtAhSWap8KKR8WvtuwndQL49Ccjdch12Rfm63cBNTRJeA9cPQHQD95CjA2P2qSwUQ7aySBMqrRP3iSkZ",
  "key18": "2d6jzrSKGT7XrAhVLp3aTR5cNcpmDKC48m8ZWej2CLQE14hFuHWqYfVaDZj1M6jqodQYo71f89sYaAVDPJZb5woF",
  "key19": "BtLThfo71dreGBFyyV5crrLQxKwTmbDjFEBmCUfbjLCBP7qQZRNEVMFgswgVVMFL86J6c7szyUogJeH6i1Ln6XL",
  "key20": "3PrtmsdXwDeoaFhjZpsGiHmf6CR4B5VuBsswRfEbSpJrp6KxjH9QHEBWuaRjcXSQtLURc6A7GsTnkoaawNCx1Sgv",
  "key21": "5psgeqUhMjhPsjgheJCicnWyqpdpSdXcQ66q1Z5rCme5qtPeHZzvttad2CSVFTaJgBkupBxtwVdWnM6DCBy6hXoF",
  "key22": "258ZWYESrThZoGTcv63xeiUYtixxHcfeESjVT3UXwV3d1gLShHZS3b4k2b2JfqvYrgLnt9TBMotzdwMn7MuZCF4E",
  "key23": "3D1AvD74RXEVsERLr2Ykzkxw761w96uD9MsbaromZ5owK3Rz4ajEvQdiNwFZ6NcpmFzhscebEyvH157dNAZ1Rrsx",
  "key24": "6wNxedzPUNK1qmWYvMtQN3pYsHebJRRqFKVX7GRgCYSwoRaLzuTNXY3dYJn5HGLstf5kH4EhfGKBnaR5n4s76aX",
  "key25": "5KjyPPfjxTx1Av2Db3owJPe3MDs5cfhv9Z9RCcVjMA49Yud8b8ejaTCwiVvKgDN5cBSQ7h9gTVxj3fwcUkjnchnf",
  "key26": "3KjngwDe3poxq6Ya1XVnW9RpzVq77FkQrWFZ9AGLJ4hqahcqx1JLn67v6iV4AbXhA8YDS45kZh4s4jBQaqskbEGq",
  "key27": "55JG8vwcKALkWxMgaTEASJ5VSaK63gPXPbPFXNun7bv5wQq1riWa4VLGiKbmqiUbTdFWYYTVaVNsCSny5JWH6AyA",
  "key28": "pCMQeD9exCwNsTtRbqBhfcyzJci7wh4AH9KDWEH49mQ7cbdkuycoWRmQY277oHZ498pyDzKKfUDY47oaVY7ZkzK",
  "key29": "581CBeERKC1EQ1HFWYDvLJsqivHv8NA2Q7GmcjnfB1Jg1z5xhxS3J3fTJsqr2BvaSb6ko2PAbSSgWP9w6aWquagi",
  "key30": "53beZYsYBGQUgLWC1XASRtCUBNe2cL6b9Xx8uBePo5aYA76hbm8j5kfkUAuBxDSpmW628Ny1UmFPfzTEu9ui4kum",
  "key31": "CPU3c9rqgZppPcomNPbus6riytAJ332yzL75xtAb1py6Dp4bEv6oussLF1ThxhhMZAPbZdmYmZE217HYwqjQ8GJ",
  "key32": "yF4Af2PeH7XJxVoaRMTFjWC4QZnYxvoyp8kGMZygWicYaxZiYbPBb5rG8kRZATep6GcMfXeWFJ64Xx8juRuoPD6",
  "key33": "48Et5jS7fdCYdFxKEbakL8wRNH9wvg48kEGc2QQm8YDJXXqb6eMsib95tu8NDZUxUWuBN3XFzPpDAvs3nJ7xPTp5",
  "key34": "2BXCArsGbjqs9fCDN5NmosxsLSstUvjqhgMvPfV7282BvR2Pg73qC8mPVvhfFAR4ScbwN1vrQkBCqhE6zn39W8cp",
  "key35": "2nN6G1pB49vCugCMzAACTcy2QtqJEUQihqmqXdfAzZxxovSwrPLnf9yisU1uQpYTUyJyrMVWQHm3vT9XL8vX5deX"
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
