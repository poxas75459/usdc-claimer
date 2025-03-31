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
    "4QLGDtPC6StaZWqZdFMAXWXQvrHphHxMYZF9PZMFECZ9ZX9buYabbLYZQwNJPsd5P8k9EpameR32sv3j6aFvtaZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gGV8jeg354xZ3oKZByowmCqv5ovXv9wsTiA9vR2Hk7ZCKCgZDs6nQyjhvYiqurFCtSiTsjKb1wma8YV79eVeHxy",
  "key1": "2Q192torWjodqsvCUBGbQ2G1ENwfouZzpivq4ZhT3T6FF2a3ZmwGJriWMru98mjSK54V6LT8QkaskQwhheEifgwT",
  "key2": "HkMcxEKtykDhXnHsMB3YsPedGNNviGi14bJKaWJQ5q3FM49kGftJ4F8NyDCL6knACrqTqVydscuEBV2zVUXN8T3",
  "key3": "yZNa7LimmfAqQYoPdZJV9Ri2uzZyMhHBbxmQcx3JDwrN1fjEkZFBwX9SWZR6tmYpHMnmmt1T1tVywGzwT73JawA",
  "key4": "jJBrhE19gcMC48DznpRtFn5psJEqAL3GZp2W9ZpBEjW2Na3PvzsXf1SAFaETZm7YaARCo5PKCVHLsWg1wsptTF9",
  "key5": "41CeKp9jhU5vJnRQzsfRjir4enmWpvjUWNHs2pfsNupfCZmKxmDiAXrTYPw6qSJgyX4A6peFkX1HEYV7S9Us6NV8",
  "key6": "4YmUiukJkbYq9A5daaxtQKfMt4Pe4gjzzWY4M7yznPEPzQ6n1jqDE8TYmsw3aiAVVNcL8UfftZvPsJPLk7AUCARt",
  "key7": "Cc3HKwBPwcwjz3saLHMAd94iXr2TQE4BLVmfyPPSV5SDGT5q34Qhk1DzY8coRBUiuCKs28TFhytMWoswbW9dgdR",
  "key8": "5aH6AzSHurLiuKMRhpmbYrCgMevfajDCfEDTf8LyQj4SptaAWjBZgxEMyyWSGp1G8DQwnNisaYMkB576TH4GDkxg",
  "key9": "5syQr9xACh4f4GP4TBN2wZWdYDxS9VQtQTZgA6gQAY8aiy5miox22ZcVch8ANAox3b8xuLnZ3QZitPha9TLeyVFF",
  "key10": "4NPjjrMD8Mm1jrisE5V2HfisCxSEarW86ijEsxxdjYW6c4q2da6g57MPm6WW7nJD2JoUXkeHt7XyJiCitkWBFnT4",
  "key11": "5tq14o5V7dUisngtKnS8aTV9PMXEjjdPQGVskF3oATvjWj6yVe8MJF8hAqtYtumuyBWaBr4RiuSfTavNqtPd8fgU",
  "key12": "4JEKT8Rcmf95k1Pv79HdAfD2c75eHrfN4AEju85jPRojX4xG2ApymBcgFCzBj6ck7A5Fy81LfCGtzuthuhn5ayG4",
  "key13": "43MQUprom1fjKzrbXbB9icm6bqFEgP4tUs55BdCQHsvBog29MUCX3PvXTCztJf57tfnFnigwRKfVrc6VzJ7SCQGr",
  "key14": "3Lykiw3eEwy2xZxtG1TmFtzMtW828ya83e9R7ny7mgP9VZ4bpFzVpeWArLMb7zLKkrz8NMJMPud9yuwtm1BVAYPF",
  "key15": "4DhwnCPLExxNfRmwEAB24Px8neWLLJgwt48cV4ibNNS3WYf4rVvxSb9ENXgXdbXD3GMedx8LAMBpjXtKTESUQLxn",
  "key16": "3FGK7cPKPwCZj9TKxkTdMKLgTsaAWk5HRdNUZBJbL4Wt1XhcRNJ27jShjafQZfJnVjqDkvYFviuqnWFMy95tYDvb",
  "key17": "nYmYYr62Hj7qyE3VnXYAh9jujK36XpAoxKhizKDwpKp9XeX8ndJxbJnUcUSJqNhBh8osTYGCvQLpcFTmt8RbjKt",
  "key18": "3jLmDNJnke2D7Ytd14yrYDVQ6EWBVjuHCsnqd2kqy2SJUMgvVeRFFdBtHtiF8V8tWKfH9ULwEJLA4N9Cb6aBTJwA",
  "key19": "4jdh8s2kaYAxoMoFMtCbmfRvc42tfscz3rSEWFaPQb3XL2Y39krCK8SP2yF8hPhukG7GMRFBmNs4CLgMHkhVYe68",
  "key20": "61zEZRkmVzaNtNUFwzPsJBUrNzudZEDsRdi6TsNDuyYnSAAYcHG6SRWV9mQhwvHAhvCRxpizk5MM7H68j4LaPzT",
  "key21": "3wmZ7ptZP8YnoFReJz7fAyKEe7muDr6WXtmqJpcSwG8mFzHqgPNYL9SNUTh1P64MVJifpQ4Ndkxpg5vGMjDuxyuN",
  "key22": "31a2jPqWo9jf5eCkMoT1mC8pmctfKeiPoYtNPh9xcadUMMGxxaNWt3yfytBEzkziSTis7CEq9SQq5nmTZsJZLfc9",
  "key23": "r9ht4vFnoRD9Le3dLSY34BGMm3K7jam85ktrpuBHzXLGrNCxVEDFfBKT4x6bvsBkstcohhQBADJ4jG53Jiiwshd",
  "key24": "29RikwPUvxvnRxuus63bDHqFwZwcz7hr2W2BhcpR6TonHAQ6gtkmV4SLEv1Enq4x8RpY73qW6cgxfCo76KU56bg1",
  "key25": "5ndynfhME2dESjPc7APr369zLVzvHoq2mrWfJw8EsBdTpJzbhuxWMBGe5EsWRdZLutqUUAVPSt9UTrwVxNzihtpy",
  "key26": "NuBsHpfRsfPV1QtuySpTzQNqRG7MYQejbMu9a5Nz1LUCpKH8SpM1kzeoa1qgTzQxBGndiupgbtk8DhyM91eHPaV",
  "key27": "E5GUvEBYPR875hx96kYH8e4wyo2Kv3WLTVuSzoh2XLsNX76wTVNdyiJyKWqb4z69XrYpTvYuyBxNp69jAeT2zqn",
  "key28": "3EgSUsRHgcnF9RoQme9TE8mpB5t6cr4S7YYsgU5hHasySkFC8nHaGEzi59aPgufiXGEvce6V5viNh7H29ziDkceR",
  "key29": "3CcH96dyX8A7uYa25zhaNhTRHwwrWKGCnV4Exd15jFDXmsMywGTZVsbbxy5WrpJotoztTpm8xU3gjHzka4xM1iat",
  "key30": "3YGhyMwZLzowkxvVEHuxZSpYTT9gh38sUbeviR5YDxfKzPNm5ygS9Hhk4C1cMvJcqEcx889o5Vp8BB4jZxY7EEUy",
  "key31": "2Hg5spPQk12ofeBKVAXzmfUSVZrqzNALKHJorARQad8zcJpecXLySTNtKaWzNR753cvRW6e8wPiykXwPSwNAU6VF",
  "key32": "2xUXC1cC1w8e5wTvjym6J4M9ZSTXnXWgZaFrajmg7WySdip3EeaBfSctHgNdRhP7tDBPDmQDtiFc99YiuWJnxy9C",
  "key33": "5JEDZPVrFsLbKXD9G253KyXp1bnaU5LHm2vxt18tvhzWXkSHKazPBmYg8vYoeDTtDtaKXA4YWe4E9EaX4pZgsFnj",
  "key34": "3Ca4Asbb76QAhMu8uP45Ax5fKtH76tEKgggjKePyXFVLossp3g1HQkCYvon2YM6NZEao15HCRr3ASRYJjgkMFL62",
  "key35": "4cj1JPxrhaCE4imuhoJADFCeb2DjaVLwsHoSzZZ5Lz9gHRvWr6fWhZ2CNJzqG79yKv6eoUaRKYHK7GwPVvK4zEu8",
  "key36": "5AEV83iyac7jcqx6XodXAcBxA1QcSA8HtU6hTKKJLXzihb2kSmSxVQop4krHrMmRZKWCH5NZGGKaQ2zHo7qhYKzR",
  "key37": "2Act6PKNTWtjs7aDFjMsxEt28HJmixeZ4o4WpD8WcDeVHaGpnCxChdJHTTTJJxVsRe4DZznaRniqec1mVAbWxzUW",
  "key38": "42mKcJLVVh1BzVc1tV5tJrTwxHcmaqCSrMqr3hvnMJaS59etfxKxVeTJtpS5G9mrrCoPyFfPHxqEaroDm7UtYtKQ",
  "key39": "5vZBdk8pkci4VXHSM3auoBKscVzAV6r3t1soFLrFjTPNArX8tWfcZdiaayG1nAcvadeGSpkK3tXZJXXEGZZGYRq4",
  "key40": "26tV4xbfFFhVAH9Bw4x9FQeDr5EBufJh8iGXX9q7nneZYpJu8ktNuGZviuYp8jRDtF9vnTK7VUoujwkZ4NEqP7Pz",
  "key41": "2FeDY58ofBxfK7YjRcVcy5r2Qk5ARaMsEKVXGURtUD3ethsJHm7wgens9dV1J2qBnhGSdvM4uqS4fcUAJHF9AUUH",
  "key42": "4qBfZBKZReUHNtxAfDY5ANWBeFP5zDtxmyYs4AJTGE1Ta9Pw2hqpWNAnQr3QcMeNXThJKk1UxGKFVYx9zKwtjkPp",
  "key43": "4DMPqNZcR2W3ToND2AN8bEmCLJ4RNzxpxBjWGuVLXr5xi2EnTrq8JZWQ7oVXG76Z6VcR28jcQGXxePEz36BXpYtb",
  "key44": "49BMmy76BkUjXAU6WbyFMyQBdiHwCiHRJoGovhRUhyUB5iWLhNuReYS2c5bfubganzwKWgWEfHSFkh54JqRYJtrQ",
  "key45": "8zSVWBispJ7jXmg2RPTGpZPok8seapzpR7KRhsrQKB3sKPSLHXsvTd4vZrFFwzpBpgypZk37wE4Ai7Uv1z1dGPs",
  "key46": "5ds9GafNa4nsrPrzLRnSkoLaMDEVxyA5ZCbTuaHsrpjUk9zg1b33uuQBLmMUFYEmkaB98sJjiNfX1YRCPzTk2CSn",
  "key47": "b6pZKSp6SSV8bkFce8efcQN5hN7vhtPtcvJNCHyEnAv2X6dDWsP4sToV8kNDiMLFVWH54NsMYkjPe49j7KYEpWu",
  "key48": "8XzpX2T5dHSYkFcWuJHbsyX7tjykYxqfAwxkRq1qTEXBH8moEsArWTWPJwTXZzvBU552PqoJu1sMiYfCHLQGrN8",
  "key49": "3zCrT7SjWEHBvQpb1uUgkHVwj991MYeCy1wuoLkmyRBah61pbh2yWCK12MfF31Q5FJJ6fSUteUFbG1Wyy9mAojcB"
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
