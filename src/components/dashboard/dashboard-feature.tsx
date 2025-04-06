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
    "2mVqN8fZmpe7P9CERhTquCrMoRimcTTjhoo7J2VFQUqMjREUiha5PZ5jfiYKPGyMyQpPGcis9dBcprWuJvV4S8Ls"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "634gcfN3hNfkVazXdzJiXgEQkbQLxJDmbWDr3hetEenjEHcpRyXuq3E8MvekdxAMqQsz6jUSRJcK6kt3BEuuVkbo",
  "key1": "PVazQvLd8Cevfzt8UHnRHF72tga9HJ7SKrDQeSmfwMxUUrgJZbGStagS5aUTUD9nskvEh3aE6AsH9s7VRsv4w6T",
  "key2": "443gcrXXXd25cCPF6oR6zyBVYUd7zSzFPTU9kxP9ECffTnFzv4jfjB58fmSUg5bTmL3AuLyzatc3eqxZ4Hg9WMik",
  "key3": "293KXoyZGrLBPfieY4DcvzpVT12UfYEEBDifj4815hZqZaCC6b6rEvCufNjNuuATneVACFFXuEcVykBifkG6QrCY",
  "key4": "5Q5K4Ad21E3n1NM8Rfe78Pc5EjVCtKpSJMFZGcHcLnmMRkDJmp3ypTGkhQ7vhoXmt72XYV8HahDxk8qGgT7xH3Jd",
  "key5": "5apPpYTh6yB5M1e42CrymqkT5rXovVcvokDxnwruSH3rHvTssNA8dQXdwEurhyAfr72L7p72vuXkikSejTtRFkmt",
  "key6": "3nyNnNuioRHkCHyau7TTVv319X6fMrwcmjacWXPbL9vxs6JdJBFCCGewCU4eUz8MGLJ1ioMK6SsaCzCHK6ZYqd6b",
  "key7": "5XraGpAenQbkM4ppb8x8hX368xnZSdadRy9EYq4rsCH38j2K5wnGTp6YhVHRVGSYo9LVTCQEUKfJFm9PH4FEMAVP",
  "key8": "4M6PkBVLswRZfgDrm1PZaqfVG63QMMdfZf8Kw5zvAaQ44b99hr3dc5QRJoPzEQW8JgurrbRZoiCcS1fZS4emRpkT",
  "key9": "odLks2r87XU3RtMxs7svuHFqLWrNbwWsKAC4qMEojSseP9XeMQtoRXnyB12dq6Sz1GLWwLJGPCD9wV6ms3YSgf9",
  "key10": "4kNNYuWQwoUZS5nHT859BsbabsRbRsZVmhX4DfdqNzm5un5TJZsxpcrR3d4yZt3HjGdwRAUzeSDVWUY5BTxMk55o",
  "key11": "5giP29Erxvn3nk51ECG8cY6HUtKKKY39eyaFfXcYP9tcLxTavXRjQbnbjrv5AeHrYfJ5FaussjPUVcuuTeADN9eQ",
  "key12": "ynWpbyhJNU4kLeeqSMzgevSNLwKdFEezBuBuAcZnL8v4TD1MmcxG9CoWBFhuHEzPcry15W1gQdZRtQBbfR6AzEL",
  "key13": "2sg13RwSkRaEn34HwtmhrQcmDYorRUDgeoSM6j4Mb5Se55tS3vHzoSthcMd9UNrhCSRg5ssRXrpeqbRFJhEtQDfY",
  "key14": "44KsRiNadguiWQFWx7EAYCKB1vcLkUJtyDSsyuxP5BRdwidAxkge1QLFTooTBTh27PvCt68eauGMAqQBmrcfKo8V",
  "key15": "3MFaTmvKfG2rZJ26Q2rgRmNHYzL1ubug3Dj8AsVfU9GFkENyusg95DbKLCFVji7sJWes9fLYe5Vf4RiDqmHkjPXb",
  "key16": "3m7N4c6ZmJrhEUox7JZtW2Z5WSSNeKSaV5xVGqRyv7jyXJduY6eNTw7L3SaDCXyNwyao6tL3FRHE9G4A4h9FUzcJ",
  "key17": "RxnFUVe7RnCzgnJC3mRHtKZgo6yV4sBLJrRQ8v1KWLkB5pLqfWUQ6JWsfTRY1JyjRDLCzpVRzZT8gsRw86hcH8n",
  "key18": "4PVvBuCqTkEjmtZgA9F27mggjQ6Di5DqF56Br94VapGE8VXMFf2NkkW8iiRcoqb1fxdehCWBBdnfTwvNjyBW2TBk",
  "key19": "2PA6zMBjVxxoExMrAGo7HDSq8kMqsh1oWP7VF66sKxksDknkY2DEtDQTqjzJx6ivmnPiBjYB4joss9A4vZ8U4fmB",
  "key20": "3HnbmkhMG6dS6nQajVPtw4ugBLgg3pReY3UU8T9MEPigpaWoZB6PdiBKnPwW4Ak4dLx3UegH9jD9nSzPYZeSpEU8",
  "key21": "3hN4ZbQRMv5TSHM7u8LaApBQAy8U26ym5YWGroZTApJPxAjmSX8AAGh1QheNb8VrPKGsyuRnP1nuASLMDbpi7aF5",
  "key22": "3L4V5nL9n5QEfDW9mw9wycDRQMq1rBuDTeSVewWj9RJ6G3oseEzpj1SMo4LvjEfVSikHWa9mmmEvWJdbwCY5hMLc",
  "key23": "4eTvrLqQjft7PCbYgZiU1ZFEVKMwzKREvdKhZaRTQ5FV66B15DZEswk1pZxXyQfcgmt54piPkymaGm8DxXgg7gF3",
  "key24": "2KFSuLDvP3n6iLWtoGxmXUSUfyzTbYVkY49QmNyGtFYQecdNNC5H1CSbD11A4Yr3NqAMYB6T6LQHRjavAZ5NEb7N",
  "key25": "ULf2YqujPb3eRnFNxtpEw1RFkDPkFQo47mqyp1MaQ25ThzwG2b3AaSqQvpBg7kcrF5BhVYPYPrBofDPnu6DtE3X",
  "key26": "5Co3g3j4nXrNGNwvepes43aRVbjuY88tpmvDVSsCBUqsfvLfQEaguYNksFPEfp3sYoyViwz9ujDnvG2MNy2FmbVW",
  "key27": "2VpHz87fKXBgR6ZVVkTRvULHRGT2vnX2B8bU4reSkZAWXU2TvUmi3rViwThT6ztPMLn9KzmbSTpJ1T6fRsD37yiL",
  "key28": "2WR8QT5h3Fo4mojHk2n1WBVvXKzeRDsiazgHxVX5o8guwfLEqw23svUmsfj7G6G2eTXzHQKaK9DpnCDiR5vNhML6",
  "key29": "2sxUpwBj8jXr4j2u79ZbAUEzmf1jSpPPJwvHqVS48VqUSvNCFJRNsrbv3sDc4TiTjv6uR3PwPQZybJmLBnrfZP6",
  "key30": "3CdUerTFjMhCKvL3ZZwm21zqU6EsSZcTuoS23kXJSchigVBHZAmyMk4TbWe3GdoTbFvM2FBDNLpCeMeJDgopPW2J",
  "key31": "58WYJxLL2dddfexrBfcHzwc29NpP2dKPiDWSVFyXCDssPA35GxVKPJ6rUYw6Fu2SEuCEdznQVo5rZR7N6zZnzcQn",
  "key32": "2SvzAGSRZ7tyEqos6Pn7cs62J7rP6miudxXwSqRzwjJPZtnoydKKUQVqPy1QRjyb3NCSiu5RPzWEoZhbb1bnddxd",
  "key33": "rvUn8kkP3faTksnRejhPZzLvp95J8hivJdjLpXbGgxhGfjzQhZY9NXPRKBUwnwpz1K5s9vYW2mdoqgWb9vDmYZZ",
  "key34": "5ucgAcEcW2Gx64YcnNjhs5rQGsMSACs96xEBBAKa2KfTwPMf12QMiJ7UBwkWcR3RgfUnvScqUrJCmLEYCFzWqUQf",
  "key35": "67rkECERkWo8va5jVXoAii4ZRVpjdu8UKhhqUvN2ZeA3N7uZrZ16UehDxfG7izHgJSmCf6BNv1UEzH4zxLyUEx8r",
  "key36": "54UphjaGAEHRh4kX5AoboRCd9EreDoG9kSx7bxVJMXorP6E1gzW7Mm22YDaPSspS5HD3P2qN1C2VWsaD5FnyXaAP",
  "key37": "4HPzZGYBwFGetHbpur57apEb52YfDD3F5WLdXwaUoX1V8B6aoocvnMKig1Yfcgk1tTdqbNinyxvYTp7Y7hfFZxQn",
  "key38": "24rKSRDW3UfcSzTacsTn9tF8uRzumvLfUWvQJSJqFSmnc61s3GL8x42PoQBXssgaDUDyJYEqRwC6zFq1FnVeq5zt",
  "key39": "35UrijVEAbP3w3UGKuGoBf7cjJnFrMNodLjfXj4Xw54CSxZppwgV5R78fXisrvc3U67tpGuBH3bXY6ReQS7vkx5X",
  "key40": "24hPYaZeRuYnB9JcLR27m1gim4dKG7ej5LgEqmswcCRMoPbXqawAWLF9uDT4ULe4V7z1FcnqhA7AQ6D5wmnUuZsW",
  "key41": "4dnUwDXPzGv9azCmfrQFUh3fPCh3YJQdzWudfjj1JyJLXknQuqN5nfkrLFsZjFMPBMThg4nVwDho1npLBgDKeZJA",
  "key42": "4o73sW9SQPyLg459ZVnmZXMMU8MApxWQ9uWtPwStuFN8g7MJPHzLj3n7Em5c8Us99JWFrvF2cjH18KdcTzpUxEQp",
  "key43": "38hv31JYdPAkWQbvNNEARnhg2GAo4ffw9RbAwQ3HZv4Btxo4W2paMZi28QDWudy1vyshbdA3Dg6oDD11LDazRVXV"
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
