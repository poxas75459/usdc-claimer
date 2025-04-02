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
    "G1drgWTWrxX8CG2axgUSFtoEhBYfYaFAhF2NzfzgWufduEsn1pYdn74tBZXex151hZUgjqYUxZjFYjvrmuDshgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wezigFVsKoAGEwBdF5RNC6VHXvKqVxZXurgVoUgkmf617wLWN58Ax3EzikZEbchnYfqh3i84UJE8wzgDEdmGJJ",
  "key1": "4EiMkrLnpctYqXwvZqzMwqP6WiAbNXpfp2xjLkcfKBa4B9Bbpyykaou5JuMRmfu5UqEyj2ndsESAJP2h7UrfwLoE",
  "key2": "47DLoqCMJENu5Kwi8Ge8UtbcsMQdDPdjXqJrMCdq9oyJvz76iPvpKqPtxQGVK8SP2TqA74ryuq1TsnaXnV78jRMU",
  "key3": "JX7wbGAmGuMXwiJgo5RHsATazq9mAaGTzfLn7QSPDXBS9HgKceM53ToAD56xNZqc6Luiy6dJN9ddE57CniHrZuY",
  "key4": "TKXH614nCdQ8oA6FSzN2oguGZwsvToNpREutwJNRgoMZ6wr43rLFY6DDmnkfJ4uhfwaUJfT8XvJa8JSuuFeccCK",
  "key5": "3ccRKacAKvvz5nsD6Ftv1zMHdNGRiPeRdeHhNDpS2ATQMGkJbcv1cJAmJScZ5a61Yrr4ANFyNWQhMeWRcwr8xfCS",
  "key6": "8h8hEBp6KW6yvtvNRw8B8PXrYFsLLNZ1PQBpYHiMgB7oaV68y7ae1iAQC9T7t1GmEc5bYqJm8uJ1hxJsPrWiJEB",
  "key7": "3fQcfgbH7GdJovkNXeTbthumbrb8i92yNAAnSJVM2MtNigiPYXZiVCNgfpxXXd1sgrUGDwj4A8p8ahwbDxZ5JqpC",
  "key8": "5eF7AtiWvTG56CbReCfAY7kyEi9Z88FGnDnc2y8devdPwZisD5ThGFnGQcVd52L4PfCsdoawwGQuVBHTGJDSaxQa",
  "key9": "4PHBDgyPhmtJgvpm8F4rqHU8ovTFJwHMv6giUyGpAbuTC5tzHLYYQ6uqHyYgdPaULWoSNiJMyo5tQVwEpBJbs4rc",
  "key10": "5N7CDnbGNDoPaZWBtwKWLnPiBPMxU8b2fLXhY4TcSBkJqRkocnv9jhhWDuXGnYEGbh1BRQN45XgSkV4dbcC8k9QN",
  "key11": "23aaRHtCs3yJnTdtFyDiWnS2T79V65eahGrWcgESyD82nuxSicnwuZyUNKsarHSM7MCMV6iYHLaraTVhNHSF4MNu",
  "key12": "3fNrsr7YarvLGikuKTi732ZF4cG8CEAGgBv8dHitqSXpmtM5T3baRBRAWhabDRxSqLTxTDJdxT8enDeGxz8RJWLc",
  "key13": "339gr6ksVeuaz6Q3vjhPavHpS68a9QpNwoAKZ5QMhv7yowmetv2q9FB6ZPLwG6mFY3xvH6JadZcBSNfkhSbF6XYq",
  "key14": "45xR1h2KUcgGABa8XfxRn3cQn7zL9F8YJNt3NsvacYuwLrWPR4akiPTKRXgVvAsU5antGwfbEHaYUNvvu5VuJkpW",
  "key15": "5Qj9F2UjToawSie5kXLfcD7iaZMtmTemHFP88qRMZUhY2MgDGgAeRwHSCBxvKEDiUeJi221xXHTzfAmwuBc2gnv2",
  "key16": "4PF8H2n71arQRfzudgqXPvLf7zB5CRDCW5NoEw57qUvvzJcXy6gnKevPoJ7XRQeAcfgGkhnqtYJaWorV1LcHwhPp",
  "key17": "5cUTrUWsXcaZWCmrQK1YgTusoKyiU3Mea58X9KxHG39XAMoQfHmqRp3ouFvnPiFCtRe67YHrP7DhePic9GUxNxB1",
  "key18": "2HQmMVZwhLLmeiMsJBMG1pm8gCAEHRsfE1VECN2oqPuw9QX98TnmKAr45UrTr2QEh6NnmVnzMXyriuEkSvgA2dhA",
  "key19": "3VAdGxcthZYZkzdqDv113EtbTbRsbpBAKakoMrVEEpWyZdUF5pmPhEcAXNMseZdXJSYcUwJ9NzuVmYPyzyq7Bs4G",
  "key20": "4Eh5X7JMSzVrzMeBU2YwsZv3ibbgQ5WW4Ko4v3E6Xtjh1TDwKpbSsWgv23ywjMbTb98VeTTLPEMJLM6qMhEFRoDx",
  "key21": "3uQ3muMkfPtLEABuzt6WoxugXvDw3nFzYMJVFak67q5YDdTx4sX365GxWzDbcsE2PuhfScZrKh2Yrzxdad9ej3Bw",
  "key22": "3C2A8hCCcW1Qd9TM16nZBVWfatm1pcUwA9RrxVXLH2cir4xSa8JcrV59qLsrz1U13WRCCdrcTSKbyGTveEZjU2xr",
  "key23": "29Dqq9f5ABHCbZQwWHNaD8RP5sNELeRw183FT5TXNrXuprnUxgnuMsjkmzbdStbXctbz4Fex9BsPQLxsyMj2waRp",
  "key24": "3o1tTPSqMQHiRM216wiAbyzaYRaboPtfzQbiuAw6tGeggxTfg6tgaZ7UgUXaiJJdcV64ty3N6ErjZnxzivZtCRcL",
  "key25": "gwVxCL4ebSXrsEXp4UQxcteomhCGusZz75GjUbE4sgkP7yhZbtawkbBQxNVhK6BptRRpF27EdimBFqPXGS1y5nP",
  "key26": "2ZnmkvPx4gEYS1E1tqiEUEotoBToR3T28YVryiLDpKCQZJ5H97tnnZ2vfqtuqLS5j84EUm1nthwRAvxng4eY4LXK",
  "key27": "3AxbTXTg6YqjXAQ8zjnZcGaydfKCREGwy7f43425kNhBjEcSjkqXgHNK2qxMTGaTYu5bjge4vYs656y2thpfQNzs",
  "key28": "4P9oW8xUevPvw5xxM55pJ6iksZWykznJLcSWZ5SRZ1vZn48ToKJnjsuLdKXKFUzdRMnxRmixtNNa8v7QASk7oWte",
  "key29": "3WaiGdzi2xo2Qc9Ggv9ZkKzY3hyiPu7X6iTHLGXQEeQt1jLerNJZMsm3EpFa9WvVg5ad1v8Up6Em4uCenhF2uG8S",
  "key30": "2iRndTAQwr2asDyXmfsKFh5jH4sjvJmG4ynLbxsFnqoa67Jqb6vBxdKpAS1xUgRzLW3a4t9nKZseQMyZdmUM88iT",
  "key31": "4tGHauEbBnWikgnNgBC3mMGyiR59fgGSXFypR5ZLaEyBj7CsTwE97zJgUF5j4BcHHSTN8E2wZrfsVBaGpDPYVZSn",
  "key32": "5q5XfvFoxpuu4HS9dfHJEBbNQZ7yt5g2RtDsPfrZk4oUhjGkfXsEWabirwmZKoCnJurCAJKEoaFCmE37PT1kmuJs",
  "key33": "3VA5WyWjwMkj5GAwJ9MGCFzsBcKMevUXKimrjFukWN8iEM9YqaDee3izTS3asJ8kK2uJs1i9fUYTY2mNVgN1gb2F",
  "key34": "2SeT4p8T7wbfSgHaygFDAWoHwKypBBb3tr65V4TWSNJAagadxh2EnxNkJ5KCxoUYAhwyrB6z13M43mwZUqTBBwxU",
  "key35": "2HtoYuzeGadQYJtZbC4LSuu3ZZkvP2r3HD7oHWa6u6tbWPakDr3TM9zyLSEt1BpBjpw2u7PaYYfbu7hmefNwMHoE",
  "key36": "43B3ETt9QCgteK1SXGFDboLMWArm7sdu7VE3YG2XvHYDR8ZVM3obkkbc8WBiQ2RexnzGQUyfpFYjTKCuSVs84KHW",
  "key37": "5fTGTmFnnNSYRxYuhSv4gmniimubhSxC56jrDjUjHaPy3TwjBgMbLu7f1HsExCBQ7zmpcTVqnxxaKXjoxGzpEwKT"
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
