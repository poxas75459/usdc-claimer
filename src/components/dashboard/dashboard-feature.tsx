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
    "3hjSTajRMKowjzoVcM3wDCBhJcnuSt4gxzaAh44xLyy4MXHfEzzb8ssv1AcsuWuJs2M85wq2hCT4FgE7oyv1RTdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JoUu2ZJG11T6qDcjetS1ey3XVnJ2jk6gBpc7g78K4mK3Wi9d4g1h1JdAHrKWqYEuqdqWZNjFUwzRnZ5DWFRMQrd",
  "key1": "3idVG55DFjARHPrBu6RN2WiUqcTjduAdrt2vkUCsgAwBLTrvto17K4x2qat5p6pnY1MHdNqme2RLAoBY8GE6iKxW",
  "key2": "2Tegn4sj2qSxrSHLCaHorpPJYrijhdDm3iCiuAQFjPDEiCYKA5Wa2GaPaSBJR1PWfToHnVNUXbt8Xh9XRgc1eYRo",
  "key3": "2RQdKQyYGv3hqwVHDTp9nsJ3bmPzrZv1LtbW8SgSD8JSYtnpDFcqjQ9VZY7USP35BonTT2Z6ctMBrrc3CKsehmeH",
  "key4": "4fT1QvwmZvSFYZfAY64gnMYNEHnJMDrw1BTDBF7syWPnFqGQS1wLXK4GSk3p5cEHAG4ucRHSp3rKzTraEs9qkH3w",
  "key5": "3B5VtkvPmKWHMk2UfJ78PUWYSoer3cFzPyuwSj1mogNudSHWdEncmtPg4VB5Jo8tnMdTqLNQnnntH46uhVVuopxp",
  "key6": "2KtupZFJ2C1yuAj9ipdoGGCqSvkuigMqQzaR6uodgmHdr213DPYCd8YZZxmxAL9pazRi2A5QCp3xEtx7Y4KA8Eiy",
  "key7": "hvnTL1V3YrxvRSFp1ZfSh3wCsfrr2o1noutcKSZSPDtWq5GyKrLjEWXcYbNwQmNY3oDxf73DjDqm4whcvwLqyVo",
  "key8": "hiaVrMriA9k9JiygkF4yegLrKF4FxXDhFFe1fZNxRyBPHiHbaDQ82qfrFfQ5zbTjjCzJgXc8YCXyn6LF94WWshW",
  "key9": "3Yc5PdhUGuD25fDvRJrwv84G13wFxYLehiLpGTnZVVvoMfLj3ujAJyKK6YWQsa4j7YqaTZZgT8xUVYYvB463uPSj",
  "key10": "49U7MdHLhPRxatWKgk3A2qNSV3m7ajpcoUyr6Q6jTXRSTrNPBa4AQqVcjhiZ1V9QGTVP9XJRaDKAJuQJQgAWYsiL",
  "key11": "2Hh8zNKTJ68XTnw9sHtDXm73NtRXs8nbtWsN7aCfkhkqMcgpDoPavJhRStzpXPwgeC2kL81GT7DQABin7CDJXTC5",
  "key12": "3obAJW6yjwjrc23SkCS7z6yHNY7ji2zpY1VpLWN9wzaxmW2kcSheLDYMoNzCMxQS2buuBLmhxG6qUgSBy8cCEPv9",
  "key13": "8xfd2ieujJjkkjJaj2KwYJtsrEKHGHKQm4kX5hhZys31JSvw6QEBtTWWXUjp9NqEqqjw4W5yy9GeBkTXJou1CLT",
  "key14": "618HGt4dD9bds8VLdDVrFT3P1F5Pf1iauPZUD7gY9KZn73u1xLRBn327dGQz8sABiF6U54orWKv4B3gWtHasDoYp",
  "key15": "3y7SCyokF7MhKxmSEGqTSGQvfQyUXw7DiWzgP4xobXgcWd66gW8kJjnKXVmd7wrocwuN7p7JpppFUsSPMtgzUeGX",
  "key16": "6cd9uPCoC4n6zoZ69fh8uRKNYdWx8rqupX8hbWrXKGjYyfBDYJufegKXsHgJxTGV3jBaWB98GR4vnnfviBaAZ7h",
  "key17": "4ESFmdHX42io5vb7QGD56R1cUpXBkbywZ4hotrmGW32LmDA7sesaTW5VPKATcf2KBr8Nc39LgCFZmFj7gfQ82k7N",
  "key18": "8wRfh1BNYhEfSuc8QHTTxMMkwM85B2GTfbNZb2ZrLfc6wbdupxoR8SQvmcj3X6W5gaN9Y4FzdfQBx2wYVmNy853",
  "key19": "5TJM1MmeKSwQzkpw9GZw4kpX1uoN78FbsbKdWH3wg78SfTGXjeovJd6EvGLWEcVtr1YXBd8Q9yLHFCGcE2hrtQnG",
  "key20": "4zqhp38hmALiWJrSjnaKWvZzX7CFMzpqUgTi4sVTYtyTahUMW3SwbaR7KhjQeQ7ohDCBZfgJTwzk1r9EHEpny8n3",
  "key21": "rD5t5XxLaDADomTB7hrEXsAsMi5r4Xzxy79eEGcQ1PpMfgw5NaDbXv39RaMGQ7uL184f2XuYtGGYUXD7fhUQyqc",
  "key22": "59J865ySNCzPCaBx1hi6gqL4GQSXdMrSzqUiJ6i5u1tv2LifHsLrDHm5ks5q52VhHpsiSPCwn8JpQw6BNtvMkwzs",
  "key23": "35SujBqswE7Ym4m7WMk5csHrxfnGN5iR4YJrDs7i3aN7rr1Y564mDb7BgzBVa9bL4LKxS5V5jRy7WLWdsUu5c5U3",
  "key24": "5GoPVnfrANqg1b3aqJExHEPUCfUQHxdcxLh9YbeGbzYoxJ6W2G3XwQxFSvPnLCZ9dHLheeudep5YQ1huejm5wnSQ",
  "key25": "4Jsb7sAXPCbyHNEs7g4JAy4D1C6LiBK3UYcu5Z8CRbcXR1QjRdcCfpteWDKhHcKrF8HANcmubBfgbJdL351qxmgf",
  "key26": "2tTVjZgeHZ2KRF53U8Yzx7Q9ku3tcMhmjfoQqSwRAxFSx845mcUKgxZ7nnq6hESTm2gqi2jMArdENXLetAjYnVvs",
  "key27": "5sEXrtrGedTeYpBTTh42jcD2vRjedtkdAkeiaKqyFtSmr4bizzvUvMjbtyQupKhckwuC3THMbbHa7NDPPainTGkZ",
  "key28": "64EQqHtgUaMkYr3abAnsHbnDbaEiTKpWZQpnXGhW36fbwnYvuF9B8EndgZs3jh6MmhjtWqgrTR7p5Sgy7mqD77cz",
  "key29": "5F7uojoCjKzCv3r2eWPpiikdDnUK4qiWa8By9H76vNtgRFBidxrZ3ApFHoiRz6z4hpRnXCUQR4JhEsD1sazTrw4i",
  "key30": "33m8rHwp2ookAtQU8Yd9urLxPeuKq4nsVGQyBVyhdMRWuAFj2s7LFy5sKqCz1vxFrB9QuBRjboqCazmBbz6rznNE",
  "key31": "624cda9p2NXyG87nJUxDfQqYnR9Z356vSGtwMPrqEbhqYaVq1yR59PvYVm36gV9bZzeN6iNfAMP75fm37d8b7CvH",
  "key32": "4UQjAh693y7nTRT7NZwMcyDpm4cpwqn1seM73c7Gi31bGbeavFyF8y4tgwnN1teSGinqr9DJHduVxUhGm9NKAtZm",
  "key33": "3Az51N7nwCEUhZjjECaWWAJPEHw17sLQcmfF7SC2jEpvUPu8BPZeNa8XLn2KNSstk5SH4EBEmPBFZT4JHi5LPK8F",
  "key34": "3MfNc4Uo3KVCaeQsPdX7mBLPuE8cmRqVco3mU7Hsj8yLBR3zjzpvQ4VmA4BbuPHKdTeoS3PtfzjxwxPLGVe6P9pt",
  "key35": "5kBqtSXfKjkcj4GNZs6kuggEt8JrP278pDEiaWFBnWx5nPKpjuKHPHdbbWjSrYdJcc7kv6aZftEozdsHnSow7rUK",
  "key36": "4tYBj9Wg1DKTLpdqij4Fe89tLLvUFngJTuiSv44oAVrMWJZXv2k87rgrjdEULx91kdsZzxRKcxoUS9EjyiThZXq3",
  "key37": "3vYDG9rAyDZm9qbk1RGuEtLtqQK57X9t9KnBzeZD9tV1PNj4r6MN1oL1s7yo5qQm19oLQqVHWBcJxyPMkv9zksd",
  "key38": "5XrpfuEWkQ9egGTTBgJ2RJwfnEcwLQ4PaSfg7eq43Fd97Acc3oP8AmJfa7kbvirUPagiiw5ght2QgaqkRhoVsqAA",
  "key39": "3ZWhM8XJk53rV4yzZ3YVmLQoc1DSY34HvBDifD4E9LoV1vbP9SVnwCz1jp1yHPwQG7bvZkjXdAs7cjWuvaeiTpAd"
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
