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
    "5CrwgqVwJkvmZJCUrXnD2qQV8x3YTnraJm4pied63YzmFvbYo3W36xJLEJBnoHw5eb574f3tJzoM3ayaAvva2x4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oXzNbomo2BUwRuunq9x3uKdfXA3kTp3vTvYk9KoNPFsp1AebHkmcwPwSzcfpNpDabzJBtfeGYpDoDtH9ebxJDYQ",
  "key1": "5w8T7YYjwkPHzUqPQnrQQqSAGNX4ZFpn8AwBMiuwKne3BxiZogLrNnWCzNQJDTwmFuMPVRRhxx31ev1UDvmpbKHW",
  "key2": "3PYiEhZXQ4LUqgqX6BRDfDBagmWVM4Td6BUe5uxCY6cBrRghoNrYM5J3FgfiAueaxtG8rSkz3b4zMwkD2Tn1KhHK",
  "key3": "2JKXb4aYNEmS47h6fHWYnUJJ4dCXdD3ihtj69nM2pkCNuotuGNj9aNKbkgFYYrJc4W9ZYcBX5naoMH6j1TyWNSkY",
  "key4": "9NNt1niZT7ux3eDuyXZwZa4bVzFcsJ1CV1AdVM7cBbr3EpF3oRfh4dQV74XEXzYk75uJ9dvZoGu4jiEmzYMfKJj",
  "key5": "3UAbZE4c5nKWrheag2MyHJiiLmHQG9ApkJsfS8KsNWRmCsE3pJfUQjHEevXP7y4jaQrYJSc9HtaRxSvzvzfaMH4p",
  "key6": "4WqDKB2Re4A2Fp4brQANrHU2AL4d4WPTCFMAjsdCPKqTJ8LfpTdDEAXn4FLsvPuBoLehcauG9HuhPjP1Cfz8Zq6C",
  "key7": "3T5kYH1KNt6RKSop4S7UBG3BEQSguUWgsKzEKsgBJA5heyE4QKbtxJ1nTUmgpPtcE24d7hB5BWnE4aSfY4tcTCTY",
  "key8": "JCbXcAA6mDRdB97oavQtpPvKr3kEFrJ1TURxhGfxfwne7QYHpFck6cUoZ5bSfjjr9iSkWLLRsB6EActtGw926Ab",
  "key9": "5spWHEj6uZvqyXx9yacoYe9jp1YncwD6ju4ykRwjH96uvPNWM9SWxaGJxu6reJonzxyCXjLxrvuU75oYGwRAKVQx",
  "key10": "5XZevM5UmXNrEUGWS7ip2fDVXAXjtEbs8ARHUfdq6euZAsQ1LtM9xyigvp4dE1AsZW9sr1Vt1zSqpxgLjaS2JuTF",
  "key11": "4w4XHiMsnr3c5YDsKfoXv85ndqw7j9yEkQeKiMernE493187LyLrqxxv5Bih5bBcPaHTAiYLeULjEZCkvQgfAN3Z",
  "key12": "5kDCTc3AXbTaFLMLUwRnSi5FNCkNXLByavKosRFGsyiFtsEUBwPS22fKmBpR2X1EYVCY5fu9B8PjZri1aF61Z46B",
  "key13": "3QNnzjQTfe8L9ctUk5DT4HpNrQaRxMVenMTC4mrPj9jemw4Jx11gaNWCSC6cYW2sUxvuakLBzq4RwnP4h92DYUUD",
  "key14": "44U23Lr3g5KGY2GhLeScZuQUaFv4N1UPZzfNpXmJvRCPacb3ZoE4dzQ6Ntpb8NPFx9qqZGLEbavkpvnLf8AVHqYy",
  "key15": "2gu3QjNgSawBbw2cPicWB6jFGqczhvXy9JNx4odUKWhiM1GGTt5tQhWr33GaGQSRCM3jEtHY2sPMsr9omKxwpRaT",
  "key16": "24yVwyMrD88iDzdaVC3cajXaNQnvrtRZzmJkSZKuRWU6xdpNTPLLnPtRWBtvsSKM6KqTwogtb2dB4XSUg8CXFXyc",
  "key17": "2hey9qhgmBTcvNN6oaBAngUi3PXJZvz2gjvGVjgtJ8yu8sUHsqyb2KPThofuApWvPPBuW3MVzhQTRNhQ2B9sHRuX",
  "key18": "5u7zq1TkKBt3zzaCLPwjg3uy6aKVkRkzNhdDnKJd2gKMvsrcqXokvRAF5TxfPx1u6oTFFopBc4jNJ6GfwqXKxxz1",
  "key19": "58Z36G2UGDgDZ3nmx9w4CbAZ6HWvHZC21vXokqnJhji4NxWSktUNWgAkQW1a4KjjGyKfeHodEBg3LrNfhfe2uaTe",
  "key20": "KsH93Uq43fN9qxDmPuA2dwSHxL33fPousezFE4Gj62KqCF7Uhn4GT6LkuxQYCqWXrcF9Xs8PGpC9si7YmB2B8KN",
  "key21": "33yK6w19jdWM8zqEj7m6eSbgmnb5aiTvCBg4CF9bne7WyTUHxgENYVZEWP3SgSQYqLh7coELCPUQrRpxUi7q67T6",
  "key22": "4fpyzjp2DfmTMGaTzrZmq1mSbF99dvciAh5CZKxhB9n9kK75tQVQxWi2P2nPaepWbTBgh8CvEz6jhwanDVQpMeXx",
  "key23": "2atHjJeFA35SbABUhudG8YvCDTSSzBMyMZkLh8hhw1UHBoX9VXKLzcc3EYjSPL2XV5fn8gw8mZieNN5syuey9Xij",
  "key24": "4zbLUNNqihWUYdpvtVQm2SaioxZXdJC2htLduYKAyoN2UA45zoFjCFGkq6Po3Jo7RCRihswUC6hwVwTNAtAybC66",
  "key25": "5CoXsDGVQTkBbGcYjpRiKRB4tgBkVDqobXGA6h7WB3yH2PksLmJjAPfWFExue1DsLN4xQX3tVjRmGhkhJZQFKDEM",
  "key26": "4hPuEqqhjzNWN8dn4Zws6LvnamNuoHSoc4xpDNy8GjfLpbgkq15qkZ7L3duKbHQgfnADsPngXaEZGDV2vXm2UsN7",
  "key27": "5j8n7sj6BexaV1DM1eHk3RFf3x8erWZgM1T4tYW5rFhzdcE3N8MvCgFuYdw9VsSSSbwZ9at7nRvahKSNGEmPkn1U",
  "key28": "4b8uN4gwDWtKfQvcBTXNLBxDzfnxTMBJA7mWDaMKBDewG4D4GFuBADBDLe7jD8tKrz7NLfnxDcGo4PeSpvrBqQ69",
  "key29": "3HbrrPihqjXs2vLuMYNCyVHg4JRdEMbqT2t6voc3EDdwvNX6eWh81G5KX4hp3hLcZL2WhSogehf6qqu313tJw5m5",
  "key30": "5bkvYh8WxGZb9y22a8d9ofHAcam1njVYZnA8Qy8nave9UiuxZ6E6bF6PJyGSkugPXZEiQUrh5yjmhxp1g4HQ6xTq",
  "key31": "4Y8XiL8UrjBchFU8tq7KbDRAFgn4oJwTrpG8gdtgM7h2jRMFew3oXTjD3ZXpeeKKqW6qsvUP8R7a55mirFNXuKsb",
  "key32": "4Qv6js9tPSuwGjjHFFZepzGcb4AikLtYKhqeSKNvZ5FEd9SymGxVThPoRUwxomg8aDzWBXpckLGmfqLVkXbucnm1",
  "key33": "YsqbEgBt9bYf6jtwjn4FzKiKxftJVqnVs1qNh1sMciLf5WeGMhiAXpr97gvCDxSZfREUt2vwNdMinSaCkGwSXuw",
  "key34": "5SvK2juYePbpMZp1HP17sG2DFN7Gvvxy5rXDaZubaYnvLACRYkNxsQjdjZxVu94z6UuQ18c5EikmEY3MfPJueYTb",
  "key35": "4zcDqbio89De9QpS2s2TKqwChk1k758VQKyJwnJtRhWuANEWjiRDd1EpQ3tKrrw7rX2WKyWGEEdJtKH6w1d3CohG",
  "key36": "2PTKAgF7xKgTQMNqo1FUruKKvBp5hzrbTv66D9eZMSWq6q3Z19mb5sdXb1X5b47GkX9HQmVTZE3fVhUZihbaLGcs",
  "key37": "4Wa4hbn2MVx1ayx4Swoh1ZQ7jtoNa7pJx8G8Too8wq4V2biQ2nLX7qFZjqMgXQ7fGkh4kVMQDtHiXG7YmzkLBrfF",
  "key38": "5z6TE8sVVwRZn94aRxxsAT9xyrWpBsxJ9PZjDxbHqHTu8mSQcJnPJRJBBWxTPk85qRKkhMmqbGPbpVY3hJJiHMLG",
  "key39": "4tXXnGws8GvHbonrYcZRYNyPsvCY2jRDi9DPrzhrVmwHWrd7h7LoQL6UmZ8YrX2gV68VXnPheqaceu97fENjrxX7",
  "key40": "Gyn8Ncb4XwAV8jTN3yhzsdqBBDbm84HBAmuoosArWYxS777o9ACdTTD5J6hDVig42eo5iw61xsCAYa9KGK4Hv4X",
  "key41": "57g8VQ9y9LvQDceZDxyXKsDHeCSKqmfsD1ki7CyMLxypFzpc28JbYPr5v3dEUepDV8JZSdZRfz9KGfpysQWNmCUh",
  "key42": "2Vzz5ivcjaGoY6vbSWndBBtGoqo9ejYF8zxRoPbSzTAgtEkAn9iZefs7E6L2TAoj2wUFDP7V8hfWWqjS5dqfq3qp",
  "key43": "55mhNRrjsTh9ejwihLYQUpHiw4LEk7Rqs9ZpfSnJnoMVt5zqPpBCswVxuyehcE1VognrNpkrFARo9xyQBiEjX8Xn",
  "key44": "39gvtvuFEbrQE5nBvb1SF6DoUPs2Ypa8bNZY1fttLvTeZB9zjcdaVhKDaPfTyS79ozzHEzfKhMpiJ7tqDrToBbxS",
  "key45": "5vLKyMDAJ7C4XUW4hi8oS27q3F1gfjWLFRa8Zw57Ki8QgnwoiBikehXtwbpYwvTLnvjZpsJwF6wSasQBzMXsdP6q",
  "key46": "2FcYJr9zbimFTPzEtVv2uAyFJL8a21kAJxyoN5KvmVMhU7qeUThty5hGM7gYixAzgqGtyr7ZJMFzh2YKgUSvi2sB"
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
