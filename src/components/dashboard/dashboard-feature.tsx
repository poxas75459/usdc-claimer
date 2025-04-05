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
    "5Edn3rYXBWfZ2WsmH6G2ZT9fhoDJExrhC79b2bUJR4ZunFUajC93ZtLDb6wemCPrB81fcSkxJJRZdfx7AEFjhkN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QsbzCBwNArxTiTAKFHtDp8bkZsjgSYquzpMqAQApy6U6yJRNABQopWTLsU111Bwzt4PYBanrmeeKrK2T3rq3eme",
  "key1": "2z1pUfao4jnbsaYQmkrL7Khc1ief4u3nAHNyY5HxGGEUeFeNtRXhHLGbyDA3tmtvvAa5wpZr6NMAS94qzXmkxngX",
  "key2": "4dC7EuyjRabgnfSpNseFdcXbE2DASoWQN8wxbqrj1gwiUDYQ7SmrAgLwHK9oE2THa3XmWHtQS4diwP1ci9phpJYZ",
  "key3": "5uV8KoVfG1m6HJHBMBxtfM8QyuW4UQK2AAmsX8mruszJw3sNutyHHFT8MrxEnXHRtbQ7tAtuamV6j7ZXgPqWTHWZ",
  "key4": "2CE7u3BbEpc8rTxq4LZpxEkLVoZxxepde8a6YjSen94nt8ekDpGdghdrT5iPu21wHZXMwzCYTXiejvPtXzM9Kij",
  "key5": "CaNaEcQuPhrAmLEAFRspjSqB6hYH4V5e5n77xMPdoQZKqY3E5HThsy7icNnbZ3BpxxRvXLyJfYyMXpoMMG45e2p",
  "key6": "2TJ7pcQ3KYA95toHybVonECDkQyL15twhyevEgrFffzP6MuyP7VQnVxukqZA7YTNH2BPbdWQaQujtQAvKiZ3q9mn",
  "key7": "5tkgJhD5deSxMJskR98hLtbrhxNSrLAPcWF9RiUL7kcoh9HDcBMbCfAcoaGeQ2jvcATWboCijU1Xy6K255UKMHt3",
  "key8": "3xxwFiHkFS7qX5xQC19bmz9StP1V3pMPwu2uFh69PzBZZNe3eQJWksyLqndkw5FeittYwFixpXgXmEgzZ4MbRxaM",
  "key9": "2qp86YAq6iUPQ3fK2ciXBWppE7SXoPpFGiwC4tr2nGugohTcX6xdjLqXzmwub3iTRsQbAhinHz4uNBQPfVU8nJXs",
  "key10": "5n5oanzk1LtYstM2e1tAvdUs4E7KPFCe7Gv4qwmovMCh4CMEJKWRWW7afsqwEXK6YYGsTkpvsQpdu3WodWLWBiis",
  "key11": "UQ4naUkkmfnSLSBc3kEzbGh98q79fmcCPBb95dBS5ctxchvLRcUYsf36WWPCoDGNVVZt9Ny3ZM6FvMuTTXi9ivZ",
  "key12": "2rJjNQ15zpVb1mBCDXtZu8AfyojXhUX6nDq7YQesiJabe7Hy3JsV2XsWvoBZ8o4BqjMVQBXSsgCcnLeQaw9hB4Yg",
  "key13": "4WNgMpQMnC6fTtS68pNELXiUbX8WWZB2d5ZPR3hyB9NGEQqKfycTYgav2mEToacoQY9LXajiF5cCwsNmANCJKfgH",
  "key14": "5SWSXj7GQd2bo97Rz9RFYniPB7YzQ1GykmMYDx3pCEVBcKcQ9GsCNugF27B2ApcKFaCh6Bmy5fex7LAoBBdgyjEo",
  "key15": "5scTwQjiFcEvagDnP38K57AgvHkzELVhfCJnpEYxPcQr2sunFt5ZHWGhj1vFLGKBHypVbrjBRBjzeXKUekMWTN79",
  "key16": "fytwMu4iAYNHQ5X9caVC1q8Yq6EEvFgveKNXp6Sqwxq3NPFfq4xQSy6xQKnqheRh852f18ygr8wwQ6ZA17twrNG",
  "key17": "5AjWKNqknh9YqukqZ31wnpWYR6kgWyVQiJoLianbj6q5wE67dMh6ktxbbADtA92cXYUiZLbztHHZHvU7iKj8NgTb",
  "key18": "4w2Ap1RK4BZdUFyy6h1eDwz8NxbNqwLMqMsnmSoqCjy231aWow3fsyJzuyw9CHRotbBsHhs63i5cbZX4vinc9MfE",
  "key19": "2PEr3DuTMUftU7dmps7XgNsAteyT59EhcyLsAg5x5deFHYP7QgTvrVVDzruXdPCf1mYHNADN8zTQHJMLbVBJfsDP",
  "key20": "291mZY483UmEB6vbDBXYZtf7ZqLXZ4RZVmcUeRtpFRz8Ukc6z47b6ZqWRgzEjRxnr3FKvth8DDNHaXLAtr7VJAnE",
  "key21": "4UNHtKEiFzGZdefF5tu7VgP1ZmZbyvqRUvuMKGLX8rSHs1owWgNUsghqP4CzJaonZxk68sMFgvP3jzeo15axQqtS",
  "key22": "3zBK3tiBnTfEpLzXD4CyjX2RasGfe39x81HMjGRzRfjF7CsvUAW1rRVynnDd8HD7vjwJoucqhMELhvLdRS8jaNbi",
  "key23": "3mm11vcZzNbpmjV1VhMXFBLNsrNMWvucY5rzwsZ3G2UB9QQovWV81yj5JsAgpFvrbf74wNYqmDenZBmGpWwUGtGv",
  "key24": "44PcYxJwVHJj8H1GF3Q3v8mepmW13miaTEEWUxSX9vVjkV29isigSDgiRLYi1LmrPPLG8vLxTvWQxfqz9uaUzas8",
  "key25": "2oCg98j21MG2Eiut62s1yYn78E6rGjpviiBn4s6meGq8kx9a2CGQGLz5zsmM7BvCS4dVM9C2XLwRwaYFzYSmuhqQ",
  "key26": "5NJDM32e3m56sEBqdDLtCkW4psUTi7vTGbqz6coDeV269Si9P4Bp9JF3WorBvAapi3yV7zNHjZSdi2et6odL4mHD",
  "key27": "2M1jYKiUHCWj93y3ZUzQoVrykFdBZYHduenrPAitiXMa9aHZL9YKqfcGaNVnRCqu8ED4RokbhvRJegSnmr1FFMwr",
  "key28": "3gLxwBhXFKxMovhRJKDEEPvyXXrYyeWydrqNBSJz54GTENDy6SgbCupDaw33shMuSxNpKDV24XzqQpr47tDqXdMM",
  "key29": "2DZjPwjiLQ1Pyp6cQrvtq5P4KPrtfRsUNpNXRzUvecSXFRrr9bVkqz3G9rpNg7sei1YNEcyjeo8Z2uxwCz6HHsnF",
  "key30": "3zRiYs4da1xfk53x9pagVtEHw1MAhg3rzx3pknPfsmj14tWU2xRxkuzjQziqMxWEGNptPjRL74mS2mFCtvLYaYcJ",
  "key31": "4nLWeGWtn9keorXkymiHPknTup6DUC5YGbDTquGPjRTB2c1F8RtcLfY4XgFSTEms58tGExnWmj9z3NHsAMXYaXcx",
  "key32": "4js63b1EJM64njyWYeiySCichgHxXfVFePXwNrt7NnpyeCYgY9KzL49nnhYth41L1NvL1QRYc5KRUSFngWSSnBmh",
  "key33": "jFTKeT6VF89EBusVBefz2DS4msMUQ9PRbyZ1ZEjQVwDCM65nqhuKKhE1LJgfJFbmgjpyReuixhzgSbw2QS6uP3d",
  "key34": "2hD1Uf4ToFXQ94AppzJQX1FfusZrRMx1CHiaHbF5FB19jzPiUXXsew4MgaZeXtmBu6gaHxksz2pjqrBGmuE3thyY",
  "key35": "nkodWnxTSWNQ9vwiPsQ4XgC4hbeB2wvuGk2vfTtSb3orbfyckMQrcnJDUnrTcWHoDAKKgjt2uKzt4frkF2as4r6",
  "key36": "4SsoYzLjxLwQmZHjhgsxJXvwsuofxj52tbZfdND596XYF6L1XWv5HmCT2pv6DiXTLdAUVG7WhZ3N7C6MBfgh22dy",
  "key37": "4CaBPJPSzrDdsk6z1WrBEocBix2BjH7dRw2uPe6AtLBF8UmWQwp1ytWkQYDszvx3WdPzazC41RepRTiuatCoQoQB",
  "key38": "2Jn4EiEyNberw2kNr5TEhdSSCMxLzWXDwTH7xoM37P3b7tEQZm5zGdMoPe3DtDrxp7e7FruNBZjUErVBLgaP5s6a",
  "key39": "2ubWziLa8GgHCfYKk5bmk8h8mkv9F2FM3cf8Xe1nHEHjHRLe62mLbM7kRG958Kfg28VWHTaiNELFDP3J8cBV6UKh",
  "key40": "4VuBXe9ChwXaHx73HAtsAHCJwWUm2PjNKebFRJKFFAh5pHeCw8z4PytBzT79D7sjvpJmoCEFPge7coR4qTMcSzmQ",
  "key41": "hXg7mpm1PzRLBQSjkAHQTwjwF9wEMZZPziG257ErAxhLzE7xRakf27tqbDFTSY6UrhnZZqsReZvswKEmidYdtGM",
  "key42": "4u2r6Tp6dUisetnH6gLGkTXTYsPi1xE1gHMnY5Rmad1QsbzWPV6nLRFrLjZrAeDT5zmjceFfXJgTNSBBjQqn7w3k",
  "key43": "5r7BDEWJz83fL9aGRB6nWxy6zsGm8zF6eaMjECnmAr57J2zAHFcxatRn2umoeUuhVakZzfK6rcFxog6Vmtmwe1Lo",
  "key44": "vNTu2XXwbkZ6VuT8vXWJMaZkwSXUBZvqap81CexEt1WdS5HopmRm1yQNaGRRSapBMZY6fba9RF7DKPE5NnyTRzi",
  "key45": "5rWVnL961QmxGQUpYW9SX2gj3HYVWkq8dQBZUXT2qmsx8f3W4q12tJZSqdePJV1xSt2Qcnj9PEx9EqAeZVHvBGmF",
  "key46": "59LzJ6PSZhrhSpfCeibvoGjfeVu25Lhg3JEBpJ4jTBNGfpU53gNbgkWYMd8sij4o6Z9EJ95mH4xEvjw2BszDkxyQ",
  "key47": "EKkih33wMwXGcfSNMdUBpzrPLsFJm3ccfUqVDmYm4tCqfBTTSfURr1mCADkr8yWRB1Cs7GizSPKYVBuXQDE4Ubg"
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
