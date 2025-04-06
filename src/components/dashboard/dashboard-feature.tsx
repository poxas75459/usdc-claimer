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
    "H1VGF2zqTDWZxfohzEfHiuLWTo6GupBek8asGym1WMyzmAYbovwuJdXVt6bGQJLgofQYRimy37CiWUkcYvM6i76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hwfS5jJuxTeP8m3Sfe8zs7DGTVqEX8YMpG9ZFR8w4cFUocGhFV2fcfHy2TghhZw9weZeCnmgX9FN41LiNdSekMS",
  "key1": "QE7DmeiGLZPXooh6mYPU2drjKZUfrgHdvzziXSUjZFcv79XW8EShJTtwHo99HYS6YY1RwTnZZpQWpPVr5UWyy4x",
  "key2": "5R6CEraytzYjrF7JJ2qBQKibK84Bia9UFL6Bt9pFLvBxUmAsqmRLVZGhh824CcpWGXHBejJcTD3mCjePEzpGCXun",
  "key3": "2FPst7mRAkarcJCMabUfvtG1HmJpbt5t9i58ZoNyGKfEdeqSATYaVC3ngLaQJCHMK1oXSJRadyg5G9AGjh2kDPRm",
  "key4": "BVQvjRohSdHA4LKMom2y6tLCFTkQX89Ftr3wEgAmr4TrndUM1WFaUAVNm6GHVr7V6Kqu7N9zaJshr6ag3sXc3va",
  "key5": "4vi2BKtPwAAkrZhVit5v2Cuq6iibHMznqj7JZ31JMCj7bRvLQyPMXW5rZWusYpSN53SMJT38PHZ1kfiNmdpB98E2",
  "key6": "4idnSWAz7PW63fNSsX4HEcGY4bSzQuCKbD6A5BP2meFe3i6TUw6xMtx8xXprcUFkqyx1PVhcSj3MBBRM2uS9jnFq",
  "key7": "5x1114PNhZ3uWuqt6RMt391JbaKd1Fj9qN3M2MfY2PjCpyQDpDW8Jc8FA9aWH27Wc2p1CC2gzcYYR7jJfySpBNek",
  "key8": "4v64Lc5Q7eVN6urNGMbsfWXHcxzoYfZRZ3sjbiRAEpXuG7mJsgJutjHLecwShwR8hZxPZeHCMAzmVQaYEzH73kMR",
  "key9": "49Dad9UL2WrWKfKvazSrnshXkQN3PyJz3oBx3iM1BgPcTG5HNLjNa83xVM1LaT8AEKUWWtqcgT8MiBe36pWg7psg",
  "key10": "y5JtHLAUkBdfm6pYaF3uPdtdVf1Rw9rbnVNLXbs9fwZbukbZ5Hzkgk5Q9mf5nALKN38Sa2rbADigVnrDg8SyEAr",
  "key11": "3vVCpF7Eo6BEavLziU3h5wsohLHSPb8ZX5neg7KHjT6f3fxaC9FTpmCW8eDmaTZCwgZqBrSgxHtrdF8JLrbD2Mt3",
  "key12": "4wTHb9ngg1RCUuV7Yf2xBoENoHBvSaP31q5Ys48e1LfEnGusdg32YhGEYbRhDNQrTPUS6k6E4KsgtgbFF7CuPqvh",
  "key13": "oouSAvc9mWnRq7GaodHG6Nxn8Vqo85Pu9PABgnUgRgbHzHfFWM7ivysQAP3vA94oJxUatYZJsLiL38bNdL447CP",
  "key14": "4R9yVvNxENH4H8Ln2pY7sH1DXWzgaVZvrARJU32UWT7U72GG7ARyRHFK59MoN39MgZCkt9HSw7pNUDyoShcWvjFr",
  "key15": "3qBP7vm3mWm2JqQ89V3ffkA9jh5zGZ1SwdWs4Um6ftX7Y3jXFHwrhHwwLf4CUbTa8vXQMwuiWJNMtq9HDH37qpVJ",
  "key16": "3k2CSsq9VzvWY8wnnZPxSPUXP7dRRz5Zgh2ciu1w9rTo9ezjykui6T1ka5GWYJJtLCJVuNatJxAb72ThN6q3rFfr",
  "key17": "2Ka4FQx7RqXjaLgTkojsM8MsnyzL5TteEMjz5NDnGkkgHh4UushXorqKgjtEhcytYdU3RASD8tXtYyc7eqoM57QA",
  "key18": "5zWS8fVsAAbyTwTtuEsFjHK8k4QB8CEEc3P6Kh6det4EPvtUWCC4iphcYs5u1NDXaAUfe9LoyJLDz5nxKgCK6Ecw",
  "key19": "Tx8Y9DYjsXJCExoB9eTTyxiGQ9RJF7foqbukjysaVW4y4qWBo5BHhUEA5cMYooUL7hJ7sADkbWANmsetPwzZoGL",
  "key20": "5xfigYas8wpDGYkyXeiTmGWGw2yC9pwLTY1NUKLVzCux5KnHr96qt7Q2t27D9orcuvWoThPCkojf7TvyggUAqffY",
  "key21": "5CSb2ugC6znsigeFwcgxKeyZTEJjBtCaQEorMoc9ypZab6oCTETPiYaaU7fuBbhSDZV9gj54n9uHFgC11DJEiMLs",
  "key22": "36WaweLbyq3U7Daf7EHw3DrkcecpX9vtwtrhAGN9jXwVmSDCrkmdQfFgKxQ4iai92zE99SmHyxpY7WzKm7BFkz8z",
  "key23": "5YHQgzJBXrMk9yKr4PsYstZGqGTS1vmHq7Aks1e8yX5iuK4KgmJR81BqDdncYwx9vEX2QGjYS74gi49bjFfZoy2d",
  "key24": "4WQYpXFoNcfanc3CZxFXyYya6UtXLyL6i8F4Fk8NJfywGEMfoJ6qpzg9Qpnk6zKNQAjfNxcV2eiJuPPj1NRjvdRw",
  "key25": "2WuU9Co8kTYA2FuCiW12PLMEMgsi7dUtMbr5u6DthwYfeQoAsDV6aESdcCi45GecQXS1XatpTcewwgigYN2hP9UN",
  "key26": "2m8Jy354GfxUMcG9qC2Yts8MTNZ1YeHU85hNv4Yuj5QWJLRH3PCrTTW1KWeiKjn24YY5NcaARJGrBYsFU5mPLYnC",
  "key27": "38TU9jNrUw7XZJ7DtKxZCdAgDShGZv1tfZgcFfnB8cZ3hvG2yKYMknTN4EuqAUf1fuupgxjKDbHBxvqeznWtxaav",
  "key28": "2PUE14MMkFfFNRaoE1ycp1QgL8xPup9vFwmFZobbGDjrCpwthL7rQuLVDtPzPYZx945JxKqmwLzTS5PhTSmkgaLs",
  "key29": "VF55KnD657LJSpY7bie9yR2pKGBVM32iqPdUaagESrGvKbLeFbYjiwmtvsPU3kZrbdDJDVG6CaAop2PiV6ZmzqU",
  "key30": "2J1ScCF24yaJuzCQFGx3yrEcUngGcMMXGBy8yWPQ9pjdjsgibuZyYRbH9F6M8Lz4kwZevP5PYjnAYT5yEQHWMVFM",
  "key31": "3AMaoxZHokFd75wWHVMKBQnZiCio2GYNHGKZiriBqYxRpF1dfF9CscTQmBS4U5UNVTUSCvGgARbmB8YjkQxNXfoW",
  "key32": "65xZGz8zTKGUwDRh2T3U2zCn97MWNMPnE9jozJLDYVcvzEneKPyWGfjdyBEckbtoDUiZmUKDQyRa9GxD7oQQv8h2",
  "key33": "4pv15dkjSFPY4VNSBeLgfmkonfUjXDC7UXDYgiHLF4Lm6xjDPoStgwgJuHrQvBYZ6gVo7pmgBq1JPSipffpUAi7V",
  "key34": "5xq6hp8VsQhhRbZmu9jo4B4jZme6fTbaDVQyqHGTK5BcWxDXy33vhus1K2NNWJhPEAw77ZR9LKkFgWsCgFU6i7w"
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
