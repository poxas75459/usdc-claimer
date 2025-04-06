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
    "4csQ7kwC7VbHxUmYSjMuUrzgBuizMzTpTrGhfBcga2WFDBztWen5pX1i5YdXPBvAUDuZu71kwC7NNAAVp6Cvj6yY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S7bk6PxCqq6ovHKRCV4tJi7zKiTuB5TPZaUK4muVRAPRQfbr5X5b5SudczaNs6FNxo5zuHM5g5iy2RSn1LVshvE",
  "key1": "2RWsaiLqe3iocVpMd87U3ky8s5CQPzvjruZu3kB4CbsjobKU5nQW9EJjw7WfCA9adSU8SfxGgFpUcDwVqucspAUQ",
  "key2": "4hrZWMP26A9Ypkig6WJXDdQxuC7SysJDyH3UXe9Hfaz6Sud8jLKX2vXN9iy6powSy68sLKpQeEPt5VAtAGETAFwL",
  "key3": "3dczhGZvcBo5PCw57dSTM8MeZeYUCUZLb7FwL3BSushEXSDC7aSFNRj3a3zuWMvahhTrej939Q98SJihCWg62NHg",
  "key4": "2YSeAJmTZjzvonNKvuRmVi6yiUC4j9Wr26cJn9f3KokJHYy5umMHENByZhMok8CYaPsfMfUerB4wXpYfu8NpAWgv",
  "key5": "88uea5umxACmx11BesULqucwMXVY4wJBb2z4XBmRtUumbama4tUz2Jo4Fp6C5Kj3dHP1o841iCQAtNS3rEgxqte",
  "key6": "exTNJd7vXsnAY44oEzKGbbMB6FbSGRj5xMDqKM5unWy6cDAjRgFGXJAj1GKioAQPBZve94sWkV7BjtEvCwyx8bm",
  "key7": "3uQc4w33usfFagbocWsuawfGjbMLX1WPU4h6JyyzPiatjiTJaA2gUJBahShCYBrtmFmQe8ZC8YWy2yLHeuRcBj75",
  "key8": "5UbQ2JkXrP5q8GYqYiu67eMmrQuww8vM1UfJizea5ZePGZHkw2QU6RUq154tBDumG6P3ZEH168y9GYLoMc44Ub2u",
  "key9": "SSmFgikjDFQj6ErNtXEVCpV97dWUxAN1b12FUPpg3iXjo1o35dNonBtCDwsjRoUiNkMzbNiHq82kwAjKD4PbmG9",
  "key10": "4zXdyzQCbANPtGYN1rzeVyVmywo7dCKLjJpmbCpd9VtECbbEz8RuHzpoMFYyXHDrjaGeNuAgimdj6RpVVs4MSKeH",
  "key11": "GPrSFS4wmKP4VV9W8GJCj5yjWETfkLtTmhYwEeikkjjSqhkQp3gwNHsPeRNpo5oaiJwx5q2MTxBYJyL5v1Apxyy",
  "key12": "5p5A7YaPCzJ2fA1cWmtsjif2MdmPpXAMLEKznYX9aAJ7qofdEa5VB3odVTUJ4yFDsdFs29hbtgCf7mwYPaeP2cFZ",
  "key13": "3txQUcVF2N7HRNAir9KKC9U1k7n8qQebzqvAXKvJH6T7rw7UfCbcQUGbQSZxebedscWg2CTb2PmEUYVdg9cYJhd8",
  "key14": "3hLBNyL5YqSYgnuKTUSLTd6iTzM91hEfvTf5Ut7AQNZUG3QgYpWCkuksLY5nduv3UNvThBG5Rc4YdBnSsppnzoXT",
  "key15": "48gZgjdqtmDb7MYpn8KF8jogBHaB3PTT9VCMZBb5G4VrqLkaAbRdSTkToJ5hz7T6YmcrG6kTYofynfMHp3sJunVA",
  "key16": "4QLxFi9vWzSq8ueecH2Ca3jhsyjrvU6uHyTmxyv95yqgtqnoD48YFep1nDqrzHtJjfSEWdSFRZmUGDmP8gkKRdow",
  "key17": "43VJTPJmPDJTUWoeTyZAbesUK6n7wtRDx2Dn6u8yAvW3T1B8mBnWDe82iN3bfkDxq6eQyrstNgH5HA4zFbfMr1Fz",
  "key18": "CFyc9YzNRKAKULvrpLnB2GDC5dA4oE2K6L3xCu84inkcegfDhbryxTE6NeEiJrDc3yQAB7SXYEfevPDmCjjRfWS",
  "key19": "61zgJt1iqrGizHcnth1YegQhMYR7GgKCB6hvavgpUzwUQCmJG2Nk3XcXShVwRbwBDvNS6tCL1MXMDBSxe2PLthj3",
  "key20": "4JQ48LWkNKKVHBhknWQKFV7TZXsx21WMnae5oRA3s1Y7StoaiP6gJAvEEqB8Gj3GHijrH3xCeBuRXuRATD73EDYb",
  "key21": "2P5rpbEno9nLp88sECtnb2TzAY7mcGutSoqGdEbwjay6GZfRkKVx5pkwrkbcvuBrmnRUzz661tuZekfm2ASozpiW",
  "key22": "5kdJMEWihVX8VbFBMMQGvwBnX6pJvmkaMqjThDgvfSFTsqDnrn6SaaL2kx2Lt1kUQPcmT14i56mvHEjBbdzqeaNS",
  "key23": "45ryhuZkVqugmUNwZ4xpaG2wzqNsfTGXA3tZeQyBCWDFzYXk6XqU2TafH7KJNETVUGUo5n4axPHMZEfFpDoYbj1N",
  "key24": "3mMCmD1S2WZaXFhtTzUtLLJ9r3rneeRPouy5bkjdYpXFJqWdpzEnyNjq2xx8wGCn9aftTbFbmmS1Yn22fLjsn9u8"
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
