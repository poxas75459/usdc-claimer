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
    "5JfkA9ADAanhva4poCrpFXvThDzHuG9DHNemQAU5VEwzJAwd1X4xjLADAKnaEUkaq8RCeU21UNeYCKLQDWNMzEzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fqKwyNztpfsA5HRMSzVf1ZZkgyQdsGEvwy4bxZmJVQhYpbCyCCPrw8AbFgashUio9K5SQPUjog1r8gMs5qwMXN6",
  "key1": "5ryqRda6o1UFzvyzn9G93iZWTgvouuXjas7TYKV7vPbV5NSx2h99TNqCp4nRvhPX2RiE8nCWTYwnx521EF1NRbYq",
  "key2": "3wBZA9EZG1XSXo42bzjcF8fs7d87f6jfLWSRfRansrhe8RioJyGGSrxxNYoQmCzmRTogPtyCj23ajdvXcZPAS1fw",
  "key3": "5AwvGj7ciMHLFTXAQRUdTPzquaPZiJfieFbuG1Rdqgg5Cbts9NgzjrTW5g9GvCYgsR8Q47ZnBy8KJnAhZEwSTDxA",
  "key4": "4tL8RzfeWW4Z8MWT2zAEv4A2oQLHeHsmuWafbFAS9fKJFfTQx23NdwVvGLWawL5ii9vVUte9CtE89hBbUeCGr432",
  "key5": "4mLP1RAJ3wZPwqrN2Jr4wEJRRr5GuZhTKzbnhZXNqNXNExgTFQEVWFgDzrniL5Xie3heEEGTt2Wz6hCJvgCe86gY",
  "key6": "47rn9i9C7QGHhQ2aYTUKXQ8xjYj938VviG8uJjFJRg4KXbFJ59397972G6EaaS5kSxos78MdQ7NW3sQPdafAksJa",
  "key7": "3iGwsb3FMVqaTuK8CQsUpN99QForXCrQDRkMsBZJsXUyxFvfM1XVJ69DyLVb7b55J8UhxMoVfcnSaGJuAiFhj5rf",
  "key8": "ApERKAbnX3SRYEMmjAg2qv3LTpc7L1ofyEgPfPNrZc1gdLuu8Uydqqd3F8G68biwh9wAXvY3h3dhm5suySoctUS",
  "key9": "vRWAgnH5kMZTj6RFtdJYZwoJogru3fXjcX3iGiPSCzucwHEGeWivkmZcE4pfdPjkFjoBwjBs8tXYsoDXPGe1cQt",
  "key10": "5WW4MVk1PyJ7QeFACcBv26mJgM2HRU87K7rA2q3eYNKyZV1jH4KbsJRHam6xdNfSrRKcAf1UX7YR4syTFLuQAjRp",
  "key11": "2q4g3dLfEvLFx9pgtnV8FQwcK8ypHZCWJYWFkLzNfLGF1GG2yNhRP2fJCGKJapdHteNqgwVYbRVJwfBMYPtNLa31",
  "key12": "5tBeapNDmEQbHJMfrK1BGf2VN7rdoqfwjWvjGHDvowp1Evm72YCPVHPeBQVEVVZ8SQSCBJQK3os9PUWxUE1ke4HP",
  "key13": "2SXQxmFhWdzSn5VYsR99DJZH1t2wbzCCt94snSoP4ZNB6N9Si7XXdRUDdyCBiF8MKbM7p3TXgDE5e7X75f7zXGBL",
  "key14": "1MD3QVTbcLffEvRkHffFztxaTBW8R7gAFjvBk7KMD3fPn6wGySJDThPdfECXUAgEdxYAWiQQKsUuwNfj2b1Bnzd",
  "key15": "7c2NFiKh2vLjBxAW6SxsF7mLi3L5BmsQJhXRFsPTMeXBCUeLDtwrjh2JK2ho8tAS2TV12Hw9ScWtTgPpLzEJc3N",
  "key16": "zDjRbtrD865Gf1486ENwtC79LPDN3yAkUw9r9eG6xxSdz8mmsHgRCSAA3euiuC9L2wihf88V68iaQzMMErsMDTs",
  "key17": "tNrL4CQP7yJ8b8x9ATbmmJ9cgDAS1bt3bWFZkEJU4HqJp3kxFc1LLKGwgm2RwQM8KQG8HdoRy5BPMSps8pruk1X",
  "key18": "3ipSLhkuVMSss5aNVpXTCjQ6bRoptX6LN9QtZTamVF1gZrvBpdVhxnqd1tbyGzDf3WGByLe5MmmBcxQ4Bi7ymV6G",
  "key19": "4TnMmJfNj58acEZMp65gFRgtWVMf1ssUa5QehiQcoRdFJnVy1q7uBosnZPy5cGJXS17FMBdWHNPZ7HRKerqSztFT",
  "key20": "5ZhCeCXmahor4QBdep2Ao8yoBUQ3ckRjftMA4jKDcN5cwRGq9RWdmMxKALCqbtYJsW1rnbwtyobfBQ18hTa5m7Qc",
  "key21": "2JrttEMjANtnvcMY5Mjx51dCYuha9TyyoozEJNcQZLDkvnvWbd1bicQ64KiT13TrSAEwbvvCgzxV5SDforCToJQh",
  "key22": "4oYdhE88WdFHkrqg9dnfFtkT3NC675GqjUZkgWQE51Wdwr28QfrmuUaDWGBEGmDZbkTVdia1cecvnWct1owq5wNS",
  "key23": "4CUZ3jcdY5fN1zjzaJsG6ot73L9vbc4cxhpZYD96DRgP2XMFSLHvyEN2RS5kVJu5sAvmMc3wTqtHpS9MmKqMC5zb",
  "key24": "WVFrtS82UJiS8USp4ihehDEhVskq9tFMYcboVD9iScYYWsaDgQotqmcrmsHAhvEzrGSQT73b8uotnh45XJm4pGy",
  "key25": "5yobyXmE2sLmHjDdgPxjgessFLQgkzSxEX167S9aP1muLKxtqYcHWQD3VKEsJd4QgDnkCvUJfnAgEmaWKdufrjwT",
  "key26": "2vuWWhseiRNgqbNrrJCgRugKKswsBJJUPwXzvDua9A9ZPNQ1jxedzY8iUZxbwpBsp7UqysexskAchmTj6XJsGBGa",
  "key27": "5dGJn3VLSPJW99JFNmPBgpZkTcCTZ736v44HhGWtydKzNw6jH64TU2xWTPAa6n73AudkKReWSrfXB55Ft7ng7xKU",
  "key28": "3fP7Su6jquFmXowqK8sHWSJE8e21EyvXS7vEUSR5D3eiSUTw9bCUyBWYcfJDrdMjznJHNCK4AGWi8jdSFtWPjsob",
  "key29": "4CT39ieFbBhyWQxV1whQeTRkAzoVD8cqDrqrgjVdwSQA5znzXVUbyK356RNTVQtaDvCj5RkReSSSLo3KUyrCjB6B",
  "key30": "VJsWuh7f9PAeT45r6jHseoErRiXX8ZBCWS6NfvKw34Re2Q8J7KzKAyxqfboxXL6kgYnRvf7fPsNBjzvE7VfRKRm",
  "key31": "67R4DARezVZGJRQSnvuyia5ArWrN8vBofEu1FjVWTFWJQiFNa39JDaUq5msWSFwjw9SRjnxaLNhKG2SzrJEFrVgE",
  "key32": "5YXApgCNPFeQSviHDkgnet3dc1gp2ztjQ4iBMmJVizkhWf9X9VVpCuaagcziGtaBy5mk9JSYECbKtQiKoT1iFqjG",
  "key33": "V8DYZwKpCmJFgN9ESPfUQvPBTguNLVPmxoF8f84Sr8k8hdFNFZ4AL2dff7qXXhZdMvsYKucZn2TyY9gY2DYZ7TX",
  "key34": "357K2ndVc82kowhqRY6cj2frSVut4zzCD7gbC7t7YhYtsfGjem2qusyeGCvxUAVm5rMgtTcojton18N1xdiwdBMZ",
  "key35": "yByzteQV7kUaXjzTuCq9iVChmNRRrqBVxjAme3GKwavM1pPUBQusjoa3P3BS6N9fREXS4o4NEBJWmBKrTeGeQkp",
  "key36": "477xy1HMYnSShk5tfgZ6aPoJTcqkbR13LVpSDTACGXdSPPNUNzSfGV1ZJFBw24PkMMRbDPZqbMZUVsqpcJqF6YqV",
  "key37": "36zUVLym5E9Z3ycVtNkmKaJmJk7tPWakFD6ZzVrYWCtiWhsvx5gE369xcw3LbRXJqBJYuoNoW6yuGSyGnUxZTwqX"
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
