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
    "22f1rsfb7FWX4wcQaTiv4dP5Tzbi13CauFRydVaXMsCEU9HNPKR9fCEYprq5hPiNu2cPCT1WbUyFmCPcrma6XaMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xY7kPzwju37GSXjX9hDY1X4hqbEj4JUR8bu7BaqB8h1qHX5P4WSkTQaBHqRtAJbyCvLnQZX7TNBUS8HiF4sSr68",
  "key1": "43n3JcowVWe4xae8TZkEgbGCKzgShf3qbGuMCUiY3BveGZTmAwAtV4w2Tcq1XkFKDfrwB2g1LMz1EiLNDz7y1RBX",
  "key2": "RpHDk9vzJEt5K7yGghLjEw8dzXbXxHEE7dc7ABMXfQ7tn2F5yQZ1gDQvXeikLyEbFftwgv9ZE5hRtcPChGEMBLY",
  "key3": "2AMiWnFfyBaZ4DxA4F7mfWC2MHWvjAiPde75dZVEmsN86UuFMiRPmyfCnJ7ZAFWnwAZxhXivhcDtTyFJVWbYi5xH",
  "key4": "4V9K8BqkAqtrD8Akn5biVnCR8ZfzWJonWCFE2X9aoNaRGc1pHuSe37NJiacFSnFwvsYKb1o78tVGUo7Fj6HsG2dm",
  "key5": "3GcUfMiGwKKgR6bSMrrTFA6pD2rJihvLZ9NBQM6eVXnjFV9cE9fXfAU9dCV4BXkeebeaDXV8nfjRgiG9HGLr9iFD",
  "key6": "sm7FQDUoy1CK52ywVzFV9F3tLxfv8RVceBQBytDyRFcqunNjhpA62tPeHmds87xAhjxfhLPBFa6TMzvWFLGbERN",
  "key7": "2TDWMoQVkrnopPwQkXTJXhWfKf7zTEf8JU5ti9gQzrpdghohSYgKGb3iJ1kVjrwFZfH5HVjmXSF8XAzQYYjpqsQi",
  "key8": "iNmcKJrZuXLSi9K2Nste593hDRPqz9kvCNpTKudUvXLSfCitBDdJQqyNBTgGjuz1T3qjXULGQirkaMWDPtinLcm",
  "key9": "5mN3LNZpAMx1EXbymRUVrnSm1J5V21gSC82D8hAN3Vn4JLKsAGcE6QTtz9ExJFt9FMwS2wx6ed7sv43X7kJMptbr",
  "key10": "4hWiDj46mK8z6iLy4JaM19f6Bw1LrtCZeAjwBpUaseV6sH5SSCf9iqFYVjcvGoiP8isAm6MnrBDeXhFcTAvrgPmu",
  "key11": "4CRML1KiQXnf5zP31ZTmhi5eC7qq5UDaahJD7ksc94LLa3RYPnadMvSZVE1i9MWs4HTyifGptGLL7ntH4SnHfDYw",
  "key12": "4D66Ta9A7na2CTNvuiLdpapXtx8eU9d4KKjBag77EtSDQjfqfqeyx43mt9MWo5kJxqxPGgg6QV9SSrxPvB3QgEJ1",
  "key13": "i78Be4TJcf6gMsX6bLfxED5byPadbVxEvrnc9hsqvxwytFQdtHyDcJekyGbczwodnHzdxd8MubY3PiQnspgxkhQ",
  "key14": "3x265MtEZ63NpVBTDztTed2NrdK8CnnHWfXDq8cMQTxerM9jHwxS5GBuB8VLAcN2UHE1T1Fm8ZtdYnDfjVQaCAA7",
  "key15": "2hzxbAkPQ9iiETyM2WYWUcKrEGn6c8wYGJRVg4hxC2Dj6z9TbmuNfX5xV7CoDRWJrj6oqmnLpyavgCr3VHwLFzXW",
  "key16": "5DD3kV23wQ67YCaVY9qz5DZDejLfHk9SyDAQqNUkwi3STgFMXGP6vW8ZNWRm9uAxFJNrD8NUewufARKJtEReTf48",
  "key17": "bNmbofkYKKjS6YqgEa45qodGq9RbrqhScmdYBncqU45EipspWio98PpDmtBCqinxxEpMkgHpDT5PjZfLqBrkdy5",
  "key18": "2foCEB2SZm2Fh8orX9D9KqKpx8HwQFzRdDX9JCpEJxbtbVgUpUeBjAFSdgYKmEwnToECCHxaeg7Lh7UbyyaE7fRg",
  "key19": "uRNRWgFsy1C3TKiiEqV8qnYVY8mFxramZdP4rPxcWxSKYJfGAYmFRveWG6khdMEtxZwPKT2YBbKwfsm7yUTs7PW",
  "key20": "3jbVNey36prKRyAUyyZ9Kz4ETuWqLUuhqFHwzdiXhtaavyfLqNUgwUBbnaTrzL8PgoqLuR3JzZQhuNj4K98NbHaV",
  "key21": "chphwLiSnpNDZiwmYmpXVyXYV4DQGWRzE3wZHMvdoXsELcanv2zz88CWxbrJzpr81VrCq6a4R9FF618Snj16Te4",
  "key22": "aTJxA18NNjGzCQeN48QmhY4BqXtjsQE3pmXk6fTueUQdD1eL2QvurNfhWDZ2wcW9dX4umHpxHVz2t3Bz88Uog7H",
  "key23": "2uyV8grFbqaf4o3SW5tsvCznNJ1CaTeQpufV5dy3CWy7y3BzLHgFP7tazwiEMbRLUV5Lg2NGf1UsaKULHVhSk24z",
  "key24": "1Mqn5oBzuX5jmCoEM6CiWvLW3y6KMQk9754RciUW4WWj7ELw5JUkCudyMDGGF3fCXueBaywHR45APetnJZGAjKK",
  "key25": "5eXi3Zw2HzpAmKJePhQmnJQUQwBXBTUC8orPq14cGPi654j5xLQsVmatCA8uv298QtJ3z4DcS6hHXNFudGwMXAu9",
  "key26": "39y2si6WhtxNt2E6EVQkv3tdqa4fL49KBasup6mrYRkqAAZeENWusZkEzMmbbMt4Ybh1HG5tep4NWqH2LGL41wsT",
  "key27": "5LryrZ54mAAGRvjkhfvV94EykdoRYo8e1vPMDqqtqiQAfCPn6FAsj4nfUjD8ETCSfEmRQDjj9MG8m45wrwP3vybc",
  "key28": "4mpHXYPem4S4AjjnK6sSDjkhe8ZrxfxpzWdz2P3GhFjHoUo1LQveZori7XDpWnrwejQspRautSspoguUXUeq7SSV",
  "key29": "3jztMiFBUTsLKjeeZEijnMWP7bisrLkYBvtC8DZQvCyUz2xxKjakNZWhDxUUuQfmKBJGN2iKRZtYQNTPWNuHMchC",
  "key30": "2uDYG2iP2CKHC1jFu7TjadyZ9g88F4xysEyF5gv7qoadauoq5naRZoK84gNfd9Hh7tqJcFPr1KkjCx8KXWKufAV4",
  "key31": "dG8yo4WeQp8RnGkeg5NGCS2iaJcZMXVBf2dhAZTrMja5tJgwTD5FXfVyVQvHuvUBxjWAoxfqG9bHjep8QFREwm7",
  "key32": "29VPys1dBsTCmjg4DjVi9DVbWXB285eqCyHGHZEan2pFyfBAp7DQRJaypNBKSmEsdGMr6JXPAYcAroB6dV44mLVF",
  "key33": "3uaBpwVSzRoAChuniD2nkDZH19ZCFNTkVc1XnAoAtwp5YufAQQffoqi7etESVYGcX2rnBaowyJgwRHs7KwKRtZeD",
  "key34": "2npje1Ye5dG2grTEDZNX3XoMeJ5Gh8nuJNM4doFwfifLnAty1q2aM9wma2Wop2QHJQ9JBgDWP125C9sM9CSzZxuR",
  "key35": "3v9EFsWrTkNGEVFbxJsBom6haUb4b8yhi1qDKuEfkfpGawQcnLwn7txwTU1QBL6YThjaXdgEGCdXx81SxoAeLZgT",
  "key36": "4Cej4w5DWNddaUdGUeQmEtZgQ7UF9n8FG6nQN4H3k5RDU8A2SreDpnEK5zhTKjdAFg6CM8npuwd5wK1KNoaAh5NZ",
  "key37": "9EhtTo4YediynMG7QvefN87QEn9Mr4U7HuyGFDnSGFtwHFUDW7xDdiL2HzywxbnJ5wFuDEB2CsvvEo46MFMgrGj",
  "key38": "EkEDachkeLb9VyZqxYs1GM4qJUBLBjxS8ZC4Aqdt5EXpPV8n8aUcERhBH4kZyj6ezYTbrgRRNmnT1YAnEKQ2V5t"
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
