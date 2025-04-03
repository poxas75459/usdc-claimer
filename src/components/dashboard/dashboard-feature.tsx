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
    "7MDoCW2vQDTuTLxGW1nSPGrEc8s5BsfEZSvbY22AnMuzi2qtvbdnqjj6on7M2Y4UuyN5mkJrbv1hnuqvg2vXMhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ECEfj5xAZofEpfzV4uUa1BthCbdtC2Fu51uYGNjkLKxivkrJekZzNph2rm52dQSfFpva8BQbtigWPAxCGwBWPy",
  "key1": "S7swdbNaEYeyhLfhiVD5ZcmrJBstyxRnVVDmEyHkQ248e9GZrJ5MiDphRJTQ9vrvnNKqAT5Ltbva7e7V6wdCAg6",
  "key2": "3CvNNQ1Euwmt5W5P4B7hRgNYfA61AyyMrQG4oM548Y2Rqnrzu3iMd18iZ21P23xHYTuGCrTUB21ezUUD5snpa1PY",
  "key3": "4p9MzkaFWSLocKhaFH7x9hPSFvKUweb8rQukHHuiasAp2S7EFQxsr9e5msiBXen1oa4e5X6jSfRRLEkaqkgXf6Lq",
  "key4": "5jTaEGAB2LXYumEheZZwe5orkmURL1frGzb54DjTcAyfo84tUN9ZJjfGgSfjviWqmx2Z9y1GNkKWZFfq4R9rCmoY",
  "key5": "3NawnkXS3LxxiGSwv2ch7iP9Z5p9vZkaukH4DHQBZ4bBbBLgVVFCCb7cBDZUrAKwf9hs7QbfrPrctRjKi6uU57wT",
  "key6": "2Bdr4FECWX9JVB898ybie2C1U5TVeYmh185Ki8mKXmH1U6qJ5wgXikfYcp3Arh7XtePXir2h1bg6Us3Eauff3hLe",
  "key7": "2gmFrWonCfH5gCEBrzvEWz8QfwpC5P4dYyJ18FW7p3vd9ZpjmB327yQQu6djQynzWtHcEfQEB2x7FQdzwGJV7G9e",
  "key8": "4SbLycoLefcMfG3rpc5pcT43iH9KxP9inEPXu35RB67tFFtxekqkz98g5kvwsFZEVUAzQTaJEnKmLvV4pigSeyys",
  "key9": "3XqwrfPyWUKkZj1vRhaXMaGxGfakv5GYiDAiqvUckYgB4q2Z4ctRwZKTbvNTEsHYPNbFutgVUmhJarwNDLsbvGYk",
  "key10": "5RdH3PJAPttHMKZSZn4Am5trV9GSR3ccS5aLJ4Aus9EUV6beLMRPFJLYK6qsi3Lgfr8gZhMx8NSMbJqy5gg8Lx5T",
  "key11": "LSngQayXQDPbMbggDH3wwdiJJg15zqRQrNMDWhSMcSWW7ZfrLvCxMNa58aDhBu6nkFd8puhVQppEDGetEPTpGF6",
  "key12": "3fqRsTzwNe18BQT8NwYzLK7dDeZF9wstRQZeYGdJQW7Kky2iaSg7V1XAHEy2ZQfwShUjsJsUNuv7WWPJ1aiAiKLx",
  "key13": "2BDDK2zditJAqiBWuZKjvCoWu5RW7f74sdHcqpZ7PSp5mHMUqzrEMrvRjuXhgC2cawuEABfHR3e3MxNtuevRYMns",
  "key14": "2ztaCNY4apqErvSEMF9zxQA1YXnS5WwqMGq7zW9iZfE5akLUvB3i8RyLRXGEkYtWY2TeBDyZdxscurmkaPHEUzkt",
  "key15": "r2GAPMmuAaGfKEbsc2TsCUQrzysWK9y1tXRhKDRrT17aHJ5mPkq5Ry3TFFBsRA55DKDAoNLnpNqN9dKrizjAxap",
  "key16": "7WqoKEqNkixmmfyUy7mccxxQAaP8ANwfNgpkeiXvri2sWiKGvxS4ACdWEBoUMkbxd5hQTyhfgNjSWVGXqhtzAGo",
  "key17": "3EAu2jTC5VS6VN9eF7x3a2oMtDJ8JZmyu6RpuwwULRmbqpsixeK9BMXqdAcSnVbhrRTWTJ1voprsa5AoyME1emyd",
  "key18": "32JRSvfHNgQSjCqpaSLvwmzBkBbqmJs3uNYa6BzD2JscvcHVhMQxEciUNafGUwD6HNHasxGu9GtRjZkuMmg4SWmk",
  "key19": "4o69joJgy9w6LuU3D2AzmBcYUueWiMPwEEMk37XymGXgRdoM8npd813iM62LFu7LboBLoAdK7wcqo24LFipsATr",
  "key20": "63ZZJ2KNRWNi2pMMrYCkEfUPZS6Lr9BZ4oGoqzz697FsXqv1XgEcE5o27SMtcn3uoCCksgmvS5mRrs5tqeHGFb6A",
  "key21": "3EBrgwWobMdh89QcJb8xTfUk163UTPDmPoaEfaMSdSj7UYq6RbGXv2f1495EGhWQfVbAWxuebjvEquCyP8qiXiuM",
  "key22": "4nMwMVjjCaJrwxaY4To1xQUGuPaBv7F2XwiaNrKWjHv2C2Kpr99mFi86PAadsqtbEa74GhdjsZkifTyba9NdyVt4",
  "key23": "2cyJkatVPfkgbHU8UnYxHRQFYpvXmjjWBCNk8KjbuLmeKtypaAMitdfnq49AZUoAXuHExyLYr91VKqvtX4KbEQi",
  "key24": "2kZM8gsHTGxZkxffy4ZrT98dUYgYigf9Nb6SG4CsZ9EkTvn8Kthy7W6Bznj1iPVHuPmbFkZ8NFBU8DFM1QptAo8u",
  "key25": "5aMGq3wzkrKdJNvQSbrBmwpqgvRT7VwQ6npDarpwkc6BdnvafgXmghP5npBVXcpdQJqNRi8T6mHhrddEAhp5rmav",
  "key26": "39ye8swWRxFCozu7NHLgd8CTbhngMXVA37gKNmRGGcVjRTW6WoEZNNP51zHb3tuNsi6kiT8wRjLotdNGPniSTuLK",
  "key27": "3PpdkLS5EqQwwFPpUtJ1yLDbNQoykiPZHjeBdRu7mwD1Y4d2b1P7gXpQumDPQHXEwYGoqoLgaf8AfUGprY2R8rCk",
  "key28": "jXbbFQrmy3cQzUhXMokfig7Y3X4NkRv4dXsA3JYpBMme77FMVEUeu7QeeBVv4qqLTDeTbUn78p5qCNtopAZYLVb",
  "key29": "5K8Fw7g7rQik87SBjUfC3AEh9h93FU9tfJwBHfhyEYJD3SQMW7nLhMmmJqpigH1fBCQ5syP87Z7e446WNxafseXg",
  "key30": "qdXPMgxvUdWWVdxfFEXDZLsNf1KCYzMiQxzdmE5tXeXYkK5zVmZtijCMs2QS1SmQbqrLC9LzQMTmq8GaJ51X7mZ",
  "key31": "2QCiytF381K4c7EdeNL2V3WvQUBTn2TKeaxBEYpfhvHKLjHdTNZRMMcFL1s9Qekv1dMxjKLGivnBY54JFj1MqMf4",
  "key32": "3zTV3qWzm2FPbWVv5k13NnPcKyftUagA9PcGegRNB1FPpcPZzxMefvR3kJUYB9vCo6vYJPdvfvzjhgjtpyAV6qdZ"
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
