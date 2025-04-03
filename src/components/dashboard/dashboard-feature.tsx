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
    "4ibeEs6nEQqZDpLACGXRPYc3kcDtaw5H5jtHN4bC36dhMjoTRXHaZqoSoQBqc8M1NVk6E9PEoAqK73Yk5rjDLT1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o9sxisPxKC8pgt37unNTz7fuAyniQNpzE3yfGqn8adpqavs7g3fhEbHpgbifk7Yn9d46JHUxqevVat9f5RXGEdi",
  "key1": "2SHombtmXbPyUGFbHTvKeJQgAsSkXYpzUNafAZ4dJ7BS86nSM7VTZ287gKLWwafrk6BxLvQB8ikNi7xUxCKpu48T",
  "key2": "3KvHqNhSz4qfudU4GAtVs4R69n1FB8U1BfErEzaZyWiAH4RKzCgERq7Cz8DBJ7Yzvy8RKMX4QZiaAY4uv6FJEp44",
  "key3": "Cg4ksXo6m7Y4DaE9Q52nrgULx6arLvxpeXtskWPYRaCroi5pYuLmkeR6QC79ev9LK3MKcaAYbGyPGVGEhf4HgLT",
  "key4": "5QxXjPuH4jxR9fiHJKdzymrukTnWLSszoSp8XrwgmCcpjM9JcLn8tYKFxYDhGa7LNeFSkpBxQ9UXx5vmVMwRCm6k",
  "key5": "4pT7JGfL5e8an8t8n3iYoV3z7qswMeDtcwWE9p8dLCnxg8VSEfEfUkp7JB6AJYyYdEc8pEmEjNJMtbXg7FYx4PHR",
  "key6": "3kJKrc1sGpGmwAC1EMRcoj51Fk67AAqX48iDumeUwa5xLJ9hhvYQoNHn5FZb8X3eJjMEPumzUYvvJ8sgfcKjBpHL",
  "key7": "3Zuf6CcPs1vRLXonp8i2hWfrkmTWTKBGgq46u3DsqNLbzuaZbSmSgHvcUut1eZK1DasVRdYkyWSDqGVkPwVXDCph",
  "key8": "3WMzUQ2z7k4baGb5us8q22oEZJmWG1UmRo3qVAPhegdfX9zpymqxVghx3pFWRHZhex3UmPVGyqiSY7DV3LUopAto",
  "key9": "3P51mYMQNLCQfNYrPJy3DY88yEshg7hXfAFWDdhucXmXdrgGcqwRV47YK6CCVKM2GgP8BwVhogVv1Rpge3E5XHKi",
  "key10": "5PTEfjmvGBSqapgHydvd7EMPV7QfVcdU8oaBgZQqosuds5oN1HHoVszU5PhGhB5kLPPfu79yMyeoN6fESMXw3vhy",
  "key11": "359oUqg89jrdnS3KPieo1DTTjRX4MqYtw8qQC7hDSz6E5KxuibDoBzk1Bcj9PibM55psg6LXTNaAMps9ifeNBJx7",
  "key12": "3yeVADbdkCdsipMuP4zntMTXdW6M4dq3EhS7Fs9SuvvbgcGsU5q4AZ4sjpKhi6SNkiu1oQEudBqkx3iPu9qoj5k3",
  "key13": "4VSB83UtCxVECBq9zeH6UjN3X66oJ9tKJyCuk4MXZqd2k7baGdXEqL6V8R4ERWaUqCC5bkHktuZxPDeT85sZTC9A",
  "key14": "2Vs1SSGYHbFF2dgtU881kyoQhSFNc7sZPtBxdTXCF6iPZokC7i5LbYv7v94QKmoGePyzdk3FjvjHm2a4zw4HvCPK",
  "key15": "3U1v8qePL7TKLK4sbR4BcQbUHzCjfaARk8f9oJpekv8rSfxjN86weT86pPas2jhkACAD5KLQ3wH9XBC6CLf7JJSg",
  "key16": "pbxh8vSxnnqdiz7V11Kne6EVLbg3XQ4SZkpRfEud2NmnLHkFbCFtpK4NaenZuqA9pVKDvQC5zubwyRCpB8ufyxL",
  "key17": "2hivXootdF7pPGrp3p7BZn4kMYzAgYg7XLvKCRAn1KZiZvWPjvUbvaaQ9bj24fKTXLA7TD6C5oU5VbESuV6FunaD",
  "key18": "ViSpsJaUiAcotgQ4jpafnTyERhjKxSgWYgh7oFzkAZFC7gGyk2nipnrXso6By7MRvuNotezxk6LmKb5FhAa5dfz",
  "key19": "oCuZBdPX823vdnfATm4FJftQdeRZ5Rf9TSqev2149kg2rJgBnVuiBsdU8JcH5XWybZpc4WJhtcviUcRotEAhofk",
  "key20": "3ULdh7ZCsAbqJxVhFmCfUC9QfZKq4wLeqN648PaCbEtgXvateLYuVi3QThQU64UiRLtbG3jPu5gUTmmRCNKaQ5gu",
  "key21": "43aWF6Yunr7MYHQJ1KAYDV2ZMUc9EJs3ycxetU3sdPVUwc6AZQtwL62b85gduKuPXxQSny87BdZQbnMoc9Z5zcVy",
  "key22": "5GVBCBptjDsV7yfY4sdStY25Z7NBBYuSCt77r4CnXAYuh4r3fbnxN4z1qf4maHkXpbDD3hgTDDGV2HmQb85GXATk",
  "key23": "5ddmrA9dAGuX9ES9KLooFhsUMUSMBqGp188n7FomNC4FTYafV7HSxzs3N5zhPAHKiPt5LPBtRyjYcEhtFtjU9dBt",
  "key24": "4bkSNqFZtU3HcUSFYuwnper4DevZGa3F2LEmDxSs8kj9NthppBZTG9FPEzgd5wVyLiazNAyKF5UbLWDJtaNEetkF",
  "key25": "LYa1ofdBUNjA9U9gPJivFTLm7a4dxdzbGeGCpPgvRVr8iRiEUspRcHTjoqQWrmL6v4LoYKuRJJLswTSGpp3QBki",
  "key26": "2T68B6ZwarVcHD9uR4jnaP7ehGFBC1pdTkcVs6g9XsDvz2bjVL8m3fNS1FkQDFxHzrBNTd2JW1Dgo9U3SHn3hQ3o",
  "key27": "KKKhdV3zhbZVTHRQS2w5FdkTyWtWZFWsh51nvW49L5DtvKj7BkYxuCTjtBa4dZdjQD7p5YYwKkv9GDRJ9ByAPgC",
  "key28": "Tm9RUzA2aoFZVjziwDU3JdYw5fuXUmFC2KPUG3H9bcG9Ww2rPSjiqQv2FuVpRGCPZ26taPBy2ZFhjzjuL6hSqUM",
  "key29": "33XFc7TkW6B1ShcPNBZUn3fq5TnEG4qCL9evRtEeB9Fm8is4xUjWiLqkXqabnPxYnEwTgG54TyFnxBzQWy6zURcc",
  "key30": "5UUGVYjgy6iKzz4AVydeTQccT6wgBWrGrU5AckYV9Hwrxz8gYaLDGnVK5UbDsxdFXGbuE5eVpYDtH1BTTsboSpVk",
  "key31": "1wjpbxw4CaKoaYa1sHkRjmdGwqcfbBrpamwmsP4ykvKPuXBWiXxgRKKYrm8pZJGfCbsoDm8y4gPYgdnvLo42iPB",
  "key32": "3MCyVqiLUBwEsCyS8FnoesovwMnWqoVP1Li3RvqiPzuxrnd8JorcyJ1XW139LH5ukXDNFsxHocBpqJTjofrrW7GE",
  "key33": "3XfjoktKnhboRAv5Nvxw4zaZyVnYZqh9KjGAVQ1BZ977XEyjyG4krdfozjPQ1uA6T8rohX5uqV25KzxEjGCroEoc"
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
