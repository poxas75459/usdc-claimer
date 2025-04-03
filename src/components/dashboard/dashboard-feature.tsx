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
    "3YwczG55Zea4mXEH1tjLcyzZ6TEGh3tF7agZ4fsBYTsRLqkufi7A5mD9uKvPF8VEhEEQDp3QMVKeLi9gBqcp5xtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FvJNQ9LDj252kRPhGhYcxKoZ92jubZ9orj2xpjHhP45WuLLabeuDmGchTJaYHDpyngPZY8oXomR1RaERgiYqsDJ",
  "key1": "3kiz1zhjEhA6APVpW3neH1CVwTkcKCfJMW1zV5j8dKUzZP24qfu9qu3f7GSg2uxVQbdtmyvt6D7wH3cB7ePb6k5n",
  "key2": "45BpY4Rq2CPuxL7dedKFb1LAjtN1MQVviRZhrnfiGWAejedERM2r5NxqkD1zHafFmaHvJWcyJo6n4bS4HbJeiAM8",
  "key3": "5pgJ8XyrRH1xcbnb7ZBaXHkRpS1UQANprch62gN3ezjxtp6VncsGQU4HgkHeaudjDf8f3XzV5gjau97gyfx28eGL",
  "key4": "2pKqrBGzDxtbkyiNzEKW8ruHFSa8MZojpynUN4UPc4oJSMdgbgeWnhNQpp2TUCZQYYdtDbU2gS6oX4vqKz7izctb",
  "key5": "2hQSMXSuvDn28B2PA9SN9VsgDWn98je3YYnA3keR79S8xfVMAXepMDMSDzyVcvSTU5iJzzEWiYPgdKkmSNUSo7oG",
  "key6": "4tSxC3hfRgP7e78yoycvGMjGK5qzDtdNmhPXELcn1Dx5fAJqyTM1shrRFRPQfGqNBjQpHuMsdWqk8m18Tg6Fpyy4",
  "key7": "46D3vh6G5wwEqy8BnLL1Vz1sj6qpCE1oMEKz1snFndBA1yPZWzmaxHY1xXBUKMHm5W2NFgegbkLD9dF8PqZSx199",
  "key8": "KMPXAJnKNZk82LsPq8hwRz4RNZV1BD7kyU8qsKaHZnKeLeURrC7HKrqstg8eFq4R8hPfy7EindHgoBiXcsqwxLb",
  "key9": "43bEnP6N9D62mob7BhCAGGdYEei8cWoy6iaLZxB7VH7VTqL1E1tohufRk5v9A3ZMdteAZ9HpVYCjaQZCMVbYK7Yw",
  "key10": "5osCsdrtbHS2EBe1KahHPh2zUUjfDAyr3AyNaKTAgfy3mjMwowzKVVbB7QgZopNQK1ZVGXoKbTjXj8w5pYasbdLJ",
  "key11": "23dGUTAFNj4U1nfetWb3gMQ1SsKQGwh3qwCZ85N44DcUJ2bDFJiY9MLs1GVFLefxALziQLhjkWvsptcxS4roQ4Ma",
  "key12": "dLdGsoCteCPMdiAQFUDRvRRaH2Q7mHigo3dHjuqcv2KUkXFZ6buqTF46stL6aNeaSoKrnRUD7qDDbTdMtcn4ESb",
  "key13": "24kvQqbQA7cF457aVyCx2WVtYcz7Yn3c2NrB8ozsgJVZHfUF53oKPSmnf5w5gZyCtj5g4kzsqhc1UefzMkjabSqQ",
  "key14": "4MqgS9Hhq9jusxTsksGnwLV3RGcL5wiC1pedMdNVazEeeAc8UKYuCtpoaTySHrS8bvGGFssEc4TyuVtmh6Dy7B29",
  "key15": "1UUcfYaidcp24sVHZZcjG9KtzGqsFn7zHs9CedDodZtMDcyNK8hvc2N9uSF58hZQTgYMV3Ge56AiFnRhyqs2TU9",
  "key16": "41Q5jaSjFwPKTTXJPWNJ6KaDDqcm1XcAZ9rpue5KSm4LecBmiLSR6UsgL1KRyUFyru4xTY1CrU8dJqaYgo2PySwL",
  "key17": "39vNCNDYWnBbjiPa1jnvP1JNSF9nyLbKKorDoQnn9tS5phu6pAyKwAPgQEMVhr5FWSWWdvZxFtKuneez3HL8Ahht",
  "key18": "4JP4ab4zRUPkfV3uEhxczjUGiNnQSBPu4JQ6pTF8X1ikkdJfczS9xhK8FKGRgcjXwr9aSKmrECXFByC55FN4cpKT",
  "key19": "3Un11yiphkvEyzp4zcXDRwdXttvz8cSeNVn9YpHxkRR9Fj6YoMS6fzBrAgrP6iYFyydE4xmfEtTaYLyKv6bJqM5K",
  "key20": "48VvCWHy7bb7S2ucv1oeqiF8tECAT1EkvE6u1vtWGQ3FEwhBPo1YLEJK2XBXyzRtqfpGjtpfyj6KikVbNygVL1dX",
  "key21": "2Qukf42K2Y71cBKd9XokiUz6xqGjywQEf4gCzpk4uXmQE373Q1sTc1HYraTHQYWrDj8tEEN94FT5nvAe4xMVHZpf",
  "key22": "4gjcKkrffC4UehN6dbyMstdmAhqK8nPp2scfrNkWTG6EtsEGpUA6EgQ9qjF2qprH5NGCVUv687nhHPVDUyzxqswv",
  "key23": "3HNZtmmtpULxk74JEecknM54tjYbGxarMdoz2LTPbF7ZyWYz6NmYQMQifs3aRfD1LoC7yG2Gf6baWFuTNt5QTkLA",
  "key24": "2xwowQjKC1Wmaw3iDMkk2uRk7GE6efLfKTUVPyAWqWjJBta38CVMyPKxQ7traMqhH41bkYdT3b9Gy1KNiHfCLhPH",
  "key25": "3PNWwDLXhkd7S4zZv1FHgGfRtnXJQsvUcNk52aAXHrNRjB2243cNUknGFDbNPjPMvFnbZuxFKDV2WSKhgZeNfy9j",
  "key26": "2pZMKPxehZJp2axe8xiqApSdykEKqcc7bbhEwTenbBmxihGzvcygSZe4jb5NggfFaDBMqbqA6BTMYK7NAwenLAkw",
  "key27": "2ajZY1e7RpuBTTvBQQheGcpMrHebPAP9m5sLVj7XRM2Y9734D4nRuZ8nneFduE1ziBgLJfRftZMKMhB3zAwXN46",
  "key28": "4qcvQYrGVrt1nUMqwuZmHSYeN1MgUNUAC8fQmj3uNTk9CEPfF8x8ESSm2P4aUe7jUoitjzTDC6sZxUAfFDctDy8j",
  "key29": "2d5JrKhVWLfThnn34ovz999CXaNhzKFXETcUJ5dcicefLDK4Vs6LT7RKbMFFmSNAL83tp78JcH84iBai1ArDBcfV",
  "key30": "wJSM2dxeWATMD4Rp1EaiEbqJJTLmA8pTqPCHrqUiVU9wXeuKVSMPWQeLBiqMb8P58jNu8Tf5ceZHjwxxYwBTEkC",
  "key31": "4NMQhKTePHDzQjdtbtyd7skAnHudxgjvTR81hLFjE1KuqgWaQYvLm1mxRpDUPsC1ADEVKuL2afP8bxa8s3raTHDC",
  "key32": "Tbhqy9jpiwBTj5j85UqgdTYgB71BBLhEEhCpX4PRvDqS55rNbbnMWLsMxRijctTsyFjjep4tQ1EgcGPLGsahAdw",
  "key33": "41FUN4VAv97nrjZLfJSYqw5kKzmvckdmnm9u4aK49rxTSHmf4s5NuHVHjbbNrssC6G1PqX95NENekCfgbcqgjRUu",
  "key34": "5n2sLzRogabnawTe3grsrQbw4tNwVUaZoFJMQzZ3E1kxPiV8XioefguDFhFgYpWFAZP2vjadHdKK4ya3ToTRaNh4",
  "key35": "5QQJqw3SSCGGdEPSVt7uzUzz4PSFPsadEgGUhobQX47k5LXcif3e4or4bPc56r5bd2vrJxYjGKNWGVxzNzC1p3Rz",
  "key36": "5Rrxwaae3AFLwhewzqSz2FJ1NoAxXCMtRh8YiTqJhM4fjR5tHQx95d8B78xoGG3KWaoCPMLrKc9U4SkYfuWvJAY8",
  "key37": "5Tuqtoe8rmRR2Hifn8UmahMyFvGU8p6D44feNK62jFhxnmnVUAgrBRqopgqnkN799JcztRNYHQ69aPQaEBRweJYs",
  "key38": "3eXsnh6wGiujEnQjJn8TkzrBcAGAJjQ2pqn8ntJ4iGaH3mNeYJsHmYgeUeC8bpAo9JCDcZtKunroVSYbyvy4QLY4",
  "key39": "5RoPqXr5XASWEkGhFiCkqoxUuxMm35ZwWiL3btwPxFo6K5SrF3TzrhD63J5DQKG8XDNpEnvSSNj2CtDptotyN7tB",
  "key40": "FyEsrjmjoBo94X87KPZaxVnUueb49j2cFBCJ4SezDJc75VRAWEfnQWWsjbsmnCQpz2bfoZtVfjSbR3keFxndoAa"
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
