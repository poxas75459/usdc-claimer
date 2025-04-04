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
    "62ALVQEhVqc2R7moCZFMQWNULqZBVyzqmh8a4z3CGc47NjWbyKQqu3bFigXXDWpCZcfkjchnf1uzyxt7tpwmggYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aj5SSiVDkuZ6MjYXrXm7oFbjseR14E3RnBnub4MgEBSa3f5NRsqrjoiUgW5pw7ovWCBt4PiYZgzq6t2urEVgqNm",
  "key1": "3rVJyxHoMw6bkhgaMZsQ1ob2jq2aWVxuCQsriFq3o5YZeC15Bh9yNqNgD8RYqZvvxtWKKiUCpb1woDd5FP967fcm",
  "key2": "2wXZV5Ffw4BXuPvhGy8fdaJoWV8ao8iHToZ44e8mMnnS7eFmZ6cCvVDjhg3XjnAqDSx1HU2tLop4UUq6oq7GRLDH",
  "key3": "3U9tpGow5fm7HZdCStJ9ENXir57coTsSwy52HhXL38TMr3vn7mvpvSzTSJfRUVfWtgjyQFujdB7v8sjLHLXudARk",
  "key4": "EuUpKphydsXTdLV2FFapCgwC7d8ZSeMnHFgKfTtG9StxveWXgLjjTU2utHtX8TbT4frhffxSpXNbnSARQMLtivB",
  "key5": "Tnn6icXH3P94qu1iioEfoRDruEWaBUa6rammQUPTxLLCrM9Cku5PjWmFg8tSo4LAr2ngb8eXoEiHRsC21oyonvQ",
  "key6": "3qYcTNJ2244BXze6ZYo2X9rDcdRtvx5LKcmJuw4cSrrt7uk5P1nWeGJgVctkwJH2G84jfap3u4EUtMjxLsdXGysy",
  "key7": "2eV332JaYTL628tsSFNM3o2YURGYQEP537YFWavQVagie1KKM8iu4xobfvd6FFAXm6BY98gxMPg8fWDuiKTMCWA7",
  "key8": "5upXB9hqTmKwLMWuUcCyHgwwfACBLXFGXCeEEBThnrFGfsNZRLAvKdrkK3vwSFHBCWsCBG5Q2tHweFfpc8wutmgu",
  "key9": "24SVS7BW2iTmwsa3kDAGg2sJmRxDFCshrQ6J5qEMW728v8pwqqXmAqW8pVyaUPKc17uqdwFLJ8ksBCtu1YuvnDBj",
  "key10": "Pmkbjvgj8Ph4GzcNqDJiWfnCEuxZe5Z6MMV8hZHV5cZGetpuLr2roJwSkrdtYVsikvnCqiGkdbVEMDy7JhZcyM2",
  "key11": "2HXuGuUg7duhS69Rc5YK8skCWGrt11F6wfkupSzejo68yD2rRT1LCca6NGNsTy4q217KFW7R2aUoSfRjGhBiujBk",
  "key12": "4anSWuvd68K7XTRxwChxo4eDdVREctRrPw4ypJZv1fGiHngRyyz1Vz7Rp5iDjNPZUJ8d7TkNmXL6orYixg6B3sPQ",
  "key13": "rCeajBxiYAqtgWNkMtKdhxhjrMHhKn5DigubHauheWhTRdh3ek442Ep88P6JWFeWw5jT9wq9wyYTpRNcS3bvibd",
  "key14": "qhvUWS3sTyCWCUTwfmgAnUx5NAg4LP8PGjGsCNyuEgZDFqQRVQnN8NQ14fds6gJxNvq1d6JNv97SPBo7TVzuvoi",
  "key15": "3w5a3MSdRe2Mx1iDVkWT1JoPjtNNmw7xj7cmeGmXs1Z82JdxyaLsV2JRkfMmgezCg84HHzaYhVaeR4yyGjCuqJB3",
  "key16": "564uHSGtCbMVZYG4jAYt5nfktYXmpUxVPcuQqd8vTAz6NNS92jrX15BZxR6KB7EWPEkifirY3572J1CSDTAq9kdu",
  "key17": "3xcig17QEwnDNpvexpFER37rVmo9agD7ytxh2pWAd4tqq1Hu2JtRK2aW83TNnFyxR9Tjq6zo22J2XNdiuTJ4yfvQ",
  "key18": "3tCieJAJaeq9vXmZh7FBjvF2zphDWQ76t2RnoBdRsFBpqeesX91gHqbbFVvpVzmYahyyjDQ2GfEo5qpfDZPtaxv5",
  "key19": "RuAWi6P4LY4Y8GuTU8VM8JiMy7aJJBSL76gTqciaXSG2NrbEyekLK5s3dxdcWTGVMHsYSDpbN99hSMmmFRcNdkN",
  "key20": "3fFbZuYVhZWKNV9JGWPbzNcPfRfxdQxuqvHwAfL6mEDBz7sqqA8QNan73ykpqQMQQ8DL4NcM1qEQA8BK7QVcmqdq",
  "key21": "5hWka9f9t9cPN1AyobEf3WxW2iqh3xr2YThahn5uReZykJWh9MTZsBcQR6SsoVaGKvei2uttHg4vTnXP8tV4NaAo",
  "key22": "2c6q2PNE1yKNCNaEk9JfpQwDu5nCTMwLPfU2F9Wceqqiz1wNyi3sQrBUi4ZXAFtJk1znnmkTELdVhEinpPGJCnZu",
  "key23": "462cWnxHypFbG7t6EPgESsGDUXUSEg3mYczSkH9bp7d5vRMDvTNuPVpEyXRuEVYQaXqbsfMRFWezdDa59oYwPGue",
  "key24": "3VrY9TmKzbhpcVkaM5iqgV9fzH9Ni8TG8zv6WKAxoiAn9tKns2b5WNHcwq8nsZt4XU1NepAtKrMphNhbzkiuDQm1",
  "key25": "4bi1dTcTApGLeE9P794aKjyyUYcmpZWaobUoAQLMVYAHC9FdQc7Zr9j2dL7uYg8AoHv4fkvut3JXY6Vf98Z3b4f",
  "key26": "frWEJHF7ajKdb45koNkBPcLrq8ke8zHN3i9YZ8RQXzwvBgUcabuL2kXnxVSVyaytHegqamksMMe2jn57cwC54X5",
  "key27": "5kDmUPWsWxZTuBzrE7ZF4wZySNoCNNTeGa5SntuUWVTjCUsnYMgAXQ3s3SdeqJWAV7E9aKSwN3NqPMtt61wE5rje",
  "key28": "2uPmsfxePJeXq2tg6WKP4djuTZiMhY3mKHvHrk3md8eGWtRtgdRfherJbwfGmLQmvHp1uT5nUqR9q2EdedRUpeMW",
  "key29": "3uQSxeR4oAK4sWpRkFAKy4tVQXt1489LYTDkHtATTH9tmaHp4xUtop1t65XV4krpcDPScazMfPtz4iS5cDiovshx"
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
