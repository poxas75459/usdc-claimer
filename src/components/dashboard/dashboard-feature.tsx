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
    "2kZ6Hj2FvLe5Wfw9UxhsEUK8YSjUKVqcHPWyWAsVgj4QZYzdZmKs5x2B5sFL5FL212rDxb8ooLASQA3XnE76R1ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iWsEKgnz8Aho1tMmK6JRtdsBEzX1qzrnLLLDa2FuDLbXHcmEG9cVjQeL8G49uJdSxHsPw5AYWMLToa96UGqPRYk",
  "key1": "25cEpngGmVN86KCrfqiZVj3Z7Tei6MQjdxedKqwweLDmQzuyHqqJFyowsd54pXca2DVXq3aptsSyefjpZET9U3oB",
  "key2": "mjgAkvQB6oBd5P917bzDyUCmK5Qw4yJrJcNoeh8rMF7pGeVvuGkph1myAveGta2FY6coyPeoUWsTz8BRSoczLN8",
  "key3": "42VchwwdyyJem9usosDmf7SbCMSQaLbBsjUDknp9vgPJGzjgagqAc6ZUue5p7SgpvBYJ6kpphsQaRSHifdswvnVQ",
  "key4": "2CEZ5umjtbob62K6WCu1M6AR3TFcm4V7M2g2mzr2fGXjd3xndC6zaz7dzPHpyDGCiwxQ1Gi5W6XbSATomx6pohME",
  "key5": "4LCNwjQ9XfRT1R65cuovf1bp3CAYKkGFFir53wSxfAazSkPDKnVLZsseW5VTyGyPpH3hL6Uz2dVn44rTScjFhrBh",
  "key6": "5oR6bstDWmEkM4GrQbE3XZZV9UM1pxwdkz6qvRR1dCes3N43q8yLRhj8rgWAHcyPXsiwzT7Ks46qAMZ3rkYa42s",
  "key7": "4t7jNj1DpjXRba5bkaz5WEZvFjLqroBt3swT2P6zozrBZGRqt7wYfUjNGY8Rv2cGkL2MNArnyDV8gjDY2YhrDjsF",
  "key8": "5a2SNAfvHeGVYN3QT2GGgnp9kLVdve9PhRc9hixqmfoxFbadhf1pqVZ43EhHRBVqWTqaiu2pTcRAFNMx3YgAU2dD",
  "key9": "KCXzEPSuePoqv826YWAjtY6HuW6bjktpiqfPt3i2817eY6jQTfXL5vbwdMcXAkv3H9R7XHe3H5xawdXTQf97x8M",
  "key10": "3Rdm8FWnJ2XngXDqj63uU5bN47reVcTBeraiouLznVtMAvHFvtcPxvrv46Y9KoQmKuEaeSEjYUUxBa1cgxE7xDVz",
  "key11": "5i9MbK16yxh19ZiJtWhZidNMa6WruxabNm22FVoQJHyzGztvLxYFHuUioQnocmstxnrNquES7wwFYWzcjqHpSaGT",
  "key12": "4B4si72dA5xL9G4NUF7udNGFQSrdsbzyrj52GpfoFeB2JsioxpneG1hVKpekmmcv5eDC2nZ3pn7bEXRyYArReh3e",
  "key13": "3Vm8qwzLWfDFtCFpJSnBzvKjJ6u43azWbrjVqSKYT2fDdHmUmFu9upvm6dEUf8itcYHc4y26aTy4j6BHnWPaGssF",
  "key14": "5bF3m3gzgvZ3xU1QePNJPaXHXRmAY9TuBze6oyiNLdehQDVPEamT5H4d1EsFVijHEnLJET3Hbkb6TdxwNbSSRWnq",
  "key15": "C59xvg3FqKJQkEypn579pD4MZT5cE92n8FEcbkw3x6qTgkLvnVpuMRRkkQ4qsyg1j9Pgj6ZvXjZno7YPe4CbKEm",
  "key16": "4kmPSvzT47MqWWqm2Z4CwshCGoYSgyJs37Y4FcmyAwpjR4xHourv2kMHgNYV2A5wET1i1iY2uvPQywgQuoXovZ2Z",
  "key17": "21ZemLRcezGgLvXBDgyYJqbA4AqpqnLdxhKK8xywEtwC5J4ZtQAEyCgP3nPbgm9xidLbYvZtXNUrZMq22azBcNYx",
  "key18": "5DroPUGB1qsvninqMRDZk1tNgmzYMpVCkQgH95Rm5gdn6fTxGrQXyt5naUySNs7ykC8h2ahpugVsf6qHv8Z6zurf",
  "key19": "3kHFu4TDGQUhkAXUZmuevcmRXUMGC7haJ8kHgUYpnFBpuCF2iT4w9yU7jgcMoLsG5jY77ebdj8MrU2YQ4QczdRL6",
  "key20": "63aDN2oaPH86SFMVWav8v8gNtpFjFgvWcGueT8Gx9QRgbMkesmBdXLZUaUqheT9E8KMYSoYXyRUGGdzDUQYLLiNN",
  "key21": "5ReGFBJPur5nA13EtQ7EZcEDyKJhMBtSrtNdsEFJrU4uSUf8w6TYUEqPkQzxXEdQrfxowFUVhN2oqtrBPDdNoV6T",
  "key22": "428SbH4nTa2SDaKBTbRWQi5WbkAYRxbniwxYpTWwKeUCjTg12WsWZf9WbHLjgVQQ7MpWvpGtRryMVCnpcFcY45AD",
  "key23": "vsy9spf9anFgMrDxwaSLkRvDj7zMpRoLGbDehiYM7UMJSrfB4Ak3YCUabfQAq7KDQY3a6qMU1vVhKAXqHmxWX1T",
  "key24": "3DTprshVD8jri58R8yattNG9tgc2QqU2jWh8CqzCPNY1JFU8mQqnPddBWAUyAJGwkCvm4323S6LaPCyMKJsQfMis",
  "key25": "vBstkDxAKc5ZEvjSuLheU9MzCcXVoLBGFa7d4xtUPMkVjfWBdEkH3r7fkBVAiwXkw7f8xGfU6pJojTHDfeZaW56",
  "key26": "2iW4Q9Dix1WEReyqHPVQ1dAvEWnyVQbUfgxzUso8KA1htUMdLEV9yTQxY25ig6shW3bLv4NUVTx3nDKmTyFBcuHP"
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
