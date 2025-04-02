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
    "2uMjj3uaNd3xW6u72HNSEfaU2d8DNo58ah5DLWGCYkz2G2tR6YNmoqGFhy9yAWPqU4YyJRTCH2gPL9XfvcvBku1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9mrYypyzTG5bP4XKFn5TJV5g51JEACNFAiz9V5ksDTvmDUYQDoPuVGHuzCqGzFMghNUYHJ9PHcTkjJyJBX8rw6",
  "key1": "5GgnzZaBM3AH6H4bQYCdguow2sW6ELB6wjvCkXv61fNCnqs9uRtKoeALBQ4D4FSpsvxM5TeTTc3MCaLaDfXXEyCH",
  "key2": "36WpfdDAU2QPNQwmakeL7u2A9kTeyJbevjeZ5H4yQ1cy3n1cLNR8ydHaiw8cNaBV33ahhSAdp2Hsh1QVqLYP7oDG",
  "key3": "CWRsJY8BKScTsgFhYdVEWsJAr953wu2JoqbKQKpxptVZZ5bnJ2FAuh74bNyXPAYXoKvT7Hz8PNxcgW97TXN8wGg",
  "key4": "4rue5UP325J3B2rxjikAwVJtUhiQx7iae22yRkzpGjTPJRcJ1N4168CwEy9ZWiPA66utv35tPrAHZPq8simLdoVv",
  "key5": "qtwFoB1A47YzAzYcyLPLi1bKfjz9ZtwveExi8nWSc7qHWfoAKvcMCkU7TxGDzPCgt6SezHZ3BoNwzgRv7vpaySx",
  "key6": "2zKz38ASeuqKQZTxz78qVDaqcUSD87BUxX55YqTYAD5MCp8iCvT5pELkWeunx36J64fxPC3fAmdfKPsrdu7MTGc9",
  "key7": "2p7YEk3YFz61TMfdFqKLwgcnXXaKmh2G8KyfXKS3qHvc5FjZVerMKoTxvgUNXvEB1ePW9CUKLLTBdVxp2xvKuikA",
  "key8": "219K1Cso6Z1kf2N5p171qBxb1t9SKVTstsCn35kYdtcjvD1JgfNHMbP5Wxk53sVnqFhKnfr8xWsLgaQoDwyuvwHg",
  "key9": "K2A17Fn9pFL7N6jBXquHUzBEHdXHYD2jDenJdqdFSZc6A1GczZutgq2bT4BZF92XdfxyYro3s4paHLZLBjydLGv",
  "key10": "5rRuqt48LTNN1XjipDayjc3aTNpWZpQbJxvHSocUEGsBnYpRMJJCo7zq8TSmEjc9zvpEEv2VLW5Gp5BG5xQRfVVJ",
  "key11": "4jHa5orzhnHs1b8A245rNeTucWiU5XzN6edrCdrPp9S3Y6o9AJfSnS6CFGMikCTGDdo9qxvUJSZkD6S57bPpFwzg",
  "key12": "Z1ZKjNz16EzCsQutcWpXoXLihwxWtudTLphYGNQnujtdef4dAPvcGX4AG2ammt9gDeHXLsVCh8vLd5pgrum6z4h",
  "key13": "5Vp3x3xLfER9YWiE53yMjg3of4RK481qmT2AJRQyHB4t1aUGArKu4rJqfVJBdY3WhZ5c8w6MgcUXk3H8cfMCQsca",
  "key14": "1bEDeCYu6ttSrZigYzGMNuJJzyQc3MAwC9ZcKjFHF7DVoxVCBgsPnX7Ds6EPChS48U1TNTprmA9EQxY17rK3ESa",
  "key15": "4uEa46ap838ZXrjfb3qCcswcvzu1w3xWK6pe4RkN9XN6Sf8b6s7usuXMsk8dHi7WpG3HxLAiwCYcvgcFYwyi9fQg",
  "key16": "579C9XeZzMbK28JFjfKi3xHE7DTwL3wSG14Er8kgGY5ZqKrQorHMp6Ya1Ve13sFXoMxdtj5jaQ4WVwbyfr9nZEZ9",
  "key17": "5cDpQs52wcapapQ5L55svvKScb5de7hEPzW26rpeSbZxrda1o5rvyDzNZsGtbe1yiDRUaQokYUWLzcFRWFfMQ1ik",
  "key18": "3nTdty6FqL99zEadWRRBKxWPPijmoh6oAg4Rf82UiP6zLSvfvxoBeKF1Dh36KT6MJoKPYiJ4RAgEDaHmPuyGjffa",
  "key19": "3yav6eCvLFCQjjX3bfx8wspSLZcLA3VYU3YEh8bufCn9PYvBB5NY9BjPhWiXJNno3Nh7Jsh35YpWXiNF68dmb1Zk",
  "key20": "gUq2ftEMAjbZzgvYz4N77R8z7vmKtnb9H9tgQydAzoR1M2EuMZ3VY3o1wUo3r7f2SMm4ZPerEjcSGuRZVHHmLVS",
  "key21": "4HwLkvJcKGxMcjvMLBM4kUNT5YSWpRDAm3CKwXnbF2raAo9oabAKrjNEVxEsPtbv4dVokHmPzFQqxWatUQJUmL73",
  "key22": "35BpbArUBQhncTAZDNw7Ki13QgypvaegVqShHdVHhYhEXKbr9Ln7r9h4TH1VaAEn2HDJtimiLquiUvrjR6g4G4hL",
  "key23": "3RjjjmqSrPATMkVDzYdHGyTMA6X1dDBDY6cwDiYb3cyWFjgWH8ZLGi5RWPgUdBCedgt5Pj1Heiv9iPryrpZJYVMK",
  "key24": "5UugoKmbv7bAWhzFzjYiFHUNhYdcBKHYwS3pAoWdgBpXeahQAuEtp4jGeE55Lv4CpkYAwphWzLKuNrztC52F4j5D",
  "key25": "2NXGCXyPUn4LhDoc5QGvhrHNu9zm9fX1BXS2LpTpRcojbfJY1oFdpw7o8N9nkscAUYwENcoBUhhTSW6zB2q64H4w",
  "key26": "B3ZCLfmRJeEdJu9LcrtGC4W53oNNNJL9G1ewUzbucRL65qUszLMCGoxbdWyMHRVvFBXF3ThiQKPXAKMMnowP8nw",
  "key27": "36QJXfiMZGJtvSAeReFHTNLT6U2QCdMmFSTpE6vTj4a26Fy4R7KQ7tULvAcst8c8bCxucPonvoqrBmMZnaq5po9t",
  "key28": "3Stju7cD3GRn9v1qH8z98WpCZecvFrr7UdRr9SPvtLnszh51BzQ7Xwbcs1iuF6xq5QgQUxrjex9iDjeQRQE1EUE2",
  "key29": "3NyftSs6HHm2v4qfvdYjhTj5ducRs4AARJxX7FJugoo897nhBdgNsWSKSBqX27fP8eG16X1ud3F86JBP2xrGmhqa",
  "key30": "2Pfuo5PPWRzkNb3KEoD2PDbS1LXn5NHsKFoxJDZM2p9nL3d5FhcGqM79grciE1Ty9dGHAHSUSuv8ZUEEaikabsEU"
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
