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
    "49rdEtFWdoTTrRpL8qaRCiPy9YRrDDR1MwBAkqkcfJhCZEHFCsqkxsUaN5oGS32GgDLJY9ZQ5SFbTrqzRHDoAc4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvPFGRuktXiyaQiRW1t7Vrqvuey5NhFuAVWfsmTLUiy9uvhz1GYP8gc5ZXo6F19YTRj8nkdbsRTKAvgRkWHJCai",
  "key1": "TAh63p5xeo5AM3QETtU3uwx6NdgvonM3nkFAh1PHLQi4EfX8yF9DxNcLEfDu8oE8vEqSM2BTYoBWkzBQ6Y8PjEM",
  "key2": "4Bgu9DF92SJUQYAFov6yAM22zGhLL3fbeuLfaonSbDwuTB7uBYhgAZc8Z6MfrUzViSMPogp5pbDX7MrDbeyvkszs",
  "key3": "4gKdAXeZEVLKfsyCyDGF92MkajcELCWdZdQFQheoyvDqWUuiLkjeeiQ6qQ2nrtoA7kPV3N8WKi7pebugPA1ZNLwG",
  "key4": "2SFRdbrrzETANQHUNUZYTkP3gz377XnguTuKGCchZS4QdVvCgZUGaT55WAYy7L5Vq3ML2bT9iczLRtZ1ab7fKquM",
  "key5": "4SC13Bjmgw6cpQwzVudq94wednopKw6bQhxoaXjZ9Sn5vDjewK1N2vR2hU51ne1y8pTqTkeWfau74GAwWEmqqShs",
  "key6": "6NfB5saMZsguYYqfrqg9qwaVYuMT578KLDcLqfYwW8vpXZDpRW8VsMYV1GsZ6Nad57Q3TCnbAABNfCohQok7tZL",
  "key7": "5y7EZVZ2VwKs1T96mMzMqSrjJEVfKeWkbtNpsj5N345YmhBBE7XTLnBGSx6TmekqDcXJpzXV4n9EsyfPnKhpGwkW",
  "key8": "3LgLriyCcT9tLaSyejH1phrPRMgNEHv4a7cHVmwgPP6CaKzoujJbYsN8n8s5ih7SP75cMW5vQvXkbZjvTKFLCPR8",
  "key9": "5YLUvjHQjAPcnNQ7cG6L7KedseDNvX2uEv3AfHh57tQRPya2ZRZtbrUgwSxf26kf8mwcKkus2sGbu5wqFh9JrcWv",
  "key10": "S62vrnLsniWjZYairKhyfYUhr6rwypMV9naTwbbPRW61FmnkdFCRQYxd7CehrJYmjGnx3tMovQCdxYrerpfurCB",
  "key11": "3DmekLF1Rbf4YebbQ722wPSawTWxa1pvCjHUDCSACxXJGngeQt34QA13mHLREyvP7ETre3GPzbEoXSm3UtftKnT7",
  "key12": "32A1jvCmu1FecrWPBdEdPkKMb7SS8VXufh5rDdJUeSPo9rpNVAm7nNrpXMPVTyjztdymrYP7cnnw6gmiVnfH42q6",
  "key13": "HKYN9qGnGvmuwFXrbn5AFZMJJca2pvdXunpDPb3rQyQfLNbQU8TXG8Q4bvkhiWbbFdWty2CitcVCKwG2ecXjAAF",
  "key14": "3ve4VKVSQCkCf77uEQoBNPt3X7mYUTKVKsfw8nT14ZjNVzrDnfk9zu9KHDHyPJm2enSbhM1378J1j8ZHMtRRPftN",
  "key15": "2QHnSW72jv2xUzA97KAYRXKjBGLStGYoA1qpdVRefj49bDD6yWNtawzrfD4rUUgvPKaGSRiLLDKq817PmmfzHaCu",
  "key16": "32yH1c5FqUoqFGSmsUfMqkPqh5XTdLeoGebnVx5eqGkKpHTs4QbsJnd73wurxmp3hBYqGnUArcB6Lt9Np2XU2jQi",
  "key17": "2redVmQHYnqwPSxcQYBNEvfqwVb4YVWCmB9UCS5hXUyqvzgS2H1BHoUWHgvJdZQEYhJHcDpRXzv5TXxFfDMeUnZv",
  "key18": "5K7x9s8WNFiSGgu6ZwnbjX4ZL9ti72gGqP6ZPaDD9D1VAkWFan7hc6WFVV34KLb6VoqR1H9L8HxQbHGSjBr9Xy3M",
  "key19": "5QHoxYZThkUC8rCz7zsJFJZmkqxvxh9GpFqwEXXe1ju5QCyu3yS4yJM95Yz6ENaF9sdMucPpPHiNn5sbzG9UZ1bN",
  "key20": "5JaKSotpFBDBFPNpiZpa579Y8w2PPFEVbDY9bz6T4PPkt1v7Ye93BhRixmGUGj6nQrTqfXFG7mH7ervbA8akmKKz",
  "key21": "38UdaUN3cu9TDJTwQPQE6pxURqS7xZ4j9vF1EifCndokdS7QZS4uXVebeHzqH8Nj2gEKXm2uJvkkh5XDPJrF867N",
  "key22": "3c4ZdmfM4GZrJcMjKgLqRwqUMy3LGDXA6vfGwcspjRfnBoGCg4QqXFWpE6qSQrGoUCjfUESWE4bdt4zhg4pHnDWC",
  "key23": "4UHRnFPDQbHLdVToKXGx27HUFh447D7B6f1F2vr1qz29AQwUkbu3uTi69Tsi5QJMZsKjETyqBPCwyUdfMorMibQ3",
  "key24": "5nCU64wmkT67A7TVsyyRqyYtRTBobGv9KhDV54HWAV4AnhGzEFPVyHpb9UhwnDsVmHVes1DyKsCWsgHS3BibBhAp",
  "key25": "KWVTWaUTiDjMmsWerdy8dDUtLCBMpbZh3XmeJZsYBjUWvCeKy1MfDDuvNTaW4NJqzt8KbxqUH6WfMuGDyfY8urg",
  "key26": "2UxBHBA3AUKbeEnFvwnK8ja6hkoQqfUGACofge2yFHSH3XNzwdSQrKfQAD2xW618U6KNj5rPaPZfWLrnzuaufMbv",
  "key27": "3wzjdMRSYF4amgtu1tMGNZZ9dmySm7my3AQnkXdxvT3HSPK1UUMMpbaWaPawrPfPKki66oXNwRgDS2jLvQR1V48P",
  "key28": "5vf4P641EXc4KEoq1eVQxpPBaNTE9Reiad3o2zQFk3Tt5nEnWG3PKrRbRtNVQH154zp8MAuN5o2KJ6a177Q146pN"
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
