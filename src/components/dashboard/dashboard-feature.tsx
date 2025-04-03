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
    "4m7iDzHp523NkvdBYe74JFRModQhWxkQTNw17hrMg3FeTCqiQHjsysNCuAyKuwdEUcXhBWSxs2q8XdNsRZvfGGfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K13g5VYZ7eaAt5m3srtd9qGB4HGFXukG1JENcUqS8mGtJWHWhZi7CHf1c3PRdLEbjwb8ZmYWB1cHW2iAoMrgauJ",
  "key1": "Rvi3AzdGksr7qQew4YiGEwM73NnTrbn2DvZyqvbyXdsyWgZAmRnFsrn89UubCATQtfZR5zUoAUKqtPq9fTBjoei",
  "key2": "2KSyyAEUe1PgDCy1j4VUkyFdxrbPMkXhztmEZRqx5QybErkR3qpHsyJ7hr1DZCstYnEzLSKYMeqCDU657K9JEs6T",
  "key3": "5MjC8gv4vW5MEAkc5zZJFZVRTJRDu9YZZKzS9A7gtQs4d8aKgj3S5MBZpALcwzo1SAMvct7hzNTu6umQ36NarHnP",
  "key4": "4gN9rmmxsTzRTZKbpMe9jUi8CJBnsotWRu98VPLvE23Rdjsq9xWC6ST6R7W3xJkFoqoHZprN52QxRCt1RbFwXdqA",
  "key5": "41RULssEdAszpY5ToM4hxpQoGwmDo4DcVB5kphXuDRjMjDcKVsnyJvMqyaX8sgj5QyAZz5TGwjpimcRcE6GwyDGY",
  "key6": "5oJ2hxeSN4C97r6cs6AkjL77BNwNHkiTgxA5gYFY5n2R52t9axJ6B2YGSMqnoKVZWbhBXLviQdxgxHeJnVHAWLad",
  "key7": "3WEsvUziWeAJzqYUNQk69sqfxjJNvpRbET9iJcmpmE6ARUTjHBLzBAYzFqdvZ6yANRVY4MKf2jcY4iffC2Va1wgg",
  "key8": "DhjzADSDEPGjjAfvCBUzMZVW3zbyPquM3nVEUAxiEEHVd9FgXYMUwseu1vBPm4wEvRTjfxpKpQCgNAw4tnP5EAU",
  "key9": "4b5shMtLHdjVeqdTU3oqJofiKKtnfqKJQ64WJK7XYYXR5WiQ1YXFWYaJu66orYDN8U6vGMTQd4p5hUqM6tDhNxqo",
  "key10": "2uGJxw3bXFcBkzCGkFhtjF3gxJvcqCkxNQPx6v5U6GRsKVhLd7Bk3t6EDKdHAjtXNF3t9JtrqkcsFECtaecusBFu",
  "key11": "Ht8VsmdB7gCBH6fzgefCS8UW6KmHvVh8SUyG1tFvr7KRmDSFGAsgytihsKBsGkWQnMs32ZNUBkyc8ugKjYtdWZg",
  "key12": "5jWnepqtK5N8aoQBEy5F8DjsbBVtKK6uztpsax2uLHwKFJd3QtehQVCHU7GWXYd6ReXquEPRvfJus4s9WpMM5cUP",
  "key13": "4RZRYrKsrxWK7K1SBZ4c3zD7UMjePgTdzVakkYpo5HtcuDA1TUybnVN4yPkWPac8zBTmpzuiXRm8VsAoQCukwoPK",
  "key14": "3Njdjgb9Bda7buqLC93kpbQZ5sco1VUBChEyUcJwk7oDKYCPpTiRFt946MSoPBCm6xdxx6hduLGf8c1T6gZckd37",
  "key15": "2o6fGLMG7d5Jd8FUgMW4qH6hmnWgenad95RNDvDbxZcF52rzgaAhSCuqVkGxdA9uGxBsbvfP15MDFgSR1eXQSV6Z",
  "key16": "2azSepuiGTHirkySXoUMbFHiS7wrPVQDYdvHiTSZ8UXDf9mrYMUqPdTarcGar4CUrtX3hKsCpqEEjZNMDXZ8fQtJ",
  "key17": "3gyBJfWVhYemwUERabfhta2rX1exdz2zMwTkcx1ix5EwEpWjYA7YZ9oawWY9wr3Et9Qk8xZAF3ZcdCSjvduEePhn",
  "key18": "WtwBxnExwd5XWdjk5mqxz9vAek1M3oKhxAPqv7mQSuK19nGbT7vLyWACq9Y2na38gzLgGcWiQ8AoavLewsHArLC",
  "key19": "5Ue5rytxHY3nq4bLfj13rGb9Tt1NC6MHn8qRR7pNDGiSHki6bC8MVZ7wG2y2dPKyPWtCULrMS5x8UvdJtNchwzvb",
  "key20": "4jhqm81qbjZJYhNntrrvyUUdEX9YNNuGJVtAQ4rXT5yGUr7RniKhnFwfeTbdN4u3Mmv9MVqrP1pHg2cqrHYraPgL",
  "key21": "2EmnNNQLLQaGWPNcc77FXX1YgQd6Mx8YF6Qqb7rWd5sXA3GyFyHaSTEtvuXs8Ked1i4Dz3gFi4xytRszRrBGt7Ew",
  "key22": "4T1SjVUyredWhG3xGXNp9cDrWpfMpfH9YwiC25z6THjZUXq1WbHMZj11m41Cqdy13dsc2RxbiPZ46e6uBLAiVZE3",
  "key23": "ZkqPMK1Ssz4vjr5B717r9WBhhx6VHhHLMAvAg2n1XF8bR9mEk96uxFf25PxJaeN6JUEqXwi1eiJHENsfqVJPRSi",
  "key24": "4HovDjSMDqri6NEtY8UKg9QXaXnUfxyvkL4fRP6mCXkk5gHMurR8cxYKe1w4DHUNHZF3az3ZJrSXcG2qwc7UpgK6",
  "key25": "5XPTv6ks3uePo4Cw5Vi9iJ4aj7gWp71LWZGxQU4tLey5MdvNxqNtGbLEknBsc8YqnLBJprRb7iqk9x9goakmTSnz",
  "key26": "2LGggeBVHi8Mkzd6bS2jNGSTvF3367hiMbVKjz7qozqKgpcG8cfRVVLj8ARCf2zpMAMTw1iUVCYi5zymiEE4NLN4",
  "key27": "5MMto2hkBfUWgSyHG8BGUcLebXYLDVmUUnLhTmMxoX1HsZ8PK7cs1tmJ4B985kCXK5R9FVQGzf5tU2hj7qrxuZii",
  "key28": "8EULAnyR16vWvWeFEVhxJjgJqsrRqWuJV9fPVYDk2o7VaEGeKZNDVrqNmssz1e6NhoHvKprfVWF6LzWRcTPJTy1",
  "key29": "5RFddMUa6UgtQonA86QETTfangCGV9UDXQ6rzLFf599fdKxY4PBhoTWSjUf5XJvkfkDkaHV8DztzJ5JkD9HdStHg",
  "key30": "vpfN3wL4z4GGgY3vW4EqooJK294fNna5XxdLUfd7tkuzekDrBmSyoeSVMXbfRJ1RzVobSJMQ6oAK6vnLfwjp1ei",
  "key31": "zXLZKmdSEi3vJYH5J6v6Gr22owBEKU8ipPvVnF5UTvFVoMZ4TQsJKdhMq6rhik68qCBYPwDXExzsxNGkM7SQ1sX",
  "key32": "5yzr7UbcfUYL95rbsmRsMzYyMpjvxNGQrbwR1kUwBGXz3NRVAxtAoAKYE3DCjZT9UmVFYiXTb9oEfRurwVbZwpbQ",
  "key33": "2Wmp53Xk27kRaEA6AKXUSYjn9YmdZGHy7rKcTM9FKJYYRNfjqELgNFCFoTMxmg7Vhph4gFCHyvViebrg4csUhL9v",
  "key34": "52Liqsb6H1Xywqibjd5jg9neyEMe1gf8YzsffBWWLQgjDJrH3sfUidn5d2NCn39Y3MWvDd1nLZTNDeNkn5e5ZuWW",
  "key35": "3Un2zBnobjsxvfjjyK6UT1zzxr7QxHZcRVJ1pMLNaFJ6NCPjnqfu8v5xxPfQpGx5zUPHFPrCoZZDHkkrCJWycWPV",
  "key36": "4kQbaKp3p1oxng5ak87LmyoKw65SboiPyFqyrxQL61JAWsw1894yKLgqH6P8sqvem3DGKwXW4pG1EcD6LeEp8WsP",
  "key37": "4vm7oAjv8mJooyidDMLpb5aXjFkU8W6kMUvdRRzW1kfDbAeuAi8Hwr9eBExr5GMpwUdAD95eq8FDireNTBnVNQtx",
  "key38": "3AjPMiy7agrNtHfmNyBbpc1vrD6rr5q83avcnPQETH2knB1qXV5ZfUQHZyru7rozW8pChYrKM2hhhUygsaRyA8oZ",
  "key39": "2zaSvvZFTteJZbfeDA3QQRej2KFhLaWkfHAtdoUqRK6dGcbuzqJMDv9DdvwH8Yn5BLFtF9HYCUm8214bnY1X6RSH",
  "key40": "5e83ep2m2wYM7fEwTRyLs5yU7Vk7nVhqDBkrZC3tj5qfvSjxhsgiXXsd6SYoKy4rWbBxnBehxRGCPmiaaMqrg5c8",
  "key41": "5ToaJAErTnnty1bdoxboxLGYt6PQSAxFbu39PyPACmqx1CWMzErUiZjZyu3WU8n2WhsRzwwjEGNFUH6pW79AvmeF",
  "key42": "N3J1JycEMzVcbSJbV4UtJadUg1eFumJMEEP8vygYSYQufFtKhn8pTz6HYCtYcu1MVDUQerbWLiY6owqsEGzxMgu"
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
