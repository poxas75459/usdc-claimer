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
    "4e3JJ4TEwThxdqCmVS8GxSsWHCyPUXRcwpXgGx1tTrqeSJQZr38PZdsAmkx2bJZL582F7UhcKF2hhiwQBnNQ6Nq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h69vGDQBoaZgLvnakddXzhwrnMUrVbXaTyC8NkGTiXspUA38Chg9MJBCLS44MCeRXtQikusZsTR9yWMQqnep924",
  "key1": "5KJNUaT94U8gma1HTK58Whmy5BGQTzbRFTKWu7VPkbnn9TbuL5dLo3gqtZ7ZR3NbLZPvNYSwqByYgcus1GK7YGn9",
  "key2": "4Ht6deQNfmm6TKRo2PZc71GMusKvRP8ztuzK6KqwQbZnAKRCc4GVkjetavNUYJ9zQvPAgntKDCv9fYZLdaztVKPf",
  "key3": "4SeBmpspouj3iU6PrinQ8rFPZekwxhnwVwxw8CSPtsTvPnavBgjzr3kBBiDqpHsMc3uMpVfYnqh7sXweUThr7Jcf",
  "key4": "2LUqD5vZn2rNBMoEQP2q1gL8q8WwAvtVTxQCfSoyvJdPoUXyV7S3TKJbc7LGSZ47gHrSDfAu2gRRfdUwuEvTtfTv",
  "key5": "2jrVp4ms3Q8sFHQ9AveNRs543f1FYA4vG2Zjv62yPn1WiV5KVj91Ac1UvHxZm2ccft4Dbd6zH6rRVnXaQkJk4yFj",
  "key6": "4smKPrVET2mjKcbrMus5YjJqBqig3YWNEU2EirtBmDijibve4MdHM8byd2cUMBU7hWFbVXz6FYb2ycf5w2psgNn",
  "key7": "56hF6PpTjGDFAqqZWfaCyxEyrfTNhj6GtL1QMnovFYBjTKGq11dcpjNYGtZ6fo81mFQe3sp61thBtza9eCjnJDsB",
  "key8": "4xi1tKh1Jz2JvTCkXrjiEyziz56zCz8f4KmrhjxGjFKfxMBUuc2TLtZAr6aetQB4Y8puriKREb9m26zLSG4yi4wN",
  "key9": "3Y9rzkmaDfEsTy7d5h99eg7EVcNrDG4A3trGusrRRSdMfu2FkJ2dXS9fSEtj69x3LwmUyZyLtiVRCMELW4yukUFr",
  "key10": "21suMFDpz4afCzH6ZKnx9Am3bFHbW6WKuFFisJ3RCHhSiXe4kJPqYDp2v7oE3HJUg75qJi1b3a39SJcrvgFM6oCL",
  "key11": "s9AvYqZoEq8rjsKvqeMLtp4QqjZsdkp9kLSxDNpxucy61eyLf7MhxqaEorbje9P8TzK5pBRfb82dTJXHN7Num3K",
  "key12": "1W3K5vTMAtekEpwvnRSGzdPqmTcxBD5U1h6ttDCRNkTUDTGUGZjj7r5KhWui5uWu8HDDxacEMdEoJzykn5viKR5",
  "key13": "2EMv9xdErahiiurLvphAK5suevMfPuJ7uWgrkCJszeSSgQdS9n1PvNvtmj8B9HrweSTRH3HS9oH1sXffmyQx28Sa",
  "key14": "5AjMvtAPag2RjoQMqtNECW7cpyQvX434Nka6bzFjbkk7T2axmPejPPpr7cNYTfaZNynN9aU6YtwW8i28nWws3Kpp",
  "key15": "TnpX85mbRdpikSBKRwHMHS1FmYj53hyser2jYLAufxnTLNywdYDiXyTM36rEctXHTB5RLND6hr7XvRFsAQt64uv",
  "key16": "2Gfn3CPc1FDNTEFfLtgBJ1TJJ4DDycQhtyjhXmnUcgmnZ16ZKx6jknS9u864qash6m9hmqgwoKksV4oVqht73MmD",
  "key17": "4DwhjBqWrjp5LQu3cs63ttYNQ8RKicgdNxnhLmkvDonKUqqM4L1VjyzeRQAz4vn4zCnQ9Fyge4tG3j8NkNrJGSh4",
  "key18": "FpCygY7rEwY5YzVBbS8LYTnEygD8v1E1WBS7JDwzoqRr8kCEySE4bv5wywJfjh9i868ZFqu4v3VX25ZK9mBUvQs",
  "key19": "3Rhxs2PhV5xv4Sqg9DanUhVDUWZzkBEtARZKTdgvSjL1bBCt8oMvcLk1SeWUmhpg3fPEodStmFCGLswE5AxG7Bq8",
  "key20": "3GV6mTPCZnQDoHVQEgUorqy78sKJg549P3ik48fnzSgv4t1RMJ4SPivpPcao6af4tUq2uSRkfw8oiq9QfzFDmeKn",
  "key21": "4yBuSwFJ3SZ73dDGawxuYiopEN4zF1yuiz3vtnH1FXLbPEUtYaRAAkVgZFuoGMMF8eG68atKP96tAgds7PxH397b",
  "key22": "sStwiFicQwBDEnK6TwnRJShL84xaNrcuG96Gzm1xVBYmDzSProJSVdusTg2y3k9LvtvDvhGa1wXDT9zCgzoDpMg",
  "key23": "5LcL5TXbZHkpbvjf3jhQiwZFhgtPUEFP3mUzgJvASEyfRUN4qS5eiWU5S5LB8f4Z77FYa2VDP3B1J29Xg8fBQqU",
  "key24": "5hDiYvZJkRqSh69EiWm4RFHiEomm7hyiU24UtQz2GY1a8vNHKTMNaFtb5FXNTEQu6mzk8VqRjvAmufxrSUPQugP1",
  "key25": "4mL7yCqnV7sspHtLUTWkwp2LCB2pw6Cv5nfwefzJYH4sYKEUumvTH11yGvTEnp7GQpRyhdqNo7VHK4yzmX3R6AHt",
  "key26": "4792s9tsnNDVgdeKe8z13HUYfW2BQ5wkXTx8TVGUKQoNLNece5Urus7n6VNDZ4AQjXLw7X2bppy9ioz14V3zERar",
  "key27": "3qhaZWUYKPUANN9hch762SaeqzVkGMc71edkQ9cZJPTYf8cT8ogV2YiJ3pNubbL3AMJigrsExpWAFGcVkECu2jBh",
  "key28": "2bF8q1TVThTHa2Htrgdv1xAAw5Z7AcRokQQncaJv9h1Nhgn3rRJvAyrrYpLp8BNxSMpPWPPua3NnJ9gWKQoCGNj7",
  "key29": "wQ1WoePP5pdfbPoVtR84kiU2f2S4EEkQNLaqozdiWP5NYy9pTV9QX6s9K2TK11sqKLjVqqbZUkSkjcP965ACDG5",
  "key30": "4kNWM9piBwbExoHSzz5VEBzy4ogiTx81vp9BtctNjXVJ2Y3ow9aPYG5bQXQN23xwmt7rqPsaViBcDyQq7JNiazvd",
  "key31": "5dpMUskVt4foQDH58VhCJKQo6YM2UaBxXwN5sAxpMqY2QH5yX28Yh8apsJpmKer1LazVwfUoDXFdV5v6SvLg29fG",
  "key32": "5tA4XwfWmGeAgthEMQzQNmpyt8cAuzms2jzQc3scxWSVGkB7Y1eY9zt3eEMvLAoyPzRQXs3LW8sEtRS2RRzrDeig",
  "key33": "4XLGhwt9smHesyr4jSEm8A2BZ8MQiSFsTcsWZNqzPQ1DUjHjBRvxfzLbGHRmk2df2xd2Fd2BAT6TmQnFCA8czxM4",
  "key34": "1fqjzo6UEcEF4tHpmYtM57KuEWhvMAFo4gLxzYbsoFSUk4RHJDkaCNrpHR6ky8gdWLVMHqEp2XyW5PNdJD2bGK",
  "key35": "3nXdcMQC3fx2yoc7pag8SUryo4wocEtpv2uf1dzLurE5reqxHxsYDxvtVmgV7qxtJ9vnzSNK4AZJbE2Dhwfxk2qm",
  "key36": "4xmUi8VS8d86nZ3WQxHmDp6eY6BT2dioubZvEHupEhKUR28VRvYDimu346DkFmK6fwKQM8Ln5BFhyvXnHszrrMq4",
  "key37": "BuyTgw8mdbS56qfZCRkTCQqUopLn3V9pyyppsieQBvs8vN5g3YzbAkBsrhsV31AUzbAqfoYG8FPHrxVZq5ytJze",
  "key38": "5fsZT7amKi9PzxrZvXbuuxeF3wze3QRCZWa3qkyfYGHhqAupP1h7CGrWy3ZJFYcfp2icoZVzSqUt8kSX4tbAiufp"
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
