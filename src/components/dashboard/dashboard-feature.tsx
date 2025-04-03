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
    "EhXEESymogsYozfGSbzr6oZ9hnXRi1ZVM3Lod4D1Zed7UL2dtmV5MmxNw5GU1os1dgYeuRbZamPwxyWeHtdpdHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SbPkQEngN3WqfYHtFjyn17F25NAeksMaGkUg7iAFR2T7uAdJNVz5r5XfrSCZS4fVtKhRL6v2oAcbgBTy1RRNCME",
  "key1": "38SoEA9dDCCo1LN9RwfzopFGcdkB4CF7VdsiFyczHs6mkTRReqmFRQGPFH3sL1fwjKNYWDSVj91T6AKZdUdfueC1",
  "key2": "2ag8aLNreytvEhP3tWmkcVnfUopCK6Quwy5pgxKJAUXihWWSnKemSbVR2AVtu397MtG71t19iEnTNbgrZ89jkNms",
  "key3": "cKM9GXzuNtpKCZMAzwKKBi3hsun289QbkhDa561f86b6tNmQZsxNV3Cm9yW61HxPc17h4iLuHZJBg9AiRXLEnhr",
  "key4": "2NCr5gq547cweAVrcMKuc3vqHJJmFzTMtpubnDhD5db9GnyNq5qWfrjojTjUzGwBMKD6YiBNu8m8Jv13R5CxeEi4",
  "key5": "634uU25QKsDmiUfyAzCU6Gc4eJZVmmFjWRfiPHM2i1YchTsKCJ3CdLM6P4A265VKNixUr1Nyo4ZjuAB3CQhd3wCo",
  "key6": "2SMCPkDvZUNyXLCPXUuPogrTJJG45yDLTNmyYB7syNRskyT6QooQNVb64toXzMrnLnEbodvJcmQNCkw1k4CYB4hp",
  "key7": "5Z1sZP6AgPKZZGH3r9cdSB3P6roEiXFbEDYcekQhMWCdaKXjDyWA6SMT5zdJYjDq4kxT1s8wLWCmTXr5esmJvAkr",
  "key8": "48uS5raw8wSwY5kYT3rMbE3cmXoNrDihs1pnac9ADo3bSVKdE8qACX6T6HhzMVi16oEZtESpiPL5kzCZKzjPpZfm",
  "key9": "2a1HC5DEKwtkpa5MKh39fRX7wFPvaSYeT1aNSZvBab1ycd2puXegNKcvkXDkq1TVJ6TDAb47kFvWqACG1z6uWLsb",
  "key10": "4hqDWidXd5haQgyYXpJv4Kd1i1bMLcxB9suGcX7NdZuB18sc5fz1VBNvwmZ564aNHtKXop5PtAn2tyBbgriNK5nL",
  "key11": "4gsRC6HoRuK7NqK4rp7EHK8yFhdhDmpx6ytmWyR1x1BZQE36QGJ1RgWR2WauHMfs7NdWStMvQk41dxjcxugfMqzv",
  "key12": "4tTTqHre9KEdY9KLk6MhXv7zRcnrUhxd4a7JjXG47VmPxbdjiTRxbkztncAXv18R1K4e6rtuVwo35qs34kBLzELA",
  "key13": "4reSyCvmWv1huiit812cZwreLBDXQUH1YWPRRSWvSAcb3H6WT22XCS14CMZuv7h4mNXmjrPAFZLeTB7Evd2nRFtA",
  "key14": "3jpa18ATB5BW7ZUjGBbcsFkp2qoMgyGF1nPhLiNm2q6XXKBDpfMCUiNRDDAWKiNNvCBifMiiu9hSyzHcCrPXStho",
  "key15": "2PHYpTvnBR4dVFrBXLjmjGLfEkddTVtmXa7cMDahoU2To3VxDmHDJffHYgzzZuA3M1CvjxWddCQMna1huMY3pXk7",
  "key16": "2dXy7MA4S2ihRb9qKtmEffajaAZUQYafy4zyMqfVA3qkYbvDWjebopGKXHx8qUkh1w9orsnMge6ZvZ2wWByX4UBn",
  "key17": "qMFdXNTBTcmUeQhZEMR16fcyq6pEM8hMnZqSak7gM2Twbj3ssnAb2aVhsfJACXw3uTVmyYbue9B5R8H6dTqk7KP",
  "key18": "388jTg6hGhCcEbC1ptRro6RchXR2CCPUn81siMNBKqAiNE6Kq1cEJFqwG5LXyfq2zTz7d56u6LvTkTShrjsu4G17",
  "key19": "2Bp3m5xY8EmLSSe7QynZMjtTEGehJ31HRHFPS4gySSC8gXpqn4w5xREYonyUxaM1JQ3ceX2dfrK4e1Dg9AHurhDc",
  "key20": "PUQuJxKAcMwEmjZ79sU7Ne9Cfdz3Ugjpus4XUSnv1ofnZj3VeA2LHpGBQrkwdaVthBVSXikhrsXCqDSSvSsvrgo",
  "key21": "4znmCxMoNy8zVTmJToSozdE8F4nZ4ukQDTjrCWBfvJxwwyFjHVy9ufdxNiimAC9vs29xH3wkHFPoGPvZgKofNUwe",
  "key22": "qtSDeQXf95RpUiuexSrwpQJ23tqpTKN7b5jdjZbQyw8WPs4rxyuk2itRzs7oUvtHDeuBahs5thDMAHRLo7zZy45",
  "key23": "3a3bu1nanfVCMen588mm4gRh1azZTR1CUkjQWnDAM5aWcMHQj2RtmDobq5JEcmsdzzuASLDeVzAmoQAT8Bh9XSR6",
  "key24": "TNpL9iujRY7LCbbzJwBBqk77MSka6iYbfxDvgYnUXnCe4xB7qdUWwrMa1LVD3AdE52sDZokHFB66HZhTuq6NgQm",
  "key25": "3VCGBQbCQxhYW7opBaUKV6sqXce2QpNgLbUESWTphxaErictKrTGRtvjJBwj5E1yT2Rnj9m8rBWjEKtDuBRsM8gE",
  "key26": "3at6DRMGqsHA8pX74CyVag4UjyrXBqeoX1TNYk4MekUEkpQRtZWZpXVkHv3xsp4Nv4GVTPWoAKhXBLe7GFjQHWVW",
  "key27": "3RJnAUzAYp5hzQiNijZAkuEeYLNsLauskEex5WeWasmULPw88yMgx9M1sh7zCShB4Pw7pa7YMpS9iJ3bULACyBHb",
  "key28": "4zuucoCsUa4a1eWBxyfYnP7Pv5gEDSHgtSKMRpqCaaizMQK7oivqf1LGfyA6GjuQY2uPeVMYr5DPjtfp6ZZXP9fr",
  "key29": "Q4pBZSjqW92xrwDhv2sUFdgSKtV1biUbvacnrTFbDyN8GRZQmvxFz2m6FSqh2Kqr3uGUMzbsEV2GFXhyxKLLHyu",
  "key30": "2F8rZofWh78aN5pT1BpWYkDva29t84HVLwxyURVbQe4kGj99zaQdpwt5e9mZxvqweHErfPvYNDehwv91hvzAxJmN",
  "key31": "7kLbLrKnWSmLNQAXgt1cPoxvCUHefFxGpYaKMw5semEiy338y3as8XXU8qCYGP9AZEjYMNfwRbyT7TySm68Xc8G",
  "key32": "2vTRF7w6DApiFrHeRF1GFV8FjuqERyPFTHiqyVCcdjZQxVBaubfbhrv4PPzEfC53VCFWsR65NiydosJCuEfR2M1h",
  "key33": "41K5chtuKVA1UihzpqPp5TDdXwkjGYWBoE4pPpbcEJicKYD7Hicr3vHmm8KZnH3S3w7wVaARrDs1ajYikniEGxZ6",
  "key34": "HvL82dj8y1nztQSajxc61s4Wuh4hF1Mqb4QoHVh7oXRbaA6J5kVgM4t6D7LjmdJNhCg3p8toKxsQfuoXxgGiGg3",
  "key35": "cHFCXGFihs5gbhzrajnXknHbV6rAkDybJvPZEDYkEi2qTfhqet5QyozYc1dUGNfs9xaDqjwQEw7Fk36uXzvxZt4",
  "key36": "652c8guWvVpfjASJsK8CyquoijQCPsBHF3irfn5eHL7DNrUQjzGHu1pT7XbjD2wYxotJwRRzVy58EE4i9BxKixAY",
  "key37": "5M2H4VVm1U6pbqokkVaR7C9Jj4GaYg6mBRzTnKXTRHtnY3BAXjXmYjohPmoKG9iM2xHzkmNDHfHoYJLPc2ZGDJpz",
  "key38": "3UDNWAybu8fUAn2BzyFV3xDB6r49BnyZFiK3GbYuK9yQgJmnEv6e7acjTx5n3tHJ8iebsYsEN5EZSESMBiHXqY6y",
  "key39": "47HX4ExVrfSmVjYxuZTkTJeUrcPkR7Lhx3w6FMunW5BMFZ4RAL8jmcg9ueRMStfo6jSacRBnaDSLMP4g4HXbhutq"
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
