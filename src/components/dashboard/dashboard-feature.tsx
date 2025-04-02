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
    "4zAZSoRAd4DGcm9Xa3tXGy9BB5nHQYkM8L8hDAQH7An9dpu3J7fQkRWNdvV7dsM3kZfeBJqDQLFm5yY989bSySxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UR1QDptKwskGL767666PvvkjaLVmBpfHq7g1EtCBjXLaDY9kqPSAWvZAmhYEtk8Fj3sr6iPXvaeDDMgqpq1qWrA",
  "key1": "3iRWbzjcQdpETQfXZZphfkPGaHLMEk84MF22YS63mw4JJpgv8WawP6TJCocUmw8ofGZosG54aK19Vo5K7q3Ygruu",
  "key2": "3ErTXLDisag41B3xpz93jQV8MTET5T3Ponif5XvgXmRHVJXPT6fXwSmMVN7q43rLwyd9pLP25tN3EU6wQdfq3tj9",
  "key3": "5Fm9z3SFqmZbhf5dWmfb6MSZhudDZ6DETWcQamKLpZkuGvxx5V93CMLVe3Bp5EaPQuRii6Wu5fYxQUxr1Kykvrke",
  "key4": "5rTgVzYiyetiBuKeJEJFyGKPNC3rdDRywortmfTCtDDYh5JAAn35qZoWDpBxpyh1a6C9UkDB2PfGDvRXVKRoBfit",
  "key5": "3HqGx6Kiky8Pz8CCu9Gs7nGUuKFRuri3KDPcnX1YKQm7oCefVyf116JSzTf55hTp8cEDunnuEBtgiSYQanQLVawG",
  "key6": "3Ea9dXggA67iSGrC5TYrJc1igxcxPz6dhgd4jGq6q1pxmBoXQ4kVP3hewUvgkb6Pnd2qZVsLWvExqTdXoZS1JTR7",
  "key7": "5K1j423CZEiptqvGnemUpZaDUsHGbnnUQVRXrsCrDYoGE52HMfbBA4hCVRaAjx76DfpZpeJcY86kvsPkRJvarng7",
  "key8": "2zoBgQXXEnTEJyJsf9NxGyPwvEfGDSAECkKwbKUtHnFt4WMYpXoyX27S4Z8MPy1seSE5Ye1Y8BHEviSgiBtktsvP",
  "key9": "5ubwn9otinmEDHMcMjoJzGTEK2tKHJYvV2VPfUDPy7pEjZN7xnek3PHTUjFYWHMQazAVov5kf1HeRK9x4RSAm6D7",
  "key10": "27VePXb6FZeaLxLNCqpyd5v3n7DhFnx9qZTqtRMiSUWyBAc2aQRQFd8MSJHX15xMcVgkhUusChDHttsocmQ6JSqj",
  "key11": "4vbmC3yaFLVbdtsPyb6GbLvoKuJ2w4ZSfqmbhuo6qGcbZawQhiQXPHMuh4DAo8HqKqrdwhM3LmetEYBDtwLw3KVf",
  "key12": "2rPNMuRUd6Huf8BDeNiELfTc17nj8k3S3BSsqACfvxoboeUHkytGAhLcJKmcvSAVDG7HrFKiZtKVfmb3E33ZSHbW",
  "key13": "5QoVK1TaKxA1bjQyqNkKAwdFrdw9L9hDcr2dQWmnpsY11nYuuBJGGeteYCm9AzYCUY6bwer2UF5Yfr9YVZS9gqux",
  "key14": "3R6teBHdq3AvZKuXEz9dnpFGBik5gyPwUJhLmMk9fMta6CQ1YPMvu8tM7rzAVGLiyoAdcn2vcKYaVG7QpZPpgsBq",
  "key15": "L2wPMk7X7iq6FjaFQbjzAwbUPJdo8vAm8S7vze93Anodd4aEe8ZyHdVyi87EvoxbBjz3MHVTNPCvNDUndMJACZB",
  "key16": "4qZEsN4YoXMbr34SJokycaxsF7a9C1PEikUnbGE58agPCnaAkDmRKT85FwSMm9jjv8yXd3tSThkxrQt1DthCXNVD",
  "key17": "3PymRoBRHnqttTufWmRX4ETpYy1sHeFa7SJq7M7C4kdjt4GyQB2FdZQT8Q2BR3LFvXigP4nZ8iYqyzUSXwXSLea3",
  "key18": "84jghm2zJvZ9pjSgjLbS7ck1VWRkS5BAo1hARNW3FAzrGbUeZ1UtGgcf1SEiF4TKmiH3rHGtdZ5JLVSGtXbZ27g",
  "key19": "4mw73v3hnNwnqc8yYGqimsZavAgHr3DiAvKPtSQNmTubEB7KUb4V5rXEv6WJbmdLXm1zA334nDxbcdjs4r8YhQcs",
  "key20": "33yCekSZnpC6MW7eAdR7BpyCydxtr2WvAwADVWhGohwQhNRTyLtEKsNibwyvdbTJKfQ1cGVzNrSb9r86vX6d1hFd",
  "key21": "aMoZzvR2P6kqZpdLwqWuqw2rGpNorShVteBM8iUDxLuVx3W2eoRUABudg6VHtq4uXtehPeHeLZ5yBrDxbasGquT",
  "key22": "5oxSkQHovALh5Scm27oPf9EkYwGxMm1Rgk8rNUB6YVesxockfFdK9ndHjeSpixBMB18SeVnU325FuDXGwdyg6sgj",
  "key23": "2bmpD2DXcc7yvov5CbvZ8DyjpQcnENLb5wuNx55WGpsEJdbFMrkh8rLcSjAAGHf5jQH2smC7dqTkKxtxWZPWubbS",
  "key24": "4wkuFVHhLWV2rG5wNjBevTWvEG7MEzzrgEdyS1JVB4qgNmqDa4RLchtoy9UpWTKejTHh9TQ7SwCv7R1kK7jxJ2b9",
  "key25": "5Kc54XPFx7denxbmngpcm132AT4JrNx1ms2WnFmbWgnxPvohPfdPzGbQBsxz5xMPkN2dix8C6iKP2Df1q3xXyQUG",
  "key26": "49VuDbqRFAcUXza5Ar7h2SmDp3m4YbGhmUJaWM9BhFLpPzB1VjUxABtATg6uS25TqCcYqBJSCXy3Ba4EsRw4aEk6",
  "key27": "3PvoY54Qtwt6F7E7wbYHCtVvGZ2Rt5ndbBCNDuqaznyWJDGnBni9y1Ufg8KS4qP8YTv1Zs88n5F51Z31hDaeR4bD",
  "key28": "5pZEwmZeESQDTf5GYt4dq6V76DmQKSLwfmTYDoV4TL9Xy4HoEBpjciuoEKBm2wy2iDUZvLcLShhGHUqiAmGdB2PX",
  "key29": "4wxCfu7svGy7BwqjE8CpDSPK9iPBeazLSd5UM91qzk2tbCSVvp211389s5m5kwDsf2NFxsq8sronyx4jp5wMEvLR",
  "key30": "3j2W7qGrY5oTcudQiNJ4af2HiyVG3Ep54A8YrMTd3mXgSpjbHe3u7Cid8bxm6QTXGHau99LJ4JhDDVuAMM9FKvf8",
  "key31": "a3r6QV7ZjuP4ZbFZmHEdfp7nLHd2dppD1fh1RCPKLEtut1sBRAqucdmoDTpWciJ1pj5q3VqeGd8je3VMXmFbHmC",
  "key32": "ZxWUYWPtGSK6cQyLiA83DGh8RUaJT69PFv23RPMEznXDyVLcaHYbUcNQxCXjj9GddbkcDNdmbXBC718NprVoBwX",
  "key33": "2efQwd5bg5PCHFmr66DjyNcBXMahfyucDuVsni3Wsu8uoxuTEhPQGQQ1h1DS6qasMZHCrHKuk4ECWD1f19Zh8mVc",
  "key34": "2RUZkLtcHsscPTJ8UaGKsm8iaV24FAoLURhzhArLgwavt1Zg32d5BA4SDrfGaVqF3iCCM8fVsJZYSMde1TLeazzy",
  "key35": "2sho4J5SMJAPp4qDkA9u4jA7FebnQhGgjh1EaMdi7ypKKdskj4jQQhaRSHVU2QQGVTwdCcL2Q94A7uJDHhK3Ve3a",
  "key36": "2X1zF3ioZ4YGyeJVc1PgFnL2auCKmGSrrPRAA6te7K51RMBbfQaSTQHtDP83CixsbRyvXi6apwTdN1LWknG3c22W",
  "key37": "gUmeBxYH6SJYqtYyFTXkN87JNb1xt5uGXeYXxh5XrQpagn6MN7eoecN8KFwLWaD3QM944txrGAhk4TuJeKUhtv1",
  "key38": "exFBBZaCzNtuhSxDXjnqoWaXn8ued7vqXP7Tvm5fUjKV7fFi7BPKedk7qKnDNjLyJCH9z63reyyne31UgABmMHk",
  "key39": "4hDmBmPfCeg74HBZnCZgqppmg4j4EoLAgbWRvHrijd6NNdNopNjCBZBwZHB7gWa6FGjCM5RxUwW67sjzqte9bKy4",
  "key40": "299TcUxMLsC4MKAcnN2mdiYDX1AV73sDe8sLFxxAZbsxe6yXyUMDcHLHaLpqyG6xzTS6uiPLrCJxNY98maTHzKLC",
  "key41": "2tC4fQZienJ67hCGFKzXbTshaFYaGJ8TFSzJ9cxFuTnhxwXLnx2CMzBAfQm1rw3qYkzCiybG75jnwjqTxcEGKR3e",
  "key42": "5YRbbQEPP7dTho8G4p6hUhrEyjiy9hKdXbhfKrfdG8FhkNbb1pep7B7nhCHgJuCQ1YTXJLJ7NgRm6KQFuKVqsa5s",
  "key43": "4aPJ2sofTdQBbyrYhQ2cNWrwyfZin8TP6HvK4fGzAu3D45wE92PWEoEqzr1AZK1z3ND6J3W1AfXaxM8DB9K3vxse",
  "key44": "5KYWvoQ3UqA3rrXkCWnxkvp6nn5HHyDMyt8CXdUPjQinHAeWpicRn3Xp6gNYhirmwpzxyxMnnD24hSSFtY2axzhM"
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
