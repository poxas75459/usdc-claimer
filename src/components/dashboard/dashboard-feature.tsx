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
    "5JvYFzwxc49c1k3jRv6M6T3q8YvVWecMwuTU2mCdottoQg2qviVVNajoscuWGgKfEVQL3xd8N1okySnzdiyKqFip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oj5FShiADLBBMwopui94JKGorzvHTQyWjEbqHbeWe7JrMyme1bR9peUNTL5nLWBRxf6CnYzBdosHQQZhEsdkK76",
  "key1": "2qbAFr2gPbWZhqpWXhKsej6b5UzLjRFKMzvTUwcmH7kLqtpu7N7voLh1rXYjJBCDBqKRLkiVw7MbU4QvaaTzbjhL",
  "key2": "236xZQukFLAUrcCG9MzYt3sohkGCFLbwTX4kiK6KPNVVvzujYer1o8mR7WTLbr81j7A8dcT9kXjC7kW7oawGQpAw",
  "key3": "tSvuMRiHm11YqpCcAgAp47FAiNSauoYbh2L9ApXongCfRHMXB3E3Uc5EneDiVKsPWtE867NMEFu4EgWhmFYgA76",
  "key4": "2YhtLVmafAXxBRaTLTnhAwipRDSuAcCWeYneqxXaAUCPXrXaZ6W2HsjQPTtKFHUciCzFQCBp63ckTA5R1u8HKoZi",
  "key5": "2RxhtrESDrEstzHhnosyCn9fPWoUjTSrhdDKaXQJSKnG3wMq2JjznFetmkF7C2RqyhcGExq8FD5BRvwnAFSyMJEo",
  "key6": "4s2DedHNtfeiD89JpenEn6Y1E6kiufZEPNB5EqwBh4oXH6i2wsnzaTHMVg7KLrajdAqGH9eu8QavXoMNws5SRd9h",
  "key7": "2HFtzSTgsxWqW8WTWifbK8JH7BtjmoMykhBbfqqg8eLNhfLNXU9NWebdLMifJe2okBn3BjN2VRC7Pk719zFZzUvv",
  "key8": "59SBD9Vshoa8TXQsHtY2sQcN5fkuLnE7ARa2EckYaQ7E5osJzRpypeZDYtWQjGhhSwDCz7S5t2XmvHSbwymB2izN",
  "key9": "4Ktw7pEBsRCDt9Cb5GK13cyxpshz5ZtDkNdW9F1NCVtVNqGR7tRXxNWPj2nyNzwCLMWsWWELpShDeK5QsYbDQuhQ",
  "key10": "3ySBnwWVsFAzMbW1ryaeM6j5UovDNGKuLnF19xib83dGdJU4VyWbn5PTYF7vqYn8AU7HnTnJpBEn3iaapnK9S7cM",
  "key11": "2PfbKWaMKjhyR2gmcg1tjdLmca8Sj2JX46ajsdgfsZQbSK1Uy77MiEfq4vF9wmXSSZy5MaA5A9bWgqPBBw1B8Rq2",
  "key12": "XgG9HnpSvodrZH9jRwqhsJeMiDKbRWBFs9m5MGdAY3AaHvFgUHw8rYszk3jYDj9ZxZBJaAPJpeBPRvR7kpTFSGn",
  "key13": "3T6pXo4fUYLem5kySnhWo1uPxXHu7hPBwF9rai1yPGG351B2cPrZUZRRnAdgFx1L8k8vSbiM3nZHWLr3GfZGsyQW",
  "key14": "4Yn1NTcHJ5XeqNA2wDnynoreo3aKQZ9VZKjhkcr673xeUvUB2TErwW8fHAQu9oZkPs8UYQzyvZUJFyAuM4ZotZA4",
  "key15": "4Z3hJEuCidRnCMXvuaHx7J8FfgTvRgQssCPufc4wYn3Q1pK25CJ2D6RoCBJqVaLUAKRJPM2Aui7dgZpHbuciqwmG",
  "key16": "wY8XMkut7FVzFJhzxqoMeLwGm7NwV7sb1CnfkiHAXcFx8MYAkdUj1futA89r1Qyj3ScxfUMMCJZ3NExFMkn7rFu",
  "key17": "5L9n2AyeBsrxBbKdfBsXo4yfdXTBRmkcNMhzhHcPU4WtjjnrxBvKW9DCMst4AAUcLjfRbGSbyMNGo91HUgUnQkTG",
  "key18": "hsCGE7vndXoA7wWUERaWWuLz1jvtssDq1mTXe5hc15BtdSNNBHJ9fqMcpvmu5qUi2cd1r63vdx7JcMEfC97o7xf",
  "key19": "6mKqPBXs8F33nVSgCnNAAS1iDUfUTC1bNjjPG8bzCTWykLNKZRsfGroXJQFrdSdqsKbJZHkiXGQdyn6PFF5hXKJ",
  "key20": "4htYV6GuUAJJ4BWtZY8fuaMG3T9b3tvx82n4ML8ahhWGshuHgKzuugfMcMHwL4ZUQQzAs8GBdPVSyyW4zU6822sM",
  "key21": "41zXyG15VaGdTriqSFjEdnLTUAqNJrDiDxByyNKnPxnQPK4y8GA2fNNeRXVTr4acZfbdyZ7PoEiCQ3dvmrN746T5",
  "key22": "3C7DNBZcgwHjpUsKKjE4VRsRPGomAQ8NJhtFVK6hwenYrt5p8mzNRvMRYP4q6m9Rz6u9FqJytvWpNekQBiz36uyS",
  "key23": "Uekigo9BeMCXHhAYAi56Z8scZnUT9KGAGZWFLAzhizE92DzMvX5fV8CxRfCAvgMLE2RDJK9qmVHVJGgDuQMG28Y",
  "key24": "nH8pDGo9JFkpnVDfMAF7FzTMqgpJ8fNb1M91ZwNh2ocB1UiLMmHdAYRst2RrjMaiaJftWtNz2uU6ouDetyztX3K",
  "key25": "2dawegd2Gg1vGHRWkbjrB45nGHeoJXTTe1RwJj8gmoTgbxgjPYNjDFzd3y5H8EcVfccfFr3R87SBMbvBs9zrgcJm",
  "key26": "2UC2WABpPyr5BY6YtH62CFKwWGV7jkqHjhhWVapRXDxPskxLEjWZKxLTLf3jM7E9aj9k67JoPN3Y7udqHcCYK7Lo",
  "key27": "41drsck26qEXHNLV4qULADJe8E1Psmy3dRmPj61WnWm5dYy7KNBgqWWE1DaDD2Ac7Cd2LKnkrwHDCB2EfsijKJfv",
  "key28": "5ssud2exRSmU74vgtziogytnTEYxbbzCo6oFGEs1ycWiAaM9qFy35xwDhLNJYvidsG5PfAi8J2z8XATV1aWW9ou6",
  "key29": "5GHD6Adtu9zHqhUTfDsbec5TosffrZVkFufkby2Et4UiJLzVDvcAYqy1gbQ1a1mTgMzbbRscUzTQkAJCtP7g7GoC",
  "key30": "LZKt4GbtikvmQJgc94hnaGRekJPPeft8BBZycTcASpp1ReggeSAT6hHZA9MpxBgoiKkwKLS5NSSitvoihNsvcAv",
  "key31": "2tLqDAgcGAs4TaZpqEfEVLfMzrr1aFKbFrsG2jCj8TxL9CAnQzG2hjiumYQ3yLr8ojjJz8z6QF8f2uqpWKCjaGT1",
  "key32": "5kPEdRdK4EqDMEFAhrLx4HzedtT4NLgwSao75cVyAgp2ufbsFZJ4rS8PiNwZvjHadq1BGcsLqvsdTZif4pm7AfTi",
  "key33": "4uDSS7vigVnDoiLMUufjdyZbFeApMQ1X95tRyk9crpNeAKmsACvGT1zyTML4n9zr7byAKcnjFRMrQfascxoVLPUf",
  "key34": "5vmcQgzpthiXfmdm6atHvv8tDTaire25zeMDoTxjsWbxJAyU5HAeGi6tjuXv3DwX3DfbvRGRPjMAmjUE8PtHz1kh",
  "key35": "3mANPLDe87YEwdh3hpjxGWyhLANhMaphh7f8ams9iJfpd6AutKJ6nRhnouTRqwtUpeY2oKnFFn67ME8wD5Gid8Hg",
  "key36": "5ejwwvoqZtvzWLzGccjsfhbMHEhoZ51ou9zkh1HnEcBzeuFLr61N4dcio7ttYNLyfNRo2wFQFV1KhFbNfKacdXQx",
  "key37": "37wN1QWRgYo2XFstsN1NjWr9i2CsG34CTfkWNMtimJqPKRY15Gfjes7Ui2xrc8QNP5CqvGSXRGiJ7oWfQxbrp526",
  "key38": "4dHfifKS2nVZQCCjFeKcCAbCuLwvVYHg4sgh8LPjffVNyL1HfPdDHkzamK2MAe2NHmBAf56u55ou7ZLaHoWfb5Rn"
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
