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
    "2tQKEXziNTRAyKrgTx8maw6zVqUSrtwkFsaGAkgXwRM997dEmuCJsAGn6YTsSExk6og97NRmF6pD8jywzZ8X3fsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WHSmkTmgxBJfjNaQMAUMBUKgCCTbFE3vWnFNkPL2HHKAvjXg9nZB1QRRXBsGBScUGMUVUrPavUn1roHaqaBMes",
  "key1": "GsrGcSvFmdPfXXjhnBjAfzkvaRJDzAoQunQFNN9yvTWtpMVZ5itgv9hQsLv5i9SPrf4kWXSFoxoVTRb2nrc5ENe",
  "key2": "53NhLtsSVUCf3KMbTRxRXLqvGp2x8h3Y62FtWMf3vxWiCdb7aarWtREws1ugSoE9dYhZYoCeHrZxakATik8LHjvA",
  "key3": "5m6bpJhkeutZWMenSS3m3qcvqq5GoPTMZcUnHCqG7HcZrWhRoLgKoqJrjiLsZG8GKcW15WrWvn3L6qKTTtQXps3n",
  "key4": "2s3eXaxrbgVgxFxUUZJy5jg3J52vVkb6gboc8rGBbecWDsTh999k6k3hCpYDUH9xiGW8SMvkkUL976K4K2q2JKbR",
  "key5": "2PcKBMA1tRW6VpNoC4YazCpgsQ8T9B1Es4xerzK6H7iWpqq1erNwGvUkRM5iHQhMprJawGUoij4axDA8RP5QZv5N",
  "key6": "49yLTTkrcLzcS3987bwNgvw78r4mMrxb4ShNkDSNKmCACQuctmK2nY2zuo6TJ4CCZvJwrAbompmm6hVjBA8BLkc2",
  "key7": "cZ8xejva6W8fSXVN7C6R5yciX8Y95SKi2wjMqr7yATvZT4uo3wDBXKZgKW1Qyor5S467KdFUfqgnTb5eaaGWVT9",
  "key8": "25ew4YE8VhmF3SKXcMXCBYqo1dYz5Dudb4skfBfNbQcoWCiakEFbCy8nxrUKEiAqn3LzVXmYfm5j2LVLm24gfrL3",
  "key9": "5iJM4GDRvXQ9Bu3Zaqactp7CyDcTxkdHyWQ5MpYhLJMdJxsCzgu8FG8wniCawXcjvmwSuSuxvbrpoiDiKd2kG4Mc",
  "key10": "66uA7qpSCa5hoGu8dg11RhV7e6ECTcJrjnsS3FKQBCs4zxnDVFVU7s6cQYqDP4SYQhM59EWbezrEYscobCVmmu6m",
  "key11": "5YKHumMGcgiPZq87bspK4gXX4cnXpBuBVZgXD7EFfr57PRuwtEvVGyxb9MW4Ch4S7pzqA72ekrFZWpKeHqsaxWpG",
  "key12": "63uNGWGKGpwNcqCFHfV4hsrpeoQkEukmtbMMCD7SGmBgPTR7ggCZMHXbMLvNw54MG6FjKuLQ5KQRiL38hEVV3V3x",
  "key13": "52RixW4ZhKnT83Fm9Tph4CWuTqJta3J8BfL9HdGQ8FZJEgErtoDiXBXBLuwEB5QvgE1bbiZe4Swn6cbYuuFZSbGg",
  "key14": "5q5xsG8MiDfCTkV3UHFmMobvuXhDJzL3Rma31TCCt4hSCcGk7wiin2M2GNjx5PYFpBX3TSENmHLmFWxBa1azHvat",
  "key15": "4AnfQuTvZLTEm1wvbrhD8DYe4vSqWcZfcoavgJktoFe4VuuLcAZ4xJo6hCvh2RPDJaDSYv35LT5DHi8xdCEms3KZ",
  "key16": "4JVNrY3MTf63z1pYU4MKuhAGi3S3rK7pFHHpZuo7oawztzWyftfDu9obS3AqN6x1ZWKuzFfjxZyTyiNXw7bKxSnp",
  "key17": "3WgbsLeedTYBe8WCnTCUvH9suPUXEATGgtfqieDaWZWfoGbxwmsXsiL62w2Q7L18gCo68uA97HXrLzn9jn7Td2nB",
  "key18": "3K9sYHAwQhGLxCmqHqxMt45roUAgddqNHgCwcn1Hmc8WBh7aw9LSDH8axbS8abBykCFiYQDL7FQRhFtZVsXiJkqg",
  "key19": "5oQYBTz2Gvt931FKR14tSpjYvVYqNmPAYTq5rWjgLrco6RVuuXwr4Nb1oFgSsmvE9zXsd4LJLWfgxGNgtxut6S7P",
  "key20": "52o3EjJwLGNkcbLPyj2Xmgu9Pd6i4LmBwJ9ZbbbLSqKwWmAWxXyi3xQ2P916dyyFNGXzzT64kpASPKFGFbWXJPaJ",
  "key21": "3HXc9WkiPkoKZLKW8QS7QCpUDPtuPDeHx7gG2QHWchWwvF9WAXgRr6Pic72y9wx4gDk6eWTpTrMZQEfpkzqnQPq9",
  "key22": "Mou74omohtDdLYGcHwafv9SXfBC3STUWbjX9bDCWRaUGXKwrG3o8okQzSbxigqHFQXMFK6yG76ymC5o3px2aNdS",
  "key23": "4AUoJL2R1TXoQ7VW1yYbX5x1jeK8NnzwwaQZX4f7bYAA42UuvEkjXNqN6UraSAWMCmvHGzNn522x61xaikBUsFHd",
  "key24": "3XYE7ERLGFSmJBFa3XGvTRo7dLhG9H2GYQhLwBBiX3n1HYbjmuhe24hE6Gd9XB6BL7FRz8SWyNSx8L4USrTxdCnG",
  "key25": "syT89a57bg98SECNEiLq1c4sStuoPWYFRuKrqXcvJZzxZCJinRrJChWxBrMr9cv8yCKLJu7oW9A2FxDebZSXenE",
  "key26": "5x2gAzjctg8dneUPvMW29yEfgLqYAJbFYj4MQgv3jTA59N5p7MXHMpNxzJHmNCGEwUTeP2xwVLKrPZ2ozC5Kg3wi",
  "key27": "3vffZ3MjP1zsWrfSnCBkNFcGK36hwa3pGYcswubcFPU6X5bTm5LKVATvrY3iQhp6aoAxfXb4xieWQ5KsgwqCd7wz",
  "key28": "2Nvk7jTqixEXvEobw3MunVYuJBcywMs8fGZBf6xQ59JvhJcdSqVGn7ySjwsJTYS8ZSrmQ7avGJACWgsBTf3535RE",
  "key29": "2mNq4RNePf9qsfd4tJ54HH1GdWdkJsqeGZWdpSiUpGhJqB2woB12RuaJAjaeKLStmmfACeCdU1dCJGqwGLt3Yc2H",
  "key30": "h85Wd7HJqGoYjuyCQrCLdXiRsFgrotsY1vj7P2DkW4sTYNkYsZYVyamEWzfRpAEN8jBLmSSGeZJzmBrufCrYTFT",
  "key31": "uzpV2gYMUmPry163cD5nFiN8CeeAzjgde5trw86EWeziYA57wunjJfQHGuEy8F68CzkXpVSrnBp6rduee9qDNhi"
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
