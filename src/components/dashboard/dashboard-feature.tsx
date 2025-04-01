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
    "4AJY3pbAaWFUhrSSt8NDGzWyrpvvfekv8g3iDAaUbgvfcsgvDr9NMm3ZufMyetR2kF1NaErcjy9z7vobfVACxsVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UXBLHgHELbM6wYEkogZhKHT85KU8YjKBjwci6Ky2dZoFu74JZLh8v6EgDtmVmbXuLK1g1qbHMn3EEjCRZGwu6nU",
  "key1": "5GRcuBpsbzmuHDW7SFQRuTYbLKU6XHMZF3nhHWTveKAC5ogQPWCtTPKBunryC1iqALcWaABrx7fQAsMueCtWFMKR",
  "key2": "58csVmNYApu78ygo76BArhZvAmiFsSt2ZEJodVRGsF7xPkcSRah7weF62uHZL46J4BWxkcCPM4ohNjxYYsJVzpHA",
  "key3": "2ammXKZD6uDETMuGrKT1ke8fW1WyFZBfqS6F9cKqfNVwdUe28N5u82h99kwBS6KqVm5YBR6wrrUXgJPsySQWFYcH",
  "key4": "xGRfGH3wc5UBbRDUJvbAstysLKvH4NV9mQSJyyRDvaRfoK4neWhqdaBAbVp6jRMyqSoFvzjvFDppDvPvDTyZTsp",
  "key5": "46fw5gJsbRzRsF6Xpy2NQ6Q6xHsCVscYKVZg1ZcUQnTjjRK3JuqVRRU82fqrEJX9Nq9MhdMi9UDqyNovapksHAAu",
  "key6": "5TYtCS235RHb75mBcVLZM8pkdjiVgnk5Q3c29sKJyP5jnHTD9QejKmoY1fTwgZsufpUGkEXaZ9h5VrbMpQYYnrnT",
  "key7": "2HhA9VGR9YQ8fGh1UCBFbW12sm8PAeTf2Pe8P5YKNPjjLSPCdYAQ3vwTLwUQxjoZSDxRF93zikRBiS7izeceaqU3",
  "key8": "2SnbWirmV5usf3uirtUhNyz53Kw6E6JYsxvoYESHG7BYUnQ6eaiBtH9FJjAUUaJjzWvvtNEWM7kCP321cHm9gbr2",
  "key9": "4WRtam2wXt9VzrNRmJ7xR5F5UfH1YdJzqsrdMrjto1rp6tmwU7AHUjfdedEhzgPTF7M59WNAhuhBe152T27zstxj",
  "key10": "4ZC88SxQ9QVHpsRWTKgzAWC9G3vqocJrrq61mUdVQKB7QqWeokbbebXkHwfL6YZXZ3NFK6pmmn3AsbBYMurcbQ8t",
  "key11": "2a788ztAvqFqt7YDQZYAmYLhKAX2M3CJARrCAwAjQgxZgSbPfAj2asEDao2gLXaZRUgrZmE8WTHahY5uzHdTPuRN",
  "key12": "3GDxrD22pGijrCk7rmKD9cxz1vz4i5vWGMnuhUyxPWBxvBSpMoy12b3pYeKjcPDMBVhjFUDUiumyDFhcPHYTmUHf",
  "key13": "3zWgLLUqn5NA42kKUUt5wEqTvn5zvcrHdTmmaVDqgzqs4PJT4tGtsKudkpMGykvLBwHDMDChUaW12biQZ9Q11akV",
  "key14": "QPbuJmsjjozss2H9yqzBRWwU1XHJDEsFc6LMZtmrcM3b5o9m5nrc9Xsp6XcrZiGy3sCYmRiLH67BhzyRfLgv4rX",
  "key15": "C5Rd5tjMiu4TDjrQSf3pZnfJDkH1a6x2egwJn2Ha9jHfNXXfZpnLtBkEAxBvQTM4wLPZGpLeXqY9GBH2LMeEFnL",
  "key16": "5fg2AQWThKjYR67QAwzvzgKJEVuxkpi8nuWqAdqH6aCtbt8ziaAeuq9eUdK9795VZ7QywtYsxkW5erAZcdbKXyHK",
  "key17": "4bNch6BwHdy6QzeSzKUHHf9DrLvNbMJPqXbzizDzMBZQib86BCKh9NtSumEM1QZW3HBPq2wL1CMx8FgdwWtXFB35",
  "key18": "2yQLBSED4qf5fUbsNh71U3NyaFPGZytVkveUgEfkzbqVXMAtcimUjy3F7JcbTqkaAeGNdf2TWNtaRZiJ8X4LSYo7",
  "key19": "46i1ZvcqaorjyE3dRRW7MPKmJSKQmpAYnXTYEBFZn5zAaFBdvAsoKjFvsNhgaKtLm5dbp13fkCH7ZyMwrmVKU8cJ",
  "key20": "31Q5Vk7bkMVTHgdcmdtY1V5kkrMXWozEyFEqJhovNYd2ygRjVRDw2kHr94oJuiQmx4aCKimcz28V696W7AqdGT73",
  "key21": "3ufXWnHVWdPy7SRRx9hKsqc4nuSWFs3vhYFCzRd5EoiDKtR78KvLdjMo3XtGRzhiGnyY2N6uQAZ361bRkn9fmW49",
  "key22": "25CSVvbWebi7Mx8Y33XMu1XyvmgPM5GLadRu31GYs7mybxqV3FcMP4urPDht5e5oXk5e7HsSaXJ4vnNoX3TNrbWD",
  "key23": "KFg6jCBNH6mgLXEk7qur6bJ7bWDC24bP2gCzXZ7gvVmEoR1eKxkgfAo6ossPBNogARiLDnnPnNR8AnbV8BMcWvG",
  "key24": "36NWuLiyUcNKWFsSRuFkSbkYaYFpxRvcF412PKUWrEfTmzoC2VyDSg3vNHXbBzTugXStNn1wWtpru5ibqKCV9SBU",
  "key25": "5R6uwK1619nPJejxvtFp3uMs4QJcRDvLE5nyEj87TgDwpWqw3jjUTQojsYNuomYccgidiuTqgNbKXCdAqp7oydyJ",
  "key26": "3MBA5aiMvhunfe3wctVjqHcSC7yn8nBux5QNy16PPYKfpXpevNEPk9tBqMC5xVkn55w87WsAJgjvuQMNut2TbCLD",
  "key27": "2NKoQ3yUDPTxsub2Hsub4N7TQEjVw2cm65he8rbeE2c5NwDLusCPRuyCtZ64Rd5RvKyQuYSpv4Qjm3kNbrifJcGp",
  "key28": "2USLHdvArcpjSFyRtMTCthAiZoCPaFfhwG1kUcj7v3QS9CH3Np2pXhPan9RC6F34WzVX1pXbaSwafqe8st7yhNW5",
  "key29": "4uEReaKkuRnB79chL32MpghjhN2d2HXLYoEYD29FRsWkT5d6aQ3B3T9d2M5NnJDspRQZ3bJJuooRdBFWVhRXXqVP",
  "key30": "576CR1krcuVaZiuKWzjwBadnGiJqueW82uCXfwXU7tkJTYwUmc5kaX7PYgFpLcu936M26P5bcG3nKhHJbnJPmUy5",
  "key31": "5wK8SGkaViUFhkDGjaS8TraYDoL8poZkaLRrfUPiW1jB7jZKPgTJpkeZmcqzc6qo9tS8LELPAFaL4U7xHUMm4rtQ",
  "key32": "4sdbgjzRAM9TitiVc7p9Zt9kgGDhrU1J82PPL3iJ1QvXy6JVHmNfFmgd6ySStBBdc6pkFtdBknEDtSwpSur31Mig",
  "key33": "5279WTW5yt962kzT1DoGcXVzf2itaz7UTecdg63JbseqrVpu5bE7xFcaUY2PgqP6v1qNJsnijK17XE7L9XfCym5e",
  "key34": "5bKVApbQc2UxPPLe2XW54VPoMQxEWmUHVmHrq75PgGiq7GZgSrv57kQdVzYEUVQp91DGHgnAbBc4Qmkp3zZtqJXJ",
  "key35": "2kSeGpYEG4wmuvWFj485FPPyrj3rqYpqWetviSVPKRmg3FtmSqsrtag4hvjbUjshYsWXXfKfF7FieQ3V5Ewmed5r",
  "key36": "4fDfRXEkco3Ru2TwTptZvz3xa4agvTujLUaZQadGcEp2G3fdRgH8vtg72BKCDbX9zSRdEZ7odBYK36RWNuKCLr8z",
  "key37": "2Nv1aFB9K8Qkpw5V43t5yYDH48dETLTssXkz5XFvoo3zbPytRubCxEUixt6a6wJxR9ZVJxmqUMkHW3BeZWrumBK5",
  "key38": "5XWfby34fMMLabmqG7AFMzwiz7vovnYPH5EbSC7agPEdEVjpUcKg1rmaKpbqMsYh8GsK42mLfavNX4jsKnkDATHM",
  "key39": "yxhM1KyWUg3FtkByZzrZPJcsej8tWKWHx1sM983P5AMSN3HrMnCi6Y97uiYx5nCe2EXhUV6NHLtMmarmSvzVt2S",
  "key40": "9cUK3fCvmWE3Pa8HqmLVrE39sPeu6m8ayJGhenPTbpQmMPZQWwtBymify72YVnJBTEpbe3rXJvj4z89aQ4jxMHD",
  "key41": "3NUyGCDiartd2YFZUBVLUDMZz6t6gvw8to2S1c95MSxgazFFfYfeoQctoJg46fyCCFwsLCzkqZBVFqkHXgYUxMb2",
  "key42": "ownZUD6MZwSTDKzMu6qU1VyiD3r815bcuzVrU8bU3L8ujDhZ9RUBnYmCrnJw2P9PBp3moysAgjLADwCMfYBgHQT",
  "key43": "2obBRzLpLwHgbdndQq7L7hjTSNa6H4igo6MHDqPPw3yTzNdqJDES467PPtmk29QocfkNTk8TfZLBnZpHs6YJCCku"
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
