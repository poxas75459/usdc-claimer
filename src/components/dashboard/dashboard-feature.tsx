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
    "2Qk7WJsy41HZVgCsWw2J55Sg9SCwAanKVVA44WrDQHNV7zRe6EnG7TBiRQX62eSeFLL5gtUWqJv5w4m3WYxoVKtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DdYwNPN2aVCygimSvnxEZsmQJCEdmUoJZ3z3GuPD67AwV2MVkEE2hkSa34jsi8Kw9jawZiPKio74KbuSCpRaJCs",
  "key1": "5YeoVJs7keeE7XwiQbuT9VdHpub4tQPB5HhEi3rWXa4iRfTSrYSJkfCcew72LFvMzeJLr7RVrvh9rBNEXQTME4Xr",
  "key2": "2jjFENyb2o84grWm7NqPeF2zbLVT7dp3mJ8DCvv9x2e92WwwqJwhShNtsh1Eow8s3Uq4xKYKrAyjV8818dRQ9ACX",
  "key3": "XTeUEjdkkPS8m4c9MPYCzAQcPjUivH2eiTkBBVRtRFxaavnGfaGFACw2wJGEf8cvyZqG4hthTM2BvgdyLGJPY3F",
  "key4": "4wSm6CaFnHyRonSG6YknKxSMKu7iBCfjAb4N8HCSrVpK6ySYsLhqgKuz97spypxRmddFiF5QJWAJDs42rtLPhqwG",
  "key5": "uFCS3eiMFbFYFro1XCW7uwjTua9aFPMvUdgx86E4mV3SF88nV9arAgDYQq18XtqH3HncuppHYkobfd7jGbokKu3",
  "key6": "5xFFx3d1znwDy9G7XK6aEwyiZkLfowGy9W8K987jJYpExEtgSojMk6SW5Hv3XfoyiHm9dC6wEDuQ9e9NU9on4BYL",
  "key7": "3eeXxd9hz1YxGFb1NFF8FCMrN1vveuDbVFLQBujoGfyUMdEcvQtrpfuunMTwutEPoXKxVJVbB79LHuX94j75LGGQ",
  "key8": "4cERWVUForELHMZfeYfntbCvgzsQSuZDeGiLv4jhydEucJmewZ9u1nt8WguLHREpcQg3xrKKfBDeJz1SAxVFsjiZ",
  "key9": "24xXD5S5sVNSUCrNgnDPLuUySBQQCySpPrhRfNjAYZkAPh1AyTzj5uUQELJJm9NdkCiupktWgpLwbm8uWCBYmjj1",
  "key10": "59P1FnM1a3rQ3W332CgW4LZWxodU2chkkKweH4aMUaVCTNyJ4LbkBoFMBB5Z9jCjp8LLMETgYMQF4t88Nit5Qe1N",
  "key11": "5AFS6yPUs4ANGuS89vPR9EHef12qUMp8qn4qfWHzSTFWV5VmVoWJkfCLPyZF69cn6Gr2WgeJUV8DjSxMLUcPANqt",
  "key12": "4hfwCE2roddrP4kwrRvKWdcPT5aXyRp8rWR88Cbewevj6W5LDrCHsMtKcbFZQxZxzsebYz12pX9BHrbTgs43zbXK",
  "key13": "5x54Grgfu6Ge3TSJ7ntCaC8Yih8dLQzjvrUsQKut3nhvpdXvmPosnZ3ixwyJsJ2xj9E2ZKdn1Q3G19UpwZPYPhFo",
  "key14": "27qod8nGJKiTEztcemWNRawEUFQvgALzVdibfzajwguxxH1g8fiSyCq4bPQAyVQdsmBKByL1hzW8rpDQjZTudREB",
  "key15": "4M4J9n4Spzw4qqfEtZFhkXHVhfHAk5GqRpLyN1c6zgifrkAsEa1mYqjKcdtVTGokeSxNriuPyFPKyZ1QeXttGojQ",
  "key16": "3q847ssdeDoNnmMpL4GyKXPnHzjYCR5BmQmadGQPyxRhVxMEha4E6vouPcqcRznZu1MzdH8Zb88ZgvAtgHjAxGmG",
  "key17": "4Tq7pgKz99euvLEXte3u8smsKaw3NGFHnAQ5bULVzxA1Py3QeLWWYUJbcd9jZQT2a7XpgLYpFNJ6YYnqWNuMwiUi",
  "key18": "5RvXGs3SiCX7xdwgdWuo2evzz6Cj2khC3b5ynQveg4UDzTVSDSfhg99wzSN4qF2cVkgiYJAvxTHZwrSiGh78veHw",
  "key19": "5TkSK11jJvzjYE91SU9mirJsZM1Rhs9zu3gH8ThB57uESRjb4rnk7L9A3yNtwhMFdDkzQcB9rAUMT5Yojj1KqcWE",
  "key20": "3FqDUxu7psDo8tXHZtszX1zPwbapiMCmdoSqAg8WFaGNL7vouQJ2Yh1AXZj5ob3udPzCsQ1mYiRQCbsTBNJE1ca",
  "key21": "2G2u116KhrJXjPgZFLF1KM72bVqA88XofKTdFCQmmdLbjhqeN6pMGiaRZMFrpmr6BKmrRTDZhq9BwXsJkiCee6uM",
  "key22": "3rZiFptFZAoBHbv5kwavYkWnkgWSbwicvTe5ReU7u7NKED2k46z19wDoUZqFwuNsSGL4pEbCaYSQ72FaWtxyTbm3",
  "key23": "zn8eUMmm9rtZnobugqGek8PyY7p75TntV7NE54YseH3hkGCdWkGVcC11n7hCrygiGpsHdua3JjHGs5PtddFfhQ8",
  "key24": "2u3rtQZ6g9LqP8FTs5Mtb6xWHSJFwVSjaDxAwYoEqm5pkN3iPZA6yA8xjEdhEkJUCLWv9XoTqjTgjjUQBLgZMm2Y",
  "key25": "2V64Jz1rrKRusbkUXrbGkJStMEqqmVLHC6giPUCKsbsB2y72EigmjXoQ9oUWWfjibBZzSSmoHD4bUubh96mYdiQx",
  "key26": "2f6fbexcoW3DTFpmq8GPcQksJEpDnWdW4C6J1KxBEnzrfkK4bDDV2fkuyxDcRKRWvaJYYqRkdeD6uRqjVVYKo9bT",
  "key27": "4pmBioDegDdo8iRxxkEooZeZn7jXoFTLdcf7cZRtXGgoUR3QY5cqukHkfJam7H17PnWG1VB9B3JCCRs3SYTR1KQT",
  "key28": "XrHMPLL7pJqrAoSFVwdmoEYTGSdXiXXHNUc8YvuULSrPrHwqzRT5XSXfz8G9nfDnPqDnQtjP24gRzYAmhjbpmi7",
  "key29": "3xR9eefhgpFCnrJsLotzokwShLeceehZYRtsYT5KACCdHUdzWaGqjDSiLfsrQjGMqUUQjUUUTucwfkjhcvyqKmo1",
  "key30": "v6ot2KjTcqHCP99BXYteQ8fiY2wLdMtGEwAdEwuXEuNSkMV1HWNzjV4JaTDpiZxZBoYUT7kUDyQC1wrpFf7QD3m",
  "key31": "KntpKoGvahSjspXEEZHz1LgyjShsAgkVhYkpayBTZRmXscM1ZnQZ5ky3py3hHfRxfLAq6dhaxZeyqD8kGPjL5sS",
  "key32": "3qJnRNczTiuBh91Xp2eewkKNDkdGZcmm8hM2JV3CavErnqvZKYvSm9sYxdunZiFAAphfRRwJE2KyZr5cCpvPLPvF",
  "key33": "jP4RKXRq2ymNrgXnajpEi1K1KoNpURBTXPYpQrPRHTBT8bCs7PLUpmrnSGqiNaXXXUziJ8vx9tiE6mmdUpscYci",
  "key34": "46dZmiE5TSZqaZFQZqM5QCsfr3yEQmtvkPspsX8ZwkrdwCn3GC1eDWHDvZAjbRtqrFv4R7Dqg25q14JgpT5jvQeo",
  "key35": "5mtDGsTsgEWANBnW8Azogo1pwXKPgW6LPBgvYyN4VrTN8PH1Em5jDET4EtoSR26fQ785GfvvfachddbZdY8LjNbx",
  "key36": "5ZYqwM7voc88Z3jjbhMJUP7msFx6WSEGMroi9bKxc8PKhKGLCcXHPNTCXMJy4YEX9F7QkZS26c79tS6Rj9Ldf25H",
  "key37": "5vxuaxpbbic1X159T1rGjb4c3UeKfRNgS7aaoHtVqo9GXK44iSwBUGf3GeP9rksfQaR9aiXnpSeanhdjSFHczpX2",
  "key38": "2vBEYEhTVypy786WkRQRjWSbnvhJRF6nxSQU2j4YM5jjmVhxeoAMrwPYLs5NFLpdb6zcjnk7rqMhcYuZsMhdfmi2",
  "key39": "2yZ1ZhucYKCZXNreGuNMJGzSFGEyPCTdJS3YveTB4bk4mBjTZXUuUC3Db8LPQmdYFEMjZ4NowihqZVpoqR4NBbyD",
  "key40": "bpxCRRkCuidCgGeyd3RCaLdNKX8S8u7oeeiMzGPoSCJnPmaXDVamV7qgxBfHLNvrbmr5yhrPsmHPss7pxKsnruz",
  "key41": "48NyJJ78yLYCsTLAcDg3urT5mzunmJfse9ei3i8aymDkfHSAGH2BhMZmnZ7T41grb97PsuNa42VVDqHsKWVvXxJM",
  "key42": "2wkFxLw2GwDCc5jfwtooNyxQxNnsBtUmRpejvoTdNKwZXnZiJKPe2dFPMejtFCY3NFNxmSMeUFyWaY3QdiFdRcBM",
  "key43": "39BDbRDjVoanfW2rK6edsnX4aqbZgDuajC9V71pg2ubTxXoc9bz6gCCcjsTHvKEgJZrVjXRuJpq77dGgwv2dQsh9",
  "key44": "3GAnNTLyFhymU4qpmacPQjGyHrn76JJYUqDPpsqc5ZkLwgn7ScHHc6416u4NYfez2DySNtUxbbhuaKeiKfCxEWhb",
  "key45": "2fRbHipcuKGQkSdsyLm5C3kuC6RvevjVzaGgPCmEQKvCjfP9RPdGCiv6bPdjdMyKKA9sKEKUxCHYhgEWg6iv8hHd",
  "key46": "2wnWnTomPTnzeF2E7GAjuYKBpT8e7qdmA3rK4KLnRgoH1Gvnt881Wcg6amkpH19vdc39GZV8oSX3eBNUcY4iW2Un",
  "key47": "5B7H5yx9MTeGRYyoLz4CJf3AGM2c8AgXb6mXx3b6347Ni8eKBKBXrZiagh9nZSbY5tSDtKNtBij5sCgSErGMysc",
  "key48": "4XxMZr8BrQ69NMaB585bYr5WyNLVGv5aopiEmNcUH12BzybLfwnFeMG8GRrdouAhChv77fbkAWLzMBPbLVvBkL8"
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
