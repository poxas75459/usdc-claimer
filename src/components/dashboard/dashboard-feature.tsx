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
    "3acn18LSJJHtvCgGaP14xyGbF19FZ22XQZUf4oc8ftTETozVskeNRGb2omyE722sZngSNoX8oVK8ADvaKXepZphY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gjnDiTX7v7XQJK5AotpdCYnGgq6N35hAs9ghFD7tR9vfG28MHf2gdpfshuoe1G8U5MMiVBU5KNUNWBUhKaFVeER",
  "key1": "6f9V9uLLK8uxoquRiiu9fsBo6E1eQpuA15mdXtSr7Luvm58AzcZWuqZuyN9AkohFUdMvbyKk2bF8BrQWnnkvUuL",
  "key2": "4Tqvua1gvnxUdQm99N2UZkCLg5EQzzd3foEgaCa3TxhP4n7jej5CyyXw3TPshaFeELWdD3LGw4Q4vBTKpRqLmCV1",
  "key3": "aSyQMMEULbot6gbTkqNH9WrF4DPCohWzAc8y2FfWmyAACVpY9jFhqZRZ2UHX97tP1JoHsrY5PFRjJ3MqURyC1nh",
  "key4": "2LXj2haQ1ZC2hxWb7pUJYYdKAqYJ9eT1vDjg1FiHmJGaAe5V9DuVw1E36DsfYVromaBPAGV7eHze6zXYntQ35B58",
  "key5": "5E4Pyp8Lv9JLGymRgUaTX3Hn4mid9LMTzWgR3232uxLvWz4bqv1CkqSgXgsRSusuhvoRHRGqMmo1RhW5iH5pqRh",
  "key6": "5fw7JkTBPAaZn6KgLnKs6cQ74s9Et1gokCHdwFLUcNmGMjUVF9cs72ze3egtnT6uEavr5FUqHCYMx6et8hqSfgtf",
  "key7": "5idSTqifzJhtRCnZUsHEi4g1ojtUadcUHbD8FGfwPBdGkTSHTz7cxN6JHA89bfmTmRXE6JGA71s5kpUuWqVkgpg7",
  "key8": "4X1Z26Z6ehnF87DuWozmd4qU1cfn1UKVdeASLBw8pEqV2PLdr1CL1PDwuSfxDes98MXU8MysokwE9AbBQ3kCDg9w",
  "key9": "3E8hPNAsd4yoWu3JvinwkgZjTgSiWG8NR9rSw8G2XoRtZVnwJEvYXtjUGT8nnY84TUboe2W7sbSEEbuJNLjM3tGA",
  "key10": "3wUagghxw6m9BqQkVqcyMgYXChC2RAFoGCPDNaj3ZbVcd8Naixp8fq1cmdSeLD21TmY8j5sQasjugJN9YhWZksry",
  "key11": "4CCvv8w1qYtNeKwGLVtUBiGkMpPHPbNRP9KJQ6kAaKf7haZBgEX5gYqLqHkc1ro6LTh8VRbSoEYWfRWYazpVwCFZ",
  "key12": "3wsqDtwzQ5SoEFq9Uj3LFAueUU6aE49g3GA2tja76iwWX4nYiWKkqvfeyNN8M7NXbaucX3wtbswaX1XYyBoTtGTi",
  "key13": "62X7krhbAF2v1qzRJ5VJG2MDFeeWSAT2oTkYHWknZ4y99FzAYZFBNS56JLnR3fiQMLXHKWGP4Ck9k5AWKjcQtf3B",
  "key14": "2zgigQrJ1b1CDX1bMV2fm2bGQ45pcYRg98bX3u8zYxNXfhkUbqDkwqgCZBjMfd7T9JXxjRHP7xfMd5pSTnRujiS1",
  "key15": "4b1jEbXes9jHLrmJqi5d7NndMzJso8TTiU9tR1wpXUGYDZT9GuQgGHz3TdNruW6Ht2zdGKMg5UTwbos42uFaAx4",
  "key16": "PFV8mrJpEGgdghA7Nc7SAwQZHcp1yRny6J8ThUjfKiWAVxuxpADiZ3dP3ZUWidhuAsWUci2WxZ5GShUF2fPQ1b1",
  "key17": "2LKsizNXfL1q85hHc5NoCM4Xjx2jqB2D2FgqgJh5WGPRwkmnZAdss2pc7Ha51mjoUmpnNVNHRtgxkVoz8cSqrCbu",
  "key18": "4bM6bVGFBcqQg3Kt92emVnd62FeMAdVbDjxgTDmX3xeP2zi98jc4JyWMhbFZ5KJGtdTCd6rWkDbezfqj32ryga9g",
  "key19": "2NugVmj5oEBxjvKDkjoa27kATJLYRLtFZhtDyHcnwhvCxxHfaHvga74KSX5x8FWvfKhMDN4ahcLrTB7a4EDTHV1f",
  "key20": "2ZFadfsXNEFjbTsaGrnBAQ9MjADTwHU9Ao7uZ8RkLrBf8g4wXBQBLePAk1BZy4dgsTG7uPC3XcbBPvwqRgR4m3na",
  "key21": "31Hb34JkizE7XEgaQLjkpFXez6QmxDEKT2kywynUnmUwTMkhUCmqdoXD8zLBj4uXGKTBHNVmNtuQyuc9grLvzs3q",
  "key22": "2fBW1ujmGDNWccbu1cLJPzcea8f7RpN62LXLFdfhbQMQQNCfikZ8FUNdLzgnTgyHi2GzcLhD4UchNw3EsoyPUgBp",
  "key23": "3PY2yr5iWpd79CvZBddBfGm44dFi7qpBB1DCRW1FibJbaiU6irTsRpGik9SoysKvgq2y5MciT8WiVRi2risZbhLQ",
  "key24": "44TEF9JfrfkbZmVUDGuLJVDdyjC9FMCKRWBSBiWBU9qdQJu6QRZnZiGiZAYAmbPnZZBrDbRiLmMqsy7X7UEx3FeF",
  "key25": "2MDBfxSRNdZVgxVWvefBh57WHnPoosBjG8rb7ZaJJ1J4GKue3MPHTFv6vDMDK6amyDKtFEyqChvRLDZD85L17Rt5",
  "key26": "Ub9LsZwtZrUxP3Yv4iGvjFigRHjmv4E2CE2QbMgfpYCLXGZj6cWijdMD3d8tBkagbbJ1fZJfeEUGxaCxfpHomBF",
  "key27": "2X3p4tAv8VLJgjAb5TqvEFRNfAL1o9ZJEjr5E83mdwKNthsWbmNuoZPDGGgBuGa5yAtApSjQrNvNPHV3B9GRrxRk",
  "key28": "519XibUNFhG4Gbfak53kurFkKiuzP3aCmXu24YhR53bAUwdXWh4UpEdnbrPkenaFm4tMT2QoAVkS6kLdk3mo3xYu",
  "key29": "31VLaMPbx3VqxY5vLEsGzqxHvZcwsk3kxCsorhLFunxUayXEcTFGVNCa5jXTSBDNtR1mbGT6fKrGhcNdUuHyXbXy",
  "key30": "2nAa4Yk1GQDeV7yjSaCj48PmrUAyhuoMwoUCvPfVQNzCzdwGG2k4QYGeFzrYRj3bjRCasnKTH9iRPtDUsQCbA4YW",
  "key31": "3sDBz9m5WwPrWezs7fhAN3RxEGZDASocRMBQVfkCtq4Cp7vDsrqarFJ5Vacjg96sHY23d75ajwVWhQLLrA1X6zCZ",
  "key32": "29TfXs7GtZdc6B9DnKXpxkK3YKHfeWTxbWjFQw15z9766AZdLzF1nGHS62QuVwwiGJWiogkuSwWXxkvrPP1eW4jJ",
  "key33": "48oicM4GQPrGz8Hvagwexk9xUBo8ZP8C1WLfFDz7EWaQS42mbcvDnbPSneuouKGeCWZziTvFjxtFnvAdoeaYWH5r",
  "key34": "5mjTLqp5wQvtUKLtCcnHPAEpWe7bnLdDwKy2epi2go7VzLENLiNfr6NzxuVgMrD5j6MMp4Lmbsrbh9DXzey2Zkfv",
  "key35": "38wz9zRdpVH66oNr6DW794Mo4tJS2bh3fA5CBUwMbTx4MekUoBLoy6DiT5tUkB6Sg8TLpHg1n5d76ka53iLmuTyq",
  "key36": "24xHVYUWfLBG1Xhju1URELHyc4n7dtwrCEcQ6K8WLbeGKEprNAboNC1ztYHZwbAnFR5ZhUEjbUEEBgYCj51L8KW5",
  "key37": "53k8CZJ1nBQkzpgZ2Ys9rJfxeZcme75mzmVBDSFXt6uQnRHoenQVQu1GRvz2BAK1oP8Uf18NthMFwJvUVqxUVv3Y",
  "key38": "ymSWCoCn6PRUR1JLnRrB5J13EjGucVoRYhbg2Rfkv5ekQDeK1kQW5k9MjNvoCR88UTFaDsr8863LF2pxN4oxdZK"
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
