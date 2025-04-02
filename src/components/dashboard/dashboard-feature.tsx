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
    "e3mrWUGnDhuznd9YPUzJwEGGueKFEwMj2jiezwBMKss67L3Civf4M9QT3rsrZ9jLSgF38R7pb2Jp9kuQSe9xgyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4erVioJXtsqET6SQy69ubnTFbrTMbgqq44fyT3pGDDX3DDX7KH2Hs3G8Du8VQP179YjTLJmWhhQ79UTNyiFkiV7p",
  "key1": "5qJY2A8A5YmZAWiGras83WQEbCgDxEnmNRfhDgpe1QZ2XBsWM4WtVUqp6dtGcCARrtbAdyTPpHENVjjP34f6SFGg",
  "key2": "5XvywpSKEPW6oBhzUHpqBMyWwjpC9F2zm9cafDiZaP2a1JFPA4bWuHAT8jgTkuaBFozSPMGcnt71fpRoYrjv5VLR",
  "key3": "FatYfUXNqHgg9E1suEr3EVDNmSVVSn3PP7xeqfE3reFPzEEc3UohqrUL99DjqFb1fxorMDiNBE4ZEaXMdTNmUJU",
  "key4": "Vke6HHzHZJrBpsHMfNS2bxiD2pSo3HNBsoVp4BFcYakENJR1P1g3tVZZtQ8FeofnQuGGjyw8KxVFAp4Tqcj5NLZ",
  "key5": "4xpaB5T8KokMVmooa8r6XuTHqauUeaDRCTAzBeBsXawLuQ5pKevFvaq3ZyyLytuBpqqZYM2M1aYeyvSCgucjCsNk",
  "key6": "LLfiyFuka64ggwFBaEgJxoHYmEMsftctfsL2Ak9SxVcqPgq9mZW1D5DgT6Y7wtsKUXgFwzC568dbJNsjJ1xpqxr",
  "key7": "SvDwWJgN7C1SEWa2EuhGN4SFJBefLCGk9jRUostVBnYJWMvrSoupCVM4BKxfuXqNhzd8vvC1ncYjjc3bhgygUgF",
  "key8": "5Pk96xNCHywgqmYdJgSvGpLs5sk5N4ErSxDLhJHrJAQiQP9MabCNdN8wV3AkLrXnwY1ttnSYmyKoziGMPz21ak13",
  "key9": "2AUQcbHJU9KmzjD4seGVz44iWQtGS6zJEXVMpN1CPkU3JJ2MwWTA3KZmvbKF22myvRS7f9ZqaNQAwdpwkxTcJCx4",
  "key10": "4nX6g4xpnZkaNoUMaqp6UxFo9ny2ZTwYK1mdEWjBy92wixor2KPR9nkMBL3ZV8X651Tkqn2CJZcnfSKT3e7QfzRN",
  "key11": "57cMjjerF31igmhppgq25HVfvJQkfWN7oGr5ojuMZUDQ4WauJPXyPNBeSAM9sj9i3J5VRt5UPitoE86L751DHgmm",
  "key12": "5YtWaNneTdVCPZoDdnf7kgCf3wTo9MZpPKyarmECk6Qmx3LaMjuN3fQKyLUUhbQHL1NUGry38Qq65ZaZxJB5ah3o",
  "key13": "2vTEdms1ppL9GY9ebMNRVs8nHwBqhVZpNUKYaDMKe6dvnqJUqhFBDAbFF4E3qsb8ztaCtc3SdBnjRpW4XjdzDGci",
  "key14": "3qxJNBGwtD7wfry4sxVNGgUnts3L2TSjTNSNdiD7tqsKmXjerjX9FaMeVWBgScBYGiG1L592KjxacuFNfKrZfKNg",
  "key15": "5ZGpHfJdM49wkd58xdc8QZ5WpdxiTJzkSHj4ikuDiyxX4nKnSGoXyQS5HoVDsSXvxRrjcNbdTa5LgJpLykCCLbm4",
  "key16": "5Fg6L2x6DrrU8RWuia7ZPEfKhpUWyyWQ7aaaNFvD6FdDVfB6aKDmXqXhK6avkA1dvqncSo59K5qP1FiLhfd6wu2k",
  "key17": "617kssZ2aduKHnkSchyW51EU2NU5rtStVTopKDjGyqDwPD3HF9d1BY4x1fk1hYhSvZeRha7KCeCyPch9AgEDeWkh",
  "key18": "2GwLLQSZ6hACbQYzNarzXEUY3HtyG3uVrsj4pPxwobjyQwr4rnLFFT4rzamN4tmM6xRFD9ogXgmuN37b7hm3yRoz",
  "key19": "2SGoYAziaETjNCmVozfHSQHGhyfuYTYMMHov3qHEQApmQ2Jp3TuDPrBnfA6jb75iyS3Buobegvg6oY8SYCziM7um",
  "key20": "2xj8j15XFYfELpXgobRDCbWycy9cwhum4ukSP3B7mqxt3UAmLAXiFg2zhDPC9A5SnWh3GbRBrh3yVzH7rCw7bDAb",
  "key21": "5etHvoDwkXQmFZNfXqAbmqv1REMbXKCgemQbnzeM93ck6HuE3pbLTVKAcuaXGagbFaaVv9HZgPPjaHmX51vtpeQ5",
  "key22": "5XSkxGUGg25b8GN3ywo9CB3FDvQnXXSrzhMSrjya4d5DFe8pVMNhpMRdbns8VyEYWq9hm6b6EAM6PNcTNstzHYxu",
  "key23": "3cuWEKcB8L9evWLebJAUrnJq6hwCqoJRF95StjkuaVPvQQpXpDaVSnhyRzzPYgtEacgHmt55VmtJgzVZTx2mwzTK",
  "key24": "4iYex5eeR39nrhGMNv8AyZcE8v1b2J483MZA64ecyXHtYQWf2rLJDJayc3TPURqgPuUiZvXcwkUmXgBzcvZCV6Fi",
  "key25": "3WgMgM1knyoeZKcbVgmKyLELMmQSFXr3aXBm6wh8dqxfAu8r1EwVBc5jH2a5FgRQoR72mzTSCoBnfipRfdVYvVt1",
  "key26": "2V3P9TP9x3gNzp6U9pJxQTwfTu3WcsbSnh7NMrxwfkJ9CBF6ZqfD81DsuaXfJjEUTQtLTaw586RvBebtgq2mMjZ7",
  "key27": "LCgtjwhF8jayYWsZ6xSctvSo8fEmVUz24Dz7WaDFvUGwUC9oW5W6xRuPtFtwpoLfcFZtkQxHUnyFXkBkJeA3Rqd",
  "key28": "2BTVVmorh71asadxFQBzyQkPoPjdrtEaUedNu977ZJ15216ct6aXxSV5tzwbzQiALPaAmGEc7j8S4vbKz6kEQfVC",
  "key29": "5dnquuL71teLrvdrGr94ggiSzjHTYJdGYcEgVNDv96whWPzVoAz9vSrAfKeKsDjWnZkMsUtC5F6HWfkKq8wSFPcr",
  "key30": "xhnA7DLGZQcbVcQupbqap5AT27x3yPticChjywivcF5mgvPPMCrC1A8ttfaWieerAAXE8rg39oDpRV4DNR3Yuag",
  "key31": "2PQDfdq1XQCr3tCTkGRWbBRt19TeeQjX1SQq1xXStvFQciiAzUhM4NSCLS9FdnWEdXsMtpzhKsw4UdS9YvoBoiz8",
  "key32": "2B9Lycc5cBvL3Lhxb2osVgGH5eR6cFc9B9pDmqBjkp3Fcn6a8ZKaSRrMvikLx2MF1zvbEwr5vsSzhrnJXH9YbWwm",
  "key33": "EpbGpJwAZxksRa1rGWHGT97kA4AU2BCAfZVm8WqimUhwndKMEhN2awP3DvJWdW9spXHezMBMAaQdUyVJqU4ofym",
  "key34": "5KUa4na4vbfTAframoQS6EpxABSBQkmYvkuQHPLxvBmzwkRsTkDdSUC2FDs92wZ12UHfvYge4a3oMSHq5ktdhpAz",
  "key35": "PSsM5Si3yBcnYgkT9GZaF14LL6NaPusoeWu9coK2ytzkm99ZhsyPggUfCbEYk3zhMDCCUpat72wxgei3ZzitjDs",
  "key36": "3eg784JYWKtotytJ2nuVmTXSkmEDJc3crHSGapstv2bGfpo6F3SZGjNXRQ9ZiUyK23JgBDMRnkY77aScPw7GYrYv",
  "key37": "7ohi6vgJSaqfApkSw63WL1VmAEpmwVqNVJ6HVkF1BKhY1JhwvKtYSidurLS5YgvXL3caPAEdUpQv9RUh11AHTtA",
  "key38": "2PYgoDKkmUknmSvA4Heyzcz1TZ43JobvEbrBwTB2mRjDtb55MZYi6phKr61S5DkFRhB5Ka5u6xeVLDb4okQ45j8w",
  "key39": "5mwZvB6fCn89KVdc5BmGD79r8g9bze4bZo8wP4GMuuD9Eq6feqv33SYyXSoEBthx3JhfNAANuoR5Ty9w781nZdvp",
  "key40": "3N6Ny5hqPTtDZTAp2Sv9LKv38dnHgW8vjaQ1RjtUegBw2KkJbAPKfwEHZfT6zPnaSAEBhEVsnX6Pc6d3NDdJ84f6",
  "key41": "3yPGT681wwgv3FpPUVYV2g7xjiCJyH4ReJwnbDr9p7HL1VNs29oZBBsWpLnbyCU3v9q1246BxVkuaS4i294rhMMq",
  "key42": "3nDB8BTWihd3Trsc1KoSS6gCsxXQq8QmRCncbkGPPQKk4nmFxSDQnDhNJLw76CLZHCDgTwUmk3xZHuWkr17byTie",
  "key43": "4topnBcZkSjsuuhxcfqKPnF1PiCjmM52zbNfPGi5ukPcuiWKJc7d4uexabLDFLxZbxjx96EhboujTyuxCpUjgGdy",
  "key44": "3UG1DNq1DrXWVgucJGDaaKncFp4uX9es8iRwVPwewCFLYYuVsGc9iEBqrrFi3MJqUDj1zPWnSafDH6CU6AMW8Qaz",
  "key45": "4d2zqrZPCdjWswdNnCJ9SF31Su3i4SPK5hZKtq4idmfmzn4AjiS7FRurGeMBZz1r1yzEEx82woV43eafTPFBAEdX",
  "key46": "3jhkudK4aAMgNAaWD4EhpJ6m6rMsn6VdGU1ULsnmxqLjr96xters7BQAxskwDcsVQpvQna5AgrfKQKeb9B7uEeYd",
  "key47": "4ALLM9usCBfASD34FHt2DcZsT4Aabmz8hiQ5HkwLsv7BKheKmmH8MzTHzmm2azLRXRhn9vdn8qKz7zFfFoLsJTT8"
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
