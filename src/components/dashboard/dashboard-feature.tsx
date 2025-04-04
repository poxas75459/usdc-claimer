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
    "2xraXjtFDFTNhzeHQqKAWGayLABZtqZw6SGtu22MyhrmYRzm3PXcsa94EvR2QS8RKH3pcne5oJLgosDrL6GbGkag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rjk7LxT2CNYrCy7Ts2mhs6se8UVz8CRUqVNX6CELQYHPsoSf19kkqVwWoRf88SJ3NiynC3bJno5QtA72KDjBMKQ",
  "key1": "34FMzvwhenN8Mfx8AQV1E9Xr8o5SKee2uVjfK6yDZ9cbBmzbnJdt311Shm35j5VhjseWabKc3mmvrw6YPrFfRBhc",
  "key2": "5As9AuPkbhd3taMcnKhSVTMF4ZAKvR5DFMyatVge2rKTNp7MAXep7d6UzJfqY86ud5W21WRjVAaE9KG3noD9LNu7",
  "key3": "3qhfWXF7DyWiaBkGyLVDGpnot1xA3adLfUw6wywLjU8bbE4EUxpei8xM4iietEoXy63DTFdsCAnEFvz7sQn8FV1d",
  "key4": "38SsCGAiEYrGJJcqLaDByJTDDssTa4nReQHPHN8KS9osDEZko7KZw3yvHCmU3MQUyJKYsfV4gY7wL7Wp14BgwSpp",
  "key5": "At68MtSGb76EkPww9drG5Usb7Hxd3tkpw1Gzjjgq3STAxgwZkvS1p1FWN8kDEeTSahRVYcqFFTEDnVn4NCAFMNb",
  "key6": "5vbe1zsfk7mGnXhCLp9o3cQDbRU4tceyY1rUgKmDHux6bje2br2rC1sqNoitPWoTYynDRYsRSTB8mwpuy2hfVdLF",
  "key7": "5QfSKG2HyWi4cXJiuuUCgiJHy3F8h1ezSRZqnEYsiziPpATQtXdCwBSxgSkWhwsd5qygzBuQ1irKLJm2kXT7kt4f",
  "key8": "4TqoMGQsn6Few1X6KRDteAvcmceh1m6UK9LUco8rBB7hYMLskGc3hgmcyqudzSH655nKaSdFjyQCEzGZeTwxbT23",
  "key9": "3kqCjxYyCJYXcq4kjjUSkKJuGcVzMiMrdpdYBcd2xbCowq3ZGw3QcXrxt84yvaHMwrEgCbYBpEvkCp7gTsUaWCjo",
  "key10": "2qoLsTvxgKT88BNmxqyEjq37JWan1DUBvmpLUZmzuxvUEtwkgaJVVXUMikj8eY2fP6TjQVPUoQQ5NcEwH7Pv1WQM",
  "key11": "4Tp6M3poJfMxjtxrjyq9kNmD7eeMMHZS7qWNLfqad8cKpJdnmS2WUSsr9dGmXFnWxCADFFnG4VDU5w881JnHEQiN",
  "key12": "1Kyt5Ye7h4bYiEg3Z5Z5dU9173SjrSEhVbXa72ViGK9N5LQUtf1mvvo5fyhLh2e1b5b8bwCx4bdWgxXJZeLDTtE",
  "key13": "55h7ZkYWg3bMHt26GUGwZCX4kqoK79ceKa4TuC3pAHNhAWdA3JaKJmarRYMEAzQ2g5SFCRCQpV3jneFYNPruVDv4",
  "key14": "41q2gHBfzbwW74rpxmydCr55THfnoDPPtt65gsNgf78y8rosZGDj3NFNxKrpbbEhg2aBXjjuLe52ZMvjNDnuuX7E",
  "key15": "4mVNwWNwN4kznHWfMjMgqk2cfmE2sXWpqzCHh9VrDmf6mWRQL9fj4Ln8tA34bsBeLpse941SqqqZ5PnTjXpmc7k1",
  "key16": "2NkwgXWcy2VYM2oNT1US7MUz17mAZYm12pNviscfW3WBgqvxzJSUXSj62vKxVKu56zVxSx6PKnpTFjqrHaFJPao4",
  "key17": "5xYLBs6bQYXdcBG6EdZgKTubVVXnQuSSxmjW2Mhi2eidc4AQp2RwG3eR6sWhAq3AgKuDFWnuezxnaCy5xohEUpvX",
  "key18": "3oECA5PqStyZGm1HzDK4L25vXQXzpnc5pr8yFZQzDp8e5awrGmAXX4PSU12EKgSpadiFxjgxEoLSDMVNgaXKJkZN",
  "key19": "4xafa4UCGjhqc7VQPsE3RJrwP6GHASSftXW41tg4Bs2K2vQHHbu3FKb2ZxhBRJuBbCfxrxHJZNyUaNygA77UxVef",
  "key20": "34MnQCsNQMx5v7dRJHMUtLbADp4tgzTqFsXNrVi7SS1B5UwVRkSsEx97oFrWeEHjjngQzGTQHC5BGBGEz7Ggisar",
  "key21": "BvCMXPj2TGNsmKTqCABK2TywEdFRahLBLWrrDfw7ADiBXDLx2sCbmqNyb2TxZ1MFMXD3jgjsvqWRuVPHGGdFwdL",
  "key22": "3V98u8b31oUnYQjm6cKwsSpYf3u9FkP2QmRekuH2RWEvpgeanu4qzauyBVmto6yQHhLsipQtKXs27LP7kVD2x2Bb",
  "key23": "5wDL9PBRJxYK45CybNETJcJsH3PTNxWainkq7JCUpR1JY7D7ssMhtRfsM89wjVo9VtiYDejuJ3xX6eM6Vi8jAUyq",
  "key24": "5xULtH5S5LH1h2hBkFwWrnejbu1u634Aaqriz2xPB4dbry1pQyqSRGTEN2vhz9PfzXWb9ehhdVC62RFujGPkFLdh",
  "key25": "MZ1L2kwvQ7saV9gZA8XajrZmj33fku84cRJC6r6fFRXxFYuGLFBpL4CBkugzQGpRz3pkBFSMhMX6KLez3XiyHux",
  "key26": "59aF8nzFGqGnS821BVPaRpm63qBsUpDS89kbNjm8cvqG6PA2tQzfYQHgCxyA8Fq7WbzxXHCuofM9njXsBwAkXfWU",
  "key27": "5aozjSqBnYCV9ZrBbqkQtzGTf9h2ZV4d6giWEXvnX75Dn9KHf3XV9RJ5VMtc1qQmhpHCLY8HLaFeDaze1sPoWnGg",
  "key28": "5rBRrZ4Huo3XRTtrTj7jwfRrgi9q5rdSYEZbJcckW7No9cBickmUDs8GD6YrPbm7Sj1axpNKKCDCJ2tordixRV3j",
  "key29": "4Xz9NqVxAxW8fJ5192hFgFrruBiePeavifBFJfnc9KJBUZFKitoYQD9Y5HBDzPgnuEjAHwb5uPtVbcPu6z3iJ6nr",
  "key30": "8vxa5AUXE3Z4pu4X2r2PTQSk3Vt41NXXvMWJuEJhqpNH8ycbgefD8TthWwsoE1QGdv1pm9VrXNTDaoTtm9f85aj",
  "key31": "CWi1pwdB5BnEPLk2B1gGzxgTnr9mFf2a3jce6sUfnutQrUL4ZdFhcttXunLpjVfuSHmngoCUsLy3ZRN7D6ro4x9",
  "key32": "4PmDGxeKx2JvEiA9NpX3nSNWbu7yMYK3LGWsvvFDGULKDvZ4HTxMt9fkc1qBRXNUu2HcCSSHcbC859SLEaHFQeHN",
  "key33": "28hDVTbSYRqpcQtdRevtaGz2abgwUiwW12hj3rQyu6YZwn4qv8y7oj45gyc9dBnL3VipGiJK8LkQ6xz3hHcpc8xs"
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
