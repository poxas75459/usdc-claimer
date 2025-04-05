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
    "31Jr1M6eoj7jL6kzWGqEZD4ds1L5717QqF45YbJB7Ysuirc3eGPYVubhyc9ces9uztejF4B7H2KnrxSKHNYL6Vix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uDpTaKGcHbikdSst1rjQNEA2H1ZYBZz99iQt6EbrB8E1Do5hxDKataKs13kgXvtAasQ6vgz6DuoT93eWw8DHKdV",
  "key1": "4hLRsNY7EzhAmM7xYFViKv8cc6zMAZp3Aspm6Fn5xu7RKYn4XLpbwLo4cguHJRD2V6oPUKPJky8ATfFEwk2gvcAr",
  "key2": "5C9QQbmyM3mwLXuB3XmHsqT4xJVcRvYaBTtDi2foF1LnejvTi1hzVwP6C1PagduH9ePuDwBuXzTtgwKAVtNC5jH7",
  "key3": "4oHACsFgk7YuT5kCNBDRFEVoKakeadYrmdeBj6LXpHGujkhZvYZKp2qrjEyiR9ENWka74kCkep4zk79ipDjb5NSP",
  "key4": "4QBoRjtxX4q9Mva42oh7kvortPuJakK8Tk7gzmZ1JVRgK9mYRuVvp9rTb3R6tMHJZBwZJMyokogCTVBhoSNQUFoL",
  "key5": "4fZa8VAPCyiCvL7x1q1YPrfa3WgK5tXqA1nDi9kLAsd5nYi7qr46udHoDiZ1njkMeZrBjTqhpaUVVxpMmxc1DnXS",
  "key6": "4T6TV7rQYuHdy6GxzVrnxziYMxJaoRZh7qp7tm9EJ52PJ4bKYjVQUqkC9VMunnNux3QxHpSJ4PdwoExPes4i3HtL",
  "key7": "5C42KAseYwQM5AFoHFmXstY49tPfkHvAYwcPefvGK6FseAugsKw1pC1FCwkCfj7gH2xReh22tXz3TDi5v8CAbTAs",
  "key8": "4WnvFXgwhkDtWAo5owyZSUeLWLttq5By1UqSKZiz2a9eS48Eiadxwutxd28F27A398kG8xkYuByETuRZXcyudS4k",
  "key9": "2EiZBN5oPnVdP3PnCSdxURjB7XL5KrpH5eFF7UNksn89QposNgautDL79bDVPiMhu5vS2P3pQHQeDXpZZUTEr9CJ",
  "key10": "3LsVR64x726Thp1WpE7vhUS6KcwNHDKCk8zpSvwifRXNN2hwAVRa747xC4SVgCa65NpsSiyYaS5Lzx42T83hJbuA",
  "key11": "44qMxn5UN6c8jYAoNYT1SuQF5nKhoHh2AFotaan6TgQWr112zK9ds3ahdWpCTBQWJz7tT5Hbwig2GTGeSjEtGJkV",
  "key12": "2DW4snwiqo4SjEerhuh9LAZNcX8giBdH23nseXUPQU8uUykrAKizpo9rnU86XYEsxAY3UuPSQRTXANMoaYfAFhwJ",
  "key13": "5RVjvfwV3ztZSnidz97P6s6gt4wVD99fw1GaEppL8Sh7ce1Qu5XebwCNj5T9kbYpPnW7sdsnwzhUKLBrjeFkeGgj",
  "key14": "Hps4wGxEtfwzmoFhPAADXuA1yQZzQJsaT8aZDHhKeswPiH37mRgJeyygRGvNNwHoGpDsajXcYYReoxQeko8wvMy",
  "key15": "pFkeG5K95TXHFhMuG8Wh5pr2sHZMmWsqWyDtMDMdb9DgmgchmRCrKtm8noMGsXrXpa1DTBcNGx3j3xbrfbVjkgX",
  "key16": "4a8EeYD8NfW7BngfkwRUB7F843Fu4DmmvPKi8hUZStgc55fjiaEFqS5gG9SnE9xbbPi5E9HZxQ5Gqng9dbVEXq8T",
  "key17": "5Dnx34oixdEaZkfzEwaWrJFwo3CjcKzko4Pb2DcnshjT9PJQaZy8MmPWGdVoZVctcY3sF5LQFVqu1sWzEgsMkHVn",
  "key18": "5gc1qwskhFVbjhWtThXgxigBVuge1iUhtVnvtdXCMY6Fj1h7PbiNZJAGGj1pZwHf6idoa52VSY8m73hiUHz1sDUt",
  "key19": "5U3JohRcG3U9oPGZ9J55fEGj4YALJTbf47vbqApbw8f3hZPJFb8QPe8xA2JVSX5hTA76XaWpbWYvuL7pbVkkrhEW",
  "key20": "4Zk1PJZX4DiuU9ZxrXq2tg1zRXeBCdQXq1oEsAVT3pXo2zKdPnRJLtsdJP5ppJXLFV1a4juuDLRSDZJuEgycBnVR",
  "key21": "487L4gTeitn6rqwbVj4FWnrrEuG5QfgprY1XC8HMCbvAoUWg7ayMgFveG1N8CyHQ3Eo7AuwdqcZyv7zd4Uu5rAPF",
  "key22": "cQQCBht8sC9TV1mbsrJk9YFggKWKBt9Sng7Tm8AXfzN2swatYXsxQdHq9r7CzteL138vTZJS3vPtZ7XGbA39RSf",
  "key23": "4kbAYQ7vhAofNyfUDZuCiK5kZDTEfqUPa7kvjoRktSJSQz9rMq8ocZEWuVD8Kkf5TarYay6hWp5cU9xB6GCMGEGU",
  "key24": "3M44GDKHyY6vh62oQedufjji1naQwbkdSXzmAWKdREumZjaNxRoySEhm7gLj32XuXnQQprE9QC51eyctuAXrEeom",
  "key25": "Do3KmRLrpWJzvQG7p5QbnLrdwkKGJoUd8XwCuiPJdwC61R1PXQuLdmGpDWWcjaJZVeG7j5othrv2MrKGtwVqVEn",
  "key26": "24kVXxdDYgFscHLPLWmUR1HgZZMfWYNMRjBu1M3axQug83JVFJAPuS69i68PLCdWHtVncEZPCd9DmmJrzo4xcDUy",
  "key27": "3PenroivXbEC1t2mv7hjxGG5thotAjQghZd75hoTZaTTW2avi6x4H2NHEtTAqgrtFt2uNMCYjiWvxQaco6KyhgTK",
  "key28": "2kz2JgZLt7smkBz9CEx1CHRgm5Zu6eckwBFxA7hUxJuaet4Nevp5ki41wd3RqoCfqGyHq3vEL3C4aVm65hkW6gCU",
  "key29": "4VFqcZxG1Remmz5bsqqtAdPYKfGE2sXaziswbLazCWj9LpsGwwZ1uBZ56Hew2hqkFeg6kGWDudAHH7oF3yuxWRKv",
  "key30": "2rxpeFTt9y8GjqegPW6LmrZt9HLTRLS7Yj86YgmhuPQbzRCSds62wqVA687ayVhQhUqXNWB7PUWzc8dFsYvStbS",
  "key31": "5NcAdAvhGDNPTDhC5kmGRYmXBKuqSXss2N4a2MraCQHJiGeC2sniHn2R5Bh4FRJmmFUSGK3KsEMmbNAkyZKiiNHM",
  "key32": "33rYAYpx5oPwa1T2aKAJhnQwT5mZ382ogKF7w9NVoQ26uUDxzCNAvHTjX4QzbkzakfYzsCVBavygNaBtxp1hDATc",
  "key33": "rW1xuMAScNecNj7WGjHDvPbpqe6mRM11ieGZecBpYdL6mF8UPCuwqz66qJzqHLa1erqorJeb8o1i7HjVoFrtMMF",
  "key34": "3EA53oWBfJUBz3Q2dRYMZy6cDJ9aDDhapdfFtRGkDqtxj6gPZob9yCgUqK2FKBRpgpWrFRy7uzGXuMmaLtPd3EJf",
  "key35": "3LWGwNUmJoBvcQmXgXMgU8Qi5jfjT9GcJZpqHAaF1eiUBkyKifc3ZitVHZrcDstjaUUk2V2oiVLCmMxfYzNFZk1m",
  "key36": "4djBygj3HyLFQvEnQDUSpcfMo5aDeExLVF8oKfFGfWTujhaySne8ZuD3qGbfqmdwCidd47KRkerUWT1YsFpq1RU1",
  "key37": "61rHZyjrwNT2uRkMsLVtkEdCBQ6u86JHjP1qQaHhKtgL45Ngi4o8iiiMkYp8NBdBPsWSSo2ELDRPpfbcZD5TLNAU",
  "key38": "3wXZwtDWKBTUxcEjndmgGPsnE8VTjgpRZBhvD8CQnGPfJP9rTQzPpfyRWoGAcbQTngL8gaNVNkhE2ckhNH9YNJih",
  "key39": "3W2ApmjirKvGJVvxbWGkraaxAwk7JXCZuP2DWtEVfow2yqUnzgWtE4h7TPnPyc1XY4csvMbRKC4sG2SPePoHmwx1",
  "key40": "41pjg2XPV5v5u41jJb4mTzKNZ44nrwAKrE2udY5QLaT6JTvF4DZviXPwsFyEdhhwRAnWVnuqviz39NhTeUL5mQo7",
  "key41": "5VQeBeBPBbgJebJShburEirAMURhPi5B4dU3pAPxiVVhWYT5FM3HaTNujNt1mjFwubSW62S91aKfZDac9hYFXiua",
  "key42": "s4JFvB4kE89TMY6LVTZgFxRBazo6uGMD4BgRBmpfxN6T4HcJsK8fnkiNmjqWFiNqC5V5ra3iwmpKGMrXqiYFoXU",
  "key43": "4Us5aESvLnX5psnZkzccMcmXaLSBnPANJHFk59mZrCwbL4w4eb6GSqr8dRgs5nXFHz4qVY4hvVytws5urrrzHd1V",
  "key44": "4wD5DLtDrptAjNsTXisnBbn2pty49Wu4pxBkUCYZuZaovn1B1PCzq7HoNH7EzN1yGUGJvuuydgxTKyXD4UYWEVFq",
  "key45": "4Nn6jmuMErqEqv8C7ikuK1A5UMYMuRQc6iRU3SN35aKGKSPGtEzq5ZEK8h4SvASh1XDjVfTovnSYQWXE6ZaZuWY",
  "key46": "2v2gfXM71JGeYjJZs8NyXDqMKitvkC2ZTuBBaBRC5rvZ8MEEpLeGDbqp7MDHUJcnQAkvrarXWEUR6uN1QTXuxgRA"
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
