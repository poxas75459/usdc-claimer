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
    "2dzUYwjLLw1NfdzxG3wTRrgDSLV7FuWrHwpGtVrQAWJM8DvwF8Kg7Efe6Hd2SGeTmUscs8sNPwR6x7ZgTykvVV1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gmtx3awsFKjW5inCbLQBYpkepJQKCjJxdf9r771zZHkFSRo2fXekiZ9PGz7sQUN4Y7KwLEG2dccCioFBQCnbhT",
  "key1": "4h1Hq8nbLpvFn7QWWy2FuuhztMuE5DDEC5pHqKvpVDJGKJ8gj6QyhZ1XssXutTPs21rjQA1csaWRVDnTb9CaH4Cb",
  "key2": "4b8nzcT4KN4yx3xUEGssqnTcBeRtXkxnrNudkXUomanLviud4EuegFBWxW6xjrNMyKXPwKSJFjxThaZbpdhHPLxa",
  "key3": "2mrJQo1Ui3DH2g2SG8xr5XFxyu4Y1CJMzw5uLP7gYFmE4jQBZiHxYnFDVYEBrxXwPXtEk458CeBKVwjkzewcV6N5",
  "key4": "2jQUSVuAPccpe5gxmwhnzQuBHqouYUJ4o5PKPPxyuxdW9945rKApZdy9kDgWakDpoZiwDVGR7WP3uEB1NkFVn8b5",
  "key5": "4oUVeMYuHaokjNmJtqe3n9zUWYVGeTskfejSqngMFSaKTebs9fnncmyehUoYahVbx9ppDBoh4xPwabSuwee9rcLS",
  "key6": "F6jau6BxciXt8hwcbcoEoCa1oz3jH9cJuUB9HuW3AnxUwheqwDVr6nE7NdUhS1SU4Xf77H1QB2vA8SrJHypdf71",
  "key7": "2smFk5fDhRLZakJ3Sk2S1NzZB9yHo2v98hrFSKyCbjB55CMWe18NLFU8Lc8NR1xhX3z4sd7EVqSsPgd9bHsCRAG1",
  "key8": "5Kjwz6AUy2z92pyqWaaqgyL1jWpGqNucqvHcTbAZ39a8VeEb7k9p4rNFLogfKxcjHZG5xSsyTi968BzfhQEjepUc",
  "key9": "4JESrd4EdKFduWTbiiTeudP8HNCn1y1AompR1hi1Pg1APn3LWboKzehULFWvy8y2489oNi7m8JBWCNsQd2i22Xg5",
  "key10": "Xrwddm4XMmLAzaoF7oY1gYSL2Pd5k93ztRGgFKHEvuFZARN3VsCeki8XwPZyLz5USvye1FRpTXwbJUPTkycuhDP",
  "key11": "4KBWvRntgGcvBn6P6nRsFYMnDEHHtH7X2som4E1rL6cp6Ehvfwh8ohVMqCcvCdE2cDmn6sVAELv7PyYbV37BH7Q4",
  "key12": "4X3Cn17JhmZNTRw9ra3gm8Gz9tXWEF4r6YxjMF6uqV4xpGy83jiV7Ss4oSA3hd3wth8hjqCPG33kaFzMXpCzNJh5",
  "key13": "3RDBquA5gMxjXj6aUvhTQHoYZTarMJzRHwaFTnuH9sWy9B9BkoTUaGJYFfYNRZhVs8UE9rjyoh1hFwRF7ka5et5M",
  "key14": "2MYRvXRNQZNJNLqu61Fnaoz68dRKchTJC325enucmQ14gVqnFEUebZjDHt6gVA6RPyWgYtikvHwRQUHjx6RjHQh5",
  "key15": "3oqeBqBniJyCi8KmDNG7xiWQfQgqFMvKtC3idmCw6wk2hmD7spdGECL8TC3VYy5HBcjEjcUaKPuvcnVA1Y3P9yyL",
  "key16": "3cnDcBf9UFyGFayEjGinfFN5rhnRjdFhWyFZgvZ92GHztcVyZMcN3jTaP1pL2q6Ty9FEvezqqFgCvavFFEtMCneH",
  "key17": "nyqtaCjGyHdZuo2CM7hgdNjvqVqbMcbzskiR1Z3P8KvKhfo8XPqkuvd3KzL5zNXMDkWdFBqU56kKYFLFn6f9Zrv",
  "key18": "4CimXXyTZGRrMQNWjozLtDUEQs2S1TKFaV2x9rrdt5mUwofeDaBfY5smXHqdsBhxNpjeJAeC1dL4J5X6891PYfGK",
  "key19": "4G6F74tzTci2K6myUEf56d5ebKBkdkgUS4Cx5kNK36M1uZTSYrhGYRhdWmLt9YgDfMcxAsZVYnDgWEv3bRxx82ph",
  "key20": "b5MBMFQwhmCizTtkwuVJRiVSof4SJ8PNXbHZCvWqtqsuZsmsbRamo5EV6LdBvUW8FTUjDjy1aWTV9DNT3EAp2bK",
  "key21": "2bhAg2wbjxpkVa7if5rm4LpJRPwYecRdSivJmifFfiwxo4nXWrWCchC3CKAu6fhYNu7KaRzMo2bt1onAGZ9RaF22",
  "key22": "7uxYAGhajwNCW5LgGJnDrXDRyvnx9hADHTdbLYkQbbhL4Ee6kJijqadbropq4dnqKmg6eW5sU1HBjo9Jms2KTcP",
  "key23": "3YHWEjAK4VSm6oryKQNZmZtQJiMyD4QDiwfw32inCn96AqGmKDC8UAMpvYHhmcG42zcTMahsx6c8xWTS3hu6AcCN",
  "key24": "3dddpuP1egyPxFj4ncXTNwuXzsQ6wRDKUQZCsAe3QUVWnJwpUJSzEA8AqXrm4C9gQnGq5LTRwR4MijMAr9Ria4w8",
  "key25": "5LFvfd91KySMaYDhjaTe1nKQTdi3SGb2PDzU6Acztiw8SzHunMHRtnYYRWBLPycM7fpZxLuSaTYzHZfVJWWddfD8",
  "key26": "5fx5ghnp1ntkrEjVHezwwB1quLFqh7y7qheoHcnNUjdGBFJNHg37XebupVzgkTwLTRzMxzLZyMxuXNendrFpY6c3",
  "key27": "2pNjxvChZne3KnEnjVXeYu7VTok4paPLASyj15ZJxuNpN9vpu8BvKk1GjHu4VvvNGHDp3mPGAHphcrHtcMYRDxTj",
  "key28": "jTqHD115DVkkkhHybtum6zfzwvV7kJUhxnHNmftEvGq6MQJXwXTjvAYrcdB5ZtrUGX68oURuz16rzmcnbGfZAQJ",
  "key29": "2g25yQTErz19nraw431eyEUVEUK2v5JqvAri7ujXQ3gCFKAPFaSAH21NHfAxDDZUQ76YW92k2iiHE1zG68iqm8t6",
  "key30": "5ikVsmBTKBekFtiKgQfpFF6pQkrYsMoNtAuhQ3ctkQVDNPgjUHSynmjBt5zjH81Fi18FzarfCfPfvAJFxYaejwNo",
  "key31": "5jxxwCczp9XMP1J2bxAwfmyzC8e6cTFqFAKraYGZy31TvLwtNcqUyPW8uYUrUGTTU6KDpgMcFWK2gEnFvUrTxEc1",
  "key32": "3gHFZQ4WRxkzAJMe2PpwSPbQmmRZgsZFutUmKocMLG2KfjPqXUNaH3vVJWdKCUispnLW8rwPjorwrb9x3FwQubiK",
  "key33": "2bwzD9GACEMk87xuZkPy5tigxyYgrS6dwDdvriGzuPc4LASGtYVnHHNhjkdRdUHxcYBqckKfJCZDVmqjin2i6FHQ",
  "key34": "2EfLgHdGnxobFpUBoBisVrMYsxRB7ojQHqspNihCFKxWYephmLvz4Skzg2FcNnaCsxZrc6KCpuc3mrpks7Ezb2Fu",
  "key35": "HfHDFv38VJ3qXox5arkXxg4yWF6owozTmVhbVV1gG7oGbjNZcwu7G3m8WVkQcCaELqjHwvnJq7ii8ew8G5NaSkT",
  "key36": "oACSpFNyrrsWMBukbx4yDQzoBkttLdwmx7GFnu7vUXStWoA2uvi7TMRSYyKWR6gAYDuSH8Cx64K72GtScBRyx6m",
  "key37": "2GwP72CsMSL4KvX6MgLY9Jpy4xa2bDqkzCXvKx68p4hV53xbWrMNYPr33gMPFysdnF9TCbsiGTcCBQiZRg6LyymW",
  "key38": "2SvQTk8JEfg8HvVoeWrkmkmEWF8coBdRmLzrn2yt2Ho9hzuUDnPgTdGALSH2f4fpuVenTZwuDAfYPmyCAqu8GYHd",
  "key39": "4fu3gBT2aj44btNZVpoCtLuRMCa3rWKtvCkchRp6bBLDQ637iL2TruCxZG9cohUtLaujNLnTU4Y9qcbzECHsYGRa"
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
