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
    "3zRsHDrHxixrZoyPpxFM5g3nrFKteLHgxsfKz8gHb1aXXUjriQdEknSYsW7ngnN7t9PQyVdVbuABiQWFtXuNZuqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59zZ5XV2jTaUnL7QzFpwS82rKFggjxeBvcSv4dchroApmE6xUtvprNH2Tv8WXuuEf4mzKyM6JqjnnUSB1evCZuem",
  "key1": "371TZE9N4sBnsxgsrdCCqF21pyXHWHgLHCBvgvhhQVxnhCWQb5eM8SzxQkrbwSWRPNiMnb3jYb8n4EWLfdL6on5V",
  "key2": "KXo6BnP8PzM5c3tCcTDbTzMJfYSDTmmtdcRwPJ51cebcVUWRubFDSGaGaHP4g4qjyxzqDpR3GktexEyFY7He52K",
  "key3": "34Hjar2WDj8KPiBSHJcfwZCuMXvkhKEPMRf1rRWgog56GBf9Bdt6TLnFyKMdk4UsrPEQeqbuWk7afjre1jZ5Tbb4",
  "key4": "2BBdihqQ6tPbvMgrdcKdcRf8ophjEFPEC2wqLB2NDVndPErvAVrcfeKEm3k2HW4PDFSqKxzVFemoxfKLVzRR8iLu",
  "key5": "3r1vBoVMhnAuzZ6vzjba5cRPKTNs86MTPKipzQa1WCH4ZEuNEM2KbnHpTXuUAhtky2WQXPZj77nUE9WvBkHnHRoC",
  "key6": "rBPdokaag6La55RtCemBxBiMoTKSHgfDUMSa7PxWMeaHydg8JXrD73aUkm9RDaM4RppgkAbh7zewhjfKqpMXnZt",
  "key7": "3DJtkGBa6N17rwjg2rf2sGxhNrwfnKtfmmbLQq6dbphUujnDuahnEyXwvGBury7dhS7C662UgcVe4qbBYXQxMJN3",
  "key8": "5CEwNNfKz3W3mkJgaetVzyy8X6ngtijXZ1xWHtSn4hjHkm4C693mMSytUJSCBnmagTcyqjuAq2GFPdkJLub3j9ER",
  "key9": "2sYjvpkbzisZGxBH8iNasZVAeQpAyCrSZhTGnjKqbhhHpvo19y8XV4xEgz45b7R4nwk5MBEXTXZjAWnme561nidH",
  "key10": "joNhJAxEKyxjFnvTTv74eNaFSUBvyRZZYKUHzxQZgTFkjzjS1mdGtdfebEh2qwfuWpr1beujrLv4kMe7y1Sam8i",
  "key11": "5r17BzyXW2CozCW65M9RTe2HmHx34Mcd9GuAMfsGqVBPScY1VE2YTUR1zCNF4m8r26KumrJ3a27SLCMY4NUSdisT",
  "key12": "2LSfWdr4bKe4989VqH6zP1esMzMq7GV2jeo5rjZU6YxeZULmYaUiH3Azemq1SYMhFRwKZHHeoKQ4RMgdjSnnbA1N",
  "key13": "5bErFduS9DmCxkHzUqasKFeVHKqCE6kd496FkUm6Pcea3eAQnFciGjXLPaFx6D1BvH2vrCDK8WY9Vcm51efDt3CJ",
  "key14": "2puWzG7RYXY3A7ogoTch9HuKi7biP5A4PYyByBUVzcEeuZmgmrhrCicwsWY4WLHNySUieMQwoY5kVT5XqaY6WVaj",
  "key15": "4eygNaNQGJapEaSyQU1evPLiELo9Be77eXzaMB6LTH6B7RNkkjAqLMkUAwgF5DMxzxNm9JgTHQ8kt22NtUR28Jzr",
  "key16": "vQw9Rg2PuVwbj3eHMSm4Q4S8mdco5C7T98mdEQrt6GjH3Gh5BkPMEGjqHX6jhFVik6kKXMH1KfhxuCVzuoGZPWa",
  "key17": "WYh2SuaijF3E6w3Yhqm9KQH4ZpwzAS5x1emoAwzJVaLQAW7z1AqnESDuFPDtQ8UCzVZCgmVHW4jJuytFKm7NrwP",
  "key18": "3aLMTKVUgqGfikV3CFy947nnjdBJwS3iVaXciQSB7cf66Ls81zpDdX7ueDQ4FktbjAYi7buMULrezzaeYS685MfU",
  "key19": "2bRSo6ocusXXeVEyKJVUBh8jmeLNDEXx3Sh1iGC8mXzBDnqQbXTtDknne4d4G1pQ4hPXsv7dUmF6QymKygxWkVXR",
  "key20": "hZDL9dChE2DJM89orLWThYrC91J1WSrSStsSx2TwEbNTiKZRZxCWzNt5k2RnfLuPfC69hYzq1HT3XzdT67h1RTX",
  "key21": "3bTJ5m2TX8xrJdMwHSCnehKsoLKDbhYTH5i4fqTdhUpr9ZD9pNaxTXPpTGbWHLPkMw2J9iXYEwuv2KQvU8jqTFy",
  "key22": "2gVLrmfWLrQ283D7yrNoyh1mVtNkPH7koDiUHg8r6dHR5L4eJwmQM7CoqTRSkvBgS5SJhToUndfViMRn8HcdqM7Z",
  "key23": "3aA4toxw8zFVotuSM1Ftqvvpm8JuQvfRGGbS7A27YugwY9EnJoV2vnyC4DN8uAbDiD6TE8g99LqMyuLvZ66hmnJE",
  "key24": "4G6VnuFJoPAdhthcHPBA8bBaBNnH1ZyiY5emJdAfnnnxtNkCYKr9J3iKsYYK8RnsH5qSSNFkrq3WPeWTP7yGQ2iG",
  "key25": "5fXN1spq5J9RkMSM6d9JhJzc3JDaBytb9ZTaMiU36fXHNZmYBtdYQL3nXMKkXePZYpqbpS6hrHjHgQEKLdgRayQs",
  "key26": "5EpxZbQeUpku3onitbHGpuyZhSkjX1Z8VtohsdgrgmkDQQEGbiTtF8fWs42TYk3ni4Whwe9QWGVuthAS2vSpTthd",
  "key27": "2GsBYhKQsPeFxUNqQvD4wmWbR7H6zjJoEufVUDZm5vQ5JYkqLXPkTZVDWoUBTYtp4n2drrSGiDfiUqNFxpx1y98i",
  "key28": "kWfK9spTa8NShNNAzMMNQNj4FayJsQJtagV1WwVd32Tz7PPVUhry8YkNv9ydA8ouhh5qPsNC9txs8pAuiuoEnk4",
  "key29": "3j4jyeAdLbX5T9vg9FvSh3FnkZi7K4D6CR5Ae3JRjdCaGcXVJWxMmwRBkrmY95ov7ajRxEmGaafPLQuSH9AFRjFu",
  "key30": "5n5kbvKg5LHheE7SKF5Nk2AED3NhUMgrMdN5cQAmweHwUVT6DtBmJjGJoAnyVgxNw6zq9e7pZRUrTFQgokK5TGw5",
  "key31": "2NQC3k6wTpX6tcbAZFc6hfme5jWoDxuo7Btpbo1MUzHqkJTydNkM6gZzQdwuFAnik2GmmqazWGbRfRjrPApVkH9c",
  "key32": "DchbgWVVUqZ7h7aFLBpchzwEexbeGeG5WDKL6u4kV2jLnmHVhDMdfbs8KzVVsdYThy34o6AFtM5Vvr1SVbeuwKC",
  "key33": "5n3e9DXhxf9wce5rGi5ECkzMhW8wAcnZGLtWhkMMgn3LWVHLcab8n3movccGxh6d2eBrmvLyRUGrExKRGF4tuuR5",
  "key34": "5VPVNMYVFdFhfqhKVqsNbCCv2u9vUakRhv1jCaiQeLM2Tbx7jQNjWK2amTeTN2v4qF6GyqevV3KUY9r1NSsbBZww",
  "key35": "2oF55DZSiDTg8BFDHQfH35vmwR8HCyL6eEiQUHHmZqVDH41582GwXHY1qkh8k7eAJ3wFzCGztQcR27QFTsC4owFK",
  "key36": "4wWEgTYRQFcPVRcfcRK3oYCCyh35HHSnLxkrQP174oJTFRP3PF6UfXyn3vnJWqMNZyUXDAE7jvqwrK6D79z4UVQZ",
  "key37": "5bMjRMDcXLZHfpjuYeMZ6YAx2U9nXzeV5TeETn45MPf3kCmyzoypGG2mvFxQoAM4D44d56m9GNg7DVAdnE6NvdZS",
  "key38": "61rhwQgkXfN1wVqwTjSeSerXiD9jVxx9SJCpGnQ8C1EAyEC4gKpH68WA1UPu63Rmyd33YqtVzjJCE2RvvkEZ3xFD",
  "key39": "4bWY4AA7nSNUmF8Bb7BttLt6YRdcLadY8E6Vwk8NXzHkU17oTAFnJckcfGu3X54Ti5CM8tNoYY5puMZmUaD7EfxM",
  "key40": "Dq8yQ2Uj42V2CY4pg6jxgKKrc8ygM19Puqfb6YN6YvHRrJs7JDVA7F2sUGZocb7yTb15puEwWrMj8D5DZMuuwAb",
  "key41": "5rtrB31G7LnSji4YdWsL3ie2JuU7mNDBUxp1ubxGUVGyy8vs6YmYQsJfQFRMQzs83ZQKya8kbEZ3FwD2jDB47ca3",
  "key42": "xw7nYFGvhp8eRis5kb95bSfFRQvFxtgqwm85ieM8gmnF2MQKJ8GgA92gWB6S4DVFqsB7STxXexUkV6XdRrBZqPT",
  "key43": "4rKgJFaQ1hKvnCNyGntum6ffQmgXEmpFHrRDath93ghqsJ2b2YYWn1WmHMoaQgmSFXXGWY2hNqpiMCwj1xgSZqis",
  "key44": "5CtxUENhf9WC9Kk54vgxp9c9offB3m4UNAMvBq4bBpUPqFdX6hp5rBx2DdNfDcQ9Cc73aQ2ggRWoxZ8JrsQj3iaj",
  "key45": "5DZ5MCRVB2J1FqStkYQaNcDNhKCXKnH9Y37CLG1wMZXqiYvDfAaNxXoy74LaiTPC4eir1dJYqBDj8n3ZU5XBxzcj",
  "key46": "3oNL7GbbtiYqkQUwTaGLzK1UfVXsUFjDwqzXdQqUucRoBf9UbjWnNL7p1T8h5qUNAeRAez9Ks9NkvnMeCo7FVT9Y"
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
