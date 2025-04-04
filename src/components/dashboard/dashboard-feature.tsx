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
    "3c7XWKPbR2wFdCHaRtRgCKKYwsSHXd3n5snYt8PmhR8DET17JvsCVkfaST2Dz8xfDnRwigHGMf5wJeJpU1pGK5nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4shnasWAgJEFtmY9epM5eTFoTVpkubgKA1HsXytwLy9LC8Q4yZJgksNoRMX7KJWDGdq2R2txT6kxmudtFzmZGEr",
  "key1": "4ghPsZ3Vx83PQPyc46XPr7UHLrcxY2DxkSuQsB4tKxbioaXNYF1iDQHBG5Ab8JXa81HZwEuTFuoB2iTTSK4VNW9C",
  "key2": "3698ZPDWuvbbWGADUTBEdS9aEYqaveuc8ggWy2fof5m5dNdmkA6QVwKmuGiYwBd1A8KYpEYnZ8uFDiS2YkAQaLG",
  "key3": "HPuMwxvx5Yby1VbKPt7M99SfjTARLZpAMvsermZsaZmSXxvvjgfqJCqsg2PERcXCtzZ4kTLeT5YcqDokoQrnvSz",
  "key4": "MJiJdTxVZyFTyWPZXKeTFYJWf7FMjEDoYgXRVuUk3opK5wyN145WPQZ244hxuWPzZZzUm34GAjdrPR9q2siegMh",
  "key5": "5ZtsSzwLRVLGm4D3NunED3kkAKTVPR5c6Bu8diu1h6YkzyX1uYqHLrknRcg8B2DNqAJVYTty4YtMmhXVJ2ra5otQ",
  "key6": "59S3T4mCYWD751cTwVV6ncQRwZXbScZ7Zf7XGzUjBywdr5Rn8UVXGsp6Hstu3ymfHWimqU1qoZNB9Ai7HT6x6KNa",
  "key7": "2g8x7ZpxArfXGDxyWWWMGivDGSc145vzWZXqPfjBYp4fBDZT8PiCX2hrVmerd5hDrELZKFLrnLAktDX297f7Jawn",
  "key8": "5qNiZRakhVRdDHFoScK7VDyNeNUEcPtG6w2kh4cwStQvmNhzLgjEJMTAyS6AB6hqtnRd24wqqruetPyUxVUnSEaR",
  "key9": "qqxZjJzqXkCtiEFVjSmpemG9J8ctxanCf23xANT4LY4RsBUcaaJj4XMQJWmwgZLRjGipMgEahBZWBCamf2c383d",
  "key10": "LNUsxe5pAqfFpmUsy29QM63xTEirGpsuGwoHLmJmtnYsopj3s3rbZyfqKb67tm1EzfP7XK9bcrxNgMnfprhVqR3",
  "key11": "2ym8kQgUF2BKnSJb4QwapZfXuuDqvpkQVAWbowWdpymoxyg1a71ys1vPWRMbZz6GAGHPuK9asjodybZSWkGaYwYR",
  "key12": "4AnCbLaXcEeL4VEePq4eGQoHY7NsJ4YUfPtP6qb8bb8fAdbEbZFuWuEABW7cu5KPrxkZMyLV5em4nxzX82E7CFQn",
  "key13": "Uu7g9SbGCxqxkNxuG1pPEZqBXT2AFB9GuCoZARjytfDzjVUueSKgcFpNMwSvRLzRjTGDHbWExxXDryrtSby75fb",
  "key14": "4dpDpt8cfigApZZaYpukzELuTqcbK47aQC4yu8PFQTr13kxfvzN1uvKQ8RARjojMsBLRQF8vzfZq8RnxhKqFBsEb",
  "key15": "2YkVAfCzfwyAdH1ReroWJvuKdVWDeyHRZcBCcf8ngHHujs48zdR1tDuJnBqzwzuzz36uKF8EYJvopJMbpez3BwDD",
  "key16": "2G7TWe62nbRL6qN8UE1PtbiCqjx51zzZUX5S9FjMMfuxS2CLfK1d51ANzo6TETVFFpkXzsAPwpcfBB641ZF461VD",
  "key17": "cDfBJZdjEHtqgsTWkcbxeatLAEMgPwFV4ThtknTUfVrCbsXjX7fQR8ur1rjGSu4fmPFA35yuMxXv2Y9pPkc7b8e",
  "key18": "4ZWRhiuA2jGNEbCLRcRA9XqWmvjLNa5rs9NLgEqRVmaRvzaiZMCR3r3yUsqFsyBWK3265GmoEYR4SKt1s4Bo1QaV",
  "key19": "5HHHZ2Lgq4borJLLdtsnoatAtyi6yeKEXErhRaeDBBKkZfQQUhtZVzTPSAARUH1UEQZrEZthEiHeTkUfVUbC49Ei",
  "key20": "459Y41Bg9qj9kSk3P25ohyuXkeqaSLcHoKyxPYYimcgt74useiXkmma3cfPitsjVZn4hCN2yLc9bgeeX4W8ZTL5y",
  "key21": "4pcnedt2PP8BPjtFnbWeoMkMP3YubMYZLuGSu5b2BJW86zcwCepeh7TE1kUwXhERzUnZMYCxiMSJp1a85r94W3cV",
  "key22": "3Z565uR85zBY5H1m7tJGZpXi8WyfLyHMFX6smwss3Xtys8Qat439sj26P9U9g83P3vgsz7ySV88v5txooN5W4nBW",
  "key23": "2ipqpZ3ugZ9QmWExJGEDjhb59VrQ9K72YUdNecAjdLrytfKkk5Jdic5mHXXXxJFtLtYKyWsNHywYGqVZjGmAp38J",
  "key24": "65kr4MQC2pjd8Z9Q8y8penzZjqZwRQq9QTyZkzdhDmyo2Q2iGnpL9wtEcDSEZAm43ehLtn8rhZXe1xxLk4rRzGwT",
  "key25": "4i8xhuNXZmSH9K2o4zVhi9STccin9fX8arm8aThxMfjhN53qn87xoenwf1eXus7EiQBnSVCR7TZY7a8YY5RCi41h",
  "key26": "5t9jUUxzKvANgemqrVRrwsehKCfjh4KsXPfshC1nKMttfvUnuVCrjWqYCLsemy73BYtiTjcc9o4rmtfS4enK3WVE",
  "key27": "5g2VaVU3dTkgTs3nzjgK7F5AHxudCL4uqrHSm96TCXS7uPum5C2sBgLLh3K8C9F888ZW1CPa4hSpvAHBtjWdjNo5",
  "key28": "4QDZFKuUKDZFA75s41QRSdohmNFxYKafTy48rehd7yfxsnnVnd3BkkXaCmAtdvw8UfhnC7i6kraTG74VuMH23nmS",
  "key29": "46Gx2FgkgHEgRXpiGuKitNgvqr993WvQjs5qnR7GMezaFk7YG2eeC96CM4N4gKy1YdXPXoTx3Bva7pf8YpnCc5bf",
  "key30": "dWV1LZwBE9n2bNvYsTbSKrEzDma8JJHsuaLwkHRekLxYpPftZhkYKPLnpnnf1gWgdvtgAksiki5gPC7PZgmvKE4",
  "key31": "4qGUEGpqTkMUQrYEcsgDzeA2dGMnHM1Zd5A3j44C9yZbtqvK2ZM4P57q2CnNG7F1ZPKQPuQrVDGSSZd7Xa7ixCnE",
  "key32": "3UoCJhR1Zw5W9onrjyum2PfggkBkx9jMZP7BL6cq7ojEeiY5ULHqrW4ZA6BAC8pLQZt69UE4NeWhYTkejjLdAASK",
  "key33": "63rw2vWEz3A25wcsrhFpY9afdSeG9ipqNpuHUsD5fmsNuEgfjvUYr1YXPbtZAo82i7Nbt586Qhk3SbXeDpLvV1gL",
  "key34": "3C6F48zFuhxzcwKSBLeH5hMPZoAVbRSkr1LkjQjDBynsMX8Q9cwAhoTxx6GozmkWdabzeiMmFmsGrRwp9R9dGLPs",
  "key35": "59W93Vh89QLvTuTQtqgzEthtvVtmJmT4GFc1RReDbtW5Z2S4bYqjjnj1fEvB1565tohSvFzR3HNkgBtwiST7NDhz",
  "key36": "3zhKta4uR3XxbCo1ZwDUykEWMQ1g2H3mKCxiUhZP2ev6daiVYyENmdqx5pCGcdNcN8hBcnW9ckGfUJkZ7gavwctV",
  "key37": "3wbQKmZh8TW9Sbfpzpsu2zAvMvzm6RRi53X8QETeZxZYyHQivufTsaiKZpWUvNCPfLZBwRT72UFqKRBvEhLea65R",
  "key38": "4wc7XYVN955ffPNHrDY2qatwkkaJWJPn6m31Q3d3WQ14fafYwaHX6EPyk52RD2RJSu77yPK1XGFk1odVffh5oTNE",
  "key39": "2FUNhdZZbaJ9qNnemRdFwHysxGtdcjXQqg6e7JvoamDqMmUzwqRjzw9z4ofE2GyZyjwLHdLpP9jx1pQEVc72W8Fp",
  "key40": "doKfvPBJFBVsvAdnq43fiACUmAv4jHNNLLgwhGXTdrH7NTyjnTxzugQfuvfrPdcPysZbARtxebJAre3vJ3xqpiK",
  "key41": "45a3uteeQ1RTaLDdrGJ3qGWRN5cwF3SQLEE4Ss8D9hkXiPJamSVFWaGX2dByWvuMSXnJEXeKntLwt5da2e2f23Wz",
  "key42": "3SFbBibVi2xiK4VH3M9epxeCAwV3K5hYypa26VVqtZmRQXC2sEXBuPTqvDq4KR93fDTBMErPP1zctUqWNuZjJ21r",
  "key43": "2j3qc6BL6URV1pJvHeaqRhC9sPnAn3RM1sqMWwkrPk14oEResGKwN9fDu17ujM8Se6ewUEsTtHKZScJp7itfA8iU",
  "key44": "2XdJ7kaN6wTS6nxVwtE6VcCrVYG6HRrDexibYf6gxqnxxXELHXnPuFXhXfynyCnE8S6WPjN48oLN6eZveTcU2eye",
  "key45": "3q6ac7mygE2QYCmkpFRmcaaKTDPVBF8D9zh98AdSFGjQKUCTxwDconK7yb8w2tmYCqz6notU2mNnAwtNDRHdTcCB",
  "key46": "4V2UJhmK2QhV9pUGsqxdTvp6mQJsbgsWpHryehXFZsudXbQmAerzZPoi2kHFJJ3mEUJK2eJdct7tV25aVhyy54yj"
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
