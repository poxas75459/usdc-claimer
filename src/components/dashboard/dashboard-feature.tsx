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
    "3sRJkKArB72aHn7UfpnzMRjYGQDyqGashiBC7748Sy1BDLx6w93YAWeVYwAUu3ASjg8aW9JBmLpqk7kBhQ11Y7oX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGnRZ24AiiadPWeTJ6DqKckuR7Z5NwT7YrQhmK3kriWjXSoBKrxLPwwhTVgonB5gQtWAktbzryRgWDS2bmCEFL4",
  "key1": "36xthBWfVgeK7Lw4AP5b1VQME2Lz4FRfoZa7BSJRGLLLWa7hsUa8aq5HPaHeD7VG7h7saTMMQvYrvhtvzXhyAxF1",
  "key2": "mivimaqgnMT3JKo6B7C8buTJNiv9T1ToJzyren3i2zpMshYW1hPLLKqbwGpfb4G792z8PgrQaLrtrXxYWS8DjP3",
  "key3": "3RhFBtBJB4hXXbqDiG9Fia4TVSpCESBUdW57bW7ocKmkJV2VHBw5hEUH4ayQ8DohW8hnvxyZRgSFkodmR5JHjNfP",
  "key4": "4GtYwqqWM1ChMJsuxwkbNznDw6TNnyRRVWy8fxgGssQtLRgjAgmWY3MNPuR6sLuwJ8YhaP9aZTcaV38svNjcgFsL",
  "key5": "5ed8UnHs4i5ihCCdt94fNs85m41ooqVeXxtg3MkRSPrWSx7NSenE2aKbskHkDTBm5wF3UfcZHtubpSuDRp3Xbn2",
  "key6": "4yDR6JDz9anMdrWCs88qxa82MkRPbWruih4iHYHrtaQk1fEqBdsQSpF6FYP7pBZNvE2ZUkQpMu589tMHg8fDG2Kv",
  "key7": "52TeKBo4hXxxDKHtbyk2LZMMkcZ1jyTSRkQuZW4MM3QCZ56bRrBKM6AwFgN4MYwRxn9xVpE2f1ZgZ8ZVLc77g8C7",
  "key8": "4Um8BskGXfCjJPYtfmaUbCEg8oo9JuEg8zzxvmi1aT6Sh8hh6ocVgbcbWiLGbYvxAyZsy8Tg9fuNk2X2LoG8wsJG",
  "key9": "42uYVP1n8eL1ymC2eW7s4PJTgrstK1Qf6fg9h18FFwUX4Xn4EWsLyYyzKS95NaHA8yhcEa3EywAadJDZZRFddwmE",
  "key10": "3Xa6tPgiw4MuDTebMieQgKjRo9enqnvsVT6WYhZWcAkyUoNe6PS31F1HJc3szYFqGWpcQDkCyVkWbb5zdv1p9P4j",
  "key11": "4ye2P8karz4DVtmRASURA7AHXQynnTPaz6oTrNysr8SJppDyeRATBVVPbat9VS1NZcP19c2WAKZ8FHSXjjXqiMiT",
  "key12": "2b3Ue3NzfbbUwm4RxkZBB6qBGCmRt3XjkzwzJu2Q65tQkyVG1PZPLLae5H8vTvx3q4dmy3vwNgNp4RYBd85Vs5f9",
  "key13": "5tHhKvtQgaTZRkFfrCkrsfsLgZ6gQH5jqSEaLiPtm6EA4CzK569o5xaqCTPiLVtfeAr8oPdLhkopj5H8g8b5GEJ4",
  "key14": "3k4G2UiEg1PxrsMyZe62QKgiGoQux2BMaMFKDQKn1CcgzrYDpyyW6GU9n5YZR7aixkmTKvrT24miqJLcTEoYDrQd",
  "key15": "3e4jUWpBfkd9WS8ZcVaLLyAU4tyojmJAqsjsHezQQP2H1iAbCyB4RS78VFsEBsg7tJn1agdmxeQ6CdNi3jxb7RZf",
  "key16": "4Rywe3yUwo234keZyHNQyStYCsRM5tnqUHaAmjD94QfWVCg8bHChjDrvzhhGCLzGwFx6ggs6zVa3fnSJjfVm3NAS",
  "key17": "5gFKPGp6rpZZcsc8oiCZySxXD14YATdHnX4UEhAh6yTv83XzGmtiqgS7udyaHzpX7Jx5nqe7C65vhRKG3mHZiaV2",
  "key18": "3o3tGNd4Pj1j6gTDwdguBVQHPZgPBfx4zuzuic9eSuErHVvNZM8fRPeBECSPPmXCx8SVPgvN6ATV9wH9iHC9Hb5G",
  "key19": "67eCu7z5htYEn7kaBAekWn6ecMF8GpF46PUwxD41EJ1u3zJfrLqsA3MusFkkWu9MLbwSzyJqD5mTwr2s9LtvS53k",
  "key20": "5hv4sA4r1FQgGyjYvnnv4oGcATgPMQwYMfC2QhtmQ64GdPMK4oVkspEwBnkgY8H8aTQN8ZrD7Go7fQYDaTS5iZkr",
  "key21": "WTKEtp7FXXFc2mvNuW6pYrZ7DkXRz6WUgB6LyrnHdv7LwAEaGfn6sy6VYHnoQvVPbtxtruNMgEpdTHQ1JWMQd3Q",
  "key22": "66fswJdvzJKRx4SyEFUkMpnh6NYty4JjqqGmMkHh6n5XoqZQjENDCtLX6fMiuzo9guP7rXUy1ohcfsHgE5TMpjfJ",
  "key23": "37YuqmD71DrpjcWh8qiBr7B9P7wPwt4WLUEsWqDbBd3RNnayYhZ8thN61gwdEc2Gb2zCQLMDuTQbiyN6go7vRfPx",
  "key24": "2RdwWhpwHF9LL1gefYj32wi8kNYuyPiwSDa6ysyeotQCmc5Xidd1V5GQzHjocrEVhG5W2UdWdhs1j8VH8mQPn3SG",
  "key25": "77kQ23HqjKhqLFVNWvjFFRwipA1iMqZhURRJd91Bj1WoTVeeh4daKqCgjJtnBb5xXYmqrZWWz3ragbjKezswToj",
  "key26": "2DKTotdWP2zGmseEkW39hxj9f5vdSPmdvxTCtfaNkgZK9MYD2RyPrBq1tTr11GBhzXcZwifU4n3H72scdkqb4ACH",
  "key27": "5tB976A2X4Tde925uvnGnpV8Vg51NRsYRXdrqVppHHDBYXErbcpTrFtrVvecTVN6DcLQthpTNn472rTGedPT5N4F",
  "key28": "VczLtzMuXwHZ5H4AnbGRGB8mekfYXNJ4nMvrVzjvZU6kp6THthJjdLJ97ujXMH1Ha7xavPKQ8NjsRo6zkh9hzKC",
  "key29": "3fAdpvk4bZtpNYkLQTDbjEckG2NmFTjJdxFHrzdDYZDFMtvNsGDUyxYJ9JX5XtQGYHEj17gi5LAvG9Zv8J6uZpvU",
  "key30": "CQp5s3DoXnQYxuU9nkRt4CZ8ydkdsG5krwZ4KKywnA8ECak4X85ouovz7JP7SmTqUHqwhQTmfn4mtdj4BwH6p3D",
  "key31": "3U8nLLRXUXZsUuuhDbFxP2pjEhBngh2iQBQije3q7KU32rezPjGKA11gDLSSKuudCrYbKPPX8rYmkNdrvQo9Mu4Y",
  "key32": "pG1wxRpgoRsM1By1PDcCWX2iTMrY5LkeojPhjyqEevAm6mz6GWYcoLBygkeHeAGeiWDu5wdx3GYa3JE29k95S9R",
  "key33": "2awbo6U5jDRXyJj1P9BoV54meLQ9CzRNpiPq3GrMV7kjTNoSgihMiVZz5UQP5LDes3TdTSqTgB1nDJ8R6SCi51vg",
  "key34": "3g6YaEP1QjbGk382QpoV3fxgTmp9yxERGnXb4ZkgY8Ttp3HtRczt5hX9NowbQnC2ZeYD44aur5bFWrYpTu1hgSEU"
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
