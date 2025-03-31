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
    "49KUautejNX2wjzvVRunznkZEBtkppCSCbZd9PEcHg4bxT2aJL5rk8JkwWWuTfwHP2LWYH3ju4zx89gfWvX6Q6qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PV2y41BgtSyq1egosqfFBkCqnVZPX9FCeTiKgcZCqCYhcad9M9Uuki3ksLaxhK5eWJoeVNWRL8KR4pgGyjm3G9d",
  "key1": "2zGJmbAAdbQnMkjTpKrUKgvgPd9iggXTw7XTXcNMby5k1NCXKjXZZPEYoQf5UT63Rm8qUTh6q5CAF5gRH6h9yv1K",
  "key2": "3L42dTio9MNvRT9CmywGJzCT6Jhvodff4oftTPbMV6KdNWBVjAHFDojoqG9BjANNpviLptCMxoERQ12rYktdK82E",
  "key3": "2SoCawHk4EoTyn8abZxXYMBFceZNXNfrp3Ufbn8fHwMoeUKYdjfibid4JQ7n8pS36nt476g6DBAdCDejBgPhBYJN",
  "key4": "y2aTw2GR5AytBNMGAuYxieqbxtfn7PzxXmc49feAqZZzHKRExDFwQGBeQXuQh2WEPqXuw4eSb2dHHPcQ9jTkLD9",
  "key5": "4hL4mmkQDMbS4KHr5FKX1exiTn1KV19xTaPrkr7pmNdFgZVcfJB4jWY8bc6tQqTmqbTY7vvM4QBHv4UtanZ9NgUt",
  "key6": "61hAYAyN27c414G1w114ZT7gN6Lzg2ee3oBMFaBZ1XokfWH2sJDfgsjQfX3vdChS59JDBr1LkRvXhSXjhQEZYwQn",
  "key7": "39TTvcJkq1hQmwQxAb2LE2zEFWwDhNGuoWbbUchPqw65cxhxy1v6UMbCNuqyRUdhN2aSuoh3iqgU5zvNKH8ccNyC",
  "key8": "5DXDnEAMaBDi59GB3tYf9bv7QXC6p3znSPv9uEYsN8NP9sYkzfrXjhhzNH3VNE6QGECwDU4dy1SdJs8c2GXSbbJu",
  "key9": "5xnoqFJ4FtpihsYG8r3uD1hZtmwPXtcJLRAsfD2JncVDJWpZbZYw9gvpbfJNiMzLUYi65HKUn6brhXBux4cVBLut",
  "key10": "2uh45xgfUPfiyi6CpSAjfwn8eLnjN358t3vuvtKakCRNh6v4G38M1EGXR9ww4nPESYWYgei5F7Zf3sMB2W8f56WS",
  "key11": "57qerdJ2W6mpqFtBhTcydzLkHYAaN3yC5RmC52XkFXqoXoA4Dwsoz3GjnakPyMGdsAkF33wrviMsdx9eEpE4DbLo",
  "key12": "5QNXuEJzWNW8ycG23vSNMSChTnun9ZKqX1iLr5Vw6MgXuk9Y5rncuqvaiqfjJPNpCmTxEpyYi5LKZwK3a9kkCcJQ",
  "key13": "3ZZnpbTndfknL8tvzSNLqKJzx9L5bV9Wwx8qQto4gQpDo5L2jJtq9rC2LtQ8T1wT9BxjSnjWbVLnS1C3sYUa5xPh",
  "key14": "4x7TeQVC3951eLqTpro38MhbUJQ5ohuGaiMzXv9J4fVXAPTrNqkUyoBjLTNrfa4c3EBpzeaCRuNj1pdJiseFxSWD",
  "key15": "2noFEqMCKHk7JJVg5S4t1k3hY6yG4gdNSBaDUN7N2VDuSbyRKs75SrqaeEf4TfuohLkqvbL4oPNJNHVMeqciTVtx",
  "key16": "uPBYcV5k8ZSwJ7oQoLHR3iJvmQx3haAHpCgpYjVkhd8F5vthqLjdZ7tZ6n4yW9nFW2hmTChm2qrit6tvXALEVuV",
  "key17": "5JsxBNixkaRFSSVmfvVuXd8N3dshGUv9AyihZ81SFV5N37ADPzTPBBneabJo9fCv5LidsZ4fd3FFV9SbsGzdFB7H",
  "key18": "u1d932qEYxHYkLgCg8MSdPkkYp9jW5qnLULp3PJhWmJEpLKeqt8gdAUG1wEQ4Ss9xPR5A6NjzprRfQ6aqx8qeuF",
  "key19": "2Lf1ePiPeV4HvH6AHPocTSJSqxrUmwUaBCe1anuT2gU5B2QsLRtZtvV2KHdvkpzUZ73obH4Wp9XEAP5dQwN11K4a",
  "key20": "3zJKFHk2rppkBV5UqtVLGWCqCt6DceFadB7dTDptHfWnbFEnqK4CHqBWtdt4MuQzE7hrcdbVQbkgwQSkYLKRViGb",
  "key21": "4k7yBTUxnCzME4D8kg4rYS1sF3KXP667pA119C7MF6x3p2Eqm3k5HB3QXEg354xm4TdQQGWZd7irPn7nHErWA2Uo",
  "key22": "4oExtizChqEx7ApZh25s3V6SLfgNEuHpgG4RGbrWtSXaPqzS4yKXfKgL45z6sA2wDvtCXvtbf8AjwA1Rcokx2Xz3",
  "key23": "2VfqCnkv7U24eNdd56RUMJ7qSqNgNKrQFJm8RT9agRvFnQzQZP26kYuUcgQKVAeyjQVuap1XaoypDDG6w3dLnHxt",
  "key24": "2YZDUcuWu4pdgPJju5ggibtDsUAQnnsKWUa8WLs5jAcVPkGSe8rqLhgjnoDFpa9h7J9eato69fYwob948bUnMunJ"
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
