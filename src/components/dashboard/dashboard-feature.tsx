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
    "3diw543G6XDFS6m8hp8NvFNjzzNVsteee9XK661mVVxqA3ioxodqzNvTEnhKv73vjpjLkYxgyeZdx45GzvW98eVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DSvanAYiXYm4u9ifuMhWEwNpoAb3qQP5X6m54U4EKN7qHgPVENKaMHfcRzWtyuYb8sZPAHgq484QnrAWfb1kN99",
  "key1": "4kkTJX4XE734Jf3WWfXi4VTksAMTxPAjpHUkkRS5XRAQAMG8sDnwNAmbsoYeBzD5RiWoLb64JCbdSrVBoA2pj2WF",
  "key2": "3XDC4U8VU353EgEvHzy8xmbyxWqaBrjuEfkZtZHjQcqWnkNvUE7sR3oJ9pmBBTfUgDGGg3ypr8web71DhhqAhMH6",
  "key3": "4u9JbY5UtND1vSBB5Hep7pyHEPNaWaUE1gDor1yov4UipyLsXqEmuqt63UjqcRFSDW3nrXpq8t9k7K242v2zC3xA",
  "key4": "C4avxUwUCsrDJ76zZLgb24i9RVXjBa4vTJBmz6uYxJ4hiZth2nJ1gALwexHJBZ9XkRPAUcKrPFKhG3wXUkFr2V6",
  "key5": "2J47qZE9pDo2CTt5EEXf69cHJy3Lhe2joRmv5FZA6MAhohkpnXoMLVAdURP9tnynwG5Wp78wUxmZSozm7EfpbGtd",
  "key6": "2JRGQmSKL9nDVQWV5Qf6ksPVQeufaehhA4ZM2y2p5d34Li3egffe4LXFEd6fMqcHS8MDam6kanAd1jjZXUFLBimS",
  "key7": "EcAxeCueK5CeC4jaB2BHu3D2swnL7288bSHu9gRdp72yT7pSEn6EJAfFmHTEdsKFU9JoXbZ3m6RuW7Ld7YceHkQ",
  "key8": "36KwbrRXtDygs6BriZXstRZ9tX813iyheDukU7rvX5MukgW39wqHPhtEJ8vzkrdd5GJZ9Q9QPYQ48EDYram4Eehn",
  "key9": "3vhEqn8zvBCKZknEtX73KCQVQy6D42bLkp4d7kaFbAde8LAfqEp9wMHUXxcgccMFYTGhzLUVhm86wMSxP4rd1fYA",
  "key10": "3TZvXeZ29ejjsgkCZ4bXe6AdzTzvtaLJGGJ6Cvo8tEymw8NYK66mGYP2YXHkkzWMKg74emuSahNTVe9wqjBydYCm",
  "key11": "3xf1KQYchXNX4761V9zQrsTs2cqL7nKPVVq6F1vruojhqVZ4jPyCjjcdsdn3mkg5xj8RysvDki9yCgCSvP977bmz",
  "key12": "22hGt4Wr9uJiTaPxTqjYLsyZSvPhb3moyypjGsFPnemopcLYjZdMquYwAp1Ys4ptQ3sfxUezNiXvn7MUyo3knL8F",
  "key13": "2bbR67jbL6mK6WnT77dBLTUbTqaZSZ3xYa3M6msFxJj28iJ21QcBWjYHfBCWedX3uDedV2BAKq58YYPj5toUyZ8z",
  "key14": "1ryCr2v7T2j6jHKvQenE8JieQC35uM3wPZRZpAhNnEp71myhuLN5u25RQUCVivhLfvY3a5yTJZqKd8GS5Ww9ijC",
  "key15": "2chpnswVVk2yJgF2pge1XQKWhyWNNQ8rgTmUuH4YjZ2re4YxaMzokw9PmLySHq9GpiExTgt7bbNUZzTD6m6s1zAo",
  "key16": "4DfU4Xffu1XPoLRxQJGCuFHALxyBJ56h9ZR3tcQZVyAVJsWPEUUkGQMZcsADCNnViC8gZ2msMW3j6ZE48Uejv5wf",
  "key17": "nr9224NSwc5ozGfpBofGtmz9y7mj3NX2ZbWDRM6XUNyXGufBEvEHQP5tZAPd49NuY9Xhv9khRrAGLmKy8eG6BK5",
  "key18": "2Yg3dZtJ4shghdYcLjhJapeCBbFaknzZvQv6qxBa5seMKbeA4CP4PscYA3igjsbRVNQq9n1jJ7SfL3F5qKSLPRaw",
  "key19": "4mxzu6X1JhBjgztRi4e2rtzWhtrUxp6XbK9RTLcvrtV74np8oVk2Bj68qQn6gR9CXaa5uQJeBJi6WV8xSyykyWTr",
  "key20": "3KheMtn1fSoFAHZog99X3KUkcYFc1HuzZXhFWQt9k3tRL6EXUCCTLWeYgiJJ1FsH7n6oty9kQMADjvdVjASJ25ej",
  "key21": "nLYnkUrx6ySDfLarBVFi3yaqzZ5Bfr6uvsnW519Ax1BHY7w5ksT31Pa6o3St6K2WK2KXgtFMTn5LVcmHBeZb6AQ",
  "key22": "5sSWgFTeymCDp8dd1NcPL5WpDVrDWKhQKeuKzWoFJatcS5cuoCQwMh9HRZFCz1UEBkqJpsnVZiPzBugdrQDfrmrR",
  "key23": "5Q1S6ajBUN79uc6MaxEFAJNWAryJLNTqe7QQYQKd9n3zs4zbReqp7aGm94dJCjoKXnyZ9t43U7pjabhpQVgEC1jT",
  "key24": "B9RwPU3ZXSWRzB2ttr2eD72Mbo1r9Yg5Rvim6XfE3Gc3LZr8szNSu5Nj8vPC5EgmjUGUKoR7CtPtVpemXSqM89o",
  "key25": "GWx4sqQPL7vDcws4XBetE2sZjQrxc7CUKgAyNMh4rm7vtK4i2MvcS1DqiayoiyXAdjWdnuEFHHFistfCDuJuhAt",
  "key26": "v9RyieW5vpJjTes1ww5XjHX4KsGgLKEzuH6NEL4BoRAcXka4yb2GxEHHrU3xokvKHBrBLbsFxyoB12WkvJBavbL",
  "key27": "5R2RPvHhxkBRYUQvggU9fumUpVxPcS7UnPuMNCcovXLm1mC2yjUbXMYuzCkx4oEfVtZdxkvAi2m3E2pK63WTMCWD",
  "key28": "f3jTP5HmZJsFmggFRpBkZm2wYfm1dzFCom6XY5ipZYeaYRisCF8sKLq3J7xuq7nR2fm8nguseLqRC4dNQw9NPz9",
  "key29": "2dyRih1SVgFZ2nRyfKYHyf5mqmBbLs3hG6qng85gfoe1rktTwz4Zj8ANQeQFJNEWqHSbHZUiPBPfWNeLsWUTPwxZ"
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
