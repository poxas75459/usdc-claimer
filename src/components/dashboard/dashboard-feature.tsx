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
    "2YjMQ1eraykrWraKFCALQmEGPFop3kBMh3G7nfqdhUV4VuxBHDpdfZrkPNmSKH6AhqWQ5nPdEeFDy4FYbfWWunez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nm2yrVEZvcXY7W9yPfY8iXYquFTu1H2PyQ2jJiFCayG2VY2zqf4gpekUbkss97D1swq6iqyREqMwmHj9jZNdxST",
  "key1": "2MoMGQYgnSUNc6tTYcbgBZcciGsFLcCuZ9rmPVRvtbjY2MTzMXtfrPZ69LLAQdhGxwJUwaNLsj5tPefdVWQMY2g3",
  "key2": "4qYVxZ1DSNCzevVRPkD5KkxyWvvUMUNZNk5fEV1yDyHAt7CvuUSm5AKxTWBLCyboUFgMTPziCvs27YnDb8CxNWKg",
  "key3": "5vfnUkQPS92czc5cA71rJHYi8PUwy5dSGiEhirgXiZ9H7mVhBo7o4kg1vt9uid79une6XTBJrcNvoJtwhbmHMGmx",
  "key4": "2JUUJPvNeSFbxdkJS2v3btdnWR6UDPFaGn5v4QkUW49WNZmMfKLcd413mv8auVrm7AyUo1jdd2XCt2Te5aPGsxm4",
  "key5": "2y7NFBmtEeDNLDUMvb3GF38k6X6adfNBnh9iWDfrEUpvU2aYT1n7exaZJnti7macKKHUMTzZdNpNz25sWPWZs9BD",
  "key6": "2yhdPLuNQw8hSqYXjVQwjCody7vUr2o4d2ZjseSkJ3PteqP16rX8BG568ZGFsfUvwpjBDnSRgJQMXWQe1nwCrCbZ",
  "key7": "xTUJmNWCArGKUiUzFsqND1YERBvVj5mcXJrq5WyHuutHWtMUQ5pn9oRdWAw9guiSGNsoFMrhcgfnCmmdULSnYSy",
  "key8": "r39XC1P9vcQeAKFKUEyzUmHEprb7F435a39jCUP4yppHLY2nrRjJeRPipRmj5djZp38jGfoZguy8bPCvEgZkFJn",
  "key9": "4scgfEevustTtSBNLibLkUceXyGc9pVXT7GL1KYJSAhrfctw97BPYypXw18oxZ5kDbacLFyawEtrrfxcgmxRdMyb",
  "key10": "2jHQi8yDRXkHcfL5kAnrWtdLcRHnGnb8GQ93WuRvnjtdMfaxmHcPKFt2s1msEDqSDB8nwV27e5wztuEreW2iXdHa",
  "key11": "2NWDLrRnwKDmmgGCqgvps1GFKfZaiBJWNy2UYEG3mqsAXtHSUoiGZUcw2FVN5YcaNVotvux1N7S7zvPvtXFXhwyh",
  "key12": "4YEvmbQ2LTRy75AGhWmt6cGEUVCJHVvucMwUbWtwSwKnzbQ9VANacJJ1QXw45j8KKtM328a7qcyvVV1Aqwxdmetf",
  "key13": "5ZutBvdwwtboaxRVcBFnuRqo7so8wf9nH9WBYGmm92eLoj2Q7VYt22YvKZBbkW41wDhRFKfwo81rWoEMF7NDRtSi",
  "key14": "4R6iCfpJ94G51z7p1HYSvzjhwnx7vBPX9YgiCXPXJMSNGi79R9iSAEV9vPEGsugKtpnh8BUnidhcdftXtd7GPwvP",
  "key15": "3MRTjNt1ePyGkQgFJ55rhTqv4J2XZE7EXRnZa5rZcAedaMuvpgAJpvohpneQREd8K1tZmwER5jQitQTdAvdNSxn9",
  "key16": "3XWieXXHR4xGKNs5eWEUqXDzzeArTA5y3qBF8oTXroAdNNshnWC2dGXieY5hHsodwpqaLKdYYKCSDMophq8qFNNE",
  "key17": "4XLoUYi9FAvG84PBaHz7iCDZHKDdt81QJWtCFgDQLtXbEZdTAh4myCkyFkVXWfCssy3T7YKeyevTKZA7KHdJJhie",
  "key18": "54Mi1J1G6AgQUypFRFFuECEKxQEbYt1AranEjh8nL3c3gZWfFPypJsypjHGaPA5Q91uaXZZnyZbYE5EP8twq3TmA",
  "key19": "6BtZLqdjmVhZHGY2Sjz7jGvZEyhUzWmQw7k3ZR71sFhoiA8EYRxkgo1ZSx4wzTQyZTCRKTbN1ipaTroYj6RLW34",
  "key20": "2Y1qjisj5L8nDGyimnxRsWJAEAx1BKQQCFrUqyjZZiHkEfkr5jWA1vRQAa6KUNhGx2aTWB9JaQ85XPkNcfaKidPa",
  "key21": "2L1as3HbhBeQS1to8FRBawGnpdPHkYQWEMdUnbqMqmYSjUNNnFAjN2DcFKVVvaaRZfLZRAeu3szxygVfJjxdJthD",
  "key22": "tR1eTjwerTS1TY1tWLxo6q8n47MugjHoUCFdnyjsviozDWUY2dAoErN3WNki1PUXYPudqmY9n6pW3jgbkiJcRcG",
  "key23": "2iUeXvZQeMNUpELCRe79AziWsp9KRiyjiDTxLeEK9CHzdzRCJDdMEdedZUKXxcTcrmk8xSZSvQBj7x4HhCkNWgTb",
  "key24": "5ckSmuXehFDMqLQRC6AxKiJHjLFAojk3HXnhpCzPvdEr3jAxDPPShqg3hNWpaWG6PP3xo6aka82dWNhaDyCfd1xd",
  "key25": "61A9xvmmVYx6vASAJqKdsBEoHj6H1rULSp3CBNJHGe2GgCvq8pPMNgiUgdN6yU1z7HazCuygqBr5SJ228L7DAjyi",
  "key26": "4poo6zszivrHyaxCwLdmprP9fFdEaWNwaZ3UEDTqRUaW4XmHpm7LLaVT9QLoqMe2BFfnAA4CuA65pkCQdb2bUq69",
  "key27": "sgefCQVQhEyca57YymwZcHGJuRS1HzsCvXLDYe5MQSZu1JFnHWKjN54qutzhhjtjS92WWFJN2XLvVnpUziAKT4M",
  "key28": "4wkteErY5Dw4yJEGqsK48BT9R5dxFoZqeBJJVYAwSZJeehCVf6nj6gbkDRFf4Qatd68U67ToM3ug421MgRSsykZF",
  "key29": "CRpiaLRJAvnarjT1iPSpH6zjP7BJUR8BFVsuUJKMXLAfzyfcoWRBveBrJtF2gxFJT4iovNupTqhSrkSi8qWeiu9",
  "key30": "2rqYXde8CBiZqd1ZfBJZQihm9JAJk5KH7hERWL3VAuGE5XR4enCnkB5FqHEV2wwep8FGJDt5euJx8U1497xubkNe",
  "key31": "5MeCMtLTHHLoZzDdhcdak64ec4cJ1g8iJAaqUiaxc1jpk3pjXZbncVBZv2EDxKxUJXxv9pdmsHkbgUWKhMiz6oVk",
  "key32": "3x1TrazcyaphVrw1aTYdfPq93Ca4fEug7vv4zug5XgqsuGFDsgcHEebJgniFukdbCAF7XCCnRbR1sbWGLUTAg9kA",
  "key33": "5iSPa2qfH6vPop2u5eufVQTaE6Fk1XtSuEuRck9om5DqGeisHFQSV5jRZNGHrrTWCyPBsdazGrBofJEWxmWoBiq5",
  "key34": "xAE5iaPdbfaqCZwwBakFbGXtCCuq7nee8nBEp9tvyx4SgWPDVU316wCWAgu8YMnbmd3Wwj44gUNQ2QaWAaYY2SN",
  "key35": "5JeKVZP2Zw5jpjMeRQE9yzN2LRKwb87LMKVaenVtMZJ1SqW2s9bqMdtKRb5aYxb42EyRDVcYfij65HSGN8K4BFGU",
  "key36": "3JjseyyG5Khpxd383t5JSfX5fh4EMzVhBkurHy52zyJzbetSNZXCZ7DRSD2t63QdreyVzJD3gTzpNvbA5qdBcreZ"
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
