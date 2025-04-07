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
    "53bocFpkjnvvSU4q8YmUziLhy2URcwr3xvykzpuY1tY7S8h6RcE3G43YApdT69LXgTgjAVfqB6ddEXdcey5V2Hi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BF4zCxb7di816rkDQk9Uzb5hE5KWkwS8gVUhuvySa18gdtEdodBdqXDE9ZvdaepgCUprKUHKVdg8eRe41sAhc2e",
  "key1": "5p3oVBPZu2T8yEf7GGT84wpCy4GVHteKVbcf4eEmfA62n1cXyngokokLhQoBXugSpRqLNV7p5LopZSSLsxeyhNSW",
  "key2": "2HD2CKgVSHwngPToRhYRX9PGjuyULP9fyVMopjcn54hkVvV8Y4B85zB9iE5MPakndZrtg8VZ4h4gUF642vzR78UF",
  "key3": "4BSJvUcYtTiDs4VAcDXu2NhCtxXnRJqo4XTc1zFvHFoCAuXwjManVK8CVwooACvrFnm6nufR1RDwcRXmnAc1kFjE",
  "key4": "2y1fPz9dL1dpPYSmHckBvQQu8k6Lf2svL4gbL31VnYemQ53Qf47MvupkTsqp6zaTpihQuPtz42PJrBL1gAtfvXCD",
  "key5": "4KfmEgP3XdwbHzgdZfaktvA3ddgbqigkVsPtqcgrcZa2rpqFyjK9FmmKG8swvHQThGRVqE3HTGBkMhG3a8REJMME",
  "key6": "2anSpaxTH55ufasW7JKJHiF7cWmYBCx8DrmF7C559gbR1FoAirexXv4ehtHhYKCWqRocpP4fpTZfA5mEgPzr258T",
  "key7": "4xyBVAVhdbYk2k3hwnh53L6X36tQJnia7i8tNNFqasSuGXpGF492iaKeDdw8hMDoV3q4ysJSHmRVr41EQ5NauvZP",
  "key8": "2Mp3szTg7351MADZLKMtmMSW3srpFyaXbT9XdJ7612eRDoEv2qPxrPdLc3uHbzzmvSTErEeq5rS5aRHzoCR1BFWZ",
  "key9": "4F3kyg4hWXP4gBH4r9Yvajtiu9SZcsJdqJN5hc3TyCF7JXdELwPMGhSHJ1FWZhqUQzbAdYoiMBTQULiyZxwHTXZd",
  "key10": "5q3WPcxqUAu4xCJdXoB2KsTU2ufxHEC9DUkTFdnASBKnxFUdKobxD61bTGo4KpSVk2U1sGG5GK2TT67zJx54h1hS",
  "key11": "1ySwbWN2eghcmiig63WqRNRSWpFKx56Bh46aHb2pP9ryf3avpqiEXMPimW1W9fdGmsywbbnt37E3txzEBcmWptw",
  "key12": "2iJdEMXrq46mgyuKGRnk4RLmZ8uPsAvH7aks8GNDiNnHmXAePo2KmXVshiHhQr6Hoyd1mknDHBVKVBGiXrTDffS4",
  "key13": "5HTBWhyqtX41wq6UUiFcvBzkynUfkyU764r5S8La6ZfQrPfcUPBPMojhwCFQLe8K8YHd1y71HXR43r8ysiWPqbq3",
  "key14": "rwac5kZwnKQ7dsPwvsCNXGmGRFnEyW5Xo6TjgRxksXRKHqJzrpn1qeK3TFRqpSLsznxoHpakafQ1WnUr4ustwmY",
  "key15": "62FBcH7CvSGjjVHznKYA76v4mSHCk59BcGmtPk3ZPZ2vvJrYNKcz24KkGJasNNc6wFF81m6eKEPkjRJpnPLFYUy2",
  "key16": "5GwLLvBMhka25B4Hb7qNsGL6hFaGiPAEHLP35NHXiYXuZtaocp4Kahs7hGp43P2ZGdmZkAL7arnrqkJTm2yqT8v8",
  "key17": "5NLT3CmgFcBFVAWzhpeJh4FVq8YZEKr1465m9TGedQL4uJrgiJVzhaL5o1wh7vk271fiJbMKFqSXrbfquhbepsaP",
  "key18": "2S6FpArVzDQ3MGRn3BiJojpVfJM6TjQWn4hKavV7jqdRnsDPCYTUHxsN9qdFUWhMdmEh5mNMr5VMLnEZYPScJQpy",
  "key19": "wGQ2tEBzBJk7aQjWbtmk7tPRrybXFUVkbk5WBkZbcQHjAwQyPFbsYf6RixMXL6gfHaSCVQTpAMsretm4nUY99Yc",
  "key20": "2vskShP8RvAe6NoEctr1CXjLQY4dvTRySM869wWAmqAXQ62ZGmt1JmFD4dVdEmM81zURD4mb3QAGzTFTH1HsrZAn",
  "key21": "3JEXoeoCtQ3PKeWzocV13AoooLK8Aj4uu4TioVu2ru8zZnBHGtQ9SB4AXHCcCsXwtqfd8SAgmMrzxTV14abky46W",
  "key22": "5gtDt3q7EeKH82d7D8asym7CmkLXB4SrWg667RtJfPEYaCTYcjYgK4JFMiEMHAogM4d3Dh83EbWUCvwio7EG39A6",
  "key23": "42vASHe3ZvtmESRphyw7pPopwZY8TdSGvLdFHes7WREP6Cm8bAeicJdB22HfUkeLA58DHJvGyg8HtKzkZRF3JiCe",
  "key24": "3RaT6grTXNEuR9GvehvUWMyQUbc61z6wkCF3NVodkdpV61xnN2BPxbw2dUv3RqX2UD4tZcpMdcPypasyv2Umu17L",
  "key25": "55v2aPwZEMQXASBzDATAUAXcPBATmS5dgbfiuSTUxv9PQbgeF55hyaLqakhnkhC61HSDifzRvwJoeLne94ER74AB",
  "key26": "32oLDPaX8KEnURPA5R6NtYx6Ea2uLTQXU7ozitMC85oT2ciqFPFMPHvUVzMzbdqJqsV2SBb4DYbXWgJwKxQQwmjr",
  "key27": "5Z3SheWgfrg6aVK7EYStMoANXvszZajaGDRvpitqRHpv74ik3zcxnB5tVabS1BtFpcFa8ZxNduAx6hUz9bCnW47P",
  "key28": "2iWgYqjgoA6e4sVoR1B84z6dsXFZh9nHzkJszBf8d5o3syfVSicfTK3YHdwbxoYYhCsqXEcmSF1kjpxCj14YZ9Q7",
  "key29": "5XcF7J58o5WKdp6nMXN3NGjUGZsDKC6unsaPFNUcj6TSAcj2SSA4QT2KCDHEY7Bef5d6ftoeH5H2owWAUoj6htXP",
  "key30": "5VRRKQ6fU6yPXNeYuPiSpGABqHknpWRtAeen4Y9Ujbs3cLhWpcZNBUHrcrwhCD2CoTsNvH4X1qXRNszTCBuFTtVf",
  "key31": "3q3K3X7oxs6FsnirNLDbDgs4FpaZHeU3MnNz7APLrkxkwbjQysNTxCzD3nfwaSpWTuzW96sXs18woMZxMPKaommt",
  "key32": "3uPeYJtq2zJgPZH2Eyr33G5AD4Mkx6E2HUyGMkoZBoCr5hrNH49SB2RU9rBn6ohyDYbY6CH7ihD7HgsY4V9eS6dd",
  "key33": "FKdNJMzWn8FHRpASKZK9mRZKduSY7GXTkTkGr6QRvLQQPK64jBZ1T3bmquVamoVjX5SK2VjPN3ih57cVktkQ2KY",
  "key34": "2EZNAB64hTZKuayQWnZxgxYPmc2i4UExedrxr3T4Vmuz3RvYL85xNYVnRRGcERvq2DeYHtcQNxMcC18itjJppTAe",
  "key35": "d95fJP3y8DXmRwtwoqTQynVRLihbQPvpL84EWXZ8T6ndapSFseRXLkA3HPaN5uH2GxYBuN5r8qXecF6hPMAY8ei",
  "key36": "5b3n524Wj4D5dVXUV5mtA7aFcEw9B2Dnj55gnGcNABZLwUBGbFu65ZNWBFB3ojWMtVXSdyKRfseBryFXDFNVshj7",
  "key37": "2mMgXF3E9bmAXcTdowxdqK6NVFyGLqtszQgo49aBRwYs1sVPMFyKZXYgHfnwUZ6zmRddtoocUQvsjH9seJHGdeQF",
  "key38": "2mieFoiL3zZSYx1dXBo9hMtsPDworzPBcBktuma56TERnGUgbdBtTbxfC55omEdTcpJLD8eHKFNKDeBhtcUExWyL",
  "key39": "2RMjJUTPDA3edTufKHJU4vbMUxrGFVeby3YoyeCBQAoQVZqna8SH8539q7RkBbWHi7wCupZNh4jbUJkiAytkSQa1",
  "key40": "2XUA1L4pzUdNaAF1bJjDYMWZeGrpULvD1v8RQw8bWRcNXvergbVBGYc8FDLqEGr9N5mHmu6Bua6j4rcEzW5k5nHH",
  "key41": "5KgPZJDyaS5RBG7e9GWcwd2ExXRnWSxhjkXFThSRRLAdVnZj2gGzQKdqGYYuSGjpL57RkQ68o2dw9ZHNc3ai36sf",
  "key42": "4JLWCaVmNjT1vGwsvwfrvJamS88bMmhUzobqE4ScL7BsuaXT2pLZ1fxEJyKtoj8vTb3dnoFJymYiUHLJY7uiaKBi",
  "key43": "527mP3BmmL1EGBpCL8SfEtatf1fyZ21rWNTFpXCWxP74BNmZizqRyoXvePkBg1SfT5MYeWf29eNZiC7yRaQpK7Vc"
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
