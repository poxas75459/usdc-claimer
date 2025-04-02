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
    "2KXJYrVXNcQUXgZ4yCYF8qaQPgy4xieRfvDYzEQCdB9nxRU8kBo3rcwmnsLUHdF4GzRRBmdYf3hGjdqUXwB54Z84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nWQjVPqYmZABYj2B6C8Pi9GGCJFJ59fD7dvb2iQ8fWao8yhisH15Uybd7bqfsYFN9kF7y6RafbAvYgJtnTSoAxK",
  "key1": "T4TeCYvU7XFBfJYvwLC66TyNmSLvUVzNxgTwXe63zicXBwBATJ5UtxxshHTeED7B56hyNvD2pAemLZQuCkFkd5P",
  "key2": "XxbnaNW8JjYhwBU6BscCWyioLEa5Ab3gxfdhqzZfqUiC4zBcHTShTqcRTmjAu9r2KMBSCUCZs8eSRztFsbrJCeP",
  "key3": "53xCREGFg76fRKY5kVG6kPHxCetFy8SnDQjeJY36ttaN1S5cCSsa3f2CvUpfoyNcwVDJt1BwhQ3x2PZyV1jpKf6g",
  "key4": "4ZHNtrapHhdqB8e29rtrosvYhGjx2gvADYtnsUx8DRwaUZf6zmrJQGFeUN1hHGnUQnADNsfbUWPjeDwSczbsT8Pf",
  "key5": "2smSBHLFoR6W445VDMkg7fJ1NYNBRUFgvrq3cCrXkPZ5KEqdcNhA4vpQsTb6ZqZaiuLj1g1yz8xmjqwGpAjwSBAH",
  "key6": "3KvNU95asYVEfjToT3Fu4u7pR7uNb3V9hDbjdhnTK6GJf7EpzneXCDWpvcUVYgv8TdQ754bn9icapgpteUbiaimg",
  "key7": "3Qzj6V6Cy9kp82cbQ6v5iH1oUJ4D348fcTCBG329JoHHBWLQMxtXwWBNySiD84uDnGFHVfVzqkBy5nicsDjfTFZs",
  "key8": "5wKc8Dtd5iHkn3PqfBxiBquSSvsSHQELzzqHTWYCBGjSmTCTXsNcTLtYXbh5fF8k6stQFDxNXV2axPmG3Mgiq9cj",
  "key9": "59zcfKdB27DMiag9JCbXW9Ex5XtNHYXqUNmreZv2MGYn5p93MVepH8VBgCVaNvjmpfCrtvdoKp5EbenXJ77L9oRz",
  "key10": "monxSfCMnuc7bDLCHqscJUtfZxH8CNuJM33w2aDJ5F4UWWgfr1sNj7uonsJ6LHrWMxNhrzcUtePQJiwy4pfy7Yy",
  "key11": "2hpKqfsHiMAGaG1EAsWuUy7b2vmgVmbinh3bYy2fYSohAF3T3KwVbGJDcthBMZ9FW5pbydBGoZUR1XSNWdtTraKd",
  "key12": "54cXKWaxBHB9iPh8Ec8oVBq1KW4Ms8MwfUXkHKcLwamB9bAky4AJN3XAvrW8Zgo8qC845XvgG82MEYovuWTBfE62",
  "key13": "3dRtrw1kUWp8Nhjo274ekbHEgkzoYrnceMPHCym44sY8FD2A3pVAMFd6tovnsGWWgJFv57PkSvaBYmRkHRqm8ZdA",
  "key14": "5PqYssp7EgdUtUcRgKqVHsMZAKQreTp1Jg2E9fHpsof5qXr1Jc9zVU2DYrrsjVf3gYHk1Qvv1kq2aE7Sin5vYHTE",
  "key15": "2uVQteQbEfS1XYS7Y7GiZ8D3HW9mr4kP9cmK5gsPRbx5crR5ndQjDMcKFhy8ABJMk26wRGCsxy5mzoQt3v8azDWq",
  "key16": "3QeyV24qYP31RSD5wChbuUFR3EqL9EyZ11FbLy5VzXdqxaEWgroSPmcPG4L1oBtLKSfQFAfPSoRs4Fd1ZeWwSCCc",
  "key17": "rFJXyaT9yETWopmUmkncFaA9DjNeh7WxgPMtrdCuj9yWW9esNSR6wdbrdhnPiTkYaquEmJRtAy2j4RahwgGkVk5",
  "key18": "4aCPQk8t6xPNqjjPNDVJz6sWSrtHJv8jeoDd5ry7Jxi6pv7WMswCbZykhYBHZxgWZ45SMDPYT8ejzDnVL9buTcd6",
  "key19": "4CR6qw8oUhigpkapFYZwmPqGGYa2iXNQUadp1GB5ypu3NkHkJQ8zwAgnKRh4RkXpdh54eNYDr76ypvHLujQHMzuf",
  "key20": "4hfJv4P3fViaFbcazAAbVfYkZy6bwJZo5Zp1EDKr6BPHU9mzCvwnJTVVvve5YQi52VHxuHY8aqsmXvoz9etiwgYx",
  "key21": "5eUjgNAHkPoVF4BgB33Ce52kV3vaRgpJg6F7E2S6f8pLqA7cAhzFr9zLBVUdwUxZgDoAdJ9SuDZQe4L1HTKxhNoS",
  "key22": "62HonzjHtne9mp5Ktg5dQhgSftn3QJ3G9EfCtNXRuBRPNgWehud9WmSDHY5Pv5AqCruGd8mGs1dotnmEJWBfWQvm",
  "key23": "2zGiVFcXeDLbx57NFu3Gi1NJ7Y9KzWFkBLX9gijEZkcdqJK1h8pnc3WavX3DmQ7FfN5SL6X93d8Mqw8khMqVkdYm",
  "key24": "3bCfqnpw9C9sT3LVDXi6HRtLMUK29VNkvbyuL9uTSWjdqparpbCS81CXq29L9zY1EfzvEFAC1rb25tkMrUbEauJz",
  "key25": "5nLZQdrwWVFcs8Uu5Gg643DuMfzEsZwDFpTEctt2XxQQL3Yi29JXTsHJnxTCz28FoX7kvBU67Wf6hCj2xxq9Pauo",
  "key26": "v5digvqTqBSafqmBKjRnfP9e7AWgQER2osrQCrenB5ddWMG6xXVWTRv3b7hVZun6NR8LVZ72K16GYmePaUqrFSS",
  "key27": "JQkxH6Mnirm59wWK7A3CDv5RH6rYpxvxTHxqZUjVWsg6eHmyXPDXP697oEiXQP3hfw4SadmJEj54NxgExFbL3dU",
  "key28": "82NjpnHmcUFcm2cEtRxdzbR3yw4dTuJKEJvC2VPTKuDhrWsds9rigRcVjgUoC5mNYbPHGStgbtpCaYsT1QsShqr",
  "key29": "32PPcwTdTVLNqvGk3eTxtAFjX2EXe7NAvMijToJ4XyoxMVhnLRrgHTn5DPWRFbyEvdqr6PgMYRUmbL1CJDPqvySw",
  "key30": "RgrQujhAozY9r2W6TVw23CrY3azcQBMKhKWsgLktxNV9ZD5VhoEmPcSgGjR9GYAzTHZDP27qnnenWSZDehNq28U",
  "key31": "49mzvEGsg5R9CZTt5p7rMNRrgR8LGXXFBdH85nhXVM9kkQcMndPRY2CorSnhCqoovMunzonoz275hR2qREgMdbTD",
  "key32": "2jZvKfWhBzcTVdPGnWLJ8QSZjPdEYNAftP4N2ksRm4itie9Q2QKMZtKuKL2obQSEtzJQgsV6Sj6hrGMzHVixDCKW",
  "key33": "2fVSKsJw6Hy8RPip32ZrkEx4BbcgpEqVRRUx9hcrq8pzXfAmf8QQvcYLZ4NoTaATsh8t1ntNE8gKxwKgKHUMYopu",
  "key34": "AwkkkskHhsMYQQ1fqQvFCuymoCYdJTbJd8jB68WEoyNbAHzvxDz9W7ptVDxeZgVRLeLeGj9fYg7xNV2C2ktz1aZ",
  "key35": "4AAkA9gQXn2tZuBbyj4yTcQqvvKnkQCwJBNTsMjEdLNfgjhqBs11du3pgHpGdDTk5mFo2DLD8gmmHZmpFTrfkCsn",
  "key36": "3xdXBiFdm3e6bHZLf9XmQoCXjTqipHbfeekDPxa8HYobxGXMLd37aCvpUwPZsDX5HzuvGPgts2bmE85ebH4pAuMc",
  "key37": "2q85N84UtjKWBTTryReczYTDCTNwoBDhXz95mwDLGjxGWy3dqtgQQbQJhJqtXmLxcAZkhPqCUrFnEG9cNXnny2pL",
  "key38": "3NZzjenM5QXCy4bsojYGyfXtDnkgcxsvfuhQnBKpcTNGop1prGrPuo4RGVwkWj5K7UYP4tzki9xHHZVsohytXE8i"
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
