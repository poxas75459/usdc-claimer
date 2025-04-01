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
    "5puqw1wjz2ijwur2mRfWwFv5VDYaxFKy1Q6gSJbwvJwgfha4iS5kMFDhrQxMB1WjpDdG2FdbCbZKVzjtf7gYY4p4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5macBPfWYocyzLYQw5t8JP8nE2c6K1pdY4DqwufLtiPg5AqhCL1NXmiBEAkdrqxmfskPS9QZcrHWXmxk2jwqeCTa",
  "key1": "2P88KLEM7c55JYGnBcn6m2gWwJk1HaEExNqM1pYMexzV1gkuPi52xspGqrenXxwN98NQgwoq7As2Wn55eP6omgnV",
  "key2": "2utmgNEGkV5hBgf4wdchPRTLM2v4goerTMMj4LJSoq2SnZB9qLisda44mdxcyCPW7WcvtBXbPmHhLtjpgyjY7tdq",
  "key3": "mgJz4PQhnA11sg1PsS1mABpi4AT7K1G3TZSFpbyaasSZt1jPzDwCXnRHvkipoZLnLtSMBokKTdeVxzvE6CgvJVk",
  "key4": "2t5cgqSDL7aQ1znV8UUtVuRxqYvLPEr5D2soo2gLCPxueUQx2DoXxRZryFKAuPDKoWy6gV2TAzzodBsM9RFzvYLT",
  "key5": "4zSoq6mQP5SMnw3s96ednqpCHBuZHPEYVWiLi9PCQ4QWxeq1Do24pP7kjztRRtthKfhoKH9B5pNcpLuMMLV6MzzY",
  "key6": "5iuUq9Myrfq53RavRotbZUMqj58A4fBEDqHjM5a58aZfJ2i7UckrG24VGHWFDMPoTfu453ZxgpmaTMEVmqB2zuyF",
  "key7": "g5JryqGakLdoZUVCe8JmfbchrzYaCxkaUwr6taoiDMBq1p8TjD4Z2F9jUXG6ak2FvJNiYm1bWYXNzB1wmz69saR",
  "key8": "3NhtH9JjSsM5TMrBiYzMXMtTHknLVcmLTyfKiuroDCawhPrA8dSGqsTELZdhS712Pmb7KNqMPrCJWuSYVMcEhwtk",
  "key9": "5C2q8imy7AxE7JaTq3RkAT1BmzBiYyS1zLGPnyAnn37r7B4mAy6xrpPnFSYxqpi2CjLq4RXbuh7no1mWbhK1sdy3",
  "key10": "63pEDkG6ZcasXHZkAYiGjHSEuQfbrGxBDr8WQZrmLQbypNeLSuGsETyn8jUeQP833Gikxde8TFza1g5pHc9AQ6Tr",
  "key11": "2vpq6bKRkRVG5meCbDHUxfrQA2GjRc7pjTFhZotNa3cTnQiGnDomtU862dAttLJsAJbPdDeLYnm8zsCr77V2MrtP",
  "key12": "2Zk6d2tCk3vrYWgiMe9Fem6ddoFfYjdgrbiNKdK7yczbAQrtXDKy3HNymqAz5zL3ZjXKQLTUbWhvDWjqrwLwh3w5",
  "key13": "6538ounKBAkdzgojd9rNHCmVmG3dXsBdyEEEiLew4Tg6ycVhz7MjVxHQg5qfFTWkH5hXXP3P7sw5MXHHPUoovD3C",
  "key14": "2kwgsdTneKq3moVpyF84pTsiG5bJQYpspUP3hw9dUeA6T9LNZDLYgaxNh9ueCVue94Zkc3GDWsU1SMUDWXd1ymim",
  "key15": "5XEZP24KRzFjLn6uDrfTyoJ4jCs2H3atX3uV18T3dFdh72aJ7zrPvcGTECw9tN7SzNS48BHAV4SRvpJtxJiqNhTV",
  "key16": "2Rg5tKYRm45KMuUgAnkUmvvzoKgXYQyuUkhx8F9m2sARiWR1dLKdfQaBqKsT4aoUPvYuJoXPbjgske7XTmEWoccP",
  "key17": "459j17aPFefeauxGS4mK5tm7CQkrWe6pqMipX53ibfBrLacNE7dU5SwXMUt8Zk3uiBSnExtU45vtYfMEFG6vbrjK",
  "key18": "HUCTQ55R3f7TuexdwWfFSXY8dwWjrqMVxjoNEpYukCHeZEqyELgk46hkuE5M439hab4skz7uQzycvQ8HtuQgAUf",
  "key19": "2yNtM7ij7ihjZR3SzXWPk4khCh2u5NGRcZ9eEwYVVLFVWtTKvEhX69CVXEgjsPtQLsyXgJkh5aFbMubx4phbxRdp",
  "key20": "2sSet5yPGq488JmWtCxnpWL8Z1KT9bYDVYfq5iDCHbmdaA5GCoTUw2P8m9KAQ2eKeU2vJzy3BA6bN8p9xVnQNx1U",
  "key21": "5GygUuZpY6beGa2QFu5Go47926MxE5MD2FZm393wXoKYEw9HdcsG3m7daSwCH2XkLfUi3triz7LGcSFR5MFF4UEQ",
  "key22": "JL1mSXpxBfbsbEnH4gJSHQx31imsuTkU3ALM41t4NyaE6dRn2cJrZD2kZK93YobgV1Firn3M3dk18Ko4LcbuyBs",
  "key23": "L6uBXzHP92MTLAo8peHP9rw4mKTkH44GyB7N51CEWgNk6LKjBikyvYBC5egrnrfhuCqGAUZJfBRKvkyyr5Z3mkD",
  "key24": "5FeQex8mpeKiEBvMxgk1JZucBz1rVr72mgRfyWfJZwkHjafhmqHi2SRjGT9v7oemVmNQ2ZLb5krfbmXqttV1A3EK",
  "key25": "4jwqdAuWVnw7oF5VthAwAkNETPy5H3cJ4CVSnBLutQfQHbNxR8kCcEQgTbdG6TLbcHKDn5kX6yfv6HWYJYXy7xXm",
  "key26": "2JDjU3vGdXRoRpPDDqAmP9x9BKF1QYeGvPnCHkEcjD5J8jvRWU9rj4K8LsKHNKfxxPtw2tBNhtMF8rMMVafqohTk",
  "key27": "4MXK7vodfcd4wuhnHGYorB6WzV3srSnDpXBhoVkQPM6dkXXrNyQBZj4vAdpJuzh5brQvXZjRJjJvb425SLBuAEXT",
  "key28": "5vssNvDUWQbNVp3B6MZjKMA68pigZ3thz6BUvnpPCiVNCNzADS9BCGaPJ8uL3F9RFk4vou9ZV1CG2cp5wBwpbxz4",
  "key29": "2JPmYDP3YihHMx9ECH7WQoxSVhKBu2XvTtQjfXxnPJgvLztoXSuM9T3af4cwBFBphGvSyTYXErKj5zbLLo3cN5h",
  "key30": "327KSkshDGSVoEwCiSjSzPTD5N4vnMRoSsS6UVBAYoWGHBuV8zx4FkGkwCqkLg9Nuzpu5K3VVmPWv56Cr4Xnz7Da",
  "key31": "s24Uph5ocPCKUGE1QCJBw3pUNZqNjjnzovWtNsqPzAiaH6Q6PW7GogvBDyQfKqYPDJ3HjxZcQYsGbCumYo1o9NH",
  "key32": "ricoTux1w4MvCt5oWWanYPSCXbUBepBLWTEnCWZeu3m7B4SwRWgYXUsDzeCZxjEa4zUo4GyaiXhKe47GjxFhQsc"
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
