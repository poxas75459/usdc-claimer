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
    "5CGJP1ebBRkoi5PeXZszaJLtQXrf3XCv2UncEMtQyzQRrXrE2YeGv7i5rgwWUCa1ByTRpWZKS5qATe8FGf82aPUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51aeewZX9wLZEsc1EapZpM7jVcPzLR8t5BeEPYm9YWq1Yej2XRNDSH5qvHs68mdSLMQJb64J6shjkhEMirYUYzBH",
  "key1": "5b3vfBAffZw9ixMowVK9okLqVmkVXW2qEpSrkX2TCVdyk1uzJHL5LiQskaF5MRw7F8CjCpSFBuWfyxwRkXag9k1P",
  "key2": "5YT2joCrMupk9KrYQ22EBVm61Vjcgz3aMQLVN4gL9qQbnE2U14F1nGqX6Snc2sFdnsRr68F3je7zMCv4oEPRkiai",
  "key3": "V1y3m2CL5vZ6wY7nZpBhykD56WvbsMKBM4gjtXdGBAc4fonYuExZNTXUX8d5W67nAii8ggUrT52GEWdH8gGaS7N",
  "key4": "2PqXL2e8Wd1yQQDCT45NcTjQS66bCKKENjKntUxYAS6StX8C5rSqAq1xJ1N7cshRWraruNvr3dx7CS6EKHjFUFET",
  "key5": "eSh5BuMm8e7wzZjBkuMKyz2uKCerwchrYk44DaesSEjz9DtBcbynjeWg9mhSQyphXsCH9qX3SFtqi5jtFwxkzNW",
  "key6": "37YyxRW2JbMJwK9a7guegpHS9T4mNammsfuMaCwXD3396cyn6gaTD8qLQHabr3GCuqyN6m7SdA1m3jyYorQE1WrN",
  "key7": "4kiFEhDduyYGF6K6KUxdJQjyYu45sumBtN1yAnZEb445RaYRMYHUcvH6Kf74vCGCrsZo1QH5BZjvLh6zNN2pe9Ym",
  "key8": "2qYUmWwE1orKwZjnjNSLYym2DJV8D5hS2hfwFpvRpdkYp56PpsFDXH9AnSQr8xbDRWFpQbyKiSP7FWHKQA2XGCgp",
  "key9": "3oFXAR9yebvvqQwHexCwKbkQ1E4qVmpRSNwxm6rnF8FmSUw4AVcVfMYMHPKX4esLFtQZwxWH1yXDFUiSSK6LudmS",
  "key10": "3MCr2tednepDrRu4nDdcDZ9RrohFDzei64czCeAwy3EHzjoMFKg7CnanM2bpXaRCD6pKGJFU1nUx3ii4QL6xPhxk",
  "key11": "ZFuKrmj8bgDFgpPpGpRL3dNhFWk2SyQJMsRBM76mWbMkDjVDYYKSkuGnJny6oKBG51iDRkVamBeSMVSPYi3jLJv",
  "key12": "o5MVigdu7vF6ppriHfX2Rrca6dRnah4X2PDjsiAkXvfJi8QZjETzWZcy8or5Kq5yNUhKA3nqp1bFZKFFFfwCKrG",
  "key13": "5XcFa78a9JSZip3zMTQrjeHLhckJpkdfboSAtTgmDzqpyRL3vgmcyqQr56kGqJEEYmr3uaTntQed9gbRRTtP3HkF",
  "key14": "2KFLARaP4ynRDGEqi3kUtDG4Gz86PcwyiTB9vufxZdjjxD3R6hb9Ja8rKRPCPunv2ihJQnx9wEE8GJnWr45yQa1L",
  "key15": "2rZxZHBwvD4SbGQBJDk1199gLyYFgVYGL9r6ftLp21dh2tNtqVenaGqUVXnTM6m2JRejSdqJ7trMVDoxaqWNX8Dp",
  "key16": "4pGUZaZb6ysyJdohnYLakuJA61U6JW5uABVWSJDKdGyUoVfknewte5zqbmihe3E94CLZxdVq2joiY3Ejhn4pMJJe",
  "key17": "4iNsx5VhZxakzZfwyZ4GDJkMnwoY4ivvEAgtDoYCvkrvZHLvxWDTqPzKWnQVj9npx3AtsR3vse278wcRFc8xsu3c",
  "key18": "38Quru8XfR3tRh4STivyKAPhntFQ6yVF3A2KK84LUe5PbFC8UbJ8NzvYuQmUgk8MKXFL9AXsTgwiV7PdLK7gsWKY",
  "key19": "WcY8EmY52kYdx526JEnmSyE3ez9NdVCFgSHtByJLmv6n518zTDa7UzyYkoFZn91JvrDMArRuWsh32vgTy4q2fX4",
  "key20": "62W7rAbrEUNsaYcGiYWpiJ3En8tPxF5FPC8WMzSDZ2HHcqHa7XLvBAL87yPybMLu43Ng2f3FnoHWzrVyn8KhkF1o",
  "key21": "679nZLCoXYRZR5yZiML6mRjC3LnJpWN1kKsurH7jFD15woRRoYFTuER2rZ2XFfzysmUx1La8VZExhf4K1GUuq3Rj",
  "key22": "4KPBEkrgSXG9WvVay9yuef58BqYmqC8ftH7zrxq294ALrNe65aeTodPVMzjmG55NxKrzAk7dxfSsK49SnHY4xKLC",
  "key23": "63xRr4qnZFxNTU6JKipGGocAKaajt47cWQP4uXMSGDVJDsxAHwmNwntgrgXADMrdCRGEFwnHJHDeHjoiPtEnKDi5",
  "key24": "3XUfmRbaqFSBTv4MHMuzbHHBDmhsqF1mKVJKAj6oxgLLeVPTdzWo68sbpD9cnEJ8c6uJucGDCs14UyFSAAq68D3o",
  "key25": "4sv5mPhxFvoQwGCiTwk4MM2U73ctEqJQaCGx7Vjw5sYDZ9ggQRjNJhS2vn3BMvmxuiQ1Gja7Zc4ubRtfiK4FFLMC",
  "key26": "5NnpAc9hQcvYDD8Wwq8SUAtxWvd2PqrS9radiweazwxarTgnQ4cFXFxhEGo2BEgtPEC7b6UfwLEST4yPBLuhF8WY",
  "key27": "3iTUXckVwsSGb39WTu23JBJLsackGWUzYdbs7YbAqMnL4RwVCqqxXzpqxyZUPDFpd8mDbcTG8W6LAPg9mCgvfbxs",
  "key28": "SNTP2925qchH8EF6gdVaZj3CBVghY1iNvNecvj4V7T4ULnX6nc1J2Rg7YKpuYVb1JKF16kudM8Qz9WvF8egWUUR",
  "key29": "2HipBsvDHG8MRaanMgoZ5gg3HZ8t2nbZ2tffPoFuCUnTiwh45pmEG6czwRJ4DJukefWcL2iN6HHF32q3oXnXuK6y",
  "key30": "4Qp5EasPZBh4YNWH6MUpwTUCUrzkizi9aFnqxumVRyLeezeCSLyz7ewnmW83uodWRspDkwKt2s69JDpU8Szq9cH8",
  "key31": "64rTzh1GyR3Tji2x8aWWCfcycuToZKRJSCujjRms3u1hQzNWBMG3H2fDDJ8yNaPeEQbDmp314ftpUtqLNf41LmkA",
  "key32": "5AZGintGNM6q5ab8HgtC68BdaEVWRQBzwroJ2jJhSozVX9sTy8TDj5DTuhVPXZnYCUNfT74fomVfLSR2NFASWzuK",
  "key33": "5eohnB2y4nomMUoUDkP3a178ZZc1GrTcYCQtguBF4oAjpeL2qZENbAt1nM5iApugXWgN82bHk3FiN6q5e3wQLs9R",
  "key34": "up38BTTontjXwQC8J2Nstu8D42nyz1PPeZrth16CSxXEK1JnXKjpaF7k1KAkLMhZPrhSp5DBL8mntG9SLVDCqbS",
  "key35": "22U8UjFwQC4U8xNpfxDJhGYcetcaaercsRuNnMz23Z2TAwncroX9aTRT2uujm4mGi5P9iwZ99au48VtCohi3nDf9",
  "key36": "4Hqqj6Hq6HDfZWEcsp1fmYiCbBfEXXSX2q5oaKvfo9ywWLLnSPdT4Y7qXC9afBbuSRmoRFSHrrc9rgDdwmBRJNDR",
  "key37": "3Lfx92wvxSp1SyPUy4yZfxRnSPBCc3CdnoNc3YFZngzY1PJ63G9CV3jKU1Q6KrXsCtNt7srFSq51zG1QBDQctzBH",
  "key38": "4BoXMPtQZZSnQsy3v7r6S6V5AidqsGKbQGk23yXX9TJxQFAcGGFrzGt1YqbmkBC7tn6UAmwMtcEi1VhRqPjRGKQL",
  "key39": "4v5CAM9Nc8NHzzQFbJV4A7Tr2NujrZAPyRqjasrvrFhWoe1fGY8AqQno9XWFx2mB5bv7xtsdnP9EnxVXuuxGqJME",
  "key40": "3esmmHnJ9xYa7M1abnT6EMEZyL3NmFJQNwd8wfZB6ubcruxLRoungzZNYUAgtV2eyyJKh2y5Vh6vopdpAisx81zf",
  "key41": "3AHFVCeADjKoo8vqATdSagytpXNKSeQuHi1GFZbG7gKF2KxVtcznmUtiF3gpqdnGLKaQh6yBbwwHwVqscNQWayux",
  "key42": "4zZyq3zFvMpYm8Jv7BNvN3gSZRKxfPEMijobwbYJ1rtWuQc2792tye6egw3DjpzzsgBsdn8r5TiDgPCXEeHxTatw",
  "key43": "5URfWK7Eywupo9ovoLvRWTAsxK3AWEAbYQ3NZ1z9GxTWTLXj92uvNvHkTY3ouNufjUP81avYoZTnsZHtKLAANGXY",
  "key44": "5GmP5nxE62H9Dhjv23NLm29u7bGHEsZvqZF54Tm2r6GVZ85XT3xe9DR9cGn8eydLcqS6ym3KUFAx4n3FnsCcAkh5",
  "key45": "4y9kx8MgKGPRuFzcetbBa8TE4EWMQFdn8scPLCpEA7bgCATjGHsdtvAB1kABpVwkGUoXC41u9XHXeQwGpx47pBzU",
  "key46": "5CMMtUQB58yyWahpyBCuucGXoQ7eifpfwYcbPG7ZH93gwLJ7ZzQY63nydR2F7PrbtEdQVnZv9rFqqb6kGrhsWZqS",
  "key47": "6461bV4vBMFcDiHWxPMzCPS5sbdKtMeYpJ8ng31ucvNpWnYjoEzvXyvvhpMnMbVoZ7b78xRdX42gq9oBFokYCAqR"
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
