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
    "kepawQ5UMtHpmRoUvzHmiPLmqRmk3AAQFQBV8YTwHFJ4BERAshpxsXXpYKHV7aexPrhLctTn16xHGUqGG4fUnTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1t4KhbLrgGfw1JhfCjnzgpPCxFNAkbSWH5bGLn41LxuYEGLTc7T7VS5BmyZskotHonZQdaABEqgS1YJgk45dLS",
  "key1": "5C47W6FfSzXhi4FSAxjk6hE7RUnoTX5rVkgvNz7G7bVW7aec1pvonFd2Vm21TxjVH3zqfsZPvoKP3jDdpA95qS7Z",
  "key2": "3DLY87Zt2HrQ8J8RpF8D5jMuuDUiva3ryaGtMncgCcEW17kx6b7BS8UZBoPGjgNFFAyFhU8UczrNuKoDatAZJDTb",
  "key3": "TweeWHnQnjsk8fiyt8NFMfky4EiUXiKTX6esUCfHSTCfyha9dCyZSEJFmnK2gJajWmdJhnQJ5fQu3RgfzqftXgh",
  "key4": "5ydGrKceDuUrA8WJC4LQitaUWCgoWDZT9DkpizEBfnY4e1CGa43Zr5eUvvRy4wKAGM2ZHLiBVHEgGYaakzQ4wpUM",
  "key5": "SQ4d6TDP5XTxdhn1JguRd4aUj7E4GhANo89fcbTRZNzBsVSywoPvvxKxbKiHZX7WPV8n4No1iH99m4RHF8mztfG",
  "key6": "5PpMdCmtVSbfYU82F5wQ5cEcTJTZjBRqV9aHTVbjt4Rjw4in7g7BK4J2KA43L5HCPwTBnWKG6zzBxuwMxVDHJU4U",
  "key7": "WejMnqcxvFcuzYYtx9dNinE43Dqt71mY7UjUhFzKTD33UucCK9pS7d1Hi6DHWg8ymaRNTWn2eu3qvwku7DmhCWB",
  "key8": "4dGF7h4CMQt1HiP4AxjV2fdeHAyiLJJD2Fjtq2j6g6szLzP1j12yWAySFWZrYrkNZP3BNB8nS1XSNBVUP3XJmoUF",
  "key9": "9jn3WRfJMr4uQhfzDCw4UNY1CkcZNgPhVYUt8FTypkAkuVXjv8ZAXSkLgeTieP6mq9kS1ozfe8uhGiwxKxUkXUh",
  "key10": "5pr1vo7ptXgq5gjgbB4xLpvrxWDSFVT1rCkLScV5ZwfegPwEaQcQ9ofacHngA94ccHt2GkzbWRJTLisfkkmryLYk",
  "key11": "2Fro3MbANmXTXYh1ye3F8s3CAnHoSNA7XuDtbfhYJhfTno2vqZb6zj3ac1J9XEw1rXtqVi4iwV3Q4UPaeGCEKtEj",
  "key12": "3Utw5WTgNaCSFKfYNuE3aLphJ9iPHNziKZMivdJzZXqYPvcy6UJLtvdu5yBMr3LzA9b3tFDeXsDVJxzX1wc3tgCy",
  "key13": "4ocrMx548wGxFg7qjtBWfPfKFUEhfvM1f5vBc5mTateLjydS1Gma2cBiT7mKhXo1JuBY1pMKKTfm4U416J9yRxvJ",
  "key14": "XtRyH46J9Pd1aBiHcSVfnDZXfVQZxUy26bYfcGihWc4Yj99q4L7JMzpHPdC48iF8m7Jr3Sw2Ta8BSFcuk1H9EcZ",
  "key15": "3ohPATXJzxBqTBECRojeBk5GHnESGtiNJyzSpHKCsg2rthLFa4FkbqZz95DLWBX5KU3dUugvQgVoPUkWKCCCqjzG",
  "key16": "4abn1QCrBspSciSWydBTM3ExHAbF7vsAHvstj4g7LmBD8it3RGwmyxmayGqNZHFTnGGi1PW2ayYF74XM8QQi8iZf",
  "key17": "25gCnN1F3ThGsCQBef63wtknLrcEg9yMLbMK3Hj53xoDUuJowswNBBoME8trMvQC3HxLSushAPsPHii5b3A2Zq4a",
  "key18": "5hquoVRtP8cQi9PvjzPtzKMtpUjS5y8fyRbjLq77CSnofbhaj6j6crWkNfdxXNm264H46GggNkSEp6SYzLkhDR9p",
  "key19": "mQbdVDM9mLtdsbRk8FpYEB29nwYkgAV4ZcK1tDznYWj4WXU3myCZdMiDVTghJcRU3vQMpr3CmQApQCMzk8bJUFj",
  "key20": "ose22kczNPAdafrwuPFC7xbumRXTpetnw6QaEe5c9mCqUUPeiT9PoKijzp6g9uiWZJ3v3QVPkJ4BGj7kqxtANJ9",
  "key21": "GK1YLW8k34VLU14q5SLjMf9BRPA4oeSywZC9kUTE7hH2CvWPCP95qkAkGj5fpJ4nS6R6nzoVo2oTRr6JKkGZBQA",
  "key22": "JoSvS12BxuqKG4huggEzyE4VS6KbJNpppVFXQFdp55MQqC6Bd9FgCTBSotohtvooqGiSquRZDfBCsrxJt63FDvz",
  "key23": "2HsFWdjjpXJUUrJRWypPpZD4KoMNfF8AS1vKmBsLAcLPkTJStAB2VjXAbWrz5YtQCneYREJcNiuaEBjJv6a52aiF",
  "key24": "2JAiHrjXX3u4cc2ZULCu1cbpUQnU1sqwnDvM7eqMmmYM6N3fVm8dayPnooHXYPZCGUJGiZdLiyBFUYcHKELy9Wjd",
  "key25": "WyMVPynxSCCuzwiLS2rDzKt9ZQJa8wUs32doskgCjLde9HXj4oncuXwGi4cMzgpBZPoY1QsVCt8BEsAebnis37t",
  "key26": "sGpsmmTYKqNh8y79PVEpMFcQPnaz9K4eDnkoTLqVEjW7whF7Fp3WrJgPJWDRYhZakPaeW7zhyDV1Dpkp4CVkLWQ",
  "key27": "4Qrkx4iPqzkGUVPwVAh2KkZwux4bceZd3XtFwQTKXUUf6ovEF5YpdTdFzjja8hAvqNa3LWS2ZiHkFFc8PK6hWUPM",
  "key28": "2go9EqqzVFNJPrq8iFuWFuaxUKdxm6odEs5E9JKYHvyRX7x4j9vDW56U6JNbwBGdz9PttdGxKEbcTprUi8dhD7Qe"
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
