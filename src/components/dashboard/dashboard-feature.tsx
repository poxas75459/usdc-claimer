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
    "3A4Jdo3az1nYr8A5PHpbWbKDh8XyPHS2PsSA1Dx9PYi5N67gBxp1s8J2wrw9km9Pv8pYQ9psiDS8H23suH2vgrqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26kf41ip8TrcvfdUdS9TRayRJsPLsWun4LpvUdvt6Wv3fvYGtFdFh9cgcxvoDRwuPxDHDVVLwUMEZHnob8Ro6SdF",
  "key1": "51MxT86VQkCn7karXQ5WdFKHYXnWTf7RJV9HmGmSV87hgommaVKADtTHoRNYnSrE24WMrYcsN6LQnAdi1gy7Ar3k",
  "key2": "4AEBtVYgG62Qbg9LQ1rMoof6bKjsd4wQ9wSfotZ57mocz4xVWzy4W6AEa9u19ji5hpDdFA9v9wh1s9r1P1cicYUb",
  "key3": "5ocmqvrRHDFw8Vh4BpNo37569N12ynp64XX8mbMoojx1Wuxucy3CP7TgMnv46q4GnPkNzn6X7vznqXQAhmjgJPTW",
  "key4": "3rJ7DTCfbA8BvTSJcXHsrULzTF3pLNwS6eSFs4qqSeVp3mVhRAPEymegZ6SVZaxEVCsvjYyK5vassrFLaKfWpkSf",
  "key5": "5gyuYk4Z7R5NgzAyaG6HyzrZSvJ2B7wogLDqJJduiribjU5kVYE8ZePXeF36XL7nkFtLXsKuHVxky367PE9NnXCH",
  "key6": "5ykc7BqjmwDMbyJtsThBEGxXteLF7fnRKNZcQdTuKWC38aWNtqKLtL3R5wsvw5eu6ke2LiXuvnH3ReGRxNFTHCAS",
  "key7": "4EKs39TqSrXsCoeW2Wa7mM2hLVYxtYuC2kUL3ymaDDpW7w4E7QatbAW21fBr77mbJx5MSDRFMuzrQV9UhkTF4iGf",
  "key8": "4LqjwxygNMjYw2FoFozS4pH2YBoqFdQ2kSausakh4aNnQC2xxtR124T7xdjsGZohpxJ2P1oR4fntpFY4noaAVk9E",
  "key9": "28JsjfdE8Tovm8zfFwkeyQNdZrgtX2xpb6SEaDrSLZ8cxXYiRLMzqvB1n3keHqZWVhF5eMf41b5fsYFeccw2nzXn",
  "key10": "U9od7SjpNqihA1me6YPjQmjjDpU2ZqTPt65DYgLaHumtpyzWu6EiN4Gg6Gw7q5Kbg4m3zPUUqSNKzUAiFczunqY",
  "key11": "5aLw4MX3998dHvMDr5GxW3o3mXjrE772NcVT2NxwLsfFDHEc3Vwbpr3GScmGjvH86AyjcTitoaSVC6KwDrKhV8Ac",
  "key12": "3CKGH8RcVav4pKKwcW1vcrygw9tc5p9UrJcocePWUjsMJ6B8UZ64dwAQeqwHpaCRzMnidZsnQXpWhWWF2fhbHsRZ",
  "key13": "4HRN9atkjZhvuyD4FEDhK5xJLwYQdmN4pnt3gXZuh8WPQPyLoHfYcPonUQ77WeLeru4Y8gxuqpKcttAw7vKkHXwy",
  "key14": "4ukZTNS8B1gCuTkCpPMv2EQ4M2mv1YYZyvN9hK9ybTynqcZHaGMpXc6yoLWRQDhrnh2g2ZY4bKYieh2uFPXQPFJ9",
  "key15": "2QSUzVu1cGRJBpYEgMb95maVFiPXAMZbphm231GMU5L26kbv82qokeiGUmnhXYdtf4zs7LjaxwkfmEeXFD9T1MfY",
  "key16": "JZLLsEqpYkcUdwcSF3fKScJfTGgnrk6MfTe92ZriRS43dCH2GLs8qJXUdkx8dMPpcq9AxpJM2uRDmx5m1Bw2sNj",
  "key17": "XdEXQkdUj4WhVKcF25WVoBJCRfBf3gnn79wYsR7jvyygxFBXRYasC9cmg88gzkngidTxkxUM1167RUPZqRpZDxd",
  "key18": "gqSF2LvuvDKSJTixtuZau2P3XVK9z4YvfiSUGbWto8SynQunSPt7vrcELo4FNVykXWD7g6AqEuAtomiQgwQp7aa",
  "key19": "3eH7CyDM46eWoT2JzYmbyw7xy4tf7VyRAPQCoWiKZ8PrNUtNv5ZzvfUH2KTkQhSCmTTuedLbxs874bX7JvsK1YJP",
  "key20": "wVJvTaYp95iuCgAunAVMW3B7Eu46tSxCqxZd5UGh1aeaDuEExJg8LHrPZpxdYeVCV5MJpKxhvaGXTGboRrFH1FM",
  "key21": "5rsz6ndJSGJueWEnNSZFp2AFjtSKqRGhXiimooinNqWGZJLdaMTFFQWq8KWLeT13wgURdeV3i7JxxKTsQNHHaBXV",
  "key22": "4UMJdS4mNbmxBFKm1uYeE3WrGARaCCR4gPEbyrHcMsqvizArwHE7RsAnLojk73sxGZYmBxx2j1FYLojyhVABDtWK",
  "key23": "272Kpy8nnFmZXEd2brAaPBpfExUPki9CXY3KngwikHuVcS6bHqvup49oBrBQ9iNq2xHBDT1fvTRTQNxWPRkMv1D5",
  "key24": "2Ms9MexoyMbQnUKji4tsauSJkEPJXVD9AEsvT6NTDJqY39cVyndoBy5LLvmAVsqQHQ4TwYjLWuaor4xedZ5HiigC",
  "key25": "3293DTHbZcFTJHybcKpwyvoLoRXkW2fxcefbmfuzMu9bv4LHHCRWr1AFWFqYgcCvCnV2rGwb7REcthd9VgbzxauA",
  "key26": "5TQdMDWnmD6XxEaXtgCJnEHGUAMPFBb3wu5CpYibYzB7HB5H9vWe84PhCkmE32Bc6r9JMyjwr6rYpxCnj7HmToXh",
  "key27": "3tsMkdXJZusP13NquDV3d9CDhPHmk62FQP9eE2diyzPy2wXuEPFKeLUPRaazoET3AFgjMCyFktKECnGf8Ueaybfw",
  "key28": "5DiyFGhVHZVucJoDfGwwjkjJK3z4ErLpQevmB9juvXNJzGrmzcskhKcucnqnaxdqjeC7dMgf4C3VRh38wiYGmMTE",
  "key29": "5sCTCXEpUMyUJNA6qfK77pHGbmKZvAHedu7qTTy5Zq1cLtvj8H9p2VBsLFdQMfLQxA19WHGcSDrH5NePQ1p7t8ms",
  "key30": "3iSaEzocUyVqDK9ch2imKiZkoLFWsrRHvYcdVrJH8Lfhmh4t2XWFXjpBNoLACKGY3Zs8FNQ3UENfkHeoQymFpfbE",
  "key31": "acbBbjrHqVs18EYxrCyLt6JqDtYTPBKSWdWYQEVeAYoyCQ9d1ZzS85UMpgpj9n9twUTDVbJgSM67Q15WztUQ7qp",
  "key32": "5e2b8x82YGGuZoBQef6Tgt92CuvGio7FRqY7NMAoEapjvEoq7PCDNfTxiQscUDATpKcpCyKZ2BYjoM1YkUnf7Yxa",
  "key33": "5a5vTsWhkkkJsbSaejjS2dEMjeBsKPmpXCQVhn4EgqNVbaox3qZAJeG394yrtjdVhzi2BzYNmd7YqW4PWTSFG8WP",
  "key34": "459bQggxGXa3z4NTcXh8dy9hLNrJWziebcguchnTYAzWGDgeHkzLbHphZLPtJ226YsKX2PcDSUd2D3ukt7iSVERs",
  "key35": "3rNqmG6iBgXXpLpB8K8CAs7sbkPwigNMZdVyb4exjxgeAgjdBNbADAtUoKLkK2WhfUKhZu5dVmueFk1uYK5Rmz4w",
  "key36": "4zoikfjWpm2UxVAfZCzZCSBqPFVCANRL5nos3SHgsNSTBmJ4qdnu6grzcCALX6wRXXGDFqBpTvSWbYRhA2iG1Xn",
  "key37": "GyenwAByXpgWpwvk72k49bDH14bWN2reLA7BVFs8v67iKJG4xs9HnTaMJYhwiaEZhLFNamorU3aC82hDrM2Sret",
  "key38": "3Jo85HBU6CBkwwD9mHvkW8mFxfQoGJxJx82LRZFbfycmQVxugFNyKoaz4hWQbeed92vwrgd4GHJTPCmhRykZPv1s",
  "key39": "4CMFL689QRks8q3kNBDsSzb8VqaUP7VG9wK9QApbZhUrJcqH7GYmgC1yoY2XA6tEBYgVP5YVmsLjy7MTk5ZBFPRK",
  "key40": "4aVxZCf4UyUfbsK6APbu7y8fZWh56xkxMGFSG4c5PNbJx9fLCuzEheN3hhEnHmh2Aim6Uq6VSRjWaBxLzGUVSun1",
  "key41": "4VvmbwxG4ovLa3mZq522czc14bgtL78hdiJbNjv5CSMNQW96AJ4Qa88sbTx1p1aZ2hdJCuTFQHfiPKy6DzQGDf2T",
  "key42": "3uv1uSPXe3hkmyhk6XKqDh3xyCw8ANvBxNeMTHDqpKD8BrVhXQ7nJwEazdaf3M2LnuahgBhN4623jboP8L7fRyc5",
  "key43": "4DdDwZubkTti3UJSCUoJ7yqXPSjjaEk3kT1HW3uWfRZEvb1FDYXmuWWgPZpJVw4VJV5dCo1PHodWrv2PhPCVTDMv",
  "key44": "67GZasuymr4DYT738TZKRzYtJo11Jycq7cjNSavpPf3PkUpd97nNnWFaPyvLXvKVD4jQ27nkQftYktQZXq2YGTbF",
  "key45": "67e8evb1vRL3BX6hcV5ggsaHgxiYDZHDRW2nta2rLbkwzRrCQM6QhyCcWpC4vSC7AG3eJ7nM7HZy8TVhcY9PE6Aj",
  "key46": "3NRaYLDMMudfuMsiCgbpKuCqMXPMdwDyyD7Pxr1KnyEEP3nXttgip1VQ9NkE346WciVbn2sZAt4itmg6QX8S5img",
  "key47": "55EwnHD2GpvUbSbUywwQHiu9Rd6XJxiTR9ZCrTHk6UDPkUn6kfrVZMMoK3Tg8e2UhNxHDZ3R14mSgBDbuQQwqgXG"
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
