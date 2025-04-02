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
    "5VyeuezAapFt8xRrawbzSoQPFFsmbMgteqQcDnPSawP72fXcP7g7HnWeQYNoWKEcuiW6vSneo1Su7NU3oJBPcxNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TLHrW1FnAWRBDzCpndKFFVegQEiXviGhNkDim7EF4Mtu9HVaB2q18T9V1oUKJFTuohnGdcVRHfq3pnHcU7HbiQ4",
  "key1": "5mWqa8o1jv64Qh9qf6wfam87NGTiZxnaPLv9oPUsotmvZhETLdSWHo6ixBES4GgjakQboGrM1NiD9ejqyBSW5ACf",
  "key2": "2RHh4kXU9x7LWcAvV26dRVc1wmsAWMBJqqKPjmXQ8kAVc9sDYeiwcXoLVEfQxedioMzKgnyfmupFNspso4Fmc5Ce",
  "key3": "4dmW3PrdMPVA3YSecEPxGt3KY4DKDSkxwG2bp8ENYrA6m3jTV78fzzPzgoHGq4mU6pWB32tgGxugivqrbLQy8PE8",
  "key4": "2yv8tZPpefF8SedVLFcpZGTCYUnYktYJwAD3Eq9HJGwANXNAB5xwNvC2ZsR33TFfz13ae9uomUQg4RQWFgUChzvo",
  "key5": "3kozeQLiuJ4X6qfGqxAoS1xGm5jNmsHYJeEuFQmSkWkaa692QknTGSf5UKvpX6fR6RhdEk4ZLwQiVp1oPihYkdY2",
  "key6": "RiqfajcXnaEoePykzJKt2VVHqFVYk47kSJiYL4AJmT3uqS3CkwQY2EGXsGKZA7rbqsiLimsBCL9B33y2kowqgZ1",
  "key7": "62YrTKNo7ndWUWsq1wNPtAHsjptenhVuXRQaL3SVaDk9vLeTkaJT1P4KwDXyo5nKxg7XPa6KyAiCEwrMhAFNo8mx",
  "key8": "23oVd76996rdHiKtY9diMJMra3kNVcZBQTz2ZPEcE9gQ4GYQ14ksbUmm9qj4KbySCN5gsmbRzUqHhUZpm1hVb4pH",
  "key9": "56e3C4y1qDKfcoKdYvukitEBGVFT1vDcFW1MwPcRaefBGooxG9unn4vhsXZjoGTFHc7rP6MMeGAa1ETkuvsi4QAX",
  "key10": "4HKTDMxhTUSg2dz1boe1h7QimcrvDyMHh8sfCoTvMpgZXohEv5pMN5ET9NdZxw7mkBGut1yFaXJX1kZwLUGmJA56",
  "key11": "3NMssBRo9HXuZ2PupxtwVMgWTZ23g1RiHfSJjrJHzWLQuJc3WPp7SyXuP3PMh2eeKwWns2ncp3c9P6ABYjLQsf8h",
  "key12": "5rzEfnZYiJRGQc6Ax8WXtGrQ7b6hhiDRQaEWB8AotDb2jxiWDnzFw9Vc8YuJMFu4KYK1H63J25AdwjfWzTj67dun",
  "key13": "5m6Ls6A7psqM4Xx9AnNPgmfdNnfYWpg1KmSz4sFmJ8bmihS8A46qLfSMhDM4Getu1XiPojWPdAfa6TAecEXPRmfV",
  "key14": "5qoUQxam62nW9GSjh6YgReDqaNzutBKrkswfzdBYr7Za7iBupA39PY3UhcqXVwMtgwpQw2BZSHUsU1iFFnzWQonz",
  "key15": "4EmemaigxF1MRHP9bhAnunPVziNdNCiCUS4PXe2XfkwKqgviQrdYMrm2N6k4BbHLJQ2FWFE5bLGnfAqrkbNnyecC",
  "key16": "4fvRLwtNewxEbJg6eLxZvf7S883tovZg7aTFBajHtALKipgdnYHUjD7F7ngu4GHVtN8pRYt4dWYFeMEFkxaEqWki",
  "key17": "5BJ6uzSsteFt3vzvXhFpGx8d2PiozL8NJUpWRoaURmEaNwh4N2rkcdzJ9SCUxmKMZc2oUjFraRi2v9YqZ43abMEu",
  "key18": "4tJF4btTJi7KoZqsu9aV8P5FfTH18Z8BdmhGSbgQinRzPTWhREY2Wp9yApF2Ut7NqUVFwHbgkKQctfNaxDX7M44U",
  "key19": "AL2U57NRa49ZkpwuSNcqAu5DHKbMqrUi8474u6TY2JjCXfMmaej52pqvY7uwPixLdMUJdq1qX9xUbjYo9VeEGXs",
  "key20": "3x7gWphmsF2vLi1A8SgMmqru9HfmQXazwkiKtbTqh7CjqSULF43iy8F9T5uiNQUtn5sV7fakVWwXHy4rwELB95PF",
  "key21": "4QqhxGkzt5dzxsDbRmPy1PjBVssv25y639CWYCUX5BW6PEGJwoZ8USZbxnEWWMzEbmny3A7B2dq1Uexe6imqfZtP",
  "key22": "3zBG5P7gkG9VgGgFASyf82VcUQL7BnXSBEN3P93nGHSf1UDwc14fHtm6PJq9NCH3bCbnRTDC3Nxc2TYSrzuUP8sG",
  "key23": "3cqP2QeiSPVuEMjQaCBp9ySYRfJJxNp2zWDAdSpsYJxnGKZYp3csUiArhUV8e9A3gpWzh9jNgeU1sev6UB2csEV7",
  "key24": "2MdhFYX71LfSgbE6pruksTsxW84UwLb1Yd8UUCXzYhHQHnxPsDWh9XcHdcS2SXbycXmxhvbBcGAbb6CR9woXvPGd",
  "key25": "Q4ptsDymhUwcBSpq9yQvWA8HpW2H36yqhgXEWDQvorcLDJFirSedBuh5F9BX9T7khzavgNyHP3fHNfnxwUvZxnm",
  "key26": "2MUCDFBBavf8c6iF8U6K2SXdh9GQ3E9vn5ASsjYQCAx8ESsky8SsAqpTQ8C61gj2eZNSd7TTfsy1bGLq9e4c5TS1",
  "key27": "27C4C2BBmSjoCcxYtPXsBvuDe8JUtb9Hh6oEWCTRNpeo7m4rpiuGkenfAh9kMWsSUyynpNkCrQ3MsYbu82bvJMmq",
  "key28": "3kseJcpyiwJMNR3FnFzorsDyCNJLmCPUnw7cMF3P8oLAr4mJ9w2NpjvLFiFGZdxVY7rWtjrURbKmSiGUepBbYhjU",
  "key29": "4Hukg6nKYSR3shr4tu8c4BEMtLiJXrTRB7q2Vy9rGQs8MTptDPbQmrdDmM7cFTb6SDmeWvA1kShWHVTA2K5qKC7G",
  "key30": "4e6cBUDcCxFfCjrRFFJepVyCsn4cLVNAMfxVWcBLbKPJVJ3oJZfpZBscrAh11pDSprM4U7316F5zVenC7VJ2YgLY",
  "key31": "Bm9cMzCbV7E2aZaMRDUwQwes8s4DeLYSjpnmzbEf7jzAd7Cd39NUu6n38V7r8REC5S6cGzvTEvh5DokGz7fskym",
  "key32": "5sSKYCEYo4K4vJvYhnMHxqL8sTfJrrkQLk9BLMknHG2gyLjA7JoLtmpyGAuGW6aFRMrab8Z3CRPmQbWby2wpS7kg",
  "key33": "5i8BcvU8DcKeMCC3wAeHWBL4pZLyi2wQy9ZJgA9MsWJLu2Kkubqw5qCY2VK2QdxqCQuriF3Esys3Ln8gCHC2SsqX",
  "key34": "2EiEXyutWE7Fh99mX5FAso6FnQ6PgvFjni8uBN1v19uZzmeV2tvYKvuoiVrCGcM7pYbyZi6ccw4SsU4LymAvMkSn",
  "key35": "m5UuuSbdgjt3aoqASdme4K5PTLeypwgiJFxAzJbXnFmfVNknzY2gaP36mWSuPJ7ZUjxFzUHqrhfWhXtHEvGC9d4",
  "key36": "4EpnD2A7V6G6z8JTD1qaB9ecPst9GRijWVn518FS2YYSZG3xxGUwKCaV1MUvjoXZnT1Yu466gBdjkzfP3NfErSyF",
  "key37": "5Z8ma1m1gaqUo7BAoh3iKQEFNWbd1Q5LZJXXjnwsJXbBQArDrako5Ca98p3B5zo5Gpbo56JAhUGMrvEkzina88df",
  "key38": "4VavBJA8nbpBaRxJM8Xyko3B8s8M9S5MVHXVH7PsSHhAXrTCPcGfcmQhSUqsYC4XqYnZcsZWqhmzGKZD9L8LBefX",
  "key39": "29zx9UBSrKc1JpLH9KtT6N295XPTnFYry2L9GiPSjCFndhUoAKMY6Hezu95Wxt35Qc1kyr785F1nScxRi4F4gB57",
  "key40": "3a7nzWFrkaiVSLQizKgn4M2gB8h2MCJiAzZcC4eZe3Bz4jWpJWNe8Ji6JaMjJrqPZDZdTegvBxD8VYNppnBzUEKj",
  "key41": "5yvvmG2r9B4qqYiMNLLvnptgZc11FbF2PoEimdk8x7gvCWNju33PMSLq7smgFvgcXX3ECRCaQ2A3viv4PHdeEJ5H",
  "key42": "3ig3eBhiWJbs4J5epLUfLPyzqaKKF53NXEo8x3uHNaoXLWjBn3SqvxUzkfGNmdGjL8Hm1viCRtCPhTZkmSvVb2x3",
  "key43": "DqPNAfxJ68Eg9DgQPscwNRoQY8bJianNM62iREwy91Kp5XUJJU1zxDCyWDgzsEPrPv2heCz7oBYJbRKC6W8pXAA",
  "key44": "dg8Ec3CjfTTr4FcqiVgGrfLzefNtrobVjHmeJwUY9WiQtRqZHyqMr4CkuqRow8kGeC99naUH7Gb4HActMrMPgdt",
  "key45": "2efaMxz73F8BPcWH1ppTwx319YgBC4UW1goa7RVF8bM26zu941D5EJbn1RQkyR7Lr2Pzsj9zq374ohMP5GwZdcX7",
  "key46": "QJWrAyWFS6bW83dmMiExxqrtBvx4wruW3x5b3uAdraZXHRfSGREMeywEv4RWtrbh63S8gwkV2UetMZweAHTqRH1",
  "key47": "angmAUbbYr8JCMsGxFFPHPFob3H3WRhVzupxrTVzjtGJ9dxMHRkTDH6dhMgViahQE5dhXHhyvraQr7AjDpvJs8q",
  "key48": "KwJdwofgpLCcza4iGPRzk5sHRVbdEyCs2fxe4PrMmH4eg8UhwUzUXchEDzX3Hu2y2QWYP3D49Z2NgKiUtYDMH5M"
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
