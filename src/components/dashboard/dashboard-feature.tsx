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
    "5UiyaVS2Me3HbdbN3EyN8HDyzxvZPwv248zQbyPcaSPZHg9bAXYThPAg3Jp5n3tFqsbkCuHdQbnTz89BeKF8E1TS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LUstp6Wap66MrUoU81PaMqbAUg9agHoyJ2i337rGd61S1cJ3hseAHp5s9a5h9YbQGsKB4v4HCSvR17aQ76Sy336",
  "key1": "3XJBWJbudad4kMAUAG7GHrJa2kYzFy8pyAgLRhTS6XvzaEmQg273pBkG7kCKivw6zRuCABJQ4Zo2kBveafqBaYu7",
  "key2": "3jiiYuGy92eMuMyDLrWnxrB1zqFLUvZyCDqwHFE8c3hGxhwA5EZKc1f978EWW2ipy5dADf86yuhBgvBf5YsQ5pqK",
  "key3": "2bBQHWARz5WUwB1rDZWWg8oP4pGEFdi3rQrzQbyyqtLSsDZot6nM1WMZxmiR6ncVi53QoVPQcCSZqpV3EbSzBAe4",
  "key4": "5igTxZCBRvrNvpXbuUMQ64DJiCdjvzhNmsobuqHCLtT8GJV5kW4n9hBbSQgdCgZHkC9HBhgsiYABSRH46dDA8e8j",
  "key5": "4LSfwjeYTdRvRXPdrFXEgmP9NgHaVW635kVbWQFLHejNtb9RjGc36mdygWBTRRYyLVaJyYgaNMezK8c4Aa1B3P3t",
  "key6": "2ZF5xgBxJQyfwmCFTyQUHA5k3W2ZJvWW2ikbBTH6Dq1pV8Z6SnXKYJ9sFWEEA8LRwSfcVYom35B5zd6eU8gFscK7",
  "key7": "29ymd3RuqoQnyvTxB2nGw6S1LGLJCqechPVVZdyyi5oYEjP8bhmvYLptrqKpcmFwXH3KRbQBqommKN7AwfC6XUZe",
  "key8": "4woDtXEgVngpkfAVvnsWajCmJgxDDzeq3nKvFcB3YrxUZuUNfbWhf8U25JZNzVxYMRWsMDiMwYWxUJG7YSCPFmH3",
  "key9": "26hEZANhhhfxCom9wm9WhgBEmzqNovd4kT9HDkd37ukcX5WRmkvFQuv8JAwgu3bf737ZAJ24eqzfMVQGXMggbbBk",
  "key10": "5x7dcHHfxnMtRvs5kJczK6hq1a6THmpT9D6BXMjnzhxhjXaoJSNSdw7wudV2pWenJ3V3oNAEM7hAkDtigHZU5EJh",
  "key11": "5rPDFNXtxggNdMue52XFvuBUVbiXkxz8uCXo1goUN3vftRvxGtnd7Ag9ecaXkvV6WLe6gJZj8iDgVLpTUvc8GvCh",
  "key12": "3H6ANWpv9QeKwvNbS3E3zsJpgPNp6hzXNdGTLMbxnP7CpJ4pKYHDKf3zdtpbqD4qGpShDVNXh1aWERycuXXr4XA2",
  "key13": "4QrR4E1qjRPYP5oQA13Xvv9r9vExcSEEhs4mnhpb9dsWwM5bDurJFCxwcXj7PSgQAiMAABfVwjHnTTpEZ8sCLECa",
  "key14": "sJeRVxPvei7QNxRtEhYzgpWqzhN3YY6dvXzTdjkkURbhfBSzBL8jrQfoVf4f6R4ofDvKbGNrXJfwPUA7ZQPi27V",
  "key15": "2Yjn5qBKpByA3khG4GUzUqdJAtkhfK8FJ1usFumEnepwnSpq56NSUi37ZGUiBz3Hy2g18zAk6SPHBvPv3doBQrYJ",
  "key16": "iLkzxK1NqPqmVhpLf6nJfksyZZ47V5ok5xzBb6TBJi9GQzFvpnfKh22HaUJWkAveWPTw7Qc4iQMuJiELKJvQT8G",
  "key17": "3KtfsZWZpjDUuJZ38FhMzTk6QNR4pF6CYx1aKT2bTdgmwWXcTwGxruijmCkkppri9HACChWLKKpApetqy93L23uU",
  "key18": "29mceWLaHvgcq5DFDPnPWU6GzL1bwiLMEYhhWBSAYDZyAcjTTEAt5UhoEqb2qGuGhpgxXGVW5L8icPTAVr5FgscG",
  "key19": "6GNHaDZpueAAgvt9D4UEGRZ9hjwzbT4Rh2r5XEesizWz466QT79F3vVXF4nutuTjPShFFk5UsCeNS2dc7VxQghB",
  "key20": "3WVxFNkLjFH8THbiXMdt9ybDMBCkGJXFCBQ9y5mcWtdsgmbCZvwbwGLu4uPm5qygqMvpeM59WeMRd6sZeG41RbcF",
  "key21": "2zqqDi4Th2Vd3p49y2yt3ztWyAgr7bDtxmmYDiohbM8HR8BgKM5jTLnJeUQzLvPjB4xs6hVLXvvEbNWUSghe3DW9",
  "key22": "PEaFoKiS1Bzrizidu6N9PfPSHCU46uXShJ5YAvgGUo29ujMnn6vknojx17ZjYrr65GzCx3Vy96fm3fh2YRCLPqF",
  "key23": "fvTTyDoqZB7q49mVgBKWikPwDVY5JawLuw4pJ1DvEWxP983yyEnpnFAChYnwnp6msjmfkfbR8vfHwjJnAFuPzrm",
  "key24": "3QMQBj7k6NypVmN8kfDpxRjHfhHTE3wzKhwSCTof3WgaXpYQvsampRN6XMXGNgLG5mot3xbDhD17YGFHvKXfQWFn",
  "key25": "4iQmKmniKJRjyKyyi5MzcPxqGNHHnPj7Hmt9qJnT64zMxaivXKNQsV6qPRoYhhva8wDnT6mNsKujtqLypDc8SnDT",
  "key26": "4aJV9pLNidrJQH8QyMEYfBZrAHj6Jx6tXyxk2MKymXkMAqVnJhASzBzB9xKq6Q6d7Uy9vWwroA9JhjgpACqcso9W",
  "key27": "5EoSPaMgZ7kNkBZzGaCVLCCysNT47fit8ZrKrWEskuVhVD3W5wks6u8bVPDHaZxmCNoGz2MmdGYGdCsfnW5qZ3kU",
  "key28": "48Gu61rBUtqng7MsMzXXN9QNxGrjm18YSumyMZtUWbwHYB4vyaHd6Htg4Tg3y3JxeAYy8qCj5a7AbYbngBW5Y3tB",
  "key29": "3wSLaEosvEx1HocaKojD7h2CK3ZLzDqZhNSjZmrzDeLAkN1pfM7zMmeb5mEEgMJ1bLHd24W6WG11vtByhsCBxmaj",
  "key30": "2vZLM6gEpoGQMLfkDTPTx4iFE3GzdvqfgD9GRyRsQnUC1WvSYDb7QLTzwRwQNZ3XJT9fknJqEjivaNQDk8tcAUVQ",
  "key31": "2T8XfiULWNcx2WCDmLu7pjmyXQqrsxeF8nyhg4fszrDfzFxhJd5kBekAoz37TSJtmj5Nh6DBkpcQx4R2UQCQtoFc",
  "key32": "Wx5xnatFxvZy2QcDhsBxvGJcBeXw2y6UMapSexdemNKfyzBaTDNyKuxU4MzZDoVa3ubwHyK4kCtnkqMGbmCpCcN",
  "key33": "4hvAwQASq2cxPdCp9bRaeVKp5TK3cfV3gNmXA8kKrnyaiqjs85QDJf7t5xbZvwhZgMk5qvP1NLkUwaR4gF7qgDeE",
  "key34": "2MeLrAApqsEMd5Thb9u4TQvv6NhMD1J2oDbBfNKbLvLXw5kPpKS4KjAccmsQXGbdGCR9GnDmmAsScGpFXtWgw8kB",
  "key35": "34FcMbiN7kaddzNoFC4QHbmSRLQSSvSEKi4iFCtYSVz1tapa48J6RbtNRvbMkKQD3E6paUTmszmxrPMttJHsxjCK",
  "key36": "2KX1H5YyWeACUDyJpCcfJu9LhDVGmXib9YppRKq98TC784dTURyAvMBWhTPGunGsv4tJjAdN5XKJYYQZcudGvEC6",
  "key37": "4jTos9nLG23PH4gyL6FNe4P2NGoiTpCqzXWPDpHrNwGk5s3hdWqLZiz7EHoZB4ZBWmLkL9Ed6qao1jUFPVi6tm3y",
  "key38": "563BnWoDcoV1opoyGcCUgMgpNvbhPB5h844U8RpNDSDjaHXXod8GDfETNxSzA9zk833KWwPSjyey8iWw51q9QRAS",
  "key39": "5cSsmftYbsPQ73cREyt3ikSrLja9MkMK49JXa498TWxM9NBZjw82CNqFxnjz4ccr2CDdvVSkkrgJXbnZYVLbvkux",
  "key40": "4d7XFWH84gdwVXiqG5RLYWv7B9jhZwiGu9HDmYT4NLrWvXt2X35uc6AWAiVrrtLzJsgL3f2bWaP2E1EZtkzA4b18",
  "key41": "4Prk7L8aVAYhLEGdecLKfuWVtp9qfiwFkC4cM1qfrJhw6WSprfbgg2XMM832ybcUkH9VnVZ9uihb6kTu6LzuFbon",
  "key42": "55kJ5hpNKVRM7obGrTZ3aEuDw641n7P6JVaPbVd244uYZocSUinUspSdK94yaD6WdqwnGfAe8r9tdgutGW326Lyj",
  "key43": "4jKSrrBWzfaoCcMi35ufPyZ1FsKk54hFVrXz15kQMj9i65owCf86G1VJ2rskH61g6bmbmzQQ86zdH8HMwxtQmfsd",
  "key44": "3c5X36SghWdShDh5pGVWzTMfVrxezR1SMd3LBMqoVayK2iQTzWhnbci6h9gpTV3hsphxLhZUcWYFwbYrtaxr5sfA",
  "key45": "3nULCq2szMnHcbutoQHbysJdPhSMkFLEWULEynxXyuLFvggvP82N1FCqm6YeWX6eK7grnbLWE6pgJLifinibES8L",
  "key46": "LeietM9RYbib2Km9VqvgcnCGwc5j6355n7cciZ3FNm7NVUmtNoudCa5uSw8TZpsDxwDLE9Y4Fy4WmQWe9JkLUjo",
  "key47": "EH2UvmiXtsFbNVWuNr1P9dairVrUzyQN3RbJS8ghajuACTeN7N2eVsrCfKNueB9HFEQF6b7PuoieRCQUJe8Y5ZY",
  "key48": "27M3V6yVKrm5AqXsw5EFLMMMtgJiqanRHcnBWWG3hL4kJfHes7w9DyV7j18shXfcFwT15AnFAZT9nTE8EGfn4VLJ"
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
