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
    "4wbHncCVM35gvwbKHPZrDSGvcmpMNq6xWMxD1kn4FKwgPWa1X4y3eLjSSWGjQWhzurv1WAoqiUTq1jAStcKfKQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wbWP2gcccoazomZfRT37LNiUg2KchhP1jvWAvowcjp6533A6s8VCXu14HWHXyVzvpPq6BEipN6aXHypW7ZP3NfF",
  "key1": "2jCrxThjiaFrtQ9wBxwyWEPj4u6szmaj9pq8CgT24FbyTrY9jeZUXPxg49NMa3Q1t5X4osUprzUKthQ4NsKXju41",
  "key2": "3U8TCTN6PnzZSqeUtBby3T8Sw15q4cB71bJtThpFFW5p3mExeNsV3SR9PGAdidtWqxit2hQDibVNZz8TZforuspV",
  "key3": "2e5HPeoB6APpPJM5F4zMuCTndKW6S4boRNVT1ZRjw2hwebrXRrmj6RsWKpggD1c8WAaoMbHhabzuvGYT2wtMBx1e",
  "key4": "24L9Pn647n96eKnTBx3BBSo1rgZxX1ZAr2VH68Xq58qgqj2B1VxDJqZzR5kkArB4EGStEa6bfukFMy6W9wqRaA2y",
  "key5": "4MG1y1QzhA5L2KaYZJtf6wtL36p2235DgPzGQwuWerJuvAKUFnLUGW21Dx2ZnwREh4SLg3zoCYMr65QQm8y3hHDJ",
  "key6": "4XURkY831nKu2BEqUhh5XkGj1pJUwKprXrfv7zQZw6oGXWeszX31TUtgq4vHfUZN7zySazvvJqf5W96AmUWQfBHU",
  "key7": "h2P7bqR6XTAimeQtcyHWff2hhZFddQbxwR2WhWmHKHzHkjqwQXtRpo8vt7JtnXcTQWjXMCDS7xu1nYqmLKE6Sp2",
  "key8": "23gPsbRQAcKXYEoMAp3Kd5KaoaRgHgQDfBVhDtijEHhZyqkCcfFmsNZ5pMRpwWjsqqEEvsBd1GEgMB1Bs8anR9CJ",
  "key9": "4GPiXcwV4PE7783WGnfVQfF4G8a48y9FAujPQ1k8sHCsXJBLkjHwzAuBKXuBipum6JV3C43kmoz7zXZqCb1HohVb",
  "key10": "d8fAjNauNThBgLsxghVo9ZM5FrD6oBHmYUFYNLbHbjDEq8Hk5F6EvvK4uzjFDZWouDoWGFk3htqHXQjJtZr8V91",
  "key11": "5CGEpJWknwGuc7FLgRTbLHfGaSDCUYz8tkKYvgoAyvrj9x623xmXSHB9DH6T8d3m3DFyz6pY7CwJxSUyKF7NEoc2",
  "key12": "3uqdhu3YBqkpTS1xnD5qMhCruZhpUqUgxJjebfqWsHNHZa7EVyrWuhbUStSwzgyvkhueAFvYSKqPCYdjQmShCAvH",
  "key13": "4XEAcGFCTvht6phMzZP2W5PymvcdhhWhwCm9DQhuggD8cWdtHf5hXLthvSayziZaHV6kWcmkYGPyrAipCxDFQgLm",
  "key14": "4uf37Tz3RvzBmKkeG3ZtzTMPGNGFa5xZzpE6oRNAB9pMVEaJ9H1gNBJKS9UEDXahM6L4xpnNJ6JTnt2PZQg1MSxV",
  "key15": "35SmbHzj2CcHXN9osnCntrXv4bnAaQmSFCTwpPPorwag1VPaRbWiSjacB5eC4oXtZuJx9c43Dt59iuEbycm3aYRL",
  "key16": "7Zu9gjfmtHxptS34CbJqLAfokxPihHhWnbnKFnq6AR9QXQVojyWHwWYHn3xv7PimveY5roYQC6Q5Yby1XmgdiYL",
  "key17": "5hed5dFSVcK3HqiLDiFYDNSeJQmn3yfkCWhaVTo5fy8pWxF3CKYyWhKSA3XfWVbufxWvxhUYfsPQjL6bVuAZsUcC",
  "key18": "4LMW7CrvTLpyeBzVisyZEua34n9UNmC1JGEYGKu4G4Z93qEwpBjXtBA2uEevbLRBSL9gRj2MLAYnXaLyTKDYuXqb",
  "key19": "2tMekD3tqGHs6aTdcYvm4QMk4a2pw9hWdhPuYzVVJnJHdkLCnWjckbUYFS1P5exz4W6PcXawj94B84oNWMTAtHnP",
  "key20": "4uzpED7shw1nJcSPFj5iJAyhh2QnrWZfb2vP2MfuPKHVr6ACZNVM1FLRL3UXFJL69HDDCNeY1esyMunkwBgUTkAy",
  "key21": "5pkoefXRfyfz1Y4USQZjhkQPRfkDZnSjACpYeX1y31VvKq863xyz5Qvysaen1S2APdYNm29GLtokEpkjXFZKjBNd",
  "key22": "5Cf5DwuW7kmhMt7BPivwomMVEjyZKpa8opV2CSMDMzU2qnRTHViGMEV2YyiHUJ8eaiySxBwfGSjPcr74vE65Wuer",
  "key23": "64vPmzSRuzKEQKPBuozRfe9fCa8JrfQa9ZAcJFiYH9ZbxA5B35qxQV9tPv3c5f71RB8jzAE2c9vTkAppQn8LBw1G",
  "key24": "2F1hNKhtg9SyK98kRzN974cUFQ4Y79yTmcoYYrfxSUSEHoyRrwD4PhgvpcKbs8wtxc4LwCpiaLuZDKmaZz28oz4d"
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
