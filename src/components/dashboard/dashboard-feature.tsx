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
    "4uq5Sn2wuAH4n2L6yZJCvTvZuukuhf2NYGDwZESmmH9yTN5SHrAnaVuRLmq3wKiZBcxUC3yaGcyZ8u3Uxxv5Wo8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Q39XfiWLwg2JaHd94NKz4JArdHqfaWRBunji34FEbshyrkaHifrjZsxuGbyG46rnLjfq8wJczCKRLNmxRd6eYQ",
  "key1": "4uTyjav8XK9KkSXVguVPRpYVFU1DrezgDvDG5v3pZ81dWzYt28m5KHji8ZfYuW2fCycbiCHFVtxviR1PKDaWkVFW",
  "key2": "2E4kq9DwhGmbXa9fhoxxJpDYk2jRmXAso4ygWRYsp2DDmBrMQH7e2kgYoQAGqDeSYQLhygvE24iFQJJEm4MTBCBS",
  "key3": "5crsfxn9xXCGEjLg3FamswSEiQm4H8P3eq97A3hTG98mX9Ksq4oeUzsq38U6td1vD2ZgwAJMivnPJ63mpg8pXRgE",
  "key4": "28oaDbWVpTfnJEn1wWXq5keub7jLkgmzbYDCTtJhXLgvtsUocaKWvo3Y2KvJfx3mv4YXXtEzoK3FAQMpxnUn997y",
  "key5": "Gt5Yrmanm7Di5ouHVZ2GjAUAzyjyd5Nvv8duDGgw2SLoSnDYcF8AmYyF3TnWidHVSkUZbceSYGJhN2WA46g6fye",
  "key6": "464ZPukm17fR8SpbfoJ1aHzcrduzZ2RHkiXEBks72YKoA8j5EW9SKLn1YXqLSaX5Bo5EfRuemPG8h75ozXBGxWqy",
  "key7": "LbWJZjCvknQXqcvrocCbbUHN8h5mTkKfNnLsGv7gm4w3VZERtckS4EjrKYe2hRd3sGpe184CB155TwigvKb8wX1",
  "key8": "EWj4dob5gjTeTAQspZiqya3SFzNtLFkGBA8T8zFb2XEG9S8WTPMnFKgiuRXAYFqLowjdYuzCL27KLhHwdzGye9a",
  "key9": "3w2c1QXxKLGuk7zwBqZWsQT1Kx9oeek75mYCFGdkspefruJHzwvGi6pfLqk45HodzBvcr1LnRf5jLTUEH2hCqJY8",
  "key10": "qRqpUxHQChAGmVuNU3Ar3FpRhiurDfdcRWiMjoKjrMzxRzgyVma9kH526Jzg9uTCiP2tH5bG3rV8cfqVHYSVSQg",
  "key11": "48F5NMzXNdAW6NrUtLjp1mEiLmhC1c6R5cNv4NbR1yvEnum81da44YGMXKx8hjHUinyMf8ZUThXEGQDtkbFqsZog",
  "key12": "434HHGenncU9c431kSf78Uix7oaEodVhfte3aYLjHS9ZTN6TSd1kHFEH2xRDHnr9RZ4sBaMLxG6onV6aohKQDRNc",
  "key13": "2bVRaHdDrEpGcYeCaYVR9jKb7pKQvLius7k8QnembPQyHeGkr3QshkAJRzetfQaSu2AH6Z1CRTxXg6tUB8s5R7Kk",
  "key14": "5HVJLvJapoKKi7avxAz8e8MRtrH7Siw7kanNKrMBfotR5aiA4vQ212GxaTAhew3PQeYDaCL9SotWQhzX7e8uzDKU",
  "key15": "4977VuATXmWMVnPVrj3wPhDaaNpumccmhsKVHWv5Ca2KTy51q2pz7QDwvqMxGE6VkAuuD4wQWHPHxdXwCyRJCRND",
  "key16": "61dKzpEb81SGVUKm2y1hp45cMwq6JktHKjYqBeFyWSmQ1iBNLGe3R7tCJdg8HVAWkikjyg71iGSQFeM651aCyzsv",
  "key17": "4k1pcp8QKT9UwJgHUrFN3pXhXNt82mkaKKRsXUHYVbguCxuW2aLdUmztbUXHebvdEkK2Pt9tLZU25hZb3okj7CsQ",
  "key18": "25QFLE5GUmiTjs6avr5ByoqUwRei5fKE2h83VP8tgpT6zx5JKG1chEGFJsJ4y7pCrTMXAUoNsZHJ4e1pU7jfcANo",
  "key19": "3xrGBdhU8Wv4SUYt5vX5pcZD7AVSbZTXoY8q6DxdSLLAHz6JxtehcSUU9nwzASkNd2RQoLhYzggGMZd7kV3xgCKx",
  "key20": "4YjVKHhrrrABDbRC4tkZCDGMBDCmFErD9bEzEgdU3cKFSnjPwTX94z2DdBPjvhKtyHXT8afpNPpQbY1Upny6JzXn",
  "key21": "2ARfgZE7hGU7EwqGbfJkV5wv2fbA44gPFksXP6aoj2kaxututSoZe8L6rE4L6WjdvBjJqXpFV9e97TMas5y7Xibv",
  "key22": "4n3gJx7hPGAsuzmfLr5asG5DNMNB8AwTWupxCc7ZbKqJSS62SiSd4Hz9A23FNogK9HgNXBo5E4LaornHJoUKtvWx",
  "key23": "59ejEQE6aQbvNAvbrX6o2DFCHQ9Mnc7z9wvNvXdhsFYrrGzJXS3KVVpJzFaBFq9tKxiAcrAEJHt7axytU4c4vSHJ",
  "key24": "5ALEsyymn6Jwo3v8MVqYZzcYekGfd6ZP6wbbzE5dFxdBew9wrjev16WjcaB1RikDCQhBXFwcGUvcEH77oEzPLA8U",
  "key25": "65ubYseEhR5bLqVtbKQ9bn1oPJaCZcVAG3WA2kYgZ4hSEDvKnC6kBrGZddVoQeyafGCEVygfTGyKQS82PsgSaSzs",
  "key26": "67TYiHkVigEeA6hYbRcdvBiHVE2w9h8cC4a4iXkTdSWxgTFZL8qbFmzYwgTMFEsiVRueFJhwtEAiEDA6VVTtW8mc",
  "key27": "5ufxufMAwveD8cZftpsuHRHCMLf9xF9XGf2j5vmq3BDiVbByGsiMyB5YgyKAX7cfHmEb5PB5JSK89RedWrWH2xRD",
  "key28": "52ZdNzErmXpVFA6DukevVY2e4WvFNiDTxi4r9DVEYgKq1wZobDc5vXzdX93qXgXBGMVHCquwt1vRMAj1o8gbSzEL",
  "key29": "CFq3EPG1EzUU4fSJy8oDt5kFkBS8PkNmyiT8o44J49zgGxsS7dcTinWTJBZpypNkDbRHtB9bAuwGewUfjas6dwN"
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
