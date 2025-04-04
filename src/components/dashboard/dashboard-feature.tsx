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
    "2AQ2ExFXYYLnVzdjL2rPfm9ydsyaEc3xfgHAbk2zDYPjE8oAtDKwd1dGQW2nEuJgcFQZotNxGS4CMqo9eEtN9stQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36aG8kgBdb3aQMqcbm2jLXWNZPVDWpXiYX2CbryuJXjp69MkFZTH2QbhC2tFaKf9fmsbH4hv1P3iqGipPFqpW7iZ",
  "key1": "4j9G9M9riHcfgMQGjQ11WsKAMEpLFvWdSXEa36FFgd5qkYZMaCrc4FA8nKc1FcCLQ7XHwjXwUB3sy3QPuX72mJhV",
  "key2": "3NNzqSj7AQr9vbHN5CZg4idmakroTuA7GgE5TEEDCzg1MLXtdevwzPptFs5G8v8stZvnFLjW8dyUbHkanXvvvWVS",
  "key3": "6Zv3m19uQRaS4vW6TGHrtjoQnpJNR3oU18cHBLo2CtCRW77tEMDJLjSXZWJw7b8BpSagUYnqvyJe8oam6wnzRqW",
  "key4": "5TiTJBxMyH7f87bWHMfNzaf4ovxsenqNbHaFuUL3seeKZsusvNKDkPtVJnQRKDhHAGXeSFQUVjVT2GuQe98pQ2ge",
  "key5": "61xteZGSrXdWntLTrZ6BpQUVmH76xjQUtmUWDm2mn6P3J8Czfz5Lv5f6EDoU3ZCfu9RjMyxpqwW1W8mpArgLU9on",
  "key6": "4r6GRqNvtdGUCfDEf4ddYaxYrCoPUqVjVSrn3BU8EgeEvu7KfupiNFJj42tk8KugXYLvcXjF3SYspUxvk3R5Efi6",
  "key7": "5HYjhUqwnTyez2WaHKSnDjm5x6aDQma5TL4h45qvoYZ4hf8YbiYRLE7pwrsCWC4aHPnUjUhTNp3Gqx7eAZqK5o6V",
  "key8": "ZLCtEiY6HojFd1iDofPdbhJ4emPHCQUVZ3cG3hL6r2Ar14ukEFuZVorcevrWiy5HxHENxEezXytTCTvj1hLBLUJ",
  "key9": "2PsC2WjXFdwfdaFFEsH4aAb6gzicfBDbA9pTocJQhWu2RDe4HFC1SUmqM31cpReAN4ECjivoHV58qsfrrvpPah8y",
  "key10": "5F5xE7nJ8mFQ1diu3hfkbKedLh6eUDjtsRwztSufC5SK3PHsCnxCwr4EqcpWPufo5tG77WoiWCFyrFi7YFNwNg76",
  "key11": "4JyR42sZXtjoxTunYpPGosqRm7jqUftranFnRC7wMMTx7gC9RKtFiDnaGyj9wjc4YeYsoZDEzMaRjpP4qRKYTyVU",
  "key12": "2Fch5mGj4TKKkB2fbZXvXahcdhtfiF5BNZ3kgCUpVBRt7wm5Hc8EiuVapFPge1oNpnyskZobG2iZN9pXywpH5tn4",
  "key13": "4HvHHuXpX2intjjKjYDx8jKF4HsxmvaCEvP15DbuicxZPAQGd2jLnYdw614SXGxeEcK5jcF4yCWvoZLRNkJMHpqN",
  "key14": "3ny9emF37gNLYHzzqQZfhFvFjzjGv8miLWdzW7GUzrKgfKUAsexy1AWacmPnVTnuJ679Hj2eaYvUV9GxRT4Z5EiA",
  "key15": "2YZsQDfAeJDLho2F8HvHPpPDCSQ8Qzwpd2x7kgtb8oMsN8n8ePDE9HNFfqiS8ZeE84RHHEafb51C8vi9tvrBDWcX",
  "key16": "3zB6F7mPXdaHJWV3eZ3hF2Ea5AwziC7scgts1dWsCJjNnCd3zjVkqJ89czgHSQYYEUXTF2UGL5jKbG8wexZM5Vr",
  "key17": "3ZaNE2FydKvHuFLsFqj98g2P48Gc4X3zrvKrehrZziDjCcNKrZMsyDGGYr5cKMABhGRFzRiUqGWu1gwhToA7RPsq",
  "key18": "2v2z8hwc5mrewPJkYPNkz8MRsA4UW6xtvfu1vrqqDjscEdDLnp9nXk4ypovgm2pavC9JWRD2WH4qnF8N8oRCxuDj",
  "key19": "236tJQSKz1bPbt8cnNAEi6RCWDNT6H5Zyx1nCRiXWGWH2nx1r39J6ABEwHWYS8GZ15sogqGwDWQE1bebmwoHKfMZ",
  "key20": "mtuRULkZnh2gLePmfgQ1scfw53NnNKQHvQNNQFnWDz9CzBmW65gFFjehEYD7QPtnahZ9CDZ9TqpGNGwXumYQvRc",
  "key21": "3ayvhHJqhKRoaSf9ry6PDX2Qons7ZRaw1Vm91zzUZKphY3TRsCaVPGhzFCzD9Nc9hTDU9VaEg55Zv7dduUxUaVYB",
  "key22": "4ZxuBgA4t3P2HDRDQ1QiKWGgYc6GUZHVM7Qn46DXZ1yFBuCeFeNSLoHtvkZ4aswYEXDNaiTRnay4tvxmVorcv4qa",
  "key23": "3apu4TPc7E4K8g1G2JrkuubbwCXg2hWSkVFidL3Vo1Xfu7ncubVvcYxvv2k4PWmVAi2ZP6cnLAcmtUbjCRKUBiZY",
  "key24": "2AF4uh1cumqZx6zVmhissRGwMyuv9vGVJD4RqzeUX9tpQNUTivXWQcFUzzjNXj6zjgDutVKtPo4oxmZEYdETFWdM",
  "key25": "Q2i6cF1NsGqoqeobPFCsYMCrMCb2fkRVw1Y2nHLsyqxkRkHwnrMYQPzNj5dP2G9jcybgjonNci2A1gaFXwMgBkA",
  "key26": "4JkdrGfCUbwG8cwQD1zACW6dtrMh2jUWW6VniTGxa7D1vAfnRa7qyjWZY49qN9pYrwTgqDCNHCFf8rmqYqxzPn5w",
  "key27": "53SJw98tYhCxu3M84NjZmikJrTNiUhB6XrW9rRrjDKQmqHH6ukSf5TR1Z7uY7187nbE7ypyf1Hap2erkPqqPTHNL",
  "key28": "56EGGJyZZ4iMJEYDcGcsn7jfEvhYC27HfEzhpi4vokCtvq5zyJ3S4ZDpPRF9VB3XCewdw37g7K1bdj8LNucCBsYz",
  "key29": "3KF2vsW368sbpzgK5xYMVFS6aEhiEJypnscc6oXoAUeUGXTRoxFfxX36yG1knJERQVto2paVMdLxxx8Qaai6xQzW",
  "key30": "484pJG8LP3zytspR1B67syq3Z8F57p3PeoxUmJZRVNBNMvNrnYR2E4LKQAcTtDZug6LQk3jUxQmuhfd6CF2Py7ge",
  "key31": "5HPCxpxLuhRhigYeXgt7kG1mwjoX9Qk77ZTNocBM4Nt9tXfWUCyuQNLcaqk7HGSNYMoYnWjswTVsG2PyK14vZZpC",
  "key32": "2iJUJ37cU6FhuLhWb3FdSrYHzp8CKtv8W66cnaaotPruZSVM4FjYTnn2zFysmjjPjTA2jywKjhCHm1havoGDbwsZ",
  "key33": "5UrsmvuJrwjbmih3qxS4wUoCz8krZNFnFGLqHqLYzC9N443UzrCMkLm4rzcDyv1VmnQ2MabaDb5kprQ7LTd1VxCf"
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
