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
    "4i8KU2sqUZkQkKbEDc6qXyif6ybLaiNL8skweppijazg7CH8Z5eJSnEkncpikeak4rc1572DqTsyzxw3JChXh4tP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uurDnAXcHnwhDfyqGzyWoVVPfvbLU7tMvNw6KnzNinCSmbkrkNXncfxdfMvR2YhD6Be1ogyhzq86rgE25jEzNFj",
  "key1": "XnEi2KkGeEatC6giEVzCzb19dK6dX8DAwtJRdCsMSFJRT6cTpaAHvx8XySAgdnmwgxce5SV8m6j7xLu7TdCeQ8R",
  "key2": "2e5ftWgpCRzUbfUgRVyAYuyBWmYaBPSDJff1xYCsaMtXy4DGWeZLxCtoFouuBrVoeFHsFqezDenemMmWyqS6L9LG",
  "key3": "2RExnW52ae36WzTXjSxRnwxpvLbd4tHyTXhcM3c2BK8Vocv4H3rjGLL6HNTR82Ntxw5NSENK7b7JRz1T2RyPQDqK",
  "key4": "4ih416hV3WuHfSQUcBgu1ifLTaFwAb6iaA6U5hnYwbEfxUTn5fdqVWP4GQjgkStoWRd9eJcLqWrsWnmqNbb28rAx",
  "key5": "jY1rX9V6dLkks8Bi5ZnuC59T7kgeV4k32fztPxSHvS8WMscRJ9nwpioDbkZiRoyHVnxQWuVTH99XLJW9jDuQFGL",
  "key6": "5HdFUUdZyRgs3QBGDSVeobcwSyThvDhHRDDQ2dxU7mZe8dG7oimLCRFfVwXpwmwXEGqshLbT6SUEAz6wgHsQLRfu",
  "key7": "4HMoy1WvdXbpgZi2jrAGd8762Eo92LpqoBDSHsNLBtaNMNGgpahTVuZw3XqhXw4tdDJiPuFMYBYFC8jxuRuoydPd",
  "key8": "4zodwSzq8Ty2R3ZPLr8nn7YkMTihvYLYNnhoTdrkCsfRUMC4t25XdZPadLcCf16BiZz7ETh4oSu2ptMeR4oRT9xn",
  "key9": "8tUtQbvbbGWyuLmGzb1AAcCewWMv4L4NvW5eqi2gLZXWAwa5UWo34nhQrrnoe1bMYLfbicD19dWZrGXo2Tkrf3n",
  "key10": "3xH6Cz1Mi6GMSdMozrCLHapL47JEX7fqEqctKJAubdKVCr3XbGZSYm2VV8sTDLpAJ7sbgFdBW8jbFDAX7a12j49j",
  "key11": "66e4vQrGGqLS2dteMAf59JcUTJGFepazj5MTeA2PJMoToxS2k6stnkezv4BDcwALEYJsF5a9R7vhX9WVDZkL2qx5",
  "key12": "4NDYUkJK2TvqrqN17vuWJRJ8RvgCSTh16MmjwZQiBfGqJfSQvCFGaeioJjMNynm7FHi7hKFGQ5mkjtnNykKV53zi",
  "key13": "47V7dCAML2qBABgnDj4KaGDjZtWg3axidAMeBBbDLasd8chjEk7qjV25q5vpU5LZBdHFTjYj2K98ycETuoT3hSoJ",
  "key14": "3vSpR5ShLiNzZBC5u1WTJCWPNjPARLNDozhVz6kc1R66ZNAwifJc3qqCEGy55LK13LLxpAkfrZtmpsnZdKDGniEv",
  "key15": "61FtLc7qL6g374LmJjUyWi9JVmF6R4XRe69dztPpdY6BdyH7h8Ev7EMTbYvuU3sADPwfQFDqe2EJDErnkPPRRFTp",
  "key16": "66mXQmbh7A2TRGDKtKaJbuxfEs3G8Yx23fPWinB7WHGdg8h1Vc7bz5rR1MhyVyhQ1Gf5Bna5bm8iqiJKJYLVCHdh",
  "key17": "55VxT6s49ZV9LELY4LXEKhXNZTBsrzT4ZgEbiASJaktSHo9ito1c5a6fyGx72uH978aDd7g212zD4mTa5tbkapMv",
  "key18": "5ydEVnUnxFJEAUehmancvsPYVywWd7b9NVf1gai3McL9beN76AWc9vGkjy1bwZ58iBbZBAebzj87xVwpVS78MBXk",
  "key19": "XfsUiBnvSWJtWPksrkorXT952NuqmqXPqdzS3EXLuSeqmLogjmQnNrYdz7HBcX8Q6ZVFZkaunrjEZogKzjeif8N",
  "key20": "5fcRQxw2dsCAG55KaUnFmJ656vJLKSbeqk3EsmAEzjacfkmhumUaVsSPMadAK8vDPUw6m1wU8GopEBbszCq4A5Vx",
  "key21": "37xhPeboYmzfuy2hwSn1MB9kUEp1FsuBRpddEDCgoTL3jVJxTBKS3wMKemeDfr5t4z2DgsGkoxrEnccHpzTXBAbL",
  "key22": "3vKeoC99DYR6QBPm7CsxzsJVRXjLvN5tsKDX4kYDc44LwnxbBiiBsAiw1yh4Qj4Rb9hZE6EbrfczGayFTW98gGGk",
  "key23": "3pJqrhDRpF74NGp94b6hA1yz5yPQ7ap7Nuu7wiBgKCWhDn8nvs4fU2L9oPp13GCYK4B1vmvz9w4sykxsC6MnxZbT",
  "key24": "3Qy2CtWCVyUoUk1QHvq2TURBF8WcnF6D2FuP1QKzm8rQZFe5nRopsmgXJH8bwtJvyFeDFNi1EQqBvSTE1szVhcGN",
  "key25": "oyL16AgTsnMaeXbGyBJUWYuaP9ywZnEoQtsMGCitMWB6hAMkZueoQmMr3mb7hNQPJSwDq482gLnSeSjywazEuYS",
  "key26": "2KbqQ6mGmWouudL3Kd5YMZ5CpAW9EkTf8dVohJsf5aaxbY8Y9W8UNH9grGhGeSqzscdkfn3AuzUB7SJ4iRLiQtje",
  "key27": "3VjSYmYiTashffWAk1PFYNkfe2EdHw3CJotqxkTa3yPT6siHbWZmu6PrzxMH1PHiSL5XBDktaU7B3tiuxQFvtSup",
  "key28": "2qgkQZKrgGJ9xuHNiQ1SdhvqpNG9LogvTy6iEMVTxDdQHjEz64QfLz3tfXXcSTwArkTtXkdvCoWQxTfzqpzBtjeV",
  "key29": "5qQpi6GsJ1puMuCdRCKKK1oyafY1txXa2dSg3Rdy2mShCsE5g13tBtNPPu4hNDgNVE1xvC8veKU8vTe4v3HGxLiv",
  "key30": "jybLkHGtdYdt9WoYA9YEzSpxsMm3HpDkpmoVchC99iU2jwS4zwtmN1mCJnL2cNBbFguZv3GGwc73RPzWovUgXWp",
  "key31": "3ndwgCKnudxtJJN6i1vUEPH3eVRrsh6oVd1EmQCoVrAeEarcAJsxrezMrs3r8fruTq9VX66XwHi1XhsAUhKoKoVj",
  "key32": "3tsRfBGBmk7TU9eWQC2eswmeNvgn4AeVrmomamcD6vg7SCypfvfbsYnNwLWwGurcjZbZnEjp9bouSwV26WyXMxeV",
  "key33": "3pvr8DUd6BisTiDyEhBF4LTv8BvzPHD614T1u9PCU47tod4dC9s5zeUtEgNbwDgrRjC2K1Xckn2F6LTeF1HuoQh7",
  "key34": "afgxPrMNH2idrwSvhQfemm2CyKUmDpbWSwwRT5MNua8sWG745PHp5c9dgqye7iD963MfXc6xP2zQetr3HRwNCQi",
  "key35": "4tzwPZiF6kaaSEDdpca5G9xbNucadLx8MVbjUVTTpvRnyynJAoZfYmZ1gYXfYq6d2dCp8fB68dMbsVLsKyGEz8PB",
  "key36": "5pVuhYN7NxBKaKmnPNwivUUu4GVtkFgYakoCUg32xkm8AeEev8JyYdj88QyeBxf4okUtRekDQgTv69oN15H2urRK",
  "key37": "2TntmvdC3ZreATyFaDy9izLyNNy8g63EzHKbTpHjZkfb5MzMymBs32E6HRsH3JLz14iLkgDQZuXraCVTrYx9nX92",
  "key38": "EsFG2FexCmHxivVjDkW1zWTrk7tTjGz49rGjZQf2yNJE4NcrmuAgzeLBfoVRk21R5fXSJTt8Cde3j5YbPvkr8Wj",
  "key39": "2Qpr1YTsAvrKqXfNSUk7JD5178BtQYmEbiQpfF2mD8WJgL5sRyAEmPFmygCyekSby8X2UjwYAqekUuty7w9cWCqy"
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
