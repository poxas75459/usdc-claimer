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
    "5DHYM4DJEN4X72shhp8QGhZJPEJdbQyUZsJ8hCR25a1pbVsEsJ3ZLJ1DUjQPARkUwVS3bTcyVRGCxL8xRX1secVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bXdWxmugZ1LfsJPipVRXNQpSEJwBZbjbvkE7MJPQ1o6NhHNqQDuf9GBV5pPDQCybBVTDspvXzDyusEMcAn6Y5ap",
  "key1": "gkyXi7K7c3jEVp1V5nmxbFDx5UXj1EfM3gekbmF4Guna5rUmMmUPnKQKmGF8r21yom4P7DKfjnukBgRYFCUsSC3",
  "key2": "4o3Uec39PJUszqX97oq8GXSDbFPBiwhdftzH1CEdZ1KA8YKXGEkavY4eb8RzfF4SSRVFjWLoJCp3KiGyXK5NPFRk",
  "key3": "5GmGB6i2rgp3mgNXeaGNGPe2Y6CW55TyvjRnpj7LSL5qa4We8knbmv8NUy1MBxLBjTDTYo3UkfULgnz3AS3aTgG9",
  "key4": "2Aw4Gc77xpQyX7pVvKKDVYDVfjGChikPD6DnB6mvi7dMJf2D6EsuG6UqpV1DSYCXHXSWRxumcPXnasmWormBaiR6",
  "key5": "2RBssXLiPchrWYC8122uQv9as1cTevNBqqx1eXr2Ji7r4sEyBywYbJ2TBwYPZKTnQJktMn1n2NxQaRW5rvC8Hfm",
  "key6": "3uC383VUGY3AQDv4jywRb9at8XXsBCWxVNkDuXvtQN5KFjmWWuAP412tbgDwhZFReXnsLMwcKDoHKtKEowwHsKkD",
  "key7": "4NTSSCw9KtxD5zc9b9WjVS4jFVUZTDdC1VY5QGxtP5qcJghbtgAJUA9R8HBBSaX9XWEsNB74RcapjRCm4HGmoLwC",
  "key8": "4QHi6GuMjpzEsLYMURZArEfJYpnPSuUgrpXr4oe6i3Zuqt78khRXJDJbDzAovJEsPP5B7oeFeSbimZDmTABSvjiw",
  "key9": "5MhfcJDmjDoBiaAxfKwTqZMRdQGpxUdNUvWEALQfcz5yhJVebWtWVN7FEbUREMiC5UUa9pCzgazSoX6qiEjfXof5",
  "key10": "4w9tjmje8F3fvZyrMhcLXmciJjwXU4cYpExaMyEh861HyBBgJbyqT63WmP9vMpEshyMcShFdP2UHmGc1wAEykyS2",
  "key11": "hTopgniyCJyHEqxcW8TijNS94LW4NiQHzQid5cmpdjf3dxV69DeLzJPfmXryAsVUdoUBD2FQYcztYEHRKaKNUQw",
  "key12": "2rQaPwNk1K8wAC5JvK1DuzCMKH13Sut9TXvm5fbVK5ceYmk22g89mK92nLBkWQehusHCXE6R7D2L8ERak59pqWm9",
  "key13": "3xRrjvWK7AmYekmd2sr2dzY1W4QYmYezB7yZZ9dRaQmdQHrtEqhAmuswhuS8vgx4vV99HZcyx79GNz6wGPVRjbLH",
  "key14": "3CQXV85GocAHR3KNYGEWd1UXixLHwzQheTxnpXbEyaHxTtMmHTBjrhCEHgCKvczjMBjRYiWbuj6qTHNXNERAEeHh",
  "key15": "5A3T4Lwp96dQtGxo7Nq2g21pNao5ELW763nwsaPRLh2fzTY6aFdxGzqGknPRmc1qk1qwTsNUWPV8pYwXUgwriULU",
  "key16": "2H9euaWBpvhCKuFwsGbMQNV9BJjFThKdTJaQFfgj1LRdTHYy7Z1cSvvyEHVFk9moTiQQGhc5Dx31ACLA5UtbnQe1",
  "key17": "4ioKWHdYHZREbqqGEyAvVW3UorYmfdAPKpW8YpsJbU9WNwu4GkLZzWtEZUTg8RNuRH2yzXu7REAHcS9L1Sy8iv8u",
  "key18": "3ApZcetzpHcRBPMeBeG4hXmztfmABB5q5PxNQi7d7w7XtKSNnqEGG4xSGYCcpPT4wVtGbanmqDh35k61tYiuASiB",
  "key19": "4KMP1SyUypSfQ7nmKPeZ831b6tjxUVTiaRwo94u5DEa4Lep33qmrZ24nvYMS3CiZsrfV3xAWG4ND1KEwqjrB2uL9",
  "key20": "1BWafQCsHyQKX5Vro7mBk5a3QwaVKxQoxNu4tXzpiYhKZCJWJpkqNwDcUYnHrb9LqVJ6esW73dJpo5m3sARivdc",
  "key21": "2hhFXzZJSKEGr8uAZGrr6FWRWJpFMmdXiPubLVZVrzop2Aeq79PnHfLPreV44Z98rsrWfvs4Q5nkmVma7WoPpdP4",
  "key22": "8eBrL6ZCyrGhCvMQeWn2kpZ85d6cgQ8CkVckmJ9qD3dBtUsDzyZH8ULq6qiFs46u4ZXK3yrTtfxakvZ12rn6svy",
  "key23": "5kFYR8xW9TGPL5a6ywNJXCnSFAtcENNPSwiV3NUcwrViAyhiU2TEEgvpcfNgDzV5o1iN5GXkyPUTnbfWrJgd2DTB",
  "key24": "44CWXoHDmEsPNmDSz2x4sNfxnVgqJ6VDw2v44RASReYvEu2YnK2VRSCXUJKqmy7nsRVE785itYuJr2oFWfJHPcxN",
  "key25": "3CcpjbhV3vZ6AdGWd9ZrhufLWW9gcY7TGpjKnmmQz3kDtDHYYMuftfySZACWv2mUm4BYstpvJpVhGW878WJ1VRZS",
  "key26": "fxtiog2XBGsCmyDrBXQ3k7uBAoucAYcVrgB8QnAjzJ3wCRNCX7euZxEqZmx5f81Zsu7NADGsPFXffLDN9QEEw2J",
  "key27": "229shAD2TfZJXvLafE5RptixpKavFLgcaTdJJcWok3XF1cpWUAsUCkBNQYyt9tVmqMuNgF9H9cMazzkxRwaAZ3TY",
  "key28": "3LDF8BhTxFLawrBmDJJexRSbH4PLjuRmuibcTEsuNXd8VVT7378MuK5BaJcsMcGeh3o7Gy1CCGmby2P3xoZE8pt6",
  "key29": "5BSG4PrgNUBpe6ZCTvbMbszPTkftjETWdUYgt57H4eZNDVv2voFrssYCDTdZsGMoQ92SNTVAeLykY87GfDLBt5Wb",
  "key30": "3UnWuKTygv7v9ZggkrS2SNUSMPzEgbRz5NyS7uoTTjnyTwbmATGjLRh55FjBBdnMk4GcYyVF1DekNKxVxC2dpXWF",
  "key31": "FSQaTvHsciTvbv1ntFRLev7MF1oDDuhXj4tZFZ9V6FH91LwoqKkZmtFJGG4cPXXcvvQm76BDed9uwTKhm9BdCj3",
  "key32": "2XyNhmTNnpppuViFLZKmHRKzPeSxkavcVbMxFYvMUdoHTSLfwv1iAsWJevmjz2qKsKsYXUN7BEF6fbXKMGDu6GHf",
  "key33": "rYP3hA58cmEicCaZDmDMRbg1bLw8PKtLGs1hjoVY1A682yhQvuJwWPWydoxBZUKXfDHVdMMCznqZPY829LfJkS8",
  "key34": "ovMSExvmTymoC2z7vgrtzMzURGtLD7No8zTveHn3ReAyXx51cLksRn1oHEMxUhhaxJyxNZm2TAGUXwgfMJNvVpR"
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
