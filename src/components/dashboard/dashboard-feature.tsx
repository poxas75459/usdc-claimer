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
    "5ptzRqJ8aaugdMUHMTyNdhdyw5CiraE5LR2mivzv5RYJSZpm9qoNBpGeoDnKEscwKET1AftX14ESN83huWzXReRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eqmmF7rdNsYbPt5c5UahS7GUCgiGPy8F1mu8HsPCLgm3BV57FZHCpx35UMCx27GgCAsdxTkuEGZfveXjtHBei8g",
  "key1": "4o4yYsvpFd7JDJE2K4wVBGvcyHAHTHcT7E2K2iu7rSpGdzF85szLvuYaX6E1JyDyAvvLDUGRsKHVV5R7RLVKk7qB",
  "key2": "3JGC4mviL2YHZScTE3zkpNauhveRBXFZw3jBy8xTh4bjBFPKZGANGvCqNZpf49s67wuerPfhDVYz2AMggYpzaBzF",
  "key3": "REcskeSJCs6JcKjo4CqNtdtwoq69kMQyFbNcxQ8UicMwHrBfmtKmsRAC6tCsGhX4GRpq19DpC27xEjduv1xAy6p",
  "key4": "1TeKFnuKdqW5kD3GgfLzKCp4qVjk85fTajwRkyUP74aXtv8EGWxELdjoEg3bLu5rAmsXGfEU99v3VuPoLniGZZJ",
  "key5": "4Y8FGXaoChRM9FCRwrQJsuKcK7HhysvZ5dMHKwgygomvkzUjmw8NMZXPEKmBbskSw26XXw3CAKCYQeSuQo6U6Umw",
  "key6": "66FY5yZxhJgqhtmmaACnVy4XG9RdTNZqnhAWktnQ9SBCa5vPW5PssVfrbvzTFcn6CwDGxczd4suZeCEMT1QoKpo8",
  "key7": "24EdKAvJ7cu4gswrs2tSukdV3TQ3yPmdkpJsyS2FEFqmdAkTLKgvQzufexzn8k2wM5hyHYZpnYJc3E94wGdKZkH2",
  "key8": "3mqksDwKgSAw6NAgQKCx1Nivi8hwqNpaYAa8niLYSvmWyEjwyahFxgKwtUjhjMYxTR9ZsacBjgZHqhoGWbLVJLN8",
  "key9": "2C9PpUNz5nsavQykhbEegd9NKvhwqapr2FHfLHjqkgpZHMnftYUQ38gQSfNTTEkUwxa4v7b6e1fwpyLwyqdFvzWJ",
  "key10": "3kb9Ug5mShL2zEcF4gzZ6v47Duc1AmX5cnsD6SPrWCCb7vPs246b6VQ92n7zhyRLZN43nVAyTYpi8iC2By6SoqKH",
  "key11": "4P2i1aUUgjshbAErWck8mnY8jtGWyx9B7p7p93p3CcNyKoJU21eyVcwTDhiYDpsQvebYmdaDNky6LAiTffCSo7tM",
  "key12": "4GMTqFhGcygjcuShZrSM5hbrs7aBBrvFFxGkb2UMWarcxMR7skfeMVrCJHVJZibTk3gv9xZaHno3fGSu25NWBUbB",
  "key13": "5zmTh6KxD8dxbBbk319kXmLNh8SxK59p7a3pShHPSWjb12aqqNY4HF684t5k94Hxrc3X3oVDwSWpi146P5sv8zAh",
  "key14": "3jkB7fdKFhMyJf8DAdJGAadyTTiNneBrcuyTA1DenWr753QZrBZhbLLiDyuRWJmN5oc3s1dJ882dv1CerTstCrNX",
  "key15": "2SvAuSCCrYs3n8TRNvLCbNi2M9Bj6tbsAo8dN6wSVqMwzNfBmRDD1j3Gypc6vFbsbwgbwnwvDn7GEG3jyLV7FSUU",
  "key16": "3cBFU7dYYXXiohs5bQ3Js4d2p9bcwpXuY8AmNuuNReuf7KekNtcQygFiUKBC89Dwwvaem3acgAuzX6TVJr6NuKo8",
  "key17": "3qkSFkLsNb9Vi4LAvPiToJfDZmvcKyvuTkxHmGsTHsfYmgZcJJYraK6B8a3GAzxWH68G5CoSpFc9UxdJqc66moJg",
  "key18": "3cu9BG7dVBnmjNTcbTAVfhqKuKXtXgtRTYwfC6fMGN7NQW5GRDZg6U97TMXVafizuYvd3nkQos12vZAcsrmCTXK8",
  "key19": "4CYAEdvhd5DtN1H7bZLzCBXXjG8swTBJfVa74k9pK8jEzrjmeroP79a364f3NQWbTvWsVssr8HWTg49LEXCFP85",
  "key20": "3evUimZQ8p67EyBb9oz5aaxX9gmsvWGuGXVHqqhvNKMFFsyhvda9VtFaFoiEAsCXgNKFsG8f6EdR96bJTyB5hG4t",
  "key21": "2Hj5gptrz2Ek9yaEWh3JTHiR36BwDo18jTcbGeoqze9kFM5ws6vp3Do2ZfvftdqE3mcGC3FmS18tBJLv1ftebcFV",
  "key22": "3xKyNr9FVAeAuXGHEWkqaZ2LinMSkx9eY2yZeHzN24qaCPDfEEeGprGVgY2Bg14ZCgybs6N6cHvnTh9RJd2zJQMt",
  "key23": "2NBtdrhAuKJY9qoE8GwiS3mHicP5zQiVPRwBX5LDgKf2NZFoz95KCwVh3fGbKo1C8gttWvEoAFPprdKkymnwY97a",
  "key24": "2hbZvepHg3c45AKegcuwZxMW9vvWn1zWQMgYvHxmQJHZnDVtMgmE8avKPCxrbf3c2wBVhCumHcikJbUrPFMoAUTK",
  "key25": "21LQ1XsnboUu5fPJEFP9p8aA4D8u42k6P4Bd1k2ARwyKfQDafwWD9kYuSDwavJoXZukHtXsMo6irTnpxSBTzFFVc",
  "key26": "5kuE4TexwyBBUyxVatMPkoushpC6SvDuW7Kr9TvDJfvR6yBgpycHqeZnR3uKR1ZWuHX5Hgs6saLFb2HJ7JwzXqfF",
  "key27": "66EZryMfwvQgNE4tAa8fL2aQAgKYQzz8c1Q8MevGshiGjtFL34MiUhXXUZDy9B1KHcLjGpjc9ap1WDtCTBUeMf3Y",
  "key28": "25tCfiv5Aywg2yHb6FswoUkrApXgrvAx9WSmtFjZFaHqXMcH9ZWK4Bny2XMknY3uTQ78UwCBYBCihJfjSquNxBZa",
  "key29": "3u2aPt2kf4ZHZTtoJePjm5t5om26DwUSAktRTKotE6WBHAbFZB9U4uGvtsiWtdaAoTZ442yP2nw5ieg4bSXxxjzR",
  "key30": "5xt4CB1LHf8MicX1gigjX84ug5WVXKNGZnJquZWj9bZk5mivR3fKCj3xgFVCLg71mSjsYrv8M1fMjaXYJvoNixhV"
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
