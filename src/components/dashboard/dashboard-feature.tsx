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
    "oJcJy2Fhth5pFhH3Cgw1LorjKYGMmbyjDKcDNkTsdkUg169ZB2irTfASrk2w2DQDuyj3745wLAQR64vqoQdEs7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nf6x59sprs8YCNocGHpNW5Qkc5MmBH378Cmm8ynQH2GXz1hDEV9TL7bb5GGWrk2whckGjcgFkTFvkTQSjoqeeTE",
  "key1": "3Rr5orAc3L33ijtZ8UqY7GgwAXtNcNF8AFMkW2iycTAepcaY5RkNgq2VZiDFyP2DY7WVXDQUsx4Yp5hfRL9zDF4C",
  "key2": "3NQczjCLeEBe2zjBr598btxbiUTXHEyMncnttQ3mMynHWJiayQS4cXjwkCuqPtV7m1FSfnoJaA3KjFsynWvQaeDf",
  "key3": "Upawqc7zJAogjTWNzFxWTkQpTzeqzau6TZctXGbKN8ErxNF6wCoD38PWNJWYpGvjge8mVdU83UJwGMoW9czEGvd",
  "key4": "2xXWCJbWPuohu8AUcZ1Yw3SJyqiYYyHFZferVMpcR1ZN5NuALe6RNYxKtYpirEY8PMSorTCMG1U6Rq5YUWD1XSYW",
  "key5": "3qXhdbpUjzPtnD2GRSC7yxoXokZrpWaddQFMq7gLBWv55JSvJvmqBvVSJrCjvXvgah7VsAUnYRaf6TTNtjXt89RE",
  "key6": "4rsBTjFv8Asv8EP2CzZBoaL2t8B6qQ7Cuj7hSHRm8uorgMqQqwYbL7U5PcJQ4BmCiystMFCWwJEo5FoPg7Y3PmiQ",
  "key7": "36rUnc1uofHEHUVQXQyZRaAPF8pbgETRAai2V4uUAzfAt7DSJ3kx18CMQcbKb575RiW5qenedw5aAw9j4JmYogYN",
  "key8": "2NzdCSky5R6Z9AnPg78UtMhDHxyfBtLf6QamMwgz83WZ8TWRQeRWV7rAnzXpWijFpUuxcCpgkbB6jUonLkrC35BF",
  "key9": "4Jv1XyDhzryniGpcb935qTyh7gU27tuwtQrJvSmpnwA8auQtLPz7Vm7p1nYhJfYRDLJ6XXtWbB3Gim3QXA1VKgBM",
  "key10": "4ASwDN95PyE5bKKcFQFJbnw2XfjQWh5Zsr6fqFrj5DkPd2Qs7cPA9Tu7oTC8Axr61bnLs21ZJTnCmfG9z4kDdUeS",
  "key11": "gqVNV6LT5vEeH7pHffsjniAm3NFznjdZNTcGFDASGxThzze5qeuKXuFPuv1Dhinmsh9VEFTptKsyuLmHYQzxpfQ",
  "key12": "2xdy7UZjWmPXehx4SQrNxQT9LHjkfJ5hv9p5HK7G8XKsUncpQZ4Ai4jrwc2PpfanXBXuhNQrjhnZfGWcDhXUjZvM",
  "key13": "5R2gdyLVSH21anfxXPbCLi8uCt4UgjoG2Ny2LfpaG4Wqsytbt2oRNAVapbbAVjH4z9K7BwcjRdsJVAbHsnEenNL5",
  "key14": "2urQmnDHsc1AKFmhxf3ooEupdiuLeF4CVGEYxFJFKxfbJBASHy9pRDv9W8PMriGgwxXJs2eD2Q9NsRUqxxxnJmqQ",
  "key15": "24bZCL7nvtwPgDza9LA4iTBLKTsBeU31ZYdaHuf7VWz92Bhy8PFvyKCymawL91rtoSjr1vdmJAtGmfLbS51Rsp5x",
  "key16": "2ncXQPZzEQc6daZsWqWb1WEtKCDzucABPvwXc8Sdt4isuFXy2AZj6ZyXa6wbsTKTFKW2FVkozFWUAx2wf97KSYN7",
  "key17": "G2T7P6jUiqYZ2tahVPXcqVBGDPVb3XoB5yTANLBSEpU1Hsuvb8fYk3yqpd8EwzfhM7muBGeXyBeP8VwaukpaFcA",
  "key18": "4V1hqtQNUBDEFbW1MBYtqgzrX32hLVhoDZ1XwRASJ6VekQcWy5wBTfwjL9Hjkb4Nzo8j8jvwNN5FrRPohkYvB4DL",
  "key19": "4xB7kTHdjJBAeXLmHEcWwpjZGr8tim8FSu79zit4XBPGhRjBPczXQe6DuH64dzzWsHFbG79z1WR6MW56SyFYyU6f",
  "key20": "5YTSduYAM8BKegN2rrYx14bzf8iaMujyyxHuiWFz6UzSsoL7Znz9LZtbzKmDHrtprwuAtSJCYQrUQuT437rgUuT9",
  "key21": "27zztJPXhEfonUARrRUa8NZvNm4fGprwJPKnuaxo77aY4NL28Hsc4osXADxKNMf4xxzRc3zAXGPQwhjUNTFyVFcP",
  "key22": "4G1msNDcMQAgbnQXZX4NwnXLW8BpCT8ghh2uTKa8cmiWxkAqhxm46LTWAqznVjURYtizx7YQ4zGbaxKQnEcownLD",
  "key23": "VdWrv2h4wpMhEYMFeCTTZc3HSrnU2Jb5fBeXZFqA1rerkMpLLjnhFYqtjgxEYMjDbs8arAw3B7M1z8X4EkkqCJb",
  "key24": "4vuheHHSmvezxT3rUFgtsr9dJqKk6TTTPYg99Qg8ZXMAjsHwD7znn3KDzE3fv5LfkTfQGSGeWEa8Q7y6XVDQPhwm",
  "key25": "288x1iENgz1YkwAAD7S6zsaLZtWdHjtt8Pi9ubwia2zQLM5sE911nMmxZMde97RNXhdcVD7EsTdyHVQbW5kK1DRD",
  "key26": "2AEiS9tp8cLsUVeErB8PdFtipLYaRmBoFycJALFztdbzSgKm2xxuqyNMaGdR3uYhtm5wGRVU3QYhJX3sP3NXVt7z",
  "key27": "5XZyeMDKYMsJQphkmpR7kXJrh6tCpSaRZabkj8qAw1iiJW4NenXYLtTyscaNitpAozMjeJhaWm7ZTVCqfjwuQaRF",
  "key28": "4hs6aX6wurFWBPJ7ipKkKNcNUH4gVohAWWqkH68n1tGGkDp4gQtFH27k3uFGz1PiiK74nJRCa8zicMnfyFCDFM7u",
  "key29": "3BmjvUiHtsEHZxS4VupLfQyTgCQLeMkmSt34QrTws7W2rHNokTvBVdNMz5xKctdFVgfbCKf7V5mdj962G8xndot",
  "key30": "3tGYbedQpMHfQmL4x6F9Wfp58EV7UeBK9YsPpmxBxVMaPodWAvGa5rfnyZRLxLHMvwRXWQvDTD2hmzuEdzxKDpbx",
  "key31": "3Xr4yqpnDoUB5EL8gSbxXVmvWLdXZcXpoaJqHz5fk2oTkK3Zors87S6DDT74ZjZGyGK6jCiyfzKvtZ22xZ75ki71",
  "key32": "2dPi5mLyYSMBx2X5FQ6wSRY7ZZcSxpT3vui1yx1tgbRmmGqJiVvW1WGZaFdA3TcC77Wkqvrvhv159uyizUwheeE3",
  "key33": "G67rJRCyi7NEiuXp5sgk8kYrkcZ4KuEUnoBhjNYbiTwUMN6f5ag4Vg3WFE5Fq5V3LpyUQTvwop9sDDTMS6yCziw",
  "key34": "5bZFavPRNGFwbdXDpAzYfYQZTM1cGBUWpR7gJX5VrAinnN8P1v1dtGY9TTbtmT48TkaiPL5wg1y1WZutuTAtfPYx",
  "key35": "3mQzSEkkivbPjQG3wXgRorQBoKJG9rgSkzSkKa3TYQWN9F4TZjZAiyDQjsYZQvYCp4YUYdfG5NvJQfCQCuHqwyMQ",
  "key36": "34QYqD8HWWUD7iFJKZPvVrRi2xTmuDCbeBMkCK2TEXiv4whVmSyojZ7vhmWe4YCBDwJrEv2uMUcmRCaCEgp5wpdq",
  "key37": "43Pfo71pXGNnbFo8agmcCM7wBKATN8jbVVUkQjgA7BKojRuYsnHjTigrQoBJ8RvFwv9KgSLexATtq7pDix5MmjV4",
  "key38": "2dvEjfGkqs3KHvcrLHujNYF5jMctTcmnFxJYq11NcFHDM4KqVzYvoWZevpPn1tzdYt6p1nZLtkKHqc4PibfuCv7v",
  "key39": "3tZ3LKN6CiS9D5ndwzabSDpzdLfhBhoZYZKSSKLdcmgPkQpvemgXJ37oH3hXfZ21Ghy4AZVGjwMEgr9FSJ2KGKhv",
  "key40": "27Fa6euaf5dU4nVR4Z6d3ghrVv7wUQAtcovi2VFvWbVAxBhNGxr9WDfa7qQzjefKnEWqsEC1gND1y3kMugz8sb4Y",
  "key41": "3chak4f7JUVRFtAuVzebwsPLMs9NVBGjpsNWGAoB23xq75G5xsmYSiXUomEg5QX658gpHXBatok8mNX7bdoh9BHn",
  "key42": "29MNu5nmaMKjwhF1GFHQThNB6B7TnfNnofQQ1vtbgG47MDFGiE1hDgi7PPknGuuLoSzzUuBzZH86pHXHtDFARb8o"
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
