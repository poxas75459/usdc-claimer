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
    "4Mm1EKv5Sh9NuK99mbpHoUKxawkS1oHEG6sJFrdPvvpE28vBPZfnGvEodHsF9ANP6J1J8KJdiMq5TPuRmdrLuEbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ETkZfF8yEcXBXPFmLcBMNeSyL4UPmpiUBai5WpmS3vtevoPG1M4tGFBP5nLWVCHRpVnX3HdkaJpLdHkCwT1Szq7",
  "key1": "44gKVZ6i9vEapDdCXkFaqoQcQ3LtcdcrEnbut7a6LwpRuFsWXDhWUsrhtkEk7NQ61KrgQjoM2gRAokx8LgH4K25x",
  "key2": "2VDYJMPc6uE1ABfhHMB6fpQjkSEf3isN28BtpWNce6P1yAHmUyrqvg8qoJYoxFFZreUFCKwjARUXt73rhzRi5iYe",
  "key3": "5w6n9P8JuWu4SAxRMEYuCHCBJEWeHafuJBb7zKQypDTxNGAcVQ5pHJuimGBLmT9ot8DQpWYNKNEjBXmmJewXQSMF",
  "key4": "T2N3nWfEm8m1mrXGeLqAb8UfdNbccL9K7JfMkmXG3oXVZSUu2FWuQC4dfrGWMijzdZQEDpkaB9mrZRu7fR8fkUC",
  "key5": "4WqY9fWGcD5Jwy77GpqmWJcoVH4WLiwKFBR5nqMk5m6Fgv37FN62i6bLUhDBgVw4s8GA5pHHiVnHhEAgVyRD82KT",
  "key6": "99zpvS8WEqRqbgBRRVWtSSzHjyi5xtNptEhMrK6FXvhWQ6qKx1NpGzd6Y45y61caGWK7Rb1Xywpg6Q47buKcECU",
  "key7": "3DyqWqEEc3sth7rtLvTDS7qbHUi2jXEG3bAqXp8EM4m7NPec1t6jMCh8RY5xqEmMrvZmV4WQ5AoJKwTuXHTrimXj",
  "key8": "3xPwcwQ3xmqBTmPVjviUQHWhcSw7e3yHUKeKPfJUQk1K9iha6ahqvpHzc2fREhhRHtZdEwYDGKJfwwJsnAqYcr7F",
  "key9": "4T2VyiJdhwTwe7x63ashMRytMUDUxWGQvsAGPGfhyBNMAr4PvvCaMPgiTu1ZrRVhbNNqbqtfGo6HfTpyjHbQTZWd",
  "key10": "3nxEwYzocPJbLnHMZAY2Qhs9349FjcTjGznd6DnyYdpvBimQw2QURFL6gyGqGvUVBpDgDpkk6qNs1MKHgq9Lr6bU",
  "key11": "oM95tVsCZ4yfb9heVR4T8Q5Q99oHMYcEGo6SVbnx1i1jGQCQ5EsvfFp1ZgTd3JmJdAyWRrgmXGscpAuTLY5ZzCT",
  "key12": "4TTjRtuymx4uifRyvdynUpmHoD9HVTHrgjADdoKwCZmmPELQX4HXEa3ipMdMmYWwyXMGkAX1zjUSi56GRqAiRsKr",
  "key13": "4WG935AkQRmwj3Xrz3YkBLwuADrkEA4FEdozG3XjoJknbXTjpYnvYiEdpDkaqq6q6BrGVQ2HGgHtmxoK8p1E7RRp",
  "key14": "2HoZjA2dFmdpBcsVpj79Ui5PKaTBuAxf7Hep729vvFEDXMCsewgYaLKVrsWwaJ8GxB9mWfMuGKUW1BKaeA1Qh5qk",
  "key15": "2DHYmXMiZpC9ezkeRX1UYWqp6YRt1Co6Chup5ELxXG74zu142XKthLGYgydyiyLotPiRfPfSxiVeao1VNLU6Yrym",
  "key16": "B8jYdGncc58LKrQfJD3WseNhYjdGbSWbT4PjAfBQ5hGRXqPxUh3Nhh1ko6xZeTU38FT2SZmXJ1raZ9FPvFpmJub",
  "key17": "52cJjiFUbZByVYXbLZ8aVsveRrjLrQMwCAfySNhgX4UEno79B8VZsBAfQi9RMCTtojdmjztdpRAkPcWsCNwreGxi",
  "key18": "25BpVVNivqErWRa9h1QUKVNFgC43V7e6hiXkqBLay7KTmSqTjR21tfTmiRehjHm25ENJyDMchaKFCTYrtbSLjSDN",
  "key19": "3xxqTra5SCKUoQa2jjgS3c4U7C8UubAVRNU98evjbpfsG3E8fhukbJh3GoFVGckU5orArua4tXMtzPA3T9aDVxTD",
  "key20": "2dYQMuJ8TTFMzYofFEASC3wGJfqZNdQUMkCRzAopBCCTqDnETfUMnmB22j8J38G1WVKTJ6ygnrx5UzEoEJsWV94a",
  "key21": "3QLLprCvcKDmUMj1xNjr9ymkzmYVEf8Xs6NWEjUoMPHoABKuZAgBPVXf9hjDeiUMU4ci5gRpDje6apn42xoPNgay",
  "key22": "3tcjxA5xP7v1NknUGHxPdjdmxgQhvJVi6k342SUFv4F2igiGfdvV2vGV4M4EZNKH8pFUfBLJ1JWifXXeqGoPsdVN",
  "key23": "2TWJBUroKZk4hJTLxpUKtmABauRafzPf7PY9zze8Km5NhWsSanQVKdPpoHfzEBYG7J9QwQ2NZuLsLMhFwEKCvMCw",
  "key24": "sitepLqNBEhu6xN8ZBKHCUB33PY9Bnn9iq2RCwwchPbnYKiz9V6HFTHfkT1yGdLMSEnpX6sztSBnMv8WNrMiXmk",
  "key25": "4z3YGfQXnP2wqVyPgka9tXavoBrCWHBSpK9RTDJC9ePrEArw5PhMvsgsVisasCNJGZdbpwEV78qiF5kUHegMfbFw",
  "key26": "5u11kz1jvT6e2MzmLuDkfjCrnz5G2FKgkfwPJwTqMNwB8ix8qLNSvcqP4nx4u4bn7FBNdRCwNeh9Xj66b4PsGpqJ",
  "key27": "3xM3JDTP3kDs7dZN3wddCFKZhkDjzkqFSyVz86NZQXZgV76srYbjcbNFvCx6XWBjTkoMTdd1mRGzNbwnVDrrWNSv",
  "key28": "2ikY5uxSRb8xacsXwJesgEHwaK4z8UdquzZhbNzuUVLXT7vzs6VYstycakt57kxLgiD7Wr3YF3dCH81Haigo24LL",
  "key29": "5rDsLorJ3RyemckdtnvwewaZApi7rLKAPsdimA7DZp9su4mCfiSksSGuB5TkujBt6TvvvgsevMmRSizGWT7VBzdX",
  "key30": "4HtrhiowcEdeonGQ1RpyDz9L2uPPNSKEoneNg5tu4BpVxrdXdyLVXFENYP4iz6r8LsF36LS8zuZYdPi9wf59o4sE",
  "key31": "7XcX1a4X1bWUJ23DL7oR2AqzDJ5gY8xUfyS1xxCjFYM55drBD29qrk12vNgwBonP7oGGqGdkJu7VhSqKqwzk5BM",
  "key32": "3gEr9FSAyGQpumgDw3y5SYV3zR9vmC7WgBk474xdpdShHKDuLxiJkwFZtH9pxBAboqiLVwx1MJXxG3qUrP2vb143",
  "key33": "4Cdz1VBTNp9QhHwTQEoCewoyT3NzmqY8jppPG1uNjabRPHuK9m1HVk85Mq5rr7eKXBGRBEnQMsuv2z5y9mjAk2xF",
  "key34": "3QPa2yaJGEGPke5GCFfik8Vyw9o24sKxdNKk6ncHREeHhwRGzw9Q1Ni9QoiVsbMRqDRymPAWqWD9QfyqmEjiogJC",
  "key35": "3CwpveFbLFvyX3iJisi8HmNtRXdGwHE3xdJ9bYhYint4YyuzQAdx3wCAShPh1c2E8upEUL1J5f3zjD8ErqTcQxBT",
  "key36": "5knYEs5fUZCBfPqEmpdYf59AxFKpNRKkX6L6Y66PfC87e9MryWej2iPEANndd7okP9mAjkSMmAC6KxFoYRKRdGDe",
  "key37": "pNCLiaGJj9sLt4H4YAPC4ofd4ZMjy6biUPpLsEoEMetnTEUAcLkP49y6kj92wJLvph34Mh4cP6xTxJBUsNZqDbr",
  "key38": "4u2kEQitAPHt8bSMj4FHWdxaLWhddX48iwUSxnZruTtuvaXgAjqe3m44AwGZdMrovggckFmVPdJ3RQ7sreN3PbkG",
  "key39": "5omA8VMgzy967niVesXRDiFQBBuF8ctB9Ap97DCc284gnpNtt7QF4RL9U36JeCpQ1UGuSjRP2LgwydJEATKbEoUu",
  "key40": "2H1igW5sLciHXGXgNRvSWb4ACnQ7NJMFZtoSZHDoWn8VAzz8d1wqB9s4UvZ2Qf98EfcBUkJEpaLDTDgQhP8cUdkR",
  "key41": "5GyQYUfq7tr1RjPVownqqJfKeqoLo1LeSevAGU5uUbZ5ctAurwcjf5YXzLkLTwaQ6QTiDVGzR5psuTpFSMC93wcu",
  "key42": "JKhEC21S7mBUE8xbpsYNPbsxBoLvtDfDW1Aaz2WDKS5G7F3iQHL76eVXMTUJgffgWdDqQn4eVDnQHDgXG2V3zRv",
  "key43": "3LDJ3aJeLdmrSgvYMnqWDMM2CcxgCmEHKiFFQ1XPWJ7dm3VfHKXFTjcnMzDky4WFr8n1c8je4ZJTh1g5gBcKZo7S"
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
