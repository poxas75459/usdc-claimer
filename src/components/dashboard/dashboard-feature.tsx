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
    "3ezb14Np57tvNywvQieCWZnh4yNSTvMXdKX8f1dESGJot2XRHgxPTXGAkY3Z82dBQQza2xtzxMLaYF1nqSv2wD31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VG683NaMTf2kojuNfu5ffDcQkPdFDBBCvoCFMLNtthi7LBeGSvQb7GnJJm28N1wfkomqKowuQg72V4EVxckT6Hs",
  "key1": "2hqHRLxo8wT52SjvdczsHUG3qYqREu9BKZ4xFWVFmEniWBMAqHPsVKsxvaBuzA8isahA4ey9ZQX3dagpsJtkgQFW",
  "key2": "59FbXeg64aACKLaPqM2UiWzoFPaa3LH2e93MP6xGNsf8WW3RiDdZqr1MVpC1XZYmRZiYUhdbkFr4nZz6U6ULuaz4",
  "key3": "585d6S1RtKeE682WAN7GaZ3zK5xKWw2PBQXmXfBqWk4zYWhz8oQQbxVYY1Er8JC1qLMQiuDUSqzGy6wUCb5H81hn",
  "key4": "3f7WhpTrLbNejjiNPmeZP3MtUCQf2t425wGmXFW533DvLqBDRNroDbKudY5YBS5jtdG58Mfbx6mFQC61cNXeRVJb",
  "key5": "3xZLtgYYpy3CGsFxfZKyeiep7N3T4V4DR2aSTP6V3hEUUqnRLZouDk12G1H6irUYQhURTt24mnFggYWHemQR2WWi",
  "key6": "3wxsRQWY2z7mPoRSx3P8TBhR5rXBd1NuzUNmxcdf3nAHys727Rnh7fdpgdxxe4phNsCjVDs92EoKCYPuiDMpsfh7",
  "key7": "Ax99Rrmbw8BonzpZ9Ha72gzrwLJ3SU2fAPiq33HcfK7CnY9kWeTpSKMZSksfSoWiHC6UyLG5W2EpeduwvWLUo6s",
  "key8": "4Ferh4G1QUAaVGsX59p43g7ozkAQUbMSpRVYE9xMq35zZyxduFejw7vpKsfE4uEegHGueYRggEc3HCbVWyjAZTxT",
  "key9": "3tAGr3TWUZuztfgcR1EeKHPFXaPcDdpG7HiquHHFUmM9Lcw4PjF3ygSQsiYFx2gy2N64kBWtg38oACbWjcUaKbXV",
  "key10": "5YKM7VpYSCcdsC9nRtWyF9hscMEZ32czdmn47t2DDwxsRmE1ErKgddne7vZxtCQAsde1F6amX6dqPSbahBG9jeCn",
  "key11": "2MnqTjTtrDE2VxrqUJ8PgQEdUzPo3HDTqxAFqeaspdjiWfi8HJuP8kSwocvtF14e1pJJ4wSqCtTdeEXafhiimmsm",
  "key12": "32fGgFMn8N6KdXHenFHnNGYj5DuFAUp9D4hAL753rJ5bGPuTgocUgQsNFzkEPoo4sXW7q6j5KeYb3k87NQaJt7NW",
  "key13": "3uTNcTJmRu4bjbSQkBDhHPss3zPuPdRYA5qWWUWzGe4Lq4jn1nMCK1GK3ay4rdG1JJsZD78e4sj3f43RMjDt2baW",
  "key14": "5NSkMv7LN2sdrBXbpuJVGMjzKxES7dc5iEKBGkk8Kyr8zDyoJhfCjS67r1hXDf6bs65XR6Xu7T6EC3Yt6VgH6o8E",
  "key15": "4t3xPCC9iiRDjfL5BF3bsmmB7UgSHfYuYBScUvSsWst71FyVVnFzT9sThPxPgczWJYadEaStrctK1LTux49THkc3",
  "key16": "2cmLnuZGAdgfYx8NR2moD2csPnCPzjgRDadK1AeSfgSA4648DsVYhE9AAPM2ZHEavy4CkTPv5JiRTjv6cTdsMBHp",
  "key17": "wj9iPrdEUsUVNY7YDmqdQyJtwH7vu7XhSxBLv7BTQv4VYR3bn4dbpoH9113ZeSqh1tPQMMkFgyhYtkbomdFEFRz",
  "key18": "5hV16bY4f7YSSvFHAf3XWsWBu8jscskPMKvt9gH9S9JR2YtB9Voj9yeBjfkzyLXZ7GLtAMxPjVMv4SNFiCNYo62c",
  "key19": "62gPdCqK4rwW3V7WYGWijij9JuV5R6vfRqW4XKMkywPEu6XoruoEH8xywmK9GbgSZaqt89jfRwr2o42Qbomz5Phy",
  "key20": "2DuL6joSZg5TdMctLGd5Mcsao32pebBuuuk9jxxY5qhe9DwVALxh5CQKfbwBm9pT7w5FjBMoHQVm5z22mU6FjpoM",
  "key21": "3PVGWFr9557T1rN7EyPFHEPqofagrARLTW4K8Vvh8pAtvfRm43vSd8ZipWs2bCK34yt52zDqpBVKu5vEP8iBUv3A",
  "key22": "zif5goXP36zMeoH5zXWBWcoJ6SmJadGdyfEHXnfsmzMYrn3qRCWqG89hwKwJcbbpq2hMs7gaPp2wa1RJsjGquZJ",
  "key23": "5EZk7j5NegxMFGWaik5j816Mpab4xytr4GWHsSnCt832F8jM6U2FPMLk2WrzVVw6a29FMhT2Z1RTeuhMW6tiggTB",
  "key24": "4uAar2hociEiB3cUnm31cVrKiiQpR2BXHd3Zymh14L9zkpih255nYp9bqgm4j68kEQ4pQyaAxzzrLBiQnjMjGwbd",
  "key25": "33abofCkJqVNqKXcQbbnTrRXqSXeU4gtkoSXCHq5M7DE8EFnGQqJi36RDTkTy3YMKc1JFbvGjfwRRnS2RZSkyz6t",
  "key26": "2wbqqDXuPf1g4CVmRZbb1xngmVUPmbYmzbWqvvhZn1euQdaKreRJM1fsXZD59e7rneQJkb433Ei72FJmkQUsFrjW",
  "key27": "5LN3TmsLU6yqS1VpbJW9eoGdxoWLkcrDf4tPdjoknj5qbzeudwJWnGy81SW2chL2qYaHjNnyRaNFDZLWpWwxpVic",
  "key28": "4rMAJr77YZF9S5nSAMfsHUxdNiqG3nwq6guRPyz1KzH8Jdnq1wRQmiSqpzdFgNJsj3hZSsGYy2CieGtAuxdADzkx",
  "key29": "5JcGxzA7EWx6g2nWRMnW9vgedzAN1A8wxgW6nHsPkd6FYkejthmgTzyXn7txwCyYTQwmHapv6qJYcEriNbJSAhor",
  "key30": "3y2mYGqnX9hPi5mVfxsoJ3wEeVJEDs6cR7aTxiU9ZYQtX79L8ubESMK2XxTvJmCbd1TwJ6DuJV6vdcE8EiYHWNEx",
  "key31": "2aXj6nyvcEdcxP9Nka9LQnHkm7LeWVtSE7rrLVjXnUdkjGJCTnMLCvcDqjoNp125NJFJY4tDjqLp6mLnXqkRjvdc",
  "key32": "3nBqfZvVRL3hNG2T612TXgnCWBrBM5DDN9Z7qQQqAkawcLksofMyqcAmQngKBFPS384p2Ccv3uVHrn7MiJn8Y9iC",
  "key33": "3KtQAbdWmwKToCeQB7iFngaXeswpBUNAaFCMAEqVeBLrCzmbbhNDfPBZLbzDd1sUg6UXLtwAQBBbVNN6Uzpx6GKQ",
  "key34": "2vtZVtoEYgCnGk19XxaDFpzG4Ugc7rHGuaTUwCZahh57B3p8RSiPBtMMs97aEothvY7BrJGzSeUdVZM4Nj6amLvh",
  "key35": "5u7JnLUBfndxBVLFY8d4X6Tc7PMkxjVSdhPR6YkvxwKcGgqoqfDhJfc6FbFtdXJmKgFpj2N64kjwMx9EiKsjTUGW",
  "key36": "5cGgoqu2tCLnXQvY3q5fhAs6X9uEDU67aRixkq1mj7vCv8DM7ceqWKZ6Y9jSecN4T3twuLXsvfyQkAgUFq3VSyvU",
  "key37": "5T8uJJnimR2mdNG4RJG3ZvifbcXzq3LfrgUNHCtRc35U635DeVH2EVGUQjQvE8XettjN9aFsv5BUygLzfsezjCkF",
  "key38": "3jZmetDgYy2h8nVzRp8h7QRsHyqtFkf7NHMe5a9jsSBuecTRUnZi4MsEBRRNbcaxCpBfTwWg7DC9wCuLYfAkmMK",
  "key39": "5Lp3JgT1sriMVRHEGL3o7FFMiyQuEfRgQWUm25F9BFEH7QbbXn9WRnWDCXTB1koD8KnfEhLWqnJPzUY8SD9GGVJY",
  "key40": "QvTavqFqFWsQ4KjFptxbiACmEUUrcgMbwmZgdCcyk7MKN19agZVC8jAApco5zkSgE5AiK9awMBM49Aqj9h863bo",
  "key41": "3bR3QS5Ev6jc2s4FgrB5LdFygUstdmqaa2WDUDewnmtsivjEy8cinheaAV5kk8iDeBBM28dUEfawzKx7sax2XbMV",
  "key42": "38dA4VfcjtodpAjtGhW76PVuipZRZKPMfVssyqHnxcQgfZEyPHHwj9eJXbG6eBZ2D4bHQHjBg9XzMkJ9GZgxPUhr",
  "key43": "5p8z7xqKkpCiGcrnVJRSNBwYXKr52dk7eb6xGUTAaxH7HBppN3FoN6j7zGWJdepEotXfCcqbk5goJtHwAeN6Ubc",
  "key44": "YZaU6NbTMoXz2HRooHqfbaYjf9uT5PaFGmESBduweyWCa7cNMtsX5xwJiGkQTanME9CuJJjaWQ4pn5sEWih2oHJ",
  "key45": "5x8ZmcD5woq95qsD96KDRdE74AbwUCitx8ZDfSzvBs1uvuZvwvrKvCDAuzbArgwA2rki34Xe7LsESvkxMwS6VwDZ",
  "key46": "45YbxGN4KekcyY1fhs3cKYc9tm7YPz6idSvZHjGjsy6n55YZMfV6A9MbVMeQoGiPJDxRsUQaBX5t9r6352f8scCq",
  "key47": "5HNqfB2Xyur7isq3rQo25HrP2dPgH7MNHWRtyXdHsEHe1Xw3A2CghzEDLmh9BWGm2V8tiyaCFGw3ehgTR2X2FByu",
  "key48": "rdemUEFdxwvrSHUjo47ChTeZ41xnRdcpAm2JBn6cBA9LBJQe8HVojywGTKipxiscCedBd8hVL8n29hh3P9SmkWJ"
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
