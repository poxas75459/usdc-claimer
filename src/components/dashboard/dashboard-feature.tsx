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
    "4zLYrhMR2w4N75kbiSN8QqhQh48S2Gm2RPVEfycXoAC8LpUeCTyFHmLzyc8szgqxeVdmHASBPvmfyusHzUrvzuuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QuwRzFmz7iEaGeueLD93BKyc1jfkB8YRiJ9WKdyWF1Ph1uDv8ZMtuKFZLtP2ieKiNjM7VYx2PsntTCJADxywGcn",
  "key1": "5UhwEY5tBH1nykKDE2FWvvPfGxphiHdDJCcwA1zY54izfPhoa6RPBKcTKww6qScAno8Cb24zKaRhthiMLHoBqotN",
  "key2": "4ofRWL6eE2GpCqhciAv89gdevsDLDdWcwQ65QfDedXhQVZBKgeQbNUD8oirzHvkATDaLxJEujggnrCHNKp35UcdP",
  "key3": "3Xx1aySttLpwdErg5stV9oXHb4meQuohEZSK4wCpaih5Qj62wGuum17ZYeYpCBprZfaWYfxhcw784L2GoKVQCzFE",
  "key4": "59ZiZHFFRxzXwtXS3MctNKwgNeL6mxJrBg42qazqr9Zf2T7i14yfFyUU9MKChviMXDkNCvK53YSrYFU8E39QjnFM",
  "key5": "5hGZ4ghG8KVe5GQS3M3ZFvGJVHQRj84swsP5VxxenAjazEJeLodBrhzSFtnECbCHSe8YwxCzz71KMv32i2d98Jcc",
  "key6": "53LKKcqrKyBp41aUj9vuhFWSnjbSnHGonR73VLY2kTDYHTARgMsGYY1qpKBq3wdyb5kMxFkTatixuh8377oC86vK",
  "key7": "62ayAhS6D96ckHHttAwR54WqL7NV8odHYb5JceGLmMU5V8tqxMCedEFzgjbaL5fZL5vDhmLjFYAnds7HrHVWXwHn",
  "key8": "3TNUH7hpyZ8NBrrt6912J3rYPFBmm5bZbqFfpFrsYhWQFfwMomNCQsSd6xprRtmmr5HDs8dYtmLoaGx7XCqF6gtk",
  "key9": "3rKjPjBwhSb79tK8kvPkyt8KKfCqe76fnEwM3va7K6E9EAAPebHjCTtDppJGxkjv1j99DgtpFBZAzS3EUeUnhXgw",
  "key10": "5A2BX7XMRPJddyRpQMpS6afbS7sKcPq43boX52ghAXXEEm9iAbk6nJG2cMuYTRDDS8QZPPy5hJQ1teqmxrwvzhRY",
  "key11": "3Cx1dfRXzgFudR8TQV1HPfgkrYvm9V2DfFyiXPswXgzNRXAp9HPMvWHfSjDtS5FuCC8QxjSvturPNKCLADUy1P6X",
  "key12": "4ANtNeE6Nf5KMYky7rFE44virsHBzj59kPkmfoi4wRSHoMF3UhgLE1n61vg3M8Na9n3pdn6D2jYdrUbjvtBKYMtQ",
  "key13": "5rBFe9LkBJaTz6wpPgzWmNZM6wvg41eCpFGVpL4kYzNNPCFZ2cYJ2V1oN8XqLpFX8xnfNrNMaNbnjsBRCvNusXv3",
  "key14": "2AdC5ev1b2B8WnD29U56X84SLrubkSgpzAwap8BXM2ainsuRFSZAbYXcZbDsLTJYN3M8hmvp7pEc3kFfeiTjFm1t",
  "key15": "2eknZbx7To3C2gktQAS3VuSKJXTepfBNT5ySGQ7pEZ6LC9CRV7Sr1ZCG6RrthWr5x3ZdyBwskJzcwtzLgBemEdX7",
  "key16": "QSVMC71q3u5WZkx49gdvd4uZvAp14tUYE14Sr48A1MmRSCk6KqjLLrsmspyWLKfNwP4Wjix5GV9KzLU3APtV5kV",
  "key17": "3tZgy6dodajDNReCSy5mq1izmDQMjjKHhNwD6Z3TyzCcimpJyjALrHEeFnV9hZDF5aRQgawYSrxt7M7HgEu5479b",
  "key18": "4K8nHM2mMQBfKPVkgGhVoFhk4p9cRoo1c9z83K6XFFjku8t3AERLCivgmik339YXkTnFNCsEpxQV6nD14cn5ZBMb",
  "key19": "5EMps1e931GkF425WUJYzKNJCKYKcY7a78p63Fwq2nZ5GhuB4FypWY7JDgo4Ysb5oJKtMiKi6Y4iBqRBUZ3i2nGz",
  "key20": "2BUt1Tq7twstJZ6YE1iXFKTv5kh9KvAVqVkFLufiLKrKDY8ua9r1zj7Wq2CaPnUnnuzeYsjsZR3xx9Zzw22n8G4L",
  "key21": "5a8GBFJZCuvxYPsE2cPdvzbjJ77JNTCgi7AxSSSH3FQh1sw11XoSjVdanxiQYkAjbNW1LK5H9N8ApdA3EXoMdoef",
  "key22": "3yHzxMkku53nKzDCq7TbHeqmcmz1cucMTL3JKfGbPKuY1btEFUiu4GLKmGd8eKwRSy3QQ7PVXGNJy1rjarNC5BK2",
  "key23": "UhL3zAYCzL46VwJHo6rdS7WbQyDpmH5j4bAwMz7RZYwnqUDpTPQSaSjGeXSXmzCcUtYfRmdpcN6MDxK4vJkSrkS",
  "key24": "2YKkffEQRdYeqGBmtiSpjZc1zequWuNsYK4fgvM4eWHRkVnuw3EPijchUVher55ja8CnjLauY55mjdrRghPnGbDu",
  "key25": "22HNMSgZvBoPK4pc5Vz9bngrDV8NwtAbQ6woHPn972ZaGqn7zKPUdUz6UmAEoGExQho3DUVr3ReYKEuBuezLJu9R",
  "key26": "2yWkGCm9JvZ8BZvgPx9SMpeCSaPEpW5iK1HSdxcrcUW4vwnUc4gFajow6ccd4LyuQpqssEHBEwR4DDFXZayRvEvy",
  "key27": "5PV8X5mKPBRvYQUDZidRkP9RigJt8xgQHmmES6biJvBnrR9Q6Nsi9U3LhxkeuMWZjt5cVVjhDBmKzCePVaFvY43S",
  "key28": "2tgNe6q2pbPVMeq5ga77du6UWf5mTMKB53oEGtyUQCMQRZ2WK5D1AZ9XdmhdmbHiEsWiXAaJJf8crzcN8CadLMye",
  "key29": "4dyLurGV8Q5XeMDJRBitNqjuJD4ytEpjZd7ccBtqc8nZmtg5AE3p6vEQSyqNhWxajLAqQS5rjeNzZTsLznBmAdT",
  "key30": "JWQdVxqdUfw8nmzBmjDhWYgNtvDJkb2drGAnP6Gi1oAQxc4oAKEtybLA61WK1BQ1rhgHeYtnoKesTfEbdRaNAaa",
  "key31": "3j9djjHUcKDoFSGAdnwQoYAmTFcoy5HG2eXB6LrA9YSsmRWfz9hCHHyq7h9933VNna25QRWaXgkpSxhHLRWUwRQS",
  "key32": "2hGCCj8ozzEB7jkrHJZmXAFRv3b43PzsLDKxwbeYdYodeFvE9k3mNVzvWeuUMdrR5Wc6AHD2o8cH2mL6iFSPvr6F",
  "key33": "5rPwkqKCVAwrL3kyh4Hpi7ZATaQymUYJqNETTKJRs5SM8j7c27SMj2VcQ77KFA5TcJbC6bFbMVyis8K62bLBTcc6",
  "key34": "3r4tG6hcCJCmbRTQskY1ge5MmL4THx4YXZXF4XmbsTY3F1zBVLNbaYcxRaeWJb5Ee9dQSVriasKuRqXnf1uCgZcL",
  "key35": "3Q2373JktCT7drfrw98KWQEkx2TRCn5qf3BjYqEknPd55pJR5L8hNC6S1GAe7dgohLqeB6P1DdxrcfViL4x3K7Bm",
  "key36": "67MPa2EcayZAnPehW1PpjJF5SWP7b5fMezUm56QWPx6XizUSTuZLmT3Ukqh7TeQ55CiFBQib951cQPozJ8xtN8kz",
  "key37": "2fk24fNUEXtAW5JAaDyHE5HW6ih6p2ieojbLn3qTegQ3QF2KFNeePZFZu3z1yVUPULj9YmPcR1e9ET4Eeh8PpacH",
  "key38": "5e3b972EUkz7igg8yRSS6osLJqCXPqTcPskGDUUdzB4h4fXR8DrjydV2aFaCrRMwbwrBV7NLYWN9MGqiS71e4Qff",
  "key39": "eVf8V2Fb1FXZ1qHTSUVGJotfP9csqJTcTgF2YRT9SspSxLaq6THAQEKFofrZaBSLbXJmMCSYL4gS1hxqA3cuYLc"
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
