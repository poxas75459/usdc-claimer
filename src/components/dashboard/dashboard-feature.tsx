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
    "rBe2DMy51hvWLC7BHJQQredDc1pgAAxASbY1vXjHZKqRMuUebFpDDD2NKEECtktiQPsNJMrXRddngKbYuwWRwWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SPf7LYPKcdJfSapAmCscnu8nJEDJ2pzHE6qhXF82Be3oXQoXqSgDPzbWHSV39yNG5hxfN5eZ7WAneYVqiUNQZ6w",
  "key1": "57gsf9MuDLDxd33fDvXYqfjPRrqUgpKZfqVa8XPmyhLCDV6gZRTUw8sHLFLUxMcQ1h41Zeyj8G5j4RRmANaXPUBG",
  "key2": "64Hc4gz4HyrSXzmrHtEcCMdotkx5k5pj2sbEWoen9HcYvnu8Lfq94778NdAeNLZmo9DGaNTzE1zNVoPwuBhnKsZ4",
  "key3": "jJSUcfqxmDVw4QbWijKN9YazbhCHP9S8hcrXFRHfSogwFbpfQRWkcwcEHoffht2n57TR5xye6gnUvVLbKcKiJgw",
  "key4": "p7NLtUYg4aoSiPvr7n4Mv7vwm5mG61ecyxao6BWJqD7cst5mpdNVpegD3S4xTWgsUJ4g33WaprJPkM9tHu5vkwB",
  "key5": "4J5rsQiV6yuWj53StMLSCfHLnnkFAxBCQCTsHn4mnFi8uS9nj859gzHyC7BTogTuJ6C5wn4Z7TtZYsuPyXDhHask",
  "key6": "iEoE17VZYnLMrZEU3EPBhmRqHWQg2aoMb6irBD975xp6iRhJWERbXe5cMjKTg6erNJnjPdUduvARiQAy8gX4R9z",
  "key7": "4bw4ra79xMNoyyqBYZQYB24BX8Sp3B4TsK52F27v4dB6ovtyS54vj8GPy4JA6ZL4wngPPGi12zcJQSerFsZw9CST",
  "key8": "3WPFdX7wbLHbVJgYFBUigauWo4hn3nhBbbHwSpNn6yVbZv3VNDpsxPoczZRSNZ75bnnadhAUQBQyxkj3Fo6dmpGe",
  "key9": "4vqzitwjyGqqRPNEoH8vGP9ibFtqoSybvTXkFkgok4cbMvPx1Qb2hYqbNUyaTM2vuanzMYqj1mm41YFSYchjc4Uu",
  "key10": "3jhiRmQjGoixF1bGb7P7DvYfh7mDtx3Yw5YidSa9fBbD1bbBKvvac3MagM17eXEaXfYLhmthQGV18CBuCCv2rSM4",
  "key11": "p1tcvwFVbFMsVjvPDULk8bNmpQu5b65eBXMA4VJ5VW8yQhEMZuQHnT4zwPf1q8a2kAhTHau9MEs6iaZFToRgQF9",
  "key12": "2sW3yRUo8AfuVLURRm7LN1FTFDmF3PhY7nZzWJhJnXV8JB4XtKxiC6c1grMvX44MzcXyNdxt7Sj4whgHhgH6MGW1",
  "key13": "24Pk7UQakSRoasVJJVfKCkuEP52Ctk1Ni139a2gNdBWWNMcwJirf7aKVtqL2VATnbjx48NtTSp6iT6pCrUPLotX2",
  "key14": "5hGBcUf1gh7YVkfX5s7uJaYVagaVTspewkVdhGpt6qia7GUwZwgNZxSFGTSbDL5buyrCMEb5PZPKuy7b4gsZA8HR",
  "key15": "4s4NronNvcWQZgbsFDc8Y7QwxFwnBfFQrHaK9NjJB6aToxbz4KTVQ3KBuV8c5VAEDQT4TndY5t1mBBx8mLnDxnN4",
  "key16": "37EKhgTAyjmaZf2kjRSs1XomansWzNp8umuQ5s3LSQTruQZvmCVoLcdTsBDUvVD9of4pBipZ1b9FJeiBKAxm1cFb",
  "key17": "5CkivvsCxKMU1BEgPhPkwgHWMz7xZvTcSdEESWmVjUkne6KLjFfEy1d3LL2zpAjb9mA4QcSVso44bWh11gpLTg6H",
  "key18": "2EdkbNUaHYwRkF2jZmGQDQTVazJ9uzr1tNcYG6nX5p2G3y1gf11XUzkWrECdzvMkCT46ZdLhJht8nLqiPEH7N5FR",
  "key19": "4k3JRK8XFHjR3mgpTRhGE4Y2rQS2moeyuoGxWyD7iHzsyL9Q4Qx8DK6Xb1z5RujiU4yz55Vx835NzgZaih7eQ7qa",
  "key20": "2WtkLW1M5SeYk1KVmGhqbnb76BJNEdkbEhBVRDsLavHdZG4RX95uwVTHpjQikSxZS8Xsqa6Sud4MgpsP8xk7wpM8",
  "key21": "3hVnMYmWHb261HfQjcVM7JHydumEpXQYyCmZhieBae3BDXNraouxyn9Z5w2PVXJvedx1LZKEWnX8cENhWjTtGWj7",
  "key22": "3VVGquxfm625ukuS2gR3zpC9cYaN3BUbFxkaNcRD5hqUwAB7d8cme7CpbYthJ24SreuH5RXZ7bfTXYQHvzZgZmQe",
  "key23": "fndHojbo6LcAE8hBt5HjU2wZ1TzjAciDzTaTxBMvkz63M5zkBxNzo9VcgH2aZvLz7xxP4ijQq5h9vXkTxBFniUL",
  "key24": "2DKmuLPZsfqanKc8SCKAZGvUuv7nhWgPqxbXFg82toaChmzEJ2hbiD23dTJQNWnS6SuSksGcqkiJeUyBq7chcLaE",
  "key25": "2ubKVDDkYJfjQg9Ej8FzziSjQFHxPpGnV1FDcVSMJfwUgHVEbdc3KevH1C9JmSk4n7hTYyZjNxmezAoNbSAQAvCs",
  "key26": "659XhpgYddDiVSYsKzYGCYXCj6uaYofMLNCj3NpnkXmfEDwEmwhM4WLeYrCotcM6A22kZfmfYKpt4LVPfFzhdpha",
  "key27": "3SZ2uYa3na6ZEeUUq7Fb5Ab4VgTXwnDnQDKzmbRMLRC4SLn5kD6RibxUSxJ83ZHzR4dgAc1rbHZqaFHMsXK8oNfi",
  "key28": "5ZnAQfzmAp9QxMMMLXwxvLN5iFdX9RPsYJE3VYna5W6Z9FnUr9SYCpKX97EXtsQjBEyLsWozecwdf8VwKTRycjkF",
  "key29": "3HotHQE67duFRBEn2Chf5zs5yARTZyxdh4Hz3zoDygVhMnXeMYY6vV5hh8mYk5MnS3YRQrCQYsgXsa2bJsYAUZrC",
  "key30": "3Wbg1cYPMa7dSCyYUDDpRL7baS4sPnqtJmkQhWKLztWEAWzN7Dw8x39d4cMthwd1TuRHxULa3UzVKbRqdRttnYHo",
  "key31": "3Y2AmhSQoP55gJwg7jPUyg48TmKt1bFfnuq6YEanTSEC7F6iZyNtLiKegwVM77oerhqMvFFcfRjkvAcYwZrjLAKW",
  "key32": "4aLuUA41kRi9s52rN8xZSMNz8wUqbueSYzTBQs4GHAgSLYFro35jzqk1Aie84Qe7PsZGZGLzGqoFV4iUDfMMwTjg",
  "key33": "3MPTtzb322W3wDYdUU4Epa2VmgsXFo5UgHDpzYbZLfCu5o4wVhNDChbnQ4uciS8SKr7pBy84F3qx49gYd8XacxPi",
  "key34": "2NpU7PC5VQsJdrTRbt8XeXrDGyxdfGUmcftsXegwNf4ofzrh5DiF9EkdBqfss3iz9uNfWeQDhctH2PKS1JjuShbE",
  "key35": "2w7CsqH7hdgLnweeE2bAKpmoD3JANRoFVPahmEDwj94be9tWR11paEWpxF8J9FWvHfznShbaxaVUt2sYGhB5cb7k",
  "key36": "2qtVeqca8kFiUJBs7y42uAvx2ki2JBz9ikL7fwRZFvf5wedUcNpVmNHCQ79vBKhk4sksAiGMUtDn3Hah2bCcukCn",
  "key37": "2u1M3V3nXKPcKH9c96DjQ5guM1TvqvMq9MNJXi9GZUtiM4BgkuHH2dxboqnq3EoHQT95vW3GUM5GwfjNS2JuebZA",
  "key38": "x4CZCQWPiifkGa236PL87JAH9xYcK867o98rZFuqb4kptcdj694NcEgrBGPUdBXenv2Zawi3um2YLAPQdpKzt4k",
  "key39": "4Kw2yDDae6KqjdE7DKXsv72HqUtdCVNqjhEC9pHmecTxTDbPcuvRbaBCMTSZ2Yrt5d4DKaXAC5SsGWLetrodMAwq",
  "key40": "a2TzPiPLL7CB3zMAvqrCTZnyDzMJibv6Rxjc2hh7fRQ7sDzoyGjGsrrs7nV9Q56Sh1qyBgnzkan15n45tAoEHgo"
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
