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
    "3JoWNgm7vu52nEUZndBM53Xh3zbgGEtMqBMhvmLBsZ5sj5j6bk3BMpBYvxy1Qf9PqSDihF5z4KCmvenmAwdVmkMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DSRiRWtLnf7kAHRQXFRHFLriG1wDM7W8RAYNhJ8Y6axjz3CsZNeWZvhR1EBeaTaRvMb33YAhU1DXPdiJXq4Lwru",
  "key1": "3tHrxre55rsewFJDeM7rZbQhLDxdA8vBidAxL4PocCYqFWJFHa6R3iYvbi7uz9h1B9wkzHYojgQv7gKckXoCdqx5",
  "key2": "54C5KQroEgeAM1vUMsNuN51BF2snJ1zhyUA4tGmgrXbU38D2Y9qFhJHaervyMers6PyEYfuzXgUSUPJ6iYCW7WWn",
  "key3": "2YYLwWH4bRLuDzobHrjc1t5f6rdGesHHUhEJLY8Xjyg9oZVKz7JCN759FhYwGJDo4NWvEDysKguL3AvV8wQjveKT",
  "key4": "4KkZZVcVER9fhRCu2ikwT1ge5knek7PqrjW2V6zcDbvbdtnf3rgXNKA1BfcNoQt5D4dgwkxhCvSf83TDM4P2Q4d6",
  "key5": "38ADwFSNoKmQd2ZmsjC9yCSo79SHDqXgTg9FJhL6UJD7XEtWHt6YCvymzNoFu8sMk9wvpTsDEeYSCiYAGA6PcwWb",
  "key6": "5KQD4CAExkjorWiJNDpSX5mXb6qz9fYCo1Mfpv1rNbSxp1jGS1Rm75WvQSAe5ni6juNVUrMsVzahKJidYcGyBsLg",
  "key7": "2vzJzX7czNRGpJhsk9LckG4JXG2tp9FLYABoiwNJxetbaY7w5pNmB3SAuo99LDsCgbQ2b7nEJt4bkuadbP9Vttyf",
  "key8": "FM6hj87Ef3PeMM4YPttb8KZ37deVaywFDTya99CPEMjJcmQuLbKgC8u43n78PfSLDHEUpq3gZTpQSDmYUugbDzD",
  "key9": "4vfm3k5QS7xQhHuL3v1aqsrTK9ZFQndycykZjYtTgrDa1sBq6iXLo5zsqcyEzNDKdKtbTMCNR3bGTfax1GxGYrvy",
  "key10": "62ES6JotRRDUfxnoQqr95FhuwqRmrKB5ZKyyMKQ1mAYDueTFjg2eDU6FK7PCzK7zpRm47MzvaTBQ65vhj2beXnDT",
  "key11": "5SPz8wEUaZNph1FGeSGveRpMaJ1WNPxX9kHwGx96g6G6VVJVK7G8BrNEJmGNf5AnZstadXEuXLTiWU5SNQAKecJ5",
  "key12": "42E1amzBcEAe7d2GqnDMuSXwsrYCC4Py4pYu82f4UVUqf8pmrNA2V7NwKRYtVqpFrRsX7FhuJFfNV4NymCjP87of",
  "key13": "JSShvFCLjfPjWDL5VKM8TzMRXhvaAUknzo4i5FiVwV9Axmu5gpNkHomkFu12erR6qY7T5aYfuWpCVwupLbDA2VB",
  "key14": "32StouA3dX3HsSRKckFu9uNNtzmJJrDn9WTU7FpaMtZL3KqQf7JgcaGDc9wwwMLAMNytq8oNGLvVZjjnvsWv7PmM",
  "key15": "2ny7K3QLvemVjBYvdVkJy83CfmyEjv7mfoTuD9JTKh6EivMG2WCFuLum2of4xjuBHW3rH4xtKPpJsMPSabY8hNCM",
  "key16": "4XoaZt9EXVqC6f4Y4ZJKYAUZGpKGSY65QFxG9ocZ9ng4BGB3uYisGbsrv7e9TznoQKAnT2JNcdaVniRLS1Hdz7HG",
  "key17": "5fW6VBCRB52VgkewQKrfJwATTsRf7c9ry2XwdZXKZZwUqMGZw6m99gL3hJ6r4ZZQFdUroe67WgQTMCbJUrBD2j87",
  "key18": "ULM5ETWm9jGi3WrpRLrmriMDe1LcPvyVphNnXbYSwNRaAJxwYsSUwduFUAizoRftMDe2kXXDYqatMneoS624Ydo",
  "key19": "3oK6fiBfKdgtL1kVpk6bKADXKyDAN8AxYNHPmHx5azYRYKPjBo7HzzBjRd6EV8nXE8p5BFSFBvHcUMcUSi7FQ4nU",
  "key20": "raPeASeEkaQGvvMN1z5qBKxJAJVWETwATUBAVnEeCBCnfogDbw8hCqN5vDVQLZyTVazKmd5qxLsMMNdM9AUy8HD",
  "key21": "3EzuhBgwN3KtpHaeSshDbLaGiKWew8eFygeqPxfbJaZ4muLye4c3zrV5moPqW7EMGa17sTyYdXBqdjah1Zc6cq9E",
  "key22": "yMhHHFugh1r6nTYVHQNZ3gr96qxKCvkzabbVyrhj29w1Ntoq5frYK1PK3XpEXppxR8ThzNiA7c2UxmEtiMWUEtw",
  "key23": "2ADGgMeUXS5kDmuzGpiAaY1QVkNDrfaRjvbQTFVnxSL5dFiZKJmzL8jArz9nkbwKuc65NDNum5Lp4GC1n3uZsrg4",
  "key24": "uwN76g4atsd6z9oSzMLpEkgz82F38ZruWSFfZDvwVrpPvwvR8FVZ1PGzwNwRrh9cifHFhpzZmjFc8QUJ8zKamkB",
  "key25": "2ZvUeA9H9pNJBxJkopnBb1T2V1yD4JV9NhPBs4acBAtbfGaKYyKFNMXG9HEYNEc7wqjLVpGtQY56R6YV9Dsn6iQ3",
  "key26": "Fqw36eoj5o6jsk33R9V44Uq9Te2xKztiybFuPtCpDGNcyNXJGN5dNLcCmsed7xkot9xuihqHnyLUzhrJAAoJb1C",
  "key27": "5Pafox1MFy7ZbzaEbembs3szXYYB7hLugN7VcLzkGgPthDR6bTK2Q1J4PjaXSoSetjNitfAsKsKNrxCqHr7Wyax6",
  "key28": "3f2mhbdn9VciHh6KuAyTmofyx3CJEuEH1mLVMrhAk4UR5auvEAoWzgJiMkCKCJNexhVa4RNqqBwnyqwchZ4gPAEp",
  "key29": "2tGYHLjKLcXtAKVKTXTxJYs4KzMKbUUGQKLDnmyTDaxTYz2CdK6qu2dVLEpG7EgJuruK87mczouJaDJHfet8xsDD",
  "key30": "2vcyKgLdQgkQ9hdX8JEk2QAjr9CC3VGCXSqQKo8MdLY92ZgB51ZdnXqYqF73aCa3SWZFiDtRKrVuLedCK6UhhgjP",
  "key31": "4L2cmfTy8DsdoCVo5StCBm6pYr45nbvmkA41C1tcLSWHUqFpkdcdABvYSiGioYuswpTqY1sEHnspabK1rS5cSoqB"
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
