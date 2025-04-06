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
    "3b21E87h81yeQ78oGqjHtvUbc8TXyNvnjgjv4HWF6F7AbmaCd7rUNEoi6WvhV5khkVQwFRT47V12BdqxyEkHb87U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m9qcaP4zByaMK8soa2JiStgdpNneRR1YZVb2kHKKSso9SYSafaEVYErDABLsSPtUiB3rUa2gq39zvZZmwkGfmxY",
  "key1": "sEQ4iHgvhdQPku7grXpbvk7UaSNxPzFbCURX1Lq2PDkVdxvoLHKTwPCy3QJ7Pt45hPAycgptQNpDU4t8augWZXs",
  "key2": "3151XxnPPR7X7towG3PQv4MDTnWipNWHjiQprhmq1NQ7QTTcVN3jcYHuen3ZcEKnc2mBHo3xm5Q6evV3ZMupACN8",
  "key3": "3pncNLYPVnMErCbxSPpDsAEU4iVnaBhQhLNrtP6NdQ5DHYwPN2d9wNb7ZqKbCWvwRcZRZFKjJUDquQQ9pm6Jffr2",
  "key4": "3oTTB2f84z6GBNo2yxNYqkAXpv8FnjvP717rR66Hr36KoSceSb8rHvHZqQMwrgKb7MDf9Dbv2YXn96RCzCmhffvp",
  "key5": "4SJi5Lw7LaE8EEwYewcCNqmdNmV4kZ86JYDG8SzA8fnnQgeT4s6a8jkm51MV8kKrH6iFFbagqSWQyKeVGKm95X1u",
  "key6": "pqhAPY3nRy36vvRWfijPvPMS1PdGq4UKmfAQCcDszFj3ntx2UcZ9Y5JoiS6Y8G2okR9SZHBRJjtgPP6J3nbuUh5",
  "key7": "5VrbeGr5FzAgxxKaX6GgKVhDURkUxhmsKrLKrokRc6TGd2T4ArZJguGy7SJ4Aodp48pT6x4Hgh5tHjBH7rKdHoHN",
  "key8": "3zqprbnxPccUF8b6GfSdvtjrJCL3Adxkz6DyM6vbCKH592a75VvLp65rmkk7fUBpQHw9ntTWGS3QFK4Vdn25eSjE",
  "key9": "2nsrZ3ZmByvvqHbH28ZxGVTduD5VcLYpsQcSSZ3smyaK8VjBQAsUFVoFWNZ61DJw1kHGwhUNzWtUZTWEokn9rcdz",
  "key10": "3EZeRgzTzg1n3Xuj9Az8Kr8EqxoFFefkHFpbctRcDXzAKc2urh9519uoWYem8nvw9T8PZ3rk9UFzFX3RxKwhFKhZ",
  "key11": "5M5EqqQKfYLiA6E6JvbkYUEsMNjEs3YroYe32gjNaSCWcTEwUAxC8XrxLEBwntbCNyHiCKgdUiFcVJAZm6VJkUbL",
  "key12": "2fmYHZduUkrdnLJ1xgZ3X6QdQraacDVmeGn94SHmZ7EFnYzSxvdULmUA5k95dqKSq1N7GDz6Js1sbk68XFZDxgGd",
  "key13": "k9ueTZsTtJsCcpG1WPkwKMvSN9Jf3a2wd3XutaGbxs6rr9rk9kNNie4KBiVQPK8gE41b4zoLyhxzQ3ceMtyAZSA",
  "key14": "4j5kRQYjoBPRmuCvHD9tb3aWwpk4h8hsLbXyxgQSDUrKF1g2pfWpQtZwQSxfeWAnKF2kVEWURM3e1ekgh9gL4oAw",
  "key15": "2gVDbJ4bvyM4qejR5XsMnjSpoW2fbBapdMWhBXoxQzu8qhmE27XnfgA3QAAxD4ZGzcz2CNsvX4Jpyy1QdvC1r16K",
  "key16": "2JyVPgZxPbSfakFgAgLm3CSALNd9GRh5F9XX7nyfvpAZr572hP6raCv33k7bJfPyQA7o561zUK7PRXo77tKquJM2",
  "key17": "2GRSeMv9JRGBUESpuaA5khKktghnQEu46tGRJw2yassNY5zRxCndLDwYj3VBvgmPy1W4wcXLLda4dcnJLxGj7v83",
  "key18": "WsXUCKoXQgUra3t13xo2CnayCmK5tukZwjkdf3aN3wQowve7NoMjqR5igdeYh1LycJWeF5d3DVVftBVWJNvXZGJ",
  "key19": "4ZVAMG2RNEtbknnvk35TtPpstz7D69QmDSF9iExXMLrmRob42HnLPPAmBoUdTWgUkUPUJSQSAxfTjNZFC92hQpcd",
  "key20": "58ZegwZjgWCnwrn1sKhja4KrSzGjZ2vnekf7bv45wroZN1k4vp9mxizDFK25CBpDmbtSZC6Wk68BP3R9URNq6Vm6",
  "key21": "61XNvJKomgyj4JqCN2g9XbKHWwC8kiNyTevegjLDaqawdsQxGmZF1pLFcQhWa3QnSU62PDEpJUAQ1m9cinSLmFp1",
  "key22": "2ZL8rGwxVHg5rFhusKAWJwJejq1VanRSUWqmxj6LaDcPzYZ9CV7ApRm6ECQGzH3cdLSdMAKL56uVbWz2ivXq38Ty",
  "key23": "4mNKfTrWaVu59B28pMo2TMRYrdJWreeHUqsZC3Sx4HXEzDC2TSAdJXsi7kcvRU176CzrZcZHDhxXnYvUh2goM41Z",
  "key24": "3eqTkz6joCZBSMZFeNJQbEPTf3T9fYVVRWPLRDnGhw1j6spsbgVqT1iqWTyCfC7Ztb6XPxSj5uZcFgFHbSxevwQX",
  "key25": "3M7vmXvbY57fHBD9D777tDp46yFMqHAehevvLtbsg2RXrV2id8Xk48JDQr36W9DbSbZfnCumV7VmviVUHG6XtyCu",
  "key26": "3XmhEyjvCgx85tdimUKHMZkMZRgiXkN3pDSAxgMTertbGVvwsx6Fc25qQ7kswonbfbqRBKi98zPwDTtSC7A94Anr",
  "key27": "664FTysE9fSUSRD9TC9CGShAxWzwH51r1dWJrDRP5FWEqvYmSf3UvAcNQ8Z4QUngBesBAp4rX9pMQkhzKD71oHXz",
  "key28": "3NRmgJxWNz1Z9nga9FCGHRkLFnLLNrk8Wbbx9LjukP6X8JGFY9J5yW66mMtLPw78jyrnxZKU1BLTHfEqGW3j4ceh",
  "key29": "2jCVQmmrQMwBHegouJvP3XBtWX2iHphKBRZD4XvY6qaZjA1fR7TfakZfJuaaW39FbKEo9cwDF1JbQssuX3WTFjpN",
  "key30": "2wuHe4dsnh583gRTw12wV7k2sXV5XXtR3h75TWqx4UWfRSzmF59r7wc55TFB6QKqXdMvsHfKrs13hfS4P6T8Myxs",
  "key31": "TRCPBo33WntaDqPiKEniDQqt3teVUF1qvruritNpqX2yvAnmFCtVkd9PWzqi8UsmkuQ6bo4emcFy689zwLyQHcP",
  "key32": "5D3a3oLRds3HMZ9dEpLQoi2VFjq5fRGR9hRNsAH2JutqvSYbvrDmqschjUk3yutX54u77XBxSY1uxXECDvHM8eyT",
  "key33": "5M5g5daiFKsmEXZJ99xqomJyp9hhCygGGNBsC72RX6F4AikhGP7ADYXzqN68FRSskDtGYJdKEPCpiKra1Fkn5iC5",
  "key34": "5RhxoS7ZPeycZrAeEKzRuYHYhfdG3UePfqmqdBZuiTYFnHA6wRJ3F7YfvzH6YXoUUiE2hp7N8cdmMXjUKDT7SGjf",
  "key35": "42sh1E1L3vN6nMFMgEAeTxzfHfSRBUQAK3HjjLbNbXtmJ9wwCq5VHiL7KygadXaXWpWWP8KpHrSpZ2rxStk4Si3R",
  "key36": "3HsNgbKQnbYkEtGQxkWv6WSx13vS9Jdrc8MySjyB7FHimiPEdj4bfwjAibGDkyPGybJS9MmgSTSri4CWr1g5LQ1U",
  "key37": "5pWTxZEmvu8FbshoB2ZcaAxbUTxp3G1XXZpejnkF7TxHLwzwzPmR49Viic2WqJu4FNTUbUJuAa1yVgYXzrntLGj3",
  "key38": "4BHXkDRbNED2a7J5EUxpmNAM6LK64E73RFBaRjNL1Tzyiikk98YZEfzJaCDnq6rv4Y6B71kLdnfMQuWp4U5M4J5r",
  "key39": "26BGVjGBRfBA53A2V6rGzb2CN8Lsar96evpQY92y2w2bRTw9UNpJzpSHcShzDHE8U9jfVB9Tw5Yy7gXDCkNv9KS1",
  "key40": "5XDSa1odv2ey6S15ALQR2W4gAmvcmdQzZL1urmtYUBaNsDnTyM27vobRSm96dyjqwWF7RTEx7dWAm72e2gsfDqnp"
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
