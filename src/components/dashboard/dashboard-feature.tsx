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
    "4qh1s5peanMUQRQxCrAfpJvj6WjkkMfWj6gpGeiHNp5wfoxdSAS4Ftfe3QxsqtzC555fYCAiKPgPhBhPMPtwSx46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hfqr2Bjtzd2nQjWXAqyRcxq68TaNHgsURjyScyGb5hsbpKjxVxcm8QqRnzor2zNgqvfjwjJqBy3daobQog966FU",
  "key1": "4MFTvctbKAsur2kkF6gC6cXAEyvAZt9QtscLKwABKoTHapQQnX9UsR81F66FaoDoafMSJiw4wxJJr4oxQdBHvW6A",
  "key2": "DXp2zP9jTKAj76WH9THYK1JPgTawihtHAk63QMCqtb2WAyrib6VtcMt5TCuSiJix4W9t9Rjmat1agYAZd3J7qwq",
  "key3": "45FLnjp8Uc4uamfeY1oyVjwfXQzjdNW6zHybmWBxcKsJqQxEVzoAggswBeQSJbFCD2wCnGTk7NDu8SEttjp8rJg",
  "key4": "5ZDGsVVzZpvmgrS32Nb75cvSU86hSWk8e5odTaekCb3UtLkLaonN8fzVVUgtmEM6K5tvaRpg7KbpYEjh9LgAbmy4",
  "key5": "4DY9FTZ63y6SFE2TcSjwy2igM32hnHHuujj9BBVWVSQ8P6Mt9hGxMj1V4Ko5MbzCbBv9QLx9cTup4RY334pTCvdU",
  "key6": "3WVbYRFaRF9bcAPdK58d9MAGtpH2RcLSsgcBz1CdVp6tzb5hyu3RWuPeYy4m6tTCzhGN7LTgBdzNw78CX3BWaves",
  "key7": "4d5WU3N5mvgfKztbBkG2xYsn744Xxk8KssRyLLmEq8pJBhwPRXxFbeRRp1KZFYcavAPqNr6D1XrquDp4ihZ2Doka",
  "key8": "3iymzb7ihyfF5TJ1nwqxpzfV94eMZpr5LCoGi9u5ZFdgvahwQriUbDdQs4mNXSxhxPCzxze2eewP71M1UnDUBJNo",
  "key9": "2AC6i3VP3i7hkNWdFvkVY6UcSM6LWtQGWSkXEUNXNtZkJ6wngNAgg8wN8AX9tHNAUZ4Z2YnVkQ6nAE3JEqr9kkiE",
  "key10": "pXt4KFFqJ37knYrUAKFcZXPee4EvGY2FvsavyV3aNpxsXf4pr45or6YxexeV6GPpSK2VLsyUuDWQ3mNYs5bdnp5",
  "key11": "5qEcV64Pszr6iib7aE3uLFrabDJTMqwgdHAnv8BeuENpcLbZE2MEWVH2yfyTyBtuToUrduMLXNqX3eMZWFtoGCUv",
  "key12": "3UMbgxNeptjvJPT41xRWxWVe5QpVDzJ8e2uDEabaMhjrL5ygbu5UNWDsmbsp6tPFoxLYtUjqwNpGZWXksBjWhyas",
  "key13": "5K4uPp6BeF14LyoGevQSrkxmRMLdmaDE81znvih9xhWAwSw4sbC6iXA8V3cTJE1knczPTbZP3CdrHLturFmsJAZh",
  "key14": "43Redj7V2NNtEicmoWYPwwHDVkF1S1cbyfcha6ahhALp2DhEK8g7QMBWnaDd2upR19pNkqM3GaBCEGfsyoNQyEai",
  "key15": "3GnLHa5yNCqb8HAQ4kS85d95t7tk1jbav849Eyx3biMmyFeKA4T29zJuYS8vTESvHwwkLuw26PfETQjxP7KBTPt9",
  "key16": "4yvXB62wjA5D6cXhjQHu8BRYa5J42uy3zhQq5vWGQvpPHoADVKb48KtP7uBJizHehbb33qeTcUiasNBRm8TQ97MT",
  "key17": "449q5ftgBRGv9JdLEnMBwULhYFvGF1a5T81B5fU1F7Hrw7Q8F8mnUrkjLVEnJSX9ytreejoGw8ULN8EjYP2mTjKf",
  "key18": "4SJVA7oWbJc8nREVqX47ovpYDCEkyaH5UUo33rQ7MjBsa7CrNbsBJPB73WqMxP5fxQT96nUP6WKMFgYboX4Zqd5s",
  "key19": "4yHpf2zt7B2rrF1duWvTnz8BbAqjtYDvkS9oFQUa9FpBrAo3m4HT1EiAKwDzFLKsiP97gCJW33U3daD58dSkcDEE",
  "key20": "cm2wFzPRZ7F5cCzA9ERPWnWajEN7i6uuZmokRZreKMRT7kWS4SG8V8ksuapT8RPHw5hWZmgFEFLtMgxzKoYoQ4C",
  "key21": "47tcWFcrcjLvQiTVhGP5T98DLcMfrFd2dwyAV9RG11CcZh95WYkFA8Li9mXvhAtPXPsHwGBdF3ahuyQm1mKKxegN",
  "key22": "2Dd6Y2LLvDFhgajN3Ua3Fywostudr5LvirCh9LTT7ZGh97GLsqjuUbQ2DDXwBNdKpHzTbxt3EZ3FDWStj5LwNyND",
  "key23": "5WVa6A6uPefCPfjZYmCiKuZrdE37fwTxhx6sQEGhpv47nghhzGFYwYZAJN9jdy7MSbR6CHCcXsQHpCVUZiEPJt5q",
  "key24": "5yjGPjrVKVr5Nut3nJLQrJgfJ31VFivZiGzCQSSQ3GpzhbdtqvMo1uPgvUNDCtzDgkMtpBFFcFL8KibWNs78T9mP",
  "key25": "3YGZykcR6aeWtK215Z1oEyRhqCcHxBSLTj9oHeAejUKhPtwpXzabkpQwBAb6dYzDpq9Kf6hsxMp1GeYxpTp2ZBzd",
  "key26": "2etbykmE4qtPASEHXnbHdiFQe7xd3ZdErtnS86GHaoDQy9CHqYM7NMD4Ja7ZByXz5cT4sq3EBgXbAS7mhtHNiUZ2",
  "key27": "4MLXmPUGC7bxR9SdGD7wJ1XftMFx4Lh4c531V2aoVna5CFe9XCCkQNeq9gAXsZWznqRNxeuoM1XKtebEktyehTRJ",
  "key28": "4sg6jx2pPcJ6b2Dqk9HSA8TBdKKAywb2ngTTauBjreoUEdZ5yehLCxfirxGLZ4r6d7vdDV5Bm5oHGgDv8LZ5D7nF",
  "key29": "4aS69R9gg1zze7ffewME5yZAytDKWm7hDvtTxNZXzPnqQ75eYDrtx6oWJax98JX7RfR9YhDGLV9pmWHq2TBGPiFv",
  "key30": "2rdorf3jK7ggk9AcvLbx9wkg71pzQAFhwUMjAm2KQRCKBK4Jrq1uVwAdKZ6E4BFUzprrG47VqSCkG7zKAkQbjqBE",
  "key31": "aEmqQyFhNGxNuQsbdfkkp1LjJYbNWFFjgEVQ3QJm9yRquLpV9eo9k8TavaxkQxQa16on6ipiZefjciaB5zheHqZ",
  "key32": "2LLJ85sXUQQRALJzt7SyNBZDTWCqG2q9XRb9ZKiGZn8inbn9PWwYsSJPERX4sFdKbviA9qPMXzvMbdtPdyYpauAe",
  "key33": "5kjfaWsmdwNB85XV8ceMmXWrAk7Aixcb7wxXkS1XDJk2nHXpp55DWmPpCZGpjfDDz9y8DoAmwsXMNFSsMRVgYvLJ",
  "key34": "3vHcggaHrYGt3RHzd99zzx9EBC4re7o2Nq5SppN255GnAhqJeQ6PNVWkUr6u7JXCtqp5uo7zsds88sNA7WQVKgd5",
  "key35": "3f6B1Hny8JDo5mNRFMee8Ci5Kpr6GaAEYcYt138kBivcMoEFdEaiSrffGDoQBMnuVc9pvhH724WQmRu9yiEmmq6M",
  "key36": "5zK9fx55hzpWJ7mAGKtJrDYjuAVVEfkRNHpc8d9b7Y82SQLPEbZPDCHyd73Bsr8JpdLDDBVjE7L4rfkB61qmsPq1",
  "key37": "268UndciC9ei8Vidjm2N2Z2FCkd4qPs3QWDQmrTXQ6Lsu39q6F3S8jUCaNSZqTEm69FSsq6UcBXcZCq3QMtEXuPp",
  "key38": "5rXZP1qAMK6vooaFeafomxbta2f52Y6cJRUh74HTSjdegWiSGtn3NQ2Gp1UNw8zbZEDHUA3Gmaoq8q5kW83enVi6",
  "key39": "e4CRYrKB2qUMeoEzgfrAscQWHARsLMN1temZVwcUepk8yjiMigXwhj5Zf8yuLU6dxmJUcz9PgEbDCq237Uazifa",
  "key40": "4KbTiNkthGvR5YXhAZFQ6DK2Zmq2cufNXhVvidRBFsVNaLE1a9UjdSKZ3Z3Kr6kziF1KB9x98xYrDP6DV4jKTRZh",
  "key41": "2QHtPT6zUq31M73FPEkM7dLQQTKCeBDv7F1y7WWC8SZcXsH23X1eB1AggweJNZkADqTYYaHennGZPyTt5SEPXcpc",
  "key42": "ZtunFYNCEzbXWdHRZcw6rghkHpC2UP7FJTA1e9fuTt2hmkdKPTq8fZhRWtL7wtXvchLJztJnnMFdPrEXbzksNFG",
  "key43": "LAioKBcKnQtx2G75Dov8mQTpKUxdboS72cHTg8JnEcaq2gXLwXMnU7orazC2JVjY1iwumeFuvQpMUYyzFSPxhib",
  "key44": "2nDeJoAxMRgtcxjFRG1qYmaKbcgtGqus46eYcWhC8BoBAD8miYzMg1c4k3Av8SiK6Joh422B8WLuAvtvuYRCE3Ra",
  "key45": "59FV9moSCMUWqiKFMbz995Uan68z18LocKzRirXYdAXUFuj7zGZoemH58rYeHnSB1TKcTvkLz6zJpDXMmoTpqsZK",
  "key46": "4wRP51qQdRj94S1BaGEcogW3txf2BLAbYfPr6AsKAuSCdzzXS5X9Y6bzGFT67SgfnitLYLH5yxW62c4BvfCDTyix",
  "key47": "5CF5yNyeXufAqC3P5VshZQMQGYDswwXj4Yz9UixYHuV7iZoeE4y9nBssY1YW8gMTwE3F4JMd1SUwch8MEA7bDCGL"
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
