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
    "3rgWXczMNZRWfn8JrfZR3g6my3hcb3iADVxuLmD9Bqv3Rpgg8UXrcMJmyCh8TEKWk5DgGkxqxEiRQ1rDWDtMvG16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k8HDJLKP14yBAz3T4soGmPh4usiZwHfBG5DYCWJaGK6aFkt6JYPa9fDnh5Zq6rNKz6tFZgAPLHSKZKekKVa2Mxw",
  "key1": "dWZQfNkqKmeg1EqN4LbKVacgBtp2E8wd7LxkQrUwHRHxbWREM32NcvRwsq1xMRQ5RawpaYnc6tVM6MqzL5Mxm2r",
  "key2": "24a7DjvjiwiFvnqWSy9PZbyeb9p61xF5btQnUt3YpSoiYP7QntLSNC65iSFABi3az7xsDVVgsYuZLVE4wzkesfW3",
  "key3": "2YejY5fo2rvxpAvfRjtFr7n6PyHDDrL4pazCGjKb4bCyj5rtpyS9g2YV9imBZo5GYjKqXudjBqmAdqNXLwix8Hif",
  "key4": "2MCJqs4fyYD8NnCQF3AZP4Tr13LaViZKz8H5PhKkogDy9v6RNwjG31jA6b8j72a6qE7Qh6zcWwHXexLUvb7PCGrw",
  "key5": "3aEUbLohvjD5WTMVM6of4YhahHxuYz7LGdrD6HXswNVJtPrHuqQjuejwdd5wQRQhrdGyLsFdo6qzxrnVuqofTp5T",
  "key6": "u1tTgSSXa8dYSc25o6XYPFunzyLwEo9pwGBfajFoePMYu7yN7nLc2dGFhmNJoHcBSTbEiEXRjA5Qebg9MkaT8ub",
  "key7": "2z4pqMrUt5j86VaZPxPf2TCCz6xS2p6TrLNwQSwpj3YGfXmyVCvoH4eDcgfD4copCo4o9bqznAbGnQsy3NLWjLM",
  "key8": "7ZxyL4wDJhmViyKYGeJ5pL68LNEWXWCW1vvTGFHtRaqzsHG7Gd7dy4RMe7orXppkGGgfhZv3WMszvfsq1aZZkpr",
  "key9": "2yteR3qgxmHJ9X44MkwGuuybZcaXwNrP8z3zEnMkDwYboBrdhnp1uBrEoBTDnvFBrrrqpLy27jadQTjFZq8J4fwy",
  "key10": "5RhbSRe3UZ1YTGzpsLZfMMzJU2yuTu1DHxL5C8psi9Poyzvj187vK9xyavP3zrLub9dbLbm4Vyuh2Dz5uUhKBiRn",
  "key11": "5vtzL2JM4WNbV9UZa7kmnVEkUWYmL8ThjfwPrvtLyxUkn79mteVzjUCyUhyqV1ZJPN1XmowPjXgwnRV7iSxQ7gx3",
  "key12": "2nhETJr7FbNfgheimZLy1wTJtwnBCNevNDVD7vw8ztMamMAv9AaaF1877xF4xbP4CBHnCdaQGkwwqMaq5sHryTLd",
  "key13": "CBh2sCiM5DFPg66rJUifrQZcPsPt1NB1ji6PEGCyqWQAtruAaqT11kUWH4ccACRPR9tCd89wVrJuuv3v57K44TL",
  "key14": "3gmUvLvwFCvGgrSyjgspnda9xrFxXygYePfvnhCAf9z2PNSgmMq2UzffYVYyvT4NP7XS1eRmuP7buwVjui4m8tX7",
  "key15": "LG8UXqrLuSqFa63eHHhjYLHAE5ZMfQono1imi8Ej3aYEwrFFLwAtMgmWcJXCYB24ULKS5r5ZAksdM1o4aGssd2y",
  "key16": "2GMhVJuFjuCwG4XhSgnhppGt7seioGst5jADsjaeTjf3NgsWg9eHnBdQHXwy4cGjfZFNhx9DnLXfwxoUiK6Gbnnd",
  "key17": "5eeihPFx8ALjw5BuLe6FQPdyTJeED1zvqZ3bkRonhXci5FGLsVm77FvZCK1ZRqeSoBz5sALFpFQoKksoB7KYwQFM",
  "key18": "38Xz62RPoBK6pfXgE2p42Q4anFThkusznzsFLwqMXx4dBJW52y3L81d8FhDUS5zUVGKTo5MqhEro2D9odn41E7fA",
  "key19": "4xW2F4yYfQ39SW7bwZ3vadcCrfGMJupRDss8FC1ZujbMhqv8Kuvf9FbourK66r4LzX7PWAQjGE2bPZ7C9x35FW5v",
  "key20": "4JMiemjJDNoAJoMTK8JaWhtEREKZ8bkR2hyux4FViENpF8PVFJxcqSrCHAwvPF428M1KhwojnuW1o2S9jMPCHyX",
  "key21": "3u926azLGeigkZjFRH8zxCSp581fShrxm1PcW5Mk8kATx2cFK2zdCmNoLsVB9DxeaEahAFaRT21sfwBXXa2xgcqJ",
  "key22": "3cq7vNHkG95nxQq5L1WZAozFkjPAeBfbGE77UjuSJ3wpeV7jNzYyoz7hb8wYYLNxpyhVgWP1q915gPZqxguHLZv6",
  "key23": "5NnWP2dginp5feyPwjNFdy34Eio2oxceaYzL4Dep3iSURtnv3WwM7PvwZibf1LhZ8c6bCda2EfvX7DmByadfgwrD",
  "key24": "577sYdmCzu2VGtJJQbNQwKNz21LJbNkkSAUP38NBpR9qkNcjNzNFAyNU8omjvHgsCLSUKVi3QcBe9d7BdtZyNJUS",
  "key25": "3oPH8fRk1XvfZpVSm4hiVRkAJyhWfGGk2jJYJxkeRZqwBvBeQoYbGbsCjzDh265BdSRV99Eb3BVxkD3pij2F9oBp",
  "key26": "Bgs5ys9cBGQY2Xvuz5NMXc9bUBRfkDa4FzTyzNHMCaiyCDzpcFfs5iQj8EM3QKE1sLKEp6AhfLgCzVbMHb4UTMR",
  "key27": "5872eToR77UbtEHrp3aAqFB4Wim9V1Vok5F2DH12KQWyKgNATYhb8LjeJbsPXJ3kdmB8tVBS2wGaefJdjPRoMiWr",
  "key28": "RkJejqLqmH2J1JymbuSYD3XJeSH5nGTcxhutFQwiUEYrYotKUp1UmZ96VxJfKU6VXCCtgpWqRkMcmphaMzg5yoz",
  "key29": "5BdFuQYsRwVmjsQ5TDaZ3ei1Gi8rzWTAwS19ETKQfAYhdJhVLEkJrmSeop2VuDASjoBvNNBa2NWq5t9ChFKu9izg",
  "key30": "3dCQKgD84cngLACDNZYCnvbjdfjQZ4DCWgCZDaFyNAKmPhGt4XV5zh3HXkz18tFNRpUqVLbsyRoicKkE8XyoQcFY",
  "key31": "3Uu8yYr1BKAdrzLYp2BsfdqpEP6MiZ1ic6kmXxcP3MaAL5mZBP294S8kromBGG6z5ksU4FCvrnn72PTa66w1zwif",
  "key32": "5es2Mwq7E3MnT5KRSqoZhuhsXJa3xALdN3bWq96xdwgP4japNqbDJELqSwXBDerySHwNEhSAWZ3ZBSi3E42Qr9tQ",
  "key33": "511Y9bDccUg7MEGncVGBvv4DegaXKYLtzdmqs6oCtYkrqEDhtswZgvFuXoijZRvfR3qkXge4M78Djty1KCMc7MWT",
  "key34": "nsxvzDmduGGRFcGjzy2uqRgdAqLnXv7hnb3uzHnpdngBCDzqwFm8NurzWY7LXZwGReuAuWTE7kEB3jyrYGCmcCT",
  "key35": "5vAx2yhutNDTzSsjbyLx9kiDVAQGQmwStjLtsxjH3PZk8i7kWZGq355zTfpxSuJUErejc528RGr7b9ZErmituxLM",
  "key36": "5P4cwpjPNYF2e3E2cSm3CxF9VasvJ57zGjMKDtNGB1FjpKVkJoHbrsvmmc4UZNU7bAeT3iYZTnL5JwciV564iFHS",
  "key37": "N1Wz7j9CgxAyJRoVcr5LvSrTxmtLrTwgT2y3XhKgjACp9XTHkrefyvtGQxSg4DRw6VhEowDwVZ6A57AyJuXa11s",
  "key38": "DCmVUZyG5pdjZn9owTMN7ZFHPZmjLKGhsth3ydsXSNMHSPjCpNDUYARnrkW67A2oTGXhMApRYXd3LffwTKq2iK4"
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
