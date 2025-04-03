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
    "3kmBSydmMziZF6i7iXGtvsphDXrGwZLY14GcP9RzjBXbTyegC2qkhevr6b2XhEYPkNQ8BLg2tvyfu9wAFXuwTBu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qELuWQSbrGk3VPuZ8yiYC3VYGdpyYSUAptD9EVY7WLJDK6KMsWHEgoEhTx4kiMA7mDdsx3pVc8hm5CXzVUEiXoR",
  "key1": "5U7N8vq7AKU3qUyV4ZeFuUnY5MMeeLZoih7RNNVeAf6DNzCnUfTY1swZPejxZH6fihuzobDy6mgDVAHGGEDoT7Uk",
  "key2": "52DzothYv1HfBx78uswKS1pahP5oyRqGvuzXbhY4HGdBRFyxJYeDFo9mcUsYvUNxgKuma8hDnU3pEEq5kvsf8Lfz",
  "key3": "2YHMDGNs3UJfMzfEUL4UY31fmSGwwvMX5vTp8QVtavoP1JbRAku1rAC9i6HkNPQSWT8yQdq9TymS3ARXRvBZsveT",
  "key4": "2yh2CThWi2pmuGp8yvLgYzh5DZ9sunyJMXPWsZZsvRCgPb2B7NmoMo6WATDrhUp6i1NVu43MCMFUwGJi3cQBuLEn",
  "key5": "4fssGJFozkote2JmhFYi3DFXhAa7dAQaFCsUJvMZdNnijMjHPv1GxaGCV1DEpFLZPyXPrkuAAabZ2XhJbkJFyn5u",
  "key6": "5kpfR5go7tfTLvLQb4Pqt51tmtZW3XztrXpRGsnDfU9HFGh9VM1ye9F8HRXzfdaJnn3zerguLTekcXAr6qSVyDN6",
  "key7": "3Lp2jQPqSy7ZqgwtwJjQkHhDpgzav5fX8cqASnX6m1D3KBsgZNRZRWmAZNYJ4K439u7yUNvojzKCfvKpZanBWPvZ",
  "key8": "4aCiEQWusi26SnM2nMCujvjXoo2SZ5DstvoKXFy3tP3fY6FNmiciuZyp8Vuz3p4aEs8UsofAsV1cBp4obx2g36jX",
  "key9": "5VyKBmWhDxTmGR5VwA4TiU3DY3VUka8Xu8cH7rC9VgQ4Ympwc2M17adL96t2zt5QXeh9gieWWVff6KEduLbRhUs8",
  "key10": "5ABya5M3n5kwH5zmdcg9xrA7RtqrkroPFhsUPqfP5YM8kEcrFPEpk3QL9wbUZsP7mtjNXugk2DW4fV9KSTRNYX3z",
  "key11": "25AvLDrSAs3XTJ1A3Uar5eTCEeaQJEJcomipVUUEtieVkiqUiuEnLMTfFgcdG4QRNp16LUe8rM5Rop2PtYmsKXwZ",
  "key12": "3hzK7uJN1vGSBVccLMPPDRCTAHhRYQyoR56sbAUFR7EMtqaRqiXL55o1NKbp2W4ub9MMX48bP1uszYjqAx4sQBN7",
  "key13": "5yAToq3gZGNgHu55mkJH7xNtc7q26c7RVg72iXgCYUkcQmWRJFvLtGtcHnHoPzEF2uzcg64FKLfuDNZrV15pvQqX",
  "key14": "2LEUSnhHba2ytQb5MYb1nGkpbzKrmXAF8eqbsNdTYYWo4HFxWBzKYuAQdxHXDwBbvMBmqseqtXRFK4QMj4gm1hkb",
  "key15": "GXKMiKrmBC8zHpqbz4VmnKcy4BVrToqMXdVVoYuHuaDBQSSCabk3uqcB3Qckz9fwsBy6xdSqtM53DAWLg71capp",
  "key16": "Sdzsr9T6s6az5S4HuUy3BmNLX2jQRMVqjKjHWozKwmRpGrxwBcTT2pgJVDZDBHrfNLNtVhpbhuarozzRcHtGPCA",
  "key17": "2UjnME8DqGUqSpC69S1KgCBYJGCzV1nZR4uY2pw3G27T4mmB1ZE3NAXHZJXSUX4N7dLknuNRp4Rp89nNRWPBGxN5",
  "key18": "2qzUTMLSHYJ626raN31YRVLsntyzCxgxYXZzk6FXEmjEyWHX3cvFYgNMwjnZq5NUYVbPXt7TLxA8WxGCwsrDkwDi",
  "key19": "55LdqTTYDoCpdSACPM8RMzeCRLCuoqdqGjkDWvzY1X2Mn33J5ssmu8CQ3hM7Xjd2GD1SrGECJertMwYPEUtQAZKn",
  "key20": "3PcvNmtrdaNoDayMnXiijnBQkWJ459z3S9RcL1oySorS25KUUXzvnTs69tNADcMqEm7sezki9ehJYSBVDdSCw9La",
  "key21": "2bqYS3yVfoWT5jQREaAeLrtAjFgEk6esK93UnjTp5zYobPQGWmbjtLsWnfdbwam5STn4dugYcuCefxQkmpKwYa1f",
  "key22": "3fiFCVv3kcP1jxGpJg1TMPMWveSnxLZkj6wqw2vhTz4qwNaN1BiLf3j1nc2NAj5XtswFbpc9SwJNcb7eugzTw3KC",
  "key23": "xRKC93up66QGzrLzHuDMvbz6Dn9qmXZXU5iP8xrS5DPs3W9HXJp66YJUb4oaaGjga4uovvkT3cdj2n1d7CUv5CZ",
  "key24": "ZvYgqgLKQChxnAYRXPPgC13e7ZR7vHWrneMMG1DFab59BLLbSD5Z3dN2xMvjDNEW8WCpPHyHQFWwxTUPSFbK1qu"
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
