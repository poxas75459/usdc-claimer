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
    "4vEEsry6yg3ycQYmKj8B31PwYE6RqgXNxgkwpT59Hx58uCsTV34X4Yg3bSu6WYHCaccVM6QDim2SxsE4W8ef9sKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57zst4xyeDhGWxizRUozQTZjLNSRqkQDyKrKKeP64x6snjVzEdN2QuWpCQQwCbMyAuDLFe8QeuC4hG6AmqvTGzzX",
  "key1": "59Nropw8thSsjfi6zpt9ygtkkZbqoVLtPF3L6uFMTW6DZ9HW8UsHMritQiJXR3eD1LVpNAvzzZXw48p9R3YQ767Z",
  "key2": "3SxygbDJ86VHt71rKLXn45BPZs9SnBs2eYLqerrTVr9SQGbUhsWgZt5rnhsubhyw7anBH31UXNDVinvwNxvNR5ak",
  "key3": "ybN3EbswZpMTZAn1GVsg1hCWXzs5C57R9QXFn5x87HuueMoBxcJRraTwtvzX4ZFJRFYNvWkKxwJbdPmNs8pUk8g",
  "key4": "5jkBGHv7m2gbLnyWQ2YwMERrWt9F34pKNEpJHdXWGeyJejJvUSvQX7N6R1psPRVTY1PjVSawbFd7pNfGss7R7VEj",
  "key5": "Y8Ad88amj67a5FNZLHsEQpWfwwTbAVZXMGWfVFujkdCwQMXpv2hEawNZZc4c6hdqWDQgdx8g5LmX8yoTx54g7cQ",
  "key6": "2MrLwuRckxqQS3FCpbUM2krpcssVBR6tsVLtmLMG9qPsChFoW4jmF1CCxeoy138cA1fT5GRKAnVsVHmzmYrc4kKH",
  "key7": "3K5ajwgphbBvQV11LX9pS3Qb3HC4yto2PJv258gBDxZvie7bqzFNow3jBn1extHsZk2Km7MYdUNXMtD8x1niskz1",
  "key8": "5NFBbtYE9PKp9h7qcyDjeFuGNo81cpM99fSirhkEKHksDkMZVoDyHVuiAXd4U8CNQFBUr2LWcmoVQo9E3pKhKtUH",
  "key9": "VFEZXaNwoVXkgaRC2zCxbN2EhM8QHjQmwH5NKvD7Z2MuYsDJvfa2zUjA148YDHYBCWcpEaMJP5rFXcMQyBTKMKH",
  "key10": "67mPAPSxc7DHmmM5pStNEmsqSG4CNifoSxs9uuWwkAC41jLe7J1mVDbXS94psz7K4oq1kJ7gqDwJrukB7r5sfvFm",
  "key11": "4aMSjbV1W8rgQxXeCdDvbCiYy1LRMsMsg7CxMZAfB3kJcVmg4e5yY92SGaqizzKZgc2DdS3XavtG3ztFtDgoEGdb",
  "key12": "4byeihCXXVAchDQpLEwJZ72Ke3i6jB1ux4ev5KYSaXEqo6xqqhUdgYT6NLrEutaKZDMmkZEj7zNGRScLB8baMfnL",
  "key13": "2gqYjSeV4sBezTHuf99UVBCJVrZkLypLeD7KTxgRBUsh5Kjd6NREXxqpg6b3omN2gZ3it2BgxAFjtQ8sE3k3C2Ww",
  "key14": "3jHC5GFEuqB3SXdYseudSHiriwYirdRPp2Xb3ayGAkGhpz7c31LwK9VMXHMvvxqzX6z96hjyGX4QJ6kxQwbKmknR",
  "key15": "5MkcotFAVphDkbCtrhB3JY9brCzQEWRRgXBwRyn7fyvXHMtofy4MLjg15Wd2ivpoyCFzeWsm37SvjEJnhj6t3HAs",
  "key16": "29LUTSmaFf1SdrSAEgbwnZe1GyqX7mcDEYzUP8wwZRduKzXSpagTLWXrCQ1AXyuc95bTniCsetpZvDm1k3dRCvGj",
  "key17": "3NL2FZqGoW9b2MBQ57F1fE73XjQQEqv9BXHL1xrQ6UrY6zRtS2m3Z6LqdxUj2vKdbr527MMDdR1cXhNhVdEVnNye",
  "key18": "2TvhbtsV3Z62ZBisuSfKhx9FRmNL5nDmBMaT4zMLN2UQiFBM1gJwYGTe4iKLsJk3jxKoHQAGF8GrcWcFK9ZMUk5Y",
  "key19": "4rPr6eeAqCWotJEM1XhX9ByLVhm8hWY3nV5K7Fi9gUppwLcEEp1mo88VcwKQqkb6psC2HnpfZ7mSvsA1NSzi4q3",
  "key20": "4BrKu39F7mKvXrHUGHHUsU2m3b2JhF24CsPnvJciWma7ZfZxn7vJDmU5Woe3em3qzUotwa1CwbYULgrmWCdy8625",
  "key21": "3MC3JYoMYjLhhzgfn8S7cTWh6amRKLv3c7exKZp26bA94epAWN62DYiidUZhB89JmvAzS5kwc9pHoCj3dutFJFnj",
  "key22": "5vJCT8Xru49nP7qgbRtKgyhaNw653tKapDrhKwbaVHNzpoJazqpcMj53WEjAMWBP7Vf7VUGVKzG4ychuP4nDvoRj",
  "key23": "2dhkdypPZy7ShWFjhG9ZsxHp4YzM67R3CKWcjJToEWMLwygyfhp5mkhbFSVVwf5CDsXAqgjrFK2Y2Gtap4rq5CTz",
  "key24": "3sVMxRfcti4t4B1XZbjVPcHXTPceaGUPPU9H2caBMewN2nrYNfuBhjnfvaRFbHBd1GqcxKFkzVoc4qGRf3GFzkAh",
  "key25": "5zfYipVMCevrPYidnq44nNt6vMvXet2U2oLZq5r2YkNBeU5Fs7mXFo9oy6vvdfEAPY7GXtTXmUBaDHFVQqhjQtG5",
  "key26": "5sCnf3bnGDYADDALfvBuY7PiX9vCSREj5gP5UM6sQTHCfmD4reWWKiNst6zz3uUHqDQbSLZFKvHdyn5KgJXPesiX",
  "key27": "3fRLnWZiC1k6gbWwoWJ9p16GagKcve5iKkVwXvh6HucGAZ53vr1zBUDXzmA6WFFxqd8tiQy1heHySoox3Mf7uY8N",
  "key28": "mr32YyE6Ai7Eu1zqYxc7bV1rHxHby1eqLQZVmLQyCkaH9iit27BeDHMmjUujsSmX632S7mkACcGw66rrcnbBSRv",
  "key29": "633NdJhnLcccaxr91M7A5QvStPqjzddfNMvuZCmjnifW3TmM3Ue7da26sMcXzVHxaFMXgoxKdWS2vKpPqftD64NQ",
  "key30": "5oonkEdP5NPTJTcgsdbMRQkjK3NmZztbq6pLckxxvftud9KpRTm2FPnycaqeaAYGPipfdJH4Xz31JWcbkDEpEV4n",
  "key31": "4JebKpHHAU3Cmy3Gb7JTxG5b3Z6GCiF28AaW8zV6ZyqtSt2Jq5XPGP5pQh5BJARyxkoPbTCMt6tyHHrv9dkoSHLp",
  "key32": "5iWAtkcyiuAvMf56EcZqjGaCKBaiArPrP4Tgd6RBisSC96g6mZWLiwGQtKhAXV9iRoVt9qCarqEGbc4VdLDsEb3k",
  "key33": "2tgn7iJcKAUnb1mABQ8BFYpTqo8k5eobuTRGeWnrh1Wa8ydvsJJGuB25arrb6HoTMUdjnNgoCzx8L2kQCWjUh4AJ",
  "key34": "3yUBda7x6xNemS2SEdpAdJNVBPaHdaeUsRcoe6Rx43az8pkGaHn3cehcq3KnRabjDRyRM9P8ntoLmj7M7tXmR4gD",
  "key35": "2H9eC3dgDThx14wkT9JZ81X6CwWBrssMD73hdsrvmebvWx52yWx6PbC64E3BrrpxVAZhMYhEjptXEXr1BV34t99a",
  "key36": "3McrVmnjpyXobSjwyHWS4v2kVBPngpw7sMmxatzYmA4uYT4inNofUS69SuznZqkfGPmSSCi3dVdqNsbkRAi36VLe",
  "key37": "3bzWYDkJQpQ4U9ciejy7r9XSh9WjDVVeeGoFESR1Y8at7JwDScLi3RbQX26Wm7rmBmipGmuvJLYKFCEeJoCD9Ux4",
  "key38": "4BTw6USruDbA5vJaiYueUcSSvvvx7uaUJrGeZBnsSFUFH1LE9MZfGsqEgjgGSmtgGk7q9KDQArbKhyNsJUnRocEA",
  "key39": "59cUYTbnvynfGxTUBafzLbFauzCFeWeNdmTVfezTinQZUkjnyjnjis6p3z7e2L9AL9yFJPiFi1i9doXE1wTry8N2",
  "key40": "5xRXPw7UW3BGVj9sMP8PXpucd6uN5PiGjJUw5MSBSkcGDWUkUMtiYodoVybpBLSTNWj5Q8vx8R5nsqijAYi5x1zd",
  "key41": "5AGsTjJJDkCdyS9AKHn1nLNQMzZFfbdaTr1yqnaRjnzA9NpbQXMad4v72YpHsJUEun2WebRoYZ1V2THyT39ut4tK",
  "key42": "gTrwPCEQwx4pmH28jak1DxZroxZqKxz2XE7sAASqJngEFmPfVJbvntmvNVZd4qYNLpwkjSeJmUY9mvKL8TtiPFE",
  "key43": "xWU3mi8pkVRnEcSzBJfidb4vbXQhHNp6mcbuRhS4n9edrrLKcWkvuqM6RNpK54bmZ9A3d7BNaLGhDXs87hpf5aW",
  "key44": "3yj55KiL8Tkq9P3dqGnAZDC73R3o8idryiDfGn5jrJJ2nnxgpPX5BQRvezGfnoi2rwzpokatHCvPsJZ1DTgcsJNB",
  "key45": "m6kq8TBfvGz3dX2gE8MU4nqAoGLzDVgchiAVZ3mkkH8H7d9e3UTNxyw3WoQBbGNpCV4a5LufKUJ4TzuZUxkHFKe",
  "key46": "4umU5dNCnBsw7beXUnm2dnoUd7AFHouTudpkixvY3NsK628EMwmcw8RQwSmi8JrHPZ9K86cUpLdYRUUoHpnqDM3G",
  "key47": "4sgnes67Pv4BekSxboL3J3Wpq7q67oQqt8jYVftKzhwmKyS8NLWqgGWPc2kwNMjtb3HYrp8XsoC5pyyzF5LjBQnc",
  "key48": "6DmWgn4UvxgWPZ3s3mKKo5XHxacVksr5M9PQevNHZZZWtJHTSciUrhkD77ynCjsozt6cvdRmJQSXC3QeiJM69oS"
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
