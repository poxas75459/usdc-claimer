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
    "2RmQxA4CuARy4rZJAy5e887wBxoaxeyDubZ5QhvRkEmNszP755ubMqK2vTjMsEX32mMxjY3vR93s2WU8SYgMmDYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X8RpP4pdLtjrKNVY7vJNjZaX7oV3gJqwpqg4hnzJRK3BHvArMQ1fR8ZUyNYwrvUzuPUqTVysKvkQFU5mxtogsnU",
  "key1": "3Pn32218vvF8r1Ycq4o3caygExHwK5mKerLaRrnDZJ1sCtCJe43HpPdZH4wZQ6F3n4J3Ge8AWhvSB6rQferQr8QZ",
  "key2": "mbvfUo231PsUGS6LtERAvUy1JeXFauc7kebeVPnMNczZ51z7vN1Dpi8YeatqBs3gZfNXQMs6Erat9pfLx7QnuD9",
  "key3": "4TnghEPP3BJpZBudj9zZRC6uAUG2cFG9KCqX7SDdb9BJzMHcAVgq76K9fARWgjXLD8AsyQF792gqsWpHMKzY6T7N",
  "key4": "3tb6XNFU2xEBadQS9c9i2pdG8bYMgFoHpq8ZJCe9anVSjmnyEtyRVT5EDT36hsQPJQtp8RojLDRUaJQLfT4fY5nx",
  "key5": "iw7UbFbCkYKkoienRtJzchig7uCbB4rM1Xr77dXFU3uy9VH4bQSpV8w5JzYw9K3dBjHaubraRpViwSTMsbJCEvi",
  "key6": "DtaT6iEZ7fHGjuwKZXExYEuu4inSke6uAkHznKqY7vvvcu2PFs7Q3LxDEHjnfkUaNLiAR11capVVuXfTDKoKjGs",
  "key7": "4pF9V4nr8iMGmCHHn6G6MDZVhrtaDiV5bYisspTvnMnmLHDKdUczQx8JmAERf8UzjzbEtiACHSa6MGT2Szi1yPUh",
  "key8": "2UWtooNkeYbuXECp26t85ba14viwvYJPbFTPBkM1bsGjw6PazCEjevV7cuR7sUeYJkyLY3hqnrvrVfmQrdcEq652",
  "key9": "2sknQZUFJJjvRYNq1bhJuNZLx834G1yA7kCRmR3n7YeKhEiWqqLGo1zc4iiQ3Ao8ruuC3u4NFD57ifLRHtPEP8Dm",
  "key10": "4pvFHAKoXEJGpYrDYNn5EbSHAjbvQq5ehCSwkj8DwdMEszLvwLTKGjjNcjEidDb5RSYVJnjD6kQkitM6tBHEJZhM",
  "key11": "37A5HvLrthKosnvJxxmjXs3Jx4Zr3TiazHgoUYvs1ow6eSqgQEpCgVvuPNvGoEUvs5FE4e3nRHmxwDA9moW6q3h5",
  "key12": "AcTP63YtYnEK5RAL5dMj436ptT1mKyXT6cuhpWstQS2VkXmRpnMBB7gFRtDFfr7txz8KQyNDyCvxjPQMezeGpE6",
  "key13": "4EUpdzA3qdKAv5aszNV1W3PGHEHUr43YWcBjdCHh9P1uqazYWKbH7S1AaumhthHL4zT4FBZ2ZqdB2nrbb2V8daWE",
  "key14": "2rj1Nhs4Sdk8T1PsCP6BpR8zhxbPYV9347DZEUVM3Ca53yhnynTB4MxY3Hv5uDWv5CHUVonWYqv1pP6wPYhyfkHC",
  "key15": "4Lyj3tUc6uBnAU4hoKN66mTVpH1DcSW2kvmj25pqEAHmWue7kCFMUuKC6qxCkw6txMpot2MM5k9AM96Bi6MFbxMT",
  "key16": "5t8wxe27AuqvyaT4A2iJH4wuPqUrkrMGFXwDvES4LCJKhKBnBG3ZmkKgYcSHqRhcBePBxRrMVW5CgtBZqQwy6B3G",
  "key17": "4AD4tY1vNu1Vo5z1WudoGTmGjUWPc8S4yS8KFVpo9tTsaEGs794T7dH9EsTNpcLK83s4pFuSL13rhB5vSwL9pP8r",
  "key18": "7uQeuYtk2KJPVmKHzbGCG5diuA3D2iaXqrRDcZobNr2PuSybTfe2cPxL3fXJgthpRN4dAhw77kj5qTk7R6Z3uKw",
  "key19": "3EUsHkWnhY25nXtou1ZgS8rcDB1ozPtYDFTiK7HR4YVgNSUbJKvZPkgeEgRWFSRdpKg7PESvbMg7ZYqTUPkpume6",
  "key20": "3Z2zVudhXQBZtGZ5zaFWrVp6G774gpYaRVWEJgNNXwjnbPpqE1EVqsNU1TooyPL2vXXjVHWct6UuFi4Z8F468u2Q",
  "key21": "3byDDHTszTLHZeXU7BmX5QzViDG1P94bfzKjWp1atTvbmQ7gmTruUK3iP2daswqsKvktmN4MyCfv25U2DVewHi7E",
  "key22": "CkGcdamZa7SK9rdLwVBhk6LjBnf3YEVEGwyxgrNtAVMoTvWhXgaC34jYj6N7utNoQJpMBhAhGSJ76shvjS2nius",
  "key23": "4dDE4ynb57e5guFDKpArNBa6zJFGeW8uJ3AsJpgq2BSzV2m66VGw7CuMt9dd2QhpU9eReV1xpwhVajxjNBF1sAu3",
  "key24": "4gT7DJFXizHwdcak8HbsHZDb2ny9LjLRCkDGoiwcbQHD2Puj2XrY6cyro87bQ57aJhB5Joy3HjYca6NFwauvoJDA",
  "key25": "2V2AB2Dmx99fkQo6RvRrHveqXoE3rMEJTwvde46rrqyLNfqxHaFy7rtWW2RuT8y21eTMeNfoPm9DDnzd771QrGba",
  "key26": "2tY4x77wzPdmVMUUjDrNhdQ1xiLqEGBY2tX8LYMBhWxkm7Rymr7cwq6VdLhnpFVwJwuaahAxy28rAFiYY4ULjnwc",
  "key27": "5dYKo7tMPRHjAgYdCRLMn9qMjE24pYcux66VnnzJViXQaWeSVtJc1xAJPHUJ6YC94k7p5gC7KEduqSwkQKF2Le1M",
  "key28": "4VZuLWQJgauGUzF8YWBiSsvWt3X62QgFxahm2GdzfhMbXz3KDeY8YjVga7g6HT53a8TnVJZ81i17jtGW72ztPh1D",
  "key29": "3SUz77LLKpaGjurQiVDgN6MaEgSpW9u75cgt4SUYPiZtBsEusWUHjtR55MrBg75z9qWgmjnCPyri6NEJK76GvVJJ",
  "key30": "3dyTNyW8r9fW7GNhuoTYzv7PCaUzxSTFDh9U4A8iMafM5TQVGBVgWVQXEtfhx1X43hbuCPsVWDz4YKTvfQ3LETCE",
  "key31": "2fnb8GRYNCrzpwiNL9geCq1FQjF4rGYUiSeYeCxWsaC2TJKQouATV1GH5gw7xLTBXLV6fKi6cADS2Ka1uYN5X6D9",
  "key32": "32Jd81PUT59i14d3sxidpanvfLfcnGgbk7M6yASpnecSDRTZinHJCxd9cPaXhtUukv9NSVW2QyMRcGtAuFMoUEaG",
  "key33": "mYb84cCWgEfKZjVdgxXZVjnHJHfbPEGtXAw2YbJLLeFEbAYwMCFzuoUeGecrj5gXLDCN1B7FrDz4t63gTfsdYNh",
  "key34": "vaf7so9LSLJ6ux97eS8685PrEWZzcotFHp3DmMnqnKoQ2whHuiSv7a5hPdgSj9PLQpKAKDvJN8EqjenK4CPQCC8",
  "key35": "448jw3317Vu1vAh7Etg8HtZDHfRgax1NZoZPYepKeC9rxU7rsKUuFkSC7y8HHHB3fVPvjPtk8D2mHXFa11W6D8vP"
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
