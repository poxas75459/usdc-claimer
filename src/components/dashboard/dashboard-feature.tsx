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
    "4vgEtJjTxnibdJrZpC9eqbu2qkEoYzrN6fwcAg7kNcJZGfU8UGaTvDCjYLFmcRxBQXDeDt1HEqfdeHszELFuS8HB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFmrkXzaDrPMresnTbQvEwXRVje12sqCWQxmFZdGewZLbTguQY2UwyZzSxk8as5dYYjbs3yPVZqAGgg8TV1JMds",
  "key1": "5eELkeSpjMHmN3rBHepqyywHqYGw7YqLzcJWoR3D64VKCrXWdntXLmz4HLiDAsTQ5sDAKfchgmoP9VnNH4fMEtrY",
  "key2": "649xn3nyfbH18FuzcjP6M1Gz3gThZy9zKWCHUZiCqEYzTJFcLdsHaFiaDXA1fAGDwscnfhMhhfrC6wu4yW2RMYZF",
  "key3": "zJwtmRBFFdQyBMkvZ6JQy2XfyTQH2WaPEvHyNjkCJ9cx1o419JTwhp84ko95dGaUxZnDHm7VxHPZnbcivdBkrRv",
  "key4": "4RkzvBrN6xSJ4iAhQjsFcWHVsrmp6QV48mZ1knZ1euqutPigmtTEzthd4GryPRtTpdjkBAJ1M3L87qq34LD14mJ1",
  "key5": "254GbqSokzpVJEDRXeM3g5GJEyLBNJU1sXJwX1etWzQuZUACYVACJTMxgcHA5ZVKRn3nTTh3SgHqTxSsgponrVSU",
  "key6": "AsSo3KzCLWxHDU1hLSk6w8mNXwNdBf9j5wUgWqn9Ymb46onYeAnQGqqGELCHTs4UEY6zLbFn2CCjUhRdu6NBkYn",
  "key7": "43CjGraw5dLo1MhGXFTbjDNfgJBkG4kYL91f49YG9wPNDbVgF77pFsfHkGUGnHWvvYG6j8P1NBiMpdahY1VEbXax",
  "key8": "2c2ud3hfjJrpmH3UtXwL8FxKjUhK5DG7Fv3cRSBQj1ntkdstkuqkHph3tJ481s8YGA2c5eEWHeDDPNueXKGGsk1M",
  "key9": "4q3BTmHGCvUxCsW2ycxv9KiXj9okrYscuVTDJ3DaBExBrWmdwNt158XHZF619YtnMJThcs1jFxNh8HzMXKDfzYFe",
  "key10": "5tbnWpVzDUUBdWrqVAjzm7rdQcKiQHDL9d2rs7sctnUqrnFZxzawL49j6ETg9XRfpu9gRoVmeyBqzd2kvHzHmzCc",
  "key11": "SDfRQwVzexDPqCKYCCag19dGRMhiTcF6psCgoPhytzsof3tPmPvYdx9csfkEVHDeGGrwintmsAzxTYcyu2UTvby",
  "key12": "3RW37KPtjF1NXcFsi4yeURg4CNAiQm9XLG7SB6GUkdNgVgdsvp3yoz3cgryuD8nkuSv8LSCPtPv9QRpMcUCHVd6H",
  "key13": "2fRhEFzKwuMzRo4PmdtmPPk6YzJwbiLYaw4ci8thRjbrHhb9MYVVPhKbWvig7XpepwXw9trMzmg9jo2W7jba5bnH",
  "key14": "2oFEfHnk1TREGWcsS4umXMag6DaVKcWv6KmGPkrx8hi9A8o6RW7x2hp1duig1GKYg1UEaugFecHYNoBr1io5irNC",
  "key15": "3FeGFqVT4UNxtDHVMPhEtWbKnmeQm4ufVPVunf6KsFfpAokRDF31ZAvFKsBwgwTAxu2oigH37wrMYU3NGf1bL7g9",
  "key16": "3b5kfAPs6xNLfBmX8CWxjNtC1yj5jmqzvLhM9GdRiQMciT5NKfTK5mhoiLrCePii8FeamQbTYz9M6xRoGd4zKWMi",
  "key17": "2QNC6p2eUwzyWFjo9h27RNYfKjUcar3hHyL8gVh9W1QxoUNNdi8vrtiwUYUd5sDuyTtxtNJZ1kg8itC8EB52VcbK",
  "key18": "5sYEVM4geDE8qab6uUY8SqMocfsJfRfiQ5BDf69yv9KStHDdNwfJJo9bS5bvLJyGbKRrrt3zyWUiA4FomqkEPaSU",
  "key19": "4DkJfD6jhYZjiQY8HtFrZ1rHvLg5KUjrimekVN4QswEewSwcf5dVgTrkbuymncf3yVzTyXMAj3CK3wRC5zbZeJtZ",
  "key20": "62ErfyQMLRqK18TE1BREoQmYSSHFB3GptWXvmBJYpEt5KNZJF1n8Kw22Ff7e8ztcQRhCDX2mqUNCC1zWmtSuWTR7",
  "key21": "3T4x7i1aZaPWCzpBqWEPbgpGbBymoGGGfn8c1QZHnbojNJtQik8fbaTYWUEqiLsBNmorGwfLb88pD9sxdfci5Vqc",
  "key22": "zUD3ASB7i7ZxekBGbyNABSaC2uXCjtkRuc9DWvD7bGuExzA5Ct4YzWS1PmkS1a94ReCHJEvsx4JnntaMF58iyJN",
  "key23": "24gJMAGvojEVGaQhUcE97qPJfA8vb1SA27LsLs1BJ3qenRc1TqXy9ocxWHaqv2nQNxSPw368thuTFshHtGNmmyYX",
  "key24": "2aSUAwK21YXgoyufhb3ncVQbPngbwztaftdXisNvb8Y4RQCxfNMoM18k9XNjAkR6wZN4qjjJ3uwuFkzoiBatyf1S",
  "key25": "5qt9vrm76nWyW8inzzBf4qN6K2K4rFewfnvoKQZLjZTG4Tp1jbZrZiEJNtsg756Disyo6HtZuHAGhBoRGfyrQbrU",
  "key26": "1xyUCqRpB1axkY3WBqN6wbv2SG7dJSs9ydP4LJKHU9s4Nmkb1SRyKcKrXUbV7tujXuZxACeCN6auhWUUP8x95gY",
  "key27": "49v21eRjbM8mSEmETUPGxbFjiP5pAeZhFXhZgW5NXDC7k5ouFhvy9KuLyxqR78xmP15tRiaa1bebvsr9exoKjTpc",
  "key28": "2UoV7DEQWRfjQhYw2kxiE3Ja87LrJDwCohKK2R4qyicQsAGWCJKHQ84oAvLq3YogSPp13kJrjfRTH8pPLJ2rMY6w"
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
