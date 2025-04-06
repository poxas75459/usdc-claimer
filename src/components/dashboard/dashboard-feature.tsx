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
    "3MMwTuwWcMYUKE6PxyLp65CRNNVoiudoXGUkqVuEckGk876pUdNNXm1GAhVSpHhzUic5KRSpqgoj9GytQFmrB2tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GWndMPWCMRSa2AUig8uZo77FMHYMi15PWU8nFQo4e7wZ3MHNUS8wpSvAoZPhAhZCiaRtEumSZrttZnBAPkzASBK",
  "key1": "5LK15sQabLYPohMmzm8tYezv37HRXqVMkqiH63VtaDYZokZzxcsaco6YCjcCZ8Y5f7ej79nvpeKZQdvCxgCBhx5B",
  "key2": "4nh43JhXk3VUgVJRqcECnbUWyf3Q6RdVrLFLCmrUVXWe8Qo9T9iGJe1UJ6HhxsKjvvmgTJAdkYzZpts45PEwjoft",
  "key3": "5vH8rtJv7V1Xr9Yx61s4t62EmFqf9KdxV18pa9y7bunEVE8ViqZhZhNDnNKubH7z94bWSqQ555C5z5tECQg7mbUd",
  "key4": "QtyiJnKNm8wm5yC46iGSXkPwJVZBFwNc6juT6v8vbdti3C6cnVuwRVKU2w49Ck7nVpQV6TkPphvvaEs8tu7reSz",
  "key5": "4zmRzcv5UfauBJBhoNsJ6cK4doNfBwJDuuw5e4Eo7FPM79FEmXsifLAC863Wuo5A9K1Rein8r6BxKAWyrFzHJJuz",
  "key6": "5vixhSRUZqk55grxCwhcTFvU97JEWezKinWRdpoo6mi8QZX5ETmRZms486KWyMNDB49kRsKjHe8hqB6NGmMzBM3K",
  "key7": "4f6LmYNCg2AMiZvJpvEAwdMfbpYJHsrSJqw5Ce3SBEnYeC8yXrd6FuJWJVm8bTh93z8YUqVuivgSTATiqLFiBe3u",
  "key8": "UtwxMBuU1FZuKtQdrbsWK7FfHbFJS9eVikF7U24VRim2C6QnHBoNBotFQMBDfMZQK6oQ6P5VDM4CeJFJRsCjyjS",
  "key9": "35ubZBjt5Scz3AFKjuDjfSYzknGitHbWsmxmEccPomu6EDoEWpRm23DsWnsyqbYcvMkAf3gES3X3V2rELw84z7WA",
  "key10": "4QQjRyPL5itVL2V62WoJQZ37QwTzuHVjtWWamGtPuWhvQoHTF4B7ZUasExW4CUL9UZpu716uM1Z2gdbNAwQbJ73K",
  "key11": "5R821jhs2BhL7tuZgyMCrL5Qi91XnqRxFa3SZJ5ShxMoWrg2aBDtedvwhwyJUHSw7gEmdmqtwDaFU9DuhAtbGS3d",
  "key12": "632Q7XGzGqxaGgvTYmCki2uGwo6Hhb9gShtXFPDDJ4s2sLTgmF3dEBcuaXjUuLKDcHXxcLEGq1SoqRUguMs3PR1k",
  "key13": "2J4ohG6J7QercbqPKj21FcKPANLSTrwJcLrTJthp7fjWbu9irSaSZL8qpJmWSX427ahLY29BRfeRvrRaot4uESfj",
  "key14": "4FcnhQa8GFvXmoXQrhzjemsZG4DYtAr2aGCsRQhtAT9bMbAeK5DaGJFo23xjpJMXQs855276qsN5vVt4XNDmELw8",
  "key15": "6KRaBLNCyFKbad7xX3v9AatAJpfW5YiRKQsc8KYaxnESSWVFyhpAZPDVPCFGd568YX3GFrTYvLvMvmpLn8UKGXm",
  "key16": "SvZdd7q3y8kGy9pRZ5xuyyV9nVeLhC8LeQrZnKBgc1eBV93TAJLztuaEBJrmdUUJ1C8UGJyipMoe2ZAD16RjfZD",
  "key17": "5dgJQrwtVd9m8MsZyFUxHW9bLCq9A8VDTucLU1ZFi7vzELdYuf38GYDguKFdodCwk1F4XWq4E34sv6e4hX9mWwyG",
  "key18": "3Dad4nL8UcdmyhjWgoCbr4mzQVCrhcRCxmBCGv8WCuLeLtqHNewwfq8GrBxXjFYkiiyXZL84ygHDsuUWczc6cCeL",
  "key19": "3kEdSLw5oV4rbeuyQJqR78J5rp5oC8GdDFSYPqbobQxNupDcGDGYX2BswfxhPfxKu67VbszTQjJ39siZ5BMjGwQy",
  "key20": "3Cih99Pat1CRgeSu3EzCvJHmxKVn3Ts9M8MaiPzcgQLgkAHotgJY6djvVE1v7tjByJ5pmMNoSB54xjFB6uQQ4szX",
  "key21": "3BTFiRwbQuYGaZfdhWDsk9trFzygXzsjU9tHEzy78tazQdTaJPtqjbA7i6NZBokurQuopqG83G4xukTY6fM9vyRy",
  "key22": "4uXaXyvDfQGkmriXGo7h2bmogoSWcuqzuTrPjcE52KXZqR8VDvQgcW6JRNUkjG7V8LDW38mPVS1UZwQwG1WPzMsS",
  "key23": "3xDnuD4kkqK5KDC4FpLLd6HongES5MyqxweEk7BLec5AVXbR62JnPhCXsBZatVdi9FCJ51ygt4ZSdZZ95643qzvt",
  "key24": "MssBP7Z8wMtitjGoPYoLuoUv1iDBkaCEXkm7f7SckzRzkzgMsirUSYbReWZQUwzSDBLUNvzJyjtd3k9RPAqusPV",
  "key25": "2m8NLGVg7tWJvVTcJEGUxX4vKUKzZhmazcZCMZUnpRZ8puepwEmYK3WKATDfGXkEUDzJL5LCCiYTrMbCsjp3kM4h",
  "key26": "5jFy6fHqzQV4MZ5EXohBwVPFFBEw8dcp8JHaDBfoKnvzPzmYTzvjuHgdJbT7RjjGo2oGtR9wfdQehHk3CPp6qYFT",
  "key27": "5fS53i1avzBbAHzTQsesULUDWo1HYJaf3dMNn2PdEfWmYfzE4VDhQr8NcPpVfDQQ59xu5gN3s9CUkrtNQ6Aw64HF",
  "key28": "62kTPS5CLDVE1sZoXN9SzZziwkBZ2fcPN9JajVPV9GxCpxuuRBK5Ki1u3kxh9JrVKyZrsCd1njCKUaqBPH4BcFfu",
  "key29": "3ziwvDp7u6jnS1XoYupYwFHU5st62839m4MxQSswCfSafXyVzjvHjMWMNy9uH6EpV8p7gWPwRSQvJ1uSZuEXd3SJ",
  "key30": "4LGgEPZsLXw4iKjzdovdhGutjFarUsvDpAJqfy41HWhqrXUJczjaSoAixiFoSsug7iowRguCAyKfSbxDmhWddppN",
  "key31": "3zbZyLiAipaNTedmWVzSgYFpNbryMFAUpRfPaT8LDhHAQEWXuvUJTSEJeKT8a7ToBX2RG5wHAWCEgn77WA7eoCSB",
  "key32": "BnB54E5oyUVSQVqP3BPJb6Rm29RrWnaLcvoyMxsGsyJGzmAQv6cGcy5aRgGFAP4FMqghcNmT2eroprqDpczCDTo",
  "key33": "2V6WfJqfR8MCX6x1uDSh1bi7cmo1CfR4TXpNdJF1KkGqD7vL4J1MY9sfZKt9yzjmJj8xMdTnqZBfSJ9Aaba3w5eD",
  "key34": "4WR77R31Q718k1bnomKHHduRnDdUXX7u1RBmr4ceyDeqXaK9FZzZqgj5FHpcWjukA2bd4ihHzN5TAFV4KBrngyF9",
  "key35": "3h1MmW3PioGr4nXVMqLrRyFuELnFuFLgKiJQHti2iMePyxeXjrXdXtYaZBHG2u7EwjYFTs2dzxtXud6Mx6PpNBCu"
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
