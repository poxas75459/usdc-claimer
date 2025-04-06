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
    "3X5fBMyHuN9HZkx6bZCvcSBM7hFoEtCkKeMS3uZt2NeYko8m3XufC5jLWpU1cEK9uZAw7pR1ajv3eqF9J9DrHj4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tdhfZcogFm9rVb3Wq5mBiBYia8tTz6AnD5JiY8JLUrP79GCNhthbyNJhRWjYmo82wpQCkPPRckXMeKvULLKBpZt",
  "key1": "2qKhrEwRp3pNAYCcTtwpNqCJ5vZDhSwiURzrwZyBYksJP8uWjcFKSWegVuksDtaC5nVR6K8xFkEEBdhJtTfWXNi9",
  "key2": "2zShHEX1WK9h3FYPybkLyteRUcs6geJNRya2S5qPEdAfoDGzgu6Tt1pKgqthcx1wnCV8SjaM2zdwNPXeZvBZCFVu",
  "key3": "4SVkFFdvP9hwBYMnje5eavq4Cssk9QWyJrWYxTDFnj6kvt2YXZ2qz5Hrt43kMvcpJt7GdU2UU37FdAPQ7x5VqRHF",
  "key4": "N2qpD7VJaAFRMKymz2xcX6UGKrsbnL1XesBD1b1xbP87Fd3AYqB1z2s45Vpbum4e8agJCGQ8ux6ZFGtXrsJXEZT",
  "key5": "Wi2c55HqVqcWujqbWTCcQdeGYjE3KB7Xy7SMHEsuagziHNj9xRiUnXzLs8kzpqE6mfqmiZd4QDG1Gq7ZKYJWJSx",
  "key6": "4mLg3F1WLrVxGJ363MjMvLvj4wBTXg9zEXKqEtBtSYKh1yjpi5e6aFw22VwCCh8dZweVSvXWG7DbE2pvGWNdhyyX",
  "key7": "2bWbvzmzDc47PyRiJ9ZoHnsMhbsaRoSrFxLz5EsvdjmYuiPkHwRoTcwwifMLCCNB1iVPG2qfmTzi8J11iDupysvM",
  "key8": "d1QZ8xV73DXgB6NrLjQ2Nxzf1oUL1FUq8cXDTpMkADqoLugp9r5qkM81SXCwBDny937sKgSS8XwM1kRdMNoZv1e",
  "key9": "4JJTSotVXKgwQJ8fwqmFKqtB1UewGdw2cPtqq5MurDE1irQh6uVRAjxZXySQF3kCJgSpkdNc5D2XCX8tKMT3awtN",
  "key10": "28cXmPW8CMCL2uYsKPkzKsovbRViLmQLSraJg3rfS96rYnMZtvTqvYgUxQMkpi7y74C65eLeRW5JfsqX3TFcG5NB",
  "key11": "HJQfS2UKb2jFEyn8GwogwVa6HkaXrtdGji8fj6WJfz4FBfNehCLSujUaj7nUE7VqMMjUsBiSW1jzd4wo7ZmEnjr",
  "key12": "tLRmrcEgscwye3FTr2HuVP8oTAn8onERpa5DbjNSHF3jjjgGo5LC8FuwFiqCEfXB1QR59EkoJwb2tk3pvpnyuK8",
  "key13": "2wgBvYKjy9PNjPVzZ4CxhV5RRZBA9KMxwSLnsrXbjVXbXnz24Z3pBJap9sUbVbfrjBpFdK46w7BekUvo1HprnYWJ",
  "key14": "2n87UgfpSSB14j3sxneDJfFnnzzC6Snj6JXtMKnbaKkxwxgS5esaBbhj7sDWU3sKM1SX5rJWVgQ1EhWLRY7ufWwQ",
  "key15": "3gpCU5kYq22LgYEJ3wg7s4ZZdCakxq29ct5uwMRM1AHbCpMfDF1Nig4TFSqtmroHjasoZMcy1jcukSxc4Aym3ik9",
  "key16": "LFaaKj8ppdS3Hk41io8tUDhWmuEVYzspbqJa9oZ9XiGovKmUNgY4KFgHZ6m53gJoMNEYdk6P4XLU5eKbKVCmp2A",
  "key17": "4vv5n62b6Q77fSNVdm7U4GVGr54ZrEXsTMCwVvuRjdb5vmKAaZWbHMmTd3dSz1XZEtjnv1DB6rxboxweqEdyD5MJ",
  "key18": "kWRkHRZnab3LUoVyUY1uQHF19Qv8Ye6zYRNzBvxmQA5ZRuqNoW3Xe1rDLCzbmmy9Z3yCx14urFEzYjvyvti1qNJ",
  "key19": "3Q8gJY9fPLhBupwNwZV5oyHxXMQ8Cj1ej81YXfFGhW62cMjK8ZoWEUoioAHiZdcqF7MtjtwFq939RWn2sNjKVaqY",
  "key20": "47fG4j5LFr4Bq7j3T9ahL4hNqbnX24UmszuvjkMTgSS1AYsPDrt56fJQto8PzPk8J6NDrYTZ2Xr6Gbo59YxVPHYQ",
  "key21": "5uFkPQRiEKU56rxWcSxqnBgqiQ5hLQ3bHgetTGXBC9JWHjRB2XLFcck4xQZq45neXCQPNY9zpKNkMkJ8DbpLDUvH",
  "key22": "5fjQT6t9VaaQbhr6PGWtFT89A8MjTYc71cjCSJ26JrUuvHUCieirb64h55XARzrwjouDsZxqxdHEcXRwLD4zmwW9",
  "key23": "4jgojFjiq2rVdCb287pHDhz9mSzSJT2F3GcpKoyrVGnuKHKkA4cJ48Bv1uc8xXGW8VCQ6dEwK4XPaSyuqv7Zw7EX",
  "key24": "5bAeKZNDvRKDEEoS45oKvxo3B78DPeEXMQQeQkCva1f7nbdHknrh917iYFpqi9Fiq4RuNhtsTC23iGnERjBMtAY5",
  "key25": "fiCpDns5M99Kz9YKQ2SpWzi6uskvV4Qv9BJMi87RTc2RZEVGa48ZDiJ1bk667Bm2NVFbhYNttAxTP3pDHgUhvUT",
  "key26": "5ZwxeNGfB8dFx7WLvBnaxkbZGuPqDRuLcszHcGMwaKbgPPWgFgAvQa7fU4k4YuSWG1LvJbiGozvrUZwFsAFPaeQN",
  "key27": "3Lpx8a1ExV2rfLbXjZQAo4DKXe6aUUo8ucheNWZ3fUhwL6TxGXeSCi8QYhS6cXhnH2ZwTJhu4xpAscwtdjhKzuRx",
  "key28": "3dbq3JPeASRLbkJmuRUnr4yzbwZJPAiWqqQiGRZVtV8e8GAb2JyrR5eCxpNLrN2Td7W3mJLCaW14ZYJaveYqD4ab",
  "key29": "DnX9V5ocGqNL3CvqUSpkGGSLWQdaebaPFZtvmCNzh4ZfxNe1PG97Ueb2cCkeV1gmTN7ohF4X9j2Sfe8aw7jspPX",
  "key30": "4FATEkGgfEkz7RSoFKWSTeGY7oBdzS74xYdwEntMRGAM2Qh8P4ukY4vWdpUNBdcZH1W4PCzLspH5uvjZbBNQZ6Yw",
  "key31": "12hUiNdLGSsc7esrZTTNVZggVtvmjT9zsmuNpPXYYWyKjxwG2eWfudvoE4ZfDrukHBrsKPFh4dipWKhjU7q9mSY",
  "key32": "2rbne8t4YaRhMWESy1FoeCzGx7YXzLW7FcEPLhLD8g6wTVM8x8zVTSJHEHBQFBhqPAmT4tsU13YmGJUiPM99Ys8h"
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
