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
    "2jGFnkNWDBcJB8q8TYNQoU5Yn6QLuVFydJbNmzoBMymTwweCg8LMjkGMTmsZwDEkThHwSqKZrMTpPtgeK7hiW8xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UiDd5AVi9oqpXt6pe5usPaw8kTeeBjQQrgUgjJi4QtrdJ6zJgVx1RW1CZmHLPTtjfijqZFkXLyRF9jriLBvH6zV",
  "key1": "4K99WSaR49ZHrenBSdcjcghGcLAiJa26tDEGJdVk9WFkGMv6AsDLknEU5VbAYJh9Q41dvbXy5x9sNyeFbiocBSQJ",
  "key2": "4dro7mWRRP9UZH6aZqzMS54715XST8zWYLaJpeyZzJyWxBan4H7NaD5Sw1BcTnPiVQiUYpPL9jYULxbQBNFikTxW",
  "key3": "3EStAWLSBe6yxqcZEaksra685AQ2BpBpZppuam87gci3Jo6pF2Ko3GrThPJov2pgQB2VQvYipH9cDAoLbxP11f6b",
  "key4": "2y2GTsfmdTYxVHFgjGQafwMRrAXFoswM7fA66v5m9PHtEQGutfwRxaGMuKPzeruPW3wWaXhD21Pg9CDpVk8YVqtm",
  "key5": "2yUNyB1s7bSSybyaMqRkSVbW63USewFQzmyWpifXdv9TfUJoXdsrGhrB75LPHdyYF7qkNkdkXqSg4iF1mwpjo5Uy",
  "key6": "PytcE4otJbE9qfpwcQg8rwnVMMCXUCBD2ZjovmLJBwjFE8fi4juF1sbpqZcXB89dHA4mXB6vdBtP2JVqK1w7FjQ",
  "key7": "5RcdaY9bC55DD67hiyVyzfNEZR955VAuYmDQom93EXnwi17HB9i47jjpL2xPeNgSTtszS7hZSWaSt6NYa1qMqF4b",
  "key8": "5wKZRboTx1Yh5ymG8eMvnmjvyL4SNgvJcAWUP74xyTWLGDS32qv1qUoFrEUSPhKmWXYM5Zco926rad6MihjnEA1V",
  "key9": "2kBZEusd6CQ2NP1aKVb9d9R6Gjw5RQ3nepZEycB1n99FczC3mW4XPxqTuiLi7DsR92YoVtEUpF66NAwz2U1tdZKb",
  "key10": "4r4B69Exw245ybUxztQBptXLqLJdczx9iKXCXMoTi49dhDuSoerFE1C7HZ3yPEkStpEPJU2Rvxda9VbK9R5PivDQ",
  "key11": "xYuqanWJbtjVa5At9xhepUSegWyq8gTWtzoxmPCS1AuMd433h7bfauAjyLsCPcr4qVK6fSH1NxY1C1bsMTt3nB3",
  "key12": "hhxotyTybEwJcHCLSNnpNSQGqoQka2RT2G5mWKpvBK6ZwyS9JGLdpTXY3PbGbsLWseDunxSYuc7EorxFu5UkCau",
  "key13": "3VunCvF5BZ2hy7g644vGHUMGZhBvrDgukJ1F4AcyvBThPGUCjNiPH9EFWABMK14eFRxRoDYWYGscP9GGNgoJSu4K",
  "key14": "5vSUZ6K3Dgxt3NpnoA8XdjJnLcPGiTDrq7tADWeKqNABiNUkSe16a2ZhssopoufyNmSAHht1SZosdyUsUjpJbRxV",
  "key15": "5orbWxzJbQf4EeqKBmxUba4gMMSpEqvfDVRf47USgY1rnpcokSiSs9h1S6DmCy3eEDSAGFomfo25n4Exj5zVRDoo",
  "key16": "4PaTCCPWpzoQU6T7dWBrUbfrTmJcBCyz8gym4mXz27cmsc51YnMvRGAvNFBxnAes3iNBXLiAh2Hz9hSxM2LgnqPJ",
  "key17": "5zdeMDF3538TxtN4ogApmJyrePJdZUbVtxeNYSSVhj8teHCaL7jYD8ykSVNzqHGwos1S3tcHeCWjm68HzA9xywWM",
  "key18": "3DihFDH2QUJKArb85jDMiioc9SrciapLPrPUbJ81deQjqfUvpBmRS1Gni5ECfsjD6YLZW64sWvd95dBw3VXRbUVC",
  "key19": "hANVe8h8FeNoM9MX9kq1bmmg2dWjfr7SNzqvnjXKzaE4kPQWAsadXpHvqyMvVqFRupX7vSydz46diqVJC14NgHn",
  "key20": "2UbTScAJkaQxcx41hyzWJLMnnpzihMYNk6kZ5sU2ynQUmN2K4AJcWD5mpa4pNk4ZiguZxkcDjLf2JcPxVW37aHeA",
  "key21": "4knGwqnxiwRS4Y7SY2M6p8hLHwHCqaY7uJvqkgJwbj7nmPdTJGucnx8DgbKw8YHmWRfPgUAL8Sa7dzrv2mSKrLaN",
  "key22": "4bnmthr38EG7imSdVCS8kQA3GJdpoyzLuRycMt1o8GeqzB3u7b5jQNViYjEVGuCRjNqhyvvocPSR65HaxjpiXH2G",
  "key23": "4RpNcvwvUZqV6Za1ZB6tZuonnibvYu6KapbGzygtoc3TK9yrTU9iwMFQW9c7SbTEm3CxpS2pspKK4mqaBAGeY8fn",
  "key24": "5KNPtWxzLuKBeB9tkZgtx4fT7a7FRCM1pT2sQCfVU7csyRsoh1yU3fwmGSD47Yn1x4R9EJNEDfXKW9NRnuupLi2d",
  "key25": "2p3zeCYZo31zUJfbtUksNwvVwLWKJf3n8YC9bxPfhHEf2BcEiS8YuVC1tq1EeFWUzQ6mQ9TxpoJF396SF8rXNxk9",
  "key26": "3Yjyk7RvHvTVRto1jceXLmKTDd7Ho1gyafPbtV6jTrPysUNNqtQM58mXsDzQtsHRn2X75G1D2dGbLU19aKPiy3jG",
  "key27": "4sYykS8TokJZnjEYogAmPsHzKf6WGPxiPLA3qi8WqqKYu1XU46RBviUGmAnitgF9K6Cmb32cKRqyZ5qtq8RSt2iL",
  "key28": "4hW1XDESvpfh5K5U28hFJZB83epdLgBkYgVVjQnvxsU1rYnarRtoJMvM25htdwvtGr34r7KzN6QNm1kyKB1m9oV9",
  "key29": "4QHrvfSUvgVLwtqHCH1Abec3s72Hnxjxje7t9B62A1HfKtwQoETrCfQ7v2dPSBwEmhgcMHuKH3whQRgzEwnA1FZY",
  "key30": "5vTAGY4opHtRChCatS2LDtjS4AtcKXQfpwt8RfndmEMzHtPNqyW3YposNaxjcwfSLNMVGCNPYcpmog7964ttyzew",
  "key31": "4kUaenKd7wsiJLHRwtZw2z9u44YW5LN6hmBs8v3gGtgTN4UpgbmPXK7okVEwtWKpfLaBqZBFFpdeCZJRaMtayyNo",
  "key32": "63nVTmm5chmsheBFECFA6MT5m4ZyV1cMZXhGyJXT3CJyRkWSR9HZ1QQUCXFbpyFwjMifVL2kT9avsM5foSbgBeRH",
  "key33": "2ttJ7h9EGEBy2mMX3Y9wuf8h9L5WhKS7j3xA3raNZkLFEYF8y53bubnkwYEDnVdw58rdLEDCCgWeod8zeLT7sVFy",
  "key34": "ALcqmstU9uiQthA9oaq92dWH9w4A7SzDWrgLrkaJv1hqMpXnh7sPWgWbwtWq63KABAvxg4yGU6LKYUch8Jfqb7j",
  "key35": "MhBWGw5avWA3tSbVnPADi1nJoztfTQCBKNMWfZXBcAtpP185xa79oQ6KvCDU1PHL3ujWhQ8EZiki1bsRJHDA95T",
  "key36": "L1ii9GmCAioq6fX9yZCL8hpFUoLakz2AmNMeKksch4zvyDWQQmWNtLxKNWZzsQjNfjspDJbgPmtbf3nvjNr5Btb"
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
