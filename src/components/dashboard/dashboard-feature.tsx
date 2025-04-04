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
    "4DEbpHRkLwKaPyKSs2MGJFos17GGsafn2xpyC89QXumHXtYtPu1p7mamFhFwrVomF67DDR7U9noNY2NHGE1jxEP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217MQfPgHCzYid2eGqfh9rZbtRsVP7W38itZdZ1wi2ozbhrqg6uttXE7668cK46fTJLnnjbqBko2SHhHzwsin7BN",
  "key1": "gnK22FZj8nQYLghPE9YbnaQXvkDw1H4JbAV3cvnMbp6H5A9QVezcyVVK2RMmrYq7LxgzfSAGoWqjM2bSJYFKfym",
  "key2": "46SLgiidG5JFWYPt2WTWEWMvJRadZsWF8Qiq35dH3VF3AF1EcR1R2VzKQe3JLVMqaiLLo3Q86EQZGnq6FdYEWsgD",
  "key3": "36jLoF9qFPRkZ8fHHcxRCmRctoZJPSNmnJ3GbBdocpnPUAGwBBoUFYYVCqis4HesKKgHK9T9bHZ43cmgdWkFUiyx",
  "key4": "5B7K9DHboLBz8ZSjriqdJxFvEvYqdYnN8XtzYxxYdqAm69pdSF7EKcYackMtPZ8GUvyHunj6mGwscHjoN4qDQzAc",
  "key5": "5J34wEDANFpQc9bf2LHtdR4KwqgKHzXNvms6wN1GDAtZYPtNvmUoVQEhS8PMFwRWBz1xVzorgZeNFotbBA7eWy5N",
  "key6": "5Ncaj8vT8QRwd2cB7X9eE9BXpTr3KsPBqhwR3s5KsS71TDQjPcbozSQGRUB5Zf76sbDMugG1iNx2DkYzZnq6VhWk",
  "key7": "5DxuoBad5HUrTLS1zop7cT8YcqCzdyAgKHPiDV8ZUzicJjQ4SsUPv89WBC4SmGqcp7qTkFBM3sRh4RxENdAZaDHV",
  "key8": "5iUhhc8YGcUrjtqvwe9Co9QYTN17RZwn7Lj6twrdi2pQ61kz2W5iTWs8SWM7nTt8VhQsFevPo1PqMvGJgmphkMKW",
  "key9": "55Nu6yGw7wZh5bZXb2GrggzygmYXpuFJvFVpoSXTPSfWRJypyxiAtJWBUUqaHp9Kkk9RUxKrqNNq8ZZGixsnqoA2",
  "key10": "4fSJbLrkY41EHv49Xa5EyViDvzJYtDET19o87n23TanxF7S5DaTr9gyoKjZUy5vvowPa2A9p6h5JEMFED56aC8ne",
  "key11": "2evSQUgfLmbkGRVTYBpXhcMHaH8i3MpRQLvepmrf5sMrzTZgLcu2oD4VfVxhn8bhxRe9BkMBYPU81rEakAJnvq19",
  "key12": "5G8kWW3Ad4jjuTGWoDmz9hcqiHxVQuRdiFo7CfXuWH3PepZY97FaHtX8qxe9y5yiQccxEffabSMXVWZvjRZLBkM8",
  "key13": "KbeXMG44N5j1dYUSv8R7gfMKKg6bacTRW5cx9yGAPhepiEi4kUPQN66HwkdRyH4Chx73GDBYJ6HRtXXrcQErUuF",
  "key14": "4Bycs3RzKwjsm5ydGjkA75KofG8V8Z72j179kKZCoPdQGXKdpj5pmM2oQTfC3EXvKFt3p9Exur9XUk75aumhnzpH",
  "key15": "4b47C3LzJe4R7K7PnguSABTDrispuJHDx6dBRzopedy9aeYELT7J3ac8Exj5SjNFs3T6mc2KcFzmusQDVL9YkMRK",
  "key16": "cfHouzc3vAYRiQ1o2eqY5DPvwd6HNmvj6cE67Sn4Gd5LvJVi8HiosRsJyVAR7f4YbybzBvkU2A2Gvb3xadAzBnA",
  "key17": "4K4qwa1oZ48TBwH8paotQWa2KFfdPoVKhcAEnWzUg12ZgBvHWwWhefQLEzGK9A8CS69CQ9RKMu31Awc2poEWzpi2",
  "key18": "2XdvCany5y39QFdXhzcWBiN5NtHqwKQeBWsEX7ywvHSE3bXrSBCWij4iR3p9AKHA6Nc5UhvMNaf8tZLcXHBKZKBE",
  "key19": "2XTLXreZM1wUuYipmxUdGhcyHFgUk5vXcNq998k8XprH9Z2zCPNKNoYSAh1R2ds9kq1Tdk3oqngLbEXuagKCQwZT",
  "key20": "2DSA2d4KEqiQduyd6VhhUFvEg1ZnxrReyQtG6pfCPd6T6XiUriyHbTN5vb7GbQtnUfjbNJhZLAhw1btQH3GRTMS",
  "key21": "58SmFy5KWf35wjod7rQZEeEfm2jedJB6pwA5BduPykpap8fUfZmjAs61xhAaTTLT829F5QVgANfp1eRoYC6fSRRv",
  "key22": "4bp3Y3WCiAq2jRQpLCb84qppBLy5Nk5RXwYkUTjSoRK6mhYRJWuckzkVXghSb2aAFxdoLCaEpjDqSFkzftA3vrxi",
  "key23": "33fwYTyeN43E4ygTb4F7nwMHFQf4apf2ZjuZcNkwwiVZ2jnYZ3DpG3516uJkBYczpgUSgxqSp95eXAK2NtWFFzGf",
  "key24": "5tme5Wc2ierMDdPSGjv77aj3c5jU957en6uxnca9oQVaSJfsPFpNTUyyvukdeuDCvyKzM6U7NCHptmJHjKE5kEbP",
  "key25": "2uPFxrtLwY8zBwLYnnferpUze37GPTszA5qZ4XptrP8HH9244jZkY1NeeNxqSPxEGTkDqkTWvJVRwPKFz9cFkKvE",
  "key26": "39pLjpPSwHUDbZkDXXh3jZTp7mgvDFXbEv8BXDTHyYEWkmcUVzduiU6GqMYdyhtWD4sUbckVLW4wPGdY336f9tDN",
  "key27": "q9Kde8ZpGDoHwtob2Ma9fWdsZcbLCCTXwXMq7h6qxUECd7MrEoUJttEPpDHG4yc5dNmLpFRpGcFDZm7Uj4dcTNP",
  "key28": "4hVmJGKaJePiaqFESiVyARmUpyi7qLDXiJAxf5DvPJpd8y1YzLDoM34bo9cLHpnm4vybbGWpNKdFFmRycdf38bPx",
  "key29": "48yfvo4VWh1c2bHVrxhyvo7r672Wx9mhNHBeEAugBzed1btfjQocLLZwXTpLwoV5T5ray4qzUoPLNx6SSyGyCym5",
  "key30": "3ApFC1DbDheJPxoBnftgHzmJjUQ8tLEjeMRZfTYSgAGqkaYHJpWXEg8wVKb7tegijpxPPm7ifEfwMQAoN4zF2oEa",
  "key31": "5MRT38DDMihHA6tZ8qnfWFB65oNer2tuLaCrXtcMYuD2CysVJbwo9Yz4avWLNG1RN5TVNGi4W1utaaVepqZTeYU3",
  "key32": "2CsWvwDYycV8WVaUFPNEuEKiF4NHfgJ4MZkrLSGzisnNzxUeVAqvLqrvfdsXCgwcG8VMCwP8ywbHQUNGvDLDjw3Q",
  "key33": "43bLdqi3qKa9bzbooNhcDpYXCvdDVdsfFTfbmZFGYPPf2vXbsyttDgV6pycnbqJaVrAP9DHKwEQht9Ds4rvcnHDb",
  "key34": "35m5LfryRjBpZgCnp2RXgTMjLDgwvPTmvfM4jyVr3tndvoeN3ty35XnUcgF2F7qb1qqBqDB5tKTrp98RgHznoyXi",
  "key35": "3EifJXrPECZjeeKF8366oewh9RW9dAqtagxYio5iqf5mLESUjm7GWqNUz3nxqnezS4roSqdsBhuvemeJVZk3upZj",
  "key36": "34B6EK34mKW5CEko6hP9v1xdTgsfrZes18LKi6WqpuZnB2orvDQG5CB22JfWGpj9MTqm5p2HUGNwavkEc1dyjYxF",
  "key37": "5Kg343qSVq6VbP1JyhrQcbyPgBQiumpdhaPiBzLUfxh1mZEbv8BtusnkLddt2J6NknFjbJVPhu46wu75PxSyFB1p",
  "key38": "21nWDnjeeGVksfUhZmMXmDEwDqREKr8LTPHnnkmZshCvDL3HpC8MBcw7MKS6wja38KaxPzy1WggWLnkXdu2vQtPP",
  "key39": "2wchYrJDSoTRiZifLhJY1JWVSw5VpaWRqqQWdWatH5C3TV5DBCCWiw6GCD1MF3VqPhvSTLLXY3eDivUToLASkxMY",
  "key40": "vxujgFXKQw7BEp8FNqcwp6ioN99cc64YkTYHpj83z9c6omMrAK1Hx6tvpviHSdHBeXdd6j6pNMp3umrrLLFwW4y",
  "key41": "468dKdtVbM5sWdSQ2zsZy9f2VWDXy4YEzsrFKdTNvacHWwVF6nALyz7McheYrswkCpue6bazskJAhYm9SQgpsU1c",
  "key42": "4GUJAAaUKn9ZZPmxxnKeTSztqmcPpoVutd7i1iEn2xvMEfYgcDzrAjH3wdWhtxtRgHghbywtGHPDSoG3tt7xC3Ue",
  "key43": "nEd3SpFgnYc2WX2meRA76kGPS1G4H5gp3b7muH3yc3ZbDcb9koJm2n2ZZEzbYLyiG2J1KrGGcau76TxUkgWCf3Q",
  "key44": "31RgqsbQbjtWxh3A2NRAbtjMKMcw5jvEWWnkDPJWZiq88Gs1U5aXJt4AbtQyGdLMTbhK1ZbRaHvMbv44Afna1Gtq",
  "key45": "5ZAV4idLprR5UjhqiijZRMfQUu7MRrgBS4yf1AsPM1umNvMPzSGzfBmh8K8SQ83Dya1Kt1qRKiAbsbUBHDvYKPJf"
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
