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
    "3dfNHP5Rz1gAKV6C5JqtgiGoNBQ9Ltgt8Kv7z6PL5oYAXpXRkuq1fd8f11LDzPhBLUxV8mRrP8WA25RoxzaF7BN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y8pdv2n6fVjYoaubCYmwEK3jGPkGSFcpL5XPQXg4qQLaLSb8NBbXgtZp17zzAQ8Bp8LPcVCBWTDrftJxhBZ3mAs",
  "key1": "35EwN2gtWoXZqSXGi99keuFXqHqBgMsUowrbvyMCYV1B3gGU7Jerw3Zy1ByczuSazkVz3jpzzfZRkspa3ZMSJe18",
  "key2": "67ZBNVm53h2UuC7kAb3DC4aRQyAHo5D3kNiYQzHJ7cAqrBvc8x34GTcAMV71xsSh1YagRAHHED6nmtiA9mtBDvXH",
  "key3": "AMMWuqgZuvAHdUfVj46ck1UV2Bta7kHop4HUcoL3UYLcD39fnHGxNzqE7Z5rneiDAj9GzFBVhCq8dDqd96eZaT6",
  "key4": "jDRyZDzj5axBnqnbnkbN98Hw4wkLzD8gvcgtriwmVY4WNKWhk8su8UQSfRtBQfkfSK25b1GYXwGQixjkFYSWWQQ",
  "key5": "4jE57oBPNBxRpoSwHN43k7Voj2oUGwZZ9W6Y5Ytwga5A9wmk4GazvZqfB5axe1LimtTutEVrAu5QaVrjGnPoZ4Qf",
  "key6": "39s8Ftz8SpkAMLreR2hyJgXk8RdP9M6ofjd9CDvG93Qj6pcqSbKKapR2cKqaBfHtRsYi4BqyZWQjiyYcfSszogkN",
  "key7": "2TyY5cgwjqGgBqvMGhtdBbP9h88iZDCYwfyxAaRGhnrbVGQY4WGZrSeDx5PJeKaJdZEFeUbXAKrGEhpzUJeacAfU",
  "key8": "u9JGxQU3gyQk3fkkyje1YZPWSBA6XBmPLhTahqbxUNz8ghr37ddxpd8rUSSZx33kTngBgFW7RCPkPbiZYxui3yV",
  "key9": "3LCZdhXm8qvxxvUe9vzWsa97c1UawVoRYpBsDghj7nPDSxv2DNXzGzwDG4EfsNyMuBgVestdVFUBCVSeiLRscrrm",
  "key10": "2DgscUC4SMFnsAXaaQz4T782mhSxsbEx1SS9aHA9peCCVyxoRjiKpT9NQbPM669ao3PSMaGcja1yzqhppkBz9n6b",
  "key11": "2gfCGC9GfwffdH61atXamhQATTCrwFzvdXPS1X6Z6v4MwP1brhmGdcR9M5ZyccRXLRYf8HwdNi8ixzbFfPFK1tyd",
  "key12": "2vBj7Ro2FgqeL3xbAEicN8FXVHYnspNYMuR3VSyXE6PPTqFfgyfYZfkogz1qc8QCdUy11wtNppvAVZEJwfjjrVAg",
  "key13": "5kWQZh7JJhu4DciJTyyrXhgbr95Px9oDd557Jv6d4wXijyiHqR77CkFzzpzMKAECX6uneisGA4v2WhzQ7Xwmnc19",
  "key14": "2ojz6CJFb5C25vKvw8wkPgsK3USbLAnf5uvQQRZEEAgY8NuTqPCbYFcMPr9ocUeDqLFSXG6sSFRFobxVjZ4iCPby",
  "key15": "27EkVfot1iaEZb2vgzp6Fzn6ysfREo2WyTi7kRDEoCzzmCum78XwnUL1Jj8TF9TPYPSXd7UAtgv8PQmKE2Vkwi23",
  "key16": "3yeB9J9Q7Gx4W3JurLUASQgi9cQtX4uVN2BMGG2UzS7Ev7SojfBdh5FFZc71SeK7Syi8UpNKBF4txH4LwHSzVyup",
  "key17": "4UMinueLLTK3wjuA7G86ApZMQ2MjxTVVDEkCMYXLgEB8JZmBFr7vJ8yEH4rC8QYeqL9EArJBv7U8ZQbnaYCTgz6t",
  "key18": "4oYKi5THoAETkcnWL559huGRkPuo5AN4pE6NfZQBUjDTd97bwYEhFdAyRKdwG1yscSnXV1ZQQRGgY7znAvY3iMFT",
  "key19": "3Ezqb27RY2skBB6iePGAxJLwhfXUCtnCXFqGQnp7sKMJXpxi2WB7oXJk8iymMSZ6QavFYXBocjtFLYBDLgMACk5W",
  "key20": "qhaQJU5PJiuHAgM9ZJ5wERAwSiUL5BKmkCQkfGVoiXDmvWQUZhKrsQaSWPoQXPWHdCxv2TJqkhvkPxL26NxNU1U",
  "key21": "jV1Pt4y1nMf41WCeyggc68t4b9JR6YCQcs3FXgQxFLQ2jGQL9oURan7q6TWaMeopWseu85ACWDSS9E6ZU2CaWVX",
  "key22": "zHRAaD1NyRrGwT9CjGttpSzzT1mL2WrjrE94n9zbGaokPTorJS9daTTNvXSmVFJHzMTgBVyzHB4jVYLSofhdbXV",
  "key23": "dP8BPjez5k8m85F2x8QfC938yyrbFQ8UJLB48FzQHkvPQq5vHa27qm5F1HaN7cFojEjzKUfgMq6FQF4UkZivzmw",
  "key24": "5igYrryuqbefPoVUDet8zEvyHsw7aX4c9i1XDQn1qjtUsRQxeP1eQrEDuwHZqjWi9Wq8JiFNThRB9uQFDnnmjyK3",
  "key25": "2fjEzaDhMiL5koH5FLrfbNBLxFzer8xrqJTMoooZN6d74JwTqhNXgxmoe8hJ46EiXaERjncj7tTcRPGcTp7KuBXk",
  "key26": "3eeoNpgjqXqPSTHhtdqFmU3SA1bVmffyEjfKer2j57MF8HTEMT649svuot4Hw54LFrqj8YpnFoY8CeiiBWBjJNty",
  "key27": "2CqESxU5fvkpCcJurfwZT7DJsydJad6qocxmJFYjhZsUHr73rEQRbDHv1ygDT8Xek4VWPHzcWJXu4HBChqELaYy3",
  "key28": "3EuDndBGxs87yHuKz3qQZdDH9EfFzwm7RB9BRMxAWoY3v53J2Dw23ky6t5VgyCJVHgxcAgNLFBEzNnDKWyybNGvZ",
  "key29": "5RC7hoRQp3rWMXLrbH98JX7BQu9JLLNDCZ81vWdHSk1tBdNVoHan6bevduK51PS159B9kTTkEfgW4F1HCGtz95wR",
  "key30": "2WLauvsVtSetJdRgWECRjkjL1a6HeJEZgMK8eNU7966QtU9DBBsBkPW5osyixKqKzMJVUGr6sycs3ZFeQZ9CLtF4",
  "key31": "3ZsQHfi2t1YSp4tnsVY4ohv5wg1H8kJKyxvasG72iR3pN1Yw7jH7Gpzn3wjZryPR9NrB7RohpkBXusYAXtaUu2zh",
  "key32": "5WKCL7X6CSfwVUuVdGg9jfAAaD9ZdeH75GZk1GvEsPVKYUPcq8fxoFXgeykUJy2eFksHxYJ9SVUMqW7cVyCsM2wt",
  "key33": "5UjJ2Bi2mcioUxEM2MxsxAEabum46D6rHnREAL7QpqfPNEte2CixtwPuj5xEgfNSvqDk29eRBJCzS2hG75cqGmna",
  "key34": "4QdnuY6mxbXNAXzt5mUV1kXwL7Z4bjrbw3gjdYDQEmBTbwrqkLwToccuq96mQawVeEgcg3G4NssofPDNaP9YEPR7",
  "key35": "5b2cCxEVSTkeSNRciht1gwpKcLpRtXWYCYhiPbee61kRY2zmQbWbKgVz4fU3oHTAWPcGqmQEbKxoEWu4hxSXqQM3",
  "key36": "24ZZ16VQT5pg2LHD8kFMdKesCgh9zaKoCa4oAGZgiZFEFggf5KUSSRF6tD4qMUMxWgFyC4pa1uuD8LfUfFoiHNWc"
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
