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
    "2DjHb1eWf6DMCyskMTgG1NGN3AhWqzW2xsS1UopuC4FcPWx8cbptQ36bvRU3P9jJVDCU9QPN3NbMaHrMjnwMNbJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Do4PoaxS4vxffgTsWjQsA3qvsjCRyhZyyF7wusY7oocfW6n9M5tdHmwTSQAJgj8vcBQaBjg81SNNCMcES3L4dNU",
  "key1": "UiQ2RpaBzoFg9PEQMY9xdStUwbkXCtmdKmVb4P4wNoEtXcePDupiekoyVmh2vsQDcrSLvWUtWTfNzek5iyABcdX",
  "key2": "3GyCaud6gVCHGupf2976k4NS7XpLaLVKSFaN2tbJ7hLFxcQDhV7NpG5d7VWjmQ9YSFPfYoeQG3viKGgFfs6JHYAZ",
  "key3": "4QQGr8Da58KYVRG3NuMBgDXdWomKVYx6chUJMUETermSvPh5SjHyRNZ1XUB6oncChVy6eBacjMqrKj54cWoAJY9N",
  "key4": "2LBG2pyxVVTcpMJd96PrdiFP3DN1cSQnY9nq9hwbGZh89YYqfrayow712mYs2zcVBLhEGhwq1uJkrqRJSY5fBgwg",
  "key5": "jegaYJtDJ42DeELKFeqpvaaJ8HUifMST75ZNEQdgtsZgZPGNNJAk5BQxm8AFb76S3rfRGhqaQTMngr9owENTDUX",
  "key6": "3XVrqiHJVXXpUE2aM5FT5CVnKpgAqZ6FvDWsNK38pUZ3iBzPS4NFhTwVUxgDCVAZMAtNheWmHmqmLZ8L6H8XzRAH",
  "key7": "2cDN5JauaiU7ZQ3mWzZ92Ka3zmeodzgAExuYqVLrqjkZzHdeENEA1RmDcuhEmYTYxZd2oXpkXJhniL91mvhpaV9q",
  "key8": "33K1ybvYU3GbVY921DBYgegDfBX1bdSgf2TG2tx3C2HAr5DxrppQEsrVUj7cGMGUTfM3DtWChrQ3dz6jMrEnePxa",
  "key9": "5bwEkDx8knMt5vUcNh8R6JWrhKG45oQFy9PeXmzkZZQvshycBynpouKctMUUvfGSedYe4kURxMiLXbaFYkdyJGsv",
  "key10": "2co5KWzqsUuRxBwpvPdNFCnpBqwPWrZedXxMBCHCqYq8w6uxrwJ1oWUEpCM9x6yoFCFu8qk62wqe4bedRGuN6Dj1",
  "key11": "2HbeeDWAE9rE7L8hKHqo5TLTn8qMtbHDEWeoyPnhxo3j4C9ogNVCeaxXGGjwveRsnS9pWyoK1Yru2XcTpXw8DXuR",
  "key12": "5FEAdqJqGiGRKGbC9Xo9yhH7LFeraPn5gYiEyVATBvo5BnDcW74PnRRqcWvmX7WXbTdtNV59h7jMaUfPz2fDJFZv",
  "key13": "2o7xTqaf4JgZoWdzz872Y4XSznArgEKgWgqfWvvDnoBb3gVtM4AjXjSgt3i5jBgZYWU66qDaXYbd3Lb2DGt7t45e",
  "key14": "4c8TtYFw8Vjr9D9iQxWQok8j4PtChW4dV5PsvG1B1RgBgH9DnUqtJChcKh6wG47As3ChjjYTitcXEpNZTjkAwAoS",
  "key15": "B7PNzVAWrxg8wpTELfcigYfU4XA9EXP6yHHVMg3XfFLLeFZXTSYQvekwKkJeLXdxzgr7ntALxw9TKgGxicS9YUh",
  "key16": "2S4jUWM2fsBimMZPNddNUT7qZrPje3nbZkELvCzXGbNWeqQV3EETv8kARU32FVaKdD3CJrkdqrZLPJb5ayhUtQog",
  "key17": "5XpvXY5z9sRnvsyT7poEzMdvMYQzNqe1SFKJzNw7ivzeagNFLJRN1F4eBBSEEz1RA3Q2zc5GLVSfRPmgst5upxTu",
  "key18": "3bFWYRfMwhsaNPHD18LETfds8mxUgLoiPfA19pm5EtKbUgySkJY6RJcse3ocUksUSJ33cBiu8Qv5eYuM5C8oxaLP",
  "key19": "wD7xP5djK9C8dZCd4E43yNrAZJ9MLdQiGd7kN2FsD5GHgnXFjszvbBgm5HaT4KPH8yymgJQP4Q4SemzLBTkb9Z4",
  "key20": "hVsGrFzB5tA2wVqReoLXNhBUNTPF5RSDJud5pQNBYMat1peye786VwegWkug7Jp5MBcjZTTMh7kA4c3D7sRe2Hu",
  "key21": "3qTKtoPvt67UieSBDKQ2tS5bNQyhCUJMsWJsjCJXKj7jBimTEBNNwympAZzPBMFHRZQ6cuVH9SQg7HQtJrhmrAG5",
  "key22": "2Xv3agFKqDxGHL8jz2qgoEJxYEC6YnACE1e1ysvPxXgTMv5pQDdX45UPPrpbHbFd5KnoN2gyMRdcmKrCPx8zWdb6",
  "key23": "3CEL7pj3w1LL6PQGGWTDgY57upPdrLizrpYUhkPWBFvpgRoKuv9GLWGT4KKq1B6jjnjrAfWES6Kp79igQm9vHVSe",
  "key24": "5LNnUNJLn2uUhZfMvgYSj1BWSw5JuffWBgyTxDwJjipgC4kDBr3Wp1Cys2fcXPAQhvazeNsH3PW7XGHDSk4GLbpg",
  "key25": "58HczgH9aWmTYLAncco2NotVuG7wNkwYViQwTCinENyooUdcvy6G7LngLkioUFCrxYoFUyzqsanHck8zVhTfwGxu",
  "key26": "3K875dy9vmKYnqhtdQvWA4uF2KkoTesoSTLayYtztgTY7rTREQeiUpSnwZr3e4h7HSAuHCbw3yYKHFSDJsx2ZCLW",
  "key27": "2q33Yv83SPdzYLtSN9PfH6xjtfr5J5B9LqoFjYkUpRdEYcact9nzvEWWqzyzq643hqJYuUUkqKxaD1Kx3q4LC3wE",
  "key28": "5Pcmpy6mMJoEo3Pc2jAt5AugSXtCp5AqHYdc8GiHK2Uq1hRxwFzCKGGjXLHqXLZvodSm39ja93VChgAJg1suyRdN",
  "key29": "Jk79kG2tJ8kDBfvuAoLScVpoLhRP3KXqD2uV5aJ2FXdXCmQhVun8NcNcQSpDAZdSyGnN7Q8G3RQbzxcFgAheYjx",
  "key30": "HB7KitZXnj9d36CBvtCqqfw2YrFPzSPJFiPanKkr5B4cqB7xC1xtJAgu6aot5tWXk7MNNTvg4XzLfTAE36qZGvE",
  "key31": "DgYGsg6QzRRj7ni6ycv92Mevycp9oRoXfGo6ivRQgkHSp93Lsk7SMFSB4GN61FmQbxviVAWg4pKXdGV6zDZYxqe",
  "key32": "4MLaC6pM4tycEwTDLY9ST4u4vJdna3v77susPxxm2Me1wy4VK1grrkZHbVaVFjsd3NQTcxupb4xgiESoL8agcciE",
  "key33": "2hiN7EcrTdJ4eeBgfDHqxDpuAyFTTCxMn8diNZJhMYpqXWVMZfSg32XhkChi2HdkWUji2JaoQVFEDLxSYTekDZkz",
  "key34": "4k9cYmxxE5cejXFctbiZcVdN4KrWNGqtZcZTV8DnKRpJKZxtFfPHUwbQ2YfP7u8D8YuiGwA1KUnhveCQEjmSDmZb",
  "key35": "kNH5Si9vNp2mWNU1XfEDCcNkvsNDbTKLDoPH8Q6vEL7Xq2wYCMNaJmKhd32aEJsyD79D3vtjBfAHRiJ1iypKZ7C",
  "key36": "5rfwVFj7XcugwZ1BBRJFa7RJnwu69fRcAEpwoUHzz3GeGfA5mhatmzUprQsXkH1eGzB6Xc9sCYxzSd2Xx1g74oav",
  "key37": "3WvkFCBMqeLaYG2SShKLu7Mz8kBnJGUmsaRDWnV8cobQ5uRZ71Kku3YN8NqT7bdfUuks3KBqnhw9os92yzWyrwGB"
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
