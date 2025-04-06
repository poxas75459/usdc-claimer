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
    "63PeASbVXxL4grzFA1SHajEcaTkfXiMMe1SJGySaDd3pxhbUv9XvkinRsAjP6rc9jnLYhYyrvB8GPUgcHsgdSJQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U4GsqVJYQ7sYkrPAsEQnBushxg7TTQYSRshPB3zVYgrG28uq3cKWzaqfDMUBA97UhSXzCbPCBoLniVY49PDAm89",
  "key1": "4UahdiX1p7VJQHxYRyeev2PBudQhbRpcTdKTVUMaW91KEoSWCEUuVDTceoK9NdKpSaXZenrGs7ao4bGtkySkcyRQ",
  "key2": "58cTVmtQkfZkRnjdAGv21HgSfmmhHiJ9cyUpURt7TG7QuEcCStge4qV5BopPgUzQQtzqHiFQiDTzqvHvpeAn346E",
  "key3": "5Tz7MWgs76JThaWMpFsdcJ7L67mpqteGRBXL9nt9urm3aEWuUdRVg1iKwoxrWUj5yEQskLxHabdgiAvyJHwAPm3T",
  "key4": "WRNwRU14mqtfvAiVYLBq8ArHyCyt3D8BXfMcAz8PMWLtNAaqyFd2ustduwYHjU1zk1buz4jTQ2rxLMqug7srQ1G",
  "key5": "5Rt4GjizMYQXo4AGH4ibfkGuM4sUhtL9bqAugDVcMXw3FU5FPvF3hYp8r5onUazyRwUxpj3S3CECKZJe3BAAu2Wi",
  "key6": "3YKkvbnpz5LtJ5QBhWJz3aj16Q3arHEgZuECx6sdTPwh4pMeHfyHFd1E7zfLjmi4Zy28Dd8EZoWG3wwH5t4ob72L",
  "key7": "2f2CVfMo8FX6jYQ87KgFRvhCozV5W9JaUg89GaYHepsuLLqtNtia3YEs6mqXn8z7RWhDpbCy4J8twcKHGig8EHXc",
  "key8": "5syTmVd55ujjwKousAnwVY98jawsvrfDBFNVNSnzzvYFvYFLRd2QTjneSR5mM9VTo564cMupN4exxiNoxRtCCa3e",
  "key9": "5YoPJgD9v5CMDD1rXH8Gtwzwtt48T8zYxAgtaZKyQw3Qp5cURDCEE9ukaJKJ2XwUmvUtGYiz2e2rYuiar6KVFwAR",
  "key10": "4aAcSQgFHjfsX2CAnDMGwrhn2Gjy1pkKGNp5xfYAcZcjWkPnN6UWccXndhcJzcDN7LPbffQ53Tg8q91CZ9Cqxffd",
  "key11": "45ySocGn32mom5wNw5UZEWN8r3tS7WidyCGMydqyeYPBR8zVCrxVMfBLYWvkiZ8VdKLiVYT3tfbYM77VzyNSdQMs",
  "key12": "2hUNeabDappqNFe7HmhwHWpNF1199MzmHoBRJE3sFXiJz41JaZWgmmZ8VNNBJrKU2e1pTCEy7epgzcijh8PkADmF",
  "key13": "5xpE6FtE2sv39eAfLKBM3cqi83JzUToK5urbyc23BWEETP5jCKExB9qWLWqH9maMNu2CGHwv2EjjxShJVeLAC9kU",
  "key14": "2BJH6WpiDdQTufx3PVfaGFxtmzzxEz9xnwWMc3z7E8v7vhSJMAfbkCjiMSSpML6rCJBTuMyhMP56uDqPnM5byq3W",
  "key15": "41aQd2TrBEo7ktKWeoaqom1rYHBPrcQq6wLehJkK9pUmRWmb1JvudhTEqxZuACCpUQbVy2pbjrWn2SXeXhAoS6jz",
  "key16": "3ZNWW6HvdE6Kr6AvQy7m8iDSxfM3AtWwSaWaoz5AuqtJadytQHznBsEJz7dbtw7VsoFZ6qoXMGKVjPQRbgje8kPM",
  "key17": "2nhLyJkGQq5xjG8eXzrTdNHWjvdNJf4yQLNTCN8jJAk6hvaVgYpPfLqSUAEjT1Uqx8Ek6uKdsD6iHJ8ToFuF3ryV",
  "key18": "5nF8jxqyeSC7UFnBuCiWepm2gSMqaeRW8WPLCuEWBvyUy2ttqFpPXfnv3rt3HpX9utk8fMbkgjvHz1nJCfFL3739",
  "key19": "5NLUwXCcVehW4muKwRTmtbcF4etoMPFhnooueJV9GJUaxYYfQRhdbWeSwctTNPrQPKQenm9mZbmRbMfA6Vyf2bmF",
  "key20": "2VkRAzyzGyBQ2DGuzqrCPZ9Vb7MYfPJcGXVyVbg16adatEPofd2rsN9xtAMKySN86RvGgYYLav5gANa7jV45PG3N",
  "key21": "2HXQhUkBVj2UgXmAHRF3Ki49LyaTTtt1ECZwUXo6K7RM7p2XRMYmpTWaodueyN4VcxoNX3Zsh3m8kYHe2cwyjifo",
  "key22": "32S9qmtmRNTS6cG5BVi5XYBEmKTKeiAQuhfvNE5ncTad7T5tXnRerZteWUqYTLUAGRJbs9WjjxgpYrPVeYknHQJ8",
  "key23": "2UGWAJVjutqqMeBNFusvaZ9gz8An9yE1ccXNr2smJYZGTjw7SUj9ouGGn8Wnwab5QRjUUssKQj9Jy2qJC5XMHiAc",
  "key24": "M2NETGK1WdcuSnKPZ996SeXHytL6UWd9he6ccqhG76MASd2iLximMVNdXPNLGVcEcyxivJQKnawTafdU22PLGxB",
  "key25": "4bmJfJMuSuifaTudxkP8NkvNLLtUparyQfMBciaK2Kr7P2Dh6zWMNcivp61E7JLq8qfbNfJhQuw92HCYXT2wF7en",
  "key26": "4uWAY5vbJh1vqBfnSZiKPj1LV2aC9idT1bcZWYjfjCxSWEfTWhhT6fDBZyBY6Q3Uu6MGBGFhdoo4Z7y4dRjuUQyD",
  "key27": "2FZHgxYtEyGLnM7BDzjdLHUrTRri66JiPbSaWGE8kM6GYVcJKXMeVCdVdXbYdBdMxwxqnkDb6DFW5MfnEnPax1ys",
  "key28": "3AN6yV4enA8k7yNAQ132mTfWwGsUpmWy1NmczYVQZ9RfjHriZvKYn8DFacudeDGC2dp2BseUgKuK7AbNjLrPf8Rz",
  "key29": "2Y82kvpWBtUF13xtFivnkTy7rPUfLqCSiMkZriRhn6XYTYQYDPfAPdpAy6FzaCLSUc9JVuAbPQMo4p7H6sr2xunK",
  "key30": "3sf4BxESKyAvMZKya1PXcaM7qNKqXjCdY5XevR9mfnW88qG1Ay7uvv4FVN8MeR1FQdiqQobrsXUzwhsPs4zngkEe",
  "key31": "4cArvXgPfPndHrgN2GRCE1XbJJEqUo2RLabqtE5XGjBk69FKuGdQogGzUs1qXeNzhTXPLXNUcVpBcsjGsh8EuhAa",
  "key32": "42hksYWnD1cr35AdH9Lfa7DvBFLDHoGsXXyWULQsDMpqygTz3JtgaBJKS7JDw7as5Kpjc4jqb1zixnB119sQ4TsP",
  "key33": "WqF8eK2f3xnNJwhC1zGgxhSBoSZqb2UBcF8xENYQpXK3AX2FkQxpA9wmvCZbnrpAWuka2nQ2QeAPvrRptZaLF11",
  "key34": "3iRNnrD8b6eT9FRN8yYvgfjJDin7mcrgvDsbFgHpqYWMoPQbuFgwta81pr19XbrjwkRMuxrgUe7nYzvZYMpVTZW3"
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
