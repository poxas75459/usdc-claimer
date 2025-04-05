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
    "4gjTQfEU8zJgXK1Fgz8HDQnjLipa687rYDJh5vwWNW8ALkDU8uMpjB5X9zTJ1pYpMpC8UC98Y5Av3m5Jfeq7GiHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41MxkVv7Evz4E2fgiPN7DtuQD7dSUQeRtvsGuQacz28P2PUry5TxpQud1AGm1gfRV3myFaL2jCG4QpvpSuM43DbG",
  "key1": "5stvnBxCmH6vwVxLZAZEH47uoMxcyxHDD5ur5jWCL86Cq1oMbjcs4C6QxYiAnKXQ9bjFarkPqrgyDziVwybygyvs",
  "key2": "2yC7cgM63BBcTEuVp5kco9qT6V6LYPGdiCgpmMuYeL8PmMF4HbAtoVLGvupKzr1PJq6YEuUaFfDTeyS1ACjWtwKx",
  "key3": "2tmuupy3JQ8C2vsEhLa6iKuFPcL3H6iQDH6iFvbeLi5PAqtDVe5XkTwha2ideCkDeKEz4DWr4HYAnScjqZdyeMN2",
  "key4": "2Q5hjgZuFw1Uaqj5xGS63voiprGp788AYK6QRAmDAbrSFZKoBGT2etrKCW9fDVDdc87HPUQAiXyJE2VQnvczasHN",
  "key5": "46oQ1bLW7QfPd1qSjmRcaxsVUwiMYB6VCoQ4cCh8EsLMZjtbRR9mtMvhbDpfp21KQknsJQdtFTELvzazAWmtvTLj",
  "key6": "62fCwZmAwUT1EnxXobUuYKxwCmQAa7tFdWNaGyuGN2cYh5FGW7YpuYBeGFj9homF4Dvx31Qra2oVVN3JHiiAZh6h",
  "key7": "2EoqojJbWgiLQGCScUojZNx6ejn2Vr1YCovyXvsYmxcgNHZet55Ma1H2DENPrw6XXZJ7gHqGMph8WAcKT8FPM7H7",
  "key8": "2ZNDHcjvaD338ri3iRXn3qh8n3ThcdRjkFqcMUKTghjHiF5NouN1Rvg2makHyAmUvCK74jkcRN5Z5s247SrQNDdr",
  "key9": "328PH53xmjPqckLCAhAoJPUAJ2Sc7M4x8kf8vtkMSGAyjjSLU9qzuGnjqMa6UL7kCK928LrW7tQRmixEQmkRkpxG",
  "key10": "2EVXxTRWrYmuK4bwcrA3ULpsiYffBRCoowmZobshyyfkMGSz1NKb3Swtkz68qcj3hVLKxQLzkpGSGfxChEPXrp5m",
  "key11": "5DBPErJJoSRaZCEmgCB1N3HLYsJGyhMLH9CyTRm6mUpjoARCooVhq9rzKonoa5sS9zi7bZNzvkJ9mrPcLs8v7gnp",
  "key12": "5vEm56XtNAq8Qha71uqfUuQ7qaoVydTQJv1abvZe7UszEBXvpqHsk7oWdjTmnPMPiUfRg6V4pNnCvxvi4pFi4VrE",
  "key13": "VRT5zyKB28mZtGeKMLDJmCQRLbUeF1cbADwVYrxWbxv7nkm2JWsLS9StL8AUiaVKnXxdZebXM4DDBYSXUdCUs43",
  "key14": "6zJvKe7ovzzzj3YYoCRzxEco8mrQuuo6yzK2vCo2GUVsB3kkbex6PDoj2vGw5hTBmmnt1XCAcXzCLh25cbk4yy8",
  "key15": "3GXpYppvq5W2oABL8diHYCSgjfzTVJQPqjGx3ydujfXwKMpwKiHPjoiTSF4B84x83DiT5zTeHz9FWQhS4RAXx6m",
  "key16": "kbpQd4Zp9s4VCfCUDQ4oW3KgKFce3SktqP4AVMFRwcdENGQ82v7rYPQbjg8VuA3ggnakBmsqnB5UQ1DWEDZhQ7S",
  "key17": "3LTx86p78DAarXEUyZP81WeFC2WtY25Y78qa6KTSD1FYeUWQ3p55T6aWvz95rfNwSJkZY4LH4V3wrhq4yKKMZcAp",
  "key18": "48LmiBhVPDDHH1dTZMp3qPSk4aAySx8JdbAkp6Xc5q3H1EBwo3DPpA2REDuW7SjNy76U2F2nKmeVAETdyaaPfofc",
  "key19": "XW4Z46Jw8po3eTmUjE2YKUZhHMXcSt65otp5igBmiMxDqP35VTBnNNdMEvRMHxzANCuRSLantPsvRPS4GcLsiFv",
  "key20": "dKDKmsQhBSZ1k1RkvPAAS4vHB2FeCk1QRXSVCHRXYHNiJpau2YTqdwBrGUoEbDRUhn14n7Ed8LBToQo15fYiHUp",
  "key21": "4DfzJYxb9YaRWEe2DY784tMFXBMViovLAUZt41bMqDBpvjM7mLBVBGaGLVUwfNi1GBCuJLYQpHrvXBSCUeF3ip4N",
  "key22": "5nhArapTEou7agKd4DiU9KnTu2QWbZgR9wmXcWg4mKTVuPpNt7XkqdZuuw5TJ1FZjgfhzWcL22h7TFwXCCRS8gdh",
  "key23": "4AZeoxvdnH1w6xVDb8ZhvMGkY7kLr3HnP2cFenogEJpigtrCgL3VPgXczKiUVBCm9AextwbwztQj1fvyvmWaUevB",
  "key24": "32966wH5xUtWpijEmV39nCPCZFZSBSRjAap1t9XoNDiLG4KmsiZaH5mm3UNiobkoGV3DuSH8m5daEMuw9gtLFbUm",
  "key25": "4rjoEHQySPBXZxQiumRT5URJMpvHX2iKfcL1uUYvA3kfWvrixNFhksSwhhH3auJvbWhdZHrXahtJGzL7m8bnvCM",
  "key26": "5UTtETWtLQY3vZDzQiHonB8MoXxdcdeDbiYefH7wbDraFtBGxFgL9DQ9pbEzeA85tcnSmDqizy8HNr8v6jnNYyU3",
  "key27": "5axiuLRUsDyCJ5BqE6KqKL3MmHZDh8PqSZ3ez8zgRwbL9s8VsYYnfLBMh9PTUpkQxTxC5bEgVHmwu1a54Sbkm7MS",
  "key28": "3n7VPDenSX2yeukYKfkhCHbvhZs9Gkkh3JhD6WYSU8QDAzvU7o6XHJfDsF1EZBebDCXKwRnGYoAXpoPRQtfzRdwV",
  "key29": "4HWqUF9fcsifktpygWSTjxYYQyqYqKZg8bF2kb1steqT3dpUuKeLqjD6KSVd7PYr3wW5yVVEP3dmCQYRB5mHe5Vo",
  "key30": "3pDN1GBgshLG57XQdaXMTn2KSkyo7KpjCQBHiAwW1DcL3gXugcQcuiBU6cciQJnQf2GViHiTbP1Uokm1WDGsGxcL"
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
