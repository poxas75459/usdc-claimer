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
    "47K5hEoTjj9idayTeviWi5zcUMRFeHTwkyd5JGK7vCjP1kow32Hb8tsAdhwVfr3wnewUgQnLqTqua9GkRBKVuz1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "as3RX7kHaJ6tYjiZ1Fic1z5bKWZikjt4DKY6aWVDAcGgHWCRwjtUaGwomFuxRUiPZ4sNqxXYBgBq28CLQf4gXtJ",
  "key1": "44rJ9gRLCGvxqWqHvysmt58Ck6sT9Lt14auAy5CtQfxm5W9EWukGTjQ3jucuxurwmUoiSjT87xUiHUoBPJnCkEeQ",
  "key2": "4HfgruroH5ct5RNGto2eAhWnX2HSoBET6gnC28BZm2hWwcqcetw5B9UJMpXqpGFLV6seepuUJwLN2zzQQEDHuj7c",
  "key3": "xRQRxTD1krHPVuGtNFkct9zbuapKLDhoPkJZW7jtTF1nCa2Uxm2keX38bXdbtKrF8DvGxT3DvLdEqnxSSEYQEmJ",
  "key4": "5aXsqy4TPySFDAbHizt2c887CXgmLBijUpoc5wcgscw12dRpBu6PR8q91f8DUt8ehuZ7oSczM5aDAAiXRS2Wqp9N",
  "key5": "4mohrNqYKV1og6yJsN1XkZEW43M77qzjzDL67MskwAYQK3cQvUzBXHf1VZvet4VsqVS3igLCyjacXYDDrS1zn7qX",
  "key6": "2zaP12ZNbSUz5LWntfeXSXGoEUrQy7wNWLB4hHP7vXwJ5Zn3PvP7ZxsQEdZyTEjrF1ioHeX4m7U3vhmiktWKHxf3",
  "key7": "Fe1Ddvweru722caSRwLC525RWygHuzaJ8RoNx8LrXyu7Z8PDtJfHFgEyjF2zWPKdJaKpiZ5PWxYBzp9xheh65mf",
  "key8": "5cke5Tbrsb9VVoPJ67qvuUJKtA1ZBoBoBMjW92dTWGZNniPdPt7K2B72zJsgmZCTRY3uinAfTADkqhQggKGSGVZx",
  "key9": "34LLiiKxgBj8vxkVvipEsFMKBZVd1HKqALvMh2Tdc6SJ3euJhv9hj6HYPLwaT67BtWVeZnVZLL3KmLaj7Pm7TFD1",
  "key10": "5yHTdqfWEpYY8axhj3QNciu7DfJJkv4JtJuVUysdUhAuRT5htKTJbExdcC5FemVtJ9hxdJygEdET1SDGHgD1YvMM",
  "key11": "iVNu4abTNUM31gzc8cw59xtMHr2hqVk3QjSBnpuRdDMpMn5yFNM7dP6HRWpKs8HTXac3Vy4j6H7FQjNLhrfnVFD",
  "key12": "5Z9fkLhA8AVJtSQyXkuukc61J7xnxZXcwSBcz9vNFHFxj7w75TcfCAYz29DtEGGQDtDFXXFxAkbKtcbDSrvmLXGU",
  "key13": "PLE9B59jrNWYaVoTXk6ya8i5iXxtNi9o3qkAWet1cvWFpXzoD4RM1QBidiYqeUASpEkWwyA8AyRioUYCeWt8Kgr",
  "key14": "731KWD3c3Nm98872Kwxv9jA6XhDeAhza9Rh4tQiUuhHGsXJN8nUv9g9v41or6PdmGXdMo5SBvTnjvGWELAvtEFM",
  "key15": "fzW2b1sdt5RX8KRu7uTPbpmXz2sbcdZyWQYbGV9DwPRP2yXVHyaDkdRGB6eU3VwKKubRmJSWVrgRy141Pw361b6",
  "key16": "3nXDLosCtEHz3jTKSCrbBzhVbVNkLvR4ZQi1TN9rfvVSnQHNmtQM28oC2HV3SP2FSdPcwQTKF6kfbs7yfUueEVQW",
  "key17": "26dQc86AzMJpC3hipMKwi37Wu9TpvJ5uEPBxwnqAF5Z3SofWJeGxmpqYNzuzNqGJa2BHwGzoY3iTeem186Q1fgA3",
  "key18": "5uQLYoGcf4Jwd7CTyUDs96gwWptePc8kQyXm6P8g37NBaVa3rqGJVuCxjgPgaS4LrAMiiSqFeJEQK4nnaDBGbHm2",
  "key19": "2Qtz2cfGiiBEN96HVQ14GXPnVHdbQ2fvpuzZT1sayZGhP6hXPTWxRyTJN6gQ4xNERZ1c53aBWarqdY4QGwUk2Pmr",
  "key20": "5gtXa9BH2C81ggieD5UkRi5bU81qMnycCDa6iJDX1Rc3uwXBvdnPdzZanLhMqhcFQFHhFHw394BghnMryuvYYGNS",
  "key21": "2DJkWZTGyR2zKhHCrAMahJN5DEXfNdWgSmA4SqscHFLLuLVDjPr5tmxgubgioB23TA66AiqF3WPiqM9e6EP6Kmvx",
  "key22": "3ducjCKPZ8P6BHQF52zps4A4QvGuiQTJtBLfiQiNTXyLXtZb1gPUfujMCQeiXmCZnsC4xBGNXcta3XgNkcUXrs4E",
  "key23": "R4KbWeBJzxYYmHzaqHoTf9YLtTXEdWKw1SALDfu2Q5YQ1ta3VLufh7yusCjqogmASRuaBM6hUZNvRg5ZS6hGUoh",
  "key24": "4uaeHSBrM2z3DB4GpxaHr1v27KDpxNWYxoUAW1ELgtyRYziF88wAhBiiQJGoNZCFSdjwWxYTYCnRfSD5C4iMDvk",
  "key25": "3gKfDBcfusBZeP7bxxnUR17QWsYz57pBaKWWkuCfY5k1jD7PcCT5eaB4hCYgSkJiSkN7WhscpmviiWcX2veeizw2",
  "key26": "4QfU5UL2fVe3zi22wid34oEC6F8f8rovqsRx5QvxcbSuonZUXSZXTn6miT5dXRutpxSSFuNgePwX8TAgd9G26Cn5",
  "key27": "4oJndoH5MZurM7sZgANnx1f3tVQ918oBMgphjCjVRAKvVK8aCz6cCEdz2FLWDLeR1gmzH7CknW5id22GtVboZSQ",
  "key28": "4GSe8AUYETcFGkboTEXEqp2VrACVTDFryLrKYmJxWKRcus8UuU5NhAAocWTZprgxr79TaoRC9w89pSGFi5paybb3",
  "key29": "47vuFKJqCZYyA2aty5aQqjxMGoBGZfv2pYCZ23qGNvLbZrGJWy2cqvzUESiC3ptTsBkkgJQHhaP8tNbpdx6WRmrb",
  "key30": "57jr7Xtj336abJQQNcaYCSD8xQzHwuxGDwhb23qLwx4fX562STseX7rKaYGs1B1UHLQNtcnLUJ5mevqGYYZhaqd4",
  "key31": "4Fv3R9MTcP3zNAydNXmCCj7oNpg3mn7Ne8xRWqsGVgSwF6F97pvnLeUns5j9gNECE9QwMWZ2AQhKGPZwj8MkZCDL",
  "key32": "3H2fwNhVDwEtYqD4vqTMtTmoivzMqiBk1pMVSEhCSdXD6vFTNSAYTy2GXJhbGy2WHXvk1ayG2nDspLYnS6eUFuiq",
  "key33": "guWUy89epGyEkKxQm6NX2RGnesSz9P6rsvA1NELcmMsLWSmjULGFUZi2oGdfVf6n4DNKgU3LzRiznLUjcdrweY1",
  "key34": "52HED3DFT2UjavYUqXA68b6262i9XJrHu36T2fyEjyX7iqUDB1QUPjPTWfe9QyrE3CgWvLDSoyPckmRKoFMntumH",
  "key35": "4KsVGrgvDygTvBA3uyLe5aGrERGWLvi4cCQtoskD3sX5ezi6Jxp6fcevp1GTwefE1dRWTbKMGM3LGek7FzZBqpYd",
  "key36": "4UeBA5FNDEyskcVi8x5jtzi7nshkF9jBYCqkJvGJryYT73ZwZjdhtrrP5nKfzmAy3fTPuW7Tyc128HU32FSQbTjn",
  "key37": "61Tm4cPbLXxshMN8uPNdggfgr5cgAms8xBKDTqgRFGD8E8qpNbKbqL5a6SemwDvNJ1xtAsxCYWUYQgHHCPNXMBrH",
  "key38": "4tNU2oLDdMjT7EGWLzJD1G49zn7EeYUFN143Zq5T1Lr2p8vR8oKVDW5nP5qVGZu4XAGCS3V5PcGKftAGzk8Acq2Q",
  "key39": "5ahXtYcMfZ1cUCxW4SsXpPBWMuS3FnS2AUtooWtvnDt97epEDFj7fUU4SDhieosvJsqm4vANxc9ri6ERJH5xUJdy",
  "key40": "5uNnT17z2iA2RLR3dbBtUx4AtLkMnFQxwu3fmuXogSh73pNwmPrLVR1bCGxQC8fefL5xaxBJGi596K5exhrTNnHx",
  "key41": "3L4DdwmSLc9M9bxvv8eFWLmEN2wgfzKTdBBRkE9XMR1i6QRLbwPy3fiobMdRRGo9WFomdaC5AS23EiHw7F6m8CfY",
  "key42": "TWVzvuSV38fd8Sc8RaXSqkTSzp3FX3u1kQU9mVj5etjHcud3Ra7Sd1UpTmvhfTjcdWFs8yV5F6ybgMXMS6ALfvp",
  "key43": "63bBXpekdZgE6mxxxfEeckJ3q2HNsrLxfRL7VbcUTfZoahCHUsQ1XZpFogZCRShwJWh4uiGvhvvt2EuY3cDHGsPj",
  "key44": "3cC8KBJotR9VvGExKknVmignmfYTgqCbWQbSq2JsywGNZcdvGvwqGwavEYA8F97qvifYyUwvhdYZmqemSR388gvS",
  "key45": "398LspB7j6PjMDSG5jR7dr6UfCMBgpFHCusdaCu3EAuaTHtRPm4PBq5tqXe5NkqdAFSCJvX8Y7KNrWjmrkwbcnst",
  "key46": "3i4CKhFviGa3Mr7NdLBNbM4Jg7hkXuBGjjjRuVqGvr66bGGUfmbHuca5DCeoVTD5HQ2sTWQkBSFz9d8kJ1wjrTH4",
  "key47": "3k69hMn95sja886AWHkZgcb2Vcrjx9TjsJWrUtbFcTeUEmcxPjDpz1EadcoxWtLB8XoxKG5vFbhE763JRerxNwrd",
  "key48": "5k1sd7a7WWW6pyWomntJNTnSeWQzYsmQhH4baTAVDfrNdexyFFnnpPG6wh2JKgQpMXAAeyRpvWy5wbAFuu5ffeuj"
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
