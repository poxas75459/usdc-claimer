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
    "WTZUtP72V8QZkFJ9DnqbtRctCSYhkXBWJKW7WqwiN2jeGondqxAkmZhXF61uaBrCamwggqmse9q9WVaQ7QrNGaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K73ivZa6DEdni5gzkzo4Zk6oR2uwEJkFjZTZ7cKL1Hkbgz4chbCazhnXaamXChcrHsnktVyeRzw9oFNzYMHPZmu",
  "key1": "3xEx2sYGbcx8qeXk4R4uyD2FqtFzS95H1CerHUV3z9WtXNVHawf4VgrXxkmjYXHQb5TakkTNBL5NEnNNzn6NWvZY",
  "key2": "42Tvx86nK1qRf7zy1edsVJRUL958itrgvqVXSNkEEbmtYs7d7jSErSjZZZSkgUuyHvebkAz3ppQkC1M3TnA1PzGB",
  "key3": "xnd3r1L4t7EkP9qFTxjNbKuMMiFuLStZ8W6AyHNiwsuBqbRbuWt2bmxv4W9V5iMXwjKeDLiUm5QWKNRbcUNuxDz",
  "key4": "48RDamsVReQj7d8RUanfaJ8TCvftvXa5rWFkEVgE9f9NmvxCosoE8GAehA4nRHwzrfVfVGuDVb4Ud55G6M2votyH",
  "key5": "3ceMoWgo7yDrPtRmC5gYJTwhS9ac1QgsGKRVHgowyXrWA27k5XviPYKzwYHHSP1TtaCCqNtdHZLYGThssYYxMFx",
  "key6": "xqwqM8ae8SmYL6MDzJvhMy4kb3sLfdviA2snGYif28KevFuiKmu4RHyCPMY17j3MGyUuyQeuMhcSQUEJ1amMoQF",
  "key7": "23zP5jW11o7bziN8qcYmLvSnB2Vw4sRh8AqtT2RQm4KvHR6JaSbGiGSzeRayqpagD7YJxwJ7kDUKuZXaoeTSppyy",
  "key8": "47ojrEzf8j4Sdrj1T8tnEDmHQXX7Pf3duX7uWpxPWwHX6bMSfrHLSX7Wx8YaF5C8KSpdzfJoZwzBttQNPtWeeiuk",
  "key9": "LM56C9KCGUH9bjkSD5pgetqJpowJdLUgHZK2GXeTbMYUtre4F9GdmUR9k4kU5RXu1buaY9XAK4H8Pgw6m9GK1PL",
  "key10": "WkQ5ERuztXE1Gb2css14dmy8ndSxt3ai7S4cG2FZuc6VNvhiVzhknPcNVjazZ9VXqE63QUJf5zEUU8wjco7uJ9K",
  "key11": "5r2CphJGtoemP24EnjH9DSsfK6XSaFHXRhWWgeHToU5urn4heaHVaqnRebvUaPhNqcLQUhUrkCsqcSC1g13bv1oY",
  "key12": "61JE7cRtKGvYUkkKzhRNMJEKfbdW2a5Bdo4oYgmfHJTDSDGT3bW2BBWkNS5CqcjPwywZJknPxhJZhnxLEZwANcL9",
  "key13": "48ffr8J7AJtutyYnKTHQMm9XJAMUkmoirBUbMdh67iz7ahYCFuxqLdEHZ7TM78juBLjwJ6UFwf2xq4YPWVWMHyjj",
  "key14": "2wUrZSL6Zed7YW26cywDrxgnRPPZV63JmCsBiWpQZvY9tfen8z3AbaXerfofeNp9qtuW7ce2u9TAnFfD69tyA5sV",
  "key15": "3FviuaXNg44Rx2xX87QozG9cAWrk23wd21UAWEGdJEB1RJDejifcBfCMgtUnx3AZB5D35j682R6XT6Bkwxx93df3",
  "key16": "35TYrQ5PF1V7zw2WTk3fN1F7n6342h2GYSxMBdiDx8nZjVxMvr9adorByP2CCX5wiEiHAf74piXzRMPJrcfAcPqm",
  "key17": "5qtJfJ43QnPDvuY94FQHRkC9gSa6cHFWQbXgEWBZYx9z7svkge7Da5jvEG8Ktb3zwJ2pXyhPXzn2g7FLCSvQZa3S",
  "key18": "no5LCCh6wqinYtvkZ1ytkvdvgfRDjhR1nhWAtgv8ig3ByywGRj7ASihpeNNS3s36UGnPvLEMnT3kGPwMqSVTuzD",
  "key19": "4PMYkfnbXnYimQYvR8BE29CfutoASB8xPcQfjF88Ke1xhUktfFPiQ4Zhj8ffq3gCju8bFiLP3JiB7yysyn6ycoxv",
  "key20": "5qFERZB2BxcgenMXmw5zRF4GRNPbDo8ZrCWUpfiC9G87bxbP5PMQf2QsUAVyEg4TtudiiSkk7WRCbuPFSMt2r1nX",
  "key21": "ZXdqN2MPJ958zbN8d28uyQaA41sJcY3pyezBN9xWPmAvS3Hzutdm8g7wj2Y5UQacpSfHGiJYcycgsqQnHpkWKay",
  "key22": "21aebbpqbJS7vn7joVPf8RcPEVgrTuShyTQt2D13GHvL5WgzEnLeZwrJAZ4hnG6gFYqcxQZWWm1NYVmRnoZ9apEm",
  "key23": "126niofKRx84Yjqta9xY1FwtYhh75VcUvZaHkZtvJLdocQSV2ummWKzs96f7PUp26Xi4DJPrW2x5EsL247nPDVyE",
  "key24": "31b2wP2SNhRmyDzigwdq6xUA84BbrkKNHzSLnRqVaLkWqDVpzzg7h4UybYemHCmHdPwyFktB5ae4MqXN36wEuLw5",
  "key25": "UbGFZdCoqYUVR5L4Cp8ZznxKeeRMnxM1XnGQfPRzHr5VMQt3XLXpdCuuus16gz6cmqgAZWqyiaVEd8YY2tvUJ97",
  "key26": "31qYfubQLFw8psqQbmkoC1e9C4cQejdZguTsm5opBNvdNCmjk7efthahCMCXMQ36AS91HUP44rCqdPqxKKyRpMXW",
  "key27": "3mG8kUNzpu1zvhzHx8i4qbmWXrGFg4Tj8sigELXRSWkGVnuPRF6akCkpeK5Ro9UcyuvifJDBcvVZs4AcfAsx4UgV",
  "key28": "5XY1mKiP7TEnXLmrwwGtEV3bq9W4YhVAhFndvi26Q8m57aaQLYyRgVSkySXXakbDKV3FGBeACHzWZtQ6sHsZgBhw",
  "key29": "ynNVLN3i2NpGz4s3yjEmxdHGAuMmNF83ciwvA6EB3623Utxn8acDNbyWJy334HgeicjL5AyFjQ8xHQXqSR7eaWm",
  "key30": "5bwN6PWf3g29hMBQxZWwKgScDGyqdtBnLNg1wa7phAWNbykNeHZB7wf49CKmFVNfqtXqwzNsob8cxA1YgNwstuwk",
  "key31": "5LapRxSK52JSrCS7VtwadqvrZ8g2QkBvZbFF6zYaJDYSKDAe5D6ZnAdKuW6n2ZDnPcLZebkSfDiD8c6ZgfjYCRhz",
  "key32": "3iCAGuH2XYkXxqHa4adaphdaZCWcoiFERaMAgr4dwuFYGm2VWc2qtTpnkSvmioQnjA3KcaLkQT5CU5TojdwGJ6Gt",
  "key33": "5z19jM4pkdcVk3pAMSEyeqNEfmGg5QE1g9D98V1zgjDoe1eiW6cUNzxGPhYbLnM8obMB6FGq3mrKroK1S4geYvTS",
  "key34": "zm2mCKT57jdfVAfKL31D9XfCP157tBUThCAyEp7ZERyE2rzVZHZTvEDhwEqREogyX5yRkc5gXHB5ctehygx7ZoE",
  "key35": "xbbnQaq8bHq97gc4F3GYCbVUCPnHaUhV6A7Nuk4gKw37hUxs6XhEdYh2Q71w5ntUcMd7pXJKKVzKVHt1pGrbA19",
  "key36": "5bYqTDzV7naJGM3Wa3hQanQXrwDB8oEamXWyqPkhrp2Z6YRai4kSEmFjiCPdMQ3GWZ3kZBv6G5HSLBXWVkaQkhdb",
  "key37": "65DzndgjATW8zyxkWdJjvBPCNmzVTQGQgcCMe9i2u94Q9QN6h3ZzXfkEYHXCuFADYWUi7fZVTNskpjnk5oR4Ezjq",
  "key38": "a9CtqJcQqNz8mB5GsHFrUSS1QtAnAAkZTvw7dcLfhNvveMteFSm6G1JbapE3TFscxWcTVYV5HDUa4uQ5TvMsKNA",
  "key39": "2PicH5NrCearY6E3JnqNh1ohDdMbGPgYPyH5MQJWSxXndyF7dsWgdu5P45MVXWoCfPi64P8KR91VY5ijxTVzR7Dq",
  "key40": "31Z4WVte9e6c5xjvhGcHJmHz5rKetmaS1BzuskinnEmMzXiTMbBoZuZKxrrx1xmxKwSb63YUkMjNi1ZH3ZsDWrhX",
  "key41": "3kKALkV4YhoDXyng9Yh2FpWkUdTAMRhBv9JZPZrKreHqouZPkyesZTNBAqMCCELrdhywN7aq8vL9LnpFSgn2zhKY",
  "key42": "QLJqa6hyRxVkP6ruGc2zK5AA3K81ENDPmdPz51fkJKqPRzuBaEavRZc9eYCsFkWssdcjf71DdfdowoaDk6aUSY8",
  "key43": "5Zw7E8tMHXCAedtx5DVaAo96DZsUdn3WpR6oVajQPx2RSkSUhR432eisz4p39QQhrp2yPgbLAPk4vT8BpRXt14Vi",
  "key44": "vSe4GvkejDbDVzC6S1TGFaoUiUvyB81uzt5oSeRJuQmSqyCSV1XuRvHriCLuEFuchYJtr2fBCWZejSVS6xB2f3R",
  "key45": "5MY3xQfVwKESgC3LC1p4sZE9LFRqewMWvYwpZDrn7XkvzQJ26xwgNsLFMvLfgQ2LYN83Xg9GsLGJ6gQbPicuGp7b",
  "key46": "55YRM1bzULjEwmh3qZau8vQ9fKmbSGCn4ttfXxuoXJ2SLrDW9irHc6xqUhMwWjrhbTdgWeS2eUx6wKF2zeCLoQJx",
  "key47": "2bSZzSVsxJiSjpYTWBWA8XFruGQvUYKMo26d6s2kVwCw9HqmTbhuLiaCLRF7qTN26PhoBqjkYBo7KU8s442xoyyc",
  "key48": "2sYPjEzLTT2vYWAhuEzFNZ9Jp2Lh1zTmfbFqzYmTbVDcQmJPBnoYntY7bj8PYTgU1frBTuYcb9PxpzYkc7YtmsKC",
  "key49": "3RU1Wbb7AcJsqrRcsPBpDpHUFMmeDaaRaeJiL5EfPPQpoRw5rBneeNhnqvgTmzDpu8WevdBE2r8BDsyFF4WdZ8Lq"
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
