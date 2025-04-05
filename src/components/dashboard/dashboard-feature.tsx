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
    "2R3QnufDiBoRWT9zVjp8We8MYoRA6um8nGHtEdakYGgUkqHW8oVfnEJnrKoBfDg5bJ7fLrD7yeahFCTCQpifa2oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kn4Ws3QW7ueVCSkaJY938BwTFqUgYNMM1RS3ziGD63Suhk7uFYf9RLToaLiAcjcYi8npzAarW9o3bDbgsUBXnBf",
  "key1": "2tcfEghjiEuQWvioTNcxDwTpZeDi9kYzCPrZv6WBp15wzoviYU6qEFfyvYBAJugnhE5ThFzPTTpt6bWR9Gjt49gM",
  "key2": "3f994EFGY9ZbJvgq71CW9cC19cRhqpEdWQjoYWXJcY2xVrrJPgc94PYMaZTMVbuvFsiriX9UTTmyXgEvrbACBCkP",
  "key3": "4mGy6t8K1nMyXCzcootKYAsRQTuRSsfz9op3PTuXQ8r8gvtGxBBcVGCuLP5ZxasGfK6USy9Bo5dz3D5FZEsCVEmz",
  "key4": "2KMv8RNz2RushijSJexRSfoxPZ7fGB7M2roTkhAHPCLWT8VCRZ61M2d8s9cCZ525erjo2mBMZLcDwGp5r9hr6geX",
  "key5": "4hhtV86hxAmgJdGuQoYQgmBPssv8GzTamQ7VJceRmQ1NakbPcCVXiNLpPxBMhGFeCzBWZrwnnF1g47rLFHAf7J8g",
  "key6": "4CRm2nZeH3zbpb716AJ9C8TWuVY7mQfYNgtGqMfP9ApPpMwkyqCstV2Ghz2d5ZWgoXKkpE1oAbnQ3fQupLbH1kuu",
  "key7": "27FSA2XfJz44KSTQ7ycjAaKHoaiGWhetMYseL7YVYEUm7JYBMC5HiHixC35KFDp14pPWEVPTSqs1Y4BuJjn26evs",
  "key8": "3UShtN3TuQp5yxwYMTYHConNKMF9qHDnxEJaPnoxVsGuYS91uxByTFvLmPQrEpXkFdMWSx3KPoQTdUxw7iDGzLso",
  "key9": "2up1NpVcJUECVsy1EnfcAoPohfUvZnr4ZDe47AqmeDtDChRgJZhUM51F5iwX41fhGCeAQmqNiCcAyxL8DUBhAQd",
  "key10": "2jdEanxKboLLVDEoAmAx2Ay1omqHJ1zjDbYJ264c7fuLsoxF4eqyneW8MkozftBD9nPtH34zRo9Ej2qjESX2ZyP8",
  "key11": "49xDyxwDU5TtTTbavikx3Sug4t6o8fPxaRSM219Hqypnav61nnU4KHhQvJeRjQwEJwRRZK7ZpoEPf6AzS2ZcXHWM",
  "key12": "3ZHPWy6S7P6emrkWoZ3QMRc6qfCfwxhjF4mcA91b6jEyNZCJsXZA43Baq1A7fVtCZMcW936y95xvCKAGayf8Jjdj",
  "key13": "5xyvzCBkBYedkRqWUpGtbYsyUFVy6X8jMx4Q2VtUf7GzpwyDq8bfbzJrDwAS5uTSGCgZWTbYBipaqDHtPRmXdqqc",
  "key14": "2BSxg4rjRxBRrhzGjLc1i58MpHJJTh3Ux9ZvEDnschUqitSMk5MgtrdiQzYJQppbCWk5hn8RUYXKkQG8wKivZG1g",
  "key15": "ESVNx79YDWTk6NwzAh9KEdEVrE6bbZJJsFQiA8wWwdYgG8fMmzryt8VsnC4BKeqkfxRF6pgSzNjisRGtxvLXXwg",
  "key16": "5muyjxcTrHbf2Lomtimyun4953mqBkfB4FfwjuhXP4JvQ1EufN4P7sbsLmEP6ATNXJPvQX3QnxRRg7PCRu2krEbc",
  "key17": "47c9SC8cgejawz48N6mUFdAjMoYgEWjh7jbUj5DVk3Yu6vWRdyPZ2dcFkvUSEaPyKnYpMgfn3QeaixLyPQGLbRwJ",
  "key18": "3spRe3XL4Y3YYMpzyVhDKEjaypFQKspyKeCVvmkBHPFTe68XPZ8woNAtq229jdbMbP9FdwLV8Ab85ew4p8GVV1S8",
  "key19": "3euACnfk25mP2mvy2RxjULcoNKTEoKHCHjxBAHbHXUzLwEGa4Fp6VCwL9BHh3qsBh4e6dj6eQ38ovjCixC6Q9FSE",
  "key20": "GHPbAarwNWTZTRW7yPqkAvy4DjiKeXAacjPeV5rbBdwh8rnxtWsLMhtVw4G3QTpQdkTaVrpR37w5CcoDM1rj2nf",
  "key21": "37JuJxM9zvMFX4uqwnei5bGWFfhhf5TRLuuuzFy4WMRqKWn4kwUm8a3Zn5eggHzyim3LKihRHoMbG8egFDULSkBX",
  "key22": "3i6YDccuLLG3cVuTfBGeWJmxXw1GSLg8erkEJX6ZsfZur6QTPgvPuwaEZsDu78MhNnyimZ9TtqVRWSNnXwSSTfUU",
  "key23": "3tftdyuwvxjndY8mESvPcqLyZKrQYXcGSVnJjxkCHVbqfDRN9kcQhcXLV6H7LgmapDpggQD3yKKN5wJB8Aj9EevH",
  "key24": "3N5vAqMMScptMcT13VpTcg4RS3p2TFwaJbLbtqUBktqmWu7pGsGVf5GVoQhjDd4BXF3RstxXznJEnhqckf9NM2HQ",
  "key25": "33xtcBTLEadu5deNBrTJZuPJZ2GcE1xvbMtuWpniHSDubc9jFY4M1xRhRqf8mrbZyeXdGEELmju76nxtWYT7rDfX",
  "key26": "61TxPvMx1estrMfLP82gX4t8JyEUQyKsGgN7ndKSVL998EciAdhUhZp4GdJANGkQnVtjgCahX7zMNER97kpoyQ1Q",
  "key27": "3wyX6bUHVNCbGqnsWrzGdeCAFxH5SPzS7SBeXhbGkJm3W3VgEvaCC1zbm8imJB5ZNPrHCb3jaXJzqWdAzjq49Wh1",
  "key28": "3oXiWJjKFhvx6wj5RwaNMUXvkfcvKuZtZeKD9SoMfUxoW75g4yTSCVVqm2RcEnz3o6pVyCeNfaQrECYcf6HDMdEx"
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
