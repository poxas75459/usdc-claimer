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
    "5JQD548fMQaqBUDqSUPEaVipoEUQuTskE3aX4wHU9XpK9nwG43UzXbMRJbGb5C5PudKjFiPCAe8kHjifdjHaLWk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yEzM6DJ44xA9fL7vogipB632Hn1tgGUqjp8umvnr23iNh7jxP99B5oKFpA9JfKbmbUu9LGNjh9CinJhKskWr7S2",
  "key1": "5Xng5uDY4bDPg3wniJMBB2mVzjFTUtvs8QjBZUbwXfkio5sEX8p7jTnNavH8qLZyyigemwFaYe5r7do8yhs4922Y",
  "key2": "KbaZ1F5Xj9jpqogN1nXTxyUjXNnN9U9JjNmrmvaAsWG3ier5Jq3nFNEYtaAumLfUqouABxZSHEHGjjUhEcC9La6",
  "key3": "7rMxDGwvk419d48rpWF1ftbmCjrDvoSL91rTYugxsVSwG13RvZkUE27UQp7fzqekXwRFctPNxWC4ESUoQWCQTE2",
  "key4": "5bK9hAMduQ7fTu1bEvLkKsEJ29ULjdwvLKSgy3NX9JcW12fNwiVWn5zngbQ8Wi7Kpey7d5wWreyAvMa5vwFjY93J",
  "key5": "4dL9nyBy4ccEEL8uyBqRrtFvifnq5wXwuFxxjFvtDyrcYvHcAVZAn7cvjc3yjP3dgPwFMiFwKw5Z7A5MEEpBHhoN",
  "key6": "2oxCjUAPDHcksK64wNXrTtVK9zPYFAnPZeGBHuzV17TQeiuJLXQLYgSrmfCXSqy1KU71bxfBrAT4xUbHtEB6McFA",
  "key7": "5N9FXCAGBz5UXRhbTwbgU5ufKmF8byLkX5WV66uqpL3Yo1ybx186Ju3FJHVCovFFivkWccS58FJL8b8MJiuo9XVo",
  "key8": "inEyDC3sNLjWQUXwS9MyQoptfU7oJpdb1DCapqayzRZgKFQCCQcxQsxHFia93H2vSr2X3HLQpw3xNm35bJDUWie",
  "key9": "66J19ECfe25R5pc3EbXr9mKmDUtiyaJ9hRdvEk4rcUBg2xYN1Q8MWbQBJ9Sj4uWXNUMTwKxe7K1DCbdSNZPHrptZ",
  "key10": "34mJV3SsNFT9w1YeaDZaX48vtosY4gsnZq4pTGSHPUC3wZWaQsGADZugxnknB3ogcFA7NRgfa99ZYYaQSJpwqrqW",
  "key11": "3W3q2JwNPJBQiszSbtyRwDZFhc8iFsywnAFdsE94DSGKSXc1tGmFCUBpDfRwVj5YfJw5DKNENQZsTpfPdF3SnkYx",
  "key12": "RYNDJmB7e5RGRx3riWUgVaQ59Je11K8Gf4QFwr5h49NwbwDvw3DkKT5d33ZumV4jxPH1N7SoXmnVq47oFqrnHpW",
  "key13": "T7o6mp4oTk3Kb1m4KvESJdEFmKLdiXZxFZnGDFdFfq3MHfKewsMuuATcjptK23q19VJkHJMad5e2uESRvr1ADmn",
  "key14": "5eursRu7FQBdoXa4ptRyEbUSEmRVDzcEDMwseW7saKc776gxTw9eL17BaPruJMMZSQcLR224Qde6ESqa2PKf58KG",
  "key15": "7CvihzrnkzK7fCh5D5y522FJeN3XUVgtxcoWrg6mgTUFjLxaPhFAb5Lw4wgxTn6mmMSdqBLwTYs4s35W9tPFi51",
  "key16": "55kcNQFczickj4z6qm1QTBamM5WpUi3hZVP4Zpv6xSqRjMUfWviMEjg9wijppfkSNNHMedfPXVxR2b1g4GfSPDKJ",
  "key17": "NdcFd3kt7a8jK1NNbUmWQc8buuqmJLCPXmcKbbyxrjgL8nUZgaYf3fsdt2maFvaLMHvsXUKdj56UsWYCyjWRydh",
  "key18": "3qeig2QfWYKswk9fxzAJiQncTxVoNtm2rSQhTr92azbjK6NimBBvy8w8taiMsjNqVQXnvpYP7B2WTM6gh52CGwGn",
  "key19": "4Yodaw8Qu4XtaFwXU5m12vMUNY6ZzvcJv8qrwyZxYi5nfvEYF3uzQuHS2XckAiy6HXpZMYgcKdVvB9XTTD5hhfD7",
  "key20": "3ez65qATawGZYnYWSt3wjD15NXcx3CWyH31xZvqFrfUWiJaL1vq6Ko4J4KmycnYcMGB3wgYguRESjaegA9FqsNSc",
  "key21": "zoqV98wwQUuttHyh5i1fMkQzRJXCwdttCvuWAWyZutyg8W6U5CDvv99MgbTK4KykwpMY7TSFWT92SCcQmUSHJ9x",
  "key22": "jUaA95FMBX9GNHxWVB3a2Q8pXQUAM9XvvJMKFqJ7TDEJSYK4Y5zCKq58n7W4Aii1m9rmkAYmhQjE1AAkANgiiFb",
  "key23": "4y3GUBL7nrkPwWPeKiKxbh4kNFygwk3nAfZy6pxgdt5icGhNbmdQzkkd3VNvEy88zmukgpwShJQNhXDLofwEpfvu",
  "key24": "1suHGRPS5q2C4iBz69qkJhv2ihsxD9kvhVSWxReuLNJL1WqKKYCMfDNr2zk6KwCjesh4JQd6tm7BSF9idKkL3z8",
  "key25": "3SLhLovqFiQ5F7UgrBLVbp72oLtJPPiQboTbXAxZqwHPgtdSxz7WXxnKitLve2HfK73pamYfotcT39VwbctVoft8",
  "key26": "5vwCy6674XMqikw5TDghDxDgccYpd37crzQZTqPbQd8AAEyPrpJHM8TnTHhE8U7BYo7RKUr5umWU2EW5yUkemkQA",
  "key27": "LFiTtin8Yn35V6hJqUd7suBp8ijp5oFpmnGnjRajrmCT6HYXcKQyCC9iU6BY9Q8mTfSzFzACw51EU7mpKbTnCbW",
  "key28": "39G7Apvp4TaPdHX9xjX7b2csWhpbwe7MvHDa1FWJTgZzf3Vnw2AFoBoj9Ef6h2cxGyLiB82ymbqjhhKebtHF85Rq",
  "key29": "4BZtYJ374qoT7KZ4eP3utJLsgPAzNja72fd7AJsytpatYMHHejaHPaNqg6NLy3St2JE62Y3sZn7sVmPXWxRNCUWE",
  "key30": "3frCnF9sNgVq6FsvprKa4JkHEC9j5ZxbtNXTprqMnRhCBF9nD1zXx2ZxPGCTBZtL5v3SapAVPPYzeoKTtz2BeyvF",
  "key31": "4hv56QA7caSK8YhBZ2PB7szw4gENxaUZxLVJyNdMwkeXfMCXeSwNnpEABSYKsjftVdxE31jSWRfjif6HWqecz2RF",
  "key32": "2Qg9EiqWcoSr7mZBF7zD1ceKXgRY4Lb5q2RKhATzqPdAaewSvkf6SZNLTdkHLEwz5YGzqQDKL8LcsPAk2JSsk1S8",
  "key33": "4w1VRAcuivbiwxBeAFCR2V1Z4w9J9F7uNNXZCeZ99VB1tJskQzhFqFkWE6NB7Y47rWq8rS4hfajsFz3E8QDXCT6P"
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
