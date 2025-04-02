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
    "4bV3cnaPhWgVkEqxi6n4bN2Ye9gen6RyHSwVesCgc5YYPfbrhHby9rMZ5QSSwZCaPxFhCphpEupQd9m4fLq3v7h9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SKVnTJbG9zZgUCqJYDBDVNZRmZ6yimGohN5mVLBwR5TtN5aSJSXZnraiyLsqBnhZvqjnCYDz62K9tmNEWwyUTfF",
  "key1": "2KPMPiLg2Qi7sLu9ck21tNgBM1er7UvWuuUF8kb9ULM6wCBrCWmvcjNPzEHP3V9LNZpaizCuRjZPJf76QkNDVCzL",
  "key2": "4rGc5hjkYoBYV3cDYnyoEw9Zj8BM5jPNv8XgKXM8xqz7jkWfSNH2Xqxu2hsRcqrMEPARgJRNyJ8GzTJL6gnMj7KA",
  "key3": "2ENQdMttt1fDFQu74B2JzsW256rap698KFQ7wAyrLScKZr8wYCAwqrLZETcJ8vV82FLKH9WZ6RupkKeewhfEVdcZ",
  "key4": "22E1x3TFMhPDZJEHjc3iS1VjDkw6qduMLCEDLsmAoM2SMbwPWbD8mX5Sk4uh9jqyuoS6fL6cFzKFnxDjXJbd8NxD",
  "key5": "2HPRBmNcwKUgasboigM43VSDWvVtELz9oSveMEn3qMeopb2BewL6vetvmqdqWpoBir7G1RWHoypkoveWrwdAYocW",
  "key6": "2XPoU2srMPXsKuDPDyDRLCsuYGy8XhAfksRW71S7bckVhziBhU3YiWeorSBh15HNiTcQnkoS51HpuQvsLvrWaqZd",
  "key7": "5rfGxqT9CFx741mioGMhZUUQaStgyHVbCwwTUwBKXWzs9XQab38aVPZzDJGrp5qeL6ysfUp3XnvEF7c2kbZrv5FG",
  "key8": "413BaLZtQiDSYqKoyRxtQrCVaMTcv6DUA6J5eQPH7om3DCEuCZ7GxuATsKWbq1HrHJzXchDsFWny5YJ1XemYCy3g",
  "key9": "5Wh12rtrG41bR5nZ8xMLMUkNTc2YvEyZP9MHEZMw2c1Az383XqfQQ7pAZn9T1GotkxDpXQnwXhmH6sB2av78MjPs",
  "key10": "2qZiADDwWdLiGrKbMaeBLaxLkXqLNjspSbteuTN15Tdbde6iqA3ahKwuxBSy6xEoMukg2mqF1yL27kME7kkAz4S2",
  "key11": "5bcA7B5eJPAytEkHir391sDt9V7AJmoGWQnaexmjJ9B9S2uu94BpDFo1iq7qJtTKf9bExFC6AekDvfhq5meLihea",
  "key12": "7UXQbG7JHDBUsTsG4pr4DGJdHTK48VL3XKAootf7Zu6JHLGr52ySDbLL6NVSDr6juT7HBGNqgJkfkH4fTi63Sqn",
  "key13": "2J2PkShXJ1iAXYN2BLxVxjGNuYSb62eREt9Pse7FkH1wQzMhaf3UX11zFSn5Z58zuUZWSzy6Rx8ykACukA3SUhei",
  "key14": "2TyghEbNYB91M5AjpRnt9hTwcTpeeqFnwDauWuiVptQgaXGLDjPShaqXMJwEGnxUuZzMrJDk2z1WZMwcraYb1td3",
  "key15": "55BErio5H5sBThHKp8e3piVVPUT73ZDttBYX3ipGhJyFW5kriTCKmZjgJQPVSFLckXHmtLRV8vdotqtiKmFR8GCz",
  "key16": "2dMwqTewt9mUnnAhPyheWVdpW4VvSt28op5eyn9y262xUE7CrohB9mhojQcU3VY2y6oM2QhtBmCAec8KhgJT6AVn",
  "key17": "7DgamPcMT8VN2prh9c97Y8nTbY3RLaAGwSe3j5KsZ6HqDQDax6JJWdEQjaos65nVcEhaRAZKXmzbvnRKguf95Nx",
  "key18": "wAbXvvDES17XBsxmjrXTqW6QFB62sPSWdkWoUgQLD5PZr2xUimUn1Nme14HpQ3311iEzYJxViEUGzaue8y4GPK8",
  "key19": "2oxiKJbMZnycgcZZ8qj3UWtT6WTYtoYP1otiP2aVs8MDdLdbPxeejnbDAw7YGUd2fu7TTkdLGuTiSFVFxmnUw44E",
  "key20": "2uUks3k6o9Laxe8UhTQtW2gUN2chc9YFPiXHjww7uSd9dwdZgtUhc2vbn4quQu6Z96ZL5BPaikB87xbxtSZepacL",
  "key21": "3FUqm3vWSY2nmCarUkMnwSSc48vwZmBwH3ar7puoAJ4F8xbaMRiKLmzo9o8hhjfisq1hGXW1kJbDRWtGtepy2KwA",
  "key22": "5dxvXVZ8LBd6Ut5W3jC6yxnPT8G1bNyWBBhTdjZoUYxxhUhSeTsLgWa3HxVhtynBNEM9JncxY6mFcWjYAKZueJjD",
  "key23": "3zEL7b6JHgC7quBdGdozzvWcx3DS2veVc37PbGmD8ac5kSRBMDbb6bfMYaoZZZ3VaXfDWEE69FeKjwNwAzmUBk3K",
  "key24": "3iD216SD2QLSEWEDXfE8c8chyZ7accKTL6JPJh3gB8tx6Q7rgd2kKrZqgKPPqHztSmKjmgr7fBpHMBsPa3rvJUai",
  "key25": "3xjigGhkFKMpzqxKBRdd3qsz7PtGEcZH5vDqkJjwHBoXZkLAgjLSLgpasru9Y9TX2hWkms3dBgbje8oS6wc7EcD8",
  "key26": "43jbxzeg3NNfQTMdcT3m9SRVS6XgutAuNYXMNZ3q6AAXNngvpz8BBUUHQ3WL3meDkhEgAoihaq82Usc3bgh6CWdF",
  "key27": "5DB1vwXu4KstgxGsaBCJWAspt9L7zCWe9GPZqRP2fuRQnmxhVPYBEtQzgApG42h2ektsjTfELFiTcvUpovGzBq9j",
  "key28": "25FUUKNb5baHXqWxPX9Q9DdvU8ydmK9AeaKWDS4sxpQhGuZseQFCjuqbGF4tQxSGFmxKUNHYbLKNPhKCntzv6QWF",
  "key29": "2Mt4jUMjazrXU1az98c45opsfexPyR5FsiWHDcYsqB1ewKDijSy3XE4HRqSE63hTcUwLD6DbNXh16KWUyWHm4zds",
  "key30": "4sAYYF8hr4UbBjgXg6XqH9jMC7CwRdyy8ZszKTBwFyy1i9boMmfK6vtHZFMR3F5rZ9EhTCym7tUjQJEJ2yh5cqLN",
  "key31": "2U3fWMHHmWDUVZ3AThr9LEbPBSSpM8D5iC24gjtiyMpMTfEgQUQ8VUfbaPwqi6BnunPby2ndWKHFE3XeFN5MyjRW",
  "key32": "4moLKu1jvWToGXzJzATpfjyzWeAAZATqo5AXrhRAy72oDTK2xbxNPbCfU6MLdsreqr6XtZScdgyBPsS4g5zL7nxc",
  "key33": "3gKqifymKgCdQ8S9twExkWx8xSY5H9XJNBuysXseNLnMmKTNXfcYCWtjmULghctVKyiYpCitdnG22XAWFXzPyZho",
  "key34": "58UWLwM4HF7nLppgkQui3CCmnoENop5kSEhLjuQ24N1tKTsLV29HC2f4byHmEY1GdjwXiirSNJb3gpMZh3kvFXKs",
  "key35": "59HMtjmkYKUtQtFGFX4Wdt5oBDQDo7PAwoVaN8bwH5YQKGiy8JgMbVN1drXivpev5hNd3q48KMiT6u7v5XkTNz1L",
  "key36": "2t7LNUHCqjcqh8gbyB6oXnmTbYzQrfqo1BSDLSfE9E3kNGeBwmd3RRXXMufwDfG6gFbfZBzjgKLH3DQNukftHHGB",
  "key37": "21bP8W8BsmLqEB312Vwy8vqZLRuxkFWEYnk2aWNjFexv6K7NgnqMQjfenLWMj84443zEyS7wV14uxNpPJSsdtxay",
  "key38": "2hgyw3i7C2WTzHaNU6RNtCZY2FqwSvxgTbC2tYnrdHqnV2DBPm4eX3nJAbetjzpUCL1svUd6c4z6Y6h7UiDsphWe",
  "key39": "4ZuwXCskRgnrDxrnzoCvuHsKLHSy68zLyMoi7LxoK3djSN33fua3Syt433tSYjRz3nH2MtoNxsifpbMu9LovXRA1",
  "key40": "58WeBR127AXoJEjVHk6A82GBDU1ys9EpCNpTRDkoN395uEuWV5sykYGd9aF9SUmaW6pNCLij8PKku8nD8BHiWk5C",
  "key41": "ogYj6DMPTkrX7xTCv3uT6yJ3LVvkN77T7EWVJVhz8CnHDeHrG2VG1qBZe5HaXhLFWXoMc5XuZS3US9Nsa5utnn2",
  "key42": "5bJBGuuf6GeCwz9SKT92scbRpA44xPdKTL93s3aLcpprwk3ZJgsH1QVHvk581fdbwqDLtgAgeUkuRA3utNSbRNw8",
  "key43": "DQvrLuVNHjngu8rkqcndSUmjWZckzZE964oZ1ZiFjf6TMHep4DB7seDpw1Nehw1wBukFVUmFgNz15Z1saT7R6ok",
  "key44": "2p9SW7PZ3KBRuY4juHxnN1magGX8YC69wXU5sD8bXDrYAkqNV7gBkZzsgCLLfewvyeVbqjKwrn36kRZsUVTKvHQy"
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
