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
    "5NRmEszMhGVnPYUxiSjNRKDGEJ63zVrxpYK715zC8eR8YWEy9HNHrAWtYFaXhoVp7fxTPrQKQCefpNqYeumoeeR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PcjtjfHS7V75Lc73Ydy7snN49j1jKgWaKGK14NoCHwRNDcLnC7kcagNHCq1Ercn3uSVKeXa9ARTc1GRdTEYUS3G",
  "key1": "4wz5Jshr8tisLBTnq5VBPPiFez21ZCxLHQ5iUcYVqQdMcgGC2Hdn2McrddfsBQab4cyMmFm62HYcryf2GAK8d6rG",
  "key2": "3412Nqv9XMiuhb6eJSurR3ehUsByvaKso31QJEscJnie9HJEiv2MxMBqmLx1CVc9hXEGPt9BruFdUy4CgAnf5LrS",
  "key3": "29hP6o8sFG2cGnNk1n2QEKizCoMJKCtpYcpdqyLbkJ9ZUPFmmrthpL1yxdk9tESmGecT6NAzuWVrtDWXUQhcCt7k",
  "key4": "NxbeamRuMBrudJMHR5ZNjWzZRano2Wx1KpkhPxtsMkRE46wjmDc6c7ym1gEKS3cEN4tdBRX56Y6DAXcion2YBwG",
  "key5": "qyvD6GpG8tfxWcxUSgyipAyRSr8YeFsy8KpGbWVokKUvDXk6hsvJyWnvtrP4xvF3YrGTvPAoZpyUfZa1x7TdNnT",
  "key6": "NgBe6Ze1JvpW6aoEHMPVAzsVUYuqofZ5VWTMqh9Cay6DNzbJcc3KpG22hYf5TRu3xmyx6wt7Affrt9VCL42CbxQ",
  "key7": "3wXEucytKAS9KdNg4XwgkMxTUrMUAo9kJZEVFBrqJ9nTg441cGJUenm3kg5aJmCoFddDaQDkr2o1ZadxSbsBpzRY",
  "key8": "5HjVEZqeMZb6ueM4eGqL1WSReVr1vqj9UCSUtwcxr6CvZW2espxWAFQKEoCivexc2SMeexv5UwYupC5qXC4rCgbz",
  "key9": "312cjQuEXiDyLcL8RjYNSAWPNFu7sVE5mr5CS44R2q2gkrEd3bRvSmW8kPfwiy3tq5nixkvqhsEG3ktQKHuviZ5R",
  "key10": "3QFy1xsMq6iSnxTRZF2sJwGrqf3nHxM4tvfZk5sDYWKhkxL7ZBqzu4tmbBHHug2592tLNfobrgpCg3xWYN7nbZLT",
  "key11": "bcdrRsESDGB8H2xTSGEe5bAwTAJYMqCQPaTNh1tpHki4EvDmffcq2y1dG4rns5EmV7EDqqHfMqxGgr5FCoDsv9q",
  "key12": "E3TmAAtVCmoyVYz8ttbxxzHy3PP6dDSbStcazTEzCZjBNvZWo5kt8dQRbfyqg8pi7fCJeZvbF8rtfVFAiD5XCC5",
  "key13": "2aAA3KBAZAiTMBWAoopBQ6SdbFZ6cWEDqwQF6EvFgayGc9yWuRw1XvwtNJKZs6pQLwoRHvNQtWXFBojoAgcSazfZ",
  "key14": "3KbCu1DrB9677LXp6Q7F9QJD1oGGgP2ifpzo6zx6PTqHNrfRrHx6HbJNo6c6G93x16N5pxzHNM2qX8DKAGyJ8HRh",
  "key15": "3BA1qYwG6KyTHsJdMkNByXyK7pFQio9QYfdHPQFofRBv1YcbxvJo5Lh2L4f1xELJHjMZi4vfuQhrQnwvWBUe9795",
  "key16": "z6oLP4bU9EiQbABcH39RZeFcrQoighgnujVPzKNs4PvEogPBBtZhwTULvuquFj69LqZzGFxg3NcBRfvGZ5EDBQh",
  "key17": "583drSYUD63txBpyFWDHjwVy3CVLx7XUCiqxdUdtNhX21RvnmNLyPCzYY84Dd9b4Pg79r3nBbD7ZmSHvJEYR5FHz",
  "key18": "4YnMkPp287eQ3eZXPMp6fsmSYNTQfm3cEpptK3mP6Xs9sgxNqxeRF13mtfxErZB3jYmHQPDV3uHGCXGD2h7jPyq4",
  "key19": "5E3RoUkZY9hQf5bnBpf2rUg2LASWAk8xykr4P5pQ6eAyzeKq4RQY6iYQAi7DY3eJomGo5d6NcmAk8xQea4Zoo3GE",
  "key20": "38QTNiYWdXnRN7qepU9EvUe8QRJ2x3By5wfujYXYwzWkK7VNUZFA3FqcRi4xamkSReWfD8ECWYUdJbbLbgAn4rdF",
  "key21": "n26uAkMY1xEfqzkSQPQfaoqeiGALCnqWixYeyijNuzYAUAm5P65EKDLaGK1ZfbhUP1ESqejnbD1dfaTyykit36t",
  "key22": "3cbyZ16D3TwoW4m1DDom6kvwkz223G85zYsW9r61d1PVobB9PLuWk5ytLrrfUXuT4ECpVhufcCc7fkyzXrmaytw",
  "key23": "3RqQpHGJnVkuSLa3EzHWxCrXcTJFSX42mbgkTpYLVf5BqLBPVDezMpkTtRHdiZkneYy8ujS3vDX6TvRCpE1o44fW",
  "key24": "3XuWgWo2FEgNz2c2YSGbBv3o6qdctPLKkWgxmckfhpyMDZF6nYrQLugN3V6soEZFJFpqeZDappQdmzAgfsxYcmm1",
  "key25": "4N3rJoaL1bmKdYtBrPMHo43sW4Kyp7hfmogEY8Np5eJonj19NwrinLQ35553DAeTYFFZiXf77YcyYQpdFvsiEJQz",
  "key26": "2yWebtunPiWhpwbG1rBPAtfoZQuJxNx5AtnX2t4Sur4TmghLGCUBiUiEYFBDDnktYrChhRDK3ejDHjnTuLuSsqgg",
  "key27": "4bTBdVrnzxBLKGFLVJvV1sUCh3drGCcqZgPY7DLcRqi9bwvi281v4n7ioEX4vimFHSzCAzejVBozLeFE9CqLtWpn",
  "key28": "4v3hAVBFZJewmMoxBnD7NVPast4uUMEu7Nw5vEKRoZnA2CgghB3QrHuN8ZNobMswdMJMDJQxNaz6M9EvDqsJEMwG",
  "key29": "5pvfCywJzFnCTkvgBciE6v6cin5eJYYWGpPjRPpJem1YLtKcmM8xPQt419hisUJV8mLsFmttcKkEnvsJUvB8sM2K",
  "key30": "5oZNdtHk2QHrRf5vACKzcK8hX2QkJHeFJsPzpJXAF65AtqPkYMxiSrrq9fXDc5Fug7zBNabnKKLfvA1WhVB8ShTK",
  "key31": "3UgRq4WzicG3BWYjjwCJNp7EkPLixvwm2UdxNVxjpmsvfX7259y9F6yfZgDa95WDBiiaqC8EDD6sN55cq9pptarR",
  "key32": "3R9r1DbM5DLjRFuN63EbofqsV3xgfzR27EXMR7KyNCukMJUksjvky8sS4ueNLEwggBFdYcG5qTzsiYS7qLm9SkHj",
  "key33": "32UNTGxv47tviFzjChpe6KzbpsU5dX88n2EybMARnMEyKSjgS3Cc1RWMwbWUZ1ShWNKmCikuBDo6ge4xUZAFoGfK",
  "key34": "4BB4XLv4Mdi7ttXyWYz16GdQUp71yprDVXxYrtxBX2L1anFsiLWvJKsqxDCQjKigK97fK2kLemS5ertE5S6iRBQ5"
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
