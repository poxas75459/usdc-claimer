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
    "4zYeS1vvzHtASTSpsArz4EDYuqaGMuHBmV21SbUu7hzJKx4ASZ5CNcCRzRZXvxAyfx6xA8EGhtbpkWgfqJ84tDhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66G9YNcXihR61wteFJ1npnTyYBAngcUbofD5auvhxNdTCEn6YoFDs38vx9DVFkCUe9qv3RuYgxFNyJRDmuB14YmZ",
  "key1": "5t64DrgmNCPLpEY9qQ6DsPV5twZDPKcVdFHoyzi5q9k293BEU6482yMkW7pGqAFxCbYTWMiVrh3jZq6GK7U5Wuni",
  "key2": "4TGsSVbMBHFeeV3c8Jfz7fdPFedg1MZyJ8DXpwEje2xuTN9hXvfi2trpBKhuB52DSn4MNU7q6sGVGHR7D8Zm7nNp",
  "key3": "2BvodZHDEjfYHRT1iyNVf6oHYAtPcREBBVEyCrcKFZk2t9EWNsvhKLxkJ6ShMSwxwNvr5WB8PhtxxQnCZYYbhA5X",
  "key4": "yhDeGFPDW1UtvrDf37GZrJeGSHV9n8PKtEqm2cDNcTwVbpLhsiFrFPa47ghNohFgA7uhh26moj5WN7A9WL5H6n1",
  "key5": "63bwPX76gg1DfFxWkGVEMnnqWBb7MbfcQamSUYxuSTPFRwis9VyzumWbSCKYxZFiFZDgsjkDb1rfN3YLXncN9o15",
  "key6": "5sTzUmX7fqg2Cv9UREtKP7Tmf3rF4rvJTUK8wK61ZAtawAYJXFDMHGVVY6MqtBK7xHwsZsQzfZ1WPpCRe95VVtve",
  "key7": "4jsifZcqcH5owVPvPbTdRZV8eahmfa6oiuwzXwjZFc9YMegKKRRpULdoeLzt3Ps8PEHJ3BkxyDCTLWFhR3PkyLF",
  "key8": "fd51uyroDWum6fWMkcnQMXmreBAhre7GZJVuVowWsWgze9T18HGS2TW1gqBGt9dxnEBfDz2kZREgitFq1izpxNP",
  "key9": "3yDEXVPcqFaAeqS6tZQK5SfAzxkGTHcitYu6Mv55WJGrBYQxqojHm35BgoxDkHzrz6r39kebAhv2vLUA7514ZF17",
  "key10": "Aj9vnniSVrpcuMo7DGA1iqPqEtgfJ8tUR7ZZ8aPJi9qHXDEuME52mZXtpueQqAEjS8JPpK451qT1mRFNszU5ArA",
  "key11": "4YmNnzoAaBGKRBf4QKZqith417BcLD9qAhuVmkrNuf5e4gugKkM4fyCpH8DnUM6WF24yNyxeciW82KssLNjKJWPG",
  "key12": "5jemgGvhDLAciGXVCMGYxhBTDhuHxdyRQs1izdKkmHARQdciLRGzY2WFkGMiuy4oETfCqWaeiXDaE1iLSqnHEqoa",
  "key13": "xkSJDQDKWUmRSjP4NpKsh1Av39x418Hn9vqs4EeF3RZjwsAqA4tLWCDfm6R6j6d9rPsgfm7FcjWAxT42nvpxcHR",
  "key14": "K2bS86DjyodNuXX6TG3kfnqfRUXkjA78Ly3ccCNuymT45gc99LKgRvr1VuFnsNZivJ6x9RmcuGpFBp2AqqD45Yh",
  "key15": "4PBaKLgyjZBJdTmP9xi1tCxcDftoXAx9F1Kpskz4wDciD6zFMZfakVeRrCTHKTxdGWKnYUtk88XyQEX9FWVT33AW",
  "key16": "4R7YqPU2vDT365PEZQPKWs8Zh5K3MXJW629ByJCYpohnDEkWEGwWsMQAbV8GCNRPL8L5hRbeskiGfcmQ5LDm1CvU",
  "key17": "49TNoC91Ez2XhfqH4jH5pcRg6FCvEzNjd8NTBXzG74rqcC3NDdhbgxR5abC8Dmhkb49azSigECC8SBh87MRNzasA",
  "key18": "4kWs3VU6TJA7a4dVNaxRdHk4SfFaLSfMKNVj39gxGD32E4PsoC9Jm93JK8WQaiVgmEb2hQxv1MHGGXwgGXREiV61",
  "key19": "5ejp52qfU9ALVQqasvyyXWMeU2sbNUrj6F1B6qa4dR7vDYNEG8ALS9XepACsg37nBjLhXkDMorvzJABBGLsNuEfc",
  "key20": "2xC1LQHqLS3apTNGkkD1tLd88M1YEv3qRKYSdqdUnS9NdUC9sj1iAjwresJHvNWryNebKNR3vhXPEGVkm5jzPg7r",
  "key21": "3uTByCzxtvT1BKXAd58ajurYq6XRW4nd5rtrrN3kLJuYLWdnZoNghWYLseSXqz6pRjHNKH6dhdg6csZ13zGKxacK",
  "key22": "WAtv9uBnjKjPh5Hu2dPdoL1cgiLRzs5uNQrmrpyUVLwrws8EsrFmxwRjRh7twygD75VqY7Lefb3JrZRvnDH7WWk",
  "key23": "3gjtCsmXRwzoHAXCg4P54z7KrZvLwa8SsNUPFkprpuSL5ELyzvQ63mwjvyhAETkVGPTnquMf3DMjV46t1vZMaMVB",
  "key24": "4wXU7fmtsJKRpHCj5pWZwMDhZdpFxwVGjWRG2RzwCs9R7Bd4onNWPyCLCZdZ674z2pTEewcS8XFVZS8Z1Sz558Fm",
  "key25": "3mXpMSUKLzJ2JgTQ56ZQe1qvg2yMmi2zDjR1rzWREspyx6GwaxwfWsDtCGmMN2hgSZyf4AX2anjzAFyL5syeYwsR",
  "key26": "2pT3nxHSeAHbXbpWxMgrw82VC76RPXVmQKTSpAcvsa4BJWtqJnqHtULjrzBhpaRDNy6mMSfS3PivCGDWE9Xs5KWb",
  "key27": "3ZsX4bWD9Z9Xt7b5ENFCC6zv5RVzqENU6HTWiBdgaaTTZzz8uoYryWwv2mxELg3Fm27gWpfELkL3SM42GZmmQPmz"
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
