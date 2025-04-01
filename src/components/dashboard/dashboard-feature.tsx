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
    "4NRz4yGfz9L634qU8hu7aPaeyv5XM9GzNvhcziRJhr5nh7tsxQfCJzXBNKBqKrLQhUHoTBdsf4DKT6pXu2uPEkDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LGz8wAnobFMLqZDF6Mc6T3zU7ggpUJZ19eMFGcNLM12ZqFYzFEE6ysj17GqkdhLydfw47baWssywjRy9CqmQNuK",
  "key1": "4hBQT8ogrfEjGGHNJnTQNsi8kVk6a8HfkX7xQdhxN9JgZGN1gW8wcLzHj3pHMfQtJphmv3bmhqwmFoX9QosehP7b",
  "key2": "2AgXyTFN63uvepnJHyswNJg2jnwbZyJqQSQEiMnCFsAmwsDbzGzN8iyC2VnGtv26cuvsMiZntZJ435YrsERWYWxe",
  "key3": "49Yqq4xdr28uVC8ossVxatbvemyYGK9SzRaTZH2GMAhj3qRtfKGeWor8USNthRk5V1b7SD6frX2UQQKHsJCvAJ5t",
  "key4": "125hZ5F28uF1Tvc5sQXnx3QoN5994JR8yRi6XtMqUCbAbfcEzTwUctSnCRfB8Cu72ZYwUGhPEFKVpY2Gm9S4WMHL",
  "key5": "2BsxkAHauV2uTrArhSmseSn1iPnb8Q8CQ5V5Uuq8yLSNYM8Sf3vPWVDUTtt7hFAycRNjtHD94Ke1Y9jokw7YKFKL",
  "key6": "3wLXAWE7CxhJiKrjpURLhabWZyrfK6Ak8bGEknZfJEXwDp37p6yQJWoCDBjSi7S6X75jGczMk6D9sdrNi4gfsqJX",
  "key7": "38c1MBetauKmdzgtofuuudH94b1hb5ct87VSKmahNWU6UqCdFXvH1oRQQUjBDwHPDkGHBQtGwHyGTiANGWijV4V4",
  "key8": "3TsDgSwqREhR6DRkeAR6yKn1pAiPpMuzvaGdoJRX6moJt8ecorh6AHHEwd63vLhrmPj9J4DjL2hHc7q3HFr8FTWZ",
  "key9": "3aLALihbV9Y6MWZNumcJsUu8d2BvfZsanwdN5kcaFVywCNf27ibaFWRMZTMBDTYRjmy42UZZwUGJCyhVEV8rBfU9",
  "key10": "MA1StLwMvXMECUmBUBMt4AhwvX4skswsdkyvzUbTsabH9cXx7Ds44igXdo2eSdvCnLed3UMyFA14hbs2Wna9ytY",
  "key11": "458jEyANEEAuBV3njQqXUunjNYGBW6RrYqep7KME7QEBqdiAcMjJqsik8CFBiBBJbBgPuu9kHGb5knaP113qJrex",
  "key12": "3upFEFgpo8ukhbh2JymNPxhjMMYn2H799HXbEyTrEoQUBUX4bfXrDQVbnH1HcUVYzpfbDGs6a2dqWB4qbvc7ZWwb",
  "key13": "AGtzf5czbvf4g4p8KEreS7ADJqv4kduYgTjLHwWYoT4Ahkg8JfcSsVwFEBd5mq8DkNEJhKgJmc3ajU4x1rmGixx",
  "key14": "xx4DF8bGovHVPfukb9Hm1k5FXSojFcPpojU1FoHUtjuJGW69hey5hEarWPxMs9xFfDixFdeqJLWJ94ioGeNd9P2",
  "key15": "5pqrjH6MEKM5ebPeobdd1Zs8i6uLuGsqFEj1hYAKQdFDSZFopm8Mp3v1Lt2YsXtxDSuz8Juw9x9HU1dhgpWjVeie",
  "key16": "3robJQFbtdA4GxEy2ZinY1GRUtDtoS6vmUKjKZbpAtZcAK2CXjPjmbL9U1bZvgtgxC8GboYqi4Pkagnz4r6iry5q",
  "key17": "5bCRSqNwAMMUgMrGMFyP9ZsfkmzaP7gqaNfUMNrRKcyLfW9asnabohiVXSSY6mu8DhbBppN87VWPiTs8fk5BLKz7",
  "key18": "yE3W56THYcAZYQi7qLyzzV1WmovE5SdgSTnWHfhLY4K78EdGS2wQGk7wFXDuhJmXCdUgpiR8dr9uDaChAjn3Sow",
  "key19": "2oRSkZeoL9mcE8WHYxU5L9kQg1NPAtTKS8cuBMiB6TGjTVQ9gQqVuzts5h7Z9qSjABsRzA4aAvokcyhsFuSPsSt",
  "key20": "HJ8cqBaQq8cbc67No3wdZKtwR2gDj6pR9tySqcHE9wsGr5D8rVNCx3Ts4iNRiuczZzZyqXpXmsA6whZ8CzHYEkB",
  "key21": "NqEbjKK2SWpyyhaY6nmt4EijFVuqtf22VDQP9FEjSMh8orNheTVjiL4N2uDk9DKSdg5GdyPZZ8RNpUSp939jA6j",
  "key22": "kcEx3xXcjSTuBDJF2tL4R4hPQy1u2uVR2jBCr2ZUQ4UZxoecy5KESCN52ySy74W8QSXsvm8W8iC5rLPUFoy6cvq",
  "key23": "4z46P8c29btj6d8QT5vujbHjhpg4281fnB9qCHdnKhWeQxd6BJQfmVZzsUBn9kacw7bVmnkw86nBi4gAacghFk5C",
  "key24": "4AtokDFXGh4MTz5wJ7uQZW3t6JC9aAWyeSa4vbvvrgYpMaFdxSWtfdUn6cdkfexW9SEk2bDMkKtqszadeYgsxMcB",
  "key25": "2zKTxPFctDZ7T8CtMek3sHE4UjzramtvysJfcqJp48FmwTbkC9PnGSwNB8S9WkCuLrkdRqLn2qPMS2AY7QcE5vkN",
  "key26": "4krHhX2kt7SZaiFWQfBam8nVQ9Zj8zCBuneRJnBvpWxrGgEGAhNhEUXbFzkcR9hRVKeuGBTN8UGgkL5icd4FKAo9",
  "key27": "PV5hLAZzMWPoDP5kkboyzMQZ5pwRhgDwiUmU7cXukB6HotW997eNC27xCNFKcQpc2vkTXhSqYBh8off2SRH1oTw",
  "key28": "73F3saMtdq8z8Htr1cLdq3v5nZixazSFApghAHSa7yXhzBYYtk7cakVSACoyJ6gbkqJvwv2ot7Qzm2q7npXJSae",
  "key29": "2w1H3jJrqbZfZf771pzp2teiL6ZXpB6NzcHAhN33FjExEKtvqBt7xDR9og8Khd2iz3kfvdbAACAGv1scSxyhxNMi",
  "key30": "cwXDSJYjuymFiBCvcFUmodG6mas5tM82yJcRhPi3LmzP3boJmZoPS7jMHjtYJU8WWn6inhtwmxn55wus1bitCPJ",
  "key31": "3XGjKFMwwyzM8sjAs9z5jQKudEWCN8unHw6uBJxKm94iQSq96zLqJY3MFMa8MNmfrdF9X9i9GEa2vYmwgcpqkrEK",
  "key32": "3R9AEFbc9JUS97YxVTF5sNZmEUyRm351Qgry7FWHXSuKgz9qi3YBrLJ7baRP48L2qG39Hd3ZUHU8iBdfav14UEek",
  "key33": "3todqKWpbMTVVKrFcx4bbgE3Sd8ZN8feXmtCcAR4bB4YsPmuQQP5SJW5mWmmU5rZP5VGSmY9GM5dS8UDLRff9stD",
  "key34": "ecEgbdbcZzk1vEBxzh6T8TmnxcSMpYMgdd3HFaJ2oqLCvTyKrHNw6zLSkp3JdYDAp4sFhD3BZQdpT7WukRTNruj"
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
