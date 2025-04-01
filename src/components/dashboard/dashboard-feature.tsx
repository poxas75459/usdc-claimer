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
    "5JUyVnbHr2WQq8uk46WS67KjswPHiK9kUw9gMnBpSiQCNzmNp9VcM3XeWJrQ6MAj9ZaYcWDsvyK4NXguPzQY1egJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogNcjMDfow2YmzA9pjWrRrFDvoL2Y1RN68VsF42hR7uyeuRfpPAQ9YFtRKUriR6y58wuiFTq2CT8S5TaZ2QoTht",
  "key1": "242fAK1zFa8DP6GQmxNVnK9QvarjAQ7THQinqaaPF1ewVjiqNGrLifxaUS5KD5TGVnuBSAjNwvGhUT1GVeyKXdCi",
  "key2": "277YmwmRVzRDitfrd6SJPbuLw8tErUqxjZcmskxwub2WDuqtoVo21mcKxMLCVuDKZtwQmZ338BGqy2T4A89MwLBk",
  "key3": "4Jx9oyGHXpz87f2xTGbbqdDX1ZqkASUuXcy2BHmC41CVSdMtmaL8GbM3AmVxCbjFUpsPa3poKQY1xnTaZMWyJ1xW",
  "key4": "5Hog5TGgYCZmNzF6TqjowCLdP23huP4xP3zghSwmHbRTpaSjmhSjS1FuGoUFgReW2WPyobc2tamvatP92XvPGFBH",
  "key5": "6n1gE7RPmhVp4rN5odn2c6tRtpbpT4NjSFY1zNdgAyXrZ6UQ2XxU5mCnGv437eHYv9z1LjhFq4fAcJyV2BBuHZa",
  "key6": "evdiKZ7HTKnmJWpG2L2ewn2QswuzsE8DpcKcoxcdNhSQNdXkxWQd7u3eHzG1Vqi68w4caWFL6e8SspwSY3vJNb7",
  "key7": "EvEoejy75ndeCpwp6MzLqTHM5hhmDrLpZXZCk9xm4V63svwaYkdcX7KUSfHWp6rCxpK4Q8ERWpBtYshY5Xdzfao",
  "key8": "47TSgbXq9y9pyzFkWLA6p6dvQbVatmgrgKrepFpcARTqjAuu53UjvM9MLvBbSyXMhez6ubUSXZSzR93hEWpKVbz",
  "key9": "3x1vZSB4jKzUTLyWmcRJd9y5kwg2gJcEGfWu4aWYka6Jtf9DqijHiXKAEs9BySewzykP8Ftmx1mi7B4FxP2tz3hT",
  "key10": "5MsnrSLvt2qZshDaF5qGanGuQhpb88iRoFYX9Psy6pKACC8e6RKBKEC85WUdLgcYG7xri34EinvYRcaZ3f213ryv",
  "key11": "2Pw2zcUCKcLh6K3CKHeZaAuzB4vH7CwXMum2NiChvGviyL46Kc2L4xyP8AdPrx1BSc93uGScr9NPgrfgmWU7JB81",
  "key12": "5ZiwkPNpYuCSwDx9Ag2FVFEe5AbiuUBR3tEGVHi346xdDxPy3BhZqohB7D1hW7xccUsoL1kxZ1BYihvNXcJQ1Pjx",
  "key13": "3Kyt4pfcZksHhM8FkVN4VSh9yqgLQ1WbfQSB8RFXND4ZcW76cdyN2PCa7feDmBn6aB4aZwKeiTpwFYt2RNr5p3XS",
  "key14": "3F2DhtnzReHzS1KwypU1GJM5fJV8a2VhYG5hJ3rKVRTtcgpPfhyjfmw2NFgFKz27627QrvQsDECNnGpdMFLcsUdF",
  "key15": "37CRa4FYRcbgiZDZtgiRD127vtgxzMF6guUtiocMPhwHpd3mwNq9iDcUswRAioimdyxvtiyHzcbD8Nrun8RM9P5S",
  "key16": "3y147psCxrFHWPWPUPmsUBcdYt9nvfr7gTvjRS179p8EhtwxQRhd3T9Jh2mFUxwKSNC4MFyXG4wbMRVqCnvwdC8m",
  "key17": "5GVFScwAh69roR8W85onR67riGdt7oobusM16LBNo1gtUwyhNSjTM5EDLh1w5KoDkxdL2Csu5qJDNnRzNJezYozs",
  "key18": "4us57x8PPpggKwFL3jg3jMb47sXihhZL8G333XHvKBpBLs2Qu4a2VsSXta1Gr7fRZuyqdzZFVuWqdJP5hT3bUX1T",
  "key19": "5pi2u4jECzE1uTLKxqj1VTAmCUM7pDao2syHcqdjKTp1YZhWehhxceusSse9QJFfomxEAgdvqTtuaD8bwmgivCnX",
  "key20": "4CuR4xZQKtcUhdo1ev9GPpbkZGeZ4hjZHkKoS4Kjc7hviXJdswQjp5B8j6243Zjrt5VDV9qwueLebTCHmNFzeBa8",
  "key21": "4tqCVeeSXCvtCxXB1LEBu8XcQ8Vt83xRFFVrtvSotQiLYCAo9WRZrdkgSXmFQ2basa2nCTmMpC28QoYFjHD969G8",
  "key22": "63Fyu3LYHwwHpDPjWkthJx9kYcSrBUR6ZS5ekAGyLkmRcsbw6uuuLFHTX2jYZNYmXeFiRZQurPBCnUmiukAanzKS",
  "key23": "2FdP9KkNpFEuWMBCGWcc9k2RwXw76gAZ6i9SauY5GgAhfbqM7V3jNQBLcmr6YwjpHo9W3MF8hSEStw1FBezvsZQH",
  "key24": "4ocVpeyMx1Tds99wZigjuD531fq5qjSVcFHZyBheYZZzMa6sdmufm9njQXKPFdmX5fC9KJukdGLV51XSjtU5Qs4Y",
  "key25": "FQvhjBTye4hGYSAwiutyLfxQcoGxxQrxZhY6BHLCddkFjP5iYyPgQZWkwEi1px95CwseAZgm14Ph78eTofcnJ5U",
  "key26": "54DcJWwa3Cgb7xgNSVJjgwwTMCZyEKVeQWJ25gu4J9idgCH2LY4tuNYuJTywpt2GESKySpEFRXgjLWUj9gJLPSQD",
  "key27": "4zSLWm23fBc4DkKiPKcDeG42M48gnnZhN2JRzENcFM3urrDA3EmxxwSb1kR2akdGDWDAC5Cdy6GjTp8BxwmDKvF1",
  "key28": "4y9jBBteJK1kLP46iFt6gS1sCHKwDDRwEdSg76nRcUK8J9o8vviYYBqNyVo6mBmV1EUhSU8aLg1jezKrP8MfyFg",
  "key29": "2zS12JdWJaPAheEWhDsomY6riSwpQpVkN3mCZotcUA3iwA19coy97uYRrEZa17bW6wKqApgu5cJc7KGMMVce1H9n",
  "key30": "39B8HcdKJBd3QHiiEgfeNpa3uda2PThnQ98bTnDRZqKWpFF6oKaagc9UxepQiHheBRTUMLHVYhDjvvw2sqDTCbaX",
  "key31": "4YZsdkCXCdKgRQb5jeFYpspP1GWcuU2Z12bzNWqV5LPebjpNDumtN9Xt6DuvFieHEXkrmrV2r7W1xKyWc6Gt6pJ7",
  "key32": "cQ3g53uzNdVXfp3ypuBRZZJ6ZCQGB7cshSiNgpbhZv1LGt3ExpqtEwCL1jbz24zvc3d31tc7gfUvixKc6NfpB4D",
  "key33": "2mD8Bw5CpjADNSmDn2FdUgKxfLVNhCuTNYVMHqk1jpFmSWbExqAFC8RXFgm8dQhA8fZwA5BduYrg79Q7oq2LHrPn",
  "key34": "HcMKxdAN5rb9pfUYTgsjDdwd6wYDB3gpPU6wZVNQ3GL2RLuaAQ31ad9Rti4HUH3hpXFAFFQFVJGu56iL67cGivz",
  "key35": "4K5i7rmHKwfPtqBgir7ndhX3u5YYcvDg71XM8SAjx1dbKy6FN58MxWsjPUiGWiKmtWeqy9bpKxDA5oXSsLDftbnK",
  "key36": "Q3WsunrW4rRtAGCwuV1HAdU8gkyKeMvsSiMG5U5T1dD6j5dEEDy7H4LhCTK2XRojC4KZNbpQ3PkHVV8C1LcEyn4",
  "key37": "4gD1wM4cTFuBzRnbZVg9sbV9HRvXNajoFV5Dn39n4poxGF9GRHmxfnF3r2XacQ4pyRzhgtUUjyRP1szMKuTY6NVY",
  "key38": "3iEXgFhiYgniuwbn2xc2af2k9P2wKxqXTQakd1ZoT7ZH4ejKtEp55EFaGbf5ucFQVxVNEg973F3q7ywbr7isbFxC",
  "key39": "Q9cj1S2KQ8eoZUSShMhNrbqWcy1xMAteKFHWE2tVNcnNh3yVtTrhVKDYS7xNufBRF2ixMp5SsgqnFWurbhgCJxM",
  "key40": "3reyC1zvTwD8qAfWNTeyxGHHCxKg1aQ3V3JWCy9stAGb5cWfgPiZnKHq5Jvme7Dpw2isJvPR1d5Rh2M3bbbeWfgf",
  "key41": "5nz4jsowA7f32GEN2YJbXyuY6wpxYbu3wD17sep6YdvcyDRuKH5vnJb1yjxfBg9TNGZFPwWe8WYeDoNUhiNPMvfU",
  "key42": "53AzJAw6gjexadm66VKeuws2roEm9d1o1oYrToS437NFB6wSMmJQRNTmzCSnfXNmgQYQpueFAZFn1x28wwPTeYxf"
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
