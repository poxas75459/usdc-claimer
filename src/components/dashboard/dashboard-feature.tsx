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
    "fa8sC1s6EFrwf41kicxSQ964ihSP2XYyCpyPH63sz9SAV5nYnuuTuxSHrDaFtEo5nve1V4TxGH3RJf9odeFdubX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vsN9CThfxWCKAz5DTqu7Ygjq3TGsuKQThhzSoZ6G2idUJcqFDwbuGQ2y8HFPvnxWUo7hepwocMnffsYFyw2eEu9",
  "key1": "4AsU2v5GP7LNTUVFwrkPZpy4kNxFmBcXxK5kpCRWPwyv3NdMv1BTGmpBy8JSoTcpSZjcy4Sudrupxdvd5YmTaQhS",
  "key2": "mBM2o5frbzsJX4LUEBSArP3EhHJWkVr2HJyEvZn6LASz2uKBFjJEM1G6q19AyE9VLDMu2HDwXzVaEN4gMz2NAwq",
  "key3": "45zcbDYo6xMw9gWCkfmSX4hJi3nkYYqbuQYnku37RtDy7UVKxYw17db88hkfd53fKiGuYk7qvo2LPtc9Z4cKJ669",
  "key4": "262xgxYHoxPy9hVaYsM96gPT7reccpfeS8UAkEi6M5JgmVtjzCa3PpJWBGkfRmyVNVHaN3GTqJpqubM6UkeU5hNw",
  "key5": "x4qYHzfy9y7KoropEHbqDjArFLkh3e8DvbGwsmTj7LSMpzDeysAvYaEQjrJixFreTkty39K7512UkFJH37fjuSg",
  "key6": "4KwSGvxEZM2RUNZ4SDbyEZ2kPmVkerU4L28vmBKB4XNy6yk8gVXaoCZT8JH9UYYxgRrZ5pjR4WvA5DMDKnmeHHrw",
  "key7": "64d7GMJJA5yu4ekUeH8YfkSzQ3sBKiXqQMKS6Ywqd96G7GZX2HdeW5HedWPyDTi1jbNf9KgBmBqgCsPE5FoAZEwz",
  "key8": "4Fe6NbitxmZ7bWYgSxhXUKhSKt7bMgNQ8EoW2NU2fUevJESbc41aNf5M7k5vqheEYLZcmTLtbYb7jzA5t9kv1tdq",
  "key9": "4xgu2YXK7hCEHQoasYq2GmKRjmBYp2udcEeGHwLLwh6DXEYRXrQqQYSioBVueVLsLvRWG4Bbzp2SZxWBCiWA2Lu1",
  "key10": "3Z7EXueQqEkZTgSeSrjN5bpDWPCjzMZR7SSeW71spWE3hrEdxUUjkQTiWw8QGejEnKe91LfwML7rfZD7gReCxaZQ",
  "key11": "5SghERSrqYRvWRRe17F1sFWE9PbgZzwU4MzJbtEpkrvQsCdnrPEypTSPvomqraYZUZdvbxn5gBb9psitNoRAeSJV",
  "key12": "qkSVYTSUQr21oxT1EAWFRyP81MHY8CBkMgGFYb9Pj6ZADyWXhvfmHNKga25PcyiFyJDC5F8SmRFVxbqNmScVLrg",
  "key13": "261LicvASrRomXpKusotAdd1KD1L8hBacW8mLQWDp5cqwnwwsRwbYE8KQ3vEDKkxVhz5ujas16oATp7ZqTZ5HRm9",
  "key14": "5KUFfWMG4MFvpZZ4mSiWwKhAq7WQZxwRVwKm5nsx7xYP7tr4k72SEdsYu1CfYTXJY9Sb8g47SxewCZ9EK5v5vnit",
  "key15": "45eshL2ZvauRkqhdUy2oLWkSNTmonJ1DhAun35kjbcCK8uqsNLkX7xmVvEr9xP4Fa3VQzWoFrfaUcLzGDXbnqeh6",
  "key16": "5Bft6nttmbcp7UL84cjQNMiD1pM7AQD73LreoDe9kCc4jdkMFVjwKtYfhcWVoZPkBYrCjBmvkPM8RHfvLXYRv1AL",
  "key17": "4Scec9fecqfXnmNnwZ3ofFvSAi4UWAJaSoQAoH2YQPD14tm8QNkHyfdSabAGwBBeyhpith4ddUQXCntLgbHbKq1J",
  "key18": "4NhQ1oJYx15acJttqQ3v1rYLzuJwL2i7SD2hdC1XbCwj8KXRfzYJsskdKJsutN9ULodhbVpj7jei3C5bn3LtkMWb",
  "key19": "3VLJhQHSfLusYw1Km4tNe7TdhevikkrVjGWYEUV6zEYyhawM9vYSPEWCDTb82WRoBQNG3tAvTVsoxS818Qgax54G",
  "key20": "22ycEYoZhcQjvgREw6KLAs3wqBi38az9n6i2egQVU3aphv3h5p3JJM7MqjCAFeJyjM4mT5rQWt7cvUuCYUBZKQvw",
  "key21": "3aYh1NTKHiA8EFe5VqMHRmaZF7Eaw86U1AgsM5DCJkUhZS296xbWy9u2PB8cu9sM6rEtC9iomVazhGgZPxgQK74p",
  "key22": "4bvJoPMWo1eFJ4mcvzbQ9pR79PRGe2cqc9jT7Yy6jPvnqfdvhTBgJdJb8tGa9cuEzhCZ2fr17rHSmp4GFbtjfK3F",
  "key23": "3Ptm2YZNT685vKxheZ4YUizkyBCuSGtTXfQtbHxgtqqTPBzHu5zdA4cECefME86ZKbu8rwcTJz35yWsJWnzGjH2L",
  "key24": "3JANZN62qiZtHN9RdSAMQj8pC1mD1jwNHt6AHrvr7r3EhhvHVqGjCmaXTWmNwnfkSVujbwcttNPrH2sf6bTGYzKw",
  "key25": "MYRdmXCQxk8efrXNgwzYM3WiLFE4ZDjuc1msK1hzTN5cCFCQyJLMRafcfffoRf6gzg5adyhGBMUxmY3vy9ETgx9",
  "key26": "3VwfoiTBr7ijHRhoHPYA2TefsnTNnPr7QA1Eth1jhNuvafJEoTVJ1WskowBpjfmsrFL2JBM9dkt7UEh1CpYyL4jJ",
  "key27": "s1FUJppqLkGaEWKB7xJihQizRVdosmwjCkHCMA16FCFscFZ1TDgRKw15FR7sFp1nYWSB2DjHnADsJPfAhguMtjX",
  "key28": "2uUjhraoqoP4NjbgBC7SJV1P1U7hRVUXr1bhAGcC6uoGRatueGd9LjNLjm3v2zUL6vT52mh2ShRVMbLBS3A8R21N",
  "key29": "QAzvC6BJ8wC8JyEVqELd9Xkd9sPn3sWHqWiPGnX18mxcQkUkLhuBeEkXdRPxRf7cZsaZbK65CNFqYnh7pR5a6Ho",
  "key30": "4Kjwm1qwKnSrDQG8eDbeC5twLBFDx2kfBMFLSfp7qk6qRB7nwHwKnPSaqY8DGy42V14E8WGb1tSGC1rvom1f9Jv3",
  "key31": "4tMuEJ6BnNiZ64q9Cz1EGnZXSuTzjU7TnSDaJqs52J9qC5gsbVvSqGTbDKG7mUy6NNgZejJxExWZXGR6joy2HnFH",
  "key32": "5mDKgRxaUhJxA9uL2g1Jj41Zm7LKRBJvXaMSTNtywgXw7jt7kGpm8Y6iyVCrpxSnxvMo2sCkjQ5B84PmV2Sx4EgP",
  "key33": "5ShQQi6XUM41szno8uGiUqGCS5Rr8vFvsmiZQvDRBTPz7JQwu13qa7BJG5xmDDWhS5iNSiq76EdQgWwjTUXNfasT",
  "key34": "4BceeKdCkjuhmLPFpVHTYVBUL8YK9eEHScGJq7utgAFZpwMQqzwQJcwHQFJAfURJAoez7Ag6qKrtW9YuX4Qsxrw4"
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
