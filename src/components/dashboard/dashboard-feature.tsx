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
    "5ffRcosZvkbEWCcgNhou5hNoyAWpptsyjkzDD9NGgH5zKrDKzYfHxwSsuttKUdvyiwz4Lih2e8ztFLSKxNh9G7D9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S6Fbu9VFZYEKechTwcTadeY5pN9Xfnbv9Um9YoMLe9mCayaQa85kE7t2TLYm7qL6bbGn84iwNgCp5GT2PDQrH1M",
  "key1": "tLAie5RYM4Wv2LL8QjbZVXsaWsZx1nZarULQ3YwvXky1hM51Cmer8sMzfbLd9vmoLQmk6WHCsHnEgqwHhroMSEr",
  "key2": "3tEtx61fEUuq4x5g54mR68futwjQ9tgz43P1eWq9UsJPD76hPuroMBA27opoqmyFnk7EHzDT3s93ujUGUagSYcP6",
  "key3": "4kjRLEfDSHxTD3MjM9PqgcpGPEPcDHsvVrrJtQUh2Lznj72khz7adqYiyVtQXgTb95BpTXkUcKDRrhUtdQPTPyQs",
  "key4": "xqNBoPY9owARgyxUwZoWzwg3VRtZoQjpfH8pfdqNoghf1GvUivDawLdhe1czUPZntgh3wjDGv3GyK62Fm4wqXqy",
  "key5": "3cn54rwf7EaxKH2WWcQohbkgWHhLXcVwGsm8d8GzyF2MHXcGYkKgTEroK2i17ecPddDyxdiC3Nb5iveXCe85pzhQ",
  "key6": "2GPnZzEP5hPfdsbMAXDe87ZJG6BmdHMwvMi8ymyBmD4kAvykcDnq4NRJ7Gc5cpQYLVb55xqfQczo1oTSwuyi6LEK",
  "key7": "Ly2nuXHbNi8mNtJjXoDYsBYhtAzH3YDxgbAaYtyjSpLaYRV8rADaqYjxW4NsfvPfDf81ppYXMJbPVmMzDyFEhpB",
  "key8": "5nTjHYpjjCZK5nmgfamyK8k2gSdwMHmH62iUVhJT7bJcLYZZ1haLHQTRwKkTA96Z6mMmyXWwc1q5Wy9ov6Dt7aey",
  "key9": "3CfKHgY4YZMA3zED5edb8SHcCJnKJEMshNuJhPHyaNbcdQUpqjn1A88DX7b2TCQv6QPeHEYWPZrzLirGnspzrbgX",
  "key10": "4t3zp6whNuEhwUbzJNeCcvi7HfQLgnyuZGNMsK1aEdETbcWqDxny2KQtJfVzpT8ybAiShjdZjMequ51RU4MMqoAi",
  "key11": "4ucd41EUJ2JyTWGKihDTMRD65kBjtbP97TijhUz4UUZ7sdfJyV3DkVYUgVgQqA3hYmi3ooG8Quj8y9XB4bSWkuhA",
  "key12": "gqaQShNDXJEu7Q9RNfG4AfbHxo1UPz5Nr6XYkKaB5PAN8Jx9BorK5efpRPmyVTV8W566zH74BQghaUNBiaY6Bed",
  "key13": "3SA3NUuqZWEwu17dCeqjzYngQEZZWoa7wvG3oZZqKRMVMKCTgqFXptmd9Fa3diQvL7WA76HfpP2rTviqBzZo6nD9",
  "key14": "4Yf6ikMxzrSH5U5dVfkJYg9Squ7uWTBTc3AZqYG5XSvtGcxwzJNe4qZENNJAxeaTczK2XaSMmGwk1uyrBrHKQBiU",
  "key15": "5Cf8qE3JruzbLNSzsoyCGyU3GMRfEH7NzLfcBHVMEGttYhbmeTH5WSo9cuKJNdTSKSsm6Si2RRBU6WE1RtSs5s4A",
  "key16": "5AWJ1ptXndoinow55jLZMR1dwMRKZ1muiVL817piDjJp7ZG7NWAD9JMqrYEGyMLjVYFhUoZaX4DAt1N9WrZqivEU",
  "key17": "3DvL6ZiR6eVjcBC5TTuT4pg5jguxzDxGTWvE6ARG16HXc3ysDK16NzxChTd9iTPY55KtfTYDUC9gceuNCxV8AWXE",
  "key18": "3FzE6yEK69iVoH7p5SBfBYoqMGVsSFQ9GLoLgeQ2NpsX8FFCdxCLmsGdVXEJG7SQbt13CVaKFNBbLUKCZ5NMkM3",
  "key19": "42b4xr4xXZDhSivP1ACpZA7N9berr2mxmxtMJa8LSecaUawwjQD9HHd7VsbCFkzTsY9pBLk1RL2s2PTdYntP4Uuy",
  "key20": "4cpwMPo6tGZqVJMFadPxYBJX4KRxUxUC3DZaykyWv1o4VgYwyHo4kEFvTowRtUaiQF9L2hDMSoDdscdXsK9vMQ5h",
  "key21": "5Srim658r6L18cJFaaUvar7qYhDWtAJSVyBixbtTFpQ5Kxorem5RQEJZ3L9sdYLdbH8hfhWbVWLgFAdNGDeT3ugk",
  "key22": "ia6S4WFwGvxsPF9jNhbPreBEAhRsGm51MoZnzKa9At4uQsyiHn5T77jsS1T4FMzNTxt2bWxkoXyPxtRzzjwSjKG",
  "key23": "2a6ySf8AfKu1mv87Z2RqoZEiVWrsQKLBEb4GMNDejaXLUB5hCTpGhkcKqG4BTjjhKXhYJfPg5J9m3hd3vxYiSyVa",
  "key24": "3YF82sktrJbzGvMGWq67yWkvm31wL2TPTYusmWwQLpXUob5UCkAKJsTsdRnMJrd7vZcAYMnnfNG3o5cU6mo25g8J",
  "key25": "4ZnySfr8fGdbBCfdCLQinqFRhY1Q62z18GyDs2YyHpqQhYTVpqrGoF44m1MRsBqeCWrPioavdxyMTecEDNmbrDNw",
  "key26": "4HC35f5mGywawVyn8L771bGsyUYgus7k6yGbMvwNJmikyfK8LuwRoGxUkj85WxMKDP7oepwBBcoF8EX9YgjDzHoZ",
  "key27": "64jw4xmFuBoj2tiCAsbj12DYcD9nCQrPQ6WkdKrioNKkmV1sZXZ4uZDHyLteGAA3cSvUeF3fRNW7qtCNooLBtNfB",
  "key28": "3WUaAkBVzq6YHQxFkMTeypbVxVRDRVKjAtUf2aYSNbJWiZcQqeQbi7PvzEBAyeN2bi9j9ZExAbCUNrqQUHeZ3YhP",
  "key29": "5WThLn4XuFQ33R1HcPK1TmWe1SvgWPVbJcNUBskWQBrXjjW8Ldop3PxP8fdjsHp5bFHJdWktWUBEYeedZiXN1Yu6",
  "key30": "3YbnEKHEviqwxHePZd9so13srC9TzwLUJdSKKgGLgw9Ac9qdB9CZrLrYRsKPMNc3Hgr9i2xQxo5hLsCsbKAqg74x",
  "key31": "5qsqbeDsDskMCuL8dehDS68Ai3ETQm2skF2KEDtH78wp77mKU1MwrLmNrAaEjLFr3YyCsRhuygkTXCRovqZvvHdV",
  "key32": "nosgZZ9yErgxdePVZVbRK4ezz8DjRBypszMkmcezCDTCJrTztKbZ3GkfCxYyDoCZVrB2dTeLN6QpD6hM1fmwijT",
  "key33": "JB2i7Cz7Wq671agSTxR8e2JLLpv5j5ST9XsYLZoDa4kGMSmdRxThtL9ufGxgsjeaoYGtL9wk21WUz6UzVifEMCV",
  "key34": "3uK94xewnjULS3mWzJRcxh7jnZJM5NiVA6fjuT6S55VxkV4QpREuFTQD4pcKLNVGH1p9FPr5BnjbRcr5S7yjxirK",
  "key35": "4YfhJsBP1BXntG6U34svUq6wEGvVFfwziFye8GH6zwT3K55M1aW2gKk3djfvS4xgdmtGPBWRAnWZotdF99xBUqda"
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
