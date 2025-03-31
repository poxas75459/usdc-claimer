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
    "d8z8UKRY2wnj2CNV4AbKzzNRWNHhPYnRLjrLgWZiufofpryUZJvwx6W4ZY6NukyoWjEx1agTKyuv73jSpC2dpJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hpLjBYeJx2FgEGBCUNJHbMibhn818yAYd2H2oqUV6yGZ7MNAxMT7tvqRkC5Xk1CAVBcYwDWKmUCiGsZT5yay2am",
  "key1": "2oB53nWgqBNjp1eD8PEBrDXqQ1dSi8UAGDJWPXGe74axsBDxCZyJAvYrWZpJQaroKwt5UrvNFgDuwSMx4vkepr6y",
  "key2": "2bhajkTuLzbG6GivapiJfNuxWsePZqERvCRqidEgZkTPPFSkU6TdCtECS8JUFjQ7iBaE53fiZSEkivwtm7KF1Nre",
  "key3": "3gvgHqST5Sx6fprpvXLLd4XJGiuGMDVneuxRQepc6LeUSE2CmHQkUyj3aeJ5TBNdhCvvELHCKoHePMqgk8gkK3K7",
  "key4": "4JXJoB6DGWczpvMwYACb4Ubsf2hqKHMnrAQmbL9tCWSKPGJ13FLwjp8ww1ukRtwaqbPWrrqBTfVEXfecpvDf6sRY",
  "key5": "29rxPRPwS2ELnciVW8RGfuMjB56ogTnBwqQMroGfSkPThkbgzwaAEgUE4wRpXEV862LnFQaSUPXDMrRoQ7KWxcUh",
  "key6": "4iZYpigSdp3BEtvRboLYFa2UegCo8FzbY2tfwQc7FkCbhwHrYSwZKHeAoiBMdQxJaJnadxUgmmfLHDSjzG7rj5QV",
  "key7": "2ztvcJf2AHW98pQi3HmWUbsB4hhm2MLvp7Rgec3ThaLSTwqFoQjxXftt4PKbBv6H1KK4h9vTdYyBUY2JgH3WP7tK",
  "key8": "4THQ6kV5pwrzSBqNvvpPSChVKQZK8ZNkozFhUXmPoV8okoNf3u1tFxRMpYNmp75RvEqKhDaqe7jkV86Fk4LZSdbE",
  "key9": "3hjPWH9S4Wky1jcnczKaYfxnPVTfrHB1Eue4ShynbwBEib9zZiYdrdv3aZZNXaUxFoXvhQN3aih1PujjjGPamUZV",
  "key10": "z6uXxVJ85SZz2PQXLr4yDbJ49PsEvY6LgZmvv1RAHmVeCif9PGC8q63nqPDNf4YNrYVjaDqxfaU53GL6f3a5Pb3",
  "key11": "45wfrVNrvBEvgftPkCM1X9QBkvbtRakrMxCLTh8q6gQRt4Zh4cfFWAGdC9gcrGwMEUJEWTCbA7pzcu4i9nh1zwCk",
  "key12": "26PUpnSVg78vRwi66cGKtjm4yYADpJHcEs6SPd5CT2XXy9v6xgn5V9MXwztioouEQYXzn4HhnGzMHKvvD6SkJNec",
  "key13": "3U9wymMRizRHjkRzc4bCGvGBrMnkG65WmWqzeH11TCLzYkCjWpVK7TXSQ6DWMCkdrx1nqRztNT6vVKX1GsVf5Lt6",
  "key14": "xRbPp9YHXPPgAt958AgynQWruC3BQrffeFFs5rWzbyYXB93LjACX6fEB8GMHtEhfRggQjyB85UL1jCLP8NdLyQn",
  "key15": "2bCgWJGKECMtXsEDbSyfjD6dPa9ZP16ZqfALnFuKUJqRozNmaJ7qeBA1XULgp7wQA4Qtn278FGnuMrgqWQQoRh9Z",
  "key16": "5e72JwwZBk2wdDWCTr9UrCo851y4TGGszVg93Ub4ky2wt1oEmrq2oLJR4BDxNP565W8CPXaU8UTftCmw6mJ7b7oP",
  "key17": "5siToPJCkTCFCUJNQWWgw6n3PjNCTa5sYzLFcKtNueMGMdG25cVpZMnB4vM1UvtLVH1CMScjf8jL7s6M4aSxpP2z",
  "key18": "3cz31zquyNJXsBQYeS29v3G73Ss3ZDA3aq67wMAp2Cb7iqM7VUbWypQWkRrW77krJhbaLNDYF1Zvwe1xGBYgHXrf",
  "key19": "qrjvJfy8bcJ2HvEk9toWEr2RcRxVva78DP5PBC6EgZ32uGthwU6jKM5zksY7vQVSUXVzLgxNiLB1hjvVfZ9Azzr",
  "key20": "RXPXeJTb86wfCsVxYGR1nNwMNSCB2Dh49p1SCvewcpVeYhenxo3B7sMBGpyN45MBKNn5e2T3rneziTXqQJ9qp8E",
  "key21": "3ce1RTqv5L2Yg4M1fGL2NnjtKAjt64kTbfTWy8pFg146wagLB9ChzKRf2M99yeZjhpvUHqsWTLS25yG4qZu8oaim",
  "key22": "4tMTESSXESN5yN58kG8Jw7vWFXkFu4VxJzsg2N4Sej4Fk6QiFdprXVFNJLhJxpwqGBxaxM2aVm4zkXcZ1AwA2BMQ",
  "key23": "5sX5ziW5kdLa67L4R2ofUWc4LwM27yrVmP7BTqzM56qxsVN2fwv12sMWPKfEzgunDd2CPzZ4ygFVUueBMtKDPGNu",
  "key24": "4xicCUiAgxhNR9GAwJ75n4iED5FXmvveGNE72NW4Pi9s133hMLUmurUMuG17GoBvUpwoVUMf7QJx4WKmML3aKViy",
  "key25": "4xmfEtWXL3S2jhtGYM4CD7kSD3g98SErc8yaNaHMXKFJVLBhV5ndDjG5stucGBMz7RhjNZ1DCb1GGVCg9DdicuwU",
  "key26": "2KV6FDWMvKGQJE747zegTLRYA5FMnBKiE3sPEvVQa4qomePU4gE3kj4MBFYv3ZSrth63Std5dKZ2AEX2yYEs6VRb",
  "key27": "3xZXjPxV4NiV7S7qEMUpbbDSZeGbRgv5aE3ERe3fQTbUuqpeiXV7Y35JGFTyqowSmBMLkeEwwofVTi3UEDuLpwD2",
  "key28": "33TZRaHrm1ZAmKJ4eCXZ1ZsHkBfLSXSCFhNaFWC7spcH8cHxmH6oiESYYFa5eMpRdp87er53Nr6eJpKChQL3Hwur",
  "key29": "3DVCsq7upervkSRnp8mHtRupxKRqCzbq5nXUvUPGc983M37kRLzsxFiWdHcdaEt3TiEVZqwUqGHHA2TCYhJJWcYR",
  "key30": "5PRpCcNkapWwoYi5Gjuix6Er8wa8DHEAFG6cvXBxshPKsrgtSZkCW74sWnGpzuyZJehiBa4p537QvrMEKDtLqcZy",
  "key31": "3cEixvhbUsA7QEk6AyfwShTHGZhXXvpLTnosQf9FB1CV5qG1o8DjnZuG8gyDvyX3dBtAnectsSqRaCCCGguDNshc",
  "key32": "2m8LQ6Z1j7WNrUmNFbrae9MUDZFfPmf6xAJSffN8QSHwWo461Ha33Zi2tR4kizMjf9GM4Br4CzNRXVpaeBrVPWuu",
  "key33": "56iFVvwdvjhbQ6AuJv7atTHNwvy6qKLE8TYva1jNTKCsQjXyoQ3LLArHeSayidWmRJ9bH8n1vCFKpNxs5PazXUfa",
  "key34": "QXric5Y8EuDtpBqyVt3Vjn3mpVpLekuCEVzgZ5D6u1CYcYgZX56AKUCbmhLnnsPYnoK4LttJKokMAGeBTFioCyd",
  "key35": "5Q6TpCu5oViqczT99Cd3s76Z9wTVrzx7BDJ1r43QzxEvg8vKcsGbdCwbGbATruXJ2N7hq9Z6MvLHC8cSpCF8wYUU",
  "key36": "2LoVkwvKK33X8u8qZweuS9sfaAJrUk3Ztf1vQW35EZeYYT6mGE2mVF4qzxewTLBXXkvmGYZ1JpEw6RLsecSC7jj9",
  "key37": "3NvNH8anwc1UWkqrATBTc11nkwNDP3QbGRZFUcwCfSvydYvhsvbcEwXbN63ovBBfwuuBioSPspYFuH6Sxp17S5Tp",
  "key38": "XUjxH7dMCZYCzZuDNyAQjMRBUNPUrJ69vGPmNzrvAWWqSMHMXgRVEsv5r1tCzKRszDPfABGWo43LnxG9pwd7otW",
  "key39": "3qS14kQvXtKXg1f5WN3M9xrH1oe6RUfYsuYEvdXAAzARnDWcjciPU9RkASuBouFnoo4XEYA6ixdGLUFdMS3yZCEd",
  "key40": "3rcJ2kkUpwaM7ShLRyWarrzDGYxWLNnnfJ3iaNg4rWbgLzzNMTkPynXLKs7oFjGadJrhi6aewfKZ8sSPy4F33Vk",
  "key41": "5gA8D3jcF2oTCREMM19msoM55FcQJMF1bbt2dkq1352oPGS4FHo9o5qDJQ1eD29zTYeyMY7b2FRyzKdHB1eNdczw",
  "key42": "5493Mz7WCwqmCe6tUuGjYJ9WBWjNatiy7jBHoqbYhg1WY5MrFNbb5i2Rc53Ry4Y1LpWh6ecbTne7hQAgVf2CCprd",
  "key43": "2nsBSL3WBgvf6uK8X7JZUxxa6EeqyL5MfcA3mEcni62fZfAcLa6vLM2y8itDirvMXhn6cjoj6K9jooiQazV435W8"
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
