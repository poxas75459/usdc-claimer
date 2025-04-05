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
    "3mh19ZVd56oqvHW6wJX1rcVCkeGwiBSUXbViyG6CBv6jBHgHqhKag1ZYe9s1yrfPrjZLcibgwfxJXFPoDy6nHdoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VNRZQ3jQacYPw7at6CaBqbRWo8VJS7tFjvmZpevc54RdGw3KQ23AupLLG9ys1TjYnJAjXo6qhab3twepSzUvPuv",
  "key1": "2L4yQwhWGYdJG8pHiL3HRctdXCfbpjfYXajmcqiQZWxbDByQKNx5pt6JApmXjR4A9kBPMNJ1E11FvqqwFH6ij4PJ",
  "key2": "5T8XL2V657zbx1p6uQuXjsK9wZgPreGHR3jYi5oU7tUhLxtTU4WQieDFhnxm6TrMBPTAL6UA6ouJ9rcxNHmCiddS",
  "key3": "M5oYfQosheK38z7JGxXjo4VX7ddhBqoQtjP4TnwFkb9RFnM4QG15Ai75KNBpueHNtKR88k9iPHa4i7yD5obi8PM",
  "key4": "2Aof6oG2TPG2Ec78cacVbLRkBHLAwybbEjRCi8bL5hNma7dp3JcLwoRPpLt69pg9m5XYxP3GeP4RkndR6514oMGr",
  "key5": "4XVDBSsVSt2kBvnxttufAvVsDDhitJVXjWSmuMaFFaxCxeemWzdUAkeXc46MwQzd4Xefon75oXBpydLLJiF79imR",
  "key6": "4Jiu2FxyM73jxRx9FGz9WBPds66YRKmEi9oMZp421AjSPm4MkADnL7QH8tiJGAJNp3S8HnUnF9aw7Kupm3CwM7Rs",
  "key7": "2pvhY8JJbFYemFSmzL3uXEjH8uDVe52CTHziVscR7F4RTwETagoQ5Wjj5co2KJsSXEAT2fNdet32nVomFY9jXkjz",
  "key8": "38Am6PB4TjNE3rQsckpgES41yriuK6unupBa624FY9i5kotptYQry5FagGioFRwwCZnaLo44VfGU6v4ZX1JGWg77",
  "key9": "3mTWM2NqLL1TxY76sHupTrbR8MVRcXKYQ4NVd6KSVXZZ7tEoputYK1k8Y6i4LKGmicFUmq7BqagN2xq1o8nn8dVV",
  "key10": "37YvPzvxQvRzKTMbjNZFsqq9iBRqrvfWQ4LPMK3nfPvDZWNX4VLtXvWFzSMUVGQooNDrfM7hxg5CCm7s1CNNJMgE",
  "key11": "3SerxKnRiamw6FN26Jzj2c3J2s2WVmGkdkL337fPhHaqE89mM8XHgktPS8uqe1TbwpaM2X2te9QxvYtjHmzxyysw",
  "key12": "3HHg6YLgFAcPzsYHjo3ix2DRAJP2qFZtCNcuWx6criEWj7jgHAeRKD6zvnZquTwqGk4cRsYSP7WW5jKBAStL6Trg",
  "key13": "5GonrVp5YcSHtY8NhjUdsXX1h7DzzpmQyca9QP7841SYP63cDTjL6Jn3iN7LFhjSJZasBrqXC6BSRMU1ZmJABkuK",
  "key14": "2LPH1Vpc2o6bGkq5vnLMftH8HNrXu3XzBfNEWoX1ZiyqFgPWtbeSLTccELogERgPGEGYBHX4Fehvm6oEEQPfYPxL",
  "key15": "4mZWnvjFVeKWEeoGQciVqU2uHVUhZZWXwtq9e4SSEjxRizNqYVYG6mqNiN3wDQ1y8QwVxB9xbtS7V9erYchzDy2w",
  "key16": "4zMtdFvo6eGx3pxVoZUm2wGMZUD9fLKLryvWemnojbFmVACA41Fo5dDRQVuTQedTGosKt6CAXGmyApEgVmNPdRJk",
  "key17": "4Xb3we55MwDyXTrhJ6PAjJKjXHMUVorjoNgCFJt4H7CGNDBM4iPbjpUFAzh5wxWdNBMaGJ7vszx5jEsAiLYbviPN",
  "key18": "LM5WRF2mxSQ5bkDa8R2nmkrNXFCjgjwAKVhw9UJKKm3hVrhJGih3tnUEaavCYFA77VyEssTA53275TCza35XnQh",
  "key19": "5Whba6Wb7gLJxghkzBgdyN1hdy1EKvfkX1gApmvKNWE8iyXAvxWe5NShEXnEMoJraSTwUw1yNvmm7k9JutAM4iHK",
  "key20": "36EvT1hfrUedHsRW8FKKCEfphKAQiqATGT46ddcWKZrot45PmtE3WT48M95TeU3qpKRtZLmx5mAs6yBTZ45d9wBj",
  "key21": "XcuH8wBNL7Qh1yhqZ7BKNb93ec7S4B5eFX9LXH2Cnf8SmvbZ7jgaPfCa43bB4yJpkZm91yPSJcJRo2yEaCfdknG",
  "key22": "4RJa2HnBhPnDnT3nBL9yk2bh5scKYKgPh14bi8FRJ1MXmiA5AsTEFfpxoV3JF7PAtaRJGnTThPJfqZeZ1GJEkNhQ",
  "key23": "3zxToRyYJrPRw3Ji9WhbehqnLpTPxZrkzFVzpGbpwB6W24dNw3AvbbW49hrRiERKYN88M1pZsohQMch4UnYBZoZ4",
  "key24": "ds1yzBZAT6arFCcZaRo7Kqioqj5vk7cui85VPNDCPrTqsAdd5fdsLnDKxEruiufDpw65j1ouQ6hTffYo8J79xFd"
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
