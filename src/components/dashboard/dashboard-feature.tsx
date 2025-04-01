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
    "5SfU9CYNmXmHdTxcRvKVUv7EuSEQQRG37K69PT8H4nKM8BWH5hXNrVurK3i91pQ1L9wzReb5raSBbXzgvEvZx4h7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dNUHrLox7DErtnD6wkxwnC2vPAdgnsBDFdKftsfexvMY76qGn9EW1JrWkgByQrvfqzfaJssB2Xo2HVYeT8ZMn3f",
  "key1": "2jE5RSDn3RBnN6u5mhhqsu9hjE5c9cyaoNJrmcTvVrWmbJyw7LwNKfqQLWraLvCBiyviuW14q5tqsYnrnybtBgRs",
  "key2": "4ibHYCXHMjqRxX7UhHkVjNUDYuSZNvEKp1VrF8N9tMJJzhvx6ZZqAh9hCGsFR5sFjpTYmVF98A7FgMzm6XmGixw7",
  "key3": "4j9EbbQjaR7ofd5aog3iq4S58zWMzjFb11bBcdgkGvJLHMbohfLtqAJPGtEgY513BpkrDFPxGKuFKft2uPxazU8r",
  "key4": "KgxgvAduLHUrAEdc5gAw3LFTs1UrtYdLPh7VWgk8CeXN97DxFrXp2CgMWTsqLbmu1gWLicPJHcZgHzCkKm3Zyk9",
  "key5": "WCHYDBQ4V15QadqUvYNE8iyHmza2qT4YvTnTDa2ibQFMPSQaja1WTYmMGmZLhcQvNSPRcY9ajbMkyweJLzJvvEv",
  "key6": "4dRTg6CwpCkfLC6n5vsy3RRQ5UemYxDT7JAp6DT9thtWeeQwgwwQHBgUAbj1afUccXtbbFQ1cEYKZ5GT4KRSjoyi",
  "key7": "539jy5DjHrQwXUxZisB37xPq5LythepK7rTJktqe1RyLvdKv49m3N2eckf8YJVJ77xbPxjvhbgU3ZQHvfQHo929g",
  "key8": "2qaSHbBfRbZ3RspBtUhp46HULkVMYopRZACkni5H5voHvLJrbC2pfY8i8m4wvRNtEhtYGFJVHeK7KtoevzeLP3Xd",
  "key9": "4eizFaq2J34o9kHL3Kpv2t3BiC5wa6pE4Qfcca6SGJDxf9rt2diPPDmJpqGGQ9VV8bogEm5Rety4xRQi3rxNZHGh",
  "key10": "JN7dvp7gmbj17A2zNdpkkkk4vjXTi1WC6iMRCwRTYHVaFyxi2UXAye3SzA2LKBgM8s9WjS1eunef9NzQ3gLGPip",
  "key11": "61ns9pgdeT3vxrSKDxgxNh2Zy2triCChKG5TmrByBYNbg4fMCDDrBPCL71WYr9qrqostY8jqFDbNdzg48WeBqA6q",
  "key12": "23KqPhENv3RTKd2zTd1coFwZie1eWKeZQv4N7EQe8kJMUMBBMNxondqztQdVKzKux4BaZdjFExNezeRytBhvkTLT",
  "key13": "5ZUsrWX7xSU6cJgZYnsBMyTz3W5pPtTB2QzFgqpD1X5f4NpdjAjNjoy21eBc9p6uS8frRCjF78Cay2TEtjrSQYLi",
  "key14": "4jxmvW9oR9QHjiXAUSxPfBtSVuRFDW9VBSfM6h3yVZ2Qq52axghGMCMFB9NaxFJtxXdYmHT2RgWhCHKe8GUuC6Uk",
  "key15": "5JJqGmLBkyqNf4YgitMV9YtjsEPsQbwDDVMdVH42foZYymGHJzg59g5KpK8QFmBDvuDY8uMYQZUoP5UW2qEBUv8a",
  "key16": "5DPoauF5Pd7tLw7du1LG4FhjsejD8AoqA7hwy2iBd5Zws9EvtnYyuQrJXTiVuBYRdUPi48jCHMbHJRZW4v8ybrHS",
  "key17": "4wKScESiyYSL8oJRS8GvHixxr8VaxCTX8z8Xcs4PhTrpu6nU3UTbcJJGgvHJ7ZJhpVnZ6F7DgWEdhDVRL5Ak3UgL",
  "key18": "4fjpZQWbctW95iMqoKuucThjW9URNh5Y4eA158CSQLeFE2KorWDFZFBbKJj9AVQng4YnNvy2aCB6KtnpZFTPshcD",
  "key19": "5PaNb1Z56rws7KLwh3mtx8SK5wgpaS6tDwY6SiBCXRsBZC6PBobCTYLetN9qpU7ezS9tpMH8rzMSGa4yWneTtgHL",
  "key20": "4iYc4kaohMy9LiyiKjby4SjNG4Cuu9G3YRJKwcH2oyasMDV8ihSt3MaEgUrNHHKL6Je9ANmqFhBwc5YciqqggGzw",
  "key21": "58jMYgA3Yc3S1cDDDXHoSfYEDZv5TuAZ9fgs5wzWPotZjRisGrn641oLJD2btfWfBDAxqahAe9x7jgbims4VovhN",
  "key22": "5afXHvusgYf3NA1vG1kjH53QhFG6cYnkS8ifVCHm3KCFjH8nA3JPQoPSrYgPWBbrSwhoS2Pei4jndDesKmYSCSzQ",
  "key23": "gEii7wuGjGCqnu8cuYqUDKdkKi3Rf3YHeBGFd7Zgw7cDuaWfcHS4gP1q33q8we4m8LsF2tjMhUBRA9WxCDCZfoW",
  "key24": "4ZY6nLWDFdGunnyCtgbC9Y4bLrVbKpsx7s294nS7vpJiBihRxkAsKrayRvCDZXM6kcsffMyDRuCSPe1LtPqZ7EWs"
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
