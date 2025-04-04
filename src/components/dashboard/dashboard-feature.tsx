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
    "3qVuMdWiyvEAspPRvnAbnVVZzjDjZp7nJb92Ws2reqXj4nFr7zkMMEGhNHfQrnNVzEE3c312Pdqt6MPUX5RXVkhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Crgap6oFfPfANJQt7iuiLFT3yGkDoXxYCGvpEDLsCjtsYDDbiFtjktY1i5NA2hVAnwjFPikBHwGWgQBkzYZvWCj",
  "key1": "wEsg7ggDcabf9FjZdTz5cQ3jBacgJzkwzThVZMJVidBkox4j2YP621fTsdgwqpohdfEuBcsT7wxRLWJtRcHQMUB",
  "key2": "3ha2SL5E7ZUeWX6RSuXD8e8FCigzZgEjXrqJiLiLp1hKXb667xWNRcbrxx2roAur2Bsbr9QR1iS7jn7ftxtE1ZEe",
  "key3": "5iHnHUzjUxEACuhU21muSh7z6E6gvy1ZJrb3ENm2F6sf4CJ3kuYDVHStXVmenTC9e7fHTMUAB3a3B6VRxrzvhi45",
  "key4": "4pHiMccLkB6fX6YGdXGWUoG8YEZpSZA1s3eJM1JsBVzVnPAPW69R7e5GPSyLYWuw8BahzhAMCDrXZdGkdx5PznFv",
  "key5": "mJ8xxkfUMMWmQKA7ESFbmVhxWVygvjy5CdDJr7Qu7yhSUWkbL9PhBMEAd3BfyiHVkNF3v5hwkY3ydnUR3M6nTXi",
  "key6": "4MdmWFjmEarSyoG9Xxj6zXXqcArMq8yxgvBkZWK8QcTNsEdfvfg2TChn7gUCzMPDfCgs1pV4YEstJhxCGyDKWTpj",
  "key7": "3FVgJpJpBhiDoDkPDpzKM8spKwHdqosZZGm9T4hC9t3jAhhpkVxQG9yExLPwdmAJoabYTczKGWqvZ3ZGZSwvqqLc",
  "key8": "55M1gz4snXzGq8pXdD6tXv5vXXntdMMZwkVvSNq6RvTTY5oPfJHpSX9F6LKhVpgB2EkZqcwqnYpu5Dh4MM8Fc3sa",
  "key9": "5tdungATvqEjwKBcyatjp6ti8QWPu6xeXEi2yF3UEGBNWdEstf9Mch252nvKFhq6dWm4rLQbgUimk4oHPcsMuk4G",
  "key10": "5dn123gb5qYu3p5QxYxLVhyFVmnpSPgGkCeU14JtMbzZHRM3EJ7e9MSeyKuwwo9XBRDYZZeoGxCjKLcqY7Bp9R6",
  "key11": "51niszKV9uBE3SGbrGjpX5PjWcoJAen9oZsm9wpCzUcQMwyxmu7VvfrxZv6ViKjR6rTVgq4GDkFNCf8rKocBha54",
  "key12": "3shkE6cG6TurJNCELhHySaCe4t1BJCgexyZjkHS5FN8Ac3P5f6vSNUEHoYcUAcq36VD2MnQj28K9PXd4Mr1yXSSJ",
  "key13": "43aJGzD3vTXMaGMnc5RbwwPSTXp3Mq5w3c16TFsAeDKWoGYAhU83M4YaU1fL3MvZEqUXzmU7UTort3sqg9G6qzzW",
  "key14": "2C5ozg4jc8toaxEh8bYY4MoYPe9NJb2y1t5zDvUKEyGgudJUMen96Rm2aWW5upJHur9sZnWBQmmWcyKJAXPtoJ6b",
  "key15": "4i2Zka6VzqdYZFDLFZmP5fNQNpBWye85eWCWHXedF39FBQQdcSLSdU6br1nqLYFHNkRZHPbjrpGatwK1zQkTCHpU",
  "key16": "4jw3ebqNC4KWYkCwc25NrPbxdkaDAQ4kW83Pm931v8R5gCuWGtyWc8QMVuPLt4ieCtqxt4x8tCEHxGcJNHce9hhS",
  "key17": "54SiGFyT7j9Gy6c8sJzixQE7GYR1JEEC6SWCmVbqNxKr6GZNqBpZAoMJqJ9a29m9EQ32AqvdgJAtCv9sJk9CBWdt",
  "key18": "2d5GTCLXkrkrtfrYJp55T4LUf1cjLKLzZsnCrwP8oK5UqqzWVH9q7URwcdBvJyBteqQFGU7TVEf1zeYYjavVBfqM",
  "key19": "3aUr9yfwekQsFR7oGqgDqgEkwDHR4kzgtnozgf6VoP575gZigD65NzuW1SU49Sm49nNjMMUgXYCWwrgPBHLoPAnk",
  "key20": "3eYeJtupWh7jMk8v4nviou8kbxUpJEQqdTyxes917L7NeAFP58qyGZ45WWZwEYXBuW2WbUChpjLhx68X5a2cE4rb",
  "key21": "4rLfC4VzGSskvGWiEXWWFJSrdxt65mdumMppMXi9knZXDPuDXbpa1nXmmudKJpBws74k596oSKYMasoGvbVN4A8G",
  "key22": "3EAxsb3ucLfubHFSjo3nCDoK7X1WKcwGHFkpLiW3CbqNbYaRLVzBVLfHr4HD5aTqRZze88ay29KzJ5aqXYtunM9T",
  "key23": "LmnVZVtNP1n3yTASJWy4Niymde4xcHzP9t95WG44EFsM6WTjtupfaUebztRvXwPzgUvqrhPktpRSNTtRwynWHv7",
  "key24": "Z47EZvWAnB72M9nNtZC8tEktYPsgu4uw9i7UpNZhyvGK8hZBj6fQFz4MM9RwLYm3V7q4mJajzyZi27JphQGSU4y",
  "key25": "PN3hX4eqhcZxnJMwd1JDSFBicWfezwJ5fg7maQmvgrhytnQV2C98arYK8edpBmQLDkhAvrZXmLvj1J8u9TRNifn",
  "key26": "4HdRFSpWF9armJdng5FbMP8evETaqcspggWat5o2h1Z72qkvuXuBdCyn5T8C8CQFD4ogSqroGi97BKRYBfeVydKc",
  "key27": "4mGKfBCsV6Z4nrCHSqJrG3S8UDCouXXv253v2GdqLctgK87jifc8a6EvWr7TDDbSQfmLy9msDg1S1opF7SJ6ChxL",
  "key28": "3TZRSQrF9HBPNPLapUJhGxXiGSG8ufVhcUu1U5LNuVwqfzNg5A2W4BFzb8hZxMeBo8mkSgLuap4k9RowGT2miH8H",
  "key29": "23Gp6wobTa3XH8Go98pFxZ36muoM2XdMjE4wR342Bk83FTbt4QAheshKWuSR5FpQVqmVMrENTrSsUFkTzpL78AZb",
  "key30": "2MMRQEkDiwsMzuR3XdhC4oExAXVSxyfqBUZE5GNkFrtP9mwSd8ghFwB4XUAkBwXfNaM4xuwc7P5qJUMvU6yAf1on",
  "key31": "4hpDQPVsD1FWB9Me9eCTJk1tAYQcowjWoBfJDuzDmWL247ywS949GnNuuRyFejPkSajYNkN3PCisXUJkYgKNSYJQ",
  "key32": "5d1Cc2HLQkCMW3coBKAn3xRmRqhG6axYDfFRKhHydJGBFP5hN8yN3rdwsb2eRnh9RWeLVQdA36DUeuLJxwBF8rvS",
  "key33": "uwut2yHd2Jv46La2RRAL3GkfbXuJfeBjqUDm5TdFNhX52vP9Rkcv4P6zc6ddr823V9pJ4MNGN9TMrNqQkvLptfX",
  "key34": "gofVbwpxF6nFLGn2Uytr8QXvfGkEDozKxvjEoC8Xyir54VMnkWhpbtF8Ti8wXCM5TSoi4xcLdABKXZahcVpMvt3",
  "key35": "4VNJrUWZEFVJLv12ZBs8C8K4HdytKSqK9wBiHTubZgoUvKXhAF9vWCXnu5eFMbk4b7yj92WwpHfNVuMfP8khxSKn",
  "key36": "1TqHPtRP7Ebc18BRBQMRNpcfmKdhjUrgjPvEZkHgjNEGgNWyfNc1fuCp28aCiMr88QWCijAKSVd1rLX5cZkpjA2",
  "key37": "3N1cyTgWcpFtLcPfYmDTCkrm1kUf1cUj5wAUEUBD9Xux56MPqaGSdYJ6SVcyiGbRJ8pjmFP4nBrnaKGzLWS5p1Dt",
  "key38": "3xQfk8tZnjcEvHNbJSng94QaxwbdxKiuVSbjWgteUZhVUeLpxG7nwUdCfTzieQypuVd67nCfDaCmTkxBP1MysXwL",
  "key39": "4pLmtVKqv8vPnTE7QjBMGXMY4reBvDkmeLhkc9k3crebjoqchTajF1jFHxqKM8MhEm8yChe182fTKHNVW5EP1skv",
  "key40": "3D14gpjUHoBj35hiRWpyZHk4wQKRxn4xLp8igMjNsWSgDmoPdsEUfApqCTyvosEEAEs8Y2sXrfu1XaNCPbMstsaV",
  "key41": "4ZFS2p4E3ABe76eaigvYTAAi8mgB9cpBLLvTdKyFGfphBjn2X7HZCnKu5WW2bDNdXZ1g6vdLAXJvReBCzE1XF7CG",
  "key42": "2BhfJ4Sep6zrwAXPgc5uUcGW1eQXgydsoZD4HgQj43HuAPoBSDPpwL9Ukk9iLtKZxVAtJ515RepRxLUAkaugf9yM",
  "key43": "oq3yf5nHvQvVUaWFmo9349BeQbP2tv35aH2UuqEY7oRTbRxsEYqnua7MxyKTRiZL84o3V9njhHQ5KWPbnz9TYn5",
  "key44": "4F3M7JxqqwZvjoZngct5FASHrgwP1yVriS2S3sPoBcqzghgWzwqqvkjKsQyy3Xe67tCSheYTzr6FgvGyuNZUVZsQ",
  "key45": "52ETKXw1hjL5aS8mTmHG9ZhMESr8PYgi8Q4t6HckhjeHNfDAyjBY3vDYg8YsmE42Pk6N3XmbQnHh3Eqa56AX5NuZ",
  "key46": "Ksxzx7FBAY9xeWnLcz4QQ4fvWPW175H7vPmA91RjRCD6Jvdz3ax8WfgATS5s9awpWrUa6pG3gRH24yMro3S7WKq",
  "key47": "4L9dEH4nhiGmCFLgcTY5Z1LVnUktdzTTZzbh4yC6pKUetrfW8j3Cqwsj3cFJJnqkDRzoZeeiaE28tE3Z63dZySQ6",
  "key48": "2LoEw623JGumcajb6MugyZSNQouvQrVUutfbRrLHKd6EuGCFuWh63DHKcK2BW6U99DCR15EAeQ35vnng2SCuE3A5"
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
