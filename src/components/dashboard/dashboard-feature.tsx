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
    "3Cto9BcKjFyhWvmyBGfL6Mh7BFauKeQDMyY36siLsbf4CgDR7H4rDZqQ8zrBoyrE8cDZwd5diTq68gzpceirNGk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r7B151pB6c8PjKRqF4UgcUSgfe2r5C4midTA2zeZtfn58bvGxq7Eb9vd7VFFVk1s9toZf1Ux5hn6v9DzYrvE6MY",
  "key1": "3E8EYggTbyJPx4ED7aFxY9VFw8dU7AXboZonNBYdykNJgotENe2b5KoyVyThf4dcuCa3nkcHeJLPkrbi5CaAvgQP",
  "key2": "2AcnkE5N2EnJkevBhLF1gFQDstxvpo26pFDpYHyLQGd8EypS5Dp5jQRaZxY3r8CgAmUN1SoMiC1DVTYHVbwKtY3x",
  "key3": "5m88mGzDHLkRz7tUP9BVaf7NXbncJGSYN1WxDbYcon3gr9nP45QmyeLcJKRe8wumnXAPnVN6BfWUz7ctk9c2NYmy",
  "key4": "66GEJe15HMpgmuxhobm35DMXsbYmMjTZFDJkSysPjmYMhHFUQFPRDWYhtWt5qVtYLSC77ZJAkRBy7cuaZBsb5X7D",
  "key5": "3boMjt4fABNUXqMGArWEDYiCUMG75gu5SG9LxPQM1yWHy4ubYpAx3LqWtV37pcun2VbTbEmnNLSe4Rct6fpxudBn",
  "key6": "2CW1iUoRBYbPfam54ZMW3FotXaWLo5poq51X9BGeGhJ7ys8V19dFgJUq5vcqvQpNZQjGSQMB8xuSHtfczJ6pRAtX",
  "key7": "44CATsuKrCRX1kFDQc2TFs3gyJbetVVdaLXN3GH8R9JJptg1P34AoyW1ub28jqgqxvtpkfXNHKC7FVaeSGkQw5VU",
  "key8": "3GxafAFxZiEXWFjBTLk326ftKyaoPbvVPxN3aQAu4Xntx8raRaHJA6FzGdxhjQZ6nmaBwyH3BVvvGtN5UaJrvJqU",
  "key9": "4FzrfjYxTU1ZQtRpuKdjFMPbyimf116jmHTH5UqZXz8JwmtPQvdD4KZK9bWmmAbuicWkGvBvVadHVdfMV453JauQ",
  "key10": "35DPh1k82kYj8oPWQ3hRDkHqe6TWRGyK2mLZELpaCPS1a95YdXtAABTzZX1aqDAZvEpm8okZcBozx4NsPmSErXqa",
  "key11": "2zVnae4kKc69iF3u5LmzSWCzRqytKeuJ14C7PiUYhJYvzFN9G6BE1PnwQaxR2suJE5h9zYWwNgGmWPdU7aYa8JHy",
  "key12": "2r2BrSqfbjcN5d7XAAGzWTfPC11g7xSj8ieVoc5KZBW9ajS6RNs5qJqBYVFWhKjHp99ats129UjNnjDctA9WKH6G",
  "key13": "4Hy9PAfehVFYXYDeZ17VTimGFvAscinQyFew5JkdtLznQ6LXt6M4owwfbSAXPs7hJNE635Pn3rEvzHXgGJPamUui",
  "key14": "5UQQmTdC4mjuLU4f4e4guHWbHMuky6vwGGRSzARFRoARwVPPi2SmDkeHkmxuV9wkCHQobogToJn7P9XCStLUmfJR",
  "key15": "5ErKN2X9rN6KspYSPuuwA7dwMHXTTfahXo1Actqv6tRfHQdbWrjDYu4opno9oN6JnR3AeodMpVZZpXtVgAjSi7um",
  "key16": "3oJCK6wvj14KJFqrT3trSrwFLBV7QtDpdDJf7q6tAEedgQGM6ykndKvkFgkmfY6pddrPguC5S9mVKj9HLo4K6Tkt",
  "key17": "rsAKDAQA52piUAiWmmJTCJ2AenLeFdG8ZPBtV6py4cusRPECJ7CpR7geQzxkir6p3pxj5trSGFaYyAvyAnxdCth",
  "key18": "3c4bbTi7PaXq53VKjz6ncoVCAt2C4dMCH4uNPdgkSLyyvoFg5u4wXFMNc23xkdURE8ydk99ZosbGMH52ircs2Gpd",
  "key19": "2b7yzpsqYSyLPPwwuosgkdVcuXUhTfM8RL6SfD6YtkD1Grvo67XPLJwGUUudsgZsnpeNcLQeSAu9opsAzY2K9xoR",
  "key20": "52Jmk8G8aaCVPfYBGTFV9hf9rBy6y9coUvXv9rUGJa6HdexxaGZDKdTEgwAGZmanWJECrpN7QQmCeiPwu4fypWG4",
  "key21": "PfgHC6QfV1WYwHFJGZJLX5oPTXHq12sXnfhxf2uoxM6byB7DaN5zLHJTeojqkcKRZuRektp3uLDChaQtA7WgwxK",
  "key22": "kB6Y9pAxfZexB1hKamDPsqxbgdRr1ThAMuEJF6kQ6Tu9S1tRn9dWdkyTguu7cmrAeNiwiPZNdYDKb2ecFs5T8zd",
  "key23": "2v2JZF1JsERVPamowMv8juzk44EpLwy3T6YRSXK2Dxtkcj3x1x9E2FJBGmhWvukWjZmr3hM9piydRybQC6Hjvjtb",
  "key24": "2vFgWzcBGeGZPMwaDT9525CTidv1UPEaQ8cJGgvrcPSp7LJZY4e3rHKQenmxufszyQ61aC1Gb1qdxnKQ4tfsC5uU",
  "key25": "2NBARwJdFE7oZ51dpuwX2PuLBHnth3ABMtFgnnSxKEyKVDp3xPAZ8X9fLgBV4kYEGe1BCLs11q8hPWQQ28pCbeWf",
  "key26": "1LDUSnFUJ7VbFG5U5Fp1HEN5Gpv7KQxjCHFwBUJjy5g5B4Qi3TmX5CTe3uqN4swCeQzt9fwgL9uC7RAmqFsdby9",
  "key27": "3S5sRMpGjnC4QRcpwrRB7HSGbCJ3JGFW8J7kh4a9E5Boc54BChFf3Cd6unDx8AwyNXMECVx9rGU4yroFpSLn7Xzs",
  "key28": "3Kmjpj9ug1nDvfoFyw362M9ZfDMvHJYzUVeHiHrbneTYpKXpcwsKhjQZeJdGZciNLCHa4TiSuoUThsNSURLqEztc",
  "key29": "e5tFPgBsozEcSw3yn1DEC1pyyeGZwenA82V6Tt44MtabZ8FPpvrqAXPR4Cp5Twq7q6dW9cQGtCv6ZFyheqwRFp6",
  "key30": "4s9sdeWJn6eQg2RcEHYyEkooS91dhqu8yMETa198fPLZzE1CKXFTb8g9wqkNpsECJ14CYwvwUf37wpmGtoTSYsn4"
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
