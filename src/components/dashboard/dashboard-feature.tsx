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
    "2oES6mYdrsyKxUxHQQj7pGarJHd3kRP2RmWjK9Q2KN2Wy4cjvWB6aPhHCZXSdJbW9PgaCGp69BgnR6SfqKNU6Cci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "226bUB8r98PHnhScdQFYUeeSag8bQd3gsUEwKsor3S8MsvbywbgPFpcgzjPnoEYcRDBpHo6FKrWQLcyRSJYU36XS",
  "key1": "52aRJLKwTDLnepwq3j4fZZ6M1RSs2zZ3ANR4tCE5zRp7EPZZPd9qEWXxGw5xfvAJBkBRy7p2fJpkE7Y81V3EHDKd",
  "key2": "449Dah3BCqump13KdqZw21sHicFPimFuBMQRJeEpqf4MeH4Mngu7Wz4vrQfXngpPMFZqSrq45RJGNFzeDqbdqPjv",
  "key3": "5RCvph34yENUQdsBXVkoa923JsfN9wtZpXSGYpCr5goza2KHPoZxnRKVRT8e4wgrU9Kk6VPigTGDbzxFcMbb3TPm",
  "key4": "2QBJue68uxE18YjoJn1nirWY8C8Q8qfQ1PCQ4d8hnrEAmnczKcPUkFCdGveRb7mfZm4M32gPD2XLPkUbcCkkCW7G",
  "key5": "2sSpqci9K7K55P669hZppgspAdBDix5N9QXUNswyoygXaqZfzfyGMCQcuRNJS35WcBQXdJ8exDYaP1gTtdpvhyQp",
  "key6": "5rKyrHtTWVfXSN5XS4SedhcovHcqeEzTjZ7K6ryopxXdj5X6GhNNnBXpPY78wyGos4KipLnP6voWdwgo3pSSyo5A",
  "key7": "3T1WRFW7rkdHhQ3QKBDcomHdqMZY7o4FNRbPY59BCQ9iA8FvWtpzkBSXFAePHcNJc9V8xGuHS9sEWigZGc12qAiL",
  "key8": "5puHdV6FmoYdKQVGqLA8XhfGF2dgjZpEJHWzxbREeL7K1xG9pMSZmPteWUNZVmPHQ3PGwpC4yDr2cPyMKWxRthGU",
  "key9": "5VLoie9ezvh1pu5coox3x2D2EBhMuQBsunPmeAWvLFeEaugGmeFZLyeaLyLY27wjhwcrKUBPVumeV1iu4ZuCssQz",
  "key10": "5o2d9JpVBHzrZk98MW9s394smxxLpBPNasK1hA2AEiz2GKptzXpdZX3hu3ArNqtpc6DUQnGsnzLZH7q5Js8pGbGc",
  "key11": "51QyaZfB73DcHDNW9zuwvD9gZ971Rj1oGfTuWoMgoov9QfKVDALfk4mWihc1ARXUuWTDcAxtCS7GXG9jBfQ2yNhr",
  "key12": "tKUPFWyEnxKtypkD4qnNKXwhKBbGUvJtNQpBWKwzQCQDkxbmFt9D2ri5oZiDEJauFTaD7fT7ssGshJWaLXpxcBT",
  "key13": "5kAcX6RyjKD3ZixxPFhaS39U9vHMV2HbYLdXJpwtRyKphcRjWKQ7ksfmrs5BzBVeGTccWWkyuWVeYP1ohr7PPmeY",
  "key14": "76PthNojhAbM2cf6LGy84V2Smw586ZbuRTdLpGJeFqwjF4mumKwuCScYEQ7kZ74NDcLa21UDDRLMw7FuRgKBUhC",
  "key15": "V9Uv3ZZjh2oZnzbWgKkb1vGiEmHEYX9kyg5onntexbECMN52yLcjFt8XU8qrRvbbXm4y8gLX3DUYXsRJ5qXRYv8",
  "key16": "434fiGrBYjp8uSFNVLuuZeBB2Ev284CCpGFcxbCNeDHDngBk7Au8P4rFoqscfhSbQb651eDoFNo38URrk3jorA2E",
  "key17": "4L1VwhuY1W4ndNJkfWfFz9rsW7LvQorv6uhjdxXdekw6NtQXXewakdozZwiYGM4tZ7L26VhH2oKXvdz24tCa3Et2",
  "key18": "jJ7FZv7pAdW1nC9z7N6UVuG9Jj6EBhQNiatMXQGU8GLFsqRSsk2rbtJQ6XRTZRBRTRr9ySfWCsewHvGmjjboGHZ",
  "key19": "55EA1BBXcg6i2q5mDecyWJNhm9wGr4x4171uE22EJ4TQjHcYAxpfaGt8iSFtz5wxQQgfKa1nwqLxBZm3qZ3djnDn",
  "key20": "2D9nU2z4LfDs4UyPYXW7HYkeeDhwtJHEBuVbY6N78tuKoMyMgJE2pevq7jFrEGbdCWF2VwwEYa3pAZd1ZBPoJZYA",
  "key21": "5cg163oGbe8EQcX7V7tqCPFFZjBkTkRs4ytjjxbvRhBHoL1tBdtcn2T2C3QfbJZhY5ho1hDQg2FxNqm93YGwH4vE",
  "key22": "BWeCJZnwTu7iHpo7Fme8QfyvxU6e7Te6Uo3EaFCTjPA9vcoBn5qwA9s4rbcGaG4EBz5ggrR8k4F7pLyAG6akGJJ",
  "key23": "M5FFNUZxF4AdDieDATt5JjdXzAPNw2NipNJtLCjy6p2yzoomTdvuyc3XsbYgnBT1cYqviy6ZHhZivXygQQCjRZS",
  "key24": "39WJNeqGFW1MCRbq252XYp6DpfvwonUragY332vfTtFcJKtZE5rE3NAnuANbdk81grPT61KjGnjitgTvGAdT8XQi",
  "key25": "YeMcPPFH4xFDs3DcNZDBrXiTyP76Rd37wog3y8rAuBanvMyci6oob4MjZx2781GchG2UrXsiYu3c5oeS9FAWrKX",
  "key26": "SQpmMahwCntFi6RMmxWv4Ba3STsbvDDDMgcUDso1tPSzyXAHruru7GwuoXXkbqpginzMaQd1MvWAq2XeABsCzwb",
  "key27": "5KKrU14bDtDFhVHJjqjhmTksH3QuhtycA5b9DBowFo1gRji5iLiVzfG4uNhZmCN3bDxUi9AuizMvfAD2Ngat7nPy",
  "key28": "sRUwi2qAay3UKvuKndRS9yy8w6C9Uc5pCguZLgK11rZqXBxoAYGU4TiFWofP913K1SaJFCk9wcqua9WgyfNKwQQ",
  "key29": "3yAG3adDbG5fyBPn5MiXP91RuHEkx8KzWy2e4R9kLc89MUb2Am9wG7w77AtzgUkrUbJ6jmdqSCwbHqiokwtta7Li",
  "key30": "D1Hmr7PqFmUgkxVaypGtgCLwuqLFoLNpVxnq6hnS6BXyJahotzDuBfdbZHhoaYSNu1Luu6Ve6guLHPzuEBgizUD",
  "key31": "2xirKgmWjfsQwcfjXSgzgqiqYzJkTPV67mo4zAJgVv7DLawymrqfatnGFhA14Qp7UPsodmnpP372KBaBb5YTdhRA",
  "key32": "5ucz6cfeM3WKX8mWfdWQTV5teosE1hP21yuS1XD4k5RrdewH3Uf4d2gGWEKH31cCvrLJtDNB6JvECyCt45KTFtJN",
  "key33": "mV6HWgGC5SxkrrjFVWNDeVLsCz9rFk4MLRntVQeaNp3chWg9pD7vVKRGKzBjiTDFkfWTQZFe3dgK6r2advD2wBX",
  "key34": "cirxHi9d4sbBZpsPNWM1Mx3KmY9u2oRzRXsyg75ykGHZ9fMf8SLxUVEDTJqQeGjNJqPpjRgsayvsE5Gk56MnJVK",
  "key35": "5eZBNRhBt9knMkVoGpLXZq7uLtUcALMe97NwKSAqFhcuZMc4CMdTwLkPs19r7QzBN7ESMyG5td3SLkqQdAKCMoMP",
  "key36": "3VJsvooaJusRj7W4rU3gPYvNdtoWfuj5W75k1KiqYeXbfqPBMVqAz4jhKUqbKrU6z7EHuwqsuB4jY9JyX3waEBwC",
  "key37": "24Q58fmj812XrCvrBvxBQ7YMaKPTowGLjWCFpnbXKtJ8xdAa5ZEQ59sJN7bD6AXjnC4BvBC2aWdXY3L6NWU6aVDw",
  "key38": "3aVbTiJVe88TgguoNenrVrUQBMNhSLJM2B8e8vi35SEwznJf7Rsx78QjT6GqYcpoHcSxwCFCJXoqnLqM8yK2SqaJ",
  "key39": "2dZSfkzi3hjMawjP8Ce7YSjmYSRSLrPHgtfJWeJg5qPMzjevJVmqcP7cn4GuGn8gSCKT7jKCRpVmbKt45peN9iMS",
  "key40": "U24dA9gJXjkstxiraFtMdWNPdGYP8fic7gi5bMt85Yy86WMgEJdQ3YtpbFmDUAUNURgEbmcatQZupaV7GsUGaPp",
  "key41": "42Yqu9swwJ8iYyJRC7W7iweJ3hqeySfhpep1TobYjJpY6fTwAZk9tGeVNhwdmvQMw8nzLGoa9wQmu5npXMjYir45"
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
