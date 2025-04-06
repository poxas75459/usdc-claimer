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
    "stUTQx8YoZv2k4C8MzBeCSwFm5sYfPqNPXXiNHsiAAEqHTo5Ufe5D9QRLiM42oieHpG7u3cvLA1S3QExmoXVscY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PxvpzY7h12VxgEJek6JY3WXSi1aFh2axvq1H2tbPY2Vp2JQw8dK3sE1ohUu6FkhVy8jWX8LzyU6NAvvCWKLq58h",
  "key1": "17Tka4WjuVExLs2J6UVmj9EhQBM861rDQzPFpaT7r9XDrii1MuMwn8Csz8QncfvNsbut4jaASyM72SRwYjbdwtR",
  "key2": "Yh4MJk6ikjQCnu5sNzJ6oARiHpFGo25oKWKJN7AmJ7SB9UFX7BiQCQW9ZogHfeMFaQoXJpqoDvUa5MV1LaM8WvR",
  "key3": "5P2v9TdAt8cKTbufwrUpWhW6KTQLSnEgbAmgPFypWWtHyyX3CG8uG2Mx2b1TkhfaAxtVDWy1BuVY9UCzsnUNAj8R",
  "key4": "2vghy8zyL7ePdJo7AjPTAyNDW4aprBxjARnzWE18PhSenqiABVutbL1B5SvH4sDSMUqjen1z7Sun5nxpVVhi3w41",
  "key5": "62RbiYBhxHHrjjkc8L7AG2ZXc7CgRCEuJEPSjHJ7PK2SktRNhGCrcVb4KUFUKJddLWQbC8SYEbWwXuKQe5kh3qz6",
  "key6": "3uxxTRCeQp4oWeKCrzLNKjanKWDw2uiNuQaRHVRLpkMVXCnFagzz9R3bmDdUi2VVDZkmypHmf1EpH4CvjjEFoZhd",
  "key7": "mv9FUnAHE2vCFjcGdQnFqsEK8bHE99NVpwuZZnREQ6psFs8EXDnKS5Srqwt4AmPpEd4fAZNM5wAwknnzYfomVox",
  "key8": "2G6EmVEfYdagpARB3JdggxWe4q94LwNL5qJdZUpsuzmYpGKiQEJwNBoUMdL59E1SeE694MaoMYShSk5kT3UNh5kg",
  "key9": "2jiUxrg7P6dVJbhBGK2VbGVHLdrYvjufnSmiEHzRTSC4Pkgitjy6xtS9CPKJAsEddMEjvPMPBWaKv887hg2QFGbU",
  "key10": "5ukQdrxHBywxYPvCVmSZYmogAWMEgCH7BQoWUrH6YnS2T7zen6fF3gpNsz8UBmsiNSusWDTzQ5G3AULQtkDZfxN9",
  "key11": "5JgkT1HNiyupbkWXynghvLGnM6fqMooYMKYpWDs9XUwn2rHWq2cEEaH5PinizkhQiwKrmGqwdMHbpgjdggCbspVJ",
  "key12": "4oXhYKFveucc12KEQqK3z1tcDew6JwBjTyQTkg1eHBnmKbZBvc6wwN7NKHt8nfTFBtUHHXYPgXUkxbcJmxKZaZ5T",
  "key13": "4G8oPoxbFe1RiV3AuCLbkojcZRiA9TT52n6JBW9ZCcayyyzSyyNHBModiKo3zg4gq5oB5zZ3z2mgBjFDuXpVt9SW",
  "key14": "2a6ZruJdGdFxSupf6YwqfXk7avVcKfQ8n4Bq2Qv9V1T1TCiVPvKYLvwXLh4CxpemB7GEqHojffMzwRP24C2UfF1a",
  "key15": "nbR2iyRJpeYhd9ThcPB47UMVLZzpXyPV2MVvnrBDVWwNtKRSGUvtviYGkD2SbFVNjaDmA7VWYkYicebNNmuURcS",
  "key16": "47vffgDnr752aM4FsqjTE3ZfbpRRbEJT7JFxFQkctXAeCc643erb7Mvgpfufh67koc7tZrWvr3UkzcySYQouNcBc",
  "key17": "32G5tv6VVVQCeCyXbP7yJ4eeLUwb67LDqDhDqFwr3Fq4PJw2xdxkSrMuBWsvoqyzxA3vVdyQNVzKwrNbnkA691ZT",
  "key18": "2nEVuxKqdwcjq88d3Bj9bsD1RTH9a3hFjr3u56KCHNgqT5ixR5G4waQ96sWuU2GPN9JYMrsj2sFypx7CJEnHDB5i",
  "key19": "4rxa89hC1CLSVJhZoFcydusZGCErgPfX3F5uuqoaEws35fKxXQeJ95V5cR7HNeHEg5qbmrbQfqh5oJHHzHDrw2XC",
  "key20": "2UBdyBeouQzcXZxYqepRXphESX2oRDYefqvQhAmy77ETjtok3gLQqZW3XkzBVjzN9JXwji21yePqkTTKk7dx9QCB",
  "key21": "3UPpcF9cQXAZuc5Mg3fFhJiPvA6GuNHnJPpAyvidCMYNXX9TvAUCfcHVfmpaK4J7UA5qpY9EwsWU83dwArcsipRj",
  "key22": "3sVBtzJesbmQTrZWpgKYwGcjCqC5peCJ7PQeaJhVZ2simE7cSi1MPMtTxXXvPbazWmvcZjE5eaqSdBCY64jNqNyP",
  "key23": "fGvt5HESBXhTQMvLZdyeN92v54ZmzGKCbS8Xi7HB3qcFaUv7xD8JTBy3Ji5xZvGzYqjBNCHaKrjZJgKAjybwDkb",
  "key24": "22k4Bj4d9A6U2mtUsErfSrwWNUFJ6LHPqM1GyR5Mkfts7VTuquMpVHAdGTt15BZ8X5X6mvXykwHdVujYHA5nbhdy",
  "key25": "3NuqbYRP4bESMHU9Pv9WQdnSVvn8kqEnXhKq7z9oVeokzJResephfKgec71ocjRViUWUnAcEUdhXCvudbjnSDXLa",
  "key26": "213Vhy8Y6q9bzhswf2j6E4JqcvACe18JHSmtkEGEcY3ZgYf9duseMhhu4EK7B9AdshHBKw64ZxPAXAqgNZiXS3dt",
  "key27": "57VEEkExu3QGGKiEH5dzqrhLUCHfjYmnYbF5TwBEerV9Mb3HaZkok5zjj7g5eB5YPPerieCsnGMy6pgjtKY83eS7",
  "key28": "21yD5UkGhmgzwg4AWFz1favoTSCDL6sLsKFLmQaEs4WXwNntP7Q9mXAyV9yoNwXbMRUmcQQZAFzm9L5ze1izA7cC",
  "key29": "fC2yeX3ozkCoaRbMQEkDPAcvLREiGvNk13KmyjQxftRG6uiPGzymNxVmCcVYdn2t7DFw3a6LKf89gd5oQTij7qy",
  "key30": "QkBDA5g6663mjXDWDPrTQRkzxSQqSqMnyhgSojTrWsBpCb6ib17jEZNbKkgafTqDnEnvPadBmXHJ5xX6QUJi9Gs",
  "key31": "3zYDNxweDUSErB7e1iiPocPykgb26r7R8ncSHvxGQjPP4x9mm7HXgfqSBApt7BnEyf93PbwC6BAatK11XTJfXsfz",
  "key32": "29Jponk3jRXsYSYf2BETR3aSmPUXtabp4Up9hXpRXcuVjYMqd4yyLeMGAc1y9DFAoWfe8mYysAtpc52bxzsHmV59",
  "key33": "4BadcucBuBtds17vrJvd1ezJYXWhXxekZmZ8sQKgys6gsNwE3uKdMZv8TiWx1Sx4pb5wjtyBYLd3yKqaJxoAv2YV",
  "key34": "5koV1ja1MpS4Zscfk5pKcAfDoiEgG8cEZZLMTW7bdPCPgzL55eaok5iqm4EnefnTBzerzUX9H3QLKoNsWx413ehe",
  "key35": "5TN8DJR9rtCVVRXrVzaM3zTZwYWkgqt7PAHsb1rtkD6cJZkVgxNbukwJqNc2wwD16MGfDFiRk2F5mDKHLbQ3aPVh",
  "key36": "FeWcJRYZnkjHeNahgwiRHBB6aGRvKASWZ7cM84JeDj7EwfMXVC7n7pwKJjttom6eKDQTAERA1nXkzoyH7rSHkUM",
  "key37": "4Wp1UfPcu42ovz1y1yTuJi44qzDbz6yRiC7x8KQgsBkuRCWiripB95Ljx5EvgQgxkiYEim2y3eDzUJn8Zk6VYm5X",
  "key38": "C1hQhosZSoQCKgYpza3czCXLq2vkNN5juAwrkk7D8h9um56i3RKz4wL57H3KE4HAq9vaFJRUAaZBhJfgrpoFygJ"
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
