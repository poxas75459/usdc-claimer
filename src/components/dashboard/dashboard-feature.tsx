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
    "9BfsM1HcGyMkisD9ejfAhvTcG7ZZcy3RbNDs4yA4rdmgPZYwrnvh8btE5chcX52rMHShaezVXZvSz8qBjdersPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t5EyHG2eGM9ffxYcZhWmMzRCPhpyGiFaYT8c25rjxsgPsovfgXkrqrgP8iu1Ee5dBWkAKQECRL8G3VcHf8FucXi",
  "key1": "547Qa4w3GhuAHycjo6GPckcYzvKehiEwSYTK9BW5k9MjZbHMQhjKrB8XTLRP3omCgMV52qAuYLitXVv54xYA8RH",
  "key2": "DMCRmCydrVA61pv1Kf9LHEoX9jnuPkx9PmPpeCX8pSyVqH3KFn3HbFbff4LDWgvJ5oJL18kShVeVAH6ywkkVXSX",
  "key3": "38d1mBTfMbtzTsEXnP69QjUwQ2M3ZirpwyWGeNTSpSYSZzz4RHo6eoBvPAtPXDi1qp6dpQZ5kPmyNzcxj4aRZVGr",
  "key4": "5acbD8nC8PCGWR5DekbNKC9694x1nqjxiyMPGw1m2cDimZdk8RzwykLRPw1KcN9ozcHzRMPM4Z8LbvjknZL4ERzq",
  "key5": "mAM3TssUPZEDcZ7oJqQJSv59hyj17sicbqENvRai4raGxthJWWJoARNwbvegBBEmPLx1Kt1oz2EXRVPJ2cW1JMP",
  "key6": "xMDRWNRnN81rUEFxBXkQXqDVGfSQGH9TbYUMrdKaGbruxdU5QuW4hZFNJpcQt1S4c7aYgDfA2VFtF2DuD5SBguK",
  "key7": "57A1WfLYqK7kmXi3NocYdDPb8teVbNv2XN5hfTCHYNBUvq3dqkRD6m3VuiMxTbGkwM4G5rA26UAhT2kS2UwXXmYr",
  "key8": "2hkUAcddKicA8g35GWCcLFjSwj7f6xfBLShSX9SA6KzYdm7es4pYVtRh4ErGjhgr9jzZeYBLxnDFFVrmM3Q6p89B",
  "key9": "2GYrzrQNCrZt7GBAyntzBcSHFCKjJrRvJXt9grngcdr5eVJmvfveiUw7VfJLNrF3aXhrtea4meu4HZ1npFont66S",
  "key10": "4YWWR3phbjUQp4Wit9sQ4yhwPgHGix1zUEpnVSpgoGrqpwJ1krdZN8pJ77VekhDSsfn8XMZAF6dqxD34GiyMpJEP",
  "key11": "2gT4Y9hiwmvVKZ8mgASXBxp5R1cPmUgF4WzfxudJpySeKixhjPPxDPWBCwHL19R1iQwfHufdYKW5TrfNZBjXFdus",
  "key12": "M47T5ANqCfxyga71TMPWpovY8Q3soAzJZq7DCS1hgjDUb4E2DLf2zoFYr9Mw582jmqGFK1QBu5mfo8YAVboJece",
  "key13": "3fzmgK3CoQVsgcPphL9nZ87kxnLkuvmqfT4KAMyWnTbAp7LEMrjXXdz15zMQkMJGsYX6rKctbKv3XUvoJUjno3Vx",
  "key14": "4qwakuSo4fzgPXYkDf9eckqQZWsmD9rHAxQYATcK9A7CNDMBDzVbgyuzRyc9Ssd261ewyjMRD2EVgHniKAtptZW1",
  "key15": "5J65NmiL5j13TcDpthwL54azuKRabmmhpsQBVvzVJvGmqEGHAVkzftmM71TtyYNHYjWsW96BT2vTN3QdpkDHKKsD",
  "key16": "33nkkkwsC8bVvn6C358X9bkhaQtk9snfZLFNuCVsA3ACVzCS885sPaxF7Zg9fRhPtUH9spzZVvrtu9rGwyn1Pa7f",
  "key17": "4mfKHcTmBsU8Dwbnsa5gSQ1K1A3EHB5VuW68BuuT5zs1PFVdMVAYapoAjuTJ4qMibGuX8TecTEooDD8pCgEA2WhD",
  "key18": "Xch4oRbSBwav2sAmYTMUQUM4zk6bGWrvySECKVD4fshw3yJugMecyHFjDy6y9jVqFoyfxHVAzpt1w6rBo8HUZjH",
  "key19": "54cPM8uLeaHtnWonChPNmmMpmJR3nqsBCdKfmeFm4eWNDNr8gvG3fJHUcN7mgNFfbqUHLovtXHQxASnnDXtcUnoG",
  "key20": "5qpijcP7Cse2bBZfYLbocEiVt9QvvF3pibQV4sE3EHnQGJf5UXpzD9kS89RdGJHE166GXpCqMLiEzrYxQvETexA8",
  "key21": "3wK8xQmGeEc2beTPCLw6BtNwPBLTHAdpfh3r6qekkH77CGsT8tfUuwvdRgTMGci1gL1VA617V5vDnSZs45usaSPS",
  "key22": "2FwD8EeXcnVM5wpbAqccv6Ab4zbJTQAefiLUaddXKEjswqKZEdeiNYbbHpbqnHbQ4EyvrvzzMMJUJE7gKzycuthG",
  "key23": "3hwTYxmDuAKTSLRgdRYM9jWV8cKpcWwbZNZhgzmnsTW5CLeYeAyeiE7Pb48dbfeSgi55FzpCzt6CzxGNk1ge6GcZ",
  "key24": "5DdS9qEUyA8ZZsiBq9RWMibYWFANcNan75AQJWkSxDQ6Hwe9m6cMi4FSEmc44jB5w1nZ73gX7AGNNwCLhiQR5fH9",
  "key25": "3vpcJ5undMqdbKmiDcYpPfZRSUvnMTMGhsooQPqvG8CdFHwYvH1pdQ9HqSwNXAw126TnRo8eKw3tG9H86X2zNibF",
  "key26": "33Gbx7ydDgTBz52RYusz8U8yzeFFmAmrw8Fw91G3ZJGsrStMK6zeMGZwTZZ1mYwkEkvc4TLZNcjs5Ci8h4AziuhX",
  "key27": "2xtT1MGizVjyxYNNfkxuDsRQCNCiAacVM5vnSEwYQp875z8GJ9TiV9fqBVwjfvSs3gHf1dA75xeq6euoWJbt1bZF",
  "key28": "4fD6irmjwDFzWDF8RH5UcWkTwnrp5ZCTHtYGxyqrs44fD2kShBegBjwkopUiMySzRQzUodreq3PErEC9DSF8JLx9",
  "key29": "2LyLn2z65V6ho2XMarHwdnHjrpkGYbAze7v3ggwwSVPyGs1Mn9KYGPhGiTMDEMTzjocCwbA97cogSBwNEDivYTSU",
  "key30": "2cZ3e6Ka72XVA6mmeoLkFgmUoip7KY2pKaJk35UQ3MWEUNgX214p2Cnh1bJX3T4t9t8PfpVj1uigoa6QtUf4nu2H",
  "key31": "54kfyjvQfshty2STsDEyFBukHnywtz9DRRkYkytGE1cJJfTXhRM5Tc4KVuLcoMVy1KoxM2UboHf3Ve1TL8wyeMKn",
  "key32": "2CaN2bWjfzXQ7GSdPkQEkgtZ5geVLDeH2sB7kRi4L35hpC7GQQi4UW9kMs9TBZ7D887EWkFHwd7Q4rxQ3FfZcTz6",
  "key33": "4enQMwpT3LgcKXeigQaFwnyJceMxpLEftvQrov94oNThsaFSnkox59MnezKQroQ8nL9VGp8LDFKQj1kt7cPDwQhb",
  "key34": "48h6k6u4jWPjUZJg4KGGcKL6hFoMMmx7LwMdg4biULdYdkKfvJEegWuNUmQ4FTifqWXg9seRCyMT9D1soNe893s5",
  "key35": "HcxnVnCmXnz66oouVc5Sp1PF8B5atPCHsMsjg5BbSQpStgY5HTgXR18911nzkKy5wsiWYmmdtW8aGbdvUSzHFWz",
  "key36": "3N3Ayh2MtuyDsu5AzimT8nzr7sF3YwU3NrwLviFGdN1uRP7SynP7yVVHmTTxrdtEQiHdwpmuLbAWM9DVKzR7Lr48",
  "key37": "5SNJtRpJ5mhX7NVLZQV4zjrWkWrn395uzadSsPm9a3KFfUzNvr31gnQSL4k8LMf34arS4ZVmmo9rsECpj7qVwy2Y",
  "key38": "dAmEZpeJvXGaaV9uKcX7QFkiY3qKScCofcJVqKQZVFfnZBoykRNkTfQT8vb2AsJSVyXwJR3zBpSLRwjZsZ8f4JW"
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
