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
    "Bxg5fnM3VJP1ETUfRaqZo5Nejpc2cbCcCTfen4uSA3VVD7TUTei3fLkvQWwvejNA4sWQMeB22v4UHhx7xi4HMvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QqTiovMVkC2uE1a1ZnFhEfwwFWgvBxwkizWa199c7rVjakB5SBrfVRMt745eDAdMFcdQqjT24L3UEM5umu3X7wn",
  "key1": "5NzXFRmuXj8zWhPhTCaAbNgoWEDixFx5LcnqnZnUWcQzho4KpyHuKDAuxeiAJhXUqkZCuq4yXehukZ1MY7ot2dQX",
  "key2": "2mGugjMHWe3gfgBDCBzKjvpG19JZmDCPK52Ahum8NApk6mUBVAUVAzF3ypE3yG67YRmZ14n79i2cmwPce8EnKDYc",
  "key3": "3seSmkt8Qoe8E7wG6VKJYnedxoE3J7CAorokBjfJib7bwk8jvnxYHTZ8XnpqxEuadsp1AXVTJHX7tHoNTpee9vvv",
  "key4": "zaJN2gCaYkqoVppZ7RpTbvsXFCUjEFTR6UKJmzZ4AjYtEnoEPfWLebFk5qJtcmm75teq7k5oZxT7dB3ZrPYAf6g",
  "key5": "4EycESirAojnkcFvTCgC6UHYjV95Xyfdss7YKS5c6zbdnbU3nfE42S81y1k3ukFyxt9UMTZh7zLcdcHJ22Rgao5w",
  "key6": "4sLZXTV9QzZPoANcRWxFuz2W4ZoP2L9eNPvqbwSNUh5FTGk66zww2hrRy9kvLcbvFkjL4uWWJvLuwbQtwtqyKWmp",
  "key7": "3yd77WbuU17Ujqqe2Xr88yik3hH7RmXL2ioaLv228vG8FBWmANGnTnpUKqaCD1j4XhCVnhHQDp5p8YjXXmZ1AU4T",
  "key8": "46vjvkQS9kVsgzcS4hGQF4S2w8MHWaNc6AqHXL13gb6KjxQQ6pujXESvQLFHMFErxZMkjpmXfAeZP7A79fEAdPFa",
  "key9": "4zN5GAJMnfurGhheHb9VjkkpuYYB9BcLwddREra5AB3Ct8AC4WqV1X7UCwJHfdyqbJqz9cPqFWuSTyqaDuXsNrWx",
  "key10": "35LLZ7X8ZMko5XCqB5eRBkqmvpBi6MVQY3VoWvMsQscdsmpQTN9hqWweJqFHgL9uKAZKynwkD8AyacrkdNxtGPqV",
  "key11": "24ViKQq2WKcFmHfSJHVsyKHVvexiSoq1X7LQYH1ZLFCaxuZWXjxGiCu9AaXcMDEfj8Ki9ZEm2LxsPM7uwbt7Rmev",
  "key12": "4mJ1HGoEiVmxykLW2Py2xKvYiVMFrMpwdJ5duyf73hvfbxY9W2v2kAAd3pcNoYVWJq2qr92mKR3mLsyPhi7oZ5sa",
  "key13": "5MV4pB2prjkWtSQG1WZNaDBCKRYs76GZaHjBvesMTXktwYWamFuvyNecy5ob9QGTmQqSsxr6YpQXbYsJ89psEy7R",
  "key14": "4Ad7fdqpga3Z9VoCimpGHryvy1fQZhFvjqgrAFbtnDPNuoTVBQbzxZUh8uu44M6orHswLw6NaXbd2FWenzox1B23",
  "key15": "5pGYukMgzPoA65fFe37Z2BkaKQ81VbfAzi4gobEh9aphghRqg4dBRLAq3wfu62KbWQMWbTWJYwXiUJxY9BkNWxxg",
  "key16": "2P6j45uWR7HkuYmeUYXp1NybTa8W8npc46CqFWiF25Fhh6FHUxcYB1yXy2nu62N3XGVdSj41eDo8yb5Cvdbrfecs",
  "key17": "58imLXXvvjb5SJ6u8M3ZJqurdSMcXpDGL1aUMcG7CcKK3W2WKZ7MC5V6dqB4c59X5iTgjmtaAmUyspazKR6xKKx3",
  "key18": "2UmT8QHaAigSDmb2qx2DJqCMUkAAJSjGvKFRNUKgXGgRSGzzdhfFoP26GSoXJqQQfgyNB3xGyURSS7xfQfjwmMfo",
  "key19": "5kAkDwTvG63f9a2MoBxJHjwNqzaEoqNb4w5vpVH1PWVqf3KVcH1DBCf5NMsLTg1Ve4kRUcwdph9rVDdCbZ4KkJ4C",
  "key20": "bwZS8MuTWEgsbLy8WnRGoE48YnyfDVQaW22jEd9X88kcMwYYoT3WyNq2KvQZ9S8gAkm3dNQMBaqZ5tqhLjD36c9",
  "key21": "3Px7stT9B2dSzKkJJ9P1fMwaucA3hzGGig4kgxyP8AmnVKZ6oMUa2Q5QuWXEnAfVYQB9co1PgCqqpUWu8mb7cf5p",
  "key22": "26ivF4pgZBEXUptkxkev579AnVHJjH3awZDwegzx8QTzhYEdSbSwq5gJz9sV1QaDtJhKjMMHhgQeGPqSKNQ6WtF9",
  "key23": "53gwVQAhxPV6EJcdPA4L31hAFi9Yxx2wEuRGGb8J3tdVgbjvCDu4ufnwjawrkdniQ6cPChpUzZJMhvtomWZ4WKVZ",
  "key24": "4Kv4VNRJqsUryX599GQELZMBReeQunqJJCuaHA2UJBBVud95gdi3m7iVbiw1AuhUe8Uh5rafeyYDsNtGoS3dh1oU",
  "key25": "4wMotxD5xvQkv1ktzfXUsCpM4X6ppbs8zY2UAH6WkMoVtbtQ9xSdVAHRwsLTjZxeTotrt1KVd4KbgBi8a9pnkPpS",
  "key26": "4DBGPxbbM1y29xVg7y1ng3g5ZyBmGR1fPDDzhyWYKQbzxxgpFU4ymiKJPSfAvjL8XCmfwUQ2UF6ZEyTxqdMZeUFv",
  "key27": "3Qoc1DUzXhYqbxaLM7Gw612jx1PrAGyBXZ74SRyFXwY2BAKWKkvY3RCYpmKraTggpswuEx7tPxBSY6LSm4Win6uX",
  "key28": "5aPggUYHpo3XLzXDsUn6kPEiAew7H6745dDrPUyvafENYb23igYeHWvp2P7YwShPTn21N9DMAvWyt6G6RAM3KhQ6",
  "key29": "4o2A65ceTT8AA43YCLCmXRyEZAwXp75xPdwqbCJVovNmM98gaNTCtSAhvBWrDJtasVXu6msCyStjAyvfXAd6xVMZ",
  "key30": "TqEPardi2uCWZZSmzfSk5SGevg3ZaDZkQNgeWP9mKHawrJeo5iHJNWQbw7S6h1JJcDHB1MqQ8waEPN7oUuBBW2T",
  "key31": "2iMyw3X1nCruy8Wnm7R83PMgHAgzSeqbmUifM3M5DEKRSyoWoZmyNBgZrzuFRGby7Yx3zYAvMkdj733G4fQpBSvD",
  "key32": "3H3QTsqeA6bFKrdgKaDp3N5tzYxJJxzQ6LvrDdnNd5NTHRzkH8dCuKmhSj4CEEtPwobddCWdeMV3MCoRmmVfmAxt",
  "key33": "ESYi2NTPnJgxWhtz7qbVD36uBDUh8dyPK7gwboLpPcFYhVBcgpeQX6K51jGhs1B97ts5MMFcowBjcrJkNhqLtu4",
  "key34": "YuTRmnbcLnX48FjdgyjNrWqhjcXxPneRDonvY1emrWgKwMDKS8kFzDTr9KzjH2DpFj96hf5UEKFw2PXti51Xqde",
  "key35": "F2UGGVPVXXDZw5PagEjquMveQ65tjPjT9YbmjeRueYeZQf9enmvBaGzeARGwnoMw89xZnNf45DxCGLNxNW1wMQe",
  "key36": "qfdCnVwsNqUUHG1FcbkbdgrYDxZqNoexqtxXGpD5gDALtmttXHADN9UmgfKFmrNtaCorkGJRR7AWBLgQQbJ7Hfx",
  "key37": "3neB9zkBaEu7KZNjTdbGmc9LFZPBzs78EjTMrzZgQPDFtfJF6cpBwtJs3BpGG4pJuhsbg5Q3V2zYJmUPRAfNbyXQ",
  "key38": "4GpxoNZZGgGxbGVNbKH2UhRpWG1BX5MdwvCAssVu15cThcNW3wKnS22qtArhpmhhcBjXKBh4TDGdYswu4nzcJjWp",
  "key39": "aCKHLaiZoqZTTPXWoecCQhKAEQbF5gXgV47jdJ6BbFjfYGUnMwciNQNKwawSkPsbRw1c7Wmik4VWcdJ7Ny4uJyj",
  "key40": "wu9dpnYmhVPnGDNNBNWYtkawNDhJYz9GaNtWwfhANT3o9Gc9GMgAciDjEB1mncMT1RxnL3Sw9umMbfrmxYQzHRn",
  "key41": "64UaqcMveFmGs3NwRjgkTAKRjMkMW8VARXi5yHfHgg5Ti9bmEsKvQHQo8B62VYuipDVEZGcVEveFz8NZeTBjhiix",
  "key42": "5GDP26dW2etsrTDzUdRPSkQ2WmZb8of1oxQMN67Vo8nexkoKJnBZ5Km7mKwQ7knQxTHvj1gDqqad3e1BXxqrgKHR"
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
