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
    "5XsQNbAawHLzufuzXrWcGWFo6r1D5Z5UZz75YNUBV15no7o1eMJ5oraBADgVcWXiRnCtNDpN4GeTVFaFnUH7RXtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z9HBToM5iv7psseHn2UFWvETWdWTV4zM4wG4TUP64FTkL3UP8ViChqxZG6p9CPq78VFR5SQWPam3EpCixtVJGUg",
  "key1": "4QqBtAXFUfkznKHJ6BuRJe7jwGUae8weuicLw7NsUa6WataBeiE2oDSwky9xoi9tUAriAxAnn4Gv1ajyZbGaoAg2",
  "key2": "3VTjTVmCUrE1YQg7CYDFW3ujQD9cjRo9nUWf6ou6eeaEUH91QfePcqtznMFvEe6zmhbppiSe4cihrA48J8MGuunG",
  "key3": "5dAjmewGnrQUBkftW5pmCysxwZWAEALKVNFeG2MeppS1BQjdXy9LxKr7P524KZomwDVG2ASZZmWqJripqUvcfdxc",
  "key4": "a7corsbdQe4AtMA6sQBGS1cWXpQU5h6PULz9UtU1feAHri7qZVwv3SEjsHXSe57Svab82pEz8nR9VgLVLTnJUgw",
  "key5": "4yH31zmY8nVgEyYm8AEdtCt9ny6UrjkoVx3Jv5YJJzW9XsX9CocyKnRbLACXabAJkuos4Q9ynpvCzUVKUUcgkx9E",
  "key6": "478SkGFoQVFoZqXZkS4XTPd692xTFBQVU2sSjwdrhaubdzdxLs1UGLrp2mc2CQsDahbvpGThGtvRqcxDhZdP9UoU",
  "key7": "5LbaYxG52jzoj3GQXuE3wixgrKkEHUL4xzZM9ZcpURcZS2cmXDcYZaPMMta3PsHdoLykh79rNnK27P8eZ5aVgXU1",
  "key8": "2Lr1mMmixuWBGab37iN7yDaaPfoc5LbfejFMn6jw8q7ucUr6ETaLznrHHrkJwcQhU6H5HEnK3GASSWQZR1HRrx1r",
  "key9": "4tSKsZUzNHVPJ9i3Jaog5H3PqPvavTVqkxQiKxA4DrWgZEkYdF6tkdMvU2G3Lk4yXDidXXgsfLnQwigPxuJ3bY3E",
  "key10": "62Xo7H6oRDALtL5HQxJ9LiaQw9zuMTjfKVzgiZkYRmYNTZVSYFx3b7RYsbnezSM21HqDvqKwwbHXG3yesY7FEdN1",
  "key11": "27u44BoAkNdoteTULJyjMRfegnAqrANPF42yDpKjjcm5TDeg1rhwK6xoYq5H1jxu18CnQ9DeuXFtTvGphLyRKDiT",
  "key12": "4ttnbS7Z6d7Gy7BL9c9wsfPohUZSDohc4cdhrfd5c1qEjkgrDRcbG8rze7GuazLvh5HSJ82n1NBH6XfaNAXWJjKR",
  "key13": "2PzohiNLsNx35WZUGgGYsUmNAUXfcR2NqqYGejSucgL1kcPhY83J1CoXejQCYBmhVbUJXj5WrDWiGMUznZHHxxCT",
  "key14": "5jw9fdcXRqP9UDfdsEqnzL5RYBo9XWT3Sp8R2fTETPEcHeHq1JehucXEVBTS9fnDizdeFrdwJNicTyRLZcfJXF4q",
  "key15": "4KajHtrGWRDuimvK24tPB4uJk1But8DaiyM64AFn8Y5Xgpy19KLUGxryFFri7kSitiz8ZdKRoaYCsmAExXuvG7Z3",
  "key16": "2uzdujcYfG4aGvT8Z1iTdWLRdrirUMpfJ7Jr4j9hQhDvqMQHQtmUESkxGz5BXBiSg3gqZtwEMfZrANVBkFfM2uXQ",
  "key17": "5H5BS2FYjN7nvvpT5mDr19BuoLgieXxvHs2k6djVZdFSxvoEGgTs6Y6giH6pikf5boZiYvitgbksjkW3GJ8tJ29W",
  "key18": "3a48s1saTVQ1wdjvZ85W7zEJDQTcSZFRC9otUaGLTMiitLUduAj9YXT2YDnT3xsQWk2nEfa6PeHD3K9ZzLpFkk1U",
  "key19": "5VGx3KjxuYvP2XCUWiwtNZfbfwcviveu3cgkJEXpzunDrhWAZPDs2u11yPRbQDCxkWZixcsRftpwsZwEsZq4x5pD",
  "key20": "vyuyVUmDh3atqRePUh9C71YZxcczrV2zuCaadrr8vJQ8fFif8b25i4BHAJ4Hqhi4erEyAU8hAdMqJF2vf1mmK5q",
  "key21": "9Bg862qEgg97hqTGJPaxC2EoDCSsRWfKoDsDTBeSh3FQ5tCE2gULPoArxkam7NsSjfY2k7sjYzrApSQfQzpdVKB",
  "key22": "4e1u9exLKQ3mivcgNBBmesiBzmjkGdqqFaza7VH8mmQpxSc8TSS2uuZTYURhVG7CcHdy23eFCwt45GosCvDiJRUz",
  "key23": "u74PzHE1Jt7bTT8PYiGcEbQV2JMdKjpAiEvU3dHJoPg5ek8qorgbJEbodEAzjN1G6LhHWUjkHbSWYDAh3jK7fwP",
  "key24": "4YDqGhqqE9cNduTCC32NtnumuNPmRuHNrTZu7eP2CsSpBe6q1ZqBgRzEqHNLWsAsdjEevaSxjdcAzSrrLyW4tLhY",
  "key25": "3WboRtT3DmAiYX4cB2zrKvDHjVmy5qiKj5qoXziHjuDf6Kb9U1HZ9TYzPMWHfGAtvosJYBGQPrXyuBJxsHaKLNEX",
  "key26": "4a4iVbK8e4aaywZCxFDe9Cfq9gBeDMRjZkG7VyYNhSEM1TFwkSYT5GjoqSLUZxPLYSotijpTJctnzxqi8jwVNPBX",
  "key27": "xerTETn7HUksWvHhn8S8zr7JNJQm8VrmBhNrwuPsDVPmU2dD8BTmW4TTbSyYP8rB5PNVekZk1zSvgEtzRrh34zf",
  "key28": "QTR7S3g9HPCu2vhyNr4XK7m2sJ3YkNt2MQbFo2TXzyk1hgT9qu8S7nSDrWgJdYcCq1JCEVU553KKH16rwEmwZLJ",
  "key29": "2CXC53BiDbi7ogtByL123hpUknNjxhsdPS83RQmmz8noA4osBSR5cP7ivY9x18Ds43P6ixdaBNXWc2Z6SvHLekU",
  "key30": "3UjcTGkxhVo8m52B9mPxQL7sZVUkeD2ievzZoUXpAzPkeYx6oYrbwRVXRhb8EtqPa9VoT1VEzvDpbHdaywQLWafk",
  "key31": "5MZRGUEA64eF36CMj3gTX1ME2TP5ie4BUG4mSNCxCwUtRxtCZDkd5bTTVG6cF7JhWKkTWq2xYwes6uHQC3fDrJD3",
  "key32": "39NcR4xAzxQBCKzfPAYhyTH67x4EY3yjBz2TnHWu3EMKPWBaNWqa4CXZQAYtSYWzZuDxkYZnc3aFxhjj3aS9Wt9X",
  "key33": "6MQBxgjymVmAQjW4jwwwJjTebvM4zfeB1K4FDkTKnKcrLLZno2MWzqGzwj6AkCoFVjgTaU3vTLJMyejbNpz9pDs",
  "key34": "muW9JYn3MeHkvZEjTWR93Pu95TGL8nfgJSrwKsc1MLHPJyHDk2NTLaigj9RjiqSHgWF4ogFuNhq1KGin4oyPghG"
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
