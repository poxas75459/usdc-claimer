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
    "b88VhX8TmATPr5KuXCjaT6NmCWjFv43aDKAVgfJYG2zBUq8nxDkCg1Pe6aTTDpFmEQLz9SYmAMEvuEZ3mtE9jN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49DWa2sWWieCWkUNA4xGLrdXxGQP9qXhJVketyDGF6ZZmUXbg9nJeGrVUdhZhdVdrMzToMH163VWJGsVi6PBRzPN",
  "key1": "55aTJ8Y6fn76VXreVbqQkVaLfFSqeeFxm3fySzeek92e5SSqgUxWzXpSQoktyP24VonAGNjsUQuqRXpMfgizitq6",
  "key2": "3EfBNm9MtivzFZhRERWmi5sCGmxK1F9V2brSoCQJtwh481XgQEnjfANwCNUYeHxnqnPZahsNakyVzSH87DdGKYEr",
  "key3": "55NnVP9L3GhHmndMSE7A4JmwcFtEWtw21sPB7fVJbQikTY8M34KJGU98rL1SAadeGLPmZVEMwURFeA4PcjTA5F1P",
  "key4": "4RGujN4iqv71srd6bNifjgCrLpw6mJdt9QPiKm8TAXf8cCeWgwrn2L14vG31sm7SKzaYpPmjaDxG2456sFPbB3kX",
  "key5": "VzFY89UEF2zFt85QRkKZUdd5NexQ6nN7pxHxu76XuFVE5iqecgEqsrH2om3CQe7sDSQVwrzLkNwkZqnZ7f1AVbf",
  "key6": "3GBDtJRHRjc3QjTq3Qvo6LXT4gmiPz7fySS4A3pU1GATj7VKZoL7jfDsQS5NuzzX3JwhFb8uLWnQnJpVbeCPV19K",
  "key7": "67F7vDMirVPkjnkyetHsJ9h4hNj4mRC3JvehRDbKjiU1JPw2DPGWKwWyrJybvLaagejTf8QcWkgKdqkVSRRYHHKQ",
  "key8": "4pGUczaTekdzuDwKp8zUERGAVsPPBqWG2S69yZhXtjFzDi8MgxdZ6e2iFpWjUj7CHfWvimuf9Db7pPykyfhXNSK",
  "key9": "4xLDUCUepGaTn2cwTCPhpw9EUaud2tv42bWs39qLcGyCiTbNVnunr9ZfHWFUTYNgDEoQS6dtg3pbpKVDPk2Q9av5",
  "key10": "4baxgtoqYVaMKgaLvB7e67eEuMy98zhdjAsSSU5ds4BRt9Xonpw5L2wK3JKrdaJ3wJHavTbf1EDN4YoF8XD8W6eJ",
  "key11": "21bbbDLycBDuX4HAVkXnBb3TCESJWPyce6bWz92FsiqijxwYb13V8fq3JyqYeUVjgnoRMgqPrbzUQVSWwrobwXYS",
  "key12": "5We59DKYKKCH3MEfttTButF5NrAHdwzfCunmXNzotU7ZEXZ1UXZ96YgUfxETmhZvBy6SGb8zhq91A4ShMq39WXCf",
  "key13": "3G8bMXAciVGVhP1bB3GEznAvsPcgDhGnpNEAkTYVuUFwiUk5tMdPTtfFb7CctbVv8StRJ3uvgt8PjV1ZaDxCzSFm",
  "key14": "46xf5kCS7uYbYN6yxfnWxdRr1k8Z7MvAkspwVSP7oeKXPcv24crUZ1yLstnjruHyTgcGWJSRt7dTkG3Gd4zW1cTi",
  "key15": "2SezpZSwP2LVA27xfCXCWi6PA3HReYFm3ckd1K4Z38J4gPueGjY71X8wevqsD9STvG4eJoCaTiC3Tb6SRX8Yfd9L",
  "key16": "r79cti7Gy6DKz2cCQ1Rw61KeZetVjWcpBboNcAY7enKJ7QrbpdLjp1U5YVbB2mnTwXCKMkif7bSaQ79ucN9jfm4",
  "key17": "3vxnhw87k1D2QsLRcRRY75RJ3Zf9UG8cAv8hHkLY7F8SARi1tkWHwbBzdvBSoMebeLVdwmnmECHfqzJAFnuTP9XS",
  "key18": "4Egyf7bbSWHMtndLDFfuUk6tuxwjczeoHNUHFuKHh2dhuUkRhvEnhL5snLPaWLS4tETvH7qh2jbakfe9L9WTx7jx",
  "key19": "2oED3rJhf16RMq11zzojhe21HgpZjimBRtcFTUHrgYPzsGKiEvNSQW1RzKmRkHmeCWRyhWz9XfKJwx8tcqt4mdfa",
  "key20": "4C21YLG71fBpjFw2jZSHvL8NZ75PpZQpHqdtUSeEjNAiGJFFYvTZaAUyLZRDv16zufuPVSc7ndwwLVQWWCj32Qtf",
  "key21": "2GjoGNgbPY36meGXXFQDYxLcfSi7U2M2rRP4FG6qTdaCZiWWoT8iepNcgdy1nPp1ii1NDVXBZWCN8FHabeWdXKqv",
  "key22": "4HEMvRDeysh7ub38aGKrBom5eTZVng77L2rnQfNUbNkTQeCn8QHcrqgMRv2LAuffQyVDd2gS5bLkAbW48zK3tjXz",
  "key23": "241muheZTG5PqF6DU8vEvhHbA9maa9tR3aR66uncNnH1xkhGEdhMz6wibHhZ3CXZD6UsUBVpxuuzq966LidhEzq7",
  "key24": "47enJwaBYxxftUsydwYtSAAmL4gpjE7hQy9om1Q1A7Q21NRKeRzzC41FzzJ651B98AnsBhZXBAwE4aaJxQEbp9Cy",
  "key25": "4YERDsW5VT2YuLx2Gnn9hcHncnxrYNhZ8iiBHsqeu3FFrU9zEUShcC1FvvzTUdMxmAaFW55bk8bRUEhWRG2zjLw8",
  "key26": "2DWJyxj3iFWwvxNNCdRhLZY9bfSFdwjPSA3NG5hVDczPZdFaJWZFM8dRubrffWm2ktEjz4w4jbBKGqELvvHoMids",
  "key27": "4naKr9kpAyg24Mx5cWpKQAmA2N8KsJ4dSWByAf7yujhvkuo3rdAWiNCMMw9bvbhDcYhm2aLCjcYuaT5sitdEUo6y",
  "key28": "3zEkrLm1v2ospcHXBkJ3Zv1gxmb86RxCUypkLvguTAJ6MAM5KL6X5UZQcR9zjy57d5RarfS9JEQzxdvAwqMmqfc5",
  "key29": "9VgWPepWSuupnjVorEPVxy6FyEXgmzLt4CNQ93fbPEfwjxn6E5EatddXd24ZpNDLuZWRCVAHEYtu2S68WbKHtjJ",
  "key30": "4cK4ziETE1SuEVmz7rT28H1TTRrz8KYFdjQ7hJk3Lnffvkzyfvm3UuCujKHWW2mVb9GLTPWmbF1EVscoDAYgkG1g",
  "key31": "23LqXgYWsuhQzzRe2QANVZS5aNwmz1MLfvscUE3mg2BmfYmiE5M3KwEgRdo3cLrUQuj9ayVWvyeDLkQUpMpLdLov",
  "key32": "56BF4TtGqB7EaRuwEgFW3ZPM7sThy8TCQywAaEixyQBmC64aea64k4yM1kqB1qEY7Hsn67rHBJg3AeYGam3nS2XG",
  "key33": "MuYmJN9zfsn3eRKYJscLfzMqLYWTbpPcs4Q2KrEvxp2QD9yqwTowq2rfpUjQ1NzZFYziFPDLrPECu5NdTnGR4uZ",
  "key34": "4Mpu9erZtKJUrkRgp49FVpgsBRT5XAg1ikxPmP8AeAw1uBb7CeKaoMonXC3jhyYLH9Q38xiteJUqFaFfvVFmHBm7",
  "key35": "fkNNMnhgAefydGddJwLradsKynP1Hbbd8iA5N7WUenoMga96cseo5q489CgWk7xTqTYyMun1z6HLGjfC7P6fsbT",
  "key36": "3aA2w5Y55ho5LQ31AzTVtGxSFZnS1hiPcPkbi2eznSYZ6uk5JYQkoxwNRC7s7a3Wd935zGzWEWibyzN6ByYcjgJe",
  "key37": "tZ8xZeRsKy8jV85boeCs7KfXPfRHL1d8bR47sBwvKwXgTttiZLgrjTQ6m2ycVugSErBWczDcbA27z4VqowN2qqS",
  "key38": "5DvMZz77KMXC46us4FErteiuRpXuvXP6J8ovUbyG4QYSTytDbdGrqDSSqohtJCGrxRGZw5AiEShxofA1g9VQyDUy",
  "key39": "342pjQLZYv5NWUBKYCMsf1gsXbZBfgQ9fL7oCTJXhLqPsfXSqp3epe9zeWh5nKosJuPsZvBhXbskSwvcnjej5Uth",
  "key40": "X2fry5kqSnv5aC6n5ybZRTic83b27MBtN6eXecy5NoueBhb5UtXAp1Z3Po7yoGiVFuJ1NXSXPq1YYdHpAuvtEd5",
  "key41": "5Z3a9uVkMWH5QQT1vbvLEjJGMa3HgxUNGhHbgVCNNLWeWeXYY8B9KJTSpDHdmTZq6thF8tdGTBEyfgLP7JZJYNb8",
  "key42": "xithYADKCvcVb8pcAYtc2HLCU2jpMTecYB3bPju5aq739FkuFxQFBS1a8fmxPeShLAiRUBkK7uCgLHZL1Hrs18X",
  "key43": "4a98KztZbVR5twCMtph8MYgt4Ly7e2J7fiHW3rzeUSqyNG82WZn2CBAq8TaPyRZwtX1tqcrUYhJR9kevXUQXeTDV"
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
