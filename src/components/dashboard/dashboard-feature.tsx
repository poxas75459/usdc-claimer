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
    "4ruPMgqkSbPwSbiqiQXHU3gDYkmAzccKRVhUSqWS7WKNr3M2m4UULZ9Grz9W1bmMLEnEF7K1w5H182xM7cPxDXW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fUs1DDnfCUCxTd69vdR53ie6RVEWwM7kKtuGXM9VXVnnGuXwF88hjgaE61SgssxmPJqZvp67AidmkTy7gYCMeD7",
  "key1": "2dTBCqrc6KKXCKA5Yb4XybFGtD2xC98DySRygSLousJJ22F5zQ4tZosYCWScJYHaxNQPbRUUEmtSvpDbmydJjD78",
  "key2": "2wp9HcGv7Aih7scgDSHW2xN7YaR6TE2kggs2SCNQ8LZFP3543C85PusbYjXpye19gNbhbomF9NqAjVjdNCVzght",
  "key3": "44iDNXFxgCZVbPAsM9ACox74JJ2dz6YTrhtektrgYEALYeAeyFTEy3yAom7PWp4BRz9xJWgHFCbfnNqTxnFBeSMm",
  "key4": "4SbhCr4K1r2tTfZ8WyC2rTagr6LJ5qFqepFjd9A3xzJw7gQ1RdUqput1Yf154BRrRLPRRS92qTCyJenv3w862fsd",
  "key5": "2U7MTXao6vLDbCjMJpECSkaZYgwtFKyzdYmjP7T5EaRXT3wVV1Fvk4CPsgEzCa92resUzNDvQcGH4uZJWdXLGG9i",
  "key6": "2guqfniTxo8SCLZwyeaLiPKthpyLjY1FEEpp31n8mLbEmMWk9nAPivGfiMhJjDL1ktMziJ62XHDKWorcoY8NSSwV",
  "key7": "3komHhG5u4Sjd3NSjBVGpyxRSzqBavUsYDqXWYvvPq7zLDsNzRgAUznM6KhRPTgwZmpeQKUmtkMMikUQ1UzqDbkn",
  "key8": "5NmRxfciTMA7NBwj9DwyQKndsmdRmMNdxpF2SAPatyJKcj4JrET5D1EtnHwL5h6xiKr6asp7xfKTwoAv5jKbe5Wc",
  "key9": "2Tp9gWQnG4divm49MpixLWNhJb7dPsNWFt3egk1GABEEZK8U3xoVeCqMsKk4DDG7MwkpDsMQA5esdiTeojiBdRfE",
  "key10": "2kNkC35dZfe5TDiYNwup34YsSU7B5p32GmskUE5tZwCyA6hECRqF7xs4evcrG5Lyjn2r8ERrrpMM8A9ybgMfuuAc",
  "key11": "2vhDWk6vnMLTQ32UuDo1uZ1JbWX2TkYEJSi3xRJdEuXpu5zWewNDP6kEqXamLPyEdPRaX3HpX31ku6zmCNHY6dEr",
  "key12": "qn5RbZY2SKdsUHyzKUQsyYmf4xZJ3H6GDAdrMATvfzfN5UL1aFDqnWn6g3bik1y2G8GwuwaRG5UzQjHR2sRMped",
  "key13": "3som9Y39CsXwHeSUjHXJA7c4uSvjfBx8iFwJWw93GFUxso1PWMihz8BKJoUvwB5Sh1jyJCpuHQs4LkZSQQaMY5zW",
  "key14": "2s9AynkyTV2PK68R284BQ1tbgdLbrvX15DQfBGFkEJX4vTfy7tEXxFLQRrVfzAeodH8XMVLZ25JvubsEYKWEcBhU",
  "key15": "3tjQQ9Mcj4fLBDH12r9exxCgjVRuaACFFxkB8E7BEXqAm4YegP5UjU3LBW4WAg9a9Jsvxh6tncPar34EjF8WJ6ji",
  "key16": "NLP2uELqypyYpPEJa6LF3RPN5kE5wZEQC7sLsQKvfSZy1Wfg1YJFjj4trbGcbxJTQM6BmUSEcWxEeUNhRsZ1NVP",
  "key17": "2pQrj8HFcshkUxMmgpw55MGUs1E5cjugWzHB2ygsUXZBP5AXfaJH5F6D48QWVZCU7kexfLohD6zDGmdbuX9sWYbe",
  "key18": "4VpLZ2aftSxjagxPjbA2cP35oLkrG8aNWzxskahFyJBpQAk21DNK9UMqfSAKKmVJdEDbeApSLuTXowofgLu3CxNN",
  "key19": "4LwBVoiynWspjxUBXfdykSmFWFjPeFFEKtifmVWPHysh41fqvz2WqeiukMD1p9pfasNZRe1eLzEKYTiyETPTbMf4",
  "key20": "5xaVGiQqLNV4BUPBRvbfkePD5egZ4PfoBsAkzTfrL75eW78sXH2hB3RDuV5cMaZ22vp5QZouT13LRG1wpGWo7vfr",
  "key21": "tKSyhJpFR3UgYk9sKewAa2h1TizQKX2qoFQ5gQdHZF13Do32kpMx6jH2UJt8HVC3QDqEKAv4PYP6KeG6aBiRJKH",
  "key22": "3xyKRMdL992GmtrS8pmZtSiijNAzBdXSW6agQHWdbzDrd1tLFCx1kLsKJfbNjP7HUapafWB9YaKQLnBiUFheFNFV",
  "key23": "ifFqijU6GZ2yu9MCfyZhdiN5rukQfgVpGax2syeDjAbdhvLhNNcRSbed6CA25KpAwAaR8E5jroBEkGHyuPCHbVg",
  "key24": "5DrwyEk6EVbdrC1eYXtz1ShNSQ4AtdyNd3P2HqGStpnXeAnwD73n5QduTmqDj1vKewocb9mmkpJZYGovKWq3t1dN"
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
