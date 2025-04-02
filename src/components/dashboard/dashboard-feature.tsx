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
    "38y1Wn4Yd4HML6dfUrYxo3UA5vVpGBvyNF7MLDfMmQPi5nGgWmn71K1qVws55TftinriyXmxawvuW4TweJmx2epJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MayD9gubs1GGrKVpE49dDpkmhvRfRDYLwU3i9UJauVGG2ezFixsesVksGSPQPTJqmWQwmwuQ9ho7pxZEXmRQXxv",
  "key1": "5Kkt8MAWMTSKDUyvhucL4PfYuiuqKZDQmVWE9bAhkNpdpVCJCHSKbUAVQh6opB4N26g47n4p7NaXXJzVTuAs5uZQ",
  "key2": "5S5yvTXST2PMVeYRCCr5hGUwgLXgkXvYJ5pyJnj7xzy43dhyNpsSs3mJzEXRZT3XzyztWG1PELQcjdFAXDHNkLLS",
  "key3": "4WPTdQDrrrWGNEdwofdUd3MSotBfuWDnq6YhEAFg2THMcitjCbGdyPAbeJgBdBjeXqUnfENAzG6cS4VsDUTaPFTX",
  "key4": "3LydCgcFH6dqtZKtbDLPG1Ane96fBybXRAdyVTUMPHbFbfGby1Lx1QDVtSHUgV8Mi7nr1LmKTpMfTZrCzYQdxQfq",
  "key5": "2MojHKFitFeceghU32sMHqxdyHXpKbjazZioJv62CW66CN5hwUJQPfkfEZdSGQWcZTSRWfMz9MyNyJ33DK5KaFjB",
  "key6": "oHB7YLrVoXoTgx1FMXrdrkYqQVKABCFFdKkz8oVtvgZrcDSUSxrLNEFyC5TpN6K7xLD1MBA9a5QLVks89Ecg86v",
  "key7": "2cZZ66MwhMR9yknRkYsMCqx9UnAfQZpWDbp9ZEmiMtpnKgUtmrPcdeuNAuAEbQgNdLsYfMttHVkPpzXgtqJwCwaj",
  "key8": "4nfHrWfQJnPG5PYnR14NR6WFL8WR8YLsczBYKNEtCH8b5YRJYYBpgqfr4ehDJx8HuafMcMUAZjesKFwXuAKZekAi",
  "key9": "3TjttSNKHDqHNrJkfB4VszqQ8w69PeQrAN6RNRnvwMzTBiQwhuJZHoNucoBvyeTFW9C5tAG5MExmFZp2GChxRTei",
  "key10": "4cJnMXVDk7nyo5FN9K4uNv9YxqURi4jeSEmdeEw7pyvceUwDK984hjZcskE7NyQQe4axiXgr8oqyMtzZSvoE9MGd",
  "key11": "5yCX7bda5ue3bvcawgPmEf2Y4J6NsigDxUMRy7u3DZYKyqiRis9Pwk6pjChuBEq5L1mue7nko5F4cBk6WwsBJ9JA",
  "key12": "9sdfLHs9stD4RqVy4egAgo5pnijuuySiMrQi2ftpPPdJeNJs5ikhvQHi89S2SHFxv8M6EXxe98cabpC2awMDk6Y",
  "key13": "gaLPfFJSc29LxkDnimmR4TmmRtrB9eZLEmQj3nfCud6PM61y28zj6BozAQhZXV4Zn59u3cEDHAGtaB35DSSRss7",
  "key14": "rhd7Gzj76sEBqqoY5TZKjmc3RQZdFPKvRnifXB6tL8BM1sviqEZGgfWks16PmVipXCxPJU6hbxTXT8DfqrghQbs",
  "key15": "39jxYxHXbDNvi6vBEKMwkb1ba4cCEyw4GQEqJRwUy8bpa2SHVumPn33NFrBQk2YFpEsqFwtpio7kRALF2fFvmWi2",
  "key16": "23uUuGtv7kidbXieyzbE5vSjdfM5JPbGrnhUgch2F7xtVpT1fosmNCkdRUWXRfa5Yubneuh4bbYLepEXzdcTCJUv",
  "key17": "2CukLvFPFxsQ9wvRTsABDQqSrrwCi2sCt6seSv6VsjTXFZe2Jb1Y5daSuNKhF5BmcRJkCY4WwstpMRczgZrcuQAB",
  "key18": "4UUCg4CAp8XZTUZ1VMbyCpMFFg6ZgF2t9C9FfiHKr75yaMoWGjRPoPGCsGEA5ePUopXy9v6eUEZumeSKXZUzGhsi",
  "key19": "27iuKdTJiDGZmqS2pKjF9CaLjCTeSuibwc1HMcWU8ixyRpxkipwiqLN1PN5oJcekC7K21gyH5PcAVk1hm5mq3RHX",
  "key20": "4nyYS7opzh14UXuE4TuACbccA6QEomi12gT9DETr3TFsKJkSHGUfCEwt2522jWGkHqS1EWDsX8YhNkfV23N17PG5",
  "key21": "4VceqtbzQSAzUYRU9NpYq2kBQVPChH4QxucuLB1ois8rfGgGvp4NDYNcENegxVnAYjS93MRFbHiUZXiGBmATCqPW",
  "key22": "fRUhPdKzkmCErFfyxNtD5wTx5RzaCssPKhsi9XaGVRSdLSmK6sKdsWAf4sjLLD6Sp4YzKJcPGh3sLRRPSc4KszW",
  "key23": "3v3j57jTXh6gEUUE5zTrtU2Z7VhNhBc7hBHcS1pae72DRX4FWZ1jCg1h7yVFiSH4xPCYQJFCvZvLM8bxzkVX9Z8m",
  "key24": "5jRidA843N9xyK9aDeS1Kw7tC82Y5p2gCmk86YqTabWn5vB3uPGGB8oHGUFfXd5sH8dvRu5ZKTzXi8yc6hFCvgSN",
  "key25": "28GZWcrjARfYm4oEAZrJPg8EWnz5aqrEnFNvBKoxtmJCpt82T8yunDNWs3yFdFsMgFVafHKnNQETME29N6BnkBwV",
  "key26": "3kmEFyLyZJdycwp7X793H1DjF6zvbWxWN8GhuV5ctmdgr5fCLZ5Eh7tsCtBeXKcVPEQwnBDSNJstXnVukqjacygv",
  "key27": "vV6465x4np5ECKYqFnao54MDhqAvpeUDcNwJwamWsQzj6t17B7uERjJ36PBdJHH3QZo8LdoeUgeHvdQmrbY16oQ",
  "key28": "3URFttW8baNUJU91VFzbTZx2JoPicNBR481yNF9m1mjp2k136KoEjCCk6GQjBnDme5V97PsCyjN6Z1yRthwXopzi",
  "key29": "4qakCy5kWE2yNkKNoaLdqAzadL6k222tQ8ESFgh9HNg1yzcQ7FzokHhzeZpKCaB5Zkea8Wwhs6aBGbFJtksNUK4j",
  "key30": "4qRRLqVbU51A6AqgMbNraRmooUDr9PTPKXRP3oi67ovwEVehGeDky6Tqef2kVNrasHxsmodBE9FwM9g1ZnkLEuHD",
  "key31": "f8MkzfgTotZjahjM4kHwgBhY7KCtgHecao6Cb6m3Pv3PrgT2grxA33u956RCf5VkvhyAF9yeJa8JRToxqh1jAgy",
  "key32": "2eamR583U1a2CrpJfondfVPvvGuvt3taBxpgbJovz4ropu5GvV3wP6aQGGigi6Z9qRbPhWKkje5PEtAxbpMp3AkF",
  "key33": "2wCSqgYo7FC1eNvXsLBWYamqvxTr9GewmhyHtwWbXsH4rs6JManJW3us99NH6VWwQQR2ZbZdp3ZEmmKdmn3KNJFe",
  "key34": "5DrwqgVTgYyZWCig7n89jzXBzHKUpfzd9t9nW83PKs1H5bsGfvJk4JGSqmojGepJSbXYt5j6qpb4D5bk6ErYTbne",
  "key35": "5jf29y5Ah5MzT3r55j1Jj6zdjiWuKnZaQVq6aHBR83hWFVHqy57GVNAgEutmixrJXFdh2sTipyS8pY6UNjvwxYoQ",
  "key36": "3NkuYx7xMkuPHjCvw47RDmCCREPJ9yajHJFFrRtR9mfmJx4U6BacVRVmaPnRGTvM1N8jMZG89WkR476gJS8h62h8",
  "key37": "4FQ8DyB1hJjJDAYexS1oNQdffToBRh9pqCWGVMREvs37qcDxLVtexdVzfhDGg1C9qVBgtk54Na2ckhEzBhYJegjt",
  "key38": "5j8ffDQpSkY13eVowsR5wobiAm8dfWVPYe9ZZ7NEvHTwHka8heUe7mZPwmxgdNuiYZQDdk1hNZzBoKafg5JkwF4r",
  "key39": "ZbUH1GUjCFNvogzGcavy9kr5niB3yDbUCVMCUiUWiRFSEs6cMx88KFYSEiXJGT7GMDzbSXv33yRM7cN1aMHNsVo",
  "key40": "3wybgG3zTEtM8JrHkQHVGSufBA5yjH42EyCMqYKXfVYKdqe7L6MEBnBxztPSmEdMHA6tPM5H1V7ZbdABY1EE98Jt"
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
