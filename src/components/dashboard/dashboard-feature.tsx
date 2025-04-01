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
    "31SrF58x5u2oifnpQpggVqoYowiLAgq7aQS86E1kbKeHiqStFx8EA8ZEUnvNcZqbYoH6a4AY4HRtwi9Yt5AVH6WW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Uvq9wLcb1bDu67foYiHtX1bbDZnB3EfVpugrty662pmyCcuh7BdffkFrhLEpHNgrG3GqJcJp5ZcXFNXEzRodNX",
  "key1": "5fi1yC7MmGkmyf7P3VPHmzdqvZn5TxD99GLHiTFDkW331D3Z3YiivYcDFNw2njXPFCVs3QSaEZYAY51a7kcBPxpf",
  "key2": "35BDYuATBZAemiDcRHfPyqFV7gGWwm1XL2hoLd7x6UroKontNsjESSSyJ1rjjsEXSLSYgRgF9QrgJHKTaDhjK8q1",
  "key3": "21Bidz13KM4oMxBGNn5had8BxoQtsm8JXhZETMwFfmSGZcbe19oaWUgcu2LvpiNN2qqJwLoT4TXW8m4V1tsfbF5L",
  "key4": "3Y3tfp2VVbpmQs2JXsMjEzAbGCxN4kNNzkDuBBNHbSwXZTQTRk1a7994fYX2vbxdw9BLWXNBKPrc6eCPZ6tQhUfU",
  "key5": "3ox3TybXp8VVU4rBccofxeZxyH1CNcMv2uWjRAXeqkY6Vg75cRYRHmZE2euweKFfnCnUeFVRa9jbgvRUpsr67Kri",
  "key6": "PwVxrtDoX4SM1FK9od9QkMPj4Xrztxj5j7WNy4eHDRC7nkf94sF2pDGysPDK9aLwhDpJcHt9b3uqom4YQr1psYm",
  "key7": "2ESQWg3aVgC9PJRA7bpA1JmAqxFDThGU6H4p6FkkXPju1zCxUrFbFi3rggZJGajJqDhcVcB97tmu7i7SijVhArwM",
  "key8": "5qgGCNvZnYSNZ5sAtio1t1Cdsp2cgjee6cvxfKBW4r6fUqpFVqK1tR9QJs48JoKFJXWfzE18DNcLwvFLb1KjJ5AT",
  "key9": "41rpAkZnQsjR67xeAhxjve4RmtYLfaypf5YDcNVQH4ykipzTmV3izvQA1vzUPhvwxwXmCpXSoHftSHyZ3uxbhwbf",
  "key10": "2sNwNGoeSfq4XTa2qUYStdX9ZhaqTJDHN7YCDd2ij29KacWwVSatBhRDAKG1bq8Lywjc5R8Q8dVvJM79aCmUH9Cp",
  "key11": "oYgDeLyyiitEf49h3eCpR9hwdA8Kcc1fY4dMCpJuxJcnynTA5nfTNrb94JSKYRxH7egyiWzYVWFtaHjx1U1WiT3",
  "key12": "oaBCCj2tSFPkHyQRHCgpCfPoDWSHBQscpA2FH7P8eisma6qSmCCbZcJFihbmje186DtzaGjPRbsFa2DBnTMSvfQ",
  "key13": "3k2Kr3FA3wNZJGHMCjjmnyJkuEUcdVq69iy4nWfacLbZgnhLFsqHKMYuXPP38dZqJcA3vxB1YaG1A86aPfvYLDdv",
  "key14": "5WGWa7hzENyN86xS6VFg8Pasxj8C6k8vT2XFHVnADXWRGdWm4fLJumL33GHqJRMdGX91Rv3oGtCnwhMuaCzbDAGG",
  "key15": "46Ctm6iKwSBaGh5eiYShzYWdLHSFEhvzYy7BoEmXkxkgHmJL6frA64tUaAjBBKM12qHmr8jcVsy56m6wD6Ph85sF",
  "key16": "28qfdc4f9XfkJEYNMMb8qK3wcw7QFo8y7GGK29Q4uY6wZhDZikALKhhpuJuS2Mrzmqhd9udyHTQ9kukHRkzhqyYq",
  "key17": "5T7c9wBuDAwEavsN7qS7k9saRQkhqTHd6p3ENeDygQtD4VJ5TUNdfTsstctB2tBrvMVURHiALn7Ebmb35x2WVJ9J",
  "key18": "3mGSiBYdqhFKjSMKBLTsCcBaDr2CqmUcX87t1AHjMNPnVks4c2HbW4ihJXpTgqk3CAKsg1YPHMGqzskMcwsax3vD",
  "key19": "jbEgaJk5FUCpXdMeMGWktVDti4t5qA9iJ68XtBgehYx8BryjanbR9a8uh8cnaiiWFwA4XVBqyvL6VNKiQGXJ22B",
  "key20": "5xBpAj8NPFxvLJfpnHKgcmbTHEKa1YRdmTuVwuRTgwt7uJwBUyevz8DH4XvE5n9V4HBKj5mTdC7i9bkAMyS3Lwwf",
  "key21": "3Gctchu5vCsfnhkYmmGQdAAVuT41Hs7YpVuTZ78dbPah33Li8EGZnaMtKbWNxy9SFZupVY8mE9zTbwYWmL5MXWTm",
  "key22": "6GVZM2kNxKxjaKGnJoG8ZX7RvG6fVu8nTvEFzj2tHnbTfCXpB484jzcMuECQ4FLa4QLPjEvLyA7hSHNmXhgA3mE",
  "key23": "2yVKfZRsick8a2q1Se1UygPPWECR3Q7f3RjtHV8vcpmnYKCv5rhQ2sioL9dDy1JsRsxXzpYn6Nzj73vXLft2vG7t",
  "key24": "22RpbycfDZk7a4t2eD2aZRhovuftBZnSv4MR7WSQXobo7PfADPLKDH9TSTgPiec9h5KBaKx5pWA47jEcinaXmwn6",
  "key25": "5iAeSpvwSmH1XGGB5JAuB5omhdH8HKxNaugU8tVZttL14fRZaecSeivmTYcwTXAxYyxM8XwwbsitKnVWDToRU7gr",
  "key26": "4j1SFKKpfKM9jocfCPYF1CpuxvUAUguepCiosEGoU9mJyWgEJpVqe282tTG1JfrbWApQbFun7oPZVuc8wNPX5zUy",
  "key27": "2XVW4uErMhy3cficQJuMtMafhVrcLo7wCFJMyo1UcQ5asWa5v71Ey6ugvtMy62dqZK2vCDXhwrRwAcahUnEH865C",
  "key28": "2VhxzsAJrfWvYNr8zPLaCudANxVSpUjAKBjP6Kc5vbu61qCD4B3MVauZNZQmyfQHgHb2GszJSwJNLPMKdR8PeRCK",
  "key29": "5drZhj3zjF9MQbwKggtdzuYf5fo25G1zzfkaFewJkvB1FGCid33jfTxJ8qYhRZbv1Y42WER6z159Rry5RJp9S56f",
  "key30": "4CfNCrPNsWvfYHivtopwLAnJtNE8eTDg2adAQMFSHJ5BzxjacuH6Vr7ovSu6hipgDtu277CPpnhC83crPWREE5nE",
  "key31": "5hCGZmGMcU6bh1t2wuhdFmfTnwDso4qjQbbTy1hfycSDy8ZWbjRtWn2JoD2hjdo1KBcsfwtzvkyCiWHg7VScJJCD",
  "key32": "57uGcg88DAwEbKBmHNRmoYD99MgNxjsvZuoSsXgEwNxJkrsZEx2buQJHqE7q6LWfUreRARYGjLp4PYHnYfe3o5HM",
  "key33": "8THa7qtVCSWkT2kQbsqfRDeb5LStJt1euj3EFVok98Krz6Ht8rQbghvaYciZbLhg8m7TpcoeCNK55na2oqhvHZJ",
  "key34": "5nwp8cjvVSy998aMWzXq8mycmKqPSe3Rwabkcq4hutft6UHTrhNQTGRu1TFRFFNkuYBrF4S82MAz1yaFoS7Tikzo"
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
