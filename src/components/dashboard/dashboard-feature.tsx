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
    "2sLfQDQa5gpXzUcBRYeTj976BTZqEG1quaj1ycHcNFMX4uiiJC4ZXSCDFHmkbqyb63FEWNWQGg57LNNkp9YH3H97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WjzHZtNiq5wvCnhJmBzstmBMu7sjGvqLtZ4XtMP4MZGFWuM8XGQRvKXJM4LdnPyz8tgjwvaEFMkKEsZrq7K1BMf",
  "key1": "MaBPXUH4ZBhvkjZdNABojS4sxWqRs5fq4Tn3JW9ddaWvs3i7AiuQe15iAVXR495A8mUq8KQMcNXUubdqj17CVm8",
  "key2": "5bdfqicQBbbEg6QoLuDCHxt88qJ797qceaXeZSVwse1AkaowWhjobhmYyYAqAXh3qEPB7NtUeHnXJ5VGbr7GxnxL",
  "key3": "43xG5dNYT1BWaj61XFi4it6nPQAkdWDyQYfiCZfFaa3E2cHbsqmWnr5sqEaJkqL4Zfz1a5fAmA4qauN3tSCDaTKS",
  "key4": "4R7TuufGJkG6xSU7xKiNDARkUSjtodJWBWUfzc6EGF8rj4J1S1YtkRRbSSg5wAThbf1czU9ZJ8c3Tb2wXAryj7y4",
  "key5": "3nNanc7QExSNbCougsihhhRMfBgze16oh32wmEHiSbgKt2XNQPCW71xb4WaUfaJc7BNubFAjPEDgiavWnmv2NMqH",
  "key6": "5dsZ63e54AXoJrGXK1a9stTC4f8NNMsTq3wZ8jY3RRz84EdNwUS56uG3cgEesd2FHHEQAkj47jxRm7HeM9zWdQJX",
  "key7": "zTz87rQt7WtreuwSXv63r5CGQxWxV5jPhTMtDcgNwRiNpgwkqFmhNV14si3hkui36Dq5F2KJ3tNftFYHfj6VaPK",
  "key8": "AdvYh8mryEfo7B8fxEGW8bDiAXSFDp6PbHFFzqdxLBm54xZWYw514RFZuYUV74NVZXbqdM1HwUBwXZfot8SRe23",
  "key9": "3k6zU6JXgyuPCZxKeiV1QJDZqVhQU36LVWm4CwSXqsNfYSkeshpzL6NdZxCKyAhh4MRxwVbrk5jDbMoNSRRciX9Z",
  "key10": "Gc3jngcgg6paFQGvaEczCLWS4JBQeVMgTahxb1YSM8asMqvAzbCyeQJJXu4cPjSoqB3wda2Mre7V8t8EBtjBJfZ",
  "key11": "3DuEsTyucdxLD9nKzLFyX3ekbPwMFemJGvwwGfmYQPyvM9QP85xuMhRFUVHECYvjkEqnbM6h31Xb2m4D8j9Cs9nr",
  "key12": "2nokzV7g2yo8XSqkSP84sKpPfh5FV5RzMmuQMd2hYWGPUjYyBhRsd3JP9YB7Sku1LY76QNF3rqxwJUDXvgbt7mAN",
  "key13": "46Z44mwFUasSaMWuGSvWpkboo5iEvuQQF6HFyEXMnv58WbQkFcenn6zM4BQLTAF5BJgQw9xhFf9QuQi9StHP5uKV",
  "key14": "S6xsqNDu87CBW9kgBGTMNdj64Dq55JxNj8MzDRY7wbBCaQsSDWjHMk3VKzcYHtcx3U6oX2NtZwEGnYk3fxw84MY",
  "key15": "45PHXxaX4Dw1h9Lzdadoi6BiavaSsHPfpCLxhwW9L7AgwUugBpoM6QGPC2mB1Rvfr8xCMAcLUMsRJwMBB2WebhUL",
  "key16": "3F6X73cq3kQTgzEVX9QQwtWccs6iLS69D4Cf7pEUAHNTB23imbaBdaR5yrukWy5HYFPocvaRnv6wTkPtwv5bTeeq",
  "key17": "3cSruJcrmvAzkcoiWYAMkqNLEVgj2f2Pi1mK7YG38Rdey6LedSp2eMwUUCH12V67toSi3aRNRNNUHGYTYcBEzkHK",
  "key18": "3q12bwVnajEA6u9yjJpTd7vso4EonFerUC2PpnAWe76FJrt1Cci856DowsQvDHY1zJHpjrbo2UT3AXGNkNb2UUEi",
  "key19": "5sHkf5ReojP9wpkkuxMubkTfJPvEkSAdWS1VBVN4uxaSe3gLyoSKztY69fsTSWwxbBRjYY7iuvpPqVyi6kzd1JkY",
  "key20": "3H87doqeWYzNihHdVGnZYKsDyAvs4ufc1uNaYgHtZfWkxoenVkR7ozU7vZafCqvHnVy3xupuY1Szf6XuCgp3Y44q",
  "key21": "34RyG1SyPQdcAMr83KzjbiLu89LBEVBmMpftYcEWE3bshTRLVVgM36cyAJrpsHX2FwYscw2cyEhzGERz5e4TENkx",
  "key22": "4GYrhh7oVef3fuXN3MmXDHGoXf4BPqy431j68jnNnw3DG5vmGHDZhASJTFKfsYRfMmGQoH4fK1uaajwg3tz9AJxH",
  "key23": "2XPpMBJMNKJG38BUPNxLhgpDX6tLCWz9tbYsB6yQhCqfQcbHp9akKsQWkPQzvPHA5rHzhka2jbvfAPfyf2rfRTJz",
  "key24": "5Zr3ATwH6U8jwYzDhqLLm9pJXbD3DAaqrvq6rBWQrjZK22xJYwgW9dvFLPrLBWHBMCMzniXXoDn46P5ox2bBChMo",
  "key25": "49d2XLx88RL1XbrsuDx9cpXDBbZFtNFqh3PUZdF846mJzeCG6KHhg6L4BPKZFDTyiFa91KQ57edKKdPBaA7xKuN8",
  "key26": "4Kiij1axMSfimSmQhDuffqXTjEPBvQBAnMXPt7iPEBdtzMFETnK41dPL51dZsGu3XAcTNjugg3v8jii1HfyWkcDM",
  "key27": "4KUEBe9YN9u4GwCW5x3eazMQvv2nnCqKH4dkurczAAvxL2vG5iF3rEn8g8rHhsP8yNEcsY725FSNCHd7ksNbUhEh",
  "key28": "2NYCt9sFedLwm3ANJe3shYXkUwg28Y7YNxQUUzoEozgKvJvWALyGv2u8mxafE9Pc3aNoEaFrEHr4DaHhKBtdzapG",
  "key29": "3PbAPjkwLK9Arvqeoe1nvc9SSTpogAsmeLCHx258LkuV5uyqNxEqb3pQjUUtU9Zb8qM7wcxJZXyCdSkJNoVqEbZT",
  "key30": "2yBAdwE41Rp7enzT16Duwmyuyn1sK6otgjxCYuXE9hPTwezPpHajiMtEoTqEw4wpc7U81YPGkpzhj48T6pwh3wgW",
  "key31": "4mY6cQCfK1hoJQcdKnT2D5f8UDGemsRrFwVbRW96J7cpcFMUkuY8e3aqZuUXBxr42bPcdY5628ZhWVcz6bCYxF5G",
  "key32": "41ahPQcoEihGh9k8zJmtcY5gz49S69nWv1ugKdnhqDqQtBNxVifAzk971dRZb6zte6mT9c7EPrvSNTiayE1cUcDc",
  "key33": "28JEcxiEy1xbSpAfAGMs5w1EeZG86L6WT4dkreHTCMcXaTmY4RUTWzg2u5Y42i5gNQ5W1GNVi2MYfQU2sktzEsxS",
  "key34": "2J26VLHkoRFZixtpwQCELzbsctVjFyAkAiES4Tq7XgTWdUoyk6D4xneMH8yNMyUP2Uj3xrWCAoqjtyia8YyGRJv7",
  "key35": "Zw1UQJ8Vs2MDoEmDEg7X2HS4HYHkut33mqWxCi9bfbBjuer579fgQkFVv6oBErhZGQMUcxzcBB1eXtKQqReAMd4",
  "key36": "5mRhNoCTmanSqGQK6Q57ttHNUKGavXDSV7ip9e41f83kUday9JRfXRUXSfWGYzSPmW6BHtPUai3HcWAQCwPnLPsK",
  "key37": "3Pkx9ecCh9HT5w5MjN2o9b9YeirVKLN7v3HYecbqvXHeZ9wCqxNbsXhow7Zs1pme7ekUc6yv2uXHKBYLLETCgLBe",
  "key38": "3DSXywkPSd5P4xTe44M8anwteHuHafVNRXiquRearTLDAqAGy3S6ovi2hnVV3FnXsq1mL8DvYYmXJBfGtMJovbNE",
  "key39": "4HEng4koaHesq3WjDAF7zcn8Pd6EXwPJ8hGj4ps1HonHLGGuNaTS6Wpj53fVdPZJbpZbM3y2pTuLVb1chfnGe6y6"
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
