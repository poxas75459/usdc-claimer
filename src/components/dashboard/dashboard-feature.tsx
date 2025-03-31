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
    "3LBZugeLVWPvA7hwXcRdqhn4cFRJsUd3jDkdX3DhtTcUhxPRDLzYB3DRjn7oc6omWZNshgqGwGuNKvE7i5jqZBGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HKrUqzoQtrNfzz1L5NbtZCwSLzRN9uzwajBWjTCVaAeuaXGV9Je6bx2S2DcZw3pKF4RP5yM1xGZEe9LFtvyEAZ9",
  "key1": "4Y1LZviyuWqPnbpH6ZmK9bEP71xEo8y4LVXPuT4T2H4bgpcjTBevXB4pT7xqjXRuYyxnVmSTsUtgWEnHTmm2fXxf",
  "key2": "TxXscMvffAyePHseTkTEdPSZTSqdNpu26kXpNQk6kEkYp6FqDsz56uNoXpEykXWPzvAqttVhNENiZYNtAG9sBUM",
  "key3": "SYWgALMD3oLikwFRrxyuD3gnJzAzANZSaNfzk2jemW1azxwEhGZ4KxCGrwMGLPBDV5ACW1v1DGRUYzAD5fkuiz6",
  "key4": "2T2Q4b12WQDWVJ7rN6kMPybZQaxUPqSwHJmm3ana3ZP3xVCeZdhKvNsrtffdVShTsEmPX6V8HstYYv6XEk1ahUs5",
  "key5": "2TfuP4qsbfMUkSfNwaddEtusbcCS3p6PAuVdhYYxWmh359G5GxsuAVFUupwHAzD8zZbiyRqkHMzpW5FVTHSTiRoF",
  "key6": "4GuRoffwueVPHd2msFMX79jh1hoWNNrHWhgVodSL3rDddUua6ZcNVd5robfHJgatq3nfLWgaYyaLVCeaLCZhz4Q1",
  "key7": "4davtMRTH9txRviSjhdyLDcbhwLWbwZpGzHLDG9PWTJrrDTVD4VMojp2vU6Wj3G7xHHhCcudP5h8ajHKfPQhoyES",
  "key8": "53g4sL7kQkMz587bhY7UftiFcuq8eVgPyYF7gKRUxPTdqYcszM1WLJzZm75U7amveikfvqXsmfL6HK5KbX2KPZ6H",
  "key9": "4HaFxNBmZoiWU3c5i63FJkx1XPzAozzHriiMT1HScVfp5gHDH3cMiSMeMn7dVb5PfCePVD6HPskgMPTFZtdM6S6Y",
  "key10": "2Y89PaJZYGA8uudWAGJUrJgodGp45NhK8oL8SGjEpVt9YjVdW4QfFAt9NzdgNSNeHE2B555r5GMrtYYKBN6ZTCFu",
  "key11": "4ieWRsxG6vvuobMCHQj6icReFio7cx9DoPnYU2dxJtpXobBs2DaKjNvTSjcWdv3vmzzYA4rfw2k2NWkH7ngxGVNs",
  "key12": "hR6duegWSqXAoLDHHHp43XBqMSEgWCrifovG4wFozmqDt3949w5qgTz76bif2gcA6bkC2iTE1GeLCECZSZMsgYL",
  "key13": "z8gxgKntHWR9SqP1HSTcCsLBmFXb5xe4sZw5X1iDWdzAgfLoCMgzBjMChWZersqWo4aRDwbdqo8Z7e4W6gDLB7V",
  "key14": "5ECwC9CDSUEZpxL3bLW94EXbSDaUroEaDTCHec3DUy2e9XCfe2dZD5esSZ62kctvz9tj4aP1PGsLnoR1kzzxQ1A7",
  "key15": "dvsvq2GiBiLCXLaH5tDXusRBT4sR11x7of9mMTThHxtwPXVgHrZhVRrKbKonajcBjvwJES2YfrbR37NywyT2XAq",
  "key16": "4A9AkuLaZTF6r2FP4PKnJZRWRJkpSHu3vVV9G68Kv2czwJh4yq9Z4bXHxySMvhLGnWKumqPf9X91gEDdwJ9H6Wc2",
  "key17": "5r3pksFmESjWo15tQvQMNNUAAr5HUYToiwXSq2DU7nDaDepfUWtZViCsEHiC2nCpCraHzqCwDHPweTsd9Cq5TfDz",
  "key18": "3t5QesKLHYT9siphr56JcoGnTWdXWiGDcZpkdCrMRmdw9GLq2YjXeSGyvnQcDMBWzRiTTzeZ3jfAjzpT1eP5WaDE",
  "key19": "2vapu7XtEKBeVpdMo9Lyh15vYbvddn8bDZ51e9tqv2NGWXc7ayHkEdNNb7BhUiVM79QwiA1V9xPW6QFEhEEtwVua",
  "key20": "FgohKV9TJq3oS8Va1mGtbX2QZvo9fRo2SEQkosQD5GNu97o7XCKyjJXFopdAKo76kU9dG9LSKmBFeUMDfPiBJpz",
  "key21": "wVnFxDGXcXpZqiTCtGAY7aP166XWF9EpBPbC7ikJg3SVozk5oCzsvQ4n1JszJ7j648i4D4oa12PY5AuM3teQLdZ",
  "key22": "3zdNCcCh9WzeA8goLUeCQHPQezA42TJkNmV7qxCyBDXNj7eT6aUF2uwq4sx7L8eraHkhmhAMBmZt3knWNqhU6yTq",
  "key23": "3k5kJb434LZFRMC2uSfvixNR7bsSBYh5MGKKzEbcACFy43GznVJzowxxTffbYp5ByenUUZrb9c5zLn7c2Qz8ZaxQ",
  "key24": "4e3rNYseNi7swLRggLqWEpwnBjYCRdPJ9GcRCYNghz1CY5UCEtFFxovqdRMsKCF6QSJgBbnFAu7hJ152hdn8qrjf",
  "key25": "CyQV5d83tgk5HGzin4py2GvNZ3ZweNZDcTuRkrAG9QqYr4GVuXC4G2T8urYwMmeDZA5Lx8fQLy4iA3MFMdZUpDo",
  "key26": "55HMfMMntPAGUtQRaeQ7DZEnFwN2WtSXPfnNKRYNBFkzbky1fB9Vczm2YfPA8noRi8qGL17rA4Dc5Arw9kovCRzz",
  "key27": "5PRPiXSsJGpqq1bCE7NvnYr9MCTw9AF41Ntoct9WN5WXU4fXUkTJvKfuR2GjA9nZBee5gg3ccUaZRPS9FUr1L1FS",
  "key28": "5C8ov8c2u3ZWvhaAaxz2rEoNAZT39xpsjLyakUBKFrgA5Cz3fs8aWkN9gSf7Xc15foJRtNAtqY7TzpzuybVkvxLX",
  "key29": "3Hq6TDJExCT2qQjSZrSyiQhFBtrU4KjdREJRJGirixS8StyREdyj2y3s4KZNaLQ3ytFyETttH97ZdNcSQJaznqjH",
  "key30": "3wm3FfCKbaxxBd16nHXRvnC2uwP8KEM8WdknaPEXxKCr1rmZYQrbLCZTat2ho3Jtsw5q6G5XhCsR3cmHMeAavYKH",
  "key31": "4yeS5mg8QQGn8uwpmcC8YGY6BZykY7eHwCYzC8FM7f7sfHBCB8cQj2uGAG2ndUA1Abcb6BTbCoydA54ksvE6KUae",
  "key32": "4qGKjFSsVz3sw4iVeq48j5DR9FK6Badg7VeAMn1tt2YsJdZhZByXrouqnRSeTKKL4sHugRaDtftHMMpMKSLb64Lf",
  "key33": "3BRxFLfSV9hXgLU9LzjyUigy3RuSUWwVdZPVtdRR5QCggvboMmrtKMjKFxe1ozW1cBvqob1bT1V7wAdMkTaf145D",
  "key34": "2D6iixP9NXX7eh4SKT7PxQ9R9pEF4jsjx2tPAKzeBb4zqPfAvYgCJ2YPoq47nR1EjmFTXvqCTunafViRKJhbT2HQ",
  "key35": "2uNNNyLzERagHB6LVgjii3fAQe8bbTNkDQuXcmfVKHE4C7Rm82djoqCNyD6jbJr2T72gwZQs3ovEwPEghtTWSH3H",
  "key36": "3EQ4PKkajkxQg8Qrboi15B6dUueNwQaytnfvhaeXBfV8y6AwKGEv2eBRXUy7J72Ck6s3koEbcacDwit29a7aMGc1",
  "key37": "379Uog7NnwCrPc5wf6Y7PKK5DQexKRXyTz6hhwYDAG6ZQB2wX97UVjZotXk5j9BzXnVs87jwrB9HTr6Z5SoGrnjG"
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
