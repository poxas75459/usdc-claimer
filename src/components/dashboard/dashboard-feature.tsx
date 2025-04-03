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
    "4oHqy5Yf56QpzmKkH5HFcoteUWy3NmuREbuoqxrWxShVGwG3ksa7hDGkyQYScsDEWj18Tco1PeHomUAeqP6bs35g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jKmi6JxJ6fH5K9r72YZiFV35CU1SfaQG2Tox8mt5bDwBNuB657gt13GAtr6iCMmwcbsMpx3WoikCXAe1hYDR9c9",
  "key1": "5EQbEDG4wy17V7iUrAskEhPKTYb63vLBJhePtTe92NrzyBrmw1grmswnFzsX1AJYvY8U9CGZmLMB51Zs3RrXLCq4",
  "key2": "2PMokRi5Zv5koducQkswrapxrLrwAEALEhYGuvkuqVb3Wz4EabqbjZSvqVKUHL8E3Le2ZbK7NsVv214kxJms7DDC",
  "key3": "4q7FM3HLGGRWx68vnStxKgYwiHiRWaB9P5UCprh6FtaqupVBPtnCz9eSXfgiCHcJ6TwP9UKuToChY8kEzd6HSMfF",
  "key4": "59JFKJeGtZTB2G4LabcDunjYP6jZLDTcdKjg6VqzDvyap6fMfpt4G8dudzqmMiRMkzRLrZj7Toog2V1fvbuXAiFv",
  "key5": "3jSW5axC8Y6zWLPKy9TNXTdzCS7fPuXDSjqd4fFJiUYkveez7mfKxYBKx2naT1eT4BQ5T4JopJRwSgJ8QnkQbk2j",
  "key6": "4xCwt6Lc9y6QcmiPHboSyzwrZdeqCxz9U5Cj4A1P4rijSkJD9YGoAFN8aESUSTg8EzXtoiXjzknAmiK7aLQN89aH",
  "key7": "2PRiJLzSLGYCar8HodjXny3wkmH4dbnrmXzmrgx4EWwfuETrheP333qvK4Y3cZsSCVtAmSqvJJABor1j8CaZaYH",
  "key8": "32DGRKmTv5AWYzJUTa9cwZ6jEx2CqzrziZijMH6JDzeuxeAqFWX4kCN9N5uvv5PZnaZjtSmUdUJQZJsq8CShew25",
  "key9": "2zy7GApLbEzucc83bpHwBKmnkPWZSRap5RkNzGmQ9rRg9fHAKq6MzjUqbHruqKaZ9pmJcg6s9PyQioxxzxmxrha9",
  "key10": "JaWA9A86uC2xtiGXtaQGhJrDUgAABa4C8wf5cF8wyP1bVFzMuxYgXmdgmLknqy4MaWzEP3fi9nJjdgtAXVnKDB8",
  "key11": "5XR8yzx1mZuN1wBS8HWkzJb6JtMgwGAPd2awynwYwwHKopwQqRND8x3nJWipAC9iUWfF6sDLMtTWjNKTSAMHkbPA",
  "key12": "5Br8LeCLLwegGDpUkcTSkPSa3PuawNMpap768G84PYD5Ny2tzPctzygRZi9oPT8UG15fSzwyL3gyfj1HiyvTzQex",
  "key13": "3DHUobse9vxCYngbTPwGHS5qBf1fyMK36m9o5fx7pqqapHRETaEE97mA2t2jTegjRnBGUFkHzyTV79sd5ouAZJ1j",
  "key14": "2Nod45RRtzmhBJ91X9ingpwZArWwou5KQ9UPTkSNEC6SDYYMcnsDR8q5mXBqXX7HTcYsu5QMtUdQZPLVk9wW9tgS",
  "key15": "Jy7tNfcB6BFqeKfGWJFdSSUzmjiiJsTVd8kpEjRzHjn2eL8sLNNHdUsuk4xL9f2g7LyzFt9eaDCbz5Px83PXYmm",
  "key16": "4jprdN1pLnA1ocA6zN2oRHznQWZSGxMJDJq1mT9wDtzP43Ajv8MocZQD4g8nv88rFKW1a2ySjAFUxMz7NQkknXVa",
  "key17": "5TBbEqYx7bopwQx6qSEr2cr1Ba5nhPqoUy6D7Vs41svL2CSQ8chjZFqeTpBBkH3hkZAUn5WLQVNJGtZuQMzcQTdR",
  "key18": "2Wwe97JQzaeDuFMprkqekZJotbpjbfWSX1ZsuvUXa5ZxWvqfoLerYCp8ycPxQtgLwY5vGiRMxqmEboRnhUUzJZ5W",
  "key19": "2jj97xVPJeokCFncSvAqmiN5beMGqfKgKK6j4qDin9J6U6yAqphjwctyhywNrxkw7qAiPXMgRoMP6gToa6ciqTvp",
  "key20": "4KEsFqxiCTV97W9V9mLCVRpiBkUrtNcY8e59n2XgSgXFxFsPPqRQEM47G2mpWRhxJdtvdde9uaeDSDMuD4wJnLXL",
  "key21": "47h596hFaBMmykNckhBHm5E91kyW1H6vUJd2ThTrKrbiGawDQQ5ttRQhuyF82cZwJKEB5BmJuyKbBcVwkzNiuXEz",
  "key22": "4B8cwAUhFhJimNtP3uEdGH4qYofrERqq6w328fr6NPDWDmvCZHPDpoVcUgep2woMZjHDXaCAymDyEDzfjkTMgpDG",
  "key23": "5jDkJUVznaWE4r4dsy2efmf8FRwXptRzWQDoWuAs6n6e5qLV5Lx36LuB6bdeAveTLc4iqFi2RGuoNduSeAaZFXsM",
  "key24": "srJckmuvv6BUnMgUExVn7fcQPwypLnwBQ2R5F6TUH5iHuucsyJnHSEgUx2jBw1DHbGHaVWmxFUqSt26wU9ydCVA",
  "key25": "4sop5bgaUdUGCZRpaVzoMXHabzVgWH675frnmHkVwtirFPNzgSUMuUyvNNnXKt1XpVutBceH4DuMdwMFsW7RqaaQ",
  "key26": "2wvztq8JpMXWuWNCPSGmNxDSE96tzcDEPTMK4MXLd9jCHsu2yw3ufD2jp65KsNoggcwGb4PUqFNVvDPuZMUvhmYc",
  "key27": "2NGXambwGgiamaFWKo3N8LfuFppubScRystDSaNwvwo7C6bzSmjCcuwCaq2WGpZQQgYPjWoT9DGM5tCQC22KV14H",
  "key28": "2ZKVBEtw7nUPpZQDVzV6CTe6RgBGhijb1XXtpgjrNa8MhY4xTWLDEQv3CUTBcoYMvNEVfLoDBc7jjoSa8zU8vHjM",
  "key29": "3UWus1qgjQN4gPErQZMYHbHGNh6XY4e8moPrR5kNFP9w6a8ijNg1vyKGzrTggJ6wvxDcUwgt9hRXZ5Cjm177ihv1",
  "key30": "3Cp6FXXKDMBeWqZV3Fjw84pgPh9inSPsupLNhg36BHte1V36Zp51zkmNZsUsCw13ugCVw3UDXNeDK1UUvAUDQH9V",
  "key31": "2q2RBkuJ24ZVZXsW7oaPLydTMwJTofQTjRgXsVTKu2nH7VXG8F5HXtXaR8uF6WtFjvteCLVsapiXCGHZUL3Adq4P",
  "key32": "5rC2Pye9t3W3a1Ly1G9JYMeUx1Lx6RN1cX1AS78UwCD2LW9jsoptLQeWZuYMoFDBQRn36QTF1qSX8d5MhD9pGymc",
  "key33": "3jpYjaUYzVsmpavi4S93Vx2CJ2L33mVFeyPwWv7Xasf6WvS9A3G49VTcPHox3ra36E51mj5twS2xju8NhfsPNGM5",
  "key34": "4DTY8Le3Hyh8WownijGJGtYT4RRoa7qgmWmTk4G7yysHjAvKxzBLEyykYGCqCM6gkAna9j6PUb9EGTBhGPGPfx6C",
  "key35": "53DRznL3UDPQo3pMMcWKdVwWHDNwL15LYCTjbcMsbc5L9ADuXrhBAHLT8mLHG3KabuFpsQBgMWjDp4k4xWcA4DfV",
  "key36": "4Uzb4EzkNs7iNsHumRJum5tcoaHw4wax3imcxKttT1fo3MEvAXHGXZyb5VRvhXjEuya3ENCo3U6jc5txvJUEgBy1",
  "key37": "5HZP2F8jK7YTR7TCGDRwusjHPQi6KVs1HizhweF9EAZXPL1pzBmXqPxzAwK5NbFERHT8cjeLSNhxsQAsa6vV9RF6",
  "key38": "2kWRP93Hh8Z3vwgomvaTSRN5yYPA1sF7DKEM3pZcL3uXLgMquTzBbXTRWqJQBhsCPPkrCAPew8QWbf684awMosTn",
  "key39": "5pLGLQbPwaSnVKHFqjCvjxGBGhu21Z5LKYNQkuk1qzFuKyCK7qk3tneFhh4kgFCqjNdQKh6PVAo7j6rLTXS8EvuG",
  "key40": "xvuyLp4R15iwLxqP4hwh29mrQS6UByTeZqHhvqEHUfGaEqRA1kzt95XSPEKFCoKLgwrsgao5n1XqPuSrMYxArKp",
  "key41": "8cAW364j2dwgtGUYPdPY9PSZX3q7Y4NfgfQnoXA1dziFGd6f837pbsTgindP7sfDZxidck8Lybxw3kaCQT2YpCH",
  "key42": "QCnis4cVwf3mEUMv436UwhLQxUTVPynGaBGgZgQqyqEBVEdH75WfRShaZbCkk4H4zawR9XbnBHWcxwBCdDKFXCP",
  "key43": "gWZBxYZc9i2vQLeEt4kfoCZmiiXeAbpNq9RzwDajaKsbePWLpXqvp2uJqfJFhbbFEcFD1j76YdG498ehi821YVQ",
  "key44": "4otu9VxRiSCEjzu8fZpnAnReEVphtCPiCBtKe7sKz6eigUBv8rCCv5GYGJWU83sGmAZTukv5Ya1uX3jyio4EQvYH",
  "key45": "4muc6V4PUAbSM9qjnpYT22tAbGvrTQYS76R4izV4kMUgrq5JYwSS6fo4Q3WFnghMu9RCi67pr9BQuLvmahcrNeo6",
  "key46": "3sghaJg2F3HLgDDp9GvVfnYZaNv9xuDuFLMRbpMr8nwUpiTi2PPxPtNnajP3i8tpjnpR6sBYDBBaTqKYC92VgCvD",
  "key47": "CKqyGSzYCdw3XQNJTwY7sxebKu5Zfdc6x9wJtvvnppkxytXGvK3vcwtXCxh845KvTG3zYT7rGK7G5TNU7FkBm7c",
  "key48": "eucD6DsALyqXYShdRoRuvYeQ8cZgditYjkmRWMmHekzn8TTwLPthzEXTrCPJdMamCWWybmvBCaaM3cBN8A23kkC",
  "key49": "48DzuEQu9qibeP4NtBbQUwzFDueh5nZ2Za6nkXwQG8rvKRazFWHzGyV26N9RPy9t64au1KWUiq8D4Xy512uLgSM5"
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
