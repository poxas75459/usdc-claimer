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
    "2d7NVewAvvy17y7BNkuFUfiRkSDHE9fMK3rFLPipqkX8oT5Kt2ofj9NFksEdq9GhW7ptbrtDyeDrXmN1TNFz4jJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ghVyZnwP1PRB7zvSCX6dc2Nxt5dvyyLQWB35tQ3wFKrjPp3HWgGBsGptJgitoBPzEcwCpcpF3BMQi6fHURPB5G",
  "key1": "4LS7FRt4XB32bkghqDsSDtvGKa3Lh4EwSRtn2yG2LxZcmnjPvb7qCDWWpZFJ6atC31uMsRDhR6CCjpVpkC2t767j",
  "key2": "4rWLZ8we5RMUFXMtwwQmvz8CqMny1182vUwY3LBJo2P3xAjRqW15TgASxQY7tuKVj1wByHDKDGudJRUayupsUMkH",
  "key3": "WzDZWLEpLU9HHGxNy2jywijJfvtRCBrwxDRVoypfmKMwmvKcvT6UZMnqHAQR6LZgMN7iW9gzdsqHDLcW4JsZKmX",
  "key4": "3hyjDPXrLi9y827tgkVKtfyrPhBtiriyzJuGpD29TjuDAbEAR9qWGSnVPBu3KLKpZCiSCZFYa7fdmwBcSTFdiEhe",
  "key5": "3M5wT5WBfn2PSZ9ABWdrUy8n6e1vJeviDbbGGzXovtfn6AfRvkw6tSsLK24QVykAUDqgGrp1WNUg19sDpktSWrf4",
  "key6": "36drcB8uYu4scnMhM8yy23tfc74ffoNKiZMSW34q7bcHmREfGhG8kPNgmWCTMr92XAnEXJ2PA4Br8M2JTQbafaTv",
  "key7": "5GRgik5tm9Vik2F5y8FesAuq1AqnkYBVtooc5CNXkjAVqMpsv8n8JdZBrimkeooL1MmCvGXsZpEhAGuKuNVFGKqJ",
  "key8": "5V2UZf3Vesjb62PcHKT4ntC8CiuQCkNBqYm3PvCVu63QwrLbP8dTmK4qfH8deQPwoh2Dy9ddKcQ1QrrCCkv59q3B",
  "key9": "spqnuHkFtpjpAt9qLhE5hDKGLDVRQJPbMc1ZoK5ar1HkYLk1NHYi1VMoqvySV7ujsVQ3CKvW7ozN83ZrkdSce2Y",
  "key10": "3mu9zVNtnFnZWNo4Z52iif9jz8YUUppkfGXCm1yscbuPSnrb6XodieftkGyMgnHpf2NHwKsVA1usqN6ioZccs7Cf",
  "key11": "vYEqQGnBtEaXd7d2jE7hYjXGz1PrdeqPE27YfVgFXLg7fQ7uSHaL1Lm8ETi5bc8hd7QDTAinsd8tbn1d2Dbw211",
  "key12": "4UvXeEH4tqhGKEtCGcV7z1XaBzrqSMW3jzm2TnpKwWcpCRDDfFFxiVaSZJkQ2Bc8V7ozyBy668mqZBKX3a4ueGxk",
  "key13": "1RptChGZTxcSe5VDpzC9xhisbZa3z7a8DGmWYT8GTQgBja9tV7PQrGV2pn8qkB7Z4Mn6CF8ytmniowcVgtpnG8L",
  "key14": "4a5DM4QkVFDVm2YcgyXkDkMnjhMB7oW5cKHAE8NXmvUUTrZA8qoz9pVDvJE2jGg58b4TWkF2KaVdKp2GG72kL5hm",
  "key15": "22Ue1aAtpAHkG7dEckJwzrtacqp3A2qyTbjw3pTPzMdXoMbHvz9fNfJ178N73RZGVrR15TknqpCRDiusMzD3K7Fu",
  "key16": "5Fn397kinYDeES1a9b7pMAJXoZU7GuR4Qy5mKTmLskN8vSArVEhBtv6BmDutbJ4M38ydFL3cLyMZvzytUjbivCxH",
  "key17": "cQ8tq2k6367gFhBKccTk6iyYLtcniNFmUsb5snNJnvJfDx9CP2xq3UVAzfpXAaJgK3TM2ZNEySEDviJ78bEjYEZ",
  "key18": "3iDHDEBuTs2xpDHr9yqhYJFdUKF32ximiaS7VAVRwEfkQdTYnVmNnXvqWEr4s85xgk3nFrJ996vwNhhHi9xcNdJg",
  "key19": "LtUeFNnnoM9Hu3tvWzsx1u1L9phUD6m3i8KzwvfHqsQZddH2A9rXgjNcbawWz5dJSdXiBMo7BS5NZHQ76Gerg8g",
  "key20": "KYzQbky1TMoyo61vQTXpSjWQBNWBW6cryAywVWyQ1ir23sSaFL1y5VzdcL3gr7yr7WkS7B8YgoSD4fU1Ux2QiuP",
  "key21": "4Gne7PvnGMG8TCTp3Xr13yyp9z7nnLCNPL65AEp5QTyWPHKNEnz9PRW3guaVvd44aX1WdmUgR9nqqYP1ABbV8UtE",
  "key22": "3XCsyq7nVNu8UVb99jpMkkppnPUxQ8LMqok8W4HNV2vMuVtFa4AcZJRaHpUNZTEAcVzqK129h4DiLjDvhVt9zbfW",
  "key23": "axf1trriB1k7CX5aE4CsY3Nm2qbTh3ErTmAFTzwnvtokqgT21qhpmmbkkSxAR1839dh368S8GMmqJrfKfqokNYK",
  "key24": "4fSBFZWuxKwMMRfkSJ71pHPRzfLMSQbCq94QqhBq7CDqhMbZmXtpjufSWKEoW6DXz96pB8H9xvL9ZmkbGn1Q6bQL",
  "key25": "4uruetooNJ5ETLj1BUgZNdJEn5UPhZqbfky5igRw7k1SiA7wtJ42w2d2cF8B3PwFCrLPSsQfiVoqrqgh4yvQfVXN"
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
