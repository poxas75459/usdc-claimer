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
    "2svQLQvDq4m6xAntxvHVCUUBBqiwvJDTSixxCjnTgAsqEnJEheK9xCm6AVUh4MkYKabCQECzgohKSs1MTo3ArjNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBJGd9nWRnFkkpFUFiswgLegtMkr4u38W8oLGayPgMST9guVS4eHodiHMQqAWGdvPRDLWPDW3zYDPeTHv3nCcj5",
  "key1": "21YgaV6n7SMMF2stAAKnaTzVPAEhKydfPm2t2ch4g89CWndU8nmtckLUFBfiVj5xsvTRVYkWKvi4yF9a1wprLigZ",
  "key2": "3hCM7YtcSDL6S9YN23DxakTaL3ZDoCbKu5ExCdXVGVXAESoELvhHaP2ETABcddscAEK3t46mvTd2vCqjRwEozrCA",
  "key3": "3Ep8UBzg4jzdHJghuVMqiwRwBSSFmc9BQ9QZ7WW6ZxPkyPM1sdh39NwptFJUEyG3xsQ1KqySXQbwywxh7pBhn7o5",
  "key4": "5BpLMV3pV2dvFm5PEpnH6qg2jsEVrsYZqetfjJZw2CnTn7WfrHYc2fCCuA7feLmaQghGea5VoGRL1brRqWiMKZoe",
  "key5": "4AxXustAkotwFcgVRJk2Qd8qpzpjf2ndXv85M1P78taeMeFwBhKkmZauWkx7EUpDV8Uhy9cmL2zquBCS4XqpZgGc",
  "key6": "W5JDYikTLtRaWTskdiSd7KxBuNEy6WEW44miY7buoMTbS6hA7bpTGgSRhEzxRuSoxBDLKnfYZWovbMBnZoH9Ux5",
  "key7": "59CCdpiShZRpe9ARmpJkyY5raqsap97iKH8GVu2XbMACVdXRrQMZRyibL6Tac1tUcdZeoG9EZpS7HNhiuxxg89Ni",
  "key8": "2xedhYsQK7VSuDg654YNL91ig9689uXeKCMocF6ESJ2rdqHd4f89NDBWhp68tA8Lv1C7FsduuB3n5nmmrJHqypo",
  "key9": "5KzBQC1FCXT9wk1ruQs3jqNuUncrwRWaHdvW5mWjiTYLEdJpaf84XivjhQLHbAYtQZ9Vfvt8SjmLLs8Y1ChgQw3m",
  "key10": "3jgWJwwqHYrcyJyDvVBFHshMMPyGJm52NKhokaEfDjhjAisyPRAEk8wr7mCn9SgkEeT6SjdGT57eyo26vG1GyyWx",
  "key11": "uWDWbsqSdSi1tpoweQiyn6Fosn5upqkTqNkikNLX8pahyzhXodsFGbuHVMDMdFWaZRULL8XqH2PNwYxDjN7VGLP",
  "key12": "2qZuMUQvZU1CsXDtzpmEsYoGJHhRVFAbmwwYfArGzVF9x8udXVh5C1ZqdPJJTUdByRfZ7nWA1UcRJZwrn7G2SH8H",
  "key13": "5U11xTWcR5DHVLicqVg9ZZv9TReEJ3uyEJL2h4mPtfa6BFbso9oXF92EKqSd1AhTdz6HZgf6wb1morCBSmgfJ8r3",
  "key14": "3cZuyMMxbUD8Jztm7J4f3a7Ckq48wxdLB4arxV8oc3LT6LmojACrE5TFmTq4wLpwV5roxJ3s6t1Xqwa8Xjpaprqe",
  "key15": "6sKbQ4geL4rj2MKDARG8YdRugC6nfTWqBap6ysvFhR2jQGNApcKdBALeK5UJVxY3vxM33Q9QaUwm2CMszwrvYpT",
  "key16": "3gzyNSyFdPnnmYx8uvp3g6zRUrD1ox3fby9e3NRtQKd2U5ceer8LeUpsZjnhFrQjXtZDR5Z1btqrBcgBybEzca6q",
  "key17": "5x2qJwRf6hXeV4KFiouHZbgoEUfYA4qYPVL8L3E4T4YnRqfSaJe7eL3meqcEqJ9DGq5HD2SPHrAdtAuzBwnHrdXv",
  "key18": "2uGUVY5Lvo2pKdHcovhmFxmYbkALZ3NFypDBpTsyApVL1YX48FR3EUyhTBbnvecpDwbktvZrR4pa2zQftmSQ6g6v",
  "key19": "369FzEtEdnUmiP27Vbq2LUfYj8KeA9hEvfJ8LPVaS5aLsKgqqWBNq9xWAnYZ3ykHoasCafHpW4jpkUjSzekSUPhM",
  "key20": "4HTYJeRkpHq4tbLuar8gFAjGEJK8VxpnAmPHWGG7aXktkQ2JcLbQY8Eni314SAv1EsAghd6dh58Gm914m1wCqQoD",
  "key21": "3dcnCudmV7RHftfsZT3WKnmwWy4MM5TqE2AvJneKx238qeZfTbopyW2TpNJjLhcgX28BxPZKBWoZQWUEjpNbS9Fu",
  "key22": "izBPQQFWVKxiX8WinFkEzgF8g1auG1StrNmvFqMNogVJMapAWtozjMJZ73V3xRrxZxNFGf6sRCN2yAPyCYxTbee",
  "key23": "34yMoNYYaewSv4J7tf3WbxmbhayiWKUBo9WRT5tyBcirM4qqxYF6HR7j32xFgVeE6z2GPaqgUs3Vqh3noTHLcXF",
  "key24": "5LBYnFuMrQMSqaR6Ex5Fc2qq8cRRGoWPwLYPWwR9kE8ahd5Qo5oMgPR8hmUUGJTxvNLz641VGNRtyBEWBW3E2TuV",
  "key25": "63cghso6msfYTsYE79g2idKjByWeXJVnNWfcgUYe7saXCA5hPnpvPUeodNBHg91qaAhVrdeGjrhpYzyLTvGdDp1z",
  "key26": "5WcPwus3PRsuQj1HDNQTSthLEnC1QYWrwZHqrtz587DuZFEFjJEHd1w6v3EPoXgYfZchrtrgmU2JE92hh6vSyWoQ",
  "key27": "38h9SaQopNhqEuiX2sHuxZrB2MYif98HiEw1TC7Q3htptRfcoGk19mwimqoaw9cJPiFdNZqGMawaMkhG4x4zEoRW",
  "key28": "4XHHdu7StP3Kj1jy8jmoVa6yDhnx2qpjjeGiKNXQQ2d6te2eDzps4mQZ7V6pyu3abjMGLJ9NiNiKNWR6tH8QShnY",
  "key29": "5kQkAYRYYLFSzqrkDMteharycHzo5vwZngeicBRwK3LgxKa13VtSD6gH5ft2z3znxN4sEPcauZnBatdaCxrughXi",
  "key30": "5XSwqofnCvpbfRSrXzq7GrVm3S8YrGhgatbq2h4zjdGo5yCWSD8xVQ2ziPF2s2aKtaSYeNd8gfxwuEuEpf62hYSP",
  "key31": "2oXhNA65ATRYUUe7jeN8V79cGG1tDrh879PHf7kkmSEbpbnXqmYK2X9Aj6EVguAeE3MK2ouvipKE4TTmqN8ZYCVz",
  "key32": "4P4ZYdi8cKQ6xyxjCHmB3mfaXJ7oEuG4baD8fTUK8p3HeLuAf8KDbfiidWQcjw2uCxrmi4h7ADTr8SuUfhpZHMmw",
  "key33": "4BPPFAKJVPXpU47wwAXMpiUsPDqgKZgGt7yUgbaWzsh8JTC3Km6YwM2kQP8u2258R7n9nHWu42Zn6RQRJeMVitVz",
  "key34": "3NBcLc2kyo8Am1XroKb6iwFARBfDdUrBGT82uZR6VzZTUu9W5x1TuCcAQBdKeNpkdLgXkenDMtc2EaxST3N2Qmr1"
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
