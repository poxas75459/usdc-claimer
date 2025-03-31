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
    "2MGjKBsk8Dc29Ue8yN7ot3nfxkwQdcrNwpfqYZ96YdkD1MQvDVMspu9TWx83W6EfHYpemUZrT3iQNXBtK9VdmxGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfbUS6CAFZTGecpX4iJNxJcvT7GBhkSAjJTWbxhRuPUD53mtctkPAzQBAvras25y23ZeNe8NJ48D3Nzb99hbVKs",
  "key1": "himGMjH8XqcgZmXrBaDGdbTUidk9ZrR8PWf5urP3vQZYptTCg2zYA6u4cr1BHiueqqoxcJsWX1SZmSYRohGjsjb",
  "key2": "3uEuxdLdnJQgAVEKsHL72JzYnFn6gStBimHds3Yyv1MPxQxR5vRx31pcsoNfXAvTTrPUNwHgjKpsFunH3p1V51zy",
  "key3": "3YZ8nH15hMjp7vJSsMcSUCfVE9L9v8ZRx3YE7rx93WApJZ3q7KqkUQv2aCZ4FPmyF5TaVokKviiBB1jsYYULnuPm",
  "key4": "4cjV8RT1fGNaUHQs945f2jr6gNiZSZUPMCR4HBgaUfLoq63hkoCqFpwcqDYtfJ4vs6uBDiUQSU5PDLU8oNinsi1n",
  "key5": "28w5ZPLwPKcboR9AsVNAbMJ1fbnwBA2mJnjkHdmEoAHnVRVRS2HsfjTHvD668m2PnUHNtJEbxKLfufqyZr7Sqwns",
  "key6": "g5di2fY445d75hY7z3PXzaWmnktn4Ho3j7qPei9pqqARy3c4Q12zBS4KRVWMB9Ft5J9mxjdb6gjGcDabzAkfGDo",
  "key7": "2SxkaDfNNjNjFokFfoAj7T8A363uEdrWt2UzcrnpFpWCs9iU9uBEsK47tT6ytFuwfMNRkV8kR6KMZxmaorCSJpaR",
  "key8": "3RWbkDfrsyW39wqDveTZVnzuTk28tsNFAsbt7k8AzLTHPC6HGmbA8761zvmHbXRHmJ5VkLPzvYpgcnGr51jCz7Ag",
  "key9": "5eLfXHRkuNyheJaak1ooBvS8FXrGCStV4TpjcgBDsQM4pvwpwR4fvCcoBsByYN8poAPrCAaV7SzHqkKPpZh6Q72z",
  "key10": "3UgxvfKvFWrFH22rRiT9XTo3GzN8oSp8nuAZ917pJUy8SkqWRyFYhbpy6QAb7G21suY6WGHJsF6c64NrHH9Phzni",
  "key11": "3Hy7D7ZX4FhVizffY1y42kXkpQUUVCQ1ETQMaaCDpZoVDmiWBjyaVw2D8yvGasXonyPHKWHVHvPFi6oU5dgLXNFv",
  "key12": "4RrEBCCjWFsyFfg9zxCN4AvtJNkKfDCsdoa7zHD2dnnxG9ovPmLGim4AkXAaNJvfATQd4DhUyXtPbazopAjhtZq1",
  "key13": "GaqAZTZ8q9C7tU3tWkUe4jA4gtNDFquRReraFuFMtzsy8TmpQ5UGnguaptfLCThL2MRaZi66BzhyHVcQAHWQKH5",
  "key14": "64MDQnbcKsZHAX9LFAhSvojeW4s4pGSQfYFZ7P2FhaLo28EQF9EzsP68BAq6zhvFXdWDwqdSg3FgxwxK1MuJYiWF",
  "key15": "4FKgnsUqUBFGQVe6UvetTJHRw1WzNy8ixi4d4ELQNpmdCEHKRpVww6bCqpgb1KReJKuVd3DDDZQ7zmt8d8TWhD9U",
  "key16": "MUoo4dCwV81z3RaNxLKwSTDTephPUFS39wNJveXHuX83KZ4BzLqbtD8ufd3cbutypLHcmGbgs2byw2pS4ZG7m8F",
  "key17": "59CxZzrTuyqupWxVf7JGSLu36ovHDVEVUxuvMoyMV1ThtB9fQorMFM42c5r7DkhPQn62jUAdn6q51fx4YQJy8yGa",
  "key18": "2rJsbz7tB6JLFp2EhndC6BDPXCQBmGUfhTTt5xWJ6VXEnbcLZgF7izhNiF24aAvjWnSwun4GtTKVfZiZiJ15YZY4",
  "key19": "5bghFGoeWubS2w2kW2opkwzARSsGHyU5hSkavLTpZy7T3mJGE6ZUka9fn1Y1qn7ebnSu8ofhHySoT91Zj3TdDxgh",
  "key20": "ySCfodV1xYhRx6AgbekqFqTJoXG8BuMTcriYiR5DxShGKLnb2Qf4vHCCRUm2aaXKdNxaMFfBqc45Fu4fSoSVjnP",
  "key21": "4M1vuuj2cM6bSM4tGZKofWSwEu6e9H8kj3NTz6oKq49j6zUYJYpuLSiWJpuNdgjvE1nLDuWhGX8bWouniF3mTDXN",
  "key22": "4AHis6tSYVEKtX4HtEyVqjzX7PU1FNL6oKUDfn8J6H17EaYM49X1Q5WnAF3ygcp7SeiZAp7HB49H5qCM9RXmGBH6",
  "key23": "4JAbshgLZwmySCbLYNEBNFmJfBMmkYPEPAiHMDuuFL8FkA6a8aXUXzfjNmTVnziALnKb9QR6ZRpRGu6A4HuZMksN",
  "key24": "SrfPUsAo43zYm1D3AG2go3wQ7X9TAM73s5iXaVonWRqUXV3SjYxHpir9ZP4CpcQkpSXs5yPWgAYzkq9DdVmCAyi",
  "key25": "3w5rmUSijUVd2HQoUoRHeW6nc9ju4xLexXpdBC15ieStvEgwqznRVRgn1AzVqvhNGn6UPTGMuJHPwWtTzyVV9kLS",
  "key26": "675c26HeQd4AKXjLsVDexsaAxB6HpbVvbGnq7MH1zHPaG7D7sXEepjta3f6c8p1uMdyRcdQqKCnuPAwZcNnpnfsX",
  "key27": "2PFjaP6Y3pEZp6ZfTP5XKWoEjkxz6nVxqxyhBscQ58vZtD8mju5dA8thTTcThq6NX47Mo7kSzAKPv9fHG36obuuH",
  "key28": "2AxVXG6VhUSwBD33QzS7TcpT4hrEf3VMRsW6bjcWRrKTgkLNevUcirmGMK9JLuefAGWRRukBiwSb7fJLWrpvAkSr",
  "key29": "5djL3GynzWxTAE7U2fBm27Hp7YfdspAhysDkS8Lr9DspcDp8L8DfKXmeT9K7GjZtbyXX5oDKJQ618uuTE1DSUYsi",
  "key30": "5QGX9iTQtVoJHFK5hcmDHyriNW9WKEZyAYMQcoaHxA4Reggad7anqxJah8MuyQmV5tTGG6oVcqNeTdKqPYTffngX",
  "key31": "5avkV6YarDkMi7uawwXNtiYimLQ69V4VSitu6RVPcfj2mas44LKz24AiE2Cc8fqg5X6pfhfNJG9PgaH5poKhTFxG",
  "key32": "3UUy9z4jx4GUcRhsUJXNkQsPpuGTfw4bN5nQJwdxhrE1NDYdANMLTXjuruWcMd2KWSRNXKxTXLRNpTgL1npgntkg",
  "key33": "48bf7vjhBrsXUsEaTFzSDtMnVZXAj5HqCBxiJQ7tkNW9A35osXX2VDXPf9LUgmNGV5KkMJ9eXQZ9JEbGNWV7PSL3",
  "key34": "3qjs4gN6fJ5X5FA24ufnspG8CYbNxkn2ZifsoEcfFr7sm7C9uF3nBjQNaqQRgRdMoDkcuEmazAuc5kHGxGJ3xLhr",
  "key35": "3m12WZg1Nb3mKVKN1bvSgKH2wsBRjf6ZfHTrvwpduDgPE9HQ5SZHc2aQ1BppxX6CjcPwZY6ji3tVwAK1Eo1K9rz7",
  "key36": "2RW7eeS8STdADNccvAkUuFfRVrJW4MQ1xEHd9KLtdz5pCSvwRgyozZ8DAjYAhXJXGYg4mJscvL9Adm4X4C7CCb5u",
  "key37": "58v744Me8MtA4vi3bRRdDL2PdoCiuDuk3EJ6LK794W21GnT7uEiggwFCFPJqGQD68c4aWspeQtdsMzpKKV1mnJ64",
  "key38": "GczGSnm4zTpVKbmr4bUo2WyQKxGa5TS1kozizF7JRUe7LkmuTJkic7Dfticrt8e4S8TWKX3vnnvzJeC2s6jgsgf",
  "key39": "5JyUkjCLHuf4DsoXUNXXysvD9wngHsgt4fxM51zspWKSk9kQDdkEoQxiXmYe1LyRB1dV4HEUgUBgqUNKTQrJEr4B"
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
