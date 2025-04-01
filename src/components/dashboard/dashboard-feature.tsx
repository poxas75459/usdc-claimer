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
    "5Yk54HkBdDWhh97H7J4k8XNNFNQ3UngkHgXHS1G9KmSzE2qMtiPZCpVZygGAZ7zu378oaEN44s2zsYKGEzaepmRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TBYRcGpKHvPDrW2ZcEaLt9dvGHtHuR4aZnq5THrE9njSDsMyxZQeKUAZyV6DapkVAXqrg8QsKarFM4WKaqRSExk",
  "key1": "2YDVm2UiEUMtc3Lcj8D61wPQwCR9R1AauBxoTAvEfiKD5EM4M3JzEBC5jCBKaBNDxY9JzV9r9mcYguNne2fn6bdk",
  "key2": "5XERvubqQ6rXxttUwjtho8Lpp6abrgoEe1Q72FaGNaMBpA6mWrw7A2TbFVvYVSxCbg2BmBHsiHFmkT2UVzLcTWaq",
  "key3": "5TAyHPDyWpMqickij3yauR47FDvxQ4VB5uHkM5S9SSnUAhJkL4FT1MX7MZcgz2jtZTB1W2EsPme5kU6TFxF2QNEb",
  "key4": "Dg4yEQiU5cZPr3r4GMjkXxegxGadpRgQAgYB777zC4UGLVv9A2MDQN7C75AL9LZZQsCbgURBxuqGp2Ud47zkRnY",
  "key5": "2UG99cn5MqMEeaQwxKVamQrxw17TRvWdZY9gcwoLyfpNXSemPYxie8mJ5sn6P8jvTjwj7NXhfkctnMsn8h4RTED8",
  "key6": "4phfCmoFJEfnGoj4fhrjq9CfBNs23TRfM2BFJLaJpEgW2iLu76KDYMaQQVhfqgVJZwq7KxTwYpmoxey425k85NMA",
  "key7": "24e1vB7tQ93Y9ANFbwAHtE5jRjixSedUEvJriDRMXZf73cfYFLSAvRokTfZEuxCpfr1FtU7nW6vw7qsv3263Fy6b",
  "key8": "3kkVhoz6hJj1wD2UiRt6BJt29eRQL56HBqvKnfSsKHjnPMwmFk9Eex7toHf2EqrKFpqV1tXGAsGfranzikdpMsWj",
  "key9": "5PiTsFvxWxRnQBiGiQzEYq9ff5Bs53zxwjugPckFNfw6arBEMEXcmMoCaEa8Cb9nDAALa7bGQWsGVDZvUy9FwoCS",
  "key10": "5rsL8PmbfpufDdqANMMJyun6z7Hb3r31HPxMLkZ7PLihXvwkqpWFLkoZfURjZLwMXDUwkWAkBZ1LcaPEWQeGwPcV",
  "key11": "5yZn8FThtAMw5LCpZ5ftjvfrfgQZ4nLu9zb86XUACLsE3B6MMBNdjWdn7LJg9u2dYgGHibALeG6CNCenbeCt1GYP",
  "key12": "2bisvVH5XD83oo6JYiqsX6HQ4Eo8i85NVTLn5784vT974CdmADtJ2E966Gpg5T7C1HrFSKmmnKWSmu31tp3SCaYq",
  "key13": "5MNebHpWECwK1Vyn5tUQz2DJDh4a7JoesnXbfzFMG5JEzsRw4xCyE1v8h14xCgVsAi8kWKGSb5TJJn7ompjaoV8Y",
  "key14": "6KS68YQEeR7rHP1Pvt2vdicwphtwLig6wyQ6X1o4fAB4WW6SspRDHuxQbt7KxMjfs3qQ9eouXZMGCPKwfjjePTi",
  "key15": "5k9TajvbM77ddgDHf9YEvofsUy2Dy5sMyoCSAqcWiYmQUYgs9qrdytNVApX18gum286KQ9v8LyaNQU1wxqLhVEiK",
  "key16": "66jeZb1mMetxhxThUytBE3rfM5F7PiokYAyRkYnV7nApEqm2tskV1v4enQGdYASagp4VqrZ9RjtpyJzPbFJsDECW",
  "key17": "55TnsJfGLjQmTEzSVbyCxpj1XGJaMzrFHCxyoD9Rbew1k6GzHan5ETK1priQMQuqe2aof9ydKZC7ZMbKCWSdXCDR",
  "key18": "2XCZz9TenxxC5jN7W6Tim6Vj5mA5wXiys4uVL68rt8RojrwhFYMRQQpqhqgKPVjFi3fnZGCfJmd2zTDUjFPjmm24",
  "key19": "4VUmG38foXYU2kmBpaBShGWabUpr3EBspy3NKyA2kdQcSeCTfRPaoCf7PEeuyRu4FEk4FvnUmSSRRsJuAeReSaQe",
  "key20": "3yjcXVYmjwDZjoBAHYiFWyC2kEPEaTJYqhz8yk5kb9Sn6J2iKXzKs8wEJNfUH27qapqA7gY5YArdHYUUDFHG96uB",
  "key21": "4qpDFDTYhtuUQMj3xa9u4pBrZdUoCJcGJrq9EqiMs4uic7Q6zQgoyaU5qALZUuViRBvBsbmogNmbvoc3QJ7XBHFy",
  "key22": "3gmPePwsta89Ja7JXTH77a9TPdBpAdeFK6JUL4f2YGnnzyRRH5J48ga1N9TdQd4i8YCwRASKVu3TQXWzbfzP8Q9y",
  "key23": "4BLcyxj146Y68oYYEZ3obFtEq9BAiK3aVrLdqk2udwo4DYZC5qPDX3qzBXhowervFuhvVDdN2js4E1TsYYnGXwMG",
  "key24": "2Ma2cVSbmfQPWf5fLj93GtTK2Nx4cj4t7KE3RmCCkpm7uXZLC5FiM5BDYYAdkd4rScRbFMKUZ3onhWu6rmECL14f",
  "key25": "3cLVkCwkAsa7LJD2bUfHqLyeYpK95E4d3Y5ctHDhZhAV4Ub9VWTWaMiZXMisHuteoosCzc3f6h3w3yWEARAQiExi",
  "key26": "5YUoFJ87SpevBParDRnGaA9ukWbEBFK9bbkxwSoVd8VRKmm3rLmtJ1zRWYA6wZW84KvjfYV8cSW4nsHSRaXM88LW",
  "key27": "B2Z415M3pJ7GhZJ66ZDrzfKttwCVXJZDE5cWQEUVNsXf9SxJksNxd1NXs2MonYDRSC7piZiXV4AfhBQr6jcu1XE",
  "key28": "5DWsh4Nzn74RRmsygdRJHChosJoxcbgAnLjKVSi6vPHga5R39X8SPjXQBLxTz7SmXcfSdeK9wpkHLtPB5qwCMevj",
  "key29": "vb3HgF7Yv24jGq5ZyDh8wqjeKAdcBnroiiyDBqWMHSZTTqkEDt7EAfgnvxUP4seSgXRCo8T33FbT6khomdaouF9",
  "key30": "zQJzrvUMP5uRxjHAMEW9Zic4ScugBobgw2NxTNCDhtmsyjomubsEnwkjJNSRW9DkFnBdcsCMg81183xMmJzPyiK",
  "key31": "51wG588yfsekwx6fTEzKb4NBsaYh78y4tcbnWuMMjMiQGZJd5wERdktsgLuvT5ULShcpxaRpE3yLq95uQuEu4QXP",
  "key32": "36XvenC9rzY8TatwvyopY8rgEFHHCk63d6jypcipyf9PqZZp54bwVxETKZsUwqcYRPDrbCWewGGngntRP9f7Pamj",
  "key33": "5Thwi6yAgC1CdQHJ56B3vjtfnhgQKGi22SRpx3zJ66z78a5jxSyKcBDRQ9gM31KyBv5EhpT6fUJWT4Sdyei2ki7d",
  "key34": "4PufGkd5YwVUm8kCa3NTFFZYH3t9qjUnM7oWnfk1sdmZduBNfJSpFGf19vKZ1ZyLW99V9pL7CvYJLcMGx9rpJowy",
  "key35": "2F66LXk7s1ncJX2qpF6bmUopo3bXCTNAzRyXo6RHUuUgTKG9h7xHFijDW9d1ptouCELEta4um8QyYg3yeZbAKDUh",
  "key36": "4m9SdAy5ddJZHXnDNEmsCpJwyFgEzXG8UNxYKKyUrjZw2cp1f5WKfQ8M9d44AopjG1EwQiiwMwemMCUavcWuuipo",
  "key37": "5kYRpwC6wK2EXMpwviBM4WTNRdVQ62Vf7ESmzxnV8i2E8xLBXKHRpAzGifZMEjvettJKdEVU3Z6Jvmh64anW3RhS",
  "key38": "3zpUQXV8vP8AC7cXv47Np1NpDpjUv7vTU8EEqQpVjUZWwkBntsY9XhHZtxT4qsN7tS7z7oyK14uzkqDAEzTmiP8Z"
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
