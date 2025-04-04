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
    "411J35nortyeT5X4JbBLS5PJyWDYoLx3mMNE9hZ3XzKhCMGTVqnvzSDHnTLiwGLTjLBTRoAVaUKbRJTfKsNQuVGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hfj7bCrkdJRLdMzPHA4RgNqkSq1d3wFxB8P4qN7KAjpKn2414vZbeS7uZJqmeNQQgeegN4RbiyhRjhyoH7A8Lsy",
  "key1": "3MXHm5zLvRW81yhZoBCYHC2zKbKUauSoqnsaXTdjUM3ioyv6f54qZxJWDe5AhLLydRH3fPYhYJ8ZDw29D1uUyReL",
  "key2": "2Q82pxufAwnkBzH4mHHuo1U3gnBDyhGBfNoCQe5GaNkZcEeyw1V2g7a9QKGtiy28JWRpZdc5TH8RSqYoDoXCzBXE",
  "key3": "21CgexBqzwT4ARZx8Fdd5oKWuBxXQKSy2BQBRfFbtatGy8oekF248LJ7D8uYrJQDp6D1fs11CNAFUzAusKmRYwTK",
  "key4": "64PTY8AjKHfpApHM6yGPyzGEhxKm6trTwaw2gVZgjHHd189NkrCf5gdi4Eth3KR6QSjtrEaPkLWjyh9WyC9qHUzk",
  "key5": "4d9FhjwX5YBPrXtLJnJwq6jc3Kb5HT54PgKaEdpMs6U9SXzBAUJR5hHM1zoZ22uC1pR8hYDP7Mhi6nMrKvtwsH1K",
  "key6": "2F6uN6UPi719wNfAGnEHtJrY8scbuDtghjz82ozdjkvorLgqXF3RfaxP5WYGHV72U35inf9zGiGx2pS4gmcDNJE5",
  "key7": "5LrjoFXHW9r8f6ZuoKU6y3yN3tPTyHazvy9TX7sYVp2JAHr1hJ8XQ31Uc4KpSx7DmBKsUGx88nBr3fQXLwrZxnJL",
  "key8": "Z8wgapinnUJK6KgZmZXRh23fMGZkxVCQijnGuyaFC52fgSKW2JT1zMjhRekrTbHF6JDczcC82m2AAMTnibaFjtV",
  "key9": "MZQVBbfaXYQnc6pEFfSoj13wZQ38rcdGEQJfpJzkVNxtsH5Aw5iNYUWtRQHjDJeCiwJ3iZQ92d12eaKhfh6Ywg6",
  "key10": "4ZgNSZxzjpWRP1egSbfLD2djrArJbTPE3JJJsy8TWozyNp6X3NSwWQuURnbkRvm5QRqazT6V2APxDR2SkS2icH7i",
  "key11": "39YbWh5NXUjd7fvVSYBfmvBkxXkevKJF1DDWfcpjXHuAoNyAo1nwwCA7sCDawxSYbuTptNWBP23JHW9YowqWmmDB",
  "key12": "5vj8Mj57nNpPkEmUXPoxsC8KFq4PBz2fFQtLUMLUBvHNkhNxJ1wDtgoy6G1CxerLdyrf6MhzxGU74giPFybdwvbY",
  "key13": "45dH2B7rBRL8hQE1oxi666ZabQCfJxWGG9einH1HpSAstVuSDRtJFu5L9F6hfLdvKW8ghdN8mnPXEw3bEEaue9g7",
  "key14": "65p18fBs7TvcNHHfLoT5Q7TDPgucWzVZGJAcbBd6fMtd4MPWJGAcQcpGQ31kfLXodGSdbELEd1cA2cshrEFpfwqg",
  "key15": "5Z6g4pBQn2shurpxTG75eNH1rZ2p7smDPnevQj7nhFfY5g2PSANvbfoMgcYAw9K4vAE2eu9akjV4kUeS6HJY9rML",
  "key16": "4mmNqDYHSCC28M6E2xa57shT4c8Q9fe5yUNepGox1MBHtX7wAZvU2PnsrmzJnoChNB3FnnmzeqMnWL9MZg1WFGhz",
  "key17": "2TgiT5hvsPhNas2B6N4MbHraDrGA3fJ4PjqtMm3p5SfvJMCtD5ssHuJXsu2tYUtNxYXCfGbRbHH1faQdqS5Rx1FA",
  "key18": "5y1T1GCDN6KFJU5etWkxhVu21MDWWXQVf2KdpDpKiLvbLsLBGvFjMRJvR9oDb6Wkc16ZLk6HKHAbWR6soevtWKBj",
  "key19": "5Rk82JovEavwXGVqsMgd2ebbpFRYSJVP7GCierCQcePCscWhxaEZowB1TFEuk1hPG1JKY5f8Zp1RiZvQ5PbrEL4J",
  "key20": "MmwPEdrbEkH82fUF8NAr35Su3t13GvuQyCFPUc9fqsEY4cjo6CkT16hJkGgMbzd6XBqt5HwHXQvSK5Ka8wzi9UU",
  "key21": "3pX24S6buGY3mz4NLaYBM7z7N6DfXZ2YMY8mH7XkmTXei3erhDwJQXPFs6mDyoAD2XeZSQQUMLcy38h2fjaZxZZZ",
  "key22": "2nq3VTy86yXJnrXKBFB3fu6kYDvbTtc2VWqBHSmkPfth1phBppWQckZnh61niVZdfJfjS5GbW3aSuBhzCHJaDNGW",
  "key23": "3WPQsQ3XeF6jZ4zBu1kjWFVqhJDQnxDUzbH4ETfBpFe4qdoDBnfGVS83BxYMikNddcYsUXe32U5ztKaGYQKNbDdB",
  "key24": "5ZxZLSFrCqbQMdmJF65P7A57cam3yTyQPjnHS21Efb1Z22XZWDXq2WBJMNR5H1Xou2wrDBVAhCa8kqTnBzQteZuY",
  "key25": "2BRRZdBCKYBXi4h79dSickaV6QqyzwWAYGXtJkgLXh2J5JgjDyg2eUToA8gkLfkZNP9DRwAhaw8Dbgmq39yCuyc9",
  "key26": "HyDiGdDTSr4KFSBZmw3hdYZJdkgN2KP4Ce5WhJt9ftgSQHV71UdRXU26whjhTS3xKke24RUdaEYK78jFhtBTEwf",
  "key27": "5SVPPjGsn7tZMY991hz7Aw8Y2D7YFSZE8bt4e37v2h4sHtSgWvehQTT5n6LPL9b6EGhnZVihE9qgB6YfyxuiNERq",
  "key28": "26a16qHhqCD4D2xFrck3rArjCCHTENPhWroLaMG8iCeYR4m948xNtche1rDdNkPCNiNNDuh7GDakSWffEfWQf4N2",
  "key29": "4Sq48hrkgSPnBYLGA3UczbQrS2LLZvcK4xymChfiD6HmyqSfKB4p2iJzrs2q6PRVGEPdNHSb4j4BVxDRmQGHvEpg",
  "key30": "36QMTBkN7TACnZCpGW7bA1JjZX9Xpp5hk4ScbAKvceDNMNBeukfp5eUNiWwXFXBUtJUTgHE9z8WjmXNpdCwGBjFg",
  "key31": "2KQSHzNuBBNmarpo7g2eQJK6hvupzrNnmzWD4jiH5RxZVgFkNHfvB93g6ELqfvqKAxr3LxyxcGvQfaPuPFmEsXcy",
  "key32": "4mbhXEHeN9tPFUQj6zHr15uKP2phsNGsqM9AKY3kUrAQkv6DKxbtsVrvX3T2dEFRcx7E36xAXH49baAvfdwBekyZ",
  "key33": "d5GL2ZvrsBgJb6NnexzZEeCEbpeuaPkLTpyoQUK8bCTKVNocQEUTk6j3sadJAyNLBY6d3K2EaKcEJKzea59bpmw",
  "key34": "2nYssa4FUQvTnWncih9P1nYPsMN7UVXTFGHMNFB3SHoJmE45RYUnmJYnsp34m9GLoTBjiFfKCitbWgzzB1Lhd7vh"
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
