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
    "3t3kuCgtZHKQNa8P93GkLQa92YssCFf21YsDC6K8ij4gGDYeugzVMT7XnhzyDfG94o2UFA7YamfaasVQGvN4S2K5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66TYgCMAXgzcdUcxJsm6iZMPHrGkBJ3jwPkbaUvZa1S4HMm3ioNkaCatijdRdjY1YjqL3Wyx1GNids5w7AJkHHtk",
  "key1": "4R3gjKBhxQsScPbZbUTxkZxy78KQp1aNYWxm5Jy46mxqL5svetuzEMhSuXTGnUxu6Unh37x27cfbW3bqqiWkUadX",
  "key2": "j3T7AC4GBQqq78XYqufURPbhGdZhMDByLfcRb8dqoFQrHzuekKJMT7RjdWRUfkVQnsdGZZWvHDDoPzsxgqMWbSx",
  "key3": "2TombkXPuhnMYECf7ahNszwCagP5CwioffKHjnGoQUsCud1Bz1xt2PY7Ymy4TskEJMKdPGvdPcHp9B4s5w2uP3ZN",
  "key4": "65D6b8yfkuG3JiyAgWguhc9Af8ccbjn6s6znwzdAs45AbDbsv2aesawFEdPEcGiXG3tTXQ1m8ES9dr8FtBDpag9o",
  "key5": "3mrDxYnRp5vJmKm53BGmtJcwskovc3TEQ8xFNwW8yMCW36ZGahUfz6KxLofMVYeRHRDTiqwF3qepxoPcDbAD9a8r",
  "key6": "BDaijhwv4YXuhfFN58ExUSQpsuUjLpQx4aiSVjgTWDpSg4wB58e6T1rUuBm7t2t33hf2FfabHGytBB6K8hQmsba",
  "key7": "2NwhB5wJANhn7aR1GCXKBBr2W1k5GdLQ8qnD3Wa1PMCVbxCyZjUyuSNEAYCBktVxUdaCJq11n2ffQA8eb6agSFFT",
  "key8": "cA1ZbmVDAKy7F5pQEYr7dAi2EZxd333NdkMHKF33bsswYGR7sTmUqDkZWpMNCHUqiBjZTf1rivjBTkk5Zeh8vX7",
  "key9": "pty1RYSEhoipgNig1zyq9zvjZiwgo8AtN8U9on7RnT8bzQXS3n4yBPX9LbNs5JoRX6ABFJRzijUUHr5quyoUkjE",
  "key10": "22y6k9sdQaKaGAZK39oyDugW8v5R8mkoyKxgsydJDJ4jZi3oc9CHK5wjFyikZ153Enw8BJX7ms2TjLpEbJvvgzqU",
  "key11": "4ZZXT2oUGfWUfhQQ35RKM7gzHVdUjHXvkjYWUB2eAyCtc1PwqM5dWDsxVSBvPDcRjomxEjkg9XsdvcKm5Y8Z8h4s",
  "key12": "DwJzY56mDa52mY76DzAobzA8ufHoPqduuNFc1DKi3dvWZL3tRvd91UVKj8SDwaRwCGTsfbG3iZTHcGRc7qhKiAo",
  "key13": "nefVFwHHhUbkwEpSUGd2AoeRgHDnU4ETzWJxrty8gaFXpr3xFKndDVvSTkvM6WWNo9G2UiNkMYdcCQktrC4G6gv",
  "key14": "3VfYxp49cSec43TkJCQ7DPJSinq4Qg889XJgPNiHQUCDRJQ1ETa2t7prAUZvdvEoL9zTaxvfN7xCnjdwYZ8wMCzm",
  "key15": "2thh8NhdnGEEoXmtCSjopUfcTVDt7MHpQKwXbWpUZyXdGLgMQyqNBWUEtFF2PimUkPwWjqJZk1ZdKNY9spBiVsgR",
  "key16": "5vSTzf8MREZvK6gZbt2vig2ki6J8doR9pASJD1jkUSzNeUohV8q1pCdQvfCpLh4dRgeJLbQmeg6MR45ehHbTUce",
  "key17": "2ESeA1R1WipkuMGnNSMRVL4tB2r6SeV6CKcqj3USmkhcrECuNui33jGYKdLUoyW9KGmk9Diwa8yiMzNbPzTXHs8D",
  "key18": "HTzdeWuga41sCSQ5t9Wdij3brmMc6Li8nwRisc2CCKBqKsY2wHkX9shBJ9iti1AixpdBfYJXXnEpGWRwDZ33uUA",
  "key19": "2rM5tMsmMWuNusb7qSYMm1kbMME9wupHnGaMUwqSDYiHXa3od5xMRi37q5incTWK213CZLrx7jaJnkYoEDD8yFnY",
  "key20": "4PBZS3JV1mWGnt6DbEkwe4VWaVYcSA9EaTcC2VwTSqS28CuRYwHz6mUvrKXikZMnp4KHdcSnPz5esazEmYfDjRrC",
  "key21": "2ucq6zrUFUKPwpwvYeo91gT3exeYPNq8JMDoJ9vFZdumGYF1QdshWEXj19T6sXY4kLx43MarHELbSof7wg1BeZK5",
  "key22": "2AX9C2RPS8BYj4JrrfSjvkvCejQpaNgyLGbihyxjdQcuoeA6CuLGUGxWDGYsZwRb3DW9ZXYw5nj2pwqspU1qtnSN",
  "key23": "3qmraJpkGFsERykoBErQrv9m5moAMzgr2xTVfCRWBSoGx6LTD5Wj6fWsEyv629iwgHKhRRWFbiv9TuF8TU4UhwYx",
  "key24": "2VTCWoDfaF9kdPcm8uVLNW4LD64nYvVwuLcqPxAGZrfNgBf4auRh5Wmez3rJy1ahZ4w8W83HkECAsWje5sLH9r3M",
  "key25": "2X1uQxyEwfTf3dAWfawB5EXU7mGxTYBiMwYJrpiQMePLFf3GxgW4YHbF16T6Am59rTXggbZYmPAqTiwi9rAWyeDz",
  "key26": "3u8pTzd8X2AtwKJPDidX5bbtV7Ka2iJXigfUsNhRqevDfVmg7osnFNaoMJmSmDGgdZdkTtKbTY3SgSM1wTgZCsJ4",
  "key27": "2U6GMxYEmgj3EEGzma5WLeuhYU5uRgDTLKXf5sfs5yhmjLMC1nsLF9SB2xo1YCZ2rVJnHUNMDP6aBDs1nYXRQW5v",
  "key28": "uKPSfCZyAmEHoMy7kQ9yJTmNUNmxvzrVEEmLGoVeZ6WX48rA64gWr5GncVoNoBBnQ4Fk91gewFKm4AWM6kpCnFE",
  "key29": "2DyYh5C7bEFit5PGVUwhN4cVhGvem9ZRKfJKrcBa1YyLjXyyXzARzJ7ZPX6F7WjBa9PJsrFM5eWitwv5DuxgLTQJ",
  "key30": "VjbSJ1My47VZs7jpBkzGgTgJT7xDDDaTTDaoW8yVzN1PbJiPSetfgLQbW53jv4V2LRecVRoUG2QCGerXvj26B16",
  "key31": "56yZCYc5QGYUhCbH4D3f8upvueH5SR4xzQhxk9fCigJUaM5DmnWKCWfrwxP8cj5FDLGDXLbdME6KbEYXxCNMnpep",
  "key32": "4iRJAY5PdbCf332hGu68Rw6gQM6ZxzygjpZEqM2UQoaTqLU7Pm3QDmrkBMoK5fcKrHDnPUkyGJ91dfn2huhadnJ3",
  "key33": "442zkdNuJA5gGYbGaeu1JfXBJ9sQJXnahDuGbroyGYrBZ2MYvtrXNGmVathzM51gLmvDkoeZUwsoE9PWeGL7Es7b",
  "key34": "2wFG9qpCwtAJ5uNqpXA6i7FvUH7koYuCKTVpHpXWJTZ5AXQm4r95u84fB1pVSPG7eHWQps3RCw4fdf3tM1qBeh65",
  "key35": "2AL7bm8MXzkh4i3oshgG9znbvo8ULZPdaycMU3V3dTMFGxN24nBwsJ8rhpJ1pVwDm5FFzzkYX1GT5Ki7S27wuAo6",
  "key36": "P1W4CmZ6WpqjhideKiRQJrK84bAUwTx6MQq3dubC6GhoPTL1Uyr5kYyZGoM6FKgdn7kFSsCVk6MJwFsTLR9nWuc",
  "key37": "3V6XBGvwHcpaK53yqCvRUHdMTvBKLUw172ex8w2EW9dL2psuwKDsinsZKhgVUx872Fib2fayNRtMRviCNTqFJ4ib",
  "key38": "26eQc9WebFAcf97qZQiPCaG8qNtyx19QTq8cPkVtRKw9rnr1HSkZoZ9aVRkLa69Q7pTRDgrcAdo1JGfQuDz9WSDC",
  "key39": "2kFrJcqhLLPkHRTUCEHM39UK3ULqy1sxWLhPhuzr7Q9eMfp747MqPP7w1mJznRNPViJit5BU85PYFopLwmwuGzEg",
  "key40": "4tsP9ZYmfRQWcTfHz2cNhNHpbwPhivBnFzTUYmYYxNNJjmZTec842gZdiZMT4MutmT4y72tKjQ4rVonn3i6kQXPc",
  "key41": "5eTY7YGEpx8FzFFq7KK3Wvx5uA63bKhwRLLfhirw1KD62Qdn64oxd8LndVTNUYV29jrjnouxw2sxenWgnstNjahA",
  "key42": "4xt4Z5eN8rzSvXhjZTXNfWNEtGCrVGAnAhdFN97YwgmHwEEYaEtTsUAn4dsSmiXJMU6fe9nh2NXy1GJRCkjLkpzq",
  "key43": "4PfV8EHf2yMwnwUjT2DH6iQWsvgD1WuSCzJWKbHYvLkxu5WQhjxYsvH87ZB2QT4Y6gNjfZKEzLxsVbaxChLDAnDH",
  "key44": "bjML8DZfxxGPfzFF6m8tjz5aXzQAtQVSHsskfVsvKS1ZFXbYwNXEhHx1bH9FQ12PVtW56VoCBL23uRLkHazBpPR",
  "key45": "5ugvaHsPzbaDajvQtdB4x46WFJ1QMe5AJ3wyKsYVuin5MuoxS8DSEZdMtM8gWQBBWkNEtUN4i27b6ycwxrMKfQ5J",
  "key46": "YLfrXX96Qaxj4pLuxrmyMiJPQNSHima4WKdb1HLN7okZS9B9NLiy8NCUXguR86aF9oM8vcjZYrjSEpMEgoFoyiL",
  "key47": "4CLeg1dYu6cTAkVzEgeLcyExsCiGb7cwvnWSzUjrU1vdjhyLSiyFfE9httjhMkSJ1ze8du19azhxUrphfQjyf1V4"
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
