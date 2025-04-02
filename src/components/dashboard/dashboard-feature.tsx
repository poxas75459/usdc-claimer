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
    "22ye8dnsHpUK4Ti2bTNtqnW1WLZ8iDxuzAbYiXPADHbsPcpcYD16JXaEe35WRTffQ3XwUANNGN4KjAmKYcUSe3Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dq4UgHDfYVifg8MQKmbiBpAfJy1ccT5Y9BUtQ9hT2Vs85q1fP3xfdGGRsTeyu64sWPRmjjoUUq3XhUHabN1hMhV",
  "key1": "TrKnyGAeKtNDvZ8Wt9AJ7yohEjJJUyjedGQkyLbpd4GNKf6LKMuAbY97JUCup7sXjPCf8xETP97gPPeysDLLPWq",
  "key2": "53Q9uobxHCVDKJoXaGYUFGNk3shhsNzCsv2aLF4vGrz4G3SYE1p7sJvspbMVrak9DCBmUBosJKQzxj7eD8P1q41a",
  "key3": "Da4mUP5iMQ4fqcgek8XB3sYqHZDPtkdjDx79STDVWXwGgoTZvXM36jFRcw9ioWuWPmDk4Kt3bvQVyh5KCBn9yzE",
  "key4": "mDZFatqqTBRaWHviwwwtZJuDmVjkdHBukGjMACYPbu48RaRKkprcDBFvmBDSgQCq4AJo2cVuQ56oS8BMqmfFZVh",
  "key5": "5wiU3F7MmxQp4Np4zTidgH6WAKNDt2ENF3QJwYxybacjYU87bmXkgsCzzncrsutWXmeT1F97CJWXpoWoJVNDGQuV",
  "key6": "3n4sWvokA8HjCPjNgaz3DRfKakaSNY8ddSfiTota5TRmoCLbc7GrWa4xVFtSoVdsbGqoSW1GbtsQuXEei9DcXaqd",
  "key7": "3QDcN8c65rdyHgj3R8FgdRyHAhj3MMgzVWWNMBJ5cdEA2Asf4XALiutL9JKythUTsm1unQrW7PyuyDowuVTcZndV",
  "key8": "z7vyyFcahJtT2944WMuGEbMsBCmiC95BDz8SrHJijwB5kBqCorGzj53cJQQ9pzC1BUZx5NkneMdkZj5yXYSoNPQ",
  "key9": "bjRLNcyFVXcD7TbJBSBx7DGFcUqNkTEVKHwFEg1tuTHEgzP9h97SiFGkkpRS5UcobprGFXpWjjGbvxNp8xauwmx",
  "key10": "4vmi14aGYgaziGTrqNaSdK3rLfsQ4GFBSv7xQGivJJAuRDGicELcbE3NEYAFDcVq5UPxmkw5Ls4uPHruc7kEmTVT",
  "key11": "j9gMPzjq612C3zaeGcq5s5jowEYeHbNuFnj8esnCXFFjk5VtGSHwzKAmvnHHng4uv5VSutd541EEPtFVpm2WiTw",
  "key12": "57xSMG8rHsHkWQ9zceHAxTzTpwbZ7s6QfnScyV4yowK4n6nwPPB5WcGbt6K4T4jJ8t4SchTPBd4pRYEFK9reLYAw",
  "key13": "5m4Tor8SYxUFNAhzCXi24jYgj1W8T6FywsYKjcnsXZB84CCTziHmnTburnQHqEmL7i6SWQL56FSrXvJWu3SHTVXE",
  "key14": "31SXD5dZ3iH3JteiDMuTG1koRWgK3YjPBeNonEgSNFfDqHMsvq8A8qB5NWTmTbAvCma7tSUdNC9uVg82ByqnWEyE",
  "key15": "39e5c1YcE2R71MdvkUAndk37c4nCyVm7MpW36VghQKX1ekCodKK5uewKJqvdTbmsGojwcEZe28sJJBnFouPzbvR2",
  "key16": "fQnS9PnaWMa4j8yYj8v2PTqrYQfkjX3cF6dChxWXPEwB9dhBdwQPpKmDmaxd3pbq7q46po7vc3okRZF8eg1x4Pw",
  "key17": "2aCqbe64xpFk8h7ySat2USgYsAtGMRUzGs7ZXYD25uKRioFQWdayPN9aeiken3u35itEQLmvpxh3ZAtBokYF6B7J",
  "key18": "4vJjgvGqsHCAn3aUy2Ufx8R5v8m18cCxU5Uc9b3RNb4DEtSJGZv7SRny3yXvrRMrJrVaDtvB7U7v2MoSjSvjdnFs",
  "key19": "2rguYHYSZLXhmYXiw8pC6AGRCK9g9K1xKjpQuMYuTbZBrGHunV7Jet3CFPhFfZufAuYfJbVY2jccKxGD7beU59V",
  "key20": "2raMtFBQ8iB2Mix7HiR6camvCBzXjQYfg4fA7osfu7eD93SX54F2MT76FHGG3fytTgFKr8UmnoGvvbwgHLkTj1D8",
  "key21": "3nq2ELMviPzrARyRKZWmGggjG2g3PY5LmUXh5TkFFErF5F1tfqpC3j95sFQPJF4jJj6h3vxoGydBoQh8zVa6tnVT",
  "key22": "3Kdmtd1KBFW2ZT4DrRPqr4qhUU8ceCZGXRwnQ5QgjxQFFGuqfqa7E7vshnj5FMPDiegEBcoN69Mnw8sxLbVrajTz",
  "key23": "66n2nLw6TWPwU1wgcNJqBZ4gUcENggRP4sN92MKbjF4jRXoiyZVqsZAcSXtyioT7KrfVHhLGhaRLf5wRt8mzr7k9",
  "key24": "45WmXo9BSA8dEhkbxSKsm3Trydzov5RnqH4VgaiLBX3Yvd8syCg3GamQa3LqtCQzKt1Y87vDukouLZZ7sieKmp1b",
  "key25": "4PCW6fDKsVQjcvaq4gKgncA1fsxmKVqg1QTQVBexNDRf2Us1A7K6vEAbkrJ4PSxr91m13vMTYeTbxk5XV5mnzEeh",
  "key26": "5MQ8LHM94Pxb4a6GyQTGHZnZMpjwwjcQiJQWowjKRhVMJzN9BRD9nUX5Yz9jTNTVbKvHyYyN3ZpXc6HiyPwAD3R5",
  "key27": "26LRzZNgyxN17Nbn1rRtxADP2HAuccRHE4EU1QHQesQFc5A9ScBzykVoqEQCoSBbwuqdFKqSdheb3t2CcgrQjpxp",
  "key28": "3huJfhBKgwb5gWmRfKsJyb34c6eEfoiyRA4Qmdfo7Gv4cWsLsgcGoTVYeH9E2mkFCiKngCcyETNA4j2GvRxtJJKx",
  "key29": "2Mum4b5jPRNJStkHTQQ5t1BXrabudLEB4k6FoQQGneuszTmvALApgm3HoM51m5yhRAjmUtybj1wxL2zpFtw5oLwY",
  "key30": "66wqcr4aNe9svMNX8dghz82mF5ejEnNCiUqVi9dZPGKJ5d5sgFZk2VhCb8pZJG4KNpk3PzwUyenVMX6LVnqXgWgm",
  "key31": "FwbHhdeVYU6KniZmUq3UhhtohHC9p5mGd6eqqDrsGtwoRgcDPzZUXWKWGg4sgCgu1pYRSqYVr3LywV5JCRhEbLM",
  "key32": "5EuJ8orLx9ELFcnSwoctfR78h4BADNmymoYzekMmyrxiZL6ZGtnNhtyVVKhiwqdsPzxb8SAqsEghxCxbjc4EVHW2",
  "key33": "2osLBiDXbFt6kZR5Poj1JTWGfxGbjTTBvGQfm5t7j2r3AZdYxVaZj4GWMvpTdoN3sP9NemK2uvJRmZMQCDuPicCR",
  "key34": "67eHcQw6erizWjPtz6uhbRYHwzRgLwLRA6erRRUq3iUHWiAJoTC7rXEnosrvzbxpAFRoTPkVhQMTkEE2t1Kss1Ld",
  "key35": "5WDAQbcEJxCfFArxn2nPBqwXfNiRyqQ4iyYYbTFiU2Nvr8NvbFfWiGMXfFHxo9QEaFSj61YcLzc3QQofV5Pu7r9t",
  "key36": "3YycWPv3LfmRXMBuYZJecQNtTSrXUTTG54dvcSYiyXHv9EbfPSz3zCUmkjgrricDFChAnStSKPiZu3RLB5UZ3Q1S",
  "key37": "5hx92MTRwC6NC5hNiEGTyrNGuszexaXA65oB5bjFRDJJZRzDs13RYDY4w2arT2x1SpNapSrygXFHr7r3orFuvCyC",
  "key38": "SwwxLhdhomjTXfXwJTuUzRwyiUxsHdC1v1kYjsLwXFTSFNWb3doUmKEHuwM99DhaUxyUcpAdoc144pNzyQLCmZK",
  "key39": "LEY4dw3iUZ7AoEm9MZHQQ5kojFthrEqTqY4Ei4NJBwxFJjEsg6GeJris8gsY3yW4Dgt6hjB8VBUzbSsuY8NnyHM",
  "key40": "ihFGBaAPyFmtcneJv7jtQsRhYYiE9sVpmRviAU4oyaiWfU8Tq2a4j8DxCyWHZ6fLjiwP7Ug1aHbfiKZLJudtb25",
  "key41": "3ovV7jgr6PuuR6wCN8XG4vbAaQudSju1Vsbn9YrVcvJnWa2bAavp5zDDpxQnmBwHJUCHpNgxUYTPK6VYVAX3Zsjw",
  "key42": "2NdpXMvyM4LpKVofiGfR1BSg3WqfqMMjnHXNsHY8bMraYmypbxdbytEpCbv7A7z3heQwYncvJ29Fi3psoezxvnG8",
  "key43": "4GcYSs6A9fLTQBtrPTm3qnXPwa3riSjvJxji5tuLCtmzcKBtJEBSCS14e3cpeCXthNXhRyN1FP8EZXpsYGMD6B7z"
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
