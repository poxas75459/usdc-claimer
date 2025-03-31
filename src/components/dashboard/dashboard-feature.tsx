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
    "5vuyawKPt7vX2EtrtarEgtC4dzpJvnbLju5cr36JRm6EDEPFKdmNNHy8mw7BxvsaLHSD2wKiWDP7xkm2iNeMkaRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52XnSGMYzYw2shzhVyxiU4EGz9zZ39BsK4W4mR7qJLT1tq2i2bNVApBtYYCP7F3M7FaACMatTT1Xwhf8iWJNxBoA",
  "key1": "wTkLHDKEi9FePKLHLvxVGUtNH4mpkrBdNxv5UG1E4jomaM2K8DFvK9VZM2EjrBDArJJXrWm2SWD1bMJc1SzXVpR",
  "key2": "2B11icRhji7tEd7LQdpqXhxAfoV25brrRujs6YeQgUgQuUtakpxqRF1CSWa2So7Y7jkDbpwRasFz6WcGJFugH3yY",
  "key3": "5DkQMkNzGpYnRhypUSt9yS3ghWnPyHhviG9EN2djBRF8zcCYMS6UYV6aMF9JWbCRDQ2AKwHxVybAM4VPapi7yH1E",
  "key4": "WvFQdmvfbfPfWfcqDVYZRAAKYUYwcPUysrjjPK2Fgp8qKPhk7yAsWLf3DpRsuVxgUuShqUfYjKqndSwFZBFQMDh",
  "key5": "39RuSxcAeCpE2iSg6crNufv34nBM9vSx81aBnjnFq3REzNtgYmSN45wqsde2y4Fo2ZFJ1KDAASGMMF53ARzVipsb",
  "key6": "2GdVfnK1fHS4Hw2Tuz1FFBmFB263ggg2hVnLkfwqyY3PvSF3SHPghXFCoUifjWjYy8qqbYy6UzR73FEkEpBTa2VQ",
  "key7": "5CiJVNDnoNVPtFmArpf5JjoUv8pGeUQ9AXeqwSAY5AZxuygHywH8T2xneKRCrf6hVjceuyfBGhBFALHXVEVurLhB",
  "key8": "w9bAHt5xC5UxtLj8RJLMPPKhmRYULaLqFNhGNsd2dMdP2Q9HgwRjkfx9sVooX1Dk3YX5M1BBu1KK8jredo9TAwG",
  "key9": "4v9FxoukTQGSod2WpUoXMZT9Mjg9UGdBVFnwDbYQR4b6eGmK6hhy9nB9hBcdJ1JNbov4nDD6HaCpL79vkxEkBNfq",
  "key10": "vTLChEVGjEJgCx8hBBxCB7VnQwZjGRoVVCX8QJByZUxd8coNkUdvCDSBvaPUi9Qs5JL4mPhiYRGsj7pbG2bGcTY",
  "key11": "2ZU76Ywd52fnBrhW2Wmed4SnPeaMBaWTMRKHeBM8m4MMigYa6shtfAjt5y6ku84hfUEuBDw1SUYNzgqj1miMD1UX",
  "key12": "GtFzbsoWBsY5g3iqssrAYNAg3x49wLfsKMv9ScuBJZvdJ83BVSQ9x7v1AxcfKzNTcijEdSDXtZ4DsB3TTLpbzQe",
  "key13": "Jw8F7dubHvmcDEKafyo4sFEyB6ajF7s352v6KktgadygRMjeJQ2ECxHivHWmaCGG8AR1ebpjVVgT9akuQRcfUFk",
  "key14": "4ur5tYpZF4fTMW9uNuShUsXLJSxBGv4mM9BJMms8DzCNrpSW9Z6MA52vrcPiKZFeeqD755oiedFE3m2U57uDxoRj",
  "key15": "65EgrrKzk5YeNqxCSJGzfK5YPEwK7R8hhDaK318dJ7q3Dk9qB6B75CBVr4Tg5s2afsUTUnKGZu7LAMoahRdGycWm",
  "key16": "56mgmv8EeebCUKNucLKjgutty9kWp9gBV9hmNrfRVJidYvVALTZXVT5c6Q1eid4qaqQyNqr1E1CGjJMKri77bGGn",
  "key17": "4i9DFMipmw8BBTNKFDCoTB79vnJWPzW5vCieV9xEEVzCFsh6qaNbuBm3QaQnNVRzxnS7BswLEii7CP7tEnG5UVkU",
  "key18": "5uWEqbnhNyjLwBarD6YubsLLmDFnmcatVX15cTHZ7HwojVtWANHbGBHLc2VkLRR6M1KwyLsm4zZGwJwE3h3aCQt7",
  "key19": "4DMaecpQPUGRRLAihYLPy7YY2DqwonN2ZVF5j1Pjj49u1vVZfi8XMtVaQEWJ5jcEfEA8fNfp4CDcsYsVSs8m6BAZ",
  "key20": "3x4Wdn3bE9G7xJ5c4gJFtiemcNVDZ8idsdHYz2gv1uQWGS79Ly1b7eyjyd2sh2br3hAtXUJQtyzaUAmc1xH4XH12",
  "key21": "4gdTUbo13FZLbKDAxk5H9a7Buy3CoVhpxPvVQatKmu34Z6ATLRTHTu8q3z9QKYVQe8KfEgF37y2DsacRwF1tHxAg",
  "key22": "2bZmmon7UN7SN9GY54wDU29poov8dLmpbKQKEc8jMLzfPtyg1u6h4QLE2EzJSwfssJzGfecubzHWBzEMRqXSDosE",
  "key23": "ohnn1SWo6126pnmY2SXYGJL7Eet4wTgCLX2sjHJmpoKRwa2iZgJZe6Y4S9VGkzUfHpvDgBE7SSNURm6aGam1ewi",
  "key24": "4xZwFWo8J7ug4WbXkmAduKQBHpWD9HpD19Zsjqtg6FR9Hk9CFZkD5QUmg1euhgcYuq78XnALH9JP2TpYtqurusi8",
  "key25": "2dvpvBiGHfgJaJFhBDJRyRWtHiCbQxQDLHqWmebxpDr4m5VoFJeFeu8wduRjsaQyHTDZeGDzdvj65cXxobqTvHJC",
  "key26": "4fMqSyS4VFoee4PmUdsnxkMSsemp857LWar5pUQ89DmRZ32af8QKdpLQ2jsYv1ftVhFHSWKaqu4nP8HYyK18vtKr",
  "key27": "3Dd5Pafw7FPJNfGzskUb81M3vXi7EY6owzsfgaBAwLv2cco1FQzAuQryU5MHwqwR8HZjhj2UDnLq4sSV4vSrkZtY",
  "key28": "4Y31XLxSnu2ZQVtBXVVvoSnJ5wEHn1wuQT2bi2cfAMuoytUnwxoGqXCiWt716oN32u3x6qnNejt7EdyT6G5UHUMB",
  "key29": "4YuD8C54eGz5mwdTEC2KvjuTMZDww8GFtG1a5DRyZyFvxGZi7wmAvqEHVsiK7eWpZjf5Vzr967VBy3pJsgnwshfY",
  "key30": "DWEZRNsSsiruaffH5EmWBehgygX11jLTFo87NEET7ZyTecziLmty13rjM98EAGGQMeTQ9yFgn2zJvNTkakkdF1x",
  "key31": "5Drvy5e4DL6NbG1rMNxuhcaFAnsNDC4W2m5RWR3qrp54vX794GzYFSBjCsK2KUeN9tg4H388PN8mJdzWm79MjyW6",
  "key32": "2ztGoRZj82a9P69uvyQsPtUaubfrGyGeoQRL6npuddXLc9xapQ1aYELDGRmNAVhKTUsf18vZF9PiwWpkst63oDam",
  "key33": "2dD5Cuxt6LYe74S4anTQCwkeGz51Ntj7H9mLGU8cW4tBL3xcu2bJbYUTq3rsTRHxwUH1BZZuAicShXjFeF7W1Qsh",
  "key34": "4d87SXFKb4aCChTXmHX82EWgVcHFgDH92bRg2pRXPvnNYxchSZjTcbybrCwb8gjXSxqBbrZme5nktGWxWrZcu2ow",
  "key35": "5DD3E9pwTVZf2ZYYULMhsNXQLpuxh7Y5oZ5EuBykPYS82f1QBxcvUUPk7rsUtjKLWR9Q2uaEpugrgeHc5M8M8Us4"
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
