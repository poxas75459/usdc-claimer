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
    "5Dz8dXRE7EYDPN8q5zqf2KLqb9qXidftijJPLXJRBGqQDQf4vzAXfYQQ4BDEWgToW73BSt8QdVn2JCvBm6oBdiFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rGwX7dKipfNkPC61kKWSXGUH3LZ8gCdZRQZVQq1wbpk9MdqcUdZumTrqYKy5T1eQBzCF4WNqFXkhinEe9wMkpd9",
  "key1": "4bu9kBfG9Zq7M9tQTCDyX8u62g9jjBndTYoF7GjoQM2rAGhvXVSjfapbJ9fTSo7GdSz4P8GxeRYbKD13aH1ftyzi",
  "key2": "2iRB7VL6RrPEFWmEvio4TuMdKD1QN2ymAQbSUPigiem8SzNDuzDazvLZkd7B8epiCHe8HbpGYJcfv4BwAb5TiCb7",
  "key3": "2PdCRdYe5L79kFmax55SyCs6KaffMT16BE2Z3n9AR1hk7W8cBekzVTRwPj1ue2ibBcBE58va6VbGTqSxoy2YJahu",
  "key4": "5pjALqtEVUjw9ebRcArMg19o7UTRmuH3ur4viu2Y7VjvhWVLrryJJMVZs1nFDeqna7ZBViGWpcYZsWLNH8SjnF6p",
  "key5": "iZ5DhPgDJ2GkJPtCDY94ovMVULYuE1uryZhJK4sPJbFo9xbzo9c7JzjRZSjyYpQu12XSha7MU8xuaowzHDnuDAA",
  "key6": "w2jsyHmx3fQkwr1ehiJmAZ9pxtbAkZM6yNLPnd7BsWguwHqSKXYZTnzP6hJuNzoJEJ1JA2C8mFXoRH6xFtsoQoa",
  "key7": "2EDd7uYCXju4u7gLerQbcSjxupVNBxRhkLQpuR57Xmd3qPyUzpW8238MR6kvAWeN6eH6YZsQ3KsRY3nFQVCNeF7i",
  "key8": "47PgupGsMLa5hE2xZiuVS2ZtUV7SkBBByrzFf7yqURDfHKc6RW6fcF3SqHnYATzWMJw4zngRWArpmtDoQHuNzjQe",
  "key9": "5n5vvihSPmJi4zLdySEwTNExtLVCJKbwmq1hNhLiTLcXhaUyaUAPmLnc3qmkodXZgYFB7FchoELPABXWMENzMzEe",
  "key10": "57TtsEmtn79whoesCCvpDDq6w9bmb17uvNAhaHrfMQF1bgCBq2XPLt6D4yRLcYpe2S6F6mspQ1msfX7Q55ksNpjc",
  "key11": "4gPf7W1yzyJ71fLJUrVtB7tMPu9qvf2jopfnqta1Nxjp5APvQKibYh384eiRdVsm5j7D7duAVwquXQ2fdSQZanxt",
  "key12": "4mFbinweYSDNpxsJJBtRRCvUBLYjuqgBUEC3q3H9YxU1tqFZ6GCkJjWqwCofMA9axiom7vBF8WCGR6YEBYNbS6Qi",
  "key13": "5eedED7L76SCK9w6eVSh9XKjedVGFoCzPkdaoegMVVppApjHTtMHg7HJtiBw2tqPbUhX2n6KUceNByV6gUax4yCX",
  "key14": "3Uzo6nrwbNYg8fHDPwfG3ugiKvVGEWWXeXkJ9gUNeFpTMAzDfneT6RsSKPd2eeNj81yXq4zaDugJXajJS534c69Y",
  "key15": "81pASRc4HxZ5vMxuH9uXdt9U6nU8F7oUtrnXLYWmmKppPpDx4c9K2hJqoempwoNKHqThA5uDB1F82fRNqRoy1ZU",
  "key16": "5ah4UtGc3wqLXGDUWmxLFJd4RnJ9ASgnAcdyfvARjsmyTQGKe5hKBk2asJ9wMyAZdqKa21nBLvPmZAEUKMyxuPc",
  "key17": "3HUiqV2a1vhvc2e72qG3esRJyLueG8AyGYFcRbsvmyeHpubjNhmbN72qkpG1aAtaSbdhEDNRHcVWd6b8FME92FVc",
  "key18": "43yXgXpDde1RermqFPQywnEbEo1mXaMsAR1n12hQQgePUrc75Ym354gaiNExj485vqFHAbwS7VzLB1L576WK5LPA",
  "key19": "3Q5yckF1BQ3jA9zjsU1gyjP1RTgT6qENn2SHS4xCxB71kp2Lgd3wkNECwyKibcrUUZmUrcCcUxpvj5JBmoXppa9A",
  "key20": "47soKUawUPWhkMQ7z64x3KZU6Ebz7vU2TYhbmoCjhybcm1v9CnyZN9WdS91q7yuEt8jG8qAMaDufNhjiN9oSyTTj",
  "key21": "2mkxo5fJ4vr9irf7LBzuv56dy4nGhqScFNoxx4GVHtpDggUuSeLqJwB4bp4qQBJgcumojcQsojgwcdtst1tRz4UH",
  "key22": "N9D4i7hWieovdt38iUgAGZA31sw4zKkjRBhWQ9G55aFtJsMK1kSXCcSzPoxACJEa4yqDKqsDybYj6cEvKqyBmNj",
  "key23": "519h4VKdBu8sS5m3K5YMX3xQyFi2ED9HWTXXstrgsMGJPqBZSSTZ1fF2GoiYfHcEiMm1baGDJghfXokzapEBXCBd",
  "key24": "2fezYGe46iZrD3Lc3uftWmxSuujtMRcNueFKu6rspwo7xcYLd7wgyCU5iNLticjaBAj9tMFZBiCPobcpWfN8SLwm",
  "key25": "bZgYwHDpsMmgqEbZHi6oJKWDTqgdRoG1NnohvRxbBPF1oRhTH6waqVwwYCkr2ovYfwQptxvgPKmdU9FXoB24GU6",
  "key26": "EKYMbnjKiGcDymmi5gqigvcFPRbWJmqE7WEPz8MFHHQyLGheFYM7D61Te4niKaeWsDaWgHTn3Nkac1TkFrFqLKU",
  "key27": "55VYZDnjRTBzudMkUtM7seDW4Jb2qwd9Lt2p9gMiKht3LqKsawtPYgX2euKnf4oH2dS2RNrF22wUTcxP7j44kQR2",
  "key28": "3S3nJ4yLCujqeJTwumQp3ULqFpq3Ck9Y5x8rRM3SuYjU8AAQZA5afeRFfZi5YYGqWkWu6rVihQrG9qWd1PodcyuC",
  "key29": "65QreFyn4vQfiebNxZ82fXcau4MR21c8dbuSh3bkRjnHWyvRdQfd68Ueqej76FKLu4VR8RNYLectZ5Mr2X3wvbrk"
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
