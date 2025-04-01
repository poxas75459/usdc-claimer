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
    "3jQmudUiKSeJQwSgqZhNMLN2qdSW1uJxUUHYTN82b1E1GqDhQU5VSy2UfYxoFbRX6zobCtZqGXFF2UbqpA4LPZce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49eX9bcRJX7tjxq6T7QMs8W22zqdaozpghyjpZbXt4pKoaR3NqAcdoP7zYTzr3RSBRRnQEAsjkQr1eYWfihdxtmq",
  "key1": "5iDmaW572YdJNBcAmRQCoivuxCUjNKYnPrktpVYuFKrYCzwFuFk4zjgodXJBGWCtFNSzahK9jFm31zhsVZPktJAR",
  "key2": "67UjK3e69b7XjX8kBCwHPmSWCCt8YQ6TLFupzswgugMdnNVhQSckhfsvPTx6ZePZS8tikutrNJRgLkZHANcxcM4S",
  "key3": "4bYJmDSJmmj1Jg23gNdHE7i372Ur5QJVYcbpCwwvKMB9nevdegfnVF48dujp9T7gK6o8ApZHjFGAK2Q6vZ1dCxYu",
  "key4": "6tag51qeLinSfNQS6DwnuMrfkEe73ZCHrZ6jRC6F3MykWudcXfL9P87xjShbjXD8W65NXVc5zWujg43MmEJjnyA",
  "key5": "46HRAGFJTzTTimRUyzZQE1HSZwSJ2FDw5TJQmLqSrCyHfcQVbFvmTJqGseHWrHTtJdtFQu3uCfEX2nGGBGDA7odJ",
  "key6": "4wY7VrBUX9Rzr3ZcyAvdMgG877eYkUivsEfh1Ab538PNfCaP7mzjzrKtCnuiUj6mTfXTs1vGqo3VPJUTUxcD1jCh",
  "key7": "4gpim5sbjroMyX362FxAFePhtJZCCYbn8Nfc54Fjrw9DXnjPXhgPnNq8bzq3xKHVeVc7TsRSaHDw2qqYnbWuhQjQ",
  "key8": "4r91ZEkrPL9xtBVxTjVFRYxBtTnq8BMV9D85xhZtCw3t6MjG5URwPm2QWDSWDkqFUKJC8p8zpJsnaUv79LrESekd",
  "key9": "2ijMSmX4evHsR5GdNYJVBGiGKMnxfjWcLT5SCP1QaPD3u2yKKB11zyom1kBZ9B4WABbZ8PhH7L6g43BiuTaahWfQ",
  "key10": "jPRy7B8wocrgnJcXk19GgC3335aiqw3XmtakWTwxEDms4hMFwY8cDtZzzdhZ3o5iXtt9zESxbYaSqHeQnT5CF3h",
  "key11": "K5banno5JDkLCjF7azsAs1KKjyrt1aHxChEQAapc9tfUjfQPn9kLYfxqEaHuTCDdHyJzvtWANgGrtnDBZZw5bFQ",
  "key12": "96tQonKnwCZzEvHTPDgirUNHFwC1kV4CBhybW8c4i8wzT5Nyj7sukANYVB6ekdDiZN2FLGPv4bXV91rw3UnbwSo",
  "key13": "3DjAodDUqn6mCAixkYBp252bk9J6hjmMdPPLsqEVDsi971G5P1pbnmm6nHESiz2mhZUuz5PBotFwDix99SAqstYs",
  "key14": "5MChv6TNusGHA54afvMuwxqtySVYbuEqiFJMAA1MWZfDpYAwrthRmAtqUsxFrXvjSHw41NkC2vAELmAEiVmJqjwz",
  "key15": "3U95yQVHpLUV1A2Qt1aQ8d98qgkRX2QeLoHVodESb2dCt5tRZNoat1dG4YPLDs25aNw6YNvq41cy2qsezsv8VRTT",
  "key16": "E2fCkiYtpHZHdzraJKEcjzAHqVbKMbFHqMqhP7wP8XKfFPSzhBY6PDd4ukoAKXxrn219bYuAm6n1MuqD1WJUiER",
  "key17": "2PSgWUjcSyCQ9FnnNCv6y2ZmNxrKCH5WktZPxQDD2AxLanMYvX2JNCcPgJ1FKuaKhn8mMj6dMiLnxbW3akzA89hP",
  "key18": "2RXhB3HKmC7mCzyQZVnkkoegYm17cw8gbDyv2R489fi7QXSsmrizvqCU2c9vncgKNSdnbdTCwqa2M1AMQi3hcsbZ",
  "key19": "2xNhn7axq31M6CubA3KXwEnyYvB5L2hCNknmFCN2HTWPSkUV4SM4ktZjAWeXdFdmHGtBPwDaPHgpFYo6beEjMuhu",
  "key20": "2rNBiaHEmgMTUbYpGYmzfCCeDDPwDZZ61y13ocAhimXsAszL29SFj9AjNaPUMg3wP9xoDkkVqPtaa4FXJfJtjwqB",
  "key21": "3H2ZQcSAX1mSj25W9znhXmVchTczjz7LKaE3mjiJ8PTXJBec2Xq1icLNAnRzcj68PpE2N1jEafQ2rb8D7j2dNh3d",
  "key22": "NoqcgyfcypEAaqQqXXvKtdTc2MeyviSas2eDkSzj9qcW3yTmnYRNBKaqumQnFpDd959saWhKf1ocoX7xyREFvxV",
  "key23": "4Dh8CbAjBzDFdmctygwakK3XQKSJAHQFiNXChkmd97v38qAos8jr1MSJSttYLhXRXKbN9cKZ9RJhS7MBhYCuH9hk",
  "key24": "5pLQW54N83gJikomXX9MidVyA8Pw3eBQoa5LgnTVeVbfsA2NcKFR6Hx5k9uRb8Sk6LrF5NkHGY1ACJpNhkeHGZmF",
  "key25": "EPCjS6aNwgvniff4Mj4eDbQdVHG8PxRUsBqLpXyaTP6NoeAr5m3HHZQubfbkfHnVoxczYt3U7B9BBQsEbeFa2ox",
  "key26": "2d54efuK7EWJnod1eBgYU4GdLGAvehCAyQmsSzck7JHAtmay76x6brvcL3oS7ff34DBSjdgByezvwC6vjk6Mseyx",
  "key27": "3YZg2VqUKPYV79Wz4SQTtag6HnZTgTApVzNMVUdjPeXfLoNzCpTdW7FFn5gijSPT9MsgeLBNLAa5Fk186xGU9aDr",
  "key28": "NUmim8MB2X5sSwQQTUThVDSKDsUfYtZYHAqjg7PhsVxrbLJ46QdHQERMw3AB8xmdXT32xXiF2YeiuPToSMtzq6J",
  "key29": "2o2g9QjH7Wx5zXkVB24DKcJHwF2N6zb4bw3N8wEaN7Y4Ys8DmuQbcgMBw3wLT4g71o141yhDQXyAaBwsz4R3WhUH",
  "key30": "4SZa11bUy37N4dL8nUGHS4v6dbyE31KThVcGevWLwbKY9jYZC42CE8W79veDpR7oMuWBWZCPT7zZW1kg6i92hEwV",
  "key31": "5wJorUcfNioaimnomTF8mkiK16sdbETRtZ8SMvJKLkNqoTir8qvDAY9Mqrh5TLiJaKiY3ktHgiK42AYc5BDgZ1XH",
  "key32": "359YE4kyyyGE6iRi8gD8q6GnDrHa2bgV81DewDDnSUkLr7CBSQ9XuxPAM3ky1dTLZmeFN7bdTs2fsyv4xCiuzAPd"
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
