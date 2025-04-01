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
    "2eAYnXydwvJrVbvSBJroMhnMhczHdREmhVNdsZaU7nK9zeNUAobYzpf8mnPyskNpexdDCoYLuqFpyQduwggiFh5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x4hyvEqXcFdCzcJ3oWiGbntx8RR7kbEGssbzpvianxUgekhyZs8QTNNoFjet6rQC2SdpURfHxd3YD6oRJzwhv3k",
  "key1": "b589WKpA8ggL4qiJ5jHk6dNsLXhQXPkubs1aWVpo547jt99wytKMESWntmJjzcdDvUjn9TrbFEs8hx939b2k9pM",
  "key2": "5fcSJghSpRpYzrFEEQyiS3ZrgSUsFVyL7ryg9vU2K7pG58HWb528tFEngiw4KJcmnQg25mxmuQx9ACDvxoVntiwt",
  "key3": "2Z1FYtjbDCgKB9kpZ9F1hMghDVV4yVR9GUqKChHM7tqV3huxGxk4zMJeNzmHqpiu6pmq1dvxY8YfZoKbcqJmMU3n",
  "key4": "543EcKHqLq8dAWobmTYdmrY1u9P8LsHizpE7Erxn6yRTKbKGxjxy3e37zhYaCSsJmFyRtpuKQ2RV5rjFcBeF2K9H",
  "key5": "1E6xxJXvnheQZrmdbHCNafZupPhj5ReH7ab6eUhP4qyDdwDW97Htt3jwgQq6LSgjQqPZPHrG3mq1Mfd6ZtrH1Ti",
  "key6": "4VhrzwruTZF3mmBiVFg2tu5L2hfDQSXdnnth3cwyBmjTBsQtNwzaPSsx99sLXGW7kAttmuU9BVwJRWSt2wBhNL9a",
  "key7": "5NqV9vZHijnJWCQMmp7p3RUALzKzxsiY1h5eVNZkSaybLQP421Rt4Sb4K8YdBrQ3nJHxjnMDax4im3L5GzNsVTqN",
  "key8": "2p9Miu9oR9QaxPVRfbmBWKVP6wDR6UjTekt9LRphw2xmQjzHDGjSK61ARTtB2Pn5tLukwW7Rq6dZ7HScmVLDApHE",
  "key9": "2rEcyXPa8VB95fAD7rqbVUiQFqoGBb6JWaGgWBEPaQaZWyPTnKfiicCnrM1fb9m7Mr32SZt3uFTNWF1xVAYKfb1n",
  "key10": "4SLyKj9MhMu89GdjfBWgd43Er4rUywuLsfFAYVFRq54DYtZgUUhdCf6VLps9umkEssE43xbWATjzAygWvfzQuCz2",
  "key11": "3sm7avjujJSCGZEMvBBhTzfQq7HZa2GLbS2HPuoVqHMUzzU4Kejm7SYpvfUt8GB6keofC2xUv3yNzEDNKD9DqXNi",
  "key12": "2bYDK2baqhfdexbBiJsC8ksr18YAVg7TnWueDoo7j5saZB6oR6R7n6saN8mpwCbApgEyB5QchnUMo8HuaD13MiR8",
  "key13": "64TWRbNXbrCi4H88as8AGsD25ioGFgJTbZQd9wB9NBAs36vNqzsk2hLDnXZRBRQYS9c4rSDvMJUSYSs9ibMn1nTn",
  "key14": "2GUeHsoZLV22oetnkB9VenFt68WTKgXx7L5E4UW8AuAasB8Rv7M1fuiGeteKDZYBoMzS1FGaV4GNUVM54YzV5PoX",
  "key15": "5CxL4RpTke6CXw4PuN5DVxa3fcgDTG4iK9Wd8bVmQ4eeZGZtcaZbNZqmfAXybJEfTTGnm4vxfuRztdzA6f61XPoA",
  "key16": "8Z9RUbgLoCWDJdJ2WHbwcbmVT4sLSv8XcCE3PETLWWvdgcK8xSpukryJwkFZn5VZx177dFrjmrvYRAgfqyrDif4",
  "key17": "5XmeC49PuDPQwFQt2K15VaY1YoXCDVkE1P7vUXBfTTsYFW5vkVpsWrcbApD6SrMLbvott4ANp8XHi5zRN7dcY6m5",
  "key18": "3LHjfxLAjX3nJww9GqQHNhvCVG7xxouNw7i1Z35kKz8a73LacVh4vZBwwp91onL6rafPjVoTiisvb1V2zio5ptXF",
  "key19": "56fRyMYpQTp5JH6XQnrcrUeofEW5a63KkZzkmAT51zCjbdvJ5LYsTd3Aq42sP5F9EqywFw3irvF2ynWyj66KrMKK",
  "key20": "3YyfzCDP33gRCscZHfXUe9TdpLPtgz4VD49gEJ9PYSqfNSx24YnSA3ENx8nfUzowuXEu8UhLWUnZ6hbhgbZCwNr3",
  "key21": "2JRpHeJp2zzmsZegA6bEymNobtKL5ZoNVbCLjiuD4weoVVsFCoYXnHb9VGNtdRxo1WxFJTn5HW6GHXkLwiRvp5ND",
  "key22": "2srTBWa6ddydMuS6d3v733o87nwdt1J7JV7j2vBLyZTPdJjY47upnwh5uAvK2gQ4Ki9GTucm3NnoiqVvJ9uLXL2D",
  "key23": "59zQNk1sNKWzBUD6jAZsS6boozGgom8qRerJQ6sdDnR8LQnvyoayUrXABkUHGPtum4Qssna85vNx5om6uAT9B5xL",
  "key24": "5yDSYefN8VovgQi7G73tLk5bhnW9EnJccVmQv1uk74kHo2R4HSsqN1jWZBYatyEVs3oR4H2S3nu1tEwf8sCLHwi",
  "key25": "3zJ46MRUFpo5tNJfpQ7C9jYGPd4Si8dnNPFUuzJHBw2XgVCuEVvJUgbWBaCZX25YUdLtHHKVemu4qnwc68phjXEy",
  "key26": "5Y7yzikudCo31KNPyhKhTkRVDTrmp81S1H6mkisav31Y46B7irzyDfEiDdEzczGM5a8RvgJ9mqHAG5Q95TS8pd7B",
  "key27": "5NKfAfqvb2vbgK85MdcgTY53mqCk2GdUv7EV21wg2GHbgmwf6tMh3KEUzAQ4Bs9sCb91uhvYsVjrkzRqH8GoZDLk",
  "key28": "4iL7UbRjiTipwjPqGQy8VXub3uar4wTWARorSoYV3okXHgUxareozbP9f6PoGCmobuGRc9N5uCAFFqr3mDZRTdre",
  "key29": "2a37dt44DSbp4eYAEYcKWBxfV7cME4LGBjZaUvAogQLXTsnegevn6U1H5h8s1yt8Sgyae8iBi6CDLNu6xByxQsrx",
  "key30": "42ujaRebeCumWxio8EUWXzWpgJUwVoj8KAYmjkzdv7r4u8vat6hKjhszforWjHw1pCxP7a7g3p1B71hFAung2uwx",
  "key31": "zyCUjM77UbpNaeigkRp3U2aL34QgquW2tuBibzkt9auRtq3KsGqSU1oRQjUjisoDdzX9eH7vqa25HgbFNHe7yqz",
  "key32": "c9dE5bMVxwGPC7J8mspquCSqqfkk2xdmp8EDaYMdKUmh59w26JExZq72PrnYbgEZREsBVFnGDjCQDUs1TKsKnwo",
  "key33": "5KTrmePWQVYfi1T7ttjMyAAB3LTEGcw8eDrhMn2vzZ1SoR1tCg9d57JsBZHqdvJanXbm7j548LwJtJECg3P3kdBK",
  "key34": "2aUe24BHQHuw2zEfT71ZpwsBa3GdXyjcBhNQit3ndtJdnZeXKoxshe6tUaeZ4SHFPGfoUfcwvvfd9DMRUf8wCTgA",
  "key35": "5RagWVSgYc3A71Qu2uBz7KUdYNBGwV1UVMa13hVLrXw4Hj88DiES4mVENnBAVahkAy6nuXpTyz8sZUWLeGSo1UUj",
  "key36": "2xynUSJFR6UDgxM8modn9hTcTyUEgXokmppqwhgr62xvWfrCXrcw78ZcW3wrTnZaUHrj3g4mXp4wQBWE5mnpFVL8"
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
