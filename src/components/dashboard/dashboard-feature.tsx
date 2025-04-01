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
    "4c29JzrEvtb646aiMfGf98DjJycA3TwN1ffrb8jd2vfng8pFqUeDNSSj9iu5T9qiFfnMe698PXzLaX2ehtuUFaFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kqCD1wXUgbhcjRZ9fRmsR7F1fdnrumXFZr2cUwXosDSGSSfFoZ375hL5xxi2vQNHovcNsDWGKTxSYE5HuM67WLQ",
  "key1": "21wFDXXfnxMWq19pvDv6pGN3cnCKddAhdmK4WoZ3k6fsW7mx6hADAk6ZMopxKB1TXxhjAuEbN7uiHrBnDakdY9kg",
  "key2": "972mEDXjgnauDnbLDjaMi3PW7Dw7ypMXmN6NcJ54H6vW161EWHZsBdbUNM9hM5nzRUNroUy6h5G6ZddFm45zipy",
  "key3": "66V2m51vg47dXra9svw3DVe2tjdqA3uXwSpasfAUBNLrKvmZcQcQNjgkT1RezmkCaYGxnAd2t4irBynUBQhCANFj",
  "key4": "iCSavNPSBs8TzG5GDyJ32T3wugV21rKXLfcWQF5coVsbpcXdwuA6DVmQk3uqWqVrPhhrfTh97G6abyNLSzMfeXa",
  "key5": "4gJQbokC4Xz6N1JgsnKQKnVMBcrZ2QUw2xHRTFdKxVHQvjAnaY46zT75Jdp6Jw2B4HeAcjLV2cTZEp1kz3uLzzAW",
  "key6": "4s7tsayUVHkQdH9vjypwHYek7y8gHcKLXH4YDLmfHKjexnoySpoZjNxUAxp2CDcCh1h8ruShNksSNQe2Kg5JXVaE",
  "key7": "4v212SwAR2V1jgZTQb9vA5ZZobAfP8en1BS1mG1zLZ5ooWhH3sGw23bhUHjLZ6dzP64QHRommNoearKJEYfrzaAv",
  "key8": "4bzzshVHkZm7tU35dWUKzpcCUfru5Ek231kGZpgu9q3yksBEHnVpnhK8Mc6s7LmDmTb19GrsXKANTz5scw5uHxf7",
  "key9": "4norRzNMCrTyngriqnjr8XEMu4oKFrsKTuq8iZSqb8gdXzWQtWtw4k37C8z2fzMZu9Bw8VvjaNZdH2wASQYyuYyw",
  "key10": "647euSnQDZXa6DjnVb8eK7yXrVZLJG4XSpNw4v6ny5knesearxHmfZTsDcdL3jkknPaTGY3P1Bwhhc6TKdBmDM5X",
  "key11": "52JpfMfLHvSxzL3GY51ozQKEGC391aJhfotnzPz9CNAL1g1ZP1B6FTTq3bULJpj8m7vP1pJiXB1TFyv97M3qNhSw",
  "key12": "3p9bkwNAkV1WccMy3wxffC3v4qWaxE8kX8pzLQMmp9DCRQaLoVazTqgsanXfwW3Wb1wLHKQX1NB7piii9KwxxXsU",
  "key13": "2b94tsNuoENVmakRX8hZw4AmJubn6qD8Kntga6wBXgvLe9PjFVRMqr5U2EsgZHW8vDNh1EWx5d1FbUZYmr6GryhN",
  "key14": "53Ai41SAc95WRLKrNwCAW9Gmr8T9aDv4fQiZnDp9pFiJYXwDqWrWYRocnatk9KdkyygdrxXakSGUaNwbCdF3zuvX",
  "key15": "3xAzLFySZHNyJe7jickcnwmrkFiVH8Ukom9UqX4jNtUyGpSSAxJ28bi34N1uUiodyMtfsQnzQ4ZvJTDLyVJ7ExEW",
  "key16": "33fF8g2FaWoKeRtvUb3413DZHqkSK5XcPsWnFX8986WxHjRak5bgnd6XHMWc9fjeDk7YUDQ9EatHGkVZ2bqScgAn",
  "key17": "sC2WDiqoRKqqPffFuzz1TaLSMVkfiEVyoGi9sYUToq6CDeADzjFJ2FPTnXjqLFLJMrHoEyzJbvEvTc8unbyrxah",
  "key18": "5MEzbarFjQhUMtFEpU5v64VDruFFKRfJRXtTy7KB1zs1sjb5YKpvkzxMbVwkqL4nbBNx3vhyRRXvLE283UFr7vui",
  "key19": "caTnRiKhrfcgXRao3z9G4xa7PSFHimmRopQavw5M42cxm1j7GCQBSut5jeuqDv7sLjmRgoqAuxxUcKWb6eSv3Kb",
  "key20": "4n9xfAJ2boFVMHy93ujg5Go14FJVgXgRvJteRg9qr39WQMdCfKT5aaxkzXjZS8emgp66K7iQWquXiuPm7hBErv2F",
  "key21": "3dsWLA9PMtkx48Rk6511nUsdzCgirboFjB9u6oFKeeF3QFkUemFufwF68otDi1NRag66bgMPacmZ3pKmxdPnKexh",
  "key22": "4Q6bEHpZGqgaD2DBpmL8vrpZKsWBU1hFSrV2f4SynTMd2gKnWZ9cCHbgc8tEDwiozPJWMsiRKBsue1b9HnwGUuCz",
  "key23": "4sVCV6iUwGGYEGsNZz5DYtjYAoFc8QYX1qd6ZdxCbfy88X4E1xGYv4w48DYZWD4R1URS4Z4xUZWXrwkW8CU8ocBr",
  "key24": "2pBbCawvFo3DULRAN4zFhSDniThGJVAwdGX8c3nHRURRKQ6Tt1LeMrkPo49wniWTcHmNyuXHbFhxBvXExKDekopt",
  "key25": "3uvgpcsHF5pueDLvi2vqodTmR79Xi196cHbSmkUJq63Z9jPhqZernJGZnEkh1n9oqrYVxAmJCYsPAow3HLuBCy6D",
  "key26": "4cVsosn8yYhb8C4ZcEvJFnVUSnWRCZCZuvwRxqwHwYpWtgDsUMzQU74iYzfanQwS41fNucc2R15EgaDtzsZ3vL7x",
  "key27": "4qd6HapPdCzWacgbM1ZxkUvAadvLfP2efLLbZbatY9s31WYCFGRZ6NhUbmu2bCdH7687bhKavRfWxRgCR8UvqHAD",
  "key28": "3WQyetVSBHoj4GSkzAhYx2Y4YaNdE5Syd6HyhKG5SB5ukNnZBx8EisFiyc8FXb1mWJFGmVRQj6UeKWM3VPqPJpm6",
  "key29": "3XvFZTFYJKQeNSZAxRdR2NxoiSDS3jSXnrmgcqmA1Up35ZuxkquvZgetM9ah3pVft3CTkcKHq84YNFXJsYQ2PiL7",
  "key30": "35yeSJMbMSEJixH9dTsrWmFgfNtwfkp6fgxwZwwWZRR7LVGLnWpx7EkoFTvcjeLdwwiYaNCRz6f7yJUJDZWz5rik",
  "key31": "3TgSEyTJ2pv3B9H1chzfdLDNZh3ovC6FgY33soBevckxudf9eYwxkrqufxoVt65if5tKFT9yUE9pCFBPSUwE6Ssb",
  "key32": "EggPApbDaWMWNUgBYcg4riS5Zq3AQik8xFxRs1czMs2x3RX7caXKjfLCtdDB2Tjkqm1yXcKKEBa5q2yffasiNwF",
  "key33": "4EbnACJu56v7wBwu4RouMM8xiLXh4e7pzKAuqGkpqveKChW2oYDWEvfLDojWaR7dwR8Cupe2Tqfe8SAJTyFZMfJH",
  "key34": "ddWFHLwQDmAaZVGRSxN3FBhQU7AiR62y8b2LT79NEN81bWpHMNmXj4FXNvP231BBsb1tPV7j2K56oFdrFkWnVsM",
  "key35": "3qH6kGjcigP9q2ttYQLUmaiSUrb3tS5VZCtHUcGG44xdmmo6vh6BkvQjVgQ53ekBxe5g3oaB5UUfWHsvZLL1RjUi",
  "key36": "3txgMo62atucRdsQHUE243Pv9znU62WPCkvMtHkG5GfqvEJ5FvFc4p6rdqo4J5uTTnKsDWaykCCbAQXEm3UBYhj5",
  "key37": "489V4LMrFJsLJzZSkgcXgLD3C5auQ5trTUF3iBrhtvi8oF7R4jNhLuqWW2p6ewomx8qRitHzrkpT6RwYeEG3EYiL",
  "key38": "sVUXnx4UUiSZyCUabszzKBsYR9fBMwiiURp1DQGc1LuF3g8TYvXmFq4Gq7grqMvefh2At8LVWjFD6U6vixmSA6r",
  "key39": "2pGskLCzYxje9RvEg2j1rpquLsLYHCaz7muESASBg15VtfUqxfa24iURKWCQtJDMR8uzBnMEfAdjWHTFDfi9P1sg",
  "key40": "4LiVDsxvCdQdJDDKXWSw7bJfm7GBCocgukCwc14j9UrEvqh3x6qZvbENx8J93J7QEa15MRvuzzuqwucvu3aCtSQA",
  "key41": "3oGk2pmgNuKNU9LK3jVGYCP5b1MQiXeV9FTVbiEqRJvQMNXRNZPLWfN1TNQ8xagYD4xb8YpAWFeuZabwoLMncvNd",
  "key42": "4MUS5Dcn8t9CUR7gALZzFC5RMkzFYsTLHvvvFWMEPAM3jnZtaU2w8v2APY9wms294sbyXsDLuXmHnZVWKiphb6Fd"
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
