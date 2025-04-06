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
    "3Athh1pVhvokUopHeSCjn2fUS6MxzZsZGTixi33xpQaCGC752SKn98ojrfR7yKK6JfWfrjaoLFeRCx13RPsEBrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YzxMvyEd6PnsJqCvmFRhGVfquXRkro6TA5avnovhvhaEJAsDwX1FN2jmXFPmMrnkD39A9AZAbWj5f13VbH7tynx",
  "key1": "4wDPjxid2v4Jhi2L24fEFmnovTeHyy68XeiThNPFomVmLXtX8DgD3nErk9u1gwyNdrXxihFgNgYkYzdvXWDJV5XQ",
  "key2": "4uUivruEur5tKo4poGmaitWj998Z6L7VTAy786e7F6V2BryT3CzF1D3EttoW7KUWjvTymYByjbGRJk2wkL7vmjh6",
  "key3": "2XhydYoGGrZKC1gwaLuFHEazxzF9JUCatwcvtyB8epaUe2WEuxj82fdU6UtK39ZuXwvHMfT23Q7wrULX4juwSGAB",
  "key4": "35zwSnu9mEVqsMrLfit7zMYCBK1VXFnjKBDHUt21L7bU28PhPMdcDV8KarWyCaVQ4QVsqa4dpx5WfiFSMB2yvu2W",
  "key5": "F9FnAf2HC2LRFS6VPY8mpWt2LX3qcWWYFASSagThwuENV7D8RJn5NNGRYJfbp9aq85KnxMC9Xk4SmKmfULwBCyB",
  "key6": "2UvQ9bh6cLHs5tYVBWodXHNLw94G8EbnE1DfUBeCh1PYSZTETqs55CwkXwpbNCYNsvsGiEdSWX5nCgwggRDXVGm6",
  "key7": "2QE3ahJNpzkhTkdAbpXyjrgYEvYg9ZqZQSqwyjLqGxR8rQMFu5isDY6EBXjoEWB77wRMW8K12D8CJPrXuM7YDMA5",
  "key8": "5Fj7vC6Za6hMZ26KrhhN3dceRa6wZc3h5uavkyDyM8erwCvg3SpdFApv3i4ZoE6wWUxghU3QDHEZqNHR1L1FQAfp",
  "key9": "5VDWeC7nHWmrs3iMKgM4t8TPE9xDPRkWCGx33XEvAyPLV8aLH2VY13gUTSKxE4kzWPqeaLWHHTERCPZ9x22L79CL",
  "key10": "35DbtJeZDMkefRfu2KgT4u9UfRQpDYT5znVZ4PiovXpGsYydLWstjaJjanHw5Q4LMBThZg2SBb9Grb49zBkfTydY",
  "key11": "28QCeL6JpzTMEbtYeVYCgvRPAwLHJhqAmQohGhNJk9R2NSmpuEs2YDsUqK8qttphqmGZhuxBJG7U3wG5eDP214Ld",
  "key12": "28Lp7158x831226usYq4PX6dxXH7ypkCZ3RK9RgVKJ5itaH9QPwsPQKSbybm9AQMMDxwB15Bn8KPGgaHHKQsRrKz",
  "key13": "2S4fLS8BZuPQvxNjJoExQEfVvpXCndmeQPYPQL3cmEwWsY23aVKC6vQHWDpdLRiYNkM7YYsNhinWNJZkjnHcEQT6",
  "key14": "34g6s7itHKeiRvGFzGmbZTnwaEBSDtPpuuhgj2CUgAxEH5qu68hFRom1uw7qXy918HoPRdjWhWDqLiskebzdzNUx",
  "key15": "3i1C6vS1soywSmMkCsBFJAxxh5bBQkFCmguDhy4YRY396SKNsZpuqhomtLt6zSHfB6miPYK1zW5s6nMd3p12fvPx",
  "key16": "4A5fWoWxQtDzb5ggSoc4Nt2WAVWeUFsrgQTzHLdiMcFcCD4v3H3CarEBHDhKhVh5ThSLHR8ydxEfs4SK1bWBpYE8",
  "key17": "131xg6K8r3Y4P17391sofcA7GepcsWsK5it5WrJ2UUMpfU4cXLjn7TRcT1aDXrePfzovUBtw2tfq3KfZCYEZvUT",
  "key18": "3gQimBf1CgZZ1kT8PDoHzZy7dH4qixFG4ufVCicSzoj8MMmUHiu1LkUFspwZfqRZ6NhQiz976nvTFfMt1iyJqj3S",
  "key19": "5hDutNwuwMjcNCQwDnBH3nbtftc5xrnGQcjpW1jDEYumbWifckxVG82fsjTWhvJsEjPBZ7WgT7hAniU26dKfJitj",
  "key20": "2inUBxQoWR4aAiVidaXxMWMcWwiuXDuAY6xqNfBs6YaqHpSYkMZPs33k9yXeDqWMYFwNKBYCaHC2qXtyozX3XGSM",
  "key21": "3ReeLkQBFXpjJLid3vNXCeN891ZNkqucvTas7zkLRDNx9v9nGbbUskdyNNqLVNkn43NpTW5NccgkdRofUtGpikgt",
  "key22": "33fQUbPVjKFQH2M8EZqPMW8Q7FKRoWN9e2n88XEFC1ozcipmLZxuJYp9BSQhTcuFFzeEjj45hdsd6u8WFJ4BGeFm",
  "key23": "5wfwEg5AUbM1qEBuk4AfN7XNFwqwHvYqzbDwNZtoWdoLjtEWqBAs7VAFeHKaCKqNt4zgQpnyTsvQPQB6EZe1UZuG",
  "key24": "3VGyykdYZg4xa6xdJJB8dRqWxH4kqEen6QKzjhB1KDraVAyJsvqZZJvgqueu12Uqos7eqMFoxkcj9TrmRFUWajC5",
  "key25": "UEnoHCzfggeG7C7E5SF3X2BFfYcUcTZUExKU4yMThuAHboHc35QaonEb7MdfeoLPbNpr2q82uC7sref5ieT1tXd",
  "key26": "24VKnqfHuvK9fiQfY94TJeZ5B51Ae5F6w9FRTL5nR3JZPQXkid2aidzVVEpgrU8sijUmGCpiunA4sWRqVpYqBKos",
  "key27": "5Dj8dqY8CYHFtjAQ3f7FAYLXPm7Uxk62ZF9N9HMsREUNyXE6WrVhEVqcCvbrA2jb4vE9xm1JmgAJgaX31j8ApuS4",
  "key28": "28awg4dikXDK1VZE618vjverCVNFDUwqLM3xzKawp1YkkNgcZG9YEb7sv7fNDCe8ehPKAWzDMJyMiXnmBvm21kvM",
  "key29": "veGjJHHDA6yRD9RoKzERXVbGj5nyGbvw1u3HMeTkT2UGB5MVuiSt9Pt21vT94XU7zSXyrJrwWzxoF9bYLeQuB8r",
  "key30": "5uV6GeQjWWFrU5DoLvmM1mJi6ADgXDZy6EDNWmDHnzzni5sagZtrxLKjbhREvnCpd2YjDLGnoeDGGjvvgLxaAXVu",
  "key31": "X1Jisse45V4pL5AFkhhxGgcbJAzPVMpMAL5EGaxSpNr2DTVnnYoRgdYRFh551P25WmvN7DuP8VHM3sNdbgA4qpF",
  "key32": "5H28MH6z1freqHKvNxEevjctYWS8wpy1pctZgoN7rujhWQjCY5refQZYdJPr53zgSLyeDENwaLxrKzsgr2brTeDd",
  "key33": "DvN5SMys4bERqymREjU6GakvLN2Gfms4KA51N8ziS9XQLHGuofS6SQXLuCpubeYcqgzawB5oRbYSwYGmLZnHwVs",
  "key34": "3Zf1kbfY6npzNducEiqrmB8PvqHwuxjgg4QtxCsrNPasQvGMBmUF91dVf4A7mGoEAjE7XdSFzaHq8MwEKW8frnAT",
  "key35": "3mVZKjfMCk8d1FHnwWgYa781xZfm5LPiKGYtPxocFuqQo9vBeaPNcn11jhL2dVm3ZJYNTcamqTbyXFWKTzPM84rD"
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
