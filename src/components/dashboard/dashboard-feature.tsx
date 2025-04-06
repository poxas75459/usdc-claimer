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
    "3bFPzQ8UVP15KkprFF5GF2h4sobSQP75cTgjGebUTTLVU8ex8e6jCMwYFUNLKbCHpkePV5xsgbwysa3Kmv6kCeQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XG4uKf7w5r5c3VXBycwkPJPS5aWKN7CsqemMAdP2u7dRYKi174nsVxJxtWAehosDc4b2gXQjy6wv5f7TUAMzYWs",
  "key1": "5DAhUTftH9ENJ8aP8LQBWxkkREbA3zVG3csDS3vSKhkYk912wwUnHK769rJSB8vchEPunVgwcwq8EUqJbpscoV8f",
  "key2": "5uQdgXtEoLtLnEEL44MYLBqd5cgnYhkyPmwSqQdUQgtTBhL975eWtrYsg9kKtw4GJiKKk1896uv9WnJXHHMTQmNR",
  "key3": "3djzqgdCeCRBqH3dznCtaQ4mAKPmVvqy7BMeZ94K1oPa4Gt3YtVskSbjFsiSneixCsvxkCwrrHFigoqZfrYtMRNG",
  "key4": "4supM6Uv8tbpLjzf8a8WFQmfGNfpoBzT5DcwkozVmRmQ2dLQ4PGPsK21eBKs3Qa4gqN3rpqGjjAa5R5qHoThRHpU",
  "key5": "3Fy14LnCe4i6PNq8rLTJu3EhPai5MaDJSrNi4zcghCNJMqAbYwZ7qQCd7EDQmB9RCFrC9SbS2Sd9YnxWU8kYc3A6",
  "key6": "5GMGTpMu4FFGXe33VnzZ5Fz583U95eg3DKp7gUNa6S7afjthq14yEmkcobERfMqgSwajbyWFJZ2D3E3ZgKYrKubc",
  "key7": "3jEQH9fLhWq4G9DKaFpJQUgzDg9HRMpbRFiVn36YtQCGjAg33YnQKybaBeYr1XGHwvkEWkRBSHqFzcHemDB7AYkR",
  "key8": "5nV2Fx3EoBtA1KuvbDKuP6aXcoJhwVDkSS4jGdMpoGhiXG7ud86qVTbvsy6A4MXfLPTuGs6DbjZBuy3qNqeJYdwh",
  "key9": "3Rfp44WQKxVbm17yoahnLQ44sq51ZMhuQ2bKPvswFG3TKEuVG8KSuz5mCKWtZ38VdUQyKpskERDM94AfpyXnTjiJ",
  "key10": "2v8Y14JEEXb5M3kurxytzvT5DHFA2faip6HNQV8MjMmig81GHDmXWs2PVUhj5R311YQau9e8iUxT7ijiUrYPdeEs",
  "key11": "3oLXYShmXRvCtWR21RxFu8N3NrPh8iUSJi7o5qspEYMDC3jqxyGJy1ivHGFe6fb5Hthv9Y5qqZBy1UJV8JJX6sv5",
  "key12": "3g1XCRfcWhWJv4386A2JhAZaP8APuZbXP3FPgVeWv7TgN1KoWJHFKfycrbWAbKH8kMXDdzmNCrnQcUK4aKMtTWit",
  "key13": "4z3UTmgA9dLNFQuNeGXk5SiBTEmdnW5EQapBxSepa3VJQjJ4u73wYwiGJBwWeDpwPgMGGDDUJT8JDoSiUKVUt93",
  "key14": "478sQBVUYvjxYY7FPFGAiWCAYKwXkHT6CEuarZF798eqjY4KJbcTjGirBbyDp4KHqXddvpPPHjbR6YL449f5yHKB",
  "key15": "2vdZtHf9jcHPMwfMxr84tHnvBrUFRAvwrp2PiDwyeUdd9gWmopx73to58EckV8D7yxBFdHdQYFCeb35p5oSK48gF",
  "key16": "2U347ramTwvBXCyWb8GxKcDcatLFaasmbH3zrnEPiF1sMkWNXsmwmvHV4GKW45bTbrCLqVCgm19Fi9QyEh9K1ift",
  "key17": "2oH9P9kinvuu8kf9Kt7bGu4eHjUYjnfEUd1ERfw1614gRHc83XAyTJSLib54KPRS9dMTj7bYH1gmBCeV8YpLdpTU",
  "key18": "2Q14peFs9vTgWstf9qSFUsC6fQKwXBtYcuH1epSgsny4C5sPvJ7CujqzhAxo3LwRLA6M87kQPcUQ1nqFNWj7YWHR",
  "key19": "3Ldynum65DsxsU7o87BitsJxSgpLgtgaS3GZcsgiHHB32bq1bhg8FL4T9t3GqSu1iCGaDzZ4GUgENLJUHTdSveJU",
  "key20": "2wtpfpgYrPq5BqEzozdAyQw76AUG63wfLs7RMbMa35KXaKg9tNRuYRjuWrat8rXyCXqzra2QuD44Vc4AmTXsS1Dj",
  "key21": "3XUMN3eHjJKXx2MgoUvoXaHByGUY4izLRkSJf1FBoFPU6ctezyrHHHZQbcECm1Dtjzzq1QT33u2SQ8MxKKXMTsvs",
  "key22": "25Q7YtEWak41iqLTrQvhPAvS7vsu4gZ5TcAvr5wwcxwcRAo8TAS6mBQgLCAARpqXsDVdUaNuUj8hhpeN42RBuNyd",
  "key23": "2YAPd3ZeKNvmEbKwBfAQUPxUtqL8odFuabRdLVsxMCbMAhbADmqwtgx95FrzUWUWd6iAFQvjZS59zKpy2W3SYDFa",
  "key24": "5BD416LmYbZvoyxu56rp4JgU4tkb5ATBysNaZ7XgC2GzkM7bcn27GXdJdm52fNufFVUSmX7WRwQgQJDZvwa6Q1ji"
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
