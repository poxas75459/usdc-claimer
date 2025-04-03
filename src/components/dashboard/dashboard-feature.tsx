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
    "4J16YvuBfzieadeaeu32tFWcFBRq5dxsmNvVgxmUX2S1zJhm1koTpMR4CiZ5skwDEQnn3Tq7gWFJSaJtX17Pzwuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MRCCFycGL58UEctHsCskgbMY1BRP72Ghf6QxW99YLQUrbwLTZ6cZ94vGFMm1Am4Y2ae4FxzGD7XkkhWe8fpnNje",
  "key1": "2Hvz47NXjK7CVfT2C3fwMLmHtoY6zgRmiWV3efMSBJMnNxpEo4oKbcoUucbevTWkAsPoPAPDiTp1v8C4ctXJbss",
  "key2": "4TSoA1g9MZsaKquQmMe1gAUdM5PCuQZG3pNiG6vkgMk8MEesNSaSPWxGVr7V5VBkS5E87GamgU5XpcG7UK8ciprx",
  "key3": "28BMTd9GDuqrWcc9Rk5gNxWY2NyNq3P4vNLi4US8jM3a4ANppRUDcvofpN7rEWYbZvN13T81e7Bz2aiudtPMm8Q9",
  "key4": "4NtbPFk5BA5TUTcdq2k1zXyCkjeEysLRPseS7ckTKD2GqnU5CYStvt1MepJn8LhMSbETrWUXSkrwGrSSNCqrxKV9",
  "key5": "NqmjJwRKm8hbv8Rvm6ygz18hN3CDKgBAE1HpTDDCvC1vcoEZ24Udy1s2Ck7gGYBKHDDKSGnCURajtYd5F66pj8Y",
  "key6": "2paLJLesY8r1LQTckRKuMBi8PT4zTju5ojA1gURMkUoDKr7cdM8kvmiyvUC1otwBq6r2d2iU1BgojgGqjhp5fKgP",
  "key7": "2TdEqPDy89iTsjN4ZHHWWWcKAWmy7aQuPkuFi44GPjnU8xSWwT5YbNzo7JwHRySA9WdYuZf71qcCZp7z5eU1PPzW",
  "key8": "3b1XBJy5zntHEYhoxkF8UFTVGrDbEfXMrZyeixQLotxhPGcuP9wY4znk3WJVZqDxUsHs4qPRqfWaZ8iG29pRmiCK",
  "key9": "5TrpZJsEp1NFGf4ES7Jrw4Xhtwnm4b2WuCQQc7AjxScNL2wPY9YKxKoSbSAVWjVGu7HdcjZBgsAHq5YTPgf94ihE",
  "key10": "owzAAhBUq28Vtbt2TE5BsxLbUzGmYYuvXZ1e3xK3PAs52wX4iVZ8BF3bAsNncRsU2q5hNdRVdwteAP7xvdz9nGf",
  "key11": "EyaNdi9iuzxnTd3TtKKAkbaozVp8WXQoyhDudjBaNEH7uvZz7L1eBvnfTDFN5wnuSmV1DkTWbY2xgkJyddaUSiP",
  "key12": "63ESJ6AFgdKSXPvZ9o3ND9EDA7X78i9c4Xjg1XsBgarBUbsYUugVuVLNQAnDPfsdDJnMM9LgF9QgixQwZvgYwaHH",
  "key13": "5tadJXRuBSUr6yMCBFcHAbBAUHy4yoBJztwuKKRL8FFiwT1b5xvfWqm6uYp6frs5tRJeLNppqyQn9q7YSMdLUnhS",
  "key14": "61F7SVZHaSGBEqqRbHL5dXBSur8vnaPEsxFxH9D61XTANxCgdeQUoNw4kFdeCfJoauVDBoJg5Tmo2KcYAvGB6n5h",
  "key15": "HeW2RkBqSwfNt7awDyN2BZPqREAtC1ULhbB1Kdttyuw5eBNo1vKBEWnTkpSfs3FYwiGu5e64dKJZUisY884Wewg",
  "key16": "nj8WTw9KQcT6WATZ57NhsVdkiyWgmyFGRBmjTGEvM9axc8m4j5hWPYMHpY9dEoVc27E6n8kweuxmjqAbk6HZKYU",
  "key17": "3J8FfxiKMv9qbgnQcteaBHGv7doMaHLfXuEzkAhHUUWg6ZCwuQDT3xb8Jide1H3NqyPChaQKo1SuS6VPGtM98b5m",
  "key18": "2Y8zirbtyCxDBi8uqnpzYMUMpK4BqoZzkFsMDfuunbdA2Q1rArV4qC6DnNN5t9bvg24LeQjKJgJUobeG7A5aUDaY",
  "key19": "hbKJRE1zoCw4U9VWgv1SVhTvRJy3AAhndGuhEpLzybVJXMAySF6J5FFVHv8xyKnitJGr9eQEJ6Nuq2L6FKWbSAr",
  "key20": "2fG1csJ1K5XwZg4uDm6YFiJLwUizHAJ4BwzpsN27maCPpWaaGjYz8uDD5KXpVYuLjCifiu3D6c2TBW6cmsV6SGe8",
  "key21": "65a5Eap1y6aFxerKjQxmpPBbR8K5GEDk6WGgSE7BTUvHLFnF9SosSQknogGLX8QSGX6cKzgSvAVh7AaxwRkGaeWo",
  "key22": "2B4Jy4tzJgxuF8UxPic5afAk8PvDpCxdtTRQGizF3MWREymqgPMArpYnbAvH5cdPzXUtkUf7bv1CFLgz67QyC5Z4",
  "key23": "3meeRJoWsmGZHUgEygH1KrzYVM6LWBuiJNQ2AYSxAsuDdnpSpZxXidL1s8xxwX98LbbUzpzRGftv29bzE6iN5EMB",
  "key24": "65zn5TVqNsXBaKM2AnT2iVL3CwRoqaDyBn3DNnd3d843pJdbAS17k45xq5YJQwZkhodFJDRCPFxyHgKMXqMYTqZA",
  "key25": "52o12Gj3QFxhACzu2rKwai5p7ZPb2GQLuQUbqS1ZqZpYpSmMJjUWoa5ZnCf6zd7RVbkJ7ugLaq3Pe5KFTQWg67UE",
  "key26": "3i6apJe6oEPZ1EdKr54oXrkiXxrB3kWZmtbDRxf29nP7HDwcCTw9cZqv5sFM1xzENVgwN9SpMosKzRsewsPMkxyh",
  "key27": "5dLPh1hNrFAmnvjKJKY84yygHdFifxu3wfWrbW26tRNiAtSMrRcgYSvKf7ZRq4nY1s5e5Pyky7zKeqpR3dLJVb5M",
  "key28": "36AJeZAPKUfGWQz3nPrhuXjDprpWfDp8Q8suDhDwuKMxfgqxvbD6CJD8AjpmBcF8VHdDxFUZtyJ15JVUbyj14tm9",
  "key29": "oEF64bBusQgv9bkePYDTDBZctqAb6jVtJz7QqeJ2dFUCgup7jVdi9x1zKNXop1D2FPB5UWz5T1SQBEdg1YgXNt7",
  "key30": "52GFjbEF6UkeW2roj3FkQij7rhUuZ3ACaKGr5yQtCpPHBbD49LS9m8XiPTXHuJqABkQHgyr8ubs7FLhmKy6qzz3v",
  "key31": "4j9NT1CvNLoGVnMb12m5Ngw9x9Y9gbwqJBSkHhN1Y2xAZsB1jfbmTwJ7kU9gMZb2Rh6MnjqKBvsE9F8t4cTcA8mK",
  "key32": "4L3myZMbTzJ8PfREZ48hHKLd4ftwZpv66TVMtc5jqJdXQRZ4yjdXQTnNvdh6oHburxPLN1MMnzsDXsbPfTBSs6Sc"
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
