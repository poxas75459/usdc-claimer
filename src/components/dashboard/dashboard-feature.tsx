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
    "hZkvegghQngZGA6KvFNAJYCxbfZ21Eia5BjxKF9WDt43iKyjyckaa91R6Xc9hTDuco6ZNKXb8GREAFXzTt2oLu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQGqau8NpjMkaPKpZpwZxHQmirXRb73nfyQxbhCMLqh4kST7dGF3EKRgjg4qLjJemtgggG1NGQhMP7c2HKCfyHM",
  "key1": "4HrBZuYx4NMf47DEMrAfTbQNHqM4gB7zK9YYqhg67mLhkx8UAdFwmAB3E95jEYVid6XxmAbotSqBHE8vFBLdCFL8",
  "key2": "5FcVwVt5sfs9wDDsV2A4jUzAr8nrd4zFYUGUGJRCZfZtTJ5qVjE5iWd8F9EB3MgL9UHsWgKJGZeJF7xf8SsrYG38",
  "key3": "5ggskaJLY5fo7wtHFdhYo19Qbb3uMJB7cUJ5jmex8b4woTN5ampT9zKQq3xFhy65KTjdAsJhKDSVo8k83JaoFcvd",
  "key4": "4ELBwdN9tkxPhzL8QUHM1EnrQKGHCbzB2tT5KowrVP5QpBBrfqEC6fJf1UrxuHn9QKrTnSF3wMX4dg3wTki54tj9",
  "key5": "3qTG9sgSp8xbEapPiiLWp3NHmbR17ro8RTM96VPJ6rt9PhysxoWrRfV1oSMig8ghGkgahTJngYemZkktsvF6sEoV",
  "key6": "5dJHVfJNjhTV6U4g6nbMscibSXpdsgxkBhhbQJgAYfLzwqjBvLNM8txfm5mHJ7739h3bM6WjpnigmxB97wAjfdVX",
  "key7": "ABXEiJ6s1TAZX1UTy1cmxMqHkYBBuoMztGZcGugK9Y9RutQhTh8UBQ3WpyzywHSgcdKLDH683A6XN2ZMFQn7LJB",
  "key8": "3PnxnFCYEBM6Dh5MazjPrzbZ7ubwZDS3WZZzC2Dm1qKf5XssZ44vVGFAyurN52k8u8eppTDN1ajaFW6vqm5g2Fi4",
  "key9": "437RJMfZUivcsEkqarDFh6VnYYh6dHpWAPFDNTCjfxirL3PjMqCX1G6riadRJ3jMYJMXCTQpHs8psMbGKNuudE38",
  "key10": "2ujiC72P7Xk7yrJRmLAVpsaw1NVPDnzWtFCGoiwTQmRwx7uVeReRPhE1tyb7qLx7ZWBe4aREmRRULLpqFTeTGsuv",
  "key11": "5r8WNS9ztHsvPSBDo3hwjBszeC9QeHYsHkFc1CFnWCRKSFRpopLwbDXm5Qt7YrspjhF7jroAVKM7pksKr6ZLuEEU",
  "key12": "3TD278a4vQWXvjbdm1eHdjGLpGhYSQQf5TL8kyZTuC4K3RM7iv36eMC6GL6rpKtNBaTEaA7TnJmW2gZEGwCDgrZi",
  "key13": "5NBtSkLRt3Y6U46CuVPUz6dWpLgw3YwiCn8eQCNE5k7oxoH7bxdvG3TQT18RsBsxiK8B83CskzLpv7rgzB1bdR8M",
  "key14": "56upXL1QbaPqFYHPBdpo4rrmFKuzSWcPiL8knxT2AxZEk6B4RXe2KPmi49MjdAQFbRod4bQ4gzPFLHg3GMaJ3gey",
  "key15": "RSsukb6sbLSeT2yThPgaKRLtTpRnnGii1SmSzLyDA4FpXuyFJXy1P1fi6FRLRwxGgGzxKSs6dhdY8dECivhmBBF",
  "key16": "4voUSTBdf9FNAN7Xss4wxbuNu4gfWESoNkV27s2nsVaGW1yWX5W7z67aV69uMxMWwVxR8JWmWsHEcj1XJTMaKuxD",
  "key17": "4QqRRKjoC86s5TTcYbZB41q6iWJqJN4cEbmWE9vBagjEhWmGsJuh9NotH6asTHovhNrHqfYAWo3rFPc9j9J8rKsJ",
  "key18": "2aWWa2mF8YGSiggxmtqYYPz8UsYyyPSxydiwGvkZPfNqqxkEj8f1pQsVZtoJorFX9JitUztsjiGKJRr1A3vk27Tt",
  "key19": "4suV5JdCmtexWGGLfbrZ9GN8Yg7eVbms98KdAHZKWu3jCP7BEBwYv1ikcZMgbE478k7StcbnAYnB38J3LX6pT7sL",
  "key20": "33CbAH5kuXEXnAoctvh2F2SpV3CzvKcUgCe4r7PVowVrQjxzWwg6emhdc1qSt1X8hwqfi3Pte6TAMjeJ11MDzkFE",
  "key21": "3w3brtRJv8Uyqexb9nTV5qm4NQaVwGh4szGtterZdNPNr1PF2c5DrNK3qdc5LNgTAS3bcymkCkoafuThnH2tPQG6",
  "key22": "WddeeX4dV9uFbV81X32KmptVkeUNTc2JPSS34py8NASs7kJ2CAzE6UaJkACVhNsbwUmzK2ehCbbY8QSmQw7UF8v",
  "key23": "3M2LKWyb9WLRFbrR9R7wpRRC4dNR9EGopzBooDw2Ws3skXQdq2QrtyoAXsLqv38o6ehDHF78df2x4ku1fZLu1hUQ",
  "key24": "3pqgWcqhhWPRVnwhEEsUzwvPRd2EZAcZKMVeXkLvDn3zR5A8ioXxxx8KkRh8b1w1k7ynhpyU4aVcGiytCdu8qzSd",
  "key25": "3KPipztCiSHFmLXpZvTGYhXBTc9kcn22H6Zg4WDta7CVWcguYFQBHCsbm4jnRpoNLoDVYySTNcGCbbAXaHSvK9bS",
  "key26": "2EHZ1GRtTE82dEUwUYeV9JuonhvLQNtNJa5F5s7JScqw7s9EMwwXbBhRp9bHV82QcvDThAypREVXEe5EP2AgHLMx",
  "key27": "4waUikCnwt1A1DPPc1sdL21TJuZLVjx9EuK1vsVxfA6P3BvLRKVyknTdVf6LRdivPyR56cc1zsbyBwXQgvNXPzAH",
  "key28": "5kb4RUy46hb9y15acE1RAbjz8zLKDXpcmeaCjwwDShFJJEidtfNtEHmnBi95bDS44RTCmZvmm93uCNBMFL5xWUA3",
  "key29": "3FQxdcbLkfWkn9EY1dgPkF4t9Aa4hJE1uuHLWRcZpzYijF8MdqkiMwgDNEfuVhsHeCXEC4WAJcj6XQsncRMpYhSW",
  "key30": "5WqzK9EBKsQRYUzh2PWk32i3dvPFgR2s6EyfoZoGzTsMmv4hi6GE4BAUprVi2LiLbfVZTfPYUBcX1ffQnJD46M4m",
  "key31": "4K9douLKFH2eAcnSW4xYTQi4rBff5FZ619E1EBQTDHWg2GPqTUCpWgz6AVdDCBvEjRRrKZL9m5YWAAgjHcNSAyCF",
  "key32": "4enJm16YwgKaRASpfJYeQSpPN6cgiAuCxRcYMPnYJ8C7C4pDNkGPDEjLdw2HFAfVwZB4TkMBeJSttMoRmvnhPYp6",
  "key33": "4t8cBnhwqQAY22vhhiHgJrSueBDBE1xyv2scBNmNQ1SuPHpdw2aXotK9YZiVgoH6xmVi2W3MxjvxS3Sn9uSpgugt",
  "key34": "3gFQWXCYBVgc3ms56iVYJ7TpEkz214L9Kx6Kny2Q3sjWHTHQzrcAjWbS7h1wognKsAbPJoTjYXn98ydcyxzTXg4C",
  "key35": "5884KnTjQANGaSnkfJU8gHKCmXkz2we2SstUV3s3aQWdibSgUVhSEM1SxkugmTtsS2fqg4J6VZyA3E1WewvgkxoQ",
  "key36": "2FpmqV31VPBhGJ8CCutyQ63CstDvU5af6HmYoPtYErwDYA2owLzUFKMP3usSt1m6bj8pFcWs32qPGXzKJUBVyfnp",
  "key37": "aDafjViTSQM7ztV6SFUZBYHYnBrmEy4YiGTvhi7ocwDjMuppRZcWgkAdBqE2ZG67sFpdeV6imczKz7seEQ5b9Vv"
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
