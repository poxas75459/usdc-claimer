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
    "2Sc9YZo91h66Tgk1NdvEFyEQwDddRZtckoMRYrv6aMCZ6qyQu3mV89nTpyQuYsdZm7TvnLtVHnWgJ1juXQg6m7fJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pkwsba1N2SaRjLzDtTEpH91fUzJ5uCZC8Pm9PJfAnFct8NqWrmqan1X5rf9fVyBs1rGufZgeHEbD3tAMqpguTrJ",
  "key1": "5oUPsHVFinZq87PCnnEpS9XSjRpH4zUgfodUPJGyXDZELF6tYvTTfFHED1i5aFgAUTMHobSHW74sLXKqV2eb3XA6",
  "key2": "4kWr6ZzPYs3efHDcJ8SKj9wVthY6jPPotrQpUm4DjzMYcYcG3e1XJrsrLqxiyjVfJmMSYd9EZY1LrykfbCUy2MXG",
  "key3": "yFfVtipxDd4aY3eT6eBQdNt47ZhWM774K42VNnvTU9y38nTKxYN39PZVNHkiHj4jRX2eba1CR4a7Hk9KnFs8gJp",
  "key4": "qzGB4D1GWofzn2yc3ceyG9kqpbzpAbr9c3RJrHAet7b4jpfFUHxF5D8sM1jBq8G6HtPDhfN3PAeyZ96XmUz5ycW",
  "key5": "3byZi7JhSSdVzVgVQMDtwAQCAEx7hLcXwz462fkJmWF69K68hewzTQYqsRmYbbAwWamMR9k2k1Sj7HBEcVgbsQcT",
  "key6": "4XWcZ5tj8a4Dai7CfBsb5uG12HqiqGtqV3LwWdnm7EUsmD4KEg81WGfgTj6az4nNMQFn8DJqrMSkhQqohjWi5jAk",
  "key7": "3xybz8VrsaRukdBoF61i7iR5DvfgPbKpsBukWkDmNk1GdvFsi1pp7XKHujuy12kLovQ2GccnJBV1Jioo8mH1BQEC",
  "key8": "2TET5SaZkCyZRPukSAZovXDnumZC4J4ozQjEC3XxCnsRPyS4VKmK181rFse7HUiPdT1N9NVmFCvd2eTZ5HiZjQub",
  "key9": "3LmiebtTtACdrMPL7FyamtKHHhAYJ6fW5kW41kM2LiYXsMwGetPT9L9nF5PYFkEsNmZsJdYhAbVfX8rvzMgZWvKC",
  "key10": "255FD6xFMN6Fdmjwn33MuroMwaq4Puiux22BF6zVFomTPBSddady1PXb8geejRpakY9Vs7MQwiBDcMDfxSNqt2Tw",
  "key11": "43NVRzTWieiAFUYJvPTLE4MQeTvGUL6pTsp3qiU1YatkGChtxHN4LLRb95fUskC9eR6RcmTJLUSGiBk39ESbxjXh",
  "key12": "5wEkYFZ3EafMS5FaHBbfwRoF7Ny3N8BasjMUFpoPsQGr2mGdqde7GGERfrgy1xhPBomfwvMwWy6CheJpS8Q789jD",
  "key13": "4xUvLXt4onUzBiDvAABLHt96Rtoo39CZX8jXvCt99PgRcrPPehPR6Am4mJmfsbJfm9jisJBoLvvqFLdHv8FjvWpW",
  "key14": "5nhQDPeyUbsVdU3ZsstNAx5yndU8A4js2syvyk4NbyJ6VWY4dPEkpmaDWULgRdQJLfzzMr4RuTgc4qswoQLmiRJ8",
  "key15": "3U4sQKTgKgfCGTCMgLvc3N5yPQeXS21kRcJcTVx1v4SzFqQAx1H97rTS17AbeVCan7Lq6u9n3AtjH5THNbz5sE1p",
  "key16": "6GynGCQoXppR88Nkt5WmQrSyXXTiJf6HXK8zUL9tqKwxRPoZaEj4UnfiXDpYiKwEoTy4bCeyFj1tHduJ2DdqbbG",
  "key17": "33hgSTPM7BnKJNSXRczg4BDeTeTfRe4GTQosoTYVDmFTNjTtpmLMRKoVBNED2BNDUUAdz1ACzdur8eaRiRkHJkCU",
  "key18": "2FA9oYNX7RMYV7dNf1vNCFbzRQZpYM4S3vpteBSYNwDBGZUXhSTqmWZZHrVgBenkaYDDxJiGErPnLpstAdMzymnf",
  "key19": "3TQrXAboSrTndQnUdcEuUVVrGEdrd9zadaz3bxCZRqCgeBg5rir3h39fGb1KrVjgc36afXF7k5SKCjs8cEjswGwE",
  "key20": "3Vy7udCcNCZog3P5eq17ebAnuWLYxTPnkvQfGBCSfBJy8QSC1y8EiRNE3RGr2scWXugVVwb7K9WvKK6AMHwzeHEV",
  "key21": "zjfokTxXZb9ST4DBEbWbKMxHhiKqbjo1WAwZHtP68n2hPJWUPMNGtwGEpB9GsL3cZDcMHtB4369zLFQrTSfbVtv",
  "key22": "3imDHb1USwNDeXvip9p7Yp5yE69WRPDL3UpKZzA2fAaan32bZeFw164opZTBeUGyXYPtw8nfJM4xLkLgyKEN5CDb",
  "key23": "5i4YayFLRYZG1yVXA11bnjwPwQsfKyApdBAL2m8z5PgvEk7ER7kZcnN5EDnAoXAbEf98H5p2MTjH5jD8wuvev7zj",
  "key24": "5ww3nmPDQz9ws6ZZjNj8nrXDaHSwXiwnTMa1tbJ5QHmK1WMQsf9WzSmdUB7GyZg8gUwSQKG9DiHghi4DiJ4VvYFk",
  "key25": "4yQ8Tg4Uyjr52QGgCMdKY4hfoxn8maooffkSjFWeVT7pD12NSGiNePdN2iySP418uHEzsrENenoaoV8UyZn3K3mZ",
  "key26": "2Xxty8Sqoi9Fg1ZfPMUyzRvVEqd3LHYLN7MgZXwKs3mJFPSXWDX8xsQxXXdAjB2vwanwKkHauGbUKDUxpHK1wyYw",
  "key27": "2GjTXizMFUUbiA2L9u9EcJLHUE8i6QLzpxYVxznRExQFVZe8TDGSxTatmrc2gMe9GMTwT1SB26gw4BUvtoSdLagb",
  "key28": "52AaFM3EQQyCbUxm994D95Ln927pQk946jaze9W2sKkzVxYNKFHjKmAi6Hp9v2QymBs7reQYqS8h5J2q4WSQojzu",
  "key29": "27nU35LFGjLMkJnGcLZk35hhLNEvd8uepPakj4jDXhynFJTXsNVSSbYzLpDbfsPBYJf13cfLDCxUUe68fKk6vQEM",
  "key30": "5Ya6j93mB5Pdy6VrmFj8FaLAZa5RhBFpNs5Vgi1g6UXX6GqyWqofd13YWKuMVsM4p5K6Unq5it9uKsALtNiVqfEH",
  "key31": "5KDs78PLQaG9pk5KUCZQRqe6BeQyNT1a1vkqtnXgmpysMmhiZsywB9JaFeBgPQ9xgQJAZCYwjzH2jgDsUzZ4GY66",
  "key32": "5UXRDchkkQzMo4Nug6bDRe4eSDCTSuausLSpbinp3QXJbG7WrhZZaZCCgUAEBJZPfMMBFLNk5CdkfLo5jLev5zGz",
  "key33": "ReMLbKSqRk13oBHufC2fa9iacu6oA6rsJFiNQLXpXqpoYDPzvgZxkNnLYULZSPahikPCEws6V1ZpWA95LXPzD93",
  "key34": "5sxdaDPTnXvvZtJcYJ1VKWgdSiD1DdaAPsYYvi3kdxycrQrJH7VPRB9iJg5XcUdq2TXYobGQx4VUCLAsgLr8a7qZ",
  "key35": "62cS2jdgxUwv3fUWvjEA7biePb1QBY4EbuZqCLCvQ2kH7794VT4otKoo3HBgFvwpDyea7b8TfSipoCsGXkA2kTMh",
  "key36": "ka3dzQWGyMtmc8LNb5DdxPCcQr5g2wHDZuHe8RvpLJSRFA7HCffXANTKtiUwHYebGNsNZZ7UEd5CfUkn9yhLKpF",
  "key37": "31QbFdZmEVVfuN83GGAz2JuYsJRcSgZCJJhZim3TbyQhDnRoB2UJVHJDKZEcuatqR7ipvipqX7uiwhr1owjsohuc",
  "key38": "5VmpvHygBggFamGEkZSa99oBpCL9Ep5K8ePdiSneesGZFVNSyWfDaVwC6RyRiVbBoYgAa8xnNJmr1G21DBdy6SS9",
  "key39": "622mKuHBgdBhdPznyX68s3juZ49DsCiRBRJBoQf4BXTE1KCWnmNZVqTpMVNyD1YVq49kFA6v5CQTYNcxZ8bgyELb",
  "key40": "9yPpRjorcgpykZKBwjE7n4XdVaSb4XRNPTKc4DivNQKCG8TnjTDQ5ZoQqJhg6RE4pgK9tA8GjTf8AuFRsNmui6q",
  "key41": "2yPJhvJkVHtVgK4KcA3S9znbCeX5Sx9LYKaKWJ8WRrzfmV16f72qmDANBrAMEUyJcAb4y4gC2fEN6HikVgUpP6bT"
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
