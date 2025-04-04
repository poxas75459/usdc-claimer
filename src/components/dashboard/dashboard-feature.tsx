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
    "4TWukqUJNQf7EUFaHcW4sVWVViFzgJYJRG3mRtcNceZsJHuj6RzK3eM1hCiyXnhvnS2HXS5153tcB4DkTpkfZTr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QvFvLfhFyBEdvY3F17TmXrRKWjiJec4Ug34Ns6fc2pPRxyFHJnTD1caZfnPmjAhaWEGQac9XbbeHNFu9f4F1kU8",
  "key1": "4GdJFnodYrkUwpNJsWgrEJ8KGgrH7VtcXWvg46trgvQZBy4kqNe1QcyJ6XxEbwq4JfEaRRFLCWdJpWkWyrdEw8yy",
  "key2": "4b2cwPQ5amTfRi3YKhVhCNzKfHcoL6skiPuNS77f5bvyafFjGeaGqPwHoQTPVFVVKZ6NLnXfor9wJkRUj9dstCrN",
  "key3": "quXisL3oGsgnKJ2SLMpNisTsEJzC1idBX5bjbPss36GC7D2dgCrq4qyhTpkAn3eBmc5CkiHVbff7dYaLnzG4xv1",
  "key4": "2Y446b9xTPHcApoZ6rbAirHtDhAnNKQqsr3H6y23LjaSPwdtkRCjshfbsmWrw96swvUiW38W6DN6JP8Pyh73w4aV",
  "key5": "CkDJG2kW62Yi8jyU6kB3nuWppSyEXSK5KXcxyeiGA1eTvTfZtwpyLgSUFMa5t7cjQ8ZATntxpo7BF7NxuoxgDbP",
  "key6": "4xU9Wr8YAWtGAceuDQrhqcHD1Z6ix8RJfeEvFk13LgYTdxUUMf25yiHhtpN2JMiJbnEGZtPKPG9G5xbYbAiE7aF4",
  "key7": "3KZug8oWXoFPEAhNABTtL1R41osPemYuqUjGzLuFGo2JdrJcCpAxNktxDwuydcLLSuoNgZQHUNpioZxdepQHhb4G",
  "key8": "2tEdhQVWS8rdky5SNpLAuN5wHmKCxyRnmqNtVuA4veLgPwEGeL9aLMJgzv47PXFAfQ5si5Ycnfm6cnGD8S6YMTyG",
  "key9": "4qnBgeR4HfwoYMeWMcsyeUmPpRiaZdiLn1REyVwj9EAnJg7h5SpLngGrLjSAP9fQwAZrsdN6Lmz4BVk7SdZPfj6w",
  "key10": "MZHytJrmHFHCr9uqCEZunYafmJUYUHKPXLMZ965EZYD6Bi6p9fEA3d4spvmvj3ecab66baC2zfB62NgLGiat1DB",
  "key11": "3ddkHMnQD4r8pW4TFnjEaa6QwN1X5voCURBVauniSJLDVJDjBrcNZnH9edATbLG2qucV4a1VaJmJQaKG8xUcsDWf",
  "key12": "4BpiNdQDnrzTahsyMFL4MFepa5FiPRVsfS4omirqnXpw34HV9FEeJ5ECygxRkRoir1Xtu4KFcwNXWmFD3XmdxRLa",
  "key13": "4GYGXAb5pzafSy9JinGiuthvrDc6ZZFq44UqBs9JwfNGwNAL5bbAQx7YNaDR3SCEvaAvg6nh9hXJDs64H7FkkKA7",
  "key14": "2jPWhAzeXLGuGB8qMqedPQPVkzHytzmhCBMDQBkLPRAnMsepfJ8gYf8mUenbbMTqfYg7CheRXWQDwJDXN44uVTo8",
  "key15": "23Daaq1kkGWkMm9zgRyqKKGzmZhoPuPHf1zm1St9KFcZnSbsxyQpuUXZmSDQC4rkTebhCn83tU2Cxm49mz41iDyB",
  "key16": "3gNrbqrCcdWkkkp7NUzUBAngaKhWQq57o1bD9ovNW7DSSfroCGmjsA8Cohv41LD2Yrze773DXXuZYuWYzNv67J6h",
  "key17": "3umEETU1f8nM9zUx27gYxtVohXvjeZFP5rtEG2AMDBXKnaSvPSN51myJzLefhkiBjrUeGzdWSJrh2XTUwXSz5PNN",
  "key18": "49Wpu4VPJgwbNnUDmZo4YkQ8pJ5vbgcZuxCNDjKKupoGye9kSKrAbmUqFqdPfvZAVAMyba9wHwx2E13vU1BULFb6",
  "key19": "3jtBnQxF2v5iRe46EWRAHAfWRwNnoFdo5w8HXgQZMak52gL2hRFxjgVtJFJ3Vh2w7QqBoehVxKrTZMutp6JrV2kk",
  "key20": "fx7KkYHWx4rXeBdgqptcEEP2UcPT47et2Krw8fy4AvFFyXsPz7i49UbcefH44PP61MNqJzMvNuJvse5wEMMXUvE",
  "key21": "94V48UEZCUjvudkmzWQoDAWFB19zRAJcimkBMnYMmoWBNWGESh3QPN7cN6VJ2d4k142vbjNGFbkaWGTXLwtiPGT",
  "key22": "4Hxmb3MmbP58bxNpRLcWzU8r3hueLB8bs4i4sCaA1Ev9ePZg6vSU44iXjSxxWL2GwdntczLwVkWaipZQh63Kj6Jw",
  "key23": "4JXgzYjNTWzGkUBtcEcG3G54CbxqA65fLW1odW99okzcXr4i2fkWD6Wu5NtmkYgbn2zuxexg3bWd1n3fRjdhJS5z",
  "key24": "pFP2EebLPudd1XbDnsA6XuymuvHgCZfZiPuTmAfTKwG6Qxzy6Tbw2Gb9VYAaWBJoLpkNBqjfo7nwTk1fjuSyEq6",
  "key25": "3dJQLuAecxnwB1G9EMrz8HVe7S2YjhBH7x7VWX6oHGd948Lyv7kAGJ7Tj7JgRwtUhKqSnJQsMehUJA5uVkLX5kWP",
  "key26": "5i9ofxAVzb2kKZCPsHjpRejamiu2gerdzqjjGqedpUuZTJuuWLPp8hmq3oc6d5FtAjQ77YeaQDrZaVnAoSwq3w9T",
  "key27": "4XocegkyJjMLjWHM8URFKyUKf44P8Mk394BU4RyEC67p9HSSKWhpKeZnxkwYWcrevRDYXbr12hFpDAuyVVswJdm1",
  "key28": "2XG4fyuR3kdLP2BrEQcEd3YJxvHHkbGJFwP5GkQLtF7a26XML49B2YLBPCsekb3hTAmcnrttiTQZotXyNPjeRvLE",
  "key29": "5RTGD2BHubs7d29hGbf6nQUQCUgsKTFCqmALyVk86ToM4yG9Ftv1duVKR1ceCK6kc2yucXg2PdnvZYiPntxtD3Ed",
  "key30": "w3GerEjA4Grd3dZNCSjszxoP8pU1BzJEPYpVsQHL2NDqTNNuTLxAzU5MwmcNSYjUBuViNVKjQJALFcuJLWeu85M",
  "key31": "48KpTRU3FVxLRAZf8M6FC8v7RFs1rqkdtDSz2vbA81YhGJZq9hYf5dmSQL4YEn7iv3d86S1ZRigPUpTkrCskyVhs",
  "key32": "3cKowBw8R9zsh5SnxZZy98n8HbgQSdfmTNK3YnQb7ppE8PwsrhJ8gTNvWEKPANs2YRB4w31HZZkFe6oUsTfh1zLL",
  "key33": "4tJyGifjS4DLRWhwPKwtB9qj12ZaZVXdghj1N9G99kLWHLXqu1mXvCc9DTVjf47NTKCCdYif18w72VCg64ukP3Ws",
  "key34": "4mNAB5pm9V91CB59vYZwj47H744U215Jg3etPcUvBEmpncZfoEKiHbdjkcFiizD4jThzzZb79ytZkD8rUAZEYo77",
  "key35": "2xxAYeeZf8FBtPqgRuvhqBLMw93NM51KQQwJ7vzfszFjBsb3E7v5CWdCC43XKTjhmsFExhCfyTdrVB762JscTWFg",
  "key36": "QRo2i9w6WsgpZCSzupiH1dqjUMTaKces2RcAxzETaJUsVAWhF7neMXPpVwGoCyeP4oAchrgyN5KNrTuevyv1zh9",
  "key37": "oGyc3Q6dQtWJ315sR7gC1oyArvYUFK8VPsr6QtvSY7ZPzuRMj5nN9KLFLWeJWH66v4T4YAEBYdvexsxxceExnwV",
  "key38": "3hr5JBJfYMNoczagBHuCbfx1PCR8RAYxqrwoTjhvUDT7B4mgEsCLhyAmMnRECsGSZj6koFmJ96ZGTTkwsAk43YTs",
  "key39": "3VPxpxPkRAAcvbkZ2YTXD1yajv5vNPUvCA45BPBhd8DywnTbYbnWskNmk9tqJ5bfSVwucyAJeZF3QpFopE7C7fa7",
  "key40": "4PLP57RYshjeNxXsFZYdPusUZxEPwBszMWNMBndyV9Za8d3bCnV9VJmrrjFiH8CsX9cDeuGLwMnKSyT23ULwkgTC",
  "key41": "48gtuHBJeiHowa9tUaAZRgAGebqWDyUdsKrKY4gFsAxRK5o1UdxdGUTkh9ua5Z6fS4GxfqxSPTaEdnroWzkLw8Tk",
  "key42": "5uDozvtocurMSiD1ZBjHTcf83tQJTxdZLhLt65KKf7xsNZ1XJsXk9XYV7Q3dLEvv3a2rK9MuuKbfnm4Kqwf6LJJY",
  "key43": "4XvL7arz84QLhp6KQRFBZQAWRk9bq7MonTS85oS8N2Edc3TceayqaFbi7XGrALS8qGXC7oQUQgJwAxx8WG8MdjFV"
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
