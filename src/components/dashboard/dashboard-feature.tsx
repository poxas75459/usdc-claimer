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
    "ZHSicg7p79e99WddgWMHTMxjegSLYF8dRBf3DUiaGdkMmziw3GBm8rmRrBdCeAqYYHE8i6BUySj9wAuLPfVG4MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R4aTxcWpQzPytpzJro2iRvheS5n96S45iWq9DyBMdM14uKGmfA6twddk4bmQrwVPSxFn8g924sYsXEyW8iZN1J9",
  "key1": "3G7Ckea6wsLRCMPPgBUfbjVVPoAYBMc5kEebSBviNCamtKh25MeUFByb4X4jiUdz7LeSJXpNXEx4Xn9Lx1day2b1",
  "key2": "3G1Qk5xdnUFLFQaXkDepMAiauaQJp4AaKf61QJRrATPzxkiRBGXm55VQLT2b1nwWbwpsKZM5U72DsfsxQeeYW8Jf",
  "key3": "61FweJuQSGuz4yBnuWFwiTEVZv2DeswW5wY3qfAybYgBDkfNWPa8eb7mhdEs8MGtXtjqG7kLbSTrKzscd8FrMp4x",
  "key4": "3px7Rsn8f43dagVB2qDFvc4UxL1MDJ53EF79dB51GGXVDF5UrqUSmXfsNecYQ7WsXWFZ8NQUhg9y1NZz3MvqD1XP",
  "key5": "5UDhxjqrHYByJb7PGDVJ5ytqkVWQ7aRqn1DzZzeccKnSE8jyJcvopf69522ETQSgk55WMuN1eT6TD9U7MLTBWFyF",
  "key6": "3gd7C3RotCn5wjTRhtr2tYPwV9VqvHmDvx1pTgYEyC19cFvQi7KbKwMLqH8JNdfX7A9ZQsPPhaMY28ZepQYGXqrM",
  "key7": "4ACwB6WavvEA4dRrEHZSk4HxtM9rWCtxD5phHH9oUHJVeCnqkBC22D5J3sPY6GwaNp2VVLYPQ3eJ6Aj6JU1cxdgM",
  "key8": "3rijtXR5wykX54zeGDn7Wdeo6LLtonwEK2HGwjqSXhjZYRpMtxXES9HrBWM8BNS6bn3isCj7ygBZZNEQ83whm3H8",
  "key9": "5e63j29a45xhJvLdkQKgtL4EhSM3KEukHR5sRucdaSXDhE6ebMiezS1CHGeNkukWqhw2orGh735eS4itgscF81kA",
  "key10": "646fD2QgzYJAydouQNRd7FbAJt6UwNYJBHYWnrLcSHmi76nbn9Moagn7gXjTGNSCyArbGe6s1oYbPLBwB2uQkMqy",
  "key11": "3nv4zq2CAMgi7ZyDqrxHGUnZ1XyS4xr65tRXS6nJCML4rF1yRyHryhAa1b3tvk1YF12sYEG2tq1T6r1zPQ6o9JZM",
  "key12": "46ayqk8CFk6eK8XSNSmNhhz7fqRHqiSH7TZSrx86FaaKBMA3LQXnGnd3HBP8fCXtmsNj3k72Ay2XesnZXnZJ6mvE",
  "key13": "64GsWBuq4gdC18emCyJXdAKeuRFxmA9Yo6X2xxL8FAQ9qozNHMxHgCBjyQcr9M9xw2ibnpyp2Q13HotmPDte7yRY",
  "key14": "5XzmqmXS3y6DMN5TwaTT2Q6GfgtXHHFPfyhKLY6VmNDz6bw8qq6YegpQ5o5wgmwqyVJhZmV7dLZmE32KwXVNuMYM",
  "key15": "5UMfsyywDmK4KCK6LMxzzatnj9yprFtzYTKtmNKA8n1jxRXnyppd9QU8KYpBqYYtqHrqV3PqGTbrBdufavEUSbBF",
  "key16": "14GegvXqqGe5kNTXurXW5c2irMZzyA5a3JmyrHRG4Fs8fe6g8NRqNfjhJ7zdhWJE6AoQuqS2afDxoicFjMjYiqT",
  "key17": "LxMLUswx3ri8xv2p8THw8dcmynz5SvMHwqPgiAj5cmHsh8QfwpNA4JvNg9i4PiXqREmNKGFxU5BqcYVptouro4B",
  "key18": "2KKFd6gJ1GBffSZfyUayRrVr4qbWxKFFNBm8GqhLekiRRA5u4S92BHmWcsaGtzrrTYyR7hqRKYtRcfPcqKLYyhk8",
  "key19": "HZaeoxD2C1FBj53NCW5ZuTryKzMxMdK3zYzAELARXh8SeDEgzYgFQc6st6iK8wTw818JeacSoU4NMZjVXdTF6aj",
  "key20": "28NZUZcMxbAjavR48DEoFESXWZKADXe5sQNmRvPppMgkWfvKa2xzE78HdJNp7fgZ7q99BJhBpqXH23WiLMFkX3SF",
  "key21": "3N5D7vWXtPCHtmnjUJxgqTDTfTYiBLV7eWqvxUzk9eiMHfSyGJQHUB5iSpkQQTV8hDCu6qxNq8mAArbk6dnctS7T",
  "key22": "39igadgWEvMvV2un2FpRJNMKVQddCfc6BtTdRd3mMet3Bqs5QsXbj4iFapXA2K9GDSQ9FCSAARJWeCkt7aJLYs66",
  "key23": "3PizCb8tfpWATZBce6HuGjzdRM2CQKFb23YioewnT9z4ELhGNviuMUjyNfbCg79YLajjfuQ62SmcnrJdyLHKmGdE",
  "key24": "ANbzvmuWSJ39U1LvYx2gyspY9LrFwSDE6QwZrwiz6VE8GBYwxvnmwypAHm9ovjEcRapgYe44on5SQHiR9tGs2eF",
  "key25": "2wyKgZHdR8DsT5jCJ8LprybwAVSnGohbnSCyQRGkBVMNLky4jeRtMm5HNc69mFHDi6NyCxjGbdWNNg56NworftCY",
  "key26": "2CTdCDUrL3ubNZ9ENZNsWFYPFUuPRVfvFDgXSK3KoAwRemk7NuNumUX1gSidxowS6zGT9d8XvURJvrSJcuSJjf9h",
  "key27": "2noCTMUQiCZpaG1ZDpFqQ9YC7nGgpy3idRy1ve9QDtfqZn2F7xeVcWvS4oG33Zfc7SErnpbYcvhJRNuJnQKoDRB3",
  "key28": "59yRqMhYkLZyPigem27rhsKdo2uQr7wPYipr7yb2so3EQndfQKNKin3YKi2g2M6WZE5t6cZx5r55GNHXTffGvrBt",
  "key29": "2yJk8hiPkNUaesridRDaZHF8esp11hRorpYKZxJT7G8z9X2obkwvHR6znhhnA1iUMVMrYcGfyX85CHvom11bbpr5",
  "key30": "5xoQxEKNVbwPpG4CRYkG4ob8KktbT9i2YnZdBZZuKqdYU6uBS56rcRBYACrDLgSoToXuq2duvFyfuJFT924oeTAd",
  "key31": "jxwzZ2eEkyXUZxV4S1JpR4Ux3vvG6L64khBeouZ4zceY2wPC2Y2kgmFW7ygxhPoehTWgggsh9LYX22u72PNAC5V",
  "key32": "2E54zSmfoiDjCvVtJWBA9EmCiGT2h5UTxSWdMospYP1uU5KBPgmw1Yh979sjhoaxjh4kkg6hCkcwWxgjr3ug4bkZ",
  "key33": "5bCaheaYTpnxycPMYjm4HuJyiH3jMHqopevqvHeerh1pXUQ5hN8QqeGApfhJFgmgyqYvfkktJfzX5SUJC48LeRMv",
  "key34": "26ERevPd9h8aKLw1r4Da5DKREDKsk1er4FPmDkBzQhFPVptnTKgtXmbhBaupFQaxpCErdp9hewScFvh8y48dHXXe",
  "key35": "4dv3ZD7JUcrYjFJhBmLSGrqWd3tHigirfiMpevVkm8F7hsgoW4YcF6CeUyoZokTagx3jYNTbD6sksxn1gnVNLSwc",
  "key36": "5T636qRs1tvHyJPrxVrvqXuqP8zTGQVaobr9gHr1HtFTtLrDkCMENR5UVdcKjFu6GqCyUUDQt5VT7NJ5cMBAABEG",
  "key37": "2k1WxgPzjKyWz6jriu5fqPvfide3KyBbkS7n4oKPnMd82qkp618EcP2xYkqzUZDPfxZ2j4uYREmpxxiJvE4kADb7",
  "key38": "3gdsm4BScfyUQ8gvTZ1VH3Zsoea8pqWdqmELNGNCAijLGNtxVttv6ZHU6G1wLfRPdDeDMhsJQX5nDiqLjoKPM4f6",
  "key39": "na9HzGu9uKMwQPzD7zv2WnnfB43qDCHqtGQo3jiUrYUEmoKbi9yVh8LGspg2dLmndeYZjYWDCTSdzPeqewDkqFr",
  "key40": "3JqXGDdAU8RpZXZ8rAMwTHWxx5zoCPR3w79yfDxdMKHm39yAHV6GLpAWGpkS5LcjRx91EEZUCZBRwMr2XoQ7URkm",
  "key41": "48sfUzHsawsAsjrzo3xd67MjtG6xbS7GYyZHNMiaFYEcyCBVujc9NEyePZdYBTcvEn6Eoqduy1zwczMTCgsCnZcB",
  "key42": "4mrbHAxtuuPjPjgHxjVzmzD6uA9vAz4XG3qh3Y6VLSDkB41EDv9SyXbSinp4dxoyEpYyMBofRi44XX1m6ft1Csbx",
  "key43": "3HWxmX6TxjCQezQH1tTeXWLtk8tCD4Ev6VWkyq63gqpktesjTZbFTxkWQsSf3KxCn7CQavFFGWEA4KoFWydgbJoC",
  "key44": "5jdT6iLTfhYnnmurWBeaHN72AaKoFha7pxvePDbvyG9FDopNjMgsDcVzgXoJ7KmfAsvMcpy5cd5uCoHgXGvvvHWX"
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
